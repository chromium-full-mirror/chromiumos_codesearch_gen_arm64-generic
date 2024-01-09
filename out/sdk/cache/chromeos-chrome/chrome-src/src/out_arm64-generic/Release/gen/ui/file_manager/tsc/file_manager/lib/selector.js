// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { isDebugStoreEnabled } from '../common/js/util.js';
/**
 * A class implementing ReactiveController in order to provide an ergonomic
 * way to update Lit elements based on selected data.
 */
class SelectorController {
    constructor(host, value, subscribe) {
        this.host = host;
        this.value = value;
        this.subscribe = subscribe;
        this.host.addController(this);
    }
    hostConnected() {
        this.unsubscribe = this.subscribe((value) => {
            this.value = value;
            this.host.requestUpdate();
        });
    }
    hostDisconnected() {
        this.unsubscribe();
    }
}
/**
 * A node in the selector DAG (Directed Acyclic Graph). Used to efficiently
 * process selectors and eliminate redundant calculations and state updates. A
 * selector node essentially connects parent selectors through a `select()`
 * function that combines all of their parents' emitted values to form a new
 * value.
 *
 * Note: `SelectorNode` implements the `Selector` interface, allowing the store
 * to expose nodes as `Selector`s, hiding complexities related to
 * `SelectorNode`'s implementation.
 */
export class SelectorNode {
    /**
     * @param parents Either an array of Selectors or SelectorNodes whose values
     *     should be fed into the `select` function to calculate the selector's
     *     new value.
     * @param select The function that calculates the selector's new value once at
     *     least one its parents emits a new value or, initially, after the
     *     selector node is constructed. The arguments of select() must match the
     *     order and type of what is emitted by the parents. This typing match is
     *     not enforced here because SelectorNodes are only meant to be created by
     *     the Store. Users of the Store should use `combineXSelectors()` to
     * combine selectors.
     * @param name An optional human-readable name used for debugging purposes.
     *     Named selectors will log to the console when DEBUG_STORE is set,
     *     whenever they emit a new value.
     */
    constructor(parents, select, name) {
        this.select = select;
        this.name = name;
        /** Last value emitted by the selector. */
        this.value_ = undefined;
        /** List of selector's current subscribers. */
        this.subscribers_ = [];
        /** List of selector's current parents. */
        this.parents_ = [];
        /**
         * The depth of this node in the SelectorEmitter DAG. Used to ensure Selector
         * nodes are emitted in the correct order.
         *
         * Nodes of depth D+1 are only processed after all nodes of depth D have been
         * processed, starting from D=0.
         *
         * Only source nodes (nodes without parents) have depth=0;
         */
        this.depth = 0;
        /** List of selector's current children. */
        this.children = [];
        this.parents = parents;
    }
    /**
     * Creates a new source node (a node with no parents).
     *
     * The store's default selector should be a source node, but other data
     * sources can be registered as source nodes as well.
     *
     * Slice's default selectors are then connected to the store's source node,
     * and additional selector nodes can then be created from store and slices'
     * default selectors using `combineXSelectors()` (and resulting selectors can
     * be further combined using `combineXSelectors()`).
     */
    static createSourceNode(select, name) {
        return new SelectorNode([], select, name);
    }
    /**
     * Creates a selector node that doesn't have parents or select function. Used
     * by slices to create selectors that are not yet connected to the store but
     * that can be subscribed to before the store is constructed.
     *
     * In other words, disconnected nodes should eventually be connected to the
     * SelectorEmitter DAG and should retain their list of subscribers after doing
     * so.
     *
     * Disconnected nodes are exclusively used internally by slices and are not
     * meant to be used outside of it.
     */
    static createDisconnectedNode(name) {
        return new SelectorNode([], () => undefined, name);
    }
    /**
     * We use a getter for parents to make sure they are always retrieved as
     * SelectorNodes, even though they might be passed in as Selectors in the
     * `combineXSelectors()` functions.
     */
    get parents() {
        return this.parents_;
    }
    set parents(parents) {
        // Disconnect current parents, if any, before replacing them.
        this.disconnect_();
        this.parents_ = parents;
        // Connects this node to its new parents.
        for (const parent of parents) {
            parent.children.push(this);
            this.depth = Math.max(this.depth, parent.depth + 1);
        }
        // Calculate the node's initial value.
        this.emit();
    }
    /**
     * Disconnects itself from the DAG by deleting its connections with its
     * parents.
     */
    disconnect_() {
        // Disconnect node from its parents.
        this.parents.forEach(p => p.disconnectChild_(this));
        this.parents_ = [];
    }
    /** Disconnects the node from one of its children. */
    disconnectChild_(node) {
        this.children.splice(this.children.indexOf(node), 1);
    }
    /**
     * Sets a new value, if such new value is different from the current. If
     * it's different, returns true and notify subscribers. Else, returns false.
     */
    emit() {
        const parentValues = this.parents.map(p => p.get());
        const newValue = this.select(...parentValues);
        if (newValue === this.value_) {
            return false;
        }
        if (isDebugStoreEnabled() && this.name) {
            console.log(`Selector '${this.name}' emitted a new value:`);
            console.log(newValue);
        }
        this.value_ = newValue;
        for (const subscriber of this.subscribers_) {
            try {
                subscriber(newValue);
            }
            catch (e) {
                console.error(e);
            }
        }
        return true;
    }
    get() {
        return this.value_;
    }
    subscribe(cb) {
        this.subscribers_.push(cb);
        return () => this.subscribers_.splice(this.subscribers_.indexOf(cb), 1);
    }
    createController(host) {
        return new SelectorController(host, this.get(), this.subscribe.bind(this));
    }
    delete() {
        if (this.children.length > 0) {
            throw new Error('Attempting to delete node that still has children.');
        }
        this.disconnect_();
        this.subscribers_ = [];
    }
}
/** Create a selector whose value derives from a single Selector. */
export function combine1Selector(combineFunction, s1, name) {
    return new SelectorNode([s1], combineFunction, name);
}
/** Create a selector whose value derives from 2 Selectors. */
export function combine2Selectors(combineFunction, s1, s2, name) {
    return new SelectorNode([s1, s2], combineFunction, name);
}
/** Create a selector whose value derives from 3 Selectors. */
export function combine3Selectors(combineFunction, s1, s2, s3, name) {
    return new SelectorNode([s1, s2, s3], combineFunction, name);
}
/** Create a selector whose value derives from 4 Selectors. */
export function combine4Selectors(combineFunction, s1, s2, s3, s4, name) {
    return new SelectorNode([s1, s2, s3, s4], combineFunction, name);
}
/**
 * A DAG (Directed Acyclic Graph) representation of chains of selectors where
 * one selector only emits if at least one of their parents has emitted, while
 * also guaranteeing that, when multiple parents of a given node emit, their
 * child only emits a single time.
 */
export class SelectorEmitter {
    constructor() {
        /** Source nodes. I.e., nodes with no parents. */
        this.sourceNodes_ = [];
    }
    /** Connect source node to the DAG. */
    addSource(node) {
        this.sourceNodes_.push(node);
    }
    /**
     * Propagates changes from sourceNodes to the rest of the DAG.
     *
     * Nodes of depth D+1 are only processed after all nodes of depth D have been
     * processed, starting from D=0.
     *
     * This method ensures selectors are evaluated efficiently by:
     * - Only evaluating nodes if at least one of their parents has emitted a new
     * value;
     * - Ensuring each node only emits once per call to `processChange()` unlike a
     * naive implementation that would emit every time a parent emitted a new
     * value (meaning the node would emit multiple times per iteration if it had
     * multiple emitting parents).
     */
    processChange() {
        const toExplore = [...this.sourceNodes_];
        while (toExplore.length > 0) {
            const node = toExplore.pop();
            // Only traverse children if a new value is emitted. Children with
            // multiple parents might still be enqueued by the remaining parents.
            if (node.emit()) {
                toExplore.push(...node.children);
                // TODO(300209290): use heap instead.
                // Ensure nodes are explored in ascending order of depth.
                toExplore.sort((a, b) => b.depth - a.depth);
            }
        }
    }
}

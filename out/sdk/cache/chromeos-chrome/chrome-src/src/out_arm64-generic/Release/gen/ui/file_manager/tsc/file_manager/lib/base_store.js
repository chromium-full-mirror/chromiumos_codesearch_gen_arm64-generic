// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ConcurrentActionInvalidatedError, isActionsProducer } from './actions_producer.js';
import { SelectorEmitter, SelectorNode } from './selector.js';
/**
 * Slices represent a part of the state that is nested directly under the root
 * state, aggregating its reducers and selectors.
 * @template State The shape of the store's root state.
 * @template LocalState The shape of this slice.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export class Slice {
    /**
     * @param name The prefix to be used when registering action types with
     *     this slice.
     */
    constructor(name) {
        this.name = name;
        /**
         * Reducers registered with this slice.
         * Only one reducer per slice can be associated with a given action type.
         */
        this.reducers = new Map();
        /**
         * The slice's default selector - a selector that is created automatically
         * when the slice is constructed. It selects the slice's part of the state.
         */
        this.selector = SelectorNode.createDisconnectedNode(this.name);
    }
    /**
     * Returns the full action name given by prepending the slice's name to the
     * given action type (the full name is formatted as "[SLICE_NAME] TYPE").
     *
     * If the given action type is already the full name, it's returned without
     * any changes.
     *
     * Note: the only valid scenario where the given type is the full name is when
     * registering a reducer for an action primarily registered in another slice.
     */
    prependSliceName_(type) {
        const isFullName = type[0] === '[';
        return isFullName ? type : `[${this.name}] ${type}`;
    }
    /**
     * Returns an action factory for the added reducer.
     * @param localType The name of the action handled by this reducer. It should
     *     be either a new action, (e.g., 'do-thing') in which case it will get
     *     prefixed with the slice's name (e.g., '[sliceName] do-thing'), or an
     *     existing action from another slice (e.g., `someActionFactory.type`).
     * @returns A callable action factory that also holds the type and payload
     *     typing of the actions it produces. Those can be used to register
     *     reducers in other slices with the same action type.
     */
    addReducer(localType, reducer) {
        const type = this.prependSliceName_(localType);
        if (this.reducers.get(type)) {
            throw new Error('Attempting to register multiple reducers ' +
                `within slice for the same action type: ${type}`);
        }
        this.reducers.set(type, reducer);
        const actionFactory = (payload) => ({ type, payload });
        // Include action type and payload typing so different slices can register
        // reducers for the same action type.
        actionFactory.type = type;
        actionFactory.PAYLOAD = null;
        return actionFactory;
    }
}
/**
 * A generic datastore for the state of a page, where the state is publicly
 * readable but can only be modified by dispatching an Action.
 *
 * The Store should be extended by specifying `StateType`, the app state type
 * associated with the store.
 */
export class BaseStore {
    constructor(state, slices) {
        /**
         * A map of action names to reducers handled by the store.
         */
        this.reducers_ = new Map();
        /**
         * Whether the Store has been initialized. See init() method to initialize.
         */
        this.initialized_ = false;
        /**
         * Batch mode groups multiple Action mutations and only notify the observes
         * at the end of the batch. See beginBatchUpdate() and endBatchUpdate()
         * methods.
         */
        this.batchMode_ = false;
        /**
         * The DAG representation of selectors held by the store. It ensures
         * selectors are updated in an efficient manner. For more information,
         * please see the `SelectorEmitter` class documentation.
         */
        this.selectorEmitter_ = new SelectorEmitter();
        this.state_ = state;
        this.queuedActions_ = [];
        this.observers_ = [];
        this.initialized_ = false;
        this.batchMode_ = false;
        const sliceNames = new Set(slices.map(slice => slice.name));
        if (sliceNames.size !== slices.length) {
            throw new Error('One or more given slices have the same name. ' +
                'Please ensure slices are uniquely named: ' +
                [...sliceNames].join(', '));
        }
        // Connect the default root selector to the Selector Emitter.
        const rootSelector = SelectorNode.createSourceNode(() => this.state_);
        this.selectorEmitter_.addSource(rootSelector);
        this.selector = rootSelector;
        for (const slice of slices) {
            // Connect the slice's default selector to the store's.
            slice.selector.select = (state) => state[slice.name];
            slice.selector.parents = [rootSelector];
            // Populate reducers with slice.
            for (const [type, reducer] of slice.reducers.entries()) {
                const reducerList = this.reducers_.get(type);
                if (!reducerList) {
                    this.reducers_.set(type, [reducer]);
                }
                else {
                    reducerList.push(reducer);
                }
            }
        }
    }
    /**
     * Marks the Store as initialized.
     * While the Store is not initialized, no action is processed and no observes
     * are notified.
     *
     * It should be called by the app's initialization code.
     */
    init(initialState) {
        this.state_ = initialState;
        this.queuedActions_.forEach((action) => {
            this.dispatchInternal_(action);
        });
        this.initialized_ = true;
        this.selectorEmitter_.processChange();
        this.notifyObservers_(this.state_);
    }
    isInitialized() {
        return this.initialized_;
    }
    /**
     * Subscribe to Store changes/updates.
     * @param observer Callback called whenever the Store is updated.
     * @returns callback to unsubscribe the observer.
     */
    subscribe(observer) {
        this.observers_.push(observer);
        return this.unsubscribe.bind(this, observer);
    }
    /**
     * Removes the observer which will stop receiving Store updates.
     * @param observer The instance that was observing the store.
     */
    unsubscribe(observer) {
        // Create new copy of `observers_` to ensure elements are not removed
        // from the array in the middle of the loop in `notifyObservers_()`.
        this.observers_ = this.observers_.filter(o => o !== observer);
    }
    /**
     * Begin a batch update to store data, which will disable updates to the
     * observers until `endBatchUpdate()` is called. This is useful when a single
     * UI operation is likely to cause many sequential model updates.
     */
    beginBatchUpdate() {
        this.batchMode_ = true;
    }
    /**
     * End a batch update to the store data, notifying the observers of any
     * changes which occurred while batch mode was enabled.
     */
    endBatchUpdate() {
        this.batchMode_ = false;
        this.notifyObservers_(this.state_);
    }
    /** @returns the current state of the store.  */
    getState() {
        return this.state_;
    }
    /**
     * Dispatches an Action to the Store.
     *
     * For synchronous actions it sends the action to the reducers, which updates
     * the Store state, then the Store notifies all subscribers.
     * If the Store isn't initialized, the action is queued and dispatched to
     * reducers during the initialization.
     */
    dispatch(action) {
        if (isActionsProducer(action)) {
            this.consumeProducedActions_(action);
            return;
        }
        if (!this.initialized_) {
            this.queuedActions_.push(action);
            return;
        }
        this.dispatchInternal_(action);
    }
    /** Synchronously call apply the `action` by calling the reducer.  */
    dispatchInternal_(action) {
        this.reduce(action);
    }
    /**
     * Consumes the produced actions from the actions producer.
     * It dispatches each generated action.
     */
    async consumeProducedActions_(actionsProducer) {
        while (true) {
            try {
                const { done, value } = await actionsProducer.next();
                // Accept undefined to accept empty `yield;` or `return;`.
                // The empty `yield` is useful to allow the generator to be stopped at
                // any arbitrary point.
                if (value !== undefined) {
                    this.dispatch(value);
                }
                if (done) {
                    return;
                }
            }
            catch (error) {
                if (isInvalidationError(error)) {
                    // This error is expected when the actionsProducer has been
                    // invalidated.
                    return;
                }
                console.warn('Failure executing actions producer', error);
            }
        }
    }
    /** Apply the `action` to the Store by calling the reducer.  */
    reduce(action) {
        if (window.DEBUG_STORE) {
            console.groupCollapsed(`Action: ${action.type}`);
            console.dir(action.payload);
        }
        const reducers = this.reducers_.get(action.type);
        if (!reducers || reducers.length === 0) {
            console.error(`No registered reducers for action: ${action.type}`);
            return;
        }
        this.state_ = reducers.reduce((state, reducer) => reducer(state, action.payload), this.state_);
        // Batch notifications until after all initialization queuedActions are
        // resolved.
        if (this.initialized_ && !this.batchMode_) {
            this.notifyObservers_(this.state_);
        }
        if (this.selector.get() !== this.state_) {
            this.selectorEmitter_.processChange();
        }
        if (window.DEBUG_STORE) {
            console.groupEnd();
        }
    }
    /** Notify observers with the current state. */
    notifyObservers_(state) {
        this.observers_.forEach(o => {
            try {
                o.onStateChanged(state);
            }
            catch (error) {
                // Subscribers shouldn't fail, here we only log and continue to all
                // other subscribers.
                console.error(error);
            }
        });
    }
}
/** Returns true when the error is a ConcurrentActionInvalidatedError. */
function isInvalidationError(error) {
    if (!error) {
        return false;
    }
    if (error instanceof ConcurrentActionInvalidatedError) {
        return true;
    }
    // Rollup sometimes duplicate the definition of error class so the
    // `instanceof` above fail in this condition.
    if (error.constructor?.name === 'ConcurrentActionInvalidatedError') {
        return true;
    }
    return false;
}

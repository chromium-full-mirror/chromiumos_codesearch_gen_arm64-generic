// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { setSeaPenStore } from 'chrome://resources/ash/common/sea_pen/sea_pen_store.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { PersonalizationStore } from './personalization_store.js';
/**
 * An adapter class that implements all of the public methods/properties of
 * SeaPenStore type. Used to delegate state and events between Personalization
 * and SeaPen.
 */
export class SeaPenStoreAdapter {
    static initSeaPenStore() {
        setSeaPenStore(new SeaPenStoreAdapter());
    }
    constructor() {
        this.observers_ = new Set();
        const personalizationStore = PersonalizationStore.getInstance();
        assert(personalizationStore.isInitialized(), `${PersonalizationStore.name} must be initialized`);
        this.priorState_ = this.data;
        personalizationStore.addObserver(this);
    }
    get data() {
        return PersonalizationStore.getInstance().data.wallpaper.seaPen;
    }
    init(_) {
        assertNotReached(`${SeaPenStoreAdapter.name} must not be init directly`);
    }
    isInitialized() {
        return PersonalizationStore.getInstance().isInitialized();
    }
    addObserver(observer) {
        this.observers_.add(observer);
    }
    removeObserver(observer) {
        this.observers_.delete(observer);
    }
    hasObserver(observer) {
        return this.observers_.has(observer);
    }
    beginBatchUpdate() {
        PersonalizationStore.getInstance().beginBatchUpdate();
    }
    endBatchUpdate() {
        PersonalizationStore.getInstance().endBatchUpdate();
    }
    dispatchAsync(action) {
        return PersonalizationStore.getInstance().dispatchAsync(action);
    }
    dispatch(action) {
        return PersonalizationStore.getInstance().dispatch(action);
    }
    onStateChanged({ wallpaper: { seaPen } }) {
        if (seaPen === this.priorState_) {
            return;
        }
        this.priorState_ = seaPen;
        for (const observer of this.observers_) {
            observer.onStateChanged(seaPen);
        }
    }
}

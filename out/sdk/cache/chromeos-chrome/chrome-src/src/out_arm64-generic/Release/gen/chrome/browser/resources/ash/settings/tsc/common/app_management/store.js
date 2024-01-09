// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { createEmptyState } from 'chrome://resources/cr_components/app_management/util.js';
import { Store } from 'chrome://resources/js/store.js';
import { reduceAction } from './reducers.js';
let instance = null;
export class AppManagementStore extends Store {
    static getInstance() {
        return instance || (instance = new AppManagementStore());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    constructor() {
        super(createEmptyState(), reduceAction);
    }
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { NativeEventTarget as EventTarget } from 'chrome://resources/ash/common/event_target.js';
import { AndroidAppListModel } from './android_app_list_model.js';
/**
 * @param appNames List app names to be added.
 * @return fake for unittests.
 */
export function createFakeAndroidAppListModel(appNames) {
    /**
     * AndroidAppListModel fake.
     */
    class FakeAndroidAppListModel extends EventTarget {
        /**
         * @param appNames List app names to be added.
         */
        constructor(appNames) {
            super();
            this.apps_ = [];
            for (const appName of appNames) {
                this.apps_.push({
                    name: appName,
                    packageName: '',
                    activityName: '',
                });
            }
        }
        /**
         * @return Number of picker apps.
         */
        length() {
            return this.apps_.length;
        }
        /**
         * @param index Index of the picker app to be retrieved.
         * @return The value of the
         *     |index|-th picker app.
         */
        item(index) {
            return this.apps_[index];
        }
    }
    const model = new FakeAndroidAppListModel(appNames);
    return model;
}

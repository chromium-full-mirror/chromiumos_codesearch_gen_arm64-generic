// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { dedupingMixin } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { observeESimManager } from './mojo_interface_provider.js';
export const ESimManagerListenerMixin = dedupingMixin((superClass) => {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    class ESimManagerListenerMixin extends superClass {
        constructor() {
            super(...arguments);
            this.observer_ = null;
        }
        connectedCallback() {
            super.connectedCallback();
            observeESimManager(this);
        }
        // ESimManagerObserver methods. Override these in the implementation.
        onAvailableEuiccListChanged() { }
        onProfileListChanged() { }
        onEuiccChanged() { }
        onProfileChanged() { }
    }
    return ESimManagerListenerMixin;
});

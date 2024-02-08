// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { OobeI18nBehavior } from './behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './quick_start_entry_point.html.js';
const QuickStartEntryPointBase = mixinBehaviors([OobeI18nBehavior], PolymerElement);
export class QuickStartEntryPoint extends QuickStartEntryPointBase {
    static get is() {
        return 'quick-start-entry-point';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            quickStartTextKey: {
                type: String,
                value: '',
            },
        };
    }
    quickStartButtonClicked() {
        this.dispatchEvent(new CustomEvent('activate-quick-start', {
            bubbles: true,
            composed: true,
            detail: { enableBluetooth: false },
        }));
    }
}
customElements.define(QuickStartEntryPoint.is, QuickStartEntryPoint);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/ash/common/cr_elements/cr_toggle/cr_toggle.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { pageHandler } from './page_handler.js';
import { getTemplate } from './privacy_indicator_app.html.js';
/**
 * @fileoverview
 * 'privacy-indicator-app' defines the UI for the privacy indicator app
 * in the status area test page.
 */
export class PrivacyIndicatorAppElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.appid = '';
        this.name = '';
        this.useCamera = false;
        this.useMicrophone = false;
    }
    static get is() {
        return 'privacy-indicator-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            id: {
                type: String,
                value: '',
            },
            name: {
                type: String,
                value: '',
            },
            useCamera: {
                type: Boolean,
                value: false,
            },
            useMicrophone: {
                type: Boolean,
                value: false,
            },
        };
    }
    onTriggerPrivacyIndicators(e) {
        e.stopPropagation();
        if (!this.appid || !this.name) {
            return;
        }
        pageHandler.triggerPrivacyIndicators(this.appid, this.name, this.useCamera, this.useMicrophone);
    }
}
customElements.define(PrivacyIndicatorAppElement.is, PrivacyIndicatorAppElement);

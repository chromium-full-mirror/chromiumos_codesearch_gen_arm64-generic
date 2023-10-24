// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '../strings.m.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { MetricsContext, PrintSettingsUiBucket } from '../metrics.js';
import { getTemplate } from './more_settings.html.js';
class PrintPreviewMoreSettingsElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.metrics_ = MetricsContext.printSettingsUi();
    }
    static get is() {
        return 'print-preview-more-settings';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            settingsExpandedByUser: {
                type: Boolean,
                notify: true,
            },
            disabled: {
                type: Boolean,
                reflectToAttribute: true,
            },
        };
    }
    /**
     * Toggles the expand button within the element being listened to.
     */
    toggleExpandButton_(e) {
        // The expand button handles toggling itself.
        const expandButtonTag = 'CR-EXPAND-BUTTON';
        if (e.target.tagName === expandButtonTag) {
            return;
        }
        if (!e.currentTarget.hasAttribute('actionable')) {
            return;
        }
        const expandButton = e.currentTarget.querySelector(expandButtonTag);
        assert(expandButton);
        expandButton.expanded = !expandButton.expanded;
        this.metrics_.record(this.settingsExpandedByUser ?
            PrintSettingsUiBucket.MORE_SETTINGS_CLICKED :
            PrintSettingsUiBucket.LESS_SETTINGS_CLICKED);
    }
}
customElements.define(PrintPreviewMoreSettingsElement.is, PrintPreviewMoreSettingsElement);

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for indicating policies by type.
 * Forked from
 * ui/webui/resources/cr_elements/policy/cr_policy_indicator.ts
 */
import '../cr_hidden_style.css.js';
import './cr_tooltip_icon.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './cr_policy_indicator.html.js';
import { CrPolicyIndicatorMixin } from './cr_policy_indicator_mixin.js';
const CrPolicyIndicatorElementBase = CrPolicyIndicatorMixin(PolymerElement);
export class CrPolicyIndicatorElement extends CrPolicyIndicatorElementBase {
    static get is() {
        return 'cr-policy-indicator';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            iconAriaLabel: String,
            indicatorTooltip_: {
                type: String,
                computed: 'getIndicatorTooltip_(indicatorType, indicatorSourceName)',
            },
        };
    }
    /**
     * @param indicatorSourceName The name associated with the indicator.
     *     See chrome.settingsPrivate.PrefObject.controlledByName
     * @return The tooltip text for |type|.
     */
    getIndicatorTooltip_(indicatorType, indicatorSourceName) {
        return this.getIndicatorTooltip(indicatorType, indicatorSourceName);
    }
}
customElements.define(CrPolicyIndicatorElement.is, CrPolicyIndicatorElement);

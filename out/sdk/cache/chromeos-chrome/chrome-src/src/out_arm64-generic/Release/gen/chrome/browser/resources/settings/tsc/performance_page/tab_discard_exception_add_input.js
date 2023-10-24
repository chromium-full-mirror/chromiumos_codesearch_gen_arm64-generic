// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { ListPropertyUpdateMixin } from 'chrome://resources/cr_elements/list_property_update_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { HighEfficiencyModeExceptionListAction, PerformanceMetricsProxyImpl } from './performance_metrics_proxy.js';
import { getTemplate } from './tab_discard_exception_add_input.html.js';
import { TAB_DISCARD_EXCEPTIONS_PREF, TabDiscardExceptionValidationMixin } from './tab_discard_exception_validation_mixin.js';
const TabDiscardExceptionAddInputElementBase = TabDiscardExceptionValidationMixin(ListPropertyUpdateMixin(PrefsMixin(PolymerElement)));
export class TabDiscardExceptionAddInputElement extends TabDiscardExceptionAddInputElementBase {
    constructor() {
        super(...arguments);
        this.metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
    }
    static get is() {
        return 'tab-discard-exception-add-input';
    }
    static get template() {
        return getTemplate();
    }
    submit() {
        assert(!this.submitDisabled);
        const rule = this.rule.trim();
        this.appendPrefListItem(TAB_DISCARD_EXCEPTIONS_PREF, rule);
        this.metricsProxy_.recordExceptionListAction(HighEfficiencyModeExceptionListAction.ADD_MANUAL);
    }
}
customElements.define(TabDiscardExceptionAddInputElement.is, TabDiscardExceptionAddInputElement);

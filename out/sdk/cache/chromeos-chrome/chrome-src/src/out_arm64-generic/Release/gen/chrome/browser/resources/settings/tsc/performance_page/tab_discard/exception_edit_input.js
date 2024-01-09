// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { ListPropertyUpdateMixin } from 'chrome://resources/cr_elements/list_property_update_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { MemorySaverModeExceptionListAction, PerformanceMetricsProxyImpl } from '../performance_metrics_proxy.js';
import { getTemplate } from './exception_edit_input.html.js';
import { ExceptionValidationMixin, TAB_DISCARD_EXCEPTIONS_PREF } from './exception_validation_mixin.js';
const ExceptionEditInputElementBase = ExceptionValidationMixin(ListPropertyUpdateMixin(PrefsMixin(PolymerElement)));
export class ExceptionEditInputElement extends ExceptionEditInputElementBase {
    constructor() {
        super(...arguments);
        this.metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
    }
    static get is() {
        return 'tab-discard-exception-edit-input';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Represents the original rule that is being edited. When submit() is
             * called, it will be replaced by rule in the exception list.
             */
            ruleToEdit: { type: String, value: '' },
        };
    }
    ready() {
        super.ready();
        this.rule = this.ruleToEdit;
        this.submitDisabled = false;
    }
    submit() {
        assert(!this.submitDisabled);
        const rule = this.rule.trim();
        if (rule !== this.ruleToEdit) {
            if (this.getPref(TAB_DISCARD_EXCEPTIONS_PREF).value.includes(rule)) {
                // delete instead of update, otherwise there would be a duplicate
                this.deletePrefListItem(TAB_DISCARD_EXCEPTIONS_PREF, this.ruleToEdit);
            }
            else {
                this.updatePrefListItem(TAB_DISCARD_EXCEPTIONS_PREF, this.ruleToEdit, rule);
            }
        }
        this.metricsProxy_.recordExceptionListAction(MemorySaverModeExceptionListAction.EDIT);
    }
    setRuleToEditForTesting() {
        this.rule = this.ruleToEdit;
    }
}
customElements.define(ExceptionEditInputElement.is, ExceptionEditInputElement);

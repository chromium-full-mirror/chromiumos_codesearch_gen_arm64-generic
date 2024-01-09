// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import './exception_add_input.js';
import './exception_current_sites_list.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './exception_tabbed_add_dialog.html.js';
export var ExceptionAddDialogTabs;
(function (ExceptionAddDialogTabs) {
    ExceptionAddDialogTabs[ExceptionAddDialogTabs["CURRENT_SITES"] = 0] = "CURRENT_SITES";
    ExceptionAddDialogTabs[ExceptionAddDialogTabs["MANUAL"] = 1] = "MANUAL";
})(ExceptionAddDialogTabs || (ExceptionAddDialogTabs = {}));
const ExceptionTabbedAddDialogElementBase = PrefsMixin(PolymerElement);
export class ExceptionTabbedAddDialogElement extends ExceptionTabbedAddDialogElementBase {
    static get is() {
        return 'tab-discard-exception-tabbed-add-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            selectedTab_: {
                type: Number,
                value: ExceptionAddDialogTabs.MANUAL,
            },
            tabNames_: {
                type: Array,
                value: [
                    loadTimeData.getString('tabDiscardingExceptionsAddDialogCurrentTabs'),
                    loadTimeData.getString('tabDiscardingExceptionsAddDialogManual'),
                ],
            },
            submitDisabledList_: Boolean,
            submitDisabledManual_: Boolean,
        };
    }
    onSitesPopulated_(e) {
        if (e.detail.length > 0) {
            this.selectedTab_ = ExceptionAddDialogTabs.CURRENT_SITES;
        }
        this.$.dialog.showModal();
    }
    isAddCurrentSitesTabSelected_() {
        return this.selectedTab_ === ExceptionAddDialogTabs.CURRENT_SITES;
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onSubmitClick_() {
        this.$.dialog.close();
        if (this.isAddCurrentSitesTabSelected_()) {
            this.$.list.submit();
        }
        else {
            this.$.input.submit();
        }
    }
    isSubmitDisabled_() {
        if (this.isAddCurrentSitesTabSelected_()) {
            return this.submitDisabledList_;
        }
        return this.submitDisabledManual_;
    }
}
customElements.define(ExceptionTabbedAddDialogElement.is, ExceptionTabbedAddDialogElement);

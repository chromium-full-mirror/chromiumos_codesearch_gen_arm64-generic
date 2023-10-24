// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './support_tool_shared.css.js';
import './strings.m.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getTemplate } from './url_generator.html.js';
const UrlGeneratorElementBase = I18nMixin(PolymerElement);
export class UrlGeneratorElement extends UrlGeneratorElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = BrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'url-generator';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            caseId_: {
                type: String,
                value: '',
            },
            dataCollectors_: {
                type: Array,
                value: () => [],
            },
            generatedURL_: {
                type: String,
                value: '',
            },
            errorMessage_: {
                type: String,
                value: '',
            },
            buttonDisabled_: {
                type: Boolean,
                value: true,
            },
            copiedToastMessage_: {
                type: String,
                value: '',
            },
            hideTokenButton_: {
                type: Boolean,
                value: () => !loadTimeData.getBoolean('enableCopyTokenButton'),
            },
            selectAll_: {
                type: Boolean,
                value: false,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.browserProxy_.getAllDataCollectors().then((dataCollectors) => {
            this.dataCollectors_ = dataCollectors;
        });
    }
    onDataCollectorItemChange_() {
        // The button should be disabled if no data collector is selected.
        this.buttonDisabled_ = !this.hasDataCollectorSelected();
    }
    hasDataCollectorSelected() {
        for (let index = 0; index < this.dataCollectors_.length; index++) {
            if (this.dataCollectors_[index].isIncluded) {
                return true;
            }
        }
        return false;
    }
    showErrorMessageToast_(errorMessage) {
        this.errorMessage_ = errorMessage;
        this.$.errorMessageToast.show();
    }
    showGenerationResult(result, toastMessage) {
        if (result.success) {
            this.generatedResult_ = result.token;
            navigator.clipboard.writeText(this.generatedResult_);
            this.copiedToastMessage_ = toastMessage;
            this.$.copyToast.show();
            this.$.copyToast.focus();
        }
        else {
            this.showErrorMessageToast_(result.errorMessage);
        }
    }
    getSelectAllButtonLabel_(selectAllClicked) {
        if (selectAllClicked) {
            return this.i18n('selectNone');
        }
        else {
            return this.i18n('selectAll');
        }
    }
    onUrlGenerationResult_(result) {
        this.showGenerationResult(result, this.i18n('linkCopied'));
    }
    onTokenGenerationResult_(result) {
        this.showGenerationResult(result, this.i18n('tokenCopied'));
    }
    onCopyUrlClick_() {
        this.browserProxy_.generateCustomizedUrl(this.caseId_, this.dataCollectors_)
            .then(this.onUrlGenerationResult_.bind(this));
    }
    onCopyTokenClick_() {
        this.browserProxy_.generateSupportToken(this.dataCollectors_)
            .then(this.onTokenGenerationResult_.bind(this));
    }
    onErrorMessageToastCloseClicked_() {
        this.$.errorMessageToast.hide();
    }
    onSelectAllClick_() {
        this.selectAll_ = !this.selectAll_;
        // Update this.dataCollectors_ to reflect the selection choice.
        for (let index = 0; index < this.dataCollectors_.length; index++) {
            // Mutate the array observably. See:
            // https://polymer-library.polymer-project.org/3.0/docs/devguide/data-system#make-observable-changes
            this.set(`dataCollectors_.${index}.isIncluded`, this.selectAll_);
        }
        this.onDataCollectorItemChange_();
    }
}
customElements.define(UrlGeneratorElement.is, UrlGeneratorElement);

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import './advanced_settings_item.js';
import './print_preview_search_box.js';
import './print_preview_shared.css.js';
import './print_preview_vars.css.js';
import '../strings.m.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { removeHighlights } from 'chrome://resources/js/search_highlight_utils.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { MetricsContext, PrintSettingsUiBucket } from '../metrics.js';
import { getTemplate } from './advanced_settings_dialog.html.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewAdvancedSettingsDialogElementBase = I18nMixin(SettingsMixin(PolymerElement));
export class PrintPreviewAdvancedSettingsDialogElement extends PrintPreviewAdvancedSettingsDialogElementBase {
    constructor() {
        super(...arguments);
        this.highlights_ = [];
        this.bubbles_ = new Map();
        this.metrics_ = MetricsContext.printSettingsUi();
    }
    static get is() {
        return 'print-preview-advanced-settings-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            destination: Object,
            searchQuery_: {
                type: Object,
                value: null,
            },
            hasMatching_: {
                type: Boolean,
                notify: true,
                computed: 'computeHasMatching_(searchQuery_)',
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('keydown', e => this.onKeydown_(e));
    }
    connectedCallback() {
        super.connectedCallback();
        this.metrics_.record(PrintSettingsUiBucket.ADVANCED_SETTINGS_DIALOG_SHOWN);
        this.$.dialog.showModal();
    }
    onKeydown_(e) {
        e.stopPropagation();
        const searchInput = this.$.searchBox.getSearchInput();
        const eventInSearchBox = e.composedPath().includes(searchInput);
        if (e.key === 'Escape' &&
            (!eventInSearchBox || !searchInput.value.trim())) {
            this.$.dialog.cancel();
            e.preventDefault();
            return;
        }
        if (e.key === 'Enter' && !eventInSearchBox) {
            const activeElementTag = e.composedPath()[0].tagName;
            if (['CR-BUTTON', 'SELECT'].includes(activeElementTag)) {
                return;
            }
            this.onApplyButtonClick_();
            e.preventDefault();
            return;
        }
    }
    /**
     * @return Whether there is more than one vendor item to display.
     */
    hasMultipleItems_() {
        return this.destination.capabilities.printer.vendor_capability.length > 1;
    }
    /**
     * @return Whether there is a setting matching the query.
     */
    computeHasMatching_() {
        if (!this.shadowRoot) {
            return true;
        }
        removeHighlights(this.highlights_);
        this.bubbles_.forEach((_number, bubble) => bubble.remove());
        this.highlights_ = [];
        this.bubbles_.clear();
        const listItems = this.shadowRoot.querySelectorAll('print-preview-advanced-settings-item');
        let hasMatch = false;
        listItems.forEach(item => {
            const matches = item.hasMatch(this.searchQuery_);
            item.hidden = !matches;
            hasMatch = hasMatch || matches;
            this.highlights_.push(...item.updateHighlighting(this.searchQuery_, this.bubbles_));
        });
        return hasMatch;
    }
    /**
     * @return Whether the no matching settings hint should be shown.
     */
    shouldShowHint_() {
        return !!this.searchQuery_ && !this.hasMatching_;
    }
    onCloseOrCancel_() {
        if (this.searchQuery_) {
            this.$.searchBox.setValue('');
        }
        if (this.$.dialog.getNative().returnValue === 'success') {
            this.metrics_.record(PrintSettingsUiBucket.ADVANCED_SETTINGS_DIALOG_CANCELED);
        }
    }
    onCancelButtonClick_() {
        this.$.dialog.cancel();
    }
    onApplyButtonClick_() {
        const settingsValues = {};
        const itemList = this.shadowRoot.querySelectorAll('print-preview-advanced-settings-item');
        itemList.forEach(item => {
            settingsValues[item.capability.id] = item.getCurrentValue();
        });
        this.setSetting('vendorItems', settingsValues);
        this.$.dialog.close();
    }
    close() {
        this.$.dialog.close();
    }
    isSearching_() {
        return this.searchQuery_ ? 'searching' : '';
    }
}
customElements.define(PrintPreviewAdvancedSettingsDialogElement.is, PrintPreviewAdvancedSettingsDialogElement);

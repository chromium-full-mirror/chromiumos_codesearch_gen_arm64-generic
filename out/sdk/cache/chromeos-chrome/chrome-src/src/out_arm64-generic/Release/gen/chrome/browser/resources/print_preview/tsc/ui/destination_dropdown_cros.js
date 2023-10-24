// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
// TODO(gavinwill): Remove iron-dropdown dependency https://crbug.com/1082587.
import 'chrome://resources/polymer/v3_0/iron-dropdown/iron-dropdown.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/iron-media-query/iron-media-query.js';
import './print_preview_vars.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ERROR_STRING_KEY_MAP, getPrinterStatusIcon } from '../data/printer_status_cros.js';
import { getTemplate } from './destination_dropdown_cros.html.js';
const PrintPreviewDestinationDropdownCrosElementBase = I18nMixin(PolymerElement);
export class PrintPreviewDestinationDropdownCrosElement extends PrintPreviewDestinationDropdownCrosElementBase {
    constructor() {
        super(...arguments);
        this.opened_ = false;
        this.dropdownRefitPending_ = false;
    }
    static get is() {
        return 'print-preview-destination-dropdown-cros';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            value: Object,
            itemList: {
                type: Array,
                observer: 'enqueueDropdownRefit_',
            },
            disabled: {
                type: Boolean,
                value: false,
                observer: 'updateTabIndex_',
                reflectToAttribute: true,
            },
            driveDestinationKey: String,
            noDestinations: Boolean,
            pdfPrinterDisabled: Boolean,
            pdfDestinationKey: String,
            destinationIcon: String,
            isDarkModeActive_: Boolean,
            /**
             * Index of the highlighted item in the dropdown.
             */
            highlightedIndex_: Number,
            dropdownLength_: {
                type: Number,
                computed: 'computeDropdownLength_(itemList, pdfPrinterDisabled, ' +
                    'driveDestinationKey, noDestinations)',
            },
            destinationStatusText: String,
        };
    }
    ready() {
        super.ready();
        this.addEventListener('mousemove', e => this.onMouseMove_(e));
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateTabIndex_();
    }
    focus() {
        this.$.destinationDropdown.focus();
    }
    getAriaDescription_() {
        return this.destinationStatusText.toString();
    }
    fireDropdownValueSelected_(element) {
        this.dispatchEvent(new CustomEvent('dropdown-value-selected', { bubbles: true, composed: true, detail: element }));
    }
    /**
     * Enqueues a task to refit the iron-dropdown if it is open.
     */
    enqueueDropdownRefit_() {
        const dropdown = this.shadowRoot.querySelector('iron-dropdown');
        if (!this.dropdownRefitPending_ && dropdown.opened) {
            this.dropdownRefitPending_ = true;
            setTimeout(() => {
                dropdown.refit();
                this.dropdownRefitPending_ = false;
            }, 0);
        }
    }
    openDropdown_() {
        if (this.disabled) {
            return;
        }
        this.highlightedIndex_ = this.getButtonListFromDropdown_().findIndex(item => item.value === this.value.key);
        this.shadowRoot.querySelector('iron-dropdown').open();
        this.opened_ = true;
    }
    closeDropdown_() {
        this.shadowRoot.querySelector('iron-dropdown').close();
        this.opened_ = false;
        this.highlightedIndex_ = -1;
    }
    /**
     * Highlight the item the mouse is hovering over. If the user uses the
     * keyboard, the highlight will shift. But once the user moves the mouse,
     * the highlight should be updated based on the location of the mouse
     * cursor.
     */
    onMouseMove_(event) {
        const item = event.composedPath()
            .find(elm => elm.classList && elm.classList.contains('list-item'));
        if (!item) {
            return;
        }
        this.highlightedIndex_ =
            this.getButtonListFromDropdown_().indexOf(item);
    }
    onClick_(event) {
        const dropdown = this.shadowRoot.querySelector('iron-dropdown');
        // Exit if path includes |dropdown| because event will be handled by
        // onSelect_.
        if (event.composedPath().includes(dropdown)) {
            return;
        }
        if (dropdown.opened) {
            this.closeDropdown_();
            return;
        }
        this.openDropdown_();
    }
    onSelect_(event) {
        this.dropdownValueSelected_(event.currentTarget);
    }
    onKeyDown_(event) {
        event.stopPropagation();
        const dropdown = this.shadowRoot.querySelector('iron-dropdown');
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
                this.onArrowKeyPress_(event.key);
                break;
            case 'Enter': {
                if (dropdown.opened) {
                    this.dropdownValueSelected_(this.getButtonListFromDropdown_()[this.highlightedIndex_]);
                    break;
                }
                this.openDropdown_();
                break;
            }
            case 'Escape': {
                if (dropdown.opened) {
                    this.closeDropdown_();
                    event.preventDefault();
                }
                break;
            }
        }
    }
    onArrowKeyPress_(eventKey) {
        const dropdown = this.shadowRoot.querySelector('iron-dropdown');
        const items = this.getButtonListFromDropdown_();
        if (items.length === 0) {
            return;
        }
        // If the dropdown is open, use the arrow key press to change which item is
        // highlighted in the dropdown. If the dropdown is closed, use the arrow key
        // press to change the selected destination.
        if (dropdown.opened) {
            const nextIndex = this.getNextItemIndexInList_(eventKey, this.highlightedIndex_, items.length);
            if (nextIndex === -1) {
                return;
            }
            this.highlightedIndex_ = nextIndex;
            items[this.highlightedIndex_].focus();
            return;
        }
        const currentIndex = items.findIndex(item => item.value === this.value.key);
        const nextIndex = this.getNextItemIndexInList_(eventKey, currentIndex, items.length);
        if (nextIndex === -1) {
            return;
        }
        this.fireDropdownValueSelected_(items[nextIndex]);
    }
    /**
     * @return -1 when the next item would be outside the list.
     */
    getNextItemIndexInList_(eventKey, currentIndex, numItems) {
        const nextIndex = eventKey === 'ArrowDown' ? currentIndex + 1 : currentIndex - 1;
        return nextIndex >= 0 && nextIndex < numItems ? nextIndex : -1;
    }
    dropdownValueSelected_(dropdownItem) {
        this.closeDropdown_();
        if (dropdownItem) {
            this.fireDropdownValueSelected_(dropdownItem);
        }
        this.$.destinationDropdown.focus();
    }
    /**
     * Returns list of all the visible items in the dropdown.
     */
    getButtonListFromDropdown_() {
        if (!this.shadowRoot) {
            return [];
        }
        const dropdown = this.shadowRoot.querySelector('iron-dropdown');
        return Array
            .from(dropdown.querySelectorAll('.list-item'))
            .filter(item => !item.hidden);
    }
    /**
     * Sets tabindex to -1 when dropdown is disabled to prevent the dropdown from
     * being focusable.
     */
    updateTabIndex_() {
        this.$.destinationDropdown.setAttribute('tabindex', this.disabled ? '-1' : '0');
    }
    /**
     * Determines if an item in the dropdown should be highlighted based on the
     * current value of |highlightedIndex_|.
     */
    getHighlightedClass_(itemValue) {
        const itemToHighlight = this.getButtonListFromDropdown_()[this.highlightedIndex_];
        return itemToHighlight && itemValue === itemToHighlight.value ?
            'highlighted' :
            '';
    }
    /**
     * Close the dropdown when focus is lost except when an item in the dropdown
     * is the element that received the focus.
     */
    onBlur_(event) {
        if (!this.getButtonListFromDropdown_().includes(event.relatedTarget)) {
            this.closeDropdown_();
        }
    }
    computeDropdownLength_() {
        if (this.noDestinations) {
            return 1;
        }
        if (!this.itemList) {
            return 0;
        }
        // + 1 for "See more"
        let length = this.itemList.length + 1;
        if (!this.pdfPrinterDisabled) {
            length++;
        }
        if (this.driveDestinationKey) {
            length++;
        }
        return length;
    }
    getPrinterStatusErrorString_(printerStatusReason) {
        const errorStringKey = ERROR_STRING_KEY_MAP.get(printerStatusReason);
        return errorStringKey ? this.i18n(errorStringKey) : '';
    }
    getPrinterStatusIcon_(printerStatusReason, isEnterprisePrinter) {
        return getPrinterStatusIcon(printerStatusReason, isEnterprisePrinter, this.isDarkModeActive_);
    }
}
customElements.define(PrintPreviewDestinationDropdownCrosElement.is, PrintPreviewDestinationDropdownCrosElement);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A polymer component that displays template query to search for
 * SeaPen wallpapers.
 */
import 'chrome://resources/ash/common/personalization_shared_icons.html.js';
import 'chrome://resources/ash/common/sea_pen/sea_pen_icons.html.js';
import { isNonEmptyArray } from 'chrome://resources/ash/common/sea_pen/sea_pen_utils.js';
import { assert } from 'chrome://resources/js/assert.js';
import { getSeaPenTemplates, parseTemplateText } from './constants.js';
import { searchSeaPenThumbnails } from './sea_pen_controller.js';
import { getSeaPenProvider } from './sea_pen_interface_provider.js';
import { SeaPenPaths, SeaPenRouterElement } from './sea_pen_router_element.js';
import { WithSeaPenStore } from './sea_pen_store.js';
import { getTemplate } from './sea_pen_template_query_element.html.js';
/**
 * Returns a random number between [0, max).
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function isChip(word) {
    return !!word && word.startsWith('<') && word.endsWith('>');
}
function toChip(word) {
    return parseInt(word.slice(1, -1));
}
export class SeaPenTemplateQueryElement extends WithSeaPenStore {
    static get is() {
        return 'sea-pen-template-query';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            templateId: {
                type: String,
            },
            path: String,
            seaPenTemplate_: {
                type: Object,
                computed: 'computeSeaPenTemplate_(templateId)',
                observer: 'onSeaPenTemplateChanged_',
            },
            // A map of chip to its selected option. By default, populated after
            // `seaPenTemplate_` is constructed. Updated when the user selects the
            // option on the UI.
            selectedOptions_: {
                type: Object,
            },
            // The tokens generated from `seaPenTemplate_` and `selectedOptions_`.
            templateTokens_: {
                type: Array,
            },
            // The selected chip token. Updated whenever the user clicks a chip in the
            // UI.
            selectedChip_: {
                type: Object,
            },
            // `options_` is an array of possible values for the selected chip. Each
            // "option" will be mapped to a clickable button that the user could
            // select. The options are dependent on the `selectedChip_`.
            options_: {
                type: Array,
            },
        };
    }
    computeSeaPenTemplate_(templateId) {
        const seaPenTemplates = getSeaPenTemplates();
        const correctTemplate = seaPenTemplates.find((seaPenTemplate) => seaPenTemplate.id === templateId);
        return correctTemplate;
    }
    isChip_(token) {
        return typeof token?.translation === 'string';
    }
    onClickChip_(event) {
        assert(this.isChip_(event.model.token), 'Token must be a chip');
        this.selectedChip_ = event.model.token;
        assert(this.seaPenTemplate_.options.has(this.selectedChip_.id), 'options must exist');
        this.options_ = this.seaPenTemplate_.options.get(this.selectedChip_.id);
    }
    onClickOption_(event) {
        const option = event.model.option;
        // Notifies the selected chip's translation has changed to the UI.
        this.set('selectedChip_.translation', option.translation);
        this.selectedOptions_.set(this.selectedChip_.id, option);
        this.templateTokens_ = this.computeTemplateTokens_(this.seaPenTemplate_, this.selectedOptions_);
    }
    // TODO(b/309679850): Query for actual images.
    onClickInspire_() {
        this.seaPenTemplate_.options.forEach((options, chip) => {
            if (isNonEmptyArray(options)) {
                const option = options[getRandomInt(options.length)];
                this.selectedOptions_.set(chip, option);
            }
            else {
                console.warn('empty options for', this.seaPenTemplate_.id);
            }
        });
        if (this.selectedChip_) {
            // The selected chip translation might have changed due to randomized
            // option. Notifies the UI to update its value.
            this.set(`selectedChip_.translation`, this.selectedOptions_.get(this.selectedChip_.id)?.translation);
        }
        this.templateTokens_ = this.computeTemplateTokens_(this.seaPenTemplate_, this.selectedOptions_);
    }
    onSeaPenTemplateChanged_(template) {
        const selectedOptions = new Map();
        template.options.forEach((options, chip) => {
            if (isNonEmptyArray(options)) {
                const option = options[0];
                selectedOptions.set(chip, option);
            }
            else {
                console.warn('empty options for', template.id);
            }
        });
        this.selectedChip_ = null;
        this.options_ = null;
        this.selectedOptions_ = selectedOptions;
        this.templateTokens_ = this.computeTemplateTokens_(this.seaPenTemplate_, this.selectedOptions_);
    }
    computeTemplateTokens_(template, selectedOptions) {
        const strs = parseTemplateText(template.text);
        const tokens = [];
        strs.forEach(str => {
            if (isChip(str)) {
                const templateChip = toChip(str);
                tokens.push({
                    translation: selectedOptions.get(templateChip)?.translation || '',
                    id: templateChip,
                });
            }
            else if (str.trim().length > 0) {
                tokens.push(str);
            }
        });
        return tokens;
    }
    getChipClassName_(chip, selectedChip) {
        assert(this.isChip_(chip), 'Token must be a chip');
        // If there are no selected chips, then use the 'selected' styling on all
        // chips.
        return !selectedChip || chip.id === selectedChip.id ? 'selected' :
            'unselected';
    }
    isOptionSelected_(option, selectedChipTranslation) {
        return (option.translation === selectedChipTranslation).toString();
    }
    getOptionClass_(option, selectedChipTranslation) {
        return this.isOptionSelected_(option, selectedChipTranslation) === 'true' ?
            'action-button' :
            'unselected-option';
    }
    getTextClassName_(selectedChip) {
        // Use the 'unselected' styling only if a chip has been selected.
        return selectedChip ? 'unselected' : '';
    }
    getTemplateRequest_() {
        const optionMap = new Map();
        this.selectedOptions_.forEach((option, chip) => {
            optionMap.set(chip, option.value);
        });
        const id = parseInt(this.templateId, 10);
        assert(!isNaN(id));
        return {
            templateQuery: {
                id,
                options: Object.fromEntries(optionMap),
            },
        };
    }
    onClickSearchButton_() {
        searchSeaPenThumbnails(this.getTemplateRequest_(), getSeaPenProvider(), this.getStore());
        SeaPenRouterElement.instance().goToRoute(SeaPenPaths.RESULTS, { seaPenTemplateId: this.templateId.toString() });
    }
    getSearchButtonText_(path) {
        switch (path) {
            case SeaPenPaths.RESULTS:
                return this.i18n('seaPenRecreateButton');
            case SeaPenPaths.ROOT:
            default:
                return this.i18n('seaPenCreateButton');
        }
    }
    getSearchButtonIcon_(path) {
        switch (path) {
            case SeaPenPaths.RESULTS:
                return 'personalization-shared:refresh';
            case SeaPenPaths.ROOT:
            default:
                return 'sea-pen:photo-spark';
        }
    }
}
customElements.define(SeaPenTemplateQueryElement.is, SeaPenTemplateQueryElement);

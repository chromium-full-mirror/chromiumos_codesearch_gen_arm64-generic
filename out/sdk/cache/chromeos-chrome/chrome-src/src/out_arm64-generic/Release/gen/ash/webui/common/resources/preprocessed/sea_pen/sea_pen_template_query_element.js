// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A polymer component that displays template query to search for
 * SeaPen wallpapers.
 */
import 'chrome://resources/ash/common/personalization/common.css.js';
import 'chrome://resources/ash/common/personalization/cros_button_style.css.js';
import 'chrome://resources/ash/common/personalization/personalization_shared_icons.html.js';
import 'chrome://resources/ash/common/sea_pen/sea_pen_icons.html.js';
import { AnchorAlignment } from 'chrome://resources/ash/common/cr_elements/cr_action_menu/cr_action_menu.js';
import { assert } from 'chrome://resources/js/assert.js';
import { getSeaPenTemplates } from './constants.js';
import { searchSeaPenThumbnails } from './sea_pen_controller.js';
import { getSeaPenProvider } from './sea_pen_interface_provider.js';
import { SeaPenPaths, SeaPenRouterElement } from './sea_pen_router_element.js';
import { WithSeaPenStore } from './sea_pen_store.js';
import { getTemplate } from './sea_pen_template_query_element.html.js';
import { getDefaultOptions, getTemplateTokens, logGenerateSeaPenWallpaper } from './sea_pen_utils.js';
export class SeaPenTemplateQueryElement extends WithSeaPenStore {
    static get is() {
        return 'sea-pen-template-query';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            templateId: String,
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
            thumbnails_: Object,
            thumbnailsLoading_: Boolean,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('thumbnails_', state => state.thumbnails);
        this.watch('thumbnailsLoading_', state => state.loading.thumbnails);
        this.updateFromStore();
    }
    computeSeaPenTemplate_(templateId) {
        const seaPenTemplates = getSeaPenTemplates();
        const correctTemplate = seaPenTemplates.find((seaPenTemplate) => seaPenTemplate.id.toString() === templateId);
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
        this.$.optionList.render();
        this.showOptionMenu_(event);
    }
    showOptionMenu_(event) {
        const targetElement = event.currentTarget;
        const config = {
            anchorAlignmentX: AnchorAlignment.AFTER_START,
            anchorAlignmentY: AnchorAlignment.AFTER_START,
        };
        const menuElement = this.shadowRoot.querySelector('cr-action-menu');
        menuElement.showAt(targetElement.parentElement, config);
    }
    onClickOption_(event) {
        const option = event.model.option;
        // Notifies the selected chip's translation has changed to the UI.
        this.set('selectedChip_.translation', option.translation);
        this.selectedOptions_.set(this.selectedChip_.id, option);
        this.templateTokens_ =
            getTemplateTokens(this.seaPenTemplate_, this.selectedOptions_);
        this.closeOptionMenu_();
    }
    closeOptionMenu_() {
        const menuElement = this.shadowRoot.querySelector('cr-action-menu');
        menuElement.close();
    }
    onClickInspire_() {
        this.selectedOptions_ =
            getDefaultOptions(this.seaPenTemplate_, /*random=*/ true);
        if (this.selectedChip_) {
            // The selected chip translation might have changed due to randomized
            // option. Notifies the UI to update its value.
            this.set(`selectedChip_.translation`, this.selectedOptions_.get(this.selectedChip_.id)?.translation);
        }
        this.templateTokens_ =
            getTemplateTokens(this.seaPenTemplate_, this.selectedOptions_);
        this.onClickSearchButton_();
    }
    onSeaPenTemplateChanged_(template) {
        const selectedOptions = getDefaultOptions(template);
        this.selectedChip_ = null;
        this.options_ = null;
        this.selectedOptions_ = selectedOptions;
        this.templateTokens_ =
            getTemplateTokens(this.seaPenTemplate_, this.selectedOptions_);
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
    getUserVisibleQueryInfo_() {
        const translatedTokens = this.templateTokens_.map((token) => {
            return this.isChip_(token) ? token.translation : token;
        });
        return {
            text: translatedTokens.join(' '),
            templateTitle: this.seaPenTemplate_.title,
        };
    }
    getSeaPenTemplateId_() {
        return parseInt(this.templateId, 10);
    }
    getTemplateRequest_() {
        const optionMap = new Map();
        this.selectedOptions_.forEach((option, chip) => {
            optionMap.set(chip, option.value);
        });
        const id = this.getSeaPenTemplateId_();
        assert(!isNaN(id));
        return {
            templateQuery: {
                id,
                options: Object.fromEntries(optionMap),
                userVisibleQuery: this.getUserVisibleQueryInfo_(),
            },
        };
    }
    onClickSearchButton_() {
        searchSeaPenThumbnails(this.getTemplateRequest_(), getSeaPenProvider(), this.getStore());
        logGenerateSeaPenWallpaper(this.getSeaPenTemplateId_());
        SeaPenRouterElement.instance().goToRoute(SeaPenPaths.RESULTS, { seaPenTemplateId: this.templateId.toString() });
    }
    getSearchButtonText_(path, thumbnails) {
        if (!thumbnails) {
            // The thumbnails are not loaded yet.
            return this.i18n('seaPenCreateButton');
        }
        switch (path) {
            case SeaPenPaths.RESULTS:
                return this.i18n('seaPenRecreateButton');
            case SeaPenPaths.ROOT:
            default:
                return this.i18n('seaPenCreateButton');
        }
    }
    getSearchButtonIcon_(path, thumbnails) {
        if (!thumbnails) {
            // The thumbnails are not loaded yet.
            return 'sea-pen:photo-spark';
        }
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

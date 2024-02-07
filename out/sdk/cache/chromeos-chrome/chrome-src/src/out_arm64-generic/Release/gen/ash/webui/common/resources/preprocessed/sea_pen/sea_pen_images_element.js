// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A polymer component that displays the result set of SeaPen
 * wallpapers.
 */
import 'chrome://resources/ash/common/personalization/common.css.js';
import 'chrome://resources/ash/common/personalization/personalization_shared_icons.html.js';
import 'chrome://resources/ash/common/personalization/wallpaper.css.js';
import 'chrome://resources/ash/common/sea_pen/sea_pen.css.js';
import 'chrome://resources/ash/common/sea_pen/surface_effects/sparkle_placeholder.js';
import 'chrome://resources/ash/common/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/ash/common/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/ash/common/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import './sea_pen_feedback_element.js';
import { MantaStatusCode } from './sea_pen.mojom-webui.js';
import { clearSeaPenThumbnails, openFeedbackDialog, selectSeaPenWallpaper } from './sea_pen_controller.js';
import { SeaPenTemplateId } from './sea_pen_generated.mojom-webui.js';
import { getTemplate } from './sea_pen_images_element.html.js';
import { getSeaPenProvider } from './sea_pen_interface_provider.js';
import { WithSeaPenStore } from './sea_pen_store.js';
import { isNonEmptyArray, isNonEmptyFilePath, logSeaPenTemplateFeedback } from './sea_pen_utils.js';
export class SeaPenImagesElement extends WithSeaPenStore {
    static get is() {
        return 'sea-pen-images';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            templateId: {
                type: String,
                observer: 'onTemplateIdChanged_',
            },
            thumbnails_: Object,
            thumbnailsLoading_: Boolean,
            currentSelected_: {
                type: String,
                value: null,
            },
            pendingSelected_: Object,
            thumbnailResponseStatusCode_: {
                type: Object,
                value: null,
            },
            showError_: {
                type: Boolean,
                computed: 'computeShowError_(thumbnailResponseStatusCode_, thumbnailsLoading_)',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('thumbnails_', state => state.thumbnails);
        this.watch('thumbnailsLoading_', state => state.loading.thumbnails);
        this.watch('thumbnailResponseStatusCode_', state => state.thumbnailResponseStatusCode);
        this.watch('currentSelected_', state => state.currentSelected);
        this.watch('pendingSelected_', state => state.pendingSelected);
        this.updateFromStore();
    }
    computeShowError_(statusCode, thumbnailsLoading) {
        return !!statusCode && !thumbnailsLoading;
    }
    getErrorMessage_(statusCode) {
        switch (statusCode) {
            case MantaStatusCode.kNoInternetConnection:
                return this.i18n('seaPenErrorNoInternet');
            case MantaStatusCode.kPerUserQuotaExceeded:
            case MantaStatusCode.kResourceExhausted:
                return this.i18n('seaPenErrorResourceExhausted');
            default:
                return this.i18n('seaPenErrorGeneric');
        }
    }
    getErrorIllo_(statusCode) {
        switch (statusCode) {
            case MantaStatusCode.kNoInternetConnection:
                return 'personalization-shared-illo:network_error';
            default:
                return 'personalization-shared-illo:resource_error';
        }
    }
    onTemplateIdChanged_() {
        clearSeaPenThumbnails(this.getStore());
    }
    shouldShowThumbnailPlaceholders_(thumbnailsLoading, thumbnails) {
        // Use placeholders before and during loading thumbnails.
        return !thumbnails && !thumbnailsLoading;
    }
    shouldShowImageThumbnails_(thumbnailsLoading, thumbnails) {
        return !thumbnailsLoading && isNonEmptyArray(thumbnails);
    }
    getPlaceholders_(x) {
        return new Array(x).fill(0);
    }
    onThumbnailSelected_(event) {
        selectSeaPenWallpaper(event.model.item, getSeaPenProvider(), this.getStore());
    }
    getAriaIndex_(i) {
        return i + 1;
    }
    isThumbnailSelected_(thumbnail, currentSelected, pendingSelected) {
        if (!thumbnail) {
            return false;
        }
        // Image was just clicked on and is currently being set.
        if (thumbnail === pendingSelected) {
            return true;
        }
        const fileName = `${thumbnail.id}.jpg`;
        // Image was previously selected, and was just clicked again via the "Recent
        // Images" section. This can arise if the user quickly navigates back and
        // forth from SeaPen root and results page while selecting images.
        if (isNonEmptyFilePath(pendingSelected)) {
            return pendingSelected.path.endsWith(fileName);
        }
        // No pending image in progress. Currently selected image matches the
        // thumbnail id.
        return pendingSelected === null && !!currentSelected?.endsWith(fileName);
    }
    isThumbnailLoading_(thumbnail, pendingSelected) {
        return !!thumbnail && thumbnail === pendingSelected;
    }
    // Get the name of the template for metrics. Must match histograms.xml
    // SeaPenTemplateName.
    getTemplateNameFromId_(templateId) {
        switch (templateId) {
            case SeaPenTemplateId.kFlower:
                return 'Flower';
            case SeaPenTemplateId.kMineral:
                return 'Mineral';
            case SeaPenTemplateId.kScifi:
                return 'Scifi';
            case SeaPenTemplateId.kArt:
                return 'Art';
            case SeaPenTemplateId.kCharacters:
                return 'Characters';
            case SeaPenTemplateId.kTerrain:
                return 'Landscape';
            case SeaPenTemplateId.kCurious:
                return 'Curious';
            case SeaPenTemplateId.kDreamscapes:
                return 'Dreamscapes';
            case SeaPenTemplateId.kTranslucent:
                return 'Translucent';
            case SeaPenTemplateId.kVcBackgroundSimple:
                return 'VcBackgroundSimple';
            case SeaPenTemplateId.kVcBackgroundOffice:
                return 'VcBackgroundOffice';
            case SeaPenTemplateId.kVcBackgroundTerrainVc:
                return 'VcBackgroundTerrain';
            case SeaPenTemplateId.kVcBackgroundCafe:
                return 'VcBackgroundCafe';
            case SeaPenTemplateId.kVcBackgroundArt:
                return 'VcBackgroundArt';
            case SeaPenTemplateId.kVcBackgroundDreamscapesVc:
                return 'VcBackgroundDreamscapes';
            case SeaPenTemplateId.kVcBackgroundCharacters:
                return 'VcBackgroundCharacters';
            case 'Query':
                return 'Query';
        }
    }
    onSelectedFeedbackChanged_(event) {
        const isThumbsUp = event.detail.isThumbsUp;
        const templateName = this.getTemplateNameFromId_(this.templateId);
        logSeaPenTemplateFeedback(templateName, isThumbsUp);
        const metadata = {
            isPositive: isThumbsUp,
            logId: templateName,
        };
        openFeedbackDialog(metadata, getSeaPenProvider());
    }
}
customElements.define(SeaPenImagesElement.is, SeaPenImagesElement);

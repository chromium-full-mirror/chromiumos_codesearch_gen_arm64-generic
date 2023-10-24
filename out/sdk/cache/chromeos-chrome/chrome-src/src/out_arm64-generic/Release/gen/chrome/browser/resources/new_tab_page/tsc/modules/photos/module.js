// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../module_header.js';
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixin, loadTimeData } from '../../i18n_setup.js';
import { ModuleDescriptor } from '../module_descriptor.js';
import { getTemplate } from './module.html.js';
import { PhotosProxy } from './photos_module_proxy.js';
/**
 * List of possible OptIn status. This enum must match with the numbering for
 * NtpPhotosModuleOptInStatus in histogram/enums.xml. These values are persisted
 * to logs. Entries should not be renumbered, removed or reused.
 */
var OptInStatus;
(function (OptInStatus) {
    OptInStatus[OptInStatus["HARD_OPT_OUT"] = 0] = "HARD_OPT_OUT";
    OptInStatus[OptInStatus["OPT_IN"] = 1] = "OPT_IN";
    OptInStatus[OptInStatus["SOFT_OPT_OUT"] = 2] = "SOFT_OPT_OUT";
})(OptInStatus || (OptInStatus = {}));
function recordOptInStatus(optInStatus) {
    chrome.metricsPrivate.recordEnumerationValue('NewTabPage.Photos.UserOptIn', optInStatus, Object.keys(OptInStatus).length);
}
/** The Photos module, which serves Memories for the current user.  */
export class PhotosModuleElement extends I18nMixin(PolymerElement) {
    static get is() {
        return 'ntp-photos-module';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            memories: Array,
            showOptInScreen: {
                type: Boolean,
                reflectToAttribute: true,
            },
            customArtworkUrl_: {
                type: String,
                value: () => {
                    return `chrome://new-tab-page/modules/photos/images/img0${loadTimeData.getString('photosModuleCustomArtWork')}_240x236.svg`;
                },
            },
            customArtworkIndex_: {
                type: String,
                value: () => {
                    return loadTimeData.getString('photosModuleCustomArtWork');
                },
            },
            // If true, the artwork shown in opt-in screen will be one single svg
            // image.
            showCustomArtWork_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getString('photosModuleCustomArtWork') !== '' &&
                        !loadTimeData.getBoolean('photosModuleSplitSvgCustomArtWork');
                },
            },
            // If true, the artwork shown in opt-in screen will be a composite image
            // with constituent elements. Note that the composite images are
            // implemented only for art work designs 1,2 & 3. If
            // photosModuleSplitSvgCustomArtWork flag is enabled and the art work
            // design is not 1, 2 or 3, the default art work will be shown.
            showSplitSvgCustomArtWork_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('photosModuleSplitSvgCustomArtWork') &&
                        (loadTimeData.getString('photosModuleCustomArtWork') === '1' ||
                            loadTimeData.getString('photosModuleCustomArtWork') === '2' ||
                            loadTimeData.getString('photosModuleCustomArtWork') === '3');
                },
            },
            showSoftOptOutButton: Boolean,
            optInTitleText: String,
            hideMenuButton: Boolean,
            showExploreMore_: { type: Boolean, computed: 'computeShowExploreMore_(memories)' },
            headerChipText_: { type: String, computed: 'computeHeaderChipText_(showOptInScreen)' },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('detect-impression', () => {
            chrome.metricsPrivate.recordBoolean('NewTabPage.Photos.ModuleShown', this.showOptInScreen);
        });
    }
    computeShowExploreMore_() {
        return this.memories.length === 1;
    }
    computeHeaderChipText_() {
        return this.showOptInScreen ? loadTimeData.getString('modulesPhotosNew') :
            '';
    }
    onInfoButtonClick_() {
        this.$.infoDialogRender.get().showModal();
    }
    onDismissButtonClick_() {
        PhotosProxy.getHandler().dismissModule();
        this.dispatchEvent(new CustomEvent('dismiss-module', {
            bubbles: true,
            composed: true,
            detail: {
                message: loadTimeData.getString('modulesPhotosMemoriesHiddenToday'),
                restoreCallback: () => PhotosProxy.getHandler().restoreModule(),
            },
        }));
    }
    onSoftOptOutClick_() {
        recordOptInStatus(OptInStatus.SOFT_OPT_OUT);
        PhotosProxy.getHandler().softOptOut();
        this.dispatchEvent(new CustomEvent('dismiss-module', {
            bubbles: true,
            composed: true,
            detail: {
                message: loadTimeData.getString('modulesPhotosMemoriesSoftOptOut'),
                restoreCallback: () => PhotosProxy.getHandler().restoreModule(),
            },
        }));
    }
    onDisableButtonClick_() {
        this.dispatchEvent(new CustomEvent('disable-module', {
            bubbles: true,
            composed: true,
            detail: {
                message: loadTimeData.getStringF('disableModuleToastMessage', loadTimeData.getString('modulesPhotosMemoriesDisabled')),
            },
        }));
    }
    onImageLoadError_() {
        chrome.metricsPrivate.recordBoolean('NewTabPage.Photos.ImageLoad', false);
    }
    onImageLoadSuccess_() {
        chrome.metricsPrivate.recordBoolean('NewTabPage.Photos.ImageLoad', true);
    }
    onOptInClick_() {
        recordOptInStatus(OptInStatus.OPT_IN);
        PhotosProxy.getHandler().onUserOptIn(true);
        this.showOptInScreen = false;
        this.hideMenuButton = false;
        this.showSoftOptOutButton = false;
    }
    onOptOutClick_() {
        recordOptInStatus(OptInStatus.HARD_OPT_OUT);
        PhotosProxy.getHandler().onUserOptIn(false);
        // Disable the module when user opt out.
        this.onDisableButtonClick_();
    }
    onMemoryClick_() {
        this.dispatchEvent(new Event('usage', { bubbles: true, composed: true }));
        PhotosProxy.getHandler().onMemoryOpen();
    }
    resizeImageUrl_(url, numMemories) {
        // We request image dimensions related to the layout.
        let imgSize = '=w168-h164-p-k-rw-no';
        if (numMemories < 3) {
            imgSize = '=w255-h164-p-k-rw-no';
        }
        return url.replace('?', imgSize + '?');
    }
    isEqual(lhs, rhs) {
        return lhs === rhs;
    }
    showDefaultOptInscreen() {
        return !this.showCustomArtWork_ && !this.showSplitSvgCustomArtWork_;
    }
}
customElements.define(PhotosModuleElement.is, PhotosModuleElement);
async function createPhotosElement() {
    const numMemories = 3;
    const { memories } = await PhotosProxy.getHandler().getMemories();
    const { showOptInScreen } = await PhotosProxy.getHandler().shouldShowOptInScreen();
    const { showSoftOptOutButton } = await PhotosProxy.getHandler().shouldShowSoftOptOutButton();
    // TODO(crbug/129770): Construct a new mojo API which returns both memories
    // and title.
    const { optInTitleText } = await PhotosProxy
        .getHandler()
        // Get custom title based on the user's memories which will be
        // displayed.
        .getOptInTitleText(memories.slice(0, numMemories));
    if (memories.length === 0) {
        return null;
    }
    const element = new PhotosModuleElement();
    element.showOptInScreen = showOptInScreen;
    element.showSoftOptOutButton = showSoftOptOutButton;
    element.optInTitleText = optInTitleText;
    element.hideMenuButton = showOptInScreen && !showSoftOptOutButton;
    // We show only the first 3 at most.
    element.memories = memories.slice(0, numMemories);
    return element;
}
export const photosDescriptor = new ModuleDescriptor(
/*id=*/ 'photos', createPhotosElement);

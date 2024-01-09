// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The user-preview component displays information about the
 * current user.
 */
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-ripple/paper-ripple.js';
import { isNonEmptyArray } from 'chrome://resources/ash/common/sea_pen/sea_pen_utils.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { mojoString16ToString } from 'chrome://resources/js/mojo_type_util.js';
import { IronA11yAnnouncer } from 'chrome://resources/polymer/v3_0/iron-a11y-announcer/iron-a11y-announcer.js';
import { isPersonalizationJellyEnabled } from '../load_time_booleans.js';
import { Paths, PersonalizationRouterElement } from '../personalization_router_element.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { isNonEmptyString } from '../utils.js';
import { initializeUserData } from './user_controller.js';
import { UserImageObserver } from './user_image_observer.js';
import { getUserProvider } from './user_interface_provider.js';
import { getTemplate } from './user_preview_element.html.js';
import { selectUserImageUrl } from './user_selectors.js';
import { getAvatarUrl } from './utils.js';
class AvatarChangedEvent extends CustomEvent {
    constructor() {
        super('iron-announce', {
            bubbles: true,
            composed: true,
            detail: { text: loadTimeData.getString('ariaAnnounceAvatarChanged') },
        });
    }
}
export class UserPreviewElement extends WithPersonalizationStore {
    static get is() {
        return 'user-preview';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            path: String,
            info_: Object,
            image_: Object,
            imageUrl_: {
                type: String,
                observer: 'onImageUrlChanged_',
                value: null,
            },
            imageIsEnterpriseManaged_: {
                type: Boolean,
                value: null,
            },
            isPersonalizationJellyEnabled_: {
                type: Boolean,
                value() {
                    return isPersonalizationJellyEnabled();
                },
            },
        };
    }
    ready() {
        super.ready();
        IronA11yAnnouncer.requestAvailability();
    }
    connectedCallback() {
        super.connectedCallback();
        UserImageObserver.initUserImageObserverIfNeeded();
        this.watch('info_', state => state.user.info);
        this.watch('image_', state => state.user.image);
        this.watch('imageUrl_', selectUserImageUrl);
        this.watch('imageIsEnterpriseManaged_', state => state.user.imageIsEnterpriseManaged);
        this.updateFromStore();
        initializeUserData(getUserProvider(), this.getStore());
    }
    onClickUserSubpageLink_() {
        PersonalizationRouterElement.instance().goToRoute(Paths.USER);
    }
    onImageUrlChanged_(value, old) {
        if (value && old) {
            this.dispatchEvent(new AvatarChangedEvent());
        }
    }
    onImgError_(e) {
        const divElement = e.currentTarget;
        divElement.setAttribute('hidden', 'true');
    }
    shouldShowMainPageView_(path, isEnterpriseManaged) {
        return path === Paths.ROOT && !isEnterpriseManaged;
    }
    shouldShowSubpageView_(path, isEnterpriseManaged) {
        return path === Paths.USER && !isEnterpriseManaged;
    }
    getImageContainerAriaLabel_(path, isEnterpriseManaged) {
        if (this.shouldShowMainPageView_(path, isEnterpriseManaged) ||
            isEnterpriseManaged) {
            return this.i18n('ariaLabelChangeAvatar');
        }
        if (this.shouldShowSubpageView_(path, isEnterpriseManaged)) {
            return this.i18n('ariaLabelCurrentAvatar');
        }
        // No aria-label attribute will be set.
        return false;
    }
    getImageAlt_(image) {
        if (!image || image.invalidImage) {
            return '';
        }
        if (image.defaultImage) {
            return mojoString16ToString(image.defaultImage.title);
        }
        if (image.externalImage) {
            return this.i18n('lastExternalImageTitle');
        }
        if (image.profileImage) {
            return this.i18n('googleProfilePhoto');
        }
        console.error('Unknown image type received');
        return '';
    }
    /**
     * Creates style string with static background image url for default user
     * images . Static image loads faster and will provide a smooth experience
     * when the animated image complete loading.
     */
    getImgBackgroundStyle_(url) {
        // Only add background image for default user images.
        if (!this.image_ || this.image_.invalidImage || !this.image_.defaultImage ||
            !url) {
            return '';
        }
        assert(!url.startsWith('chrome://image/'), 'The url should not be sanitized');
        return `background-image: url('${getAvatarUrl(url)}&staticEncode=true')`;
    }
    getAvatarUrl_(url) {
        return getAvatarUrl(url);
    }
    shouldShowDeprecatedImageSourceInfo_(image) {
        return !!image && !!image.defaultImage && !!image.defaultImage.sourceInfo &&
            isNonEmptyArray(image.defaultImage.sourceInfo.author.data) &&
            isNonEmptyString(image.defaultImage.sourceInfo.website.url);
    }
    getDeprecatedAuthor_(image) {
        assert(image && image.defaultImage && image.defaultImage.sourceInfo, 'only called for deprecated default images with sourceInfo');
        return mojoString16ToString(image.defaultImage.sourceInfo.author);
    }
    getDeprecatedWebsite_(image) {
        assert(image && image.defaultImage && image.defaultImage.sourceInfo, 'only called for deprecated default images with sourceInfo');
        return image.defaultImage.sourceInfo.website.url;
    }
}
customElements.define(UserPreviewElement.is, UserPreviewElement);

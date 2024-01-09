// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The avatar-list component displays the list of avatar images
 * that the user can select from.
 */
import 'chrome://resources/ash/common/personalization_shared_icons.html.js';
import { isNonEmptyArray } from 'chrome://resources/ash/common/sea_pen/sea_pen_utils.js';
import { assert } from 'chrome://resources/js/assert.js';
import { mojoString16ToString } from 'chrome://resources/js/mojo_type_util.js';
import { isUserAvatarCustomizationSelectorsEnabled } from '../load_time_booleans.js';
import { setErrorAction } from '../personalization_actions.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { getCheckmarkIcon, isSelectionEvent } from '../utils.js';
import { getTemplate } from './avatar_list_element.html.js';
import { fetchDefaultUserImages } from './user_controller.js';
import { getUserProvider } from './user_interface_provider.js';
import { selectLastExternalUserImageUrl } from './user_selectors.js';
import { getAvatarUrl } from './utils.js';
var OptionId;
(function (OptionId) {
    OptionId["LAST_EXTERNAL_IMAGE"] = "lastExternalImage";
    OptionId["OPEN_CAMERA"] = "openCamera";
    OptionId["OPEN_VIDEO"] = "openVideo";
    OptionId["PROFILE_IMAGE"] = "profileImage";
    OptionId["OPEN_FOLDER"] = "openFolder";
})(OptionId || (OptionId = {}));
function isDefaultOption(option) {
    return option &&
        typeof option.defaultImageIndex === 'number';
}
function camelToKebab(className) {
    return className.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
}
export class AvatarListElement extends WithPersonalizationStore {
    constructor() {
        super(...arguments);
        /**
         * Called when (1) avatar images fail to load, (2) the device goes
         * offline while the avatar picker window is open, or (3) the user
         * tries to select an avatar while the device is offline.
         */
        this.onAvatarNetworkError_ = () => {
            this.dispatch(setErrorAction({
                id: 'AvatarList',
                message: this.i18n('avatarNetworkError'),
                dismiss: {
                    message: this.i18n('dismiss'),
                },
            }));
        };
    }
    static get is() {
        return 'avatar-list';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            defaultUserImages_: Array,
            profileImage_: Object,
            image_: Object,
            lastExternalUserImageUrl_: {
                type: Object,
                observer: 'onLastExternalUserImageUrlChanged_',
            },
            /** The presence of a device camera. */
            isCameraPresent_: {
                type: Boolean,
                value: false,
                observer: 'onIsCameraPresentChanged_',
            },
            /** Whether the camera is off, photo mode, or video mode. */
            cameraMode_: {
                type: String,
                value: null,
            },
            /** Whether custom avatar selectors are enabled. */
            isCustomizationSelectorsEnabled_: {
                type: Boolean,
                value() {
                    return isUserAvatarCustomizationSelectorsEnabled();
                },
            },
            /**
             * List of options to be displayed to the user.
             */
            options_: {
                type: Array,
                value: [],
            },
        };
    }
    static get observers() {
        return [
            'updateOptions_(isCameraPresent_, profileImage_, lastExternalUserImageUrl_, defaultUserImages_)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('defaultUserImages_', state => state.user.defaultUserImages);
        this.watch('profileImage_', state => state.user.profileImage);
        this.watch('isCameraPresent_', state => state.user.isCameraPresent);
        this.watch('image_', state => state.user.image);
        this.watch('lastExternalUserImageUrl_', selectLastExternalUserImageUrl);
        this.updateFromStore();
        fetchDefaultUserImages(getUserProvider(), this.getStore());
        window.addEventListener('offline', this.onAvatarNetworkError_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('offline', this.onAvatarNetworkError_);
    }
    /** Invoked to update |options_|. */
    updateOptions_(isCameraPresent, profileImage, lastExternalUserImageUrl, defaultUserImages) {
        const options = [];
        if (this.isCustomizationSelectorsEnabled_) {
            if (isCameraPresent) {
                // Add camera and video options.
                options.push({
                    id: OptionId.OPEN_CAMERA,
                    class: 'avatar-button-container',
                    imgSrc: '',
                    icon: 'personalization:camera',
                    title: this.i18n('takeWebcamPhoto'),
                });
                options.push({
                    id: OptionId.OPEN_VIDEO,
                    class: 'avatar-button-container',
                    icon: 'personalization:loop',
                    title: this.i18n('takeWebcamVideo'),
                });
            }
            // Add open folder option.
            options.push({
                id: OptionId.OPEN_FOLDER,
                class: 'avatar-button-container',
                icon: 'personalization:folder',
                title: this.i18n('chooseAFile'),
            });
            if (profileImage && profileImage.url) {
                options.push({
                    id: OptionId.PROFILE_IMAGE,
                    class: 'image-container',
                    imgSrc: profileImage.url,
                    icon: getCheckmarkIcon(),
                    title: this.i18n('googleProfilePhoto'),
                });
            }
            if (lastExternalUserImageUrl) {
                options.push({
                    id: OptionId.LAST_EXTERNAL_IMAGE,
                    class: 'image-container',
                    imgSrc: lastExternalUserImageUrl.url,
                    icon: getCheckmarkIcon(),
                    title: this.i18n('lastExternalImageTitle'),
                });
            }
        }
        if (isNonEmptyArray(defaultUserImages)) {
            defaultUserImages.forEach(defaultImage => {
                options.push({
                    id: `defaultUserImage-${defaultImage.index}`,
                    class: 'image-container',
                    imgSrc: defaultImage.url.url,
                    icon: getCheckmarkIcon(),
                    title: mojoString16ToString(defaultImage.title),
                    defaultImageIndex: defaultImage.index,
                });
            });
        }
        const activeElement = this.shadowRoot.activeElement;
        this.updateList(
        /*propertyPath=*/ 'options_', 
        /*identityGetter=*/
        (option) => {
            switch (option.id) {
                // LAST_EXTERNAL_IMAGE needs to use imgSrc instead of id. Otherwise
                // iron-list will not update properly when LAST_EXTERNAL_IMAGE
                // changes, i.e. when user selects a new file from disk.
                case OptionId.LAST_EXTERNAL_IMAGE:
                    return option.imgSrc;
                default:
                    return option.id;
            }
        }, 
        /*newList=*/ options, 
        /*identityBasedUpdate=*/ true);
        if (activeElement instanceof HTMLElement) {
            // Restore focus to previously selected element after list update.
            activeElement.focus();
        }
    }
    onLastExternalUserImageUrlChanged_(_, old) {
        if (old && old.url && old.url.startsWith('blob:')) {
            URL.revokeObjectURL(old.url);
        }
    }
    onOptionSelected_(e) {
        if (!isSelectionEvent(e)) {
            return;
        }
        const divElement = e.currentTarget;
        const id = divElement.id;
        switch (id) {
            case OptionId.OPEN_CAMERA:
                this.openCamera_(e);
                break;
            case OptionId.OPEN_VIDEO:
                this.openVideo_(e);
                break;
            case OptionId.OPEN_FOLDER:
                this.onSelectImageFromDisk_(e);
                break;
            case OptionId.PROFILE_IMAGE:
                this.onSelectProfileImage_(e);
                break;
            case OptionId.LAST_EXTERNAL_IMAGE:
                this.onSelectLastExternalUserImage_(e);
                break;
            default:
                this.onSelectDefaultImage_(e);
                break;
        }
    }
    /**
     * Called when there's an image load error.
     *
     * The most common case would be when trying to load default avatars
     * from gstatic resources for the first time while the device is offline.
     */
    onImgError_(e) {
        const divElement = e.currentTarget;
        divElement.setAttribute('hidden', 'true');
    }
    getImageClassForOption_(option) {
        if (option.imgSrc) {
            return '';
        }
        return 'hidden';
    }
    onSelectDefaultImage_(event) {
        if (!window.navigator.onLine) {
            this.onAvatarNetworkError_();
            return;
        }
        if (!isSelectionEvent(event)) {
            return;
        }
        const id = event.currentTarget.dataset['id'];
        if (!id) {
            return;
        }
        const index = parseInt(id, 10);
        getUserProvider().selectDefaultImage(index);
    }
    onSelectProfileImage_(event) {
        if (!isSelectionEvent(event)) {
            return;
        }
        getUserProvider().selectProfileImage();
    }
    onSelectLastExternalUserImage_(event) {
        if (!isSelectionEvent(event)) {
            return;
        }
        getUserProvider().selectLastExternalUserImage();
    }
    openCamera_(event) {
        if (!isSelectionEvent(event)) {
            return;
        }
        assert(this.isCameraPresent_, 'Camera needed to record an image');
        this.cameraMode_ = "camera" /* AvatarCameraMode.CAMERA */;
    }
    openVideo_(event) {
        if (!isSelectionEvent(event)) {
            return;
        }
        assert(this.isCameraPresent_, 'Camera needed to record a video');
        this.cameraMode_ = "video" /* AvatarCameraMode.VIDEO */;
    }
    onIsCameraPresentChanged_(value) {
        // Potentially hide camera UI if the camera has become unavailable.
        if (!value) {
            this.cameraMode_ = null;
        }
    }
    onSelectImageFromDisk_(event) {
        if (!isSelectionEvent(event)) {
            return;
        }
        getUserProvider().selectImageFromDisk();
    }
    onCameraClosed_() {
        this.cameraMode_ = null;
    }
    getAriaIndex_(i) {
        return i + 1;
    }
    getAriaSelected_(option, image) {
        if (!option) {
            return 'false';
        }
        switch (option.id) {
            case OptionId.OPEN_CAMERA:
            case OptionId.OPEN_VIDEO:
            case OptionId.OPEN_FOLDER:
                return 'false';
            case OptionId.PROFILE_IMAGE:
                return (!!image && !!image.profileImage).toString();
            case OptionId.LAST_EXTERNAL_IMAGE:
                return (!!image && !!image.externalImage).toString();
            default:
                // Handle default user image.
                assert(isDefaultOption(option));
                return (!!image && !!image.defaultImage &&
                    image.defaultImage.index === option.defaultImageIndex)
                    .toString();
        }
    }
    getOptionInnerContainerClass_(option, image) {
        const defaultClass = option ? option.class : 'image-container';
        return this.getAriaSelected_(option, image) === 'true' ?
            `${defaultClass} tast-selected-${camelToKebab(option.id)}` :
            defaultClass;
    }
    /**
     * Creates style string with static background image url for default
     * avatar images. Static image loads faster and will provide a
     * smooth experience when the animated image completes loading.
     */
    getImgBackgroundStyle_(url, defaultImageIndex) {
        // If the image is a default avatar loaded from gstatic resources,
        // return a static encoded background image.
        if (defaultImageIndex) {
            assert(!url.startsWith('chrome://image/'), 'The URL shouldn\'t be sanitized');
            return `background-image: url('${getAvatarUrl(url)}&staticEncode=true')`;
        }
        return '';
    }
    getAvatarUrl_(url) {
        return getAvatarUrl(url);
    }
}
customElements.define(AvatarListElement.is, AvatarListElement);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { UserActionName } from './user_actions.js';
export function imageReducer(state, action, _) {
    switch (action.name) {
        case UserActionName.SET_USER_IMAGE:
            return action.image;
        default:
            return state;
    }
}
export function defaultUserImagesReducer(state, action, _) {
    switch (action.name) {
        case UserActionName.SET_DEFAULT_USER_IMAGES:
            return action.defaultUserImages;
        default:
            return state;
    }
}
export function infoReducer(state, action, _) {
    switch (action.name) {
        case UserActionName.SET_USER_INFO:
            return action.user_info;
        default:
            return state;
    }
}
export function profileImageReducer(state, action, _) {
    switch (action.name) {
        case UserActionName.SET_PROFILE_IMAGE:
            return action.profileImage;
        default:
            return state;
    }
}
export function isCameraPresentReducer(state, action, _) {
    switch (action.name) {
        case UserActionName.SET_IS_CAMERA_PRESENT:
            return action.isCameraPresent;
        default:
            return state;
    }
}
export function lastExternalUserImageReducer(state, action, _) {
    switch (action.name) {
        case UserActionName.SET_USER_IMAGE:
            if (action.image.externalImage) {
                return action.image;
            }
            return state;
        default:
            return state;
    }
}
export function imageIsEnterpriseManagedReducer(state, action, _) {
    switch (action.name) {
        case UserActionName.SET_USER_IMAGE_IS_ENTERPRISE_MANAGED:
            return action.isEnterpriseManaged;
        default:
            return state;
    }
}
export const userReducers = {
    defaultUserImages: defaultUserImagesReducer,
    image: imageReducer,
    info: infoReducer,
    profileImage: profileImageReducer,
    isCameraPresent: isCameraPresentReducer,
    lastExternalUserImage: lastExternalUserImageReducer,
    imageIsEnterpriseManaged: imageIsEnterpriseManagedReducer,
};

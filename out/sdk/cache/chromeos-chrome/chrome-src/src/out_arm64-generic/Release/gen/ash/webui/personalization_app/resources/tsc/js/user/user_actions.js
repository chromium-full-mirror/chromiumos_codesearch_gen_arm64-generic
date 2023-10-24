// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Defines the actions to change user state.
 */
export var UserActionName;
(function (UserActionName) {
    UserActionName["SET_DEFAULT_USER_IMAGES"] = "set_default_user_images";
    UserActionName["SET_PROFILE_IMAGE"] = "set_profile_image";
    UserActionName["SET_IS_CAMERA_PRESENT"] = "set_is_camera_present";
    UserActionName["SET_USER_IMAGE"] = "set_user_image";
    UserActionName["SET_USER_INFO"] = "set_user_info";
    UserActionName["SET_USER_IMAGE_IS_ENTERPRISE_MANAGED"] = "set_user_image_is_enterprise_managed";
})(UserActionName || (UserActionName = {}));
export function setIsCameraPresentAction(isCameraPresent) {
    return {
        name: UserActionName.SET_IS_CAMERA_PRESENT,
        isCameraPresent,
    };
}
export function setUserImageAction(image) {
    return { name: UserActionName.SET_USER_IMAGE, image };
}
export function setDefaultUserImagesAction(defaultUserImages) {
    return {
        name: UserActionName.SET_DEFAULT_USER_IMAGES,
        defaultUserImages,
    };
}
/**
 * Notify that the app has finished loading user info. Will be called with null
 * on error.
 */
export function setUserInfoAction(userInfo) {
    return {
        name: UserActionName.SET_USER_INFO,
        user_info: userInfo,
    };
}
export function setProfileImageAction(profileImage) {
    return {
        name: UserActionName.SET_PROFILE_IMAGE,
        profileImage,
    };
}
export function setUserImageIsEnterpriseManagedAction(isEnterpriseManaged) {
    return {
        name: UserActionName.SET_USER_IMAGE_IS_ENTERPRISE_MANAGED,
        isEnterpriseManaged,
    };
}

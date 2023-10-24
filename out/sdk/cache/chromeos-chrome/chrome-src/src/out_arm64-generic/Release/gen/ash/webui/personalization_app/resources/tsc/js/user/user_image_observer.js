// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { UserImageObserverReceiver } from '../../personalization_app.mojom-webui.js';
import { PersonalizationStore } from '../personalization_store.js';
import { setIsCameraPresentAction, setProfileImageAction, setUserImageAction, setUserImageIsEnterpriseManagedAction } from './user_actions.js';
import { getUserProvider } from './user_interface_provider.js';
/** @fileoverview listens for updates on user's avatar image. */
let instance = null;
/**
 * Listens for changes to user image and saves updates to PersonalizationStore.
 */
export class UserImageObserver {
    constructor() {
        this.receiver_ = this.initReceiver_(getUserProvider());
    }
    static initUserImageObserverIfNeeded() {
        if (!instance) {
            instance = new UserImageObserver();
        }
    }
    static shutdown() {
        if (instance) {
            instance.receiver_.$.close();
            instance = null;
        }
    }
    initReceiver_(userProvider) {
        const receiver = new UserImageObserverReceiver(this);
        userProvider.setUserImageObserver(receiver.$.bindNewPipeAndPassRemote());
        return receiver;
    }
    onUserImageChanged(image) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setUserImageAction(image));
    }
    onUserProfileImageUpdated(profileImage) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setProfileImageAction(profileImage));
    }
    onCameraPresenceCheckDone(isCameraPresent) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setIsCameraPresentAction(isCameraPresent));
    }
    onIsEnterpriseManagedChanged(isEnterpriseManaged) {
        const store = PersonalizationStore.getInstance();
        store.dispatch(setUserImageIsEnterpriseManagedAction(isEnterpriseManaged));
    }
}

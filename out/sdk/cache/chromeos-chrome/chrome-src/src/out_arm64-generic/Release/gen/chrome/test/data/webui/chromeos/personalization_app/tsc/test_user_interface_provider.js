// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestUserProvider extends TestBrowserProxy {
    defaultUserImages = [
        {
            index: 8,
            title: { data: 'Test title'.split('').map(ch => ch.charCodeAt(0)) },
            url: { url: 'data://test_url' },
            sourceInfo: undefined,
        },
    ];
    image = { defaultImage: this.defaultUserImages[0] };
    info = {
        name: 'test name',
        email: 'test@email',
    };
    profileImage = {
        url: 'data://test_profile_url',
    };
    constructor() {
        super([
            'setUserImageObserver',
            'getDefaultUserImages',
            'selectProfileImage',
            'getUserInfo',
            'selectDefaultImage',
            'selectCameraImage',
            'selectImageFromDisk',
            'selectLastExternalUserImage',
        ]);
    }
    userImageObserverRemote = null;
    setUserImageObserver(remote) {
        this.methodCalled('setUserImageObserver');
        this.userImageObserverRemote = remote;
    }
    async getUserInfo() {
        this.methodCalled('getUserInfo');
        return Promise.resolve({ userInfo: this.info });
    }
    async getDefaultUserImages() {
        this.methodCalled('getDefaultUserImages');
        return Promise.resolve({ defaultUserImages: this.defaultUserImages });
    }
    selectDefaultImage(index) {
        this.methodCalled('selectDefaultImage', index);
    }
    async selectProfileImage() {
        this.methodCalled('selectProfileImage');
        this.profileImage = {
            url: 'data://updated_test_url',
        };
    }
    selectCameraImage(data) {
        this.methodCalled('selectCameraImage', data);
    }
    selectImageFromDisk() {
        this.methodCalled('selectImageFromDisk');
    }
    selectLastExternalUserImage() {
        this.methodCalled('selectLastExternalUserImage');
    }
}

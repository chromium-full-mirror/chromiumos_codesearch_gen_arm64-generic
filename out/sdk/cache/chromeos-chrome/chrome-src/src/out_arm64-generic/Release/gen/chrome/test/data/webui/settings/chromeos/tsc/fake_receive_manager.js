// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Fake implementation of ReceiveManagerInterface for testing.
 */
import { nearbyShareMojom } from 'chrome://os-settings/os_settings.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
const { RegisterReceiveSurfaceResult, TransferStatus, } = nearbyShareMojom;
/**
 * Fake implementation of ReceiveManagerInterface
 */
export class FakeReceiveManager extends TestBrowserProxy {
    inHighVisibility_ = false;
    nextResult_ = true;
    observer_ = null;
    // Make this look like a closable mojo pipe
    $ = {
        close() { },
    };
    constructor() {
        super([
            'addReceiveObserver',
            'isInHighVisibility',
            'registerForegroundReceiveSurface',
            'unregisterForegroundReceiveSurface',
            'accept',
            'reject',
            'recordFastInitiationNotificationUsage',
        ]);
    }
    simulateShareTargetArrival(name, connectionToken, _payloadDescription = '', _payloadType = 0) {
        const target = {
            id: {
                low: BigInt(1),
                high: BigInt(2),
            },
            name,
            type: 1,
            payloadPreview: {
                description: '',
                fileCount: 0,
                shareType: 0,
            },
            forSelfShare: false,
        };
        const metadata = {
            status: TransferStatus.kAwaitingLocalConfirmation,
            progress: 0.0,
            token: connectionToken,
            isOriginal: true,
            isFinalStatus: false,
        };
        this.observer_.onTransferUpdate(target, metadata);
        return target;
    }
    addReceiveObserver(observer) {
        this.methodCalled('addReceiveObserver');
        this.observer_ = observer;
    }
    async isInHighVisibility() {
        this.methodCalled('isInHighVisibility');
        return { inHighVisibility: this.inHighVisibility_ };
    }
    async registerForegroundReceiveSurface() {
        this.inHighVisibility_ = true;
        if (this.observer_) {
            this.observer_.onHighVisibilityChanged(this.inHighVisibility_);
        }
        this.methodCalled('registerForegroundReceiveSurface');
        const result = this.nextResult_ ? RegisterReceiveSurfaceResult.kSuccess :
            RegisterReceiveSurfaceResult.kFailure;
        return { result };
    }
    async unregisterForegroundReceiveSurface() {
        this.inHighVisibility_ = false;
        if (this.observer_) {
            this.observer_.onHighVisibilityChanged(this.inHighVisibility_);
        }
        this.methodCalled('unregisterForegroundReceiveSurface');
        return { success: this.nextResult_ };
    }
    async accept(shareTargetId) {
        this.methodCalled('accept', shareTargetId);
        return { success: this.nextResult_ };
    }
    async reject(shareTargetId) {
        this.methodCalled('reject', shareTargetId);
        return { success: this.nextResult_ };
    }
    recordFastInitiationNotificationUsage(success) {
        this.methodCalled('recordFastInitiationNotificationUsage', success);
    }
    getInHighVisibilityForTest() {
        return this.inHighVisibility_;
    }
    setInHighVisibilityForTest(inHighVisibility) {
        this.inHighVisibility_ = inHighVisibility;
        if (this.observer_) {
            this.observer_.onHighVisibilityChanged(inHighVisibility);
        }
    }
}

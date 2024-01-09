// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestChromeVoxSubpageBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'getAllTtsVoiceData',
            'refreshTtsVoices',
            'getDisplayNameForLocale',
            'getApplicationLocale',
            'addDeviceAddedListener',
            'removeDeviceAddedListener',
            'addDeviceChangedListener',
            'removeDeviceChangedListener',
            'addDeviceRemovedListener',
            'removeDeviceRemovedListener',
            'addPairingListener',
            'removePairingListener',
            'startDiscovery',
            'stopDiscovery',
            'updateBluetoothBrailleDisplayAddress',
        ]);
    }
    getAllTtsVoiceData() {
        const voices = [
            {
                name: 'Chrome OS US English',
                remote: false,
                extensionId: 'gjjabgpgjpampikjhjpfhneeoapjbjaf',
            },
            {
                name: 'Chrome OS हिन्दी',
                remote: false,
                extensionId: 'gjjabgpgjpampikjhjpfhneeoapjbjaf',
            },
            {
                name: 'default-coolnet',
                remote: false,
                extensionId: 'abcdefghijklmnop',
            },
            {
                name: 'bnm',
                remote: false,
                extensionId: 'abcdefghijklmnop',
            },
            {
                name: 'bnx',
                remote: true,
                extensionId: 'abcdefghijklmnop',
            },
            {
                name: 'eSpeak Turkish',
                remote: false,
                extensionId: 'dakbfdmgjiabojdgbiljlhgjbokobjpg',
            },
        ];
        webUIListenerCallback('all-voice-data-updated', voices);
    }
    refreshTtsVoices() {
        this.methodCalled('refreshTtsVoices');
    }
    getDisplayNameForLocale(locale) {
        this.methodCalled('getDisplayNameForLocale');
        return Promise.resolve(locale);
    }
    getApplicationLocale() {
        this.methodCalled('getApplicationLocale');
        return Promise.resolve('');
    }
    addDeviceAddedListener() {
        this.methodCalled('addDeviceAddedListener');
    }
    removeDeviceAddedListener() {
        this.methodCalled('removeDeviceAddedListener');
    }
    addDeviceChangedListener() {
        this.methodCalled('addDeviceChangedListener');
    }
    removeDeviceChangedListener() {
        this.methodCalled('removeDeviceChangedListener');
    }
    addDeviceRemovedListener() {
        this.methodCalled('addDeviceRemovedListener');
    }
    removeDeviceRemovedListener() {
        this.methodCalled('removeDeviceRemovedListener');
    }
    addPairingListener() {
        this.methodCalled('addPairingListener');
    }
    removePairingListener() {
        this.methodCalled('removePairingListener');
    }
    startDiscovery() {
        this.methodCalled('startDiscovery');
    }
    stopDiscovery() {
        this.methodCalled('stopDiscovery');
    }
    updateBluetoothBrailleDisplayAddress() {
        this.methodCalled('updateBluetoothBrailleDisplayAddress');
    }
}

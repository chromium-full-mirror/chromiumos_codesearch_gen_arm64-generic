// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_vars.css.js';
import './ui_trigger_list_object.js';
import './cross_device_internals.js';
import './shared_style.css.js';
import { WebUiListenerMixin } from 'chrome://resources/ash/common/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { NearbyPrefsBrowserProxy } from './nearby_prefs_browser_proxy.js';
import { NearbyUiTriggerBrowserProxy } from './nearby_ui_trigger_browser_proxy.js';
import { ShareTargetDiscoveryChange } from './types.js';
import { getTemplate } from './ui_trigger_tab.html.js';
const UiTriggerTabElementBase = WebUiListenerMixin(PolymerElement);
class UiTriggerTabElement extends UiTriggerTabElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = NearbyUiTriggerBrowserProxy.getInstance();
        this.prefsBrowserProxy_ = NearbyPrefsBrowserProxy.getInstance();
    }
    static get is() {
        return 'ui-trigger-tab';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            uiTriggerObjectList_: {
                type: Array,
                value: () => [],
            },
            shareTargetSelectOptionList_: {
                type: Array,
                value: () => [],
            },
            /**ID of the selected ShareTarget or ''*/
            selectedShareTargetId_: String,
        };
    }
    /**
     * When the page is initialized, notify the C++ layer to allow JavaScript and
     * initialize WebUI Listeners.
     */
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('transfer-updated', (transferUpdate) => this.onTransferUpdateAdded_(transferUpdate));
        this.addWebUiListener('share-target-discovered', (shareTarget) => this.onShareTargetDiscovered_(shareTarget));
        this.addWebUiListener('share-target-lost', (shareTarget) => this.onShareTargetLost_(shareTarget));
        this.addWebUiListener('on-status-code-returned', (statusCode) => this.onStatusCodeReturned_(statusCode));
        this.addWebUiListener('share-target-map-updated', (shareTargetMapUpdate) => this.onShareTargetMapChanged_(shareTargetMapUpdate));
        this.browserProxy_.initialize();
    }
    /**
     * Triggers RegisterSendSurface with Foreground as Send state.
     */
    onRegisterSendSurfaceForegroundClicked_() {
        this.browserProxy_.registerSendSurfaceForeground().then((statusCode) => this.onStatusCodeReturned_(statusCode));
    }
    /**
     * Triggers RegisterSendSurface with Background as Send state.
     */
    onRegisterSendSurfaceBackgroundClicked_() {
        this.browserProxy_.registerSendSurfaceBackground().then((statusCode) => this.onStatusCodeReturned_(statusCode));
    }
    /**
     * Triggers UnregisterSendSurface.
     */
    onUnregisterSendSurfaceClicked_() {
        this.browserProxy_.unregisterSendSurface().then((statusCode) => this.onStatusCodeReturned_(statusCode));
    }
    /**
     * Clears Nearby Share Prefs.
     */
    onClearPrefsButtonClicked_() {
        this.prefsBrowserProxy_.clearNearbyPrefs();
    }
    onFastPairErrorNotificationClicked_() {
        this.browserProxy_.notifyFastPairError();
    }
    onFastPairDiscoveryNotificationClicked_() {
        this.browserProxy_.notifyFastPairDiscovery();
    }
    onFastPairPairingNotificationClicked_() {
        this.browserProxy_.notifyFastPairPairing();
    }
    onFastPairDeviceApplicationAvailableNotificationClicked_() {
        this.browserProxy_.notifyFastPairApplicationAvailable();
    }
    onFastPairDeviceApplicationInstalledNotificationClicked_() {
        this.browserProxy_.notifyFastPairApplicationInstalled();
    }
    onFastPairAssociateAccountNotificationClicked_() {
        this.browserProxy_.notifyFastPairAssociateAccount();
    }
    /**
     * Triggers RegisterReceiveSurface with Foreground as Receive state.
     */
    onRegisterReceiveSurfaceForegroundClicked_() {
        this.browserProxy_.registerReceiveSurfaceForeground().then((statusCode) => this.onStatusCodeReturned_(statusCode));
    }
    /**
     * Triggers RegisterReceiveSurface with Background as Receive state.
     */
    onRegisterReceiveSurfaceBackgroundClicked_() {
        this.browserProxy_.registerReceiveSurfaceBackground().then((statusCode) => this.onStatusCodeReturned_(statusCode));
    }
    /**
     * Triggers UnregisterReceiveSurface.
     */
    onUnregisterReceiveSurfaceClicked_() {
        this.browserProxy_.unregisterReceiveSurface().then((statusCode) => this.onStatusCodeReturned_(statusCode));
    }
    /**
     * Logs status code returned by triggered events.
     */
    onStatusCodeReturned_(statusCode) {
        const message = statusCode.triggerEvent + ' Result: ' + statusCode.statusCode;
        const time = statusCode.time;
        this.unshift('uiTriggerObjectList_', { 'message': message, 'time': time });
    }
    /**
     * Updates state variables based on the dictionary returned once triggered
     * by |GetState|.
     */
    onCurrentStatesReturned_(currentStates) {
        const time = currentStates.time;
        const message = `Is Scanning? : ${currentStates.isScanning}\nIs Transferring? : ${currentStates.isTransferring}\nIs Receiving? : ${currentStates.isReceiving}\nIs Sending? : ${currentStates.isSending}\nIs Connecting? : ${currentStates.isConnecting}\nIs In High Visibility? : ${currentStates.isInHighVisibility}`;
        this.unshift('uiTriggerObjectList_', { 'message': message, 'time': time });
    }
    /**
     * Triggers sendText with selected |shareTargetId|.
     */
    onSendTextClicked_() {
        this.browserProxy_.sendText(this.selectedShareTargetId_)
            .then((statusCode) => this.onStatusCodeReturned_(statusCode));
    }
    /**
     * Triggers Accept with selected |shareTargetId|.
     */
    onAcceptClicked_() {
        this.browserProxy_.accept(this.selectedShareTargetId_);
    }
    /**
     * Triggers Reject with selected |shareTargetId|.
     */
    onRejectClicked_() {
        this.browserProxy_.reject(this.selectedShareTargetId_);
    }
    /**
     * Triggers Cancel with selected |shareTargetId|.
     */
    onCancelClicked_() {
        this.browserProxy_.cancel(this.selectedShareTargetId_);
    }
    /**
     * Triggers Open with selected |shareTargetId|.
     */
    onOpenClicked_() {
        this.browserProxy_.open(this.selectedShareTargetId_);
    }
    /**
     * Triggers GetState to retrieve current states and update display
     * accordingly.
     */
    onGetStatesClicked_() {
        this.browserProxy_.getState().then((currentStates) => this.onCurrentStatesReturned_(currentStates));
    }
    /**
     * Triggers ShowNearbyShareReceivedNotification which displays a Nearby Share
     * "Received" notification.
     */
    onNearbyShareReceivedNotificationClicked_() {
        this.browserProxy_.showNearbyShareReceivedNotification();
    }
    /**
     * Updates |selectedShareTargetId_| with the new selected option.
     */
    onSelectChange_() {
        const elem = this.shadowRoot.querySelector('#share-select');
        if (elem) {
            this.selectedShareTargetId_ = elem.value;
        }
    }
    /**
     * Parses an array of ShareTargets and adds to the JavaScript list
     * |shareTargetSelectOptionList_| to be displayed in select list.
     */
    onShareTargetMapChanged_(shareTargetMapUpdate) {
        this.shareTargetSelectOptionList_ = [];
        shareTargetMapUpdate.forEach((shareTarget) => {
            const name = `${shareTarget.deviceName} (${shareTarget.shareTargetId})`;
            const value = shareTarget.shareTargetId;
            const selected = value === this.selectedShareTargetId_;
            this.push('shareTargetSelectOptionList_', { 'name': name, 'selected': selected, 'value': value });
        });
    }
    /**
     * Handles ShareTargets when they are discovered in the C++.
     */
    onShareTargetDiscovered_(shareTarget) {
        this.convertShareTargetToTimestampedMessageAndAppendToList_(shareTarget, ShareTargetDiscoveryChange.DISCOVERED);
    }
    /**
     * Handles ShareTargets when they are lost in the C++.
     */
    onShareTargetLost_(shareTarget) {
        this.convertShareTargetToTimestampedMessageAndAppendToList_(shareTarget, ShareTargetDiscoveryChange.LOST);
    }
    /**
     * Adds |transferUpdate| sent in from WebUI listener to the displayed list.
     */
    onTransferUpdateAdded_(transferUpdate) {
        this.convertTransferUpdateTimestampedMessageAndAppendToList_(transferUpdate);
    }
    /**
     * Converts |transferUpdate| sent in to a generic object to be displayed.
     */
    convertTransferUpdateTimestampedMessageAndAppendToList_(transferUpdate) {
        const time = transferUpdate.time;
        const message = `${transferUpdate.deviceName} (${transferUpdate.shareTargetId}): ${transferUpdate.transferMetadataStatus}`;
        this.unshift('uiTriggerObjectList_', { 'message': message, 'time': time });
    }
    /**
     * Converts |statusCode| sent in to a generic object to be displayed.
     */
    convertStatusCodeToTimestampedMessageAndAppendToList_(statusCode) {
        const time = statusCode.time;
        const message = `${statusCode.triggerEvent} ${statusCode.statusCode}`;
        this.unshift('uiTriggerObjectList_', { 'message': message, 'time': time });
    }
    /**
     * Converts |shareTarget| sent in to when discovered/lost a generic object to
     * be displayed.
     */
    convertShareTargetToTimestampedMessageAndAppendToList_(shareTarget, discoveryChange) {
        const time = shareTarget.time;
        const message = `${shareTarget.deviceName} (${shareTarget.shareTargetId}) ${this.shareTargetDirectionToString_(discoveryChange)}`;
        this.unshift('uiTriggerObjectList_', { 'message': message, 'time': time });
    }
    /**
     * Sets the string representation of ShareTargetDiscoveryChange
     * |discoveryChange|.
     */
    shareTargetDirectionToString_(discoveryChange) {
        switch (discoveryChange) {
            case ShareTargetDiscoveryChange.DISCOVERED:
                return 'discovered';
            case ShareTargetDiscoveryChange.LOST:
                return 'lost';
            default:
                return;
        }
    }
}
customElements.define(UiTriggerTabElement.is, UiTriggerTabElement);

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import { assert } from 'chrome://resources/js/assert.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { KioskBrowserProxyImpl } from './kiosk_browser_proxy.js';
import { getTemplate } from './kiosk_dialog.html.js';
const ExtensionsKioskDialogElementBase = WebUiListenerMixin(PolymerElement);
export class ExtensionsKioskDialogElement extends ExtensionsKioskDialogElementBase {
    constructor() {
        super(...arguments);
        this.kioskBrowserProxy_ = KioskBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'extensions-kiosk-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            addAppInput_: {
                type: String,
                value: null,
            },
            apps_: Array,
            bailoutDisabled_: Boolean,
            canEditAutoLaunch_: Boolean,
            canEditBailout_: Boolean,
            errorAppId_: String,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.kioskBrowserProxy_.initializeKioskAppSettings()
            .then(params => {
            this.canEditAutoLaunch_ = params.autoLaunchEnabled;
            return this.kioskBrowserProxy_.getKioskAppSettings();
        })
            .then(this.setSettings_.bind(this));
        this.addWebUiListener('kiosk-app-settings-changed', this.setSettings_.bind(this));
        this.addWebUiListener('kiosk-app-updated', this.updateApp_.bind(this));
        this.addWebUiListener('kiosk-app-error', this.showError_.bind(this));
        this.$.dialog.showModal();
    }
    setSettings_(settings) {
        this.apps_ = settings.apps;
        this.bailoutDisabled_ = settings.disableBailout;
        this.canEditBailout_ = settings.hasAutoLaunchApp;
    }
    updateApp_(app) {
        const index = this.apps_.findIndex(a => a.id === app.id);
        assert(index < this.apps_.length);
        this.set('apps_.' + index, app);
    }
    showError_(appId) {
        this.errorAppId_ = appId;
    }
    getErrorMessage_(errorMessage) {
        return this.errorAppId_ + ' ' + errorMessage;
    }
    onAddAppClick_() {
        assert(this.addAppInput_);
        this.kioskBrowserProxy_.addKioskApp(this.addAppInput_);
        this.addAppInput_ = null;
    }
    clearInputInvalid_() {
        this.errorAppId_ = null;
    }
    onAutoLaunchButtonClick_(event) {
        const app = event.model.item;
        if (app.autoLaunch) { // If the app is originally set to
            // auto-launch.
            this.kioskBrowserProxy_.disableKioskAutoLaunch(app.id);
        }
        else {
            this.kioskBrowserProxy_.enableKioskAutoLaunch(app.id);
        }
    }
    onBailoutChanged_(event) {
        event.preventDefault();
        if (this.$.bailout.checked) {
            this.$.confirmDialog.showModal();
        }
        else {
            this.kioskBrowserProxy_.setDisableBailoutShortcut(false);
            this.$.confirmDialog.close();
        }
    }
    onBailoutDialogCancelClick_() {
        this.$.bailout.checked = false;
        this.$.confirmDialog.cancel();
    }
    onBailoutDialogConfirmClick_() {
        this.kioskBrowserProxy_.setDisableBailoutShortcut(true);
        this.$.confirmDialog.close();
    }
    onDoneClick_() {
        this.$.dialog.close();
    }
    onDeleteAppClick_(event) {
        this.kioskBrowserProxy_.removeKioskApp(event.model.item.id);
    }
    getAutoLaunchButtonLabel_(autoLaunched, disableStr, enableStr) {
        return autoLaunched ? disableStr : enableStr;
    }
    stopPropagation_(e) {
        e.stopPropagation();
    }
}
customElements.define(ExtensionsKioskDialogElement.is, ExtensionsKioskDialogElement);

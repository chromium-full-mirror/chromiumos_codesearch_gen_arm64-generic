// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_vars.css.js';
import 'chrome://borealis-installer/strings.m.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import './borealis_installer_icons.html.js';
import { assertNotReached } from 'chrome://resources/ash/common/assert.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { InstallResult } from './borealis_types.mojom-webui.js';
import { getTemplate } from './error_dialog.html.js';
/**
 * @fileoverview
 * Error dialog for when borealis installation fails.
 */
const INTERNAL_ERROR_URL = 'https://support.google.com/chromebook?p=Steam_InternalError';
const SPACE_ERROR_URL = 'https://support.google.com/chromebook?p=Steam_DlcNeedSpaceError';
const OFFLINE_ERROR_URL = 'https://support.google.com/chromebook?p=Steam_Offline';
/**
 * Stores strings/behaviours associated with an installer error.
 */
class ErrorBehaviour {
    constructor(message, link, retry, storage) {
        this.message = message;
        this.link = link;
        this.retry = retry;
        this.storage = storage;
    }
    getMessage() {
        return this.message;
    }
    getLink() {
        return this.link;
    }
    shouldShowRetryButton() {
        return this.retry;
    }
    shouldShowStorageButton() {
        return this.storage;
    }
}
export class BorealisInstallerErrorDialogElement extends PolymerElement {
    static get is() {
        return 'borealis-installer-error-dialog';
    }
    static get template() {
        return getTemplate();
    }
    constructor() {
        super();
    }
    get isDialogOpen() {
        return this.$.dialog.open;
    }
    show(installResult) {
        this.getBehaviour(installResult);
        this.$.dialog.showModal();
    }
    onRetryButtonClicked() {
        this.dispatchEvent(new CustomEvent('retry', { bubbles: true, composed: true }));
        this.$.dialog.close();
    }
    onCancelButtonClicked() {
        this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
        this.$.dialog.close();
    }
    onStorageButtonClicked() {
        this.dispatchEvent(new CustomEvent('storage', { bubbles: true, composed: true }));
        this.$.dialog.close();
    }
    getBehaviour(installResult) {
        switch (installResult) {
            case InstallResult.kBorealisInstallInProgress:
                this.behaviour = new ErrorBehaviour('errorDuplicate', '', false, false);
                break;
            // This should not be reachable either but if some kind of dynamic
            // permission change would occur then we can get here, so don't DCHECK.
            case InstallResult.kBorealisNotAllowed:
            case InstallResult.kDlcUnsupportedError:
            case InstallResult.kDlcInternalError:
            case InstallResult.kDlcUnknownError:
            case InstallResult.kDlcNeedRebootError:
            case InstallResult.kDlcNeedUpdateError:
                // We capture most dlc-related issues as "need update". This is not
                // strictly true (there may not be an update available, and it may not
                // fix it) but we don't have visibility into their cause enough to make
                // a better recommendation.
                this.behaviour = new ErrorBehaviour(
                /*message*/ 'errorUpdate', 
                /*link*/ INTERNAL_ERROR_URL, 
                /*retry*/ false, /*storage*/ false);
                break;
            case InstallResult.kDlcBusyError:
                this.behaviour = new ErrorBehaviour(
                /*message*/ 'errorBusy', /*link*/ '', 
                /*retry*/ true, /*storage*/ false);
                break;
            case InstallResult.kDlcNeedSpaceError:
                this.behaviour = new ErrorBehaviour(
                /*message*/ 'errorSpace', 
                /*link*/ SPACE_ERROR_URL, 
                /*retry*/ false, /*storage*/ true);
                break;
            case InstallResult.kOffline:
                this.behaviour = new ErrorBehaviour(
                /*message*/ 'errorOffline', 
                /*link*/ OFFLINE_ERROR_URL, /*retry*/ true, 
                /*storage*/ false);
                break;
            case InstallResult.kStartupFailed:
            case InstallResult.kMainAppNotPresent:
                this.behaviour = new ErrorBehaviour(
                /*message*/ 'errorStartup', /*link*/ '', 
                /*retry*/ true, /*storage*/ false);
                break;
            default:
                assertNotReached();
        }
    }
    getMessage() {
        return loadTimeData.getString(this.behaviour.getMessage());
    }
    shouldShowLink() {
        return this.behaviour.getLink() != '';
    }
    getLink() {
        return this.behaviour.getLink();
    }
    shouldShowRetryButton() {
        return this.behaviour.shouldShowRetryButton();
    }
    shouldShowStorageButton() {
        return this.behaviour.shouldShowStorageButton();
    }
}
customElements.define(BorealisInstallerErrorDialogElement.is, BorealisInstallerErrorDialogElement);

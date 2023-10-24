// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cros_components/lottie_renderer/lottie-renderer.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { MetricsRecordedSetupPage, OperationType, UserAction } from './cloud_upload.mojom-webui.js';
import { CloudUploadBrowserProxy } from './cloud_upload_browser_proxy.js';
import { getTemplate } from './move_confirmation_page.html.js';
export var CloudProvider;
(function (CloudProvider) {
    CloudProvider[CloudProvider["GOOGLE_DRIVE"] = 0] = "GOOGLE_DRIVE";
    CloudProvider[CloudProvider["ONE_DRIVE"] = 1] = "ONE_DRIVE";
})(CloudProvider || (CloudProvider = {}));
/**
 * The MoveConfirmationPageElement represents the dialog page shown when the
 * user opens a file that needs to be moved first, and they haven't yet decided
 * to always move files.
 */
export class MoveConfirmationPageElement extends HTMLElement {
    constructor() {
        super();
        this.proxy = CloudUploadBrowserProxy.getInstance();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = getTemplate();
        const actionButton = this.$('.action-button');
        const cancelButton = this.$('.cancel-button');
        this.playPauseButton = this.$('#playPauseIcon');
        actionButton.addEventListener('click', () => this.onActionButtonClick());
        cancelButton.addEventListener('click', () => this.onCancelButtonClick());
        this.playPauseButton.addEventListener('click', () => this.onPlayPauseButtonClick());
    }
    $(query) {
        return this.shadowRoot.querySelector(query);
    }
    async setDialogAttributes(numFiles, operationType, cloudProvider) {
        const [{ moveConfirmationShown: officeMoveConfirmationShownForDrive }, { alwaysMove: alwaysMoveToDrive }, { moveConfirmationShown: officeMoveConfirmationShownForOneDrive }, { alwaysMove: alwaysMoveToOneDrive },] = await Promise.all([
            this.proxy.handler.getOfficeMoveConfirmationShownForDrive(),
            this.proxy.handler.getAlwaysMoveOfficeFilesToDrive(),
            this.proxy.handler.getOfficeMoveConfirmationShownForOneDrive(),
            this.proxy.handler.getAlwaysMoveOfficeFilesToOneDrive(),
        ]);
        this.cloudProvider = cloudProvider;
        const isCopyOperation = operationType === OperationType.kCopy;
        const isPlural = numFiles > 1;
        const providerName = this.getProviderName(this.cloudProvider);
        // Animation.
        this.updateAnimation();
        // Title.
        const titleElement = this.$('#title');
        if (isCopyOperation) {
            titleElement.innerText = loadTimeData.getStringF(isPlural ? 'moveConfirmationCopyTitlePlural' :
                'moveConfirmationCopyTitle', providerName, numFiles.toString());
        }
        else {
            titleElement.innerText = loadTimeData.getStringF(isPlural ? 'moveConfirmationMoveTitlePlural' :
                'moveConfirmationMoveTitle', providerName, numFiles.toString());
        }
        // Checkbox and Body.
        const bodyText = this.$('#body-text');
        const checkbox = this.$('#always-copy-or-move-checkbox');
        checkbox.innerText = loadTimeData.getString('moveConfirmationAlwaysMove');
        if (this.cloudProvider === CloudProvider.ONE_DRIVE) {
            bodyText.innerText =
                loadTimeData.getString('moveConfirmationOneDriveBodyText');
            // Only show checkbox if the confirmation has been shown before for
            // OneDrive.
            if (officeMoveConfirmationShownForOneDrive) {
                checkbox.checked = alwaysMoveToOneDrive;
            }
            else {
                checkbox.remove();
            }
        }
        else {
            bodyText.innerText =
                loadTimeData.getStringF('moveConfirmationGoogleDriveBodyText');
            // Only show checkbox if the confirmation has been shown before for
            // Drive.
            if (officeMoveConfirmationShownForDrive) {
                checkbox.checked = alwaysMoveToDrive;
            }
            else {
                checkbox.remove();
            }
        }
        // Action button.
        const actionButton = this.$('.action-button');
        actionButton.innerText =
            loadTimeData.getString(isCopyOperation ? 'copyAndOpen' : 'moveAndOpen');
    }
    getProviderName(cloudProvider) {
        if (cloudProvider === CloudProvider.ONE_DRIVE) {
            return loadTimeData.getString('oneDrive');
        }
        return loadTimeData.getString('googleDrive');
    }
    createAnimation(animationUrl) {
        this.animationPlayer = document.createElement('cros-lottie-renderer');
        this.animationPlayer.id = 'animation';
        this.animationPlayer.setAttribute('asset-url', animationUrl);
        this.animationPlayer.setAttribute('dynamic', 'true');
        this.animationPlayer.setAttribute('aria-hidden', 'true');
        this.animationPlayer.autoplay = true;
        const animationWrapper = this.$('.animation-wrapper');
        const playPauseIcon = this.$('#playPauseIcon');
        animationWrapper.insertBefore(this.animationPlayer, playPauseIcon);
    }
    updateAnimation() {
        const provider = this.cloudProvider === CloudProvider.ONE_DRIVE ? 'onedrive' : 'drive';
        const animationUrl = `animations/move_confirmation_${provider}.json`;
        if (!this.animationPlayer) {
            this.createAnimation(animationUrl);
        }
        else {
            this.animationPlayer.setAttribute('asset-url', animationUrl);
        }
    }
    onActionButtonClick() {
        const checkbox = this.$('#always-copy-or-move-checkbox');
        const setAlwaysMove = !!(checkbox && checkbox.checked);
        if (this.cloudProvider === CloudProvider.ONE_DRIVE) {
            this.proxy.handler.setAlwaysMoveOfficeFilesToOneDrive(setAlwaysMove);
            this.proxy.handler.respondWithUserActionAndClose(UserAction.kUploadToOneDrive);
        }
        else {
            this.proxy.handler.setAlwaysMoveOfficeFilesToDrive(setAlwaysMove);
            this.proxy.handler.respondWithUserActionAndClose(UserAction.kUploadToGoogleDrive);
        }
    }
    onCancelButtonClick() {
        if (this.cloudProvider === CloudProvider.ONE_DRIVE) {
            this.proxy.handler.recordCancel(MetricsRecordedSetupPage.kMoveConfirmationOneDrive);
            this.proxy.handler.respondWithUserActionAndClose(UserAction.kCancelOneDrive);
        }
        else {
            this.proxy.handler.recordCancel(MetricsRecordedSetupPage.kMoveConfirmationGoogleDrive);
            this.proxy.handler.respondWithUserActionAndClose(UserAction.kCancelGoogleDrive);
        }
    }
    onPlayPauseButtonClick() {
        const animation = this.$('#animation');
        const shouldPlay = this.playPauseButton.className === 'play';
        if (shouldPlay) {
            animation.play();
            // Update button to Pause.
            this.playPauseButton.className = 'pause';
            this.playPauseButton.ariaLabel =
                loadTimeData.getString('animationPauseText');
        }
        else {
            animation.pause();
            // Update button to Play.
            this.playPauseButton.className = 'play';
            this.playPauseButton.ariaLabel =
                loadTimeData.getString('animationPlayText');
        }
    }
}
customElements.define('move-confirmation-page', MoveConfirmationPageElement);

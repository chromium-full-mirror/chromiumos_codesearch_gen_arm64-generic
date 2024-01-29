// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { getDriveQuotaMetadata, getSizeStats } from '../../common/js/api.js';
import { isRecentRoot } from '../../common/js/entry_utils.js';
import { str } from '../../common/js/translations.js';
import { VolumeType } from '../../common/js/volume_manager_types.js';
import { DirectoryModel } from './directory_model.js';
import { ProvidersModel } from './providers_model.js';
import { GearMenu } from './ui/gear_menu.js';
import { MultiMenuButton } from './ui/multi_menu_button.js';
import { ProvidersMenu } from './ui/providers_menu.js';
export class GearMenuController {
    constructor(gearButton_, gearMenu_, providersMenu_, directoryModel_, providersModel_) {
        this.gearButton_ = gearButton_;
        this.gearMenu_ = gearMenu_;
        this.providersMenu_ = providersMenu_;
        this.directoryModel_ = directoryModel_;
        this.providersModel_ = providersModel_;
        this.gearButton_.addEventListener('menushow', this.onShowGearMenu_.bind(this));
        this.directoryModel_.addEventListener('directory-changed', this.onDirectoryChanged_.bind(this));
        chrome.fileManagerPrivate.onPreferencesChanged.addListener(this.onPreferencesChanged_.bind(this));
        this.onPreferencesChanged_();
    }
    onShowGearMenu_() {
        this.refreshRemainingSpace_();
        this.providersModel_.getMountableProviders().then(providers => {
            const shouldHide = providers.length === 0;
            if (!shouldHide) {
                // Trigger an update of the providers submenu.
                this.providersMenu_.updateSubMenu();
            }
            this.gearMenu_.updateShowProviders(shouldHide);
        });
    }
    onDirectoryChanged_(directoryChangeEvent) {
        if (directoryChangeEvent.detail.volumeChanged) {
            this.refreshRemainingSpace_();
        }
        if (this.gearButton_.isMenuShown()) {
            assert(this.gearButton_.menu);
            this.gearButton_.menu.updateCommands(this.gearButton_);
        }
    }
    /**
     * Refreshes space info of the current volume.
     */
    refreshRemainingSpace_() {
        const currentDirectory = this.directoryModel_.getCurrentDirEntry();
        if (!currentDirectory || isRecentRoot(currentDirectory)) {
            this.gearMenu_.setSpaceInfo(null, false);
            return;
        }
        const currentVolumeInfo = this.directoryModel_.getCurrentVolumeInfo();
        if (!currentVolumeInfo) {
            return;
        }
        // TODO(mtomasz): Add support for remaining space indication for provided
        // file systems.
        if (currentVolumeInfo.volumeType === VolumeType.PROVIDED ||
            currentVolumeInfo.volumeType === VolumeType.MEDIA_VIEW ||
            currentVolumeInfo.volumeType === VolumeType.ARCHIVE) {
            this.gearMenu_.setSpaceInfo(null, false);
            return;
        }
        if (currentVolumeInfo.volumeType === VolumeType.DRIVE) {
            this.gearMenu_.setSpaceInfo(getDriveQuotaMetadata(currentDirectory)
                .then((quota) => {
                if (!quota) {
                    return;
                }
                return {
                    totalSize: quota.totalBytes,
                    usedSize: quota.usedBytes,
                    warningMessage: quota.organizationLimitExceeded ?
                        str('DRIVE_ORGANIZATION_STORAGE_FULL') :
                        null,
                };
            }), true);
            return;
        }
        this.gearMenu_.setSpaceInfo(getSizeStats(currentVolumeInfo.volumeId)
            .then((size) => {
            if (!size) {
                return;
            }
            return {
                totalSize: size.totalSize,
                usedSize: size.totalSize - size.remainingSize,
            };
        }), true);
    }
    /**
     * Handles preferences change and updates menu.
     */
    onPreferencesChanged_() {
        chrome.fileManagerPrivate.getPreferences(prefs => {
            if (chrome.runtime.lastError) {
                return;
            }
            if (prefs.driveSyncEnabledOnMeteredNetwork) {
                this.gearMenu_.syncButton.setAttribute('checked', '');
            }
            else {
                this.gearMenu_.syncButton.removeAttribute('checked');
            }
        });
    }
}

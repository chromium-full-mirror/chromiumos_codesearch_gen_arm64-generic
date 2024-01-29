// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Handles notifications supplied by drivefs.
 */
import { NativeEventTarget as EventTarget } from 'chrome://resources/ash/common/event_target.js';
import { RateLimiter } from '../../common/js/async_util.js';
import { unwrapEntry, urlToEntry } from '../../common/js/entry_utils.js';
import { ProgressCenterItem, ProgressItemState, ProgressItemType } from '../../common/js/progress_center_common.js';
import { str, strf } from '../../common/js/translations.js';
import { toFilesAppURL } from '../../common/js/url_constants.js';
import { visitURL } from '../../common/js/util.js';
import { getStore } from '../../state/store.js';
/**
 * Shorthand for metadata keys.
 */
const SYNC_STATUS = 'syncStatus';
const PROGRESS = 'progress';
const SYNC_COMPLETED_TIME = 'syncCompletedTime';
const AVAILABLE_OFFLINE = 'availableOffline';
const PINNED = 'pinned';
const CAN_PIN = 'canPin';
/**
 * Shorthand for sync statuses.
 */
const { COMPLETED } = chrome.fileManagerPrivate.SyncStatus;
/**
 * Prefix for Out of Quota sync messages to ensure they reuse existing
 * notification messages instead of starting new ones.
 */
var DriveErrorId;
(function (DriveErrorId) {
    DriveErrorId[DriveErrorId["OUT_OF_QUOTA"] = 1] = "OUT_OF_QUOTA";
    DriveErrorId[DriveErrorId["SHARED_DRIVE_NO_STORAGE"] = 2] = "SHARED_DRIVE_NO_STORAGE";
    DriveErrorId[DriveErrorId["MAX_VALUE"] = 2] = "MAX_VALUE";
})(DriveErrorId || (DriveErrorId = {}));
/**
 * The completed event name.
 */
const DRIVE_SYNC_COMPLETED_EVENT = 'completed';
/**
 * A list of prefixes used to disambiguate errors that come from the same source
 * to ensure separate notifications are generated.
 */
var ErrorPrefix;
(function (ErrorPrefix) {
    ErrorPrefix["NORMAL"] = "drive-sync-error-";
    ErrorPrefix["ORGANIZATION"] = "drive-sync-error-organization";
})(ErrorPrefix || (ErrorPrefix = {}));
export class DriveSyncHandlerImpl extends EventTarget {
    constructor(progressCenter_) {
        super();
        this.progressCenter_ = progressCenter_;
        this.errorIdCounter_ = DriveErrorId.MAX_VALUE + 1;
        /**
         * Recently completed URLs whose metadata should be updated after 300ms.
         */
        this.completedUrls_ = [];
        /**
         * With a rate limit of 200ms, update entries that have completed 300ms ago or
         * longer.
         */
        this.updateCompletedRateLimiter_ = new RateLimiter(async () => {
            if (this.completedUrls_.length === 0) {
                return;
            }
            const entriesToUpdate = [];
            this.completedUrls_ = this.completedUrls_.filter(url => {
                const [entry, syncCompletedTime] = this.getEntryAndSyncCompletedTimeForUrl_(url);
                // Stop tracking URLs that are no longer in the store.
                if (!entry) {
                    return false;
                }
                // Update URLs that have completed over 300ms and stop tracking them.
                if (Date.now() - syncCompletedTime > 300) {
                    entriesToUpdate.push(entry);
                    return false;
                }
                // Keep tracking URLs that are in the store and have completed <300ms ago.
                return true;
            });
            if (entriesToUpdate.length) {
                this.metadataModel_?.notifyEntriesChanged(entriesToUpdate);
                // TODO(austinct): Check if we can remove the `as MetadataKey[]` assertion
                // once we only have typescript bindings for fileManagerPrivate.
                this.metadataModel_?.get(entriesToUpdate, [
                    SYNC_STATUS,
                    PROGRESS,
                    AVAILABLE_OFFLINE,
                    PINNED,
                    CAN_PIN,
                ]);
            }
            this.updateCompletedRateLimiter_.run();
        }, 200);
        // Register events.
        chrome.fileManagerPrivate.onIndividualFileTransfersUpdated.addListener(this.updateSyncStateMetadata_.bind(this));
        chrome.fileManagerPrivate.onDriveSyncError.addListener(this.onDriveSyncError_.bind(this));
        chrome.fileManagerPrivate.onDriveConnectionStatusChanged.addListener(this.onDriveConnectionStatusChanged_.bind(this));
    }
    /**
     * Sets the MetadataModel on the DriveSyncHandler.
     */
    set metadataModel(model) {
        this.metadataModel_ = model;
    }
    /**
     * Returns the completed event name.
     */
    getCompletedEventName() {
        return DRIVE_SYNC_COMPLETED_EVENT;
    }
    getEntryAndSyncCompletedTimeForUrl_(url) {
        const entry = getStore().getState().allEntries[url]?.entry;
        if (!entry) {
            return [null, 0];
        }
        // TODO(austinct): Check if we can remove the `as MetadataKey` assertion
        // once we only have typescript bindings for fileManagerPrivate.
        const metadata = this.metadataModel_?.getCache([entry], [SYNC_COMPLETED_TIME])[0];
        return [
            unwrapEntry(entry),
            metadata?.syncCompletedTime || 0,
        ];
    }
    /**
     * Handles file transfer status updates for individual files, updating their
     * sync status metadata.
     */
    async updateSyncStateMetadata_(syncStates) {
        const urlsToUpdate = [];
        const valuesToUpdate = [];
        for (const { fileUrl, syncStatus, progress } of syncStates) {
            if (syncStatus !== COMPLETED) {
                urlsToUpdate.push(fileUrl);
                valuesToUpdate.push([syncStatus, progress, 0]);
                continue;
            }
            // Only update status to completed if the previous status was different.
            // Note: syncCompletedTime is 0 if the last event wasn't completed.
            if (!this.getEntryAndSyncCompletedTimeForUrl_(fileUrl)[1]) {
                urlsToUpdate.push(fileUrl);
                valuesToUpdate.push([syncStatus, progress, Date.now()]);
                this.completedUrls_.push(fileUrl);
            }
        }
        this.metadataModel_?.update(urlsToUpdate, [SYNC_STATUS, PROGRESS, SYNC_COMPLETED_TIME], valuesToUpdate);
        this.updateCompletedRateLimiter_.run();
    }
    /**
     * Attempts to infer of the given event is processable by the drive sync
     * handler. It uses fileUrl to make a decision. It
     * errs on the side of 'yes', when passing the judgement.
     */
    isProcessableEvent(event) {
        const fileUrl = event.fileUrl;
        if (fileUrl) {
            return fileUrl.startsWith(`filesystem:${toFilesAppURL()}`);
        }
        return true;
    }
    /**
     * Handles drive's sync errors.
     */
    async onDriveSyncError_(event) {
        if (!this.isProcessableEvent(event)) {
            return;
        }
        const postError = (name) => {
            const item = new ProgressCenterItem();
            item.type = ProgressItemType.SYNC;
            item.quiet = true;
            item.state = ProgressItemState.ERROR;
            switch (event.type) {
                case 'delete_without_permission':
                    item.message = strf('SYNC_DELETE_WITHOUT_PERMISSION_ERROR', name);
                    break;
                case 'service_unavailable':
                    item.message = str('SYNC_SERVICE_UNAVAILABLE_ERROR');
                    break;
                case 'no_server_space':
                    item.message = str('SYNC_NO_SERVER_SPACE');
                    item.setExtraButton(ProgressItemState.ERROR, str('LEARN_MORE_LABEL'), () => visitURL(str('GOOGLE_DRIVE_MANAGE_STORAGE_URL')));
                    // This error will reappear every time sync is retried, so we use
                    // a fixed ID to avoid spamming the user.
                    item.id = ErrorPrefix.NORMAL + DriveErrorId.OUT_OF_QUOTA;
                    break;
                case 'no_server_space_organization':
                    item.message = str('SYNC_NO_SERVER_SPACE_ORGANIZATION');
                    item.setExtraButton(ProgressItemState.ERROR, str('LEARN_MORE_LABEL'), () => visitURL(str('GOOGLE_DRIVE_MANAGE_STORAGE_URL')));
                    // This error will reappear every time sync is retried, so we use
                    // a fixed ID to avoid spamming the user.
                    item.id = ErrorPrefix.ORGANIZATION + DriveErrorId.OUT_OF_QUOTA;
                    break;
                case 'no_local_space':
                    item.message = strf('DRIVE_OUT_OF_SPACE_HEADER', name);
                    break;
                case 'no_shared_drive_space':
                    item.message =
                        strf('SYNC_ERROR_SHARED_DRIVE_OUT_OF_SPACE', event.sharedDrive);
                    item.setExtraButton(ProgressItemState.ERROR, str('LEARN_MORE_LABEL'), () => visitURL(str('GOOGLE_DRIVE_ENTERPRISE_MANAGE_STORAGE_URL')));
                    // Shared drives will keep trying to sync the file until it is either
                    // removed or available storage is increased. This ensures each
                    // subsequent error message only ever shows once for each individual
                    // shared drive.
                    item.id = `${ErrorPrefix.NORMAL}${DriveErrorId.SHARED_DRIVE_NO_STORAGE}${event.sharedDrive}`;
                    break;
                case 'misc':
                    item.message = strf('SYNC_MISC_ERROR', name);
                    break;
            }
            if (!item.id) {
                item.id = ErrorPrefix.NORMAL + (this.errorIdCounter_++);
            }
            this.progressCenter_.updateItem(item);
        };
        if (!event.fileUrl) {
            postError('');
            return;
        }
        try {
            this.updateSyncStateMetadata_([
                {
                    fileUrl: event.fileUrl,
                    syncStatus: chrome.fileManagerPrivate.SyncStatus.QUEUED,
                    progress: 0,
                },
            ]);
            const entry = await urlToEntry(event.fileUrl);
            postError(entry.name);
        }
        catch (error) {
            postError('');
        }
    }
    /**
     * Handles connection state change.
     */
    onDriveConnectionStatusChanged_() {
        chrome.fileManagerPrivate.getDriveConnectionState((state) => {
            // If offline, hide any sync progress notifications. When online again,
            // the Drive sync client may retry syncing and trigger
            // onFileTransfersUpdated events, causing it to be shown again.
            if (state.type ===
                chrome.fileManagerPrivate.DriveConnectionStateType.OFFLINE &&
                state.reason ===
                    chrome.fileManagerPrivate.DriveOfflineReason.NO_NETWORK) {
                this.dispatchEvent(new Event(this.getCompletedEventName()));
            }
        });
    }
}

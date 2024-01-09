// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** State of progress items. */
export var ProgressItemState;
(function (ProgressItemState) {
    ProgressItemState["SCANNING"] = "scanning";
    ProgressItemState["PROGRESSING"] = "progressing";
    ProgressItemState["COMPLETED"] = "completed";
    ProgressItemState["ERROR"] = "error";
    ProgressItemState["CANCELED"] = "canceled";
    ProgressItemState["PAUSED"] = "paused";
})(ProgressItemState || (ProgressItemState = {}));
/**
 * Policy error type. Only applicable if DLP or Enterprise Connectors policies
 * apply.
 */
export var PolicyErrorType;
(function (PolicyErrorType) {
    PolicyErrorType["DLP"] = "dlp";
    PolicyErrorType["ENTERPRISE_CONNECTORS"] = "enterprise_connectors";
    PolicyErrorType["DLP_WARNING_TIMEOUT"] = "dlp_warning_timeout";
})(PolicyErrorType || (PolicyErrorType = {}));
/** Type of progress items. */
export var ProgressItemType;
(function (ProgressItemType) {
    // The item is file copy operation.
    ProgressItemType["COPY"] = "copy";
    // The item is file delete operation.
    ProgressItemType["DELETE"] = "delete";
    // The item is emptying the trash operation.
    ProgressItemType["EMPTY_TRASH"] = "empty-trash";
    // The item is file extract operation.
    ProgressItemType["EXTRACT"] = "extract";
    // The item is file move operation.
    ProgressItemType["MOVE"] = "move";
    // The item is file zip operation.
    ProgressItemType["ZIP"] = "zip";
    // The item is drive sync operation.
    ProgressItemType["SYNC"] = "sync";
    // The item is restoring the trash.
    ProgressItemType["RESTORE"] = "restore";
    ProgressItemType["RESTORE_TO_DESTINATION"] = "restore_to_destination";
    // The item is general file transfer operation.
    // This is used for the mixed operation of summarized item.
    ProgressItemType["TRANSFER"] = "transfer";
    // The item is being trashed.
    ProgressItemType["TRASH"] = "trash";
    // The item is external drive format operation.
    ProgressItemType["FORMAT"] = "format";
    // The item is archive operation.
    ProgressItemType["MOUNT_ARCHIVE"] = "mount_archive";
    // The item is external drive partitioning operation.
    ProgressItemType["PARTITION"] = "partition";
})(ProgressItemType || (ProgressItemType = {}));
/** Item of the progress center. */
export class ProgressCenterItem {
    constructor() {
        /** Item ID. */
        this.id_ = '';
        /** State of the progress item. */
        this.state = ProgressItemState.PROGRESSING;
        /** Message of the progress item. */
        this.message = '';
        /** Source message for the progress item. */
        this.sourceMessage = '';
        /** Destination message for the progress item. */
        this.destinationMessage = '';
        /** Number of items being processed. */
        this.itemCount = 0;
        /** Max value of the progress. */
        this.progressMax = 0;
        /** Current value of the progress. */
        this.progressValue = 0;
        /*** Type of progress item. */
        this.type = null;
        /** Whether the item represents a single item or not. */
        this.single = true;
        /**
         * If the property is true, only the message of item shown in the progress
         * center and the notification of the item is created as priority = -1.
         */
        this.quiet = false;
        /** Callback function to cancel the item. */
        this.cancelCallback = null;
        /** Optional callback to be invoked after dismissing the item. */
        this.dismissCallback = null;
        /** The predicted remaining time to complete the progress item in seconds. */
        this.remainingTime = 0;
        /**
         * Contains the text and callback on an extra button when the progress
         * center item is either in COMPLETED, ERROR, or PAUSED state.
         */
        this.extraButton = new Map();
        /**
         * In the case of a copy/move operation, whether the destination folder is
         * a child of My Drive.
         */
        this.isDestinationDrive = false;
        /** The type of policy error that occurred, if any. */
        this.policyError = null;
        /** The number of files with a policy restriction, if any. */
        this.policyFileCount = null;
        /** The name of the first file with a policy restriction, if any. */
        this.policyFileName = null;
        /**
         * List of files skipped during the operation because we couldn't decrypt
         * them.
         */
        this.skippedEncryptedFiles = [];
    }
    /**
     * Sets the extra button text and callback. Use this to add an additional
     * button with configurable functionality.
     * @param text Text to use for the button.
     * @param state Which state to show the button for. Currently only
     *     `ProgressItemState.COMPLETED`, `ProgressItemState.ERROR`, and
     *     `ProgressItemState.PAUSED` are supported.
     * @param callback The callback to invoke when the button is pressed.
     */
    setExtraButton(state, text, callback) {
        if (!text || !callback) {
            console.warn('Text and callback must be supplied');
            return;
        }
        if (this.extraButton.has(state)) {
            console.warn('Extra button already defined for state:', state);
            return;
        }
        const extraButton = { text, callback };
        this.extraButton.set(state, extraButton);
    }
    /** Sets the Item ID. */
    set id(value) {
        if (!this.id_) {
            this.id_ = value;
        }
        else {
            console.error('The ID is already set. (current ID: ' + this.id_ + ')');
        }
    }
    /** Gets the Item ID. */
    get id() {
        return this.id_;
    }
    /**
     * Gets progress rate in percent.
     *
     * If the current state is canceled or completed, it always returns 0 or 100
     * respectively.
     */
    get progressRateInPercent() {
        switch (this.state) {
            case ProgressItemState.CANCELED:
                return 0;
            case ProgressItemState.COMPLETED:
                return 100;
            default:
                return ~~(100 * this.progressValue / this.progressMax);
        }
    }
    /** Whether the item can be canceled or not. */
    get cancelable() {
        return !!(this.state == ProgressItemState.PROGRESSING &&
            this.cancelCallback && this.single) ||
            !!(this.state == ProgressItemState.PAUSED && this.cancelCallback);
    }
    /** Clones the item. */
    clone() {
        const clonedItem = Object.assign(new ProgressCenterItem(), this);
        return /** @type {!ProgressCenterItem} */ (clonedItem);
    }
}

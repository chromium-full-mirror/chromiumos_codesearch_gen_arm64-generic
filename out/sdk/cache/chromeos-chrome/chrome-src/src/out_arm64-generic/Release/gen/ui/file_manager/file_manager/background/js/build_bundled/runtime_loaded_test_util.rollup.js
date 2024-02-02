import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import 'chrome://resources/js/cr.js';

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** State of progress items. */
var ProgressItemState;
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
var PolicyErrorType;
(function (PolicyErrorType) {
    PolicyErrorType["DLP"] = "dlp";
    PolicyErrorType["ENTERPRISE_CONNECTORS"] = "enterprise_connectors";
    PolicyErrorType["DLP_WARNING_TIMEOUT"] = "dlp_warning_timeout";
})(PolicyErrorType || (PolicyErrorType = {}));
/** Type of progress items. */
var ProgressItemType;
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
class ProgressCenterItem {
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
        return !!(this.state === ProgressItemState.PROGRESSING &&
            this.cancelCallback && this.single) ||
            !!(this.state === ProgressItemState.PAUSED && this.cancelCallback);
    }
    /** Clones the item. */
    clone() {
        const clonedItem = Object.assign(new ProgressCenterItem(), this);
        return /** @type {!ProgressCenterItem} */ (clonedItem);
    }
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Verify |value| is truthy.
 * @param value A value to check for truthiness. Note that this
 *     may be used to test whether |value| is defined or not, and we don't want
 *     to force a cast to boolean.
 */
function assert(value, message) {
    if (value) {
        return;
    }
    throw new Error('Assertion failed' + (message ? `: ${message}` : ''));
}
/**
 * Call this from places in the code that should never be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(enum) {
 *     switch (enum) {
 *       case ENUM_FIRST_OF_TWO:
 *         return first
 *       case ENUM_LAST_OF_TWO:
 *         return last;
 *     }
 *     assertNotReached();
 *   }
 *
 * This code should only be hit in the case of serious programmer error or
 * unexpected input.
 */
function assertNotReached(message = 'Unreachable code hit') {
    assert(false, message);
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Trusted script URLs used by the Files app.
const ALLOWED_SCRIPT_URLS = new Set([
    'foreground/js/main.js',
    'background/js/runtime_loaded_test_util.js',
    'foreground/js/deferred_elements.js',
    'foreground/js/metadata/metadata_dispatcher.js',
]);
if (!window.hasOwnProperty('trustedScriptUrlPolicy_')) {
    assert(window.trustedTypes);
    window.trustedScriptUrlPolicy_ =
        window.trustedTypes.createPolicy('file-manager-trusted-script', {
            createScriptURL: (url) => {
                if (!ALLOWED_SCRIPT_URLS.has(url)) {
                    throw new Error('Script URL not allowed: ' + url);
                }
                return url;
            },
            createHTML: () => assertNotReached(),
            createScript: () => assertNotReached(),
        });
}
/**
 * Create a TrustedTypes script URL policy from a list of allowed sources, and
 * return a sanitized script URL using this policy.
 *
 * @param url Script URL to be sanitized.
 */
function getSanitizedScriptUrl(url) {
    assert(window.trustedScriptUrlPolicy_);
    return window.trustedScriptUrlPolicy_.createScriptURL(url);
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Used to load scripts at a runtime. Typical use:
 *
 * await new ScriptLoader('its_time.js').load();
 *
 * Optional parameters may be also specified:
 *
 * await new ScriptLoader('its_time.js', {type: 'module'}).load();
 */
class ScriptLoader {
    /**
     * Creates a loader that loads the script specified by |src| once the load
     * method is called. Optional |params| can specify other script attributes.
     */
    constructor(src_, params = {}) {
        this.src_ = src_;
        this.type_ = params.type;
        this.defer_ = params.defer;
    }
    async load() {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            if (this.type_ !== undefined) {
                script.type = this.type_;
            }
            if (this.defer_ !== undefined) {
                script.defer = this.defer_;
            }
            script.onload = () => resolve(this.src_);
            script.onerror = (error) => reject(error);
            script.src = getSanitizedScriptUrl(this.src_);
            document.head.append(script);
        });
    }
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Calls the `fn` function which should expect the callback as last argument.
 *
 * Resolves with the result of the `fn`.
 *
 * Rejects if there is `chrome.runtime.lastError`.
 */
function iconSetToCSSBackgroundImageValue(iconSet) {
    let lowDpiPart = null;
    let highDpiPart = null;
    if (iconSet.icon16x16Url) {
        lowDpiPart = 'url(' + iconSet.icon16x16Url + ') 1x';
    }
    if (iconSet.icon32x32Url) {
        highDpiPart = 'url(' + iconSet.icon32x32Url + ') 2x';
    }
    if (lowDpiPart && highDpiPart) {
        return 'image-set(' + lowDpiPart + ', ' + highDpiPart + ')';
    }
    else if (lowDpiPart) {
        return 'image-set(' + lowDpiPart + ')';
    }
    else if (highDpiPart) {
        return 'image-set(' + highDpiPart + ')';
    }
    return 'none';
}
/**
 * Mapping table for FileError.code style enum to DOMError.name string.
 */
var FileErrorToDomError;
(function (FileErrorToDomError) {
    FileErrorToDomError["ABORT_ERR"] = "AbortError";
    FileErrorToDomError["INVALID_MODIFICATION_ERR"] = "InvalidModificationError";
    FileErrorToDomError["INVALID_STATE_ERR"] = "InvalidStateError";
    FileErrorToDomError["NO_MODIFICATION_ALLOWED_ERR"] = "NoModificationAllowedError";
    FileErrorToDomError["NOT_FOUND_ERR"] = "NotFoundError";
    FileErrorToDomError["NOT_READABLE_ERR"] = "NotReadable";
    FileErrorToDomError["PATH_EXISTS_ERR"] = "PathExistsError";
    FileErrorToDomError["QUOTA_EXCEEDED_ERR"] = "QuotaExceededError";
    FileErrorToDomError["TYPE_MISMATCH_ERR"] = "TypeMismatchError";
    FileErrorToDomError["ENCODING_ERR"] = "EncodingError";
})(FileErrorToDomError || (FileErrorToDomError = {}));
function descriptorEqual(left, right) {
    return left.appId === right.appId && left.taskType === right.taskType &&
        left.actionId === right.actionId;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Namespace for test related things.
 */
window.test = window.test || {};
const test = window.test;
/**
 * Namespace for test utility functions.
 *
 * Public functions in the test.util.sync and the test.util.async namespaces are
 * published to test cases and can be called by using callRemoteTestUtil. The
 * arguments are serialized as JSON internally. If application ID is passed to
 * callRemoteTestUtil, the content window of the application is added as the
 * first argument. The functions in the test.util.async namespace are passed the
 * callback function as the last argument.
 */
test.util = {};
/**
 * Namespace for synchronous utility functions.
 */
test.util.sync = {};
/**
 * Namespace for asynchronous utility functions.
 */
test.util.async = {};

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Sanitizes the formatted date. Replaces unusual space with normal space.
 * @param strDate the date already in the string format.
 */
function sanitizeDate(strDate) {
    return strDate.replace('\u202f', ' ');
}
/**
 * Returns details about each file shown in the file list: name, size, type and
 * modification time.
 *
 * Since FilesApp normally has a fixed display size in test, and also since the
 * #detail-table recycles its file row elements, this call only returns details
 * about the visible file rows (11 rows normally, see crbug.com/850834).
 *
 * @param contentWindow Window to be tested.
 * @return Details for each visible file row.
 */
test.util.sync.getFileList = (contentWindow) => {
    const table = contentWindow.document.querySelector('#detail-table');
    const rows = table.querySelectorAll('li');
    const fileList = [];
    for (const row of rows) {
        fileList.push([
            row.querySelector('.filename-label')?.textContent ?? '',
            row.querySelector('.size')?.textContent ?? '',
            row.querySelector('.type')?.textContent ?? '',
            sanitizeDate(row.querySelector('.date')?.textContent || ''),
        ]);
    }
    return fileList;
};
/**
 * Returns the name of the files currently selected in the file list. Note the
 * routine has the same 'visible files' limitation as getFileList() above.
 *
 * @param contentWindow Window to be tested.
 * @return Selected file names.
 */
test.util.sync.getSelectedFiles = (contentWindow) => {
    const table = contentWindow.document.querySelector('#detail-table');
    const rows = table.querySelectorAll('li');
    const selected = [];
    for (const row of rows) {
        if (row.hasAttribute('selected')) {
            selected.push(row.querySelector('.filename-label')?.textContent ?? '');
        }
    }
    return selected;
};
/**
 * Fakes pressing the down arrow until the given |filename| is selected.
 *
 * @param contentWindow Window to be tested.
 * @param filename Name of the file to be selected.
 * @return True if file got selected, false otherwise.
 */
test.util.sync.selectFile =
    (contentWindow, filename) => {
        const rows = contentWindow.document.querySelectorAll('#detail-table li');
        test.util.sync.focus(contentWindow, '#file-list');
        test.util.sync.fakeKeyDown(contentWindow, '#file-list', 'Home', false, false, false);
        for (let index = 0; index < rows.length; ++index) {
            const selection = test.util.sync.getSelectedFiles(contentWindow);
            if (selection.length === 1 && selection[0] === filename) {
                return true;
            }
            test.util.sync.fakeKeyDown(contentWindow, '#file-list', 'ArrowDown', false, false, false);
        }
        console.warn('Failed to select file "' + filename + '"');
        return false;
    };
/**
 * Open the file by selectFile and fakeMouseDoubleClick.
 *
 * @param contentWindow Window to be tested.
 * @param filename Name of the file to be opened.
 * @return True if file got selected and a double click message is
 *     sent, false otherwise.
 */
test.util.sync.openFile =
    (contentWindow, filename) => {
        const query = '#file-list li.table-row[selected] .filename-label span';
        return test.util.sync.selectFile(contentWindow, filename) &&
            test.util.sync.fakeMouseDoubleClick(contentWindow, query);
    };
/**
 * Returns the last URL visited with visitURL() (e.g. for "Manage in Drive").
 *
 * @param contentWindow The window where visitURL() was called.
 * @return The URL of the last URL visited.
 */
test.util.sync.getLastVisitedURL = (contentWindow) => {
    return contentWindow.fileManager.getLastVisitedUrl();
};
/**
 * Returns a string translation from its translation ID.
 * @param id The id of the translated string.
 */
test.util.sync.getTranslatedString =
    (contentWindow, id) => {
        return contentWindow.fileManager.getTranslatedString(id);
    };
/**
 * Executes Javascript code on a webview and returns the result.
 *
 * @param contentWindow Window to be tested.
 * @param webViewQuery Selector for the web view.
 * @param code Javascript code to be executed within the web view.
 * @param callback Callback function with results returned by the script.
 */
test.util.async.executeScriptInWebView =
    (contentWindow, webViewQuery, code, callback) => {
        const webView = contentWindow.document.querySelector(webViewQuery);
        webView.executeScript({ code: code }, callback);
    };
/**
 * Selects |filename| and fakes pressing Ctrl+C, Ctrl+V (copy, paste).
 *
 * @param contentWindow Window to be tested.
 * @param filename Name of the file to be copied.
 * @return True if copying got simulated successfully. It does not
 *     say if the file got copied, or not.
 */
test.util.sync.copyFile =
    (contentWindow, filename) => {
        if (!test.util.sync.selectFile(contentWindow, filename)) {
            return false;
        }
        // Ctrl+C and Ctrl+V
        test.util.sync.fakeKeyDown(contentWindow, '#file-list', 'c', true, false, false);
        test.util.sync.fakeKeyDown(contentWindow, '#file-list', 'v', true, false, false);
        return true;
    };
/**
 * Selects |filename| and fakes pressing the Delete key.
 *
 * @param contentWindow Window to be tested.
 * @param filename Name of the file to be deleted.
 * @return True if deleting got simulated successfully. It does not
 *     say if the file got deleted, or not.
 */
test.util.sync.deleteFile =
    (contentWindow, filename) => {
        if (!test.util.sync.selectFile(contentWindow, filename)) {
            return false;
        }
        // Delete
        test.util.sync.fakeKeyDown(contentWindow, '#file-list', 'Delete', false, false, false);
        return true;
    };
/**
 * Execute a command on the document in the specified window.
 *
 * @param contentWindow Window to be tested.
 * @param command Command name.
 * @return True if the command is executed successfully.
 */
test.util.sync.execCommand =
    (contentWindow, command) => {
        const ret = contentWindow.document.execCommand(command);
        if (!ret) {
            // TODO(b/191831968): Fix execCommand for SWA.
            console.warn(`execCommand(${command}) returned false for SWA, forcing ` +
                `return value to true. b/191831968`);
            return true;
        }
        return ret;
    };
/**
 * Override the task-related methods in private api for test.
 *
 * @param contentWindow Window to be tested.
 * @param taskList List of tasks to be returned in
 *     fileManagerPrivate.getFileTasks().
 * @param isPolicyDefault Whether the default is set by policy.
 * @return Always return true.
 */
test.util.sync.overrideTasks =
    (contentWindow, taskList, isPolicyDefault = false) => {
        const getFileTasks = (_entries, _sourceUrls, onTasks) => {
            // Call onTask asynchronously (same with original getFileTasks).
            setTimeout(() => {
                const policyDefaultHandlerStatus = isPolicyDefault ?
                    chrome.fileManagerPrivate.PolicyDefaultHandlerStatus
                        .DEFAULT_HANDLER_ASSIGNED_BY_POLICY :
                    undefined;
                onTasks({ tasks: taskList, policyDefaultHandlerStatus });
            }, 0);
        };
        const executeTask = (descriptor, entries, callback) => {
            executedTasks.push({ descriptor, entries, callback });
        };
        const setDefaultTask = (descriptor) => {
            for (const task of taskList) {
                task.isDefault = descriptorEqual(task.descriptor, descriptor);
            }
        };
        executedTasks = [];
        contentWindow.chrome.fileManagerPrivate.getFileTasks = getFileTasks;
        contentWindow.chrome.fileManagerPrivate.executeTask = executeTask;
        contentWindow.chrome.fileManagerPrivate.setDefaultTask = setDefaultTask;
        return true;
    };
/**
 * Obtains the list of executed tasks.
 */
test.util.sync.getExecutedTasks = (_contentWindow) => {
    if (!executedTasks) {
        console.error('Please call overrideTasks() first.');
        return null;
    }
    return executedTasks.map((task) => {
        return {
            descriptor: task.descriptor,
            fileNames: task.entries.map(e => e.name),
        };
    });
};
/**
 * Obtains the list of executed tasks.
 * @param _contentWindow Window to be tested.
 * @param descriptor the task to *     check.
 * @param fileNames Name of files that should have been passed to the
 *     executeTasks().
 * @return True if the task was executed.
 */
test.util.sync.taskWasExecuted =
    (_contentWindow, descriptor, fileNames) => {
        if (!executedTasks) {
            console.error('Please call overrideTasks() first.');
            return null;
        }
        const fileNamesStr = JSON.stringify(fileNames);
        const task = executedTasks.find((task) => descriptorEqual(task.descriptor, descriptor) &&
            fileNamesStr === JSON.stringify(task.entries.map(e => e.name)));
        return task !== undefined;
    };
let executedTasks = null;
/**
 * Invokes an executed task with |responseArgs|.
 * @param _contentWindow Window to be tested.
 * @param descriptor the task to be replied to.
 * @param responseArgs the arguments to invoke the callback with.
 */
test.util.sync.replyExecutedTask =
    (_contentWindow, descriptor, responseArgs) => {
        if (!executedTasks) {
            console.error('Please call overrideTasks() first.');
            return false;
        }
        const found = executedTasks.find((task) => descriptorEqual(task.descriptor, descriptor));
        if (!found) {
            const { appId, taskType, actionId } = descriptor;
            console.error(`No task with id ${appId}|${taskType}|${actionId}`);
            return false;
        }
        found.callback(...responseArgs);
        return true;
    };
/**
 * Calls the unload handler for the window.
 * @param contentWindow Window to be tested.
 */
test.util.sync.unload = (contentWindow) => {
    contentWindow.fileManager.onUnloadForTest();
};
/**
 * Returns the path shown in the breadcrumb.
 *
 * @param contentWindow Window to be tested.
 * @return The breadcrumb path.
 */
test.util.sync.getBreadcrumbPath = (contentWindow) => {
    const doc = contentWindow.document;
    const breadcrumb = doc.querySelector('#location-breadcrumbs xf-breadcrumb');
    if (!breadcrumb) {
        return '';
    }
    return '/' + breadcrumb.path;
};
/**
 * Obtains the preferences.
 * @param callback Callback function with results returned by the script.
 */
test.util.async.getPreferences = (callback) => {
    chrome.fileManagerPrivate.getPreferences(callback);
};
/**
 * Stubs out the formatVolume() function in fileManagerPrivate.
 *
 * @param contentWindow Window to be affected.
 */
test.util.sync.overrideFormat = (contentWindow) => {
    contentWindow.chrome.fileManagerPrivate.formatVolume =
        (_volumeId, _filesystem, _volumeLabel) => { };
    return true;
};
/**
 * Run a contentWindow.requestAnimationFrame() cycle and resolve the
 * callback when that requestAnimationFrame completes.
 * @param contentWindow Window to be tested.
 * @param callback Completion callback.
 */
test.util.async.requestAnimationFrame =
    (contentWindow, callback) => {
        contentWindow.requestAnimationFrame(() => {
            callback(true);
        });
    };
/**
 * Set the window text direction to RTL and wait for the window to redraw.
 * @param contentWindow Window to be tested.
 * @param callback Completion callback.
 */
test.util.async.renderWindowTextDirectionRTL =
    (contentWindow, callback) => {
        contentWindow.document.documentElement.setAttribute('dir', 'rtl');
        contentWindow.document.body.setAttribute('dir', 'rtl');
        contentWindow.requestAnimationFrame(() => {
            callback(true);
        });
    };
/**
 * Map the appId to a map of all fakes applied in the foreground window e.g.:
 *  {'files#0': {'chrome.bla.api': FAKE}
 */
const foregroundReplacedObjects = {};
/**
 * A factory that returns a fake (aka function) that returns a static value.
 * Used to force an API to return always the same value.
 */
const staticFakeFactory = (attrName, staticValue) => {
    const fake = (...args) => {
        setTimeout(() => {
            // Find the first callback.
            for (const arg of args) {
                if (typeof arg === 'function') {
                    console.warn(`staticFake for ${attrName} value: ${staticValue}`);
                    return arg(staticValue);
                }
            }
            throw new Error(`Couldn't find callback for ${attrName}`);
        }, 0);
    };
    return fake;
};
/**
 * Registry of available fakes, it maps the an string ID to a factory
 * function which returns the actual fake used to replace an implementation.
 *
 */
const fakes = {
    'static_fake': staticFakeFactory,
};
/**
 * Class holds the information for applying and restoring fakes.
 */
class PrepareFake {
    /**
     * @param attrName Name of the attribute to be replaced by the fake
     *   e.g.: "chrome.app.window.create".
     * @param fakeId The name of the fake to be used from `fakes_`.
     * @param context The context where the attribute will be traversed from,
     *   e.g.: Window object.
     * @param args Additional args provided from the integration test to the fake,
     *     e.g.: static return value.
     */
    constructor(attrName_, fakeId_, context_, ...args) {
        this.attrName_ = attrName_;
        this.fakeId_ = fakeId_;
        this.context_ = context_;
        /**
         * The instance of the fake to be used, ready to be used.
         */
        this.fake_ = null;
        /**
         * After traversing |context_| the object that holds the attribute to be
         * replaced by the fake.
         */
        this.parentObject_ = null;
        /**
         * After traversing |context_| the attribute name in |parentObject_| that
         * will be replaced by the fake.
         */
        this.leafAttrName_ = '';
        /**
         * Original object that was replaced by the fake.
         */
        this.original_ = null;
        /**
         * If this fake object has been constructed and everything initialized.
         */
        this.prepared_ = false;
        /**
         * Counter to record the number of times the static fake is called.
         */
        this.callCounter = 0;
        /**
         * List to record the arguments provided to the static fake calls.
         */
        this.calledArgs = [];
        this.args_ = args;
    }
    /**
     * Initializes the fake and traverse |context_| to be ready to replace the
     * original implementation with the fake.
     */
    prepare() {
        this.buildFake_();
        this.traverseContext_();
        this.prepared_ = true;
    }
    /**
     * Replaces the original implementation with the fake.
     * NOTE: It requires prepare() to have been called.
     * @param contentWindow Window to be tested.
     */
    replace(contentWindow) {
        const suffix = `for ${this.attrName_} ${this.fakeId_}`;
        if (!this.prepared_) {
            throw new Error(`PrepareFake prepare() not called ${suffix}`);
        }
        if (!this.parentObject_) {
            throw new Error(`Missing parentObject_ ${suffix}`);
        }
        if (!this.fake_) {
            throw new Error(`Missing fake_ ${suffix}`);
        }
        if (!this.leafAttrName_) {
            throw new Error(`Missing leafAttrName_ ${suffix}`);
        }
        this.saveOriginal_(contentWindow);
        this.parentObject_[this.leafAttrName_] = (...args) => {
            this.fake_(...args);
            this.callCounter++;
            this.calledArgs.push([...args]);
        };
    }
    /**
     * Restores the original implementation that had been previously replaced by
     * the fake.
     */
    restore() {
        if (!this.original_) {
            return;
        }
        this.parentObject_[this.leafAttrName_] = this.original_;
        this.original_ = null;
    }
    /**
     * Saves the original implementation to be able restore it later.
     * @param contentWindow Window to be tested.
     */
    saveOriginal_(contentWindow) {
        const windowFakes = foregroundReplacedObjects[contentWindow.appID] || {};
        foregroundReplacedObjects[contentWindow.appID] = windowFakes;
        // Only save once, otherwise it can save an object that is already fake.
        if (!windowFakes[this.attrName_]) {
            if (!this.parentObject_) {
                console.error(`Failed to find the fake context: ${this.attrName_}`);
                return;
            }
            const original = this.parentObject_[this.leafAttrName_];
            this.original_ = original;
            windowFakes[this.attrName_] = this;
        }
        return;
    }
    /**
     * Constructs the fake.
     */
    buildFake_() {
        const factory = fakes[this.fakeId_];
        if (!factory) {
            throw new Error(`Failed to find the fake factory for ${this.fakeId_}`);
        }
        this.fake_ = factory(this.attrName_, ...this.args_);
    }
    /**
     * Finds the parent and the object to be replaced by fake.
     */
    traverseContext_() {
        let target = this.context_;
        let parentObj = null;
        let attr = '';
        for (const a of this.attrName_.split('.')) {
            attr = a;
            parentObj = target;
            target = target[a];
            if (target === undefined) {
                throw new Error(`Couldn't find "${0}" from "${this.attrName_}"`);
            }
        }
        this.parentObject_ = parentObj;
        this.leafAttrName_ = attr;
    }
}
/**
 * Replaces implementations in the foreground page with fakes.
 *
 * @param contentWindow Window to be tested.
 * @param fakeData An object mapping the path to the
 * object to be replaced and the value is the Array with fake id and
 * additional arguments for the fake constructor, e.g.: fakeData = {
 *     'chrome.app.window.create' : [
 *       'static_fake',
 *       ['some static value', 'other arg'],
 *     ]
 *   }
 *
 *  This will replace the API 'chrome.app.window.create' with a static fake,
 *  providing the additional data to static fake: ['some static value',
 * 'other value'].
 */
test.util.sync.foregroundFake =
    (contentWindow, fakeData) => {
        const entries = Object.entries(fakeData);
        for (const [path, mockValue] of entries) {
            const fakeId = mockValue[0];
            const fakeArgs = mockValue[1] || [];
            const fake = new PrepareFake(path, fakeId, contentWindow, ...fakeArgs);
            fake.prepare();
            fake.replace(contentWindow);
        }
        return entries.length;
    };
/**
 * Removes all fakes that were applied to the foreground page.
 * @param contentWindow Window to be tested.
 */
test.util.sync.removeAllForegroundFakes = (contentWindow) => {
    const windowFakes = foregroundReplacedObjects[contentWindow.appID];
    if (!windowFakes) {
        console.error(`Failed to find the fakes for window ${contentWindow.appID}`);
        return 0;
    }
    const savedFakes = Object.entries(windowFakes);
    let removedCount = 0;
    for (const [_path, fake] of savedFakes) {
        fake.restore();
        removedCount++;
    }
    return removedCount;
};
/**
 * Obtains the number of times the static fake api is called.
 * @param contentWindow Window to be tested.
 * @param fakedApi Path of the method that is faked.
 * @return Number of times the fake api called.
 */
test.util.sync.staticFakeCounter =
    (contentWindow, fakedApi) => {
        const windowFakes = foregroundReplacedObjects[contentWindow.appID];
        if (!windowFakes) {
            console.error(`Failed to find the fakes for window ${contentWindow.appID}`);
            return -1;
        }
        const fake = windowFakes[fakedApi];
        return fake?.callCounter ?? -1;
    };
/**
 * Obtains the list of arguments with which the static fake api was called.
 * @param contentWindow Window to be tested.
 * @param fakedApi Path of the method that is faked.
 * @return An array with all calls to this fake, each item
 *     is an array with all args passed in when the fake was called.
 */
test.util.sync.staticFakeCalledArgs =
    (contentWindow, fakedApi) => {
        const fake = foregroundReplacedObjects[contentWindow.appID][fakedApi];
        return fake.calledArgs;
    };
/**
 * Send progress item to Foreground page to display.
 * @param id Progress item id.
 * @param type Type of progress item.
 * @param state State of the progress item.
 * @param message Message of the progress item.
 * @param remainingTime The remaining time of the progress in second.
 * @param progressMax Max value of the progress.
 * @param progressValue Current value of the progress.
 * @param count Number of items being processed.
 */
test.util.sync.sendProgressItem =
    (id, type, state, message, remainingTime, progressMax = 1, progressValue = 0, count = 1) => {
        const item = new ProgressCenterItem();
        item.id = id;
        item.type = type;
        item.state = state;
        item.message = message;
        item.remainingTime = remainingTime;
        item.progressMax = progressMax;
        item.progressValue = progressValue;
        item.itemCount = count;
        window.background.progressCenter.updateItem(item);
        return true;
    };
/**
 * Remote call API handler. This function handles messages coming from the
 * test harness to execute known functions and return results. This is a
 * dummy implementation that is replaced by a real one once the test harness
 * is fully loaded.
 */
test.util.executeTestMessage =
    (_request, _callback) => {
        throw new Error('executeTestMessage not implemented');
    };
/**
 * Handles a direct call from the integration test harness. We execute
 * swaTestMessageListener call directly from the FileManagerBrowserTest.
 * This method avoids enabling external callers to Files SWA. We forward
 * the response back to the caller, as a serialized JSON string.
 */
test.swaTestMessageListener = (request) => {
    request.contentWindow = window;
    return new Promise(resolve => {
        test.util.executeTestMessage(request, (response) => {
            response = response === undefined ? '@undefined@' : response;
            resolve(JSON.stringify(response));
        });
    });
};
let testUtilsLoaded = null;
test.swaLoadTestUtils = async () => {
    const scriptUrl = 'background/js/runtime_loaded_test_util.js';
    try {
        if (!testUtilsLoaded) {
            console.log('Loading ' + scriptUrl);
            testUtilsLoaded = new ScriptLoader(scriptUrl, { type: 'module' }).load();
        }
        await testUtilsLoaded;
        console.log('Loaded ' + scriptUrl);
        return true;
    }
    catch (error) {
        testUtilsLoaded = null;
        return false;
    }
};
test.getSwaAppId = async () => {
    if (!testUtilsLoaded) {
        await test.swaLoadTestUtils();
    }
    return String(window.appID);
};

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ACTIONS_MODEL_METADATA_PREFETCH_PROPERTY_NAMES = [
    'canPin',
    'hosted',
    'pinned',
];
/**
 * These metadata is expected to be cached to accelerate computeAdditional.
 * See: crbug.com/458915.
 */
const FILE_SELECTION_METADATA_PREFETCH_PROPERTY_NAMES = [
    'availableOffline',
    'contentMimeType',
    'hosted',
    'canPin',
];
/**
 * Metadata property names used by FileTable and FileGrid.
 * These metadata is expected to be cached.
 * TODO(sashab): Store capabilities as a set of flags to save memory. See
 * https://crbug.com/849997
 *
 */
const LIST_CONTAINER_METADATA_PREFETCH_PROPERTY_NAMES = [
    'availableOffline',
    'contentMimeType',
    'customIconUrl',
    'hosted',
    'modificationTime',
    'modificationByMeTime',
    'pinned',
    'shared',
    'size',
    'canCopy',
    'canDelete',
    'canRename',
    'canAddChildren',
    'canShare',
    'canPin',
    'isMachineRoot',
    'isExternalMedia',
    'isArbitrarySyncFolder',
];
/**
 * Metadata properties used to inform the user about DLP (Data Leak Prevention)
 * Files restrictions. These metadata is expected to be cached.
 */
const DLP_METADATA_PREFETCH_PROPERTY_NAMES = [
    'isDlpRestricted',
    'sourceUrl',
    'isRestrictedForDestination',
];
/**
 * All icon types.
 */
const ICON_TYPES = {
    ANDROID_FILES: 'android_files',
    ARCHIVE: 'archive',
    AUDIO: 'audio',
    // Explicitly request the icon to be 0x0. Used to avoid the scenario where a
    // `type` is not specifically supplied vs. actually wanting a blank icon.
    BLANK: 'blank',
    BRUSCHETTA: 'bruschetta',
    BULK_PINNING_BATTERY_SAVER: 'bulk_pinning_battery_saver',
    BULK_PINNING_DONE: 'bulk_pinning_done',
    BULK_PINNING_OFFLINE: 'bulk_pinning_offline',
    CAMERA_FOLDER: 'camera-folder',
    CANT_PIN: 'cant-pin',
    CHECK: 'check',
    CLOUD_DONE: 'cloud_done',
    CLOUD_ERROR: 'cloud_error',
    CLOUD_OFFLINE: 'cloud_offline',
    CLOUD_PAUSED: 'cloud_paused',
    CLOUD_SYNC: 'cloud_sync',
    CLOUD: 'cloud',
    COMPUTER: 'computer',
    COMPUTERS_GRAND_ROOT: 'computers_grand_root',
    CROSTINI: 'crostini',
    DOWNLOADS: 'downloads',
    DRIVE_BULK_PINNING: 'drive_bulk_pinning',
    DRIVE_LOGO: 'drive_logo',
    DRIVE_OFFLINE: 'drive_offline',
    DRIVE_RECENT: 'drive_recent',
    DRIVE_SHARED_WITH_ME: 'drive_shared_with_me',
    DRIVE: 'drive',
    ERROR: 'error',
    ERROR_BANNER: 'error_banner',
    EXCEL: 'excel',
    EXTERNAL_MEDIA: 'external_media',
    FOLDER: 'folder',
    GENERIC: 'generic',
    GOOGLE_DOC: 'gdoc',
    GOOGLE_DRAW: 'gdraw',
    GOOGLE_FORM: 'gform',
    GOOGLE_LINK: 'glink',
    GOOGLE_MAP: 'gmap',
    GOOGLE_SHEET: 'gsheet',
    GOOGLE_SITE: 'gsite',
    GOOGLE_SLIDES: 'gslides',
    GOOGLE_TABLE: 'gtable',
    IMAGE: 'image',
    MTP: 'mtp',
    MY_FILES: 'my_files',
    OFFLINE: 'offline',
    OPTICAL: 'optical',
    PDF: 'pdf',
    PLUGIN_VM: 'plugin_vm',
    POWERPOINT: 'ppt',
    RAW: 'raw',
    RECENT: 'recent',
    REMOVABLE: 'removable',
    SCRIPT: 'script',
    SD_CARD: 'sd',
    SERVICE_DRIVE: 'service_drive',
    SHARED_DRIVE: 'shared_drive',
    SHARED_DRIVES_GRAND_ROOT: 'shared_drives_grand_root',
    SHARED_FOLDER: 'shared_folder',
    SHORTCUT: 'shortcut',
    SITES: 'sites',
    SMB: 'smb',
    TEAM_DRIVE: 'team_drive',
    THUMBNAIL_GENERIC: 'thumbnail_generic',
    TINI: 'tini',
    TRASH: 'trash',
    UNKNOWN_REMOVABLE: 'unknown_removable',
    USB: 'usb',
    VIDEO: 'video',
    WORD: 'word',
};
/**
 * Extension ID for OneDrive FSP, also used as ProviderId.
 */
const ODFS_EXTENSION_ID = 'gnnndjlaomemikopnjhhnoombakkkkdg';

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file contains utils for working with icons.
 */
/** Return icon name for the VM type. */
function vmTypeToIconName(vmType) {
    if (vmType === undefined) {
        console.error('vmType: is undefined');
        return '';
    }
    switch (vmType) {
        case chrome.fileManagerPrivate.VmType.BRUSCHETTA:
            return ICON_TYPES.BRUSCHETTA;
        case chrome.fileManagerPrivate.VmType.ARCVM:
            return ICON_TYPES.ANDROID_FILES;
        case chrome.fileManagerPrivate.VmType.TERMINA:
            return ICON_TYPES.CROSTINI;
        default:
            console.error('Unable to determine icon for vmType: ' + vmType);
            return '';
    }
}

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The types and enums in this file are used in integration tests.
 * For this reason we don't want additional imports in here to avoid cascading
 * importing files.
 */
/** Paths that can be handled by the dialog opener in native code. */
var AllowedPaths;
(function (AllowedPaths) {
    AllowedPaths["NATIVE_PATH"] = "nativePath";
    AllowedPaths["ANY_PATH"] = "anyPath";
    AllowedPaths["ANY_PATH_OR_URL"] = "anyPathOrUrl";
})(AllowedPaths || (AllowedPaths = {}));
/** The type of each volume. */
var VolumeType;
(function (VolumeType) {
    VolumeType["TESTING"] = "testing";
    VolumeType["DRIVE"] = "drive";
    VolumeType["DOWNLOADS"] = "downloads";
    VolumeType["REMOVABLE"] = "removable";
    VolumeType["ARCHIVE"] = "archive";
    VolumeType["MTP"] = "mtp";
    VolumeType["PROVIDED"] = "provided";
    VolumeType["MEDIA_VIEW"] = "media_view";
    VolumeType["DOCUMENTS_PROVIDER"] = "documents_provider";
    VolumeType["CROSTINI"] = "crostini";
    VolumeType["GUEST_OS"] = "guest_os";
    VolumeType["ANDROID_FILES"] = "android_files";
    VolumeType["MY_FILES"] = "my_files";
    VolumeType["SMB"] = "smb";
    VolumeType["SYSTEM_INTERNAL"] = "system_internal";
    VolumeType["TRASH"] = "trash";
})(VolumeType || (VolumeType = {}));
/**
 * List of dialog types.
 *
 * Keep this in sync with FileManagerDialog::GetDialogTypeAsString, except
 * FULL_PAGE which is specific to this code.
 */
var DialogType;
(function (DialogType) {
    DialogType["SELECT_FOLDER"] = "folder";
    DialogType["SELECT_UPLOAD_FOLDER"] = "upload-folder";
    DialogType["SELECT_SAVEAS_FILE"] = "saveas-file";
    DialogType["SELECT_OPEN_FILE"] = "open-file";
    DialogType["SELECT_OPEN_MULTI_FILE"] = "open-multi-file";
    DialogType["FULL_PAGE"] = "full-page";
})(DialogType || (DialogType = {}));

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** Type of a file system. */
var FileSystemType;
(function (FileSystemType) {
    FileSystemType["UNKNOWN"] = "";
    FileSystemType["VFAT"] = "vfat";
    FileSystemType["EXFAT"] = "exfat";
    FileSystemType["NTFS"] = "ntfs";
    FileSystemType["HFSPLUS"] = "hfsplus";
    FileSystemType["EXT2"] = "ext2";
    FileSystemType["EXT3"] = "ext3";
    FileSystemType["EXT4"] = "ext4";
    FileSystemType["ISO9660"] = "iso9660";
    FileSystemType["UDF"] = "udf";
    FileSystemType["FUSEBOX"] = "fusebox";
})(FileSystemType || (FileSystemType = {}));
/** Volume name length limits by file system type. */
({
    [FileSystemType.VFAT]: 11,
    [FileSystemType.EXFAT]: 15,
    [FileSystemType.NTFS]: 32,
});
/**
 * Type of a navigation root.
 *
 * Navigation root are the top-level entries in the navigation tree, in the
 * left hand side.
 *
 * This must be kept synchronised with the VolumeManagerRootType variant in
 * tools/metrics/histograms/metadata/file/histograms.xml.
 */
var RootType;
(function (RootType) {
    // Root for a downloads directory.
    RootType["DOWNLOADS"] = "downloads";
    // Root for a mounted archive volume.
    RootType["ARCHIVE"] = "archive";
    // Root for a removable volume.
    RootType["REMOVABLE"] = "removable";
    // Root for a drive volume.
    RootType["DRIVE"] = "drive";
    // The grand root entry of Shared Drives in Drive volume.
    RootType["SHARED_DRIVES_GRAND_ROOT"] = "shared_drives_grand_root";
    // Root directory of a Shared Drive.
    RootType["SHARED_DRIVE"] = "team_drive";
    // Root for a MTP volume.
    RootType["MTP"] = "mtp";
    // Root for a provided volume.
    RootType["PROVIDED"] = "provided";
    // Fake root for offline available files on the drive.
    RootType["DRIVE_OFFLINE"] = "drive_offline";
    // Fake root for shared files on the drive.
    RootType["DRIVE_SHARED_WITH_ME"] = "drive_shared_with_me";
    // Fake root for recent files on the drive.
    RootType["DRIVE_RECENT"] = "drive_recent";
    // Root for media views.
    RootType["MEDIA_VIEW"] = "media_view";
    // Root for documents providers.
    RootType["DOCUMENTS_PROVIDER"] = "documents_provider";
    // Fake root for the mixed "Recent" view.
    RootType["RECENT"] = "recent";
    // 'Google Drive' fake parent entry of 'My Drive', 'Shared with me' and
    // 'Offline'.
    RootType["DRIVE_FAKE_ROOT"] = "drive_fake_root";
    // Root for crostini 'Linux files'.
    RootType["CROSTINI"] = "crostini";
    // Root for mountable Guest OSs.
    RootType["GUEST_OS"] = "guest_os";
    // Root for android files.
    RootType["ANDROID_FILES"] = "android_files";
    // My Files root, which aggregates DOWNLOADS, ANDROID_FILES and CROSTINI.
    RootType["MY_FILES"] = "my_files";
    // The grand root entry of My Computers in Drive volume.
    RootType["COMPUTERS_GRAND_ROOT"] = "computers_grand_root";
    // Root directory of a Computer.
    RootType["COMPUTER"] = "computer";
    // Root directory of an external media folder under computers grand root.
    RootType["EXTERNAL_MEDIA"] = "external_media";
    // Root directory of an SMB file share.
    RootType["SMB"] = "smb";
    // Trash.
    RootType["TRASH"] = "trash";
})(RootType || (RootType = {}));
/**
 * Keep the order of this in sync with FileManagerRootType in
 * tools/metrics/histograms/enums.xml.
 * The array indices will be recorded in UMA as enum values. The index for
 * each root type should never be renumbered nor reused in this array.
 */
[
    RootType.DOWNLOADS, // 0
    RootType.ARCHIVE, // 1
    RootType.REMOVABLE, // 2
    RootType.DRIVE, // 3
    RootType.SHARED_DRIVES_GRAND_ROOT, // 4
    RootType.SHARED_DRIVE, // 5
    RootType.MTP, // 6
    RootType.PROVIDED, // 7
    'DEPRECATED_DRIVE_OTHER', // 8
    RootType.DRIVE_OFFLINE, // 9
    RootType.DRIVE_SHARED_WITH_ME, // 10
    RootType.DRIVE_RECENT, // 11
    RootType.MEDIA_VIEW, // 12
    RootType.RECENT, // 13
    RootType.DRIVE_FAKE_ROOT, // 14
    'DEPRECATED_ADD_NEW_SERVICES_MENU', // 15
    RootType.CROSTINI, // 16
    RootType.ANDROID_FILES, // 17
    RootType.MY_FILES, // 18
    RootType.COMPUTERS_GRAND_ROOT, // 19
    RootType.COMPUTER, // 20
    RootType.EXTERNAL_MEDIA, // 21
    RootType.DOCUMENTS_PROVIDER, // 22
    RootType.SMB, // 23
    'DEPRECATED_RECENT_AUDIO', // 24
    'DEPRECATED_RECENT_IMAGES', // 25
    'DEPRECATED_RECENT_VIDEOS', // 26
    RootType.TRASH, // 27
    RootType.GUEST_OS, // 28
];
/** Error type of VolumeManager. */
var VolumeError;
(function (VolumeError) {
    /* Internal errors */
    VolumeError["TIMEOUT"] = "timeout";
    /* System events */
    VolumeError["SUCCESS"] = "success";
    VolumeError["IN_PROGRESS"] = "in_progress";
    VolumeError["UNKNOWN_ERROR"] = "unknown_error";
    VolumeError["INTERNAL_ERROR"] = "internal_error";
    VolumeError["INVALID_ARGUMENT"] = "invalid_argument";
    VolumeError["INVALID_PATH"] = "invalid_path";
    VolumeError["PATH_ALREADY_MOUNTED"] = "path_already_mounted";
    VolumeError["PATH_NOT_MOUNTED"] = "path_not_mounted";
    VolumeError["DIRECTORY_CREATION_FAILED"] = "directory_creation_failed";
    VolumeError["INVALID_MOUNT_OPTIONS"] = "invalid_mount_options";
    VolumeError["INSUFFICIENT_PERMISSIONS"] = "insufficient_permissions";
    VolumeError["MOUNT_PROGRAM_NOT_FOUND"] = "mount_program_not_found";
    VolumeError["MOUNT_PROGRAM_FAILED"] = "mount_program_failed";
    VolumeError["INVALID_DEVICE_PATH"] = "invalid_device_path";
    VolumeError["UNKNOWN_FILESYSTEM"] = "unknown_filesystem";
    VolumeError["UNSUPPORTED_FILESYSTEM"] = "unsupported_filesystem";
    VolumeError["NEED_PASSWORD"] = "need_password";
    VolumeError["CANCELLED"] = "cancelled";
    VolumeError["BUSY"] = "busy";
})(VolumeError || (VolumeError = {}));
/** Source of each volume's data. */
var Source;
(function (Source) {
    Source["FILE"] = "file";
    Source["DEVICE"] = "device";
    Source["NETWORK"] = "network";
    Source["SYSTEM"] = "system";
})(Source || (Source = {}));
/**
 * @returns whether the given `volumeType` is expected to provide third party
 * icons in the iconSet property of the volume.
 */
function shouldProvideIcons(volumeType) {
    switch (volumeType) {
        case VolumeType.ANDROID_FILES:
        case VolumeType.DOCUMENTS_PROVIDER:
        case VolumeType.PROVIDED:
            return true;
    }
    return false;
}
/**
 * List of media view root types.
 * Keep this in sync with constants in arc_media_view_util.cc.
 */
var MediaViewRootType;
(function (MediaViewRootType) {
    MediaViewRootType["IMAGES"] = "images_root";
    MediaViewRootType["VIDEOS"] = "videos_root";
    MediaViewRootType["AUDIO"] = "audio_root";
    MediaViewRootType["DOCUMENTS"] = "documents_root";
})(MediaViewRootType || (MediaViewRootType = {}));
/** Gets volume type from root type. */
function getMediaViewRootTypeFromVolumeId(volumeId) {
    return volumeId.split(':', 2)[1];
}
const SHARED_DRIVES_DIRECTORY_NAME = 'team_drives';
const SHARED_DRIVES_DIRECTORY_PATH = '/' + SHARED_DRIVES_DIRECTORY_NAME;
/**
 * This is the top level directory name for Computers in drive that are using
 * the backup and sync feature.
 */
const COMPUTERS_DIRECTORY_NAME = 'Computers';
const COMPUTERS_DIRECTORY_PATH = '/' + COMPUTERS_DIRECTORY_NAME;

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * FilesAppEntry represents a single Entry (file, folder or root) in the Files
 * app. Previously, we used the Entry type directly, but this limits the code to
 * only work with native Entry type which can't be instantiated in JS.
 * For now, Entry and FilesAppEntry should be used interchangeably.
 * See also FilesAppDirEntry for a folder-like interface.
 *
 * TODO(lucmult): Replace uses of Entry with FilesAppEntry implementations.
 */
class FilesAppEntry {
    constructor(rootType = null) {
        this.rootType = rootType;
    }
    /**
     * @returns the class name of this object. It's a workaround for the fact that
     * an instance created in the foreground page and sent to the background page
     * can't be checked with `instanceof`.
     */
    get typeName() {
        return 'FilesAppEntry';
    }
    /**
     * This attribute is defined on Entry.
     * @return true if this entry represents a Directory-like entry, as
     * in have sub-entries and implements {createReader} method.
     */
    get isDirectory() {
        return false;
    }
    /**
     * This attribute is defined on Entry.
     * @return true if this entry represents a File-like entry.
     * Implementations of FilesAppEntry are expected to have this as true.
     * Whereas implementations of FilesAppDirEntry are expected to have this as
     * false.
     */
    get isFile() {
        return true;
    }
    get filesystem() {
        return null;
    }
    /**
     * This attribute is defined on Entry.
     * @return absolute path from the file system's root to the entry. It can also
     * be thought of as a path which is relative to the root directory, prepended
     * with a "/" character.
     */
    get fullPath() {
        return '';
    }
    /**
     * This attribute is defined on Entry.
     * @return the name of the entry (the final part of the path, after the last.
     */
    get name() {
        return '';
    }
    /** This method is defined on Entry. */
    getParent(_success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    /** Gets metadata, such as "modificationTime" and "contentMimeType". */
    getMetadata(_success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    /**
     * Returns true if this entry object has a native representation such as Entry
     * or DirectoryEntry, this means it can interact with VolumeManager.
     */
    get isNativeType() {
        return false;
    }
    /**
     * Returns a FileSystemEntry if this instance has one, returns null if it
     * doesn't have or the entry hasn't been resolved yet. It's used to unwrap a
     * FilesAppEntry to be able to send to FileSystem API or fileManagerPrivate.
     */
    getNativeEntry() {
        return null;
    }
    copyTo(_newParent, _newName, _success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    moveTo(_newParent, _newName, _success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    remove(_success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
}
/**
 * Interface with minimal API shared among different types of FilesAppDirEntry
 * and native DirectoryEntry. UI components should be able to display any
 * implementation of FilesAppEntry.
 *
 * FilesAppDirEntry represents a DirectoryEntry-like (folder or root) in the
 * Files app. It's a specialization of FilesAppEntry extending the behavior for
 * folder, which is basically the method createReader.
 * As in FilesAppEntry, FilesAppDirEntry should be interchangeable with Entry
 * and DirectoryEntry.
 */
class FilesAppDirEntry extends FilesAppEntry {
    get typeName() {
        return 'FilesAppDirEntry';
    }
    get isDirectory() {
        return true;
    }
    get isFile() {
        return false;
    }
    /**
     * @return Returns a reader compatible with DirectoryEntry.createReader (from
     * Web Standards) that reads the children of this instance.
     *
     * This method is defined on DirectoryEntry.
     */
    createReader() {
        return {};
    }
    getFile(_path, _options, _success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    getDirectory(_path, _options, _success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    removeRecursively(_success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
}
/**
 * A reader compatible with DirectoryEntry.createReader (from Web Standards)
 * that reads a static list of entries, provided at construction time.
 * https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader
 * It can be used by DirectoryEntry-like such as EntryList to return its
 * entries.
 */
class StaticReader {
    /**
     * @param entries_ Array of Entry-like instances that will be returned/read by
     * this reader.
     */
    constructor(entries_) {
        this.entries_ = entries_;
    }
    /**
     * Reads array of entries via |success| callback.
     *
     * @param success A callback that will be called multiple times with the
     * entries, last call will be called with an empty array indicating that no
     * more entries available.
     * @param _error A callback that's never called, it's here to match the
     * signature from the Web Standards.
     */
    readEntries(success, _error) {
        const entries = this.entries_;
        // readEntries is suppose to return empty result when there are no more
        // files to return, so we clear the entries_ attribute for next call.
        this.entries_ = [];
        // Triggers callback asynchronously.
        setTimeout(() => success(entries), 0);
    }
}
/**
 * A reader compatible with DirectoryEntry.createReader (from Web Standards),
 * It chains entries from one reader to another, creating a combined set of
 * entries from all readers.
 */
class CombinedReaders {
    /**
     * @param readers_ Array of all readers that will have their entries combined.
     */
    constructor(readers_) {
        this.readers_ = readers_;
        // Reverse readers_ so the readEntries can just use pop() to get the next.
        this.readers_.reverse();
        this.currentReader_ = this.readers_.pop();
    }
    /**
     * @param success returning entries of all readers, it's called with empty
     * Array when there is no more entries to return.
     * @param error called when error happens when reading from readers for this
     * implementation.
     */
    readEntries(success, error) {
        if (!this.currentReader_) {
            // If there is no more reader to consume, just return an empty result
            // which indicates that read has finished.
            success([]);
            return;
        }
        this.currentReader_.readEntries((results) => {
            if (results.length) {
                success(results);
            }
            else {
                // If there isn't no more readers, finish by calling success with no
                // results.
                if (!this.readers_.length) {
                    success([]);
                    return;
                }
                // Move to next reader and start consuming it.
                this.currentReader_ = this.readers_.pop();
                this.readEntries(success, error);
            }
        }, error);
    }
}
/**
 * EntryList, a DirectoryEntry-like object that contains entries. Initially used
 * to implement "My Files" containing VolumeEntry for "Downloads", "Linux
 * Files" and "Play Files".
 */
class EntryList extends FilesAppDirEntry {
    /**
     * @param label: Label to be used when displaying to user, it should
     *    already translated.
     * @param rootType root type.
     * @param devicePath Path belonging to the external media device. Partitions
     * on the same external drive have the same device path.
     */
    constructor(label, rootType, devicePath = '') {
        super(rootType);
        this.label = label;
        this.devicePath = devicePath;
        /** Children entries of this EntryList instance. */
        this.children_ = [];
        /**
         * EntryList can be a placeholder of a real volume (e.g. MyFiles or
         * DriveFakeRootEntryList). It can be disabled if the corresponding volume
         * type is disabled.
         */
        this.disabled = false;
    }
    get typeName() {
        return 'EntryList';
    }
    get isDirectory() {
        return true;
    }
    get isFile() {
        return false;
    }
    get fullPath() {
        return '/';
    }
    /**
     * @return List of entries that are shown as
     *     children of this Volume in the UI, but are not actually entries of the
     *     Volume.  E.g. 'Play files' is shown as a child of 'My files'.
     */
    getUiChildren() {
        return this.children_;
    }
    get name() {
        return this.label;
    }
    get isNativeType() {
        return false;
    }
    getMetadata(success, _error) {
        // Defaults modificationTime to current time just to have a valid value.
        setTimeout(() => success({ modificationTime: new Date(), size: 0 }), 0);
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toURL() {
        let url = `entry-list://${this.rootType}`;
        if (this.devicePath) {
            url += `/${this.devicePath}`;
        }
        return url;
    }
    getParent(success, _error) {
        if (success) {
            setTimeout(() => success(this), 0);
        }
    }
    /**
     * @param entry that should be added as
     * child of this EntryList.
     * This method is specific to EntryList instance.
     */
    addEntry(entry) {
        this.children_.push(entry);
        // Only VolumeEntry can have prefix set because it sets on VolumeInfo,
        // which is then used on LocationInfo/PathComponent.
        const volumeEntry = entry;
        if (volumeEntry.typeName === 'VolumeEntry') {
            volumeEntry.setPrefix(this);
        }
    }
    /**
     * @return Returns a reader compatible with
     * DirectoryEntry.createReader (from Web Standards) that reads the children of
     * this EntryList instance.
     * This method is defined on DirectoryEntry.
     */
    createReader() {
        return new StaticReader(this.children_);
    }
    /**
     * This method is specific to VolumeEntry/EntryList instance.
     * Note: we compare the volumeId instead of the whole volumeInfo reference
     * because the same volume could be mounted multiple times and every time a
     * new volumeInfo is created.
     * @return index of entry on this EntryList or -1 if not found.
     */
    findIndexByVolumeInfo(volumeInfo) {
        return this.children_.findIndex(childEntry => childEntry.volumeInfo ?
            childEntry.volumeInfo.volumeId ===
                volumeInfo.volumeId :
            false);
    }
    /**
     * Removes the first volume with the given type.
     * @param volumeType desired type.
     * This method is specific to VolumeEntry/EntryList instance.
     * @return if entry was removed.
     */
    removeByVolumeType(volumeType) {
        const childIndex = this.children_.findIndex(childEntry => {
            const volumeInfo = childEntry.volumeInfo;
            return volumeInfo && volumeInfo.volumeType === volumeType;
        });
        if (childIndex !== -1) {
            this.children_.splice(childIndex, 1);
            return true;
        }
        return false;
    }
    /**
     * Removes all entries that match the rootType.
     * @param rootType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByRootType(rootType) {
        this.children_ = this.children_.filter(entry => entry.rootType !== rootType);
    }
    /**
     * Removes all entries that match the volumeType.
     * @param volumeType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByVolumeType(volumeType) {
        this.children_ = this.children_.filter(entry => entry.volumeType !== volumeType);
    }
    /**
     * Removes the entry.
     * @param entry to be removed.
     * This method is specific to EntryList and VolumeEntry instance.
     * @return true if entry was removed.
     */
    removeChildEntry(entry) {
        const childIndex = this.children_.findIndex(childEntry => isSameEntry(childEntry, entry));
        if (childIndex !== -1) {
            this.children_.splice(childIndex, 1);
            return true;
        }
        return false;
    }
    getNativeEntry() {
        return null;
    }
    /**
     * EntryList can be a placeholder for the real volume (e.g. MyFiles or
     * DriveFakeRootEntryList), if so this field will be the volume type of the
     * volume it represents.
     */
    get volumeType() {
        switch (this.rootType) {
            case RootType.MY_FILES:
                return VolumeType.DOWNLOADS;
            case RootType.DRIVE_FAKE_ROOT:
                return VolumeType.DRIVE;
            default:
                return null;
        }
    }
}
/**
 * A DirectoryEntry-like which represents a Volume, based on VolumeInfo.
 *
 * It uses composition to behave like a DirectoryEntry and proxies some calls
 * to its VolumeInfo instance.
 *
 * It's used to be able to add a volume as child of |EntryList| and make volume
 * displayable on file list.
 */
class VolumeEntry extends FilesAppDirEntry {
    /** @param volumeInfo VolumeInfo for this entry. */
    constructor(volumeInfo) {
        super();
        this.volumeInfo = volumeInfo;
        /**
         * Additional entries that will be displayed together with this Volume's
         * entries.
         */
        this.children_ = [];
        this.disabled = false;
        this.rootEntry_ = this.volumeInfo.displayRoot;
        if (!this.rootEntry_) {
            this.volumeInfo.resolveDisplayRoot((displayRoot) => {
                this.rootEntry_ = displayRoot;
            });
        }
    }
    get typeName() {
        return 'VolumeEntry';
    }
    get volumeType() {
        return this.volumeInfo.volumeType;
    }
    get filesystem() {
        return this.rootEntry_ ? this.rootEntry_.filesystem : null;
    }
    /**
     * @return List of entries that are shown as
     *     children of this Volume in the UI, but are not
     * actually entries of the Volume.  E.g. 'Play files' is
     * shown as a child of 'My files'.  Use createReader to find
     * real child entries of the Volume's filesystem.
     */
    getUiChildren() {
        return this.children_;
    }
    get fullPath() {
        return this.rootEntry_ ? this.rootEntry_.fullPath : '';
    }
    get isDirectory() {
        return this.rootEntry_ ? this.rootEntry_.isDirectory : true;
    }
    get isFile() {
        return this.rootEntry_ ? this.rootEntry_.isFile : false;
    }
    /**
     * @see https://github.com/google/closure-compiler/blob/mastexterns/browser/fileapi.js
     * @param path Entry fullPath.
     */
    getDirectory(path, options, success, error) {
        if (!this.rootEntry_) {
            if (error) {
                setTimeout(() => error(new Error('Root entry not resolved yet')), 0);
            }
            return;
        }
        this.rootEntry_.getDirectory(path, options, success, error);
    }
    /**
     * @see https://github.com/google/closure-compiler/blob/mastexterns/browser/fileapi.js
     */
    getFile(path, options, success, error) {
        if (!this.rootEntry_) {
            if (error) {
                setTimeout(() => error(new Error('Root entry not resolved yet')), 0);
            }
            return;
        }
        this.rootEntry_.getFile(path, options, success, error);
    }
    get name() {
        return this.volumeInfo.label;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toURL() {
        return this.rootEntry_?.toURL() ?? '';
    }
    /** String used to determine the icon. */
    get iconName() {
        if (this.volumeInfo.volumeType === VolumeType.GUEST_OS) {
            return vmTypeToIconName(this.volumeInfo.vmType);
        }
        if (this.volumeInfo.volumeType === VolumeType.DOWNLOADS) {
            return VolumeType.MY_FILES;
        }
        return this.volumeInfo.volumeType;
    }
    /**
     * callback, it returns itself since EntryList is intended to be used as
     * root node and the Web Standard says to do so.
     * @param _error callback, not used for this implementation.
     */
    getParent(success, _error) {
        if (success) {
            setTimeout(() => success(this), 0);
        }
    }
    getMetadata(success, error) {
        this.rootEntry_.getMetadata(success, error);
    }
    get isNativeType() {
        return true;
    }
    getNativeEntry() {
        return this.rootEntry_;
    }
    /**
     * @return Returns a reader from root entry, which is compatible with
     * DirectoryEntry.createReader (from Web Standards). This method is defined on
     * DirectoryEntry.
     */
    createReader() {
        const readers = [];
        if (this.rootEntry_) {
            readers.push(this.rootEntry_.createReader());
        }
        if (this.children_.length) {
            readers.push(new StaticReader(this.children_));
        }
        return new CombinedReaders(readers);
    }
    /**
     * @param entry An entry to be used as prefix of this instance on breadcrumbs
     *     path, e.g. "My Files > Downloads", "My Files" is a prefixEntry on
     *     "Downloads" VolumeInfo.
     */
    setPrefix(entry) {
        this.volumeInfo.prefixEntry = entry;
    }
    /**
     * @param entry that should be added as child of this VolumeEntry. This method
     * is specific to VolumeEntry instance.
     */
    addEntry(entry) {
        this.children_.push(entry);
        // Only VolumeEntry can have prefix set because it sets on
        // VolumeInfo, which is then used on
        // LocationInfo/PathComponent.
        const volumeEntry = entry;
        if (volumeEntry.typeName === 'VolumeEntry') {
            volumeEntry.setPrefix(this);
        }
    }
    /**
     *     that's desired to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     * Note: we compare the volumeId instead of the whole volumeInfo reference
     * because the same volume could be mounted multiple times and every time a
     * new volumeInfo is created.
     * @return index of entry within VolumeEntry or -1 if not found.
     */
    findIndexByVolumeInfo(volumeInfo) {
        return this.children_.findIndex(childEntry => childEntry.volumeInfo?.volumeId ===
            volumeInfo.volumeId);
    }
    /**
     * Removes the first volume with the given type.
     * @param volumeType desired type.
     * This method is specific to VolumeEntry/EntryList instance.
     * @return if entry was removed.
     */
    removeByVolumeType(volumeType) {
        const childIndex = this.children_.findIndex(childEntry => {
            return childEntry.volumeInfo?.volumeType ===
                volumeType;
        });
        if (childIndex !== -1) {
            this.children_.splice(childIndex, 1);
            return true;
        }
        return false;
    }
    /**
     * Removes all entries that match the rootType.
     * @param rootType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByRootType(rootType) {
        this.children_ = this.children_.filter(entry => entry.rootType !== rootType);
    }
    /**
     * Removes all entries that match the volumeType.
     * @param volumeType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByVolumeType(volumeType) {
        this.children_ = this.children_.filter(entry => entry.volumeType !== volumeType);
    }
    /**
     * Removes the entry.
     * @param entry to be removed.
     * This method is specific to EntryList and VolumeEntry instance.
     * @return if entry was removed.
     */
    removeChildEntry(entry) {
        const childIndex = this.children_.findIndex(childEntry => isSameEntry(childEntry, entry));
        if (childIndex !== -1) {
            this.children_.splice(childIndex, 1);
            return true;
        }
        return false;
    }
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isFlagEnabled(flagName) {
    return loadTimeData.isInitialized() && loadTimeData.valueExists(flagName) &&
        loadTimeData.getBoolean(flagName);
}
/**
 * Returns true if GuestOsFiles flag is enabled.
 */
function isGuestOsEnabled() {
    return isFlagEnabled('GUEST_OS');
}
/**
 * Returns true if FilesSinglePartitionFormat flag is enabled.
 */
function isSinglePartitionFormatEnabled() {
    return isFlagEnabled('FILES_SINGLE_PARTITION_FORMAT_ENABLED');
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Returns a translated string.
 *
 * Wrapper function to make dealing with translated strings more concise.
 * Equivalent to loadTimeData.getString(id).
 */
function str(id) {
    try {
        return loadTimeData.getString(id);
    }
    catch (e) {
        console.warn('Failed to get string for', id);
        return id;
    }
}
/**
 * Collator for sorting.
 */
const collator = new Intl.Collator([], { usage: 'sort', numeric: true, sensitivity: 'base' });
/**
 * Returns the localized name of the root type.
 */
function getRootTypeLabel(locationInfo) {
    const volumeInfoLabel = locationInfo.volumeInfo?.label || '';
    switch (locationInfo.rootType) {
        case RootType.DOWNLOADS:
            return volumeInfoLabel;
        case RootType.DRIVE:
            return str('DRIVE_MY_DRIVE_LABEL');
        // |locationInfo| points to either the root directory of an individual Team
        // Drive or sub-directory under it, but not the Shared Drives grand
        // directory. Every Shared Drive and its sub-directories always have
        // individual names (locationInfo.hasFixedLabel is false). So
        // getRootTypeLabel() is used by PathComponent.computeComponentsFromEntry()
        // to display the ancestor name in the breadcrumb like this:
        //   Shared Drives > ABC Shared Drive > Folder1
        //   ^^^^^^^^^^^
        // By this reason, we return the label of the Shared Drives grand root here.
        case RootType.SHARED_DRIVE:
        case RootType.SHARED_DRIVES_GRAND_ROOT:
            return str('DRIVE_SHARED_DRIVES_LABEL');
        case RootType.COMPUTER:
        case RootType.COMPUTERS_GRAND_ROOT:
            return str('DRIVE_COMPUTERS_LABEL');
        case RootType.DRIVE_OFFLINE:
            return str('DRIVE_OFFLINE_COLLECTION_LABEL');
        case RootType.DRIVE_SHARED_WITH_ME:
            return str('DRIVE_SHARED_WITH_ME_COLLECTION_LABEL');
        case RootType.DRIVE_RECENT:
            return str('DRIVE_RECENT_COLLECTION_LABEL');
        case RootType.DRIVE_FAKE_ROOT:
            return str('DRIVE_DIRECTORY_LABEL');
        case RootType.RECENT:
            return str('RECENT_ROOT_LABEL');
        case RootType.CROSTINI:
            return str('LINUX_FILES_ROOT_LABEL');
        case RootType.MY_FILES:
            return str('MY_FILES_ROOT_LABEL');
        case RootType.TRASH:
            return str('TRASH_ROOT_LABEL');
        case RootType.MEDIA_VIEW:
            const mediaViewRootType = getMediaViewRootTypeFromVolumeId(locationInfo.volumeInfo?.volumeId || '');
            switch (mediaViewRootType) {
                case MediaViewRootType.IMAGES:
                    return str('MEDIA_VIEW_IMAGES_ROOT_LABEL');
                case MediaViewRootType.VIDEOS:
                    return str('MEDIA_VIEW_VIDEOS_ROOT_LABEL');
                case MediaViewRootType.AUDIO:
                    return str('MEDIA_VIEW_AUDIO_ROOT_LABEL');
                case MediaViewRootType.DOCUMENTS:
                    return str('MEDIA_VIEW_DOCUMENTS_ROOT_LABEL');
                default:
                    console.error('Unsupported media view root type: ' + mediaViewRootType);
                    return volumeInfoLabel;
            }
        case RootType.ARCHIVE:
        case RootType.REMOVABLE:
        case RootType.MTP:
        case RootType.PROVIDED:
        case RootType.ANDROID_FILES:
        case RootType.DOCUMENTS_PROVIDER:
        case RootType.SMB:
        case RootType.GUEST_OS:
            return volumeInfoLabel;
        default:
            console.error('Unsupported root type: ' + locationInfo.rootType);
            return volumeInfoLabel;
    }
}
/**
 * Returns the localized/i18n name of the entry.
 */
function getEntryLabel(locationInfo, entry) {
    if (locationInfo) {
        if (locationInfo.hasFixedLabel) {
            return getRootTypeLabel(locationInfo);
        }
        if (entry.filesystem && entry.filesystem.root === entry) {
            return getRootTypeLabel(locationInfo);
        }
    }
    // Special case for MyFiles/Downloads, MyFiles/PvmDefault and MyFiles/Camera.
    if (locationInfo && locationInfo.rootType === RootType.DOWNLOADS) {
        if (entry.fullPath === '/Downloads') {
            return str('DOWNLOADS_DIRECTORY_LABEL');
        }
        if (entry.fullPath === '/PvmDefault') {
            return str('PLUGIN_VM_DIRECTORY_LABEL');
        }
        if (entry.fullPath === '/Camera') {
            return str('CAMERA_DIRECTORY_LABEL');
        }
    }
    return entry.name;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Exception used to stop ActionsProducer when they're no longer valid.
 *
 * The concurrency model function uses this exception to force the
 * ActionsProducer to stop.
 */
class ConcurrentActionInvalidatedError extends Error {
}
/** Helper to distinguish the Action from a ActionsProducer.  */
function isActionsProducer(value) {
    return (value.next !== undefined &&
        value.throw !== undefined);
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * A class implementing ReactiveController in order to provide an ergonomic
 * way to update Lit elements based on selected data.
 */
class SelectorController {
    constructor(host, value, subscribe) {
        this.host = host;
        this.value = value;
        this.subscribe = subscribe;
        this.host.addController(this);
    }
    hostConnected() {
        this.unsubscribe = this.subscribe((value) => {
            this.value = value;
            this.host.requestUpdate();
        });
    }
    hostDisconnected() {
        this.unsubscribe();
    }
}
/**
 * A node in the selector DAG (Directed Acyclic Graph). Used to efficiently
 * process selectors and eliminate redundant calculations and state updates. A
 * selector node essentially connects parent selectors through a `select()`
 * function that combines all of their parents' emitted values to form a new
 * value.
 *
 * Note: `SelectorNode` implements the `Selector` interface, allowing the store
 * to expose nodes as `Selector`s, hiding complexities related to
 * `SelectorNode`'s implementation.
 */
class SelectorNode {
    /**
     * @param parents Either an array of Selectors or SelectorNodes whose values
     *     should be fed into the `select` function to calculate the selector's
     *     new value.
     * @param select The function that calculates the selector's new value once at
     *     least one its parents emits a new value or, initially, after the
     *     selector node is constructed. The arguments of select() must match the
     *     order and type of what is emitted by the parents. This typing match is
     *     not enforced here because SelectorNodes are only meant to be created by
     *     the Store. Users of the Store should use `combineXSelectors()` to
     * combine selectors.
     * @param name An optional human-readable name used for debugging purposes.
     *     Named selectors will log to the console when DEBUG_STORE is set,
     *     whenever they emit a new value.
     * @param isEqual_ An optional comparison function which will be used
     *     when compare the old value and the new value form the selector. By
     *     default it will use triple equal.
     */
    constructor(parents, select, name, isEqual_ = strictlyEqual) {
        this.select = select;
        this.name = name;
        this.isEqual_ = isEqual_;
        /** Last value emitted by the selector. */
        this.value_ = undefined;
        /** List of selector's current subscribers. */
        this.subscribers_ = [];
        /** List of selector's current parents. */
        this.parents_ = [];
        /**
         * The depth of this node in the SelectorEmitter DAG. Used to ensure Selector
         * nodes are emitted in the correct order.
         *
         * Nodes of depth D+1 are only processed after all nodes of depth D have been
         * processed, starting from D=0.
         *
         * Only source nodes (nodes without parents) have depth=0;
         */
        this.depth = 0;
        /** List of selector's current children. */
        this.children = [];
        this.parents = parents;
    }
    /**
     * Creates a new source node (a node with no parents).
     *
     * The store's default selector should be a source node, but other data
     * sources can be registered as source nodes as well.
     *
     * Slice's default selectors are then connected to the store's source node,
     * and additional selector nodes can then be created from store and slices'
     * default selectors using `combineXSelectors()` (and resulting selectors can
     * be further combined using `combineXSelectors()`).
     */
    static createSourceNode(select, name) {
        return new SelectorNode([], select, name);
    }
    /**
     * Creates a selector node that doesn't have parents or select function. Used
     * by slices to create selectors that are not yet connected to the store but
     * that can be subscribed to before the store is constructed.
     *
     * In other words, disconnected nodes should eventually be connected to the
     * SelectorEmitter DAG and should retain their list of subscribers after doing
     * so.
     *
     * Disconnected nodes are exclusively used internally by slices and are not
     * meant to be used outside of it.
     */
    static createDisconnectedNode(name) {
        return new SelectorNode([], () => undefined, name);
    }
    /**
     * We use a getter for parents to make sure they are always retrieved as
     * SelectorNodes, even though they might be passed in as Selectors in the
     * `combineXSelectors()` functions.
     */
    get parents() {
        return this.parents_;
    }
    set parents(parents) {
        // Disconnect current parents, if any, before replacing them.
        this.disconnect_();
        this.parents_ = parents;
        // Connects this node to its new parents.
        for (const parent of parents) {
            parent.children.push(this);
            this.depth = Math.max(this.depth, parent.depth + 1);
        }
        // Calculate the node's initial value.
        this.emit();
    }
    /**
     * Disconnects itself from the DAG by deleting its connections with its
     * parents.
     */
    disconnect_() {
        // Disconnect node from its parents.
        this.parents.forEach(p => p.disconnectChild_(this));
        this.parents_ = [];
    }
    /** Disconnects the node from one of its children. */
    disconnectChild_(node) {
        this.children.splice(this.children.indexOf(node), 1);
    }
    /**
     * Sets a new value, if such new value is different from the current. If
     * it's different, returns true and notify subscribers. Else, returns false.
     */
    emit() {
        const parentValues = this.parents.map(p => p.get());
        const newValue = this.select(...parentValues);
        if (this.isEqual_(this.value_, newValue)) {
            return false;
        }
        if (isDebugStoreEnabled() && this.name) {
            console.log(`Selector '${this.name}' emitted a new value:`);
            console.log(newValue);
        }
        this.value_ = newValue;
        for (const subscriber of this.subscribers_) {
            try {
                subscriber(newValue);
            }
            catch (e) {
                console.error(e);
            }
        }
        return true;
    }
    get() {
        return this.value_;
    }
    subscribe(cb) {
        this.subscribers_.push(cb);
        return () => this.subscribers_.splice(this.subscribers_.indexOf(cb), 1);
    }
    createController(host) {
        return new SelectorController(host, this.get(), this.subscribe.bind(this));
    }
    delete() {
        if (this.children.length > 0) {
            throw new Error('Attempting to delete node that still has children.');
        }
        this.disconnect_();
        this.subscribers_ = [];
    }
}
/**
 * A DAG (Directed Acyclic Graph) representation of chains of selectors where
 * one selector only emits if at least one of their parents has emitted, while
 * also guaranteeing that, when multiple parents of a given node emit, their
 * child only emits a single time.
 */
class SelectorEmitter {
    constructor() {
        /** Source nodes. I.e., nodes with no parents. */
        this.sourceNodes_ = [];
    }
    /** Connect source node to the DAG. */
    addSource(node) {
        this.sourceNodes_.push(node);
    }
    /**
     * Propagates changes from sourceNodes to the rest of the DAG.
     *
     * Nodes of depth D+1 are only processed after all nodes of depth D have been
     * processed, starting from D=0.
     *
     * This method ensures selectors are evaluated efficiently by:
     * - Only evaluating nodes if at least one of their parents has emitted a new
     * value;
     * - Ensuring each node only emits once per call to `processChange()` unlike a
     * naive implementation that would emit every time a parent emitted a new
     * value (meaning the node would emit multiple times per iteration if it had
     * multiple emitting parents).
     */
    processChange() {
        const toExplore = [...this.sourceNodes_];
        while (toExplore.length > 0) {
            const node = toExplore.pop();
            // Only traverse children if a new value is emitted. Children with
            // multiple parents might still be enqueued by the remaining parents.
            if (node.emit()) {
                toExplore.push(...node.children);
                // TODO(300209290): use heap instead.
                // Ensure nodes are explored in ascending order of depth.
                toExplore.sort((a, b) => b.depth - a.depth);
            }
        }
    }
}
// Comparison functions can be passed to selectors when initialized.
/** strictlyEqual use triple equal to compare values. */
function strictlyEqual(oldValue, newValue) {
    return oldValue === newValue;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Slices represent a part of the state that is nested directly under the root
 * state, aggregating its reducers and selectors.
 * @template State The shape of the store's root state.
 * @template LocalState The shape of this slice.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class Slice {
    /**
     * @param name The prefix to be used when registering action types with
     *     this slice.
     */
    constructor(name) {
        this.name = name;
        /**
         * Reducers registered with this slice.
         * Only one reducer per slice can be associated with a given action type.
         */
        this.reducers = new Map();
        /**
         * The slice's default selector - a selector that is created automatically
         * when the slice is constructed. It selects the slice's part of the state.
         */
        this.selector = SelectorNode.createDisconnectedNode(this.name);
    }
    /**
     * Returns the full action name given by prepending the slice's name to the
     * given action type (the full name is formatted as "[SLICE_NAME] TYPE").
     *
     * If the given action type is already the full name, it's returned without
     * any changes.
     *
     * Note: the only valid scenario where the given type is the full name is when
     * registering a reducer for an action primarily registered in another slice.
     */
    prependSliceName_(type) {
        const isFullName = type[0] === '[';
        return isFullName ? type : `[${this.name}] ${type}`;
    }
    /**
     * Returns an action factory for the added reducer.
     * @param localType The name of the action handled by this reducer. It should
     *     be either a new action, (e.g., 'do-thing') in which case it will get
     *     prefixed with the slice's name (e.g., '[sliceName] do-thing'), or an
     *     existing action from another slice (e.g., `someActionFactory.type`).
     * @returns A callable action factory that also holds the type and payload
     *     typing of the actions it produces. Those can be used to register
     *     reducers in other slices with the same action type.
     */
    addReducer(localType, reducer) {
        const type = this.prependSliceName_(localType);
        if (this.reducers.get(type)) {
            throw new Error('Attempting to register multiple reducers ' +
                `within slice for the same action type: ${type}`);
        }
        this.reducers.set(type, reducer);
        const actionFactory = (payload) => ({ type, payload });
        // Include action type so different slices can register reducers for the
        // same action type.
        actionFactory.type = type;
        return actionFactory;
    }
}
/**
 * A generic datastore for the state of a page, where the state is publicly
 * readable but can only be modified by dispatching an Action.
 *
 * The Store should be extended by specifying `StateType`, the app state type
 * associated with the store.
 */
class BaseStore {
    constructor(state, slices) {
        /**
         * A map of action names to reducers handled by the store.
         */
        this.reducers_ = new Map();
        /**
         * Whether the Store has been initialized. See init() method to initialize.
         */
        this.initialized_ = false;
        /**
         * Batch mode groups multiple Action mutations and only notify the observes
         * at the end of the batch. See beginBatchUpdate() and endBatchUpdate()
         * methods.
         */
        this.batchMode_ = false;
        /**
         * The DAG representation of selectors held by the store. It ensures
         * selectors are updated in an efficient manner. For more information,
         * please see the `SelectorEmitter` class documentation.
         */
        this.selectorEmitter_ = new SelectorEmitter();
        this.state_ = state;
        this.queuedActions_ = [];
        this.observers_ = [];
        this.initialized_ = false;
        this.batchMode_ = false;
        const sliceNames = new Set(slices.map(slice => slice.name));
        if (sliceNames.size !== slices.length) {
            throw new Error('One or more given slices have the same name. ' +
                'Please ensure slices are uniquely named: ' +
                [...sliceNames].join(', '));
        }
        // Connect the default root selector to the Selector Emitter.
        const rootSelector = SelectorNode.createSourceNode(() => this.state_, 'root');
        this.selectorEmitter_.addSource(rootSelector);
        this.selector = rootSelector;
        for (const slice of slices) {
            // Connect the slice's default selector to the store's.
            slice.selector.select = (state) => state[slice.name];
            slice.selector.parents = [rootSelector];
            // Populate reducers with slice.
            for (const [type, reducer] of slice.reducers.entries()) {
                const reducerList = this.reducers_.get(type);
                if (!reducerList) {
                    this.reducers_.set(type, [reducer]);
                }
                else {
                    reducerList.push(reducer);
                }
            }
        }
    }
    /**
     * Marks the Store as initialized.
     * While the Store is not initialized, no action is processed and no observes
     * are notified.
     *
     * It should be called by the app's initialization code.
     */
    init(initialState) {
        this.state_ = initialState;
        this.queuedActions_.forEach((action) => {
            if (isActionsProducer(action)) {
                this.consumeProducedActions_(action);
            }
            else {
                this.dispatchInternal_(action);
            }
        });
        this.initialized_ = true;
        this.selectorEmitter_.processChange();
        this.notifyObservers_(this.state_);
    }
    isInitialized() {
        return this.initialized_;
    }
    /**
     * Subscribe to Store changes/updates.
     * @param observer Callback called whenever the Store is updated.
     * @returns callback to unsubscribe the observer.
     */
    subscribe(observer) {
        this.observers_.push(observer);
        return this.unsubscribe.bind(this, observer);
    }
    /**
     * Removes the observer which will stop receiving Store updates.
     * @param observer The instance that was observing the store.
     */
    unsubscribe(observer) {
        // Create new copy of `observers_` to ensure elements are not removed
        // from the array in the middle of the loop in `notifyObservers_()`.
        this.observers_ = this.observers_.filter(o => o !== observer);
    }
    /**
     * Begin a batch update to store data, which will disable updates to the
     * observers until `endBatchUpdate()` is called. This is useful when a single
     * UI operation is likely to cause many sequential model updates.
     */
    beginBatchUpdate() {
        this.batchMode_ = true;
    }
    /**
     * End a batch update to the store data, notifying the observers of any
     * changes which occurred while batch mode was enabled.
     */
    endBatchUpdate() {
        this.batchMode_ = false;
        this.notifyObservers_(this.state_);
    }
    /** @returns the current state of the store.  */
    getState() {
        return this.state_;
    }
    /**
     * Dispatches an Action to the Store.
     *
     * For synchronous actions it sends the action to the reducers, which updates
     * the Store state, then the Store notifies all subscribers.
     * If the Store isn't initialized, the action is queued and dispatched to
     * reducers during the initialization.
     */
    dispatch(action) {
        if (!this.initialized_) {
            this.queuedActions_.push(action);
            return;
        }
        if (isActionsProducer(action)) {
            this.consumeProducedActions_(action);
        }
        else {
            this.dispatchInternal_(action);
        }
    }
    /**
     * Enable/Disable the debug mode for the store. More logs will be displayed in
     * the console with debug mode on.
     */
    setDebug(isDebug) {
        if (isDebug) {
            localStorage.setItem('DEBUG_STORE', '1');
        }
        else {
            localStorage.removeItem('DEBUG_STORE');
        }
    }
    /** Synchronously call apply the `action` by calling the reducer.  */
    dispatchInternal_(action) {
        this.reduce(action);
    }
    /**
     * Consumes the produced actions from the actions producer.
     * It dispatches each generated action.
     */
    async consumeProducedActions_(actionsProducer) {
        while (true) {
            try {
                const { done, value } = await actionsProducer.next();
                // Accept undefined to accept empty `yield;` or `return;`.
                // The empty `yield` is useful to allow the generator to be stopped at
                // any arbitrary point.
                if (value !== undefined) {
                    this.dispatch(value);
                }
                if (done) {
                    return;
                }
            }
            catch (error) {
                if (isInvalidationError(error)) {
                    // This error is expected when the actionsProducer has been
                    // invalidated.
                    return;
                }
                console.warn('Failure executing actions producer', error);
            }
        }
    }
    /** Apply the `action` to the Store by calling the reducer.  */
    reduce(action) {
        const isDebugStore = isDebugStoreEnabled();
        if (isDebugStore) {
            console.groupCollapsed(`Action: ${action.type}`);
            console.dir(action.payload);
        }
        const reducers = this.reducers_.get(action.type);
        if (!reducers || reducers.length === 0) {
            console.error(`No registered reducers for action: ${action.type}`);
            return;
        }
        this.state_ = reducers.reduce((state, reducer) => reducer(state, action.payload), this.state_);
        // Batch notifications until after all initialization queuedActions are
        // resolved.
        if (this.initialized_ && !this.batchMode_) {
            this.notifyObservers_(this.state_);
        }
        if (this.selector.get() !== this.state_) {
            this.selectorEmitter_.processChange();
        }
        if (isDebugStore) {
            console.groupEnd();
        }
    }
    /** Notify observers with the current state. */
    notifyObservers_(state) {
        this.observers_.forEach(o => {
            try {
                o.onStateChanged(state);
            }
            catch (error) {
                // Subscribers shouldn't fail, here we only log and continue to all
                // other subscribers.
                console.error(error);
            }
        });
    }
}
/** Returns true when the error is a ConcurrentActionInvalidatedError. */
function isInvalidationError(error) {
    if (!error) {
        return false;
    }
    if (error instanceof ConcurrentActionInvalidatedError) {
        return true;
    }
    // Rollup sometimes duplicate the definition of error class so the
    // `instanceof` above fail in this condition.
    if (error.constructor?.name === 'ConcurrentActionInvalidatedError') {
        return true;
    }
    return false;
}
/**
 * Check if the store is in debug mode or not. When it's set, action data will
 * be logged in the console for debugging purpose.
 *
 * Run `fileManager.store_.setDebug(true)` in the console to enable it.
 */
function isDebugStoreEnabled() {
    return localStorage.getItem('DEBUG_STORE') === '1';
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var EntryType;
(function (EntryType) {
    // Entries from the FileSystem API.
    EntryType["FS_API"] = "FS_API";
    // The root of a volume is an Entry from the FileSystem API, but it aggregates
    // more data from the volume.
    EntryType["VOLUME_ROOT"] = "VOLUME_ROOT";
    // A directory-like entry to aggregate other entries.
    EntryType["ENTRY_LIST"] = "ENTRY_LIST";
    // Placeholder that is replaced for another entry, for Crostini/GuestOS.
    EntryType["PLACEHOLDER"] = "PLACEHOLDER";
    // Root for the Trash.
    EntryType["TRASH"] = "TRASH";
    // Root for the Recent.
    EntryType["RECENT"] = "RECENT";
})(EntryType || (EntryType = {}));
/**
 * The status of a property, for properties that have their state updated via
 * asynchronous steps.
 */
var PropStatus;
(function (PropStatus) {
    PropStatus["STARTED"] = "STARTED";
    // Finished:
    PropStatus["SUCCESS"] = "SUCCESS";
    PropStatus["ERROR"] = "ERROR";
})(PropStatus || (PropStatus = {}));
/**
 * Task type is the source of the task, or what type of the app is this type
 * from. It has to match the `taskType` returned in the FileManagerPrivate.
 *
 * For more details see //chrome/browser/ash/file_manager/file_tasks.h
 */
var FileTaskType;
(function (FileTaskType) {
    FileTaskType["UNKNOWN"] = "";
    // The task is from a chrome app/extension that has File Browser Handler in
    // its manifest.
    FileTaskType["FILE"] = "file";
    // The task is from a chrome app/extension that has File Handler in its
    // manifest.
    FileTaskType["APP"] = "app";
    // The task is from an Android app.
    FileTaskType["ARC"] = "arc";
    // The task is from a Crostini app.
    FileTaskType["CROSTINI"] = "crostini";
    // The task is from a Parallels app.
    FileTaskType["PLUGIN_VM"] = "pluginvm";
    // The task is from a Web app/PWA/SWA.
    FileTaskType["WEB"] = "web";
})(FileTaskType || (FileTaskType = {}));
/**
 * Enumeration of all supported search locations. If new location is added,
 * please update this enum.
 */
var SearchLocation;
(function (SearchLocation) {
    SearchLocation["EVERYWHERE"] = "everywhere";
    SearchLocation["ROOT_FOLDER"] = "root_folder";
    SearchLocation["THIS_FOLDER"] = "this_folder";
})(SearchLocation || (SearchLocation = {}));
/**
 * Enumeration of all supported how-recent time spans.
 */
var SearchRecency;
(function (SearchRecency) {
    SearchRecency["ANYTIME"] = "anytime";
    SearchRecency["TODAY"] = "today";
    SearchRecency["YESTERDAY"] = "yesterday";
    SearchRecency["LAST_WEEK"] = "last_week";
    SearchRecency["LAST_MONTH"] = "last_month";
    SearchRecency["LAST_YEAR"] = "last_year";
})(SearchRecency || (SearchRecency = {}));
/**
 * Used to group volumes in the navigation tree.
 * Sections:
 *      - TOP: Recents, Shortcuts.
 *      - MY_FILES: My Files (which includes Downloads, Crostini and Arc++ as
 *                  its children).
 *      - TRASH: trash.
 *      - GOOGLE_DRIVE: Just Google Drive.
 *      - ODFS: Just ODFS.
 *      - CLOUD: All other cloud: SMBs, FSPs and Documents Providers.
 *      - ANDROID_APPS: ANDROID picker apps.
 *      - REMOVABLE: Archives, MTPs, Media Views and Removables.
 */
var NavigationSection;
(function (NavigationSection) {
    NavigationSection["TOP"] = "top";
    NavigationSection["MY_FILES"] = "my_files";
    NavigationSection["GOOGLE_DRIVE"] = "google_drive";
    NavigationSection["ODFS"] = "odfs";
    NavigationSection["CLOUD"] = "cloud";
    NavigationSection["TRASH"] = "trash";
    NavigationSection["ANDROID_APPS"] = "android_apps";
    NavigationSection["REMOVABLE"] = "removable";
})(NavigationSection || (NavigationSection = {}));
var NavigationType;
(function (NavigationType) {
    NavigationType["SHORTCUT"] = "shortcut";
    NavigationType["VOLUME"] = "volume";
    NavigationType["RECENT"] = "recent";
    NavigationType["CROSTINI"] = "crostini";
    NavigationType["GUEST_OS"] = "guest_os";
    NavigationType["ENTRY_LIST"] = "entry_list";
    NavigationType["DRIVE"] = "drive";
    NavigationType["ANDROID_APPS"] = "android_apps";
    NavigationType["TRASH"] = "trash";
    // Materialized view is used for Recent and in the future for Search.
    NavigationType["MATERIALIZED_VIEW"] = "materialized_view";
})(NavigationType || (NavigationType = {}));

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* This file is generated from:
 *  ../../../../../../../home/chrome-bot/chrome_root/src/ui/file_manager/base/gn/file_types.json5
 */
/**
 * @typedef {{
 *   translationKey: !string,
 *   type: !string,
 *   icon: (string|undefined),
 *   subtype: !string,
 *   extensions: (!Array<!string>|undefined),
 *   mime: (string|undefined),
 *   encrypted: (boolean|undefined),
 *   originalMimeType: (string|undefined)
 * }}
 */
// @ts-ignore:  error TS7005: Variable 'FileExtensionType' implicitly has an 'any' type.
/**
 * Maps a file extension to a FileExtensionType.
 * Note: If an extension can match multiple types, in this map contains
 * only the first occurrence.
 *
 * @const Map<string, !FileExtensionType>
 */
const EXTENSION_TO_TYPE = new Map([
    [".jpeg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".jpg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".jfif", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".pjpeg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".pjp", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".bmp", {
            "extensions": [
                ".bmp"
            ],
            "mime": "image/bmp",
            "subtype": "BMP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".gif", {
            "extensions": [
                ".gif"
            ],
            "mime": "image/gif",
            "subtype": "GIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".ico", {
            "extensions": [
                ".ico"
            ],
            "mime": "image/x-icon",
            "subtype": "ICO",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".png", {
            "extensions": [
                ".png"
            ],
            "mime": "image/png",
            "subtype": "PNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".webp", {
            "extensions": [
                ".webp"
            ],
            "mime": "image/webp",
            "subtype": "WebP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".tif", {
            "extensions": [
                ".tif",
                ".tiff"
            ],
            "mime": "image/tiff",
            "subtype": "TIFF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".tiff", {
            "extensions": [
                ".tif",
                ".tiff"
            ],
            "mime": "image/tiff",
            "subtype": "TIFF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".svg", {
            "extensions": [
                ".svg",
                ".svgz"
            ],
            "mime": "image/svg+xml",
            "subtype": "SVG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".svgz", {
            "extensions": [
                ".svg",
                ".svgz"
            ],
            "mime": "image/svg+xml",
            "subtype": "SVG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".avif", {
            "extensions": [
                ".avif"
            ],
            "mime": "image/avif",
            "subtype": "AVIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".jxl", {
            "extensions": [
                ".jxl"
            ],
            "mime": "image/jxl",
            "subtype": "JXL",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".xbm", {
            "extensions": [
                ".xbm"
            ],
            "mime": "image/x-xbitmap",
            "subtype": "XBM",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".arw", {
            "extensions": [
                ".arw"
            ],
            "icon": "image",
            "mime": "image/x-sony-arw",
            "subtype": "ARW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".cr2", {
            "extensions": [
                ".cr2"
            ],
            "icon": "image",
            "mime": "image/x-canon-cr2",
            "subtype": "CR2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".dng", {
            "extensions": [
                ".dng"
            ],
            "icon": "image",
            "mime": "image/x-adobe-dng",
            "subtype": "DNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".nef", {
            "extensions": [
                ".nef"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nef",
            "subtype": "NEF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".nrw", {
            "extensions": [
                ".nrw"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nrw",
            "subtype": "NRW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".orf", {
            "extensions": [
                ".orf"
            ],
            "icon": "image",
            "mime": "image/x-olympus-orf",
            "subtype": "ORF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".raf", {
            "extensions": [
                ".raf"
            ],
            "icon": "image",
            "mime": "image/x-fuji-raf",
            "subtype": "RAF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".rw2", {
            "extensions": [
                ".rw2"
            ],
            "icon": "image",
            "mime": "image/x-panasonic-rw2",
            "subtype": "RW2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".3gp", {
            "extensions": [
                ".3gp",
                ".3gpp"
            ],
            "mime": "video/3gpp",
            "subtype": "3GP",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".3gpp", {
            "extensions": [
                ".3gp",
                ".3gpp"
            ],
            "mime": "video/3gpp",
            "subtype": "3GP",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".avi", {
            "extensions": [
                ".avi"
            ],
            "mime": "video/x-msvideo",
            "subtype": "AVI",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mov", {
            "extensions": [
                ".mov"
            ],
            "mime": "video/quicktime",
            "subtype": "QuickTime",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mkv", {
            "extensions": [
                ".mkv"
            ],
            "mime": "video/x-matroska",
            "subtype": "MKV",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mp4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".m4v", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpg4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpeg4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpg", {
            "extensions": [
                ".mpg",
                ".mpeg"
            ],
            "mime": "video/mpeg",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpeg", {
            "extensions": [
                ".mpg",
                ".mpeg"
            ],
            "mime": "video/mpeg",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".ogm", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".ogv", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".ogx", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".webm", {
            "extensions": [
                ".webm"
            ],
            "mime": "video/webm",
            "subtype": "WebM",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".amr", {
            "extensions": [
                ".amr"
            ],
            "mime": "audio/amr",
            "subtype": "AMR",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".flac", {
            "extensions": [
                ".flac"
            ],
            "mime": "audio/flac",
            "subtype": "FLAC",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".mp3", {
            "extensions": [
                ".mp3"
            ],
            "mime": "audio/mpeg",
            "subtype": "MP3",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".m4a", {
            "extensions": [
                ".m4a"
            ],
            "mime": "audio/mp4a-latm",
            "subtype": "MPEG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".oga", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".ogg", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".opus", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".wav", {
            "extensions": [
                ".wav"
            ],
            "mime": "audio/x-wav",
            "subtype": "WAV",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".weba", {
            "extensions": [
                ".weba"
            ],
            "mime": "audio/webm",
            "subtype": "WEBA",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".txt", {
            "extensions": [
                ".txt",
                ".text"
            ],
            "mime": "text/plain",
            "subtype": "TXT",
            "translationKey": "PLAIN_TEXT_FILE_TYPE",
            "type": "text"
        }],
    [".text", {
            "extensions": [
                ".txt",
                ".text"
            ],
            "mime": "text/plain",
            "subtype": "TXT",
            "translationKey": "PLAIN_TEXT_FILE_TYPE",
            "type": "text"
        }],
    [".csv", {
            "extensions": [
                ".csv"
            ],
            "mime": "text/csv",
            "subtype": "CSV",
            "translationKey": "CSV_TEXT_FILE_TYPE",
            "type": "text"
        }],
    [".zip", {
            "extensions": [
                ".zip"
            ],
            "mime": "application/zip",
            "subtype": "ZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".rar", {
            "extensions": [
                ".rar"
            ],
            "mime": "application/x-rar-compressed",
            "subtype": "RAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".iso", {
            "extensions": [
                ".iso"
            ],
            "mime": "application/x-iso9660-image",
            "subtype": "ISO",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".7z", {
            "extensions": [
                ".7z"
            ],
            "mime": "application/x-7z-compressed",
            "subtype": "7-Zip",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".crx", {
            "extensions": [
                ".crx"
            ],
            "mime": "application/x-chrome-extension",
            "subtype": "CRX",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tar", {
            "extensions": [
                ".tar"
            ],
            "mime": "application/x-tar",
            "subtype": "TAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".bz2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".bz", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tbz", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tbz2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tz2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tb2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".gz", {
            "extensions": [
                ".gz",
                ".tgz"
            ],
            "mime": "application/x-gzip",
            "subtype": "GZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tgz", {
            "extensions": [
                ".gz",
                ".tgz"
            ],
            "mime": "application/x-gzip",
            "subtype": "GZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".lz", {
            "extensions": [
                ".lz"
            ],
            "mime": "application/x-lzip",
            "subtype": "LZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".lzo", {
            "extensions": [
                ".lzo"
            ],
            "mime": "application/x-lzop",
            "subtype": "LZOP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".lzma", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tlzma", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tlz", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".xz", {
            "extensions": [
                ".xz",
                ".txz"
            ],
            "mime": "application/x-xz",
            "subtype": "XZ",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".txz", {
            "extensions": [
                ".xz",
                ".txz"
            ],
            "mime": "application/x-xz",
            "subtype": "XZ",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".z", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".taz", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tz", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".zst", {
            "extensions": [
                ".zst",
                ".tzst"
            ],
            "mime": "application/zstd",
            "subtype": "Zstandard",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tzst", {
            "extensions": [
                ".zst",
                ".tzst"
            ],
            "mime": "application/zstd",
            "subtype": "Zstandard",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".gdoc", {
            "extensions": [
                ".gdoc"
            ],
            "icon": "gdoc",
            "mime": "application/vnd.google-apps.document",
            "subtype": "doc",
            "translationKey": "GDOC_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gsheet", {
            "extensions": [
                ".gsheet"
            ],
            "icon": "gsheet",
            "mime": "application/vnd.google-apps.spreadsheet",
            "subtype": "sheet",
            "translationKey": "GSHEET_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gslides", {
            "extensions": [
                ".gslides"
            ],
            "icon": "gslides",
            "mime": "application/vnd.google-apps.presentation",
            "subtype": "slides",
            "translationKey": "GSLIDES_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gdraw", {
            "extensions": [
                ".gdraw"
            ],
            "icon": "gdraw",
            "mime": "application/vnd.google-apps.drawing",
            "subtype": "draw",
            "translationKey": "GDRAW_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gtable", {
            "extensions": [
                ".gtable"
            ],
            "icon": "gtable",
            "mime": "application/vnd.google-apps.fusiontable",
            "subtype": "table",
            "translationKey": "GTABLE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".glink", {
            "extensions": [
                ".glink"
            ],
            "icon": "glink",
            "mime": "application/vnd.google-apps.shortcut",
            "subtype": "glink",
            "translationKey": "GLINK_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gform", {
            "extensions": [
                ".gform"
            ],
            "icon": "gform",
            "mime": "application/vnd.google-apps.form",
            "subtype": "form",
            "translationKey": "GFORM_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gmap", {
            "extensions": [
                ".gmap"
            ],
            "icon": "gmap",
            "mime": "application/vnd.google-apps.map",
            "subtype": "map",
            "translationKey": "GMAP_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gsite", {
            "extensions": [
                ".gsite"
            ],
            "icon": "gsite",
            "mime": "application/vnd.google-apps.site",
            "subtype": "site",
            "translationKey": "GSITE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gmaillayout", {
            "extensions": [
                ".gmaillayout"
            ],
            "icon": "gmaillayout",
            "mime": "application/vnd.google-apps.mail-layout",
            "subtype": "emaillayouts",
            "translationKey": "EMAIL_LAYOUTS_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".pdf", {
            "extensions": [
                ".pdf"
            ],
            "icon": "pdf",
            "mime": "application/pdf",
            "subtype": "PDF",
            "translationKey": "PDF_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".htm", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".html", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".mht", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".mhtml", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".shtml", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".xht", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".xhtml", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".doc", {
            "extensions": [
                ".doc"
            ],
            "icon": "word",
            "mime": "application/msword",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".docx", {
            "extensions": [
                ".docx"
            ],
            "icon": "word",
            "mime": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".ppt", {
            "extensions": [
                ".ppt"
            ],
            "icon": "ppt",
            "mime": "application/vnd.ms-powerpoint",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    [".pptx", {
            "extensions": [
                ".pptx"
            ],
            "icon": "ppt",
            "mime": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    [".xls", {
            "extensions": [
                ".xls"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    [".xlsx", {
            "extensions": [
                ".xlsx"
            ],
            "icon": "excel",
            "mime": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    [".xlsm", {
            "extensions": [
                ".xlsm"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel.sheet.macroEnabled.12",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    [".tini", {
            "extensions": [
                ".tini"
            ],
            "icon": "tini",
            "subtype": "TGZ",
            "translationKey": "TINI_FILE_TYPE",
            "type": "archive"
        }],
]);
/**
 * Maps a MIME type to a FileExtensionType.
 * Note: If a MIME type can match multiple types, in this map contains
 * only the first occurrence.
 *
 * @const Map<string, !FileExtensionType>
 */
const MIME_TO_TYPE = new Map([
    ["image/jpeg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/bmp", {
            "extensions": [
                ".bmp"
            ],
            "mime": "image/bmp",
            "subtype": "BMP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/gif", {
            "extensions": [
                ".gif"
            ],
            "mime": "image/gif",
            "subtype": "GIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/x-icon", {
            "extensions": [
                ".ico"
            ],
            "mime": "image/x-icon",
            "subtype": "ICO",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/png", {
            "extensions": [
                ".png"
            ],
            "mime": "image/png",
            "subtype": "PNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/webp", {
            "extensions": [
                ".webp"
            ],
            "mime": "image/webp",
            "subtype": "WebP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/tiff", {
            "extensions": [
                ".tif",
                ".tiff"
            ],
            "mime": "image/tiff",
            "subtype": "TIFF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/svg+xml", {
            "extensions": [
                ".svg",
                ".svgz"
            ],
            "mime": "image/svg+xml",
            "subtype": "SVG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/avif", {
            "extensions": [
                ".avif"
            ],
            "mime": "image/avif",
            "subtype": "AVIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/jxl", {
            "extensions": [
                ".jxl"
            ],
            "mime": "image/jxl",
            "subtype": "JXL",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/x-xbitmap", {
            "extensions": [
                ".xbm"
            ],
            "mime": "image/x-xbitmap",
            "subtype": "XBM",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/x-sony-arw", {
            "extensions": [
                ".arw"
            ],
            "icon": "image",
            "mime": "image/x-sony-arw",
            "subtype": "ARW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-canon-cr2", {
            "extensions": [
                ".cr2"
            ],
            "icon": "image",
            "mime": "image/x-canon-cr2",
            "subtype": "CR2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-adobe-dng", {
            "extensions": [
                ".dng"
            ],
            "icon": "image",
            "mime": "image/x-adobe-dng",
            "subtype": "DNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-nikon-nef", {
            "extensions": [
                ".nef"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nef",
            "subtype": "NEF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-nikon-nrw", {
            "extensions": [
                ".nrw"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nrw",
            "subtype": "NRW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-olympus-orf", {
            "extensions": [
                ".orf"
            ],
            "icon": "image",
            "mime": "image/x-olympus-orf",
            "subtype": "ORF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-fuji-raf", {
            "extensions": [
                ".raf"
            ],
            "icon": "image",
            "mime": "image/x-fuji-raf",
            "subtype": "RAF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-panasonic-rw2", {
            "extensions": [
                ".rw2"
            ],
            "icon": "image",
            "mime": "image/x-panasonic-rw2",
            "subtype": "RW2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["video/3gpp", {
            "extensions": [
                ".3gp",
                ".3gpp"
            ],
            "mime": "video/3gpp",
            "subtype": "3GP",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/x-msvideo", {
            "extensions": [
                ".avi"
            ],
            "mime": "video/x-msvideo",
            "subtype": "AVI",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/quicktime", {
            "extensions": [
                ".mov"
            ],
            "mime": "video/quicktime",
            "subtype": "QuickTime",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/x-matroska", {
            "extensions": [
                ".mkv"
            ],
            "mime": "video/x-matroska",
            "subtype": "MKV",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/mp4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/mpeg", {
            "extensions": [
                ".mpg",
                ".mpeg"
            ],
            "mime": "video/mpeg",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/ogg", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["application/ogg", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "application/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/webm", {
            "extensions": [
                ".webm"
            ],
            "mime": "video/webm",
            "subtype": "WebM",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["audio/amr", {
            "extensions": [
                ".amr"
            ],
            "mime": "audio/amr",
            "subtype": "AMR",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/flac", {
            "extensions": [
                ".flac"
            ],
            "mime": "audio/flac",
            "subtype": "FLAC",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/mpeg", {
            "extensions": [
                ".mp3"
            ],
            "mime": "audio/mpeg",
            "subtype": "MP3",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/mp4a-latm", {
            "extensions": [
                ".m4a"
            ],
            "mime": "audio/mp4a-latm",
            "subtype": "MPEG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/ogg", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/x-wav", {
            "extensions": [
                ".wav"
            ],
            "mime": "audio/x-wav",
            "subtype": "WAV",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/webm", {
            "extensions": [
                ".weba"
            ],
            "mime": "audio/webm",
            "subtype": "WEBA",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["text/plain", {
            "extensions": [
                ".txt",
                ".text"
            ],
            "mime": "text/plain",
            "subtype": "TXT",
            "translationKey": "PLAIN_TEXT_FILE_TYPE",
            "type": "text"
        }],
    ["text/csv", {
            "extensions": [
                ".csv"
            ],
            "mime": "text/csv",
            "subtype": "CSV",
            "translationKey": "CSV_TEXT_FILE_TYPE",
            "type": "text"
        }],
    ["application/zip", {
            "extensions": [
                ".zip"
            ],
            "mime": "application/zip",
            "subtype": "ZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-rar-compressed", {
            "extensions": [
                ".rar"
            ],
            "mime": "application/x-rar-compressed",
            "subtype": "RAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-iso9660-image", {
            "extensions": [
                ".iso"
            ],
            "mime": "application/x-iso9660-image",
            "subtype": "ISO",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-7z-compressed", {
            "extensions": [
                ".7z"
            ],
            "mime": "application/x-7z-compressed",
            "subtype": "7-Zip",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-chrome-extension", {
            "extensions": [
                ".crx"
            ],
            "mime": "application/x-chrome-extension",
            "subtype": "CRX",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-tar", {
            "extensions": [
                ".tar"
            ],
            "mime": "application/x-tar",
            "subtype": "TAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-bzip2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-gzip", {
            "extensions": [
                ".gz",
                ".tgz"
            ],
            "mime": "application/x-gzip",
            "subtype": "GZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-lzip", {
            "extensions": [
                ".lz"
            ],
            "mime": "application/x-lzip",
            "subtype": "LZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-lzop", {
            "extensions": [
                ".lzo"
            ],
            "mime": "application/x-lzop",
            "subtype": "LZOP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-lzma", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-xz", {
            "extensions": [
                ".xz",
                ".txz"
            ],
            "mime": "application/x-xz",
            "subtype": "XZ",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-compress", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/zstd", {
            "extensions": [
                ".zst",
                ".tzst"
            ],
            "mime": "application/zstd",
            "subtype": "Zstandard",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/vnd.google-apps.document", {
            "extensions": [
                ".gdoc"
            ],
            "icon": "gdoc",
            "mime": "application/vnd.google-apps.document",
            "subtype": "doc",
            "translationKey": "GDOC_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.spreadsheet", {
            "extensions": [
                ".gsheet"
            ],
            "icon": "gsheet",
            "mime": "application/vnd.google-apps.spreadsheet",
            "subtype": "sheet",
            "translationKey": "GSHEET_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.presentation", {
            "extensions": [
                ".gslides"
            ],
            "icon": "gslides",
            "mime": "application/vnd.google-apps.presentation",
            "subtype": "slides",
            "translationKey": "GSLIDES_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.drawing", {
            "extensions": [
                ".gdraw"
            ],
            "icon": "gdraw",
            "mime": "application/vnd.google-apps.drawing",
            "subtype": "draw",
            "translationKey": "GDRAW_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.fusiontable", {
            "extensions": [
                ".gtable"
            ],
            "icon": "gtable",
            "mime": "application/vnd.google-apps.fusiontable",
            "subtype": "table",
            "translationKey": "GTABLE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.shortcut", {
            "extensions": [
                ".glink"
            ],
            "icon": "glink",
            "mime": "application/vnd.google-apps.shortcut",
            "subtype": "glink",
            "translationKey": "GLINK_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.form", {
            "extensions": [
                ".gform"
            ],
            "icon": "gform",
            "mime": "application/vnd.google-apps.form",
            "subtype": "form",
            "translationKey": "GFORM_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.map", {
            "extensions": [
                ".gmap"
            ],
            "icon": "gmap",
            "mime": "application/vnd.google-apps.map",
            "subtype": "map",
            "translationKey": "GMAP_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.site", {
            "extensions": [
                ".gsite"
            ],
            "icon": "gsite",
            "mime": "application/vnd.google-apps.site",
            "subtype": "site",
            "translationKey": "GSITE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.mail-layout", {
            "extensions": [
                ".gmaillayout"
            ],
            "icon": "gmaillayout",
            "mime": "application/vnd.google-apps.mail-layout",
            "subtype": "emaillayouts",
            "translationKey": "EMAIL_LAYOUTS_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/pdf", {
            "extensions": [
                ".pdf"
            ],
            "icon": "pdf",
            "mime": "application/pdf",
            "subtype": "PDF",
            "translationKey": "PDF_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["text/html", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["application/msword", {
            "extensions": [
                ".doc"
            ],
            "icon": "word",
            "mime": "application/msword",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", {
            "extensions": [
                ".docx"
            ],
            "icon": "word",
            "mime": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.ms-powerpoint", {
            "extensions": [
                ".ppt"
            ],
            "icon": "ppt",
            "mime": "application/vnd.ms-powerpoint",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.openxmlformats-officedocument.presentationml.presentation", {
            "extensions": [
                ".pptx"
            ],
            "icon": "ppt",
            "mime": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.ms-excel", {
            "extensions": [
                ".xls"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", {
            "extensions": [
                ".xlsx"
            ],
            "icon": "excel",
            "mime": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.ms-excel.sheet.macroEnabled.12", {
            "extensions": [
                ".xlsm"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel.sheet.macroEnabled.12",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
]);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * A special placeholder for unknown types with no extension.
 */
const PLACEHOLDER = {
    translationKey: 'NO_EXTENSION_FILE_TYPE',
    type: 'UNKNOWN',
    icon: '',
    subtype: '',
    extensions: undefined,
    mime: undefined,
    encrypted: undefined,
    originalMimeType: undefined,
};
/**
 * Returns the final extension of a file name, check for the last two dots
 * to distinguish extensions like ".tar.gz" and ".gz".
 */
function getFinalExtension(fileName) {
    if (!fileName) {
        return '';
    }
    const lowerCaseFileName = fileName.toLowerCase();
    const parts = lowerCaseFileName.split('.');
    // No dot, so no extension.
    if (parts.length === 1) {
        return '';
    }
    // Only one dot, so only 1 extension.
    if (parts.length === 2) {
        return `.${parts.pop()}`;
    }
    // More than 1 dot/extension: e.g. ".tar.gz".
    const last = `.${parts.pop()}`;
    const secondLast = `.${parts.pop()}`;
    const doubleExtension = `${secondLast}${last}`;
    if (EXTENSION_TO_TYPE.has(doubleExtension)) {
        return doubleExtension;
    }
    // Double extension doesn't exist in the map, return the single one.
    return last;
}
/**
 * Gets the file type object for a given file name (base name). Use getType()
 * if possible, since this method can't recognize directories.
 */
function getFileTypeForName(name) {
    const extension = getFinalExtension(name);
    if (EXTENSION_TO_TYPE.has(extension)) {
        return EXTENSION_TO_TYPE.get(extension);
    }
    // Unknown file type.
    if (extension === '') {
        return PLACEHOLDER;
    }
    // subtype is the extension excluding the first dot.
    return {
        translationKey: 'GENERIC_FILE_TYPE',
        type: 'UNKNOWN',
        subtype: extension.substr(1).toUpperCase(),
        icon: '',
        extensions: undefined,
        mime: undefined,
        encrypted: undefined,
        originalMimeType: undefined,
    };
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// All supported file types are now defined in
// ui/file_manager/base/gn/file_types.json5.
/** A special type for directory. */
const DIRECTORY = {
    translationKey: 'FOLDER',
    type: '.folder',
    icon: 'folder',
    subtype: '',
    extensions: undefined,
    mime: undefined,
    encrypted: undefined,
    originalMimeType: undefined,
};
/**
 * Gets the file type object for a given entry. If mime type is provided, then
 * uses it with higher priority than the extension.
 *
 * @param entry Reference to the entry.
 * @param mimeType Optional mime type for the entry.
 * @return The matching descriptor or a placeholder.
 */
function getType(entry, mimeType) {
    if (entry.isDirectory) {
        const volumeInfo = entry.volumeInfo;
        // For removable partitions, use the file system type.
        if (volumeInfo && volumeInfo.diskFileSystemType) {
            return {
                translationKey: '',
                type: 'partition',
                subtype: volumeInfo.diskFileSystemType,
                icon: '',
                extensions: undefined,
                mime: undefined,
                encrypted: undefined,
                originalMimeType: undefined,
            };
        }
        return DIRECTORY;
    }
    if (mimeType) {
        const cseMatch = mimeType.match(/^application\/vnd.google-gsuite.encrypted; content="([a-z\/.-]+)"$/);
        if (cseMatch) {
            const type = { ...getType(entry, cseMatch[1]) };
            type.encrypted = true;
            type.originalMimeType = cseMatch[1];
            return type;
        }
    }
    if (mimeType && MIME_TO_TYPE.has(mimeType)) {
        return MIME_TO_TYPE.get(mimeType);
    }
    return getFileTypeForName(entry.name);
}
/**
 * @param entry Reference to the file.
 * @param mimeType Optional mime type for the file.
 * @param rootType The root type of the entry.
 * @return Returns string that represents the file icon. It refers to a file
 *     'images/filetype_' + icon + '.png'.
 */
function getIcon(entry, mimeType, rootType) {
    // Handles the FileData and FilesAppEntry types.
    if (entry && 'iconName' in entry) {
        return entry.iconName;
    }
    let icon;
    // Handles other types of entries.
    if (entry) {
        const ventry = entry;
        const fileType = getType(ventry, mimeType);
        const overridenIcon = getIconOverrides(ventry, rootType);
        icon = overridenIcon || fileType.icon || fileType.type;
    }
    return icon || 'unknown';
}
/**
 * Returns a string to be used as an attribute value to customize the entry
 * icon.
 *
 * @param rootType The root type of the entry.
 */
function getIconOverrides(entry, rootType) {
    if (!rootType) {
        return '';
    }
    // Overrides per RootType and defined by fullPath.
    const overrides = {
        [RootType.DOWNLOADS]: {
            '/Camera': 'camera-folder',
            '/Downloads': VolumeType.DOWNLOADS,
            '/PvmDefault': 'plugin_vm',
        },
    };
    const root = overrides[rootType];
    if (!root) {
        return '';
    }
    return root[entry.fullPath] ?? '';
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Utility methods for accessing chrome.metricsPrivate API.
 *
 * To be included as a first script in main.html
 */
/**
 * A map from interval name to interval start timestamp.
 */
/** Convert a short metric name to the full format. */
function convertName(name) {
    return 'FileBrowser.' + name;
}
/** Wrapper method for calling chrome.fileManagerPrivate safely. */
function callAPI(name, args) {
    try {
        const method = chrome.metricsPrivate[name];
        method.apply(chrome.metricsPrivate, args);
    }
    catch (e) {
        console.error(e.stack);
    }
}
/**
 * Record an enum value.
 *
 * @param name Metric name.
 * @param value Enum value.
 * @param validValues Array of valid values or a boundary number
 *     (one-past-the-end) value.
 */
function recordEnum(name, value, validValues) {
    console.assert(validValues !== undefined);
    let index = validValues.indexOf(value);
    const boundaryValue = validValues.length;
    // Collect invalid values in the overflow bucket at the end.
    if (index < 0 || index >= boundaryValue) {
        index = boundaryValue - 1;
    }
    // Setting min to 1 looks strange but this is exactly the recommended way
    // of using histograms for enum-like types. Bucket #0 works as a regular
    // bucket AND the underflow bucket.
    // (Source: UMA_HISTOGRAM_ENUMERATION definition in
    // base/metrics/histogram.h)
    const metricDescr = {
        'metricName': convertName(name),
        'type': chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
        'min': 1,
        'max': boundaryValue - 1,
        'buckets': boundaryValue,
    };
    callAPI('recordValue', [metricDescr, index]);
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Class used to emit window.localStorage change events to event listeners.
 * This class does 3 things:
 *
 * 1. Holds the onChanged event listeners for the current window.
 * 2. Sends broadcast event to all windows.
 * 3. Listens to broadcast events and propagates to the listeners in
 *    the current window.
 *
 * NOTE: This doesn't support the `oldValue` because it's simpler and the
 * current clients of `onChanged` don't need it.
 */
class StorageChangeTracker {
    /**
     * @param storageNamespace_ Storage namespace argument added when calling
     *     listeners.
     */
    constructor(storageNamespace_) {
        this.storageNamespace_ = storageNamespace_;
        /** Storage onChanged event listeners for the current window. */
        this.listeners_ = [];
        /** Event to send local storage changes to all window listeners. */
        window.addEventListener('storage', this.onStorageEvent_.bind(this));
    }
    /** Resets for testing: removes all listeners. */
    resetForTesting() {
        this.listeners_ = [];
    }
    /** Adds an onChanged event listener for the current window. */
    addListener(callback) {
        this.listeners_.push(callback);
    }
    /** Notifies listeners of key value changes. */
    keysChanged(changedValues) {
        const changedKeys = {};
        for (const [k, v] of Object.entries(changedValues)) {
            // `oldValue` isn't necessary for the current use case.
            changedKeys[k] = { newValue: v };
        }
        this.notifyLocally_(changedKeys);
    }
    /** Processes storage event and notifies listeners. */
    onStorageEvent_(event) {
        const { key, newValue } = event;
        if (key === null || newValue === null) {
            return;
        }
        const changedKeys = {};
        try {
            changedKeys[key] = { newValue: JSON.parse(newValue) };
        }
        catch (error) {
            console.warn(`Cannot parse local storage value from key '${key}' as JSON`, error);
            changedKeys[key] = { newValue };
        }
        this.notifyLocally_(changedKeys);
    }
    /** Notifies local (current window) listeners of key value changes. */
    notifyLocally_(keys) {
        for (const listener of this.listeners_) {
            try {
                listener(keys, this.storageNamespace_);
            }
            catch (error) {
                console.error('Error calling storage.onChanged listener', error);
            }
        }
    }
}
/**
 * StorageAreaImpl using window.localStorage as the storage area.
 */
class StorageAreaImpl {
    constructor(type) {
        this.storageChangeTracker = new StorageChangeTracker(type);
    }
    /** Gets values of `keys` and returns them in the callback. */
    get(keys, callback) {
        const keyList = Array.isArray(keys) ? keys : [keys];
        const result = {};
        for (const key of keyList) {
            result[key] = this.getValue_(key);
        }
        callback(result);
    }
    /** Gets the value of `key` from local storage. */
    getValue_(key) {
        const value = window.localStorage.getItem(key);
        try {
            return JSON.parse(value);
        }
        catch (error) {
            console.warn(`Failed to JSON parse localStorage value from key: "${key}" ` +
                `returning the raw value.`, error);
            return value;
        }
    }
    /** Async version of `this.get()`. */
    async getAsync(keys) {
        return new Promise(resolve => this.get(keys, resolve));
    }
    /**
     * Stores items in local storage.
     * @param items The items to store.
     * @param callback Callback to be called when the items have been stored.
     */
    set(items, callback) {
        for (const key in items) {
            const value = JSON.stringify(items[key]);
            window.localStorage.setItem(key, value);
        }
        this.notifyChange_(Object.keys(items));
        callback?.();
    }
    /**
     * Async version of `this.set()`.
     * @param items The items to store.
     */
    async setAsync(items) {
        return new Promise(resolve => this.set(items, resolve));
    }
    /** Removes the given `keys` from local storage. */
    remove(keys) {
        const keyList = Array.isArray(keys) ? keys : [keys];
        for (const key of keyList) {
            window.localStorage.removeItem(key);
        }
        this.notifyChange_(keyList);
    }
    /** Clears local storage. */
    clear() {
        window.localStorage.clear();
        this.notifyChange_([]);
    }
    /** Notifies key changes to storage change tracker listeners. */
    notifyChange_(keys) {
        const values = {};
        for (const k of keys) {
            values[k] = this.getValue_(k);
        }
        this.storageChangeTracker.keysChanged(values);
    }
}
var storage;
(function (storage) {
    storage.local = new StorageAreaImpl('local');
    storage.onChanged = storage.local.storageChangeTracker;
})(storage || (storage = {}));

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var EventType;
(function (EventType) {
    EventType["UPDATE"] = "update";
})(EventType || (EventType = {}));

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const LEGACY_FILES_EXTENSION_ID = 'hhaomjibdihmijegdhdafkllkbggdgoj';
const SWA_FILES_APP_HOST = 'file-manager';
/** The URL of the legacy version of File Manager. */
new URL(`chrome-extension://${LEGACY_FILES_EXTENSION_ID}`);
/** The URL of the System Web App version of File Manager. */
new URL(`chrome://${SWA_FILES_APP_HOST}`);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * File path component.
 *
 * File path can be represented as a series of path components. Each component
 * has its name used as a visible label and URL which point to the component
 * in the path.
 * PathComponent.computeComponentsFromEntry computes an array of PathComponent
 * of the given entry.
 */
class PathComponent {
    /**
     * @param name Name.
     * @param url Url.
     * @param fakeEntry Fake entry should be set when this component represents
     *     fake entry.
     */
    constructor(name, url_, fakeEntry_) {
        this.name = name;
        this.url_ = url_;
        this.fakeEntry_ = fakeEntry_;
    }
    /**
     * Resolve an entry of the component.
     * @return A promise which is resolved with an entry.
     */
    resolveEntry() {
        if (this.fakeEntry_) {
            return Promise.resolve(this.fakeEntry_);
        }
        else {
            return new Promise(window.webkitResolveLocalFileSystemURL.bind(null, this.url_));
        }
    }
    /**
     * Returns the key of this component (its URL).
     */
    getKey() {
        return this.url_;
    }
    /**
     * Computes path components for the path of entry.
     * @param entry An entry.
     * @return Components.
     */
    static computeComponentsFromEntry(entry, volumeManager) {
        /**
         * Replace the root directory name at the end of a url.
         * The input, |url| is a displayRoot URL of a Drive volume like
         * filesystem:chrome-extension://....foo.com-hash/root
         * The output is like:
         * filesystem:chrome-extension://....foo.com-hash/other
         *
         * @param url which points to a volume display root
         * @param newRoot new root directory name
         * @return new URL with the new root directory name
         */
        const replaceRootName = (url, newRoot) => {
            return url.slice(0, url.length - '/root'.length) + newRoot;
        };
        const components = [];
        const locationInfo = volumeManager.getLocationInfo(entry);
        if (!locationInfo) {
            return components;
        }
        if (isFakeEntry(entry)) {
            components.push(new PathComponent(getEntryLabel(locationInfo, entry), entry.toURL(), entry));
            return components;
        }
        // Add volume component.
        const volumeInfo = locationInfo.volumeInfo;
        if (!volumeInfo) {
            return components;
        }
        let displayRootUrl = volumeInfo.displayRoot.toURL();
        let displayRootFullPath = volumeInfo.displayRoot.fullPath;
        const prefixEntry = volumeInfo.prefixEntry;
        // Directories under Drive Fake Root can return the fake root entry list as
        // prefix entry, but we will never show "Google Drive" as the prefix in the
        // breadcrumb.
        if (prefixEntry && prefixEntry.rootType !== RootType.DRIVE_FAKE_ROOT) {
            components.push(new PathComponent(prefixEntry.name, prefixEntry.toURL(), prefixEntry));
        }
        if (locationInfo.rootType === RootType.DRIVE_SHARED_WITH_ME) {
            // DriveFS shared items are in either of:
            // <drivefs>/.files-by-id/<id>/<item>
            // <drivefs>/.shortcut-targets-by-id/<id>/<item>
            const match = entry.fullPath.match(/^\/\.(files|shortcut-targets)-by-id\/.+?\//);
            if (match) {
                displayRootFullPath = match[0];
            }
            else {
                console.warn('Unexpected shared DriveFS path: ', entry.fullPath);
            }
            displayRootUrl = replaceRootName(displayRootUrl, displayRootFullPath);
            const sharedWithMeFakeEntry = volumeInfo.fakeEntries[RootType.DRIVE_SHARED_WITH_ME];
            if (sharedWithMeFakeEntry) {
                components.push(new PathComponent(str('DRIVE_SHARED_WITH_ME_COLLECTION_LABEL'), sharedWithMeFakeEntry.toURL(), sharedWithMeFakeEntry));
            }
        }
        else if (locationInfo.rootType === RootType.SHARED_DRIVE) {
            displayRootUrl =
                replaceRootName(displayRootUrl, SHARED_DRIVES_DIRECTORY_PATH);
            components.push(new PathComponent(getRootTypeLabel(locationInfo), displayRootUrl));
        }
        else if (locationInfo.rootType === RootType.COMPUTER) {
            displayRootUrl =
                replaceRootName(displayRootUrl, COMPUTERS_DIRECTORY_PATH);
            components.push(new PathComponent(getRootTypeLabel(locationInfo), displayRootUrl));
        }
        else {
            components.push(new PathComponent(getRootTypeLabel(locationInfo), displayRootUrl));
        }
        // Get relative path to display root (e.g. /root/foo/bar -> foo/bar).
        let relativePath = entry.fullPath.slice(displayRootFullPath.length);
        if (entry.fullPath.startsWith(SHARED_DRIVES_DIRECTORY_PATH)) {
            relativePath = entry.fullPath.slice(SHARED_DRIVES_DIRECTORY_PATH.length);
        }
        else if (entry.fullPath.startsWith(COMPUTERS_DIRECTORY_PATH)) {
            relativePath = entry.fullPath.slice(COMPUTERS_DIRECTORY_PATH.length);
        }
        if (relativePath.indexOf('/') === 0) {
            relativePath = relativePath.slice(1);
        }
        if (relativePath.length === 0) {
            return components;
        }
        // currentUrl should be without trailing slash.
        let currentUrl = /^.+\/$/.test(displayRootUrl) ?
            displayRootUrl.slice(0, displayRootUrl.length - 1) :
            displayRootUrl;
        // Add directory components to the target path.
        const paths = relativePath.split('/');
        for (let i = 0; i < paths.length; i++) {
            currentUrl += '/' + encodeURIComponent(paths[i]);
            let path = paths[i];
            if (i === 0 && locationInfo.rootType === RootType.DOWNLOADS) {
                if (path === 'Downloads') {
                    path = str('DOWNLOADS_DIRECTORY_LABEL');
                }
                if (path === 'PvmDefault') {
                    path = str('PLUGIN_VM_DIRECTORY_LABEL');
                }
                if (path === 'Camera') {
                    path = str('CAMERA_DIRECTORY_LABEL');
                }
            }
            components.push(new PathComponent(path, currentUrl));
        }
        return components;
    }
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Current directory slice of the store.
 */
const slice$c = new Slice('currentDirectory');
function getEmptySelection(keys = []) {
    return {
        keys,
        dirCount: 0,
        fileCount: 0,
        // hostedCount might be updated to undefined in the for loop below.
        hostedCount: 0,
        // offlineCachedCount might be updated to undefined in the for loop below.
        offlineCachedCount: 0,
        fileTasks: {
            tasks: [],
            defaultTask: undefined,
            policyDefaultHandlerStatus: undefined,
            status: PropStatus.STARTED,
        },
    };
}
/**
 * Returns true if any of the entries in `currentDirectory` are DLP disabled,
 * and false otherwise.
 */
function hasDlpDisabledFiles(currentState) {
    const content = currentState.currentDirectory?.content;
    if (!content) {
        return false;
    }
    for (const key of content.keys) {
        const fileData = currentState.allEntries[key];
        if (!fileData) {
            console.warn(`Missing entry: ${key}`);
            continue;
        }
        if (fileData.metadata.isRestrictedForDestination) {
            return true;
        }
    }
    return false;
}
/** Create action to change the Current Directory. */
slice$c.addReducer('set', changeDirectoryReducer);
function changeDirectoryReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    if (payload.to) {
        cacheEntries(currentState, [payload.to]);
    }
    const { to, toKey } = payload;
    const key = toKey || to.toURL();
    const status = payload.status || PropStatus.STARTED;
    const fileData = currentState.allEntries[key];
    let selection = currentState.currentDirectory?.selection;
    // Use an empty selection when a selection isn't defined or it's navigating to
    // a new directory.
    if (!selection || currentState.currentDirectory?.key !== key) {
        selection = {
            keys: [],
            dirCount: 0,
            fileCount: 0,
            hostedCount: undefined,
            offlineCachedCount: 0,
            fileTasks: {
                tasks: [],
                policyDefaultHandlerStatus: undefined,
                defaultTask: undefined,
                status: PropStatus.SUCCESS,
            },
        };
    }
    let content = currentState.currentDirectory?.content;
    let hasDlpDisabledFiles = currentState.currentDirectory?.hasDlpDisabledFiles || false;
    // Use empty content when it isn't defined or it's navigating to a new
    // directory. The content will be updated again after a successful scan.
    if (!content || currentState.currentDirectory?.key !== key) {
        content = {
            keys: [],
        };
        hasDlpDisabledFiles = false;
    }
    let currentDirectory = {
        key,
        status,
        pathComponents: [],
        content: content,
        rootType: undefined,
        selection,
        hasDlpDisabledFiles: hasDlpDisabledFiles,
    };
    // The new directory might not be in the allEntries yet, this might happen
    // when starting to change the directory for a entry that isn't cached.
    // At the end of the change directory, DirectoryContents will send an Action
    // with the Entry to be cached.
    if (fileData) {
        const { volumeManager } = window.fileManager;
        if (!volumeManager) {
            console.debug(`VolumeManager not available yet.`);
            currentDirectory = currentState.currentDirectory || currentDirectory;
        }
        else {
            const components = PathComponent.computeComponentsFromEntry(fileData.entry, volumeManager);
            currentDirectory.pathComponents = components.map(c => {
                return {
                    name: c.name,
                    label: c.name,
                    key: c.getKey(),
                };
            });
            const locationInfo = volumeManager.getLocationInfo(fileData.entry);
            currentDirectory.rootType = locationInfo?.rootType;
        }
    }
    return {
        ...currentState,
        currentDirectory,
    };
}
/** Create action to update currently selected files/folders. */
slice$c.addReducer('set-selection', updateSelectionReducer);
function updateSelectionReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.entries);
    const updatingToEmpty = (payload.entries.length === 0 && payload.selectedKeys.length === 0);
    if (!currentState.currentDirectory) {
        if (!updatingToEmpty) {
            console.warn('Missing `currentDirectory`');
            console.debug('Dropping action:', payload);
        }
        return currentState;
    }
    if (!currentState.currentDirectory.content) {
        if (!updatingToEmpty) {
            console.warn('Missing `currentDirectory.content`');
            console.debug('Dropping action:', payload);
        }
        return currentState;
    }
    const selectedKeys = payload.selectedKeys;
    const contentKeys = new Set(currentState.currentDirectory.content.keys);
    const missingKeys = selectedKeys.filter(k => !contentKeys.has(k));
    if (missingKeys.length > 0) {
        console.warn('Got selected keys that are not in current directory, ' +
            'continuing anyway');
        console.debug(`Missing keys: ${missingKeys.join('\n')} \nexisting keys:\n ${(currentState.currentDirectory?.content?.keys ?? []).join('\n')}`);
    }
    const selection = getEmptySelection(selectedKeys);
    for (const key of selectedKeys) {
        const fileData = currentState.allEntries[key];
        if (!fileData) {
            console.warn(`Missing entry: ${key}`);
            continue;
        }
        if (fileData.isDirectory) {
            selection.dirCount++;
        }
        else {
            selection.fileCount++;
        }
        const metadata = fileData.metadata;
        // Update hostedCount to undefined if any entry doesn't have the metadata
        // yet.
        const isHosted = metadata?.hosted;
        if (isHosted === undefined) {
            selection.hostedCount = undefined;
        }
        else {
            if (selection.hostedCount !== undefined && isHosted) {
                selection.hostedCount++;
            }
        }
        // If no availableOffline property, then assume it's available.
        const isOfflineCached = (metadata?.availableOffline === undefined ||
            metadata?.availableOffline);
        if (isOfflineCached) {
            selection.offlineCachedCount++;
        }
    }
    const currentDirectory = {
        ...currentState.currentDirectory,
        selection,
    };
    return {
        ...currentState,
        currentDirectory,
    };
}
/** Create action to update FileTasks for the current selection. */
slice$c.addReducer('set-file-tasks', updateFileTasksReducer);
function updateFileTasksReducer(currentState, payload) {
    const initialSelection = currentState.currentDirectory?.selection ?? getEmptySelection();
    // Apply the changes over the current selection.
    const fileTasks = {
        ...initialSelection.fileTasks,
        ...payload,
    };
    // Update the selection and current directory objects.
    const selection = {
        ...initialSelection,
        fileTasks,
    };
    const currentDirectory = {
        ...currentState.currentDirectory,
        selection,
    };
    return {
        ...currentState,
        currentDirectory,
    };
}
/** Create action to update the current directory's content. */
slice$c.addReducer('update-content', updateDirectoryContentReducer);
function updateDirectoryContentReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.entries);
    if (!currentState.currentDirectory) {
        console.warn('Missing `currentDirectory`');
        return currentState;
    }
    const initialContent = currentState.currentDirectory?.content ?? { keys: [] };
    const keys = payload.entries.map(e => e.toURL());
    const content = {
        ...initialContent,
        keys,
    };
    let currentDirectory = {
        ...currentState.currentDirectory,
        content,
    };
    const newState = {
        ...currentState,
        currentDirectory,
    };
    currentDirectory = {
        ...currentDirectory,
        hasDlpDisabledFiles: hasDlpDisabledFiles(newState),
    };
    return {
        ...newState,
        currentDirectory,
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Entries slice of the store.
 */
const slice$b = new Slice('allEntries');
/**
 * Create action to scan `allEntries` and remove its stale entries.
 */
const clearCachedEntries = slice$b.addReducer('clear-stale-cache', clearCachedEntriesReducer);
function clearCachedEntriesReducer(state) {
    const entries = state.allEntries;
    const currentDirectoryKey = state.currentDirectory?.key;
    const entriesToKeep = new Set();
    if (currentDirectoryKey) {
        entriesToKeep.add(currentDirectoryKey);
        for (const component of state.currentDirectory.pathComponents) {
            entriesToKeep.add(component.key);
        }
        for (const key of state.currentDirectory.content.keys) {
            entriesToKeep.add(key);
        }
    }
    const selectionKeys = state.currentDirectory?.selection.keys ?? [];
    if (selectionKeys) {
        for (const key of selectionKeys) {
            entriesToKeep.add(key);
        }
    }
    for (const volume of Object.values(state.volumes)) {
        if (!volume.rootKey) {
            continue;
        }
        entriesToKeep.add(volume.rootKey);
        if (volume.prefixKey) {
            entriesToKeep.add(volume.prefixKey);
        }
    }
    for (const key of state.uiEntries) {
        entriesToKeep.add(key);
    }
    for (const key of state.folderShortcuts) {
        entriesToKeep.add(key);
    }
    for (const root of state.navigation.roots) {
        entriesToKeep.add(root.key);
    }
    // For all expanded entries, we need to keep them and all their direct
    // children.
    for (const [key, fileData] of Object.entries(entries)) {
        if (fileData.expanded) {
            entriesToKeep.add(key);
            if (fileData.children) {
                for (const child of fileData.children) {
                    entriesToKeep.add(child);
                }
            }
        }
    }
    // For all kept entries, we also need to keep their children so we can decide
    // if we need to show the expand icon or not.
    for (const key of entriesToKeep) {
        const fileData = entries[key];
        if (fileData?.children) {
            for (const child of fileData.children) {
                entriesToKeep.add(child);
            }
        }
    }
    const isDebugStore = isDebugStoreEnabled();
    for (const key of Object.keys(entries)) {
        if (entriesToKeep.has(key)) {
            continue;
        }
        delete entries[key];
        if (isDebugStore) {
            console.log(`Clear entry: ${key}`);
        }
    }
    return state;
}
/**
 * Schedules the routine to remove stale entries from `allEntries`.
 */
function scheduleClearCachedEntries() {
    if (clearCachedEntriesRequestId === 0) {
        clearCachedEntriesRequestId = requestIdleCallback(startClearCache);
    }
}
/** ID for the current scheduled `clearCachedEntries`. */
let clearCachedEntriesRequestId = 0;
/** Starts the action CLEAR_STALE_CACHED_ENTRIES.  */
function startClearCache() {
    const store = getStore();
    store.dispatch(clearCachedEntries());
    clearCachedEntriesRequestId = 0;
}
const prefetchPropertyNames = Array.from(new Set([
    ...LIST_CONTAINER_METADATA_PREFETCH_PROPERTY_NAMES,
    ...ACTIONS_MODEL_METADATA_PREFETCH_PROPERTY_NAMES,
    ...FILE_SELECTION_METADATA_PREFETCH_PROPERTY_NAMES,
    ...DLP_METADATA_PREFETCH_PROPERTY_NAMES,
]));
/** Get the icon for an entry. */
function getEntryIcon(entry, locationInfo, volumeType) {
    const url = entry.toURL();
    // Pre-defined icons based on the URL.
    const urlToIconPath = {
        [recentRootKey]: ICON_TYPES.RECENT,
        [myFilesEntryListKey]: ICON_TYPES.MY_FILES,
        [driveRootEntryListKey]: ICON_TYPES.SERVICE_DRIVE,
    };
    if (urlToIconPath[url]) {
        return urlToIconPath[url];
    }
    // Handle icons for grand roots ("Shared drives" and "Computers") in Drive.
    // Here we can't just use `fullPath` to check if an entry is a grand root or
    // not, because normal directory can also have the same full path. We also
    // need to check if the entry is a direct child of the drive root entry list.
    const grandRootPathToIconMap = {
        [COMPUTERS_DIRECTORY_PATH]: ICON_TYPES.COMPUTERS_GRAND_ROOT,
        [SHARED_DRIVES_DIRECTORY_PATH]: ICON_TYPES.SHARED_DRIVES_GRAND_ROOT,
    };
    if (volumeType === VolumeType.DRIVE &&
        grandRootPathToIconMap[entry.fullPath]) {
        return grandRootPathToIconMap[entry.fullPath];
    }
    // For grouped removable devices, its parent folder is an entry list, we
    // should use USB icon for it.
    if ('rootType' in entry && entry.rootType === RootType.REMOVABLE) {
        return ICON_TYPES.USB;
    }
    if (isVolumeEntry(entry) && entry.volumeInfo) {
        switch (entry.volumeInfo.volumeType) {
            case VolumeType.DOWNLOADS:
                return ICON_TYPES.MY_FILES;
            case VolumeType.SMB:
                return ICON_TYPES.SMB;
            case VolumeType.PROVIDED:
            // Fallthrough
            case VolumeType.DOCUMENTS_PROVIDER: {
                // Only return IconSet if there's valid background image generated.
                const iconSet = entry.volumeInfo.iconSet;
                if (iconSet) {
                    const backgroundImage = iconSetToCSSBackgroundImageValue(entry.volumeInfo.iconSet);
                    if (backgroundImage !== 'none') {
                        return iconSet;
                    }
                }
                // If no background is generated from IconSet, set the icon to the
                // generic one for certain volume type.
                if (volumeType && shouldProvideIcons(volumeType)) {
                    return ICON_TYPES.GENERIC;
                }
                return '';
            }
            case VolumeType.MTP:
                return ICON_TYPES.MTP;
            case VolumeType.ARCHIVE:
                return ICON_TYPES.ARCHIVE;
            case VolumeType.REMOVABLE:
                // For sub-partition from a removable volume, its children icon should
                // be UNKNOWN_REMOVABLE.
                return entry.volumeInfo.prefixEntry ? ICON_TYPES.UNKNOWN_REMOVABLE :
                    ICON_TYPES.USB;
            case VolumeType.DRIVE:
                return ICON_TYPES.DRIVE;
        }
    }
    return getIcon(entry, undefined, locationInfo?.rootType);
}
/**
 * Given an entry, check if its loading children should be delayed.
 * We are doing this for SMB to avoid potentially hanging whilst scanning a
 * large SMB file share and causing performance issues.
 */
function shouldDelayLoadingChildren(entry) {
    const { volumeManager } = window.fileManager;
    // When this function is triggered when mounting new volumes, volumeInfo is
    // not available in the VolumeManager yet, we need to get volumeInfo from the
    // entry itself.
    const volumeInfo = isVolumeEntry(entry) ? entry.volumeInfo :
        volumeManager.getVolumeInfo(entry);
    return volumeInfo?.source === Source.NETWORK &&
        volumeInfo.volumeType === VolumeType.SMB;
}
/**
 * Converts the entry to the Store representation of an Entry: FileData.
 */
function convertEntryToFileData(entry) {
    const { volumeManager, metadataModel } = window.fileManager;
    // When this function is triggered when mounting new volumes, volumeInfo is
    // not available in the VolumeManager yet, we need to get volumeInfo from the
    // entry itself.
    const volumeInfo = isVolumeEntry(entry) ? entry.volumeInfo :
        volumeManager.getVolumeInfo(entry);
    const locationInfo = volumeManager.getLocationInfo(entry);
    const label = getEntryLabel(locationInfo, entry);
    // For FakeEntry, we need to read from entry.volumeType because it doesn't
    // have volumeInfo in the volume manager.
    const volumeType = 'volumeType' in entry && entry.volumeType ?
        entry.volumeType :
        (volumeInfo?.volumeType || null);
    const volumeId = volumeInfo?.volumeId || null;
    const icon = getEntryIcon(entry, locationInfo, volumeType);
    /**
     * Update disabled attribute if entry supports disabled attribute and has a
     * non-null volumeType.
     */
    if ('disabled' in entry && volumeType) {
        entry.disabled = volumeManager.isDisabled(volumeType);
    }
    const metadata = metadataModel ?
        metadataModel.getCache([entry], prefetchPropertyNames)[0] :
        {};
    return {
        entry,
        icon,
        type: getEntryType(entry),
        isDirectory: entry.isDirectory,
        label,
        volumeId,
        rootType: locationInfo?.rootType ?? null,
        metadata,
        expanded: false,
        disabled: 'disabled' in entry ? entry.disabled : false,
        isRootEntry: !!locationInfo?.isRootEntry,
        // `isEjectable` is determined by its corresponding volume, will be updated
        // when volume is added.
        isEjectable: false,
        canExpand: shouldDelayLoadingChildren(entry),
        children: [],
    };
}
/**
 * Appends the entry to the Store.
 */
function appendEntry(state, entry) {
    const allEntries = state.allEntries || {};
    const key = entry.toURL();
    const existingFileData = allEntries[key] || {};
    // Some client code might dispatch actions based on
    // `volume.resolveDisplayRoot()` which is a DirectoryEntry instead of a
    // VolumeEntry. It's safe to ignore this entry because the data will be the
    // same as `existingFileData` and we don't want to convert from VolumeEntry to
    // DirectoryEntry.
    if (existingFileData.type === EntryType.VOLUME_ROOT &&
        getEntryType(entry) !== EntryType.VOLUME_ROOT) {
        return;
    }
    const fileData = convertEntryToFileData(entry);
    allEntries[key] = {
        ...fileData,
        // For existing entries already in the store, we want to keep the existing
        // value for the following fields. For example, for "expanded" entries with
        // expanded=true, we don't want to override it with expanded=false derived
        // from `convertEntryToFileData` function above.
        expanded: existingFileData.expanded ?? fileData.expanded,
        isEjectable: existingFileData.isEjectable ?? fileData.isEjectable,
        canExpand: existingFileData.canExpand ?? fileData.canExpand,
        // Keep children to prevent sudden removal of the children items on the UI.
        children: existingFileData.children ?? fileData.children,
    };
    state.allEntries = allEntries;
}
/**
 * Updates `FileData` from a `FileKey`.
 *
 * Note: the state will be updated in place.
 */
function updateFileDataInPlace(state, key, changes) {
    if (!state.allEntries[key]) {
        console.warn(`Entry FileData not found in the store: ${key}`);
        return;
    }
    const newFileData = {
        ...state.allEntries[key],
        ...changes,
    };
    state.allEntries[key] = newFileData;
    return newFileData;
}
/** Caches the Action's entry in the `allEntries` attribute. */
function cacheEntries(currentState, entries) {
    scheduleClearCachedEntries();
    for (const entry of entries) {
        appendEntry(currentState, entry);
    }
}
function getEntryType(entry) {
    // Entries from FilesAppEntry have the `typeName` property.
    if (!('typeName' in entry)) {
        return EntryType.FS_API;
    }
    switch (entry.typeName) {
        case 'EntryList':
            return EntryType.ENTRY_LIST;
        case 'VolumeEntry':
            return EntryType.VOLUME_ROOT;
        case 'FakeEntry':
            switch (entry.rootType) {
                case RootType.RECENT:
                    return EntryType.RECENT;
                case RootType.TRASH:
                    return EntryType.TRASH;
                case RootType.DRIVE_FAKE_ROOT:
                    return EntryType.ENTRY_LIST;
                case RootType.CROSTINI:
                case RootType.ANDROID_FILES:
                    return EntryType.PLACEHOLDER;
                case RootType.DRIVE_OFFLINE:
                case RootType.DRIVE_SHARED_WITH_ME:
                    // TODO(lucmult): This isn't really Recent but it's the closest.
                    return EntryType.RECENT;
            }
            console.warn(`Invalid fakeEntry.rootType='${entry.rootType} rootType`);
            return EntryType.PLACEHOLDER;
        case 'GuestOsPlaceholder':
            return EntryType.PLACEHOLDER;
        case 'TrashEntry':
            return EntryType.TRASH;
        default:
            console.warn(`Invalid entry.typeName='${entry.typeName}`);
            return EntryType.FS_API;
    }
}
/** Create action to update entries metadata. */
slice$b.addReducer('update-metadata', updateMetadataReducer);
function updateMetadataReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.metadata.map(m => m.entry));
    for (const entryMetadata of payload.metadata) {
        const key = entryMetadata.entry.toURL();
        const fileData = currentState.allEntries[key];
        const metadata = { ...fileData.metadata, ...entryMetadata.metadata };
        currentState.allEntries[key] = {
            ...fileData,
            metadata,
        };
    }
    if (!currentState.currentDirectory) {
        console.warn('Missing `currentDirectory`');
        return currentState;
    }
    const currentDirectory = {
        ...currentState.currentDirectory,
        hasDlpDisabledFiles: hasDlpDisabledFiles(currentState),
    };
    return {
        ...currentState,
        currentDirectory,
    };
}
function findVolumeByType(volumes, volumeType) {
    return Object.values(volumes).find(v => {
        // If the volume isn't resolved yet, we just ignore here.
        return v.rootKey && v.volumeType === volumeType;
    }) ??
        null;
}
/**
 * Returns the MyFiles entry and volume, the entry can either be a fake one
 * (EntryList) or a real one (VolumeEntry) depends on if the MyFiles volume is
 * mounted or not.
 * Note: it will create a fake EntryList in the store if there's no
 * MyFiles entry in the store (e.g. no EntryList and no VolumeEntry).
 */
function getMyFiles(state) {
    const { volumes } = state;
    const myFilesVolume = findVolumeByType(volumes, VolumeType.DOWNLOADS);
    const myFilesVolumeEntry = myFilesVolume ?
        getEntry(state, myFilesVolume.rootKey) :
        null;
    let myFilesEntryList = getEntry(state, myFilesEntryListKey);
    if (!myFilesVolumeEntry && !myFilesEntryList) {
        myFilesEntryList =
            new EntryList(str('MY_FILES_ROOT_LABEL'), RootType.MY_FILES);
        appendEntry(state, myFilesEntryList);
        state.uiEntries = [...state.uiEntries, myFilesEntryList.toURL()];
    }
    return {
        myFilesEntry: myFilesVolumeEntry || myFilesEntryList,
        myFilesVolume,
    };
}
/**  Create action to add child entries to a parent entry. */
slice$b.addReducer('add-children', addChildEntriesReducer);
function addChildEntriesReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.entries);
    const { parentKey, entries } = payload;
    const { allEntries } = currentState;
    // The corresponding parent entry item has been removed somehow, do nothing.
    if (!allEntries[parentKey]) {
        return currentState;
    }
    const newEntryKeys = entries.map(entry => entry.toURL());
    // Add children to the parent entry item.
    const parentFileData = {
        ...allEntries[parentKey],
        children: newEntryKeys,
    };
    return {
        ...currentState,
        allEntries: {
            ...allEntries,
            [parentKey]: parentFileData,
        },
    };
}
/** Create action to update FileData for a given entry. */
slice$b.addReducer('update-file-data', updateFileDataReducer);
function updateFileDataReducer(currentState, payload) {
    const { key, partialFileData } = payload;
    const fileData = getFileData(currentState, key);
    if (!fileData) {
        return currentState;
    }
    currentState.allEntries[key] = {
        ...fileData,
        ...partialFileData,
    };
    return { ...currentState };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Android apps slice of the store.
 *
 * Android App is something we get from private API
 * `chrome.fileManagerPrivate.getAndroidPickerApps`, it will be shown as a
 * directory item in FilePicker mode.
 */
const slice$a = new Slice('androidApps');
/** Action factory to add all android app config to the store. */
slice$a.addReducer('add', addAndroidAppsReducer);
function addAndroidAppsReducer(currentState, payload) {
    const androidApps = {};
    for (const app of payload.apps) {
        // For android app item, if no icon is derived from IconSet, set the icon to
        // the generic one.
        let icon = ICON_TYPES.GENERIC;
        if (app.iconSet) {
            const backgroundImage = iconSetToCSSBackgroundImageValue(app.iconSet);
            if (backgroundImage !== 'none') {
                icon = app.iconSet;
            }
        }
        androidApps[app.packageName] = {
            ...app,
            icon,
        };
    }
    return {
        ...currentState,
        androidApps,
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Bulk pinning slice of the store.
 *
 * BulkPinProgress is the current state of files that are being pinned when the
 * BulkPinning feature is enabled. During bulk pinning, all the users items in
 * My drive are pinned and kept available offline. This tracks the progress of
 * both the initial operation and any subsequent updates along with any error
 * states that may occur.
 */
const slice$9 = new Slice('bulkPinning');
/** Create action to update the bulk pin progress. */
slice$9.addReducer('set-progress', (state, bulkPinning) => ({
    ...state,
    bulkPinning,
}));

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Device slice of the store.
 */
const slice$8 = new Slice('device');
const updateDeviceConnectionState = slice$8.addReducer('set-connection-state', updateDeviceConnectionStateReducer$1);
function updateDeviceConnectionStateReducer$1(currentState, payload) {
    let device;
    // Device connection.
    if (payload.connection !== currentState.device.connection) {
        device = {
            ...currentState.device,
            connection: payload.connection,
        };
    }
    return device ? { ...currentState, device } : currentState;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Drive slice of the store.
 */
const slice$7 = new Slice('drive');
slice$7.addReducer('set-drive-connection-status', updateDriveConnectionStatusReducer);
function updateDriveConnectionStatusReducer(currentState, payload) {
    const drive = { ...currentState.drive };
    if (payload.type !== currentState.drive.connectionType) {
        drive.connectionType = payload.type;
    }
    if (payload.type ===
        chrome.fileManagerPrivate.DriveConnectionStateType.OFFLINE &&
        payload.reason !== currentState.drive.offlineReason) {
        drive.offlineReason = payload.reason;
    }
    else {
        drive.offlineReason = undefined;
    }
    return { ...currentState, drive };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$6 = new Slice('folderShortcuts');
/** Create action to refresh all folder shortcuts with provided ones. */
slice$6.addReducer('refresh', refreshFolderShortcutReducer);
function refreshFolderShortcutReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.entries);
    return {
        ...currentState,
        folderShortcuts: payload.entries.map(entry => entry.toURL()),
    };
}
/** Create action to add a folder shortcut. */
slice$6.addReducer('add', addFolderShortcutReducer);
function addFolderShortcutReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, [payload.entry]);
    const { entry } = payload;
    const key = entry.toURL();
    const { folderShortcuts } = currentState;
    for (let i = 0; i < folderShortcuts.length; i++) {
        // Do nothing if the key is already existed.
        if (key === folderShortcuts[i]) {
            return currentState;
        }
        const shortcutEntry = getEntry(currentState, folderShortcuts[i]);
        // The folder shortcut array is sorted, the new item will be added just
        // before the first larger item.
        if (comparePath(shortcutEntry, entry) > 0) {
            return {
                ...currentState,
                folderShortcuts: [
                    ...folderShortcuts.slice(0, i),
                    key,
                    ...folderShortcuts.slice(i),
                ],
            };
        }
    }
    // If for loop is not returned, the key is not added yet, add it at the last.
    return {
        ...currentState,
        folderShortcuts: folderShortcuts.concat(key),
    };
}
/** Create action to remove a folder shortcut. */
slice$6.addReducer('remove', removeFolderShortcutReducer);
function removeFolderShortcutReducer(currentState, payload) {
    const { key } = payload;
    const { folderShortcuts } = currentState;
    const isExisted = folderShortcuts.find(k => k === key);
    // Do nothing if the key is not existed.
    if (!isExisted) {
        return currentState;
    }
    return {
        ...currentState,
        folderShortcuts: folderShortcuts.filter(k => k !== key),
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$5 = new Slice('launchParams');
function launchParamsReducer(state, launchParams) {
    const storedLaunchParams = state.launchParams || {};
    if (launchParams.dialogType !== storedLaunchParams.dialogType) {
        return { ...state, launchParams };
    }
    return state;
}
/**
 * Updates the stored launch parameters in the store based on the supplied data.
 */
slice$5.addReducer('set', launchParamsReducer);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Navigation slice of the store.
 */
const slice$4 = new Slice('navigation');
const sections = new Map();
// My Files.
sections.set(VolumeType.DOWNLOADS, NavigationSection.MY_FILES);
// Cloud.
sections.set(VolumeType.DRIVE, NavigationSection.CLOUD);
sections.set(VolumeType.SMB, NavigationSection.CLOUD);
sections.set(VolumeType.PROVIDED, NavigationSection.CLOUD);
sections.set(VolumeType.DOCUMENTS_PROVIDER, NavigationSection.CLOUD);
// Removable.
sections.set(VolumeType.REMOVABLE, NavigationSection.REMOVABLE);
sections.set(VolumeType.MTP, NavigationSection.REMOVABLE);
sections.set(VolumeType.ARCHIVE, NavigationSection.REMOVABLE);
/** Returns the entry for the volume's top-most prefix or the volume itself. */
function getPrefixEntryOrEntry(state, volume) {
    if (volume.prefixKey) {
        const entry = getEntry(state, volume.prefixKey);
        return entry;
    }
    if (volume.volumeType === VolumeType.DOWNLOADS) {
        return getMyFiles(state).myFilesEntry;
    }
    const entry = getEntry(state, volume.rootKey);
    return entry;
}
/**
 * Create action to refresh all navigation roots. This will clear all existing
 * navigation roots in the store and regenerate them with the current state
 * data.
 *
 * Navigation roots' Entries/Volumes will be ordered as below:
 *  1. Recents.
 *  2. Shortcuts.
 *  3. "My-Files" (grouping), actually Downloads volume.
 *  4. Google Drive.
 *  5. ODFS.
 *  6. SMBs
 *  7. Other FSP (File System Provider) (when mounted).
 *  8. Other volumes (MTP, ARCHIVE, REMOVABLE).
 *  9. Android apps.
 *  10. Trash.
 */
slice$4.addReducer('refresh-roots', refreshNavigationRootsReducer);
function refreshNavigationRootsReducer(currentState) {
    const { navigation: { roots: previousRoots }, folderShortcuts, androidApps, } = currentState;
    /** Roots in the desired order. */
    const roots = [];
    /** Set to avoid adding the same entry multiple times. */
    const processedEntryKeys = new Set();
    // 1. Add the Recent/Materialized view root.
    const recentRoot = previousRoots.find(root => root.key === recentRootKey);
    if (recentRoot) {
        roots.push(recentRoot);
        processedEntryKeys.add(recentRootKey);
    }
    else {
        const recentEntry = getEntry(currentState, recentRootKey);
        if (recentEntry) {
            roots.push({
                key: recentRootKey,
                section: NavigationSection.TOP,
                separator: false,
                type: NavigationType.RECENT,
            });
            processedEntryKeys.add(recentRootKey);
        }
    }
    // 2. Add the Shortcuts.
    // TODO: Since Shortcuts are only for Drive, do we need to remove shortcuts
    // if Drive isn't available anymore?
    folderShortcuts.forEach(shortcutKey => {
        const shortcutEntry = getEntry(currentState, shortcutKey);
        if (shortcutEntry) {
            roots.push({
                key: shortcutKey,
                section: NavigationSection.TOP,
                separator: false,
                type: NavigationType.SHORTCUT,
            });
            processedEntryKeys.add(shortcutKey);
        }
    });
    // 3. MyFiles
    const { myFilesEntry, myFilesVolume } = getMyFiles(currentState);
    roots.push({
        key: myFilesEntry.toURL(),
        section: NavigationSection.MY_FILES,
        // Only show separator if this is not the first navigation item.
        separator: processedEntryKeys.size > 0,
        type: myFilesVolume ? NavigationType.VOLUME : NavigationType.ENTRY_LIST,
    });
    processedEntryKeys.add(myFilesEntry.toURL());
    // 4. Add Google Drive - the only Drive.
    // When drive pref changes from enabled to disabled, we remove the drive root
    // key from the `state.uiEntries` immediately, but the drive root entry itself
    // is removed asynchronously, so here we need to check both, if the key
    // doesn't exist any more, we shouldn't render Drive item even if the drive
    // root entry is still available.
    const driveEntryKeyExist = currentState.uiEntries.includes(driveRootEntryListKey);
    const driveEntry = getEntry(currentState, driveRootEntryListKey);
    if (driveEntryKeyExist && driveEntry) {
        roots.push({
            key: driveEntry.toURL(),
            section: NavigationSection.GOOGLE_DRIVE,
            separator: true,
            type: NavigationType.DRIVE,
        });
        processedEntryKeys.add(driveEntry.toURL());
    }
    // 5/6/7/8 Other volumes.
    const volumesOrder = {
        // ODFS is a PROVIDED volume type but is a special case to be directly
        // below Drive.
        // ODFS : 0
        [VolumeType.SMB]: 1,
        [VolumeType.PROVIDED]: 2, // FSP.
        [VolumeType.DOCUMENTS_PROVIDER]: 3,
        [VolumeType.REMOVABLE]: 4,
        [VolumeType.ARCHIVE]: 5,
        [VolumeType.MTP]: 6,
    };
    // Filter volumes based on the volumeInfoList in volumeManager.
    const { volumeManager } = window.fileManager;
    const filteredVolumes = Object.values(currentState.volumes).filter(volume => {
        const volumeEntry = getEntry(currentState, volume.rootKey);
        return volumeManager.isAllowedVolume(volumeEntry.volumeInfo);
    });
    function getVolumeOrder(volume) {
        if (isOneDriveId(volume.providerId)) {
            return 0;
        }
        return volumesOrder[volume.volumeType] ?? 999;
    }
    const volumes = filteredVolumes
        .filter((v) => {
        return (
        // Only display if the entry is resolved.
        v.rootKey &&
            // MyFiles and Drive is already displayed above.
            // MediaView volumeType isn't displayed.
            !(v.volumeType === VolumeType.DOWNLOADS ||
                v.volumeType === VolumeType.DRIVE ||
                v.volumeType === VolumeType.MEDIA_VIEW));
    })
        .sort((v1, v2) => {
        const v1Order = getVolumeOrder(v1);
        const v2Order = getVolumeOrder(v2);
        return v1Order - v2Order;
    });
    let lastSection = null;
    for (const volume of volumes) {
        // Some volumes might be nested inside another volume or entry list, e.g.
        // Multiple partition removable volumes can be nested inside a EntryList, or
        // GuestOS/Crostini/Android volumes will be nested inside MyFiles, for these
        // volumes, we only need to add its parent volume in the navigation roots.
        const volumeEntry = getPrefixEntryOrEntry(currentState, volume);
        if (volumeEntry && !processedEntryKeys.has(volumeEntry.toURL())) {
            let section = sections.get(volume.volumeType) ?? NavigationSection.REMOVABLE;
            if (isOneDriveId(volume.providerId)) {
                section = NavigationSection.ODFS;
            }
            const isSectionStart = section !== lastSection;
            roots.push({
                key: volumeEntry.toURL(),
                section,
                separator: isSectionStart,
                type: NavigationType.VOLUME,
            });
            processedEntryKeys.add(volumeEntry.toURL());
            lastSection = section;
        }
    }
    // 9. Android Apps.
    Object.values(androidApps)
        .forEach((app, index) => {
        roots.push({
            key: app.packageName,
            section: NavigationSection.ANDROID_APPS,
            separator: index === 0,
            type: NavigationType.ANDROID_APPS,
        });
        processedEntryKeys.add(app.packageName);
    });
    // 10. Trash
    // Trash should only show when Files app is open as a standalone app. The ARC
    // file selector, however, opens Files app as a standalone app but passes a
    // query parameter to indicate the mode. As Trash is a fake volume, it is
    // not filtered out in the filtered volume manager so perform it here
    // instead.
    const { dialogType } = window.fileManager;
    const shouldShowTrash = dialogType === DialogType.FULL_PAGE &&
        !volumeManager.getMediaStoreFilesOnlyFilterEnabled();
    // When trash pref changes from enabled to disabled, we remove the trash root
    // key from the `state.uiEntries` immediately, but the trash entry itself is
    // removed asynchronously, so here we need to check both, if the key doesn't
    // exist any more, we shouldn't render Trash item even if the trash entry is
    // still available.
    const trashEntryKeyExist = currentState.uiEntries.includes(trashRootKey);
    const trashEntry = getEntry(currentState, trashRootKey);
    if (shouldShowTrash && trashEntryKeyExist && trashEntry) {
        roots.push({
            key: trashRootKey,
            section: NavigationSection.TRASH,
            separator: true,
            type: NavigationType.TRASH,
        });
        processedEntryKeys.add(trashRootKey);
    }
    return {
        ...currentState,
        navigation: {
            roots,
        },
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Chrome preferences slice of the store.
 *
 * Chrome preferences store user data that is persisted to disk OR across
 * profiles, this takes care of initially populating these values then keeping
 * them updated on dynamic changes.
 */
const slice$3 = new Slice('preferences');
/**
 * A type guard to see if the payload supplied is a change of preferences or the
 * entire preferences object. Useful in ensuring subsequent type checks are done
 * on the correct type (instead of the union type).
 */
function isPreferencesChange(payload) {
    // The field `driveEnabled` is only on a `Preferences` object, so if this is
    // undefined the payload is a `PreferencesChange` object otherwise it's a
    // `Preferences` object.
    if (payload.driveEnabled !== undefined) {
        return false;
    }
    return true;
}
/**
 * Only update the existing preferences with their new values if they are
 * defined. In the event of spreading the change event over the existing
 * preferences, undefined values should not overwrite their existing values.
 */
function updateIfDefined(updatedPreferences, newPreferences, key) {
    if (!(key in newPreferences) || newPreferences[key] === undefined) {
        return false;
    }
    if (updatedPreferences[key] === newPreferences[key]) {
        return false;
    }
    // We're updating the `Preferences` original here and it doesn't type union
    // well with `PreferencesChange`. Given we've done all the type validation
    // above, cast them both to the `Preferences` type to ensure subsequent
    // updates can work.
    updatedPreferences[key] =
        newPreferences[key];
    return true;
}
/** Create action to update user preferences. */
slice$3.addReducer('set', updatePreferencesReducer);
function updatePreferencesReducer(currentState, payload) {
    const preferences = payload;
    // This action takes two potential payloads:
    //  - chrome.fileManagerPrivate.Preferences
    //  - chrome.fileManagerPrivate.PreferencesChange
    // Both of these have different type requirements. If we receive a
    // `Preferences` update, just store the data directly in the store. If we
    // receive a `PreferencesChange` the individual fields need to be checked to
    // ensure they are different to what we have in the store AND they won't
    // remove the existing data (i.e. they are not null or undefined).
    if (!isPreferencesChange(preferences)) {
        return {
            ...currentState,
            preferences,
        };
    }
    const updatedPreferences = { ...currentState.preferences };
    const keysToCheck = [
        'driveSyncEnabledOnMeteredNetwork',
        'arcEnabled',
        'arcRemovableMediaAccessEnabled',
        'folderShortcuts',
        'driveFsBulkPinningEnabled',
    ];
    let updated = false;
    for (const key of keysToCheck) {
        updated = updateIfDefined(updatedPreferences, preferences, key) || updated;
    }
    // If no keys have been updated in the preference change, then send back the
    // original state as nothing has changed.
    if (!updated) {
        return currentState;
    }
    return {
        ...currentState,
        preferences: updatedPreferences,
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Search slice of the store.
 */
const slice$2 = new Slice('search');
/**
 * Returns if the given search data represents empty (cleared) search.
 */
function isSearchEmpty(search) {
    return Object.values(search).every(f => f === undefined);
}
/**
 * Helper function that does a deep comparison between two SearchOptions.
 */
function optionsChanged(stored, fresh) {
    if (fresh === undefined) {
        // If fresh options are undefined, that means keep the stored options. No
        // matter what the stored options are, we are saying they have not changed.
        return false;
    }
    if (stored === undefined) {
        return true;
    }
    return fresh.location !== stored.location ||
        fresh.recency !== stored.recency ||
        fresh.fileCategory !== stored.fileCategory;
}
slice$2.addReducer('set', searchReducer);
function searchReducer(state, payload) {
    const blankSearch = {
        query: undefined,
        status: undefined,
        options: undefined,
    };
    // Special case: if none of the fields are set, the action clears the search
    // state in the store.
    if (isSearchEmpty(payload)) {
        // Only change the state if the stored value has some defined values.
        if (state.search && !isSearchEmpty(state.search)) {
            return {
                ...state,
                search: blankSearch,
            };
        }
        return state;
    }
    const currentSearch = state.search || blankSearch;
    // Create a clone of current search. We must not modify the original object,
    // as store customers are free to cache it and check for changes. If we modify
    // the original object the check for changes incorrectly return false.
    const search = { ...currentSearch };
    let changed = false;
    if (payload.query !== undefined && payload.query !== currentSearch.query) {
        search.query = payload.query;
        changed = true;
    }
    if (payload.status !== undefined && payload.status !== currentSearch.status) {
        search.status = payload.status;
        changed = true;
    }
    if (optionsChanged(currentSearch.options, payload.options)) {
        search.options = { ...payload.options };
        changed = true;
    }
    return changed ? { ...state, search } : state;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview UI entries slice of the store.
 *
 * UI entries represents entries shown on UI only (aka FakeEntry, e.g.
 * Recents/Trash/Google Drive wrapper), they don't have a real entry backup in
 * the file system.
 */
const slice$1 = new Slice('uiEntries');
new Set([
    RootType.ANDROID_FILES,
    RootType.CROSTINI,
    RootType.GUEST_OS,
]);
/** Create action to add an UI entry to the store. */
slice$1.addReducer('add', addUiEntryReducer);
function addUiEntryReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, [payload.entry]);
    const { entry } = payload;
    const key = entry.toURL();
    const uiEntries = [...currentState.uiEntries, key];
    return {
        ...currentState,
        uiEntries,
    };
}
/** Create action to remove an UI entry from the store. */
slice$1.addReducer('remove', removeUiEntryReducer);
function removeUiEntryReducer(currentState, payload) {
    const { key } = payload;
    const uiEntries = currentState.uiEntries.filter(k => k !== key);
    return {
        ...currentState,
        uiEntries,
    };
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Store singleton instance.
 * It's only exposed via `getStore()` to guarantee it's a single instance.
 * TODO(b/272120634): Use window.store temporarily, uncomment below code after
 * the duplicate store issue is resolved.
 */
// let store: null|Store = null;
/**
 * Returns the singleton instance for the Files app's Store.
 *
 * NOTE: This doesn't guarantee the Store's initialization. This should be done
 * at the app's main entry point.
 */
function getStore() {
    // TODO(b/272120634): Put the store on window to prevent Store being created
    // twice.
    if (!window.store) {
        window.store = new BaseStore(getEmptyState(), [
            slice$2,
            slice,
            slice$9,
            slice$1,
            slice$a,
            slice$6,
            slice$4,
            slice$3,
            slice$8,
            slice$7,
            slice$c,
            slice$b,
            slice$5,
        ]);
    }
    return window.store;
}
function getEmptyState() {
    // TODO(b/241707820): Migrate State to allow optional attributes.
    return {
        allEntries: {},
        currentDirectory: undefined,
        device: {
            connection: chrome.fileManagerPrivate.DeviceConnectionState.ONLINE,
        },
        drive: {
            connectionType: chrome.fileManagerPrivate.DriveConnectionStateType.ONLINE,
            offlineReason: undefined,
        },
        search: {
            query: undefined,
            status: undefined,
            options: undefined,
        },
        navigation: {
            roots: [],
        },
        volumes: {},
        uiEntries: [],
        folderShortcuts: [],
        androidApps: {},
        bulkPinning: undefined,
        preferences: undefined,
        launchParams: {
            dialogType: undefined,
        },
    };
}
/**
 * Returns the `FileData` from a FileKey.
 */
function getFileData(state, key) {
    const fileData = state.allEntries[key];
    if (fileData) {
        return fileData;
    }
    return null;
}
function getEntry(state, key) {
    const fileData = state.allEntries[key];
    return fileData?.entry ?? null;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Volumes slice of the store.
 */
const slice = new Slice('volumes');
const myFilesEntryListKey = `entry-list://${RootType.MY_FILES}`;
`fake-entry://${RootType.CROSTINI}`;
`fake-entry://${RootType.DRIVE_FAKE_ROOT}`;
const recentRootKey = `fake-entry://${RootType.RECENT}/all`;
const trashRootKey = `fake-entry://${RootType.TRASH}`;
const driveRootEntryListKey = `entry-list://${RootType.DRIVE_FAKE_ROOT}`;
const makeRemovableParentKey = (volume) => {
    // Should be consistent with EntryList's toURL() method.
    if (volume.devicePath) {
        return `entry-list://${RootType.REMOVABLE}/${volume.devicePath}`;
    }
    return `entry-list://${RootType.REMOVABLE}`;
};
const removableGroupKey = (volume) => `${volume.devicePath}/${volume.driveLabel}`;
function getVolumeTypesNestedInMyFiles() {
    const myFilesNestedVolumeTypes = new Set([
        VolumeType.ANDROID_FILES,
        VolumeType.CROSTINI,
    ]);
    if (isGuestOsEnabled()) {
        myFilesNestedVolumeTypes.add(VolumeType.GUEST_OS);
    }
    return myFilesNestedVolumeTypes;
}
/**
 * Convert VolumeInfo and VolumeMetadata to its store representation: Volume.
 */
function convertVolumeInfoAndMetadataToVolume(volumeInfo, volumeMetadata) {
    /**
     * FileKey for the volume root's Entry. Or how do we find the Entry for this
     * volume in the allEntries.
     */
    const volumeRootKey = volumeInfo.displayRoot.toURL();
    return {
        volumeId: volumeMetadata.volumeId,
        volumeType: volumeMetadata.volumeType,
        rootKey: volumeRootKey,
        status: PropStatus.SUCCESS,
        label: volumeInfo.label,
        error: volumeMetadata.mountCondition,
        deviceType: volumeMetadata.deviceType,
        devicePath: volumeMetadata.devicePath,
        isReadOnly: volumeMetadata.isReadOnly,
        isReadOnlyRemovableDevice: volumeMetadata.isReadOnlyRemovableDevice,
        providerId: volumeMetadata.providerId,
        configurable: volumeMetadata.configurable,
        watchable: volumeMetadata.watchable,
        source: volumeMetadata.source,
        diskFileSystemType: volumeMetadata.diskFileSystemType,
        iconSet: volumeMetadata.iconSet,
        driveLabel: volumeMetadata.driveLabel,
        vmType: volumeMetadata.vmType,
        isDisabled: false,
        // FileKey to volume's parent in the Tree.
        prefixKey: undefined,
        // A volume is by default interactive unless explicitly made
        // non-interactive.
        isInteractive: true,
    };
}
/**
 * Updates a volume from the store.
 */
function updateVolume(state, volumeId, changes) {
    const volume = state.volumes[volumeId];
    if (!volume) {
        console.warn(`Volume not found in the store: ${volumeId}`);
        return;
    }
    return {
        ...volume,
        ...changes,
    };
}
/** Create action to add a volume. */
slice.addReducer('add', addVolumeReducer);
function addVolumeReducer(currentState, payload) {
    const { volumeMetadata, volumeInfo } = payload;
    if (!volumeInfo.fileSystem) {
        console.error('Only add to the store volumes that have successfully resolved.');
        return currentState;
    }
    // Cache entries, so the reducers can use any entry from `allEntries`.
    const newVolumeEntry = new VolumeEntry(payload.volumeInfo);
    cacheEntries(currentState, [newVolumeEntry]);
    const volumeRootKey = newVolumeEntry.toURL();
    // Update isEjectable fields in the FileData.
    currentState.allEntries[volumeRootKey] = {
        ...currentState.allEntries[volumeRootKey],
        isEjectable: (volumeInfo.source === Source.DEVICE &&
            volumeInfo.volumeType !== VolumeType.MTP) ||
            volumeInfo.source === Source.FILE,
    };
    const volume = convertVolumeInfoAndMetadataToVolume(volumeInfo, volumeMetadata);
    // Use volume entry's disabled property because that one is derived from
    // volume manager.
    volume.isDisabled = !!newVolumeEntry.disabled;
    // Handles volumes nested inside MyFiles.
    // It creates a placeholder for MyFiles if MyFiles volume isn't mounted yet.
    const myFilesNestedVolumeTypes = getVolumeTypesNestedInMyFiles();
    const { myFilesEntry } = getMyFiles(currentState);
    // For volumes which are supposed to be nested inside MyFiles (e.g. Android,
    // Crostini, GuestOS), we need to nest them into MyFiles and remove the
    // placeholder fake entry if existed.
    if (myFilesNestedVolumeTypes.has(volume.volumeType)) {
        volume.prefixKey = myFilesEntry.toURL();
        const myFilesEntryKey = myFilesEntry.toURL();
        // Shallow copy here because we will update this object directly below, and
        // the same object might be referenced in the UI.
        const myFilesFileData = { ...getFileData(currentState, myFilesEntryKey) };
        // Nest the entry for the new volume info in MyFiles.
        const uiEntryPlaceholder = myFilesEntry.getUiChildren().find(childEntry => childEntry.name === newVolumeEntry.name);
        // Remove a placeholder for the currently mounting volume.
        if (uiEntryPlaceholder) {
            myFilesEntry.removeChildEntry(uiEntryPlaceholder);
            // Also remove it from the children field.
            myFilesFileData.children = myFilesFileData.children.filter(childKey => childKey !== uiEntryPlaceholder.toURL());
            // Do not remove the placeholder ui entry from the store. Removing it from
            // the MyFiles is sufficient to prevent it from showing in the directory
            // tree. We keep it in the store (`currentState["uiEntries"]`) because
            // when the corresponding volume unmounts, we need to use its existence to
            // decide if we need to re-add the placeholder back to MyFiles.
        }
        appendChildIfNotExisted(myFilesEntry, newVolumeEntry);
        // Push the new entry to the children of FileData and sort them.
        if (!myFilesFileData.children.find(childKey => childKey === volumeRootKey)) {
            const newChildren = [...myFilesFileData.children, volumeRootKey];
            const childEntries = newChildren.map(childKey => getEntry(currentState, childKey));
            myFilesFileData.children =
                sortEntries(myFilesEntry, childEntries).map(entry => entry.toURL());
        }
        currentState.allEntries[myFilesEntryKey] = myFilesFileData;
    }
    // When we manipulate the children below, we need to update both
    // `entry.children_` (usually via `appendChildIfNotExisted/removeChildEntry`)
    // and also `FileData.children`. This is specific for the purpose of Directory
    // tree rendering, the tree item only fetch its sub directories on the first
    // render or when it's being expanded, if a volume mount introduces new
    // children (e.g. Drive volume and its children), the Tree UI doesn't know it
    // needs to be re-fetch sub directories because no file watcher event is
    // triggered for certain cases, hence updating the `FileData.children` here.
    // Handles MyFiles volume.
    // It nests the Android, Crostini & GuestOSes inside MyFiles.
    if (volume.volumeType === VolumeType.DOWNLOADS) {
        for (const v of Object.values(currentState.volumes)) {
            if (myFilesNestedVolumeTypes.has(v.volumeType)) {
                v.prefixKey = volumeRootKey;
            }
        }
        // Do not use myFilesEntry above, because at this moment both fake MyFiles
        // and real MyFiles are in the store.
        const myFilesEntryList = getEntry(currentState, myFilesEntryListKey);
        if (myFilesEntryList) {
            // We need to copy the children of the entry list to the real volume
            // entry.
            const uiChildren = [...myFilesEntryList.getUiChildren()];
            for (const childEntry of uiChildren) {
                appendChildIfNotExisted(newVolumeEntry, childEntry);
                myFilesEntryList.removeChildEntry(childEntry);
            }
            // Also copy the FileData children of the entry list to the real volume
            // entry.
            const myFilesEntryListFileData = getFileData(currentState, myFilesEntryListKey);
            const myFilesVolumeEntryFileData = getFileData(currentState, volumeRootKey);
            currentState.allEntries[volumeRootKey] = {
                ...myFilesVolumeEntryFileData,
                children: [...myFilesEntryListFileData.children],
            };
            // Remove MyFiles entry list from the uiEntries.
            currentState.uiEntries = currentState.uiEntries.filter(uiEntryKey => uiEntryKey !== myFilesEntryListKey);
        }
    }
    // Handles Drive volume.
    // It nests the Drive root (aka MyDrive) inside a EntryList for "Google
    // Drive", and also the fake entries for "Offline" and "Shared with me".
    if (volume.volumeType === VolumeType.DRIVE) {
        let driveFakeRoot = getEntry(currentState, driveRootEntryListKey);
        if (!driveFakeRoot) {
            driveFakeRoot =
                new EntryList(str('DRIVE_DIRECTORY_LABEL'), RootType.DRIVE_FAKE_ROOT);
            cacheEntries(currentState, [driveFakeRoot]);
        }
        // When Drive is disabled via pref change, the root key in `uiEntries` will
        // be removed immediately but the corresponding entry in `allEntries` is
        // removed asynchronously. When Drive is enabled again, it's possible the
        // entry is still in `allEntries` but we don't have root key in `uiEntries`.
        if (!currentState.uiEntries.includes(driveFakeRoot.toURL())) {
            currentState.uiEntries =
                [...currentState.uiEntries, driveFakeRoot.toURL()];
        }
        const driveRootFileDataChildren = [];
        appendChildIfNotExisted(driveFakeRoot, newVolumeEntry);
        driveRootFileDataChildren.push(volumeRootKey);
        // We want the order to be
        // - My Drive
        // - Shared Drives (if the user has any)
        // - Computers (if the user has any)
        // - Shared with me
        // - Offline
        const { sharedDriveDisplayRoot, computersDisplayRoot, fakeEntries } = volumeInfo;
        // Add "Shared drives" (team drives) grand root into Drive. It's guaranteed
        // to be resolved at this moment because ADD_VOLUME action will only be
        // triggered after resolving all roots.
        if (sharedDriveDisplayRoot) {
            cacheEntries(currentState, [sharedDriveDisplayRoot]);
            appendChildIfNotExisted(driveFakeRoot, sharedDriveDisplayRoot);
            // Do not add Shared drives to the FileData children, as we should only
            // show it in the navigation when it has children inside.
        }
        // Add "Computer" grand root into Drive. It's guaranteed to be resolved at
        // this moment because ADD_VOLUME action will only be triggered after
        // resolving all roots.
        if (computersDisplayRoot) {
            cacheEntries(currentState, [computersDisplayRoot]);
            appendChildIfNotExisted(driveFakeRoot, computersDisplayRoot);
            // Do not add Computers to the FileData children, as we should only show
            // it in the navigation when it has children inside.
        }
        // Add "Shared with me" into Drive.
        const fakeSharedWithMe = fakeEntries[RootType.DRIVE_SHARED_WITH_ME];
        if (fakeSharedWithMe) {
            cacheEntries(currentState, [fakeSharedWithMe]);
            currentState.uiEntries =
                [...currentState.uiEntries, fakeSharedWithMe.toURL()];
            appendChildIfNotExisted(driveFakeRoot, fakeSharedWithMe);
            driveRootFileDataChildren.push(fakeSharedWithMe.toURL());
        }
        // Add "Offline" into Drive.
        const fakeOffline = fakeEntries[RootType.DRIVE_OFFLINE];
        if (fakeOffline) {
            cacheEntries(currentState, [fakeOffline]);
            currentState.uiEntries = [...currentState.uiEntries, fakeOffline.toURL()];
            appendChildIfNotExisted(driveFakeRoot, fakeOffline);
            driveRootFileDataChildren.push(fakeOffline.toURL());
        }
        currentState.allEntries[driveRootEntryListKey] = {
            ...getFileData(currentState, driveRootEntryListKey),
            children: driveRootFileDataChildren,
        };
        volume.prefixKey = driveFakeRoot.toURL();
    }
    // Handles Removable volume.
    // It may nest in a EntryList if one device has multiple partitions.
    if (volume.volumeType === VolumeType.REMOVABLE) {
        const groupingKey = removableGroupKey(volumeMetadata);
        // When the flag is on, we always group removable volume even there's only 1
        // partition, otherwise the group only happens when there are more than 1
        // partition in the same device.
        const shouldGroup = isSinglePartitionFormatEnabled() ?
            true :
            Object.values(currentState.volumes).some(v => {
                return (v.volumeType === VolumeType.REMOVABLE &&
                    removableGroupKey(v) === groupingKey &&
                    v.volumeId !== volumeInfo.volumeId);
            });
        if (shouldGroup) {
            const parentKey = makeRemovableParentKey(volumeMetadata);
            let parentEntry = getEntry(currentState, parentKey);
            if (!parentEntry) {
                parentEntry = new EntryList(volumeMetadata.driveLabel || '', RootType.REMOVABLE, volumeMetadata.devicePath);
                cacheEntries(currentState, [parentEntry]);
                currentState.uiEntries =
                    [...currentState.uiEntries, parentEntry.toURL()];
            }
            const partitionChildEntries = [];
            // Update the siblings too.
            Object.values(currentState.volumes)
                .filter(v => v.volumeType === VolumeType.REMOVABLE &&
                removableGroupKey(v) === groupingKey)
                .forEach(v => {
                const fileData = getFileData(currentState, v.rootKey);
                if (!fileData) {
                    return;
                }
                // Volume with `prefixKey` has already been processed, however,
                // regardless of processed or not we always need to put it in
                // `partitionChildEntries` because we are trying to construct the
                // full children array here, at the end we will use
                // `partitionChildEntries` to replace the current
                // `FileData.children`.
                partitionChildEntries.push(fileData.entry);
                if (!v.prefixKey) {
                    v.prefixKey = parentEntry.toURL();
                    appendChildIfNotExisted(parentEntry, fileData.entry);
                    // For sub-partition from a removable volume, its children icon
                    // should be UNKNOWN_REMOVABLE, and it shouldn't be ejectable.
                    currentState.allEntries[v.rootKey] = {
                        ...fileData,
                        icon: ICON_TYPES.UNKNOWN_REMOVABLE,
                        isEjectable: false,
                    };
                }
            });
            // At this point the current `newVolumeEntry` is not in `parentEntry`, we
            // need to add that to that group.
            appendChildIfNotExisted(parentEntry, newVolumeEntry);
            partitionChildEntries.push(newVolumeEntry);
            volume.prefixKey = parentEntry.toURL();
            // For sub-partition from a removable volume, its children icon should be
            // UNKNOWN_REMOVABLE, and it shouldn't be ejectable.
            const fileData = getFileData(currentState, volumeRootKey);
            currentState.allEntries[volumeRootKey] = {
                ...fileData,
                icon: ICON_TYPES.UNKNOWN_REMOVABLE,
                isEjectable: false,
            };
            currentState.allEntries[parentKey] = {
                ...getFileData(currentState, parentKey),
                // Removable devices with group, its parent should always be ejectable.
                isEjectable: true,
                children: sortEntries(parentEntry, partitionChildEntries)
                    .map(entry => entry.toURL()),
            };
        }
    }
    return {
        ...currentState,
        volumes: {
            ...currentState.volumes,
            [volume.volumeId]: volume,
        },
    };
}
function appendChildIfNotExisted(parentEntry, childEntry) {
    if (!parentEntry.getUiChildren().find((entry) => isSameEntry(entry, childEntry))) {
        parentEntry.addEntry(childEntry);
        return true;
    }
    return false;
}
/** Create action to remove a volume. */
slice.addReducer('remove', removeVolumeReducer);
function removeVolumeReducer(currentState, payload) {
    const volumeToRemove = currentState.volumes[payload.volumeId];
    if (!volumeToRemove) {
        // Somehow the volume is already removed from the store, do nothing.
        return currentState;
    }
    const volumeEntry = getEntry(currentState, volumeToRemove.rootKey);
    delete currentState.volumes[payload.volumeId];
    currentState.volumes = {
        ...currentState.volumes,
    };
    if (!volumeToRemove.prefixKey) {
        return { ...currentState };
    }
    // We also need to remove it from its prefix entry if there is one.
    const prefixEntryFileData = getFileData(currentState, volumeToRemove.prefixKey);
    if (prefixEntryFileData) {
        const prefixEntry = prefixEntryFileData.entry;
        // Remove it from the prefix entry's UI children.
        prefixEntry.removeChildEntry(volumeEntry);
        // Remove it from the prefix entry's file data.
        let newChildren = prefixEntryFileData.children.filter(child => child !== volumeEntry.toURL());
        // If the prefix entry is an entry list for removable partitions, and this
        // is the last child, remove the prefix entry.
        if (prefixEntry.rootType === RootType.REMOVABLE &&
            newChildren.length === 0) {
            currentState.uiEntries = currentState.uiEntries.filter(uiEntryKey => uiEntryKey !== volumeToRemove.prefixKey);
        }
        // If the volume entry is under MyFiles, we need to add the placeholder
        // entry back after the corresponding volume is removed (e.g. Crostini/Play
        // files).
        const volumeTypesNestedInMyFiles = getVolumeTypesNestedInMyFiles();
        const uiEntryKey = currentState.uiEntries.find(entryKey => {
            const uiEntry = getEntry(currentState, entryKey);
            return uiEntry.name === volumeEntry.name;
        });
        if (volumeTypesNestedInMyFiles.has(volumeToRemove.volumeType) &&
            uiEntryKey) {
            // Re-add the corresponding placeholder ui entry to the UI children.
            const uiEntry = getEntry(currentState, uiEntryKey);
            prefixEntry.addEntry(uiEntry);
            // Re-add the corresponding placeholder ui entry to the file data.
            newChildren = newChildren.concat(uiEntryKey);
            const childEntries = newChildren.map(childKey => getEntry(currentState, childKey));
            newChildren =
                sortEntries(prefixEntry, childEntries).map(entry => entry.toURL());
        }
        currentState.allEntries[volumeToRemove.prefixKey] = {
            ...prefixEntryFileData,
            children: newChildren,
        };
    }
    return {
        ...currentState,
    };
}
/** Create action to update isInteractive for a volume. */
slice.addReducer('set-is-interactive', updateIsInteractiveVolumeReducer);
function updateIsInteractiveVolumeReducer(currentState, payload) {
    const volumes = {
        ...currentState.volumes,
    };
    const updatedVolume = {
        ...volumes[payload.volumeId],
        isInteractive: payload.isInteractive,
    };
    return {
        ...currentState,
        volumes: {
            ...volumes,
            [payload.volumeId]: updatedVolume,
        },
    };
}
slice.addReducer(updateDeviceConnectionState.type, updateDeviceConnectionStateReducer);
function updateDeviceConnectionStateReducer(currentState, payload) {
    let volumes;
    // Find ODFS volume(s) and disable it (or them) if offline.
    const disableODFS = payload.connection ===
        chrome.fileManagerPrivate.DeviceConnectionState.OFFLINE;
    for (const volume of Object.values(currentState.volumes)) {
        if (!isOneDriveId(volume.providerId) || volume.isDisabled === disableODFS) {
            continue;
        }
        const updatedVolume = updateVolume(currentState, volume.volumeId, { isDisabled: disableODFS });
        if (updatedVolume) {
            if (!volumes) {
                volumes = {
                    ...currentState.volumes,
                    [volume.volumeId]: updatedVolume,
                };
            }
            else {
                volumes[volume.volumeId] = updatedVolume;
            }
        }
        // Make the ODFS FileData/VolumeEntry consistent with its volume in the
        // store.
        updateFileDataInPlace(currentState, volume.rootKey, { disabled: disableODFS });
        const odfsVolumeEntry = getEntry(currentState, volume.rootKey);
        if (odfsVolumeEntry) {
            odfsVolumeEntry.disabled = disableODFS;
        }
    }
    return volumes ? { ...currentState, volumes } : currentState;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Type guard used to identify if a given entry is actually a
 * VolumeEntry.
 */
function isVolumeEntry(entry) {
    return 'volumeInfo' in entry;
}
/**
 * Check if the entry is MyFiles or not.
 * Note: if the return value is true, the input entry is guaranteed to be
 * EntryList or VolumeEntry type.
 */
function isMyFilesEntry(entry) {
    if (!entry) {
        return false;
    }
    if (entry instanceof EntryList && entry.toURL() === myFilesEntryListKey) {
        return true;
    }
    if (isVolumeEntry(entry) && entry.volumeType === VolumeType.DOWNLOADS) {
        return true;
    }
    return false;
}
/** Sort the entries based on the filter and the names. */
function sortEntries(parentEntry, entries) {
    if (entries.length === 0) {
        return [];
    }
    // TODO: proper way to get directory model and volume manager.
    const { directoryModel, volumeManager } = window.fileManager;
    const fileFilter = directoryModel.getFileFilter();
    // For entries under My Files we need to use a different sorting logic
    // because we need to make sure curtain files are always at the bottom.
    if (isMyFilesEntry(parentEntry)) {
        // Use locationInfo from first entry because it only compare within the
        // same volume.
        // TODO(b/271485133): Do not use getLocationInfo() for sorting.
        const locationInfo = volumeManager.getLocationInfo(entries[0]);
        if (locationInfo) {
            const compareFunction = compareLabelAndGroupBottomEntries(locationInfo, 
            // Only Linux/Play/GuestOS files are in the UI children.
            parentEntry.getUiChildren());
            return entries.filter(entry => fileFilter.filter(entry))
                .sort(compareFunction);
        }
    }
    return entries.filter(entry => fileFilter.filter(entry)).sort(compareName);
}
/**
 * Obtains whether an entry is fake or not.
 */
function isFakeEntry(entry) {
    if (entry.getParent === undefined) {
        return true;
    }
    return 'isNativeType' in entry ? !entry.isNativeType : false;
}
/**
 * Compares two entries.
 * @return True if the both entry represents a same file or
 *     directory. Returns true if both entries are null.
 */
function isSameEntry(entry1, entry2) {
    if (!entry1 && !entry2) {
        return true;
    }
    if (!entry1 || !entry2) {
        return false;
    }
    return entry1.toURL() === entry2.toURL();
}
/**
 * Compare by name. The 2 entries must be in same directory.
 */
function compareName(entry1, entry2) {
    return collator.compare(entry1.name, entry2.name);
}
/**
 * Compare by label (i18n name). The 2 entries must be in same directory.
 */
function compareLabel(locationInfo, entry1, entry2) {
    return collator.compare(getEntryLabel(locationInfo, entry1), getEntryLabel(locationInfo, entry2));
}
/**
 * Compare by path.
 */
function comparePath(entry1, entry2) {
    return collator.compare(entry1.fullPath, entry2.fullPath);
}
/**
 * @param bottomEntries entries that should be grouped in the bottom, used for
 *     sorting Linux and Play files entries after
 * other folders in MyFiles.
 */
function compareLabelAndGroupBottomEntries(locationInfo, bottomEntries) {
    const childrenMap = new Map();
    bottomEntries.forEach((entry) => {
        childrenMap.set(entry.toURL(), entry);
    });
    /**
     * Compare entries putting entries from |bottomEntries| in the bottom and
     * sort by name within entries that are the same type in regards to
     * |bottomEntries|.
     */
    function compare(entry1, entry2) {
        // Bottom entry here means Linux or Play files, which should appear after
        // all native entries.
        const isBottomEntry1 = childrenMap.has(entry1.toURL()) ? 1 : 0;
        const isBottomEntry2 = childrenMap.has(entry2.toURL()) ? 1 : 0;
        // When there are the same type, just compare by label.
        if (isBottomEntry1 === isBottomEntry2) {
            return compareLabel(locationInfo, entry1, entry2);
        }
        return isBottomEntry1 - isBottomEntry2;
    }
    return compare;
}
/**
 * Converts array of entries to an array of corresponding URLs.
 */
function entriesToURLs(entries) {
    return entries.map(entry => {
        // When building file_manager_base.js, cachedUrl is not referred other than
        // here. Thus closure compiler raises an error if we refer the property like
        // entry.cachedUrl.
        if ('cachedUrl' in entry) {
            return entry['cachedUrl'] || entry.toURL();
        }
        return entry.toURL();
    });
}
const isOneDriveId = (providerId) => providerId === ODFS_EXTENSION_ID;

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Script loaded into the background page of a component
 * extension under test at runtime to populate testing functionality.
 */
/**
 * Extract the information of the given element.
 * @param element Element to be extracted.
 * @param contentWindow Window to be tested.
 * @param styleNames List of CSS property name to be obtained. NOTE: Causes
 *     element style re-calculation.
 * @return Element information that contains contentText, attribute names and
 *     values, hidden attribute, and style names and values.
 */
function extractElementInfo(element, contentWindow, styleNames) {
    const attributes = {};
    for (const attr of element.attributes) {
        attributes[attr.nodeName] = attr.nodeValue;
    }
    const result = {
        attributes: attributes,
        styles: {},
        text: element.textContent,
        innerText: element.innerText,
        value: element.value,
        // The hidden attribute is not in the element.attributes even if
        // element.hasAttribute('hidden') is true.
        hidden: !!element.hidden,
        hasShadowRoot: !!element.shadowRoot,
    };
    styleNames = styleNames || [];
    assert(Array.isArray(styleNames));
    if (!styleNames.length) {
        return result;
    }
    // Force a style resolve and record the requested style values.
    const size = element.getBoundingClientRect();
    const computedStyle = contentWindow.getComputedStyle(element);
    for (const style of styleNames) {
        result.styles[style] = computedStyle.getPropertyValue(style);
    }
    // These attributes are set when element is <img> or <canvas>.
    result.imageWidth = Number(element.width);
    result.imageHeight = Number(element.height);
    // Get the element client rectangle properties.
    result.renderedWidth = size.width;
    result.renderedHeight = size.height;
    result.renderedTop = size.top;
    result.renderedLeft = size.left;
    // Get the element scroll properties.
    result.scrollLeft = element.scrollLeft;
    result.scrollTop = element.scrollTop;
    result.scrollWidth = element.scrollWidth;
    result.scrollHeight = element.scrollHeight;
    return result;
}
/**
 * Gets total Javascript error count from background page and each app window.
 * @return Error count.
 */
test.util.sync.getErrorCount = () => {
    return window.JSErrorCount;
};
/**
 * Resizes the window to the specified dimensions.
 *
 * @param width Window width.
 * @param height Window height.
 * @return True for success.
 */
test.util.sync.resizeWindow = (width, height) => {
    window.resizeTo(width, height);
    return true;
};
/**
 * Queries all elements.
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element.
 * @param styleNames List of CSS property name to be obtained.
 * @return Element information that contains contentText, attribute names and
 *     values, hidden attribute, and style names and values.
 */
test.util.sync.queryAllElements =
    (contentWindow, targetQuery, styleNames) => {
        return test.util.sync.deepQueryAllElements(contentWindow, targetQuery, styleNames);
    };
/**
 * Queries elements inside shadow DOM.
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element.
 *   |targetQuery[0]| specifies the first element(s). |targetQuery[1]| specifies
 *   elements inside the shadow DOM of the first element, and so on.
 * @param styleNames List of CSS property name to be obtained.
 * @return Element information that contains contentText, attribute names and
 *     values, hidden attribute, and style names and values.
 */
test.util.sync.deepQueryAllElements =
    (contentWindow, targetQuery, styleNames) => {
        if (!contentWindow.document) {
            return [];
        }
        if (typeof targetQuery === 'string') {
            targetQuery = [targetQuery];
        }
        const elems = deepQuerySelectorAll(contentWindow.document, targetQuery);
        return elems.map((element) => {
            return extractElementInfo(element, contentWindow, styleNames);
        });
    };
/**
 * Count elements matching the selector query.
 *
 * This avoid serializing and transmitting the elements to the test extension,
 * which can be time consuming for large elements.
 *
 * @param contentWindow Window to be tested.
 * @param query Query to specify the element.
 *   |query[0]| specifies the first element(s). |query[1]| specifies elements
 *   inside the shadow DOM of the first element, and so on.
 * @param callback Callback function with results if the number of elements
 *     match |count|.
 */
test.util.async.countElements =
    (contentWindow, query, count, callback) => {
        // Uses requestIdleCallback so it doesn't interfere with normal operation
        // of Files app UI.
        contentWindow.requestIdleCallback(() => {
            const elements = deepQuerySelectorAll(contentWindow.document, query);
            callback(elements.length === count);
        });
    };
/**
 * Selects elements below |root|, possibly following shadow DOM subtree.
 *
 * @param root Element to search from.
 * @param targetQuery Query to specify the element.
 *   |targetQuery[0]| specifies the first element(s). |targetQuery[1]| specifies
 *   elements inside the shadow DOM of the first element, and so on.
 * @return Matched elements.
 */
function deepQuerySelectorAll(root, targetQuery) {
    const elems = Array.prototype.slice.call(root.querySelectorAll(targetQuery[0]));
    const remaining = targetQuery.slice(1);
    if (remaining.length === 0) {
        return elems;
    }
    let res = [];
    for (const elem of elems) {
        if ('shadowRoot' in elem) {
            res = res.concat(deepQuerySelectorAll(elem.shadowRoot, remaining));
        }
    }
    return res;
}
/**
 * Gets the information of the active element.
 *
 * @param contentWindow Window to be tested.
 * @param styleNames List of CSS property name to be obtained.
 * @return Element information that contains contentText, attribute names and
 *     values, hidden attribute, and style names and values. If there is no
 *     active element, returns null.
 */
test.util.sync.getActiveElement =
    (contentWindow, styleNames) => {
        if (!contentWindow.document || !contentWindow.document.activeElement) {
            return null;
        }
        return extractElementInfo(contentWindow.document.activeElement, contentWindow, styleNames);
    };
/**
 * Gets the information of the active element. However, unlike the previous
 * helper, the shadow roots are searched as well.
 *
 * @param contentWindow Window to be tested.
 * @param styleNames List of CSS property name to be obtained.
 * @return Element information that contains contentText, attribute names and
 *     values, hidden attribute, and style names and values. If there is no
 *     active element, returns null.
 */
test.util.sync.deepGetActiveElement =
    (contentWindow, styleNames) => {
        if (!contentWindow.document || !contentWindow.document.activeElement) {
            return null;
        }
        let activeElement = contentWindow.document.activeElement;
        while (true) {
            const shadow = activeElement.shadowRoot;
            if (shadow && shadow.activeElement) {
                activeElement = shadow.activeElement;
            }
            else {
                break;
            }
        }
        return extractElementInfo(activeElement, contentWindow, styleNames);
    };
/**
 * Gets an array of every activeElement, walking down the shadowRoot of every
 * active element it finds.
 *
 * @param contentWindow Window to be tested.
 * @param styleNames List of CSS property name to be obtained.
 * @return Element information that contains contentText, attribute names and
 *     values, hidden attribute, and style names and values. If there is no
 * active element, returns an empty array.
 */
test.util.sync.deepGetActivePath =
    (contentWindow, styleNames) => {
        if (!contentWindow.document || !contentWindow.document.activeElement) {
            return [];
        }
        const path = [contentWindow.document.activeElement];
        while (true) {
            const shadow = path[path.length - 1]?.shadowRoot;
            if (shadow && shadow.activeElement) {
                path.push(shadow.activeElement);
            }
            else {
                break;
            }
        }
        return path.map(el => extractElementInfo(el, contentWindow, styleNames));
    };
/**
 * Assigns the text to the input element.
 * @param contentWindow Window to be tested.
 * @param query Query for the input element.
 *     If |query| is an array, |query[0]| specifies the first element(s),
 *     |query[1]| specifies elements inside the shadow DOM of the first element,
 *     and so on.
 * @param text Text to be assigned.
 * @return Whether or not the text was assigned.
 */
test.util.sync.inputText =
    (contentWindow, query, text) => {
        if (typeof query === 'string') {
            query = [query];
        }
        const elems = deepQuerySelectorAll(contentWindow.document, query);
        if (elems.length === 0) {
            console.error(`Input element not found: [${query.join(',')}]`);
            return false;
        }
        const input = elems[0];
        input.value = text;
        input.dispatchEvent(new Event('change'));
        return true;
    };
/**
 * Sets the left scroll position of an element.
 * @param contentWindow Window to be tested.
 * @param query Query for the test element.
 * @param position scrollLeft position to set.
 * @return True if operation was successful.
 */
test.util.sync.setScrollLeft =
    (contentWindow, query, position) => {
        contentWindow.document.querySelector(query).scrollLeft = position;
        return true;
    };
/**
 * Sets the top scroll position of an element.
 * @param contentWindow Window to be tested.
 * @param query Query for the test element.
 * @param position scrollTop position to set.
 * @return True if operation was successful.
 */
test.util.sync.setScrollTop =
    (contentWindow, query, position) => {
        contentWindow.document.querySelector(query).scrollTop = position;
        return true;
    };
/**
 * Sets style properties for an element using the CSS OM.
 * @param contentWindow Window to be tested.
 * @param query Query for the test element.
 * @param properties CSS Property name/values to set.
 * @return Whether styles were set or not.
 */
test.util.sync.setElementStyles =
    (contentWindow, query, properties) => {
        const element = contentWindow.document.querySelector(query);
        if (element === null) {
            console.error(`Failed to locate element using query "${query}"`);
            return false;
        }
        for (const [key, value] of Object.entries(properties)) {
            element.style.setProperty(key, value);
        }
        return true;
    };
/**
 * Sends an event to the element specified by |targetQuery| or active element.
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element.
 *     If this value is null, an event is dispatched to active element of the
 *     document.
 *     If targetQuery is an array, |targetQuery[0]| specifies the first
 *     element(s), |targetQuery[1]| specifies elements inside the shadow DOM of
 *     the first element, and so on.
 * @param event Event to be sent.
 * @return True if the event is sent to the target, false otherwise.
 */
test.util.sync.sendEvent =
    (contentWindow, targetQuery, event) => {
        if (!contentWindow.document) {
            return false;
        }
        let target;
        if (targetQuery === null) {
            target = contentWindow.document.activeElement;
        }
        else if (typeof targetQuery === 'string') {
            target = contentWindow.document.querySelector(targetQuery);
        }
        else if (Array.isArray(targetQuery)) {
            const elements = deepQuerySelectorAll(contentWindow.document, targetQuery);
            if (elements.length > 0) {
                target = elements[0];
            }
        }
        if (!target) {
            return false;
        }
        target.dispatchEvent(event);
        return true;
    };
/**
 * Sends an fake event having the specified type to the target query.
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element.
 * @param eventType Type of event.
 * @param additionalProperties Object containing additional properties.
 * @return True if the event is sent to the target, false otherwise.
 */
test.util.sync.fakeEvent =
    (contentWindow, targetQuery, eventType, additionalProperties) => {
        const isCustomEvent = 'detail' in (additionalProperties || {});
        const event = isCustomEvent ?
            new CustomEvent(eventType, additionalProperties || {}) :
            new Event(eventType, additionalProperties || {});
        if (!isCustomEvent && additionalProperties) {
            for (const name in additionalProperties) {
                if (name === 'bubbles') {
                    // bubbles is a read-only which, causes an error when assigning.
                    continue;
                }
                event[name] = additionalProperties[name];
            }
        }
        return test.util.sync.sendEvent(contentWindow, targetQuery, event);
    };
/**
 * Sends a fake key event to the element specified by |targetQuery| or active
 * element with the given |key| and optional |ctrl,shift,alt| modifier.
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element. If this value is
 *     null, key event is dispatched to active element of the document.
 * @param key DOM UI Events key value.
 * @param ctrl Whether CTRL should be pressed, or not.
 * @param shift whether SHIFT should be pressed, or not.
 * @param alt whether ALT should be pressed, or not.
 * @return True if the event is sent to the target, false otherwise.
 */
test.util.sync.fakeKeyDown =
    (contentWindow, targetQuery, key, ctrl, shift, alt) => {
        const event = new KeyboardEvent('keydown', {
            bubbles: true,
            composed: true, // Allow the event to bubble past shadow DOM root.
            key: key,
            ctrlKey: ctrl,
            shiftKey: shift,
            altKey: alt,
        });
        return test.util.sync.sendEvent(contentWindow, targetQuery, event);
    };
/**
 * Simulates a fake mouse click (left button, single click) on the element
 * specified by |targetQuery|. If the element has the click method, just calls
 * it. Otherwise, this sends 'mouseover', 'mousedown', 'mouseup' and 'click'
 * events in turns.
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element.
 *     If targetQuery is an array, |targetQuery[0]| specifies the first
 *     element(s), |targetQuery[1]| specifies elements inside the shadow DOM of
 *     the first element, and so on.
 * @param keyModifiers Object containing common key modifiers : shift, alt, and
 *     ctrl.
 * @param button Mouse button number as per spec, e.g.: 2 for right-click.
 * @param eventProperties Additional properties to pass to each event, e.g.:
 *     clientX and clientY. right-click.
 * @return True if the all events are sent to the target, false otherwise.
 */
test.util.sync.fakeMouseClick =
    (contentWindow, targetQuery, keyModifiers, button, eventProperties) => {
        const modifiers = keyModifiers || {};
        eventProperties = eventProperties || {};
        const props = Object.assign({
            bubbles: true,
            detail: 1,
            composed: true, // Allow the event to bubble past shadow DOM root.
            ctrlKey: modifiers.ctrl,
            shiftKey: modifiers.shift,
            altKey: modifiers.alt,
        }, eventProperties);
        if (button !== undefined) {
            props.button = button;
        }
        if (!targetQuery) {
            return false;
        }
        if (typeof targetQuery === 'string') {
            targetQuery = [targetQuery];
        }
        const elems = deepQuerySelectorAll(contentWindow.document, targetQuery);
        if (elems.length === 0) {
            return false;
        }
        // Only sends the event to the first matched element.
        const target = elems[0];
        const mouseOverEvent = new MouseEvent('mouseover', props);
        const resultMouseOver = target.dispatchEvent(mouseOverEvent);
        const mouseDownEvent = new MouseEvent('mousedown', props);
        const resultMouseDown = target.dispatchEvent(mouseDownEvent);
        const mouseUpEvent = new MouseEvent('mouseup', props);
        const resultMouseUp = target.dispatchEvent(mouseUpEvent);
        const clickEvent = new MouseEvent('click', props);
        const resultClick = target.dispatchEvent(clickEvent);
        return resultMouseOver && resultMouseDown && resultMouseUp && resultClick;
    };
/**
 * Simulates a mouse hover on an element specified by |targetQuery|.
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element.
 *     If targetQuery is an array, |targetQuery[0]| specifies the first
 *     element(s), |targetQuery[1]| specifies elements inside the shadow DOM of
 *     the first element, and so on.
 * @param keyModifiers Object containing common key modifiers : shift, alt, and
 *     ctrl.
 * @return True if the event was sent to the target, false otherwise.
 */
test.util.sync.fakeMouseOver =
    (contentWindow, targetQuery, keyModifiers) => {
        const modifiers = keyModifiers || {};
        const props = {
            bubbles: true,
            detail: 1,
            composed: true, // Allow the event to bubble past shadow DOM root.
            ctrlKey: modifiers.ctrl,
            shiftKey: modifiers.shift,
            altKey: modifiers.alt,
        };
        const mouseOverEvent = new MouseEvent('mouseover', props);
        return test.util.sync.sendEvent(contentWindow, targetQuery, mouseOverEvent);
    };
/**
 * Simulates a mouseout event on an element specified by |targetQuery|.
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element.
 *     If targetQuery is an array, |targetQuery[0]| specifies the first
 *     element(s), |targetQuery[1]| specifies elements inside the shadow DOM of
 *     the first element, and so on.
 * @param keyModifiers Object containing common key modifiers : shift, alt, and
 *     ctrl.
 * @return True if the event is sent to the target, false otherwise.
 */
test.util.sync.fakeMouseOut =
    (contentWindow, targetQuery, keyModifiers) => {
        const modifiers = keyModifiers || {};
        const props = {
            bubbles: true,
            detail: 1,
            composed: true, // Allow the event to bubble past shadow DOM root.
            ctrlKey: modifiers.ctrl,
            shiftKey: modifiers.shift,
            altKey: modifiers.alt,
        };
        const mouseOutEvent = new MouseEvent('mouseout', props);
        return test.util.sync.sendEvent(contentWindow, targetQuery, mouseOutEvent);
    };
/**
 * Simulates a fake full mouse right-click  on the element specified by
 * |targetQuery|.
 *
 * It generates the sequence of the following MouseEvents:
 * 1. mouseover
 * 2. mousedown
 * 3. mouseup
 * 4. click
 * 5. contextmenu
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element.
 * @param keyModifiers Object containing common key modifiers: shift, alt, and
 *     ctrl.
 * @return True if the event is sent to the target, false otherwise.
 */
test.util.sync.fakeMouseRightClick =
    (contentWindow, targetQuery, keyModifiers) => {
        const clickResult = test.util.sync.fakeMouseClick(contentWindow, targetQuery, keyModifiers, 2 /* right button */);
        if (!clickResult) {
            return false;
        }
        const contextMenuEvent = new MouseEvent('contextmenu', { bubbles: true, composed: true });
        return test.util.sync.sendEvent(contentWindow, targetQuery, contextMenuEvent);
    };
/**
 * Simulates a fake touch event (touch start and touch end) on the element
 * specified by |targetQuery|.
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element.
 * @return True if the event is sent to the target, false otherwise.
 */
test.util.sync
    .fakeTouchClick = (contentWindow, targetQuery) => {
    const touchStartEvent = new TouchEvent('touchstart');
    if (!test.util.sync.sendEvent(contentWindow, targetQuery, touchStartEvent)) {
        return false;
    }
    const touchEndEvent = new TouchEvent('touchend');
    if (!test.util.sync.sendEvent(contentWindow, targetQuery, touchEndEvent)) {
        return false;
    }
    return true;
};
/**
 * Simulates a fake double click event (left button) to the element specified by
 * |targetQuery|.
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element.
 * @return True if the event is sent to the target, false otherwise.
 */
test.util.sync.fakeMouseDoubleClick =
    (contentWindow, targetQuery) => {
        // Double click is always preceded with a single click.
        if (!test.util.sync.fakeMouseClick(contentWindow, targetQuery)) {
            return false;
        }
        // Send the second click event, but with detail equal to 2 (number of
        // clicks) in a row.
        let event = new MouseEvent('click', { bubbles: true, detail: 2, composed: true });
        if (!test.util.sync.sendEvent(contentWindow, targetQuery, event)) {
            return false;
        }
        // Send the double click event.
        event = new MouseEvent('dblclick', { bubbles: true, composed: true });
        if (!test.util.sync.sendEvent(contentWindow, targetQuery, event)) {
            return false;
        }
        return true;
    };
/**
 * Sends a fake mouse down event to the element specified by |targetQuery|.
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element.
 * @return True if the event is sent to the target, false otherwise.
 */
test.util.sync.fakeMouseDown =
    (contentWindow, targetQuery) => {
        const event = new MouseEvent('mousedown', { bubbles: true, composed: true });
        return test.util.sync.sendEvent(contentWindow, targetQuery, event);
    };
/**
 * Sends a fake mouse up event to the element specified by |targetQuery|.
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element.
 * @return True if the event is sent to the target, false otherwise.
 */
test.util.sync.fakeMouseUp =
    (contentWindow, targetQuery) => {
        const event = new MouseEvent('mouseup', { bubbles: true, composed: true });
        return test.util.sync.sendEvent(contentWindow, targetQuery, event);
    };
/**
 * Simulates a mouse right-click on the element specified by |targetQuery|.
 * Optionally pass X,Y coordinates to be able to choose where the right-click
 * should occur.
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element.
 * @param offsetBottom offset pixels applied to target element bottom, can be
 *     negative to move above the bottom.
 * @param offsetRight offset pixels applied to target element right can be
 *     negative to move inside the element.
 * @return True if the all events are sent to the target, false otherwise.
 */
test.util.sync.rightClickOffset =
    (contentWindow, targetQuery, offsetBottom, offsetRight) => {
        const target = contentWindow.document &&
            contentWindow.document.querySelector(targetQuery);
        if (!target) {
            return false;
        }
        // Calculate the offsets.
        const targetRect = target.getBoundingClientRect();
        const props = {
            clientX: targetRect.right + (offsetRight ? offsetRight : 0),
            clientY: targetRect.bottom + (offsetBottom ? offsetBottom : 0),
        };
        const keyModifiers = undefined;
        const rightButton = 2;
        if (!test.util.sync.fakeMouseClick(contentWindow, targetQuery, keyModifiers, rightButton, props)) {
            return false;
        }
        return true;
    };
/**
 * Sends drag and drop events to simulate dragging a source over a target.
 *
 * @param contentWindow Window to be tested.
 * @param sourceQuery Query to specify the source element.
 * @param targetQuery Query to specify the target element.
 * @param skipDrop Set true to drag over (hover) the target only, and not send
 *     target drop or source dragend events.
 * @param callback Function called with result true on success, or false on
 *     failure.
 */
test.util.async.fakeDragAndDrop =
    (contentWindow, sourceQuery, targetQuery, skipDrop, callback) => {
        const source = contentWindow.document.querySelector(sourceQuery);
        const target = contentWindow.document.querySelector(targetQuery);
        if (!source || !target) {
            setTimeout(() => {
                callback(false);
            }, 0);
            return;
        }
        const targetOptions = {
            bubbles: true,
            composed: true,
            dataTransfer: new DataTransfer(),
        };
        // Get the middle of the source element since some of Files app logic
        // requires clientX and clientY.
        const sourceRect = source.getBoundingClientRect();
        const sourceOptions = Object.assign({}, targetOptions);
        sourceOptions.clientX = sourceRect.left + (sourceRect.width / 2);
        sourceOptions.clientY = sourceRect.top + (sourceRect.height / 2);
        let dragEventPhase = 0;
        let event = null;
        function sendPhasedDragDropEvents() {
            assert(source);
            assert(target);
            let result = true;
            switch (dragEventPhase) {
                case 0:
                    event = new DragEvent('dragstart', sourceOptions);
                    result = source.dispatchEvent(event);
                    break;
                case 1:
                    targetOptions.relatedTarget = source;
                    event = new DragEvent('dragenter', targetOptions);
                    result = target.dispatchEvent(event);
                    break;
                case 2:
                    targetOptions.relatedTarget = null;
                    event = new DragEvent('dragover', targetOptions);
                    result = target.dispatchEvent(event);
                    break;
                case 3:
                    if (!skipDrop) {
                        targetOptions.relatedTarget = null;
                        event = new DragEvent('drop', targetOptions);
                        result = target.dispatchEvent(event);
                    }
                    break;
                case 4:
                    if (!skipDrop) {
                        event = new DragEvent('dragend', sourceOptions);
                        result = source.dispatchEvent(event);
                    }
                    break;
                default:
                    result = false;
                    break;
            }
            if (!result) {
                callback(false);
            }
            else if (++dragEventPhase <= 4) {
                contentWindow.requestIdleCallback(sendPhasedDragDropEvents);
            }
            else {
                callback(true);
            }
        }
        sendPhasedDragDropEvents();
    };
/**
 * Sends a target dragleave or drop event, and source dragend event, to finish
 * the drag a source over target simulation started by fakeDragAndDrop for the
 * case where the target was hovered.
 *
 * @param contentWindow Window to be tested.
 * @param sourceQuery Query to specify the source element.
 * @param targetQuery Query to specify the target element.
 * @param dragLeave Set true to send a dragleave event to the target instead of
 *     a drop event.
 * @param callback Function called with result true on success, or false on
 *     failure.
 */
test.util.async.fakeDragLeaveOrDrop =
    (contentWindow, sourceQuery, targetQuery, dragLeave, callback) => {
        const source = contentWindow.document.querySelector(sourceQuery);
        const target = contentWindow.document.querySelector(targetQuery);
        if (!source || !target) {
            setTimeout(() => {
                callback(false);
            }, 0);
            return;
        }
        const targetOptions = {
            bubbles: true,
            composed: true,
            dataTransfer: new DataTransfer(),
        };
        // Get the middle of the source element since some of Files app logic
        // requires clientX and clientY.
        const sourceRect = source.getBoundingClientRect();
        const sourceOptions = Object.assign({}, targetOptions);
        sourceOptions.clientX = sourceRect.left + (sourceRect.width / 2);
        sourceOptions.clientY = sourceRect.top + (sourceRect.height / 2);
        // Define the target event type.
        const targetType = dragLeave ? 'dragleave' : 'drop';
        let dragEventPhase = 0;
        let event = null;
        function sendPhasedDragEndEvents() {
            let result = false;
            assert(source);
            assert(target);
            switch (dragEventPhase) {
                case 0:
                    event = new DragEvent(targetType, targetOptions);
                    result = target.dispatchEvent(event);
                    break;
                case 1:
                    event = new DragEvent('dragend', sourceOptions);
                    result = source.dispatchEvent(event);
                    break;
            }
            if (!result) {
                callback(false);
            }
            else if (++dragEventPhase <= 1) {
                contentWindow.requestIdleCallback(sendPhasedDragEndEvents);
            }
            else {
                callback(true);
            }
        }
        sendPhasedDragEndEvents();
    };
/**
 * Sends a drop event to simulate dropping a file originating in the browser to
 * a target.
 *
 * @param contentWindow Window to be tested.
 * @param fileName File name.
 * @param fileContent File content.
 * @param fileMimeType File mime type.
 * @param targetQuery Query to specify the target element.
 * @param callback Function called with result true on success, or false on
 *     failure.
 */
test.util.async.fakeDropBrowserFile =
    (contentWindow, fileName, fileContent, fileMimeType, targetQuery, callback) => {
        const target = contentWindow.document.querySelector(targetQuery);
        if (!target) {
            setTimeout(() => callback(false));
            return;
        }
        const file = new File([fileContent], fileName, { type: fileMimeType });
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        // The value for the callback is true if the event has been handled,
        // i.e. event has been received and preventDefault() called.
        callback(target.dispatchEvent(new DragEvent('drop', {
            bubbles: true,
            composed: true,
            dataTransfer: dataTransfer,
        })));
    };
/**
 * Sends a resize event to the content window.
 *
 * @param contentWindow Window to be tested.
 * @return True if the event was sent to the contentWindow.
 */
test.util.sync.fakeResizeEvent = (contentWindow) => {
    const resize = contentWindow.document.createEvent('Event');
    resize.initEvent('resize', false, false);
    return contentWindow.dispatchEvent(resize);
};
/**
 * Focuses to the element specified by |targetQuery|. This method does not
 * provide any guarantee whether the element is actually focused or not.
 *
 * @param contentWindow Window to be tested.
 * @param targetQuery Query to specify the element.
 * @return True if focus method of the element has been called, false otherwise.
 */
test.util.sync.focus =
    (contentWindow, targetQuery) => {
        const target = contentWindow.document &&
            contentWindow.document.querySelector(targetQuery);
        if (!target) {
            return false;
        }
        target.focus();
        return true;
    };
/**
 * Obtains the list of notification ID.
 * @param _callback Callback function with results returned by the script.
 */
test.util
    .async.getNotificationIDs = (_callback) => {
    // TODO(TS): Add type for chrome notifications.
    // TODO(b/189173190): Enable
    // TODO(b/296960734): Enable
    // chrome.notifications.getAll(callback);
    throw new Error('See b/189173190 and b/296960734 to renable the tests using this function');
};
/**
 * Gets file entries just under the volume.
 *
 * @param volumeType Volume type.
 * @param names File name list.
 * @param callback Callback function with results returned by
 *     the script.
 */
test.util.async.getFilesUnderVolume = async (volumeType, names, callback) => {
    const volumeManager = await window.background.getVolumeManager();
    let volumeInfo = null;
    let displayRoot = null;
    // Wait for the volume to initialize.
    while (!(volumeInfo && displayRoot)) {
        volumeInfo = volumeManager.getCurrentProfileVolumeInfo(volumeType);
        if (volumeInfo) {
            displayRoot = await volumeInfo.resolveDisplayRoot();
        }
        if (!displayRoot) {
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }
    const filesPromise = names.map(name => {
        // TODO(crbug.com/880130): Remove this conditional.
        if (volumeType === VolumeType.DOWNLOADS) {
            name = 'Downloads/' + name;
        }
        return new Promise(displayRoot.getFile.bind(displayRoot, name, {}));
    });
    try {
        const urls = await Promise.all(filesPromise);
        const result = entriesToURLs(urls);
        callback(result);
    }
    catch (error) {
        console.error(error);
        callback([]);
    }
};
/**
 * Unmounts the specified volume.
 *
 * @param volumeType Volume type.
 * @param callback Function receives true on success.
 */
test.util.async.unmount =
    async (volumeType, callback) => {
        const volumeManager = await window.background.getVolumeManager();
        const volumeInfo = volumeManager.getCurrentProfileVolumeInfo(volumeType);
        try {
            if (volumeInfo) {
                await volumeManager.unmount(volumeInfo);
                callback(true);
                return;
            }
        }
        catch (error) {
            console.error(error);
        }
        callback(false);
    };
/**
 * Remote call API handler. When loaded, this replaces the declaration in
 * test_util_base.js.
 */
test.util.executeTestMessage =
    (request, sendResponse) => {
        window.IN_TEST = true;
        // Check the function name.
        if (!request.func || request.func[request.func.length - 1] === '_') {
            request.func = '';
        }
        // Prepare arguments.
        if (!('args' in request)) {
            throw new Error('Invalid request: no args provided.');
        }
        const args = request.args.slice(); // shallow copy
        if (request.appId) {
            if (request.contentWindow) {
                // request.contentWindow is present if this function was called via
                // test.swaTestMessageListener.
                args.unshift(request.contentWindow);
            }
            else {
                console.error('Specified window not found: ' + request.appId);
                return false;
            }
        }
        // Call the test utility function and respond the result.
        if (test.util.async[request.func]) {
            args[test.util.async[request.func].length - 1] = function (...innerArgs) {
                console.debug('Received the result of ' + request.func);
                sendResponse.apply(null, innerArgs);
            };
            console.debug('Waiting for the result of ' + request.func);
            test.util.async[request.func].apply(null, args);
            return true;
        }
        else if (test.util.sync[request.func]) {
            try {
                sendResponse(test.util.sync[request.func].apply(null, args));
            }
            catch (e) {
                console.error(`Failure executing ${request.func}: ${e}`);
                sendResponse(null);
            }
            return false;
        }
        else {
            console.error('Invalid function name: ' + request.func);
            return false;
        }
    };
/**
 * Returns the MetadataStats collected in MetadataModel, it will be serialized
 * as a plain object when sending to test extension.
 */
test.util.sync.getMetadataStats = (contentWindow) => {
    return contentWindow.fileManager.metadataModel.getStats();
};
/**
 * Calls the metadata model to get the selected file entries in the file list
 * and try to get their metadata properties.
 *
 * @param properties Content metadata properties to get.
 * @param callback Callback with metadata results returned.
 */
test.util.async.getContentMetadata =
    (contentWindow, properties, callback) => {
        const entries = contentWindow.fileManager.directoryModel.getSelectedEntries_();
        assert(entries.length > 0);
        const metaPromise = contentWindow.fileManager.metadataModel.get(entries, properties);
        // Wait for the promise to resolve
        metaPromise.then(resultsList => {
            callback(resultsList);
        });
    };
/**
 * Returns true when FileManager has finished loading, by checking the attribute
 * "loaded" on its root element.
 */
test.util.sync.isFileManagerLoaded = (contentWindow) => {
    if (contentWindow && contentWindow.fileManager &&
        contentWindow.fileManager.ui) {
        return contentWindow.fileManager.ui.element.hasAttribute('loaded');
    }
    return false;
};
/**
 * Returns all a11y messages announced by |FileManagerUI.speakA11yMessage|.
 */
test.util.sync.getA11yAnnounces = (contentWindow) => {
    if (contentWindow && contentWindow.fileManager &&
        contentWindow.fileManager.ui) {
        return contentWindow.fileManager.ui.a11yAnnounces;
    }
    return null;
};
/**
 * Reports to the given |callback| the number of volumes available in
 * VolumeManager in the background page.
 *
 * @param callback Callback function to be called with the number of volumes.
 */
test.util.async.getVolumesCount = (callback) => {
    return window.background.getVolumeManager().then((volumeManager) => {
        callback(volumeManager.volumeInfoList.length);
    });
};
/**
 * Updates the preferences.
 */
test.util.sync.setPreferences =
    (preferences) => {
        chrome.fileManagerPrivate.setPreferences(preferences);
        return true;
    };
/**
 * Reports an enum metric.
 * @param name The metric name.
 * @param value The metric enumerator to record.
 * @param validValues An array containing the valid enumerators in order.
 */
test.util.sync.recordEnumMetric =
    (name, value, validValues) => {
        recordEnum(name, value, validValues);
        return true;
    };
/**
 * Tells background page progress center to never notify a completed operation.
 */
test.util.sync.progressCenterNeverNotifyCompleted = () => {
    window.background.progressCenter.neverNotifyCompleted();
    return true;
};
/**
 * Waits for the background page to initialize.
 * @param callback Callback function called when background page has finished
 *     initializing.
 */
test.util.async.waitForBackgroundReady = async (callback) => {
    await window.background.ready();
    callback();
};
/**
 * Isolates a specific banner to be shown. Useful when testing functionality
 * of a banner in isolation.
 *
 * @param contentWindow Window to be tested.
 * @param bannerTagName Tag name of the banner to isolate.
 * @param callback Callback function to be called with a boolean indicating
 *     success or failure.
 */
test.util.async.isolateBannerForTesting = async (contentWindow, bannerTagName, callback) => {
    try {
        await contentWindow.fileManager.ui.banners.isolateBannerForTesting(bannerTagName);
        callback(true);
        return;
    }
    catch (e) {
        console.error(`Error isolating banner with tagName ${bannerTagName} for testing: ${e}`);
    }
    callback(false);
};
/**
 * Disable banners from attaching themselves to the DOM.
 *
 * @param contentWindow Window the banner controller exists.
 * @param callback Callback function to be called with a boolean indicating
 *     success or failure.
 */
test.util.async.disableBannersForTesting =
    async (contentWindow, callback) => {
        try {
            await contentWindow.fileManager.ui.banners.disableBannersForTesting();
            callback(true);
            return;
        }
        catch (e) {
            console.error(`Error disabling banners for testing: ${e}`);
        }
        callback(false);
    };
/**
 * Disables the nudge expiry period for testing.
 *
 * @param contentWindow Window the banner controller exists.
 * @param callback Callback function to be called with a boolean indicating
 *     success or failure.
 */
test.util.async.disableNudgeExpiry =
    async (contentWindow, callback) => {
        contentWindow.fileManager.ui.nudgeContainer.setExpiryPeriodEnabledForTesting =
            false;
        callback(true);
    };
//# sourceMappingURL=runtime_loaded_test_util.rollup.js.map

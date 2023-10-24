// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '//resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { afterNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LensErrorType, LensSubmitType } from './lens_form.js';
import { getTemplate } from './lens_upload_dialog.html.js';
import { WindowProxy } from './window_proxy.js';
var DialogState;
(function (DialogState) {
    // Dialog is currently hidden from the user.
    DialogState[DialogState["HIDDEN"] = 0] = "HIDDEN";
    // Dialog is open and awaiting user input.
    DialogState[DialogState["NORMAL"] = 1] = "NORMAL";
    // User is dragging a file over the UI.
    DialogState[DialogState["DRAGGING"] = 2] = "DRAGGING";
    // User dropped a file and a request to Lens is started.
    DialogState[DialogState["LOADING"] = 3] = "LOADING";
    // User selected a file that resulted in an error.
    DialogState[DialogState["ERROR"] = 4] = "ERROR";
    // User is offline.
    DialogState[DialogState["OFFLINE"] = 5] = "OFFLINE";
})(DialogState || (DialogState = {}));
var LensErrorMessage;
(function (LensErrorMessage) {
    // No error.
    LensErrorMessage[LensErrorMessage["NONE"] = 0] = "NONE";
    // User provided an invalid file format.
    LensErrorMessage[LensErrorMessage["FILE_TYPE"] = 1] = "FILE_TYPE";
    // User provided a file that is too large to handle.
    LensErrorMessage[LensErrorMessage["FILE_SIZE"] = 2] = "FILE_SIZE";
    // User provided multiple files.
    LensErrorMessage[LensErrorMessage["MULTIPLE_FILES"] = 3] = "MULTIPLE_FILES";
    // User provided URL with improper scheme.
    LensErrorMessage[LensErrorMessage["SCHEME"] = 4] = "SCHEME";
    // User provided invalid URL.
    LensErrorMessage[LensErrorMessage["CONFORMANCE"] = 5] = "CONFORMANCE";
    // User provided multiple URLs.
    LensErrorMessage[LensErrorMessage["MULTIPLE_URLS"] = 6] = "MULTIPLE_URLS";
})(LensErrorMessage || (LensErrorMessage = {}));
const EventKeys = {
    ENTER: 'Enter',
    ESCAPE: 'Escape',
    SPACE: ' ',
    TAB: 'Tab',
};
/**
 * List of possible upload dialog actions. This enum must match with the
 * numbering for NewTabPageLensUploadDialogActions in histogram/enums.xml. These
 * values are persisted to logs. Entries should not be renumbered, removed or
 * reused.
 */
export var LensUploadDialogAction;
(function (LensUploadDialogAction) {
    LensUploadDialogAction[LensUploadDialogAction["URL_SUBMITTED"] = 0] = "URL_SUBMITTED";
    LensUploadDialogAction[LensUploadDialogAction["FILE_SUBMITTED"] = 1] = "FILE_SUBMITTED";
    LensUploadDialogAction[LensUploadDialogAction["IMAGE_DROPPED"] = 2] = "IMAGE_DROPPED";
    LensUploadDialogAction[LensUploadDialogAction["DIALOG_OPENED"] = 3] = "DIALOG_OPENED";
    LensUploadDialogAction[LensUploadDialogAction["DIALOG_CLOSED"] = 4] = "DIALOG_CLOSED";
    LensUploadDialogAction[LensUploadDialogAction["ERROR_SHOWN"] = 5] = "ERROR_SHOWN";
})(LensUploadDialogAction || (LensUploadDialogAction = {}));
/**
 * List of possible upload dialog errors. This enum must match with the
 * numbering for NewTabPageLensUploadDialogErrors in histogram/enums.xml. These
 * values are persisted to logs. Entries should not be renumbered, removed or
 * reused.
 */
export var LensUploadDialogError;
(function (LensUploadDialogError) {
    LensUploadDialogError[LensUploadDialogError["FILE_SIZE"] = 0] = "FILE_SIZE";
    LensUploadDialogError[LensUploadDialogError["FILE_TYPE"] = 1] = "FILE_TYPE";
    LensUploadDialogError[LensUploadDialogError["MULTIPLE_FILES"] = 2] = "MULTIPLE_FILES";
    LensUploadDialogError[LensUploadDialogError["MULTIPLE_URLS"] = 3] = "MULTIPLE_URLS";
    LensUploadDialogError[LensUploadDialogError["LENGTH_TOO_GREAT"] = 4] = "LENGTH_TOO_GREAT";
    LensUploadDialogError[LensUploadDialogError["INVALID_SCHEME"] = 5] = "INVALID_SCHEME";
    LensUploadDialogError[LensUploadDialogError["INVALID_URL"] = 6] = "INVALID_URL";
    LensUploadDialogError[LensUploadDialogError["NETWORK_ERROR"] = 7] = "NETWORK_ERROR";
})(LensUploadDialogError || (LensUploadDialogError = {}));
export function recordLensUploadDialogAction(action) {
    chrome.metricsPrivate.recordEnumerationValue('NewTabPage.Lens.UploadDialog.DialogAction', action, Object.keys(LensUploadDialogAction).length);
}
export function recordLensUploadDialogError(action) {
    chrome.metricsPrivate.recordEnumerationValue('NewTabPage.Lens.UploadDialog.DialogError', action, Object.keys(LensUploadDialogError).length);
}
const LensUploadDialogElementBase = I18nMixin(PolymerElement);
// Modal that lets the user upload images for search on Lens.
export class LensUploadDialogElement extends LensUploadDialogElementBase {
    constructor() {
        super(...arguments);
        this.dialogState_ = DialogState.HIDDEN;
        this.lensErrorMessage_ = LensErrorMessage.NONE;
        this.outsideHandlerAttached_ = false;
        this.uploadUrl_ = '';
        this.dragCount = 0;
        this.outsideKeyHandler_ = (event) => {
            if (event.key === EventKeys.ESCAPE) {
                this.closeDialog();
            }
        };
        this.onCloseButtonKeydown_ = (event) => {
            if (event.key === EventKeys.TAB &&
                (this.computeIsDragging_(this.dialogState_) ||
                    this.computeIsLoading_(this.dialogState_))) {
                event.preventDefault();
                // In the dragging and loading states, the close button is the only
                // tabbable element in the dialog, so focus should stay on it.
            }
            else if (event.key === EventKeys.TAB && event.shiftKey) {
                event.preventDefault();
                if (this.computeIsNormalOrError_(this.dialogState_)) {
                    this.shadowRoot.getElementById('inputSubmit')?.focus();
                }
                else if (this.computeIsOffline_(this.dialogState_)) {
                    this.shadowRoot.getElementById('offlineRetryButton')?.focus();
                }
            }
        };
        this.onOfflineRetryButtonKeydown_ = (event) => {
            if (event.key === EventKeys.TAB && !event.shiftKey) {
                event.preventDefault();
                this.$.closeButton.focus();
            }
        };
    }
    static get is() {
        return 'ntp-lens-upload-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            dialogState_: {
                type: DialogState,
            },
            lensErrorMessage_: {
                type: LensErrorMessage,
            },
            isHidden_: {
                type: Boolean,
                computed: `computeIsHidden_(dialogState_)`,
            },
            isNormalOrError_: {
                type: Boolean,
                computed: `computeIsNormalOrError_(dialogState_)`,
                reflectToAttribute: true,
            },
            isDragging_: {
                type: Boolean,
                computed: `computeIsDragging_(dialogState_)`,
                reflectToAttribute: true,
            },
            isLoading_: {
                type: Boolean,
                computed: `computeIsLoading_(dialogState_)`,
                reflectToAttribute: true,
            },
            isError_: {
                type: Boolean,
                computed: `computeIsError_(dialogState_)`,
                reflectToAttribute: true,
            },
            isOffline_: {
                type: Boolean,
                computed: `computeIsOffline_(dialogState_)`,
                reflectToAttribute: true,
            },
            uploadUrl_: {
                type: String,
            },
        };
    }
    computeIsHidden_(dialogState) {
        return dialogState === DialogState.HIDDEN;
    }
    computeIsNormalOrError_(dialogState) {
        return dialogState === DialogState.NORMAL ||
            dialogState === DialogState.ERROR;
    }
    computeIsDragging_(dialogState) {
        return dialogState === DialogState.DRAGGING;
    }
    computeIsLoading_(dialogState) {
        return dialogState === DialogState.LOADING;
    }
    computeIsError_(dialogState) {
        return dialogState === DialogState.ERROR;
    }
    computeIsOffline_(dialogState) {
        return dialogState === DialogState.OFFLINE;
    }
    connectedCallback() {
        super.connectedCallback();
        this.openDialog();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.detachOutsideHandler_();
    }
    openDialog() {
        this.setOnlineState_();
        // Click handler needs to be attached outside of the initial event handler,
        // otherwise the click of the icon which initially opened the dialog would
        // also be registered in the outside click handler, causing the dialog to
        // immediately close after opening.
        afterNextRender(this, () => {
            this.attachOutsideHandler_();
            if (this.computeIsOffline_(this.dialogState_)) {
                this.shadowRoot.getElementById('offlineRetryButton')?.focus();
            }
            else {
                this.shadowRoot.getElementById('uploadText')?.focus();
            }
        });
        recordLensUploadDialogAction(LensUploadDialogAction.DIALOG_OPENED);
    }
    closeDialog() {
        this.dialogState_ = DialogState.HIDDEN;
        this.detachOutsideHandler_();
        this.dispatchEvent(new Event('close-lens-search'));
        recordLensUploadDialogAction(LensUploadDialogAction.DIALOG_CLOSED);
    }
    getErrorString_(lensErrorMessage) {
        switch (lensErrorMessage) {
            case LensErrorMessage.FILE_TYPE:
                return this.i18n('lensSearchUploadDialogErrorFileType');
            case LensErrorMessage.FILE_SIZE:
                return this.i18n('lensSearchUploadDialogErrorFileSize');
            case LensErrorMessage.MULTIPLE_FILES:
                return this.i18n('lensSearchUploadDialogErrorMultipleFiles');
            case LensErrorMessage.SCHEME:
                return this.i18n('lensSearchUploadDialogValidationErrorScheme');
            case LensErrorMessage.CONFORMANCE:
                return this.i18n('lensSearchUploadDialogValidationErrorConformance');
            case LensErrorMessage.MULTIPLE_URLS:
                return this.i18n('lensSearchUploadDialogErrorMultipleUrls');
            default:
                return '';
        }
    }
    /**
     * Checks to see if the user is online or offline and sets the dialog state
     * accordingly.
     */
    setOnlineState_() {
        this.dialogState_ = WindowProxy.getInstance().onLine ? DialogState.NORMAL :
            DialogState.OFFLINE;
    }
    attachOutsideHandler_() {
        if (!this.outsideHandlerAttached_) {
            document.addEventListener('keydown', this.outsideKeyHandler_);
            this.outsideHandlerAttached_ = true;
        }
    }
    detachOutsideHandler_() {
        if (this.outsideHandlerAttached_) {
            document.removeEventListener('keydown', this.outsideKeyHandler_);
            this.outsideHandlerAttached_ = false;
        }
    }
    onCloseButtonClick_() {
        this.closeDialog();
    }
    onOfflineRetryButtonClick_() {
        this.setOnlineState_();
    }
    onUploadFileKeyDown_(event) {
        if (event.key === EventKeys.ENTER || event.key === EventKeys.SPACE) {
            this.$.lensForm.openSystemFilePicker();
        }
    }
    onUploadFileClick_() {
        this.$.lensForm.openSystemFilePicker();
    }
    handleFormLoading_(event) {
        this.dialogState_ = DialogState.LOADING;
        switch (event.detail) {
            case LensSubmitType.FILE:
                recordLensUploadDialogAction(LensUploadDialogAction.FILE_SUBMITTED);
                break;
            case LensSubmitType.URL:
                recordLensUploadDialogAction(LensUploadDialogAction.URL_SUBMITTED);
                break;
        }
    }
    handleFormError_(event) {
        switch (event.detail) {
            case LensErrorType.MULTIPLE_FILES:
                this.dialogState_ = DialogState.ERROR;
                this.lensErrorMessage_ = LensErrorMessage.MULTIPLE_FILES;
                recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);
                recordLensUploadDialogError(LensUploadDialogError.MULTIPLE_FILES);
                break;
            case LensErrorType.NO_FILE:
                this.dialogState_ = DialogState.NORMAL;
                this.lensErrorMessage_ = LensErrorMessage.NONE;
                break;
            case LensErrorType.FILE_TYPE:
                this.dialogState_ = DialogState.ERROR;
                this.lensErrorMessage_ = LensErrorMessage.FILE_TYPE;
                recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);
                recordLensUploadDialogError(LensUploadDialogError.FILE_TYPE);
                break;
            case LensErrorType.FILE_SIZE:
                this.dialogState_ = DialogState.ERROR;
                this.lensErrorMessage_ = LensErrorMessage.FILE_SIZE;
                recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);
                recordLensUploadDialogError(LensUploadDialogError.FILE_SIZE);
                break;
            case LensErrorType.INVALID_SCHEME:
                this.dialogState_ = DialogState.ERROR;
                this.lensErrorMessage_ = LensErrorMessage.SCHEME;
                recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);
                recordLensUploadDialogError(LensUploadDialogError.INVALID_SCHEME);
                break;
            case LensErrorType.INVALID_URL:
                this.dialogState_ = DialogState.ERROR;
                this.lensErrorMessage_ = LensErrorMessage.CONFORMANCE;
                recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);
                recordLensUploadDialogError(LensUploadDialogError.INVALID_URL);
                break;
            case LensErrorType.LENGTH_TOO_GREAT:
                this.dialogState_ = DialogState.ERROR;
                this.lensErrorMessage_ = LensErrorMessage.CONFORMANCE;
                recordLensUploadDialogAction(LensUploadDialogAction.ERROR_SHOWN);
                recordLensUploadDialogError(LensUploadDialogError.LENGTH_TOO_GREAT);
                break;
            default:
                this.dialogState_ = DialogState.NORMAL;
                this.lensErrorMessage_ = LensErrorMessage.NONE;
        }
    }
    onUrlKeyDown_(event) {
        if (event.key === EventKeys.ENTER) {
            event.preventDefault();
            this.onSubmitUrl_();
        }
    }
    onInputSubmitKeyDown_(event) {
        if (event.key === EventKeys.ENTER || event.key === EventKeys.SPACE) {
            this.onSubmitUrl_();
        }
        else if (event.key === EventKeys.TAB && !event.shiftKey) {
            event.preventDefault();
            this.$.closeButton.focus();
        }
    }
    onSubmitUrl_() {
        const url = this.uploadUrl_.trim();
        if (url.length > 0) {
            this.$.lensForm.submitUrl(url);
        }
    }
    onDragEnter_(e) {
        e.preventDefault();
        this.dragCount += 1;
        if (this.dragCount === 1) {
            this.dialogState_ = DialogState.DRAGGING;
        }
    }
    onDragOver_(e) {
        e.preventDefault();
    }
    onDragLeave_(e) {
        e.preventDefault();
        this.dragCount -= 1;
        if (this.dragCount === 0) {
            this.dialogState_ = DialogState.NORMAL;
        }
    }
    onDrop_(e) {
        e.preventDefault();
        this.dragCount = 0;
        if (e.dataTransfer) {
            this.$.lensForm.submitFileList(e.dataTransfer.files);
            recordLensUploadDialogAction(LensUploadDialogAction.IMAGE_DROPPED);
        }
    }
    onFocusOut_(event) {
        // If the focus event is occurring during a drag into the upload dialog,
        // do nothing. See b/284201957#6 for scenario in which this is necessary.
        if (this.dragCount === 1) {
            return;
        }
        // Focus ensures that the file picker pop-up does not close dialog.
        const outsideDialog = document.hasFocus() &&
            (!event.relatedTarget ||
                !this.$.dialog.contains(event.relatedTarget));
        if (outsideDialog) {
            this.closeDialog();
        }
    }
}
customElements.define(LensUploadDialogElement.is, LensUploadDialogElement);

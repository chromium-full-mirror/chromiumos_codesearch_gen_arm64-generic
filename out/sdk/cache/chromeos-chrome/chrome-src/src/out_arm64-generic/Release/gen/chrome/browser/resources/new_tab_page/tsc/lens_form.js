// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from './i18n_setup.js';
import { processFile, SUPPORTED_FILE_TYPES } from './image_processor.js';
import { getTemplate } from './lens_form.html.js';
/** Lens service endpoint for the Upload by File action. */
const SCOTTY_UPLOAD_FILE_ACTION = 'https://lens.google.com/upload';
const DIRECT_UPLOAD_FILE_ACTION = 'https://lens.google.com/v3/upload';
/** Entrypoint for the upload by file action. */
const UPLOAD_FILE_ENTRYPOINT = 'cntpubb';
/** Lens service endpoint for the Upload by URL action. */
const UPLOAD_BY_URL_ACTION = 'https://lens.google.com/uploadbyurl';
/** Entrypoint for the upload by url action. */
const UPLOAD_URL_ENTRYPOINT = 'cntpubu';
/** Rendering environment for the NTP searchbox entrypoint. */
const RENDERING_ENVIRONMENT = 'df';
/** The value of Surface.CHROMIUM expected by Lens Web. */
const CHROMIUM_SURFACE = '4';
/** Max length for encoded input URL. */
const MAX_URL_LENGTH = 2000;
/** Maximum file size support by Lens in bytes. */
const MAX_FILE_SIZE_BYTES = 20 * 1024 * 1024; // 20MB
export var LensErrorType;
(function (LensErrorType) {
    // The user attempted to upload multiple files at the same time.
    LensErrorType[LensErrorType["MULTIPLE_FILES"] = 0] = "MULTIPLE_FILES";
    // The user didn't provide a file.
    LensErrorType[LensErrorType["NO_FILE"] = 1] = "NO_FILE";
    // The user provided a file type that is not supported.
    LensErrorType[LensErrorType["FILE_TYPE"] = 2] = "FILE_TYPE";
    // The user provided a file that is too large.
    LensErrorType[LensErrorType["FILE_SIZE"] = 3] = "FILE_SIZE";
    // The user provided a url with an invalid or missing scheme.
    LensErrorType[LensErrorType["INVALID_SCHEME"] = 4] = "INVALID_SCHEME";
    // The user provided a string that does not parse to a valid url.
    LensErrorType[LensErrorType["INVALID_URL"] = 5] = "INVALID_URL";
    // The user provided a string that was too long.
    LensErrorType[LensErrorType["LENGTH_TOO_GREAT"] = 6] = "LENGTH_TOO_GREAT";
})(LensErrorType || (LensErrorType = {}));
export var LensSubmitType;
(function (LensSubmitType) {
    LensSubmitType[LensSubmitType["FILE"] = 0] = "FILE";
    LensSubmitType[LensSubmitType["URL"] = 1] = "URL";
})(LensSubmitType || (LensSubmitType = {}));
export class LensFormElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.uploadFileAction_ = SCOTTY_UPLOAD_FILE_ACTION;
        this.uploadUrl_ = '';
        this.startTime_ = null;
    }
    static get is() {
        return 'ntp-lens-form';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            supportedFileTypes_: {
                type: String,
                readOnly: true,
                value: SUPPORTED_FILE_TYPES.join(','),
            },
            renderingEnvironment_: {
                type: String,
                readOnly: true,
                value: RENDERING_ENVIRONMENT,
            },
            chromiumSurface_: {
                type: String,
                readOnly: true,
                value: CHROMIUM_SURFACE,
            },
            useDirectUpload_: {
                type: Boolean,
                readOnly: true,
                value: loadTimeData.getBoolean('realboxLensDirectUpload'),
            },
            uploadFileAction_: String,
            uploadUrlAction_: {
                type: String,
                readOnly: true,
                value: UPLOAD_BY_URL_ACTION,
            },
            uploadUrl_: String,
            uploadUrlEntrypoint_: {
                type: String,
                readOnly: true,
                value: UPLOAD_URL_ENTRYPOINT,
            },
            language_: {
                type: String,
                readOnly: true,
                value: window.navigator.language,
            },
            clientData_: {
                type: String,
                readOnly: true,
                value: loadTimeData.getString('realboxLensVariations'),
            },
        };
    }
    openSystemFilePicker() {
        this.$.fileInput.click();
    }
    handleFileInputChange_() {
        const fileList = this.$.fileInput.files;
        if (fileList) {
            this.submitFileList(fileList);
        }
    }
    submitFileList(files) {
        if (files.length > 1) {
            this.dispatchError_(LensErrorType.MULTIPLE_FILES);
            return;
        }
        const file = files[0];
        if (!file) {
            this.dispatchError_(LensErrorType.NO_FILE);
            return;
        }
        return this.submitFile_(file);
    }
    async submitFile_(file) {
        if (!SUPPORTED_FILE_TYPES.includes(file.type)) {
            this.dispatchError_(LensErrorType.FILE_TYPE);
            return;
        }
        if (file.size > MAX_FILE_SIZE_BYTES) {
            this.dispatchError_(LensErrorType.FILE_SIZE);
            return;
        }
        if (this.useDirectUpload_) {
            this.uploadFileAction_ = DIRECT_UPLOAD_FILE_ACTION;
        }
        this.startTime_ = Date.now().toString();
        let processedFile = { processedFile: file };
        if (this.useDirectUpload_) {
            processedFile = await processFile(file);
        }
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(processedFile.processedFile);
        this.$.fileInput.files = dataTransfer.files;
        const action = new URL(this.uploadFileAction_);
        action.searchParams.set('ep', UPLOAD_FILE_ENTRYPOINT);
        action.searchParams.set('hl', this.language_);
        action.searchParams.set('st', this.startTime_.toString());
        action.searchParams.set('cd', this.clientData_);
        action.searchParams.set('re', RENDERING_ENVIRONMENT);
        action.searchParams.set('s', CHROMIUM_SURFACE);
        action.searchParams.set('vph', processedFile.imageHeight ? processedFile.imageHeight.toString() : '');
        action.searchParams.set('vpw', processedFile.imageWidth ? processedFile.imageWidth.toString() : '');
        this.uploadFileAction_ = action.toString();
        this.dispatchLoading_(LensSubmitType.FILE);
        this.$.fileForm.submit();
    }
    submitUrl(urlString) {
        if (!urlString.startsWith('http://') && !urlString.startsWith('https://')) {
            this.dispatchError_(LensErrorType.INVALID_SCHEME);
            return;
        }
        let encodedUri;
        try {
            encodedUri = encodeURI(urlString);
            new URL(urlString); // Throws an error if fails to parse.
        }
        catch (e) {
            this.dispatchError_(LensErrorType.INVALID_URL);
            return;
        }
        if (encodedUri.length > MAX_URL_LENGTH) {
            this.dispatchError_(LensErrorType.LENGTH_TOO_GREAT);
            return;
        }
        this.uploadUrl_ = encodedUri;
        this.startTime_ = Date.now().toString();
        this.dispatchLoading_(LensSubmitType.URL);
        this.$.urlForm.submit();
    }
    dispatchLoading_(submitType) {
        this.dispatchEvent(new CustomEvent('loading', {
            bubbles: false,
            composed: false,
            detail: submitType,
        }));
    }
    dispatchError_(errorType) {
        this.dispatchEvent(new CustomEvent('error', {
            bubbles: false,
            composed: false,
            detail: errorType,
        }));
    }
}
customElements.define(LensFormElement.is, LensFormElement);

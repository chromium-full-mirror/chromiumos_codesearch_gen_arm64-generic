// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/ash/common/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/ash/common/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import './help_resources_icons.html.js';
import './os_feedback_shared.css.js';
import { assert } from 'chrome://resources/ash/common/assert.js';
import { CrCheckboxElement } from 'chrome://resources/ash/common/cr_elements/cr_checkbox/cr_checkbox.js';
import { CrToastElement } from 'chrome://resources/ash/common/cr_elements/cr_toast/cr_toast.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { strictQuery } from 'chrome://resources/ash/common/typescript_utils/strict_query.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './file_attachment.html.js';
import { getFeedbackServiceProvider } from './mojo_interface_provider.js';
import { FeedbackAppPreSubmitAction } from './os_feedback_ui.mojom-webui.js';
/**
 * @fileoverview
 * 'file-attachment' allows users to select a file as an attachment to the
 *  report.
 */
const FileAttachmentElementBase = I18nMixin(PolymerElement);
export class FileAttachmentElement extends FileAttachmentElementBase {
    static get is() {
        return 'file-attachment';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            hasSelectedAFile: {
                type: Boolean,
                computed: 'computeHasSelectedFile(selectedFile)',
            },
        };
    }
    constructor() {
        super();
        /**  The file selected if any to be attached to the report. */
        this.selectedFile = null;
        this.feedbackServiceProvider = getFeedbackServiceProvider();
    }
    ready() {
        super.ready();
        // Set the aria description works the best for screen reader.
        // It reads the description when the checkbox is focused, and when it is
        // checked and unchecked.
        strictQuery('#selectFileCheckbox', this.shadowRoot, CrCheckboxElement)
            .ariaDescription = this.i18n('attachFileCheckboxArialLabel');
    }
    computeHasSelectedFile() {
        return this.selectedFile != null;
    }
    /**  Gather the file name and data chosen. */
    async getAttachedFile() {
        const inputElement = strictQuery('#selectFileCheckbox', this.shadowRoot, CrCheckboxElement);
        if (!inputElement.checked) {
            return null;
        }
        if (!this.selectedFile) {
            return null;
        }
        const fileDataBuffer = await this.selectedFile.arrayBuffer();
        const fileDataView = new Uint8Array(fileDataBuffer);
        // fileData is of type BigBuffer which can take byte array format or
        // shared memory form. For now, byte array is being used for its simplicity.
        // For better performance, we may switch to shared memory.
        const fileData = { bytes: Array.from(fileDataView) };
        const attachedFile = {
            fileName: { path: { path: this.selectedFile.name } },
            fileData: fileData,
        };
        return attachedFile;
    }
    /**  Get the image url when uploaded file is image type. */
    async getImageUrl(file) {
        const fileDataBuffer = await file.arrayBuffer();
        const fileDataView = new Uint8Array(fileDataBuffer);
        const blob = new Blob([Uint8Array.from(fileDataView)], { type: file.type });
        const imageUrl = URL.createObjectURL(blob);
        return imageUrl;
    }
    handleSelectedImageClick() {
        const dialog = strictQuery('#selectedImageDialog', this.shadowRoot, HTMLDialogElement);
        dialog.showModal();
        this.feedbackServiceProvider.recordPreSubmitAction(FeedbackAppPreSubmitAction.kViewedImage);
    }
    handleSelectedImageDialogCloseClick() {
        const dialog = strictQuery('#selectedImageDialog', this.shadowRoot, HTMLDialogElement);
        dialog.close();
    }
    handleOpenFileInputClick(e) {
        e.preventDefault();
        const fileInput = strictQuery('#selectFileDialog', this.shadowRoot, HTMLInputElement);
        // Clear the value so that when the user selects the same file again, the
        // change event will be triggered. Otherwise, if the file size exceeds the
        // limit, the error alert will not be displayed when the user selects the
        // same file again.
        fileInput.value = '';
        fileInput.click();
    }
    handleFileSelectChange(e) {
        const fileInput = e.target;
        // The feedback app takes maximum one attachment. And the file dialog is set
        // to accept one file only.
        if (fileInput.files.length > 0) {
            this.handleSelectedFileHelper(fileInput.files[0]);
        }
    }
    handleSelectedFileHelper(file) {
        assert(file);
        // Maximum file size is 10MB.
        const MAX_ATTACH_FILE_SIZE_BYTES = 10 * 1024 * 1024;
        if (file.size > MAX_ATTACH_FILE_SIZE_BYTES) {
            strictQuery('#fileTooBigErrorMessage', this.shadowRoot, CrToastElement)
                .show();
            return;
        }
        this.selectedFile = file;
        this.selectedFileName = file.name;
        const checkboxElement = strictQuery('#selectFileCheckbox', this.shadowRoot, CrCheckboxElement);
        checkboxElement.checked = true;
        const buttonElement = strictQuery('#selectedImageButton', this.shadowRoot, HTMLButtonElement);
        // Add a preview image when selected file is image type.
        if (file.type.startsWith('image/')) {
            this.getImageUrl(file).then((imageUrl) => {
                this.selectedImageUrl = imageUrl;
                buttonElement.ariaLabel = this.i18n('previewImageAriaLabel', file.name);
            });
        }
        else {
            this.selectedImageUrl = '';
            buttonElement.ariaLabel = '';
        }
    }
    setSelectedFileForTesting(file) {
        this.handleSelectedFileHelper(file);
    }
    setSelectedImageUrlForTesting(imgUrl) {
        this.selectedImageUrl = imgUrl;
    }
}
customElements.define(FileAttachmentElement.is, FileAttachmentElement);

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import './help_resources_icons.js';
import './os_feedback_shared_css.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';

import {I18nBehavior, I18nBehaviorInterface} from 'chrome://resources/ash/common/i18n_behavior.js';
import {assert} from 'chrome://resources/ash/common/assert.js';
import {html, mixinBehaviors, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {AttachedFile, FeedbackAppPreSubmitAction, FeedbackServiceProviderInterface} from './feedback_types.js';
import {getFeedbackServiceProvider} from './mojo_interface_provider.js';

/**
 * @fileoverview
 * 'file-attachment' allows users to select a file as an attachment to the
 *  report.
 */

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 */
const FileAttachmentElementBase =
    mixinBehaviors([I18nBehavior], PolymerElement);

/**
 * @polymer
 */
export class FileAttachmentElement extends FileAttachmentElementBase {
  static get is() {
    return 'file-attachment';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style include="os-feedback-shared">
  :host-context(body.jelly-enabled) .file-input {
    color: var(--cros-sys-on_surface);
    font: var(--cros-body-2-font);
  }

  :host-context(body.jelly-enabled) #addFileIcon {
    --cr-icon-button-fill-color: var(--cros-sys-on_surface);
  }

  :host-context(body.jelly-enabled) #addFileLabel,
  :host-context(body.jelly-enabled) #selectedFileName,
  :host-context(body.jelly-enabled) #replaceFileButton {
    font: var(--cros-button-2-font);
  }

  /* Special attribute to hide elements. */
  [hidden] {
    display: none !important;
  }

  :host {
    --iron-icon-height: 20px;
    --iron-icon-width: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .file-input {
    background: none;
    border: none;
    color: var(--cros-color-prominent);
    cursor: pointer;
    font-family: var(--feedback-roboto-font-family);
    font-size: 13px;
    line-height: 20px;
    padding: 0;
  }

  .error-outline {
    --iron-icon-fill-color: var(--cros-icon-color-alert);
    margin-inline-end: 12px;
  }

  #addFileContainer,
  #replaceFileContainer {
    width: 248px;
  }

  #replaceFileContainer {
    display: flex;
    flex-direction: row;
  }

  #replaceFileContainer > button {
    cursor: pointer;
  }

  #replaceFileInfo {
    flex: 1;
    margin-inline-end: 12px;
    overflow: hidden;
    padding: 4px 2px;
    white-space: nowrap;
  }

  #selectFileDialog {
    height: 0;
    opacity: 0;
    width: 0;
  }

  #selectedFileImage:hover {
    opacity: 0.7;
  }

  #addFileLabel {
    font-weight: var(--feedback-medium-font-weight);
  }

  #addFileIcon {
    --cr-icon-button-fill-color: var(--cros-color-prominent);
    --cr-icon-button-size: 32px;
    margin-inline-end: 4px;
    margin-inline-start: 6px;
  }

  #addFileIcon:focus-visible {
    border-radius: 36px;
    box-shadow: none;
    outline: 2px solid var(--cros-focus-ring-color);
  }

  #addFileIcon:active {
    outline: none;
  }

  #selectFileCheckbox {
    margin-inline-end: 10px;
    margin-inline-start: 12px;
  }

  #selectedImageButton {
    background: none;
    border: none;
    border-radius: 4px;
    height: 48px;
    padding: 0;
    width: 68px;
  }

  #selectedFileImage {
    border-radius: 0 4px 4px 0;
    display: block;
    height: 46px;
    transition: all 250ms ease;
    width: 68px;
  }

  #selectedFileName,
  #replaceFileButton {
    font-weight: var(--feedback-regular-font-weight);
  }

  #selectedFileName {
    color: var(--cros-text-color-primary);
    font-size: 13px;
    line-height: 20px;
  }

  #selectedFileContainer {
    display: flex;
    flex-direction: row-reverse;
    width: 206px;
  }
</style>
<div id="addFileContainer" hidden="[[hasSelectedAFile_]]">
  <!-- On tablets, touching the addFileLabel button will not open the file input
        dialog, although it will trigger the click event. This seems to be an
        CrOS issue. As a workaround, wiring the same event handler to the
        touchend event fixes the issue.
      -->
  <button id="addFileLabel" class="file-input" aria-hidden="true"
      on-touchend="handleOpenFileInputClick_"
      on-click="handleOpenFileInputClick_" tabindex="-1">
    <cr-icon-button id="addFileIcon" iron-icon="attachment:add-file"
        aria-label="[[i18n('addFileLabel')]]" title="[[i18n('addFileLabel')]]">
    </cr-icon-button>
    [[i18n('addFileLabel')]]
  </button>
</div>
<input id="selectFileDialog" type="file" on-change="handleFileSelectChange_"
    tabindex="-1">
<div id="replaceFileContainer" hidden="[[!hasSelectedAFile_]]">
  <cr-checkbox id="selectFileCheckbox" class="no-label"
      title="[[i18n('attachFileCheckboxArialLabel')]]">
  </cr-checkbox>
  <div id="selectedFileContainer">
    <button id="selectedImageButton" on-click="handleSelectedImageClick_"
        hidden="[[!selectedImageUrl_]]" class="focusable">
      <img id="selectedFileImage" src="[[selectedImageUrl_]]">
    </button>
    <div id="replaceFileInfo">
      <div id="selectedFileName" class="overflow-text">
        [[selectedFileName_]]
      </div>
      <button id="replaceFileButton" class="file-input focusable"
          aria-label="[[i18n('replaceFileLabel')]]"
          on-touchend="handleOpenFileInputClick_"
          on-click="handleOpenFileInputClick_" tabindex="0">
        [[i18n('replaceFileLabel')]]
      </button>
    </div>
  </div>
</div>
<cr-toast id="fileTooBigErrorMessage" duration="5000">
  <iron-icon id="toastInfoIcon" class="error-outline" icon="cr:error-outline">
  </iron-icon>
  <span id="errorMessage">[[i18n('fileTooBigErrorMessage')]]</span>
</cr-toast>
<dialog id="selectedImageDialog" aria-label="[[i18n('previewImageDialogLabel')]]">
  <div id="modalDialogTitle" class="dialog-toolbar">
    <cr-button id="closeDialogButton"
        class="close-dialog-button"
        title="[[i18n('dialogBackButtonAriaLabel')]]"
        aria-label="[[i18n('dialogBackButtonAriaLabel')]]"
        on-click="handleSelectedImageDialogCloseClick_">
      <iron-icon id="backArrow" class="dialog-back-arrow"
          icon="cr:arrow-back"></iron-icon>
    </cr-button>
    <div id="modalDialogTitleText">[[selectedFileName_]]</div>
  </div>
  <div id="mainPanel" class="dialog-main-panel">
    <div id="innerContentPanel" class="dialog-content-panel">
      <img src="[[selectedImageUrl_]]" class="image-preview">
    </div>
  </div>
</dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      hasSelectedAFile_: {
        type: Boolean,
        computed: 'computeHasSelectedAFile_(selectedFile_)',
      },
    };
  }

  constructor() {
    super();

    /**
     * The file selected if any to be attached to the report.
     * @type {?File}
     * @private
     */
    this.selectedFile_ = null;

    /**
     * The name of the file selected
     * @type {string}
     * @protected
     */
    this.selectedFileName_;

    /**
     * Url of the selected image.
     * @type {string}
     */
    this.selectedImageUrl_;

    /**
     * True when there is a file selected.
     * @protected {boolean}
     */
    this.hasSelectedAFile_;

    /** @private {!FeedbackServiceProviderInterface} */
    this.feedbackServiceProvider_ = getFeedbackServiceProvider();
  }

  ready() {
    super.ready();
    // Set the aria description works the best for screen reader.
    // It reads the description when the checkbox is focused, and when it is
    // checked and unchecked.
    this.$.selectFileCheckbox.ariaDescription =
        this.i18n('attachFileCheckboxArialLabel');
  }

  /**
   * @returns {boolean}
   * @private
   */
  computeHasSelectedAFile_() {
    return !!this.selectedFile_;
  }

  /**
   * @param {string} selector
   * @return {?Element}
   * @private
   */
  getElement_(selector) {
    return this.shadowRoot.querySelector(selector);
  }

  /**
   * Gather the file name and data chosen.
   * @return {!Promise<?AttachedFile>}
   */
  async getAttachedFile() {
    if (!this.getElement_('#selectFileCheckbox').checked) {
      return null;
    }
    if (!this.selectedFile_) {
      return null;
    }

    const fileDataBuffer = await this.selectedFile_.arrayBuffer();
    const fileDataView = new Uint8Array(fileDataBuffer);
    // fileData is of type BigBuffer which can take byte array format or
    // shared memory form. For now, byte array is being used for its simplicity.
    // For better performance, we may switch to shared memory.
    const fileData = {bytes: Array.from(fileDataView)};

    /** @type {!AttachedFile} */
    const attachedFile = {
      fileName: {path: {path: this.selectedFile_.name}},
      fileData: fileData,
    };

    return attachedFile;
  }

  /**
   * Get the image url when uploaded file is image type.
   * @param {!File} file
   * @return {!Promise<string>}
   * @private
   */
  async getImageUrl_(file) {
    const fileDataBuffer = await file.arrayBuffer();
    const fileDataView = new Uint8Array(fileDataBuffer);
    const blob = new Blob([Uint8Array.from(fileDataView)], {type: file.type});

    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  }

  /** @protected */
  handleSelectedImageClick_() {
    this.$.selectedImageDialog.showModal();
    this.feedbackServiceProvider_.recordPreSubmitAction(
        FeedbackAppPreSubmitAction.kViewedImage);
  }

  /** @protected */
  handleSelectedImageDialogCloseClick_() {
    this.$.selectedImageDialog.close();
  }

  /**
   * @param {!Event} e
   * @protected
   */
  handleOpenFileInputClick_(e) {
    e.preventDefault();
    const fileInput = this.getElement_('#selectFileDialog');
    // Clear the value so that when the user selects the same file again, the
    // change event will be triggered. Otherwise, if the file size exceeds the
    // limit, the error alert will not be displayed when the user selects the
    // same file again.
    fileInput.value = null;
    fileInput.click();
  }

  /**
   * @param {!Event} e
   * @protected
   */
  handleFileSelectChange_(e) {
    const fileInput = /**@type {HTMLInputElement} */ (e.target);
    // The feedback app takes maximum one attachment. And the file dialog is set
    // to accept one file only.
    if (fileInput.files.length > 0) {
      this.handleSelectedFileHelper_(fileInput.files[0]);
    }
  }

  /**
   * @param {!File} file
   * @private
   */
  handleSelectedFileHelper_(file) {
    assert(file);
    // Maximum file size is 10MB.
    const MAX_ATTACH_FILE_SIZE_BYTES = 10 * 1024 * 1024;
    if (file.size > MAX_ATTACH_FILE_SIZE_BYTES) {
      this.getElement_('#fileTooBigErrorMessage').show();
      return;
    }
    this.selectedFile_ = file;
    this.selectedFileName_ = file.name;
    this.getElement_('#selectFileCheckbox').checked = true;

    // Add a preview image when selected file is image type.
    if (file.type.startsWith('image/')) {
      this.getImageUrl_(file).then((imageUrl) => {
        this.selectedImageUrl_ = imageUrl;
        this.$.selectedImageButton.ariaLabel =
            this.i18n('previewImageAriaLabel', file.name);
      });
    } else {
      this.selectedImageUrl_ = '';
      this.$.selectedImageButton.ariaLabel = '';
    }
  }

  /**
   * @param {!File} file
   */
  setSelectedFileForTesting(file) {
    this.handleSelectedFileHelper_(file);
  }
}

customElements.define(FileAttachmentElement.is, FileAttachmentElement);

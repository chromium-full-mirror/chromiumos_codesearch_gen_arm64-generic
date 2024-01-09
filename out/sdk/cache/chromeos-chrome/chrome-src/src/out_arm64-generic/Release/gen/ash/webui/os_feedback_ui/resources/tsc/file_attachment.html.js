import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="os-feedback-shared">:host-context(body.jelly-enabled) .file-input{color:var(--cros-sys-on_surface);font:var(--cros-body-2-font)}:host-context(body.jelly-enabled) #addFileIcon{--cr-icon-button-fill-color:var(--cros-sys-on_surface)}:host-context(body.jelly-enabled) #addFileLabel,:host-context(body.jelly-enabled) #replaceFileButton,:host-context(body.jelly-enabled) #selectedFileName{font:var(--cros-button-2-font)}[hidden]{display:none!important}:host{--iron-icon-height:20px;--iron-icon-width:20px;align-items:center;display:flex;flex-direction:column}.file-input{background:0 0;border:none;color:var(--cros-color-prominent);cursor:pointer;font-family:var(--feedback-roboto-font-family);font-size:13px;line-height:20px;padding:0}.error-outline{--iron-icon-fill-color:var(--cros-icon-color-alert);margin-inline-end:12px}#addFileContainer,#replaceFileContainer{width:248px}#replaceFileContainer{display:flex;flex-direction:row}#replaceFileContainer>button{cursor:pointer}#replaceFileInfo{flex:1;margin-inline-end:12px;overflow:hidden;padding:4px 2px;white-space:nowrap}#selectFileDialog{height:0;opacity:0;width:0}#selectedFileImage:hover{opacity:.7}#addFileLabel{font-weight:var(--feedback-medium-font-weight)}#addFileIcon{--cr-icon-button-fill-color:var(--cros-color-prominent);--cr-icon-button-size:32px;margin-inline-end:4px;margin-inline-start:6px}#addFileIcon:focus-visible{border-radius:36px;box-shadow:none;outline:2px solid var(--cros-focus-ring-color)}#addFileIcon:active{outline:0}#selectFileCheckbox{margin-inline-end:10px;margin-inline-start:12px}#selectedImageButton{background:0 0;border:none;border-radius:4px;height:48px;padding:0;width:68px}#selectedFileImage{border-radius:0 4px 4px 0;display:block;height:46px;transition:all 250ms ease;width:68px}#replaceFileButton,#selectedFileName{font-weight:var(--feedback-regular-font-weight)}#selectedFileName{color:var(--cros-text-color-primary);font-size:13px;line-height:20px}#selectedFileContainer{display:flex;flex-direction:row-reverse;width:206px}</style>
<div id="addFileContainer" hidden="[[hasSelectedAFile]]">
  
  <button id="addFileLabel" class="file-input" aria-hidden="true" on-touchend="handleOpenFileInputClick" on-click="handleOpenFileInputClick" tabindex="-1">
    <cr-icon-button id="addFileIcon" iron-icon="attachment:add-file" aria-label="[[i18n('addFileLabel')]]" title="[[i18n('addFileLabel')]]">
    </cr-icon-button>
    [[i18n('addFileLabel')]]
  </button>
</div>
<input id="selectFileDialog" type="file" on-change="handleFileSelectChange" tabindex="-1">
<div id="replaceFileContainer" hidden="[[!hasSelectedAFile]]">
  <cr-checkbox id="selectFileCheckbox" class="no-label" title="[[i18n('attachFileCheckboxArialLabel')]]">
  </cr-checkbox>
  <div id="selectedFileContainer">
    <button id="selectedImageButton" on-click="handleSelectedImageClick" hidden="[[!selectedImageUrl]]" class="focusable">
      <img id="selectedFileImage" src="[[selectedImageUrl]]">
    </button>
    <div id="replaceFileInfo">
      <div id="selectedFileName" class="overflow-text">
        [[selectedFileName]]
      </div>
      <button id="replaceFileButton" class="file-input focusable" aria-label="[[i18n('replaceFileLabel')]]" on-touchend="handleOpenFileInputClick" on-click="handleOpenFileInputClick" tabindex="0">
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
    <cr-button id="closeDialogButton" class="close-dialog-button" title="[[i18n('dialogBackButtonAriaLabel')]]" aria-label="[[i18n('dialogBackButtonAriaLabel')]]" on-click="handleSelectedImageDialogCloseClick">
      <iron-icon id="backArrow" class="dialog-back-arrow" icon="cr:arrow-back"></iron-icon>
    </cr-button>
    <div id="modalDialogTitleText">[[selectedFileName]]</div>
  </div>
  <div id="mainPanel" class="dialog-main-panel">
    <div id="innerContentPanel" class="dialog-content-panel">
      <img src="[[selectedImageUrl]]" class="image-preview">
    </div>
  </div>
</dialog>
<!--_html_template_end_-->`;
}

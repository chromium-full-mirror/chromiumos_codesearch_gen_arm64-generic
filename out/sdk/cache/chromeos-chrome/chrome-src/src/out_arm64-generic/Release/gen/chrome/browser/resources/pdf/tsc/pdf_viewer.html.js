import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="pdf-viewer-shared-style cr-hidden-style">:host{--viewer-pdf-sidenav-width:300px;display:flex;flex-direction:column;height:100%;width:100%}viewer-pdf-sidenav,viewer-toolbar{--pdf-toolbar-text-color:rgb(241, 241, 241)}viewer-toolbar{--active-button-bg:rgba(255, 255, 255, 0.24);z-index:1}@media(max-width:200px),(max-height:250px){viewer-toolbar{display:none}}#sidenav-container{overflow:hidden;transition:transform 250ms cubic-bezier(.6,0,0,1),visibility 250ms;visibility:visible;width:var(--viewer-pdf-sidenav-width)}#sidenav-container.floating{bottom:0;position:absolute;top:0;z-index:1}#sidenav-container[closed]{transform:translateX(-100%);transition:transform .2s cubic-bezier(.6,0,0,1),visibility .2s,width 0s .2s;visibility:hidden;width:0}:host-context([dir=rtl]) #sidenav-container[closed]{transform:translateX(100%)}@media(max-width:500px),(max-height:250px){#sidenav-container{display:none}}#content-focus-rectangle{border:2px solid var(--google-grey-500);border-radius:2px;box-sizing:border-box;height:100%;pointer-events:none;position:absolute;top:0;width:100%}viewer-ink-host{height:100%;position:absolute;width:100%}#container{display:flex;flex:1;overflow:hidden;position:relative}#plugin{position:initial}#content{height:100%;left:0;position:sticky;top:0;z-index:initial}#sizer{top:0;width:100%;z-index:initial}#main{flex:1;overflow:hidden;position:relative}#scroller{direction:ltr;height:100%;overflow:auto;position:relative}#scroller:fullscreen{overflow:hidden}</style>

<viewer-toolbar id="toolbar" annotation-mode="[[annotationMode_]]" doc-title="[[title_]]" doc-length="[[docLength_]]" embedded-viewer="[[embedded_]]" page-no="[[pageNo_]]" load-progress="[[loadProgress_]]" has-edits="[[hasEdits_]]" has-entered-annotation-mode="[[hasEnteredAnnotationMode_]]" printing-enabled="[[printingEnabled_]]" rotated="[[isRotated_(clockwiseRotations_)]]" is-form-field-focused="[[isFormFieldFocused_]]" sidenav-collapsed="[[sidenavCollapsed_]]" two-up-view-enabled="[[twoUpViewEnabled_]]" viewport-zoom="[[viewportZoom_]]" zoom-bounds="[[zoomBounds_]]" pdf-ocr-enabled="[[pdfOcrEnabled_]]" on-change-page="onChangePage_" on-display-annotations-changed="onDisplayAnnotationsChanged_" on-fit-to-changed="onFitToChanged" on-present-click="onPresentClick_" on-properties-click="onPropertiesClick_" on-annotation-mode-dialog-confirmed="onResetView_" on-sidenav-toggle-click="onSidenavToggleClick_" on-two-up-view-changed="onTwoUpViewChanged_" on-zoom-changed="onZoomChanged" on-zoom-in="onZoomIn" on-zoom-out="onZoomOut" on-rotate-left="rotateCounterclockwise" on-print="onPrint_" on-save="onToolbarSave_" hidden>
</viewer-toolbar>

<div id="container">
  <div id="sidenav-container" closed$="[[sidenavCollapsed_]]" hidden$="[[!toolbarEnabled_]]">
    <viewer-pdf-sidenav id="sidenav" active-page="[[pageNo_]]" attachments="[[attachments_]]" bookmarks="[[bookmarks_]]" clockwise-rotations="[[clockwiseRotations_]]" doc-length="[[docLength_]]" on-change-page="onChangePage_" on-change-page-and-xy="onChangePageAndXy_" on-navigate="onNavigate_" on-save-attachment="onSaveAttachment_">
    </viewer-pdf-sidenav>
  </div>
  <div id="main">
    <div id="scroller">
      <div id="sizer"></div>
      <div id="content"></div>
    </div>
    <div id="content-focus-rectangle" hidden$="[[!documentHasFocus_]]"></div>
  </div>
</div>

<template is="dom-if" if="[[showErrorDialog]]" on-dom-change="onErrorDialog_">
  <viewer-error-dialog id="error-dialog"></viewer-error-dialog>
</template>

<template is="dom-if" if="[[showPasswordDialog_]]" restamp>
  <viewer-password-dialog id="password-dialog" on-close="onPasswordDialogClose_" on-password-submitted="onPasswordSubmitted_">
  </viewer-password-dialog>
</template>

<template is="dom-if" if="[[showPropertiesDialog_]]" restamp>
  <viewer-properties-dialog id="properties-dialog" document-metadata="[[documentMetadata_]]" file-name="[[fileName_]]" page-count="[[docLength_]]" on-close="onPropertiesDialogClose_">
  </viewer-properties-dialog>
</template>
<!--_html_template_end_-->`;
}

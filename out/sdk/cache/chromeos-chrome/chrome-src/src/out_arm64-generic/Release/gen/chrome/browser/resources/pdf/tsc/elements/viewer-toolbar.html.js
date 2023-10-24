import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="pdf-shared">:host{--viewer-pdf-toolbar-height:56px;box-shadow:0 -2px 8px rgba(0,0,0,.09),0 4px 8px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.3),0 2px 6px rgba(0,0,0,.15);position:relative}:host([more-menu-open_]) #more{background-color:var(--active-button-bg);border-radius:50%}#toolbar{align-items:center;background-color:var(--viewer-pdf-toolbar-background-color);color:#fff;display:flex;height:var(--viewer-pdf-toolbar-height);padding:0 16px}#title{font-size:.87rem;font-weight:500;margin-inline-start:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#actionMenuTrigger{margin-inline-end:6px}#start{align-items:center;display:flex;overflow:hidden;padding-inline-end:20px}#end,#start{flex:1}#center{align-items:center;display:flex}#end{display:flex;justify-content:flex-end;padding-inline-start:20px;text-align:end;white-space:nowrap}.vertical-separator{background:rgba(255,255,255,.3);height:15px;width:1px}#zoom-controls{align-items:center;display:flex;padding:0 4px}#zoom-controls input::selection{background-color:var(--viewer-text-input-selection-color)}@media(max-width:600px){#title,#zoom-controls input{display:none}}@media(max-width:500px){#fit,#start{display:none}}@media(max-width:420px){#center{display:none}#end{padding-inline-start:initial;text-align:center}}viewer-page-selector{display:inline-flex;height:36px;margin-inline-end:20px}input,viewer-page-selector::part(input){max-height:var(--viewer-pdf-toolbar-height)}input{background:rgba(0,0,0,.5);border:none;caret-color:currentColor;color:inherit;font-family:inherit;line-height:inherit;margin:0 4px;outline:0;padding:0 4px;text-align:center;width:5ch}#fit{margin-inline-start:12px}paper-progress{--paper-progress-active-color:var(--google-blue-300);--paper-progress-container-color:transparent;--paper-progress-height:3px;bottom:0;position:absolute;width:100%}#center,#end,paper-progress{transition:opacity .1s cubic-bezier(0,0,.2,1)}:host([loading_]) #center,:host([loading_]) #end,:host([loading_]) #menuButton,paper-progress{opacity:0;visibility:hidden}#center,#end,#menuButton,:host([loading_]) paper-progress{opacity:1;visibility:visible}#more,#print{margin-inline-start:4px}.dropdown-item{padding-inline-end:16px;padding-inline-start:12px}.only-visible-to-screen-reader{height:1px;left:-10000px;overflow:hidden;position:absolute;top:auto;width:1px}.check-container{margin-inline-end:12px;width:16px}cr-action-menu hr{border:none;border-top:var(--cr-separator-line)}</style>
<div id="toolbar">
  <div id="start">
    <cr-icon-button id="sidenavToggle" iron-icon="cr20:menu" title="$i18n{menu}" aria-label="$i18n{menu}" aria-expanded$="[[getAriaExpanded_(sidenavCollapsed)]]" on-click="onSidenavToggleClick_">
    </cr-icon-button>
    <span id="title">[[docTitle]]</span>
  </div>
  <div id="center">
    <viewer-page-selector doc-length="[[docLength]]" page-no="[[pageNo]]">
    </viewer-page-selector>
    <span class="vertical-separator"></span>
    <span id="zoom-controls">
      <cr-icon-button iron-icon="pdf:remove" title="$i18n{tooltipZoomOut}" disabled="[[isAtMinimumZoom_(zoomBounds.min, viewportZoomPercent_)]]" aria-label="$i18n{tooltipZoomOut}" on-click="onZoomOutClick_">
      </cr-icon-button>
      <input type="text" value="100%" aria-label="$i18n{zoomTextInputAriaLabel}" on-change="onZoomChange_" on-pointerup="onZoomInputPointerup_" on-blur="onZoomChange_">
      
      <cr-icon-button iron-icon="pdf:add" title="$i18n{tooltipZoomIn}" disabled="[[isAtMaximumZoom_(zoomBounds.max, viewportZoomPercent_)]]" aria-label="$i18n{tooltipZoomIn}" on-click="onZoomInClick_">
      </cr-icon-button>
    </span>
    <span class="vertical-separator"></span>
    <cr-icon-button id="fit" iron-icon="[[fitToButtonIcon_]]" title="[[getFitToButtonTooltip_('$i18nPolymer{tooltipFitToPage}',
                                        '$i18nPolymer{tooltipFitToWidth}',
                                        fittingType_)]]" aria-label="[[getFitToButtonTooltip_('$i18nPolymer{tooltipFitToPage}',
                                             '$i18nPolymer{tooltipFitToWidth}',
                                             fittingType_)]]" on-click="onFitToButtonClick_">
    </cr-icon-button>
    <cr-icon-button iron-icon="pdf:rotate-left" dir="ltr" aria-label="$i18n{tooltipRotateCCW}" title="$i18n{tooltipRotateCCW}" on-click="onRotateClick_">
    </cr-icon-button>
  </div>
  <div id="end">
  
    <viewer-download-controls id="downloads" has-edits="[[hasEdits]]" has-entered-annotation-mode="[[hasEnteredAnnotationMode]]" is-form-field-focused="[[isFormFieldFocused]]">
    </viewer-download-controls>
    <cr-icon-button id="print" iron-icon="cr:print" hidden="[[!printingEnabled]]" title="$i18n{tooltipPrint}" aria-label="$i18n{tooltipPrint}" on-click="onPrintClick_">
    </cr-icon-button>
    <cr-icon-button id="more" iron-icon="cr:more-vert" title="$i18n{moreActions}" aria-label="$i18n{moreActions}" on-click="onMoreClick_"></cr-icon-button>
  </div>
</div>
<paper-progress id="progress" value="[[loadProgress]]" hidden="[[!loading_]]">
</paper-progress>

<cr-action-menu id="menu" on-open-changed="onMoreOpenChanged_">
  <button id="two-page-view-button" class="dropdown-item" on-click="toggleTwoPageViewClick_" role="checkbox" aria-checked="[[getAriaChecked_(twoUpViewEnabled)]]">
    <span class="check-container">
      <iron-icon icon="pdf:check" hidden="[[!twoUpViewEnabled]]"></iron-icon>
    </span>
    $i18n{twoUpViewEnable}
  </button>

  <button id="show-annotations-button" class="dropdown-item" on-click="toggleDisplayAnnotations_" role="checkbox" aria-checked="[[getAriaChecked_(displayAnnotations_)]]">
    <span class="check-container">
      <iron-icon icon="pdf:check" hidden="[[!displayAnnotations_]]"></iron-icon>
    </span>
    $i18n{annotationsShowToggle}
  </button>


  <template is="dom-if" if="[[pdfOcrEnabled]]">
    <button id="pdf-ocr-button" class="dropdown-item only-visible-to-screen-reader" on-click="onPdfOcrClick_" role="checkbox" aria-checked="[[getAriaChecked_(pdfOcrAlwaysActive_)]]">
      <span class="check-container">
        <iron-icon icon="pdf:check" hidden="[[!pdfOcrAlwaysActive_]]">
        </iron-icon>
      </span>
      $i18n{pdfOcrShowToggle}
    </button>
  </template>


  <hr>

  <button id="present-button" class="dropdown-item" on-click="onPresentClick_" disabled="[[!presentationModeAvailable_]]">
    <span class="check-container" aria-hidden="true"></span>
    $i18n{present}
  </button>

  <button id="properties-button" class="dropdown-item" on-click="onPropertiesClick_">
    <span class="check-container" aria-hidden="true"></span>
    $i18n{propertiesDialogTitle}
  </button>
</cr-action-menu>



<!--_html_template_end_-->`;
}

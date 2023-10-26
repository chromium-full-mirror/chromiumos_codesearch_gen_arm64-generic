import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared input-device-settings-shared"></style>
<cr-dialog id="keyCombinationInputDialog">
  <div slot="title">$i18n{keyCombinationDialogTitle}</div>
  <div slot="body">
    <div id="keyCombinationSubsection">
      
      [[buttonRemapping_.name]]
    </div>
    <button on-click="onButtonClicked_">button</button>
  </div>
  <div slot="button-container">
    <div>
      <cr-button id="cancelButton" on-click="cancelDialogClicked_">
        $i18n{buttonRemappingDialogCancelLabel}
      </cr-button>
    </div>
    <div>
      <cr-button id="saveButton" class="action-button" on-click="saveDialogClicked_">
        $i18n{buttonRemappingDialogSaveLabel}
      </cr-button>
    </div>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

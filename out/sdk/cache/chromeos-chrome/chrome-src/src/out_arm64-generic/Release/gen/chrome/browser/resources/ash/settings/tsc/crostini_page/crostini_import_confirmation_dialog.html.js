import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">$i18n{crostiniImportConfirmationDialogTitle}</div>
  <div slot="body">$i18n{crostiniImportConfirmationDialogMessage}</div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="onCancelClick_">$i18n{cancel}</cr-button>
    <cr-button id="continue" class="action-button" on-click="onContinueClick_">
        $i18n{crostiniImportConfirmationDialogConfirmationButton}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

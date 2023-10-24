import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared"></style>
<cr-dialog id="dialog" show-on-attach close-text="$i18n{close}">
  <div slot="title">$i18n{unenrollVirtualCardDialogTitle}</div>
  <div slot="body">
    <div class="cr-padded-text">$i18nRaw{unenrollVirtualCardDialogLabel}</div>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancelButtonClick_">$i18n{cancel}</cr-button>
    <cr-button id="confirmButton" class="action-button" on-click="onConfirmButtonClick_">
      $i18n{unenrollVirtualCardDialogConfirm}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">$i18n{crostiniDiskResizeConfirmationDialogTitle}</div>
  <div slot="body">$i18n{crostiniDiskResizeConfirmationDialogMessage}</div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="onCancelClick_">$i18n{cancel}</cr-button>
    <cr-button id="continue" class="action-button" on-click="onReserveSizeClick_">
        $i18n{crostiniDiskResizeConfirmationDialogButton}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

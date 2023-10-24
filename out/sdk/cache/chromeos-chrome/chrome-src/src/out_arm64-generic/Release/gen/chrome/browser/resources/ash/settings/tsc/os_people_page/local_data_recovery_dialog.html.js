import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">cr-dialog::part(dialog){width:fit-content}</style>
<cr-dialog id="dialog" on-close="onClose_" close-text="$i18n{close}">
  <div slot="title">$i18n{recoveryDisableDialogTitle}</div>
  <div slot="body" id="recoveryDisableDialogMessage">
    $i18n{recoveryDisableDialogMessage}
  </div>
  <div slot="button-container">
    <cr-button id="cancelRecoveryDialogButton" class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button id="disableRecoveryDialogButton" class="action-button" on-click="onDisableClick_">
      $i18n{disable}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

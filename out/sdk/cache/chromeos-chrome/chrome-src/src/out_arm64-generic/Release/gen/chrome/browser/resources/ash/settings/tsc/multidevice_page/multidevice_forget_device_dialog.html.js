import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<cr-dialog id="forgetDeviceDialog" show-on-attach>
  <div slot="title">$i18n{multideviceForgetDevice}</div>
  <div slot="body" class="first">
    $i18n{multideviceForgetDeviceDialogMessage}
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="closeDialog_">
      $i18n{cancel}
    </cr-button>
    <cr-button id="confirmButton" class="action-button" on-click="onConfirmClick_">
      $i18n{multideviceForgetDeviceDisconnect}
    </cr-button>
  </div>
</cr-dialog><!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">$i18n{securityKeysPhoneEditDialogTitle}</div>
  <div slot="body">
    <cr-input id="name" spellcheck="false" label="$i18n{securityKeysCredentialDisplayNameLabel}" value="[[name]]" on-input="validate_" autofocus>
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_" id="cancel">
        $i18n{cancel}</cr-button>
    <cr-button id="actionButton" class="action-button" on-click="onSaveClick_">
        $i18n{save}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

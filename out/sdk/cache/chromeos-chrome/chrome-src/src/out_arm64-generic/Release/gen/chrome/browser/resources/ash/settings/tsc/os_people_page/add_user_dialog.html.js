import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">cr-dialog::part(dialog){width:320px}</style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">$i18n{addUsers}</div>
  <div slot="body">
    <cr-input id="addUserInput" label="$i18n{addUsersEmail}" invalid="[[shouldShowError_(errorCode_)]]" on-value-changed="onInput_" error-message="[[getErrorString_(errorCode_)]]" autofocus>
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button on-click="addUser_" class="action-button" disabled$="[[!canAddUser_(isEmail_, isEmpty_)]]">
      $i18n{add}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

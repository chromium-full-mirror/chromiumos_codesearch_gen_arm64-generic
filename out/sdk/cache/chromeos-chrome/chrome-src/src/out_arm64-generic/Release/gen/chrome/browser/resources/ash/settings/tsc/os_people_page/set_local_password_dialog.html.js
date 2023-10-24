import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">.error{color:var(--cros-text-color-alert)}</style>
<cr-dialog id="dialog" ignore-enter-key close-text="$i18n{close}">
  <div slot="title">$i18n{setLocalPasswordDialogTitle}</div>
  <div slot="body">
    <set-local-password-input id="setPasswordInput" on-submit="submit">
    </set-local-password-input>
    <template is="dom-if" if="[[showError_]]">
      
      <div class="error">
        $i18n{setLocalPasswordDialogInternalError}
      </div>
    </template>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="cancel">
      $i18n{cancel}
    </cr-button>
    <cr-button id="submitButton" class="action-button" on-click="submit">
      $i18n{confirm}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

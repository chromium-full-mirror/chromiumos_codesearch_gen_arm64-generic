import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">[[getDisclaimerTitle_(origin)]]</div>
  <div slot="body">[[getDisclaimerDescription_()]]</div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="onCancel_" autofocus>
      $i18n{cancel}
    </cr-button>
    <cr-button id="edit" class="action-button" on-click="onEditClick_">
      $i18n{editPassword}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

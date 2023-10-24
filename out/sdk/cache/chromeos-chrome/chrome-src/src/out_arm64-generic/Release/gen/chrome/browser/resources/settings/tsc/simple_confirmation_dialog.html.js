import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">[[titleText]]</div>
  <div slot="body">[[bodyText]]</div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button id="confirm" class$="[[getConfirmButtonCssClass_(noPrimaryButton)]]" on-click="onConfirmClick_">
      [[confirmText]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

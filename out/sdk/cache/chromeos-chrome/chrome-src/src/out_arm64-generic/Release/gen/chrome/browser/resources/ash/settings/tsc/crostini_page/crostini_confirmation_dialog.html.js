import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<cr-dialog id="dialog" show-on-attach close-text="$i18n{close}" on-cancel="onDialogCancel_" on-close="onDialogClose_">
  
  <div slot="body"><slot name="body"></slot></div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      [[cancelButtonText]]
    </cr-button>
    <cr-button class="action-button" on-click="onAcceptClick_">
      [[acceptButtonText]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

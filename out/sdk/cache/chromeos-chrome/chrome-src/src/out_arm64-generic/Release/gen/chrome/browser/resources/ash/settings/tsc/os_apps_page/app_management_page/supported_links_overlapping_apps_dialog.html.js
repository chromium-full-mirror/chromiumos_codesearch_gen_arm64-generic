import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="app-management-cros-shared-style"></style>
<cr-dialog show-on-attach id="dialog" close-text="close">
  <div slot="title">[[i18n('appManagementIntentOverlapDialogTitle')]]</div>
  <div slot="body">[[getBodyText_(apps)]]</div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_" id="cancel">
      [[i18n('cancel')]]
    </cr-button>
    <cr-button class="action-button" on-click="onChangeClick_" id="change">
      [[i18n('appManagementIntentOverlapChangeButton')]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

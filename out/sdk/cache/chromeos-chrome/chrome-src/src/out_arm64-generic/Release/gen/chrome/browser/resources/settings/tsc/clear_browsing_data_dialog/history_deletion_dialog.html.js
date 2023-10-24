import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>

<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">$i18n{historyDeletionDialogTitle}</div>
  <div slot="body">$i18nRaw{historyDeletionDialogBody}</div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onOkClick_">
      $i18n{historyDeletionDialogOK}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

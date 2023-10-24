import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">$i18n{passwordsDeletionDialogTitle}</div>
  <div slot="body">$i18nRaw{passwordsDeletionDialogBody}</div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onOkClick_">
      $i18n{ok}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

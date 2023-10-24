import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><cr-dialog id="dialog">
  <div slot="title" class="dialog-title">[[getTitle_()]]</div>
  <div slot="body">
    <div>$i18n{authTimedOutDescription}</div>
  </div>
  <div slot="button-container">
    <cr-button class="action-button" autofocus on-click="onCloseButtonClick_">
      $i18n{gotIt}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

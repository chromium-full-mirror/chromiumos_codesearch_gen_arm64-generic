import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>cr-dialog::part(dialog){max-width:100%;position:fixed}cr-dialog [slot=body]{line-height:20px}</style>
<cr-dialog id="dialog" consume-keydown-event>
  <div slot="title">$i18n{modulesTasksInfoTitle}</div>
  <div slot="body">
    <slot></slot>
  </div>
  <div slot="button-container">
    <cr-button id="closeButton" class="action-button" on-click="onCloseClick_">
      $i18n{modulesTasksInfoClose}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

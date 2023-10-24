import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">#dialog [slot=body]{padding-inline-end:0;padding-inline-start:0}</style>

<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">
    <slot name="dialog-title"></slot>
  </div>
  <div slot="body">
    <slot name="dialog-body"></slot>
  </div>
  <div slot="button-container">
    <slot name="dialog-buttons"></slot>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="shared-style">paper-spinner-lite{display:flex;margin-inline:auto;margin-block:40px 56px}</style>

<cr-dialog close-text="$i18n{close}" show-on-attach>
  <share-password-dialog-header slot="title">
    [[dialogTitle]]
  </share-password-dialog-header>
  <paper-spinner-lite slot="body" active></paper-spinner-lite>
</cr-dialog>
<!--_html_template_end_-->`;
}

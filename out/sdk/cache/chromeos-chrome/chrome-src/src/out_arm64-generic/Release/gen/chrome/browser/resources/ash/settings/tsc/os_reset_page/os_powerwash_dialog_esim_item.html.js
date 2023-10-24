import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">div{color:var(--cr-primary-text-color);margin-top:10px}#providerName{color:var(--cros-text-color-disabled)}</style>
<div inner-h-t-m-l="[[getItemInnerHtml_(profileProperties_)]]">
</div>
<!--_html_template_end_-->`;
}

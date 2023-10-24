import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">.ripple-padding{padding-inline-start:20px;padding-inline-end:20px}cr-checkbox::part(label-container){min-width:0}</style>
<cr-checkbox id="checkbox" class="list-item no-outline ripple-padding" tab-index="-1" checked="{{checked}}" part="checkbox">
  <slot></slot>
</cr-checkbox>
<!--_html_template_end_-->`;
}

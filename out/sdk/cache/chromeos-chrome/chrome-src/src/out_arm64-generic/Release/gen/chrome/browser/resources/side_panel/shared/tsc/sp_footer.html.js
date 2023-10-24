import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{display:flex;justify-content:center}:host([pinned]){border-top:var(--cr-hairline);box-sizing:border-box;display:block;flex-shrink:0;height:48px;margin-block-start:auto;padding:8px;position:relative}:host-context([chrome-refresh-2023]):host([pinned]){border-top:0;height:56px}</style>
<slot></slot>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{outline:0}:host-context(body.revamp-wayfinding-enabled):host(:not([active])){display:none}</style>

<div id="focusHost" tabindex="-1"></div>
<slot></slot>
<!--_html_template_end_-->`;
}

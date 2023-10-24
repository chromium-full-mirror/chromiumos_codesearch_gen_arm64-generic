import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host(:not([hidden])){display:block}#iframe{border:none;border-radius:inherit;display:block;height:inherit;max-height:inherit;max-width:inherit;width:inherit}</style>
<iframe id="iframe" src="[[src_]]" allow="[[allow]]"></iframe>
<!--_html_template_end_-->`;
}

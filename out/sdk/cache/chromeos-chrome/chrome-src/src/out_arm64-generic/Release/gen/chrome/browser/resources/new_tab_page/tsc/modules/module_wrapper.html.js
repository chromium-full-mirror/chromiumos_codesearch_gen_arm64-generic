import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{background-color:var(--color-new-tab-page-background-override);border:solid var(--color-new-tab-page-border) 1px;border-radius:var(--ntp-module-border-radius);box-sizing:border-box;display:block;overflow:hidden;position:relative}#impressionProbe{height:27px;pointer-events:none;position:absolute;width:100%}#moduleElement{align-items:center;background:var(--color-new-tab-page-module-background);display:flex;height:100%;justify-content:center}:host([modules-redesigned-enabled_]){background-color:var(--color-new-tab-page-module-background);border:none;height:fit-content;overflow:visible}:host([modules-redesigned-enabled_]) #moduleElement{border-radius:var(--ntp-module-border-radius)}</style>
<div id="impressionProbe"></div>
<div id="moduleElement"></div>
<!--_html_template_end_-->`;
}

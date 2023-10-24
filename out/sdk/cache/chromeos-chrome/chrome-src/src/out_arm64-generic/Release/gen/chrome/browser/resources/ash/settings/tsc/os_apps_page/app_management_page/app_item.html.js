import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="app-management-cros-shared-style cr-icons">:host{align-items:center;border-bottom:var(--card-separator);color:var(--cros-text-color-primary);cursor:pointer;display:flex;flex-direction:row;font-weight:400;height:48px}#appTitle{flex:1;overflow:hidden;text-overflow:ellipsis}#appIcon{height:32px;margin-inline-end:20px;margin-inline-start:24px;width:32px}</style>
<img id="appIcon" src="[[iconUrlFromId_(app)]]" alt="[[app.title]] app icon." aria-hidden="true">
<div id="appTitle" aria-hidden="true">[[app.title]]</div>
<slot name="right-content"></slot>
<!--_html_template_end_-->`;
}

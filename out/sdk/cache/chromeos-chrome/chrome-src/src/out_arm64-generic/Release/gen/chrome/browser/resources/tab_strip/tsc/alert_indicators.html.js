import { getTrustedHTML } from '//resources/js/static_types.js';
export function getTemplate() {
    return getTrustedHTML `<!--_html_template_start_--><style>:host{height:100%}#container{display:grid;flex-shrink:0;grid-auto-flow:column;grid-gap:4px;height:100%}:host-context([pinned]) tabstrip-alert-indicator:not(:first-child){display:none}</style>

<div id="container"></div>
<!--_html_template_end_-->`;
}

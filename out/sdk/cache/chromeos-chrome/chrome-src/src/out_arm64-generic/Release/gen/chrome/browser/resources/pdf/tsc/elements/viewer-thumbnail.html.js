import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{--focus-border-color:var(--google-blue-300);display:block}:host(:focus){outline:0}#thumbnail{align-items:center;cursor:pointer;display:inline-flex;height:140px;justify-content:center;margin-bottom:12px;margin-inline-end:auto;margin-inline-start:auto;width:108px}:host([is-active]) #thumbnail{--active-background-color:white;background-color:var(--active-background-color);box-shadow:0 0 0 6px var(--focus-border-color)}:host(:focus-visible) #thumbnail{box-shadow:0 0 0 2px var(--focus-border-color)}:host([is-active]:focus-visible) #thumbnail{box-shadow:0 0 0 8px var(--focus-border-color)}canvas{display:block;opacity:.5}:host([is-active]) canvas{opacity:1}:host([is-active]) canvas:hover,canvas:hover{opacity:.7}#pageNumber{line-height:1}</style>
<div id="thumbnail" on-click="onClick_" role="button"></div>
<div id="pageNumber">[[pageNumber]]</div>
<!--_html_template_end_-->`;
}

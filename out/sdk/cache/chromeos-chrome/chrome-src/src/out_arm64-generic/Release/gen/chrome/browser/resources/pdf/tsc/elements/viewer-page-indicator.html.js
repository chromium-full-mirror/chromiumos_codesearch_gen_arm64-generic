import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style>:host{display:flex;pointer-events:none;position:fixed;right:0;transition:opacity .4s ease-in-out}:host-context([dir=rtl]){left:0;right:auto}#text{background-color:rgba(0,0,0,.5);border-radius:5px;color:#fff;font-family:sans-serif;font-size:12px;font-weight:700;line-height:48px;text-align:center;text-shadow:1px 1px 1px rgba(0,0,0,.8);width:62px}#triangle-end{border-bottom:6px solid transparent;border-inline-start:8px solid rgba(0,0,0,.5);border-top:6px solid transparent;height:0;margin-top:18px;width:0}</style>
    <div id="text">[[label]]</div>
    <div id="triangle-end"></div>
<!--_html_template_end_-->`;
}

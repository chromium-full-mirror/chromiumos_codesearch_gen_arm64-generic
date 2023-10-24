import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style>:host ::slotted([slot=view]){bottom:0;display:none;left:0;position:absolute;right:0;top:0}:host ::slotted(.active),:host ::slotted(.closing){display:block}</style>
    <slot name="view"></slot>
<!--_html_template_end_-->`;
}

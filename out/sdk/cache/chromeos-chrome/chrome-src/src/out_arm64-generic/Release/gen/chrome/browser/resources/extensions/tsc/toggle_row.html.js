import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{align-items:center;display:flex;touch-action:none}input{display:none}label{box-sizing:border-box;cursor:pointer;flex:1}cr-toggle{display:inline-block}:host ::slotted(*){flex:1;margin-inline-end:20px}</style>
<label id="label" aria-hidden="true">
  <input id="native" type="checkbox" checked="[[checked]]" on-change="onNativeChange_" on-click="onNativeClick_" disabled="[[disabled]]">
  <slot></slot>
</label>
<cr-toggle id="crToggle" checked="{{checked}}" aria-labelledby="label" on-change="onCrToggleChange_" disabled="[[disabled]]"></cr-toggle>
<!--_html_template_end_-->`;
}

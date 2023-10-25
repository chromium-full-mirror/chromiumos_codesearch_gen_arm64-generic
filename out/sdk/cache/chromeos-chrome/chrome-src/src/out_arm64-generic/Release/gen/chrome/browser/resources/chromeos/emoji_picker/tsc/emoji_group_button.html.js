import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{display:flex;height:calc(var(--emoji-size) + 2 * var(--emoji-picker-group-button-padding));justify-content:center;scroll-snap-align:none;width:var(--emoji-size)}#group-button{--cr-icon-button-size:var(--emoji-size);--cr-icon-button-icon-size:var(--emoji-picker-group-button-icon-size, 20px);font-size:20px;margin:0;padding-left:0;padding-right:0;padding-top:var(--emoji-picker-group-button-padding,0);padding-bottom:var(--emoji-picker-group-button-padding,0);border-radius:var(--emoji-picker-group-button-border-radius,0)}#group-button:not(.emoji-group-active){--cr-icon-button-fill-color:var(--emoji-picker-tab-unselected-color)}#group-button.emoji-group-active{--cr-icon-button-fill-color:var(--emoji-picker-tab-selected-color)}cr-icon-button{--cr-icon-button-focus-outline-color:var(--emoji-picker-focus-ring-color)}</style>

<cr-icon-button id="group-button" iron-icon="[[icon]]" class$="[[calculateClassName(active)]]" on-click="handleClick" aria-label="[[name]]" aria-pressed$="[[getAriaPressedState(active)]]" disabled="[[disabled]]" custom-tab-index="[[customTabIndex]]">
</cr-icon-button>
<!--_html_template_end_-->`;
}

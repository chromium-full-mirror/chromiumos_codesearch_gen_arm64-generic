import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>#group-button{--hover-bg-color:var(--cr-hover-background-color);border:none;border-radius:0;color:var(--emoji-picker-tab-unselected-color);font-size:12px;font:var(--cros-button-1-font);margin:0;margin-inline:var(--tab-button-margin);min-width:unset;width:max-content;--cr-button-height:var(--emoji-picker-group-button-height, 32px);padding-left:var(--emoji-picker-group-button-padding,0);padding-right:var(--emoji-picker-group-button-padding,0);border-radius:var(--emoji-picker-group-button-border-radius,0)}#group-button:hover{box-shadow:none}#group-button:active{box-shadow:none}#group-button.text-group-active{--cr-icon-button-fill-color:var(--emoji-picker-tab-selected-color);color:var(--emoji-picker-tab-selected-color)}cr-button{--focus-shadow-color:var(--emoji-picker-focus-ring-color)}</style>

<cr-button id="group-button" class$="[[calculateClassName(active)]]" on-click="handleClick" custom-tab-index="[[customTabIndex]]" aria-pressed$="[[getAriaPressedState(active)]]">
  [[toUpperCase(name)]]
</cr-button>
<!--_html_template_end_-->`;
}

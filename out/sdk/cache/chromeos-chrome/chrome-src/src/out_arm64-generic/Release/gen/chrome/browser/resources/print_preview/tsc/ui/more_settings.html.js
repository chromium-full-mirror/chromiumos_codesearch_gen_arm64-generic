import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style print-preview-shared">:host{border-top:var(--print-preview-settings-border);display:block}:host([disabled]){pointer-events:none}div{align-items:center;display:flex;font:inherit;margin:0;min-height:48px}:host cr-expand-button{flex:1;padding-inline-end:calc(var(--print-preview-sidebar-margin) + 6px);padding-inline-start:var(--print-preview-sidebar-margin);--cr-expand-button-size:28px}:host([hidden]){display:none}:host([disabled]) #label{opacity:var(--cr-disabled-opacity)}</style>
<div on-click="toggleExpandButton_" actionable>
  <cr-expand-button aria-label="$i18n{moreOptionsLabel}" expanded="{{settingsExpandedByUser}}" disabled="[[disabled]]">
    <div id="label">$i18n{moreOptionsLabel}</div>
  </cr-expand-button>
</div>
<!--_html_template_end_-->`;
}

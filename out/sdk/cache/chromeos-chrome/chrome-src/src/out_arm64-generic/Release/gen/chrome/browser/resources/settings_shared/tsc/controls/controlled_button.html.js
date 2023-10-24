import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cros-color-overrides">:host{--justify-margin:8px;align-items:center;display:flex}:host([enforced_]){pointer-events:none}cr-policy-pref-indicator{pointer-events:all}:host(:not([end-justified])) cr-policy-pref-indicator{margin-inline-start:var(--cr-controlled-by-spacing)}:host([end-justified]) cr-policy-pref-indicator{margin-inline-end:var(--cr-controlled-by-spacing);margin-inline-start:calc(var(--cr-controlled-by-spacing) - var(--justify-margin));order:-1}</style>

<cr-button class$="[[actionClass_]]" disabled="[[!buttonEnabled_(enforced_, disabled)]]">
  [[label]]
</cr-button>

<template is="dom-if" if="[[hasPrefPolicyIndicator(pref.*)]]" restamp>
  <cr-policy-pref-indicator pref="[[pref]]" on-click="onIndicatorClick_" icon-aria-label="[[label]]">
  </cr-policy-pref-indicator>
</template>
<!--_html_template_end_-->`;
}

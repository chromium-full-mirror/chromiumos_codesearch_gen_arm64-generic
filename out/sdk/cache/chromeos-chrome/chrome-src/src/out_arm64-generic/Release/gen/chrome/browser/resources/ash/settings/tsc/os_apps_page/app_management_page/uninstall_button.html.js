import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="app-management-cros-shared-style">:host{align-items:center;display:flex;flex-direction:row}#policyIndicator{padding-inline-end:var(--app-management-controlled-by-spacing)}</style>
<template is="dom-if" if="[[showPolicyIndicator_(app)]]">
  <cr-tooltip-icon id="policyIndicator" icon-class="cr20:domain" tooltip-text="[[policyLabel]]" icon-aria-label="[[policyLabel]]" tooltip-position="bottom">
  </cr-tooltip-icon>
</template>
<template is="dom-if" if="[[showUninstallButton_(app)]]">
  <cr-button id="uninstallButton" on-click="onClick_" disabled$="[[getDisableState_(app)]]">
    [[uninstallLabel]]
  </cr-button>
</template>
<!--_html_template_end_-->`;
}

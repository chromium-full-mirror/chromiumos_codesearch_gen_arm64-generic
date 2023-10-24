import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>cr-button{--ink-color:var(--google-blue-300);--text-color:var(--google-blue-300)}:host-context(body.jelly-enabled) cr-button{--ink-color:var(--cros-color-primary-inverted);--text-color:var(--cros-color-primary-inverted)}cr-button{--active-shadow-rgb:transparent;--border-color:transparent;--hover-border-color:transparent;--hover-bg-color:transparent;--hover-bg-action:transparent;--cr-button-height:36px;border:0;margin:0;padding:8px}@media (prefers-color-scheme:dark){cr-button{--ink-color:var(--google-blue-600);--text-color:var(--google-blue-600)}:host-context(body.jelly-enabled) cr-button{--ink-color:var(--cros-color-primary-inverted);--text-color:var(--cros-color-primary-inverted)}}#container{align-items:center;background-color:var(--cros-bg-color-elevation-2-inverted);border-radius:4px;box-shadow:0 1px 2px rgba(0,0,0,.3),0 2px 6px rgba(0,0,0,.15);box-sizing:border-box;color:var(--cros-text-color-primary-inverted);display:flex;flex-flow:row nowrap;justify-content:space-between;padding:16px}p{margin:0;margin-inline-end:16px}</style>
<template is="dom-if" if="[[showError_]]">
  <div id="container">
    <p>[[getErrorMessage_(error_)]]</p>
    <cr-button on-click="onDismissClicked_">
      [[getDismissMessage_(error_)]]
    </cr-button>
  </div>
</template>
<!--_html_template_end_-->`;
}

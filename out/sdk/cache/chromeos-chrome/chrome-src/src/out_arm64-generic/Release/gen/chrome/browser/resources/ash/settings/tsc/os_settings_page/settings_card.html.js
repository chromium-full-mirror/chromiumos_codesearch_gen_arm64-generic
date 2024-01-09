import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{--settings-card-border-radius:var(--cr-card-border-radius);display:flex;flex-direction:column;outline:0;position:relative}:host-context(body.revamp-wayfinding-enabled):host{--settings-card-border-radius:16px;margin-bottom:16px}:host-context(body.revamp-wayfinding-enabled) #header{margin:0;padding:8px}:host-context(body:not(.revamp-wayfinding-enabled)) #headerText{color:var(--cr-primary-text-color);font-size:108%;font-weight:400;letter-spacing:.25px;margin-bottom:12px;margin-top:var(--cr-section-vertical-margin);outline:0;padding-bottom:4px;padding-top:8px}:host-context(body.revamp-wayfinding-enabled) #headerText{color:var(--cros-sys-primary);font:var(--cros-button-2-font);margin:0;outline:0;padding:0}#card{background-color:var(--cros-sys-app_base);border-radius:var(--settings-card-border-radius);flex:1;overflow:hidden}:host-context(body:not(.revamp-wayfinding-enabled)) #card{box-shadow:var(--cr-card-shadow)}</style>
<template is="dom-if" if="[[headerText]]" restamp>
  <div id="header">
    <h2 id="headerText" tabindex="-1">
      [[headerText]]
    </h2>
  </div>
</template>
<div id="card">
  <slot></slot>
</div>
<!--_html_template_end_-->`;
}

import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="iron-positioning cros-color-overrides">:host{display:flex;flex-direction:column;height:100%}#title{color:var(--cros-text-color-primary);font-weight:400;line-height:24px}#message{height:var(--base-page-message-height,auto);margin-bottom:20px}:host ::slotted([slot=page-body]){display:block;flex:1 1 auto}#message iron-icon{padding-inline-end:4px}</style>
<template is="dom-if" if="[[isTitleShown_(title)]]" restamp>
  <h3 id="title">[[getTitle_(title)]]</h3>
</template>
<div id="message" aria-live="polite" aria-atomic="true">
  <iron-icon icon$="cellular-setup:[[messageIcon]]" hidden$="[[!isMessageIconShown_(messageIcon)]]">
  </iron-icon>
  [[message]]
</div>
<slot name="page-body"></slot>
<!--_html_template_end_-->`}
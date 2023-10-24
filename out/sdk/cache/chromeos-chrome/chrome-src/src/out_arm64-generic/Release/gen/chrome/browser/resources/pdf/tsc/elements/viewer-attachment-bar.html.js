import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="pdf-shared">:host{display:block;padding-inline-end:20px;padding-top:20px}#warning{align-items:flex-start;padding:5px 28px 15px;position:relative}</style>
<div id="warning" hidden="[[!exceedSizeLimit_]]">
  $i18n{oversizeAttachmentWarning}
</div>
<template is="dom-repeat" items="[[attachments]]">
  <viewer-attachment attachment="[[item]]" index="{{index}}">
  </viewer-attachment>
</template>
<!--_html_template_end_-->`;
}

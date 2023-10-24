import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="pdf-shared">:host{display:block;padding-inline-end:20px;padding-top:20px}</style>
<template is="dom-repeat" items="[[bookmarks]]">
  <viewer-bookmark bookmark="[[item]]" depth="0"></viewer-bookmark>
</template>
<!--_html_template_end_-->`;
}

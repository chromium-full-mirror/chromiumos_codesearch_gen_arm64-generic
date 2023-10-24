import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
site-favicon{margin-inline-end:8px;min-width:16px}
    </style>
  </template>
`.content);
styleMod.register('search-engine-entry');

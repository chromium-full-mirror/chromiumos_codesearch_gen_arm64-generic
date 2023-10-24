import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
.detail-list{margin-top:12px}.detail{align-items:center;display:flex;margin-top:8px}.detail iron-icon{margin-inline-end:16px}
    </style>
  </template>
`.content);
styleMod.register('clear-storage-dialog-shared');

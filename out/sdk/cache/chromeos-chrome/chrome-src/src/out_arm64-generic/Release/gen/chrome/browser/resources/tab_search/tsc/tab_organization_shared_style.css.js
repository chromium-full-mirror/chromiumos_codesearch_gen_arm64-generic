import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
.tab-organization-body{color:var(--cr-secondary-text-color);font-size:13px;font-weight:400}.tab-organization-container{display:flex;flex-direction:column;gap:16px}.tab-organization-header{color:var(--cr-primary-text-color);font-size:14px;font-weight:500}.tab-organization-text-container{display:flex;flex-direction:column;gap:8px}
    </style>
  </template>
`.content);
styleMod.register('tab-organization-shared-style');

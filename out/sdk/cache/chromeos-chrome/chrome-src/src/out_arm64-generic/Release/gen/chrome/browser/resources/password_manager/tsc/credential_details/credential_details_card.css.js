import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
.card{margin-bottom:44px}.credential-container{padding:12px var(--cr-form-field-bottom-spacing) var(--cr-section-padding)}.row-container{display:flex;margin-top:16px}.column-container{flex:50%;max-width:50%}.button-container{border-top:var(--cr-separator-line);display:flex;margin-top:12px;padding:var(--cr-form-field-bottom-spacing) var(--cr-section-padding)}a.site-link{max-width:324px}.cr-form-field-label{margin-bottom:8px}.card-title{color:var(--cr-secondary-text-color);margin:5px 0}.edit-button{margin-inline-end:var(--cr-button-edge-spacing)}
    </style>
  </template>
`.content);
styleMod.register('credential-details-card');

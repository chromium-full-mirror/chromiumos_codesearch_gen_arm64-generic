import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
.settings-columned-section{display:flex;gap:16px;padding:16px var(--cr-section-padding) 0}settings-collapse-radio-button .settings-columned-section{padding:4px 0 16px 0}.settings-columned-section .column{flex:1;min-width:0}.settings-columned-section .description-header{color:var(--google-blue-600)}.settings-columned-section h2.description-header,.settings-columned-section h3.description-header{font-size:inherit;font-weight:400;margin:0;padding:0}@media (prefers-color-scheme:dark){.settings-columned-section .description-header{color:var(--google-blue-300)}}.settings-columned-section ul{list-style-type:none;padding-inline-start:0}.settings-columned-section ul.icon-bulleted-list li{column-gap:16px;display:flex}.settings-columned-section li{margin:16px 0}
    </style>
  </template>
`.content);
styleMod.register('settings-columned-section');

import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
:host(.showing-subpage) settings-section:not(.expanded){display:none}:host>div>:not(.expanded){margin-bottom:3px}.expanded{min-height:100%}
    </style>
  </template>
`.content);
styleMod.register('settings-page-styles');

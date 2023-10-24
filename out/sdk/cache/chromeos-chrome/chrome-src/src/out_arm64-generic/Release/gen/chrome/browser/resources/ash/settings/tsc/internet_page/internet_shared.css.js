import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style include="settings-shared">
network-icon{padding-inline-end:var(--cr-section-padding)}iron-icon.policy{margin-inline-end:var(--cr-controlled-by-spacing)}.indented{margin-inline-start:var(--cr-section-padding)}.stretch{align-items:stretch}.title{font-size:107.69%;font-weight:500}
    </style>
  </template>
`.content);
styleMod.register('internet-shared');

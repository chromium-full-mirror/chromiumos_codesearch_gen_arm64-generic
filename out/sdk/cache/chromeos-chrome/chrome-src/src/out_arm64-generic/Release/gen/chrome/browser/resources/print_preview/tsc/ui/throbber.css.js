import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import './print_preview_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
.throbber{background:url(chrome://resources/images/throbber_small.svg) no-repeat;display:inline-block;height:var(--throbber-size);width:var(--throbber-size)}
    </style>
  </template>
`.content);
styleMod.register('throbber');

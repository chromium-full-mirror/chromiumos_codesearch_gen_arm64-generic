import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style include="cr-shared-style">
.list-frame{align-items:center;display:block;padding-inline-end:20px;padding-inline-start:60px}.list-item{align-items:center;display:flex;min-height:48px}.list-item.underbar{border-bottom:var(--cr-separator-line)}.list-item.selected{font-weight:500}.list-item>.start{flex:1}
    </style>
  </template>
`.content);
styleMod.register('certificate-shared');

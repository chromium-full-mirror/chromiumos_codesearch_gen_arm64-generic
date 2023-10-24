import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
paper-tooltip{--paper-tooltip-min-width:max-content}site-favicon{padding-inline-end:24px}.bulk-action-button{margin-inline-start:auto}.display-name{flex:1;max-width:100%}.header-group-wrapper{flex:1;margin-inline-start:15px}.header-with-icon{align-items:center;display:flex;padding-top:15px}.header-with-icon h2{padding-bottom:5px;padding-top:0}.header-with-icon iron-icon{border-radius:50%;height:var(--cr-icon-size);padding:6px;width:var(--cr-icon-size)}.site-list{margin-inline-start:48px}.site-list .list-item{--cr-icon-button-margin-end:initial}iron-icon[icon='cr:check']{background-color:var(--google-green-50);fill:var(--google-green-700)}@media (prefers-color-scheme:dark){iron-icon[icon='cr:check']{background-color:var(--google-green-300);fill:var(--grey-900-white-4-percent)}}.header-icon{background-color:var(--google-blue-50);fill:var(--google-blue-600)}@media (prefers-color-scheme:dark){.header-icon{background-color:var(--google-blue-300);fill:var(--grey-900-white-4-percent)}}@keyframes removed-animation{0%{max-height:calc(1.6 * 2em + 2 * var(--cr-section-vertical-padding));opacity:1}20%{max-height:calc(1.6 * 2em + 2 * var(--cr-section-vertical-padding));opacity:0}100%{max-height:0;opacity:0;visibility:hidden}}.removed{animation-duration:.3s;animation-fill-mode:forwards;animation-iteration-count:1;animation-name:removed-animation;min-height:0}
    </style>
  </template>
`.content);
styleMod.register('site-review-shared');

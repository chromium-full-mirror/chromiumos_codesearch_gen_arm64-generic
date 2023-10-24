import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
cr-icon-button{--cr-icon-button-fill-color:var(--pdf-toolbar-text-color);--cr-icon-button-focus-outline-color:var(--google-grey-500);margin:0}cr-icon-button:hover{background:rgba(255,255,255,.08);border-radius:50%}cr-action-menu,viewer-bookmark{--cr-menu-background-color:var(--google-grey-900);--cr-menu-shadow:rgba(0, 0, 0, .3) 0 1px 2px 0,rgba(0, 0, 0, .15) 0 3px 6px 2px;--cr-primary-text-color:var(--google-grey-200);--cr-menu-background-focus-color:var(--google-grey-700);--cr-menu-background-sheen:rgba(255, 255, 255, .06);--cr-separator-line:var(--cr-separator-height) solid rgba(255, 255, 255, .1)}
    </style>
  </template>
`.content);
styleMod.register('pdf-shared');

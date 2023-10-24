import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './signin_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
:host{--scrollbar-background:var(--google-grey-100);--scrollbar-width:4px}a{color:var(--cr-link-color);text-decoration:none}.container{color:var(--cr-primary-text-color);width:448px}.top-title-bar{align-items:center;border-bottom:var(--cr-separator-line);display:flex;font-size:16px;height:52px;padding:0 24px}.action-container{column-gap:8px;display:flex;justify-content:flex-end;padding:var(--action-container-padding)}.custom-scrollbar::-webkit-scrollbar{width:var(--scrollbar-width)}.custom-scrollbar::-webkit-scrollbar-track{border-radius:var(--scrollbar-width)}.custom-scrollbar::-webkit-scrollbar-thumb{background:var(--scrollbar-background);border-radius:var(--scrollbar-width)}.action-container{flex-flow:row-reverse;justify-content:flex-start}@media (prefers-color-scheme:dark){:host{--scrollbar-background:var(--google-grey-800)}}
    </style>
  </template>
`.content);
styleMod.register('signin-shared');

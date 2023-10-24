import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
main{height:100%;width:100%}main:focus,main:focus-visible,main:focus-within{outline:0}
    </style>
  </template>
`.content);
styleMod.register('wallpaper');

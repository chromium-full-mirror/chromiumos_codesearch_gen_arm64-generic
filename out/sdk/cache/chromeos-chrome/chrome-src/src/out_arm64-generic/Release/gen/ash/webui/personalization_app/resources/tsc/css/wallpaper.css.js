import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
main{height:100%;width:100%}main:focus,main:focus-visible,main:focus-within{outline:0}h2.wallpaper-collections-heading{color:var(--cros-sys-secondary);font:var(--cros-button-2-font);height:20px;margin-block-start:0;margin-block-end:0;padding:6px 10px 6px}
    </style>
  </template>
`.content);
styleMod.register('wallpaper');

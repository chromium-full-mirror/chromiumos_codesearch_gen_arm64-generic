import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
#content{height:100%;position:fixed;width:100%;z-index:1}#plugin{display:block;height:100%;position:absolute;width:100%}#sizer{position:absolute;z-index:0}
    </style>
  </template>
`.content);
styleMod.register('pdf-viewer-shared-style');

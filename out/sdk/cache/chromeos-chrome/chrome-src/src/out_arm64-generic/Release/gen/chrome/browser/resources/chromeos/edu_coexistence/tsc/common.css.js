import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/ash/common/cr_elements/cros_color_overrides.css.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_style.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style include="cros-color-overrides cr-shared-style">
:host{--dialog-top-border-size:35px}.signin-frame{height:100%;margin:0;padding:0;width:100%}.template-container{display:flex;flex-direction:column;height:100%;justify-content:flex-start;width:100%}.column-layout{display:flex;flex-direction:column;height:100%}.content-container{display:flex;height:100%;width:100%}.back-button{padding:22px 0 0 22px}@media (orientation:landscape){.template-container{max-height:680px;max-width:1040px}.content-container{flex-direction:row}.buttons-layout{align-items:center;display:flex;justify-content:flex-end;padding-inline-end:32px;width:100%}}@media (orientation:portrait){.template-container{max-height:1040px;max-width:680px}.content-container{flex-direction:column}.buttons-layout{display:flex;justify-content:center;width:100%}}.main[scrollable].can-scroll:not(.is-scrolled):not(.scrolled-to-bottom){background:var(--background-gradient-0)}.main[scrollable].can-scroll.is-scrolled:not(.scrolled-to-bottom){background:var(--background-gradient-0),var(--background-gradient-180)}.main[scrollable].is-scrolled.scrolled-to-bottom{background:var(--background-gradient-180)}.main{height:100%;width:100%}.footer{align-items:center;display:flex;height:115px;width:100%}.signin-frame{background-color:#fff;overflow:hidden}paper-spinner-lite{--spinner-size:25px;display:none;height:var(--spinner-size);width:var(--spinner-size)}paper-spinner-lite[active]{display:inline-block}edu-coexistence-template{align-items:center;display:flex;height:100%;justify-content:center}span[slot=buttons]{display:flex;width:100%}span[slot=main]{display:flex;flex-direction:column;height:100%}edu-coexistence-button[button-type=back]{margin-inline-start:auto}
    </style>
  </template>
`.content);
styleMod.register('common');

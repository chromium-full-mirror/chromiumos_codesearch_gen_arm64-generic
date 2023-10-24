import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/chromeos/cros_color_overrides.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style include="cr-shared-style cros-color-overrides">
:host-context(body.jelly-enabled) cr-dialog::part(dialog){border-radius:20px}@media (prefers-color-scheme:dark){cr-dialog::part(dialog){background-color:var(--cros-bg-color-elevation-3);background-image:initial}}
    </style>
  </template>
`.content);
styleMod.register('firmware-shared');

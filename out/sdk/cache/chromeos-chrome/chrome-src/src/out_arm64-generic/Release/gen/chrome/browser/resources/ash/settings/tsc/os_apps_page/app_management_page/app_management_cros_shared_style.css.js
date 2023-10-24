import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_components/app_management/app_management_shared_style.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style include="cr-shared-style app-management-shared-style">
.card-container{background-color:var(--cros-bg-color)}
    </style>
  </template>
`.content);
styleMod.register('app-management-cros-shared-style');

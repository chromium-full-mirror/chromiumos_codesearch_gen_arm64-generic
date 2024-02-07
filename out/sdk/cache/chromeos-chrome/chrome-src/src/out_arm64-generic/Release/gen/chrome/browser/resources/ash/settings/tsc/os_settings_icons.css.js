import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
cr-icon-button.icon-add-circle{--cr-icon-button-fill-color:var(--cros-button-icon-color-secondary);--cr-icon-image:url(chrome://os-settings/images/icon_add_circle.svg)}cr-icon-button.icon-add-wifi{--cr-icon-button-fill-color:var(--cros-button-icon-color-secondary);--cr-icon-image:url(chrome://os-settings/images/icon_add_wifi.svg)}cr-icon-button.icon-pair-bluetooth{--cr-icon-button-fill-color:var(--cros-button-icon-color-secondary);--cr-icon-image:url(chrome://os-settings/images/icon_pair_bluetooth.svg)}cr-icon-button.icon-add-cellular{--cr-icon-button-fill-color:var(--cros-button-icon-color-secondary);--cr-icon-image:url(chrome://os-settings/images/icon_add_cellular.svg)}
    </style>
  </template>
`.content);
styleMod.register('os-settings-icons');

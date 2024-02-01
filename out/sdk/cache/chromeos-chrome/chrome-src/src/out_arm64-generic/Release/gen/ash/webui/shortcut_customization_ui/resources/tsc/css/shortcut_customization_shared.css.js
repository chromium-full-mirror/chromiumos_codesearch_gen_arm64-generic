import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/chromeos/cros_color_overrides.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style include="cros-color-overrides">
:host{--shortcuts-font-weight-regular:400;--shortcuts-font-weight-medium:500;--shortcuts-font-family-default:"Google Sans",Roboto,sans-serif;--shortcuts-font-size-default:13px;--shortcuts-lock-icon-color:var(--cros-text-color-disabled)}:host-context(body.jelly-enabled){--shortcuts-font-weight-regular:var(--cros-body-2-font-weight);--shortcuts-font-weight-medium:var(--cros-button-2-font-weight);--shortcuts-font-family-default:var(--cros-body-2-font-family);--shortcuts-font-size-default:var(--cros-body-2-font-size);--shortcuts-lock-icon-color:var(--cros-sys-disabled);font:var(--cros-body-2-font)}:host-context(body.jelly-enabled) cr-button{font:var(--cros-button-2-font)}:host-context(body.jelly-enabled) cr-button.action-button{font:var(--cros-button-1-font)}:host-context(body.jelly-enabled) cr-dialog::part(dialog){background-color:var(--cros-bg-color-elevation-3);border-radius:20px;box-shadow:var(--cros-elevation-3-shadow)}iron-icon[icon='shortcut-customization:lock']{--iron-icon-fill-color:var(--shortcuts-lock-icon-color)}.lock-icon-container{align-items:center;display:flex;margin-inline-start:8px}.lock-icon-container[hidden]{display:none}.edit-icon-container{align-items:center;display:flex;margin-inline-start:8px}.edit-icon-container[hidden]{display:none}.edit-button{--cr-icon-button-icon-size:16px;--cr-icon-button-fill-color:var(--cros-text-color-secondary);opacity:0;transition:opacity .3s,transform .1s}
    </style>
  </template>
`.content);
styleMod.register('shortcut-customization-shared');

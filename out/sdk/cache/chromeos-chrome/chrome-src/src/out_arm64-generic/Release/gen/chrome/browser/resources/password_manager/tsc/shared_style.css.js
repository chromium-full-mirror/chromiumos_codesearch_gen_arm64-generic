import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import './shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
.card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow)}cr-link-row[non-clickable]{background-color:var(--cr-card-background-color);cursor:default}.page-title{font-weight:400}.label{min-height:20px}.single-line-label{min-height:var(--section-min-height)}.flex-centered{align-items:center;display:flex}.elide-left{direction:rtl}.elide-left>a{direction:ltr;unicode-bidi:bidi-override}.dialog-title{color:var(--cr-primary-text-color);font-size:15px;font-weight:400;line-height:22px;margin:0;padding-block-end:16px;padding-block-start:16px}.settings-cr-link-row{--cr-icon-button-margin-start:0px}.site-link{color:var(--cr-primary-text-color);display:block;height:auto;line-height:154%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-elide{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}cr-input.password-input::part(input),input.password-input{font-family:'DejaVu Sans Mono',monospace}.input-field{margin-inline-end:34px;--cr-input-padding-start:20px;--cr-input-min-height:40px;--cr-input-error-display:none;--cr-input-border-radius:10px;--cr-icon-button-margin-start:0;--cr-icon-button-margin-end:0}
    </style>
  </template>
`.content);
styleMod.register('shared-style');

import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
:host{display:flex;flex-direction:column}.dialog-title{color:var(--cr-primary-text-color);font-size:15px;font-weight:400;line-height:22px;margin:0;padding-block-end:16px;padding-block-start:16px}.list-with-header>div:first-of-type{border-top:var(--cr-separator-line)}.website-column{align-items:center;display:flex;flex:1}.website-column .text-elide{color:var(--cr-primary-text-color)}.username-column{display:flex;flex:1;margin:0 8px}.password-column{align-items:center;display:flex;flex:1}.password-field{background-color:transparent;border:none;flex:1;height:20px;width:0}.type-column{align-items:center;display:flex;flex:2;overflow:hidden}.ellipses{flex:1;max-width:fit-content;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.elide-left{direction:rtl}.elide-left>span{direction:ltr;unicode-bidi:bidi-override}site-favicon{margin-inline-end:16px;min-width:16px}#leakedPassword,cr-input.password-input::part(input),input.password-input{font-family:'DejaVu Sans Mono',monospace}
    </style>
  </template>
`.content);
styleMod.register('passwords-shared');

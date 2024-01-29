import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
.tab-organization-body{color:var(--color-secondary-foreground);font-size:13px;font-weight:400;line-height:20px}.tab-organization-container{display:flex;flex-direction:column;gap:16px;width:100%}.tab-organization-header{color:var(--cr-primary-text-color);font-size:14px;font-weight:500}.tab-organization-link{color:var(--color-link-foreground-on-bubble-footer);cursor:pointer;display:inline-block;font-size:13px;font-weight:400;outline-color:var(--color-button-foreground);outline-offset:1px;text-decoration:underline;width:fit-content}.tab-organization-text-container{display:flex;flex-direction:column;gap:8px}@keyframes displayOut{0%{height:auto;visibility:visible;position:relative}50%{visibility:visible}100%{height:0;visibility:hidden;position:absolute}}@keyframes displayIn{0%{height:0;visibility:hidden;position:absolute}50%{visibility:hidden}100%{height:auto;visibility:visible;position:relative}}@keyframes fadeOut{0%{opacity:1}100%{opacity:0}}@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}@keyframes slideOut{0%{transform:translateY(0)}100%{transform:translateY(-16px)}}@keyframes slideIn{0%{transform:translateY(16px)}100%{transform:translateY(0)}}
    </style>
  </template>
`.content);
styleMod.register('tab-organization-shared-style');

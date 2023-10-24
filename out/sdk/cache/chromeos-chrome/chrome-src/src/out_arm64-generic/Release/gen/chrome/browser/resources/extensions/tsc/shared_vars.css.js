import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
const template = html `
<custom-style>
  <style>
html{--error-color:var(--google-red-700);--warning-color:rgb(242, 153, 0);--extensions-card-height:160px;--separator-gap:9px;--sidebar-width:256px;--cr-toolbar-field-width:680px}@media (prefers-color-scheme:dark){html{--review-panel-icon-color:rgb(50, 54, 57);--error-color:var(--google-red-300);--warning-color:var(--google-yellow-300)}}
  </style>
</custom-style>
`;
document.head.appendChild(template.content);

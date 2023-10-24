import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
const template = html `
<custom-style>
  <style>
html{--card-max-width:960px;--card-padding-side:32px;--folder-icon-color:#757575;--folder-inactive-color:#5a5a5a;--highlight-color:var(--google-blue-50);--interactive-color:var(--google-blue-500);--iron-icon-height:20px;--iron-icon-width:20px;--min-sidebar-width:256px;--splitter-width:15px}@media (prefers-color-scheme:dark){html{--folder-icon-color:var(--google-grey-500);--folder-inactive-color:var(--google-grey-500);--highlight-color:var(--google-blue-300);--interactive-color:var(--google-blue-300)}}
  </style>
</custom-style>
`;
document.head.appendChild(template.content);

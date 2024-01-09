import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
const template = html `
<style>
html{--card-max-width:960px;--side-bar-width:300px;--toolbar-height:56px;--password-manager-main-basis:calc(var(--cr-centered-card-max-width) /
      var(--cr-centered-card-width-percentage));--control-label-spacing:20px;--section-min-height:48px;--two-line-section-min-height:64px;--error-color:var(--google-red-700)}@media (prefers-color-scheme:dark){html{--error-color:var(--google-red-300)}}
</style>
`;
document.head.appendChild(template.content);

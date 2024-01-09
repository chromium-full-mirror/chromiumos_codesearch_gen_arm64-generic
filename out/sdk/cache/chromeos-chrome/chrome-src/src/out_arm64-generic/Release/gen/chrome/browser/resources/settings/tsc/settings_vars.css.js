import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
const template = html `
<style>
html{--settings-error-color:var(--google-red-700);--iron-icon-fill-color:var(--google-grey-700);--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size);--cr-radio-group-item-padding:0}@media (prefers-color-scheme:dark){html{--iron-icon-fill-color:var(--google-grey-500);--settings-error-color:var(--google-red-300)}}
</style>
`;
document.head.appendChild(template.content);

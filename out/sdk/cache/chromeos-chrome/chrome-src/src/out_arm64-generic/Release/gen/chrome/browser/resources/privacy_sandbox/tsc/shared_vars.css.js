import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
const template = html `
<style>
html{--scrollbar-width:7px;--scrollbar-background:var(--google-grey-200);--privacy-sandbox-dialog-buttons-row-height:64px}@media (prefers-color-scheme:dark){html{--scrollbar-background:var(--google-grey-700)}}
</style>
`;
document.head.appendChild(template.content);

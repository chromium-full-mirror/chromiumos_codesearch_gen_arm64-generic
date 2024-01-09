import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
const template = html `
<style>
html{--iron-icon-height:20px;--iron-icon-width:20px;--viewer-icon-ink-color:rgb(189, 189, 189);--viewer-pdf-toolbar-background-color:rgb(50, 54, 57);--viewer-text-input-selection-color:rgba(255, 255, 255, 0.3)}
</style>
`;
document.head.appendChild(template.content);

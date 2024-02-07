import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_vars.css.js';
const template = html `
<style>
html{--app-management-controlled-by-spacing:var(--cr-controlled-by-spacing);--app-management-font-size:13px;--app-management-line-height:1.54;--card-max-width:676px;--card-min-width:550px;--card-separator:1px solid var(--cros-separator-color);--expanded-permission-row-height:48px;--header-font-weight:500;--header-text-color:var(--cros-text-color-secondary);--permission-icon-padding:20px;--permission-list-item-height:48px;--permission-list-item-with-description-height:64px;--primary-text-color:var(--cros-text-color-primary);--row-item-icon-padding:12px;--row-item-vertical-padding:16px;--secondary-font-weight:400;--secondary-text-color:var(--cros-text-color-secondary);--text-permission-list-row-height:40px;--help-icon-padding:6px;--info-text-row-height:48px;--help-icon-size:20px}
</style>
`;
document.head.appendChild(template.content);

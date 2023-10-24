import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_components/app_management/shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
const template = html `
<custom-style>
  <style>
html{--card-separator:1px solid var(--cros-separator-color);--header-text-color:var(--cros-text-color-secondary);--primary-text-color:var(--cros-text-color-primary);--secondary-text-color:var(--cros-text-color-secondary);--app-management-controlled-by-spacing:var(--cr-controlled-by-spacing)}
  </style>
</custom-style>
`;
document.head.appendChild(template.content);

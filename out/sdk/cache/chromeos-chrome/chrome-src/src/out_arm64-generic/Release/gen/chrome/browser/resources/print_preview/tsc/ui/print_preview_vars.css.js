import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
const template = html `
<custom-style>
  <style>
html{--print-preview-row-height:38px;--print-preview-sidebar-width:384px;--print-preview-title-width:120px;--print-preview-sidebar-margin:24px;--print-preview-dropdown-width:calc(var(--print-preview-sidebar-width)
      - var(--print-preview-title-width)
      - 3 * var(--print-preview-sidebar-margin));--print-preview-settings-border:1px solid var(--google-grey-200);--print-preview-dialog-margin:34px;--cr-form-field-label-height:initial;--cr-form-field-label-line-height:.75rem;--destination-item-height:32px;--preview-area-background-color:var(--google-grey-300);--iron-icon-fill-color:var(--google-grey-700);--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size);--search-icon-size:32px;--throbber-size:16px;--error-status-alert:var(--google-red-600);--error-status-warning:#e37400}@media (prefers-color-scheme:dark){html{--preview-area-background-color:var(--google-grey-700);--print-preview-settings-border:var(--cr-separator-line);--iron-icon-fill-color:var(--google-grey-500);--error-status-alert:var(--google-red-300);--error-status-warning:#fdd663}}
  </style>
</custom-style>
`;
document.head.appendChild(template.content);

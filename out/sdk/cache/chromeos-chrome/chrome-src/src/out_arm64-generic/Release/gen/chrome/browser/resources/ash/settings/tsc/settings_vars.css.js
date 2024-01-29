import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
const template = html `
<style>
html{--settings-error-color:var(--google-red-700);--iron-icon-fill-color:var(--google-grey-700);--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size);--cr-radio-group-item-padding:0;--settings-base-bg-color:var(--cros-sys-app_base_shaded);--settings-menu-width:250px;--settings-menu-item-border-width:2px;--settings-row-min-height:var(--cr-section-min-height);--settings-toolbar-height:var(--cr-toolbar-height);--settings-toolbar-padding-inline-end:10px;--settings-toolbar-padding-inline-start:14px;--settings-toolbar-padding-inline-start-narrow:14px;--settings-toolbar-padding-top:var(--cr-toolbar-padding-top);--settings-toolbar-search-box-height:40px;--settings-toolbar-search-box-width:480px;--settings-toolbar-narrow-search-box-width:680px;--settings-toolbar-search-field-border-radius:20px}html:has(body.revamp-wayfinding-enabled){--settings-base-bg-color:var(--cros-sys-surface3);--settings-menu-item-width:256px;--settings-menu-padding-inline-end:16px;--settings-menu-padding-inline-start:16px;--settings-menu-padding-top:16px;--settings-menu-width:calc(var(--settings-menu-item-width) +
      var(--settings-menu-padding-inline-end) +
      var(--settings-menu-padding-inline-start));--settings-row-min-height:64px;--settings-toolbar-height:72px;--settings-toolbar-padding-inline-end:16px;--settings-toolbar-padding-inline-start:32px;--settings-toolbar-padding-inline-start-narrow:16px;--settings-toolbar-padding-top:0;--settings-toolbar-search-box-height:48px;--settings-toolbar-narrow-search-box-width:512px;--settings-toolbar-search-field-border-radius:24px}@media (prefers-color-scheme:dark){html{--iron-icon-fill-color:var(--google-grey-500);--settings-error-color:var(--google-red-300)}html:has(body.revamp-wayfinding-enabled){--settings-base-bg-color:var(--cros-sys-app_base_shaded)}}
</style>
`;
document.head.appendChild(template.content);

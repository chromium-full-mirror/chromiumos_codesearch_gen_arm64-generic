import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><div hidden$="[[!grantsPerOrigin.editGrants.length]]">
  $i18n{siteSettingsFileSystemSiteListEditHeader}
</div>
<template is="dom-repeat" items="[[grantsPerOrigin.editGrants]]" as="editGrant">
  <file-system-site-entry-item grant="[[editGrant]]" on-revoke-grant="onRevokeGrant_">
  </file-system-site-entry-item>
</template>
  <div hidden$="[[!grantsPerOrigin.viewGrants.length]]">
    $i18n{siteSettingsFileSystemSiteListViewHeader}
  </div>
<template is="dom-repeat" items="[[grantsPerOrigin.viewGrants]]" as="viewGrant">
  <file-system-site-entry-item grant="[[viewGrant]]" on-revoke-grant="onRevokeGrant_">
  </file-system-site-entry-item>
</template><!--_html_template_end_-->`;
}

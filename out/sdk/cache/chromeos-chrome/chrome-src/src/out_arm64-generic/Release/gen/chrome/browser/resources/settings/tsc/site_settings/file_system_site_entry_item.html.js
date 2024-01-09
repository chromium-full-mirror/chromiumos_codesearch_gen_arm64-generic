import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared">.file-system{padding-inline-start:20px;padding-inline-end:20px}</style>
<div class="list-item file-system">
  <div id="fileTypeIcon" class$="cr-icon [[getClassForListItem_(grant)]]">
  </div>
  <div class="site-representation middle text-elide">
    <span class="display-name url-directionality text-elide">
        [[grant.displayName]]
    </span>
  </div>
  <cr-icon-button id="removeGrant" class="icon-delete-gray" on-click="onRemoveGrantClick_" aria-label="$i18n{siteSettingsFileSystemSiteListRemoveGrantLabel}">
  <cr-icon-button>
</cr-icon-button></cr-icon-button></div><!--_html_template_end_-->`;
}

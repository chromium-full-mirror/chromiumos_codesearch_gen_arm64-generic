import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared"></style>
<div class="list-item">
  <cr-icon-button class$="cr-icon [[getClassForListItem_(grant)]]">
  </cr-icon-button>
  <div class="site-representation middle text-elide">
    <span class="display-name url-directionality text-elide">
        [[grant.displayName]]
    </span>
  </div>
  <div class="separator"></div>
  <cr-icon-button id="removeGrant" class="icon-delete-gray" on-click="onRemoveGrantClick_" aria-label="$i18n{siteSettingsFileSystemSiteListRemoveGrantLabel}">
  <cr-icon-button>
</cr-icon-button></cr-icon-button></div><!--_html_template_end_-->`;
}

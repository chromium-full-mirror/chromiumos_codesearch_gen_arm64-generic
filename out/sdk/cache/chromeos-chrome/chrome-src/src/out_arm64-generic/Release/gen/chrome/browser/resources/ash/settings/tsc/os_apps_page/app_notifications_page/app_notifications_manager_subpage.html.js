import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style">#noAppsLabel{text-align:center}</style>

<div id="appNotificationsList" class="hr">
  <template is="dom-repeat" items="[[filteredAppList_]]" as="app" sort="alphabeticalSort_">
    <app-notification-row app="[[app]]"></app-notification-row>
  </template>

  <template is="dom-if" if="[[isAppListEmpty_(filteredAppList_)]]">
    <div id="noAppsLabel" class="cr-secondary-text">
      $i18n{appManagementNoAppsFound}
    </div>
  </template>
</div>
<!--_html_template_end_-->`;
}

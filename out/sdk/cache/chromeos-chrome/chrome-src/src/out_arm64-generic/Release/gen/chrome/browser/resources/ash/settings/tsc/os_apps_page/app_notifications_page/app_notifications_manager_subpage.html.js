import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><div id="appNotificationsList" class="hr">
  <template is="dom-repeat" items="[[appList_]]" as="app" sort="alphabeticalSort_">
    <app-notification-row app="[[app]]"></app-notification-row>
  </template>
</div>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="$i18n{personalizationPageTitle}">
      <cr-link-row id="personalizationHubButton" start-icon="[[getPersonalizationRowIcon_()]]" label="$i18n{personalizationHubTitle}" sub-label="$i18n{personalizationHubSubtitle}" on-click="openPersonalizationHub_" external>
      </cr-link-row>
    </settings-card>
  </div>

</os-settings-animated-pages>
<!--_html_template_end_-->`;
}

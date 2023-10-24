import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">cr-button{white-space:nowrap}</style>
<settings-multidevice-feature-item id="phoneHubCombinedSetupItem" page-content-data="[[pageContentData]]" is-sub-feature>
  <div id="featureName" slot="feature-name">
    [[setupName_]]
  </div>
  <localized-link class="secondary" id="featureSecondary" slot="feature-summary" localized-string="[[setupSummary_]]">
  </localized-link>
  <cr-button slot="feature-controller" on-click="handlePhoneHubSetupClick_" aria-labelledby="featureName" aria-describedby="featureSecondary" disabled="[[getButtonDisabledState_(pageContentData)]]">
    $i18n{multideviceSetupButton}
  </cr-button>
</settings-multidevice-feature-item>
<!--_html_template_end_-->`;
}

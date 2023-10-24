import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<settings-multidevice-feature-item id="phoneHubTaskContinuationItem" feature="[[MultiDeviceFeature.PHONE_HUB_TASK_CONTINUATION]]" page-content-data="[[pageContentData]]" is-sub-feature>
  <template is="dom-if" if="[[!isChromeTabsSyncEnabled_]]" restamp>
    <settings-multidevice-task-continuation-disabled-link class="secondary" id="featureSecondary" slot="feature-summary">
    </settings-multidevice-task-continuation-disabled-link>
    
    <cr-toggle disabled="disabled" slot="feature-controller">
    </cr-toggle>
  </template>
</settings-multidevice-feature-item>
<!--_html_template_end_-->`;
}

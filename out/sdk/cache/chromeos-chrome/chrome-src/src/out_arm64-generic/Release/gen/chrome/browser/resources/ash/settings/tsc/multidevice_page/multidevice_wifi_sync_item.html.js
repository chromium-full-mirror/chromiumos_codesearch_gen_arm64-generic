import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<settings-multidevice-feature-item id="wifiSyncItem" feature="[[MultiDeviceFeature.WIFI_SYNC]]" page-content-data="[[pageContentData]]">
  <template is="dom-if" if="[[!isWifiSyncV1Enabled_]]" restamp>
    <settings-multidevice-wifi-sync-disabled-link class="secondary" id="featureSecondary" slot="feature-summary">
    </settings-multidevice-wifi-sync-disabled-link>
    
    <cr-toggle disabled="true" slot="feature-controller">
    </cr-toggle>
  </template>
</settings-multidevice-feature-item>
<!--_html_template_end_-->`;
}

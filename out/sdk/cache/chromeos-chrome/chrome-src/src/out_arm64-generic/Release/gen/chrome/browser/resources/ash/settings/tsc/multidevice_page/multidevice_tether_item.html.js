import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<settings-multidevice-feature-item page-content-data="[[pageContentData]]" feature="[[MultiDeviceFeature.INSTANT_TETHERING]]" subpage-route="[[routes.INTERNET_NETWORKS]]" subpage-route-url-search-params="[[getTetherNetworkUrlSearchParams_()]]">
    <network-icon slot="icon" aria-hidden="true" show-technology-badge="[[showTechnologyBadge_]]" network-state="[[activeNetworkState_]]" device-state="[[deviceState_]]">
    </network-icon>
    <template is="dom-if" if="[[isRevampWayfindingEnabled_]]">
      <div id="instantTetheringSummary" class="secondary" slot="feature-summary">
        [[getInstantTetheringDescription_(deviceState_, activeNetworkState_)]]
      </div>
    </template>
</settings-multidevice-feature-item>
<!--_html_template_end_-->`;
}

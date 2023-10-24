import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="diagnostics-shared">
</style>
<div id="infoElementContainer">
  <template is="dom-if"
      if="[[isWifiNetwork(network.type)]]">
    <wifi-info id="wifiInfo" network="[[network]]">
    </wifi-info>
  </template>
  <template is="dom-if"
      if="[[isEthernetNetwork(network.type)]]">
    <ethernet-info id="ethernetInfo" network="[[network]]">
    </ethernet-info>
  </template>
  <template is="dom-if"
      if="[[isCellularNetwork(network.type)]]">
    <cellular-info id="cellularInfo" network="[[network]]">
    </cellular-info>
  </template>
</div>
<!--_html_template_end_-->`;
}
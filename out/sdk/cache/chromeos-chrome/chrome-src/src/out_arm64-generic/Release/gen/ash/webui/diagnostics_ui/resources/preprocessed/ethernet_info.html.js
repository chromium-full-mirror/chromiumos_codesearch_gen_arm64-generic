import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="diagnostics-shared">
  :host {
    --divider-horizontal-height: 100%;
  }
</style>
<div id="ethernetInfoContainer" class="horizontal-data-point-container">
  <div class="data-point-container">
    <data-point id="ipAddress" header="[[i18n('networkIpAddressLabel')]]"
        value="[[ipAddress]]"
        orientation="horizontal">
    </data-point>
  </div>
  <div class="divider-horizontal"></div>
  <div class="data-point-container">
    <data-point id="authentication"
        header="[[i18n('networkAuthenticationLabel')]]"
        value="[[authentication]]"
        orientation="horizontal">
    </data-point>
  </div>
</div>
<!--_html_template_end_-->`;
}
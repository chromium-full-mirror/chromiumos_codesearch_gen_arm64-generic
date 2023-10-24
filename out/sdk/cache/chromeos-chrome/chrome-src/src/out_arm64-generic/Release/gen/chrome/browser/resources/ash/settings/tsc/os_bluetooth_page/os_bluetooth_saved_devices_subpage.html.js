import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">#container{padding-inline-end:calc(var(--cr-section-padding) - var(--cr-icon-ripple-padding));padding-inline-start:var(--cr-section-padding)}.device-list{margin-inline-start:32px}</style>
<div id="container">
  <div id="label" class="settings-box-text">
    [[computeSavedDevicesSublabel_(savedDevices_.*, 
    showSavedDevicesErrorLabel_, 
    showSavedDevicesLoadingLabel_, 
    shouldShowNoDevicesLabel_,
    shouldShowDeviceList_)]]
  </div>
  <template is="dom-if" if="[[shouldShowDeviceList_]]" restamp>
    <div class="device-list">
      <os-settings-saved-devices-list id="savedDevicesList" devices="{{savedDevices_}}">
      </os-settings-saved-devices-list>
    </div>
  </template>
</div>
<!--_html_template_end_-->`;
}

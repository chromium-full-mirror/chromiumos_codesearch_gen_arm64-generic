import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<app-management-dom-switch id="viewSelector" route="[[getSelectedRouteId_(app_)]]">
  <template>
    <app-management-pwa-detail-view route-id="pwa-detail-view">
    </app-management-pwa-detail-view>
    <app-management-arc-detail-view route-id="arc-detail-view" prefs="{{prefs}}">
    </app-management-arc-detail-view>
    <app-management-chrome-app-detail-view route-id="chrome-app-detail-view">
    </app-management-chrome-app-detail-view>
    <app-management-plugin-vm-detail-view route-id="plugin-vm-detail-view">
    </app-management-plugin-vm-detail-view>
    <app-management-borealis-detail-view route-id="borealis-detail-view">
    </app-management-borealis-detail-view>
  </template>
</app-management-dom-switch>
<!--_html_template_end_-->`;
}

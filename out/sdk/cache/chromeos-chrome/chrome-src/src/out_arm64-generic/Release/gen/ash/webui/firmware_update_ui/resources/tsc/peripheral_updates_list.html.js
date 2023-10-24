import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="firmware-shared-fonts firmware-shared"></style>
<div id="container">
  <template is="dom-if" if="[[!hasFirmwareUpdates(firmwareUpdates)]]">
    <div id="upToDateText">[[i18n('upToDate')]]</div>
  </template>
  <dom-repeat id="updateList" items="[[firmwareUpdates]]" as="update">
    <template>
      <update-card update="[[update]]" disabled="[[!hasCheckedInitialInflightProgress]]">
      </update-card>
    </template>
  </dom-repeat>
</div>
<!--_html_template_end_-->`;
}

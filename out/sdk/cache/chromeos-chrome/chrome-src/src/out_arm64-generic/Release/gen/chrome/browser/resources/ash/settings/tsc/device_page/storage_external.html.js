import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">h2{padding-inline-start:var(--cr-section-padding)}</style>
<div class="settings-box first">
  <localized-link localized-string="[[i18nAdvanced('storageAndroidAppsExternalDrivesNote')]]">
  </localized-link>
</div>
<h2>[[computeStorageListHeader_(externalStorages_)]]</h2>
<iron-list id="removableDevices" preserve-focus items="[[externalStorages_]]">
  <template>
    <storage-external-entry uuid="[[item.uuid]]" label="[[item.label]]" prefs="{{prefs}}">
    </storage-external-entry>
  </template>
</iron-list>
<!--_html_template_end_-->`;
}

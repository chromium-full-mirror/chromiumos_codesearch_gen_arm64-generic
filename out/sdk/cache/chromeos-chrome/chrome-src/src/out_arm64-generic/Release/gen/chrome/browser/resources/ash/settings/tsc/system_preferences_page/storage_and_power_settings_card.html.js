import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>

<settings-card header-text="[[getHeaderText_()]]">
  <template is="dom-if" if="[[shouldShowStorageRow_]]">
    <cr-link-row id="storageRow" label="$i18n{storageTitle}" on-click="showStorageSubpage_" role-description="$i18n{subpageArrowRoleDescription}">
    </cr-link-row>
  </template>
  <cr-link-row id="powerRow" class="hr" label="$i18n{powerTitle}" on-click="showPowerSubpage_" role-description="$i18n{subpageArrowRoleDescription}">
  </cr-link-row>
</settings-card>
<!--_html_template_end_-->`;
}

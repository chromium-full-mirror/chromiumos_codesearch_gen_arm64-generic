import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>

<settings-card header-text="$i18n{printingPageTitle}">
  <cr-link-row id="cupsPrintersRow" start-icon="[[rowIcons_.print]]" label="$i18n{cupsPrintTitle}" sub-label="[[getCupsPrintDescription_()]]" on-click="onClickCupsPrint_" role-description="$i18n{subpageArrowRoleDescription}">
  </cr-link-row>
  <template is="dom-if" if="[[!isRevampWayfindingEnabled_]]">
    <cr-link-row id="printManagement" class="hr" on-click="onClickPrintManagement_" label="$i18n{printJobsTitle}" sub-label="$i18n{printJobsSublabel}" external deep-link-focus-id$="[[Setting.kPrintJobs]]">
    </cr-link-row>
  </template>
  <cr-link-row id="scanningApp" class="hr" start-icon="[[rowIcons_.scan]]" on-click="onClickScanningApp_" label="$i18n{scanAppTitle}" sub-label="$i18n{scanAppSublabel}" external deep-link-focus-id$="[[Setting.kScanningApp]]">
  </cr-link-row>
</settings-card><!--_html_template_end_-->`;
}

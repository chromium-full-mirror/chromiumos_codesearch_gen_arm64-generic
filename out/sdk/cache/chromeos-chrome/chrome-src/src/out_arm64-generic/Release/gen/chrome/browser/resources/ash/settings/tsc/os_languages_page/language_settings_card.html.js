import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>

<settings-card header-text="[[getHeaderText_()]]">
  <cr-link-row id="languagesRow" start-icon="[[rowIcons_.languages]]" label="$i18n{languagesPageTitle}" sub-label="[[getLanguageDisplayName_(
          languages.prospectiveUILanguage, languageHelper)]]" on-click="onLanguagesV2Click_" role-description="$i18n{subpageArrowRoleDescription}">
  </cr-link-row>
  <template is="dom-if" if="[[!isRevampWayfindingEnabled_]]">
    <cr-link-row id="inputRow" class="hr" label="$i18n{inputPageTitle}" sub-label="[[getInputMethodDisplayName_(
          languages.inputMethods.currentId, languageHelper)]]" on-click="onInputClick_" role-description="$i18n{subpageArrowRoleDescription}">
    </cr-link-row>
  </template>
</settings-card>
<!--_html_template_end_-->`;
}

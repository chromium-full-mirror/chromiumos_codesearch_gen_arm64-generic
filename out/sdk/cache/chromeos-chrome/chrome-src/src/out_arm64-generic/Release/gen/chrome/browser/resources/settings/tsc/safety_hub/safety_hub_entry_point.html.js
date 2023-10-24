import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style"></style>



<settings-safety-hub-module class="cr-row first" id="module" header$="[[headerString_]]" subheader$="[[subheaderString_]]" header-icon="settings:shield-with-heart">
  <cr-button id="button" on-click="onClick_" slot="button-container" class$="[[buttonClass_]]">
    $i18n{safetyHubEntryPointButton}
  </cr-button>
</settings-safety-hub-module>
<!--_html_template_end_-->`;
}

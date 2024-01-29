import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared md-select"></style>

<cr-link-row id="browserSearchSettingsLink" label="$i18n{osSearchEngineLabel}" sub-label="[[currentSearchEngine_.name]]" on-click="onSearchEngineLinkClick_" external>
</cr-link-row>
<!--_html_template_end_-->`;
}

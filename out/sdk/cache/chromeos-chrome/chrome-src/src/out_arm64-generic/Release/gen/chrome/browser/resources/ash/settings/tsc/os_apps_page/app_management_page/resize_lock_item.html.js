import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{cursor:pointer}</style>
<app-management-toggle-row id="toggleRow" label="$i18n{appManagementPresetWindowSizesLabel}" value="[[getValue_(app)]]" description="$i18n{appManagementPresetWindowSizesText}">
</app-management-toggle-row>
<!--_html_template_end_-->`;
}

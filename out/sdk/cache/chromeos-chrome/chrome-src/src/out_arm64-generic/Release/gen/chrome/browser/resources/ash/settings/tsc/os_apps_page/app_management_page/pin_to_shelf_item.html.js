import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host(:not([disabled])){cursor:pointer}</style>
<app-management-toggle-row id="toggleRow" label="$i18n{appManagementPinToShelfLabel}" managed="[[isManaged_(app)]]" value="[[getValue_(app)]]">
</app-management-toggle-row>
<!--_html_template_end_-->`;
}

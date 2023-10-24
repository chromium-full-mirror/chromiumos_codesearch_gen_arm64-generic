import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">settings-toggle-button{margin-inline-end:var(--cr-section-padding);margin-inline-start:var(--cr-section-indent-padding);padding-inline-end:0;padding-inline-start:0}</style>
<settings-toggle-button class="hr" pref="{{visiblePref_}}" label="[[label]]" on-settings-boolean-control-change="onVisibleChange_">
</settings-toggle-button>
<!--_html_template_end_-->`;
}

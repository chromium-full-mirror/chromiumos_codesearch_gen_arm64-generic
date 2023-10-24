import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared"></style>
<cr-toggle id="toggle" aria-label$="[[getToggleA11yLabel_(feature)]]" checked="{{checked_}}" disabled="[[!isFeatureStateEditable(feature, pageContentData)]]" on-change="toggleFeature">
</cr-toggle>
<!--_html_template_end_-->`;
}

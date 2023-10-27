import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="common md-select">.ambient-subpage-element-title{margin-bottom:0}.md-select{margin-block-start:20px;margin-inline-end:8px}</style>
<div class="ambient-toggle-row">
  <h3 class="ambient-subpage-element-title">
    $i18n{ambientModeDurationTitle}
  </h3>
  <select id="durationOptions" class="md-select" on-change="onOptionChanged_">
    <template is="dom-repeat" items="[[options_]]" as="option">
      <option value="[[option]]" selected="[[isEqual_(option, selectedDuration_)]]">
        [[getDurationLabel_(option)]]
      </option>
    </template>
  </select>
</div>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared md-select"></style>
<label class="cr-form-field-label">Container</label>
<select id="selectContainer" class="md-select" value="containerLabel_(containerId)" on-change="onSelectContainer_">
    <template is="dom-repeat" items="[[containers]]">
      <option value="[[item.id]]">
        [[containerLabel_(item.id)]]
      </option>
    </template>
</select>
<!--_html_template_end_-->`;
}

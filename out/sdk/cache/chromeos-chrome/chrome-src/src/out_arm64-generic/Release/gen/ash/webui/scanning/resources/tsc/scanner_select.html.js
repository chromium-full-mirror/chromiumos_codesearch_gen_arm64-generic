import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="scanning-shared"></style>
<scan-settings-section>
  <span id="scannerLabel" slot="label" aria-hidden="true">
    [[i18n('scannerDropdownLabel')]]
  </span>
  <div slot="settings">
    <select id="scannerSelect" class="md-select" value="{{selectedScannerId::change}}" disabled="[[disabled]]" aria-labelledby="scannerLabel">
      <template is="dom-repeat" items="[[scanners]]" as="scanner">
        <option value="[[getTokenAsString(scanner)]]">
          [[getScannerDisplayName(scanner)]]
        </option>
      </template>
    </select>
  </div>
</scan-settings-section>
<!--_html_template_end_-->`;
}

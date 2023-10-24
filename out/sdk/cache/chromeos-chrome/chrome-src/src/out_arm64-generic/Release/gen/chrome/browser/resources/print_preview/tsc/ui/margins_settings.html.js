import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="print-preview-shared md-select"></style>
<print-preview-settings-section>
  <span id="margins-label" slot="title">$i18n{marginsLabel}</span>
  <div slot="controls">
    <select class="md-select" aria-labelledby="margins-label" disabled$="[[marginsDisabled_]]" value="{{selectedValue::change}}">
      
      <option value="[[marginsTypeEnum_.DEFAULT]]" selected="selected">
        $i18n{defaultMargins}
      </option>
      <option value="[[marginsTypeEnum_.NO_MARGINS]]">
        $i18n{noMargins}
      </option>
      <option value="[[marginsTypeEnum_.MINIMUM]]">
        $i18n{minimumMargins}
      </option>
      <option value="[[marginsTypeEnum_.CUSTOM]]">
        $i18n{customMargins}
      </option>
    </select>
  </div>
</print-preview-settings-section>
<!--_html_template_end_-->`;
}

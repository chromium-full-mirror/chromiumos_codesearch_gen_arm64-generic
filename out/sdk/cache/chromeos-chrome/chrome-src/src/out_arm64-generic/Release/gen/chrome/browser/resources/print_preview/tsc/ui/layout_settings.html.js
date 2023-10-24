import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="print-preview-shared md-select"></style>
<print-preview-settings-section>
  <span id="layout-label" slot="title">$i18n{layoutLabel}</span>
  <div slot="controls">
    <select class="md-select" aria-labelledby="layout-label" disabled$="[[disabled]]" value="{{selectedValue::change}}">
      <option value="portrait" selected="selected">$i18n{optionPortrait}</option>
      <option value="landscape">$i18n{optionLandscape}</option>
    </select>
  </div>
</print-preview-settings-section>
<!--_html_template_end_-->`;
}

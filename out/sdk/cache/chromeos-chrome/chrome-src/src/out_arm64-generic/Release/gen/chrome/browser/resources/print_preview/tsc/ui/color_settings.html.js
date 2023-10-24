import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="print-preview-shared md-select"></style>
<print-preview-settings-section>
  <span id="color-label" slot="title">$i18n{optionColor}</span>
  <div slot="controls">
    <select class="md-select" aria-labelledby="color-label" disabled$="[[disabled_]]" value="{{selectedValue::change}}">
      <option value="bw" selected="selected">$i18n{optionBw}</option>
      <option value="color">$i18n{optionColor}</option>
    </select>
  </div>
</print-preview-settings-section>
<!--_html_template_end_-->`;
}

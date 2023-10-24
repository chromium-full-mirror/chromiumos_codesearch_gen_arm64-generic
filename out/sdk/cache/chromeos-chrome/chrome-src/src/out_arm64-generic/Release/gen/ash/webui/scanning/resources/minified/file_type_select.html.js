import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="scanning-shared"></style>
<scan-settings-section>
  <span id="fileTypeLabel" slot="label" aria-hidden="true">
    [[i18n('fileTypeDropdownLabel')]]
  </span>
  <div slot="settings">
    <select id="fileTypeSelect" class="md-select" value="{{selectedFileType::change}}" disabled="[[disabled]]" aria-labelledby="fileTypeLabel">
      
      <option value="0">[[i18n('jpgOptionText')]]</option>
      <option value="2">[[i18n('pngOptionText')]]</option>
      <option value="1" selected="selected">[[i18n('pdfOptionText')]]</option>
    </select>
  </div>
</scan-settings-section>
<!--_html_template_end_-->`}
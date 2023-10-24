import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="scanning-shared"></style>
<scan-settings-section>
  <span id="scanToLabel" slot="label" aria-hidden="true">
    [[i18n('scanToDropdownLabel')]]
  </span>
  <div slot="settings">
    <select id="scanToSelect" class="md-select" disabled="[[disabled]]" on-change="onSelectFolder" aria-labelledby="scanToLabel">
      <option selected="selected">
        [[selectedFolder]]
      </option>
      <option>
        [[i18n('selectFolderOption')]]
      </option>
    </select>
  </div>
</scan-settings-section>
<!--_html_template_end_-->`}
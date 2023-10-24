import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="scanning-shared"></style>
<scan-settings-section>
  <span id="pageSizeLabel" slot="label" aria-hidden="true">
    [[i18n('pageSizeDropdownLabel')]]
  </span>
  <div slot="settings">
    <select id="pageSizeSelect" class="md-select" value="{{selectedOption::change}}" disabled="[[disabled]]" aria-labelledby="pageSizeLabel">
      <template is="dom-repeat" items="[[options]]" as="pageSize">
        <option value="[[pageSize]]" selected$="[[isDefaultOption(pageSize)]]">
          [[getPageSizeAsString(pageSize)]]
        </option>
      </template>
    </select>
  </div>
</scan-settings-section>
<!--_html_template_end_-->`}
import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="scanning-shared"></style>
<scan-settings-section>
  <span id="resolutionLabel" slot="label" aria-hidden="true">
    [[i18n('resolutionDropdownLabel')]]
  </span>
  <div slot="settings">
    <select id="resolutionSelect" class="md-select" value="{{selectedOption::change}}" disabled="[[disabled]]" aria-labelledby="resolutionLabel">
      <template is="dom-repeat" items="[[options]]" as="resolution">
        <option value="[[resolution]]" selected$="[[isDefaultOption(resolution)]]">
          [[getResolutionString(resolution)]]
        </option>
      </template>
    </select>
  </div>
</scan-settings-section>
<!--_html_template_end_-->`}
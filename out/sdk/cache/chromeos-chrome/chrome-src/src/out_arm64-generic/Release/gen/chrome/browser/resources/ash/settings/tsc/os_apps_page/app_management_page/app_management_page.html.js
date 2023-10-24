import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<div id="mainContainer">
  <app-management-main-view search-term="[[searchTerm]]">
  </app-management-main-view>
</div>
<!--_html_template_end_-->`;
}

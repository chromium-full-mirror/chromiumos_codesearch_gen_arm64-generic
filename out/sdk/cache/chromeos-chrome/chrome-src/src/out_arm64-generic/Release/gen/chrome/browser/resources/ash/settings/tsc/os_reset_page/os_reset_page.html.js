import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <reset-settings-card></reset-settings-card>
  </div>
</os-settings-animated-pages>
<!--_html_template_end_-->`;
}

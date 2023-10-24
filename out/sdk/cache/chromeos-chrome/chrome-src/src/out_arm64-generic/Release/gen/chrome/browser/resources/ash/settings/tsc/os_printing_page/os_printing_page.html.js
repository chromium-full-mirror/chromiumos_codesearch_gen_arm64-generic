import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <printing-settings-card></printing-settings-card>
  </div>

  <template is="dom-if" route-path="/cupsPrinters">
    <os-settings-subpage page-title="$i18n{cupsPrintTitle}" search-label="$i18n{searchLabel}" search-term="{{searchTerm}}">
      <settings-cups-printers search-term="{{searchTerm}}" prefs="{{prefs}}">
      </settings-cups-printers>
    </os-settings-subpage>
  </template>
</os-settings-animated-pages>
<!--_html_template_end_-->`;
}

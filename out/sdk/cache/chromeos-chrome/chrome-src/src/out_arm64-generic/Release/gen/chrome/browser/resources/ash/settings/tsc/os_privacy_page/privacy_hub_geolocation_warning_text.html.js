import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">#container{display:inline-flex;width:inherit;margin-top:5px;text-align:left}#warningIcon{margin-right:5px}</style>
<div id="container">
  <iron-icon id="warningIcon" icon="cr20:warning"></iron-icon>
  <localized-link on-link-clicked="launchGeolocationDialog_" localized-string="[[warningTextWithAnchor]]">
  </localized-link>
</div>
<!--_html_template_end_-->`;
}

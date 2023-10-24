import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared input-device-settings-shared">.settings-box{justify-content:space-between;padding-inline-start:0}</style>

<div class="settings-box" id="fkeyRow">
  <div>
    <div class="start key-container">
      <div id="keyLabel" aria-hidden="true">[[keyLabel]]</div>
    </div>
  </div>
  <settings-dropdown-menu id="keyDropdown" label="[[keyLabel]]" pref="{{pref}}" menu-options="[[shortcutOptions]]">
  </settings-dropdown-menu>
</div><!--_html_template_end_-->`;
}

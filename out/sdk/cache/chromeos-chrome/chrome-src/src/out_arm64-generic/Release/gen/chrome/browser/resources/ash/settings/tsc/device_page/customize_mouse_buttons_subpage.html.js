import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared input-device-settings-shared">#mouseSwapToggleButton{border-bottom:var(--cr-separator-line)}</style>
<settings-toggle-button id="mouseSwapToggleButton" aria-describedby="description" label="$i18n{mouseSwapButtonsLabel}" pref="{{primaryRightPref_}}">
</settings-toggle-button>
<div id="description" class="subpage-description">
  [[getDescription_(selectedMouse.*)]]
</div>
<customize-buttons-subsection button-remapping-list="{{selectedMouse.settings.buttonRemappings}}" action-list$="[[buttonActionList_]]">
</customize-buttons-subsection>
<!--_html_template_end_-->`;
}

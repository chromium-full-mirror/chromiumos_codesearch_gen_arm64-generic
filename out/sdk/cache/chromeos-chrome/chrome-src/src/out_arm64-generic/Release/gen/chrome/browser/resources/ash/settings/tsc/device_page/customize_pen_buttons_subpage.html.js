import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared input-device-settings-shared"></style>
<div id="description" class="subpage-description">
  [[getDescription_(selectedTablet.*)]]
</div>
<customize-buttons-subsection button-remapping-list="{{selectedTablet.settings.penButtonRemappings}}" action-list$="[[buttonActionList_]]">
</customize-buttons-subsection>
<!--_html_template_end_-->`;
}

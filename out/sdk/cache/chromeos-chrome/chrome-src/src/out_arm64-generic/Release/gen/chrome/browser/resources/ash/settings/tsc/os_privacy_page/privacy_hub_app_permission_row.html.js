import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">#container{align-items:center;display:flex;height:48px;width:100%}#container:hover[actionable]{background-color:var(--cr-hover-background-color)}#appData{align-items:center;display:flex;flex-direction:row;width:100%}#appIcon{height:32px;margin-inline-end:20px;width:32px}cr-icon-button,cr-policy-indicator{margin-inline-end:var(--cr-controlled-by-spacing)}</style>
<div id="container" actionable$="[[!isPermissionManaged_]]" on-click="onPermissionRowClick_">
  <div id="appData">
    <img id="appIcon" src="chrome://app-icon/[[app.id]]/64" alt="[[app.name]] app icon." aria-hidden="true">
    <div id="appNameAndPermissionText">
      <div id="appName">[[app.name]]</div>
      <div id="permissionText" class="secondary">[[permissionText_]]</div>
    </div>
  </div>
  <template is="dom-if" if="[[isPermissionManaged_]]" restamp>
    <cr-policy-indicator indicator-type="devicePolicy"></cr-policy-indicator>
  </template>
  <template is="dom-if" if="[[shouldRedirectToAndroidSettings_]]" restamp>
    <cr-icon-button iron-icon="cr:open-in-new"></cr-icon-button>
  </template>
  <cr-toggle id="permissionToggle" checked="[[checked_]]" on-click="onPermissionRowClick_" disabled="[[shouldDisableToggle_]]" aria-labelledby="appName">
  </cr-toggle>
</div>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style app-management-cros-shared-style">.app-management-item-arrow{margin-inline-end:8px}#noAppsLabel{text-align:center}</style>

<div id="appList">
  <template is="dom-repeat" items="[[appList_]]" as="app">
    <app-management-app-item app="[[app]]">
      <cr-icon-button slot="right-content" id$="app-subpage-button-[[app.id]]" class="subpage-arrow app-management-item-arrow" aria-label$="[[app.title]]" role="link" actionable>
      </cr-icon-button>
    </app-management-app-item>
  </template>
</div>

<template is="dom-if" if="[[isAppListEmpty_(appList_)]]">
  <div id="noAppsLabel" class="cr-secondary-text">
    $i18n{appManagementNoAppsFound}
  </div>
</template>
<!--_html_template_end_-->`;
}

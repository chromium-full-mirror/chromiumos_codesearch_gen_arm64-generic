import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="app-management-shared-style">:host{cursor:pointer}#appContent{padding:0}</style>
<cr-link-row id="appContent" label="[[i18n('appManagementAppContentLabel')]]" sub-label="[[i18n('appManagementAppContentSublabel')]]" on-click="onAppContentClick_">
</cr-link-row>
<template is="dom-if" if="[[showAppContentDialog]]" restamp>
  <app-management-app-content-dialog id="appContentDialog" app="[[app]]" on-close="onAppContentDialogClose_">
  </app-management-app-content-dialog>
</template>
<!--_html_template_end_-->`;
}

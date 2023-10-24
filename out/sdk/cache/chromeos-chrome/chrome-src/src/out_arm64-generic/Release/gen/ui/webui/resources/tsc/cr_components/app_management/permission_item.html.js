import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="app-management-shared-style">:host{align-items:center;display:flex;justify-content:space-between}:host(:not([disabled_])){cursor:pointer}:host(:not([available_])){display:none}</style>

<template is="dom-if" if="[[available_]]">
  <app-management-toggle-row id="toggle-row" icon="[[icon]]" label="[[permissionLabel]]" managed="[[isManaged_(app, permissionType)]]" disabled="[[isDisabled_(app, permissionType)]]" value="[[getValue_(app, permissionType)]]" aria-description="Click to toggle [[permissionLabel]] permissions." i18n-aria-descrirption="Label for toggle button to change [[permissionLabel]] permissions.">
  </app-management-toggle-row>
</template>
<!--_html_template_end_-->`;
}

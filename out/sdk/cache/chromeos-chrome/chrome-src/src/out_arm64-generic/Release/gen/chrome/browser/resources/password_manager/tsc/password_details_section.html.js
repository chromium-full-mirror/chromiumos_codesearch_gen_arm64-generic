import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="shared-style cr-shared-style">#header{align-items:center;display:grid;grid-template-columns:auto auto 1fr;margin-bottom:28px}#backButton{--cr-icon-button-margin-end:6px;--cr-icon-button-margin-start:0px}#favicon{min-width:20px;padding-inline-end:12px;--site-favicon-height:20px;--site-favicon-width:20px}#title{line-height:normal}</style>
<div id="header">
  <cr-icon-button class="icon-arrow-back" id="backButton" on-click="navigateBack_" aria-label="$i18n{backToPasswords}">
  </cr-icon-button>
  
  <site-favicon id="favicon" url="[[selectedGroup_.iconUrl]]" domain="[[selectedGroup_.name]]" aria-hidden="true">
  </site-favicon>
  <h2 id="title" class="page-title text-elide">[[selectedGroup_.name]]</h2>
</div>
<template is="dom-if" if="[[selectedGroup_.name]]">
  <template is="dom-repeat" initial-count="10" items="[[selectedGroup_.entries]]">
    <template is="dom-if" if="[[item.isPasskey]]">
      <passkey-details-card passkey="[[item]]"></passkey-details-card>
    </template>
    <template is="dom-if" if="[[!item.isPasskey]]">
      <password-details-card password="[[item]]" prefs="{{prefs}}" group-name="[[selectedGroup_.name]]" icon-url="[[selectedGroup_.iconUrl]]" is-using-account-store="[[isAccountStoreUser]]">
      </password-details-card>
    </template>
  </template>
</template>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared"></style>

<style>h2:first-of-type{padding-top:0}</style>

<div class="cr-row first">
  <div class="flex cr-padded-text">
    <h2>$i18n{securityKeysPhonesYourDevices}</h2>
    <div class="secondary">$i18n{securityKeysPhonesSyncedDesc}</div>
  </div>
</div>

<security-keys-phones-list id="syncedPhonesList" immutable phones="[[syncedPhones_]]">
</security-keys-phones-list>

<div class="cr-row first">
  <div class="flex cr-padded-text">
    <h2>$i18n{securityKeysPhonesLinkedDevices}</h2>
    <div class="secondary">$i18n{securityKeysPhonesLinkedDesc}</div>
  </div>
</div>

<security-keys-phones-list id="linkedPhonesList" phones="[[linkedPhones_]]">
</security-keys-phones-list>

<template is="dom-if" if="[[showDialog_]]" restamp>
  <security-keys-phones-dialog name="[[dialogName_]]" public-key="[[dialogPublicKey_]]" on-close="onDialogClose_">
  </security-keys-phones-dialog>
</template>
<!--_html_template_end_-->`;
}

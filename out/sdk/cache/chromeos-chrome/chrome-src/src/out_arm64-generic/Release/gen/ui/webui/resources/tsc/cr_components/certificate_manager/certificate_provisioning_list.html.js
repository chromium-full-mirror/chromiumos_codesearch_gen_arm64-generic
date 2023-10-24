import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style iron-flex ">.header-box{align-items:center;display:flex;margin-top:16px;min-height:24px;padding:0 20px}.hidden{display:none}</style>

<template is="dom-if" if="[[showProvisioningDetailsDialog_]]" restamp>
  <certificate-provisioning-details-dialog model="[[provisioningDetailsDialogModel_]]" on-close="onDialogClose_">
  </certificate-provisioning-details-dialog>
</template>

<div class="header-box" aria-role="heading" aria-labelledby="headingLabel" hidden="[[!hasCertificateProvisioningEntries_(provisioningProcesses_)]]">
  <span id="headingLabel" class="flex">
    [[i18n('certificateProvisioningListHeader')]]
  </span>
</div>
<template is="dom-repeat" items="[[provisioningProcesses_]]">
  <certificate-provisioning-entry model="[[item]]">
  </certificate-provisioning-entry>
</template>
<!--_html_template_end_-->`;
}

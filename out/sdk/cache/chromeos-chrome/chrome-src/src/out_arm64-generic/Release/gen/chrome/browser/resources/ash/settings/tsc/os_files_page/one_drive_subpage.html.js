import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>

<div class="settings-box two-line first">
  <div id="signedInAsLabel" class="start" inner-h-t-m-l="[[signedInAsLabel_(connectionState_)]]">
  </div>
  <cr-button id="oneDriveConnectDisconnect" on-click="onConnectDisconnectButtonClick_" role="button" disabled$="[[isLoading_(connectionState_)]]">
    [[connectDisconnectButtonLabel_(connectionState_)]]
  </cr-button>
</div>
<template is="dom-if" if="[[isConnected_(connectionState_)]]">
  <cr-link-row id="openOneDriveFolder" class="hr" on-click="onOpenOneDriveFolderClick_" label="$i18n{openOneDriveFolder}" external>
  </cr-link-row>
</template>

<div class="hr"></div><!--_html_template_end_-->`;
}

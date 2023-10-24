import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<template is="dom-if" if="[[shouldShowDotsMenuButton_(deviceState)]]" restamp>
  <cr-icon-button id="moreNetworkMenuButton" class="icon-more-vert" title="$i18n{moreActions}" on-click="onDotsClick_">
  </cr-icon-button>
</template>
<cr-lazy-render id="menu">
  <template>
    <cr-action-menu>
      <button id="deviceInfoMenuItem" class="dropdown-item" on-click="onShowDeviceInfoClick_" role="menuitem">
        $i18n{deviceInfoPopupMenuItemTitle}
      </button>
    </cr-action-menu>
  </template>
</cr-lazy-render>
<template is="dom-if" if="[[showDeviceNetworkInfoDialog_]]" restamp>
  <network-device-info-dialog on-close="onCloseDeviceNetworkInfoDialog_" euicc="[[euicc_]]" device-state="[[deviceState]]">
  </network-device-info-dialog>
</template><!--_html_template_end_-->`;
}

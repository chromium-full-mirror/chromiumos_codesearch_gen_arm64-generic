import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">.secondary{padding-top:3px}.device-icon{height:24px;width:24px}</style>
<div focus-row-container>
  <div class="list-item" focus-row-control focus-type="rowWrapper" role="button" selectable aria-label="[[getAriaLabel_(device, itemIndex, listSize)]]">
    <div class="image-wrapper">
      <template is="dom-if" if="[[!getImageSrc_(device)]]" restamp>
        
        <iron-icon id="noDeviceImage" class="device-icon" icon="os-settings:headset"></iron-icon>
      </template>
      <template is="dom-if" if="[[getImageSrc_(device)]]" restamp>
        <img id="deviceImage" class="device-icon" src="[[getImageSrc_(device)]]">
      </template>
    </div>
    <div class="middle" aria-hidden="true">
      <div id="deviceName">[[getDeviceNameUnsafe_(device)]]</div>
    </div>
    <div>
      <cr-icon-button class="icon-more-vert" focus-row-control focus-type="subpageButton" tabindex$="[[tabindex]]" on-click="onMenuButtonClick_" aria-label="[[getSubpageButtonA11yLabel_(device)]]">
      </cr-icon-button>
    </div>
  </div>
</div>
<cr-action-menu id="dotsMenu" role-description="$i18n{menu}">
  <button id="removeButton" class="dropdown-item" on-click="onRemoveClick_">
    $i18n{savedDevicesRemove}
  </button>
</cr-action-menu>

<template is="dom-if" if="[[shouldShowRemoveSavedDeviceDialog_]]" restamp>
  <os-settings-bluetooth-remove-saved-device-dialog id="removeDeviceDialog" device_="[[device]]" on-close="onCloseRemoveDeviceDialog_">
  </os-settings-bluetooth-remove-saved-device-dialog>
</template>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<cr-link-row class="hr" label="$i18n{guestOsSharedUsbDevicesLabel}" id="bruschettaSharedUsbDevicesRow" on-click="onSharedUsbDevicesClick_" role-description="$i18n{subpageArrowRoleDescription}">
</cr-link-row>

<cr-link-row class="hr" label="$i18n{guestOsSharedPaths}" id="bruschettaSharedPathsRow" on-click="onSharedPathsClick_" role-description="$i18n{subpageArrowRoleDescription}">
</cr-link-row>

<div id="remove" class="settings-box">
  <div id="removeBruschettaLabel" class="start" aria-hidden="true">
    $i18n{bruschettaRemove}
  </div>
  <cr-button on-click="onRemoveClick_" aria-label="$i18n{bruschettaRemoveButton}" aria-describedby="removeBruschettaLabel">
    $i18n{bruschettaRemoveButton}
  </cr-button>
</div>
<!--_html_template_end_-->`;
}

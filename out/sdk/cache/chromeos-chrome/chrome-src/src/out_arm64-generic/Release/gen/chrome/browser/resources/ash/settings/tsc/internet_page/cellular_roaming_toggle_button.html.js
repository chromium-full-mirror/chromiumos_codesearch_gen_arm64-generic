import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">#cellularRoamingToggle{display:flex;justify-content:center;min-height:var(--cr-section-two-line-min-height)}#cellularRoamingToggle:not([disabled]):hover{background-color:var(--cr-hover-background-color)}#cellularRoamingToggle:not([disabled]):active{background-color:var(--cr-active-background-color)}</style>
<template is="dom-if" if="[[showPerNetworkAllowRoamingToggle_(isRoamingAllowedForNetwork_)]]">
    <network-config-toggle id="cellularRoamingToggle" class="settings-box" policy-on-left property="[[managedProperties.typeProperties.cellular.allowRoaming]]" label="$i18n{networkAllowDataRoaming}" sub-label="[[getRoamingDetails_(managedProperties.typeProperties.cellular.allowRoaming.*, prefs.cros.signed.data_roaming_enabled)]]" checked="{{isRoamingAllowedForNetwork_}}" disabled="[[isPerNetworkToggleDisabled_(managedProperties.typeProperties.cellular.allowRoaming.*, disabled, prefs.cros.signed.data_roaming_enabled)]]">
    </network-config-toggle>
</template>
<!--_html_template_end_-->`;
}

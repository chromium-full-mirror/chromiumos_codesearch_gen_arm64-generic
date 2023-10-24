import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">settings-dropdown-menu{--md-select-width:425px}#systemTimezoneSelector,#userTimeZoneSelector{--settings-dropdown-menu-policy-order:1}</style>
<template is="dom-if" restamp if="[[!prefs.cros.flags.per_user_timezone_enabled.value]]">
  <settings-dropdown-menu pref="{{prefs.cros.system.timezone}}" label="$i18n{timeZone}" menu-options="[[timeZoneList_]]" disabled="[[prefs.generated.resolve_timezone_by_geolocation_on_off.value ||
      shouldDisableTimeZoneGeoSelector]]">
  </settings-dropdown-menu>
</template>
<template is="dom-if" restamp if="[[prefs.cros.flags.per_user_timezone_enabled.value]]">
    <settings-dropdown-menu id="userTimeZoneSelector" pref="{{prefs.settings.timezone}}" label="$i18n{timeZone}" menu-options="[[timeZoneList_]]" hidden="[[isUserTimeZoneSelectorHidden_(prefs.settings.timezone,
            prefs.generated.resolve_timezone_by_geolocation_on_off.value)]]" disabled="[[shouldDisableTimeZoneGeoSelector]]">
    </settings-dropdown-menu>
    <settings-dropdown-menu id="systemTimezoneSelector" pref="{{prefs.cros.system.timezone}}" label="$i18n{timeZone}" menu-options="[[timeZoneList_]]" hidden="[[!isUserTimeZoneSelectorHidden_(prefs.settings.timezone,
            prefs.generated.resolve_timezone_by_geolocation_on_off.value)]]" disabled="disabled">
    </settings-dropdown-menu>
</template>
<!--_html_template_end_-->`;
}

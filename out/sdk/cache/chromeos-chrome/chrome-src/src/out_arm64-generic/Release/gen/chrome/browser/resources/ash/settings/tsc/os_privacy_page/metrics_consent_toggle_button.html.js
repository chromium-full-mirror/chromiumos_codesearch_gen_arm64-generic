import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{display:block}</style>
<settings-toggle-button id="settingsToggle" pref="[[metricsConsentPref_]]" label="$i18n{enableLogging}" sub-label="$i18n{enableLoggingDesc}" disabled="[[!isMetricsConsentConfigurable_]]" on-settings-boolean-control-change="onMetricsConsentChange_" no-set-pref>
</settings-toggle-button>
<!--_html_template_end_-->`;
}

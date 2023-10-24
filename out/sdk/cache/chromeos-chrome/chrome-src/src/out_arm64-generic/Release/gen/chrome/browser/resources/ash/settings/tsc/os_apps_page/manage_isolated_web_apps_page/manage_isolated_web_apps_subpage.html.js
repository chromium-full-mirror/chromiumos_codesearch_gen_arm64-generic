import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared iron-flex"></style>
<div class="cr-row first bottom-margin">
  <localized-link id="isolatedWebAppsDescription" class="cr-secondary-text" localized-string="$i18n{isolatedWebAppsDescription}">
  </localized-link>
</div>
<settings-toggle-button id="enableIsolatedWebAppsToggleButton" class="hr" label="$i18n{enableIsolatedWebAppsToggleLabel}" pref="{{prefs.ash.isolated_web_apps_enabled}}">
</settings-toggle-button>
<!--_html_template_end_-->`;
}

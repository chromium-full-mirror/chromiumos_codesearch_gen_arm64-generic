import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="settings-shared">.secondary{margin-top:0}</style>
    <settings-toggle-button id="toggle" class="two-line" label="$i18n{siteSettingsPdfDownloadPdfs}" pref="{{prefs.plugins.always_open_pdf_externally}}">
    </settings-toggle-button>
<!--_html_template_end_-->`;
}

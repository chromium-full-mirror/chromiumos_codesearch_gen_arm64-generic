import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<settings-toggle-button id="toggle" class="two-line" label="$i18n{enableFastPairLabel}" sub-label="$i18n{enableFastPairSubtitle}" pref="{{prefs.ash.fast_pair.enabled}}">
</settings-toggle-button><!--_html_template_end_-->`;
}

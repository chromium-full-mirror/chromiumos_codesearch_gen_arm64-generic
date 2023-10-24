import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<settings-toggle-button inverted="true" id="alwaysMoveToDrive" class="hr" pref="{{prefs.filebrowser.office.always_move_to_drive}}" label="$i18n{alwaysMoveToDrivePreferenceLabel}">
</settings-toggle-button>
<settings-toggle-button inverted="true" id="alwaysMoveToOneDrive" class="hr" pref="{{prefs.filebrowser.office.always_move_to_onedrive}}" label="$i18n{alwaysMoveToOneDrivePreferenceLabel}">
</settings-toggle-button>
<!--_html_template_end_-->`;
}

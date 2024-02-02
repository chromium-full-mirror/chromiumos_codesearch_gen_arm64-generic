import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">:host-context(body.revamp-wayfinding-enabled) settings-toggle-button{--cr-icon-button-margin-end:16px;--iron-icon-fill-color:var(--cros-sys-primary)}</style>

<settings-card header-text="[[getHeaderText_()]]">
  <settings-toggle-button id="snapWindowSuggestionsToggle" icon="os-settings:multitasking" pref="{{prefs.ash.snap_window_suggestions.enabled}}" label="[[getLabelText_()]]" sub-label="[[getDescriptionText_()]]" deep-link-focus-id$="[[Setting.kSnapWindowSuggestions]]">
  </settings-toggle-button>
</settings-card><!--_html_template_end_-->`;
}

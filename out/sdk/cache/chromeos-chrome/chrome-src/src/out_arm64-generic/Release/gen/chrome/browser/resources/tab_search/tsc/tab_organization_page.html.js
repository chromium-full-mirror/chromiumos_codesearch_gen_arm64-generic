import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>.body{margin:16px var(--mwb-list-item-horizontal-margin)}</style>

<div class="body">
  <tab-organization-not-started hidden="[[!isState_(tabOrganizationStateEnum_.kNotStarted, state_)]]" on-organize-tabs-click="onOrganizeTabsClick_">
  </tab-organization-not-started>
  <tab-organization-in-progress hidden="[[!isState_(tabOrganizationStateEnum_.kInProgress, state_)]]">
  </tab-organization-in-progress>
  <tab-organization-results hidden="[[!isState_(tabOrganizationStateEnum_.kSuccess, state_)]]" name="[[name_]]" tabs="[[tabs_]]" on-create-group-click="onCreateGroupClick_">
  </tab-organization-results>
  <tab-organization-failure hidden="[[!isState_(tabOrganizationStateEnum_.kFailure, state_)]]" error="[[error_]]">
  </tab-organization-failure>
</div>
<!--_html_template_end_-->`;
}

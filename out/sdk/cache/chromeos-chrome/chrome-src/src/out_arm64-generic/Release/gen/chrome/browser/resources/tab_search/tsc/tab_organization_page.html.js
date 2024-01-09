import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="tab-organization-shared-style">:host{--standard-curve:cubic-bezier(0.2, 0.0, 0, 1.0)}tab-organization-failure,tab-organization-in-progress,tab-organization-not-started,tab-organization-results{display:flex}:host(.changed-state) tab-organization-failure[shown],:host(.changed-state) tab-organization-in-progress[shown],:host(.changed-state) tab-organization-not-started[shown],:host(.changed-state) tab-organization-results[shown]{animation:fadeIn .1s linear .1s forwards,displayIn .2s linear forwards,paddingIn 250ms var(--standard-curve) forwards}tab-organization-failure:not([shown]),tab-organization-in-progress:not([shown]),tab-organization-not-started:not([shown]),tab-organization-results:not([shown]){height:0;position:absolute;visibility:hidden}:host(.changed-state.from-failure) tab-organization-failure:not([shown]),:host(.changed-state.from-in-progress) tab-organization-in-progress:not([shown]),:host(.changed-state.from-not-started) tab-organization-not-started:not([shown]),:host(.changed-state.from-success) tab-organization-results:not([shown]){animation:fadeOut .1s linear forwards,displayOut .2s linear forwards,marginOut 250ms var(--standard-curve) forwards}#body{margin:var(--mwb-list-item-horizontal-margin)}#contents{overflow:hidden;transition:height 250ms var(--standard-curve)}#contents.no-transition{transition:none}</style>

<div id="contents">
  <div id="body">
    <tab-organization-not-started id="notStarted" shown$="[[isState_(tabOrganizationStateEnum_.kNotStarted, state_)]]" on-sync-change="updateContentsHeightAfterNextRender" on-sync-click="onSyncClick_" on-sign-in-click="onSignInClick_" on-settings-click="onSettingsClick_" on-organize-tabs-click="onOrganizeTabsClick_" show-fre="[[showFRE_]]">
    </tab-organization-not-started>
    <tab-organization-in-progress id="inProgress" shown$="[[isState_(tabOrganizationStateEnum_.kInProgress, state_)]]">
    </tab-organization-in-progress>
    <tab-organization-results id="results" shown$="[[isState_(tabOrganizationStateEnum_.kSuccess, state_)]]" name="[[name_]]" tabs="[[tabs_]]" is-last-organization="[[isLastOrganization_]]" available-height="[[availableHeight_]]" on-refresh-click="onRefreshClick_" on-create-group-click="onCreateGroupClick_" on-remove-tab="onRemoveTab_" on-learn-more-click="onLearnMoreClick_" on-feedback="onFeedback_">
    </tab-organization-results>
    <tab-organization-failure id="failure" shown$="[[isState_(tabOrganizationStateEnum_.kFailure, state_)]]" show-fre="[[showFRE_]]" error="[[error_]]" on-check-now="onCheckNow_" on-tip-click="onTipClick_">
    </tab-organization-failure>
  </div>
</div>
<!--_html_template_end_-->`;
}

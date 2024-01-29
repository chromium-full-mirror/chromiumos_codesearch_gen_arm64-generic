import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style settings-shared">:host-context(body.revamp-wayfinding-enabled):host{display:flex;flex-direction:column}:host-context(body.revamp-wayfinding-enabled) #mainPageContainer{flex:1;margin-bottom:16px}#overscroll{margin-top:64px}.showing-subpage~#overscroll{display:none}:host-context(body.revamp-wayfinding-enabled) #overscroll{display:none}#noSearchResults{margin-top:80px;text-align:center}#noSearchResults div:first-child{font-size:123%;margin-bottom:10px}#managedHeader{border-top:none;font:var(--cros-body-2-font);margin-bottom:calc(-21px - 8px);padding-bottom:14px;padding-top:14px;position:relative;z-index:1;--cr-link-color:var(--cros-sys-primary);--cr-secondary-text-color:var(--cros-sys-secondary);--iron-icon-fill-color:var(--cros-sys-secondary)}:host-context(body.revamp-wayfinding-enabled) #managedHeader{margin-bottom:8px}</style>
<template is="dom-if" if="[[showManagedHeader_(isShowingSubpage_, isShowingAboutPage_)]]" restamp>
  <managed-footnote id="managedHeader" show-device-info></managed-footnote>
</template>
<main-page-container id="mainPageContainer" class="cr-centered-card-container" prefs="{{prefs}}" page-availability="[[pageAvailability]]" advanced-toggle-expanded="{{advancedToggleExpanded}}">
</main-page-container>
<div id="overscroll" style="padding-bottom:[[overscroll_]]px"></div>
<!--_html_template_end_-->`;
}

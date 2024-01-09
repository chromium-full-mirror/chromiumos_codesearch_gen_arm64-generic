import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style settings-shared">#overscroll{margin-top:64px}.showing-subpage~#overscroll{display:none}#noSearchResults{margin-top:80px;text-align:center}#noSearchResults div:first-child{font-size:123%;margin-bottom:10px}managed-footnote{border-top:none;font:var(--cros-body-2-font);margin-bottom:calc(-21px - 8px);padding-bottom:14px;padding-top:14px;position:relative;z-index:1;--cr-link-color:var(--cros-sys-primary);--cr-secondary-text-color:var(--cros-sys-secondary);--iron-icon-fill-color:var(--cros-sys-secondary)}</style>
<template is="dom-if" if="[[showManagedHeader_(isShowingSubpage_, isShowingAboutPage_)]]" restamp>
  <managed-footnote show-device-info></managed-footnote>
</template>
<main-page-container class="cr-centered-card-container" prefs="{{prefs}}" page-availability="[[pageAvailability]]" advanced-toggle-expanded="{{advancedToggleExpanded}}">
</main-page-container>
<div id="overscroll" style="padding-bottom:[[overscroll_]]px"></div>
<!--_html_template_end_-->`;
}

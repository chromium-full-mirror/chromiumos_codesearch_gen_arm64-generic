import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style cr-hidden-style settings-shared">#noSearchResults{margin-top:80px;text-align:center}#noSearchResults div:first-child{font-size:123%;margin-bottom:10px}managed-footnote{border-top:none;margin-bottom:calc(-21px - 8px);padding-bottom:16px;padding-top:12px;position:relative;z-index:1}</style>
    <div id="noSearchResults" hidden$="[[!showNoResultsFound_]]">
      <div>$i18n{searchNoResults}</div>
      <div>$i18nRaw{searchNoResultsHelp}</div>
    </div>
    <template is="dom-if" if="[[showManagedHeader_(inSearchMode_, showingSubpage_,
        showPages_.about)]]" restamp>
      <managed-footnote></managed-footnote>
    </template>
    <template is="dom-if" if="[[showPages_.settings]]">
      <settings-basic-page class="cr-centered-card-container" prefs="{{prefs}}" page-visibility="[[pageVisibility]]" on-subpage-expand="onShowingSubpage_" on-showing-main-page="onShowingMainPage_" in-search-mode="[[inSearchMode_]]" advanced-toggle-expanded="{{advancedToggleExpanded}}">
      </settings-basic-page>
    </template>
    <template is="dom-if" if="[[showPages_.about]]">
      <settings-about-page role="main" class="cr-centered-card-container" prefs="{{prefs}}">
      </settings-about-page>
    </template>
<!--_html_template_end_-->`;
}

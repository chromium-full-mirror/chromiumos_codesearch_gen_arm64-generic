import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="settings-shared">#exceptionHeader{padding:0 var(--cr-section-padding)}</style>
    <div id="exceptionHeader">
      <h2>$i18n{siteSettingsCustomizedBehaviors}</h2>
      <div id="exceptionHeaderSubLabel" class="secondary">
        [[description]]
      </div>
    </div>
    <site-list category="[[category]]" category-subtype="[[contentSettingEnum_.BLOCK]]" category-header="[[blockHeader]]" read-only-list="[[getReadOnlyList_(readOnlyList, defaultManaged_)]]" search-filter="[[searchFilter]]">
    </site-list>
    <site-list category="[[category]]" category-subtype="[[contentSettingEnum_.SESSION_ONLY]]" category-header="$i18n{siteSettingsSessionOnly}" read-only-list="[[getReadOnlyList_(readOnlyList, defaultManaged_)]]" search-filter="[[searchFilter]]">
    </site-list>
    <site-list category="[[category]]" category-subtype="[[contentSettingEnum_.ALLOW]]" category-header="[[allowHeader]]" read-only-list="[[getReadOnlyList_(readOnlyList, defaultManaged_)]]" search-filter="[[searchFilter]]" hidden$="[[!showAllowSiteList_]]">
    </site-list>
<!--_html_template_end_-->`;
}

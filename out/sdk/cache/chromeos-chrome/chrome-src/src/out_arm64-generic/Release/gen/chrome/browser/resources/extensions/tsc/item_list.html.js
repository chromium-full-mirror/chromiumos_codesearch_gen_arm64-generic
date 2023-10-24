import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="shared-style">#content-wrapper,.items-container{--extensions-card-width:400px}#container{box-sizing:border-box;height:100%}#content-wrapper{min-width:var(--extensions-card-width);padding:24px 60px 64px}#content-wrapper:has(extensions-review-panel){padding-top:14px}.empty-list-message{color:#6e6e6e;font-size:123%;font-weight:500;margin-top:80px;text-align:center}.extension-title-container{font-size:15px;font-weight:400;margin:0 0 16px 5px}@media (prefers-color-scheme:dark){.empty-list-message{color:var(--cr-secondary-text-color)}}.items-container{--grid-gutter:12px;display:grid;grid-column-gap:var(--grid-gutter);grid-row-gap:var(--grid-gutter);grid-template-columns:repeat(auto-fill,var(--extensions-card-width));justify-content:center;margin:auto;max-width:calc(var(--extensions-card-width) * var(--max-columns) + var(--grid-gutter) * var(--max-columns))}.items-container.review-panel-container :first-child{max-width:calc(var(--extensions-card-width) * 2 + var(--grid-gutter) * 2);grid-column:1/-1}extensions-review-panel{margin:15px auto;width:100%}#checkup-container{grid-column:1/-1;min-height:var(--extensions-card-height)}extensions-item{grid-column-start:auto;grid-row-start:auto}#app-title{color:var(--cr-primary-text-color);font-size:123%;font-weight:400;letter-spacing:.25px;margin-bottom:12px;margin-top:21px;padding-bottom:4px;padding-top:8px}managed-footnote{border-top:none;margin-bottom:-24px;padding-bottom:12px;padding-top:12px;z-index:1}</style>
<div id="container">
  <managed-footnote hidden="[[filter]]"></managed-footnote>
  <div id="content-wrapper" style="--max-columns:[[maxColumns_]]">
    <div class="items-container review-panel-container">
      <template is="dom-if" if="[[showSafetyCheckReviewPanel_]]" restamp>
        <extensions-review-panel extensions="[[extensions]]" delegate="[[delegate]]">
        </extensions-review-panel>
        <h2 class="extension-title-container">$i18n{safetyCheckAllExtensions}</h2>
      </template>
    </div>
    <div id="no-items" class="empty-list-message" hidden$="[[!shouldShowEmptyItemsMessage_(
            apps.length, extensions.length)]]">
      <span on-click="onNoExtensionsClick_">
        $i18nRaw{noExtensionsOrApps}
      </span>
    </div>
    <div id="no-search-results" class="empty-list-message" hidden$="[[!shouldShowEmptySearchMessage_(
            shownAppsCount_, shownExtensionsCount_, apps, extensions)]]">
      <span>$i18n{noSearchResults}</span>
    </div>
    <div class="items-container" hidden="[[!shownExtensionsCount_]]">
      
      <template is="dom-repeat" items="[[extensions]]" initial-count="3" filter="[[computedFilter_]]" rendered-item-count="{{shownExtensionsCount_::dom-change}}">
        <extensions-item id="[[item.id]]" data="[[item]]" safety-check-showing="[[hasSafetyCheckTriggeringExtension_]]" delegate="[[delegate]]" in-dev-mode="[[inDevMode]]">
        </extensions-item>
      </template>
    </div>
    <div hidden="[[!shownAppsCount_]]">
      
      <h2 id="app-title" class="items-container">$i18n{appsTitle}</h2>
      <div class="items-container">
        <template is="dom-repeat" items="[[apps]]" initial-count="3" filter="[[computedFilter_]]" rendered-item-count="{{shownAppsCount_::dom-change}}">
          <extensions-item id="[[item.id]]" data="[[item]]" delegate="[[delegate]]" in-dev-mode="[[inDevMode]]">
          </extensions-item>
        </template>
      </div>
    </div>
  </div>
</div>
<!--_html_template_end_-->`;
}

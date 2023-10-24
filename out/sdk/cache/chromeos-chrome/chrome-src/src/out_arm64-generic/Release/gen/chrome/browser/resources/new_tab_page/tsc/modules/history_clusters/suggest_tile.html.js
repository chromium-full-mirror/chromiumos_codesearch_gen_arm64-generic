import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="history-clusters-shared-style">#content{display:flex;flex-direction:column;height:100%;width:100%}a:active,a:hover,a:link,a:visited{text-decoration:none}:focus-visible,:host-context(.focus-outline-visible) :focus{box-shadow:var(--ntp-focus-shadow);outline:0}.related-search{background:var(--color-new-tab-page-history-clusters-module-item-background);display:flex;flex-direction:row;height:100%;margin-bottom:4px;width:100%}.related-search:first-child{border-radius:var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius) 0 0}.related-search:last-of-type{border-radius:0 0 var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius);margin-bottom:0}.icon{-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:20px;background-color:var(--color-new-tab-page-secondary-foreground);background-position:center center;background-repeat:no-repeat;background-size:20px;height:20px;margin:auto 16px;width:20px}.title{color:var(--color-new-tab-page-primary-foreground);font-size:var(--ntp-module-text-size);margin:auto 0;max-width:284px}@media (forced-colors:active){:host-context(.focus-outline-visible) a:focus{outline:var(--cr-focus-outline-hcm)}a{outline:var(--cr-border-hcm)}.icon{background-color:LinkText}}</style>
<div id="content">
  <template is="dom-repeat" items="[[relatedSearches]]" filter="[[filterRelatedSearches_]]">
    <a class="related-search" href="[[computeSearchUrl_(item.query)]]" aria-label$="[[i18n('modulesJourneysSearchSuggAcc', item.query)]]">
      <div class="icon" style="-webkit-mask-image:url(//resources/images/icon_search.svg)"></div>
      <div class="title truncate">[[item.query]]</div>
    </a>
  </template>
</div>
<!--_html_template_end_-->`;
}

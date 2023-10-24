import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="history-clusters-shared-style">.related-search{display:flex;flex-direction:row;height:100%;position:relative;width:100%}a:active,a:hover,a:link,a:visited{text-decoration:none}:host-context(.focus-outline-visible) a:focus,a:focus-visible{box-shadow:var(--ntp-focus-shadow);outline:0}.hover-layer{display:none;background:var(--color-new-tab-page-module-item-background-hovered);inset:0;pointer-events:none;position:absolute}.hover-layer,a{border-radius:0 0 var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius)}:host([is-first]) .hover-layer,:host([is-first]) a{border-radius:var(--ntp-module-item-border-radius) var(--ntp-module-item-border-radius) 0 0}a:hover .hover-layer{display:block}a:active .hover-layer{background:var(--color-new-tab-page-active-background)}.title{color:var(--color-new-tab-page-primary-foreground);font-size:var(--ntp-module-text-size);margin:auto 8px auto 0}.icon{-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:20px;background-color:var(--color-new-tab-page-primary-foreground);background-position:center center;background-repeat:no-repeat;background-size:20px;flex-shrink:0;height:20px;margin:auto 16px;width:20px}@media (forced-colors:active){:host-context(.focus-outline-visible) a:focus{outline:var(--cr-focus-outline-hcm)}a{outline:var(--cr-border-hcm)}.icon{background-color:LinkText}}</style>
<a class="related-search" part="related-search" href="[[computeSearchUrl_(relatedSearch.query)]]" aria-label$="[[i18n('modulesJourneysSearchSuggAcc',
        relatedSearch.query)]]">
  <div class="hover-layer"></div>
  <div class="icon" style="-webkit-mask-image:url(//resources/images/icon_search.svg)">
  </div>
  <div class="title truncate">[[relatedSearch.query]]</div>
</a>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style throbber">:host{display:flex;flex-direction:column;height:100%;overflow:hidden;user-select:none}#list{min-height:var(--destination-item-height)}.throbber-container{display:flex;margin-inline-start:calc((var(--search-icon-size) - var(--throbber-size))/ 2);min-height:var(--destination-item-height)}.throbber{align-self:center}.no-destinations-message{padding-bottom:8px;padding-inline-start:18px;padding-top:8px}:not(.moving).list-item{transition:background-color 150ms}.list-item:focus,.list-item:hover{background-color:#e4ecf7}@media (prefers-color-scheme:dark){.list-item:-webkit-any(:hover,:focus){background-color:var(--cr-menu-background-focus-color)}}.list-item:focus{outline:0}</style>
<div class="no-destinations-message" hidden$="[[hasDestinations_]]">
  $i18n{noDestinationsMessage}
</div>
<iron-list id="list" items="[[matchingDestinations_]]" role="grid" aria-rowcount$="[[matchingDestinations_.length]]" aria-label="$i18n{printDestinationsTitle}" hidden$="[[hideList_]]">
  <template>
    <div role="row" id$="destination_[[index]]" aria-rowindex$="[[getAriaRowindex_(index)]]">
      <print-preview-destination-list-item class="list-item" search-query="[[searchQuery]]" destination="[[item]]" on-click="onDestinationSelected_" on-keydown="onKeydown_" role="gridcell" tabindex$="[[tabIndex]]" iron-list-tab-index="[[tabIndex]]">
      </print-preview-destination-list-item>
    </div>
  </template>
</iron-list>
<div class="throbber-container" hidden$="[[throbberHidden_]]">
  <div class="throbber"></div>
</div>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cros-color-overrides">:host{--cr-toolbar-search-field-background:var(--cros-toolbar-search-bg-color);--cr-toolbar-icon-container-size:32px;--cr-toolbar-icon-margin:8px 16px;--separator-height:8px;-webkit-tap-highlight-color:transparent;display:flex;flex-basis:var(--cr-toolbar-field-width);transition:width 150ms cubic-bezier(.4,0,.2,1);width:var(--cr-toolbar-field-width)}:host(:focus-within) cr-toolbar-search-field{--cr-toolbar-search-field-background:var(--cros-bg-color-elevation-3);box-shadow:var(--cr-elevation-1);min-height:var(--cr-toolbar-focused-min-height)}:host(:not(:focus-within)) cr-toolbar-search-field{--cr-toolbar-search-field-cursor:text}:host([has-search-query]) cr-toolbar-search-field{min-height:40px}:host(:focus-within[should-show-dropdown]) cr-toolbar-search-field{--cr-toolbar-search-field-border-radius:20px 20px 0 0;box-shadow:var(--cr-elevation-3);height:56px;margin-top:var(--separator-height);padding-bottom:var(--separator-height)}:host-context(body.jelly-enabled){--cros-toolbar-search-bg-color:var(--cros-sys-input_field_on_shaded)}:host-context(body:not(.jelly-enabled)) cr-toolbar-search-field{--cr-toolbar-search-field-input-icon-color:var(--cros-icon-color-primary);--cr-toolbar-search-field-input-text-color:var(--cros-text-color-primary);--cr-toolbar-search-field-input-caret-color:var(--cros-text-color-primary);--cr-toolbar-search-field-prompt-color:var(--cros-text-color-secondary);--cr-toolbar-icon-button-focus-outline-color:var(--cros-focus-ring-color)}iron-dropdown{margin-top:72px}iron-dropdown [slot=dropdown-content]{background-color:var(--cros-bg-color-elevation-3);border-radius:0 0 20px 20px;box-shadow:var(--cr-elevation-3);display:table;padding-bottom:16px;width:var(--cr-toolbar-field-width)}iron-list{max-height:50vh;min-height:1px;user-select:none}cr-toolbar-search-field{--cr-toolbar-search-field-border-radius:20px;--cr-toolbar-search-field-paper-spinner-margin:0 12px}#noSearchResultsContainer{align-items:center;color:var(--cros-text-color-secondary);display:flex;height:24px;margin-inline-start:24px;margin-top:6px}#noSearchResultsContainer[hidden]{display:none}.separator{background-color:var(--cros-bg-color-elevation-3);border-bottom:none;border-inline-end:none;border-inline-start:none;border-top:1px solid var(--cros-separator-color);height:var(--separator-height);margin-inline-end:0;margin-inline-start:0;margin-top:-9px}</style>

<cr-toolbar-search-field id="search" label="[[i18n('searchPlaceholderLabel')]]" clear-label="[[i18n('searchClearQueryLabel')]]" on-search-icon-clicked="onSearchIconClicked" spinner-active="[[spinnerActive]]">
</cr-toolbar-search-field>
<iron-dropdown id="searchResults" opened="[[shouldShowDropdown]]" allow-outside-scroll no-cancel-on-outside-click>
  
  <div slot="dropdown-content">
    <div class="separator"></div>
    <iron-list id="searchResultList" selection-enabled items="[[searchResults]]" selected-item="{{selectedItem}}">
      <template>
        <search-result-row selected="[[isItemSelected(item, selectedItem)]]" search-result="[[item]]" search-query="[[getCurrentQuery(searchResults)]]" last-focused="{{lastFocused}}" list-blurred="{{listBlurred}}" list-length="[[getListLength(searchResults)]]" focus-row-index="[[index]]" on-navigated-to-result-route="onNavigatedToResultRowRoute" tabindex$="[[getRowTabIndex(item, selectedItem,
                shouldShowDropdown)]]" iron-list-tab-index$="[[getRowTabIndex(item, selectedItem,
                shouldShowDropdown)]]">
        </search-result-row>
      </template>
    </iron-list>
    
    <div id="noSearchResultsContainer" hidden="[[searchResultsExist]]" aria-hidden="true">
      [[i18n('searchNoResults')]]
    </div>
  </div>
</iron-dropdown>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="shared-style">:host{display:flex;position:relative}cr-toolbar{--cr-toolbar-center-basis:var(--cluster-max-width);--cr-toolbar-left-spacer-width:var(--side-bar-width);--cr-toolbar-field-margin:var(--side-bar-width);flex:1}:host([has-drawer]) cr-toolbar,:host([has-drawer]) cr-toolbar-selection-overlay{--cr-toolbar-field-margin:0}cr-toolbar-selection-overlay{opacity:0;--cr-toolbar-selection-overlay-max-width:var(--card-max-width);--cr-toolbar-field-margin:var(--side-bar-width)}cr-toolbar-selection-overlay[show]{opacity:1}</style>
    <cr-toolbar id="mainToolbar" disable-right-content-grow has-overlay$="[[itemsSelected_]]" page-name="$i18n{title}" clear-label="$i18n{clearSearch}" search-prompt="$i18n{searchPrompt}" spinner-active="[[spinnerActive]]" autofocus show-menu="[[hasDrawer]]" menu-label="$i18n{historyMenuButton}" narrow-threshold="1023" on-search-changed="onSearchChanged_">
    </cr-toolbar>
    <cr-toolbar-selection-overlay show="[[itemsSelected_]]" cancel-label="$i18n{cancel}" selection-label="[[numberOfItemsSelected_(count)]]" on-clear-selected-items="clearSelectedItems">
      <cr-button on-click="deleteSelectedItems" disabled$="[[pendingDelete]]">
        $i18n{delete}
      </cr-button>
    </cr-toolbar-selection-overlay>
<!--_html_template_end_-->`;
}

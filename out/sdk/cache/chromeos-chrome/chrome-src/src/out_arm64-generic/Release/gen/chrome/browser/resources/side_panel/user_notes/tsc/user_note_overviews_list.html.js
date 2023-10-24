import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>h2{font-size:14px;padding:0 16px}.hr{border-top:1px solid var(--google-grey-300);margin:8px 16px}@media (prefers-color-scheme:dark){.hr{border-top:1px solid var(--google-grey-700)}}</style>

<template id="noteOverviewsList" is="dom-repeat" items="[[overviews]]" sort="sortOverviews_">
  <template is="dom-if" if="[[headerShownBeforeOverview_(index, currentTabHasNotes_)]]" restamp>
    <sp-heading hide-back-button>
      <h2 slot="heading">[[getHeader_(index, currentTabHasNotes_)]]</h2>
    </sp-heading>
  </template>
  <user-note-overview-row overview="[[item]]" description="[[item.text]]" on-row-clicked="onRowClicked_" on-context-menu="onShowContextMenuClicked_" on-trailing-icon-clicked="onShowContextMenuClicked_">
  </user-note-overview-row>
  <template is="dom-if" if="[[shouldShowHr_(item)]]" restamp>
    <div class="hr">
  </div></template>
  
</template><!--_html_template_end_-->`;
}

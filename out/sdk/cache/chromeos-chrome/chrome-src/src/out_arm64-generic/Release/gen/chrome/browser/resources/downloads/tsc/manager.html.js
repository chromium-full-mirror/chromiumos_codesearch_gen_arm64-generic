import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-page-host-style cr-shared-style cr-hidden-style">:host{display:flex;flex:1 0;flex-direction:column;height:100%;overflow:hidden;z-index:0}@media (prefers-color-scheme:dark){:host{color:var(--cr-secondary-text-color)}}#toolbar{z-index:1}:host([has-shadow_]) #drop-shadow{opacity:var(--cr-container-shadow-max-opacity)}#downloadsList,downloads-item{--downloads-card-margin:24px;--downloads-card-width:clamp(550px, 80%, 680px)}#downloadsList{min-width:calc(var(--downloads-card-width) + 2 * var(--downloads-card-margin))}#downloadsList,#no-downloads{flex:1}:host([loading]) #downloadsList,:host([loading]) #no-downloads{display:none}#no-downloads{align-items:center;color:#6e6e6e;display:flex;font-size:123.1%;font-weight:500;justify-content:center;min-height:min-content}@media (prefers-color-scheme:dark){#no-downloads{color:var(--cr-secondary-text-color)}}#no-downloads .illustration{background:url(images/no_downloads.svg) no-repeat center center;background-size:contain;height:144px;margin-bottom:32px}#mainContainer{display:flex;flex:1;flex-direction:column;height:100%;overflow-y:overlay}managed-footnote{border-top:none;margin-bottom:calc(-21px - 8px);min-width:calc(var(--downloads-card-width) + 2 * var(--downloads-card-margin));padding-bottom:12px;padding-top:12px;z-index:1}</style>

<downloads-toolbar id="toolbar" items="[[items_]]" spinner-active="{{spinnerActive_}}" role="none" on-search-changed="onSearchChanged_">
</downloads-toolbar>
<div id="drop-shadow" class="cr-container-shadow"></div>
<div id="mainContainer" on-scroll="onScroll_" on-save-dangerous-click="onSaveDangerousClick_">
  <managed-footnote hidden="[[inSearchMode_]]"></managed-footnote>
  <iron-list id="downloadsList" items="[[items_]]" role="grid" aria-rowcount$="[[items_.length]]" hidden="[[!hasDownloads_]]" scroll-target="mainContainer" preserve-focus>
    <template>
      <downloads-item data="[[item]]" tabindex$="[[tabIndex]]" iron-list-tab-index="[[tabIndex]]" last-focused="{{lastFocused_}}" list-blurred="{{listBlurred_}}" focus-row-index="[[index]]">
      </downloads-item>
    </template>
  </iron-list>
  <div id="no-downloads" hidden="[[hasDownloads_]]">
    <div>
      <div class="illustration"></div>
      <span>[[noDownloadsText_(inSearchMode_)]]</span>
    </div>
  </div>
</div>
<cr-toast-manager duration="0">
  <cr-button aria-label="$i18n{undoDescription}" on-click="onUndoClick_">
    $i18n{undo}
  </cr-button>
</cr-toast-manager>
<template is="dom-if" if="[[shouldShowBypassWarningDialog_(bypassDialogItemId_)]]" restamp>
  <download-bypass-warning-confirmation-dialog file-name="[[computeBypassWarningDialogFileName_(bypassDialogItemId_)]]" on-close="onBypassWarningConfirmationDialogClose_">
  </download-bypass-warning-confirmation-dialog>
</template>
<!--_html_template_end_-->`;
}

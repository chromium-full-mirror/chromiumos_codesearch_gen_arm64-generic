import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-page-host-style cr-shared-style shared-style">:host{display:flex;flex-direction:column;height:100%}#container{align-items:flex-start;display:flex;flex:1;overflow:overlay;position:relative}#content,#sidebar,#space-holder{flex:1 1 0}#space-holder{min-width:56px}#sidebar{height:100%;position:sticky;top:0;z-index:1}#content{flex-basis:var(--password-manager-main-basis);height:100%}#checkupDetails{height:100%}checkup-details-section{height:auto!important;min-height:100%}password-details-section,passwords-section,settings-section{padding-bottom:28px}@media (max-width:1036px){#content{min-width:auto;padding:0 3px}}@media not (max-width:1036px){#content *{min-width:680px}}#cr-container-shadow-top{z-index:2}#removalNotification{display:flex;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}password-manager-side-bar{min-width:var(--side-bar-width)}</style>
<settings-prefs id="prefs" prefs="{{prefs_}}"></settings-prefs>
<password-manager-toolbar id="toolbar" narrow="[[narrow_]]" page-name="[[pageTitle_]]" on-search-enter-click="onSearchEnterClick_">
</password-manager-toolbar>
<div id="container" role="group">
  <password-manager-side-bar id="sidebar" hidden$="[[narrow_]]">
  </password-manager-side-bar>
  <iron-pages id="content" attr-for-selected="path" fallback-selection="passwords" selected="[[selectedPage_]]" on-iron-select="onIronSelect_">
    <passwords-section id="passwords" path="passwords" prefs="{{prefs_}}" focus-config="[[focusConfig_]]" class="cr-centered-card-container">
    </passwords-section>
    <checkup-section id="checkup" path="checkup" focus-config="[[focusConfig_]]" class="cr-centered-card-container">
    </checkup-section>
    <settings-section id="settings" path="settings" prefs="{{prefs_}}" class="cr-centered-card-container">
    </settings-section>
    <div id="passwordDetails" path="password-details">
      <template is="dom-if" restamp if="[[showPage(selectedPage_, pagesValueEnum_.PASSWORD_DETAILS)]]">
        <password-details-section class="cr-centered-card-container" on-password-removed="onPasswordRemoved_" prefs="{{prefs_}}" on-passkey-removed="onPasskeyRemoved_" on-password-moved="onPasswordMoved_">
        </password-details-section>
      </template>
    </div>
    <div id="checkupDetails" path="checkup-details">
      <template is="dom-if" restamp if="[[showPage(selectedPage_, pagesValueEnum_.CHECKUP_DETAILS)]]">
        <checkup-details-section class="cr-centered-card-container" on-password-removed="onPasswordRemoved_" prefs="{{prefs_}}">
        </checkup-details-section>
      </template>
    </div>
  </iron-pages>
  
  <div id="space-holder" hidden$="[[narrow_]]"></div>
<div>
<cr-drawer id="drawer" heading="$i18n{passwordManagerString}" align="$i18n{textdirection}">
  <div slot="body">
    <template is="dom-if" id="drawerTemplate">
      <password-manager-side-bar id="drawerSidebar"></password-manager-side-bar>
    </template>
  </div>
</cr-drawer>
<iron-media-query query="(max-width: 1036px)" query-matches="{{narrow_}}">
</iron-media-query>
<iron-media-query query="(max-width: 1200px)" query-matches="{{collapsed_}}">
</iron-media-query>
<cr-toast id="toast" duration="5000">
  <span id="removalNotification">[[toastMessage_]]</span>
  <cr-button id="undo-removal" aria-label="$i18n{undoDescription}" on-click="onUndoButtonClick_" hidden$="[[!showUndo_]]">
    $i18n{undoRemovePassword}
  </cr-button>
</cr-toast>
</div></div><!--_html_template_end_-->`;
}

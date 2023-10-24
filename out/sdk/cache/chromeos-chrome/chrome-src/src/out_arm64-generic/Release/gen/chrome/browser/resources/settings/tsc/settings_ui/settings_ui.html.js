import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="cr-page-host-style settings-shared">:host{display:flex;flex-direction:column;height:100%;--settings-menu-width:250px;--settings-main-basis:calc(var(--cr-centered-card-max-width) /
            var(--cr-centered-card-width-percentage))}cr-toolbar{min-height:56px;--cr-toolbar-center-basis:var(--settings-main-basis)}cr-toolbar:not([narrow]){--cr-toolbar-left-spacer-width:var(--settings-menu-width)}@media (prefers-color-scheme:light){cr-toolbar{--iron-icon-fill-color:white}}#cr-container-shadow-top{z-index:2}#container{align-items:flex-start;display:flex;flex:1;overflow:overlay;position:relative}#left,#main,#right{flex:1 1 0}#left{height:100%;position:sticky;top:0}#left settings-menu{max-height:100%;overflow:auto;overscroll-behavior:contain;width:var(--settings-menu-width)}#main{flex-basis:var(--settings-main-basis)}@media (max-width:980px){#main{min-width:auto;padding:0 3px}}</style>
    <settings-prefs id="prefs" prefs="{{prefs}}"></settings-prefs>
    <cr-toolbar id="toolbar" page-name="$i18n{settings}" clear-label="$i18n{clearSearch}" autofocus search-prompt="$i18n{searchPrompt}" on-cr-toolbar-menu-click="onMenuButtonClick_" spinner-active="[[toolbarSpinnerActive_]]" menu-label="$i18n{menuButtonLabel}" on-search-changed="onSearchChanged_" role="banner" narrow="{{narrow_}}" narrow-threshold="980" show-menu="[[narrow_]]">
    </cr-toolbar>
    <cr-drawer id="drawer" on-close="onMenuClose_" heading="$i18n{settings}" align="$i18n{textdirection}">
      <div slot="body">
        <template is="dom-if" id="drawerTemplate">
          <settings-menu id="drawerMenu" page-visibility="[[pageVisibility_]]" on-iron-activate="onIronActivate_">
          </settings-menu>
        </template>
      </div>
    </cr-drawer>
    <div id="container" class="no-outline">
      <div id="left" hidden$="[[narrow_]]">
        <settings-menu id="leftMenu" page-visibility="[[pageVisibility_]]" on-iron-activate="onIronActivate_">
        </settings-menu>
      </div>
      <settings-main id="main" prefs="{{prefs}}" toolbar-spinner-active="{{toolbarSpinnerActive_}}" page-visibility="[[pageVisibility_]]">
      </settings-main>
      
      <div id="right" hidden$="[[narrow_]]"></div>
    </div>
<!--_html_template_end_-->`;
}

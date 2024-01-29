import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style cr-icons cr-nav-menu-item-style">:host{box-sizing:border-box;display:block;padding-bottom:5px;padding-top:8px}:host *{-webkit-tap-highlight-color:transparent}#menu{color:var(--google-grey-700);display:flex;flex-direction:column;min-width:fit-content}#extensionsLink>.cr-icon{height:var(--cr-icon-size);margin-inline-end:14px;width:var(--cr-icon-size)}.menu-separator{border-bottom:1px solid rgba(0,0,0,.08);margin-bottom:8px;margin-top:8px}#aboutIcon{--cr-icon-image:url(//resources/images/chrome_logo_dark.svg);-webkit-mask-size:18px;background-color:var(--iron-icon-fill-color);display:block;height:var(--cr-icon-size);margin-inline-end:20px;margin-inline-start:0;width:var(--cr-icon-size)}@media (forced-colors:active){#aboutIcon{background-color:ButtonText}}@media (prefers-color-scheme:dark){#menu{color:var(--cr-primary-text-color)}.menu-separator{border-bottom:var(--cr-separator-line)}}</style>

    <div role="navigation">
      <cr-menu-selector id="menu" selectable="a:not(#extensionsLink)" attr-for-selected="href" on-iron-activate="onSelectorActivate_" on-click="onLinkClick_" selected-attribute="selected">
        <a role="menuitem" id="people" href="/people" hidden="[[!pageVisibility.people]]" class="cr-nav-menu-item">
          <iron-icon icon="cr:person"></iron-icon>
          $i18n{peoplePageTitle}
          <paper-ripple></paper-ripple>
        </a>
        <a role="menuitem" id="autofill" href="/autofill" hidden="[[!pageVisibility.autofill]]" class="cr-nav-menu-item">
          <iron-icon icon="settings:assignment"></iron-icon>
          $i18n{autofillPageTitle}
          <paper-ripple></paper-ripple>
        </a>
        <a role="menuitem" href="/privacy" hidden="[[!pageVisibility.privacy]]" class="cr-nav-menu-item">
          <iron-icon icon="cr:security"></iron-icon>
          $i18n{privacyPageTitle}
          <paper-ripple></paper-ripple>
        </a>
        <a role="menuitem" id="performance" href="/performance" class="cr-nav-menu-item" hidden="[[!pageVisibility.performance]]">
          <iron-icon icon="settings:performance"></iron-icon>
          $i18n{performancePageTitle}
          <paper-ripple></paper-ripple>
        </a>
        <a role="menuitem" href="/ai" hidden="[[!showExperimentalMenuItem_(
                showAdvancedFeaturesMainControl_, pageVisibility.ai)]]" class="cr-nav-menu-item">
          <iron-icon icon="settings20:ai"></iron-icon>
          $i18n{aiPageTitle}
          <paper-ripple></paper-ripple>
        </a>
        <a role="menuitem" id="appearance" href="/appearance" hidden="[[!pageVisibility.appearance]]" class="cr-nav-menu-item">
          <iron-icon icon="settings:palette"></iron-icon>
          $i18n{appearancePageTitle}
          <paper-ripple></paper-ripple>
        </a>
        <a role="menuitem" href="/search" class="cr-nav-menu-item">
          <iron-icon icon="cr:search"></iron-icon>
          $i18n{searchPageTitle}
          <paper-ripple></paper-ripple>
        </a>
  
        <a role="menuitem" id="onStartup" href="/onStartup" class="cr-nav-menu-item" hidden="[[!pageVisibility.onStartup]]">
          <iron-icon icon="settings:power-settings-new"></iron-icon>
          $i18n{onStartup}
          <paper-ripple></paper-ripple>
        </a>
        <div class="menu-separator"></div>
        <a role="menuitem" id="languages" href="/languages" class="cr-nav-menu-item" hidden="[[!pageVisibility.languages]]">
          <iron-icon icon="settings:language"></iron-icon>
          $i18n{languagesPageTitle}
          <paper-ripple></paper-ripple>
        </a>
        <a role="menuitem" id="downloads" href="/downloads" class="cr-nav-menu-item" hidden="[[!pageVisibility.downloads]]">
          <iron-icon icon="cr:file-download"></iron-icon>
          $i18n{downloadsPageTitle}
          <paper-ripple></paper-ripple>
        </a>
        <a role="menuitem" id="accessibility" href="/accessibility" class="cr-nav-menu-item" hidden="[[!pageVisibility.a11y]]">
          <iron-icon icon="settings:accessibility"></iron-icon>
          $i18n{a11yPageTitle}
          <paper-ripple></paper-ripple>
        </a>
  
        <a role="menuitem" id="reset" href="/reset" hidden="[[!pageVisibility.reset]]" class="cr-nav-menu-item">
          <iron-icon icon="settings:restore"></iron-icon>
          $i18n{resetPageTitle}
          <paper-ripple></paper-ripple>
        </a>
        <div hidden="[[!pageVisibility.advancedSettings]]" class="menu-separator"></div>
        <a role="menuitem" id="extensionsLink" class="cr-nav-menu-item" href="chrome://extensions" target="_blank" hidden="[[!pageVisibility.extensions]]" on-click="onExtensionsLinkClick_" title="$i18n{extensionsLinkTooltip}">
          <iron-icon icon="cr:extension"></iron-icon>
          <span>$i18n{extensionsPageTitle}</span>
          <div class="cr-icon icon-external"></div>
          <paper-ripple></paper-ripple>
        </a>
        <a role="menuitem" id="about-menu" href="/help" class="cr-nav-menu-item">
          <span id="aboutIcon" class="cr-icon" role="presentation"></span>
          $i18n{aboutPageTitle}
          <paper-ripple></paper-ripple>
        </a>
      </cr-menu-selector>
    </div>
<!--_html_template_end_-->`;
}

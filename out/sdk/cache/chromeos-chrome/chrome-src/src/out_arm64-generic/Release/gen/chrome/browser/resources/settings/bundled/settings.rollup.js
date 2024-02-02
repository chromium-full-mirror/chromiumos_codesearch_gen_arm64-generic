import { a as assertNotReached, l as listenOnce, C as CrSearchFieldMixin, I as I18nMixin, W as WebUiListenerMixin, b as assert, R as RelaunchMixin, c as RestartType, P as PrefsMixin, i as isMac, d as IronResizableBehavior, e as RouteObserverMixin, E as EventTracker, f as Router, g as focusWithoutInk, h as CrPolicyPrefMixin, j as PrefControlMixin, B as BaseMixin, r as routes, M as MetricsBrowserProxyImpl, k as PrivacyGuideInteractions, m as PrivacyGuideAvailabilityMixin, n as PrivacyPageBrowserProxyImpl, S as SiteSettingsPrefsBrowserProxyImpl, o as SafetyHubBrowserProxyImpl, p as SettingsState, q as ContentSettingsTypes, s as ContentSetting, t as ChooserType, u as SafetyHubEvent, v as SafetyHubEntryPoint, w as PluralStringProxyImpl, H as HatsBrowserProxyImpl, T as TrustSafetyInteraction, x as CookieControlsMode, y as sanitizeInnerHtml, z as SafetyCheckInteractions, O as OpenWindowProxyImpl, A as PasswordManagerImpl, D as PasswordCheckReferrer, F as PasswordManagerPage, G as getInstance, J as getTrustedScriptURL, K as FocusRowMixin, L as SyncBrowserProxyImpl, N as isChromeOS, Q as getImage, U as ListPropertyUpdateMixin, V as TooltipMixin, X as NetworkPredictionOptions, Y as CrSettingsPrefs, Z as ResetBrowserProxyImpl, _ as SearchEnginesBrowserProxyImpl, $ as ChoiceMadeLocation, a0 as PromiseResolver, a1 as IronSelectableBehavior, a2 as FocusOutlineManager, a3 as pageVisibility, a4 as setGlobalScrollTarget, a5 as resetGlobalScrollTargetForTesting } from './shared.rollup.js';
export { as as ControlledRadioButtonElement, ak as CrActionMenuElement, al as CrButtonElement, am as CrDialogElement, an as CrLinkRowElement, ao as CrRadioButtonElement, ap as CrRadioGroupElement, aq as CrToggleElement, ax as CvcDeletionUserAction, a7 as DEFAULT_CHECKED_VALUE, a8 as DEFAULT_UNCHECKED_VALUE, ay as DeleteBrowsingDataAction, a9 as ExtensionControlBrowserProxyImpl, a6 as ExtensionControlledIndicatorElement, aa as LifetimeBrowserProxyImpl, aJ as MAX_SIGNIN_PROMO_IMPRESSION, ab as PageStatus, az as PrivacyElementInteractions, aA as PrivacyGuideSettingsStates, aB as PrivacyGuideStepsEligibleAndReached, aL as PrivacySandboxBrowserProxyImpl, aN as Route, aC as SafeBrowsingInteractions, av as SafeBrowsingSetting, aD as SafetyCheckNotificationsModuleInteractions, aE as SafetyCheckUnusedSitePermissionsModuleInteractions, aF as SafetyHubCardState, aG as SafetyHubModuleType, aH as SafetyHubSurfaces, aO as SearchEnginesInteractions, af as SecureDnsMode, ag as SecureDnsUiManagementMode, aw as SecurityPageInteraction, at as SettingsDropdownMenuElement, aj as SettingsPrefsElement, aK as SettingsSyncAccountControlElement, au as SettingsToggleButtonElement, aP as SiteFaviconElement, ac as StatusAction, ae as TrustedVaultBannerState, aM as buildRouter, ar as getTrustedHTML, ah as prefToString, aI as setPageVisibilityForTesting, ai as stringToPrefValue, ad as syncPrefsIndividualDataTypes } from './shared.rollup.js';
import { html, PolymerElement, dedupingMixin, mixinBehaviors, afterNextRender, flush, templatize, beforeNextRender, microTask, DomIf } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
export { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import './strings.m.js';
import { sendWithPromise } from 'chrome://resources/js/cr.js';
import { mojo } from 'chrome://resources/mojo/mojo/public/js/bindings.js';
import 'chrome://resources/lit/v3_0/lit.rollup.js';

function getTemplate$K() {
    return html `<!--_html_template_start_-->    <style>:host{--cr-drawer-width:256px}:host dialog{--transition-timing:200ms ease;background-color:var(--cr-drawer-background-color,#fff);border:none;border-start-end-radius:var(--cr-drawer-border-start-end-radius,0);border-end-end-radius:var(--cr-drawer-border-end-end-radius,0);bottom:0;left:calc(-1 * var(--cr-drawer-width));margin:0;max-height:initial;max-width:initial;overflow:hidden;padding:0;position:absolute;top:0;transition:left var(--transition-timing);width:var(--cr-drawer-width)}@media (prefers-color-scheme:dark){:host dialog{background:var(--cr-drawer-background-color,var(--google-grey-900)) linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}#container,:host dialog{height:100%;word-break:break-word}:host([show_]) dialog{left:0}:host([align=rtl]) dialog{left:auto;right:calc(-1 * var(--cr-drawer-width));transition:right var(--transition-timing)}:host([show_][align=rtl]) dialog{right:0}:host dialog::backdrop{background:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity var(--transition-timing)}:host([show_]) dialog::backdrop{opacity:1}.drawer-header{align-items:center;border-bottom:var(--cr-separator-line);color:var(--cr-drawer-header-color,inherit);display:flex;font-size:123.08%;font-weight:var(--cr-drawer-header-font-weight,inherit);font:var(--cr-drawer-header-font,inherit);min-height:56px;padding-inline-start:var(--cr-drawer-header-padding,24px)}@media (prefers-color-scheme:dark){.drawer-header{color:var(--cr-primary-text-color)}}#heading{outline:0}:host ::slotted([slot=body]){height:calc(100% - 56px);overflow:auto}picture{margin-inline-end:16px}#product-logo,picture{height:24px;width:24px}</style>
    <dialog id="dialog" on-cancel="onDialogCancel_" on-click="onDialogClick_" on-close="onDialogClose_">
      <div id="container" on-click="onContainerClick_">
        <div class="drawer-header">
          <slot name="header-icon">
            <picture>
              <source media="(prefers-color-scheme: dark)" srcset="//resources/images/chrome_logo_dark.svg">
              <img id="product-logo" srcset="chrome://theme/current-channel-logo@1x, chrome://theme/current-channel-logo@2x 2x" role="presentation">
            </picture>
          </slot>
          <div id="heading" tabindex="-1">[[heading]]</div>
        </div>
        <slot name="body"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrDrawerElement extends PolymerElement {
    static get is() {
        return 'cr-drawer';
    }
    static get template() {
        return getTemplate$K();
    }
    static get properties() {
        return {
            heading: String,
            show_: {
                type: Boolean,
                reflectToAttribute: true,
            },
            /** The alignment of the drawer on the screen ('ltr' or 'rtl'). */
            align: {
                type: String,
                value: 'ltr',
                reflectToAttribute: true,
            },
        };
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    get open() {
        return this.$.dialog.open;
    }
    set open(_value) {
        assertNotReached('Cannot set |open|.');
    }
    /** Toggles the drawer open and close. */
    toggle() {
        if (this.open) {
            this.cancel();
        }
        else {
            this.openDrawer();
        }
    }
    /** Shows drawer and slides it into view. */
    openDrawer() {
        if (this.open) {
            return;
        }
        this.$.dialog.showModal();
        this.show_ = true;
        this.fire_('cr-drawer-opening');
        listenOnce(this.$.dialog, 'transitionend', () => {
            this.fire_('cr-drawer-opened');
        });
    }
    /**
     * Slides the drawer away, then closes it after the transition has ended. It
     * is up to the owner of this component to differentiate between close and
     * cancel.
     */
    dismiss_(cancel) {
        if (!this.open) {
            return;
        }
        this.show_ = false;
        listenOnce(this.$.dialog, 'transitionend', () => {
            this.$.dialog.close(cancel ? 'canceled' : 'closed');
        });
    }
    cancel() {
        this.dismiss_(true);
    }
    close() {
        this.dismiss_(false);
    }
    wasCanceled() {
        return !this.open && this.$.dialog.returnValue === 'canceled';
    }
    /**
     * Stop propagation of a tap event inside the container. This will allow
     * |onDialogClick_| to only be called when clicked outside the container.
     */
    onContainerClick_(event) {
        event.stopPropagation();
    }
    /**
     * Close the dialog when tapped outside the container.
     */
    onDialogClick_() {
        this.cancel();
    }
    /**
     * Overrides the default cancel machanism to allow for a close animation.
     */
    onDialogCancel_(event) {
        event.preventDefault();
        this.cancel();
    }
    onDialogClose_() {
        // Catch and re-fire the 'close' event such that it bubbles across Shadow
        // DOM v1.
        this.fire_('close');
    }
}
customElements.define(CrDrawerElement.is, CrDrawerElement);

function getTemplate$J() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style cr-icons">:host{display:block;height:40px;transition:background-color 150ms cubic-bezier(.4,0,.2,1),width 150ms cubic-bezier(.4,0,.2,1);width:44px}:host-context([chrome-refresh-2023]):host{--cr-toolbar-search-field-hover-background:var(--color-toolbar-search-field-background-hover,
                var(--cr-hover-background-color));isolation:isolate}:host([disabled]){opacity:var(--cr-disabled-opacity)}[hidden]{display:none!important}cr-icon-button{--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 32px);margin:var(--cr-toolbar-icon-margin,6px)}:host-context([chrome-refresh-2023]) cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-icon-color,
            var(--color-toolbar-search-field-icon,
            var(--cr-secondary-text-color)));--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 28px);--cr-icon-button-icon-size:20px;margin:var(--cr-toolbar-icon-margin,0)}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:var(
              --cr-toolbar-search-field-input-icon-color,
              var(--google-grey-700));--cr-icon-button-focus-outline-color:var(
              --cr-toolbar-icon-button-focus-outline-color,
              var(--cr-focus-outline-color))}}@media (prefers-color-scheme:dark){cr-icon-button{--cr-icon-button-fill-color:var(
              --cr-toolbar-search-field-input-icon-color,
              var(--google-grey-500))}}#icon{transition:margin 150ms,opacity .2s}#prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--google-grey-700));opacity:0}@media (prefers-color-scheme:dark){#prompt{color:var(--cr-toolbar-search-field-prompt-color,#fff)}}@media (prefers-color-scheme:dark){#prompt{--cr-toolbar-search-field-prompt-opacity:1;color:var(--cr-secondary-text-color,#fff)}}:host-context([chrome-refresh-2023]) #prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--color-toolbar-search-field-foreground-placeholder,var(--cr-secondary-text-color)))}paper-spinner-lite{--paper-spinner-color:var(--cr-toolbar-search-field-input-icon-color,
                var(--google-grey-700));height:var(--cr-icon-size);margin:var(--cr-toolbar-search-field-paper-spinner-margin,0 6px);opacity:0;padding:6px;position:absolute;width:var(--cr-icon-size)}@media (prefers-color-scheme:dark){paper-spinner-lite{--paper-spinner-color:var(
              --cr-toolbar-search-field-input-icon-color, white)}}:host-context([chrome-refresh-2023]) paper-spinner-lite{margin:0;padding:2px}paper-spinner-lite[active]{opacity:1}#prompt,paper-spinner-lite{transition:opacity .2s}#searchTerm{-webkit-font-smoothing:antialiased;flex:1;line-height:185%;margin:var(--cr-toolbar-search-field-term-margin,0 2px);position:relative}:host-context([chrome-refresh-2023]) #searchTerm{font-size:12px;font-weight:500;margin:var(--cr-toolbar-search-field-term-margin,0)}label{bottom:0;cursor:var(--cr-toolbar-search-field-cursor,text);left:0;overflow:hidden;position:absolute;right:0;top:0;white-space:nowrap}:host([has-search-text]) label{visibility:hidden}input{-webkit-appearance:none;background:0 0;border:none;caret-color:var(--cr-toolbar-search-field-input-caret-color,var(--google-blue-700));color:var(--cr-toolbar-search-field-input-text-color,var(--google-grey-900));cursor:var(--cr-toolbar-search-field-cursor,text);font:inherit;outline:0;padding:0;position:relative;width:100%}@media (prefers-color-scheme:dark){input{color:var(--cr-toolbar-search-field-input-text-color,#fff)}}:host-context([chrome-refresh-2023]) input{caret-color:var(--cr-toolbar-search-field-input-caret-color,currentColor);color:var(--cr-toolbar-search-field-input-text-color,var(--color-toolbar-search-field-foreground,var(--cr-fallback-color-on-surface)));font-size:12px;font-weight:500}input[type=search]::-webkit-search-cancel-button{display:none}:host([narrow]){border-radius:var(--cr-toolbar-search-field-border-radius,0)}:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,var(--google-grey-100));border-radius:var(--cr-toolbar-search-field-border-radius,46px);cursor:var(--cr-toolbar-search-field-cursor,text);max-width:var(--cr-toolbar-field-max-width,none);padding-inline-end:0;width:var(--cr-toolbar-field-width,680px)}@media (prefers-color-scheme:dark){:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,rgba(0,0,0,.22))}}:host-context([chrome-refresh-2023]):host(:not([narrow])){--cr-toolbar-search-field-border-radius:100px;background:0 0;height:36px;overflow:hidden;padding:0 6px;position:relative}#background,#stateBackground{display:none}:host-context([chrome-refresh-2023]):host(:not([narrow])) #background{background:var(--cr-toolbar-search-field-background,var(--color-toolbar-search-field-background,var(--cr-fallback-color-base-container)));border-radius:inherit;display:block;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host([search-focused_]:not([narrow])){outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host-context([chrome-refresh-2023]):host(:not([narrow])) #stateBackground{display:block;inset:0;pointer-events:none;position:absolute}:host-context([chrome-refresh-2023]):host(:hover:not([search-focused_],[narrow])) #stateBackground{background:var(--cr-toolbar-search-field-hover-background);z-index:1}:host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,.7)}:host-context([chrome-refresh-2023]):host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,1)}:host(:not([narrow])) #prompt{opacity:var(--cr-toolbar-search-field-prompt-opacity,1)}:host([narrow]) #prompt{opacity:var(--cr-toolbar-search-field-narrow-mode-prompt-opacity,0)}:host([narrow]:not([showing-search])) #searchTerm{display:none}:host([showing-search][spinner-active]) #icon{opacity:0}:host([narrow][showing-search]){width:100%}:host([narrow][showing-search]) #icon,:host([narrow][showing-search]) paper-spinner-lite{margin-inline-start:var(--cr-toolbar-search-icon-margin-inline-start,18px)}#content{align-items:center;display:flex;height:100%}:host-context([chrome-refresh-2023]) #content{position:relative;z-index:2}</style>
    <div id="background"></div>
    <div id="stateBackground"></div>
    <div id="content">
      <template is="dom-if" id="spinnerTemplate">
        <paper-spinner-lite active="[[isSpinnerShown_]]">
        </paper-spinner-lite>
      </template>
      <cr-icon-button id="icon" iron-icon="cr:search" title="[[label]]" dir="ltr" tabindex$="[[computeIconTabIndex_(narrow, hasSearchText)]]" aria-hidden$="[[computeIconAriaHidden_(narrow, hasSearchText)]]" on-click="onSearchIconClicked_" disabled="[[disabled]]">
      </cr-icon-button>
      <div id="searchTerm">
        <label id="prompt" for="searchInput" aria-hidden="true">[[label]]</label>
        <input id="searchInput" aria-labelledby="prompt" autocapitalize="off" autocomplete="off" type="search" on-input="onSearchTermInput" on-search="onSearchTermSearch" on-keydown="onSearchTermKeydown_" on-focus="onInputFocus_" on-blur="onInputBlur_" autofocus$="[[autofocus]]" spellcheck="false" disabled="[[disabled]]">
      </div>
      <template is="dom-if" if="[[hasSearchText]]">
        <cr-icon-button id="clearSearch" iron-icon="cr:cancel" title="[[clearLabel]]" on-click="clearSearch_" disabled="[[disabled]]"></cr-icon-button>
      </template>
    </div>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrToolbarSearchFieldElementBase = CrSearchFieldMixin(PolymerElement);
class CrToolbarSearchFieldElement extends CrToolbarSearchFieldElementBase {
    static get is() {
        return 'cr-toolbar-search-field';
    }
    static get template() {
        return getTemplate$J();
    }
    static get properties() {
        return {
            narrow: {
                type: Boolean,
                reflectToAttribute: true,
            },
            showingSearch: {
                type: Boolean,
                value: false,
                notify: true,
                reflectToAttribute: true,
            },
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            // When true, show a loading spinner to indicate that the backend is
            // processing the search. Will only show if the search field is open.
            spinnerActive: { type: Boolean, reflectToAttribute: true },
            isSpinnerShown_: {
                type: Boolean,
                computed: 'computeIsSpinnerShown_(spinnerActive, showingSearch)',
            },
            searchFocused_: { reflectToAttribute: true, type: Boolean, value: false },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('click', e => this.showSearch_(e));
    }
    getSearchInput() {
        return this.$.searchInput;
    }
    isSearchFocused() {
        return this.searchFocused_;
    }
    showAndFocus() {
        this.showingSearch = true;
        this.focus_();
    }
    onSearchTermInput() {
        super.onSearchTermInput();
        this.showingSearch = this.hasSearchText || this.isSearchFocused();
    }
    onSearchIconClicked_() {
        this.dispatchEvent(new CustomEvent('search-icon-clicked', { bubbles: true, composed: true }));
    }
    focus_() {
        this.getSearchInput().focus();
    }
    computeIconTabIndex_(narrow) {
        return narrow && !this.hasSearchText ? 0 : -1;
    }
    computeIconAriaHidden_(narrow) {
        return Boolean(!narrow || this.hasSearchText).toString();
    }
    computeIsSpinnerShown_() {
        const showSpinner = this.spinnerActive && this.showingSearch;
        if (showSpinner) {
            this.$.spinnerTemplate.if = true;
        }
        return showSpinner;
    }
    onInputFocus_() {
        this.searchFocused_ = true;
    }
    onInputBlur_() {
        this.searchFocused_ = false;
        if (!this.hasSearchText) {
            this.showingSearch = false;
        }
    }
    onSearchTermKeydown_(e) {
        if (e.key === 'Escape') {
            this.showingSearch = false;
            this.setValue('');
            this.getSearchInput().blur();
        }
    }
    showSearch_(e) {
        if (e.target !== this.shadowRoot.querySelector('#clearSearch')) {
            this.showingSearch = true;
        }
        if (this.narrow) {
            this.focus_();
        }
    }
    clearSearch_() {
        this.setValue('');
        this.focus_();
        this.spinnerActive = false;
    }
}
customElements.define(CrToolbarSearchFieldElement.is, CrToolbarSearchFieldElement);

function getTemplate$I() {
    return html `<!--_html_template_start_-->    <style include="cr-icons cr-hidden-style">:host{align-items:center;background-color:var(--cr-toolbar-background-color);color:var(--google-grey-900);display:flex;height:var(--cr-toolbar-height)}@media (prefers-color-scheme:dark){:host{border-bottom:var(--cr-separator-line);box-sizing:border-box;color:var(--cr-secondary-text-color)}:host-context([chrome-refresh-2023]):host{background-color:transparent;border-bottom:none}}h1{flex:1;font-size:170%;font-weight:var(--cr-toolbar-header-font-weight,500);letter-spacing:.25px;line-height:normal;margin-inline-start:6px;padding-inline-end:12px;white-space:var(--cr-toolbar-header-white-space,normal)}@media (prefers-color-scheme:dark){h1{color:var(--cr-primary-text-color)}}#leftContent{position:relative;transition:opacity .1s}#leftSpacer{align-items:center;box-sizing:border-box;display:flex;padding-inline-start:calc(12px + 6px);width:var(--cr-toolbar-left-spacer-width,auto)}cr-icon-button{--cr-icon-button-size:32px;min-width:32px}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-focus-outline-color:var(--cr-focus-outline-color)}}#centeredContent{display:flex;flex:1 1 0;justify-content:center}#rightSpacer{padding-inline-end:12px}:host([narrow]) #centeredContent{justify-content:flex-end}:host([has-overlay]){transition:visibility var(--cr-toolbar-overlay-animation-duration);visibility:hidden}:host([narrow][showing-search_]) #leftContent{opacity:0;position:absolute}:host(:not([narrow])) #leftContent{flex:1 1 var(--cr-toolbar-field-margin,0)}:host(:not([narrow])) #centeredContent{flex-basis:var(--cr-toolbar-center-basis,0)}:host(:not([narrow])[disable-right-content-grow]) #centeredContent{justify-content:start;padding-inline-start:12px}:host(:not([narrow])) #rightContent{flex:1 1 0;text-align:end}:host(:not([narrow])[disable-right-content-grow]) #rightContent{flex:0 1 0}picture{display:none}#menuButton{margin-inline-end:9px}#menuButton~h1{margin-inline-start:0}:host(:not([narrow])) picture,:host([always-show-logo]) picture{display:initial;margin-inline-end:16px}:host(:not([narrow])) #leftSpacer,:host([always-show-logo]) #leftSpacer{padding-inline-start:calc(12px + 9px)}:host(:not([narrow])) :is(picture,#product-logo),:host([always-show-logo]) :is(picture,#product-logo){height:24px;width:24px}</style>
    <div id="leftContent">
      <div id="leftSpacer">
        <template is="dom-if" if="[[showMenu]]" restamp>
          <cr-icon-button id="menuButton" class="no-overlap" iron-icon="cr20:menu" on-click="onMenuClick_" aria-label$="[[menuLabel]]" title="[[menuLabel]]">
          </cr-icon-button>
        </template>
        <slot name="product-logo">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="//resources/images/chrome_logo_dark.svg">
            <img id="product-logo" srcset="chrome://theme/current-channel-logo@1x, chrome://theme/current-channel-logo@2x 2x" role="presentation">
          </picture>
        </slot>
        <h1>[[pageName]]</h1>
      </div>
    </div>

    <div id="centeredContent" hidden$="[[!showSearch]]">
      <cr-toolbar-search-field id="search" narrow="[[narrow]]" label="[[searchPrompt]]" clear-label="[[clearLabel]]" spinner-active="[[spinnerActive]]" showing-search="{{showingSearch_}}" autofocus$="[[autofocus]]">
      </cr-toolbar-search-field>
      <iron-media-query query="(max-width: [[narrowThreshold]]px)" query-matches="{{narrow}}">
      </iron-media-query>
    </div>

    <div id="rightContent">
      <div id="rightSpacer">
        <slot></slot>
      </div>
    </div>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToolbarElement extends PolymerElement {
    static get is() {
        return 'cr-toolbar';
    }
    static get template() {
        return getTemplate$I();
    }
    static get properties() {
        return {
            // Name to display in the toolbar, in titlecase.
            pageName: String,
            // Prompt text to display in the search field.
            searchPrompt: String,
            // Tooltip to display on the clear search button.
            clearLabel: String,
            // Tooltip to display on the menu button.
            menuLabel: String,
            // Value is proxied through to cr-toolbar-search-field. When true,
            // the search field will show a processing spinner.
            spinnerActive: Boolean,
            // Controls whether the menu button is shown at the start of the menu.
            showMenu: { type: Boolean, value: false },
            // Controls whether the search field is shown.
            showSearch: { type: Boolean, value: true },
            // Controls whether the search field is autofocused.
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            // True when the toolbar is displaying in narrow mode.
            narrow: {
                type: Boolean,
                reflectToAttribute: true,
                readonly: true,
                notify: true,
            },
            /**
             * The threshold at which the toolbar will change from normal to narrow
             * mode, in px.
             */
            narrowThreshold: {
                type: Number,
                value: 900,
            },
            alwaysShowLogo: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            showingSearch_: {
                type: Boolean,
                reflectToAttribute: true,
            },
        };
    }
    getSearchField() {
        return this.$.search;
    }
    onMenuClick_() {
        this.dispatchEvent(new CustomEvent('cr-toolbar-menu-click', { bubbles: true, composed: true }));
    }
    focusMenuButton() {
        requestAnimationFrame(() => {
            // Wait for next animation frame in case dom-if has not applied yet and
            // added the menu button.
            const menuButton = this.shadowRoot.querySelector('#menuButton');
            if (menuButton) {
                menuButton.focus();
            }
        });
    }
    isMenuFocused() {
        return !!this.shadowRoot.activeElement &&
            this.shadowRoot.activeElement.id === 'menuButton';
    }
}
customElements.define(CrToolbarElement.is, CrToolbarElement);

const styleMod$2 = document.createElement('dom-module');
styleMod$2.appendChild(html `
  <template>
    <style>
:host{color:var(--cr-primary-text-color);line-height:154%;overflow:hidden;user-select:text}
    </style>
  </template>
`.content);
styleMod$2.register('cr-page-host-style');

function getTemplate$H() {
    return html `<!--_html_template_start_-->    <style>:host{align-items:center;border-top:1px solid var(--cr-separator-color);color:var(--cr-secondary-text-color);display:none;font-size:.8125rem;justify-content:center;padding:0 24px}:host([is-managed_]){display:flex}a[href]{color:var(--cr-link-color)}iron-icon{align-self:flex-start;flex-shrink:0;height:20px;padding-inline-end:var(--managed-footnote-icon-padding,8px);width:20px}</style>

    <template is="dom-if" if="[[isManaged_]]">
      <iron-icon icon="[[managedByIcon_]]"></iron-icon>
      <div id="content" inner-h-t-m-l="[[getManagementString_(showDeviceInfo)]]">
      </div>
    </template>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for indicating that this user is managed by
 * their organization. This component uses the |isManaged| boolean in
 * loadTimeData, and the |managedByOrg| i18n string.
 *
 * If |isManaged| is false, this component is hidden. If |isManaged| is true, it
 * becomes visible.
 */
const ManagedFootnoteElementBase = I18nMixin(WebUiListenerMixin(PolymerElement));
class ManagedFootnoteElement extends ManagedFootnoteElementBase {
    static get is() {
        return 'managed-footnote';
    }
    static get template() {
        return getTemplate$H();
    }
    static get properties() {
        return {
            /**
             * Whether the user is managed by their organization through enterprise
             * policies.
             */
            isManaged_: {
                reflectToAttribute: true,
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isManaged');
                },
            },
            /**
             * Whether the device should be indicated as managed rather than the
             * browser.
             */
            showDeviceInfo: {
                type: Boolean,
                value: false,
            },
            /**
             * The name of the icon to display in the footer.
             * Should only be read if isManaged_ is true.
             */
            managedByIcon_: {
                reflectToAttribute: true,
                type: String,
                value() {
                    return loadTimeData.getString('managedByIcon');
                },
            },
        };
    }
    ready() {
        super.ready();
        this.addWebUiListener('is-managed-changed', (managed) => {
            loadTimeData.overrideValues({ isManaged: managed });
            this.isManaged_ = managed;
        });
    }
    /** @return Message to display to the user. */
    getManagementString_() {
        // 
        if (this.showDeviceInfo) {
            return this.i18nAdvanced('deviceManagedByOrg');
        }
        // 
        return this.i18nAdvanced('browserManagedByOrg');
    }
}
customElements.define(ManagedFootnoteElement.is, ManagedFootnoteElement);
chrome.send('observeManagedUI');

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WRAPPER_CSS_CLASS = 'search-highlight-wrapper';
const ORIGINAL_CONTENT_CSS_CLASS = 'search-highlight-original-content';
const HIT_CSS_CLASS = 'search-highlight-hit';
const SEARCH_BUBBLE_CSS_CLASS = 'search-bubble';
/**
 * Replaces the the highlight wrappers given in |wrappers| with the original
 * search nodes.
 */
function removeHighlights(wrappers) {
    for (const wrapper of wrappers) {
        // If wrapper is already removed, do nothing.
        if (!wrapper.parentElement) {
            continue;
        }
        const originalContent = wrapper.querySelector(`.${ORIGINAL_CONTENT_CSS_CLASS}`);
        assert(originalContent);
        const textNode = originalContent.firstChild;
        assert(textNode);
        wrapper.parentElement.replaceChild(textNode, wrapper);
    }
}
/**
 * Finds all previous highlighted nodes under |node| and replaces the
 * highlights (yellow rectangles) with the original search node. Searches only
 * within the same shadowRoot and assumes that only one highlight wrapper
 * exists under |node|.
 */
function findAndRemoveHighlights(node) {
    const wrappers = Array.from(node
        .querySelectorAll(`.${WRAPPER_CSS_CLASS}`));
    assert(wrappers.length === 1);
    removeHighlights(wrappers);
}
/**
 * Applies the highlight UI (yellow rectangle) around all matches in |node|.
 * @param node The text node to be highlighted. |node| ends up
 *     being hidden.
 * @return The new highlight wrapper.
 */
function highlight(node, ranges) {
    assert(ranges.length > 0);
    const wrapper = document.createElement('span');
    wrapper.classList.add(WRAPPER_CSS_CLASS);
    // Use existing node as placeholder to determine where to insert the
    // replacement content.
    assert(node.parentNode);
    node.parentNode.replaceChild(wrapper, node);
    // Keep the existing node around for when the highlights are removed. The
    // existing text node might be involved in data-binding and therefore should
    // not be discarded.
    const span = document.createElement('span');
    span.classList.add(ORIGINAL_CONTENT_CSS_CLASS);
    span.style.display = 'none';
    span.appendChild(node);
    wrapper.appendChild(span);
    const text = node.textContent;
    const tokens = [];
    for (let i = 0; i < ranges.length; ++i) {
        const range = ranges[i];
        const prev = ranges[i - 1] || { start: 0, length: 0 };
        const start = prev.start + prev.length;
        const length = range.start - start;
        tokens.push(text.substr(start, length));
        tokens.push(text.substr(range.start, range.length));
    }
    const last = ranges.slice(-1)[0];
    tokens.push(text.substr(last.start + last.length));
    for (let i = 0; i < tokens.length; ++i) {
        if (i % 2 === 0) {
            wrapper.appendChild(document.createTextNode(tokens[i]));
        }
        else {
            const hitSpan = document.createElement('span');
            hitSpan.classList.add(HIT_CSS_CLASS);
            // Defaults to the color associated with --paper-yellow-500.
            hitSpan.style.backgroundColor =
                'var(--search-highlight-hit-background-color, #ffeb3b)';
            // Defaults to the color associated with --google-grey-900.
            hitSpan.style.color = 'var(--search-highlight-hit-color, #202124)';
            hitSpan.textContent = tokens[i];
            wrapper.appendChild(hitSpan);
        }
    }
    return wrapper;
}
/**
 * Creates an empty search bubble (styled HTML element without text).
 * |node| should already be visible or the bubble will render incorrectly.
 * @param node The node to be highlighted.
 * @param horizontallyCenter Whether or not to horizontally center
 *     the shown search bubble (if any) based on |node|'s left and width.
 * @return The search bubble that was added, or null if no new
 *     bubble was added.
 */
function createEmptySearchBubble(node, horizontallyCenter) {
    let anchor = node;
    if (node.nodeName === 'SELECT') {
        anchor = node.parentNode;
    }
    if (anchor instanceof ShadowRoot) {
        anchor = anchor.host.parentNode;
    }
    let searchBubble = anchor
        .querySelector(`.${SEARCH_BUBBLE_CSS_CLASS}`);
    // If the node has already been highlighted, there is no need to do
    // anything.
    if (searchBubble) {
        return searchBubble;
    }
    searchBubble = document.createElement('div');
    searchBubble.classList.add(SEARCH_BUBBLE_CSS_CLASS);
    const innards = document.createElement('div');
    innards.classList.add('search-bubble-innards');
    innards.textContent = '\u00a0'; // Non-breaking space for offsetHeight.
    searchBubble.appendChild(innards);
    anchor.appendChild(searchBubble);
    const updatePosition = function () {
        const nodeEl = node;
        assert(searchBubble);
        assert(typeof nodeEl.offsetTop === 'number');
        searchBubble.style.top = nodeEl.offsetTop +
            (innards.classList.contains('above') ? -searchBubble.offsetHeight :
                nodeEl.offsetHeight) +
            'px';
        if (horizontallyCenter) {
            const width = nodeEl.offsetWidth - searchBubble.offsetWidth;
            searchBubble.style.left = nodeEl.offsetLeft + width / 2 + 'px';
        }
    };
    updatePosition();
    searchBubble.addEventListener('mouseover', function () {
        innards.classList.toggle('above');
        updatePosition();
    });
    // TODO(crbug.com/355446): create a way to programmatically update these
    // bubbles (i.e. call updatePosition()) when outer scope knows they need to
    // be repositioned.
    return searchBubble;
}
function stripDiacritics(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function getTemplate$G() {
    return html `<!--_html_template_start_-->    <style>:host{display:flex;flex-direction:column;outline:0;position:relative}#header{display:flex;justify-content:space-between;padding-inline-end:var(--cr-section-padding)}#header .title{color:var(--cr-primary-text-color);font-size:108%;font-weight:400;letter-spacing:.25px;margin-bottom:12px;margin-top:var(--cr-section-vertical-margin);outline:0;padding-bottom:4px;padding-top:8px}#feedback{margin-top:var(--cr-section-vertical-margin)}:host(:not(.expanded)) #card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);flex:1;overflow:hidden}@media (forced-colors:active){:host(:not(.expanded)) #card{border:var(--cr-border-hcm)}}:host(.expanded) #header,:host([hidden-by-search]){display:none}</style>
    <div id="header">
      <h2 id="title" class="title" tabindex="-1" aria-hidden$="[[getTitleHiddenStatus_(pageTitle)]]">[[pageTitle]]</h2>
      <template is="dom-if" if="[[showSendFeedbackButton]]">
        <cr-icon-button id="feedback" iron-icon="settings:feedback" dir="ltr" aria-labelledby="title" aria-roledescription="$i18n{sendFeedbackButton}" on-click="onSendFeedbackClick_">
        </cr-icon-button>
      </template>
    </div>
    <div id="card">
      <slot></slot>
    </div>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-section' shows a paper material themed section with a header
 * which shows its page title.
 *
 * The section can expand vertically to fill its container's padding edge.
 *
 * Example:
 *
 *    <settings-section page-title="[[pageTitle]]" section="privacy">
 *      <!-- Insert your section controls here -->
 *    </settings-section>
 */
class SettingsSectionElement extends PolymerElement {
    static get is() {
        return 'settings-section';
    }
    static get template() {
        return getTemplate$G();
    }
    static get properties() {
        return {
            /**
             * The section name should match a name specified in route.js. The
             * MainPageBeMixin will expand this section if this section name matches
             * currentRoute.section.
             */
            section: String,
            /**
             * Title for the section header. Initialize so we can use the
             * getTitleHiddenStatus_ method for accessibility.
             */
            pageTitle: {
                type: String,
                value: '',
            },
            /**
             * A CSS attribute used for temporarily hiding a SETTINGS-SECTION for the
             * purposes of searching.
             */
            hiddenBySearch: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /**
             * When this attribute is enabled, a send feedback button will be shown
             * that emits a 'send-feedback' event.
             */
            showSendFeedbackButton: {
                type: Boolean,
                value: false,
            },
        };
    }
    /**
     * Get the value to which to set the aria-hidden attribute of the section
     * heading.
     * @return A return value of false will not add aria-hidden while aria-hidden
     *    requires a string of 'true' to be hidden as per aria specs. This
     *    function ensures we have the right return type.
     */
    getTitleHiddenStatus_() {
        return this.pageTitle ? false : 'true';
    }
    focus() {
        this.shadowRoot.querySelector('.title').focus();
    }
    onSendFeedbackClick_() {
        this.dispatchEvent(new CustomEvent('send-feedback', { bubbles: true, composed: true }));
    }
}
customElements.define(SettingsSectionElement.is, SettingsSectionElement);

const styleMod$1 = document.createElement('dom-module');
styleMod$1.appendChild(html `
  <template>
    <style>
:host(.showing-subpage) settings-section:not(.expanded){display:none}:host>div>:not(.expanded){margin-bottom:3px}.expanded{min-height:100%}
    </style>
  </template>
`.content);
styleMod$1.register('settings-page-styles');

function getTemplate$F() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style settings-shared settings-page-styles iron-flex">:host{--about-page-image-space:10px}.info-sections{padding:var(--cr-section-vertical-padding) var(--cr-section-padding)}.info-section{margin-bottom:12px}.product-title{font-size:153.85%;font-weight:400;margin-bottom:auto;margin-top:auto}img{margin-inline-end:var(--about-page-image-space)}.icon-container{margin-inline-end:var(--about-page-image-space);min-width:32px;text-align:center}iron-icon[icon='settings:check-circle']{fill:var(--cr-checked-color)}iron-icon[icon='cr:error']{fill:var(--settings-error-color)}cr-button{white-space:nowrap}</style>
    <settings-section page-title="$i18n{aboutPageTitle}" section="about">
      <div class="cr-row two-line first">
        <img id="product-logo" on-click="onProductLogoClick_" srcset="chrome://theme/current-channel-logo@1x, chrome://theme/current-channel-logo@2x 2x" alt="$i18n{aboutProductLogoAlt}" role="presentation">
        <div class="product-title">$i18n{aboutProductTitle}</div>
      </div>
      <div class="cr-row two-line">
        

        <div class="flex cr-padded-text">

          <div class="secondary">$i18n{aboutBrowserVersion}</div>
        </div>

      </div>

      <cr-link-row class="hr" id="help" on-click="onHelpClick_" label="$i18n{aboutGetHelpUsingChrome}" external></cr-link-row>

      <cr-link-row class="hr" on-click="onManagementPageClick_" start-icon="[[managedByIcon_]]" label="$i18n{managementPage}" role-description="$i18n{subpageArrowRoleDescription}" hidden$="[[!isManaged_]]"></cr-link-row>
    </settings-section>

    <settings-section>
      <div class="info-sections">
        <div class="info-section">
          <div class="secondary">$i18n{aboutProductTitle}</div>
          <div class="secondary">$i18n{aboutProductCopyright}</div>
        </div>

        <div class="info-section">
          <div class="secondary">$i18nRaw{aboutProductLicense}</div>
        </div>


      </div>
    </settings-section>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the "About" section to interact with
 * the browser.
 */
/**
 * Enumeration of all possible update statuses. The string literals must match
 * the ones defined at |AboutHandler::UpdateStatusToString|.
 * @enum {string}
 */
var UpdateStatus;
(function (UpdateStatus) {
    UpdateStatus["CHECKING"] = "checking";
    UpdateStatus["UPDATING"] = "updating";
    UpdateStatus["NEARLY_UPDATED"] = "nearly_updated";
    UpdateStatus["UPDATED"] = "updated";
    UpdateStatus["FAILED"] = "failed";
    UpdateStatus["FAILED_HTTP"] = "failed_http";
    UpdateStatus["FAILED_DOWNLOAD"] = "failed_download";
    UpdateStatus["DISABLED"] = "disabled";
    UpdateStatus["DISABLED_BY_ADMIN"] = "disabled_by_admin";
    UpdateStatus["NEED_PERMISSION_TO_UPDATE"] = "need_permission_to_update";
})(UpdateStatus || (UpdateStatus = {}));
class AboutPageBrowserProxyImpl {
    pageReady() {
        chrome.send('aboutPageReady');
    }
    refreshUpdateStatus() {
        chrome.send('refreshUpdateStatus');
    }
    // 
    openHelpPage() {
        chrome.send('openHelpPage');
    }
    // 
    static getInstance() {
        return instance$c || (instance$c = new AboutPageBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance$c = obj;
    }
}
let instance$c = null;

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-about-page' contains version and OS related
 * information.
 */
// clang-format off
// 
// clang-format on
// 
const SettingsAboutPageElementBase = RelaunchMixin(WebUiListenerMixin(I18nMixin(PolymerElement)));
class SettingsAboutPageElement extends SettingsAboutPageElementBase {
    constructor() {
        super(...arguments);
        // 
        // 
        // 
        this.aboutBrowserProxy_ = AboutPageBrowserProxyImpl.getInstance();
        // 
        // 
    }
    static get is() {
        return 'settings-about-page';
    }
    static get template() {
        return getTemplate$F();
    }
    static get properties() {
        return {
            currentUpdateStatusEvent_: {
                type: Object,
                value: {
                    message: '',
                    progress: 0,
                    rollback: false,
                    status: UpdateStatus.DISABLED,
                },
            },
            /**
             * Whether the browser/ChromeOS is managed by their organization
             * through enterprise policies.
             */
            isManaged_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isManaged');
                },
            },
            /**
             * The name of the icon to display in the management card.
             * Should only be read if isManaged_ is true.
             */
            managedByIcon_: {
                type: String,
                value() {
                    return loadTimeData.getString('managedByIcon');
                },
            },
            // 
            // 
            // 
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.aboutBrowserProxy_.pageReady();
        // 
    }
    getPromoteUpdaterClass_() {
        // 
        return '';
    }
    // 
    // 
    onLearnMoreClick_(event) {
        // Stop the propagation of events, so that clicking on links inside
        // actionable items won't trigger action.
        event.stopPropagation();
    }
    onHelpClick_() {
        this.aboutBrowserProxy_.openHelpPage();
    }
    onRelaunchClick_() {
        this.performRestart(RestartType.RELAUNCH);
    }
    // 
    checkStatus_(status) {
        return this.currentUpdateStatusEvent_.status === status;
    }
    onManagementPageClick_() {
        window.location.href = loadTimeData.getString('managementPageUrl');
    }
    onProductLogoClick_() {
        this.$['product-logo'].animate({
            transform: ['none', 'rotate(-10turn)'],
        }, {
            duration: 500,
            easing: 'cubic-bezier(1, 0, 0, 1)',
        });
    }
}
customElements.define(SettingsAboutPageElement.is, SettingsAboutPageElement);

function getTemplate$E() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared">.list-frame{padding-inline-end:0}.list-frame settings-toggle-button{padding-inline-start:0}</style>

<settings-toggle-button pref="{{prefs.optimization_guide.model_execution_main_toggle_setting_state}}" numeric-unchecked-values="[[numericUncheckedValues_]]" numeric-checked-value="[[featureOptInStateEnum_.ENABLED]]" label="$i18n{aiPageMainLabel}" sub-label="$i18n{aiPageMainSublabel}" on-settings-boolean-control-change="onToggleChange_">
</settings-toggle-button>

<iron-collapse opened="[[isExpanded_(
    prefs.optimization_guide.model_execution_main_toggle_setting_state.value)]]">
  <div class="list-frame">
    <settings-toggle-button hidden="[[!showComposeControl_]]" pref="{{prefs.optimization_guide.compose_setting_state}}" numeric-unchecked-values="[[numericUncheckedValues_]]" numeric-checked-value="[[featureOptInStateEnum_.ENABLED]]" label="$i18n{aiComposeLabel}" sub-label="$i18n{aiComposeSublabel}" on-settings-boolean-control-change="onToggleChange_">
    </settings-toggle-button>
    <settings-toggle-button class$="[[getTabOrganizationHrCssClass_(showComposeControl_)]]" hidden="[[!showTabOrganizationControl_]]" pref="{{prefs.optimization_guide.tab_organization_setting_state}}" numeric-unchecked-values="[[numericUncheckedValues_]]" numeric-checked-value="[[featureOptInStateEnum_.ENABLED]]" label="$i18n{experimentalAdvancedFeature2Label}" sub-label="$i18n{experimentalAdvancedFeature2Sublabel}" on-settings-boolean-control-change="onToggleChange_">
    </settings-toggle-button>
    <settings-toggle-button class$="[[getWallpaperSearchHrCssClass_(
            showComposeControl_, showTabOrganizationControl_)]]" hidden="[[!showWallpaperSearchControl_]]" pref="{{prefs.optimization_guide.wallpaper_search_setting_state}}" numeric-unchecked-values="[[numericUncheckedValues_]]" numeric-checked-value="[[featureOptInStateEnum_.ENABLED]]" label="$i18n{experimentalAdvancedFeature3Label}" sub-label="$i18n{experimentalAdvancedFeature3Sublabel}" on-settings-boolean-control-change="onToggleChange_">
    </settings-toggle-button>
  </div>
</iron-collapse>

<cr-toast id="toast">
  <div>$i18n{restartToApplyChanges}</div>
  <cr-button on-click="onRestartClick_">$i18n{restart}</cr-button>
</cr-toast>


<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// These values must stay in sync with
// optimization_guide::prefs::FeatureOptInState in
// components/optimization_guide/core/optimization_guide_prefs.h.
var FeatureOptInState;
(function (FeatureOptInState) {
    FeatureOptInState[FeatureOptInState["NOT_INITIALIZED"] = 0] = "NOT_INITIALIZED";
    FeatureOptInState[FeatureOptInState["ENABLED"] = 1] = "ENABLED";
    FeatureOptInState[FeatureOptInState["DISABLED"] = 2] = "DISABLED";
})(FeatureOptInState || (FeatureOptInState = {}));
// Exporting pref names so that they can be referenced by tests.
var SettingsAiPageFeaturePrefName;
(function (SettingsAiPageFeaturePrefName) {
    SettingsAiPageFeaturePrefName["MAIN"] = "optimization_guide.model_execution_main_toggle_setting_state";
    SettingsAiPageFeaturePrefName["COMPOSE"] = "optimization_guide.compose_setting_state";
    SettingsAiPageFeaturePrefName["TAB_ORGANIZATION"] = "optimization_guide.tab_organization_setting_state";
    SettingsAiPageFeaturePrefName["WALLPAPER_SEARCH"] = "optimization_guide.wallpaper_search_setting_state";
})(SettingsAiPageFeaturePrefName || (SettingsAiPageFeaturePrefName = {}));
const SettingsAiPageElementBase = RelaunchMixin(PrefsMixin(PolymerElement));
class SettingsAiPageElement extends SettingsAiPageElementBase {
    static get is() {
        return 'settings-ai-page';
    }
    static get template() {
        return getTemplate$E();
    }
    static get properties() {
        return {
            prefs: {
                type: Object,
                notify: true,
            },
            showComposeControl_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('showComposeControl'),
            },
            showTabOrganizationControl_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('showTabOrganizationControl'),
            },
            showWallpaperSearchControl_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('showWallpaperSearchControl'),
            },
            featureOptInStateEnum_: {
                type: Object,
                value: FeatureOptInState,
            },
            numericUncheckedValues_: {
                type: Array,
                value: () => [FeatureOptInState.DISABLED, FeatureOptInState.NOT_INITIALIZED],
            },
        };
    }
    onToggleChange_() {
        this.$.toast.show();
    }
    onRestartClick_(e) {
        e.stopPropagation();
        this.performRestart(RestartType.RESTART);
    }
    isExpanded_() {
        return this.getPref(SettingsAiPageFeaturePrefName.MAIN).value ===
            FeatureOptInState.ENABLED;
    }
    getTabOrganizationHrCssClass_() {
        return this.showComposeControl_ ? 'hr' : '';
    }
    getWallpaperSearchHrCssClass_() {
        return this.showComposeControl_ || this.showTabOrganizationControl_ ? 'hr' :
            '';
    }
}
customElements.define(SettingsAiPageElement.is, SettingsAiPageElement);

function getTemplate$D() {
    return html `<!--_html_template_start_--><style>iron-icon{--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size);padding-inline-end:10px}cr-dialog::part(body-container){padding-inline-start:35px}</style>

<cr-dialog id="dialog" close-text="[[i18n('close')]]" show-on-attach>
  <div slot="title">
    <iron-icon icon="cr:domain" role="img" aria-label="[[i18n('controlledSettingPolicy')]]">
    </iron-icon>
    [[title]]
  </div>
  <div slot="body">[[body]]</div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onOkClick_">
      [[i18n('ok')]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'managed-dialog' is a dialog that is displayed when a user
 * interact with some UI features which are managed by the user's organization.
 */
const ManagedDialogElementBase = I18nMixin(PolymerElement);
class ManagedDialogElement extends ManagedDialogElementBase {
    static get is() {
        return 'managed-dialog';
    }
    static get template() {
        return getTemplate$D();
    }
    static get properties() {
        return {
            /** Managed dialog title text. */
            title: String,
            /** Managed dialog body text. */
            body: String,
        };
    }
    onOkClick_() {
        this.$.dialog.close();
    }
}
customElements.define(ManagedDialogElement.is, ManagedDialogElement);

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** This is used to identify keyboard shortcuts. */
class KeyboardShortcut {
    useKeyCode_ = false;
    mods_ = {};
    key_ = null;
    keyCode_ = null;
    /**
     * @param shortcut The text used to describe the keys for this
     *     keyboard shortcut.
     */
    constructor(shortcut) {
        shortcut.split('|').forEach((part) => {
            const partLc = part.toLowerCase();
            switch (partLc) {
                case 'alt':
                case 'ctrl':
                case 'meta':
                case 'shift':
                    this.mods_[partLc + 'Key'] = true;
                    break;
                default:
                    if (this.key_) {
                        throw Error('Invalid shortcut');
                    }
                    this.key_ = part;
                    // For single key alpha shortcuts use event.keyCode rather than
                    // event.key to match how chrome handles shortcuts and allow
                    // non-english language input to work.
                    if (part.match(/^[a-z]$/)) {
                        this.useKeyCode_ = true;
                        this.keyCode_ = part.toUpperCase().charCodeAt(0);
                    }
            }
        });
    }
    /**
     * Whether the keyboard shortcut object matches a keyboard event.
     * @param e The keyboard event object.
     * @return Whether we found a match or not.
     */
    matchesEvent(e) {
        if ((this.useKeyCode_ && e.keyCode === this.keyCode_) ||
            e.key === this.key_) {
            // All keyboard modifiers need to match.
            const mods = this.mods_;
            return ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].every(function (k) {
                return e[k] === !!mods[k];
            });
        }
        return false;
    }
}
/** A list of keyboard shortcuts which all perform one command. */
class KeyboardShortcutList {
    shortcuts_;
    /**
     * @param shortcuts Text-based representation of one or more
     *     keyboard shortcuts, separated by spaces.
     */
    constructor(shortcuts) {
        this.shortcuts_ = shortcuts.split(/\s+/).map(function (shortcut) {
            return new KeyboardShortcut(shortcut);
        });
    }
    /**
     * Returns true if any of the keyboard shortcuts in the list matches a
     * keyboard event.
     */
    matchesEvent(e) {
        return this.shortcuts_.some(function (keyboardShortcut) {
            return keyboardShortcut.matchesEvent(e);
        });
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Listens for a find keyboard shortcut (i.e. Ctrl/Cmd+f or /)
 * and keeps track of an stack of potential listeners. Only the listener at the
 * top of the stack will be notified that a find shortcut has been invoked.
 */
const FindShortcutManager = (() => {
    /**
     * Stack of listeners. Only the top listener will handle the shortcut.
     */
    const listeners = [];
    /**
     * Tracks if any modal context is open in settings. This assumes only one
     * modal can be open at a time. The modals that are being tracked include
     * cr-dialog and cr-drawer.
     * @type {boolean}
     */
    let modalContextOpen = false;
    const shortcutCtrlF = new KeyboardShortcutList(isMac ? 'meta|f' : 'ctrl|f');
    const shortcutSlash = new KeyboardShortcutList('/');
    window.addEventListener('keydown', e => {
        if (e.defaultPrevented || listeners.length === 0) {
            return;
        }
        const element = e.composedPath()[0];
        if (!shortcutCtrlF.matchesEvent(e) &&
            (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' ||
                !shortcutSlash.matchesEvent(e))) {
            return;
        }
        const focusIndex = listeners.findIndex(listener => listener.searchInputHasFocus());
        // If no listener has focus or the first (outer-most) listener has focus,
        // try the last (inner-most) listener.
        // If a listener has a search input with focus, the next listener that
        // should be called is the right before it in |listeners| such that the
        // goes from inner-most to outer-most.
        const index = focusIndex <= 0 ? listeners.length - 1 : focusIndex - 1;
        if (listeners[index].handleFindShortcut(modalContextOpen)) {
            e.preventDefault();
        }
    });
    window.addEventListener('cr-dialog-open', () => {
        modalContextOpen = true;
    });
    window.addEventListener('cr-drawer-opened', () => {
        modalContextOpen = true;
    });
    window.addEventListener('close', e => {
        if (['CR-DIALOG', 'CR-DRAWER'].includes(e.composedPath()[0].nodeName)) {
            modalContextOpen = false;
        }
    });
    return Object.freeze({ listeners: listeners });
})();
/**
 * Used to determine how to handle find shortcut invocations.
 */
const FindShortcutMixin = dedupingMixin((superClass) => {
    class FindShortcutMixin extends superClass {
        constructor() {
            super(...arguments);
            this.findShortcutListenOnAttach = true;
        }
        connectedCallback() {
            super.connectedCallback();
            if (this.findShortcutListenOnAttach) {
                this.becomeActiveFindShortcutListener();
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this.findShortcutListenOnAttach) {
                this.removeSelfAsFindShortcutListener();
            }
        }
        becomeActiveFindShortcutListener() {
            const listeners = FindShortcutManager.listeners;
            assert(!listeners.includes(this), 'Already listening for find shortcuts.');
            listeners.push(this);
        }
        handleFindShortcutInternal_() {
            assertNotReached('Must override handleFindShortcut()');
        }
        handleFindShortcut(_modalContextOpen) {
            this.handleFindShortcutInternal_();
            return false;
        }
        removeSelfAsFindShortcutListener() {
            const listeners = FindShortcutManager.listeners;
            const index = listeners.indexOf(this);
            assert(listeners.includes(this), 'Find shortcut listener not found.');
            listeners.splice(index, 1);
        }
        searchInputHasFocusInternal_() {
            assertNotReached('Must override searchInputHasFocus()');
        }
        searchInputHasFocus() {
            this.searchInputHasFocusInternal_();
            return false;
        }
    }
    return FindShortcutMixin;
});

function getTemplate$C() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style settings-shared">:host{box-sizing:border-box;display:block;left:0;min-height:calc(100vh - var(--cr-toolbar-height) - var(--cr-toolbar-padding-top,0px));padding-bottom:60px;position:absolute;right:0;top:0}:host(:not(.multi-card)){background-color:var(--cr-card-background-color);box-shadow:var(--cr-card-shadow)}@media (forced-colors:active){:host(:not(.multi-card)){border-inline-end:var(--cr-border-hcm);border-inline-start:var(--cr-border-hcm)}}#headerLine{min-height:40px;padding-bottom:24px;padding-top:8px}#learnMore{align-items:center;display:flex;height:var(--cr-icon-ripple-size);justify-content:center;margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);position:relative;width:var(--cr-icon-ripple-size)}#title-icon{height:36px;width:36px}#favicon,#title-icon{margin-inline-end:12px;margin-inline-start:2px}#closeButton{margin-inline-end:10px;margin-inline-start:-10px}paper-spinner-lite{height:var(--cr-icon-size);width:var(--cr-icon-size)}h1{flex:1}cr-search-field{margin-inline-start:16px}</style>
    <div class="cr-row first" id="headerLine">
      <cr-icon-button class="icon-arrow-back" id="closeButton" hidden="[[hideCloseButton]]" on-click="onBackClick_" aria-label$="[[getBackButtonAriaLabel_(pageTitle)]]" aria-roledescription$="[[getBackButtonAriaRoleDescription_(pageTitle)]]">
      </cr-icon-button>
      <template is="dom-if" if="[[titleIcon]]">
        <img id="title-icon" src="[[titleIcon]]" aria-hidden="true">
      </template>
      <template is="dom-if" if="[[faviconSiteUrl]]">
        <site-favicon id="favicon" url="[[faviconSiteUrl]]" aria-hidden="true">
        </site-favicon>
      </template>
      <h1 class="cr-title-text">[[pageTitle]]</h1>
      <slot name="subpage-title-extra"></slot>
      <template is="dom-if" if="[[learnMoreUrl]]">
        <cr-icon-button iron-icon="cr:help-outline" dir="ltr" aria-label="[[getLearnMoreAriaLabel_(pageTitle)]]" aria-description="$i18n{opensInNewTab}" on-click="onHelpClick_">
        </cr-icon-button>
      </template>
      <template is="dom-if" if="[[searchLabel]]">
        <cr-search-field label="[[searchLabel]]" on-search-changed="onSearchChanged_" clear-label="$i18n{clearSearch}">
        </cr-search-field>
      </template>
      <template is="dom-if" if="[[showSpinner]]">
        <paper-spinner-lite active title$="[[spinnerTitle]]">
        </paper-spinner-lite>
      </template>
    </div>
    <slot></slot>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-subpage' shows a subpage beneath a subheader. The header contains
 * the subpage title, a search field and a back icon.
 */
const SETTING_ID_URL_PARAM_NAME = 'settingId';
/**
 * Retrieves the setting ID saved in the URL's query parameter. Returns null if
 * setting ID is unavailable.
 */
function getSettingIdParameter() {
    return Router.getInstance().getQueryParameters().get(SETTING_ID_URL_PARAM_NAME);
}
const SettingsSubpageElementBase = mixinBehaviors([IronResizableBehavior], RouteObserverMixin(FindShortcutMixin(I18nMixin(PolymerElement))));
class SettingsSubpageElement extends SettingsSubpageElementBase {
    static get is() {
        return 'settings-subpage';
    }
    static get properties() {
        return {
            pageTitle: String,
            /** Setting this will display the icon at the given URL. */
            titleIcon: String,
            /** Setting this will display the favicon of the website. */
            faviconSiteUrl: String,
            learnMoreUrl: String,
            /** Setting a |searchLabel| will enable search. */
            searchLabel: String,
            searchTerm: {
                type: String,
                notify: true,
                value: '',
            },
            /** If true shows an active spinner at the end of the subpage header. */
            showSpinner: {
                type: Boolean,
                value: false,
            },
            /**
             * Title (i.e., tooltip) to be displayed on the spinner. If |showSpinner|
             * is false, this field has no effect.
             */
            spinnerTitle: {
                type: String,
                value: '',
            },
            /**
             * Whether we should hide the "close" button to get to the previous page.
             */
            hideCloseButton: {
                type: Boolean,
                value: false,
            },
            /**
             * Indicates which element triggers this subpage. Used by the searching
             * algorithm to show search bubbles. It is |null| for subpages that are
             * skipped during searching.
             */
            associatedControl: {
                type: Object,
                value: null,
            },
            /**
             * Whether the subpage search term should be preserved across navigations.
             */
            preserveSearchTerm: {
                type: Boolean,
                value: false,
            },
            active_: {
                type: Boolean,
                value: false,
                observer: 'onActiveChanged_',
            },
        };
    }
    constructor() {
        super();
        this.lastActiveValue_ = false;
        this.eventTracker_ = null;
        // Override FindShortcutMixin property.
        this.findShortcutListenOnAttach = false;
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.searchLabel) {
            // |searchLabel| should not change dynamically.
            this.eventTracker_ = new EventTracker();
            this.eventTracker_.add(this, 'clear-subpage-search', this.onClearSubpageSearch_);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.eventTracker_) {
            // |searchLabel| should not change dynamically.
            this.eventTracker_.removeAll();
        }
    }
    getSearchField_() {
        let searchField = this.shadowRoot.querySelector('cr-search-field');
        if (searchField) {
            return Promise.resolve(searchField);
        }
        return new Promise(resolve => {
            listenOnce(this, 'dom-change', () => {
                searchField = this.shadowRoot.querySelector('cr-search-field');
                assert(!!searchField);
                resolve(searchField);
            });
        });
    }
    /** Restore search field value from URL search param */
    restoreSearchInput_() {
        const searchField = this.shadowRoot.querySelector('cr-search-field');
        const urlSearchQuery = Router.getInstance().getQueryParameters().get('searchSubpage') || '';
        this.searchTerm = urlSearchQuery;
        searchField.setValue(urlSearchQuery);
    }
    /** Preserve search field value to URL search param */
    preserveSearchInput_() {
        const query = this.searchTerm;
        const searchParams = query.length > 0 ?
            new URLSearchParams('searchSubpage=' + encodeURIComponent(query)) :
            undefined;
        const currentRoute = Router.getInstance().getCurrentRoute();
        Router.getInstance().navigateTo(currentRoute, searchParams);
    }
    /** Focuses the back button when page is loaded. */
    focusBackButton() {
        if (this.hideCloseButton) {
            return;
        }
        afterNextRender(this, () => focusWithoutInk(this.$.closeButton));
    }
    currentRouteChanged(newRoute, oldRoute) {
        this.active_ = this.getAttribute('route-path') === newRoute.path;
        if (this.active_ && this.searchLabel && this.preserveSearchTerm) {
            this.getSearchField_().then(() => this.restoreSearchInput_());
        }
        if (!oldRoute && !getSettingIdParameter()) {
            // If a settings subpage is opened directly (i.e the |oldRoute| is null,
            // e.g via an OS settings search result that surfaces from the Chrome OS
            // launcher, or linking from other places of Chrome UI), the back button
            // should be focused since it's the first actionable element in the the
            // subpage. An exception is when a setting is deep linked, focus that
            // setting instead of back button.
            this.focusBackButton();
        }
    }
    onActiveChanged_() {
        if (this.lastActiveValue_ === this.active_) {
            return;
        }
        this.lastActiveValue_ = this.active_;
        if (this.active_ && this.pageTitle) {
            document.title =
                loadTimeData.getStringF('settingsAltPageTitle', this.pageTitle);
        }
        if (!this.searchLabel) {
            return;
        }
        const searchField = this.shadowRoot.querySelector('cr-search-field');
        if (searchField) {
            searchField.setValue('');
        }
        if (this.active_) {
            this.becomeActiveFindShortcutListener();
        }
        else {
            this.removeSelfAsFindShortcutListener();
        }
    }
    /** Clear the value of the search field. */
    onClearSubpageSearch_(e) {
        e.stopPropagation();
        this.shadowRoot.querySelector('cr-search-field').setValue('');
    }
    onBackClick_() {
        Router.getInstance().navigateToPreviousRoute();
    }
    onHelpClick_() {
        window.open(this.learnMoreUrl);
    }
    onSearchChanged_(e) {
        if (this.searchTerm === e.detail) {
            return;
        }
        this.searchTerm = e.detail;
        if (this.preserveSearchTerm && this.active_) {
            this.preserveSearchInput_();
        }
    }
    getBackButtonAriaLabel_() {
        return this.i18n('subpageBackButtonAriaLabel', this.pageTitle);
    }
    getBackButtonAriaRoleDescription_() {
        return this.i18n('subpageBackButtonAriaRoleDescription', this.pageTitle);
    }
    getLearnMoreAriaLabel_() {
        return this.i18n('subpageLearnMoreAriaLabel', this.pageTitle);
    }
    // Override FindShortcutMixin methods.
    handleFindShortcut(modalContextOpen) {
        if (modalContextOpen) {
            return false;
        }
        this.shadowRoot.querySelector('cr-search-field').getSearchInput().focus();
        return true;
    }
    // Override FindShortcutMixin methods.
    searchInputHasFocus() {
        const field = this.shadowRoot.querySelector('cr-search-field');
        return field.getSearchInput() === field.shadowRoot.activeElement;
    }
    static get template() {
        return getTemplate$C();
    }
}
customElements.define(SettingsSubpageElement.is, SettingsSubpageElement);

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
class AppearanceBrowserProxyImpl {
    getDefaultZoom() {
        return chrome.settingsPrivate.getDefaultZoom();
    }
    getThemeInfo(themeId) {
        return chrome.management.get(themeId);
    }
    isChildAccount() {
        return loadTimeData.getBoolean('isChildAccount');
    }
    recordHoverCardImagesEnabledChanged(enabled) {
        chrome.metricsPrivate.recordBoolean('Settings.HoverCards.ImagePreview.Enabled', enabled);
    }
    useDefaultTheme() {
        chrome.send('useDefaultTheme');
    }
    // 
    validateStartupPage(url) {
        return sendWithPromise('validateStartupPage', url);
    }
    static getInstance() {
        return instance$b || (instance$b = new AppearanceBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance$b = obj;
    }
}
let instance$b = null;

function getTemplate$B() {
    return html `<!--_html_template_start_-->    <style>:host{cursor:auto;display:block;width:100%}cr-input{width:100%;--cr-input-width:50%}cr-input::part(row-container){justify-content:normal}</style>
    
    <cr-input id="input" value="{{value}}" error-message="$i18n{notValid}" placeholder="$i18n{enterCustomWebAddress}" maxlength="102400" on-change="onChange_" on-keydown="onKeydown_" on-input="validate_" invalid="{{invalid}}" input-tabindex="[[getTabindex_(canTab)]]" disabled="[[isDisabled_(disabled, pref.*)]]" spellcheck="false" on-keyup="stopKeyEventPropagation_" on-keypress="stopKeyEventPropagation_">
      <template is="dom-if" if="[[hasPrefPolicyIndicator(pref.*)]]">
        <cr-policy-pref-indicator pref="[[pref]]" icon-aria-label="[[label]]" slot="suffix">
        </cr-policy-pref-indicator>
      </template>
    </cr-input>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * `home-url-input` is a single-line text field intending to be used with
 * prefs.homepage
 */
const HomeUrlInputElementBase = CrPolicyPrefMixin(PrefControlMixin(PolymerElement));
class HomeUrlInputElement extends HomeUrlInputElementBase {
    static get is() {
        return 'home-url-input';
    }
    static get template() {
        return getTemplate$B();
    }
    static get properties() {
        return {
            /**
             * The preference object to control.
             */
            pref: { observer: 'prefChanged_' },
            /* Set to true to disable editing the input. */
            disabled: { type: Boolean, value: false, reflectToAttribute: true },
            canTab: Boolean,
            invalid: { type: Boolean, value: false },
            /* The current value of the input, reflected to/from |pref|. */
            value: {
                type: String,
                value: '',
                notify: true,
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = AppearanceBrowserProxyImpl.getInstance();
        this.noExtensionIndicator = true; // Prevent double indicator.
    }
    /**
     * Focuses the 'input' element.
     */
    focus() {
        this.$.input.focus();
    }
    /**
     * Polymer changed observer for |pref|.
     */
    prefChanged_() {
        if (!this.pref) {
            return;
        }
        this.setInputValueFromPref_();
    }
    setInputValueFromPref_() {
        assert(this.pref.type === chrome.settingsPrivate.PrefType.URL);
        this.value = this.pref.value;
    }
    /**
     * Gets a tab index for this control if it can be tabbed to.
     */
    getTabindex_(canTab) {
        return canTab ? 0 : -1;
    }
    /**
     * Change event handler for cr-input. Updates the pref value.
     * settings-input uses the change event because it is fired by the Enter key.
     */
    onChange_() {
        if (this.invalid) {
            this.resetValue_();
            return;
        }
        assert(this.pref.type === chrome.settingsPrivate.PrefType.URL);
        this.set('pref.value', this.value);
    }
    resetValue_() {
        this.invalid = false;
        this.setInputValueFromPref_();
        this.$.input.blur();
    }
    /**
     * Keydown handler to specify enter-key and escape-key interactions.
     */
    onKeydown_(event) {
        // If pressed enter when input is invalid, do not trigger on-change.
        if (event.key === 'Enter' && this.invalid) {
            event.preventDefault();
        }
        else if (event.key === 'Escape') {
            this.resetValue_();
        }
        this.stopKeyEventPropagation_(event);
    }
    /**
     * This function prevents unwanted change of selection of the containing
     * cr-radio-group, when the user traverses the input with arrow keys.
     */
    stopKeyEventPropagation_(e) {
        e.stopPropagation();
    }
    /** @return Whether the element should be disabled. */
    isDisabled_(disabled) {
        return disabled || this.isPrefEnforced();
    }
    validate_() {
        if (this.value === '') {
            this.invalid = false;
            return;
        }
        this.browserProxy_.validateStartupPage(this.value).then(isValid => {
            this.invalid = !isValid;
        });
    }
}
customElements.define(HomeUrlInputElement.is, HomeUrlInputElement);

// ui/webui/resources/cr_components/customize_color_scheme_mode/customize_color_scheme_mode.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ColorSchemeModeSpec = { $: mojo.internal.Enum() };
var ColorSchemeMode;
(function (ColorSchemeMode) {
    ColorSchemeMode[ColorSchemeMode["MIN_VALUE"] = 0] = "MIN_VALUE";
    ColorSchemeMode[ColorSchemeMode["MAX_VALUE"] = 2] = "MAX_VALUE";
    ColorSchemeMode[ColorSchemeMode["kSystem"] = 0] = "kSystem";
    ColorSchemeMode[ColorSchemeMode["kLight"] = 1] = "kLight";
    ColorSchemeMode[ColorSchemeMode["kDark"] = 2] = "kDark";
})(ColorSchemeMode || (ColorSchemeMode = {}));
class CustomizeColorSchemeModeHandlerFactoryPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory', scope);
    }
}
class CustomizeColorSchemeModeHandlerFactoryRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(CustomizeColorSchemeModeHandlerFactoryPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    createCustomizeColorSchemeModeHandler(pendingClient, pendingHandler) {
        this.proxy.sendMessage(0, CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsSpec.$, null, [
            pendingClient,
            pendingHandler
        ]);
    }
}
class CustomizeColorSchemeModeHandlerFactory {
    static get $interfaceName() {
        return "customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandlerFactory";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new CustomizeColorSchemeModeHandlerFactoryRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
class CustomizeColorSchemeModeHandlerPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeHandler', scope);
    }
}
class CustomizeColorSchemeModeHandlerRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(CustomizeColorSchemeModeHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    setColorSchemeMode(colorSchemeMode) {
        this.proxy.sendMessage(0, CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsSpec.$, null, [
            colorSchemeMode
        ]);
    }
    initializeColorSchemeMode() {
        this.proxy.sendMessage(1, CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsSpec.$, null, []);
    }
}
class CustomizeColorSchemeModeClientPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'customize_color_scheme_mode.mojom.CustomizeColorSchemeModeClient', scope);
    }
}
class CustomizeColorSchemeModeClientRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(CustomizeColorSchemeModeClientPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    setColorSchemeMode(colorSchemeMode) {
        this.proxy.sendMessage(0, CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsSpec.$, null, [
            colorSchemeMode
        ]);
    }
}
/**
 * An object which receives request messages for the CustomizeColorSchemeModeClient
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class CustomizeColorSchemeModeClientCallbackRouter {
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(CustomizeColorSchemeModeClientRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.setColorSchemeMode =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(0, CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsSpec.$, null, this.setColorSchemeMode.createReceiverHandler(false /* expectsResponse */));
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id) {
        return this.router_.removeListener(id);
    }
}
const CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsSpec = { $: {} };
const CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsSpec = { $: {} };
const CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsSpec = { $: {} };
const CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsSpec = { $: {} };
mojo.internal.Struct(CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_ParamsSpec.$, 'CustomizeColorSchemeModeHandlerFactory_CreateCustomizeColorSchemeModeHandler_Params', [
    mojo.internal.StructField('pendingClient', 0, 0, mojo.internal.InterfaceProxy(CustomizeColorSchemeModeClientRemote), null, false /* nullable */, 0),
    mojo.internal.StructField('pendingHandler', 8, 0, mojo.internal.InterfaceRequest(CustomizeColorSchemeModeHandlerPendingReceiver), null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(CustomizeColorSchemeModeHandler_SetColorSchemeMode_ParamsSpec.$, 'CustomizeColorSchemeModeHandler_SetColorSchemeMode_Params', [
    mojo.internal.StructField('colorSchemeMode', 0, 0, ColorSchemeModeSpec.$, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_ParamsSpec.$, 'CustomizeColorSchemeModeHandler_InitializeColorSchemeMode_Params', [], [[0, 8],]);
mojo.internal.Struct(CustomizeColorSchemeModeClient_SetColorSchemeMode_ParamsSpec.$, 'CustomizeColorSchemeModeClient_SetColorSchemeMode_Params', [
    mojo.internal.StructField('colorSchemeMode', 0, 0, ColorSchemeModeSpec.$, 0, false /* nullable */, 0),
], [[0, 16],]);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used by the customize-color-scheme-mode
 * component to interact with the browser.
 */
let instance$a = null;
class CustomizeColorSchemeModeBrowserProxy {
    constructor(handler, callbackRouter) {
        this.handler = handler;
        this.callbackRouter = callbackRouter;
    }
    static getInstance() {
        if (!instance$a) {
            const handler = new CustomizeColorSchemeModeHandlerRemote();
            const callbackRouter = new CustomizeColorSchemeModeClientCallbackRouter();
            CustomizeColorSchemeModeHandlerFactory.getRemote()
                .createCustomizeColorSchemeModeHandler(callbackRouter.$.bindNewPipeAndPassRemote(), handler.$.bindNewPipeAndPassReceiver());
            instance$a =
                new CustomizeColorSchemeModeBrowserProxy(handler, callbackRouter);
        }
        return instance$a;
    }
    static setInstance(handler, callbackRouter) {
        instance$a =
            new CustomizeColorSchemeModeBrowserProxy(handler, callbackRouter);
    }
}

function getTemplate$A() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style settings-shared md-select iron-flex">#custom-input{--cr-radio-button-disc-margin-block-start:calc(
            (1.54em + 12px) / 2 - 8px);align-items:start}#themeRow cr-button{margin-inline-end:20px}#themeRow .separator{margin-inline-start:0}</style>
    <settings-animated-pages id="pages" section="appearance" focus-config="[[focusConfig_]]">
      <div route-path="default">
        <div class="settings-row first" id="themeRow" hidden="[[!pageVisibility.setTheme]]">
          <cr-link-row class="first" hidden="[[!pageVisibility.setTheme]]" label="$i18n{themes}" sub-label="[[themeSublabel_]]" on-click="openThemeUrl_" external></cr-link-row>

          <template is="dom-if" if="[[prefs.extensions.theme.id.value]]">
            <div class="separator"></div>
            <cr-button id="useDefault" on-click="onUseDefaultClick_">
              $i18n{resetToDefaultTheme}
            </cr-button>
          </template>


        </div>
        <div id="colorSchemeModeRow" class="cr-row" hidden$="[[!showColorSchemeMode_]]">
          <div id="colorSchemeModeLabel" class="flex cr-padded-text" aria-hidden="true">
            $i18n{colorSchemeMode}
          </div>
          <select id="colorSchemeModeSelect" class="md-select" on-change="onColorSchemeModeChange_" aria-labelledby="colorSchemeModeLabel">
            <template is="dom-repeat" items="[[colorSchemeModeOptions_]]">
              <option value="[[item.value]]" selected="[[isSelectedColorSchemeMode_(
                      item.value, selectedColorSchemeMode_)]]">
                [[item.name]]
              </option>
            </template>
          </select>
        </div>
        <div class="hr" hidden="[[!showHr_(
                pageVisibility.setTheme, pageVisibility.homeButton)]]">
        </div>
        <settings-toggle-button elide-label hidden="[[!pageVisibility.homeButton]]" pref="{{prefs.browser.show_home_button}}" label="$i18n{showHomeButton}" sub-label="[[getShowHomeSubLabel_(
                prefs.browser.show_home_button.value,
                prefs.homepage_is_newtabpage.value,
                prefs.homepage.value)]]">
        </settings-toggle-button>
        <template is="dom-if" if="[[prefs.browser.show_home_button.value]]">
          <div id="home-button-options" class="list-frame" hidden="[[!pageVisibility.homeButton]]">
            <settings-radio-group pref="{{prefs.homepage_is_newtabpage}}">
              <controlled-radio-button class="list-item" name="true" pref="[[prefs.homepage_is_newtabpage]]" label="$i18n{homePageNtp}" no-extension-indicator>
              </controlled-radio-button>
              <controlled-radio-button id="custom-input" class="list-item" name="false" pref="[[prefs.homepage_is_newtabpage]]" no-extension-indicator>
                
                <home-url-input id="customHomePage" pref="{{prefs.homepage}}" can-tab="[[!prefs.homepage_is_newtabpage.value]]">
                </home-url-input>
              </controlled-radio-button>
              <template is="dom-if" if="[[prefs.homepage.extensionId]]">
                <extension-controlled-indicator extension-id="[[prefs.homepage.extensionId]]" extension-can-be-disabled="[[
                        prefs.homepage.extensionCanBeDisabled]]" extension-name="[[prefs.homepage.controlledByName]]" on-disable-extension="onDisableExtension_">
                </extension-controlled-indicator>
              </template>
            </settings-radio-group>
          </div>
        </template>
        <div class="hr" hidden="[[!showHr_(
                pageVisibility.homeButton, pageVisibility.bookmarksBar)]]">
        </div>
        <settings-toggle-button hidden="[[!pageVisibility.bookmarksBar]]" pref="{{prefs.bookmark_bar.show_on_all_tabs}}" label="$i18n{showBookmarksBar}">
        </settings-toggle-button>

        <template is="dom-if" if="[[showHoverCardImagesOption_]]">
          <div id="hoverCardImagesHr" class="hr" hidden="[[!pageVisibility.hoverCardImages]]">
          </div>
          <settings-toggle-button id="hoverCardImagesToggle" on-settings-boolean-control-change="onHoverCardImagesEnabledChange_" hidden="[[!pageVisibility.hoverCardImages]]" pref="{{prefs.browser.hovercard.image_previews_enabled}}" label="$i18n{showHoverCardImages}">
          </settings-toggle-button>
        </template>

        <template is="dom-if" if="[[showSidePanelOptions_]]">
          <div class="cr-row">$i18n{sidePanel}</div>
          <div class="list-frame">
            <settings-radio-group id="side-panel" pref="{{prefs.side_panel.is_right_aligned}}" group-aria-label="$i18n{sidePanel}">
              <controlled-radio-button class="list-item" pref="[[prefs.side_panel.is_right_aligned]]" label="$i18n{sidePanelAlignRight}" name="true" no-extension-indicator>
              </controlled-radio-button>
              <controlled-radio-button class="list-item" pref="[[prefs.side_panel.is_right_aligned]]" label="$i18n{sidePanelAlignLeft}" name="false" no-extension-indicator>
              </controlled-radio-button>
            </settings-radio-group>
          </div>
        </template>


        <div class="cr-row">
          <div class="flex cr-padded-text" aria-hidden="true">
            $i18n{fontSize}
          </div>
          <settings-dropdown-menu id="defaultFontSize" label="$i18n{fontSize}" pref="{{prefs.webkit.webprefs.default_font_size}}" menu-options="[[fontSizeOptions_]]">
          </settings-dropdown-menu>
        </div>
        <cr-link-row class="hr" id="customize-fonts-subpage-trigger" label="$i18n{customizeFonts}" on-click="onCustomizeFontsClick_" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>
        <div class="cr-row" hidden="[[!pageVisibility.pageZoom]]">
          <div id="pageZoom" class="flex cr-padded-text" aria-hidden="true">
            $i18n{pageZoom}
          </div>
          <select id="zoomLevel" class="md-select" aria-labelledby="pageZoom" on-change="onZoomLevelChange_">
            <template is="dom-repeat" items="[[pageZoomLevels_]]">
              <option value="[[item]]" selected="[[zoomValuesEqual_(item, defaultZoom_)]]">
                [[formatZoom_(item)]]%
              </option>
            </template>
          </select>
        </div>
        <template is="dom-if" if="[[showReaderModeOption_]]">
          <settings-toggle-button class="hr" pref="{{prefs.dom_distiller.offer_reader_mode}}" label="$i18n{readerMode}" sub-label="$i18n{readerModeDescription}">
          </settings-toggle-button>
        </template>

      </div>
      <template is="dom-if" route-path="/fonts">
        <settings-subpage associated-control="[[$$('#customize-fonts-subpage-trigger')]]" page-title="$i18n{customizeFonts}">
          <settings-appearance-fonts-page prefs="{{prefs}}">
          </settings-appearance-fonts-page>
        </settings-subpage>
      </template>
    </settings-animated-pages>
    <template is="dom-if" if="[[showManagedThemeDialog_]]" restamp>
      <managed-dialog on-close="onManagedDialogClosed_" title="$i18n{themeManagedDialogTitle}" body="$i18n{themeManagedDialogBody}">
      </managed-dialog>
    </template>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * This is the absolute difference maintained between standard and
 * fixed-width font sizes. http://crbug.com/91922.
 */
const SIZE_DIFFERENCE_FIXED_STANDARD = 3;
/**
 * ID for autogenerated themes. Should match
 * |ThemeService::kAutogeneratedThemeID|.
 */
const AUTOGENERATED_THEME_ID = 'autogenerated_theme_id';
/**
 * ID for user color themes. Should match
 * |ThemeService::kUserColorThemeID|.
 */
const USER_COLOR_THEME_ID = 'user_color_theme_id';
// This must be kept in sync with the SystemTheme enum in
// ui/color/system_theme.h.
var SystemTheme;
(function (SystemTheme) {
    // Either classic or web theme.
    SystemTheme[SystemTheme["DEFAULT"] = 0] = "DEFAULT";
    // 
})(SystemTheme || (SystemTheme = {}));
const SettingsAppearancePageElementBase = I18nMixin(PrefsMixin(BaseMixin(PolymerElement)));
class SettingsAppearancePageElement extends SettingsAppearancePageElementBase {
    constructor() {
        super(...arguments);
        this.appearanceBrowserProxy_ = AppearanceBrowserProxyImpl.getInstance();
        this.colorSchemeModeHandler_ = CustomizeColorSchemeModeBrowserProxy.getInstance().handler;
        this.colorSchemeModeCallbackRouter_ = CustomizeColorSchemeModeBrowserProxy.getInstance().callbackRouter;
        this.setColorSchemeModeListenerId_ = null;
    }
    static get is() {
        return 'settings-appearance-page';
    }
    static get template() {
        return getTemplate$A();
    }
    static get properties() {
        return {
            /**
             * Dictionary defining page visibility.
             */
            pageVisibility: Object,
            prefs: {
                type: Object,
                notify: true,
            },
            defaultZoom_: Number,
            isWallpaperPolicyControlled_: { type: Boolean, value: true },
            showColorSchemeMode_: {
                type: Boolean,
                value: () => document.documentElement.hasAttribute('chrome-refresh-2023'),
            },
            colorSchemeModeOptions_: {
                readOnly: true,
                type: Array,
                value() {
                    return [
                        {
                            value: ColorSchemeMode.kLight,
                            name: loadTimeData.getString('lightMode'),
                        },
                        {
                            value: ColorSchemeMode.kDark,
                            name: loadTimeData.getString('darkMode'),
                        },
                        {
                            value: ColorSchemeMode.kSystem,
                            name: loadTimeData.getString('systemMode'),
                        },
                    ];
                },
            },
            selectedColorSchemeMode_: Number,
            /**
             * List of options for the font size drop-down menu.
             */
            fontSizeOptions_: {
                readOnly: true,
                type: Array,
                value() {
                    return [
                        { value: 9, name: loadTimeData.getString('verySmall') },
                        { value: 12, name: loadTimeData.getString('small') },
                        { value: 16, name: loadTimeData.getString('medium') },
                        { value: 20, name: loadTimeData.getString('large') },
                        { value: 24, name: loadTimeData.getString('veryLarge') },
                    ];
                },
            },
            /**
             * Predefined zoom factors to be used when zooming in/out. These are in
             * ascending order. Values are displayed in the page zoom drop-down menu
             * as percentages.
             */
            pageZoomLevels_: Array,
            themeSublabel_: String,
            themeUrl_: String,
            systemTheme_: {
                type: Object,
                value: SystemTheme.DEFAULT,
            },
            focusConfig_: {
                type: Object,
                value() {
                    const map = new Map();
                    if (routes.FONTS) {
                        map.set(routes.FONTS.path, '#customize-fonts-subpage-trigger');
                    }
                    return map;
                },
            },
            showReaderModeOption_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('showReaderModeOption');
                },
            },
            isForcedTheme_: {
                type: Boolean,
                computed: 'computeIsForcedTheme_(' +
                    'prefs.autogenerated.theme.policy.color.controlledBy)',
            },
            // 
            showSidePanelOptions_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('showSidePanelOptions');
                },
            },
            showHoverCardImagesOption_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('showHoverCardImagesOption');
                },
            },
            showManagedThemeDialog_: Boolean,
        };
    }
    static get observers() {
        return [
            'defaultFontSizeChanged_(prefs.webkit.webprefs.default_font_size.value)',
            'themeChanged_(' +
                'prefs.extensions.theme.id.value, systemTheme_, isForcedTheme_)',
            // 
        ];
    }
    ready() {
        super.ready();
        this.$.defaultFontSize.menuOptions = this.fontSizeOptions_;
        // TODO(dschuyler): Look into adding a listener for the
        // default zoom percent.
        this.appearanceBrowserProxy_.getDefaultZoom().then(zoom => {
            this.defaultZoom_ = zoom;
        });
        this.pageZoomLevels_ =
            JSON.parse(loadTimeData.getString('presetZoomFactors'));
        this.setColorSchemeModeListenerId_ =
            this.colorSchemeModeCallbackRouter_.setColorSchemeMode.addListener((colorSchemeMode) => {
                this.selectedColorSchemeMode_ =
                    this.colorSchemeModeOptions_
                        .find(mode => colorSchemeMode === mode.value)
                        ?.value;
            });
        this.colorSchemeModeHandler_.initializeColorSchemeMode();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setColorSchemeModeListenerId_);
        this.colorSchemeModeCallbackRouter_.removeListener(this.setColorSchemeModeListenerId_);
    }
    /** @return A zoom easier read by users. */
    formatZoom_(zoom) {
        return Math.round(zoom * 100);
    }
    /**
     * @param showHomepage Whether to show home page.
     * @param isNtp Whether to use the NTP as the home page.
     * @param homepageValue If not using NTP, use this URL.
     */
    getShowHomeSubLabel_(showHomepage, isNtp, homepageValue) {
        if (!showHomepage) {
            return this.i18n('homeButtonDisabled');
        }
        if (isNtp) {
            return this.i18n('homePageNtp');
        }
        return homepageValue || this.i18n('customWebAddress');
    }
    onCustomizeFontsClick_() {
        Router.getInstance().navigateTo(routes.FONTS);
    }
    onDisableExtension_() {
        this.dispatchEvent(new CustomEvent('refresh-pref', { bubbles: true, composed: true, detail: 'homepage' }));
    }
    /**
     * @param value The changed font size slider value.
     */
    defaultFontSizeChanged_(value) {
        // This pref is handled separately in some extensions, but here it is tied
        // to default_font_size (to simplify the UI).
        this.set('prefs.webkit.webprefs.default_fixed_font_size.value', value - SIZE_DIFFERENCE_FIXED_STANDARD);
    }
    /**
     * Open URL for either current theme or the theme gallery.
     */
    openThemeUrl_() {
        window.open(this.themeUrl_ || loadTimeData.getString('themesGalleryUrl'));
    }
    onUseDefaultClick_() {
        if (this.isForcedTheme_) {
            this.showManagedThemeDialog_ = true;
            return;
        }
        this.appearanceBrowserProxy_.useDefaultTheme();
    }
    // 
    themeChanged_(themeId) {
        if (this.prefs === undefined || this.systemTheme_ === undefined) {
            return;
        }
        if (themeId.length > 0 && themeId !== AUTOGENERATED_THEME_ID &&
            themeId !== USER_COLOR_THEME_ID && !this.isForcedTheme_) {
            assert(this.systemTheme_ === SystemTheme.DEFAULT);
            this.appearanceBrowserProxy_.getThemeInfo(themeId).then(info => {
                this.themeSublabel_ = info.name;
            });
            this.themeUrl_ = 'https://chrome.google.com/webstore/detail/' + themeId;
            return;
        }
        this.themeUrl_ = '';
        if (themeId === AUTOGENERATED_THEME_ID || themeId === USER_COLOR_THEME_ID ||
            this.isForcedTheme_) {
            this.themeSublabel_ = this.i18n('chromeColors');
            return;
        }
        let i18nId;
        // 
        // 
        i18nId = 'chooseFromWebStore';
        // 
        this.themeSublabel_ = this.i18n(i18nId);
    }
    /** @return Whether applied theme is set by policy. */
    computeIsForcedTheme_() {
        return !!this.getPref('autogenerated.theme.policy.color').controlledBy;
    }
    isSelectedColorSchemeMode_(colorSchemeMode) {
        return colorSchemeMode === this.selectedColorSchemeMode_;
    }
    onColorSchemeModeChange_() {
        this.colorSchemeModeHandler_.setColorSchemeMode(parseInt(this.$.colorSchemeModeSelect.value, 10));
    }
    onZoomLevelChange_() {
        chrome.settingsPrivate.setDefaultZoom(parseFloat(this.$.zoomLevel.value));
    }
    /** @see blink::PageZoomValuesEqual(). */
    zoomValuesEqual_(zoom1, zoom2) {
        return Math.abs(zoom1 - zoom2) <= 0.001;
    }
    showHr_(previousIsVisible, nextIsVisible) {
        return previousIsVisible && nextIsVisible;
    }
    onHoverCardImagesEnabledChange_(event) {
        const enabled = event.target.checked;
        this.appearanceBrowserProxy_.recordHoverCardImagesEnabledChanged(enabled);
    }
    onManagedDialogClosed_() {
        this.showManagedThemeDialog_ = false;
    }
}
customElements.define(SettingsAppearancePageElement.is, SettingsAppearancePageElement);

function getTemplate$z() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared">#wrapper{align-items:center;display:flex;justify-content:space-between;padding:0 20px}#controlsColumn{margin-top:4px}h2{color:var(--cr-primary-text-color);font-size:22px;padding-top:0}#title{font-weight:400}#bodyText{padding-block-end:16px}#startButton{margin-bottom:4px;margin-inline-end:16px}</style>
<div id="wrapper">
  <div id="controlsColumn">
    <h2 id="title">$i18n{privacyGuidePromoHeader}</h2>
    <div id="bodyText" class="cr-secondary-text">
      $i18n{privacyGuidePromoBody}
    </div>
    <cr-button class="action-button" id="startButton" role="button" aria-describedby="title bodyText" on-click="onPrivacyGuideStartClick_">
      $i18n{privacyGuidePromoStartButton}
    </cr-button>
    <cr-button id="noThanksButton" role="button" on-click="onNoThanksButtonClick_">
      $i18n{noThanks}
    </cr-button>
  </div>
  <picture>
    <source class="banner" srcset="./images/privacy_guide/promo_banner_dark.svg" media="(prefers-color-scheme: dark)">
    <img class="banner" alt="" src="./images/privacy_guide/promo_banner.svg">
  </picture>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-privacy-guide-promo' is an element representing a promo for the
 * privacy guide feature.
 */
const PrivacyGuidePromoElementBase = PrefsMixin(PolymerElement);
class PrivacyGuidePromoElement extends PrivacyGuidePromoElementBase {
    constructor() {
        super(...arguments);
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-privacy-guide-promo';
    }
    static get template() {
        return getTemplate$z();
    }
    static get properties() {
        return {
            /**
             * Preferences state.
             */
            prefs: {
                type: Object,
                notify: true,
            },
        };
    }
    onPrivacyGuideStartClick_() {
        this.metricsBrowserProxy_.recordAction('Settings.PrivacyGuide.StartPromo');
        this.metricsBrowserProxy_.recordPrivacyGuideEntryExitHistogram(PrivacyGuideInteractions.PROMO_ENTRY);
        Router.getInstance().navigateTo(routes.PRIVACY_GUIDE);
    }
    onNoThanksButtonClick_() {
        this.setPrefValue('privacy_guide.viewed', true);
    }
}
customElements.define(PrivacyGuidePromoElement.is, PrivacyGuidePromoElement);

function getTemplate$y() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style cr-hidden-style settings-shared iron-flex">.content-settings-header,.radio-group{padding:0 var(--cr-section-padding)}.radio-group-sub-heading{padding-bottom:10px}.padded-radio-section{padding-inline-start:50px}settings-collapse-radio-button{--settings-collapse-toggle-min-height:var(--cr-section-min-height)}settings-collapse-radio-button.two-line{--settings-collapse-toggle-min-height:var(--cr-section-two-line-min-height)}settings-collapse-radio-button:not(:first-of-type){--settings-collapse-separator-line:var(--cr-separator-line)}</style>
    <template is="dom-if" if="[[showClearBrowsingDataDialog_]]" restamp>
      <settings-clear-browsing-data-dialog prefs="{{prefs}}" on-close="onCbdDialogClosed_">
      </settings-clear-browsing-data-dialog>
    </template>
    <template is="dom-if" if="[[showPrivacyGuideDialog_]]" restamp>
      <settings-privacy-guide-dialog id="privacyGuideDialog" prefs="{{prefs}}" on-close="onPrivacyGuideDialogClosed_">
      </settings-privacy-guide-dialog>
    </template>
    <settings-animated-pages id="pages" section="privacy" focus-config="[[focusConfig_]]">
      <div route-path="default">
        <cr-link-row id="clearBrowsingData" start-icon="cr:delete" label="$i18n{clearBrowsingData}" sub-label="$i18n{clearBrowsingDataDescription}" on-click="onClearBrowsingDataClick_"></cr-link-row>
        <template is="dom-if" if="[[isPrivacyGuideAvailable]]">
          <cr-link-row id="privacyGuideLinkRow" class="hr" start-icon="settings20:wind-rose" label="$i18n{privacyGuideLabel}" sub-label="$i18n{privacyGuideSublabel}" on-click="onPrivacyGuideClick_" role-description="$i18n{subpageArrowRoleDescription}">
          </cr-link-row>
        </template>
        <template is="dom-if" if="[[is3pcdRedesignEnabled_]]">
          <cr-link-row id="trackingProtectionLinkRow" start-icon="settings:visibility-off" class="hr" label="$i18n{trackingProtectionLinkRowLabel}" sub-label="$i18n{trackingProtectionLinkRowSubLabel}" on-click="onTrackingProtectionClick_" role-description="$i18n{subpageArrowRoleDescription}">
          </cr-link-row>
        </template>
        <template is="dom-if" if="[[!is3pcdRedesignEnabled_]]">
          <cr-link-row id="thirdPartyCookiesLinkRow" start-icon="settings:cookie" class="hr" label="$i18n{thirdPartyCookiesLinkRowLabel}" sub-label="[[computeThirdPartyCookiesSublabel_(
                  prefs.profile.cookie_controls_mode.*)]]" on-click="onCookiesClick_" role-description="$i18n{subpageArrowRoleDescription}">
          </cr-link-row>
        </template>
        <template is="dom-if" if="[[shouldShowAdPrivacy_(
                isPrivacySandboxRestricted_,
                isPrivacySandboxRestrictedNoticeEnabled_)]]">
          <cr-link-row id="privacySandboxLinkRow" start-icon="settings20:ads-click" class="hr" label="$i18n{adPrivacyLinkRowLabel}" sub-label="[[computeAdPrivacySublabel_(
                  isPrivacySandboxRestricted_,
                  isPrivacySandboxRestrictedNoticeEnabled_)]]" on-click="onPrivacySandboxClick_" role-description="$i18n{subpageArrowRoleDescription}">
          </cr-link-row>
        </template>
        <cr-link-row id="securityLinkRow" start-icon="cr:security" class="hr" label="$i18n{securityPageTitle}" sub-label="$i18n{securityPageDescription}" on-click="onSecurityPageClick_" role-description="$i18n{subpageArrowRoleDescription}"></cr-link-row>
        <cr-link-row id="permissionsLinkRow" start-icon="settings:permissions" class="hr" label="$i18n{siteSettings}" sub-label="$i18n{permissionsPageDescription}" on-click="onPermissionsPageClick_" role-description="$i18n{subpageArrowRoleDescription}"></cr-link-row>
      </div>


      <template is="dom-if" route-path="/certificates">
        <settings-subpage associated-control="[[$$('#securityLinkRow')]]" page-title="$i18n{manageCertificates}">
          <certificate-manager></certificate-manager>
        </settings-subpage>
      </template>


      <template is="dom-if" route-path="/content/v8" no-search>
        <settings-subpage page-title="$i18n{siteSettingsCategoryJavascriptJit}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsJavascriptJitDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.JAVASCRIPT_JIT]]" allow-option-label="$i18n{siteSettingsJavascriptJitAllowed}" allow-option-sub-label="$i18n{siteSettingsJavascriptJitAllowedSubLabel}" block-option-label="$i18n{siteSettingsJavascriptJitBlocked}" block-option-sub-label="$i18n{siteSettingsJavascriptJitBlockedSubLabel}">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.JAVASCRIPT_JIT]]" allow-header="$i18n{siteSettingsJavascriptJitAllowedExceptions}" block-header="$i18n{siteSettingsJavascriptJitBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>

      <template is="dom-if" if="[[enableSecurityKeysSubpage_]]">
        <template is="dom-if" route-path="/securityKeys">
          <settings-subpage associated-control="[[$$('#securityLinkRow')]]" page-title="$i18n{securityKeysTitle}">
            <security-keys-subpage></security-keys-subpage>
          </settings-subpage>
        </template>
      </template>

      <template is="dom-if" route-path="/securityKeys/phones">
        <settings-subpage associated-control="[[$$('#securityLinkRow')]]" page-title="$i18n{securityKeysPhonesManage}">
          <security-keys-phones-subpage></security-keys-phones-subpage>
        </settings-subpage>
      </template>

      <template is="dom-if" route-path="/content">
        <settings-subpage associated-control="[[$$('#permissionsLinkRow')]]" id="site-settings" page-title="$i18n{siteSettings}" learn-more-url="$i18n{exceptionsLearnMoreURL}">
          <settings-site-settings-page focus-config="[[focusConfig_]]" prefs="{{prefs}}">
          </settings-site-settings-page>
        </settings-subpage>
      </template>

      <template is="dom-if" if="[[enableSafetyHub_]]">
        <template is="dom-if" route-path="/safetyCheck">
          
          <settings-subpage id="safetyHub" page-title="$i18n{safetyHub}" class="multi-card" no-search>
            <settings-safety-hub-page>
            </settings-safety-hub-page>
          </settings-subpage>
        </template>
      </template>

      <template is="dom-if" route-path="/security">
        <settings-subpage id="security" page-title="$i18n{securityPageTitle}" associated-control="[[$$('#securityLinkRow')]]" learn-more-url="$i18n{safeBrowsingHelpCenterURL}">
          <settings-security-page prefs="{{prefs}}" focus-config="[[focusConfig_]]">
          </settings-security-page>
        </settings-subpage>
      </template>

      <template is="dom-if" route-path="/adPrivacy" no-search="[[!shouldShowAdPrivacy_(isPrivacySandboxRestricted_,
                isPrivacySandboxRestrictedNoticeEnabled_)]]">
        <settings-subpage id="privacy-sandbox" page-title="$i18n{adPrivacyPageTitle}" associated-control="[[$$('#privacySandboxLinkRow')]]" learn-more-url="$i18n{adPrivacyLearnMoreURL}">
          <settings-privacy-sandbox-page prefs="{{prefs}}" focus-config="[[focusConfig_]]">
          </settings-privacy-sandbox-page>
        </settings-subpage>
      </template>

      <template is="dom-if" route-path="/adPrivacy/interests" no-search="[[isPrivacySandboxRestricted_]]">
        <settings-subpage id="privacy-sandbox-topics" page-title="$i18n{topicsPageTitle}" associated-control="[[$$('#privacySandboxLinkRow')]]" learn-more-url="$i18n{adPrivacyLearnMoreURL}">
          <settings-privacy-sandbox-topics-subpage prefs="{{prefs}}" focus-config="[[focusConfig_]]">
          </settings-privacy-sandbox-topics-subpage>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/adPrivacy/interests/manage" no-search="[[shouldShowManageTopics_(
            isProactiveTopicsBlockingEnabled_, isPrivacySandboxRestricted_)]]">
        <settings-subpage id="privacy-sandbox-manage-topics" page-title="$i18n{manageTopicsHeading}" associated-control="[[$$('#privacySandboxLinkRow')]]" learn-more-url="$i18n{adPrivacyLearnMoreURL}">
          <settings-privacy-sandbox-manage-topics-subpage focus-config="[[focusConfig_]]" prefs="{{prefs}}">
          </settings-privacy-sandbox-manage-topics-subpage>
        </settings-subpage>
      </template>

      <template is="dom-if" route-path="/adPrivacy/sites" no-search="[[isPrivacySandboxRestricted_]]">
        <settings-subpage id="privacy-sandbox-fledge" page-title="$i18n{fledgePageTitle}" associated-control="[[$$('#privacySandboxLinkRow')]]" learn-more-url="$i18n{adPrivacyLearnMoreURL}">
          <settings-privacy-sandbox-fledge-subpage prefs="{{prefs}}">
          </settings-privacy-sandbox-fledge-subpage>
        </settings-subpage>
      </template>

      <template is="dom-if" route-path="/adPrivacy/measurement" no-search="[[!shouldShowAdPrivacy_(isPrivacySandboxRestricted_,
              isPrivacySandboxRestrictedNoticeEnabled_)]]">
        <settings-subpage id="privacy-sandbox-ad-measurement" page-title="$i18n{adMeasurementPageTitle}" associated-control="[[$$('#privacySandboxLinkRow')]]" learn-more-url="$i18n{adPrivacyLearnMoreURL}">
          <settings-privacy-sandbox-ad-measurement-subpage prefs="{{prefs}}">
          </settings-privacy-sandbox-ad-measurement-subpage>
        </settings-subpage>
      </template>

      <template is="dom-if" route-path="/content/all" no-search>
        <settings-subpage page-title="$i18n{siteSettingsAllSites}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}" preserve-search-term>
          <all-sites filter="[[searchFilter_]]"></all-sites>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/automaticDownloads" no-search>
        <settings-subpage page-title="$i18n{siteSettingsAutomaticDownloads}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
              $i18n{siteSettingsAutomaticDownloadsDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.AUTOMATIC_DOWNLOADS]]" allow-option-label="$i18n{siteSettingsAutomaticDownloadsAllowed}" allow-option-icon="cr:file-download" block-option-label="$i18n{siteSettingsAutomaticDownloadsBlocked}" block-option-icon="settings:file-download-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.AUTOMATIC_DOWNLOADS]]" allow-header="$i18n{siteSettingsAutomaticDownloadsAllowedExceptions}" block-header="$i18n{siteSettingsAutomaticDownloadsBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" if="[[enableWebPrintingContentSetting_]]">
        <template is="dom-if" route-path="/content/webPrinting" no-search>
          <settings-subpage page-title="$i18n{siteSettingsWebPrinting}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
            <div class="content-settings-header secondary">
                $i18n{siteSettingsWebPrintingDescription}
            </div>
            <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.WEB_PRINTING]]" allow-option-label="$i18n{siteSettingsWebPrintingAsk}" allow-option-icon="settings:printer" block-option-label="$i18n{siteSettingsWebPrintingBlock}" block-option-icon="settings:printer-off">
            </settings-category-default-radio-group>
            <category-setting-exceptions category="[[contentSettingsTypesEnum_.WEB_PRINTING]]" allow-header="$i18n{siteSettingsWebPrintingAllowedExceptions}" block-header="$i18n{siteSettingsWebPrintingBlockedExceptions}" search-filter="[[searchFilter_]]">
            </category-setting-exceptions>
          </settings-subpage>
        </template>
      </template>
      <template is="dom-if" route-path="/content/backgroundSync" no-search>
        <settings-subpage page-title="$i18n{siteSettingsBackgroundSync}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsBackgroundSyncDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.BACKGROUND_SYNC]]" allow-option-label="$i18n{siteSettingsBackgroundSyncAllowed}" allow-option-icon="cr:sync" block-option-label="$i18n{siteSettingsBackgroundSyncBlocked}" block-option-sub-label="$i18n{siteSettingsBackgroundSyncBlockedSubLabel}" block-option-icon="settings:sync-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.BACKGROUND_SYNC]]" allow-header="$i18n{siteSettingsBackgroundSyncAllowedExceptions}" block-header="$i18n{siteSettingsBackgroundSyncBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/camera" no-search>
        <settings-subpage page-title="$i18n{siteSettingsCategoryCamera}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <media-picker label="$i18n{siteSettingsCameraLabel}" type="camera">
          </media-picker>
          <div class="content-settings-header secondary">
            $i18n{siteSettingsCameraDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.CAMERA]]" allow-option-label="$i18n{siteSettingsCameraAllowed}" allow-option-icon="cr:videocam" block-option-label="$i18n{siteSettingsCameraBlocked}" block-option-sub-label="$i18n{siteSettingsCameraBlockedSubLabel}" block-option-icon="settings:videocam-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.CAMERA]]" read-only-list allow-header="$i18n{siteSettingsCameraAllowedExceptions}" block-header="$i18n{siteSettingsCameraBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" if="[[is3pcdRedesignEnabled_]]">
        <template is="dom-if" route-path="/trackingProtection">
          <settings-subpage id="trackingProtection" page-title="$i18n{trackingProtectionPageTitle}" learn-more-url="$i18n{trackingProtectionHelpCenterURL}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}" associated-control="[[$$('#trackingProtectionLinkRow')]]">
            <settings-cookies-page prefs="{{prefs}}" focus-config="[[focusConfig_]]" search-term="[[searchFilter_]]">
            </settings-cookies-page>
          </settings-subpage>
        </template>
      </template>
      <template is="dom-if" if="[[!is3pcdRedesignEnabled_]]">
        <template is="dom-if" route-path="/cookies">
          <settings-subpage id="cookies" page-title="$i18n{thirdPartyCookiesPageTitle}" learn-more-url="$i18n{cookiesSettingsHelpCenterURL}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}" associated-control="[[$$('#thirdPartyCookiesLinkRow')]]">
            <settings-cookies-page prefs="{{prefs}}" focus-config="[[focusConfig_]]" search-term="[[searchFilter_]]">
            </settings-cookies-page>
          </settings-subpage>
        </template>
      </template>
      <template is="dom-if" route-path="/content/images" no-search>
        <settings-subpage page-title="$i18n{siteSettingsCategoryImages}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsImagesDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.IMAGES]]" allow-option-label="$i18n{siteSettingsImagesAllowed}" allow-option-icon="settings:photo" block-option-label="$i18n{siteSettingsImagesBlocked}" block-option-sub-label="$i18n{siteSettingsImagesBlockedSubLabel}" block-option-icon="settings:photo-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.IMAGES]]" allow-header="$i18n{siteSettingsImagesAllowedExceptions}" block-header="$i18n{siteSettingsImagedBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/insecureContent" no-search>
        <settings-subpage page-title="$i18n{siteSettingsCategoryInsecureContent}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsInsecureContentDescription}
          </div>
          <div class="cr-row first secondary">
            $i18n{siteSettingsInsecureContentBlock}
          </div>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.MIXEDSCRIPT]]" allow-header="$i18n{siteSettingsInsecureContentAllowedExceptions}" block-header="$i18n{siteSettingsInsecureContentBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" if="[[enableFederatedIdentityApiContentSetting_]]">
        <template is="dom-if" route-path="/content/federatedIdentityApi" no-search>
          <settings-subpage page-title="$i18n{siteSettingsCategoryFederatedIdentityApi}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
            <div class="content-settings-header secondary">
              $i18n{siteSettingsFederatedIdentityApiDescription}
            </div>
            <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.FEDERATED_IDENTITY_API]]" allow-option-label="$i18n{siteSettingsFederatedIdentityApiAllowed}" allow-option-icon="settings:federated-identity-api" block-option-label="$i18n{siteSettingsFederatedIdentityApiBlocked}" block-option-icon="settings:federated-identity-api-off">
            </settings-category-default-radio-group>
            <category-setting-exceptions category="[[contentSettingsTypesEnum_.FEDERATED_IDENTITY_API]]" allow-header="$i18n{siteSettingsFederatedIdentityApiAllowedExceptions}" block-header="$i18n{siteSettingsFederatedIdentityApiBlockedExceptions}" search-filter="[[searchFilter_]]">
            </category-setting-exceptions>
          </settings-subpage>
        </template>
      </template>
      <template is="dom-if" route-path="/content/siteData" no-search>
        <settings-subpage page-title="$i18n{siteDataPageTitle}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <settings-site-data prefs="{{prefs}}" search-term="[[searchFilter_]]">
          </settings-site-data>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/location" no-search>
        <settings-subpage page-title="$i18n{siteSettingsCategoryLocation}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsLocationDescription}
          </div>
          <div class="radio-group">
            <template is="dom-if" if="[[!showDedicatedCpssSetting_]]">
              <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.GEOLOCATION]]" allow-option-label="$i18n{siteSettingsLocationAllowed}" allow-option-icon="settings:location-on" block-option-label="$i18n{siteSettingsLocationBlocked}" block-option-sub-label="$i18n{siteSettingsLocationBlockedSubLabel}" block-option-icon="settings:location-off">
              </settings-category-default-radio-group>
            </template>

            <template is="dom-if" if="[[showDedicatedCpssSetting_]]">
              <h2>$i18n{siteSettingsDefaultBehavior}</h2>
              <div id="geolocationSubHeading" class="secondary radio-sub-heading">
                $i18n{siteSettingsDefaultBehaviorDescription}
              </div>

              <cr-radio-group on-selected-changed="onLocationTopLevelRadioChanged_">
                <cr-radio-button no-collapse name="location-ask-radio-button" checked$="[[isLocationAllowed_]]">
                  <iron-icon icon="settings:location-on"></iron-icon>
                  $i18n{siteSettingsLocationAllowed}
                </cr-radio-button>

                <settings-radio-group pref="{{prefs.generated.geolocation}}" selectable-elements="cr-radio-button" hidden$="[[!isLocationAllowed_]]">
                  <cr-radio-button class="padded-radio-section" name="[[settingsStateEnum_.QUIET]]" pref="[[prefs.generated.geolocation]]" label="$i18n{siteSettingsLocationAskQuiet}">
                  </cr-radio-button>

                  <cr-radio-button class="padded-radio-section" name="[[settingsStateEnum_.CPSS]]" pref="[[prefs.generated.geolocation]]" label="$i18n{siteSettingsLocationAskCPSS}">
                  </cr-radio-button>

                  <cr-radio-button class="padded-radio-section" name="[[settingsStateEnum_.LOUD]]" pref="[[prefs.generated.geolocation]]" label="$i18n{siteSettingsLocationAskLoud}">
                  </cr-radio-button>
                </settings-radio-group>

                <cr-radio-button class="two-line" name="location-block-radio-button" sub-label="$i18n{siteSettingsLocationBlockedSubLabel}" checked$="[[!isLocationAllowed_]]">
                  <iron-icon icon="settings:location-off"></iron-icon>
                  $i18n{siteSettingsLocationBlocked}
                </cr-radio-button>
              </cr-radio-group>
            </template>
          </div>

          <category-setting-exceptions category="[[contentSettingsTypesEnum_.GEOLOCATION]]" read-only-list allow-header="$i18n{siteSettingsLocationAllowedExceptions}" block-header="$i18n{siteSettingsLocationBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/handlers" no-search>
        <settings-subpage page-title="$i18n{siteSettingsCategoryHandlers}">
          <protocol-handlers toggle-off-label="$i18n{siteSettingsHandlersBlocked}" toggle-on-label="$i18n{siteSettingsHandlersAskRecommended}">
          </protocol-handlers>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/zoomLevels" no-search>
        <settings-subpage page-title="$i18n{siteSettingsCategoryZoomLevels}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsZoomLevelsDescription}
          </div>
          <zoom-levels></zoom-levels>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/pdfDocuments" no-search>
        <settings-subpage page-title="$i18n{siteSettingsPdfDocuments}">
          <div class="radio-group">
            <div class="secondary">$i18n{siteSettingsPdfsDescription}</div>
            <h2>$i18n{siteSettingsDefaultBehavior}</h2>
            <div class="secondary radio-sub-heading">
              $i18n{siteSettingsDefaultBehaviorDescription}
            </div>
            <settings-radio-group pref="{{prefs.plugins.always_open_pdf_externally}}" selectable-elements="settings-collapse-radio-button">
              <settings-collapse-radio-button no-collapse pref="[[prefs.plugins.always_open_pdf_externally]]" label="$i18n{siteSettingsPdfsAllowed}" name="true" disabled$="[[isGuest_]]" icon="cr:file-download">
              </settings-collapse-radio-button>
              <settings-collapse-radio-button no-collapse pref="[[prefs.plugins.always_open_pdf_externally]]" label="$i18n{siteSettingsPdfsBlocked}" name="false" disabled$="[[isGuest_]]" icon="settings:open-in-browser">
              </settings-collapse-radio-button>
            </settings-radio-group>
          </div>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/javascript" no-search>
        <settings-subpage page-title="$i18n{siteSettingsCategoryJavascript}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsJavascriptDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.JAVASCRIPT]]" allow-option-label="$i18n{siteSettingsJavascriptAllowed}" allow-option-icon="settings:code" block-option-label="$i18n{siteSettingsJavascriptBlocked}" block-option-icon="settings:code-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.JAVASCRIPT]]" allow-header="$i18n{siteSettingsJavascriptAllowedExceptions}" block-header="$i18n{siteSettingsJavascriptBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/sound" no-search>
        <settings-subpage page-title="$i18n{siteSettingsSound}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsSoundDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.SOUND]]" allow-option-label="$i18n{siteSettingsSoundAllowed}" allow-option-icon="settings:volume-up" block-option-label="$i18n{siteSettingsSoundBlocked}" block-option-sub-label="$i18n{siteSettingsSoundBlockedSubLabel}" block-option-icon="settings:volume-up-off">
          </settings-category-default-radio-group>
          <settings-toggle-button id="block-autoplay-setting" class="hr" label="$i18n{siteSettingsBlockAutoplaySetting}" pref="{{blockAutoplayStatus_.pref}}" disabled="[[!blockAutoplayStatus_.enabled]]" hidden="[[!enableBlockAutoplayContentSetting_]]" on-settings-boolean-control-change="onBlockAutoplayToggleChange_" no-set-pref>
          </settings-toggle-button>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.SOUND]]" allow-header="$i18n{siteSettingsSoundAllowedExceptions}" block-header="$i18n{siteSettingsSoundBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" if="[[privateStateTokensEnabled_]]">
        <template is="dom-if" route-path="/content/autoVerify" no-search>
          <settings-subpage page-title="$i18n{siteSettingsAntiAbuse}">
            <settings-anti-abuse-page></settings-anti-abuse-page>
          </settings-subpage>
        </template>
      </template>
      <template is="dom-if" route-path="/content/microphone" no-search>
        <settings-subpage page-title="$i18n{siteSettingsCategoryMicrophone}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <media-picker label="$i18n{siteSettingsMicrophoneLabel}" type="mic">
          </media-picker>
          <div class="content-settings-header secondary">
            $i18n{siteSettingsMicDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.MIC]]" allow-option-label="$i18n{siteSettingsMicAllowed}" allow-option-icon="cr:mic" block-option-label="$i18n{siteSettingsMicBlocked}" block-option-sub-label="$i18n{siteSettingsMicBlockedSubLabel}" block-option-icon="settings:mic-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.MIC]]" read-only-list allow-header="$i18n{siteSettingsMicAllowedExceptions}" block-header="$i18n{siteSettingsMicBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/sensors" no-search>
        <settings-subpage page-title="$i18n{siteSettingsSensors}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsMotionSensorsDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.SENSORS]]" allow-option-label="$i18n{siteSettingsMotionSensorsAllowed}" allow-option-icon="settings:sensors" block-option-label="$i18n{siteSettingsMotionSensorsBlocked}" block-option-sub-label="$i18n{siteSettingsMotionSensorsBlockedSubLabel}" block-option-icon="settings:sensors-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.SENSORS]]" read-only-list allow-header="$i18n{siteSettingsMotionSensorsAllowedExceptions}" block-header="$i18n{siteSettingsMotionSensorsBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
     </template>
      <template is="dom-if" route-path="/content/notifications" no-search>
        <settings-subpage page-title="$i18n{siteSettingsCategoryNotifications}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div id="notificationRadioGroup" class="radio-group">
            <template is="dom-if" if="[[!safetyCheckNotificationPermissionsEnabled_]]">
              <div class="secondary">
                $i18n{siteSettingsNotificationsDescription}
              </div>
            </template>
            <template is="dom-if" if="[[showNotificationPermissionsReview_]]">
              <template is="dom-if" if="[[enableSafetyHub_]]">
                <h2>$i18n{safetyHub}</h2>
                <settings-safety-hub-module id="safetyHubEntryPoint" header="[[notificationPermissionsReviewHeader_]]" subheader="[[notificationPermissionsReviewSubheader_]]" header-icon="cr:security" header-icon-color="blue">
                  <cr-button id="safetyHubButton" slot="button-container" class="action-button" on-click="onSafetyHubButtonClick_">
                    $i18n{safetyHubEntryPointButton}
                  </cr-button>
                </settings-safety-hub-module>
              </template>
              <template is="dom-if" if="[[!enableSafetyHub_]]">
                <review-notification-permissions>
                </review-notification-permissions>
              </template>
            </template>
            <h2>$i18n{siteSettingsDefaultBehavior}</h2>
            <div id="notificationSubHeading" class="secondary radio-sub-heading">
              [[notificationsDefaultBehaviorLabel_]]
            </div>

            <template is="dom-if" if="[[!showDedicatedCpssSetting_]]">
              <settings-radio-group pref="{{prefs.generated.notification}}" selectable-elements="settings-collapse-radio-button">
                <settings-collapse-radio-button no-collapse name="[[settingsStateEnum_.LOUD]]" pref="[[prefs.generated.notification]]" label="$i18n{siteSettingsNotificationsAllowed}" icon="settings:notifications">
                </settings-collapse-radio-button>

                <settings-collapse-radio-button no-collapse class="two-line" name="[[settingsStateEnum_.QUIET]]" pref="[[prefs.generated.notification]]" label="$i18n{siteSettingsNotificationsPartial}" sub-label="$i18n{siteSettingsNotificationsPartialSubLabel}" icon="settings:notifications">
                </settings-collapse-radio-button>

                <settings-collapse-radio-button no-collapse class="two-line" name="[[settingsStateEnum_.BLOCK]]" pref="[[prefs.generated.notification]]" label="$i18n{siteSettingsNotificationsBlocked}" sub-label="$i18n{siteSettingsNotificationsBlockedSubLabel}" icon="settings:notifications-off">
                </settings-collapse-radio-button>
              </settings-radio-group>
            </template>

            <template is="dom-if" if="[[showDedicatedCpssSetting_]]">
              <cr-radio-group on-selected-changed="onNotificationTopLevelRadioChanged_">
                <cr-radio-button id="notification-ask-radio-button" name="notification-ask-radio-button" checked$="[[isNotificationAllowed_]]">
                  <iron-icon icon="settings:notifications"></iron-icon>
                  $i18n{siteSettingsNotificationsAskState}
                </cr-radio-button>

                <settings-radio-group pref="{{prefs.generated.notification}}" selectable-elements="cr-radio-button" hidden$="[[!isNotificationAllowed_]]">
                  <cr-radio-button class="padded-radio-section" id="notification-ask-quiet" name="[[settingsStateEnum_.QUIET]]" pref="[[prefs.generated.notification]]" label="$i18n{siteSettingsNotificationsAskQuiet}">
                  </cr-radio-button>

                  <cr-radio-button class="padded-radio-section" id="notification-ask-cpss" name="[[settingsStateEnum_.CPSS]]" pref="[[prefs.generated.notification]]" label="$i18n{siteSettingsNotificationsAskCPSS}">
                  </cr-radio-button>

                  <cr-radio-button class="padded-radio-section" id="notification-ask-loud" name="[[settingsStateEnum_.LOUD]]" pref="[[prefs.generated.notification]]" label="$i18n{siteSettingsNotificationsAskLoud}">
                  </cr-radio-button>
                </settings-radio-group>

                <cr-radio-button class="two-line" id="notification-block" name="notification-block-radio-button" sub-label="$i18n{siteSettingsNotificationsBlockedSubLabel}" checked$="[[!isNotificationAllowed_]]">
                  <iron-icon icon="settings:notifications-off"></iron-icon>
                  $i18n{siteSettingsNotificationsBlocked}
                </cr-radio-button>
              </cr-radio-group>
            </template>
          </div>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.NOTIFICATIONS]]" allow-header="$i18n{siteSettingsNotificationsAllowedExceptions}" block-header="$i18n{siteSettingsNotificationsBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/popups" no-search>
        <settings-subpage page-title="$i18n{siteSettingsCategoryPopups}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsPopupsDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.POPUPS]]" allow-option-label="$i18n{siteSettingsPopupsAllowed}" allow-option-icon="cr:open-in-new" block-option-label="$i18n{siteSettingsPopupsBlocked}" block-option-icon="settings:open-in-new-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.POPUPS]]" allow-header="$i18n{siteSettingsPopupsAllowedExceptions}" block-header="$i18n{siteSettingsPopupsBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" if="[[enableSafeBrowsingSubresourceFilter_]]" no-search>
        <template is="dom-if" route-path="/content/ads" no-search>
          <settings-subpage page-title="$i18n{siteSettingsAds}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
            <div class="content-settings-header secondary">
              $i18n{siteSettingsAdsDescription}
            </div>
            <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.ADS]]" allow-option-label="$i18n{siteSettingsAdsAllowed}" allow-option-icon="settings:ads" block-option-label="$i18n{siteSettingsAdsBlocked}" block-option-icon="settings:ads-off">
            </settings-category-default-radio-group>
            <category-setting-exceptions category="[[contentSettingsTypesEnum_.ADS]]" read-only-list allow-header="$i18n{siteSettingsAdsAllowedExceptions}" block-header="$i18n{siteSettingsAdsBlockedExceptions}" search-filter="[[searchFilter_]]">
            </category-setting-exceptions>
          </settings-subpage>
       </template>
     </template>
      <template is="dom-if" route-path="/content/midiDevices" no-search>
        <settings-subpage page-title="$i18n{siteSettingsMidiDevices}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsMidiDescription}
          </div>
          <template is="dom-if" if="[[!blockMidiByDefault_]]" no-search>
            
            <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.MIDI_DEVICES]]" allow-option-label="$i18n{siteSettingsMidiAllowed}" allow-option-icon="settings:midi" block-option-label="$i18n{siteSettingsMidiBlocked}" block-option-icon="settings:midi-off">
            </settings-category-default-radio-group>
            <category-setting-exceptions category="[[contentSettingsTypesEnum_.MIDI_DEVICES]]" read-only-list allow-header="$i18n{siteSettingsMidiAllowedExceptions}" block-header="$i18n{siteSettingsMidiBlockedExceptions}" search-filter="[[searchFilter_]]">
            </category-setting-exceptions>
          </template>
          <template is="dom-if" if="[[blockMidiByDefault_]]" no-search>
            
            <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.MIDI]]" allow-option-label="$i18n{siteSettingsMidiAllowed}" allow-option-icon="settings:midi" block-option-label="$i18n{siteSettingsMidiBlocked}" block-option-icon="settings:midi-off">
            </settings-category-default-radio-group>
            <category-setting-exceptions category="[[contentSettingsTypesEnum_.MIDI]]" read-only-list allow-header="$i18n{siteSettingsMidiAllowedExceptions}" block-header="$i18n{siteSettingsMidiBlockedExceptions}" search-filter="[[searchFilter_]]">
            </category-setting-exceptions>
          </template>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/usbDevices" no-search>
        <settings-subpage page-title="$i18n{siteSettingsUsbDevices}" learn-more-url="$i18n{chooserUsbOverviewURL}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsUsbDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.USB_DEVICES]]" allow-option-label="$i18n{siteSettingsUsbAllowed}" allow-option-icon="settings:usb" block-option-label="$i18n{siteSettingsUsbBlocked}" block-option-icon="settings:usb-off">
          </settings-category-default-radio-group>
          <chooser-exception-list category="[[contentSettingsTypesEnum_.USB_DEVICES]]" chooser-type="[[chooserTypeEnum_.USB_DEVICES]]">
          </chooser-exception-list>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/serialPorts" no-search>
        <settings-subpage page-title="$i18n{siteSettingsSerialPorts}" learn-more-url="$i18n{chooserSerialOverviewUrl}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsSerialPortsDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.SERIAL_PORTS]]" allow-option-label="$i18n{siteSettingsSerialPortsAllowed}" allow-option-icon="settings:serial-port" block-option-label="$i18n{siteSettingsSerialPortsBlocked}" block-option-icon="settings:serial-port-off">
          </settings-category-default-radio-group>
          <chooser-exception-list category="[[contentSettingsTypesEnum_.SERIAL_PORTS]]" chooser-type="[[chooserTypeEnum_.SERIAL_PORTS]]">
          </chooser-exception-list>
        </settings-subpage>
      </template>
      <template is="dom-if" if="[[enableWebBluetoothNewPermissionsBackend_]]">
        <template is="dom-if" route-path="/content/bluetoothDevices" no-search>
          <settings-subpage page-title="$i18n{siteSettingsBluetoothDevices}" learn-more-url="$i18n{bluetoothAdapterOffHelpURL}">
              <div class="content-settings-header secondary">
                $i18n{siteSettingsBluetoothDevicesDescription}
              </div>
              <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.BLUETOOTH_DEVICES]]" allow-option-label="$i18n{siteSettingsBluetoothDevicesAllowed}" allow-option-icon="settings:bluetooth" block-option-label="$i18n{siteSettingsBluetoothDevicesBlocked}" block-option-icon="settings:bluetooth-off">
            </settings-category-default-radio-group>
            <chooser-exception-list category="[[contentSettingsTypesEnum_.BLUETOOTH_DEVICES]]" chooser-type="[[chooserTypeEnum_.BLUETOOTH_DEVICES]]">
            </chooser-exception-list>
          </settings-subpage>
        </template>
      </template>
      <template is="dom-if" route-path="/content/filesystem" no-search>
        <settings-subpage page-title="$i18n{siteSettingsFileSystemWrite}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsFileSystemWriteDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.FILE_SYSTEM_WRITE]]" allow-option-label="$i18n{siteSettingsFileSystemWriteAllowed}" allow-option-icon="settings:save-original" block-option-label="$i18n{siteSettingsFileSystemWriteBlocked}" block-option-icon="settings:file-editing-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.FILE_SYSTEM_WRITE]]" read-only-list block-header="$i18n{siteSettingsFileSystemWriteBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
          <template is="dom-if" if="[[showPersistentPermissions_]]">
            <file-system-site-list></file-system-site-list>
          </template>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/filesystem/siteDetails" no-search>
        <settings-subpage page-title="[[pageTitle]]">
          <file-system-site-details page-title="{{pageTitle}}">
          </file-system-site-details>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/hidDevices" no-search>
        <settings-subpage page-title="$i18n{siteSettingsHidDevices}" learn-more-url="$i18n{chooserHidOverviewUrl}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsHidDevicesDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.HID_DEVICES]]" allow-option-label="$i18n{siteSettingsHidDevicesAllowed}" allow-option-icon="settings:hid-device" block-option-label="$i18n{siteSettingsHidDevicesBlocked}" block-option-icon="settings:hid-device-off">
          </settings-category-default-radio-group>
          <chooser-exception-list category="[[contentSettingsTypesEnum_.HID_DEVICES]]" chooser-type="[[chooserTypeEnum_.HID_DEVICES]]">
          </chooser-exception-list>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/siteDetails" no-search>
        <settings-subpage page-title="[[pageTitle]]">
          <site-details page-title="{{pageTitle}}" block-autoplay-enabled="[[blockAutoplayStatus_.pref.value]]">
          </site-details>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/protectedContent" no-search>


        <settings-subpage page-title="$i18n{siteSettingsProtectedContent}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">

          <div class="radio-group">
            <div class="secondary">
              $i18n{siteSettingsProtectedContentDescription}
            </div>
            <h2>$i18n{siteSettingsDefaultBehavior}</h2>
            <div class="secondary radio-sub-heading">
              $i18n{siteSettingsDefaultBehaviorDescription}
            </div>
            <settings-radio-group pref="{{prefs.webkit.webprefs.encrypted_media_enabled}}" selectable-elements="settings-collapse-radio-button">
              <settings-collapse-radio-button no-collapse pref="[[prefs.webkit.webprefs.encrypted_media_enabled]]" label="$i18n{siteSettingsProtectedContentAllowed}" name="true" disabled$="[[isGuest_]]" icon="settings:protected-content">
              </settings-collapse-radio-button>
              <settings-collapse-radio-button no-collapse pref="[[prefs.webkit.webprefs.encrypted_media_enabled]]" label="$i18n{siteSettingsProtectedContentBlocked}" sub-label="$i18n{siteSettingsProtectedContentBlockedSubLabel}" name="false" disabled$="[[isGuest_]]" icon="settings:protected-content-off">
              </settings-collapse-radio-button>
            </settings-radio-group>
          </div>

          <settings-category-default-radio-group header="$i18n{siteSettingsProtectedContentIdentifiers}" description="$i18n{siteSettingsProtectedContentIdentifiersExplanation}" category="[[contentSettingsTypesEnum_.PROTECTED_CONTENT]]" block-option-label="$i18n{siteSettingsProtectedContentIdentifiersBlocked}" block-option-sub-label="$i18n{siteSettingsProtectedContentIdentifiersBlockedSubLabel}" block-option-icon="settings:protected-content-off" allow-option-label="$i18n{siteSettingsProtectedContentIdentifiersAllowed}" allow-option-icon="settings:protected-content" disabled$="[[isGuest_]]">
          </settings-category-default-radio-group>
          <category-setting-exceptions description="$i18n{siteSettingsCustomizedBehaviorsDescriptionShort}" category="[[contentSettingsTypesEnum_.PROTECTED_CONTENT]]" allow-header="$i18n{siteSettingsProtectedContentIdentifiersAllowedExceptions}" block-header="$i18n{siteSettingsProtectedContentIdentifiersBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>

        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/clipboard" no-search>
        <settings-subpage page-title="$i18n{siteSettingsClipboard}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsClipboardDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.CLIPBOARD]]" allow-option-label="$i18n{siteSettingsClipboardAllowed}" allow-option-icon="settings:clipboard" block-option-label="$i18n{siteSettingsClipboardBlocked}" block-option-icon="settings:clipboard-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.CLIPBOARD]]" allow-header="$i18n{siteSettingsClipboardAllowedExceptions}" block-header="$i18n{siteSettingsClipboardBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" if="[[enablePaymentHandlerContentSetting_]]">
        <template is="dom-if" route-path="/content/paymentHandler" no-search>
          <settings-subpage page-title="$i18n{siteSettingsPaymentHandler}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
            <div class="content-settings-header secondary">
              $i18n{siteSettingsPaymentHandlersDescription}
            </div>
            <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.PAYMENT_HANDLER]]" allow-option-label="$i18n{siteSettingsPaymentHandlersAllowed}" allow-option-icon="settings:payment-handler" block-option-label="$i18n{siteSettingsPaymentHandlersBlocked}" block-option-icon="settings:payment-handler-off">
            </settings-category-default-radio-group>
            <category-setting-exceptions category="[[contentSettingsTypesEnum_.PAYMENT_HANDLER]]" allow-header="$i18n{siteSettingsPaymentHandlersAllowedExceptions}" block-header="$i18n{siteSettingsPaymentHandlersBlockedExceptions}" search-filter="[[searchFilter_]]">
            </category-setting-exceptions>
          </settings-subpage>
       </template>
      </template>
      <template is="dom-if" if="[[enableExperimentalWebPlatformFeatures_]]">
        <template is="dom-if" route-path="/content/bluetoothScanning" no-search>
          <settings-subpage page-title="$i18n{siteSettingsBluetoothScanning}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
            <div class="content-settings-header secondary">
              $i18n{siteSettingsBluetoothScanningDescription}
            </div>
            <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.BLUETOOTH_SCANNING]]" allow-option-label="$i18n{siteSettingsBluetoothScanningAsk}" allow-option-icon="settings:bluetooth-scanning" block-option-label="$i18n{siteSettingsBluetoothScanningBlock}" block-option-icon="settings:bluetooth-off">
            </settings-category-default-radio-group>
            <category-setting-exceptions category="[[contentSettingsTypesEnum_.BLUETOOTH_SCANNING]]" read-only-list block-header="$i18n{siteSettingsBluetoothScanningBlockedExceptions}" allow-header="$i18n{siteSettingsBluetoothScanningAllowedExceptions}" search-filter="[[searchFilter_]]">
            </category-setting-exceptions>
          </settings-subpage>
        </template>
      </template>
      <template is="dom-if" route-path="/content/vr" no-search>
        <settings-subpage page-title="$i18n{siteSettingsVr}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsVrDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.VR]]" allow-option-label="$i18n{siteSettingsVrAllowed}" allow-option-icon="settings:vr-headset" block-option-label="$i18n{siteSettingsVrBlocked}" block-option-icon="settings:vr-headset-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.VR]]" read-only-list allow-header="$i18n{siteSettingsVrAllowedExceptions}" block-header="$i18n{siteSettingsVrBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/ar" no-search>
        <settings-subpage page-title="$i18n{siteSettingsAr}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsArDescription}
          </div>
          
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.AR]]" allow-option-label="$i18n{siteSettingsArAsk}" allow-option-icon="settings:vr-headset" block-option-label="$i18n{siteSettingsArBlock}" block-option-icon="settings:vr-headset-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.AR]]" read-only-list allow-header="$i18n{siteSettingsArAllowedExceptions}" block-header="$i18n{siteSettingsArBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/idleDetection" no-search>
        <settings-subpage page-title="$i18n{siteSettingsIdleDetection}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsDeviceUseDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.IDLE_DETECTION]]" allow-option-label="$i18n{siteSettingsDeviceUseAllowed}" allow-option-icon="settings:devices" block-option-label="$i18n{siteSettingsDeviceUseBlocked}" block-option-icon="settings:devices-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.IDLE_DETECTION]]" allow-header="$i18n{siteSettingsDeviceUseAllowedExceptions}" block-header="$i18n{siteSettingsDeviceUseBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/windowManagement" no-search>
        <settings-subpage page-title="$i18n{siteSettingsWindowManagement}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsWindowManagementDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.WINDOW_MANAGEMENT]]" allow-option-label="$i18n{siteSettingsWindowManagementAsk}" allow-option-icon="settings:window-management" block-option-label="$i18n{siteSettingsWindowManagementBlocked}" block-option-icon="settings:window-management-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.WINDOW_MANAGEMENT]]" allow-header="$i18n{siteSettingsWindowManagementAskExceptions}" block-header="$i18n{siteSettingsWindowManagementBlockedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/content/localFonts" no-search>
        <settings-subpage page-title="$i18n{fonts}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
          <div class="content-settings-header secondary">
            $i18n{siteSettingsFontsDescription}
          </div>
          <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.LOCAL_FONTS]]" allow-option-label="$i18n{siteSettingsFontsAllowed}" allow-option-icon="settings:local-fonts" block-option-label="$i18n{siteSettingsFontsBlocked}" block-option-icon="settings:local-fonts-off">
          </settings-category-default-radio-group>
          <category-setting-exceptions category="[[contentSettingsTypesEnum_.LOCAL_FONTS]]" block-header="$i18n{siteSettingsFontsBlockedExceptions}" allow-header="$i18n{siteSettingsFontsAllowedExceptions}" search-filter="[[searchFilter_]]">
          </category-setting-exceptions>
        </settings-subpage>
      </template>
      <template is="dom-if" if="[[enablePermissionStorageAccessApi_]]">
        <template is="dom-if" route-path="/content/storageAccess" no-search>
          <settings-subpage page-title="$i18n{siteSettingsStorageAccess}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
            <div class="content-settings-header secondary">
              $i18n{storageAccessDescription}
            </div>
            <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.STORAGE_ACCESS]]" allow-option-label="$i18n{storageAccessAllowed}" allow-option-icon="settings:storage-access" block-option-label="$i18n{storageAccessBlocked}" block-option-icon="settings:storage-access-off">
            </settings-category-default-radio-group>
            
            <div class="content-settings-header">
              <h2>$i18n{siteSettingsCustomizedBehaviors}</h2>
              <div class="cr-secondary-text">
                $i18n{siteSettingsCustomizedBehaviorsDescription}
              </div>
            </div>
            <storage-access-site-list category-subtype="[[contentSettingEnum_.BLOCK]]" category-header="$i18n{storageAccessBlockedExceptions}" search-filter="[[searchFilter_]]">
            </storage-access-site-list>
            <storage-access-site-list category-subtype="[[contentSettingEnum_.ALLOW]]" category-header="$i18n{storageAccessAllowedExceptions}" search-filter="[[searchFilter_]]">
            </storage-access-site-list>
          </settings-subpage>
        </template>
      </template>
      <template is="dom-if" if="[[autoPictureInPictureEnabled_]]">
        <template is="dom-if" route-path="/content/autoPictureInPicture" no-search>
          <settings-subpage page-title="$i18n{siteSettingsAutoPictureInPicture}" search-label="$i18n{siteSettingsAllSitesSearch}" search-term="{{searchFilter_}}">
            <div class="content-settings-header secondary">
              $i18n{siteSettingsAutoPictureInPictureDescription}
            </div>
            <settings-category-default-radio-group category="[[contentSettingsTypesEnum_.AUTO_PICTURE_IN_PICTURE]]" allow-option-label="$i18n{siteSettingsAutoPictureInPictureAllowed}" allow-option-icon="settings:picture-in-picture" block-option-label="$i18n{siteSettingsAutoPictureInPictureBlocked}" block-option-icon="settings:picture-in-picture-off">
            </settings-category-default-radio-group>
            <category-setting-exceptions category="[[contentSettingsTypesEnum_.AUTO_PICTURE_IN_PICTURE]]" allow-header="$i18n{siteSettingsAutoPictureInPictureAllowedExceptions}" block-header="$i18n{siteSettingsAutoPictureInPictureBlockedExceptions}" search-filter="[[searchFilter_]]">
            </category-setting-exceptions>
          </settings-subpage>
       </template>
      </template>
    </settings-animated-pages>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-privacy-page' is the settings page containing privacy and
 * security settings.
 */
const SettingsPrivacyPageElementBase = PrivacyGuideAvailabilityMixin(RouteObserverMixin(WebUiListenerMixin(I18nMixin(PrefsMixin(BaseMixin(PolymerElement))))));
class SettingsPrivacyPageElement extends SettingsPrivacyPageElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = PrivacyPageBrowserProxyImpl.getInstance();
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
        this.siteSettingsPrefsBrowserProxy_ = SiteSettingsPrefsBrowserProxyImpl.getInstance();
        this.safetyHubBrowserProxy_ = SafetyHubBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-privacy-page';
    }
    static get template() {
        return getTemplate$y();
    }
    static get properties() {
        return {
            /**
             * Preferences state.
             */
            prefs: {
                type: Object,
                notify: true,
            },
            isGuest_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isGuest');
                },
            },
            showClearBrowsingDataDialog_: Boolean,
            showPrivacyGuideDialog_: Boolean,
            enableSafeBrowsingSubresourceFilter_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableSafeBrowsingSubresourceFilter');
                },
            },
            enableBlockAutoplayContentSetting_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableBlockAutoplayContentSetting');
                },
            },
            blockAutoplayStatus_: {
                type: Object,
                value() {
                    return {};
                },
            },
            enablePaymentHandlerContentSetting_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enablePaymentHandlerContentSetting');
                },
            },
            enableFederatedIdentityApiContentSetting_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableFederatedIdentityApiContentSetting');
                },
            },
            enableExperimentalWebPlatformFeatures_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableExperimentalWebPlatformFeatures');
                },
            },
            enableSecurityKeysSubpage_: {
                type: Boolean,
                readOnly: true,
                value() {
                    return loadTimeData.getBoolean('enableSecurityKeysSubpage');
                },
            },
            enableWebBluetoothNewPermissionsBackend_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableWebBluetoothNewPermissionsBackend'),
            },
            enableWebPrintingContentSetting_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableWebPrintingContentSetting'),
            },
            showNotificationPermissionsReview_: {
                type: Boolean,
                value: false,
            },
            isPrivacySandboxRestricted_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('isPrivacySandboxRestricted'),
            },
            isPrivacySandboxRestrictedNoticeEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('isPrivacySandboxRestrictedNoticeEnabled'),
            },
            is3pcdRedesignEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('is3pcdCookieSettingsRedesignEnabled'),
            },
            privateStateTokensEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('privateStateTokensEnabled'),
            },
            enablePermissionStorageAccessApi_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enablePermissionStorageAccessApi'),
            },
            autoPictureInPictureEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('autoPictureInPictureEnabled'),
            },
            /**
             * Whether the File System Access Persistent Permissions UI should be
             * displayed.
             */
            showPersistentPermissions_: {
                type: Boolean,
                readOnly: true,
                value: function () {
                    return loadTimeData.getBoolean('showPersistentPermissions');
                },
            },
            blockMidiByDefault_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('blockMidiByDefault'),
            },
            isProactiveTopicsBlockingEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('isProactiveTopicsBlockingEnabled'),
            },
            focusConfig_: {
                type: Object,
                value() {
                    const map = new Map();
                    if (routes.SECURITY) {
                        map.set(routes.SECURITY.path, '#securityLinkRow');
                    }
                    if (routes.COOKIES) {
                        map.set(`${routes.COOKIES.path}_${routes.PRIVACY.path}`, '#thirdPartyCookiesLinkRow');
                        map.set(`${routes.COOKIES.path}_${routes.BASIC.path}`, '#thirdPartyCookiesLinkRow');
                    }
                    if (routes.TRACKING_PROTECTION) {
                        map.set(routes.TRACKING_PROTECTION.path, '#trackingProtectionLinkRow');
                    }
                    if (routes.SITE_SETTINGS) {
                        map.set(routes.SITE_SETTINGS.path, '#permissionsLinkRow');
                    }
                    if (routes.PRIVACY_GUIDE) {
                        map.set(routes.PRIVACY_GUIDE.path, '#privacyGuideLinkRow');
                    }
                    if (routes.PRIVACY_SANDBOX) {
                        map.set(routes.PRIVACY_SANDBOX.path, '#privacySandboxLinkRow');
                    }
                    return map;
                },
            },
            /**
             * Expose the Permissions SettingsState enum to HTML bindings.
             */
            settingsStateEnum_: {
                type: Object,
                value: SettingsState,
            },
            searchFilter_: String,
            /**
             * Expose ContentSettingsTypes enum to HTML bindings.
             */
            contentSettingsTypesEnum_: {
                type: Object,
                value: ContentSettingsTypes,
            },
            /**
             * Expose ContentSetting enum to HTML bindings.
             */
            contentSettingEnum_: {
                type: Object,
                value: ContentSetting,
            },
            /**
             * Expose ChooserType enum to HTML bindings.
             */
            chooserTypeEnum_: {
                type: Object,
                value: ChooserType,
            },
            safetyCheckNotificationPermissionsEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('safetyCheckNotificationPermissionsEnabled');
                },
            },
            notificationsDefaultBehaviorLabel_: {
                type: String,
                computed: 'computeNotificationsDefaultBehaviorLabel_(safetyCheckNotificationPermissionsEnabled_)',
            },
            enableSafetyHub_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableSafetyHub') &&
                        !loadTimeData.getBoolean('isGuest');
                },
            },
            showDedicatedCpssSetting_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('permissionDedicatedCpssSettings');
                },
            },
            isNotificationAllowed_: Boolean,
            isLocationAllowed_: Boolean,
            notificationPermissionsReviewHeader_: String,
            notificationPermissionsReviewSubeader_: String,
        };
    }
    ready() {
        super.ready();
        this.onBlockAutoplayStatusChanged_({
            pref: {
                key: '',
                type: chrome.settingsPrivate.PrefType.BOOLEAN,
                value: false,
            },
            enabled: false,
        });
        this.addWebUiListener('onBlockAutoplayStatusChanged', (status) => this.onBlockAutoplayStatusChanged_(status));
        if (this.safetyCheckNotificationPermissionsEnabled_ && !this.isGuest_) {
            this.addWebUiListener(SafetyHubEvent.NOTIFICATION_PERMISSIONS_MAYBE_CHANGED, (sites) => this.onReviewNotificationPermissionListChanged_(sites));
            this.safetyHubBrowserProxy_.getNotificationPermissionReview().then((sites) => this.onReviewNotificationPermissionListChanged_(sites));
        }
        this.updateLocationAndNotificationState_();
    }
    currentRouteChanged() {
        this.showClearBrowsingDataDialog_ =
            Router.getInstance().getCurrentRoute() === routes.CLEAR_BROWSER_DATA;
        this.showPrivacyGuideDialog_ =
            Router.getInstance().getCurrentRoute() === routes.PRIVACY_GUIDE &&
                this.isPrivacyGuideAvailable;
        // Only record the metrics when the user navigates to the notification
        // settings page that shows the entry point.
        if (Router.getInstance().getCurrentRoute() ===
            routes.SITE_SETTINGS_NOTIFICATIONS &&
            this.showNotificationPermissionsReview_) {
            this.metricsBrowserProxy_.recordSafetyHubEntryPointShown(SafetyHubEntryPoint.NOTIFICATIONS);
        }
    }
    /**
     * Called when the block autoplay status changes.
     */
    onBlockAutoplayStatusChanged_(autoplayStatus) {
        this.blockAutoplayStatus_ = autoplayStatus;
    }
    /**
     * Updates the block autoplay pref when the toggle is changed.
     */
    onBlockAutoplayToggleChange_(event) {
        const target = event.target;
        this.browserProxy_.setBlockAutoplayEnabled(target.checked);
    }
    onClearBrowsingDataClick_() {
        this.interactedWithPage_();
        Router.getInstance().navigateTo(routes.CLEAR_BROWSER_DATA);
    }
    onCookiesClick_() {
        this.interactedWithPage_();
        Router.getInstance().navigateTo(routes.COOKIES);
    }
    onTrackingProtectionClick_() {
        this.interactedWithPage_();
        this.metricsBrowserProxy_.recordAction('Settings.TrackingProtection.OpenedFromPrivacyPage');
        Router.getInstance().navigateTo(routes.TRACKING_PROTECTION);
    }
    onCbdDialogClosed_() {
        Router.getInstance().navigateTo(routes.CLEAR_BROWSER_DATA.parent);
        setTimeout(() => {
            // Focus after a timeout to ensure any a11y messages get read before
            // screen readers read out the newly focused element.
            const toFocus = this.shadowRoot.querySelector('#clearBrowsingData');
            assert(toFocus);
            focusWithoutInk(toFocus);
        });
    }
    onPrivacyGuideDialogClosed_() {
        Router.getInstance().navigateToPreviousRoute();
        const toFocus = this.shadowRoot.querySelector('#privacyGuideLinkRow');
        assert(toFocus);
        focusWithoutInk(toFocus);
    }
    onPermissionsPageClick_() {
        this.interactedWithPage_();
        Router.getInstance().navigateTo(routes.SITE_SETTINGS);
    }
    onSecurityPageClick_() {
        this.interactedWithPage_();
        this.metricsBrowserProxy_.recordAction('SafeBrowsing.Settings.ShowedFromParentSettings');
        Router.getInstance().navigateTo(routes.SECURITY);
    }
    onPrivacySandboxClick_() {
        this.interactedWithPage_();
        this.metricsBrowserProxy_.recordAction('Settings.PrivacySandbox.OpenedFromSettingsParent');
        Router.getInstance().navigateTo(routes.PRIVACY_SANDBOX);
    }
    async updateLocationAndNotificationState_() {
        const [notificationDefaultValue, locationDefaultValue] = await Promise.all([
            this.siteSettingsPrefsBrowserProxy_.getDefaultValueForContentType(ContentSettingsTypes.NOTIFICATIONS),
            this.siteSettingsPrefsBrowserProxy_.getDefaultValueForContentType(ContentSettingsTypes.GEOLOCATION),
        ]);
        this.isNotificationAllowed_ =
            (notificationDefaultValue.setting === ContentSetting.ASK);
        this.isLocationAllowed_ =
            (locationDefaultValue.setting === ContentSetting.ASK);
    }
    onLocationTopLevelRadioChanged_(event) {
        const radioButtonName = event.detail.value;
        switch (radioButtonName) {
            case 'location-block-radio-button':
                this.setPrefValue('generated.geolocation', SettingsState.BLOCK);
                this.isLocationAllowed_ = false;
                break;
            case 'location-ask-radio-button':
                this.setPrefValue('generated.geolocation', SettingsState.CPSS);
                this.isLocationAllowed_ = true;
                break;
        }
    }
    onNotificationTopLevelRadioChanged_(event) {
        const radioButtonName = event.detail.value;
        switch (radioButtonName) {
            case 'notification-block-radio-button':
                this.setPrefValue('generated.notification', SettingsState.BLOCK);
                this.isNotificationAllowed_ = false;
                break;
            case 'notification-ask-radio-button':
                this.setPrefValue('generated.notification', SettingsState.CPSS);
                this.isNotificationAllowed_ = true;
                break;
        }
    }
    onPrivacyGuideClick_() {
        this.metricsBrowserProxy_.recordPrivacyGuideEntryExitHistogram(PrivacyGuideInteractions.SETTINGS_LINK_ROW_ENTRY);
        this.metricsBrowserProxy_.recordAction('Settings.PrivacyGuide.StartPrivacySettings');
        Router.getInstance().navigateTo(routes.PRIVACY_GUIDE, /* dynamicParams */ undefined, 
        /* removeSearch */ true);
    }
    async onReviewNotificationPermissionListChanged_(permissions) {
        // The notification permissions review is shown when there are items to
        // review (provided the feature is enabled and should be shown). Once
        // visible it remains that way to show completion info, even if the list is
        // emptied.
        if (this.showNotificationPermissionsReview_) {
            return;
        }
        this.showNotificationPermissionsReview_ = !this.isGuest_ &&
            this.safetyCheckNotificationPermissionsEnabled_ &&
            permissions.length > 0;
        this.notificationPermissionsReviewHeader_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyHubNotificationPermissionsPrimaryLabel', permissions.length);
        this.notificationPermissionsReviewSubheader_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyHubNotificationPermissionsSecondaryLabel', permissions.length);
    }
    interactedWithPage_() {
        HatsBrowserProxyImpl.getInstance().trustSafetyInteractionOccurred(TrustSafetyInteraction.USED_PRIVACY_CARD);
    }
    computeAdPrivacySublabel_() {
        // When the privacy sandbox is restricted with a notice, the sublabel
        // wording indicates measurement only, rather than general ad privacy.
        const restricted = this.isPrivacySandboxRestricted_ &&
            this.isPrivacySandboxRestrictedNoticeEnabled_;
        return restricted ? this.i18n('adPrivacyRestrictedLinkRowSubLabel') :
            this.i18n('adPrivacyLinkRowSubLabel');
    }
    computeNotificationsDefaultBehaviorLabel_() {
        return this.safetyCheckNotificationPermissionsEnabled_ ?
            this.i18n('siteSettingsNotificationsDefaultBehaviorDescription') :
            this.i18n('siteSettingsDefaultBehaviorDescription');
    }
    computeThirdPartyCookiesSublabel_() {
        const currentCookieSetting = this.getPref('profile.cookie_controls_mode').value;
        switch (currentCookieSetting) {
            case CookieControlsMode.OFF:
                return this.i18n('thirdPartyCookiesLinkRowSublabelEnabled');
            case CookieControlsMode.INCOGNITO_ONLY:
                return this.i18n('thirdPartyCookiesLinkRowSublabelDisabledIncognito');
            case CookieControlsMode.BLOCK_THIRD_PARTY:
                return this.i18n('thirdPartyCookiesLinkRowSublabelDisabled');
            default:
                assertNotReached();
        }
    }
    shouldShowAdPrivacy_() {
        return !this.isPrivacySandboxRestricted_ ||
            this.isPrivacySandboxRestrictedNoticeEnabled_;
    }
    shouldShowManageTopics_() {
        return this.isProactiveTopicsBlockingEnabled_ &&
            !this.isPrivacySandboxRestricted_;
    }
    onSafetyHubButtonClick_() {
        this.metricsBrowserProxy_.recordSafetyHubEntryPointClicked(SafetyHubEntryPoint.NOTIFICATIONS);
        Router.getInstance().navigateTo(routes.SAFETY_HUB);
    }
}
customElements.define(SettingsPrivacyPageElement.is, SettingsPrivacyPageElement);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
// clang-format on
/**
 * @fileoverview A helper object used by the "SafetyCheck" to interact with
 * the browser.
 */
/**
 * Constants used in safety check C++ to JS communication.
 * Their values need be kept in sync with their counterparts in
 * chrome/browser/ui/webui/settings/safety_check_handler.h and
 * chrome/browser/ui/webui/settings/safety_check_handler.cc
 */
var SafetyCheckCallbackConstants;
(function (SafetyCheckCallbackConstants) {
    SafetyCheckCallbackConstants["PARENT_CHANGED"] = "safety-check-parent-status-changed";
    SafetyCheckCallbackConstants["UPDATES_CHANGED"] = "safety-check-updates-status-changed";
    SafetyCheckCallbackConstants["PASSWORDS_CHANGED"] = "safety-check-passwords-status-changed";
    SafetyCheckCallbackConstants["SAFE_BROWSING_CHANGED"] = "safety-check-safe-browsing-status-changed";
    SafetyCheckCallbackConstants["EXTENSIONS_CHANGED"] = "safety-check-extensions-status-changed";
})(SafetyCheckCallbackConstants || (SafetyCheckCallbackConstants = {}));
/**
 * States of the safety check parent element.
 * Needs to be kept in sync with ParentStatus in
 * chrome/browser/ui/webui/settings/safety_check_handler.h
 */
var SafetyCheckParentStatus;
(function (SafetyCheckParentStatus) {
    SafetyCheckParentStatus[SafetyCheckParentStatus["BEFORE"] = 0] = "BEFORE";
    SafetyCheckParentStatus[SafetyCheckParentStatus["CHECKING"] = 1] = "CHECKING";
    SafetyCheckParentStatus[SafetyCheckParentStatus["AFTER"] = 2] = "AFTER";
})(SafetyCheckParentStatus || (SafetyCheckParentStatus = {}));
/**
 * States of the safety check updates element.
 * Needs to be kept in sync with UpdateStatus in
 * components/safety_check/safety_check.h
 */
var SafetyCheckUpdatesStatus;
(function (SafetyCheckUpdatesStatus) {
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["CHECKING"] = 0] = "CHECKING";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["UPDATED"] = 1] = "UPDATED";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["UPDATING"] = 2] = "UPDATING";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["RELAUNCH"] = 3] = "RELAUNCH";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["DISABLED_BY_ADMIN"] = 4] = "DISABLED_BY_ADMIN";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["FAILED_OFFLINE"] = 5] = "FAILED_OFFLINE";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["FAILED"] = 6] = "FAILED";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["UNKNOWN"] = 7] = "UNKNOWN";
    // Only used in Android but listed here to keep enum in sync.
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["OUTDATED"] = 8] = "OUTDATED";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["UPDATE_TO_ROLLBACK_VERSION_DISALLOWED"] = 9] = "UPDATE_TO_ROLLBACK_VERSION_DISALLOWED";
})(SafetyCheckUpdatesStatus || (SafetyCheckUpdatesStatus = {}));
/**
 * States of the safety check passwords element.
 * Needs to be kept in sync with PasswordsStatus in
 * chrome/browser/ui/webui/settings/safety_check_handler.h
 */
var SafetyCheckPasswordsStatus;
(function (SafetyCheckPasswordsStatus) {
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["CHECKING"] = 0] = "CHECKING";
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["SAFE"] = 1] = "SAFE";
    // Indicates that at least one compromised password exists. Weak, reused or
    // muted compromised password warnings may exist as well.
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["COMPROMISED"] = 2] = "COMPROMISED";
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["OFFLINE"] = 3] = "OFFLINE";
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["NO_PASSWORDS"] = 4] = "NO_PASSWORDS";
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["SIGNED_OUT"] = 5] = "SIGNED_OUT";
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["QUOTA_LIMIT"] = 6] = "QUOTA_LIMIT";
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["ERROR"] = 7] = "ERROR";
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["FEATURE_UNAVAILABLE"] = 8] = "FEATURE_UNAVAILABLE";
    // Indicates that no compromised or reused passwords exist, but there is at
    // least one weak password.
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["WEAK_PASSWORDS_EXIST"] = 9] = "WEAK_PASSWORDS_EXIST";
    // Indicates that no compromised passwords exist, but there is at least one
    // reused password.
    // Not yet supported on Desktop.
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["REUSED_PASSWORDS_EXIST"] = 10] = "REUSED_PASSWORDS_EXIST";
    // Indicates no weak or reused passwords exist, but there is
    // at least one compromised password warning that has been muted by the user.
    // Not yet supported on Desktop.
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["MUTED_COMPROMISED_EXIST"] = 11] = "MUTED_COMPROMISED_EXIST";
})(SafetyCheckPasswordsStatus || (SafetyCheckPasswordsStatus = {}));
/**
 * States of the safety check safe browsing element.
 * Needs to be kept in sync with SafeBrowsingStatus in
 * chrome/browser/ui/webui/settings/safety_check_handler.h
 */
var SafetyCheckSafeBrowsingStatus;
(function (SafetyCheckSafeBrowsingStatus) {
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["CHECKING"] = 0] = "CHECKING";
    // Enabled is deprecated; kept not to break old UMA metrics (enums.xml).
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["ENABLED"] = 1] = "ENABLED";
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["DISABLED"] = 2] = "DISABLED";
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["DISABLED_BY_ADMIN"] = 3] = "DISABLED_BY_ADMIN";
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["DISABLED_BY_EXTENSION"] = 4] = "DISABLED_BY_EXTENSION";
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["ENABLED_STANDARD"] = 5] = "ENABLED_STANDARD";
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["ENABLED_ENHANCED"] = 6] = "ENABLED_ENHANCED";
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["ENABLED_STANDARD_AVAILABLE_ENHANCED"] = 7] = "ENABLED_STANDARD_AVAILABLE_ENHANCED";
})(SafetyCheckSafeBrowsingStatus || (SafetyCheckSafeBrowsingStatus = {}));
/**
 * States of the safety check extensions element.
 * Needs to be kept in sync with ExtensionsStatus in
 * chrome/browser/ui/webui/settings/safety_check_handler.h
 */
var SafetyCheckExtensionsStatus;
(function (SafetyCheckExtensionsStatus) {
    SafetyCheckExtensionsStatus[SafetyCheckExtensionsStatus["CHECKING"] = 0] = "CHECKING";
    SafetyCheckExtensionsStatus[SafetyCheckExtensionsStatus["ERROR"] = 1] = "ERROR";
    SafetyCheckExtensionsStatus[SafetyCheckExtensionsStatus["NO_BLOCKLISTED_EXTENSIONS"] = 2] = "NO_BLOCKLISTED_EXTENSIONS";
    SafetyCheckExtensionsStatus[SafetyCheckExtensionsStatus["BLOCKLISTED_ALL_DISABLED"] = 3] = "BLOCKLISTED_ALL_DISABLED";
    SafetyCheckExtensionsStatus[SafetyCheckExtensionsStatus["BLOCKLISTED_REENABLED_ALL_BY_USER"] = 4] = "BLOCKLISTED_REENABLED_ALL_BY_USER";
    SafetyCheckExtensionsStatus[SafetyCheckExtensionsStatus["BLOCKLISTED_REENABLED_SOME_BY_USER"] = 5] = "BLOCKLISTED_REENABLED_SOME_BY_USER";
    SafetyCheckExtensionsStatus[SafetyCheckExtensionsStatus["BLOCKLISTED_REENABLED_ALL_BY_ADMIN"] = 6] = "BLOCKLISTED_REENABLED_ALL_BY_ADMIN";
})(SafetyCheckExtensionsStatus || (SafetyCheckExtensionsStatus = {}));
class SafetyCheckBrowserProxyImpl {
    runSafetyCheck() {
        chrome.send('performSafetyCheck');
    }
    getParentRanDisplayString() {
        return sendWithPromise('getSafetyCheckRanDisplayString');
    }
    static getInstance() {
        return instance$9 || (instance$9 = new SafetyCheckBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance$9 = obj;
    }
}
let instance$9 = null;

function getTemplate$x() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared iron-flex cr-actionable-row-style">:host{border-top:var(--cr-separator-line);padding:0 var(--cr-section-padding)}:host([row-clickable]) #managedIcon{padding-inline-end:0}iron-icon{display:flex;flex-shrink:0;padding-inline-end:var(--cr-icon-button-margin-start);width:var(--cr-link-row-icon-width,var(--cr-icon-size))}.button-icon{padding-inline-end:0}.icon-blue{fill:var(--google-blue-600)}.icon-red{fill:var(--google-red-600)}@media (prefers-color-scheme:dark){.icon-blue{fill:var(--google-blue-300)}.icon-red{fill:var(--google-red-300)}}</style>
<iron-icon id="statusIcon" icon="[[getStatusIcon_(iconStatus)]]" src="[[getStatusIconSrc_(iconStatus)]]" class$="[[getStatusIconClass_(iconStatus)]]" role="img" aria-label="[[getStatusIconAriaLabel_(iconStatus)]]">
</iron-icon>
<div class="flex cr-padded-text">
  <div id="label" inner-h-t-m-l="[[sanitizeInnerHtml_(label)]]"></div>
  <div id="subLabel" class="secondary" no-search inner-h-t-m-l="[[sanitizeInnerHtml_(subLabel)]]">
  </div>
</div>
<template is="dom-if" if="[[showButton_(buttonLabel)]]" restamp>
  <cr-button id="button" class$="[[buttonClass]]" on-click="onButtonClick_" aria-label="[[buttonAriaLabel]]" no-search>
    [[buttonLabel]]
    <template is="dom-if" if="[[showButtonIcon_(buttonIcon)]]">
      <iron-icon class="button-icon icon-blue" icon="[[buttonIcon]]" slot="suffix-icon">
      </iron-icon>
    </template>
  </cr-button>
</template>
<template is="dom-if" if="[[showManagedIcon_(managedIcon)]]">
  <iron-icon id="managedIcon" icon="[[managedIcon]]" aria-hidden="true">
  </iron-icon>
</template>
<template is="dom-if" if="[[rowClickable]]">
  <cr-icon-button id="rowClickableIndicator" iron-icon="[[rowClickableIcon_]]" aria-describedby="subLabel" aria-labelledby="label" aria-roledescription$="[[getRoleDescription_(rowClickableIcon_)]]">
  </cr-icon-button>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-safety-check-element' bundles functionality safety check elements
 * have in common. It is used by all safety check elements: parent, updates,
 * passwords, etc.
 */
/**
 * UI states a safety check child can be in. Defines the basic UI of the child.
 */
var SafetyCheckIconStatus;
(function (SafetyCheckIconStatus) {
    SafetyCheckIconStatus[SafetyCheckIconStatus["RUNNING"] = 0] = "RUNNING";
    SafetyCheckIconStatus[SafetyCheckIconStatus["SAFE"] = 1] = "SAFE";
    SafetyCheckIconStatus[SafetyCheckIconStatus["INFO"] = 2] = "INFO";
    SafetyCheckIconStatus[SafetyCheckIconStatus["WARNING"] = 3] = "WARNING";
    SafetyCheckIconStatus[SafetyCheckIconStatus["NOTIFICATION_PERMISSIONS"] = 4] = "NOTIFICATION_PERMISSIONS";
    SafetyCheckIconStatus[SafetyCheckIconStatus["UNUSED_SITE_PERMISSIONS"] = 5] = "UNUSED_SITE_PERMISSIONS";
    SafetyCheckIconStatus[SafetyCheckIconStatus["EXTENSIONS_REVIEW"] = 6] = "EXTENSIONS_REVIEW";
})(SafetyCheckIconStatus || (SafetyCheckIconStatus = {}));
const SettingsSafetyCheckChildElementBase = I18nMixin(PolymerElement);
class SettingsSafetyCheckChildElement extends SettingsSafetyCheckChildElementBase {
    static get is() {
        return 'settings-safety-check-child';
    }
    static get template() {
        return getTemplate$x();
    }
    static get properties() {
        return {
            /**
             * Status of the left hand icon.
             */
            iconStatus: {
                type: Number,
                value: SafetyCheckIconStatus.RUNNING,
            },
            // Primary label of the child.
            label: String,
            // Secondary label of the child.
            subLabel: String,
            // Text of the right hand button. |null| removes it from the DOM.
            buttonLabel: String,
            // Aria label of the right hand button.
            buttonAriaLabel: String,
            // Classes of the right hand button.
            buttonClass: String,
            // Icon for the right hand button.
            buttonIcon: String,
            // Should the entire row be clickable.
            rowClickable: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'onRowClickableChanged_',
            },
            // Is the row directed to external link.
            external: {
                type: Boolean,
                value: false,
            },
            rowClickableIcon_: {
                type: String,
                computed: 'computeRowClickableIcon_(external)',
            },
            // Right hand managed icon. |null| removes it from the DOM.
            managedIcon: String,
        };
    }
    /** @return The left hand icon for an icon status. */
    getStatusIcon_() {
        switch (this.iconStatus) {
            case SafetyCheckIconStatus.RUNNING:
                return null;
            case SafetyCheckIconStatus.SAFE:
                return 'cr:check';
            case SafetyCheckIconStatus.INFO:
                return 'cr:info';
            case SafetyCheckIconStatus.WARNING:
                return 'cr:warning';
            case SafetyCheckIconStatus.NOTIFICATION_PERMISSIONS:
                return 'settings:notifications-none';
            case SafetyCheckIconStatus.UNUSED_SITE_PERMISSIONS:
                return 'cr:info-outline';
            case SafetyCheckIconStatus.EXTENSIONS_REVIEW:
                return 'cr:extension';
            default:
                assertNotReached();
        }
    }
    /** @return The left hand icon src for an icon status. */
    getStatusIconSrc_() {
        if (this.iconStatus === SafetyCheckIconStatus.RUNNING) {
            return 'chrome://resources/images/throbber_small.svg';
        }
        return null;
    }
    /** @return The left hand icon class for an icon status. */
    getStatusIconClass_() {
        switch (this.iconStatus) {
            case SafetyCheckIconStatus.RUNNING:
            case SafetyCheckIconStatus.SAFE:
                return 'icon-blue';
            case SafetyCheckIconStatus.WARNING:
                return 'icon-red';
            default:
                return '';
        }
    }
    /** @return The left hand icon aria label for an icon status. */
    getStatusIconAriaLabel_() {
        switch (this.iconStatus) {
            case SafetyCheckIconStatus.RUNNING:
                return this.i18n('safetyCheckIconRunningAriaLabel');
            case SafetyCheckIconStatus.SAFE:
                return this.i18n('safetyCheckIconSafeAriaLabel');
            case SafetyCheckIconStatus.INFO:
                return this.i18n('safetyCheckIconInfoAriaLabel');
            case SafetyCheckIconStatus.WARNING:
                return this.i18n('safetyCheckIconWarningAriaLabel');
            case SafetyCheckIconStatus.NOTIFICATION_PERMISSIONS:
            case SafetyCheckIconStatus.UNUSED_SITE_PERMISSIONS:
            case SafetyCheckIconStatus.EXTENSIONS_REVIEW:
                return undefined;
            default:
                assertNotReached();
        }
    }
    /** @return Whether right-hand side button should be shown. */
    showButton_() {
        return !!this.buttonLabel;
    }
    onButtonClick_() {
        this.dispatchEvent(new CustomEvent('button-click', { bubbles: true, composed: true }));
    }
    /** @return Whether the right-hand side managed icon should be shown. */
    showManagedIcon_() {
        return !!this.managedIcon;
    }
    /** @return Whether the right-hand side button icon should be shown. */
    showButtonIcon_() {
        return !!this.buttonIcon;
    }
    /** @return The icon to show when the row is clickable. */
    computeRowClickableIcon_() {
        return this.external ? 'cr:open-in-new' : 'cr:arrow-right';
    }
    /** @return The subpage role description if the arrow right icon is used. */
    getRoleDescription_() {
        return this.rowClickableIcon_ === 'cr:arrow-right' ?
            this.i18n('subpageArrowRoleDescription') :
            '';
    }
    onRowClickableChanged_() {
        // For cr-actionable-row-style.
        this.toggleAttribute('effectively-disabled_', !this.rowClickable);
    }
    sanitizeInnerHtml_(rawString) {
        return sanitizeInnerHtml(rawString);
    }
}
customElements.define(SettingsSafetyCheckChildElement.is, SettingsSafetyCheckChildElement);

function getTemplate$w() {
    return html `<!--_html_template_start_--><settings-safety-check-child id="safetyCheckChild" icon-status="[[getIconStatus_(status_)]]" label="$i18n{safetyCheckExtensionsPrimaryLabel}" sub-label="[[displayString_]]" button-label="[[getButtonLabel_(status_)]]" button-aria-label="$i18n{safetyCheckExtensionsButtonAriaLabel}" button-class="action-button" on-button-click="onButtonClick_" on-click="onRowClick_" row-clickable="[[isRowClickable_(status_)]]" external managed-icon="[[getManagedIcon_(status_)]]" role="presentation">
</settings-safety-check-child>
<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-safety-extensions-child' is the settings page containing the
 * safety check child showing the extension status.
 */
const SettingsSafetyCheckExtensionsChildElementBase = WebUiListenerMixin(I18nMixin(PolymerElement));
class SettingsSafetyCheckExtensionsChildElement extends SettingsSafetyCheckExtensionsChildElementBase {
    constructor() {
        super(...arguments);
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-safety-check-extensions-child';
    }
    static get template() {
        return getTemplate$w();
    }
    static get properties() {
        return {
            /**
             * Current state of the safety check extensions child.
             */
            status_: {
                type: Number,
                value: SafetyCheckExtensionsStatus.CHECKING,
            },
            /**
             * UI string to display for this child, received from the backend.
             */
            displayString_: String,
            /**
             * A set of statuses that the entire row is clickable.
             */
            rowClickableStatuses: {
                readOnly: true,
                type: Object,
                value: () => new Set([
                    SafetyCheckExtensionsStatus.NO_BLOCKLISTED_EXTENSIONS,
                    SafetyCheckExtensionsStatus.ERROR,
                    SafetyCheckExtensionsStatus.BLOCKLISTED_ALL_DISABLED,
                    SafetyCheckExtensionsStatus.BLOCKLISTED_REENABLED_ALL_BY_ADMIN,
                ]),
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // Register for safety check status updates.
        this.addWebUiListener(SafetyCheckCallbackConstants.EXTENSIONS_CHANGED, this.onSafetyCheckExtensionsChanged_.bind(this));
    }
    onSafetyCheckExtensionsChanged_(event) {
        this.status_ = event.newState;
        this.displayString_ = event.displayString;
    }
    getIconStatus_() {
        switch (this.status_) {
            case SafetyCheckExtensionsStatus.CHECKING:
                return SafetyCheckIconStatus.RUNNING;
            case SafetyCheckExtensionsStatus.ERROR:
            case SafetyCheckExtensionsStatus.BLOCKLISTED_REENABLED_ALL_BY_ADMIN:
                return SafetyCheckIconStatus.INFO;
            case SafetyCheckExtensionsStatus.NO_BLOCKLISTED_EXTENSIONS:
            case SafetyCheckExtensionsStatus.BLOCKLISTED_ALL_DISABLED:
                return SafetyCheckIconStatus.SAFE;
            case SafetyCheckExtensionsStatus.BLOCKLISTED_REENABLED_ALL_BY_USER:
            case SafetyCheckExtensionsStatus.BLOCKLISTED_REENABLED_SOME_BY_USER:
                return SafetyCheckIconStatus.WARNING;
            default:
                assertNotReached();
        }
    }
    getButtonLabel_() {
        switch (this.status_) {
            case SafetyCheckExtensionsStatus.BLOCKLISTED_REENABLED_ALL_BY_USER:
            case SafetyCheckExtensionsStatus.BLOCKLISTED_REENABLED_SOME_BY_USER:
                return this.i18n('safetyCheckReview');
            default:
                return null;
        }
    }
    onButtonClick_() {
        // Log click both in action and histogram.
        this.metricsBrowserProxy_.recordSafetyCheckInteractionHistogram(SafetyCheckInteractions.EXTENSIONS_REVIEW);
        this.metricsBrowserProxy_.recordAction('Settings.SafetyCheck.ReviewExtensions');
        this.openExtensionsPage_();
    }
    getManagedIcon_() {
        switch (this.status_) {
            case SafetyCheckExtensionsStatus.BLOCKLISTED_REENABLED_ALL_BY_ADMIN:
                return 'cr20:domain';
            default:
                return null;
        }
    }
    isRowClickable_() {
        return this.rowClickableStatuses.has(this.status_);
    }
    onRowClick_() {
        if (this.isRowClickable_()) {
            // Log click both in action and histogram.
            this.metricsBrowserProxy_.recordSafetyCheckInteractionHistogram(SafetyCheckInteractions.EXTENSIONS_CARET_NAVIGATION);
            this.metricsBrowserProxy_.recordAction('Settings.SafetyCheck.ReviewExtensionsThroughCaretNavigation');
            this.openExtensionsPage_();
        }
    }
    openExtensionsPage_() {
        OpenWindowProxyImpl.getInstance().openUrl('chrome://extensions');
    }
}
customElements.define(SettingsSafetyCheckExtensionsChildElement.is, SettingsSafetyCheckExtensionsChildElement);

function getTemplate$v() {
    return html `<!--_html_template_start_--><settings-safety-check-child id="safetyCheckChild" icon-status="[[getIconStatus_(status_)]]" label="$i18n{passwords}" sub-label="[[displayString_]]" button-label="[[getButtonLabel_(status_)]]" button-aria-label="$i18n{safetyCheckPasswordsButtonAriaLabel}" button-class="action-button" on-button-click="onButtonClick_" on-click="onRowClick_" row-clickable="[[isRowClickable_(status_)]]" role="presentation">
</settings-safety-check-child>
<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-safety-passwords-child' is the settings page containing the
 * safety check child showing the password status.
 */
const SettingsSafetyCheckPasswordsChildElementBase = WebUiListenerMixin(I18nMixin(PolymerElement));
class SettingsSafetyCheckPasswordsChildElement extends SettingsSafetyCheckPasswordsChildElementBase {
    constructor() {
        super(...arguments);
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-safety-check-passwords-child';
    }
    static get template() {
        return getTemplate$v();
    }
    static get properties() {
        return {
            /**
             * Current state of the safety check passwords child.
             */
            status_: {
                type: Number,
                value: SafetyCheckPasswordsStatus.CHECKING,
            },
            /**
             * UI string to display for this child, received from the backend.
             */
            displayString_: String,
            /**
             * A set of statuses that the entire row is clickable.
             */
            rowClickableStatuses: {
                readOnly: true,
                type: Object,
                value: () => new Set([
                    SafetyCheckPasswordsStatus.SAFE,
                    SafetyCheckPasswordsStatus.QUOTA_LIMIT,
                    SafetyCheckPasswordsStatus.ERROR,
                    SafetyCheckPasswordsStatus.WEAK_PASSWORDS_EXIST,
                ]),
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // Register for safety check status updates.
        this.addWebUiListener(SafetyCheckCallbackConstants.PASSWORDS_CHANGED, this.onSafetyCheckPasswordsChanged_.bind(this));
    }
    onSafetyCheckPasswordsChanged_(event) {
        this.status_ = event.newState;
        this.displayString_ = event.displayString;
    }
    getIconStatus_() {
        switch (this.status_) {
            case SafetyCheckPasswordsStatus.CHECKING:
                return SafetyCheckIconStatus.RUNNING;
            case SafetyCheckPasswordsStatus.SAFE:
                return SafetyCheckIconStatus.SAFE;
            case SafetyCheckPasswordsStatus.COMPROMISED:
                return SafetyCheckIconStatus.WARNING;
            case SafetyCheckPasswordsStatus.OFFLINE:
            case SafetyCheckPasswordsStatus.NO_PASSWORDS:
            case SafetyCheckPasswordsStatus.SIGNED_OUT:
            case SafetyCheckPasswordsStatus.QUOTA_LIMIT:
            case SafetyCheckPasswordsStatus.ERROR:
            case SafetyCheckPasswordsStatus.FEATURE_UNAVAILABLE:
            case SafetyCheckPasswordsStatus.WEAK_PASSWORDS_EXIST:
            case SafetyCheckPasswordsStatus.REUSED_PASSWORDS_EXIST:
            case SafetyCheckPasswordsStatus.MUTED_COMPROMISED_EXIST:
                return SafetyCheckIconStatus.INFO;
            default:
                assertNotReached();
        }
    }
    getButtonLabel_() {
        switch (this.status_) {
            case SafetyCheckPasswordsStatus.COMPROMISED:
                return this.i18n('safetyCheckReview');
            default:
                return null;
        }
    }
    onButtonClick_() {
        // Log click both in action and histogram.
        this.metricsBrowserProxy_.recordSafetyCheckInteractionHistogram(SafetyCheckInteractions.PASSWORDS_MANAGE_COMPROMISED_PASSWORDS);
        this.metricsBrowserProxy_.recordAction('Settings.SafetyCheck.ManagePasswords');
        this.openPasswordCheckPage_();
    }
    isRowClickable_() {
        return this.rowClickableStatuses.has(this.status_);
    }
    onRowClick_() {
        if (this.isRowClickable_()) {
            // Log click both in action and histogram.
            this.metricsBrowserProxy_.recordSafetyCheckInteractionHistogram(this.status_ === SafetyCheckPasswordsStatus.WEAK_PASSWORDS_EXIST ?
                SafetyCheckInteractions.PASSWORDS_MANAGE_WEAK_PASSWORDS :
                SafetyCheckInteractions.PASSWORDS_CARET_NAVIGATION);
            this.metricsBrowserProxy_.recordAction(this.status_ === SafetyCheckPasswordsStatus.WEAK_PASSWORDS_EXIST ?
                'Settings.SafetyCheck.ManageWeakPasswords' :
                'Settings.SafetyCheck.ManagePasswordsThroughCaretNavigation');
            this.openPasswordCheckPage_();
        }
    }
    openPasswordCheckPage_() {
        PasswordManagerImpl.getInstance().recordPasswordCheckReferrer(PasswordCheckReferrer.SAFETY_CHECK);
        PasswordManagerImpl.getInstance().showPasswordManager(PasswordManagerPage.CHECKUP);
    }
}
customElements.define(SettingsSafetyCheckPasswordsChildElement.is, SettingsSafetyCheckPasswordsChildElement);

function getTemplate$u() {
    return html `<!--_html_template_start_--><settings-safety-check-child id="safetyCheckChild" icon-status="[[getIconStatus_(status_)]]" label="$i18n{safeBrowsingSectionLabel}" sub-label="[[displayString_]]" button-label="[[getButtonLabel_(status_)]]" button-aria-label="$i18n{safetyCheckSafeBrowsingButtonAriaLabel}" button-class="action-button" on-button-click="onButtonClick_" on-click="onRowClick_" row-clickable="[[isRowClickable_(status_)]]" managed-icon="[[getManagedIcon_(status_)]]" role="presentation">
</settings-safety-check-child>
<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-safety-safe-browsing-child' is the settings page containing the
 * safety check child showing the Safe Browsing status.
 */
const SettingsSafetyCheckSafeBrowsingChildElementBase = WebUiListenerMixin(I18nMixin(PolymerElement));
class SettingsSafetyCheckSafeBrowsingChildElement extends SettingsSafetyCheckSafeBrowsingChildElementBase {
    constructor() {
        super(...arguments);
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-safety-check-safe-browsing-child';
    }
    static get template() {
        return getTemplate$u();
    }
    static get properties() {
        return {
            /**
             * Current state of the safety check safe browsing child.
             */
            status_: {
                type: Number,
                value: SafetyCheckSafeBrowsingStatus.CHECKING,
            },
            /**
             * UI string to display for this child, received from the backend.
             */
            displayString_: String,
            /**
             * A set of statuses that the entire row is clickable.
             */
            rowClickableStatuses: {
                readOnly: true,
                type: Object,
                value: () => new Set([
                    SafetyCheckSafeBrowsingStatus.ENABLED_STANDARD,
                    SafetyCheckSafeBrowsingStatus.ENABLED_ENHANCED,
                    SafetyCheckSafeBrowsingStatus.ENABLED_STANDARD_AVAILABLE_ENHANCED,
                    SafetyCheckSafeBrowsingStatus.DISABLED_BY_ADMIN,
                    SafetyCheckSafeBrowsingStatus.DISABLED_BY_EXTENSION,
                ]),
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // Register for safety check status updates.
        this.addWebUiListener(SafetyCheckCallbackConstants.SAFE_BROWSING_CHANGED, this.onSafetyCheckSafeBrowsingChanged_.bind(this));
    }
    onSafetyCheckSafeBrowsingChanged_(event) {
        this.displayString_ = event.displayString;
        this.status_ = event.newState;
    }
    getIconStatus_() {
        switch (this.status_) {
            case SafetyCheckSafeBrowsingStatus.CHECKING:
                return SafetyCheckIconStatus.RUNNING;
            case SafetyCheckSafeBrowsingStatus.ENABLED_STANDARD:
            case SafetyCheckSafeBrowsingStatus.ENABLED_ENHANCED:
            case SafetyCheckSafeBrowsingStatus.ENABLED_STANDARD_AVAILABLE_ENHANCED:
                return SafetyCheckIconStatus.SAFE;
            case SafetyCheckSafeBrowsingStatus.ENABLED:
                // ENABLED is deprecated.
                assertNotReached();
            case SafetyCheckSafeBrowsingStatus.DISABLED:
            case SafetyCheckSafeBrowsingStatus.DISABLED_BY_ADMIN:
            case SafetyCheckSafeBrowsingStatus.DISABLED_BY_EXTENSION:
                return SafetyCheckIconStatus.INFO;
            default:
                assertNotReached();
        }
    }
    getButtonLabel_() {
        switch (this.status_) {
            case SafetyCheckSafeBrowsingStatus.DISABLED:
                return this.i18n('safetyCheckSafeBrowsingButton');
            default:
                return null;
        }
    }
    onButtonClick_() {
        // Log click both in action and histogram.
        this.metricsBrowserProxy_.recordSafetyCheckInteractionHistogram(SafetyCheckInteractions.SAFE_BROWSING_MANAGE);
        this.metricsBrowserProxy_.recordAction('Settings.SafetyCheck.ManageSafeBrowsing');
        this.openSecurityPage_();
    }
    getManagedIcon_() {
        switch (this.status_) {
            case SafetyCheckSafeBrowsingStatus.DISABLED_BY_ADMIN:
                return 'cr20:domain';
            case SafetyCheckSafeBrowsingStatus.DISABLED_BY_EXTENSION:
                return 'cr:extension';
            default:
                return null;
        }
    }
    isRowClickable_() {
        return this.rowClickableStatuses.has(this.status_);
    }
    onRowClick_() {
        if (this.isRowClickable_()) {
            // Log click both in action and histogram.
            this.metricsBrowserProxy_.recordSafetyCheckInteractionHistogram(SafetyCheckInteractions.SAFE_BROWSING_CARET_NAVIGATION);
            this.metricsBrowserProxy_.recordAction('Settings.SafetyCheck.ManageSafeBrowsingThroughCaretNavigation');
            this.openSecurityPage_();
        }
    }
    openSecurityPage_() {
        this.metricsBrowserProxy_.recordAction('SafeBrowsing.Settings.ShowedFromSafetyCheck');
        Router.getInstance().navigateTo(routes.SECURITY, /* dynamicParams= */ undefined, 
        /* removeSearch= */ true);
    }
}
customElements.define(SettingsSafetyCheckSafeBrowsingChildElement.is, SettingsSafetyCheckSafeBrowsingChildElement);

function getTemplate$t() {
    return html `<!--_html_template_start_--><settings-safety-check-child id="safetyCheckChild" icon-status="[[getIconStatus_(status_)]]" label="$i18n{safetyCheckUpdatesPrimaryLabel}" sub-label="[[displayString_]]" button-label="[[getButtonLabel_(status_)]]" button-aria-label="$i18n{safetyCheckUpdatesButtonAriaLabel}" button-class="action-button" on-button-click="onButtonClick_" managed-icon="[[getManagedIcon_(status_)]]" role="presentation">
</settings-safety-check-child>

<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-safety-updates-child' is the settings page containing the safety
 * check child showing the browser's update status.
 */
// 
const SettingsSafetyCheckUpdatesChildElementBase = RelaunchMixin(WebUiListenerMixin(I18nMixin(PolymerElement)));
class SettingsSafetyCheckUpdatesChildElement extends SettingsSafetyCheckUpdatesChildElementBase {
    constructor() {
        super(...arguments);
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-safety-check-updates-child';
    }
    static get template() {
        return getTemplate$t();
    }
    static get properties() {
        return {
            /**
             * Current state of the safety check updates child.
             */
            status_: {
                type: Number,
                value: SafetyCheckUpdatesStatus.CHECKING,
            },
            /**
             * UI string to display for this child, received from the backend.
             */
            displayString_: String,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // Register for safety check status updates.
        this.addWebUiListener(SafetyCheckCallbackConstants.UPDATES_CHANGED, this.onSafetyCheckUpdatesChanged_.bind(this));
    }
    onSafetyCheckUpdatesChanged_(event) {
        this.status_ = event.newState;
        this.displayString_ = event.displayString;
    }
    getIconStatus_() {
        switch (this.status_) {
            case SafetyCheckUpdatesStatus.CHECKING:
            case SafetyCheckUpdatesStatus.UPDATING:
                return SafetyCheckIconStatus.RUNNING;
            case SafetyCheckUpdatesStatus.UPDATED:
                return SafetyCheckIconStatus.SAFE;
            case SafetyCheckUpdatesStatus.RELAUNCH:
            case SafetyCheckUpdatesStatus.DISABLED_BY_ADMIN:
            case SafetyCheckUpdatesStatus.UPDATE_TO_ROLLBACK_VERSION_DISALLOWED:
            case SafetyCheckUpdatesStatus.FAILED_OFFLINE:
            case SafetyCheckUpdatesStatus.UNKNOWN:
                return SafetyCheckIconStatus.INFO;
            case SafetyCheckUpdatesStatus.FAILED:
                return SafetyCheckIconStatus.WARNING;
            default:
                assertNotReached();
        }
    }
    getButtonLabel_() {
        switch (this.status_) {
            case SafetyCheckUpdatesStatus.RELAUNCH:
                return this.i18n('aboutRelaunch');
            default:
                return null;
        }
    }
    onButtonClick_() {
        // Log click both in action and histogram.
        this.metricsBrowserProxy_.recordSafetyCheckInteractionHistogram(SafetyCheckInteractions.UPDATES_RELAUNCH);
        this.metricsBrowserProxy_.recordAction('Settings.SafetyCheck.RelaunchAfterUpdates');
        this.performRestart(RestartType.RELAUNCH);
    }
    getManagedIcon_() {
        switch (this.status_) {
            case SafetyCheckUpdatesStatus.DISABLED_BY_ADMIN:
                return 'cr20:domain';
            default:
                return null;
        }
    }
}
customElements.define(SettingsSafetyCheckUpdatesChildElement.is, SettingsSafetyCheckUpdatesChildElement);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SafetyCheckExtensionsBrowserProxyImpl {
    getNumberOfExtensionsThatNeedReview() {
        return sendWithPromise('getNumberOfExtensionsThatNeedReview');
    }
    static getInstance() {
        return instance$8 || (instance$8 = new SafetyCheckExtensionsBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance$8 = obj;
    }
}
let instance$8 = null;

function getTemplate$s() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style settings-shared iron-flex">#safetyCheckCollapse .list-item.selected{min-height:var(--cr-section-two-line-min-height)}iron-icon{display:flex;flex-shrink:0;padding-inline-end:var(--cr-icon-button-margin-start);width:var(--cr-link-row-icon-width,var(--cr-icon-size))}</style>
    <div id="safetyCheckParent" class="cr-row first two-line">
      <iron-icon icon="settings20:safety-check" aria-hidden="true">
      </iron-icon>
      <div class="flex cr-padded-text" no-search>
        [[parentDisplayString_]]
      </div>
      <template is="dom-if" if="[[shouldShowParentButton_(parentStatus_)]]" restamp>
        <cr-button id="safetyCheckParentButton" class="action-button" on-click="onRunSafetyCheckClick_" no-search aria-label="$i18n{safetyCheckParentButtonAriaLabel}">
          $i18n{safetyCheckParentButton}
        </cr-button>
      </template>
      <template is="dom-if" if="[[shouldShowParentIconButton_(parentStatus_)]]" restamp>
        <cr-icon-button iron-icon="settings:refresh" on-click="onRunSafetyCheckClick_" aria-label="$i18n{safetyCheckParentRunAgainButtonAriaLabel}">
        </cr-icon-button>
      </template>
    </div>
    <iron-collapse id="safetyCheckCollapse" opened="[[shouldShowChildren_(parentStatus_)]]">
      <settings-safety-check-updates-child>
      </settings-safety-check-updates-child>
      <settings-safety-check-passwords-child>
      </settings-safety-check-passwords-child>
      <settings-safety-check-safe-browsing-child>
      </settings-safety-check-safe-browsing-child>
      <template is="dom-if" if="[[!safetyCheckExtensionsReviewEnabled_]]" restamp>
        <settings-safety-check-extensions-child>
        </settings-safety-check-extensions-child>
      </template>
    </iron-collapse>
    <template is="dom-if" if="[[shouldShowSafetyCheckExtensionsReview_(
          safetyCheckNumberOfExtensionsThatNeedReview_)]]" restamp>
      <safety-check-extensions>
      </safety-check-extensions>
    </template>
    <template is="dom-if" if="[[shouldShowUnusedSitePermissions_(
          unusedSitePermissions_, safetyCheckUnusedSitePermissionsEnabled_)]]" restamp>
      <settings-safety-check-unused-site-permissions>
      </settings-safety-check-unused-site-permissions>
    </template>
    <template is="dom-if" if="[[shouldShowNotificationPermissions_(
          notificationPermissionSites_, safetyCheckNotificationPermissionsEnabled_)]]" restamp>
      <settings-safety-check-notification-permissions>
      </settings-safety-check-notification-permissions>
    </template>
<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-safety-check-page' is the settings page containing the browser
 * safety check.
 */
const SettingsSafetyCheckPageElementBase = RouteObserverMixin(WebUiListenerMixin(I18nMixin(PolymerElement)));
class SettingsSafetyCheckPageElement extends SettingsSafetyCheckPageElementBase {
    constructor() {
        super(...arguments);
        this.notificationPermissionSites_ = [];
        this.unusedSitePermissions_ = [];
        this.shouldRecordMetrics_ = false;
        this.permissionsBrowserProxy_ = SafetyHubBrowserProxyImpl.getInstance();
        this.safetyCheckBrowserProxy_ = SafetyCheckBrowserProxyImpl.getInstance();
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
        /** Timer ID for periodic update. */
        this.updateTimerId_ = -1;
    }
    static get is() {
        return 'settings-safety-check-page';
    }
    static get template() {
        return getTemplate$s();
    }
    static get properties() {
        return {
            /** Current state of the safety check parent element. */
            parentStatus_: {
                type: Number,
                value: SafetyCheckParentStatus.BEFORE,
            },
            /** UI string to display for the parent status. */
            parentDisplayString_: String,
            /** Boolean to check safety check notification permissions enabled . */
            safetyCheckNotificationPermissionsEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('safetyCheckNotificationPermissionsEnabled');
                },
            },
            /** Boolean to show/hide entry point for unused site permissions. */
            safetyCheckUnusedSitePermissionsEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('safetyCheckUnusedSitePermissionsEnabled');
                },
            },
            /** Boolean to show/hide extensions entry point. */
            safetyCheckExtensionsReviewEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('safetyCheckExtensionsReviewEnabled');
                },
            },
            /* List of notification permission sites. */
            notificationPermissionSites_: Array,
        };
    }
    async connectedCallback() {
        super.connectedCallback();
        // Register for safety check status updates.
        this.addWebUiListener(SafetyCheckCallbackConstants.PARENT_CHANGED, this.onSafetyCheckParentChanged_.bind(this));
        // Register for safety check status updates.
        this.addWebUiListener(SafetyCheckCallbackConstants.EXTENSIONS_CHANGED, this.shouldShowSafetyCheckExtensionsReview_.bind(this));
        // Configure default UI.
        this.parentDisplayString_ =
            this.i18n('safetyCheckParentPrimaryLabelBefore');
        if (Router.getInstance().getCurrentRoute() === routes.SAFETY_CHECK &&
            Router.getInstance().getQueryParameters().has('activateSafetyCheck')) {
            this.runSafetyCheck_();
        }
        // Register for notification permission review list updates.
        this.addWebUiListener(SafetyHubEvent.NOTIFICATION_PERMISSIONS_MAYBE_CHANGED, (sites) => this.onReviewNotificationPermissionListChanged_(sites));
        this.notificationPermissionSites_ =
            await this.permissionsBrowserProxy_.getNotificationPermissionReview();
        // Register for updates on the unused site permission list.
        this.addWebUiListener(SafetyHubEvent.UNUSED_PERMISSIONS_MAYBE_CHANGED, (sites) => this.onUnusedSitePermissionListChanged_(sites));
        this.unusedSitePermissions_ = await this.permissionsBrowserProxy_
            .getRevokedUnusedSitePermissionsList();
        this.safetyCheckNumberOfExtensionsThatNeedReview_ =
            await SafetyCheckExtensionsBrowserProxyImpl.getInstance()
                .getNumberOfExtensionsThatNeedReview();
        if (this.shouldRecordMetrics_) {
            this.metricsBrowserProxy_
                .recordSafetyCheckNotificationsModuleEntryPointShown(this.shouldShowNotificationPermissions_());
            this.metricsBrowserProxy_
                .recordSafetyCheckUnusedSitePermissionsModuleEntryPointShown(this.shouldShowUnusedSitePermissions_());
            this.shouldRecordMetrics_ = false;
        }
    }
    /**
     * Determine whether metrics should be recorded, namely only when the user
     * visited the privacy setting page embedding Safety Check, and not when
     * the element is rendered in the background.
     */
    currentRouteChanged(currentRoute) {
        if (currentRoute.path === routes.PRIVACY.path) {
            this.shouldRecordMetrics_ = true;
        }
    }
    /** Triggers the safety check. */
    runSafetyCheck_() {
        // Log click both in action and histogram.
        this.metricsBrowserProxy_.recordSafetyCheckInteractionHistogram(SafetyCheckInteractions.RUN_SAFETY_CHECK);
        this.metricsBrowserProxy_.recordAction('Settings.SafetyCheck.Start');
        // Trigger safety check.
        this.safetyCheckBrowserProxy_.runSafetyCheck();
        // Readout new safety check status via accessibility.
        getInstance().announce(this.i18n('safetyCheckAriaLiveRunning'));
    }
    onSafetyCheckParentChanged_(event) {
        this.parentStatus_ = event.newState;
        this.parentDisplayString_ = event.displayString;
        if (this.parentStatus_ === SafetyCheckParentStatus.CHECKING) {
            // Ensure the re-run button is visible and focus it.
            flush();
            this.focusIconButton_();
        }
        else if (this.parentStatus_ === SafetyCheckParentStatus.AFTER) {
            // Start periodic safety check parent ran string updates.
            const update = async () => {
                this.parentDisplayString_ =
                    await this.safetyCheckBrowserProxy_.getParentRanDisplayString();
            };
            window.clearInterval(this.updateTimerId_);
            this.updateTimerId_ = window.setInterval(update, 60000);
            // Run initial safety check parent ran string update now.
            update();
            // Readout new safety check status via accessibility.
            getInstance().announce(this.i18n('safetyCheckAriaLiveAfter'));
        }
    }
    shouldShowParentButton_() {
        return this.parentStatus_ === SafetyCheckParentStatus.BEFORE;
    }
    shouldShowParentIconButton_() {
        return this.parentStatus_ !== SafetyCheckParentStatus.BEFORE;
    }
    onRunSafetyCheckClick_() {
        HatsBrowserProxyImpl.getInstance().trustSafetyInteractionOccurred(TrustSafetyInteraction.RAN_SAFETY_CHECK);
        this.runSafetyCheck_();
    }
    focusIconButton_() {
        this.shadowRoot.querySelector('cr-icon-button').focus();
    }
    shouldShowChildren_() {
        return this.parentStatus_ !== SafetyCheckParentStatus.BEFORE;
    }
    onReviewNotificationPermissionListChanged_(sites) {
        this.notificationPermissionSites_ = sites;
    }
    shouldShowNotificationPermissions_() {
        return this.notificationPermissionSites_.length !== 0 &&
            this.safetyCheckNotificationPermissionsEnabled_;
    }
    onUnusedSitePermissionListChanged_(sites) {
        this.unusedSitePermissions_ = sites;
    }
    shouldShowUnusedSitePermissions_() {
        return this.safetyCheckUnusedSitePermissionsEnabled_ &&
            this.unusedSitePermissions_.length !== 0;
    }
    shouldShowSafetyCheckExtensionsReview_() {
        if (this.safetyCheckExtensionsReviewEnabled_ &&
            this.safetyCheckNumberOfExtensionsThatNeedReview_ !== 0) {
            this.metricsBrowserProxy_.recordAction('Settings.SafetyCheck.ShownExtensionsReviewRow');
            return true;
        }
        return false;
    }
}
customElements.define(SettingsSafetyCheckPageElement.is, SettingsSafetyCheckPageElement);

function getTemplate$r() {
    return html `<!--_html_template_start_-->    <style include="settings-shared">cr-link-row{--cr-icon-button-margin-start:20px}cr-link-row:not([hidden])~cr-link-row{border-top:var(--cr-separator-line)}</style>
    <settings-animated-pages id="pages" section="autofill" focus-config="[[focusConfig_]]">
      <div route-path="default">
        <cr-link-row id="passwordManagerButton" label="$i18n{localPasswordManager}" on-click="onPasswordsClick_" role-description="$i18n{subpageArrowRoleDescription}" start-icon="cr20:password" external>
        </cr-link-row>
        <template is="dom-if" if="[[isPlusAddressSettingEnabled_]]">
          <cr-link-row id="plusAddressManagerButton" label="$i18n{plusAddressSettings}" on-click="onPlusAddressClick_" role-description="$i18n{subpageArrowRoleDescription}" external>
          </cr-link-row>
        </template>
        <cr-link-row id="paymentManagerButton" start-icon="settings20:credit-card" label="$i18n{creditCards}" on-click="onPaymentsClick_" role-description="$i18n{subpageArrowRoleDescription}"></cr-link-row>
        <cr-link-row id="addressesManagerButton" start-icon="settings:location-on" label="$i18n{addressesTitle}" on-click="onAddressesClick_" role-description="$i18n{subpageArrowRoleDescription}"></cr-link-row>
      </div>
      
      <template is="dom-if" route-path="/payments">
        <settings-subpage associated-control="[[$$('#paymentManagerButton')]]" page-title="$i18n{creditCards}" learn-more-url="$i18n{addressesAndPaymentMethodsLearnMoreURL}">
          <settings-payments-section id="paymentsSection" prefs="{{prefs}}">
          </settings-payments-section>
        </settings-subpage>
      </template>
      <template is="dom-if" route-path="/addresses">
        <settings-subpage associated-control="[[$$('#addressesManagerButton')]]" page-title="$i18n{addressesTitle}" learn-more-url="$i18n{addressesAndPaymentMethodsLearnMoreURL}">
          <settings-autofill-section id="autofillSection" prefs="{{prefs}}">
          </settings-autofill-section>
        </settings-subpage>
      </template>
    </settings-animated-pages>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-autofill-page' is the settings page containing settings for
 * passwords, payment methods and addresses.
 */
const SettingsAutofillPageElementBase = PrefsMixin(BaseMixin(PolymerElement));
class SettingsAutofillPageElement extends SettingsAutofillPageElementBase {
    static get is() {
        return 'settings-autofill-page';
    }
    static get template() {
        return getTemplate$r();
    }
    static get properties() {
        return {
            passkeyFilter_: String,
            focusConfig_: {
                type: Object,
                value() {
                    const map = new Map();
                    if (routes.PAYMENTS) {
                        map.set(routes.PAYMENTS.path, '#paymentManagerButton');
                    }
                    if (routes.ADDRESSES) {
                        map.set(routes.ADDRESSES.path, '#addressesManagerButton');
                    }
                    return map;
                },
            },
            isPlusAddressSettingEnabled_: {
                type: Boolean,
                value: () => !!loadTimeData.getString('plusAddressManagementUrl'),
            },
        };
    }
    /**
     * Shows the manage addresses sub page.
     */
    onAddressesClick_() {
        Router.getInstance().navigateTo(routes.ADDRESSES);
    }
    /**
     * Shows the manage payment methods sub page.
     */
    onPaymentsClick_() {
        Router.getInstance().navigateTo(routes.PAYMENTS);
    }
    /**
     * Shows Password Manager page.
     */
    onPasswordsClick_() {
        PasswordManagerImpl.getInstance().recordPasswordsPageAccessInSettings();
        PasswordManagerImpl.getInstance().showPasswordManager(PasswordManagerPage.PASSWORDS);
    }
    onPlusAddressClick_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('plusAddressManagementUrl'));
    }
}
customElements.define(SettingsAutofillPageElement.is, SettingsAutofillPageElement);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let lazyLoadPromise = null;
/** @return Resolves when the lazy load module is imported. */
function ensureLazyLoaded() {
    if (lazyLoadPromise === null) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = getTrustedScriptURL `./lazy_load.js`;
        document.body.appendChild(script);
        lazyLoadPromise =
            Promise
                .all([
                'settings-appearance-page', 'settings-autofill-section',
                'settings-payments-section',
                'settings-clear-browsing-data-dialog',
                'settings-search-engines-page',
                // 
                'certificate-manager',
                // 
                'settings-a11y-page', 'settings-downloads-page',
                // 
                'settings-reset-page',
                // 
                // 
            ].map(name => customElements.whenDefined(name)))
                .then(() => { });
    }
    return lazyLoadPromise;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * settings-idle-load is a simple variant of dom-if designed for lazy
 * loading and rendering of elements that are accessed imperatively. A URL is
 * given that holds the elements to be loaded lazily.
 */
class SettingsIdleLoadElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.child_ = null;
        this.instance_ = null;
        this.idleCallback_ = 0;
        this.loading_ = null;
    }
    static get is() {
        return 'settings-idle-load';
    }
    static get template() {
        return html `<slot></slot>`;
    }
    connectedCallback() {
        super.connectedCallback();
        this.idleCallback_ = requestIdleCallback(() => {
            this.get();
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        // No-op if callback already fired.
        cancelIdleCallback(this.idleCallback_);
    }
    /**
     * @return Resolves with the stamped child element after
     *     the lazy module has been loaded.
     */
    requestLazyModule_() {
        return new Promise((resolve, reject) => {
            ensureLazyLoaded().then(() => {
                const template = (this.shadowRoot.querySelector('slot')
                    .assignedNodes({ flatten: true })
                    .filter(n => n.nodeType === Node.ELEMENT_NODE)[0]);
                const TemplateClass = templatize(template, this, {
                    mutableData: false,
                    forwardHostProp: this._forwardHostPropV2,
                });
                this.instance_ = new TemplateClass();
                assert(!this.child_);
                this.child_ = this.instance_.root.firstElementChild;
                this.parentNode.insertBefore(this.instance_.root, this);
                resolve(this.child_);
                this.dispatchEvent(new CustomEvent('lazy-loaded', { bubbles: true, composed: true }));
            }, reject);
        });
    }
    /**
     * @return Child element which has been stamped into the DOM tree.
     */
    get() {
        if (this.loading_) {
            return this.loading_;
        }
        this.loading_ = this.requestLazyModule_();
        return this.loading_;
    }
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _forwardHostPropV2(prop, value) {
        if (this.instance_) {
            this.instance_.forwardHostProp(prop, value);
        }
    }
}
customElements.define(SettingsIdleLoadElement.is, SettingsIdleLoadElement);

function getTemplate$q() {
    return html `<!--_html_template_start_-->    <style include="settings-shared"></style>
    <cr-dialog id="dialog" close-text="$i18n{close}">
      <div slot="title">[[dialogTitle_]]</div>
      <div slot="body">
        <cr-input id="url" label="$i18n{onStartupSiteUrl}" value="{{url_}}" on-input="validate_" spellcheck="false" maxlength="[[urlLimit_]]" invalid="[[hasError_(error_)]]" autofocus error-message="[[errorMessage_('$i18nPolymer{onStartupInvalidUrl}',
                '$i18nPolymer{onStartupUrlTooLong}', error_)]]">
        </cr-input>
      </div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onCancelClick_" id="cancel">$i18n{cancel}</cr-button>
        <cr-button id="actionButton" class="action-button" on-click="onActionButtonClick_">[[actionButtonText_]]</cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
class StartupUrlsPageBrowserProxyImpl {
    loadStartupPages() {
        chrome.send('onStartupPrefsPageLoad');
    }
    useCurrentPages() {
        chrome.send('setStartupPagesToCurrentPages');
    }
    validateStartupPage(url) {
        return sendWithPromise('validateStartupPage', url);
    }
    addStartupPage(url) {
        return sendWithPromise('addStartupPage', url);
    }
    editStartupPage(modelIndex, url) {
        return sendWithPromise('editStartupPage', modelIndex, url);
    }
    removeStartupPage(index) {
        chrome.send('removeStartupPage', [index]);
    }
    static getInstance() {
        return instance$7 || (instance$7 = new StartupUrlsPageBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance$7 = obj;
    }
}
let instance$7 = null;

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Describe the current URL input error status.
 * @enum {number}
 */
var UrlInputError;
(function (UrlInputError) {
    UrlInputError[UrlInputError["NONE"] = 0] = "NONE";
    UrlInputError[UrlInputError["INVALID_URL"] = 1] = "INVALID_URL";
    UrlInputError[UrlInputError["TOO_LONG"] = 2] = "TOO_LONG";
})(UrlInputError || (UrlInputError = {}));
class SettingsStartupUrlDialogElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.browserProxy_ = StartupUrlsPageBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-startup-url-dialog';
    }
    static get template() {
        return getTemplate$q();
    }
    static get properties() {
        return {
            error_: {
                type: Number,
                value: UrlInputError.NONE,
            },
            url_: String,
            urlLimit_: {
                readOnly: true,
                type: Number,
                value: 100 * 1024, // 100 KB.
            },
            /**
             * If specified the dialog acts as an "Edit page" dialog, otherwise as an
             * "Add new page" dialog.
             */
            model: Object,
            dialogTitle_: String,
            actionButtonText_: String,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.model) {
            this.dialogTitle_ = loadTimeData.getString('onStartupEditPage');
            this.actionButtonText_ = loadTimeData.getString('save');
            this.$.actionButton.disabled = false;
            // Pre-populate the input field.
            this.url_ = this.model.url;
        }
        else {
            this.dialogTitle_ = loadTimeData.getString('onStartupAddNewPage');
            this.actionButtonText_ = loadTimeData.getString('add');
            this.$.actionButton.disabled = true;
        }
        this.$.dialog.showModal();
    }
    hasError_() {
        return this.error_ !== UrlInputError.NONE;
    }
    errorMessage_(invalidUrl, tooLong) {
        return ['', invalidUrl, tooLong][this.error_];
    }
    onCancelClick_() {
        this.$.dialog.close();
    }
    onActionButtonClick_() {
        const whenDone = this.model ?
            this.browserProxy_.editStartupPage(this.model.modelIndex, this.url_) :
            this.browserProxy_.addStartupPage(this.url_);
        whenDone.then(success => {
            if (success) {
                this.$.dialog.close();
            }
            // If the URL was invalid, there is nothing to do, just leave the dialog
            // open and let the user fix the URL or cancel.
        });
    }
    validate_() {
        if (this.url_.length === 0) {
            this.$.actionButton.disabled = true;
            this.error_ = UrlInputError.NONE;
            return;
        }
        if (this.url_.length >= this.urlLimit_) {
            this.$.actionButton.disabled = true;
            this.error_ = UrlInputError.TOO_LONG;
            return;
        }
        this.browserProxy_.validateStartupPage(this.url_).then(isValid => {
            this.$.actionButton.disabled = !isValid;
            this.error_ = isValid ? UrlInputError.NONE : UrlInputError.INVALID_URL;
        });
    }
}
customElements.define(SettingsStartupUrlDialogElement.is, SettingsStartupUrlDialogElement);

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Mixin for scrollable containers with <iron-list>.
 *
 * Any containers with the 'scrollable' attribute set will have the following
 * classes toggled appropriately: can-scroll, is-scrolled, scrolled-to-bottom.
 * These classes are used to style the container div and list elements
 * appropriately, see cr_shared_style.css.
 *
 * The associated HTML should look something like:
 *   <div id="container" scrollable>
 *     <iron-list items="[[items]]" scroll-target="container">
 *       <template>
 *         <my-element item="[[item]] tabindex$="[[tabIndex]]"></my-element>
 *       </template>
 *     </iron-list>
 *   </div>
 *
 * In order to get correct keyboard focus (tab) behavior within the list,
 * any elements with tabbable sub-elements also need to set tabindex, e.g:
 *
 * <dom-module id="my-element>
 *   <template>
 *     ...
 *     <paper-icon-button toggles active="{{opened}}" tabindex$="[[tabindex]]">
 *   </template>
 * </dom-module>
 *
 * NOTE: If 'container' is not fixed size, it is important to call
 * updateScrollableContents() when [[items]] changes, otherwise the container
 * will not be sized correctly.
 */
// clang-format off
const CrScrollableMixin = dedupingMixin((superClass) => {
    class CrScrollableMixin extends superClass {
        constructor(...args) {
            super(...args);
            this.resizeObserver_ = new ResizeObserver((entries) => {
                requestAnimationFrame(() => {
                    for (const entry of entries) {
                        this.onScrollableContainerResize_(entry.target);
                    }
                });
            });
        }
        ready() {
            super.ready();
            beforeNextRender(this, () => {
                this.requestUpdateScroll();
                // Listen to the 'scroll' event for each scrollable container.
                const scrollableElements = this.shadowRoot.querySelectorAll('[scrollable]');
                for (const scrollableElement of scrollableElements) {
                    scrollableElement.addEventListener('scroll', this.updateScrollEvent_.bind(this));
                }
            });
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.resizeObserver_.disconnect();
        }
        /**
         * Called any time the contents of a scrollable container may have
         * changed. This ensures that the <iron-list> contents of dynamically
         * sized containers are resized correctly.
         */
        updateScrollableContents() {
            this.requestUpdateScroll();
            const ironLists = this.shadowRoot.querySelectorAll('[scrollable] iron-list');
            for (const ironList of ironLists) {
                // When the scroll-container of an iron-list has scrollHeight of 1,
                // the iron-list will default to showing a minimum of 3 items.
                // After an iron-resize is fired, it will resize to have the correct
                // scrollHeight, but another iron-resize is required to render all
                // the items correctly.
                // If the scrollHeight of the scroll-container is 0, the element is
                // not yet rendered, and we must wait until its scrollHeight becomes
                // 1, then fire the first iron-resize event.
                const scrollContainer = ironList.parentElement;
                const scrollHeight = scrollContainer.scrollHeight;
                if (scrollHeight <= 1 && ironList.items.length > 0 &&
                    window.getComputedStyle(scrollContainer).display !== 'none') {
                    // The scroll-container does not have a proper scrollHeight yet.
                    // An additional iron-resize is needed, which will be triggered by
                    // the observer after scrollHeight changes.
                    // Do not observe for resize if there are no items, or if the
                    // scroll-container is explicitly hidden, as in those cases there
                    // will not be any future resizes.
                    this.resizeObserver_.observe(scrollContainer);
                }
                if (scrollHeight !== 0) {
                    // If the iron-list is already rendered, fire an initial
                    // iron-resize event. Otherwise, the resizeObserver_ will handle
                    // firing the iron-resize event, upon its scrollHeight becoming 1.
                    ironList.notifyResize();
                }
            }
        }
        /**
         * Setup the initial scrolling related classes for each scrollable
         * container. Called from ready() and updateScrollableContents(). May
         * also be called directly when the contents change (e.g. when not using
         * iron-list).
         */
        requestUpdateScroll() {
            requestAnimationFrame(() => {
                const scrollableElements = this.shadowRoot.querySelectorAll('[scrollable]');
                for (const scrollableElement of scrollableElements) {
                    this.updateScroll_(scrollableElement);
                }
            });
        }
        saveScroll(list) {
            // Store a FIFO of saved scroll positions so that multiple updates in
            // a frame are applied correctly. Specifically we need to track when
            // '0' is saved (but not apply it), and still handle patterns like
            // [30, 0, 32].
            list.savedScrollTops = list.savedScrollTops || [];
            list.savedScrollTops.push(list.scrollTarget.scrollTop);
        }
        restoreScroll(list) {
            microTask.run(() => {
                const scrollTop = list.savedScrollTops.shift();
                // Ignore scrollTop of 0 in case it was intermittent (we do not need
                // to explicitly scroll to 0).
                if (scrollTop !== 0) {
                    list.scroll(0, scrollTop);
                }
            });
        }
        /**
         * Event wrapper for updateScroll_.
         */
        updateScrollEvent_(event) {
            const scrollable = event.target;
            this.updateScroll_(scrollable);
        }
        /**
         * This gets called once initially and any time a scrollable container
         * scrolls.
         */
        updateScroll_(scrollable) {
            scrollable.classList.toggle('can-scroll', scrollable.clientHeight < scrollable.scrollHeight);
            scrollable.classList.toggle('is-scrolled', scrollable.scrollTop > 0);
            scrollable.classList.toggle('scrolled-to-bottom', scrollable.scrollTop + scrollable.clientHeight >=
                scrollable.scrollHeight);
        }
        /**
         * This gets called upon a resize event on the scrollable element
         */
        onScrollableContainerResize_(scrollable) {
            const nodeList = scrollable.querySelectorAll('iron-list');
            if (nodeList.length === 0 || scrollable.scrollHeight > 1) {
                // Stop observing after the scrollHeight has its correct value, or
                // if somehow there are no more iron-lists in the scrollable.
                this.resizeObserver_.unobserve(scrollable);
            }
            if (scrollable.scrollHeight !== 0) {
                // Fire iron-resize event only if scrollHeight has changed from 0 to
                // 1 or from 1 to the correct size. ResizeObserver doesn't exactly
                // observe scrollHeight and may fire despite it staying at 0, so
                // we can ignore those events.
                for (const node of nodeList) {
                    node.notifyResize();
                }
            }
        }
    }
    return CrScrollableMixin;
});

function getTemplate$p() {
    return html `<!--_html_template_start_-->    <style include="settings-shared">.hide-overflow{overflow:hidden}</style>
    <div class="list-item" focus-row-container>
      <site-favicon url="[[model.url]]"></site-favicon>
      <div class="middle hide-overflow">
        <div class="text-elide">[[model.title]]</div>
        <div class="text-elide secondary">[[model.url]]</div>
      </div>
      <template is="dom-if" if="[[editable]]">
        <cr-icon-button class="icon-more-vert" id="dots" on-click="onDotsClick_" title="$i18n{moreActions}" focus-row-control focus-type="menu">
        </cr-icon-button>
        <cr-lazy-render id="menu">
          <template>
            <cr-action-menu role-description="$i18n{menu}">
              <button class="dropdown-item" on-click="onEditClick_">
                $i18n{edit}
              </button>
              <button class="dropdown-item" id="remove" on-click="onRemoveClick_">
                $i18n{onStartupRemove}
              </button>
            </cr-action-menu>
          </template>
        </cr-lazy-render>
      </template>
    </div>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview settings-startup-url-entry represents a UI component that
 * displays a URL that is loaded during startup. It includes a menu that allows
 * the user to edit/remove the entry.
 */
/**
 * The name of the event fired from this element when the "Edit" option is
 * clicked.
 */
const EDIT_STARTUP_URL_EVENT = 'edit-startup-url';
const SettingsStartupUrlEntryElementBase = FocusRowMixin(PolymerElement);
class SettingsStartupUrlEntryElement extends SettingsStartupUrlEntryElementBase {
    static get is() {
        return 'settings-startup-url-entry';
    }
    static get template() {
        return getTemplate$p();
    }
    static get properties() {
        return {
            editable: {
                type: Boolean,
                reflectToAttribute: true,
            },
            model: Object,
        };
    }
    onRemoveClick_() {
        this.shadowRoot.querySelector('cr-action-menu').close();
        StartupUrlsPageBrowserProxyImpl.getInstance().removeStartupPage(this.model.modelIndex);
    }
    onEditClick_(e) {
        e.preventDefault();
        this.shadowRoot.querySelector('cr-action-menu').close();
        this.dispatchEvent(new CustomEvent(EDIT_STARTUP_URL_EVENT, {
            bubbles: true,
            composed: true,
            detail: {
                model: this.model,
                anchor: this.shadowRoot.querySelector('#dots'),
            },
        }));
    }
    onDotsClick_() {
        const actionMenu = this.shadowRoot
            .querySelector('#menu').get();
        const dots = this.shadowRoot.querySelector('#dots');
        assert(dots);
        actionMenu.showAt(dots);
    }
}
customElements.define(SettingsStartupUrlEntryElement.is, SettingsStartupUrlEntryElement);

function getTemplate$o() {
    return html `<!--_html_template_start_-->    <style include="settings-shared action-link iron-flex">#editOptions>div{border-top:var(--cr-separator-line)}#outer{max-height:355px}#container settings-startup-url-entry{cursor:default}</style>
    <div id="outer" class="layout vertical flex list-frame">
      <div id="container" class="scroll-container" scrollable>
        <iron-list items="[[startupPages_]]" scroll-target="container" preserve-focus risk-selection class="cr-separators">
          <template>
            <settings-startup-url-entry model="[[item]]" first$="[[!index]]" tabindex$="[[tabIndex]]" iron-list-tab-index="[[tabIndex]]" last-focused="{{lastFocused_}}" list-blurred="{{listBlurred_}}" focus-row-index="[[index]]" editable="[[shouldAllowUrlsEdit_(
                    prefs.session.startup_urls.enforcement)]]">
            </settings-startup-url-entry>
          </template>
        </iron-list>
      </div>
    </div>
    <div id="editOptions" class="list-frame">
      <template is="dom-if" if="[[shouldAllowUrlsEdit_(
          prefs.session.startup_urls.enforcement)]]" restamp>
        <div class="list-item" id="addPage">
          <a is="action-link" class="list-button" on-click="onAddPageClick_">
            $i18n{onStartupAddNewPage}
          </a>
        </div>
        <div class="list-item" id="useCurrentPages">
          <a is="action-link" class="list-button" on-click="onUseCurrentPagesClick_">
            $i18n{onStartupUseCurrent}
          </a>
        </div>
      </template>
      <template is="dom-if" if="[[prefs.session.startup_urls.extensionId]]" restamp>
        <extension-controlled-indicator extension-id="[[prefs.session.startup_urls.extensionId]]" extension-name="[[prefs.session.startup_urls.controlledByName]]" extension-can-be-disabled="[[
                prefs.session.startup_urls.extensionCanBeDisabled]]">
        </extension-controlled-indicator>
      </template>
    </div>
    <template is="dom-if" if="[[showStartupUrlDialog_]]" restamp>
      <settings-startup-url-dialog model="[[startupUrlDialogModel_]]" on-close="destroyUrlDialog_">
      </settings-startup-url-dialog>
    </template>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-startup-urls-page' is the settings page
 * containing the urls that will be opened when chrome is started.
 */
const SettingsStartupUrlsPageElementBase = CrScrollableMixin(WebUiListenerMixin(PolymerElement));
class SettingsStartupUrlsPageElement extends SettingsStartupUrlsPageElementBase {
    static get is() {
        return 'settings-startup-urls-page';
    }
    static get template() {
        return getTemplate$o();
    }
    static get properties() {
        return {
            prefs: Object,
            /**
             * Pages to load upon browser startup.
             */
            startupPages_: Array,
            showStartupUrlDialog_: Boolean,
            startupUrlDialogModel_: Object,
            lastFocused_: Object,
            listBlurred_: Boolean,
        };
    }
    constructor() {
        super();
        this.browserProxy_ = StartupUrlsPageBrowserProxyImpl.getInstance();
        /**
         * The element to return focus to, when the startup-url-dialog is closed.
         */
        this.startupUrlDialogAnchor_ = null;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('update-startup-pages', (startupPages) => {
            // If an "edit" URL dialog was open, close it, because the underlying
            // page might have just been removed (and model indices have changed
            // anyway).
            if (this.startupUrlDialogModel_) {
                this.destroyUrlDialog_();
            }
            this.startupPages_ = startupPages;
            this.updateScrollableContents();
        });
        this.browserProxy_.loadStartupPages();
        this.addEventListener(EDIT_STARTUP_URL_EVENT, (event) => {
            const e = event;
            this.startupUrlDialogModel_ = e.detail.model;
            this.startupUrlDialogAnchor_ = e.detail.anchor;
            this.showStartupUrlDialog_ = true;
            e.stopPropagation();
        });
    }
    onAddPageClick_(e) {
        e.preventDefault();
        this.showStartupUrlDialog_ = true;
        this.startupUrlDialogAnchor_ =
            this.shadowRoot.querySelector('#addPage a[is=action-link]');
    }
    destroyUrlDialog_() {
        this.showStartupUrlDialog_ = false;
        this.startupUrlDialogModel_ = null;
        if (this.startupUrlDialogAnchor_) {
            focusWithoutInk(this.startupUrlDialogAnchor_);
            this.startupUrlDialogAnchor_ = null;
        }
    }
    onUseCurrentPagesClick_() {
        this.browserProxy_.useCurrentPages();
    }
    /**
     * @return Whether "Add new page" and "Use current pages" are allowed.
     */
    shouldAllowUrlsEdit_() {
        return this.get('prefs.session.startup_urls.enforcement') !==
            chrome.settingsPrivate.Enforcement.ENFORCED;
    }
}
customElements.define(SettingsStartupUrlsPageElement.is, SettingsStartupUrlsPageElement);

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
class OnStartupBrowserProxyImpl {
    getNtpExtension() {
        return sendWithPromise('getNtpExtension');
    }
    static getInstance() {
        return instance$6 || (instance$6 = new OnStartupBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance$6 = obj;
    }
}
let instance$6 = null;

function getTemplate$n() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style settings-shared iron-flex">.block{display:block}</style>
    <div class="cr-row first">
      <settings-radio-group id="onStartupRadioGroup" class="flex" pref="{{prefs.session.restore_on_startup}}" group-aria-label="$i18n{onStartup}">
        <controlled-radio-button name="[[getName_(prefValues_.OPEN_NEW_TAB)]]" pref="[[prefs.session.restore_on_startup]]" label="$i18n{onStartupOpenNewTab}" no-extension-indicator>
        </controlled-radio-button>
        <template is="dom-if" if="[[ntpExtension_]]">
          <extension-controlled-indicator extension-id="[[ntpExtension_.id]]" extension-name="[[ntpExtension_.name]]" extension-can-be-disabled="[[ntpExtension_.canBeDisabled]]">
          </extension-controlled-indicator>
        </template>
        <controlled-radio-button name="[[getName_(prefValues_.CONTINUE)]]" pref="[[prefs.session.restore_on_startup]]" label="$i18n{onStartupContinue}">
        </controlled-radio-button>
        <controlled-radio-button name="[[getName_(prefValues_.OPEN_SPECIFIC)]]" pref="[[prefs.session.restore_on_startup]]" label="$i18n{onStartupOpenSpecific}">
        </controlled-radio-button>
        <controlled-radio-button name="[[getName_(
          prefValues_.CONTINUE_AND_OPEN_SPECIFIC)]]" pref="[[prefs.session.restore_on_startup]]" label="$i18n{onStartupContinueAndOpenSpecific}" hidden="[[!showContinueAndOpenSpecific_(
              prefs.session.restore_on_startup)]]">
        </controlled-radio-button>
      </settings-radio-group>
    </div>
    <template is="dom-if" if="[[showStartupUrls_(prefs.session.restore_on_startup.value)]]">
      <settings-startup-urls-page prefs="[[prefs]]">
      </settings-startup-urls-page>
    </template>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-on-startup-page' is a settings page.
 */
/** Enum values for the 'session.restore_on_startup' preference. */
var PrefValues;
(function (PrefValues) {
    PrefValues[PrefValues["CONTINUE"] = 1] = "CONTINUE";
    PrefValues[PrefValues["OPEN_NEW_TAB"] = 5] = "OPEN_NEW_TAB";
    PrefValues[PrefValues["OPEN_SPECIFIC"] = 4] = "OPEN_SPECIFIC";
    PrefValues[PrefValues["CONTINUE_AND_OPEN_SPECIFIC"] = 6] = "CONTINUE_AND_OPEN_SPECIFIC";
})(PrefValues || (PrefValues = {}));
const SettingsOnStartupPageElementBase = WebUiListenerMixin(PolymerElement);
class SettingsOnStartupPageElement extends SettingsOnStartupPageElementBase {
    static get is() {
        return 'settings-on-startup-page';
    }
    static get template() {
        return getTemplate$n();
    }
    static get properties() {
        return {
            prefs: {
                type: Object,
                notify: true,
            },
            ntpExtension_: Object,
            prefValues_: { readOnly: true, type: Object, value: PrefValues },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        const updateNtpExtension = (ntpExtension) => {
            // Note that |ntpExtension| is empty if there is no NTP extension.
            this.ntpExtension_ = ntpExtension;
        };
        OnStartupBrowserProxyImpl.getInstance().getNtpExtension().then(updateNtpExtension);
        this.addWebUiListener('update-ntp-extension', updateNtpExtension);
    }
    getName_(value) {
        return value.toString();
    }
    /**
     * Determine whether to show the user defined startup pages.
     * @param restoreOnStartup Enum value from PrefValues.
     * @return Whether the "open specific pages" or "continue and open specific
     *     pages" is selected.
     */
    showStartupUrls_(restoreOnStartup) {
        return restoreOnStartup === PrefValues.OPEN_SPECIFIC ||
            restoreOnStartup === PrefValues.CONTINUE_AND_OPEN_SPECIFIC;
    }
    /**
     * Determine whether to show "continue and open specific pages" option.
     * @param restoreOnStartup pref.
     * @return Whether the restoreOnStartup pref is recommended or enforced by
     *     policy.
     */
    showContinueAndOpenSpecific_(pref) {
        return pref.enforcement === chrome.settingsPrivate.Enforcement.ENFORCED ||
            pref.enforcement === chrome.settingsPrivate.Enforcement.RECOMMENDED;
    }
}
customElements.define(SettingsOnStartupPageElement.is, SettingsOnStartupPageElement);

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
class ProfileInfoBrowserProxyImpl {
    getProfileInfo() {
        return sendWithPromise('getProfileInfo');
    }
    getProfileStatsCount() {
        chrome.send('getProfileStatsCount');
    }
    static getInstance() {
        return instance$5 || (instance$5 = new ProfileInfoBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance$5 = obj;
    }
}
let instance$5 = null;

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

  /**
   * @fileoverview
   * 'CrPngBehavior' is a behavior to convert image sequences into APNG
   * (animated PNG) images.
   */

  /**
   * PNG frame delay fraction numerator.
   * @const
   */
  const PNG_FRAME_DELAY_NUMERATOR = 1;

  /**
   * PNG frame delay fraction denominator.
   * @const
   */
  const PNG_FRAME_DELAY_DENOMINATOR = 20;

  /**
   * PNG signature.
   * @const
   */
  const PNG_SIGNATURE = [0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A];

  /**
   * PNG bit depth (8 = 32bpp).
   * @const
   */
  const PNG_BIT_DEPTH = 8;

  /**
   * PNG compression method (0 = deflate/inflate compression with a sliding
   * window PNG compression).
   * @const
   */
  const PNG_COMPRESSION_METHOD = 0;

  /**
   * PNG filter method (0 = adaptive filtering with five basic filter types).
   * @const
   */
  const PNG_FILTER_METHOD = 0;

  /**
   * PNG interlace method (0 = no interlace).
   * @const
   */
  const PNG_INTERLACE_METHOD = 0;

  /**
   * CRC table for PNG encode.
   *
   * Generated using:
   *
   * for (var i = 0; i < 256; i++) {
   *   var value = i;
   *   for (var j = 0; j < 8; j++) {
   *     if (value & 1)
   *       value = ((0xEDB88320) ^ (value >>> 1));
   *     else
   *       value = (value >>> 1);
   *   }
   *   TABLE[i] = value;
   * }
   *
   * @const
   */
  const PNG_CRC_TABLE = [
    0x0,        0x77073096, 0xEE0E612C, 0x990951BA, 0x76DC419,  0x706AF48F,
    0xE963A535, 0x9E6495A3, 0xEDB8832,  0x79DCB8A4, 0xE0D5E91E, 0x97D2D988,
    0x9B64C2B,  0x7EB17CBD, 0xE7B82D07, 0x90BF1D91, 0x1DB71064, 0x6AB020F2,
    0xF3B97148, 0x84BE41DE, 0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,
    0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9,
    0xFA0F3D63, 0x8D080DF5, 0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172,
    0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B, 0x35B5A8FA, 0x42B2986C,
    0xDBBBC9D6, 0xACBCF940, 0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59,
    0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423,
    0xCFBA9599, 0xB8BDA50F, 0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924,
    0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D, 0x76DC4190, 0x1DB7106,
    0x98D220BC, 0xEFD5102A, 0x71B18589, 0x6B6B51F,  0x9FBFE4A5, 0xE8B8D433,
    0x7807C9A2, 0xF00F934,  0x9609A88E, 0xE10E9818, 0x7F6A0DBB, 0x86D3D2D,
    0x91646C97, 0xE6635C01, 0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E,
    0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457, 0x65B0D9C6, 0x12B7E950,
    0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65,
    0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2, 0x4ADFA541, 0x3DD895D7,
    0xA4D1C46D, 0xD3D6F4FB, 0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0,
    0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9, 0x5005713C, 0x270241AA,
    0xBE0B1010, 0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F,
    0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17, 0x2EB40D81,
    0xB7BD5C3B, 0xC0BA6CAD, 0xEDB88320, 0x9ABFB3B6, 0x3B6E20C,  0x74B1D29A,
    0xEAD54739, 0x9DD277AF, 0x4DB2615,  0x73DC1683, 0xE3630B12, 0x94643B84,
    0xD6D6A3E,  0x7A6A5AA8, 0xE40ECF0B, 0x9309FF9D, 0xA00AE27,  0x7D079EB1,
    0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB,
    0x196C3671, 0x6E6B06E7, 0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC,
    0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5, 0xD6D6A3E8, 0xA1D1937E,
    0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B,
    0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55,
    0x316E8EEF, 0x4669BE79, 0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236,
    0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 0xC5BA3BBE, 0xB2BD0B28,
    0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D,
    0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x26D930A,  0x9C0906A9, 0xEB0E363F,
    0x72076785, 0x5005713,  0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0xCB61B38,
    0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0xBDBDF21,  0x86D3D2D4, 0xF1D4E242,
    0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777,
    0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C, 0x8F659EFF, 0xF862AE69,
    0x616BFFD3, 0x166CCF45, 0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2,
    0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB, 0xAED16A4A, 0xD9D65ADC,
    0x40DF0B66, 0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9,
    0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605, 0xCDD70693,
    0x54DE5729, 0x23D967BF, 0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94,
    0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D,
  ];

  /**
   * Construct an internal representation of the png.
   * @param {!Array<string>} images The data URLs for each image.
   * @return {!CrPngState}
   * @private
   */
  function convertDataUrlsToCrPng(images) {
    const png =
        /** @type {!CrPngState} */ ({frames: 0, sequences: 0, chunks: []});

    /** Append signature. */
    png.chunks.push(new Uint8Array(PNG_SIGNATURE));

    /**
     * http://www.w3.org/TR/2003/REC-PNG-20031110/#11IHDR
     *
     * Width               4 bytes
     * Height              4 bytes
     * Bit depth           1 byte
     * Colour type         1 byte
     * Compression method  1 byte
     * Filter method       1 byte
     * Interlace method    1 byte
     */
    const IHDR = new Uint8Array(12 + 13);
    writeUInt32(IHDR, 13, 0);
    writeFourCC(IHDR, 'IHDR', 4);
    /** Write size at the end when known. */
    writeUInt8(IHDR, PNG_BIT_DEPTH, 16);
    /** Write colour at the end when known. */
    writeUInt8(IHDR, PNG_COMPRESSION_METHOD, 18);
    writeUInt8(IHDR, PNG_FILTER_METHOD, 19);
    writeUInt8(IHDR, PNG_INTERLACE_METHOD, 20);
    /** Write CRC at the end when size and colour is known. */
    png.chunks.push(IHDR);

    /**
     * acTL
     *
     * Number of frames         4 bytes
     * Number of times to loop  4 bytes
     */
    const acTL = new Uint8Array(12 + 8);
    writeUInt32(acTL, 8, 0);
    writeFourCC(acTL, 'acTL', 4);
    writeUInt32(acTL, images.length, 8);
    writeUInt32(acTL, 0, 12);
    writeUInt32(acTL, getCRC(acTL, 4, 16), 16);
    png.chunks.push(acTL);

    /** Append each image as a PNG frame. */
    for (let i = 0; i < images.length; ++i) {
      appendFrameFromDataURL(images[i], png);
    }

    /** Update IHDR now that size and colour is known. */
    writeUInt32(IHDR, png.width, 8);
    writeUInt32(IHDR, png.height, 12);
    writeUInt8(IHDR, png.colour, 17);
    writeUInt32(IHDR, getCRC(IHDR, 4, 8 + 13), 8 + 13);

    /**
     * http://www.w3.org/TR/2003/REC-PNG-20031110/#11IEND
     */
    const IEND = new Uint8Array(12);
    writeUInt32(IEND, 0, 0);
    writeFourCC(IEND, 'IEND', 4);
    writeUInt32(IEND, getCRC(IEND, 4, 8), 8);
    png.chunks.push(IEND);

    return png;
  }

  /**
   * Returns a data URL for an animated PNG image that is created
   * from a sequence of images.
   * @param {!Array<string>} images The data URLs for each image.
   * @return {string} A data URL for an animated PNG image.
   */
  function convertImageSequenceToPng(images) {
    const png = convertDataUrlsToCrPng(images);
    return 'data:image/png;base64,' +
        btoa(png.chunks
                 .map(function(chunk) {
                   return String.fromCharCode.apply(null, chunk);
                 })
                 .join(''));
  }

  /**
   * Reads Uint32 from buffer.
   * @param {!Uint8Array} buffer Buffer to read UInt32 from.
   * @param {number} offset Offset in buffer to read UInt32 at.
   * @return {number} The value read.
   */
  function readUInt32(buffer, offset) {
    return (buffer[offset + 0] << 24) + (buffer[offset + 1] << 16) +
        (buffer[offset + 2] << 8) + (buffer[offset + 3] << 0);
  }

  /**
   * Reads string from buffer.
   * @param {!Uint8Array} buffer Buffer to read string from.
   * @param {number} offset Offset in buffer to read string at.
   * @param {number} length Length of string to read.
   * @return {string} The value read.
   */
  function readString(buffer, offset, length) {
    let str = '';
    for (let i = 0; i < length; i++) {
      str += String.fromCharCode(buffer[offset + i]);
    }
    return str;
  }

  /**
   * Write bytes to buffer.
   * @param {!Uint8Array} buffer Buffer to write bytes to.
   * @param {!Uint8Array} bytes Array of bytes to be written.
   * @param {number} offset Offset in buffer to write bytes at.
   */
  function writeBytes(buffer, bytes, offset) {
    for (let i = 0; i < bytes.length; i++) {
      buffer[offset + i] = bytes[i] & 0xFF;
    }
  }

  /**
   * Write UInt8 to buffer.
   * @param {!Uint8Array} buffer Buffer to write UInt8 to.
   * @param {number} u8 UInt8 to be written.
   * @param {number} offset Offset in buffer to write UInt8 at.
   */
  function writeUInt8(buffer, u8, offset) {
    buffer[offset] = u8 & 0xFF;
  }

  /**
   * Write UInt16 to buffer.
   * @param {!Uint8Array} buffer Buffer to write UInt16 to.
   * @param {number} u16 UInt16 to be written.
   * @param {number} offset Offset in buffer to write UInt16 at.
   */
  function writeUInt16(buffer, u16, offset) {
    buffer[offset + 0] = (u16 >> 8) & 0xFF;
    buffer[offset + 1] = (u16 >> 0) & 0xFF;
  }

  /**
   * Write UInt32 to buffer.
   * @param {!Uint8Array} buffer Buffer to write UInt32 to.
   * @param {number} u32 UInt32 to be written.
   * @param {number} offset Offset in buffer to write UInt32 at.
   */
  function writeUInt32(buffer, u32, offset) {
    buffer[offset + 0] = (u32 >> 24) & 0xFF;
    buffer[offset + 1] = (u32 >> 16) & 0xFF;
    buffer[offset + 2] = (u32 >> 8) & 0xFF;
    buffer[offset + 3] = (u32 >> 0) & 0xFF;
  }

  /**
   * Write string to buffer.
   * @param {!Uint8Array} buffer Buffer to write string to.
   * @param {string} string String to be written.
   * @param {number} offset Offset in buffer to write string at.
   */
  function writeString(buffer, string, offset) {
    for (let i = 0; i < string.length; i++) {
      buffer[offset + i] = string.charCodeAt(i);
    }
  }

  /**
   * Write FourCC code to buffer.
   * @param {!Uint8Array} buffer Buffer to write FourCC code to.
   * @param {string} fourcc FourCC code to be written.
   * @param {number} offset Offset in buffer to write FourCC code at.
   */
  function writeFourCC(buffer, fourcc, offset) {
    buffer[offset + 0] = fourcc.charCodeAt(0);
    buffer[offset + 1] = fourcc.charCodeAt(1);
    buffer[offset + 2] = fourcc.charCodeAt(2);
    buffer[offset + 3] = fourcc.charCodeAt(3);
  }

  /**
   * Compute CRC from buffer data.
   * @param {!Uint8Array} buffer Buffer with data to compute CRC from.
   * @param {number} start Start index in buffer.
   * @param {number} end End index in buffer.
   * @return {number} The computed CRC.
   */
  function getCRC(buffer, start, end) {
    let crc = 0xFFFFFFFF;
    for (let i = start; i < end; i++) {
      const crcTableIndex = (crc ^ (buffer[i])) & 0xFF;
      crc = PNG_CRC_TABLE[crcTableIndex] ^ (crc >>> 8);
    }
    return crc ^ 0xFFFFFFFF;
  }

  /**
   * Append frame from data URL to PNG object.
   * @param {string} dataURL Data URL for frame.
   * @param {!CrPngState} png PNG object to add frame to.
   */
  function appendFrameFromDataURL(dataURL, png) {
    /** Convert data URL to Uint8Array. */
    const byteString = atob(dataURL.split(',')[1]);
    const bytes = new Uint8Array(byteString.length);
    writeString(bytes, byteString, 0);

    /** Check signature. */
    const signature = bytes.subarray(0, PNG_SIGNATURE.length);
    if (signature.toString() !== PNG_SIGNATURE.toString()) {
      console.error('Bad PNG signature');
    }

    /**
     * fcTL
     *
     * Sequence number          4 bytes
     * Width                    4 bytes
     * Height                   4 bytes
     * X position               4 bytes
     * Y position               4 bytes
     * Frame delay numerator    2 bytes
     * Frame delay denominator  2 bytes
     * Dispose op               1 bytes
     * Blend op                 1 bytes
     */
    const fcTL = new Uint8Array(12 + 26);
    writeUInt32(fcTL, 26, 0);
    writeFourCC(fcTL, 'fcTL', 4);
    writeUInt32(fcTL, png.sequences, 8);
    /** Write size at the end when known. */
    writeUInt32(fcTL, 0, 20);
    writeUInt32(fcTL, 0, 24);
    writeUInt16(fcTL, PNG_FRAME_DELAY_NUMERATOR, 28);
    writeUInt16(fcTL, PNG_FRAME_DELAY_DENOMINATOR, 30);
    writeUInt8(fcTL, 0, 32);
    writeUInt8(fcTL, 0, 33);
    /** Write CRC at the end when size is known. */
    png.sequences += 1;
    png.chunks.push(fcTL);

    /** Append data chunks for frame. */
    let i = PNG_SIGNATURE.length;
    while ((i + 12) <= bytes.length) {
      /**
       * http://www.w3.org/TR/2003/REC-PNG-20031110/#5Chunk-layout
       *
       * length =  4      bytes
       * type   =  4      bytes (IHDR, PLTE, IDAT, IEND or others)
       * chunk  =  length bytes
       * crc    =  4      bytes
       */
      const length = readUInt32(bytes, i);
      const type = readString(bytes, i + 4, 4);
      const chunk = bytes.subarray(i + 8, i + 8 + length);

      /** We should have enough bytes left for length. */
      if (length !== chunk.length) {
        console.error('Unexpectedly reached end of file');
      }

      switch (type) {
        case 'IHDR':
          /**
           * http://www.w3.org/TR/2003/REC-PNG-20031110/#11IHDR
           *
           * Width               4 bytes
           * Height              4 bytes
           * Bit depth           1 byte
           * Colour type         1 byte
           * Compression method  1 byte
           * Filter method       1 byte
           * Interlace method    1 byte
           */
          const width = readUInt32(chunk, 0);
          const height = readUInt32(chunk, 4);
          const depth = chunk[8];
          const colour = chunk[9];
          const compression = chunk[10];
          const filter = chunk[11];
          const interlace = chunk[12];

          /** Initialize size and colour if this is the first frame. */
          if (png.frames === 0) {
            png.width = width;
            png.height = height;
            png.colour = colour;
          }

          /** Check that header matches our expectations. */
          if (width !== png.width) {
            console.error('Bad PNG width: ' + width);
          }
          if (height !== png.height) {
            console.error('Bad PNG height: ' + height);
          }
          if (depth !== PNG_BIT_DEPTH) {
            console.error('Bad PNG bit depth: ' + depth);
          }
          if (colour !== png.colour) {
            console.error('Bad PNG colour type: ' + colour);
          }
          if (compression !== PNG_COMPRESSION_METHOD) {
            console.error('Bad PNG compression method: ' + compression);
          }
          if (filter !== PNG_FILTER_METHOD) {
            console.error('Bad PNG filter method: ' + filter);
          }
          if (interlace !== PNG_INTERLACE_METHOD) {
            console.error('Bad PNG interlace method: ' + interlace);
          }
          break;
        case 'IDAT':
          /** Append as IDAT chunk if this is the first frame. */
          if (png.frames === 0) {
            /**
             * http://www.w3.org/TR/2003/REC-PNG-20031110/#11IDAT
             *
             * Data                     X bytes
             */
            const IDAT = new Uint8Array(12 + length);
            writeUInt32(IDAT, length, 0);
            writeFourCC(IDAT, 'IDAT', 4);
            writeBytes(IDAT, chunk, 8);
            writeUInt32(IDAT, getCRC(IDAT, 4, 8 + length), 8 + length);
            png.chunks.push(IDAT);
          } else {
            /**
             * fdAT
             *
             * Sequence number          4 bytes
             * Frame data               X bytes
             */
            const fdAT = new Uint8Array(12 + 4 + length);
            writeUInt32(fdAT, 4 + length, 0);
            writeFourCC(fdAT, 'fdAT', 4);
            writeUInt32(fdAT, png.sequences, 8);
            writeBytes(fdAT, chunk, 12);
            writeUInt32(fdAT, getCRC(fdAT, 4, 12 + length), 12 + length);
            png.sequences += 1;
            png.chunks.push(fdAT);
          }
          break;
        case 'PLTE':
          /**
           * https://www.w3.org/TR/2003/REC-PNG-20031110/#11PLTE
           *
           * Palette data        X bytes
           */
          const PLTE = new Uint8Array(12 + length);
          writeUInt32(PLTE, length, 0);
          writeFourCC(PLTE, 'PLTE', 4);
          writeBytes(PLTE, chunk, 8);
          writeUInt32(PLTE, getCRC(PLTE, 4, 8 + length), 8 + length);
          png.chunks.push(PLTE);
          break;
        case 'IEND':
          /** Update fcTL now that size is known. */
          writeUInt32(fcTL, png.width, 12);
          writeUInt32(fcTL, png.height, 16);
          writeUInt32(fcTL, getCRC(fcTL, 4, 34), 34);
          png.frames += 1;
          return;
      }

      /** Advance to next chunk. */
      i += 12 + length;
    }
    console.error('Unexpectedly reached end of file');
  }

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Stripped down fork of
 * c/b/r/ash/settings/os_people_page/account_manager_browser_proxy.js.
 * Re-uses the same WebUI message handler class.
 */
// clang-format off
class AccountManagerBrowserProxyImpl {
    getAccounts() {
        return sendWithPromise('getAccounts');
    }
    static getInstance() {
        return instance$4 || (instance$4 = new AccountManagerBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance$4 = obj;
    }
}
let instance$4 = null;

function getTemplate$m() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style settings-shared iron-flex">.sync-row{align-items:center;flex:auto}#profile-icon{background:center/cover no-repeat;border-radius:20px;flex-shrink:0;height:40px;width:40px}#sync-setup{--cr-secondary-text-color:var(--settings-error-color)}cr-link-row{--cr-link-row-icon-width:40px;border-top:var(--cr-separator-line)}.icon-container{display:flex;flex-shrink:0;justify-content:center;width:40px}#toast{left:0;z-index:1}:host-context([dir=rtl]) #toast{left:auto;right:0}settings-sync-account-control[showing-promo]::part(banner){border-top-left-radius:var(--cr-card-border-radius);border-top-right-radius:var(--cr-card-border-radius)}settings-sync-account-control[showing-promo]::part(title){font-size:1.1rem;line-height:1.625rem}</style>
    <settings-animated-pages id="pages" section="people" focus-config="[[focusConfig_]]">
      <div route-path="default">
        <template is="dom-if" if="[[shouldShowSyncAccountControl_(
            syncStatus.syncSystemEnabled)]]">
          <settings-sync-account-control sync-status="[[syncStatus]]" prefs="{{prefs}}" promo-label-with-account="$i18n{peopleSignInPrompt}" promo-label-with-no-account="$i18n{peopleSignInPrompt}" promo-secondary-label-with-account="$i18n{peopleSignInPromptSecondaryWithAccount}" promo-secondary-label-with-no-account="$i18n{peopleSignInPromptSecondaryWithNoAccount}">
          </settings-sync-account-control>
        </template>
        <template is="dom-if" if="[[!shouldShowSyncAccountControl_(
            syncStatus.syncSystemEnabled, signinAllowed_)]]" restamp>
          <div id="profile-row" class="cr-row first two-line" actionable$="[[isProfileActionable_]]" on-click="onProfileClick_">
            <template is="dom-if" if="[[syncStatus]]">
              <div id="profile-icon" style="background-image:[[getIconImageSet_(profileIconUrl_) ]]">
              </div>
              <div class="flex cr-row-gap cr-padded-text text-elide">
                <span id="profile-name">[[profileName_]]</span>


                <div class="secondary" hidden="[[!syncStatus.signedIn]]">
                  [[syncStatus.signedInUsername]]
                </div>

              </div>


              <cr-icon-button class="icon-external" id="profile-subpage-arrow" hidden="[[!isProfileActionable_]]" aria-label="$i18n{accountManagerSubMenuLabel}" aria-describedby="profile-name"></cr-icon-button>

            </template>
          </div>
        </template> 

        <cr-link-row id="sync-setup" label="$i18n{syncAndNonPersonalizedServices}" sub-label="[[getSyncAndGoogleServicesSubtext_(syncStatus)]]" on-click="onSyncClick_" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>





      </div>
      <template is="dom-if" route-path="/syncSetup">
        <settings-subpage associated-control="[[$$('#sync-setup')]]" page-title="$i18n{syncPageTitle}" learn-more-url="$i18n{syncAndGoogleServicesLearnMoreURL}">
          <settings-sync-page sync-status="[[syncStatus]]" prefs="{{prefs}}" page-visibility="[[pageVisibility.privacy]]" focus-config="[[focusConfig_]]">
          </settings-sync-page>
        </settings-subpage>
      </template>

      <template is="dom-if" route-path="/syncSetup/advanced">
        <settings-subpage page-title="$i18n{syncAdvancedPageTitle}" associated-control="[[$$('#sync-setup')]]" learn-more-url="$i18n{syncAndGoogleServicesLearnMoreURL}">
          <settings-sync-controls sync-status="[[syncStatus]]">
          </settings-sync-controls>
        </settings-subpage>
      </template>

      <template is="dom-if" route-path="/syncSetup/pageContent">
        <settings-subpage page-title="$i18n{pageContentPageTitle}" associated-control="[[$$('#sync-setup')]]">
          <settings-page-content-page prefs="{{prefs}}">
          </settings-page-content-page>
        </settings-subpage>
      </template>


    </settings-animated-pages>

    <template is="dom-if" if="[[showSignoutDialog_]]" restamp>
      <settings-signout-dialog sync-status="[[syncStatus]]" on-close="onDisconnectDialogClosed_">
      </settings-signout-dialog>
    </template>

    <template is="dom-if" if="[[showImportDataDialog_]]" restamp>
      <settings-import-data-dialog prefs="{{prefs}}" on-close="onImportDataDialogClosed_">
      </settings-import-data-dialog>
    </template>
    <cr-toast duration="3000" id="toast">
      <span>$i18n{syncSettingsSavedToast}</span>
    </cr-toast>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-people-page' is the settings page containing sign-in settings.
 */
const SettingsPeoplePageElementBase = RouteObserverMixin(WebUiListenerMixin(BaseMixin(PolymerElement)));
class SettingsPeoplePageElement extends SettingsPeoplePageElementBase {
    constructor() {
        super(...arguments);
        this.syncBrowserProxy_ = SyncBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-people-page';
    }
    static get template() {
        return getTemplate$m();
    }
    static get properties() {
        return {
            /**
             * Preferences state.
             */
            prefs: {
                type: Object,
                notify: true,
            },
            /**
             * This flag is used to conditionally show a set of new sign-in UIs to the
             * profiles that have been migrated to be consistent with the web
             * sign-ins.
             * TODO(tangltom): In the future when all profiles are completely
             * migrated, this should be removed, and UIs hidden behind it should
             * become default.
             */
            signinAllowed_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('signinAllowed');
                },
            },
            // 
            /**
             * The current sync status, supplied by SyncBrowserProxy.
             */
            syncStatus: Object,
            /**
             * Dictionary defining page visibility.
             */
            pageVisibility: Object,
            /**
             * Authentication token provided by settings-lock-screen.
             */
            authToken_: {
                type: String,
                value: '',
            },
            /**
             * The currently selected profile icon URL. May be a data URL.
             */
            profileIconUrl_: String,
            /**
             * Whether the profile row is clickable. The behavior depends on the
             * platform.
             */
            isProfileActionable_: {
                type: Boolean,
                value() {
                    if (!isChromeOS) {
                        // Opens profile manager.
                        return true;
                    }
                    // Post-SplitSettings links out to account manager if it is available.
                    return loadTimeData.getBoolean('isAccountManagerEnabled');
                },
                readOnly: true,
            },
            /**
             * The current profile name.
             */
            profileName_: String,
            // 
            showSignoutDialog_: Boolean,
            focusConfig_: {
                type: Object,
                value() {
                    const map = new Map();
                    if (routes.SYNC) {
                        map.set(routes.SYNC.path, '#sync-setup');
                    }
                    // 
                    return map;
                },
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        let useProfileNameAndIcon = true;
        // 
        if (loadTimeData.getBoolean('isAccountManagerEnabled')) {
            // If this is SplitSettings and we have the Google Account manager,
            // prefer the GAIA name and icon.
            useProfileNameAndIcon = false;
            this.addWebUiListener('accounts-changed', this.updateAccounts_.bind(this));
            this.updateAccounts_();
        }
        // 
        if (useProfileNameAndIcon) {
            ProfileInfoBrowserProxyImpl.getInstance().getProfileInfo().then(this.handleProfileInfo_.bind(this));
            this.addWebUiListener('profile-info-changed', this.handleProfileInfo_.bind(this));
        }
        this.syncBrowserProxy_.getSyncStatus().then(this.handleSyncStatus_.bind(this));
        this.addWebUiListener('sync-status-changed', this.handleSyncStatus_.bind(this));
        // 
    }
    currentRouteChanged() {
        // 
        if (Router.getInstance().getCurrentRoute() === routes.SIGN_OUT) {
            // If the sync status has not been fetched yet, optimistically display
            // the sign-out dialog. There is another check when the sync status is
            // fetched. The dialog will be closed when the user is not signed in.
            if (this.syncStatus && !this.syncStatus.signedIn) {
                Router.getInstance().navigateToPreviousRoute();
            }
            else {
                this.showSignoutDialog_ = true;
            }
        }
    }
    getEditPersonAssocControl_() {
        return this.signinAllowed_ ?
            this.shadowRoot.querySelector('#edit-profile') :
            this.shadowRoot.querySelector('#profile-row');
    }
    getSyncAndGoogleServicesSubtext_() {
        if (this.syncStatus && this.syncStatus.hasError &&
            this.syncStatus.statusText) {
            return this.syncStatus.statusText;
        }
        return '';
    }
    /**
     * Handler for when the profile's icon and name is updated.
     */
    handleProfileInfo_(info) {
        this.profileName_ = info.name;
        /**
         * Extract first frame from image by creating a single frame PNG using
         * url as input if base64 encoded and potentially animated.
         */
        // 
        if (info.iconUrl.startsWith('data:image/png;base64')) {
            this.profileIconUrl_ = convertImageSequenceToPng([info.iconUrl]);
            return;
        }
        // 
        this.profileIconUrl_ = info.iconUrl;
    }
    // 
    async updateAccounts_() {
        const accounts = await AccountManagerBrowserProxyImpl.getInstance().getAccounts();
        // The user might not have any GAIA accounts (e.g. guest mode or Active
        // Directory). In these cases the profile row is hidden, so there's nothing
        // to do.
        if (accounts.length === 0) {
            return;
        }
        this.profileName_ = accounts[0].fullName;
        this.profileIconUrl_ = accounts[0].pic;
    }
    // 
    /**
     * Handler for when the sync state is pushed from the browser.
     */
    handleSyncStatus_(syncStatus) {
        // Sign-in impressions should be recorded only if the sign-in promo is
        // shown. They should be recorder only once, the first time
        // |this.syncStatus| is set.
        const shouldRecordSigninImpression = !this.syncStatus && syncStatus &&
            this.signinAllowed_ && !syncStatus.signedIn;
        this.syncStatus = syncStatus;
        if (shouldRecordSigninImpression && !this.shouldShowSyncAccountControl_()) {
            // SyncAccountControl records the impressions user actions.
            chrome.metricsPrivate.recordUserAction('Signin_Impression_FromSettings');
        }
    }
    // 
    onProfileClick_() {
        // 
        if (loadTimeData.getBoolean('isAccountManagerEnabled')) {
            // Post-SplitSettings. The browser C++ code loads OS settings in a window.
            OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('osSettingsAccountsPageUrl'));
        }
        // 
        // 
    }
    onDisconnectDialogClosed_() {
        this.showSignoutDialog_ = false;
        if (Router.getInstance().getCurrentRoute() === routes.SIGN_OUT) {
            Router.getInstance().navigateToPreviousRoute();
        }
    }
    onSyncClick_() {
        // Users can go to sync subpage regardless of sync status.
        Router.getInstance().navigateTo(routes.SYNC);
    }
    // 
    /**
     * Open URL for managing your Google Account.
     */
    openGoogleAccount_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('googleAccountUrl'));
        chrome.metricsPrivate.recordUserAction('ManageGoogleAccount_Clicked');
    }
    shouldShowSyncAccountControl_() {
        // 
        return false;
        // 
        // 
    }
    /**
     * @return A CSS image-set for multiple scale factors.
     */
    getIconImageSet_(iconUrl) {
        return getImage(iconUrl);
    }
}
customElements.define(SettingsPeoplePageElement.is, SettingsPeoplePageElement);

function getTemplate$l() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared">.battery-saver-radio-group{padding-block-end:var(--cr-section-vertical-padding)}</style>
<template is="dom-if" if="[[isBatterySaverModeManagedByOS_]]">
  <cr-link-row id="batterySaverOSSettingsLinkRow" label="$i18n{batterySaverModeLabel}" sub-label="$i18n{batterySaverModeLinkOsDescription}" on-click="openOsPowerSettings_" external>
  </cr-link-row>
</template>
<template is="dom-if" if="[[!isBatterySaverModeManagedByOS_]]">
  <settings-toggle-button id="toggleButton" on-change="onChange_" pref="{{prefs.performance_tuning.battery_saver_mode.state}}" label="$i18n{batterySaverModeLabel}" sub-label="$i18n{batterySaverModeDescription}" learn-more-url="$i18n{batterySaverLearnMoreUrl}" numeric-unchecked-values="[[numericUncheckedValues_]]" numeric-checked-value="[[batterySaverModeStateEnum_.ENABLED_BELOW_THRESHOLD]]">
  </settings-toggle-button>
  <iron-collapse id="radioGroupCollapse" opened="[[isBatterySaverModeEnabled_(prefs.performance_tuning.battery_saver_mode.state.value)]]">
    <div class="cr-row continuation battery-saver-radio-group">
      <settings-radio-group id="radioGroup" on-change="onChange_" pref="{{prefs.performance_tuning.battery_saver_mode.state}}" group-aria-label="$i18n{batterySaverModeRadioGroupAriaLabel}">
        <controlled-radio-button label="$i18n{batterySaverModeEnabledBelowThresholdLabel}" name="[[batterySaverModeStateEnum_.ENABLED_BELOW_THRESHOLD]]" pref="[[prefs.performance_tuning.battery_saver_mode.state]]">
        </controlled-radio-button>
        <controlled-radio-button id="enabledOnBatteryButton" label="$i18n{batterySaverModeEnabledOnBatteryLabel}" name="[[batterySaverModeStateEnum_.ENABLED_ON_BATTERY]]" pref="[[prefs.performance_tuning.battery_saver_mode.state]]">
        </controlled-radio-button>
      </settings-radio-group>
    </div>
  </iron-collapse>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
// This must be kept in sync with BatterySaverModeState in
// components/performance_manager/public/user_tuning/prefs.h
var BatterySaverModeState;
(function (BatterySaverModeState) {
    BatterySaverModeState[BatterySaverModeState["DISABLED"] = 0] = "DISABLED";
    BatterySaverModeState[BatterySaverModeState["ENABLED_BELOW_THRESHOLD"] = 1] = "ENABLED_BELOW_THRESHOLD";
    BatterySaverModeState[BatterySaverModeState["ENABLED_ON_BATTERY"] = 2] = "ENABLED_ON_BATTERY";
    BatterySaverModeState[BatterySaverModeState["ENABLED"] = 3] = "ENABLED";
    // Must be last.
    BatterySaverModeState[BatterySaverModeState["COUNT"] = 4] = "COUNT";
})(BatterySaverModeState || (BatterySaverModeState = {}));
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
var MemorySaverModeExceptionListAction;
(function (MemorySaverModeExceptionListAction) {
    MemorySaverModeExceptionListAction[MemorySaverModeExceptionListAction["ADD_MANUAL"] = 0] = "ADD_MANUAL";
    MemorySaverModeExceptionListAction[MemorySaverModeExceptionListAction["EDIT"] = 1] = "EDIT";
    MemorySaverModeExceptionListAction[MemorySaverModeExceptionListAction["REMOVE"] = 2] = "REMOVE";
    MemorySaverModeExceptionListAction[MemorySaverModeExceptionListAction["ADD_FROM_CURRENT"] = 3] = "ADD_FROM_CURRENT";
    // Must be last.
    MemorySaverModeExceptionListAction[MemorySaverModeExceptionListAction["COUNT"] = 4] = "COUNT";
})(MemorySaverModeExceptionListAction || (MemorySaverModeExceptionListAction = {}));
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
// This must be kept in sync with MemorySaverModeState in
// components/performance_manager/public/user_tuning/prefs.h
var MemorySaverModeState;
(function (MemorySaverModeState) {
    MemorySaverModeState[MemorySaverModeState["DISABLED"] = 0] = "DISABLED";
    MemorySaverModeState[MemorySaverModeState["ENABLED"] = 1] = "ENABLED";
    MemorySaverModeState[MemorySaverModeState["ENABLED_ON_TIMER"] = 2] = "ENABLED_ON_TIMER";
    // Must be last.
    MemorySaverModeState[MemorySaverModeState["COUNT"] = 3] = "COUNT";
})(MemorySaverModeState || (MemorySaverModeState = {}));
class PerformanceMetricsProxyImpl {
    recordBatterySaverModeChanged(state) {
        chrome.metricsPrivate.recordEnumerationValue('PerformanceControls.BatterySaver.SettingsChangeMode', state, BatterySaverModeState.COUNT);
    }
    recordMemorySaverModeChanged(state) {
        chrome.metricsPrivate.recordEnumerationValue('PerformanceControls.MemorySaver.SettingsChangeMode', state, MemorySaverModeState.COUNT);
    }
    recordExceptionListAction(action) {
        chrome.metricsPrivate.recordEnumerationValue('PerformanceControls.MemorySaver.SettingsChangeExceptionList', action, MemorySaverModeExceptionListAction.COUNT);
    }
    static getInstance() {
        return instance$3 || (instance$3 = new PerformanceMetricsProxyImpl());
    }
    static setInstance(obj) {
        instance$3 = obj;
    }
}
let instance$3 = null;

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const BATTERY_SAVER_MODE_PREF = 'performance_tuning.battery_saver_mode.state';
const SettingsBatteryPageElementBase = PrefsMixin(PolymerElement);
class SettingsBatteryPageElement extends SettingsBatteryPageElementBase {
    constructor() {
        super(...arguments);
        this.metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
        // 
    }
    static get is() {
        return 'settings-battery-page';
    }
    static get template() {
        return getTemplate$l();
    }
    static get properties() {
        return {
            batterySaverModeStateEnum_: {
                readOnly: true,
                type: Object,
                value: BatterySaverModeState,
            },
            isBatterySaverModeManagedByOS_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isBatterySaverModeManagedByOS');
                },
            },
            numericUncheckedValues_: {
                type: Array,
                value: () => [BatterySaverModeState.DISABLED],
            },
        };
    }
    isBatterySaverModeEnabled_(value) {
        return value !== BatterySaverModeState.DISABLED;
    }
    onChange_() {
        this.metricsProxy_.recordBatterySaverModeChanged(this.getPref(BATTERY_SAVER_MODE_PREF).value);
    }
    // 
    openOsPowerSettings_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('osPowerSettingsUrl'));
    }
}
customElements.define(SettingsBatteryPageElement.is, SettingsBatteryPageElement);

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WINDOWS_EPOCH = Date.UTC(1601, 0, 1, 0, 0, 0, 0);
const UNIX_EPOCH = Date.UTC(1970, 0, 1, 0, 0, 0, 0);
/**
 * Converts a JavaScript Date() object to a string that represents microseconds
 * since the Windows FILETIME epoch.
 *
 * The JS Date() is based off of the number of milliseconds since the UNIX epoch
 * (1970-01-01 00::00:00 UTC), while times stored within prefs are represented
 * as the number of microseconds since the Windows FILETIME epoch
 * (1601-01-01 00:00:00 UTC).
 */
function convertDateToWindowsEpoch(date = Date.now()) {
    const epochDeltaMs = UNIX_EPOCH - WINDOWS_EPOCH;
    return `${(date + epochDeltaMs) * 1000}`;
}

function getTemplate$k() {
    return html `<!--_html_template_start_--><cr-input id="input" label="$i18n{addSite}" aria-label$="$i18n{addSiteTitle}" placeholder="example.com" value="{{rule}}" on-input="validate" error-message="[[errorMessage]]" invalid="[[inputInvalid]]" spellcheck="false" autofocus>
</cr-input>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PerformanceBrowserProxyImpl {
    getCurrentOpenSites() {
        return sendWithPromise('getCurrentOpenSites');
    }
    getDeviceHasBattery() {
        return sendWithPromise('getDeviceHasBattery');
    }
    openBatterySaverFeedbackDialog() {
        chrome.send('openBatterySaverFeedbackDialog');
    }
    openMemorySaverFeedbackDialog() {
        chrome.send('openMemorySaverFeedbackDialog');
    }
    openSpeedFeedbackDialog() {
        chrome.send('openSpeedFeedbackDialog');
    }
    validateTabDiscardExceptionRule(rule) {
        return sendWithPromise('validateTabDiscardExceptionRule', rule);
    }
    static getInstance() {
        return instance$2 || (instance$2 = new PerformanceBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance$2 = obj;
    }
}
let instance$2 = null;

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_TAB_DISCARD_EXCEPTION_RULE_LENGTH = 10 * 1024;
const TAB_DISCARD_EXCEPTIONS_PREF = 'performance_tuning.tab_discarding.exceptions_with_time';
const TAB_DISCARD_EXCEPTIONS_MANAGED_PREF = 'performance_tuning.tab_discarding.exceptions_managed';
const ExceptionValidationMixin = dedupingMixin((superClass) => {
    const superClassBase = I18nMixin(superClass);
    class ExceptionValidationMixin extends superClassBase {
        constructor() {
            super(...arguments);
            this.browserProxy_ = PerformanceBrowserProxyImpl.getInstance();
        }
        static get properties() {
            return {
                errorMessage: { type: String, value: '' },
                inputInvalid: { type: Boolean, value: false },
                rule: String,
                submitDisabled: { type: Boolean, value: true, notify: true },
            };
        }
        validate() {
            const rule = this.rule.trim();
            if (!rule) {
                this.inputInvalid = false;
                this.submitDisabled = true;
                this.errorMessage = '';
                return;
            }
            if (rule.length > MAX_TAB_DISCARD_EXCEPTION_RULE_LENGTH) {
                this.inputInvalid = true;
                this.submitDisabled = true;
                this.errorMessage = this.i18n('onStartupUrlTooLong');
                return;
            }
            this.browserProxy_.validateTabDiscardExceptionRule(rule).then(valid => {
                this.inputInvalid = !valid;
                this.submitDisabled = !valid;
                this.errorMessage =
                    valid ? '' : this.i18n('onStartupInvalidUrl');
            });
        }
    }
    return ExceptionValidationMixin;
});

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExceptionAddInputElementBase = ExceptionValidationMixin(ListPropertyUpdateMixin(PrefsMixin(PolymerElement)));
class ExceptionAddInputElement extends ExceptionAddInputElementBase {
    constructor() {
        super(...arguments);
        this.metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
    }
    static get is() {
        return 'tab-discard-exception-add-input';
    }
    static get template() {
        return getTemplate$k();
    }
    submit() {
        assert(!this.submitDisabled);
        const rule = this.rule.trim();
        this.setPrefDictEntry(TAB_DISCARD_EXCEPTIONS_PREF, rule, convertDateToWindowsEpoch());
        this.metricsProxy_.recordExceptionListAction(MemorySaverModeExceptionListAction.ADD_MANUAL);
    }
}
customElements.define(ExceptionAddInputElement.is, ExceptionAddInputElement);

function getTemplate$j() {
    return html `<!--_html_template_start_--><cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">$i18n{addSiteTitle}</div>
  <div slot="body">
    <tab-discard-exception-add-input id="input" prefs="{{prefs}}" submit-disabled="{{submitDisabled}}">
    </tab-discard-exception-add-input>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button id="actionButton" class="action-button" on-click="onSubmitClick_" disabled$="[[submitDisabled]]" aria-label$="$i18n{tabDiscardingExceptionsAddButtonAriaLabel}">
      $i18n{add}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExceptionAddDialogElementBase = PrefsMixin(PolymerElement);
class ExceptionAddDialogElement extends ExceptionAddDialogElementBase {
    static get is() {
        return 'tab-discard-exception-add-dialog';
    }
    static get template() {
        return getTemplate$j();
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onSubmitClick_() {
        this.$.dialog.close();
        this.$.input.submit();
    }
}
customElements.define(ExceptionAddDialogElement.is, ExceptionAddDialogElement);

function getTemplate$i() {
    return html `<!--_html_template_start_--><cr-input id="input" label="$i18n{addSite}" aria-label$="$i18n{editSiteTitle}" placeholder="example.com" value="{{rule}}" on-input="validate" error-message="[[errorMessage]]" invalid="[[inputInvalid]]" spellcheck="false" autofocus>
</cr-input>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExceptionEditInputElementBase = ExceptionValidationMixin(ListPropertyUpdateMixin(PrefsMixin(PolymerElement)));
class ExceptionEditInputElement extends ExceptionEditInputElementBase {
    constructor() {
        super(...arguments);
        this.metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
    }
    static get is() {
        return 'tab-discard-exception-edit-input';
    }
    static get template() {
        return getTemplate$i();
    }
    static get properties() {
        return {
            /**
             * Represents the original rule that is being edited. When submit() is
             * called, it will be replaced by rule in the exception list.
             */
            ruleToEdit: { type: String, value: '' },
        };
    }
    ready() {
        super.ready();
        this.rule = this.ruleToEdit;
        this.submitDisabled = false;
    }
    submit() {
        assert(!this.submitDisabled);
        const rule = this.rule.trim();
        if (rule !== this.ruleToEdit) {
            this.deletePrefDictEntry(TAB_DISCARD_EXCEPTIONS_PREF, this.ruleToEdit);
            this.setPrefDictEntry(TAB_DISCARD_EXCEPTIONS_PREF, rule, convertDateToWindowsEpoch());
        }
        this.metricsProxy_.recordExceptionListAction(MemorySaverModeExceptionListAction.EDIT);
    }
    setRuleToEditForTesting() {
        this.rule = this.ruleToEdit;
    }
}
customElements.define(ExceptionEditInputElement.is, ExceptionEditInputElement);

function getTemplate$h() {
    return html `<!--_html_template_start_--><cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">$i18n{editSiteTitle}</div>
  <div slot="body">
    <tab-discard-exception-edit-input id="input" prefs="{{prefs}}" rule-to-edit="[[ruleToEdit]]" submit-disabled="{{submitDisabled}}">
    </tab-discard-exception-edit-input>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button id="actionButton" class="action-button" on-click="onSubmitClick_" disabled$="[[submitDisabled]]" aria-label$="$i18n{tabDiscardingExceptionsSaveButtonAriaLabel}">
      $i18n{save}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExceptionEditDialogElementBase = PrefsMixin(PolymerElement);
class ExceptionEditDialogElement extends ExceptionEditDialogElementBase {
    static get is() {
        return 'tab-discard-exception-edit-dialog';
    }
    static get template() {
        return getTemplate$h();
    }
    static get properties() {
        return {
            ruleToEdit: { type: String, value: '' },
        };
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onSubmitClick_() {
        this.$.dialog.close();
        this.$.input.submit();
    }
    setRuleToEditForTesting(rule) {
        this.ruleToEdit = rule;
        this.$.input.setRuleToEditForTesting();
    }
}
customElements.define(ExceptionEditDialogElement.is, ExceptionEditDialogElement);

function getTemplate$g() {
    return html `<!--_html_template_start_--><style include="settings-shared">cr-policy-pref-indicator::part(tooltip){clip:rect(0 0 0 0);height:1px;overflow:hidden;width:1px}cr-policy-pref-indicator{padding-inline-end:8px}</style>
<div class="list-item">
  <div class="start text-elide">[[entry.site]]</div>
  <template is="dom-if" if="[[entry.managed]]">
    <cr-policy-pref-indicator pref="[[prefs.performance_tuning.tab_discarding.exceptions_managed]]" on-mouseenter="onShowTooltip_" on-focus="onShowTooltip_">
    </cr-policy-pref-indicator>
  </template>
  <template is="dom-if" if="[[!entry.managed]]">
    <cr-icon-button class="icon-more-vert" title="$i18n{moreActions}" on-click="onMenuClick_" aria-label="$i18n{moreActions}">
    </cr-icon-button>
  </template>
</div><!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExceptionEntryElementBase = BaseMixin(PolymerElement);
class ExceptionEntryElement extends ExceptionEntryElementBase {
    static get is() {
        return 'tab-discard-exception-entry';
    }
    static get template() {
        return getTemplate$g();
    }
    static get properties() {
        return {
            entry: Object,
            prefs: Object,
        };
    }
    onMenuClick_(e) {
        this.fire('menu-click', { target: e.target, site: this.entry.site });
    }
    onShowTooltip_() {
        const indicator = this.shadowRoot.querySelector('cr-policy-pref-indicator');
        assert(!!indicator);
        this.fire('show-tooltip', { target: indicator, text: indicator.indicatorTooltip });
    }
}
customElements.define(ExceptionEntryElement.is, ExceptionEntryElement);

function getTemplate$f() {
    return html `<!--_html_template_start_--><style include="settings-shared">.ripple-padding{padding-inline-start:20px;padding-inline-end:20px}cr-checkbox::part(label-container){min-width:0}</style>
<cr-checkbox id="checkbox" class="list-item no-outline ripple-padding" tab-index="-1" checked="{{checked}}" part="checkbox">
  <slot></slot>
</cr-checkbox>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-checkbox-list-entry' is a wrapper for cr-checkbox so
 * that it can have the correct accessibility behavior while inside an
 * iron-list. Because cr-checkbox passes its focus to its inner checkbox
 * element, screen readers are unable to infer a parent-child relationship
 * between the list element and the focused checkbox. As a result using the
 * roles listbox/option and annotating with aria-setsize/aria-posinset will not
 * work properly.
 *
 * To fix this 'settings-checkbox-list-entry' hijacks focus and prevents it from
 * going into the inner element, so that screenreaders will properly read
 * "(x of y)". This however changes the visuals so that when the element is
 * focused the entire row is highlighted instead of just the checkbox.
 *
 * Example usage:
 * <iron-list role="listbox" items="[[items]]">
 *   <template>
 *     <settings-checkbox-list-entry role="option"
 *         checked="[[isSelected_(item)]]"
 *         tabindex="[[tabIndex]]"
 *         aria-posinset$="[[addOneTo_(index)]]"
 *         aria-setsize$="[[items.length]]"
 *         on-change="toggleSelection_">
 *       [[item]]
 *     </settings-checkbox-list-entry>
 *   </template>
 * </iron-list>
 */
class SettingsCheckboxListEntryElement extends PolymerElement {
    static get is() {
        return 'settings-checkbox-list-entry';
    }
    static get template() {
        return getTemplate$f();
    }
    static get properties() {
        return {
            // Used to set the status of the checkbox when the entry is created,
            // as well as when the list item for the entry changes.
            checked: {
                type: Boolean,
                value: false,
                observer: 'onCheckedChanged_',
            },
            // Reflects to the tabindex attribute. When it is negative (non-focusable)
            // aria-hidden will be set to "true", so that it will be ignored by screen
            // readers. This is needed because iron-list recycles its entries, so when
            // focusing an entry, the screen reader can be confused by other entries'
            // aria-posinset and aria-setsize attributes if they aren't aria-hidden.
            tabindex: {
                type: Number,
                value: 0,
                observer: 'onTabIndexChanged_',
                reflectToAttribute: true,
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('click', this.onClick_);
        this.addEventListener('keydown', this.onKeyDown_);
        this.addEventListener('keyup', this.onKeyUp_);
    }
    onClick_() {
        this.$.checkbox.click();
    }
    // Handle key presses in the same way as cr-checkbox, because it no longer
    // receives focus.
    onKeyDown_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.repeat) {
            return;
        }
        if (e.key === 'Enter') {
            this.$.checkbox.click();
        }
    }
    onKeyUp_(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
        }
        if (e.key === ' ') {
            this.$.checkbox.click();
        }
    }
    onCheckedChanged_() {
        this.setAttribute('aria-checked', String(this.$.checkbox.checked));
    }
    onTabIndexChanged_() {
        this.setAttribute('aria-hidden', this.tabindex >= 0 ? 'false' : 'true');
    }
}
customElements.define(SettingsCheckboxListEntryElement.is, SettingsCheckboxListEntryElement);

function getTemplate$e() {
    return html `<!--_html_template_start_--><style include="settings-shared">#container{height:calc(5 * var(--cr-section-min-height))}#emptyText{padding-inline-end:20px;padding-inline-start:20px;padding-top:20px}.label-slot{align-items:center;display:flex}.checkbox-label{margin-inline-start:10px}</style>
<div id="container" scrollable>
  <iron-list id="list" scroll-target="container" role="listbox" items="[[currentSites_]]" hidden$="[[!currentSites_.length]]">
    <template>
      <settings-checkbox-list-entry role="option" checked="[[isSelectedSite_(item)]]" tabindex="[[tabIndex]]" aria-posinset$="[[getAriaPosinset_(index)]]" aria-setsize$="[[currentSites_.length]]" aria-description="$i18n{tabDiscardingExceptionsActiveSiteAriaDescription}" on-change="onToggleSelection_">
        <div class="label-slot">
          <site-favicon url="[[item]]"></site-favicon>
          <div class="checkbox-label text-elide">[[item]]</div>
        </div>
      </settings-checkbox-list-entry>
    </template>
  </iron-list>
  <div id="emptyText" hidden="[[currentSites_.length]]">
    $i18n{tabDiscardingExceptionsAddDialogCurrentTabsEmpty}
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExceptionCurrentSitesListElementBase = ListPropertyUpdateMixin(CrScrollableMixin(PrefsMixin(PolymerElement)));
class ExceptionCurrentSitesListElement extends ExceptionCurrentSitesListElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = PerformanceBrowserProxyImpl.getInstance();
        this.metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
        this.updateIntervalID_ = undefined;
    }
    static get is() {
        return 'tab-discard-exception-current-sites-list';
    }
    static get template() {
        return getTemplate$e();
    }
    static get properties() {
        return {
            currentSites_: { type: Array, value: [] },
            selectedSites_: {
                type: Array,
                value() {
                    return new Set();
                },
            },
            submitDisabled: {
                type: Boolean,
                notify: true,
            },
            updateIntervalMS_: {
                type: Number,
                value: 1000,
            },
            // whether the current sites list is visible according to its parent
            visible: {
                type: Boolean,
                value: true,
                observer: 'onVisibilityChanged_',
            },
        };
    }
    async connectedCallback() {
        super.connectedCallback();
        await this.updateCurrentSites_();
        this.dispatchEvent(new CustomEvent('sites-populated', {
            detail: { length: this.currentSites_.length },
        }));
        this.onVisibilityChanged_();
        this.onVisibilityChangedListener_ = this.onVisibilityChanged_.bind(this);
        document.addEventListener('visibilitychange', this.onVisibilityChangedListener_);
    }
    disconnectedCallback() {
        document.removeEventListener('visibilitychange', this.onVisibilityChangedListener_);
        this.stopUpdatingCurrentSites_();
    }
    onVisibilityChanged_() {
        if (this.visible && document.visibilityState === 'visible') {
            this.startUpdatingCurrentSites_();
        }
        else {
            this.stopUpdatingCurrentSites_();
        }
    }
    startUpdatingCurrentSites_() {
        this.updateCurrentSites_().then(() => {
            if (this.updateIntervalID_ === undefined) {
                this.updateIntervalID_ = setInterval(this.updateCurrentSites_.bind(this), this.updateIntervalMS_);
            }
        });
    }
    stopUpdatingCurrentSites_() {
        if (this.updateIntervalID_ !== undefined) {
            clearInterval(this.updateIntervalID_);
            this.updateIntervalID_ = undefined;
        }
    }
    setUpdateIntervalForTesting(updateIntervalMS) {
        this.updateIntervalMS_ = updateIntervalMS;
        this.stopUpdatingCurrentSites_();
        this.startUpdatingCurrentSites_();
    }
    getIsUpdatingForTesting() {
        return this.updateIntervalID_ !== undefined;
    }
    async updateCurrentSites_() {
        const existingSites = new Set(Object.keys(this.getPref(TAB_DISCARD_EXCEPTIONS_PREF).value));
        const currentSites = (await this.browserProxy_.getCurrentOpenSites())
            .filter(rule => !existingSites.has(rule));
        // Remove sites from selected set that are no longer in the list.
        this.selectedSites_ =
            new Set(currentSites.filter(this.isSelectedSite_.bind(this)));
        this.computeSubmitDisabled_();
        this.updateList('currentSites_', x => x, currentSites);
        if (this.currentSites_.length) {
            this.updateScrollableContents();
        }
    }
    computeSubmitDisabled_() {
        this.submitDisabled = !this.selectedSites_.size;
    }
    // Convert iron-list index (0-indexed) to aria-posinset (1-indexed).
    getAriaPosinset_(index) {
        return index + 1;
    }
    // Called to recalculate checked status of entries when the site changes due
    // to list updates.
    isSelectedSite_(site) {
        return this.selectedSites_.has(site);
    }
    onToggleSelection_(e) {
        if (e.detail) {
            this.selectedSites_.add(e.model.item);
        }
        else {
            this.selectedSites_.delete(e.model.item);
        }
        this.computeSubmitDisabled_();
    }
    submit() {
        assert(!this.submitDisabled);
        this.selectedSites_.forEach(rule => {
            this.setPrefDictEntry(TAB_DISCARD_EXCEPTIONS_PREF, rule, convertDateToWindowsEpoch());
        });
        this.metricsProxy_.recordExceptionListAction(MemorySaverModeExceptionListAction.ADD_FROM_CURRENT);
    }
}
customElements.define(ExceptionCurrentSitesListElement.is, ExceptionCurrentSitesListElement);

function getTemplate$d() {
    return html `<!--_html_template_start_--><style>cr-tabs{--cr-tabs-font-size:100%;--cr-tabs-height:40px}#dialog{--border-top-color:var(--google-grey-300);--cr-dialog-body-border-top:1px solid var(--border-top-color)}@media (prefers-color-scheme:dark){#dialog{--border-top-color:var(--cr-separator-color)}}#dialog::part(wrapper){overflow:hidden}#dialog [slot=title]{padding-bottom:8px}#dialog::part(body-container){height:calc(5 * var(--cr-section-min-height) + 2px)}#body{padding-inline-end:0;padding-inline-start:0}#helpText{padding-bottom:20px}#inputPage{padding-inline-end:20px;padding-inline-start:20px;padding-top:20px}</style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">$i18n{addSitesTitle}</div>
  <div slot="header">
    <cr-tabs id="tabs" tab-names="[[tabNames_]]" selected="{{selectedTab_}}">
    </cr-tabs>
  </div>
  <div id="body" slot="body">
    <iron-pages selected="[[selectedTab_]]">
      <tab-discard-exception-current-sites-list id="list" prefs="{{prefs}}" on-sites-populated="onSitesPopulated_" visible="[[isAddCurrentSitesTabSelected_(selectedTab_)]]" submit-disabled="{{submitDisabledList_}}">
      </tab-discard-exception-current-sites-list>
      <div id="inputPage">
        <div id="helpText">
          $i18nRaw{tabDiscardingExceptionsAddDialogHelp}
        </div>
        <tab-discard-exception-add-input id="input" prefs="{{prefs}}" submit-disabled="{{submitDisabledManual_}}">
        </tab-discard-exception-add-input>
      </div>
    </iron-pages>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button id="actionButton" class="action-button" on-click="onSubmitClick_" disabled$="[[isSubmitDisabled_(
            submitDisabledList_, submitDisabledManual_, selectedTab_)]]" aria-label$="$i18n{tabDiscardingExceptionsAddButtonAriaLabel}">
      $i18n{add}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ExceptionAddDialogTabs;
(function (ExceptionAddDialogTabs) {
    ExceptionAddDialogTabs[ExceptionAddDialogTabs["CURRENT_SITES"] = 0] = "CURRENT_SITES";
    ExceptionAddDialogTabs[ExceptionAddDialogTabs["MANUAL"] = 1] = "MANUAL";
})(ExceptionAddDialogTabs || (ExceptionAddDialogTabs = {}));
const ExceptionTabbedAddDialogElementBase = PrefsMixin(PolymerElement);
class ExceptionTabbedAddDialogElement extends ExceptionTabbedAddDialogElementBase {
    static get is() {
        return 'tab-discard-exception-tabbed-add-dialog';
    }
    static get template() {
        return getTemplate$d();
    }
    static get properties() {
        return {
            selectedTab_: {
                type: Number,
                value: ExceptionAddDialogTabs.MANUAL,
            },
            tabNames_: {
                type: Array,
                value: [
                    loadTimeData.getString('tabDiscardingExceptionsAddDialogCurrentTabs'),
                    loadTimeData.getString('tabDiscardingExceptionsAddDialogManual'),
                ],
            },
            submitDisabledList_: Boolean,
            submitDisabledManual_: Boolean,
        };
    }
    onSitesPopulated_(e) {
        if (e.detail.length > 0) {
            this.selectedTab_ = ExceptionAddDialogTabs.CURRENT_SITES;
        }
        this.$.dialog.showModal();
    }
    isAddCurrentSitesTabSelected_() {
        return this.selectedTab_ === ExceptionAddDialogTabs.CURRENT_SITES;
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onSubmitClick_() {
        this.$.dialog.close();
        if (this.isAddCurrentSitesTabSelected_()) {
            this.$.list.submit();
        }
        else {
            this.$.input.submit();
        }
    }
    isSubmitDisabled_() {
        if (this.isAddCurrentSitesTabSelected_()) {
            return this.submitDisabledList_;
        }
        return this.submitDisabledManual_;
    }
}
customElements.define(ExceptionTabbedAddDialogElement.is, ExceptionTabbedAddDialogElement);

function getTemplate$c() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared iron-flex">.cr-padded-text{flex:1}.list-frame{padding-inline-start:var(--cr-section-indent-width)}#outer>tab-discard-exception-entry:not(:first-of-type){border-top:var(--cr-separator-line)}#expandButton{padding-inline-end:0;padding-inline-start:0;--cr-icon-button-margin-end:0}</style>
<div class="cr-row">
  <div class="cr-padded-text">
    $i18n{tabDiscardingExceptionsHeader}
    <div class="secondary">$i18n{tabDiscardingExceptionsDescription}</div>
  </div>
  <cr-button id="addButton" on-click="onAddClick_" aria-label="$i18n{tabDiscardingExceptionsAddButtonAriaLabel}">
    $i18n{add}
  </cr-button>
</div>
<div id="noSitesAdded" class="list-frame" hidden$="[[hasSites_(siteList_.*)]]">
  <div class="list-item secondary">$i18n{noSitesAdded}</div>
</div>
<div id="outer" class="layout vertical list-frame" role="list" hidden$="[[!hasSites_(siteList_.*)]]">
  <template is="dom-repeat" id="list" items="[[getSiteList_(siteList_.*)]]">
    <tab-discard-exception-entry prefs="[[prefs]]" entry="[[item]]" role="listitem" on-menu-click="onMenuClick_" on-show-tooltip="onShowTooltip_">
    </tab-discard-exception-entry>
  </template>
  <cr-expand-button id="expandButton" no-hover class="hr" hidden$="[[!hasOverflowSites_(siteList_.*)]]" expanded="{{overflowSiteListExpanded}}">
    <div>$i18n{tabDiscardingExceptionsAdditionalSites}</div>
  </cr-expand-button>
  <iron-collapse id="collapse" hidden$="[[!hasOverflowSites_(siteList_.*)]]" opened="[[overflowSiteListExpanded]]">
    <template is="dom-repeat" id="overflowList" items="[[getOverflowSiteList_(siteList_.*)]]">
      <div class="hr">
        <tab-discard-exception-entry prefs="[[prefs]]" entry="[[item]]" role="listitem" on-menu-click="onMenuClick_" on-show-tooltip="onShowTooltip_">
        </tab-discard-exception-entry>
      </div>
    </template>
  </iron-collapse>
</div>
<paper-tooltip id="tooltip" fit-to-visible-bounds manual-mode position="top">
  [[tooltipText_]]
</paper-tooltip>
<cr-lazy-render id="menu">
  <template>
    <cr-action-menu role-description="$i18n{menu}">
      <button id="edit" class="dropdown-item" role="menuitem" on-click="onEditClick_">
        $i18n{edit}
      </button>
      <button id="delete" class="dropdown-item" role="menuitem" on-click="onDeleteClick_">
        $i18n{siteSettingsActionReset}
      </button>
    </cr-action-menu>
  </template>
</cr-lazy-render>
<template is="dom-if" if="[[showAddDialog_]]" restamp>
  <tab-discard-exception-add-dialog prefs="{{prefs}}" on-close="onAddDialogClose_">
  </tab-discard-exception-add-dialog>
</template>
<template is="dom-if" if="[[showTabbedAddDialog_]]" restamp>
  <tab-discard-exception-tabbed-add-dialog prefs="{{prefs}}" on-close="onTabbedAddDialogClose_">
  </tab-discard-exception-tabbed-add-dialog>
</template>
<template is="dom-if" if="[[showEditDialog_]]" restamp>
  <tab-discard-exception-edit-dialog prefs="{{prefs}}" on-close="onEditDialogClose_" rule-to-edit="[[selectedRule_]]">
  </tab-discard-exception-edit-dialog>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TAB_DISCARD_EXCEPTIONS_OVERFLOW_SIZE = 5;
const ExceptionListElementBase = TooltipMixin(ListPropertyUpdateMixin(PrefsMixin(PolymerElement)));
class ExceptionListElement extends ExceptionListElementBase {
    constructor() {
        super(...arguments);
        this.metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
    }
    static get is() {
        return 'tab-discard-exception-list';
    }
    static get template() {
        return getTemplate$c();
    }
    static get properties() {
        return {
            siteList_: {
                type: Array,
                value: [],
            },
            overflowSiteListExpanded: { type: Boolean, value: false },
            /**
             * Rule corresponding to the last more actions menu opened. Indicates to
             * this element and its dialog which rule to edit or if a new one should
             * be added.
             */
            selectedRule_: {
                type: String,
                value: '',
            },
            isDiscardExceptionsImprovementsEnabled_: {
                readOnly: true,
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isDiscardExceptionsImprovementsEnabled');
                },
            },
            showAddDialog_: {
                type: Boolean,
                value: false,
            },
            showTabbedAddDialog_: {
                type: Boolean,
                value: false,
            },
            showEditDialog_: {
                type: Boolean,
                value: false,
            },
            tooltipText_: String,
        };
    }
    static get observers() {
        return [
            `onPrefsChanged_(prefs.${TAB_DISCARD_EXCEPTIONS_PREF}.value.*,` +
                `prefs.${TAB_DISCARD_EXCEPTIONS_MANAGED_PREF}.value.*)`,
        ];
    }
    hasSites_() {
        return this.siteList_.length > 0;
    }
    hasOverflowSites_() {
        return this.siteList_.length > TAB_DISCARD_EXCEPTIONS_OVERFLOW_SIZE;
    }
    getSiteList_() {
        return this.siteList_.slice(-TAB_DISCARD_EXCEPTIONS_OVERFLOW_SIZE)
            .reverse();
    }
    getOverflowSiteList_() {
        return this.siteList_.slice(0, -TAB_DISCARD_EXCEPTIONS_OVERFLOW_SIZE)
            .reverse();
    }
    onAddClick_() {
        assert(!this.showEditDialog_);
        if (this.isDiscardExceptionsImprovementsEnabled_) {
            this.showTabbedAddDialog_ = true;
        }
        else {
            this.showAddDialog_ = true;
        }
    }
    onMenuClick_(e) {
        e.stopPropagation();
        this.selectedRule_ = e.detail.site;
        this.$.menu.get().showAt(e.detail.target);
    }
    onEditClick_() {
        assert(this.selectedRule_);
        assert(!this.showAddDialog_);
        assert(!this.showTabbedAddDialog_);
        this.showEditDialog_ = true;
        this.$.menu.get().close();
    }
    onDeleteClick_() {
        this.deletePrefDictEntry(TAB_DISCARD_EXCEPTIONS_PREF, this.selectedRule_);
        this.metricsProxy_.recordExceptionListAction(MemorySaverModeExceptionListAction.REMOVE);
        this.$.menu.get().close();
    }
    onAddDialogClose_() {
        this.showAddDialog_ = false;
    }
    onTabbedAddDialogClose_() {
        this.showTabbedAddDialog_ = false;
    }
    onEditDialogClose_() {
        this.showEditDialog_ = false;
    }
    onPrefsChanged_() {
        const newSites = [];
        for (const pref of [TAB_DISCARD_EXCEPTIONS_MANAGED_PREF,
            TAB_DISCARD_EXCEPTIONS_PREF]) {
            // Annotate sites with their managed status and append them to newSites
            // with managed sites first.
            const prefObject = this.getPref(pref);
            let sites = prefObject.value;
            if (sites.constructor.name === 'Object') {
                sites = Object.keys(sites);
            }
            const siteToExceptionEntry = (site) => ({
                site,
                managed: prefObject.enforcement ===
                    chrome.settingsPrivate.Enforcement.ENFORCED,
            });
            newSites.push(...sites.map(siteToExceptionEntry));
        }
        // Optimizes updates by keeping existing references and minimizes splices
        this.updateList('siteList_', (entry) => entry.site, newSites);
    }
    /**
     * Need to use common tooltip since the tooltip in the entry is cut off from
     * the iron-list.
     */
    onShowTooltip_(e) {
        this.tooltipText_ = e.detail.text;
        this.showTooltipAtTarget(this.$.tooltip, e.detail.target);
    }
}
customElements.define(ExceptionListElement.is, ExceptionListElement);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getDiscardTimerOptions() {
    return [
        {
            value: 5,
            name: loadTimeData.getString('tabDiscardTimerFiveMinutes'),
        },
        {
            value: 15,
            name: loadTimeData.getString('tabDiscardTimerFifteenMinutes'),
        },
        {
            value: 30,
            name: loadTimeData.getString('tabDiscardTimerThirtyMinutes'),
        },
        {
            value: 60,
            name: loadTimeData.getString('tabDiscardTimerOneHour'),
        },
        {
            value: 2 * 60,
            name: loadTimeData.getString('tabDiscardTimerTwoHours'),
        },
        {
            value: 4 * 60,
            name: loadTimeData.getString('tabDiscardTimerFourHours'),
        },
        {
            value: 8 * 60,
            name: loadTimeData.getString('tabDiscardTimerEightHours'),
        },
        {
            value: 16 * 60,
            name: loadTimeData.getString('tabDiscardTimerSixteenHours'),
        },
        {
            value: 24 * 60,
            name: loadTimeData.getString('tabDiscardTimerTwentyFourHours'),
        },
    ];
}

function getTemplate$b() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared">.high-efficiency-radio-group{display:flex;flex-direction:column;padding:0 var(--cr-section-padding)}.badge{align-items:center;background:var(--google-grey-600);border-radius:4px;color:#fff;display:inline-flex;font-size:10px;height:15px;margin-inline-start:15px;padding:0 4px}@media (prefers-color-scheme:dark){.badge{background:var(--google-grey-500);color:var(--google-grey-900)}}#enabledOnTimerButton::part(labelWrapper){align-items:center;display:flex;justify-content:space-between}</style>
<settings-toggle-button id="toggleButton" on-change="onChange_" pref="{{prefs.performance_tuning.high_efficiency_mode.state}}" label="$i18n{memorySaverModeLabel}" sub-label="$i18n{memorySaverModeDescription}" learn-more-url="$i18n{memorySaverLearnMoreUrl}" numeric-unchecked-values="[[numericUncheckedValues_]]" numeric-checked-value="[[toggleButtonCheckedValue_(
        isMemorySaverMultistateModeEnabled_)]]">
</settings-toggle-button>
<template is="dom-if" if="[[isMemorySaverMultistateModeEnabled_]]">
  <iron-collapse id="radioGroupCollapse" opened="[[isMemorySaverModeEnabled_(
          prefs.performance_tuning.high_efficiency_mode.state.value)]]">
    <div class="high-efficiency-radio-group">
      <settings-radio-group id="radioGroup" on-change="onChange_" pref="{{prefs.performance_tuning.high_efficiency_mode.state}}" group-aria-label="$i18n{memorySaverModeRadioGroupAriaLabel}">
        <controlled-radio-button label="$i18n{memorySaverModeHeuristicsLabel}" name="[[memorySaverModeStateEnum_.ENABLED]]" pref="[[prefs.performance_tuning.high_efficiency_mode.state]]">
          <div class="badge" hidden$="[[!showMemorySaverHeuristicModeRecommendedBadge_]]">
            $i18n{memorySaverModeRecommendedBadge}
          </div>
        </controlled-radio-button>
        <controlled-radio-button id="enabledOnTimerButton" label="$i18n{memorySaverModeOnTimerLabel}" name="[[memorySaverModeStateEnum_.ENABLED_ON_TIMER]]" pref="[[prefs.performance_tuning.high_efficiency_mode.state]]" exportparts="labelWrapper">
          <settings-dropdown-menu id="discardTimeDropdown" label="$i18n{memorySaverChooseDiscardTimeAriaLabel}" disabled="[[!isMemorySaverModeEnabledOnTimer_(
                  prefs.performance_tuning.high_efficiency_mode.state.value)]]" pref="{{prefs.performance_tuning.high_efficiency_mode.time_before_discard_in_minutes}}" menu-options="[[discardTimerOptions_]]" on-click="onDropdownClick_">
          </settings-dropdown-menu>
        </controlled-radio-button>
      </settings-radio-group>
    </div>
  </iron-collapse>
</template>
<tab-discard-exception-list id="exceptionList" prefs="{{prefs}}">
</tab-discard-exception-list>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MEMORY_SAVER_MODE_PREF = 'performance_tuning.high_efficiency_mode.state';
const SettingsPerformancePageElementBase = PrefsMixin(PolymerElement);
class SettingsPerformancePageElement extends SettingsPerformancePageElementBase {
    constructor() {
        super(...arguments);
        this.metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-performance-page';
    }
    static get template() {
        return getTemplate$b();
    }
    static get properties() {
        return {
            /**
             * List of options for the discard timer drop-down menu.
             */
            discardTimerOptions_: {
                readOnly: true,
                type: Array,
                value: getDiscardTimerOptions,
            },
            isMemorySaverMultistateModeEnabled_: {
                readOnly: true,
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isMemorySaverMultistateModeEnabled');
                },
            },
            showMemorySaverHeuristicModeRecommendedBadge_: {
                readOnly: true,
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('memorySaverShowRecommendedBadge');
                },
            },
            memorySaverModeStateEnum_: {
                readOnly: true,
                type: Object,
                value: MemorySaverModeState,
            },
            numericUncheckedValues_: {
                type: Array,
                value: () => [MemorySaverModeState.DISABLED],
            },
        };
    }
    onChange_() {
        this.metricsProxy_.recordMemorySaverModeChanged(this.getPref(MEMORY_SAVER_MODE_PREF).value);
    }
    toggleButtonCheckedValue_() {
        return this.isMemorySaverMultistateModeEnabled_ ?
            MemorySaverModeState.ENABLED :
            MemorySaverModeState.ENABLED_ON_TIMER;
    }
    isMemorySaverModeEnabled_(value) {
        return value !== MemorySaverModeState.DISABLED;
    }
    isMemorySaverModeEnabledOnTimer_(value) {
        return value === MemorySaverModeState.ENABLED_ON_TIMER;
    }
    onDropdownClick_(e) {
        e.stopPropagation();
    }
}
customElements.define(SettingsPerformancePageElement.is, SettingsPerformancePageElement);

function getTemplate$a() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared settings-columned-section">.settings-section-bottom-padding{padding-block-end:var(--cr-section-vertical-padding)}settings-collapse-radio-button[hidden]+settings-collapse-radio-button{--settings-collapse-separator-line:0}settings-collapse-radio-button:not(:first-of-type){--settings-collapse-separator-line:var(--cr-separator-line)}</style>
<settings-toggle-button id="preloadingToggle" pref="{{prefs.net.network_prediction_options}}" label="$i18n{preloadingPageTitle}" sub-label="$i18n{preloadingToggleSummary}" learn-more-url="$i18n{preloadingLearnMoreUrl}" numeric-unchecked-values="[[numericUncheckedValues_]]" numeric-checked-value="[[networkPredictionOptionsEnum_.STANDARD]]" on-change="onPreloadingStateChange_">
</settings-toggle-button>
<iron-collapse opened="[[isPreloadingEnabled_(
        prefs.net.network_prediction_options.value)]]">
  <div class="cr-row continuation settings-section-bottom-padding">
    <settings-radio-group id="preloadingRadioGroup" pref="{{prefs.net.network_prediction_options}}" selectable-elements="settings-collapse-radio-button" on-change="onPreloadingStateChange_">
      <settings-collapse-radio-button id="preloadingExtended" name="[[networkPredictionOptionsEnum_.EXTENDED]]" pref="[[prefs.net.network_prediction_options]]" label="$i18n{preloadingPageExtendedPreloadingTitle}" sub-label="$i18n{preloadingPageExtendedPreloadingSummary}" no-automatic-collapse>
        <div slot="collapse" class="settings-columned-section">
          <div class="column">
            <h2 class="description-header">
              $i18n{privacyGuideFeatureDescriptionHeader}
            </h2>
            <ul>
              <li class="secondary">
                $i18n{preloadingPageExtendedPreloadingWhenOnBulletOne}
              </li>
              <li class="secondary">
                $i18n{preloadingPageExtendedPreloadingWhenOnBulletTwo}
              </li>
            </ul>
          </div>
          <div class="column">
            <h2 class="description-header">
              $i18n{privacyGuideThingsToConsider}
            </h2>
            <ul>
              <li class="secondary">
                $i18n{preloadingPageThingsToConsiderBulletOne}
              </li>
              <li class="secondary">
                $i18n{preloadingPageExtendedPreloadingThingsToConsiderBulletTwo}
              </li>
            </ul>
          </div>
        </div>
      </settings-collapse-radio-button>
      <settings-collapse-radio-button id="preloadingStandard" name="[[networkPredictionOptionsEnum_.STANDARD]]" pref="[[prefs.net.network_prediction_options]]" label="$i18n{preloadingPageStandardPreloadingTitle}" sub-label="$i18n{preloadingPageStandardPreloadingSummary}" info-opened="{{infoOpened_}}" no-automatic-collapse>
        <div slot="collapse" class="settings-columned-section">
          <div class="column">
            <h2 class="description-header">
              $i18n{privacyGuideFeatureDescriptionHeader}
            </h2>
            <ul>
              <li class="secondary">
                $i18n{preloadingPageStandardPreloadingWhenOnBulletOne}
              </li>
              <li class="secondary">
                $i18n{preloadingPageStandardPreloadingWhenOnBulletTwo}
              </li>
            </ul>
          </div>
          <div class="column">
            <h2 class="description-header">
              $i18n{privacyGuideThingsToConsider}
            </h2>
            <ul>
              <li class="secondary">
                $i18n{preloadingPageThingsToConsiderBulletOne}
              </li>
            </ul>
          </div>
        </div>
      </settings-collapse-radio-button>
    </settings-radio-group>
  </div>
</iron-collapse>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SpeedPageElementBase = PrefsMixin(PolymerElement);
class SpeedPageElement extends SpeedPageElementBase {
    static get is() {
        return 'settings-speed-page';
    }
    static get template() {
        return getTemplate$a();
    }
    static get properties() {
        return {
            /** Valid network prediction options state. */
            networkPredictionOptionsEnum_: {
                type: Object,
                value: NetworkPredictionOptions,
            },
            numericUncheckedValues_: {
                type: Array,
                value: () => [NetworkPredictionOptions.DISABLED],
            },
        };
    }
    ready() {
        super.ready();
        CrSettingsPrefs.initialized.then(() => {
            const prefValue = this.getPref('net.network_prediction_options')
                .value;
            if (prefValue === NetworkPredictionOptions.WIFI_ONLY_DEPRECATED) {
                // The default pref value is deprecated, and is treated the same as
                // STANDARD. See chrome/browser/preloading/preloading_prefs.h.
                this.setPrefValue('net.network_prediction_options', NetworkPredictionOptions.STANDARD);
            }
        });
    }
    isPreloadingEnabled_(value) {
        return value !== NetworkPredictionOptions.DISABLED;
    }
    onPreloadingStateChange_() {
        // Automatic expanding is disabled so that the radio buttons are collapsed
        // initially. Because of this, radio buttons' expanded states need to be
        // updated manually.
        this.$.preloadingExtended.updateCollapsed();
        this.$.preloadingStandard.updateCollapsed();
    }
}
customElements.define(SpeedPageElement.is, SpeedPageElement);

function getTemplate$9() {
    return html `<!--_html_template_start_-->    <style include="settings-shared"></style>
    <cr-dialog id="dialog" close-text="$i18n{close}" ignore-popstate on-cancel="onCancel_">
      <div slot="title">$i18n{resetAutomatedDialogTitle}</div>
      <div slot="body">
        <span id="description">
          $i18n{resetProfileBannerDescription}
          <a id="learnMore" aria-label="$i18n{resetLearnMoreAccessibilityText}" href="$i18nRaw{resetProfileBannerLearnMoreUrl}" target="_blank">$i18n{learnMore}</a>
        </span>
      </div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onOkClick_" id="ok">
          $i18n{ok}
        </cr-button>
        <cr-button class="action-button" on-click="onResetClick_" id="reset">
          $i18n{resetProfileBannerButton}
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-reset-profile-banner' is the banner shown for prompting the user to
 * clear profile settings.
 */
class SettingsResetProfileBannerElement extends PolymerElement {
    static get is() {
        return 'settings-reset-profile-banner';
    }
    static get template() {
        return getTemplate$9();
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    onOkClick_() {
        this.$.dialog.cancel();
    }
    onCancel_() {
        ResetBrowserProxyImpl.getInstance().onHideResetProfileBanner();
    }
    onResetClick_() {
        this.$.dialog.close();
        Router.getInstance().navigateTo(routes.RESET_DIALOG);
    }
}
customElements.define(SettingsResetProfileBannerElement.is, SettingsResetProfileBannerElement);

function getTemplate$8() {
    return html `<!--_html_template_start_--><style include="cr-shared-style iron-flex settings-shared md-select">:host{--favicon-size:0}#search-wrapper{align-items:center;display:flex;min-height:var(--cr-section-min-height)}.default-search-engine .cr-row{--cr-section-min-height:55px;gap:12px;padding:0}.default-search-engine{padding-top:var(--cr-section-vertical-padding)}.search-engine-name{margin-inline-end:auto}site-favicon{--site-favicon-border-radius:4px;--site-favicon-height:var(--favicon-size);--site-favicon-width:var(--favicon-size)}settings-search-engine-list-dialog{--search-engine-icon-size:var(--favicon-size)}</style>
<settings-animated-pages id="pages" section="search" focus-config="[[focusConfig_]]">
  <div route-path="default">
    
    <div class="cr-row first">
      <template is="dom-if" if="[[searchEngineChoiceSettingsUi_]]">
        <div class="default-search-engine flex">
          $i18n{searchPageTitle}
          <div class="secondary">
            $i18n{searchEngineChoiceEntryPointSubtitle}
            <a href="$i18n{searchExplanationLearnMoreURL}" aria-label="$i18n{searchExplanationLearnMoreA11yLabel}" target="_blank">
              $i18n{learnMore}
            </a>
          </div>
          <template is="dom-if" if="[[isDefaultSearchControlledByPolicy_(
              prefs.default_search_provider_data.template_url_data)]]">
            <cr-policy-pref-indicator pref="[[
                prefs.default_search_provider_data.template_url_data]]">
            </cr-policy-pref-indicator>
          </template>
          <div class="cr-row first">
            <site-favicon favicon-url="[[defaultSearchEngine_.iconURL]]" url="[[defaultSearchEngine_.url]]" icon-path="[[defaultSearchEngine_.iconPath]]">
            </site-favicon>
            <div class="search-engine-name">[[defaultSearchEngine_.name]]</div>
            <cr-button id="openDialogButton" on-click="onOpenDialogButtonClick_" disabled$="[[isDefaultSearchEngineEnforced_(
                    prefs.default_search_provider_data.template_url_data)]]">
              $i18n{searchEnginesChange}
            </cr-button>
            <template is="dom-if" if="[[showSearchEngineListDialog_]]" restamp>
              <settings-search-engine-list-dialog search-engines="[[searchEngines_]]" on-close="onSearchEngineListDialogClose_" on-search-engine-changed="onDefaultSearchEngineChangedInDialog_">
              </settings-search-engine-list-dialog>
            </template>
          </div>
        </div>
        <cr-toast id="confirmationToast" duration="10000">
          <div>[[confirmationToastLabel_]]</div>
        </cr-toast>
      </template>
      <template is="dom-if" if="[[!searchEngineChoiceSettingsUi_]]">
        <div id="searchExplanation" class="flex cr-padded-text">
          $i18n{searchExplanation}
          <a href="$i18n{searchExplanationLearnMoreURL}" aria-label="$i18n{searchExplanationLearnMoreA11yLabel}" target="_blank">
            $i18n{learnMore}
          </a>
        </div>
        <template is="dom-if" if="[[isDefaultSearchControlledByPolicy_(
            prefs.default_search_provider_data.template_url_data)]]">
          <cr-policy-pref-indicator pref="[[
              prefs.default_search_provider_data.template_url_data]]">
          </cr-policy-pref-indicator>
        </template>
        <select class="md-select" on-change="onChange_" aria-labelledby="searchExplanation" disabled$="[[isDefaultSearchEngineEnforced_(
                prefs.default_search_provider_data.template_url_data)]]">
          <template is="dom-repeat" items="[[searchEngines_]]">
            <option selected="[[item.default]]">[[item.name]]</option>
          </template>
        </select>
      </template>
    </div>
    <template is="dom-if" if="[[prefs.default_search_provider_data.template_url_data.extensionId]]">
      <div class="cr-row continuation">
        <extension-controlled-indicator class="flex" extension-id="[[
                prefs.default_search_provider_data.template_url_data.extensionId]]" extension-name="[[
                prefs.default_search_provider_data.template_url_data.controlledByName]]" extension-can-be-disabled="[[
                prefs.default_search_provider_data.template_url_data.extensionCanBeDisabled]]" on-disable-extension="onDisableExtension_">
        </extension-controlled-indicator>
      </div>
    </template>

    
    <cr-link-row class="hr" id="enginesSubpageTrigger" label="$i18n{searchEnginesManageSiteSearch}" on-click="onManageSearchEnginesClick_" role-description="$i18n{subpageArrowRoleDescription}"></cr-link-row>
  </div>
  <template is="dom-if" route-path="/searchEngines">
    <settings-subpage associated-control="[[$$('#enginesSubpageTrigger')]]" page-title="$i18n{searchEnginesManageSiteSearch}" search-label="$i18n{searchEnginesSearch}" search-term="{{searchEnginesFilter_}}">
      <settings-search-engines-page prefs="{{prefs}}" filter="[[searchEnginesFilter_]]">
    </settings-search-engines-page></settings-subpage>
  </template>
</settings-animated-pages>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-search-page' is the settings page containing search settings.
 */
const SettingsSearchPageElementBase = BaseMixin(WebUiListenerMixin(I18nMixin(PolymerElement)));
class SettingsSearchPageElement extends SettingsSearchPageElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = SearchEnginesBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-search-page';
    }
    static get template() {
        return getTemplate$8();
    }
    static get properties() {
        return {
            prefs: Object,
            /**
             * List of search engines available.
             */
            searchEngines_: Array,
            // Whether the `SearchEngineChoice` or `SearchEngineChoiceFre` features
            // are enabled or not.
            searchEngineChoiceSettingsUi_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('searchEngineChoiceSettingsUi');
                },
            },
            // Whether we need to set the icon size to large because they are loaded
            // in the binary or smaller because we get them from the favicon service.
            useLargeSearchEngineIcons_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('useLargeSearchEngineIcons');
                },
            },
            // The selected default search engine.
            defaultSearchEngine_: {
                type: Object,
                computed: 'computeDefaultSearchEngine_(searchEngines_)',
            },
            /** Filter applied to search engines. */
            searchEnginesFilter_: String,
            focusConfig_: Object,
            // Boolean to check whether we need to show the dialog or not.
            showSearchEngineListDialog_: Boolean,
            // The label of the confirmation toast that is displayed when the user
            // chooses a default search engine.
            confirmationToastLabel_: String,
        };
    }
    ready() {
        super.ready();
        // Omnibox search engine
        const updateSearchEngines = (searchEngines) => {
            this.searchEngines_ = searchEngines.defaults;
        };
        this.browserProxy_.getSearchEnginesList().then(updateSearchEngines);
        this.addWebUiListener('search-engines-changed', updateSearchEngines);
        this.focusConfig_ = new Map();
        if (routes.SEARCH_ENGINES) {
            this.focusConfig_.set(routes.SEARCH_ENGINES.path, '#enginesSubpageTrigger');
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.setFaviconSize_();
    }
    onChange_() {
        assert(!this.searchEngineChoiceSettingsUi_);
        const select = this.shadowRoot.querySelector('select');
        assert(select);
        const searchEngine = this.searchEngines_[select.selectedIndex];
        this.browserProxy_.setDefaultSearchEngine(searchEngine.modelIndex, ChoiceMadeLocation.SEARCH_SETTINGS);
    }
    onDisableExtension_() {
        this.dispatchEvent(new CustomEvent('refresh-pref', {
            bubbles: true,
            composed: true,
            detail: 'default_search_provider.enabled',
        }));
    }
    onManageSearchEnginesClick_() {
        Router.getInstance().navigateTo(routes.SEARCH_ENGINES);
    }
    isDefaultSearchControlledByPolicy_(pref) {
        return pref.controlledBy ===
            chrome.settingsPrivate.ControlledBy.USER_POLICY;
    }
    isDefaultSearchEngineEnforced_(pref) {
        return pref.enforcement === chrome.settingsPrivate.Enforcement.ENFORCED;
    }
    computeDefaultSearchEngine_() {
        if (!this.searchEngines_.length || !this.searchEngineChoiceSettingsUi_) {
            return null;
        }
        return this.searchEngines_.find(engine => engine.default);
    }
    onOpenDialogButtonClick_() {
        assert(this.searchEngineChoiceSettingsUi_);
        this.showSearchEngineListDialog_ = true;
        chrome.metricsPrivate.recordUserAction('ChooseDefaultSearchEngine');
    }
    onDefaultSearchEngineChangedInDialog_(e) {
        this.confirmationToastLabel_ = this.i18n('searchEnginesConfirmationToastLabel', e.detail.searchEngine.name);
        this.shadowRoot.querySelector('#confirmationToast').show();
    }
    onSearchEngineListDialogClose_() {
        assert(this.searchEngineChoiceSettingsUi_);
        this.showSearchEngineListDialog_ = false;
    }
    setFaviconSize_() {
        this.style.setProperty('--favicon-size', this.useLargeSearchEngineIcons_ ? '24px' : '16px');
    }
}
customElements.define(SettingsSearchPageElement.is, SettingsSearchPageElement);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// The number of times the prviacy guide promo has been shown.
const MAX_PRIVACY_GUIDE_PROMO_IMPRESSION = 10;
// Key to be used with the localStorage for the privacy guide promo.
const PRIVACY_GUIDE_PROMO_IMPRESSION_COUNT_KEY = 'privacy-guide-promo-count';
class PrivacyGuideBrowserProxyImpl {
    getPromoImpressionCount() {
        return parseInt(window.localStorage.getItem(PRIVACY_GUIDE_PROMO_IMPRESSION_COUNT_KEY), 10) ||
            0;
    }
    incrementPromoImpressionCount() {
        window.localStorage.setItem(PRIVACY_GUIDE_PROMO_IMPRESSION_COUNT_KEY, (this.getPromoImpressionCount() + 1).toString());
    }
    static getInstance() {
        return instance$1 || (instance$1 = new PrivacyGuideBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance$1 = obj;
    }
}
let instance$1 = null;

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
/**
 * A CSS attribute indicating that a node should be ignored during searching.
 */
const SKIP_SEARCH_CSS_ATTRIBUTE = 'no-search';
/**
 * List of elements types that should not be searched at all.
 * The only DOM-MODULE node is in <body> which is not searched, therefore
 * DOM-MODULE is not needed in this set.
 */
const IGNORED_ELEMENTS = new Set([
    'CONTENT',
    'CR-ACTION-MENU',
    'CR-DIALOG',
    'CR-ICON-BUTTON',
    'CR-SLIDER',
    'DIALOG',
    'IMG',
    'IRON-ICON',
    'IRON-LIST',
    'PAPER-RIPPLE',
    'PAPER-SPINNER-LITE',
    'SLOT',
    'STYLE',
    'TEMPLATE',
]);
/**
 * Traverses the entire DOM (including Shadow DOM), finds text nodes that
 * match the given regular expression and applies the highlight UI. It also
 * ensures that <settings-section> instances become visible if any matches
 * occurred under their subtree.
 *
 * @param root The root of the sub-tree to be searched
 * @return Whether or not matches were found.
 */
function findAndHighlightMatches(request, root) {
    let foundMatches = false;
    const highlights = [];
    // Returns true if the node or any of its ancestors are a settings-subpage.
    function isInSubpage(node) {
        while (node !== null) {
            if (node.nodeName === 'SETTINGS-SUBPAGE') {
                return true;
            }
            node = node instanceof ShadowRoot ? node.host : node.parentNode;
        }
        return false;
    }
    function doSearch(node) {
        // NOTE: For subpage wrappers <template route-path="..."> when |no-search|
        // participates in a data binding:
        //
        //  - Always use noSearch Polymer property, for example
        //    no-search="[[foo]]"
        //  - *Don't* use a no-search CSS attribute like no-search$="[[foo]]"
        //
        // The latter throws an error during the automatic Polymer 2 conversion to
        // <dom-if><template...></dom-if> syntax.
        if (node.nodeName === 'DOM-IF' &&
            node.hasAttribute('route-path') && !node.if &&
            !node['noSearch'] &&
            !node.hasAttribute(SKIP_SEARCH_CSS_ATTRIBUTE)) {
            request.queue.addRenderTask(new RenderTask(request, node));
            return;
        }
        if (IGNORED_ELEMENTS.has(node.nodeName)) {
            return;
        }
        if (node instanceof HTMLElement) {
            const element = node;
            if (element.hasAttribute(SKIP_SEARCH_CSS_ATTRIBUTE) ||
                element.hasAttribute('hidden') || element.style.display === 'none') {
                return;
            }
        }
        if (node.nodeType === Node.TEXT_NODE) {
            const textContent = node.nodeValue;
            if (textContent.trim().length === 0) {
                return;
            }
            const strippedText = stripDiacritics(textContent);
            const ranges = [];
            for (let match; match = request.regExp.exec(strippedText);) {
                ranges.push({ start: match.index, length: match[0].length });
            }
            if (ranges.length > 0) {
                foundMatches = true;
                revealParentSection(node, /*numResults=*/ ranges.length, request.bubbles);
                if (node.parentNode.nodeName === 'OPTION') {
                    const select = node.parentNode.parentNode;
                    assert(select.nodeName === 'SELECT');
                    // TODO(crbug.com/355446): support showing bubbles inside subpages.
                    // Currently, they're incorrectly positioned and there's no great
                    // signal at which to know when to reposition them (because every
                    // page asynchronously loads/renders things differently).
                    if (isInSubpage(select)) {
                        return;
                    }
                    showBubble(select, /*numResults=*/ ranges.length, request.bubbles, 
                    /*horizontallyCenter=*/ true);
                }
                else {
                    request.addTextObserver(node);
                    highlights.push(highlight(node, ranges));
                }
            }
            // Returning early since TEXT_NODE nodes never have children.
            return;
        }
        let child = node.firstChild;
        while (child !== null) {
            // Getting a reference to the |nextSibling| before calling doSearch()
            // because |child| could be removed from the DOM within doSearch().
            const nextSibling = child.nextSibling;
            doSearch(child);
            child = nextSibling;
        }
        const shadowRoot = node.shadowRoot;
        if (shadowRoot) {
            doSearch(shadowRoot);
        }
    }
    doSearch(root);
    request.addHighlights(highlights);
    return foundMatches;
}
/**
 * Finds and makes visible the <settings-section> parent of |node|.
 * @param bubbles A map of bubbles created so far.
 */
function revealParentSection(node, numResults, bubbles) {
    let associatedControl = null;
    // Find corresponding SETTINGS-SECTION parent and make it visible.
    let parent = node;
    while (parent.nodeName !== 'SETTINGS-SECTION') {
        parent = parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE ?
            parent.host :
            parent.parentNode;
        if (!parent) {
            // |node| wasn't inside a SETTINGS-SECTION.
            return;
        }
        if (parent.nodeName === 'SETTINGS-SUBPAGE') {
            const subpage = parent;
            assert(subpage.associatedControl, 'An associated control was expected for SETTINGS-SUBPAGE ' +
                subpage.pageTitle + ', but was not found.');
            associatedControl = subpage.associatedControl;
        }
    }
    parent.hiddenBySearch = false;
    // Need to add the search bubble after the parent SETTINGS-SECTION has
    // become visible, otherwise |offsetWidth| returns zero.
    if (associatedControl) {
        showBubble(associatedControl, numResults, bubbles, 
        /* horizontallyCenter= */ false);
    }
}
function showBubble(control, numResults, bubbles, horizontallyCenter) {
    const bubble = createEmptySearchBubble(control, horizontallyCenter);
    const numHits = numResults + (bubbles.get(bubble) || 0);
    bubbles.set(bubble, numHits);
    const msgName = numHits === 1 ? 'searchResultBubbleText' : 'searchResultsBubbleText';
    bubble.firstChild.textContent = loadTimeData.getStringF(msgName, numHits);
}
class Task {
    constructor(request, node) {
        this.request = request;
        this.node = node;
    }
}
/**
 * A task that takes a <template is="dom-if">...</template> node
 * corresponding to a setting subpage and renders it. A
 * SearchAndHighlightTask is posted for the newly rendered subtree, once
 * rendering is done.
 */
class RenderTask extends Task {
    exec() {
        const routePath = this.node.getAttribute('route-path');
        const content = DomIf._contentForTemplate(this.node.firstElementChild);
        const subpageTemplate = content.querySelector('settings-subpage');
        subpageTemplate.setAttribute('route-path', routePath);
        assert(!this.node.if);
        this.node.if = true;
        return new Promise(resolve => {
            const parent = this.node.parentNode;
            microTask.run(() => {
                const renderedNode = parent.querySelector('[route-path="' + routePath + '"]');
                assert(renderedNode);
                // Register a SearchAndHighlightTask for the part of the DOM that was
                // just rendered.
                this.request.queue.addSearchAndHighlightTask(new SearchAndHighlightTask(this.request, renderedNode));
                resolve();
            });
        });
    }
}
class SearchAndHighlightTask extends Task {
    exec() {
        const foundMatches = findAndHighlightMatches(this.request, this.node);
        this.request.updateMatches(foundMatches);
        return Promise.resolve();
    }
}
class TopLevelSearchTask extends Task {
    exec() {
        const shouldSearch = this.request.regExp !== null;
        this.setSectionsVisibility_(!shouldSearch);
        if (shouldSearch) {
            const foundMatches = findAndHighlightMatches(this.request, this.node);
            this.request.updateMatches(foundMatches);
        }
        return Promise.resolve();
    }
    setSectionsVisibility_(visible) {
        const sections = this.node.querySelectorAll('settings-section');
        for (let i = 0; i < sections.length; i++) {
            sections[i].hiddenBySearch = !visible;
        }
    }
}
class TaskQueue {
    constructor(request) {
        this.onEmptyCallback_ = null;
        this.request_ = request;
        this.reset();
        /**
         * Whether a task is currently running.
         */
        this.running_ = false;
    }
    /** Drops all tasks. */
    reset() {
        this.queues_ = { high: [], middle: [], low: [] };
    }
    addTopLevelSearchTask(task) {
        this.queues_.high.push(task);
        this.consumePending_();
    }
    addSearchAndHighlightTask(task) {
        this.queues_.middle.push(task);
        this.consumePending_();
    }
    addRenderTask(task) {
        this.queues_.low.push(task);
        this.consumePending_();
    }
    /**
     * Registers a callback to be called every time the queue becomes empty.
     */
    onEmpty(onEmptyCallback) {
        this.onEmptyCallback_ = onEmptyCallback;
    }
    popNextTask_() {
        return this.queues_.high.shift() || this.queues_.middle.shift() ||
            this.queues_.low.shift();
    }
    consumePending_() {
        if (this.running_) {
            return;
        }
        const task = this.popNextTask_();
        if (!task) {
            this.running_ = false;
            if (this.onEmptyCallback_) {
                this.onEmptyCallback_();
            }
            return;
        }
        this.running_ = true;
        requestIdleCallback(() => {
            if (!this.request_.canceled) {
                task.exec().then(() => {
                    this.running_ = false;
                    this.consumePending_();
                });
            }
            // Nothing to do otherwise. Since the request corresponding to this
            // queue was canceled, the queue is disposed along with the request.
        });
    }
}
class SearchRequest {
    constructor(rawQuery, root) {
        this.rawQuery_ = rawQuery;
        this.root_ = root;
        this.regExp = this.generateRegExp_();
        /**
         * Whether this request was canceled before completing.
         */
        this.canceled = false;
        this.foundMatches_ = false;
        this.resolver = new PromiseResolver();
        this.queue = new TaskQueue(this);
        this.queue.onEmpty(() => {
            this.resolver.resolve(this);
        });
        this.textObservers_ = new Set();
        this.highlights_ = [];
        this.bubbles = new Map();
    }
    /** @param highlights The highlight wrappers to add */
    addHighlights(highlights) {
        this.highlights_.push(...highlights);
    }
    removeAllTextObservers() {
        this.textObservers_.forEach(observer => {
            observer.disconnect();
        });
        this.textObservers_.clear();
    }
    removeAllHighlightsAndBubbles() {
        removeHighlights(this.highlights_);
        this.bubbles.forEach((_count, bubble) => bubble.remove());
        this.highlights_ = [];
        this.bubbles.clear();
    }
    addTextObserver(textNode) {
        const originalParentNode = textNode.parentNode;
        const observer = new MutationObserver(mutations => {
            const oldValue = mutations[0].oldValue.trim();
            const newValue = textNode.nodeValue.trim();
            if (oldValue !== newValue) {
                observer.disconnect();
                this.textObservers_.delete(observer);
                findAndRemoveHighlights(originalParentNode);
            }
        });
        observer.observe(textNode, { characterData: true, characterDataOldValue: true });
        this.textObservers_.add(observer);
    }
    /**
     * Fires this search request.
     */
    start() {
        this.queue.addTopLevelSearchTask(new TopLevelSearchTask(this, this.root_));
    }
    generateRegExp_() {
        let regExp = null;
        // Generate search text by escaping any characters that would be
        // problematic for regular expressions.
        const strippedQuery = stripDiacritics(this.rawQuery_.trim());
        const sanitizedQuery = strippedQuery.replace(SANITIZE_REGEX, '\\$&');
        if (sanitizedQuery.length > 0) {
            regExp = new RegExp(`(${sanitizedQuery})`, 'ig');
        }
        return regExp;
    }
    /**
     * @return Whether this SearchRequest refers to an identical query.
     */
    isSame(rawQuery) {
        return this.rawQuery_ === rawQuery;
    }
    /**
     * Updates the result for this search request.
     */
    updateMatches(found) {
        this.foundMatches_ = this.foundMatches_ || found;
    }
    /** @return Whether any matches were found. */
    didFindMatches() {
        return this.foundMatches_;
    }
}
const SANITIZE_REGEX = /[-[\]{}()*+?.,\\^$|#\s]/g;
class SearchManagerImpl {
    constructor() {
        this.activeRequests_ = new Set();
        this.completedRequests_ = new Set();
        this.lastSearchedText_ = null;
    }
    search(text, page) {
        // Cancel any pending requests if a request with different text is
        // submitted.
        if (text !== this.lastSearchedText_) {
            this.activeRequests_.forEach(function (request) {
                request.removeAllTextObservers();
                request.removeAllHighlightsAndBubbles();
                request.canceled = true;
                request.resolver.resolve(request);
            });
            this.activeRequests_.clear();
            this.completedRequests_.forEach(request => {
                request.removeAllTextObservers();
                request.removeAllHighlightsAndBubbles();
            });
            this.completedRequests_.clear();
        }
        this.lastSearchedText_ = text;
        const request = new SearchRequest(text, page);
        this.activeRequests_.add(request);
        request.start();
        return request.resolver.promise.then(() => {
            this.activeRequests_.delete(request);
            this.completedRequests_.add(request);
            return request;
        });
    }
}
let instance = null;
function getSearchManager() {
    if (instance === null) {
        instance = new SearchManagerImpl();
    }
    return instance;
}
/**
 * Sets the SearchManager singleton instance, useful for testing.
 */
function setSearchManagerForTesting(searchManager) {
    instance = searchManager;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
// clang-format on
/**
 * A categorization of every possible Settings URL, necessary for implementing
 * a finite state machine.
 */
var RouteState;
(function (RouteState) {
    // Initial state before anything has loaded yet.
    RouteState["INITIAL"] = "initial";
    // A dialog that has a dedicated URL (e.g. /importData).
    RouteState["DIALOG"] = "dialog";
    // A section (basically a scroll position within the top level page, e.g,
    // /appearance.
    RouteState["SECTION"] = "section";
    // A subpage, or sub-subpage e.g, /searchEngins.
    RouteState["SUBPAGE"] = "subpage";
    // The top level Settings page, '/'.
    RouteState["TOP_LEVEL"] = "top-level";
})(RouteState || (RouteState = {}));
let guestTopLevelRoute = routes.SEARCH;
// 
guestTopLevelRoute = routes.PRIVACY;
// 
const TOP_LEVEL_EQUIVALENT_ROUTE = loadTimeData.getBoolean('isGuest') ? guestTopLevelRoute : routes.PEOPLE;
function classifyRoute(route) {
    if (!route) {
        return RouteState.INITIAL;
    }
    const routes = Router.getInstance().getRoutes();
    if (route === routes.BASIC) {
        return RouteState.TOP_LEVEL;
    }
    if (route.isSubpage()) {
        return RouteState.SUBPAGE;
    }
    if (route.isNavigableDialog) {
        return RouteState.DIALOG;
    }
    return RouteState.SECTION;
}
/**
 * Responds to route changes by expanding, collapsing, or scrolling to
 * sections on the page. Expanded sections take up the full height of the
 * container. At most one section should be expanded at any given time.
 */
const MainPageMixin = dedupingMixin((superClass) => {
    const superClassBase = BaseMixin(superClass);
    class MainPageMixin extends superClassBase {
        constructor(...args) {
            super(...args);
            this.scroller = null;
            this.lastScrollTop_ = 0;
            /**
             * A map holding all valid state transitions.
             */
            this.validTransitions_ = (function () {
                const allStates = new Set([
                    RouteState.DIALOG,
                    RouteState.SECTION,
                    RouteState.SUBPAGE,
                    RouteState.TOP_LEVEL,
                ]);
                return new Map([
                    [RouteState.INITIAL, allStates],
                    [
                        RouteState.DIALOG,
                        new Set([
                            RouteState.SECTION,
                            RouteState.SUBPAGE,
                            RouteState.TOP_LEVEL,
                        ]),
                    ],
                    [RouteState.SECTION, allStates],
                    [RouteState.SUBPAGE, allStates],
                    [RouteState.TOP_LEVEL, allStates],
                ]);
            })();
        }
        connectedCallback() {
            this.scroller =
                this.domHost ? this.domHost.parentElement : document.body;
            // Purposefully calling this after |scroller| has been initialized.
            super.connectedCallback();
        }
        /**
         * Method to be overridden by users of MainPageMixin.
         * @return Whether the given route is part of |this| page.
         */
        containsRoute(_route) {
            return false;
        }
        shouldExpandAdvanced_(route) {
            const routes = Router.getInstance().getRoutes();
            return this.tagName === 'SETTINGS-BASIC-PAGE' && !!routes.ADVANCED &&
                routes.ADVANCED.contains(route);
        }
        /**
         * Finds the settings section corresponding to the given route. If the
         * section is lazily loaded it force-renders it.
         * Note: If the section resides within "advanced" settings, a
         * 'hide-container' event is fired (necessary to avoid flashing).
         * Callers are responsible for firing a 'show-container' event.
         */
        ensureSectionForRoute_(route) {
            const section = this.getSection(route.section);
            if (section !== null) {
                return Promise.resolve(section);
            }
            // The function to use to wait for <dom-if>s to render.
            const waitFn = beforeNextRender.bind(null, this);
            return new Promise(resolve => {
                if (this.shouldExpandAdvanced_(route)) {
                    this.fire('hide-container');
                    waitFn(() => {
                        this.$$('#advancedPageTemplate').get()
                            .then(() => {
                            resolve(this.getSection(route.section));
                        });
                    });
                }
                else {
                    waitFn(() => {
                        resolve(this.getSection(route.section));
                    });
                }
            });
        }
        /**
         * Finds the settings-section instances corresponding to the given
         * route. If the section is lazily loaded it force-renders it. Note: If
         * the section resides within "advanced" settings, a 'hide-container'
         * event is fired (necessary to avoid flashing). Callers are responsible
         * for firing a 'show-container' event.
         */
        ensureSectionsForRoute_(route) {
            const sections = this.querySettingsSections_(route.section);
            if (sections.length > 0) {
                return Promise.resolve(sections);
            }
            // The function to use to wait for <dom-if>s to render.
            const waitFn = beforeNextRender.bind(null, this);
            return new Promise(resolve => {
                if (this.shouldExpandAdvanced_(route)) {
                    this.fire('hide-container');
                    waitFn(() => {
                        this.$$('#advancedPageTemplate').get()
                            .then(() => {
                            resolve(this.querySettingsSections_(route.section));
                        });
                    });
                }
                else {
                    waitFn(() => {
                        resolve(this.querySettingsSections_(route.section));
                    });
                }
            });
        }
        enterSubpage_(route) {
            this.lastScrollTop_ = this.scroller.scrollTop;
            this.scroller.scrollTop = 0;
            this.classList.add('showing-subpage');
            this.fire('subpage-expand');
            // Explicitly load the lazy_load.html module, since all subpages
            // reside in the lazy loaded module.
            ensureLazyLoaded();
            this.ensureSectionForRoute_(route).then(section => {
                section.classList.add('expanded');
                // Fire event used by a11y tests only.
                this.fire('settings-section-expanded');
                this.fire('show-container');
            });
        }
        enterMainPage_(oldRoute) {
            const oldSection = this.getSection(oldRoute.section);
            oldSection.classList.remove('expanded');
            this.classList.remove('showing-subpage');
            return new Promise((res) => {
                requestAnimationFrame(() => {
                    if (Router.getInstance().lastRouteChangeWasPopstate()) {
                        this.scroller.scrollTop = this.lastScrollTop_;
                    }
                    this.fire('showing-main-page');
                    res();
                });
            });
        }
        /**
         * Shows the section(s) corresponding to |newRoute| and hides the
         * previously |active| section(s), if any.
         */
        switchToSections_(newRoute) {
            this.ensureSectionsForRoute_(newRoute).then(sections => {
                // Clear any previously |active| section.
                const oldSections = this.shadowRoot.querySelectorAll(`settings-section[active]`);
                for (const s of oldSections) {
                    s.toggleAttribute('active', false);
                }
                for (const s of sections) {
                    s.toggleAttribute('active', true);
                }
                this.fire('show-container');
            });
        }
        /**
         * Detects which state transition is appropriate for the given new/old
         * routes.
         */
        getStateTransition_(newRoute, oldRoute) {
            const containsNew = this.containsRoute(newRoute);
            const containsOld = this.containsRoute(oldRoute);
            if (!containsNew && !containsOld) {
                // Nothing to do, since none of the old/new routes belong to this
                // page.
                return null;
            }
            // Case where going from |this| page to an unrelated page. For
            // example:
            //  |this| is settings-basic-page AND
            //  oldRoute is /searchEngines AND
            //  newRoute is /help.
            if (containsOld && !containsNew) {
                return [classifyRoute(oldRoute), RouteState.TOP_LEVEL];
            }
            // Case where return from an unrelated page to |this| page. For
            // example:
            //  |this| is settings-basic-page AND
            //  oldRoute is /help AND
            //  newRoute is /searchEngines
            if (!containsOld && containsNew) {
                return [RouteState.TOP_LEVEL, classifyRoute(newRoute)];
            }
            // Case where transitioning between routes that both belong to |this|
            // page.
            return [classifyRoute(oldRoute), classifyRoute(newRoute)];
        }
        // TODO(dpapad): Figure out why adding the |override| keyword here
        // throws an error.
        currentRouteChanged(newRoute, oldRoute) {
            const transition = this.getStateTransition_(newRoute, oldRoute);
            if (transition === null) {
                return;
            }
            const oldState = transition[0];
            const newState = transition[1];
            assert(this.validTransitions_.get(oldState).has(newState));
            if (oldState === RouteState.TOP_LEVEL) {
                if (newState === RouteState.SECTION) {
                    this.switchToSections_(newRoute);
                }
                else if (newState === RouteState.SUBPAGE) {
                    this.switchToSections_(newRoute);
                    this.enterSubpage_(newRoute);
                }
                else if (newState === RouteState.TOP_LEVEL) {
                    // Case when navigating from '/?search=foo' to '/' (clearing
                    // search results).
                    this.switchToSections_(TOP_LEVEL_EQUIVALENT_ROUTE);
                }
                else if (newState === RouteState.DIALOG) {
                    // Case when user clicks "Reset all settings" from within the
                    // settings-reset-profile-banner to navigate to
                    // /resetProfileSettings.
                    this.switchToSections_(newRoute);
                }
                return;
            }
            if (oldState === RouteState.SECTION) {
                if (newState === RouteState.SECTION) {
                    this.switchToSections_(newRoute);
                }
                else if (newState === RouteState.SUBPAGE) {
                    this.switchToSections_(newRoute);
                    this.enterSubpage_(newRoute);
                }
                else if (newState === RouteState.TOP_LEVEL) {
                    this.switchToSections_(TOP_LEVEL_EQUIVALENT_ROUTE);
                    this.scroller.scrollTop = 0;
                }
                // Nothing to do here for the case of RouteState.DIALOG.
                return;
            }
            if (oldState === RouteState.SUBPAGE) {
                if (newState === RouteState.SECTION) {
                    this.enterMainPage_(oldRoute);
                    this.switchToSections_(newRoute);
                }
                else if (newState === RouteState.SUBPAGE) {
                    // Handle case where the two subpages belong to
                    // different sections, but are linked to each other. For example
                    // /storage and /accounts (in ChromeOS).
                    if (!oldRoute.contains(newRoute) &&
                        !newRoute.contains(oldRoute)) {
                        this.enterMainPage_(oldRoute).then(() => {
                            this.enterSubpage_(newRoute);
                        });
                        return;
                    }
                    // Handle case of subpage to sub-subpage navigation.
                    if (oldRoute.contains(newRoute)) {
                        this.scroller.scrollTop = 0;
                        return;
                    }
                    // When going from a sub-subpage to its parent subpage, scroll
                    // position is automatically restored, because we focus the
                    // sub-subpage entry point.
                }
                else if (newState === RouteState.TOP_LEVEL) {
                    this.enterMainPage_(oldRoute);
                }
                else if (newState === RouteState.DIALOG) {
                    // The only known cases currently for such a transition are from
                    // 1) /synceSetup to /signOut
                    // 2) /synceSetup to /clearBrowserData using the "back" arrow
                    this.enterMainPage_(oldRoute);
                    this.switchToSections_(newRoute);
                }
                return;
            }
            if (oldState === RouteState.INITIAL) {
                if ([RouteState.SECTION, RouteState.DIALOG].includes(newState)) {
                    this.switchToSections_(newRoute);
                }
                else if (newState === RouteState.SUBPAGE) {
                    this.switchToSections_(newRoute);
                    this.enterSubpage_(newRoute);
                }
                else if (newState === RouteState.TOP_LEVEL) {
                    this.switchToSections_(TOP_LEVEL_EQUIVALENT_ROUTE);
                }
                return;
            }
            if (oldState === RouteState.DIALOG) {
                if (newState === RouteState.SUBPAGE) {
                    // The only known cases currently for such a transition are from
                    // 1) /signOut to /syncSetup
                    // 2) /clearBrowserData to /syncSetup
                    this.switchToSections_(newRoute);
                    this.enterSubpage_(newRoute);
                }
                // Nothing to do for all other cases.
            }
        }
        /**
         * TODO(dpapad): Rename this to |querySection| to distinguish it from
         * ensureSectionForRoute_() which force-renders the section as needed.
         * Helper function to get a section from the local DOM.
         * @param section Section name of the element to get.
         */
        getSection(section) {
            if (!section) {
                return null;
            }
            return this.$$(`settings-section[section="${section}"]`);
        }
        /*
         * @param sectionName Section name of the element to get.
         */
        querySettingsSections_(sectionName) {
            const result = [];
            const section = this.getSection(sectionName);
            if (section) {
                result.push(section);
            }
            const extraSections = this.shadowRoot.querySelectorAll(`settings-section[nest-under-section="${sectionName}"]`);
            if (extraSections.length > 0) {
                result.push(...extraSections);
            }
            return result;
        }
    }
    return MainPageMixin;
});

function getTemplate$7() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style settings-page-styles cr-hidden-style iron-flex">:host([is-subpage-animating]){overflow:hidden}:host(:not([in-search-mode])) settings-section:not([active]){display:none}</style>
    <template is="dom-if" if="[[showBasicPage_(currentRoute_, inSearchMode)]]" restamp>
      <div id="basicPage">
        <template is="dom-if" if="[[showResetProfileBanner_]]" restamp>
          <settings-reset-profile-banner on-close="onResetProfileBannerClosed_">
          </settings-reset-profile-banner>
        </template>
        <template is="dom-if" if="[[showPage_(pageVisibility.people)]]" restamp>
          <settings-section page-title="$i18n{peoplePageTitle}" section="people">
            <settings-people-page prefs="{{prefs}}" page-visibility="[[pageVisibility]]">
            </settings-people-page>
          </settings-section>
        </template>
        <template is="dom-if" if="[[showExperimentalAdvancedPage_(pageVisibility.ai)]]" restamp>
          <settings-section page-title="$i18n{aiPageTitle}" section="ai">
            <settings-ai-page prefs="{{prefs}}"></settings-ai-page>
          </settings-section>
        </template>
        <template is="dom-if" if="[[showPage_(pageVisibility.autofill)]]" restamp>
          <settings-section page-title="$i18n{autofillPageTitle}" section="autofill">
            <settings-autofill-page prefs="{{prefs}}"></settings-autofill-page>
          </settings-section>
        </template>
        <settings-section id="privacyGuidePromoSection" page-title="" hidden$="[[!showPrivacyGuidePromo_]]" nest-under-section="privacy" no-search>
          <settings-privacy-guide-promo id="privacyGuidePromo" prefs="{{prefs}}">
          </settings-privacy-guide-promo>
        </settings-section>
        
        <template is="dom-if" if="[[showSafetyCheckPage_(pageVisibility.safetyCheck)]]" restamp>
          <settings-section page-title="$i18n{safetyCheckSectionTitle}" section="safetyCheck" nest-under-section="privacy" id="safetyCheckSettingsSection">
            <settings-safety-check-page prefs="{{prefs}}">
            </settings-safety-check-page>
          </settings-section>
        </template>
        
        <template is="dom-if" if="[[showSafetyHubEntryPointPage_(pageVisibility.safetyHub)]]" restamp>
          <settings-section page-title="$i18n{safetyHub}" section="safetyHubEntryPoint" nest-under-section="privacy" id="safetyHubEntryPointSection">
            <settings-safety-hub-entry-point></settings-safety-hub-entry-point>
          </settings-section>
        </template>
        <template is="dom-if" if="[[showPage_(pageVisibility.privacy)]]" restamp>
          <settings-section page-title="$i18n{privacyPageTitle}" section="privacy">
            <settings-privacy-page prefs="{{prefs}}" page-visibility="[[pageVisibility.privacy]]">
            </settings-privacy-page>
          </settings-section>
        </template>
        <template is="dom-if" if="[[showPerformancePage_(pageVisibility.performance)]]" restamp>
          <settings-section page-title="$i18n{memoryPageTitle}" section="performance" id="performanceSettingsSection">
            <settings-performance-page prefs="{{prefs}}">
            </settings-performance-page>
          </settings-section>
        </template>
        <template is="dom-if" if="[[showBatteryPage_(pageVisibility.performance)]]" restamp>
          <settings-section page-title="$i18n{batteryPageTitle}" section="battery" nest-under-section="performance" id="batterySettingsSection" hidden="[[!showBatterySettings_]]">
            <settings-battery-page prefs="{{prefs}}">
            </settings-battery-page>
          </settings-section>
        </template>
        <template is="dom-if" if="[[showSpeedPage_(pageVisibility.performance)]]" restamp>
          <settings-section page-title="$i18n{speedPageTitle}" section="speed" nest-under-section="performance" id="speedSettingsSection">
            <settings-speed-page prefs="{{prefs}}"></settings-speed-page>
          </settings-section>
        </template>
        <template is="dom-if" if="[[showPage_(pageVisibility.appearance)]]" restamp>
          <settings-section page-title="$i18n{appearancePageTitle}" section="appearance">
            <settings-appearance-page prefs="{{prefs}}" page-visibility="[[pageVisibility.appearance]]">
            </settings-appearance-page>
          </settings-section>
        </template>
        <settings-section page-title="$i18n{searchPageTitle}" section="search">
          <settings-search-page prefs="{{prefs}}"></settings-search-page>
        </settings-section>

        <template is="dom-if" if="[[showPage_(pageVisibility.onStartup)]]" restamp>
          <settings-section page-title="$i18n{onStartup}" section="onStartup">
            <settings-on-startup-page prefs="{{prefs}}">
            </settings-on-startup-page>
          </settings-section>
        </template>
      </div>
    </template>
    <template is="dom-if" if="[[showAdvancedSettings_(pageVisibility.advancedSettings)]]">
      <settings-idle-load id="advancedPageTemplate">
        <template>
          <div id="advancedPage">
            <template is="dom-if" if="[[showPage_(pageVisibility.languages)]]" restamp>

              <settings-section page-title="$i18n{languagesPageTitle}" section="languages">

                <cr-link-row id="openChromeOSLanguagesSettings" on-click="onOpenChromeOsLanguagesSettingsClick_" label="$i18n{openChromeOSLanguagesSettingsLabel}" external>
                </cr-link-row>


              </settings-section>
            </template>

            <template is="dom-if" if="[[showPage_(pageVisibility.downloads)]]" restamp>
              <settings-section page-title="$i18n{downloadsPageTitle}" section="downloads">
                <settings-downloads-page prefs="{{prefs}}">
                </settings-downloads-page>
              </settings-section>
            </template>
            <template is="dom-if" if="[[showPage_(pageVisibility.a11y)]]" restamp>
              <settings-section page-title="$i18n{a11yPageTitle}" section="a11y">
                <settings-a11y-page prefs="{{prefs}}" languages="{{languages}}" language-helper="{{languageHelper}}">
                </settings-a11y-page>
              </settings-section>
            </template>

            <template is="dom-if" if="[[showPage_(pageVisibility.reset)]]" restamp>
              <settings-section page-title="$i18n{resetPageTitle}" section="reset">
                <settings-reset-page prefs="{{prefs}}"></settings-reset-page>
              </settings-section>
            </template>

          </div>
        </template>
      </settings-idle-load>
    </template>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-basic-page' is the settings page containing the actual settings.
 */
const SettingsBasicPageElementBase = PrefsMixin(MainPageMixin(RouteObserverMixin(PrivacyGuideAvailabilityMixin(WebUiListenerMixin(I18nMixin(PolymerElement))))));
class SettingsBasicPageElement extends SettingsBasicPageElementBase {
    constructor() {
        super(...arguments);
        this.privacyGuideBrowserProxy_ = PrivacyGuideBrowserProxyImpl.getInstance();
        this.performanceBrowserProxy_ = PerformanceBrowserProxyImpl.getInstance();
        // 
    }
    static get is() {
        return 'settings-basic-page';
    }
    static get template() {
        return getTemplate$7();
    }
    static get properties() {
        return {
            /** Preferences state. */
            prefs: {
                type: Object,
                notify: true,
            },
            // 
            /**
             * Dictionary defining page visibility.
             */
            pageVisibility: {
                type: Object,
                value() {
                    return {};
                },
            },
            /**
             * Whether a search operation is in progress or previous search
             * results are being displayed.
             */
            inSearchMode: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /**
             * True if the basic page should currently display the reset profile
             * banner.
             */
            showResetProfileBanner_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('showResetProfileBanner');
                },
            },
            /**
             * True if the basic page should currently display the privacy guide
             * promo.
             */
            showPrivacyGuidePromo_: {
                type: Boolean,
                value: false,
            },
            currentRoute_: Object,
            /**
             * Used to avoid handling a new toggle while currently toggling.
             */
            advancedTogglingInProgress_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /**
             * Used to hide battery settings section if the device has no battery
             */
            showBatterySettings_: {
                type: Boolean,
                value: false,
            },
            showAdvancedFeaturesMainControl_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('showAdvancedFeaturesMainControl'),
            },
        };
    }
    static get observers() {
        return [
            'updatePrivacyGuidePromoVisibility_(isPrivacyGuideAvailable, prefs.privacy_guide.viewed.value)',
        ];
    }
    ready() {
        super.ready();
        this.setAttribute('role', 'main');
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('device-has-battery-changed', this.onDeviceHasBatteryChanged_.bind(this));
        this.performanceBrowserProxy_.getDeviceHasBattery().then(this.onDeviceHasBatteryChanged_.bind(this));
        this.currentRoute_ = Router.getInstance().getCurrentRoute();
    }
    currentRouteChanged(newRoute, oldRoute) {
        this.currentRoute_ = newRoute;
        if (routes.ADVANCED && routes.ADVANCED.contains(newRoute)) {
            // Render the advanced page now (don't wait for idle).
            // In Polymer3, async() does not wait long enough for layout to complete.
            // beforeNextRender() must be used instead.
            beforeNextRender(this, () => {
                this.getIdleLoad_();
            });
        }
        super.currentRouteChanged(newRoute, oldRoute);
        if (newRoute === routes.PRIVACY) {
            this.updatePrivacyGuidePromoVisibility_();
        }
    }
    /** Overrides MainPageMixin method. */
    containsRoute(route) {
        return !route || routes.BASIC.contains(route) ||
            (routes.ADVANCED && routes.ADVANCED.contains(route));
    }
    showPage_(visibility) {
        return visibility !== false;
    }
    getIdleLoad_() {
        const idleLoad = this.shadowRoot.querySelector('#advancedPageTemplate');
        assert(idleLoad);
        return idleLoad.get();
    }
    updatePrivacyGuidePromoVisibility_() {
        if (!this.isPrivacyGuideAvailable ||
            this.pageVisibility.privacy === false || this.prefs === undefined ||
            this.getPref('privacy_guide.viewed').value ||
            this.privacyGuideBrowserProxy_.getPromoImpressionCount() >=
                MAX_PRIVACY_GUIDE_PROMO_IMPRESSION ||
            this.currentRoute_ !== routes.PRIVACY) {
            this.showPrivacyGuidePromo_ = false;
            return;
        }
        this.showPrivacyGuidePromo_ = true;
        if (!this.privacyGuidePromoWasShown_) {
            this.privacyGuideBrowserProxy_.incrementPromoImpressionCount();
            this.privacyGuidePromoWasShown_ = true;
        }
    }
    onDeviceHasBatteryChanged_(deviceHasBattery) {
        this.showBatterySettings_ = deviceHasBattery;
    }
    /**
     * Queues a task to search the basic sections, then another for the advanced
     * sections.
     * @param query The text to search for.
     * @return A signal indicating that searching finished.
     */
    searchContents(query) {
        const basicPage = this.shadowRoot.querySelector('#basicPage');
        assert(basicPage);
        const whenSearchDone = [
            getSearchManager().search(query, basicPage),
        ];
        if (this.pageVisibility.advancedSettings !== false) {
            whenSearchDone.push(this.getIdleLoad_().then(function (advancedPage) {
                return getSearchManager().search(query, advancedPage);
            }));
        }
        return Promise.all(whenSearchDone).then(function (requests) {
            // Combine the SearchRequests results to a single SearchResult object.
            return {
                canceled: requests.some(function (r) {
                    return r.canceled;
                }),
                didFindMatches: requests.some(function (r) {
                    return r.didFindMatches();
                }),
                // All requests correspond to the same user query, so only need to check
                // one of them.
                wasClearSearch: requests[0].isSame(''),
            };
        });
    }
    // 
    onOpenChromeOsLanguagesSettingsClick_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('osSettingsLanguagesPageUrl'));
    }
    // 
    onResetProfileBannerClosed_() {
        this.showResetProfileBanner_ = false;
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    /**
     * @return Whether to show #basicPage. This is an optimization to lazy render
     *     #basicPage only when a section/subpage within it is being shown, or
     *     when in search mode.
     */
    showBasicPage_() {
        if (this.currentRoute_ === undefined) {
            return false;
        }
        return this.inSearchMode || routes.BASIC.contains(this.currentRoute_);
    }
    showAdvancedSettings_(visibility) {
        return this.showPage_(visibility);
    }
    showPerformancePage_(visibility) {
        return this.showPage_(visibility);
    }
    showBatteryPage_(visibility) {
        return this.showPage_(visibility);
    }
    showSpeedPage_(visibility) {
        return this.showPage_(visibility);
    }
    showSafetyCheckPage_(visibility) {
        return !loadTimeData.getBoolean('enableSafetyHub') &&
            this.showPage_(visibility);
    }
    showSafetyHubEntryPointPage_(visibility) {
        return loadTimeData.getBoolean('enableSafetyHub') &&
            this.showPage_(visibility);
    }
    showExperimentalAdvancedPage_(visibility) {
        return loadTimeData.getBoolean('showAdvancedFeaturesMainControl') &&
            this.showPage_(visibility);
    }
}
customElements.define(SettingsBasicPageElement.is, SettingsBasicPageElement);

function getTemplate$6() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style cr-hidden-style settings-shared">#noSearchResults{margin-top:80px;text-align:center}#noSearchResults div:first-child{font-size:123%;margin-bottom:10px}managed-footnote{border-top:none;margin-bottom:calc(-21px - 8px);padding-bottom:16px;padding-top:12px;position:relative;z-index:1}</style>
    <div id="noSearchResults" hidden$="[[!showNoResultsFound_]]">
      <div>$i18n{searchNoResults}</div>
      <div>$i18nRaw{searchNoResultsHelp}</div>
    </div>
    <template is="dom-if" if="[[showManagedHeader_(inSearchMode_, showingSubpage_,
        showPages_.about)]]" restamp>
      <managed-footnote></managed-footnote>
    </template>
    <template is="dom-if" if="[[showPages_.settings]]">
      <settings-basic-page class="cr-centered-card-container" prefs="{{prefs}}" page-visibility="[[pageVisibility]]" on-subpage-expand="onShowingSubpage_" on-showing-main-page="onShowingMainPage_" in-search-mode="[[inSearchMode_]]">
      </settings-basic-page>
    </template>
    <template is="dom-if" if="[[showPages_.about]]">
      <settings-about-page role="main" class="cr-centered-card-container" prefs="{{prefs}}">
      </settings-about-page>
    </template>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-main' displays the selected settings page.
 */
const SettingsMainElementBase = RouteObserverMixin(PolymerElement);
class SettingsMainElement extends SettingsMainElementBase {
    static get is() {
        return 'settings-main';
    }
    static get template() {
        return getTemplate$6();
    }
    static get properties() {
        return {
            /**
             * Preferences state.
             */
            prefs: {
                type: Object,
                notify: true,
            },
            /**
             * Controls which main pages are displayed via dom-ifs, based on the
             * current route.
             */
            showPages_: {
                type: Object,
                value() {
                    return { about: false, settings: false };
                },
            },
            /**
             * Whether a search operation is in progress or previous search results
             * are being displayed.
             */
            inSearchMode_: {
                type: Boolean,
                value: false,
            },
            showNoResultsFound_: {
                type: Boolean,
                value: false,
            },
            showingSubpage_: Boolean,
            toolbarSpinnerActive: {
                type: Boolean,
                value: false,
                notify: true,
            },
            /**
             * Dictionary defining page visibility.
             */
            pageVisibility: Object,
        };
    }
    /**
     * Updates the hidden state of the about and settings pages based on the
     * current route.
     */
    currentRouteChanged() {
        const inAbout = routes.ABOUT.contains(Router.getInstance().getCurrentRoute());
        this.showPages_ = { about: inAbout, settings: !inAbout };
    }
    onShowingSubpage_() {
        this.showingSubpage_ = true;
    }
    onShowingMainPage_() {
        this.showingSubpage_ = false;
    }
    /**
     * @return A promise indicating that searching finished.
     */
    searchContents(query) {
        // Trigger rendering of the basic and advanced pages and search once ready.
        this.inSearchMode_ = true;
        this.toolbarSpinnerActive = true;
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                const page = this.shadowRoot.querySelector('settings-basic-page');
                page.searchContents(query).then(result => {
                    resolve();
                    if (result.canceled) {
                        // Nothing to do here. A previous search request was canceled
                        // because a new search request was issued with a different query
                        // before the previous completed.
                        return;
                    }
                    this.toolbarSpinnerActive = false;
                    this.inSearchMode_ = !result.wasClearSearch;
                    this.showNoResultsFound_ =
                        this.inSearchMode_ && !result.didFindMatches;
                    if (this.inSearchMode_) {
                        getInstance().announce(this.showNoResultsFound_ ?
                            loadTimeData.getString('searchNoResults') :
                            loadTimeData.getStringF('searchResults', query));
                    }
                });
            }, 0);
        });
    }
    showManagedHeader_() {
        return !this.inSearchMode_ && !this.showingSubpage_ &&
            !this.showPages_.about;
    }
}
customElements.define(SettingsMainElement.is, SettingsMainElement);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrMenuSelectorBase = mixinBehaviors([IronSelectableBehavior], PolymerElement);
class CrMenuSelector extends CrMenuSelectorBase {
    static get is() {
        return 'cr-menu-selector';
    }
    connectedCallback() {
        super.connectedCallback();
        this.focusOutlineManager_ = FocusOutlineManager.forDocument(document);
    }
    ready() {
        super.ready();
        this.setAttribute('role', 'menu');
        this.addEventListener('focusin', this.onFocusin_.bind(this));
        this.addEventListener('keydown', this.onKeydown_.bind(this));
        this.addEventListener('iron-deselect', e => this.onIronDeselected_(e));
        this.addEventListener('iron-select', e => this.onIronSelected_(e));
    }
    getAllFocusableItems_() {
        // Note that this is different from IronSelectableBehavior's items property
        // as some items are focusable and actionable but not selectable (eg. an
        // external link).
        return Array.from(this.querySelectorAll('[role=menuitem]:not([disabled]):not([hidden])'));
    }
    onFocusin_(e) {
        // If the focus was moved by keyboard and is coming in from a relatedTarget
        // that is not within this menu, move the focus to the first menu item. This
        // ensures that the first menu item is always the first focused item when
        // focusing into the menu. A null relatedTarget means the focus was moved
        // from outside the WebContents.
        const focusMovedWithKeyboard = this.focusOutlineManager_.visible;
        const focusMovedFromOutside = e.relatedTarget === null ||
            !this.contains(e.relatedTarget);
        if (focusMovedWithKeyboard && focusMovedFromOutside) {
            this.getAllFocusableItems_()[0].focus();
        }
    }
    onIronDeselected_(e) {
        e.detail.item.removeAttribute('aria-current');
    }
    onIronSelected_(e) {
        e.detail.item.setAttribute('aria-current', 'page');
    }
    onKeydown_(event) {
        const items = this.getAllFocusableItems_();
        assert(items.length >= 1);
        const currentFocusedIndex = items.indexOf(this.querySelector(':focus'));
        let newFocusedIndex = currentFocusedIndex;
        switch (event.key) {
            case 'Tab':
                if (event.shiftKey) {
                    // If pressing Shift+Tab, immediately focus the first element so that
                    // when the event is finished processing, the browser automatically
                    // focuses the previous focusable element outside of the menu.
                    items[0].focus();
                }
                else {
                    // If pressing Tab, immediately focus the last element so that when
                    // the event is finished processing, the browser automatically focuses
                    // the next focusable element outside of the menu.
                    items[items.length - 1].focus({ preventScroll: true });
                }
                return;
            case 'ArrowDown':
                newFocusedIndex = (currentFocusedIndex + 1) % items.length;
                break;
            case 'ArrowUp':
                newFocusedIndex =
                    (currentFocusedIndex + items.length - 1) % items.length;
                break;
            case 'Home':
                newFocusedIndex = 0;
                break;
            case 'End':
                newFocusedIndex = items.length - 1;
                break;
        }
        if (newFocusedIndex === currentFocusedIndex) {
            return;
        }
        event.preventDefault();
        items[newFocusedIndex].focus();
    }
}
customElements.define(CrMenuSelector.is, CrMenuSelector);

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
.cr-nav-menu-item{--iron-icon-fill-color:var(--google-grey-700);--iron-icon-height:20px;--iron-icon-width:20px;--cr-icon-ripple-size:20px;align-items:center;border-end-end-radius:100px;border-start-end-radius:100px;box-sizing:border-box;color:var(--google-grey-900);display:flex;font-size:14px;font-weight:500;line-height:14px;margin-inline-end:2px;margin-inline-start:1px;min-height:40px;overflow:hidden;padding-block-end:10px;padding-block-start:10px;padding-inline-start:23px;position:relative;text-decoration:none}:host-context(cr-drawer) .cr-nav-menu-item{margin-inline-end:8px}.cr-nav-menu-item:hover{background:var(--google-grey-200)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:var(--google-blue-600);background:var(--google-blue-50);color:var(--google-blue-700)}@media (prefers-color-scheme:dark){.cr-nav-menu-item{--iron-icon-fill-color:var(--google-grey-500);color:#fff}.cr-nav-menu-item:hover{--iron-icon-fill-color:white;background:var(--google-grey-800)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:black;background:var(--google-blue-300);color:var(--google-grey-900)}}.cr-nav-menu-item:focus{outline:auto 5px -webkit-focus-ring-color;z-index:1}.cr-nav-menu-item:focus:not([selected]):not(:hover){background:0 0}.cr-nav-menu-item iron-icon{flex-shrink:0;margin-inline-end:20px;pointer-events:none;vertical-align:top}
    </style>
  </template>
`.content);
styleMod.register('cr-nav-menu-item-style');

function getTemplate$5() {
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

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-menu' shows a menu with a hardcoded set of pages and subpages.
 */
const SettingsMenuElementBase = RouteObserverMixin(PolymerElement);
class SettingsMenuElement extends SettingsMenuElementBase {
    static get is() {
        return 'settings-menu';
    }
    static get template() {
        return getTemplate$5();
    }
    static get properties() {
        return {
            /**
             * Dictionary defining page visibility.
             */
            pageVisibility: Object,
            showAdvancedFeaturesMainControl_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('showAdvancedFeaturesMainControl'),
            },
        };
    }
    ready() {
        super.ready();
        this.routes_ = Router.getInstance().getRoutes();
    }
    showExperimentalMenuItem_() {
        return this.showAdvancedFeaturesMainControl_ &&
            (!this.pageVisibility || this.pageVisibility.ai !== false);
    }
    currentRouteChanged(newRoute) {
        // 
        // Focus the initially selected path.
        const anchors = this.shadowRoot.querySelectorAll('a');
        for (let i = 0; i < anchors.length; ++i) {
            const anchorRoute = Router.getInstance().getRouteForPath(anchors[i].getAttribute('href'));
            if (anchorRoute && anchorRoute.contains(newRoute)) {
                this.setSelectedUrl_(anchors[i].href);
                return;
            }
        }
        this.setSelectedUrl_(''); // Nothing is selected.
    }
    focusFirstItem() {
        const firstFocusableItem = this.shadowRoot.querySelector('[role=menuitem]:not([hidden])');
        if (firstFocusableItem) {
            firstFocusableItem.focus();
        }
    }
    /**
     * Prevent clicks on sidebar items from navigating. These are only links for
     * accessibility purposes, taps are handled separately by <iron-selector>.
     */
    onLinkClick_(event) {
        if (event.target.matches('a:not(#extensionsLink)')) {
            event.preventDefault();
        }
    }
    /**
     * Keeps both menus in sync. |url| needs to come from |element.href| because
     * |iron-list| uses the entire url. Using |getAttribute| will not work.
     */
    setSelectedUrl_(url) {
        this.$.menu.selected = url;
    }
    onSelectorActivate_(event) {
        this.setSelectedUrl_(event.detail.selected);
        const path = new URL(event.detail.selected).pathname;
        const route = Router.getInstance().getRouteForPath(path);
        assert(route, 'settings-menu has an entry with an invalid route.');
        Router.getInstance().navigateTo(route, /* dynamicParams */ undefined, /* removeSearch */ true);
    }
    onExtensionsLinkClick_() {
        chrome.metricsPrivate.recordUserAction('SettingsMenu_ExtensionsLinkClicked');
    }
}
customElements.define(SettingsMenuElement.is, SettingsMenuElement);

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview CrContainerShadowMixin holds logic for showing a drop shadow
 * near the top of a container element, when the content has scrolled.
 *
 * Elements using this mixin are expected to define a #container element,
 * which is the element being scrolled. If the #container element has a
 * show-bottom-shadow attribute, a drop shadow will also be shown near the
 * bottom of the container element, when there is additional content to scroll
 * to. Examples:
 *
 * For both top and bottom shadows:
 * <div id="container" show-bottom-shadow>...</div>
 *
 * For top shadow only:
 * <div id="container">...</div>
 *
 * The mixin will take care of inserting an element with ID
 * 'cr-container-shadow-top' which holds the drop shadow effect, and,
 * optionally, an element with ID 'cr-container-shadow-bottom' which holds the
 * same effect. A 'has-shadow' CSS class is automatically added to/removed from
 * both elements while scrolling, as necessary. Note that the show-bottom-shadow
 * attribute is inspected only during attached(), and any changes to it that
 * occur after that point will not be respected.
 *
 * Clients should either use the existing shared styling in
 * cr_shared_style.css, '#cr-container-shadow-[top/bottom]' and
 * '#cr-container-shadow-[top/bottom].has-shadow', or define their own styles.
 */
var CrContainerShadowSide;
(function (CrContainerShadowSide) {
    CrContainerShadowSide["TOP"] = "top";
    CrContainerShadowSide["BOTTOM"] = "bottom";
})(CrContainerShadowSide || (CrContainerShadowSide = {}));
const CrContainerShadowMixin = dedupingMixin((superClass) => {
    class CrContainerShadowMixin extends superClass {
        constructor() {
            super(...arguments);
            this.intersectionObserver_ = null;
            this.dropShadows_ = new Map();
            this.intersectionProbes_ = new Map();
            this.sides_ = null;
        }
        connectedCallback() {
            super.connectedCallback();
            const hasBottomShadow = this.getContainer_().hasAttribute('show-bottom-shadow');
            this.sides_ = hasBottomShadow ?
                [CrContainerShadowSide.TOP, CrContainerShadowSide.BOTTOM] :
                [CrContainerShadowSide.TOP];
            this.sides_.forEach(side => {
                // The element holding the drop shadow effect to be shown.
                const shadow = document.createElement('div');
                shadow.id = `cr-container-shadow-${side}`;
                shadow.classList.add('cr-container-shadow');
                this.dropShadows_.set(side, shadow);
                this.intersectionProbes_.set(side, document.createElement('div'));
            });
            this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.TOP), this.getContainer_());
            this.getContainer_().prepend(this.intersectionProbes_.get(CrContainerShadowSide.TOP));
            if (hasBottomShadow) {
                this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.BOTTOM), this.getContainer_().nextSibling);
                this.getContainer_().append(this.intersectionProbes_.get(CrContainerShadowSide.BOTTOM));
            }
            this.enableShadowBehavior(true);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.enableShadowBehavior(false);
        }
        getContainer_() {
            return this.shadowRoot.querySelector('#container');
        }
        getIntersectionObserver_() {
            const callback = (entries) => {
                // In some rare cases, there could be more than one entry per
                // observed element, in which case the last entry's result
                // stands.
                for (const entry of entries) {
                    const target = entry.target;
                    this.sides_.forEach(side => {
                        if (target === this.intersectionProbes_.get(side)) {
                            this.dropShadows_.get(side).classList.toggle('has-shadow', entry.intersectionRatio === 0);
                        }
                    });
                }
            };
            return new IntersectionObserver(callback, { root: this.getContainer_(), threshold: 0 });
        }
        /**
         * @param enable Whether to enable the mixin or disable it.
         *     This function does nothing if the mixin is already in the
         *     requested state.
         */
        enableShadowBehavior(enable) {
            // Behavior is already enabled/disabled. Return early.
            if (enable === !!this.intersectionObserver_) {
                return;
            }
            if (!enable) {
                this.intersectionObserver_.disconnect();
                this.intersectionObserver_ = null;
                return;
            }
            this.intersectionObserver_ = this.getIntersectionObserver_();
            // Need to register the observer within a setTimeout() callback,
            // otherwise the drop shadow flashes once on startup, because of the
            // DOM modifications earlier in this function causing a relayout.
            window.setTimeout(() => {
                if (this.intersectionObserver_) {
                    // In case this is already detached.
                    this.intersectionProbes_.forEach(probe => {
                        this.intersectionObserver_.observe(probe);
                    });
                }
            });
        }
        /**
         * Shows the shadows. The shadow mixin must be disabled before
         * calling this method, otherwise the intersection observer might
         * show the shadows again.
         */
        showDropShadows() {
            assert(!this.intersectionObserver_);
            assert(this.sides_);
            for (const side of this.sides_) {
                this.dropShadows_.get(side).classList.toggle('has-shadow', true);
            }
        }
    }
    return CrContainerShadowMixin;
});

function getTemplate$4() {
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

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-ui' implements the UI for the Settings page.
 *
 * Example:
 *
 *    <settings-ui prefs="{{prefs}}"></settings-ui>
 */
const SettingsUiElementBase = RouteObserverMixin(CrContainerShadowMixin(FindShortcutMixin(PolymerElement)));
class SettingsUiElement extends SettingsUiElementBase {
    static get is() {
        return 'settings-ui';
    }
    static get template() {
        return getTemplate$4();
    }
    static get properties() {
        return {
            /**
             * Preferences state.
             */
            prefs: Object,
            toolbarSpinnerActive_: {
                type: Boolean,
                value: false,
            },
            narrow_: {
                type: Boolean,
                observer: 'onNarrowChanged_',
            },
            pageVisibility_: { type: Object, value: pageVisibility },
            lastSearchQuery_: {
                type: String,
                value: '',
            },
        };
    }
    constructor() {
        super();
        Router.getInstance().initializeRouteFromUrl();
    }
    ready() {
        super.ready();
        // Lazy-create the drawer the first time it is opened or swiped into view.
        listenOnce(this.$.drawer, 'cr-drawer-opening', () => {
            this.$.drawerTemplate.if = true;
        });
        window.addEventListener('popstate', () => {
            this.$.drawer.cancel();
        });
        window.CrPolicyStrings = {
            controlledSettingExtension: loadTimeData.getString('controlledSettingExtension'),
            controlledSettingExtensionWithoutName: loadTimeData.getString('controlledSettingExtensionWithoutName'),
            controlledSettingPolicy: loadTimeData.getString('controlledSettingPolicy'),
            controlledSettingRecommendedMatches: loadTimeData.getString('controlledSettingRecommendedMatches'),
            controlledSettingRecommendedDiffers: loadTimeData.getString('controlledSettingRecommendedDiffers'),
            controlledSettingChildRestriction: loadTimeData.getString('controlledSettingChildRestriction'),
            controlledSettingParent: loadTimeData.getString('controlledSettingParent'),
            // 
            controlledSettingShared: loadTimeData.getString('controlledSettingShared'),
            controlledSettingWithOwner: loadTimeData.getString('controlledSettingWithOwner'),
            controlledSettingNoOwner: loadTimeData.getString('controlledSettingNoOwner'),
            // 
        };
        this.addEventListener('show-container', () => {
            this.$.container.style.visibility = 'visible';
        });
        this.addEventListener('hide-container', () => {
            this.$.container.style.visibility = 'hidden';
        });
        this.addEventListener('refresh-pref', this.onRefreshPref_.bind(this));
    }
    connectedCallback() {
        super.connectedCallback();
        document.documentElement.classList.remove('loading');
        // Preload bold Roboto so it doesn't load and flicker the first time used.
        // https://github.com/microsoft/TypeScript/issues/13569
        document.fonts.load('bold 12px Roboto');
        setGlobalScrollTarget(this.$.container);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        Router.getInstance().resetRouteForTesting();
        resetGlobalScrollTargetForTesting();
    }
    currentRouteChanged(route) {
        if (route === routes.PRIVACY_GUIDE) {
            // Privacy guide has a multi-card layout, which only needs shadows to
            // show when there is more content to scroll.
            this.enableShadowBehavior(true);
        }
        else if (route.depth <= 1) {
            // Main page uses scroll position to determine whether a shadow should
            // be shown.
            this.enableShadowBehavior(true);
        }
        else if (!route.isNavigableDialog) {
            // Sub-pages always show the top shadow, regardless of scroll position.
            this.enableShadowBehavior(false);
            this.showDropShadows();
        }
        const urlSearchQuery = Router.getInstance().getQueryParameters().get('search') || '';
        if (urlSearchQuery === this.lastSearchQuery_) {
            return;
        }
        this.lastSearchQuery_ = urlSearchQuery;
        const toolbar = this.shadowRoot.querySelector('cr-toolbar');
        const searchField = toolbar.getSearchField();
        // If the search was initiated by directly entering a search URL, need to
        // sync the URL parameter to the textbox.
        if (urlSearchQuery !== searchField.getValue()) {
            // Setting the search box value without triggering a 'search-changed'
            // event, to prevent an unnecessary duplicate entry in |window.history|.
            searchField.setValue(urlSearchQuery, true /* noEvent */);
        }
        this.$.main.searchContents(urlSearchQuery);
    }
    // Override FindShortcutMixin methods.
    handleFindShortcut(modalContextOpen) {
        if (modalContextOpen) {
            return false;
        }
        this.shadowRoot.querySelector('cr-toolbar')
            .getSearchField()
            .showAndFocus();
        return true;
    }
    // Override FindShortcutMixin methods.
    searchInputHasFocus() {
        return this.shadowRoot.querySelector('cr-toolbar')
            .getSearchField()
            .isSearchFocused();
    }
    onRefreshPref_(e) {
        return this.$.prefs.refresh(e.detail);
    }
    /**
     * Handles the 'search-changed' event fired from the toolbar.
     */
    onSearchChanged_(e) {
        const query = e.detail;
        Router.getInstance().navigateTo(routes.BASIC, query.length > 0 ?
            new URLSearchParams('search=' + encodeURIComponent(query)) :
            undefined, 
        /* removeSearch */ true);
    }
    /**
     * Called when a section is selected.
     */
    onIronActivate_() {
        this.$.drawer.close();
    }
    onMenuButtonClick_() {
        this.$.drawer.toggle();
    }
    /**
     * When this is called, The drawer animation is finished, and the dialog no
     * longer has focus. The selected section will gain focus if one was
     * selected. Otherwise, the drawer was closed due being canceled, and the
     * main settings container is given focus. That way the arrow keys can be
     * used to scroll the container, and pressing tab focuses a component in
     * settings.
     */
    onMenuClose_() {
        if (!this.$.drawer.wasCanceled()) {
            // If a navigation happened, MainPageMixin#currentRouteChanged
            // handles focusing the corresponding section.
            return;
        }
        // Add tab index so that the container can be focused.
        this.$.container.setAttribute('tabindex', '-1');
        this.$.container.focus();
        listenOnce(this.$.container, ['blur', 'pointerdown'], () => {
            this.$.container.removeAttribute('tabindex');
        });
    }
    onNarrowChanged_() {
        if (this.$.drawer.open && !this.narrow_) {
            this.$.drawer.close();
        }
        const focusedElement = this.shadowRoot.activeElement;
        if (this.narrow_ && focusedElement === this.$.leftMenu) {
            // If changed from non-narrow to narrow and the focus was on the left
            // menu, move focus to the button that opens the drawer menu.
            this.$.toolbar.focusMenuButton();
        }
        else if (!this.narrow_ && this.$.toolbar.isMenuFocused()) {
            // If changed from narrow to non-narrow and the focus was on the button
            // that opens the drawer menu, move focus to the left menu.
            this.$.leftMenu.focusFirstItem();
        }
        else if (!this.narrow_ &&
            focusedElement === this.shadowRoot.querySelector('#drawerMenu')) {
            // If changed from narrow to non-narrow and the focus was in the drawer
            // menu, wait for the drawer to close and then move focus on the left
            // menu. The drawer has a dialog element in it so moving focus to an
            // element outside the dialog while it is open will not work.
            const boundCloseListener = () => {
                this.$.leftMenu.focusFirstItem();
                this.$.drawer.removeEventListener('close', boundCloseListener);
            };
            this.$.drawer.addEventListener('close', boundCloseListener);
        }
    }
}
customElements.define(SettingsUiElement.is, SettingsUiElement);

function getTemplate$3() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<settings-safety-check-child id="safetyCheckChild" icon-status="[[safetyCheckIconEnum_.EXTENSIONS_REVIEW]]" label="[[displayString_]]" button-label="$i18n{safetyCheckReview}" button-aria-label="$i18n{safetyCheckExtensionsButtonAriaLabel}" on-button-click="onButtonClick_" role="presentation" button-icon="cr:open-in-new" class="two-line">
</settings-safety-check-child>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'safety-check-extensions' is the settings page module showing
 * extensions that should be reviewed by the user. It will replace
 * the settings-safety-check-extensions-child after launch.
 */
const SafetyCheckExtensionsElementBase = WebUiListenerMixin(PolymerElement);
class SafetyCheckExtensionsElement extends SafetyCheckExtensionsElementBase {
    static get is() {
        return 'safety-check-extensions';
    }
    static get template() {
        return getTemplate$3();
    }
    static get properties() {
        return {
            displayString_: String,
            safetyCheckIconEnum_: {
                type: Object,
                value: SafetyCheckIconStatus,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // Register for safety check status updates.
        this.addWebUiListener('safety-check-extensions-status-changed', this.onSafetyCheckExtensionsChanged_.bind(this));
        this.onSafetyCheckExtensionsChanged_();
    }
    async onSafetyCheckExtensionsChanged_() {
        const numExtensions = await SafetyCheckExtensionsBrowserProxyImpl.getInstance()
            .getNumberOfExtensionsThatNeedReview();
        this.displayString_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckExtensionsReviewLabel', numExtensions);
    }
    onButtonClick_() {
        MetricsBrowserProxyImpl.getInstance().recordAction('Settings.SafetyCheck.ReviewExtensionsThroughSafetyCheck');
        OpenWindowProxyImpl.getInstance().openUrl('chrome://extensions');
    }
}
customElements.define(SafetyCheckExtensionsElement.is, SafetyCheckExtensionsElement);

function getTemplate$2() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared"></style>
<settings-safety-check-child id="safetyCheckChild" icon-status="[[iconStatus_]]" label="[[headerString_]]" button-label="$i18n{safetyCheckReview}" button-aria-label="$i18n{safetyCheckNotificationPermissionReviewButtonAriaLabel}" on-button-click="onButtonClick_" role="presentation" class="two-line">
</settings-safety-check-child><!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-safety-notification-permissions' is the settings page containing
 * the safety check notification permissions module showing the sites that sends
 * high volume of notifications.
 */
const SettingsSafetyCheckNotificationPermissionsElementBase = WebUiListenerMixin(PolymerElement);
class SettingsSafetyCheckNotificationPermissionsElement extends SettingsSafetyCheckNotificationPermissionsElementBase {
    constructor() {
        super(...arguments);
        this.safetyHubBrowserProxy_ = SafetyHubBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-safety-check-notification-permissions';
    }
    static get template() {
        return getTemplate$2();
    }
    static get properties() {
        return {
            iconStatus_: {
                type: SafetyCheckIconStatus,
                value() {
                    return SafetyCheckIconStatus.NOTIFICATION_PERMISSIONS;
                },
            },
            headerString_: String,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // Register for review notification permission list updates.
        this.addWebUiListener(SafetyHubEvent.NOTIFICATION_PERMISSIONS_MAYBE_CHANGED, (sites) => this.onSitesChanged_(sites));
        this.safetyHubBrowserProxy_.getNotificationPermissionReview().then(this.onSitesChanged_.bind(this));
    }
    onButtonClick_() {
        Router.getInstance().navigateTo(routes.SITE_SETTINGS_NOTIFICATIONS, /* dynamicParams= */ undefined, 
        /* removeSearch= */ true);
    }
    async onSitesChanged_(sites) {
        this.headerString_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckNotificationPermissionReviewHeaderLabel', sites.length);
    }
}
customElements.define(SettingsSafetyCheckNotificationPermissionsElement.is, SettingsSafetyCheckNotificationPermissionsElement);

function getTemplate$1() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared"></style>
<settings-safety-check-child id="safetyCheckChild" icon-status="[[iconStatus_]]" label="[[headerString_]]" button-label="$i18n{safetyCheckReview}" button-aria-label="$i18n{safetyCheckUnusedSitePermissionsHeaderAriaLabel}" on-button-click="onButtonClick_" role="presentation" class="two-line">
</settings-safety-check-child><!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-safety-unused-site-permissions' is the settings page containing the
 * safety check unused site permissions module showing the unused sites that has
 * some granted permissions.
 */
// clang-format off
const SettingsSafetyCheckUnusedSitePermissionsElementBase = WebUiListenerMixin(PolymerElement);
class SettingsSafetyCheckUnusedSitePermissionsElement extends SettingsSafetyCheckUnusedSitePermissionsElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = SafetyHubBrowserProxyImpl.getInstance();
        this.metricsBrowserProxy_ = MetricsBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-safety-check-unused-site-permissions';
    }
    static get template() {
        return getTemplate$1();
    }
    static get properties() {
        return {
            iconStatus_: {
                type: SafetyCheckIconStatus,
                value() {
                    return SafetyCheckIconStatus.UNUSED_SITE_PERMISSIONS;
                },
            },
            headerString_: String,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // Register for review notification permission list updates.
        this.addWebUiListener(SafetyHubEvent.UNUSED_PERMISSIONS_MAYBE_CHANGED, (sites) => {
            this.onSitesChanged_(sites);
        });
        this.browserProxy_.getRevokedUnusedSitePermissionsList().then(this.onSitesChanged_.bind(this));
    }
    async onSitesChanged_(sites) {
        this.headerString_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckUnusedSitePermissionsHeaderLabel', sites.length);
    }
    onButtonClick_() {
        // Log click both in action and histogram.
        this.metricsBrowserProxy_.recordSafetyCheckInteractionHistogram(SafetyCheckInteractions.UNUSED_SITE_PERMISSIONS_REVIEW);
        this.metricsBrowserProxy_.recordAction('Settings.SafetyCheck.ReviewUnusedSitePermissions');
        Router.getInstance().navigateTo(routes.SITE_SETTINGS, /* dynamicParams= */ undefined, 
        /* removeSearch= */ true);
    }
}
customElements.define(SettingsSafetyCheckUnusedSitePermissionsElement.is, SettingsSafetyCheckUnusedSitePermissionsElement);

function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared">:host{--icon-size:var(--search-engine-icon-size, 24px)}.subtitle{font-size:.75rem;line-height:22px}.title{margin:0 0 16px}.dialog-body{color:var(--cr-primary-text-color)}.search-engine{align-items:center;display:flex;flex-direction:row;gap:16px}site-favicon{--site-favicon-border-radius:4px;--site-favicon-height:var(--icon-size);--site-favicon-width:var(--icon-size)}#setAsDefaultButton{margin-inline-start:12px}cr-dialog{--cr-dialog-body-padding-horizontal:16px;--cr-dialog-button-container-padding-horizontal:24px;--cr-dialog-button-container-padding-bottom:24px;--cr-dialog-button-container-padding-top:24px;--cr-dialog-title-slot-padding-bottom:16px;--cr-dialog-title-slot-padding-end:16px;--cr-dialog-title-slot-padding-start:16px;--cr-dialog-title-slot-padding-top:16px}cr-dialog::part(body-container){max-height:360px}cr-radio-button{--cr-radio-button-size:20px;margin:0 16px}</style>

<cr-dialog id="dialog" on-cancel="onCancelClick_" show-on-attach>
  <div slot="title">
    <div class="title">$i18n{searchPageTitle}</div>
    <div class="subtitle">
      $i18n{searchEnginesSettingsDialogSubtitle}
    </div>
  </div>
  <div slot="body" class="dialog-body">
    <cr-radio-group selected="{{selectedEngineId_}}">
      <template is="dom-repeat" items="[[searchEngines]]">
        <cr-radio-button class="label-first" name="[[item.id]]">
          <div class="search-engine">
            <site-favicon favicon-url="[[item.iconURL]]" url="[[item.url]]" icon-path="[[item.iconPath]]">
            </site-favicon>
            [[item.name]]
          </div>
        </cr-radio-button>
      </template>
    </cr-radio-group>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" on-click="onCancelClick_">
      $i18n{searchEnginesCancelButton}
    </cr-button>
    <cr-button id="setAsDefaultButton" class="action-button" on-click="onSetAsDefaultClick_" disabled="[[!searchEngines.length]]">
      $i18n{searchEnginesSetAsDefaultButton}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 *
 * 'settings-search-engine-list-dialog' is the dialog shown for displaying the
 * list of search engines from which the user can choose a default.
 */
const SettingsSearchEngineListDialogElementBase = WebUiListenerMixin(PolymerElement);
class SettingsSearchEngineListDialogElement extends SettingsSearchEngineListDialogElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = SearchEnginesBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-search-engine-list-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * List of search engines available.
             */
            searchEngines: {
                type: Array,
                observer: 'searchEnginesChanged_',
            },
            /**
             * The id of the search engine that is selected by the user.
             */
            selectedEngineId_: {
                type: String,
                value: '',
            },
        };
    }
    onSetAsDefaultClick_() {
        const searchEngine = this.searchEngines.find(engine => engine.id === parseInt(this.selectedEngineId_));
        assert(searchEngine);
        this.browserProxy_.setDefaultSearchEngine(searchEngine.modelIndex, ChoiceMadeLocation.SEARCH_SETTINGS);
        this.dispatchEvent(new CustomEvent('search-engine-changed', {
            bubbles: true,
            composed: true,
            detail: {
                searchEngine: searchEngine,
            },
        }));
        this.$.dialog.close();
    }
    onCancelClick_() {
        this.$.dialog.close();
    }
    searchEnginesChanged_() {
        if (!this.searchEngines.length) {
            return;
        }
        const defaultSearchEngine = this.searchEngines.find(searchEngine => searchEngine.default);
        assert(defaultSearchEngine);
        this.selectedEngineId_ = defaultSearchEngine.id.toString();
    }
}
customElements.define(SettingsSearchEngineListDialogElement.is, SettingsSearchEngineListDialogElement);

export { AboutPageBrowserProxyImpl, AccountManagerBrowserProxyImpl, AppearanceBrowserProxyImpl, BATTERY_SAVER_MODE_PREF, BaseMixin, BatterySaverModeState, ChoiceMadeLocation, ColorSchemeMode, CrDrawerElement, CrSettingsPrefs, CrToolbarElement, CrToolbarSearchFieldElement, CustomizeColorSchemeModeBrowserProxy, CustomizeColorSchemeModeClientCallbackRouter, CustomizeColorSchemeModeClientRemote, CustomizeColorSchemeModeHandlerRemote, EDIT_STARTUP_URL_EVENT, ExceptionAddDialogElement, ExceptionAddDialogTabs, ExceptionEditDialogElement, ExceptionEntryElement, ExceptionListElement, ExceptionTabbedAddDialogElement, FeatureOptInState, HatsBrowserProxyImpl, HomeUrlInputElement, MAX_TAB_DISCARD_EXCEPTION_RULE_LENGTH, MEMORY_SAVER_MODE_PREF, MemorySaverModeExceptionListAction, MemorySaverModeState, MetricsBrowserProxyImpl, OnStartupBrowserProxyImpl, OpenWindowProxyImpl, PasswordCheckReferrer, PasswordManagerImpl, PasswordManagerPage, PerformanceBrowserProxyImpl, PerformanceMetricsProxyImpl, PrefsMixin, PrivacyGuideBrowserProxyImpl, PrivacyGuideInteractions, PrivacyPageBrowserProxyImpl, ProfileInfoBrowserProxyImpl, RelaunchMixin, ResetBrowserProxyImpl, RestartType, Router, SafetyCheckBrowserProxyImpl, SafetyCheckCallbackConstants, SafetyCheckExtensionsBrowserProxyImpl, SafetyCheckExtensionsElement, SafetyCheckExtensionsStatus, SafetyCheckIconStatus, SafetyCheckInteractions, SafetyCheckParentStatus, SafetyCheckPasswordsStatus, SafetyCheckSafeBrowsingStatus, SafetyCheckUpdatesStatus, SafetyHubEntryPoint, SearchEnginesBrowserProxyImpl, SearchRequest, SettingsAboutPageElement, SettingsAiPageElement, SettingsAiPageFeaturePrefName, SettingsAppearancePageElement, SettingsAutofillPageElement, SettingsBasicPageElement, SettingsBatteryPageElement, SettingsCheckboxListEntryElement, SettingsIdleLoadElement, SettingsMainElement, SettingsMenuElement, SettingsOnStartupPageElement, SettingsPeoplePageElement, SettingsPerformancePageElement, PluralStringProxyImpl as SettingsPluralStringProxyImpl, SettingsPrivacyPageElement, SettingsResetProfileBannerElement, SettingsSafetyCheckChildElement, SettingsSafetyCheckExtensionsChildElement, SettingsSafetyCheckNotificationPermissionsElement, SettingsSafetyCheckPageElement, SettingsSafetyCheckPasswordsChildElement, SettingsSafetyCheckSafeBrowsingChildElement, SettingsSafetyCheckUnusedSitePermissionsElement, SettingsSafetyCheckUpdatesChildElement, SettingsSearchEngineListDialogElement, SettingsSearchPageElement, SettingsSectionElement, SettingsStartupUrlDialogElement, SettingsStartupUrlEntryElement, SettingsStartupUrlsPageElement, SettingsUiElement, SpeedPageElement, StartupUrlsPageBrowserProxyImpl, SyncBrowserProxyImpl, SystemTheme, TAB_DISCARD_EXCEPTIONS_MANAGED_PREF, TAB_DISCARD_EXCEPTIONS_OVERFLOW_SIZE, TAB_DISCARD_EXCEPTIONS_PREF, TooltipMixin, TrustSafetyInteraction, UpdateStatus, convertDateToWindowsEpoch, getSearchManager, pageVisibility, routes, setSearchManagerForTesting };
//# sourceMappingURL=settings.rollup.js.map

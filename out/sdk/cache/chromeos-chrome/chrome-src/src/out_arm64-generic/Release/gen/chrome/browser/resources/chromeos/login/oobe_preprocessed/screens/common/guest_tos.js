// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview guest tos screen implementation.
 */

import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '//resources/js/action_link.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/oobe_icons.html.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/dialogs/oobe_modal_dialog.js';

import {html, mixinBehaviors, Polymer, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import {sanitizeInnerHtml} from 'chrome://resources/js/parse_html_subset.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OobeBackButton} from '../../components/buttons/oobe_back_button.js';
import {OobeNextButton} from '../../components/buttons/oobe_next_button.js';
import {OobeTextButton} from '../../components/buttons/oobe_text_button.js';
import {OobeAdaptiveDialog} from '../../components/dialogs/oobe_adaptive_dialog.js';
import {OOBE_UI_STATE} from '../../components/display_manager_types.js';
import {ContentType, WebViewHelper} from '../../components/web_view_helper.js';
import {WebViewLoader} from '../../components/web_view_loader.js';


// Enum that describes the current state of the Guest ToS screen
const GuestTosScreenState = {
  LOADING: 'loading',
  LOADED: 'loaded',
  GOOGLE_EULA: 'google-eula',
  CROS_EULA: 'cros-eula',
};

/**
 * URL to use when online page is not available.
 * @type {string}
 */
const GUEST_TOS_EULA_TERMS_URL = 'chrome://terms';

/**
 * Timeout to load online ToS.
 * @type {number}
 */
const GUEST_TOS_ONLINE_LOAD_TIMEOUT_IN_MS = 10000;

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const GuestTosScreenElementBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * @polymer
 */
class GuestTos extends GuestTosScreenElementBase {
  static get is() {
    return 'guest-tos-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2021 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles cros-color-overrides">
  #termsTitle {
    color: var(--oobe-text-color);
    font-family: var(--oobe-guest-tos-terms-title-font-family);
    font-size: var(--oobe-guest-tos-terms-title-font-size);
    font-weight: var(--oobe-guest-tos-terms-title-font-weight);
    line-height: var(--oobe-guest-tos-terms-title-line-height);
    margin-bottom: 4px;
  }

  .tos-webview {
    display: flex;
    height: 470px;
  }
</style>

<!-- LOADING DIALOG -->
<oobe-loading-dialog id="loading" for-step="loading" role="dialog"
    title-key="guestTosLoading"
    aria-label$="[[i18nDynamic(locale, 'guestTosLoading')]]">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
</oobe-loading-dialog>

<!-- Google EULA Dialog -->
<oobe-adaptive-dialog id="googleEulaDialog" for-step="google-eula"
    role="dialog"
    aria-label$="[[i18nDynamic(locale, 'guestTosGoogleEulaTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'guestTosGoogleEulaTitle')]]
  </h1>
  <div slot="content" class="flex layout vertical">
    <webview id="guestTosGoogleEulaWebview" role="document"
        class="oobe-tos-webview tos-webview"
        on-contentload="onGoogleEulaContentLoad_">
    </webview>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="googleEulaOkButton"
        class="focus-on-show" inverse on-click="onTermsStepOkClick_"
        text-key="guestTosOk"></oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<!-- CrOS EULA Dialog -->
<oobe-adaptive-dialog id="crosEulaDialog" for-step="cros-eula"
role="dialog"
aria-label$="[[i18nDynamic(locale, 'guestTosCrosEulaTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'guestTosCrosEulaTitle')]]
  </h1>
  <div slot="content" class="flex layout vertical">
    <webview id="guestTosCrosEulaWebview" role="document"
        class="oobe-tos-webview tos-webview">
    </webview>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="crosEulaOkButton"
        class="focus-on-show" inverse on-click="onTermsStepOkClick_"
        text-key="guestTosOk"></oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<!-- Loaded Dialog -->
<oobe-adaptive-dialog id="loaded" for-step="loaded" role="dialog"
aria-label$="[[i18nDynamic(locale, 'guestTosTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:avatar"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'guestTosTitle')]]
  </h1>
  <div slot="content" class="landscape-header-aligned">
    <div id="termsTitle">
      [[i18nDynamic(locale, 'guestTosTermsTitle')]]
    </div>
    <div id="terms">
      <div inner-h-t-m-l="[[getTerms_(locale)]]">
      </div>
    </div>

    <!-- Usage stats toggle row -->
    <div id="usageStats" class="layout horizontal center oobe-optin-row">
      <div class="oobe-optin-content">
        <span id="usageTitle" class="oobe-optin-title">
          [[i18nDynamic(locale, 'guestTosUsageOptinTitle')]]
        </span>
        [[i18nDynamic(locale, 'guestTosUsageOptin')]]
        <a id="usageLearnMore" on-click="onUsageLearnMoreClick_"
            class="oobe-local-link" is="action-link">
          [[i18nDynamic(locale, 'guestTosLearnMore')]]
        </a>
      </div>
      <cr-toggle id="usageOptin" checked="{{usageChecked}}"
          aria-describedby="usageTitle">
      </cr-toggle>
    </div>
  </div>
  <div slot="back-navigation">
    <oobe-back-button on-click="onBackClick_"></oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button id="acceptButton" inverse on-click="onAcceptClick_"
        text-key="guestTosAccept" class="focus-on-show">
    </oobe-next-button>
  </div>
</oobe-adaptive-dialog>

<oobe-modal-dialog id="usageLearnMorePopUp">
  <div slot="content">
    <span inner-h-t-m-l="[[getUsageLearnMoreText_(locale)]]"></span>
  </div>
</oobe-modal-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      usageChecked: {
        type: Boolean,
        value: true,
      },
    };
  }

  /** @override */
  defaultUIStep() {
    return GuestTosScreenState.LOADING;
  }

  get UI_STEPS() {
    return GuestTosScreenState;
  }
  // clang-format on

  /** @override */
  ready() {
    super.ready();
    this.initializeLoginScreen('GuestTosScreen');
    this.updateLocalizedContent();
  }

  onBeforeShow(data) {
    const googleEulaUrl = data['googleEulaUrl'];
    const crosEulaUrl = data['crosEulaUrl'];

    this.loadEulaWebview_(
        this.$.guestTosGoogleEulaWebview, googleEulaUrl,
        false /* clear_anchors */);
    this.loadEulaWebview_(
        this.$.guestTosCrosEulaWebview, crosEulaUrl, true /* clear_anchors */);

    // Call updateLocalizedContent() to ensure that the listeners of the click
    // events on the ToS links are added.
    this.updateLocalizedContent();
  }

  /** Initial UI State for screen */
  getOobeUIInitialState() {
    return OOBE_UI_STATE.HIDDEN;
  }

  updateLocalizedContent() {
    this.shadowRoot.querySelector('#googleEulaLink')
        .addEventListener('click', () => this.onGoogleEulaLinkClick_());
    this.shadowRoot.querySelector('#crosEulaLink')
        .addEventListener('click', () => this.onCrosEulaLinkClick_());
  }

  loadEulaWebview_(webview, online_tos_url, clear_anchors) {
    const loadFailureCallback = () => {
      WebViewHelper.loadUrlContentToWebView(
          webview, GUEST_TOS_EULA_TERMS_URL, ContentType.HTML);
    };

    const tosLoader = new WebViewLoader(
        webview, GUEST_TOS_ONLINE_LOAD_TIMEOUT_IN_MS, loadFailureCallback,
        clear_anchors, true /* inject_css */);
    tosLoader.setUrl(online_tos_url);
  }

  getTerms_(locale) {
    const terms = document.createElement('div');
    terms.innerHTML = this.i18nAdvanced('guestTosTerms', {attrs: ['id']});

    const googleEulaLink = terms.querySelector('#googleEulaLink');
    googleEulaLink.setAttribute('is', 'action-link');
    googleEulaLink.classList.add('oobe-local-link');

    const crosEulaLink = terms.querySelector('#crosEulaLink');
    crosEulaLink.setAttribute('is', 'action-link');
    crosEulaLink.classList.add('oobe-local-link');

    return sanitizeInnerHtml(
        terms.innerHTML, {tags: ['a'], attrs: ['id', 'is', 'class']});
  }

  getUsageLearnMoreText_(locale) {
    return this.i18nAdvanced('guestTosUsageOptInLearnMore');
  }

  onGoogleEulaLinkClick_() {
    this.setUIStep(GuestTosScreenState.GOOGLE_EULA);
  }

  onCrosEulaLinkClick_() {
    this.setUIStep(GuestTosScreenState.CROS_EULA);
  }

  onGoogleEulaContentLoad_() {
    if (this.uiStep == GuestTosScreenState.LOADING) {
      this.setUIStep(GuestTosScreenState.LOADED);
    }
  }

  onUsageLearnMoreClick_() {
    this.$.usageLearnMorePopUp.showDialog();
  }

  onTermsStepOkClick_() {
    this.setUIStep(GuestTosScreenState.LOADED);
  }

  onAcceptClick_() {
    this.userActed(['guest-tos-accept', this.usageChecked]);
  }

  onBackClick_() {
    this.userActed('back-button');
  }

  cancel() {
    this.userActed('cancel');
  }
}

customElements.define(GuestTos.is, GuestTos);

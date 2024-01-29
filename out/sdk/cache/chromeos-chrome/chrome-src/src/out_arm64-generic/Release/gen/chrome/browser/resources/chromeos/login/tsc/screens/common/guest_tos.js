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
import { assert } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OobeModalDialog } from '../../components/dialogs/oobe_modal_dialog.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { ContentType, WebViewHelper } from '../../components/web_view_helper.js';
import { WebViewLoader } from '../../components/web_view_loader.js';
import { getTemplate } from './guest_tos.html.js';
// Enum that describes the current state of the Guest ToS screen
var GuestTosScreenState;
(function (GuestTosScreenState) {
    GuestTosScreenState["LOADING"] = "loading";
    GuestTosScreenState["OVERVIEW"] = "overview";
    GuestTosScreenState["GOOGLE_EULA"] = "google-eula";
    GuestTosScreenState["CROS_EULA"] = "cros-eula";
})(GuestTosScreenState || (GuestTosScreenState = {}));
/**
 * URL to use when online page is not available.
 */
const GUEST_TOS_EULA_TERMS_URL = 'chrome://terms';
/**
 * Timeout to load online ToS.
 */
const GUEST_TOS_ONLINE_LOAD_TIMEOUT_IN_MS = 10000;
const GuestTosScreenElementBase = mixinBehaviors([
    OobeI18nBehavior,
    LoginScreenBehavior,
    MultiStepBehavior,
], PolymerElement);
export class GuestTos extends GuestTosScreenElementBase {
    static get is() {
        return 'guest-tos-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            usageChecked: {
                type: Boolean,
                value: true,
            },
        };
    }
    constructor() {
        super();
        // Online URLs
        this.googleEulaUrl = '';
        this.crosEulaUrl = '';
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return GuestTosScreenState.OVERVIEW;
    }
    get UI_STEPS() {
        return GuestTosScreenState;
    }
    // clang-format on
    ready() {
        super.ready();
        this.initializeLoginScreen('GuestTosScreen');
        this.updateLocalizedContent();
    }
    /**
     * @param data Screen init payload.
     */
    onBeforeShow(data) {
        this.googleEulaUrl = data['googleEulaUrl'];
        this.crosEulaUrl = data['crosEulaUrl'];
        // Call updateLocalizedContent() to ensure that the listeners of the click
        // events on the ToS links are added.
        this.updateLocalizedContent();
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.HIDDEN;
    }
    updateLocalizedContent() {
        const googleEulaLink = this.shadowRoot?.querySelector('#googleEulaLink');
        assert(googleEulaLink);
        googleEulaLink.addEventListener('click', () => this.onGoogleEulaLinkClick());
        const crosEulaLink = this.shadowRoot?.querySelector('#crosEulaLink');
        assert(crosEulaLink);
        crosEulaLink.addEventListener('click', () => this.onCrosEulaLinkClick());
    }
    showGoogleEula() {
        this.setUIStep(GuestTosScreenState.LOADING);
        const guestTosGoogleEulaWebview = this.shadowRoot?.querySelector('#guestTosGoogleEulaWebview');
        assert(guestTosGoogleEulaWebview);
        this.loadEulaWebview(guestTosGoogleEulaWebview, this.googleEulaUrl, false /* clear_anchors */);
    }
    loadEulaWebview(webview, onlineTosUrl, clearAnchors) {
        const loadFailureCallback = () => {
            WebViewHelper.loadUrlContentToWebView(webview, GUEST_TOS_EULA_TERMS_URL, ContentType.HTML);
        };
        const tosLoader = new WebViewLoader(webview, GUEST_TOS_ONLINE_LOAD_TIMEOUT_IN_MS, loadFailureCallback, clearAnchors, true /* inject_css */);
        tosLoader.setUrl(onlineTosUrl);
    }
    onGoogleEulaContentLoad() {
        this.setUIStep(GuestTosScreenState.GOOGLE_EULA);
    }
    showCrosEula() {
        this.setUIStep(GuestTosScreenState.LOADING);
        const guestTosCrosEulaWebview = this.shadowRoot?.querySelector('#guestTosCrosEulaWebview');
        assert(guestTosCrosEulaWebview);
        this.loadEulaWebview(guestTosCrosEulaWebview, this.crosEulaUrl, true /* clear_anchors */);
    }
    onCrosEulaContentLoad() {
        this.setUIStep(GuestTosScreenState.CROS_EULA);
    }
    getTerms(locale) {
        const terms = document.createElement('div');
        terms.innerHTML =
            this.i18nAdvancedDynamic(locale, 'guestTosTerms', { attrs: ['id'] });
        const googleEulaLink = terms.querySelector('#googleEulaLink');
        assert(googleEulaLink);
        googleEulaLink.setAttribute('is', 'action-link');
        googleEulaLink.classList.add('oobe-local-link');
        const crosEulaLink = terms.querySelector('#crosEulaLink');
        assert(crosEulaLink);
        crosEulaLink.setAttribute('is', 'action-link');
        crosEulaLink.classList.add('oobe-local-link');
        return sanitizeInnerHtml(terms.innerHTML, { tags: ['a'], attrs: ['id', 'is', 'class'] });
    }
    getUsageLearnMoreText(locale) {
        return this.i18nAdvancedDynamic(locale, 'guestTosUsageOptInLearnMore');
    }
    onGoogleEulaLinkClick() {
        this.showGoogleEula();
    }
    onCrosEulaLinkClick() {
        this.showCrosEula();
    }
    onUsageLearnMoreClick() {
        const usageLearnMorePopUp = this.shadowRoot?.querySelector('#usageLearnMorePopUp');
        if (usageLearnMorePopUp instanceof OobeModalDialog) {
            usageLearnMorePopUp.showDialog();
        }
    }
    onTermsStepOkClick() {
        this.setUIStep(GuestTosScreenState.OVERVIEW);
    }
    onAcceptClick() {
        this.userActed(['guest-tos-accept', this.usageChecked]);
    }
    onBackClick() {
        this.userActed('back-button');
    }
    cancel() {
        this.userActed('cancel');
    }
}
customElements.define(GuestTos.is, GuestTos);

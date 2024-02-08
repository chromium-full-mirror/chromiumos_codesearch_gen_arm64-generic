/* Copyright 2017 The Chromium Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import './icons.html.js';
import './strings.m.js';
import './signin_shared.css.js';
import './signin_vars.css.js';
import './tangible_sync_style_shared.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './sync_confirmation_app.html.js';
import { SyncConfirmationBrowserProxyImpl } from './sync_confirmation_browser_proxy.js';
// LINT.IfChange(screen_mode)
/**
 * In PENDING mode, the screen should not show consent buttons and indicate that
 * some loading is pending. In RESTRICTED mode, the button must not be weighted,
 * and in UNRESTRICTED mode they can be.
 *
 * In UNSUPPORTED mode, the client take any behavior.
 */
var ScreenMode;
(function (ScreenMode) {
    ScreenMode[ScreenMode["UNSUPPORTED"] = 0] = "UNSUPPORTED";
    ScreenMode[ScreenMode["PENDING"] = 1] = "PENDING";
    ScreenMode[ScreenMode["RESTRICTED"] = 2] = "RESTRICTED";
    ScreenMode[ScreenMode["UNRESTRICTED"] = 3] = "UNRESTRICTED";
})(ScreenMode || (ScreenMode = {}));
const SyncConfirmationAppElementBase = WebUiListenerMixin(I18nMixin(PolymerElement));
export class SyncConfirmationAppElement extends SyncConfirmationAppElementBase {
    constructor() {
        super(...arguments);
        this.syncConfirmationBrowserProxy_ = SyncConfirmationBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'sync-confirmation-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            accountImageSrc_: {
                type: String,
                value() {
                    return loadTimeData.getString('accountPictureUrl');
                },
            },
            anyButtonClicked_: {
                type: Boolean,
                value: false,
            },
            isModalDialog_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isModalDialog');
                },
            },
            showEnterpriseBadge_: {
                type: Boolean,
                value: false,
            },
            syncBenefitsList_: {
                type: Array,
                value() {
                    return JSON.parse(loadTimeData.getString('syncBenefitsList'));
                },
            },
            /**
             * Whether to show the new UI for Browser Sync Settings and which include
             * sublabel and Apps toggle shared between Ash and Lacros.
             */
            useClickableSyncInfoDesc_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('useClickableSyncInfoDesc');
                },
            },
            /** Determines the screen mode. */
            screenMode_: {
                type: ScreenMode,
                value() {
                    return loadTimeData.getInteger('screenMode');
                },
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('account-info-changed', this.handleAccountInfoChanged_.bind(this));
        this.syncConfirmationBrowserProxy_.requestAccountInfo();
        setTimeout(() => {
            this.defaultToRestrictedModeIfStillPending();
        }, /*delay in ms=*/ 2000);
    }
    onConfirm_(e) {
        this.anyButtonClicked_ = true;
        this.syncConfirmationBrowserProxy_.confirm(this.getConsentDescription_(), this.getConsentConfirmation_(e.composedPath()));
    }
    onUndo_() {
        this.anyButtonClicked_ = true;
        this.syncConfirmationBrowserProxy_.undo();
    }
    onGoToSettings_(e) {
        this.anyButtonClicked_ = true;
        this.syncConfirmationBrowserProxy_.goToSettings(this.getConsentDescription_(), this.getConsentConfirmation_(e.composedPath()));
    }
    /**
     * @param path Path of the click event. Must contain a consent confirmation
     *     element.
     * @return The text of the consent confirmation element.
     */
    getConsentConfirmation_(path) {
        for (const element of path) {
            if (element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE &&
                element.hasAttribute('consent-confirmation')) {
                return element.innerHTML.trim();
            }
        }
        assertNotReached('No consent confirmation element found.');
    }
    /** @return Text of the consent description elements. */
    getConsentDescription_() {
        const consentDescription = Array.from(this.shadowRoot.querySelectorAll('[consent-description]'))
            .filter(element => element.getBoundingClientRect().width *
            element.getBoundingClientRect().height >
            0)
            .map(element => element.hasAttribute('localized-string') ?
            element.getAttribute('localized-string') :
            element.innerHTML.trim());
        assert(consentDescription.length);
        return consentDescription;
    }
    // Called when the account information changes: it might be either the image
    // or determined mode of screen restriction (derived from the
    // canShowHistorySyncOptInsWithoutMinorModeRestriction capability).
    handleAccountInfoChanged_(accountInfo) {
        this.accountImageSrc_ = accountInfo.src;
        this.showEnterpriseBadge_ = accountInfo.showEnterpriseBadge;
        // Only allow this change once, from PENDING mode to (UN)RESTRICTED.
        if (this.screenMode_ === ScreenMode.PENDING) {
            this.screenMode_ = accountInfo.screenMode;
        }
    }
    defaultToRestrictedModeIfStillPending() {
        if (this.screenMode_ === ScreenMode.PENDING) {
            this.screenMode_ = ScreenMode.RESTRICTED;
        }
    }
    getConfirmButtonClass_(screenMode) {
        return screenMode === ScreenMode.UNRESTRICTED ? 'action-button' : '';
    }
    isPending_(screenMode) {
        return screenMode === ScreenMode.PENDING;
    }
    shouldHideEnterpriseBadge_(screenMode, showEnterpriseBadge) {
        return !showEnterpriseBadge || screenMode === ScreenMode.PENDING;
    }
    /**
     * Called when the link to the device's sync settings is clicked.
     */
    onDisclaimerClicked_(event) {
        // Prevent the default link click behavior.
        event.detail.event.preventDefault();
        // Programmatically open device's sync settings.
        this.syncConfirmationBrowserProxy_.openDeviceSyncSettings();
    }
    /**
     * Returns the name of class to apply on some tags to enable animations.
     * May be empty if no animations should be added.
     */
    getAnimationClass_() {
        return !this.isModalDialog_ ? 'fade-in' : '';
    }
    /**
     * Returns either "dialog" or an empty string.
     *
     * The returned value is intended to be added as a class on the root tags of
     * the element. Some styles from `tangible_sync_style_shared.css` rely on the
     * presence of this "dialog" class.
     */
    getMaybeDialogClass_() {
        return this.isModalDialog_ ? 'dialog' : '';
    }
}
customElements.define(SyncConfirmationAppElement.is, SyncConfirmationAppElement);

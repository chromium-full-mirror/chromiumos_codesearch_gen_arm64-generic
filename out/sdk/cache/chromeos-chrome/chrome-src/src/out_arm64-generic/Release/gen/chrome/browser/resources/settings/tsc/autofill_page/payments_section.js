// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-payments-section' is the section containing saved
 * credit cards for use in autofill and payments APIs.
 */
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '../settings_shared.css.js';
import '/shared/settings/controls/settings_toggle_button.js';
import './credit_card_edit_dialog.js';
import './iban_edit_dialog.js';
import '../simple_confirmation_dialog.js';
import './passwords_shared.css.js';
import './payments_list.js';
import './virtual_card_unenroll_dialog.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { MetricsBrowserProxyImpl, PrivacyElementInteractions } from '../metrics_browser_proxy.js';
import { PaymentsManagerImpl } from './payments_manager_proxy.js';
import { getTemplate } from './payments_section.html.js';
const SettingsPaymentsSectionElementBase = I18nMixin(PolymerElement);
export class SettingsPaymentsSectionElement extends SettingsPaymentsSectionElementBase {
    constructor() {
        super(...arguments);
        this.paymentsManager_ = PaymentsManagerImpl.getInstance();
        this.setPersonalDataListener_ = null;
    }
    static get is() {
        return 'settings-payments-section';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            prefs: Object,
            /**
             * An array of all saved credit cards.
             */
            creditCards: {
                type: Array,
                value: () => [],
            },
            /**
             * An array of all saved IBANs.
             */
            ibans: {
                type: Array,
                value: () => [],
            },
            /**
             * Set to true if user can be verified through FIDO authentication.
             */
            userIsFidoVerifiable_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('fidoAuthenticationAvailableForAutofill');
                },
            },
            /**
             * Whether IBAN is supported in Settings page.
             */
            showIbanSettingsEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('showIbansSettings');
                },
                readOnly: true,
            },
            /**
             * GPay-related links direct to the newer GPay Web site instead of
             * the legacy Payments Center.
             */
            updateChromeSettingsLinkToGPayWebEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('updateChromeSettingsLinkToGPayWebEnabled');
                },
                readOnly: true,
            },
            /**
             * The model for any credit card-related action menus or dialogs.
             */
            activeCreditCard_: Object,
            /**
             * The model for any IBAN-related action menus or dialogs.
             */
            activeIban_: Object,
            showCreditCardDialog_: Boolean,
            showIbanDialog_: Boolean,
            showLocalCreditCardRemoveConfirmationDialog_: Boolean,
            showLocalIbanRemoveConfirmationDialog_: Boolean,
            showVirtualCardUnenrollDialog_: Boolean,
            migratableCreditCardsInfo_: String,
            showBulkRemoveCvcConfirmationDialog_: Boolean,
            /**
             * Whether migration local card on settings page is enabled.
             */
            migrationEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('migrationEnabled');
                },
                readOnly: true,
            },
            /**
             * Checks if we can use device authentication to authenticate the user.
             */
            // 
            /**
             * Whether the feature flag for mandatory re-auth is enabled.
             */
            mandatoryReauthFeatureEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('autofillEnablePaymentsMandatoryReauth');
                },
            },
            /**
             * Checks if CVC storage is available based on the feature flag.
             */
            cvcStorageAvailable_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('cvcStorageAvailable');
                },
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        // Create listener function.
        const setCreditCardsListener = (cardList) => {
            this.creditCards = cardList;
        };
        // Update |userIsFidoVerifiable_| based on the availability of a platform
        // authenticator.
        this.paymentsManager_.isUserVerifyingPlatformAuthenticatorAvailable().then(r => {
            if (r === null) {
                return;
            }
            this.userIsFidoVerifiable_ = this.userIsFidoVerifiable_ && r;
        });
        const setPersonalDataListener = (_addressList, cardList, ibanList) => {
            this.creditCards = cardList;
            this.ibans = ibanList;
        };
        const setIbansListener = (ibanList) => {
            this.ibans = ibanList;
        };
        // Remember the bound reference in order to detach.
        this.setPersonalDataListener_ = setPersonalDataListener;
        // Request initial data.
        this.paymentsManager_.getCreditCardList().then(setCreditCardsListener);
        this.paymentsManager_.getIbanList().then(setIbansListener);
        // Listen for changes.
        this.paymentsManager_.setPersonalDataManagerListener(setPersonalDataListener);
        // 
        // Record that the user opened the payments settings.
        chrome.metricsPrivate.recordUserAction('AutofillCreditCardsViewed');
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.paymentsManager_.removePersonalDataManagerListener(this.setPersonalDataListener_);
        this.setPersonalDataListener_ = null;
    }
    /**
     * Returns true if IBAN should be shown from settings page.
     * TODO(crbug.com/1352606): Add additional check (starter country-list, or
     * the saved-pref-boolean on if the user has submitted an IBAN form).
     */
    shouldShowIbanSettings_() {
        return this.showIbanSettingsEnabled_;
    }
    /**
     * Opens the dropdown menu to add a credit/debit card or IBAN.
     */
    onAddPaymentMethodClick_(e) {
        const target = e.currentTarget;
        const menu = this.shadowRoot
            .querySelector('#paymentMethodsActionMenu').get();
        assert(menu);
        menu.showAt(target, {
            anchorAlignmentX: AnchorAlignment.BEFORE_END,
            anchorAlignmentY: AnchorAlignment.AFTER_END,
            noOffset: true,
        });
    }
    /**
     * Opens the credit card action menu.
     */
    onCreditCardDotsMenuClick_(e) {
        // Copy item so dialog won't update model on cancel.
        this.activeCreditCard_ = e.detail.creditCard;
        this.$.creditCardSharedMenu.showAt(e.detail.anchorElement);
    }
    /**
     * Opens the IBAN action menu.
     */
    onDotsIbanMenuClick_(e) {
        // Copy item so dialog won't update model on cancel.
        this.activeIban_ = e.detail.iban;
        this.$.ibanSharedActionMenu.get().showAt(e.detail.anchorElement);
    }
    /**
     * Handles clicking on the "Add credit card" button.
     */
    onAddCreditCardClick_(e) {
        e.preventDefault();
        const date = new Date(); // Default to current month/year.
        const expirationMonth = date.getMonth() + 1; // Months are 0 based.
        this.activeCreditCard_ = {
            expirationMonth: expirationMonth.toString(),
            expirationYear: date.getFullYear().toString(),
        };
        this.showCreditCardDialog_ = true;
        if (this.showIbanSettingsEnabled_) {
            const menu = this.shadowRoot
                .querySelector('#paymentMethodsActionMenu').get();
            assert(menu);
            menu.close();
        }
    }
    onCreditCardDialogClose_() {
        this.showCreditCardDialog_ = false;
        this.activeCreditCard_ = null;
    }
    /**
     * Handles clicking on the add "IBAN" option.
     */
    onAddIbanClick_(e) {
        e.preventDefault();
        this.showIbanDialog_ = true;
        const menu = this.shadowRoot
            .querySelector('#paymentMethodsActionMenu').get();
        assert(menu);
        menu.close();
    }
    onIbanDialogClose_() {
        this.showIbanDialog_ = false;
        this.activeIban_ = null;
    }
    /**
     * Handles clicking on the "Edit" credit card button.
     */
    async onMenuEditCreditCardClick_(e) {
        e.preventDefault();
        assert(this.activeCreditCard_);
        if (this.activeCreditCard_.metadata.isLocal) {
            const unmaskedCreditCard = await this.paymentsManager_.getLocalCard(this.activeCreditCard_.guid);
            assert(unmaskedCreditCard);
            this.activeCreditCard_ = unmaskedCreditCard;
            this.showCreditCardDialog_ = true;
        }
        else {
            this.onRemoteCreditCardUrlClick_();
        }
        this.$.creditCardSharedMenu.close();
    }
    onRemoteEditCreditCardClick_(e) {
        this.activeCreditCard_ = e.detail.creditCard;
        this.onRemoteCreditCardUrlClick_();
    }
    onRemoteCreditCardUrlClick_() {
        this.paymentsManager_.logServerCardLinkClicked();
        const url = new URL(loadTimeData.getString('managePaymentMethodsUrl'));
        assert(this.activeCreditCard_);
        if (this.updateChromeSettingsLinkToGPayWebEnabled_ &&
            this.activeCreditCard_.instrumentId) {
            url.searchParams.append('id', this.activeCreditCard_.instrumentId);
        }
        OpenWindowProxyImpl.getInstance().openUrl(url.toString());
    }
    onRemoteEditIbanMenuClick_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('managePaymentMethodsUrl'));
    }
    onLocalCreditCardRemoveConfirmationDialogClose_() {
        // Only remove the credit card entry if the user closed the dialog via the
        // confirmation button (instead of cancel or close).
        const confirmationDialog = this.shadowRoot.querySelector('#localCardDeleteConfirmDialog');
        assert(confirmationDialog);
        if (confirmationDialog.wasConfirmed()) {
            assert(this.activeCreditCard_);
            assert(this.activeCreditCard_.guid);
            const index = this.creditCards.findIndex((card) => card.guid === this.activeCreditCard_.guid);
            if (!this.$.paymentsList.updateFocusBeforeCreditCardRemoval(index)) {
                this.focusHeaderControls_();
            }
            this.paymentsManager_.removeCreditCard(this.activeCreditCard_.guid);
            this.activeCreditCard_ = null;
        }
        this.showLocalCreditCardRemoveConfirmationDialog_ = false;
    }
    /**
     * Handles clicking on the "Remove" credit card button.
     */
    onMenuRemoveCreditCardClick_() {
        this.showLocalCreditCardRemoveConfirmationDialog_ = true;
        this.$.creditCardSharedMenu.close();
    }
    /**
     * Handles clicking on the "Edit" IBAN button.
     */
    onMenuEditIbanClick_(e) {
        e.preventDefault();
        this.showIbanDialog_ = true;
        this.$.ibanSharedActionMenu.get().close();
    }
    onLocalIbanRemoveConfirmationDialogClose_() {
        // Only remove the IBAN entry if the user closed the dialog via the
        // confirmation button (instead of cancel or close).
        const confirmationDialog = this.shadowRoot.querySelector('#localIbanDeleteConfirmationDialog');
        assert(confirmationDialog);
        if (confirmationDialog.wasConfirmed()) {
            assert(this.activeIban_);
            assert(this.activeIban_.guid);
            const index = this.ibans.findIndex((iban) => iban.guid === this.activeIban_.guid);
            if (!this.$.paymentsList.updateFocusBeforeIbanRemoval(index)) {
                this.focusHeaderControls_();
            }
            this.paymentsManager_.removeIban(this.activeIban_.guid);
            this.activeIban_ = null;
        }
        this.showLocalIbanRemoveConfirmationDialog_ = false;
    }
    /**
     * Handles clicking on the "Remove" IBAN button.
     */
    onMenuRemoveIbanClick_() {
        assert(this.activeIban_);
        this.showLocalIbanRemoveConfirmationDialog_ = true;
        this.$.ibanSharedActionMenu.get().close();
    }
    /**
     * Handles clicking on the "Clear copy" button for cached credit cards.
     */
    onMenuClearCreditCardClick_() {
        this.paymentsManager_.clearCachedCreditCard(this.activeCreditCard_.guid);
        this.$.creditCardSharedMenu.close();
        this.activeCreditCard_ = null;
    }
    onMenuAddVirtualCardClick_() {
        this.paymentsManager_.addVirtualCard(this.activeCreditCard_.guid);
        this.$.creditCardSharedMenu.close();
        this.activeCreditCard_ = null;
    }
    onMenuRemoveVirtualCardClick_() {
        this.showVirtualCardUnenrollDialog_ = true;
        this.$.creditCardSharedMenu.close();
    }
    onVirtualCardUnenrollDialogClose_() {
        this.showVirtualCardUnenrollDialog_ = false;
        this.activeCreditCard_ = null;
    }
    /**
     * Handles clicking on the "Migrate" button for migrate local credit
     * cards.
     */
    onMigrateCreditCardsClick_() {
        this.paymentsManager_.migrateCreditCards();
    }
    /**
     * Records changes made to the "Allow sites to check if you have payment
     * methods saved" setting to a histogram.
     */
    onCanMakePaymentChange_() {
        MetricsBrowserProxyImpl.getInstance().recordSettingsPageHistogram(PrivacyElementInteractions.PAYMENT_METHOD);
    }
    /**
     * Listens for the save-credit-card event, and calls the private API.
     */
    saveCreditCard_(event) {
        this.paymentsManager_.saveCreditCard(event.detail);
    }
    onSaveIban_(event) {
        this.paymentsManager_.saveIban(event.detail);
    }
    /**
     * @return Whether the user is verifiable through FIDO authentication.
     */
    shouldShowFidoToggle_(creditCardEnabled) {
        return creditCardEnabled && this.userIsFidoVerifiable_ &&
            !this.mandatoryReauthFeatureEnabled_;
    }
    /**
     * Listens for the enable-authentication event, and calls the private API.
     */
    setFidoAuthenticationEnabledState_() {
        this.paymentsManager_.setCreditCardFidoAuthEnabledState(this.shadowRoot
            .querySelector('#autofillCreditCardFIDOAuthToggle').checked);
    }
    /**
     * @return Whether to show the migration button.
     */
    checkIfMigratable_(creditCards, creditCardEnabled) {
        // If migration prerequisites are not met, return false.
        if (!this.migrationEnabled_) {
            return false;
        }
        // If credit card enabled pref is false, return false.
        if (!creditCardEnabled) {
            return false;
        }
        const numberOfMigratableCreditCard = creditCards.filter(card => card.metadata.isMigratable).length;
        // Check whether exist at least one local valid card for migration.
        if (numberOfMigratableCreditCard === 0) {
            return false;
        }
        // Update the display text depends on the number of migratable credit
        // cards.
        this.migratableCreditCardsInfo_ = numberOfMigratableCreditCard === 1 ?
            this.i18n('migratableCardsInfoSingle') :
            this.i18n('migratableCardsInfoMultiple');
        return true;
    }
    getMenuEditCardText_(isLocalCard) {
        return this.i18n(isLocalCard ? 'edit' : 'editServerCard');
    }
    shouldShowAddVirtualCardButton_() {
        if (this.activeCreditCard_ === null || !this.activeCreditCard_.metadata) {
            return false;
        }
        return !!this.activeCreditCard_.metadata
            .isVirtualCardEnrollmentEligible &&
            !this.activeCreditCard_.metadata.isVirtualCardEnrolled;
    }
    shouldShowRemoveVirtualCardButton_() {
        if (this.activeCreditCard_ === null || !this.activeCreditCard_.metadata) {
            return false;
        }
        return !!this.activeCreditCard_.metadata
            .isVirtualCardEnrollmentEligible &&
            !!this.activeCreditCard_.metadata.isVirtualCardEnrolled;
    }
    /**
     * Listens for the unenroll-virtual-card event, and calls the private API.
     */
    unenrollVirtualCard_(event) {
        this.paymentsManager_.removeVirtualCard(event.detail);
    }
    // 
    focusHeaderControls_() {
        const element = this.shadowRoot.querySelector('.header-aligned-button');
        if (element) {
            focusWithoutInk(element);
        }
    }
    /**
     * Checks for user auth before flipping the mandatory auth toggle.
     */
    onMandatoryAuthToggleChange_(e) {
        const mandatoryAuthToggle = e.target;
        assert(mandatoryAuthToggle);
        // The toggle is reset to the value when it was clicked.
        // It will be flipped afterwards if the user auth is successful.
        mandatoryAuthToggle.checked = !mandatoryAuthToggle.checked;
        this.paymentsManager_.authenticateUserAndFlipMandatoryAuthToggle();
    }
    /**
     * Method to handle the clicking of bulk delete all the CVCs.
     */
    onBulkRemoveCvcClick_() {
        assert(this.cvcStorageAvailable_);
        this.showBulkRemoveCvcConfirmationDialog_ = true;
    }
    /**
     * Method to bulk delete all the CVCs present on the local DB.
     * TODO(crbug/1464441): Add the code to delete all the CVCs from the local DB.
     */
    onShowBulkRemoveCvcConfirmationDialogClose_() {
        assert(this.cvcStorageAvailable_);
        this.showBulkRemoveCvcConfirmationDialog_ = false;
    }
    /**
     * Method to return the correct sublabel for the cvc storage toggle.
     * If any card from the list has a cvc, the sublabel with bulk delete
     * hyperlink is returned else return the regular sublabel.
     * @returns Cvc storage toggle sublabel string.
     */
    getCvcStorageSublabel_() {
        const card = this.creditCards.find(cc => !!cc.cvc);
        return this.i18nAdvanced(card === undefined ? 'enableCvcStorageSublabel' :
            'enableCvcStorageDeleteDataSublabel');
    }
}
customElements.define(SettingsPaymentsSectionElement.is, SettingsPaymentsSectionElement);

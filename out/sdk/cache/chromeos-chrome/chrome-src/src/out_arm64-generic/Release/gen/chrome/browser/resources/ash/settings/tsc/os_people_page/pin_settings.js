// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './setup_pin_dialog.js';
import './pin_autosubmit_dialog.js';
import { LockScreenProgress, recordLockScreenProgress } from 'chrome://resources/ash/common/quick_unlock/lock_screen_constants.js';
import { fireAuthTokenInvalidEvent } from 'chrome://resources/ash/common/quick_unlock/utils.js';
import { CrActionMenuElement } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { CrIconButtonElement } from 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { AuthFactor, AuthFactorConfig, ConfigureResult, FactorObserverReceiver, PinFactorEditor } from 'chrome://resources/mojo/chromeos/ash/services/auth_factor_config/public/mojom/auth_factor_config.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { SettingsToggleButtonElement } from '../controls/settings_toggle_button.js';
import { getTemplate } from './pin_settings.html.js';
const SettingsPinSettingsElementBase = WebUiListenerMixin(PolymerElement);
export class SettingsPinSettingsElement extends SettingsPinSettingsElementBase {
    static get is() {
        return 'settings-pin-settings';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            authToken: {
                type: String,
                value: null,
                observer: 'updatePinState_',
            },
            hasPin_: {
                type: Boolean,
                value: false,
            },
            showSetPinDialog_: {
                type: Boolean,
                value: false,
            },
            showPinAutosubmitDialog_: {
                type: Boolean,
                value: false,
            },
            /**
             * True if quick unlock settings are disabled by policy.
             */
            quickUnlockDisabledByPolicy_: {
                type: Boolean,
                value: loadTimeData.getBoolean('quickUnlockDisabledByPolicy'),
            },
        };
    }
    ready() {
        super.ready();
        // Register observer for auth factor updates.
        // TODO(crbug/1321440): Are we leaking |this| here because we never remove
        // the observer? We could close the pipe with |$.close()|, but not clear
        // whether that removes all references to |receiver| and then eventually to
        // |this|.
        const receiver = new FactorObserverReceiver(this);
        const remote = receiver.$.bindNewPipeAndPassRemote();
        AuthFactorConfig.getRemote().observeFactorChanges(remote);
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('quick-unlock-disabled-by-policy-changed', (quickUnlockDisabledByPolicy) => {
            this.quickUnlockDisabledByPolicy_ = quickUnlockDisabledByPolicy;
        });
        chrome.send('RequestQuickUnlockDisabledByPolicy');
    }
    onFactorChanged(factor) {
        switch (factor) {
            case AuthFactor.kPin:
                this.updatePinState_();
                break;
            default:
                return;
        }
    }
    moreButton_() {
        const moreButton = this.shadowRoot.querySelector('#moreButton');
        assert(moreButton instanceof CrIconButtonElement);
        return moreButton;
    }
    moreMenu_() {
        const moreMenu = this.shadowRoot.querySelector('#moreMenu');
        assert(moreMenu instanceof CrActionMenuElement);
        return moreMenu;
    }
    setPinButton_() {
        // We enforce that there is precisely one .set-pin-button attached at any
        // moment.
        const elements = this.shadowRoot.querySelectorAll('.set-pin-button');
        assert(elements.length === 1);
        const setPinButton = elements[0];
        assert(setPinButton instanceof CrButtonElement);
        return setPinButton;
    }
    enablePinAutoSubmitToggle_() {
        const toggle = this.shadowRoot.querySelector('#enablePinAutoSubmit');
        assert(toggle instanceof SettingsToggleButtonElement);
        return toggle;
    }
    /**
     * Fetches the state of the pin factor and updates the corresponding
     * property.
     */
    async updatePinState_() {
        if (typeof this.authToken !== 'string') {
            return;
        }
        const pfe = AuthFactorConfig.getRemote();
        this.hasPin_ =
            (await pfe.isConfigured(this.authToken, AuthFactor.kPin)).configured;
    }
    onSetPinButtonClicked_() {
        recordLockScreenProgress(LockScreenProgress.CHOOSE_PIN_OR_PASSWORD);
        this.showSetPinDialog_ = true;
    }
    onSetPinDialogClose_() {
        this.showSetPinDialog_ = false;
        focusWithoutInk(this.setPinButton_());
    }
    onPinAutosubmitChange_(event) {
        const target = event.target;
        assert(target instanceof SettingsToggleButtonElement);
        assert(target === this.enablePinAutoSubmitToggle_());
        if (typeof this.authToken !== 'string') {
            console.error('PIN autosubmit setting changed with expired token.');
            target.checked = !target.checked;
            return;
        }
        // Read-only preference. Changes will be reflected directly on the toggle.
        const autosubmitEnabled = target.checked;
        target.resetToPrefValue();
        if (autosubmitEnabled) {
            this.showPinAutosubmitDialog_ = true;
        }
        else {
            // Call quick unlock to disable the auto-submit option.
            chrome.quickUnlockPrivate.setPinAutosubmitEnabled(this.authToken, '' /* PIN */, false /*enabled*/, () => { });
        }
    }
    onPinAutosubmitDialogClose_() {
        this.showPinAutosubmitDialog_ = false;
        const toggle = this.enablePinAutoSubmitToggle_();
        focusWithoutInk(toggle);
    }
    onMoreButtonClicked_(event) {
        event.preventDefault(); // Prevent default browser action (navigation).
        const moreButton = this.moreButton_();
        if (moreButton === null) {
            return;
        }
        const moreMenu = this.moreMenu_();
        if (moreMenu === null) {
            return;
        }
        moreMenu.showAt(moreButton);
    }
    async onRemovePinButtonClicked_() {
        if (typeof this.authToken !== 'string') {
            console.error('Tried to remove PIN with expired token.');
            return;
        }
        const { result } = await PinFactorEditor.getRemote().removePin(this.authToken);
        switch (result) {
            case ConfigureResult.kSuccess:
                break;
            case ConfigureResult.kInvalidTokenError:
                fireAuthTokenInvalidEvent(this);
                break;
            case ConfigureResult.kFatalError:
                console.error('Error removing PIN');
                break;
        }
        // We always close the "more" menu, even when removePin call didn't work:
        // If the menu isn't closed but not attached anymore, then the user can't
        // interact with the whole settings UI at all anymore.
        const moreMenu = this.moreMenu_();
        if (moreMenu) {
            moreMenu.close();
        }
    }
}
customElements.define(SettingsPinSettingsElement.is, SettingsPinSettingsElement);

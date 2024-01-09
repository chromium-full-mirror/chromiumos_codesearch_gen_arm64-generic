// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertTrue } from 'chrome://webui-test/chai_assert.js';
import { PinSettingsApiReceiver } from '../pin_settings_api.test-mojom-webui.js';
import { assertAsync, assertForDuration, hasBooleanProperty, retry, retryUntilSome } from '../utils.js';
import { PinDialogApi } from './pin_dialog_api.js';
// The test API for the settings-pin-settings element.
export class PinSettingsApi {
    element;
    constructor(element) {
        this.element = element;
        assertTrue(element.tagName === 'SETTINGS-PIN-SETTINGS');
    }
    newRemote() {
        const receiver = new PinSettingsApiReceiver(this);
        return receiver.$.bindNewPipeAndPassRemote();
    }
    hasPin() {
        return this.moreButton() !== null;
    }
    async setPin(pin) {
        const pinDialog = await this.openPinSetupDialog();
        // Enter pin twice and submit each time.
        const initialTitleText = pinDialog.titleText();
        const initialSubmitText = pinDialog.submitText();
        await retryUntilSome(() => pinDialog.backspaceButton());
        await assertAsync(() => pinDialog.backspaceButton().disabled);
        await pinDialog.enterPin(pin);
        await assertAsync(() => !pinDialog.backspaceButton().disabled);
        await pinDialog.submit();
        // The PIN input value field should be cleared now.
        await assertAsync(() => pinDialog.pinValue() === '');
        // The title text of the dialog should change to inform the user that
        // they're supposed to enter the PIN again.
        await assertAsync(() => initialTitleText !== pinDialog.titleText());
        // The submit button text should change to inform the user that this is
        // the second entry.
        await assertAsync(() => initialSubmitText !== pinDialog.submitText());
        await pinDialog.enterPin(pin);
        await pinDialog.submit();
        // If the pin setup dialog does not disappear immediately, then at least
        // submitting again should be impossible.
        if (this.setupPinDialog() !== null) {
            assertTrue(!pinDialog.canSubmit());
        }
        // The setup pin dialog should disappear.
        await assertAsync(() => this.setupPinDialog() === null);
        // Wait until PIN change has properly propagated to the UI.
        await assertAsync(() => this.hasPin());
    }
    async removePin() {
        (await retryUntilSome(() => this.moreButton())).click();
        (await retryUntilSome(() => this.removeButton())).click();
        await assertAsync(() => !this.hasPin());
    }
    async assertHasPin(hasPin) {
        await assertAsync(() => this.hasPin() === hasPin);
        await assertForDuration(() => this.hasPin() === hasPin);
    }
    async assertDisabled(disabled) {
        const property = () => this.setPinButton().disabled === disabled;
        await assertAsync(property);
        await assertForDuration(property);
    }
    async setPinButCancelImmediately() {
        const pinDialog = await this.openPinSetupDialog();
        pinDialog.cancel();
    }
    async setPinButCancelConfirmation(pin) {
        const pinDialog = await this.openPinSetupDialog();
        await pinDialog.enterPin(pin);
        await pinDialog.submit();
        await pinDialog.cancel();
        // The setup pin dialog should disappear.
        await assertAsync(() => this.setupPinDialog() === null);
    }
    async setPinButFailConfirmation(firstPin, secondPin) {
        const pinDialog = await this.openPinSetupDialog();
        // Enter pin values.
        await pinDialog.enterPin(firstPin);
        await pinDialog.submit();
        await pinDialog.enterPin(secondPin);
        await pinDialog.submit();
        // Assert that the pin dialog shows an error and doesn't allow to submit.
        await assertAsync(() => pinDialog.hasError());
        await assertAsync(() => !pinDialog.canSubmit());
        // Entering a different PIN should make the error disappear and allow to
        // submit again.
        await pinDialog.enterPin(firstPin);
        await assertAsync(() => !pinDialog.hasError());
        await assertAsync(() => pinDialog.canSubmit());
        // Close the dialog.
        await pinDialog.cancel();
        await assertAsync(() => this.setupPinDialog() === null);
    }
    async setPinButInternalError(pin) {
        const pinDialog = await this.openPinSetupDialog();
        // Enter pin values.
        await pinDialog.enterPin(pin);
        await pinDialog.submit();
        await pinDialog.enterPin(pin);
        await pinDialog.submit();
        await assertAsync(() => pinDialog.hasError());
        // Because this is an internal error, which might be resolvedhby trying
        // again, we allow the user to submit again.
        await assertAsync(() => pinDialog.canSubmit());
        await assertAsync(() => this.setupPinDialog() !== null);
        // Close the dialog.
        await pinDialog.cancel();
        await assertAsync(() => this.setupPinDialog() === null);
        // PIN should still be unconfigured.
        await assertForDuration(() => !this.hasPin());
    }
    async setPinButTooShort(shortPin, okPin) {
        const pinDialog = await this.openPinSetupDialog();
        await pinDialog.enterPin(shortPin);
        // The PIN length check currently happens asynchronously, so it always
        // takes a bit until the UI disables or enables submission. This is
        // probably something we want to change, since it allows users to submit
        // PINs that do not satisfy the requirements if they press the "submit"
        // button quickly enough.
        await assertAsync(() => !pinDialog.canSubmit() && !pinDialog.hasError());
        await pinDialog.enterPin(okPin);
        await assertAsync(() => pinDialog.canSubmit() && !pinDialog.hasError());
        await pinDialog.enterPin(shortPin);
        await assertAsync(() => !pinDialog.canSubmit() && pinDialog.hasError());
        await pinDialog.cancel();
        await assertAsync(() => this.setupPinDialog() === null);
    }
    async setPinButTooLong(longPin, okPin) {
        const pinDialog = await this.openPinSetupDialog();
        await pinDialog.enterPin(okPin);
        await assertAsync(() => pinDialog.canSubmit() && !pinDialog.hasError());
        await pinDialog.enterPin(longPin);
        // The PIN length check happens asynchronously at the moment -- see comment
        // in |setPinButTooShort|.
        await assertAsync(() => !pinDialog.canSubmit() && pinDialog.hasError());
        await pinDialog.cancel();
        await assertAsync(() => this.setupPinDialog() === null);
    }
    async setPinWithWarning(weakPin) {
        const pinDialog = await this.openPinSetupDialog();
        await pinDialog.enterPin(weakPin);
        await assertAsync(() => pinDialog.canSubmit() && pinDialog.hasWarning());
        await pinDialog.submit();
        await pinDialog.enterPin(weakPin);
        await pinDialog.submit();
        await assertAsync(() => this.setupPinDialog() === null);
    }
    async checkPinSetupDialogKeyInput() {
        const pinDialog = await this.openPinSetupDialog();
        // Pressing letter keys should be ignored.
        const letterKeydown = new KeyboardEvent('keydown', { cancelable: true, key: 'a', keyCode: 65 });
        pinDialog.sendKeyboardEvent(letterKeydown);
        assertTrue(letterKeydown.defaultPrevented);
        // Pressing digit keys and system keys should not be ignored.
        //
        // Note that sending a digit keydown event won't update the value of the
        // pin input, probably because our synthetic event doesn't have the
        // |trusted| attribute. The best we can do appears to be to verify that the
        // the event wasn't suppressed.
        const digitKeydown = new KeyboardEvent('keydown', { cancelable: true, key: '1', keyCode: 49 });
        pinDialog.sendKeyboardEvent(digitKeydown);
        assertTrue(!digitKeydown.defaultPrevented);
        const systemKeydown = new KeyboardEvent('keydown', { cancelable: true, key: 'BrightnessUp', keyCode: 217 });
        pinDialog.sendKeyboardEvent(systemKeydown);
        assertTrue(!systemKeydown.defaultPrevented);
    }
    shadowRoot() {
        const shadowRoot = this.element.shadowRoot;
        assertTrue(shadowRoot !== null);
        return shadowRoot;
    }
    setPinButton() {
        const button = this.shadowRoot().querySelector('.set-pin-button');
        assertTrue(button instanceof HTMLElement);
        assertTrue(hasBooleanProperty(button, 'disabled'));
        return button;
    }
    moreButton() {
        return this.shadowRoot().getElementById('moreButton');
    }
    removeButton() {
        // The remove button is the only button in #moreMenu.
        const buttons = this.shadowRoot().querySelectorAll('#moreMenu button');
        assertTrue(buttons.length <= 1);
        if (buttons.length === 0) {
            return null;
        }
        const button = buttons[0];
        assertTrue(button instanceof HTMLElement);
        return button;
    }
    setupPinDialog() {
        const element = this.shadowRoot().getElementById('setupPin');
        if (element === null) {
            return null;
        }
        assertTrue(element instanceof HTMLElement);
        return new PinDialogApi(element);
    }
    pinAutosubmitDialog() {
        const element = this.shadowRoot().getElementById('pinAutosubmitDialog');
        if (element === null) {
            return null;
        }
        assertTrue(element instanceof HTMLElement);
        return new PinDialogApi(element);
    }
    async openPinSetupDialog() {
        (await retry(() => this.setPinButton())).click();
        return await retryUntilSome(() => this.setupPinDialog());
    }
    autosubmitToggle() {
        const toggle = this.shadowRoot().getElementById('enablePinAutoSubmit');
        if (toggle === null) {
            return null;
        }
        assertTrue(toggle instanceof HTMLElement);
        assertTrue(hasBooleanProperty(toggle, 'checked'));
        return toggle;
    }
    isPinAutosubmitEnabled() {
        const toggle = this.autosubmitToggle();
        return toggle !== null && toggle.checked;
    }
    async assertPinAutosubmitEnabled(isEnabled) {
        const check = () => this.isPinAutosubmitEnabled() === isEnabled;
        await assertAsync(check);
        await assertForDuration(check);
    }
    async enablePinAutosubmit(pin) {
        // Initially, autosubmit must be disabled.
        await assertAsync(() => this.isPinAutosubmitEnabled() === false);
        // Click the toggle.
        (await retryUntilSome(() => this.autosubmitToggle())).click();
        // Wait for the confirmation dialog to appear and enter pin.
        const dialog = await retryUntilSome(() => this.pinAutosubmitDialog());
        await dialog.enterPin(pin);
        await dialog.submit();
        // The dialog should disappear, and the toggle must be checked.
        await assertAsync(() => this.pinAutosubmitDialog() === null);
        await assertAsync(() => this.isPinAutosubmitEnabled() === true);
    }
    async enablePinAutosubmitIncorrectly(incorrectPin) {
        // Initially, autosubmit must be disabled.
        await assertAsync(() => this.isPinAutosubmitEnabled() === false);
        // Click the toggle.
        (await retryUntilSome(() => this.autosubmitToggle())).click();
        // Wait for the confirmation dialog to appear and enter pin.
        const dialog = await retryUntilSome(() => this.pinAutosubmitDialog());
        await dialog.enterPin(incorrectPin);
        await dialog.submit();
        // The dialog should not disappear. Dismiss it.
        await assertAsync(() => dialog.hasError());
        await assertForDuration(() => this.pinAutosubmitDialog() !== null);
        await dialog.cancel();
        await assertAsync(() => this.pinAutosubmitDialog() === null);
    }
    async tryEnablePinAutosubmit(pin) {
        await assertAsync(() => this.isPinAutosubmitEnabled() === false);
        (await retryUntilSome(() => this.autosubmitToggle())).click();
        const dialog = await retryUntilSome(() => this.pinAutosubmitDialog());
        await dialog.enterPin(pin);
        await dialog.submit();
    }
    async enablePinAutosubmitTooLong(longPin) {
        // Initially, autosubmit must be disabled.
        await assertAsync(() => this.isPinAutosubmitEnabled() === false);
        // Click the toggle.
        (await retryUntilSome(() => this.autosubmitToggle())).click();
        // Wait for the confirmation dialog to appear and enter the PIN.
        const dialog = await retryUntilSome(() => this.pinAutosubmitDialog());
        await dialog.enterPin(longPin);
        // The dialog shouldn't allow submitting |longPin| and synchronously
        // disable the input field.
        assertTrue(!dialog.canSubmit());
        // Eventually an error should appear because the PIN is too long.
        await assertAsync(() => dialog.hasError());
        await dialog.cancel();
        await assertAsync(() => this.pinAutosubmitDialog() === null);
    }
    async disablePinAutosubmit() {
        await assertAsync(() => this.isPinAutosubmitEnabled() === true);
        (await retryUntilSome(() => this.autosubmitToggle())).click();
        await assertAsync(() => this.isPinAutosubmitEnabled() === false);
    }
}

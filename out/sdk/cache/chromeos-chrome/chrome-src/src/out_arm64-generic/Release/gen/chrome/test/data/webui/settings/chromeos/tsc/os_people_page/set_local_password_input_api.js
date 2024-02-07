// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrInputElement } from 'chrome://resources/ash/common/cr_elements/cr_input/cr_input.js';
import { assertTrue } from 'chrome://webui-test/chai_assert.js';
import { SetLocalPasswordInputApiReceiver } from '../set_local_password_input_api.test-mojom-webui.js';
import { assertAsync, assertForDuration, retry } from '../utils.js';
// The test API for the settings-password-settings element.
export class SetLocalPasswordInputApi {
    element;
    constructor(element) {
        this.element = element;
        assertTrue(element.tagName === 'SET-LOCAL-PASSWORD-INPUT');
    }
    newRemote() {
        const receiver = new SetLocalPasswordInputApiReceiver(this);
        return receiver.$.bindNewPipeAndPassRemote();
    }
    async enterFirstInput(value) {
        const input = await retry(() => this.firstInput());
        input.focus();
        input.value = value;
    }
    async enterConfirmInput(value) {
        const input = await retry(() => this.confirmInput());
        input.focus();
        input.value = value;
    }
    async assertFirstInputInvalid(invalid) {
        const input = await retry(() => this.firstInput());
        const property = () => input.invalid === invalid;
        await assertAsync(property);
        await assertForDuration(property);
    }
    async assertConfirmInputInvalid(invalid) {
        const input = await retry(() => this.confirmInput());
        const property = () => input.invalid === invalid;
        await assertAsync(property);
        await assertForDuration(property);
    }
    shadowRoot() {
        const shadowRoot = this.element.shadowRoot;
        assertTrue(shadowRoot !== null);
        return shadowRoot;
    }
    firstInput() {
        const el = this.shadowRoot().getElementById('firstInput');
        assertTrue(el instanceof CrInputElement);
        return el;
    }
    confirmInput() {
        const el = this.shadowRoot().getElementById('confirmInput');
        assertTrue(el instanceof CrInputElement);
        return el;
    }
}

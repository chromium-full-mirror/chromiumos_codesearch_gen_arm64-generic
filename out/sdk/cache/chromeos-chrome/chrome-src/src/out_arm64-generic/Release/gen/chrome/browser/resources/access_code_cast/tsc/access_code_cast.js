// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './passcode_input/passcode_input.js';
import './error_message/error_message.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import { isWindows } from 'chrome://resources/js/platform.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './access_code_cast.html.js';
import { AddSinkResultCode, CastDiscoveryMethod } from './access_code_cast.mojom-webui.js';
import { BrowserProxy, DialogCloseReason } from './browser_proxy.js';
import { RouteRequestResultCode } from './route_request_result_code.mojom-webui.js';
var PageState;
(function (PageState) {
    PageState[PageState["CODE_INPUT"] = 0] = "CODE_INPUT";
    PageState[PageState["QR_INPUT"] = 1] = "QR_INPUT";
})(PageState || (PageState = {}));
const AccessCodeCastElementBase = WebUiListenerMixin(I18nMixin(PolymerElement));
const ECMASCRIPT_EPOCH_START_YEAR = 1970;
const SECONDS_PER_DAY = 86400;
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MONTH = 2592000;
const SECONDS_PER_YEAR = 31536000;
export class AccessCodeCastElement extends AccessCodeCastElementBase {
    static get is() {
        return 'access-code-cast-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            accessCode: {
                type: String,
                value: '',
                observer: 'castStateChange',
            },
            canCast: {
                type: Boolean,
                value: true,
                observer: 'castStateChange',
            },
        };
    }
    static { this.ACCESS_CODE_LENGTH = 6; }
    constructor() {
        super();
        this.listenerIds = [];
        this.router = BrowserProxy.getInstance().callbackRouter;
        this.inputLabel = this.i18n('inputLabel');
        this.isWin = isWindows;
        this.createManagedFootnote(loadTimeData.getInteger('rememberedDeviceDuration'));
        this.accessCode = '';
        this.inputEnabledStartTime = Date.now();
        BrowserProxy.getInstance().isQrScanningAvailable().then((available) => {
            this.qrScannerEnabled = available;
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.handleEnterPressed();
            }
        });
    }
    ready() {
        super.ready();
        this.setState(PageState.CODE_INPUT);
        this.$.errorMessage.setNoError();
        this.$.dialog.showModal();
    }
    connectedCallback() {
        super.connectedCallback();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds.forEach(id => this.router.removeListener(id));
    }
    cancelButtonPressed() {
        BrowserProxy.recordDialogCloseReason(DialogCloseReason.CANCEL_BUTTON);
        BrowserProxy.getInstance().closeDialog();
    }
    switchToCodeInput() {
        this.setState(PageState.CODE_INPUT);
    }
    switchToQrInput() {
        this.setState(PageState.QR_INPUT);
    }
    async addSinkAndCast() {
        BrowserProxy.recordAccessCodeEntryTime(Date.now() - this.inputEnabledStartTime);
        if (!BrowserProxy.getInstance().isDialog()) {
            return;
        }
        if (this.accessCode.length !== AccessCodeCastElement.ACCESS_CODE_LENGTH) {
            return;
        }
        if (!this.canCast) {
            return;
        }
        this.set('canCast', false);
        this.$.errorMessage.setNoError();
        const castAttemptStartTime = Date.now();
        const method = this.state === PageState.CODE_INPUT ?
            CastDiscoveryMethod.INPUT_ACCESS_CODE :
            CastDiscoveryMethod.QR_CODE;
        const addResult = await this.addSink(method).catch(() => {
            return AddSinkResultCode.UNKNOWN_ERROR;
        });
        if (addResult !== AddSinkResultCode.OK) {
            this.$.errorMessage.setAddSinkError(addResult);
            this.afterFailedAddAndCast(castAttemptStartTime);
            return;
        }
        const castResult = await this.cast().catch(() => {
            return RouteRequestResultCode.UNKNOWN_ERROR;
        });
        if (castResult !== RouteRequestResultCode.OK) {
            this.$.errorMessage.setCastError(castResult);
            this.afterFailedAddAndCast(castAttemptStartTime);
            return;
        }
        BrowserProxy.recordDialogCloseReason(DialogCloseReason.CAST_SUCCESS);
        BrowserProxy.recordCastAttemptLength(Date.now() - castAttemptStartTime);
        BrowserProxy.getInstance().closeDialog();
    }
    async createManagedFootnote(duration) {
        if (duration === 0) {
            return;
        }
        // Handle the cases from the policy enum.
        if (duration === SECONDS_PER_HOUR) {
            return this.makeFootnote('managedFootnoteHours', 1);
        }
        else if (duration === SECONDS_PER_DAY) {
            return this.makeFootnote('managedFootnoteDays', 1);
        }
        else if (duration === SECONDS_PER_MONTH) {
            return this.makeFootnote('managedFootnoteMonths', 1);
        }
        else if (duration === SECONDS_PER_YEAR) {
            return this.makeFootnote('managedFootnoteYears', 1);
        }
        // Handle the general case.
        const durationAsDate = new Date(duration * 1000);
        // ECMAscript epoch starts at 1970.
        if (durationAsDate.getUTCFullYear() - ECMASCRIPT_EPOCH_START_YEAR > 0) {
            return this.makeFootnote('managedFootnoteYears', durationAsDate.getUTCFullYear() - ECMASCRIPT_EPOCH_START_YEAR);
            // Months are zero indexed.
        }
        else if (durationAsDate.getUTCMonth() > 0) {
            return this.makeFootnote('managedFootnoteMonths', durationAsDate.getUTCMonth());
            // Dates start at 1.
        }
        else if (durationAsDate.getUTCDate() - 1 > 0) {
            return this.makeFootnote('managedFootnoteDays', durationAsDate.getUTCDate() - 1);
            // Hours start at 0.
        }
        else if (durationAsDate.getUTCHours() > 0) {
            return this.makeFootnote('managedFootnoteHours', durationAsDate.getUTCHours());
            // The given duration is either minutes, seconds, or a negative time. These
            // are not valid so we should not show the managed footnote.
        }
        this.rememberDevices = false;
        return;
    }
    setAccessCodeForTest(value) {
        this.accessCode = value;
    }
    getManagedFootnoteForTest() {
        return this.managedFootnote;
    }
    afterFailedAddAndCast(attemptStartDate) {
        this.set('canCast', true);
        this.$.codeInput.focusInput();
        this.inputEnabledStartTime = Date.now();
        BrowserProxy.recordCastAttemptLength(Date.now() - attemptStartDate);
    }
    castStateChange() {
        this.submitDisabled = !this.canCast ||
            this.accessCode.length !== AccessCodeCastElement.ACCESS_CODE_LENGTH;
        if (this.$.errorMessage.getMessageCode() !== 0 &&
            this.accessCode.length <=
                AccessCodeCastElement.ACCESS_CODE_LENGTH - 1) {
            // Hide error message once user starts editing the access code entered
            // previously. Checking for access code's length
            // <= (AccessCodeCastElement.ACCESS_CODE_LENGTH - 1 ) because it's
            // possible to for the user to deletes more than one characters at a
            // time.
            this.$.errorMessage.setNoError();
        }
    }
    setState(state) {
        this.state = state;
        this.$.errorMessage.setNoError();
        this.$.codeInputView.hidden = state !== PageState.CODE_INPUT;
        this.$.castButton.hidden = state !== PageState.CODE_INPUT;
        this.$.qrInputView.hidden = state !== PageState.QR_INPUT;
        this.$.backButton.hidden = state !== PageState.QR_INPUT;
        if (state === PageState.CODE_INPUT) {
            this.$.codeInput.value = '';
            this.$.codeInput.focusInput();
        }
    }
    handleCodeInput(e) {
        this.accessCode = e.detail.value;
    }
    handleEnterPressed() {
        if (this.submitDisabled) {
            return;
        }
        if (!this.$.codeInput.focused) {
            return;
        }
        if (this.state !== PageState.CODE_INPUT) {
            return;
        }
        this.addSinkAndCast();
    }
    async addSink(method) {
        const addSinkResult = await BrowserProxy.getInstance().handler
            .addSink(this.accessCode, method);
        return addSinkResult.resultCode;
    }
    async cast() {
        const castResult = await BrowserProxy.getInstance().handler.castToSink();
        return castResult.resultCode;
    }
    async makeFootnote(messageName, value) {
        const proxy = PluralStringProxyImpl.getInstance();
        this.managedFootnote = await proxy.getPluralString(messageName, value);
        this.rememberDevices = true;
    }
}
customElements.define(AccessCodeCastElement.is, AccessCodeCastElement);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '../components/oobe_i18n_dropdown.js';
import { assert } from '//resources/ash/common/assert.js';
import { html, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
let quickStartDebuggerAdded = false;
export function addDebugger() {
    assert(!quickStartDebuggerAdded, 'Only one instance of the QuickStart debugger should exit!');
    const quickStartDebugger = document.createElement('quick-start-debugger');
    document.body.appendChild(quickStartDebugger);
    quickStartDebuggerAdded = true;
}
// Actions to be performed on the frontend. Called by the browser.
const FrontendActions = {
    ABOUT_TO_START_ADVERTISING: 'about_to_start_advertising',
    ABOUT_TO_STOP_ADVERTISING: 'about_to_stop_advertising',
};
// Actions to be performed in the browser. Called by the frontend.
const BrowserActions = {
    START_ADVERTISING_CALLBACK: 'start_advertising_callback',
    STOP_ADVERTISING_CALLBACK: 'stop_advertising_callback',
    SET_USE_PIN: 'set_use_pin',
    INITIATE_CONNECTION: 'initiate_connection',
    AUTHENTICATE_CONNECTION: 'authenticate_connection',
    VERIFY_USER: 'verify_user',
    SEND_WIFI_CREDS: 'send_wifi_creds',
    SEND_FIDO_ASSERTION: 'send_fido_assertion',
    CLOSE_CONNECTION: 'close_connection',
    REJECT_CONNECTION: 'reject_connection',
};
const ConnectionClosedReason = {
    kComplete: 'complete',
    kUserAborted: 'user_aborted',
    kAuthenticationFailed: 'auth_fail',
    kConnectionLost: 'conn_lost',
    kRequestTimedOut: 'timeout',
    kUnknownError: 'unknown',
};
class QuickStartDebugger extends PolymerElement {
    static get is() {
        return 'quick-start-debugger';
    }
    static get template() {
        return html `<!--_html_template_start_-->
<!--
Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->
<style>
  :host {
    position: absolute;
    font-family: "Google Sans";
    top: 5%;
    left: 10px;
  }

  #iconHolder {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E8F0FE;
  }

  #debug-window {
    width: 300px;
    height: 600px;
    background-color: #E8F0FE;
    border-radius: 5%;
    margin-top: 5px;
    padding: 5px;
  }

  #title {
    text-align: center;
    margin-top: 3px;
    margin-bottom: 15px;
    font-size: larger;
    color: #1A73E8;
  }

  .section {
    border: 1px dashed #5F6368;
    padding: 5px;
    color: #5F6368;
    margin-top: 3px;
    border-radius: 3px;
  }

  .info-field {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
  }

  cr-input {
    height: 50px;
  }

</style>

<!-- DEBUGGER BUTTON -->
<div id="iconHolder" on-click="toggleVisibility">
  <svg class="icon" width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd"
      d="M10 0.01L2 0C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10C11.1 18 12 17.1 12 16V2C12 0.9 11.1 0.01 10 0.01ZM10 16H2V15H10V16ZM10 13H2V5H10V13ZM2 3V2H10V3H2Z"
      fill="#1A73E8" />
  </svg>
</div>

<!-- DEBUGGER PANEL -->
<div id="debug-window" hidden$=[[mainWindowHidden]]>
  <div id="title">QuickStart Debugger</div>
  <!-- ACTIONS -->
  <div class="section">
    <div>Actions</div>
    <button type="button" disabled$="[[!startAdvertisingPending]]" on-click="onStartAdvertisingTrueClicked"
      class="info-field">
      <span>OnStartAdvertisingCallback(success=true)</span>
    </button>
    <button type="button" disabled$="[[!startAdvertisingPending]]" on-click="onStartAdvertisingFalseClicked"
      class="info-field">
      <span>OnStartAdvertisingCallback(success=false)</span>
    </button>
    <button type="button" disabled$="[[!stopAdvertisingPending]]" on-click="onStopAdvertisingFalseClicked"
      class="info-field">
      <span>OnStopAdvertisingCallback()</span>
    </button>
    <button type="button" on-click="onInitiateConnectionClicked" class="info-field">
      <span>InitiateConnection</span>
    </button>
    <button type="button" on-click="onAuthenticateConnectionClicked" class="info-field">
      <span>AuthenticateConnection</span>
    </button>
    <button type="button" on-click="onVerifyUserClicked" class="info-field">
      <span>VerifyUser</span>
    </button>
    <button type="button" on-click="onSendWifiCredentialsClicked" class="info-field">
      <span>Send WiFi Credentials</span>
    </button>
    <button type="button" on-click="onSendFidoAssertionClicked" class="info-field">
      <span>Send FIDO Assertion</span>
    </button>
    <button type="button" on-click="onRejectConnectionClicked" class="info-field">
      <span>RejectConnection</span>
    </button>
    <button type="button" on-click="onCloseConnectionClicked" class="info-field">
      <span>CloseConnection</span>
    </button>
    <!-- <oobe-i18n-dropdown id="closeReason" items="[[connCloseReasons]]"
                          on-select-item="onCloseReasonSelected_">
      </oobe-i18n-dropdown> -->
    <cr-checkbox checked="{{usePinForAuth_}}" on-change="onUsePinChanged_" class="info-field">
      <div>Use PIN</div>
    </cr-checkbox>
  </div>

  <!-- VARIABLES -->
  <div class="section">
    <div>Variables</div>
    <cr-input type="text" value="{{deviceId_}}" label="DeviceID" class="info-field"></cr-input>
    <cr-input type="text" value="{{username_}}" label="Username" class="info-field"></cr-input>
    <cr-input type="text" value="{{wifi_ssid_}}" label="WiFi SSID" class="info-field"></cr-input>
    <cr-input type="password" value="{{wifi_pwd_}}" label="WiFi PWD" class="info-field"></cr-input>
  </div>
</div>
<!--_html_template_end_-->`;
    }
    static get properties() {
        return {
            mainWindowHidden: {
                type: Boolean,
                value: true,
            },
            startAdvertisingPending: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            usePinForAuth_: {
                type: Boolean,
                value: false,
            },
            username_: {
                type: String,
                value: 'testuser@gmail.com',
            },
            deviceId_: {
                type: String,
                value: 'a1a2a3',
            },
            wifi_ssid_: {
                type: String,
                value: 'TestWiFi',
            },
            wifi_pwd_: {
                type: String,
                value: 'TestPwd',
            },
            connCloseReasons: {
                type: Array,
                value: Object.values(ConnectionClosedReason),
                readOnly: true,
            },
        };
    }
    constructor() {
        super();
        // Expose the debugger as a global object.
        assert(!globalThis.OobeQuickStartDebugger);
        globalThis.OobeQuickStartDebugger =
            this.onFrontendActionReceived.bind(this);
    }
    toggleVisibility() {
        this.mainWindowHidden = !this.mainWindowHidden;
    }
    onStartAdvertisingTrueClicked(e) {
        this.startAdvertisingPending = false;
        this.sendActionToBrowser({
            action_name: BrowserActions.START_ADVERTISING_CALLBACK,
            success: true,
        });
    }
    onStartAdvertisingFalseClicked(e) {
        this.startAdvertisingPending = false;
        this.sendActionToBrowser({
            action_name: BrowserActions.START_ADVERTISING_CALLBACK,
            success: false,
        });
    }
    onStopAdvertisingFalseClicked(e) {
        this.stopAdvertisingPending = false;
        this.sendActionToBrowser({
            action_name: BrowserActions.STOP_ADVERTISING_CALLBACK,
        });
    }
    onInitiateConnectionClicked(e) {
        this.sendActionToBrowser({
            action_name: BrowserActions.INITIATE_CONNECTION,
            device_id: this.deviceId_,
        });
    }
    onAuthenticateConnectionClicked(e) {
        this.sendActionToBrowser({
            action_name: BrowserActions.AUTHENTICATE_CONNECTION,
            device_id: this.deviceId_,
        });
    }
    onVerifyUserClicked(e) {
        this.sendActionToBrowser({
            action_name: BrowserActions.VERIFY_USER,
        });
    }
    onSendWifiCredentialsClicked(e) {
        this.sendActionToBrowser({
            action_name: BrowserActions.SEND_WIFI_CREDS,
            wifi_ssid: this.wifi_ssid_,
            wifi_password: this.wifi_pwd_,
        });
    }
    onSendFidoAssertionClicked(e) {
        this.sendActionToBrowser({
            action_name: BrowserActions.SEND_FIDO_ASSERTION,
            email: this.username_,
        });
    }
    onRejectConnectionClicked(e) {
        this.sendActionToBrowser({
            action_name: BrowserActions.REJECT_CONNECTION,
        });
    }
    onCloseConnectionClicked(e) {
        this.sendActionToBrowser({
            action_name: BrowserActions.CLOSE_CONNECTION,
            reason: 'asd',
        });
    }
    onUsePinChanged_() {
        this.sendActionToBrowser({
            action_name: BrowserActions.SET_USE_PIN,
            use_pin: this.usePinForAuth_,
        });
    }
    buttonClickAction1(e) {
        sendDictActionToBrowser();
    }
    sendActionToBrowser(data) {
        chrome.send('quickStartDebugger.PerformAction', [data]);
    }
    onFrontendActionReceived(data) {
        assert(data.action_name);
        if (data.action_name == FrontendActions.ABOUT_TO_START_ADVERTISING) {
            this.startAdvertisingPending = true;
        }
        else if (data.action_name == FrontendActions.ABOUT_TO_STOP_ADVERTISING) {
            this.stopAdvertisingPending = true;
        }
    }
    onCloseReasonSelected_(e) { }
}
customElements.define(QuickStartDebugger.is, QuickStartDebugger);

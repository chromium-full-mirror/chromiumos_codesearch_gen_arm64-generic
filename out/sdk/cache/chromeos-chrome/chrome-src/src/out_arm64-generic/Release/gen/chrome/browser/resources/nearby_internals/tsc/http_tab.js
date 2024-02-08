// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import './http_message_object.js';
import './shared_style.css.js';
import { WebUiListenerMixin } from 'chrome://resources/ash/common/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './http_tab.html.js';
import { NearbyHttpBrowserProxy } from './nearby_http_browser_proxy.js';
const HttpTabElementBase = WebUiListenerMixin(PolymerElement);
class HttpTabElement extends HttpTabElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = NearbyHttpBrowserProxy.getInstance();
    }
    static get is() {
        return 'http-tab';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            httpMessageList_: {
                type: Array,
                value: () => [],
            },
        };
    }
    /**
     * When the page is initialized, notify the C++ layer to allow JavaScript and
     * initialize WebUI Listeners.
     */
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('http-message-added', (message) => this.onHttpMessageAdded_(message));
        this.browserProxy_.initialize();
    }
    /**
     * Triggers UpdateDevice RPC.
     */
    onUpdateDeviceClicked_() {
        this.browserProxy_.updateDevice();
    }
    /**
     * Triggers ListContactPeople RPC.
     */
    onListContactPeopleClicked_() {
        this.browserProxy_.listContactPeople();
    }
    /**
     * Triggers ListPublicCertificates RPC.
     */
    onListPublicCertificatesClicked_() {
        this.browserProxy_.listPublicCertificates();
    }
    /**
     * Clears the |httpMessageList_| messages displayed on the page.
     */
    onClearMessagesButtonClicked_() {
        this.httpMessageList_ = [];
    }
    /**
     * Adds a HTTP message to the javascript message list displayed. Called from
     * the C++ WebUI handler when a HTTP message is created in response to a Rpc.
     */
    onHttpMessageAdded_(message) {
        this.unshift('httpMessageList_', message);
    }
}
customElements.define(HttpTabElement.is, HttpTabElement);

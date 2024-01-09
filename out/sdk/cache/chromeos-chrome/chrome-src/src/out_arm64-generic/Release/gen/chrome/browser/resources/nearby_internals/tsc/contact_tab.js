// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import './contact_object.js';
import './shared_style.css.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './contact_tab.html.js';
import { NearbyContactBrowserProxy } from './nearby_contact_browser_proxy.js';
const ContactTabElementBase = WebUiListenerMixin(PolymerElement);
class ContactTabElement extends ContactTabElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = NearbyContactBrowserProxy.getInstance();
    }
    static get is() {
        return 'contact-tab';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            contactList_: {
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
        this.addWebUiListener('contacts-updated', (contact) => this.onContactUpdateAdded_(contact));
        this.browserProxy_.initialize();
    }
    /**
     * Downloads contacts from the Nearby Share server.
     */
    onDownloadContacts_() {
        this.browserProxy_.downloadContacts();
    }
    /**
     * Clears list of contact messages displayed.
     */
    onClearMessagesButtonClicked_() {
        this.contactList_ = [];
    }
    /**
     * Adds contact sent in from WebUI listener to the list of displayed contacts.
     */
    onContactUpdateAdded_(contact) {
        this.unshift('contactList_', contact);
    }
}
customElements.define(ContactTabElement.is, ContactTabElement);

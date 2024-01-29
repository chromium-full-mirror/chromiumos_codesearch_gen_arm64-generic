// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Carrier Provisioning subpage in Cellular Setup flow. This element contains a
 * webview element that loads the carrier's provisioning portal. It also has an
 * error state that displays a message for errors that may happen during this
 * step.
 */
import './base_page.js';
import '//resources/cr_elements/cr_hidden_style.css.js';
import '//resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '//resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './provisioning_page.html.js';
import { postDeviceDataToWebview } from './webview_post_util.js';
const ProvisioningPageElementBase = I18nMixin(PolymerElement);
export class ProvisioningPageElement extends ProvisioningPageElementBase {
    static get is() {
        return 'provisioning-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            delegate: Object,
            /**
             * Whether error state should be shown.
             */
            showError: {
                type: Boolean,
                value: false,
                notify: true,
            },
            /**
             * Metadata used to open carrier provisioning portal. Expected to start as
             * null, then change to a valid object.
             */
            cellularMetadata: {
                type: Object,
                value: null,
                observer: 'onCellularMetadataChanged_',
            },
            /**
             * Whether the carrier portal has completed being loaded.
             */
            hasCarrierPortalLoaded_: {
                type: Boolean,
                value: false,
            },
            /**
             * The last carrier name provided via |cellularMetadata|.
             */
            carrierName_: {
                type: String,
                value: '',
            },
        };
    }
    getPageTitle_() {
        if (!this.delegate.shouldShowPageTitle()) {
            return null;
        }
        if (this.showError) {
            return this.i18n('provisioningPageErrorTitle', this.carrierName_);
        }
        if (this.hasCarrierPortalLoaded_) {
            return this.i18n('provisioningPageActiveTitle');
        }
        return this.i18n('provisioningPageLoadingTitle', this.carrierName_);
    }
    getPageMessage_() {
        if (this.showError) {
            return this.i18n('provisioningPageErrorMessage', this.carrierName_);
        }
        return null;
    }
    shouldShowSpinner_() {
        return !this.showError && !this.hasCarrierPortalLoaded_;
    }
    shouldShowPortal_() {
        return !this.showError && this.hasCarrierPortalLoaded_;
    }
    getPortalWebview() {
        return this.shadowRoot.querySelector('webview');
    }
    onCellularMetadataChanged_() {
        // Once |cellularMetadata| has been set, load the carrier provisioning page.
        if (this.cellularMetadata) {
            this.carrierName_ = this.cellularMetadata.carrier;
            this.loadPortal_();
            return;
        }
        // If |cellularMetadata| is now null, the page should be reset so that a new
        // attempt can begin.
        this.resetPage_();
    }
    loadPortal_() {
        assert(!!this.cellularMetadata);
        assert(!this.getPortalWebview());
        const portalWebview = (document.createElement('webview'));
        this.$.portalContainer.appendChild(portalWebview);
        portalWebview.addEventListener('loadabort', this.onPortalLoadAbort_.bind(this));
        portalWebview.addEventListener('loadstop', this.onPortalLoadStop_.bind(this));
        window.addEventListener('message', this.onMessageReceived_.bind(this));
        // Setting a <webview>'s "src" attribute triggers a GET request, but some
        // carrier portals require a POST request instead. If data is provided for a
        // POST request body, use a utility function to load the webview.
        if (this.cellularMetadata.paymentPostData) {
            postDeviceDataToWebview(portalWebview, this.cellularMetadata.paymentUrl.url, this.cellularMetadata.paymentPostData);
            return;
        }
        // Otherwise, use a normal GET request by specifying the "src".
        portalWebview.src = this.cellularMetadata.paymentUrl.url;
    }
    resetPage_() {
        this.hasCarrierPortalLoaded_ = false;
        // Remove the portal from the DOM if it exists.
        const portalWebview = this.getPortalWebview();
        if (portalWebview) {
            portalWebview.remove();
        }
    }
    onPortalLoadAbort_() {
        this.showError = true;
    }
    onPortalLoadStop_() {
        if (this.hasCarrierPortalLoaded_) {
            return;
        }
        this.hasCarrierPortalLoaded_ = true;
        this.dispatchEvent(new CustomEvent('carrier-portal-loaded', { bubbles: true, composed: true }));
        // When the portal loads, it expects to receive a message from this frame
        // alerting it that loading has completed successfully.
        const portalWebview = this.getPortalWebview();
        assert(!!portalWebview);
        const contentWindow = portalWebview.contentWindow;
        assert(!!contentWindow);
        contentWindow.postMessage({ msg: 'loadedInWebview' }, this.cellularMetadata.paymentUrl?.url);
    }
    onMessageReceived_(event) {
        const messageType = (event.data.type);
        const status = (event.data.status);
        // The <webview> requested information about this device. Reply by posting a
        // message back to it.
        if (messageType === 'requestDeviceInfoMsg') {
            const portalWebview = this.getPortalWebview();
            assert(!!portalWebview);
            const contentWindow = portalWebview.contentWindow;
            assert(!!contentWindow);
            contentWindow.postMessage({
                carrier: this.cellularMetadata.carrier,
                MEID: this.cellularMetadata.meid,
                IMEI: this.cellularMetadata.imei,
                MDN: this.cellularMetadata.mdn,
            }, this.cellularMetadata.paymentUrl?.url);
            return;
        }
        // The <webview> provided an update on the status of the activation attempt.
        if (messageType === 'reportTransactionStatusMsg') {
            const success = status === 'ok';
            this.dispatchEvent(new CustomEvent('on-carrier-portal-result', {
                bubbles: true, composed: true, detail: success
            }));
            return;
        }
    }
}
customElements.define(ProvisioningPageElement.is, ProvisioningPageElement);

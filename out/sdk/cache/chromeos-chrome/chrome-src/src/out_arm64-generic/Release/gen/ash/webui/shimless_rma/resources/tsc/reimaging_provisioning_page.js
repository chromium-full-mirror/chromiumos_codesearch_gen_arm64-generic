// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/ash/common/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import './shimless_rma_shared.css.js';
import './base_page.js';
import './icons.html.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { createCustomEvent, FATAL_HARDWARE_ERROR } from './events.js';
import { getShimlessRmaService } from './mojo_interface_provider.js';
import { getTemplate } from './reimaging_provisioning_page.html.js';
import { ProvisioningError, ProvisioningObserverReceiver, ProvisioningStatus, RmadErrorCode } from './shimless_rma.mojom-webui.js';
import { executeThenTransitionState, focusPageTitle } from './shimless_rma_util.js';
/**
 * @fileoverview
 * 'reimaging-provisioning-page' provisions the device then auto-transitions to
 * the next page once complete.
 */
/**
 * The prefix for a `ProvisioningError` displayed on the Hardware Error page.
 */
export const PROVISIONING_ERROR_CODE_PREFIX = 1000;
const ReimagingProvisioningPageBase = I18nMixin(PolymerElement);
export class ReimagingProvisioningPage extends ReimagingProvisioningPageBase {
    static get is() {
        return 'reimaging-provisioning-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Set by shimless_rma.ts.
             */
            allButtonsDisabled: Boolean,
            status: {
                type: Object,
            },
            shouldShowSpinner: {
                type: Boolean,
                value: true,
            },
        };
    }
    constructor() {
        super();
        this.shimlessRmaService = getShimlessRmaService();
        this.provisioningObserverReceiver = new ProvisioningObserverReceiver(this);
        this.shimlessRmaService.observeProvisioningProgress(this.provisioningObserverReceiver.$.bindNewPipeAndPassRemote());
    }
    ready() {
        super.ready();
        focusPageTitle(this);
    }
    /**
     * Implements ProvisioningObserver.onProvisioningUpdated()
     */
    onProvisioningUpdated(status, _progress, error) {
        const isErrorStatus = status === ProvisioningStatus.kFailedBlocking ||
            status === ProvisioningStatus.kFailedNonBlocking;
        const isWpError = isErrorStatus && error === ProvisioningError.kWpEnabled;
        if (isErrorStatus && !isWpError) {
            this.dispatchEvent(createCustomEvent(FATAL_HARDWARE_ERROR, {
                rmadErrorCode: RmadErrorCode.kProvisioningFailed,
                fatalErrorCode: (PROVISIONING_ERROR_CODE_PREFIX + error),
            }));
        }
        this.status = status;
        // Transition to next state when provisioning is complete.
        if (this.status === ProvisioningStatus.kComplete) {
            this.shouldShowSpinner = false;
            executeThenTransitionState(this, () => this.shimlessRmaService.provisioningComplete());
            return;
        }
        this.shouldShowSpinner =
            isWpError || this.status === ProvisioningStatus.kInProgress;
        if (isWpError) {
            const dialog = this.shadowRoot.querySelector('#wpEnabledDialog');
            assert(dialog);
            dialog.showModal();
        }
    }
    onTryAgainButtonClick() {
        const dialog = this.shadowRoot.querySelector('#wpEnabledDialog');
        assert(dialog);
        dialog.close();
        executeThenTransitionState(this, () => this.shimlessRmaService.retryProvisioning());
    }
}
customElements.define(ReimagingProvisioningPage.is, ReimagingProvisioningPage);

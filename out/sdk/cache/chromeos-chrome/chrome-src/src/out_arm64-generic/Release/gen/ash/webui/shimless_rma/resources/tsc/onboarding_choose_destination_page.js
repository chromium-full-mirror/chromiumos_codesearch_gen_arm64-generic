// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './shimless_rma_shared.css.js';
import './base_page.js';
import '//resources/cr_elements/cr_radio_button/cr_radio_button.js';
import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { getShimlessRmaService } from './mojo_interface_provider.js';
import { getTemplate } from './onboarding_choose_destination_page.html.js';
import { disableNextButton, enableNextButton, focusPageTitle } from './shimless_rma_util.js';
/**
 * @fileoverview
 * 'onboarding-choose-destination-page' allows user to select between preparing
 * the device for return to the original owner or refurbishing for a new owner.
 */
const OnboardingChooseDestinationPageBase = I18nMixin(PolymerElement);
export class OnboardingChooseDestinationPageElement extends OnboardingChooseDestinationPageBase {
    constructor() {
        super(...arguments);
        this.shimlessRmaService = getShimlessRmaService();
    }
    static get is() {
        return 'onboarding-choose-destination-page';
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
            destinationOwner: {
                type: String,
                value: '',
            },
        };
    }
    ready() {
        super.ready();
        focusPageTitle(this);
    }
    onDestinationSelectionChanged(event) {
        this.destinationOwner = event.detail.value;
        const disabled = !this.destinationOwner;
        if (disabled) {
            disableNextButton(this);
        }
        else {
            enableNextButton(this);
        }
    }
    onNextButtonClick() {
        if (this.destinationOwner === 'originalOwner') {
            return this.shimlessRmaService.setSameOwner();
        }
        else if (this.destinationOwner === 'newOwner' ||
            this.destinationOwner === 'notSureOwner') {
            return this.shimlessRmaService.setDifferentOwner();
        }
        else {
            return Promise.reject(new Error('No destination selected'));
        }
    }
}
customElements.define(OnboardingChooseDestinationPageElement.is, OnboardingChooseDestinationPageElement);

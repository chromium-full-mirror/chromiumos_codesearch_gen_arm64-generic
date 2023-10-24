// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './discount_consent_dialog.html.js';
export class DiscountConsentDialog extends PolymerElement {
    static get is() {
        return 'discount-consent-dialog';
    }
    static get template() {
        return getTemplate();
    }
    onRejectClick_() {
        this.$.dialog.close();
        this.dispatchEvent(new CustomEvent('discount-consent-rejected', { composed: true }));
    }
    onAcceptClick_() {
        this.$.dialog.close();
        this.dispatchEvent(new CustomEvent('discount-consent-accepted', { composed: true }));
    }
    onDismissClick_() {
        this.dispatchEvent(new CustomEvent('discount-consent-dismissed', { composed: true }));
    }
}
customElements.define(DiscountConsentDialog.is, DiscountConsentDialog);

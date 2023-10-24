// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'nearby-share-contact-visibility-dialog' allows editing of the users contact
 * visibility settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '/shared/nearby_contact_visibility.js';
import '/shared/nearby_onboarding_page.js';
import '/shared/nearby_visibility_page.js';
import '../settings_shared.css.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './nearby_share_contact_visibility_dialog.html.js';
class NearbyShareContactVisibilityDialogElement extends PolymerElement {
    static get is() {
        return 'nearby-share-contact-visibility-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            settings: {
                type: Object,
                value: {},
            },
            profileEmail: {
                type: String,
                value: '',
            },
        };
    }
    onSaveClick_() {
        const contactVisibility = this.$.contactVisibility;
        contactVisibility.saveVisibilityAndAllowedContacts();
        const dialog = this.$.dialog;
        if (dialog.open) {
            dialog.close();
        }
    }
    onManageContactsClick_() {
        window.open(loadTimeData.getString('nearbyShareManageContactsUrl'));
    }
}
customElements.define(NearbyShareContactVisibilityDialogElement.is, NearbyShareContactVisibilityDialogElement);

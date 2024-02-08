// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/ash/common/cr_elements/icons.html.js';
import '//resources/js/action_link.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import './oobe_icons.html.js';
import './common_styles/oobe_common_styles.css.js';
import { GaiaButton } from './gaia_button.js';
import { assert } from '//resources/js/assert.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './notification_card.html.js';
class NotificationCard extends PolymerElement {
    static get is() {
        return 'notification-card';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            buttonLabel: {
                type: String,
                value: '',
            },
            linkLabel: {
                type: String,
                value: '',
            },
        };
    }
    buttonClicked() {
        this.dispatchEvent(new CustomEvent('buttonclick', { bubbles: true, composed: true }));
    }
    linkClicked(e) {
        this.dispatchEvent(new CustomEvent('linkclick', { bubbles: true, composed: true }));
        e.preventDefault();
    }
    get submitButton() {
        const button = this.shadowRoot?.querySelector('#submitButton');
        assert(button instanceof GaiaButton);
        return button;
    }
}
customElements.define(NotificationCard.is, NotificationCard);

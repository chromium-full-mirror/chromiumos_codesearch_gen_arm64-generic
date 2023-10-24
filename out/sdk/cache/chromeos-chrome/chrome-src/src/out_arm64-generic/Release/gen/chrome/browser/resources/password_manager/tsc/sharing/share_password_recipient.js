// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '../shared_style.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './share_password_recipient.html.js';
export class SharePasswordRecipientElement extends PolymerElement {
    static get is() {
        return 'share-password-recipient';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false,
            },
            recipient: Object,
            selected: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                notify: true,
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('mouseover', this.onMouseOver_.bind(this));
        this.addEventListener('mouseout', this.onMouseOut_.bind(this));
    }
    onClick_(e) {
        if (this.disabled) {
            return;
        }
        e.preventDefault();
        this.$.checkbox.click();
    }
    onMouseOver_(e) {
        if (this.disabled) {
            return;
        }
        e.preventDefault();
        this.$.checkbox.getRipple().showAndHoldDown();
    }
    onMouseOut_(e) {
        if (this.disabled) {
            return;
        }
        e.preventDefault();
        this.$.checkbox.getRipple().clear();
    }
}
customElements.define(SharePasswordRecipientElement.is, SharePasswordRecipientElement);

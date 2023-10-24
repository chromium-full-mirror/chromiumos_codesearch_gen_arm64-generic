// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './diagnostics_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './text_badge.html.js';
/**
 * Badge style class type.
 * @enum {string}
 */
export var BadgeType;
(function (BadgeType) {
    BadgeType["ERROR"] = "error";
    BadgeType["QUEUED"] = "queued";
    BadgeType["RUNNING"] = "running";
    BadgeType["STOPPED"] = "stopped";
    BadgeType["SUCCESS"] = "success";
    BadgeType["SKIPPED"] = "skipped";
    BadgeType["WARNING"] = "warning";
})(BadgeType || (BadgeType = {}));
/**
 * @fileoverview
 * 'text-badge' displays a text-based rounded badge.
 */
export class TextBadgeElement extends PolymerElement {
    static get is() {
        return 'text-badge';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            badgeType: {
                type: String,
                value: BadgeType.QUEUED,
            },
            value: {
                type: String,
                value: '',
            },
            hidden: {
                type: Boolean,
                value: false,
            },
        };
    }
}
customElements.define(TextBadgeElement.is, TextBadgeElement);

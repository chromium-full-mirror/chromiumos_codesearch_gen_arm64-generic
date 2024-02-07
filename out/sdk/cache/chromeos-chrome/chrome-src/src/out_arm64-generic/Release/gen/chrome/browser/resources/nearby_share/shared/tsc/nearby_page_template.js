// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The 'nearby-page-template is used as a template for pages. It
 * provide a consistent setup for all pages with title, sub-title, body slot
 * and button options.
 */
import 'chrome://resources/ash/common/cr_elements/cr_shared_style.css.js';
// 
import 'chrome://resources/ash/common/cr_elements/cros_color_overrides.css.js';
// 
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './nearby_page_template.html.js';
import { CloseReason } from './types.js';
export class NearbyPageTemplateElement extends PolymerElement {
    static get is() {
        return 'nearby-page-template';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            title: {
                type: String,
            },
            subTitle: {
                type: String,
            },
            /**
             * Alternate subtitle for screen readers. If not falsey, then the
             * #pageSubTitle is aria-hidden and the #a11yAnnouncedPageSubTitle is
             * rendered on screen readers instead. Changes to this value will result
             * in aria-live announcements.
             */
            a11yAnnouncedSubTitle: {
                type: String,
                value: null,
            },
            /**
             * Text to show on the action button. If either this is falsey, or if
             * |closeOnly| is true, then the action button is hidden.
             */
            actionButtonLabel: {
                type: String,
            },
            actionButtonEventName: { type: String, value: 'action' },
            actionDisabled: {
                type: Boolean,
                value: false,
            },
            /**
             * Text to show on the cancel button. If either this is falsey, or if
             * |closeOnly| is true, then the cancel button is hidden.
             */
            cancelButtonLabel: {
                type: String,
            },
            cancelButtonEventName: {
                type: String,
                value: 'cancel',
            },
            /**
             * Text to show on the utility button. If either this is falsey, or if
             * |closeOnly| is true, then the utility button is hidden.
             */
            utilityButtonLabel: {
                type: String,
            },
            /**
             * When true, shows the open-in-new icon to the left of the button label.
             */
            utilityButtonOpenInNew: {
                type: Boolean,
                value: false,
            },
            utilityButtonEventName: {
                type: String,
                value: 'utility',
            },
            /**
             * When true, hide all other buttons and show a close button.
             */
            closeOnly: {
                type: Boolean,
                value: false,
            },
        };
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail: detail || {} }));
    }
    onActionClick_() {
        this.fire_(this.actionButtonEventName);
    }
    onCancelClick_() {
        this.fire_(this.cancelButtonEventName);
    }
    onUtilityClick_() {
        this.fire_(this.utilityButtonEventName);
    }
    onCloseClick_() {
        this.fire_('close', { reason: CloseReason.UNKNOWN });
    }
    getDialogAriaLabelledBy_() {
        let labelIds = 'pageTitle';
        if (!this.a11yAnnouncedSubTitle) {
            labelIds += ' pageSubTitle';
        }
        return labelIds;
    }
    getSubTitleAriaHidden_() {
        if (this.a11yAnnouncedSubTitle) {
            return 'true';
        }
        return undefined;
    }
}
customElements.define(NearbyPageTemplateElement.is, NearbyPageTemplateElement);

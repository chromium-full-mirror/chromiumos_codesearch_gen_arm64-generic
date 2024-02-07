// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import './diagnostics_shared.css.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './diagnostics_sticky_banner.html.js';
export class DiagnosticsStickyBannerElement extends PolymerElement {
    constructor() {
        super(...arguments);
        /**
         * Event callback for 'show-caution-banner' which is triggered from routine-
         * section. Event will contain message to display on message property of
         * event found on path `event.detail.message`.
         */
        this.showCautionBannerHandler = (e) => {
            assert(e.detail.message);
            this.bannerMessage = e.detail.message;
        };
        /**
         * Event callback for 'dismiss-caution-banner' which is triggered from
         * routine-section.
         */
        this.dismissCautionBannerHandler = () => {
            this.bannerMessage = '';
        };
        /**
         * Event callback for 'scroll'.
         */
        this.scrollClassHandler = () => {
            this.onScroll();
        };
    }
    static get is() {
        return 'diagnostics-sticky-banner';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            bannerMessage: {
                type: String,
                value: '',
                notify: true,
            },
            scrollingClass: {
                type: String,
                value: '',
            },
            scrollTimerId: {
                type: Number,
                value: -1,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('show-caution-banner', (e) => this.showCautionBannerHandler(e));
        window.addEventListener('dismiss-caution-banner', this.dismissCautionBannerHandler);
        window.addEventListener('scroll', this.scrollClassHandler);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('show-caution-banner', (e) => this.showCautionBannerHandler(e));
        window.removeEventListener('dismiss-caution-banner', this.dismissCautionBannerHandler);
        window.removeEventListener('scroll', this.scrollClassHandler);
    }
    /**
     * Event handler for 'scroll' to ensure shadow and elevation of banner is
     * correct while scrolling. Timer is used to clear class after 300ms.
     */
    onScroll() {
        if (!this.bannerMessage) {
            return;
        }
        // Reset timer since we've received another 'scroll' event.
        if (this.scrollTimerId !== -1) {
            this.scrollingClass = 'elevation-2';
            clearTimeout(this.scrollTimerId);
        }
        // Remove box shadow from banner since the user has stopped scrolling
        // for at least 300ms.
        this.scrollTimerId = window.setTimeout(() => this.scrollingClass = '', 300);
    }
}
customElements.define(DiagnosticsStickyBannerElement.is, DiagnosticsStickyBannerElement);

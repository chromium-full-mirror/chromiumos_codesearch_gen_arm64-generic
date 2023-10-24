// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './history_clusters_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './horizontal_carousel.html.js';
const HorizontalCarouselElementBase = I18nMixin(PolymerElement);
export class HorizontalCarouselElement extends HorizontalCarouselElementBase {
    constructor() {
        super(...arguments);
        //============================================================================
        // Properties
        //============================================================================
        this.resizeObserver_ = null;
        this.eventTracker_ = new EventTracker();
    }
    static get is() {
        return 'horizontal-carousel';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            showForwardButton_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            showBackButton_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
        };
    }
    //============================================================================
    // Overridden methods
    //============================================================================
    connectedCallback() {
        super.connectedCallback();
        this.resizeObserver_ = new ResizeObserver(() => {
            this.setShowCarouselButtons_();
        });
        this.resizeObserver_.observe(this.$.carouselContainer);
        this.eventTracker_.add(this, 'keyup', this.onTabFocus_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.resizeObserver_) {
            this.resizeObserver_.unobserve(this.$.carouselContainer);
            this.resizeObserver_ = null;
        }
    }
    //============================================================================
    // Event handlers
    //============================================================================
    onCarouselBackClick_() {
        const targetPosition = this.calculateTargetPosition_(-1);
        this.$.carouselContainer.scrollTo({ left: targetPosition, behavior: 'smooth' });
        this.showBackButton_ = targetPosition > 0;
        this.showForwardButton_ = true;
    }
    onCarouselForwardClick_() {
        const targetPosition = this.calculateTargetPosition_(1);
        this.$.carouselContainer.scrollTo({ left: targetPosition, behavior: 'smooth' });
        this.showForwardButton_ =
            targetPosition + this.$.carouselContainer.clientWidth <
                this.$.carouselContainer.scrollWidth;
        this.showBackButton_ = true;
    }
    onTabFocus_(event) {
        const element = event.target;
        if (event.code === 'Tab') {
            // -2px as offsetLeft includes padding
            this.$.carouselContainer.scrollTo({ left: element.offsetLeft - 2, behavior: 'smooth' });
        }
    }
    //============================================================================
    // Helper methods
    //============================================================================
    setShowCarouselButtons_() {
        if (Math.round(this.$.carouselContainer.scrollLeft) +
            this.$.carouselContainer.clientWidth <
            this.$.carouselContainer.scrollWidth) {
            // On shrinking the window, the forward button should show up again.
            this.showForwardButton_ = true;
        }
        else {
            // On expanding the window, the back and forward buttons should disappear.
            this.showBackButton_ = this.$.carouselContainer.scrollLeft > 0;
            this.showForwardButton_ = false;
        }
    }
    calculateTargetPosition_(direction) {
        const offset = this.$.carouselContainer.clientWidth / 2 * direction;
        const targetPosition = Math.floor(this.$.carouselContainer.scrollLeft + offset);
        return Math.max(0, Math.min(targetPosition, this.$.carouselContainer.scrollWidth -
            this.$.carouselContainer.clientWidth));
    }
}
customElements.define(HorizontalCarouselElement.is, HorizontalCarouselElement);

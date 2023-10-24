// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../../../history_clusters/page_favicon.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixin, loadTimeData } from '../../../../i18n_setup.js';
import { getTemplate } from './cart_tile.html.js';
export class CartTileModuleElementV2 extends I18nMixin(PolymerElement) {
    static get is() {
        return 'ntp-history-clusters-cart-tile-v2';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /* The cart to display. */
            cart: Object,
            format: {
                type: String,
                reflectToAttribute: true,
            },
            imagesEnabled: {
                type: Boolean,
                reflectToAttribute: true,
            },
            showRelatedSearches: Boolean,
            /* The label of the tile in a11y mode. */
            tileLabel_: {
                type: String,
                computed: `computeTileLabel_(cart)`,
            },
            imageCount_: {
                type: Number,
                computed: `computeImageCount_()`,
                reflectToAttribute: true,
            },
        };
    }
    ready() {
        super.ready();
    }
    hasMultipleImages_() {
        return this.cart.productImageUrls.length > 1;
    }
    getSingleImageToShow_() {
        return this.cart.productImageUrls[0].url;
    }
    getImagesToShow_() {
        const images = this.cart.productImageUrls;
        if (!this.showRelatedSearches && this.format === 'wide') {
            return images.slice(0, 1);
        }
        else {
            if (images.length >= 4) {
                if (this.imagesEnabled ||
                    (this.showRelatedSearches && this.format === 'wide')) {
                    return images.slice(0, (images.length > 4) ? 3 : 4);
                }
                else {
                    return images.slice(0, 1);
                }
            }
            else if (images.length === 3) {
                return images.slice(0, 1);
            }
            else {
                return images;
            }
        }
    }
    shouldShowExtraImagesCard_() {
        return this.showRelatedSearches ? (this.cart.productImageUrls.length > 2) :
            true;
    }
    getExtraImagesCount_() {
        const images = this.cart.productImageUrls;
        if (!this.showRelatedSearches && this.format === 'wide') {
            return images.length - 1;
        }
        else {
            if (images.length >= 4) {
                if (this.imagesEnabled ||
                    (this.showRelatedSearches && this.format === 'wide')) {
                    return images.length - 3;
                }
                else {
                    return images.length - 1;
                }
            }
            else if (images.length === 3) {
                return 2;
            }
            else {
                return 1;
            }
        }
    }
    computeImageCount_() {
        return this.cart.productImageUrls.length;
    }
    computeTileLabel_() {
        const productCount = this.cart.productImageUrls.length;
        const discountText = this.cart.discountText;
        const merchantName = this.cart.merchant;
        const merchantDomain = this.cart.domain;
        const relativeDate = this.cart.relativeDate;
        if (productCount === 0) {
            return loadTimeData.getStringF('modulesJourneysCartTileLabelDefault', discountText, merchantName, merchantDomain, relativeDate);
        }
        else if (productCount === 1) {
            return loadTimeData.getStringF('modulesJourneysCartTileLabelSingular', discountText, merchantName, merchantDomain, relativeDate);
        }
        else {
            return loadTimeData.getStringF('modulesJourneysCartTileLabelPlural', productCount, discountText, merchantName, merchantDomain, relativeDate);
        }
    }
}
customElements.define(CartTileModuleElementV2.is, CartTileModuleElementV2);

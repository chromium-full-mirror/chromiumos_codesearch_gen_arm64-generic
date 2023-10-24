// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../page_favicon.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixin, loadTimeData } from '../../../i18n_setup.js';
import { getTemplate } from './cart_tile.html.js';
export class CartTileModuleElement extends I18nMixin(PolymerElement) {
    static get is() {
        return 'ntp-history-clusters-cart-tile';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /* The cart to display. */
            cart: Object,
            /* The label of the tile in a11y mode. */
            tileLabel_: {
                type: String,
                computed: `computeTileLabel_(cart)`,
            },
        };
    }
    ready() {
        super.ready();
        if (this.cart.productImageUrls.length > 1) {
            this.setAttribute('multiple-images', 'true');
        }
        else {
            this.setAttribute('one-image', 'true');
        }
    }
    hasMultipleImages_() {
        if (this.cart.productImageUrls.length > 1) {
            return true;
        }
        else {
            return false;
        }
    }
    getSingleImageToShow_() {
        return this.cart.productImageUrls[0].url;
    }
    getImagesToShow_() {
        const images = this.cart.productImageUrls;
        return images.slice(0, (images.length > 4) ? 3 : 4);
    }
    shouldShowExtraImagesCard_() {
        return this.cart.productImageUrls.length > 4;
    }
    getExtraImagesCountString_() {
        return '+' + (this.cart.productImageUrls.length - 3).toString();
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
customElements.define(CartTileModuleElement.is, CartTileModuleElement);

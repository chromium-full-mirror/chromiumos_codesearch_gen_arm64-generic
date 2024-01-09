// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../strings.m.js';
import { ShoppingServiceApiProxyImpl } from '//shopping-insights-side-panel.top-chrome/shared/commerce/shopping_service_api_proxy.js';
import { PriceInsightsInfo_PriceBucket } from '//shopping-insights-side-panel.top-chrome/shared/shopping_list.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './catalog_attributes_row.html.js';
export class CatalogAttributesRow extends PolymerElement {
    constructor() {
        super(...arguments);
        this.shoppingApi_ = ShoppingServiceApiProxyImpl.getInstance();
    }
    static get is() {
        return 'catalog-attributes-row';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            priceInsightsInfo: Object,
        };
    }
    openJackpot_() {
        this.shoppingApi_.openUrlInNewTab(this.priceInsightsInfo.jackpot);
        chrome.metricsPrivate.recordEnumerationValue('Commerce.PriceInsights.BuyingOptionsClicked', this.priceInsightsInfo.bucket, PriceInsightsInfo_PriceBucket.MAX_VALUE + 1);
    }
}
customElements.define(CatalogAttributesRow.is, CatalogAttributesRow);

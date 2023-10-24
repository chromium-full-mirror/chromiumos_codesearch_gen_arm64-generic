// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../strings.m.js';
import './catalog_attributes_row.js';
import './history_graph.js';
import './insights_comment_row.js';
import './price_tracking_section.js';
import '//resources/cr_elements/cr_hidden_style.css.js';
import '//resources/cr_elements/cr_icons.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/cr_elements/mwb_element_shared_style.css.js';
import '//shopping-insights-side-panel.top-chrome/shared/sp_shared_style.css.js';
import { ColorChangeUpdater } from '//resources/cr_components/color_change_listener/colors_css_updater.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { listenOnce } from '//resources/js/util_ts.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ShoppingListApiProxyImpl } from '//shopping-insights-side-panel.top-chrome/shared/commerce/shopping_list_api_proxy.js';
import { getTemplate } from './app.html.js';
export class ShoppingInsightsAppElement extends PolymerElement {
    static get is() {
        return 'shopping-insights-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            productInfo: Object,
            priceInsightsInfo: Object,
            isProductTrackable_: {
                type: Boolean,
                value: false,
            },
        };
    }
    constructor() {
        super();
        this.shoppingApi_ = ShoppingListApiProxyImpl.getInstance();
        ColorChangeUpdater.forDocument().start();
    }
    async ready() {
        super.ready();
        const { productInfo } = await this.shoppingApi_.getProductInfoForCurrentUrl();
        this.productInfo = productInfo;
        const { priceInsightsInfo } = await this.shoppingApi_.getPriceInsightsInfoForCurrentUrl();
        this.priceInsightsInfo = priceInsightsInfo;
        const { eligible } = await this.shoppingApi_.isShoppingListEligible();
        this.isProductTrackable_ =
            eligible && (priceInsightsInfo.clusterId !== BigInt(0));
    }
    connectedCallback() {
        super.connectedCallback();
        // Push showInsightsSidePanelUI() callback to the event queue to allow
        // deferred rendering to take place.
        listenOnce(this.$.insightsContainer, 'dom-change', () => {
            setTimeout(() => this.shoppingApi_.showInsightsSidePanelUi(), 0);
        });
    }
    getRangeDescription_(info) {
        const lowPrice = info.typicalLowPrice;
        const highPrice = info.typicalHighPrice;
        if (info.hasMultipleCatalogs) {
            return lowPrice === highPrice ?
                loadTimeData.getStringF('rangeMultipleOptionsOnePrice', lowPrice) :
                loadTimeData.getStringF('rangeMultipleOptions', lowPrice, highPrice);
        }
        return lowPrice === highPrice ?
            loadTimeData.getStringF('rangeSingleOptionOnePrice', lowPrice) :
            loadTimeData.getStringF('rangeSingleOption', lowPrice, highPrice);
    }
    getHistoryTitle_(info) {
        return loadTimeData.getString(info.hasMultipleCatalogs ? 'historyTitleMultipleOptions' :
            'historyTitleSingleOption');
    }
}
customElements.define(ShoppingInsightsAppElement.is, ShoppingInsightsAppElement);

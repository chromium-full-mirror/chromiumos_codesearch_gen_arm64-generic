// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import '../strings.m.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import { ShoppingServiceApiProxyImpl } from '//shopping-insights-side-panel.top-chrome/shared/commerce/shopping_service_api_proxy.js';
import { PriceInsightsInfo_PriceBucket } from '//shopping-insights-side-panel.top-chrome/shared/shopping_list.mojom-webui.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './price_tracking_section.html.js';
function decodeString16(arr) {
    return arr.data.map(ch => String.fromCodePoint(ch)).join('');
}
export class PriceTrackingSection extends PolymerElement {
    constructor() {
        super(...arguments);
        this.listenerIds_ = [];
        this.shoppingApi_ = ShoppingServiceApiProxyImpl.getInstance();
    }
    static get is() {
        return 'price-tracking-section';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            productInfo: Object,
            isProductTracked_: {
                type: Boolean,
                value: false,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        const callbackRouter = this.shoppingApi_.getCallbackRouter();
        this.listenerIds_.push(callbackRouter.priceTrackedForBookmark.addListener((product) => this.onBookmarkPriceTracked(product)), callbackRouter.priceUntrackedForBookmark.addListener((product) => this.onBookmarkPriceUntracked(product)), callbackRouter.operationFailedForBookmark.addListener((product, attemptedTrack) => this.onBookmarkOperationFailed(product, attemptedTrack)), callbackRouter.onProductBookmarkMoved.addListener((product) => this.onProductBookmarkMoved(product)));
        this.shoppingApi_.getPriceTrackingStatusForCurrentUrl().then(res => {
            this.updatePriceTrackingSection_(res.tracked);
        });
    }
    async updatePriceTrackingSection_(tracked) {
        if (!tracked) {
            this.folderName_ = '';
            this.toggleAnnotationText_ =
                loadTimeData.getString('trackPriceDescription');
        }
        else {
            const { name } = await this.shoppingApi_.getParentBookmarkFolderNameForCurrentUrl();
            this.folderName_ = decodeString16(name);
            this.toggleAnnotationText_ =
                loadTimeData.getString('trackPriceSaveDescription');
        }
        this.updateSaveLocationText(this.folderName_);
        this.isProductTracked_ = tracked;
    }
    updateSaveLocationText(folderName) {
        if (folderName.length === 0) {
            this.showSaveLocationText_ = false;
            this.saveLocationStartText_ = '';
            this.saveLocationEndText_ = '';
            return;
        }
        const fullText = loadTimeData.getStringF('trackPriceSaveLocation', folderName);
        // TODO(1456420): Find a better way to dynamically add a link to a templated
        //                string and possibly avoid using substring.
        this.saveLocationStartText_ =
            fullText.substring(0, fullText.lastIndexOf(folderName));
        this.saveLocationEndText_ = fullText.substring(fullText.lastIndexOf(folderName) + folderName.length);
        this.showSaveLocationText_ = true;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => this.shoppingApi_.getCallbackRouter().removeListener(id));
    }
    onPriceTrackingToggled_() {
        this.shoppingApi_.setPriceTrackingStatusForCurrentUrl(this.isProductTracked_);
        chrome.metricsPrivate.recordEnumerationValue(this.isProductTracked_ ?
            'Commerce.PriceTracking.PriceInsightsSidePanel.Track' :
            'Commerce.PriceTracking.PriceInsightsSidePanel.Untrack', this.priceInsightsInfo.bucket, PriceInsightsInfo_PriceBucket.MAX_VALUE + 1);
    }
    onBookmarkPriceTracked(product) {
        if (product.info.clusterId !== this.productInfo.clusterId) {
            return;
        }
        this.updatePriceTrackingSection_(true);
    }
    onBookmarkPriceUntracked(product) {
        if (product.info.clusterId !== this.productInfo.clusterId) {
            return;
        }
        this.updatePriceTrackingSection_(false);
    }
    onFolderClicked_() {
        this.shoppingApi_.showBookmarkEditorForCurrentUrl();
        chrome.metricsPrivate.recordUserAction('Commerce.PriceTracking.' +
            'EditedBookmarkFolderFromPriceInsightsSidePanel');
    }
    onBookmarkOperationFailed(product, attemptedTrack) {
        if (product.info.clusterId !== this.productInfo.clusterId) {
            return;
        }
        this.toggleAnnotationText_ = loadTimeData.getString('trackPriceError');
        this.folderName_ = '';
        this.updateSaveLocationText('');
        this.isProductTracked_ = !attemptedTrack;
    }
    async onProductBookmarkMoved(product) {
        if (product.info.clusterId === this.productInfo.clusterId &&
            this.isProductTracked_) {
            const { name } = await this.shoppingApi_.getParentBookmarkFolderNameForCurrentUrl();
            this.folderName_ = decodeString16(name);
        }
    }
}
customElements.define(PriceTrackingSection.is, PriceTrackingSection);

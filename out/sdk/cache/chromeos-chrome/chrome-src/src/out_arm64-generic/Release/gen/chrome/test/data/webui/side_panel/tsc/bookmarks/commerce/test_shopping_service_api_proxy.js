// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PriceInsightsInfo_PriceBucket } from 'chrome://bookmarks-side-panel.top-chrome/shared/shopping_list.mojom-webui.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestShoppingServiceApiProxy extends TestBrowserProxy {
    callbackRouter;
    callbackRouterRemote;
    products_ = [];
    product_ = {
        title: '',
        clusterTitle: '',
        domain: '',
        imageUrl: { url: '' },
        productUrl: { url: '' },
        currentPrice: '',
        previousPrice: '',
        clusterId: BigInt(0),
    };
    priceInsights_ = {
        clusterId: BigInt(0),
        typicalLowPrice: '',
        typicalHighPrice: '',
        catalogAttributes: '',
        jackpot: { url: '' },
        bucket: PriceInsightsInfo_PriceBucket.kUnknown,
        hasMultipleCatalogs: false,
        history: [],
        locale: '',
        currencyCode: '',
    };
    shoppingCollectionId_ = BigInt(-1);
    constructor() {
        super([
            'getAllPriceTrackedBookmarkProductInfo',
            'getAllShoppingBookmarkProductInfo',
            'trackPriceForBookmark',
            'untrackPriceForBookmark',
            'getProductInfoForCurrentUrl',
            'getPriceInsightsInfoForCurrentUrl',
            'showInsightsSidePanelUi',
            'openUrlInNewTab',
            'showFeedback',
            'isShoppingListEligible',
            'getShoppingCollectionBookmarkFolderId',
            'getPriceTrackingStatusForCurrentUrl',
            'setPriceTrackingStatusForCurrentUrl',
            'getParentBookmarkFolderNameForCurrentUrl',
            'showBookmarkEditorForCurrentUrl',
        ]);
        this.callbackRouter = new PageCallbackRouter();
        this.callbackRouterRemote =
            this.callbackRouter.$.bindNewPipeAndPassRemote();
    }
    setProducts(products) {
        this.products_ = products;
    }
    setShoppingCollectionBookmarkFolderId(id) {
        this.shoppingCollectionId_ = id;
    }
    getAllPriceTrackedBookmarkProductInfo() {
        this.methodCalled('getAllPriceTrackedBookmarkProductInfo');
        return Promise.resolve({ productInfos: this.products_ });
    }
    getAllShoppingBookmarkProductInfo() {
        this.methodCalled('getAllShoppingBookmarkProductInfo');
        return Promise.resolve({ productInfos: this.products_ });
    }
    trackPriceForBookmark(bookmarkId) {
        this.methodCalled('trackPriceForBookmark', bookmarkId);
    }
    untrackPriceForBookmark(bookmarkId) {
        this.methodCalled('untrackPriceForBookmark', bookmarkId);
    }
    getProductInfoForCurrentUrl() {
        this.methodCalled('getProductInfoForCurrentUrl');
        return Promise.resolve({ productInfo: this.product_ });
    }
    getPriceInsightsInfoForCurrentUrl() {
        this.methodCalled('getPriceInsightsInfoForCurrentUrl');
        return Promise.resolve({ priceInsightsInfo: this.priceInsights_ });
    }
    showInsightsSidePanelUi() {
        this.methodCalled('showInsightsSidePanelUi');
    }
    openUrlInNewTab() {
        this.methodCalled('openUrlInNewTab');
    }
    showFeedback() {
        this.methodCalled('showFeedback');
    }
    isShoppingListEligible() {
        return this.methodCalled('isShoppingListEligible');
    }
    getShoppingCollectionBookmarkFolderId() {
        this.methodCalled('getShoppingCollectionBookmarkFolderId');
        return Promise.resolve({ collectionId: this.shoppingCollectionId_ });
    }
    getPriceTrackingStatusForCurrentUrl() {
        return this.methodCalled('getPriceTrackingStatusForCurrentUrl');
    }
    setPriceTrackingStatusForCurrentUrl(track) {
        this.methodCalled('setPriceTrackingStatusForCurrentUrl', track);
    }
    getParentBookmarkFolderNameForCurrentUrl() {
        return this.methodCalled('getParentBookmarkFolderNameForCurrentUrl');
    }
    showBookmarkEditorForCurrentUrl() {
        this.methodCalled('showBookmarkEditorForCurrentUrl');
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
    getCallbackRouterRemote() {
        return this.callbackRouterRemote;
    }
}

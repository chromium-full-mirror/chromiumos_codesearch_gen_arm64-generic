// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../strings.m.js';
import './commerce/shopping_list.js';
import './icons.html.js';
import './power_bookmarks_context_menu.js';
import './power_bookmarks_labels.js';
import './power_bookmark_row.js';
import './power_bookmarks_context_menu.js';
import './power_bookmarks_edit_dialog.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_empty_state.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_footer.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_heading.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_icons.html.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_list_item_badge.js';
import '//bookmarks-side-panel.top-chrome/shared/sp_shared_style.css.js';
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import '//resources/cr_elements/cr_toast/cr_toast.js';
import '//resources/cr_elements/cr_toolbar/cr_toolbar_search_field.js';
import '//resources/cr_elements/cr_toolbar/cr_toolbar_selection_overlay.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/polymer/v3_0/iron-list/iron-list.js';
import { ShoppingServiceApiProxyImpl } from '//bookmarks-side-panel.top-chrome/shared/commerce/shopping_service_api_proxy.js';
import { ColorChangeUpdater } from '//resources/cr_components/color_change_listener/colors_css_updater.js';
import { getInstance as getAnnouncerInstance } from '//resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { FocusOutlineManager } from '//resources/js/focus_outline_manager.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { PluralStringProxyImpl } from '//resources/js/plural_string_proxy.js';
import { listenOnce } from '//resources/js/util.js';
import { afterNextRender, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ActionSource, SortOrder, ViewType } from './bookmarks.mojom-webui.js';
import { BookmarksApiProxyImpl } from './bookmarks_api_proxy.js';
import { PowerBookmarksDragManager } from './power_bookmarks_drag_manager.js';
import { getTemplate } from './power_bookmarks_list.html.js';
import { editingDisabledByPolicy, PowerBookmarksService } from './power_bookmarks_service.js';
const ADD_FOLDER_ACTION_UMA = 'Bookmarks.FolderAddedFromSidePanel';
const ADD_URL_ACTION_UMA = 'Bookmarks.AddedFromSidePanel';
function getBookmarkName(bookmark) {
    return bookmark.title || bookmark.url || '';
}
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused. This must be kept in sync with
// BookmarksSidePanelSearchCTREvent in tools/metrics/histograms/enums.xml.
export var SearchAction;
(function (SearchAction) {
    SearchAction[SearchAction["SHOWN"] = 0] = "SHOWN";
    SearchAction[SearchAction["SEARCHED"] = 1] = "SEARCHED";
    // Must be last.
    SearchAction[SearchAction["COUNT"] = 2] = "COUNT";
})(SearchAction || (SearchAction = {}));
export class PowerBookmarksListElement extends PolymerElement {
    static get is() {
        return 'power-bookmarks-list';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            displayLists_: {
                type: Array,
                value: () => [],
            },
            compact_: {
                type: Boolean,
                value: () => loadTimeData.getInteger('viewType') === 0,
                observer: 'updateListScrollOffset_',
            },
            activeFolderPath_: {
                type: Array,
                value: () => [],
            },
            labels_: {
                type: Array,
                value: () => [],
            },
            activeSortIndex_: {
                type: Number,
                value: () => loadTimeData.getInteger('sortOrder'),
            },
            sortTypes_: {
                type: Array,
                value: () => [{
                        sortOrder: SortOrder.kNewest,
                        label: loadTimeData.getString('sortNewest'),
                        lowerLabel: loadTimeData.getString('sortNewestLower'),
                    },
                    {
                        sortOrder: SortOrder.kOldest,
                        label: loadTimeData.getString('sortOldest'),
                        lowerLabel: loadTimeData.getString('sortOldestLower'),
                    },
                    {
                        sortOrder: SortOrder.kLastOpened,
                        label: loadTimeData.getString('sortLastOpened'),
                        lowerLabel: loadTimeData.getString('sortLastOpenedLower'),
                    },
                    {
                        sortOrder: SortOrder.kAlphabetical,
                        label: loadTimeData.getString('sortAlphabetically'),
                        lowerLabel: loadTimeData.getString('sortAlphabetically'),
                    },
                    {
                        sortOrder: SortOrder.kReverseAlphabetical,
                        label: loadTimeData.getString('sortReverseAlphabetically'),
                        lowerLabel: loadTimeData.getString('sortReverseAlphabetically'),
                    }],
            },
            editing_: {
                type: Boolean,
                value: false,
            },
            selectedBookmarks_: {
                type: Object,
                value: {},
            },
            guestMode_: {
                type: Boolean,
                value: loadTimeData.getBoolean('guestMode'),
                reflectToAttribute: true,
            },
            renamingId_: {
                type: String,
                value: '',
            },
            deletionDescription_: {
                type: String,
                value: '',
            },
            /* If container containing shown bookmarks has scrollbars. */
            hasScrollbars_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            hasLoadedData_: {
                type: Boolean,
                value: false,
            },
            hasSomeActiveFilter_: {
                type: Boolean,
                value: false,
                computed: 'computeHasSomeActiveFilter_(searchQuery_, labels_.*)',
            },
            hasShownBookmarks_: {
                type: Boolean,
                value: false,
                computed: 'computeHasShownBookmarks_(displayLists_.*)',
            },
            canDrag_: {
                type: Boolean,
                value: true,
                computed: 'computeCanDrag_(editing_, renamingId_, hasSomeActiveFilter_)',
                observer: 'onCanDragChange_',
            },
            sectionVisibility_: {
                type: Object,
                computed: 'computeSectionVisibility_(hasLoadedData_,' +
                    'activeFolderPath_.length, hasShownBookmarks_,' +
                    'labels_.length, hasSomeActiveFilter_)',
            },
        };
    }
    static get observers() {
        return [
            'updateDisplayLists_(activeFolderPath_.*, labels_.*, ' +
                'activeSortIndex_, searchQuery_)',
        ];
    }
    constructor() {
        super();
        this.bookmarksApi_ = BookmarksApiProxyImpl.getInstance();
        this.shoppingServiceApi_ = ShoppingServiceApiProxyImpl.getInstance();
        this.shoppingListenerIds_ = [];
        this.trackedProductInfos_ = new Map();
        this.availableProductInfos_ = new Map();
        this.bookmarksService_ = new PowerBookmarksService(this);
        this.bookmarksDragManager_ = new PowerBookmarksDragManager(this);
        this.imageUrls_ = new Map();
        this.sectionVisibility_ = {};
        ColorChangeUpdater.forDocument().start();
    }
    connectedCallback() {
        super.connectedCallback();
        this.setAttribute('role', 'application');
        listenOnce(this.$.powerBookmarksContainer, 'dom-change', () => {
            setTimeout(() => this.bookmarksApi_.showUi(), 0);
        });
        this.focusOutlineManager_ = FocusOutlineManager.forDocument(document);
        this.bookmarksService_.startListening();
        this.shoppingServiceApi_.getAllPriceTrackedBookmarkProductInfo().then(res => {
            res.productInfos.forEach(product => this.set(`trackedProductInfos_.${product.bookmarkId.toString()}`, product));
        });
        this.shoppingServiceApi_.getAllShoppingBookmarkProductInfo().then(res => {
            res.productInfos.forEach(product => this.setAvailableProductInfo_(product));
        });
        this.updateShoppingCollectionFolderId_();
        const callbackRouter = this.shoppingServiceApi_.getCallbackRouter();
        this.shoppingListenerIds_.push(callbackRouter.priceTrackedForBookmark.addListener((product) => this.onBookmarkPriceTracked_(product)), callbackRouter.priceUntrackedForBookmark.addListener((product) => this.onBookmarkPriceUntracked_(product)));
        if (document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.shownBookmarksResizeObserver_ =
                new ResizeObserver(this.onShownBookmarksResize_.bind(this));
            this.shownBookmarksResizeObserver_.observe(this.$.bookmarks);
        }
        this.updateListScrollOffset_();
        this.bookmarksDragManager_.startObserving();
        this.recordMetricsOnConnected_();
    }
    disconnectedCallback() {
        this.bookmarksService_.stopListening();
        this.shoppingListenerIds_.forEach(id => this.shoppingServiceApi_.getCallbackRouter().removeListener(id));
        if (this.shownBookmarksResizeObserver_) {
            this.shownBookmarksResizeObserver_.disconnect();
            this.shownBookmarksResizeObserver_ = undefined;
        }
        this.bookmarksDragManager_.stopObserving();
    }
    setCurrentUrl(url) {
        this.currentUrl_ = url;
    }
    setImageUrl(bookmark, url) {
        this.set(`imageUrls_.${bookmark.id.toString()}`, url);
    }
    onBookmarksLoaded() {
        this.updateDisplayLists_();
        this.hasLoadedData_ = true;
    }
    onBookmarkChanged(id, changedInfo) {
        const bookmark = this.bookmarksService_.findBookmarkWithId(id);
        if (this.hasSomeActiveFilter_ &&
            (this.bookmarkShouldShow_(bookmark) ||
                this.bookmarkIsShowing_(bookmark))) {
            this.updateDisplayLists_();
        }
        Object.keys(changedInfo).forEach(key => {
            this.notifyPathIfVisible_(id, key);
        });
        this.updateShoppingData_();
    }
    onBookmarkCreated(bookmark, parent) {
        if (this.bookmarkShouldShow_(bookmark)) {
            this.updateShoppingCollectionFolderId_();
            const scrollTop = this.$.bookmarks.scrollTop;
            this.updateDisplayLists_();
            if (bookmark.url) {
                getAnnouncerInstance().announce(loadTimeData.getStringF('bookmarkCreated', getBookmarkName(bookmark)));
            }
            else {
                getAnnouncerInstance().announce(loadTimeData.getStringF('bookmarkFolderCreated', getBookmarkName(bookmark)));
            }
            for (let i = 0; i < this.displayLists_.length; i++) {
                const indexInList = this.displayLists_[i].indexOf(bookmark);
                if (indexInList > -1) {
                    const listElement = this.getDisplayListElement_(i);
                    if (listElement &&
                        (indexInList < listElement.firstVisibleIndex ||
                            indexInList > listElement.lastVisibleIndex)) {
                        listElement.scrollToIndex(indexInList);
                    }
                    else {
                        afterNextRender(this, () => {
                            this.$.bookmarks.scrollTop = scrollTop;
                        });
                    }
                    break;
                }
            }
        }
        this.updateShoppingData_();
        this.notifyPathIfVisible_(parent.id, 'children');
    }
    onBookmarkMoved(bookmark, oldParent, newParent) {
        const shouldShow = this.bookmarkShouldShow_(bookmark);
        const isShowing = this.bookmarkIsShowing_(bookmark);
        if (oldParent === newParent && shouldShow) {
            getAnnouncerInstance().announce(loadTimeData.getStringF('bookmarkReordered', getBookmarkName(bookmark)));
        }
        else if ((shouldShow !== isShowing) ||
            (shouldShow && this.hasSomeActiveFilter_)) {
            const scrollTop = this.$.bookmarks.scrollTop;
            this.updateDisplayLists_();
            getAnnouncerInstance().announce(loadTimeData.getStringF('bookmarkMoved', getBookmarkName(bookmark), getBookmarkName(newParent)));
            afterNextRender(this, () => {
                this.$.bookmarks.scrollTop = scrollTop;
            });
        }
        // If the new parent folder is visible, notify to ensure its displayed
        // child count is updated.
        this.notifyPathIfVisible_(newParent.id, 'children');
    }
    onBookmarkRemoved(bookmark) {
        const scrollTop = this.$.bookmarks.scrollTop;
        const isShown = this.bookmarkIsShowing_(bookmark);
        if (isShown) {
            this.removeNodeFromDisplayLists_(bookmark.id);
            getAnnouncerInstance().announce(loadTimeData.getStringF('bookmarkDeleted', getBookmarkName(bookmark)));
            afterNextRender(this, () => {
                this.$.bookmarks.scrollTop = scrollTop;
            });
        }
        if (this.shoppingCollectionFolderId_ === bookmark.id) {
            this.shoppingCollectionFolderId_ = '';
        }
        this.set(`trackedProductInfos_.${bookmark.id}`, null);
        this.availableProductInfos_.delete(bookmark.id);
        // If the parent folder is visible, notify to ensure its displayed
        // child count is updated.
        this.notifyPathIfVisible_(bookmark.parentId, 'children');
    }
    isPriceTracked(bookmark) {
        return !!this.get(`trackedProductInfos_.${bookmark.id}`);
    }
    getProductImageUrl(bookmark) {
        const bookmarkProductInfo = this.availableProductInfos_.get(bookmark.id);
        if (bookmarkProductInfo) {
            return bookmarkProductInfo.info.imageUrl.url;
        }
        else {
            return '';
        }
    }
    /** PowerBookmarksDragDelegate */
    getFallbackBookmark() {
        return this.getParentFolder_();
    }
    /** PowerBookmarksDragDelegate */
    getFallbackDropTargetElement() {
        return this;
    }
    /** PowerBookmarksDragDelegate */
    onFinishDrop(dropTarget) {
        this.focusBookmark_(dropTarget.id);
        // Show the focus state immediately after dropping a bookmark to indicate
        // where the bookmark was moved to, and remove the state immediately after
        // the next mouse event.
        this.focusOutlineManager_.visible = true;
        document.addEventListener('mousedown', () => {
            this.focusOutlineManager_.visible = false;
        }, { once: true });
    }
    getBookmarkDescriptionForTests(bookmark) {
        return this.getBookmarkDescription_(bookmark);
    }
    clickBookmarkRowForTests(bookmark) {
        const event = new CustomEvent('row-clicked', {
            bubbles: true,
            composed: true,
            detail: {
                bookmark: bookmark,
                event: new MouseEvent('row-clicked'),
            },
        });
        this.onRowClicked_(event);
    }
    setRenamingIdForTests(id) {
        const event = new CustomEvent('rename', {
            bubbles: true,
            composed: true,
            detail: {
                id: id,
            },
        });
        this.setRenamingId_(event);
    }
    notifyPathIfVisible_(id, key) {
        for (let i = 0; i < this.displayLists_.length; i++) {
            const listIndex = this.displayLists_[i].findIndex(b => b.id === id);
            if (listIndex > -1) {
                this.notifyPath(`displayLists_.${i}.${listIndex}.${key}`);
                return;
            }
        }
    }
    computeCanDrag_() {
        return !this.editing_ && !this.renamingId_ && !this.hasSomeActiveFilter_;
    }
    focusBookmark_(id) {
        const bookmarkElement = this.shadowRoot.querySelector(`#bookmark-${id}`);
        if (bookmarkElement) {
            bookmarkElement.focus();
        }
    }
    isPriceTrackingEligible_(bookmark) {
        return !!this.availableProductInfos_.get(bookmark.id);
    }
    onBookmarkPriceTracked_(product) {
        this.set(`trackedProductInfos_.${product.bookmarkId.toString()}`, product);
    }
    onBookmarkPriceUntracked_(product) {
        this.set(`trackedProductInfos_.${product.bookmarkId.toString()}`, null);
    }
    bookmarkIsShowing_(bookmark) {
        return this.displayLists_.some(list => list.includes(bookmark));
    }
    removeNodeFromDisplayLists_(nodeId) {
        for (let listIndex = 0; listIndex < this.displayLists_.length; listIndex++) {
            const itemIndex = this.displayLists_[listIndex].findIndex(b => b.id === nodeId);
            if (itemIndex > -1) {
                this.splice(`displayLists_.${listIndex}`, itemIndex, 1);
            }
        }
    }
    /**
     * Returns true if the given node is either the current active folder or a
     * root folder that isn't shown itself while the all bookmarks list is shown.
     */
    visibleParent_(parent) {
        const activeFolder = this.getActiveFolder_();
        return (!activeFolder && parent.parentId === '0' &&
            !this.bookmarkIsShowing_(parent)) ||
            parent === activeFolder;
    }
    bookmarkShouldShow_(bookmark) {
        if (this.hasSomeActiveFilter_) {
            return this.bookmarksService_.bookmarkMatchesSearchQueryAndLabels(bookmark, this.labels_, this.searchQuery_);
        }
        return this.visibleParent_(this.bookmarksService_.findBookmarkWithId(bookmark.parentId));
    }
    getActiveFolder_() {
        if (this.activeFolderPath_.length) {
            return this.activeFolderPath_[this.activeFolderPath_.length - 1];
        }
        return undefined;
    }
    getBackButtonLabel_() {
        const activeFolder = this.getActiveFolder_();
        const parentFolder = this.bookmarksService_.findBookmarkWithId(activeFolder ? activeFolder.parentId : undefined);
        return loadTimeData.getStringF('backButtonLabel', this.getFolderLabel_(parentFolder));
    }
    getBookmarksListRole_() {
        return this.editing_ ? 'listbox' : 'list';
    }
    getBookmarkDescription_(bookmark) {
        if (this.compact_) {
            if (bookmark.url) {
                return undefined;
            }
            const count = bookmark.children ? bookmark.children.length : 0;
            return loadTimeData.getStringF('bookmarkFolderChildCount', count);
        }
        else {
            let urlString;
            if (bookmark.url) {
                const url = new URL(bookmark.url);
                // Show chrome:// if it's a chrome internal url
                if (url.protocol === 'chrome:') {
                    urlString = 'chrome://' + url.hostname;
                }
                urlString = url.hostname;
            }
            if (urlString && this.searchQuery_ && bookmark.parentId) {
                const parentFolder = this.bookmarksService_.findBookmarkWithId(bookmark.parentId);
                const folderLabel = this.getFolderLabel_(parentFolder);
                return loadTimeData.getStringF('urlFolderDescription', urlString, folderLabel);
            }
            return urlString;
        }
    }
    getBookmarkDescriptionMeta_(bookmark) {
        // If there is a price available for the product and it isn't being
        // tracked, return the current price which will be added to the description
        // meta section.
        const productInfo = this.availableProductInfos_.get(bookmark.id);
        if (productInfo && productInfo.info.currentPrice &&
            !this.isPriceTracked(bookmark)) {
            return productInfo.info.currentPrice;
        }
        return '';
    }
    getViewButtonIcon_() {
        return this.compact_ ? 'bookmarks:compact-view' : 'bookmarks:visual-view';
    }
    getViewButtonTooltip_() {
        return this.compact_ ? loadTimeData.getString('compactView') :
            loadTimeData.getString('visualView');
    }
    getBookmarkMenuA11yLabel_(url, title) {
        if (url) {
            return loadTimeData.getStringF('bookmarkMenuLabel', title);
        }
        else {
            return loadTimeData.getStringF('folderMenuLabel', title);
        }
    }
    getBookmarkA11yLabel_(id, url, title) {
        if (this.editing_) {
            if (this.get(`selectedBookmarks_.${id}`)) {
                if (url) {
                    return loadTimeData.getStringF('deselectBookmarkLabel', title);
                }
                return loadTimeData.getStringF('deselectFolderLabel', title);
            }
            else {
                if (url) {
                    return loadTimeData.getStringF('selectBookmarkLabel', title);
                }
                return loadTimeData.getStringF('selectFolderLabel', title);
            }
        }
        if (url) {
            return loadTimeData.getStringF('openBookmarkLabel', title);
        }
        return loadTimeData.getStringF('openFolderLabel', title);
    }
    getBookmarkA11yDescription_(bookmark) {
        let description = '';
        if (this.isPriceTracked(bookmark)) {
            description += loadTimeData.getStringF('a11yDescriptionPriceTracking', this.getCurrentPrice_(bookmark));
            const previousPrice = this.getPreviousPrice_(bookmark);
            if (previousPrice) {
                description += loadTimeData.getStringF('a11yDescriptionPriceChange', previousPrice);
            }
        }
        return description;
    }
    updateShoppingCollectionFolderId_() {
        this.shoppingServiceApi_.getShoppingCollectionBookmarkFolderId().then(res => {
            this.shoppingCollectionFolderId_ = res.collectionId.toString();
        });
    }
    isShoppingCollection_(bookmark) {
        return bookmark.id === this.shoppingCollectionFolderId_;
    }
    getBookmarkImageUrls_(bookmark) {
        const imageUrls = [];
        if (bookmark.url) {
            const imageUrl = this.get(`imageUrls_.${bookmark.id.toString()}`);
            if (imageUrl) {
                imageUrls.push(imageUrl);
            }
        }
        else if (this.canEdit_(bookmark) && bookmark.children &&
            !this.isShoppingCollection_(bookmark)) {
            bookmark.children.forEach((child) => {
                const childImageUrl = this.get(`imageUrls_.${child.id.toString()}`);
                if (childImageUrl) {
                    imageUrls.push(childImageUrl);
                }
            });
        }
        return imageUrls;
    }
    getBookmarkForceHover_(bookmark) {
        return bookmark === this.contextMenuBookmark_;
    }
    getActiveFolderLabel_() {
        return this.getFolderLabel_(this.getActiveFolder_());
    }
    getFolderLabel_(folder) {
        if (folder && folder.id !== loadTimeData.getString('otherBookmarksId') &&
            folder.id !== loadTimeData.getString('mobileBookmarksId')) {
            return folder.title;
        }
        else {
            return loadTimeData.getString('allBookmarks');
        }
    }
    getSortLabel_() {
        return this.sortTypes_[this.activeSortIndex_].label;
    }
    renamingItem_(id) {
        return id === this.renamingId_;
    }
    updateShoppingData_() {
        this.availableProductInfos_.clear();
        this.shoppingServiceApi_.getAllShoppingBookmarkProductInfo().then(res => {
            res.productInfos.forEach(product => this.setAvailableProductInfo_(product));
        });
    }
    setAvailableProductInfo_(productInfo) {
        const bookmarkId = productInfo.bookmarkId.toString();
        this.availableProductInfos_.set(bookmarkId, productInfo);
        if (productInfo.info.imageUrl.url === '') {
            return;
        }
        const bookmark = this.bookmarksService_.findBookmarkWithId(bookmarkId);
        if (!bookmark) {
            return;
        }
        this.setImageUrl(bookmark, productInfo.info.imageUrl.url);
    }
    /**
     * Update the lists of bookmarks and folders displayed to the user.
     */
    updateDisplayLists_() {
        const activeFolder = this.getActiveFolder_();
        const primaryList = this.bookmarksService_.filterBookmarks(activeFolder, this.activeSortIndex_, this.searchQuery_, this.labels_);
        this.displayLists_ = [primaryList];
        if (this.hasSomeActiveFilter_ && !!activeFolder) {
            const secondaryList = this.bookmarksService_.filterBookmarks(undefined, this.activeSortIndex_, this.searchQuery_, this.labels_, activeFolder);
            this.displayLists_.push(secondaryList);
        }
        this.displayLists_.forEach(list => this.bookmarksService_.refreshDataForBookmarks(list));
        this.updateListScrollOffset_();
    }
    updateListScrollOffset_() {
        // Set scrollOffset so the iron-list scrolling accounts for the space the
        // other scrolling UI elements take.
        afterNextRender(this, () => {
            const primaryList = this.getDisplayListElement_(0);
            const secondaryList = this.getDisplayListElement_(1);
            const bookmarksOffsetTop = this.$.bookmarks.offsetTop;
            if (primaryList) {
                primaryList.scrollOffset = primaryList.offsetTop - bookmarksOffsetTop;
            }
            if (secondaryList) {
                secondaryList.scrollOffset =
                    secondaryList.offsetTop - bookmarksOffsetTop;
            }
        });
    }
    onCanDragChange_() {
        if (this.canDrag_) {
            this.bookmarksDragManager_.startObserving();
        }
        else {
            this.bookmarksDragManager_.stopObserving();
        }
    }
    recordMetricsOnConnected_() {
        chrome.metricsPrivate.recordEnumerationValue('PowerBookmarks.SidePanel.SortTypeShown', this.sortTypes_[this.activeSortIndex_].sortOrder, SortOrder.kCount);
        chrome.metricsPrivate.recordEnumerationValue('PowerBookmarks.SidePanel.ViewTypeShown', this.compact_ ? ViewType.kCompact : ViewType.kExpanded, ViewType.kCount);
        chrome.metricsPrivate.recordEnumerationValue('PowerBookmarks.SidePanel.Search.CTR', SearchAction.SHOWN, SearchAction.COUNT);
    }
    canAddCurrentUrl_() {
        return this.bookmarksService_.canAddUrl(this.currentUrl_, this.getActiveFolder_());
    }
    canEdit_(bookmark) {
        return bookmark.id !== loadTimeData.getString('bookmarksBarId') &&
            bookmark.id !== loadTimeData.getString('managedBookmarksFolderId');
    }
    getSortMenuItemLabel_(sortType) {
        return loadTimeData.getStringF('sortByType', sortType.label);
    }
    getSortMenuItemLowerLabel_(sortType) {
        return loadTimeData.getStringF('sortByType', sortType.lowerLabel);
    }
    sortMenuItemIsSelected_(sortType) {
        return this.sortTypes_[this.activeSortIndex_].sortOrder ===
            sortType.sortOrder;
    }
    bookmarkIsSelected_(bookmark) {
        return this.get(`selectedBookmarks_.${bookmark.id.toString()}`);
    }
    /**
     * Invoked when the user clicks a power bookmarks row. This will either
     * display children in the case of a folder row, or open the URL in the case
     * of a bookmark row.
     */
    onRowClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.editing_) {
            if (event.detail.bookmark.children) {
                this.push('activeFolderPath_', event.detail.bookmark);
                // Cancel search when changing active folder.
                this.$.searchField.setValue('');
                afterNextRender(this, () => {
                    for (let i = 0; i < this.displayLists_.length; i++) {
                        if (this.displayLists_[i].length > 0) {
                            this.getDisplayListElement_(i).focusItem(0);
                            break;
                        }
                    }
                });
            }
            else {
                this.bookmarksApi_.openBookmark(event.detail.bookmark.id, this.activeFolderPath_.length, {
                    middleButton: event.detail.event.button === 1,
                    altKey: event.detail.event.altKey,
                    ctrlKey: event.detail.event.ctrlKey,
                    metaKey: event.detail.event.metaKey,
                    shiftKey: event.detail.event.shiftKey,
                }, ActionSource.kBookmark);
            }
        }
        // Workaround for this issue, causing unexpected list scrolling when
        // refocusing the list after changing tabs:
        // https://github.com/PolymerElements/iron-list/issues/270
        if (event.target) {
            event.target.blur();
        }
    }
    onRowSelectedChange_(event) {
        event.preventDefault();
        event.stopPropagation();
        const isSelected = this.bookmarkIsSelected_(event.detail.bookmark);
        if (event.detail.checked && !isSelected) {
            this.set(`selectedBookmarks_.${event.detail.bookmark.id.toString()}`, true);
        }
        else if (!event.detail.checked && isSelected) {
            this.set(`selectedBookmarks_.${event.detail.bookmark.id.toString()}`, false);
        }
    }
    async onBookmarksEdited_(event) {
        event.preventDefault();
        event.stopPropagation();
        let parentId = event.detail.folderId;
        for (const folder of event.detail.newFolders) {
            chrome.metricsPrivate.recordUserAction(ADD_FOLDER_ACTION_UMA);
            const newFolder = await this.bookmarksApi_.createFolder(folder.parentId, folder.title);
            folder.children.forEach(child => child.parentId = newFolder.id);
            if (folder.id === parentId) {
                parentId = newFolder.id;
            }
        }
        this.bookmarksApi_.editBookmarks(event.detail.bookmarks.map(bookmark => bookmark.id), event.detail.name, event.detail.url, parentId);
        this.selectedBookmarks_ = {};
        this.editing_ = false;
    }
    setRenamingId_(event) {
        this.renamingId_ = event.detail.id;
    }
    onRename_(event) {
        const newName = event.detail.value;
        if (newName != null) {
            this.bookmarksApi_.renameBookmark(event.detail.bookmark.id, newName);
        }
        this.renamingId_ = '';
    }
    getDisplayListElement_(index) {
        return this.shadowRoot.querySelector(`#shownBookmarksIronList${index}`);
    }
    notifyBookmarksListResize_() {
        for (let i = 0; i < this.displayLists_.length; i++) {
            if (this.displayLists_[i].length > 0) {
                this.getDisplayListElement_(i).notifyResize();
            }
        }
    }
    getFilterHeading_(index) {
        if (index === 0) {
            return loadTimeData.getStringF('primaryFilterHeading', this.getActiveFolderLabel_());
        }
        return loadTimeData.getString('secondaryFilterHeading');
    }
    getSelectedDescription_() {
        return loadTimeData.getStringF('selectedBookmarkCount', this.getSelectedBookmarksLength_());
    }
    getSelectedBookmarksList_() {
        const selectedEntries = Object.entries(this.selectedBookmarks_)
            .filter(([_id, selected]) => selected);
        const selectedIds = selectedEntries.map(([id, _selected]) => id);
        return selectedIds.map((id) => this.bookmarksService_.findBookmarkWithId(id));
    }
    getSelectedBookmarksLength_() {
        return Object.values(this.selectedBookmarks_)
            .filter((selected) => selected)
            .length;
    }
    /**
     * Toggles the given label between active and inactive.
     */
    onLabelsChanged_() {
        this.labels_ = [...this.$.labels.labels];
    }
    /**
     * Moves the displayed folders up one level when the back button is clicked.
     */
    onBackClicked_() {
        this.pop('activeFolderPath_');
    }
    onSearchChanged_(e) {
        this.searchQuery_ = e.detail.toLocaleLowerCase();
    }
    onSearchBlurred_() {
        chrome.metricsPrivate.recordEnumerationValue('PowerBookmarks.SidePanel.Search.CTR', SearchAction.SEARCHED, SearchAction.COUNT);
    }
    onContextMenuShown_(bookmark) {
        this.contextMenuBookmark_ = bookmark;
    }
    onShowContextMenuClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!event.detail.bookmark) {
            return;
        }
        const priceTracked = this.isPriceTracked(event.detail.bookmark);
        const priceTrackingEligible = this.isPriceTrackingEligible_(event.detail.bookmark);
        const bookmark = event.detail.bookmark;
        if (event.detail.event.button === 0) {
            this.$.contextMenu.showAt(event.detail.event, [bookmark], priceTracked, priceTrackingEligible, this.onContextMenuShown_.bind(this, bookmark));
        }
        else {
            this.$.contextMenu.showAtPosition(event.detail.event, [bookmark], priceTracked, priceTrackingEligible, this.onContextMenuShown_.bind(this, bookmark));
        }
    }
    getParentFolder_() {
        return this.getActiveFolder_() ||
            this.bookmarksService_.findBookmarkWithId(loadTimeData.getString('otherBookmarksId'));
    }
    onShowSortMenuClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.$.sortMenu.showAt(event.target);
    }
    onAddNewFolderClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        const newParent = this.getParentFolder_();
        if (editingDisabledByPolicy([newParent])) {
            this.showDisabledFeatureDialog_();
            return;
        }
        chrome.metricsPrivate.recordUserAction(ADD_FOLDER_ACTION_UMA);
        this.bookmarksApi_
            .createFolder(newParent.id, loadTimeData.getString('newFolderTitle'))
            .then((newFolder) => {
            this.renamingId_ = newFolder.id;
        });
    }
    onBulkEditClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.editing_ = !this.editing_;
        if (!this.editing_) {
            this.selectedBookmarks_ = {};
        }
    }
    onDeleteClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        const selectedBookmarksList = this.getSelectedBookmarksList_();
        if (editingDisabledByPolicy(selectedBookmarksList)) {
            this.showDisabledFeatureDialog_();
            return;
        }
        this.bookmarksApi_
            .deleteBookmarks(selectedBookmarksList.map((bookmark) => bookmark.id))
            .then(() => {
            this.showDeletionToastWithCount_(selectedBookmarksList.length);
            this.selectedBookmarks_ = {};
            this.editing_ = false;
        });
    }
    onContextMenuEditClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        if (editingDisabledByPolicy(event.detail.bookmarks)) {
            this.showDisabledFeatureDialog_();
            return;
        }
        this.showEditDialog_(event.detail.bookmarks, event.detail.bookmarks.length > 1);
    }
    onContextMenuDeleteClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.showDeletionToastWithCount_(event.detail.bookmarks.length);
        this.selectedBookmarks_ = {};
        this.editing_ = false;
    }
    onContextMenuClosed_() {
        // This check is needed to avoid the case where the context menu is closed
        // via right-click a new row, and is already re-opened by the time this
        // executes.
        if (!this.$.contextMenu.isOpen()) {
            this.contextMenuBookmark_ = undefined;
        }
    }
    showDeletionToastWithCount_(deletionCount) {
        PluralStringProxyImpl.getInstance()
            .getPluralString('bookmarkDeletionCount', deletionCount)
            .then(pluralString => {
            this.deletionDescription_ = pluralString;
            this.$.deletionToast.get().show();
        });
    }
    showDisabledFeatureDialog_() {
        this.$.disabledFeatureDialog.showModal();
    }
    closeDisabledFeatureDialog_() {
        this.$.disabledFeatureDialog.close();
    }
    onUndoClicked_() {
        this.bookmarksApi_.undo();
        this.$.deletionToast.get().hide();
    }
    onMoveClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        const selectedBookmarksList = this.getSelectedBookmarksList_();
        if (editingDisabledByPolicy(selectedBookmarksList)) {
            this.showDisabledFeatureDialog_();
            return;
        }
        this.showEditDialog_(selectedBookmarksList, true);
    }
    showEditDialog_(bookmarks, moveOnly) {
        this.$.editDialog.showDialog(this.activeFolderPath_, this.bookmarksService_.getTopLevelBookmarks(), bookmarks, moveOnly);
    }
    onBulkEditMenuClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.$.contextMenu.showAt(event, this.getSelectedBookmarksList_(), false, false);
    }
    onSortTypeClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.$.sortMenu.close();
        this.activeSortIndex_ = event.model.index;
        this.bookmarksApi_.setSortOrder(event.model.item.sortOrder);
        chrome.metricsPrivate.recordEnumerationValue('PowerBookmarks.SidePanel.SortTypeShown', event.model.item.sortOrder, SortOrder.kCount);
    }
    onViewToggleClicked_(event) {
        event.preventDefault();
        event.stopPropagation();
        this.compact_ = !this.compact_;
        this.notifyBookmarksListResize_();
        const viewType = this.compact_ ? ViewType.kCompact : ViewType.kExpanded;
        this.bookmarksApi_.setViewType(viewType);
        chrome.metricsPrivate.recordEnumerationValue('PowerBookmarks.SidePanel.ViewTypeShown', viewType, ViewType.kCount);
    }
    onAddTabClicked_() {
        const newParent = this.getParentFolder_();
        if (editingDisabledByPolicy([newParent])) {
            this.showDisabledFeatureDialog_();
            return;
        }
        chrome.metricsPrivate.recordUserAction(ADD_URL_ACTION_UMA);
        this.bookmarksApi_.bookmarkCurrentTabInFolder(newParent.id);
    }
    hideAddTabButton_() {
        return this.editing_ || this.guestMode_;
    }
    disableBackButton_() {
        return !this.activeFolderPath_.length || this.editing_;
    }
    getEmptyTitle_() {
        if (this.guestMode_) {
            return loadTimeData.getString('emptyTitleGuest');
        }
        else if (this.hasSomeActiveFilter_) {
            return loadTimeData.getString('emptyTitleSearch');
        }
        else {
            return loadTimeData.getString('emptyTitle');
        }
    }
    getEmptyBody_() {
        if (this.guestMode_) {
            return loadTimeData.getString('emptyBodyGuest');
        }
        else if (this.hasSomeActiveFilter_) {
            return loadTimeData.getString('emptyBodySearch');
        }
        else {
            return loadTimeData.getString('emptyBody');
        }
    }
    getEmptyImagePath_() {
        return this.hasSomeActiveFilter_ ? '' : './images/bookmarks_empty.svg';
    }
    getEmptyImagePathDark_() {
        return this.hasSomeActiveFilter_ ? '' : './images/bookmarks_empty_dark.svg';
    }
    computeHasSomeActiveFilter_() {
        return !!this.searchQuery_ || this.labels_.some(label => label.active);
    }
    computeHasShownBookmarks_() {
        return this.displayLists_.some((list) => list.length > 0);
    }
    computeSectionVisibility_() {
        if (this.guestMode_) {
            return { topLevelEmptyState: true };
        }
        if (!this.hasLoadedData_) {
            return { search: true, footer: true };
        }
        const hasActiveFolder = this.activeFolderPath_.length > 0;
        const hasShownBookmarks = this.hasShownBookmarks_;
        const hasSomeActiveFilter = this.hasSomeActiveFilter_;
        return {
            search: true,
            labels: this.labels_.length > 0,
            heading: !hasSomeActiveFilter && (hasActiveFolder || hasShownBookmarks),
            filterHeadings: hasSomeActiveFilter,
            folderEmptyState: !hasShownBookmarks && !hasSomeActiveFilter && hasActiveFolder,
            newFolderButton: !hasSomeActiveFilter,
            bookmarksList: hasShownBookmarks,
            topLevelEmptyState: !hasShownBookmarks && (hasSomeActiveFilter || !hasActiveFolder),
            footer: !hasSomeActiveFilter,
        };
    }
    /**
     * Whether the given price-tracked bookmark should display as if discounted.
     */
    showDiscountedPrice_(bookmark) {
        const bookmarkProductInfo = this.get(`trackedProductInfos_.${bookmark.id}`);
        if (bookmarkProductInfo) {
            return bookmarkProductInfo.info.previousPrice.length > 0;
        }
        return false;
    }
    getCurrentPrice_(bookmark) {
        const bookmarkProductInfo = this.get(`trackedProductInfos_.${bookmark.id}`);
        if (bookmarkProductInfo) {
            return bookmarkProductInfo.info.currentPrice;
        }
        else {
            return '';
        }
    }
    getPreviousPrice_(bookmark) {
        const bookmarkProductInfo = this.get(`trackedProductInfos_.${bookmark.id}`);
        if (bookmarkProductInfo) {
            return bookmarkProductInfo.info.previousPrice;
        }
        else {
            return '';
        }
    }
    onShownBookmarksResize_() {
        // The iron-lists of `displayLists_` are in a dynamically sized card.
        // Any time the size changes, let iron-list know so that iron-list can
        // properly adjust to its possibly new height.
        this.notifyBookmarksListResize_();
        this.hasScrollbars_ =
            this.$.bookmarks.scrollHeight > this.$.bookmarks.offsetHeight;
    }
}
customElements.define(PowerBookmarksListElement.is, PowerBookmarksListElement);

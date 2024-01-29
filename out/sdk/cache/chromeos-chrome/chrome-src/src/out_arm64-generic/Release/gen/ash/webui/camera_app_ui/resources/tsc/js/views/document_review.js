// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertInstanceof, assertNotReached } from '../assert.js';
import * as dom from '../dom.js';
import { I18nString } from '../i18n_string.js';
import { DocScanActionType, DocScanFixType, DocScanResultActionType, sendDocScanEvent, sendDocScanResultEvent, } from '../metrics.js';
import { Filenamer } from '../models/file_namer.js';
import { getI18nMessage } from '../models/load_time_data.js';
import { ChromeHelper } from '../mojo/chrome_helper.js';
import { ToteMetricFormat } from '../mojo/type.js';
import * as nav from '../nav.js';
import { speakMessage } from '../spoken_msg.js';
import { show as showToast } from '../toast.js';
import { MimeType, ViewName, } from '../type.js';
import { getKeyboardShortcut, instantiateTemplate, loadImage, share, } from '../util.js';
import { DocumentFixMode } from './document_fix_mode.js';
import { DocumentPreviewMode } from './document_preview_mode.js';
import { View } from './view.js';
export var Mode;
(function (Mode) {
    Mode[Mode["FIX"] = 0] = "FIX";
    Mode[Mode["PREVIEW"] = 1] = "PREVIEW";
})(Mode || (Mode = {}));
// The class to set on page element when the page is selected.
const ACTIVE_PAGE_CLASS = 'active';
const DELETE_PAGE_BUTTON_SELECTOR = '.delete';
/**
 * View controller for reviewing document scanning.
 */
export class DocumentReview extends View {
    constructor(resultSaver) {
        super(ViewName.DOCUMENT_REVIEW, {
            dismissByEsc: true,
            defaultFocusSelector: '.show .primary',
        });
        this.resultSaver = resultSaver;
        /**
         * Information of each pages for creating PDF files and sending metrics.
         */
        this.pages = [];
        /**
         * The index of the current active page.
         */
        this.selectedIndex = -1;
        /**
         * The current active mode.
         */
        this.mode = Mode.PREVIEW;
        /**
         * The promise of current page updating process. Null if no pages are being
         * updated.
         */
        this.updatingPage = null;
        /**
         * Pending payload for updating pages. Null if there isn't any pending
         * payload.
         */
        this.pendingUpdatePayload = null;
        /**
         * Count the fix times of each session (reset when page count is zero) for
         * sending events.
         */
        this.fixCount = 0;
        this.pagesElement =
            dom.getFrom(this.root, '.document-pages', HTMLDivElement);
        this.previewElement =
            dom.getFrom(this.root, '.document-preview', HTMLDivElement);
        this.pagesElement.addEventListener('keydown', (e) => {
            const key = getKeyboardShortcut(e);
            if (key === ' ') {
                const target = assertInstanceof(e.target, HTMLElement);
                target.click();
            }
        });
        this.pagesElement.addEventListener('click', async (e) => {
            const target = assertInstanceof(e.target, HTMLElement);
            const pageElement = target.closest('.page');
            if (pageElement === null) {
                return;
            }
            const index = Array.from(this.pagesElement.children).indexOf(pageElement);
            await this.waitForUpdatingPage();
            const clickOnDeleteButton = target.closest(DELETE_PAGE_BUTTON_SELECTOR) !== null;
            if (clickOnDeleteButton) {
                await this.onDeletePage(index);
                return;
            }
            await this.selectPage(index);
        });
        const pagesElementMutationObserver = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                assert(mutation.type === 'childList', '`mutation.type` must be `childList`');
                this.updateDeleteButtonLabels();
            }
        });
        pagesElementMutationObserver.observe(this.pagesElement, { childList: true });
        const fixMode = new DocumentFixMode({
            target: this.previewElement,
            onDone: async () => {
                await this.waitForUpdatingPage(() => this.showMode(Mode.PREVIEW));
            },
            onUpdatePage: async ({ corners, rotation }) => {
                const page = this.pages[this.selectedIndex];
                const isCornersUpdated = page.isCornersUpdated ||
                    page.corners.some((oldCorner, i) => oldCorner.x !== corners[i].x ||
                        oldCorner.y !== corners[i].y);
                const isRotationUpdated = page.isRotationUpdated || page.rotation !== rotation;
                await this.updatePage(this.selectedIndex, {
                    ...page,
                    corners,
                    rotation,
                    isCornersUpdated,
                    isRotationUpdated,
                });
            },
            onShow: () => {
                this.fixCount += 1;
            },
        });
        const previewMode = new DocumentPreviewMode({
            target: this.previewElement,
            onAdd: () => {
                sendDocScanEvent(DocScanActionType.ADD_PAGE);
                this.close();
            },
            onCancel: () => {
                this.sendResultEvent(DocScanResultActionType.CANCEL);
                this.clearPages();
                this.close();
            },
            onFix: async () => {
                sendDocScanEvent(DocScanActionType.FIX);
                await this.showMode(Mode.FIX);
            },
            onShare: async () => {
                this.sendResultEvent(DocScanResultActionType.SHARE);
                await this.share(this.pages.length > 1 ? MimeType.PDF : MimeType.JPEG);
            },
            onSave: (mimeType) => {
                this.sendResultEvent(mimeType === MimeType.JPEG ? DocScanResultActionType.SAVE_AS_PHOTO :
                    DocScanResultActionType.SAVE_AS_PDF);
                nav.open(ViewName.FLASH);
                this.save(mimeType)
                    .then(() => {
                    this.clearPages();
                    this.close();
                })
                    .catch(() => {
                    showToast(I18nString.ERROR_MSG_SAVE_FILE_FAILED);
                })
                    .finally(() => {
                    nav.close(ViewName.FLASH);
                });
            },
        });
        this.modes = {
            [Mode.FIX]: fixMode,
            [Mode.PREVIEW]: previewMode,
        };
        previewMode.show();
    }
    /**
     * Adds a page to `this.pages` and updates related elements.
     */
    async addPage(page) {
        const { blob: croppedBlob } = await this.crop(page);
        const pageInternal = {
            ...page,
            isCornersUpdated: false,
            isRotationUpdated: false,
            croppedBlob,
        };
        await this.addPageView(croppedBlob);
        this.pages.push(pageInternal);
    }
    async addPageView(blob) {
        const fragment = instantiateTemplate('#document-review-page');
        await this.updatePageView(fragment, blob);
        this.pagesElement.appendChild(fragment);
    }
    /**
     * Crops the pages and saves them to the file system as one file. If mimeType
     * is JPEG, only saves the first page.
     */
    async save(mimeType) {
        const blobs = this.pages.map((page) => page.croppedBlob);
        const name = (new Filenamer()).newDocumentName(mimeType);
        if (mimeType === MimeType.JPEG) {
            await this.resultSaver.savePhoto(blobs[0], ToteMetricFormat.kScanJpg, name, null);
        }
        else {
            const pdfBlob = await ChromeHelper.getInstance().convertToPdf(blobs);
            await this.resultSaver.savePhoto(pdfBlob, ToteMetricFormat.kScanPdf, name, null);
        }
    }
    /**
     * Crops the pages and shares them as one file. If mimeType is JPEG, only
     * share the first page.
     */
    async share(mimeType) {
        const blobs = this.pages.map((page) => page.croppedBlob);
        const name = (new Filenamer()).newDocumentName(mimeType);
        const blob = mimeType === MimeType.JPEG ?
            blobs[0] :
            await ChromeHelper.getInstance().convertToPdf(blobs);
        const file = new File([blob], name, { type: mimeType });
        await share(file);
    }
    /**
     * Open DocumentReview view with specific mode. Promise resolves with page
     * count when the view is closed.
     */
    async open({ fix }) {
        assert(this.pages.length !== 0, 'Page count is expected to be be larger than zero');
        await this.selectPage(this.pages.length - 1);
        await this.showMode(fix === true ? Mode.FIX : Mode.PREVIEW);
        await nav.open(this.name).closed;
        return this.pages.length;
    }
    /**
     * Closes DocumentReview view.
     */
    close() {
        nav.close(this.name);
    }
    /**
     * Shows/Updates the elements of the mode and hide another mode if necessary.
     */
    async showMode(mode) {
        if (this.mode !== mode) {
            await this.updateModeView(mode);
            this.modes[this.mode].hide();
            this.modes[mode].show();
            this.mode = mode;
        }
        this.modes[this.mode].focusDefaultElement();
    }
    /**
     * Updates the elements of the mode.
     */
    async updateModeView(mode) {
        switch (mode) {
            case Mode.FIX: {
                const { blob, corners, rotation } = this.pages[this.selectedIndex];
                await this.modes[mode].update({ corners, rotation, blob });
                break;
            }
            case Mode.PREVIEW: {
                const { src } = this.getPageImageElement(this.pagesElement.children[this.selectedIndex]);
                await this.modes[mode].update({ src, pageIndex: this.selectedIndex });
                break;
            }
            default:
                assertNotReached();
        }
    }
    /**
     * Sets `this.updatingPage` and updates `this.pages` and related elements.
     * Sets `this.pendingUpdatePayload` if there's an ongoing update.
     * `this.pendingUpdatePayload` will be consumed after the current update is
     * done.
     *
     * @return Promise resolves when the update is done and there isn't any
     * pending payload.
     */
    async updatePage(index, page) {
        this.pendingUpdatePayload = [index, page];
        if (this.updatingPage !== null) {
            return;
        }
        while (this.pendingUpdatePayload !== null) {
            this.updatingPage = this.updatePageInternal(...this.pendingUpdatePayload);
            this.pendingUpdatePayload = null;
            await this.updatingPage;
        }
        this.updatingPage = null;
    }
    /**
     * Shows loading view and prevents user actions until the update is done.
     */
    async waitForUpdatingPage(onUpdated) {
        if (this.updatingPage === null) {
            return onUpdated?.();
        }
        nav.open(ViewName.FLASH);
        try {
            while (this.updatingPage !== null) {
                await this.updatingPage;
            }
            return await onUpdated?.();
        }
        finally {
            nav.close(ViewName.FLASH);
        }
    }
    async updatePageInternal(index, page) {
        const { blob: croppedBlob } = await this.crop(page);
        const pageElement = this.pagesElement.children[index];
        await this.updatePageView(pageElement, croppedBlob);
        this.pages[index] = { ...page, croppedBlob };
    }
    async updatePageView(pageElement, blob) {
        const pageImageElement = this.getPageImageElement(pageElement);
        await loadImage(pageImageElement, blob);
    }
    /**
     * The handler called when users delete a page.
     */
    async onDeletePage(index) {
        sendDocScanEvent(DocScanActionType.DELETE_PAGE);
        await this.deletePage(index);
        speakMessage(getI18nMessage(I18nString.DELETE_PAGE_MESSAGE, index + 1));
        if (this.pages.length === 0) {
            // By design, this line is not reachable. If we decide to let users delete
            // the last page later, we should close the view when no pages remain.
            this.close();
        }
    }
    /**
     * Deletes the page and selects the next page.
     */
    async deletePage(index) {
        this.deletePageView(index);
        this.pages.splice(index, 1);
        await this.selectPage(this.selectedIndex === this.pages.length ? this.pages.length - 1 :
            this.selectedIndex);
    }
    deletePageView(index) {
        const pageElement = this.pagesElement.children[index];
        const imageElement = this.getPageImageElement(pageElement);
        URL.revokeObjectURL(imageElement.src);
        pageElement.remove();
    }
    // TODO(pihsun): Revisit which operations of document scanning should be on
    // the same queue.
    async selectPage(index) {
        this.selectedIndex = index;
        this.selectPageView(index);
        await this.updateModeView(this.mode);
    }
    /**
     * Changes active page and updates related elements.
     */
    selectPageView(index) {
        for (let i = 0; i < this.pagesElement.children.length; i++) {
            const pageElement = this.pagesElement.children[i];
            pageElement.classList.remove(ACTIVE_PAGE_CLASS);
            pageElement.setAttribute('aria-selected', 'false');
            pageElement.setAttribute('tabindex', '-1');
        }
        const activePageElement = assertInstanceof(this.pagesElement.children[index], HTMLElement);
        activePageElement.classList.add(ACTIVE_PAGE_CLASS);
        activePageElement.setAttribute('aria-selected', 'true');
        activePageElement.setAttribute('tabindex', '0');
        activePageElement.focus();
        activePageElement.scrollIntoView();
    }
    /**
     * Deletes all pages and clears sidebar.
     */
    clearPages() {
        this.pages = [];
        this.clearPagesView();
    }
    clearPagesView() {
        for (const pageElement of this.pagesElement.children) {
            const imageElement = this.getPageImageElement(pageElement);
            URL.revokeObjectURL(imageElement.src);
        }
        this.pagesElement.replaceChildren();
    }
    async crop(page) {
        const { blob, corners, rotation } = page;
        const newBlob = await ChromeHelper.getInstance().convertToDocument(blob, corners, rotation, MimeType.JPEG);
        return { ...page, blob: newBlob };
    }
    getPageImageElement(node) {
        return dom.getFrom(node, '.thumbnail', HTMLImageElement);
    }
    leaving() {
        // TODO(pihsun): Should have a proper way to "pause" leaving.
        void this.waitForUpdatingPage();
        if (this.pages.length === 0) {
            this.fixCount = 0;
        }
        return true;
    }
    handlingKey(key) {
        if (this.pages.length === 1 ||
            !this.pagesElement.contains(document.activeElement)) {
            return false;
        }
        if (key === 'ArrowUp') {
            const index = this.selectedIndex === 0 ? this.pages.length - 1 :
                this.selectedIndex - 1;
            // TODO(b/301360817): Revisit which operations should be on the same
            // queue.
            void this.selectPage(index);
            return true;
        }
        else if (key === 'ArrowDown') {
            const index = this.selectedIndex === this.pages.length - 1 ?
                0 :
                this.selectedIndex + 1;
            // TODO(b/301360817): Revisit which operations should be on the same
            // queue.
            void this.selectPage(index);
            return true;
        }
        else if (key === 'Delete') {
            // TODO(b/301360817): Revisit which operations should be on the same
            // queue.
            void this.onDeletePage(this.selectedIndex);
            return true;
        }
        return false;
    }
    setUnfocusable() {
        // `tabindex` of page elements might be changed by `selectPage` before the
        // view is opened to avoid flickering. Set `tabindex` to -1 before
        // `super.setUnfocusable()` to avoid `tabindex` being changed to 0 by
        // `super.setFocusable()`.
        if (this.pagesElement.children.length !== 0) {
            const activePageElement = this.pagesElement.children[this.selectedIndex];
            activePageElement.setAttribute('tabindex', '-1');
            activePageElement.setAttribute('aria-selected', 'false');
        }
        super.setUnfocusable();
    }
    sendResultEvent(action) {
        const isCornersUpdated = this.pages.some((page) => page.isCornersUpdated);
        const isRotationUpdated = this.pages.some((page) => page.isRotationUpdated);
        let fixType = DocScanFixType.NONE;
        if (isCornersUpdated) {
            fixType |= DocScanFixType.CORNER;
        }
        if (isRotationUpdated) {
            fixType |= DocScanFixType.ROTATION;
        }
        return sendDocScanResultEvent(action, fixType, this.fixCount, this.pages.length);
    }
    updateDeleteButtonLabels() {
        for (let i = 0; i < this.pagesElement.children.length; i++) {
            const deleteButton = dom.getFrom(this.pagesElement.children[i], DELETE_PAGE_BUTTON_SELECTOR, HTMLElement);
            deleteButton.setAttribute('aria-label', getI18nMessage(I18nString.DELETE_PAGE_BUTTON, i + 1));
        }
    }
}

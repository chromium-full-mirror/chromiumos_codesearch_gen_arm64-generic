// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './elements/viewer-error-dialog.js';
// 
import './elements/viewer-password-dialog.js';
import './elements/viewer-pdf-sidenav.js';
import './elements/viewer-properties-dialog.js';
import './elements/viewer-toolbar.js';
import './elements/shared-vars.css.js';
import './pdf_viewer_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { listenOnce } from 'chrome://resources/js/util.js';
import { FittingType, SaveRequestType } from './constants.js';
import { PluginController } from './controller.js';
// 
import { ChangePageOrigin } from './elements/viewer-bookmark.js';
// 
import { LocalStorageProxyImpl } from './local_storage_proxy.js';
import { record, UserAction } from './metrics.js';
import { NavigatorDelegateImpl, PdfNavigator, WindowOpenDisposition } from './navigator.js';
import { deserializeKeyEvent, LoadState } from './pdf_scripting_api.js';
import { getTemplate } from './pdf_viewer.html.js';
import { PdfViewerBaseElement } from './pdf_viewer_base.js';
import { hasCtrlModifier, hasCtrlModifierOnly, shouldIgnoreKeyEvents } from './pdf_viewer_utils.js';
/**
 * Return the filename component of a URL, percent decoded if possible.
 * Exported for tests.
 */
export function getFilenameFromURL(url) {
    // Ignore the query and fragment.
    const mainUrl = url.split(/#|\?/)[0];
    const components = mainUrl.split(/\/|\\/);
    const filename = components[components.length - 1];
    try {
        return decodeURIComponent(filename);
    }
    catch (e) {
        if (e instanceof URIError) {
            return filename;
        }
        throw e;
    }
}
function eventToPromise(event, target) {
    return new Promise(resolve => listenOnce(target, event, (_e) => resolve()));
}
const LOCAL_STORAGE_SIDENAV_COLLAPSED_KEY = 'sidenavCollapsed';
/**
 * The background color used for the regular viewer. Its decimal value in string
 * format should match `kPdfViewerBackgroundColor` in
 * components/pdf/browser/plugin_response_writer.cc.
 */
const BACKGROUND_COLOR = 0xff525659;
export class PdfViewerElement extends PdfViewerBaseElement {
    static get is() {
        return 'pdf-viewer';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            annotationAvailable_: {
                type: Boolean,
                computed: 'computeAnnotationAvailable_(' +
                    'hadPassword_, clockwiseRotations_, canSerializeDocument_,' +
                    'twoUpViewEnabled_)',
            },
            annotationMode_: {
                type: Boolean,
                value: false,
            },
            attachments_: {
                type: Array,
                value: () => [],
            },
            bookmarks_: {
                type: Array,
                value: () => [],
            },
            canSerializeDocument_: {
                type: Boolean,
                value: false,
            },
            clockwiseRotations_: {
                type: Number,
                value: 0,
            },
            /** The number of pages in the PDF document. */
            docLength_: Number,
            documentHasFocus_: {
                type: Boolean,
                value: false,
            },
            documentMetadata_: {
                type: Object,
                value: () => { },
            },
            fileName_: String,
            hadPassword_: {
                type: Boolean,
                value: false,
            },
            hasEdits_: {
                type: Boolean,
                value: false,
            },
            hasEnteredAnnotationMode_: {
                type: Boolean,
                value: false,
            },
            isFormFieldFocused_: {
                type: Boolean,
                value: false,
            },
            /** The current loading progress of the PDF document (0 - 100). */
            loadProgress_: Number,
            /** The number of the page being viewed (1-based). */
            pageNo_: Number,
            pdfAnnotationsEnabled_: {
                type: Boolean,
                value: false,
            },
            // 
            pdfOcrEnabled_: {
                type: Boolean,
                value: false,
            },
            // 
            printingEnabled_: {
                type: Boolean,
                value: false,
            },
            showPasswordDialog_: {
                type: Boolean,
                value: false,
            },
            showPropertiesDialog_: {
                type: Boolean,
                value: false,
            },
            sidenavCollapsed_: {
                type: Boolean,
                value: false,
            },
            title_: String,
            twoUpViewEnabled_: {
                type: Boolean,
                value: false,
            },
            viewportZoom_: {
                type: Number,
                value: 1,
            },
            zoomBounds_: {
                type: Object,
                value: () => ({ min: 0, max: 0 }),
            },
        };
    }
    // 
    constructor() {
        super();
        this.beepCount = 0;
        this.navigator_ = null;
        // 
        this.pluginController_ = null;
        /**
         * The state to which to restore `sidenavCollapsed_` after exiting annotation
         * mode.
         */
        this.sidenavRestoreState_ = false;
        this.toolbarEnabled_ = false;
        // TODO(dpapad): Add tests after crbug.com/1111459 is fixed.
        this.sidenavCollapsed_ = Boolean(Number.parseInt(LocalStorageProxyImpl.getInstance().getItem(LOCAL_STORAGE_SIDENAV_COLLAPSED_KEY), 10));
    }
    getBackgroundColor() {
        return BACKGROUND_COLOR;
    }
    setPluginSrc(plugin) {
        plugin.src = this.browserApi.getStreamInfo().streamUrl;
    }
    init(browserApi) {
        this.initInternal(browserApi, this.$.scroller, this.$.sizer, this.$.content);
        this.pluginController_ = PluginController.getInstance();
        // 
        this.fileName_ = getFilenameFromURL(this.originalUrl);
        this.title_ = this.fileName_;
        assert(this.paramsParser);
        this.toolbarEnabled_ =
            this.paramsParser.shouldShowToolbar(this.originalUrl);
        if (this.toolbarEnabled_) {
            this.$.toolbar.hidden = false;
        }
        const showSidenav = this.paramsParser.shouldShowSidenav(this.originalUrl, this.sidenavCollapsed_);
        this.sidenavCollapsed_ = !showSidenav;
        this.navigator_ = new PdfNavigator(this.originalUrl, this.viewport, this.paramsParser, new NavigatorDelegateImpl(browserApi));
        // Listen for save commands from the browser.
        if (this.pdfOopifEnabled) {
            chrome.pdfViewerPrivate.onSave.addListener(this.onSave_.bind(this));
        }
        else {
            chrome.mimeHandlerPrivate.onSave.addListener(this.onSave_.bind(this));
        }
        this.embedded_ = this.browserApi.getStreamInfo().embedded;
    }
    handleKeyEvent(e) {
        if (shouldIgnoreKeyEvents() || e.defaultPrevented) {
            return;
        }
        // Let the viewport handle directional key events.
        if (this.viewport.handleDirectionalKeyEvent(e, this.isFormFieldFocused_)) {
            return;
        }
        if (document.fullscreenElement !== null) {
            // Disable zoom shortcuts in Presentation mode.
            // Handle '+' and '-' buttons (both in the numpad and elsewhere).
            if (hasCtrlModifier(e) &&
                (e.key === '=' || e.key === '-' || e.key === '+')) {
                e.preventDefault();
            }
            // Disable further key handling when in Presentation mode.
            return;
        }
        switch (e.key) {
            case 'a':
                // Take over Ctrl+A (but not other combinations like Ctrl-Shift-A).
                // Note that on macOS, "Ctrl" is Command.
                if (hasCtrlModifierOnly(e)) {
                    this.pluginController_.selectAll();
                    // Since we do selection ourselves.
                    e.preventDefault();
                }
                return;
            case '[':
                // Do not use hasCtrlModifier() here, since Command + [ is already
                // taken by the "go back to the previous webpage" action.
                if (e.ctrlKey) {
                    this.rotateCounterclockwise();
                }
                return;
            case ']':
                // Do not use hasCtrlModifier() here, since Command + ] is already
                // taken by the "go forward to the next webpage" action.
                if (e.ctrlKey) {
                    this.rotateClockwise();
                }
                return;
        }
        // Handle toolbar related key events.
        this.handleToolbarKeyEvent_(e);
    }
    /**
     * Helper for handleKeyEvent dealing with events that control toolbars.
     */
    handleToolbarKeyEvent_(e) {
        // TODO(thestig): Should this use hasCtrlModifier() or stay as is?
        if (e.key === '\\' && e.ctrlKey) {
            this.$.toolbar.fitToggle();
        }
        // TODO: Add handling for additional relevant hotkeys for the new unified
        // toolbar.
    }
    // 
    onDisplayAnnotationsChanged_(e) {
        assert(this.currentController);
        this.currentController.setDisplayAnnotations(e.detail);
    }
    async enterPresentationMode_() {
        const scroller = this.$.scroller;
        this.viewport.saveZoomState();
        await Promise.all([
            eventToPromise('fullscreenchange', scroller),
            scroller.requestFullscreen(),
        ]);
        this.forceFit(FittingType.FIT_TO_HEIGHT);
        // Switch viewport's wheel behavior.
        this.viewport.setPresentationMode(true);
        // Set presentation mode, which restricts the content to read only
        // (e.g. disable forms and links).
        this.pluginController_.setPresentationMode(true);
        // Nothing else to do here. The viewport will be updated as a result
        // of a 'resize' event callback.
    }
    exitPresentationMode_() {
        // Revert back to the normal state when exiting Presentation mode.
        assert(document.fullscreenElement === null);
        this.viewport.setPresentationMode(false);
        this.pluginController_.setPresentationMode(false);
        // Ensure that directional keys still work after exiting.
        this.shadowRoot.querySelector('embed').focus();
        // Set zoom back to original zoom before presentation mode.
        this.viewport.restoreZoomState();
    }
    async onPresentClick_() {
        await this.enterPresentationMode_();
        // When fullscreen changes, it means that the user exited Presentation
        // mode.
        await eventToPromise('fullscreenchange', this.$.scroller);
        this.exitPresentationMode_();
    }
    onPropertiesClick_() {
        assert(!this.showPropertiesDialog_);
        this.showPropertiesDialog_ = true;
    }
    onPropertiesDialogClose_() {
        assert(this.showPropertiesDialog_);
        this.showPropertiesDialog_ = false;
    }
    /**
     * Changes two up view mode for the controller. Controller will trigger
     * layout update later, which will update the viewport accordingly.
     */
    onTwoUpViewChanged_(e) {
        const twoUpViewEnabled = e.detail;
        assert(this.currentController);
        this.currentController.setTwoUpView(twoUpViewEnabled);
        record(twoUpViewEnabled ? UserAction.TWO_UP_VIEW_ENABLE :
            UserAction.TWO_UP_VIEW_DISABLE);
    }
    /**
     * Moves the viewport to a point in a page. Called back after a
     * 'transformPagePointReply' is returned from the plugin.
     * @param origin Identifier for the caller for logging purposes.
     * @param page The index of the page to go to. zero-based.
     * @param message Message received from the plugin containing the x and y to
     *     navigate to in screen coordinates.
     */
    goToPageAndXy_(origin, page, message) {
        this.viewport.goToPageAndXy(page, message.x, message.y);
        if (origin === ChangePageOrigin.BOOKMARK) {
            record(UserAction.FOLLOW_BOOKMARK);
        }
    }
    /** @return The bookmarks. Used for testing. */
    get bookmarks() {
        return this.bookmarks_;
    }
    setLoadState(loadState) {
        super.setLoadState(loadState);
        if (loadState === LoadState.FAILED) {
            this.closePasswordDialog_();
        }
    }
    updateProgress(progress) {
        if (this.toolbarEnabled_) {
            this.loadProgress_ = progress;
        }
        super.updateProgress(progress);
    }
    onErrorDialog_() {
        // The error screen can only reload from a normal tab.
        if (!chrome.tabs || this.browserApi.getStreamInfo().tabId === -1) {
            return;
        }
        const errorDialog = this.shadowRoot.querySelector('#error-dialog');
        errorDialog.reloadFn = () => {
            chrome.tabs.reload(this.browserApi.getStreamInfo().tabId);
        };
    }
    closePasswordDialog_() {
        const passwordDialog = this.shadowRoot.querySelector('#password-dialog');
        if (passwordDialog) {
            passwordDialog.close();
        }
    }
    onPasswordDialogClose_() {
        this.showPasswordDialog_ = false;
    }
    /**
     * An event handler for handling password-submitted events. These are fired
     * when an event is entered into the password dialog.
     * @param event A password-submitted event.
     */
    onPasswordSubmitted_(event) {
        this.pluginController_.getPasswordComplete(event.detail.password);
    }
    updateUiForViewportChange() {
        // Update toolbar elements.
        this.clockwiseRotations_ = this.viewport.getClockwiseRotations();
        this.pageNo_ = this.viewport.getMostVisiblePage() + 1;
        this.twoUpViewEnabled_ = this.viewport.twoUpViewEnabled();
        assert(this.currentController);
        this.currentController.viewportChanged();
    }
    handleStrings(strings) {
        super.handleStrings(strings);
        this.pdfAnnotationsEnabled_ =
            loadTimeData.getBoolean('pdfAnnotationsEnabled');
        // 
        this.pdfOcrEnabled_ = loadTimeData.getBoolean('pdfOcrEnabled');
        // 
        this.printingEnabled_ = loadTimeData.getBoolean('printingEnabled');
        const presetZoomFactors = this.viewport.presetZoomFactors;
        this.zoomBounds_.min = Math.round(presetZoomFactors[0] * 100);
        this.zoomBounds_.max =
            Math.round(presetZoomFactors[presetZoomFactors.length - 1] * 100);
    }
    handleScriptingMessage(message) {
        if (super.handleScriptingMessage(message)) {
            return true;
        }
        if (this.delayScriptingMessage(message)) {
            return true;
        }
        switch (message.data.type.toString()) {
            case 'getSelectedText':
                this.pluginController_.getSelectedText().then(this.handleSelectedTextReply.bind(this));
                break;
            case 'print':
                this.pluginController_.print();
                break;
            case 'selectAll':
                this.pluginController_.selectAll();
                break;
            default:
                return false;
        }
        return true;
    }
    handlePluginMessage(e) {
        const data = e.detail;
        switch (data.type.toString()) {
            case 'attachments':
                const attachmentsData = data;
                this.setAttachments_(attachmentsData.attachmentsData);
                return;
            case 'beep':
                this.handleBeep_();
                return;
            case 'bookmarks':
                const bookmarksData = data;
                this.setBookmarks_(bookmarksData.bookmarksData);
                return;
            case 'documentDimensions':
                this.setDocumentDimensions(data);
                return;
            case 'email':
                const emailData = data;
                const href = 'mailto:' + emailData.to + '?cc=' + emailData.cc +
                    '&bcc=' + emailData.bcc + '&subject=' + emailData.subject +
                    '&body=' + emailData.body;
                this.handleNavigate_(href, WindowOpenDisposition.CURRENT_TAB);
                return;
            case 'getPassword':
                this.handlePasswordRequest_();
                return;
            case 'loadProgress':
                const progressData = data;
                this.updateProgress(progressData.progress);
                return;
            case 'navigate':
                const navigateData = data;
                this.handleNavigate_(navigateData.url, navigateData.disposition);
                return;
            case 'navigateToDestination':
                const destinationData = data;
                this.viewport.handleNavigateToDestination(destinationData.page, destinationData.x, destinationData.y, destinationData.zoom);
                return;
            case 'metadata':
                const metadataData = data;
                this.setDocumentMetadata_(metadataData.metadataData);
                return;
            case 'setIsEditing':
                // Editing mode can only be entered once, and cannot be exited.
                this.hasEdits_ = true;
                return;
            case 'setIsSelecting':
                const selectingData = data;
                this.viewportScroller.setEnableScrolling(selectingData.isSelecting);
                return;
            case 'setSmoothScrolling':
                this.viewport.setSmoothScrolling(data.smoothScrolling);
                return;
            case 'formFocusChange':
                const focusedData = data;
                this.isFormFieldFocused_ = focusedData.focused;
                return;
            case 'touchSelectionOccurred':
                this.sendScriptingMessage({
                    type: 'touchSelectionOccurred',
                });
                return;
            case 'documentFocusChanged':
                const hasFocusData = data;
                this.documentHasFocus_ = hasFocusData.hasFocus;
                return;
            case 'sendKeyEvent':
                const keyEventData = data;
                const keyEvent = deserializeKeyEvent(keyEventData.keyEvent);
                keyEvent.fromPlugin = true;
                this.handleKeyEvent(keyEvent);
                return;
        }
        assertNotReached('Unknown message type received: ' + data.type);
    }
    forceFit(view) {
        this.$.toolbar.forceFit(view);
    }
    afterZoom(viewportZoom) {
        this.viewportZoom_ = viewportZoom;
    }
    setDocumentDimensions(documentDimensions) {
        super.setDocumentDimensions(documentDimensions);
        // If the document dimensions are received, the password was correct and the
        // password dialog can be dismissed.
        this.closePasswordDialog_();
        if (this.toolbarEnabled_) {
            this.docLength_ = this.documentDimensions.pageDimensions.length;
        }
    }
    /** Handles a beep request from the current controller. */
    handleBeep_() {
        // Beeps are annoying, so just track count for now.
        this.beepCount += 1;
    }
    /** Handles a password request from the current controller. */
    handlePasswordRequest_() {
        // Show the password dialog if it is not already shown. Otherwise, respond
        // to an incorrect password.
        if (!this.showPasswordDialog_) {
            this.showPasswordDialog_ = true;
            this.sendScriptingMessage({ type: 'passwordPrompted' });
        }
        else {
            const passwordDialog = this.shadowRoot.querySelector('#password-dialog');
            assert(passwordDialog);
            passwordDialog.deny();
        }
    }
    /** Handles a navigation request from the current controller. */
    handleNavigate_(url, disposition) {
        this.navigator_.navigate(url, disposition);
    }
    /** Sets the document attachment data. */
    setAttachments_(attachments) {
        this.attachments_ = attachments;
    }
    /** Sets the document bookmarks data. */
    setBookmarks_(bookmarks) {
        this.bookmarks_ = bookmarks;
    }
    /** Sets document metadata from the current controller. */
    setDocumentMetadata_(metadata) {
        this.documentMetadata_ = metadata;
        this.title_ = this.documentMetadata_.title || this.fileName_;
        document.title = this.title_;
        this.canSerializeDocument_ = this.documentMetadata_.canSerializeDocument;
    }
    /**
     * An event handler for when the browser tells the PDF Viewer to perform a
     * save on the attachment at a certain index. Callers of this function must
     * be responsible for checking whether the attachment size is valid for
     * downloading.
     * @param e The event which contains the index of attachment to be downloaded.
     */
    async onSaveAttachment_(e) {
        const index = e.detail;
        const size = this.attachments_[index].size;
        assert(size !== -1);
        let dataArray = [];
        // If the attachment size is 0, skip requesting the backend to fetch the
        // attachment data.
        if (size !== 0) {
            assert(this.currentController);
            const result = await this.currentController.saveAttachment(index);
            // Cap the PDF attachment size at 100 MB. This cap should be kept in sync
            // with and is also enforced in pdf/pdf_view_web_plugin.h.
            const MAX_FILE_SIZE = 100 * 1000 * 1000;
            const bufView = new Uint8Array(result.dataToSave);
            assert(bufView.length <= MAX_FILE_SIZE, `File too large to be saved: ${bufView.length} bytes.`);
            assert(bufView.length === size, `Received attachment size does not match its expected value: ${size} bytes.`);
            dataArray = [result.dataToSave];
        }
        const blob = new Blob(dataArray);
        const fileName = this.attachments_[index].name;
        chrome.fileSystem.chooseEntry({ type: 'saveFile', suggestedName: fileName }, (entry) => {
            if (chrome.runtime.lastError) {
                if (chrome.runtime.lastError.message !== 'User cancelled') {
                    console.error('chrome.fileSystem.chooseEntry failed: ' +
                        chrome.runtime.lastError.message);
                }
                return;
            }
            entry.createWriter((writer) => {
                writer.write(blob);
                // Unblock closing the window now that the user has saved
                // successfully.
                // TODO(crbug.com/1445746): Write an equivalent API call for
                // chrome.pdfViewerPrivate.
                if (!this.pdfOopifEnabled) {
                    chrome.mimeHandlerPrivate.setShowBeforeUnloadDialog(false);
                }
            });
        });
    }
    /**
     * An event handler for when the browser tells the PDF Viewer to perform a
     * save.
     * @param streamUrl Unique identifier for a PDF Viewer instance.
     */
    async onSave_(streamUrl) {
        if (streamUrl !== this.browserApi.getStreamInfo().streamUrl) {
            return;
        }
        let saveMode;
        if (this.hasEnteredAnnotationMode_) {
            saveMode = SaveRequestType.ANNOTATION;
        }
        else if (this.hasEdits_) {
            saveMode = SaveRequestType.EDITED;
        }
        else {
            saveMode = SaveRequestType.ORIGINAL;
        }
        this.save_(saveMode);
    }
    onToolbarSave_(e) {
        this.save_(e.detail);
    }
    onChangePage_(e) {
        this.viewport.goToPage(e.detail.page);
        if (e.detail.origin === ChangePageOrigin.BOOKMARK) {
            record(UserAction.FOLLOW_BOOKMARK);
        }
        else if (e.detail.origin === ChangePageOrigin.PAGE_SELECTOR) {
            record(UserAction.PAGE_SELECTOR_NAVIGATE);
        }
        else if (e.detail.origin === ChangePageOrigin.THUMBNAIL) {
            record(UserAction.THUMBNAIL_NAVIGATE);
        }
    }
    onChangePageAndXy_(e) {
        const point = this.viewport.convertPageToScreen(e.detail.page, e.detail);
        this.goToPageAndXy_(e.detail.origin, e.detail.page, point);
    }
    onNavigate_(e) {
        const disposition = e.detail.newtab ?
            WindowOpenDisposition.NEW_BACKGROUND_TAB :
            WindowOpenDisposition.CURRENT_TAB;
        this.navigator_.navigate(e.detail.uri, disposition);
    }
    onSidenavToggleClick_() {
        this.sidenavCollapsed_ = !this.sidenavCollapsed_;
        // Workaround for crbug.com/1119944, so that the PDF plugin resizes only
        // once when the sidenav is opened/closed.
        const container = this.shadowRoot.querySelector('#sidenav-container');
        if (!this.sidenavCollapsed_) {
            container.classList.add('floating');
            container.addEventListener('transitionend', () => {
                container.classList.remove('floating');
            }, { once: true });
        }
        LocalStorageProxyImpl.getInstance().setItem(LOCAL_STORAGE_SIDENAV_COLLAPSED_KEY, (this.sidenavCollapsed_ ? 1 : 0).toString());
    }
    /**
     * Saves the current PDF document to disk.
     */
    async save_(requestType) {
        this.recordSaveMetrics_(requestType);
        // If we have entered annotation mode we must require the local
        // contents to ensure annotations are saved, unless the user specifically
        // requested the original document. Otherwise we would save the cached
        // remote copy without annotations.
        //
        // Always send requests of type ORIGINAL to the plugin controller, not the
        // ink controller. The ink controller always saves the edited document.
        // TODO(dstockwell): Report an error to user if this fails.
        let result = null;
        assert(this.currentController);
        if (requestType !== SaveRequestType.ORIGINAL || !this.annotationMode_) {
            result = await this.currentController.save(requestType);
        }
        else {
            // 
        }
        if (result == null) {
            // The content controller handled the save internally.
            return;
        }
        // Make sure file extension is .pdf, avoids dangerous extensions.
        let fileName = result.fileName;
        if (!fileName.toLowerCase().endsWith('.pdf')) {
            fileName = fileName + '.pdf';
        }
        // Create blob before callback to avoid race condition.
        const blob = new Blob([result.dataToSave], { type: 'application/pdf' });
        chrome.fileSystem.chooseEntry({
            type: 'saveFile',
            accepts: [{ description: '*.pdf', extensions: ['pdf'] }],
            suggestedName: fileName,
        }, (entry) => {
            if (chrome.runtime.lastError) {
                if (chrome.runtime.lastError.message !== 'User cancelled') {
                    console.error('chrome.fileSystem.chooseEntry failed: ' +
                        chrome.runtime.lastError.message);
                }
                return;
            }
            entry.createWriter((writer) => {
                writer.write(blob);
                // Unblock closing the window now that the user has saved
                // successfully.
                // TODO(crbug.com/1445746): Write an equivalent API call for
                // chrome.pdfViewerPrivate.
                if (!this.pdfOopifEnabled) {
                    chrome.mimeHandlerPrivate.setShowBeforeUnloadDialog(false);
                }
            });
        });
        // 
    }
    /**
     * Records metrics for saving PDFs.
     */
    recordSaveMetrics_(requestType) {
        record(UserAction.SAVE);
        switch (requestType) {
            case SaveRequestType.ANNOTATION:
                record(UserAction.SAVE_WITH_ANNOTATION);
                break;
            case SaveRequestType.ORIGINAL:
                record(this.hasEdits_ ? UserAction.SAVE_ORIGINAL :
                    UserAction.SAVE_ORIGINAL_ONLY);
                break;
            case SaveRequestType.EDITED:
                record(UserAction.SAVE_EDITED);
                break;
        }
    }
    async onPrint_() {
        record(UserAction.PRINT);
        // 
        assert(this.currentController);
        this.currentController.print();
    }
    /**
     * Updates the toolbar's annotation available flag depending on current
     * conditions.
     * @return Whether annotations are available.
     */
    computeAnnotationAvailable_() {
        return this.canSerializeDocument_ && !this.hadPassword_;
    }
    /** @return Whether the PDF contents are rotated. */
    isRotated_() {
        return this.clockwiseRotations_ !== 0;
    }
}
customElements.define(PdfViewerElement.is, PdfViewerElement);

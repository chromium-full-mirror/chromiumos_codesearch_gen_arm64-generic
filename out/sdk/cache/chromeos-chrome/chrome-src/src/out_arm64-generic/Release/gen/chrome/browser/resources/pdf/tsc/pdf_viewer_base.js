// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ZoomBehavior } from './browser_api.js';
import { FittingType } from './constants.js';
import { PluginController, PluginControllerEventType } from './controller.js';
import { record, recordFitTo, UserAction } from './metrics.js';
import { OpenPdfParamsParser } from './open_pdf_params_parser.js';
import { LoadState } from './pdf_scripting_api.js';
import { Viewport } from './viewport.js';
import { ViewportScroller } from './viewport_scroller.js';
import { ZoomManager } from './zoom_manager.js';
/** @return Width of a scrollbar in pixels */
function getScrollbarWidth() {
    const div = document.createElement('div');
    div.style.visibility = 'hidden';
    div.style.overflow = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.position = 'absolute';
    document.body.appendChild(div);
    const result = div.offsetWidth - div.clientWidth;
    div.parentNode.removeChild(div);
    return result;
}
export class PdfViewerBaseElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.browserApi = null;
        this.currentController = null;
        this.documentDimensions = null;
        this.isUserInitiatedEvent = true;
        this.lastViewportPosition = null;
        this.originalUrl = '';
        this.paramsParser = null;
        this.pdfOopifEnabled = false;
        this.tracker = new EventTracker();
        this.viewportScroller = null;
        this.delayedScriptingMessages_ = [];
        this.initialLoadComplete_ = false;
        this.loaded_ = null;
        this.loadState_ = LoadState.LOADING;
        this.overrideSendScriptingMessageForTest_ = false;
        this.parentOrigin_ = null;
        this.parentWindow_ = null;
        this.plugin_ = null;
        this.viewport_ = null;
        this.zoomManager_ = null;
    }
    static get properties() {
        return {
            showErrorDialog: {
                type: Boolean,
                value: false,
            },
            strings: Object,
        };
    }
    /** Whether to enable the new UI. */
    isNewUiEnabled() {
        return true;
    }
    /** Creates the plugin element. */
    createPlugin_() {
        // Create the plugin object dynamically. The plugin element is sized to
        // fill the entire window and is set to be fixed positioning, acting as a
        // viewport. The plugin renders into this viewport according to the scroll
        // position of the window.
        const plugin = document.createElement('embed');
        // NOTE: The plugin's 'id' field must be set to 'plugin' since
        // ChromePrintRenderFrameHelperDeleage::GetPdfElement() in
        // chrome/renderer/printing/chrome_print_render_frame_helper_delegate.cc
        // actually references it.
        plugin.id = 'plugin';
        plugin.type = 'application/x-google-chrome-pdf';
        plugin.setAttribute('original-url', this.originalUrl);
        this.setPluginSrc(plugin);
        plugin.setAttribute('background-color', this.getBackgroundColor().toString());
        const javascript = this.browserApi.getStreamInfo().javascript || 'block';
        plugin.setAttribute('javascript', javascript);
        if (this.browserApi.getStreamInfo().embedded) {
            plugin.setAttribute('top-level-url', this.browserApi.getStreamInfo().tabUrl);
        }
        else {
            plugin.toggleAttribute('full-frame', true);
        }
        if (this.isNewUiEnabled()) {
            plugin.toggleAttribute('pdf-viewer-update-enabled', true);
        }
        // Pass the attributes for loading PDF plugin through the `pdfViewerPrivate`
        // API if OOPIF PDF is enabled, or the `mimeHandlerPrivate` API.
        const attributesForLoading = {
            backgroundColor: this.getBackgroundColor(),
            allowJavascript: javascript === 'allow',
        };
        // PDF viewer only, as Print Preview doesn't set PDF plugin attributes.
        if (this.pdfOopifEnabled) {
            if (chrome.pdfViewerPrivate) {
                chrome.pdfViewerPrivate.setPdfPluginAttributes(attributesForLoading);
            }
        }
        else if (chrome.mimeHandlerPrivate) {
            chrome.mimeHandlerPrivate.setPdfPluginAttributes(attributesForLoading);
        }
        return plugin;
    }
    /**
     * Initializes the PDF viewer.
     * @param browserApi The interface with the browser.
     * @param scroller The viewport's scroller element.
     * @param sizer The viewport's sizer element.
     * @param content The viewport's content element.
     */
    initInternal(browserApi, scroller, sizer, content) {
        this.browserApi = browserApi;
        this.originalUrl = this.browserApi.getStreamInfo().originalUrl;
        this.pdfOopifEnabled =
            document.documentElement.hasAttribute('pdfOopifEnabled');
        record(UserAction.DOCUMENT_OPENED);
        // Create the viewport.
        const defaultZoom = this.browserApi.getZoomBehavior() === ZoomBehavior.MANAGE ?
            this.browserApi.getDefaultZoom() :
            1.0;
        this.viewport_ = new Viewport(scroller, sizer, content, getScrollbarWidth(), defaultZoom);
        this.viewport_.setViewportChangedCallback(() => this.viewportChanged_());
        this.viewport_.setBeforeZoomCallback(() => this.currentController.beforeZoom());
        this.viewport_.setAfterZoomCallback(() => {
            this.currentController.afterZoom();
            this.afterZoom(this.viewport_.getZoom());
        });
        this.viewport_.setUserInitiatedCallback(userInitiated => this.setUserInitiated_(userInitiated));
        window.addEventListener('beforeunload', () => this.resetTrackers_());
        // Handle scripting messages from outside the extension that wish to
        // interact with it. We also send a message indicating that extension has
        // loaded and is ready to receive messages.
        window.addEventListener('message', message => {
            this.handleScriptingMessage(message);
        }, false);
        // Create the plugin.
        this.plugin_ = this.createPlugin_();
        const pluginController = PluginController.getInstance();
        pluginController.init(this.plugin_, this.viewport_, () => this.isUserInitiatedEvent, () => this.loaded);
        pluginController.isActive = true;
        this.currentController = pluginController;
        // Parse open pdf parameters.
        const getNamedDestinationCallback = (destination) => {
            return PluginController.getInstance().getNamedDestination(destination);
        };
        const getPageBoundingBoxCallback = (page) => {
            return PluginController.getInstance().getPageBoundingBox(page);
        };
        this.paramsParser = new OpenPdfParamsParser(getNamedDestinationCallback, getPageBoundingBoxCallback);
        this.tracker.add(pluginController.getEventTarget(), PluginControllerEventType.PLUGIN_MESSAGE, (e) => this.handlePluginMessage(e));
        document.body.addEventListener('change-page-and-xy', e => {
            const point = this.viewport_.convertPageToScreen(e.detail.page, e.detail);
            this.viewport_.goToPageAndXy(e.detail.page, point.x, point.y);
        });
        // Setup the keyboard event listener.
        document.addEventListener('keydown', this.handleKeyEvent.bind(this));
        // Set up the ZoomManager.
        this.zoomManager_ = ZoomManager.create(this.browserApi.getZoomBehavior(), () => this.viewport_.getZoom(), zoom => this.browserApi.setZoom(zoom), this.browserApi.getInitialZoom());
        this.viewport_.setZoomManager(this.zoomManager_);
        this.browserApi.addZoomEventListener((zoom) => this.zoomManager_.onBrowserZoomChange(zoom));
        // TODO(crbug.com/1278476): Don't need this after Pepper plugin goes away.
        this.viewportScroller =
            new ViewportScroller(this.viewport_, this.plugin_, window);
        // Request translated strings.
        chrome.resourcesPrivate.getStrings(chrome.resourcesPrivate.Component.PDF, strings => this.handleStrings(strings));
    }
    /**
     * Updates the loading progress of the document in response to a progress
     * message being received from the content controller.
     * @param progress The progress as a percentage.
     */
    updateProgress(progress) {
        if (progress === -1) {
            // Document load failed.
            this.showErrorDialog = true;
            this.viewport_.setContent(null);
            this.setLoadState(LoadState.FAILED);
            this.sendDocumentLoadedMessage();
        }
        else if (progress === 100) {
            // Document load complete.
            if (this.lastViewportPosition) {
                this.viewport_.setPosition(this.lastViewportPosition);
            }
            this.paramsParser.getViewportFromUrlParams(this.originalUrl)
                .then(params => this.handleUrlParams_(params));
            this.setLoadState(LoadState.SUCCESS);
            this.sendDocumentLoadedMessage();
            while (this.delayedScriptingMessages_.length > 0) {
                this.handleScriptingMessage(this.delayedScriptingMessages_.shift());
            }
        }
        else {
            this.setLoadState(LoadState.LOADING);
        }
    }
    /** @return Whether the documentLoaded message can be sent. */
    readyToSendLoadMessage() {
        return true;
    }
    /**
     * Sends a 'documentLoaded' message to the PdfScriptingApi if the document has
     * finished loading.
     */
    sendDocumentLoadedMessage() {
        if (this.loadState_ === LoadState.LOADING ||
            !this.readyToSendLoadMessage()) {
            return;
        }
        this.sendScriptingMessage({ type: 'documentLoaded', load_state: this.loadState_ });
    }
    /** A callback to be called after the viewport changes. */
    viewportChanged_() {
        if (!this.documentDimensions) {
            return;
        }
        this.updateUiForViewportChange();
        const visiblePage = this.viewport_.getMostVisiblePage();
        const visiblePageDimensions = this.viewport_.getPageScreenRect(visiblePage);
        const size = this.viewport_.size;
        this.paramsParser.setViewportDimensions(size);
        this.sendScriptingMessage({
            type: 'viewport',
            pageX: visiblePageDimensions.x,
            pageY: visiblePageDimensions.y,
            pageWidth: visiblePageDimensions.width,
            viewportWidth: size.width,
            viewportHeight: size.height,
        });
    }
    /**
     * Handles a scripting message from outside the extension (typically sent by
     * PdfScriptingApi in a page containing the extension) to interact with the
     * plugin.
     * @return Whether the message was handled.
     */
    handleScriptingMessage(message) {
        // TODO(crbug.com/1228987): Remove this message handler when a permanent
        // postMessage() bridge is implemented for the viewer.
        if (message.data.type === 'connect') {
            const token = message.data.token;
            if (token === this.browserApi.getStreamInfo().streamUrl) {
                PluginController.getInstance().bindMessageHandler(message.ports[0]);
            }
            else {
                this.dispatchEvent(new CustomEvent('connection-denied-for-testing'));
            }
            return true;
        }
        if (this.parentWindow_ !== message.source) {
            this.parentWindow_ = message.source;
            this.parentOrigin_ = message.origin;
            // Ensure that we notify the embedder if the document is loaded.
            if (this.loadState_ !== LoadState.LOADING) {
                this.sendDocumentLoadedMessage();
            }
        }
        return false;
    }
    /**
     * @return Whether the message was delayed and added to the queue.
     */
    delayScriptingMessage(message) {
        // Delay scripting messages from users of the scripting API until the
        // document is loaded. This simplifies use of the APIs.
        if (this.loadState_ !== LoadState.SUCCESS) {
            this.delayedScriptingMessages_.push(message);
            return true;
        }
        return false;
    }
    /** Sets document dimensions from the current controller. */
    setDocumentDimensions(documentDimensions) {
        this.documentDimensions = documentDimensions;
        this.isUserInitiatedEvent = false;
        this.viewport_.setDocumentDimensions(this.documentDimensions);
        this.paramsParser.setPageCount(documentDimensions.pageDimensions.length);
        this.paramsParser.setViewportDimensions(this.viewport_.size);
        this.isUserInitiatedEvent = true;
    }
    /**
     * @return Resolved when the load state reaches LOADED, rejects on FAILED.
     *     Returns null if no promise has been created, which is the case for
     *     initial load of the PDF.
     */
    get loaded() {
        return this.loaded_ ? this.loaded_.promise : null;
    }
    get viewport() {
        assert(this.viewport_);
        return this.viewport_;
    }
    /**
     * Updates the load state and triggers completion of the `loaded`
     * promise if necessary.
     */
    setLoadState(loadState) {
        if (this.loadState_ === loadState) {
            return;
        }
        assert(loadState === LoadState.LOADING ||
            this.loadState_ === LoadState.LOADING);
        this.loadState_ = loadState;
        if (!this.initialLoadComplete_) {
            this.initialLoadComplete_ = true;
            return;
        }
        if (loadState === LoadState.SUCCESS) {
            this.loaded_.resolve();
        }
        else if (loadState === LoadState.FAILED) {
            this.loaded_.reject();
        }
        else {
            this.loaded_ = new PromiseResolver();
        }
    }
    /**
     * Load a dictionary of translated strings into the UI. Used as a callback for
     * chrome.resourcesPrivate.
     * @param strings Dictionary of translated strings
     */
    handleStrings(strings) {
        if (!strings) {
            return;
        }
        loadTimeData.data = strings;
        // Predefined zoom factors to be used when zooming in/out. These are in
        // ascending order.
        const presetZoomFactors = JSON.parse(loadTimeData.getString('presetZoomFactors'));
        this.viewport_.setZoomFactorRange(presetZoomFactors);
        this.strings = strings;
    }
    /**
     * Handles open pdf parameters. This function updates the viewport as per the
     * parameters appended to the URL when opening pdf. The order is important as
     * later actions can override the effects of previous actions.
     * @param params The open params passed in the URL.
     */
    handleUrlParams_(params) {
        assert(this.viewport_);
        if (params.zoom) {
            this.viewport_.setZoom(params.zoom);
        }
        if (params.position) {
            this.viewport_.goToPageAndXy(params.page || 0, params.position.x, params.position.y);
        }
        if (params.view) {
            this.isUserInitiatedEvent = false;
            const fittingTypeParams = {
                boundingBox: params.boundingBox,
                page: params.page || 0,
                viewPosition: params.viewPosition,
                fitToWidth: params.view === FittingType.FIT_TO_BOUNDING_BOX_WIDTH,
            };
            this.viewport_.setFittingType(params.view, fittingTypeParams);
            this.forceFit(params.view);
            this.isUserInitiatedEvent = true;
        }
        else if (!params.position && params.page) {
            // No fitting type provided, so just go to page.
            this.viewport_.goToPage(params.page);
        }
    }
    /**
     * A callback that sets `isUserInitiatedEvent` to `userInitiated`.
     * @param userInitiated The value to which to set `isUserInitiatedEvent`.
     */
    setUserInitiated_(userInitiated) {
        assert(this.isUserInitiatedEvent !== userInitiated);
        this.isUserInitiatedEvent = userInitiated;
    }
    overrideSendScriptingMessageForTest() {
        this.overrideSendScriptingMessageForTest_ = true;
    }
    /**
     * Send a scripting message outside the extension (typically to
     * PdfScriptingApi in a page containing the extension).
     */
    sendScriptingMessage(message) {
        if (this.parentWindow_ && this.parentOrigin_) {
            let targetOrigin;
            // Only send data back to the embedder if it is from the same origin,
            // unless we're sending it to ourselves (which could happen in the case
            // of tests). We also allow 'documentLoaded' and 'passwordPrompted'
            // messages through as they do not leak sensitive information.
            if (this.parentOrigin_ === window.location.origin) {
                targetOrigin = this.parentOrigin_;
            }
            else if (message.type === 'documentLoaded' ||
                message.type === 'passwordPrompted') {
                targetOrigin = '*';
            }
            else {
                targetOrigin = this.originalUrl;
            }
            try {
                this.parentWindow_.postMessage(message, targetOrigin);
            }
            catch (ok) {
                // TODO(crbug.com/1004425): targetOrigin probably was rejected, such as
                // a "data:" URL. This shouldn't cause this method to throw, though.
            }
        }
    }
    /** Requests to change the viewport fitting type. */
    onFitToChanged(e) {
        this.viewport_.setFittingType(e.detail);
        recordFitTo(e.detail);
    }
    onZoomIn() {
        this.viewport_.zoomIn();
        record(UserAction.ZOOM_IN);
    }
    onZoomChanged(e) {
        this.viewport_.setZoom(e.detail / 100);
        record(UserAction.ZOOM_CUSTOM);
    }
    onZoomOut() {
        this.viewport_.zoomOut();
        record(UserAction.ZOOM_OUT);
    }
    /** Handles a selected text reply from the current controller. */
    handleSelectedTextReply(message) {
        if (this.overrideSendScriptingMessageForTest_) {
            this.overrideSendScriptingMessageForTest_ = false;
            try {
                this.sendScriptingMessage(message);
            }
            finally {
                this.parentWindow_.postMessage('flush', '*');
            }
            return;
        }
        this.sendScriptingMessage(message);
    }
    rotateClockwise() {
        record(UserAction.ROTATE);
        this.currentController.rotateClockwise();
    }
    rotateCounterclockwise() {
        record(UserAction.ROTATE);
        this.currentController.rotateCounterclockwise();
    }
    resetTrackers_() {
        this.viewport_.resetTracker();
        if (this.tracker) {
            this.tracker.removeAll();
        }
    }
}

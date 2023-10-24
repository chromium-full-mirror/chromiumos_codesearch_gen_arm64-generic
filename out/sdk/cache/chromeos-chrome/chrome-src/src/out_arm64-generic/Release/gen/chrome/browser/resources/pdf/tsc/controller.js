// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { PinchPhase } from './viewport.js';
/**
 * Creates a cryptographically secure pseudorandom 128-bit token.
 * @return The generated token as a hex string.
 */
function createToken() {
    const randomBytes = new Uint8Array(16);
    window.crypto.getRandomValues(randomBytes);
    return Array.from(randomBytes, b => b.toString(16).padStart(2, '0')).join('');
}
/** Event types dispatched by the plugin controller. */
export var PluginControllerEventType;
(function (PluginControllerEventType) {
    PluginControllerEventType["IS_ACTIVE_CHANGED"] = "PluginControllerEventType.IS_ACTIVE_CHANGED";
    PluginControllerEventType["PLUGIN_MESSAGE"] = "PluginControllerEventType.PLUGIN_MESSAGE";
})(PluginControllerEventType || (PluginControllerEventType = {}));
/**
 * PDF plugin controller singleton, responsible for communicating with the
 * embedded plugin element. Dispatches a
 * `PluginControllerEventType.PLUGIN_MESSAGE` event containing the message from
 * the plugin, if a message type not handled by this controller is received.
 */
export class PluginController {
    constructor() {
        this.eventTarget_ = new EventTarget();
        this.isActive_ = false;
        this.delayedMessages_ = [];
        this.uidCounter_ = 1;
    }
    init(plugin, viewport, getIsUserInitiatedCallback, getLoadedCallback) {
        this.plugin_ = plugin;
        this.plugin_.addEventListener('message', e => this.handlePluginMessage_(e), false);
        this.plugin_.postMessage = (message, transfer) => {
            this.delayedMessages_.push({ message, transfer });
        };
        this.viewport_ = viewport;
        this.getIsUserInitiatedCallback_ = getIsUserInitiatedCallback;
        this.getLoadedCallback_ = getLoadedCallback;
        this.pendingTokens_ = new Map();
        this.requestResolverMap_ = new Map();
        this.viewport_.setContent(this.plugin_);
        this.viewport_.setRemoteContent(this.plugin_);
    }
    get isActive() {
        // Check whether `plugin_` is defined as a signal that `init()` was called.
        return !!this.plugin_ && this.isActive_;
    }
    set isActive(isActive) {
        const wasActive = this.isActive;
        this.isActive_ = isActive;
        if (this.isActive === wasActive) {
            return;
        }
        this.eventTarget_.dispatchEvent(new CustomEvent(PluginControllerEventType.IS_ACTIVE_CHANGED, { detail: this.isActive }));
    }
    createUid_() {
        return this.uidCounter_++;
    }
    getEventTarget() {
        return this.eventTarget_;
    }
    viewportChanged() { }
    redo() { }
    undo() { }
    /**
     * Notify the plugin to stop reacting to scroll events while zoom is taking
     * place to avoid flickering.
     */
    beforeZoom() {
        this.postMessage_({ type: 'stopScrolling' });
        if (this.viewport_.pinchPhase === PinchPhase.START) {
            const position = this.viewport_.position;
            const zoom = this.viewport_.getZoom();
            const pinchPhase = this.viewport_.pinchPhase;
            const layoutOptions = this.viewport_.getLayoutOptions();
            this.postMessage_({
                type: 'viewport',
                userInitiated: true,
                zoom: zoom,
                layoutOptions: layoutOptions,
                xOffset: position.x,
                yOffset: position.y,
                pinchPhase: pinchPhase,
            });
        }
    }
    /**
     * Notify the plugin of the zoom change and to continue reacting to scroll
     * events.
     */
    afterZoom() {
        const position = this.viewport_.position;
        const zoom = this.viewport_.getZoom();
        const layoutOptions = this.viewport_.getLayoutOptions();
        const pinchVector = this.viewport_.pinchPanVector || { x: 0, y: 0 };
        const pinchCenter = this.viewport_.pinchCenter || { x: 0, y: 0 };
        const pinchPhase = this.viewport_.pinchPhase;
        this.postMessage_({
            type: 'viewport',
            userInitiated: this.getIsUserInitiatedCallback_(),
            zoom: zoom,
            layoutOptions: layoutOptions,
            xOffset: position.x,
            yOffset: position.y,
            pinchPhase: pinchPhase,
            pinchX: pinchCenter.x,
            pinchY: pinchCenter.y,
            pinchVectorX: pinchVector.x,
            pinchVectorY: pinchVector.y,
        });
    }
    /**
     * Post a message to the plugin. Some messages will cause an async reply to be
     * received through handlePluginMessage_().
     */
    postMessage_(message) {
        this.plugin_.postMessage(message);
    }
    /**
     * Post a message to the plugin, for cases where direct response is expected
     * from the plugin.
     * @return A promise holding the response from the plugin.
     */
    postMessageWithReply_(message) {
        const promiseResolver = new PromiseResolver();
        message.messageId = `${message.type}_${this.createUid_()}`;
        this.requestResolverMap_.set(message.messageId, promiseResolver);
        this.postMessage_(message);
        return promiseResolver.promise;
    }
    rotateClockwise() {
        this.postMessage_({ type: 'rotateClockwise' });
    }
    rotateCounterclockwise() {
        this.postMessage_({ type: 'rotateCounterclockwise' });
    }
    setDisplayAnnotations(displayAnnotations) {
        this.postMessage_({
            type: 'displayAnnotations',
            display: displayAnnotations,
        });
    }
    setTwoUpView(enableTwoUpView) {
        this.postMessage_({
            type: 'setTwoUpView',
            enableTwoUpView: enableTwoUpView,
        });
    }
    print() {
        this.postMessage_({ type: 'print' });
    }
    selectAll() {
        this.postMessage_({ type: 'selectAll' });
    }
    getSelectedText() {
        return this.postMessageWithReply_({ type: 'getSelectedText' });
    }
    /**
     * Post a thumbnail request message to the plugin.
     * @return A promise holding the thumbnail response from the plugin.
     */
    requestThumbnail(page) {
        return this.postMessageWithReply_({
            type: 'getThumbnail',
            // The plugin references pages using zero-based indices.
            page: page - 1,
        });
    }
    resetPrintPreviewMode(printPreviewParams) {
        this.postMessage_({
            type: 'resetPrintPreviewMode',
            url: printPreviewParams.url,
            grayscale: printPreviewParams.grayscale,
            // If the PDF isn't modifiable we send 0 as the page count so that no
            // blank placeholder pages get appended to the PDF.
            pageCount: (printPreviewParams.modifiable ?
                printPreviewParams.pageNumbers.length :
                0),
        });
    }
    /**
     * @param color New color, as a 32-bit integer, of the PDF plugin
     *     background.
     */
    setBackgroundColor(color) {
        this.postMessage_({
            type: 'setBackgroundColor',
            color: color,
        });
    }
    loadPreviewPage(url, index) {
        this.postMessage_({ type: 'loadPreviewPage', url: url, index: index });
    }
    getPageBoundingBox(page) {
        return this.postMessageWithReply_({
            type: 'getPageBoundingBox',
            page,
        });
    }
    getPasswordComplete(password) {
        this.postMessage_({ type: 'getPasswordComplete', password: password });
    }
    /**
     * @return A promise holding the named destination information from the
     *     plugin.
     */
    getNamedDestination(destination) {
        return this.postMessageWithReply_({
            type: 'getNamedDestination',
            namedDestination: destination,
        });
    }
    setPresentationMode(enablePresentationMode) {
        this.postMessage_({
            type: 'setPresentationMode',
            enablePresentationMode,
        });
    }
    save(requestType) {
        const resolver = new PromiseResolver();
        const newToken = createToken();
        this.pendingTokens_.set(newToken, resolver);
        this.postMessage_({
            type: 'save',
            token: newToken,
            saveRequestType: requestType,
        });
        return resolver.promise;
    }
    saveAttachment(index) {
        return this.postMessageWithReply_({
            type: 'saveAttachment',
            attachmentIndex: index,
        });
    }
    async load(_fileName, data) {
        // Load `data` into the PDF plugin. The plugin transfers the data to be
        // loaded within the inner frame.
        this.viewport_.setRemoteContent(this.plugin_);
        this.plugin_.postMessage({ type: 'loadArray', dataToLoad: data }, [data]);
        this.plugin_.style.display = 'block';
        await this.getLoadedCallback_();
        this.isActive = true;
    }
    unload() {
        this.plugin_.style.display = 'none';
        this.isActive = false;
    }
    /**
     * Binds an event handler for messages received from the plugin.
     *
     * TODO(crbug.com/1228987): Remove this method when a permanent postMessage()
     * bridge is implemented for the viewer.
     */
    bindMessageHandler(port) {
        assert(this.delayedMessages_ !== null);
        assert(this.plugin_);
        const delayedMessages = this.delayedMessages_;
        this.delayedMessages_ = null;
        this.plugin_.postMessage = port.postMessage.bind(port);
        port.onmessage = e => this.handlePluginMessage_(e);
        for (const { message, transfer } of delayedMessages) {
            this.plugin_.postMessage(message, transfer);
        }
    }
    /**
     * An event handler for handling message events received from the plugin.
     */
    handlePluginMessage_(messageEvent) {
        const messageData = messageEvent.data;
        // Handle case where this Plugin->Page message is a direct response
        // to a previous Page->Plugin message
        if (messageData.messageId !== undefined) {
            const resolver = this.requestResolverMap_.get(messageData.messageId) || null;
            assert(resolver !== null);
            this.requestResolverMap_.delete(messageData.messageId);
            resolver.resolve(messageData);
            return;
        }
        switch (messageData.type) {
            case 'gesture':
                this.viewport_.dispatchGesture(messageData.gesture);
                break;
            case 'swipe':
                this.viewport_.dispatchSwipe(messageData.direction);
                break;
            case 'goToPage':
                this.viewport_.goToPage(messageData.page);
                break;
            case 'setScrollPosition':
                this.viewport_.scrollTo(messageData);
                break;
            case 'scrollBy':
                this.viewport_.scrollBy(messageData);
                break;
            case 'syncScrollFromRemote':
                this.viewport_.syncScrollFromRemote(messageData);
                break;
            case 'ackScrollToRemote':
                this.viewport_.ackScrollToRemote(messageData);
                break;
            case 'saveData':
                this.saveData_(messageData);
                break;
            case 'consumeSaveToken':
                const resolver = this.pendingTokens_.get(messageData.token);
                assert(resolver);
                assert(this.pendingTokens_.delete(messageData.token));
                resolver.resolve(null);
                break;
            default:
                this.eventTarget_.dispatchEvent(new CustomEvent(PluginControllerEventType.PLUGIN_MESSAGE, { detail: messageData }));
        }
    }
    /** Handles the pdf file buffer received from the plugin. */
    saveData_(messageData) {
        // Verify a token that was created by this instance is included to avoid
        // being spammed.
        const resolver = this.pendingTokens_.get(messageData.token);
        assert(resolver);
        assert(this.pendingTokens_.delete(messageData.token));
        if (!messageData.dataToSave) {
            resolver.reject();
            return;
        }
        // Verify the file size and the first bytes to make sure it's a PDF. Cap at
        // 100 MB. This cap should be kept in sync with and is also enforced in
        // pdf/out_of_process_instance.cc.
        const MIN_FILE_SIZE = '%PDF1.0'.length;
        const MAX_FILE_SIZE = 100 * 1000 * 1000;
        const buffer = messageData.dataToSave;
        const bufView = new Uint8Array(buffer);
        assert(bufView.length <= MAX_FILE_SIZE, `File too large to be saved: ${bufView.length} bytes.`);
        assert(bufView.length >= MIN_FILE_SIZE);
        assert(String.fromCharCode(bufView[0], bufView[1], bufView[2], bufView[3]) ===
            '%PDF');
        resolver.resolve(messageData);
    }
    static getInstance() {
        return instance || (instance = new PluginController());
    }
}
let instance = null;

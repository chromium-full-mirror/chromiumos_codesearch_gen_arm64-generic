// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { Viewport } from 'chrome-extension://mhjfbmdgcfjbbpaeojofohoefgiehjai/pdf_viewer_wrapper.js';
import { html, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export class MockElement {
    constructor(width, height, sizer) {
        this.dir = '';
        this.scrollLeft = 0;
        this.scrollTop = 0;
        this.scrollCallback = null;
        this.resizeCallback = null;
        this.offsetWidth = width;
        this.offsetHeight = height;
        this.sizer = sizer;
        if (sizer) {
            sizer.resizeCallback_ = () => this.scrollTo(this.scrollLeft, this.scrollTop);
        }
    }
    get clientWidth() {
        return this.offsetWidth;
    }
    get clientHeight() {
        return this.offsetHeight;
    }
    addEventListener(e, f) {
        if (e === 'scroll') {
            this.scrollCallback = f;
        }
    }
    setSize(width, height) {
        this.offsetWidth = width;
        this.offsetHeight = height;
        this.resizeCallback();
    }
    scrollTo(x, y) {
        if (this.sizer) {
            x = Math.min(x, parseInt(this.sizer.style.width, 10) - this.offsetWidth);
            y = Math.min(y, parseInt(this.sizer.style.height, 10) - this.offsetHeight);
        }
        this.scrollLeft = Math.max(0, x);
        this.scrollTop = Math.max(0, y);
        this.scrollCallback();
    }
}
export class MockSizer {
    constructor() {
        this.width_ = '0px';
        this.height_ = '0px';
        this.resizeCallback_ = null;
        const sizer = this;
        this.style = {
            get height() {
                return sizer.height_;
            },
            set height(height) {
                sizer.height_ = height;
                if (sizer.resizeCallback_) {
                    sizer.resizeCallback_();
                }
            },
            get width() {
                return sizer.width_;
            },
            set width(width) {
                sizer.width_ = width;
                if (sizer.resizeCallback_) {
                    sizer.resizeCallback_();
                }
            },
        };
    }
}
export class MockViewportChangedCallback {
    constructor() {
        this.wasCalled = false;
        this.callback = this.callback_.bind(this);
    }
    callback_() {
        this.wasCalled = true;
    }
    reset() {
        this.wasCalled = false;
    }
}
export class MockDocumentDimensions {
    constructor(width, height, layoutOptions) {
        this.pageDimensions = [];
        this.width = width || 0;
        this.height = height || 0;
        this.layoutOptions = layoutOptions;
    }
    addPage(w, h) {
        let y = 0;
        if (this.pageDimensions.length !== 0) {
            y = this.pageDimensions[this.pageDimensions.length - 1].y +
                this.pageDimensions[this.pageDimensions.length - 1].height;
        }
        this.width = Math.max(this.width, w);
        this.height += h;
        this.pageDimensions.push({ x: 0, y: y, width: w, height: h });
    }
    addPageForTwoUpView(x, y, w, h) {
        this.width = Math.max(this.width, 2 * w);
        this.height = Math.max(this.height, y + h);
        this.pageDimensions.push({ x: x, y: y, width: w, height: h });
    }
    reset() {
        this.width = 0;
        this.height = 0;
        this.pageDimensions = [];
    }
}
export class MockPdfPluginElement extends HTMLEmbedElement {
    constructor() {
        super(...arguments);
        this.messages_ = [];
    }
    get messages() {
        return this.messages_;
    }
    clearMessages() {
        this.messages_.length = 0;
    }
    findMessage(type) {
        return this.messages_.find(element => element.type === type);
    }
    postMessage(message, _transfer) {
        this.messages_.push(message);
    }
}
customElements.define('mock-pdf-plugin', MockPdfPluginElement, { extends: 'embed' });
/**
 * Creates a fake element simulating the PDF plugin.
 */
export function createMockPdfPluginForTest() {
    return document.createElement('embed', { is: 'mock-pdf-plugin' });
}
class TestBookmarksElement extends PolymerElement {
    static get is() {
        return 'test-bookmarks';
    }
    static get template() {
        return html `
      <template is="dom-repeat" items="[[bookmarks]]">
        <viewer-bookmark bookmark="[[item]]" depth="0"></viewer-bookmark>
      </template>
    `;
    }
    static get properties() {
        return {
            bookmarks: Array,
        };
    }
}
customElements.define(TestBookmarksElement.is, TestBookmarksElement);
/**
 * @return An element containing a dom-repeat of bookmarks, for
 *     testing the bookmarks outside of the toolbar.
 */
export function createBookmarksForTest() {
    return document.createElement('test-bookmarks');
}
/**
 * Create a viewport with basic default zoom values.
 * @param sizer The element which represents the size of the document in the
 *     viewport.
 * @param scrollbarWidth The width of scrollbars on the page
 * @param defaultZoom The default zoom level.
 * @return The viewport object with zoom values set.
 */
export function getZoomableViewport(scrollParent, sizer, scrollbarWidth, defaultZoom) {
    document.body.innerHTML = '';
    const dummyContent = document.createElement('div');
    document.body.appendChild(dummyContent);
    const viewport = new Viewport(scrollParent, sizer, dummyContent, scrollbarWidth, defaultZoom);
    viewport.setZoomFactorRange([0.25, 0.4, 0.5, 1, 2]);
    const dummyPlugin = document.createElement('embed');
    dummyPlugin.id = 'plugin';
    dummyPlugin.src = 'data:text/plain,plugin-content';
    viewport.setContent(dummyPlugin);
    return viewport;
}
/**
 * Async spin until predicate() returns true.
 */
export function waitFor(predicate) {
    if (predicate()) {
        return Promise.resolve();
    }
    return new Promise(resolve => setTimeout(() => {
        resolve(waitFor(predicate));
    }, 0));
}
export function createWheelEvent(deltaY, position, ctrlKey) {
    return new WheelEvent('wheel', {
        deltaY,
        clientX: position.clientX,
        clientY: position.clientY,
        ctrlKey,
        // Necessary for preventDefault() to work.
        cancelable: true,
    });
}

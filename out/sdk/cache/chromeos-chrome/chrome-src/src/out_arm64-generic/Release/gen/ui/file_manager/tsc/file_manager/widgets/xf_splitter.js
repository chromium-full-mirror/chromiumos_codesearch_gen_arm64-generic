// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var XfSplitter_1;
import { assert } from 'chrome://resources/js/assert.js';
import { css, customElement, html, XfBase } from './xf_base.js';
let XfSplitter = XfSplitter_1 = class XfSplitter extends XfBase {
    constructor() {
        super(...arguments);
        this.handlers_ = null;
        this.startPosition_ = 0;
        this.beforeStartWidth_ = -1;
        this.afterStartWidth_ = -1;
        this.isTouch_ = false;
        this.beforeResizingElement_ = null;
        this.afterResizingElement_ = null;
        this.isRTLlayout_ = false;
    }
    static get events() {
        return {
            SPLITTER_DRAGMOVE: 'splitter_dragmove',
            SPLITTER_RESIZE: 'splitter_resize',
        };
    }
    static get styles() {
        return getCSS();
    }
    static get splitterBarSize() {
        return 24;
    }
    connectedCallback() {
        super.connectedCallback();
        this.handlers_ = new Map();
    }
    disconnectedCallback() {
        this.finishDrag_();
        this.handlers_ = null;
        super.disconnectedCallback();
    }
    render() {
        return html `<slot name="splitter-before"></slot>
                <div id="splitter"
                  @mousedown=${this.onMousedown_}
                  @touchstart=${this.onTouchstart_}>
                  <div id="tracker"></div>
                </div>
                <slot name="splitter-after"></slot>`;
    }
    setupDrag_(startPosition, isTouchStart) {
        assert(!!this.handlers_);
        this.startPosition_ = startPosition;
        this.isTouch_ = isTouchStart;
        const finishDragBound = this.finishDrag_.bind(this);
        if (this.isTouch_) {
            this.handlers_.set('touchmove', this.onTouchMove_.bind(this));
            this.handlers_.set('touchend', finishDragBound);
            this.handlers_.set('touchcancel', finishDragBound);
            // Another touch start (we somehow missed touchend or touchcancel).
            this.handlers_.set('touchstart', finishDragBound);
        }
        else {
            this.handlers_.set('mousemove', this.onMouseMove_.bind(this));
            this.handlers_.set('mouseup', finishDragBound);
        }
        const doc = this.ownerDocument;
        for (const [eventType, handler] of this.handlers_) {
            doc.addEventListener(eventType, handler, true);
        }
        this.beforeResizingElement_ = this.firstElementChild;
        assert(!!this.beforeResizingElement_);
        this.beforeStartWidth_ =
            parseFloat(doc.defaultView.getComputedStyle(this.beforeResizingElement_)
                .width) +
                this.beforeResizingElement_.offsetWidth -
                this.beforeResizingElement_.clientWidth;
        this.afterResizingElement_ = this.lastElementChild;
        assert(!!this.afterResizingElement_);
        this.afterStartWidth_ =
            parseFloat(doc.defaultView.getComputedStyle(this.afterResizingElement_)
                .width) +
                this.afterResizingElement_.offsetWidth -
                this.afterResizingElement_.clientWidth;
        this.classList.add('splitter-active');
        this.isRTLlayout_ =
            window.getComputedStyle(this).getPropertyValue('direction') == 'rtl';
    }
    finishDrag_() {
        assert(!!this.handlers_);
        const doc = this.ownerDocument;
        for (const [eventType, handler] of this.handlers_) {
            doc.removeEventListener(eventType, handler, true);
        }
        this.handlers_.clear();
        this.classList.remove('splitter-active');
        assert(!!this.beforeResizingElement_);
        let computedWidth = parseFloat(doc.defaultView.getComputedStyle(this.beforeResizingElement_).width);
        // Send a resize event if either side changed size.
        if (this.beforeStartWidth_ !== computedWidth) {
            this.dispatchEvent(new CustomEvent(XfSplitter_1.events.SPLITTER_RESIZE));
        }
        else {
            assert(!!this.afterResizingElement_);
            computedWidth = parseFloat(doc.defaultView.getComputedStyle(this.afterResizingElement_).width);
            if (this.afterStartWidth_ !== computedWidth) {
                this.dispatchEvent(new CustomEvent(XfSplitter_1.events.SPLITTER_RESIZE));
            }
        }
    }
    doMove_(newPosition) {
        const delta = this.isRTLlayout_ ? this.startPosition_ - newPosition :
            newPosition - this.startPosition_;
        let newWidth = this.beforeStartWidth_ + delta;
        assert(!!this.beforeResizingElement_);
        this.beforeResizingElement_.style.width = newWidth + 'px';
        newWidth = this.afterStartWidth_ - delta;
        assert(!!this.afterResizingElement_);
        this.afterResizingElement_.style.width = newWidth + 'px';
        this.dispatchEvent(new CustomEvent(XfSplitter_1.events.SPLITTER_DRAGMOVE));
    }
    /** Handles mouse down on the splitter. */
    onMousedown_(event) {
        // Activate only for first button (0).
        if (event.button) {
            return;
        }
        this.setupDrag_(event.clientX, false);
        // Inhibit selection.
        event.preventDefault();
    }
    onMouseMove_(event) {
        this.doMove_(event.clientX);
    }
    /** Handles touchstart on the splitter. */
    onTouchstart_(event) {
        if (event.touches.length === 1) {
            this.setupDrag_(event.touches[0].clientX, true);
            if (event.cancelable) {
                event.preventDefault();
            }
        }
    }
    onTouchMove_(event) {
        if (event.touches.length === 1) {
            this.doMove_(event.touches[0].clientX);
        }
    }
};
XfSplitter = XfSplitter_1 = __decorate([
    customElement('xf-splitter')
], XfSplitter);
export { XfSplitter };
function getCSS() {
    return css `
    :host {
      --xf-splitter-cursor: col-resize;
      --xf-splitter-hover-color: var(--cros-sys-hover_on_subtle);
      --xf-splitter-tracker-offset: 0px;
      display: flex;
      flex: none;
      margin: 0;
      position: relative;
      width: 100%;
    }

    #splitter:hover #tracker {
      background-color: var(--xf-splitter-hover-color);
    }

    #splitter {
      cursor: var(--xf-splitter-cursor);
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: ${XfSplitter.splitterBarSize}px;
      width: ${XfSplitter.splitterBarSize}px;
    }

    #tracker {
      border: none;
      border-radius: 8px;
      height: 64px;
      left: var(--xf-splitter-tracker-offset);
      min-width: 16px;
      padding: 0;
      position: relative;
      width: 16px;
      z-index: var(--xf-splitter-z-index);
    }

    :host-context(html[dir=rtl]) #tracker {
      right: var(--xf-splitter-tracker-offset);
    }

    #tracker:hover {
      background-color: var(--xf-splitter-hover-color);
      cursor: var(--xf-splitter-cursor, col-resize);
    }
  `;
}

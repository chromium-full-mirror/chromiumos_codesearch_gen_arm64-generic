// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import './support_tool_shared.css.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { getTemplate } from './screenshot.html.js';
import { SupportToolPageMixin } from './support_tool_page_mixin.js';
const ScreenshotElementBase = SupportToolPageMixin(PolymerElement);
export class ScreenshotElement extends ScreenshotElementBase {
    constructor() {
        super(...arguments);
        // The coordinate of the top left corner of the canvas.
        this.canvasX_ = 0;
        this.canvasY_ = 0;
        // The coordinates that define user-selected regions. The four numbers are:
        // the x and y coordinates of the top left corner, and the width and height
        // of the rectangle.
        this.rects_ = new Set();
        // Store the rectangles that remain when the user clicks the confirm button.
        this.confirmedRects_ = new Set();
        // The coordinates of the cursor when the user starts to hold the mouse down.
        this.cornerX_ = 0;
        this.cornerY_ = 0;
        this.mouseDown_ = false;
        this.browserProxy_ = BrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'screenshot-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            hasScreenshotPreview_: {
                type: Boolean,
                value: false,
            },
            screenshotBase64_: {
                type: String,
                value: '',
            },
            originalScreenshotBase64_: {
                type: String,
                value: '',
            },
            showEditor_: {
                type: Boolean,
                value: false,
            },
            showDeleteButton_: {
                type: Boolean,
                value: false,
            },
            buttonX_: {
                type: Number,
                value: 0,
            },
            buttonY_: {
                type: Number,
                value: 0,
            },
        };
    }
    setScreenshotData(dataBase64) {
        this.screenshotBase64_ = dataBase64;
        this.originalScreenshotBase64_ = dataBase64;
        this.hasScreenshotPreview_ = true;
    }
    getEditedScreenshotBase64() {
        return this.screenshotBase64_;
    }
    getOriginalScreenshotBase64() {
        return this.originalScreenshotBase64_;
    }
    onTakeScreenshotClick_() {
        this.browserProxy_.takeScreenshot();
    }
    onRemoveScreenshotClick_() {
        this.hasScreenshotPreview_ = false;
        this.rects_.clear();
        this.confirmedRects_.clear();
        this.screenshotBase64_ = '';
        this.originalScreenshotBase64_ = '';
    }
    onEditScreenshotClick_() {
        // Make a copy of the confirmed rectangles. We will only work with this
        // copy when the user is actively drawing.
        this.rects_ = new Set(this.confirmedRects_);
        this.showEditor_ = true;
    }
    onOpenDialog_() {
        const canvas = this.$$('#screenshotCanvas');
        const image = this.$$('#screenshotEditorBG');
        canvas.height = image.height;
        canvas.width = image.width;
        this.canvasX_ = canvas.getBoundingClientRect().left;
        this.canvasY_ = canvas.getBoundingClientRect().top;
        this.context_ = canvas.getContext('2d');
        this.context_.clearRect(0, 0, canvas.width, canvas.height);
        this.context_.fill();
        const dialog = this.$$('#editor');
        const body = dialog.shadowRoot.querySelector('#container');
        // Make sure that the canvas coordinates are always up-to-date.
        window.addEventListener('scroll', this.onCoordsChanged_.bind(this));
        window.addEventListener('resize', this.onCoordsChanged_.bind(this));
        body.addEventListener('scroll', this.onCoordsChanged_.bind(this));
        // Draw rectangles based on mouse activities.
        canvas.addEventListener('mousedown', this.onCanvasMouseDown_.bind(this));
        canvas.addEventListener('mousemove', this.onCanvasMouseMove_.bind(this));
        canvas.addEventListener('mouseup', this.onCanvasMouseUp_.bind(this));
    }
    onCoordsChanged_() {
        this.canvasX_ = this.context_.canvas.getBoundingClientRect().left;
        this.canvasY_ = this.context_.canvas.getBoundingClientRect().top;
    }
    onCanvasMouseDown_(event) {
        if (!this.mouseDown_) {
            this.cornerX_ = event.clientX - this.canvasX_;
            this.cornerY_ = event.clientY - this.canvasY_;
            this.mouseDown_ = true;
        }
    }
    onCanvasMouseMove_(event) {
        const mouseX = event.clientX - this.canvasX_;
        const mouseY = event.clientY - this.canvasY_;
        this.context_.clearRect(0, 0, this.context_.canvas.width, this.context_.canvas.height);
        this.context_.beginPath();
        this.showDeleteButton_ = false;
        // Re-draw all the rectangles.
        for (const rect of this.rects_) {
            this.context_.rect(rect[0], rect[1], rect[2], rect[3]);
            if (!this.mouseDown_ && !this.showDeleteButton_ &&
                this.context_.isPointInPath(mouseX, mouseY)) {
                // If we are not drawing new rectangles, show the remove button when the
                // cursor is on the top of a rectangle.
                this.showDeleteButton_ = true;
                this.selectedRect_ = rect;
                this.buttonX_ = rect[0] + rect[2];
                this.buttonY_ = rect[1] - 24;
            }
        }
        if (this.mouseDown_) {
            // Draw the rectangle according to the cursor position.
            this.context_.rect(this.cornerX_, this.cornerY_, mouseX - this.cornerX_, mouseY - this.cornerY_);
        }
        this.context_.fill();
    }
    onCanvasMouseUp_(event) {
        const mouseX = event.clientX - this.canvasX_;
        const mouseY = event.clientY - this.canvasY_;
        // Locate the top left corner.
        this.rects_.add([
            Math.min(this.cornerX_, mouseX),
            Math.min(this.cornerY_, mouseY),
            Math.abs(mouseX - this.cornerX_),
            Math.abs(mouseY - this.cornerY_),
        ]);
        this.mouseDown_ = false;
    }
    onClickDeleteRect_() {
        this.rects_.delete(this.selectedRect_);
        this.showDeleteButton_ = false;
        this.context_.clearRect(0, 0, this.context_.canvas.width, this.context_.canvas.height);
        // Re-draw the remaining rectangles.
        this.context_.beginPath();
        for (const rect of this.rects_) {
            this.context_.rect(rect[0], rect[1], rect[2], rect[3]);
        }
        this.context_.fill();
    }
    onClickConfirm_() {
        this.confirmedRects_ = this.rects_;
        const background = this.$$('#screenshotEditorBG');
        this.context_.drawImage(background, 0, 0);
        // Draw the rectangles.
        this.context_.fill();
        this.screenshotBase64_ = this.context_.canvas.toDataURL('image/jpeg', 0.9);
        this.showEditor_ = false;
    }
    onCloseDialog_() {
        this.showEditor_ = false;
    }
    onClickCancel_() {
        this.showEditor_ = false;
    }
}
customElements.define(ScreenshotElement.is, ScreenshotElement);

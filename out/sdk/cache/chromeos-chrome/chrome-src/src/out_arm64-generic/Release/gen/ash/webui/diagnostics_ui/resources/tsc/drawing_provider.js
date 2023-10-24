// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { constructRgba, DESTINATION_OVER, getTrailOpacityFromPressure, LINE_CAP, LINE_WIDTH, lookupCssVariableValue, MARK_COLOR, MARK_OPACITY, MARK_RADIUS, SOURCE_OVER, TRAIL_COLOR } from './drawing_provider_utils.js';
/**
 * CanvasDrawingProvider implements the DrawingProvider interface using html
 * Canvas API. This design makes the drawing mechanism in a replaceable module.
 */
export class CanvasDrawingProvider {
    constructor(ctx) {
        this.ctx = ctx;
        this.setup();
    }
    setup() {
        assert(this.ctx);
        this.ctx.lineCap = LINE_CAP;
        this.ctx.lineWidth = LINE_WIDTH;
    }
    /**
     * For testing only.
     */
    getCtx() {
        return this.ctx;
    }
    /**
     * For testing only.
     */
    getLineCap() {
        return this.ctx.lineCap;
    }
    /**
     * For testing only.
     */
    getLineWidth() {
        return this.ctx.lineWidth;
    }
    /**
     * For testing only.
     */
    getStrokeStyle() {
        return this.ctx.strokeStyle;
    }
    /**
     * For testing only.
     */
    getFillStyle() {
        return this.ctx.fillStyle;
    }
    /**
     * For testing only.
     */
    getGlobalCompositeOperation() {
        return this.ctx.globalCompositeOperation;
    }
    /**
     * Draw a line on canvas.
     */
    drawTrail(x0, y0, x1, y1, pressure) {
        assert(this.ctx);
        this.ctx.strokeStyle = constructRgba(lookupCssVariableValue(TRAIL_COLOR), getTrailOpacityFromPressure(pressure));
        this.ctx.beginPath();
        this.ctx.moveTo(x0, y0);
        this.ctx.lineTo(x1, y1);
        this.ctx.stroke();
    }
    /**
     * Draw a trail mark on canvas.
     */
    drawTrailMark(x, y) {
        assert(this.ctx);
        // Making sure the mark is always on top.
        this.ctx.globalCompositeOperation = SOURCE_OVER;
        this.ctx.fillStyle = constructRgba(lookupCssVariableValue(MARK_COLOR), lookupCssVariableValue(MARK_OPACITY));
        this.ctx.beginPath();
        this.ctx.arc(x, y, MARK_RADIUS, 0, 2 * Math.PI);
        this.ctx.fill();
        this.ctx.globalCompositeOperation = DESTINATION_OVER;
    }
}

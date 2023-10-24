// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertExists, assertInstanceof, } from '../assert.js';
import * as dom from '../dom.js';
import { Box, Line, Point, Size, Vector, vectorFromPoints } from '../geometry.js';
import { I18nString } from '../i18n_string.js';
import { speak } from '../spoken_msg.js';
import { Rotation, ROTATION_ORDER } from '../type.js';
import * as util from '../util.js';
/**
 * Delay for movement announcer gathering user pressed key to announce first
 * feedback in milliseconds.
 */
const MOVEMENT_ANNOUNCER_START_DELAY_MS = 500;
/**
 * Interval for movement announcer to announce next movement.
 */
const MOVEMENT_ANNOUNCER_INTERVAL_MS = 2000;
/**
 * Maps from sign of x, y movement to corresponding i18n labels to be announced.
 */
const MOVEMENT_ANNOUNCE_LABELS = new Map([
    [
        -1,
        new Map([
            [-1, I18nString.MOVING_IN_TOP_LEFT_DIRECTION],
            [0, I18nString.MOVING_IN_LEFT_DIRECTION],
            [1, I18nString.MOVING_IN_BOTTOM_LEFT_DIRECTION],
        ]),
    ],
    [
        0,
        new Map([
            [-1, I18nString.MOVING_IN_TOP_DIRECTION],
            [1, I18nString.MOVING_IN_BOTTOM_DIRECTION],
        ]),
    ],
    [
        1,
        new Map([
            [-1, I18nString.MOVING_IN_TOP_RIGHT_DIRECTION],
            [0, I18nString.MOVING_IN_RIGHT_DIRECTION],
            [1, I18nString.MOVING_IN_BOTTOM_RIGHT_DIRECTION],
        ]),
    ],
]);
/**
 * Announces the movement direction of document corner with screen reader.
 */
class MovementAnnouncer {
    constructor() {
        /**
         * Interval to throttle the consecutive announcement.
         */
        this.announceInterval = null;
        /**
         * X component of last not announced movement.
         */
        this.lastXMovement = 0;
        /**
         * Y component of last not announced movement.
         */
        this.lastYMovement = 0;
    }
    updateMovement(dx, dy) {
        this.lastXMovement = dx;
        this.lastYMovement = dy;
        if (this.announceInterval === null) {
            this.announceInterval = new util.DelayInterval(() => {
                this.announce();
            }, MOVEMENT_ANNOUNCER_START_DELAY_MS, MOVEMENT_ANNOUNCER_INTERVAL_MS);
        }
    }
    announce() {
        if (this.lastXMovement === 0 && this.lastYMovement === 0) {
            assert(this.announceInterval !== null);
            this.announceInterval.stop();
            this.announceInterval = null;
            return;
        }
        const signX = Math.sign(this.lastXMovement);
        const signY = Math.sign(this.lastYMovement);
        speak(assertExists(MOVEMENT_ANNOUNCE_LABELS.get(signX)?.get(signY)));
        this.lastXMovement = this.lastYMovement = 0;
    }
}
/**
 * The closest distance ratio with respect to corner space size. The dragging
 * corner should not be closer to the 3 lines formed by another 3 corners than
 * this ratio times scale of corner space size.
 */
const CLOSEST_DISTANCE_RATIO = 1 / 10;
// The class to set on corner element when the corner is being dragged.
const CORNER_DRAGGING_CLASS = 'dragging';
export class DocumentFixMode {
    constructor({ target, onDone, onShow, onUpdatePage }) {
        /**
         * The original size of the image to be cropped.
         */
        this.rawImageSize = new Size(0, 0);
        /**
         * The available size for showing the image. Will be synced with the rendered
         * size of previewArea.
         */
        this.previewAreaSize = new Size(0, 0);
        /**
         * The display size of the image and the available space for the corners.
         * Will change when `this.previewArea` resizes.
         */
        this.imageContainerSize = null;
        /**
         * Current preview image rotation.
         */
        this.rotation = ROTATION_ORDER[0];
        /**
         * Used to update `this.corners` when manually update the corners by
         * `this.update`.
         */
        this.initialCorners = [];
        this.onShow = onShow;
        const fragment = util.instantiateTemplate('#document-fix-mode');
        this.root = dom.getFrom(fragment, '.document-fix-mode', HTMLElement);
        target.append(this.root);
        this.previewArea = dom.getFrom(this.root, '.preview-area', HTMLDivElement);
        this.imageElement = dom.getFrom(this.root, '.image', HTMLImageElement);
        this.cropAreaContainer =
            dom.getFrom(this.root, '.crop-area-container', SVGElement);
        this.cropArea = dom.getFrom(this.root, '.crop-area', SVGPolygonElement);
        this.imageContainer =
            dom.getFrom(this.root, '.image-container', HTMLDivElement);
        this.resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.target !== this.previewArea) {
                    continue;
                }
                // There should be exactly one size for `this.previewArea`, see
                // https://www.w3.org/TR/resize-observer/#resize-observer-entry-interface
                const { inlineSize, blockSize } = entry.contentBoxSize[0];
                this.previewAreaSize = new Size(inlineSize, blockSize);
                this.setupImageAndCorners();
                // Clear all dragging corners.
                for (const corner of this.corners) {
                    if (corner.pointerId !== null) {
                        this.clearDragging(corner.pointerId);
                    }
                }
            }
        });
        /**
         * Coordinates of document with respect to `this.imageContainerSize`.
         */
        this.corners = (() => {
            const ret = [];
            for (let i = 0; i < 4; i++) {
                const tpl = util.instantiateTemplate('#document-drag-point-template');
                ret.push({
                    el: dom.getFrom(tpl, '.dot', HTMLDivElement),
                    pt: new Point(0, 0),
                    pointerId: null,
                });
                this.imageContainer.appendChild(tpl);
            }
            return ret;
        })();
        const onChangeCornerOrRotation = () => {
            const corners = this.corners.map(({ pt: { x, y } }) => {
                assert(this.imageContainerSize !== null);
                return new Point(x / this.imageContainerSize.width, y / this.imageContainerSize.height);
            });
            onUpdatePage({ corners, rotation: this.rotation });
        };
        const clockwiseBtn = dom.getFrom(this.root, 'button[i18n-label=rotate_clockwise_button]', HTMLButtonElement);
        clockwiseBtn.addEventListener('click', () => {
            this.updateRotation(this.getNextRotation(this.rotation));
            onChangeCornerOrRotation();
        });
        const counterclockwiseBtn = dom.getFrom(this.root, 'button[i18n-label=rotate_counterclockwise_button]', HTMLButtonElement);
        counterclockwiseBtn.addEventListener('click', () => {
            this.updateRotation(this.getNextRotation(this.rotation, false));
            onChangeCornerOrRotation();
        });
        for (const corner of this.corners) {
            // Start dragging on one corner.
            corner.el.addEventListener('pointerdown', (e) => {
                e.preventDefault();
                assert(e.target === corner.el);
                this.setDragging(corner, assertInstanceof(e, PointerEvent).pointerId);
            });
            // Use arrow key to move corner.
            const KEYS = ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
            function getKeyIndex(e) {
                const key = util.getKeyboardShortcut(e);
                return KEYS.indexOf(key);
            }
            const KEY_MOVEMENTS = [
                new Vector(0, -1),
                new Vector(-1, 0),
                new Vector(0, 1),
                new Vector(1, 0),
            ];
            const pressedKeyIndices = new Set();
            let keyInterval = null;
            function clearKeydown() {
                if (keyInterval !== null) {
                    keyInterval.stop();
                    keyInterval = null;
                }
                pressedKeyIndices.clear();
            }
            const announcer = new MovementAnnouncer();
            corner.el.addEventListener('blur', () => {
                clearKeydown();
            });
            corner.el.addEventListener('keydown', (e) => {
                const keyIdx = getKeyIndex(e);
                if (keyIdx === -1 || pressedKeyIndices.has(keyIdx)) {
                    return;
                }
                const move = () => {
                    let announceMoveX = 0;
                    let announceMoveY = 0;
                    let moveX = 0;
                    let moveY = 0;
                    for (const keyIdx of pressedKeyIndices) {
                        const announceMoveXY = KEY_MOVEMENTS[keyIdx];
                        announceMoveX += announceMoveXY.x;
                        announceMoveY += announceMoveXY.y;
                        const movementIndex = (keyIdx + this.getRotationIndex(this.rotation)) %
                            KEY_MOVEMENTS.length;
                        const moveXY = KEY_MOVEMENTS[movementIndex];
                        moveX += moveXY.x;
                        moveY += moveXY.y;
                    }
                    announcer.updateMovement(announceMoveX, announceMoveY);
                    const { x: curX, y: curY } = corner.pt;
                    const nextPt = new Point(curX + moveX, curY + moveY);
                    const validPt = this.mapToValidArea(corner, nextPt);
                    if (validPt === null) {
                        return;
                    }
                    corner.pt = validPt;
                    this.updateCornerEl();
                };
                pressedKeyIndices.add(keyIdx);
                move();
                if (keyInterval === null) {
                    const PRESS_TIMEOUT = 500;
                    const HOLD_INTERVAL = 100;
                    keyInterval = new util.DelayInterval(() => {
                        move();
                    }, PRESS_TIMEOUT, HOLD_INTERVAL);
                }
            });
            corner.el.addEventListener('keyup', (e) => {
                const keyIdx = getKeyIndex(e);
                if (keyIdx === -1) {
                    return;
                }
                pressedKeyIndices.delete(keyIdx);
                if (pressedKeyIndices.size === 0) {
                    clearKeydown();
                }
                onChangeCornerOrRotation();
            });
        }
        // Stop dragging.
        for (const eventName of ['pointerup', 'pointerleave', 'pointercancel']) {
            this.imageContainer.addEventListener(eventName, (e) => {
                e.preventDefault();
                this.clearDragging(assertInstanceof(e, PointerEvent).pointerId);
                onChangeCornerOrRotation();
            });
        }
        // Cache corner size to avoid layout thrashing. Assume that all corners have
        // same sizes and sizes never change.
        let cornerSize;
        // Move drag corner.
        this.imageContainer.addEventListener('pointermove', (e) => {
            e.preventDefault();
            const pointerId = assertInstanceof(e, PointerEvent).pointerId;
            const corner = this.findDragging(pointerId);
            if (corner === null) {
                return;
            }
            if (cornerSize === undefined) {
                const { width, height } = corner.el.getBoundingClientRect();
                cornerSize = new Size(width, height);
            }
            assert(corner.el.classList.contains(CORNER_DRAGGING_CLASS));
            let dragX = e.offsetX;
            let dragY = e.offsetY;
            const target = assertInstanceof(e.target, HTMLElement);
            // The offsetX, offsetY of corners.el are measured from their own left,
            // top.
            if (this.corners.find(({ el }) => el === target) !== undefined) {
                const style = target.attributeStyleMap;
                dragX += util.getStyleValueInPx(style, 'left') - cornerSize.width / 2;
                dragY += util.getStyleValueInPx(style, 'top') - cornerSize.height / 2;
            }
            const validPt = this.mapToValidArea(corner, new Point(dragX, dragY));
            if (validPt === null) {
                return;
            }
            corner.pt = validPt;
            this.updateCornerEl();
        });
        // Prevent contextmenu popup triggered by long touch.
        this.imageContainer.addEventListener('contextmenu', (e) => {
            // Chrome use PointerEvent instead of MouseEvent for contextmenu event:
            // https://chromestatus.com/feature/5670732015075328.
            if (assertInstanceof(e, PointerEvent).pointerType === 'touch') {
                e.preventDefault();
            }
        });
        this.doneButton = dom.getFrom(this.root, 'button[i18n-text=label_crop_done]', HTMLButtonElement);
        this.doneButton.addEventListener('click', onDone);
    }
    setDragging(corner, pointerId) {
        corner.el.classList.add(CORNER_DRAGGING_CLASS);
        corner.pointerId = pointerId;
    }
    findDragging(pointerId) {
        return this.corners.find(({ pointerId: id }) => id === pointerId) ?? null;
    }
    clearDragging(pointerId) {
        const corner = this.findDragging(pointerId);
        if (corner === null) {
            return;
        }
        corner.el.classList.remove(CORNER_DRAGGING_CLASS);
        corner.pointerId = null;
    }
    mapToValidArea(corner, pt) {
        assert(this.imageContainerSize !== null);
        pt = new Point(Math.max(Math.min(pt.x, this.imageContainerSize.width), 0), Math.max(Math.min(pt.y, this.imageContainerSize.height), 0));
        const idx = this.corners.findIndex((c) => c === corner);
        assert(idx !== -1);
        const prevPt = this.corners[(idx + 3) % 4].pt;
        const nextPt = this.corners[(idx + 1) % 4].pt;
        const restPt = this.corners[(idx + 2) % 4].pt;
        const closestDist = Math.min(this.imageContainerSize.width, this.imageContainerSize.height) *
            CLOSEST_DISTANCE_RATIO;
        const prevDir = vectorFromPoints(restPt, prevPt).direction();
        const prevBorder = (new Line(prevPt, prevDir)).moveParallel(closestDist);
        const nextDir = vectorFromPoints(nextPt, restPt).direction();
        const nextBorder = (new Line(nextPt, nextDir)).moveParallel(closestDist);
        const restDir = vectorFromPoints(nextPt, prevPt).direction();
        const restBorder = (new Line(prevPt, restDir)).moveParallel(closestDist);
        if (prevBorder.isInward(pt) && nextBorder.isInward(pt) &&
            restBorder.isInward(pt)) {
            return pt;
        }
        const prevBorderPt = prevBorder.intersect(restBorder);
        if (prevBorderPt === null) {
            // May completely overlapped.
            return null;
        }
        const nextBorderPt = nextBorder.intersect(restBorder);
        if (nextBorderPt === null) {
            // May completely overlapped.
            return null;
        }
        const box = new Box(assertInstanceof(this.imageContainerSize, Size));
        // Find boundary points of valid area by cases of whether |prevBorderPt| and
        // |nextBorderPt| are inside/outside the box.
        const boundaryPts = [];
        if (!box.inside(prevBorderPt) && !box.inside(nextBorderPt)) {
            const intersectPts = box.segmentIntersect(prevBorderPt, nextBorderPt);
            if (intersectPts.length === 0) {
                // Valid area is completely outside the bounding box.
                return null;
            }
            else {
                boundaryPts.push(...intersectPts);
            }
        }
        else {
            if (box.inside(prevBorderPt)) {
                const boxPt = box.rayIntersect(prevBorderPt, prevBorder.direction.reverse());
                boundaryPts.push(boxPt, prevBorderPt);
            }
            else {
                const newPrevBorderPt = box.rayIntersect(nextBorderPt, vectorFromPoints(prevBorderPt, nextBorderPt));
                boundaryPts.push(newPrevBorderPt);
            }
            if (box.inside(nextBorderPt)) {
                const boxPt = box.rayIntersect(nextBorderPt, nextBorder.direction);
                boundaryPts.push(nextBorderPt, boxPt);
            }
            else {
                const newBorderPt = box.rayIntersect(prevBorderPt, vectorFromPoints(nextBorderPt, prevBorderPt));
                boundaryPts.push(newBorderPt);
            }
        }
        /**
         * @return Square distance of |pt3| to segment formed by |pt1| and |pt2|
         *     and the corresponding nearest point on the segment.
         */
        function distToSegment(pt1, pt2, pt3) {
            // Minimum Distance between a Point and a Line:
            // http://paulbourke.net/geometry/pointlineplane/
            const v12 = vectorFromPoints(pt2, pt1);
            const v13 = vectorFromPoints(pt3, pt1);
            const u = (v12.x * v13.x + v12.y * v13.y) / v12.length2();
            if (u <= 0) {
                return { dist2: v13.length2(), nearest: pt1 };
            }
            if (u >= 1) {
                return { dist2: vectorFromPoints(pt3, pt2).length2(), nearest: pt2 };
            }
            const projection = vectorFromPoints(pt1).add(v12.multiply(u)).point();
            return {
                dist2: vectorFromPoints(projection, pt3).length2(),
                nearest: projection,
            };
        }
        // Project |pt| to nearest point on boundary.
        let mn = Infinity;
        let mnPt = null;
        for (let i = 1; i < boundaryPts.length; i++) {
            const { dist2, nearest } = distToSegment(boundaryPts[i - 1], boundaryPts[i], pt);
            if (dist2 < mn) {
                mn = dist2;
                mnPt = nearest;
            }
        }
        return assertInstanceof(mnPt, Point);
    }
    updateCornerEl() {
        const cords = this.corners.map(({ pt: { x, y } }) => `${x},${y}`).join(' ');
        this.cropArea.setAttribute('points', cords);
        for (const corner of this.corners) {
            const style = corner.el.attributeStyleMap;
            style.set('left', CSS.px(corner.pt.x));
            style.set('top', CSS.px(corner.pt.y));
        }
    }
    updateCornerElAriaLabel() {
        for (const [index, label] of [I18nString.LABEL_DOCUMENT_TOP_LEFT_CORNER,
            I18nString.LABEL_DOCUMENT_BOTTOM_LEFT_CORNER,
            I18nString.LABEL_DOCUMENT_BOTTOM_RIGHT_CORNER,
            I18nString.LABEL_DOCUMENT_TOP_RIGHT_CORNER,
        ].entries()) {
            const cornerIndex = (this.getRotationIndex(this.rotation) + index) % this.corners.length;
            const cornElement = this.corners[cornerIndex].el;
            cornElement.setAttribute('i18n-label', label);
        }
        util.setupI18nElements(this.root);
    }
    /**
     * Updates image and corners position/size with respect to `this.rotation`,
     * `this.previewAreaSize` and `this.rawImageSize`.
     */
    setupImageAndCorners() {
        const { width: frameW, height: frameH } = this.previewAreaSize;
        const { width: rawImageW, height: rawImageH } = this.rawImageSize;
        if (frameW === 0 || frameH === 0 || rawImageW === 0 || rawImageH === 0) {
            return;
        }
        let rotatedW = rawImageW;
        let rotatedH = rawImageH;
        if ([Rotation.ANGLE_90, Rotation.ANGLE_270].includes(this.rotation)) {
            [rotatedW, rotatedH] = [rotatedH, rotatedW];
        }
        const scale = Math.min(1, frameW / rotatedW, frameH / rotatedH);
        const newImageW = scale * rawImageW;
        const newImageH = scale * rawImageH;
        // Update corner space.
        if (this.imageContainerSize === null) {
            for (const [idx, { x, y }] of this.initialCorners.entries()) {
                this.corners[idx].pt = new Point(x * newImageW, y * newImageH);
            }
            this.initialCorners = [];
        }
        else {
            const oldImageW = this.imageContainerSize.width;
            const oldImageH = this.imageContainerSize.height;
            for (const corner of this.corners) {
                corner.pt = new Point(corner.pt.x / oldImageW * newImageW, corner.pt.y / oldImageH * newImageH);
            }
        }
        const style = this.imageContainer.attributeStyleMap;
        this.cropAreaContainer.setAttribute('viewBox', `0 0 ${newImageW} ${newImageH}`);
        style.set('width', CSS.px(newImageW));
        style.set('height', CSS.px(newImageH));
        this.imageContainerSize = new Size(newImageW, newImageH);
        const rotationIndex = this.getRotationIndex(this.rotation);
        const originX = frameW / 2 + rotatedW * scale / 2 * [-1, 1, 1, -1][rotationIndex];
        const originY = frameH / 2 + rotatedH * scale / 2 * [-1, -1, 1, 1][rotationIndex];
        style.set('left', CSS.px(originX));
        style.set('top', CSS.px(originY));
        style.set('transform', new CSSTransformValue([new CSSRotate(CSS.deg(this.rotation))]));
        this.updateCornerEl();
    }
    async update({ corners, rotation, blob }) {
        this.initialCorners = corners;
        this.imageContainerSize = null;
        const image = new Image();
        await util.loadImage(image, blob);
        this.rawImageSize = new Size(image.width, image.height);
        this.imageElement.src = image.src;
        URL.revokeObjectURL(image.src);
        this.updateRotation(rotation);
    }
    updateRotation(rotation) {
        this.rotation = rotation;
        this.setupImageAndCorners();
        this.updateCornerElAriaLabel();
    }
    layout() {
        const previewAreaRect = this.previewArea.getBoundingClientRect();
        this.previewAreaSize =
            new Size(previewAreaRect.width, previewAreaRect.height);
        this.setupImageAndCorners();
        // Clear all dragging corners.
        for (const corner of this.corners) {
            if (corner.pointerId !== null) {
                this.clearDragging(corner.pointerId);
            }
        }
    }
    show() {
        this.root.classList.add('show');
        this.resizeObserver.observe(this.previewArea);
        this.onShow();
    }
    hide() {
        this.resizeObserver.disconnect();
        this.root.classList.remove('show');
    }
    getNextRotation(rotation, clockwise = true) {
        const index = this.getRotationIndex(rotation);
        const deviation = clockwise ? 1 : -1;
        const length = ROTATION_ORDER.length;
        return ROTATION_ORDER[(index + deviation + length) % length];
    }
    getRotationIndex(rotation) {
        return ROTATION_ORDER.indexOf(rotation);
    }
    focusDefaultElement() {
        this.doneButton.focus();
    }
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { RectUtil } from '/common/rect_util.js';
import { MenuManager } from './menu_manager.js';
import { SwitchAccess } from './switch_access.js';
import { ErrorType, Mode } from './switch_access_constants.js';
var FocusType = chrome.accessibilityPrivate.FocusType;
/** Class to handle focus rings. */
export class FocusRingManager {
    observer_;
    /** A map of all the focus rings. */
    rings_;
    ringNodesForTesting_ = {
        [RingId.PRIMARY]: null,
        [RingId.PREVIEW]: null,
    };
    static instance_;
    constructor() {
        this.rings_ = this.createRings_();
    }
    static get instance() {
        if (!FocusRingManager.instance_) {
            FocusRingManager.instance_ = new FocusRingManager();
        }
        return FocusRingManager.instance_;
    }
    /** Sets the focus ring color. */
    static setColor(color) {
        if (!COLOR_PATTERN.test(color)) {
            console.error(SwitchAccess.error(ErrorType.INVALID_COLOR, 'Problem setting focus ring color: ' + color + ' is not' +
                'a valid CSS color string.'));
            return;
        }
        FocusRingManager.instance.setColorValidated_(color);
    }
    /** Sets the primary and preview focus rings based on the provided node. */
    static setFocusedNode(node) {
        if (node.ignoreWhenComputingUnionOfBoundingBoxes()) {
            FocusRingManager.instance.setFocusedNodeIgnorePrimary_(node);
            return;
        }
        if (!node.location) {
            throw SwitchAccess.error(ErrorType.MISSING_LOCATION, 'Cannot set focus rings if node location is undefined', true /* shouldRecover */);
        }
        // If the primary node is a group, show its first child as the "preview"
        // focus.
        if (node.isGroup()) {
            // TODO(b/314203187): Not null asserted, check that this is correct.
            const firstChild = node.asRootNode().firstChild;
            FocusRingManager.instance.setFocusedNodeGroup_(node, firstChild);
            return;
        }
        FocusRingManager.instance.setFocusedNodeLeaf_(node);
    }
    /** Clears all focus rings. */
    static clearAll() {
        FocusRingManager.instance.clearAll_();
    }
    /**
     * Set an observer that will be called every time the focus rings
     * are updated. It will be called with two arguments: the node for
     * the primary ring, and the node for the preview ring. Either may
     * be null.
     */
    static setObserver(observer) {
        FocusRingManager.instance.observer_ = observer;
    }
    // ======== Private methods ========
    clearAll_() {
        this.forEachRing_(ring => ring.rects = []);
        this.updateNodesForTesting_(null, null);
        this.updateFocusRings_();
    }
    /** Creates the map of focus rings. */
    createRings_() {
        const primaryRing = {
            id: RingId.PRIMARY,
            rects: [],
            type: FocusType.SOLID,
            color: PRIMARY_COLOR,
            secondaryColor: OUTER_COLOR,
        };
        const previewRing = {
            id: RingId.PREVIEW,
            rects: [],
            type: FocusType.DASHED,
            color: PREVIEW_COLOR,
            secondaryColor: OUTER_COLOR,
        };
        return {
            [RingId.PRIMARY]: primaryRing,
            [RingId.PREVIEW]: previewRing,
        };
    }
    /** Calls a function for each focus ring. */
    forEachRing_(callback) {
        Object.values(this.rings_).forEach(ring => callback(ring));
    }
    /** Sets the focus ring color. Assumes the color has been validated. */
    setColorValidated_(color) {
        this.forEachRing_(ring => ring.color = color);
    }
    /**
     * Sets the primary focus ring to |node|, and the preview focus ring to
     * |firstChild|.
     */
    setFocusedNodeGroup_(group, firstChild) {
        // Clear the dashed ring between transitions, as the animation is
        // distracting.
        this.rings_[RingId.PREVIEW].rects = [];
        let focusRect = group.location;
        const childRect = firstChild ? firstChild.location : null;
        if (childRect) {
            // If the current element is not specialized in location handling, e.g.
            // the back button, the focus rect should expand to contain the child
            // rect.
            focusRect =
                RectUtil.expandToFitWithPadding(GROUP_BUFFER, focusRect, childRect);
            this.rings_[RingId.PREVIEW].rects = [childRect];
        }
        this.rings_[RingId.PRIMARY].rects = [focusRect];
        this.updateNodesForTesting_(group, firstChild);
        this.updateFocusRings_();
    }
    /**
     * Clears the primary focus ring and sets the preview focus ring based on the
     * provided node.
     */
    setFocusedNodeIgnorePrimary_(node) {
        // Nodes of this type, e.g. the back button node, handles setting its own
        // focus, as it has special requirements (a round focus ring that has no
        // gap with the edges of the view).
        this.rings_[RingId.PRIMARY].rects = [];
        // Clear the dashed ring between transitions, as the animation is
        // distracting.
        this.rings_[RingId.PREVIEW].rects = [];
        this.updateFocusRings_();
        // Show the preview focus ring unless the menu is open (it has a custom exit
        // button).
        if (!MenuManager.isMenuOpen()) {
            // TODO(b/314203187): Not null asserted, check that this is correct.
            this.rings_[RingId.PREVIEW].rects = [node.group.location];
        }
        this.updateNodesForTesting_(node, node.group);
        this.updateFocusRings_();
    }
    /** Sets the primary focus to |node| and clears the secondary focus. */
    setFocusedNodeLeaf_(node) {
        // TODO(b/314203187): Not nulls asserted, check these to make sure
        // this is correct.
        this.rings_[RingId.PRIMARY].rects = [node.location];
        this.rings_[RingId.PREVIEW].rects = [];
        this.updateNodesForTesting_(node, null);
        this.updateFocusRings_();
    }
    /**
     * Updates all focus rings to reflect new location, color, style, or other
     * changes. Enables observers to monitor what's focused.
     */
    updateFocusRings_() {
        if (SwitchAccess.mode === Mode.POINT_SCAN && !MenuManager.isMenuOpen()) {
            return;
        }
        const focusRings = Object.values(this.rings_);
        chrome.accessibilityPrivate.setFocusRings(focusRings, chrome.accessibilityPrivate.AssistiveTechnologyType.SWITCH_ACCESS);
    }
    /** Saves the primary/preview focus for testing. */
    updateNodesForTesting_(primary, preview) {
        // Keep track of the nodes associated with each focus ring for testing
        // purposes, since focus ring locations are not guaranteed to exactly match
        // node locations.
        this.ringNodesForTesting_[RingId.PRIMARY] = primary;
        this.ringNodesForTesting_[RingId.PREVIEW] = preview;
        const observer = FocusRingManager.instance.observer_;
        if (observer) {
            observer(primary, preview);
        }
    }
}
/**
 * Regex pattern to verify valid colors. Checks that the first character
 * is '#', followed by 3, 4, 6, or 8 valid hex characters, and no other
 * characters (ignoring case).
 */
const COLOR_PATTERN = /^#([0-9A-F]{3,4}|[0-9A-F]{6}|[0-9A-F]{8})$/i;
/**
 * The buffer (in dip) between a child's focus ring and its parent's focus
 * ring.
 */
const GROUP_BUFFER = 2;
/**
 * The focus ring IDs used by Switch Access.
 * Exported for testing.
 */
export var RingId;
(function (RingId) {
    // The ID for the ring showing the user's current focus.
    RingId["PRIMARY"] = "primary";
    // The ID for the ring showing a preview of the next focus, if the user
    // selects the current element.
    RingId["PREVIEW"] = "preview";
})(RingId || (RingId = {}));
/** The secondary color for both rings. */
const OUTER_COLOR = '#174EA6'; // Google Blue 900
/** The inner color of the preview focus ring. */
const PREVIEW_COLOR = '#8AB4F880'; // Google Blue 300, 50% opacity
/** The inner color of the primary focus ring. */
const PRIMARY_COLOR = '#8AB4F8'; // Google Blue 300

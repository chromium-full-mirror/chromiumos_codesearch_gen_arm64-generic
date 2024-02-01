import { isServer, property, LitElement, css, customElement, state, query, html, classMap, svg, styleMap, queryAssignedElements, nothing } from 'chrome://resources/mwc/lit/index.js';
import { html as html$1, Polymer, dom, dedupingMixin, PolymerElement, Base } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { sendWithPromise } from 'chrome://resources/js/cr.js';

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Utility methods for accessing chrome.metricsPrivate API.
 *
 * To be included as a first script in main.html
 */
/**
 * A map from interval name to interval start timestamp.
 */
const intervals = {};
/**
 * Start the named time interval.
 * Should be followed by a call to recordInterval with the same name.
 *
 * @param name Unique interval name.
 */
function startInterval(name) {
    intervals[name] = Date.now();
}
/** Convert a short metric name to the full format. */
function convertName(name) {
    return 'FileBrowser.' + name;
}
/** Wrapper method for calling chrome.fileManagerPrivate safely. */
function callAPI(name, args) {
    try {
        const method = chrome.metricsPrivate[name];
        method.apply(chrome.metricsPrivate, args);
    }
    catch (e) {
        console.error(e.stack);
    }
}
/**
 * Records a value than can range from 1 to 10,000.
 * @param name Short metric name.
 * @param value Value to be recorded.
 */
function recordMediumCount(name, value) {
    callAPI('recordMediumCount', [convertName(name), value]);
}
/**
 * Records a value than can range from 1 to 100.
 * @param name Short metric name.
 * @param value Value to be recorded.
 */
function recordSmallCount(name, value) {
    callAPI('recordSmallCount', [convertName(name), value]);
}
/**
 * Records an elapsed time of no more than 10 seconds.
 * @param name Short metric name.
 * @param time Time to be recorded in milliseconds.
 */
function recordTime(name, time) {
    callAPI('recordTime', [convertName(name), time]);
}
/**
 * Records a boolean value to the given metric.
 * @param name Short metric name.
 * @param value The value to be recorded.
 */
function recordBoolean(name, value) {
    callAPI('recordBoolean', [convertName(name), value]);
}
/**
 * Records an action performed by the user.
 * @param {string} name Short metric name.
 */
function recordUserAction(name) {
    callAPI('recordUserAction', [convertName(name)]);
}
/**
 * Records an elapsed time of no more than 10 seconds.
 * @param value Numeric value to be recorded in units that match the histogram
 *    definition (in histograms.xml).
 */
function recordValue(name, type, min, max, buckets, value) {
    callAPI('recordValue', [
        {
            'metricName': convertName(name),
            'type': type,
            'min': min,
            'max': max,
            'buckets': buckets,
        },
        value,
    ]);
}
/**
 * Complete the time interval recording.
 *
 * Should be preceded by a call to startInterval with the same name.
 *
 * @param {string} name Unique interval name.
 */
function recordInterval(name) {
    const start = intervals[name];
    if (start !== undefined) {
        recordTime(name, Date.now() - start);
    }
    else {
        console.error('Unknown interval: ' + name);
    }
}
/**
 * Complete the time interval recording into appropriate bucket.
 *
 * Should be preceded by a call to startInterval with the same |name|.
 *
 * @param name Unique interval name.
 * @param numFiles The number of files in this current directory.
 * @param buckets Array of numbers that correspond to a bucket value, this will
 *     be suffixed to |name| when recorded.
 * @param tolerance Allowed tolerance for |value| to coalesce into a
 *    bucket.
 */
function recordDirectoryListLoadWithTolerance(name, numFiles, buckets, tolerance) {
    const start = intervals[name];
    if (start !== undefined) {
        for (const bucketValue of buckets) {
            const toleranceMargin = bucketValue * tolerance;
            if (numFiles >= (bucketValue - toleranceMargin) &&
                numFiles <= (bucketValue + toleranceMargin)) {
                recordTime(`${name}.${bucketValue}`, Date.now() - start);
                return;
            }
        }
    }
    else {
        console.error('Interval not started:', name);
    }
}
/**
 * Record an enum value.
 *
 * @param name Metric name.
 * @param value Enum value.
 * @param validValues Array of valid values or a boundary number
 *     (one-past-the-end) value.
 */
function recordEnum(name, value, validValues) {
    console.assert(validValues !== undefined);
    let index = validValues.indexOf(value);
    const boundaryValue = validValues.length;
    // Collect invalid values in the overflow bucket at the end.
    if (index < 0 || index >= boundaryValue) {
        index = boundaryValue - 1;
    }
    // Setting min to 1 looks strange but this is exactly the recommended way
    // of using histograms for enum-like types. Bucket #0 works as a regular
    // bucket AND the underflow bucket.
    // (Source: UMA_HISTOGRAM_ENUMERATION definition in
    // base/metrics/histogram.h)
    const metricDescr = {
        'metricName': convertName(name),
        'type': chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LINEAR,
        'min': 1,
        'max': boundaryValue - 1,
        'buckets': boundaryValue,
    };
    callAPI('recordValue', [metricDescr, index]);
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Calls the `fn` function which should expect the callback as last argument.
 *
 * Resolves with the result of the `fn`.
 *
 * Rejects if there is `chrome.runtime.lastError`.
 */
async function promisify(fn, ...args) {
    return new Promise((resolve, reject) => {
        const callback = (result) => {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError.message);
            }
            else {
                resolve(result);
            }
        };
        fn(...args, callback);
    });
}
function iconSetToCSSBackgroundImageValue(iconSet) {
    let lowDpiPart = null;
    let highDpiPart = null;
    if (iconSet.icon16x16Url) {
        lowDpiPart = 'url(' + iconSet.icon16x16Url + ') 1x';
    }
    if (iconSet.icon32x32Url) {
        highDpiPart = 'url(' + iconSet.icon32x32Url + ') 2x';
    }
    if (lowDpiPart && highDpiPart) {
        return 'image-set(' + lowDpiPart + ', ' + highDpiPart + ')';
    }
    else if (lowDpiPart) {
        return 'image-set(' + lowDpiPart + ')';
    }
    else if (highDpiPart) {
        return 'image-set(' + highDpiPart + ')';
    }
    return 'none';
}
/**
 * Mapping table for FileError.code style enum to DOMError.name string.
 */
var FileErrorToDomError;
(function (FileErrorToDomError) {
    FileErrorToDomError["ABORT_ERR"] = "AbortError";
    FileErrorToDomError["INVALID_MODIFICATION_ERR"] = "InvalidModificationError";
    FileErrorToDomError["INVALID_STATE_ERR"] = "InvalidStateError";
    FileErrorToDomError["NO_MODIFICATION_ALLOWED_ERR"] = "NoModificationAllowedError";
    FileErrorToDomError["NOT_FOUND_ERR"] = "NotFoundError";
    FileErrorToDomError["NOT_READABLE_ERR"] = "NotReadable";
    FileErrorToDomError["PATH_EXISTS_ERR"] = "PathExistsError";
    FileErrorToDomError["QUOTA_EXCEEDED_ERR"] = "QuotaExceededError";
    FileErrorToDomError["TYPE_MISMATCH_ERR"] = "TypeMismatchError";
    FileErrorToDomError["ENCODING_ERR"] = "EncodingError";
})(FileErrorToDomError || (FileErrorToDomError = {}));
/**
 * Extracts path from filesystem: URL.
 * @return The path if it can be parsed, null if it cannot.
 */
function extractFilePath(url) {
    const match = /^filesystem:[\w-]*:\/\/[\w-]*\/(external|persistent|temporary)(\/.*)$/
        .exec(url || '');
    const path = match && match[2];
    if (!path) {
        return null;
    }
    return decodeURIComponent(path);
}
/**
 * @return True if the Files app is running as an open files or a
 *     select folder dialog. False otherwise.
 */
function runningInBrowser() {
    return !window.appID;
}
/**
 * The last URL with visitURL().
 */
let lastVisitedURL;
/**
 * Visit the URL.
 *
 * If the browser is opening, the url is opened in a new tab, otherwise the url
 * is opened in a new window.
 */
function visitURL(url) {
    lastVisitedURL = url;
    // openURL opens URLs in the primary browser (ash vs lacros) as opposed to
    // window.open which always opens URLs in ash-chrome.
    chrome.fileManagerPrivate.openURL(url);
}
/**
 * Return the last URL visited with visitURL().
 */
function getLastVisitedURL() {
    return lastVisitedURL;
}
/**
 * Returns whether the window is teleported or not.
 */
function isTeleported() {
    return new Promise(onFulfilled => {
        chrome.fileManagerPrivate.getProfiles((response) => {
            onFulfilled(response.currentProfileId !== response.displayedProfileId);
        });
    });
}
/**
 * Runs chrome.test.sendMessage in test environment. Does nothing if running
 * in production environment.
 */
function testSendMessage(message) {
    if (chrome.test) {
        chrome.test.sendMessage(message);
    }
}
/**
 * Extracts the extension of the path.
 *
 * Examples:
 * splitExtension('abc.ext') -> ['abc', '.ext']
 * splitExtension('a/b/abc.ext') -> ['a/b/abc', '.ext']
 * splitExtension('a/b') -> ['a/b', '']
 * splitExtension('.cshrc') -> ['', '.cshrc']
 * splitExtension('a/b.backup/hoge') -> ['a/b.backup/hoge', '']
 */
function splitExtension(path) {
    let dotPosition = path.lastIndexOf('.');
    if (dotPosition <= path.lastIndexOf('/')) {
        dotPosition = -1;
    }
    const filename = dotPosition !== -1 ? path.substr(0, dotPosition) : path;
    const extension = dotPosition !== -1 ? path.substr(dotPosition) : '';
    return [filename, extension];
}
/**
 * Checks if an API call returned an error, and if yes then prints it.
 */
function checkAPIError() {
    if (chrome.runtime.lastError) {
        console.warn(chrome.runtime.lastError.message);
    }
}
/**
 * Makes a promise which will be fulfilled |ms| milliseconds later.
 */
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
/**
 * Makes a promise which will be rejected if the given |promise| is not resolved
 * or rejected for |ms| milliseconds.
 */
function timeoutPromise(promise, ms, message) {
    return Promise.race([
        promise,
        delay(ms).then(() => {
            throw new Error(message || 'Operation timed out.');
        }),
    ]);
}
/**
 * Returns the Files app modal dialog used to embed any files app dialog
 * that derives from cr.ui.dialogs.
 */
function getFilesAppModalDialogInstance() {
    let dialogElement = document.querySelector('#files-app-modal-dialog');
    if (!dialogElement) { // Lazily create the files app dialog instance.
        dialogElement = document.createElement('dialog');
        dialogElement.id = 'files-app-modal-dialog';
        document.body.appendChild(dialogElement);
    }
    return dialogElement;
}
function descriptorEqual(left, right) {
    return left.appId === right.appId && left.taskType === right.taskType &&
        left.actionId === right.actionId;
}
/**
 * Create a taskID which is a string unique-ID for a task. This is temporary
 * and will be removed once we use task.descriptor everywhere instead.
 */
function makeTaskID({ appId, taskType, actionId }) {
    return `${appId}|${taskType}|${actionId}`;
}
/**
 * Returns a new promise which, when fulfilled carries a boolean indicating
 * whether the app is in the guest mode. Typical use:
 *
 * isInGuestMode().then(
 *     (guest) => { if (guest) { ... in guest mode } }
 */
async function isInGuestMode() {
    const response = await promisify(chrome.fileManagerPrivate.getProfiles);
    const profiles = response.profiles;
    return profiles.length > 0 && profiles[0]?.profileId === '$guest';
}
/**
 * A kind of error that represents user electing to cancel an operation. We use
 * this specialization to differentiate between system errors and errors
 * generated through legitimate user actions.
 */
class UserCanceledError extends Error {
}
/**
 * Returns whether the given value is null or undefined.
 */
const isNullOrUndefined = (value) => value === null || value === undefined;
/**
 * Bulk pinning should only show visible UI elements when in progress or
 * continuing to sync.
 */
function canBulkPinningCloudPanelShow(stage, enabled) {
    const BulkPinStage = chrome.fileManagerPrivate.BulkPinStage;
    // If the stage is in progress and the bulk pinning preference is enabled,
    // then the cloud panel should not be visible.
    if (enabled &&
        (stage === BulkPinStage.GETTING_FREE_SPACE ||
            stage === BulkPinStage.LISTING_FILES ||
            stage === BulkPinStage.SYNCING)) {
        return true;
    }
    // For the PAUSED... states the preference should still be enabled, however,
    // for the latter the preference will have been disabled.
    if ((stage === BulkPinStage.PAUSED_OFFLINE && enabled) ||
        (stage === BulkPinStage.PAUSED_BATTERY_SAVER && enabled) ||
        stage === BulkPinStage.NOT_ENOUGH_SPACE) {
        return true;
    }
    return false;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


function __decorate$1(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A key to retrieve an `Attachable` element's `AttachableController` from a
 * global `MutationObserver`.
 */
const ATTACHABLE_CONTROLLER = Symbol('attachableController');
let FOR_ATTRIBUTE_OBSERVER;
if (!isServer) {
    /**
     * A global `MutationObserver` that reacts to `for` attribute changes on
     * `Attachable` elements. If the `for` attribute changes, the controller will
     * re-attach to the new referenced element.
     */
    FOR_ATTRIBUTE_OBSERVER = new MutationObserver((records) => {
        for (const record of records) {
            // When a control's `for` attribute changes, inform its
            // `AttachableController` to update to a new control.
            record.target[ATTACHABLE_CONTROLLER]?.hostConnected();
        }
    });
}
/**
 * A controller that provides an implementation for `Attachable` elements.
 *
 * @example
 * ```ts
 * class MyElement extends LitElement implements Attachable {
 *   get control() { return this.attachableController.control; }
 *
 *   private readonly attachableController = new AttachableController(
 *     this,
 *     (previousControl, newControl) => {
 *       previousControl?.removeEventListener('click', this.handleClick);
 *       newControl?.addEventListener('click', this.handleClick);
 *     }
 *   );
 *
 *   // Implement remaining `Attachable` properties/methods that call the
 *   // controller's properties/methods.
 * }
 * ```
 */
class AttachableController {
    get htmlFor() {
        return this.host.getAttribute('for');
    }
    set htmlFor(htmlFor) {
        if (htmlFor === null) {
            this.host.removeAttribute('for');
        }
        else {
            this.host.setAttribute('for', htmlFor);
        }
    }
    get control() {
        if (this.host.hasAttribute('for')) {
            if (!this.htmlFor || !this.host.isConnected) {
                return null;
            }
            return this.host.getRootNode().querySelector(`#${this.htmlFor}`);
        }
        return this.currentControl || this.host.parentElement;
    }
    set control(control) {
        if (control) {
            this.attach(control);
        }
        else {
            this.detach();
        }
    }
    /**
     * Creates a new controller for an `Attachable` element.
     *
     * @param host The `Attachable` element.
     * @param onControlChange A callback with two parameters for the previous and
     *     next control. An `Attachable` element may perform setup or teardown
     *     logic whenever the control changes.
     */
    constructor(host, onControlChange) {
        this.host = host;
        this.onControlChange = onControlChange;
        this.currentControl = null;
        host.addController(this);
        host[ATTACHABLE_CONTROLLER] = this;
        FOR_ATTRIBUTE_OBSERVER?.observe(host, { attributeFilter: ['for'] });
    }
    attach(control) {
        if (control === this.currentControl) {
            return;
        }
        this.setCurrentControl(control);
        // When imperatively attaching, remove the `for` attribute so
        // that the attached control is used instead of a referenced one.
        this.host.removeAttribute('for');
    }
    detach() {
        this.setCurrentControl(null);
        // When imperatively detaching, add an empty `for=""` attribute. This will
        // ensure the control is `null` rather than the `parentElement`.
        this.host.setAttribute('for', '');
    }
    /** @private */
    hostConnected() {
        this.setCurrentControl(this.control);
    }
    /** @private */
    hostDisconnected() {
        this.setCurrentControl(null);
    }
    setCurrentControl(control) {
        this.onControlChange(this.currentControl, control);
        this.currentControl = control;
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Events that the focus ring listens to.
 */
const EVENTS$1 = ['focusin', 'focusout', 'pointerdown'];
/**
 * A focus ring component.
 *
 * @fires visibility-changed {Event} Fired whenever `visible` changes.
 */
class FocusRing extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Makes the focus ring visible.
         */
        this.visible = false;
        /**
         * Makes the focus ring animate inwards instead of outwards.
         */
        this.inward = false;
        this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
    }
    get htmlFor() {
        return this.attachableController.htmlFor;
    }
    set htmlFor(htmlFor) {
        this.attachableController.htmlFor = htmlFor;
    }
    get control() {
        return this.attachableController.control;
    }
    set control(control) {
        this.attachableController.control = control;
    }
    attach(control) {
        this.attachableController.attach(control);
    }
    detach() {
        this.attachableController.detach();
    }
    connectedCallback() {
        super.connectedCallback();
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
    /** @private */
    handleEvent(event) {
        if (event[HANDLED_BY_FOCUS_RING]) {
            // This ensures the focus ring does not activate when multiple focus rings
            // are used within a single component.
            return;
        }
        switch (event.type) {
            default:
                return;
            case 'focusin':
                this.visible = this.control?.matches(':focus-visible') ?? false;
                break;
            case 'focusout':
            case 'pointerdown':
                this.visible = false;
                break;
        }
        event[HANDLED_BY_FOCUS_RING] = true;
    }
    onControlChange(prev, next) {
        if (isServer)
            return;
        for (const event of EVENTS$1) {
            prev?.removeEventListener(event, this);
            next?.addEventListener(event, this);
        }
    }
    update(changed) {
        if (changed.has('visible')) {
            // This logic can be removed once the `:has` selector has been introduced
            // to Firefox. This is necessary to allow correct submenu styles.
            this.dispatchEvent(new Event('visibility-changed'));
        }
        super.update(changed);
    }
}
__decorate$1([
    property({ type: Boolean, reflect: true })
], FocusRing.prototype, "visible", void 0);
__decorate$1([
    property({ type: Boolean, reflect: true })
], FocusRing.prototype, "inward", void 0);
const HANDLED_BY_FOCUS_RING = Symbol('handledByFocusRing');

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$6 = css `:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, 9999px)) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}/*# sourceMappingURL=focus-ring-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * TODO(b/267336424): add docs
 *
 * @final
 * @suppress {visibility}
 */
let MdFocusRing = class MdFocusRing extends FocusRing {
};
MdFocusRing.styles = [styles$6];
MdFocusRing = __decorate$1([
    customElement('md-focus-ring')
], MdFocusRing);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Easing functions to use for web animations.
 *
 * **NOTE:** `EASING.EMPHASIZED` is approximated with unknown accuracy.
 *
 * TODO(b/241113345): replace with tokens
 */
const EASING = {
    STANDARD: 'cubic-bezier(0.2, 0, 0, 1)',
    STANDARD_ACCELERATE: 'cubic-bezier(.3,0,1,1)',
    STANDARD_DECELERATE: 'cubic-bezier(0,0,0,1)',
    EMPHASIZED: 'cubic-bezier(.3,0,0,1)',
    EMPHASIZED_ACCELERATE: 'cubic-bezier(.3,0,.8,.15)',
    EMPHASIZED_DECELERATE: 'cubic-bezier(.05,.7,.1,1)',
};

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const PRESS_GROW_MS = 450;
const MINIMUM_PRESS_MS = 225;
const INITIAL_ORIGIN_SCALE = 0.2;
const PADDING = 10;
const SOFT_EDGE_MINIMUM_SIZE = 75;
const SOFT_EDGE_CONTAINER_RATIO = 0.35;
const PRESS_PSEUDO = '::after';
const ANIMATION_FILL = 'forwards';
/**
 * Interaction states for the ripple.
 *
 * On Touch:
 *  - `INACTIVE -> TOUCH_DELAY -> WAITING_FOR_CLICK -> INACTIVE`
 *  - `INACTIVE -> TOUCH_DELAY -> HOLDING -> WAITING_FOR_CLICK -> INACTIVE`
 *
 * On Mouse or Pen:
 *   - `INACTIVE -> WAITING_FOR_CLICK -> INACTIVE`
 */
var State;
(function (State) {
    /**
     * Initial state of the control, no touch in progress.
     *
     * Transitions:
     *   - on touch down: transition to `TOUCH_DELAY`.
     *   - on mouse down: transition to `WAITING_FOR_CLICK`.
     */
    State[State["INACTIVE"] = 0] = "INACTIVE";
    /**
     * Touch down has been received, waiting to determine if it's a swipe or
     * scroll.
     *
     * Transitions:
     *   - on touch up: begin press; transition to `WAITING_FOR_CLICK`.
     *   - on cancel: transition to `INACTIVE`.
     *   - after `TOUCH_DELAY_MS`: begin press; transition to `HOLDING`.
     */
    State[State["TOUCH_DELAY"] = 1] = "TOUCH_DELAY";
    /**
     * A touch has been deemed to be a press
     *
     * Transitions:
     *  - on up: transition to `WAITING_FOR_CLICK`.
     */
    State[State["HOLDING"] = 2] = "HOLDING";
    /**
     * The user touch has finished, transition into rest state.
     *
     * Transitions:
     *   - on click end press; transition to `INACTIVE`.
     */
    State[State["WAITING_FOR_CLICK"] = 3] = "WAITING_FOR_CLICK";
})(State || (State = {}));
/**
 * Events that the ripple listens to.
 */
const EVENTS = [
    'click',
    'contextmenu',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerup',
];
/**
 * Delay reacting to touch so that we do not show the ripple for a swipe or
 * scroll interaction.
 */
const TOUCH_DELAY_MS = 150;
/**
 * Used to detect if HCM is active. Events do not process during HCM when the
 * ripple is not displayed.
 */
const FORCED_COLORS = isServer
    ? null
    : window.matchMedia('(forced-colors: active)');
/**
 * A ripple component.
 */
class Ripple extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Disables the ripple.
         */
        this.disabled = false;
        this.hovered = false;
        this.pressed = false;
        this.rippleSize = '';
        this.rippleScale = '';
        this.initialSize = 0;
        this.state = State.INACTIVE;
        this.checkBoundsAfterContextMenu = false;
        this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
    }
    get htmlFor() {
        return this.attachableController.htmlFor;
    }
    set htmlFor(htmlFor) {
        this.attachableController.htmlFor = htmlFor;
    }
    get control() {
        return this.attachableController.control;
    }
    set control(control) {
        this.attachableController.control = control;
    }
    attach(control) {
        this.attachableController.attach(control);
    }
    detach() {
        this.attachableController.detach();
    }
    connectedCallback() {
        super.connectedCallback();
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
    render() {
        const classes = {
            'hovered': this.hovered,
            'pressed': this.pressed,
        };
        return html `<div class="surface ${classMap(classes)}"></div>`;
    }
    update(changedProps) {
        if (changedProps.has('disabled') && this.disabled) {
            this.hovered = false;
            this.pressed = false;
        }
        super.update(changedProps);
    }
    /**
     * TODO(b/269799771): make private
     * @private only public for slider
     */
    handlePointerenter(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.hovered = true;
    }
    /**
     * TODO(b/269799771): make private
     * @private only public for slider
     */
    handlePointerleave(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.hovered = false;
        // release a held mouse or pen press that moves outside the element
        if (this.state !== State.INACTIVE) {
            this.endPressAnimation();
        }
    }
    handlePointerup(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        if (this.state === State.HOLDING) {
            this.state = State.WAITING_FOR_CLICK;
            return;
        }
        if (this.state === State.TOUCH_DELAY) {
            this.state = State.WAITING_FOR_CLICK;
            this.startPressAnimation(this.rippleStartEvent);
            return;
        }
    }
    async handlePointerdown(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.rippleStartEvent = event;
        if (!this.isTouch(event)) {
            this.state = State.WAITING_FOR_CLICK;
            this.startPressAnimation(event);
            return;
        }
        // after a longpress contextmenu event, an extra `pointerdown` can be
        // dispatched to the pressed element. Check that the down is within
        // bounds of the element in this case.
        if (this.checkBoundsAfterContextMenu && !this.inBounds(event)) {
            return;
        }
        this.checkBoundsAfterContextMenu = false;
        // Wait for a hold after touch delay
        this.state = State.TOUCH_DELAY;
        await new Promise((resolve) => {
            setTimeout(resolve, TOUCH_DELAY_MS);
        });
        if (this.state !== State.TOUCH_DELAY) {
            return;
        }
        this.state = State.HOLDING;
        this.startPressAnimation(event);
    }
    handleClick() {
        // Click is a MouseEvent in Firefox and Safari, so we cannot use
        // `shouldReactToEvent`
        if (this.disabled) {
            return;
        }
        if (this.state === State.WAITING_FOR_CLICK) {
            this.endPressAnimation();
            return;
        }
        if (this.state === State.INACTIVE) {
            // keyboard synthesized click event
            this.startPressAnimation();
            this.endPressAnimation();
        }
    }
    handlePointercancel(event) {
        if (!this.shouldReactToEvent(event)) {
            return;
        }
        this.endPressAnimation();
    }
    handleContextmenu() {
        if (this.disabled) {
            return;
        }
        this.checkBoundsAfterContextMenu = true;
        this.endPressAnimation();
    }
    determineRippleSize() {
        const { height, width } = this.getBoundingClientRect();
        const maxDim = Math.max(height, width);
        const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);
        const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
        const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
        const maxRadius = hypotenuse + PADDING;
        this.initialSize = initialSize;
        this.rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`;
        this.rippleSize = `${initialSize}px`;
    }
    getNormalizedPointerEventCoords(pointerEvent) {
        const { scrollX, scrollY } = window;
        const { left, top } = this.getBoundingClientRect();
        const documentX = scrollX + left;
        const documentY = scrollY + top;
        const { pageX, pageY } = pointerEvent;
        return { x: pageX - documentX, y: pageY - documentY };
    }
    getTranslationCoordinates(positionEvent) {
        const { height, width } = this.getBoundingClientRect();
        // end in the center
        const endPoint = {
            x: (width - this.initialSize) / 2,
            y: (height - this.initialSize) / 2,
        };
        let startPoint;
        if (positionEvent instanceof PointerEvent) {
            startPoint = this.getNormalizedPointerEventCoords(positionEvent);
        }
        else {
            startPoint = {
                x: width / 2,
                y: height / 2,
            };
        }
        // center around start point
        startPoint = {
            x: startPoint.x - this.initialSize / 2,
            y: startPoint.y - this.initialSize / 2,
        };
        return { startPoint, endPoint };
    }
    startPressAnimation(positionEvent) {
        if (!this.mdRoot) {
            return;
        }
        this.pressed = true;
        this.growAnimation?.cancel();
        this.determineRippleSize();
        const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent);
        const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
        const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
        this.growAnimation = this.mdRoot.animate({
            top: [0, 0],
            left: [0, 0],
            height: [this.rippleSize, this.rippleSize],
            width: [this.rippleSize, this.rippleSize],
            transform: [
                `translate(${translateStart}) scale(1)`,
                `translate(${translateEnd}) scale(${this.rippleScale})`,
            ],
        }, {
            pseudoElement: PRESS_PSEUDO,
            duration: PRESS_GROW_MS,
            easing: EASING.STANDARD,
            fill: ANIMATION_FILL,
        });
    }
    async endPressAnimation() {
        this.state = State.INACTIVE;
        const animation = this.growAnimation;
        let pressAnimationPlayState = Infinity;
        if (typeof animation?.currentTime === 'number') {
            pressAnimationPlayState = animation.currentTime;
        }
        else if (animation?.currentTime) {
            pressAnimationPlayState = animation.currentTime.to('ms').value;
        }
        if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
            this.pressed = false;
            return;
        }
        await new Promise((resolve) => {
            setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState);
        });
        if (this.growAnimation !== animation) {
            // A new press animation was started. The old animation was canceled and
            // should not finish the pressed state.
            return;
        }
        this.pressed = false;
    }
    /**
     * Returns `true` if
     *  - the ripple element is enabled
     *  - the pointer is primary for the input type
     *  - the pointer is the pointer that started the interaction, or will start
     * the interaction
     *  - the pointer is a touch, or the pointer state has the primary button
     * held, or the pointer is hovering
     */
    shouldReactToEvent(event) {
        if (this.disabled || !event.isPrimary) {
            return false;
        }
        if (this.rippleStartEvent &&
            this.rippleStartEvent.pointerId !== event.pointerId) {
            return false;
        }
        if (event.type === 'pointerenter' || event.type === 'pointerleave') {
            return !this.isTouch(event);
        }
        const isPrimaryButton = event.buttons === 1;
        return this.isTouch(event) || isPrimaryButton;
    }
    /**
     * Check if the event is within the bounds of the element.
     *
     * This is only needed for the "stuck" contextmenu longpress on Chrome.
     */
    inBounds({ x, y }) {
        const { top, left, bottom, right } = this.getBoundingClientRect();
        return x >= left && x <= right && y >= top && y <= bottom;
    }
    isTouch({ pointerType }) {
        return pointerType === 'touch';
    }
    /** @private */
    async handleEvent(event) {
        if (FORCED_COLORS?.matches) {
            // Skip event logic since the ripple is `display: none`.
            return;
        }
        switch (event.type) {
            case 'click':
                this.handleClick();
                break;
            case 'contextmenu':
                this.handleContextmenu();
                break;
            case 'pointercancel':
                this.handlePointercancel(event);
                break;
            case 'pointerdown':
                await this.handlePointerdown(event);
                break;
            case 'pointerenter':
                this.handlePointerenter(event);
                break;
            case 'pointerleave':
                this.handlePointerleave(event);
                break;
            case 'pointerup':
                this.handlePointerup(event);
                break;
        }
    }
    onControlChange(prev, next) {
        if (isServer)
            return;
        for (const event of EVENTS) {
            prev?.removeEventListener(event, this);
            next?.addEventListener(event, this);
        }
    }
}
__decorate$1([
    property({ type: Boolean, reflect: true })
], Ripple.prototype, "disabled", void 0);
__decorate$1([
    state()
], Ripple.prototype, "hovered", void 0);
__decorate$1([
    state()
], Ripple.prototype, "pressed", void 0);
__decorate$1([
    query('.surface')
], Ripple.prototype, "mdRoot", void 0);

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$5 = css `:host{--_hover-color: var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-opacity: var(--md-ripple-hover-opacity, 0.08);--_pressed-color: var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-opacity: var(--md-ripple-pressed-opacity, 0.12);display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--_hover-color);inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--_pressed-color) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--_hover-color);opacity:var(--_hover-opacity)}.pressed::after{opacity:var(--_pressed-opacity);transition-duration:105ms}/*# sourceMappingURL=ripple-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Ripples, also known as state layers, are visual indicators used to
 * communicate the status of a component or interactive element.
 *
 * @description A state layer is a semi-transparent covering on an element that
 * indicates its state. State layers provide a systematic approach to
 * visualizing states by using opacity. A layer can be applied to an entire
 * element or in a circular shape and only one state layer can be applied at a
 * given time.
 *
 * @final
 * @suppress {visibility}
 */
let MdRipple = class MdRipple extends Ripple {
};
MdRipple.styles = [styles$5];
MdRipple = __decorate$1([
    customElement('md-ripple')
], MdRipple);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Accessibility Object Model reflective aria properties.
 */
const ARIA_PROPERTIES = [
    'ariaAtomic',
    'ariaAutoComplete',
    'ariaBusy',
    'ariaChecked',
    'ariaColCount',
    'ariaColIndex',
    'ariaColSpan',
    'ariaCurrent',
    'ariaDisabled',
    'ariaExpanded',
    'ariaHasPopup',
    'ariaHidden',
    'ariaInvalid',
    'ariaKeyShortcuts',
    'ariaLabel',
    'ariaLevel',
    'ariaLive',
    'ariaModal',
    'ariaMultiLine',
    'ariaMultiSelectable',
    'ariaOrientation',
    'ariaPlaceholder',
    'ariaPosInSet',
    'ariaPressed',
    'ariaReadOnly',
    'ariaRequired',
    'ariaRoleDescription',
    'ariaRowCount',
    'ariaRowIndex',
    'ariaRowSpan',
    'ariaSelected',
    'ariaSetSize',
    'ariaSort',
    'ariaValueMax',
    'ariaValueMin',
    'ariaValueNow',
    'ariaValueText',
];
/**
 * Accessibility Object Model aria attributes.
 */
ARIA_PROPERTIES.map(ariaPropertyToAttribute);
/**
 * Converts an AOM aria property into its corresponding attribute.
 *
 * @example
 * ariaPropertyToAttribute('ariaLabel'); // 'aria-label'
 *
 * @param property The aria property.
 * @return The aria attribute.
 */
function ariaPropertyToAttribute(property) {
    return property
        .replace('aria', 'aria-')
        // IDREF attributes also include an "Element" or "Elements" suffix
        .replace(/Elements?/g, '')
        .toLowerCase();
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Sets up a `ReactiveElement` constructor to enable updates when delegating
 * aria attributes. Elements may bind `this.aria*` properties to `aria-*`
 * attributes in their render functions.
 *
 * This function will:
 * - Call `requestUpdate()` when an aria attribute changes.
 * - Add `role="presentation"` to the host.
 *
 * NOTE: The following features are not currently supported:
 * - Delegating IDREF attributes (ex: `aria-labelledby`, `aria-controls`)
 * - Delegating the `role` attribute
 *
 * @example
 * class XButton extends LitElement {
 *   static {
 *     requestUpdateOnAriaChange(XButton);
 *   }
 *
 *   protected override render() {
 *     return html`
 *       <button aria-label=${this.ariaLabel || nothing}>
 *         <slot></slot>
 *       </button>
 *     `;
 *   }
 * }
 *
 * @param ctor The `ReactiveElement` constructor to patch.
 */
function requestUpdateOnAriaChange(ctor) {
    for (const ariaProperty of ARIA_PROPERTIES) {
        ctor.createProperty(ariaProperty, {
            attribute: ariaPropertyToAttribute(ariaProperty),
            reflect: true,
        });
    }
    ctor.addInitializer((element) => {
        const controller = {
            hostConnected() {
                element.setAttribute('role', 'presentation');
            },
        };
        element.addController(controller);
    });
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Dispatches a click event to the given element that triggers a native action,
 * but is not composed and therefore is not seen outside the element.
 *
 * This is useful for responding to an external click event on the host element
 * that should trigger an internal action like a button click.
 *
 * Note, a helper is provided because setting this up correctly is a bit tricky.
 * In particular, calling `click` on an element creates a composed event, which
 * is not desirable, and a manually dispatched event must specifically be a
 * `MouseEvent` to trigger a native action.
 *
 * @example
 * hostClickListener = (event: MouseEvent) {
 *   if (isActivationClick(event)) {
 *     this.dispatchActivationClick(this.buttonElement);
 *   }
 * }
 *
 */
function dispatchActivationClick(element) {
    const event = new MouseEvent('click', { bubbles: true });
    element.dispatchEvent(event);
    return event;
}
/**
 * Returns true if the click event should trigger an activation behavior. The
 * behavior is defined by the element and is whatever it should do when
 * clicked.
 *
 * Typically when an element needs to handle a click, the click is generated
 * from within the element and an event listener within the element implements
 * the needed behavior; however, it's possible to fire a click directly
 * at the element that the element should handle. This method helps
 * distinguish these "external" clicks.
 *
 * An "external" click can be triggered in a number of ways: via a click
 * on an associated label for a form  associated element, calling
 * `element.click()`, or calling
 * `element.dispatchEvent(new MouseEvent('click', ...))`.
 *
 * Also works around Firefox issue
 * https://bugzilla.mozilla.org/show_bug.cgi?id=1804576 by squelching
 * events for a microtask after called.
 *
 * @example
 * hostClickListener = (event: MouseEvent) {
 *   if (isActivationClick(event)) {
 *     this.dispatchActivationClick(this.buttonElement);
 *   }
 * }
 *
 */
function isActivationClick(event) {
    // Event must start at the event target.
    if (event.currentTarget !== event.target) {
        return false;
    }
    // Event must not be retargeted from shadowRoot.
    if (event.composedPath()[0] !== event.target) {
        return false;
    }
    // Target must not be disabled; this should only occur for a synthetically
    // dispatched click.
    if (event.target.disabled) {
        return false;
    }
    // This is an activation if the event should not be squelched.
    return !squelchEvent(event);
}
// TODO(https://bugzilla.mozilla.org/show_bug.cgi?id=1804576)
//  Remove when Firefox bug is addressed.
function squelchEvent(event) {
    const squelched = isSquelchingEvents;
    if (squelched) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }
    squelchEventsForMicrotask();
    return squelched;
}
// Ignore events for one microtask only.
let isSquelchingEvents = false;
async function squelchEventsForMicrotask() {
    isSquelchingEvents = true;
    // Need to pause for just one microtask.
    // tslint:disable-next-line
    await null;
    isSquelchingEvents = false;
}

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A unique symbol used for protected access to an instance's
 * `ElementInternals`.
 *
 * @example
 * ```ts
 * class MyElement extends mixinElementInternals(LitElement) {
 *   constructor() {
 *     super();
 *     this[internals].role = 'button';
 *   }
 * }
 * ```
 */
const internals = Symbol('internals');
// Private symbols
const privateInternals = Symbol('privateInternals');
/**
 * Mixes in an attached `ElementInternals` instance.
 *
 * This mixin is only needed when other shared code needs access to a
 * component's `ElementInternals`, such as form-associated mixins.
 *
 * @param base The class to mix functionality into.
 * @return The provided class with `WithElementInternals` mixed in.
 */
function mixinElementInternals(base) {
    class WithElementInternalsElement extends base {
        get [internals]() {
            // Create internals in getter so that it can be used in methods called on
            // construction in `ReactiveElement`, such as `requestUpdate()`.
            if (!this[privateInternals]) {
                // Cast needed for closure
                this[privateInternals] = this.attachInternals();
            }
            return this[privateInternals];
        }
    }
    return WithElementInternalsElement;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Verify |value| is truthy.
 * @param value A value to check for truthiness. Note that this
 *     may be used to test whether |value| is defined or not, and we don't want
 *     to force a cast to boolean.
 */
function assert$1(value, message) {
    if (value) {
        return;
    }
    throw new Error('Assertion failed' + (message ? `: ${message}` : ''));
}
function assertInstanceof$1(value, type, message) {
    if (value instanceof type) {
        return;
    }
    throw new Error(message || `Value ${value} is not of type ${type.name || typeof type}`);
}
/**
 * Call this from places in the code that should never be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(enum) {
 *     switch (enum) {
 *       case ENUM_FIRST_OF_TWO:
 *         return first
 *       case ENUM_LAST_OF_TWO:
 *         return last;
 *     }
 *     assertNotReached();
 *   }
 *
 * This code should only be hit in the case of serious programmer error or
 * unexpected input.
 */
function assertNotReached$1(message = 'Unreachable code hit') {
    assert$1(false, message);
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ACTIONS_MODEL_METADATA_PREFETCH_PROPERTY_NAMES = [
    'canPin',
    'hosted',
    'pinned',
];
/**
 * These metadata is expected to be cached to accelerate computeAdditional.
 * See: crbug.com/458915.
 */
const FILE_SELECTION_METADATA_PREFETCH_PROPERTY_NAMES = [
    'availableOffline',
    'contentMimeType',
    'hosted',
    'canPin',
];
/**
 * Metadata property names used by FileTable and FileGrid.
 * These metadata is expected to be cached.
 * TODO(sashab): Store capabilities as a set of flags to save memory. See
 * https://crbug.com/849997
 *
 */
const LIST_CONTAINER_METADATA_PREFETCH_PROPERTY_NAMES = [
    'availableOffline',
    'contentMimeType',
    'customIconUrl',
    'hosted',
    'modificationTime',
    'modificationByMeTime',
    'pinned',
    'shared',
    'size',
    'canCopy',
    'canDelete',
    'canRename',
    'canAddChildren',
    'canShare',
    'canPin',
    'isMachineRoot',
    'isExternalMedia',
    'isArbitrarySyncFolder',
];
/**
 * Metadata properties used to inform the user about DLP (Data Leak Prevention)
 * Files restrictions. These metadata is expected to be cached.
 */
const DLP_METADATA_PREFETCH_PROPERTY_NAMES = [
    'isDlpRestricted',
    'sourceUrl',
    'isRestrictedForDestination',
];
/**
 * Name of the default crostini VM: crostini::kCrostiniDefaultVmName
 */
const DEFAULT_CROSTINI_VM = 'termina';
/**
 * Name of the Plugin VM: plugin_vm::kPluginVmName.
 */
const PLUGIN_VM = 'PvmDefault';
/**
 * Name of the default bruschetta VM: bruschetta::kBruschettaVmName
 */
const DEFAULT_BRUSCHETTA_VM = 'bru';
/**
 * DOMError type for crostini connection failure.
 */
const CROSTINI_CONNECT_ERR = 'CrostiniConnectErr';
/**
 * ID of the fake fileSystemProvider custom action containing OneDrive document
 * URLs.
 */
const FSP_ACTION_HIDDEN_ONEDRIVE_URL = 'HIDDEN_ONEDRIVE_URL';
/**
 * ID of the fake fileSystemProvider custom action containing OneDrive document
 * User Emails.
 */
const FSP_ACTION_HIDDEN_ONEDRIVE_USER_EMAIL = 'HIDDEN_ONEDRIVE_USER_EMAIL';
/**
 * ID of the fake fileSystemProvider custom action containing OneDrive document
 * Reauthentication Required state.
 */
const FSP_ACTION_HIDDEN_ONEDRIVE_REAUTHENTICATION_REQUIRED = 'HIDDEN_ONEDRIVE_REAUTHENTICATION_REQUIRED';
/**
 * All icon types.
 */
const ICON_TYPES = {
    ANDROID_FILES: 'android_files',
    ARCHIVE: 'archive',
    AUDIO: 'audio',
    // Explicitly request the icon to be 0x0. Used to avoid the scenario where a
    // `type` is not specifically supplied vs. actually wanting a blank icon.
    BLANK: 'blank',
    BRUSCHETTA: 'bruschetta',
    BULK_PINNING_BATTERY_SAVER: 'bulk_pinning_battery_saver',
    BULK_PINNING_DONE: 'bulk_pinning_done',
    BULK_PINNING_OFFLINE: 'bulk_pinning_offline',
    CAMERA_FOLDER: 'camera-folder',
    CANT_PIN: 'cant-pin',
    CHECK: 'check',
    CLOUD_DONE: 'cloud_done',
    CLOUD_ERROR: 'cloud_error',
    CLOUD_OFFLINE: 'cloud_offline',
    CLOUD_PAUSED: 'cloud_paused',
    CLOUD_SYNC: 'cloud_sync',
    CLOUD: 'cloud',
    COMPUTER: 'computer',
    COMPUTERS_GRAND_ROOT: 'computers_grand_root',
    CROSTINI: 'crostini',
    DOWNLOADS: 'downloads',
    DRIVE_BULK_PINNING: 'drive_bulk_pinning',
    DRIVE_LOGO: 'drive_logo',
    DRIVE_OFFLINE: 'drive_offline',
    DRIVE_RECENT: 'drive_recent',
    DRIVE_SHARED_WITH_ME: 'drive_shared_with_me',
    DRIVE: 'drive',
    ERROR: 'error',
    ERROR_BANNER: 'error_banner',
    EXCEL: 'excel',
    EXTERNAL_MEDIA: 'external_media',
    FOLDER: 'folder',
    GENERIC: 'generic',
    GOOGLE_DOC: 'gdoc',
    GOOGLE_DRAW: 'gdraw',
    GOOGLE_FORM: 'gform',
    GOOGLE_LINK: 'glink',
    GOOGLE_MAP: 'gmap',
    GOOGLE_SHEET: 'gsheet',
    GOOGLE_SITE: 'gsite',
    GOOGLE_SLIDES: 'gslides',
    GOOGLE_TABLE: 'gtable',
    IMAGE: 'image',
    MTP: 'mtp',
    MY_FILES: 'my_files',
    OFFLINE: 'offline',
    OPTICAL: 'optical',
    PDF: 'pdf',
    PLUGIN_VM: 'plugin_vm',
    POWERPOINT: 'ppt',
    RAW: 'raw',
    RECENT: 'recent',
    REMOVABLE: 'removable',
    SCRIPT: 'script',
    SD_CARD: 'sd',
    SERVICE_DRIVE: 'service_drive',
    SHARED_DRIVE: 'shared_drive',
    SHARED_DRIVES_GRAND_ROOT: 'shared_drives_grand_root',
    SHARED_FOLDER: 'shared_folder',
    SHORTCUT: 'shortcut',
    SITES: 'sites',
    SMB: 'smb',
    TEAM_DRIVE: 'team_drive',
    THUMBNAIL_GENERIC: 'thumbnail_generic',
    TINI: 'tini',
    TRASH: 'trash',
    UNKNOWN_REMOVABLE: 'unknown_removable',
    USB: 'usb',
    VIDEO: 'video',
    WORD: 'word',
};
/**
 * Extension ID for OneDrive FSP, also used as ProviderId.
 */
const ODFS_EXTENSION_ID = 'gnnndjlaomemikopnjhhnoombakkkkdg';

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isFlagEnabled(flagName) {
    return loadTimeData.isInitialized() && loadTimeData.valueExists(flagName) &&
        loadTimeData.getBoolean(flagName);
}
/**
 * Whether the Files app integration with DLP (Data Loss Prevention) is enabled.
 */
function isDlpEnabled() {
    return isFlagEnabled('DLP_ENABLED');
}
/**
 * Returns true if FuseBoxDebug flag is enabled.
 */
function isFuseBoxDebugEnabled() {
    return isFlagEnabled('FUSEBOX_DEBUG');
}
/**
 * Returns true if GuestOsFiles flag is enabled.
 */
function isGuestOsEnabled() {
    return isFlagEnabled('GUEST_OS');
}
/**
 * Returns true if the cros-components flag is enabled.
 */
function isCrosComponentsEnabled() {
    return isFlagEnabled('CROS_COMPONENTS');
}
/**
 * Returns true if DriveFsMirroring flag is enabled.
 */
function isMirrorSyncEnabled() {
    return isFlagEnabled('DRIVEFS_MIRRORING');
}
function isGoogleOneOfferFilesBannerEligibleAndEnabled() {
    return isFlagEnabled('ELIGIBLE_AND_ENABLED_GOOGLE_ONE_OFFER_FILES_BANNER');
}
/**
 * Returns true if FilesSinglePartitionFormat flag is enabled.
 */
function isSinglePartitionFormatEnabled() {
    return isFlagEnabled('FILES_SINGLE_PARTITION_FORMAT_ENABLED');
}
/**
 * Returns whether the DriveFsBulkPinning feature flag is enabled.
 */
function isDriveFsBulkPinningEnabled() {
    return isFlagEnabled('DRIVE_FS_BULK_PINNING');
}
/**
 * Whether the new directory tree flag is enabled.
 */
function isNewDirectoryTreeEnabled() {
    return isFlagEnabled('NEW_DIRECTORY_TREE');
}
function isArcVmEnabled() {
    return isFlagEnabled('ARC_VM_ENABLED');
}
function isPluginVmEnabled() {
    return isFlagEnabled('PLUGIN_VM_ENABLED');
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used to get a pluralized string.
 */
// clang-format off
class PluralStringProxyImpl {
    getPluralString(messageName, itemCount) {
        return sendWithPromise('getPluralString', messageName, itemCount);
    }
    getPluralStringTupleWithComma(messageName1, itemCount1, messageName2, itemCount2) {
        return sendWithPromise('getPluralStringTupleWithComma', messageName1, itemCount1, messageName2, itemCount2);
    }
    getPluralStringTupleWithPeriods(messageName1, itemCount1, messageName2, itemCount2) {
        return sendWithPromise('getPluralStringTupleWithPeriods', messageName1, itemCount1, messageName2, itemCount2);
    }
    static getInstance() {
        return instance || (instance = new PluralStringProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** Paths that can be handled by the dialog opener in native code. */
var AllowedPaths;
(function (AllowedPaths) {
    AllowedPaths["NATIVE_PATH"] = "nativePath";
    AllowedPaths["ANY_PATH"] = "anyPath";
    AllowedPaths["ANY_PATH_OR_URL"] = "anyPathOrUrl";
})(AllowedPaths || (AllowedPaths = {}));
/** Type of a file system. */
var FileSystemType;
(function (FileSystemType) {
    FileSystemType["UNKNOWN"] = "";
    FileSystemType["VFAT"] = "vfat";
    FileSystemType["EXFAT"] = "exfat";
    FileSystemType["NTFS"] = "ntfs";
    FileSystemType["HFSPLUS"] = "hfsplus";
    FileSystemType["EXT2"] = "ext2";
    FileSystemType["EXT3"] = "ext3";
    FileSystemType["EXT4"] = "ext4";
    FileSystemType["ISO9660"] = "iso9660";
    FileSystemType["UDF"] = "udf";
    FileSystemType["FUSEBOX"] = "fusebox";
})(FileSystemType || (FileSystemType = {}));
/** Volume name length limits by file system type. */
const FileSystemTypeVolumeNameLengthLimit = {
    [FileSystemType.VFAT]: 11,
    [FileSystemType.EXFAT]: 15,
    [FileSystemType.NTFS]: 32,
};
/**
 * Type of a navigation root.
 *
 * Navigation root are the top-level entries in the navigation tree, in the
 * left hand side.
 *
 * This must be kept synchronised with the VolumeManagerRootType variant in
 * tools/metrics/histograms/metadata/file/histograms.xml.
 */
var RootType;
(function (RootType) {
    // Root for a downloads directory.
    RootType["DOWNLOADS"] = "downloads";
    // Root for a mounted archive volume.
    RootType["ARCHIVE"] = "archive";
    // Root for a removable volume.
    RootType["REMOVABLE"] = "removable";
    // Root for a drive volume.
    RootType["DRIVE"] = "drive";
    // The grand root entry of Shared Drives in Drive volume.
    RootType["SHARED_DRIVES_GRAND_ROOT"] = "shared_drives_grand_root";
    // Root directory of a Shared Drive.
    RootType["SHARED_DRIVE"] = "team_drive";
    // Root for a MTP volume.
    RootType["MTP"] = "mtp";
    // Root for a provided volume.
    RootType["PROVIDED"] = "provided";
    // Fake root for offline available files on the drive.
    RootType["DRIVE_OFFLINE"] = "drive_offline";
    // Fake root for shared files on the drive.
    RootType["DRIVE_SHARED_WITH_ME"] = "drive_shared_with_me";
    // Fake root for recent files on the drive.
    RootType["DRIVE_RECENT"] = "drive_recent";
    // Root for media views.
    RootType["MEDIA_VIEW"] = "media_view";
    // Root for documents providers.
    RootType["DOCUMENTS_PROVIDER"] = "documents_provider";
    // Fake root for the mixed "Recent" view.
    RootType["RECENT"] = "recent";
    // 'Google Drive' fake parent entry of 'My Drive', 'Shared with me' and
    // 'Offline'.
    RootType["DRIVE_FAKE_ROOT"] = "drive_fake_root";
    // Root for crostini 'Linux files'.
    RootType["CROSTINI"] = "crostini";
    // Root for mountable Guest OSs.
    RootType["GUEST_OS"] = "guest_os";
    // Root for android files.
    RootType["ANDROID_FILES"] = "android_files";
    // My Files root, which aggregates DOWNLOADS, ANDROID_FILES and CROSTINI.
    RootType["MY_FILES"] = "my_files";
    // The grand root entry of My Computers in Drive volume.
    RootType["COMPUTERS_GRAND_ROOT"] = "computers_grand_root";
    // Root directory of a Computer.
    RootType["COMPUTER"] = "computer";
    // Root directory of an external media folder under computers grand root.
    RootType["EXTERNAL_MEDIA"] = "external_media";
    // Root directory of an SMB file share.
    RootType["SMB"] = "smb";
    // Trash.
    RootType["TRASH"] = "trash";
})(RootType || (RootType = {}));
/**
 * Keep the order of this in sync with FileManagerRootType in
 * tools/metrics/histograms/enums.xml.
 * The array indices will be recorded in UMA as enum values. The index for
 * each root type should never be renumbered nor reused in this array.
 */
const RootTypesForUMA = [
    RootType.DOWNLOADS, // 0
    RootType.ARCHIVE, // 1
    RootType.REMOVABLE, // 2
    RootType.DRIVE, // 3
    RootType.SHARED_DRIVES_GRAND_ROOT, // 4
    RootType.SHARED_DRIVE, // 5
    RootType.MTP, // 6
    RootType.PROVIDED, // 7
    'DEPRECATED_DRIVE_OTHER', // 8
    RootType.DRIVE_OFFLINE, // 9
    RootType.DRIVE_SHARED_WITH_ME, // 10
    RootType.DRIVE_RECENT, // 11
    RootType.MEDIA_VIEW, // 12
    RootType.RECENT, // 13
    RootType.DRIVE_FAKE_ROOT, // 14
    'DEPRECATED_ADD_NEW_SERVICES_MENU', // 15
    RootType.CROSTINI, // 16
    RootType.ANDROID_FILES, // 17
    RootType.MY_FILES, // 18
    RootType.COMPUTERS_GRAND_ROOT, // 19
    RootType.COMPUTER, // 20
    RootType.EXTERNAL_MEDIA, // 21
    RootType.DOCUMENTS_PROVIDER, // 22
    RootType.SMB, // 23
    'DEPRECATED_RECENT_AUDIO', // 24
    'DEPRECATED_RECENT_IMAGES', // 25
    'DEPRECATED_RECENT_VIDEOS', // 26
    RootType.TRASH, // 27
    RootType.GUEST_OS, // 28
];
/** Error type of VolumeManager. */
var VolumeError;
(function (VolumeError) {
    /* Internal errors */
    VolumeError["TIMEOUT"] = "timeout";
    /* System events */
    VolumeError["SUCCESS"] = "success";
    VolumeError["IN_PROGRESS"] = "in_progress";
    VolumeError["UNKNOWN_ERROR"] = "unknown_error";
    VolumeError["INTERNAL_ERROR"] = "internal_error";
    VolumeError["INVALID_ARGUMENT"] = "invalid_argument";
    VolumeError["INVALID_PATH"] = "invalid_path";
    VolumeError["PATH_ALREADY_MOUNTED"] = "path_already_mounted";
    VolumeError["PATH_NOT_MOUNTED"] = "path_not_mounted";
    VolumeError["DIRECTORY_CREATION_FAILED"] = "directory_creation_failed";
    VolumeError["INVALID_MOUNT_OPTIONS"] = "invalid_mount_options";
    VolumeError["INSUFFICIENT_PERMISSIONS"] = "insufficient_permissions";
    VolumeError["MOUNT_PROGRAM_NOT_FOUND"] = "mount_program_not_found";
    VolumeError["MOUNT_PROGRAM_FAILED"] = "mount_program_failed";
    VolumeError["INVALID_DEVICE_PATH"] = "invalid_device_path";
    VolumeError["UNKNOWN_FILESYSTEM"] = "unknown_filesystem";
    VolumeError["UNSUPPORTED_FILESYSTEM"] = "unsupported_filesystem";
    VolumeError["NEED_PASSWORD"] = "need_password";
    VolumeError["CANCELLED"] = "cancelled";
    VolumeError["BUSY"] = "busy";
})(VolumeError || (VolumeError = {}));
/** The type of each volume. */
var VolumeType;
(function (VolumeType) {
    VolumeType["DRIVE"] = "drive";
    VolumeType["DOWNLOADS"] = "downloads";
    VolumeType["REMOVABLE"] = "removable";
    VolumeType["ARCHIVE"] = "archive";
    VolumeType["MTP"] = "mtp";
    VolumeType["PROVIDED"] = "provided";
    VolumeType["MEDIA_VIEW"] = "media_view";
    VolumeType["DOCUMENTS_PROVIDER"] = "documents_provider";
    VolumeType["CROSTINI"] = "crostini";
    VolumeType["GUEST_OS"] = "guest_os";
    VolumeType["ANDROID_FILES"] = "android_files";
    VolumeType["MY_FILES"] = "my_files";
    VolumeType["SMB"] = "smb";
    VolumeType["SYSTEM_INTERNAL"] = "system_internal";
    VolumeType["TRASH"] = "trash";
})(VolumeType || (VolumeType = {}));
/** Source of each volume's data. */
var Source;
(function (Source) {
    Source["FILE"] = "file";
    Source["DEVICE"] = "device";
    Source["NETWORK"] = "network";
    Source["SYSTEM"] = "system";
})(Source || (Source = {}));
/**
 * @returns if the volume is linux native file system or not. Non-native file
 * system does not support few operations (e.g. load unpacked extension).
 */
function isNative(type) {
    return type === VolumeType.DOWNLOADS || type === VolumeType.DRIVE ||
        type === VolumeType.ANDROID_FILES || type === VolumeType.CROSTINI ||
        type === VolumeType.GUEST_OS || type === VolumeType.REMOVABLE ||
        type === VolumeType.ARCHIVE || type === VolumeType.SMB;
}
/** Gets volume type from root type. */
function getVolumeTypeFromRootType(rootType) {
    switch (rootType) {
        case RootType.DOWNLOADS:
            return VolumeType.DOWNLOADS;
        case RootType.ARCHIVE:
            return VolumeType.ARCHIVE;
        case RootType.REMOVABLE:
            return VolumeType.REMOVABLE;
        case RootType.DRIVE:
        case RootType.SHARED_DRIVES_GRAND_ROOT:
        case RootType.SHARED_DRIVE:
        case RootType.DRIVE_OFFLINE:
        case RootType.DRIVE_SHARED_WITH_ME:
        case RootType.DRIVE_RECENT:
        case RootType.COMPUTERS_GRAND_ROOT:
        case RootType.COMPUTER:
        case RootType.DRIVE_FAKE_ROOT:
        case RootType.EXTERNAL_MEDIA:
            return VolumeType.DRIVE;
        case RootType.MTP:
            return VolumeType.MTP;
        case RootType.PROVIDED:
            return VolumeType.PROVIDED;
        case RootType.MEDIA_VIEW:
            return VolumeType.MEDIA_VIEW;
        case RootType.DOCUMENTS_PROVIDER:
            return VolumeType.DOCUMENTS_PROVIDER;
        case RootType.CROSTINI:
            return VolumeType.CROSTINI;
        case RootType.GUEST_OS:
            return VolumeType.GUEST_OS;
        case RootType.ANDROID_FILES:
            return VolumeType.ANDROID_FILES;
        case RootType.MY_FILES:
            return VolumeType.MY_FILES;
        case RootType.SMB:
            return VolumeType.SMB;
        case RootType.TRASH:
            return VolumeType.TRASH;
    }
    assertNotReached$1('Unknown root type: ' + rootType);
}
/** Gets root type from volume type. */
function getRootTypeFromVolumeType(volumeType) {
    switch (volumeType) {
        case VolumeType.ANDROID_FILES:
            return RootType.ANDROID_FILES;
        case VolumeType.ARCHIVE:
            return RootType.ARCHIVE;
        case VolumeType.CROSTINI:
            return RootType.CROSTINI;
        case VolumeType.GUEST_OS:
            return RootType.GUEST_OS;
        case VolumeType.DOWNLOADS:
            return RootType.DOWNLOADS;
        case VolumeType.DRIVE:
            return RootType.DRIVE;
        case VolumeType.MEDIA_VIEW:
            return RootType.MEDIA_VIEW;
        case VolumeType.DOCUMENTS_PROVIDER:
            return RootType.DOCUMENTS_PROVIDER;
        case VolumeType.MTP:
            return RootType.MTP;
        case VolumeType.MY_FILES:
            return RootType.MY_FILES;
        case VolumeType.PROVIDED:
            return RootType.PROVIDED;
        case VolumeType.REMOVABLE:
            return RootType.REMOVABLE;
        case VolumeType.SMB:
            return RootType.SMB;
        case VolumeType.TRASH:
            return RootType.TRASH;
    }
    assertNotReached$1('Unknown volume type: ' + volumeType);
}
/**
 * @returns whether the given `volumeType` is expected to provide third party
 * icons in the iconSet property of the volume.
 */
function shouldProvideIcons(volumeType) {
    switch (volumeType) {
        case VolumeType.ANDROID_FILES:
        case VolumeType.DOCUMENTS_PROVIDER:
        case VolumeType.PROVIDED:
            return true;
    }
    return false;
}
/**
 * List of media view root types.
 * Keep this in sync with constants in arc_media_view_util.cc.
 */
var MediaViewRootType;
(function (MediaViewRootType) {
    MediaViewRootType["IMAGES"] = "images_root";
    MediaViewRootType["VIDEOS"] = "videos_root";
    MediaViewRootType["AUDIO"] = "audio_root";
    MediaViewRootType["DOCUMENTS"] = "documents_root";
})(MediaViewRootType || (MediaViewRootType = {}));
/** Gets volume type from root type. */
function getMediaViewRootTypeFromVolumeId(volumeId) {
    return volumeId.split(':', 2)[1];
}
/**
 * An event name triggered when a user tries to mount the volume which is
 * already mounted. The event object must have a volumeId property.
 */
const VOLUME_ALREADY_MOUNTED = 'volume_already_mounted';
const SHARED_DRIVES_DIRECTORY_NAME = 'team_drives';
const SHARED_DRIVES_DIRECTORY_PATH = '/' + SHARED_DRIVES_DIRECTORY_NAME;
/**
 * This is the top level directory name for Computers in drive that are using
 * the backup and sync feature.
 */
const COMPUTERS_DIRECTORY_NAME = 'Computers';
const COMPUTERS_DIRECTORY_PATH = '/' + COMPUTERS_DIRECTORY_NAME;
const ARCHIVE_OPENED_EVENT_TYPE = 'archive_opened';
/** ID of the Google Photos DocumentsProvider volume. */
const PHOTOS_DOCUMENTS_PROVIDER_VOLUME_ID = 'documents_provider:com.google.android.apps.photos.photoprovider/com.google.android.apps.photos';
/**
 * ID of the MediaDocumentsProvider. All the files returned by ARC source in
 * Recents have this ID prefix in their filesystem.
 */
const MEDIA_DOCUMENTS_PROVIDER_ID = 'com.android.providers.media.documents';
/** Checks if a file entry is a Recent entry coming from ARC source. */
function isRecentArcEntry(entry) {
    return !!entry &&
        entry.filesystem.name.startsWith(MEDIA_DOCUMENTS_PROVIDER_ID);
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Returns a translated string.
 *
 * Wrapper function to make dealing with translated strings more concise.
 * Equivalent to loadTimeData.getString(id).
 */
function str(id) {
    try {
        return loadTimeData.getString(id);
    }
    catch (e) {
        console.warn('Failed to get string for', id);
        return id;
    }
}
/**
 * Returns a translated string with arguments replaced.
 *
 * Wrapper function to make dealing with translated strings more concise.
 * Equivalent to loadTimeData.getStringF(id, ...).
 */
function strf(id, ...args) {
    return loadTimeData.getStringF.apply(loadTimeData, [id, ...args]);
}
/**
 * Collator for sorting.
 */
const collator = new Intl.Collator([], { usage: 'sort', numeric: true, sensitivity: 'base' });
/**
 * Returns normalized current locale, or default locale - 'en'.
 */
function getCurrentLocaleOrDefault() {
    const locale = str('UI_LOCALE') || 'en';
    return locale.replace(/_/g, '-');
}
/**
 * Convert a number of bytes into a human friendly format, using the correct
 * number separators.
 */
function bytesToString(bytes, addedPrecision = 0) {
    // Translation identifiers for size units.
    const UNITS = [
        'SIZE_BYTES',
        'SIZE_KB',
        'SIZE_MB',
        'SIZE_GB',
        'SIZE_TB',
        'SIZE_PB',
    ];
    // Minimum values for the units above.
    const STEPS = [
        0,
        Math.pow(2, 10),
        Math.pow(2, 20),
        Math.pow(2, 30),
        Math.pow(2, 40),
        Math.pow(2, 50),
    ];
    // Rounding with precision.
    const round = (value, decimals) => {
        const scale = Math.pow(10, decimals);
        return Math.round(value * scale) / scale;
    };
    const str = (n, u) => {
        return strf(u, n.toLocaleString());
    };
    const fmt = (s, u) => {
        const rounded = round(bytes / s, 1 + addedPrecision);
        return str(rounded, u);
    };
    // Less than 1KB is displayed like '80 bytes'.
    if (bytes < STEPS[1]) {
        return str(bytes, UNITS[0]);
    }
    // Up to 1MB is displayed as rounded up number of KBs, or with the desired
    // number of precision digits.
    if (bytes < STEPS[2]) {
        const rounded = addedPrecision ? round(bytes / STEPS[1], addedPrecision) :
            Math.ceil(bytes / STEPS[1]);
        return str(rounded, UNITS[1]);
    }
    // This loop index is used outside the loop if it turns out |bytes|
    // requires the largest unit.
    let i;
    for (i = 2 /* MB */; i < UNITS.length - 1; i++) {
        if (bytes < STEPS[i + 1]) {
            return fmt(STEPS[i], UNITS[i]);
        }
    }
    return fmt(STEPS[i], UNITS[i]);
}
/**
 * Returns the localized name of the root type.
 */
function getRootTypeLabel(locationInfo) {
    const volumeInfoLabel = locationInfo.volumeInfo?.label || '';
    switch (locationInfo.rootType) {
        case RootType.DOWNLOADS:
            return volumeInfoLabel;
        case RootType.DRIVE:
            return str('DRIVE_MY_DRIVE_LABEL');
        // |locationInfo| points to either the root directory of an individual Team
        // Drive or sub-directory under it, but not the Shared Drives grand
        // directory. Every Shared Drive and its sub-directories always have
        // individual names (locationInfo.hasFixedLabel is false). So
        // getRootTypeLabel() is used by PathComponent.computeComponentsFromEntry()
        // to display the ancestor name in the breadcrumb like this:
        //   Shared Drives > ABC Shared Drive > Folder1
        //   ^^^^^^^^^^^
        // By this reason, we return the label of the Shared Drives grand root here.
        case RootType.SHARED_DRIVE:
        case RootType.SHARED_DRIVES_GRAND_ROOT:
            return str('DRIVE_SHARED_DRIVES_LABEL');
        case RootType.COMPUTER:
        case RootType.COMPUTERS_GRAND_ROOT:
            return str('DRIVE_COMPUTERS_LABEL');
        case RootType.DRIVE_OFFLINE:
            return str('DRIVE_OFFLINE_COLLECTION_LABEL');
        case RootType.DRIVE_SHARED_WITH_ME:
            return str('DRIVE_SHARED_WITH_ME_COLLECTION_LABEL');
        case RootType.DRIVE_RECENT:
            return str('DRIVE_RECENT_COLLECTION_LABEL');
        case RootType.DRIVE_FAKE_ROOT:
            return str('DRIVE_DIRECTORY_LABEL');
        case RootType.RECENT:
            return str('RECENT_ROOT_LABEL');
        case RootType.CROSTINI:
            return str('LINUX_FILES_ROOT_LABEL');
        case RootType.MY_FILES:
            return str('MY_FILES_ROOT_LABEL');
        case RootType.TRASH:
            return str('TRASH_ROOT_LABEL');
        case RootType.MEDIA_VIEW:
            const mediaViewRootType = getMediaViewRootTypeFromVolumeId(locationInfo.volumeInfo?.volumeId || '');
            switch (mediaViewRootType) {
                case MediaViewRootType.IMAGES:
                    return str('MEDIA_VIEW_IMAGES_ROOT_LABEL');
                case MediaViewRootType.VIDEOS:
                    return str('MEDIA_VIEW_VIDEOS_ROOT_LABEL');
                case MediaViewRootType.AUDIO:
                    return str('MEDIA_VIEW_AUDIO_ROOT_LABEL');
                case MediaViewRootType.DOCUMENTS:
                    return str('MEDIA_VIEW_DOCUMENTS_ROOT_LABEL');
                default:
                    console.error('Unsupported media view root type: ' + mediaViewRootType);
                    return volumeInfoLabel;
            }
        case RootType.ARCHIVE:
        case RootType.REMOVABLE:
        case RootType.MTP:
        case RootType.PROVIDED:
        case RootType.ANDROID_FILES:
        case RootType.DOCUMENTS_PROVIDER:
        case RootType.SMB:
        case RootType.GUEST_OS:
            return volumeInfoLabel;
        default:
            console.error('Unsupported root type: ' + locationInfo.rootType);
            return volumeInfoLabel;
    }
}
/**
 * Returns the localized/i18n name of the entry.
 */
function getEntryLabel(locationInfo, entry) {
    if (locationInfo) {
        if (locationInfo.hasFixedLabel) {
            return getRootTypeLabel(locationInfo);
        }
        if (entry.filesystem && entry.filesystem.root === entry) {
            return getRootTypeLabel(locationInfo);
        }
    }
    // Special case for MyFiles/Downloads, MyFiles/PvmDefault and MyFiles/Camera.
    if (locationInfo && locationInfo.rootType === RootType.DOWNLOADS) {
        if (entry.fullPath === '/Downloads') {
            return str('DOWNLOADS_DIRECTORY_LABEL');
        }
        if (entry.fullPath === '/PvmDefault') {
            return str('PLUGIN_VM_DIRECTORY_LABEL');
        }
        if (entry.fullPath === '/Camera') {
            return str('CAMERA_DIRECTORY_LABEL');
        }
    }
    return entry.name;
}
/**
 * Get the locale based week start from the load time data.
 */
function getLocaleBasedWeekStart() {
    return loadTimeData.valueExists('WEEK_START_FROM') ?
        loadTimeData.getInteger('WEEK_START_FROM') :
        0;
}
/**
 * Converts seconds into a time remaining string.
 */
function secondsToRemainingTimeString(seconds) {
    const locale = getCurrentLocaleOrDefault();
    let minutes = Math.ceil(seconds / 60);
    if (minutes <= 1) {
        // Less than one minute. Display remaining time in seconds.
        const formatter = new Intl.NumberFormat(locale, { style: 'unit', unit: 'second', unitDisplay: 'long' });
        return strf('TIME_REMAINING_ESTIMATE', formatter.format(Math.ceil(seconds)));
    }
    const minuteFormatter = new Intl.NumberFormat(locale, { style: 'unit', unit: 'minute', unitDisplay: 'long' });
    const hours = Math.floor(minutes / 60);
    if (hours === 0) {
        // Less than one hour. Display remaining time in minutes.
        return strf('TIME_REMAINING_ESTIMATE', minuteFormatter.format(minutes));
    }
    minutes -= hours * 60;
    const hourFormatter = new Intl.NumberFormat(locale, { style: 'unit', unit: 'hour', unitDisplay: 'long' });
    if (minutes === 0) {
        // Hours but no minutes.
        return strf('TIME_REMAINING_ESTIMATE', hourFormatter.format(hours));
    }
    // Hours and minutes.
    return strf('TIME_REMAINING_ESTIMATE_2', hourFormatter.format(hours), minuteFormatter.format(minutes));
}
/**
 * Mapping table of file error name to i18n localized error name.
 */
const FileErrorLocalizedName = {
    'InvalidModificationError': 'FILE_ERROR_INVALID_MODIFICATION',
    'InvalidStateError': 'FILE_ERROR_INVALID_STATE',
    'NoModificationAllowedError': 'FILE_ERROR_NO_MODIFICATION_ALLOWED',
    'NotFoundError': 'FILE_ERROR_NOT_FOUND',
    'NotReadableError': 'FILE_ERROR_NOT_READABLE',
    'PathExistsError': 'FILE_ERROR_PATH_EXISTS',
    'QuotaExceededError': 'FILE_ERROR_QUOTA_EXCEEDED',
    'SecurityError': 'FILE_ERROR_SECURITY',
};
/**
 * Returns i18n localized error name for file error |name|.
 */
function getFileErrorString(name) {
    const error = name && name in FileErrorLocalizedName ?
        FileErrorLocalizedName[name] :
        'FILE_ERROR_GENERIC';
    return loadTimeData.getString(error);
}
/**
 * Get the plural string with a specified count.
 * Note: the string id to get must be handled by `PluralStringHandler` in C++
 * side.
 *
 * @param id The translation string resource id.
 * @param count The number count to get the plural.
 */
async function getPluralString(id, count) {
    return PluralStringProxyImpl.getInstance().getPluralString(id, count);
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Exception used to stop ActionsProducer when they're no longer valid.
 *
 * The concurrency model function uses this exception to force the
 * ActionsProducer to stop.
 */
class ConcurrentActionInvalidatedError extends Error {
}
/** Helper to distinguish the Action from a ActionsProducer.  */
function isActionsProducer(value) {
    return (value.next !== undefined &&
        value.throw !== undefined);
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * A class implementing ReactiveController in order to provide an ergonomic
 * way to update Lit elements based on selected data.
 */
class SelectorController {
    constructor(host, value, subscribe) {
        this.host = host;
        this.value = value;
        this.subscribe = subscribe;
        this.host.addController(this);
    }
    hostConnected() {
        this.unsubscribe = this.subscribe((value) => {
            this.value = value;
            this.host.requestUpdate();
        });
    }
    hostDisconnected() {
        this.unsubscribe();
    }
}
/**
 * A node in the selector DAG (Directed Acyclic Graph). Used to efficiently
 * process selectors and eliminate redundant calculations and state updates. A
 * selector node essentially connects parent selectors through a `select()`
 * function that combines all of their parents' emitted values to form a new
 * value.
 *
 * Note: `SelectorNode` implements the `Selector` interface, allowing the store
 * to expose nodes as `Selector`s, hiding complexities related to
 * `SelectorNode`'s implementation.
 */
class SelectorNode {
    /**
     * @param parents Either an array of Selectors or SelectorNodes whose values
     *     should be fed into the `select` function to calculate the selector's
     *     new value.
     * @param select The function that calculates the selector's new value once at
     *     least one its parents emits a new value or, initially, after the
     *     selector node is constructed. The arguments of select() must match the
     *     order and type of what is emitted by the parents. This typing match is
     *     not enforced here because SelectorNodes are only meant to be created by
     *     the Store. Users of the Store should use `combineXSelectors()` to
     * combine selectors.
     * @param name An optional human-readable name used for debugging purposes.
     *     Named selectors will log to the console when DEBUG_STORE is set,
     *     whenever they emit a new value.
     * @param isEqual_ An optional comparison function which will be used
     *     when compare the old value and the new value form the selector. By
     *     default it will use triple equal.
     */
    constructor(parents, select, name, isEqual_ = strictlyEqual) {
        this.select = select;
        this.name = name;
        this.isEqual_ = isEqual_;
        /** Last value emitted by the selector. */
        this.value_ = undefined;
        /** List of selector's current subscribers. */
        this.subscribers_ = [];
        /** List of selector's current parents. */
        this.parents_ = [];
        /**
         * The depth of this node in the SelectorEmitter DAG. Used to ensure Selector
         * nodes are emitted in the correct order.
         *
         * Nodes of depth D+1 are only processed after all nodes of depth D have been
         * processed, starting from D=0.
         *
         * Only source nodes (nodes without parents) have depth=0;
         */
        this.depth = 0;
        /** List of selector's current children. */
        this.children = [];
        this.parents = parents;
    }
    /**
     * Creates a new source node (a node with no parents).
     *
     * The store's default selector should be a source node, but other data
     * sources can be registered as source nodes as well.
     *
     * Slice's default selectors are then connected to the store's source node,
     * and additional selector nodes can then be created from store and slices'
     * default selectors using `combineXSelectors()` (and resulting selectors can
     * be further combined using `combineXSelectors()`).
     */
    static createSourceNode(select, name) {
        return new SelectorNode([], select, name);
    }
    /**
     * Creates a selector node that doesn't have parents or select function. Used
     * by slices to create selectors that are not yet connected to the store but
     * that can be subscribed to before the store is constructed.
     *
     * In other words, disconnected nodes should eventually be connected to the
     * SelectorEmitter DAG and should retain their list of subscribers after doing
     * so.
     *
     * Disconnected nodes are exclusively used internally by slices and are not
     * meant to be used outside of it.
     */
    static createDisconnectedNode(name) {
        return new SelectorNode([], () => undefined, name);
    }
    /**
     * We use a getter for parents to make sure they are always retrieved as
     * SelectorNodes, even though they might be passed in as Selectors in the
     * `combineXSelectors()` functions.
     */
    get parents() {
        return this.parents_;
    }
    set parents(parents) {
        // Disconnect current parents, if any, before replacing them.
        this.disconnect_();
        this.parents_ = parents;
        // Connects this node to its new parents.
        for (const parent of parents) {
            parent.children.push(this);
            this.depth = Math.max(this.depth, parent.depth + 1);
        }
        // Calculate the node's initial value.
        this.emit();
    }
    /**
     * Disconnects itself from the DAG by deleting its connections with its
     * parents.
     */
    disconnect_() {
        // Disconnect node from its parents.
        this.parents.forEach(p => p.disconnectChild_(this));
        this.parents_ = [];
    }
    /** Disconnects the node from one of its children. */
    disconnectChild_(node) {
        this.children.splice(this.children.indexOf(node), 1);
    }
    /**
     * Sets a new value, if such new value is different from the current. If
     * it's different, returns true and notify subscribers. Else, returns false.
     */
    emit() {
        const parentValues = this.parents.map(p => p.get());
        const newValue = this.select(...parentValues);
        if (this.isEqual_(this.value_, newValue)) {
            return false;
        }
        if (isDebugStoreEnabled() && this.name) {
            console.log(`Selector '${this.name}' emitted a new value:`);
            console.log(newValue);
        }
        this.value_ = newValue;
        for (const subscriber of this.subscribers_) {
            try {
                subscriber(newValue);
            }
            catch (e) {
                console.error(e);
            }
        }
        return true;
    }
    get() {
        return this.value_;
    }
    subscribe(cb) {
        this.subscribers_.push(cb);
        return () => this.subscribers_.splice(this.subscribers_.indexOf(cb), 1);
    }
    createController(host) {
        return new SelectorController(host, this.get(), this.subscribe.bind(this));
    }
    delete() {
        if (this.children.length > 0) {
            throw new Error('Attempting to delete node that still has children.');
        }
        this.disconnect_();
        this.subscribers_ = [];
    }
}
/**
 * A DAG (Directed Acyclic Graph) representation of chains of selectors where
 * one selector only emits if at least one of their parents has emitted, while
 * also guaranteeing that, when multiple parents of a given node emit, their
 * child only emits a single time.
 */
class SelectorEmitter {
    constructor() {
        /** Source nodes. I.e., nodes with no parents. */
        this.sourceNodes_ = [];
    }
    /** Connect source node to the DAG. */
    addSource(node) {
        this.sourceNodes_.push(node);
    }
    /**
     * Propagates changes from sourceNodes to the rest of the DAG.
     *
     * Nodes of depth D+1 are only processed after all nodes of depth D have been
     * processed, starting from D=0.
     *
     * This method ensures selectors are evaluated efficiently by:
     * - Only evaluating nodes if at least one of their parents has emitted a new
     * value;
     * - Ensuring each node only emits once per call to `processChange()` unlike a
     * naive implementation that would emit every time a parent emitted a new
     * value (meaning the node would emit multiple times per iteration if it had
     * multiple emitting parents).
     */
    processChange() {
        const toExplore = [...this.sourceNodes_];
        while (toExplore.length > 0) {
            const node = toExplore.pop();
            // Only traverse children if a new value is emitted. Children with
            // multiple parents might still be enqueued by the remaining parents.
            if (node.emit()) {
                toExplore.push(...node.children);
                // TODO(300209290): use heap instead.
                // Ensure nodes are explored in ascending order of depth.
                toExplore.sort((a, b) => b.depth - a.depth);
            }
        }
    }
}
// Comparison functions can be passed to selectors when initialized.
/** strictlyEqual use triple equal to compare values. */
function strictlyEqual(oldValue, newValue) {
    return oldValue === newValue;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Slices represent a part of the state that is nested directly under the root
 * state, aggregating its reducers and selectors.
 * @template State The shape of the store's root state.
 * @template LocalState The shape of this slice.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
class Slice {
    /**
     * @param name The prefix to be used when registering action types with
     *     this slice.
     */
    constructor(name) {
        this.name = name;
        /**
         * Reducers registered with this slice.
         * Only one reducer per slice can be associated with a given action type.
         */
        this.reducers = new Map();
        /**
         * The slice's default selector - a selector that is created automatically
         * when the slice is constructed. It selects the slice's part of the state.
         */
        this.selector = SelectorNode.createDisconnectedNode(this.name);
    }
    /**
     * Returns the full action name given by prepending the slice's name to the
     * given action type (the full name is formatted as "[SLICE_NAME] TYPE").
     *
     * If the given action type is already the full name, it's returned without
     * any changes.
     *
     * Note: the only valid scenario where the given type is the full name is when
     * registering a reducer for an action primarily registered in another slice.
     */
    prependSliceName_(type) {
        const isFullName = type[0] === '[';
        return isFullName ? type : `[${this.name}] ${type}`;
    }
    /**
     * Returns an action factory for the added reducer.
     * @param localType The name of the action handled by this reducer. It should
     *     be either a new action, (e.g., 'do-thing') in which case it will get
     *     prefixed with the slice's name (e.g., '[sliceName] do-thing'), or an
     *     existing action from another slice (e.g., `someActionFactory.type`).
     * @returns A callable action factory that also holds the type and payload
     *     typing of the actions it produces. Those can be used to register
     *     reducers in other slices with the same action type.
     */
    addReducer(localType, reducer) {
        const type = this.prependSliceName_(localType);
        if (this.reducers.get(type)) {
            throw new Error('Attempting to register multiple reducers ' +
                `within slice for the same action type: ${type}`);
        }
        this.reducers.set(type, reducer);
        const actionFactory = (payload) => ({ type, payload });
        // Include action type so different slices can register reducers for the
        // same action type.
        actionFactory.type = type;
        return actionFactory;
    }
}
/**
 * A generic datastore for the state of a page, where the state is publicly
 * readable but can only be modified by dispatching an Action.
 *
 * The Store should be extended by specifying `StateType`, the app state type
 * associated with the store.
 */
class BaseStore {
    constructor(state, slices) {
        /**
         * A map of action names to reducers handled by the store.
         */
        this.reducers_ = new Map();
        /**
         * Whether the Store has been initialized. See init() method to initialize.
         */
        this.initialized_ = false;
        /**
         * Batch mode groups multiple Action mutations and only notify the observes
         * at the end of the batch. See beginBatchUpdate() and endBatchUpdate()
         * methods.
         */
        this.batchMode_ = false;
        /**
         * The DAG representation of selectors held by the store. It ensures
         * selectors are updated in an efficient manner. For more information,
         * please see the `SelectorEmitter` class documentation.
         */
        this.selectorEmitter_ = new SelectorEmitter();
        this.state_ = state;
        this.queuedActions_ = [];
        this.observers_ = [];
        this.initialized_ = false;
        this.batchMode_ = false;
        const sliceNames = new Set(slices.map(slice => slice.name));
        if (sliceNames.size !== slices.length) {
            throw new Error('One or more given slices have the same name. ' +
                'Please ensure slices are uniquely named: ' +
                [...sliceNames].join(', '));
        }
        // Connect the default root selector to the Selector Emitter.
        const rootSelector = SelectorNode.createSourceNode(() => this.state_, 'root');
        this.selectorEmitter_.addSource(rootSelector);
        this.selector = rootSelector;
        for (const slice of slices) {
            // Connect the slice's default selector to the store's.
            slice.selector.select = (state) => state[slice.name];
            slice.selector.parents = [rootSelector];
            // Populate reducers with slice.
            for (const [type, reducer] of slice.reducers.entries()) {
                const reducerList = this.reducers_.get(type);
                if (!reducerList) {
                    this.reducers_.set(type, [reducer]);
                }
                else {
                    reducerList.push(reducer);
                }
            }
        }
    }
    /**
     * Marks the Store as initialized.
     * While the Store is not initialized, no action is processed and no observes
     * are notified.
     *
     * It should be called by the app's initialization code.
     */
    init(initialState) {
        this.state_ = initialState;
        this.queuedActions_.forEach((action) => {
            if (isActionsProducer(action)) {
                this.consumeProducedActions_(action);
            }
            else {
                this.dispatchInternal_(action);
            }
        });
        this.initialized_ = true;
        this.selectorEmitter_.processChange();
        this.notifyObservers_(this.state_);
    }
    isInitialized() {
        return this.initialized_;
    }
    /**
     * Subscribe to Store changes/updates.
     * @param observer Callback called whenever the Store is updated.
     * @returns callback to unsubscribe the observer.
     */
    subscribe(observer) {
        this.observers_.push(observer);
        return this.unsubscribe.bind(this, observer);
    }
    /**
     * Removes the observer which will stop receiving Store updates.
     * @param observer The instance that was observing the store.
     */
    unsubscribe(observer) {
        // Create new copy of `observers_` to ensure elements are not removed
        // from the array in the middle of the loop in `notifyObservers_()`.
        this.observers_ = this.observers_.filter(o => o !== observer);
    }
    /**
     * Begin a batch update to store data, which will disable updates to the
     * observers until `endBatchUpdate()` is called. This is useful when a single
     * UI operation is likely to cause many sequential model updates.
     */
    beginBatchUpdate() {
        this.batchMode_ = true;
    }
    /**
     * End a batch update to the store data, notifying the observers of any
     * changes which occurred while batch mode was enabled.
     */
    endBatchUpdate() {
        this.batchMode_ = false;
        this.notifyObservers_(this.state_);
    }
    /** @returns the current state of the store.  */
    getState() {
        return this.state_;
    }
    /**
     * Dispatches an Action to the Store.
     *
     * For synchronous actions it sends the action to the reducers, which updates
     * the Store state, then the Store notifies all subscribers.
     * If the Store isn't initialized, the action is queued and dispatched to
     * reducers during the initialization.
     */
    dispatch(action) {
        if (!this.initialized_) {
            this.queuedActions_.push(action);
            return;
        }
        if (isActionsProducer(action)) {
            this.consumeProducedActions_(action);
        }
        else {
            this.dispatchInternal_(action);
        }
    }
    /**
     * Enable/Disable the debug mode for the store. More logs will be displayed in
     * the console with debug mode on.
     */
    setDebug(isDebug) {
        if (isDebug) {
            localStorage.setItem('DEBUG_STORE', '1');
        }
        else {
            localStorage.removeItem('DEBUG_STORE');
        }
    }
    /** Synchronously call apply the `action` by calling the reducer.  */
    dispatchInternal_(action) {
        this.reduce(action);
    }
    /**
     * Consumes the produced actions from the actions producer.
     * It dispatches each generated action.
     */
    async consumeProducedActions_(actionsProducer) {
        while (true) {
            try {
                const { done, value } = await actionsProducer.next();
                // Accept undefined to accept empty `yield;` or `return;`.
                // The empty `yield` is useful to allow the generator to be stopped at
                // any arbitrary point.
                if (value !== undefined) {
                    this.dispatch(value);
                }
                if (done) {
                    return;
                }
            }
            catch (error) {
                if (isInvalidationError(error)) {
                    // This error is expected when the actionsProducer has been
                    // invalidated.
                    return;
                }
                console.warn('Failure executing actions producer', error);
            }
        }
    }
    /** Apply the `action` to the Store by calling the reducer.  */
    reduce(action) {
        const isDebugStore = isDebugStoreEnabled();
        if (isDebugStore) {
            console.groupCollapsed(`Action: ${action.type}`);
            console.dir(action.payload);
        }
        const reducers = this.reducers_.get(action.type);
        if (!reducers || reducers.length === 0) {
            console.error(`No registered reducers for action: ${action.type}`);
            return;
        }
        this.state_ = reducers.reduce((state, reducer) => reducer(state, action.payload), this.state_);
        // Batch notifications until after all initialization queuedActions are
        // resolved.
        if (this.initialized_ && !this.batchMode_) {
            this.notifyObservers_(this.state_);
        }
        if (this.selector.get() !== this.state_) {
            this.selectorEmitter_.processChange();
        }
        if (isDebugStore) {
            console.groupEnd();
        }
    }
    /** Notify observers with the current state. */
    notifyObservers_(state) {
        this.observers_.forEach(o => {
            try {
                o.onStateChanged(state);
            }
            catch (error) {
                // Subscribers shouldn't fail, here we only log and continue to all
                // other subscribers.
                console.error(error);
            }
        });
    }
}
/** Returns true when the error is a ConcurrentActionInvalidatedError. */
function isInvalidationError(error) {
    if (!error) {
        return false;
    }
    if (error instanceof ConcurrentActionInvalidatedError) {
        return true;
    }
    // Rollup sometimes duplicate the definition of error class so the
    // `instanceof` above fail in this condition.
    if (error.constructor?.name === 'ConcurrentActionInvalidatedError') {
        return true;
    }
    return false;
}
/**
 * Check if the store is in debug mode or not. When it's set, action data will
 * be logged in the console for debugging purpose.
 *
 * Run `fileManager.store_.setDebug(true)` in the console to enable it.
 */
function isDebugStoreEnabled() {
    return localStorage.getItem('DEBUG_STORE') === '1';
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * List of dialog types.
 *
 * Keep this in sync with FileManagerDialog::GetDialogTypeAsString, except
 * FULL_PAGE which is specific to this code.
 */
var DialogType;
(function (DialogType) {
    DialogType["SELECT_FOLDER"] = "folder";
    DialogType["SELECT_UPLOAD_FOLDER"] = "upload-folder";
    DialogType["SELECT_SAVEAS_FILE"] = "saveas-file";
    DialogType["SELECT_OPEN_FILE"] = "open-file";
    DialogType["SELECT_OPEN_MULTI_FILE"] = "open-multi-file";
    DialogType["FULL_PAGE"] = "full-page";
})(DialogType || (DialogType = {}));
var EntryType;
(function (EntryType) {
    // Entries from the FileSystem API.
    EntryType["FS_API"] = "FS_API";
    // The root of a volume is an Entry from the FileSystem API, but it aggregates
    // more data from the volume.
    EntryType["VOLUME_ROOT"] = "VOLUME_ROOT";
    // A directory-like entry to aggregate other entries.
    EntryType["ENTRY_LIST"] = "ENTRY_LIST";
    // Placeholder that is replaced for another entry, for Crostini/GuestOS.
    EntryType["PLACEHOLDER"] = "PLACEHOLDER";
    // Root for the Trash.
    EntryType["TRASH"] = "TRASH";
    // Root for the Recent.
    EntryType["RECENT"] = "RECENT";
})(EntryType || (EntryType = {}));
/**
 * The status of a property, for properties that have their state updated via
 * asynchronous steps.
 */
var PropStatus;
(function (PropStatus) {
    PropStatus["STARTED"] = "STARTED";
    // Finished:
    PropStatus["SUCCESS"] = "SUCCESS";
    PropStatus["ERROR"] = "ERROR";
})(PropStatus || (PropStatus = {}));
/**
 * Task type is the source of the task, or what type of the app is this type
 * from. It has to match the `taskType` returned in the FileManagerPrivate.
 *
 * For more details see //chrome/browser/ash/file_manager/file_tasks.h
 */
var FileTaskType;
(function (FileTaskType) {
    FileTaskType["UNKNOWN"] = "";
    // The task is from a chrome app/extension that has File Browser Handler in
    // its manifest.
    FileTaskType["FILE"] = "file";
    // The task is from a chrome app/extension that has File Handler in its
    // manifest.
    FileTaskType["APP"] = "app";
    // The task is from an Android app.
    FileTaskType["ARC"] = "arc";
    // The task is from a Crostini app.
    FileTaskType["CROSTINI"] = "crostini";
    // The task is from a Parallels app.
    FileTaskType["PLUGIN_VM"] = "pluginvm";
    // The task is from a Web app/PWA/SWA.
    FileTaskType["WEB"] = "web";
})(FileTaskType || (FileTaskType = {}));
/**
 * Enumeration of all supported search locations. If new location is added,
 * please update this enum.
 */
var SearchLocation;
(function (SearchLocation) {
    SearchLocation["EVERYWHERE"] = "everywhere";
    SearchLocation["ROOT_FOLDER"] = "root_folder";
    SearchLocation["THIS_FOLDER"] = "this_folder";
})(SearchLocation || (SearchLocation = {}));
/**
 * Enumeration of all supported how-recent time spans.
 */
var SearchRecency;
(function (SearchRecency) {
    SearchRecency["ANYTIME"] = "anytime";
    SearchRecency["TODAY"] = "today";
    SearchRecency["YESTERDAY"] = "yesterday";
    SearchRecency["LAST_WEEK"] = "last_week";
    SearchRecency["LAST_MONTH"] = "last_month";
    SearchRecency["LAST_YEAR"] = "last_year";
})(SearchRecency || (SearchRecency = {}));
/**
 * Used to group volumes in the navigation tree.
 * Sections:
 *      - TOP: Recents, Shortcuts.
 *      - MY_FILES: My Files (which includes Downloads, Crostini and Arc++ as
 *                  its children).
 *      - TRASH: trash.
 *      - GOOGLE_DRIVE: Just Google Drive.
 *      - ODFS: Just ODFS.
 *      - CLOUD: All other cloud: SMBs, FSPs and Documents Providers.
 *      - ANDROID_APPS: ANDROID picker apps.
 *      - REMOVABLE: Archives, MTPs, Media Views and Removables.
 */
var NavigationSection;
(function (NavigationSection) {
    NavigationSection["TOP"] = "top";
    NavigationSection["MY_FILES"] = "my_files";
    NavigationSection["GOOGLE_DRIVE"] = "google_drive";
    NavigationSection["ODFS"] = "odfs";
    NavigationSection["CLOUD"] = "cloud";
    NavigationSection["TRASH"] = "trash";
    NavigationSection["ANDROID_APPS"] = "android_apps";
    NavigationSection["REMOVABLE"] = "removable";
})(NavigationSection || (NavigationSection = {}));
var NavigationType;
(function (NavigationType) {
    NavigationType["SHORTCUT"] = "shortcut";
    NavigationType["VOLUME"] = "volume";
    NavigationType["RECENT"] = "recent";
    NavigationType["CROSTINI"] = "crostini";
    NavigationType["GUEST_OS"] = "guest_os";
    NavigationType["ENTRY_LIST"] = "entry_list";
    NavigationType["DRIVE"] = "drive";
    NavigationType["ANDROID_APPS"] = "android_apps";
    NavigationType["TRASH"] = "trash";
    // Materialized view is used for Recent and in the future for Search.
    NavigationType["MATERIALIZED_VIEW"] = "materialized_view";
})(NavigationType || (NavigationType = {}));

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* This file is generated from:
 *  ../../../../../../../home/chrome-bot/chrome_root/src/ui/file_manager/base/gn/file_types.json5
 */
/**
 * @typedef {{
 *   translationKey: !string,
 *   type: !string,
 *   icon: (string|undefined),
 *   subtype: !string,
 *   extensions: (!Array<!string>|undefined),
 *   mime: (string|undefined),
 *   encrypted: (boolean|undefined),
 *   originalMimeType: (string|undefined)
 * }}
 */
// @ts-ignore:  error TS7005: Variable 'FileExtensionType' implicitly has an 'any' type.
/**
 * Maps a file extension to a FileExtensionType.
 * Note: If an extension can match multiple types, in this map contains
 * only the first occurrence.
 *
 * @const Map<string, !FileExtensionType>
 */
const EXTENSION_TO_TYPE = new Map([
    [".jpeg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".jpg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".jfif", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".pjpeg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".pjp", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".bmp", {
            "extensions": [
                ".bmp"
            ],
            "mime": "image/bmp",
            "subtype": "BMP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".gif", {
            "extensions": [
                ".gif"
            ],
            "mime": "image/gif",
            "subtype": "GIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".ico", {
            "extensions": [
                ".ico"
            ],
            "mime": "image/x-icon",
            "subtype": "ICO",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".png", {
            "extensions": [
                ".png"
            ],
            "mime": "image/png",
            "subtype": "PNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".webp", {
            "extensions": [
                ".webp"
            ],
            "mime": "image/webp",
            "subtype": "WebP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".tif", {
            "extensions": [
                ".tif",
                ".tiff"
            ],
            "mime": "image/tiff",
            "subtype": "TIFF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".tiff", {
            "extensions": [
                ".tif",
                ".tiff"
            ],
            "mime": "image/tiff",
            "subtype": "TIFF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".svg", {
            "extensions": [
                ".svg",
                ".svgz"
            ],
            "mime": "image/svg+xml",
            "subtype": "SVG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".svgz", {
            "extensions": [
                ".svg",
                ".svgz"
            ],
            "mime": "image/svg+xml",
            "subtype": "SVG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".avif", {
            "extensions": [
                ".avif"
            ],
            "mime": "image/avif",
            "subtype": "AVIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".jxl", {
            "extensions": [
                ".jxl"
            ],
            "mime": "image/jxl",
            "subtype": "JXL",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".xbm", {
            "extensions": [
                ".xbm"
            ],
            "mime": "image/x-xbitmap",
            "subtype": "XBM",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    [".arw", {
            "extensions": [
                ".arw"
            ],
            "icon": "image",
            "mime": "image/x-sony-arw",
            "subtype": "ARW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".cr2", {
            "extensions": [
                ".cr2"
            ],
            "icon": "image",
            "mime": "image/x-canon-cr2",
            "subtype": "CR2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".dng", {
            "extensions": [
                ".dng"
            ],
            "icon": "image",
            "mime": "image/x-adobe-dng",
            "subtype": "DNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".nef", {
            "extensions": [
                ".nef"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nef",
            "subtype": "NEF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".nrw", {
            "extensions": [
                ".nrw"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nrw",
            "subtype": "NRW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".orf", {
            "extensions": [
                ".orf"
            ],
            "icon": "image",
            "mime": "image/x-olympus-orf",
            "subtype": "ORF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".raf", {
            "extensions": [
                ".raf"
            ],
            "icon": "image",
            "mime": "image/x-fuji-raf",
            "subtype": "RAF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".rw2", {
            "extensions": [
                ".rw2"
            ],
            "icon": "image",
            "mime": "image/x-panasonic-rw2",
            "subtype": "RW2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    [".3gp", {
            "extensions": [
                ".3gp",
                ".3gpp"
            ],
            "mime": "video/3gpp",
            "subtype": "3GP",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".3gpp", {
            "extensions": [
                ".3gp",
                ".3gpp"
            ],
            "mime": "video/3gpp",
            "subtype": "3GP",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".avi", {
            "extensions": [
                ".avi"
            ],
            "mime": "video/x-msvideo",
            "subtype": "AVI",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mov", {
            "extensions": [
                ".mov"
            ],
            "mime": "video/quicktime",
            "subtype": "QuickTime",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mkv", {
            "extensions": [
                ".mkv"
            ],
            "mime": "video/x-matroska",
            "subtype": "MKV",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mp4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".m4v", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpg4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpeg4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpg", {
            "extensions": [
                ".mpg",
                ".mpeg"
            ],
            "mime": "video/mpeg",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".mpeg", {
            "extensions": [
                ".mpg",
                ".mpeg"
            ],
            "mime": "video/mpeg",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".ogm", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".ogv", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".ogx", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".webm", {
            "extensions": [
                ".webm"
            ],
            "mime": "video/webm",
            "subtype": "WebM",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    [".amr", {
            "extensions": [
                ".amr"
            ],
            "mime": "audio/amr",
            "subtype": "AMR",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".flac", {
            "extensions": [
                ".flac"
            ],
            "mime": "audio/flac",
            "subtype": "FLAC",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".mp3", {
            "extensions": [
                ".mp3"
            ],
            "mime": "audio/mpeg",
            "subtype": "MP3",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".m4a", {
            "extensions": [
                ".m4a"
            ],
            "mime": "audio/mp4a-latm",
            "subtype": "MPEG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".oga", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".ogg", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".opus", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".wav", {
            "extensions": [
                ".wav"
            ],
            "mime": "audio/x-wav",
            "subtype": "WAV",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".weba", {
            "extensions": [
                ".weba"
            ],
            "mime": "audio/webm",
            "subtype": "WEBA",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    [".txt", {
            "extensions": [
                ".txt",
                ".text"
            ],
            "mime": "text/plain",
            "subtype": "TXT",
            "translationKey": "PLAIN_TEXT_FILE_TYPE",
            "type": "text"
        }],
    [".text", {
            "extensions": [
                ".txt",
                ".text"
            ],
            "mime": "text/plain",
            "subtype": "TXT",
            "translationKey": "PLAIN_TEXT_FILE_TYPE",
            "type": "text"
        }],
    [".csv", {
            "extensions": [
                ".csv"
            ],
            "mime": "text/csv",
            "subtype": "CSV",
            "translationKey": "CSV_TEXT_FILE_TYPE",
            "type": "text"
        }],
    [".zip", {
            "extensions": [
                ".zip"
            ],
            "mime": "application/zip",
            "subtype": "ZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".rar", {
            "extensions": [
                ".rar"
            ],
            "mime": "application/x-rar-compressed",
            "subtype": "RAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".iso", {
            "extensions": [
                ".iso"
            ],
            "mime": "application/x-iso9660-image",
            "subtype": "ISO",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".7z", {
            "extensions": [
                ".7z"
            ],
            "mime": "application/x-7z-compressed",
            "subtype": "7-Zip",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".crx", {
            "extensions": [
                ".crx"
            ],
            "mime": "application/x-chrome-extension",
            "subtype": "CRX",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tar", {
            "extensions": [
                ".tar"
            ],
            "mime": "application/x-tar",
            "subtype": "TAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".bz2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".bz", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tbz", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tbz2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tz2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tb2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".gz", {
            "extensions": [
                ".gz",
                ".tgz"
            ],
            "mime": "application/x-gzip",
            "subtype": "GZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tgz", {
            "extensions": [
                ".gz",
                ".tgz"
            ],
            "mime": "application/x-gzip",
            "subtype": "GZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".lz", {
            "extensions": [
                ".lz"
            ],
            "mime": "application/x-lzip",
            "subtype": "LZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".lzo", {
            "extensions": [
                ".lzo"
            ],
            "mime": "application/x-lzop",
            "subtype": "LZOP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".lzma", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tlzma", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tlz", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".xz", {
            "extensions": [
                ".xz",
                ".txz"
            ],
            "mime": "application/x-xz",
            "subtype": "XZ",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".txz", {
            "extensions": [
                ".xz",
                ".txz"
            ],
            "mime": "application/x-xz",
            "subtype": "XZ",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".z", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".taz", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tz", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".zst", {
            "extensions": [
                ".zst",
                ".tzst"
            ],
            "mime": "application/zstd",
            "subtype": "Zstandard",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".tzst", {
            "extensions": [
                ".zst",
                ".tzst"
            ],
            "mime": "application/zstd",
            "subtype": "Zstandard",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    [".gdoc", {
            "extensions": [
                ".gdoc"
            ],
            "icon": "gdoc",
            "mime": "application/vnd.google-apps.document",
            "subtype": "doc",
            "translationKey": "GDOC_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gsheet", {
            "extensions": [
                ".gsheet"
            ],
            "icon": "gsheet",
            "mime": "application/vnd.google-apps.spreadsheet",
            "subtype": "sheet",
            "translationKey": "GSHEET_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gslides", {
            "extensions": [
                ".gslides"
            ],
            "icon": "gslides",
            "mime": "application/vnd.google-apps.presentation",
            "subtype": "slides",
            "translationKey": "GSLIDES_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gdraw", {
            "extensions": [
                ".gdraw"
            ],
            "icon": "gdraw",
            "mime": "application/vnd.google-apps.drawing",
            "subtype": "draw",
            "translationKey": "GDRAW_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gtable", {
            "extensions": [
                ".gtable"
            ],
            "icon": "gtable",
            "mime": "application/vnd.google-apps.fusiontable",
            "subtype": "table",
            "translationKey": "GTABLE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".glink", {
            "extensions": [
                ".glink"
            ],
            "icon": "glink",
            "mime": "application/vnd.google-apps.shortcut",
            "subtype": "glink",
            "translationKey": "GLINK_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gform", {
            "extensions": [
                ".gform"
            ],
            "icon": "gform",
            "mime": "application/vnd.google-apps.form",
            "subtype": "form",
            "translationKey": "GFORM_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gmap", {
            "extensions": [
                ".gmap"
            ],
            "icon": "gmap",
            "mime": "application/vnd.google-apps.map",
            "subtype": "map",
            "translationKey": "GMAP_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gsite", {
            "extensions": [
                ".gsite"
            ],
            "icon": "gsite",
            "mime": "application/vnd.google-apps.site",
            "subtype": "site",
            "translationKey": "GSITE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".gmaillayout", {
            "extensions": [
                ".gmaillayout"
            ],
            "icon": "gmaillayout",
            "mime": "application/vnd.google-apps.mail-layout",
            "subtype": "emaillayouts",
            "translationKey": "EMAIL_LAYOUTS_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    [".pdf", {
            "extensions": [
                ".pdf"
            ],
            "icon": "pdf",
            "mime": "application/pdf",
            "subtype": "PDF",
            "translationKey": "PDF_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".htm", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".html", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".mht", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".mhtml", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".shtml", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".xht", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".xhtml", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".doc", {
            "extensions": [
                ".doc"
            ],
            "icon": "word",
            "mime": "application/msword",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".docx", {
            "extensions": [
                ".docx"
            ],
            "icon": "word",
            "mime": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    [".ppt", {
            "extensions": [
                ".ppt"
            ],
            "icon": "ppt",
            "mime": "application/vnd.ms-powerpoint",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    [".pptx", {
            "extensions": [
                ".pptx"
            ],
            "icon": "ppt",
            "mime": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    [".xls", {
            "extensions": [
                ".xls"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    [".xlsx", {
            "extensions": [
                ".xlsx"
            ],
            "icon": "excel",
            "mime": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    [".xlsm", {
            "extensions": [
                ".xlsm"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel.sheet.macroEnabled.12",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    [".tini", {
            "extensions": [
                ".tini"
            ],
            "icon": "tini",
            "subtype": "TGZ",
            "translationKey": "TINI_FILE_TYPE",
            "type": "archive"
        }],
]);
/**
 * Maps a MIME type to a FileExtensionType.
 * Note: If a MIME type can match multiple types, in this map contains
 * only the first occurrence.
 *
 * @const Map<string, !FileExtensionType>
 */
const MIME_TO_TYPE = new Map([
    ["image/jpeg", {
            "extensions": [
                ".jpeg",
                ".jpg",
                ".jfif",
                ".pjpeg",
                ".pjp"
            ],
            "mime": "image/jpeg",
            "subtype": "JPEG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/bmp", {
            "extensions": [
                ".bmp"
            ],
            "mime": "image/bmp",
            "subtype": "BMP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/gif", {
            "extensions": [
                ".gif"
            ],
            "mime": "image/gif",
            "subtype": "GIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/x-icon", {
            "extensions": [
                ".ico"
            ],
            "mime": "image/x-icon",
            "subtype": "ICO",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/png", {
            "extensions": [
                ".png"
            ],
            "mime": "image/png",
            "subtype": "PNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/webp", {
            "extensions": [
                ".webp"
            ],
            "mime": "image/webp",
            "subtype": "WebP",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/tiff", {
            "extensions": [
                ".tif",
                ".tiff"
            ],
            "mime": "image/tiff",
            "subtype": "TIFF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/svg+xml", {
            "extensions": [
                ".svg",
                ".svgz"
            ],
            "mime": "image/svg+xml",
            "subtype": "SVG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/avif", {
            "extensions": [
                ".avif"
            ],
            "mime": "image/avif",
            "subtype": "AVIF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/jxl", {
            "extensions": [
                ".jxl"
            ],
            "mime": "image/jxl",
            "subtype": "JXL",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/x-xbitmap", {
            "extensions": [
                ".xbm"
            ],
            "mime": "image/x-xbitmap",
            "subtype": "XBM",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "image"
        }],
    ["image/x-sony-arw", {
            "extensions": [
                ".arw"
            ],
            "icon": "image",
            "mime": "image/x-sony-arw",
            "subtype": "ARW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-canon-cr2", {
            "extensions": [
                ".cr2"
            ],
            "icon": "image",
            "mime": "image/x-canon-cr2",
            "subtype": "CR2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-adobe-dng", {
            "extensions": [
                ".dng"
            ],
            "icon": "image",
            "mime": "image/x-adobe-dng",
            "subtype": "DNG",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-nikon-nef", {
            "extensions": [
                ".nef"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nef",
            "subtype": "NEF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-nikon-nrw", {
            "extensions": [
                ".nrw"
            ],
            "icon": "image",
            "mime": "image/x-nikon-nrw",
            "subtype": "NRW",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-olympus-orf", {
            "extensions": [
                ".orf"
            ],
            "icon": "image",
            "mime": "image/x-olympus-orf",
            "subtype": "ORF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-fuji-raf", {
            "extensions": [
                ".raf"
            ],
            "icon": "image",
            "mime": "image/x-fuji-raf",
            "subtype": "RAF",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["image/x-panasonic-rw2", {
            "extensions": [
                ".rw2"
            ],
            "icon": "image",
            "mime": "image/x-panasonic-rw2",
            "subtype": "RW2",
            "translationKey": "IMAGE_FILE_TYPE",
            "type": "raw"
        }],
    ["video/3gpp", {
            "extensions": [
                ".3gp",
                ".3gpp"
            ],
            "mime": "video/3gpp",
            "subtype": "3GP",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/x-msvideo", {
            "extensions": [
                ".avi"
            ],
            "mime": "video/x-msvideo",
            "subtype": "AVI",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/quicktime", {
            "extensions": [
                ".mov"
            ],
            "mime": "video/quicktime",
            "subtype": "QuickTime",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/x-matroska", {
            "extensions": [
                ".mkv"
            ],
            "mime": "video/x-matroska",
            "subtype": "MKV",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/mp4", {
            "extensions": [
                ".mp4",
                ".m4v",
                ".mpg4",
                ".mpeg4"
            ],
            "mime": "video/mp4",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/mpeg", {
            "extensions": [
                ".mpg",
                ".mpeg"
            ],
            "mime": "video/mpeg",
            "subtype": "MPEG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/ogg", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "video/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["application/ogg", {
            "extensions": [
                ".ogm",
                ".ogv",
                ".ogx"
            ],
            "mime": "application/ogg",
            "subtype": "OGG",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["video/webm", {
            "extensions": [
                ".webm"
            ],
            "mime": "video/webm",
            "subtype": "WebM",
            "translationKey": "VIDEO_FILE_TYPE",
            "type": "video"
        }],
    ["audio/amr", {
            "extensions": [
                ".amr"
            ],
            "mime": "audio/amr",
            "subtype": "AMR",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/flac", {
            "extensions": [
                ".flac"
            ],
            "mime": "audio/flac",
            "subtype": "FLAC",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/mpeg", {
            "extensions": [
                ".mp3"
            ],
            "mime": "audio/mpeg",
            "subtype": "MP3",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/mp4a-latm", {
            "extensions": [
                ".m4a"
            ],
            "mime": "audio/mp4a-latm",
            "subtype": "MPEG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/ogg", {
            "extensions": [
                ".oga",
                ".ogg",
                ".opus"
            ],
            "mime": "audio/ogg",
            "subtype": "OGG",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/x-wav", {
            "extensions": [
                ".wav"
            ],
            "mime": "audio/x-wav",
            "subtype": "WAV",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["audio/webm", {
            "extensions": [
                ".weba"
            ],
            "mime": "audio/webm",
            "subtype": "WEBA",
            "translationKey": "AUDIO_FILE_TYPE",
            "type": "audio"
        }],
    ["text/plain", {
            "extensions": [
                ".txt",
                ".text"
            ],
            "mime": "text/plain",
            "subtype": "TXT",
            "translationKey": "PLAIN_TEXT_FILE_TYPE",
            "type": "text"
        }],
    ["text/csv", {
            "extensions": [
                ".csv"
            ],
            "mime": "text/csv",
            "subtype": "CSV",
            "translationKey": "CSV_TEXT_FILE_TYPE",
            "type": "text"
        }],
    ["application/zip", {
            "extensions": [
                ".zip"
            ],
            "mime": "application/zip",
            "subtype": "ZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-rar-compressed", {
            "extensions": [
                ".rar"
            ],
            "mime": "application/x-rar-compressed",
            "subtype": "RAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-iso9660-image", {
            "extensions": [
                ".iso"
            ],
            "mime": "application/x-iso9660-image",
            "subtype": "ISO",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-7z-compressed", {
            "extensions": [
                ".7z"
            ],
            "mime": "application/x-7z-compressed",
            "subtype": "7-Zip",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-chrome-extension", {
            "extensions": [
                ".crx"
            ],
            "mime": "application/x-chrome-extension",
            "subtype": "CRX",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-tar", {
            "extensions": [
                ".tar"
            ],
            "mime": "application/x-tar",
            "subtype": "TAR",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-bzip2", {
            "extensions": [
                ".bz2",
                ".bz",
                ".tbz",
                ".tbz2",
                ".tz2",
                ".tb2"
            ],
            "mime": "application/x-bzip2",
            "subtype": "BZIP2",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-gzip", {
            "extensions": [
                ".gz",
                ".tgz"
            ],
            "mime": "application/x-gzip",
            "subtype": "GZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-lzip", {
            "extensions": [
                ".lz"
            ],
            "mime": "application/x-lzip",
            "subtype": "LZIP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-lzop", {
            "extensions": [
                ".lzo"
            ],
            "mime": "application/x-lzop",
            "subtype": "LZOP",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-lzma", {
            "extensions": [
                ".lzma",
                ".tlzma",
                ".tlz"
            ],
            "mime": "application/x-lzma",
            "subtype": "LZMA",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-xz", {
            "extensions": [
                ".xz",
                ".txz"
            ],
            "mime": "application/x-xz",
            "subtype": "XZ",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/x-compress", {
            "extensions": [
                ".z",
                ".taz",
                ".tz"
            ],
            "mime": "application/x-compress",
            "subtype": "Z",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/zstd", {
            "extensions": [
                ".zst",
                ".tzst"
            ],
            "mime": "application/zstd",
            "subtype": "Zstandard",
            "translationKey": "ARCHIVE_FILE_TYPE",
            "type": "archive"
        }],
    ["application/vnd.google-apps.document", {
            "extensions": [
                ".gdoc"
            ],
            "icon": "gdoc",
            "mime": "application/vnd.google-apps.document",
            "subtype": "doc",
            "translationKey": "GDOC_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.spreadsheet", {
            "extensions": [
                ".gsheet"
            ],
            "icon": "gsheet",
            "mime": "application/vnd.google-apps.spreadsheet",
            "subtype": "sheet",
            "translationKey": "GSHEET_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.presentation", {
            "extensions": [
                ".gslides"
            ],
            "icon": "gslides",
            "mime": "application/vnd.google-apps.presentation",
            "subtype": "slides",
            "translationKey": "GSLIDES_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.drawing", {
            "extensions": [
                ".gdraw"
            ],
            "icon": "gdraw",
            "mime": "application/vnd.google-apps.drawing",
            "subtype": "draw",
            "translationKey": "GDRAW_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.fusiontable", {
            "extensions": [
                ".gtable"
            ],
            "icon": "gtable",
            "mime": "application/vnd.google-apps.fusiontable",
            "subtype": "table",
            "translationKey": "GTABLE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.shortcut", {
            "extensions": [
                ".glink"
            ],
            "icon": "glink",
            "mime": "application/vnd.google-apps.shortcut",
            "subtype": "glink",
            "translationKey": "GLINK_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.form", {
            "extensions": [
                ".gform"
            ],
            "icon": "gform",
            "mime": "application/vnd.google-apps.form",
            "subtype": "form",
            "translationKey": "GFORM_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.map", {
            "extensions": [
                ".gmap"
            ],
            "icon": "gmap",
            "mime": "application/vnd.google-apps.map",
            "subtype": "map",
            "translationKey": "GMAP_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.site", {
            "extensions": [
                ".gsite"
            ],
            "icon": "gsite",
            "mime": "application/vnd.google-apps.site",
            "subtype": "site",
            "translationKey": "GSITE_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/vnd.google-apps.mail-layout", {
            "extensions": [
                ".gmaillayout"
            ],
            "icon": "gmaillayout",
            "mime": "application/vnd.google-apps.mail-layout",
            "subtype": "emaillayouts",
            "translationKey": "EMAIL_LAYOUTS_DOCUMENT_FILE_TYPE",
            "type": "hosted"
        }],
    ["application/pdf", {
            "extensions": [
                ".pdf"
            ],
            "icon": "pdf",
            "mime": "application/pdf",
            "subtype": "PDF",
            "translationKey": "PDF_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["text/html", {
            "extensions": [
                ".htm",
                ".html",
                ".mht",
                ".mhtml",
                ".shtml",
                ".xht",
                ".xhtml"
            ],
            "mime": "text/html",
            "subtype": "HTML",
            "translationKey": "HTML_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["application/msword", {
            "extensions": [
                ".doc"
            ],
            "icon": "word",
            "mime": "application/msword",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.openxmlformats-officedocument.wordprocessingml.document", {
            "extensions": [
                ".docx"
            ],
            "icon": "word",
            "mime": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "subtype": "Word",
            "translationKey": "WORD_DOCUMENT_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.ms-powerpoint", {
            "extensions": [
                ".ppt"
            ],
            "icon": "ppt",
            "mime": "application/vnd.ms-powerpoint",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.openxmlformats-officedocument.presentationml.presentation", {
            "extensions": [
                ".pptx"
            ],
            "icon": "ppt",
            "mime": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "subtype": "PPT",
            "translationKey": "POWERPOINT_PRESENTATION_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.ms-excel", {
            "extensions": [
                ".xls"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", {
            "extensions": [
                ".xlsx"
            ],
            "icon": "excel",
            "mime": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
    ["application/vnd.ms-excel.sheet.macroEnabled.12", {
            "extensions": [
                ".xlsm"
            ],
            "icon": "excel",
            "mime": "application/vnd.ms-excel.sheet.macroEnabled.12",
            "subtype": "Excel",
            "translationKey": "EXCEL_FILE_TYPE",
            "type": "document"
        }],
]);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * A special placeholder for unknown types with no extension.
 */
const PLACEHOLDER = {
    translationKey: 'NO_EXTENSION_FILE_TYPE',
    type: 'UNKNOWN',
    icon: '',
    subtype: '',
    extensions: undefined,
    mime: undefined,
    encrypted: undefined,
    originalMimeType: undefined,
};
/**
 * Returns the final extension of a file name, check for the last two dots
 * to distinguish extensions like ".tar.gz" and ".gz".
 */
function getFinalExtension(fileName) {
    if (!fileName) {
        return '';
    }
    const lowerCaseFileName = fileName.toLowerCase();
    const parts = lowerCaseFileName.split('.');
    // No dot, so no extension.
    if (parts.length === 1) {
        return '';
    }
    // Only one dot, so only 1 extension.
    if (parts.length === 2) {
        return `.${parts.pop()}`;
    }
    // More than 1 dot/extension: e.g. ".tar.gz".
    const last = `.${parts.pop()}`;
    const secondLast = `.${parts.pop()}`;
    const doubleExtension = `${secondLast}${last}`;
    if (EXTENSION_TO_TYPE.has(doubleExtension)) {
        return doubleExtension;
    }
    // Double extension doesn't exist in the map, return the single one.
    return last;
}
/**
 * Gets the file type object for a given file name (base name). Use getType()
 * if possible, since this method can't recognize directories.
 */
function getFileTypeForName(name) {
    const extension = getFinalExtension(name);
    if (EXTENSION_TO_TYPE.has(extension)) {
        return EXTENSION_TO_TYPE.get(extension);
    }
    // Unknown file type.
    if (extension === '') {
        return PLACEHOLDER;
    }
    // subtype is the extension excluding the first dot.
    return {
        translationKey: 'GENERIC_FILE_TYPE',
        type: 'UNKNOWN',
        subtype: extension.substr(1).toUpperCase(),
        icon: '',
        extensions: undefined,
        mime: undefined,
        encrypted: undefined,
        originalMimeType: undefined,
    };
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// All supported file types are now defined in
// ui/file_manager/base/gn/file_types.json5.
/** A special type for directory. */
const DIRECTORY = {
    translationKey: 'FOLDER',
    type: '.folder',
    icon: 'folder',
    subtype: '',
    extensions: undefined,
    mime: undefined,
    encrypted: undefined,
    originalMimeType: undefined,
};
/**
 * Returns the file path extension for a given file.
 *
 * @param entry Reference to the file.
 * @return The extension including a leading '.', or empty string if not found.
 */
function getExtension(entry) {
    // No extension for a directory.
    if (entry.isDirectory) {
        return '';
    }
    return getFinalExtension(entry.name);
}
/**
 * Gets the file type object for a given entry. If mime type is provided, then
 * uses it with higher priority than the extension.
 *
 * @param entry Reference to the entry.
 * @param mimeType Optional mime type for the entry.
 * @return The matching descriptor or a placeholder.
 */
function getType(entry, mimeType) {
    if (entry.isDirectory) {
        const volumeInfo = entry.volumeInfo;
        // For removable partitions, use the file system type.
        if (volumeInfo && volumeInfo.diskFileSystemType) {
            return {
                translationKey: '',
                type: 'partition',
                subtype: volumeInfo.diskFileSystemType,
                icon: '',
                extensions: undefined,
                mime: undefined,
                encrypted: undefined,
                originalMimeType: undefined,
            };
        }
        return DIRECTORY;
    }
    if (mimeType) {
        const cseMatch = mimeType.match(/^application\/vnd.google-gsuite.encrypted; content="([a-z\/.-]+)"$/);
        if (cseMatch) {
            const type = { ...getType(entry, cseMatch[1]) };
            type.encrypted = true;
            type.originalMimeType = cseMatch[1];
            return type;
        }
    }
    if (mimeType && MIME_TO_TYPE.has(mimeType)) {
        return MIME_TO_TYPE.get(mimeType);
    }
    return getFileTypeForName(entry.name);
}
/**
 * Gets the media type for a given file.
 *
 * @param entry Reference to the file.
 * @param mimeType Optional mime type for the file.
 * @return The value of 'type' property from one of the elements in the knows
 *     file types (file_types.json5) or undefined.
 */
function getMediaType(entry, mimeType) {
    return getType(entry, mimeType).type;
}
/**
 * @param entry Reference to the file.
 * @param mimeType Optional mime type for the file.
 * @return True if audio file.
 */
function isAudio(entry, mimeType) {
    return getMediaType(entry, mimeType) === 'audio';
}
/**
 * Returns whether the |entry| is image file that can be opened in browser.
 * Note that it returns false for RAW images.
 * @param entry Reference to the file.
 * @param mimeType Optional mime type for the file.
 * @return True if image file.
 */
function isImage(entry, mimeType) {
    return getMediaType(entry, mimeType) === 'image';
}
/**
 * @param entry Reference to the file.
 * @param mimeType Optional mime type for the file.
 * @return True if video file.
 */
function isVideo(entry, mimeType) {
    return getMediaType(entry, mimeType) === 'video';
}
/**
 * @param entry Reference to the file.
 * @param mimeType Optional mime type for the file.
 * @return True if raw file.
 */
function isRaw(entry, mimeType) {
    return getMediaType(entry, mimeType) === 'raw';
}
/**
 * @param entry Reference to the file
 * @param mimeType Optional mime type for this file.
 * @return Whether or not this is a PDF file.
 */
function isPDF(entry, mimeType) {
    return getType(entry, mimeType).subtype === 'PDF';
}
/**
 * Files with more pixels won't have preview.
 * @param entry Reference to the file.
 * @param mimeType Optional mime type for the file.
 * @return True if type is in specified set.
 */
function isType(types, entry, mimeType) {
    const type = getMediaType(entry, mimeType);
    return !!type && types.indexOf(type) !== -1;
}
/**
 * @param entry Reference to the file.
 * @param mimeType Optional mime type for the file.
 * @return Returns true if the file is encrypted with CSE.
 */
function isEncrypted(entry, mimeType) {
    const type = getType(entry, mimeType);
    return type.encrypted !== undefined && type.encrypted;
}
/**
 * @param entry Reference to the file.
 * @param mimeType Optional mime type for the file.
 * @param rootType The root type of the entry.
 * @return Returns string that represents the file icon. It refers to a file
 *     'images/filetype_' + icon + '.png'.
 */
function getIcon(entry, mimeType, rootType) {
    // Handles the FileData and FilesAppEntry types.
    if (entry && 'iconName' in entry) {
        return entry.iconName;
    }
    let icon;
    // Handles other types of entries.
    if (entry) {
        const ventry = entry;
        const fileType = getType(ventry, mimeType);
        const overridenIcon = getIconOverrides(ventry, rootType);
        icon = overridenIcon || fileType.icon || fileType.type;
    }
    return icon || 'unknown';
}
/**
 * Returns a string to be used as an attribute value to customize the entry
 * icon.
 *
 * @param rootType The root type of the entry.
 */
function getIconOverrides(entry, rootType) {
    if (!rootType) {
        return '';
    }
    // Overrides per RootType and defined by fullPath.
    const overrides = {
        [RootType.DOWNLOADS]: {
            '/Camera': 'camera-folder',
            '/Downloads': VolumeType.DOWNLOADS,
            '/PvmDefault': 'plugin_vm',
        },
    };
    const root = overrides[rootType];
    if (!root) {
        return '';
    }
    return root[entry.fullPath] ?? '';
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Wraps the Actions Producer and enforces the Keep Last concurrency model.
 *
 * Assigns an `actionId` for each action call.
 * This consumes the generator from the Actions Producer.
 * In between each yield it might throw an exception if the actionId
 * isn't the latest action anymore. This effectively cancels any pending
 * generator()/action.
 *
 * @template T Type of the action yielded by the Actions Producer.
 * @template Args the inferred type for all the args for foo().
 *
 * @param actionsProducer This will be the `foo` above.
 */
function keepLatest(actionsProducer) {
    // Scope #1: Initial setup.
    let counter = 0;
    async function* wrap(...args) {
        // Scope #2: Per-call to the ActionsProducer.
        const actionId = ++counter;
        const generator = actionsProducer(...args);
        for await (const producedAction of generator) {
            // Scope #3: The generated action.
            if (actionId !== counter) {
                await generator.throw(new ConcurrentActionInvalidatedError(`ActionsProducer invalidated running id: ${actionId} current: ${counter}:`));
                break;
            }
            // The generator is still valid, send the action to the store.
            yield producedAction;
        }
    }
    return wrap;
}
/**
 * While the key is the same it doesn't start a new Actions Producer (AP).
 *
 * If the key changes, then it cancels the previous one and starts a new one.
 *
 * If there is no other running AP, then it just starts a new one.
 */
function keyedKeepFirst(actionsProducer, generateKey) {
    // Scope #1: Initial setup.
    // Key for the current AP.
    let inFlightKey = null;
    async function* wrap(...args) {
        // Scope #2: Per-call to the ActionsProducer.
        const key = generateKey(...args);
        // One already exists, just leave that finish.
        if (inFlightKey && inFlightKey === key) {
            return;
        }
        // This will force the previously running AP to cancel when yielding.
        inFlightKey = key;
        const generator = actionsProducer(...args);
        try {
            for await (const producedAction of generator) {
                // Scope #3: The generated action.
                if (inFlightKey && inFlightKey !== key) {
                    const error = new ConcurrentActionInvalidatedError(`ActionsProducer invalidated running key: ${key} current: ${inFlightKey}:`);
                    await generator.throw(error);
                    throw error;
                }
                yield producedAction;
            }
        }
        catch (error) {
            if (!(error instanceof ConcurrentActionInvalidatedError)) {
                // This error we don't want to clear the `inFlightKey`, because it's
                // pointing to the actually valid AP instance.
                inFlightKey = null;
            }
            throw error;
        }
        // Clear the key if it wasn't invalidated.
        inFlightKey = null;
    }
    return wrap;
}
/**
 * While the key is the same it cancels the previous pending Actions
 * Producer (AP).
 * Note: APs with different keys can happen simultaneously, e.g. `key-2` won't
 * cancel a pending `key-1`.
 */
function keyedKeepLatest(actionsProducer, generateKey) {
    // Scope #1: Initial setup.
    let counter = 0;
    // Key->index map for all in-flight AP.
    const inFlightKeyToActionId = new Map();
    async function* wrap(...args) {
        // Scope #2: Per-call to the ActionsProducer.
        const key = generateKey(...args);
        const actionId = ++counter;
        inFlightKeyToActionId.set(key, actionId);
        const generator = actionsProducer(...args);
        for await (const producedAction of generator) {
            // Scope #3: The generated action.
            const latestActionId = inFlightKeyToActionId.get(key);
            if (latestActionId === undefined || actionId < latestActionId) {
                const error = new ConcurrentActionInvalidatedError(`A new ActionProducer with the same key ${key} is started, invalidate this one.`);
                await generator.throw(error);
                // We rely on the above throw to break the loop.
            }
            yield producedAction;
        }
        // If the action producer finishes without being cancelled, remove the key.
        inFlightKeyToActionId.delete(key);
    }
    return wrap;
}

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Assertion support.
 */

/**
 * Note: This method is deprecated. Use the equvalent method in assert_ts.ts
 * instead.
 * Verify |condition| is truthy and return |condition| if so.
 * @template T
 * @param {T} condition A condition to check for truthiness.  Note that this
 *     may be used to test whether a value is defined or not, and we don't want
 *     to force a cast to Boolean.
 * @param {string=} opt_message A message to show on failure.
 * @return {T} A non-null |condition|.
 * @closurePrimitive {asserts.truthy}
 * @suppress {reportUnknownTypes} because T is not sufficiently constrained.
 */
function assert(condition, opt_message) {
  if (!condition) {
    let message = 'Assertion failed';
    if (opt_message) {
      message = message + ': ' + opt_message;
    }
    const error = new Error(message);
    const global = function() {
      const thisOrSelf = this || self;
      /** @type {boolean} */
      thisOrSelf.traceAssertionsForTesting;
      return thisOrSelf;
    }();
    if (global.traceAssertionsForTesting) {
      console.warn(error.stack);
    }
    throw error;
  }
  return condition;
}

/**
 * Note: This method is deprecated. Use the equvalent method in assert_ts.ts
 * instead.
 * Call this from places in the code that should never be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(enum) {
 *     switch (enum) {
 *       case ENUM_FIRST_OF_TWO:
 *         return first
 *       case ENUM_LAST_OF_TWO:
 *         return last;
 *     }
 *     assertNotReached();
 *     return document;
 *   }
 *
 * This code should only be hit in the case of serious programmer error or
 * unexpected input.
 *
 * @param {string=} message A message to show when this is hit.
 * @closurePrimitive {asserts.fail}
 */
function assertNotReached(message) {
  assert(false, message || 'Unreachable code hit');
}

/**
 * @param {*} value The value to check.
 * @param {function(new: T, ...)} type A user-defined constructor.
 * @param {string=} message A message to show when this is hit.
 * @return {T}
 * @template T
 */
function assertInstanceof(value, type, message) {
  // We don't use assert immediately here so that we avoid constructing an error
  // message if we don't have to.
  if (!(value instanceof type)) {
    assertNotReached(
        message ||
        'Value ' + value + ' is not a[n] ' + (type.name || typeof type));
  }
  return value;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


/**
 * Dispatches a simple event on an event target.
 * @param {!EventTarget} target The event target to dispatch the event on.
 * @param {string} type The type of the event.
 * @param {boolean=} bubbles Whether the event bubbles or not.
 * @param {boolean=} cancelable Whether the default action of the event
 *     can be prevented. Default is true.
 * @return {boolean} If any of the listeners called {@code preventDefault}
 *     during the dispatch this will return false.
 */
function dispatchSimpleEvent(target, type, bubbles, cancelable) {
  const e = new Event(
      type,
      {bubbles: bubbles, cancelable: cancelable === undefined || cancelable});
  return target.dispatchEvent(e);
}

/**
 * Fires a property change event on the target.
 * @param {!EventTarget} target The target to dispatch the event on.
 * @param {string} propertyName The name of the property that changed.
 * @param {*} newValue The new value for the property.
 * @param {*} oldValue The old value for the property.
 */
function dispatchPropertyChange(
    target, propertyName, newValue, oldValue) {
  const e = new Event(propertyName + 'Change');
  e.propertyName = propertyName;
  e.newValue = newValue;
  e.oldValue = oldValue;
  target.dispatchEvent(e);
}

/**
 * Converts a camelCase javascript property name to a hyphenated-lower-case
 * attribute name.
 * @param {string} jsName The javascript camelCase property name.
 * @return {string} The equivalent hyphenated-lower-case attribute name.
 */
function getAttributeName(jsName) {
  return jsName.replace(/([A-Z])/g, '-$1').toLowerCase();
}

/**
 * The kind of property to define in {@code getPropertyDescriptor}.
 * @enum {string}
 * @const
 */
const PropertyKind = {
  /**
   * Plain old JS property where the backing data is stored as a "private"
   * field on the object.
   * Use for properties of any type. Type will not be checked.
   */
  JS: 'js',

  /**
   * The property backing data is stored as an attribute on an element.
   * Use only for properties of type {string}.
   */
  ATTR: 'attr',

  /**
   * The property backing data is stored as an attribute on an element. If the
   * element has the attribute then the value is true.
   * Use only for properties of type {boolean}.
   */
  BOOL_ATTR: 'boolAttr',
};

/**
 * Helper function for getPropertyDescriptor that returns the getter to use for
 * the property.
 * @param {string} name The name of the property.
 * @param {PropertyKind} kind The kind of the property.
 * @return {function():*} The getter for the property.
 */
function getGetter(name, kind) {
  let attributeName;
  switch (kind) {
    case PropertyKind.JS:
      const privateName = name + '_';
      return function() {
        return this[privateName];
      };
    case PropertyKind.ATTR:
      attributeName = getAttributeName(name);
      return function() {
        return this.getAttribute(attributeName);
      };
    case PropertyKind.BOOL_ATTR:
      attributeName = getAttributeName(name);
      return function() {
        return this.hasAttribute(attributeName);
      };
  }

  assertNotReached();
}

/**
 * Helper function for getPropertyDescriptor that returns the setter of the
 * right kind.
 * @param {string} name The name of the property we are defining the setter
 *     for.
 * @param {PropertyKind} kind The kind of property we are getting the
 *     setter for.
 * @param {function(*, *):void=} setHook A function to run after the
 *     property is set, but before the propertyChange event is fired.
 * @return {function(*):void} The function to use as a setter.
 */
function getSetter(name, kind, setHook) {
  let attributeName;
  switch (kind) {
    case PropertyKind.JS:
      const privateName = name + '_';
      return function(value) {
        const oldValue = this[name];
        if (value !== oldValue) {
          this[privateName] = value;
          if (setHook) {
            setHook.call(this, value, oldValue);
          }
          dispatchPropertyChange(this, name, value, oldValue);
        }
      };

    case PropertyKind.ATTR:
      attributeName = getAttributeName(name);
      return function(value) {
        const oldValue = this[name];
        if (value !== oldValue) {
          if (value === undefined) {
            this.removeAttribute(attributeName);
          } else {
            this.setAttribute(attributeName, value);
          }
          if (setHook) {
            setHook.call(this, value, oldValue);
          }
          dispatchPropertyChange(this, name, value, oldValue);
        }
      };

    case PropertyKind.BOOL_ATTR:
      attributeName = getAttributeName(name);
      return function(value) {
        const oldValue = this[name];
        if (value !== oldValue) {
          if (value) {
            this.setAttribute(attributeName, name);
          } else {
            this.removeAttribute(attributeName);
          }
          if (setHook) {
            setHook.call(this, value, oldValue);
          }
          dispatchPropertyChange(this, name, value, oldValue);
        }
      };
  }

  assertNotReached();
}

/**
 * Returns a getter and setter to be used as property descriptor in
 * Object.defineProperty(). When the setter changes the value a property change
 * event with the type {@code name + 'Change'} is fired.
 * @param {string} name The name of the property.
 * @param {PropertyKind=} kind What kind of underlying storage to use.
 * @param {function(?, ?):void=} setHook A function to run after the
 *     property is set, but before the propertyChange event is fired.
 */
function getPropertyDescriptor(name, kind = PropertyKind.JS, setHook) {
  return {
    get: getGetter(name, kind),
    set: getSetter(name, kind, setHook),
  };
}

// Copyright 2010 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
* @fileoverview Work-around for
* https://github.com/google/closure-compiler/issues/3143, such that WebUI code
* can use the native EventTarget class.
* TODO(dpapad): Remove this entire file if/when that issue is fixed.
*/

/**
 * @constructor
 * @implements {EventTarget}
 */
const NativeEventTarget = self['EventTarget'];

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Class used to emit window.localStorage change events to event listeners.
 * This class does 3 things:
 *
 * 1. Holds the onChanged event listeners for the current window.
 * 2. Sends broadcast event to all windows.
 * 3. Listens to broadcast events and propagates to the listeners in
 *    the current window.
 *
 * NOTE: This doesn't support the `oldValue` because it's simpler and the
 * current clients of `onChanged` don't need it.
 */
class StorageChangeTracker {
    /**
     * @param storageNamespace_ Storage namespace argument added when calling
     *     listeners.
     */
    constructor(storageNamespace_) {
        this.storageNamespace_ = storageNamespace_;
        /** Storage onChanged event listeners for the current window. */
        this.listeners_ = [];
        /** Event to send local storage changes to all window listeners. */
        window.addEventListener('storage', this.onStorageEvent_.bind(this));
    }
    /** Resets for testing: removes all listeners. */
    resetForTesting() {
        this.listeners_ = [];
    }
    /** Adds an onChanged event listener for the current window. */
    addListener(callback) {
        this.listeners_.push(callback);
    }
    /** Notifies listeners of key value changes. */
    keysChanged(changedValues) {
        const changedKeys = {};
        for (const [k, v] of Object.entries(changedValues)) {
            // `oldValue` isn't necessary for the current use case.
            changedKeys[k] = { newValue: v };
        }
        this.notifyLocally_(changedKeys);
    }
    /** Processes storage event and notifies listeners. */
    onStorageEvent_(event) {
        const { key, newValue } = event;
        if (key === null || newValue === null) {
            return;
        }
        const changedKeys = {};
        try {
            changedKeys[key] = { newValue: JSON.parse(newValue) };
        }
        catch (error) {
            console.warn(`Cannot parse local storage value from key '${key}' as JSON`, error);
            changedKeys[key] = { newValue };
        }
        this.notifyLocally_(changedKeys);
    }
    /** Notifies local (current window) listeners of key value changes. */
    notifyLocally_(keys) {
        for (const listener of this.listeners_) {
            try {
                listener(keys, this.storageNamespace_);
            }
            catch (error) {
                console.error('Error calling storage.onChanged listener', error);
            }
        }
    }
}
/**
 * StorageAreaImpl using window.localStorage as the storage area.
 */
class StorageAreaImpl {
    constructor(type) {
        this.storageChangeTracker = new StorageChangeTracker(type);
    }
    /** Gets values of `keys` and returns them in the callback. */
    get(keys, callback) {
        const keyList = Array.isArray(keys) ? keys : [keys];
        const result = {};
        for (const key of keyList) {
            result[key] = this.getValue_(key);
        }
        callback(result);
    }
    /** Gets the value of `key` from local storage. */
    getValue_(key) {
        const value = window.localStorage.getItem(key);
        try {
            return JSON.parse(value);
        }
        catch (error) {
            console.warn(`Failed to JSON parse localStorage value from key: "${key}" ` +
                `returning the raw value.`, error);
            return value;
        }
    }
    /** Async version of `this.get()`. */
    async getAsync(keys) {
        return new Promise(resolve => this.get(keys, resolve));
    }
    /**
     * Stores items in local storage.
     * @param items The items to store.
     * @param callback Callback to be called when the items have been stored.
     */
    set(items, callback) {
        for (const key in items) {
            const value = JSON.stringify(items[key]);
            window.localStorage.setItem(key, value);
        }
        this.notifyChange_(Object.keys(items));
        callback?.();
    }
    /**
     * Async version of `this.set()`.
     * @param items The items to store.
     */
    async setAsync(items) {
        return new Promise(resolve => this.set(items, resolve));
    }
    /** Removes the given `keys` from local storage. */
    remove(keys) {
        const keyList = Array.isArray(keys) ? keys : [keys];
        for (const key of keyList) {
            window.localStorage.removeItem(key);
        }
        this.notifyChange_(keyList);
    }
    /** Clears local storage. */
    clear() {
        window.localStorage.clear();
        this.notifyChange_([]);
    }
    /** Notifies key changes to storage change tracker listeners. */
    notifyChange_(keys) {
        const values = {};
        for (const k of keys) {
            values[k] = this.getValue_(k);
        }
        this.storageChangeTracker.keysChanged(values);
    }
}
var storage;
(function (storage) {
    storage.local = new StorageAreaImpl('local');
    storage.onChanged = storage.local.storageChangeTracker;
})(storage || (storage = {}));

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var EventType;
(function (EventType) {
    EventType["UPDATE"] = "update";
})(EventType || (EventType = {}));
/** Key used to store the task history in local storage. */
const STORAGE_KEY_LAST_EXECUTED_TIME = 'task-last-executed-time';
const LAST_EXECUTED_TIME_HISTORY_MAX = 100;
/**
 * TaskHistory object keeps track of the history of task executions. Recent
 * history is stored in local storage.
 */
class TaskHistory extends NativeEventTarget {
    constructor() {
        super();
        /**
         * The recent history of task executions. Key is task ID and value is time
         * stamp of the latest execution of the task.
         */
        this.lastExecutedTime_ = {};
        storage.onChanged.addListener(this.onLocalStorageChanged_.bind(this));
        this.load_();
    }
    /** Records the timing of task execution. */
    recordTaskExecuted(descriptor) {
        const taskId = makeTaskID(descriptor);
        this.lastExecutedTime_[taskId] = Date.now();
        this.truncate_();
        this.save_();
    }
    /**
     * Gets the time stamp of last execution of given task. If the record is not
     * found, returns 0.
     */
    getLastExecutedTime(descriptor) {
        const taskId = makeTaskID(descriptor);
        return this.lastExecutedTime_[taskId] ?? 0;
    }
    /** Loads the current history from local storage. */
    load_() {
        storage.local.get(STORAGE_KEY_LAST_EXECUTED_TIME, (value) => {
            this.lastExecutedTime_ = value[STORAGE_KEY_LAST_EXECUTED_TIME] ?? {};
        });
    }
    /** Saves the current history to local storage. */
    save_() {
        storage.local.set({ [STORAGE_KEY_LAST_EXECUTED_TIME]: this.lastExecutedTime_ });
    }
    /** Handles local storage change event to update the current history. */
    onLocalStorageChanged_(changes, areaName) {
        if (areaName !== 'local') {
            return;
        }
        for (const key in changes) {
            if (key === STORAGE_KEY_LAST_EXECUTED_TIME) {
                this.lastExecutedTime_ = changes[key]?.newValue;
                dispatchSimpleEvent(this, EventType.UPDATE);
            }
        }
    }
    /**
     * Truncates current history so that the size of history does not exceed
     * STORAGE_KEY_LAST_EXECUTED_TIME.
     */
    truncate_() {
        const keys = Object.keys(this.lastExecutedTime_);
        if (keys.length <= LAST_EXECUTED_TIME_HISTORY_MAX) {
            return;
        }
        let items = [];
        for (const key of keys) {
            items.push({ id: key, timestamp: this.lastExecutedTime_[key] });
        }
        items.sort((a, b) => b.timestamp - a.timestamp);
        items = items.slice(0, LAST_EXECUTED_TIME_HISTORY_MAX);
        const newObject = {};
        for (const item of items) {
            newObject[item.id] = item.timestamp;
        }
        this.lastExecutedTime_ = newObject;
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const LEGACY_FILES_EXTENSION_ID = 'hhaomjibdihmijegdhdafkllkbggdgoj';
/** App ID generated by the SWA framework. */
const SWA_APP_ID = 'fkiggjmkendpmbegkagpmagjepfkpmeb';
const SWA_FILES_APP_HOST = 'file-manager';
/**
 * Special key for when we are showing search results. Search results do not
 * have a corresponding entry in the directory tree. As a result we need to
 * fake the PathComponent that represents the "current" directory. This constant
 * corresponds to the key field of the PathComponent object.
 */
const SEARCH_RESULTS_KEY = 'fake-entry://search/';
/** The URL of the legacy version of File Manager. */
new URL(`chrome-extension://${LEGACY_FILES_EXTENSION_ID}`);
/** The URL of the System Web App version of File Manager. */
const SWA_FILES_APP_URL = new URL(`chrome://${SWA_FILES_APP_HOST}`);
/**
 * @param path relative to the Files app root.
 * @return The absolute URL for a path within the Files app.
 */
function toFilesAppURL(path = '') {
    return new URL(path, SWA_FILES_APP_URL);
}
/**
 * @param path relative to the sandboxed page origin.
 * @return The absolute URL.
 */
function toSandboxedURL(path = '') {
    const SANDBOXED_URL = new URL(`chrome-untrusted://${SWA_FILES_APP_HOST}`);
    return new URL(path, SANDBOXED_URL);
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The SWA actionId is prefixed with chrome://file-manager/?ACTION_ID, just the
 * sub-string compatible with the extension/legacy e.g.: "view-pdf".
 */
function parseActionId(actionId) {
    const swaUrl = SWA_FILES_APP_URL.toString() + '?';
    return actionId.replace(swaUrl, '');
}
/** Returns whether the provided appId corresponds Files app's. */
function isFilesAppId(appId) {
    return appId === LEGACY_FILES_EXTENSION_ID || appId === SWA_APP_ID;
}
/** The task descriptor of 'Install Linux package'. */
const INSTALL_LINUX_PACKAGE_TASK_DESCRIPTOR = {
    appId: LEGACY_FILES_EXTENSION_ID,
    taskType: 'app',
    actionId: 'install-linux-package',
};
/**
 * Gets the default task from tasks. In case there is no such task (i.e. all
 * tasks are generic file handlers), then return null.
 */
function getDefaultTask(tasks, policyDefaultHandlerStatus, taskHistory) {
    const INCORRECT_ASSIGNMENT = chrome.fileManagerPrivate.PolicyDefaultHandlerStatus.INCORRECT_ASSIGNMENT;
    const DEFAULT_HANDLER_ASSIGNED_BY_POLICY = chrome.fileManagerPrivate.PolicyDefaultHandlerStatus
        .DEFAULT_HANDLER_ASSIGNED_BY_POLICY;
    // If policy assignment is incorrect, then no default should be set.
    if (policyDefaultHandlerStatus &&
        policyDefaultHandlerStatus === INCORRECT_ASSIGNMENT) {
        return null;
    }
    // 1. Default app set for MIME or file extension by user, or built-in app.
    for (const task of tasks) {
        if (task.isDefault) {
            return task;
        }
    }
    // If policy assignment is marked as correct, then by this moment we
    // should've already found the default.
    console.assert(!(policyDefaultHandlerStatus &&
        policyDefaultHandlerStatus === DEFAULT_HANDLER_ASSIGNED_BY_POLICY));
    const nonGenericTasks = tasks.filter(t => !t.isGenericFileHandler);
    if (nonGenericTasks.length === 0) {
        return null;
    }
    // 2. Most recently executed or sole non-generic task.
    const latest = nonGenericTasks[0];
    if (nonGenericTasks.length === 1 ||
        taskHistory.getLastExecutedTime(latest.descriptor)) {
        return latest;
    }
    return null;
}
/**
 * Annotates tasks returned from the API.
 * @param tasks Input tasks from the API.
 * @param entries List of entries for the tasks.
 */
function annotateTasks(tasks, entries) {
    const result = [];
    for (const task of tasks) {
        const { appId, taskType, actionId } = task.descriptor;
        const parsedActionId = parseActionId(actionId);
        // Skip internal Files app's handlers.
        if (isFilesAppId(appId) &&
            (parsedActionId === 'select' || parsedActionId === 'open')) {
            continue;
        }
        // Tweak images, titles of internal tasks.
        const annotateTask = { ...task, iconType: '' };
        if (isFilesAppId(appId) && (taskType === 'app' || taskType === 'web')) {
            if (parsedActionId === 'mount-archive') {
                annotateTask.iconType = 'archive';
                annotateTask.title = str('MOUNT_ARCHIVE');
            }
            else if (parsedActionId === 'open-hosted-generic') {
                if (entries.length > 1) {
                    annotateTask.iconType = 'generic';
                }
                else { // Use specific icon.
                    annotateTask.iconType = getIcon(entries[0]);
                }
                annotateTask.title = str('TASK_OPEN');
            }
            else if (parsedActionId === 'open-hosted-gdoc') {
                annotateTask.iconType = 'gdoc';
                annotateTask.title = str('TASK_OPEN_GDOC');
            }
            else if (parsedActionId === 'open-hosted-gsheet') {
                annotateTask.iconType = 'gsheet';
                annotateTask.title = str('TASK_OPEN_GSHEET');
            }
            else if (parsedActionId === 'open-hosted-gslides') {
                annotateTask.iconType = 'gslides';
                annotateTask.title = str('TASK_OPEN_GSLIDES');
            }
            else if (parsedActionId === 'open-web-drive-office-word') {
                annotateTask.iconType = 'gdoc';
                annotateTask.title = str('TASK_OPEN_GDOC');
            }
            else if (parsedActionId === 'open-web-drive-office-excel') {
                annotateTask.iconType = 'gsheet';
                annotateTask.title = str('TASK_OPEN_GSHEET');
            }
            else if (parsedActionId === 'upload-office-to-drive') {
                annotateTask.iconType = 'generic';
                annotateTask.title = 'Upload to Drive';
            }
            else if (parsedActionId === 'open-web-drive-office-powerpoint') {
                annotateTask.iconType = 'gslides';
                annotateTask.title = str('TASK_OPEN_GSLIDES');
            }
            else if (parsedActionId === 'open-in-office') {
                annotateTask.iconUrl =
                    toFilesAppURL('foreground/images/files/ui/ms365.svg').toString();
                annotateTask.title = str('TASK_OPEN_MICROSOFT_365');
            }
            else if (parsedActionId === 'install-linux-package') {
                annotateTask.iconType = 'crostini';
                annotateTask.title = str('TASK_INSTALL_LINUX_PACKAGE');
            }
            else if (parsedActionId === 'import-crostini-image') {
                annotateTask.iconType = 'tini';
                annotateTask.title = str('TASK_IMPORT_CROSTINI_IMAGE');
            }
            else if (parsedActionId === 'view-pdf') {
                annotateTask.iconType = 'pdf';
                annotateTask.title = str('TASK_VIEW');
            }
            else if (parsedActionId === 'view-in-browser') {
                annotateTask.iconType = 'generic';
                annotateTask.title = str('TASK_VIEW');
            }
            else if (parsedActionId === 'open-encrypted') {
                annotateTask.iconType = 'generic';
                annotateTask.title = str('TASK_OPEN_GDRIVE');
            }
            else if (parsedActionId === 'install-isolated-web-app') {
                annotateTask.iconType = 'removable';
            }
        }
        if (!annotateTask.iconType && taskType === 'web-intent') {
            annotateTask.iconType = 'generic';
        }
        result.push(annotateTask);
    }
    return result;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * File path component.
 *
 * File path can be represented as a series of path components. Each component
 * has its name used as a visible label and URL which point to the component
 * in the path.
 * PathComponent.computeComponentsFromEntry computes an array of PathComponent
 * of the given entry.
 */
class PathComponent {
    /**
     * @param name Name.
     * @param url Url.
     * @param fakeEntry Fake entry should be set when this component represents
     *     fake entry.
     */
    constructor(name, url_, fakeEntry_) {
        this.name = name;
        this.url_ = url_;
        this.fakeEntry_ = fakeEntry_;
    }
    /**
     * Resolve an entry of the component.
     * @return A promise which is resolved with an entry.
     */
    resolveEntry() {
        if (this.fakeEntry_) {
            return Promise.resolve(this.fakeEntry_);
        }
        else {
            return new Promise(window.webkitResolveLocalFileSystemURL.bind(null, this.url_));
        }
    }
    /**
     * Returns the key of this component (its URL).
     */
    getKey() {
        return this.url_;
    }
    /**
     * Computes path components for the path of entry.
     * @param entry An entry.
     * @return Components.
     */
    static computeComponentsFromEntry(entry, volumeManager) {
        /**
         * Replace the root directory name at the end of a url.
         * The input, |url| is a displayRoot URL of a Drive volume like
         * filesystem:chrome-extension://....foo.com-hash/root
         * The output is like:
         * filesystem:chrome-extension://....foo.com-hash/other
         *
         * @param url which points to a volume display root
         * @param newRoot new root directory name
         * @return new URL with the new root directory name
         */
        const replaceRootName = (url, newRoot) => {
            return url.slice(0, url.length - '/root'.length) + newRoot;
        };
        const components = [];
        const locationInfo = volumeManager.getLocationInfo(entry);
        if (!locationInfo) {
            return components;
        }
        if (isFakeEntry(entry)) {
            components.push(new PathComponent(getEntryLabel(locationInfo, entry), entry.toURL(), entry));
            return components;
        }
        // Add volume component.
        const volumeInfo = locationInfo.volumeInfo;
        if (!volumeInfo) {
            return components;
        }
        let displayRootUrl = volumeInfo.displayRoot.toURL();
        let displayRootFullPath = volumeInfo.displayRoot.fullPath;
        const prefixEntry = volumeInfo.prefixEntry;
        // Directories under Drive Fake Root can return the fake root entry list as
        // prefix entry, but we will never show "Google Drive" as the prefix in the
        // breadcrumb.
        if (prefixEntry && prefixEntry.rootType !== RootType.DRIVE_FAKE_ROOT) {
            components.push(new PathComponent(prefixEntry.name, prefixEntry.toURL(), prefixEntry));
        }
        if (locationInfo.rootType === RootType.DRIVE_SHARED_WITH_ME) {
            // DriveFS shared items are in either of:
            // <drivefs>/.files-by-id/<id>/<item>
            // <drivefs>/.shortcut-targets-by-id/<id>/<item>
            const match = entry.fullPath.match(/^\/\.(files|shortcut-targets)-by-id\/.+?\//);
            if (match) {
                displayRootFullPath = match[0];
            }
            else {
                console.warn('Unexpected shared DriveFS path: ', entry.fullPath);
            }
            displayRootUrl = replaceRootName(displayRootUrl, displayRootFullPath);
            const sharedWithMeFakeEntry = volumeInfo.fakeEntries[RootType.DRIVE_SHARED_WITH_ME];
            if (sharedWithMeFakeEntry) {
                components.push(new PathComponent(str('DRIVE_SHARED_WITH_ME_COLLECTION_LABEL'), sharedWithMeFakeEntry.toURL(), sharedWithMeFakeEntry));
            }
        }
        else if (locationInfo.rootType === RootType.SHARED_DRIVE) {
            displayRootUrl =
                replaceRootName(displayRootUrl, SHARED_DRIVES_DIRECTORY_PATH);
            components.push(new PathComponent(getRootTypeLabel(locationInfo), displayRootUrl));
        }
        else if (locationInfo.rootType === RootType.COMPUTER) {
            displayRootUrl =
                replaceRootName(displayRootUrl, COMPUTERS_DIRECTORY_PATH);
            components.push(new PathComponent(getRootTypeLabel(locationInfo), displayRootUrl));
        }
        else {
            components.push(new PathComponent(getRootTypeLabel(locationInfo), displayRootUrl));
        }
        // Get relative path to display root (e.g. /root/foo/bar -> foo/bar).
        let relativePath = entry.fullPath.slice(displayRootFullPath.length);
        if (entry.fullPath.startsWith(SHARED_DRIVES_DIRECTORY_PATH)) {
            relativePath = entry.fullPath.slice(SHARED_DRIVES_DIRECTORY_PATH.length);
        }
        else if (entry.fullPath.startsWith(COMPUTERS_DIRECTORY_PATH)) {
            relativePath = entry.fullPath.slice(COMPUTERS_DIRECTORY_PATH.length);
        }
        if (relativePath.indexOf('/') === 0) {
            relativePath = relativePath.slice(1);
        }
        if (relativePath.length === 0) {
            return components;
        }
        // currentUrl should be without trailing slash.
        let currentUrl = /^.+\/$/.test(displayRootUrl) ?
            displayRootUrl.slice(0, displayRootUrl.length - 1) :
            displayRootUrl;
        // Add directory components to the target path.
        const paths = relativePath.split('/');
        for (let i = 0; i < paths.length; i++) {
            currentUrl += '/' + encodeURIComponent(paths[i]);
            let path = paths[i];
            if (i === 0 && locationInfo.rootType === RootType.DOWNLOADS) {
                if (path === 'Downloads') {
                    path = str('DOWNLOADS_DIRECTORY_LABEL');
                }
                if (path === 'PvmDefault') {
                    path = str('PLUGIN_VM_DIRECTORY_LABEL');
                }
                if (path === 'Camera') {
                    path = str('CAMERA_DIRECTORY_LABEL');
                }
            }
            components.push(new PathComponent(path, currentUrl));
        }
        return components;
    }
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Current directory slice of the store.
 */
const slice$c = new Slice('currentDirectory');
function getEmptySelection(keys = []) {
    return {
        keys,
        dirCount: 0,
        fileCount: 0,
        // hostedCount might be updated to undefined in the for loop below.
        hostedCount: 0,
        // offlineCachedCount might be updated to undefined in the for loop below.
        offlineCachedCount: 0,
        fileTasks: {
            tasks: [],
            defaultTask: undefined,
            policyDefaultHandlerStatus: undefined,
            status: PropStatus.STARTED,
        },
    };
}
/**
 * Returns true if any of the entries in `currentDirectory` are DLP disabled,
 * and false otherwise.
 */
function hasDlpDisabledFiles(currentState) {
    const content = currentState.currentDirectory?.content;
    if (!content) {
        return false;
    }
    for (const key of content.keys) {
        const fileData = currentState.allEntries[key];
        if (!fileData) {
            console.warn(`Missing entry: ${key}`);
            continue;
        }
        if (fileData.metadata.isRestrictedForDestination) {
            return true;
        }
    }
    return false;
}
/** Create action to change the Current Directory. */
const changeDirectory = slice$c.addReducer('set', changeDirectoryReducer);
function changeDirectoryReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    if (payload.to) {
        cacheEntries(currentState, [payload.to]);
    }
    const { to, toKey } = payload;
    const key = toKey || to.toURL();
    const status = payload.status || PropStatus.STARTED;
    const fileData = currentState.allEntries[key];
    let selection = currentState.currentDirectory?.selection;
    // Use an empty selection when a selection isn't defined or it's navigating to
    // a new directory.
    if (!selection || currentState.currentDirectory?.key !== key) {
        selection = {
            keys: [],
            dirCount: 0,
            fileCount: 0,
            hostedCount: undefined,
            offlineCachedCount: 0,
            fileTasks: {
                tasks: [],
                policyDefaultHandlerStatus: undefined,
                defaultTask: undefined,
                status: PropStatus.SUCCESS,
            },
        };
    }
    let content = currentState.currentDirectory?.content;
    let hasDlpDisabledFiles = currentState.currentDirectory?.hasDlpDisabledFiles || false;
    // Use empty content when it isn't defined or it's navigating to a new
    // directory. The content will be updated again after a successful scan.
    if (!content || currentState.currentDirectory?.key !== key) {
        content = {
            keys: [],
        };
        hasDlpDisabledFiles = false;
    }
    let currentDirectory = {
        key,
        status,
        pathComponents: [],
        content: content,
        rootType: undefined,
        selection,
        hasDlpDisabledFiles: hasDlpDisabledFiles,
    };
    // The new directory might not be in the allEntries yet, this might happen
    // when starting to change the directory for a entry that isn't cached.
    // At the end of the change directory, DirectoryContents will send an Action
    // with the Entry to be cached.
    if (fileData) {
        const { volumeManager } = window.fileManager;
        if (!volumeManager) {
            console.debug(`VolumeManager not available yet.`);
            currentDirectory = currentState.currentDirectory || currentDirectory;
        }
        else {
            const components = PathComponent.computeComponentsFromEntry(fileData.entry, volumeManager);
            currentDirectory.pathComponents = components.map(c => {
                return {
                    name: c.name,
                    label: c.name,
                    key: c.getKey(),
                };
            });
            const locationInfo = volumeManager.getLocationInfo(fileData.entry);
            currentDirectory.rootType = locationInfo?.rootType;
        }
    }
    return {
        ...currentState,
        currentDirectory,
    };
}
/** Create action to update currently selected files/folders. */
const updateSelection = slice$c.addReducer('set-selection', updateSelectionReducer);
function updateSelectionReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.entries);
    const updatingToEmpty = (payload.entries.length === 0 && payload.selectedKeys.length === 0);
    if (!currentState.currentDirectory) {
        if (!updatingToEmpty) {
            console.warn('Missing `currentDirectory`');
            console.debug('Dropping action:', payload);
        }
        return currentState;
    }
    if (!currentState.currentDirectory.content) {
        if (!updatingToEmpty) {
            console.warn('Missing `currentDirectory.content`');
            console.debug('Dropping action:', payload);
        }
        return currentState;
    }
    const selectedKeys = payload.selectedKeys;
    const contentKeys = new Set(currentState.currentDirectory.content.keys);
    const missingKeys = selectedKeys.filter(k => !contentKeys.has(k));
    if (missingKeys.length > 0) {
        console.warn('Got selected keys that are not in current directory, ' +
            'continuing anyway');
        console.debug(`Missing keys: ${missingKeys.join('\n')} \nexisting keys:\n ${(currentState.currentDirectory?.content?.keys ?? []).join('\n')}`);
    }
    const selection = getEmptySelection(selectedKeys);
    for (const key of selectedKeys) {
        const fileData = currentState.allEntries[key];
        if (!fileData) {
            console.warn(`Missing entry: ${key}`);
            continue;
        }
        if (fileData.isDirectory) {
            selection.dirCount++;
        }
        else {
            selection.fileCount++;
        }
        const metadata = fileData.metadata;
        // Update hostedCount to undefined if any entry doesn't have the metadata
        // yet.
        const isHosted = metadata?.hosted;
        if (isHosted === undefined) {
            selection.hostedCount = undefined;
        }
        else {
            if (selection.hostedCount !== undefined && isHosted) {
                selection.hostedCount++;
            }
        }
        // If no availableOffline property, then assume it's available.
        const isOfflineCached = (metadata?.availableOffline === undefined ||
            metadata?.availableOffline);
        if (isOfflineCached) {
            selection.offlineCachedCount++;
        }
    }
    const currentDirectory = {
        ...currentState.currentDirectory,
        selection,
    };
    return {
        ...currentState,
        currentDirectory,
    };
}
/** Create action to update FileTasks for the current selection. */
const updateFileTasks = slice$c.addReducer('set-file-tasks', updateFileTasksReducer);
function updateFileTasksReducer(currentState, payload) {
    const initialSelection = currentState.currentDirectory?.selection ?? getEmptySelection();
    // Apply the changes over the current selection.
    const fileTasks = {
        ...initialSelection.fileTasks,
        ...payload,
    };
    // Update the selection and current directory objects.
    const selection = {
        ...initialSelection,
        fileTasks,
    };
    const currentDirectory = {
        ...currentState.currentDirectory,
        selection,
    };
    return {
        ...currentState,
        currentDirectory,
    };
}
/** Create action to update the current directory's content. */
const updateDirectoryContent = slice$c.addReducer('update-content', updateDirectoryContentReducer);
function updateDirectoryContentReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.entries);
    if (!currentState.currentDirectory) {
        console.warn('Missing `currentDirectory`');
        return currentState;
    }
    const initialContent = currentState.currentDirectory?.content ?? { keys: [] };
    const keys = payload.entries.map(e => e.toURL());
    const content = {
        ...initialContent,
        keys,
    };
    let currentDirectory = {
        ...currentState.currentDirectory,
        content,
    };
    const newState = {
        ...currentState,
        currentDirectory,
    };
    currentDirectory = {
        ...currentDirectory,
        hasDlpDisabledFiles: hasDlpDisabledFiles(newState),
    };
    return {
        ...newState,
        currentDirectory,
    };
}
/**
 * Linux package installation is currently only supported for a single file
 * which is inside the Linux container, or in a shareable volume.
 * TODO(timloh): Instead of filtering these out, we probably should show a
 * dialog with an error message, similar to when attempting to run Crostini
 * tasks with non-Crostini entries.
 */
function allowCrostiniTask(filesData) {
    if (filesData.length !== 1) {
        return false;
    }
    const fileData = filesData[0];
    const rootType = fileData.entry.rootType;
    if (rootType !== RootType.CROSTINI) {
        return false;
    }
    const crostini = window.fileManager.crostini;
    return crostini.canSharePath(DEFAULT_CROSTINI_VM, fileData.entry, 
    /*persiste=*/ false);
}
const emptyAction = (status) => updateFileTasks({
    tasks: [],
    policyDefaultHandlerStatus: undefined,
    defaultTask: undefined,
    status,
});
async function* fetchFileTasksInternal(filesData) {
    // Filters out the non-native entries.
    filesData = filesData.filter(getNativeEntry);
    const state = getStore().getState();
    const currentRootType = state.currentDirectory?.rootType;
    const dialogType = window.fileManager.dialogType;
    const shouldDisableTasks = (
    // File Picker/Save As doesn't show the "Open" button.
    dialogType !== DialogType.FULL_PAGE ||
        // The list of available tasks should not be available to trashed items.
        currentRootType === RootType.TRASH || filesData.length === 0);
    if (shouldDisableTasks) {
        yield emptyAction(PropStatus.SUCCESS);
        return;
    }
    const selectionHandler = window.fileManager.selectionHandler;
    const selection = selectionHandler.selection;
    await selection.computeAdditional(window.fileManager.metadataModel);
    yield;
    try {
        const resultingTasks = await getFileTasks(filesData.map(fd => fd.entry), filesData.map(fd => fd.metadata.sourceUrl || ''));
        if (!resultingTasks || !resultingTasks.tasks) {
            return;
        }
        yield;
        if (filesData.length === 0 || resultingTasks.tasks.length === 0) {
            yield emptyAction(PropStatus.SUCCESS);
            return;
        }
        if (!allowCrostiniTask(filesData)) {
            resultingTasks.tasks = resultingTasks.tasks.filter((task) => !descriptorEqual(task.descriptor, INSTALL_LINUX_PACKAGE_TASK_DESCRIPTOR));
        }
        const tasks = annotateTasks(resultingTasks.tasks, filesData);
        resultingTasks.tasks = tasks;
        // TODO: Migrate TaskHistory to the store.
        const taskHistory = window.fileManager.taskController.taskHistory;
        const defaultTask = getDefaultTask(tasks, resultingTasks.policyDefaultHandlerStatus, taskHistory) ??
            undefined;
        yield updateFileTasks({
            tasks: tasks,
            policyDefaultHandlerStatus: resultingTasks.policyDefaultHandlerStatus,
            defaultTask: defaultTask,
            status: PropStatus.SUCCESS,
        });
    }
    catch (error) {
        yield emptyAction(PropStatus.ERROR);
    }
}
/** Generates key based on each FileKey (entry.toURL()). */
function getSelectionKey(filesData) {
    return filesData.map(f => f?.entry.toURL()).join('|');
}
const fetchFileTasks = keyedKeepFirst(fetchFileTasksInternal, getSelectionKey);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Entries slice of the store.
 */
const slice$b = new Slice('allEntries');
/**
 * Create action to scan `allEntries` and remove its stale entries.
 */
const clearCachedEntries = slice$b.addReducer('clear-stale-cache', clearCachedEntriesReducer);
function clearCachedEntriesReducer(state) {
    const entries = state.allEntries;
    const currentDirectoryKey = state.currentDirectory?.key;
    const entriesToKeep = new Set();
    if (currentDirectoryKey) {
        entriesToKeep.add(currentDirectoryKey);
        for (const component of state.currentDirectory.pathComponents) {
            entriesToKeep.add(component.key);
        }
        for (const key of state.currentDirectory.content.keys) {
            entriesToKeep.add(key);
        }
    }
    const selectionKeys = state.currentDirectory?.selection.keys ?? [];
    if (selectionKeys) {
        for (const key of selectionKeys) {
            entriesToKeep.add(key);
        }
    }
    for (const volume of Object.values(state.volumes)) {
        if (!volume.rootKey) {
            continue;
        }
        entriesToKeep.add(volume.rootKey);
        if (volume.prefixKey) {
            entriesToKeep.add(volume.prefixKey);
        }
    }
    for (const key of state.uiEntries) {
        entriesToKeep.add(key);
    }
    for (const key of state.folderShortcuts) {
        entriesToKeep.add(key);
    }
    for (const root of state.navigation.roots) {
        entriesToKeep.add(root.key);
    }
    // For all expanded entries, we need to keep them and all their direct
    // children.
    for (const [key, fileData] of Object.entries(entries)) {
        if (fileData.expanded) {
            entriesToKeep.add(key);
            if (fileData.children) {
                for (const child of fileData.children) {
                    entriesToKeep.add(child);
                }
            }
        }
    }
    // For all kept entries, we also need to keep their children so we can decide
    // if we need to show the expand icon or not.
    for (const key of entriesToKeep) {
        const fileData = entries[key];
        if (fileData?.children) {
            for (const child of fileData.children) {
                entriesToKeep.add(child);
            }
        }
    }
    const isDebugStore = isDebugStoreEnabled();
    for (const key of Object.keys(entries)) {
        if (entriesToKeep.has(key)) {
            continue;
        }
        delete entries[key];
        if (isDebugStore) {
            console.log(`Clear entry: ${key}`);
        }
    }
    return state;
}
/**
 * Schedules the routine to remove stale entries from `allEntries`.
 */
function scheduleClearCachedEntries() {
    if (clearCachedEntriesRequestId === 0) {
        clearCachedEntriesRequestId = requestIdleCallback(startClearCache);
    }
}
/** ID for the current scheduled `clearCachedEntries`. */
let clearCachedEntriesRequestId = 0;
/** Starts the action CLEAR_STALE_CACHED_ENTRIES.  */
function startClearCache() {
    const store = getStore();
    store.dispatch(clearCachedEntries());
    clearCachedEntriesRequestId = 0;
}
const prefetchPropertyNames = Array.from(new Set([
    ...LIST_CONTAINER_METADATA_PREFETCH_PROPERTY_NAMES,
    ...ACTIONS_MODEL_METADATA_PREFETCH_PROPERTY_NAMES,
    ...FILE_SELECTION_METADATA_PREFETCH_PROPERTY_NAMES,
    ...DLP_METADATA_PREFETCH_PROPERTY_NAMES,
]));
/** Get the icon for an entry. */
function getEntryIcon(entry, locationInfo, volumeType) {
    const url = entry.toURL();
    // Pre-defined icons based on the URL.
    const urlToIconPath = {
        [recentRootKey]: ICON_TYPES.RECENT,
        [myFilesEntryListKey]: ICON_TYPES.MY_FILES,
        [driveRootEntryListKey]: ICON_TYPES.SERVICE_DRIVE,
    };
    if (urlToIconPath[url]) {
        return urlToIconPath[url];
    }
    // Handle icons for grand roots ("Shared drives" and "Computers") in Drive.
    // Here we can't just use `fullPath` to check if an entry is a grand root or
    // not, because normal directory can also have the same full path. We also
    // need to check if the entry is a direct child of the drive root entry list.
    const grandRootPathToIconMap = {
        [COMPUTERS_DIRECTORY_PATH]: ICON_TYPES.COMPUTERS_GRAND_ROOT,
        [SHARED_DRIVES_DIRECTORY_PATH]: ICON_TYPES.SHARED_DRIVES_GRAND_ROOT,
    };
    if (volumeType === VolumeType.DRIVE &&
        grandRootPathToIconMap[entry.fullPath]) {
        return grandRootPathToIconMap[entry.fullPath];
    }
    // For grouped removable devices, its parent folder is an entry list, we
    // should use USB icon for it.
    if ('rootType' in entry && entry.rootType === RootType.REMOVABLE) {
        return ICON_TYPES.USB;
    }
    if (isVolumeEntry(entry) && entry.volumeInfo) {
        switch (entry.volumeInfo.volumeType) {
            case VolumeType.DOWNLOADS:
                return ICON_TYPES.MY_FILES;
            case VolumeType.SMB:
                return ICON_TYPES.SMB;
            case VolumeType.PROVIDED:
            // Fallthrough
            case VolumeType.DOCUMENTS_PROVIDER: {
                // Only return IconSet if there's valid background image generated.
                const iconSet = entry.volumeInfo.iconSet;
                if (iconSet) {
                    const backgroundImage = iconSetToCSSBackgroundImageValue(entry.volumeInfo.iconSet);
                    if (backgroundImage !== 'none') {
                        return iconSet;
                    }
                }
                // If no background is generated from IconSet, set the icon to the
                // generic one for certain volume type.
                if (volumeType && shouldProvideIcons(volumeType)) {
                    return ICON_TYPES.GENERIC;
                }
                return '';
            }
            case VolumeType.MTP:
                return ICON_TYPES.MTP;
            case VolumeType.ARCHIVE:
                return ICON_TYPES.ARCHIVE;
            case VolumeType.REMOVABLE:
                // For sub-partition from a removable volume, its children icon should
                // be UNKNOWN_REMOVABLE.
                return entry.volumeInfo.prefixEntry ? ICON_TYPES.UNKNOWN_REMOVABLE :
                    ICON_TYPES.USB;
            case VolumeType.DRIVE:
                return ICON_TYPES.DRIVE;
        }
    }
    return getIcon(entry, undefined, locationInfo?.rootType);
}
/**
 * Given an entry, check if its loading children should be delayed.
 * We are doing this for SMB to avoid potentially hanging whilst scanning a
 * large SMB file share and causing performance issues.
 */
function shouldDelayLoadingChildren(entry) {
    const { volumeManager } = window.fileManager;
    // When this function is triggered when mounting new volumes, volumeInfo is
    // not available in the VolumeManager yet, we need to get volumeInfo from the
    // entry itself.
    const volumeInfo = isVolumeEntry(entry) ? entry.volumeInfo :
        volumeManager.getVolumeInfo(entry);
    return volumeInfo?.source === Source.NETWORK &&
        volumeInfo.volumeType === VolumeType.SMB;
}
/**
 * Converts the entry to the Store representation of an Entry: FileData.
 */
function convertEntryToFileData(entry) {
    const { volumeManager, metadataModel } = window.fileManager;
    // When this function is triggered when mounting new volumes, volumeInfo is
    // not available in the VolumeManager yet, we need to get volumeInfo from the
    // entry itself.
    const volumeInfo = isVolumeEntry(entry) ? entry.volumeInfo :
        volumeManager.getVolumeInfo(entry);
    const locationInfo = volumeManager.getLocationInfo(entry);
    const label = getEntryLabel(locationInfo, entry);
    // For FakeEntry, we need to read from entry.volumeType because it doesn't
    // have volumeInfo in the volume manager.
    const volumeType = 'volumeType' in entry && entry.volumeType ?
        entry.volumeType :
        (volumeInfo?.volumeType || null);
    const volumeId = volumeInfo?.volumeId || null;
    const icon = getEntryIcon(entry, locationInfo, volumeType);
    /**
     * Update disabled attribute if entry supports disabled attribute and has a
     * non-null volumeType.
     */
    if ('disabled' in entry && volumeType) {
        entry.disabled = volumeManager.isDisabled(volumeType);
    }
    const metadata = metadataModel ?
        metadataModel.getCache([entry], prefetchPropertyNames)[0] :
        {};
    return {
        entry,
        icon,
        type: getEntryType(entry),
        isDirectory: entry.isDirectory,
        label,
        volumeId,
        rootType: locationInfo?.rootType ?? null,
        metadata,
        expanded: false,
        disabled: 'disabled' in entry ? entry.disabled : false,
        isRootEntry: !!locationInfo?.isRootEntry,
        // `isEjectable` is determined by its corresponding volume, will be updated
        // when volume is added.
        isEjectable: false,
        canExpand: shouldDelayLoadingChildren(entry),
        children: [],
    };
}
/**
 * Appends the entry to the Store.
 */
function appendEntry(state, entry) {
    const allEntries = state.allEntries || {};
    const key = entry.toURL();
    const existingFileData = allEntries[key] || {};
    // Some client code might dispatch actions based on
    // `volume.resolveDisplayRoot()` which is a DirectoryEntry instead of a
    // VolumeEntry. It's safe to ignore this entry because the data will be the
    // same as `existingFileData` and we don't want to convert from VolumeEntry to
    // DirectoryEntry.
    if (existingFileData.type === EntryType.VOLUME_ROOT &&
        getEntryType(entry) !== EntryType.VOLUME_ROOT) {
        return;
    }
    const fileData = convertEntryToFileData(entry);
    allEntries[key] = {
        ...fileData,
        // For existing entries already in the store, we want to keep the existing
        // value for the following fields. For example, for "expanded" entries with
        // expanded=true, we don't want to override it with expanded=false derived
        // from `convertEntryToFileData` function above.
        expanded: existingFileData.expanded ?? fileData.expanded,
        isEjectable: existingFileData.isEjectable ?? fileData.isEjectable,
        canExpand: existingFileData.canExpand ?? fileData.canExpand,
        // Keep children to prevent sudden removal of the children items on the UI.
        children: existingFileData.children ?? fileData.children,
    };
    state.allEntries = allEntries;
}
/**
 * Updates `FileData` from a `FileKey`.
 *
 * Note: the state will be updated in place.
 */
function updateFileDataInPlace(state, key, changes) {
    if (!state.allEntries[key]) {
        console.warn(`Entry FileData not found in the store: ${key}`);
        return;
    }
    const newFileData = {
        ...state.allEntries[key],
        ...changes,
    };
    state.allEntries[key] = newFileData;
    return newFileData;
}
/** Caches the Action's entry in the `allEntries` attribute. */
function cacheEntries(currentState, entries) {
    scheduleClearCachedEntries();
    for (const entry of entries) {
        appendEntry(currentState, entry);
    }
}
function getEntryType(entry) {
    // Entries from FilesAppEntry have the `typeName` property.
    if (!('typeName' in entry)) {
        return EntryType.FS_API;
    }
    switch (entry.typeName) {
        case 'EntryList':
            return EntryType.ENTRY_LIST;
        case 'VolumeEntry':
            return EntryType.VOLUME_ROOT;
        case 'FakeEntry':
            switch (entry.rootType) {
                case RootType.RECENT:
                    return EntryType.RECENT;
                case RootType.TRASH:
                    return EntryType.TRASH;
                case RootType.DRIVE_FAKE_ROOT:
                    return EntryType.ENTRY_LIST;
                case RootType.CROSTINI:
                case RootType.ANDROID_FILES:
                    return EntryType.PLACEHOLDER;
                case RootType.DRIVE_OFFLINE:
                case RootType.DRIVE_SHARED_WITH_ME:
                    // TODO(lucmult): This isn't really Recent but it's the closest.
                    return EntryType.RECENT;
            }
            console.warn(`Invalid fakeEntry.rootType='${entry.rootType} rootType`);
            return EntryType.PLACEHOLDER;
        case 'GuestOsPlaceholder':
            return EntryType.PLACEHOLDER;
        case 'TrashEntry':
            return EntryType.TRASH;
        default:
            console.warn(`Invalid entry.typeName='${entry.typeName}`);
            return EntryType.FS_API;
    }
}
/** Create action to update entries metadata. */
const updateMetadata = slice$b.addReducer('update-metadata', updateMetadataReducer);
function updateMetadataReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.metadata.map(m => m.entry));
    for (const entryMetadata of payload.metadata) {
        const key = entryMetadata.entry.toURL();
        const fileData = currentState.allEntries[key];
        const metadata = { ...fileData.metadata, ...entryMetadata.metadata };
        currentState.allEntries[key] = {
            ...fileData,
            metadata,
        };
    }
    if (!currentState.currentDirectory) {
        console.warn('Missing `currentDirectory`');
        return currentState;
    }
    const currentDirectory = {
        ...currentState.currentDirectory,
        hasDlpDisabledFiles: hasDlpDisabledFiles(currentState),
    };
    return {
        ...currentState,
        currentDirectory,
    };
}
function findVolumeByType(volumes, volumeType) {
    return Object.values(volumes).find(v => {
        // If the volume isn't resolved yet, we just ignore here.
        return v.rootKey && v.volumeType === volumeType;
    }) ??
        null;
}
/**
 * Returns the MyFiles entry and volume, the entry can either be a fake one
 * (EntryList) or a real one (VolumeEntry) depends on if the MyFiles volume is
 * mounted or not.
 * Note: it will create a fake EntryList in the store if there's no
 * MyFiles entry in the store (e.g. no EntryList and no VolumeEntry).
 */
function getMyFiles(state) {
    const { volumes } = state;
    const myFilesVolume = findVolumeByType(volumes, VolumeType.DOWNLOADS);
    const myFilesVolumeEntry = myFilesVolume ?
        getEntry$1(state, myFilesVolume.rootKey) :
        null;
    let myFilesEntryList = getEntry$1(state, myFilesEntryListKey);
    if (!myFilesVolumeEntry && !myFilesEntryList) {
        myFilesEntryList =
            new EntryList(str('MY_FILES_ROOT_LABEL'), RootType.MY_FILES);
        appendEntry(state, myFilesEntryList);
        state.uiEntries = [...state.uiEntries, myFilesEntryList.toURL()];
    }
    return {
        myFilesEntry: myFilesVolumeEntry || myFilesEntryList,
        myFilesVolume,
    };
}
/**  Create action to add child entries to a parent entry. */
const addChildEntries = slice$b.addReducer('add-children', addChildEntriesReducer);
function addChildEntriesReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.entries);
    const { parentKey, entries } = payload;
    const { allEntries } = currentState;
    // The corresponding parent entry item has been removed somehow, do nothing.
    if (!allEntries[parentKey]) {
        return currentState;
    }
    const newEntryKeys = entries.map(entry => entry.toURL());
    // Add children to the parent entry item.
    const parentFileData = {
        ...allEntries[parentKey],
        children: newEntryKeys,
    };
    return {
        ...currentState,
        allEntries: {
            ...allEntries,
            [parentKey]: parentFileData,
        },
    };
}
/**
 * Read sub directories for a given entry.
 */
async function* readSubDirectoriesInternal(entry, recursive = false, metricNameForTracking = '') {
    if (!isEntryScannable(entry)) {
        return;
    }
    // Track time for reading sub directories if metric for tracking is passed.
    if (metricNameForTracking) {
        startInterval(metricNameForTracking);
    }
    const childEntriesToReadDeeper = [];
    if (isDriveRootEntryList(entry)) {
        for await (const action of readSubDirectoriesForDriveRootEntryList(entry)) {
            yield action;
            if (action) {
                childEntriesToReadDeeper.push(...action.payload.entries);
            }
        }
    }
    else {
        const childEntries = await readChildEntriesByFullScan(entry);
        // Only dispatch directories.
        const subDirectories = childEntries.filter(childEntry => childEntry.isDirectory);
        yield addChildEntries({ parentKey: entry.toURL(), entries: subDirectories });
        childEntriesToReadDeeper.push(...subDirectories);
        // Fetch metadata if the entry supports Drive specific share icon.
        const state = getStore().getState();
        const parentFileData = getFileData(state, entry.toURL());
        if (parentFileData && isEntryInsideDrive(parentFileData)) {
            const entriesNeedMetadata = subDirectories.filter(subDirectory => {
                const fileData = getFileData(state, subDirectory.toURL());
                return fileData && shouldSupportDriveSpecificIcons(fileData);
            });
            if (entriesNeedMetadata.length > 0) {
                window.fileManager.metadataModel.get(entriesNeedMetadata, [
                    ...LIST_CONTAINER_METADATA_PREFETCH_PROPERTY_NAMES,
                    ...DLP_METADATA_PREFETCH_PROPERTY_NAMES,
                ]);
            }
        }
    }
    // Track time for reading sub directories if metric for tracking is passed.
    if (metricNameForTracking) {
        recordInterval(metricNameForTracking);
    }
    // Read sub directories for children when recursive is true.
    if (recursive) {
        const state = getStore().getState();
        // We only read deeper if the parent entry is expanded in the tree.
        const fileData = getFileData(state, entry.toURL());
        if (!fileData?.expanded) {
            return;
        }
        for (const childEntry of childEntriesToReadDeeper) {
            const childFileData = getFileData(state, childEntry.toURL());
            if (childFileData?.expanded) {
                // If child item is expanded, we need to do a full scan for it.
                for await (const action of readSubDirectories(childEntry, /* recursive= */ true)) {
                    yield action;
                }
            }
            else if (childFileData?.canExpand) {
                // If we already know the child item can be expanded, no partial scan is
                // required.
                continue;
            }
            else {
                // If the child item is not expanded, we do a partial scan to check if
                // it has children or not (so we know if we need to show expand icon
                // or not).
                for await (const action of readSubDirectoriesToCheckDirectoryChildren(childEntry)) {
                    yield action;
                }
            }
        }
    }
}
/**
 * When there are multiple `readSubDirectories` actions with the same key being
 * dispatched at the same time, we only keep the latest one.
 */
const readSubDirectories = keyedKeepLatest(readSubDirectoriesInternal, (entry, recursive, _metricNameForTracking) => entry ? `${entry.toURL()}${recursive ? '-recursive' : ''}` : '');
/**
 * Read entries for Drive root entry list (aka "Google Drive"), there are some
 * differences compared to the `readSubDirectoriesForDirectoryEntry`:
 * * We don't need to call readEntries to get its child entries. Instead, all
 * its children are from its entry.getUiChildren().
 * * For fake entries children (e.g. Shared with me and Offline), we only show
 * them based on the dialog type.
 * * For curtain children (e.g. team drives and computers grand root), we only
 * show them when there's at least one child entries inside. So we need to read
 * their children (grand children of drive fake root) first before we can decide
 * if we need to show them or not.
 */
async function* readSubDirectoriesForDriveRootEntryList(entry) {
    const metricNameMap = {
        [SHARED_DRIVES_DIRECTORY_PATH]: 'TeamDrivesCount',
        [COMPUTERS_DIRECTORY_PATH]: 'ComputerCount',
    };
    const driveChildren = entry.getUiChildren();
    /**
     * Store the filtered children, for fake entries or grand roots we might need
     * to hide them based on curtain conditions.
     */
    const filteredChildren = [];
    const isFakeEntryVisible = window.fileManager.dialogType !== DialogType.SELECT_SAVEAS_FILE;
    for (const childEntry of driveChildren) {
        // For fake entries ("Shared with me" and)
        if (isFakeEntryInDrives(childEntry)) {
            if (isFakeEntryVisible) {
                filteredChildren.push(childEntry);
            }
            continue;
        }
        // For non grand roots (also not fake entries), we put them in the children
        // directly and dispatch an action to read the it later.
        if (!isGrandRootEntryInDrives(childEntry)) {
            filteredChildren.push(childEntry);
            continue;
        }
        // For grand roots ("Shared drives" and "Computers") inside Drive, we only
        // show them when there's at least one child entries inside.
        const grandChildEntries = await readChildEntriesByFullScan(childEntry);
        recordSmallCount(metricNameMap[childEntry.fullPath], grandChildEntries.length);
        if (grandChildEntries.length > 0) {
            filteredChildren.push(childEntry);
        }
    }
    yield addChildEntries({ parentKey: entry.toURL(), entries: filteredChildren });
}
/**
 * Read a given directory entry to get all child entries.
 *
 * @param entry The parent directory entry to read.
 */
async function readChildEntriesByFullScan(entry) {
    const childEntries = [];
    for await (const partialEntries of readEntries(entry)) {
        childEntries.push(...partialEntries);
    }
    return sortEntries(entry, childEntries);
}
/**
 * Read a given directory entry to check if it has directory child entries or
 * not. It won't do full scanning, the scan stops immediately after finding a
 * child directory entry.
 *
 * @param entry The parent directory entry to read.
 */
async function checkDirectoryChildByPartialScan(entry) {
    const { directoryModel } = window.fileManager;
    const fileFilter = directoryModel.getFileFilter();
    const isDirectoryChild = (childEntry) => childEntry.isDirectory && fileFilter.filter(childEntry);
    for await (const partialEntries of readEntries(entry)) {
        if (partialEntries.some(isDirectoryChild)) {
            return true;
        }
    }
    return false;
}
/**
 * Read sub directories for a given entry to check if it has directory children
 * or not.
 */
async function* readSubDirectoriesToCheckDirectoryChildrenInternal(entry) {
    if (!isEntryScannable(entry)) {
        return;
    }
    const state = getStore().getState();
    const fileData = getFileData(state, entry.toURL());
    // Do nothing because we already know it has children.
    if (fileData && (fileData.children.length > 0 || fileData.canExpand)) {
        return;
    }
    const { directoryModel } = window.fileManager;
    const fileFilter = directoryModel.getFileFilter();
    const isDirectoryChild = (childEntry) => childEntry.isDirectory && fileFilter.filter(childEntry);
    // The entry has UIChildren but has no FileData.children, we know it can be
    // expanded.
    if (isEntrySupportUiChildren(entry) && entry.getUiChildren().length > 0) {
        const uiChildrenDirectories = entry.getUiChildren().filter(isDirectoryChild);
        if (uiChildrenDirectories.length > 0) {
            yield updateFileData({ key: entry.toURL(), partialFileData: { canExpand: true } });
        }
        return;
    }
    const hasDirectoryChild = await checkDirectoryChildByPartialScan(entry);
    if (hasDirectoryChild) {
        yield updateFileData({ key: entry.toURL(), partialFileData: { canExpand: true } });
    }
}
/**
 * When there are multiple `readSubDirectoriesToCheckDirectoryChildren`
 * actions with the same key being dispatched at the same time, we only keep
 * the latest one.
 */
const readSubDirectoriesToCheckDirectoryChildren = keyedKeepLatest(readSubDirectoriesToCheckDirectoryChildrenInternal, (entry) => entry ? entry.toURL() : '');
/**
 * Read child entries for the newly renamed directory entry.
 * We need to read its parent's children first before reading its own
 * children, because the newly renamed entry might not be in the store yet
 * after renaming.
 */
async function* readSubDirectoriesForRenamedEntry(newEntry) {
    const parentDirectory = await getParentEntry(newEntry);
    // Read the children of the parent first to make sure the newly added entry
    // appears in the store.
    for await (const action of readSubDirectories(parentDirectory)) {
        yield action;
    }
    // Read the children of the newly renamed entry.
    for await (const action of readSubDirectories(newEntry, /* recursive= */ true)) {
        yield action;
    }
}
/**
 * Traverse each entry in the `pathEntryKeys`: if the entry doesn't exist in
 * the store, read sub directories for its parent. After all entries exist in
 * the store, expand all parent entries.
 *
 * @param pathEntryKeys An array of FileKey starts from ancestor to child,
 *     e.g. [A, B, C] A is the parent entry of B, B is the parent entry of C.
 */
async function* traverseAndExpandPathEntriesInternal(pathEntryKeys) {
    if (pathEntryKeys.length === 0) {
        return;
    }
    const childEntryKey = pathEntryKeys[pathEntryKeys.length - 1];
    const state = getStore().getState();
    const childEntryFileData = getFileData(state, childEntryKey);
    if (!childEntryFileData) {
        console.warn(`Can not find the child entry: ${childEntryKey}`);
        return;
    }
    const volume = getVolume(state, childEntryFileData);
    if (!volume) {
        console.warn(`Can not find the volume root for the child entry: ${childEntryKey}`);
        return;
    }
    const volumeEntry = getEntry$1(state, volume.rootKey);
    if (!volumeEntry) {
        console.warn(`Can not find the volume root entry: ${volume.rootKey}`);
        return;
    }
    for (let i = 1; i < pathEntryKeys.length; i++) {
        // We need to getStore() for each loop because the below `yield action`
        // will add new entries to the store.
        const state = getStore().getState();
        const currentEntryKey = pathEntryKeys[i];
        const parentEntryKey = pathEntryKeys[i - 1];
        const parentEntry = getEntry$1(state, parentEntryKey);
        const parentFileData = getFileData(state, parentEntryKey);
        const fileData = getFileData(state, currentEntryKey);
        // Read sub directories if the child entry doesn't exist or it's not in
        // parent entry's children.
        if (!fileData || !parentFileData.children.includes(currentEntryKey)) {
            let foundCurrentEntry = false;
            for await (const action of readSubDirectories(parentEntry)) {
                yield action;
                const childEntries = action?.payload.entries || [];
                foundCurrentEntry =
                    !!childEntries.find(entry => entry.toURL() === currentEntryKey);
                if (foundCurrentEntry) {
                    break;
                }
            }
            if (!foundCurrentEntry) {
                console.warn(`Failed to find entry "${currentEntryKey}" from its parent "${parentEntryKey}"`);
                return;
            }
        }
    }
    // Now all entries on `pathEntryKeys` are found, we can expand all of them
    // now. Note: if any entry on the path can't be found, we don't expand
    // anything because we don't want to expand half-way, e.g. if `pathEntryKeys
    // = [entryA, entryB, entryC]` but somehow entryB doesn't exist, we don't
    // want to expand `entryA`.
    for (let i = 0; i < pathEntryKeys.length - 1; i++) {
        yield updateFileData({ key: pathEntryKeys[i], partialFileData: { expanded: true } });
    }
}
/**
 * `traverseAndExpandPathEntries` is mainly used to traverse and expand the
 * `pathComponent` for current directory, if concurrent requests happen (e.g.
 * current directory changes too quickly while we are still resolving the
 * previous one), we just ditch the previous request and only keep the latest.
 */
const traverseAndExpandPathEntries = keepLatest(traverseAndExpandPathEntriesInternal);
/** Create action to update FileData for a given entry. */
const updateFileData = slice$b.addReducer('update-file-data', updateFileDataReducer);
function updateFileDataReducer(currentState, payload) {
    const { key, partialFileData } = payload;
    const fileData = getFileData(currentState, key);
    if (!fileData) {
        return currentState;
    }
    currentState.allEntries[key] = {
        ...fileData,
        ...partialFileData,
    };
    return { ...currentState };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Android apps slice of the store.
 *
 * Android App is something we get from private API
 * `chrome.fileManagerPrivate.getAndroidPickerApps`, it will be shown as a
 * directory item in FilePicker mode.
 */
const slice$a = new Slice('androidApps');
/** Action factory to add all android app config to the store. */
const addAndroidApps = slice$a.addReducer('add', addAndroidAppsReducer);
function addAndroidAppsReducer(currentState, payload) {
    const androidApps = {};
    for (const app of payload.apps) {
        // For android app item, if no icon is derived from IconSet, set the icon to
        // the generic one.
        let icon = ICON_TYPES.GENERIC;
        if (app.iconSet) {
            const backgroundImage = iconSetToCSSBackgroundImageValue(app.iconSet);
            if (backgroundImage !== 'none') {
                icon = app.iconSet;
            }
        }
        androidApps[app.packageName] = {
            ...app,
            icon,
        };
    }
    return {
        ...currentState,
        androidApps,
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Bulk pinning slice of the store.
 *
 * BulkPinProgress is the current state of files that are being pinned when the
 * BulkPinning feature is enabled. During bulk pinning, all the users items in
 * My drive are pinned and kept available offline. This tracks the progress of
 * both the initial operation and any subsequent updates along with any error
 * states that may occur.
 */
const slice$9 = new Slice('bulkPinning');
/** Create action to update the bulk pin progress. */
const updateBulkPinProgress = slice$9.addReducer('set-progress', (state, bulkPinning) => ({
    ...state,
    bulkPinning,
}));

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Device slice of the store.
 */
const slice$8 = new Slice('device');
const updateDeviceConnectionState = slice$8.addReducer('set-connection-state', updateDeviceConnectionStateReducer$1);
function updateDeviceConnectionStateReducer$1(currentState, payload) {
    let device;
    // Device connection.
    if (payload.connection !== currentState.device.connection) {
        device = {
            ...currentState.device,
            connection: payload.connection,
        };
    }
    return device ? { ...currentState, device } : currentState;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Drive slice of the store.
 */
const slice$7 = new Slice('drive');
const updateDriveConnectionStatus = slice$7.addReducer('set-drive-connection-status', updateDriveConnectionStatusReducer);
function updateDriveConnectionStatusReducer(currentState, payload) {
    const drive = { ...currentState.drive };
    if (payload.type !== currentState.drive.connectionType) {
        drive.connectionType = payload.type;
    }
    if (payload.type ===
        chrome.fileManagerPrivate.DriveConnectionStateType.OFFLINE &&
        payload.reason !== currentState.drive.offlineReason) {
        drive.offlineReason = payload.reason;
    }
    else {
        drive.offlineReason = undefined;
    }
    return { ...currentState, drive };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$6 = new Slice('folderShortcuts');
/** Create action to refresh all folder shortcuts with provided ones. */
const refreshFolderShortcut = slice$6.addReducer('refresh', refreshFolderShortcutReducer);
function refreshFolderShortcutReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, payload.entries);
    return {
        ...currentState,
        folderShortcuts: payload.entries.map(entry => entry.toURL()),
    };
}
/** Create action to add a folder shortcut. */
const addFolderShortcut = slice$6.addReducer('add', addFolderShortcutReducer);
function addFolderShortcutReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, [payload.entry]);
    const { entry } = payload;
    const key = entry.toURL();
    const { folderShortcuts } = currentState;
    for (let i = 0; i < folderShortcuts.length; i++) {
        // Do nothing if the key is already existed.
        if (key === folderShortcuts[i]) {
            return currentState;
        }
        const shortcutEntry = getEntry$1(currentState, folderShortcuts[i]);
        // The folder shortcut array is sorted, the new item will be added just
        // before the first larger item.
        if (comparePath(shortcutEntry, entry) > 0) {
            return {
                ...currentState,
                folderShortcuts: [
                    ...folderShortcuts.slice(0, i),
                    key,
                    ...folderShortcuts.slice(i),
                ],
            };
        }
    }
    // If for loop is not returned, the key is not added yet, add it at the last.
    return {
        ...currentState,
        folderShortcuts: folderShortcuts.concat(key),
    };
}
/** Create action to remove a folder shortcut. */
const removeFolderShortcut = slice$6.addReducer('remove', removeFolderShortcutReducer);
function removeFolderShortcutReducer(currentState, payload) {
    const { key } = payload;
    const { folderShortcuts } = currentState;
    const isExisted = folderShortcuts.find(k => k === key);
    // Do nothing if the key is not existed.
    if (!isExisted) {
        return currentState;
    }
    return {
        ...currentState,
        folderShortcuts: folderShortcuts.filter(k => k !== key),
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const slice$5 = new Slice('launchParams');
function launchParamsReducer(state, launchParams) {
    const storedLaunchParams = state.launchParams || {};
    if (launchParams.dialogType !== storedLaunchParams.dialogType) {
        return { ...state, launchParams };
    }
    return state;
}
/**
 * Updates the stored launch parameters in the store based on the supplied data.
 */
const setLaunchParameters = slice$5.addReducer('set', launchParamsReducer);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Navigation slice of the store.
 */
const slice$4 = new Slice('navigation');
const sections = new Map();
// My Files.
sections.set(VolumeType.DOWNLOADS, NavigationSection.MY_FILES);
// Cloud.
sections.set(VolumeType.DRIVE, NavigationSection.CLOUD);
sections.set(VolumeType.SMB, NavigationSection.CLOUD);
sections.set(VolumeType.PROVIDED, NavigationSection.CLOUD);
sections.set(VolumeType.DOCUMENTS_PROVIDER, NavigationSection.CLOUD);
// Removable.
sections.set(VolumeType.REMOVABLE, NavigationSection.REMOVABLE);
sections.set(VolumeType.MTP, NavigationSection.REMOVABLE);
sections.set(VolumeType.ARCHIVE, NavigationSection.REMOVABLE);
/** Returns the entry for the volume's top-most prefix or the volume itself. */
function getPrefixEntryOrEntry(state, volume) {
    if (volume.prefixKey) {
        const entry = getEntry$1(state, volume.prefixKey);
        return entry;
    }
    if (volume.volumeType === VolumeType.DOWNLOADS) {
        return getMyFiles(state).myFilesEntry;
    }
    const entry = getEntry$1(state, volume.rootKey);
    return entry;
}
/**
 * Create action to refresh all navigation roots. This will clear all existing
 * navigation roots in the store and regenerate them with the current state
 * data.
 *
 * Navigation roots' Entries/Volumes will be ordered as below:
 *  1. Recents.
 *  2. Shortcuts.
 *  3. "My-Files" (grouping), actually Downloads volume.
 *  4. Google Drive.
 *  5. ODFS.
 *  6. SMBs
 *  7. Other FSP (File System Provider) (when mounted).
 *  8. Other volumes (MTP, ARCHIVE, REMOVABLE).
 *  9. Android apps.
 *  10. Trash.
 */
const refreshNavigationRoots = slice$4.addReducer('refresh-roots', refreshNavigationRootsReducer);
function refreshNavigationRootsReducer(currentState) {
    const { navigation: { roots: previousRoots }, folderShortcuts, androidApps, } = currentState;
    /** Roots in the desired order. */
    const roots = [];
    /** Set to avoid adding the same entry multiple times. */
    const processedEntryKeys = new Set();
    // 1. Add the Recent/Materialized view root.
    const recentRoot = previousRoots.find(root => root.key === recentRootKey);
    if (recentRoot) {
        roots.push(recentRoot);
        processedEntryKeys.add(recentRootKey);
    }
    else {
        const recentEntry = getEntry$1(currentState, recentRootKey);
        if (recentEntry) {
            roots.push({
                key: recentRootKey,
                section: NavigationSection.TOP,
                separator: false,
                type: NavigationType.RECENT,
            });
            processedEntryKeys.add(recentRootKey);
        }
    }
    // 2. Add the Shortcuts.
    // TODO: Since Shortcuts are only for Drive, do we need to remove shortcuts
    // if Drive isn't available anymore?
    folderShortcuts.forEach(shortcutKey => {
        const shortcutEntry = getEntry$1(currentState, shortcutKey);
        if (shortcutEntry) {
            roots.push({
                key: shortcutKey,
                section: NavigationSection.TOP,
                separator: false,
                type: NavigationType.SHORTCUT,
            });
            processedEntryKeys.add(shortcutKey);
        }
    });
    // 3. MyFiles
    const { myFilesEntry, myFilesVolume } = getMyFiles(currentState);
    roots.push({
        key: myFilesEntry.toURL(),
        section: NavigationSection.MY_FILES,
        // Only show separator if this is not the first navigation item.
        separator: processedEntryKeys.size > 0,
        type: myFilesVolume ? NavigationType.VOLUME : NavigationType.ENTRY_LIST,
    });
    processedEntryKeys.add(myFilesEntry.toURL());
    // 4. Add Google Drive - the only Drive.
    // When drive pref changes from enabled to disabled, we remove the drive root
    // key from the `state.uiEntries` immediately, but the drive root entry itself
    // is removed asynchronously, so here we need to check both, if the key
    // doesn't exist any more, we shouldn't render Drive item even if the drive
    // root entry is still available.
    const driveEntryKeyExist = currentState.uiEntries.includes(driveRootEntryListKey);
    const driveEntry = getEntry$1(currentState, driveRootEntryListKey);
    if (driveEntryKeyExist && driveEntry) {
        roots.push({
            key: driveEntry.toURL(),
            section: NavigationSection.GOOGLE_DRIVE,
            separator: true,
            type: NavigationType.DRIVE,
        });
        processedEntryKeys.add(driveEntry.toURL());
    }
    // 5/6/7/8 Other volumes.
    const volumesOrder = {
        // ODFS is a PROVIDED volume type but is a special case to be directly
        // below Drive.
        // ODFS : 0
        [VolumeType.SMB]: 1,
        [VolumeType.PROVIDED]: 2, // FSP.
        [VolumeType.DOCUMENTS_PROVIDER]: 3,
        [VolumeType.REMOVABLE]: 4,
        [VolumeType.ARCHIVE]: 5,
        [VolumeType.MTP]: 6,
    };
    // Filter volumes based on the volumeInfoList in volumeManager.
    const { volumeManager } = window.fileManager;
    const filteredVolumes = Object.values(currentState.volumes).filter(volume => {
        const volumeEntry = getEntry$1(currentState, volume.rootKey);
        return volumeManager.isAllowedVolume(volumeEntry.volumeInfo);
    });
    function getVolumeOrder(volume) {
        if (isOneDriveId(volume.providerId)) {
            return 0;
        }
        return volumesOrder[volume.volumeType] ?? 999;
    }
    const volumes = filteredVolumes
        .filter((v) => {
        return (
        // Only display if the entry is resolved.
        v.rootKey &&
            // MyFiles and Drive is already displayed above.
            // MediaView volumeType isn't displayed.
            !(v.volumeType === VolumeType.DOWNLOADS ||
                v.volumeType === VolumeType.DRIVE ||
                v.volumeType === VolumeType.MEDIA_VIEW));
    })
        .sort((v1, v2) => {
        const v1Order = getVolumeOrder(v1);
        const v2Order = getVolumeOrder(v2);
        return v1Order - v2Order;
    });
    let lastSection = null;
    for (const volume of volumes) {
        // Some volumes might be nested inside another volume or entry list, e.g.
        // Multiple partition removable volumes can be nested inside a EntryList, or
        // GuestOS/Crostini/Android volumes will be nested inside MyFiles, for these
        // volumes, we only need to add its parent volume in the navigation roots.
        const volumeEntry = getPrefixEntryOrEntry(currentState, volume);
        if (volumeEntry && !processedEntryKeys.has(volumeEntry.toURL())) {
            let section = sections.get(volume.volumeType) ?? NavigationSection.REMOVABLE;
            if (isOneDriveId(volume.providerId)) {
                section = NavigationSection.ODFS;
            }
            const isSectionStart = section !== lastSection;
            roots.push({
                key: volumeEntry.toURL(),
                section,
                separator: isSectionStart,
                type: NavigationType.VOLUME,
            });
            processedEntryKeys.add(volumeEntry.toURL());
            lastSection = section;
        }
    }
    // 9. Android Apps.
    Object.values(androidApps)
        .forEach((app, index) => {
        roots.push({
            key: app.packageName,
            section: NavigationSection.ANDROID_APPS,
            separator: index === 0,
            type: NavigationType.ANDROID_APPS,
        });
        processedEntryKeys.add(app.packageName);
    });
    // 10. Trash
    // Trash should only show when Files app is open as a standalone app. The ARC
    // file selector, however, opens Files app as a standalone app but passes a
    // query parameter to indicate the mode. As Trash is a fake volume, it is
    // not filtered out in the filtered volume manager so perform it here
    // instead.
    const { dialogType } = window.fileManager;
    const shouldShowTrash = dialogType === DialogType.FULL_PAGE &&
        !volumeManager.getMediaStoreFilesOnlyFilterEnabled();
    // When trash pref changes from enabled to disabled, we remove the trash root
    // key from the `state.uiEntries` immediately, but the trash entry itself is
    // removed asynchronously, so here we need to check both, if the key doesn't
    // exist any more, we shouldn't render Trash item even if the trash entry is
    // still available.
    const trashEntryKeyExist = currentState.uiEntries.includes(trashRootKey);
    const trashEntry = getEntry$1(currentState, trashRootKey);
    if (shouldShowTrash && trashEntryKeyExist && trashEntry) {
        roots.push({
            key: trashRootKey,
            section: NavigationSection.TRASH,
            separator: true,
            type: NavigationType.TRASH,
        });
        processedEntryKeys.add(trashRootKey);
    }
    return {
        ...currentState,
        navigation: {
            roots,
        },
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Chrome preferences slice of the store.
 *
 * Chrome preferences store user data that is persisted to disk OR across
 * profiles, this takes care of initially populating these values then keeping
 * them updated on dynamic changes.
 */
const slice$3 = new Slice('preferences');
/**
 * A type guard to see if the payload supplied is a change of preferences or the
 * entire preferences object. Useful in ensuring subsequent type checks are done
 * on the correct type (instead of the union type).
 */
function isPreferencesChange(payload) {
    // The field `driveEnabled` is only on a `Preferences` object, so if this is
    // undefined the payload is a `PreferencesChange` object otherwise it's a
    // `Preferences` object.
    if (payload.driveEnabled !== undefined) {
        return false;
    }
    return true;
}
/**
 * Only update the existing preferences with their new values if they are
 * defined. In the event of spreading the change event over the existing
 * preferences, undefined values should not overwrite their existing values.
 */
function updateIfDefined(updatedPreferences, newPreferences, key) {
    if (!(key in newPreferences) || newPreferences[key] === undefined) {
        return false;
    }
    if (updatedPreferences[key] === newPreferences[key]) {
        return false;
    }
    // We're updating the `Preferences` original here and it doesn't type union
    // well with `PreferencesChange`. Given we've done all the type validation
    // above, cast them both to the `Preferences` type to ensure subsequent
    // updates can work.
    updatedPreferences[key] =
        newPreferences[key];
    return true;
}
/** Create action to update user preferences. */
const updatePreferences = slice$3.addReducer('set', updatePreferencesReducer);
function updatePreferencesReducer(currentState, payload) {
    const preferences = payload;
    // This action takes two potential payloads:
    //  - chrome.fileManagerPrivate.Preferences
    //  - chrome.fileManagerPrivate.PreferencesChange
    // Both of these have different type requirements. If we receive a
    // `Preferences` update, just store the data directly in the store. If we
    // receive a `PreferencesChange` the individual fields need to be checked to
    // ensure they are different to what we have in the store AND they won't
    // remove the existing data (i.e. they are not null or undefined).
    if (!isPreferencesChange(preferences)) {
        return {
            ...currentState,
            preferences,
        };
    }
    const updatedPreferences = { ...currentState.preferences };
    const keysToCheck = [
        'driveSyncEnabledOnMeteredNetwork',
        'arcEnabled',
        'arcRemovableMediaAccessEnabled',
        'folderShortcuts',
        'driveFsBulkPinningEnabled',
    ];
    let updated = false;
    for (const key of keysToCheck) {
        updated = updateIfDefined(updatedPreferences, preferences, key) || updated;
    }
    // If no keys have been updated in the preference change, then send back the
    // original state as nothing has changed.
    if (!updated) {
        return currentState;
    }
    return {
        ...currentState,
        preferences: updatedPreferences,
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Search slice of the store.
 */
const slice$2 = new Slice('search');
/**
 * Returns if the given search data represents empty (cleared) search.
 */
function isSearchEmpty(search) {
    return Object.values(search).every(f => f === undefined);
}
/**
 * Helper function that does a deep comparison between two SearchOptions.
 */
function optionsChanged(stored, fresh) {
    if (fresh === undefined) {
        // If fresh options are undefined, that means keep the stored options. No
        // matter what the stored options are, we are saying they have not changed.
        return false;
    }
    if (stored === undefined) {
        return true;
    }
    return fresh.location !== stored.location ||
        fresh.recency !== stored.recency ||
        fresh.fileCategory !== stored.fileCategory;
}
const setSearchParameters = slice$2.addReducer('set', searchReducer);
function searchReducer(state, payload) {
    const blankSearch = {
        query: undefined,
        status: undefined,
        options: undefined,
    };
    // Special case: if none of the fields are set, the action clears the search
    // state in the store.
    if (isSearchEmpty(payload)) {
        // Only change the state if the stored value has some defined values.
        if (state.search && !isSearchEmpty(state.search)) {
            return {
                ...state,
                search: blankSearch,
            };
        }
        return state;
    }
    const currentSearch = state.search || blankSearch;
    // Create a clone of current search. We must not modify the original object,
    // as store customers are free to cache it and check for changes. If we modify
    // the original object the check for changes incorrectly return false.
    const search = { ...currentSearch };
    let changed = false;
    if (payload.query !== undefined && payload.query !== currentSearch.query) {
        search.query = payload.query;
        changed = true;
    }
    if (payload.status !== undefined && payload.status !== currentSearch.status) {
        search.status = payload.status;
        changed = true;
    }
    if (optionsChanged(currentSearch.options, payload.options)) {
        search.options = { ...payload.options };
        changed = true;
    }
    return changed ? { ...state, search } : state;
}
/**
 * Generates a search action based on the supplied data.
 * Query, status and options can be adjusted independently of each other.
 */
const updateSearch = (data) => setSearchParameters({
    query: data.query,
    status: data.status,
    options: data.options,
});
/**
 * Create action to clear all search settings.
 */
const clearSearch = () => setSearchParameters({
    query: undefined,
    status: undefined,
    options: undefined,
});
/**
 * Search options to be used if the user did not specify their own.
 */
function getDefaultSearchOptions() {
    return {
        location: SearchLocation.THIS_FOLDER,
        recency: SearchRecency.ANYTIME,
        fileCategory: chrome.fileManagerPrivate.FileCategory.ALL,
    };
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview UI entries slice of the store.
 *
 * UI entries represents entries shown on UI only (aka FakeEntry, e.g.
 * Recents/Trash/Google Drive wrapper), they don't have a real entry backup in
 * the file system.
 */
const slice$1 = new Slice('uiEntries');
const uiEntryRootTypesInMyFiles = new Set([
    RootType.ANDROID_FILES,
    RootType.CROSTINI,
    RootType.GUEST_OS,
]);
/** Create action to add an UI entry to the store. */
const addUiEntryInternal = slice$1.addReducer('add', addUiEntryReducer);
function addUiEntryReducer(currentState, payload) {
    // Cache entries, so the reducers can use any entry from `allEntries`.
    cacheEntries(currentState, [payload.entry]);
    const { entry } = payload;
    const key = entry.toURL();
    const uiEntries = [...currentState.uiEntries, key];
    return {
        ...currentState,
        uiEntries,
    };
}
/**
 * Add UI entry to the store and re-scan MyFiles if the newly added UI entry is
 * under MyFiles.
 */
async function* addUiEntry(entry) {
    const state = getStore().getState();
    const exists = state.uiEntries.find(key => key === entry.toURL());
    if (exists) {
        return;
    }
    // If the UI entry to be added is under MyFiles, we also need to update
    // MyFiles's UI children.
    let isVolumeEntryInMyFiles = false;
    if (entry.rootType && uiEntryRootTypesInMyFiles.has(entry.rootType)) {
        const { myFilesEntry } = getMyFiles(state);
        const children = myFilesEntry.getUiChildren();
        // Check if the the ui entry already has a corresponding volume entry.
        isVolumeEntryInMyFiles = !!children.find(childEntry => isVolumeEntry(childEntry) && childEntry.name === entry.name);
        const isUiEntryInMyFiles = !!children.find(childEntry => isSameEntry(childEntry, entry));
        // We only add the UI entry here if:
        // 1. it does not exist in MyFiles entry's UI children.
        // 2. its corresponding volume (which ui entry is a placeholder for) does
        // not exist in MyFiles entry's UI children.
        const shouldAddUiEntry = !isUiEntryInMyFiles && !isVolumeEntryInMyFiles;
        if (shouldAddUiEntry) {
            myFilesEntry.addEntry(entry);
            yield addUiEntryInternal({ entry });
            // Get MyFiles again from the latest state after yield because yield pause
            // the execution of this function and between the pause MyFiles might
            // change from EntryList to Volume (e.g. MyFiles volume mounts during the
            // pause).
            const { myFilesEntry: updatedMyFiles } = getMyFiles(getStore().getState());
            // Trigger a re-scan for MyFiles to make FileData.children in the store
            // has this newly added children.
            for await (const action of readSubDirectories(updatedMyFiles)) {
                yield action;
            }
            return;
        }
    }
    if (!isVolumeEntryInMyFiles) {
        yield addUiEntryInternal({ entry });
    }
}
/** Create action to remove an UI entry from the store. */
const removeUiEntryInternal = slice$1.addReducer('remove', removeUiEntryReducer);
function removeUiEntryReducer(currentState, payload) {
    const { key } = payload;
    const uiEntries = currentState.uiEntries.filter(k => k !== key);
    return {
        ...currentState,
        uiEntries,
    };
}
/**
 * Remove UI entry from the store and re-scan MyFiles if the removed UI entry is
 * under MyFiles.
 */
async function* removeUiEntry(key) {
    const state = getStore().getState();
    const exists = state.uiEntries.find(uiEntryKey => uiEntryKey === key);
    if (!exists) {
        return;
    }
    yield removeUiEntryInternal({ key });
    const entry = getEntry$1(state, key);
    // We also need to remove it from the children of MyFiles if it's existed
    // there.
    if (entry?.rootType && uiEntryRootTypesInMyFiles.has(entry.rootType)) {
        // Get MyFiles from the latest state after yield because yield pause
        // the execution of this function and between the pause MyFiles might
        // change.
        const { myFilesEntry } = getMyFiles(getStore().getState());
        const children = myFilesEntry.getUiChildren();
        const isUiEntryInMyFiles = !!children.find(childEntry => isSameEntry(childEntry, entry));
        if (isUiEntryInMyFiles) {
            myFilesEntry.removeChildEntry(entry);
            // Trigger a re-scan for MyFiles to make FileData.children in the store
            // removes this children.
            for await (const action of readSubDirectories(myFilesEntry)) {
                yield action;
            }
        }
    }
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Store singleton instance.
 * It's only exposed via `getStore()` to guarantee it's a single instance.
 * TODO(b/272120634): Use window.store temporarily, uncomment below code after
 * the duplicate store issue is resolved.
 */
// let store: null|Store = null;
/**
 * Returns the singleton instance for the Files app's Store.
 *
 * NOTE: This doesn't guarantee the Store's initialization. This should be done
 * at the app's main entry point.
 */
function getStore() {
    // TODO(b/272120634): Put the store on window to prevent Store being created
    // twice.
    if (!window.store) {
        window.store = new BaseStore(getEmptyState(), [
            slice$2,
            slice,
            slice$9,
            slice$1,
            slice$a,
            slice$6,
            slice$4,
            slice$3,
            slice$8,
            slice$7,
            slice$c,
            slice$b,
            slice$5,
        ]);
    }
    return window.store;
}
function getEmptyState() {
    // TODO(b/241707820): Migrate State to allow optional attributes.
    return {
        allEntries: {},
        currentDirectory: undefined,
        device: {
            connection: chrome.fileManagerPrivate.DeviceConnectionState.ONLINE,
        },
        drive: {
            connectionType: chrome.fileManagerPrivate.DriveConnectionStateType.ONLINE,
            offlineReason: undefined,
        },
        search: {
            query: undefined,
            status: undefined,
            options: undefined,
        },
        navigation: {
            roots: [],
        },
        volumes: {},
        uiEntries: [],
        folderShortcuts: [],
        androidApps: {},
        bulkPinning: undefined,
        preferences: undefined,
        launchParams: {
            dialogType: undefined,
        },
    };
}
/**
 * Promise resolved when the store's state in an desired condition.
 *
 * For each Store update the `checker` function is called, when it returns True
 * the promise is resolved.
 *
 * Resolves with the State when it's in the desired condition.
 */
async function waitForState(store, checker) {
    // Check if the store is already in the desired state.
    if (checker(store.getState())) {
        return store.getState();
    }
    return new Promise((resolve) => {
        const observer = {
            onStateChanged(newState) {
                if (checker(newState)) {
                    resolve(newState);
                    store.unsubscribe(this);
                }
            },
        };
        store.subscribe(observer);
    });
}
/**
 * Returns the `FileData` from a FileKey.
 */
function getFileData(state, key) {
    const fileData = state.allEntries[key];
    if (fileData) {
        return fileData;
    }
    return null;
}
/**
 * Returns FileData for each key.
 * NOTE: It might return less results than the requested keys when the key isn't
 * found.
 */
function getFilesData(state, keys) {
    const filesData = [];
    for (const key of keys) {
        const fileData = getFileData(state, key);
        if (fileData) {
            filesData.push(fileData);
        }
    }
    return filesData;
}
function getEntry$1(state, key) {
    const fileData = state.allEntries[key];
    return fileData?.entry ?? null;
}
function getVolume(state, fileData) {
    const volumeId = fileData?.volumeId;
    return (volumeId && state.volumes[volumeId]) || null;
}
function getVolumeType(state, fileData) {
    return getVolume(state, fileData)?.volumeType ?? null;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Volumes slice of the store.
 */
const slice = new Slice('volumes');
const myFilesEntryListKey = `entry-list://${RootType.MY_FILES}`;
const crostiniPlaceHolderKey = `fake-entry://${RootType.CROSTINI}`;
`fake-entry://${RootType.DRIVE_FAKE_ROOT}`;
const recentRootKey = `fake-entry://${RootType.RECENT}/all`;
const trashRootKey = `fake-entry://${RootType.TRASH}`;
const driveRootEntryListKey = `entry-list://${RootType.DRIVE_FAKE_ROOT}`;
const makeRemovableParentKey = (volume) => {
    // Should be consistent with EntryList's toURL() method.
    if (volume.devicePath) {
        return `entry-list://${RootType.REMOVABLE}/${volume.devicePath}`;
    }
    return `entry-list://${RootType.REMOVABLE}`;
};
const removableGroupKey = (volume) => `${volume.devicePath}/${volume.driveLabel}`;
function getVolumeTypesNestedInMyFiles() {
    const myFilesNestedVolumeTypes = new Set([
        VolumeType.ANDROID_FILES,
        VolumeType.CROSTINI,
    ]);
    if (isGuestOsEnabled()) {
        myFilesNestedVolumeTypes.add(VolumeType.GUEST_OS);
    }
    return myFilesNestedVolumeTypes;
}
/**
 * Convert VolumeInfo and VolumeMetadata to its store representation: Volume.
 */
function convertVolumeInfoAndMetadataToVolume(volumeInfo, volumeMetadata) {
    /**
     * FileKey for the volume root's Entry. Or how do we find the Entry for this
     * volume in the allEntries.
     */
    const volumeRootKey = volumeInfo.displayRoot.toURL();
    return {
        volumeId: volumeMetadata.volumeId,
        volumeType: volumeMetadata.volumeType,
        rootKey: volumeRootKey,
        status: PropStatus.SUCCESS,
        label: volumeInfo.label,
        error: volumeMetadata.mountCondition,
        deviceType: volumeMetadata.deviceType,
        devicePath: volumeMetadata.devicePath,
        isReadOnly: volumeMetadata.isReadOnly,
        isReadOnlyRemovableDevice: volumeMetadata.isReadOnlyRemovableDevice,
        providerId: volumeMetadata.providerId,
        configurable: volumeMetadata.configurable,
        watchable: volumeMetadata.watchable,
        source: volumeMetadata.source,
        diskFileSystemType: volumeMetadata.diskFileSystemType,
        iconSet: volumeMetadata.iconSet,
        driveLabel: volumeMetadata.driveLabel,
        vmType: volumeMetadata.vmType,
        isDisabled: false,
        // FileKey to volume's parent in the Tree.
        prefixKey: undefined,
        // A volume is by default interactive unless explicitly made
        // non-interactive.
        isInteractive: true,
    };
}
/**
 * Updates a volume from the store.
 */
function updateVolume(state, volumeId, changes) {
    const volume = state.volumes[volumeId];
    if (!volume) {
        console.warn(`Volume not found in the store: ${volumeId}`);
        return;
    }
    return {
        ...volume,
        ...changes,
    };
}
/** Create action to add a volume. */
const addVolume = slice.addReducer('add', addVolumeReducer);
function addVolumeReducer(currentState, payload) {
    const { volumeMetadata, volumeInfo } = payload;
    if (!volumeInfo.fileSystem) {
        console.error('Only add to the store volumes that have successfully resolved.');
        return currentState;
    }
    // Cache entries, so the reducers can use any entry from `allEntries`.
    const newVolumeEntry = new VolumeEntry(payload.volumeInfo);
    cacheEntries(currentState, [newVolumeEntry]);
    const volumeRootKey = newVolumeEntry.toURL();
    // Update isEjectable fields in the FileData.
    currentState.allEntries[volumeRootKey] = {
        ...currentState.allEntries[volumeRootKey],
        isEjectable: (volumeInfo.source === Source.DEVICE &&
            volumeInfo.volumeType !== VolumeType.MTP) ||
            volumeInfo.source === Source.FILE,
    };
    const volume = convertVolumeInfoAndMetadataToVolume(volumeInfo, volumeMetadata);
    // Use volume entry's disabled property because that one is derived from
    // volume manager.
    volume.isDisabled = !!newVolumeEntry.disabled;
    // Handles volumes nested inside MyFiles.
    // It creates a placeholder for MyFiles if MyFiles volume isn't mounted yet.
    const myFilesNestedVolumeTypes = getVolumeTypesNestedInMyFiles();
    const { myFilesEntry } = getMyFiles(currentState);
    // For volumes which are supposed to be nested inside MyFiles (e.g. Android,
    // Crostini, GuestOS), we need to nest them into MyFiles and remove the
    // placeholder fake entry if existed.
    if (myFilesNestedVolumeTypes.has(volume.volumeType)) {
        volume.prefixKey = myFilesEntry.toURL();
        const myFilesEntryKey = myFilesEntry.toURL();
        // Shallow copy here because we will update this object directly below, and
        // the same object might be referenced in the UI.
        const myFilesFileData = { ...getFileData(currentState, myFilesEntryKey) };
        // Nest the entry for the new volume info in MyFiles.
        const uiEntryPlaceholder = myFilesEntry.getUiChildren().find(childEntry => childEntry.name === newVolumeEntry.name);
        // Remove a placeholder for the currently mounting volume.
        if (uiEntryPlaceholder) {
            myFilesEntry.removeChildEntry(uiEntryPlaceholder);
            // Also remove it from the children field.
            myFilesFileData.children = myFilesFileData.children.filter(childKey => childKey !== uiEntryPlaceholder.toURL());
            // Do not remove the placeholder ui entry from the store. Removing it from
            // the MyFiles is sufficient to prevent it from showing in the directory
            // tree. We keep it in the store (`currentState["uiEntries"]`) because
            // when the corresponding volume unmounts, we need to use its existence to
            // decide if we need to re-add the placeholder back to MyFiles.
        }
        appendChildIfNotExisted(myFilesEntry, newVolumeEntry);
        // Push the new entry to the children of FileData and sort them.
        if (!myFilesFileData.children.find(childKey => childKey === volumeRootKey)) {
            const newChildren = [...myFilesFileData.children, volumeRootKey];
            const childEntries = newChildren.map(childKey => getEntry$1(currentState, childKey));
            myFilesFileData.children =
                sortEntries(myFilesEntry, childEntries).map(entry => entry.toURL());
        }
        currentState.allEntries[myFilesEntryKey] = myFilesFileData;
    }
    // When we manipulate the children below, we need to update both
    // `entry.children_` (usually via `appendChildIfNotExisted/removeChildEntry`)
    // and also `FileData.children`. This is specific for the purpose of Directory
    // tree rendering, the tree item only fetch its sub directories on the first
    // render or when it's being expanded, if a volume mount introduces new
    // children (e.g. Drive volume and its children), the Tree UI doesn't know it
    // needs to be re-fetch sub directories because no file watcher event is
    // triggered for certain cases, hence updating the `FileData.children` here.
    // Handles MyFiles volume.
    // It nests the Android, Crostini & GuestOSes inside MyFiles.
    if (volume.volumeType === VolumeType.DOWNLOADS) {
        for (const v of Object.values(currentState.volumes)) {
            if (myFilesNestedVolumeTypes.has(v.volumeType)) {
                v.prefixKey = volumeRootKey;
            }
        }
        // Do not use myFilesEntry above, because at this moment both fake MyFiles
        // and real MyFiles are in the store.
        const myFilesEntryList = getEntry$1(currentState, myFilesEntryListKey);
        if (myFilesEntryList) {
            // We need to copy the children of the entry list to the real volume
            // entry.
            const uiChildren = [...myFilesEntryList.getUiChildren()];
            for (const childEntry of uiChildren) {
                appendChildIfNotExisted(newVolumeEntry, childEntry);
                myFilesEntryList.removeChildEntry(childEntry);
            }
            // Also copy the FileData children of the entry list to the real volume
            // entry.
            const myFilesEntryListFileData = getFileData(currentState, myFilesEntryListKey);
            const myFilesVolumeEntryFileData = getFileData(currentState, volumeRootKey);
            currentState.allEntries[volumeRootKey] = {
                ...myFilesVolumeEntryFileData,
                children: [...myFilesEntryListFileData.children],
            };
            // Remove MyFiles entry list from the uiEntries.
            currentState.uiEntries = currentState.uiEntries.filter(uiEntryKey => uiEntryKey !== myFilesEntryListKey);
        }
    }
    // Handles Drive volume.
    // It nests the Drive root (aka MyDrive) inside a EntryList for "Google
    // Drive", and also the fake entries for "Offline" and "Shared with me".
    if (volume.volumeType === VolumeType.DRIVE) {
        let driveFakeRoot = getEntry$1(currentState, driveRootEntryListKey);
        if (!driveFakeRoot) {
            driveFakeRoot =
                new EntryList(str('DRIVE_DIRECTORY_LABEL'), RootType.DRIVE_FAKE_ROOT);
            cacheEntries(currentState, [driveFakeRoot]);
        }
        // When Drive is disabled via pref change, the root key in `uiEntries` will
        // be removed immediately but the corresponding entry in `allEntries` is
        // removed asynchronously. When Drive is enabled again, it's possible the
        // entry is still in `allEntries` but we don't have root key in `uiEntries`.
        if (!currentState.uiEntries.includes(driveFakeRoot.toURL())) {
            currentState.uiEntries =
                [...currentState.uiEntries, driveFakeRoot.toURL()];
        }
        const driveRootFileDataChildren = [];
        appendChildIfNotExisted(driveFakeRoot, newVolumeEntry);
        driveRootFileDataChildren.push(volumeRootKey);
        // We want the order to be
        // - My Drive
        // - Shared Drives (if the user has any)
        // - Computers (if the user has any)
        // - Shared with me
        // - Offline
        const { sharedDriveDisplayRoot, computersDisplayRoot, fakeEntries } = volumeInfo;
        // Add "Shared drives" (team drives) grand root into Drive. It's guaranteed
        // to be resolved at this moment because ADD_VOLUME action will only be
        // triggered after resolving all roots.
        if (sharedDriveDisplayRoot) {
            cacheEntries(currentState, [sharedDriveDisplayRoot]);
            appendChildIfNotExisted(driveFakeRoot, sharedDriveDisplayRoot);
            // Do not add Shared drives to the FileData children, as we should only
            // show it in the navigation when it has children inside.
        }
        // Add "Computer" grand root into Drive. It's guaranteed to be resolved at
        // this moment because ADD_VOLUME action will only be triggered after
        // resolving all roots.
        if (computersDisplayRoot) {
            cacheEntries(currentState, [computersDisplayRoot]);
            appendChildIfNotExisted(driveFakeRoot, computersDisplayRoot);
            // Do not add Computers to the FileData children, as we should only show
            // it in the navigation when it has children inside.
        }
        // Add "Shared with me" into Drive.
        const fakeSharedWithMe = fakeEntries[RootType.DRIVE_SHARED_WITH_ME];
        if (fakeSharedWithMe) {
            cacheEntries(currentState, [fakeSharedWithMe]);
            currentState.uiEntries =
                [...currentState.uiEntries, fakeSharedWithMe.toURL()];
            appendChildIfNotExisted(driveFakeRoot, fakeSharedWithMe);
            driveRootFileDataChildren.push(fakeSharedWithMe.toURL());
        }
        // Add "Offline" into Drive.
        const fakeOffline = fakeEntries[RootType.DRIVE_OFFLINE];
        if (fakeOffline) {
            cacheEntries(currentState, [fakeOffline]);
            currentState.uiEntries = [...currentState.uiEntries, fakeOffline.toURL()];
            appendChildIfNotExisted(driveFakeRoot, fakeOffline);
            driveRootFileDataChildren.push(fakeOffline.toURL());
        }
        currentState.allEntries[driveRootEntryListKey] = {
            ...getFileData(currentState, driveRootEntryListKey),
            children: driveRootFileDataChildren,
        };
        volume.prefixKey = driveFakeRoot.toURL();
    }
    // Handles Removable volume.
    // It may nest in a EntryList if one device has multiple partitions.
    if (volume.volumeType === VolumeType.REMOVABLE) {
        const groupingKey = removableGroupKey(volumeMetadata);
        // When the flag is on, we always group removable volume even there's only 1
        // partition, otherwise the group only happens when there are more than 1
        // partition in the same device.
        const shouldGroup = isSinglePartitionFormatEnabled() ?
            true :
            Object.values(currentState.volumes).some(v => {
                return (v.volumeType === VolumeType.REMOVABLE &&
                    removableGroupKey(v) === groupingKey &&
                    v.volumeId !== volumeInfo.volumeId);
            });
        if (shouldGroup) {
            const parentKey = makeRemovableParentKey(volumeMetadata);
            let parentEntry = getEntry$1(currentState, parentKey);
            if (!parentEntry) {
                parentEntry = new EntryList(volumeMetadata.driveLabel || '', RootType.REMOVABLE, volumeMetadata.devicePath);
                cacheEntries(currentState, [parentEntry]);
                currentState.uiEntries =
                    [...currentState.uiEntries, parentEntry.toURL()];
            }
            const partitionChildEntries = [];
            // Update the siblings too.
            Object.values(currentState.volumes)
                .filter(v => v.volumeType === VolumeType.REMOVABLE &&
                removableGroupKey(v) === groupingKey)
                .forEach(v => {
                const fileData = getFileData(currentState, v.rootKey);
                if (!fileData) {
                    return;
                }
                // Volume with `prefixKey` has already been processed, however,
                // regardless of processed or not we always need to put it in
                // `partitionChildEntries` because we are trying to construct the
                // full children array here, at the end we will use
                // `partitionChildEntries` to replace the current
                // `FileData.children`.
                partitionChildEntries.push(fileData.entry);
                if (!v.prefixKey) {
                    v.prefixKey = parentEntry.toURL();
                    appendChildIfNotExisted(parentEntry, fileData.entry);
                    // For sub-partition from a removable volume, its children icon
                    // should be UNKNOWN_REMOVABLE, and it shouldn't be ejectable.
                    currentState.allEntries[v.rootKey] = {
                        ...fileData,
                        icon: ICON_TYPES.UNKNOWN_REMOVABLE,
                        isEjectable: false,
                    };
                }
            });
            // At this point the current `newVolumeEntry` is not in `parentEntry`, we
            // need to add that to that group.
            appendChildIfNotExisted(parentEntry, newVolumeEntry);
            partitionChildEntries.push(newVolumeEntry);
            volume.prefixKey = parentEntry.toURL();
            // For sub-partition from a removable volume, its children icon should be
            // UNKNOWN_REMOVABLE, and it shouldn't be ejectable.
            const fileData = getFileData(currentState, volumeRootKey);
            currentState.allEntries[volumeRootKey] = {
                ...fileData,
                icon: ICON_TYPES.UNKNOWN_REMOVABLE,
                isEjectable: false,
            };
            currentState.allEntries[parentKey] = {
                ...getFileData(currentState, parentKey),
                // Removable devices with group, its parent should always be ejectable.
                isEjectable: true,
                children: sortEntries(parentEntry, partitionChildEntries)
                    .map(entry => entry.toURL()),
            };
        }
    }
    return {
        ...currentState,
        volumes: {
            ...currentState.volumes,
            [volume.volumeId]: volume,
        },
    };
}
function appendChildIfNotExisted(parentEntry, childEntry) {
    if (!parentEntry.getUiChildren().find((entry) => isSameEntry(entry, childEntry))) {
        parentEntry.addEntry(childEntry);
        return true;
    }
    return false;
}
/** Create action to remove a volume. */
const removeVolume = slice.addReducer('remove', removeVolumeReducer);
function removeVolumeReducer(currentState, payload) {
    const volumeToRemove = currentState.volumes[payload.volumeId];
    if (!volumeToRemove) {
        // Somehow the volume is already removed from the store, do nothing.
        return currentState;
    }
    const volumeEntry = getEntry$1(currentState, volumeToRemove.rootKey);
    delete currentState.volumes[payload.volumeId];
    currentState.volumes = {
        ...currentState.volumes,
    };
    if (!volumeToRemove.prefixKey) {
        return { ...currentState };
    }
    // We also need to remove it from its prefix entry if there is one.
    const prefixEntryFileData = getFileData(currentState, volumeToRemove.prefixKey);
    if (prefixEntryFileData) {
        const prefixEntry = prefixEntryFileData.entry;
        // Remove it from the prefix entry's UI children.
        prefixEntry.removeChildEntry(volumeEntry);
        // Remove it from the prefix entry's file data.
        let newChildren = prefixEntryFileData.children.filter(child => child !== volumeEntry.toURL());
        // If the prefix entry is an entry list for removable partitions, and this
        // is the last child, remove the prefix entry.
        if (prefixEntry.rootType === RootType.REMOVABLE &&
            newChildren.length === 0) {
            currentState.uiEntries = currentState.uiEntries.filter(uiEntryKey => uiEntryKey !== volumeToRemove.prefixKey);
        }
        // If the volume entry is under MyFiles, we need to add the placeholder
        // entry back after the corresponding volume is removed (e.g. Crostini/Play
        // files).
        const volumeTypesNestedInMyFiles = getVolumeTypesNestedInMyFiles();
        const uiEntryKey = currentState.uiEntries.find(entryKey => {
            const uiEntry = getEntry$1(currentState, entryKey);
            return uiEntry.name === volumeEntry.name;
        });
        if (volumeTypesNestedInMyFiles.has(volumeToRemove.volumeType) &&
            uiEntryKey) {
            // Re-add the corresponding placeholder ui entry to the UI children.
            const uiEntry = getEntry$1(currentState, uiEntryKey);
            prefixEntry.addEntry(uiEntry);
            // Re-add the corresponding placeholder ui entry to the file data.
            newChildren = newChildren.concat(uiEntryKey);
            const childEntries = newChildren.map(childKey => getEntry$1(currentState, childKey));
            newChildren =
                sortEntries(prefixEntry, childEntries).map(entry => entry.toURL());
        }
        currentState.allEntries[volumeToRemove.prefixKey] = {
            ...prefixEntryFileData,
            children: newChildren,
        };
    }
    return {
        ...currentState,
    };
}
/** Create action to update isInteractive for a volume. */
const updateIsInteractiveVolume = slice.addReducer('set-is-interactive', updateIsInteractiveVolumeReducer);
function updateIsInteractiveVolumeReducer(currentState, payload) {
    const volumes = {
        ...currentState.volumes,
    };
    const updatedVolume = {
        ...volumes[payload.volumeId],
        isInteractive: payload.isInteractive,
    };
    return {
        ...currentState,
        volumes: {
            ...volumes,
            [payload.volumeId]: updatedVolume,
        },
    };
}
slice.addReducer(updateDeviceConnectionState.type, updateDeviceConnectionStateReducer);
function updateDeviceConnectionStateReducer(currentState, payload) {
    let volumes;
    // Find ODFS volume(s) and disable it (or them) if offline.
    const disableODFS = payload.connection ===
        chrome.fileManagerPrivate.DeviceConnectionState.OFFLINE;
    for (const volume of Object.values(currentState.volumes)) {
        if (!isOneDriveId(volume.providerId) || volume.isDisabled === disableODFS) {
            continue;
        }
        const updatedVolume = updateVolume(currentState, volume.volumeId, { isDisabled: disableODFS });
        if (updatedVolume) {
            if (!volumes) {
                volumes = {
                    ...currentState.volumes,
                    [volume.volumeId]: updatedVolume,
                };
            }
            else {
                volumes[volume.volumeId] = updatedVolume;
            }
        }
        // Make the ODFS FileData/VolumeEntry consistent with its volume in the
        // store.
        updateFileDataInPlace(currentState, volume.rootKey, { disabled: disableODFS });
        const odfsVolumeEntry = getEntry$1(currentState, volume.rootKey);
        if (odfsVolumeEntry) {
            odfsVolumeEntry.disabled = disableODFS;
        }
    }
    return volumes ? { ...currentState, volumes } : currentState;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** Check if an `Element` is a tree or not. */
function isXfTree(element) {
    return !!element && element.tagName === 'XF-TREE';
}
/** Check if an `Element` is a tree item or not. */
function isTreeItem(element) {
    return element.tagName === 'XF-TREE-ITEM';
}
/**
 * When tree slot or tree item's slot changes, we need to check if the change
 * impacts the selected item and focused item or not, if so we update the
 * `selectedItem/focusedItem` in the tree.
 */
function handleTreeSlotChange(tree, oldItems, newItems) {
    if (tree.selectedItem) {
        if (oldItems.has(tree.selectedItem) && !newItems.has(tree.selectedItem)) {
            // If the currently selected item exists in `oldItems` but not in
            // `newItems`, it means it's being removed from the children slot,
            // we need to mark the selected item to null.
            tree.selectedItem = null;
        }
    }
    if (tree.focusedItem) {
        if (oldItems.has(tree.focusedItem) && !newItems.has(tree.focusedItem)) {
            // If the currently focused item exists in `oldItems` but not in
            // `newItems`, it means it's being removed from the children slot,
            // we need to mark the focused item to the currently selected item.
            tree.focusedItem = tree.selectedItem;
        }
    }
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Setter used by the deprecated cr.ui elements.
 * It sets the value of type T in the private `${name}_`.
 *
 * It also dispatches the event `${name}Changed` when the value actually
 * changes.
 */
function jsSetter(self, name, value) {
    const privateName = `${name}_`;
    const oldValue = self[name];
    if (value !== oldValue) {
        self[privateName] = value;
        dispatchPropertyChange(self, name, value, oldValue);
    }
}
/** Converts camelCase to DOM style casing: myName => my-name. */
function convertToKebabCase(jsName) {
    return jsName.replace(/([A-Z])/g, '-$1').toLowerCase();
}
/**
 * Setter used by the deprecated cr.ui elements.
 * It sets or removes the DOM attribute, the attribute name is converted
 * from the camelCase to DOM style case myName => my-name.
 *
 * It also dispatches the event `${name}Changed` when the value actually
 * changes.
 */
function boolAttrSetter(self, name, value) {
    const attributeName = convertToKebabCase(name);
    const oldValue = self[name];
    if (value !== oldValue) {
        if (value) {
            self.setAttribute(attributeName, name);
        }
        else {
            self.removeAttribute(attributeName);
        }
        dispatchPropertyChange(self, name, value, oldValue);
    }
}
/**
 * Setter used by the deprecated cr.ui elements.
 * It sets the value of type T in the DOM `${name}`. NOTE: Name is converted
 * from the camelCase to DOM style case myName => my-name.
 *
 * It also dispatches the event `${name}Changed` when the value actually
 * changes.
 */
function domAttrSetter(self, name, value) {
    const attributeName = convertToKebabCase(name);
    const oldValue = self[name];
    if (value === undefined) {
        self.removeAttribute(attributeName);
    }
    else {
        self.setAttribute(attributeName, value);
    }
    dispatchPropertyChange(self, name, value, oldValue);
}
/**
 * Used by the deprecated cr.ui elements. It receives a regular DOM element
 * (like a <div>) and injects the cr.ui element implementation methods in that
 * instance.
 *
 * It then calls the cr.ui element's `decorate()` which is the initializer for
 * its state, since it cannot run the constructor().
 */
function crInjectTypeAndInit(el, implementationClass) {
    if (implementationClass.prototype.isPrototypeOf(el)) {
        return el;
    }
    // Inject the methods of the DecoratableElement in the HTMLElement.
    Object.setPrototypeOf(el, implementationClass.prototype);
    // Initialize since it doesn't run the constructor.
    el.initialize();
    return el;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Function to be used as event listener for `mouseenter`, it sets the `title`
 * attribute in the event's element target, when the text content is clipped due
 * to CSS overflow, as in showing `...`.
 *
 * NOTE: This should be used with `mouseenter` because this event triggers less
 * frequent than `mouseover` and `mouseenter` doesn't bubble from the children
 * element to the listener (see mouseenter on MDN for more details).
 */
function mouseEnterMaybeShowTooltip(event) {
    const target = event.composedPath()[0];
    if (!target) {
        return;
    }
    maybeShowTooltip(target, target.innerText);
}
/**
 * Sets the `title` attribute in the event's element target, when the text
 * content is clipped due to CSS overflow, as in showing `...`.
 */
function maybeShowTooltip(target, title) {
    if (hasOverflowEllipsis(target)) {
        target.setAttribute('title', title);
    }
    else {
        target.removeAttribute('title');
    }
}
/**
 * Whether the text content is clipped due to CSS overflow, as in showing `...`.
 */
function hasOverflowEllipsis(element) {
    return element.offsetWidth < element.scrollWidth ||
        element.offsetHeight < element.scrollHeight;
}
/** Escapes the symbols: < > & */
function htmlEscape(str) {
    return str.replace(/[<>&]/g, entity => {
        switch (entity) {
            case '<':
                return '&lt;';
            case '>':
                return '&gt;';
            case '&':
                return '&amp;';
        }
        return entity;
    });
}
/**
 * Returns a string '[Ctrl-][Alt-][Shift-][Meta-]' depending on the event
 * modifiers. Convenient for writing out conditions in keyboard handlers.
 *
 * @param event The keyboard event.
 */
function getKeyModifiers(event) {
    return (event.ctrlKey ? 'Ctrl-' : '') + (event.altKey ? 'Alt-' : '') +
        (event.shiftKey ? 'Shift-' : '') + (event.metaKey ? 'Meta-' : '');
}
/**
 * A shortcut function to create a child element with given tag and class.
 *
 * @param parent Parent element.
 * @param className Class name.
 * @param {string=} tag tag, DIV is omitted.
 * @return Newly created element.
 */
function createChild(parent, className, tag) {
    const child = parent.ownerDocument.createElement(tag || 'div');
    if (className) {
        child.className = className;
    }
    parent.appendChild(child);
    return child;
}
/**
 * Query an element that's known to exist by a selector. We use this instead of
 * just calling querySelector and not checking the result because this lets us
 * satisfy the JSCompiler type system.
 * @param selectors CSS selectors to query the element.
 * @param {(!Document|!DocumentFragment|!Element)=} context An optional
 *     context object for querySelector.
 */
function queryRequiredElement(selectors, context) {
    const element = (context || document).querySelector(selectors);
    assertInstanceof$1(element, HTMLElement, 'Missing required element: ' + selectors);
    return element;
}
/**
 * Obtains the element that should exist, decorates it with given type, and
 * returns it.
 * @param query Query for the element.
 * @param type Type used to decorate.
 */
function queryDecoratedElement(query, type) {
    const element = queryRequiredElement(query);
    crInjectTypeAndInit(element, type);
    return element;
}
/**
 * Creates an instance of UserDomError subtype of DOMError because DOMError is
 * deprecated and its Closure extern is wrong, doesn't have the constructor
 * with 2 arguments. This DOMError looks like a FileError except that it does
 * not have the deprecated FileError.code member.
 *
 * @param  name Error name for the file error.
 * @param {string=} message optional message.
 */
function createDOMError(name, message) {
    return new UserDomError(name, message);
}
/**
 * Creates a DOMError-like object to be used in place of returning file errors.
 */
class UserDomError extends DOMError {
    /**
     * @param name Error name for the file error.
     * @param {string=} message Optional message for this error.
     * constructor with 1 arg.
     */
    constructor(name, message) {
        super(name);
        this.name_ = name;
        this.message_ = message || '';
        Object.freeze(this);
    }
    get name() {
        return this.name_;
    }
    get message() {
        return this.message_;
    }
}
/**
 * A util function to get the correct "top" value when calling
 * <cr-action-menu>'s `showAt` method.
 *
 * @param triggerElement The he element which triggers the menu dropdown.
 * @param marginTop The gap between the trigger element and the menu dialog.
 */
function getCrActionMenuTop(triggerElement, marginTop) {
    let top = triggerElement.offsetHeight;
    let offsetElement = triggerElement;
    // The menu dialog from <cr-action-menu> is "absolute" positioned, we need to
    // start from the trigger element and go upwards to add all offsetTop from all
    // offset parents because each level can have its own offsetTop.
    while (offsetElement instanceof HTMLElement) {
        top += offsetElement.offsetTop;
        offsetElement = offsetElement.offsetParent;
    }
    top += marginTop;
    return top;
}
/**
 * Util functions to check if an HTML element is a tree or tree item, these
 * functions cater both the old tree (cr.ui.Tree/cr.ui.TreeItem) and the new
 * tree (<xf-tree>/<xf-tree-item>).
 *
 * Note: for focused item, the old tree use `selectedItem`, but in the context
 * of the new tree, `selectedItem` means the item being selected, `focusedItem`
 * means the item being focused by keyboard.
 *
 * Use `element: any` here because `DirectoryTree` and `DirectoryItem` are not
 * compatible with Element's type definition, which prevents the type guard. No
 * `instanceof` here to prevent circular imports issue.
 *
 * TODO(b/285977941): Remove the old tree support.
 */
function isDirectoryTree(element) {
    return element.typeName === 'directory_tree' || isXfTree(element);
}
function isDirectoryTreeItem(element) {
    return element.typeName === 'directory_item' || isTreeItem(element);
}
function getFocusedTreeItem(tree) {
    if (tree.typeName === 'directory_tree') {
        return tree.selectedItem;
    }
    if (isXfTree(tree)) {
        return tree.focusedItem;
    }
    return null;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Type guard used to identify if a generic Entry is actually a DirectoryEntry.
 */
function isDirectoryEntry(entry) {
    return entry.isDirectory;
}
/**
 * Type guard used to identify if a generic Entry is actually a FileEntry.
 */
function isFileEntry(entry) {
    return entry.isFile;
}
/**
 * Returns the native entry (aka FileEntry) from the Store. It returns `null`
 * for entries that aren't native.
 */
function getNativeEntry(fileData) {
    if (fileData.type === EntryType.FS_API) {
        return fileData.entry;
    }
    if (fileData.type === EntryType.VOLUME_ROOT) {
        return fileData.entry.getNativeEntry();
    }
    return null;
}
/**
 * Type guard used to identify if a given entry is actually a
 * VolumeEntry.
 */
function isVolumeEntry(entry) {
    return 'volumeInfo' in entry;
}
/**
 * Check if the entry is MyFiles or not.
 * Note: if the return value is true, the input entry is guaranteed to be
 * EntryList or VolumeEntry type.
 */
function isMyFilesEntry(entry) {
    if (!entry) {
        return false;
    }
    if (entry instanceof EntryList && entry.toURL() === myFilesEntryListKey) {
        return true;
    }
    if (isVolumeEntry(entry) && entry.volumeType === VolumeType.DOWNLOADS) {
        return true;
    }
    return false;
}
/**
 * Check if the entry is the drive root entry list ("Google Drive" wrapper).
 * Note: if the return value is true, the input entry is guaranteed to be
 * EntryList type.
 */
function isDriveRootEntryList(entry) {
    if (!entry) {
        return false;
    }
    return entry.toURL() === driveRootEntryListKey;
}
/**
 * Given an entry, check if it's a grand root ("Shared drives" and
 * "Computers") inside Drive.
 * Note: if the return value is true, the input entry is guaranteed to be
 * DirectoryEntry type.
 */
function isGrandRootEntryInDrives(entry) {
    const { fullPath } = entry;
    return fullPath === SHARED_DRIVES_DIRECTORY_PATH ||
        fullPath === COMPUTERS_DIRECTORY_PATH;
}
/**
 * Given an entry, check if it's a fake entry ("Shared with me" and "Offline")
 * inside Drive.
 */
function isFakeEntryInDrives(entry) {
    if (!(entry instanceof FakeEntryImpl)) {
        return false;
    }
    const { rootType } = entry;
    return rootType === RootType.DRIVE_SHARED_WITH_ME ||
        rootType === RootType.DRIVE_OFFLINE;
}
/**
 * Returns true if fileData's entry is inside any part of Drive 'My Drive'.
 */
function isEntryInsideMyDrive(fileData) {
    const { rootType } = fileData;
    return !!rootType && rootType === RootType.DRIVE;
}
/**
 * Returns true if fileData's entry is inside any part of Drive 'Computers'.
 */
function isEntryInsideComputers(fileData) {
    const { rootType } = fileData;
    return !!rootType &&
        (rootType === RootType.COMPUTERS_GRAND_ROOT ||
            rootType === RootType.COMPUTER);
}
/**
 * Returns true if fileData's entry is inside any part of Drive.
 */
function isEntryInsideDrive(fileData) {
    const { rootType } = fileData;
    return isDriveRootType(rootType);
}
/**
 * Returns whether or not the root type is one of Google Drive root types.
 */
function isDriveRootType(rootType) {
    return !!rootType &&
        (rootType === RootType.DRIVE ||
            rootType === RootType.SHARED_DRIVES_GRAND_ROOT ||
            rootType === RootType.SHARED_DRIVE ||
            rootType === RootType.COMPUTERS_GRAND_ROOT ||
            rootType === RootType.COMPUTER || rootType === RootType.DRIVE_OFFLINE ||
            rootType === RootType.DRIVE_SHARED_WITH_ME ||
            rootType === RootType.DRIVE_FAKE_ROOT);
}
/** Sort the entries based on the filter and the names. */
function sortEntries(parentEntry, entries) {
    if (entries.length === 0) {
        return [];
    }
    // TODO: proper way to get directory model and volume manager.
    const { directoryModel, volumeManager } = window.fileManager;
    const fileFilter = directoryModel.getFileFilter();
    // For entries under My Files we need to use a different sorting logic
    // because we need to make sure curtain files are always at the bottom.
    if (isMyFilesEntry(parentEntry)) {
        // Use locationInfo from first entry because it only compare within the
        // same volume.
        // TODO(b/271485133): Do not use getLocationInfo() for sorting.
        const locationInfo = volumeManager.getLocationInfo(entries[0]);
        if (locationInfo) {
            const compareFunction = compareLabelAndGroupBottomEntries(locationInfo, 
            // Only Linux/Play/GuestOS files are in the UI children.
            parentEntry.getUiChildren());
            return entries.filter(entry => fileFilter.filter(entry))
                .sort(compareFunction);
        }
    }
    return entries.filter(entry => fileFilter.filter(entry)).sort(compareName);
}
/**
 * Take an entry and extract the rootType.
 */
function getRootType(entry) {
    return 'rootType' in entry ? entry.rootType : null;
}
/**
 * Obtains whether an entry is fake or not.
 */
function isFakeEntry(entry) {
    if (entry.getParent === undefined) {
        return true;
    }
    return 'isNativeType' in entry ? !entry.isNativeType : false;
}
/**
 * Obtains whether an entry is the root directory of a Shared Drive.
 */
function isTeamDriveRoot(entry) {
    if (entry === null) {
        return false;
    }
    if (!entry.fullPath) {
        return false;
    }
    const tree = entry.fullPath.split('/');
    return tree.length === 3 && isSharedDriveEntry(entry);
}
/**
 * Obtains whether an entry is the grand root directory of Shared Drives.
 */
function isTeamDrivesGrandRoot(entry) {
    if (!entry.fullPath) {
        return false;
    }
    const tree = entry.fullPath.split('/');
    return tree.length === 2 && isSharedDriveEntry(entry);
}
/**
 * Obtains whether an entry is descendant of the Shared Drives directory.
 */
function isSharedDriveEntry(entry) {
    if (!entry.fullPath) {
        return false;
    }
    const tree = entry.fullPath.split('/');
    return tree[0] === '' && tree[1] === SHARED_DRIVES_DIRECTORY_NAME;
}
/**
 * Extracts Shared Drive name from entry path.
 * @return The name of Shared Drive. Empty string if |entry| is not
 *     under Shared Drives.
 */
function getTeamDriveName(entry) {
    if (!entry.fullPath || !isSharedDriveEntry(entry)) {
        return '';
    }
    const tree = entry.fullPath.split('/');
    if (tree.length < 3) {
        return '';
    }
    return tree[2] || '';
}
/**
 * Returns true if the given root type is for a container of recent files.
 */
function isRecentRootType(rootType) {
    return rootType === RootType.RECENT;
}
/**
 * Returns true if the given entry is the root folder of recent files.
 */
function isRecentRoot(entry) {
    return isFakeEntry(entry) && isRecentRootType(getRootType(entry));
}
/**
 * Obtains whether an entry is the root directory of a Computer.
 */
function isComputersRoot(entry) {
    if (entry === null) {
        return false;
    }
    if (!entry.fullPath) {
        return false;
    }
    const tree = entry.fullPath.split('/');
    return tree.length === 3 && isComputersEntry(entry);
}
/**
 * Obtains whether an entry is descendant of the My Computers directory.
 */
function isComputersEntry(entry) {
    if (!entry.fullPath) {
        return false;
    }
    const tree = entry.fullPath.split('/');
    return tree[0] === '' && tree[1] === COMPUTERS_DIRECTORY_NAME;
}
/**
 * Returns true if the given root type is Trash.
 */
function isTrashRootType(rootType) {
    return rootType === RootType.TRASH;
}
/**
 * Returns true if the given entry is the root folder of Trash.
 */
function isTrashRoot(entry) {
    return entry.fullPath === '/' && isTrashRootType(getRootType(entry));
}
/**
 * Returns true if the given entry is a descendent of Trash.
 */
function isTrashEntry(entry) {
    return isTrashRootType(getRootType(entry));
}
/**
 * Compares two entries.
 * @return True if the both entry represents a same file or
 *     directory. Returns true if both entries are null.
 */
function isSameEntry(entry1, entry2) {
    if (!entry1 && !entry2) {
        return true;
    }
    if (!entry1 || !entry2) {
        return false;
    }
    return entry1.toURL() === entry2.toURL();
}
/**
 * Compares two file systems.
 * @return True if the both file systems are equal. Also, returns true
 *     if both file systems are null.
 */
function isSameFileSystem(fileSystem1, fileSystem2) {
    if (!fileSystem1 && !fileSystem2) {
        return true;
    }
    if (!fileSystem1 || !fileSystem2) {
        return false;
    }
    return isSameEntry(fileSystem1.root, fileSystem2.root);
}
/**
 * Checks if given two entries are in the same directory.
 * @return True if given entries are in the same directory.
 */
function isSiblingEntry(entry1, entry2) {
    const path1 = entry1.fullPath.split('/');
    const path2 = entry2.fullPath.split('/');
    if (path1.length !== path2.length) {
        return false;
    }
    for (let i = 0; i < path1.length - 1; i++) {
        if (path1[i] !== path2[i]) {
            return false;
        }
    }
    return true;
}
/**
 * Checks if the child entry is a descendant of another entry. If the entries
 * point to the same file or directory, then returns false.
 *
 * @param ancestorEntry The ancestor
 *     directory entry. Can be a fake.
 * @param childEntry The child entry. Can be a fake.
 * @return True if the child entry is contained in the ancestor path.
 */
function isDescendantEntry(ancestorEntry, childEntry) {
    if (!ancestorEntry.isDirectory) {
        return false;
    }
    // For EntryList and VolumeEntry they can contain entries from different
    // files systems, so we should check its getUiChildren.
    if (isEntrySupportUiChildren(ancestorEntry)) {
        // VolumeEntry has to check to root entry descendant entry.
        if ('getNativeEntry' in ancestorEntry) {
            const nativeEntry = ancestorEntry.getNativeEntry();
            if (nativeEntry &&
                isSameFileSystem(nativeEntry.filesystem, childEntry.filesystem)) {
                return isDescendantEntry(nativeEntry, childEntry);
            }
        }
        return ancestorEntry.getUiChildren().some((ancestorChild) => {
            if (isSameEntry(ancestorChild, childEntry)) {
                return true;
            }
            // root entry might not be resolved yet.
            const volumeEntry = 'getNativeEntry' in ancestorChild ?
                ancestorChild.getNativeEntry() :
                null;
            if (!volumeEntry) {
                return false;
            }
            if (isSameEntry(volumeEntry, childEntry)) {
                return true;
            }
            return isDirectoryEntry(volumeEntry) &&
                isDescendantEntry(volumeEntry, childEntry);
        });
    }
    if (!isSameFileSystem(ancestorEntry.filesystem, childEntry.filesystem)) {
        return false;
    }
    if (isSameEntry(ancestorEntry, childEntry)) {
        return false;
    }
    if (isFakeEntry(ancestorEntry) || isFakeEntry(childEntry)) {
        return false;
    }
    // Check if the ancestor's path with trailing slash is a prefix of child's
    // path.
    let ancestorPath = ancestorEntry.fullPath;
    if (ancestorPath.slice(-1) !== '/') {
        ancestorPath += '/';
    }
    return childEntry.fullPath.indexOf(ancestorPath) === 0;
}
/**
 * Compare by name. The 2 entries must be in same directory.
 */
function compareName(entry1, entry2) {
    return collator.compare(entry1.name, entry2.name);
}
/**
 * Compare by label (i18n name). The 2 entries must be in same directory.
 */
function compareLabel(locationInfo, entry1, entry2) {
    return collator.compare(getEntryLabel(locationInfo, entry1), getEntryLabel(locationInfo, entry2));
}
/**
 * Compare by path.
 */
function comparePath(entry1, entry2) {
    return collator.compare(entry1.fullPath, entry2.fullPath);
}
/**
 * @param bottomEntries entries that should be grouped in the bottom, used for
 *     sorting Linux and Play files entries after
 * other folders in MyFiles.
 */
function compareLabelAndGroupBottomEntries(locationInfo, bottomEntries) {
    const childrenMap = new Map();
    bottomEntries.forEach((entry) => {
        childrenMap.set(entry.toURL(), entry);
    });
    /**
     * Compare entries putting entries from |bottomEntries| in the bottom and
     * sort by name within entries that are the same type in regards to
     * |bottomEntries|.
     */
    function compare(entry1, entry2) {
        // Bottom entry here means Linux or Play files, which should appear after
        // all native entries.
        const isBottomEntry1 = childrenMap.has(entry1.toURL()) ? 1 : 0;
        const isBottomEntry2 = childrenMap.has(entry2.toURL()) ? 1 : 0;
        // When there are the same type, just compare by label.
        if (isBottomEntry1 === isBottomEntry2) {
            return compareLabel(locationInfo, entry1, entry2);
        }
        return isBottomEntry1 - isBottomEntry2;
    }
    return compare;
}
/**
 * Converts array of entries to an array of corresponding URLs.
 */
function entriesToURLs(entries) {
    return entries.map(entry => {
        // When building file_manager_base.js, cachedUrl is not referred other than
        // here. Thus closure compiler raises an error if we refer the property like
        // entry.cachedUrl.
        if ('cachedUrl' in entry) {
            return entry['cachedUrl'] || entry.toURL();
        }
        return entry.toURL();
    });
}
/**
 * Converts array of URLs to an array of corresponding Entries.
 *
 * @param callback Completion callback with array of success Entries and failure
 *     URLs.
 */
function convertURLsToEntries(urls, callback) {
    const promises = urls.map(url => {
        return new Promise(window.webkitResolveLocalFileSystemURL.bind(null, url))
            .then(entry => {
            return { entry: entry };
        }, _ => {
            // Not an error. Possibly, the file is not accessible anymore.
            console.warn('Failed to resolve the file with url: ' + url + '.');
            return { failureUrl: url };
        });
    });
    const resultPromise = Promise.all(promises).then(results => {
        const entries = [];
        const failureUrls = [];
        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            if ('entry' in result) {
                entries.push(result.entry);
            }
            if ('failureUrl' in result) {
                failureUrls.push(result.failureUrl);
            }
        }
        return {
            entries: entries,
            failureUrls: failureUrls,
        };
    });
    // Invoke the callback. If opt_callback is specified, resultPromise is still
    // returned and fulfilled with a result.
    if (callback) {
        resultPromise
            .then(result => {
            callback(result.entries, result.failureUrls);
        })
            .catch(error => {
            console.warn('convertURLsToEntries has failed.', error.stack ? error.stack : error);
        });
    }
    return resultPromise;
}
/**
 * Converts a url into an {!Entry}, if possible.
 */
function urlToEntry(url) {
    return new Promise(window.webkitResolveLocalFileSystemURL.bind(null, url));
}
/**
 * Returns true if the given |entry| matches any of the special entries:
 *
 *  - "My Files"/{Downloads,PvmDefault,Camera} directories, or
 *  - "Play Files"/{<any-directory>,DCIM/Camera} directories, or
 *  - "Linux Files" root "/" directory
 *  - "Guest OS" root "/" directory
 *
 * which cannot be modified such as deleted/cut or renamed.
 */
function isNonModifiable(volumeManager, entry) {
    if (!entry) {
        return false;
    }
    if (isFakeEntry(entry)) {
        return true;
    }
    if (!volumeManager) {
        return false;
    }
    const volumeInfo = volumeManager.getVolumeInfo(entry);
    if (!volumeInfo) {
        return false;
    }
    const volumeType = volumeInfo.volumeType;
    if (volumeType === VolumeType.DOWNLOADS) {
        if (!entry.isDirectory) {
            return false;
        }
        const fullPath = entry.fullPath;
        if (fullPath === '/Downloads') {
            return true;
        }
        if (fullPath === '/PvmDefault' && isPluginVmEnabled()) {
            return true;
        }
        if (fullPath === '/Camera') {
            return true;
        }
        return false;
    }
    if (volumeType === VolumeType.ANDROID_FILES) {
        if (!entry.isDirectory) {
            return false;
        }
        const fullPath = entry.fullPath;
        if (fullPath === '/') {
            return true;
        }
        const isRootDirectory = fullPath === ('/' + entry.name);
        if (isRootDirectory) {
            return true;
        }
        if (fullPath === '/DCIM/Camera') {
            return true;
        }
        return false;
    }
    if (volumeType === VolumeType.CROSTINI) {
        return entry.fullPath === '/';
    }
    if (volumeType === VolumeType.GUEST_OS) {
        return entry.fullPath === '/';
    }
    return false;
}
/**
 * Retrieves all entries inside the given |rootEntry|.
 * @param entriesCallback Called when some chunk of entries are read. This can
 *     be called a couple of times until the completion.
 * @param successCallback Called when the read is completed.
 * @param errorCallback Called when an error occurs.
 * @param shouldStop Callback to check if the read process should stop or not.
 *     When this callback is called and it returns true, the remaining recursive
 *     reads will be aborted.
 * @param maxDepth Max depth to delve directories recursively. If 0 is
 *     specified, only the rootEntry will be read. If -1 is specified or
 *     maxDepth is unspecified, the depth of recursion is unlimited.
 */
function readEntriesRecursively(rootEntry, entriesCallback, successCallback, errorCallback, shouldStop, maxDepth) {
    let numRunningTasks = 0;
    let error = null;
    const maxDirDepth = maxDepth === undefined ? -1 : maxDepth;
    const maybeRunCallback = () => {
        if (numRunningTasks === 0) {
            if (shouldStop()) {
                errorCallback(createDOMError(FileErrorToDomError.ABORT_ERR));
            }
            else if (error) {
                errorCallback(error);
            }
            else {
                successCallback();
            }
        }
    };
    const processEntry = (entry, depth) => {
        const onError = (fileError) => {
            if (!error) {
                error = fileError;
            }
            numRunningTasks--;
            maybeRunCallback();
        };
        const onSuccess = (entries) => {
            if (shouldStop() || error || entries.length === 0) {
                numRunningTasks--;
                maybeRunCallback();
                return;
            }
            entriesCallback(entries);
            for (let i = 0; i < entries.length; i++) {
                const entry = entries[i];
                if (entry && isDirectoryEntry(entry) &&
                    (maxDirDepth === -1 || depth < maxDirDepth)) {
                    processEntry(entry, depth + 1);
                }
            }
            // Read remaining entries.
            reader.readEntries(onSuccess, onError);
        };
        numRunningTasks++;
        const reader = entry.createReader();
        reader.readEntries(onSuccess, onError);
    };
    processEntry(rootEntry, 0);
}
/**
 * Returns true if entry is FileSystemEntry or FileSystemDirectoryEntry, it
 * returns false if it's FakeEntry or any one of the FilesAppEntry types.
 */
function isNativeEntry(entry) {
    return !('typeName' in entry);
}
function unwrapEntry(entry) {
    if (!entry) {
        return entry;
    }
    const nativeEntry = 'getNativeEntry' in entry && entry.getNativeEntry();
    return nativeEntry || entry;
}
/**
 * Returns true if all entries belong to the same volume. If there are no
 * entries it also returns false.
 */
function isSameVolume(entries, volumeManager) {
    if (!entries.length) {
        return false;
    }
    const firstEntry = entries[0];
    if (!firstEntry) {
        return false;
    }
    const volumeInfo = volumeManager.getVolumeInfo(firstEntry);
    for (let i = 1; i < entries.length; i++) {
        if (!entries[i]) {
            return false;
        }
        const volumeInfoToCompare = volumeManager.getVolumeInfo(entries[i]);
        if (!volumeInfoToCompare ||
            volumeInfoToCompare.volumeId !== volumeInfo?.volumeId) {
            return false;
        }
    }
    return true;
}
/**
 * Returns the ODFS root as an Entry. Request the actions of this
 * Entry to get ODFS metadata.
 */
function getODFSMetadataQueryEntry(odfsVolumeInfo) {
    return unwrapEntry(odfsVolumeInfo.displayRoot);
}
/**
 * Return true if the volume with |volumeInfo| is an
 * interactive volume.
 */
function isInteractiveVolume(volumeInfo) {
    const state = getStore().getState();
    const volume = state.volumes[volumeInfo.volumeId];
    if (!volume) {
        console.warn('Expected volume to be in the store.');
        return true;
    }
    return volume.isInteractive;
}
const isOneDriveId = (providerId) => providerId === ODFS_EXTENSION_ID;
function isOneDrive(volumeInfo) {
    return isOneDriveId(volumeInfo?.providerId);
}
/**
 * Returns a boolean indicating whether the volume is a GuestOs volume. And
 * ANDROID_FILES type volume can also be a GuestOs volume if ARCVM is enabled.
 */
function isGuestOs(type) {
    return type === VolumeType.GUEST_OS ||
        (type === VolumeType.ANDROID_FILES && isArcVmEnabled());
}
/**
 * Returns true if fileData's entry supports the "shared" feature, as in,
 * displays a shared icon. It's only supported inside "My Drive" or
 * "Computers", even Shared Drive does not support it, the "My Drive" and
 * "Computers" itself don't support it either, only their children.
 *
 * Note: if the return value is true, fileData's entry is guaranteed to be
 * native Entry type.
 */
function shouldSupportDriveSpecificIcons(fileData) {
    return (isEntryInsideMyDrive(fileData) && !isVolumeEntry(fileData.entry)) ||
        (isEntryInsideComputers(fileData) &&
            !isGrandRootEntryInDrives(fileData.entry));
}
/**
 * Extracts the `entry` from the supplied `treeItem` depending on if the new
 * directory tree is enabled or not.
 */
function getTreeItemEntry(treeItem) {
    if (!treeItem) {
        return null;
    }
    if (isNewDirectoryTreeEnabled()) {
        const item = treeItem;
        const state = getStore().getState();
        return getEntry$1(state, item.dataset['navigationKey']);
    }
    const item = treeItem;
    return item.entry;
}
/**
 * Check if the entry support `getUiChildren()` method.
 */
function isEntrySupportUiChildren(entry) {
    return 'getUiChildren' in entry;
}
/**
 * A generator version of `entry.readEntries`.
 *
 * Example usage:
 * ```
 * const childEntries = []
 * for await (const partialEntries of readEntries(...)) {
     childEntries.push(...partialEntries);
  }
 * ```
 */
async function* readEntries(entry) {
    const ls = (reader) => {
        return new Promise((resolve, reject) => {
            reader.readEntries(results => resolve(results), error => reject(error));
        });
    };
    const reader = entry.createReader();
    while (true) {
        const entries = await ls(reader);
        if (entries.length === 0) {
            break;
        }
        yield entries;
    }
    // The final return here is void.
}
/**
 * Check if the given entry is scannable or not, e.g. can we call `readEntries`
 * on it. If the return value is true, its type is guaranteed to be a Directory
 * like entry.
 */
function isEntryScannable(entry) {
    if (!entry) {
        return false;
    }
    if (!entry.isDirectory) {
        return false;
    }
    if ('disabled' in entry && entry.disabled) {
        return false;
    }
    const entryKeysWithoutChildren = new Set([
        recentRootKey,
        trashRootKey,
    ]);
    if (entryKeysWithoutChildren.has(entry.toURL())) {
        return false;
    }
    return true;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file contains utils for working with icons.
 */
/** Return icon name for the VM type. */
function vmTypeToIconName(vmType) {
    if (vmType === undefined) {
        console.error('vmType: is undefined');
        return '';
    }
    switch (vmType) {
        case chrome.fileManagerPrivate.VmType.BRUSCHETTA:
            return ICON_TYPES.BRUSCHETTA;
        case chrome.fileManagerPrivate.VmType.ARCVM:
            return ICON_TYPES.ANDROID_FILES;
        case chrome.fileManagerPrivate.VmType.TERMINA:
            return ICON_TYPES.CROSTINI;
        default:
            console.error('Unable to determine icon for vmType: ' + vmType);
            return '';
    }
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * FilesAppEntry represents a single Entry (file, folder or root) in the Files
 * app. Previously, we used the Entry type directly, but this limits the code to
 * only work with native Entry type which can't be instantiated in JS.
 * For now, Entry and FilesAppEntry should be used interchangeably.
 * See also FilesAppDirEntry for a folder-like interface.
 *
 * TODO(lucmult): Replace uses of Entry with FilesAppEntry implementations.
 */
class FilesAppEntry {
    constructor(rootType = null) {
        this.rootType = rootType;
    }
    /**
     * @returns the class name of this object. It's a workaround for the fact that
     * an instance created in the foreground page and sent to the background page
     * can't be checked with `instanceof`.
     */
    get typeName() {
        return 'FilesAppEntry';
    }
    /**
     * This attribute is defined on Entry.
     * @return true if this entry represents a Directory-like entry, as
     * in have sub-entries and implements {createReader} method.
     */
    get isDirectory() {
        return false;
    }
    /**
     * This attribute is defined on Entry.
     * @return true if this entry represents a File-like entry.
     * Implementations of FilesAppEntry are expected to have this as true.
     * Whereas implementations of FilesAppDirEntry are expected to have this as
     * false.
     */
    get isFile() {
        return true;
    }
    get filesystem() {
        return null;
    }
    /**
     * This attribute is defined on Entry.
     * @return absolute path from the file system's root to the entry. It can also
     * be thought of as a path which is relative to the root directory, prepended
     * with a "/" character.
     */
    get fullPath() {
        return '';
    }
    /**
     * This attribute is defined on Entry.
     * @return the name of the entry (the final part of the path, after the last.
     */
    get name() {
        return '';
    }
    /** This method is defined on Entry. */
    getParent(_success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    /** Gets metadata, such as "modificationTime" and "contentMimeType". */
    getMetadata(_success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    /**
     * Returns true if this entry object has a native representation such as Entry
     * or DirectoryEntry, this means it can interact with VolumeManager.
     */
    get isNativeType() {
        return false;
    }
    /**
     * Returns a FileSystemEntry if this instance has one, returns null if it
     * doesn't have or the entry hasn't been resolved yet. It's used to unwrap a
     * FilesAppEntry to be able to send to FileSystem API or fileManagerPrivate.
     */
    getNativeEntry() {
        return null;
    }
    copyTo(_newParent, _newName, _success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    moveTo(_newParent, _newName, _success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    remove(_success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
}
/**
 * Interface with minimal API shared among different types of FilesAppDirEntry
 * and native DirectoryEntry. UI components should be able to display any
 * implementation of FilesAppEntry.
 *
 * FilesAppDirEntry represents a DirectoryEntry-like (folder or root) in the
 * Files app. It's a specialization of FilesAppEntry extending the behavior for
 * folder, which is basically the method createReader.
 * As in FilesAppEntry, FilesAppDirEntry should be interchangeable with Entry
 * and DirectoryEntry.
 */
class FilesAppDirEntry extends FilesAppEntry {
    get typeName() {
        return 'FilesAppDirEntry';
    }
    get isDirectory() {
        return true;
    }
    get isFile() {
        return false;
    }
    /**
     * @return Returns a reader compatible with DirectoryEntry.createReader (from
     * Web Standards) that reads the children of this instance.
     *
     * This method is defined on DirectoryEntry.
     */
    createReader() {
        return {};
    }
    getFile(_path, _options, _success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    getDirectory(_path, _options, _success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
    removeRecursively(_success, error) {
        if (error) {
            setTimeout(error, 0, new Error('Not implemented'));
        }
    }
}
/**
 * FakeEntry is used for entries that used only for UI, that weren't generated
 * by FileSystem API, like Drive, Downloads or Provided.
 */
class FakeEntry extends FilesAppDirEntry {
    /**
     * @param label Translated text to be displayed to user.
     * @param rootType Root type of this entry. Used on Recents to filter the
     *    source of recent files/directories. Used on Recents to filter recent
     *    files by their file types.
     * @param sourceRestriction Used to communicate restrictions about sources to
     *   chrome.fileManagerPrivate.getRecentFiles API.
     * @param fileCategory Used to communicate category filter to
     *   chrome.fileManagerPrivate.getRecentFiles API.
     */
    constructor(label, rootType, sourceRestriction, fileCategory) {
        super(rootType);
        this.label = label;
        this.sourceRestriction = sourceRestriction;
        this.fileCategory = fileCategory;
        /**
         * FakeEntry can be disabled if it represents the placeholder of the real
         * volume.
         */
        this.disabled = false;
    }
    get typeName() {
        return 'FakeEntry';
    }
    get isDirectory() {
        return true;
    }
    get isFile() {
        return false;
    }
    /** String used to determine the icon. */
    get iconName() {
        return '';
    }
    /**
     * FakeEntry can be a placeholder for the real volume, if so
     * this field will be the volume type of the volume it
     * represents.
     */
    get volumeType() {
        return null;
    }
}
/**
 * A reader compatible with DirectoryEntry.createReader (from Web Standards)
 * that reads a static list of entries, provided at construction time.
 * https://developer.mozilla.org/en-US/docs/Web/API/FileSystemDirectoryReader
 * It can be used by DirectoryEntry-like such as EntryList to return its
 * entries.
 */
class StaticReader {
    /**
     * @param entries_ Array of Entry-like instances that will be returned/read by
     * this reader.
     */
    constructor(entries_) {
        this.entries_ = entries_;
    }
    /**
     * Reads array of entries via |success| callback.
     *
     * @param success A callback that will be called multiple times with the
     * entries, last call will be called with an empty array indicating that no
     * more entries available.
     * @param _error A callback that's never called, it's here to match the
     * signature from the Web Standards.
     */
    readEntries(success, _error) {
        const entries = this.entries_;
        // readEntries is suppose to return empty result when there are no more
        // files to return, so we clear the entries_ attribute for next call.
        this.entries_ = [];
        // Triggers callback asynchronously.
        setTimeout(() => success(entries), 0);
    }
}
/**
 * A reader compatible with DirectoryEntry.createReader (from Web Standards),
 * It chains entries from one reader to another, creating a combined set of
 * entries from all readers.
 */
class CombinedReaders {
    /**
     * @param readers_ Array of all readers that will have their entries combined.
     */
    constructor(readers_) {
        this.readers_ = readers_;
        // Reverse readers_ so the readEntries can just use pop() to get the next.
        this.readers_.reverse();
        this.currentReader_ = this.readers_.pop();
    }
    /**
     * @param success returning entries of all readers, it's called with empty
     * Array when there is no more entries to return.
     * @param error called when error happens when reading from readers for this
     * implementation.
     */
    readEntries(success, error) {
        if (!this.currentReader_) {
            // If there is no more reader to consume, just return an empty result
            // which indicates that read has finished.
            success([]);
            return;
        }
        this.currentReader_.readEntries((results) => {
            if (results.length) {
                success(results);
            }
            else {
                // If there isn't no more readers, finish by calling success with no
                // results.
                if (!this.readers_.length) {
                    success([]);
                    return;
                }
                // Move to next reader and start consuming it.
                this.currentReader_ = this.readers_.pop();
                this.readEntries(success, error);
            }
        }, error);
    }
}
/**
 * EntryList, a DirectoryEntry-like object that contains entries. Initially used
 * to implement "My Files" containing VolumeEntry for "Downloads", "Linux
 * Files" and "Play Files".
 */
class EntryList extends FilesAppDirEntry {
    /**
     * @param label: Label to be used when displaying to user, it should
     *    already translated.
     * @param rootType root type.
     * @param devicePath Path belonging to the external media device. Partitions
     * on the same external drive have the same device path.
     */
    constructor(label, rootType, devicePath = '') {
        super(rootType);
        this.label = label;
        this.devicePath = devicePath;
        /** Children entries of this EntryList instance. */
        this.children_ = [];
        /**
         * EntryList can be a placeholder of a real volume (e.g. MyFiles or
         * DriveFakeRootEntryList). It can be disabled if the corresponding volume
         * type is disabled.
         */
        this.disabled = false;
    }
    get typeName() {
        return 'EntryList';
    }
    get isDirectory() {
        return true;
    }
    get isFile() {
        return false;
    }
    get fullPath() {
        return '/';
    }
    /**
     * @return List of entries that are shown as
     *     children of this Volume in the UI, but are not actually entries of the
     *     Volume.  E.g. 'Play files' is shown as a child of 'My files'.
     */
    getUiChildren() {
        return this.children_;
    }
    get name() {
        return this.label;
    }
    get isNativeType() {
        return false;
    }
    getMetadata(success, _error) {
        // Defaults modificationTime to current time just to have a valid value.
        setTimeout(() => success({ modificationTime: new Date(), size: 0 }), 0);
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toURL() {
        let url = `entry-list://${this.rootType}`;
        if (this.devicePath) {
            url += `/${this.devicePath}`;
        }
        return url;
    }
    getParent(success, _error) {
        if (success) {
            setTimeout(() => success(this), 0);
        }
    }
    /**
     * @param entry that should be added as
     * child of this EntryList.
     * This method is specific to EntryList instance.
     */
    addEntry(entry) {
        this.children_.push(entry);
        // Only VolumeEntry can have prefix set because it sets on VolumeInfo,
        // which is then used on LocationInfo/PathComponent.
        const volumeEntry = entry;
        if (volumeEntry.typeName === 'VolumeEntry') {
            volumeEntry.setPrefix(this);
        }
    }
    /**
     * @return Returns a reader compatible with
     * DirectoryEntry.createReader (from Web Standards) that reads the children of
     * this EntryList instance.
     * This method is defined on DirectoryEntry.
     */
    createReader() {
        return new StaticReader(this.children_);
    }
    /**
     * This method is specific to VolumeEntry/EntryList instance.
     * Note: we compare the volumeId instead of the whole volumeInfo reference
     * because the same volume could be mounted multiple times and every time a
     * new volumeInfo is created.
     * @return index of entry on this EntryList or -1 if not found.
     */
    findIndexByVolumeInfo(volumeInfo) {
        return this.children_.findIndex(childEntry => childEntry.volumeInfo ?
            childEntry.volumeInfo.volumeId ===
                volumeInfo.volumeId :
            false);
    }
    /**
     * Removes the first volume with the given type.
     * @param volumeType desired type.
     * This method is specific to VolumeEntry/EntryList instance.
     * @return if entry was removed.
     */
    removeByVolumeType(volumeType) {
        const childIndex = this.children_.findIndex(childEntry => {
            const volumeInfo = childEntry.volumeInfo;
            return volumeInfo && volumeInfo.volumeType === volumeType;
        });
        if (childIndex !== -1) {
            this.children_.splice(childIndex, 1);
            return true;
        }
        return false;
    }
    /**
     * Removes all entries that match the rootType.
     * @param rootType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByRootType(rootType) {
        this.children_ = this.children_.filter(entry => entry.rootType !== rootType);
    }
    /**
     * Removes all entries that match the volumeType.
     * @param volumeType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByVolumeType(volumeType) {
        this.children_ = this.children_.filter(entry => entry.volumeType !== volumeType);
    }
    /**
     * Removes the entry.
     * @param entry to be removed.
     * This method is specific to EntryList and VolumeEntry instance.
     * @return true if entry was removed.
     */
    removeChildEntry(entry) {
        const childIndex = this.children_.findIndex(childEntry => isSameEntry(childEntry, entry));
        if (childIndex !== -1) {
            this.children_.splice(childIndex, 1);
            return true;
        }
        return false;
    }
    getNativeEntry() {
        return null;
    }
    /**
     * EntryList can be a placeholder for the real volume (e.g. MyFiles or
     * DriveFakeRootEntryList), if so this field will be the volume type of the
     * volume it represents.
     */
    get volumeType() {
        switch (this.rootType) {
            case RootType.MY_FILES:
                return VolumeType.DOWNLOADS;
            case RootType.DRIVE_FAKE_ROOT:
                return VolumeType.DRIVE;
            default:
                return null;
        }
    }
}
/**
 * A DirectoryEntry-like which represents a Volume, based on VolumeInfo.
 *
 * It uses composition to behave like a DirectoryEntry and proxies some calls
 * to its VolumeInfo instance.
 *
 * It's used to be able to add a volume as child of |EntryList| and make volume
 * displayable on file list.
 */
class VolumeEntry extends FilesAppDirEntry {
    /** @param volumeInfo VolumeInfo for this entry. */
    constructor(volumeInfo) {
        super();
        this.volumeInfo = volumeInfo;
        /**
         * Additional entries that will be displayed together with this Volume's
         * entries.
         */
        this.children_ = [];
        this.disabled = false;
        this.rootEntry_ = this.volumeInfo.displayRoot;
        if (!this.rootEntry_) {
            this.volumeInfo.resolveDisplayRoot((displayRoot) => {
                this.rootEntry_ = displayRoot;
            });
        }
    }
    get typeName() {
        return 'VolumeEntry';
    }
    get volumeType() {
        return this.volumeInfo.volumeType;
    }
    get filesystem() {
        return this.rootEntry_ ? this.rootEntry_.filesystem : null;
    }
    /**
     * @return List of entries that are shown as
     *     children of this Volume in the UI, but are not
     * actually entries of the Volume.  E.g. 'Play files' is
     * shown as a child of 'My files'.  Use createReader to find
     * real child entries of the Volume's filesystem.
     */
    getUiChildren() {
        return this.children_;
    }
    get fullPath() {
        return this.rootEntry_ ? this.rootEntry_.fullPath : '';
    }
    get isDirectory() {
        return this.rootEntry_ ? this.rootEntry_.isDirectory : true;
    }
    get isFile() {
        return this.rootEntry_ ? this.rootEntry_.isFile : false;
    }
    /**
     * @see https://github.com/google/closure-compiler/blob/mastexterns/browser/fileapi.js
     * @param path Entry fullPath.
     */
    getDirectory(path, options, success, error) {
        if (!this.rootEntry_) {
            if (error) {
                setTimeout(() => error(new Error('Root entry not resolved yet')), 0);
            }
            return;
        }
        this.rootEntry_.getDirectory(path, options, success, error);
    }
    /**
     * @see https://github.com/google/closure-compiler/blob/mastexterns/browser/fileapi.js
     */
    getFile(path, options, success, error) {
        if (!this.rootEntry_) {
            if (error) {
                setTimeout(() => error(new Error('Root entry not resolved yet')), 0);
            }
            return;
        }
        this.rootEntry_.getFile(path, options, success, error);
    }
    get name() {
        return this.volumeInfo.label;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toURL() {
        return this.rootEntry_?.toURL() ?? '';
    }
    /** String used to determine the icon. */
    get iconName() {
        if (this.volumeInfo.volumeType === VolumeType.GUEST_OS) {
            return vmTypeToIconName(this.volumeInfo.vmType);
        }
        if (this.volumeInfo.volumeType === VolumeType.DOWNLOADS) {
            return VolumeType.MY_FILES;
        }
        return this.volumeInfo.volumeType;
    }
    /**
     * callback, it returns itself since EntryList is intended to be used as
     * root node and the Web Standard says to do so.
     * @param _error callback, not used for this implementation.
     */
    getParent(success, _error) {
        if (success) {
            setTimeout(() => success(this), 0);
        }
    }
    getMetadata(success, error) {
        this.rootEntry_.getMetadata(success, error);
    }
    get isNativeType() {
        return true;
    }
    getNativeEntry() {
        return this.rootEntry_;
    }
    /**
     * @return Returns a reader from root entry, which is compatible with
     * DirectoryEntry.createReader (from Web Standards). This method is defined on
     * DirectoryEntry.
     */
    createReader() {
        const readers = [];
        if (this.rootEntry_) {
            readers.push(this.rootEntry_.createReader());
        }
        if (this.children_.length) {
            readers.push(new StaticReader(this.children_));
        }
        return new CombinedReaders(readers);
    }
    /**
     * @param entry An entry to be used as prefix of this instance on breadcrumbs
     *     path, e.g. "My Files > Downloads", "My Files" is a prefixEntry on
     *     "Downloads" VolumeInfo.
     */
    setPrefix(entry) {
        this.volumeInfo.prefixEntry = entry;
    }
    /**
     * @param entry that should be added as child of this VolumeEntry. This method
     * is specific to VolumeEntry instance.
     */
    addEntry(entry) {
        this.children_.push(entry);
        // Only VolumeEntry can have prefix set because it sets on
        // VolumeInfo, which is then used on
        // LocationInfo/PathComponent.
        const volumeEntry = entry;
        if (volumeEntry.typeName === 'VolumeEntry') {
            volumeEntry.setPrefix(this);
        }
    }
    /**
     *     that's desired to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     * Note: we compare the volumeId instead of the whole volumeInfo reference
     * because the same volume could be mounted multiple times and every time a
     * new volumeInfo is created.
     * @return index of entry within VolumeEntry or -1 if not found.
     */
    findIndexByVolumeInfo(volumeInfo) {
        return this.children_.findIndex(childEntry => childEntry.volumeInfo?.volumeId ===
            volumeInfo.volumeId);
    }
    /**
     * Removes the first volume with the given type.
     * @param volumeType desired type.
     * This method is specific to VolumeEntry/EntryList instance.
     * @return if entry was removed.
     */
    removeByVolumeType(volumeType) {
        const childIndex = this.children_.findIndex(childEntry => {
            return childEntry.volumeInfo?.volumeType ===
                volumeType;
        });
        if (childIndex !== -1) {
            this.children_.splice(childIndex, 1);
            return true;
        }
        return false;
    }
    /**
     * Removes all entries that match the rootType.
     * @param rootType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByRootType(rootType) {
        this.children_ = this.children_.filter(entry => entry.rootType !== rootType);
    }
    /**
     * Removes all entries that match the volumeType.
     * @param volumeType to be removed.
     * This method is specific to VolumeEntry/EntryList instance.
     */
    removeAllByVolumeType(volumeType) {
        this.children_ = this.children_.filter(entry => entry.volumeType !== volumeType);
    }
    /**
     * Removes the entry.
     * @param entry to be removed.
     * This method is specific to EntryList and VolumeEntry instance.
     * @return if entry was removed.
     */
    removeChildEntry(entry) {
        const childIndex = this.children_.findIndex(childEntry => isSameEntry(childEntry, entry));
        if (childIndex !== -1) {
            this.children_.splice(childIndex, 1);
            return true;
        }
        return false;
    }
}
/**
 * FakeEntry is used for entries that used only for UI, that weren't generated
 * by FileSystem API, like Drive, Downloads or Provided.
 */
class FakeEntryImpl extends FakeEntry {
    /**
     * @param label Translated text to be displayed to user.
     * @param rootType Root type of this entry. used on Recents to filter the
     *    source of recent files/directories. used on Recents to filter recent
     *    files by their file types.
     * @param sourceRestriction Used to communicate restrictions about sources to
     * chrome.fileManagerPrivate.getRecentFiles API.
     * @param fileCategory Used to communicate file-type filter to
     * chrome.fileManagerPrivate.getRecentFiles API.
     */
    constructor(label, rootType, sourceRestriction, fileCategory) {
        super(label, rootType, sourceRestriction, fileCategory);
    }
    get name() {
        return this.label;
    }
    get fullPath() {
        return '/';
    }
    /**
     * FakeEntry is used as root, so doesn't have a parent and should return
     * itself. callback, it returns itself since EntryList is intended to be used
     * as root node and the Web Standard says to do so.
     * @param _error callback, not used for this implementation.
     */
    getParent(success, _error) {
        if (success) {
            setTimeout(() => success(this), 0);
        }
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toURL() {
        let url = `fake-entry://${this.rootType}`;
        if (this.fileCategory) {
            url += `/${this.fileCategory}`;
        }
        return url;
    }
    /**
     * @return List of entries that are shown as children of this Volume in the
     *     UI, but are not actually entries of the Volume.  E.g. 'Play files' is
     *     shown as a child of 'My files'.
     */
    getUiChildren() {
        return [];
    }
    /** String used to determine the icon. */
    get iconName() {
        // When Drive volume isn't available yet, the
        // FakeEntry should show the "drive" icon.
        if (this.rootType === RootType.DRIVE_FAKE_ROOT) {
            return RootType.DRIVE;
        }
        return this.rootType ?? '';
    }
    getMetadata(success, _error) {
        setTimeout(() => success({ modificationTime: new Date(), size: 0 }), 0);
    }
    get isNativeType() {
        return false;
    }
    getNativeEntry() {
        return null;
    }
    /**
     * @return Returns a reader compatible with DirectoryEntry.createReader (from
     * Web Standards) that reads 0 entries.
     */
    createReader() {
        return new StaticReader([]);
    }
    /**
     * FakeEntry can be a placeholder for the real volume, if so this field will
     * be the volume type of the volume it represents.
     */
    get volumeType() {
        // Recent rootType has no corresponding volume
        // type, and it will throw error in the below
        // getVolumeTypeFromRootType() call, we need to
        // return null here.
        if (this.rootType === RootType.RECENT) {
            return null;
        }
        return getVolumeTypeFromRootType(this.rootType);
    }
}
/**
 * GuestOsPlaceholder is used for placeholder entries in the UI, representing
 * Guest OSs (e.g. Crostini) that could be mounted but aren't yet.
 */
class GuestOsPlaceholder extends FakeEntryImpl {
    /**
     * @param label Translated text to be displayed to user.
     * @param guest_id Id of the guest
     * @param vm_type Type of the underlying VM
     */
    constructor(label, guest_id, vm_type) {
        super(label, RootType.GUEST_OS);
        this.guest_id = guest_id;
        this.vm_type = vm_type;
    }
    get typeName() {
        return 'GuestOsPlaceholder';
    }
    /** String used to determine the icon. */
    get iconName() {
        return vmTypeToIconName(this.vm_type);
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    toURL() {
        return `fake-entry://guest-os/${this.guest_id}`;
    }
    get volumeType() {
        if (this.vm_type === chrome.fileManagerPrivate.VmType.ARCVM) {
            return VolumeType.ANDROID_FILES;
        }
        return VolumeType.GUEST_OS;
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Helpers for APIs used within Files app.
 */
/**
 * Opens a new window for Files SWA.
 */
async function openWindow(params) {
    return promisify(chrome.fileManagerPrivate.openWindow, params);
}
async function getPreferences() {
    return promisify(chrome.fileManagerPrivate.getPreferences);
}
async function validatePathNameLength(parentEntry, name) {
    return promisify(chrome.fileManagerPrivate.validatePathNameLength, unwrapEntry(parentEntry), name);
}
/**
 * Wrap the chrome.fileManagerPrivate.getSizeStats function in an async/await
 * compatible style.
 */
async function getSizeStats(volumeId) {
    return promisify(chrome.fileManagerPrivate.getSizeStats, volumeId);
}
/**
 * Wrap the chrome.fileManagerPrivate.getDriveQuotaMetadata function in an
 * async/await compatible style.
 */
async function getDriveQuotaMetadata(entry) {
    return promisify(chrome.fileManagerPrivate.getDriveQuotaMetadata, unwrapEntry(entry));
}
/**
 * Retrieves the current holding space state, for example the list of items the
 * holding space currently contains.
 */
async function getHoldingSpaceState() {
    return promisify(chrome.fileManagerPrivate.getHoldingSpaceState);
}
/**
 * Wrap the chrome.fileManagerPrivate.getDisallowedTransfers function in an
 * async/await compatible style.
 */
async function getDisallowedTransfers(entries, destinationEntry, isMove) {
    return promisify(chrome.fileManagerPrivate.getDisallowedTransfers, entries.map(e => unwrapEntry(e)), unwrapEntry(destinationEntry), isMove);
}
/**
 * Wrap the chrome.fileManagerPrivate.getDlpMetadata function in an async/await
 * compatible style.
 */
async function getDlpMetadata(entries) {
    return promisify(chrome.fileManagerPrivate.getDlpMetadata, entries.map(e => unwrapEntry(e)));
}
/**
 * Retrieves the list of components to which the transfer of an Entry is blocked
 * by Data Leak Prevention (DLP) policy.
 */
async function getDlpBlockedComponents(sourceUrl) {
    return promisify(chrome.fileManagerPrivate.getDlpBlockedComponents, sourceUrl);
}
/**
 * Retrieves Data Leak Prevention (DLP) restriction details.
 */
async function getDlpRestrictionDetails(sourceUrl) {
    return promisify(chrome.fileManagerPrivate.getDlpRestrictionDetails, sourceUrl);
}
/**
 * Retrieves the caller that created the dialog (Save As/File Picker).
 */
async function getDialogCaller() {
    return promisify(chrome.fileManagerPrivate.getDialogCaller);
}
/**
 * Lists Guest OSs which support having their files mounted.
 */
async function listMountableGuests() {
    return promisify(chrome.fileManagerPrivate.listMountableGuests);
}
/**
 * Lists Guest OSs which support having their files mounted.
 */
async function mountGuest(id) {
    return promisify(chrome.fileManagerPrivate.mountGuest, id);
}
/*
 * FileSystemEntry helpers
 */
async function getParentEntry(entry) {
    return new Promise((resolve, reject) => {
        entry.getParent(resolve, reject);
    });
}
async function moveEntryTo(entry, parent, newName) {
    return new Promise((resolve, reject) => {
        entry.moveTo(parent, newName, resolve, reject);
    });
}
async function getFile(directory, filename, options) {
    return new Promise((resolve, reject) => {
        directory.getFile(filename, options, resolve, reject);
    });
}
async function getDirectory(directory, filename, options) {
    return new Promise((resolve, reject) => {
        directory.getDirectory(filename, options, resolve, reject);
    });
}
async function getEntry(directory, filename, isFile, options) {
    const getEntry = isFile ? getFile : getDirectory;
    return getEntry(directory, filename, options);
}
/**
 * Starts an IOTask of `type` and returns a taskId that can be used to cancel
 * or identify the ongoing IO operation.
 */
async function startIOTask(type, entries, params) {
    if (params.destinationFolder) {
        params.destinationFolder =
            unwrapEntry(params.destinationFolder);
    }
    return promisify(chrome.fileManagerPrivate.startIOTask, type, entries.map(e => unwrapEntry(e)), params);
}
/**
 * Parses .trashinfo files to retrieve the restore path and deletion date.
 */
async function parseTrashInfoFiles(entries) {
    return promisify(chrome.fileManagerPrivate.parseTrashInfoFiles, entries.map(e => unwrapEntry(e)));
}
async function getMimeType(entry) {
    return promisify(chrome.fileManagerPrivate.getMimeType, unwrapEntry(entry));
}
async function getFileTasks(entries, dlpSourceUrls) {
    return promisify(chrome.fileManagerPrivate.getFileTasks, entries.map(e => unwrapEntry(e)), dlpSourceUrls);
}
async function executeTask(taskDescriptor, entries) {
    return promisify(chrome.fileManagerPrivate.executeTask, taskDescriptor, entries.map(e => unwrapEntry(e)));
}
/**
 * Gets the current bulk pin progress status.
 */
async function getBulkPinProgress() {
    return promisify(chrome.fileManagerPrivate.getBulkPinProgress);
}
/**
 * Starts calculating the required space to pin all the users items on their My
 * drive.
 */
async function calculateBulkPinRequiredSpace() {
    return promisify(chrome.fileManagerPrivate.calculateBulkPinRequiredSpace);
}
/**
 * Wrap the chrome.fileManagerPrivate.getDriveConnectionStatus function in an
 * async/await compatible style.
 */
async function getDriveConnectionState() {
    return promisify(chrome.fileManagerPrivate.getDriveConnectionState);
}
async function grantAccess(entries) {
    return promisify(chrome.fileManagerPrivate.grantAccess, entries);
}
async function getContentMimeType(fileEntry) {
    return promisify(chrome.fileManagerPrivate.getContentMimeType, fileEntry);
}
async function getContentMetadata(fileEntry, mimeType, includeImages) {
    return promisify(chrome.fileManagerPrivate.getContentMetadata, fileEntry, mimeType, includeImages);
}

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Creates a class for executing several asynchronous closures in a fifo queue.
 * Added tasks will be started in order they were added. Tasks are run
 * concurrently. At most, |limit| jobs will be run at the same time.
 */
class ConcurrentQueue {
    /** @param limit_ The number of tasks to run at the same time. */
    constructor(limit_) {
        this.limit_ = limit_;
        this.added_ = [];
        this.running_ = [];
        this.cancelled_ = false;
        console.assert(this.limit_ > 0, 'limit_ must be larger than 0');
    }
    /** @return whether a task is running. */
    isRunning() {
        return this.running_.length !== 0;
    }
    /** @return the number of waiting tasks. */
    getWaitingTasksCount() {
        return this.added_.length;
    }
    /** @return the number of running tasks. */
    getRunningTasksCount() {
        return this.running_.length;
    }
    /**
     * Enqueues a task for running as soon as possible. If there is already the
     * maximum number of tasks running, the run of this task is delayed until less
     * than the limit given at the construction time of tasks are running.
     */
    run(task) {
        if (this.cancelled_) {
            console.warn('Cannot add a new task: Queue is cancelled');
        }
        else {
            this.added_.push(task);
            this.scheduleNext_();
        }
    }
    /**
     * Cancels the queue. It removes all the not-run (yet) tasks. Note that this
     * does NOT stop tasks currently running.
     */
    cancel() {
        this.cancelled_ = true;
        this.added_.length = 0;
    }
    /** @return whether the queue is cancelling or is already cancelled. */
    isCancelled() {
        return this.cancelled_;
    }
    /**
     * Attempts to run another tasks. If there is less than the maximum number
     * of task running, it immediately executes the task at the front of
     * the queue.
     */
    maybeExecute_() {
        if (this.added_.length > 0) {
            if (this.running_.length < this.limit_) {
                this.execute_(this.added_.shift());
            }
        }
    }
    /**
     * Executes the given `task`. The task is placed in the list of running tasks
     * and immediately executed.
     */
    execute_(task) {
        this.running_.push(task);
        try {
            task(this.onTaskFinished_.bind(this, task));
            // If the task executes successfully, it calls the callback, where we
            // schedule a next run.
        }
        catch (e) {
            console.warn('Cannot execute a task', e);
            // If the task fails we call the callback explicitly.
            this.onTaskFinished_(task);
        }
    }
    /** Handles a task being finished. */
    onTaskFinished_(task) {
        this.removeTask_(task);
        this.scheduleNext_();
    }
    /** Attempts to remove the task that was running. */
    removeTask_(task) {
        const index = this.running_.indexOf(task);
        if (index >= 0) {
            this.running_.splice(index, 1);
        }
        else {
            console.warn('Cannot find a finished task among the running ones');
        }
    }
    /**
     * Schedules the next attempt at execution of the task at the front of
     * the queue.
     */
    scheduleNext_() {
        // TODO(1350885): Use setTimeout(()=>{this.maybeExecute();});
        this.maybeExecute_();
    }
    /** @return a string representation of the instance. */
    toString() {
        return 'ConcurrentQueue\n' +
            '- WaitingTasksCount: ' + this.getWaitingTasksCount() + '\n' +
            '- RunningTasksCount: ' + this.getRunningTasksCount() + '\n' +
            '- isCancelled: ' + this.isCancelled();
    }
}
/**
 * Creates a class for executing several asynchronous closures in a fifo queue.
 * Added tasks will be executed sequentially in order they were added.
 */
class AsyncQueue extends ConcurrentQueue {
    constructor() {
        super(1);
    }
    /**
     * Starts a task gated by this concurrent queue.
     * Typical usage:
     *
     *   const unlock = await queue.lock();
     *   try {
     *     // Operations of the task.
     *     ...
     *   } finally {
     *     unlock();
     *   }
     *
     * @return Completion callback to run when finished.
     */
    async lock() {
        return new Promise(resolve => this.run(unlock => resolve(unlock)));
    }
}
/** A task which is executed by Group. */
class GroupTask {
    /**
     * @param closure Closure with a completion callback to be executed.
     * @param dependencies Array of dependencies.
     * @param name Task identifier. Specify to use in dependencies.
     */
    constructor(closure, dependencies, name) {
        this.closure = closure;
        this.dependencies = dependencies;
        this.name = name;
    }
    /** @return a string representation of the instance. */
    toString() {
        return 'GroupTask\n' +
            '- name: ' + this.name + '\n' +
            '- dependencies: ' + this.dependencies.join();
    }
}
/**
 * Creates a class for executing several asynchronous closures in a group in a
 * dependency order.
 */
class Group {
    constructor() {
        this.addedTasks_ = {};
        this.pendingTasks_ = {};
        this.finishedTasks_ = {};
        this.completionCallbacks_ = [];
    }
    /** @return the pending tasks. */
    get pendingTasks() {
        return this.pendingTasks_;
    }
    /**
     * Enqueues a closure to be executed after dependencies are completed.
     *
     * @param closure Closure with a completion callback to be executed.
     * @param dependencies Array of dependencies. If no dependencies, then the
     *     the closure will be executed immediately.
     * @param maybeName Task identifier. Specify to use in dependencies.
     */
    add(closure, dependencies = [], maybeName) {
        const name = maybeName || (`(unnamed#${Object.keys(this.addedTasks_).length + 1})`);
        const task = new GroupTask(closure, dependencies, name);
        this.addedTasks_[name] = task;
        this.pendingTasks_[name] = task;
    }
    /**
     * Runs the enqueued closure in order of dependencies.
     * @param onCompletion Completion callback.
     */
    run(onCompletion) {
        if (onCompletion) {
            this.completionCallbacks_.push(onCompletion);
        }
        this.continue_();
    }
    /** Runs enqueued pending tasks whose dependencies are completed. */
    continue_() {
        // If all of the added tasks have finished, then call completion callbacks.
        if (Object.keys(this.addedTasks_).length ===
            Object.keys(this.finishedTasks_).length) {
            for (const callback of this.completionCallbacks_) {
                callback();
            }
            this.completionCallbacks_.length = 0;
            return;
        }
        for (const name in this.pendingTasks_) {
            const task = this.pendingTasks_[name];
            let dependencyMissing = false;
            for (const dependency of task.dependencies) {
                // Check if the dependency has finished.
                if (!this.finishedTasks_[dependency]) {
                    dependencyMissing = true;
                }
            }
            // All dependences finished, therefore start the task.
            if (!dependencyMissing) {
                delete this.pendingTasks_[task.name];
                task.closure(this.finish_.bind(this, task));
            }
        }
    }
    /** Finishes the passed task and continues executing enqueued closures. */
    finish_(task) {
        this.finishedTasks_[task.name] = task;
        this.continue_();
    }
}
/**
 * Aggregates consecutive calls and executes the closure only once instead of
 * several times. The first call is always called immediately, and the next
 * consecutive ones are aggregated and the closure is called only once once
 * |delay| amount of time passes after the last call to run().
 */
class Aggregator {
    /**
     * @param closure_ Closure to be aggregated.
     * @param delay_ Minimum aggregation time in milliseconds.
     */
    constructor(closure_, delay_ = 50) {
        this.closure_ = closure_;
        this.delay_ = delay_;
        this.scheduledRunsTimer_ = null;
        this.lastRunTime_ = 0;
    }
    /**
     * Runs a closure. Skips consecutive calls. The first call is called
     * immediately.
     */
    run() {
        // If recently called, then schedule the consecutive call with a delay.
        if (Date.now() - this.lastRunTime_ < this.delay_) {
            this.cancelScheduledRuns_();
            this.scheduledRunsTimer_ =
                setTimeout(this.runImmediately_.bind(this), this.delay_ + 1);
            this.lastRunTime_ = Date.now();
            return;
        }
        // Otherwise, run immediately.
        this.runImmediately_();
    }
    /** Calls the schedule immediately and cancels any scheduled calls. */
    runImmediately_() {
        this.cancelScheduledRuns_();
        this.closure_();
        this.lastRunTime_ = Date.now();
    }
    /** Cancels all scheduled runs (if any). */
    cancelScheduledRuns_() {
        if (this.scheduledRunsTimer_) {
            clearTimeout(this.scheduledRunsTimer_);
            this.scheduledRunsTimer_ = null;
        }
    }
}
/**
 * Samples calls so that they are not called too frequently. The first call is
 * always called immediately, and the following calls may be skipped or delayed
 * to keep each interval no less than `minInterval_`.
 */
class RateLimiter {
    /**
     * @param closure_ Closure to be called.
     * @param minInterval_ Minimum interval between each call in milliseconds.
     */
    constructor(closure_, minInterval_ = 200) {
        this.closure_ = closure_;
        this.minInterval_ = minInterval_;
        this.scheduledRunsTimer_ = 0;
        /** Last time the closure is called. */
        this.lastRunTime_ = 0;
    }
    /**
     * Requests to run the closure. Skips or delays calls so that the intervals
     * between calls are no less than `minInterval_` milliseconds.
     */
    run() {
        const now = Date.now();
        // If |minInterval| has not passed since the closure is run, skips or delays
        // this run.
        if (now - this.lastRunTime_ < this.minInterval_) {
            // Delays this run only when there is no scheduled run.
            // Otherwise, simply skip this run.
            if (!this.scheduledRunsTimer_) {
                this.scheduledRunsTimer_ = setTimeout(this.runImmediately.bind(this), this.lastRunTime_ + this.minInterval_ - now);
            }
            return;
        }
        // Otherwise, run immediately
        this.runImmediately();
    }
    /** Calls the scheduled run immediately and cancels any scheduled calls. */
    runImmediately() {
        this.cancelScheduledRuns_();
        this.lastRunTime_ = Date.now();
        this.closure_();
    }
    /** Cancels all scheduled runs (if any). */
    cancelScheduledRuns_() {
        if (this.scheduledRunsTimer_) {
            clearTimeout(this.scheduledRunsTimer_);
            this.scheduledRunsTimer_ = 0;
        }
    }
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * This file serves as a shim to tslib. Using experimental features like
 * decorator will make TS generates compiled JS code like "import 'tslib'",
 * but our existing build toolchain can't handle that import correctly. To
 * mitigate that, we use "noEmitHelpers: true" in the tsconfig to make sure
 * it won't generate "import 'tslib'", but this configuration requires the
 * functions from tslib are available in the global space, hence the assignment
 * below.
 *
 * Note: for any functions we expose here, we also need to add function
 * type declaration to closure type externs in app_window_common.js.
 */
globalThis.__decorate = __decorate$1;

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A base class for all Files app(xf) widgets.
 */
/**
 * A base class for all Files app(xf) widgets.
 */
class XfBase extends LitElement {
}
// Expose shadowRootOptions so child classes can use this from XfBase directly.
XfBase.shadowRootOptions = LitElement.shadowRootOptions;

const styleMod$3 = document.createElement('dom-module');
styleMod$3.appendChild(html$1 `
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);
styleMod$3.register('cr-hidden-style');

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const template$1 = html$1`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100-rgb: 244, 199, 195;  /* #f4c7c3 */
      --google-red-100: rgb(var(--google-red-100-rgb));
      --google-red-300-rgb: 230, 124, 115;  /* #e67c73 */
      --google-red-300: rgb(var(--google-red-300-rgb));
      --google-red-500-rgb: 219, 68, 55;  /* #db4437 */
      --google-red-500: rgb(var(--google-red-500-rgb));
      --google-red-700-rgb: 197, 57, 41;  /* #c53929 */
      --google-red-700: rgb(var(--google-red-700-rgb));

      --google-blue-100-rgb: 198, 218, 252;  /* #c6dafc */
      --google-blue-100: rgb(var(--google-blue-100-rgb));
      --google-blue-300-rgb: 123, 170, 247;  /* #7baaf7 */
      --google-blue-300: rgb(var(--google-blue-300-rgb));
      --google-blue-500-rgb: 66, 133, 244;  /* #4285f4 */
      --google-blue-500: rgb(var(--google-blue-500-rgb));
      --google-blue-700-rgb: 51, 103, 214;  /* #3367d6 */
      --google-blue-700: rgb(var(--google-blue-700-rgb));

      --google-green-100-rgb: 183, 225, 205;  /* #b7e1cd */
      --google-green-100: rgb(var(--google-green-100-rgb));
      --google-green-300-rgb: 87, 187, 138;  /* #57bb8a */
      --google-green-300: rgb(var(--google-green-300-rgb));
      --google-green-500-rgb: 15, 157, 88;  /* #0f9d58 */
      --google-green-500: rgb(var(--google-green-500-rgb));
      --google-green-700-rgb: 11, 128, 67;  /* #0b8043 */
      --google-green-700: rgb(var(--google-green-700-rgb));

      --google-yellow-100-rgb: 252, 232, 178;  /* #fce8b2 */
      --google-yellow-100: rgb(var(--google-yellow-100-rgb));
      --google-yellow-300-rgb: 247, 203, 77;  /* #f7cb4d */
      --google-yellow-300: rgb(var(--google-yellow-300-rgb));
      --google-yellow-500-rgb: 244, 180, 0;  /* #f4b400 */
      --google-yellow-500: rgb(var(--google-yellow-500-rgb));
      --google-yellow-700-rgb: 240, 147, 0;  /* #f09300 */
      --google-yellow-700: rgb(var(--google-yellow-700-rgb));

      --google-grey-100-rgb: 245, 245, 245;  /* #f5f5f5 */
      --google-grey-100: rgb(var(--google-grey-100-rgb));
      --google-grey-300-rgb: 224, 224, 224;  /* #e0e0e0 */
      --google-grey-300: rgb(var(--google-grey-300-rgb));
      --google-grey-500-rgb: 158, 158, 158;  /* #9e9e9e */
      --google-grey-500: rgb(var(--google-grey-500-rgb));
      --google-grey-700-rgb: 97, 97, 97;  /* #616161 */
      --google-grey-700: rgb(var(--google-grey-700-rgb));

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;
template$1.setAttribute('style', 'display: none;');
document.head.appendChild(template$1.content);

const template = html$1 `
<style>
html{--google-blue-50-rgb:232,240,254;--google-blue-50:rgb(var(--google-blue-50-rgb));--google-blue-100-rgb:210,227,252;--google-blue-100:rgb(var(--google-blue-100-rgb));--google-blue-200-rgb:174,203,250;--google-blue-200:rgb(var(--google-blue-200-rgb));--google-blue-300-rgb:138,180,248;--google-blue-300:rgb(var(--google-blue-300-rgb));--google-blue-400-rgb:102,157,246;--google-blue-400:rgb(var(--google-blue-400-rgb));--google-blue-500-rgb:66,133,244;--google-blue-500:rgb(var(--google-blue-500-rgb));--google-blue-600-rgb:26,115,232;--google-blue-600:rgb(var(--google-blue-600-rgb));--google-blue-700-rgb:25,103,210;--google-blue-700:rgb(var(--google-blue-700-rgb));--google-blue-800-rgb:24,90,188;--google-blue-800:rgb(var(--google-blue-800-rgb));--google-blue-900-rgb:23,78,166;--google-blue-900:rgb(var(--google-blue-900-rgb));--google-green-50-rgb:230,244,234;--google-green-50:rgb(var(--google-green-50-rgb));--google-green-200-rgb:168,218,181;--google-green-200:rgb(var(--google-green-200-rgb));--google-green-300-rgb:129,201,149;--google-green-300:rgb(var(--google-green-300-rgb));--google-green-400-rgb:91,185,116;--google-green-400:rgb(var(--google-green-400-rgb));--google-green-500-rgb:52,168,83;--google-green-500:rgb(var(--google-green-500-rgb));--google-green-600-rgb:30,142,62;--google-green-600:rgb(var(--google-green-600-rgb));--google-green-700-rgb:24,128,56;--google-green-700:rgb(var(--google-green-700-rgb));--google-green-800-rgb:19,115,51;--google-green-800:rgb(var(--google-green-800-rgb));--google-green-900-rgb:13,101,45;--google-green-900:rgb(var(--google-green-900-rgb));--google-grey-50-rgb:248,249,250;--google-grey-50:rgb(var(--google-grey-50-rgb));--google-grey-100-rgb:241,243,244;--google-grey-100:rgb(var(--google-grey-100-rgb));--google-grey-200-rgb:232,234,237;--google-grey-200:rgb(var(--google-grey-200-rgb));--google-grey-300-rgb:218,220,224;--google-grey-300:rgb(var(--google-grey-300-rgb));--google-grey-400-rgb:189,193,198;--google-grey-400:rgb(var(--google-grey-400-rgb));--google-grey-500-rgb:154,160,166;--google-grey-500:rgb(var(--google-grey-500-rgb));--google-grey-600-rgb:128,134,139;--google-grey-600:rgb(var(--google-grey-600-rgb));--google-grey-700-rgb:95,99,104;--google-grey-700:rgb(var(--google-grey-700-rgb));--google-grey-800-rgb:60,64,67;--google-grey-800:rgb(var(--google-grey-800-rgb));--google-grey-900-rgb:32,33,36;--google-grey-900:rgb(var(--google-grey-900-rgb));--google-grey-900-white-4-percent:#292a2d;--google-purple-200-rgb:215,174,251;--google-purple-200:rgb(var(--google-purple-200-rgb));--google-purple-900-rgb:104,29,168;--google-purple-900:rgb(var(--google-purple-900-rgb));--google-red-300-rgb:242,139,130;--google-red-300:rgb(var(--google-red-300-rgb));--google-red-500-rgb:234,67,53;--google-red-500:rgb(var(--google-red-500-rgb));--google-red-600-rgb:217,48,37;--google-red-600:rgb(var(--google-red-600-rgb));--google-yellow-50-rgb:254,247,224;--google-yellow-50:rgb(var(--google-yellow-50-rgb));--google-yellow-100-rgb:254,239,195;--google-yellow-100:rgb(var(--google-yellow-100-rgb));--google-yellow-200-rgb:253,226,147;--google-yellow-200:rgb(var(--google-yellow-200-rgb));--google-yellow-300-rgb:253,214,51;--google-yellow-300:rgb(var(--google-yellow-300-rgb));--google-yellow-400-rgb:252,201,52;--google-yellow-400:rgb(var(--google-yellow-400-rgb));--google-yellow-500-rgb:251,188,4;--google-yellow-500:rgb(var(--google-yellow-500-rgb));--cr-primary-text-color:var(--google-grey-900);--cr-secondary-text-color:var(--google-grey-700);--cr-card-background-color:white;--cr-shadow-color:var(--google-grey-800);--cr-shadow-key-color_:color-mix(in srgb, var(--cr-shadow-color) 30%, transparent);--cr-shadow-ambient-color_:color-mix(in srgb, var(--cr-shadow-color) 15%, transparent);--cr-elevation-1:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 1px 3px 1px;--cr-elevation-2:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 2px 6px 2px;--cr-elevation-3:var(--cr-shadow-key-color_) 0 1px 3px 0,var(--cr-shadow-ambient-color_) 0 4px 8px 3px;--cr-elevation-4:var(--cr-shadow-key-color_) 0 2px 3px 0,var(--cr-shadow-ambient-color_) 0 6px 10px 4px;--cr-elevation-5:var(--cr-shadow-key-color_) 0 4px 4px 0,var(--cr-shadow-ambient-color_) 0 8px 12px 6px;--cr-card-shadow:var(--cr-elevation-2);--cr-checked-color:var(--google-blue-600);--cr-focused-item-color:var(--google-grey-300);--cr-form-field-label-color:var(--google-grey-700);--cr-hairline-rgb:0,0,0;--cr-iph-anchor-highlight-color:rgba(var(--google-blue-600-rgb), 0.1);--cr-link-color:var(--google-blue-700);--cr-menu-background-color:white;--cr-menu-background-focus-color:var(--google-grey-400);--cr-menu-shadow:0 2px 6px var(--paper-grey-500);--cr-separator-color:rgba(0, 0, 0, .06);--cr-title-text-color:rgb(90, 90, 90);--cr-toolbar-background-color:white;--cr-hover-background-color:rgba(var(--google-grey-900-rgb), .1);--cr-active-background-color:rgba(var(--google-grey-900-rgb), .16);--cr-focus-outline-color:rgba(var(--google-blue-600-rgb), .4)}@media (prefers-color-scheme:dark){html{--cr-primary-text-color:var(--google-grey-200);--cr-secondary-text-color:var(--google-grey-500);--cr-card-background-color:var(--google-grey-900-white-4-percent);--cr-card-shadow-color-rgb:0,0,0;--cr-checked-color:var(--google-blue-300);--cr-focused-item-color:var(--google-grey-800);--cr-form-field-label-color:var(--dark-secondary-color);--cr-hairline-rgb:255,255,255;--cr-iph-anchor-highlight-color:rgba(var(--google-grey-100-rgb), 0.1);--cr-link-color:var(--google-blue-300);--cr-menu-background-color:var(--google-grey-900);--cr-menu-background-focus-color:var(--google-grey-700);--cr-menu-background-sheen:rgba(255, 255, 255, .06);--cr-menu-shadow:rgba(0, 0, 0, .3) 0 1px 2px 0,rgba(0, 0, 0, .15) 0 3px 6px 2px;--cr-separator-color:rgba(255, 255, 255, .1);--cr-title-text-color:var(--cr-primary-text-color);--cr-toolbar-background-color:var(--google-grey-900-white-4-percent);--cr-hover-background-color:rgba(255, 255, 255, .1);--cr-active-background-color:rgba(var(--google-grey-200-rgb), .16);--cr-focus-outline-color:rgba(var(--google-blue-300-rgb), .4)}}@media (forced-colors:active){html{--cr-focus-outline-hcm:2px solid transparent;--cr-border-hcm:2px solid transparent}}html{--cr-button-edge-spacing:12px;--cr-button-height:32px;--cr-controlled-by-spacing:24px;--cr-default-input-max-width:264px;--cr-icon-ripple-size:36px;--cr-icon-ripple-padding:8px;--cr-icon-size:20px;--cr-icon-button-margin-start:16px;--cr-icon-ripple-margin:calc(var(--cr-icon-ripple-padding) * -1);--cr-section-min-height:48px;--cr-section-two-line-min-height:64px;--cr-section-padding:20px;--cr-section-vertical-padding:12px;--cr-section-indent-width:40px;--cr-section-indent-padding:calc(
      var(--cr-section-padding) + var(--cr-section-indent-width));--cr-section-vertical-margin:21px;--cr-centered-card-max-width:680px;--cr-centered-card-width-percentage:0.96;--cr-hairline:1px solid rgba(var(--cr-hairline-rgb), .14);--cr-separator-height:1px;--cr-separator-line:var(--cr-separator-height) solid var(--cr-separator-color);--cr-toolbar-overlay-animation-duration:150ms;--cr-toolbar-height:56px;--cr-container-shadow-height:6px;--cr-container-shadow-margin:calc(-1 * var(--cr-container-shadow-height));--cr-container-shadow-max-opacity:1;--cr-card-border-radius:8px;--cr-disabled-opacity:.38;--cr-form-field-bottom-spacing:16px;--cr-form-field-label-font-size:.625rem;--cr-form-field-label-height:1em;--cr-form-field-label-line-height:1}html[chrome-refresh-2023]{--cr-fallback-color-outline:rgb(116, 119, 117);--cr-fallback-color-primary:rgb(11, 87, 208);--cr-fallback-color-on-primary:rgb(255, 255, 255);--cr-fallback-color-primary-container:rgb(211, 227, 253);--cr-fallback-color-on-primary-container:rgb(4, 30, 73);--cr-fallback-color-secondary-container:rgb(194, 231, 255);--cr-fallback-color-on-secondary-container:rgb(0, 29, 53);--cr-fallback-color-neutral-container:rgb(242, 242, 242);--cr-fallback-color-neutral-outline:rgb(199, 199, 199);--cr-fallback-color-surface:rgb(255, 255, 255);--cr-fallback-color-on-surface-rgb:31,31,31;--cr-fallback-color-on-surface:rgb(var(--cr-fallback-color-on-surface-rgb));--cr-fallback-color-surface-variant:rgb(225, 227, 225);--cr-fallback-color-on-surface-variant:rgb(68, 71, 70);--cr-fallback-color-on-surface-subtle:rgb(71, 71, 71);--cr-fallback-color-inverse-primary:rgb(168, 199, 250);--cr-fallback-color-inverse-surface:rgb(48, 48, 48);--cr-fallback-color-inverse-on-surface:rgb(242, 242, 242);--cr-fallback-color-tonal-container:rgb(211, 227, 253);--cr-fallback-color-on-tonal-container:rgb(4, 30, 73);--cr-fallback-color-tonal-outline:rgb(168, 199, 250);--cr-fallback-color-error:rgb(179, 38, 30);--cr-fallback-color-divider:rgb(211, 227, 253);--cr-fallback-color-state-hover-on-prominent_:rgba(253, 252, 251, .1);--cr-fallback-color-state-on-subtle-rgb_:31,31,31;--cr-fallback-color-state-hover-on-subtle_:rgba(
      var(--cr-fallback-color-state-on-subtle-rgb_), .06);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(
      var(--cr-fallback-color-state-on-subtle-rgb_), .08);--cr-fallback-color-state-ripple-primary-rgb_:124,172,248;--cr-fallback-color-state-ripple-primary_:rgba(
      var(--cr-fallback-color-state-ripple-primary-rgb_), 0.32);--cr-fallback-color-base-container:rgba(105, 145, 214, .12);--cr-fallback-color-disabled-background:rgba(
      var(--cr-fallback-color-on-surface-rgb), .12);--cr-fallback-color-disabled-foreground:rgba(
      var(--cr-fallback-color-on-surface-rgb), var(--cr-disabled-opacity));--cr-hover-background-color:var(--color-sys-state-hover,
      rgba(var(--cr-fallback-color-on-surface-rgb), .08));--cr-hover-on-prominent-background-color:var(
      --color-sys-state-hover-on-prominent,
      var(--cr-fallback-color-state-hover-on-prominent_));--cr-hover-on-subtle-background-color:var(
      --color-sys-state-hover-on-subtle,
      var(--cr-fallback-color-state-hover-on-subtle_));--cr-active-background-color:var(--color-sys-state-pressed,
      rgba(var(--cr-fallback-color-on-surface-rgb), .12));--cr-active-on-primary-background-color:var(
      --color-sys-state-ripple-primary,
      var(--cr-fallback-color-state-ripple-primary_));--cr-active-neutral-on-subtle-background-color:var(
      --color-sys-state-ripple-neutral-on-subtle,
      var(--cr-fallback-color-state-ripple-neutral-on-subtle_));--cr-focus-outline-color:var(--color-sys-state-focus-ring,
      var(--cr-fallback-color-primary));--cr-primary-text-color:var(--color-primary-foreground,
      var(--cr-fallback-color-on-surface));--cr-secondary-text-color:var(--color-secondary-foreground,
      var(--cr-fallback-color-on-surface-variant));--cr-link-color:var(--color-link-foreground-default,
      var(--cr-fallback-color-primary));--cr-button-height:36px;--cr-shadow-color:var(--color-sys-shadow, rgb(0, 0, 0))}@media (prefers-color-scheme:dark){html[chrome-refresh-2023]{--cr-fallback-color-outline:rgb(142, 145, 143);--cr-fallback-color-primary:rgb(168, 199, 250);--cr-fallback-color-on-primary:rgb(6, 46, 111);--cr-fallback-color-primary-container:rgb(8, 66, 160);--cr-fallback-color-on-primary-container:rgb(211, 227, 253);--cr-fallback-color-secondary-container:rgb(0, 74, 119);--cr-fallback-color-on-secondary-container:rgb(194, 231, 255);--cr-fallback-color-neutral-container:rgb(42, 42, 42);--cr-fallback-color-neutral-outline:rgb(117, 117, 117);--cr-fallback-color-surface:rgb(26, 27, 30);--cr-fallback-color-on-surface-rgb:227,227,227;--cr-fallback-color-surface-variant:rgb(68, 71, 70);--cr-fallback-color-on-surface-variant:rgb(196, 199, 197);--cr-fallback-color-on-surface-subtle:rgb(199, 199, 199);--cr-fallback-color-inverse-primary:rgb(11, 87, 208);--cr-fallback-color-inverse-surface:rgb(227, 227, 227);--cr-fallback-color-inverse-on-surface:rgb(31, 31, 31);--cr-fallback-color-tonal-container:rgb(0, 74, 119);--cr-fallback-color-on-tonal-container:rgb(194, 231, 255);--cr-fallback-color-tonal-outline:rgb(0, 99, 155);--cr-fallback-color-error:rgb(242, 184, 181);--cr-fallback-color-divider:rgb(71, 71, 71);--cr-fallback-color-state-hover-on-prominent_:rgba(31, 31, 31, .06);--cr-fallback-color-state-on-subtle-rgb_:253,252,251;--cr-fallback-color-state-hover-on-subtle_:rgba(
        var(--cr-fallback-color-state-on-subtle-rgb_), .10);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(
        var(--cr-fallback-color-state-on-subtle-rgb_), .16);--cr-fallback-color-state-ripple-primary-rgb_:76,141,246;--cr-fallback-color-base-container:rgba(40, 40, 40, 1)}}@media (forced-colors:active){html[chrome-refresh-2023]{--cr-fallback-color-disabled-background:Canvas;--cr-fallback-color-disabled-foreground:GrayText}}
</style>
`;
document.head.appendChild(template.content);

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The class name to set on the document element.
 */
const CLASS_NAME = 'focus-outline-visible';
const docsToManager = new Map();
/**
 * This class sets a CSS class name on the HTML element of |doc| when the user
 * presses a key. It removes the class name when the user clicks anywhere.
 *
 * This allows you to write CSS like this:
 *
 * html.focus-outline-visible my-element:focus {
 *   outline: 5px auto -webkit-focus-ring-color;
 * }
 *
 * And the outline will only be shown if the user uses the keyboard to get to
 * it.
 *
 */
class FocusOutlineManager {
    // Whether focus change is triggered by a keyboard event.
    focusByKeyboard_ = true;
    classList_;
    /**
     * @param doc The document to attach the focus outline manager to.
     */
    constructor(doc) {
        this.classList_ = doc.documentElement.classList;
        doc.addEventListener('keydown', (e) => this.onEvent_(true, e), true);
        doc.addEventListener('mousedown', (e) => this.onEvent_(false, e), true);
        this.updateVisibility();
    }
    onEvent_(focusByKeyboard, e) {
        if (this.focusByKeyboard_ === focusByKeyboard) {
            return;
        }
        if (e instanceof KeyboardEvent && e.repeat) {
            // A repeated keydown should not trigger the focus state. For example,
            // there is a repeated ALT keydown if ALT+CLICK is used to open the
            // context menu and ALT is not released.
            return;
        }
        this.focusByKeyboard_ = focusByKeyboard;
        this.updateVisibility();
    }
    updateVisibility() {
        this.visible = this.focusByKeyboard_;
    }
    /**
     * Whether the focus outline should be visible.
     */
    set visible(visible) {
        this.classList_.toggle(CLASS_NAME, visible);
    }
    get visible() {
        return this.classList_.contains(CLASS_NAME);
    }
    /**
     * Gets a per document singleton focus outline manager.
     * @param doc The document to get the |FocusOutlineManager| for.
     * @return The per document singleton focus outline manager.
     */
    static forDocument(doc) {
        let manager = docsToManager.get(doc);
        if (!manager) {
            manager = new FocusOutlineManager(doc);
            docsToManager.set(doc, manager);
        }
        return manager;
    }
}

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * Chrome uses an older version of DOM Level 3 Keyboard Events
 *
 * Most keys are labeled as text, but some are Unicode codepoints.
 * Values taken from:
 * http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/keyset.html#KeySet-Set
 */
var KEY_IDENTIFIER = {
  'U+0008': 'backspace',
  'U+0009': 'tab',
  'U+001B': 'esc',
  'U+0020': 'space',
  'U+007F': 'del'
};

/**
 * Special table for KeyboardEvent.keyCode.
 * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
 * than that.
 *
 * Values from:
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
 */
var KEY_CODE = {
  8: 'backspace',
  9: 'tab',
  13: 'enter',
  27: 'esc',
  33: 'pageup',
  34: 'pagedown',
  35: 'end',
  36: 'home',
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  46: 'del',
  106: '*'
};

/**
 * MODIFIER_KEYS maps the short name for modifier keys used in a key
 * combo string to the property name that references those same keys
 * in a KeyboardEvent instance.
 */
var MODIFIER_KEYS = {
  'shift': 'shiftKey',
  'ctrl': 'ctrlKey',
  'alt': 'altKey',
  'meta': 'metaKey'
};

/**
 * KeyboardEvent.key is mostly represented by printable character made by
 * the keyboard, with unprintable keys labeled nicely.
 *
 * However, on OS X, Alt+char can make a Unicode character that follows an
 * Apple-specific mapping. In this case, we fall back to .keyCode.
 */
var KEY_CHAR = /[a-z0-9*]/;

/**
 * Matches a keyIdentifier string.
 */
var IDENT_CHAR = /U\+/;

/**
 * Matches arrow keys in Gecko 27.0+
 */
var ARROW_KEY = /^arrow/;

/**
 * Matches space keys everywhere (notably including IE10's exceptional name
 * `spacebar`).
 */
var SPACE_KEY = /^space(bar)?/;

/**
 * Matches ESC key.
 *
 * Value from: http://w3c.github.io/uievents-key/#key-Escape
 */
var ESC_KEY = /^escape$/;

/**
 * Transforms the key.
 * @param {string} key The KeyBoardEvent.key
 * @param {Boolean} [noSpecialChars] Limits the transformation to
 * alpha-numeric characters.
 */
function transformKey(key, noSpecialChars) {
  var validKey = '';
  if (key) {
    var lKey = key.toLowerCase();
    if (lKey === ' ' || SPACE_KEY.test(lKey)) {
      validKey = 'space';
    } else if (ESC_KEY.test(lKey)) {
      validKey = 'esc';
    } else if (lKey.length == 1) {
      if (!noSpecialChars || KEY_CHAR.test(lKey)) {
        validKey = lKey;
      }
    } else if (ARROW_KEY.test(lKey)) {
      validKey = lKey.replace('arrow', '');
    } else if (lKey == 'multiply') {
      // numpad '*' can map to Multiply on IE/Windows
      validKey = '*';
    } else {
      validKey = lKey;
    }
  }
  return validKey;
}

function transformKeyIdentifier(keyIdent) {
  var validKey = '';
  if (keyIdent) {
    if (keyIdent in KEY_IDENTIFIER) {
      validKey = KEY_IDENTIFIER[keyIdent];
    } else if (IDENT_CHAR.test(keyIdent)) {
      keyIdent = parseInt(keyIdent.replace('U+', '0x'), 16);
      validKey = String.fromCharCode(keyIdent).toLowerCase();
    } else {
      validKey = keyIdent.toLowerCase();
    }
  }
  return validKey;
}

function transformKeyCode(keyCode) {
  var validKey = '';
  if (Number(keyCode)) {
    if (keyCode >= 65 && keyCode <= 90) {
      // ascii a-z
      // lowercase is 32 offset from uppercase
      validKey = String.fromCharCode(32 + keyCode);
    } else if (keyCode >= 112 && keyCode <= 123) {
      // function keys f1-f12
      validKey = 'f' + (keyCode - 112 + 1);
    } else if (keyCode >= 48 && keyCode <= 57) {
      // top 0-9 keys
      validKey = String(keyCode - 48);
    } else if (keyCode >= 96 && keyCode <= 105) {
      // num pad 0-9
      validKey = String(keyCode - 96);
    } else {
      validKey = KEY_CODE[keyCode];
    }
  }
  return validKey;
}

/**
 * Calculates the normalized key for a KeyboardEvent.
 * @param {KeyboardEvent} keyEvent
 * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
 * transformation to alpha-numeric chars. This is useful with key
 * combinations like shift + 2, which on FF for MacOS produces
 * keyEvent.key = @
 * To get 2 returned, set noSpecialChars = true
 * To get @ returned, set noSpecialChars = false
 */
function normalizedKeyForEvent(keyEvent, noSpecialChars) {
  // Fall back from .key, to .detail.key for artifical keyboard events,
  // and then to deprecated .keyIdentifier and .keyCode.
  if (keyEvent.key) {
    return transformKey(keyEvent.key, noSpecialChars);
  }
  if (keyEvent.detail && keyEvent.detail.key) {
    return transformKey(keyEvent.detail.key, noSpecialChars);
  }
  return transformKeyIdentifier(keyEvent.keyIdentifier) ||
      transformKeyCode(keyEvent.keyCode) || '';
}

function keyComboMatchesEvent(keyCombo, event) {
  // For combos with modifiers we support only alpha-numeric keys
  var keyEvent = normalizedKeyForEvent(event, keyCombo.hasModifiers);
  return keyEvent === keyCombo.key &&
      (!keyCombo.hasModifiers ||
       (!!event.shiftKey === !!keyCombo.shiftKey &&
        !!event.ctrlKey === !!keyCombo.ctrlKey &&
        !!event.altKey === !!keyCombo.altKey &&
        !!event.metaKey === !!keyCombo.metaKey));
}

function parseKeyComboString(keyComboString) {
  if (keyComboString.length === 1) {
    return {combo: keyComboString, key: keyComboString, event: 'keydown'};
  }
  return keyComboString.split('+')
      .reduce(function(parsedKeyCombo, keyComboPart) {
        var eventParts = keyComboPart.split(':');
        var keyName = eventParts[0];
        var event = eventParts[1];

        if (keyName in MODIFIER_KEYS) {
          parsedKeyCombo[MODIFIER_KEYS[keyName]] = true;
          parsedKeyCombo.hasModifiers = true;
        } else {
          parsedKeyCombo.key = keyName;
          parsedKeyCombo.event = event || 'keydown';
        }

        return parsedKeyCombo;
      }, {combo: keyComboString.split(':').shift()});
}

function parseEventString(eventString) {
  return eventString.trim().split(' ').map(function(keyComboString) {
    return parseKeyComboString(keyComboString);
  });
}

/**
 * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
 * keyboard commands that pertain to [WAI-ARIA best
 * practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding). The
 * element takes care of browser differences with respect to Keyboard events and
 * uses an expressive syntax to filter key presses.
 *
 * Use the `keyBindings` prototype property to express what combination of keys
 * will trigger the callback. A key binding has the format
 * `"KEY+MODIFIER:EVENT": "callback"` (`"KEY": "callback"` or
 * `"KEY:EVENT": "callback"` are valid as well). Some examples:
 *
 *      keyBindings: {
 *        'space': '_onKeydown', // same as 'space:keydown'
 *        'shift+tab': '_onKeydown',
 *        'enter:keypress': '_onKeypress',
 *        'esc:keyup': '_onKeyup'
 *      }
 *
 * The callback will receive with an event containing the following information
 * in `event.detail`:
 *
 *      _onKeydown: function(event) {
 *        console.log(event.detail.combo); // KEY+MODIFIER, e.g. "shift+tab"
 *        console.log(event.detail.key); // KEY only, e.g. "tab"
 *        console.log(event.detail.event); // EVENT, e.g. "keydown"
 *        console.log(event.detail.keyboardEvent); // the original KeyboardEvent
 *      }
 *
 * Use the `keyEventTarget` attribute to set up event handlers on a specific
 * node.
 *
 * See the [demo source
 * code](https://github.com/PolymerElements/iron-a11y-keys-behavior/blob/master/demo/x-key-aware.html)
 * for an example.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */
const IronA11yKeysBehavior = {
  properties: {
    /**
     * The EventTarget that will be firing relevant KeyboardEvents. Set it to
     * `null` to disable the listeners.
     * @type {?EventTarget}
     */
    keyEventTarget: {
      type: Object,
      value: function() {
        return this;
      }
    },

    /**
     * If true, this property will cause the implementing element to
     * automatically stop propagation on any handled KeyboardEvents.
     */
    stopKeyboardEventPropagation: {type: Boolean, value: false},

    _boundKeyHandlers: {
      type: Array,
      value: function() {
        return [];
      }
    },

    // We use this due to a limitation in IE10 where instances will have
    // own properties of everything on the "prototype".
    _imperativeKeyBindings: {
      type: Object,
      value: function() {
        return {};
      }
    }
  },

  observers: ['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'],


  /**
   * To be used to express what combination of keys  will trigger the relative
   * callback. e.g. `keyBindings: { 'esc': '_onEscPressed'}`
   * @type {!Object}
   */
  keyBindings: {},

  registered: function() {
    this._prepKeyBindings();
  },

  attached: function() {
    this._listenKeyEventListeners();
  },

  detached: function() {
    this._unlistenKeyEventListeners();
  },

  /**
   * Can be used to imperatively add a key binding to the implementing
   * element. This is the imperative equivalent of declaring a keybinding
   * in the `keyBindings` prototype property.
   *
   * @param {string} eventString
   * @param {string} handlerName
   */
  addOwnKeyBinding: function(eventString, handlerName) {
    this._imperativeKeyBindings[eventString] = handlerName;
    this._prepKeyBindings();
    this._resetKeyEventListeners();
  },

  /**
   * When called, will remove all imperatively-added key bindings.
   */
  removeOwnKeyBindings: function() {
    this._imperativeKeyBindings = {};
    this._prepKeyBindings();
    this._resetKeyEventListeners();
  },

  /**
   * Returns true if a keyboard event matches `eventString`.
   *
   * @param {KeyboardEvent} event
   * @param {string} eventString
   * @return {boolean}
   */
  keyboardEventMatchesKeys: function(event, eventString) {
    var keyCombos = parseEventString(eventString);
    for (var i = 0; i < keyCombos.length; ++i) {
      if (keyComboMatchesEvent(keyCombos[i], event)) {
        return true;
      }
    }
    return false;
  },

  _collectKeyBindings: function() {
    var keyBindings = this.behaviors.map(function(behavior) {
      return behavior.keyBindings;
    });

    if (keyBindings.indexOf(this.keyBindings) === -1) {
      keyBindings.push(this.keyBindings);
    }

    return keyBindings;
  },

  _prepKeyBindings: function() {
    this._keyBindings = {};

    this._collectKeyBindings().forEach(function(keyBindings) {
      for (var eventString in keyBindings) {
        this._addKeyBinding(eventString, keyBindings[eventString]);
      }
    }, this);

    for (var eventString in this._imperativeKeyBindings) {
      this._addKeyBinding(
          eventString, this._imperativeKeyBindings[eventString]);
    }

    // Give precedence to combos with modifiers to be checked first.
    for (var eventName in this._keyBindings) {
      this._keyBindings[eventName].sort(function(kb1, kb2) {
        var b1 = kb1[0].hasModifiers;
        var b2 = kb2[0].hasModifiers;
        return (b1 === b2) ? 0 : b1 ? -1 : 1;
      });
    }
  },

  _addKeyBinding: function(eventString, handlerName) {
    parseEventString(eventString).forEach(function(keyCombo) {
      this._keyBindings[keyCombo.event] =
          this._keyBindings[keyCombo.event] || [];

      this._keyBindings[keyCombo.event].push([keyCombo, handlerName]);
    }, this);
  },

  _resetKeyEventListeners: function() {
    this._unlistenKeyEventListeners();

    if (this.isAttached) {
      this._listenKeyEventListeners();
    }
  },

  _listenKeyEventListeners: function() {
    if (!this.keyEventTarget) {
      return;
    }
    Object.keys(this._keyBindings).forEach(function(eventName) {
      var keyBindings = this._keyBindings[eventName];
      var boundKeyHandler = this._onKeyBindingEvent.bind(this, keyBindings);

      this._boundKeyHandlers.push(
          [this.keyEventTarget, eventName, boundKeyHandler]);

      this.keyEventTarget.addEventListener(eventName, boundKeyHandler);
    }, this);
  },

  _unlistenKeyEventListeners: function() {
    var keyHandlerTuple;
    var keyEventTarget;
    var eventName;
    var boundKeyHandler;

    while (this._boundKeyHandlers.length) {
      // My kingdom for block-scope binding and destructuring assignment..
      keyHandlerTuple = this._boundKeyHandlers.pop();
      keyEventTarget = keyHandlerTuple[0];
      eventName = keyHandlerTuple[1];
      boundKeyHandler = keyHandlerTuple[2];

      keyEventTarget.removeEventListener(eventName, boundKeyHandler);
    }
  },

  _onKeyBindingEvent: function(keyBindings, event) {
    if (this.stopKeyboardEventPropagation) {
      event.stopPropagation();
    }

    // if event has been already prevented, don't do anything
    if (event.defaultPrevented) {
      return;
    }

    for (var i = 0; i < keyBindings.length; i++) {
      var keyCombo = keyBindings[i][0];
      var handlerName = keyBindings[i][1];
      if (keyComboMatchesEvent(keyCombo, event)) {
        this._triggerKeyHandler(keyCombo, handlerName, event);
        // exit the loop if eventDefault was prevented
        if (event.defaultPrevented) {
          return;
        }
      }
    }
  },

  _triggerKeyHandler: function(keyCombo, handlerName, keyboardEvent) {
    var detail = Object.create(keyCombo);
    detail.keyboardEvent = keyboardEvent;
    var event =
        new CustomEvent(keyCombo.event, {detail: detail, cancelable: true});
    this[handlerName].call(this, event);
    if (event.defaultPrevented) {
      keyboardEvent.preventDefault();
    }
  }
};

var MAX_RADIUS_PX = 300;
var MIN_DURATION_MS = 800;

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number} The distance between (x1, y1) and (x2, y2).
 */
var distance = function(x1, y1, x2, y2) {
  var xDelta = x1 - x2;
  var yDelta = y1 - y2;
  return Math.sqrt(xDelta * xDelta + yDelta * yDelta);
};

Polymer({
  _template: html$1`
    <style>
      :host {
        bottom: 0;
        display: block;
        left: 0;
        overflow: hidden;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        /* For rounded corners: http://jsbin.com/temexa/4. */
        transform: translate3d(0, 0, 0);
      }

      .ripple {
        background-color: currentcolor;
        left: 0;
        opacity: var(--paper-ripple-opacity, 0.25);
        pointer-events: none;
        position: absolute;
        will-change: height, transform, width;
      }

      .ripple,
      :host(.circle) {
        border-radius: 50%;
      }
    </style>
`,

  is: 'paper-ripple',
  behaviors: [IronA11yKeysBehavior],

  properties: {
    center: {type: Boolean, value: false},
    holdDown: {type: Boolean, value: false, observer: '_holdDownChanged'},
    recenters: {type: Boolean, value: false},
    noink: {type: Boolean, value: false},
  },

  keyBindings: {
    'enter:keydown': '_onEnterKeydown',
    'space:keydown': '_onSpaceKeydown',
    'space:keyup': '_onSpaceKeyup',
  },

  /** @override */
  created: function() {
    /** @type {Array<!Element>} */
    this.ripples = [];
  },

  /** @override */
  attached: function() {
    this.keyEventTarget = this.parentNode.nodeType == 11 ?
        dom(this).getOwnerRoot().host : this.parentNode;
    this.keyEventTarget = /** @type {!EventTarget} */ (this.keyEventTarget);
    this.listen(this.keyEventTarget, 'up', 'uiUpAction');
    this.listen(this.keyEventTarget, 'down', 'uiDownAction');
  },

  /** @override */
  detached: function() {
    this.unlisten(this.keyEventTarget, 'up', 'uiUpAction');
    this.unlisten(this.keyEventTarget, 'down', 'uiDownAction');
    this.keyEventTarget = null;
  },

  simulatedRipple: function() {
    this.downAction();
    // Using a 1ms delay ensures a macro-task.
    this.async(function() { this.upAction(); }.bind(this), 1);
  },

  /** @param {Event=} e */
  uiDownAction: function(e) {
    if (!this.noink)
      this.downAction(e);
  },

  /** @param {Event=} e */
  downAction: function(e) {
    if (this.ripples.length && this.holdDown)
      return;
    // TODO(dbeam): some things (i.e. paper-icon-button-light) dynamically
    // create ripples on 'up', Ripples register an event listener on their
    // parent (or shadow DOM host) when attached().  This sometimes causes
    // duplicate events to fire on us.
    this.debounce('show ripple', function() { this.__showRipple(e); }, 1);
  },

  clear: function() {
    this.__hideRipple();
    this.holdDown = false;
  },

  showAndHoldDown: function() {
    this.ripples.forEach(ripple => {
      ripple.remove();
    });
    this.ripples = [];
    this.holdDown = true;
  },

  /**
   * @param {Event=} e
   * @private
   * @suppress {checkTypes}
   */
  __showRipple: function(e) {
    var rect = this.getBoundingClientRect();

    var roundedCenterX = function() { return Math.round(rect.width / 2); };
    var roundedCenterY = function() { return Math.round(rect.height / 2); };

    var centered = !e || this.center;
    if (centered) {
      var x = roundedCenterX();
      var y = roundedCenterY();
    } else {
      var sourceEvent = e.detail.sourceEvent;
      var x = Math.round(sourceEvent.clientX - rect.left);
      var y = Math.round(sourceEvent.clientY - rect.top);
    }

    var corners = [
      {x: 0, y: 0},
      {x: rect.width, y: 0},
      {x: 0, y: rect.height},
      {x: rect.width, y: rect.height},
    ];

    var cornerDistances = corners.map(function(corner) {
      return Math.round(distance(x, y, corner.x, corner.y));
    });

    var radius = Math.min(MAX_RADIUS_PX, Math.max.apply(Math, cornerDistances));

    var startTranslate = (x - radius) + 'px, ' + (y - radius) + 'px';
    if (this.recenters && !centered) {
      var endTranslate = (roundedCenterX() - radius) + 'px, ' +
                         (roundedCenterY() - radius) + 'px';
    } else {
      var endTranslate = startTranslate;
    }

    var ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.height = ripple.style.width = (2 * radius) + 'px';

    this.ripples.push(ripple);
    this.shadowRoot.appendChild(ripple);

    ripple.animate({
      // TODO(dbeam): scale to 90% of radius at .75 offset?
      transform: ['translate(' + startTranslate + ') scale(0)',
                  'translate(' + endTranslate + ') scale(1)'],
    }, {
      duration: Math.max(MIN_DURATION_MS, Math.log(radius) * radius) || 0,
      easing: 'cubic-bezier(.2, .9, .1, .9)',
      fill: 'forwards',
    });
  },

  /** @param {Event=} e */
  uiUpAction: function(e) {
    if (!this.noink)
      this.upAction();
  },

  /** @param {Event=} e */
  upAction: function(e) {
    if (!this.holdDown)
      this.debounce('hide ripple', function() { this.__hideRipple(); }, 1);
  },

  /**
   * @private
   * @suppress {checkTypes}
   */
  __hideRipple: function() {
    Promise.all(this.ripples.map(function(ripple) {
      return new Promise(function(resolve) {
        var removeRipple = function() {
          ripple.remove();
          resolve();
        };
        var opacity = getComputedStyle(ripple).opacity;
        if (!opacity.length) {
          removeRipple();
        } else {
          var animation = ripple.animate({
            opacity: [opacity, 0],
          }, {
            duration: 150,
            fill: 'forwards',
          });
          animation.addEventListener('finish', removeRipple);
          animation.addEventListener('cancel', removeRipple);
        }
      });
    })).then(function() { this.fire('transitionend'); }.bind(this));
    this.ripples = [];
  },

  /** @protected */
  _onEnterKeydown: function() {
    this.uiDownAction();
    this.async(this.uiUpAction, 1);
  },

  /** @protected */
  _onSpaceKeydown: function() {
    this.uiDownAction();
  },

  /** @protected */
  _onSpaceKeyup: function() {
    this.uiUpAction();
  },

  /** @protected */
  _holdDownChanged: function(newHoldDown, oldHoldDown) {
    if (oldHoldDown === undefined)
      return;
    if (newHoldDown)
      this.downAction();
    else
      this.upAction();
  },
});

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * @demo demo/index.html
 * @polymerBehavior IronButtonState
 */
const IronButtonStateImpl = {

  properties: {

    /**
     * If true, the user is currently holding down the button.
     */
    pressed: {
      type: Boolean,
      readOnly: true,
      value: false,
      reflectToAttribute: true,
      observer: '_pressedChanged'
    },

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: {type: Boolean, value: false, reflectToAttribute: true},

    /**
     * If true, the button is a toggle and is currently in the active state.
     */
    active:
        {type: Boolean, value: false, notify: true, reflectToAttribute: true},

    /**
     * True if the element is currently being pressed by a "pointer," which
     * is loosely defined as mouse or touch input (but specifically excluding
     * keyboard input).
     */
    pointerDown: {type: Boolean, readOnly: true, value: false},

    /**
     * True if the input device that caused the element to receive focus
     * was a keyboard.
     */
    receivedFocusFromKeyboard: {type: Boolean, readOnly: true},

    /**
     * The aria attribute to be set if the button is a toggle and in the
     * active state.
     */
    ariaActiveAttribute: {
      type: String,
      value: 'aria-pressed',
      observer: '_ariaActiveAttributeChanged'
    }
  },

  listeners: {down: '_downHandler', up: '_upHandler', tap: '_tapHandler'},

  observers:
      ['_focusChanged(focused)', '_activeChanged(active, ariaActiveAttribute)'],

  /**
   * @type {!Object}
   */
  keyBindings: {
    'enter:keydown': '_asyncClick',
    'space:keydown': '_spaceKeyDownHandler',
    'space:keyup': '_spaceKeyUpHandler',
  },

  _mouseEventRe: /^mouse/,

  _tapHandler: function() {
    if (this.toggles) {
      // a tap is needed to toggle the active state
      this._userActivate(!this.active);
    } else {
      this.active = false;
    }
  },

  _focusChanged: function(focused) {
    this._detectKeyboardFocus(focused);

    if (!focused) {
      this._setPressed(false);
    }
  },

  _detectKeyboardFocus: function(focused) {
    this._setReceivedFocusFromKeyboard(!this.pointerDown && focused);
  },

  // to emulate native checkbox, (de-)activations from a user interaction fire
  // 'change' events
  _userActivate: function(active) {
    if (this.active !== active) {
      this.active = active;
      this.fire('change');
    }
  },

  _downHandler: function(event) {
    this._setPointerDown(true);
    this._setPressed(true);
    this._setReceivedFocusFromKeyboard(false);
  },

  _upHandler: function() {
    this._setPointerDown(false);
    this._setPressed(false);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyDownHandler: function(event) {
    var keyboardEvent = event.detail.keyboardEvent;
    var target = dom(keyboardEvent).localTarget;

    // Ignore the event if this is coming from a focused light child, since that
    // element will deal with it.
    if (this.isLightDescendant(/** @type {Node} */ (target)))
      return;

    keyboardEvent.preventDefault();
    keyboardEvent.stopImmediatePropagation();
    this._setPressed(true);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyUpHandler: function(event) {
    var keyboardEvent = event.detail.keyboardEvent;
    var target = dom(keyboardEvent).localTarget;

    // Ignore the event if this is coming from a focused light child, since that
    // element will deal with it.
    if (this.isLightDescendant(/** @type {Node} */ (target)))
      return;

    if (this.pressed) {
      this._asyncClick();
    }
    this._setPressed(false);
  },

  // trigger click asynchronously, the asynchrony is useful to allow one
  // event handler to unwind before triggering another event
  _asyncClick: function() {
    this.async(function() {
      this.click();
    }, 1);
  },

  // any of these changes are considered a change to button state

  _pressedChanged: function(pressed) {
    this._changedButtonState();
  },

  _ariaActiveAttributeChanged: function(value, oldValue) {
    if (oldValue && oldValue != value && this.hasAttribute(oldValue)) {
      this.removeAttribute(oldValue);
    }
  },

  _activeChanged: function(active, ariaActiveAttribute) {
    if (this.toggles) {
      this.setAttribute(this.ariaActiveAttribute, active ? 'true' : 'false');
    } else {
      this.removeAttribute(this.ariaActiveAttribute);
    }
    this._changedButtonState();
  },

  _controlStateChanged: function() {
    if (this.disabled) {
      this._setPressed(false);
    } else {
      this._changedButtonState();
    }
  },

  // provide hook for follow-on behaviors to react to button-state

  _changedButtonState: function() {
    if (this._buttonStateChanged) {
      this._buttonStateChanged();  // abstract
    }
  }

};

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Note: This file is forked from Polymer's paper-ripple-behavior.js
 *
 * `PaperRippleMixin` dynamically implements a ripple when the element has
 * focus via pointer or keyboard.
 *
 * NOTE: This behavior is intended to be used in conjunction with and after
 * `IronButtonState` and `IronControlState`.
 */

const PaperRippleMixin = dedupingMixin(superClass => {
  class PaperRippleMixin extends superClass {
    static get properties() {
      return {
        /**
         * If true, the element will not produce a ripple effect when interacted
         * with via the pointer.
         */
        noink: {type: Boolean, observer: '_noinkChanged'},

        /**
         * @type {Element|undefined}
         */
        _rippleContainer: {
          type: Object,
        }
      };
    }

    /**
     * Ensures a `<paper-ripple>` element is available when the element is
     * focused.
     */
    _buttonStateChanged() {
      if (this.focused) {
        this.ensureRipple();
      }
    }

    /**
     * In addition to the functionality provided in `IronButtonState`, ensures
     * a ripple effect is created when the element is in a `pressed` state.
     */
    _downHandler(event) {
      IronButtonStateImpl._downHandler.call(this, event);
      if (this.pressed) {
        this.ensureRipple(event);
      }
    }

    /**
     * Ensures this element contains a ripple effect. For startup efficiency
     * the ripple effect is dynamically on demand when needed.
     * @param {!Event=} optTriggeringEvent (optional) event that triggered the
     * ripple.
     */
    ensureRipple(optTriggeringEvent) {
      if (!this.hasRipple()) {
        this._ripple = this._createRipple();
        this._ripple.noink = this.noink;
        var rippleContainer = this._rippleContainer || this.root;
        if (rippleContainer) {
          dom(rippleContainer).appendChild(this._ripple);
        }
        if (optTriggeringEvent) {
          // Check if the event happened inside of the ripple container
          // Fall back to host instead of the root because distributed text
          // nodes are not valid event targets
          var domContainer = dom(this._rippleContainer || this);
          var target = dom(optTriggeringEvent).rootTarget;
          if (domContainer.deepContains(/** @type {Node} */ (target))) {
            this._ripple.uiDownAction(optTriggeringEvent);
          }
        }
      }
    }

    /**
     * Returns the `<paper-ripple>` element used by this element to create
     * ripple effects. The element's ripple is created on demand, when
     * necessary, and calling this method will force the
     * ripple to be created.
     */
    getRipple() {
      this.ensureRipple();
      return this._ripple;
    }

    /**
     * Returns true if this element currently contains a ripple effect.
     * @return {boolean}
     */
    hasRipple() {
      return Boolean(this._ripple);
    }

    /**
     * Create the element's ripple effect via creating a `<paper-ripple>`.
     * Override this method to customize the ripple element.
     * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
     */
    _createRipple() {
      var element = /** @type {!PaperRippleElement} */ (
          document.createElement('paper-ripple'));
      return element;
    }

    _noinkChanged(noink) {
      if (this.hasRipple()) {
        this._ripple.noink = noink;
      }
    }
  }

  return PaperRippleMixin;
});

function getTemplate$c() {
    return html$1 `<!--_html_template_start_-->    <style include="cr-hidden-style">:host{--active-shadow-rgb:var(--google-grey-800-rgb);--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-600);--border-color:var(--google-grey-300);--disabled-bg-action:var(--google-grey-100);--disabled-bg:white;--disabled-border-color:var(--google-grey-100);--disabled-text-color:var(--google-grey-600);--focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--hover-bg-action:rgba(var(--google-blue-600-rgb), .9);--hover-bg-color:rgba(var(--google-blue-500-rgb), .04);--hover-border-color:var(--google-blue-100);--hover-shadow-action-rgb:var(--google-blue-500-rgb);--ink-color-action:white;--ink-color:var(--google-blue-600);--ripple-opacity-action:.32;--ripple-opacity:.1;--text-color-action:white;--text-color:var(--google-blue-600)}@media (prefers-color-scheme:dark){:host{--active-bg:black linear-gradient(rgba(255, 255, 255, .06),
                                             rgba(255, 255, 255, .06));--active-shadow-rgb:0,0,0;--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-300);--border-color:var(--google-grey-700);--disabled-bg-action:var(--google-grey-800);--disabled-bg:transparent;--disabled-border-color:var(--google-grey-800);--disabled-text-color:var(--google-grey-500);--focus-shadow-color:rgba(var(--google-blue-300-rgb), .5);--hover-bg-action:var(--bg-action) linear-gradient(rgba(0, 0, 0, .08), rgba(0, 0, 0, .08));--hover-bg-color:rgba(var(--google-blue-300-rgb), .08);--ink-color-action:black;--ink-color:var(--google-blue-300);--ripple-opacity-action:.16;--ripple-opacity:.16;--text-color-action:var(--google-grey-900);--text-color:var(--google-blue-300)}}:host{--paper-ripple-opacity:var(--ripple-opacity);-webkit-tap-highlight-color:transparent;align-items:center;border:1px solid var(--border-color);border-radius:4px;box-sizing:border-box;color:var(--text-color);cursor:pointer;display:inline-flex;flex-shrink:0;font-weight:500;height:var(--cr-button-height);justify-content:center;min-width:5.14em;outline-width:0;overflow:hidden;padding:8px 16px;position:relative;user-select:none}:host-context([chrome-refresh-2023]):host{--border-color:var(--color-button-border,
            var(--cr-fallback-color-tonal-outline));--text-color:var(--color-button-foreground,
            var(--cr-fallback-color-primary));--hover-bg-color:transparent;--hover-border-color:var(--border-color);--active-bg:transparent;--active-shadow:none;--ink-color:var(--cr-active-background-color);--ripple-opacity:1;--disabled-bg:transparent;--disabled-border-color:var(--color-button-border-disabled,
            var(--cr-fallback-color-disabled-background));--disabled-text-color:var(--color-button-foreground-disabled,
            var(--cr-fallback-color-disabled-foreground));--bg-action:var(--color-button-background-prominent,
            var(--cr-fallback-color-primary));--text-color-action:var(--color-button-foreground-prominent,
            var(--cr-fallback-color-on-primary));--hover-bg-action:var(--bg-action);--active-shadow-action:none;--ink-color-action:var(--cr-active-background-color);--ripple-opacity-action:1;--disabled-bg-action:var(--color-button-background-prominent-disabled,
            var(--cr-fallback-color-disabled-background));background:0 0;border-radius:100px;isolation:isolate;line-height:20px}:host([has-prefix-icon_]),:host([has-suffix-icon_]){--iron-icon-height:16px;--iron-icon-width:16px;gap:8px;padding:8px}:host-context([chrome-refresh-2023]):host([has-prefix-icon_]),:host-context([chrome-refresh-2023]):host([has-suffix-icon_]){--iron-icon-height:20px;--iron-icon-width:20px;--icon-block-padding-large:16px;--icon-block-padding-small:12px;padding-block-end:8px;padding-block-start:8px}:host-context([chrome-refresh-2023]):host([has-prefix-icon_]){padding-inline-end:var(--icon-block-padding-large);padding-inline-start:var(--icon-block-padding-small)}:host-context([chrome-refresh-2023]):host([has-suffix-icon_]){padding-inline-end:var(--icon-block-padding-small);padding-inline-start:var(--icon-block-padding-large)}:host-context(.focus-outline-visible):host(:focus){box-shadow:0 0 0 2px var(--focus-shadow-color)}@media (forced-colors:active){:host-context(.focus-outline-visible):host(:focus){outline:var(--cr-focus-outline-hcm)}:host-context([chrome-refresh-2023]):host{forced-color-adjust:none}}:host-context([chrome-refresh-2023].focus-outline-visible):host(:focus){box-shadow:none;outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host(:active){background:var(--active-bg);box-shadow:var(--active-shadow,0 1px 2px 0 rgba(var(--active-shadow-rgb),.3),0 3px 6px 2px rgba(var(--active-shadow-rgb),.15))}:host(:hover){background-color:var(--hover-bg-color)}@media (prefers-color-scheme:light){:host(:hover){border-color:var(--hover-border-color)}}#background{border-radius:inherit;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host(:hover) #background{background-color:var(--hover-bg-color)}:host-context([chrome-refresh-2023].focus-outline-visible):host(:focus) #background{background-clip:padding-box}:host-context([chrome-refresh-2023]):host(.action-button) #background{background-color:var(--bg-action)}:host-context([chrome-refresh-2023]):host([disabled]) #background{background-color:var(--disabled-bg)}:host-context([chrome-refresh-2023]):host(.action-button[disabled]) #background{background-color:var(--disabled-bg-action)}:host-context([chrome-refresh-2023]):host(.floating-button) #background,:host-context([chrome-refresh-2023]):host(.tonal-button) #background{background-color:var(--color-button-background-tonal,var(--cr-fallback-color-secondary-container))}:host-context([chrome-refresh-2023]):host([disabled].floating-button) #background,:host-context([chrome-refresh-2023]):host([disabled].tonal-button) #background{background-color:var(--color-button-background-tonal-disabled,var(--cr-fallback-color-disabled-background))}#content{display:contents}:host-context([chrome-refresh-2023]) #content{display:inline;z-index:2}:host-context([chrome-refresh-2023]) ::slotted(*){z-index:2}#hoverBackground{content:'';display:none;inset:0;pointer-events:none;position:absolute;z-index:1}:host-context([chrome-refresh-2023]):host(:hover) #hoverBackground{background:var(--cr-hover-background-color);display:block}:host-context([chrome-refresh-2023]):host(.action-button:hover) #hoverBackground{background:var(--cr-hover-on-prominent-background-color)}:host(.action-button){--ink-color:var(--ink-color-action);--paper-ripple-opacity:var(--ripple-opacity-action);background-color:var(--bg-action);border:none;color:var(--text-color-action)}:host-context([chrome-refresh-2023]):host(.action-button){--ink-color:var(--cr-active-on-primary-background-color);background-color:transparent}:host(.action-button:active){box-shadow:var(--active-shadow-action,0 1px 2px 0 rgba(var(--active-shadow-action-rgb),.3),0 3px 6px 2px rgba(var(--active-shadow-action-rgb),.15))}:host(.action-button:hover){background:var(--hover-bg-action)}@media (prefers-color-scheme:light){:host(.action-button:not(:active):hover){box-shadow:0 1px 2px 0 rgba(var(--hover-shadow-action-rgb),.3),0 1px 3px 1px rgba(var(--hover-shadow-action-rgb),.15)}:host-context([chrome-refresh-2023]):host(.action-button:not(:active):hover){box-shadow:none}}:host([disabled]){background-color:var(--disabled-bg);border-color:var(--disabled-border-color);color:var(--disabled-text-color);cursor:auto;pointer-events:none}:host(.action-button[disabled]){background-color:var(--disabled-bg-action);border-color:transparent}:host(.cancel-button){margin-inline-end:8px}:host(.action-button),:host(.cancel-button){line-height:154%}:host-context([chrome-refresh-2023]):host(.floating-button),:host-context([chrome-refresh-2023]):host(.tonal-button){border:none;color:var(--color-button-foreground-tonal,var(--cr-fallback-color-on-tonal-container))}:host-context([chrome-refresh-2023]):host(.floating-button[disabled]),:host-context([chrome-refresh-2023]):host(.tonal-button[disabled]){border:none;color:var(--disabled-text-color)}:host-context([chrome-refresh-2023]):host(.floating-button){border-radius:8px;height:40px;transition:box-shadow 80ms linear}:host-context([chrome-refresh-2023]):host(.floating-button:hover){box-shadow:var(--cr-elevation-3)}paper-ripple{color:var(--ink-color);height:var(--paper-ripple-height);left:var(--paper-ripple-left,0);top:var(--paper-ripple-top,0);width:var(--paper-ripple-width)}:host-context([chrome-refresh-2023]) paper-ripple{z-index:1}</style>

    <div id="background"></div>
    <slot id="prefixIcon" name="prefix-icon" on-slotchange="onPrefixIconSlotChanged_">
    </slot>
    <span id="content"><slot></slot></span>
    <slot id="suffixIcon" name="suffix-icon" on-slotchange="onSuffixIconSlotChanged_">
    </slot>
    <div id="hoverBackground" part="hoverBackground"></div>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-button' is a button which displays slotted elements. It can
 * be interacted with like a normal button using click as well as space and
 * enter to effectively click the button and fire a 'click' event. It can also
 * style an icon inside of the button with the [has-icon] attribute.
 */
const CrButtonElementBase = PaperRippleMixin(PolymerElement);
class CrButtonElement extends CrButtonElementBase {
    static get is() {
        return 'cr-button';
    }
    static get template() {
        return getTemplate$c();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'disabledChanged_',
            },
            /**
             * Use this property in order to configure the "tabindex" attribute.
             */
            customTabIndex: {
                type: Number,
                observer: 'applyTabIndex_',
            },
            /**
             * Flag used for formatting ripples on circle shaped cr-buttons.
             * @private
             */
            circleRipple: {
                type: Boolean,
                value: false,
            },
            hasPrefixIcon_: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            hasSuffixIcon_: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
        };
    }
    constructor() {
        super();
        /**
         * It is possible to activate a tab when the space key is pressed down. When
         * this element has focus, the keyup event for the space key should not
         * perform a 'click'. |spaceKeyDown_| tracks when a space pressed and
         * handled by this element. Space keyup will only result in a 'click' when
         * |spaceKeyDown_| is true. |spaceKeyDown_| is set to false when element
         * loses focus.
         */
        this.spaceKeyDown_ = false;
        this.timeoutIds_ = new Set();
        this.addEventListener('blur', this.onBlur_.bind(this));
        // Must be added in constructor so that stopImmediatePropagation() works as
        // expected.
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('keyup', this.onKeyUp_.bind(this));
        this.addEventListener('pointerdown', this.onPointerDown_.bind(this));
    }
    ready() {
        super.ready();
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'button');
        }
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
        if (!this.hasAttribute('aria-disabled')) {
            this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        }
        FocusOutlineManager.forDocument(document);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.timeoutIds_.forEach(clearTimeout);
        this.timeoutIds_.clear();
    }
    setTimeout_(fn, delay) {
        if (!this.isConnected) {
            return;
        }
        const id = setTimeout(() => {
            this.timeoutIds_.delete(id);
            fn();
        }, delay);
        this.timeoutIds_.add(id);
    }
    disabledChanged_(newValue, oldValue) {
        if (!newValue && oldValue === undefined) {
            return;
        }
        if (this.disabled) {
            this.blur();
        }
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        this.applyTabIndex_();
    }
    /**
     * Updates the tabindex HTML attribute to the actual value.
     */
    applyTabIndex_() {
        let value = this.customTabIndex;
        if (value === undefined) {
            value = this.disabled ? -1 : 0;
        }
        this.setAttribute('tabindex', value.toString());
    }
    onBlur_() {
        this.spaceKeyDown_ = false;
        // If a keyup event is never fired (e.g. after keydown the focus is moved to
        // another element), we need to clear the ripple here. 100ms delay was
        // chosen manually as a good time period for the ripple to be visible.
        this.setTimeout_(() => this.getRipple().uiUpAction(), 100);
    }
    onClick_(e) {
        if (this.disabled) {
            e.stopImmediatePropagation();
        }
    }
    onPrefixIconSlotChanged_() {
        this.hasPrefixIcon_ = this.$.prefixIcon.assignedElements().length > 0;
    }
    onSuffixIconSlotChanged_() {
        this.hasSuffixIcon_ = this.$.suffixIcon.assignedElements().length > 0;
    }
    onKeyDown_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.repeat) {
            return;
        }
        this.getRipple().uiDownAction();
        if (e.key === 'Enter') {
            this.click();
            // Delay was chosen manually as a good time period for the ripple to be
            // visible.
            this.setTimeout_(() => this.getRipple().uiUpAction(), 100);
        }
        else if (e.key === ' ') {
            this.spaceKeyDown_ = true;
        }
    }
    onKeyUp_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (this.spaceKeyDown_ && e.key === ' ') {
            this.spaceKeyDown_ = false;
            this.click();
            this.getRipple().uiUpAction();
        }
    }
    onPointerDown_() {
        this.ensureRipple();
    }
    /**
     * Customize the element's ripple. Overriding the '_createRipple' function
     * from PaperRippleMixin.
     */
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _createRipple() {
        const ripple = super._createRipple();
        if (this.circleRipple) {
            ripple.setAttribute('center', '');
            ripple.classList.add('circle');
        }
        return ripple;
    }
}
customElements.define(CrButtonElement.is, CrButtonElement);

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var XfIcon_1;
let XfIcon = XfIcon_1 = class XfIcon extends XfBase {
    constructor() {
        super(...arguments);
        /**
         * The icon size, can be "extra-small", "small" or "large" (from
         * `XfIcon.size`).
         */
        this.size = XfIcon_1.sizes.SMALL;
        /**
         * The icon type, different type will render different SVG file
         * (from `ICON_TYPES`).
         */
        this.type = '';
        /**
         * Some icon data are directly passed from outside in base64 format. If
         * `iconSet` is provided, `type` will be ignored.
         */
        this.iconSet = null;
    }
    static get sizes() {
        return {
            EXTRA_SMALL: 'extra_small',
            SMALL: 'small',
            MEDIUM: 'medium',
            LARGE: 'large',
        };
    }
    static get multiColor() {
        return {
            [ICON_TYPES.CANT_PIN]: svg `<use xlink:href="foreground/images/files/ui/cant_pin.svg#cant_pin"></use>`,
            [ICON_TYPES.CLOUD_DONE]: svg `<use xlink:href="foreground/images/files/ui/cloud_done.svg#cloud_done"></use>`,
            [ICON_TYPES.CLOUD_ERROR]: svg `<use xlink:href="foreground/images/files/ui/cloud_error.svg#cloud_error"></use>`,
            [ICON_TYPES.CLOUD_OFFLINE]: svg `<use xlink:href="foreground/images/files/ui/cloud_offline.svg#cloud_offline"></use>`,
            [ICON_TYPES.CLOUD_PAUSED]: svg `<use xlink:href="foreground/images/files/ui/cloud_paused.svg#cloud_paused"></use>`,
            [ICON_TYPES.CLOUD_SYNC]: svg `<use xlink:href="foreground/images/files/ui/cloud_sync.svg#cloud_sync"></use>`,
            [ICON_TYPES.ERROR]: svg `<use xlink:href="foreground/images/files/ui/error.svg#error"></use>`,
            [ICON_TYPES.OFFLINE]: svg `<use xlink:href="foreground/images/files/ui/offline.svg#offline"></use>`,
        };
    }
    static get styles() {
        return getCSS$1();
    }
    render() {
        if (this.type === ICON_TYPES.BLANK) {
            return html ``;
        }
        if (Object.keys(XfIcon_1.multiColor).includes(this.type)) {
            return html `
        <span class="multi-color keep-color">
          <svg>
            ${XfIcon_1.multiColor[this.type]}
          </svg>
        </span>`;
        }
        if (this.iconSet) {
            const backgroundImageStyle = {
                'background-image': iconSetToCSSBackgroundImageValue(this.iconSet),
            };
            return html `<span class="keep-color" style=${styleMap(backgroundImageStyle)}></span>`;
        }
        return html `
      <span></span>
    `;
    }
    updated(changedProperties) {
        if (changedProperties.has('type')) {
            this.validateTypeProperty_(this.type);
        }
    }
    validateTypeProperty_(type) {
        if (this.iconSet) {
            // Ignore checking "type" if iconSet is provided.
            return;
        }
        if (!type) {
            console.warn('Empty type will result in an square being rendered.');
            return;
        }
        const validTypes = Object.values(ICON_TYPES);
        if (!validTypes.find((t) => t === type)) {
            console.warn(`Type ${type} is not a valid icon type, please check ICON_TYPES.`);
        }
    }
};
__decorate([
    property({ type: String, reflect: true })
], XfIcon.prototype, "size", void 0);
__decorate([
    property({ type: String, reflect: true })
], XfIcon.prototype, "type", void 0);
__decorate([
    property({ attribute: false })
], XfIcon.prototype, "iconSet", void 0);
XfIcon = XfIcon_1 = __decorate([
    customElement('xf-icon')
], XfIcon);
function getCSS$1() {
    return css `
    :host {
      --xf-icon-color: var(--cros-sys-on_surface);
      --xf-icon-base-color: var(--cros-sys-app_base);
      --xf-icon-positive-color: var(--cros-sys-positive);
      --xf-icon-error-color: var(--cros-sys-error);
      --xf-icon-progress-color: var(--cros-sys-progress);
      --xf-secondary-color: var(--cros-sys-secondary);
      display: inline-block;
    }

    span {
      display: block;
    }

    span:not(.keep-color) {
      -webkit-mask-position: center;
      -webkit-mask-repeat: no-repeat;
      background-color: var(--xf-icon-color);
    }

    span.keep-color {
      background-position: center center;
      background-repeat: no-repeat;
    }

    :host-context([disabled]) span.keep-color {
      opacity: 0.38;
    }

    span.multi-color {
      display: flex;
      align-items: stretch;
      justify-content: stretch;
    }

    :host([size="extra_small"]) span {
      height: 16px;
      width: 16px;
    }

    :host([size="extra_small"]) span.keep-color {
      background-size: 16px 16px;
    }

    :host([size="extra_small"]) span:not(.keep-color) {
      -webkit-mask-size: 16px;
    }

    :host([size="small"]) span {
      height: 20px;
      width: 20px;
    }

    :host([size="small"]) span.keep-color {
      background-size: 20px 20px;
    }

    :host([size="small"]) span:not(.keep-color) {
      -webkit-mask-size: 20px;
    }

    :host([size="medium"]) span {
      height: 32px;
      width: 32px;
    }

    :host([size="medium"]) span.keep-color {
      background-size: 32px 32px;
    }

    :host([size="medium"]) span:not(.keep-color) {
      -webkit-mask-size: 32px;
    }

    :host([size="large"]) span {
      height: 48px;
      width: 48px;
    }

    :host([size="large"]) span.keep-color {
      background-size: 48px 48px;
    }

    :host([size="large"]) span:not(.keep-color) {
      -webkit-mask-size: 48px;
    }

    :host([type="android_files"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/android.svg);
    }

    :host([type="archive"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_archive.svg);
    }

    :host([type="audio"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_audio.svg);
    }

    :host([type="bruschetta"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/bruschetta.svg);
    }

    :host([type="crostini"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/linux_files.svg);
    }

    :host([type="camera-folder"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/camera.svg);
    }

    :host([type="computer"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/computer.svg);
    }

    :host([type="computers_grand_root"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/devices.svg);
    }

    :host([type="downloads"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/downloads.svg);
    }

    :host([type="drive"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/drive.svg);
    }

    :host([type="drive_offline"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/offline.svg);
    }

    :host([type="drive_shared_with_me"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/shared.svg);
    }

    :host([type="drive_logo"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/drive_logo.svg);
    }

    :host([type="drive_bulk_pinning"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/drive_bulk_pinning.svg);
    }

    :host([type="excel"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_excel.svg);
    }

    :host([type="external_media"]) span,
    :host([type="removable"]) span,
    :host([type="usb"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/usb.svg);
    }

    :host([type="drive_recent"]) span, :host([type="recent"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/recent.svg);
    }

    :host([type="folder"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_folder.svg);
    }

    :host([type="generic"]) span, :host([type="glink"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_generic.svg);
    }

    :host([type="gdoc"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gdoc.svg);
    }

    :host([type="gdraw"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gdraw.svg);
    }

    :host([type="gform"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gform.svg);
    }

    :host([type="gmap"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gmap.svg);
    }

    :host([type="gsheet"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gsheet.svg);
    }

    :host([type="gsite"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gsite.svg);
    }

    :host([type="gmaillayout"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gmaillayout.svg);
    }

    :host([type="gslides"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gslides.svg);
    }

    :host([type="gtable"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_gtable.svg);
    }

    :host([type="image"]) span, :host([type="raw"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_image.svg);
    }

    :host([type="mtp"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/phone.svg);
    }

    :host([type="my_files"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/my_files.svg);
    }

    :host([type="optical"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/cd.svg);
    }

    :host([type="pdf"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_pdf.svg);
    }

    :host([type="plugin_vm"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/plugin_vm_ng.svg);
    }

    :host([type="ppt"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_ppt.svg);
    }

    :host([type="script"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_script.svg);
    }

    :host([type="sd"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/sd.svg);
    }

    :host([type="service_drive"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/service_drive.svg);
    }

    :host([type="shared_drive"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_team_drive.svg);
    }

    :host([type="shared_drives_grand_root"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/team_drive.svg);
    }

    :host([type="shared_folder"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_folder_shared.svg);
    }

    :host([type="shortcut"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/shortcut.svg);
    }

    :host([type="sites"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_sites.svg);
    }

    :host([type="smb"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/smb.svg);
    }

    :host([type="team_drive"]) span, :host([type="unknown_removable"]) span {
      -webkit-mask-image: url(../foreground/images/volumes/hard_drive.svg);
    }

    :host([type="thumbnail_generic"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/filetype_placeholder_generic.svg);
    }

    :host([type="tini"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_tini.svg);
    }

    :host([type="trash"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/delete_ng.svg);
    }

    :host([type="video"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_video.svg);
    }

    :host([type="word"]) span {
      -webkit-mask-image: url(../foreground/images/filetype/filetype_word.svg);
    }

    :host([type="check"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/check.svg);
    }

    :host([type="bulk_pinning_battery_saver"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/bulk_pinning_battery_saver.svg);
    }

    :host([type="bulk_pinning_done"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/bulk_pinning_done.svg);
    }

    :host([type="bulk_pinning_offline"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/bulk_pinning_offline.svg);
    }

    :host([type="cloud"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/cloud.svg);
    }

    :host([type="error_banner"]) span {
      -webkit-mask-image: url(../foreground/images/files/ui/error_banner_icon.svg);
    }

    :host([type='gdoc']) span,
    :host([type='script']) span,
    :host([type='tini']) span {
      background-color: var(--cros-sys-progress);
    }

    :host([type='audio']) span,
    :host([type='gdraw']) span,
    :host([type='image']) span,
    :host([type='gmap']) span,
    :host([type='pdf']) span,
    :host([type='video']) span,
    :host([type='gmaillayout']) span {
      background-color: var(--cros-sys-error);
    }

    :host([type='gsheet']) span,
    :host([type='gtable']) span {
      background-color: var(--cros-sys-positive);
    }

    :host([type='gslides']) span {
      background-color: var(--cros-sys-warning);
    }

    :host([type='gform']) span {
      background-color: var(--cros-sys-file_form);
    }

    :host([type='gsite']) span,
    :host([type='sites']) span {
      background-color: var(--cros-sys-file_site);
    }

    :host([type='excel']) span {
      background-color: var(--cros-sys-file_ms_excel);
    }

    :host([type='ppt']) span {
      background-color: var(--cros-sys-file_ms_ppt);
    }

    :host([type='word']) span {
      background-color: var(--cros-sys-file_ms_word);
    }

    /**
     * These icons are never shown on their own but are shown as suffix icons,
     * hence why they are smaller with offset margins. At the moment these are
     * only supported with "small" size prefix icons.
     */
    :host([type='cloud_done']) span,
    :host([type='cloud_error']) span,
    :host([type='cloud_offline']) span,
    :host([type='cloud_paused']) span,
    :host([type='cloud_sync']) span {
      margin-inline-start: 10px;
      margin-top: 8px;
      height: 12px;
      width: 12px;
    }
  `;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @return Whether the passed tagged template literal is a valid array.
 */
function isValidArray(arr) {
    if (arr instanceof Array && Object.isFrozen(arr)) {
        return true;
    }
    return false;
}
/**
 * Checks if the passed tagged template literal only contains static string.
 * And return the string in the literal if so.
 * Throws an Error if the passed argument is not supported literals.
 */
function getStaticString(literal) {
    const isStaticString = isValidArray(literal) && !!literal.raw &&
        isValidArray(literal.raw) && literal.length === literal.raw.length &&
        literal.length === 1;
    assert$1(isStaticString, 'static_types.js only allows static strings');
    return literal.join('');
}
function createTypes(_ignore, literal) {
    return getStaticString(literal);
}
/**
 * Rules used to enforce static literal checks.
 */
const rules = {
    createHTML: createTypes,
    createScript: createTypes,
    createScriptURL: createTypes,
};
/**
 * This policy returns Trusted Types if the passed literal is static.
 */
let staticPolicy;
if (window.trustedTypes) {
    staticPolicy = window.trustedTypes.createPolicy('static-types', rules);
}
else {
    staticPolicy = rules;
}
/**
 * Returns TrustedHTML if the passed literal is static.
 */
function getTrustedHTML(literal) {
    return staticPolicy.createHTML('', literal);
}

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

class IronMeta {
  /**
   * @param {{
   *   type: (string|null|undefined),
   *   key: (string|null|undefined),
   *   value: *,
   * }=} options
   */
  constructor(options) {
    IronMeta[' '](options);

    /** @type {string} */
    this.type = (options && options.type) || 'default';
    /** @type {string|null|undefined} */
    this.key = options && options.key;
    if (options && 'value' in options) {
      /** @type {*} */
      this.value = options.value;
    }
  }

  /** @return {*} */
  get value() {
    var type = this.type;
    var key = this.key;

    if (type && key) {
      return IronMeta.types[type] && IronMeta.types[type][key];
    }
  }

  /** @param {*} value */
  set value(value) {
    var type = this.type;
    var key = this.key;

    if (type && key) {
      type = IronMeta.types[type] = IronMeta.types[type] || {};
      if (value == null) {
        delete type[key];
      } else {
        type[key] = value;
      }
    }
  }

  /** @return {!Array<*>} */
  get list() {
    var type = this.type;

    if (type) {
      var items = IronMeta.types[this.type];
      if (!items) {
        return [];
      }

      return Object.keys(items).map(function(key) {
        return metaDatas[this.type][key];
      }, this);
    }
  }

  /**
   * @param {string} key
   * @return {*}
   */
  byKey(key) {
    this.key = key;
    return this.value;
  }
}
// This function is used to convince Closure not to remove constructor calls
// for instances that are not held anywhere. For example, when
// `new IronMeta({...})` is used only for the side effect of adding a value.
IronMeta[' '] = function() {};

IronMeta.types = {};

var metaDatas = IronMeta.types;

/**
`iron-meta` is a generic element you can use for sharing information across the
DOM tree. It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern)
such that any instance of iron-meta has access to the shared information. You
can use `iron-meta` to share whatever you want (or create an extension [like
x-meta] for enhancements).

The `iron-meta` instances containing your actual data can be loaded in an
import, or constructed in any way you see fit. The only requirement is that you
create them before you try to access them.

Examples:

If I create an instance like this:

    <iron-meta key="info" value="foo/bar"></iron-meta>

Note that value="foo/bar" is the metadata I've defined. I could define more
attributes or use child nodes to define additional metadata.

Now I can access that element (and it's metadata) from any iron-meta instance
via the byKey method, e.g.

    meta.byKey('info');

Pure imperative form would be like:

    document.createElement('iron-meta').byKey('info');

Or, in a Polymer element, you can include a meta in your template:

    <iron-meta id="meta"></iron-meta>
    ...
    this.$.meta.byKey('info');

@group Iron Elements
@demo demo/index.html
@element iron-meta
*/
Polymer({

  is: 'iron-meta',

  properties: {

    /**
     * The type of meta-data.  All meta-data of the same type is stored
     * together.
     * @type {string}
     */
    type: {
      type: String,
      value: 'default',
    },

    /**
     * The key used to store `value` under the `type` namespace.
     * @type {?string}
     */
    key: {
      type: String,
    },

    /**
     * The meta-data to store or retrieve.
     * @type {*}
     */
    value: {
      type: String,
      notify: true,
    },

    /**
     * If true, `value` is set to the iron-meta instance itself.
     */
    self: {type: Boolean, observer: '_selfChanged'},

    __meta: {type: Boolean, computed: '__computeMeta(type, key, value)'}
  },

  hostAttributes: {hidden: true},

  __computeMeta: function(type, key, value) {
    var meta = new IronMeta({type: type, key: key});

    if (value !== undefined && value !== meta.value) {
      meta.value = value;
    } else if (this.value !== meta.value) {
      this.value = meta.value;
    }

    return meta;
  },

  get list() {
    return this.__meta && this.__meta.list;
  },

  _selfChanged: function(self) {
    if (self) {
      this.value = this;
    }
  },

  /**
   * Retrieves meta data value by key.
   *
   * @method byKey
   * @param {string} key The key of the meta-data to be returned.
   * @return {*}
   */
  byKey: function(key) {
    return new IronMeta({type: this.type, key: key}).value;
  }
});

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
 * The `iron-iconset-svg` element allows users to define their own icon sets
 * that contain svg icons. The svg icon elements should be children of the
 * `iron-iconset-svg` element. Multiple icons should be given distinct id's.
 *
 * Using svg elements to create icons has a few advantages over traditional
 * bitmap graphics like jpg or png. Icons that use svg are vector based so
 * they are resolution independent and should look good on any device. They
 * are stylable via css. Icons can be themed, colorized, and even animated.
 *
 * Example:
 *
 *     <iron-iconset-svg name="my-svg-icons" size="24">
 *       <svg>
 *         <defs>
 *           <g id="shape">
 *             <rect x="12" y="0" width="12" height="24" />
 *             <circle cx="12" cy="12" r="12" />
 *           </g>
 *         </defs>
 *       </svg>
 *     </iron-iconset-svg>
 *
 * This will automatically register the icon set "my-svg-icons" to the iconset
 * database.  To use these icons from within another element, make a
 * `iron-iconset` element and call the `byId` method
 * to retrieve a given iconset. To apply a particular icon inside an
 * element use the `applyIcon` method. For example:
 *
 *     iconset.applyIcon(iconNode, 'car');
 *
 * @element iron-iconset-svg
 * @demo demo/index.html
 * @implements {Polymer.Iconset}
 */
Polymer({
  is: 'iron-iconset-svg',

  properties: {

    /**
     * The name of the iconset.
     */
    name: {type: String, observer: '_nameChanged'},

    /**
     * The size of an individual icon. Note that icons must be square.
     */
    size: {type: Number, value: 24},

    /**
     * Set to true to enable mirroring of icons where specified when they are
     * stamped. Icons that should be mirrored should be decorated with a
     * `mirror-in-rtl` attribute.
     *
     * NOTE: For performance reasons, direction will be resolved once per
     * document per iconset, so moving icons in and out of RTL subtrees will
     * not cause their mirrored state to change.
     */
    rtlMirroring: {type: Boolean, value: false},

    /**
     * Set to true to measure RTL based on the dir attribute on the body or
     * html elements (measured on document.body or document.documentElement as
     * available).
     */
    useGlobalRtlAttribute: {type: Boolean, value: false}
  },

  created: function() {
    this._meta = new IronMeta({type: 'iconset', key: null, value: null});
  },

  attached: function() {
    this.style.display = 'none';
  },

  /**
   * Construct an array of all icon names in this iconset.
   *
   * @return {!Array} Array of icon names.
   */
  getIconNames: function() {
    this._icons = this._createIconMap();
    return Object.keys(this._icons).map(function(n) {
      return this.name + ':' + n;
    }, this);
  },

  /**
   * Applies an icon to the given element.
   *
   * An svg icon is prepended to the element's shadowRoot if it exists,
   * otherwise to the element itself.
   *
   * If RTL mirroring is enabled, and the icon is marked to be mirrored in
   * RTL, the element will be tested (once and only once ever for each
   * iconset) to determine the direction of the subtree the element is in.
   * This direction will apply to all future icon applications, although only
   * icons marked to be mirrored will be affected.
   *
   * @method applyIcon
   * @param {Element} element Element to which the icon is applied.
   * @param {string} iconName Name of the icon to apply.
   * @return {?Element} The svg element which renders the icon.
   */
  applyIcon: function(element, iconName) {
    // Remove old svg element
    this.removeIcon(element);
    // install new svg element
    var svg = this._cloneIcon(
        iconName, this.rtlMirroring && this._targetIsRTL(element));
    if (svg) {
      // insert svg element into shadow root, if it exists
      var pde = dom(element.root || element);
      pde.insertBefore(svg, pde.childNodes[0]);
      return element._svgIcon = svg;
    }
    return null;
  },

  /**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   * @param {string} iconName Name of the icon to apply.
   * @param {boolean} targetIsRTL Whether the target element is RTL.
   * @return {Element} Returns an installable clone of the SVG element
   *     matching `id`.
   */
  createIcon: function(iconName, targetIsRTL) {
    return this._cloneIcon(iconName, this.rtlMirroring && targetIsRTL);
  },

  /**
   * Remove an icon from the given element by undoing the changes effected
   * by `applyIcon`.
   *
   * @param {Element} element The element from which the icon is removed.
   */
  removeIcon: function(element) {
    // Remove old svg element
    if (element._svgIcon) {
      dom(element.root || element).removeChild(element._svgIcon);
      element._svgIcon = null;
    }
  },

  /**
   * Measures and memoizes the direction of the element. Note that this
   * measurement is only done once and the result is memoized for future
   * invocations.
   */
  _targetIsRTL: function(target) {
    if (this.__targetIsRTL == null) {
      if (this.useGlobalRtlAttribute) {
        var globalElement =
            (document.body && document.body.hasAttribute('dir')) ?
            document.body :
            document.documentElement;

        this.__targetIsRTL = globalElement.getAttribute('dir') === 'rtl';
      } else {
        if (target && target.nodeType !== Node.ELEMENT_NODE) {
          target = target.host;
        }

        this.__targetIsRTL =
            target && window.getComputedStyle(target)['direction'] === 'rtl';
      }
    }

    return this.__targetIsRTL;
  },

  /**
   *
   * When name is changed, register iconset metadata
   *
   */
  _nameChanged: function() {
    this._meta.value = null;
    this._meta.key = this.name;
    this._meta.value = this;

    this.async(function() {
      this.fire('iron-iconset-added', this, {node: window});
    });
  },

  /**
   * Create a map of child SVG elements by id.
   *
   * @return {!Object} Map of id's to SVG elements.
   */
  _createIconMap: function() {
    // Objects chained to Object.prototype (`{}`) have members. Specifically,
    // on FF there is a `watch` method that confuses the icon map, so we
    // need to use a null-based object here.
    var icons = Object.create(null);
    dom(this).querySelectorAll('[id]').forEach(function(icon) {
      icons[icon.id] = icon;
    });
    return icons;
  },

  /**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   *
   * @return {Element} Returns an installable clone of the SVG element
   * matching `id`.
   */
  _cloneIcon: function(id, mirrorAllowed) {
    // create the icon map on-demand, since the iconset itself has no discrete
    // signal to know when it's children are fully parsed
    this._icons = this._icons || this._createIconMap();
    return this._prepareSvgClone(this._icons[id], this.size, mirrorAllowed);
  },

  /**
   * @param {Element} sourceSvg
   * @param {number} size
   * @param {Boolean} mirrorAllowed
   * @return {Element}
   */
  _prepareSvgClone: function(sourceSvg, size, mirrorAllowed) {
    if (sourceSvg) {
      var content = sourceSvg.cloneNode(true),
          svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
          viewBox =
              content.getAttribute('viewBox') || '0 0 ' + size + ' ' + size,
          cssText =
              'pointer-events: none; display: block; width: 100%; height: 100%;';

      if (mirrorAllowed && content.hasAttribute('mirror-in-rtl')) {
        cssText +=
            '-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;';
      }

      svg.setAttribute('viewBox', viewBox);
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      svg.setAttribute('focusable', 'false');
      // TODO(dfreedm): `pointer-events: none` works around
      // https://crbug.com/370136
      // TODO(sjmiles): inline style may not be ideal, but avoids requiring a
      // shadow-root
      svg.style.cssText = cssText;
      svg.appendChild(content).removeAttribute('id');
      return svg;
    }
    return null;
  }

});

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var XfCloudPanel_1;
/**
 * These type indicate static states that the cloud panel can enter. If one of
 * these is supplied, `items` and `percentage` is ignored.
 */
var CloudPanelType;
(function (CloudPanelType) {
    CloudPanelType["OFFLINE"] = "offline";
    CloudPanelType["BATTERY_SAVER"] = "battery_saver";
    CloudPanelType["NOT_ENOUGH_SPACE"] = "not_enough_space";
    CloudPanelType["METERED_NETWORK"] = "metered_network";
})(CloudPanelType || (CloudPanelType = {}));
/**
 * The `<xf-cloud-panel>` represents the current state that the Drive bulk
 * pinning process is currently in. When files are being pinned and downloaded,
 * the `items` and `progress` attributes are used to signify that the panel is
 * in progress. The `type` attribute can be used with `not_enough_space`,
 * `offline`, and `battery_saver` to signify possible error or paused states.
 */
let XfCloudPanel = XfCloudPanel_1 = class XfCloudPanel extends XfBase {
    constructor() {
        super(...arguments);
        /**
         * Provide a number formatter that matches the users locale.
         */
        this.numberFormatter_ = new Intl.NumberFormat(getCurrentLocaleOrDefault());
    }
    static get events() {
        return {
            DRIVE_SETTINGS_CLICKED: 'drive_settings_clicked',
            PANEL_CLOSED: 'panel_closed',
        };
    }
    static get styles() {
        return getCSS();
    }
    /**
     * Returns true if the dialog is open, false otherwise.
     */
    get open() {
        return this.$panel_?.open || false;
    }
    /**
     * Show the element relative to the cloud icon that was clicked.
     */
    showAt(el) {
        this.$panel_.showAt(el, { top: el.offsetTop + el.offsetHeight + 20 });
    }
    /**
     * Close the panel.
     */
    close() {
        if (this.open) {
            this.$panel_.close();
        }
    }
    /**
     * Refires the close event to ensure it's a known `XfCloudPanel` event to
     * subscribe to.
     */
    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.$panel_.addEventListener('close', () => {
            this.dispatchEvent(new CustomEvent(XfCloudPanel_1.events.PANEL_CLOSED, {
                bubbles: true,
                composed: true,
            }));
        });
    }
    /**
     * Handles click events for the Google Drive settings button. This emits the
     * event to be handled by the container.
     */
    onSettingsClicked_(event) {
        event.stopImmediatePropagation();
        event.preventDefault();
        if (event.repeat) {
            return;
        }
        this.dispatchEvent(new CustomEvent(XfCloudPanel_1.events.DRIVE_SETTINGS_CLICKED, {
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return html `<cr-action-menu>
      <div class="body">
        <div class="static progress" id="progress-preparing">
          <files-spinner></files-spinner>
          ${str('DRIVE_PREPARING_TO_SYNC')}
        </div>
        <div id="progress-state">
          <div class="progress">${this.items && this.items > 1 ?
            strf('DRIVE_MULTIPLE_FILES_SYNCING', this.numberFormatter_.format(this.items)) :
            str('DRIVE_SINGLE_FILE_SYNCING')}</div>
          <progress
              class="progress-bar"
              max="100"
              value="${this.percentage}">
            ${this.percentage}%
          </progress>
          <div class="progress-description">
          ${this.seconds && this.seconds > 0 ?
            secondsToRemainingTimeString(this.seconds) :
            str('DRIVE_BULK_PINNING_CALCULATING')}
          </div>
        </div>
        <div class="static" id="progress-finished">
          <xf-icon type="${ICON_TYPES.CLOUD}" size="large"></xf-icon>
          <div class="status-description">
            ${str('BULK_PINNING_FILE_SYNC_ON')}
          </div>
        </div>
        <div class="static" id="progress-offline">
        <xf-icon type="${ICON_TYPES.BULK_PINNING_OFFLINE}" size="large"></xf-icon>
          <div class="status-description">
            ${str('DRIVE_BULK_PINNING_OFFLINE')}
          </div>
        </div>
        <div class="static" id="progress-battery-saver">
        <xf-icon type="${ICON_TYPES.BULK_PINNING_BATTERY_SAVER}" size="large"></xf-icon>
          <div class="status-description">
            ${str('DRIVE_BULK_PINNING_BATTERY_SAVER')}
          </div>
        </div>
        <div class="static" id="progress-not-enough-space">
        <xf-icon type="${ICON_TYPES.ERROR_BANNER}" size="large"></xf-icon>
          <div class="status-description">
            ${str('DRIVE_BULK_PINNING_NOT_ENOUGH_SPACE')}
          </div>
        </div>
        <div class="static" id="progress-metered-network">
          <xf-icon type="${ICON_TYPES.CLOUD}" size="large"></xf-icon>
          <div class="status-description">
            ${str('DRIVE_BULK_PINNING_METERED_NETWORK')}
          </div>
        </div>
        <div class="divider"></div>
        <button class="action" @click=${this.onSettingsClicked_}>${str('GOOGLE_DRIVE_SETTINGS_LINK')}</button>
      </div>
    </cr-action-menu>`;
    }
};
__decorate([
    property({ type: Number, reflect: true, attribute: true })
], XfCloudPanel.prototype, "items", void 0);
__decorate([
    property({
        type: Number,
        reflect: true,
        converter: {
            fromAttribute: (value) => {
                const percentage = parseInt(value, 10);
                return percentage >= 0 && percentage <= 100 ? percentage : null;
            },
            toAttribute: (value) => String(value),
        },
    })
], XfCloudPanel.prototype, "percentage", void 0);
__decorate([
    property({
        type: CloudPanelType,
        reflect: true,
        converter: {
            fromAttribute: (value) => {
                if (!value) {
                    return null;
                }
                if (value.toUpperCase() in CloudPanelType) {
                    return value;
                }
                console.warn(`Failed to convert ${value} to CloudPanelType`);
                return null;
            },
            toAttribute: (key) => key,
        },
    })
], XfCloudPanel.prototype, "type", void 0);
__decorate([
    property({
        type: Number,
        reflect: true,
        converter: {
            fromAttribute: (value) => {
                const seconds = parseInt(value, 10);
                return seconds >= 0 ? seconds : null;
            },
            toAttribute: (value) => String(value),
        },
    })
], XfCloudPanel.prototype, "seconds", void 0);
__decorate([
    query('cr-action-menu')
], XfCloudPanel.prototype, "$panel_", void 0);
XfCloudPanel = XfCloudPanel_1 = __decorate([
    customElement('xf-cloud-panel')
], XfCloudPanel);
function getCSS() {
    return css `
    cr-action-menu {
      --cr-menu-border-radius: 20px;
    }

    :host {
      position: absolute;
      right: 0px;
      top: 50px;
      z-index: 600;
    }

    :host(:not([items][percentage])) #progress-state,
    :host([percentage="100"]) #progress-state,
    :host([type]) #progress-state {
      display: none;
    }

    :host(:not([items][percentage="100"])) #progress-finished,
    :host([type]) #progress-finished {
      display: none;
    }

    :host([percentage][items]) #progress-preparing,
    :host([type]) #progress-preparing {
      display: none;
    }

    :host(:not([type="offline"])) #progress-offline {
      display: none;
    }

    :host(:not([type="battery_saver"])) #progress-battery-saver {
      display: none;
    }

    :host(:not([type="not_enough_space"])) #progress-not-enough-space {
      display: none;
    }

    :host(:not([type="metered_network"])) #progress-metered-network {
      display: none;
    }

    .body {
      background-color: var(--cros-sys-base_elevated);
      display: flex;
      flex-direction: column;
      margin: -8px 0;
      width: 320px;
    }

    .static {
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    xf-icon {
      padding: 27px 0px 8px;
    }

    xf-icon[type="bulk_pinning_done"] {
      --xf-icon-color: var(--cros-sys-positive);
    }

    xf-icon[type="bulk_pinning_offline"] {
      --xf-icon-color: var(--cros-sys-secondary);
    }

    xf-icon[type="bulk_pinning_battery_saver"] {
      --xf-icon-color: var(--cros-sys-secondary);
    }

    xf-icon[type="error_banner"] {
      --xf-icon-color: var(--cros-sys-error);
    }

    .status-description {
      color: var(--cros-sys-on_surface_variant);
      font: var(--cros-annotation-1-font);
      line-height: 20px;
      padding: 0px 16px 20px;
      text-align: center;
    }

    .progress {
      color: var(--cros-sys-on_surface);
      font: var(--cros-button-2-font);
      line-height: 20px;
      margin-inline: 16px;
      padding-top: 20px;
    }

    .progress-description {
      color: var(--cros-sys-on_surface_variant);
      font: var(--cros-annotation-1-font);
      padding-bottom: 20px;
      padding-inline: 16px;
    }

    .progress-bar {
      border-radius: 10px;
      height: 4px;
      margin: 8px 0 8px;
      margin-inline: 16px;
      width: calc(100% - 32px);
    }

    #progress-preparing {
      flex-direction: row;
      padding-bottom: 20px;
    }

    #progress-preparing files-spinner {
      height: 20px;
      margin: 0;
      margin-inline-end: 8px;
      width: 20px;
    }

    progress::-webkit-progress-bar {
      background-color: var(--cros-sys-highlight_shape);
      border-radius: 10px;
    }

    progress.progress-bar::-webkit-progress-value {
      background-color: var(--cros-sys-primary);
      border-radius: 10px;
    }

    .divider {
      background: var(--cros-sys-separator);
      height: 1px;
      width: 100%;
    }

    button.action {
      background-color: var(--cros-sys-base_elevated);
      border: 0;
      font: var(--cros-button-2-font);
      height: 36px;
      margin-bottom: 8px;
      margin-top: 8px;
      padding-inline: 16px;
      text-align: left;
    }

    :host-context([dir='rtl']) button.action {
      text-align: right;
    }

    .action {
      width: 100%;
    }

    .action:hover {
      background: var(--cros-sys-hover_on_subtle);
    }
  `;
}

const styleMod$2 = document.createElement('dom-module');
styleMod$2.appendChild(html$1 `
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_up_cr23.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);
styleMod$2.register('cr-icons');

const styleMod$1 = document.createElement('dom-module');
styleMod$1.appendChild(html$1 `
  <template>
    <style include="cr-hidden-style cr-icons">
:host,html{--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host,html{--scrollable-border-color:var(--google-grey-700)}}[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);
styleMod$1.register('cr-shared-style');

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html$1 `
  <template>
    <style>
:host{--cr-input-background-color:var(--google-grey-100);--cr-input-color:var(--cr-primary-text-color);--cr-input-error-color:var(--google-red-600);--cr-input-focus-color:var(--google-blue-600);display:block;outline:0}:host-context([chrome-refresh-2023]):host{--cr-input-background-color:var(--color-textfield-filled-background,
            var(--cr-fallback-color-surface-variant));--cr-input-border-bottom:1px solid var(--color-textfield-filled-underline,
                var(--cr-fallback-color-outline));--cr-input-border-radius:8px 8px 0 0;--cr-input-error-color:var(--color-textfield-filled-error,
            var(--cr-fallback-color-error));--cr-input-focus-color:var(--color-textfield-filled-underline-focused,
            var(--cr-fallback-color-primary));--cr-input-hover-background-color:var(--cr-hover-background-color);--cr-input-label-color:var(--color-textfield-foreground-label,
            var(--cr-fallback-color-on-surface-subtle));--cr-input-padding-bottom:10px;--cr-input-padding-end:10px;--cr-input-padding-start:10px;--cr-input-padding-top:10px;--cr-input-placeholder-color:var(--color-textfield-foreground-placeholder,
                var(--cr-fallback-on-surface-subtle));isolation:isolate}:host-context([chrome-refresh-2023]):host([readonly]){--cr-input-border-radius:8px 8px}@media (prefers-color-scheme:dark){:host{--cr-input-background-color:rgba(0, 0, 0, .3);--cr-input-error-color:var(--google-red-300);--cr-input-focus-color:var(--google-blue-300)}}:host-context(html:not([chrome-refresh-2023])):host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-color)}:host-context([chrome-refresh-2023]) #label{color:var(--cr-input-label-color);font-size:11px;line-height:16px}:host-context([chrome-refresh-2023]):host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-label-color,var(--cr-input-label-color))}#input-container{border-radius:var(--cr-input-border-radius,4px);overflow:hidden;position:relative;width:var(--cr-input-width,100%)}:host-context([chrome-refresh-2023]):host([focused_]) #input-container{outline:var(--cr-input-focus-outline,none)}#inner-input-container{background-color:var(--cr-input-background-color);box-sizing:border-box;padding:0}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted(*){--cr-icon-button-fill-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle));--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;--cr-icon-button-margin-start:0;--cr-icon-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle))}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted([slot=inline-prefix]){--cr-icon-button-margin-start:-8px}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted([slot=inline-suffix]){--cr-icon-button-margin-end:-4px}:host-context([chrome-refresh-2023]):host([invalid]) #inner-input-content ::slotted(*){--cr-icon-color:var(--cr-input-error-color);--cr-icon-button-fill-color:var(--cr-input-error-color)}#hover-layer{display:none}:host-context([chrome-refresh-2023]) #hover-layer{background-color:var(--cr-input-hover-background-color);inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host(:not([readonly]):not([disabled])) #input-container:hover #hover-layer{display:block}#input{-webkit-appearance:none;background-color:transparent;border:none;box-sizing:border-box;caret-color:var(--cr-input-focus-color);color:var(--cr-input-color);font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;min-height:var(--cr-input-min-height,auto);outline:0;padding-bottom:var(--cr-input-padding-bottom,6px);padding-inline-end:var(--cr-input-padding-end,8px);padding-inline-start:var(--cr-input-padding-start,8px);padding-top:var(--cr-input-padding-top,6px);text-align:inherit;text-overflow:ellipsis;width:100%}:host-context([chrome-refresh-2023]) #input{font-size:12px;line-height:16px;padding:0}:host-context([chrome-refresh-2023]) #inner-input-content{padding-bottom:var(--cr-input-padding-bottom);padding-inline-end:var(--cr-input-padding-end);padding-inline-start:var(--cr-input-padding-start);padding-top:var(--cr-input-padding-top)}#underline{border-bottom:2px solid var(--cr-input-focus-color);border-radius:var(--cr-input-underline-border-radius,0);bottom:0;box-sizing:border-box;display:var(--cr-input-underline-display);height:var(--cr-input-underline-height,0);left:0;margin:auto;opacity:0;position:absolute;right:0;transition:opacity 120ms ease-out,width 0s linear 180ms;width:0}:host([focused_]) #underline,:host([force-underline]) #underline,:host([invalid]) #underline{opacity:1;transition:opacity 120ms ease-in,width 180ms ease-out;width:100%}#underline-base{display:none}:host-context([chrome-refresh-2023]):host([readonly]) #underline{display:none}:host-context([chrome-refresh-2023]):host(:not([readonly])) #underline-base{border-bottom:var(--cr-input-border-bottom);bottom:0;display:block;left:0;position:absolute;right:0}:host-context([chrome-refresh-2023]):host([disabled]){color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-input-border-bottom:1px solid currentColor;--cr-input-placeholder-color:currentColor;--cr-input-color:currentColor;--cr-input-background-color:var(--color-textfield-background-disabled,
            var(--cr-fallback-color-disabled-background))}:host-context([chrome-refresh-2023]):host([disabled]) #inner-input-content ::slotted(*){--cr-icon-color:currentColor;--cr-icon-button-fill-color:currentColor}:host-context([chrome-refresh-2023]):host(.stroked){--cr-input-background-color:transparent;--cr-input-border:1px solid var(--color-side-panel-textfield-border,
            var(--cr-fallback-color-neutral-outline));--cr-input-border-bottom:none;--cr-input-border-radius:8px;--cr-input-padding-bottom:9px;--cr-input-padding-end:9px;--cr-input-padding-start:9px;--cr-input-padding-top:9px;--cr-input-underline-display:none;--cr-input-min-height:36px;line-height:16px}:host-context([chrome-refresh-2023]):host(.stroked[focused_]){--cr-input-border:2px solid var(--cr-focus-outline-color);--cr-input-padding-bottom:8px;--cr-input-padding-end:8px;--cr-input-padding-start:8px;--cr-input-padding-top:8px}:host-context([chrome-refresh-2023]):host(.stroked[invalid]){--cr-input-border:1px solid var(--cr-input-error-color)}:host-context([chrome-refresh-2023]):host(.stroked[focused_][invalid]){--cr-input-border:2px solid var(--cr-input-error-color)}
    </style>
  </template>
`.content);
styleMod.register('cr-input-style');

function getTemplate$b() {
    return html$1 `<!--_html_template_start_-->    <style include="cr-hidden-style cr-input-style cr-shared-style">:host([disabled]) :-webkit-any(#label,#error,#input-container){opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]) :is(#label,#error,#input-container){opacity:1}:host ::slotted(cr-button[slot=suffix]){margin-inline-start:var(--cr-button-edge-spacing)!important}:host([invalid]) #label{color:var(--cr-input-error-color)}#input{border-bottom:var(--cr-input-border-bottom,none);letter-spacing:var(--cr-input-letter-spacing)}:host-context([chrome-refresh-2023]) #input{border-bottom:none}:host-context([chrome-refresh-2023]) #input-container{border:var(--cr-input-border,none)}#input::placeholder{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([readonly]) #input{opacity:var(--cr-input-readonly-opacity,.6)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#error{color:var(--cr-input-error-color);display:var(--cr-input-error-display,block);font-size:var(--cr-form-field-label-font-size);height:var(--cr-form-field-label-height);line-height:var(--cr-form-field-label-line-height);margin:8px 0;visibility:hidden;white-space:var(--cr-input-error-white-space)}:host-context([chrome-refresh-2023]) #error{font-size:11px;line-height:16px;margin:4px 10px}:host([invalid]) #error{visibility:visible}#inner-input-content,#row-container{align-items:center;display:flex;justify-content:space-between;position:relative}:host-context([chrome-refresh-2023]) #inner-input-content{gap:4px;height:16px;z-index:1}#input[type=search]::-webkit-search-cancel-button{display:none}:host-context([dir=rtl]) #input[type=url]{text-align:right}#input[type=url]{direction:ltr}</style>
    <div id="label" class="cr-form-field-label" hidden="[[!label]]" aria-hidden="true">
      [[label]]
    </div>
    <div id="row-container" part="row-container">
      <div id="input-container">
        <div id="inner-input-container">
          <div id="hover-layer"></div>
          <div id="inner-input-content">
            <slot name="inline-prefix"></slot>
            
            <input id="input" disabled="[[disabled]]" autofocus="[[autofocus]]" value="{{value::input}}" tabindex$="[[inputTabindex]]" type="[[type]]" readonly$="[[readonly]]" maxlength$="[[maxlength]]" pattern$="[[pattern]]" required="[[required]]" minlength$="[[minlength]]" inputmode$="[[inputmode]]" aria-description$="[[ariaDescription]]" aria-label$="[[getAriaLabel_(ariaLabel, label, placeholder)]]" aria-invalid$="[[getAriaInvalid_(invalid)]]" max="[[max]]" min="[[min]]" on-focus="onInputFocus_" on-blur="onInputBlur_" on-change="onInputChange_" part="input" autocomplete="off">
            <slot name="inline-suffix"></slot>
          </div>
        </div>
        <div id="underline-base"></div>
        <div id="underline"></div>
      </div>
      <slot name="suffix"></slot>
    </div>
    <div id="error" aria-live="assertive">[[displayErrorMessage_]]</div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Input types supported by cr-input.
 */
const SUPPORTED_INPUT_TYPES = new Set([
    'number',
    'password',
    'search',
    'text',
    'url',
]);
class CrInputElement extends PolymerElement {
    static get is() {
        return 'cr-input';
    }
    static get template() {
        return getTemplate$b();
    }
    static get properties() {
        return {
            ariaDescription: {
                type: String,
            },
            ariaLabel: {
                type: String,
                value: '',
            },
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            autoValidate: Boolean,
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            errorMessage: {
                type: String,
                value: '',
                observer: 'onInvalidOrErrorMessageChanged_',
            },
            displayErrorMessage_: {
                type: String,
                value: '',
            },
            /**
             * This is strictly used internally for styling, do not attempt to use
             * this to set focus.
             */
            focused_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            invalid: {
                type: Boolean,
                value: false,
                notify: true,
                reflectToAttribute: true,
                observer: 'onInvalidOrErrorMessageChanged_',
            },
            max: {
                type: Number,
                reflectToAttribute: true,
            },
            min: {
                type: Number,
                reflectToAttribute: true,
            },
            maxlength: {
                type: Number,
                reflectToAttribute: true,
            },
            minlength: {
                type: Number,
                reflectToAttribute: true,
            },
            pattern: {
                type: String,
                reflectToAttribute: true,
            },
            inputmode: String,
            label: {
                type: String,
                value: '',
            },
            placeholder: {
                type: String,
                value: null,
                observer: 'placeholderChanged_',
            },
            readonly: {
                type: Boolean,
                reflectToAttribute: true,
            },
            required: {
                type: Boolean,
                reflectToAttribute: true,
            },
            inputTabindex: {
                type: Number,
                value: 0,
                observer: 'onInputTabindexChanged_',
            },
            type: {
                type: String,
                value: 'text',
                observer: 'onTypeChanged_',
            },
            value: {
                type: String,
                value: '',
                notify: true,
                observer: 'onValueChanged_',
            },
        };
    }
    ready() {
        super.ready();
        // Use inputTabindex instead.
        assert$1(!this.hasAttribute('tabindex'));
    }
    onInputTabindexChanged_() {
        // CrInput only supports 0 or -1 values for the input's tabindex to allow
        // having the input in tab order or not. Values greater than 0 will not work
        // as the shadow root encapsulates tabindices.
        assert$1(this.inputTabindex === 0 || this.inputTabindex === -1);
    }
    onTypeChanged_() {
        // Check that the 'type' is one of the supported types.
        assert$1(SUPPORTED_INPUT_TYPES.has(this.type));
    }
    get inputElement() {
        return this.$.input;
    }
    /**
     * Returns the aria label to be used with the input element.
     */
    getAriaLabel_(ariaLabel, label, placeholder) {
        return ariaLabel || label || placeholder;
    }
    /**
     * Returns 'true' or 'false' as a string for the aria-invalid attribute.
     */
    getAriaInvalid_(invalid) {
        return invalid ? 'true' : 'false';
    }
    onInvalidOrErrorMessageChanged_() {
        this.displayErrorMessage_ = this.invalid ? this.errorMessage : '';
        // On VoiceOver role="alert" is not consistently announced when its content
        // changes. Adding and removing the |role| attribute every time there
        // is an error, triggers VoiceOver to consistently announce.
        const ERROR_ID = 'error';
        const errorElement = this.shadowRoot.querySelector(`#${ERROR_ID}`);
        assert$1(errorElement);
        if (this.invalid) {
            errorElement.setAttribute('role', 'alert');
            this.inputElement.setAttribute('aria-errormessage', ERROR_ID);
        }
        else {
            errorElement.removeAttribute('role');
            this.inputElement.removeAttribute('aria-errormessage');
        }
    }
    /**
     * This is necessary instead of doing <input placeholder="[[placeholder]]">
     * because if this.placeholder is set to a truthy value then removed, it
     * would show "null" as placeholder.
     */
    placeholderChanged_() {
        if (this.placeholder || this.placeholder === '') {
            this.inputElement.setAttribute('placeholder', this.placeholder);
        }
        else {
            this.inputElement.removeAttribute('placeholder');
        }
    }
    focus() {
        this.focusInput();
    }
    /**
     * Focuses the input element.
     * TODO(crbug.com/882612): Replace this with focus() after resolving the text
     * selection issue described in onFocus_().
     * @return Whether the <input> element was focused.
     */
    focusInput() {
        if (this.shadowRoot.activeElement === this.inputElement) {
            return false;
        }
        this.inputElement.focus();
        return true;
    }
    onValueChanged_(newValue, oldValue) {
        if (!newValue && !oldValue) {
            return;
        }
        if (this.autoValidate) {
            this.validate();
        }
    }
    /**
     * 'change' event fires when <input> value changes and user presses 'Enter'.
     * This function helps propagate it to host since change events don't
     * propagate across Shadow DOM boundary by default.
     */
    onInputChange_(e) {
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail: { sourceEvent: e } }));
    }
    onInputFocus_() {
        this.focused_ = true;
    }
    onInputBlur_() {
        this.focused_ = false;
    }
    /**
     * Selects the text within the input. If no parameters are passed, it will
     * select the entire string. Either no params or both params should be passed.
     * Publicly, this function should be used instead of inputElement.select() or
     * manipulating inputElement.selectionStart/selectionEnd because the order of
     * execution between focus() and select() is sensitive.
     */
    select(start, end) {
        this.inputElement.focus();
        if (start !== undefined && end !== undefined) {
            this.inputElement.setSelectionRange(start, end);
        }
        else {
            // Can't just pass one param.
            assert$1(start === undefined && end === undefined);
            this.inputElement.select();
        }
    }
    validate() {
        this.invalid = !this.inputElement.checkValidity();
        return !this.invalid;
    }
}
customElements.define(CrInputElement.is, CrInputElement);

function getTemplate$a() {
    return html$1 `<!--_html_template_start_-->    <style>:host{-webkit-tap-highlight-color:transparent;align-items:center;cursor:pointer;display:flex;outline:0;user-select:none;--cr-checkbox-border-size:2px;--cr-checkbox-size:16px;--cr-checkbox-ripple-size:40px;--cr-checkbox-ripple-offset:calc(var(--cr-checkbox-size)/2 -
            var(--cr-checkbox-ripple-size)/2 - var(--cr-checkbox-border-size));--cr-checkbox-checked-box-color:var(--cr-checked-color);--cr-checkbox-ripple-checked-color:var(--cr-checked-color);--cr-checkbox-checked-ripple-opacity:.2;--cr-checkbox-mark-color:white;--cr-checkbox-ripple-unchecked-color:var(--google-grey-900);--cr-checkbox-unchecked-box-color:var(--google-grey-700);--cr-checkbox-unchecked-ripple-opacity:.15}@media (prefers-color-scheme:dark){:host{--cr-checkbox-checked-ripple-opacity:.4;--cr-checkbox-mark-color:var(--google-grey-900);--cr-checkbox-ripple-unchecked-color:var(--google-grey-500);--cr-checkbox-unchecked-box-color:var(--google-grey-500);--cr-checkbox-unchecked-ripple-opacity:.4}}:host-context([chrome-refresh-2023]):host{--cr-checkbox-ripple-size:32px;--cr-checkbox-mark-color:var(--color-checkbox-check,
            var(--cr-fallback-color-on-primary));--cr-checkbox-checked-box-color:var(--color-checkbox-foreground-checked,
            var(--cr-fallback-color-primary));--cr-checkbox-unchecked-box-color:var(--color-checkbox-foreground-unchecked,
            var(--cr-fallback-color-outline));--cr-checkbox-ripple-checked-color:var(--cr-active-background-color);--cr-checkbox-ripple-unchecked-color:var(--cr-active-background-color);--cr-checkbox-ripple-offset:50%;--cr-checkbox-ripple-opacity:1}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){opacity:1;--cr-checkbox-checked-box-color:var(
            --color-checkbox-container-disabled,
            var(--cr-fallback-color-disabled-background));--cr-checkbox-unchecked-box-color:var(
            --color-checkbox-outline-disabled,
            var(--cr-fallback-color-disabled-background));--cr-checkbox-mark-color:var(--color-checkbox-check-disabled,
            var(--cr-fallback-color-disabled-foreground))}#checkbox{background:0 0;border:var(--cr-checkbox-border-size) solid var(--cr-checkbox-unchecked-box-color);border-radius:2px;box-sizing:border-box;cursor:pointer;display:block;flex-shrink:0;height:var(--cr-checkbox-size);isolation:isolate;margin:0;outline:0;padding:0;position:relative;transform:none;width:var(--cr-checkbox-size)}:host-context([chrome-refresh-2023]):host([disabled][checked]) #checkbox{border-color:transparent}:host-context([chrome-refresh-2023]) #hover-layer{display:none}:host-context([chrome-refresh-2023]) #checkbox:hover #hover-layer{background-color:var(--cr-hover-background-color);border-radius:50%;display:block;height:32px;left:50%;overflow:hidden;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:32px}@media (forced-colors:active){:host(:focus) #checkbox{outline:var(--cr-focus-outline-hcm)}}:host-context([chrome-refresh-2023]) #checkbox:focus-visible{outline:var(--cr-checkbox-focus-outline,2px solid var(--cr-focus-outline-color));outline-offset:2px}#checkmark{display:block;forced-color-adjust:auto;position:relative;transform:scale(0);z-index:1}#checkmark path{fill:var(--cr-checkbox-mark-color)}:host([checked]) #checkmark{transform:scale(1);transition:transform 140ms ease-out}:host([checked]) #checkbox{background:var(--cr-checkbox-checked-box-background-color,var(--cr-checkbox-checked-box-color));border-color:var(--cr-checkbox-checked-box-color)}paper-ripple{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,
            var(--cr-checkbox-unchecked-ripple-opacity));color:var(--cr-checkbox-ripple-unchecked-color);height:var(--cr-checkbox-ripple-size);left:var(--cr-checkbox-ripple-offset);outline:var(--cr-checkbox-ripple-ring,none);pointer-events:none;top:var(--cr-checkbox-ripple-offset);transition:color linear 80ms;width:var(--cr-checkbox-ripple-size)}:host([checked]) paper-ripple{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,
            var(--cr-checkbox-checked-ripple-opacity));color:var(--cr-checkbox-ripple-checked-color)}:host-context([dir=rtl]) paper-ripple{left:auto;right:var(--cr-checkbox-ripple-offset)}:host-context([chrome-refresh-2023]) paper-ripple{transform:translate(-50%,-50%)}:host-context([dir=rtl][chrome-refresh-2023]) paper-ripple{transform:translate(50%,-50%)}#label-container{color:var(--cr-checkbox-label-color,var(--cr-primary-text-color));padding-inline-start:var(--cr-checkbox-label-padding-start,20px);white-space:normal}:host(.label-first) #label-container{order:-1;padding-inline-end:var(--cr-checkbox-label-padding-end,20px);padding-inline-start:0}:host(.no-label) #label-container{display:none}#ariaDescription{height:0;overflow:hidden;width:0}</style>
    <div id="checkbox" tabindex$="[[tabIndex]]" role="checkbox" on-keydown="onKeyDown_" on-keyup="onKeyUp_" aria-disabled="false" aria-checked="false" aria-labelledby="label-container" aria-describedby="ariaDescription">
      
      <svg id="checkmark" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="m10.192 2.121-6.01 6.01-2.121-2.12L1 7.07l2.121 2.121.707.707.354.354 7.071-7.071-1.06-1.06Z">
      </path></svg>
      <div id="hover-layer"></div>
    </div>
    <div id="label-container" aria-hidden="true" aria-label$="[[ariaLabelOverride]]" part="label-container">
      <slot></slot>
    </div>
    <div id="ariaDescription" aria-hidden="true">[[ariaDescription]]</div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-checkbox' is a component similar to native checkbox. It
 * fires a 'change' event *only* when its state changes as a result of a user
 * interaction. By default it assumes there will be child(ren) passed in to be
 * used as labels. If no label will be provided, a .no-label class should be
 * added to hide the spacing between the checkbox and the label container.
 *
 * If a label is provided, it will be shown by default after the checkbox. A
 * .label-first CSS class can be added to show the label before the checkbox.
 *
 * List of customizable styles:
 *  --cr-checkbox-border-size
 *  --cr-checkbox-checked-box-background-color
 *  --cr-checkbox-checked-box-color
 *  --cr-checkbox-label-color
 *  --cr-checkbox-label-padding-start
 *  --cr-checkbox-mark-color
 *  --cr-checkbox-ripple-checked-color
 *  --cr-checkbox-ripple-size
 *  --cr-checkbox-ripple-unchecked-color
 *  --cr-checkbox-size
 *  --cr-checkbox-unchecked-box-color
 */
const CrCheckboxElementBase = PaperRippleMixin(PolymerElement);
class CrCheckboxElement extends CrCheckboxElementBase {
    static get is() {
        return 'cr-checkbox';
    }
    static get template() {
        return getTemplate$a();
    }
    static get properties() {
        return {
            checked: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'checkedChanged_',
                notify: true,
            },
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'disabledChanged_',
            },
            ariaDescription: String,
            ariaLabelOverride: String,
            tabIndex: {
                type: Number,
                value: 0,
                observer: 'onTabIndexChanged_',
            },
        };
    }
    ready() {
        super.ready();
        // 
        // TODO(b/309689294) Remove this once CrOS UIs migrate to Jellybean
        // components and no longer use cr-elements.
        // Force stamp the ripple element to enable CrOS focus styles. Ripple
        // visibility is controlled by the event listeners below.
        if (document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.getRipple();
        }
        // 
        this.removeAttribute('unresolved');
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('pointerup', this.hideRipple_.bind(this));
        if (document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.addEventListener('pointerdown', this.showRipple_.bind(this));
            this.addEventListener('pointerleave', this.hideRipple_.bind(this));
        }
        else {
            this.addEventListener('blur', this.hideRipple_.bind(this));
            this.addEventListener('focus', this.showRipple_.bind(this));
        }
    }
    focus() {
        this.$.checkbox.focus();
    }
    getFocusableElement() {
        return this.$.checkbox;
    }
    checkedChanged_() {
        this.$.checkbox.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    }
    disabledChanged_(_current, previous) {
        if (previous === undefined && !this.disabled) {
            return;
        }
        this.tabIndex = this.disabled ? -1 : 0;
        this.$.checkbox.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
    }
    showRipple_() {
        if (this.noink) {
            return;
        }
        this.getRipple().showAndHoldDown();
    }
    hideRipple_() {
        this.getRipple().clear();
    }
    onClick_(e) {
        if (this.disabled || e.target.tagName === 'A') {
            return;
        }
        // Prevent |click| event from bubbling. It can cause parents of this
        // elements to erroneously re-toggle this control.
        e.stopPropagation();
        e.preventDefault();
        this.checked = !this.checked;
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail: this.checked }));
    }
    onKeyDown_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.repeat) {
            return;
        }
        if (e.key === 'Enter') {
            this.click();
        }
    }
    onKeyUp_(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
        }
        if (e.key === ' ') {
            this.click();
        }
    }
    onTabIndexChanged_() {
        // :host shouldn't have a tabindex because it's set on #checkbox.
        this.removeAttribute('tabindex');
    }
    // Overridden from PaperRippleMixin
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _createRipple() {
        this._rippleContainer = this.$.checkbox;
        const ripple = super._createRipple();
        ripple.id = 'ink';
        ripple.setAttribute('recenters', '');
        ripple.classList.add('circle', 'toggle-ink');
        return ripple;
    }
}
customElements.define(CrCheckboxElement.is, CrCheckboxElement);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**

The `iron-icon` element displays an icon. By default an icon renders as a 24px
square.

Example using src:

    <iron-icon src="star.png"></iron-icon>

Example setting size to 32px x 32px:

    <iron-icon class="big" src="big_star.png"></iron-icon>

    <style is="custom-style">
      .big {
        --iron-icon-height: 32px;
        --iron-icon-width: 32px;
      }
    </style>

The iron elements include several sets of icons. To use the default set of
icons, import `iron-icons.js` and use the `icon` attribute to specify an icon:

    <script type="module">
      import "../iron-icons/iron-icons.js";
    </script>

    <iron-icon icon="menu"></iron-icon>

To use a different built-in set of icons, import the specific
`iron-icons/<iconset>-icons.js`, and specify the icon as `<iconset>:<icon>`.
For example, to use a communication icon, you would use:

    <script type="module">
      import "../iron-icons/communication-icons.js";
    </script>

    <iron-icon icon="communication:email"></iron-icon>

You can also create custom icon sets of bitmap or SVG icons.

Example of using an icon named `cherry` from a custom iconset with the ID
`fruit`:

    <iron-icon icon="fruit:cherry"></iron-icon>

See `<iron-iconset>` and `<iron-iconset-svg>` for more information about how to
create a custom iconset.

See the `iron-icons` demo to see the icons available in the various iconsets.

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-icon` | Mixin applied to the icon | {}
`--iron-icon-width` | Width of the icon | `24px`
`--iron-icon-height` | Height of the icon | `24px`
`--iron-icon-fill-color` | Fill color of the svg icon | `currentcolor`
`--iron-icon-stroke-color` | Stroke color of the svg icon | none

@group Iron Elements
@element iron-icon
@demo demo/index.html
@hero hero.svg
@homepage polymer.github.io
*/
Polymer({
  _template: html$1`
    <style>
      :host {
        align-items: center;
        display: inline-flex;
        justify-content: center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,

  is: 'iron-icon',

  properties: {

    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: {type: String},

    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: {type: String},

    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: {type: String},

    /**
     * @type {!IronMeta}
     */
    _meta: {value: Base.create('iron-meta', {type: 'iconset'})}

  },

  observers: [
    '_updateIcon(_meta, isAttached)',
    '_updateIcon(theme, isAttached)',
    '_srcChanged(src, isAttached)',
    '_iconChanged(icon, isAttached)'
  ],

  _DEFAULT_ICONSET: 'icons',

  _iconChanged: function(icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;
    this._updateIcon();
  },

  _srcChanged: function(src) {
    this._updateIcon();
  },

  _usesIconset: function() {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function() {
    if (this._usesIconset()) {
      if (this._img && this._img.parentNode) {
        dom(this.root).removeChild(this._img);
      }
      if (this._iconName === '') {
        if (this._iconset) {
          this._iconset.removeIcon(this);
        }
      } else if (this._iconsetName && this._meta) {
        this._iconset = /** @type {?Polymer.Iconset} */ (
            this._meta.byKey(this._iconsetName));
        if (this._iconset) {
          this._iconset.applyIcon(this, this._iconName, this.theme);
          this.unlisten(window, 'iron-iconset-added', '_updateIcon');
        } else {
          this.listen(window, 'iron-iconset-added', '_updateIcon');
        }
      }
    } else {
      if (this._iconset) {
        this._iconset.removeIcon(this);
      }
      if (!this._img) {
        this._img = document.createElement('img');
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.draggable = false;
      }
      this._img.src = this.src;
      dom(this.root).appendChild(this._img);
    }
  }
});

function getTemplate$9() {
    return html$1 `<!--_html_template_start_-->    <style>:host{--cr-icon-button-fill-color:var(--google-grey-700);--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:36px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:0;overflow:hidden;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host-context([chrome-refresh-2023]):host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-size:32px;position:relative}:host(:hover){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}:host-context(html:not([chrome-refresh-2023])) :host(:active){background-color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}paper-ripple{display:none}:host-context([chrome-refresh-2023]) paper-ripple{--paper-ripple-opacity:1;color:var(--cr-active-background-color);display:block}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([dir=ltr]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([dir=ltr])[multiple-icons_]) iron-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);position:relative;width:100%}iron-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color, none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}</style>
    <div id="icon">
      <div id="maskedImage"></div>
    </div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-icon-button' is a button which displays an icon with a
 * ripple. It can be interacted with like a normal button using click as well as
 * space and enter to effectively click the button and fire a 'click' event.
 *
 * There are two sources to icons, cr-icons and iron-iconset-svg. The cr-icon's
 * are defined as background images with a reference to a resource file
 * associated with a CSS class name. The iron-icon's are defined as inline SVG's
 * under a key that is stored in a global map that is accessible to the
 * iron-icon element.
 *
 * Example of using a cr-icon:
 * <link rel="import" href="chrome://resources/cr_elements/cr_icons.css.html">
 * <dom-module id="module">
 *   <template>
 *     <style includes="cr-icons"></style>
 *     <cr-icon-button class="icon-class-name"></cr-icon-button>
 *   </template>
 * </dom-module>
 *
 * In general when an icon is specified using a class, the expectation is the
 * class will set an image to the --cr-icon-image variable.
 *
 * Example of using an iron-icon:
 * In the TS file:
 * import 'chrome://resources/cr_elements/icons.html.js';
 *
 * In the HTML template file:
 * <cr-icon-button iron-icon="cr:icon-key"></cr-icon-button>
 *
 * The color of the icon can be overridden using CSS variables. When using
 * iron-icon both the fill and stroke can be overridden the variables:
 * --cr-icon-button-fill-color
 * --cr-icon-button-stroke-color
 *
 * When not using iron-icon (ie. specifying --cr-icon-image), the icons support
 * one color and the 'stroke' variables are ignored.
 *
 * When using iron-icon's, more than one icon can be specified by setting
 * the |ironIcon| property to a comma-delimited list of keys.
 */
const CrIconbuttonElementBase = PaperRippleMixin(PolymerElement);
class CrIconButtonElement extends CrIconbuttonElementBase {
    static get is() {
        return 'cr-icon-button';
    }
    static get template() {
        return getTemplate$9();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'disabledChanged_',
            },
            /**
             * Use this property in order to configure the "tabindex" attribute.
             */
            customTabIndex: {
                type: Number,
                observer: 'applyTabIndex_',
            },
            ironIcon: {
                type: String,
                observer: 'onIronIconChanged_',
                reflectToAttribute: true,
            },
            multipleIcons_: {
                type: Boolean,
                reflectToAttribute: true,
            },
        };
    }
    constructor() {
        super();
        /**
         * It is possible to activate a tab when the space key is pressed down. When
         * this element has focus, the keyup event for the space key should not
         * perform a 'click'. |spaceKeyDown_| tracks when a space pressed and
         * handled by this element. Space keyup will only result in a 'click' when
         * |spaceKeyDown_| is true. |spaceKeyDown_| is set to false when element
         * loses focus.
         */
        this.spaceKeyDown_ = false;
        this.addEventListener('blur', this.onBlur_.bind(this));
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('keyup', this.onKeyUp_.bind(this));
        if (document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.addEventListener('pointerdown', this.onPointerDown_.bind(this));
        }
    }
    ready() {
        super.ready();
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'button');
        }
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
    }
    toggleClass(className) {
        this.classList.toggle(className);
    }
    disabledChanged_(newValue, oldValue) {
        if (!newValue && oldValue === undefined) {
            return;
        }
        if (this.disabled) {
            this.blur();
        }
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        this.applyTabIndex_();
    }
    /**
     * Updates the tabindex HTML attribute to the actual value.
     */
    applyTabIndex_() {
        let value = this.customTabIndex;
        if (value === undefined) {
            value = this.disabled ? -1 : 0;
        }
        this.setAttribute('tabindex', value.toString());
    }
    onBlur_() {
        this.spaceKeyDown_ = false;
    }
    onClick_(e) {
        if (this.disabled) {
            e.stopImmediatePropagation();
        }
    }
    onIronIconChanged_() {
        this.shadowRoot.querySelectorAll('iron-icon').forEach(el => el.remove());
        if (!this.ironIcon) {
            return;
        }
        const icons = (this.ironIcon || '').split(',');
        this.multipleIcons_ = icons.length > 1;
        icons.forEach(icon => {
            const ironIcon = document.createElement('iron-icon');
            ironIcon.icon = icon;
            this.$.icon.appendChild(ironIcon);
            if (ironIcon.shadowRoot) {
                ironIcon.shadowRoot.querySelectorAll('svg, img')
                    .forEach(child => child.setAttribute('role', 'none'));
            }
        });
    }
    onKeyDown_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.repeat) {
            return;
        }
        if (e.key === 'Enter') {
            this.click();
        }
        else if (e.key === ' ') {
            this.spaceKeyDown_ = true;
        }
    }
    onKeyUp_(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
        }
        if (this.spaceKeyDown_ && e.key === ' ') {
            this.spaceKeyDown_ = false;
            this.click();
        }
    }
    onPointerDown_() {
        this.ensureRipple();
    }
}
customElements.define(CrIconButtonElement.is, CrIconButtonElement);

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview CrContainerShadowMixin holds logic for showing a drop shadow
 * near the top of a container element, when the content has scrolled.
 *
 * Elements using this mixin are expected to define a #container element,
 * which is the element being scrolled. If the #container element has a
 * show-bottom-shadow attribute, a drop shadow will also be shown near the
 * bottom of the container element, when there is additional content to scroll
 * to. Examples:
 *
 * For both top and bottom shadows:
 * <div id="container" show-bottom-shadow>...</div>
 *
 * For top shadow only:
 * <div id="container">...</div>
 *
 * The mixin will take care of inserting an element with ID
 * 'cr-container-shadow-top' which holds the drop shadow effect, and,
 * optionally, an element with ID 'cr-container-shadow-bottom' which holds the
 * same effect. A 'has-shadow' CSS class is automatically added to/removed from
 * both elements while scrolling, as necessary. Note that the show-bottom-shadow
 * attribute is inspected only during attached(), and any changes to it that
 * occur after that point will not be respected.
 *
 * Clients should either use the existing shared styling in
 * cr_shared_style.css, '#cr-container-shadow-[top/bottom]' and
 * '#cr-container-shadow-[top/bottom].has-shadow', or define their own styles.
 */
var CrContainerShadowSide;
(function (CrContainerShadowSide) {
    CrContainerShadowSide["TOP"] = "top";
    CrContainerShadowSide["BOTTOM"] = "bottom";
})(CrContainerShadowSide || (CrContainerShadowSide = {}));
const CrContainerShadowMixin = dedupingMixin((superClass) => {
    class CrContainerShadowMixin extends superClass {
        constructor() {
            super(...arguments);
            this.intersectionObserver_ = null;
            this.dropShadows_ = new Map();
            this.intersectionProbes_ = new Map();
            this.sides_ = null;
        }
        connectedCallback() {
            super.connectedCallback();
            const hasBottomShadow = this.getContainer_().hasAttribute('show-bottom-shadow');
            this.sides_ = hasBottomShadow ?
                [CrContainerShadowSide.TOP, CrContainerShadowSide.BOTTOM] :
                [CrContainerShadowSide.TOP];
            this.sides_.forEach(side => {
                // The element holding the drop shadow effect to be shown.
                const shadow = document.createElement('div');
                shadow.id = `cr-container-shadow-${side}`;
                shadow.classList.add('cr-container-shadow');
                this.dropShadows_.set(side, shadow);
                this.intersectionProbes_.set(side, document.createElement('div'));
            });
            this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.TOP), this.getContainer_());
            this.getContainer_().prepend(this.intersectionProbes_.get(CrContainerShadowSide.TOP));
            if (hasBottomShadow) {
                this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.BOTTOM), this.getContainer_().nextSibling);
                this.getContainer_().append(this.intersectionProbes_.get(CrContainerShadowSide.BOTTOM));
            }
            this.enableShadowBehavior(true);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.enableShadowBehavior(false);
        }
        getContainer_() {
            return this.shadowRoot.querySelector('#container');
        }
        getIntersectionObserver_() {
            const callback = (entries) => {
                // In some rare cases, there could be more than one entry per
                // observed element, in which case the last entry's result
                // stands.
                for (const entry of entries) {
                    const target = entry.target;
                    this.sides_.forEach(side => {
                        if (target === this.intersectionProbes_.get(side)) {
                            this.dropShadows_.get(side).classList.toggle('has-shadow', entry.intersectionRatio === 0);
                        }
                    });
                }
            };
            return new IntersectionObserver(callback, { root: this.getContainer_(), threshold: 0 });
        }
        /**
         * @param enable Whether to enable the mixin or disable it.
         *     This function does nothing if the mixin is already in the
         *     requested state.
         */
        enableShadowBehavior(enable) {
            // Behavior is already enabled/disabled. Return early.
            if (enable === !!this.intersectionObserver_) {
                return;
            }
            if (!enable) {
                this.intersectionObserver_.disconnect();
                this.intersectionObserver_ = null;
                return;
            }
            this.intersectionObserver_ = this.getIntersectionObserver_();
            // Need to register the observer within a setTimeout() callback,
            // otherwise the drop shadow flashes once on startup, because of the
            // DOM modifications earlier in this function causing a relayout.
            window.setTimeout(() => {
                if (this.intersectionObserver_) {
                    // In case this is already detached.
                    this.intersectionProbes_.forEach(probe => {
                        this.intersectionObserver_.observe(probe);
                    });
                }
            });
        }
        /**
         * Shows the shadows. The shadow mixin must be disabled before
         * calling this method, otherwise the intersection observer might
         * show the shadows again.
         */
        showDropShadows() {
            assert$1(!this.intersectionObserver_);
            assert$1(this.sides_);
            for (const side of this.sides_) {
                this.dropShadows_.get(side).classList.toggle('has-shadow', true);
            }
        }
    }
    return CrContainerShadowMixin;
});

function getTemplate$8() {
    return html$1 `<!--_html_template_start_-->    <style include="cr-hidden-style cr-icons">dialog{--scroll-border-color:var(--paper-grey-300);--scroll-border:1px solid var(--scroll-border-color);background-color:var(--cr-dialog-background-color,#fff);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,.12),0 16px 16px rgba(0,0,0,.24);color:inherit;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{--scroll-border-color:var(--google-grey-700);background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}:host{--transparent-border:1px solid transparent}#cr-container-shadow-top{border-bottom:var(--cr-dialog-body-border-top,var(--transparent-border))}#cr-container-shadow-bottom{border-bottom:var(--cr-dialog-body-border-bottom,var(--transparent-border))}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{border-bottom:var(--scroll-border)}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}</style>
    <dialog id="dialog" on-close="onNativeDialogClose_" on-cancel="onNativeDialogCancel_" part="dialog" aria-labelledby="title" aria-description$="[[ariaDescriptionText]]">
    
      <div id="content-wrapper" part="wrapper">
        <div class="top-container">
          <h2 id="title" class="title-container" tabindex="-1">
            <slot name="title"></slot>
          </h2>
          <cr-icon-button id="close" class="icon-clear" hidden$="[[!showCloseButton]]" aria-label$="[[closeText]]" on-click="cancel" on-keypress="onCloseKeypress_">
          </cr-icon-button>
        </div>
        <slot name="header"></slot>
        <div class="body-container" id="container" show-bottom-shadow part="body-container">
          <slot name="body"></slot>
        </div>
        <slot name="button-container"></slot>
        <slot name="footer"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-dialog' is a component for showing a modal dialog. If the
 * dialog is closed via close(), a 'close' event is fired. If the dialog is
 * canceled via cancel(), a 'cancel' event is fired followed by a 'close' event.
 *
 * Additionally clients can get a reference to the internal native <dialog> via
 * calling getNative() and inspecting the |returnValue| property inside
 * the 'close' event listener to determine whether it was canceled or just
 * closed, where a truthy value means success, and a falsy value means it was
 * canceled.
 *
 * Note that <cr-dialog> wrapper itself always has 0x0 dimensions, and
 * specifying width/height on <cr-dialog> directly will have no effect on the
 * internal native <dialog>. Instead use cr-dialog::part(dialog) to specify
 * width/height (as well as other available mixins to style other parts of the
 * dialog contents).
 */
const CrDialogElementBase = CrContainerShadowMixin(PolymerElement);
class CrDialogElement extends CrDialogElementBase {
    constructor() {
        super(...arguments);
        this.intersectionObserver_ = null;
        this.mutationObserver_ = null;
        this.boundKeydown_ = null;
    }
    static get is() {
        return 'cr-dialog';
    }
    static get template() {
        return getTemplate$8();
    }
    static get properties() {
        return {
            open: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /**
             * Alt-text for the dialog close button.
             */
            closeText: String,
            /**
             * True if the dialog should remain open on 'popstate' events. This is
             * used for navigable dialogs that have their separate navigation handling
             * code.
             */
            ignorePopstate: {
                type: Boolean,
                value: false,
            },
            /**
             * True if the dialog should ignore 'Enter' keypresses.
             */
            ignoreEnterKey: {
                type: Boolean,
                value: false,
            },
            /**
             * True if the dialog should consume 'keydown' events. If ignoreEnterKey
             * is true, 'Enter' key won't be consumed.
             */
            consumeKeydownEvent: {
                type: Boolean,
                value: false,
            },
            /**
             * True if the dialog should not be able to be cancelled, which will
             * prevent 'Escape' key presses from closing the dialog.
             */
            noCancel: {
                type: Boolean,
                value: false,
            },
            // True if dialog should show the 'X' close button.
            showCloseButton: {
                type: Boolean,
                value: false,
            },
            showOnAttach: {
                type: Boolean,
                value: false,
            },
            /**
             * Text for the aria description.
             */
            ariaDescriptionText: String,
        };
    }
    ready() {
        super.ready();
        // If the active history entry changes (i.e. user clicks back button),
        // all open dialogs should be cancelled.
        window.addEventListener('popstate', () => {
            if (!this.ignorePopstate && this.$.dialog.open) {
                this.cancel();
            }
        });
        if (!this.ignoreEnterKey) {
            this.addEventListener('keypress', this.onKeypress_.bind(this));
        }
        this.addEventListener('pointerdown', e => this.onPointerdown_(e));
    }
    connectedCallback() {
        super.connectedCallback();
        const mutationObserverCallback = () => {
            if (this.$.dialog.open) {
                this.enableShadowBehavior(true);
                this.addKeydownListener_();
            }
            else {
                this.enableShadowBehavior(false);
                this.removeKeydownListener_();
            }
        };
        this.mutationObserver_ = new MutationObserver(mutationObserverCallback);
        this.mutationObserver_.observe(this.$.dialog, {
            attributes: true,
            attributeFilter: ['open'],
        });
        // In some cases dialog already has the 'open' attribute by this point.
        mutationObserverCallback();
        if (this.showOnAttach) {
            this.showModal();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeKeydownListener_();
        if (this.mutationObserver_) {
            this.mutationObserver_.disconnect();
            this.mutationObserver_ = null;
        }
    }
    addKeydownListener_() {
        if (!this.consumeKeydownEvent) {
            return;
        }
        this.boundKeydown_ = this.boundKeydown_ || this.onKeydown_.bind(this);
        this.addEventListener('keydown', this.boundKeydown_);
        // Sometimes <body> is key event's target and in that case the event
        // will bypass cr-dialog. We should consume those events too in order to
        // behave modally. This prevents accidentally triggering keyboard commands.
        document.body.addEventListener('keydown', this.boundKeydown_);
    }
    removeKeydownListener_() {
        if (!this.boundKeydown_) {
            return;
        }
        this.removeEventListener('keydown', this.boundKeydown_);
        document.body.removeEventListener('keydown', this.boundKeydown_);
        this.boundKeydown_ = null;
    }
    showModal() {
        this.$.dialog.showModal();
        assert$1(this.$.dialog.open);
        this.open = true;
        this.dispatchEvent(new CustomEvent('cr-dialog-open', { bubbles: true, composed: true }));
    }
    cancel() {
        this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
        this.$.dialog.close();
        assert$1(!this.$.dialog.open);
        this.open = false;
    }
    close() {
        this.$.dialog.close('success');
        assert$1(!this.$.dialog.open);
        this.open = false;
    }
    /**
     * Set the title of the dialog for a11y reader.
     * @param title Title of the dialog.
     */
    setTitleAriaLabel(title) {
        this.$.dialog.removeAttribute('aria-labelledby');
        this.$.dialog.setAttribute('aria-label', title);
    }
    onCloseKeypress_(e) {
        // Because the dialog may have a default Enter key handler, prevent
        // keypress events from bubbling up from this element.
        e.stopPropagation();
    }
    onNativeDialogClose_(e) {
        // Ignore any 'close' events not fired directly by the <dialog> element.
        if (e.target !== this.getNative()) {
            return;
        }
        // Catch and re-fire the 'close' event such that it bubbles across Shadow
        // DOM v1.
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
    onNativeDialogCancel_(e) {
        // Ignore any 'cancel' events not fired directly by the <dialog> element.
        if (e.target !== this.getNative()) {
            return;
        }
        if (this.noCancel) {
            e.preventDefault();
            return;
        }
        // When the dialog is dismissed using the 'Esc' key, need to manually update
        // the |open| property (since close() is not called).
        this.open = false;
        // Catch and re-fire the native 'cancel' event such that it bubbles across
        // Shadow DOM v1.
        this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
    }
    /**
     * Expose the inner native <dialog> for some rare cases where it needs to be
     * directly accessed (for example to programmatically setheight/width, which
     * would not work on the wrapper).
     */
    getNative() {
        return this.$.dialog;
    }
    onKeypress_(e) {
        if (e.key !== 'Enter') {
            return;
        }
        // Accept Enter keys from either the dialog itself, or a child cr-input,
        // considering that the event may have been retargeted, for example if the
        // cr-input is nested inside another element. Also exclude inputs of type
        // 'search', since hitting 'Enter' on a search field most likely intends to
        // trigger searching.
        const accept = e.target === this ||
            e.composedPath().some(el => el.tagName === 'CR-INPUT' &&
                el.type !== 'search');
        if (!accept) {
            return;
        }
        const actionButton = this.querySelector('.action-button:not([disabled]):not([hidden])');
        if (actionButton) {
            actionButton.click();
            e.preventDefault();
        }
    }
    onKeydown_(e) {
        assert$1(this.consumeKeydownEvent);
        if (!this.getNative().open) {
            return;
        }
        if (this.ignoreEnterKey && e.key === 'Enter') {
            return;
        }
        // Stop propagation to behave modally.
        e.stopPropagation();
    }
    onPointerdown_(e) {
        // Only show pulse animation if user left-clicked outside of the dialog
        // contents.
        if (e.button !== 0 ||
            e.composedPath()[0].tagName !== 'DIALOG') {
            return;
        }
        this.$.dialog.animate([
            { transform: 'scale(1)', offset: 0 },
            { transform: 'scale(1.02)', offset: 0.4 },
            { transform: 'scale(1.02)', offset: 0.6 },
            { transform: 'scale(1)', offset: 1 },
        ], {
            duration: 180,
            easing: 'ease-in-out',
            iterations: 1,
        });
        // Prevent any text from being selected within the dialog when clicking in
        // the backdrop area.
        e.preventDefault();
    }
    focus() {
        const titleContainer = this.shadowRoot.querySelector('.title-container');
        assert$1(titleContainer);
        titleContainer.focus();
    }
}
customElements.define(CrDialogElement.is, CrDialogElement);

function getTemplate$7() {
    return getTrustedHTML `<!--_html_template_start_--><!--
Copyright 2022 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style>
  [hidden] {
    display: none !important;
  }

  cr-dialog::part(dialog) {
    --cr-dialog-top-container-min-height: 0px;
    background-color: var(--cros-bg-color-elevation-3);
    border-radius: 12px;
    box-shadow: var(--cros-elevation-3-shadow);
    user-select: none;
    width: 448px;
  }

  cr-dialog::part(dialog)::backdrop {
    background-color: var(--cros-app-shield-60);
  }

  cr-dialog::part(wrapper) {
    /* subtract the internal padding in <cr-dialog> */
    padding: calc(24px - 20px);
  }

  cr-dialog #message {
    color: var(--cros-text-color-primary);
    outline: none;
    padding: 20px 0;
  }

  cr-checkbox {
    margin-bottom: 16px;
    margin-inline-start: 4px;
  }

  cr-dialog [slot=button-container] {
    padding-top: 0;
  }

  cr-button {
    --active-bg: transparent;
    --active-shadow:
      0 1px 2px var(--cros-button-active-shadow-color-key-secondary),
      0 1px 3px var(--cros-button-active-shadow-color-ambient-secondary);
    --active-shadow-action:
      0 1px 2px var(--cros-button-active-shadow-color-key-primary),
      0 1px 3px var(--cros-button-active-shadow-color-ambient-primary);
    --bg-action: var(--cros-button-background-color-primary);
    --border-color: var(--cros-button-stroke-color-secondary);
    --disabled-bg-action:
      var(--cros-button-background-color-primary-disabled);
    --disabled-bg: var(--cros-button-background-color-primary-disabled);
    --disabled-border-color:
      var(--cros-button-stroke-color-secondary-disabled);
    --disabled-text-color: var(--cros-button-label-color-secondary-disabled);
    --hover-bg-action: var(--cros-button-background-color-primary-hover-preblended);
    --hover-bg-color: var(--cros-button-background-color-secondary-hover);
    --hover-border-color: var(--cros-button-stroke-color-secondary-hover);
    --ink-color: var(--cros-button-ripple-color-secondary);
    --ripple-opacity-action: var(--cros-button-primary-ripple-opacity);
    --ripple-opacity: var(--cros-button-secondary-ripple-opacity);
    --text-color-action: var(--cros-button-label-color-primary);
    --text-color: var(--cros-button-label-color-secondary);
  }

  #keepboth {
    margin-inline-start: auto;
  }

  #replace {
    margin-inline-end: 0;
  }

  :host-context(.pointer-active) cr-button:not(:active):hover {
    background: transparent;
    cursor: unset;
  }

  :host-context(.pointer-active) cr-button:focus {
    box-shadow: none;
  }

  :host-context(.focus-outline-visible) cr-button:focus {
    box-shadow: none;
    outline: 2px solid var(--cros-focus-ring-color);
    outline-offset: 2px;
  }
</style>

<cr-dialog id="conflict-dialog" consume-keydown-event>
  <div slot="body">
    <div id="message" tabindex="0">
    </div>
    <cr-checkbox id="checkbox">
      $i18n{CONFLICT_DIALOG_APPLY_TO_ALL}
    </cr-checkbox>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" id="cancel">
      $i18n{CANCEL_LABEL}
    </cr-button>
    <cr-button class="cancel-button" id="keepboth">
      $i18n{CONFLICT_DIALOG_KEEP_BOTH}
    </cr-button>
    <cr-button class="cancel-button" id="replace">
      $i18n{CONFLICT_DIALOG_REPLACE}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Files Conflict Dialog: if the target file of a copy/move operation exists,
 * the conflict dialog can be used to ask the user what to do in that case.
 *
 * The user can choose to 'cancel' the copy/move operation by cancelling the
 * dialog. Otherwise, the user can choose to 'replace' the file or 'keepboth'
 * to keep the file.
 */
class XfConflictDialog extends HTMLElement {
    /**
     * Construct.
     */
    constructor() {
        super();
        /**
         * Mutex used to serialize conflict modal dialog use.
         */
        this.mutex_ = new AsyncQueue();
        /**
         * Either 'keepboth' or 'replace' on dialog success, or an empty string if
         * the dialog was cancelled.
         */
        this.action_ = '';
        // Create element content.
        const template = document.createElement('template');
        template.innerHTML = getTemplate$7();
        const fragment = template.content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(fragment);
        this.dialog_ = this.getDialogElement();
        this.resolve_ = console.log;
        this.reject_ = console.log;
    }
    /**
     * DOM connected callback.
     */
    connectedCallback() {
        this.dialog_.addEventListener('close', this.closed_.bind(this));
        this.getCheckboxElement().onchange = this.checked_.bind(this);
        this.getCancelButton().onclick = this.cancel_.bind(this);
        this.getKeepbothButton().onclick = this.keepboth_.bind(this);
        this.getReplaceButton().onclick = this.replace_.bind(this);
    }
    /**
     * Open the modal dialog to ask the user to resolve a conflict for the given
     * |filename|. The default parameters after |filename| are as follows:
     *
     * Set |checkbox| true to display the 'Apply to all' checkbox in the dialog,
     *   and should be set true if there are potentially, multiple file names in
     *   a copy or move operation that conflict. The default is false.
     *
     * Set |directory| true if the |filename| is a directory (aka a folder). The
     *   default is false.
     */
    async show(filename, checkbox = false, directory = false) {
        const unlock = await this.mutex_.lock();
        try {
            return await new Promise((resolve, reject) => {
                this.resolve_ = resolve;
                this.reject_ = reject;
                this.showModal_(filename, checkbox, directory);
            });
        }
        finally {
            unlock();
        }
    }
    /**
     * Resets the dialog for the given |filename| |checkbox| and |folder| values
     * and then shows the modal dialog.
     */
    showModal_(filename, checkbox, folder) {
        const message = // 'A folder named ...' or 'A file named ...'
         folder ? 'CONFLICT_DIALOG_FOLDER_MESSAGE' : 'CONFLICT_DIALOG_MESSAGE';
        this.getMessageElement().innerText = strf(message, filename);
        const applyToAll = this.getCheckboxElement();
        applyToAll.hidden = !checkbox;
        applyToAll.checked = false;
        this.action_ = '';
        this.checked_();
        this.dialog_.showModal();
        this.setFocus_();
    }
    /**
     * The conflict dialog has no title. Remove the <cr-dialog> title child that
     * would focus, remove its <dialog> aria-labelledby and aria-describedby, so
     * ARIA announces the #message (that is the initial focus) once.
     *
     * Per https://w3c.github.io/aria-practices/#dialog_roles_states_props, adds
     * aria-modal='true' meaning all content outside the <dialog> is inert.
     */
    setFocus_() {
        this.dialog_.shadowRoot.querySelector('#title')?.remove();
        const element = this.getHtmlDialogElement();
        element.setAttribute('aria-modal', 'true');
        element.removeAttribute('aria-labelledby');
        element.removeAttribute('aria-describedby');
        this.getMessageElement().focus();
    }
    /**
     * Returns 'dialog' element.
     */
    getDialogElement() {
        return this.shadowRoot.querySelector('#conflict-dialog');
    }
    /**
     * Returns 'dialog' <dialog> element.
     */
    getHtmlDialogElement() {
        return this.dialog_.getNative();
    }
    /**
     * Returns 'message' element.
     */
    getMessageElement() {
        return this.dialog_.querySelector('#message');
    }
    /**
     * Returns 'Apply to all' checkbox element.
     */
    getCheckboxElement() {
        return this.shadowRoot.querySelector('#checkbox');
    }
    /**
     * 'Apply to all' checkbox value changed.
     */
    checked_() {
        const checked = this.getCheckboxElement().checked;
        if (checked) {
            this.getKeepbothButton().innerText = str('CONFLICT_DIALOG_KEEP_ALL');
            this.getReplaceButton().innerText = str('CONFLICT_DIALOG_REPLACE_ALL');
        }
        else {
            this.getKeepbothButton().innerText = str('CONFLICT_DIALOG_KEEP_BOTH');
            this.getReplaceButton().innerText = str('CONFLICT_DIALOG_REPLACE');
        }
        this.getCheckboxElement().focus();
        this.toggleAttribute('checked', checked);
    }
    /**
     * Returns 'cancel' button element.
     */
    getCancelButton() {
        return this.shadowRoot.querySelector('#cancel');
    }
    /**
     * Dialog was cancelled.
     */
    cancel_() {
        this.action_ = '';
        this.dialog_.close();
    }
    /**
     * Returns 'keepboth' button element.
     */
    getKeepbothButton() {
        return this.shadowRoot.querySelector('#keepboth');
    }
    /**
     * Dialog 'keepboth' button was clicked.
     */
    keepboth_() {
        this.action_ = ConflictResolveType.KEEPBOTH;
        this.dialog_.close();
    }
    /*
     * Returns 'replace' button element.
     */
    getReplaceButton() {
        return this.shadowRoot.querySelector('#replace');
    }
    /**
     * Dialog 'replace' button was clicked.
     */
    replace_() {
        this.action_ = ConflictResolveType.REPLACE;
        this.dialog_.close();
    }
    /*
     * Triggered by the modal dialog close(): rejects the Promise if the dialog
     * was cancelled or resolves it with the dialog result.
     */
    closed_() {
        if (!this.action_) {
            this.reject_(new Error('dialog cancelled'));
            return;
        }
        const applyToAll = this.getCheckboxElement().checked;
        this.resolve_({
            resolve: this.action_, // Either 'keepboth' or 'replace'.
            checked: applyToAll, // True or False.
        });
    }
}
var ConflictResolveType;
(function (ConflictResolveType) {
    ConflictResolveType["KEEPBOTH"] = "keepboth";
    ConflictResolveType["REPLACE"] = "replace";
})(ConflictResolveType || (ConflictResolveType = {}));
customElements.define('xf-conflict-dialog', XfConflictDialog);

function getTemplate$6() {
    return getTrustedHTML `<!--_html_template_start_--><style>
  [slot='title'] {
    --cr-dialog-title-slot-padding-bottom: 16px;
    --cr-dialog-title-slot-padding-end: 0;
    --cr-dialog-title-slot-padding-start: 0;
    --cr-dialog-title-slot-padding-top: 0;
    --cr-primary-text-color: var(--cros-sys-on_surface);
    font: var(--cros-display-7-font);
  }

  [slot='body'] {
    --cr-dialog-body-padding-horizontal: 0;
    --cr-secondary-text-color: var(--cros-sys-on_surface_variant);
  }

  [slot='body'] > div {
    font: var(--cros-body-1-font);
    margin-bottom: 32px;
  }

  [slot='button-container'] {
    --cr-dialog-button-container-padding-bottom: 0;
    --cr-dialog-button-container-padding-horizontal: 0;
    padding-top: 32px;
  }

  [slot='body'] > #input {
    margin-bottom: 0;
    padding-bottom: 2px;
  }

  cr-dialog::part(dialog) {
    --cr-dialog-background-color: var(--cros-sys-dialog_container);
    border-radius: 20px;
    box-shadow: var(--cros-elevation-3-shadow);
    width: 384px;
  }

  cr-dialog::part(dialog)::backdrop {
    background-color: var(--cros-sys-scrim);
  }

  cr-dialog::part(wrapper) {
    padding: 32px;
    padding-bottom: 28px;
  }

  cr-input {
    --cr-form-field-label-color: var(--cros-sys-on_surface);
    --cr-input-background-color: var(--cros-sys-input_field_on_base);
    --cr-input-border-radius: 8px;
    --cr-input-color: var(--cros-sys-on_surface);
    --cr-input-error-color: var(--cros-sys-error);
    --cr-input-focus-color: var(--cros-sys-primary);
    --cr-input-min-height: 36px;
    --cr-input-padding-end: 16px;
    --cr-input-padding-start: 16px;
    --cr-input-placeholder-color: var(--cros-sys-secondary);
    font: var(--cros-body-2-font);
  }

  cr-button {
    --active-bg: transparent;
    --active-shadow: none;
    --active-shadow-action: none;
    --bg-action: var(--cros-sys-primary);
    --cr-button-height: 36px;
    --disabled-bg-action:
        var(--cros-sys-disabled_container);
    --disabled-bg: var(--cros-sys-disabled_container);;
    --disabled-text-color: var(--cros-sys-disabled);
    /* Use the default bg color as hover color because we
        rely on hoverBackground layer below.  */
    --hover-bg-action: var(--cros-sys-primary);
    --hover-bg-color: var(--cros-sys-primary_container);
    --ink-color: var(--cros-sys-ripple_primary);
    --ripple-opacity-action: 1;
    --ripple-opacity: 1;
    --text-color-action: var(--cros-sys-on_primary);
    --text-color: var(--cros-sys-on_primary_container);
    border: none;
    border-radius: 18px;
    box-shadow: none;
    font: var(--cros-button-2-font);
    position: relative;
  }

  cr-button.cancel-button {
    background-color: var(--cros-sys-primary_container);
  }

  cr-button.cancel-button:hover::part(hoverBackground) {
    background-color: var(--cros-sys-hover_on_subtle);
    display: block;
  }

  cr-button.action-button:hover::part(hoverBackground) {
    background-color: var(--cros-sys-hover_on_prominent);
    display: block;
  }

  :host-context(.focus-outline-visible) cr-button:focus {
    outline: 2px solid var(--cros-sys-focus_ring);
    outline-offset: 2px;
  }
</style>

<cr-dialog id="password-dialog">
  <div slot="title">
    $i18n{PASSWORD_DIALOG_TITLE}
  </div>
  <div slot="body">
    <div id="name" ></div>
    <cr-input id="input" type="password" auto-validate="true">
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" id="cancel">
    $i18n{CANCEL_LABEL}
    </cr-button>
    <cr-button class="action-button" id="unlock">
        $i18n{PASSWORD_DIALOG_CONFIRM_LABEL}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The custom element tag name.
 */
const TAG_NAME = 'xf-password-dialog';
/**
 * Exception thrown when user cancels the password dialog box.
 */
const USER_CANCELLED = new Error('Cancelled by user');
/**
 * Dialog to request user to enter password. Uses the askForPassword() which
 * resolves with either the password or rejected with USER_CANCELLED.
 */
class XfPasswordDialog extends HTMLElement {
    constructor() {
        super();
        /**
         * Mutex used to serialize modal dialogs and error notifications.
         */
        this.mutex_ = new AsyncQueue();
        /**
         * Controls whether the user is validating the password (Unlock button or
         * Enter key) or cancelling the dialog (Cancel button or Escape key).
         */
        this.success_ = false;
        /**
         * Return input password using the resolve method of a Promise.
         */
        this.resolve_ = null;
        /**
         * Return password prompt error using the reject method of a Promise.
         */
        this.reject_ = null;
        const template = document.createElement('template');
        template.innerHTML = getTemplate$6();
        const fragment = template.content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(fragment);
        this.dialog_ = this.shadowRoot.querySelector('#password-dialog');
        this.dialog_.consumeKeydownEvent = true;
        this.input_ = this.shadowRoot.querySelector('#input');
        this.input_.errorMessage =
            loadTimeData.getString('PASSWORD_DIALOG_INVALID');
    }
    /**
     * Called when this element is attached to the DOM.
     */
    connectedCallback() {
        const cancelButton = this.shadowRoot.querySelector('#cancel');
        cancelButton.onclick = () => this.cancel_();
        const unlockButton = this.shadowRoot.querySelector('#unlock');
        unlockButton.onclick = () => this.unlock_();
        this.dialog_.addEventListener('close', () => this.onClose_());
    }
    /**
     * Asks the user for a password to open the given file.
     * @param filename Name of the file to open.
     * @param password Previously entered password. If not null, it
     *     indicates that an invalid password was previously tried.
     * @return Password provided by the user. The returned
     *     promise is rejected with USER_CANCELLED if the user
     *     presses Cancel.
     */
    async askForPassword(filename, password = null) {
        const mutexUnlock = await this.mutex_.lock();
        try {
            return await new Promise((resolve, reject) => {
                this.success_ = false;
                this.resolve_ = resolve;
                this.reject_ = reject;
                if (password !== null) {
                    this.input_.value = password;
                    // An invalid password has previously been entered for this file.
                    // Display an 'invalid password' error message.
                    this.input_.invalid = true;
                }
                else {
                    this.input_.invalid = false;
                }
                this.showModal_(filename);
                this.input_.inputElement.select();
            });
        }
        finally {
            mutexUnlock();
        }
    }
    /**
     * Shows the password prompt represented by |filename|.
     * @param filename
     */
    showModal_(filename) {
        this.dialog_.querySelector('#name').innerText = filename;
        this.dialog_.showModal();
    }
    /**
     * Triggers a 'Cancelled by user' error.
     */
    cancel_() {
        this.dialog_.close();
    }
    /**
     * Sends user input password.
     */
    unlock_() {
        this.dialog_.close();
        this.success_ = true;
    }
    /**
     * Resolves the promise when the dialog is closed.
     * This can be triggered by the buttons, Esc key or anything that closes the
     * dialog.
     */
    onClose_() {
        if (this.success_) {
            this.resolve_(this.input_.value);
        }
        else {
            this.reject_(USER_CANCELLED);
        }
        this.input_.value = '';
    }
}
customElements.define(TAG_NAME, XfPasswordDialog);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Different flavors of the XfBulkPinningDialog.
var DialogState;
(function (DialogState) {
    // The dialog is not displayed.
    DialogState[DialogState["CLOSED"] = 0] = "CLOSED";
    // Currently offline. Cannot compute space requirement for the time being.
    DialogState[DialogState["OFFLINE"] = 1] = "OFFLINE";
    // Currently not running due to battery saver mode active.
    DialogState[DialogState["BATTERY_SAVER"] = 2] = "BATTERY_SAVER";
    // Listing files and computing space requirements.
    DialogState[DialogState["LISTING"] = 3] = "LISTING";
    // An error occurred while computing the space requirements.
    DialogState[DialogState["ERROR"] = 4] = "ERROR";
    // There isn't enough space to activate the bulk-pinning feature.
    DialogState[DialogState["NOT_ENOUGH_SPACE"] = 5] = "NOT_ENOUGH_SPACE";
    // Computed space requirements and ready to activate the bulk-pinning feature.
    DialogState[DialogState["READY"] = 6] = "READY";
})(DialogState || (DialogState = {}));
const BulkPinStage = chrome.fileManagerPrivate.BulkPinStage;
/**
 * Dialog that shows the benefits of enabling bulk pinning along with storage
 * information if the feature can't be enabled.
 */
let XfBulkPinningDialog = class XfBulkPinningDialog extends XfBase {
    constructor() {
        super(...arguments);
        this.store_ = getStore();
        this.stage_ = '';
        this.requiredBytes_ = 0;
        this.freeBytes_ = 0;
        this.listedFiles_ = 0;
        this.updateListedFilesDebounced_ = new RateLimiter(() => this.updateListedFiles_(), 5000);
    }
    updateListedFiles_() {
        if (this.listedFiles_ === 0) {
            this.$listingFilesText_.innerText = str('BULK_PINNING_LISTING');
        }
        else if (this.listedFiles_ === 1) {
            this.$listingFilesText_.innerText =
                str('BULK_PINNING_LISTING_WITH_SINGLE_ITEM');
        }
        else {
            this.$listingFilesText_.innerText = strf('BULK_PINNING_LISTING_WITH_MULTIPLE_ITEMS', this.listedFiles_.toLocaleString(getCurrentLocaleOrDefault()));
        }
    }
    // Called when the app has changed state.
    onStateChanged(state) {
        // If bulk-pinning gets enabled while this dialog is open, just cancel this
        // dialog.
        if (state.preferences?.driveFsBulkPinningEnabled) {
            this.onCancel();
            return;
        }
        // We're only interested in the bulk-pinning part of the app state.
        const bpp = state.bulkPinning;
        if (!bpp) {
            return;
        }
        if (this.freeBytes_ !== bpp.freeSpaceBytes ||
            this.requiredBytes_ !== bpp.requiredSpaceBytes) {
            this.freeBytes_ = bpp.freeSpaceBytes;
            this.requiredBytes_ = bpp.requiredSpaceBytes;
            this.$readyFooter_.innerText = strf('BULK_PINNING_SPACE', bytesToString(this.requiredBytes_), bytesToString(this.freeBytes_));
        }
        if (bpp.stage === BulkPinStage.LISTING_FILES && bpp.listedFiles > 0 &&
            bpp.listedFiles !== this.listedFiles_) {
            this.listedFiles_ = bpp.listedFiles;
            this.updateListedFilesDebounced_.run();
        }
        if (bpp.stage === this.stage_) {
            return;
        }
        this.stage_ = bpp.stage;
        switch (bpp.stage) {
            case BulkPinStage.PAUSED_OFFLINE:
                this.state = DialogState.OFFLINE;
                break;
            case BulkPinStage.PAUSED_BATTERY_SAVER:
                this.state = DialogState.BATTERY_SAVER;
                break;
            case BulkPinStage.GETTING_FREE_SPACE:
            case BulkPinStage.LISTING_FILES:
                this.state = DialogState.LISTING;
                break;
            case BulkPinStage.SUCCESS:
                this.state = DialogState.READY;
                break;
            case BulkPinStage.SYNCING:
                this.$dialog_.close();
                break;
            case BulkPinStage.NOT_ENOUGH_SPACE:
                this.state = DialogState.NOT_ENOUGH_SPACE;
                break;
            default:
                console.warn(`Cannot calculate bulk-pinning space requirements: ${this.stage_}`);
                this.state = DialogState.ERROR;
                break;
        }
    }
    // Shows the footer matching the given state.
    // Enables or disables the 'Continue' button according to the given state.
    set state(s) {
        this.$offlineFooter_.style.display =
            s === DialogState.OFFLINE ? 'initial' : 'none';
        this.$batterySaverFooter_.style.display =
            s === DialogState.BATTERY_SAVER ? 'initial' : 'none';
        this.$listingFooter_.style.display =
            s === DialogState.LISTING ? 'flex' : 'none';
        this.$errorFooter_.style.display =
            s === DialogState.ERROR ? 'initial' : 'none';
        this.$notEnoughSpaceFooter_.style.display =
            s === DialogState.NOT_ENOUGH_SPACE ? 'initial' : 'none';
        this.$readyFooter_.style.display =
            s === DialogState.READY ? 'initial' : 'none';
        this.$button_.disabled = s !== DialogState.READY;
    }
    // Indicates if this dialog is currently open.
    get is_open() {
        return this.$dialog_.open;
    }
    // Shows the dialog and starts calculating the required space for
    // bulk-pinning.
    async show() {
        this.stage_ = BulkPinStage.LISTING_FILES;
        this.state = DialogState.LISTING;
        this.$dialog_.showModal();
        this.store_.subscribe(this);
        try {
            await calculateBulkPinRequiredSpace();
        }
        catch (e) {
            console.error('Cannot calculate required space for bulk-pinning:', e);
            this.state = DialogState.ERROR;
        }
    }
    onClose(_) {
        this.state = DialogState.CLOSED;
        this.listedFiles_ = 0;
        this.updateListedFilesDebounced_.runImmediately();
        this.store_.unsubscribe(this);
    }
    // Called when the "Continue" button is clicked.
    onContinue() {
        this.$dialog_.close();
        chrome.fileManagerPrivate.setPreferences({ driveFsBulkPinningEnabled: true });
    }
    // Called when the "Cancel" button is clicked.
    onCancel() {
        this.$dialog_.cancel();
    }
    // Called when the "Learn more" link is clicked.
    onLearnMore(e) {
        e.preventDefault();
        visitURL('https://support.google.com/chromebook?p=my_drive_cbx');
    }
    // Called when the "View storage" link is clicked.
    onViewStorage(e) {
        e.preventDefault();
        chrome.fileManagerPrivate.openSettingsSubpage('storage');
    }
    render() {
        return html `
      <cr-dialog @close="${this.onClose}">
        <div slot="title">
          <xf-icon type="drive_bulk_pinning" size="medium"></xf-icon>
          <div class="title" style="flex: 1 0 0">
            ${str('BULK_PINNING_TITLE')}
          </div>
        </div>
        <div slot="body">
          <div class="description">
            ${str('BULK_PINNING_EXPLANATION')}
            <a id="learn-more-link" href="_blank" @click="${this.onLearnMore}">
              ${str('LEARN_MORE_LABEL')}
            </a>
          </div>
          <ul>
            <li>
              <xf-icon type="my_files"></xf-icon>
              ${str('BULK_PINNING_POINT_1')}
            </li>
          </ul>
          <div id="offline-footer" class="offline-footer">
            ${str('BULK_PINNING_OFFLINE')}
          </div>
          <div id="battery-saver-footer" class="battery-saver-footer">
            ${str('BULK_PINNING_BATTERY_SAVER')}
          </div>
          <div id="listing-footer" class="normal-footer">
            <files-spinner></files-spinner>
            <span id="listing-files-text">
              ${str('BULK_PINNING_LISTING')}
            </span>
          </div>
          <div id="error-footer" class="error-footer">
            ${str('BULK_PINNING_ERROR')}
          </div>
          <div id="not-enough-space-footer" class="error-footer">
            ${str('BULK_PINNING_NOT_ENOUGH_SPACE')}
            <a id="view-storage-link" href="_blank"
              @click="${this.onViewStorage}">
              ${str('BULK_PINNING_VIEW_STORAGE')}
            </a>
          </div>
          <div id="ready-footer" class="normal-footer"></div>
        </div>
        <div slot="button-container">
          <cr-button id="cancel-button" class="cancel-button"
            @click="${this.onCancel}">
            ${str('CANCEL_LABEL')}
          </cr-button>
          <cr-button id="continue-button" class="continue-button action-button"
            @click="${this.onContinue}">
            ${str('BULK_PINNING_TURN_ON')}
          </cr-button>
        </div>
      </cr-dialog>
    `;
    }
    static get styles() {
        return css `
      cr-dialog {
        --cr-dialog-background-color: var(--cros-sys-dialog_container);
        --cr-dialog-body-padding-horizontal: 0;
        --cr-dialog-button-container-padding-bottom: 0;
        --cr-dialog-button-container-padding-horizontal: 0;
        --cr-dialog-title-slot-padding-bottom: 16px;
        --cr-dialog-title-slot-padding-end: 0;
        --cr-dialog-title-slot-padding-start: 0;
        --cr-dialog-title-slot-padding-top: 0;
        --cr-primary-text-color: var(--cros-sys-on_surface);
        --cr-secondary-text-color: var(--cros-sys-on_surface_variant);
      }

      cr-dialog::part(dialog) {
        border-radius: 20px;
      }

      cr-dialog::part(dialog)::backdrop {
        background-color: var(--cros-sys-scrim);
      }

      cr-dialog::part(wrapper) {
        padding: 32px;
        padding-bottom: 28px;
      }

      cr-dialog [slot="body"] {
        display: flex;
        flex-direction: column;
        font: var(--cros-body-1-font);
      }

      cr-dialog [slot="button-container"] {
        padding-top: 32px;
      }

      cr-dialog [slot="title"] {
        align-items: center;
        display: flex;
        font: var(--cros-display-7-font);
      }

      cr-dialog [slot="title"] xf-icon {
        --xf-icon-color: var(--cros-sys-primary);
        margin-inline-end: 16px;
      }

      .description {
        margin-bottom: 24px;
      }

      ul {
        border-radius: 12px 12px 0 0;
        border: 1px solid var(--cros-separator-color);
        border-bottom-style: none;
        margin: 0;
        padding: 20px 18px;
      }

      .normal-footer {
        align-items: center;
        background-color: var(--cros-sys-app_base_shaded);
        border: 1px solid var(--cros-separator-color);
        border-radius: 0 0 12px 12px;
        border-top-style: none;
        color: var(--cros-sys-on_surface);
        padding: 16px;
      }

      .error-footer {
        background-color: var(--cros-sys-error_container);
        border: 1px solid var(--cros-separator-color);
        border-radius: 0 0 12px 12px;
        border-top-style: none;
        color: var(--cros-sys-on_error_container);
        padding: 16px;
      }

      .offline-footer, .battery-saver-footer {
        background-color: var(--cros-sys-surface_variant);
        border: 1px solid var(--cros-separator-color);
        border-radius: 0 0 12px 12px;
        border-top-style: none;
        color: var(--cros-sys-on_surface_variant);
        padding: 16px;
      }

      a {
        color: var(--cros-sys-primary);
      }

      .error-footer > a {
        color: inherit;
      }

      files-spinner {
        transform: scale(0.666);
        margin: 0;
        margin-inline-end: 10px;
      }

      li {
        color: var(--cros-sys-on_surface);
        display: flex;
      }

      li + li {
        margin-top: 16px;
      }

      li > xf-icon {
        --xf-icon-color: var(--cros-sys-secondary);
        margin-inline-end: 10px;
      }

      cr-button {
        --active-bg: transparent;
        --active-shadow: none;
        --active-shadow-action: none;
        --bg-action: var(--cros-sys-primary);
        --cr-button-height: 36px;
        --disabled-bg-action: var(--cros-sys-disabled_container);
        --disabled-bg: var(--cros-sys-disabled_container);
        --disabled-text-color: var(--cros-sys-disabled);
        --hover-bg-action: var(--cros-sys-primary);
        --hover-bg-color: var(--cros-sys-primary_container);
        --ink-color: var(--cros-sys-ripple_primary);
        --ripple-opacity-action: 1;
        --ripple-opacity: 1;
        --text-color-action: var(--cros-sys-on_primary);
        --text-color: var(--cros-sys-on_primary_container);
        border: none;
        border-radius: 18px;
        box-shadow: none;
        font: var(--cros-button-2-font);
        position: relative;
      }

      cr-button.cancel-button {
        background-color: var(--cros-sys-primary_container);
      }

      cr-button.cancel-button:hover::part(hoverBackground) {
        background-color: var(--cros-sys-hover_on_subtle);
        display: block;
      }

      cr-button.action-button:hover::part(hoverBackground) {
        background-color: var(--cros-sys-hover_on_prominent);
        display: block;
      }

      :host-context(.focus-outline-visible) cr-button:focus {
        outline: 2px solid var(--cros-sys-focus_ring);
        outline-offset: 2px;
      }
    `;
    }
};
__decorate([
    query('cr-dialog')
], XfBulkPinningDialog.prototype, "$dialog_", void 0);
__decorate([
    query('#continue-button')
], XfBulkPinningDialog.prototype, "$button_", void 0);
__decorate([
    query('#offline-footer')
], XfBulkPinningDialog.prototype, "$offlineFooter_", void 0);
__decorate([
    query('#battery-saver-footer')
], XfBulkPinningDialog.prototype, "$batterySaverFooter_", void 0);
__decorate([
    query('#listing-footer')
], XfBulkPinningDialog.prototype, "$listingFooter_", void 0);
__decorate([
    query('#error-footer')
], XfBulkPinningDialog.prototype, "$errorFooter_", void 0);
__decorate([
    query('#not-enough-space-footer')
], XfBulkPinningDialog.prototype, "$notEnoughSpaceFooter_", void 0);
__decorate([
    query('#ready-footer')
], XfBulkPinningDialog.prototype, "$readyFooter_", void 0);
__decorate([
    query('#listing-files-text')
], XfBulkPinningDialog.prototype, "$listingFilesText_", void 0);
XfBulkPinningDialog = __decorate([
    customElement('xf-bulk-pinning-dialog')
], XfBulkPinningDialog);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A component for elevation.
 */
class Elevation extends LitElement {
    connectedCallback() {
        super.connectedCallback();
        // Needed for VoiceOver, which will create a "group" if the element is a
        // sibling to other content.
        this.setAttribute('aria-hidden', 'true');
    }
    render() {
        return html `<span class="shadow"></span>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$4 = css `:host{--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000));display:flex;pointer-events:none}:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}/*# sourceMappingURL=elevation-styles.css.map */
`;

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * The `<md-elevation>` custom element with default styles.
 *
 * Elevation is the relative distance between two surfaces along the z-axis.
 */
let MdElevation = class MdElevation extends Elevation {
};
MdElevation.styles = [styles$4];
MdElevation = __decorate$1([
    customElement('md-elevation')
], MdElevation);

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Sets up an element's constructor to enable form submission. The element
 * instance should be form associated and have a `type` property.
 *
 * A click listener is added to each element instance. If the click is not
 * default prevented, it will submit the element's form, if any.
 *
 * @example
 * ```ts
 * class MyElement extends mixinElementInternals(LitElement) {
 *   static {
 *     setupFormSubmitter(MyElement);
 *   }
 *
 *   static formAssociated = true;
 *
 *   type: FormSubmitterType = 'submit';
 * }
 * ```
 *
 * @param ctor The form submitter element's constructor.
 */
function setupFormSubmitter(ctor) {
    if (isServer) {
        return;
    }
    ctor.addInitializer((instance) => {
        const submitter = instance;
        submitter.addEventListener('click', async (event) => {
            const { type, [internals]: elementInternals } = submitter;
            const { form } = elementInternals;
            if (!form || type === 'button') {
                return;
            }
            // Wait a full task for event bubbling to complete.
            await new Promise((resolve) => {
                setTimeout(resolve);
            });
            if (event.defaultPrevented) {
                return;
            }
            if (type === 'reset') {
                form.reset();
                return;
            }
            // form.requestSubmit(submitter) does not work with form associated custom
            // elements. This patches the dispatched submit event to add the correct
            // `submitter`.
            // See https://github.com/WICG/webcomponents/issues/814
            form.addEventListener('submit', (submitEvent) => {
                Object.defineProperty(submitEvent, 'submitter', {
                    configurable: true,
                    enumerable: true,
                    get: () => submitter,
                });
            }, { capture: true, once: true });
            elementInternals.setFormValue(submitter.value);
            form.requestSubmit();
        });
    });
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const buttonBaseClass = mixinElementInternals(LitElement);
/**
 * A button component.
 */
let Button$1 = class Button extends buttonBaseClass {
    get name() {
        return this.getAttribute('name') ?? '';
    }
    set name(name) {
        this.setAttribute('name', name);
    }
    /**
     * The associated form element with which this element's value will submit.
     */
    get form() {
        return this[internals].form;
    }
    constructor() {
        super();
        /**
         * Whether or not the button is disabled.
         */
        this.disabled = false;
        /**
         * The URL that the link button points to.
         */
        this.href = '';
        /**
         * Where to display the linked `href` URL for a link button. Common options
         * include `_blank` to open in a new tab.
         */
        this.target = '';
        /**
         * Whether to render the icon at the inline end of the label rather than the
         * inline start.
         *
         * _Note:_ Link buttons cannot have trailing icons.
         */
        this.trailingIcon = false;
        /**
         * Whether to display the icon or not.
         */
        this.hasIcon = false;
        this.type = 'submit';
        this.value = '';
        this.handleActivationClick = (event) => {
            if (!isActivationClick(event) || !this.buttonElement) {
                return;
            }
            this.focus();
            dispatchActivationClick(this.buttonElement);
        };
        if (!isServer) {
            this.addEventListener('click', this.handleActivationClick);
        }
    }
    focus() {
        this.buttonElement?.focus();
    }
    blur() {
        this.buttonElement?.blur();
    }
    render() {
        // Link buttons may not be disabled
        const isDisabled = this.disabled && !this.href;
        const buttonOrLink = this.href ? this.renderLink() : this.renderButton();
        // TODO(b/310046938): due to a limitation in focus ring/ripple, we can't use
        // the same ID for different elements, so we change the ID instead.
        const buttonId = this.href ? 'link' : 'button';
        return html `
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${buttonId}></md-focus-ring>
      <md-ripple for=${buttonId} ?disabled="${isDisabled}"></md-ripple>
      ${buttonOrLink}
    `;
    }
    renderButton() {
        // Needed for closure conformance
        const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
        return html `<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-label="${ariaLabel || nothing}"
      aria-haspopup="${ariaHasPopup || nothing}"
      aria-expanded="${ariaExpanded || nothing}">
      ${this.renderContent()}
    </button>`;
    }
    renderLink() {
        // Needed for closure conformance
        const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
        return html `<a
      id="link"
      class="button"
      aria-label="${ariaLabel || nothing}"
      aria-haspopup="${ariaHasPopup || nothing}"
      aria-expanded="${ariaExpanded || nothing}"
      href=${this.href}
      target=${this.target || nothing}
      >${this.renderContent()}
    </a>`;
    }
    renderContent() {
        const icon = html `<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;
        return html `
      <span class="touch"></span>
      ${this.trailingIcon ? nothing : icon}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon ? icon : nothing}
    `;
    }
    handleSlotChange() {
        this.hasIcon = this.assignedIcons.length > 0;
    }
};
(() => {
    requestUpdateOnAriaChange(Button$1);
    setupFormSubmitter(Button$1);
})();
/** @nocollapse */
Button$1.formAssociated = true;
/** @nocollapse */
Button$1.shadowRootOptions = {
    mode: 'open',
    delegatesFocus: true,
};
__decorate$1([
    property({ type: Boolean, reflect: true })
], Button$1.prototype, "disabled", void 0);
__decorate$1([
    property()
], Button$1.prototype, "href", void 0);
__decorate$1([
    property()
], Button$1.prototype, "target", void 0);
__decorate$1([
    property({ type: Boolean, attribute: 'trailing-icon', reflect: true })
], Button$1.prototype, "trailingIcon", void 0);
__decorate$1([
    property({ type: Boolean, attribute: 'has-icon', reflect: true })
], Button$1.prototype, "hasIcon", void 0);
__decorate$1([
    property()
], Button$1.prototype, "type", void 0);
__decorate$1([
    property()
], Button$1.prototype, "value", void 0);
__decorate$1([
    query('.button')
], Button$1.prototype, "buttonElement", void 0);
__decorate$1([
    queryAssignedElements({ slot: 'icon', flatten: true })
], Button$1.prototype, "assignedIcons", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A filled button component.
 */
class FilledButton extends Button$1 {
    renderElevationOrOutline() {
        return html `<md-elevation></md-elevation>`;
    }
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$3 = css `:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-shape: var(--md-filled-button-container-shape, 9999px);--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px);--_container-shape-start-start: var( --md-filled-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-filled-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-filled-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-filled-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=filled-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$2 = css `md-elevation{transition-duration:280ms}:host([disabled]) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host([disabled]) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}/*# sourceMappingURL=shared-elevation-styles.css.map */
`;

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles$1 = css `:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host([disabled]){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background-color:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host([disabled]) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host([disabled]) .background{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host([disabled]){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([disabled]) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}/*# sourceMappingURL=shared-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ High emphasis – For the primary, most important, or most common
 * action on a screen
 *
 * __Rationale:__ The filled button’s contrasting surface color makes it the
 * most prominent button after the FAB. It’s used for final or unblocking
 * actions in a flow.
 *
 * __Example usages:__
 * - Save
 * - Confirm
 * - Done
 *
 * @final
 * @suppress {visibility}
 */
let MdFilledButton = class MdFilledButton extends FilledButton {
};
MdFilledButton.styles = [styles$1, styles$2, styles$3];
MdFilledButton = __decorate$1([
    customElement('md-filled-button')
], MdFilledButton);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A text button component.
 */
class TextButton extends Button$1 {
}

/**
  * @license
  * Copyright 2022 Google LLC
  * SPDX-License-Identifier: Apache-2.0
  */
const styles = css `:host{--_container-height: var(--md-text-button-container-height, 40px);--_container-shape: var(--md-text-button-container-shape, 9999px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0;--_container-shape-start-start: var( --md-text-button-container-shape-start-start, var(--_container-shape) );--_container-shape-start-end: var( --md-text-button-container-shape-start-end, var(--_container-shape) );--_container-shape-end-end: var( --md-text-button-container-shape-end-end, var(--_container-shape) );--_container-shape-end-start: var( --md-text-button-container-shape-end-start, var(--_container-shape) )}/*# sourceMappingURL=text-styles.css.map */
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @summary Buttons help people take action, such as sending an email, sharing a
 * document, or liking a comment.
 *
 * @description
 * __Emphasis:__ Low emphasis – For optional or supplementary actions with the
 * least amount of prominence
 *
 * __Rationale:__ Text buttons have less visual prominence, so should be used
 * for low emphasis actions, such as an alternative option.
 *
 * __Example usages:__
 * - Learn more
 * - View all
 * - Change account
 * - Turn on
 *
 * @final
 * @suppress {visibility}
 */
let MdTextButton = class MdTextButton extends TextButton {
};
MdTextButton.styles = [styles$1, styles];
MdTextButton = __decorate$1([
    customElement('md-text-button')
], MdTextButton);

/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// The padding on the label start/end when there is no icons.
const LABEL_PADDING_START_END = css `16px`;
// The padding on the icon start/end when present.
const ICON_PADDING_START_END = css `12px`;
// The inline gap between the label and the optional icons.
const ICON_GAP = css `8px`;
const CONTAINER_HEIGHT = css `36px`;
const ICON_SIZE = css `20px`;
const MIN_WIDTH = css `64px`;
/**
 * A chromeOS compliant button.
 */
class Button extends LitElement {
    /** @nocollapse */
    static { this.shadowRootOptions = { mode: 'open', delegatesFocus: true }; }
    // Note that theme colours have opacity defined in the colour, but default
    // colours have opacities set separately. As a consequence, styles are broken
    // unless a cros theme is present.
    /** @nocollapse */
    static { this.styles = css `
    :host {
      display: inline-block;
      text-overflow: ellipsis;
      text-wrap: nowrap;
      width: fit-content;
    }

    .button {
      max-width: var(--cros-button-max-width,200px);
      min-width: ${MIN_WIDTH};
      text-overflow: inherit;
      text-wrap: inherit;
      width: 100%;
      height: 100%;
    }

    .label {
      overflow: hidden;
      text-overflow: inherit;
    }

    :host([overflow="stack"]) {
      text-wrap: wrap;
    }

    ::slotted(*) {
      display: inline-flex;
      block-size: ${ICON_SIZE};
      inline-size: ${ICON_SIZE};
    }

    .content-container {
      align-items: center;
      display: flex;
      gap: ${ICON_GAP};
    }

    md-filled-button:has(.content-container.has-leading-icon)  {
      --md-filled-button-leading-space: ${ICON_PADDING_START_END};
    }

    md-filled-button:has(.content-container.has-trailing-icon)  {
      --md-filled-button-trailing-space: ${ICON_PADDING_START_END};
    }

    md-text-button:has(.content-container.has-leading-icon)  {
      --md-text-button-leading-space: ${ICON_PADDING_START_END};
    }

    md-text-button:has(.content-container.has-trailing-icon)  {
      --md-text-button-trailing-space: ${ICON_PADDING_START_END};
    }

    md-filled-button {
      --md-filled-button-container-height: ${CONTAINER_HEIGHT};
      --md-filled-button-disabled-container-color: var(--cros-sys-disabled_container);
      --md-filled-button-disabled-container-opacity: 100%;
      --md-filled-button-disabled-label-text-color: var(--cros-sys-disabled);
      --md-filled-button-disabled-label-text-opacity: 100%;
      --md-filled-button-focus-state-layer-opacity: 100%;
      --md-filled-button-hover-container-elevation: 0;
      --md-filled-button-hover-state-layer-opacity: 100%;
      --md-filled-button-label-text-font: var(--cros-button-2-font-family);
      --md-filled-button-label-text-size: var(--cros-button-2-font-size);
      --md-filled-button-label-text-line-height: var(--cros-button-2-line-height);
      --md-filled-button-label-text-weight: var(--cros-button-2-font-weight);
      --md-filled-button-leading-space: ${LABEL_PADDING_START_END};
      --md-filled-button-pressed-state-layer-opacity: 100%;
      --md-filled-button-trailing-space: ${LABEL_PADDING_START_END};
      --md-focus-ring-duration: 0s;
      --md-focus-ring-width: 2px;
      --md-sys-color-secondary: var(--cros-sys-focus_ring);
    }

    :host(:not([button-style="secondary"]):is([inverted][disabled])) {
      opacity: var(--cros-disabled-opacity);
    }

    :host([inverted][button-style="primary"]) md-filled-button {
      /** Base styles */
      --md-sys-color-primary: var(--cros-sys-inverse_primary);
      --md-sys-color-secondary: var(--cros-sys-inverse_focus_ring);
      --md-sys-color-on-primary: var(--cros-sys-inverse_on_primary);
      --md-filled-button-label-text-color: var(--cros-sys-inverse_on_primary);
      /** Disabled */
      --md-filled-button-disabled-container-color: var(--cros-sys-inverse_primary);
      --md-filled-button-disabled-label-text-color: var(--cros-sys-inverse_on_primary);
      /** Hover */
      --md-filled-button-hover-state-layer-color: var(--cros-sys-inverse_hover_on_prominent);
      /** Pressed */
      --md-filled-button-pressed-state-layer-color: var(--cros-sys-inverse_ripple_primary);
    }

    :host([button-style="primary"]) md-filled-button {
      --md-sys-color-primary: var(--cros-sys-primary);
      --md-sys-color-on-primary: var(--cros-sys-on_primary);
      --md-filled-button-hover-state-layer-color: var(--cros-sys-hover_on_prominent);
      --md-filled-button-pressed-state-layer-color: var(--cros-sys-ripple_primary);
    }

    :host([button-style="secondary"]) md-filled-button {
      --md-filled-button-hover-state-layer-color: var(--cros-sys-hover_on_subtle);
      --md-filled-button-pressed-state-layer-color: var(--cros-sys-ripple_primary);
      --md-sys-color-primary: var(--cros-sys-primary_container);
      --md-sys-color-on-primary: var(--cros-sys-on_primary_container);
    }

    md-text-button {
      --md-sys-color-primary: var(--cros-sys-primary);
      --md-sys-color-secondary: var(--cros-sys-focus_ring);
      --md-focus-ring-duration: 0s;
      --md-focus-ring-width: 2px;
      --md-text-button-container-height: ${CONTAINER_HEIGHT};
      --md-text-button-disabled-label-text-color: var(--cros-sys-disabled);
      --md-text-button-disabled-label-text-opacity: 100%;
      --md-text-button-focus-state-layer-opacity: 100%;
      --md-text-button-hover-state-layer-color: var(--cros-sys-hover_on_subtle);
      --md-text-button-hover-state-layer-opacity: 100%;
      --md-text-button-label-text-color: var(--cros-sys-primary);
      --md-text-button-label-text-font: var(--cros-button-2-font-family);
      --md-text-button-label-text-size: var(--cros-button-2-font-size);
      --md-text-button-label-text-line-height: var(--cros-button-2-line-height);
      --md-text-button-label-text-weight: var(--cros-button-2-font-weight);
      --md-text-button-leading-space: ${LABEL_PADDING_START_END};
      --md-text-button-pressed-state-layer-color: var(--cros-sys-ripple_neutral_on_subtle);
      --md-text-button-pressed-state-layer-opacity: 100%;
      --md-text-button-trailing-space: ${LABEL_PADDING_START_END};
    }

    :host([inverted]) md-text-button {
      /** Base styles */
      --md-sys-color-primary: var(--cros-sys-inverse_primary);
      --md-sys-color-secondary: var(--cros-sys-inverse_focus_ring);
      --md-text-button-label-text-color: var(--cros-sys-inverse_primary);
      /** Disabled */
      --md-text-button-disabled-label-text-color: var(--cros-sys-inverse_primary);
      --md-text-button-pressed-state-layer-color: var(--cros-sys-inverse_ripple_neutral_on_subtle);
      --md-text-button-hover-state-layer-color: var(--cros-sys-inverse_hover_on_subtle);
    }

    ::slotted(ea-icon) {
      --ea-icon-size: 20px;
    }
  `; }
    /** @nocollapse */
    static { this.properties = {
        ariaLabel: { type: String, reflect: true, attribute: 'aria-label' },
        label: { type: String, reflect: true },
        disabled: { type: Boolean, reflect: true },
        buttonStyle: { type: String, reflect: true, attribute: 'button-style' },
        inverted: { type: Boolean, reflect: true },
        ariaHasPopup: { type: String, reflect: true, attribute: 'aria-haspopup' },
        overflow: { type: String, reflect: true },
    }; }
    constructor() {
        super();
        /**
         * How the button should be styled. One of {primary, secondary, floating}.
         * @export
         */
        this.buttonStyle = 'primary';
        /**
         * If the button should be in the inverted color scheme, eg for use in
         * cros-snackbar. Inverted color schemes are only supported for `primary` and
         * floating button styles.
         * @export
         */
        this.inverted = false;
        /**
         * If button should truncate with ellipsis or stack contents if label
         * overflows button container.
         * @export
         */
        this.overflow = 'truncate';
        this.ariaLabel = '';
        this.ariaHasPopup = 'false';
        this.label = '';
        this.disabled = false;
    }
    connectedCallback() {
        super.connectedCallback();
        // All aria properties on button just get proxied down to the real <button>
        // element, as such we set role to presentation so screenreaders ignore
        // this component and instead only read aria attributes off the inner
        // interactive element.
        this.setAttribute('role', 'presentation');
    }
    firstUpdated() {
        this.addEventListener('click', this.clickListener);
    }
    clickListener(e) {
        if (this.disabled) {
            e.stopImmediatePropagation();
            e.preventDefault();
            return;
        }
    }
    render() {
        const ariaHasPopup = (this.ariaHasPopup ?? 'false');
        if (this.buttonStyle === 'floating') {
            return html `
        <md-text-button
            class="button"
            aria-label=${this.ariaLabel || ''}
            aria-haspopup=${ariaHasPopup}
            ?disabled=${this.disabled}>
          ${this.renderButtonContent()}
        </md-text-button>
        `;
        }
        return html `
        <md-filled-button
            class="button"
            aria-label=${this.ariaLabel || ''}
            aria-haspopup=${ariaHasPopup}
            ?disabled=${this.disabled}>
          ${this.renderButtonContent()}
        </md-filled-button>
        `;
    }
    renderButtonContent() {
        return html `
      <div class="content-container">
        <slot name="leading-icon" @slotchange=${this.onSlotChange}></slot>
        <span class="label">${this.label}</span>
        <slot name="trailing-icon" @slotchange=${this.onSlotChange}></slot>
      </div>
    `;
    }
    hasSlottedIcon(icon) {
        return !!this.querySelector(`*[slot='${icon}-icon']`);
    }
    // The padding before/after the label changes based on whether there is an
    // icon present. We use the slot change event to toggle the different padding
    // styles on the container, as it's easier to achieve here compared with pure
    // CSS selectors. The actual padding is applied to the material button which
    // is difficult to define a pure CSS relationship with due to the nature of
    // how the slots are arranged.
    onSlotChange() {
        const container = this.shadowRoot.querySelector('.content-container');
        container.classList.toggle('has-leading-icon', this.hasSlottedIcon('leading'));
        container.classList.toggle('has-trailing-icon', this.hasSlottedIcon('trailing'));
    }
}
customElements.define('cros-button', Button);

function getTemplate$5() {
    return getTrustedHTML `<!--_html_template_start_-->
<style>
  cr-icon-button,
  cr-button {
    margin-inline: 0;
  }

  cr-button {
    --active-bg: none;
    --hover-bg-color: var(--cros-sys-hover_on_subtle);
    --ink-color: var(--cros-sys-ripple_neutral_on_subtle);
    --paper-ripple-opacity: 100%;
    --text-color: var(--cros-sys-primary);
    border: none;
    border-radius: 18px;
    box-shadow: none;
    font: var(--cros-button-2-font);
    height: 36px;
    padding-inline: 16px;
  }

  :host-context(.focus-outline-visible) cr-button:focus {
    outline: 2px solid var(--cros-sys-focus_ring);
    outline-offset: 2px;
  }

  cr-icon-button {
    --cr-active-bg-color: var(--cros-sys-pressed_on_subtle);
    --cr-focus-outline-color: var(--cros-sys-focus_ring);
    --cr-hover-background-color: var(--cros-sys-hover_on_subtle);
    --cr-icon-button-fill-color: var(--cros-sys-on_surface);
    border-radius: 12px;
  }

  @keyframes setcollapse {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(180deg);
    }
  }

  @keyframes setexpand {
    from {
      transform: rotate(-180deg);
    }
    to {
      transform: rotate(0deg);
    }
  }

  :host([data-category='expand']) {
      animation: setexpand 200ms forwards;
  }

  :host([data-category='collapse']) {
      animation: setcollapse 200ms forwards;
  }

  :host {
    flex-shrink: 0;
    position: relative;
  }

  :host(:not([data-category='dismiss']):not([data-category='extra-button']):not([data-category='cancel'])) {
    width: 36px;
  }

  #dismiss,
  #extra-button,
  #cancel,
  #dismiss-jelly,
  #extra-button-jelly,
  #cancel-jelly,
  #icon {
    display: none;
  }

  :host([data-category='dismiss']) #dismiss,
  :host([data-category='dismiss']) #dismiss-jelly,
  :host([data-category='extra-button']) #extra-button,
  :host([data-category='extra-button']) #extra-button-jelly,
  :host([data-category='cancel']) #cancel,
  :host([data-category='cancel']) #cancel-jelly,
  :host([data-category='collapse']) #icon,
  :host([data-category='expand']) #icon {
    display: inline-block;
  }
</style>
<xf-jellybean>
  <cr-button slot="old" id='dismiss'>$i18n{DRIVE_WELCOME_DISMISS}</cr-button>
  <cr-button slot="old" id='extra-button'></cr-button>
  <cr-button slot="old" id='cancel'>$i18n{CANCEL_LABEL}</cr-button>

  <cros-button slot="jelly" id='dismiss-jelly' button-style="floating" label="$i18n{DRIVE_WELCOME_DISMISS}"></cros-button>
  <cros-button slot="jelly" id='extra-button-jelly' button-style="floating"></cros-button>
  <cros-button slot="jelly" id='cancel-jelly' button-style="floating" label="$i18n{CANCEL_LABEL}"></cros-button>
</xf-jellybean>
<cr-icon-button id='icon'></cr-icon-button>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * A button used inside PanelItem with varying display characteristics.
 */
class PanelButton extends HTMLElement {
    constructor() {
        super();
        this.createElement_();
    }
    /**
     * Creates a PanelButton.
     */
    createElement_() {
        const template = document.createElement('template');
        template.innerHTML = getTemplate$5();
        const fragment = template.content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(fragment);
    }
    static get is() {
        return 'xf-button';
    }
    /**
     * Registers this instance to listen to these attribute changes.
     */
    static get observedAttributes() {
        return [
            'data-category',
        ];
    }
    /**
     * Callback triggered by the browser when our attribute values change.
     * @param name Attribute that's changed.
     * @param oldValue Old value of the attribute.
     * @param newValue New value of the attribute.
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        const iconButton = this.shadowRoot?.querySelector('cr-icon-button') ?? null;
        if (name === 'data-category') {
            switch (newValue) {
                case 'collapse':
                case 'expand':
                    iconButton?.setAttribute('iron-icon', 'cr:expand-less');
                    break;
            }
        }
    }
    /**
     * When using the extra button, the text can be programmatically set
     * @param text The text to use on the extra button.
     */
    setExtraButtonText(text) {
        if (!this.shadowRoot) {
            return;
        }
        if (isCrosComponentsEnabled()) {
            const extraButton = queryRequiredElement('#extra-button-jelly', this.shadowRoot);
            extraButton.label = text;
        }
        else {
            const extraButton = queryRequiredElement('#extra-button', this.shadowRoot);
            extraButton.innerText = text;
        }
    }
}
window.customElements.define(PanelButton.is, PanelButton);

function getTemplate$4() {
    return getTrustedHTML `<!--_html_template_start_--><style>
  :host {
    max-width: 504px;
    outline: none;
  }
  #container {
    align-items: stretch;
    background-color: var(--cros-sys-base_elevated);
    border-radius: 8px;
    box-shadow: var(--cros-elevation-2-shadow);
    display: flex;
    flex-direction: column;
    max-width: min-content;
    z-index: 100;
  }
  #separator {
    background-color: var(--cros-sys-separator);
    height: 1px;
  }
  /* Limit to 3 visible progress panels before scroll. */
  #panels {
    max-height: calc(192px + 28px);
    overflow-y: auto;
  }
  xf-panel-item:not(:only-child) {
    --progress-height: 64px;
  }
  xf-panel-item:not(:only-child):first-child {
    --progress-padding-top: 14px;
  }
  xf-panel-item:not(:only-child):last-child {
    --progress-padding-bottom: 14px;
  }
  xf-panel-item:only-child {
    --progress-height: 68px;
  }
  @keyframes setcollapse {
    0% {
      max-height: 0;
      max-width: 0;
      opacity: 0;
    }
    75% {
      max-height: calc(192px + 28px);
      opacity: 0;
      width: 504px;
    }
    100% {
      max-height: calc(192px + 28px);
      opacity: 1;
      width: 504px;
    }
  }

  @keyframes setexpand {
    0% {
      max-height: calc(192px + 28px);
      max-width: 504px;
      opacity: 1;
    }
    25% {
      max-height: calc(192px + 28px);
      max-width: 504px;
      opacity: 0;
    }
    100% {
      max-height: 0;
      max-width: 0;
      opacity: 0;
    }
  }
  .expanded {
    animation: setcollapse 200ms forwards;
    width: 504px;
  }
  .collapsed {
    animation: setexpand 200ms forwards;
  }
  .expanding {
    overflow: hidden;
  }
  .expandfinished {
    max-height: calc(192px + 28px);
    opacity: 1;
    overflow-y: auto;
    width: 504px;
  }
  xf-panel-item:not(:only-child) {
    --multi-progress-height: 92px;
  }
</style>
<div id="container">
  <div id="summary"></div>
  <div id="separator" hidden></div>
  <div id="panels"></div>
</div>
<!--_html_template_end_-->`;
}

function getTemplate$3() {
    return getTrustedHTML `<!--_html_template_start_--><style>
  .progress {
    height: 36px;
    width: 36px;
  }

  :host-context([detailed-panel][data-category='expanded'])
  .progress {
    height: 32px;
    width: 32px;
   }

  :host-context([detailed-panel][data-category='collapsed'])
  .progress {
    height: 28px;
    width: 28px;
  }

  .bottom {
    fill: none;
    stroke: var(--cros-sys-highlight_shape);
  }
  .top {
    fill: none;
    stroke: var(--cros-sys-primary);
    stroke-linecap: round;
  }
  text {
    fill: var(--cros-sys-primary);
    font: var(--cros-button-1-font);
  }
  .errormark {
    fill: var(--cros-sys-error);
  }
</style>
<div class='progress'>
  <svg xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 36 36'>
    <g id='circles' stroke-width='3'>
      <circle class='bottom' cx='18' cy='18' r='10'></circle>
      <circle class='top' transform='rotate(-90 18 18)'
      cx='18' cy='18' r='10' stroke-dasharray='0 1'></circle>
    </g>
    <text class='label' x='18' y='18' text-anchor='middle'
      alignment-baseline='central'></text>
    <circle class='errormark' visibility='hidden'
      cx='25.5' cy='10.5' r='4' stroke='none'></circle>
  </svg>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_PROGRESS = 100.0;
/**
 * Definition of a circular progress indicator custom element.
 * The element supports two attributes for control - 'radius' and 'progress'.
 * Default radius for the element is 10px, use the DOM API
 *   element.setAttribute('radius', '12px'); to set the radius to 12px;
 * Default progress is 0, progress is a value from 0 to 100, use
 *   element.setAttribute('progress', '50'); to set progress to half complete
 * or alternately, set the 'element.progress' JS property for the same result.
 */
class CircularProgress extends HTMLElement {
    constructor() {
        super();
        this.fullCircle_ = 63;
        this.progress_ = 0.0;
        const template = document.createElement('template');
        template.innerHTML = getTemplate$3();
        const fragment = template.content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(fragment);
        this.indicator_ = this.shadowRoot.querySelector('.top');
        this.errormark_ = this.shadowRoot.querySelector('.errormark');
        this.label_ = this.shadowRoot.querySelector('.label');
    }
    static get is() {
        return 'xf-circular-progress';
    }
    /**
     * Registers this instance to listen to these attribute changes.
     */
    static get observedAttributes() {
        return [
            'errormark',
            'label',
            'progress',
            'radius',
        ];
    }
    /**
     * Sets the indicators progress position.
     * @param progress A value between 0 and MAX_PROGRESS to indicate.
     */
    setProgress(progress) {
        // Clamp progress to 0 .. MAX_PROGRESS.
        progress = Math.min(Math.max(progress, 0), MAX_PROGRESS);
        const value = (progress / MAX_PROGRESS) * this.fullCircle_;
        this.indicator_?.setAttribute('stroke-dasharray', value + ' ' + this.fullCircle_);
        return progress;
    }
    /**
     * Sets the position of the error indicator.
     * The error indicator is used by the summary panel. Its position is aligned
     * with the top-right square that contains the progress circle itself.
     * @param radius The radius of the progress circle.
     * @param strokeWidth The width of the progress circle stroke.
     */
    setErrorPosition_(radius, strokeWidth) {
        const center = 18;
        const x = center + radius + (strokeWidth / 2) - 4;
        const y = center - radius - (strokeWidth / 2) + 4;
        this.errormark_.setAttribute('cx', x.toString());
        this.errormark_.setAttribute('cy', y.toString());
    }
    /**
     * Callback triggered by the browser when our attribute values change.
     * TODO(crbug.com/947388) Add unit tests to exercise attribute edge cases.
     * @param name Attribute that's changed.
     * @param oldValue Old value of the attribute.
     * @param newValue New value of the attribute.
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) {
            return;
        }
        switch (name) {
            case 'errormark':
                this.errormark_.setAttribute('visibility', newValue || '');
                break;
            case 'label':
                this.label_.textContent = newValue;
                break;
            case 'radius':
                if (!newValue) {
                    break;
                }
                const radius = Number(newValue);
                // Restrict the allowed size to what fits in our area.
                if (radius < 0 || radius > 16.5) {
                    return;
                }
                let strokeWidth = 3;
                if (radius > 10) {
                    const circles = this.shadowRoot?.querySelector('#circles');
                    circles?.setAttribute('stroke-width', '4');
                    strokeWidth = 4;
                }
                // Position the error indicator relative to the progress circle.
                this.setErrorPosition_(radius, strokeWidth);
                // Calculate the circumference for the progress dash length.
                this.fullCircle_ = Math.PI * 2 * radius;
                const bottom = this.shadowRoot?.querySelector('.bottom');
                bottom?.setAttribute('r', radius.toString());
                this.indicator_.setAttribute('r', radius.toString());
                this.setProgress(this.progress_);
                break;
            case 'progress':
                const progress = Number(newValue);
                this.progress_ = this.setProgress(progress);
                break;
        }
    }
    /**
     * Getter for the visibility of the error marker.
     */
    get errorMarkerVisibility() {
        return this.errormark_.getAttribute('visibility') || '';
    }
    /**
     * Set the visibility of the error marker.
     * @param visibility Visibility value being set.
     */
    set errorMarkerVisibility(visibility) {
        // Reflect the progress property into the attribute.
        this.setAttribute('errormark', visibility);
    }
    /**
     * Getter for the current state of the progress indication.
     */
    get progress() {
        return this.progress_.toString();
    }
    /**
     * Sets the progress position between 0 and 100.0.
     * @param progress Progress value being set.
     */
    set progress(progress) {
        // Reflect the progress property into the attribute.
        this.setAttribute('progress', progress);
    }
    /**
     * Set the text label in the centre of the progress indicator.
     * This is used to indicate multiple operations in progress.
     * @param label Text to place inside the circle.
     */
    set label(label) {
        this.setAttribute('label', label);
    }
}
window.customElements.define(CircularProgress.is, CircularProgress);

function getTemplate$2() {
    return getTrustedHTML `<!--_html_template_start_--><style>
  .xf-panel-item {
      align-items: center;
      background-color: var(--cros-sys-base_elevated);
      border-radius: 8px;
      display: flex;
      flex-direction: row;
      height: auto;
      padding: 14px 0px;
      width: 504px;
  }

  xf-button {
    height: 36px;
  }

  .xf-panel-text {
      color: var(--cros-sys-on_surface);
      flex: 1;
      font: var(--cros-body-2-font);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }

  .xf-panel-label-text {
      outline: none;
  }

  :host([panel-type='3']) .xf-panel-label-text {
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      overflow: hidden;
      white-space: normal;
  }

  .xf-panel-secondary-text {
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      overflow: hidden;
      white-space: normal;
  }

  :host([panel-type='3']) .xf-linebreaker {
      display: none;
  }

  .xf-panel-label-text {
      color: var(--cros-sys-on_surface);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }

  .xf-panel-secondary-text {
    color: var(--cros-sys-on_surface_variant);
  }

  :host(:not([detailed-panel])) .xf-padder-4 {
      width: 4px;
  }

  :host(:not([detailed-panel])) .xf-padder-16 {
      width: 16px;
  }

  :host(:not([detailed-panel])) .xf-grow-padder {
      width: 24px;
  }

  xf-circular-progress {
      padding: 16px;
  }

  :host(:not([detailed-summary])) iron-icon {
      height: 36px;
      padding: 16px;
      width: 36px;
  }

  :host([panel-type='0']) .xf-panel-item {
      height: var(--progress-height);
      padding-bottom: var(--progress-padding-bottom);
      padding-top: var(--progress-padding-top);
  }

  :host([detailed-panel]:not([detailed-summary])) .xf-panel-text {
      margin-inline-end: 24px;
      margin-inline-start: 24px;
  }

  :host([detailed-panel][panel-type='2']) .xf-panel-secondary-text {
    color: var(--cros-sys-positive);
  }

  :host([detailed-panel][panel-type='2'][fade-secondary-text])
      .xf-panel-secondary-text {
    color: var(--cros-sys-on_surface_variant);
  }


  :host([detailed-panel]:not([detailed-summary])) xf-button {
    margin-inline-end: 8px;
  }

  :host([detailed-panel]:not([detailed-summary])) xf-button:last-of-type {
    margin-inline-end: 12px;
  }

  :host([detailed-panel]:not([detailed-summary])) xf-button[data-category='cancel'] {
    /* This is to make sure the cancel icon button is aligned with the collapse button. */
    margin-inline-end: 16px;
  }

  :host([detailed-panel]:not([detailed-summary])) #indicator {
      display: none;
  }

  :host([detailed-summary][data-category='collapsed'])
  .xf-panel-item {
      width: 236px;
  }

  :host([detailed-summary]) .xf-panel-text {
      align-items: center;
      display: flex;
      font: var(--cros-button-2-font);
      height: 48px;
      max-width: unset;
      width: 100%;
  }

  :host([detailed-summary]) #indicator {
      margin-inline-start: 22px;
      padding: 0;
  }

  :host([detailed-summary]) #indicator[icon='files36:success'] {
    --iron-icon-fill-color: var(--cros-sys-positive);
  }

  :host([detailed-summary]) #indicator[icon='files36:failure'] {
    --iron-icon-stroke-color: var(--cros-sys-error);
  }

  :host([detailed-summary]) #indicator[icon='files36:warning'] {
    --iron-icon-fill-color: var(--cros-sys-warning);
  }

  #indicator {
    height: 32px;
    margin-inline-end: 18px;
    width: 32px;
  }

  :host([detailed-summary]) #primary-action {
      align-items: center;
      display: flex;
      height: 48px;
      justify-content: center;
      margin-inline-end: 10px;
      margin-inline-start: auto;
      width: 48px;
  }

  :host([detailed-panel]) .xf-padder-4 {
      display: none;
  }

  :host([detailed-panel]) .xf-padder-16 {
      display: none;
  }

  :host([detailed-panel]) .xf-grow-padder {
      display: none;
  }
</style>
<div class='xf-panel-item'>
    <xf-circular-progress id='indicator'>
    </xf-circular-progress>
    <div class='xf-panel-text' role='alert' tabindex='0'>
        <span class='xf-panel-label-text'>
        </span>
        <br class='xf-linebreaker'>
    </div>
    <div class='xf-grow-padder'></div>
    <xf-button id='secondary-action' tabindex='-1'>
    </xf-button>
    <div id='button-gap' class='xf-padder-4'></div>
    <xf-button id='primary-action' tabindex='-1'>
    </xf-button>
    <div class='xf-padder-16'></div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var PanelType;
(function (PanelType) {
    PanelType[PanelType["DEFAULT"] = -1] = "DEFAULT";
    PanelType[PanelType["PROGRESS"] = 0] = "PROGRESS";
    PanelType[PanelType["SUMMARY"] = 1] = "SUMMARY";
    PanelType[PanelType["DONE"] = 2] = "DONE";
    PanelType[PanelType["ERROR"] = 3] = "ERROR";
    PanelType[PanelType["INFO"] = 4] = "INFO";
    PanelType[PanelType["FORMAT_PROGRESS"] = 5] = "FORMAT_PROGRESS";
    PanelType[PanelType["SYNC_PROGRESS"] = 6] = "SYNC_PROGRESS";
})(PanelType || (PanelType = {}));
/**
 * A panel to display the status or progress of a file operation.
 */
class PanelItem extends HTMLElement {
    constructor() {
        super();
        this.indicator_ = null;
        this.panelType_ = PanelType.DEFAULT;
        /**
         * Callback that signals events happening in the panel (e.g. click).
         */
        this.signal_ = console.log;
        this.updateSummaryPanel_ = null;
        this.updateProgress_ = null;
        this.onClickedBound_ = this.onClicked_.bind(this);
        /**
         * User specific data, used as a reference to persist any custom
         * data that the panel user may want to use in the signal callback.
         * e.g. holding the file name(s) used in a copy operation.
         */
        this.userData = null;
        const template = document.createElement('template');
        template.innerHTML = getTemplate$2();
        const fragment = template.content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(fragment);
        this.indicator_ =
            this.shadowRoot.querySelector('#indicator');
    }
    static get is() {
        return 'xf-panel-item';
    }
    /**
     * Remove an element from the panel using it's id.
     */
    removePanelElementById_(id) {
        const element = this.shadowRoot.querySelector(id);
        if (element) {
            element.remove();
        }
        return element;
    }
    /**
     * Sets up the different panel types. Panels have per-type configuration
     * templates, but can be further customized using individual attributes.
     * @param type The enumerated panel type to set up.
     */
    setPanelType(type) {
        this.setAttribute('detailed-panel', 'detailed-panel');
        if (this.panelType_ === type) {
            return;
        }
        // Remove the indicators/buttons that can change.
        this.removePanelElementById_('#indicator');
        let element = this.removePanelElementById_('#primary-action');
        if (element) {
            element.removeEventListener('click', this.onClickedBound_);
        }
        element = this.removePanelElementById_('#secondary-action');
        if (element) {
            element.removeEventListener('click', this.onClickedBound_);
        }
        // Mark the indicator as empty so it recreates on setAttribute.
        this.setAttribute('indicator', 'empty');
        const buttonSpacer = this.shadowRoot.querySelector('#button-gap');
        // Default the text host to use an alert role.
        const textHost = this.shadowRoot.querySelector('.xf-panel-text');
        textHost.setAttribute('role', 'alert');
        const hasExtraButton = !!this.dataset['extraButtonText'];
        // Setup the panel configuration for the panel type.
        // TOOD(crbug.com/947388) Simplify this switch breaking out common cases.
        let primaryButton = null;
        let secondaryButton = null;
        switch (type) {
            case PanelType.PROGRESS:
                this.setAttribute('indicator', 'progress');
                secondaryButton = document.createElement('xf-button');
                secondaryButton.id = 'secondary-action';
                secondaryButton.addEventListener('click', this.onClickedBound_);
                secondaryButton.dataset['category'] = 'cancel';
                secondaryButton.setAttribute('aria-label', str('CANCEL_LABEL'));
                buttonSpacer.insertAdjacentElement('afterend', secondaryButton);
                break;
            case PanelType.SUMMARY:
                this.setAttribute('indicator', 'largeprogress');
                primaryButton = document.createElement('xf-button');
                primaryButton.id = 'primary-action';
                primaryButton.dataset['category'] = 'expand';
                primaryButton.setAttribute('aria-label', str('FEEDBACK_EXPAND_LABEL'));
                // Remove the 'alert' role to stop screen readers repeatedly
                // reading each progress update.
                textHost.setAttribute('role', '');
                buttonSpacer.insertAdjacentElement('afterend', primaryButton);
                break;
            case PanelType.DONE:
                this.setAttribute('indicator', 'status');
                this.setAttribute('status', 'success');
                secondaryButton = document.createElement('xf-button');
                secondaryButton.id =
                    (hasExtraButton) ? 'secondary-action' : 'primary-action';
                secondaryButton.addEventListener('click', this.onClickedBound_);
                secondaryButton.dataset['category'] = 'dismiss';
                buttonSpacer.insertAdjacentElement('afterend', secondaryButton);
                if (hasExtraButton) {
                    primaryButton = document.createElement('xf-button');
                    primaryButton.id = 'primary-action';
                    primaryButton.dataset['category'] = 'extra-button';
                    primaryButton.addEventListener('click', this.onClickedBound_);
                    primaryButton.setExtraButtonText(this.dataset['extraButtonText'] ?? '');
                    buttonSpacer.insertAdjacentElement('afterend', primaryButton);
                }
                break;
            case PanelType.ERROR:
                this.setAttribute('indicator', 'status');
                this.setAttribute('status', 'failure');
                secondaryButton = document.createElement('xf-button');
                secondaryButton.id =
                    (hasExtraButton) ? 'secondary-action' : 'primary-action';
                secondaryButton.addEventListener('click', this.onClickedBound_);
                secondaryButton.dataset['category'] = 'dismiss';
                buttonSpacer.insertAdjacentElement('afterend', secondaryButton);
                if (hasExtraButton) {
                    primaryButton = document.createElement('xf-button');
                    primaryButton.id = 'primary-action';
                    primaryButton.dataset['category'] = 'extra-button';
                    primaryButton.addEventListener('click', this.onClickedBound_);
                    primaryButton.setExtraButtonText(this.dataset['extraButtonText'] ?? '');
                    buttonSpacer.insertAdjacentElement('afterend', primaryButton);
                }
                break;
            case PanelType.INFO:
                this.setAttribute('indicator', 'status');
                this.setAttribute('status', 'warning');
                secondaryButton = document.createElement('xf-button');
                secondaryButton.id =
                    (hasExtraButton) ? 'secondary-action' : 'primary-action';
                secondaryButton.addEventListener('click', this.onClickedBound_);
                secondaryButton.dataset['category'] = 'cancel';
                buttonSpacer.insertAdjacentElement('afterend', secondaryButton);
                if (hasExtraButton) {
                    primaryButton = document.createElement('xf-button');
                    primaryButton.id = 'primary-action';
                    primaryButton.dataset['category'] = 'extra-button';
                    primaryButton.addEventListener('click', this.onClickedBound_);
                    primaryButton.setExtraButtonText(this.dataset['extraButtonText'] ?? '');
                    buttonSpacer.insertAdjacentElement('afterend', primaryButton);
                }
                break;
            case PanelType.FORMAT_PROGRESS:
                this.setAttribute('indicator', 'status');
                this.setAttribute('status', 'hard-drive');
                break;
            case PanelType.SYNC_PROGRESS:
                this.setAttribute('indicator', 'progress');
                break;
        }
        this.panelType_ = type;
    }
    /**
     * Registers this instance to listen to these attribute changes.
     */
    static get observedAttributes() {
        return [
            'count',
            'errormark',
            'indicator',
            'panel-type',
            'primary-text',
            'progress',
            'secondary-text',
            'status',
        ];
    }
    /**
     * Callback triggered by the browser when our attribute values change.
     */
    attributeChangedCallback(name, _, newValue) {
        let indicator = null;
        let textNode;
        // TODO(adanilo) Chop out each attribute handler into a function.
        switch (name) {
            case 'count':
                if (this.indicator_) {
                    this.indicator_.setAttribute('label', newValue ?? '');
                }
                break;
            case 'errormark':
                if (this.indicator_) {
                    this.indicator_.setAttribute('errormark', newValue ?? '');
                }
                break;
            case 'indicator':
                // Get rid of any existing indicator
                const oldIndicator = this.shadowRoot.querySelector('#indicator');
                if (oldIndicator) {
                    oldIndicator.remove();
                }
                switch (newValue) {
                    case 'progress':
                    case 'largeprogress':
                        indicator = document.createElement('xf-circular-progress');
                        if (newValue === 'largeprogress') {
                            indicator.setAttribute('radius', '14');
                        }
                        else {
                            indicator.setAttribute('radius', '10');
                        }
                        break;
                    case 'status':
                        indicator =
                            document.createElement('iron-icon');
                        const status = this.getAttribute('status');
                        if (status) {
                            indicator.setAttribute('icon', `files36:${status}`);
                        }
                        break;
                }
                this.indicator_ = indicator;
                if (indicator) {
                    const itemRoot = this.shadowRoot.querySelector('.xf-panel-item');
                    indicator.setAttribute('id', 'indicator');
                    itemRoot.prepend(indicator);
                }
                break;
            case 'panel-type':
                const panelType = Number(newValue);
                if (panelType in PanelType) {
                    this.setPanelType(panelType);
                }
                if (this.updateSummaryPanel_) {
                    this.updateSummaryPanel_();
                }
                break;
            case 'progress':
                if (this.indicator_) {
                    this.indicator_.progress = newValue ?? '';
                    if (this.updateProgress_) {
                        this.updateProgress_();
                    }
                }
                break;
            case 'status':
                if (this.indicator_) {
                    this.indicator_.setAttribute('icon', `files36:${newValue}`);
                }
                break;
            case 'primary-text':
                textNode = this.shadowRoot.querySelector('.xf-panel-label-text');
                if (textNode) {
                    textNode.textContent = newValue;
                    // Set the aria labels for the activity and cancel button.
                    this.setAttribute('aria-label', newValue ?? '');
                }
                break;
            case 'secondary-text':
                textNode = this.shadowRoot.querySelector('.xf-panel-secondary-text');
                if (!textNode) {
                    const parent = this.shadowRoot.querySelector('.xf-panel-text');
                    if (!parent) {
                        return;
                    }
                    textNode = document.createElement('span');
                    textNode.setAttribute('class', 'xf-panel-secondary-text');
                    parent.appendChild(textNode);
                }
                // Remove the secondary text node if the text is empty
                if (newValue === '') {
                    textNode.remove();
                }
                else {
                    textNode.textContent = newValue;
                }
                break;
        }
    }
    /**
     * DOM connected.
     */
    connectedCallback() {
        this.addEventListener('click', this.onClickedBound_);
        // Set click event handler references.
        this.shadowRoot.querySelector('#primary-action')
            ?.addEventListener('click', this.onClickedBound_);
        this.shadowRoot.querySelector('#secondary-action')
            ?.addEventListener('click', this.onClickedBound_);
    }
    /**
     * DOM disconnected.
     */
    disconnectedCallback() {
        // Replace references to any signal callback.
        this.signal_ = console.log;
    }
    /**
     * Handles 'click' events from our sub-elements and sends
     * signals to the |signal_| callback if needed.
     */
    onClicked_(event) {
        event.stopImmediatePropagation();
        event.preventDefault();
        // Ignore clicks on the panel item itself.
        if (event.target === this || !event.target) {
            return;
        }
        const button = event.target;
        const id = button.dataset['category'] ?? '';
        this.signal_(id);
    }
    /**
     * Sets the callback that triggers signals from events on the panel.
     */
    set signalCallback(signal) {
        this.signal_ = signal || console.log;
    }
    /**
     * Set the visibility of the error marker.
     * @param visibility Visibility value being set.
     */
    set errorMarkerVisibility(visibility) {
        this.setAttribute('errormark', visibility);
    }
    /**
     *  Getter for the visibility of the error marker.
     */
    get errorMarkerVisibility() {
        // If we have an indicator on the panel, then grab the
        // visibility value from that.
        if (this.indicator_ && 'errorMarkerVisibility' in this.indicator_) {
            return this.indicator_.errorMarkerVisibility;
        }
        // If there's no indicator on the panel just return the
        // value of any attribute as a fallback.
        return this.getAttribute('errormark') ?? '';
    }
    /**
     * Setter to set the indicator type.
     * @param indicator Progress (optionally large) or status.
     */
    set indicator(indicator) {
        this.setAttribute('indicator', indicator);
    }
    /**
     *  Getter for the progress indicator.
     */
    get indicator() {
        return this.getAttribute('indicator') ?? '';
    }
    /**
     * Setter to set the success/failure indication.
     * @param status Status value being set.
     */
    set status(status) {
        this.setAttribute('status', status);
    }
    /**
     *  Getter for the success/failure indication.
     */
    get status() {
        return this.getAttribute('status') ?? '';
    }
    /**
     * Setter to set the progress property, sent to any child indicator.
     */
    set progress(progress) {
        this.setAttribute('progress', progress);
    }
    /**
     *  Getter for the progress indicator percentage.
     */
    get progress() {
        if (!this.indicator_ || !('progress' in this.indicator_)) {
            return 0;
        }
        return parseInt(this.indicator_?.progress, 10) || 0;
    }
    /**
     * Setter to set the primary text on the panel.
     * @param text Text to be shown.
     */
    set primaryText(text) {
        this.setAttribute('primary-text', text);
    }
    /**
     * Getter for the primary text on the panel.
     */
    get primaryText() {
        return this.getAttribute('primary-text') ?? '';
    }
    /**
     * Setter to set the secondary text on the panel.
     * @param text Text to be shown.
     */
    set secondaryText(text) {
        this.setAttribute('secondary-text', text);
    }
    /**
     * Getter for the secondary text on the panel.
     */
    get secondaryText() {
        return this.getAttribute('secondary-text') ?? '';
    }
    /**
     * @param shouldFade Whether the secondary text should be displayed
     *     with a faded color to avoid drawing too much attention to it.
     */
    set fadeSecondaryText(shouldFade) {
        this.toggleAttribute('fade-secondary-text', shouldFade);
    }
    /**
     * @return Whether the secondary text should be displayed with a
     *     faded color to avoid drawing too much attention to it.
     */
    get fadeSecondaryText() {
        return !!this.getAttribute('fade-secondary-text');
    }
    /**
     * Setter to set the panel type.
     * @param type Enum value for the panel type.
     */
    set panelType(type) {
        this.setAttribute('panel-type', String(type));
    }
    /**
     * Getter for the panel type.
     */
    get panelType() {
        return this.panelType_;
    }
    /**
     * Getter for the primary action button.
     */
    get primaryButton() {
        return this.shadowRoot.querySelector('#primary-action');
    }
    /**
     * Getter for the secondary action button.
     */
    get secondaryButton() {
        return this.shadowRoot.querySelector('#secondary-action');
    }
    /**
     * Getter for the panel text div.
     */
    get textDiv() {
        return this.shadowRoot.querySelector('.xf-panel-text');
    }
    /**
     * Setter to replace the default aria-label on any close button.
     * @param text Text to set for the 'aria-label'.
     */
    set closeButtonAriaLabel(text) {
        const action = this.shadowRoot.querySelector('#secondary-action');
        if (action && action.dataset['category'] === 'cancel') {
            action.setAttribute('aria-label', text);
        }
    }
    set updateProgress(callback) {
        this.updateProgress_ = callback;
    }
    set updateSummaryPanel(callback) {
        this.updateSummaryPanel_ = callback;
    }
}
customElements.define(PanelItem.is, PanelItem);

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * A panel to display a collection of PanelItem.
 */
class DisplayPanel extends HTMLElement {
    static get is() {
        return 'xf-display-panel';
    }
    constructor() {
        super();
        /**
         * True if the panel is collapsed to summary view.
         */
        this.collapsed_ = true;
        /**
         * Collection of PanelItems hosted in this DisplayPanel.
         */
        this.items_ = [];
        this.toggleSummaryBound_ = this.toggleSummary_.bind(this);
        this.createElement_();
        this.summary_ = this.shadowRoot.querySelector('#summary');
        this.separator_ =
            this.shadowRoot.querySelector('#separator');
        this.panels_ = this.shadowRoot.querySelector('#panels');
    }
    /**
     * Creates an instance of DisplayPanel, attaching the template clone.
     */
    createElement_() {
        const template = document.createElement('template');
        template.innerHTML = getTemplate$4();
        const fragment = template.content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(fragment);
    }
    /**
     * We cannot set attributes in the constructor for custom elements when using
     * `createElement()`. Set attributes in the connected callback instead.
     */
    connectedCallback() {
        this.setAriaHidden_();
    }
    /**
     * Re-enable scrollbar visibility after expand/contract animation.
     */
    panelExpandFinished_(_) {
        this.panels_.classList.remove('expanding');
        this.panels_.classList.add('expandfinished');
    }
    /**
     * Hides the active panel items at end of collapse animation.
     */
    panelCollapseFinished_(_) {
        this.panels_.hidden = true;
        this.panels_.setAttribute('aria-hidden', 'true');
        this.panels_.classList.remove('expanding');
        this.panels_.classList.add('expandfinished');
    }
    /**
     * Set attributes and style for expanded summary panel.
     */
    setSummaryExpandedState(expandButton) {
        expandButton.setAttribute('data-category', 'collapse');
        expandButton.setAttribute('aria-label', str('FEEDBACK_COLLAPSE_LABEL'));
        expandButton.setAttribute('aria-expanded', 'true');
        this.panels_.hidden = false;
        this.separator_.hidden = false;
    }
    /**
     * Event handler to toggle the visible state of panel items.
     */
    toggleSummary_(_) {
        const summaryPanel = this.summary_.querySelector('xf-panel-item');
        const expandButton = summaryPanel.shadowRoot.querySelector('#primary-action');
        if (this.collapsed_) {
            this.collapsed_ = false;
            this.setSummaryExpandedState(expandButton);
            this.panels_.addEventListener('animationend', this.panelExpandFinished_.bind(this), { once: true });
            this.panels_.setAttribute('class', 'expanded expanding');
            summaryPanel.setAttribute('data-category', 'expanded');
        }
        else {
            this.collapsed_ = true;
            expandButton.setAttribute('data-category', 'expand');
            expandButton.setAttribute('aria-label', str('FEEDBACK_EXPAND_LABEL'));
            expandButton.setAttribute('aria-expanded', 'false');
            this.separator_.hidden = true;
            this.panels_.addEventListener('animationend', this.panelCollapseFinished_.bind(this), { once: true });
            this.panels_.setAttribute('class', 'collapsed expanding');
            summaryPanel.setAttribute('data-category', 'collapsed');
        }
    }
    /**
     * Get an array of panel items that are connected to the DOM.
     */
    connectedPanelItems_() {
        return this.items_.filter(item => item.isConnected);
    }
    /**
     * Update the summary panel item progress indicator.
     */
    async updateProgress() {
        let total = 0;
        if (this.items_.length === 0) {
            return;
        }
        let errors = 0;
        let warnings = 0;
        let progressCount = 0;
        const connectedPanels = this.connectedPanelItems_();
        for (const panel of connectedPanels) {
            // Only sum progress for attached progress panels.
            if (panel.panelType === PanelType.PROGRESS ||
                panel.panelType === PanelType.FORMAT_PROGRESS ||
                panel.panelType === PanelType.SYNC_PROGRESS) {
                total += Number(panel.progress);
                progressCount++;
            }
            else if (panel.panelType === PanelType.ERROR) {
                errors++;
            }
            else if (panel.panelType === PanelType.INFO) {
                warnings++;
            }
        }
        if (progressCount > 0) {
            total /= progressCount;
        }
        const summaryPanel = this.summary_.querySelector('xf-panel-item');
        if (!summaryPanel) {
            return;
        }
        // Show either a progress indicator or a status indicator (success, warning,
        // error) if no operations are ongoing.
        if (progressCount > 0) {
            // Make sure we have a progress indicator on the summary panel.
            if (summaryPanel.indicator !== 'largeprogress') {
                summaryPanel.indicator = 'largeprogress';
            }
            summaryPanel.primaryText = strf('PERCENT_COMPLETE', total.toFixed(0));
            summaryPanel.progress = String(total);
            summaryPanel.setAttribute('count', String(progressCount));
            summaryPanel.errorMarkerVisibility = (errors > 0) ? 'visible' : 'hidden';
            return;
        }
        if (summaryPanel.indicator !== 'status') {
            // Make sure we have a status indicator on the summary panel.
            summaryPanel.indicator = 'status';
        }
        if (errors > 0 && warnings > 0) {
            // Both errors and warnings: show the error indicator, along with counts
            // of both.
            summaryPanel.status = 'failure';
            const errorMessage = await this.generateErrorMessage_(errors);
            const warningMessage = await this.generateWarningMessage_(errors);
            summaryPanel.primaryText = `${errorMessage} ${warningMessage}`;
            return;
        }
        if (errors > 0) {
            // Only errors, but no warnings.
            summaryPanel.status = 'failure';
            summaryPanel.primaryText = await this.generateErrorMessage_(errors);
            return;
        }
        if (warnings > 0) {
            // Only warnings, but no errors.
            summaryPanel.status = 'warning';
            summaryPanel.primaryText = await this.generateWarningMessage_(warnings);
            return;
        }
        // No errors or warnings.
        summaryPanel.status = 'success';
        summaryPanel.primaryText = strf('PERCENT_COMPLETE', 100);
    }
    /**
     * Update the summary panel.
     * @public
     */
    updateSummaryPanel() {
        const summaryHost = this.shadowRoot.querySelector('#summary');
        let summaryPanel = summaryHost.querySelector('#summary-panel');
        // Make the display panel available by tab if there are panels to
        // show and there's an aria-label for use by a screen reader.
        if (this.hasAttribute('aria-label')) {
            this.tabIndex = this.items_.length ? 0 : -1;
        }
        // Work out how many panel items are being shown.
        const count = this.connectedPanelItems_().length;
        // If there's only one panel item active, no need for summary.
        if (count <= 1 && summaryPanel) {
            const button = summaryPanel.primaryButton;
            if (button) {
                button.removeEventListener('click', this.toggleSummaryBound_);
            }
            // For transfer summary details.
            const textDiv = summaryPanel.textDiv;
            if (textDiv) {
                textDiv.removeEventListener('click', this.toggleSummaryBound_);
            }
            summaryPanel.remove();
            this.panels_.hidden = false;
            this.separator_.hidden = true;
            this.panels_.classList.remove('collapsed');
            return;
        }
        // Show summary panel if there are more than 1 panel items.
        if (count > 1 && !summaryPanel) {
            summaryPanel = document.createElement('xf-panel-item');
            summaryPanel.panelType = PanelType.SUMMARY;
            summaryPanel.id = 'summary-panel';
            summaryPanel.setAttribute('detailed-summary', '');
            const button = summaryPanel.primaryButton;
            if (button) {
                button.addEventListener('click', this.toggleSummaryBound_);
            }
            const textDiv = summaryPanel.textDiv;
            if (textDiv) {
                textDiv.addEventListener('click', this.toggleSummaryBound_);
            }
            summaryHost.appendChild(summaryPanel);
            // Setup the panels based on expand/collapse state of the summary panel.
            if (this.collapsed_) {
                this.panels_.hidden = true;
                summaryPanel.setAttribute('data-category', 'collapsed');
            }
            else {
                this.setSummaryExpandedState(button);
                this.panels_.classList.add('expandfinished');
                summaryPanel.setAttribute('data-category', 'expanded');
            }
        }
        if (summaryPanel) {
            this.updateProgress();
        }
    }
    /**
     * Create a panel item suitable for attaching to our display panel.
     * @param id The identifier attached to this panel.
     */
    createPanelItem(id) {
        const panel = document.createElement('xf-panel-item');
        panel.id = id;
        panel.updateProgress = this.updateProgress.bind(this);
        panel.updateSummaryPanel = this.updateSummaryPanel.bind(this);
        panel.setAttribute('indicator', 'progress');
        this.items_.push(panel);
        this.setAriaHidden_();
        this.setAttribute('detailed-panel', 'detailed-panel');
        return panel;
    }
    /**
     * Attach a panel item element inside our display panel.
     * @param panel The panel item to attach.
     */
    attachPanelItem(panel) {
        // Only attach the panel if it hasn't been removed.
        const index = this.items_.indexOf(panel);
        if (index === -1) {
            return;
        }
        // If it's already attached, nothing to do here.
        if (panel.isConnected) {
            return;
        }
        this.panels_.appendChild(panel);
        this.updateSummaryPanel();
        this.setAriaHidden_();
    }
    /**
     * Add a panel entry element inside our display panel.
     * @param id The identifier attached to this panel.
     */
    addPanelItem(id) {
        const panel = this.createPanelItem(id);
        this.attachPanelItem(panel);
        return panel;
    }
    /**
     * Remove a panel from this display panel.
     * @param item The PanelItem to remove.
     * @public
     */
    removePanelItem(item) {
        const index = this.items_.indexOf(item);
        if (index === -1) {
            return;
        }
        item.remove();
        this.items_.splice(index, 1);
        this.setAriaHidden_();
        this.updateSummaryPanel();
    }
    /**
     * Set aria-hidden to false if there is no panel.
     */
    setAriaHidden_() {
        const hasItems = this.connectedPanelItems_().length > 0;
        this.setAttribute('aria-hidden', String(!hasItems));
    }
    /**
     * Find a panel with given 'id'.
     */
    findPanelItemById(id) {
        for (const item of this.items_) {
            if (item.getAttribute('id') === id) {
                return item;
            }
        }
        return null;
    }
    /**
     * Remove all panel items.
     */
    removeAllPanelItems() {
        for (const item of this.items_) {
            item.remove();
        }
        this.items_ = [];
        this.setAriaHidden_();
        this.updateSummaryPanel();
    }
    /**
     * Generates the summary panel title message based on the number of errors.
     * @param errors Number of error subpanels.
     * @return Title text.
     */
    async generateErrorMessage_(errors) {
        if (errors <= 0) {
            console.warn(`generateWarningMessage_ expected errors > 0, but got ${errors}.`);
            return '';
        }
        return getPluralString('ERROR_PROGRESS_SUMMARY', errors);
    }
    /**
     * Generates the summary panel title message based on the number of warnings.
     * @param warnings Number of warning subpanels.
     * @return Title text.
     */
    async generateWarningMessage_(warnings) {
        if (warnings <= 0) {
            console.warn(`generateWarningMessage_ expected warnings > 0, but got ${warnings}.`);
            return '';
        }
        return getPluralString('WARNING_PROGRESS_SUMMARY', warnings);
    }
}
window.customElements.define(DisplayPanel.is, DisplayPanel);

function getTemplate$1() {
    return html$1 `<!--_html_template_start_-->    <style>:host{--cr-toast-background:#323232;--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:#fff}@media (prefers-color-scheme:dark){:host{--cr-toast-background:var(--google-grey-900) linear-gradient(rgba(255, 255, 255, .06), rgba(255, 255, 255, .06));--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:var(--google-grey-200)}}:host{align-items:center;background:var(--cr-toast-background);border-radius:4px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,.28);box-sizing:border-box;display:flex;margin:24px;max-width:var(--cr-toast-max-width,568px);min-height:52px;min-width:288px;opacity:0;padding:0 24px;position:fixed;transform:translateY(100px);transition:opacity .3s,transform .3s;visibility:hidden;z-index:1}:host-context([chrome-refresh-2023]):host{--cr-toast-background:var(--color-toast-background,
            var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,
            var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,
            var(--cr-fallback-color-inverse-on-surface));border-radius:8px;line-height:20px;padding:0 16px}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent!important;border:none!important;color:var(--cr-toast-button-color)!important;margin-inline-start:32px!important;min-width:52px!important;padding:8px!important}:host ::slotted(cr-button:hover){background-color:transparent!important}:host-context([chrome-refresh-2023]) ::slotted(cr-button:last-of-type){margin-inline-end:-8px}</style>
    <slot></slot>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A lightweight toast.
 */
class CrToastElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.hideTimeoutId_ = null;
    }
    static get is() {
        return 'cr-toast';
    }
    static get template() {
        return getTemplate$1();
    }
    static get properties() {
        return {
            duration: {
                type: Number,
                value: 0,
            },
            open: {
                readOnly: true,
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
        };
    }
    static get observers() {
        return ['resetAutoHide_(duration, open)'];
    }
    /**
     * Cancels existing auto-hide, and sets up new auto-hide.
     */
    resetAutoHide_() {
        if (this.hideTimeoutId_ !== null) {
            window.clearTimeout(this.hideTimeoutId_);
            this.hideTimeoutId_ = null;
        }
        if (this.open && this.duration !== 0) {
            this.hideTimeoutId_ = window.setTimeout(() => {
                this.hide();
            }, this.duration);
        }
    }
    /**
     * Shows the toast and auto-hides after |this.duration| milliseconds has
     * passed. If the toast is currently being shown, any preexisting auto-hide
     * is cancelled and replaced with a new auto-hide.
     */
    show() {
        // Force autohide to reset if calling show on an already shown toast.
        const shouldResetAutohide = this.open;
        // The role attribute is removed first so that screen readers to better
        // ensure that screen readers will read out the content inside the toast.
        // If the role is not removed and re-added back in, certain screen readers
        // do not read out the contents, especially if the text remains exactly
        // the same as a previous toast.
        this.removeAttribute('role');
        // Reset the aria-hidden attribute as screen readers need to access the
        // contents of an opened toast.
        this.removeAttribute('aria-hidden');
        this._setOpen(true);
        this.setAttribute('role', 'alert');
        if (shouldResetAutohide) {
            this.resetAutoHide_();
        }
    }
    /**
     * Hides the toast and ensures that screen readers cannot its contents while
     * hidden.
     */
    hide() {
        this.setAttribute('aria-hidden', 'true');
        this._setOpen(false);
    }
}
customElements.define(CrToastElement.is, CrToastElement);

function getTemplate() {
    return html$1 `<!--_html_template_start_-->
<style>.container{--cr-toast-background:var(--cros-sys-base_elevated);--cr-toast-button-color:var(--cros-sys-primary);--cr-toast-text-color:var(--cros-sys-on_surface);border-radius:8px;box-shadow:var(--cros-elevation-2-shadow);font:var(--cros-body-2-font);justify-content:space-between;max-width:336px;min-height:48px;min-width:256px;padding:14px 0}:host-context(:root[dir=ltr]) .container{left:unset;right:0}:host-context(:root[dir=rtl]) .container{left:0;right:unset}.text{-webkit-box-orient:vertical;-webkit-line-clamp:2;display:-webkit-box;margin-inline-start:24px;overflow:hidden}.action{--ink-color:var(--cros-sys-ripple_neutral_on_subtle);--paper-ripple-opacity:100%;border-radius:18px;height:36px;margin-inline-end:12px}.action:active{box-shadow:none}:host-context(.focus-outline-visible) .action:focus{--focus-shadow-color:none;outline:2px solid var(--cros-sys-focus_ring)}</style>
<cr-toast class="container" id="container" duration="5000">
  <div class="text" id="text"></div>
  <cr-button class="action" id="action" on-click="onActionClicked_"></cr-button>
</cr-toast>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Files Toast.
 *
 * The toast is shown at the bottom-right in LTR, bottom-left in RTL. Usage:
 *
 * toast.show('Toast without action.');
 * toast.show('Toast with action', {text: 'Action', callback:function(){}});
 * toast.hide();
 */
class FilesToast extends PolymerElement {
    constructor() {
        super(...arguments);
        this.action_ = null;
        this.queue_ = [];
        this.visible = false;
    }
    static get is() {
        return 'files-toast';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            visible: {
                type: Boolean,
                value: false,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.container.ontransitionend = this.onTransitionEnd_.bind(this);
    }
    /**
     * Shows toast. If a toast is already shown, add the toast to the pending
     * queue. It will shown later when other toasts have completed.
     *
     * @param text Text of toast.
     * @param action Action. The |Action.callback| is called if the user taps or
     *     clicks the action button.
     */
    show(text, action) {
        if (this.visible) {
            this.queue_.push({ text: text, action: action });
            return;
        }
        this.visible = true;
        this.$.text.innerText = text;
        this.action_ = action || null;
        if (this.action_) {
            this.$.text.setAttribute('style', 'margin-inline-end: 0');
            this.$.action.innerText = this.action_.text;
            this.$.action.hidden = false;
        }
        else {
            this.$.text.removeAttribute('style');
            this.$.action.innerText = '';
            this.$.action.hidden = true;
        }
        this.$.container.show();
    }
    /** Handles action button tap/click. */
    onActionClicked_() {
        if (this.action_ && this.action_.callback) {
            this.action_.callback();
            this.hide();
        }
    }
    /**
     * Handles the <cr-toast> transitionend event. On a hide transition, show
     * the next queued toast if any.
     */
    onTransitionEnd_() {
        const hide = !this.$.container.open;
        if (hide && this.visible) {
            this.visible = false;
            if (this.queue_.length > 0) {
                const next = this.queue_.shift();
                setTimeout(this.show.bind(this), 0, next.text, next.action);
            }
        }
    }
    /**
     * Hides toast if visible.
     */
    hide() {
        if (this.visible) {
            this.$.container.hide();
        }
    }
}
customElements.define(FilesToast.is, FilesToast);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This file should contain renaming utility functions used only
 * by the files app frontend.
 */
/**
 * Verifies name for file, folder, or removable root to be created or renamed.
 * Names are restricted according to the target filesystem.
 *
 * @param entry The entry to be named.
 * @param name New file, folder, or removable root name.
 * @param areHiddenFilesVisible Whether to report hidden file name errors or
 *     not.
 * @param volumeInfo Volume information about the target entry.
 * @param isRemovableRoot Whether the target is a removable root.
 * @return Fulfills on success, throws error message otherwise.
 */
async function validateEntryName(entry, name, areHiddenFilesVisible, volumeInfo, isRemovableRoot) {
    if (isRemovableRoot) {
        const diskFileSystemType = volumeInfo && volumeInfo.diskFileSystemType;
        assert$1(diskFileSystemType);
        validateExternalDriveName(name, diskFileSystemType);
    }
    else {
        const parentEntry = await getParentEntry(entry);
        await validateFileName(parentEntry, name, areHiddenFilesVisible);
    }
}
/**
 * Verifies the user entered name for external drive to be
 * renamed to. Name restrictions must correspond to the target filesystem
 * restrictions.
 *
 * It also verifies that name length is in the limits of the filesystem.
 *
 * This function throws if the new label is invalid, else it completes.
 *
 * @param name New external drive name.
 */
function validateExternalDriveName(name, fileSystem) {
    // Verify if entered name for external drive respects restrictions
    // provided by the target filesystem.
    const nameLength = name.length;
    const lengthLimit = FileSystemTypeVolumeNameLengthLimit;
    // Verify length for the target file system type.
    if (lengthLimit.hasOwnProperty(fileSystem) &&
        nameLength > lengthLimit[fileSystem]) {
        throw Error(strf('ERROR_EXTERNAL_DRIVE_LONG_NAME', lengthLimit[fileSystem]));
    }
    // Checks if the name contains only alphanumeric characters or allowed
    // special characters. This needs to stay in sync with
    // cros-disks/filesystem_label.cc on the ChromeOS side.
    const validCharRegex = /[a-zA-Z0-9 \!\#\$\%\&\(\)\-\@\^\_\`\{\}\~]/;
    for (const n of name) {
        if (!validCharRegex.test(n)) {
            throw Error(strf('ERROR_EXTERNAL_DRIVE_INVALID_CHARACTER', n));
        }
    }
}
/**
 * Verifies the user entered name for file or folder to be created or
 * renamed to. Name restrictions must correspond to File API restrictions
 * (see DOMFilePath::isValidPath). Curernt WebKit implementation is
 * out of date (spec is
 * http://dev.w3.org/2009/dap/file-system/file-dir-sys.html, 8.3) and going
 * to be fixed. Shows message box if the name is invalid.
 *
 * It also verifies if the name length is in the limit of the filesystem.
 *
 * @param parentEntry The entry of the parent directory.
 * @param name New file or folder name.
 * @param areHiddenFilesVisible Whether to report the hidden file name error or
 *     not.
 * @return Fulfills on success, throws error message otherwise.
 */
async function validateFileName(parentEntry, name, areHiddenFilesVisible) {
    const testResult = /[\/\\\<\>\:\?\*\"\|]/.exec(name);
    if (testResult) {
        throw Error(strf('ERROR_INVALID_CHARACTER', testResult[0]));
    }
    if (/^\s*$/i.test(name)) {
        throw Error(str('ERROR_WHITESPACE_NAME'));
    }
    if (/^(CON|PRN|AUX|NUL|COM[1-9]|LPT[1-9])$/i.test(name)) {
        throw Error(str('ERROR_RESERVED_NAME'));
    }
    if (!areHiddenFilesVisible && /\.crdownload$/i.test(name)) {
        throw Error(str('ERROR_RESERVED_NAME'));
    }
    if (!areHiddenFilesVisible && name[0] === '.') {
        throw Error(str('ERROR_HIDDEN_NAME'));
    }
    const isValid = await validatePathNameLength(parentEntry, name);
    if (!isValid) {
        throw Error(str('ERROR_LONG_NAME'));
    }
}
/**
 * Renames file, folder, or removable root with newName.
 * @param entry The entry to be renamed.
 * @param newName The new name.
 * @param volumeInfo Volume information about the target entry.
 * @param isRemovableRoot Whether the target is a removable root.
 * @return Resolves the renamed entry if successful, else throws error message.
 */
async function renameEntry(entry, newName, volumeInfo, isRemovableRoot) {
    if (isRemovableRoot) {
        chrome.fileManagerPrivate.renameVolume(volumeInfo.volumeId, newName);
        return entry;
    }
    return renameFile(entry, newName);
}
/**
 * Renames the entry to newName.
 * @param entry The entry to be renamed.
 * @param newName The new name.
 * @return Resolves the renamed entry if successful, else throws error message.
 */
async function renameFile(entry, newName) {
    try {
        // Before moving, we need to check if there is an existing entry at
        // parent/newName, since moveTo will overwrite it.
        // Note that this way has a race condition. After existing check,
        // a new entry may be created in the background. However, there is no way
        // not to overwrite the existing file, unfortunately. The risk should be
        // low, assuming the unsafe period is very short.
        const parent = await getParentEntry(entry);
        try {
            await getEntry(parent, newName, entry.isFile, { create: false });
        }
        catch (error) {
            if (error.name === FileErrorToDomError.NOT_FOUND_ERR) {
                return moveEntryTo(entry, parent, newName);
            }
            // Unexpected error found.
            throw error;
        }
        // The entry with the name already exists.
        throw createDOMError(FileErrorToDomError.PATH_EXISTS_ERR);
    }
    catch (error) {
        throw getRenameErrorMessage(error, entry, newName);
    }
}
/**
 * Converts DOMError response from renameEntry() to error message.
 */
function getRenameErrorMessage(error, entry, newName) {
    if (error &&
        (error.name === FileErrorToDomError.PATH_EXISTS_ERR ||
            error.name === FileErrorToDomError.TYPE_MISMATCH_ERR)) {
        // Check the existing entry is file or not.
        // 1) If the entry is a file:
        //   a) If we get PATH_EXISTS_ERR, a file exists.
        //   b) If we get TYPE_MISMATCH_ERR, a directory exists.
        // 2) If the entry is a directory:
        //   a) If we get PATH_EXISTS_ERR, a directory exists.
        //   b) If we get TYPE_MISMATCH_ERR, a file exists.
        return Error(strf((entry.isFile && error.name === FileErrorToDomError.PATH_EXISTS_ERR) ||
            (!entry.isFile &&
                error.name === FileErrorToDomError.TYPE_MISMATCH_ERR) ?
            'FILE_ALREADY_EXISTS' :
            'DIRECTORY_ALREADY_EXISTS', newName));
    }
    return Error(strf('ERROR_RENAMING', entry.name, getFileErrorString(error.name)));
}

export { assertNotReached$1 as $, AsyncQueue as A, isSameFileSystem as B, COMPUTERS_DIRECTORY_NAME as C, isSameEntry as D, isFakeEntry as E, FakeEntryImpl as F, getRootType as G, SHARED_DRIVES_DIRECTORY_PATH as H, isTeamDriveRoot as I, COMPUTERS_DIRECTORY_PATH as J, isComputersRoot as K, getRootTypeFromVolumeType as L, getMediaViewRootTypeFromVolumeId as M, NativeEventTarget as N, MediaViewRootType as O, timeoutPromise as P, addVolume as Q, RootType as R, SHARED_DRIVES_DIRECTORY_NAME as S, recordInterval as T, VOLUME_ALREADY_MOUNTED as U, VolumeType as V, isInGuestMode as W, getDirectory as X, ARCHIVE_OPENED_EVENT_TYPE as Y, Source as Z, __decorate$1 as _, requestUpdateOnAriaChange as a, convertToKebabCase as a$, descriptorEqual as a0, XfBase as a1, isCrosComponentsEnabled as a2, DialogType as a3, isFuseBoxDebugEnabled as a4, AllowedPaths as a5, isNative as a6, parseTrashInfoFiles as a7, recordMediumCount as a8, isFileEntry as a9, CROSTINI_CONNECT_ERR as aA, mountGuest as aB, LIST_CONTAINER_METADATA_PREFETCH_PROPERTY_NAMES as aC, ACTIONS_MODEL_METADATA_PREFETCH_PROPERTY_NAMES as aD, FILE_SELECTION_METADATA_PREFETCH_PROPERTY_NAMES as aE, DLP_METADATA_PREFETCH_PROPERTY_NAMES as aF, ConcurrentQueue as aG, isType as aH, dispatchPropertyChange as aI, Aggregator as aJ, PropStatus as aK, recordUserAction as aL, FileSystemType as aM, getVolumeTypeFromRootType as aN, convertURLsToEntries as aO, isNativeEntry as aP, isOneDriveId as aQ, getFileData as aR, getVolume as aS, getMyFiles as aT, changeDirectory as aU, getEntryLabel as aV, clearSearch as aW, isGuestOs as aX, updateSearch as aY, crInjectTypeAndInit as aZ, boolAttrSetter as a_, isDirectoryEntry as aa, getLocaleBasedWeekStart as ab, SearchRecency as ac, getMediaType as ad, isImage as ae, isVideo as af, isRaw as ag, isPDF as ah, getType as ai, getContentMetadata as aj, testSendMessage as ak, getContentMimeType as al, isDlpEnabled as am, getDlpMetadata as an, entriesToURLs as ao, isTrashEntry as ap, compareName as aq, compareLabel as ar, collator as as, dispatchSimpleEvent as at, createDOMError as au, FileErrorToDomError as av, getDefaultSearchOptions as aw, readEntriesRecursively as ax, isDriveRootType as ay, SearchLocation as az, isActivationClick as b, mouseEnterMaybeShowTooltip as b$, domAttrSetter as b0, assertInstanceof$1 as b1, CrButtonElement as b2, isTreeItem as b3, isXfTree as b4, handleTreeSlotChange as b5, refreshNavigationRoots as b6, NavigationType as b7, isVolumeEntry as b8, isOneDrive as b9, recordBoolean as bA, updateSelection as bB, isEncrypted as bC, refreshFolderShortcut as bD, recordSmallCount as bE, getPreferences as bF, comparePath as bG, addFolderShortcut as bH, removeFolderShortcut as bI, Group as bJ, addAndroidApps as bK, assertNotReached as bL, EntryList as bM, isGuestOsEnabled as bN, isArcVmEnabled as bO, isSinglePartitionFormatEnabled as bP, getPropertyDescriptor as bQ, PropertyKind as bR, assertInstanceof as bS, isSharedDriveEntry as bT, isComputersEntry as bU, isDescendantEntry as bV, getIconOverrides as bW, compareLabelAndGroupBottomEntries as bX, iconSetToCSSBackgroundImageValue as bY, shouldProvideIcons as bZ, FocusOutlineManager as b_, isDriveRootEntryList as ba, ICON_TYPES as bb, shouldSupportDriveSpecificIcons as bc, vmTypeToIconName as bd, isMyFilesEntry as be, readSubDirectoriesToCheckDirectoryChildren as bf, updateFileData as bg, readSubDirectories as bh, shouldDelayLoadingChildren as bi, isEntryScannable as bj, RootTypesForUMA as bk, maybeShowTooltip as bl, convertEntryToFileData as bm, isEntryInsideDrive as bn, isGrandRootEntryInDrives as bo, getEntry$1 as bp, driveRootEntryListKey as bq, VolumeEntry as br, traverseAndExpandPathEntries as bs, getTrustedHTML as bt, isNewDirectoryTreeEnabled as bu, storage as bv, isSameVolume as bw, FSP_ACTION_HIDDEN_ONEDRIVE_URL as bx, FSP_ACTION_HIDDEN_ONEDRIVE_USER_EMAIL as by, FSP_ACTION_HIDDEN_ONEDRIVE_REAUTHENTICATION_REQUIRED as bz, assert as c, getFilesData as c$, getCrActionMenuTop as c0, SEARCH_RESULTS_KEY as c1, getVolumeType as c2, XfCloudPanel as c3, canBulkPinningCloudPanelShow as c4, CloudPanelType as c5, queryRequiredElement as c6, isSearchEmpty as c7, PathComponent as c8, bytesToString as c9, isDirectoryTreeItem as cA, isTrashRoot as cB, isNonModifiable as cC, isRecentArcEntry as cD, getHoldingSpaceState as cE, getDlpRestrictionDetails as cF, getExtension as cG, isMirrorSyncEnabled as cH, DEFAULT_BRUSCHETTA_VM as cI, addUiEntry as cJ, removeUiEntry as cK, crostiniPlaceHolderKey as cL, UserCanceledError as cM, validateEntryName as cN, renameEntry as cO, readSubDirectoriesForRenamedEntry as cP, getODFSMetadataQueryEntry as cQ, updateIsInteractiveVolume as cR, getDisallowedTransfers as cS, htmlEscape as cT, isSiblingEntry as cU, grantAccess as cV, getParentEntry as cW, getFile as cX, updateMetadata as cY, TaskHistory as cZ, EventType as c_, recordValue as ca, PHOTOS_DOCUMENTS_PROVIDER_VOLUME_ID as cb, DEFAULT_CROSTINI_VM as cc, PLUGIN_VM as cd, isGoogleOneOfferFilesBannerEligibleAndEnabled as ce, getTeamDriveName as cf, getDriveQuotaMetadata as cg, getSizeStats as ch, isNullOrUndefined as ci, queryDecoratedElement as cj, getFilesAppModalDialogInstance as ck, jsSetter as cl, getFileTypeForName as cm, getKeyModifiers as cn, getCurrentLocaleOrDefault as co, isAudio as cp, getIcon as cq, secondsToRemainingTimeString as cr, PanelType as cs, getFocusedTreeItem as ct, getTreeItemEntry as cu, isRecentRoot as cv, isInteractiveVolume as cw, isTeamDrivesGrandRoot as cx, isTrashRootType as cy, isDirectoryTree as cz, dispatchActivationClick as d, fetchFileTasks as d0, getMimeType as d1, recordDirectoryListLoadWithTolerance as d2, waitForState as d3, getDefaultTask as d4, getFileTasks as d5, INSTALL_LINUX_PACKAGE_TASK_DESCRIPTOR as d6, annotateTasks as d7, recordTime as d8, parseActionId as d9, updateDeviceConnectionState as dA, trashRootKey as dB, PaperRippleMixin as dC, validateExternalDriveName as dD, isFilesAppId as da, splitExtension as db, LEGACY_FILES_EXTENSION_ID as dc, executeTask as dd, isTeleported as de, makeTaskID as df, extractFilePath as dg, USER_CANCELLED as dh, createChild as di, listMountableGuests as dj, GuestOsPlaceholder as dk, toSandboxedURL as dl, validateFileName as dm, updateDirectoryContent as dn, getLastVisitedURL as dp, getBulkPinProgress as dq, updateBulkPinProgress as dr, getEmptyState as ds, setLaunchParameters as dt, runningInBrowser as du, getDialogCaller as dv, getDlpBlockedComponents as dw, updatePreferences as dx, getDriveConnectionState as dy, updateDriveConnectionStatus as dz, RateLimiter as e, urlToEntry as f, getStore as g, strf as h, internals as i, str as j, startIOTask as k, checkAPIError as l, mixinElementInternals as m, getFileErrorString as n, openWindow as o, isRecentRootType as p, isDriveFsBulkPinningEnabled as q, recordEnum as r, startInterval as s, toFilesAppURL as t, unwrapEntry as u, visitURL as v, assert$1 as w, promisify as x, VolumeError as y, removeVolume as z };
//# sourceMappingURL=shared.rollup.js.map

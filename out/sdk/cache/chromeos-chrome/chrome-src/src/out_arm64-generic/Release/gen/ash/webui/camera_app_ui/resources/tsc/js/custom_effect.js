// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as animation from './animation.js';
import { assertEnumVariant, assertExists, assertNotReached } from './assert.js';
import * as dom from './dom.js';
import { I18nString } from './i18n_string.js';
import { SvgWrapper } from './lit/components/svg-wrapper.js';
import * as loadTimeData from './models/load_time_data.js';
import * as state from './state.js';
import { PerfEvent } from './type.js';
import * as util from './util.js';
/**
 * Interval of emerge time between two consecutive ripples in milliseconds.
 */
const RIPPLE_INTERVAL_MS = 5000;
/**
 * Controller for showing ripple effect.
 */
class RippleEffect {
    /**
     * @param anchor Element to show ripple effect on.
     */
    constructor(anchor, parent = document.body) {
        this.anchor = anchor;
        this.parent = parent;
        const style = this.anchor.computedStyleMap();
        this.width = util.getStyleValueInPx(style, '--ripple-start-width');
        this.height = util.getStyleValueInPx(style, '--ripple-start-height');
        this.cancelHandle = setInterval(() => {
            this.addRipple();
        }, RIPPLE_INTERVAL_MS);
        this.addRipple();
    }
    addRipple() {
        const rect = this.anchor.getBoundingClientRect();
        if (rect.width === 0) {
            return;
        }
        const template = util.instantiateTemplate('#ripple-template');
        const ripple = dom.getFrom(template, '.ripple', HTMLDivElement);
        const style = ripple.attributeStyleMap;
        style.set('left', CSS.px(rect.left - (this.width - rect.width) / 2));
        style.set('top', CSS.px(rect.top - (this.height - rect.height) / 2));
        style.set('width', CSS.px(this.width));
        style.set('height', CSS.px(this.height));
        this.parent.appendChild(template);
        // We don't care about waiting for the single ripple animation to end
        // before returning.
        void animation.play(ripple).result.then(() => {
            ripple.remove();
        });
    }
    /**
     * Stops ripple effect.
     */
    stop() {
        clearInterval(this.cancelHandle);
    }
}
/**
 * Interval for toast updaing position.
 */
const TOAST_POSITION_UPDATE_MS = 500;
var PositionProperty;
(function (PositionProperty) {
    PositionProperty["BOTTOM"] = "bottom";
    PositionProperty["CENTER"] = "center";
    PositionProperty["LEFT"] = "left";
    PositionProperty["MIDDLE"] = "middle";
    PositionProperty["RIGHT"] = "right";
    PositionProperty["TOP"] = "top";
})(PositionProperty || (PositionProperty = {}));
export var IndicatorType;
(function (IndicatorType) {
    // NEW_FEATURE = 'new_feature',
})(IndicatorType || (IndicatorType = {}));
/**
 * Setup the required state observers to dismiss toasts when changing
 * modes/cameras.
 */
export function setup() {
    state.addObserver(PerfEvent.CAMERA_SWITCHING, (val) => {
        if (val) {
            hide();
        }
    });
    state.addObserver(PerfEvent.MODE_SWITCHING, (val) => {
        if (val) {
            hide();
        }
    });
    state.addObserver(state.State.STREAMING, (val) => {
        if (!val) {
            hide();
        }
    });
}
function getIndicatorI18nStringId(indicatorType) {
    switch (indicatorType) {
        default:
            assertNotReached();
    }
}
function getIndicatorIcon(indicatorType) {
    switch (indicatorType) {
        default:
            return 'new_feature_toast_icon.svg';
    }
}
function getOffsetProperties(element, prefix) {
    const properties = [];
    const style = element.computedStyleMap();
    function getPositionProperty(key) {
        const property = assertExists(style.get(key)).toString();
        return assertEnumVariant(PositionProperty, property);
    }
    for (const dir of ['x', 'y']) {
        const toastProperty = getPositionProperty(`--${prefix}-ref-${dir}`);
        const elProperty = getPositionProperty(`--${prefix}-element-ref-${dir}`);
        const offset = util.getStyleValueInPx(style, `--${prefix}-offset-${dir}`);
        properties.push({ elProperty, toastProperty, offset });
    }
    return properties;
}
function updatePositions(anchor, infos) {
    for (const { target, properties } of infos) {
        updatePosition(anchor, target, properties);
    }
}
function updatePosition(anchor, targetElement, properties) {
    const rect = anchor.getBoundingClientRect();
    const style = targetElement.attributeStyleMap;
    if (rect.width === 0) {
        style.set('display', 'none');
        return;
    }
    style.clear();
    for (const { elProperty, toastProperty, offset } of properties) {
        let value;
        if (elProperty === PositionProperty.CENTER) {
            value = rect.left + offset + rect.width / 2;
        }
        else if (elProperty === PositionProperty.MIDDLE) {
            value = rect.top + offset + rect.height / 2;
        }
        else {
            value = rect[elProperty] + offset;
        }
        if (toastProperty === PositionProperty.RIGHT) {
            value = window.innerWidth - value;
        }
        else if (toastProperty === PositionProperty.BOTTOM) {
            value = window.innerHeight - value;
        }
        style.set(toastProperty, CSS.px(value));
    }
}
/**
 * Controller for showing a toast.
 */
class Toast {
    constructor(anchor, template, toast, message, positionInfos, parent = document.body) {
        this.anchor = anchor;
        this.template = template;
        this.toast = toast;
        this.message = message;
        this.positionInfos = positionInfos;
        this.parent = parent;
        this.cancelHandle = setInterval(() => {
            updatePositions(anchor, positionInfos);
        }, TOAST_POSITION_UPDATE_MS);
        updatePositions(anchor, positionInfos);
    }
    show() {
        this.parent.appendChild(this.template);
    }
    focus() {
        this.anchor.setAttribute('aria-owns', 'new-feature-toast');
        this.toast.focus();
    }
    hide() {
        this.anchor.removeAttribute('aria-owns');
        clearInterval(this.cancelHandle);
        for (const { target } of this.positionInfos) {
            target.remove();
        }
    }
}
class NewFeatureToast extends Toast {
    constructor(anchor, parent) {
        const template = util.instantiateTemplate('#new-feature-toast-template');
        const toast = dom.getFrom(template, '#new-feature-toast', HTMLDivElement);
        const i18nId = assertEnumVariant(I18nString, anchor.getAttribute('i18n-new-feature'));
        const textElement = dom.getFrom(template, '.custom-toast-text', HTMLSpanElement);
        const text = loadTimeData.getI18nMessage(i18nId);
        textElement.textContent = text;
        super(anchor, template, toast, text, [{
                target: toast,
                properties: getOffsetProperties(anchor, 'toast'),
            }], parent);
    }
}
class IndicatorToast extends Toast {
    constructor(anchor, indicatorType, parent) {
        const template = util.instantiateTemplate('#indicator-toast-template');
        const toast = dom.getFrom(template, '#indicator-toast', HTMLDivElement);
        const i18nId = getIndicatorI18nStringId(indicatorType);
        const textElement = dom.getFrom(template, '.custom-toast-text', HTMLSpanElement);
        const text = loadTimeData.getI18nMessage(i18nId);
        textElement.textContent = text;
        toast.setAttribute('aria-label', text);
        const icon = getIndicatorIcon(indicatorType);
        const iconElement = dom.getFrom(template, '#indicator-icon', SvgWrapper);
        if (icon === null) {
            iconElement.hidden = true;
        }
        else {
            iconElement.name = icon;
            iconElement.hidden = false;
        }
        const indicatorDot = dom.getFrom(template, '#indicator-dot', HTMLDivElement);
        super(anchor, template, toast, text, [
            {
                target: toast,
                properties: getOffsetProperties(anchor, 'toast'),
            },
            {
                target: indicatorDot,
                properties: getOffsetProperties(anchor, 'indicator-dot'),
            },
        ], parent);
    }
}
let globalEffectPayload = null;
/**
 * Hides the specified effect or the effect being showing.
 */
export function hide(effectPayload) {
    if (effectPayload !== undefined) {
        stopEffect(effectPayload);
        if (effectPayload === globalEffectPayload) {
            globalEffectPayload = null;
        }
    }
    else if (globalEffectPayload !== null) {
        stopEffect(globalEffectPayload);
        globalEffectPayload = null;
    }
}
function stopEffect(effectPayload) {
    const { ripple, toast, timeout } = effectPayload;
    if (ripple !== null) {
        ripple.stop();
    }
    toast.hide();
    clearTimeout(timeout);
}
/**
 * Timeout for effects.
 */
const EFFECT_TIMEOUT_MS = 6000;
/**
 * Shows the new feature toast message and ripple around the `anchor` element.
 * The message to show is defined in HTML attribute and the relative position is
 * defined in CSS.
 *
 * @return Functions to hide the effect or focus the toast.
 */
export function showNewFeature(anchor, parent) {
    return show(new NewFeatureToast(anchor, parent), new RippleEffect(anchor, parent));
}
/**
 * Shows the indicator toast message and an indicator dot around the `anchor`
 * element. The message to show is given by `indicatorType` and the relative
 * position of the toast and dot are defined in CSS.
 *
 * @return Functions to hide the effect or focus the toast.
 */
export function showIndicator(anchor, indicatorType, parent) {
    return show(new IndicatorToast(anchor, indicatorType, parent));
}
/**
 * Shows the effects.
 *
 * @return Functions to hide the effect or focus the toast.
 */
function show(toast, ripple = null) {
    hide();
    const timeout = setTimeout(hide, EFFECT_TIMEOUT_MS);
    globalEffectPayload = { ripple, toast, timeout };
    toast.show();
    const originalEffectPayload = globalEffectPayload;
    return {
        hide: () => hide(originalEffectPayload),
        focusToast: () => toast.focus(),
    };
}
/**
 * @return If effect is showing.
 */
export function isShowing() {
    return globalEffectPayload !== null;
}
/**
 * Focuses to toast.
 */
export function focus() {
    if (globalEffectPayload === null) {
        return;
    }
    globalEffectPayload.toast.focus();
}

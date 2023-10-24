// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from './assert.js';
import * as dom from './dom.js';
/**
 * Wrapper element that shows tooltip.
 */
let tooltipElement = null;
/**
 * The element whose tooltip should be shown.
 */
let activeElement = null;
/**
 * Name of event triggered for positioning tooltip.
 */
export const TOOLTIP_POSITION_EVENT_NAME = 'tooltipposition';
/**
 * Positions tooltip relative to UI.
 *
 * @param rect UI's reference region.
 */
export function position(rect) {
    assert(tooltipElement !== null);
    const [edgeMargin, elementMargin] = [5, 8];
    let tooltipTop = rect.top - tooltipElement.offsetHeight - elementMargin;
    if (tooltipTop < edgeMargin) {
        tooltipTop = rect.bottom + elementMargin;
    }
    tooltipElement.style.top = tooltipTop + 'px';
    // Center over the active element but avoid touching edges.
    const activeElementCenter = rect.left + rect.width / 2;
    const left = Math.min(Math.max(activeElementCenter - tooltipElement.clientWidth / 2, edgeMargin), document.body.offsetWidth - tooltipElement.offsetWidth - edgeMargin);
    tooltipElement.style.left = Math.round(left) + 'px';
}
/**
 * Hides the shown tooltip.
 */
export function hide() {
    assert(tooltipElement !== null);
    activeElement = null;
    tooltipElement.textContent = '';
    tooltipElement.classList.remove('visible');
}
/**
 * Shows a tooltip over the active element.
 *
 * @param element Active element whose tooltip to be shown.
 */
function show(element) {
    assert(tooltipElement !== null);
    hide();
    let message = element.getAttribute('aria-label');
    if (element instanceof HTMLInputElement) {
        if (element.hasAttribute('tooltip-true') && element.checked) {
            message = element.getAttribute('tooltip-true');
        }
        if (element.hasAttribute('tooltip-false') && !element.checked) {
            message = element.getAttribute('tooltip-false');
        }
    }
    tooltipElement.textContent = message;
    activeElement = element;
    triggerPosition(element);
    tooltipElement.classList.add('visible');
}
/**
 * Sets up tooltips for elements.
 *
 * @param elements Elements whose tooltips to be shown.
 */
export function setupElements(elements) {
    for (const el of elements) {
        function hideHandler() {
            if (activeElement === el) {
                hide();
            }
        }
        function showHandler() {
            show(el);
        }
        el.addEventListener('mouseleave', hideHandler);
        el.addEventListener('click', hideHandler);
        el.addEventListener('blur', hideHandler);
        el.addEventListener('mouseenter', showHandler);
        el.addEventListener('focus', showHandler);
    }
}
/**
 *  Initializes the tooltips. This should be called before other methods.
 */
export function init() {
    tooltipElement = dom.get('#tooltip', HTMLElement);
    window.addEventListener('resize', () => {
        if (activeElement !== null) {
            triggerPosition(activeElement);
        }
    });
}
function triggerPosition(element) {
    const event = new CustomEvent(TOOLTIP_POSITION_EVENT_NAME, { cancelable: true });
    const doDefault = element.dispatchEvent(event);
    if (doDefault) {
        position(element.getBoundingClientRect());
    }
}

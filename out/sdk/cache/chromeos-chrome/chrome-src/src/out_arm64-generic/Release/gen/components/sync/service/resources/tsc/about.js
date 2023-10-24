// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/js/jstemplate_compiled.js';
import { assert } from 'chrome://resources/js/assert.js';
import { addWebUiListener, removeWebUiListener } from 'chrome://resources/js/cr.js';
import { requestDataAndRegisterForUpdates, requestStart, requestStopClearData, setIncludeSpecifics, triggerRefresh } from './chrome_sync.js';
export let aboutInfo = {};
// For tests
export function getAboutInfoForTest() {
    return aboutInfo;
}
let aboutInfoListener = null;
let entityCountsUpdatedListener = null;
function highlightIfChanged(node, oldVal, newVal) {
    const oldStr = oldVal.toString();
    const newStr = newVal.toString();
    if (oldStr !== '' && oldStr !== newStr) {
        // Note the addListener function does not end up creating duplicate
        // listeners.  There can be only one listener per event at a time.
        // Reference: https://developer.mozilla.org/en/DOM/element.addEventListener
        node.addEventListener('webkitAnimationEnd', function () {
            node.removeAttribute('highlighted');
        }, false);
        node.setAttribute('highlighted', '');
    }
}
function refreshAboutInfo(newAboutInfo) {
    aboutInfo = newAboutInfo;
    const aboutInfoDiv = document.querySelector('#about-info');
    assert(aboutInfoDiv);
    jstProcess(new JsEvalContext(aboutInfo), aboutInfoDiv);
}
function onEntityCountsUpdatedEvent(response) {
    if (!aboutInfo.type_status) {
        return;
    }
    for (const count of response.entityCounts) {
        const typeStatusRow = aboutInfo.type_status.find(row => row.name === count.modelType);
        if (typeStatusRow) {
            typeStatusRow.num_entries = count.entities;
            typeStatusRow.num_live = count.nonTombstoneEntities;
        }
    }
    const typeInfo = document.querySelector('#typeInfo');
    assert(typeInfo);
    jstProcess(new JsEvalContext({ type_status: aboutInfo.type_status }), typeInfo);
}
/**
 * Helper to determine if an element is scrolled to its bottom limit.
 * @param elem element to check
 * @return true if the element is scrolled to the bottom
 */
function isScrolledToBottom(elem) {
    return elem.scrollHeight - elem.scrollTop === elem.clientHeight;
}
/**
 * Helper to scroll an element to its bottom limit.
 */
function scrollToBottom(elem) {
    elem.scrollTop = elem.scrollHeight - elem.clientHeight;
}
/** Container for accumulated sync protocol events. */
const protocolEvents = [];
/** We may receive re-delivered events.  Keep a record of ones we've seen. */
const knownEventTimestamps = {};
/**
 * Callback for incoming protocol events.
 * @param response The protocol event response.
 */
function onReceivedProtocolEvent(response) {
    // Return early if we've seen this event before.  Assumes that timestamps
    // are sufficiently high resolution to uniquely identify an event.
    if (knownEventTimestamps.hasOwnProperty(response.time)) {
        return;
    }
    knownEventTimestamps[response.time] = true;
    protocolEvents.push(response);
    const trafficContainer = document.querySelector('#traffic-event-container');
    assert(trafficContainer);
    // Scroll to the bottom if we were already at the bottom.  Otherwise, leave
    // the scrollbar alone.
    const shouldScrollDown = isScrolledToBottom(trafficContainer);
    const context = new JsEvalContext({ events: protocolEvents });
    jstProcess(context, trafficContainer);
    if (shouldScrollDown) {
        scrollToBottom(trafficContainer);
    }
}
/**
 * Initializes state and callbacks for the protocol event log UI.
 */
function initProtocolEventLog() {
    const includeSpecificsCheckbox = document.querySelector('#capture-specifics');
    assert(includeSpecificsCheckbox);
    includeSpecificsCheckbox.addEventListener('change', () => {
        setIncludeSpecifics(includeSpecificsCheckbox.checked);
    });
    addWebUiListener('onProtocolEvent', onReceivedProtocolEvent);
    // Make the prototype jscontent element disappear.
    const container = document.querySelector('#traffic-event-container');
    assert(container);
    jstProcess({}, container);
    const triggerRefreshButton = document.querySelector('#trigger-refresh');
    assert(triggerRefreshButton);
    triggerRefreshButton.addEventListener('click', () => {
        triggerRefresh();
    });
}
/**
 * Initializes listeners for status dump and import UI.
 */
function initStatusDumpButton() {
    const statusData = document.querySelector('#status-data');
    assert(statusData);
    statusData.hidden = true;
    const dumpStatusButton = document.querySelector('#dump-status');
    assert(dumpStatusButton);
    dumpStatusButton.addEventListener('click', () => {
        const aboutInfoCopy = aboutInfo;
        const includeIds = document.querySelector('#include-ids');
        assert(includeIds);
        if (!includeIds.checked) {
            aboutInfoCopy.details = aboutInfo.details.filter(function (el) {
                return !el.is_sensitive;
            });
        }
        let data = '';
        data += new Date().toString() + '\n';
        data += '======\n';
        data += 'Status\n';
        data += '======\n';
        data += JSON.stringify(aboutInfoCopy, null, 2) + '\n';
        const statusText = document.querySelector('#status-text');
        assert(statusText);
        statusText.value = data;
        const statusData = document.querySelector('#status-data');
        assert(statusData);
        statusData.hidden = false;
    });
    const importStatusButton = document.querySelector('#import-status');
    assert(importStatusButton);
    importStatusButton.addEventListener('click', () => {
        const statusData = document.querySelector('#status-data');
        assert(statusData);
        statusData.hidden = false;
        const statusText = document.querySelector('#status-text');
        assert(statusText);
        if (statusText.value.length === 0) {
            statusText.value = 'Paste sync status dump here then click import.';
            return;
        }
        // First remove any characters before the '{'.
        let data = statusText.value;
        const firstBrace = data.indexOf('{');
        if (firstBrace < 0) {
            statusText.value = 'Invalid sync status dump.';
            return;
        }
        data = data.substr(firstBrace);
        // Remove listeners to prevent sync events from overwriting imported data.
        if (aboutInfoListener) {
            removeWebUiListener(aboutInfoListener);
            aboutInfoListener = null;
        }
        if (entityCountsUpdatedListener) {
            removeWebUiListener(entityCountsUpdatedListener);
            entityCountsUpdatedListener = null;
        }
        const aboutInfo = JSON.parse(data);
        refreshAboutInfo(aboutInfo);
    });
}
/**
 * Toggles the given traffic event entry div's "expanded" state.
 * @param e the click event that triggered the toggle.
 */
function expandListener(e) {
    if (e.target.classList.contains('proto')) {
        // We ignore proto clicks to keep it copyable.
        return;
    }
    let trafficEventDiv = e.target;
    // Click might be on div's child.
    if (trafficEventDiv.nodeName !== 'DIV' && trafficEventDiv.parentNode) {
        trafficEventDiv = trafficEventDiv.parentNode;
    }
    trafficEventDiv.classList.toggle('traffic-event-entry-expanded');
}
/**
 * Attaches a listener to the given traffic event entry div.
 * @param element the element to attach the listener to.
 */
function addAboutExpandListener(element) {
    element.addEventListener('click', expandListener, false);
}
function onLoad() {
    initStatusDumpButton();
    initProtocolEventLog();
    aboutInfoListener = addWebUiListener('onAboutInfoUpdated', refreshAboutInfo);
    entityCountsUpdatedListener =
        addWebUiListener('onEntityCountsUpdated', onEntityCountsUpdatedEvent);
    const requestStartEl = document.querySelector('#request-start');
    assert(requestStartEl);
    requestStartEl.addEventListener('click', requestStart);
    const requestStopClearDataEl = document.querySelector('#request-stop-clear-data');
    assert(requestStopClearDataEl);
    requestStopClearDataEl.addEventListener('click', requestStopClearData);
    // Request initial data for the page and listen to updates.
    requestDataAndRegisterForUpdates();
}
// For JS eval.
Object.assign(window, { addAboutExpandListener, highlightIfChanged });
document.addEventListener('DOMContentLoaded', onLoad, false);

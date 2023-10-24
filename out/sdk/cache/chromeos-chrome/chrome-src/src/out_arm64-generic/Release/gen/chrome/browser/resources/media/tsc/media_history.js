// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_tab_box/cr_tab_box.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { MediaDataTable } from './media_data_table.js';
import { MediaHistoryStore } from './media_history_store.mojom-webui.js';
// Allow a function to be provided by tests, which will be called when
// the page has been populated.
const mediaHistoryPageIsPopulatedResolver = new PromiseResolver();
function whenPageIsPopulatedForTest() {
    return mediaHistoryPageIsPopulatedResolver.promise;
}
Object.assign(window, { whenPageIsPopulatedForTest });
let store = null;
let statsTableBody = null;
let originsTable = null;
let playbacksTable = null;
let sessionsTable = null;
let delegate = null;
/**
 * Creates a single row in the stats table.
 * @param name The name of the table.
 * @param count The row count of the table.
 */
function createStatsRow(name, count) {
    const template = document.querySelector('#stats-row');
    assert(template);
    const td = template.content.querySelectorAll('td');
    td[0].textContent = name;
    td[1].textContent = count.toString();
    return document.importNode(template.content, true);
}
class MediaHistoryTableDelegate {
    /**
     * Formats a field to be displayed in the data table and inserts it into the
     * element.
     */
    insertDataField(td, data, key) {
        if (data === undefined || data === null) {
            return;
        }
        if (key === 'origin') {
            // Format a mojo origin.
            const { scheme, host, port } = data;
            td.textContent = new URL(`${scheme}://${host}:${port}`).origin;
        }
        else if (key === 'lastUpdatedTime') {
            // Format a JS timestamp.
            td.textContent = data ? new Date(data).toISOString() : '';
        }
        else if (key === 'cachedAudioVideoWatchtime' ||
            key === 'actualAudioVideoWatchtime' || key === 'watchtime' ||
            key === 'duration' || key === 'position') {
            // Format a mojo timedelta.
            const secs = (data.microseconds / 1000000);
            td.textContent =
                secs.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
        else if (key === 'url') {
            // Format a mojo GURL.
            td.textContent = data.url;
        }
        else if (key === 'hasAudio' || key === 'hasVideo') {
            // Format a boolean.
            td.textContent = data ? 'Yes' : 'No';
        }
        else if (key === 'title' || key === 'artist' || key === 'album' ||
            key === 'sourceTitle') {
            // Format a mojo string16.
            td.textContent = decodeString16(data);
        }
        else if (key === 'artwork') {
            // Format an array of mojo media images.
            data.forEach((image) => {
                const a = document.createElement('a');
                a.href = image.src.url;
                a.textContent = image.src.url;
                a.target = '_blank';
                td.appendChild(a);
                td.appendChild(document.createElement('br'));
            });
        }
        else {
            td.textContent = data;
        }
    }
    compareTableItem(sortKey, a, b) {
        const val1 = a[sortKey];
        const val2 = b[sortKey];
        // Compare the hosts of the origin ignoring schemes.
        if (sortKey === 'origin') {
            return val1.host > val2.host ? 1 :
                -1;
        }
        // Compare the url property.
        if (sortKey === 'url') {
            return val1.url > val2.url ? 1 : -1;
        }
        // Compare TimeDelta microseconds value.
        if (sortKey === 'cachedAudioVideoWatchtime' ||
            sortKey === 'actualAudioVideoWatchtime' || sortKey === 'watchtime' ||
            sortKey === 'duration' || sortKey === 'position') {
            return val1.microseconds -
                val2.microseconds;
        }
        if (sortKey.startsWith('metadata.')) {
            // Keys with a period denote nested objects.
            let nestedA = a;
            let nestedB = b;
            const expandedKey = sortKey.split('.');
            expandedKey.forEach((k) => {
                nestedA = nestedA[k];
                nestedB = nestedB[k];
            });
            return nestedA >
                nestedB ?
                1 :
                -1;
        }
        if (sortKey === 'lastUpdatedTime') {
            return val1 - val2;
        }
        assertNotReached('Unsupported sort key: ' + sortKey);
    }
}
/**
 * Parses utf16 coded string.
 */
function decodeString16(arr) {
    if (!arr) {
        return '';
    }
    return arr.data.map(ch => String.fromCodePoint(ch)).join('');
}
/**
 * Regenerates the stats table.
 * @param stats The stats for the Media
 *     History store.
 */
function renderStatsTable(stats) {
    assert(statsTableBody);
    statsTableBody.innerHTML =
        window.trustedTypes ? window.trustedTypes.emptyHTML : '';
    Object.keys(stats.tableRowCounts).forEach((key) => {
        statsTableBody.appendChild(createStatsRow(key, stats.tableRowCounts[key]));
    });
}
/**
 * @param name The name of the tab to show.
 */
function showTab(name) {
    assert(store);
    switch (name) {
        case 'stats':
            return store.getMediaHistoryStats().then(response => {
                renderStatsTable(response.stats);
                setSelectedTab(name);
            });
        case 'origins':
            return store.getMediaHistoryOriginRows().then(response => {
                assert(originsTable);
                originsTable.setData(response.rows);
                setSelectedTab(name);
            });
        case 'playbacks':
            return store.getMediaHistoryPlaybackRows().then(response => {
                assert(playbacksTable);
                playbacksTable.setData(response.rows);
                setSelectedTab(name);
            });
        case 'sessions':
            return store.getMediaHistoryPlaybackSessionRows().then(response => {
                assert(sessionsTable);
                sessionsTable.setData(response.rows);
                setSelectedTab(name);
            });
    }
    // Return an empty promise if there is no tab.
    return new Promise(() => { });
}
function setSelectedTab(id) {
    const tabbox = document.querySelector('cr-tab-box');
    assert(tabbox);
    const index = Array.from(tabbox.querySelectorAll('div[slot=\'tab\']'))
        .findIndex(tab => tab.id === id);
    tabbox.setAttribute('selected-index', `${index}`);
}
document.addEventListener('DOMContentLoaded', function () {
    store = MediaHistoryStore.getRemote();
    statsTableBody = document.querySelector('#stats-table-body');
    delegate = new MediaHistoryTableDelegate();
    originsTable = new MediaDataTable(document.querySelector('#origins-table'), delegate);
    playbacksTable = new MediaDataTable(document.querySelector('#playbacks-table'), delegate);
    sessionsTable = new MediaDataTable(document.querySelector('#sessions-table'), delegate);
    // Allow tabs to be navigated to by fragment. The fragment with be of the
    // format "#tab-<tab id>".
    window.onhashchange = function () {
        showTab(window.location.hash.substr(5));
    };
    const tabBox = document.querySelector('cr-tab-box');
    assert(tabBox);
    // Default to the stats tab.
    if (!window.location.hash.substr(5)) {
        window.location.hash = 'tab-stats';
        // Show the tab box.
        tabBox.style.display = 'block';
    }
    else {
        showTab(window.location.hash.substr(5)).then(() => {
            // Show the tab box.
            tabBox.style.display = 'block';
            mediaHistoryPageIsPopulatedResolver.resolve();
        });
    }
    // When the tab updates, update the anchor.
    tabBox.addEventListener('selected-index-change', function (e) {
        const tabbox = document.querySelector('cr-tab-box');
        assert(tabbox);
        const tabs = tabbox.querySelectorAll('div[slot=\'tab\']');
        const selectedTab = tabs[e.detail];
        window.location.hash = 'tab-' + selectedTab.id;
    }, true);
    // Add handler to 'copy all to clipboard' button.
    const copyAllToClipboardButtons = document.querySelectorAll('.copy-all-to-clipboard');
    copyAllToClipboardButtons.forEach((button) => {
        button.addEventListener('click', () => {
            // Make sure nothing is selected.
            window.getSelection().removeAllRanges();
            document.execCommand('selectAll');
            document.execCommand('copy');
            // And deselect everything at the end.
            window.getSelection().removeAllRanges();
        });
    });
});

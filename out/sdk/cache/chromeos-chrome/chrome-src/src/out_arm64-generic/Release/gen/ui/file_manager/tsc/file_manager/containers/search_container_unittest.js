// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { CrInputElement } from 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { getTrustedHTML } from 'chrome://resources/js/static_types.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chromeos/chai_assert.js';
import { EntryLocation } from '../background/js/entry_location_impl.js';
import { RootType } from '../common/js/volume_manager_types.js';
import { clearSearch, getDefaultSearchOptions, updateSearch } from '../state/ducks/search.js';
import { waitDeepEquals } from '../state/for_tests.js';
import { PropStatus } from '../state/state.js';
import { getEmptyState, getStore } from '../state/store.js';
import { SearchContainer } from './search_container.js';
class TestA11yAnnouncer {
    constructor() {
        this.messages = [];
    }
    speakA11yMessage(message) {
        this.messages.push(message);
    }
}
let store;
let searchContainer;
const a11y = new TestA11yAnnouncer();
/**
 * Creates a store if necessary. Initializes it to an empty state.
 */
function setupStore() {
    if (store === undefined) {
        store = getStore();
    }
    store.init(getEmptyState());
}
/**
 * Creates a search container if necessary.
 */
function setupSearchContainer() {
    if (searchContainer === undefined) {
        const volumeManager = {
            getLocationInfo: (_entry) => {
                return new EntryLocation(null, RootType.DOWNLOADS, true, true);
            },
        };
        searchContainer = new SearchContainer(volumeManager, document.querySelector('#search-wrapper'), document.querySelector('#options-container'), document.querySelector('#path-container'), a11y);
    }
}
/**
 * Creates new <search-container> element for each test.
 */
export function setUp() {
    document.body.innerHTML = getTrustedHTML `
    <div id="root">
      <div id="search-wrapper" collapsed>
        <cr-button id="search-button" tabindex="0">Open</cr-button>
        <div id="search-box">
          <cr-input type="search" disabled placeholder="Search">
            <cr-button class="clear" slot="suffix" tabindex="0" has-tooltip>
              Search
            </cr-button>
          </cr-input>
        </div>
        <div id="options-container"></div>
        <div id="path-container"></div>
      </div>
    </div>`;
    setupStore();
    setupSearchContainer();
}
export function tearDown() {
    // Clears accessibility message from the previous test.
    a11y.messages = [];
}
/**
 * Checks that manually entering a query (simulated here by setting value and
 * posint an input event) correctly propagates the state to the store.
 */
export async function testQueryUpdated() {
    // Manually open the search container; without this the container is in the
    // closed state and does not clean up query or option values on close.
    searchContainer.openSearch();
    // Test 1: Enter a query.
    const input = document.querySelector('cr-input');
    input.value = 'hello';
    input.dispatchEvent(new Event('input', {
        bubbles: true,
        cancelable: true,
    }));
    const want1 = {
        query: 'hello',
        status: undefined,
        options: getDefaultSearchOptions(),
    };
    await waitDeepEquals(store, want1, (state) => {
        return state.search;
    });
    // Test 2: Clear the query.
    searchContainer.clear();
    const want2 = {
        query: undefined,
        status: undefined,
        options: undefined,
    };
    await waitDeepEquals(store, want2, (state) => {
        return state.search;
    });
}
/**
 * Checks that store changes correctly result in opening and closing of the
 * search box.
 */
export async function testOpenAndClose() {
    assertFalse(searchContainer.isOpen());
    store.dispatch(updateSearch({
        query: 'hello',
        status: undefined,
        options: getDefaultSearchOptions(),
    }));
    assertTrue(searchContainer.isOpen());
    store.dispatch(clearSearch());
    assertFalse(searchContainer.isOpen());
    // No results appeared so expect just one message about search being closed.
    assertEquals(1, a11y.messages.length);
    assertEquals('Search text cleared, showing all files and folders.', a11y.messages[0]);
}
export async function testNoResultFoundAnnouncement() {
    // Start a file search with the query 'hello'.
    store.dispatch(updateSearch({
        query: 'hello',
        status: undefined,
        options: getDefaultSearchOptions(),
    }));
    // Wait for the store to update its state.
    const want1 = {
        query: 'hello',
        status: undefined,
        options: getDefaultSearchOptions(),
    };
    await waitDeepEquals(store, want1, (state) => {
        return state.search;
    });
    // Fake a successful search.
    store.dispatch(updateSearch({
        query: 'hello',
        status: PropStatus.SUCCESS,
        options: getDefaultSearchOptions(),
    }));
    const want2 = {
        query: 'hello',
        status: PropStatus.SUCCESS,
        options: getDefaultSearchOptions(),
    };
    await waitDeepEquals(store, want2, (state) => {
        return state.search;
    });
    assertEquals(1, a11y.messages.length);
    assertEquals('There are no results for hello.', a11y.messages[0]);
}

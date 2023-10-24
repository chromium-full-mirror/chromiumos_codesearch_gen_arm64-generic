// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// 
import './strings.m.js';
import './experiment.js';
import { assert } from 'chrome://resources/js/assert.js';
import { CustomElement } from 'chrome://resources/js/custom_element.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { getDeepActiveElement } from 'chrome://resources/js/util_ts.js';
import { getTemplate } from './app.html.js';
import { FlagsBrowserProxyImpl } from './flags_browser_proxy.js';
/**
 * Handles in page searching. Matches against the experiment flag name.
 */
export class FlagSearch {
    constructor(el) {
        this.initialized = false;
        this.searchIntervalId = null;
        // Delay in ms following a keypress, before a search is made.
        this.searchDebounceDelayMs = 150;
        this.flagsAppElement = el;
        this.searchBox =
            this.flagsAppElement.getRequiredElement('#search');
        this.noMatchMsg = this.flagsAppElement.$all('.tab-content .no-match');
    }
    /**
     * Initialises the in page search. Adds searchbox listeners and
     * collates the text elements used for string matching.
     */
    init() {
        if (this.initialized) {
            return;
        }
        this.searchBox.addEventListener('input', this.debounceSearch.bind(this));
        this.flagsAppElement.getRequiredElement('.clear-search')
            .addEventListener('click', this.clearSearch.bind(this));
        window.addEventListener('keyup', e => {
            // Check for an active textarea inside a <flags-experiment>.
            const activeElement = getDeepActiveElement();
            if (activeElement && activeElement.nodeName === 'TEXTAREA') {
                return;
            }
            switch (e.key) {
                case '/':
                    this.searchBox.focus();
                    break;
                case 'Escape':
                case 'Enter':
                    this.searchBox.blur();
                    break;
            }
        });
        this.searchBox.focus();
        this.initialized = true;
    }
    /**
     * Clears a search showing all experiments.
     */
    clearSearch() {
        this.searchBox.value = '';
        this.doSearch();
    }
    /**
     * Goes through all experiment text and highlights the relevant matches.
     * Only the first instance of a match in each experiment text block is
     * highlighted. This prevents the sea of yellow that happens using the
     * global find in page search.
     * @param experiments The list of elements to search on and highlight.
     * @param searchTerm The query to search for.
     * @return The number of matches found.
     */
    highlightAllMatches(experiments, searchTerm) {
        let matches = 0;
        for (const experiment of experiments) {
            const hasMatch = experiment.match(searchTerm);
            matches += hasMatch ? 1 : 0;
            experiment.classList.toggle('hidden', !hasMatch);
        }
        return matches;
    }
    /**
     * Performs a search against the experiment title, description, permalink.
     */
    async doSearch() {
        const searchTerm = this.searchBox.value.trim().toLowerCase();
        if (searchTerm || searchTerm === '') {
            this.flagsAppElement.classList.toggle('searching', Boolean(searchTerm));
            // Available experiments
            const availableExperiments = this.flagsAppElement.$all('#tab-content-available flags-experiment');
            assert(this.noMatchMsg[0]);
            this.noMatchMsg[0].classList.toggle('hidden', this.highlightAllMatches(availableExperiments, searchTerm) > 0);
            // 
            // Unavailable experiments, which are undefined on iOS.
            const unavailableExperiments = this.flagsAppElement.$all('#tab-content-unavailable flags-experiment');
            assert(this.noMatchMsg[1]);
            this.noMatchMsg[1].classList.toggle('hidden', this.highlightAllMatches(unavailableExperiments, searchTerm) > 0);
            // 
            await this.announceSearchResults();
            this.flagsAppElement.dispatchEvent(new Event('search-finished-for-testing', {
                bubbles: true,
                composed: true,
            }));
        }
        this.searchIntervalId = null;
    }
    announceSearchResults() {
        const searchTerm = this.searchBox.value.trim().toLowerCase();
        if (!searchTerm) {
            return Promise.resolve();
        }
        const selectedTab = this.flagsAppElement.tabs.find(tab => tab.panelEl.classList.contains('selected'));
        const selectedTabId = selectedTab.panelEl.id;
        const queryString = `#${selectedTabId} flags-experiment:not(.hidden)`;
        const total = this.flagsAppElement.$all(queryString).length;
        if (total) {
            return this.flagsAppElement.announceStatus(total === 1 ?
                loadTimeData.getStringF('searchResultsSingular', searchTerm) :
                loadTimeData.getStringF('searchResultsPlural', total, searchTerm));
        }
        return Promise.resolve();
    }
    /**
     * Debounces the search to improve performance and prevent too many searches
     * from being initiated.
     */
    debounceSearch() {
        if (this.searchIntervalId) {
            clearTimeout(this.searchIntervalId);
        }
        this.searchIntervalId =
            setTimeout(this.doSearch.bind(this), this.searchDebounceDelayMs);
    }
    setSearchDebounceDelayMsForTesting(delay) {
        this.searchDebounceDelayMs = delay;
    }
}
export class FlagsAppElement extends CustomElement {
    constructor() {
        super(...arguments);
        this.announceStatusDelayMs = 100;
        this.featuresResolver = new PromiseResolver();
        this.flagSearch = new FlagSearch(this);
        this.lastChanged = null;
        // 
        this.lastFocused = null;
        this.restartButton = this.getRequiredElement('#experiment-restart-button');
        // 
        this.tabs = [
            {
                tabEl: this.getRequiredElement('#tab-available'),
                panelEl: this.getRequiredElement('#tab-content-available'),
            },
            // 
            {
                tabEl: this.getRequiredElement('#tab-unavailable'),
                panelEl: this.getRequiredElement('#tab-content-unavailable'),
            },
            // 
        ];
        // 
    }
    static get is() {
        return 'flags-app';
    }
    static get template() {
        return getTemplate();
    }
    connectedCallback() {
        // Get and display the data upon loading.
        this.requestExperimentalFeaturesData();
        // There is no restart button on iOS.
        // 
        this.setupRestartButton();
        // 
        FocusOutlineManager.forDocument(document);
        // Update the highlighted flag when the hash changes.
        window.addEventListener('hashchange', () => this.highlightReferencedFlag);
    }
    setAnnounceStatusDelayMsForTesting(delay) {
        this.announceStatusDelayMs = delay;
    }
    setSearchDebounceDelayMsForTesting(delay) {
        this.flagSearch.setSearchDebounceDelayMsForTesting(delay);
    }
    experimentalFeaturesReadyForTesting() {
        return this.featuresResolver.promise;
    }
    /**
     * Cause a text string to be announced by screen readers
     * @param text The text that should be announced.
     */
    announceStatus(text) {
        return new Promise((resolve) => {
            this.getRequiredElement('#screen-reader-status-message').textContent = '';
            setTimeout(() => {
                this.getRequiredElement('#screen-reader-status-message').textContent =
                    text;
                resolve();
            }, this.announceStatusDelayMs);
        });
    }
    /**
     * Toggles necessary attributes to display selected tab.
     */
    selectTab(selectedTabEl) {
        for (const tab of this.tabs) {
            const isSelectedTab = tab.tabEl === selectedTabEl;
            tab.tabEl.classList.toggle('selected', isSelectedTab);
            tab.tabEl.setAttribute('aria-selected', String(isSelectedTab));
            tab.panelEl.classList.toggle('selected', isSelectedTab);
        }
    }
    /**
     * Takes the |experimentalFeaturesData| input argument which represents data
     * about all the current feature entries and populates the page with
     * that data. It expects an object structure like the above.
     * @param experimentalFeaturesData Information about all experiments.
     */
    render(experimentalFeaturesData) {
        const defaultFeatures = [];
        const nonDefaultFeatures = [];
        experimentalFeaturesData.supportedFeatures.forEach(f => (f.is_default ? defaultFeatures : nonDefaultFeatures).push(f));
        this.renderExperiments(nonDefaultFeatures, this.getRequiredElement('#non-default-experiments'));
        this.renderExperiments(defaultFeatures, this.getRequiredElement('#default-experiments'));
        // 
        this.renderExperiments(experimentalFeaturesData.unsupportedFeatures, this.getRequiredElement('#unavailable-experiments'), true);
        // 
        this.showRestartToast(experimentalFeaturesData.needsRestart);
        // 
        this.restartButton.onclick = () => FlagsBrowserProxyImpl.getInstance().restartBrowser();
        // 
        // Tab panel selection.
        for (const tab of this.tabs) {
            tab.tabEl.addEventListener('click', e => {
                e.preventDefault();
                this.selectTab(tab.tabEl);
            });
        }
        const resetAllButton = this.getRequiredElement('#experiment-reset-all');
        resetAllButton.onclick = () => {
            this.resetAllFlags();
            this.lastChanged = resetAllButton;
        };
        this.registerFocusEvents(resetAllButton);
        // 
        const crosUrlFlagsRedirectButton = this.getRequiredElement('#os-link-href');
        if (crosUrlFlagsRedirectButton) {
            crosUrlFlagsRedirectButton.onclick =
                FlagsBrowserProxyImpl.getInstance().crosUrlFlagsRedirect;
        }
        // 
        this.highlightReferencedFlag();
    }
    /**
     * Add events to an element in order to keep track of the last focused
     * element. Focus restart button if a previous focus target has been set and
     * tab key pressed.
     */
    registerFocusEvents(el) {
        el.addEventListener('keydown', e => {
            if (this.lastChanged && e.key === 'Tab' && !e.shiftKey) {
                e.preventDefault();
                // 
                this.lastFocused = this.lastChanged;
                this.restartButton.focus();
                // 
            }
        });
        el.addEventListener('blur', () => {
            this.lastChanged = null;
        });
    }
    /**
     * Highlight an element associated with the page's location's hash. We need to
     * fake fragment navigation with '.scrollIntoView()', since the fragment IDs
     * don't actually exist until after the template code runs; normal navigation
     * therefore doesn't work.
     */
    highlightReferencedFlag() {
        if (!window.location.hash) {
            return;
        }
        const experiment = this.shadowRoot.querySelector(window.location.hash);
        if (!experiment || experiment.classList.contains('referenced')) {
            return;
        }
        // Unhighlight whatever's highlighted.
        const previous = this.shadowRoot.querySelector('.referenced');
        if (previous) {
            previous.classList.remove('referenced');
        }
        // Highlight the referenced element.
        experiment.classList.add('referenced');
        // 
        // Switch to unavailable tab if the flag is in this section.
        if (this.getRequiredElement('#tab-content-unavailable')
            .contains(experiment)) {
            this.selectTab(this.getRequiredElement('#tab-unavailable'));
        }
        // 
        experiment.scrollIntoView();
    }
    /**
     * Gets details and configuration about the available features. The
     * |returnExperimentalFeatures()| will be called with reply.
     */
    requestExperimentalFeaturesData() {
        FlagsBrowserProxyImpl.getInstance().requestExperimentalFeatures().then(this.returnExperimentalFeatures.bind(this));
    }
    /** Reset all flags to their default values and refresh the UI. */
    resetAllFlags() {
        FlagsBrowserProxyImpl.getInstance().resetAllFlags();
        this.flagSearch.clearSearch();
        this.announceStatus(loadTimeData.getString('reset-acknowledged'));
        this.showRestartToast(true);
        this.requestExperimentalFeaturesData();
    }
    renderExperiments(features, container, unsupported = false) {
        const fragment = document.createDocumentFragment();
        for (const feature of features) {
            const experiment = document.createElement('flags-experiment');
            experiment.toggleAttribute('unsupported', unsupported);
            experiment.data = feature;
            experiment.id = feature.internal_name;
            const select = experiment.getSelect();
            if (select) {
                experiment.addEventListener('select-change', e => {
                    e.preventDefault();
                    this.showRestartToast(true);
                    this.lastChanged = select;
                });
                this.registerFocusEvents(select);
            }
            const textarea = experiment.getTextarea();
            if (textarea) {
                experiment.addEventListener('textarea-change', e => {
                    e.preventDefault();
                    this.showRestartToast(true);
                });
            }
            const textbox = experiment.getTextbox();
            if (textbox) {
                experiment.addEventListener('input-change', e => {
                    e.preventDefault();
                    this.showRestartToast(true);
                });
            }
            fragment.appendChild(experiment);
        }
        container.replaceChildren(fragment);
    }
    /**
     * Show the restart toast.
     * @param show Setting to toggle showing / hiding the toast.
     */
    showRestartToast(show) {
        this.getRequiredElement('#needs-restart').classList.toggle('show', show);
        // There is no restart button on iOS.
        // 
        this.restartButton.setAttribute('tabindex', show ? '9' : '-1');
        // 
        if (show) {
            this.getRequiredElement('#needs-restart').setAttribute('role', 'alert');
        }
    }
    /**
     * Called by the WebUI to re-populate the page with data representing the
     * current state of all experimental features.
     */
    returnExperimentalFeatures(experimentalFeaturesData) {
        const bodyContainer = this.getRequiredElement('#body-container');
        this.render(experimentalFeaturesData);
        if (experimentalFeaturesData.showBetaChannelPromotion) {
            this.getRequiredElement('#channel-promo-beta').hidden =
                false;
        }
        else if (experimentalFeaturesData.showDevChannelPromotion) {
            this.getRequiredElement('#channel-promo-dev').hidden =
                false;
        }
        this.getRequiredElement('#promos').hidden =
            !experimentalFeaturesData.showBetaChannelPromotion &&
                !experimentalFeaturesData.showDevChannelPromotion;
        bodyContainer.style.visibility = 'visible';
        this.flagSearch.init();
        const ownerWarningDiv = this.$('owner-warning');
        if (ownerWarningDiv) {
            ownerWarningDiv.hidden = !experimentalFeaturesData.showOwnerWarning;
        }
        const systemFlagsLinkDiv = this.$('os-link-container');
        if (systemFlagsLinkDiv && !experimentalFeaturesData.showSystemFlagsLink) {
            systemFlagsLinkDiv.style.display = 'none';
        }
        this.featuresResolver.resolve();
    }
    // 
    /**
     * Allows the restart button to jump back to the previously focused experiment
     * in the list instead of going to the top of the page.
     */
    setupRestartButton() {
        this.restartButton.addEventListener('keydown', e => {
            if (e.shiftKey && e.key === 'Tab' && this.lastFocused) {
                e.preventDefault();
                this.lastFocused.focus();
            }
        });
        this.restartButton.addEventListener('blur', () => {
            this.lastFocused = null;
        });
    }
}
customElements.define(FlagsAppElement.is, FlagsAppElement);

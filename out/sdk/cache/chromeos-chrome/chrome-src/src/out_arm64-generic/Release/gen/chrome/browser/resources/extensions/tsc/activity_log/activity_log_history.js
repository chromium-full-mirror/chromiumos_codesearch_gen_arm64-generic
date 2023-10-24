// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_search_field/cr_search_field.js';
import '../shared_style.css.js';
import './activity_log_history_item.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './activity_log_history.html.js';
/**
 * The different states the activity log page can be in. Initial state is
 * LOADING because we call the activity log API whenever a user navigates to
 * the page. LOADED is the state where the API call has returned a successful
 * result.
 */
export var ActivityLogPageState;
(function (ActivityLogPageState) {
    ActivityLogPageState["LOADING"] = "loading";
    ActivityLogPageState["LOADED"] = "loaded";
})(ActivityLogPageState || (ActivityLogPageState = {}));
/**
 * Content scripts activities do not have an API call, so we use the names of
 * the scripts executed (specified as a stringified JSON array in the args
 * field) as the keys for an activity group instead.
 */
function getActivityGroupKeysForContentScript(activity) {
    assert(activity.activityType ===
        chrome.activityLogPrivate.ExtensionActivityType.CONTENT_SCRIPT);
    if (!activity.args) {
        return [];
    }
    const parsedArgs = JSON.parse(activity.args);
    assert(Array.isArray(parsedArgs), 'Invalid API data.');
    return parsedArgs;
}
/**
 * Web request activities can have extra information which describes what the
 * web request does in more detail than just the api_call. This information
 * is in activity.other.webRequest and we use this to generate more activity
 * group keys if possible.
 */
function getActivityGroupKeysForWebRequest(activity) {
    assert(activity.activityType ===
        chrome.activityLogPrivate.ExtensionActivityType.WEB_REQUEST);
    const apiCall = activity.apiCall;
    const other = activity.other;
    if (!other || !other.webRequest) {
        return [apiCall];
    }
    const webRequest = JSON.parse(other.webRequest);
    assert(typeof webRequest === 'object', 'Invalid API data');
    // If there is extra information in the other.webRequest object,
    // construct a group for each consisting of the API call and each object key
    // in other.webRequest. Otherwise we default to just the API call.
    return Object.keys(webRequest).length === 0 ?
        [apiCall] :
        Object.keys(webRequest).map(field => `${apiCall} (${field})`);
}
/**
 * Group activity log entries by a key determined from each entry. Usually
 * this would be the activity's API call though content script and web
 * requests have different keys. We currently assume that every API call
 * matches to one activity type.
 */
function groupActivities(activityData) {
    const groupedActivities = new Map();
    for (const activity of activityData) {
        const activityId = activity.activityId;
        const activityType = activity.activityType;
        const count = activity.count;
        const pageUrl = activity.pageUrl;
        const isContentScript = activityType ===
            chrome.activityLogPrivate.ExtensionActivityType.CONTENT_SCRIPT;
        const isWebRequest = activityType ===
            chrome.activityLogPrivate.ExtensionActivityType.WEB_REQUEST;
        let activityGroupKeys = [activity.apiCall];
        if (isContentScript) {
            activityGroupKeys = getActivityGroupKeysForContentScript(activity);
        }
        else if (isWebRequest) {
            activityGroupKeys = getActivityGroupKeysForWebRequest(activity);
        }
        for (const key of activityGroupKeys) {
            if (!groupedActivities.has(key)) {
                const activityGroup = {
                    activityIds: new Set([activityId]),
                    key,
                    count,
                    activityType,
                    countsByUrl: pageUrl ? new Map([[pageUrl, count]]) : new Map(),
                    expanded: false,
                };
                groupedActivities.set(key, activityGroup);
            }
            else {
                const activityGroup = groupedActivities.get(key);
                activityGroup.activityIds.add(activityId);
                activityGroup.count += count;
                if (pageUrl) {
                    const currentCount = activityGroup.countsByUrl.get(pageUrl) || 0;
                    activityGroup.countsByUrl.set(pageUrl, currentCount + count);
                }
            }
        }
    }
    return groupedActivities;
}
/**
 * Sort activities by the total count for each activity group key. Resolve
 * ties by the alphabetical order of the key.
 */
function sortActivitiesByCallCount(groupedActivities) {
    return Array.from(groupedActivities.values()).sort((a, b) => {
        if (a.count !== b.count) {
            return b.count - a.count;
        }
        if (a.key < b.key) {
            return -1;
        }
        if (a.key > b.key) {
            return 1;
        }
        return 0;
    });
}
export class ActivityLogHistoryElement extends PolymerElement {
    static get is() {
        return 'activity-log-history';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            extensionId: String,
            delegate: Object,
            /**
             * An array representing the activity log. Stores activities grouped by
             * API call or content script name sorted in descending order of the call
             * count.
             */
            activityData_: {
                type: Array,
                value: () => [],
            },
            pageState_: {
                type: String,
                value: ActivityLogPageState.LOADING,
            },
            lastSearch_: {
                type: String,
                value: '',
            },
        };
    }
    constructor() {
        super();
        /**
         * A promise resolver for any external files waiting for the
         * GetExtensionActivity API call to finish.
         * Currently only used for extension_settings_browsertest.cc
         */
        this.dataFetchedResolver_ = null;
        /**
         * The stringified API response from the activityLogPrivate API with
         * individual activities sorted in ascending order by timestamp; used for
         * exporting the activity log.
         */
        this.rawActivities_ = '';
    }
    ready() {
        super.ready();
        this.addEventListener('delete-activity-log-item', e => this.deleteItem_(e));
    }
    setPageStateForTest(state) {
        this.pageState_ = state;
    }
    /**
     * Expose only the promise of dataFetchedResolver_.
     */
    whenDataFetched() {
        return this.dataFetchedResolver_.promise;
    }
    connectedCallback() {
        super.connectedCallback();
        this.dataFetchedResolver_ = new PromiseResolver();
        this.refreshActivities_();
    }
    shouldShowEmptyActivityLogMessage_() {
        return this.pageState_ === ActivityLogPageState.LOADED &&
            this.activityData_.length === 0;
    }
    shouldShowLoadingMessage_() {
        return this.pageState_ === ActivityLogPageState.LOADING;
    }
    shouldShowActivities_() {
        return this.pageState_ === ActivityLogPageState.LOADED &&
            this.activityData_.length > 0;
    }
    onClearActivitiesClick_() {
        this.delegate.deleteActivitiesFromExtension(this.extensionId).then(() => {
            this.processActivities_([]);
        });
    }
    onMoreActionsClick_() {
        const moreButton = this.shadowRoot.querySelector('cr-icon-button');
        assert(moreButton);
        this.shadowRoot.querySelector('cr-action-menu').showAt(moreButton);
    }
    expandItems_(expanded) {
        // Do not use .filter here as we need the original index of the item
        // in |activityData_|.
        this.activityData_.forEach((item, index) => {
            if (item.countsByUrl.size > 0) {
                this.set(`activityData_.${index}.expanded`, expanded);
            }
        });
        this.shadowRoot.querySelector('cr-action-menu').close();
    }
    onExpandAllClick_() {
        this.expandItems_(true);
    }
    onCollapseAllClick_() {
        this.expandItems_(false);
    }
    onExportClick_() {
        const fileName = `exported_activity_log_${this.extensionId}.json`;
        this.delegate.downloadActivities(this.rawActivities_, fileName);
    }
    deleteItem_(e) {
        const activityIds = e.detail;
        this.delegate.deleteActivitiesById(activityIds).then(() => {
            // It is possible for multiple activities displayed to have the same
            // underlying activity ID. This happens when we split content script and
            // web request activities by fields other than their API call. For
            // consistency, we will re-fetch the activity log.
            this.refreshActivities_();
        });
    }
    processActivities_(activityData) {
        this.pageState_ = ActivityLogPageState.LOADED;
        // Sort |activityData| in ascending order based on the activity's
        // timestamp; Used for |this.encodedRawActivities|.
        activityData.sort((a, b) => a.time - b.time);
        this.rawActivities_ = JSON.stringify(activityData);
        this.activityData_ =
            sortActivitiesByCallCount(groupActivities(activityData));
        if (!this.dataFetchedResolver_.isFulfilled) {
            this.dataFetchedResolver_.resolve();
        }
    }
    refreshActivities_() {
        if (this.lastSearch_ === '') {
            return this.getActivityLog_();
        }
        return this.getFilteredActivityLog_(this.lastSearch_);
    }
    getActivityLog_() {
        this.pageState_ = ActivityLogPageState.LOADING;
        return this.delegate.getExtensionActivityLog(this.extensionId)
            .then(result => {
            this.processActivities_(result.activities);
        });
    }
    getFilteredActivityLog_(searchTerm) {
        this.pageState_ = ActivityLogPageState.LOADING;
        return this.delegate
            .getFilteredExtensionActivityLog(this.extensionId, searchTerm)
            .then(result => {
            this.processActivities_(result.activities);
        });
    }
    onSearchChanged_(e) {
        // Remove all whitespaces from the search term, as API call names and
        // urls should not contain any whitespace. As of now, only single term
        // search queries are allowed.
        const searchTerm = e.detail.replace(/\s+/g, '');
        if (searchTerm === this.lastSearch_) {
            return;
        }
        this.lastSearch_ = searchTerm;
        this.refreshActivities_();
    }
}
customElements.define(ActivityLogHistoryElement.is, ActivityLogHistoryElement);

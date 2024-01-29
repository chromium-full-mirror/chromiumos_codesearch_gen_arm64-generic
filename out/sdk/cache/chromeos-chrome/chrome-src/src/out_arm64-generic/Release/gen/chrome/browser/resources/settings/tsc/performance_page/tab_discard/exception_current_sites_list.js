// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import '../../controls/settings_checkbox_list_entry.js';
import '../../settings_shared.css.js';
import '../../site_favicon.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { CrScrollableMixin } from 'chrome://resources/cr_elements/cr_scrollable_mixin.js';
import { ListPropertyUpdateMixin } from 'chrome://resources/cr_elements/list_property_update_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { convertDateToWindowsEpoch } from '../../time.js';
import { PerformanceBrowserProxyImpl } from '../performance_browser_proxy.js';
import { MemorySaverModeExceptionListAction, PerformanceMetricsProxyImpl } from '../performance_metrics_proxy.js';
import { getTemplate } from './exception_current_sites_list.html.js';
import { TAB_DISCARD_EXCEPTIONS_PREF } from './exception_validation_mixin.js';
const ExceptionCurrentSitesListElementBase = ListPropertyUpdateMixin(CrScrollableMixin(PrefsMixin(PolymerElement)));
export class ExceptionCurrentSitesListElement extends ExceptionCurrentSitesListElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = PerformanceBrowserProxyImpl.getInstance();
        this.metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
        this.updateIntervalID_ = undefined;
    }
    static get is() {
        return 'tab-discard-exception-current-sites-list';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            currentSites_: { type: Array, value: [] },
            selectedSites_: {
                type: Array,
                value() {
                    return new Set();
                },
            },
            submitDisabled: {
                type: Boolean,
                notify: true,
            },
            updateIntervalMS_: {
                type: Number,
                value: 1000,
            },
            // whether the current sites list is visible according to its parent
            visible: {
                type: Boolean,
                value: true,
                observer: 'onVisibilityChanged_',
            },
        };
    }
    async connectedCallback() {
        super.connectedCallback();
        await this.updateCurrentSites_();
        this.dispatchEvent(new CustomEvent('sites-populated', {
            detail: { length: this.currentSites_.length },
        }));
        this.onVisibilityChanged_();
        this.onVisibilityChangedListener_ = this.onVisibilityChanged_.bind(this);
        document.addEventListener('visibilitychange', this.onVisibilityChangedListener_);
    }
    disconnectedCallback() {
        document.removeEventListener('visibilitychange', this.onVisibilityChangedListener_);
        this.stopUpdatingCurrentSites_();
    }
    onVisibilityChanged_() {
        if (this.visible && document.visibilityState === 'visible') {
            this.startUpdatingCurrentSites_();
        }
        else {
            this.stopUpdatingCurrentSites_();
        }
    }
    startUpdatingCurrentSites_() {
        this.updateCurrentSites_().then(() => {
            if (this.updateIntervalID_ === undefined) {
                this.updateIntervalID_ = setInterval(this.updateCurrentSites_.bind(this), this.updateIntervalMS_);
            }
        });
    }
    stopUpdatingCurrentSites_() {
        if (this.updateIntervalID_ !== undefined) {
            clearInterval(this.updateIntervalID_);
            this.updateIntervalID_ = undefined;
        }
    }
    setUpdateIntervalForTesting(updateIntervalMS) {
        this.updateIntervalMS_ = updateIntervalMS;
        this.stopUpdatingCurrentSites_();
        this.startUpdatingCurrentSites_();
    }
    getIsUpdatingForTesting() {
        return this.updateIntervalID_ !== undefined;
    }
    async updateCurrentSites_() {
        const existingSites = new Set(Object.keys(this.getPref(TAB_DISCARD_EXCEPTIONS_PREF).value));
        const currentSites = (await this.browserProxy_.getCurrentOpenSites())
            .filter(rule => !existingSites.has(rule));
        // Remove sites from selected set that are no longer in the list.
        this.selectedSites_ =
            new Set(currentSites.filter(this.isSelectedSite_.bind(this)));
        this.computeSubmitDisabled_();
        this.updateList('currentSites_', x => x, currentSites);
        if (this.currentSites_.length) {
            this.updateScrollableContents();
        }
    }
    computeSubmitDisabled_() {
        this.submitDisabled = !this.selectedSites_.size;
    }
    // Convert iron-list index (0-indexed) to aria-posinset (1-indexed).
    getAriaPosinset_(index) {
        return index + 1;
    }
    // Called to recalculate checked status of entries when the site changes due
    // to list updates.
    isSelectedSite_(site) {
        return this.selectedSites_.has(site);
    }
    onToggleSelection_(e) {
        if (e.detail) {
            this.selectedSites_.add(e.model.item);
        }
        else {
            this.selectedSites_.delete(e.model.item);
        }
        this.computeSubmitDisabled_();
    }
    submit() {
        assert(!this.submitDisabled);
        this.selectedSites_.forEach(rule => {
            this.setPrefDictEntry(TAB_DISCARD_EXCEPTIONS_PREF, rule, convertDateToWindowsEpoch());
        });
        this.metricsProxy_.recordExceptionListAction(MemorySaverModeExceptionListAction.ADD_FROM_CURRENT);
    }
}
customElements.define(ExceptionCurrentSitesListElement.is, ExceptionCurrentSitesListElement);

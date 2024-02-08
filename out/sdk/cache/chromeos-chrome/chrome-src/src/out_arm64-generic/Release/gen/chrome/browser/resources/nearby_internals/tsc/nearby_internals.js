// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_tabs/cr_tabs.js';
import 'chrome://resources/polymer/v3_0/iron-location/iron-location.js';
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import './http_tab.js';
import './logging_tab.js';
import './contact_tab.js';
import './ui_trigger_tab.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './nearby_internals.html.js';
class NearbyInternalsElement extends PolymerElement {
    static get is() {
        return 'nearby-internals';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            selectedTabIndex_: {
                type: Number,
                value: 0,
                observer: 'selectedTabChanged_',
            },
            path_: {
                type: String,
                value: '',
                observer: 'pathChanged_',
            },
            tabNames_: {
                type: Array,
                value: () => ['Logs', 'HTTP Messages', 'Contacts', 'UI Triggers', 'Fast Pair'],
                readonly: true,
            },
        };
    }
    /**
     * Updates the current tab location to reflect selection change
     */
    selectedTabChanged_(newValue, oldValue) {
        if (!oldValue) {
            return;
        }
        const defaultTab = this.tabNames_[0].toLowerCase();
        const lowerCaseTabName = this.tabNames_[newValue].toLowerCase();
        this.path_ =
            '/' + (lowerCaseTabName === defaultTab ? '' : lowerCaseTabName);
    }
    /**
     * Returns the index of the currently selected tab corresponding to the
     * path or zero if no match.
     */
    selectedTabFromPath_(path) {
        const index = this.tabNames_.findIndex((tab) => path === tab.toLowerCase());
        if (index < 0) {
            return 0;
        }
        return index;
    }
    /**
     * Updates the selection property on path change.
     */
    pathChanged_(newValue) {
        this.selectedTabIndex_ =
            Number(this.selectedTabFromPath_(newValue.substr(1)));
    }
}
customElements.define(NearbyInternalsElement.is, NearbyInternalsElement);

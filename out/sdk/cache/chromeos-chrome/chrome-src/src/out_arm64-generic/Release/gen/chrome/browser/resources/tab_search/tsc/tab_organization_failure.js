// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './strings.m.js';
import './tab_organization_shared_style.css.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './tab_organization_failure.html.js';
import { TabOrganizationError } from './tab_search.mojom-webui.js';
// Failure state for the tab organization UI.
export class TabOrganizationFailureElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.error = TabOrganizationError.kNone;
    }
    static get is() {
        return 'tab-organization-failure';
    }
    static get properties() {
        return {
            error: Object,
            showFre: Boolean,
        };
    }
    static get template() {
        return getTemplate();
    }
    announceHeader() {
        this.$.header.textContent = '';
        this.$.header.textContent = this.getTitle_();
    }
    getTitle_() {
        switch (this.error) {
            case TabOrganizationError.kGrouping:
                return loadTimeData.getString('failureTitleGrouping');
            case TabOrganizationError.kGeneric:
                return loadTimeData.getString('failureTitleGeneric');
            default:
                return '';
        }
    }
    getBodyPreLink_() {
        switch (this.error) {
            case TabOrganizationError.kGrouping:
                return loadTimeData.getString('failureBodyGroupingPreLink');
            case TabOrganizationError.kGeneric:
                return loadTimeData.getString('failureBodyGenericPreLink');
            default:
                return '';
        }
    }
    getBodyLink_() {
        switch (this.error) {
            case TabOrganizationError.kGrouping:
                return loadTimeData.getString('failureBodyGroupingLink');
            case TabOrganizationError.kGeneric:
                return loadTimeData.getString('failureBodyGenericLink');
            default:
                return '';
        }
    }
    getBodyPostLink_() {
        switch (this.error) {
            case TabOrganizationError.kGrouping:
                return loadTimeData.getString('failureBodyGroupingPostLink');
            case TabOrganizationError.kGeneric:
                return loadTimeData.getString('failureBodyGenericPostLink');
            default:
                return '';
        }
    }
    onCheckNow_() {
        this.dispatchEvent(new CustomEvent('check-now', {
            bubbles: true,
            composed: true,
        }));
    }
    onCheckNowKeyDown_(event) {
        if (event.key === 'Enter') {
            this.onCheckNow_();
        }
    }
    onTipClick_() {
        this.dispatchEvent(new CustomEvent('tip-click', {
            bubbles: true,
            composed: true,
        }));
    }
    onTipKeyDown_(event) {
        if (event.key === 'Enter') {
            this.onTipClick_();
        }
    }
}
customElements.define(TabOrganizationFailureElement.is, TabOrganizationFailureElement);

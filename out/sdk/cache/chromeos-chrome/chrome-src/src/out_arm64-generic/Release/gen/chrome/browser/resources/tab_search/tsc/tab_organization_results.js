// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/mwb_shared_style.css.js';
import './tab_organization_shared_style.css.js';
import './tab_search_item.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { TabData, TabItemType } from './tab_data.js';
import { getTemplate } from './tab_organization_results.html.js';
export class TabOrganizationResultsElement extends PolymerElement {
    static get is() {
        return 'tab-organization-results';
    }
    static get properties() {
        return {
            tabs: Array,
            name: String,
            tabDatas_: {
                type: Array,
                value: () => [],
                computed: 'computeTabDatas_(tabs.*)',
            },
        };
    }
    static get template() {
        return getTemplate();
    }
    computeTabDatas_() {
        return this.tabs.map(tab => new TabData(tab, TabItemType.OPEN_TAB, new URL(tab.url.url).hostname));
    }
    onInputFocus_() {
        this.$.input.select();
    }
    onInputKeyDown_(event) {
        if (event.key === 'Enter') {
            event.stopPropagation();
            this.$.input.blur();
        }
    }
    onTabRemove_(event) {
        const index = this.tabDatas_.indexOf(event.model.item);
        this.splice('tabs', index, 1);
    }
    onCreateGroupClick_() {
        this.dispatchEvent(new CustomEvent('create-group-click', {
            bubbles: true,
            composed: true,
            detail: { name: this.name, tabs: this.tabs },
        }));
    }
}
customElements.define(TabOrganizationResultsElement.is, TabOrganizationResultsElement);

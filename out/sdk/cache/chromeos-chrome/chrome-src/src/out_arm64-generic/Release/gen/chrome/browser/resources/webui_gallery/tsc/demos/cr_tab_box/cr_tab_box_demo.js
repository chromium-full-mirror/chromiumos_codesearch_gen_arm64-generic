// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_tab_box/cr_tab_box.js';
import { assert } from '//resources/js/assert.js';
import { CustomElement } from '//resources/js/custom_element.js';
import { getTemplate } from './cr_tab_box_demo.html.js';
class CrTabBoxDemoElement extends CustomElement {
    static get is() {
        return 'cr-tab-box-demo';
    }
    static get template() {
        return getTemplate();
    }
    async connectedCallback() {
        this.tabBox_ = this.shadowRoot.querySelector('cr-tab-box');
        assert(this.tabBox_);
        this.tabBox_.addEventListener('selected-index-change', this.onSelectedIndexChange_.bind(this));
        const selectButton = this.shadowRoot.querySelector('.select-tab-one');
        assert(selectButton);
        selectButton.addEventListener('click', this.selectTabOne_.bind(this));
        const addTabButton = this.shadowRoot.querySelector('.add-tab');
        assert(addTabButton);
        addTabButton.addEventListener('click', () => this.addTabAt_(-1));
        const addTabAtOneButton = this.shadowRoot.querySelector('.add-tab-one');
        assert(addTabAtOneButton);
        addTabAtOneButton.addEventListener('click', () => this.addTabAt_(1));
        this.updateTabCount_();
    }
    onSelectedIndexChange_(e) {
        this.shadowRoot.querySelector('.selected-tab').textContent =
            e.detail.toString();
    }
    selectTabOne_() {
        assert(this.tabBox_);
        this.tabBox_.setAttribute('selected-index', '1');
    }
    addTabAt_(index) {
        const template = this.shadowRoot.querySelector('#template');
        assert(template);
        const clone = document.importNode(template.content, true);
        const tab = clone.querySelector('div[slot=\'tab\']');
        assert(tab);
        const text = index === -1 ? 'Added' : `Added at ${index}`;
        tab.textContent = text;
        assert(this.tabBox_);
        if (index === -1) {
            const firstPanel = this.tabBox_.querySelector('div[slot=\'panel\']');
            this.tabBox_.insertBefore(tab, firstPanel);
        }
        else {
            const tabs = this.tabBox_.querySelectorAll('div[slot=\'tab\']');
            assert(index < tabs.length);
            this.tabBox_.insertBefore(tab, tabs[index]);
        }
        const panel = clone.querySelector('div[slot=\'panel\']');
        assert(panel);
        panel.textContent = text;
        if (index === -1) {
            this.tabBox_.appendChild(panel);
        }
        else {
            const panels = this.tabBox_.querySelectorAll('div[slot=\'panel\']');
            this.tabBox_.insertBefore(panel, panels[index]);
        }
        this.updateTabCount_();
    }
    updateTabCount_() {
        assert(this.tabBox_);
        const tabs = this.tabBox_.querySelectorAll('div[slot=\'tab\']');
        this.shadowRoot.querySelector('.tab-count').textContent =
            tabs.length.toString();
    }
}
export const tagName = CrTabBoxDemoElement.is;
customElements.define(CrTabBoxDemoElement.is, CrTabBoxDemoElement);

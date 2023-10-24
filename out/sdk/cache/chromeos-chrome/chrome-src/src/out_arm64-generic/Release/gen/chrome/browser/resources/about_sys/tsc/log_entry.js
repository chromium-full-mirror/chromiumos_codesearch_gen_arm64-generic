// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './log_entry.html.js';
// 
// Link to markdown doc with documentation for Chrome OS.
const CROS_MD_DOC_URL = 'https://chromium.googlesource.com/chromiumos/platform2/+/HEAD/debugd/docs/log_entries.md';
// 
export class LogEntryElement extends PolymerElement {
    static get is() {
        return 'log-entry';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            log: Object,
            collapsible_: {
                type: Boolean,
                reflectToAttribute: true,
                computed: 'computeCollabsible_(log.statValue)',
            },
            collapsed: {
                type: Boolean,
                value: true,
                reflectToAttribute: true,
            },
        };
    }
    getHref_() {
        // Let URL be anchor to the section of this page by default.
        let urlPrefix = '';
        // 
        // Link to the markdown doc with documentation for the entry for Chrome OS
        // instead.
        urlPrefix = CROS_MD_DOC_URL;
        // 
        return `${urlPrefix}#${this.log.statName}`;
    }
    computeCollabsible_() {
        return this.log.statValue.length > 200;
    }
    onButtonClick_() {
        assert(this.collapsible_);
        this.collapsed = !this.collapsed;
    }
    getButtonText_() {
        return this.collapsed ? 'Expand…' : 'Collapse…';
    }
}
customElements.define(LogEntryElement.is, LogEntryElement);

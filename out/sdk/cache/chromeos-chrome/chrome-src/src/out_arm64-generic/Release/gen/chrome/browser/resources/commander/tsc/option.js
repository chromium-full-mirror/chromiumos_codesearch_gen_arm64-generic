// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './option.html.js';
export class CommanderOptionElement extends PolymerElement {
    static get is() {
        return 'commander-option';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            model: Object,
        };
    }
    /**
     * Splits this.model.title into a list of substrings, each marked with
     * whether they should be displayed as a match or not.
     */
    computeMatchSpans_() {
        const result = [];
        let firstNonmatch = 0;
        for (const r of this.model.matchedRanges) {
            const [start, end] = r;
            if (start !== 0) {
                result.push({
                    text: this.model.title.substring(firstNonmatch, start),
                    isMatch: false,
                });
            }
            result.push({ text: this.model.title.substring(start, end), isMatch: true });
            firstNonmatch = end;
        }
        if (firstNonmatch < this.model.title.length) {
            result.push({ text: this.model.title.substring(firstNonmatch), isMatch: false });
        }
        return result;
    }
    getClassForMatch_(isMatch) {
        return isMatch ? 'match' : '';
    }
}
customElements.define(CommanderOptionElement.is, CommanderOptionElement);

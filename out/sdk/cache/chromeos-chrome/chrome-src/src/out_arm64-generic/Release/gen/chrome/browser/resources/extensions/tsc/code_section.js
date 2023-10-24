// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
import './strings.m.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './code_section.html.js';
function visibleLineCount(totalCount, oppositeCount) {
    // We limit the number of lines shown for DOM performance.
    const MAX_VISIBLE_LINES = 1000;
    const max = Math.max(MAX_VISIBLE_LINES / 2, MAX_VISIBLE_LINES - oppositeCount);
    return Math.min(max, totalCount);
}
const ExtensionsCodeSectionElementBase = I18nMixin(PolymerElement);
export class ExtensionsCodeSectionElement extends ExtensionsCodeSectionElementBase {
    static get is() {
        return 'extensions-code-section';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            code: {
                type: Object,
                value: null,
            },
            isActive: Boolean,
            /** Highlighted code. */
            highlighted_: String,
            /** Code before the highlighted section. */
            before_: String,
            /** Code after the highlighted section. */
            after_: String,
            showNoCode_: {
                type: Boolean,
                computed: 'computeShowNoCode_(isActive, highlighted_)',
            },
            /** Description for the highlighted section. */
            highlightDescription_: String,
            lineNumbers_: String,
            truncatedBefore_: Number,
            truncatedAfter_: Number,
            /**
             * The string to display if no |code| is set (e.g. because we couldn't
             * load the relevant source file).
             */
            couldNotDisplayCode: String,
        };
    }
    static get observers() {
        return ['onCodeChanged_(code.*)'];
    }
    onCodeChanged_() {
        if (!this.code ||
            (!this.code.beforeHighlight && !this.code.highlight &&
                !this.code.afterHighlight)) {
            this.highlighted_ = '';
            this.highlightDescription_ = '';
            this.before_ = '';
            this.after_ = '';
            this.lineNumbers_ = '';
            return;
        }
        const before = this.code.beforeHighlight;
        const highlight = this.code.highlight;
        const after = this.code.afterHighlight;
        const linesBefore = before ? before.split('\n') : [];
        const linesAfter = after ? after.split('\n') : [];
        const visibleLineCountBefore = visibleLineCount(linesBefore.length, linesAfter.length);
        const visibleLineCountAfter = visibleLineCount(linesAfter.length, linesBefore.length);
        const visibleBefore = linesBefore.slice(linesBefore.length - visibleLineCountBefore)
            .join('\n');
        let visibleAfter = linesAfter.slice(0, visibleLineCountAfter).join('\n');
        // If the last character is a \n, force it to be rendered.
        if (visibleAfter.charAt(visibleAfter.length - 1) === '\n') {
            visibleAfter += ' ';
        }
        this.highlighted_ = highlight;
        this.highlightDescription_ = this.getAccessibilityHighlightDescription_(linesBefore.length, highlight.split('\n').length);
        this.before_ = visibleBefore;
        this.after_ = visibleAfter;
        this.truncatedBefore_ = linesBefore.length - visibleLineCountBefore;
        this.truncatedAfter_ = linesAfter.length - visibleLineCountAfter;
        const visibleCode = visibleBefore + highlight + visibleAfter;
        this.setLineNumbers_(this.truncatedBefore_ + 1, this.truncatedBefore_ + visibleCode.split('\n').length);
        this.scrollToHighlight_(visibleLineCountBefore);
    }
    getLinesNotShownLabel_(lineCount, stringSingular, stringPluralTemplate) {
        return lineCount === 1 ?
            stringSingular :
            loadTimeData.substituteString(stringPluralTemplate, lineCount);
    }
    setLineNumbers_(start, end) {
        let lineNumbers = '';
        for (let i = start; i <= end; ++i) {
            lineNumbers += i + '\n';
        }
        this.lineNumbers_ = lineNumbers;
    }
    scrollToHighlight_(linesBeforeHighlight) {
        const CSS_LINE_HEIGHT = 20;
        // Count how many pixels is above the highlighted code.
        const highlightTop = linesBeforeHighlight * CSS_LINE_HEIGHT;
        // Find the position to show the highlight roughly in the middle.
        const targetTop = highlightTop - this.clientHeight * 0.5;
        this.$['scroll-container'].scrollTo({ top: targetTop });
    }
    getAccessibilityHighlightDescription_(lineStart, numLines) {
        if (numLines > 1) {
            return this.i18n('accessibilityErrorMultiLine', lineStart.toString(), (lineStart + numLines - 1).toString());
        }
        else {
            return this.i18n('accessibilityErrorLine', lineStart.toString());
        }
    }
    computeShowNoCode_() {
        return this.isActive && !this.highlighted_;
    }
}
customElements.define(ExtensionsCodeSectionElement.is, ExtensionsCodeSectionElement);

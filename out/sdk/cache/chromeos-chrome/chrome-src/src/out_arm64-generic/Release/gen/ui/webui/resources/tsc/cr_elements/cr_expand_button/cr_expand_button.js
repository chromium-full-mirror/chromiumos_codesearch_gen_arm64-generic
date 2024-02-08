// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'cr-expand-button' is a chrome-specific wrapper around a button that toggles
 * between an opened (expanded) and closed state.
 */
import '../cr_actionable_row_style_lit.css.js';
import '../cr_icon_button/cr_icon_button.js';
import '../cr_shared_vars.css.js';
import '../icons.html.js';
import { focusWithoutInk } from '//resources/js/focus_without_ink.js';
import { CrLitElement } from '//resources/lit/v3_0/lit.rollup.js';
import { getCss as getActionableRowCss } from '../cr_actionable_row_style_lit.css.js';
import { getCss } from './cr_expand_button.css.js';
import { getHtml } from './cr_expand_button.html.js';
export class CrExpandButtonElement extends CrLitElement {
    constructor() {
        super(...arguments);
        this.expanded = false;
        this.disabled = false;
        this.ariaExpanded_ = 'false';
        this.expandIcon = 'cr:expand-more';
        this.collapseIcon = 'cr:expand-less';
        this.tabIndex = 0;
        this.icon_ = '';
    }
    static get is() {
        return 'cr-expand-button';
    }
    static get styles() {
        return [
            getActionableRowCss(),
            getCss(),
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            /**
             * If true, the button is in the expanded state and will show the icon
             * specified in the `collapseIcon` property. If false, the button shows
             * the icon specified in the `expandIcon` property.
             */
            expanded: {
                type: Boolean,
                notify: true,
            },
            /**
             * If true, the button will be disabled and grayed out.
             */
            disabled: {
                type: Boolean,
                reflect: true,
            },
            /** A11y text descriptor for this control. */
            ariaLabel: { type: String },
            ariaExpanded_: { type: String },
            tabIndex: { type: Number },
            expandIcon: { type: String },
            collapseIcon: { type: String },
            expandTitle: { type: String },
            collapseTitle: { type: String },
            icon_: { type: String },
        };
    }
    firstUpdated() {
        this.addEventListener('click', this.toggleExpand_);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('expanded') ||
            changedProperties.has('expandIcon') ||
            changedProperties.has('collapseIcon')) {
            this.icon_ = this.expanded ? this.collapseIcon : this.expandIcon;
        }
        if (changedProperties.has('expanded') ||
            changedProperties.has('collapseTitle') ||
            changedProperties.has('expandTitle')) {
            this.title = this.expanded ? this.collapseTitle : this.expandTitle;
        }
        if (changedProperties.has('expanded')) {
            this.ariaExpanded_ = this.expanded ? 'true' : 'false';
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('ariaLabel')) {
            this.onAriaLabelChange_();
        }
    }
    focus() {
        this.$.icon.focus();
    }
    onAriaLabelChange_() {
        if (this.ariaLabel) {
            this.$.icon.removeAttribute('aria-labelledby');
            this.$.icon.setAttribute('aria-label', this.ariaLabel);
        }
        else {
            this.$.icon.removeAttribute('aria-label');
            this.$.icon.setAttribute('aria-labelledby', 'label');
        }
    }
    toggleExpand_(event) {
        // Prevent |click| event from bubbling. It can cause parents of this
        // elements to erroneously re-toggle this control.
        event.stopPropagation();
        event.preventDefault();
        this.scrollIntoViewIfNeeded();
        this.expanded = !this.expanded;
        focusWithoutInk(this.$.icon);
    }
}
customElements.define(CrExpandButtonElement.is, CrExpandButtonElement);

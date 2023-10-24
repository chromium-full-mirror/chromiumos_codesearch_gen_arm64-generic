// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Number of pixels required to move to consider the pointermove event as
 * intentional.
 */
export const MOVE_THRESHOLD_PX = 5;
/**
 * @fileoverview 'cr-toggle' is a component for showing an on/off switch. It
 * fires a 'change' event *only* when its state changes as a result of a user
 * interaction. Besides just clicking the element, its state can be changed by
 * dragging (pointerdown+pointermove) the element towards the desired direction.
 */
import { PaperRippleBehavior } from '//resources/polymer/v3_0/paper-behaviors/paper-ripple-behavior.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assert } from '//resources/js/assert.js';
import '../cr_shared_vars.css.js';
import { getTemplate } from './cr_toggle.html.js';
const CrToggleElementBase = mixinBehaviors([PaperRippleBehavior], PolymerElement);
export class CrToggleElement extends CrToggleElementBase {
    constructor() {
        super(...arguments);
        this.boundPointerMove_ = null;
        /**
         * Whether the state of the toggle has already taken into account by
         * |pointeremove| handlers. Used in the 'click' handler.
         */
        this.handledInPointerMove_ = false;
        this.pointerDownX_ = 0;
    }
    static get is() {
        return 'cr-toggle';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            checked: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'checkedChanged_',
                notify: true,
            },
            dark: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'disabledChanged_',
            },
        };
    }
    ready() {
        super.ready();
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'button');
        }
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
        this.setAttribute('aria-pressed', this.checked ? 'true' : 'false');
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        if (!document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.addEventListener('blur', this.hideRipple_.bind(this));
            this.addEventListener('focus', this.onFocus_.bind(this));
        }
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('keyup', this.onKeyUp_.bind(this));
        this.addEventListener('pointerdown', this.onPointerDown_.bind(this));
        this.addEventListener('pointerup', this.onPointerUp_.bind(this));
    }
    connectedCallback() {
        super.connectedCallback();
        const direction = this.matches(':host-context([dir=rtl]) cr-toggle') ? -1 : 1;
        this.boundPointerMove_ = (e) => {
            // Prevent unwanted text selection to occur while moving the pointer, this
            // is important.
            e.preventDefault();
            const diff = e.clientX - this.pointerDownX_;
            if (Math.abs(diff) < MOVE_THRESHOLD_PX) {
                return;
            }
            this.handledInPointerMove_ = true;
            const shouldToggle = (diff * direction < 0 && this.checked) ||
                (diff * direction > 0 && !this.checked);
            if (shouldToggle) {
                this.toggleState_(/* fromKeyboard= */ false);
            }
        };
    }
    checkedChanged_() {
        this.setAttribute('aria-pressed', this.checked ? 'true' : 'false');
    }
    disabledChanged_() {
        this.setAttribute('tabindex', this.disabled ? '-1' : '0');
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
    }
    onFocus_() {
        this.getRipple().showAndHoldDown();
    }
    hideRipple_() {
        this.getRipple().clear();
    }
    onPointerUp_() {
        assert(this.boundPointerMove_);
        this.removeEventListener('pointermove', this.boundPointerMove_);
        this.hideRipple_();
    }
    onPointerDown_(e) {
        // Don't do anything if this was not a primary button click or touch event.
        if (e.button !== 0) {
            return;
        }
        // This is necessary to have follow up pointer events fire on |this|, even
        // if they occur outside of its bounds.
        this.setPointerCapture(e.pointerId);
        this.pointerDownX_ = e.clientX;
        this.handledInPointerMove_ = false;
        assert(this.boundPointerMove_);
        this.addEventListener('pointermove', this.boundPointerMove_);
    }
    onClick_(e) {
        // Prevent |click| event from bubbling. It can cause parents of this
        // elements to erroneously re-toggle this control.
        e.stopPropagation();
        e.preventDefault();
        // User gesture has already been taken care of inside |pointermove|
        // handlers, Do nothing here.
        if (this.handledInPointerMove_) {
            return;
        }
        // If no pointermove event fired, then user just clicked on the
        // toggle button and therefore it should be toggled.
        this.toggleState_(/* fromKeyboard= */ false);
    }
    toggleState_(fromKeyboard) {
        // Ignore cases where the 'click' or 'keypress' handlers are triggered while
        // disabled.
        if (this.disabled) {
            return;
        }
        if (!fromKeyboard) {
            this.hideRipple_();
        }
        this.checked = !this.checked;
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail: this.checked }));
    }
    onKeyDown_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.repeat) {
            return;
        }
        if (e.key === 'Enter') {
            this.toggleState_(/* fromKeyboard= */ true);
        }
    }
    onKeyUp_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.key === ' ') {
            this.toggleState_(/* fromKeyboard= */ true);
        }
    }
    // Overridden from PaperRippleBehavior
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _createRipple() {
        this._rippleContainer = this.$.knob;
        const ripple = super._createRipple();
        ripple.id = 'ink';
        ripple.setAttribute('recenters', '');
        ripple.classList.add('circle', 'toggle-ink');
        return ripple;
    }
}
customElements.define(CrToggleElement.is, CrToggleElement);

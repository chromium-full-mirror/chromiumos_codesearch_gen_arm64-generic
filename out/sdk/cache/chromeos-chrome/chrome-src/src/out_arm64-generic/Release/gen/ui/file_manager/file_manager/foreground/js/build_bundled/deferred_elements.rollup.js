import { bN as PaperRippleBehavior, c as assert, bO as validateExternalDriveName, u as util, j as str, h as strf, X as XfBase } from './shared.rollup.js';
import { html, mixinBehaviors, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { property, customElement, svg, html as html$1, css } from 'chrome://resources/mwc/lit/index.js';
import 'chrome://resources/ash/common/load_time_data.m.js';

function getTemplate$2() {
    return html `<!--_html_template_start_-->    <style>:host{--cr-toggle-checked-bar-color:var(--google-blue-600);--cr-toggle-checked-button-color:var(--google-blue-600);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-600-rgb), .2);--cr-toggle-ripple-diameter:40px;--cr-toggle-unchecked-bar-color:var(--google-grey-400);--cr-toggle-unchecked-button-color:white;--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-600-rgb), .15);-webkit-tap-highlight-color:transparent;cursor:pointer;display:block;min-width:34px;outline:0;position:relative;width:34px}:host-context([chrome-refresh-2023]):host{--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on,
                var(--cr-fallback-color-primary));--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on,
                var(--cr-fallback-color-on-primary));--cr-toggle-unchecked-bar-color:var(--color-toggle-button-track-off,
                var(--cr-fallback-color-surface-variant));--cr-toggle-unchecked-button-color:var(--color-toggle-button-thumb-off,
                var(--cr-fallback-color-outline));--cr-toggle-checked-ripple-color:var(--cr-active-background-color);--cr-toggle-unchecked-ripple-color:var(--cr-active-background-color);--cr-toggle-ripple-diameter:20px;--cr-toggle-bar-width_:26px;height:fit-content;isolation:isolate;min-width:initial;width:fit-content}@media (forced-colors:active){:host{forced-color-adjust:none}}@media (prefers-color-scheme:dark){:host{--cr-toggle-checked-bar-color:var(--google-blue-300);--cr-toggle-checked-button-color:var(--google-blue-300);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-toggle-unchecked-bar-color:var(--google-grey-500);--cr-toggle-unchecked-button-color:var(--google-grey-300);--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}}:host([dark]){--cr-toggle-checked-bar-color:var(--google-blue-300);--cr-toggle-checked-button-color:var(--google-blue-300);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-toggle-unchecked-bar-color:var(--google-grey-500);--cr-toggle-unchecked-button-color:var(--google-grey-300);--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on-disabled,
                var(--cr-fallback-color-disabled-background));--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on-disabled, var(--cr-fallback-color-surface));--cr-toggle-unchecked-bar-color:transparent;--cr-toggle-unchecked-button-color:var(--color-toggle-button-thumb-off-disabled,
                var(--cr-fallback-color-disabled-foreground));opacity:1}#bar{background-color:var(--cr-toggle-unchecked-bar-color);border-radius:8px;height:12px;left:3px;position:absolute;top:2px;transition:background-color linear 80ms;width:28px;z-index:0}:host([checked]) #bar{background-color:var(--cr-toggle-checked-bar-color);opacity:var(--cr-toggle-checked-bar-opacity,.5)}:host-context([chrome-refresh-2023]) #bar{border:1px solid var(--cr-toggle-unchecked-button-color);border-radius:50px;box-sizing:border-box;display:block;height:16px;opacity:1;position:initial;width:var(--cr-toggle-bar-width_)}:host-context([chrome-refresh-2023]):host([checked]) #bar{border-color:var(--cr-toggle-checked-bar-color)}:host-context([chrome-refresh-2023]):host([disabled]) #bar{border-color:var(--cr-toggle-unchecked-button-color)}:host-context([chrome-refresh-2023]):host([disabled][checked]) #bar{border:none}:host-context([chrome-refresh-2023]):host(:focus-visible) #bar{outline:2px solid var(--cr-toggle-checked-bar-color);outline-offset:2px}#knob{background-color:var(--cr-toggle-unchecked-button-color);border-radius:50%;box-shadow:var(--cr-toggle-box-shadow,0 1px 3px 0 rgba(0,0,0,.4));display:block;height:16px;position:relative;transition:transform linear 80ms,background-color linear 80ms;width:16px;z-index:1}:host([checked]) #knob{background-color:var(--cr-toggle-checked-button-color);transform:translate3d(18px,0,0)}:host-context([dir=rtl]):host([checked]) #knob{transform:translate3d(-18px,0,0)}:host-context([chrome-refresh-2023]) #knob{--cr-toggle-knob-diameter_:8px;--cr-toggle-knob-center-edge-distance_:8px;--cr-toggle-knob-direction_:1;--cr-toggle-knob-travel-distance_:calc(
            0.5 * var(--cr-toggle-bar-width_) -
            var(--cr-toggle-knob-center-edge-distance_));--cr-toggle-knob-position-center_:calc(
            0.5 * var(--cr-toggle-bar-width_) + -50%);--cr-toggle-knob-position-start_:calc(
            var(--cr-toggle-knob-position-center_) -
            var(--cr-toggle-knob-direction_) *
            var(--cr-toggle-knob-travel-distance_));--cr-toggle-knob-position-end_:calc(
            var(--cr-toggle-knob-position-center_) +
            var(--cr-toggle-knob-direction_) *
            var(--cr-toggle-knob-travel-distance_));box-shadow:none;height:var(--cr-toggle-knob-diameter_);position:absolute;top:50%;transform:translate(var(--cr-toggle-knob-position-start_),-50%);transition:transform linear 80ms,background-color linear 80ms,width linear 80ms,height linear 80ms;width:var(--cr-toggle-knob-diameter_)}:host-context([dir=rtl][chrome-refresh-2023]) #knob{left:0;--cr-toggle-knob-direction_:-1}:host-context([chrome-refresh-2023]):host(:active) #knob{--cr-toggle-knob-diameter_:10px}:host-context([chrome-refresh-2023]):host([checked]) #knob{--cr-toggle-knob-diameter_:12px;transform:translate(var(--cr-toggle-knob-position-end_),-50%)}:host-context([chrome-refresh-2023]):host([checked]:active) #knob{--cr-toggle-knob-diameter_:14px}:host-context([chrome-refresh-2023]):host([checked]:active) #knob,:host-context([chrome-refresh-2023]):host([checked]:hover) #knob{--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on-hover,
                var(--cr-fallback-color-primary-container))}:host-context([chrome-refresh-2023]):host(:hover) #knob::before{background-color:var(--cr-hover-background-color);border-radius:50%;content:'';height:var(--cr-toggle-ripple-diameter);left:calc(var(--cr-toggle-knob-diameter_)/ 2);position:absolute;top:calc(var(--cr-toggle-knob-diameter_)/ 2);transform:translate(-50%,-50%);width:var(--cr-toggle-ripple-diameter)}paper-ripple{--paper-ripple-opacity:1;color:var(--cr-toggle-unchecked-ripple-color);height:var(--cr-toggle-ripple-diameter);left:50%;outline:var(--cr-toggle-ripple-ring,none);pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);transition:color linear 80ms;width:var(--cr-toggle-ripple-diameter)}:host([checked]) paper-ripple{color:var(--cr-toggle-checked-ripple-color)}:host-context([dir=rtl]) paper-ripple{left:auto;right:50%;transform:translate(50%,-50%)}</style>
    <span id="bar"></span>
    <span id="knob"></span>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Number of pixels required to move to consider the pointermove event as
 * intentional.
 */
const MOVE_THRESHOLD_PX = 5;
const CrToggleElementBase = mixinBehaviors([PaperRippleBehavior], PolymerElement);
class CrToggleElement extends CrToggleElementBase {
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
        return getTemplate$2();
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

const template = html `
<iron-iconset-svg name="cr20" size="20">
  <svg>
    <defs>
      
      <g id="block">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.63 13.55 2 11.85 2 10ZM5.1 16.31C6.45 17.37 8.15 18 10 18C14.42 18 18 14.42 18 10C18 8.15 17.37 6.45 16.31 5.1L5.1 16.31Z">
        </path>
      </g>
      <g id="cloud-off">
        <path d="M16 18.125L13.875 16H5C3.88889 16 2.94444 15.6111 2.16667 14.8333C1.38889 14.0556 1 13.1111 1 12C1 10.9444 1.36111 10.0347 2.08333 9.27083C2.80556 8.50694 3.6875 8.09028 4.72917 8.02083C4.77083 7.86805 4.8125 7.72222 4.85417 7.58333C4.90972 7.44444 4.97222 7.30555 5.04167 7.16667L1.875 4L2.9375 2.9375L17.0625 17.0625L16 18.125ZM5 14.5H12.375L6.20833 8.33333C6.15278 8.51389 6.09722 8.70139 6.04167 8.89583C6 9.07639 5.95139 9.25694 5.89583 9.4375L4.83333 9.52083C4.16667 9.57639 3.61111 9.84028 3.16667 10.3125C2.72222 10.7708 2.5 11.3333 2.5 12C2.5 12.6944 2.74306 13.2847 3.22917 13.7708C3.71528 14.2569 4.30556 14.5 5 14.5ZM17.5 15.375L16.3958 14.2917C16.7153 14.125 16.9792 13.8819 17.1875 13.5625C17.3958 13.2431 17.5 12.8889 17.5 12.5C17.5 11.9444 17.3056 11.4722 16.9167 11.0833C16.5278 10.6944 16.0556 10.5 15.5 10.5H14.125L14 9.14583C13.9028 8.11806 13.4722 7.25694 12.7083 6.5625C11.9444 5.85417 11.0417 5.5 10 5.5C9.65278 5.5 9.31944 5.54167 9 5.625C8.69444 5.70833 8.39583 5.82639 8.10417 5.97917L7.02083 4.89583C7.46528 4.61806 7.93056 4.40278 8.41667 4.25C8.91667 4.08333 9.44444 4 10 4C11.4306 4 12.6736 4.48611 13.7292 5.45833C14.7847 6.41667 15.375 7.59722 15.5 9C16.4722 9 17.2986 9.34028 17.9792 10.0208C18.6597 10.7014 19 11.5278 19 12.5C19 13.0972 18.8611 13.6458 18.5833 14.1458C18.3194 14.6458 17.9583 15.0556 17.5 15.375Z">
        </path>
      </g>
      <g id="domain">
        <path d="M2,3 L2,17 L11.8267655,17 L13.7904799,17 L18,17 L18,7 L12,7 L12,3 L2,3 Z M8,13 L10,13 L10,15 L8,15 L8,13 Z M4,13 L6,13 L6,15 L4,15 L4,13 Z M8,9 L10,9 L10,11 L8,11 L8,9 Z M4,9 L6,9 L6,11 L4,11 L4,9 Z M12,9 L16,9 L16,15 L12,15 L12,9 Z M12,11 L14,11 L14,13 L12,13 L12,11 Z M8,5 L10,5 L10,7 L8,7 L8,5 Z M4,5 L6,5 L6,7 L4,7 L4,5 Z">
        </path>
      </g>
      <g id="kite">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6327 8.00094L10.3199 2L16 8.00094L10.1848 16.8673C10.0995 16.9873 10.0071 17.1074 9.90047 17.2199C9.42417 17.7225 8.79147 18 8.11611 18C7.44076 18 6.80806 17.7225 6.33175 17.2199C5.85545 16.7173 5.59242 16.0497 5.59242 15.3371C5.59242 14.977 5.46445 14.647 5.22275 14.3919C4.98104 14.1369 4.66825 14.0019 4.32701 14.0019H4V12.6667H4.32701C5.00237 12.6667 5.63507 12.9442 6.11137 13.4468C6.58768 13.9494 6.85071 14.617 6.85071 15.3296C6.85071 15.6896 6.97867 16.0197 7.22038 16.2747C7.46209 16.5298 7.77488 16.6648 8.11611 16.6648C8.45735 16.6648 8.77014 16.5223 9.01185 16.2747C9.02396 16.2601 9.03607 16.246 9.04808 16.2319C9.08541 16.1883 9.12176 16.1458 9.15403 16.0947L9.55213 15.4946L4.6327 8.00094ZM10.3199 13.9371L6.53802 8.17116L10.3199 4.1814L14.0963 8.17103L10.3199 13.9371Z">
        </path>
      </g>
      <g id="menu">
        <path d="M2 4h16v2H2zM2 9h16v2H2zM2 14h16v2H2z"></path>
      </g>
      
        <g id="banner-warning">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13177 1.50386C9.51566 0.832046 10.4844 0.832046 10.8683 1.50386L18.8683 15.5039C19.2492 16.1705 18.7678 17 18 17H2.00001C1.23219 17 0.750823 16.1705 1.13177 15.5039L9.13177 1.50386ZM10 4.01556L3.72321 15H16.2768L10 4.01556ZM9 11H11V7H9V11ZM11 14H9V12H11V14Z">
          </path>
        </g>
        <g id="warning">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13177 1.50386C9.51566 0.832046 10.4844 0.832046 10.8683 1.50386L18.8683 15.5039C19.2492 16.1705 18.7678 17 18 17H2.00001C1.23219 17 0.750823 16.1705 1.13177 15.5039L9.13177 1.50386ZM10 4.01556L3.72321 15H16.2768L10 4.01556ZM9 11H11V7H9V11ZM11 14H9V12H11V14Z">
          </path>
        </g>
      
  </defs></svg>
</iron-iconset-svg>


<iron-iconset-svg name="cr" size="24">
  <svg>
    <defs>
      
      <g id="account-child-invert" viewBox="0 0 48 48">
        <path d="M24 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"></path>
        <path fill="none" d="M0 0h48v48H0V0z"></path>
        <circle fill="none" cx="24" cy="26" r="4"></circle>
        <path d="M24 18c-6.16 0-13 3.12-13 7.23v11.54c0 2.32 2.19 4.33 5.2 5.63 2.32 1 5.12 1.59 7.8 1.59.66 0 1.33-.06 2-.14v-5.2c-.67.08-1.34.14-2 .14-2.63 0-5.39-.57-7.68-1.55.67-2.12 4.34-3.65 7.68-3.65.86 0 1.75.11 2.6.29 2.79.62 5.2 2.15 5.2 4.04v4.47c3.01-1.31 5.2-3.31 5.2-5.63V25.23C37 21.12 30.16 18 24 18zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z">
        </path>
      </g>
      <g id="add">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </g>
      <g id="arrow-back">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z">
        </path>
      </g>
      <g id="arrow-drop-up">
        <path d="M7 14l5-5 5 5z"></path>
      </g>
      <g id="arrow-drop-down">
        <path d="M7 10l5 5 5-5z"></path>
      </g>
      <g id="arrow-forward">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
        </path>
      </g>
      <g id="arrow-right">
        <path d="M10 7l5 5-5 5z"></path>
      </g>
      
        <g id="bluetooth">
          <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z">
          </path>
        </g>
        <g id="camera-alt">
          <circle cx="12" cy="12" r="3.2"></circle>
          <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z">
          </path>
        </g>
        <g id="work">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z">
          </path>
        </g>
      
      <g id="cancel">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z">
        </path>
      </g>
      <g id="check">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </g>
      <g id="check-circle">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
        </path>
      </g>
      <g id="chevron-left">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </g>
      <g id="chevron-right">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
      <g id="clear">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="computer">
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z">
        </path>
      </g>
      <g id="create">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
        </path>
      </g>
      <g id="delete">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
        </path>
      </g>
      <g id="domain">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z">
        </path>
      </g>
      <g id="error">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
        </path>
      </g>
      <g id="error-outline">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
        </path>
      </g>
      <g id="expand-less">
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
      </g>
      <g id="expand-more">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </g>
      <g id="extension">
        <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z">
        </path>
      </g>
      <g id="file-download">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
      </g>
      
        <g id="folder-filled">
          <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z">
          </path>
        </g>
      
      <g id="fullscreen">
        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z">
        </path>
      </g>
      <g id="group">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z">
        </path>
      </g>
      <g id="help-outline">
        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
        </path>
      </g>
      <g id="history">
        <path d="M12.945312 22.75 C 10.320312 22.75 8.074219 21.839844 6.207031 20.019531 C 4.335938 18.199219 3.359375 15.972656 3.269531 13.34375 L 5.089844 13.34375 C 5.175781 15.472656 5.972656 17.273438 7.480469 18.742188 C 8.988281 20.210938 10.808594 20.945312 12.945312 20.945312 C 15.179688 20.945312 17.070312 20.164062 18.621094 18.601562 C 20.167969 17.039062 20.945312 15.144531 20.945312 12.910156 C 20.945312 10.714844 20.164062 8.855469 18.601562 7.335938 C 17.039062 5.816406 15.15625 5.054688 12.945312 5.054688 C 11.710938 5.054688 10.554688 5.339844 9.480469 5.902344 C 8.402344 6.46875 7.476562 7.226562 6.699219 8.179688 L 9.585938 8.179688 L 9.585938 9.984375 L 3.648438 9.984375 L 3.648438 4.0625 L 5.453125 4.0625 L 5.453125 6.824219 C 6.386719 5.707031 7.503906 4.828125 8.804688 4.199219 C 10.109375 3.566406 11.488281 3.25 12.945312 3.25 C 14.300781 3.25 15.570312 3.503906 16.761719 4.011719 C 17.949219 4.519531 18.988281 5.214844 19.875 6.089844 C 20.761719 6.964844 21.464844 7.992188 21.976562 9.167969 C 22.492188 10.34375 22.75 11.609375 22.75 12.964844 C 22.75 14.316406 22.492188 15.589844 21.976562 16.777344 C 21.464844 17.964844 20.761719 19.003906 19.875 19.882812 C 18.988281 20.765625 17.949219 21.464844 16.761719 21.976562 C 15.570312 22.492188 14.300781 22.75 12.945312 22.75 Z M 16.269531 17.460938 L 12.117188 13.34375 L 12.117188 7.527344 L 13.921875 7.527344 L 13.921875 12.601562 L 17.550781 16.179688 Z M 16.269531 17.460938">
        </path>
      </g>
      <g id="info">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
        </path>
      </g>
      <g id="info-outline">
        <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z">
        </path>
      </g>
      <g id="insert-drive-file">
        <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z">
        </path>
      </g>
      <g id="location-on">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
        </path>
      </g>
      <g id="mic">
        <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z">
        </path>
      </g>
      <g id="more-vert">
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
        </path>
      </g>
      <g id="open-in-new">
        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z">
        </path>
      </g>
      <g id="person">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
        </path>
      </g>
      <g id="phonelink">
        <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z">
        </path>
      </g>
      <g id="print">
        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z">
        </path>
      </g>
      <g id="schedule">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z">
        </path>
      </g>
      <g id="search">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
        </path>
      </g>
      <g id="security">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z">
        </path>
      </g>
      
        <g id="sim-card-alert">
          <path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z">
          </path>
        </g>
        <g id="sim-lock">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z">
          </path>
        </g>
        <g id="sms-connect">
          <path d="M20,2C21.1,2 22,2.9 22,4L22,16C22,17.1 21.1,18 20,18L6,18L2,22L2.01,4C2.01,2.9 2.9,2 4,2L20,2ZM8,8L4,12L8,16L8,13L14,13L14,11L8,11L8,8ZM19.666,7.872L16.038,4.372L16.038,6.997L10,6.997L10,9L16.038,9L16.038,11.372L19.666,7.872Z">
          </path>
        </g>
      
      
      <g id="settings_icon">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">
        </path>
      </g>
      <g id="star">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
        </path>
      </g>
      <g id="sync">
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z">
        </path>
      </g>
      <g id="thumbs-down">
        <path d="M6 3h11v13l-7 7-1.25-1.25a1.454 1.454 0 0 1-.3-.475c-.067-.2-.1-.392-.1-.575v-.35L9.45 16H3c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3Zm9 2H6l-3 7v2h9l-1.35 5.5L15 15.15V5Zm0 10.15V5v10.15Zm2 .85v-2h3V5h-3V3h5v13h-5Z">
        </path>
      </g>
      <g id="thumbs-up">
        <path d="M18 21H7V8l7-7 1.25 1.25c.117.117.208.275.275.475.083.2.125.392.125.575v.35L14.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35Zm-9-2h9l3-7v-2h-9l1.35-5.5L9 8.85V19ZM9 8.85V19 8.85ZM7 8v2H4v9h3v2H2V8h5Z">
        </path>
      </g>
      <g id="videocam">
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z">
        </path>
      </g>
      <g id="warning">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;
document.head.appendChild(template.content);

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
.md-select{--md-arrow-width:10px;--md-select-bg-color:var(--google-grey-100);--md-select-focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--md-select-option-bg-color:white;--md-select-side-padding:8px;--md-select-text-color:var(--cr-primary-text-color);-webkit-appearance:none;background:url(//resources/images/arrow_down.svg) calc(100% - var(--md-select-side-padding)) center no-repeat;background-color:var(--md-select-bg-color);background-size:var(--md-arrow-width);border:none;border-radius:4px;color:var(--md-select-text-color);cursor:pointer;font-family:inherit;font-size:inherit;line-height:inherit;max-width:100%;outline:0;padding-bottom:6px;padding-inline-end:calc(var(--md-select-side-padding) + var(--md-arrow-width) + 3px);padding-inline-start:var(--md-select-side-padding);padding-top:6px;width:var(--md-select-width,200px)}@media (prefers-color-scheme:dark){.md-select{--md-select-bg-color:rgba(0, 0, 0, .3);--md-select-focus-shadow-color:rgba(var(--google-blue-300-rgb), .5);--md-select-option-bg-color:var(--google-grey-900-white-4-percent);background-image:url(//resources/images/dark/arrow_down.svg)}}:host-context([chrome-refresh-2023]) .md-select{--md-select-bg-color:transparent;--md-arrow-width:7px;--md-select-side-padding:10px;--md-select-text-color:inherit;border:solid 1px var(--color-combobox-container-outline,var(--cr-fallback-color-neutral-outline));border-radius:8px;box-sizing:border-box;font-size:12px;height:36px;line-height:36px;padding-bottom:0;padding-top:0}:host-context([chrome-refresh-2023]) .md-select:hover{background-color:var(--color-comboxbox-ink-drop-hovered,var(--cr-hover-on-subtle-background-color))}.md-select :-webkit-any(option,optgroup){background-color:var(--md-select-option-bg-color)}.md-select[disabled]{opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]) .md-select[disabled]{background-color:var(--color-combobox-background-disabled,var(--cr-fallback-color-disabled-background));border-color:transparent;color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));opacity:1}.md-select:focus{box-shadow:0 0 0 2px var(--md-select-focus-shadow-color)}:host-context([chrome-refresh-2023]) .md-select:focus{box-shadow:none;outline:solid 2px var(--cr-focus-outline-color);outline-offset:-1px}@media (forced-colors:active){.md-select:focus{outline:var(--cr-focus-outline-hcm)}}.md-select:active{box-shadow:none}:host-context([dir=rtl]) .md-select{background-position-x:var(--md-select-side-padding)}
    </style>
  </template>
`.content);
styleMod.register('md-select');

function getTemplate$1() {
    return html `<!--_html_template_start_-->
<style include="cr-shared-style md-select">[slot=body]>div{font:var(--cros-body-1-font);margin-bottom:var(--cr-form-field-bottom-spacing)}[slot=body]>#disk-format{margin-bottom:0;padding:0 2px 2px}[slot=button-container]{--cr-dialog-button-container-padding-bottom:0;--cr-dialog-button-container-padding-horizontal:0;padding-top:32px}#warning-icon{--iron-icon-fill-color:var(--cros-sys-error)}#warning-message{color:var(--cros-sys-error);display:inline-block;margin-inline-start:8px}cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-sys-dialog_container);border-radius:20px}cr-dialog::part(dialog)::backdrop{background-color:var(--cros-sys-scrim)}cr-dialog::part(wrapper){padding:32px;padding-bottom:28px}[slot=title]{--cr-dialog-title-slot-padding-bottom:16px;--cr-dialog-title-slot-padding-end:0;--cr-dialog-title-slot-padding-start:0;--cr-dialog-title-slot-padding-top:0;--cr-primary-text-color:var(--cros-sys-on_surface);font:var(--cros-display-7-font)}[slot=body]{--cr-dialog-body-padding-horizontal:0;--cr-secondary-text-color:var(--cros-sys-on_surface_variant);font:var(--cros-body-1-font)}.md-select{--md-select-bg-color:var(--cros-sys-input_field_on_base);--md-select-focus-shadow-color:var(--cros-sys-focus_ring);--md-select-text-color:var(--cros-sys-on_surface);--md-select-side-padding:16px;border-radius:8px;height:36px;width:100%}cr-input{--cr-form-field-label-color:var(--cros-sys-on_surface);--cr-input-background-color:var(--cros-sys-input_field_on_base);--cr-input-border-radius:8px;--cr-input-color:var(--cros-sys-on_surface);--cr-input-error-color:var(--cros-sys-error);--cr-input-focus-color:var(--cros-sys-primary);--cr-input-min-height:36px;--cr-input-padding-end:16px;--cr-input-padding-start:16px;--cr-input-placeholder-color:var(--cros-sys-secondary);font:var(--cros-body-2-font)}cr-button{--active-bg:transparent;--active-shadow:none;--active-shadow-action:none;--bg-action:var(--cros-sys-primary);--cr-button-height:36px;--disabled-bg-action:var(--cros-sys-disabled_container);--disabled-bg:var(--cros-sys-disabled_container);--disabled-text-color:var(--cros-sys-disabled);--hover-bg-action:var(--cros-sys-primary);--hover-bg-color:var(--cros-sys-primary_container);--ink-color:var(--cros-sys-ripple_primary);--ripple-opacity-action:1;--ripple-opacity:1;--text-color-action:var(--cros-sys-on_primary);--text-color:var(--cros-sys-on_primary_container);border:none;border-radius:18px;box-shadow:none;font:var(--cros-button-2-font);position:relative}cr-button.cancel-button{background-color:var(--cros-sys-primary_container)}cr-button.cancel-button:hover::part(hoverBackground){background-color:var(--cros-sys-hover_on_subtle);display:block}cr-button.action-button:hover::part(hoverBackground){background-color:var(--cros-sys-hover_on_prominent);display:block}:host-context(.focus-outline-visible) cr-button:focus{outline:2px solid var(--cros-sys-focus_ring);outline-offset:2px}</style>

<cr-dialog id="dialog" close-text="$i18n{CLOSE_LABEL}" single-partition-format$="[[getSinglePartitionFormat()]]">
  <div slot="title">
    [[getStrf('FORMAT_DIALOG_TITLE', title)]]
  </div>
  <div slot="body">
    <div>[[getDialogMessage(isErase_)]]</div>
    <div id="warning-container" hidden="[[!spaceUsed_]]" role="alert">
      <iron-icon id="warning-icon" icon="cr:warning"></iron-icon>
      <div id="warning-message">
        [[getStrf('FORMAT_DIALOG_DELETE_WARNING', spaceUsed_)]]
      </div>
    </div>
    <cr-input label="$i18n{FORMAT_DIALOG_DRIVE_NAME_LABEL}" id="label" value="{{label_}}" auto-validate="true">
    </cr-input>
    <div id="disk-format">
      <label id="format-type-label" class="cr-form-field-label">
        $i18n{FORMAT_DIALOG_FORMAT_LABEL}
      </label>
      <select class="md-select" aria-labelledby="format-type-label" value="{{formatType_::change}}">
        <option value="vfat">FAT32</option>
        <option value="exfat">exFAT</option>
        <option value="ntfs">NTFS</option>
      </select>
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="cancel" id="cancel">
      $i18n{CANCEL_LABEL}
    </cr-button>
    <cr-button class="action-button" on-click="format" id="format-button">
      [[getConfirmLabel(isErase_)]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * This file is checked via TS, so we suppress Closure checks.
 * @suppress {checkTypes}
 */
function getVolumeInfoDisplayRoot(entry) {
    if ('volumeInfo' in entry) {
        return entry.volumeInfo.displayRoot || null;
    }
    return null;
}
class FilesFormatDialog extends PolymerElement {
    constructor() {
        super(...arguments);
        this.volumeInfo_ = null;
        this.root_ = null;
    }
    static get is() {
        return 'files-format-dialog';
    }
    static get template() {
        return getTemplate$1();
    }
    static get properties() {
        return {
            label_: {
                type: String,
                value: '',
            },
            formatType_: {
                type: String,
                value: chrome.fileManagerPrivate.FormatFileSystemType.VFAT,
            },
            spaceUsed_: {
                type: String,
                value: '',
            },
            isErase_: {
                type: Boolean,
                value: false,
            },
        };
    }
    ready() {
        super.ready();
        this.$.dialog.consumeKeydownEvent = true;
    }
    cancel() {
        this.$.dialog.cancel();
    }
    format() {
        try {
            validateExternalDriveName(this.label_, this.formatType_);
        }
        catch (error) {
            this.$.label.setAttribute('error-message', error.message);
            this.$.label.invalid = true;
            return;
        }
        if (this.isErase_) {
            chrome.fileManagerPrivate.singlePartitionFormat(this.root_?.devicePath || '', this.formatType_, this.label_);
        }
        else {
            chrome.fileManagerPrivate.formatVolume(this.volumeInfo_?.volumeId || '', this.formatType_, this.label_);
        }
        this.$.dialog.close();
    }
    /**
     * Used to set "single-partition-format" attribute on element.
     * It is used to check flag status in the tests.
     */
    getSinglePartitionFormat() {
        if (util.isSinglePartitionFormatEnabled()) {
            return 'single-partition-format';
        }
        return '';
    }
    getConfirmLabel(isErase) {
        if (util.isSinglePartitionFormatEnabled()) {
            if (isErase) {
                return str('REPARTITION_DIALOG_CONFIRM_LABEL');
            }
            else {
                return str('FORMAT_DIALOG_CONFIRM_SHORT_LABEL');
            }
        }
        else {
            return str('FORMAT_DIALOG_CONFIRM_LABEL');
        }
    }
    getDialogMessage(isErase) {
        if (util.isSinglePartitionFormatEnabled()) {
            if (isErase) {
                return str('REPARTITION_DIALOG_MESSAGE');
            }
            else {
                return str('FORMAT_PARTITION_DIALOG_MESSAGE');
            }
        }
        else {
            return str('FORMAT_DIALOG_MESSAGE');
        }
    }
    getStrf(token, value) {
        return strf(token, value);
    }
    /**
     * Shows the dialog for drive represented by |volumeInfo|.
     */
    showModal(volumeInfo) {
        this.isErase_ = false;
        this.label_ = '';
        this.formatType_ = chrome.fileManagerPrivate.FormatFileSystemType.VFAT;
        this.spaceUsed_ = '';
        this.volumeInfo_ = volumeInfo;
        this.title = this.volumeInfo_.label;
        if (volumeInfo.displayRoot) {
            chrome.fileManagerPrivate.getDirectorySize(volumeInfo.displayRoot, (spaceUsed) => {
                if (spaceUsed > 0 && volumeInfo === this.volumeInfo_) {
                    this.spaceUsed_ = util.bytesToString(spaceUsed);
                }
                if (window.IN_TEST) {
                    this.$['warning-container'].setAttribute('fully-initialized', '');
                }
            });
        }
        this.$.dialog.showModal();
    }
    /**
     * Shows the dialog for erasing device.
     */
    showEraseModal(root) {
        this.isErase_ = true;
        this.label_ = '';
        this.formatType_ = chrome.fileManagerPrivate.FormatFileSystemType.VFAT;
        this.spaceUsed_ = '';
        this.root_ = root;
        this.title = root.label;
        const childVolumes = this.root_.getUIChildren();
        let totalSpaceUsed = 0;
        const getSpaceUsedRequests = childVolumes.map((childVolume) => {
            return new Promise((resolve) => {
                const displayRoot = getVolumeInfoDisplayRoot(childVolume);
                if (displayRoot) {
                    chrome.fileManagerPrivate.getDirectorySize(displayRoot, (spaceUsed) => {
                        totalSpaceUsed += spaceUsed;
                        if (totalSpaceUsed > 0) {
                            this.spaceUsed_ = util.bytesToString(totalSpaceUsed);
                        }
                        resolve();
                    });
                }
            });
        });
        Promise.all(getSpaceUsedRequests).then(() => {
            if (window.IN_TEST) {
                this.$['warning-container'].setAttribute('fully-initialized', '');
            }
        });
        this.$.dialog.showModal();
    }
}
customElements.define(FilesFormatDialog.is, FilesFormatDialog);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @type {!HTMLTemplateElement} */
const htmlTemplate = html `<!--_html_template_start_-->
<!--
Copyright 2020 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style>
  :host([hidden]) {
    display: none !important;
  }

  :host {
    display: flex;
    height: 24px;
    margin: 12px;
    width: 24px;
  }

  svg {
    animation: rotate 1.67s linear infinite;
    transform-origin: 50% 50%;
  }

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }

  circle {
    animation: spin 1.34s ease infinite;
    stroke: var(--cros-sys-primary);
    stroke-dasharray: 65;
    stroke-linecap: round;
    stroke-width: 3px;
    transform-origin: 50% 50%;
  }

  @keyframes spin {
    0% {
      stroke-dashoffset: 64;
    }

    58% {
      stroke-dashoffset: 19;
      transform: rotate(50deg);
    }

    to {
      stroke-dashoffset: 64;
      transform: rotate(360deg);
    }
  }
</style>

<svg width='24' height='24' viewBox='0 0 24 24'>
  <circle cx='12' cy='12' r='10' fill='none'></circle>
</svg>
<!--_html_template_end_-->`;
/**
 * FilesSpinner.
 */
class FilesSpinner extends HTMLElement {
    constructor() {
        super();
        const fragment = htmlTemplate.content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(fragment);
    }
    /**
     * DOM connected: set aria attributes.
     */
    connectedCallback() {
        if (!this.shadowRoot) {
            return;
        }
        const host = /** @type {!HTMLElement} */ (this.shadowRoot.host);
        host.setAttribute('role', 'progressbar');
        host.setAttribute('aria-disabled', 'false');
        host.setAttribute('aria-valuemin', '0');
        host.setAttribute('aria-valuemax', '1');
    }
}
customElements.define('files-spinner', FilesSpinner);
//# sourceURL=//ui/file_manager/file_manager/foreground/elements/files_spinner.js

function getTemplate() {
    return html `<!--_html_template_start_-->
<style>:host{background-color:var(--cros-sys-on_surface);border-radius:6px;box-sizing:border-box;color:var(--cros-sys-inverse_on_surface);display:flex;height:28px;opacity:0;padding:5px 8px;position:absolute;transition:opacity .3s;z-index:1000}:host([visible]){opacity:100%}#label,#link.link-label{align-items:center;border-radius:2px;display:inline-flex;font:var(--cros-annotation-1-font);white-space:nowrap}:host(.card-tooltip){background-color:var(--cros-sys-base_elevated);border-radius:8px;box-shadow:var(--cros-elevation-1-shadow);color:var(--cros-sys-on_surface);height:auto;margin-top:4px;padding:16px}:host(.link-tooltip){align-items:flex-start;flex-direction:column}#label.card-label,#link.link-label{line-height:18px;margin:0;max-width:192px;padding:0;white-space:normal}#label.card-label a,#link.link-label a{color:var(--cros-sys-primary)}#link{display:none;text-decoration:none}#link:focus-visible{outline:2px solid var(--cros-sys-focus_ring)}</style>
<div id="label"></div>
<a id="link" target="_blank" href="#"></a>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Files Tooltip.
 *
 * Adds target elements with addTarget or addTargets. Value of aria-label is
 * used as a label of the tooltip.
 *
 * Usage:
 * document.querySelector('files-tooltip').addTargets(
 *     document.querySelectorAll('[has-tooltip]'))
 */
class FilesTooltip extends PolymerElement {
    constructor() {
        super(...arguments);
        this.showTooltipTimerId_ = 0;
        this.hideTooltipTimerId_ = 0;
        this.onMouseOver_ = (event) => {
            const actualTarget = event?.currentTarget || this.visibleTooltipTarget_;
            if (actualTarget) {
                this.initShowingTooltip_(actualTarget);
            }
        };
        this.onMouseOut_ = (event) => {
            const actualTarget = event?.currentTarget || this.visibleTooltipTarget_;
            if (actualTarget) {
                this.initHidingTooltip_(actualTarget);
            }
        };
        this.onFocus_ = (event) => {
            this.initShowingTooltip_(event.currentTarget);
        };
        this.onBlur_ = (event) => {
            this.initHidingTooltip_(event.currentTarget);
        };
        this.onDocumentMouseDown_ = () => {
            this.hideTooltip_();
            // Additionally prevent any scheduled tooltips from showing up.
            if (this.showTooltipTimerId_) {
                clearTimeout(this.showTooltipTimerId_);
                this.showTooltipTimerId_ = 0;
            }
        };
        this.onTransitionEnd_ = () => {
            // Clear card and link tooltip.
            if (!this.hasAttribute('visible')) {
                this.cleanupLinkTooltip_();
                this.cleanupCardTooltip_();
            }
        };
    }
    static get is() {
        return 'files-tooltip';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Delay for showing the tooltip in milliseconds.
             */
            showTimeout: {
                type: Number,
                value: 500,
                readOnly: true,
            },
            /**
             * Delay for hiding the tooltip in milliseconds.
             */
            hideTimeout: {
                type: Number,
                value: 500,
                readOnly: true,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        document.body.addEventListener('mousedown', this.onDocumentMouseDown_);
        window.addEventListener('resize', this.onDocumentMouseDown_);
        this.addEventListener('transitionend', this.onTransitionEnd_);
        this.addEventListener('mouseover', this.onMouseOver_);
        this.addEventListener('mouseout', this.onMouseOut_);
    }
    /**
     * Adds targets to tooltip.
     */
    addTargets(targets) {
        for (let i = 0; i < targets.length; i++) {
            this.addTarget(targets[i]);
        }
    }
    /**
     * Adds a target to tooltip.
     */
    addTarget(target) {
        target.addEventListener('mouseover', this.onMouseOver_);
        target.addEventListener('mouseout', this.onMouseOut_);
        target.addEventListener('focus', this.onFocus_);
        target.addEventListener('blur', this.onBlur_);
    }
    /**
     * Hides currently visible tooltip if there is. In some cases, mouseout event
     * is not dispatched. This method is used to handle these cases manually.
     */
    hideTooltip() {
        if (this.showTooltipTimerId_) {
            clearTimeout(this.showTooltipTimerId_);
        }
        if (this.visibleTooltipTarget_) {
            this.initHidingTooltip_(this.visibleTooltipTarget_);
        }
    }
    /**
     * Update the tooltip text with the passed-in target.
     */
    updateTooltipText(target) {
        this.initShowingTooltip_(target);
    }
    initShowingTooltip_(target) {
        // Some tooltip is already visible.
        if (this.visibleTooltipTarget_) {
            if (this.hideTooltipTimerId_) {
                clearTimeout(this.hideTooltipTimerId_);
                this.hideTooltipTimerId_ = 0;
            }
        }
        // Even the current target is the visible tooltip target, we still need to
        // check if the label is different from the existing tooltip text, because
        // if label text changes, we need to show the tooltip.
        if (this.visibleTooltipTarget_ === target &&
            target.hasAttribute('aria-label') &&
            this.$.label.textContent === target.getAttribute('aria-label')) {
            return;
        }
        this.upcomingTooltipTarget_ = target;
        if (this.showTooltipTimerId_) {
            clearTimeout(this.showTooltipTimerId_);
        }
        this.showTooltipTimerId_ = setTimeout(this.showTooltip_.bind(this, target), this.visibleTooltipTarget_ ? 0 : this.showTimeout);
    }
    initHidingTooltip_(target) {
        // The tooltip is not visible.
        if (this.visibleTooltipTarget_ !== target) {
            if (this.upcomingTooltipTarget_ === target) {
                clearTimeout(this.showTooltipTimerId_);
                this.showTooltipTimerId_ = 0;
            }
            return;
        }
        if (this.hideTooltipTimerId_) {
            clearTimeout(this.hideTooltipTimerId_);
        }
        this.hideTooltipTimerId_ =
            setTimeout(this.hideTooltip_.bind(this), this.hideTimeout);
    }
    showTooltip_(target) {
        if (this.showTooltipTimerId_) {
            clearTimeout(this.showTooltipTimerId_);
            this.showTooltipTimerId_ = 0;
        }
        this.visibleTooltipTarget_ = target;
        const useCardTooltip = target.hasAttribute('show-card-tooltip');
        const useLinkTooltip = target.dataset['tooltipLinkHref'] &&
            target.dataset['tooltipLinkAriaLabel'] &&
            target.dataset['tooltipLinkText'];
        const windowEdgePadding = 6;
        const label = target.getAttribute('aria-label');
        if (!label) {
            return;
        }
        this.$.label.textContent = label;
        if (useLinkTooltip) {
            this.classList.add('link-tooltip');
            this.$.link.setAttribute('href', target.dataset['tooltipLinkHref']);
            this.$.link.setAttribute('aria-label', target.dataset['tooltipLinkAriaLabel']);
            this.$.link.textContent = target.dataset['tooltipLinkText'];
            this.$.link.setAttribute('aria-hidden', 'false');
            this.$.link.classList.add('link-label');
        }
        else {
            this.cleanupLinkTooltip_();
        }
        const invert = 'invert-tooltip';
        this.$.label.toggleAttribute('invert', target.hasAttribute(invert));
        const rect = target.getBoundingClientRect();
        let top = rect.top + rect.height;
        if (!useCardTooltip) {
            top += 8;
        }
        if (top + this.offsetHeight > document.body.offsetHeight) {
            top = rect.top - this.offsetHeight;
        }
        this.style.top = `${Math.round(top)}px`;
        let left;
        if (useCardTooltip) {
            this.classList.add('card-tooltip');
            this.$.label.classList.add('card-label');
            // Push left to the body's left when tooltip is longer than viewport.
            if (this.offsetWidth > document.body.offsetWidth) {
                left = 0;
            }
            else if (document.dir == 'rtl') {
                // Calculate position for rtl mode to align to the right of target.
                const width = this.getBoundingClientRect().width;
                const minLeft = rect.right - width;
                // The tooltip remains inside viewport if right align push it outside.
                left = Math.max(minLeft, 0);
            }
            else {
                // The tooltip remains inside viewport if left align push it outside.
                let maxLeft = document.body.offsetWidth - this.offsetWidth;
                maxLeft = Math.max(0, maxLeft);
                // Stick to the body's right if it goes outside viewport from right.
                left = Math.min(rect.left, maxLeft);
            }
        }
        else {
            // Clearing out style in case card-tooltip displayed previously.
            this.cleanupCardTooltip_();
            left = rect.left + rect.width / 2 - this.offsetWidth / 2;
            if (left < windowEdgePadding) {
                left = windowEdgePadding;
            }
            const maxLeft = document.body.offsetWidth - this.offsetWidth - windowEdgePadding;
            if (left > maxLeft) {
                left = maxLeft;
            }
        }
        left = Math.round(left);
        this.style.left = `${left}px`;
        this.setAttribute('aria-hidden', 'false');
        this.setAttribute('visible', 'true');
    }
    hideTooltip_() {
        if (this.hideTooltipTimerId_) {
            clearTimeout(this.hideTooltipTimerId_);
            this.hideTooltipTimerId_ = 0;
        }
        this.visibleTooltipTarget_ = undefined;
        this.removeAttribute('visible');
        this.setAttribute('aria-hidden', 'true');
    }
    /**
     * Clear card tooltip styles to prevent overwriting normal tooltip rules.
     */
    cleanupCardTooltip_() {
        this.classList.remove('card-tooltip');
        this.$.label.className = '';
    }
    /**
     * Clear link tooltip styles to prevent overwriting normal tooltip rules.
     */
    cleanupLinkTooltip_() {
        this.$.link.setAttribute('href', '#');
        this.$.link.removeAttribute('aria-label');
        this.$.link.setAttribute('aria-hidden', 'true');
        this.$.link.textContent = '';
        this.$.link.classList.remove('link-label');
        this.classList.remove('link-tooltip');
    }
}
customElements.define(FilesTooltip.is, FilesTooltip);
// #
// sourceURL=//ui/file_manager/file_manager/foreground/elements/files_tooltip.ts

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Displays a pie shaped progress indicator.
 * Accepts a `progress` property ranging from 0 to 1.
 */
let XfPieProgress = class XfPieProgress extends XfBase {
    constructor() {
        super(...arguments);
        // This should be a number between 0 and 1.
        this.progress = 0;
        this.size = 16; // Size of the SVG square measured by its side length.
        this.center = this.size / 2.0; // Center of the pie circle (both X and Y).
        this.radius = 5.4; // Radius of the pie circle.
        this.outlineShape = svg `
    <circle
      class="outline"
      cx="${this.center}"
      cy="${this.center}"
      r="${this.center}"
    />`;
        this.queuedShape = svg `
    <circle
      class="queued"
      stroke-width="1.6"
      cx="${this.center}"
      cy="${this.center}"
      r="5.6"
    />`;
        this.edgeShape = svg `
    <circle
      class="edge"
      stroke-width="2"
      cx="${this.center}"
      cy="${this.center}"
      r="${this.radius}"
    />`;
    }
    static get styles() {
        return getCSS$1();
    }
    render() {
        const { progress, size, center, radius } = this;
        const isQueued = progress === 0;
        // The progress pie is drawn as an arc with a thick stroke width (as thick
        // as the radius of the pie).
        const arcRadius = radius * 0.5;
        const maxArcLength = 2.0 * Math.PI * arcRadius;
        const pie = svg `
      <circle class="pie"
        stroke-width="${radius}"
        stroke-dasharray="${maxArcLength}"
        stroke-dashoffset="${maxArcLength * (1 - progress)}"
        cx="${center}"
        cy="${center}"
        r="${arcRadius}"
        transform="rotate(-90, ${center}, ${center})"
        visibility="${isQueued ? 'hidden' : 'visible'}"
      />`;
        const edge = isQueued ? this.queuedShape : this.edgeShape;
        return html$1 `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
        ${this.outlineShape} ${pie} ${edge}
      </svg>
    `;
    }
};
__decorate([
    property({ type: Number, reflect: true })
], XfPieProgress.prototype, "progress", void 0);
XfPieProgress = __decorate([
    customElement('xf-pie-progress')
], XfPieProgress);
function getCSS$1() {
    return css `
    svg {
      height: 100%;
      width: 100%;
    }

    .queued {
      fill: none;
      stroke: currentColor
    }

    .edge {
      fill: none;
      stroke: var(--cros-sys-progress);
    }

    .pie {
      fill: none;
      stroke: var(--cros-sys-progress);
      transition: stroke-dashoffset 1s ease-out;
    }

    .outline {
      fill: var(--xf-icon-color-outline, transparent);
      stroke: none;
    }
  `;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SyncStatus = chrome.fileManagerPrivate.SyncStatus;
/**
 * Sync status element used in both table and grid views that indicates sync
 * progress and file pinning.
 */
let XfInlineStatus = class XfInlineStatus extends XfBase {
    constructor() {
        super(...arguments);
        this.cantPin = false;
        this.availableOffline = false;
        this.progress = 0;
        this.syncStatus = SyncStatus.NOT_FOUND;
    }
    connectedCallback() {
        super.connectedCallback();
        document.querySelector('files-tooltip').addTarget(this);
    }
    static get styles() {
        return getCSS();
    }
    render() {
        const { progress, syncStatus, availableOffline, cantPin } = this;
        if (syncStatus !== SyncStatus.NOT_FOUND) {
            // Syncing, hence displaying "queued" or "in progress".
            this.ariaLabel = progress === 0 ?
                str('QUEUED_LABEL') :
                strf('IN_PROGRESS_PERCENTAGE_LABEL', (progress * 100).toFixed(0));
            return html$1 `<xf-pie-progress progress=${progress} />`;
        }
        if (cantPin) {
            this.ariaLabel = str('DRIVE_ITEM_UNAVAILABLE_OFFLINE');
            return this.renderIcon_('cant-pin');
        }
        if (availableOffline) {
            this.ariaLabel = str('OFFLINE_COLUMN_LABEL');
            return this.renderIcon_('offline');
        }
        this.ariaLabel = '';
        return html$1 ``;
    }
    renderIcon_(type) {
        return html$1 `<xf-icon size="extra_small" type="${type}" />`;
    }
};
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'cant-pin' })
], XfInlineStatus.prototype, "cantPin", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'available-offline' })
], XfInlineStatus.prototype, "availableOffline", void 0);
__decorate([
    property({ type: Number, reflect: true })
], XfInlineStatus.prototype, "progress", void 0);
__decorate([
    property({ type: SyncStatus, reflect: true, attribute: 'sync-status' })
], XfInlineStatus.prototype, "syncStatus", void 0);
XfInlineStatus = __decorate([
    customElement('xf-inline-status')
], XfInlineStatus);
function getCSS() {
    return css `
    xf-pie-progress, xf-icon {
      display: flex;
      height: 16px;
      width: 16px;
    }

    xf-icon {
      --xf-icon-color: currentColor;
    }
  `;
}
//# sourceMappingURL=deferred_elements.rollup.js.map

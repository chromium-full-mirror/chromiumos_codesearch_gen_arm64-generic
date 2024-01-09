/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import './snackbar-item.js';
import { css, html, LitElement } from '//resources/mwc/lit/index.js';
/** A chromeOS compliant snackbar. */
export class Snackbar extends LitElement {
    /** @nocollapse */
    static { this.styles = css `
    :host(:popover-open) {
      background: none;
      border: none;
    }

    #container {
      bottom: 0px;
      left: 0px;
      padding-bottom: 24px;
      padding-inline-start: 24px;
      position: fixed;
      width: 100%;
      box-sizing: border-box;
    }
  `; }
    /** @nocollapse */
    static { this.properties = {
        message: { type: String, reflect: true },
        closeOnEscape: { type: Boolean, reflect: true },
        timeoutMs: { type: Number, reflect: true },
    }; }
    /** @nocollapse */
    static { this.events = {
        /** The snackbar popup timed out and closed itself. */
        TIMEOUT: 'cros-snackbar-timeout',
        CLOSED: 'cros-snackbar-closed',
    }; }
    constructor() {
        super();
        /** @export */
        this.role = 'alert';
        /** @export */
        this.closeOnEscape = false;
        /** @export */
        /** Timeout between the snackbar showing and hiding, in milliseconds. */
        this.timeoutMs = -1;
        /** @export */
        this.popover = 'manual';
        this.pendingTimeout = null;
        this.openInternal = false;
        this.handleKeyDown = (event) => {
            if (this.openInternal && event.key === 'Escape' && this.closeOnEscape) {
                this.hidePopover();
            }
        };
        this.message = '';
    }
    /** @export */
    get open() {
        return this.openInternal;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('toggle', (e) => this.onToggle(e));
        document.addEventListener('keydown', this.handleKeyDown);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('keydown', this.handleKeyDown);
    }
    render() {
        return html `
        <div id="container">
          <cros-snackbar-item message=${this.message}>
            <slot name="icon" slot="icon"></slot>
            <slot
                name="action"
                slot="action"
                @slotchange=${this.handleSlotChanged}>
            </slot>
            <slot
                name="dismiss"
                slot="dismiss"
                @slotchange=${this.handleSlotChanged}>
            </slot>
          </cros-snackbar-item>
        </div>
    `;
    }
    onToggle(e) {
        this.openInternal = e.newState === 'open';
        if (e.newState === 'open') {
            this.startTimeout();
        }
        else if (e.newState === 'closed') {
            this.dispatchEvent(new CustomEvent(Snackbar.events.CLOSED));
            // If the snackbar was closed before the timer fired cancel it.
            if (this.pendingTimeout) {
                clearTimeout(this.pendingTimeout);
                this.pendingTimeout = null;
            }
        }
    }
    startTimeout() {
        if (this.timeoutMs < 1 || this.pendingTimeout)
            return;
        this.pendingTimeout = setTimeout(() => {
            this.hidePopover();
            this.dispatchEvent(new CustomEvent(Snackbar.events.TIMEOUT));
            clearTimeout(this.pendingTimeout);
            this.pendingTimeout = null;
        }, this.timeoutMs);
    }
    handleSlotChanged() {
        const hasActionButtons = this.querySelectorAll(`*[slot="action"], [slot="dismiss"]`);
        for (const snackbarItem of this.shadowRoot.querySelectorAll(`cros-snackbar-item`)) {
            snackbarItem.classList.toggle('has-action-button', hasActionButtons.length > 0);
        }
    }
}
customElements.define('cros-snackbar', Snackbar);

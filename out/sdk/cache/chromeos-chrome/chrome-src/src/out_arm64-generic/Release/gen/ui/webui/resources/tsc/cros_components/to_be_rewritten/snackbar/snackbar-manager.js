/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @fileoverview Defines the SnackbarManager class, which manages the operation
 * of the snackbar apps.
 *
 */
import { html, LitElement } from 'lit';
/**
 * SnackbarManager is responsible for handling requests to show the snackbar
 * across the entire app.
 */
export class SnackbarManager extends LitElement {
    constructor() {
        super(...arguments);
        this.showEventHandler = (event) => {
            this.showSnackbar(event.detail.options);
        };
        this.closeEventHandler = () => {
            this.closeSnackbar();
        };
    }
    connectedCallback() {
        super.connectedCallback();
        document.body.addEventListener('cros-show-snackbar', this.showEventHandler);
        document.body.addEventListener('cros-close-snackbar', this.closeEventHandler);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.body.removeEventListener('cros-show-snackbar', this.showEventHandler);
        document.body.removeEventListener('cros-close-snackbar', this.closeEventHandler);
    }
    get snackbar() {
        return this.renderRoot.querySelector('cros-snackbar');
    }
    get button() {
        return this.renderRoot.querySelector('cros-button');
    }
    /**
     * Shows a snackbar with a given message and optional button. Snackbars will
     * not stack, and this function will force close and override any previous
     * snackbar regardless of whether it is currently opened or closed.
     * @param options The configuration options for the snackbar.
     */
    showSnackbar(options) {
        if (this.snackbar.open) {
            // Close the snackbar to restart the snackbar timer.
            this.snackbar.hidePopover();
        }
        this.button.style.display = options.buttonText ? 'block' : 'none';
        this.button.label = options.buttonText || '';
        this.snackbar.message = options.messageText;
        this.snackbar.timeoutMs =
            (options.durationMs !== undefined) ? options.durationMs : 10000;
        this.buttonAction = options.buttonAction;
        this.onCloseAction = options.onCloseAction;
        this.snackbar.closeOnEscape = true;
        this.snackbar.showPopover();
    }
    render() {
        return html `
        <cros-snackbar @cros-snackbar-closed=${this.onCloseHandler}>
          <cros-button
              slot="action"
              buttonStyle="floating"
              inverted
              @click=${this.onButtonClick}>
          </cros-button>
        </cros-snackbar>
        `;
    }
    /** Close the snackbar if it is open. */
    closeSnackbar() {
        this.snackbar.hidePopover();
    }
    /**
     * Calls the onCloseAction if it is defined. Should run this when the
     * snackbar closes.
     */
    onCloseHandler() {
        this.onCloseAction?.();
    }
    onButtonClick() {
        this.snackbar.hidePopover();
        if (this.buttonAction)
            this.buttonAction();
    }
}
customElements.define('cros-snackbar-manager', SnackbarManager);

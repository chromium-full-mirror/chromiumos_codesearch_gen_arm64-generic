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
import 'google3/third_party/javascript/cros_components/snackbar/snackbar';
import { html, LitElement } from '//resources/mwc/lit/index.js';
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
        <cros-snackbar @toggle=${this.onToggle}>
          <cros-button
              slot="action"
              button-style="floating"
              inverted
              @click=${this.onButtonClick}>
          </cros-button>
        </cros-snackbar>
        `;
    }
    /** Close the snackbar if it is open. */
    closeSnackbar() {
        this.snackbar?.hidePopover();
    }
    onToggle(event) {
        if (event.newState === 'closed') {
            // Calls the `onCloseAction` if it is defined.
            this.onCloseAction?.();
        }
    }
    onButtonClick() {
        this.snackbar.hidePopover();
        if (this.buttonAction)
            this.buttonAction();
    }
}
customElements.define('cros-snackbar-manager', SnackbarManager);

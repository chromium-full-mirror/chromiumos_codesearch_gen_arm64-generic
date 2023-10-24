// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertString } from '../assert.js';
import * as dom from '../dom.js';
import { getI18nMessage } from '../models/load_time_data.js';
import { View } from './view.js';
/**
 * Creates the Dialog view controller.
 */
export class Dialog extends View {
    constructor(name, { onPositiveButtonClicked, onNegativeButtonClicked } = {}) {
        super(name, { dismissByEsc: true, defaultFocusSelector: '.dialog-positive-button' });
        this.positiveButton =
            dom.getFrom(this.root, '.dialog-positive-button', HTMLButtonElement);
        this.negativeButton = dom.getFromIfExists(this.root, '.dialog-negative-button', HTMLButtonElement);
        this.messageHolder =
            dom.getFrom(this.root, '.dialog-msg-holder', HTMLElement);
        this.titleHolder =
            dom.getFromIfExists(this.root, '.dialog-title', HTMLDivElement);
        this.descHolder =
            dom.getFromIfExists(this.root, '.dialog-description', HTMLDivElement);
        this.positiveButton.addEventListener('click', () => {
            onPositiveButtonClicked?.();
            this.leave({ kind: 'CLOSED', val: true });
        });
        this.negativeButton?.addEventListener('click', () => {
            onNegativeButtonClicked?.();
            this.leave();
        });
    }
    entering({ cancellable, description, message, title } = {}) {
        // Update dialog text
        if (message !== undefined) {
            this.messageHolder.textContent = assertString(message);
        }
        // Update title and description, and update i18n-text for testing purpose.
        if (title !== undefined && this.titleHolder !== null) {
            this.titleHolder.textContent = getI18nMessage(title);
            this.titleHolder.setAttribute('i18n-text', title);
        }
        if (description !== undefined && this.descHolder !== null) {
            this.descHolder.textContent = getI18nMessage(description);
            this.descHolder.setAttribute('i18n-text', description);
        }
        // Only change visibility when explicitly define boolean value.
        if (this.negativeButton !== null && cancellable !== undefined) {
            this.negativeButton.hidden = !cancellable;
        }
    }
}

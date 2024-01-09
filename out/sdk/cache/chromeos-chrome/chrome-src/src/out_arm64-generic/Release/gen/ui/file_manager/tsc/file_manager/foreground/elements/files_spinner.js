// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getTemplate } from './files_spinner.html.js';
export class FilesSpinner extends HTMLElement {
    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = getTemplate();
        const fragment = template.content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(fragment);
    }
    static get is() {
        return 'files-spinner';
    }
    /**
     * DOM connected: set aria attributes.
     */
    connectedCallback() {
        if (!this.shadowRoot) {
            return;
        }
        const host = this.shadowRoot.host;
        host.setAttribute('role', 'progressbar');
        host.setAttribute('aria-disabled', 'false');
        host.setAttribute('aria-valuemin', '0');
        host.setAttribute('aria-valuemax', '1');
    }
}
customElements.define(FilesSpinner.is, FilesSpinner);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './strings.m.js';
import { CrButtonElement } from 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { assert, assertInstanceof } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { BrowserProxy } from './browser_proxy.js';
import { getTemplate } from './web_app_install_dialog.html.js';
/**
 * @fileoverview
 * 'web-app-install-dialog' defines the UI for the ChromeOS web app install
 * dialog.
 */
class WebAppInstallDialogElement extends HTMLElement {
    static get is() {
        return 'web-app-install-dialog';
    }
    static get template() {
        return getTemplate();
    }
    constructor() {
        super();
        this.proxy = BrowserProxy.getInstance();
        const template = document.createElement('template');
        template.innerHTML = WebAppInstallDialogElement.template;
        const fragment = template.content.cloneNode(true);
        this.attachShadow({ mode: 'open' }).appendChild(fragment);
        this.initDynamicContent();
    }
    async initDynamicContent() {
        try {
            const dialogArgs = await this.proxy.handler.getDialogArgs();
            assert(dialogArgs.args);
            const nameElement = this.$('#name');
            assert(nameElement);
            nameElement.textContent = dialogArgs.args.name;
            const urlElement = this.$('#url');
            assert(urlElement);
            urlElement.textContent = dialogArgs.args.url.url;
            const descriptionElement = this.$('#description');
            assert(descriptionElement);
            descriptionElement.textContent = dialogArgs.args.description;
        }
        catch (e) {
            // TODO(crbug.com/1488697) Define expected behavior.
            console.error(`Unable to get dialog arguments . Error: ${e}.`);
        }
    }
    $(query) {
        return this.shadowRoot.querySelector(query);
    }
    connectedCallback() {
        const cancelButton = this.$('.cancel-button');
        assert(cancelButton);
        cancelButton.addEventListener('click', this.onCancelButtonClick.bind(this));
        const installButton = this.$('.install-button');
        assert(installButton);
        installButton.addEventListener('click', this.onInstallButtonClick.bind(this));
    }
    onCancelButtonClick() {
        this.proxy.handler.closeDialog();
    }
    async onInstallButtonClick(event) {
        assertInstanceof(event.target, CrButtonElement);
        const installButton = event.target;
        installButton.textContent = loadTimeData.getString('installing');
        installButton.classList.replace('install', 'installing');
        installButton.disabled = true;
        // Keep the installing state shown for at least 2 seconds to give the
        // impression that the PWA is being installed.
        // TODO(crbug.com/1488697): Call out to actually install the PWA.
        await new Promise(resolve => setTimeout(resolve, 2000));
        // TODO(crbug.com/1488697): Show an "Open app" button instead of
        // "Installed".
        installButton.textContent = 'Installed';
        installButton.classList.replace('installing', 'installed');
    }
}
customElements.define(WebAppInstallDialogElement.is, WebAppInstallDialogElement);

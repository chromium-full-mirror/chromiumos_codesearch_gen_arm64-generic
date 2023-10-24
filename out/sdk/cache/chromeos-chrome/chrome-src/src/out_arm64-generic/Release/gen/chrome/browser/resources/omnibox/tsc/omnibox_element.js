// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Helper class to be used as the super class of all custom elements in
 * chrome://omnibox.
 */
// TODO(manukh) Replace with `CustomElement` defined in
//  ui/webui/resources/js/custom_element.ts. Their essentially equivalent with
//  slightly different loading of the template element.
export class OmniboxElement extends HTMLElement {
    constructor(templateId) {
        super();
        this.attachShadow({ mode: 'open' });
        const template = OmniboxElement.getTemplate(templateId);
        this.shadowRoot.appendChild(template);
    }
    /**
     * Finds the 1st element matching the query within the local shadow root.
     */
    $(query) {
        return this.shadowRoot.querySelector(query);
    }
    /**
     * Finds all elements matching the query within the local shadow root.
     */
    $all(query) {
        return this.shadowRoot.querySelectorAll(query);
    }
    /**
     * Get a template that's known to exist within the DOM document.
     */
    static getTemplate(templateId) {
        return document.querySelector(`#${templateId}`).content.cloneNode(true);
    }
}

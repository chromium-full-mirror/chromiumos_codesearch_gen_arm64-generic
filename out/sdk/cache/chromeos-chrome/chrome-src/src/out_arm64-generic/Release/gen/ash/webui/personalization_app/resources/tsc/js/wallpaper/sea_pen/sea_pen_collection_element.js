// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { WithPersonalizationStore } from '../../personalization_store.js';
import { getTemplate } from './sea_pen_collection_element.html.js';
/** Enumeration of supported tabs. */
export var SeaPenTab;
(function (SeaPenTab) {
    SeaPenTab["TEMPLATES"] = "templates";
    SeaPenTab["IMAGE_RESULTS"] = "image_results";
})(SeaPenTab || (SeaPenTab = {}));
export class SeaPenCollectionElement extends WithPersonalizationStore {
    static get is() {
        return 'sea-pen-collection';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            templateId: {
                type: String,
                observer: 'onTemplateIdChanged_',
            },
            tab_: {
                type: SeaPenTab,
                value: SeaPenTab.TEMPLATES,
            },
        };
    }
    onTemplateIdChanged_() {
        this.tab_ = this.templateId ? SeaPenTab.IMAGE_RESULTS : SeaPenTab.TEMPLATES;
    }
    shouldShowTemplates_() {
        return this.tab_ === SeaPenTab.TEMPLATES;
    }
    shouldShowImages_() {
        return this.tab_ == SeaPenTab.IMAGE_RESULTS;
    }
}
customElements.define(SeaPenCollectionElement.is, SeaPenCollectionElement);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A polymer component that displays the SeaPen templates.
 */
import '../../../css/common.css.js';
import '../../../css/wallpaper.css.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PersonalizationRouterElement } from '../../personalization_router_element.js';
import { WithPersonalizationStore } from '../../personalization_store.js';
import { getSampleSeaPenTemplates } from '../utils.js';
import { getTemplate } from './sea_pen_templates_element.html.js';
export class SeaPenTemplatesElement extends WithPersonalizationStore {
    static get is() {
        return 'sea-pen-templates';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            seaPenTemplates_: {
                type: Array,
                computed: 'computeSeaPenTemplates_()',
            },
            selected_: Object,
        };
    }
    computeSeaPenTemplates_() {
        return getSampleSeaPenTemplates();
    }
    getAriaIndex_(i) {
        return i + 1;
    }
    isTemplateSelected_(template, selected) {
        return selected && selected.id === template.id;
    }
    onTemplateSelected_(e) {
        assert(e.model.template, 'no template selected');
        this.selected_ = e.model.template;
        const template = this.seaPenTemplates_.find(template => template.id === this.selected_.id);
        if (template) {
            PersonalizationRouterElement.instance().selectSeaPenTemplate(template.id);
        }
    }
}
customElements.define(SeaPenTemplatesElement.is, SeaPenTemplatesElement);

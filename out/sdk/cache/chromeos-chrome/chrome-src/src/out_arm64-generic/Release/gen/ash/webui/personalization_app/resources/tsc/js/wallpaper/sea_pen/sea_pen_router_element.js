// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/polymer/v3_0/iron-location/iron-location.js';
import 'chrome://resources/polymer/v3_0/iron-location/iron-query-params.js';
import './sea_pen_input_query_element.js';
import './sea_pen_template_query_element.js';
import './sea_pen_templates_element.js';
import './sea_pen_images_element.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { QUERY } from './constants.js';
import { isSeaPenEnabled, isSeaPenTextInputEnabled } from './load_time_booleans.js';
import { getTemplate } from './sea_pen_router_element.html.js';
export var SeaPenPaths;
(function (SeaPenPaths) {
    SeaPenPaths["ROOT"] = "";
    SeaPenPaths["RESULTS"] = "/results";
})(SeaPenPaths || (SeaPenPaths = {}));
let instance = null;
export class SeaPenRouterElement extends PolymerElement {
    static get is() {
        return 'sea-pen-router';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            basePath: String,
            path_: String,
            query_: String,
            queryParams_: Object,
            relativePath_: {
                type: String,
                computed: 'computeRelativePath_(path_, basePath)',
            },
        };
    }
    static instance() {
        assert(instance, 'sea pen router does not exist');
        return instance;
    }
    connectedCallback() {
        assert(isSeaPenEnabled(), 'sea pen must be enabled');
        super.connectedCallback();
        instance = this;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        instance = null;
    }
    selectSeaPenTemplate(templateId) {
        this.goToRoute(SeaPenPaths.ROOT, { seaPenTemplateId: templateId });
    }
    goToRoute(path, queryParams = {}) {
        assert(typeof this.basePath === 'string', 'basePath must be set');
        this.setProperties({ path_: this.basePath + path, queryParams_: queryParams });
    }
    /**
     * Compute the relative path compared to the SeaPen base path.
     * @param path the absolute path of the current route
     * @param basePath the absolute path of the base seapen route
     * @returns path relative to basePath, or null if path is not relative to
     *     basePath
     * @example
     * computeRelativePath_('/wallpaper/sea_pen', '/wallpaper/sea_pen') => ''
     * computeRelativePath_('/wallpaper/sea_pen/results', '/wallpaper/sea_pen') =>
     *   '/results'
     * computeRelativePath_('/wallpaper', '/wallpaper/sea_pen') => null
     */
    computeRelativePath_(path, basePath) {
        if (typeof path !== 'string' || typeof basePath !== 'string') {
            return null;
        }
        if (!path.startsWith(basePath)) {
            return null;
        }
        return path.substring(basePath.length);
    }
    shouldShowTextInputQuery_(relativePath, templateId) {
        return isSeaPenTextInputEnabled() &&
            (relativePath === SeaPenPaths.ROOT ||
                relativePath === SeaPenPaths.RESULTS) &&
            (templateId === QUERY || !templateId);
    }
    shouldShowTemplateQuery_(relativePath, templateId) {
        return (relativePath === SeaPenPaths.ROOT ||
            relativePath === SeaPenPaths.RESULTS) &&
            (!!templateId && templateId !== QUERY);
    }
    shouldShowSeaPenRoot_(relativePath) {
        if (typeof relativePath !== 'string') {
            return false;
        }
        return relativePath === SeaPenPaths.ROOT;
    }
    shouldShowSeaPenImages_(relativePath) {
        if (typeof relativePath !== 'string') {
            return false;
        }
        return relativePath === SeaPenPaths.RESULTS;
    }
}
customElements.define(SeaPenRouterElement.is, SeaPenRouterElement);

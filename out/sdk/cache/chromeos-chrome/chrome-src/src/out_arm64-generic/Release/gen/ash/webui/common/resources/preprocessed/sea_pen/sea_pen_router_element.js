// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/polymer/v3_0/iron-location/iron-location.js';
import 'chrome://resources/polymer/v3_0/iron-location/iron-query-params.js';
import './sea_pen_images_element.js';
import './sea_pen_input_query_element.js';
import './sea_pen_recent_wallpapers_element.js';
import './sea_pen_template_query_element.js';
import './sea_pen_templates_element.js';
import './sea_pen_terms_of_service_dialog_element.js';
import { assert } from 'chrome://resources/js/assert.js';
import { isSeaPenEnabled, isSeaPenTextInputEnabled } from './load_time_booleans.js';
import { acceptSeaPenTermsOfService, getShouldShowSeaPenTermsOfServiceDialog } from './sea_pen_controller.js';
import { getSeaPenProvider } from './sea_pen_interface_provider.js';
import { getTemplate } from './sea_pen_router_element.html.js';
import { WithSeaPenStore } from './sea_pen_store.js';
export var SeaPenPaths;
(function (SeaPenPaths) {
    SeaPenPaths["ROOT"] = "";
    SeaPenPaths["RESULTS"] = "/results";
})(SeaPenPaths || (SeaPenPaths = {}));
let instance = null;
export class SeaPenRouterElement extends WithSeaPenStore {
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
                observer: 'onRelativePathChanged_',
            },
            showSeaPenTermsOfServiceDialog_: Boolean,
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
        this.watch('showSeaPenTermsOfServiceDialog_', state => state.shouldShowSeaPenTermsOfServiceDialog);
        this.updateFromStore();
        this.fetchTermsOfServiceDialogStatus();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        instance = null;
    }
    selectSeaPenTemplate(templateId) {
        this.goToRoute(SeaPenPaths.ROOT, { seaPenTemplateId: templateId.toString() });
    }
    goToRoute(relativePath, queryParams = {}) {
        assert(typeof this.basePath === 'string', 'basePath must be set');
        this.setProperties({ path_: this.basePath + relativePath, queryParams_: queryParams });
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
        const relativePath = path.substring(basePath.length);
        // Normalize single slash to empty string.
        // This keeps path consistent between chrome://vc-background/ and
        // chrome://personalization/wallpaper/sea-pen.
        return relativePath === '/' ? '' : relativePath;
    }
    onRelativePathChanged_(relativePath) {
        if (typeof relativePath !== 'string') {
            // `relativePath` will be null when using Personalization breadcrumbs to
            // navigate back to home or wallpaper. Don't reset the path, as
            // `SeaPenRouter` may be imminently torn down.
            return;
        }
        if (!Object.values(SeaPenPaths).includes(relativePath)) {
            // If arriving at an unknown path, go back to the root path.
            console.warn('SeaPenRouter unknown path', relativePath);
            this.goToRoute(SeaPenPaths.ROOT);
        }
    }
    shouldShowTextInputQuery_(relativePath, templateId) {
        return isSeaPenTextInputEnabled() &&
            (relativePath === SeaPenPaths.ROOT ||
                relativePath === SeaPenPaths.RESULTS) &&
            templateId === 'Query';
    }
    shouldShowTemplateQuery_(relativePath, templateId) {
        return (relativePath === SeaPenPaths.ROOT ||
            relativePath === SeaPenPaths.RESULTS) &&
            (!!templateId && templateId !== 'Query');
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
    getTemplateIdFromQueryParams_(templateId) {
        if (templateId === 'Query') {
            return 'Query';
        }
        return parseInt(templateId);
    }
    async fetchTermsOfServiceDialogStatus() {
        await getShouldShowSeaPenTermsOfServiceDialog(getSeaPenProvider(), this.getStore());
    }
    async onAcceptSeaPenTerms_() {
        await acceptSeaPenTermsOfService(getSeaPenProvider(), this.getStore());
    }
}
customElements.define(SeaPenRouterElement.is, SeaPenRouterElement);

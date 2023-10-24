// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './page_favicon.js';
import './history_clusters_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BrowserProxyImpl } from './browser_proxy.js';
import { Annotation } from './history_cluster_types.mojom-webui.js';
import { getTemplate } from './url_visit.html.js';
import { insertHighlightedTextWithMatchesIntoElement } from './utils.js';
/**
 * @fileoverview This file provides a custom element displaying a visit to a
 * page within a cluster. A visit features the page favicon, title, a timestamp,
 * as well as an action menu.
 */
/**
 * Maps supported annotations to localized string identifiers.
 */
const annotationToStringId = new Map([
    [Annotation.kBookmarked, 'bookmarked'],
]);
const ClusterMenuElementBase = I18nMixin(PolymerElement);
class VisitRowElement extends ClusterMenuElementBase {
    static get is() {
        return 'url-visit';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The current query for which related clusters are requested and shown.
             */
            query: String,
            /**
             * The visit to display.
             */
            visit: Object,
            /**
             * Whether this visit is within a persisted cluster.
             */
            fromPersistence: Boolean,
            /**
             * Annotations to show for the visit (e.g., whether page was bookmarked).
             */
            annotations_: {
                type: Object,
                computed: 'computeAnnotations_(visit)',
            },
            /**
             * Usually this is true, but this can be false if deleting history is
             * prohibited by Enterprise policy.
             */
            allowDeletingHistory_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('allowDeletingHistory'),
            },
            /**
             * Debug info for the visit.
             */
            debugInfo_: {
                type: String,
                computed: 'computeDebugInfo_(visit)',
            },
            /**
             * Whether the cluster is in the side panel.
             */
            inSidePanel_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('inSidePanel'),
                reflectToAttribute: true,
            },
            /**
             * Page title for the visit. This property is actually unused. The side
             * effect of the compute function is used to insert the HTML elements for
             * highlighting into this.$.title element.
             */
            unusedTitle_: {
                type: String,
                computed: 'computeTitle_(visit)',
            },
            /**
             * This property is actually unused. The side effect of the compute
             * function is used to insert HTML elements for the highlighted
             * `this.visit.urlForDisplay` URL into the `this.$.url` element.
             */
            unusedUrlForDisplay_: {
                type: String,
                computed: 'computeUrlForDisplay_(visit)',
            },
        };
    }
    //============================================================================
    // Event handlers
    //============================================================================
    onAuxClick_() {
        // Notify the parent <history-cluster> element of this event.
        this.dispatchEvent(new CustomEvent('visit-clicked', {
            bubbles: true,
            composed: true,
            detail: this.visit,
        }));
    }
    onClick_(event) {
        // Ignore previously handled events.
        if (event.defaultPrevented) {
            return;
        }
        event.preventDefault(); // Prevent default browser action (navigation).
        // To record metrics.
        this.onAuxClick_();
        this.openUrl_(event);
    }
    onContextMenu_(event) {
        // Because WebUI has a Blink-provided context menu that's suitable, and
        // Side Panel always UIs always have a custom context menu.
        if (!loadTimeData.getBoolean('inSidePanel')) {
            return;
        }
        BrowserProxyImpl.getInstance().handler.showContextMenuForURL(this.visit.normalizedUrl, { x: event.clientX, y: event.clientY });
    }
    onKeydown_(e) {
        // To be consistent with <history-list>, only handle Enter, and not Space.
        if (e.key !== 'Enter') {
            return;
        }
        // To record metrics.
        this.onAuxClick_();
        this.openUrl_(e);
    }
    onActionMenuButtonClick_(event) {
        this.$.actionMenu.get().showAt(this.$.actionMenuButton);
        event.preventDefault(); // Prevent default browser action (navigation).
    }
    onHideSelfButtonClick_(event) {
        this.emitMenuButtonClick_(event, 'hide-visit');
    }
    onRemoveSelfButtonClick_(event) {
        this.emitMenuButtonClick_(event, 'remove-visit');
    }
    emitMenuButtonClick_(event, emitEventName) {
        event.preventDefault(); // Prevent default browser action (navigation).
        this.dispatchEvent(new CustomEvent(emitEventName, {
            bubbles: true,
            composed: true,
            detail: this.visit,
        }));
        this.$.actionMenu.get().close();
    }
    //============================================================================
    // Helper methods
    //============================================================================
    computeAnnotations_(_visit) {
        // Disabling annotations until more appropriate design for annotations in
        // the side panel is complete.
        if (this.inSidePanel_) {
            return [];
        }
        return this.visit.annotations
            .map((annotation) => annotationToStringId.get(annotation))
            .filter((id) => {
            return !!id;
        })
            .map((id) => loadTimeData.getString(id));
    }
    computeDebugInfo_(_visit) {
        if (!loadTimeData.getBoolean('isHistoryClustersDebug')) {
            return '';
        }
        return JSON.stringify(this.visit.debugInfo);
    }
    computeTitle_(_visit) {
        insertHighlightedTextWithMatchesIntoElement(this.$.title, this.visit.pageTitle, this.visit.titleMatchPositions);
        return this.visit.pageTitle;
    }
    computeUrlForDisplay_(_visit) {
        insertHighlightedTextWithMatchesIntoElement(this.$.url, this.visit.urlForDisplay, this.visit.urlForDisplayMatchPositions);
        return this.visit.urlForDisplay;
    }
    openUrl_(event) {
        BrowserProxyImpl.getInstance().handler.openHistoryCluster(this.visit.normalizedUrl, {
            middleButton: event.button === 1,
            altKey: event.altKey,
            ctrlKey: event.ctrlKey,
            metaKey: event.metaKey,
            shiftKey: event.shiftKey,
        });
    }
}
customElements.define(VisitRowElement.is, VisitRowElement);

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_components/omnibox/realbox_dropdown.js';
import './strings.m.js';
import { ColorChangeUpdater } from '//resources/cr_components/color_change_listener/colors_css_updater.js';
import { RealboxBrowserProxy } from '//resources/cr_components/omnibox/realbox_browser_proxy.js';
import { assert } from '//resources/js/assert.js';
import { MetricsReporterImpl } from '//resources/js/metrics_reporter/metrics_reporter.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './app.html.js';
// 675px ~= 449px (--ntp-realbox-primary-side-min-width) * 1.5 + some margin.
const canShowSecondarySideMediaQueryList = window.matchMedia('(min-width: 675px)');
// Displays the autocomplete matches in the autocomplete result.
export class OmniboxPopupAppElement extends PolymerElement {
    static get is() {
        return 'omnibox-popup-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Whether the secondary side can be shown based on the feature state and
             * the width available to the dropdown.
             */
            canShowSecondarySide: {
                type: Boolean,
                value: () => canShowSecondarySideMediaQueryList.matches,
                reflectToAttribute: true,
            },
            /*
             * Whether the secondary side is currently available to be shown.
             */
            hasSecondarySide: {
                reflectToAttribute: true,
                type: Boolean,
            },
            result_: Object,
        };
    }
    constructor() {
        super();
        this.autocompleteResultChangedListenerId_ = null;
        this.selectionChangedListenerId_ = null;
        this.callbackRouter_ = RealboxBrowserProxy.getInstance().callbackRouter;
        ColorChangeUpdater.forDocument().start();
    }
    connectedCallback() {
        super.connectedCallback();
        this.autocompleteResultChangedListenerId_ =
            this.callbackRouter_.autocompleteResultChanged.addListener(this.onAutocompleteResultChanged_.bind(this));
        this.selectionChangedListenerId_ =
            this.callbackRouter_.updateSelection.addListener(this.onUpdateSelection_.bind(this));
        canShowSecondarySideMediaQueryList.addEventListener('change', this.onCanShowSecondarySideChanged_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.autocompleteResultChangedListenerId_);
        this.callbackRouter_.removeListener(this.autocompleteResultChangedListenerId_);
        assert(this.selectionChangedListenerId_);
        this.callbackRouter_.removeListener(this.selectionChangedListenerId_);
        canShowSecondarySideMediaQueryList.removeEventListener('change', this.onCanShowSecondarySideChanged_.bind(this));
    }
    onCanShowSecondarySideChanged_(e) {
        this.canShowSecondarySide = e.matches;
    }
    onAutocompleteResultChanged_(result) {
        this.result_ = result;
        if (result.matches[0]?.allowedToBeDefaultMatch) {
            this.$.matches.selectFirst();
        }
        else if (this.$.matches.selectedMatchIndex >= result.matches.length) {
            this.$.matches.unselect();
        }
    }
    onResultRepaint_() {
        const metricsReporter = MetricsReporterImpl.getInstance();
        metricsReporter.measure('ResultChanged')
            .then(duration => metricsReporter.umaReportTime('WebUIOmnibox.ResultChangedToRepaintLatency.ToPaint', duration))
            .then(() => metricsReporter.clearMark('ResultChanged'))
            // Ignore silently if mark 'ResultChanged' is missing.
            .catch(() => { });
    }
    onUpdateSelection_(oldSelection, selection) {
        this.$.matches.updateSelection(oldSelection, selection);
    }
}
customElements.define(OmniboxPopupAppElement.is, OmniboxPopupAppElement);

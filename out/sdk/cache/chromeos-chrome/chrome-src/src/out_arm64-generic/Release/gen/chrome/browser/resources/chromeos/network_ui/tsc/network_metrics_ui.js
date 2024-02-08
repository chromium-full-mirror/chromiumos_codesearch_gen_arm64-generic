// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_style.css.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './network_metrics_ui.html.js';
import { NetworkUiBrowserProxyImpl } from './network_ui_browser_proxy.js';
import { uPlot } from './third_party/uPlot.iife.min.js';
/**
 * @fileoverview
 * Polymer element for UI controlling the WiFi performance
 * metrics and their values.
 */
const NetworkMetricsUiElementBase = I18nMixin(PolymerElement);
class NetworkMetricsUiElement extends NetworkMetricsUiElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = NetworkUiBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'network-metrics-ui';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Circular buffer of WiFi.SignalStrengthRssi
             * values from shill used for rendering graph.
             */
            rssiValues_: {
                type: Array,
                value: () => [],
            },
            minRssi_: {
                type: Number,
                value: -100,
            },
            maxRssi_: {
                type: Number,
                value: -25,
            },
            /**
             * Circular buffer of data extraction times used for rendering graph.
             */
            timeValues_: {
                type: Array,
                value: () => [],
            },
            running_: {
                type: Boolean,
                value: false,
            },
            graphRendered_: {
                type: Boolean,
                value: false,
            },
            /**
             * Milliseconds delay between extraction of data.
             */
            delay_: {
                type: Number,
                value: 500,
            },
            /**
             * Max data points to track in circular buffer.
             */
            dataCap_: {
                type: Number,
                value: 100,
            },
        };
    }
    start_() {
        this.running_ = true;
    }
    stop_() {
        this.running_ = false;
    }
    decreaseDelay_() {
        const minDelay = 1000 / 8; // 8Hz
        if (this.delay_ > minDelay) {
            this.delay_ /= 2;
        }
    }
    increaseDelay_() {
        this.delay_ *= 2;
    }
    /**
     * Requests first WiFi's properties and updates metric arrays
     * when response contains the network information.
     */
    async updateMetrics_() {
        const response = await this.browserProxy_.getFirstWifiNetworkProperties();
        if (response.length <= 0) {
            return;
        }
        const properties = response[0];
        this.updateRssi_(properties['WiFi.SignalStrengthRssi']);
        this.updateTime_();
    }
    /**
     * Updates Rssi array with extracted signal value.
     */
    updateRssi_(data) {
        if (this.rssiValues_.length >= this.dataCap_) {
            this.rssiValues_.shift();
        }
        this.rssiValues_.push(data);
    }
    /**
     * Updates time array with current time value.
     */
    updateTime_() {
        const currDate = new Date();
        if (this.timeValues_.length > this.dataCap_) {
            this.timeValues_.shift();
        }
        this.timeValues_.push(currDate.getTime() / 1000);
    }
    /**
     * Updates metrics and creates nested array series required
     * as input for the uPlot graph.
     */
    getMetrics_() {
        this.updateMetrics_();
        return [
            this.timeValues_,
            this.rssiValues_,
        ];
    }
    /**
     * Renders uPlot graph and initiates asynchronous loop
     * to keep updating with new values.
     */
    renderGraph_() {
        if (!this.graphRendered_) {
            const graph = this.makeChart_(this.getMetrics_());
            this.loop_(graph);
            this.graphRendered_ = true;
        }
    }
    wait_(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    /**
     * Repeatedly updates the uPlot graph with new data while the
     * running state is active. Time between updates is determined by
     * the delay property.
     */
    async loop_(graph) {
        while (true) {
            if (this.running_) {
                const updatedData = this.getMetrics_();
                graph.setData(updatedData);
            }
            await this.wait_(this.delay_);
        }
    }
    /**
     * Handles all uPlot functionality.
     */
    makeChart_(data) {
        const opts = {
            title: 'Rssi vs Time',
            width: window.innerWidth * .9,
            height: window.innerHeight * .667,
            scales: {
                x: { time: true },
                y: {
                    auto: false,
                    range: [this.minRssi_, this.maxRssi_],
                },
            },
            series: [
                {},
                {
                    label: 'Rssi',
                    stroke: 'red',
                },
            ],
        };
        return new uPlot(opts, data, this.shadowRoot.getElementById('metrics-graph'));
    }
}
customElements.define(NetworkMetricsUiElement.is, NetworkMetricsUiElement);

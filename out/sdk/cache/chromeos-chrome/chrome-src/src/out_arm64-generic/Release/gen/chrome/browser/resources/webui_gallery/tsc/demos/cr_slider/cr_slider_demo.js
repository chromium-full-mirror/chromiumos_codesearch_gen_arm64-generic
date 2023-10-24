// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/cr_elements/cr_slider/cr_slider.js';
import '../demo.css.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './cr_slider_demo.html.js';
function createTicks(min, increment, steps) {
    const ticks = [];
    for (let i = min; i <= steps; i++) {
        const tickValue = min + (i * increment);
        ticks.push({
            label: `${tickValue}`,
            value: tickValue,
        });
    }
    return ticks;
}
class CrSliderDemoElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.basicValue_ = 5;
        this.showMarkers_ = false;
        this.tickedValue_ = 0;
        this.ticks_ = createTicks(0, 5, 5);
    }
    static get is() {
        return 'cr-slider-demo';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            basicValue_: Number,
            disabledTicks_: Array,
            showMarkers_: Boolean,
            tickedValue_: Number,
            ticks_: Array,
        };
    }
    getMarkerCount_() {
        if (!this.showMarkers_) {
            return 0;
        }
        return this.ticks_.length;
    }
    getTickValue_() {
        return this.ticks_[this.tickedValue_].value;
    }
    onBasicValueChanged_() {
        this.basicValue_ = this.$.basicSlider.value;
    }
    onTickedValueChanged_() {
        this.tickedValue_ = this.$.tickedSlider.value;
    }
}
export const tagName = CrSliderDemoElement.is;
customElements.define(CrSliderDemoElement.is, CrSliderDemoElement);

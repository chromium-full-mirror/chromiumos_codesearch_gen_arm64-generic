// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A polymer element that presents ambient duration settings in
 * the ambient subpage element.
 */
import 'chrome://resources/ash/common/personalization/common.css.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/md_select.css.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { setScreenSaverDuration } from './ambient_controller.js';
import { getTemplate } from './ambient_duration_element.html.js';
import { getAmbientProvider } from './ambient_interface_provider.js';
export class AmbientDurationElement extends WithPersonalizationStore {
    static get is() {
        return 'ambient-duration';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Used to refer to the enum values in HTML file.
             */
            duration: {
                type: Number,
                observer: 'onDurationChanged_',
            },
            options_: {
                type: Array,
                value: ['5', '10', '30', '60', '0'],
            },
            selectedDuration_: {
                type: String,
                observer: 'onSelectedDurationChanged_',
            },
        };
    }
    getDurationLabel_(name) {
        switch (name) {
            case '5':
                return this.i18n('ambientModeDurationMinutes', 5);
            case '10':
                return this.i18n('ambientModeDurationMinutes', 10);
            case '30':
                return this.i18n('ambientModeDurationMinutes', 30);
            case '60':
                return this.i18n('ambientModeDurationOneHour');
            case '0':
                return this.i18n('ambientModeDurationForever');
            default:
                console.error('Unknown screen saver duration value.');
                return '';
        }
    }
    onDurationChanged_(value) {
        if (typeof value == 'number') {
            this.selectedDuration_ = value.toString();
        }
    }
    onOptionChanged_() {
        const elem = this.shadowRoot.querySelector('#durationOptions');
        if (elem) {
            this.selectedDuration_ = elem.value;
        }
    }
    setScreenSaverDuration_(minutes) {
        setScreenSaverDuration(minutes, getAmbientProvider(), this.getStore());
    }
    onSelectedDurationChanged_(value) {
        const minutes = parseInt(value, 10);
        if (isNaN(minutes)) {
            console.warn('Unexpected duration value received', value);
            return;
        }
        this.setScreenSaverDuration_(minutes);
    }
    isEqual_(lhs, rhs) {
        return lhs === rhs;
    }
}
customElements.define(AmbientDurationElement.is, AmbientDurationElement);

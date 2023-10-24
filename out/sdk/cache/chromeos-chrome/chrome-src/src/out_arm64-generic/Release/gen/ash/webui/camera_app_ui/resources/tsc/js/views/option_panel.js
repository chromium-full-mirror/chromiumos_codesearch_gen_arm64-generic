// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertInstanceof } from '../assert.js';
import * as dom from '../dom.js';
import * as nav from '../nav.js';
import { speak } from '../spoken_msg.js';
import * as state from '../state.js';
import { ViewName } from '../type.js';
import * as util from '../util.js';
import { OptionPanelOptions, View } from './view.js';
/**
 * View controller for options panel.
 */
export class OptionPanel extends View {
    constructor() {
        super(ViewName.OPTION_PANEL, {
            dismissByEsc: true,
            dismissByBackgroundClick: true,
            dismissOnStopStreaming: true,
        });
        this.panel = dom.get('#option-panel', HTMLDivElement);
        this.title = dom.get('#option-title', HTMLDivElement);
        this.container = dom.get('#options-container', HTMLDivElement);
        this.observers = new Map();
    }
    entering(options) {
        const { triggerButton, titleLabel, stateOptions, onStateChanged, ariaDescribedByElement, } = assertInstanceof(options, OptionPanelOptions);
        const { bottom, right } = triggerButton.getBoundingClientRect();
        this.panel.style.bottom = `${window.innerHeight - bottom}px`;
        this.panel.style.left = `${right + 6}px`;
        this.title.setAttribute('i18n-text', titleLabel);
        this.container.replaceChildren();
        for (const { label, ariaLabel, state: targetState, isDisableOption = false, } of stateOptions) {
            const item = util.instantiateTemplate('#state-option-template');
            const span = dom.getFrom(item, 'span', HTMLSpanElement);
            span.setAttribute('i18n-text', label);
            span.setAttribute('i18n-aria', ariaLabel);
            const input = dom.getFrom(item, 'input', HTMLInputElement);
            input.setAttribute('name', titleLabel);
            const stateEnabled = state.get(targetState);
            const checked = isDisableOption ? !stateEnabled : stateEnabled;
            input.checked = checked;
            input.addEventListener('change', () => {
                if (input.checked) {
                    ariaDescribedByElement.setAttribute('i18n-text', ariaLabel);
                    util.setupI18nElements(ariaDescribedByElement);
                    speak(ariaLabel);
                    onStateChanged(isDisableOption ? null : targetState);
                }
                // Don't close the panel automatically when switching options via
                // keyboard due to UX considerations.
                if (!state.get(state.State.KEYBOARD_NAVIGATION)) {
                    nav.close(ViewName.OPTION_PANEL);
                }
            });
            function observer(val) {
                input.checked = isDisableOption ? !val : val;
            }
            state.addObserver(targetState, observer);
            this.observers.set(targetState, observer);
            this.container.appendChild(item);
            if (checked) {
                input.focus();
            }
        }
        util.setupI18nElements(this.panel);
    }
    leaving() {
        for (const [targetState, observer] of this.observers) {
            state.removeObserver(targetState, observer);
        }
        this.observers.clear();
        return true;
    }
}

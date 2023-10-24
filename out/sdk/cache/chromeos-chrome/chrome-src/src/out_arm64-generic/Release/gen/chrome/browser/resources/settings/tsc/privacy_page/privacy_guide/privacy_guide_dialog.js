// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-rivacy-guide-dialog' is a settings dialog that helps users guide
 * various privacy settings.
 */
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import '../../settings_shared.css.js';
import './privacy_guide_page.js';
import { afterNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './privacy_guide_dialog.html.js';
export class SettingsPrivacyGuideDialogElement extends PolymerElement {
    static get is() {
        return 'settings-privacy-guide-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Preferences state.
             */
            prefs: {
                type: Object,
                notify: true,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
        const elementToFocus = this.shadowRoot.querySelector('#backToSettingsButton');
        afterNextRender(this, () => elementToFocus.focus());
    }
    onDialogCancel_(e) {
        if (e.target === this.$.dialog) {
            e.preventDefault();
        }
    }
    onDialogClose_(e) {
        // Ignore any 'close' events not fired directly by the <dialog> element.
        if (e.target !== this.$.dialog) {
            return;
        }
        // Catch and re-fire the 'close' event such that it bubbles across Shadow
        // DOM v1.
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
    onPrivacyGuidePageClose_(e) {
        e.stopPropagation();
        this.$.dialog.close();
    }
    onSettingsBackClick_(e) {
        e.stopPropagation();
        this.$.dialog.close();
    }
}
customElements.define(SettingsPrivacyGuideDialogElement.is, SettingsPrivacyGuideDialogElement);

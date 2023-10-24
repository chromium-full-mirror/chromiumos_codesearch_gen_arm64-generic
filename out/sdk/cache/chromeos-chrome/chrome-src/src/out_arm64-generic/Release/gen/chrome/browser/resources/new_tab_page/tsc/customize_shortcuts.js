// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './mini_page.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './customize_shortcuts.html.js';
import { CustomizeDialogAction } from './new_tab_page.mojom-webui.js';
import { NewTabPageProxy } from './new_tab_page_proxy.js';
/** Element that lets the user configure shortcut settings. */
export class CustomizeShortcutsElement extends PolymerElement {
    static get is() {
        return 'ntp-customize-shortcuts';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            customLinksEnabled_: Boolean,
            hide_: Boolean,
        };
    }
    constructor() {
        super();
        const { handler } = NewTabPageProxy.getInstance();
        this.pageHandler_ = handler;
        this.pageHandler_.getMostVisitedSettings().then(({ customLinksEnabled, shortcutsVisible }) => {
            this.customLinksEnabled_ = customLinksEnabled;
            this.hide_ = !shortcutsVisible;
        });
    }
    connectedCallback() {
        super.connectedCallback();
        FocusOutlineManager.forDocument(document);
    }
    apply() {
        this.pageHandler_.setMostVisitedSettings(this.customLinksEnabled_, /* shortcutsVisible= */ !this.hide_);
    }
    getCustomLinksAriaPressed_() {
        return !this.hide_ && this.customLinksEnabled_ ? 'true' : 'false';
    }
    getCustomLinksSelected_() {
        return !this.hide_ && this.customLinksEnabled_ ? 'selected' : '';
    }
    getHideClass_() {
        return this.hide_ ? 'selected' : '';
    }
    getMostVisitedAriaPressed_() {
        return !this.hide_ && !this.customLinksEnabled_ ? 'true' : 'false';
    }
    getMostVisitedSelected_() {
        return !this.hide_ && !this.customLinksEnabled_ ? 'selected' : '';
    }
    onCustomLinksClick_() {
        if (!this.customLinksEnabled_) {
            this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kShortcutsCustomLinksClicked);
        }
        this.customLinksEnabled_ = true;
        this.hide_ = false;
    }
    onHideChange_(e) {
        this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kShortcutsVisibilityToggleClicked);
        this.hide_ = e.detail;
    }
    onMostVisitedClick_() {
        if (this.customLinksEnabled_) {
            this.pageHandler_.onCustomizeDialogAction(CustomizeDialogAction.kShortcutsMostVisitedClicked);
        }
        this.customLinksEnabled_ = false;
        this.hide_ = false;
    }
}
customElements.define(CustomizeShortcutsElement.is, CustomizeShortcutsElement);

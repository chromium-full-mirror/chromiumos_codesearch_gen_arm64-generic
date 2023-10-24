// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import './strings.m.js';
import './shared_style.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './restricted_sites_dialog.html.js';
const ExtensionsRestrictedSitesDialogElementBase = I18nMixin(PolymerElement);
export class ExtensionsRestrictedSitesDialogElement extends ExtensionsRestrictedSitesDialogElementBase {
    static get is() {
        return 'extensions-restricted-sites-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            firstRestrictedSite: { type: String, value: '' },
        };
    }
    isOpen() {
        return this.$.dialog.open;
    }
    wasConfirmed() {
        return this.$.dialog.getNative().returnValue === 'success';
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onSubmitClick_() {
        this.$.dialog.close();
    }
    getDialogTitle_() {
        return this.i18n('matchingRestrictedSitesTitle', this.firstRestrictedSite);
    }
    getDialogWarning_() {
        return this.i18n('matchingRestrictedSitesWarning', this.firstRestrictedSite);
    }
}
customElements.define(ExtensionsRestrictedSitesDialogElement.is, ExtensionsRestrictedSitesDialogElement);

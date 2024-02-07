// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_style.css.js';
import '../../common/app_language_selection_dialog/app_language_selection_dialog.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { AppLanguageSelectionDialogEntryPoint } from '../../common/app_language_selection_dialog/app_language_selection_dialog.js';
import { getTemplate } from './app_language_item.html.js';
const AppManagementAppLanguageItemElementBase = I18nMixin(PolymerElement);
export class AppManagementAppLanguageItemElement extends AppManagementAppLanguageItemElementBase {
    constructor() {
        super(...arguments);
        this.app = undefined;
    }
    static get is() {
        return 'app-management-app-language-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            prefs: {
                type: Object,
                notify: true,
            },
            app: Object,
            hidden: {
                type: Boolean,
                computed: 'isHidden_(app)',
                reflectToAttribute: true,
            },
            showSelectLanguageDialog_: {
                type: Boolean,
                value: false,
            },
        };
    }
    onClick_() {
        this.showSelectLanguageDialog_ = true;
    }
    onSelectLanguageDialogClose_() {
        this.showSelectLanguageDialog_ = false;
    }
    /**
     * Returns true if the app does not support per-app-language settings.
     */
    isHidden_() {
        return !this.app?.supportedLocales?.length;
    }
    /**
     * Returns display name of the selected locale if exists.
     */
    getSelectedLocale_() {
        if (this.app?.selectedLocale?.localeTag) {
            const displayName = this.app.selectedLocale.displayName;
            return displayName === '' ? this.app.selectedLocale.localeTag :
                displayName;
        }
        return this.i18n('appLanguageDeviceLanguageLabel');
    }
    getDialogEntryPoint_() {
        return AppLanguageSelectionDialogEntryPoint.APPS_MANAGEMENT_PAGE;
    }
}
customElements.define(AppManagementAppLanguageItemElement.is, AppManagementAppLanguageItemElement);

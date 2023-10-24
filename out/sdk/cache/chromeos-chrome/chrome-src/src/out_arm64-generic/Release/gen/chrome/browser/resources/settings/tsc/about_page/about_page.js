// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-about-page' contains version and OS related
 * information.
 */
import '../icons.html.js';
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
// 
import '../settings_page/settings_section.js';
import '../settings_page_styles.css.js';
import '../settings_shared.css.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { RelaunchMixin, RestartType } from '../relaunch_mixin.js';
// 
import { getTemplate } from './about_page.html.js';
import { AboutPageBrowserProxyImpl, UpdateStatus } from './about_page_browser_proxy.js';
// clang-format off
// 
// clang-format on
// 
const SettingsAboutPageElementBase = RelaunchMixin(WebUiListenerMixin(I18nMixin(PolymerElement)));
export class SettingsAboutPageElement extends SettingsAboutPageElementBase {
    constructor() {
        super(...arguments);
        // 
        // 
        // 
        this.aboutBrowserProxy_ = AboutPageBrowserProxyImpl.getInstance();
        // 
        // 
    }
    static get is() {
        return 'settings-about-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            currentUpdateStatusEvent_: {
                type: Object,
                value: {
                    message: '',
                    progress: 0,
                    rollback: false,
                    status: UpdateStatus.DISABLED,
                },
            },
            /**
             * Whether the browser/ChromeOS is managed by their organization
             * through enterprise policies.
             */
            isManaged_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isManaged');
                },
            },
            /**
             * The name of the icon to display in the management card.
             * Should only be read if isManaged_ is true.
             */
            managedByIcon_: {
                type: String,
                value() {
                    return loadTimeData.getString('managedByIcon');
                },
            },
            // 
            // 
            // 
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.aboutBrowserProxy_.pageReady();
        // 
    }
    getPromoteUpdaterClass_() {
        // 
        return '';
    }
    // 
    // 
    onLearnMoreClick_(event) {
        // Stop the propagation of events, so that clicking on links inside
        // actionable items won't trigger action.
        event.stopPropagation();
    }
    onHelpClick_() {
        this.aboutBrowserProxy_.openHelpPage();
    }
    onRelaunchClick_() {
        this.performRestart(RestartType.RELAUNCH);
    }
    // 
    checkStatus_(status) {
        return this.currentUpdateStatusEvent_.status === status;
    }
    onManagementPageClick_() {
        window.location.href = loadTimeData.getString('managementPageUrl');
    }
    onProductLogoClick_() {
        this.$['product-logo'].animate({
            transform: ['none', 'rotate(-10turn)'],
        }, {
            duration: 500,
            easing: 'cubic-bezier(1, 0, 0, 1)',
        });
    }
}
customElements.define(SettingsAboutPageElement.is, SettingsAboutPageElement);

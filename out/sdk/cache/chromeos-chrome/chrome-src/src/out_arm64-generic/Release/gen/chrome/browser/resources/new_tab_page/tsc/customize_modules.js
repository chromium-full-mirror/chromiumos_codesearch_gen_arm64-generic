// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_radio_group/cr_radio_group.js';
import 'chrome://resources/cr_elements/cr_radio_button/cr_radio_button.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './customize_modules.html.js';
import { I18nMixin, loadTimeData } from './i18n_setup.js';
import { ChromeCartProxy } from './modules/cart/chrome_cart_proxy.js';
import { NewTabPageProxy } from './new_tab_page_proxy.js';
/** Element that lets the user configure modules settings. */
export class CustomizeModulesElement extends I18nMixin(PolymerElement) {
    constructor() {
        super(...arguments);
        this.setDisabledModulesListenerId_ = null;
    }
    static get is() {
        return 'ntp-customize-modules';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * If true, modules are customizable. If false, all modules are hidden.
             */
            show_: {
                type: Boolean,
                observer: 'onShowChange_',
            },
            showManagedByPolicy_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('modulesVisibleManagedByPolicy'),
            },
            modules_: Array,
            // Cart and Discount option toggles are workarounds for crbug.com/1199465
            // and will be removed after module customization is better defined.
            // Please avoid using similar pattern for other features.
            cartOptionToggle_: {
                type: Object,
                value: { enabled: false, initiallyEnabled: false },
            },
            discountOptionToggle_: {
                type: Object,
                value: { enabled: false, initiallyEnabled: false },
            },
            discountOptionToggleEligible_: {
                type: Boolean,
                value: false,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.setDisabledModulesListenerId_ =
            NewTabPageProxy.getInstance()
                .callbackRouter.setDisabledModules.addListener((all, ids) => {
                this.$.container.hidden = false;
                this.show_ = !all;
                this.modules_.forEach(({ id }, i) => {
                    const checked = !all && !ids.includes(id);
                    this.set(`modules_.${i}.checked`, checked);
                    this.set(`modules_.${i}.initiallyChecked`, checked);
                    this.set(`modules_.${i}.disabled`, ids.includes(id));
                });
            });
        NewTabPageProxy.getInstance().handler.getModulesIdNames().then(({ data }) => {
            this.modules_ = data.map((d) => ({
                name: d.name,
                id: d.id,
                checked: true,
            }));
            NewTabPageProxy.getInstance().handler.updateDisabledModules();
            if (this.modules_.some(module => module.id === 'chrome_cart')) {
                ChromeCartProxy.getHandler().getDiscountToggleVisible().then(({ toggleVisible }) => {
                    this.set('discountOptionToggleEligible_', toggleVisible);
                });
                ChromeCartProxy.getHandler().getDiscountEnabled().then(({ enabled }) => {
                    this.set('discountOptionToggle_.enabled', enabled);
                    this.discountOptionToggle_.initiallyEnabled = enabled;
                });
            }
            else if (this.modules_.some(module => module.id === 'history_clusters') &&
                loadTimeData.getBoolean('showCartInQuestModuleSetting')) {
                ChromeCartProxy.getHandler().getDiscountToggleVisible().then(({ toggleVisible }) => {
                    this.set('discountOptionToggleEligible_', toggleVisible);
                });
                ChromeCartProxy.getHandler().getDiscountEnabled().then(({ enabled }) => {
                    this.set('discountOptionToggle_.enabled', enabled);
                    this.discountOptionToggle_.initiallyEnabled = enabled;
                });
                ChromeCartProxy.getHandler().getCartFeatureEnabled().then(({ enabled }) => {
                    this.set('cartOptionToggle_.enabled', enabled);
                    this.cartOptionToggle_.initiallyEnabled = enabled;
                });
            }
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        NewTabPageProxy.getInstance().callbackRouter.removeListener(this.setDisabledModulesListenerId_);
    }
    ready() {
        // |window.CrPolicyStrings.controlledSettingPolicy| populates the tooltip
        // text of <cr-policy-indicator indicator-type="devicePolicy" /> elements.
        // Needs to be called before |super.ready()| so that the string is available
        // when <cr-policy-indicator> gets instantiated.
        window.CrPolicyStrings = {
            controlledSettingPolicy: loadTimeData.getString('controlledSettingPolicy'),
        };
        super.ready();
    }
    apply() {
        const handler = NewTabPageProxy.getInstance().handler;
        handler.setModulesVisible(this.show_);
        this.modules_
            .filter(({ checked, initiallyChecked }) => checked !== initiallyChecked)
            .forEach(({ id, checked }) => {
            // Don't set disabled status of a module if we are in hide all mode to
            // preserve the status for the next time we go into customize mode.
            if (this.show_) {
                handler.setModuleDisabled(id, !checked);
            }
            const base = `NewTabPage.Modules.${checked ? 'Enabled' : 'Disabled'}`;
            chrome.metricsPrivate.recordSparseValueWithPersistentHash(base, id);
            chrome.metricsPrivate.recordSparseValueWithPersistentHash(`${base}.Customize`, id);
        });
        // Discount toggle is a workaround for crbug.com/1199465 and will be
        // removed after module customization is better defined. Please avoid
        // using similar pattern for other features.
        if (this.discountOptionToggleEligible_ &&
            this.discountOptionToggle_.enabled !==
                this.discountOptionToggle_.initiallyEnabled) {
            ChromeCartProxy.getHandler().setDiscountEnabled(this.discountOptionToggle_.enabled);
            chrome.metricsPrivate.recordUserAction(`NewTabPage.Carts.${this.discountOptionToggle_.enabled ? 'EnableDiscount' :
                'DisableDiscount'}`);
        }
        if (this.cartOptionToggle_.enabled !==
            this.cartOptionToggle_.initiallyEnabled) {
            handler.setModuleDisabled('chrome_cart', !this.cartOptionToggle_.enabled);
        }
    }
    onShowRadioSelectionChanged_(e) {
        this.show_ = e.detail.value === 'customize';
    }
    onShowChange_() {
        this.modules_.forEach((m, i) => this.set(`modules_.${i}.checked`, this.show_ && !m.disabled));
    }
    radioSelection_() {
        return this.show_ ? 'customize' : 'hide';
    }
    moduleToggleDisabled_() {
        return this.showManagedByPolicy_ || !this.show_;
    }
    showCartOptionToggle_(id, checked) {
        return id === 'history_clusters' && checked &&
            loadTimeData.getBoolean('showCartInQuestModuleSetting');
    }
    showDiscountOptionToggle_(id, checked, eligible, cartOptionChecked) {
        if (id === 'chrome_cart') {
            return checked && eligible;
        }
        else if (id === 'history_clusters') {
            return checked && eligible && cartOptionChecked;
        }
        return false;
    }
}
customElements.define(CustomizeModulesElement.is, CustomizeModulesElement);

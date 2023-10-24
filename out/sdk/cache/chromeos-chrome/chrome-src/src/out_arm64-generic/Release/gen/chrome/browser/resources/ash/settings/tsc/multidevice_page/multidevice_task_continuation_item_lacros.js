// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-multidevice-task-continuation-item-lacros'
 * encapsulates special logic for the phonehub task continuation item used in
 * the multidevice subpage.
 *
 * Task continuation depends on the 'Open Tabs' Chrome sync type being
 * activated. This component observes changes to this property sent from Lacros
 * via Crosapi to check whether chrome sync is enabled.
 *
 * If it is enabled the multidevice feature item is used in the standard way,
 * otherwise the feature-controller and localized-link slots are overridden with
 * a disabled toggle and the task continuation localized string component that
 * is a special case containing two links.
 */
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import './multidevice_feature_item.js';
import './multidevice_task_continuation_disabled_link.js';
import '../settings_shared.css.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { MultiDeviceFeatureMixin } from './multidevice_feature_mixin.js';
import { getTemplate } from './multidevice_task_continuation_item_lacros.html.js';
const SettingsMultideviceTaskContinuationLacrosElementBase = MultiDeviceFeatureMixin(WebUiListenerMixin(PolymerElement));
class SettingsMultideviceTaskContinuationLacrosElement extends SettingsMultideviceTaskContinuationLacrosElementBase {
    static get is() {
        return 'settings-multidevice-task-continuation-item-lacros';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {};
    }
    ready() {
        super.ready();
        this.addWebUiListener('settings.updateMultidevicePageContentData', this.onPageContentDataChanged_.bind(this));
        this.onPageContentDataChanged_(this.pageContentData);
    }
    focus() {
        if (!this.isChromeTabsSyncEnabled_()) {
            this.shadowRoot.querySelector('cr-toggle').focus();
        }
        else {
            this.$.phoneHubTaskContinuationItemLacros.focus();
        }
    }
    onPageContentDataChanged_(newData) {
        this.pageContentData = newData;
    }
    isChromeTabsSyncEnabled_() {
        return this.pageContentData.isLacrosTabSyncEnabled;
    }
}
customElements.define(SettingsMultideviceTaskContinuationLacrosElement.is, SettingsMultideviceTaskContinuationLacrosElement);

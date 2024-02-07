// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'guest-os-shared-paths' is the settings shared paths subpage for guest OSes.
 */
import 'chrome://resources/ash/common/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import '../settings_shared.css.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { getVMNameForGuestOsType, GuestOsBrowserProxyImpl } from './guest_os_browser_proxy.js';
import { getTemplate } from './guest_os_shared_paths.html.js';
const SettingsGuestOsSharedPathsElementBase = I18nMixin(PolymerElement);
/** @polymer */
export class SettingsGuestOsSharedPathsElement extends SettingsGuestOsSharedPathsElementBase {
    static get is() {
        return 'settings-guest-os-shared-paths';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The type of Guest OS to share with. Should be 'crostini', 'pluginVm' or
             * 'bruschetta'.
             */
            guestOsType: String,
            /** Preferences state. */
            prefs: {
                type: Object,
                notify: true,
            },
            /**
             * The shared path string suitable for display in the UI.
             */
            sharedPaths_: Array,
            /**
             * The shared path which failed to be removed in the most recent attempt
             * to remove a path. Null indicates that removal succeeded. When non-null,
             * the failure dialog is shown.
             */
            sharedPathWhichFailedRemoval_: {
                type: String,
                value: null,
            },
        };
    }
    static get observers() {
        return [
            'onGuestOsSharedPathsChanged_(prefs.guest_os.paths_shared_to_vms.value)',
        ];
    }
    constructor() {
        super();
        this.browserProxy_ = GuestOsBrowserProxyImpl.getInstance();
    }
    onGuestOsSharedPathsChanged_(paths) {
        const vmPaths = [];
        for (const path in paths) {
            const vms = paths[path];
            if (vms.includes(this.vmName_())) {
                vmPaths.push(path);
            }
        }
        this.browserProxy_.getGuestOsSharedPathsDisplayText(vmPaths).then(text => {
            this.sharedPaths_ =
                vmPaths.map((path, i) => ({ path: path, pathDisplayText: text[i] }));
        });
    }
    removeSharedPath_(path) {
        this.sharedPathWhichFailedRemoval_ = null;
        this.browserProxy_.removeGuestOsSharedPath(this.vmName_(), path)
            .then(success => {
            if (!success) {
                this.sharedPathWhichFailedRemoval_ = path;
            }
        });
        recordSettingChange();
    }
    onRemoveSharedPathClick_(event) {
        this.removeSharedPath_(event.model.item.path);
    }
    onRemoveFailedRetryClick_() {
        this.removeSharedPath_(castExists(this.sharedPathWhichFailedRemoval_));
    }
    onRemoveFailedDismissClick_() {
        this.sharedPathWhichFailedRemoval_ = null;
    }
    /**
     * @return The name of the VM to share devices with.
     */
    vmName_() {
        return getVMNameForGuestOsType(this.guestOsType);
    }
    /**
     * @return Description for the page.
     */
    getDescriptionText_() {
        return this.i18n(this.guestOsType + 'SharedPathsInstructionsLocate') +
            '\n' + this.i18n(this.guestOsType + 'SharedPathsInstructionsAdd');
    }
    /**
     * @return Message to display when removing a shared path fails.
     */
    getRemoveFailureMessage_() {
        return this.i18n(this.guestOsType + 'SharedPathsRemoveFailureDialogMessage');
    }
    generatePathDisplayTextId_(index) {
        return 'path-display-text-' + index;
    }
}
customElements.define(SettingsGuestOsSharedPathsElement.is, SettingsGuestOsSharedPathsElement);

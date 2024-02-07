// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'crostini-subpage' is the settings subpage for managing Crostini.
 */
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/ash/common/cr_elements/icons.html.js';
import '../controls/settings_toggle_button.js';
import '../settings_shared.css.js';
import './crostini_confirmation_dialog.js';
import './crostini_disk_resize_dialog.js';
import './crostini_disk_resize_confirmation_dialog.js';
import './crostini_port_forwarding.js';
import './crostini_extra_containers.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/ash/common/cr_elements/web_ui_listener_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { RouteOriginMixin } from '../common/route_origin_mixin.js';
import { TERMINA_VM_TYPE } from '../guest_os/guest_os_browser_proxy.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { Router, routes } from '../router.js';
import { CrostiniBrowserProxyImpl } from './crostini_browser_proxy.js';
import { getTemplate } from './crostini_subpage.html.js';
/**
 * The current confirmation state.
 */
var ConfirmationState;
(function (ConfirmationState) {
    ConfirmationState["NOT_CONFIRMED"] = "notConfirmed";
    ConfirmationState["CONFIRMED"] = "confirmed";
})(ConfirmationState || (ConfirmationState = {}));
const SettingsCrostiniSubpageElementBase = DeepLinkingMixin(RouteOriginMixin(PrefsMixin(WebUiListenerMixin(PolymerElement))));
export class SettingsCrostiniSubpageElement extends SettingsCrostiniSubpageElementBase {
    static get is() {
        return 'settings-crostini-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Whether export / import UI should be displayed.
             */
            showCrostiniExportImport_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('showCrostiniExportImport');
                },
            },
            showArcAdbSideloading_: {
                type: Boolean,
                computed: 'and_(isArcAdbSideloadingSupported_, isAndroidEnabled_)',
            },
            isArcAdbSideloadingSupported_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('arcAdbSideloadingSupported');
                },
            },
            showCrostiniPortForwarding_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('showCrostiniPortForwarding');
                },
            },
            showCrostiniExtraContainers_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('showCrostiniExtraContainers');
                },
            },
            isAndroidEnabled_: {
                type: Boolean,
            },
            /**
             * Whether the uninstall options should be displayed.
             */
            hideCrostiniUninstall_: {
                type: Boolean,
                computed: 'or_(installerShowing_, upgraderDialogShowing_)',
            },
            /**
             * Whether the button to launch the Crostini container upgrade flow should
             * be shown.
             */
            showCrostiniContainerUpgrade_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('showCrostiniContainerUpgrade');
                },
            },
            showDiskResizeConfirmationDialog_: {
                type: Boolean,
                value: false,
            },
            installerShowing_: {
                type: Boolean,
            },
            upgraderDialogShowing_: {
                type: Boolean,
            },
            /**
             * Whether the button to launch the Crostini container upgrade flow should
             * be disabled.
             */
            disableUpgradeButton_: {
                type: Boolean,
                computed: 'or_(installerShowing_, upgraderDialogShowing_)',
            },
            /**
             * Whether the disk resizing dialog is visible or not
             */
            showDiskResizeDialog_: {
                type: Boolean,
                value: false,
            },
            showCrostiniMicPermissionDialog_: {
                type: Boolean,
                value: false,
            },
            diskSizeLabel_: {
                type: String,
                value: loadTimeData.getString('crostiniDiskSizeCalculating'),
            },
            diskResizeButtonLabel_: {
                type: String,
                value: loadTimeData.getString('crostiniDiskResizeShowButton'),
            },
            diskResizeButtonAriaLabel_: {
                type: String,
                value: loadTimeData.getString('crostiniDiskResizeShowButtonAriaLabel'),
            },
            canDiskResize_: {
                type: Boolean,
                value: false,
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kUninstallCrostini,
                    Setting.kCrostiniDiskResize,
                    Setting.kCrostiniMicAccess,
                    Setting.kCrostiniContainerUpgrade,
                ]),
            },
        };
    }
    static get observers() {
        return [
            'onCrostiniEnabledChanged_(prefs.crostini.enabled.value)',
            'onArcEnabledChanged_(prefs.arc.enabled.value)',
        ];
    }
    constructor() {
        super();
        /** RouteOriginMixin override */
        this.route = routes.CROSTINI_DETAILS;
        this.isDiskUserChosenSize_ = false;
        this.diskResizeConfirmationState_ = ConfirmationState.NOT_CONFIRMED;
        this.browserProxy_ = CrostiniBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('crostini-installer-status-changed', (status) => {
            this.installerShowing_ = status;
        });
        this.addWebUiListener('crostini-upgrader-status-changed', (status) => {
            this.upgraderDialogShowing_ = status;
        });
        this.addWebUiListener('crostini-container-upgrade-available-changed', (canUpgrade) => {
            this.showCrostiniContainerUpgrade_ = canUpgrade;
        });
        this.browserProxy_.requestCrostiniInstallerStatus();
        this.browserProxy_.requestCrostiniUpgraderDialogStatus();
        this.browserProxy_.requestCrostiniContainerUpgradeAvailable();
        this.loadDiskInfo_();
    }
    ready() {
        super.ready();
        const r = routes;
        this.addFocusConfig(r.CROSTINI_SHARED_PATHS, '#crostiniSharedPathsRow');
        this.addFocusConfig(r.CROSTINI_SHARED_USB_DEVICES, '#crostiniSharedUsbDevicesRow');
        this.addFocusConfig(r.CROSTINI_EXPORT_IMPORT, '#crostiniExportImportRow');
        this.addFocusConfig(r.CROSTINI_ANDROID_ADB, '#crostiniEnableArcAdbRow');
        this.addFocusConfig(r.CROSTINI_PORT_FORWARDING, '#crostiniPortForwardingRow');
        this.addFocusConfig(r.CROSTINI_EXTRA_CONTAINERS, '#crostiniExtraContainersRow');
    }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        // Does not apply to this page.
        if (newRoute !== this.route) {
            return;
        }
        this.attemptDeepLink();
    }
    onCrostiniEnabledChanged_(enabled) {
        if (!enabled &&
            Router.getInstance().currentRoute === routes.CROSTINI_DETAILS) {
            Router.getInstance().navigateToPreviousRoute();
        }
        if (enabled) {
            // The disk size or type could have changed due to the user reinstalling
            // Crostini, update our info.
            this.loadDiskInfo_();
        }
    }
    onArcEnabledChanged_(enabled) {
        this.isAndroidEnabled_ = enabled;
    }
    onExportImportClick_() {
        Router.getInstance().navigateTo(routes.CROSTINI_EXPORT_IMPORT);
    }
    onEnableArcAdbClick_() {
        Router.getInstance().navigateTo(routes.CROSTINI_ANDROID_ADB);
    }
    loadDiskInfo_() {
        this.browserProxy_
            .getCrostiniDiskInfo(TERMINA_VM_TYPE, /*requestFullInfo=*/ false)
            .then(diskInfo => {
            if (diskInfo.succeeded) {
                this.setResizeLabels_(diskInfo);
            }
        }, reason => {
            console.warn(`Unable to get info: ${reason}`);
        });
    }
    setResizeLabels_(diskInfo) {
        this.canDiskResize_ = diskInfo.canResize;
        if (!this.canDiskResize_) {
            this.diskSizeLabel_ =
                loadTimeData.getString('crostiniDiskResizeNotSupportedSubtext');
            return;
        }
        this.isDiskUserChosenSize_ = diskInfo.isUserChosenSize;
        if (this.isDiskUserChosenSize_) {
            if (diskInfo.ticks) {
                this.diskSizeLabel_ = diskInfo.ticks[diskInfo.defaultIndex].label;
            }
            this.diskResizeButtonLabel_ =
                loadTimeData.getString('crostiniDiskResizeShowButton');
            this.diskResizeButtonAriaLabel_ =
                loadTimeData.getString('crostiniDiskResizeShowButtonAriaLabel');
        }
        else {
            this.diskSizeLabel_ = loadTimeData.getString('crostiniDiskResizeDynamicallyAllocatedSubtext');
            this.diskResizeButtonLabel_ =
                loadTimeData.getString('crostiniDiskReserveSizeButton');
            this.diskResizeButtonAriaLabel_ =
                loadTimeData.getString('crostiniDiskReserveSizeButtonAriaLabel');
        }
    }
    onDiskResizeClick_() {
        if (!this.isDiskUserChosenSize_ &&
            this.diskResizeConfirmationState_ !== ConfirmationState.CONFIRMED) {
            this.showDiskResizeConfirmationDialog_ = true;
            return;
        }
        this.showDiskResizeDialog_ = true;
    }
    onDiskResizeDialogClose_() {
        this.showDiskResizeDialog_ = false;
        this.diskResizeConfirmationState_ = ConfirmationState.NOT_CONFIRMED;
        // DiskInfo could have changed.
        this.loadDiskInfo_();
    }
    onDiskResizeConfirmationDialogClose_() {
        // The on_cancel is followed by on_close, so check cancel didn't happen
        // first.
        if (this.showDiskResizeConfirmationDialog_) {
            this.diskResizeConfirmationState_ = ConfirmationState.CONFIRMED;
            this.showDiskResizeConfirmationDialog_ = false;
            this.showDiskResizeDialog_ = true;
        }
    }
    onDiskResizeConfirmationDialogCancel_() {
        this.showDiskResizeConfirmationDialog_ = false;
    }
    /**
     * Shows a confirmation dialog when removing crostini.
     */
    onRemoveClick_() {
        this.browserProxy_.requestRemoveCrostini();
        recordSettingChange();
    }
    /**
     * Shows the upgrade flow dialog.
     */
    onContainerUpgradeClick_() {
        this.browserProxy_.requestCrostiniContainerUpgradeView();
    }
    onSharedPathsClick_() {
        Router.getInstance().navigateTo(routes.CROSTINI_SHARED_PATHS);
    }
    onSharedUsbDevicesClick_() {
        Router.getInstance().navigateTo(routes.CROSTINI_SHARED_USB_DEVICES);
    }
    onPortForwardingClick_() {
        Router.getInstance().navigateTo(routes.CROSTINI_PORT_FORWARDING);
    }
    onExtraContainersClick_() {
        Router.getInstance().navigateTo(routes.CROSTINI_EXTRA_CONTAINERS);
    }
    getMicToggle_() {
        return castExists(this.shadowRoot.querySelector('#crostini-mic-permission-toggle'));
    }
    /**
     * If a change to the mic settings requires Crostini to be restarted, a
     * dialog is shown.
     */
    async onMicPermissionChange_() {
        if (await this.browserProxy_.checkCrostiniIsRunning()) {
            this.showCrostiniMicPermissionDialog_ = true;
        }
        else {
            this.getMicToggle_().sendPrefChange();
        }
    }
    onCrostiniMicPermissionDialogClose_(e) {
        const toggle = this.getMicToggle_();
        if (e.detail.accepted) {
            toggle.sendPrefChange();
            this.browserProxy_.shutdownCrostini();
        }
        else {
            toggle.resetToPrefValue();
        }
        this.showCrostiniMicPermissionDialog_ = false;
    }
    and_(a, b) {
        return a && b;
    }
    or_(a, b) {
        return a || b;
    }
}
customElements.define(SettingsCrostiniSubpageElement.is, SettingsCrostiniSubpageElement);

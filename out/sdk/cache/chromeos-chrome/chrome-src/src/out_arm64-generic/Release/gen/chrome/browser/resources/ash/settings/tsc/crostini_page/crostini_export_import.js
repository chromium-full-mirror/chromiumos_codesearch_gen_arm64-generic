// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'crostini-export-import' is the settings backup and restore subpage for
 * Crostini.
 */
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import './crostini_import_confirmation_dialog.js';
import '../settings_shared.css.js';
import { WebUiListenerMixin } from 'chrome://resources/ash/common/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { equalContainerId } from '../guest_os/guest_os_container_select.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { routes } from '../router.js';
import { CrostiniBrowserProxyImpl, DEFAULT_CROSTINI_GUEST_ID, DEFAULT_CROSTINI_VM } from './crostini_browser_proxy.js';
import { getTemplate } from './crostini_export_import.html.js';
const SettingsCrostiniExportImportElementBase = DeepLinkingMixin(RouteObserverMixin(WebUiListenerMixin(PolymerElement)));
export class SettingsCrostiniExportImportElement extends SettingsCrostiniExportImportElementBase {
    static get is() {
        return 'settings-crostini-export-import';
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
            showImportConfirmationDialog_: {
                type: Boolean,
                value: false,
            },
            /**
             * Whether the export import buttons should be enabled. Initially false
             * until status has been confirmed.
             */
            enableButtons_: {
                type: Boolean,
                computed: 'isEnabledButtons_(installerShowing_, exportImportInProgress_)',
            },
            /**
             * Whether the container select element is displayed.
             */
            showContainerSelect_: {
                type: Boolean,
                computed: 'isMultiContainer_(allContainers_)',
            },
            installerShowing_: {
                type: Boolean,
                value: false,
            },
            exportImportInProgress_: {
                type: Boolean,
                value: false,
            },
            /**
             * The known containers for display in the UI.
             */
            allContainers_: {
                type: Array,
                notify: true,
                value() {
                    return [];
                },
            },
            /**
             * The GuestId of the container to be exported.
             */
            exportContainerId_: {
                type: Object,
                value() {
                    return DEFAULT_CROSTINI_GUEST_ID;
                },
            },
            /**
             * The GuestId of the container to be overwritten by an imported
             * container file.
             */
            importContainerId_: {
                type: Object,
                value() {
                    return DEFAULT_CROSTINI_GUEST_ID;
                },
            },
            defaultVmName_: {
                type: String,
                value: DEFAULT_CROSTINI_VM,
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kBackupLinuxAppsAndFiles,
                    Setting.kRestoreLinuxAppsAndFiles,
                ]),
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = CrostiniBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('crostini-export-import-operation-status-changed', (inProgress) => {
            this.exportImportInProgress_ = inProgress;
        });
        this.addWebUiListener('crostini-installer-status-changed', (installerShowing) => {
            this.installerShowing_ = installerShowing;
        });
        this.addWebUiListener('crostini-container-info', (infos) => this.onContainerInfo_(infos));
        this.browserProxy_.requestCrostiniExportImportOperationStatus();
        this.browserProxy_.requestCrostiniInstallerStatus();
        this.browserProxy_.requestContainerInfo();
    }
    currentRouteChanged(route) {
        // Does not apply to this page.
        if (route !== routes.CROSTINI_EXPORT_IMPORT) {
            return;
        }
        this.attemptDeepLink();
    }
    onContainerInfo_(containerInfos) {
        this.allContainers_ = containerInfos;
        if (!this.isMultiContainer_(containerInfos)) {
            this.exportContainerId_ = DEFAULT_CROSTINI_GUEST_ID;
            this.importContainerId_ = DEFAULT_CROSTINI_GUEST_ID;
        }
    }
    onExportClick_() {
        this.browserProxy_.exportCrostiniContainer(this.exportContainerId_);
    }
    onImportClick_() {
        this.showImportConfirmationDialog_ = true;
    }
    onImportConfirmationDialogClose_() {
        this.showImportConfirmationDialog_ = false;
    }
    isEnabledButtons_(installerShowing, exportImportInProgress) {
        return !(installerShowing || exportImportInProgress);
    }
    isMultiContainer_(allContainers) {
        return !(allContainers.length === 1 &&
            equalContainerId(allContainers[0].id, DEFAULT_CROSTINI_GUEST_ID));
    }
    getSettingsBoxClass_(allContainers) {
        return this.isMultiContainer_(allContainers) ? 'two-line-settings-box' : '';
    }
}
customElements.define(SettingsCrostiniExportImportElement.is, SettingsCrostiniExportImportElement);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import './strings.m.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PageHandler, ReportingObserverReceiver } from './dlp_internals.mojom-webui.js';
import { getTemplate } from './dlp_internals_ui.html.js';
import { ContentRestrictionMap, DestinationComponentMap, EndpointTypeMap, EventModeMap, EventRestrictionMap, EventUserTypeMap, LevelMap, WebContentsElement } from './dlp_utils.js';
// Polymer element DLP Internals UI.
class DlpInternalsUi extends PolymerElement {
    static get is() {
        return 'dlp-internals-ui';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            isOtr_: Boolean,
            doRulesManagerExist_: Boolean,
            showTabs_: Boolean,
            selectedTabIdx_: Number,
            tabNames_: Array,
            clipboardSourceType_: String,
            clipboardSourceUrl_: String,
            reportingEvents_: Array,
            webContentsElements_: Array,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.fetchClipboardSourceInfo();
        this.fetchContentRestrictionsInfo();
        this.fetchFilesDatabaseEntries();
    }
    constructor() {
        super();
        // Names of the top level page tabs.
        this.tabNames_ = [
            'Clipboard',
            'OnScreen',
            'Files',
            'Reporting',
        ];
        // Whether the profle is off the record.
        this.isOtr_ = false;
        // Whether DLP rules manager exists.
        this.doRulesManagerExist_ = false;
        // Whether the page tabs show be added.
        this.showTabs_ = false;
        // Index of the selected top level page tab.
        this.selectedTabIdx_ = 0;
        // Reporting events array.
        this.reportingEvents_ = [];
        // Web Contents Info.
        this.webContentsElements_ = [];
        // Files Database Entries.
        this.filesEntries_ = [];
        if (loadTimeData.valueExists('isOtr')) {
            this.isOtr_ = loadTimeData.getBoolean('isOtr');
        }
        if (loadTimeData.valueExists('doRulesManagerExist')) {
            this.doRulesManagerExist_ =
                loadTimeData.getBoolean('doRulesManagerExist');
        }
        this.showTabs_ = !this.isOtr_ && this.doRulesManagerExist_;
        this.pageHandler_ = PageHandler.getRemote();
        this.reportingObserver_ = new ReportingObserverReceiver(this);
        this.pageHandler_.observeReporting(this.reportingObserver_.$.bindNewPipeAndPassRemote());
    }
    async fetchClipboardSourceInfo() {
        this.pageHandler_.getClipboardDataSource()
            .then((value) => {
            this.setClipboardInfo(value.source);
        })
            .catch((e) => {
            console.warn(`getClipboardDataSource failed: ${JSON.stringify(e)}`);
        });
    }
    setClipboardInfo(source) {
        if (!source) {
            this.clipboardSourceType_ = 'undefined';
            this.clipboardSourceUrl_ = 'undefined';
            return;
        }
        this.clipboardSourceType_ = `${this.endpointTypeToString(source.type)}`;
        if (source.url === undefined) {
            this.clipboardSourceUrl_ = 'undefined';
        }
        else {
            this.clipboardSourceUrl_ = source.url.url;
        }
    }
    endpointTypeToString(type) {
        return EndpointTypeMap[type] || 'invalid';
    }
    async fetchContentRestrictionsInfo() {
        this.pageHandler_.getContentRestrictionsInfo()
            .then((value) => {
            this.setWebContentsInfo(value.webContentsInfo);
        })
            .catch((e) => {
            console.warn(`getContentRestrictionsInfo failed: ${JSON.stringify(e)}`);
        });
    }
    setWebContentsInfo(webContentsInfo) {
        this.webContentsElements_ = [];
        for (const info of webContentsInfo) {
            this.webContentsElements_.push(new WebContentsElement(info));
        }
        if (webContentsInfo.length) {
            this.notifySplices('webContentsElements_', [{
                    index: 0,
                    addedCount: this.webContentsElements_.length,
                    object: this.webContentsElements_,
                    type: 'splice',
                    removed: [],
                }]);
        }
    }
    async fetchFilesDatabaseEntries() {
        this.pageHandler_.getFilesDatabaseEntries()
            .then((value) => {
            this.setFilesDatabaseEntries(value.dbEntries);
        })
            .catch((e) => {
            console.warn(`getFilesDatabaseEntries failed: ${JSON.stringify(e)}`);
        });
    }
    setFilesDatabaseEntries(entries) {
        this.filesEntries_ = entries;
        if (entries.length) {
            this.notifySplices('filesEntries_', [{
                    index: 0,
                    addedCount: this.filesEntries_.length,
                    object: this.filesEntries_,
                    type: 'splice',
                    removed: [],
                }]);
        }
    }
    /** Implements ReportingObserverInterface */
    onReportEvent(event) {
        this.reportingEvents_.push(event);
        this.notifySplices('reportingEvents_', [{
                index: this.reportingEvents_.length - 1,
                addedCount: 1,
                object: this.reportingEvents_,
                type: 'splice',
                removed: [],
            }]);
    }
    destinationToString(destination) {
        if (destination) {
            if (destination.urlPattern) {
                return destination.urlPattern;
            }
            if (destination.component) {
                return DestinationComponentMap[destination.component];
            }
        }
        return 'undefined';
    }
    restrictionToString(restriction) {
        if (restriction) {
            return EventRestrictionMap[restriction];
        }
        return 'undefined';
    }
    modeToString(mode) {
        if (mode) {
            return EventModeMap[mode];
        }
        return 'undefined';
    }
    userTypeToString(userType) {
        if (userType) {
            return EventUserTypeMap[userType];
        }
        return 'undefined';
    }
    timestampToString(timestampMicro) {
        if (timestampMicro) {
            const timestampMilli = Number(timestampMicro) / 1000;
            const timestamp = new Date(timestampMilli);
            return timestamp.toLocaleString();
        }
        return 'undefined';
    }
    contentRestrictionToString(restriction) {
        return ContentRestrictionMap[restriction];
    }
    levelToString(level) {
        return LevelMap[level];
    }
    creationTimeToString(timestampSeconds) {
        if (timestampSeconds) {
            const timestampMilli = Number(timestampSeconds) * 1000;
            const timestamp = new Date(timestampMilli);
            return timestamp.toLocaleString();
        }
        return 'undefined';
    }
    onFileSelected(e) {
        const selectedFile = e.target.value;
        this.pageHandler_.getFileInode(selectedFile.replace('C:\\fakepath\\', ''))
            .then((value) => {
            if (value.inode) {
                this.selectedFileInode_ = value.inode;
            }
            else {
                this.selectedFileInode_ = BigInt(0);
            }
        })
            .catch((e) => {
            console.warn(`getFileInode failed: ${JSON.stringify(e)}`);
        });
    }
}
customElements.define(DlpInternalsUi.is, DlpInternalsUi);

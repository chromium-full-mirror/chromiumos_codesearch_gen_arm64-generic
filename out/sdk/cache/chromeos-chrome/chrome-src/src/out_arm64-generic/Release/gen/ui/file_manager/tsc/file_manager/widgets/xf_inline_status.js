// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { str, strf } from '../common/js/util.js';
import '../foreground/elements/files_tooltip.js';
import { css, customElement, html, property, XfBase } from './xf_base.js';
const SyncStatus = chrome.fileManagerPrivate.SyncStatus;
/**
 * Sync status element used in both table and grid views that indicates sync
 * progress and file pinning.
 */
let XfInlineStatus = class XfInlineStatus extends XfBase {
    constructor() {
        super(...arguments);
        this.cantPin = false;
        this.availableOffline = false;
        this.progress = 0;
        this.syncStatus = SyncStatus.NOT_FOUND;
    }
    connectedCallback() {
        super.connectedCallback();
        document.querySelector('files-tooltip').addTarget(this);
    }
    static get styles() {
        return getCSS();
    }
    render() {
        const { progress, syncStatus, availableOffline, cantPin } = this;
        if (syncStatus !== SyncStatus.NOT_FOUND) {
            // Syncing, hence displaying "queued" or "in progress".
            this.ariaLabel = progress === 0 ?
                str('QUEUED_LABEL') :
                strf('IN_PROGRESS_PERCENTAGE_LABEL', (progress * 100).toFixed(0));
            return html `<xf-pie-progress progress=${progress} />`;
        }
        if (cantPin) {
            this.ariaLabel = str('DRIVE_ITEM_UNAVAILABLE_OFFLINE');
            return this.renderIcon_('cant-pin');
        }
        if (availableOffline) {
            this.ariaLabel = str('OFFLINE_COLUMN_LABEL');
            return this.renderIcon_('offline');
        }
        this.ariaLabel = '';
        return html ``;
    }
    renderIcon_(type) {
        return html `<xf-icon size="extra_small" type="${type}" />`;
    }
};
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'cant-pin' })
], XfInlineStatus.prototype, "cantPin", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'available-offline' })
], XfInlineStatus.prototype, "availableOffline", void 0);
__decorate([
    property({ type: Number, reflect: true })
], XfInlineStatus.prototype, "progress", void 0);
__decorate([
    property({ type: SyncStatus, reflect: true, attribute: 'sync-status' })
], XfInlineStatus.prototype, "syncStatus", void 0);
XfInlineStatus = __decorate([
    customElement('xf-inline-status')
], XfInlineStatus);
export { XfInlineStatus };
function getCSS() {
    return css `
    xf-pie-progress, xf-icon {
      display: flex;
      height: 16px;
      width: 16px;
    }

    xf-icon {
      --xf-icon-color: currentColor;
    }
  `;
}

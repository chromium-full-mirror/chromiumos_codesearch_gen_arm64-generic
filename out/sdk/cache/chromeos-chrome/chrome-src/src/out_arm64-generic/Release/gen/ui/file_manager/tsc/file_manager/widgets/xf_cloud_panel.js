// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var XfCloudPanel_1;
import { getCurrentLocaleOrDefault, secondsToRemainingTimeString, str, strf } from '../common/js/translations.js';
import { ICON_TYPES } from '../foreground/js/constants.js';
import { css, customElement, html, property, query, XfBase } from './xf_base.js';
/**
 * These type indicate static states that the cloud panel can enter. If one of
 * these is supplied, `items` and `percentage` is ignored.
 */
export var CloudPanelType;
(function (CloudPanelType) {
    CloudPanelType["OFFLINE"] = "offline";
    CloudPanelType["BATTERY_SAVER"] = "battery_saver";
    CloudPanelType["NOT_ENOUGH_SPACE"] = "not_enough_space";
    CloudPanelType["METERED_NETWORK"] = "metered_network";
})(CloudPanelType || (CloudPanelType = {}));
/**
 * The `<xf-cloud-panel>` represents the current state that the Drive bulk
 * pinning process is currently in. When files are being pinned and downloaded,
 * the `items` and `progress` attributes are used to signify that the panel is
 * in progress. The `type` attribute can be used with `not_enough_space`,
 * `offline`, and `battery_saver` to signify possible error or paused states.
 */
let XfCloudPanel = XfCloudPanel_1 = class XfCloudPanel extends XfBase {
    constructor() {
        super(...arguments);
        /**
         * Provide a number formatter that matches the users locale.
         */
        this.numberFormatter_ = new Intl.NumberFormat(getCurrentLocaleOrDefault());
    }
    static get events() {
        return {
            DRIVE_SETTINGS_CLICKED: 'drive_settings_clicked',
            PANEL_CLOSED: 'panel_closed',
        };
    }
    static get styles() {
        return getCSS();
    }
    /**
     * Returns true if the dialog is open, false otherwise.
     */
    get open() {
        return this.$panel_?.open || false;
    }
    /**
     * Show the element relative to the cloud icon that was clicked.
     */
    showAt(el) {
        this.$panel_.showAt(el, { top: el.offsetTop + el.offsetHeight + 20 });
    }
    /**
     * Close the panel.
     */
    close() {
        if (this.open) {
            this.$panel_.close();
        }
    }
    /**
     * Refires the close event to ensure it's a known `XfCloudPanel` event to
     * subscribe to.
     */
    async connectedCallback() {
        super.connectedCallback();
        await this.updateComplete;
        this.$panel_.addEventListener('close', () => {
            this.dispatchEvent(new CustomEvent(XfCloudPanel_1.events.PANEL_CLOSED, {
                bubbles: true,
                composed: true,
            }));
        });
    }
    /**
     * Handles click events for the Google Drive settings button. This emits the
     * event to be handled by the container.
     */
    onSettingsClicked_(event) {
        event.stopImmediatePropagation();
        event.preventDefault();
        if (event.repeat) {
            return;
        }
        this.dispatchEvent(new CustomEvent(XfCloudPanel_1.events.DRIVE_SETTINGS_CLICKED, {
            bubbles: true,
            composed: true,
        }));
    }
    render() {
        return html `<cr-action-menu>
      <div class="body">
        <div class="static progress" id="progress-preparing">
          <files-spinner></files-spinner>
          ${str('DRIVE_PREPARING_TO_SYNC')}
        </div>
        <div id="progress-state">
          <div class="progress">${this.items && this.items > 1 ?
            strf('DRIVE_MULTIPLE_FILES_SYNCING', this.numberFormatter_.format(this.items)) :
            str('DRIVE_SINGLE_FILE_SYNCING')}</div>
          <progress
              class="progress-bar"
              max="100"
              value="${this.percentage}">
            ${this.percentage}%
          </progress>
          <div class="progress-description">
          ${this.seconds && this.seconds > 0 ?
            secondsToRemainingTimeString(this.seconds) :
            str('DRIVE_BULK_PINNING_CALCULATING')}
          </div>
        </div>
        <div class="static" id="progress-finished">
          <xf-icon type="${ICON_TYPES.CLOUD}" size="large"></xf-icon>
          <div class="status-description">
            ${str('BULK_PINNING_FILE_SYNC_ON')}
          </div>
        </div>
        <div class="static" id="progress-offline">
        <xf-icon type="${ICON_TYPES.BULK_PINNING_OFFLINE}" size="large"></xf-icon>
          <div class="status-description">
            ${str('DRIVE_BULK_PINNING_OFFLINE')}
          </div>
        </div>
        <div class="static" id="progress-battery-saver">
        <xf-icon type="${ICON_TYPES.BULK_PINNING_BATTERY_SAVER}" size="large"></xf-icon>
          <div class="status-description">
            ${str('DRIVE_BULK_PINNING_BATTERY_SAVER')}
          </div>
        </div>
        <div class="static" id="progress-not-enough-space">
        <xf-icon type="${ICON_TYPES.ERROR_BANNER}" size="large"></xf-icon>
          <div class="status-description">
            ${str('DRIVE_BULK_PINNING_NOT_ENOUGH_SPACE')}
          </div>
        </div>
        <div class="static" id="progress-metered-network">
          <xf-icon type="${ICON_TYPES.CLOUD}" size="large"></xf-icon>
          <div class="status-description">
            ${str('DRIVE_BULK_PINNING_METERED_NETWORK')}
          </div>
        </div>
        <div class="divider"></div>
        <button class="action" @click=${this.onSettingsClicked_}>${str('GOOGLE_DRIVE_SETTINGS_LINK')}</button>
      </div>
    </cr-action-menu>`;
    }
};
__decorate([
    property({ type: Number, reflect: true, attribute: true })
], XfCloudPanel.prototype, "items", void 0);
__decorate([
    property({
        type: Number,
        reflect: true,
        converter: {
            fromAttribute: (value) => {
                const percentage = parseInt(value, 10);
                return percentage >= 0 && percentage <= 100 ? percentage : null;
            },
            toAttribute: (value) => String(value),
        },
    })
], XfCloudPanel.prototype, "percentage", void 0);
__decorate([
    property({
        type: CloudPanelType,
        reflect: true,
        converter: {
            fromAttribute: (value) => {
                if (!value) {
                    return null;
                }
                if (value.toUpperCase() in CloudPanelType) {
                    return value;
                }
                console.warn(`Failed to convert ${value} to CloudPanelType`);
                return null;
            },
            toAttribute: (key) => key,
        },
    })
], XfCloudPanel.prototype, "type", void 0);
__decorate([
    property({
        type: Number,
        reflect: true,
        converter: {
            fromAttribute: (value) => {
                const seconds = parseInt(value, 10);
                return seconds >= 0 ? seconds : null;
            },
            toAttribute: (value) => String(value),
        },
    })
], XfCloudPanel.prototype, "seconds", void 0);
__decorate([
    query('cr-action-menu')
], XfCloudPanel.prototype, "$panel_", void 0);
XfCloudPanel = XfCloudPanel_1 = __decorate([
    customElement('xf-cloud-panel')
], XfCloudPanel);
export { XfCloudPanel };
function getCSS() {
    return css `
    cr-action-menu {
      --cr-menu-border-radius: 20px;
    }

    :host {
      position: absolute;
      right: 0px;
      top: 50px;
      z-index: 600;
    }

    :host(:not([items][percentage])) #progress-state,
    :host([percentage="100"]) #progress-state,
    :host([type]) #progress-state {
      display: none;
    }

    :host(:not([items][percentage="100"])) #progress-finished,
    :host([type]) #progress-finished {
      display: none;
    }

    :host([percentage][items]) #progress-preparing,
    :host([type]) #progress-preparing {
      display: none;
    }

    :host(:not([type="offline"])) #progress-offline {
      display: none;
    }

    :host(:not([type="battery_saver"])) #progress-battery-saver {
      display: none;
    }

    :host(:not([type="not_enough_space"])) #progress-not-enough-space {
      display: none;
    }

    :host(:not([type="metered_network"])) #progress-metered-network {
      display: none;
    }

    .body {
      background-color: var(--cros-sys-base_elevated);
      display: flex;
      flex-direction: column;
      margin: -8px 0;
      width: 320px;
    }

    .static {
      align-items: center;
      display: flex;
      flex-direction: column;
    }

    xf-icon {
      padding: 27px 0px 8px;
    }

    xf-icon[type="bulk_pinning_done"] {
      --xf-icon-color: var(--cros-sys-positive);
    }

    xf-icon[type="bulk_pinning_offline"] {
      --xf-icon-color: var(--cros-sys-secondary);
    }

    xf-icon[type="bulk_pinning_battery_saver"] {
      --xf-icon-color: var(--cros-sys-secondary);
    }

    xf-icon[type="error_banner"] {
      --xf-icon-color: var(--cros-sys-error);
    }

    .status-description {
      color: var(--cros-sys-on_surface_variant);
      font: var(--cros-annotation-1-font);
      line-height: 20px;
      padding: 0px 16px 20px;
      text-align: center;
    }

    .progress {
      color: var(--cros-sys-on_surface);
      font: var(--cros-button-2-font);
      line-height: 20px;
      margin-inline: 16px;
      padding-top: 20px;
    }

    .progress-description {
      color: var(--cros-sys-on_surface_variant);
      font: var(--cros-annotation-1-font);
      padding-bottom: 20px;
      padding-inline: 16px;
    }

    .progress-bar {
      border-radius: 10px;
      height: 4px;
      margin: 8px 0 8px;
      margin-inline: 16px;
      width: calc(100% - 32px);
    }

    #progress-preparing {
      flex-direction: row;
      padding-bottom: 20px;
    }

    #progress-preparing files-spinner {
      height: 20px;
      margin: 0;
      margin-inline-end: 8px;
      width: 20px;
    }

    progress::-webkit-progress-bar {
      background-color: var(--cros-sys-highlight_shape);
      border-radius: 10px;
    }

    progress.progress-bar::-webkit-progress-value {
      background-color: var(--cros-sys-primary);
      border-radius: 10px;
    }

    .divider {
      background: var(--cros-sys-separator);
      height: 1px;
      width: 100%;
    }

    button.action {
      background-color: var(--cros-sys-base_elevated);
      border: 0;
      font: var(--cros-button-2-font);
      height: 36px;
      margin-bottom: 8px;
      margin-top: 8px;
      padding-inline: 16px;
      text-align: left;
    }

    :host-context([dir='rtl']) button.action {
      text-align: right;
    }

    .action {
      width: 100%;
    }

    .action:hover {
      background: var(--cros-sys-hover_on_subtle);
    }
  `;
}

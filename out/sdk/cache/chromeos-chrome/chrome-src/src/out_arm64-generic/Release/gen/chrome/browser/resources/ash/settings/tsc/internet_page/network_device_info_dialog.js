// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying cellular EID and QR code
 */
import '//resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '//resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/ash/common/cr_elements/cr_shared_style.css.js';
import '//resources/ash/common/cr_elements/cr_shared_vars.css.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { flush, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './network_device_info_dialog.html.js';
// The size of each tile in pixels.
const QR_CODE_TILE_SIZE = 5;
// Styling for filled tiles in the QR code.
const QR_CODE_FILL_STYLE = '#000000';
export class NetworkDeviceInfoDialogElement extends I18nMixin(PolymerElement) {
    static get is() {
        return 'network-device-info-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The euicc object whose EID and QRCode should be shown in the dialog.
             */
            euicc: Object,
            /**
             * Device state properties for the network subpage.
             */
            deviceState: Object,
            canvasSize_: Number,
            eid_: String,
            isCellularCarrierLockEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.valueExists('isCellularCarrierLockEnabled') &&
                        loadTimeData.getBoolean('isCellularCarrierLockEnabled');
                },
            },
        };
    }
    ready() {
        super.ready();
        if (this.euicc) {
            this.fetchEid_(this.euicc);
            return;
        }
        requestAnimationFrame(() => {
            this.$.done.focus();
        });
    }
    onDonePressed_() {
        this.$.deviceInfoDialog.close();
    }
    async fetchEid_(euicc) {
        const [qrCodeResponse, euiccPropertiesResponse] = await Promise.all([
            euicc.getEidQRCode(),
            euicc.getProperties(),
        ]);
        this.updateEid_(euiccPropertiesResponse?.properties);
        this.renderQrCode_(qrCodeResponse?.qrCode);
    }
    renderQrCode_(qrCode) {
        if (!qrCode) {
            return;
        }
        this.canvasSize_ = qrCode.size * QR_CODE_TILE_SIZE;
        flush();
        const context = this.getCanvasContext_();
        if (!context) {
            return;
        }
        context.clearRect(0, 0, this.canvasSize_, this.canvasSize_);
        context.fillStyle = QR_CODE_FILL_STYLE;
        let index = 0;
        for (let x = 0; x < qrCode.size; x++) {
            for (let y = 0; y < qrCode.size; y++) {
                if (qrCode.data[index]) {
                    context.fillRect(x * QR_CODE_TILE_SIZE, y * QR_CODE_TILE_SIZE, QR_CODE_TILE_SIZE, QR_CODE_TILE_SIZE);
                }
                index++;
            }
        }
    }
    updateEid_(euiccProperties) {
        if (!euiccProperties) {
            return;
        }
        this.eid_ = euiccProperties.eid;
    }
    getCanvasContext_() {
        if (this.canvasContext_) {
            return this.canvasContext_;
        }
        const canvas = this.shadowRoot.querySelector('#qrCodeCanvas');
        return canvas.getContext('2d');
    }
    shouldShowEidAndQrCode_() {
        return !!this.eid_;
    }
    shouldShowImei_() {
        return !!this.deviceState?.imei;
    }
    shouldShowSerial_() {
        if (!this.isCellularCarrierLockEnabled_) {
            return false;
        }
        return !!this.deviceState?.serial;
    }
    setCanvasContextForTest(canvasContext) {
        this.canvasContext_ = canvasContext;
    }
    getA11yLabel_() {
        if (this.eid_ && this.deviceState?.imei &&
            this.isCellularCarrierLockEnabled_ && this.deviceState?.serial) {
            return this.i18n('deviceInfoPopupA11yEidImeiAndSerial', this.eid_, this.deviceState.imei, this.deviceState.serial);
        }
        if (this.eid_) {
            if (this.deviceState?.imei) {
                return this.i18n('deviceInfoPopupA11yEidAndImei', this.eid_, this.deviceState.imei);
            }
            if (this.isCellularCarrierLockEnabled_ && this.deviceState?.serial) {
                return this.i18n('deviceInfoPopupA11yEidAndSerial', this.eid_, this.deviceState.serial);
            }
            return this.i18n('deviceInfoPopupA11yEid', this.eid_);
        }
        if (this.deviceState?.imei) {
            if (this.isCellularCarrierLockEnabled_ && this.deviceState?.serial) {
                return this.i18n('deviceInfoPopupA11yImeiAndSerial', this.deviceState.imei, this.deviceState.serial);
            }
            return this.i18n('deviceInfoPopupA11yImei', this.deviceState.imei);
        }
        if (this.isCellularCarrierLockEnabled_ && this.deviceState?.serial) {
            return this.i18n('deviceInfoPopupA11ySerial', this.deviceState.serial);
        }
        return '';
    }
}
customElements.define(NetworkDeviceInfoDialogElement.is, NetworkDeviceInfoDialogElement);

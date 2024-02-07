// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'crostini-disk-resize' is a dialog for disk management e.g.
 * resizing their disk or converting it from sparse to preallocated.
 */
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/ash/common/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../settings_shared.css.js';
import 'chrome://resources/ash/common/cr_elements/cr_slider/cr_slider.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { TERMINA_VM_TYPE } from '../guest_os/guest_os_browser_proxy.js';
import { CrostiniBrowserProxyImpl } from './crostini_browser_proxy.js';
import { getTemplate } from './crostini_disk_resize_dialog.html.js';
/**
 * Which overall dialogue view should be shown e.g. loading, unsupported.
 */
var DisplayState;
(function (DisplayState) {
    DisplayState["LOADING"] = "loading";
    DisplayState["UNSUPPORTED"] = "unsupported";
    DisplayState["ERROR"] = "error";
    DisplayState["RESIZE"] = "resize";
})(DisplayState || (DisplayState = {}));
/**
 * The current resizing state.
 */
var ResizeState;
(function (ResizeState) {
    ResizeState["INITIAL"] = "initial";
    ResizeState["RESIZING"] = "resizing";
    ResizeState["ERROR"] = "error";
    ResizeState["DONE"] = "done";
})(ResizeState || (ResizeState = {}));
export class SettingsCrostiniDiskResizeDialogElement extends PolymerElement {
    static get is() {
        return 'settings-crostini-disk-resize-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            minDiskSize_: {
                type: String,
            },
            maxDiskSize_: {
                type: String,
            },
            diskSizeTicks_: {
                type: Array,
            },
            defaultDiskSizeTick_: {
                type: Number,
            },
            maxDiskSizeTick_: {
                type: Number,
            },
            isLowSpaceAvailable_: {
                type: Boolean,
                value: false,
            },
            displayState_: {
                type: String,
                value: DisplayState.LOADING,
            },
            resizeState_: {
                type: String,
                value: ResizeState.INITIAL,
            },
            /**
             * Enable the html template to use DisplayState.
             */
            DisplayState: {
                type: Object,
                value: DisplayState,
            },
            /**
             * Enable the html template to use ResizeState.
             */
            ResizeState: {
                type: Object,
                value: ResizeState,
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = CrostiniBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.displayState_ = DisplayState.LOADING;
        this.$.diskResizeDialog.showModal();
        this.loadDiskInfo_();
    }
    /**
     * Requests info for the current VM disk, then populates the disk info and
     * current state once the call completes.
     */
    loadDiskInfo_() {
        this.browserProxy_
            .getCrostiniDiskInfo(TERMINA_VM_TYPE, /*requestFullInfo=*/ true)
            .then(diskInfo => {
            if (!diskInfo.succeeded) {
                this.displayState_ = DisplayState.ERROR;
            }
            else if (!diskInfo.canResize) {
                this.displayState_ = DisplayState.UNSUPPORTED;
            }
            else {
                this.displayState_ = DisplayState.RESIZE;
                this.maxDiskSizeTick_ = diskInfo.ticks.length - 1;
                this.defaultDiskSizeTick_ = diskInfo.defaultIndex;
                this.diskSizeTicks_ = diskInfo.ticks;
                this.minDiskSize_ = diskInfo.ticks[0].label;
                this.maxDiskSize_ =
                    diskInfo.ticks[diskInfo.ticks.length - 1].label;
                this.isLowSpaceAvailable_ = diskInfo.isLowSpaceAvailable;
            }
        }, reason => {
            console.warn(`Unable to get info: ${reason}`);
            this.displayState_ = DisplayState.ERROR;
        });
    }
    onCancelClick_() {
        this.$.diskResizeDialog.close();
    }
    onRetryClick_() {
        this.displayState_ = DisplayState.LOADING;
        this.loadDiskInfo_();
    }
    onResizeClick_() {
        const slider = castExists(this.shadowRoot.querySelector('#diskSlider'));
        const selectedIndex = slider.value;
        const size = this.diskSizeTicks_[selectedIndex].value;
        this.resizeState_ = ResizeState.RESIZING;
        this.browserProxy_.resizeCrostiniDisk('termina', size)
            .then(succeeded => {
            if (succeeded) {
                this.resizeState_ = ResizeState.DONE;
                this.$.diskResizeDialog.close();
            }
            else {
                this.resizeState_ = ResizeState.ERROR;
            }
        }, (reason) => {
            console.warn(`Unable to resize disk: ${reason}`);
            this.resizeState_ = ResizeState.ERROR;
        });
    }
    eq_(a, b) {
        return a === b;
    }
    resizeDisabled_(displayState, resizeState) {
        return displayState !== DisplayState.RESIZE ||
            resizeState === ResizeState.RESIZING;
    }
}
customElements.define(SettingsCrostiniDiskResizeDialogElement.is, SettingsCrostiniDiskResizeDialogElement);

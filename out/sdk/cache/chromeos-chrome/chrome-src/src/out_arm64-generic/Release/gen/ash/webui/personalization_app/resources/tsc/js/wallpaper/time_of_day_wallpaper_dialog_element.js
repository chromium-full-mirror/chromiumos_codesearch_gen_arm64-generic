// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Displays a dialog asking the user to whether enable auto dark
 * light mode or not before setting the time of day wallpaper.
 */
import 'chrome://resources/ash/common/personalization/common.css.js';
import 'chrome://resources/ash/common/personalization/cros_button_style.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './time_of_day_wallpaper_dialog_element.html.js';
export class TimeOfDayAcceptEvent extends CustomEvent {
    static { this.EVENT_NAME = 'time-of-day-wallpaper-dialog-accept'; }
    constructor() {
        super(TimeOfDayAcceptEvent.EVENT_NAME, {
            bubbles: true,
            composed: true,
            detail: null,
        });
    }
}
export class TimeOfDayWallpaperDialogElement extends PolymerElement {
    static get is() {
        return 'time-of-day-wallpaper-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {};
    }
    onClickAccept_() {
        this.dispatchEvent(new TimeOfDayAcceptEvent());
    }
    onClickClose_() {
        this.$.dialog.cancel();
    }
}
customElements.define(TimeOfDayWallpaperDialogElement.is, TimeOfDayWallpaperDialogElement);

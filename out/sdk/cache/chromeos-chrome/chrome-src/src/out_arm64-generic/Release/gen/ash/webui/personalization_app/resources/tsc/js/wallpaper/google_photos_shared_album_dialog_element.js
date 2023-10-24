// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Displays a dialog informing the user that a Google Photos album
 * selected for daily refresh is shared with other Google Photos accounts.
 */
import '../../css/cros_button_style.css.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { isGooglePhotosSharedAlbumsEnabled } from '../load_time_booleans.js';
import { getTemplate } from './google_photos_shared_album_dialog_element.html.js';
export class AcceptEvent extends CustomEvent {
    static { this.EVENT_NAME = 'shared-album-dialog-accept'; }
    constructor() {
        super(AcceptEvent.EVENT_NAME, {
            bubbles: true,
            composed: true,
            detail: null,
        });
    }
}
export class GooglePhotosSharedAlbumDialogElement extends PolymerElement {
    static get is() {
        return 'google-photos-shared-album-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {};
    }
    connectedCallback() {
        assert(isGooglePhotosSharedAlbumsEnabled(), 'google photos shared albums must be enabled');
        super.connectedCallback();
    }
    onClickAccept_() {
        this.dispatchEvent(new AcceptEvent());
    }
    onClickClose_() {
        this.$.dialog.cancel();
    }
}
customElements.define(GooglePhotosSharedAlbumDialogElement.is, GooglePhotosSharedAlbumDialogElement);

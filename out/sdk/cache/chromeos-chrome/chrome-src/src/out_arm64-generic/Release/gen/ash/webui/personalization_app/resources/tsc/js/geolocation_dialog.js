// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This dialog explains and asks users to enable system location
 * permission to allow precise timezone resolution.
 */
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/ash/common/cr_elements/localized_link/localized_link.js';
import { strictQuery } from 'chrome://resources/ash/common/typescript_utils/strict_query.js';
import { CrDialogElement } from 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './geolocation_dialog.html.js';
class GeolocationDialog extends PolymerElement {
    static get is() {
        return 'geolocation-dialog';
    }
    static get template() {
        return getTemplate();
    }
    /**
     * Callback on user accepting the geolocation dialog, with the intent to
     * enable geolocation for system services.
     * Closes the warning dialog and emits 'geolocation-enabled' event for direct
     * parent element to process.
     */
    onEnableClicked_() {
        this.dispatchEvent(new CustomEvent('geolocation-enabled', { bubbles: false }));
        this.getDialog_().close();
    }
    // Closes the dialog.
    onCancelClicked_() {
        this.getDialog_().close();
    }
    getDialog_() {
        return strictQuery('#systemGeolocationDialog', this.shadowRoot, CrDialogElement);
    }
}
customElements.define(GeolocationDialog.is, GeolocationDialog);

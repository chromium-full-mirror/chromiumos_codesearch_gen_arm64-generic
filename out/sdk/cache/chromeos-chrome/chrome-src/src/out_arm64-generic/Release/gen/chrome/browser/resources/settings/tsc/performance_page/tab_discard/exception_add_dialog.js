// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import './exception_add_input.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './exception_add_dialog.html.js';
const ExceptionAddDialogElementBase = PrefsMixin(PolymerElement);
export class ExceptionAddDialogElement extends ExceptionAddDialogElementBase {
    static get is() {
        return 'tab-discard-exception-add-dialog';
    }
    static get template() {
        return getTemplate();
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onSubmitClick_() {
        this.$.dialog.close();
        this.$.input.submit();
    }
}
customElements.define(ExceptionAddDialogElement.is, ExceptionAddDialogElement);

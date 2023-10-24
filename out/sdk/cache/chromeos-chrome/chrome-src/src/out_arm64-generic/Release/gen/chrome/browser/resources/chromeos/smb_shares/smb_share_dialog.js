// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'chrome://resources/ash/common/smb_shares/add_smb_share_dialog.js';
import './strings.m.js';

import {I18nBehavior} from 'chrome://resources/ash/common/i18n_behavior.js';
import {ColorChangeUpdater} from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import {html, Polymer} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

/**
 * @fileoverview
 * 'smb-share-dialog' is used to host a <add-smb-share-dialog> element to
 * add SMB file shares.
 */

Polymer({
  is: 'smb-share-dialog',

  _template: html`<!--_html_template_start_-->
<!-- The common style definitions should go to <add-smb-share-dialog>
  component for consistency, because that component is used in both Files app
  and OS settings page. Only Files app specific styles should be added here.
-->
<style>
  add-smb-share-dialog::part(dialog) {
    border-radius: 0;
    height: 100%;
    width: 100%;
  }

  :host-context([theme='legacy']) add-smb-share-dialog::part(title) {
    padding-top: 4px;
  }

  /* SMB dialog inside Files app is rendered inside a native dialog with fixed
    height, so we need to hard-code the body height. */
  :host-context([theme='legacy']) add-smb-share-dialog::part(body) {
    height: 390px;
  }

  :host-context([theme='refresh23']) add-smb-share-dialog::part(body) {
    height: 425px;
  }
</style>

<add-smb-share-dialog on-close="onDialogClose_">
</add-smb-share-dialog>
<!--_html_template_end_-->`,

  behaviors: [I18nBehavior],

  /**
   * @suppress {checkTypes}
   * @override
   */
  created() {
    ColorChangeUpdater.forDocument().start();
  },

  /** @private */
  onDialogClose_() {
    chrome.send('dialogClose');
  },
});

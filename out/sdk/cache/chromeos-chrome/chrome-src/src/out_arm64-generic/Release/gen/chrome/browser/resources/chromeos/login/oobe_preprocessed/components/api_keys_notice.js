// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import {html, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {loadTimeData} from '../i18n_setup.js';


/**
 * Simple container with a notice inside.
 * Shown when API keys are missing.
 * @polymer
 */
class ApiKeysNoticeElement extends PolymerElement {
  static get is() {
    return 'api-keys-notice-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style>
  #container {
    display: flex;
    justify-content: center;
    min-height: 0;
    position: fixed;
    top: 10px;
    width: 100%;
    z-index: 10;
  }

  #notice {
    background-color: var(--cros-color-primary);
    border-radius: 4px;
    color: whitesmoke;
    font-size: 15px;
    padding: 20px;
    text-align: center;
    width: 722px; /* same as #signin-banner */
  }
</style>

<div id="container">
  <div id="notice">[[noticeContent]]</div>
</div>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      noticeContent: {
        value: '',
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.updateLocaleAndMaybeShowNotice();
  }

  updateLocaleAndMaybeShowNotice() {
    const missingApiId = 'missingAPIKeysNotice';
    if (!loadTimeData.valueExists(missingApiId)) {
      return;
    }

    this.noticeContent = loadTimeData.getValue(missingApiId);
    this.hidden = false;
  }
}

customElements.define(ApiKeysNoticeElement.is, ApiKeysNoticeElement);

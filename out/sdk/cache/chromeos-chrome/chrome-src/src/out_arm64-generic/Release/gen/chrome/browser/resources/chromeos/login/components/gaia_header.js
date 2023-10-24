// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Blue header for New Gaia UI, contains blue avatar logo and user
 * email.
 *
 * Example:
 *   <gaia-header email="user@example.com">
 *   </gaia-header>
 *
 * Attributes:
 *  'email' - displayed email.
 */

import './common_styles/oobe_common_styles.css.js';

import {html, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

/** @polymer */
class GaiaHeader extends PolymerElement {
  static get is() {
    return 'gaia-header';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2015 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<!--
  Blue header for New Gaia UI, contains blue avatar logo and user email.

  Example:
    <gaia-header email="user@example.com">
    </gaia-header>

  Attributes:
   'email' - displayed email.
-->

<style include="oobe-common-styles">
  :host {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 0;
  }

  #email {
    font-family: var(--oobe-subheader-font-family);
    font-size: var(--oobe-subheader-font-size);
    font-weight: var(--oobe-subheader-font-weight);
    line-height: var(--oobe-subheader-line-height);
    margin-top: 5px;
  }
</style>
<img src="chrome://theme/IDR_LOGO_AVATAR_CIRCLE_BLUE_COLOR" alt
    class="self-start">
<div id="email"><span>[[email]]<span></div>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {email: String};
  }
}

customElements.define(GaiaHeader.is, GaiaHeader);

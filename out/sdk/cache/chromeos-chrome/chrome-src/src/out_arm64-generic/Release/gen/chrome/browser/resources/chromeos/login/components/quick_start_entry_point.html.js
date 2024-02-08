import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><!--
Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<!-- Structure of Quick Start button custom element -->
<oobe-icon-button
  id="quickStartButton"
  text-key="[[quickStartTextKey]]"
  icon1x="oobe-20:quick-start-android-device"
  icon2x="oobe-20:quick-start-android-device"
  on-click="quickStartButtonClicked"
>
</oobe-icon-button>
<!--_html_template_end_-->`;
}
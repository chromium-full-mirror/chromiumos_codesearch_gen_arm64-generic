import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><!--
Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->
<style include="oobe-dialog-host-styles">

/* Add styles here */

</style>
<oobe-adaptive-dialog role="dialog">
  <!-- Add HTML content here -->
  <h1 slot="title">
    Your title
  </h1>
  <div slot="subtitle">
    Your subtitle
  </div>
  <div slot="content" class="layout vertical">
    Your content
  </div>
  <div slot="back-navigation">
    <oobe-back-button id="backButton"
        on-click="onBackClicked_"></oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button id="nextButton"
        on-click="onNextClicked_"></oobe-next-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
}
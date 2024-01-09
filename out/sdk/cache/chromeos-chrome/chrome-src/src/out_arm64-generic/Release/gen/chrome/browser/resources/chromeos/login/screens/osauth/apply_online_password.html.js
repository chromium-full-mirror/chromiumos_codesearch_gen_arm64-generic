import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><!-- Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file. -->

<style include="oobe-dialog-host-styles
    cros-color-overrides">
@media screen and (max-width: 920px) {
  :host {
    --radio-button-height: 155px;
  }
}
</style>

<oobe-loading-dialog id="password-selection-progress" role="dialog"
    title-key="gaiaLoading">
  <iron-icon slot="icon" icon="oobe-32:lock"></iron-icon>
</oobe-loading-dialog>
<!--_html_template_end_-->`;
}
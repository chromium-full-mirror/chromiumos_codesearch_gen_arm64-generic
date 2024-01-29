import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><!--
Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<notification-card id="gaia-allowlist-error" class="fit" for-step="default"
  on-buttonclick="onAllowlistErrorTryAgainClick"
  on-linkclick="onAllowlistErrorLinkClick"
  button-label="[[i18nDynamic(locale, 'tryAgainButton')]]"
  link-label="[[i18nDynamic(locale, 'learnMoreButton')]]">
  [[i18nDynamic(locale, allowlistError)]]
</notification-card>
<!--_html_template_end_-->`;
}
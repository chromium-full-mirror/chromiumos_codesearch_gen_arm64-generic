import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><!--
Copyright 2020 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->


<style include="oobe-dialog-host-styles"></style>
<oobe-adaptive-dialog id="parentalHandoffDialog" role="dialog"
  aria-label$="[[i18nDynamic(locale,
    'parentalHandoffDialogTitle', username)]]">
<iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
<h1 slot="title">
  [[i18nDynamic(locale, 'parentalHandoffDialogTitle', username)]]
</h1>
<p slot="subtitle">
  [[i18nDynamic(locale, 'parentalHandoffDialogSubtitle', username)]]
</p>
<div slot="content" class="flex layout vertical center center-justified">
  <iron-icon icon="oobe-illos:kids-turn-illo" class="illustration-jelly">
  </iron-icon>
</div>
<div slot="bottom-buttons">
  <oobe-next-button id="nextButton"
      text-key="parentalHandoffDialogNextButton" class="focus-on-show"
      inverse on-click="onNextButtonPressed"></oobe-next-button>
</div>
</oobe-adaptive-dialog>

<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import '//resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '../oobe_cr_lottie.js';
import '../buttons/oobe_text_button.js';
import '../common_styles/oobe_common_styles.css.js';
import '../common_styles/oobe_dialog_host_styles.css.js';
import './oobe_adaptive_dialog.js';
import './oobe_content_dialog.js';

import {assert} from '//resources/ash/common/assert.js';
import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {OobeDialogHostBehavior} from '../behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../behaviors/oobe_i18n_behavior.js';

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {OobeI18nBehaviorInterface}
 */
const OobeLoadingDialogBase =
    mixinBehaviors([OobeI18nBehavior, OobeDialogHostBehavior], PolymerElement);


/** @polymer */
export class OobeLoadingDialog extends OobeLoadingDialogBase {
  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2021 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles">
  #spinner {
    max-height: 286px;
    max-width: 286px;
  }
</style>
<oobe-adaptive-dialog id="dialog" role="dialog">
  <slot slot="icon" name="icon"></slot>
  <h1 slot="title">
    <slot name="title" aria-label="[[getAriaLabel(locale, titleLabelKey, titleKey)]]">
      <template is="dom-if" if="[[titleKey]]">
        [[i18nDynamic(locale, titleKey)]]
      </template>
    </slot>
  </h1>
  <template is="dom-if" if="[[subtitleKey]]">
    <div slot="subtitle">[[i18nDynamic(locale, subtitleKey)]]</div>
  </template>
  <div slot="content" class="flex layout vertical center center-justified">
    <oobe-cr-lottie id="spinner" hide-play-pause-icon
        animation-url="../../animations/spinner.json">
    </oobe-cr-lottie>
  </div>
  <!-- Cancel button -->
  <div slot="bottom-buttons" hidden="[[!canCancel]]"
      class="flex layout horizontal end-justified">
    <oobe-text-button id="cancelButton" on-click="cancel"
        text-key="cancelButton">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get is() {
    return 'oobe-loading-dialog';
  }

  static get properties() {
    return {
      titleKey: {
        type: String,
      },

      titleLabelKey: {
        type: String,
      },

      subtitleKey: {
        type: String,
        value: '',
      },

      /*
       * If true loading step can be canceled by pressing a cancel button.
       */
      canCancel: {
        type: Boolean,
        value: false,
      },
    };
  }

  onBeforeShow() {
    this.$.spinner.playing = true;
  }

  onBeforeHide() {
    this.$.spinner.playing = false;
  }

  // Returns either the passed 'title-label-key', or uses the 'title-key'.
  getAriaLabel(locale, titleLabelKey, titleKey) {
    assert(this.titleLabelKey || this.titleKey,
           'OOBE Loading dialog requires a title or a label for a11y!');
    return (titleLabelKey) ? this.i18n(titleLabelKey) : this.i18n(titleKey);
  }

  cancel() {
    assert(this.canCancel);
    this.dispatchEvent(
        new CustomEvent('cancel-loading', {bubbles: true, composed: true}));
  }
}

customElements.define(OobeLoadingDialog.is, OobeLoadingDialog);
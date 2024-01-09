// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import '//resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import './common_styles/oobe_common_styles.css.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {OobeI18nBehavior, OobeI18nBehaviorInterface} from './behaviors/oobe_i18n_behavior.js';


/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {OobeI18nBehaviorInterface}
 */
const ThrobberNoticeBase = mixinBehaviors([OobeI18nBehavior], PolymerElement);

/** @polymer */
class ThrobberNotice extends ThrobberNoticeBase {

  static get is() {
    return 'throbber-notice';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2015 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<!-- TODO(http://crbug.com/1172980): Delete once oobe-loading-dialog replaces throbber-notice -->
<style include="cros-color-overrides oobe-common-styles">
  :host {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 0;
  }

  paper-spinner-lite {
    height: 38px;
    margin-bottom: 28px;
    width: 38px;
  }

  :host-context(.jelly-enabled) paper-spinner-lite {
    --paper-spinner-color: var(--cros-sys-primary);
  }

  #comment {
    color: var(--cros-text-color-secondary);
  }

  :host-context(.jelly-enabled) #comment {
    color: var(--cros-sys-on_surface);
  }
</style>
<paper-spinner-lite dir="ltr" active></paper-spinner-lite>
<div id="comment" class="oobe-default-font" aria-live="polite"
    aria-label$="[[getAriaLabel(locale, textKey)]]">
  <template is="dom-if" if="[[textKey]]">
    [[i18nDynamic(locale, textKey)]]
  </template>
</div>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {textKey: String};
  }

  /**
   * Returns the a11y message to be shown on this throbber, if the textkey is set.
   * @param {string} locale
   * @returns
   */
  getAriaLabel(locale) {
    return (!this.textKey) ? '' : this.i18n(this.textKey);
  }
}

customElements.define(ThrobberNotice.is, ThrobberNotice);

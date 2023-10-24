// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 *   @fileoverview
 *   Material design button that shows an icon and displays text.
 *
 *   Example:
 *     <oobe-icon-button icon="close" text-key="offlineLoginCloseBtn">
 *     </oobe-icon-button>
 *    or
 *     <oobe-icon-button icon="close"
 *         label-for-aria="[[i18nDynamic(locale, 'offlineLoginCloseBtn')]]">
 *       <div slot="text">[[i18nDynamic(locale, 'offlineLoginCloseBtn')]]</div>
 *     </oobe-icon-button>
 *
 *   Attributes:
 *     'text-key' - ID of localized string to be used as button text.
 *     1x and 2x icons:
 *       'icon1x' - a name of icon from material design set to show on button.
 *       'icon2x' - a name of icon from material design set to show on button.
 *     'label-for-aria' - accessibility label, override usual behavior
 *                        (string specified by text-key is used as aria-label).
 *                        Elements that use slot="text" must provide
 *                        label-for-aria value.
 *
 */

import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icons.css.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '../common_styles/oobe_common_styles.css.js';
import '../hd_iron_icon.js';
import '../oobe_vars/oobe_custom_vars.css.js';

import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {OobeBaseButton} from './oobe_base_button.js';

/** @polymer */
export class OobeIconButton extends OobeBaseButton {
  static get is() {
    return 'oobe-icon-button';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2021 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="cr-icons cr-shared-style oobe-common-styles
    cros-color-overrides">
  :host {
    --oobe-button-icon-fill-color: currentColor;
    --oobe-icon-button-text-color: var(--text-color);
  }
  cr-button {
    --border-color: var(--oobe-bg-color);
    --cr-button-height: var(--oobe-button-height);
    border-radius: var(--oobe-button-radius);
    margin: 0 4px;
  }
  ::slotted(*) {
    text-transform: none;
  }
  hd-iron-icon {
    --iron-icon-height: var(--oobe-button-icon-size);
    --iron-icon-width: var(--oobe-button-icon-size);
    --iron-icon-fill-color: var(--oobe-button-icon-fill-color);
    margin-inline-end: 4px;
  }
  :host ::slotted(*),
  .fallback {
    font-family: var(--oobe-button-font-family);
    font-size: var(--oobe-button-font-size);
    font-weight: var(--oobe-button-font-weight);
  }
  :host-context(body.jelly-enabled):host(.bg-transparent) cr-button {
    background-color: transparent !important;
  }
  :host-context(body.jelly-enabled) cr-button {
    --text-color: var(--oobe-icon-button-text-color);
  }
</style>
<cr-button id="button" disabled="[[disabled]]"
    aria-label$="[[labelForAriaText_]]">
  <div id="container" class="flex vertical layout center self-stretch">
    <div class="flex layout horizontal center self-stretch center-justified">
      <hd-iron-icon id="icon" icon1x="[[icon1x]]" icon2x="[[icon2x]]"
          class="oobe-icon" hidden>
      </hd-iron-icon>
      <slot name="text">
        <template is="dom-if" if="[[textKey]]">
          <div class="fallback">[[i18nDynamic(locale, textKey)]]</div>
        </template>
      </slot>
    </div>
  </div>
</cr-button>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      icon1x: {type: String, observer: 'updateIconVisibility_'},
      icon2x: String,
    };
  }

  updateIconVisibility_() {
    this.$.icon.hidden = (this.icon1x === undefined || this.icon1x.length == 0);
  }
}

customElements.define(OobeIconButton.is, OobeIconButton);

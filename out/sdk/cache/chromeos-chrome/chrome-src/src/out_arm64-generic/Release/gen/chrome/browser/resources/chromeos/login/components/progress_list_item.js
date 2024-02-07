// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import '//resources/ash/common/cr_elements/icons.html.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import './common_styles/oobe_common_styles.css.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {OobeI18nBehavior, OobeI18nBehaviorInterface} from './behaviors/oobe_i18n_behavior.js';


/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {OobeI18nBehaviorInterface}
 */
const ProgressListItemBase = mixinBehaviors([OobeI18nBehavior], PolymerElement);

/**
 * @polymer
 */
class ProgressListItem extends ProgressListItemBase {
  static get is() {
    return 'progress-list-item';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2020 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->
<!--
Element for list of tasks with tri-state icon (pending, active, completed)

Example:
  <progress-list-item text-key="thirdItemKey"
      active="[[equal_(step, 3)]]"
      completed="[[greater_(step, 3)]]">
  </progress-list-item>

Attributes and properties:
  'textKey' - localization key for the item text
  'activeKey' - if specified, overrides textKey for active state
  'completedKey' - if specified, overrides textKey for completed state
  'active' - if set, the item is considered to be in active state.
  'completed' - if active is not set, and completed is set, the item is
                considered to be in completed state.
-->
<style include="oobe-common-styles">
  #container {
    height: 56px;
  }

  #icon {
    min-width: 48px;
  }

  #icon-pending {
    background-color: var(--cros-icon-color-disabled);
    border-radius: 50%;
    height: 8px;
    margin-inline-start: 8px;
    width: 8px;
  }

  :host-context(.jelly-enabled) #icon-pending {
    background-color: var(--cros-sys-on_surface);
  }

  #icon-active {
    height: 24px;
    width: 24px;
  }

  :host-context(.jelly-enabled) #icon-active {
    --paper-spinner-color: var(--cros-sys-primary);
  }

  #icon-completed {
    color: var(--cros-icon-color-blue);
  }

  :host-context(.jelly-enabled) #icon-completed {
    color: var(--cros-sys-primary);
  }

  #text {
    color: var(--oobe-text-color);
    font-family: var(--oobe-default-font-family);
    font-size: 15px;
    line-height: 16px;
  }

  :host-context(.jelly-enabled) #text {
    color: var(--cros-sys-on_surface_variant);
    font-family: var(--cros-button-1-font-family);
    font-size: var(--cros-button-1-font-size);
    font-weight: var(--cros-button-1-font-weight);
    line-height: var(--cros-button-1-line-height);
  }

  #text-active {
    color: var(--cros-text-color-primary);
  }

  :host-context(.jelly-enabled) #text-active {
    color: var(--cros-sys-on_surface);
  }
</style>

<div class="flex layout horizontal center" id="container" role="listitem">
  <div id="icon">
    <div id="icon-pending" class="dot"
        hidden="[[hidePending_(active, completed)]]"></div>
    <paper-spinner-lite id="icon-active" hidden="[[!active]]" active>
    </paper-spinner-lite>
    <iron-icon id="icon-completed" icon="cr:check"
          hidden="[[hideCompleted_(active, completed)]]"></iron-icon>
  </div>
  <div id="text" class="content">
    <div id="text-pending" hidden="[[hidePending_(active, completed)]]">
      [[i18nDynamic(locale, textKey)]]
    </div>
    <div id="text-active" hidden="[[!active]]">
      [[fallbackText(locale, activeKey, textKey)]]
    </div>
    <div id="text-completed"
          hidden="[[hideCompleted_(active, completed)]]">
      [[fallbackText(locale, completedKey, textKey)]]
    </div>
  </div>
</div>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /* The ID of the localized string to be used as button text.
       */
      textKey: {
        type: String,
      },

      /* The ID of the localized string to be displayed when item is in
       * the 'active' state. If not specified, the textKey is used instead.
       */
      activeKey: {
        type: String,
        value: '',
      },

      /* The ID of the localized string to be displayed when item is in the
       * 'completed' state. If not specified, the textKey is used instead.
       */
      completedKey: {
        type: String,
        value: '',
      },

      /* Indicates if item is in "active" state. Has higher priority than
       * "completed" below.
       */
      active: {
        type: Boolean,
        value: false,
      },

      /* Indicates if item is in "completed" state. Has lower priority than
       * "active" state above.
       */
      completed: {
        type: Boolean,
        value: false,
      },
    };
  }

  constructor() {
    super();
  }

  /** @private */
  hidePending_(active, completed) {
    return active || completed;
  }

  /** @private */
  hideCompleted_(active, completed) {
    return active || !completed;
  }

  /** @private */
  fallbackText(locale, key, fallbackKey) {
    if (key === null || key === '') {
      return this.i18n(fallbackKey);
    }
    return this.i18n(key);
  }
}

customElements.define(ProgressListItem.is, ProgressListItem);

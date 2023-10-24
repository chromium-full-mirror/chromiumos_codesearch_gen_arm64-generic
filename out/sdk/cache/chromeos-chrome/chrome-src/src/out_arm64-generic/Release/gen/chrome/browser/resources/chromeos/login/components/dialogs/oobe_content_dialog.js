// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import '//resources/polymer/v3_0/paper-styles/color.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import '../common_styles/oobe_common_styles.css.js';
import '../common_styles/oobe_dialog_host_styles.css.js';
import '../oobe_vars/oobe_shared_vars.css.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {OobeFocusBehavior, OobeFocusBehaviorInterface} from '../behaviors/oobe_focus_behavior.js';
import {OobeScrollableBehavior, OobeScrollableBehaviorInterface} from '../behaviors/oobe_scrollable_behavior.js';

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {OobeScrollableBehaviorInterface}
 * @implements {OobeFocusBehaviorInterface}
 */
const OobeContentDialogBase =
    mixinBehaviors([OobeFocusBehavior, OobeScrollableBehavior], PolymerElement);


/** @polymer */
export class OobeContentDialog extends OobeContentDialogBase {
  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2021 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<!--
  Simple OOBE dialog which should be used for OOBE UI elements.
  It has correct size and padding. It can display top left icon, and has
  several parts: content area; and buttons containers at the top for back
  navigation and for other buttons at the bottom.

  When shown (i.e. when outside container calls .show()):
    1. If this dialog has tags in class "focus-on-show", the first one will be
  focused.
    2. 'show-dialog' is fired.

  Please include oobe-dialog-host-styles shared style if you use oobe-content-dialog.

  Example:
    <style include="oobe-dialog-host-styles"></style>
    <oobe-content-dialog on-show-dialog="onTestDialogShown_">
      <div slot="content">
        <div class="focus-on-show">...</div>
        ...
      </div>
      <div slot="back-navigation">
        ...
      </div>
      <div slot="bottom-buttons">
        ...
      </div>
    </oobe-content-dialog>

  For single-DPI image |oobe-icon| class should be used. To select between two
  images of different DPI, |oobe-icon-1x| and |oobe-icon-2x| should be used
  instead. For example:

      <iron-icon icon="icon1" ... slot="oobe-icon" class="oobe-icon-1x">
      <iron-icon icon-"icon2" ... slot="oobe-icon" class="oobe-icon-2x">

  Attributes:
    no-lazy           - prevents lazy instantiation of the dialog.
-->

<style include="oobe-dialog-host-styles cr-shared-style">
  :host {
    color: var(--oobe-text-color);
    font-family: var(--oobe-default-font-family);
    font-size: var(--oobe-default-font-size);
    font-weight: var(--oobe-default-font-weight);
    height: var(--oobe-adaptive-dialog-height);
    line-height: var(--oobe-default-line-height);
    width: var(--oobe-adaptive-dialog-width);
    --oobe-adaptive-dialog-content-width: calc(
        var(--oobe-adaptive-dialog-width) -
        2 * var(--oobe-adaptive-dialog-content-padding));
  }

  :host([isGaia]) {
    --gaia-horizontal-padding-offset: 20px;
  }

  :host-context([orientation=vertical]) {
    --oobe-adaptive-dialog-item-alignment: center;
  }

  :host-context([orientation=horizontal]) {
    --oobe-adaptive-dialog-item-alignment: unset;
  }

  #mainContainer {
    align-items: var(--oobe-adaptive-dialog-item-alignment);
    flex-direction: column;
    margin-inline-end: var(--oobe-adaptive-dialog-content-padding);
    margin-inline-start: var(--oobe-adaptive-dialog-content-padding);
  }

  :host([isGaia]) #mainContainer {
    --oobe-content-dialog-content-padding: calc(
      var(--oobe-adaptive-dialog-content-padding)
       - var(--gaia-horizontal-padding-offset));
    margin-inline-end: var(--oobe-content-dialog-content-padding);
    margin-inline-start: var(--oobe-content-dialog-content-padding);
  }

  :host-context(.jelly-enabled) #mainContainer {
    border-radius: var(--oobe-container-border-radius);
    overflow: hidden;
  }

  :host([fullscreen]) #mainContainer {
    margin-inline-end: 0;
    margin-inline-start: 0;
    overflow: visible;
  }

  #scrollContainer {
    border: transparent;
    overflow-y: auto;
    padding-bottom: 0;
    padding-top: 0;
  }

  #contentContainer {
    width: var(--oobe-adaptive-dialog-content-width);
  }

  :host([isGaia]) #contentContainer {
    width: calc(var(--oobe-adaptive-dialog-content-width)
                + 2 * var(--gaia-horizontal-padding-offset));
  }

  :host([fullscreen]) #contentContainer {
    width: 100%;
  }

  .vertical-mode-centering {
    align-items: var(--oobe-adaptive-dialog-item-alignment);
    display: flex;
    flex-direction: column;
  }

  .buttons-common {
    /* Always allocate height for buttons even a container is empty */
    /* Compensate for 2*1px border of buttons */
    min-height: calc(var(--oobe-button-height) + 2px);
    z-index: 1;
  }

  :host([no-buttons]) .buttons-common {
    display: none;
  }

  .bottom-buttons-container {
    padding-bottom: var(--oobe-adaptive-dialog-buttons-vertical-padding);
    padding-inline-end:
      var(--oobe-adaptive-dialog-buttons-horizontal-padding);
    padding-inline-start:
      var(--oobe-adaptive-dialog-buttons-horizontal-padding);
    padding-top: var(--oobe-adaptive-dialog-buttons-vertical-padding);
  }

  .back-button-container {
    padding-bottom:
      var(--oobe-adaptive-dialog-back-button-vertical-padding);
    padding-inline-end:
      var(--oobe-adaptive-dialog-back-button-horizontal-padding);
    padding-inline-start:
      var(--oobe-adaptive-dialog-back-button-horizontal-padding);
    padding-top: var(--oobe-adaptive-dialog-back-button-vertical-padding);
  }

  #oobe-icon-div ::slotted(hd-iron-icon),
  #oobe-icon-div ::slotted(iron-icon) {
    --iron-icon-height: var(--oobe-adaptive-dialog-icon-size);
    --iron-icon-width: var(--oobe-adaptive-dialog-icon-size);
    --iron-icon-fill-color: var(--oobe-adaptive-dialog-icon-fill-color);
  }
</style>
<cr-lazy-render id="lazy">
  <template>
    <div class="buttons-common back-button-container">
      <slot name="back-navigation"></slot>
    </div>
    <div id="mainContainer" class="layout vertical flex">
      <div id="scrollContainer" class="layout vertical flex scrollable"
          on-scroll="applyScrollClassTags_">
        <div id="contentContainer" class="layout vertical flex">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
    <div class="buttons-common bottom-buttons-container
        vertical-mode-centering">
      <slot class="layout horizontal end-justified" name="bottom-buttons">
      </slot>
    </div>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`;
  }

  static get is() {
    return 'oobe-content-dialog';
  }

  static get properties() {
    return {
      /**
       * Supports dialog which is shown without buttons.
       */
      noButtons: {
        type: Boolean,
        value: false,
      },

      /**
       * If set, prevents lazy instantiation of the dialog.
       */
      noLazy: {
        type: Boolean,
        value: false,
        observer: 'onNoLazyChanged_',
      },
    };
  }

  onBeforeShow() {
    this.shadowRoot.querySelector('#lazy').get();
    var contentContainer = this.shadowRoot.querySelector('#contentContainer');
    var scrollContainer = this.shadowRoot.querySelector('#scrollContainer');
    if (!scrollContainer || !contentContainer) {
      return;
    }
    this.initScrollableObservers(scrollContainer, contentContainer);
  }

  focus() {
    /**
     * TODO (crbug.com/1159721): Fix this once event flow of showing step in
     * display_manager is updated.
     */
    this.show();
  }

  show() {
    this.focusMarkedElement(this);
  }

  /** @private */
  onNoLazyChanged_() {
    if (this.noLazy) {
      this.shadowRoot.querySelector('#lazy').get();
    }
  }
}

customElements.define(OobeContentDialog.is, OobeContentDialog);
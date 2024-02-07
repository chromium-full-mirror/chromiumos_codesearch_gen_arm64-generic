// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * OOBE Modal Dialog
 *
 * Implements the 'OOBE Modal Dialog' according to MD specs.
 *
 * The dialog provides two properties that can be set directly from HTML.
 *  - titleKey - ID of the localized string to be used for the title.
 *  - contentKey - ID of the localized string to be used for the content.
 *
 *  Alternatively, one can set their own title and content into the 'title'
 *  and 'content' slots.
 *
 *  Buttons are optional and go into the 'buttons' slot. If none are specified,
 *  a default button with the text 'Close' will be shown. Users might want to
 *  trigger some action on their side by using 'on-close=myMethod'.
 */
import '//resources/ash/common/cr_elements/cros_color_overrides.css.js';
import '//resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/ash/common/cr_elements/cr_shared_style.css.js';
import '../buttons/oobe_text_button.js';
import '../common_styles/oobe_common_styles.css.js';
import { html, mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { OobeFocusBehavior, OobeFocusBehaviorInterface } from '../behaviors/oobe_focus_behavior.js';
import { OobeI18nBehavior, OobeI18nBehaviorInterface } from '../behaviors/oobe_i18n_behavior.js';
/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {OobeFocusBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 */
const OobeModalDialogBase = mixinBehaviors([OobeFocusBehavior, OobeI18nBehavior], PolymerElement);
/** @polymer */
export class OobeModalDialog extends OobeModalDialogBase {
    static get template() {
        return html `<!--_html_template_start_-->
<!--
Copyright 2020 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-common-styles cros-color-overrides">
  :host {
    --cr-dialog-title-slot-padding-bottom:
        var(--oobe-modal-dialog-title-slot-padding-bottom, 8px);
    --cr-dialog-width: var(--oobe-modal-dialog-width, 552px);
    --cr-primary-text-color: var(--oobe-header-text-color);
    --cr-secondary-text-color: var(--oobe-text-color);
    --cr-dialog-top-container-min-height : 0;
    flex: 1 1 auto;
  }

  :host-context(.jelly-enabled) {
    --cr-dialog-border-radius: 20px;
    /* Buttons paddings: */
    --cr-dialog-button-container-padding-bottom: 28px;
    --cr-dialog-button-container-padding-horizontal: 32px;
    /* Title paddings: */
    --cr-dialog-title-slot-padding-bottom: 16px;
    --cr-dialog-title-slot-padding-end: 32px;
    --cr-dialog-title-slot-padding-start: 32px;
    --cr-dialog-title-slot-padding-top: 32px;
  }

  #modalDialogTitle {
    font-family: var(--oobe-modal-dialog-header-font-family);
    font-size: var(--oobe-modal-dialog-header-font-size);
    font-weight: var(--oobe-modal-dialog-header-font-weight);
    line-height: var(--oobe-modal-dialog-header-line-height);
    margin: 0;
    user-select: none;
  }

  #contentContainer {
    font-family: var(--oobe-modal-dialog-content-font-family);
    font-size: var(--oobe-modal-dialog-content-font-size);
    font-weight: var(--oobe-modal-dialog-content-font-weight);
    height: var(--oobe-modal-dialog-content-height);
    line-height: var(--oobe-modal-dialog-content-line-height);
    padding-bottom:
        var(--oobe-modal-dialog-content-slot-padding-bottom, 12px);
    padding-inline-end:
        var(--oobe-modal-dialog-content-slot-padding-end, 20px);
    padding-inline-start:
        var(--oobe-modal-dialog-content-slot-padding-start, 20px);
  }

  :host-context(.jelly-enabled) #contentContainer {
    padding-bottom:
        var(--oobe-modal-dialog-content-slot-padding-bottom, 16px);
    padding-inline-end:
        var(--oobe-modal-dialog-content-slot-padding-end, 32px);
    padding-inline-start:
        var(--oobe-modal-dialog-content-slot-padding-start, 32px);
  }

  :host([should-hide-title-row]):host-context(.jelly-enabled)
      #contentContainer {
    padding-top: 32px;
  }
</style>
<cr-dialog hide-backdrop$="[[shouldHideBackdrop]]" id="modalDialog"
    on-close="onClose_">
  <!-- Title -->
  <div id="modalDialogTitle" slot="title" hidden="[[shouldHideTitleRow]]">
    <slot name="title">
      <template is="dom-if" if="[[titleKey]]">
        [[i18nDynamic(locale, titleKey)]]
      </template>
    </slot>
  </div>
  <!-- Content to be shown -->
  <div id="contentContainer" slot="body"
      class="flex-grow layout vertical not-resizable">
    <slot name="content">
      <template is="dom-if" if="[[contentKey]]">
        [[i18nDynamic(locale, contentKey)]]
      </template>
    </slot>
  </div>
  <!-- Close Button -->
  <div id="buttonContainer" slot="button-container"
      hidden="[[shouldHideCloseButton]]"
      class="layout horizontal">
    <slot name="buttons">
      <oobe-text-button inverse id="closeButton" on-click="hideDialog"
          class="focus-on-show" text-key="oobeModalDialogClose">
      </oobe-text-button>
    </slot>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
    }
    static get is() {
        return 'oobe-modal-dialog';
    }
    static get properties() {
        return {
            /* The ID of the localized string to be used as title text when no "title"
             * slot elements are specified.
             */
            titleKey: {
                type: String,
            },
            /* The ID of the localized string to be used as the content when no
             * "content" slot elements are specified.
             */
            contentKey: {
                type: String,
            },
            /**
             * True if close button should be hidden.
             * @type {boolean}
             */
            shouldHideCloseButton: {
                type: Boolean,
                value: false,
            },
            /**
             * True if title row should be hidden.
             * @type {boolean}
             */
            shouldHideTitleRow: {
                type: Boolean,
                value: false,
            },
            /**
             * True if confirmation dialog backdrop should be hidden.
             * @type {boolean}
             */
            shouldHideBackdrop: {
                type: Boolean,
                value: false,
            },
        };
    }
    get open() {
        return this.shadowRoot.querySelector('#modalDialog').open;
    }
    ready() {
        super.ready();
    }
    showDialog() {
        chrome.send('enableShelfButtons', [false]);
        this.shadowRoot.querySelector('#modalDialog').showModal();
        this.focusMarkedElement(this);
    }
    hideDialog() {
        this.shadowRoot.querySelector('#modalDialog').close();
    }
    onClose_() {
        chrome.send('enableShelfButtons', [true]);
    }
}
customElements.define(OobeModalDialog.is, OobeModalDialog);

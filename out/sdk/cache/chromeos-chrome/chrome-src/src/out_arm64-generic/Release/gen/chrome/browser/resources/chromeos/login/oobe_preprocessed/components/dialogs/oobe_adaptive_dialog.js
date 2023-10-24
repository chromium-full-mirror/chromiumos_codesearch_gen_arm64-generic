// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Indicates `Read more` button state (listed in upgrade order).
 * @enum {string}
 */
const ReadMoreState = {
  UNKNOWN: 'unknown',
  SHOWN: 'shown',
  HIDDEN: 'hidden',
};

import {afterNextRender, PolymerElement, html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/ash/common/cr_scrollable_behavior.js';
import '//resources/cr_elements/cr_lazy_render/cr_lazy_render.js';

import '../common_styles/oobe_common_styles.css.js';
import '../common_styles/oobe_dialog_host_styles.css.js';
import '../oobe_vars/oobe_custom_vars.css.js';
import '../oobe_vars/oobe_shared_vars.css.js';

/** @polymer */
export class OobeAdaptiveDialog extends PolymerElement {
  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2020 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<!--
  Simple OOBE dialog which should be used for OOBE UI elements.
  It has correct size and padding. It can display top left icon, and has
  several parts: header, subheader, progress bar; content area; and buttons
  containers at the top for back navigation and for other buttons at the bottom.

  When shown (i.e. when outside container calls .show()):
    1. If this dialog has tags in class "focus-on-show", the first one will be
  focused.
    2. 'show-dialog' is fired.

  Please include oobe-dialog-host-styles shared style if you use oobe-adaptive-dialog.

  Example:
    <style include="oobe-dialog-host-styles"></style>
    <oobe-adaptive-dialog on-show-dialog="onTestDialogShown_" has-buttons>
      <iron-icon ... slot="icon">
      <h1 slot="title">Title</h1>
      <div slot="subtitle">Subtitle</div>
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
    </oobe-adaptive-dialog>

  Add slot |header| to all which you want to go inside the header.  Similar
  with slots |content|, |bottom-buttons|.

  For single-DPI image |oobe-icon| class should be used. To select between two
  images of different DPI, |oobe-icon-1x| and |oobe-icon-2x| should be used
  instead. For example:

      <iron-icon icon="icon1" ... slot="icon" class="oobe-icon-1x">
      <iron-icon icon-"icon2" ... slot="icon" class="oobe-icon-2x">

  Attributes:
    no-lazy           - prevents lazy instantiation of the dialog.
-->

<style include="oobe-dialog-host-styles cr-shared-style cros-color-overrides">
  /* Please check whether |multidevice_setup/ui_page.html| needs to be */
  /* updated when below css rules are changed. */
  :host {
    color: var(--oobe-text-color);
    font-family: var(--oobe-default-font-family);
    font-size: var(--oobe-default-font-size);
    font-weight: var(--oobe-default-font-weight);
    line-height: var(--oobe-default-line-height);
    height: var(--oobe-adaptive-dialog-height);
    width: var(--oobe-adaptive-dialog-width);
  }

  :host-context([orientation=horizontal]) {
    --oobe-adaptive-dialog-content-direction: row;
    --oobe-adaptive-dialog-item-alignment: unset;
    --oobe-text-alignment: start;
    --oobe-adaptive-dialog-content-width: calc(
        var(--oobe-adaptive-dialog-width) -
        4 * var(--oobe-adaptive-dialog-content-padding) -
        var(--oobe-adaptive-dialog-header-width));
    /* Header takes 40% of the width remaining after applying padding */
    --oobe-adaptive-dialog-header-width: clamp(302px,
        calc(0.4 * (var(--oobe-adaptive-dialog-width) -
        4 * var(--oobe-adaptive-dialog-content-padding))) , 346px);
    --oobe-adaptive-dialog-content-top-padding: 0;
  }

  :host-context([orientation=horizontal]):host([single-column]) {
    --oobe-adaptive-dialog-header-width: 456px;
  }

  :host-context([orientation=vertical]) {
    --oobe-adaptive-dialog-content-direction: column;
    --oobe-adaptive-dialog-item-alignment: center;
    --oobe-text-alignment: center;
    --oobe-adaptive-dialog-content-width: calc(
        var(--oobe-adaptive-dialog-width) -
        2 * var(--oobe-adaptive-dialog-content-padding));
    /* Header takes 60% of the width remaining after applying padding */
    --oobe-adaptive-dialog-header-width: clamp(346px,
        calc(0.6 * (var(--oobe-adaptive-dialog-width) -
        2 * var(--oobe-adaptive-dialog-content-padding))) , 520px);
  }

  #oobe-title ::slotted(h1) {
    color: var(--oobe-header-text-color);
    font-family: var(--oobe-header-font-family);
    font-size: var(--oobe-header-font-size);
    font-weight: var(--oobe-header-font-weight);
    line-height: var(--oobe-header-line-height);
    margin: 0;
    text-align: var(--oobe-text-alignment);
  }

  #oobe-subtitle ::slotted(*) {
    color: var(--oobe-subheader-text-color);
    font-family: var(--oobe-subheader-font-family);
    font-size: var(--oobe-subheader-font-size);
    font-weight: var(--oobe-subheader-font-weight);
    line-height: var(--oobe-subheader-line-height);
    margin: 0;
    overflow-wrap: break-word;
    text-align: var(--oobe-text-alignment);
  }

  #main-container {
    align-items: var(--oobe-adaptive-dialog-item-alignment);
    flex-direction: var(--oobe-adaptive-dialog-content-direction);
  }

  #header-container {
    max-height: 100%;
    overflow-y: auto;
    padding-bottom: 0;
    padding-inline-end: var(--oobe-adaptive-dialog-content-padding);
    padding-inline-start: var(--oobe-adaptive-dialog-content-padding);
    padding-top: var(--oobe-adaptive-dialog-header-top-padding);
    width: var(--oobe-adaptive-dialog-header-width);
  }

  #scrollContainer {
    border: transparent;
    margin-top: var(--oobe-adaptive-dialog-content-top-padding);
    overflow-y: auto;
    padding-bottom: 0;
    padding-inline-end: var(--oobe-adaptive-dialog-content-padding);
    padding-inline-start: var(--oobe-adaptive-dialog-content-padding);
    padding-top: 0;
  }

  [read-more-content=true] {
    -webkit-mask-image: linear-gradient(180deg, #FFF 95%, transparent);
    overflow-y: hidden;
  }

  #readMoreButtonContainer {
    display: flex;
    justify-content: center;
    position: relative;
    top: -16px;
  }

  #readMoreButton {
    border-radius: 50%;
    min-height: 32px;
    min-width: 32px;
    padding: 0;
    transform: rotate(90deg);
  }

  #oobe-title {
    padding-top: var(--oobe-adaptive-dialog-title-top-padding);
  }
  :host-context(.jelly-enabled) #oobe-title {
    padding-top: var(--oobe-adaptive-dialog-item-vertical-padding);
  }

  #oobe-progress ::slotted(*) {
    margin-top: 32px;
  }
  :host-context(.jelly-enabled) #oobe-progress ::slotted(*) {
    margin-top: var(--oobe-adaptive-dialog-item-vertical-padding);
  }

  #oobe-progress ::slotted(paper-progress) {
    /* TODO(https://crbug.com/1320715) Revise the colors */
    --paper-progress-active-color: var(--cros-slider-color-active);
    --paper-progress-container-color: var(--cros-slider-track-color-active);
    height: 4px;
    width: 100%;
  }
  :host-context(.jelly-enabled) #oobe-progress ::slotted(paper-progress) {
    --paper-progress-active-color: var(--cros-sys-primary);
    --paper-progress-container-color: var(--cros-sys-primary_container);
  }

  #oobe-subtitle {
    padding-top: 16px;
  }
  /* Avoid applying the padding twice if there's no text */
  :host-context(.jelly-enabled) #oobe-subtitle {
    padding-top: 0;
  }
  :host-context(.jelly-enabled) #oobe-subtitle ::slotted(*) {
    padding-top: var(--oobe-adaptive-dialog-item-vertical-padding);
  }

  #oobe-subtitle-illustration ::slotted(*) {
    padding-top: 16px;
  }
  :host-context(.jelly-enabled) #oobe-subtitle-illustration ::slotted(*) {
    padding-top: var(--oobe-adaptive-dialog-item-vertical-padding);
  }

  #contentContainer {
    width: var(--oobe-adaptive-dialog-content-width);
  }
  #contentContainer ::slotted(*) {
    max-width: var(--oobe-adaptive-dialog-content-width);
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
    <div id="main-container" class="layout vertical flex">
      <div id="header-container">
        <div id="oobe-icon-div" class="vertical-mode-centering">
          <slot name="icon"></slot>
        </div>
        <div id="oobe-title" class="vertical-mode-centering">
          <slot name="title"></slot>
        </div>
        <div id="oobe-progress" class="vertical-mode-centering">
          <slot name="progress"></slot>
        </div>
        <div id="oobe-subtitle" class="vertical-mode-centering">
          <slot name="subtitle"></slot>
        </div>
        <div id="oobe-subtitle-illustration" class="vertical-mode-centering">
          <slot name="subtitle-illustration"></slot>
        </div>
      </div>
      <div id="scrollContainer" class="layout vertical flex scrollable"
          on-scroll="applyScrollClassTags_">
        <div id="contentContainer" class="layout vertical flex">
          <slot name="content"></slot>
        </div>
        <div id="readMoreButtonContainer">
          <template is="dom-if" if="[[showReadMoreButton_]]" restamp>
            <cr-button id="readMoreButton" on-click="onReadMoreClick_"
                class="action-button">
              <iron-icon icon="oobe-20:button-arrow-forward"></iron-icon>
            </cr-button>
          </template>
        </div>
      </div>
    </div>
    <div class="buttons-common bottom-buttons-container
        vertical-mode-centering">
      <slot class="layout horizontal end-justified" name="bottom-buttons"
          hidden="[[showReadMoreButton_]]">
      </slot>
    </div>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`;
  }

  static get is() {
    return 'oobe-adaptive-dialog';
  }

  constructor() {
    super();

    this.readMoreState = ReadMoreState.UNKNOWN;
    this.resizeObserver_ = undefined;
  }

  static get properties() {
    return {
      /**
       * If set, prevents lazy instantiation of the dialog.
       */
      noLazy: {
        type: Boolean,
        value: false,
        observer: 'onNoLazyChanged_',
      },

      /**
       * If set, when content overflows, there will be no scrollbar initially.
       * A `Read more` button will be shown and the bottom buttons will be
       * hidden until the `Read More` button is clicked to ensure that the user
       * sees all the content before proceeding. When readMore is set to true,
       * it does not necessarily mean that the `Read more` button will be shown,
       * It will only be shown if the content overflows.
       */
      readMore: {
        type: Boolean,
        value: false,
      },

      /**
       * If set, the width of the dialog header will be wider compared to the
       * the normal dialog in horizontal orientation.
       */
      singleColumn: {
        type: Boolean,
        reflectToAttribute: true,
        value: false,
      },

      /**
       * if readMore is set to true and the content overflows contentContainer,
       * showReadMoreButton_ will be set to true to show the `Read more` button
       * and hide the bottom buttons.
       * Once overflown content is shown, either by zooming out, tabbing to
       * hidden content or by clicking the `Read more` button, this property
       * should be set back to false. Don't change it directly, call
       * addReadMoreButton_ and removeReadMoreButton_.
       * @private
       */
      showReadMoreButton_: {
        type: Boolean,
        value: false,
      },
    };
  }

  /**
   * Creates a ResizeObserver and attaches it to the relevant containers
   * to be observed on size changes and scroll position.
   * @private
   */
  addResizeObserver_() {
    if (this.resizeObserver_) {  // Already observing
      return;
    }

    // If `Read more` button is not set, upgrade the state directly to hidden,
    // otherwise, the state will stay unknown until the content is redndered.
    if (this.readMore) {
      this.readMoreState = ReadMoreState.UNKNOWN;
    } else {
      this.readMoreState = ReadMoreState.HIDDEN;
    }

    var scrollContainer = this.shadowRoot.querySelector('#scrollContainer');
    var contentContainer = this.shadowRoot.querySelector('#contentContainer');
    if (!scrollContainer || !contentContainer) {
      return;
    }

    this.resizeObserver_ = new ResizeObserver(() => void this.onResize_());
    this.resizeObserver_.observe(scrollContainer);
    this.resizeObserver_.observe(contentContainer);
  }

  /** @private */
  onResize_() {
    this.maybeUpgradeReadMoreState_(false /* read_more_clicked */);

    // Apply scroll tags when `Read more` button is hidden.
    if (this.readMoreState == ReadMoreState.HIDDEN) {
      this.applyScrollClassTags_();
    }
  }

  /**
   * Applies the class tags to scrollContainer that control the shadows, and
   * updates the `Read more` button state if needed.
   * @private
   */
  applyScrollClassTags_() {
    var el = this.shadowRoot.querySelector('#scrollContainer');
    el.classList.toggle('can-scroll', el.clientHeight < el.scrollHeight);
    el.classList.toggle('is-scrolled', el.scrollTop > 0);
    el.classList.toggle(
        'scrolled-to-bottom',
        el.scrollTop + el.clientHeight >= el.scrollHeight);
  }

  /**
   * Upgrades the `Read More` button State if needed.
   * UNKNOWN -> SHOWN:  If the content overflows the content container.
   * UNKNOWN -> HIDDEN: If the content does not overflow the content container.
   * SHOWN   -> HIDDEN: If `Read more` is clicked, the content stopped
   * overflowing the content container or the container is scrolled.
   *
   * @param {boolean} read_more_clicked Whether the `Read more` button clicked
   *     or not.
   * @private
   */
  maybeUpgradeReadMoreState_(read_more_clicked) {
    // HIDDEN is the final state. We cannot move from HIDDEN state to SHOWN or
    // UNKNOWN state.
    if (this.readMoreState == ReadMoreState.HIDDEN) {
      return;
    }

    if (read_more_clicked) {
      this.readMoreState = ReadMoreState.HIDDEN;
      this.removeReadMoreButton_();
      return;
    }
    var content = this.shadowRoot.querySelector('#contentContainer');
    if (this.readMoreState == ReadMoreState.UNKNOWN) {
      if (content.clientHeight < content.scrollHeight) {
        this.readMoreState = ReadMoreState.SHOWN;
        this.addReadMoreButton_();
      } else {
        this.readMoreState = ReadMoreState.HIDDEN;
      }
    } else if (this.readMoreState == ReadMoreState.SHOWN) {
      if (content.clientHeight >= content.scrollHeight ||
          content.scrollTop > 0) {
        this.readMoreState = ReadMoreState.HIDDEN;
        this.removeReadMoreButton_();
      }
    }
  }

  focus() {
    /* When Network Selection Dialog is shown because user pressed "Back"
       button on EULA screen, display_manager does not inform this dialog that
       it is shown. It ouly focuses this dialog.
       So this emulates show().
       TODO (alemate): fix this once event flow is updated.
    */
    this.show();
  }

  onBeforeShow() {
    this.shadowRoot.querySelector('#lazy').get();
    this.addResizeObserver_();
  }

  /**
   * Scroll to the bottom of footer container.
   */
  scrollToBottom() {
    var el = this.shadowRoot.querySelector('#scrollContainer');
    el.scrollTop = el.scrollHeight;
  }

  /**
   * @private
   * Focuses the element. As cr-input uses focusInput() instead of focus() due
   * to bug, we have to handle this separately.
   * TODO(crbug.com/882612): Replace this with focus() in show().
   */
  focusElement_(element) {
    if (element.focusInput) {
      element.focusInput();
      return;
    }
    element.focus();
  }

  /** @private */
  focusOnShow_() {
    var focusedElements = this.getElementsByClassName('focus-on-show');
    var focused = false;
    for (var i = 0; i < focusedElements.length; ++i) {
      if (focusedElements[i].hidden) {
        continue;
      }

      focused = true;
      afterNextRender(this, () => this.focusElement_(focusedElements[i]));
      break;
    }
    if (!focused && focusedElements.length > 0) {
      afterNextRender(this, () => this.focusElement_(focusedElements[0]));
    }
  }

  /**
   * This is called when this dialog is shown.
   */
  show() {
    this.focusOnShow_();
    this.dispatchEvent(
        new CustomEvent('show-dialog', {bubbles: true, composed: true}));
  }

  /** @private */
  onNoLazyChanged_() {
    if (this.noLazy) {
      this.shadowRoot.querySelector('#lazy').get();
    }
  }

  /** @private */
  addReadMoreButton_() {
    var contentContainer = this.shadowRoot.querySelector('#contentContainer');
    contentContainer.setAttribute('read-more-content', true);
    this.showReadMoreButton_ = true;

    afterNextRender(this, () => {
      var readMoreButton = this.shadowRoot.querySelector('#readMoreButton');
      this.focusElement_(readMoreButton);
    });

    // Once a tab reaches an element outside of the visible area, call
    // maybeUpgradeReadMoreState_ to apply changes.
    contentContainer.addEventListener('keyup', (event) => {
      if (!this.showReadMoreButton_) {
        return;
      }
      if (event.which === 9) {
        if (contentContainer.scrollTop > 0) {
          this.maybeUpgradeReadMoreState_(true /* read_more_clicked */);
        }
      }
    });
  }

  /** @private */
  removeReadMoreButton_() {
    var contentContainer = this.shadowRoot.querySelector('#contentContainer');
    contentContainer.removeAttribute('read-more-content');
    this.showReadMoreButton_ = false;

    // If `read more` button is focused after it was removed, move focus to the
    // 'focus-on-show' element.
    var readMoreButton = this.shadowRoot.querySelector('#readMoreButton');
    if (this.shadowRoot.activeElement == readMoreButton) {
      this.focusOnShow_();
    }

    this.scrollToBottom();
  }

  /** @private */
  onReadMoreClick_() {
    this.maybeUpgradeReadMoreState_(true /* read_more_clicked */);
  }
}

customElements.define(OobeAdaptiveDialog.is, OobeAdaptiveDialog);

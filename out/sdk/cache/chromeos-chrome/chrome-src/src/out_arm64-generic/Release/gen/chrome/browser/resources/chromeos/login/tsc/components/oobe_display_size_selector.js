// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_slider/cr_slider.js';
import '//resources/cr_elements/icons.html.js';
import { html, mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { OobeI18nBehavior, OobeI18nBehaviorInterface } from './behaviors/oobe_i18n_behavior.js';
const DEFAULT_APP_ICON_SIZE = 48;
const DEFAULT_FONT_SIZE = 14;
/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {OobeI18nBehaviorInterface}
 */
const OobeDisplaySizeSelectorBase = mixinBehaviors([OobeI18nBehavior], PolymerElement);
/**
 * @polymer
 */
export class OobeDisplaySizeSelector extends OobeDisplaySizeSelectorBase {
    static get is() {
        return 'oobe-display-size-selector';
    }
    static get template() {
        return html `<!--_html_template_start_-->
<!-- Copyright 2023 The Chromium Authors
     Use of this source code is governed by a BSD-style license that can be
     found in the LICENSE file. -->


<!--
  OOBE polymer element which includes a slider to select the
  display size fator and a preview  containing 3x2 app icons
  of the selected display size factor.
-->

<style include="oobe-dialog-host-styles cros-color-overrides">
  #displaySizeSelector {
    height: 100%;
  }

  #preview {
    align-items: center;
    background-color: rgba(var(--cros-color-disabled-rgb), 0.08);
    border: 1px solid rgba(var(--cros-icon-color-secondary-rgb), 0.3);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    height: calc(100% - 140px);
    justify-content: center;
    margin-bottom: 24px;
    max-height: 324px;
    text-align: center;
  }

  :host-context(.jelly-enabled) #preview {
    background-color: var(--cros-sys-base_elevated);
    border: 0;
  }

  #previewTitle {
    color: var(--cros-text-color-primary);
    font-size: 14px;
    font-weight: 500; /* roboto-medium */
    line-height: 20px;
    margin-bottom: 0;
    margin-top: 16px;
  }

  :host-context(.jelly-enabled) #previewTitle {
    color: var(--cros-sys-on_surface);
  }

  #grid-container {
    align-items: center;
    display: flex;
    flex-grow: 1;
  }

  #grid {
    display: grid;
    grid-gap: 16px 56px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  #sliderContainer {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-top: 24px;
  }

  #sizeSlider {
    flex-grow: 1;
    flex-shrink: 1;
  }

  #sliderTitleContainer ::slotted(*) {
    font-weight: 500;
    margin: 0;
  }

  :host-context(.jelly-enabled) #sliderTitleContainer ::slotted(*) {
    color: var(--cros-sys-on_surface);
  }

  #sliderDescriptionContainer ::slotted(*) {
    margin: 0;
  }

  :host-context(.jelly-enabled) #sliderDescriptionContainer ::slotted(*) {
    color: var(--cros-sys-on_surface_variant);
  }

  .sign-button {
    border-radius: 50%;
    border-width: 0;
    min-height: auto;
    min-width: auto;
    padding: 0;
  }

  .sign-icon {
    flex-grow: 0;
    flex-shrink: 0;
    height: 16px;
    padding: 13px;
    width: 16px;
  }

  .app-name {
    margin-bottom: 0;
    margin-top: 8px;
  }

  .app-icon {
    width: 48px;
  }

  /* Decrease the vertical gaps on low resolution screens */
  @media screen and (orientation:portrait) and (max-height: 1120px) {
    :host-context([screen=oobe]) #previewTitle {
      display: none;
    }
    :host-context([screen=oobe]) #grid {
      grid-row-gap: 10px;
    }
    :host-context([screen=oobe]) .app-name {
      margin-top: 3px;
    }
  }

  @media screen and (orientation:portrait) and (max-height: 900px) {
    :host-context([screen=gaia-signin]) #previewTitle {
      display: none;
    }
    :host-context([screen=gaia-signin]) #grid {
      grid-row-gap: 10px;
    }
    :host-context([screen=gaia-signin]) .app-name {
      margin-top: 3px;
    }
  }

  /* Decrease the horizontal gaps on low resolution screens */
  @media screen and (orientation:landscape) and (max-width: 900px) {
    :host-context([screen=oobe]) #grid {
      grid-column-gap: 28px;
    }
  }

  @media screen and (orientation:landscape) and (max-width: 800px) {
    :host-context([screen=gaia-signin]) #grid {
      grid-column-gap: 28px;
    }
  }

  :host-context(.jelly-enabled) cr-button.sign-button {
    background-color: transparent;
  }
</style>
<div id="displaySizeSelector">
  <!-- Preview Section -->
  <div id="preview" aria-hidden="true">
    <p id="previewTitle">[[i18nDynamic(locale, 'displaySizePreview')]]</p>
    <div id="grid-container" clsas="layout horizontal center flex">
      <div id="grid">
        <template is="dom-repeat" items="[[apps_]]" as="app">
          <div>
            <img class="app-icon" srcset="[[app.icon]]">
            <p class="app-name">[[i18nDynamic(locale, app.name)]]</p>
          </div>
       </template>
      </div>
    </div>
  </div>

  <!-- Slider Section -->
  <div id="sliderTitleContainer">
    <slot name="slider-title"></slot>
  </div>
  <div id="sliderDescriptionContainer">
    <slot name="slider-description"></slot>
  </div>
  <div id="sliderContainer">
    <cr-button id="negativeButton" class="sign-button"
        on-click="onNegativeClicked_">
      <iron-icon class="sign-icon" icon="oobe-16:negative"
          aria-label$="[[i18nDynamic(locale, 'displaySizeNegative')]]">
      </iron-icon>
    </cr-button>
    <cr-slider id="sizeSlider" value="[[tickedSizeIndex_]]"
        on-cr-slider-value-changed="onTickedSizeChanged_"
        marker-count="[[markerCounts_]]" ticks="[[availableSizesTicks_]]"
        aria-labelledby="sliderTitleContainer" aria-live="polite">
    </cr-slider>
    <cr-button id="positiveButton" class="sign-button"
        on-click="onPositiveClicked_">
      <iron-icon class="sign-icon" icon="oobe-16:positive"
          aria-label$="[[i18nDynamic(locale, 'displaySizePositive')]]">
      </iron-icon>
    </cr-button>
  </div>
</div>
<!--_html_template_end_-->`;
    }
    static get properties() {
        return {
            /**
             * List of available display sizes.
             * @type {!Array<number>}
             */
            availableSizesTicks_: {
                type: Array,
            },
            /* Count of the markers in the display size slider, calculated in init()
            method. */
            markerCounts_: {
                type: Number,
            },
            tickedSizeIndex_: {
                type: Number,
                observer: 'updatePreviewSizes_',
            },
            /**
             * List of apps icons and names..
             */
            apps_: {
                type: Array,
            },
        };
    }
    /**
     * Initialize the list of screens.
     */
    init(availableSizes, currentSize) {
        let currentSizeIndex = 0;
        let minDiff = Math.abs(availableSizes[0] - currentSize);
        const sliderSizeTicks = [];
        for (let i = 0; i < availableSizes.length; i++) {
            const ariaValue = Math.round(availableSizes[i] * 100);
            sliderSizeTicks.push({
                value: availableSizes[i],
                ariaValue,
                label: this.i18n('displaySizeValue', ariaValue.toString()),
            });
            if (minDiff > Math.abs(availableSizes[i] - currentSize)) {
                currentSizeIndex = i;
                minDiff = Math.abs(availableSizes[i] - currentSize);
            }
        }
        if (document.querySelector('html[dir=rtl]')) {
            this.shadowRoot.querySelector('#sizeSlider').setAttribute('is-rtl_', '');
        }
        this.availableSizesTicks_ = sliderSizeTicks;
        this.tickedSizeIndex_ = currentSizeIndex;
        this.markerCounts_ = this.availableSizesTicks_.length;
        this.apps_ = [
            { icon: 'images/app_icons/files.svg', name: 'displaySizeFilesApp' },
            { icon: 'images/app_icons/photos.svg', name: 'displaySizePhotosApp' },
            {
                icon: 'images/app_icons/calculator.svg',
                name: 'displaySizeCalculatorApp',
            },
            { icon: 'images/app_icons/camera.svg', name: 'displaySizeCameraApp' },
            { icon: 'images/app_icons/settings.svg', name: 'displaySizeSettingsApp' },
            { icon: 'images/app_icons/a4.svg', name: 'displaySizeA4App' },
        ];
    }
    /**
     * Returns the selected display size.
     * @returns {!number}
     */
    getSelectedSize() {
        return this.availableSizesTicks_[this.tickedSizeIndex_].value;
    }
    // Called upon `tickedSizeIndex_` property changes.
    updatePreviewSizes_() {
        const selectedSize = this.availableSizesTicks_[this.tickedSizeIndex_].value;
        const icons = this.shadowRoot.querySelectorAll('.app-icon');
        for (let i = 0; i < icons.length; i++) {
            icons[i].style.width = selectedSize * DEFAULT_APP_ICON_SIZE + 'px';
        }
        const title = this.shadowRoot.querySelector('#previewTitle');
        title.style.fontSize = selectedSize * DEFAULT_FONT_SIZE + 'px';
        const names = this.shadowRoot.querySelectorAll('.app-name');
        for (let i = 0; i < names.length; i++) {
            names[i].style.fontSize = selectedSize * DEFAULT_FONT_SIZE + 'px';
        }
    }
    onTickedSizeChanged_() {
        this.tickedSizeIndex_ = this.$.sizeSlider.value;
    }
    onPositiveClicked_() {
        if (this.$.sizeSlider.value + 1 < this.markerCounts_) {
            this.$.sizeSlider.value += 1;
            this.tickedSizeIndex_ += 1;
        }
    }
    onNegativeClicked_() {
        if (this.$.sizeSlider.value >= 1) {
            this.$.sizeSlider.value -= 1;
            this.tickedSizeIndex_ -= 1;
        }
    }
}
customElements.define(OobeDisplaySizeSelector.is, OobeDisplaySizeSelector);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import './shimless_rma_fonts_css.js';
import './shimless_rma_shared_css.js';
import './base_page.js';
import './icons.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';

import {assert} from 'chrome://resources/ash/common/assert.js';
import {I18nBehavior, I18nBehaviorInterface} from 'chrome://resources/ash/common/i18n_behavior.js';
import {CrContainerShadowMixin} from 'chrome://resources/cr_elements/cr_container_shadow_mixin.js';
import {afterNextRender, html, mixinBehaviors, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {getShimlessRmaService} from './mojo_interface_provider.js';
import {FeatureLevel, ShimlessRmaServiceInterface, StateResult} from './shimless_rma_types.js';
import {disableNextButton, enableNextButton, focusPageTitle, isComplianceCheckEnabled, isSkuDescriptionEnabled} from './shimless_rma_util.js';

/**
 * @fileoverview
 * 'reimaging-device-information-page' allows the user to update important
 * device information if necessary.
 */

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 */
const ReimagingDeviceInformationPageBase =
    mixinBehaviors([I18nBehavior], CrContainerShadowMixin(PolymerElement));

/**
 * Supported options for IsChassisBranded and HwComplianceVersion questions.
 * @enum {string}
 */
export const BooleanOrDefaultOptions = {
  DEFAULT: 'default',
  YES: 'yes',
  NO: 'no',
};

/** @polymer */
export class ReimagingDeviceInformationPage extends
    ReimagingDeviceInformationPageBase {
  static get is() {
    return 'reimaging-device-information-page';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style include="cr-shared-style shimless-rma-shared shimless-fonts">
  :host {
    --device-info-input-width: 336px;
    /* Height of the shadows that are added by CrContainerShadowMixin. */
    --shadow-height: 20px;
    /* This inverted margin "pulls" in the content below/above it, so the shadow
     * overlaps the content. The 2px is an optical adjustment. */
    --shadow-negative-margin: calc(2px + calc(-1 * var(--shadow-height)));
  }

  hr {
    border: 0;
    border-top: 1px solid var(--cros-separator-color);
    display: block;
    height: 1px;
    margin-bottom: 16px;
    margin-inline-start: 0;
    margin-top: 0;
    transition: opacity 250ms ease;
    /* 90px is the width (including margins) of the revert button to the right
     * of each input. */
    width: calc(var(--device-info-input-width) + 90px);
  }

  .wrapper #cr-container-shadow-top,
  .wrapper #cr-container-shadow-bottom {
    background: linear-gradient(180deg, rgba(0,0,0,0.05), transparent);
    box-shadow: none;
    height: var(--shadow-height);
  }

  .wrapper #cr-container-shadow-top {
    margin-bottom: var(--shadow-negative-margin);
  }

  .wrapper #cr-container-shadow-bottom {
    margin-top: var(--shadow-negative-margin);
  }

  /* Hide the compliance info horizontal line when the bottom shadow is present
   * to avoid unsightly overlap. */
  .wrapper:has(#cr-container-shadow-bottom.has-shadow) hr {
    opacity: 0;
  }

  /* Show the compliance info horizontal line when the bottom shadow is gone. */
  .wrapper:not(:has(#cr-container-shadow-bottom.has-shadow)) hr {
    opacity: 1;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: auto;
    /* Add padding on the left so the inputs don't get visually cropped. */
    padding-inline-start: 2px;
  }

  /*
   * This CSS block is necessary for the correct functioning of the
   * CrContainerShadowMixin intersection probe: that mixin uses an empty div
   * with the IntersectionObserver API to track when the scroll container is
   * scrolled all the way to the bottom (to hide/show the bottom shadow).
   * When the scroll container has height 100%, the intersection probe div will
   * never trigger, causing the bottom shadow to never disappear. This block
   * of CSS moves the element up slightly so that it works correctly.
   */
  .input-wrapper > div:last-of-type {
    position: relative;
    top: -1px;
  }

  .input-row {
    margin-bottom: 30px;
  }

  .input-holder {
    align-items: center;
    display: flex;
  }

  cr-button {
    border: 0;
    margin-top: auto;
  }

  .sku-warning {
    color: var(--shimless-warning-text-color);
    display: flex;
    font-family: var(--shimless-warning-font-family);
    font-size: var(--shimless-warning-font-size);
    font-weight: var(--shimless-regular-font-weight);
    line-height: var(--shimless-warning-line-height);
    max-width: 400px;
  }

  cr-input {
    --cr-input-error-display: none;
    --cr-form-field-label-color: var(--shimless-hint-text-color);
    margin-inline-end: 20px;
  }

  select {
    margin-inline-end: 20px;
  }

  .cr-form-field-label {
    color: var(--shimless-hint-text-color);
    font-family: var(--shimless-hint-font-family);
    font-size: var(--shimless-hint-font-size);
    font-weight: var(--shimless-medium-font-weight);
    line-height: var(--shimless-hint-line-height);
  }

  cr-input,
  .md-select {
    width: var(--device-info-input-width);
  }

  .label-wrapper {
    align-items: center;
    display: inline-flex;
    vertical-align: middle;
  }

  .info-icon {
    color: var(--shimless-hint-text-color);
    display: inline-block;
    height: 18px;
    margin-inline-start: 6px;
    position: relative;
    top: -5px;
    width: 18px;
  }

  .tooltip-content {
    line-height: var(--shimless-instructions-line-height);
  }

  #complianceWarning {
    align-items: center;
    /* We're using this hex color, which corresponds to google_orange_900 in
     * cros_palette.json5, because there is no shared variable for the color. */
    color: #b06000;
    display: flex;
    margin-top: 2px;
  }

  #complianceWarning iron-icon {
    display: inline-block;
    height: 18px;
    margin-inline-end: 6px;
    width: 18px;
  }

  .required-field-asterisk {
    color: var(--cros-text-color-alert);
    margin-inline-start: 3px;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>

<base-page>
  <div slot="left-pane">
    <h1 tabindex="-1">[[i18n('confirmDeviceInfoTitle')]]</h1>
    <div class="instructions">
      [[i18n('confirmDeviceInfoInstructions')]]
    </div>
  </div>
  <div slot="right-pane">
    <div class="wrapper">
      <!-- The #container ID is necessary for the CrContainerShadowMixin to work. -->
      <div id="container" class="input-wrapper"
          show-bottom-shadow>
        <div hidden="[[!shouldShowComplianceSection_(featureLevel_)]]">
          <div hidden="[[isComplianceStatusKnown_(featureLevel_)]]">
            <div class="input-row">
              <div class="label-wrapper">
                <label id="isChassisBrandedLabel" class="cr-form-field-label">
                  [[i18n('confirmDeviceInfoDeviceQuestionIsBranded')]]
                </label>
                <span class="required-field-asterisk cr-form-field-label"
                    aria-hidden="true">
                  *
                </span>
              </div>
              <div class="input-holder">
                <select id="isChassisBranded" class="md-select"
                    on-change="onIsChassisBrandedChange_"
                    aria-labelledby="isChassisBrandedLabel"
                    disabled="[[allButtonsDisabled]]">
                  <option value="[[booleanOrDefaultOptions_.DEFAULT]]">
                    [[i18n('confirmDeviceInfoDeviceAnswerDefault')]]
                  </option>
                  <option value="[[booleanOrDefaultOptions_.NO]]">
                    [[i18n('confirmDeviceInfoDeviceAnswerNo')]]
                  </option>
                  <option value="[[booleanOrDefaultOptions_.YES]]">
                    [[i18n('confirmDeviceInfoDeviceAnswerYes')]]
                  </option>
                </select>
              </div>
            </div>
            <div class="input-row">
              <div class="label-wrapper">
                <label id="doesMeetRequirementsLabel" class="cr-form-field-label">
                  [[i18n('confirmDeviceInfoDeviceQuestionDoesMeetRequirements')]]
                </label>
                <span class="required-field-asterisk cr-form-field-label"
                    aria-hidden="true">
                  *
                </span>
                <iron-icon icon="shimless-icon:info" class="info-icon"
                  id="requirements-icon">
                </iron-icon>
                <paper-tooltip for="requirements-icon" aria-hidden="true">
                  <div class="tooltip-content">
                    [[i18n('confirmDeviceInfoDeviceQuestionDoesMeetRequirementsTooltip')]]
                  </div>
                </paper-tooltip>
              </div>
              <div class="input-holder">
                <select id="doesMeetRequirements" class="md-select"
                    on-change="onDoesMeetRequirementsChange_"
                    aria-labelledby="doesMeetRequirementsLabel"
                    disabled="[[allButtonsDisabled]]">
                  <option value="[[booleanOrDefaultOptions_.DEFAULT]]">
                    [[i18n('confirmDeviceInfoDeviceAnswerDefault')]]
                  </option>
                  <option value="[[booleanOrDefaultOptions_.NO]]">
                    [[i18n('confirmDeviceInfoDeviceAnswerNo')]]
                  </option>
                  <option value="[[booleanOrDefaultOptions_.YES]]">
                    [[i18n('confirmDeviceInfoDeviceAnswerYes')]]
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="input-row">
          <div class="input-holder">
            <cr-input id="serialNumber" value="{{serialNumber_}}"
                label="[[i18n('confirmDeviceInfoSerialNumberLabel')]]"
                disabled="[[allButtonsDisabled]]">
            </cr-input>
            <cr-button id="resetSerialNumber"
                on-click="onResetSerialNumberButtonClicked_"
                disabled="[[disableResetSerialNumber_]]"
                aria-description="[[i18n('confirmDeviceInfoSerialNumberLabel')]]">
              [[i18n('confirmDeviceInfoResetButtonLabel')]]
            </cr-button>
          </div>
        </div>
        <div class="input-row">
          <div class="input-holder">
            <cr-input id="dramPartNumber" value="{{dramPartNumber_}}"
                label="[[i18n('confirmDeviceInfoDramPartNumberLabel')]]"
                disabled="[[allButtonsDisabled]]">
            </cr-input>
            <cr-button id="resetDramPartNumber"
                on-click="onResetDramPartNumberButtonClicked_"
                disabled="[[disableResetDramPartNumber_]]"
                aria-description="[[i18n('confirmDeviceInfoDramPartNumberLabel')]]">
              [[i18n('confirmDeviceInfoResetButtonLabel')]]
            </cr-button>
          </div>
        </div>
        <div class="input-row">
          <label id="regionLabel" class="cr-form-field-label">
            [[i18n('confirmDeviceInfoRegionLabel')]]
          </label>
          <div class="input-holder">
            <select id="regionSelect" class="md-select"
                on-change="onSelectedRegionChange_" aria-labelledby="regionLabel"
                disabled="[[allButtonsDisabled]]">
              <template is="dom-repeat" items="[[regions_]]" as="region">
                <option value="[[region]]">
                  [[region]]
                </option>
              </template>
            </select>
            <cr-button id="resetRegion" on-click="onResetRegionButtonClicked_"
                disabled="[[disableResetRegion_]]"
                aria-describedby="regionLabel">
              [[i18n('confirmDeviceInfoResetButtonLabel')]]
            </cr-button>
          </div>
        </div>
        <div class="input-row">
          <label id="customLabelLabel" class="cr-form-field-label">
            [[i18n('confirmDeviceInfoCustomLabelLabel')]]
          </label>
          <div class="input-holder">
            <select id="customLabelSelect" class="md-select"
                on-change="onSelectedCustomLabelChange_"
                aria-labelledby="customLabelLabel"
                disabled="[[allButtonsDisabled]]">
              <template is="dom-repeat" items="[[customLabels_]]" as="customLabel">
                <option value="[[customLabel]]">
                  [[customLabel]]
                </option>
              </template>
            </select>
            <cr-button id="resetCustomLabel"
                on-click="onResetCustomLabelButtonClicked_"
                disabled="[[disableResetCustomLabel_]]"
                aria-describedby="customLabelLabel">
              [[i18n('confirmDeviceInfoResetButtonLabel')]]
            </cr-button>
          </div>
        </div>
        <div class="label-wrapper">
          <label id="skuLabel" class="cr-form-field-label">
            [[i18n('confirmDeviceInfoSkuLabel')]]
          </label>
          <iron-icon id="skuIcon" icon="shimless-icon:info" class="info-icon">
          </iron-icon>
          <paper-tooltip for="skuIcon" aria-hidden="true">
            <div class="tooltip-content">
              [[i18n('confirmDeviceInfoSkuWarning')]]
            </div>
          </paper-tooltip>
        </div>
        <div class="input-holder input-row">
          <select id="skuSelect" class="md-select"
              on-change="onSelectedSkuChange_" aria-labelledby="skuLabel"
              disabled="[[allButtonsDisabled]]">
            <template is="dom-repeat" items="[[skus_]]" as="sku">
              <option value="[[sku]]">
                [[sku]]
              </option>
            </template>
          </select>
          <cr-button id="resetSku" on-click="onResetSkuButtonClicked_"
              disabled="[[disableResetSku_]]"
              aria-describedby="skuLabel">
            [[i18n('confirmDeviceInfoResetButtonLabel')]]
          </cr-button>
        </div>
      </div>
      <div hidden="[[!shouldShowComplianceSection_(featureLevel_)]]">
        <div hidden="[[!isComplianceStatusKnown_(featureLevel_)]]">
          <hr aria-hidden="true">
          <div class="input-row">
            <div class="compliance-status-string">
              [[getComplianceStatusString_(featureLevel_)]]
            </div>
            <div id="complianceWarning">
              <iron-icon icon="shimless-icon:info"></iron-icon>
              <span>
                [[i18n('confirmDeviceInfoDeviceComplianceWarning')]]
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`;
  }

  static get observers() {
    return [
      'updateNextButtonDisabledState_(serialNumber_, skuIndex_, regionIndex_,' +
          ' customLabelIndex_, isChassisBranded_, hwComplianceVersion_,' +
          ' featureLevel_)',
    ];
  }

  static get properties() {
    return {

      /**
       * Set by shimless_rma.js.
       * @type {boolean}
       */
      allButtonsDisabled: Boolean,

      /** @protected */
      disableResetSerialNumber_: {
        type: Boolean,
        computed: 'getDisableResetSerialNumber_(originalSerialNumber_,' +
            'serialNumber_, allButtonsDisabled)',
      },

      /** @protected */
      disableResetRegion_: {
        type: Boolean,
        computed: 'getDisableResetRegion_(originalRegionIndex_, regionIndex_,' +
            'allButtonsDisabled)',
      },

      /** @protected */
      disableResetSku_: {
        type: Boolean,
        computed: 'getDisableResetSku_(originalSkuIndex_, skuIndex_,' +
            'allButtonsDisabled)',
      },

      /** @protected */
      disableResetCustomLabel_: {
        type: Boolean,
        computed: 'getDisableResetCustomLabel_(' +
            'originalCustomLabelIndex_, customLabelIndex_, allButtonsDisabled)',
      },

      /** @protected */
      disableResetDramPartNumber_: {
        type: Boolean,
        computed: 'getDisableResetDramPartNumber_(' +
            'originalDramPartNumber_, dramPartNumber_, allButtonsDisabled)',
      },

      /** @protected */
      originalSerialNumber_: {
        type: String,
        value: '',
      },

      /** @protected */
      serialNumber_: {
        type: String,
        value: '',
      },

      /** @protected {!Array<string>} */
      regions_: {
        type: Array,
        value: () => [],
      },

      /** @protected */
      originalRegionIndex_: {
        type: Number,
        value: -1,
      },

      /** @protected */
      regionIndex_: {
        type: Number,
        value: -1,
      },

      /** @protected {!Array<string>} */
      skus_: {
        type: Array,
        value: () => [],
      },

      /** @protected */
      originalSkuIndex_: {
        type: Number,
        value: -1,
      },

      /** @protected */
      skuIndex_: {
        type: Number,
        value: -1,
      },

      /** @protected {!Array<string>} */
      customLabels_: {
        type: Array,
        value: () => [],
      },

      /** @protected */
      originalCustomLabelIndex_: {
        type: Number,
        value: 0,
      },

      /** @protected */
      customLabelIndex_: {
        type: Number,
        value: 0,
      },

      /** @protected */
      originalDramPartNumber_: {
        type: String,
        value: '',
      },

      /** @protected */
      dramPartNumber_: {
        type: String,
        value: '',
      },

      /** @protected */
      featureLevel_: {
        type: Number,
        value: FeatureLevel.kRmadFeatureLevelUnsupported,
      },

      /**
       * Used to refer to the enum values in the HTML file.
       * @protected {?BooleanOrDefaultOptions}
       */
      booleanOrDefaultOptions_: {
        type: Object,
        value: BooleanOrDefaultOptions,
        readOnly: true,
      },

      /** @protected */
      isChassisBranded_: {
        type: String,
        value: BooleanOrDefaultOptions.DEFAULT,
      },

      /** @protected */
      hwComplianceVersion_: {
        type: String,
        value: BooleanOrDefaultOptions.DEFAULT,
      },
    };
  }

  constructor() {
    super();
    /** @private {ShimlessRmaServiceInterface} */
    this.shimlessRmaService_ = getShimlessRmaService();
  }

  /** @override */
  ready() {
    super.ready();
    this.getOriginalSerialNumber_();
    this.getOriginalRegionAndRegionList_();
    this.getOriginalSkuAndSkuList_();
    this.getOriginalCustomLabelAndCustomLabelList_();
    this.getOriginalDramPartNumber_();

    if (isComplianceCheckEnabled()) {
      this.getOriginalFeatureLevel_();
    }

    focusPageTitle(this);
  }

  /** @private */
  allInformationIsValid_() {
    const complianceQuestionsHaveDefaultValues =
        this.isChassisBranded_ === BooleanOrDefaultOptions.DEFAULT ||
        this.hwComplianceVersion_ === BooleanOrDefaultOptions.DEFAULT;
    if (this.areComplianceQuestionsShown_() &&
        complianceQuestionsHaveDefaultValues) {
      return false;
    }
    return (this.serialNumber_ !== '') && (this.skuIndex_ >= 0) &&
        (this.regionIndex_ >= 0) && (this.customLabelIndex_ >= 0);
  }

  /** @private */
  updateNextButtonDisabledState_() {
    const disabled = !this.allInformationIsValid_();
    if (disabled) {
      disableNextButton(this);
    } else {
      enableNextButton(this);
    }
  }

  /** @private */
  getOriginalSerialNumber_() {
    this.shimlessRmaService_.getOriginalSerialNumber().then((result) => {
      this.originalSerialNumber_ = result.serialNumber;
      this.serialNumber_ = this.originalSerialNumber_;
    });
  }

  /** @private */
  getOriginalRegionAndRegionList_() {
    this.shimlessRmaService_.getOriginalRegion()
        .then((result) => {
          this.originalRegionIndex_ = result.regionIndex;
          return this.shimlessRmaService_.getRegionList();
        })
        .then((result) => {
          this.regions_ = result.regions;
          this.regionIndex_ = this.originalRegionIndex_;

          // Need to wait for the select options to render before setting the
          // selected index.
          afterNextRender(this, () => {
            this.shadowRoot.querySelector('#regionSelect').selectedIndex =
                this.regionIndex_;
          });
        });
  }

  /** @private */
  getOriginalSkuAndSkuList_() {
    this.shimlessRmaService_.getOriginalSku()
        .then((result) => {
          this.originalSkuIndex_ = result.skuIndex;
          return this.shimlessRmaService_.getSkuList();
        })
        .then((result) => {
          this.skus_ = result.skus;
          this.skuIndex_ = this.originalSkuIndex_;
          return this.shimlessRmaService_.getSkuDescriptionList();
        })
        .then((result) => {
          // The SKU description list can be empty if the backend disables this
          // feature.
          if (isSkuDescriptionEnabled() &&
              this.skus_.length === result.skuDescriptions.length) {
            this.skus_ = this.skus_.map(
                (sku, index) => `${sku}: ${result.skuDescriptions[index]}`);
          }

          // Need to wait for the select options to render before setting the
          // selected index.
          afterNextRender(this, () => {
            this.shadowRoot.querySelector('#skuSelect').selectedIndex =
                this.skuIndex_;
          });
        });
  }

  /** @private */
  getOriginalCustomLabelAndCustomLabelList_() {
    this.shimlessRmaService_.getOriginalCustomLabel()
        .then((result) => {
          this.originalCustomLabelIndex_ = result.customLabelIndex;
          return this.shimlessRmaService_.getCustomLabelList();
        })
        .then((result) => {
          this.customLabels_ = result.customLabels;
          const blankIndex = this.customLabels_.indexOf('');
          if (blankIndex >= 0) {
            this.customLabels_[blankIndex] =
                this.i18n('confirmDeviceInfoEmptyCustomLabelLabel');
            if (this.originalCustomLabelIndex_ < 0) {
              this.originalCustomLabelIndex_ = blankIndex;
            }
          }
          this.customLabelIndex_ = this.originalCustomLabelIndex_;

          // Need to wait for the select options to render before setting the
          // selected index.
          afterNextRender(this, () => {
            this.shadowRoot.querySelector('#customLabelSelect').selectedIndex =
                this.customLabelIndex_;
          });
        });
  }

  /** @private */
  getOriginalDramPartNumber_() {
    this.shimlessRmaService_.getOriginalDramPartNumber().then((result) => {
      this.originalDramPartNumber_ = result.dramPartNumber;
      this.dramPartNumber_ = this.originalDramPartNumber_;
    });
  }

  /** @private */
  getOriginalFeatureLevel_() {
    this.shimlessRmaService_.getOriginalFeatureLevel().then((result) => {
      this.featureLevel_ = result.originalFeatureLevel;
    });
  }

  /** @protected */
  getDisableResetSerialNumber_() {
    return this.originalSerialNumber_ === this.serialNumber_ ||
        this.allButtonsDisabled;
  }

  /** @protected */
  getDisableResetRegion_() {
    return this.originalRegionIndex_ === this.regionIndex_ ||
        this.allButtonsDisabled;
  }

  /** @protected */
  getDisableResetSku_() {
    return this.originalSkuIndex_ === this.skuIndex_ || this.allButtonsDisabled;
  }

  /** @protected */
  getDisableResetCustomLabel_() {
    return this.originalCustomLabelIndex_ === this.customLabelIndex_ ||
        this.allButtonsDisabled;
  }

  /** @protected */
  getDisableResetDramPartNumber_() {
    return this.originalDramPartNumber_ === this.dramPartNumber_ ||
        this.allButtonsDisabled;
  }

  /** @protected */
  onSelectedRegionChange_(event) {
    this.regionIndex_ =
        this.shadowRoot.querySelector('#regionSelect').selectedIndex;
  }

  /** @protected */
  onSelectedSkuChange_(event) {
    this.skuIndex_ = this.shadowRoot.querySelector('#skuSelect').selectedIndex;
  }

  /** @protected */
  onSelectedCustomLabelChange_(event) {
    this.customLabelIndex_ =
        this.shadowRoot.querySelector('#customLabelSelect').selectedIndex;
  }

  /** @protected */
  onResetSerialNumberButtonClicked_(event) {
    this.serialNumber_ = this.originalSerialNumber_;
  }

  /** @protected */
  onResetRegionButtonClicked_(event) {
    this.regionIndex_ = this.originalRegionIndex_;
    this.shadowRoot.querySelector('#regionSelect').selectedIndex =
        this.regionIndex_;
  }

  /** @protected */
  onResetSkuButtonClicked_(event) {
    this.skuIndex_ = this.originalSkuIndex_;
    this.shadowRoot.querySelector('#skuSelect').selectedIndex = this.skuIndex_;
  }

  /** @protected */
  onResetCustomLabelButtonClicked_(event) {
    this.customLabelIndex_ = this.originalCustomLabelIndex_;
    this.shadowRoot.querySelector('#customLabelSelect').selectedIndex =
        this.customLabelIndex_;
  }

  /** @protected */
  onResetDramPartNumberButtonClicked_(event) {
    this.dramPartNumber_ = this.originalDramPartNumber_;
  }

  /** @protected */
  onIsChassisBrandedChange_(event) {
    this.isChassisBranded_ =
        this.shadowRoot.querySelector('#isChassisBranded').value;
  }

  /** @protected */
  onDoesMeetRequirementsChange_(event) {
    this.hwComplianceVersion_ =
        this.shadowRoot.querySelector('#doesMeetRequirements').value;
  }

  /** @return {!Promise<!{stateResult: !StateResult}>} */
  onNextButtonClick() {
    if (!this.allInformationIsValid_()) {
      return Promise.reject(new Error('Some required information is not set'));
    } else {
      let isChassisBranded = false;
      let hwComplianceVersion = 0;

      if (this.areComplianceQuestionsShown_()) {
        // Convert isChassisBranded_ to boolean value for mojo.
        isChassisBranded =
            this.isChassisBranded_ === BooleanOrDefaultOptions.YES;

        // Convert hwComplianceVersion_ to correct value for mojo.
        const HARDWARE_COMPLIANT = 1;
        const HARDWARE_NOT_COMPLIANT = 0;
        hwComplianceVersion =
            this.hwComplianceVersion_ === BooleanOrDefaultOptions.YES ?
            HARDWARE_COMPLIANT :
            HARDWARE_NOT_COMPLIANT;
      }

      return this.shimlessRmaService_.setDeviceInformation(
          this.serialNumber_, this.regionIndex_, this.skuIndex_,
          this.customLabelIndex_, this.dramPartNumber_, isChassisBranded,
          hwComplianceVersion);
    }
  }

  /** @private */
  shouldShowComplianceSection_() {
    return isComplianceCheckEnabled() &&
        this.featureLevel_ !== FeatureLevel.kRmadFeatureLevelUnsupported;
  }

  /** @private */
  isComplianceStatusKnown_() {
    return this.featureLevel_ !== FeatureLevel.kRmadFeatureLevelUnsupported &&
        this.featureLevel_ !== FeatureLevel.kRmadFeatureLevelUnknown;
  }

  /** @private */
  areComplianceQuestionsShown_() {
    return this.shouldShowComplianceSection_() &&
        !this.isComplianceStatusKnown_();
  }

  /** @private */
  getComplianceStatusString_() {
    const deviceIsCompliant =
        this.featureLevel_ >= FeatureLevel.kRmadFeatureLevel1;
    return deviceIsCompliant ? this.i18n('confirmDeviceInfoDeviceCompliant') :
                               this.i18n('confirmDeviceInfoDeviceNotCompliant');
  }
}

customElements.define(
    ReimagingDeviceInformationPage.is, ReimagingDeviceInformationPage);

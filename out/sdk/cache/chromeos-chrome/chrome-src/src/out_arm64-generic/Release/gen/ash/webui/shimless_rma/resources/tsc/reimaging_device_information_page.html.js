import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style shimless-rma-shared shimless-fonts">:host{--device-info-input-width:336px;--shadow-height:20px;--shadow-negative-margin:calc(2px + calc(-1 * var(--shadow-height)))}hr{border:0;border-top:1px solid var(--cros-separator-color);display:block;height:1px;margin-bottom:16px;margin-inline-start:0;margin-top:0;transition:opacity 250ms ease;width:calc(var(--device-info-input-width) + 90px)}.wrapper #cr-container-shadow-bottom,.wrapper #cr-container-shadow-top{background:linear-gradient(180deg,rgba(0,0,0,.05),transparent);box-shadow:none;height:var(--shadow-height)}.wrapper #cr-container-shadow-top{margin-bottom:var(--shadow-negative-margin)}.wrapper #cr-container-shadow-bottom{margin-top:var(--shadow-negative-margin)}.wrapper:has(#cr-container-shadow-bottom.has-shadow) hr{opacity:0}.wrapper:not(:has(#cr-container-shadow-bottom.has-shadow)) hr{opacity:1}.input-wrapper{display:flex;flex-direction:column;justify-content:flex-start;overflow-y:auto;padding-inline-start:2px}.input-wrapper>div:last-of-type{position:relative;top:-1px}.input-row{margin-bottom:30px}.input-holder{align-items:center;display:flex}cr-button{border:0;margin-top:auto}.sku-warning{color:var(--shimless-warning-text-color);display:flex;font-family:var(--shimless-warning-font-family);font-size:var(--shimless-warning-font-size);font-weight:var(--shimless-regular-font-weight);line-height:var(--shimless-warning-line-height);max-width:400px}cr-input{--cr-input-error-display:none;--cr-form-field-label-color:var(--shimless-hint-text-color);margin-inline-end:20px}select{margin-inline-end:20px}.cr-form-field-label{color:var(--shimless-hint-text-color);font-family:var(--shimless-hint-font-family);font-size:var(--shimless-hint-font-size);font-weight:var(--shimless-medium-font-weight);line-height:var(--shimless-hint-line-height)}.md-select,cr-input{width:var(--device-info-input-width)}.label-wrapper{align-items:center;display:inline-flex;vertical-align:middle}.info-icon{color:var(--shimless-hint-text-color);display:inline-block;height:18px;margin-inline-start:6px;position:relative;top:-5px;width:18px}.tooltip-content{line-height:var(--shimless-instructions-line-height)}#complianceWarning{align-items:center;color:#b06000;display:flex;margin-top:2px}#complianceWarning iron-icon{display:inline-block;height:18px;margin-inline-end:6px;width:18px}.required-field-asterisk{color:var(--cros-text-color-alert);margin-inline-start:3px}.wrapper{display:flex;flex-direction:column;height:100%}</style>

<base-page>
  <div slot="left-pane">
    <h1 tabindex="-1">[[i18n('confirmDeviceInfoTitle')]]</h1>
    <div class="instructions">
      [[i18n('confirmDeviceInfoInstructions')]]
    </div>
  </div>
  <div slot="right-pane">
    <div class="wrapper">
      
      <div id="container" class="input-wrapper" show-bottom-shadow>
        <div hidden="[[!shouldShowComplianceSection(featureLevel)]]">
          <div hidden="[[isComplianceStatusKnown(featureLevel)]]">
            <div class="input-row">
              <div class="label-wrapper">
                <label id="isChassisBrandedLabel" class="cr-form-field-label">
                  [[i18n('confirmDeviceInfoDeviceQuestionIsBranded')]]
                </label>
                <span class="required-field-asterisk cr-form-field-label" aria-hidden="true">
                  *
                </span>
              </div>
              <div class="input-holder">
                <select id="isChassisBranded" class="md-select" on-change="onIsChassisBrandedChange" aria-labelledby="isChassisBrandedLabel" disabled="[[allButtonsDisabled]]">
                  <option value="[[booleanOrDefaultOptions.DEFAULT]]">
                    [[i18n('confirmDeviceInfoDeviceAnswerDefault')]]
                  </option>
                  <option value="[[booleanOrDefaultOptions.NO]]">
                    [[i18n('confirmDeviceInfoDeviceAnswerNo')]]
                  </option>
                  <option value="[[booleanOrDefaultOptions.YES]]">
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
                <span class="required-field-asterisk cr-form-field-label" aria-hidden="true">
                  *
                </span>
                <iron-icon icon="shimless-icon:info" class="info-icon" id="requirements-icon">
                </iron-icon>
                <paper-tooltip for="requirements-icon" aria-hidden="true">
                  <div class="tooltip-content">
                    [[i18n('confirmDeviceInfoDeviceQuestionDoesMeetRequirementsTooltip')]]
                  </div>
                </paper-tooltip>
              </div>
              <div class="input-holder">
                <select id="doesMeetRequirements" class="md-select" on-change="onDoesMeetRequirementsChange" aria-labelledby="doesMeetRequirementsLabel" disabled="[[allButtonsDisabled]]">
                  <option value="[[booleanOrDefaultOptions.DEFAULT]]">
                    [[i18n('confirmDeviceInfoDeviceAnswerDefault')]]
                  </option>
                  <option value="[[booleanOrDefaultOptions.NO]]">
                    [[i18n('confirmDeviceInfoDeviceAnswerNo')]]
                  </option>
                  <option value="[[booleanOrDefaultOptions.YES]]">
                    [[i18n('confirmDeviceInfoDeviceAnswerYes')]]
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="input-row">
          <div class="input-holder">
            <cr-input id="serialNumber" value="{{serialNumber}}" label="[[i18n('confirmDeviceInfoSerialNumberLabel')]]" disabled="[[allButtonsDisabled]]">
            </cr-input>
            <cr-button id="resetSerialNumber" on-click="onResetSerialNumberButtonClicked" disabled="[[disableResetSerialNumber]]" aria-description="[[i18n('confirmDeviceInfoSerialNumberLabel')]]">
              [[i18n('confirmDeviceInfoResetButtonLabel')]]
            </cr-button>
          </div>
        </div>
        <div class="input-row">
          <div class="input-holder">
            <cr-input id="dramPartNumber" value="{{dramPartNumber}}" label="[[i18n('confirmDeviceInfoDramPartNumberLabel')]]" disabled="[[allButtonsDisabled]]">
            </cr-input>
            <cr-button id="resetDramPartNumber" on-click="onResetDramPartNumberButtonClicked" disabled="[[disableResetDramPartNumber]]" aria-description="[[i18n('confirmDeviceInfoDramPartNumberLabel')]]">
              [[i18n('confirmDeviceInfoResetButtonLabel')]]
            </cr-button>
          </div>
        </div>
        <div class="input-row">
          <label id="regionLabel" class="cr-form-field-label">
            [[i18n('confirmDeviceInfoRegionLabel')]]
          </label>
          <div class="input-holder">
            <select id="regionSelect" class="md-select" on-change="onSelectedRegionChange" aria-labelledby="regionLabel" disabled="[[allButtonsDisabled]]">
              <template is="dom-repeat" items="[[regions]]" as="region">
                <option value="[[region]]">
                  [[region]]
                </option>
              </template>
            </select>
            <cr-button id="resetRegion" on-click="onResetRegionButtonClicked" disabled="[[disableResetRegion]]" aria-describedby="regionLabel">
              [[i18n('confirmDeviceInfoResetButtonLabel')]]
            </cr-button>
          </div>
        </div>
        <div class="input-row">
          <label id="customLabelLabel" class="cr-form-field-label">
            [[i18n('confirmDeviceInfoCustomLabelLabel')]]
          </label>
          <div class="input-holder">
            <select id="customLabelSelect" class="md-select" on-change="onSelectedCustomLabelChange" aria-labelledby="customLabelLabel" disabled="[[allButtonsDisabled]]">
              <template is="dom-repeat" items="[[customLabels]]" as="customLabel">
                <option value="[[customLabel]]">
                  [[customLabel]]
                </option>
              </template>
            </select>
            <cr-button id="resetCustomLabel" on-click="onResetCustomLabelButtonClicked" disabled="[[disableResetCustomLabel]]" aria-describedby="customLabelLabel">
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
          <select id="skuSelect" class="md-select" on-change="onSelectedSkuChange" aria-labelledby="skuLabel" disabled="[[allButtonsDisabled]]">
            <template is="dom-repeat" items="[[skus]]" as="sku">
              <option value="[[sku]]">
                [[sku]]
              </option>
            </template>
          </select>
          <cr-button id="resetSku" on-click="onResetSkuButtonClicked" disabled="[[disableResetSku]]" aria-describedby="skuLabel">
            [[i18n('confirmDeviceInfoResetButtonLabel')]]
          </cr-button>
        </div>
      </div>
      <div hidden="[[!shouldShowComplianceSection(featureLevel)]]">
        <div hidden="[[!isComplianceStatusKnown(featureLevel)]]">
          <hr aria-hidden="true">
          <div class="input-row">
            <div class="compliance-status-string">
              [[getComplianceStatusString(featureLevel)]]
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

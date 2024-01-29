import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>#centerContent{box-sizing:border-box;display:flex;flex-direction:column;flex-grow:1;margin:0 24px}#connectionToken{color:var(--cros-text-color-disabled);flex-grow:1;font-size:9px;letter-spacing:.3px;line-height:12px;margin-top:46px;padding-top:6px;text-align:center}#animation{bottom:0;height:100%;left:0;pointer-events:none;position:absolute;right:0}#processRow{display:flex;flex-grow:1}#processRowContent{align-self:center;display:flex;flex-grow:1;margin:24px 8px}#errorSection{align-items:flex-start;display:flex;flex-direction:row;padding:8px}#error{align-items:flex-start;display:flex;flex-direction:column;font-size:12px}#errorTitle{color:var(--cros-text-color-alert);font-weight:700;margin-bottom:3px}#errorDescription{color:var(--cros-text-color-secondary);line-height:13px}#errorIcon{fill:var(--cros-icon-color-alert);flex-shrink:0;height:20px;margin-inline-end:12px;width:20px}</style>
<nearby-page-template title="$i18n{nearbyShareReceiveConfirmPageTitle}" action-button-label="$i18n{nearbyShareActionsAccept}" action-button-event-name="accept" cancel-button-label="$i18n{nearbyShareActionsDecline}" cancel-button-event-name="reject" close-only="[[errorTitle_]]">
  <div id="centerContent" slot="content">
    <div id="processRow">
      <div id="processRowContent">
        <nearby-progress id="progressIcon" share-target="[[shareTarget]]" has-error="[[errorTitle_]]">
        </nearby-progress>
        <div id="connectionToken" aria-live="polite">
          <template is="dom-if" if="[[connectionToken]]">
            [[i18n('nearbyShareSecureConnectionId', connectionToken)]]
          </template>
        </div>
        <nearby-preview payload-preview="[[shareTarget.payloadPreview]]" disabled="[[errorTitle_]]">
        </nearby-preview>
      </div>
    </div>
    <template is="dom-if" if="[[!errorTitle_]]" restamp>
      <cros-lottie-renderer id="animation" asset-url="[[getAnimationUrl_()]]" autoplay dynamic aria-hidden>
      </cros-lottie-renderer>
    </template>
    
    <template is="dom-if" if="[[errorTitle_]]" restamp>
      <div id="errorSection">
        <iron-icon id="errorIcon" icon="nearby20:info"></iron-icon>
        <div id="error" role="alert" aria-labelledby="errorTitle" aria-describedby="errorDescription">
          <div id="errorTitle" aria-hidden="true">[[errorTitle_]]</div>
          <div id="errorDescription" aria-hidden="true">
            [[errorDescription_]]
          </div>
        </div>
      </div>
    </template>
  </div>
</nearby-page-template>
<!--_html_template_end_-->`;
}

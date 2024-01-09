import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared passwords-shared cr-screen-reader-only">.second-column{align-items:center;display:flex;flex:1;justify-content:flex-end}.list-item{margin-bottom:8px;margin-top:8px}.sub-label{color:var(--cr-secondary-text-color)}#ibanImage{margin-inline-end:16px;vertical-align:middle}</style>
<div class="list-item type-column" role="row">
  <img id="ibanImage" src="chrome://settings/images/iban.svg" alt="">
  <div class="summary-column cr-screen-reader-only-host-node" role="cell">
    <div class="cr-screen-reader-only">
      [[getA11yIbanDescription_(iban)]], [[iban.nickname]]
    </div>
    <div id="value" class="ellipses" aria-hidden="true">
      [[iban.metadata.summaryLabel]]
    </div>
    <div id="nickname" class="ellipses sub-label" aria-hidden="true">
      [[iban.nickname]]
    </div>
  </div>
  <div role="cell" class="second-column">
    <div id="paymentsIndicator" hidden$="[[!shouldShowGooglePaymentsIndicator_(iban.metadata)]]">


        <span class="sub-label">$i18n{googlePayments}</span>

    </div>
    <template is="dom-if" if="[[showDotsMenu_(iban.metadata)]]">
      <cr-icon-button class="icon-more-vert" id="ibanMenu" title="[[getMoreActionsTitle_(iban)]]" on-click="onDotsMenuClick_">
      </cr-icon-button>
    </template>
    <template is="dom-if" if="[[!showDotsMenu_(iban.metadata)]]">
      <cr-icon-button class="icon-external" id="remoteIbanLink" title="$i18n{remotePaymentMethodsLinkLabel}" role="link" on-click="onRemoteEditClick_"></cr-icon-button>
    </template>
  </div>
</div>
<!--_html_template_end_-->`;
}

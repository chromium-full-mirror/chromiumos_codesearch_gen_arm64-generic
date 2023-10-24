import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="settings-shared passwords-shared">.expiration-column{align-items:center;display:flex;flex:1}.list-separator{border-top:var(--cr-separator-line);width:100%}</style>
    <div role="table">
      <div class="vertical-list list-with-header" role="rowgroup">
        <template is="dom-repeat" items="[[creditCards]]">
          <settings-credit-card-list-entry id="[[getCreditCardId_(index)]]" class="payment-method" credit-card="[[item]]">
          </settings-credit-card-list-entry>
        </template>
      </div>
      <div class="list-separator" hidden$="[[!showCreditCardIbanSeparator_]]">
      </div>
      <div class="vertical-list list-with-header" role="rowgroup">
        <template is="dom-repeat" items="[[ibans]]">
          <settings-iban-list-entry id="[[getIbanId_(index)]]" class="payment-method" iban="[[item]]">
          </settings-iban-list-entry>
        </template>
      </div>
    </div>
    <div id="noPaymentMethodsLabel" class="list-item" hidden$="[[showAnyPaymentMethods_]]">
      $i18n{noPaymentMethodsFound}
    </div>
<!--_html_template_end_-->`;
}

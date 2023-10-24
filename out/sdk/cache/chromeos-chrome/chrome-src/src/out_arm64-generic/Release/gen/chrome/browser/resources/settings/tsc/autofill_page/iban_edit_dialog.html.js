import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared">cr-input{--cr-input-error-display:block;margin-bottom:0;width:var(--cr-default-input-max-width)}div[slot=button-container]{padding-top:0}#saved-to-this-device-only-label{margin-bottom:26px;margin-top:0}#charCount{font-size:var(--cr-form-field-label-font-size);line-height:var(--cr-form-field-label-line-height);padding-inline-start:8px}#nicknameInput:not(:focus-within) #charCount{--cr-input-width:var(--cr-default-input-max-width);display:none;width:fit-content}</style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">[[title_]]</div>
  <div slot="body">
    <cr-input id="valueInput" label="$i18n{addPaymentMethodIban}" on-input="updateSaveIbanButtonEnablement_" value="{{value_}}" autofocus>
    </cr-input>
    <cr-input id="nicknameInput" label="$i18n{ibanNickname}" value="{{nickname_}}" spellcheck="false" maxlength="25">
      <div id="charCount" slot="suffix">
        [[computeNicknameCharCount_(nickname_)]]/25
      </div>
    </cr-input>
    <div id="saved-to-this-device-only-label">
      $i18n{ibanSavedToThisDeviceOnly}
    </div>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancelButtonClick_">$i18n{cancel}</cr-button>
    <cr-button id="saveButton" class="action-button" on-click="onIbanSaveButtonClick_">
      $i18n{save}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

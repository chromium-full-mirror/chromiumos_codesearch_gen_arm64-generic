import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">cr-dialog::part(dialog){width:fit-content}#errorIcon{--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size);--iron-icon-fill-color:var(--cros-icon-color-alert);display:inline-block;margin-inline-start:8px}#errorDiv{align-items:center;color:var(--cros-text-color-alert);display:flex;flex-direction:row;max-width:200px;min-height:48px}#errorDiv[invisible]{visibility:hidden}#pinKeyboardDiv{justify-content:center;padding:0}#pinAutosubmitDialogSubtitle{padding-bottom:16px}</style>
<cr-dialog id="dialog" on-close="close" close-text="$i18n{close}">
  <div slot="title">$i18n{configurePinConfirmPinTitle}</div>
  <div slot="body">
    <div id="pinAutosubmitDialogSubtitle">
      $i18n{pinAutoSubmitPrompt}
    </div>
    
    <div id="pinKeyboardDiv" class="settings-box continuation">
      <pin-keyboard id="pinKeyboard" on-pin-change="onPinChange_" on-submit="onPinSubmit_" value="{{pinValue_}}" disabled="[[requestInProcess_]]" enable-placeholder>
        <div id="errorDiv" invisible$="[[!error_]]">
          <iron-icon id="errorIcon" icon="cr:error-outline"></iron-icon>
          <span id="errorMessage">[[getErrorMessageString_(error_)]]</span>
        </div>
      </pin-keyboard>
    </div>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button id="confirmButton" class="action-button" on-click="onPinSubmit_" disabled="[[confirmButtonDisabled_]]">
      $i18n{confirm}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

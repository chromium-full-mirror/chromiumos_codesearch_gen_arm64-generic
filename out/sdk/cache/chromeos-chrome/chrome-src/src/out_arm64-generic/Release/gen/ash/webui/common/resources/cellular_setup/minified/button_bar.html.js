import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="cros-color-overrides">:host{display:flex;justify-content:flex-end;padding:10px 0 20px 0}#forward:focus{box-shadow:0 0 0 2px var(--focus-shadow-color)}#flex{flex:1}</style>
<cr-button id="backward" class="cancel-button" on-click="onBackwardButtonClicked_" disabled="[[isButtonDisabled_(Button.BACKWARD, buttonState.*)]]" hidden$="[[isButtonHidden_(Button.BACKWARD, buttonState.*)]]">
  [[i18n('back')]]
</cr-button>
<div id="flex"></div>
<cr-button id="cancel" class="cancel-button" on-click="onCancelButtonClicked_" disabled="[[isButtonDisabled_(Button.CANCEL, buttonState.*)]]" hidden$="[[isButtonHidden_(Button.CANCEL, buttonState.*)]]">
  [[i18n('cancel')]]
</cr-button>
<cr-button id="forward" class="action-button" on-click="onForwardButtonClicked_" disabled="[[isButtonDisabled_(Button.FORWARD, buttonState.*)]]" hidden$="[[isButtonHidden_(Button.FORWARD, buttonState.*)]]">
  [[forwardButtonLabel]]
</cr-button>
<!--_html_template_end_-->`}
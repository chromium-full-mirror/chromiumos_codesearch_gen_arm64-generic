import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="settings-shared">cr-input{display:inline-block;padding-inline-end:2em;--cr-input-width:8em}</style>

    <p>$i18n{securityKeysPINPrompt}</p>
    <cr-input id="pin" value="{{value_}}" min-length="[[minPinLength]]" max-length="255" spellcheck="false" on-input="onPinInput_" invalid="[[isNonEmpty_(error_)]]" label="$i18n{securityKeysPIN}" type$="[[inputType_(inputVisible_)]]" error-message="[[error_]]">
      <cr-icon-button slot="suffix" id="showButton" class$="[[showButtonClass_(inputVisible_)]]" title="[[showButtonTitle_(inputVisible_)]]" focus-row-control focus-type="showPassword" on-click="showButtonClick_"></cr-icon-button>
    </cr-input>
<!--_html_template_end_-->`;
}

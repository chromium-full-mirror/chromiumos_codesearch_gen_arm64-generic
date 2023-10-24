import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style>:host{cursor:auto;display:block;width:100%}cr-input{width:100%;--cr-input-width:50%}cr-input::part(row-container){justify-content:normal}</style>
    
    <cr-input id="input" value="{{value}}" error-message="$i18n{notValid}" placeholder="$i18n{enterCustomWebAddress}" maxlength="102400" on-change="onChange_" on-keydown="onKeydown_" on-input="validate_" invalid="{{invalid}}" input-tabindex="[[getTabindex_(canTab)]]" disabled="[[isDisabled_(disabled, pref.*)]]" spellcheck="false" on-keyup="stopKeyEventPropagation_" on-keypress="stopKeyEventPropagation_">
      <template is="dom-if" if="[[hasPrefPolicyIndicator(pref.*)]]">
        <cr-policy-pref-indicator pref="[[pref]]" icon-aria-label="[[label]]" slot="suffix">
        </cr-policy-pref-indicator>
      </template>
    </cr-input>
<!--_html_template_end_-->`;
}

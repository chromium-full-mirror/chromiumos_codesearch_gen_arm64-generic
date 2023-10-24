import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="print-preview-shared">:host{--cr-input-width:calc(4em + 16px)}#sectionTitle{align-self:baseline}cr-input{margin-inline-end:16px;min-height:var(--print-preview-row-height);overflow:hidden}.input-wrapper{align-items:center;display:flex}:host([input-valid]) cr-input{--cr-input-error-display:none}span[slot=suffix]{max-width:calc(100% - 5em);min-height:var(--print-preview-row-height);overflow:hidden;word-wrap:break-word}</style>
<print-preview-settings-section>
  <span slot="title" id="sectionTitle">[[inputLabel]]</span>
  <div slot="controls" id="controls">
    <span class="input-wrapper">
      <cr-input id="userValue" type="number" max="[[maxValue]]" min="[[minValue]]" data-timeout-delay="250" disabled$="[[getDisabled_(disabled)]]" on-keydown="onKeydown_" on-blur="onBlur_" aria-label="[[inputAriaLabel]]" error-message="[[errorMessage_]]" auto-validate>
        <span slot="suffix">
          <slot name="opt-inside-content"></slot>
        </span>
      </cr-input>
    </span>
  </div>
</print-preview-settings-section>
<!--_html_template_end_-->`;
}

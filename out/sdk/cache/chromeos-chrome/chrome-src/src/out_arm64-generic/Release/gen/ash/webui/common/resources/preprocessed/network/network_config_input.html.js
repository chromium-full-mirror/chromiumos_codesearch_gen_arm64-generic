import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="network-shared">
  #container {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  cr-input {
    width: 100%;
  }

  cr-policy-network-indicator-mojo {
    --cr-tooltip-icon-margin-start: var(--cr-controlled-by-spacing);
  }
</style>

<div id="container">
  <cr-input label="[[label]]" value="{{value}}"
      hidden="[[hidden]]" readonly="[[readonly]]"
      disabled="[[getDisabled_(disabled, property)]]"
      invalid="[[invalid]]"
      on-keypress="onKeypress_">
  </cr-input>
  <cr-policy-network-indicator-mojo
      property="[[property]]" tooltip-position="left">
  </cr-policy-network-indicator>
</div>
<!--_html_template_end_-->`;
}
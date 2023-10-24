import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>#error-wrap{align-items:center;display:flex}#error-container{height:20px;margin-top:10px}#error-icon{--iron-icon-fill-color:var(--cros-icon-color-alert)}#error-message{color:var(--cros-text-color-alert);font-size:10px;margin-inline-start:5px}</style>
<div id="error-container" hidden="[[!errorText]]">
  <div id="error-wrap">
    <iron-icon id="error-icon" icon="cr:warning"></iron-icon>
    <div id="error-message">
      [[errorText]]
    </div>
  </div>
</div>
<!--_html_template_end_-->`;
}

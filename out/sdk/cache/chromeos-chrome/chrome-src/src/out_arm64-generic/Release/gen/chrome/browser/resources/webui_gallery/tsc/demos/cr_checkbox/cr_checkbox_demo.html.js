import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="demo"></style>
<h1>cr-checkbox</h1>
<div class="demos">
  <cr-checkbox checked="{{myValue_}}">Checkbox</cr-checkbox>
  <div>Above checkbox is checked? [[myValue_]]</div>

  <cr-checkbox checked="checked">Checkbox</cr-checkbox>
  <cr-checkbox checked="checked" class="label-first">
    Checkbox with the label showing first
  </cr-checkbox>
  <cr-checkbox disabled="disabled">Disabled checkbox</cr-checkbox>
  <cr-checkbox checked="checked" disabled="disabled">Disabled checked checkbox</cr-checkbox>
</div>
<!--_html_template_end_-->`;
}

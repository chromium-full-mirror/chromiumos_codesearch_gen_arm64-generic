import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="demo"></style>

<h1>cr-chip</h1>
<div class="demos">
  <cr-chip>
    <iron-icon icon="cr:print"></iron-icon>
    Action
  </cr-chip>

  <cr-chip chip-role="link">
    <iron-icon icon="cr:print"></iron-icon>
    Action Link
  </cr-chip>

  <cr-chip>
    <iron-icon icon="cr:add"></iron-icon>
    Filter
  </cr-chip>

  <cr-chip selected="selected">
    <iron-icon icon="cr:check"></iron-icon>
    Selected filter
  </cr-chip>

  <cr-chip disabled="disabled">
    <iron-icon icon="cr:clear"></iron-icon>
    Disabled filter
  </cr-chip>
</div>
<!--_html_template_end_-->`}
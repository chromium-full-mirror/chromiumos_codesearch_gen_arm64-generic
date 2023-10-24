import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style>:host{display:flex;font-family:'Courier New',monospace;gap:1rem;font-size:.72rem;--cell-border:1px solid rgb(181, 198, 222)}.button-cell,.name-cell,.value-cell{padding:8px 6px}.name-cell{border-inline-end:var(--cell-border);width:200px;min-width:200px;overflow-wrap:break-word}.button-cell{text-align:center;width:80px;min-width:80px}.value-cell{border-inline-start:var(--cell-border);overflow:auto}.value-cell span{text-overflow:ellipsis;white-space:pre-wrap}:host([collapsible_][collapsed]) .stat-value{display:none}.stat-name-link{color:inherit;text-decoration:none}.stat-name-link:hover{text-decoration:underline}</style>

<div class="name-cell" role="cell">
  <a class="stat-name-link" href="[[getHref_(log.statName)]]" target="_blank" name="[[log.statName]]">
    🔗 [[log.statName]]
  </a>
</div>
<div class="button-cell" role="cell">
  <button on-click="onButtonClick_" hidden="[[!collapsible_]]">
    [[getButtonText_(collapsed)]]
  </button>
</div>
<div class="value-cell" role="cell">
  <span class="stat-value">[[log.statValue]]</span>
</div>
<!--_html_template_end_-->`}
import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="shared-style">:host{--standard-border:1px solid black}#item{border-inline-end:var(--standard-border);border-inline-start:var(--standard-border);border-top:var(--standard-border)}#header{display:flex;padding:6px}#body{display:inline-block;margin:10px;padding:5px;text-align:start;white-space:pre-wrap;width:100%}#time{display:flex;font-size:10px;margin-bottom:4px;padding:6px}.request{background-color:#ffe6cc}.response{background-color:#ffc}#flex{flex:1}</style>
<div id="item">
  <div id="header">
    <span>
      [[rpcToString_(item.rpc)]]:[[directionToString_(item.direction)]]
    </span>
    <div id="flex"></div>
    <span id="time">[[formatTime(item.time)]]</span>
    <cr-expand-button id="expandContent" class="cr-row" expanded="{{contentExpanded_}}">
    </cr-expand-button>
  </div>
  <iron-collapse opened="[[contentExpanded_]]">
    <p id="body">[[item.body]]</p>
  </iron-collapse>
</div>
<!--_html_template_end_-->`}
import{getTrustedHTML}from"//resources/js/static_types.js";export function getTemplate(){return getTrustedHTML`<!--_html_template_start_--><style>:host(:not([hidden])){display:block}.row:not([hidden]){display:flex}.row>*{box-sizing:border-box;flex:0 0 10%;overflow:hidden;padding:12px;text-align:start;text-overflow:ellipsis;white-space:nowrap}.policy-table{margin-bottom:5px;margin-top:17px;position:relative;width:100%}.policy-table .main{border:1px solid var(--table-border);border-radius:var(--element-border-radius)}.policy-precedence-data{border-top:1px solid var(--table-border)}.level,.messages,.name,.scope,.source,.value{border-inline-end:1px solid var(--table-border)}.name,.value{flex:0 0 25%}.row.header{background-color:var(--table-header);border-bottom:1px solid var(--table-border);border-radius:var(--element-border-radius) var(--element-border-radius) 0 0}.value.row .value{font-family:monospace}.no-policy:not([hidden]){display:flex;justify-content:center;padding:12px}a{color:var(--link-color);cursor:pointer;text-decoration:underline}.toggle{cursor:pointer}</style>
<div class="policy-table" role="table" aria-labelledby="policy-header">
  <h3 class="header" id="policy-header"></h3>
  <p class="id"></p>
  <div class="main">
    <div class="header row" role="row">
      <div class="name" role="columnheader">$i18n{headerName}</div>
      <div class="value" role="columnheader">$i18n{headerValue}</div>
      <div class="source" role="columnheader">$i18n{headerSource}</div>
      <div class="scope" role="columnheader">$i18n{headerScope}</div>
      <div class="level" role="columnheader">$i18n{headerLevel}</div>
      <div class="messages" role="columnheader">$i18n{headerStatus}</div>
      <div class="toggle" role="columnheader"></div>
    </div>
    <div class="no-policy">$i18n{noPoliciesSet}</div>
  </div>
</div>
<!--_html_template_end_-->`}
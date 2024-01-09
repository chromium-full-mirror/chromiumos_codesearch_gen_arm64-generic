import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style>#generic-object{display:inline-block;text-align:start;width:100%}#time{font-size:10px;padding:5px;position:absolute;right:0}#item{padding:6px}</style>
<div id="item">
  <span id="generic-object">[[item.message]]</span>
  <span id="time">[[formatTime_(item.time)]]</span>
</div>
<!--_html_template_end_-->`}
import { getTrustedHTML } from '//resources/js/static_types.js';
export function getTemplate() {
    return getTrustedHTML `<!--_html_template_start_--><style>:host(:not([hidden])){display:block}.row:not([hidden]){display:flex}.row>*{box-sizing:border-box;flex:0 0 10%;overflow:hidden;padding:12px;text-align:start;text-overflow:ellipsis;white-space:nowrap}.name{border-inline-end:1px solid var(--table-border);flex:0 0 25%}.value{flex:0 0 25%}.precedence.row:hover{background-color:var(--element-hover)}.precedence.row .value{flex-grow:1;max-height:200px;overflow:auto;overflow-wrap:break-word;text-overflow:unset;white-space:pre-wrap}.precedence.row .name{text-align:end}</style>
<div class="precedence row" role="row">
  <div class="name" role="rowheader">$i18n{labelPrecedence}</div>
  <div class="value" role="cell"></div>
</div>
<!--_html_template_end_-->`;
}

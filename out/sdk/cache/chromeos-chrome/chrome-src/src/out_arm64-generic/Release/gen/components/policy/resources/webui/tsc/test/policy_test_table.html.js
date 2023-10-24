import { getTrustedHTML } from '//resources/js/static_types.js';
export function getTemplate() {
    return getTrustedHTML `<!--_html_template_start_--><style>.table{width:100%}button{font-size:125%;font-weight:700;padding:5px;margin-top:5px;border:1px solid rgba(0,0,0,.06);width:100%}button:hover{filter:brightness(90%)}button:active{filter:brightness(85%)}@media only screen and (min-width:711px){.table{display:table;border:1px solid rgba(0,0,0,.06)}header{display:table-row;background-color:#f0f0f0;font-size:100%;font-weight:700}.cell{display:table-cell;padding:7px}#name-header{border-right:1px solid rgba(0,0,0,.06)}}@media only screen and (max-width:710px){header{display:none}.cell{display:block;border:none;padding:none}}</style>
<div class="table" role="table">
  <header role="row">
    <div class="cell" id="name-header">$i18n{testTableName}</div>
    <div class="cell">$i18n{testTableValue}</div>
    <div class="cell">$i18n{testTablePreset}</div>
    <div class="cell">$i18n{testTableSource}</div>
    <div class="cell">$i18n{testTableScope}</div>
    <div class="cell">$i18n{testTableLevel}</div>
    <div class="cell"></div>
  </header>
  <policy-test-row></policy-test-row>
</div>
<button id="add-policy-btn">+</button>
<!--_html_template_end_-->`;
}

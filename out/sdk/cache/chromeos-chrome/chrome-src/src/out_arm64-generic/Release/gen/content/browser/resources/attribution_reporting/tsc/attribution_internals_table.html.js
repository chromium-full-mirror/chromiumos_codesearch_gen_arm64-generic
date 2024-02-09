import { getTrustedHTML } from '//resources/js/static_types.js';
export function getTemplate() {
    return getTrustedHTML `<!--_html_template_start_--><style>:host{background-color:#fff;border-color:rgba(0,0,0,.12);border-radius:4px;border-style:solid;border-width:1px;display:block;overflow-x:scroll}table{border:0;border-collapse:collapse;height:1px}tbody tr{border-top-color:rgba(0,0,0,.12);border-top-style:solid;border-top-width:1px}thead tr{border:0}td,th{padding-inline:16px}th[aria-sort]{padding:0}th[aria-sort] button{background:0 0;border:none;color:inherit;cursor:pointer;font:inherit;height:100%;outline:0;padding-inline:16px;height:100%;width:100%}th[aria-sort] button:hover{background:rgba(0,0,0,.12)}th[aria-sort=none] button::after{content:'⬍'}th[aria-sort=ascending] button::after{content:'⬆'}th[aria-sort=descending] button::after{content:'⬇'}li,ul{list-style:none;margin:0;padding:0}.send-error{background-color:#fac7c0}.debug-url{color:#4287f5;font-weight:700}.number{font-variant-numeric:tabular-nums;text-align:right}</style>
<table>
  <thead>
    <tr></tr>
  </thead>
  <tbody></tbody>
</table>
<!--_html_template_end_-->`;
}

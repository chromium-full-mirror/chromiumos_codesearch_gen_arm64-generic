import { getTrustedHTML } from '//resources/js/static_types.js';
export function getTemplate() {
    return getTrustedHTML `<!--_html_template_start_--><style>.tabs{background-color:#f1f1f1;border:1px solid #ccc;overflow:hidden}.tabs button{background-color:inherit;border:none;cursor:pointer;float:left;outline:0;padding:14px 16px;transition:.3s}.tabs button:hover{background-color:#ddd}.tabs button.active{background-color:#ccc}.tabcontent{border:1px solid #ccc;border-top:none;padding:6px 12px}.hidden{display:none}</style>


<div class="tabs">
</div>
<div class="content">
</div>
<p id="no-connectors-message" class="hidden">
  There are currently no displayable connectors.
</p><!--_html_template_end_-->`;
}

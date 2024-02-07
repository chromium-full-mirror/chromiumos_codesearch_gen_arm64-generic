import{getTrustedHTML}from"//resources/js/static_types.js";export function getTemplate(){return getTrustedHTML`<!--_html_template_start_--><style>.bold{font-weight:700}div~div{margin-top:5px}#managed-identities{display:flex}#managed-identities>div{margin:10px;padding:5px;flex-shrink:1;border:gray 1px solid}</style>
<h2>Managed Client Certificate</h2>
<div>
  Enabled Policy Levels: <span id="policy-enabled-levels" class="bold"></span>
</div>
<div>
  Managed Identities:
  
  <div id="managed-identities"></div>
</div><!--_html_template_end_-->`}
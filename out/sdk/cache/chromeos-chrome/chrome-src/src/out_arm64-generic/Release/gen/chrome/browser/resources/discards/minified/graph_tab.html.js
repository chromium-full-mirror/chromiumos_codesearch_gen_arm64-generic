import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style>.links line{stroke:#999;stroke-opacity:.6;stroke-width:1}.dashed-links line{marker-start:url(#arrowToSource);stroke:#999;stroke-dasharray:3;stroke-opacity:.6;stroke-width:1}#arrowToSource{fill:#999;stroke:#999}.nodes circle{stroke:#000;stroke-width:1.5px}.nodes circle.pinned{stroke:red}.dead image{display:none}.separator{font:italic 13px sans-serif;user-select:none}div.tooltip{background:#b0c4de;border:0;border-radius:8px;padding:2px;position:absolute;text-align:center}tr{font:10px sans-serif}tr.heading>td{font-weight:700;text-align:center}tr.value>td:nth-child(1){text-align:end}tr.value>td:nth-child(2){text-align:start}tr.value.collapsed{display:none}</style>
<div id="toolTips" width="100%" height="100%" on-request-node-descriptions="onRequestNodeDescriptions_">
</div>
<svg id="graphBody" width="100%" height="100%">
  <defs>
    <marker id="arrowToSource" viewBox="0 -5 10 10" refX="-12" refY="0" markerWidth="9" markerHeight="6" orient="auto">
      <path d="M15,-7 L0,0 L15,7">
    </path></marker>
  </defs>
</svg>
<!--_html_template_end_-->`}
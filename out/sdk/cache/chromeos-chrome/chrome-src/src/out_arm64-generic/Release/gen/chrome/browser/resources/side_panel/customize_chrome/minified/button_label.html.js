import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="cr-hidden-style">:host{display:block}#label{color:var(--cr-primary-text-color)}#labelDescription{color:var(--cr-secondary-text-color)}:host-context([chrome-refresh-2023]) #labelDescription{font-weight:400;margin-block-start:4px}</style>
<div id="label">[[label]]</div>
<div id="labelDescription" hidden="[[!labelDescription]]">
  [[labelDescription]]
</div>
<!--_html_template_end_-->`}
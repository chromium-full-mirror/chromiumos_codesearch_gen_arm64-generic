import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style>cr-radio-group{width:100%}</style>
<cr-radio-group selected="[[selected]]" on-selected-changed="onSelectedChanged_" aria-label$="[[groupAriaLabel]]" selectable-elements="[[selectableElements]]">
  <slot></slot>
</cr-radio-group>
<!--_html_template_end_-->`}
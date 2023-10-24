import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{display:block;overflow-x:hidden;overflow-y:auto;position:relative}:host-context([expanded-list=true]){padding-bottom:16px}</style>
<div id="container">
  <iron-selector id="selector" on-keydown="onKeyDown_" on-iron-select="onSelectedChanged_" selectable="[[selectableSelector_()]]" selected-class="selected" on-selected-item-changed="onSelectedItemChanged_">
    <slot></slot>
  </iron-selector>
</div>
<!--_html_template_end_-->`;
}

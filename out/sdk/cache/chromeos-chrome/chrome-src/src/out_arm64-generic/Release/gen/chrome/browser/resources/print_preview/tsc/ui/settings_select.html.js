import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="print-preview-shared md-select">select.md-select{margin:2px;--md-select-width:calc(100% - 4px)}</style>
<select class="md-select" disabled$="[[disabled]]" aria-label$="[[ariaLabel]]" value="{{selectedValue::change}}">
  <template is="dom-repeat" items="[[capability.option]]">
    <option selected="[[isSelected_(item, selectedValue)]]" value="[[getValue_(item)]]">
      [[getDisplayName_(item)]]
    </option>
  </template>
</select>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style></style>
<div>
  <template is="dom-if" if="[[shouldShowTemplates_(tab_)]]">
    <sea-pen-templates></sea-pen-templates>
  </template>
  <template is="dom-if" if="[[shouldShowImages_(tab_)]]">
    <sea-pen-images></sea-pen-images>
  </template>
</div>
<!--_html_template_end_-->`;
}

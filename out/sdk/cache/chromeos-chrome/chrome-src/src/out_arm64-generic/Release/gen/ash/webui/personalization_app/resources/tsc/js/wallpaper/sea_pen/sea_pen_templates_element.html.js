import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="wallpaper common">:host{overflow:hidden}iron-list{width:100%}</style>
<iron-list id="grid" items="[[seaPenTemplates_]]" as="template" grid aria-setsize$="[[seaPenTemplates_.length]]" role="listbox">
  <template>
    <wallpaper-grid-item class="sea-pen-template" index="[[index]]" data-sea-pen aria-posinset$="[[getAriaIndex_(index)]]" on-wallpaper-grid-item-selected="onTemplateSelected_" primary-text="[[template.text]]" role="option" selected="[[isTemplateSelected_(template, selected_)]]" src="[[template.preview]]" tabindex$="[[tabIndex]]">
    </wallpaper-grid-item>
  </template>
</iron-list>
<!--_html_template_end_-->`;
}

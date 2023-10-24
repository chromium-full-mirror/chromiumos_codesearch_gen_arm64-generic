import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="wallpaper common">:host{overflow:hidden}#main{height:100%;overflow-y:auto;width:100%}</style>
<main id="main" aria-label="$i18n{myImagesLabel}" tabindex="-1">
  <iron-list items="[[imagesToDisplay_]]" grid role="listbox" aria-setsize$="[[imagesToDisplay_.length]]">
    <template>
      <wallpaper-grid-item aria-label$="[[getAriaLabel_(item, imageDataLoading_)]]" aria-posinset$="[[getAriaIndex_(index)]]" data-id$="[[getImageDataId_(item)]]" disabled="[[isImageLoading_(item, imageDataLoading_)]]" index="[[index]]" on-wallpaper-grid-item-selected="onImageSelected_" role="option" selected="[[isImageSelected_(item, currentSelected_, pendingSelected_)]]" src="[[getImageData_(item, imageData_, imageDataLoading_)]]" tabindex$="[[tabIndex]]">
      </wallpaper-grid-item>
    </template>
  </iron-list>
</main>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="wallpaper common">:host{overflow:hidden}iron-list,iron-scroll-threshold{width:100%}</style>
<iron-scroll-threshold id="gridScrollThreshold" on-lower-threshold="onGridScrollThresholdReached_" scroll-target="document">
  <iron-list id="grid" items="[[album_]]" as="photo" grid scroll-target="document" aria-setsize$="[[album_.length]]" role="listbox">
    <template>
      <wallpaper-grid-item aria-label$="[[getPhotoAriaLabel_(photo)]]" aria-posinset$="[[getPhotoAriaIndex_(index)]]" class="photo" disabled="[[isPhotoPlaceholder_(photo)]]" index="[[index]]" is-google-photos on-wallpaper-grid-item-selected="onPhotoSelected_" role="option" selected="[[isPhotoSelected_(photo, currentSelected_, pendingSelected_)]]" src="[[photo.url]]" tabindex$="[[tabIndex]]">
      </wallpaper-grid-item>
    </template>
  </iron-list>
</iron-scroll-threshold>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="wallpaper common">:host{overflow:hidden}iron-list,iron-scroll-threshold{width:100%}</style>
<iron-scroll-threshold id="gridScrollThreshold" scroll-target="document" on-lower-threshold="onGridScrollThresholdReached_">
  <iron-list id="grid" items="[[albumsForDisplay_]]" as="album" grid scroll-target="document" aria-setsize$="[[albumsForDisplay_.length]]" role="list">
    <template>
      <wallpaper-grid-item aria-label$="[[getAlbumAriaLabel_(album)]]" aria-posinset$="[[getAlbumAriaIndex_(index)]]" class="album" index="[[index]]" is-google-photos on-wallpaper-grid-item-selected="onAlbumSelected_" primary-text="[[album.title]]" role="listitem" secondary-text="[[getSecondaryText_(album)]]" src="[[album.preview]]" tabindex$="[[tabIndex]]">
      </wallpaper-grid-item>
    </template>
  </iron-list>
</iron-scroll-threshold>
<!--_html_template_end_-->`;
}

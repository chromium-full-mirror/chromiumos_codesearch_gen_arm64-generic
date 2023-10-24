import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="wallpaper common">:host{overflow:hidden}iron-list{width:100%}wallpaper-grid-item[data-is-video][aria-selected=true]::part(item){cursor:default}</style>
<iron-list aria-setsize$="[[albumsForDisplay_.length]]" as="album" grid id="grid" items="[[albumsForDisplay_]]" role="listbox">
  <template>
    
    <wallpaper-grid-item aria-label$="[[album.title]]" aria-posinset$="[[getAriaIndex_(index)]]" class$="[[getAlbumItemClass_(album, albums)]]" data-is-video$="[[isVideo_(topicSource)]]" index="[[index]]" is-google-photos="[[isGooglePhotos_(topicSource)]]" on-wallpaper-grid-item-selected="onAlbumSelected_" primary-text="[[album.title]]" role="option" secondary-text="[[getSecondaryText_(album, topicSource)]]" selected="[[isAlbumSelected_(album, albums)]]" src="[[album.url]]" tabindex$="[[tabIndex]]">
    </wallpaper-grid-item>
  </template>
</iron-list>
<!--_html_template_end_-->`;
}

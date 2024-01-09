import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="common">#wallpaperContainer{display:grid;grid-template-areas:'leftspacertop    selected   rightspacertop   ' 'leftspacerbottom imagegrid  rightspacerbottom';grid-template-columns:minmax(10px,1fr) minmax(568px,920px) minmax(10px,1fr);grid-template-rows:172px minmax(0,1fr);height:100%;min-height:var(--personalization-app-subpage-container-min-height);position:relative;width:100%}wallpaper-selected{background-color:var(--cros-bg-color);grid-area:selected;position:sticky;top:56px;z-index:1}google-photos-collection,local-images,wallpaper-collections,wallpaper-images{grid-area:imagegrid;padding:10px 0;background-color:var(--cros-bg-color)}div[class$=spacertop]{position:sticky;top:56px;z-index:1}:host-context(body.jelly-enabled) wallpaper-selected{background-color:var(--cros-sys-app_base_shaded)}:host-context(body.jelly-enabled) wallpaper-collections,google-photos-collection,local-images,wallpaper-images{background-color:var(--cros-bg-color)}</style>
<div id="wallpaperContainer">
  
  <div class="leftspacertop"></div>
  <div class="leftspacerbottom"></div>
  <wallpaper-selected path="[[path]]" collection-id="[[queryParams.id]]" google-photos-album-id="[[queryParams.googlePhotosAlbumId]]" is-google-photos-album-shared="[[isGooglePhotosAlbumShared_]]">
  </wallpaper-selected>
  
  <wallpaper-collections hidden="[[!shouldShowCollections_(path)]]">
  </wallpaper-collections>
  <template is="dom-if" if="[[shouldShowCollectionImages_(path)]]" restamp>
    <wallpaper-images collection-id="[[queryParams.id]]"></wallpaper-images>
  </template>
  <template is="dom-if" if="[[shouldShowGooglePhotosCollection_(path)]]" restamp>
    <google-photos-collection path="[[path]]" album-id="[[queryParams.googlePhotosAlbumId]]">
    </google-photos-collection>
  </template>
  <template is="dom-if" if="[[shouldShowLocalCollection_(path)]]" restamp>
    <local-images></local-images>
  </template>
  
  <div class="rightspacertop"></div>
  <div class="rightspacerbottom"></div>
  <wallpaper-fullscreen></wallpaper-fullscreen>
</div>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><template is="dom-if" if="[[shouldShowWallpaperSelectedElement_(path, templateId)]]">
  <wallpaper-selected path="[[path]]" collection-id="[[collectionId]]" google-photos-album-id="[[googlePhotosAlbumId]]" is-google-photos-album-shared="[[isGooglePhotosAlbumShared]]">
  </wallpaper-selected>
</template>
<template is="dom-if" if="[[shouldShowInputQuery_(path, templateId)]]">
  <sea-pen-input-query></sea-pen-input-query>
</template>
<template is="dom-if" if="[[shouldShowTemplateQuery_(path, templateId)]]">
  
  <sea-pen-template-query></sea-pen-template-query>
</template>
<!--_html_template_end_-->`;
}

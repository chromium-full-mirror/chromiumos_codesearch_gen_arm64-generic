import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="cr-shared-style">
  #image {
    height: 24px;
    width: 24px;
  }
</style>

<template is="dom-if" if="[[!hasDefaultImage_(device.*)]]">
  <iron-icon id="deviceTypeIcon" icon="bluetooth:[[getIcon_(device.*)]]">
  </iron-icon>
</template>
<template is="dom-if" if="[[hasDefaultImage_(device.*)]]">
  <img id="image" src="[[getDefaultImageSrc_(device.*)]]" alt="Default device image">
</template><!--_html_template_end_-->`;
}
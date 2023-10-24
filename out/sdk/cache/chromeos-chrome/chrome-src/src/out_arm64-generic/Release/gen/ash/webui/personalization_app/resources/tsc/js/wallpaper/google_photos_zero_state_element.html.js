import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="wallpaper common">:host{align-items:center;display:flex;flex-direction:column;justify-content:center;overflow:hidden}localized-link{color:var(--cros-text-color-secondary);font:var(--cros-body-1-font);max-width:236px;text-align:center}img{margin-bottom:16px;width:160px}iron-icon[icon='personalization-illo:no-google-photos']{--iron-icon-width:400px;--iron-icon-height:100%;top:-10px}:host-context(body.jelly-enabled) #zeroStateImage,:host-context(body:not(.jelly-enabled)) #zeroStateImageJelly{display:none}</style>
<iron-media-query query="(prefers-color-scheme: dark)" query-matches="{{isDarkModeActive_}}">
</iron-media-query>
<template is="dom-if" if="[[getMessageLabel_(tab)]]">
  <img id="zeroStateImage" src="[[getImageSource_(isDarkModeActive_)]]" aria-hidden="true">
  <iron-icon id="zeroStateImageJelly" icon="personalization-illo:no-google-photos"></iron-icon>
  <localized-link id="message" localized-string="[[getMessage_(tab)]]"></localized-link>
</template>
<!--_html_template_end_-->`;
}

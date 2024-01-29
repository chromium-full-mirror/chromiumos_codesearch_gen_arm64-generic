import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style>
  :host {
    display: block;
    contain: strict;
    position: relative;
    overflow: hidden;
  }

  :host, canvas {
    height: 100%;
    touch-action: none;
    user-select: none;
    width: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
  }
</style>
<iron-media-query query="(prefers-color-scheme: dark)"
      query-matches="{{isDarkModeActive}}">
<slot></slot>
<!--_html_template_end_-->`;
}
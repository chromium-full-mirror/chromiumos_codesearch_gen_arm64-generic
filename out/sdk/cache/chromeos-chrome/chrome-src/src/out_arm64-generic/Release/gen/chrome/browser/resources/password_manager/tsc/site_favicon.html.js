import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style">:host{--site-favicon-height:16px;--site-favicon-width:16px;overflow:hidden}#downloadedFavicon,#favicon{background-size:contain;height:var(--site-favicon-height);width:var(--site-favicon-width)}#downloadedFavicon{display:block}</style>
<div id="favicon" style="background-image:[[getBackgroundImage_(domain) ]]" hidden="[[showDownloadedIcon_]]">
</div>
<img is="cr-auto-img" id="downloadedFavicon" hidden="[[!showDownloadedIcon_]]" on-load="onLoadSuccess_" on-error="onLoadError_" auto-src="[[url]]">
<!--_html_template_end_-->`;
}

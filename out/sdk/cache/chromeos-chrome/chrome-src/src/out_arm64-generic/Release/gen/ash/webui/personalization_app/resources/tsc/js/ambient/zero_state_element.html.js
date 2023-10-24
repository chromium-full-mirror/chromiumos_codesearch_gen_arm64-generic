import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="wallpaper common">:host{align-items:center;display:flex;flex-direction:column;justify-content:center;margin:34px 0;overflow:hidden}div{color:var(--cros-text-color-secondary);font:var(--cros-body-1-font);max-width:236px;text-align:center}img{width:260px}</style>

<iron-media-query query="(prefers-color-scheme: dark)" query-matches="{{isDarkModeActive_}}">
</iron-media-query>
<img src="[[getImageSource_(isDarkModeActive_)]]" aria-hidden="true">
<div>$i18n{ambientModeZeroStateMessage}</div>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{--cr-realbox-min-width:75%;--cr-realbox-width:100%;font-size:14.6px}:host([can-show-secondary-side][has-secondary-side]){--cr-realbox-secondary-side-display:block}</style>
<cr-realbox-dropdown id="matches" result="[[result_]]" can-show-secondary-side="[[canShowSecondarySide]]" has-secondary-side="{{hasSecondarySide}}" on-dom-change="onResultRepaint_">
</cr-realbox-dropdown>
<!--_html_template_end_-->`;
}

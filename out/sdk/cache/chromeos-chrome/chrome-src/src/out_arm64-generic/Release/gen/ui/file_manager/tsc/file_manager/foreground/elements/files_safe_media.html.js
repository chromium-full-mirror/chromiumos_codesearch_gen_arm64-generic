import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->

<style>#content{height:100%;width:100%}#content.audio{height:54px}iframe{border:0;display:inline-block;height:100%;width:100%}</style>
<div id="content" class$="[[type]]"></div>
<!--_html_template_end_-->`;
}

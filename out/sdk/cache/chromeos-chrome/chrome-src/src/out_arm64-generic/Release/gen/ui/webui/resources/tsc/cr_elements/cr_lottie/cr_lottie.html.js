import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style>canvas{height:100%;width:100%}</style>
    <canvas id="canvas" hidden="[[hidden]]"></canvas>
<!--_html_template_end_-->`;
}

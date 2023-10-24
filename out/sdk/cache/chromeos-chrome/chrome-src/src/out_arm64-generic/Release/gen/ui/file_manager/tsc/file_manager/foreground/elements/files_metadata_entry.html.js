import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->
<style>div{margin:0}#box{box-sizing:border-box;color:var(--cros-sys-on_surface);display:flex;font:var(--cros-body-2-font);margin:10px 0;min-height:14px;padding-inline:32px 16px;width:320px}#box[hidden]{display:none}#key{margin-inline-end:24px;overflow-wrap:break-word;vertical-align:bottom;width:88px}#value{overflow-wrap:break-word;vertical-align:bottom;width:160px}#value[loading]::after{animation:ellipsis 1s steps(4,end) .1s infinite;content:'…';display:inline-block;overflow:hidden;transform:scale(2.5) translate(0,1px);transform-origin:left bottom;vertical-align:bottom;width:0}#value span{display:inline-block;overflow-wrap:anywhere}@keyframes ellipsis{to{width:.93em}}</style>
<div id="box" hidden="[[!value]]">
  <div id="key">[[key]]</div>
  <div id="value" loading$="{{loading}}">
    <div id="valueContainer" hidden="[[loading]]"></div>
  </div>
</div>
<!--_html_template_end_-->`;
}

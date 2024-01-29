import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">#container{align-items:center;display:flex;width:100%}#icon{height:32px;margin-inline-end:20px;width:32px}</style>
<div id="container">
  <img id="icon" src="[[iconSource]]" aria-hidden="true">
  <div id="nameAndPermission">
    <div id="serviceName">[[name]]</div>
    <div id="permissionState" class="secondary">[[permissionState]]</div>
  </div>
</div>
<!--_html_template_end_-->`;
}

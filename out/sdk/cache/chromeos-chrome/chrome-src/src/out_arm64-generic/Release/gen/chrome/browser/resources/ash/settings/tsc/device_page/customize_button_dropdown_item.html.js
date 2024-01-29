import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="md-select settings-shared input-device-settings-shared">:host([selected]) #container{background-color:var(--cros-highlight-color-focus)}#container{align-items:center;display:flex;height:36px;padding:0 16px}#container:focus,#container:hover{outline:0;background-color:var(--cros-highlight-color-hover)}</style>
<div id="container" hidden="[[option.hidden]]" tabindex="-1" class="option-item" on-click="onDropdownItemSelected_">
  [[option.name]]
</div>
<!--_html_template_end_-->`;
}

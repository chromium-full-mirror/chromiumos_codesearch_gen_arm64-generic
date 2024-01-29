import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="shared-style">:host{align-items:center;display:grid;grid-template-columns:1fr auto;line-height:normal}cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-size:20px;--cr-icon-button-margin-start:0;--cr-icon-button-margin-end:0}</style>

<span class="text-elide">
  <slot></slot>
</span>
<cr-icon-button iron-icon="cr:help-outline" id="helpButton" title="$i18n{help}" on-click="onHelpClick_" dir="ltr">
</cr-icon-button>
<!--_html_template_end_-->`;
}

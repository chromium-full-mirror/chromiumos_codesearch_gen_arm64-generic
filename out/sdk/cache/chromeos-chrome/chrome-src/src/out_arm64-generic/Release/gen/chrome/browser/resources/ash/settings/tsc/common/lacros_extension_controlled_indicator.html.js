import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cros-color-overrides">:host{align-items:center;display:flex;margin-inline-start:36px;min-height:var(--cr-section-min-height)}img{margin-inline-end:16px}iron-icon[icon='cr:open-in-new']{fill:var(--text-color);height:var(--cr-icon-size);width:var(--cr-icon-size)}#disable{margin-inline-start:8px}:host>span{flex:1;margin-inline-end:8px}</style>
<img role="presentation" src="chrome://resources/images/extension.svg" width="20" height="20">
<span>[[getLabel_(extensionName)]]</span>
<cr-button id="manage" on-click="onManageClick_">
  $i18n{manage}
  <iron-icon icon="cr:open-in-new" slot="suffix-icon"></iron-icon>
</cr-button>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style cr-actionable-row-style">:host{padding-inline-start:4px}#labelWrapper{flex:1;padding-inline-start:16px}#label{font-size:.875rem;padding-bottom:4px}cr-icon-button{--cr-icon-button-icon-size:24px;margin:2px}</style>
<picture>
  <source srcset="[[darkImgSrc]]" media="(prefers-color-scheme: dark)">
  <img alt="" src="[[lightImgSrc]]">
</picture>
<div id="labelWrapper" class="cr-padded-text">
  <div id="label" aria-hidden="true">[[label]]</div>
  <div id="subLabel" class="cr-secondary-text" aria-hidden="true">
    [[subLabel]]
  </div>
</div>
<cr-icon-button iron-icon="cr:open-in-new" role="link" aria-describedby="subLabel" aria-labelledby="label" aria-roledescription$="$i18n{subpageArrowRoleDescription}">
</cr-icon-button>
<!--_html_template_end_-->`;
}

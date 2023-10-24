import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="common">:host{overflow-y:hidden;--background-gradient-0:linear-gradient(0deg,
        rgba(var(--google-grey-100-rgb), 1) 0,
        rgba(var(--google-grey-100-rgb), 0) 8px);--background-gradient-180:linear-gradient(180deg,
        rgba(var(--google-grey-100-rgb), 1) 0,
        rgba(var(--google-grey-100-rgb), 0) 8px)}</style>
<div class="template-container">
  <div class="content-container">
    <div class="main" scrollable>
      <slot name="main"></slot>
    </div>
  </div>
  <div class="footer" hidden$="[[!showButtonFooter]]">
    <slot name="buttons"></slot>
  </div>
</div>
<!--_html_template_end_-->`;
}

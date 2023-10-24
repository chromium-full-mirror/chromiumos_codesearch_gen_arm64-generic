import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{--cr-grid-gap:0px;--cr-column-width:auto;--cr-grid-width:fit-content}#grid{display:grid;grid-gap:var(--cr-grid-gap);grid-template-columns:repeat(var(--cr-grid-columns),var(--cr-column-width));width:var(--cr-grid-width)}::slotted(*){align-self:center;justify-self:center}</style>
<div id="grid" on-keydown="onKeyDown_">
  <slot id="items"></slot>
</div>
<!--_html_template_end_-->`;
}

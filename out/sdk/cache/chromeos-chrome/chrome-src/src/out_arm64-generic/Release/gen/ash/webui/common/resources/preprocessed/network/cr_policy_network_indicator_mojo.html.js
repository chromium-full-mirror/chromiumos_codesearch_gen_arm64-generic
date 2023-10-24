import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="cr-hidden-style">
  /* CSS variable for controlling the margin of the icon outside the
    * indicator element (i.e. in the element including the indicator). */
  :host {
    --cr-tooltip-icon-margin-start: 0;
  }

  cr-tooltip-icon {
    margin-inline-start: var(--cr-tooltip-icon-margin-start);
  }
</style>
<cr-tooltip-icon hidden$="[[!indicatorVisible]]"
    tooltip-text="[[indicatorTooltip_]]" icon-class="[[indicatorIcon]]"
    tooltip-position="[[tooltipPosition]]">
</cr-tooltip-icon>
<!--_html_template_end_-->`;
}
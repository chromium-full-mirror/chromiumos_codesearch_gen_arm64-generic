import{html}from"//resources/lit/v3_0/lit.rollup.js";export function getHtml(){return html`<!--_html_template_start_--><div id="label" aria-hidden="true"><slot></slot></div>
<cr-icon-button id="icon" aria-labelledby="label" ?disabled="${this.disabled}" aria-expanded="${this.ariaExpanded_}" tabindex="${this.tabIndex}" part="icon" iron-icon="${this.icon_}">
</cr-icon-button>
<!--_html_template_end_-->`}
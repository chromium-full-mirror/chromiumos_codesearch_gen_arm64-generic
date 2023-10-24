import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><iron-pages id="animatedPages" attr-for-selected="route-path" on-iron-select="onIronSelect_">
  <slot></slot>
</iron-pages>
<!--_html_template_end_-->`;
}

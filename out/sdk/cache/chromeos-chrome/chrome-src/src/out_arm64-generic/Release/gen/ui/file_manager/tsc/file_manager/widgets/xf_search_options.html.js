import { getTrustedHTML } from '//resources/js/static_types.js';
export function getTemplate() {
    return getTrustedHTML `<!--_html_template_start_--><style>
  :host([hidden]) {
    display: none !important;
  }

  :host {
    display: flex;
    flex-direction: row;
    margin: 12px 20px;
  }
</style>

<xf-select id="location-selector" icon="select-location" menuAlignment="start">
</xf-select>
<xf-select id="recency-selector" icon="select-time" menuAlignment="start">
</xf-select>
<xf-select id="type-selector" icon="select-filetype" menuAlignment="start">
</xf-select>
<!--_html_template_end_-->`;
}

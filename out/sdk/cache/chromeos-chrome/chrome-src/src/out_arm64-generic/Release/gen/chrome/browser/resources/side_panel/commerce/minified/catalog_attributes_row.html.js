import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="cr-icons cr-hidden-style">:host{display:flex}#attributesRow{flex-direction:row;display:flex;max-width:100%}.attributes{overflow:hidden;margin-right:4px;text-overflow:ellipsis;white-space:nowrap}.link{color:var(--cr-link-color);cursor:pointer;flex-shrink:0}iron-icon{--icon-size:14px;fill:var(--cr-link-color);border-radius:0;margin-left:4px;height:var(--icon-size);width:var(--icon-size)}</style>

<div id="attributesRow">
  <div hidden="[[!priceInsightsInfo.hasMultipleCatalogs]]" class="attributes">
    [[priceInsightsInfo.catalogAttributes]]
  </div>
  <a href="#" hidden="[[!priceInsightsInfo.jackpot.url.length]]" class="link" on-click="openJackpot_">
    <span>$i18n{buyOptions}</span>
    <iron-icon icon="cr:open-in-new"></iron-icon>
  </a>
</div><!--_html_template_end_-->`}
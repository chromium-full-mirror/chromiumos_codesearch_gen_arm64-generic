import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="cr-shared-style iron-flex">#pageBody{height:282px;margin-top:-20px;overflow:hidden}#illustration{height:216px;width:448px;align-self:center}</style>
<base-page>
  <div slot="page-body" id="pageBody">
    <localized-link id="shouldSkipDiscovery" localized-string="[[i18nAdvanced('profileDiscoveryConsentMessageWithLink')]]" on-link-clicked="shouldSkipDiscoveryClicked_">
    </localized-link>
    <iron-icon id="illustration" icon="cellular-setup-illo:network-setup">
    </iron-icon>
  </div>
</base-page>
<!--_html_template_end_-->`}
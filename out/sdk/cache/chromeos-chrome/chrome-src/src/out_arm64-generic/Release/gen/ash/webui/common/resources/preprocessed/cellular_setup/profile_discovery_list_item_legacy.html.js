import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="iron-flex iron-positioning">#details{align-items:center;display:flex;flex:auto;min-height:var(--cr-section-two-line-min-height)}#profileImage{margin-inline-end:16px}#profileTitleLabel{color:var(--cros-text-color-primary)}.icon{margin-inline-end:8px;padding-inline-end:var(--cr-section-padding)}#checkmark{--iron-icon-fill-color:var(--cros-icon-color-prominent)}paper-spinner-lite{height:16px;vertical-align:middle;width:16px}</style>
<div class="two-line no-padding" selectable>
  <div class="flex layout horizontal center link-wrapper">
    <div id="details">
      <iron-media-query query="(prefers-color-scheme: dark)" query-matches="{{isDarkModeActive_}}">
      </iron-media-query>
      
      <div class="flex settings-box-text">
        <div id="profileTitleLabel">
          [[getProfileName_(profileProperties_)]]
        </div>
      </div>
    </div>
    <div class="icon" hidden$="[[!selected]]">
      <iron-icon id="checkmark" icon="cellular-setup:checked" tabindex="-1" hidden$="[[showLoadingIndicator]]">
      </iron-icon>
      <paper-spinner-lite active hidden$="[[!showLoadingIndicator]]">
      </paper-spinner-lite>
    </div>
  </div>
</div>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>#body{display:flex}.tonal-button{margin-inline-end:8px}#icon-wrapper,iron-icon{height:var(--cr-icon-size);width:var(--cr-icon-size);color:var(--google-red-700)}@media (prefers-color-scheme:dark){#icon-wrapper,iron-icon{color:var(--google-red-300)}}#icon-wrapper{margin-inline-end:8px}#body-text{color:var(--cr-primary-text-color)}#file-name{font-weight:700}</style>
<cr-dialog show-on-attach id="dialog">
  <div slot="title">$i18n{warningBypassDialogTitle}</div>
  <div slot="body" id="body">
    <div id="icon-wrapper" role="img" aria-label="$i18n{accessibleLabelDangerous}">
      <iron-icon icon="downloads:dangerous"></iron-icon>
    </div>
    <div id="body-text">
      <div id="file-name">[[fileName]]</div>
      <div id="danger-description">$i18n{warningBypassDialogDescription}</div>
      <div id="learn-more-link">
        
        <a href="$i18n{blockedLearnMoreUrl}" target="_blank" rel="noopener">
          $i18n{warningBypassDialogLearnMoreLink}
        </a>
      </div>
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="tonal-button" on-click="onDownloadDangerousClick_" id="download-dangerous-button">
      $i18n{controlKeepDangerous}
    </cr-button>
    
    <cr-button class="action-button" on-click="onCancelClick_" id="cancel-button">
      $i18n{warningBypassDialogCancel}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

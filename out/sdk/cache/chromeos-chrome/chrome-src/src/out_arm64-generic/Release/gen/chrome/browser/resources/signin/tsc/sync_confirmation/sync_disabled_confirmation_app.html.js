import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="signin-shared">.container{width:100%}.details{padding:0 24px}#syncDisabledDetails{line-height:20px;margin-bottom:8px;margin-top:16px;padding:0 24px}</style>

<div class="container">
  <div class="top-title-bar" consent-description>
    $i18n{syncDisabledConfirmationTitle}
  </div>
  <div class="details" id="syncDisabledDetails">
    <div class="body text" consent-description>
      $i18n{syncDisabledConfirmationDetails}
    </div>
  </div>
  <div class="action-container">
    <cr-button class="action-button" id="confirmButton" consent-confirmation on-click="onConfirm_">
      $i18n{syncDisabledConfirmationConfirmLabel}
    </cr-button>
    <cr-button id="undoButton" on-click="onUndo_" hidden="[[signoutDisallowed_]]">
      $i18n{syncDisabledConfirmationUndoLabel}
    </cr-button>
  </div>
</div>
<!--_html_template_end_-->`;
}

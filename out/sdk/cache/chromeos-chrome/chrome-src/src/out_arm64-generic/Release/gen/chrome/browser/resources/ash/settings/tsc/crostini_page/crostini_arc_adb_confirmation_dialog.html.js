import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title" hidden="[[!isEnabling_(action)]]">
    $i18n{crostiniArcAdbConfirmationTitleEnable}
  </div>
  <div slot="title" hidden="[[!isDisabling_(action)]]">
    $i18n{crostiniArcAdbConfirmationTitleDisable}
  </div>
  <div slot="body" hidden="[[!isEnabling_(action)]]">
    $i18n{crostiniArcAdbConfirmationMessageEnable}
  </div>
  <div slot="body" hidden="[[!isDisabling_(action)]]">
    $i18n{crostiniArcAdbConfirmationMessageDisable}
  </div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button id="continue" class="action-button" on-click="onRestartClick_">
      $i18n{crostiniArcAdbRestartButton}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

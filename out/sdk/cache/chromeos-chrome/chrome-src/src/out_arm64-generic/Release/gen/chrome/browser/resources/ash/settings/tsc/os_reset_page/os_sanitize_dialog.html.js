import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">:host{--cr-dialog-width:400px}</style>
<cr-dialog id="dialog" close-text="$i18n{close}" ignore-enter-key>
  <div slot="title">$i18n{sanitizeDialogTitle}</div>
  <div slot="body">
    $i18n{sanitizeDescription}

    <div id="sanitizeContainer">
      <localized-link localized-string="$i18n{sanitizeDialogExplanation}" link-url="$i18nRaw{sanitizeLearnMoreUrl}">
      </localized-link>
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onAbortSanitize" id="cancel">$i18n{cancel}
    </cr-button>
    <cr-button class="action-button" id="sanitizeButton" on-click="onPerformSanitize">
      $i18n{sanitizeDialogButton}
    </cr-button>
  </div>
  <div slot="footer">
    <cr-checkbox id="sendSettings" checked="checked">
      $i18nRaw{sanitizeFeedback}
    </cr-checkbox>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

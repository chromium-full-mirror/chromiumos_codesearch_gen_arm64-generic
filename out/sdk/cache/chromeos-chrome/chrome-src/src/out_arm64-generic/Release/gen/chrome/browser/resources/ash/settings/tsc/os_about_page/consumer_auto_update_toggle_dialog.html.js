import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">#warningSelector>:not(.iron-selected){display:none}</style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">$i18n{aboutConsumerAutoUpdateToggleDialogTitle}</div>
  <div slot="body">$i18n{aboutConsumerAutoUpdateToggleDialogDescription}</div>
  <div slot="button-container">
    <cr-button id="turnOffButton" class="cancel-button" on-click="onTurnOffClick_">
      $i18n{aboutConsumerAutoUpdateToggleTurnOffButton}
    </cr-button>
    <cr-button id="keepUpdatesButton" class="action-button" on-click="onKeepUpdatesClick_">
      $i18n{aboutConsumerAutoUpdateToggleKeepUpdatesButton}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

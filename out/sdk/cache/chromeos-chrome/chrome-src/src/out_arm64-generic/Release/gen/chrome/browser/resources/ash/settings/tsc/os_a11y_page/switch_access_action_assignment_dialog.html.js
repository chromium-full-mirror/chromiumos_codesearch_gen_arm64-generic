import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared">cr-dialog::part(dialog){width:420px}</style>

<cr-dialog id="switchAccessActionAssignmentDialog" show-on-attach>
  <div slot="title">[[dialogTitle_]]</div>
  <div slot="body">
    <settings-switch-access-action-assignment-pane id="switchAccessActionAssignmentPane" action="[[action]]" context="{{AssignmentContext.DIALOG}}">
    </settings-switch-access-action-assignment-pane>
  </div>
  <div id="button-container" slot="button-container">
    <cr-button class="exit-button" on-click="onExitClick_" id="exit">
      $i18n{switchAccessDialogExit}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

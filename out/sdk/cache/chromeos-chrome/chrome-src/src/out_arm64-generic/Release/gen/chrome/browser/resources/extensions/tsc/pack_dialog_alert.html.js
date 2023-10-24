import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style">.body{white-space:pre-wrap;word-break:break-word}</style>

<cr-dialog id="dialog" close-text="$i18n{close}">
  <div class="title" slot="title">[[title_]]</div>
  
  <div class="body" slot="body">[[model.message]]</div>
  <div class="button-container" slot="button-container">
    <cr-button class$="[[getCancelButtonClass_(confirmLabel_)]]" on-click="onCancelClick_" hidden="[[!cancelLabel_]]">
      [[cancelLabel_]]
    </cr-button>
    <cr-button class="action-button" on-click="onConfirmClick_" hidden="[[!confirmLabel_]]">
      [[confirmLabel_]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

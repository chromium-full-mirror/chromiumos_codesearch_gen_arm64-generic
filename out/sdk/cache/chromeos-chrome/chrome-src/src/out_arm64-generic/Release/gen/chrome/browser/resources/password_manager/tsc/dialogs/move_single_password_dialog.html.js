import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="shared-style">#avatar{border-radius:50%;height:16px;margin-inline-end:10px;width:16px}div[slot=body]{max-height:60vh}</style>
<cr-dialog id="dialog">
  <div id="title" slot="title" class="dialog-title">
    $i18n{moveSinglePasswordTitle}
  </div>
  <div id="body" slot="body">
    <div id="description">$i18n{moveSinglePasswordDescription}</div>
  </div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="onCancel_" autofocus>
      $i18n{cancel}
    </cr-button>
    <cr-button id="move" class="action-button" on-click="onMoveButtonClick_" disabled="[[!selectedPasswordIds_.length]]">
        $i18n{moveSinglePasswordButton}
    </cr-button>
  </div>
  <div slot="footer" class="flex-centered">
    <img id="avatar" src="[[avatarImage]]">
    <div id="accountEmail" class="label">[[accountEmail]]</div>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

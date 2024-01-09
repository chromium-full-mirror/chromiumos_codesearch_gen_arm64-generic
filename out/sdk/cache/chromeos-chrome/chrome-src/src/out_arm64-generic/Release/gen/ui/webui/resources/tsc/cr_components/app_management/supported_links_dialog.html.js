import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="app-management-shared-style">#dialogBody{display:flex;flex-direction:column;height:350px;overflow-y:auto}.list-item{border-bottom:var(--cr-separator-line);align-items:center;display:flex;min-height:36px;padding:0}iron-list{user-select:none}</style>
<cr-dialog id="dialog" close-text="[[i18n('close')]]" show-on-attach show-close-button>
  <div slot="title">[[i18n('appManagementIntentSettingsDialogTitle')]]</div>
  <div id="dialogBody" slot="body" scrollable>
    <iron-list id="list" scroll-target="dialogBody" items="[[app.supportedLinks]]">
      <template>
        <div class="list-item">
          [[item]]
        </div>
      </template>
    </iron-list>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

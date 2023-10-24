import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style">div[slot=body] ul{background-color:var(--paper-red-50);margin:0;padding-bottom:10px;padding-inline-end:10px;padding-top:10px}@media (prefers-color-scheme:dark){div[slot=body] ul{background-color:rgba(0,0,0,.3);color:var(--error-color)}}</style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">$i18n{installWarnings}</div>
  <div slot="body">
    <ul>
      <template is="dom-repeat" items="[[installWarnings]]">
        <li>[[item]]</li>
      </template>
    </ul>
  </div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onOkClick_">
      $i18n{ok}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

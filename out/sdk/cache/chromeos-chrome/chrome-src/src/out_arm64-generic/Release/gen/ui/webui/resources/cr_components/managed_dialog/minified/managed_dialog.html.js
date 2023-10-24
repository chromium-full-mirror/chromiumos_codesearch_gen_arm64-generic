import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style>iron-icon{--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size);padding-inline-end:10px}cr-dialog::part(body-container){padding-inline-start:35px}</style>

<cr-dialog id="dialog" close-text="[[i18n('close')]]" show-on-attach>
  <div slot="title">
    <iron-icon icon="cr:domain" role="img" aria-label="[[i18n('controlledSettingPolicy')]]">
    </iron-icon>
    [[title]]
  </div>
  <div slot="body">[[body]]</div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onOkClick_">
      [[i18n('ok')]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
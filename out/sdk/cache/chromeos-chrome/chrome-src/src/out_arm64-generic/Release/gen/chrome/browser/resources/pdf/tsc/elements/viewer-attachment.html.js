import { html } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style">#item{align-items:flex-start;display:flex;padding:5px 28px;position:relative;transition:background-color .1s ease-out}#item:hover{background-color:rgba(255,255,255,.25)}#title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:host(:not([save-allowed_])) #title{opacity:var(--cr-disabled-opacity)}#download{--cr-icon-button-fill-color:var(--primary-text-color);--cr-icon-button-icon-size:16px;--cr-icon-button-size:28px;margin:0;position:absolute;right:0;top:calc((100% - var(--cr-icon-button-size))/ 2)}#download:focus-visible{outline:auto -webkit-focus-ring-color}</style>
<div id="item">
  <span id="title">[[attachment.name]]</span>
  <cr-icon-button id="download" tabindex="0" hidden$="[[!saveAllowed_]]" title="$i18n{tooltipDownloadAttachment}" iron-icon="cr:file-download" on-click="onDownloadClick_">
  </cr-icon-button>
</div>
<!--_html_template_end_-->`;
}

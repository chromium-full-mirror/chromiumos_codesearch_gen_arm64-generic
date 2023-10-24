import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>#icon{height:32px;margin-inline-end:10px;width:32px}#icon-and-name-wrapper{align-items:center;display:flex}ExtensionOptions{display:block;height:100%;overflow:hidden}cr-dialog::part(dialog){height:var(--dialog-height);opacity:var(--dialog-opacity,0);transition:opacity .1s ease .1s;width:var(--dialog-width)}cr-dialog::part(wrapper){height:100%;max-height:initial;overflow:hidden}cr-dialog #body{height:100%;padding:0}cr-dialog{--cr-dialog-body-border-bottom:none;--cr-dialog-body-border-top:none;--scroll-border:none}cr-dialog::part(body-container){height:100%;min-height:initial}</style>

<cr-dialog id="dialog" close-text="$i18n{close}" on-close="onClose_" show-close-button>
  <div slot="title">
    <div id="icon-and-name-wrapper">
      <img id="icon" src="[[data_.iconUrl]]" alt="">
      <span>[[data_.name]]</span>
    </div>
  </div>
  <div slot="body" id="body">
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

import{getTrustedHTML}from"//resources/js/static_types.js";export function getTemplate(){return getTrustedHTML`<!--_html_template_start_--><style>div[slot=button-container]{display:flex;justify-content:flex-end;padding-block-end:24px;padding-block-start:32px;padding-inline:24px}.install-button::before{-webkit-mask-position:center;background-color:currentColor;content:' ';display:inline-block;height:20px;margin-inline-end:8px;width:20px}.install::before{-webkit-mask-image:url(chrome://resources/images/add.svg);-webkit-mask-size:100%}.installing::before{-webkit-mask-image:url(chrome://resources/images/throbber_medium.svg);-webkit-mask-size:100%}.installed::before{-webkit-mask-image:url(chrome://resources/images/open_in_new.svg);-webkit-mask-size:100%}</style>

<cr-dialog id="dialog">
  
  <div slot="title">Install app</div>
  <div slot="body">
    
    <p id="name"></p>
    <p id="url"></p>
    <p id="description"></p>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button">
      $i18n{cancel}
    </cr-button>
    <cr-button class="install-button action-button install">
      $i18n{install}
    </cr-button>
  </div>
</cr-dialog><!--_html_template_end_-->`}
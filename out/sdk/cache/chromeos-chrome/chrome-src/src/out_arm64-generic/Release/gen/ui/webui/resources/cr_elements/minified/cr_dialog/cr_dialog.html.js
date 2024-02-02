import{html}from"//resources/lit/v3_0/lit.rollup.js";import{nothing}from"//resources/lit/v3_0/lit.rollup.js";export function getHtml(){return html`<!--_html_template_start_-->
<dialog id="dialog" @close="${this.onNativeDialogClose_}" @cancel="${this.onNativeDialogCancel_}" part="dialog" aria-labelledby="title" aria-description="${this.ariaDescriptionText||nothing}">

  <div id="content-wrapper" part="wrapper">
    <div class="top-container">
      <h2 id="title" class="title-container" tabindex="-1">
        <slot name="title"></slot>
      </h2>
      <cr-icon-button id="close" class="icon-clear" ?hidden="${!this.showCloseButton}" aria-label="${this.closeText||nothing}" @click="${this.cancel}" @keypress="${this.onCloseKeypress_}">
      </cr-icon-button>
    </div>
    <slot name="header"></slot>
    <div class="body-container" id="container" show-bottom-shadow part="body-container">
      <slot name="body"></slot>
    </div>
    <slot name="button-container"></slot>
    <slot name="footer"></slot>
  </div>
</dialog>
<!--_html_template_end_-->`}
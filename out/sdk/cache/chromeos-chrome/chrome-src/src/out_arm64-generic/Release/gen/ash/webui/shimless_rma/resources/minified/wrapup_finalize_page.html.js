import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="cr-shared-style shimless-rma-shared"></style>

<base-page>
  <div slot="left-pane">
    <h1 tabindex="-1">[[i18n('finalizePageTitleText')]]</h1>
    <div id="finalizationMessage" class="instructions">
      [[finalizationMessage]]
    </div>
  </div>
  <div slot="right-pane">
    <div class="illustration-wrapper" aria-hidden="true">
      <paper-spinner-lite active class="large-spinner">
      </paper-spinner-lite>
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`}
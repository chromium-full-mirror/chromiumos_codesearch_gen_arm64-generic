import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style shimless-rma-shared">.busy-icon{float:left}</style>

<base-page>
  <div slot="left-pane">
    <br> 
    <div class="splash-title">
      <h1 tabindex="-1">[[i18n('shimlessSplashTitle')]]</h1>
    </div>
    <div class="icon-message">
      <paper-spinner-lite id="busyIcon" class="small-icon" active></paper-spinner-lite>
      <span class="instructions">[[getSplashInstructionsText()]]</span>
    </div>
  </div>
  <div slot="right-pane">
    <div class="illustration-wrapper" aria-hidden="true">
      <img src="illustrations/repair_start.svg" alt="[[i18n('repairStartAltText')]]">
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`;
}

import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="cr-shared-style shimless-rma-shared"></style>

<base-page>
  <div slot="left-pane">
    <h1 tabindex="-1">[[getCalibrationTitleString(calibrationComplete)]]</h1>
  </div>
  <div slot="right-pane">
    <div class="illustration-wrapper" aria-hidden="true">
      <paper-spinner-lite active hidden$="[[calibrationComplete]]" class="large-spinner">
      </paper-spinner-lite>
      <img class="illustration" src="illustrations/success.svg" hidden$="[[!calibrationComplete]]" alt="[[i18n('successAltText')]]">
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`}
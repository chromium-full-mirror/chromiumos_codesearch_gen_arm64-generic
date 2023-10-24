import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="account-manager-shared">
  .main-image {
    height: 256px;
    width: 256px;
  }
</style>
<div class="content">
  <div class="main-container">
    <if expr="_google_chrome">
      <img class="google-logo" src="../googleg.svg" alt="">
    </if>
    <h1>[[errorTitle_]]</h1>
    <p>[[errorMessage_]]</p>
    <div class="image-container">
      <img hidden$="[[!imageUrl_]]" class="main-image" src="[[imageUrl_]]"
          alt="">
    </div>
  </div>
  <div class="button-container">
    <cr-button id="ok-button" class="action-button" on-click="closeDialog_">
      $i18n{okButton}
    </cr-button>
  </div>
</div>
<!--_html_template_end_-->`;
}
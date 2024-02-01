import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style>#pageBody{height:282px;margin-top:-20px;overflow:hidden}#animationContainer{display:flex;height:216px;margin-bottom:30px;margin-top:24px}cros-lottie-renderer{margin:auto}</style>

<base-page>
  <div slot="page-body" id="pageBody" class="layout vertical center-center">
    <span>[[i18n('verifyingActivationCode')]]</span>
    <div id="animationContainer">
      <cros-lottie-renderer id="spinner" asset-url="chrome://resources/ash/common/cellular_setup/spinner.json" autoplay dynamic aria-hidden>
      </cros-lottie-renderer>
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`}
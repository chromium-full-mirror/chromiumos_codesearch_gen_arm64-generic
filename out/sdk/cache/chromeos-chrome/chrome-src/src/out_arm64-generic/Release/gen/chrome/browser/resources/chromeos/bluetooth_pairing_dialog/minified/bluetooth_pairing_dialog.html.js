import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="cr-page-host-style cr-shared-style cros-color-overrides">#dialog{--cr-dialog-top-container-min-height:0}div[slot=body]{height:426px}</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="body">
    <bluetooth-pairing-ui on-finished="closeDialog_" pairing-device-address="[[deviceAddress_]]" should-omit-links="[[shouldOmitLinks_]]">
    </bluetooth-pairing-ui>
  </div>
</cr-dialog><!--_html_template_end_-->`}
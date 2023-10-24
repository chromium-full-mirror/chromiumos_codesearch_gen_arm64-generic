import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style>
   #code {
    font-size: 24px;
    margin-top: 40px;
  }

  #pageBody {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
<bluetooth-base-page
    on-pair="onPairClicked_"
    focus-default
    button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody">
    <div id="message" aria-live="polite">
      [[i18n('bluetoothConfirmCodeMessage')]]
    </div>
    <div id="code">[[code]]</div>
  </div>
</bluetooth-base-page><!--_html_template_end_-->`;
}
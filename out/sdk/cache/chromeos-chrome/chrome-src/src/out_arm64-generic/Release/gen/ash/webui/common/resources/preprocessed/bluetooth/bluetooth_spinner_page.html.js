import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style>
  #pageBody {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  paper-spinner-lite {
    height: 190px;
    width: 190px;
  }
</style>
<bluetooth-base-page  button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody">
    <paper-spinner-lite active>
    </paper-spinner-lite>
  </div>
</bluetooth-base-page>
<!--_html_template_end_-->`;
}
import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="multidevice-setup-shared cros-color-overrides">
  :host {
    display: flex;
    flex-direction: column;
  }

  #button-container {
    display: flex;
  }

  @media screen and (max-width: 767px) {
    #shadow {
      background: linear-gradient(0deg,
                                  rgba(var(--google-grey-100-rgb), 1) 0,
                                  rgba(var(--google-grey-100-rgb), 0) 8px);
      height: 8px;
      left: 0;
      position: absolute;
      right: 0;
      top: -8px;
    }
  }
</style>
<div id="shadow" hidden$="[[!shouldShowShadow]]"></div>
<div id="button-container">
  <cr-button id="backward"
      name="backward-button"
      class="cancel-button"
      on-click="onBackwardButtonClicked_"
      hidden$="[[!backwardButtonTextId]]">
    [[getButtonTextFromId_(backwardButtonTextId)]]
  </cr-button>
  <div class="flex"></div>
  <cr-button id="cancel"
      name="cancel-button"
      class="cancel-button"
      on-click="onCancelButtonClicked_"
      hidden$="[[!cancelButtonTextId]]">
      [[getButtonTextFromId_(cancelButtonTextId)]]
  </cr-button>
  <cr-button id="forward"
      name="forward-button"
      class="action-button"
      on-click="onForwardButtonClicked_"
      disabled="[[forwardButtonDisabled]]"
      hidden$="[[!forwardButtonTextId]]">
    [[getButtonTextFromId_(forwardButtonTextId)]]
  </cr-button>
</div>
<!--_html_template_end_-->`;
}
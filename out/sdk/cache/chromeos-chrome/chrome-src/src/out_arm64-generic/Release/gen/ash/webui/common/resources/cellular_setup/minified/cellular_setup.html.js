import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><iron-pages attr-for-selected="id" selected="[[currentPageName]]" selected-item="{{currentPage_}}">
  <template is="dom-if" if="[[shouldShowPsimFlow_(currentPageName)]]" restamp>
    <psim-flow-ui button-state="{{buttonState_}}" name-of-carrier-pending-setup="{{flowPsimBanner}}" delegate="[[delegate]]" id="psim-flow-ui" forward-button-label="{{forwardButtonLabel_}}">
    </psim-flow-ui>
  </template>
  <template is="dom-if" if="[[shouldShowEsimFlow_(currentPageName)]]" restamp>
    <esim-flow-ui button-state="{{buttonState_}}" delegate="[[delegate]]" id="esim-flow-ui" header="{{flowHeader}}" forward-button-label="{{forwardButtonLabel_}}">
    </esim-flow-ui>
  </template>
</iron-pages>
<button-bar id="buttonBar" button-state="[[buttonState_]]" forward-button-label="[[forwardButtonLabel_]]">
</button-bar>
<!--_html_template_end_-->`}
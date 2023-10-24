import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->
<style include="cros-color-overrides"></style>

<cr-view-manager id="viewManager">
  <nearby-confirmation-page id="[[Page.CONFIRMATION]]" slot="view" confirmation-manager="[[confirmationManager_]]" transfer-update-listener="[[transferUpdateListener_]]" share-target="[[selectedShareTarget_]]" payload-preview="[[payloadPreview_]]">
  </nearby-confirmation-page>
  <nearby-discovery-page id="[[Page.DISCOVERY]]" slot="view" confirmation-manager="{{confirmationManager_}}" transfer-update-listener="{{transferUpdateListener_}}" selected-share-target="{{selectedShareTarget_}}" payload-preview="{{payloadPreview_}}">
  </nearby-discovery-page>
  <nearby-onboarding-one-page id="[[Page.ONEPAGE_ONBOARDING]]" settings="{{settings}}" slot="view">
  </nearby-onboarding-one-page>
  <nearby-onboarding-page id="[[Page.ONBOARDING]]" settings="{{settings}}" slot="view">
  </nearby-onboarding-page>
  <nearby-visibility-page id="[[Page.VISIBILITY]]" settings="{{settings}}" slot="view">
  </nearby-visibility-page>
</cr-view-manager>
<!--_html_template_end_-->`;
}

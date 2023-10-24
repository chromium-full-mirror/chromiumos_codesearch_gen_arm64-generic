import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><template is="dom-if" if="[[shouldShowFeature_(pageContentData)]]" restamp>
  <settings-multidevice-feature-item id="smartLockItem" feature="[[MultiDeviceFeature.SMART_LOCK]]" page-content-data="[[pageContentData]]" is-feature-icon-hidden>
  </settings-multidevice-feature-item>
</template>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><template is="dom-repeat" items="[[touchpads]]" as="touchpad" index-as="index" restamp>
  <settings-per-device-touchpad-subsection touchpad="[[touchpad]]" touchpad-index="[[index]]" is-last-device="[[computeIsLastDevice(index, touchpads.length)]]">
  </settings-per-device-touchpad-subsection>
</template>
<!--_html_template_end_-->`;
}

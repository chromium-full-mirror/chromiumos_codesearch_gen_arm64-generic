import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><template is="dom-repeat" items="[[pointingSticks]]" as="pointingStick" index-as="index" restamp>
  <settings-per-device-pointing-stick-subsection pointing-stick="[[pointingStick]]" pointing-stick-index="[[index]]" is-last-device="[[computeIsLastDevice(index, pointingSticks.length)]]">
  </settings-per-device-pointing-stick-subsection>
</template>
<!--_html_template_end_-->`;
}

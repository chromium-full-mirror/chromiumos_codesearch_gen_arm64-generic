import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><template is="dom-repeat" items="[[mice]]" as="mouse" index-as="index" restamp>
  <settings-per-device-mouse-subsection mouse="[[mouse]]" mouse-policies="[[mousePolicies]]" mouse-index="[[index]]" is-last-device="[[computeIsLastDevice(index, mice.length)]]">
  </settings-per-device-mouse-subsection>
</template>
<!--_html_template_end_-->`;
}

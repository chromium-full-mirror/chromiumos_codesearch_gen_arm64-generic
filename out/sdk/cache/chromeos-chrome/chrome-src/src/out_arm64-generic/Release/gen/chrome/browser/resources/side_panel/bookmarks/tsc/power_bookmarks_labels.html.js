import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><template is="dom-repeat" items="[[labels]]">
  <cr-chip selected="[[item.active]]" disabled="[[disabled]]" on-click="onLabelClick">
    <iron-icon icon="[[getLabelIcon(item, item.active)]]"></iron-icon>
    [[item.label]]
  </cr-chip>
</template>
<!--_html_template_end_-->`;
}

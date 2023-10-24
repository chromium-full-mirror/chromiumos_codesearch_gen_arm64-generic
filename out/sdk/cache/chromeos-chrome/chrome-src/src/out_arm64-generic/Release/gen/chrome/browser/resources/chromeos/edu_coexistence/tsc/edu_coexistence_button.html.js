import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->
<style>cr-button{border:0;border-radius:20px}</style>
<cr-button class$="[[buttonClasses]]" on-click="onClick" disabled="[[disabled]]">
  <template is="dom-if" if="[[hasIconBeforeText(buttonType)]]">
    <iron-icon icon="[[getIcon(buttonType)]]"></iron-icon>
  </template>
  [[getDisplayName(buttonType)]]
</cr-button>
<!--_html_template_end_-->`;
}

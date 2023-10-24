import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="common"></style>

<edu-coexistence-template>
  <span slot="main">
    <supervised-user-error></supervised-user-error>
  </span>
  <span slot="buttons">
    <div class="footer">
      <div class="buttons-layout">
        <edu-coexistence-button button-type="action"></edu-coexistence-button>
      </div>
    </div>
  </span>

</edu-coexistence-template>
<!--_html_template_end_-->`;
}

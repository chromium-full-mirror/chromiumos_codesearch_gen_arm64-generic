import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style>
  .container {
    border: 1.5px solid rgb(175, 175, 175);
    border-radius: 10px;
    margin: 10px;
    padding: 5px;
  }

  .container-header {
    align-items: center;
    cursor: pointer;
    display: flex;
    min-height: 30px;
  }

  .container-name {
    flex: 1;
    font-size: 1rem;
  }
</style>

<div class="container">
  <div class="container-header" on-click="onClick_">
    <div class="container-name">[[label]]</div>
    <slot name="header"></slot>
    <iron-icon icon="[[getArrowIcon_(expanded)]]"></iron-icon>
  </div>
  <template is="dom-if" if="[[expanded]]">
    <slot></slot>
  </template>
</div>
<!--_html_template_end_-->`;
}
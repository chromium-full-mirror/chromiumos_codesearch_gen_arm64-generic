import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style">iron-collapse{--iron-collapse-transition-duration:300ms}</style>

<div>
  <cr-expand-button expanded="{{expanded}}">
    <div class="cr-secondary-text">
      {{title}}
    </div>
  </cr-expand-button>
  <iron-collapse id="collapse" opened="[[expanded]]">
    <slot></slot>
  </iron-collapse>
</div>
<!--_html_template_end_-->`;
}

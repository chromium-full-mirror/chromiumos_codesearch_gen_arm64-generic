import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared">#label{flex:1}site-favicon{margin-inline-end:12px}</style>
<div class="list-item" focus-row-container>
  <site-favicon hidden$="[[model.topic]]" url="[[model.site]]"></site-favicon>
  <div id="label">[[getDisplayString_(model)]]</div>
  <cr-button role="button" on-click="onInterestChanged_">
    [[getButtonLabel_(model.removed)]]
  </cr-button>
</div><!--_html_template_end_-->`;
}

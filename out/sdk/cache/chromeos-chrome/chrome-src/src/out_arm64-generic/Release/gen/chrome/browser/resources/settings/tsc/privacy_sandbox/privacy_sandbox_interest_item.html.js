import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared">.interest-item{min-height:auto;padding-block-end:16px;padding-block-start:16px}#label{flex:1}site-favicon{margin-inline-end:16px}</style>
<div class="list-item interest-item" focus-row-container>
  <site-favicon hidden$="[[interest.topic]]" url="[[interest.site]]">
  </site-favicon>
  <div id="label">[[getDisplayString_(interest)]]</div>
  <cr-button role="button" on-click="onInterestChanged_" aria-label$="[[getButtonAriaLabel_(interest.removed)]]">
    [[getButtonLabel_(interest.removed)]]
  </cr-button>
</div>
<!--_html_template_end_-->`;
}

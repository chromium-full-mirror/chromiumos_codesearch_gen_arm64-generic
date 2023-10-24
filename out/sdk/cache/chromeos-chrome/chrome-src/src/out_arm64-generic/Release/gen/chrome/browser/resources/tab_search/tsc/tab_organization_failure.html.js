import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="tab-organization-shared-style"></style>

<div class="tab-organization-text-container">
  <div class="tab-organization-header">[[getTitle_(error)]]</div>
  <div class="tab-organization-body">[[getBody_(error)]]</div>
</div>
<!--_html_template_end_-->`;
}

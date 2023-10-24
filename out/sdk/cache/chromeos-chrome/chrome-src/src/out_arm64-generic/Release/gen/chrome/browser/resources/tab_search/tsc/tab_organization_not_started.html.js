import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="tab-organization-shared-style">cr-button{align-self:flex-end;width:fit-content}</style>

<div class="tab-organization-container">
  <div class="tab-organization-text-container">
    <div class="tab-organization-header">$i18n{notStartedTitle}</div>
    <div class="tab-organization-body">$i18n{notStartedBody}</div>
  </div>
  <cr-button class="action-button" on-click="onOrganizeTabsClick_">
    $i18n{notStartedButton}
  </cr-button>
</div>
<!--_html_template_end_-->`;
}

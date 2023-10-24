import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="app-management-cros-shared-style settings-shared">.sub-app-row:last-of-type{border-bottom:none}</style>
<div class="permission-section-header">
  <div class="header-text">[[getListHeadingString_(parentApp)]]</div>
</div>
<div class="permission-list indented-permission-block">
  <div id="subAppList">
    <template is="dom-repeat" items="[[subApps]]" as="subApp">
      <app-management-app-item app="[[subApp]]" class="sub-app-row">
        <cr-icon-button slot="right-content" id$="app-subpage-button-[[subApp.id]]" class="subpage-arrow app-management-item-arrow" aria-label$="[[subApp.title]]" role="link" actionable>
        </cr-icon-button>
      </app-management-app-item>
    </template>
  </div>
</div><!--_html_template_end_-->`;
}

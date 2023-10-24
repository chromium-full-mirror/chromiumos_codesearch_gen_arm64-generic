import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="settings-shared">cr-link-row{--cr-icon-button-margin-start:20px}cr-link-row:first-of-type{border-top:none}</style>
    <template is="dom-repeat" items="[[categoryList]]">
      <cr-link-row class="hr two-line" data-route$="[[item.route]]" id="[[item.id]]" label="[[i18n(item.label)]]" on-click="onClick_" start-icon="[[item.icon]]" sub-label="[[item.subLabel]]" role-description="$i18n{subpageArrowRoleDescription}"></cr-link-row>
    </template>
<!--_html_template_end_-->`;
}

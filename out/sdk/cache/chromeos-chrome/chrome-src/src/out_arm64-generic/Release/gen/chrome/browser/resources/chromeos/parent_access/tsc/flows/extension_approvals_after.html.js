import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>extension-approvals-template::part(content){max-height:375px}</style>

<extension-approvals-template screen-title="[[i18n('extensionApprovalsAfterTitle', childDisplayName)]]">
</extension-approvals-template>
<!--_html_template_end_-->`;
}

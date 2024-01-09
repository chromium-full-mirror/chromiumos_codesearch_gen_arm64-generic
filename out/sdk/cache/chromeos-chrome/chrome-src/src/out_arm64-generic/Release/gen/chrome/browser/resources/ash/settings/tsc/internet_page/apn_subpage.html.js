import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<apn-list id="apnList" managed-cellular-properties="[[managedProperties_.typeProperties.cellular]]" guid="[[guid_]]" error-state="[[managedProperties_.errorState]]" portal-state="[[managedProperties_.portalState]]">
</apn-list><!--_html_template_end_-->`;
}

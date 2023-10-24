import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="common"></style>
<cr-view-manager id="viewManager" hidden$="[[isErrorShown]]">
   <edu-coexistence-ui id="edu-coexistence-ui" slot="view">
   </edu-coexistence-ui>
   <edu-coexistence-offline id="edu-coexistence-offline" slot="view">
   </edu-coexistence-offline>
   <edu-coexistence-error id="edu-coexistence-error" slot="view">
   </edu-coexistence-error>
   <arc-account-picker-app id="arc-account-picker" slot="view" use-two-column-layout="true" on-opened-new-window="closeDialog" on-add-account="showAddAccount">
   </arc-account-picker-app>
 </cr-view-manager>
<!--_html_template_end_-->`;
}

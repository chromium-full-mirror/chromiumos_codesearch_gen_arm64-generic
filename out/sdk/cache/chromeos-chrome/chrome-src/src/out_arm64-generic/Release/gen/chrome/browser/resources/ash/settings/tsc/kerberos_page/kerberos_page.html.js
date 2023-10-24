import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared iron-flex"></style>
<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="$i18n{kerberosPageTitle}">
      <cr-link-row id="kerberosAccountsSubpageTrigger" on-click="onKerberosAccountsClick_" label="$i18n{kerberosAccountsSubMenuLabel}" role-description="$i18n{subpageArrowRoleDescription}">
        <cr-policy-indicator indicator-type="userPolicy">
        </cr-policy-indicator>
      </cr-link-row>
    </settings-card>
  </div>

  <template is="dom-if" route-path="/kerberos/kerberosAccounts">
    <os-settings-subpage page-title="$i18n{kerberosAccountsPageTitle}">
      <settings-kerberos-accounts-subpage></settings-kerberos-accounts-subpage>
    </os-settings-subpage>
  </template>
</os-settings-animated-pages>
<!--_html_template_end_-->`;
}

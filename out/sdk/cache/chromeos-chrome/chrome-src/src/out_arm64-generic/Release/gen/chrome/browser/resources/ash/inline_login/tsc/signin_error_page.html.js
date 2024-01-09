import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="account-manager-shared">.image-container{margin-top:20px;height:350px}.secondary{color:var(--cr-secondary-text-color)}.error-outline-logo{--iron-icon-fill-color:var(--cros-icon-color-alert);width:48px;height:48px}</style>

<div class="main-container">
  <iron-icon class="error-outline-logo" icon="cr:error-outline" alt="Alert logo" aria-hidden="true">
  </iron-icon>
  <h1>$i18nRaw{accountManagerDialogSigninErrorTitle}</h1>
  <p class="secondary">$i18nRaw{accountManagerDialogSigninErrorBody}</p>
</div>
<!--_html_template_end_-->`;
}

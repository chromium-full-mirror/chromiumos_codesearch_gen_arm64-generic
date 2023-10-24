import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style settings-shared settings-page-styles iron-flex">:host{--about-page-image-space:10px}.info-sections{padding:var(--cr-section-vertical-padding) var(--cr-section-padding)}.info-section{margin-bottom:12px}.product-title{font-size:153.85%;font-weight:400;margin-bottom:auto;margin-top:auto}img{margin-inline-end:var(--about-page-image-space)}.icon-container{margin-inline-end:var(--about-page-image-space);min-width:32px;text-align:center}iron-icon[icon='settings:check-circle']{fill:var(--cr-checked-color)}iron-icon[icon='cr:error']{fill:var(--settings-error-color)}cr-button{white-space:nowrap}</style>
    <settings-section page-title="$i18n{aboutPageTitle}" section="about">
      <div class="cr-row two-line first">
        <img id="product-logo" on-click="onProductLogoClick_" srcset="chrome://theme/current-channel-logo@1x, chrome://theme/current-channel-logo@2x 2x" alt="$i18n{aboutProductLogoAlt}" role="presentation">
        <div class="product-title">$i18n{aboutProductTitle}</div>
      </div>
      <div class="cr-row two-line">
        

        <div class="flex cr-padded-text">

          <div class="secondary">$i18n{aboutBrowserVersion}</div>
        </div>

      </div>

      <cr-link-row class="hr" id="help" on-click="onHelpClick_" label="$i18n{aboutGetHelpUsingChrome}" external></cr-link-row>

      <cr-link-row class="hr" on-click="onManagementPageClick_" start-icon="[[managedByIcon_]]" label="$i18n{managementPage}" role-description="$i18n{subpageArrowRoleDescription}" hidden$="[[!isManaged_]]"></cr-link-row>
    </settings-section>

    <settings-section>
      <div class="info-sections">
        <div class="info-section">
          <div class="secondary">$i18n{aboutProductTitle}</div>
          <div class="secondary">$i18n{aboutProductCopyright}</div>
        </div>

        <div class="info-section">
          <div class="secondary">$i18nRaw{aboutProductLicense}</div>
        </div>


      </div>
    </settings-section>
<!--_html_template_end_-->`;
}

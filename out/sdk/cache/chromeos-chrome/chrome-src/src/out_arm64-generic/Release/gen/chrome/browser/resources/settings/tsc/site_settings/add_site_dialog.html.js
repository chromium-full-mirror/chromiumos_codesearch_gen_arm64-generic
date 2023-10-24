import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="settings-shared">#incognito{padding-bottom:10px}</style>
    <cr-dialog id="dialog" close-text="$i18n{close}">
      <div slot="title">$i18n{addSiteTitle}</div>
      <div slot="body">
        <cr-input id="site" label="$i18n{addSite}" placeholder="$i18n{addSiteExceptionPlaceholder}" value="{{site_}}" on-input="validate_" error-message="{{errorMessage_}}" spellcheck="false" autofocus></cr-input>
        <cr-checkbox id="incognito" hidden$="[[!showIncognitoSessionOnly_(hasIncognito,
                contentSetting)]]">
          $i18n{incognitoSiteOnly}
        </cr-checkbox>
        <cr-checkbox id="thirdParties" hidden$="[[shouldHideThirdPartyCookieCheckbox_(category,
                cookiesExceptionType)]]">
          $i18n{siteSettingsCookiesThirdPartyExceptionLabel}
        </cr-checkbox>
      </div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onCancelClick_">
          $i18n{cancel}
        </cr-button>
        <cr-button class="action-button" id="add" on-click="onSubmit_" disabled="disabled">
          $i18n{add}
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`;
}

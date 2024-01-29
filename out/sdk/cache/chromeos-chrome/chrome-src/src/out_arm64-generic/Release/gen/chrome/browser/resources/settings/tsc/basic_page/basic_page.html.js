import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style settings-page-styles cr-hidden-style iron-flex">:host([is-subpage-animating]){overflow:hidden}:host(:not([in-search-mode])) settings-section:not([active]){display:none}</style>
    <template is="dom-if" if="[[showBasicPage_(currentRoute_, inSearchMode)]]" restamp>
      <div id="basicPage">
        <template is="dom-if" if="[[showResetProfileBanner_]]" restamp>
          <settings-reset-profile-banner on-close="onResetProfileBannerClosed_">
          </settings-reset-profile-banner>
        </template>
        <template is="dom-if" if="[[showPage_(pageVisibility.people)]]" restamp>
          <settings-section page-title="$i18n{peoplePageTitle}" section="people">
            <settings-people-page prefs="{{prefs}}" page-visibility="[[pageVisibility]]">
            </settings-people-page>
          </settings-section>
        </template>
        <template is="dom-if" if="[[showExperimentalAdvancedPage_(pageVisibility.ai)]]" restamp>
          <settings-section page-title="$i18n{aiPageTitle}" section="ai">
            <settings-ai-page prefs="{{prefs}}"></settings-ai-page>
          </settings-section>
        </template>
        <template is="dom-if" if="[[showPage_(pageVisibility.autofill)]]" restamp>
          <settings-section page-title="$i18n{autofillPageTitle}" section="autofill">
            <settings-autofill-page prefs="{{prefs}}"></settings-autofill-page>
          </settings-section>
        </template>
        <settings-section id="privacyGuidePromoSection" page-title="" hidden$="[[!showPrivacyGuidePromo_]]" nest-under-section="privacy" no-search>
          <settings-privacy-guide-promo id="privacyGuidePromo" prefs="{{prefs}}">
          </settings-privacy-guide-promo>
        </settings-section>
        
        <template is="dom-if" if="[[showSafetyCheckPage_(pageVisibility.safetyCheck)]]" restamp>
          <settings-section page-title="$i18n{safetyCheckSectionTitle}" section="safetyCheck" nest-under-section="privacy" id="safetyCheckSettingsSection">
            <settings-safety-check-page prefs="{{prefs}}">
            </settings-safety-check-page>
          </settings-section>
        </template>
        
        <template is="dom-if" if="[[showSafetyHubEntryPointPage_(pageVisibility.safetyHub)]]" restamp>
          <settings-section page-title="$i18n{safetyHub}" section="safetyHubEntryPoint" nest-under-section="privacy" id="safetyHubEntryPointSection">
            <settings-safety-hub-entry-point></settings-safety-hub-entry-point>
          </settings-section>
        </template>
        <template is="dom-if" if="[[showPage_(pageVisibility.privacy)]]" restamp>
          <settings-section page-title="$i18n{privacyPageTitle}" section="privacy">
            <settings-privacy-page prefs="{{prefs}}" page-visibility="[[pageVisibility.privacy]]">
            </settings-privacy-page>
          </settings-section>
        </template>
        <template is="dom-if" if="[[showPerformancePage_(pageVisibility.performance)]]" restamp>
          <settings-section page-title="$i18n{memoryPageTitle}" section="performance" id="performanceSettingsSection">
            <settings-performance-page prefs="{{prefs}}">
            </settings-performance-page>
          </settings-section>
        </template>
        <template is="dom-if" if="[[showBatteryPage_(pageVisibility.performance)]]" restamp>
          <settings-section page-title="$i18n{batteryPageTitle}" section="battery" nest-under-section="performance" id="batterySettingsSection" hidden="[[!showBatterySettings_]]">
            <settings-battery-page prefs="{{prefs}}">
            </settings-battery-page>
          </settings-section>
        </template>
        <template is="dom-if" if="[[showSpeedPage_(pageVisibility.performance)]]" restamp>
          <settings-section page-title="$i18n{speedPageTitle}" section="speed" nest-under-section="performance" id="speedSettingsSection">
            <template is="dom-if" if="[[showSpeedPageV2_]]">
              <settings-speed-page prefs="{{prefs}}">
              </settings-speed-page>
            </template>
            <template is="dom-if" if="[[!showSpeedPageV2_]]">
              <settings-preloading-page prefs="{{prefs}}">
              </settings-preloading-page>
            </template>
          </settings-section>
        </template>
        <template is="dom-if" if="[[showPage_(pageVisibility.appearance)]]" restamp>
          <settings-section page-title="$i18n{appearancePageTitle}" section="appearance">
            <settings-appearance-page prefs="{{prefs}}" page-visibility="[[pageVisibility.appearance]]">
            </settings-appearance-page>
          </settings-section>
        </template>
        <settings-section page-title="$i18n{searchPageTitle}" section="search">
          <settings-search-page prefs="{{prefs}}"></settings-search-page>
        </settings-section>

        <template is="dom-if" if="[[showPage_(pageVisibility.onStartup)]]" restamp>
          <settings-section page-title="$i18n{onStartup}" section="onStartup">
            <settings-on-startup-page prefs="{{prefs}}">
            </settings-on-startup-page>
          </settings-section>
        </template>
      </div>
    </template>
    <template is="dom-if" if="[[showAdvancedSettings_(pageVisibility.advancedSettings)]]">
      <settings-idle-load id="advancedPageTemplate">
        <template>
          <div id="advancedPage">
            <template is="dom-if" if="[[showPage_(pageVisibility.languages)]]" restamp>

              <settings-section page-title="$i18n{languagesPageTitle}" section="languages">

                <cr-link-row id="openChromeOSLanguagesSettings" on-click="onOpenChromeOsLanguagesSettingsClick_" label="$i18n{openChromeOSLanguagesSettingsLabel}" external>
                </cr-link-row>


              </settings-section>
            </template>

            <template is="dom-if" if="[[showPage_(pageVisibility.downloads)]]" restamp>
              <settings-section page-title="$i18n{downloadsPageTitle}" section="downloads">
                <settings-downloads-page prefs="{{prefs}}">
                </settings-downloads-page>
              </settings-section>
            </template>
            <template is="dom-if" if="[[showPage_(pageVisibility.a11y)]]" restamp>
              <settings-section page-title="$i18n{a11yPageTitle}" section="a11y">
                <settings-a11y-page prefs="{{prefs}}" languages="{{languages}}" language-helper="{{languageHelper}}">
                </settings-a11y-page>
              </settings-section>
            </template>

            <template is="dom-if" if="[[showPage_(pageVisibility.reset)]]" restamp>
              <settings-section page-title="$i18n{resetPageTitle}" section="reset">
                <settings-reset-page prefs="{{prefs}}"></settings-reset-page>
              </settings-section>
            </template>

          </div>
        </template>
      </settings-idle-load>
    </template>
<!--_html_template_end_-->`;
}

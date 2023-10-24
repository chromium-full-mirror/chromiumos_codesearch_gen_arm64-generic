import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style settings-shared iron-flex">.sync-row{align-items:center;flex:auto}#profile-icon{background:center/cover no-repeat;border-radius:20px;flex-shrink:0;height:40px;width:40px}#sync-setup{--cr-secondary-text-color:var(--settings-error-color)}cr-link-row{--cr-link-row-icon-width:40px;border-top:var(--cr-separator-line)}.icon-container{display:flex;flex-shrink:0;justify-content:center;width:40px}#toast{left:0;z-index:1}:host-context([dir=rtl]) #toast{left:auto;right:0}settings-sync-account-control[showing-promo]::part(banner){border-top-left-radius:var(--cr-card-border-radius);border-top-right-radius:var(--cr-card-border-radius)}settings-sync-account-control[showing-promo]::part(title){font-size:1.1rem;line-height:1.625rem}</style>
    <settings-animated-pages id="pages" section="people" focus-config="[[focusConfig_]]">
      <div route-path="default">
        <template is="dom-if" if="[[shouldShowSyncAccountControl_(
            syncStatus.syncSystemEnabled)]]">
          <settings-sync-account-control sync-status="[[syncStatus]]" prefs="{{prefs}}" promo-label-with-account="$i18n{peopleSignInPrompt}" promo-label-with-no-account="$i18n{peopleSignInPrompt}" promo-secondary-label-with-account="$i18n{peopleSignInPromptSecondaryWithAccount}" promo-secondary-label-with-no-account="$i18n{peopleSignInPromptSecondaryWithNoAccount}">
          </settings-sync-account-control>
        </template>
        <template is="dom-if" if="[[!shouldShowSyncAccountControl_(
            syncStatus.syncSystemEnabled, signinAllowed_)]]" restamp>
          <div id="profile-row" class="cr-row first two-line" actionable$="[[isProfileActionable_]]" on-click="onProfileClick_">
            <template is="dom-if" if="[[syncStatus]]">
              <div id="profile-icon" style="background-image:[[getIconImageSet_(profileIconUrl_) ]]">
              </div>
              <div class="flex cr-row-gap cr-padded-text text-elide">
                <span id="profile-name">[[profileName_]]</span>


                <div class="secondary" hidden="[[!syncStatus.signedIn]]">
                  [[syncStatus.signedInUsername]]
                </div>

              </div>


              <cr-icon-button class="icon-external" id="profile-subpage-arrow" hidden="[[!isProfileActionable_]]" aria-label="$i18n{accountManagerSubMenuLabel}" aria-describedby="profile-name"></cr-icon-button>

            </template>
          </div>
        </template> 

        <cr-link-row id="sync-setup" label="$i18n{syncAndNonPersonalizedServices}" sub-label="[[getSyncAndGoogleServicesSubtext_(syncStatus)]]" on-click="onSyncClick_" role-description="$i18n{subpageArrowRoleDescription}">
        </cr-link-row>





      </div>
      <template is="dom-if" route-path="/syncSetup">
        <settings-subpage associated-control="[[$$('#sync-setup')]]" page-title="$i18n{syncPageTitle}" learn-more-url="$i18n{syncAndGoogleServicesLearnMoreURL}">
          <settings-sync-page sync-status="[[syncStatus]]" prefs="{{prefs}}" page-visibility="[[pageVisibility.privacy]]" focus-config="[[focusConfig_]]">
          </settings-sync-page>
        </settings-subpage>
      </template>

      <template is="dom-if" route-path="/syncSetup/advanced">
        <settings-subpage page-title="$i18n{syncAdvancedPageTitle}" associated-control="[[$$('#sync-setup')]]" learn-more-url="$i18n{syncAndGoogleServicesLearnMoreURL}">
          <settings-sync-controls sync-status="[[syncStatus]]">
          </settings-sync-controls>
        </settings-subpage>
      </template>

      <template is="dom-if" route-path="/syncSetup/pageContent">
        <settings-subpage page-title="$i18n{pageContentPageTitle}" associated-control="[[$$('#sync-setup')]]">
          <settings-page-content-page prefs="{{prefs}}">
          </settings-page-content-page>
        </settings-subpage>
      </template>


    </settings-animated-pages>

    <template is="dom-if" if="[[showSignoutDialog_]]" restamp>
      <settings-signout-dialog sync-status="[[syncStatus]]" on-close="onDisconnectDialogClosed_">
      </settings-signout-dialog>
    </template>

    <template is="dom-if" if="[[showImportDataDialog_]]" restamp>
      <settings-import-data-dialog prefs="{{prefs}}" on-close="onImportDataDialogClosed_">
      </settings-import-data-dialog>
    </template>
    <cr-toast duration="3000" id="toast">
      <span>$i18n{syncSettingsSavedToast}</span>
    </cr-toast>
<!--_html_template_end_-->`;
}

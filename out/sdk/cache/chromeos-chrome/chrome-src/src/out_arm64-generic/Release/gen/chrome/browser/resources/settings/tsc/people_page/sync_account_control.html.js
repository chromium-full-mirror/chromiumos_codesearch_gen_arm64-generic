import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style settings-shared">:host{--shown-avatar-size:40px;--sync-icon-border-size:2px;--sync-icon-size:16px}.account-icon{border-radius:20px;flex-shrink:0;height:var(--shown-avatar-size);width:var(--shown-avatar-size)}.account-icon.small{height:20px;width:20px}#menu .dropdown-item{padding:12px}#menu .dropdown-item span{margin-inline-start:8px}.flex{display:flex;flex:1;flex-direction:column}#avatar-container{height:var(--shown-avatar-size);position:relative}#sync-icon-container{align-items:center;background:var(--google-green-700);border:var(--sync-icon-border-size) solid #fff;border-radius:50%;display:flex;height:var(--sync-icon-size);position:absolute;right:-6px;top:calc(var(--shown-avatar-size) - var(--sync-icon-size) - var(--sync-icon-border-size));width:var(--sync-icon-size)}:host-context([dir=rtl]) #sync-icon-container{left:-6px;right:initial}@media (prefers-color-scheme:dark){#sync-icon-container{background:var(--google-green-300);border-color:var(--google-grey-900)}}#sync-icon-container.sync-problem{background:var(--settings-error-color)}#sync-icon-container.sync-paused{background:var(--google-blue-500)}@media (prefers-color-scheme:dark){#sync-icon-container.sync-paused{background:var(--google-blue-300)}}#sync-icon-container.sync-disabled{background:var(--google-grey-400)}@media (prefers-color-scheme:dark){#sync-icon-container.sync-disabled{background:var(--google-grey-500)}}#sync-icon-container iron-icon{fill:#fff;height:12px;margin:auto;width:12px}#signIn{min-width:100px}#banner{background:url(chrome://settings/images/sync_banner.svg) no-repeat;background-size:100% auto;display:none;padding-top:calc(120 / 680 * 100%)}@media (prefers-color-scheme:dark){#banner{background-image:url(chrome://settings/images/sync_banner_dark.svg)}}:host([showing-promo]) #banner{display:block}</style>
    
    <div id="banner" hidden="[[syncStatus.signedIn]]" part="banner"></div>
    <div class="cr-row first" id="promo-header" hidden="[[syncStatus.signedIn]]">
      <div class="flex cr-padded-text">
        <div id="promo-title" part="title">
          [[getLabel_(promoLabelWithAccount,
              promoLabelWithNoAccount, shownAccount_)]]
        </div>
        <div class="secondary">[[subLabel_]]</div>
      </div>
      <cr-button class="action-button cr-button-gap" on-click="onSigninClick_" id="signIn" disabled="[[shouldDisableSyncButton_(showSetupButtons_,
                  syncStatus.firstSetupInProgress,
                  prefs.signin.allowed_on_next_startup.value)]]" hidden="[[shouldShowAvatarRow_]]">
        $i18n{peopleSignIn}
      </cr-button>
    </div>
    <template is="dom-if" if="[[shouldShowAvatarRow_]]">
      <div class="cr-row first two-line" id="avatar-row">
        <div id="avatar-container">
          <img class="account-icon" alt="" src="[[getAccountImageSrc_(shownAccount_.avatarImage)]]">
          <div id="sync-icon-container" hidden="[[!syncStatus.signedIn]]" class$="[[getSyncIconStyle_(
                  syncStatus.hasError, syncStatus.statusAction,
                  syncStatus.disabled)]]">
            <iron-icon icon$="[[getSyncIcon_(
                syncStatus.hasError, syncStatus.statusAction,
                syncStatus.disabled)]]"></iron-icon>
          </div>
        </div>
        <div class="cr-row-gap cr-padded-text flex no-min-width" id="user-info">
          <div class="text-elide">
            [[getAvatarRowTitle_(shownAccount_.fullName,
                '$i18nPolymer{syncNotWorking}',
                '$i18nPolymer{syncPasswordsNotWorking}',
                '$i18nPolymer{syncPaused}',
                '$i18nPolymer{syncDisabled}', syncStatus.hasError,
                syncStatus.statusAction, syncStatus.disabled)]]
          </div>
          <div class="secondary text-elide">
            [[getAccountLabel_(
                '$i18nPolymer{syncingTo}', shownAccount_.email,
                syncStatus.hasError, syncStatus.signedIn,
                syncStatus.disabled, syncStatus.firstSetupInProgress)]]
          </div>
        </div>


        <cr-button id="sync-button" class="action-button cr-button-gap" hidden="[[syncStatus.signedIn]]" on-click="onSyncButtonClick_" disabled="[[shouldDisableSyncButton_(showSetupButtons_,
                    syncStatus.firstSetupInProgress,
                    prefs.signin.allowed_on_next_startup.value)]]">
          $i18n{peopleSignIn}
        </cr-button>
        <cr-button id="turn-off" class="cr-button-gap" hidden="[[!shouldShowTurnOffButton_(syncStatus.signedIn,
                syncStatus.domain, showSetupButtons_)]]" on-click="onTurnOffButtonClick_" disabled="[[syncStatus.firstSetupInProgress]]">
          $i18n{turnOffSync}
        </cr-button>
        <cr-button id="sync-error-button" class="action-button cr-button-gap" hidden="[[!shouldShowErrorActionButton_(syncStatus,
                showSetupButtons_)]]" on-click="onErrorButtonClick_" disabled="[[syncStatus.firstSetupInProgress]]">
          [[syncStatus.statusActionText]]
        </cr-button>
        <div id="setup-buttons" hidden="[[!showSetupButtons_]]" class="cr-button-gap">
          <cr-button on-click="onSetupCancel_">$i18n{cancel}</cr-button>
          <cr-button class="action-button cr-button-gap" on-click="onSetupConfirm_">
            $i18n{confirm}
          </cr-button>
        </div>
      </div>


    </template>
<!--_html_template_end_-->`;
}

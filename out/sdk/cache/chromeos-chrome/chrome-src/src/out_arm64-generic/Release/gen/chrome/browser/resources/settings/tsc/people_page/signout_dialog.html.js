import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style settings-shared iron-flex">.delete-profile-warning{padding-bottom:10px;padding-inline-end:var(--cr-section-padding);padding-inline-start:calc(var(--cr-section-padding) + 32px);padding-top:10px}#wideFooter{padding:0}#dialog-body{padding-bottom:2px}</style>

    <cr-dialog id="dialog" ignore-enter-key close-text="$i18n{close}">
      <div slot="title">$i18n{syncDisconnectTitle}</div>
      <div id="dialog-body" slot="body">
        <div inner-h-t-m-l="[[
            getDisconnectExplanationHtml_(syncStatus.domain)]]">
        </div>
      </div>
      <div slot="button-container">
        <cr-button id="disconnectCancel" class="cancel-button" on-click="onDisconnectCancel_">
          $i18n{cancel}
        </cr-button>
        <cr-button id="disconnectConfirm" class="action-button" hidden="[[isClearProfileConfirmButtonVisible_(syncStatus.domain)]]" on-click="onDisconnectConfirm_">
          $i18n{syncDisconnect}
        </cr-button>
        <cr-button id="disconnectManagedProfileConfirm" class="action-button" hidden="[[!isClearProfileConfirmButtonVisible_(syncStatus.domain)]]" on-click="onDisconnectConfirm_">
          $i18n{syncDisconnectConfirm}
        </cr-button>
      </div>

    </cr-dialog>
<!--_html_template_end_-->`;
}

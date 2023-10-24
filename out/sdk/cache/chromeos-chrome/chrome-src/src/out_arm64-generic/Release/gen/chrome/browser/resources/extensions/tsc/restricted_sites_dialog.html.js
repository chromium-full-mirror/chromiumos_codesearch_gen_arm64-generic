import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style shared-style"></style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="title">[[getDialogTitle_(firstRestrictedSite)]]</div>
  <div class="matching-restricted-sites-warning" slot="body">
    <iron-icon icon="cr:info-outline"></iron-icon>
    <span>[[getDialogWarning_(firstRestrictedSite)]]</span>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onSubmitClick_">
      $i18n{matchingRestrictedSitesAllow}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="settings-shared"></style>
    <cr-dialog id="dialog">
      <div slot="title">$i18n{editSiteTitle}</div>
      <div slot="body">
        <cr-input label="$i18n{addSite}" value="{{origin_}}" placeholder="$i18n{addSiteExceptionPlaceholder}" on-input="validate_" error-message="{{errorMessage_}}" invalid="[[invalid_]]" autofocus spellcheck="false">
        </cr-input>
      </div>
      <div slot="button-container">
        <cr-button class="cancel-button" on-click="onCancelClick_" id="cancel">$i18n{cancel}</cr-button>
        <cr-button id="actionButton" class="action-button" on-click="onActionButtonClick_" disabled="[[invalid_]]">
          $i18n{save}
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`;
}

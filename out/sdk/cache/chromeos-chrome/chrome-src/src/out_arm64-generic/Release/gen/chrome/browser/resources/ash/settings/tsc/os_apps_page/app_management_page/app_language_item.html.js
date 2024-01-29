import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style"></style>
<cr-link-row embedded no-hover label="$i18n{appManagementAppLanguageLabel}" sub-label="[[getSelectedLocale_(app)]]" on-click="onClick_">
</cr-link-row>
<template is="dom-if" if="[[showSelectLanguageDialog_]]" restamp>
  <app-language-selection-dialog app="[[app]]" prefs="{{prefs}}" on-close="onSelectLanguageDialogClose_" entry-point="[[getDialogEntryPoint_()]]">
  </app-language-selection-dialog>
</template>
<!--_html_template_end_-->`;
}

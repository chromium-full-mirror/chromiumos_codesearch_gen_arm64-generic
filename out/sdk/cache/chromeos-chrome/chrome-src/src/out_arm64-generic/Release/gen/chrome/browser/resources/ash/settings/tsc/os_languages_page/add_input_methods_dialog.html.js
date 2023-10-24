import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->
<os-settings-add-items-dialog items="[[getInputMethods_(languages.inputMethods)]]" suggested-item-ids="[[getSuggestedInputMethodIds_(languages,
        languages.enabled.*, languages.inputMethods.*)]]" header="$i18n{addInputMethodLabel}" search-label="$i18n{searchInputMethodsLabel}" suggested-items-label="$i18n{suggestedInputMethodsLabel}" all-items-label="$i18n{allInputMethodsLabel}" policy-tooltip="$i18n{inputMethodNotAllowed}" on-items-added="onItemsAdded_">
</os-settings-add-items-dialog><!--_html_template_end_-->`;
}

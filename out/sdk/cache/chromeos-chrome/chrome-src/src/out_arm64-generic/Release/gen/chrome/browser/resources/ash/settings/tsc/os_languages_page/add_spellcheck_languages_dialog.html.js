import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->

<os-settings-add-items-dialog items="[[getAllLanguages_(languages.spellCheckOffLanguages.*)]]" suggested-item-ids="[[getSuggestedLanguageCodes_(
        languages.spellCheckOffLanguages.*, languages.enabled.*,
        languages.inputMethods.enabled.*)]]" header="$i18n{addSpellCheckLanguagesTitle}" search-label="$i18n{searchSpellCheckLanguagesLabel}" suggested-items-label="$i18n{suggestedSpellcheckLanguages}" all-items-label="$i18n{allSpellcheckLanguages}" policy-tooltip="$i18n{spellCheckLanguageNotAllowed}" on-items-added="onItemsAdded_">
</os-settings-add-items-dialog><!--_html_template_end_-->`;
}

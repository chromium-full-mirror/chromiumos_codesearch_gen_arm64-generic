import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->

<os-settings-add-items-dialog items="[[getLanguages_(languages.supported, languages.enabled.*)]]" header="$i18n{addLanguagesDialogTitle}" search-label="$i18n{searchLanguages}" on-items-added="onItemsAdded_">
</os-settings-add-items-dialog><!--_html_template_end_-->`;
}

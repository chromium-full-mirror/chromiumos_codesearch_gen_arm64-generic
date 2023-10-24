import { getTrustedHTML } from '//resources/js/static_types.js';
export function getTemplate() {
    return getTrustedHTML `<!--_html_template_start_--><state-banner>
  <span slot="text">$i18n{MESSAGE_FOLDER_SHARED_WITH_CROSTINI_AND_PLUGIN_VM}</span>
  <cr-button slot="extra-button">
    $i18n{MANAGE_TOAST_BUTTON_LABEL}
  </cr-button>
</state-banner>
<!--_html_template_end_-->`;
}

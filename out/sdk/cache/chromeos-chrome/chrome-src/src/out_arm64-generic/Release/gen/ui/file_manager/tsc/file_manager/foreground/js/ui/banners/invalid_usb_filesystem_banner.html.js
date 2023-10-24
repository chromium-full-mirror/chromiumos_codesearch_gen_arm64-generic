import { getTrustedHTML } from '//resources/js/static_types.js';
export function getTemplate() {
    return getTrustedHTML `<!--_html_template_start_--><state-banner>
  <span slot="text">$i18n{UNKNOWN_FILESYSTEM_WARNING}</span>
  <cr-button slot="extra-button" command="#format">
    $i18n{FORMAT_DEVICE_BUTTON_LABEL}
  </cr-button>
</state-banner>
<!--_html_template_end_-->`;
}

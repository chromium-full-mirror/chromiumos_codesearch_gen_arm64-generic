import { getTrustedHTML } from '//resources/js/static_types.js';
export function getTemplate() {
    return getTrustedHTML `<!--_html_template_start_--><style>
  state-banner {
    --icon-src: url(/foreground/images/files/ui/delete_ng.svg);
  }
</style>
<state-banner>
  <span slot="text">$i18n{TRASH_DELETED_FOREVER}</span>
  <cr-button slot="extra-button" command="#empty-trash">
    $i18n{EMPTY_TRASH_BUTTON_LABEL}
  </cr-button>
</state-banner>
<!--_html_template_end_-->`;
}

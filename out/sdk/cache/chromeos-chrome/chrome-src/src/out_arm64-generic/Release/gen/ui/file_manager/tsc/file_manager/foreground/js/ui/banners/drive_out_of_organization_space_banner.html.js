import { getTrustedHTML } from '//resources/js/static_types.js';
export function getTemplate() {
    return getTrustedHTML `<!--_html_template_start_--><style>
  warning-banner {
    --icon-bg: var(--cros-sys-on_error_container);
    --icon-holder-bg: var(--cros-sys-error_container);
    --icon-src: url(/foreground/images/files/ui/error_banner_icon.svg);
  }
</style>
<warning-banner role="banner" class="tast-drive-out-of-organization-space">
  <span slot="text"></span>
  <cr-button slot="extra-button" href="$i18n{GOOGLE_DRIVE_MANAGE_STORAGE_URL}">
    $i18n{LEARN_MORE_LABEL}
  </cr-button>
</warning-banner>
<!--_html_template_end_-->`;
}

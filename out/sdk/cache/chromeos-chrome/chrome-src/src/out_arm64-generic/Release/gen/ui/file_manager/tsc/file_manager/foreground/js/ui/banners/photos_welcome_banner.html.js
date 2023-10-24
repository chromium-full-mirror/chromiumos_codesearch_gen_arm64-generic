import { getTrustedHTML } from '//resources/js/static_types.js';
export function getTemplate() {
    return getTrustedHTML `<!--_html_template_start_--><style>
  educational-banner {
    --feature-icon-src: url(/foreground/images/files/ui/photos_logo.svg);
  }
</style>
<educational-banner>
  <span slot="title">$i18n{PHOTOS_WELCOME_TITLE}</span>
  <span slot="subtitle">$i18n{PHOTOS_WELCOME_TEXT}</span>
</educational-banner>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="common cros-button-style">cr-dialog::part(dialog){min-width:288px;width:288px}</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="body">$i18n{ambientModeLastArtAlbumMessage}</div>
  <div slot="button-container">
    <cr-button class="action-button primary" on-click="onClose_">
      $i18n{ambientModeArtAlbumDialogCloseButtonLabel}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

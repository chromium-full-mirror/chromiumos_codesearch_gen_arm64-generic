import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host-context([dir=rtl]) #updateStatusButton{transform:none}</style>

<cr-url-list-item id="crUrlListItem" title="[[data.title]]" description="[[data.displayUrl]]" reverse-elide-description description-meta="[[data.displayTimeSinceUpdate]]" url="[[data.url.url]]">
  <cr-icon-button slot="suffix-icon" id="updateStatusButton" disable-ripple aria-label="[[getUpdateStatusButtonTooltip_('$i18n{tooltipMarkAsUnread}',
          '$i18n{tooltipMarkAsRead}', data.read)]]" iron-icon="[[getUpdateStatusButtonIcon_('cr:check-circle',
          'read-later:check-circle-outline', data.read)]]" noink="[[!buttonRipples]]" no-ripple-on-focus on-click="onUpdateStatusClick_" title="[[getUpdateStatusButtonTooltip_('$i18n{tooltipMarkAsUnread}',
          '$i18n{tooltipMarkAsRead}', data.read)]]">
  </cr-icon-button>
  <cr-icon-button slot="suffix-icon" id="deleteButton" aria-label="$i18n{tooltipDelete}" iron-icon="cr:close" noink="[[!buttonRipples]]" no-ripple-on-focus on-click="onItemDeleteClick_" title="$i18n{tooltipDelete}">
  </cr-icon-button>
</cr-url-list-item>
<!--_html_template_end_-->`;
}

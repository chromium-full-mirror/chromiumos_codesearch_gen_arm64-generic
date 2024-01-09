import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">cr-policy-pref-indicator::part(tooltip){clip:rect(0 0 0 0);height:1px;overflow:hidden;width:1px}cr-policy-pref-indicator{padding-inline-end:8px}</style>
<div class="list-item">
  <div class="start text-elide">[[entry.site]]</div>
  <template is="dom-if" if="[[entry.managed]]">
    <cr-policy-pref-indicator pref="[[prefs.performance_tuning.tab_discarding.exceptions_managed]]" on-mouseenter="onShowTooltip_" on-focus="onShowTooltip_">
    </cr-policy-pref-indicator>
  </template>
  <template is="dom-if" if="[[!entry.managed]]">
    <cr-icon-button class="icon-more-vert" title="$i18n{moreActions}" on-click="onMenuClick_" aria-label="$i18n{moreActions}">
    </cr-icon-button>
  </template>
</div><!--_html_template_end_-->`;
}

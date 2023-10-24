import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">cr-policy-indicator{padding:0 var(--cr-controlled-by-spacing)}</style>
<div class="settings-box first">
  <div class="settings-box-text">
    $i18n{crostiniArcAdbDescription}
  </div>
</div>
<div class="settings-box continuation">
  <div id="enableArcAdbLabel" class="start">
    $i18n{crostiniArcAdbLabel}
    <div class="secondary" hidden="[[!arcAdbNeedPowerwash_]]">
      <localized-link localized-string="[[i18nAdvanced(
            'crostiniArcAdbPowerwashRequiredSublabel')]]">
      </localized-link>
    </div>
  </div>
  <cr-policy-indicator indicator-type="[[getPolicyIndicatorType_(
      isOwnerProfile_, isEnterpriseManaged_, canChangeAdbSideloading_)]]">
  </cr-policy-indicator>
  <cr-toggle id="arcAdbEnabledButton" aria-labelledby="enableArcAdbLabel" checked$="[[arcAdbEnabled_]]" disabled="[[shouldDisable_(canChangeAdbSideloading_,
                  arcAdbNeedPowerwash_)]]" on-change="onArcAdbToggleChanged_" deep-link-focus-id$="[[Setting.kCrostiniAdbDebugging]]">
  </cr-toggle>
</div>

<template is="dom-if" if="[[showConfirmationDialog_]]" restamp>
  <settings-crostini-arc-adb-confirmation-dialog action="[[getToggleAction_(arcAdbEnabled_)]]" on-close="onConfirmationDialogClose_">
  </settings-crostini-arc-adb-confirmation-dialog>
</template>
<!--_html_template_end_-->`;
}

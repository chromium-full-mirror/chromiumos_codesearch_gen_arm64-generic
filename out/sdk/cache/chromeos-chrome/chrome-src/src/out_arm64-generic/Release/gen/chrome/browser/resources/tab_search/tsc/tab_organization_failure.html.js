import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="tab-organization-shared-style">.footer{background-color:var(--color-bubble-footer-background);display:flex;flex-direction:column;margin:0 -20px -20px -20px;padding:16px var(--mwb-list-item-horizontal-margin)}.tab-organization-body{width:280px}</style>

<div class="tab-organization-container">
  <div class="tab-organization-text-container">
    <div id="header" class="tab-organization-header" aria-live="polite" aria-relevant="all">
      [[getTitle_(error)]]
    </div>
    <div class="tab-organization-body">
      [[getBodyPreLink_(error)]]
      <div class="tab-organization-link" role="link" tabindex="0" on-click="onCheckNow_" on-keydown="onCheckNowKeyDown_">
        [[getBodyLink_(error)]]
      </div>
      [[getBodyPostLink_(error)]]
    </div>
  </div>
  <template is="dom-if" if="[[showFre]]">
    <div class="footer">
      <div class="tab-organization-body">
        <b>$i18n{tipTitle}</b> $i18n{tipBody}
        <div class="tab-organization-link" role="link" tabindex="0" on-click="onTipClick_" on-keydown="onTipKeyDown_" aria-description="$i18n{tipAriaDescription}">
          $i18n{tipAction}
        </div>
      </div>
    </div>
  </template>
</div>
<!--_html_template_end_-->`;
}

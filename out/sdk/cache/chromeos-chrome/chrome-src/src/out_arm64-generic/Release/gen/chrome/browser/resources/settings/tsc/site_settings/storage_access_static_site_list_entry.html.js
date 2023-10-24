import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared">.row-aligned{align-items:center;display:flex}.site-representation{display:flex}.list-frame{padding-inline-end:0}.settings-row{flex:1}</style>
<div class="list-item">
  <div class="settings-row">
    <site-favicon url="[[model.faviconOrigin]]"></site-favicon>
    <div class="middle" id="displayName">
      <div class="site-representation url-directionality text-elide">
        [[model.displayName]]
      </div>
      <div class="second-line cr-secondary-text">
        [[model.description]]
      </div>
    </div>
  </div>
  
  <template is="dom-if" if="[[model.incognito]]">
    <cr-tooltip-icon id="incognitoTooltip" icon-aria-label="$i18n{incognitoSiteExceptionDesc}" icon-class="settings20:incognito" focus-type="incognito" tooltip-text="$i18n{incognitoSiteExceptionDesc}" focus-row-control focus-type="incognito">
    </cr-tooltip-icon>
  </template>
  
  <div class="row-aligned">
    <div class="separator"></div>
    <cr-icon-button id="resetButton" aria-label$="[[model.resetAriaLabel]]" class="icon-delete-gray" on-click="onResetButtonClick_" focus-row-control focus-type="reset">
    </cr-icon-button>
  </div>
</div>
<!--_html_template_end_-->`;
}

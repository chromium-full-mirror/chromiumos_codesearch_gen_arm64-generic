import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">:host([is-sub-feature]) #feature-icon{display:none}:host([is-sub-feature]) .settings-box .middle{padding-inline-start:64px}#card{border-top:var(--cr-separator-line);border-top-style:var(--feature-item-border-top-style,solid);padding:var(--cr-section-vertical-padding) 0}#feature-icon{padding:2px}cr-policy-indicator{padding:0 var(--cr-controlled-by-spacing)}#help-icon:active{pointer-events:none}</style>
<div id="card" class="settings-box no-padding">
  <div id="linkWrapper" class="link-wrapper" actionable$="[[isRowClickable_(
            feature, pageContentData, subpageRoute)]]" on-click="handleItemClick_">
    <template is="dom-if" if="[[!isFeatureIconHidden]]">
      <slot name="icon">
        <iron-icon id="feature-icon" icon="[[getIconName(feature)]]" aria-hidden="true">
        </iron-icon>
      </slot>
    </template>
    <div id="item-text-container" class$="[[getItemTextContainerClassName_(isFeatureIconHidden)]]" aria-hidden="true">
      <slot name="feature-name">
        <div id="featureName">[[getFeatureName(feature)]]</div>
      </slot>
      <slot name="feature-summary">
        <localized-link class="secondary" id="featureSecondary" localized-string="[[getFeatureSummaryHtml(feature)]]">
        </localized-link>
      </slot>
    </div>
    <template is="dom-if" if="[[hasSubpageClickHandler_(feature, pageContentData,
                  subpageRoute)]]" restamp>
      <cr-icon-button id="subpageButton" class="subpage-arrow" aria-labelledby="featureName" aria-describedby="featureSecondary" aria-roledescription="$i18n{subpageArrowRoleDescription}">
      </cr-icon-button>
    </template>
    <template is="dom-if" if="[[iconTooltip]]" restamp>
      <iron-icon id="help-icon" tabindex="0" icon="[[icon]]" aria-labelledby="tooltip" aria-disabled="true">
      </iron-icon>
      <paper-tooltip id="tooltip" for="help-icon" position="top" aria-hidden="true" fit-to-visible-bounds>
        [[iconTooltip]]
      </paper-tooltip>
    </template>
  </div>
  <template is="dom-if" if="[[shouldShowSeparator_(
                feature, pageContentData, subpageRoute)]]" restamp>
    <div class="separator"></div>
  </template>

  <template is="dom-if" if="[[!isFeatureAllowedByPolicy(feature, pageContentData)]]" restamp>
    <cr-policy-indicator indicator-type="userPolicy"></cr-policy-indicator>
  </template>
  <div class="margin-matches-padding" aria-labelledby="featureName" aria-describedby="featureSecondary">
    
    <slot name="feature-controller">
      
      <settings-multidevice-feature-toggle aria-labelledby="featureName" aria-describedby="featureSecondary" feature="[[feature]]" page-content-data="[[pageContentData]]">
      </settings-multidevice-feature-toggle>
    </slot>
  </div>
</div>
<!--_html_template_end_-->`;
}

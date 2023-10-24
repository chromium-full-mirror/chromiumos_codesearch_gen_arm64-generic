import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="iron-flex cr-shared-style cr-hidden-style cr-icons action-link
    shared-style">.bounded-text,.clippable-flex-text,.multiline-clippable-text{overflow:hidden;text-overflow:ellipsis}.bounded-text,.clippable-flex-text{white-space:nowrap}.clippable-flex-text{flex-shrink:1}cr-tooltip-icon{margin-inline-end:8px}#icon-wrapper{align-self:flex-start;display:flex;padding:6px;position:relative}#icon{height:36px;width:36px}#card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);display:flex;flex-direction:column;height:var(--extensions-card-height);transition:height .3s cubic-bezier(.25,.1,.25,1)}#card.dev-mode{height:208px}#main{display:flex;flex:1;min-height:0;padding:16px 20px}#content{display:flex;flex:1;flex-direction:column;margin-inline-start:24px;overflow:hidden}#name-and-version{color:var(--cr-primary-text-color);margin-bottom:4px}#name{margin-inline-end:8px}#description{flex:1}#warnings{color:var(--error-color);flex:1;margin-bottom:8px}#allowlist-warning{flex:1;margin-bottom:8px}.message-icon{height:18px;margin-inline-end:4px;vertical-align:top;width:18px}#warnings .message-icon{--iron-icon-fill-color:var(--error-color)}#allowlist-warning .message-icon{--iron-icon-fill-color:var(--warning-color)}#extension-id{flex-shrink:0}#inspect-views{display:flex;white-space:nowrap}#inspect-views>span{margin-inline-end:4px}#button-strip{box-sizing:border-box;flex-shrink:0;height:var(--cr-section-min-height);padding-bottom:8px;padding-inline-end:20px;padding-top:8px}#button-strip cr-button{margin-inline-start:8px}#source-indicator{margin-inline-start:24px;margin-top:24px;position:absolute}.source-icon-wrapper{align-items:center;background:#f1592b;border-radius:50%;box-shadow:0 1px 1px 0 rgba(0,0,0,.22),0 2px 2px 0 rgba(0,0,0,.12);display:flex;height:22px;justify-content:center;width:22px}#source-indicator iron-icon{color:#fff;height:16px;width:16px}paper-tooltip{--paper-tooltip-min-width:0}#errors-button{color:var(--error-color)}#dev-reload-button{margin-inline-end:12px}#blacklisted-warning:empty{display:none}#a11yAssociation{height:0;overflow:hidden}</style>

<div id="a11yAssociation" aria-hidden="true">
  [[a11yAssociation(data.name)]]
</div>
<div id="card" class$="[[computeClasses_(data.state, inDevMode)]]">
  <div id="main">
    <div id="icon-wrapper">
      <img id="icon" src="[[data.iconUrl]]" aria-describedby="a11yAssociation" alt="">
      <template is="dom-if" if="[[computeSourceIndicatorIcon_(data.*)]]">
        <div id="source-indicator">
          <div class="source-icon-wrapper" role="img" aria-describedby="a11yAssociation" aria-label$="[[computeSourceIndicatorText_(data.*)]]">
            <iron-icon icon="[[computeSourceIndicatorIcon_(data.*)]]">
            </iron-icon>
          </div>
        </div>
      </template>
    </div>
    
    <template is="dom-if" if="[[computeSourceIndicatorIcon_(data.*)]]">
      <paper-tooltip id="source-indicator-text" for="source-indicator" position="top" fit-to-visible-bounds aria-hidden="true">
        [[computeSourceIndicatorText_(data.*)]]
      </paper-tooltip>
    </template>
    <div id="content">
      
      <div>
        <div id="name-and-version" class="layout horizontal center">
          <div id="name" role="heading" aria-level="3" class="clippable-flex-text">[[data.name]]</div>
          <span id="version" class="cr-secondary-text" hidden$="[[!inDevMode]]">
            [[data.version]]
          </span>
        </div>
      </div>
      <div id="description" class="cr-secondary-text multiline-clippable-text" hidden$="[[!showDescription_(data.disableReasons.*, data.*)]]">
        [[data.description]]
      </div>
      <template is="dom-if" if="[[hasSevereWarnings_(data.disableReasons.*, data.*)]]">
        <div id="warnings">
          <iron-icon class="message-icon" icon="cr:error"></iron-icon>
          <span id="runtime-warnings" aria-describedby="a11yAssociation" hidden$="[[!data.runtimeWarnings.length]]">
            <template is="dom-repeat" items="[[data.runtimeWarnings]]">
              [[item]]
            </template>
          </span>
          <span id="suspicious-warning" aria-describedby="a11yAssociation" hidden$="[[!data.disableReasons.suspiciousInstall]]">
            $i18n{itemSuspiciousInstall}
            <a target="_blank" href="$i18n{suspiciousInstallHelpUrl}" aria-label="$i18n{itemSuspiciousInstallLearnMore}">
              $i18n{learnMore}
            </a>
          </span>
          <span id="corrupted-warning" aria-describedby="a11yAssociation" hidden$="[[!data.disableReasons.corruptInstall]]">
            $i18n{itemCorruptInstall}
          </span>
          <span id="blacklisted-warning">[[data.blacklistText]]</span>
        </div>
      </template>
      <template is="dom-if" if="[[showAllowlistWarning_(data.disableReasons.*, data.*)]]">
        <div id="allowlist-warning">
          <iron-icon class="message-icon" icon="extensions-icons:safebrowsing_warning">
          </iron-icon>
          <span class="cr-secondary-text" aria-describedby="a11yAssociation">
            $i18n{itemAllowlistWarning}
            <a href="$i18n{enhancedSafeBrowsingWarningHelpUrl}" target="_blank" aria-label="$i18n{itemAllowlistWarningLearnMoreLabel}">
              $i18n{learnMore}
            </a>
          </span>
        </div>
      </template>
      <template is="dom-if" if="[[inDevMode]]">
        <div id="extension-id" class="bounded-text cr-secondary-text">
          [[data.id]]
        </div>
        <template is="dom-if" if="[[!computeInspectViewsHidden_(data.views)]]">
          
          <div>
            <div id="inspect-views" class="cr-secondary-text">
              <span aria-describedby="a11yAssociation">
                $i18n{itemInspectViews}
              </span>
              <a class="clippable-flex-text" is="action-link" title="[[computeFirstInspectTitle_(firstInspectView_)]]" on-click="onInspectClick_">
                [[computeFirstInspectLabel_(firstInspectView_)]]
              </a>
              <a is="action-link" hidden$="[[computeExtraViewsHidden_(data.views)]]" on-click="onExtraInspectClick_">
                &nbsp;[[computeExtraInspectLabel_(data.views)]]
              </a>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
  <div id="button-strip" class="layout horizontal center cr-secondary-text">
    <div class="layout flex horizontal center">
      <cr-button id="detailsButton" on-click="onDetailsClick_" aria-describedby="a11yAssociation">
        $i18n{itemDetails}
      </cr-button>
      <cr-button id="removeButton" on-click="onRemoveClick_" aria-describedby="a11yAssociation" hidden="[[data.mustRemainInstalled]]">
        $i18n{remove}
      </cr-button>
      <template is="dom-if" if="[[shouldShowErrorsButton_(data.*)]]">
        <cr-button id="errors-button" on-click="onErrorsClick_" aria-describedby="a11yAssociation">
          $i18n{itemErrors}
        </cr-button>
      </template>
    </div>
    <template is="dom-if" if="[[!computeDevReloadButtonHidden_(data.*)]]">
      <cr-icon-button id="dev-reload-button" class="icon-refresh no-overlap" aria-label="$i18n{itemReload}" aria-describedby="a11yAssociation" on-click="onReloadClick_"></cr-icon-button>
    </template>
    <template is="dom-if" if="[[showRepairButton_(data.disableReasons.corruptInstall)]]">
      <cr-button id="repair-button" class="action-button" aria-describedby="a11yAssociation" on-click="onRepairClick_">
        $i18n{itemRepair}
      </cr-button>
    </template>
    <template is="dom-if" if="[[showReloadButton_(data.state)]]">
      <cr-button id="terminated-reload-button" on-click="onReloadClick_" aria-describedby="a11yAssociation" class="action-button">
        $i18n{itemReload}
      </cr-button>
    </template>
    <cr-tooltip-icon id="parentDisabledPermissionsToolTip" hidden$="[[!data.disableReasons.parentDisabledPermissions]]" tooltip-text="$i18n{parentDisabledPermissions}" icon-class="cr20:kite" icon-aria-label="$i18n{parentDisabledPermissions}">
    </cr-tooltip-icon>
    <paper-tooltip id="enable-toggle-tooltip" for="enableToggle" position="left" aria-hidden="true" animation-delay="0" fit-to-visible-bounds>
      [[getEnableToggleTooltipText_(data.*)]]
    </paper-tooltip>
    <cr-toggle id="enableToggle" aria-label$="[[getEnableToggleAriaLabel_(data.*)]]" aria-describedby="a11yAssociation enable-toggle-tooltip" checked="[[isEnabled_(data.state)]]" on-change="onEnableToggleChange_" disabled$="[[!isEnableToggleEnabled_(data.*)]]" hidden$="[[!showEnableToggle_(data.*)]]">
    </cr-toggle>
  </div>
</div>
<!--_html_template_end_-->`;
}

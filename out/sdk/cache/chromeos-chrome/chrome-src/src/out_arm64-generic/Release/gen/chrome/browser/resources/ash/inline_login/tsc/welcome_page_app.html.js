import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="account-manager-shared">.image-container{margin-top:40px}.welcome-image{width:338px}.google-full-logo{width:74px}.secondary{color:var(--cr-secondary-text-color)}.skip-checkbox{margin:auto;margin-top:40px}.arc-toggle-container{display:flex;justify-content:space-between}</style>

<div class="main-container">
  
  <h1>[[getWelcomeTitle_(isArcAccountRestrictionsEnabled_)]]</h1>
  
  <p class="secondary" inner-h-t-m-l="[[getWelcomeBody_(
      isArcAccountRestrictionsEnabled_, isArcFlow_)]]"></p>
  <div class="arc-toggle-container" hidden$="[[!isArcToggleVisible_(
        isArcAccountRestrictionsEnabled_, isArcFlow_)]]">
    <span class="secondary" id="arcToggleLabel" aria-hidden="true">$i18nRaw{accountManagerDialogArcToggleLabel}</span>
    <cr-toggle checked="{{isAvailableInArc}}" aria-labelledby="arcToggleLabel">
    </cr-toggle>
  </div>

  <div class="image-container">
    
  </div>

  <div class="skip-checkbox" hidden$="[[isArcAccountRestrictionsEnabled_]]">
    <cr-checkbox id="checkbox" aria-label="$i18n{accountManagerDialogWelcomeCheckbox}">
      <span class="secondary">$i18n{accountManagerDialogWelcomeCheckbox}</span>
    </cr-checkbox>
  </div>
</div>
<!--_html_template_end_-->`;
}

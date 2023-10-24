import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared md-select">h2{padding-inline-start:var(--cr-section-padding)}.list-frame[use-cr-section-left-padding]{padding-inline-start:var(--cr-section-padding)}.dependent{padding-inline-start:var(--cr-section-indent-padding)}.dependent[align-with-options]{padding-inline-start:calc(var(--cr-section-padding) * 2)}.subtitle{display:block}</style>

<template is="dom-repeat" items="[[optionSections_]]" as="section">
  <template is="dom-if" if="[[shouldShowTitle(section)]]">
    <h2>[[section.title]]</h2>
  </template>
  <div class="list-frame" use-cr-section-left-padding$="[[!shouldShowTitle(section)]]">
    <template is="dom-repeat" items="[[section.options]]" as="option">
      <div class="list-item">
        <template is="dom-if" if="[[isSubmenuButton_(option.uiType)]]">
          <cr-button class="margin-matches-padding" submenu-button-type$="[[option.submenuButtonType]]" on-click="onSubmenuButtonClick_">
            [[option.label]]
          </cr-button>
        </template>
        <template is="dom-if" if="[[!isSubmenuButton_(option.uiType)]]">
          <div class="start" id="option-label" role="heading" aria-level="2" aria-hidden="[[shouldShowTitle(section)]]">
            [[option.label]]
            <template is="dom-if" if="[[option.subtitle]]" aria-hidden="true">
              <span class="secondary label subtitle">
                [[option.subtitle]]
              </span>
            </template>
          </div>
        </template>
        <template is="dom-if" if="[[isToggleButton_(option.uiType)]]">
          <cr-toggle checked="{{option.value}}" on-change="onToggleButtonOrDropdownChange_" aria-label="[[option.label]]" aria-description="[[option.subtitle]]" deep-link-focus-id$="[[option.deepLink]]">
          </cr-toggle>
        </template>
        <template is="dom-if" if="[[isDropdown_(option.uiType)]]">
          
          <select class="md-select" value="{{option.value::change}}" on-change="onToggleButtonOrDropdownChange_" aria-label="[[option.label]]" deep-link-focus-id$="[[option.deepLink]]">
            <template is="dom-repeat" items="[[option.menuItems]]">
              <option selected="[[item.selected]]" value="[[item.value]]">
                [[item.label]]
              </option>
            </template>
          </select>
        </template>
        <template is="dom-if" if="[[isLink_(option.uiType)]]">
          <cr-icon-button iron-icon="cr:arrow-right" on-click="navigateToOtherPageInSettings_" aria-label="[[option.label]]" role="link">
          </cr-icon-button>
        </template>
      </div>
      
      <template is="dom-repeat" items="[[option.dependentOptions]]" as="dependent" id="dependent-settings">
        <div class="list-item dependent" align-with-options$="[[!shouldShowTitle(section)]]">
          <div class="start" aria-hidden="true">
            [[dependent.label]]
            <template is="dom-if" if="[[dependent.subtitle]]">
              <span class="secondary label subtitle">
                [[dependent.subtitle]]
              </span>
            </template>
          </div>
          <template is="dom-if" if="[[isToggleButton_(dependent.uiType)]]">
            <cr-toggle checked="{{dependent.value}}" on-click="onToggleButtonOrDropdownChange_" aria-label="[[dependent.label]]" aria-description="[[dependent.subtitle]]" disabled="[[dependentOptionsDisabled_(option.value)]]">
            </cr-toggle>
          </template>
          <template is="dom-if" if="[[isDropdown_(dependent.uiType)]]">
            
            <select class="md-select" value="{{dependent.value::change}}" on-change="onToggleButtonOrDropdownChange_" aria-label="[[dependent.label]]">
              <template is="dom-repeat" items="[[dependent.menuItems]]">
                <option selected="[[item.selected]]" value="[[item.value]]">
                  [[item.label]]
                </option>
              </template>
            </select>
          </template>
          <template is="dom-if" if="[[isLink_(dependent.uiType)]]">
            <cr-icon-button class="icon-external" on-click="navigateToOtherPageInSettings_" aria-label="[[dependent.label]]">
            </cr-icon-button>
          </template>
        </div>
      </template>
    </template>
  </div>
</template>

<template is="dom-if" if="[[showClearPersonalizedData_]]" restamp>
  
  <os-settings-japanese-clear-ime-data-dialog languages="[[languages]]" language-helper="[[languageHelper]]" on-close="onClearPersonalizedDataClose_">
  </os-settings-japanese-clear-ime-data-dialog>
</template>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="settings-shared"></style>
    <settings-animated-pages id="pages" current-route="{{currentRoute}}" section="a11y" focus-config="[[focusConfig_]]">
      <div route-path="default">

        <cr-link-row label="$i18n{manageAccessibilityFeatures}" on-click="onManageSystemAccessibilityFeaturesClick_" sub-label="$i18n{moreFeaturesLinkDescription}" external>
        </cr-link-row>


        <settings-toggle-button class="hr" hidden$="[[!showAccessibilityLabelsSetting_]]" pref="{{prefs.settings.a11y.enable_accessibility_image_labels}}" on-change="onA11yImageLabelsChange_" label="$i18n{accessibleImageLabelsTitle}" sub-label="$i18n{accessibleImageLabelsSubtitle}">
        </settings-toggle-button>



        <cr-link-row class="hr" label="$i18n{moreFeaturesLink}" on-click="onMoreFeaturesLinkClick_" sub-label="$i18n{a11yWebStore}" button-aria-description="$i18n{opensInNewTab}" external>
        </cr-link-row>
      </div>

    </settings-animated-pages>
<!--_html_template_end_-->`;
}

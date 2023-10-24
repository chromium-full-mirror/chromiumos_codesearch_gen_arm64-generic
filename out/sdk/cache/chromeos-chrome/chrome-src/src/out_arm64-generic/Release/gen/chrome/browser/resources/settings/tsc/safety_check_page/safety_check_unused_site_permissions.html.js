import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared"></style>
<settings-safety-check-child id="safetyCheckChild" icon-status="[[iconStatus_]]" label="[[headerString_]]" button-label="$i18n{safetyCheckReview}" button-aria-label="$i18n{safetyCheckUnusedSitePermissionsHeaderAriaLabel}" on-button-click="onButtonClick_" role="presentation" class="two-line">
</settings-safety-check-child><!--_html_template_end_-->`;
}

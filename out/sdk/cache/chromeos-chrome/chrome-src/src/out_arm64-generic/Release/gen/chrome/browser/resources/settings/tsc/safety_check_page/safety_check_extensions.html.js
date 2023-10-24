import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>
<settings-safety-check-child id="safetyCheckChild" icon-status="[[safetyCheckIconEnum_.EXTENSIONS_REVIEW]]" label="[[displayString_]]" button-label="$i18n{safetyCheckReview}" button-aria-label="$i18n{safetyCheckExtensionsButtonAriaLabel}" on-button-click="onButtonClick_" role="presentation" button-icon="cr:open-in-new" class="two-line">
</settings-safety-check-child>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><settings-safety-check-child id="safetyCheckChild" icon-status="[[getIconStatus_(status_)]]" label="$i18n{safeBrowsingSectionLabel}" sub-label="[[displayString_]]" button-label="[[getButtonLabel_(status_)]]" button-aria-label="$i18n{safetyCheckSafeBrowsingButtonAriaLabel}" button-class="action-button" on-button-click="onButtonClick_" on-click="onRowClick_" row-clickable="[[isRowClickable_(status_)]]" managed-icon="[[getManagedIcon_(status_)]]" role="presentation">
</settings-safety-check-child>
<!--_html_template_end_-->`;
}

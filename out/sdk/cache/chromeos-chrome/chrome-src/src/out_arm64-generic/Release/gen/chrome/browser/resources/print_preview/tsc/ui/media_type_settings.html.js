import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="print-preview-shared">:host print-preview-settings-select{margin:0 calc(var(--print-preview-sidebar-margin) - 2px)}</style>
<print-preview-settings-section>
  <span id="media-type-label" slot="title">$i18n{mediaTypeLabel}</span>
  <div slot="controls">
    <print-preview-settings-select aria-label="$i18n{mediaTypeLabel}" capability="[[capability]]" setting-name="mediaType" settings="{{settings}}" disabled="[[disabled]]">
    </print-preview-settings-select>
  </div>
</print-preview-settings-section>
<!--_html_template_end_-->`;
}

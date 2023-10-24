import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="print-preview-shared">:host print-preview-settings-select{margin:0 calc(var(--print-preview-sidebar-margin) - 2px)}</style>
<print-preview-settings-section>
  <span id="media-size-label" slot="title">$i18n{mediaSizeLabel}</span>
  <div slot="controls">
    <print-preview-settings-select aria-label="$i18n{mediaSizeLabel}" capability="[[capability]]" setting-name="mediaSize" settings="{{settings}}" disabled="[[disabled]]">
    </print-preview-settings-select>
  </div>
</print-preview-settings-section>

<iron-collapse opened="[[settings.borderless.available]]">
  <print-preview-settings-section>
    <div slot="title"></div>
    <div slot="controls" class="checkbox">
      <cr-checkbox id="borderless" aria-labelledby="borderless-label" disabled$="[[disabled]]" on-change="onBorderlessCheckboxChange_">
        <span id="borderless-label">$i18n{borderlessLabel}</span>
      </cr-checkbox>
    </div>
  </print-preview-settings-section>
</iron-collapse>
<!--_html_template_end_-->`;
}

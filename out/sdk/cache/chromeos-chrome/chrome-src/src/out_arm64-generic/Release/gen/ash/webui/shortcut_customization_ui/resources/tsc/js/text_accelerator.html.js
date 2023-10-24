import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="shortcut-customization-shared">
  .spacing {
    color: var(--cros-text-color-secondary);
    font: var(--cros-button-2-font);
    margin-inline-end: 8px;
  }

  :host([narrow]) .spacing {
    margin-inline-end: 4px;
  }

  #text-wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  :host([narrow]) .parts-container {
    flex-wrap: nowrap;
    white-space: nowrap;
  }

  iron-icon[icon='shortcut-customization:lock'] {
    --iron-icon-width: 16px;
    --iron-icon-height: 16px;
  }
</style>

<div class="container">
  <!-- This element's innerHTML is dynamically set based on its text
  accelerator parts. -->
  <div id="text-wrapper">
    <div class="parts-container"></div>
    <div class="lock-icon-container" hidden="[[!shouldShowLockIcon()]]">
      <iron-icon icon="shortcut-customization:lock"></iron-icon>
    </div>
  </div>
</div><!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="diagnostics-shared">
  :host-context(body.jelly-enabled) #chartName {
    font: var(--cros-body-2-font);
  }

  #chartName {
    color: var(--cros-text-color-secondary);
    display: inline-block;
    font-family: var(--diagnostics-roboto-font-family);
    font-size: 13px;
    font-weight: var(--diagnostics-regular-font-weight);
    height: 20px;
    line-height: 20px;
  }

  paper-progress {
    border-radius: 5px;
    display: inline-block;
    width: 95%;
    --paper-progress-active-color: var(--cros-slider-color-active);
    --paper-progress-container-color: var(--cros-slider-track-color-active);
    --paper-progress-height: 4px;
  }
</style>
<div id="barChartContainer">
  <div class="body">
    <paper-progress id="barChart"
        value="[[getAdjustedValue(value, max)]]" max="[[max]]">
    </paper-progress>
  </div>
  <label id="chartName">
    [[header]]
  </label>
</div>
<!--_html_template_end_-->`;
}

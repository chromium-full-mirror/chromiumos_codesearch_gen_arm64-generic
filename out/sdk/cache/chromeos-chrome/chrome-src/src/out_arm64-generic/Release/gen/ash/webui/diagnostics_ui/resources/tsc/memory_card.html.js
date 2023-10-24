import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="diagnostics-shared">
</style>
<diagnostics-card hide-data-points="true">
  <div id="cardTitle" slot="title">[[i18n('memoryTitle')]]</div>
  <iron-icon slot="icon" icon="diagnostics:memory"></iron-icon>
  <percent-bar-chart slot="left-panel"
      header="[[getAvailableMemory(memoryUsage)]]"
      value="[[getTotalUsedMemory(memoryUsage)]]"
      max="[[memoryUsage.totalMemoryKib]]">
  </percent-bar-chart>
  <routine-section slot="routines" routines="[[routines]]"
      routine-runtime="{{getEstimateRuntimeInMinutes(
        routines, memoryUsage)}}"
      test-suite-status="{{testSuiteStatus}}"
      run-tests-button-text="[[i18n('runMemoryTestText')]]"
      banner-message="[[i18n('memoryBannerMessage')]]"
      learn-more-link-section="memory"
      is-active="[[isActive]]"
      additional-message="[[getRunTestsAdditionalMessage(
      memoryUsage.availableMemoryKib)]]">
  </routine-section>
</diagnostics-card>
<!--_html_template_end_-->`;
}

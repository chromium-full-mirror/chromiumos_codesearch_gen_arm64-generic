import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="sp-shared-style">.cards{display:flex;flex-direction:column;height:100%;row-gap:var(--sp-body-padding);padding:var(--sp-body-padding) 0}</style>
<div class="cards" id="performanceControlsContainer">
  <dom-repeat items="{{cards_}}">
    <template>
      <template is="dom-if" if="[[isEqualTo(item, cardTypeEnum_.BROWSER_HEALTH)]]">
        <browser-health-card id="browserHealthCard" class="card">
        </browser-health-card>
      </template>
      <template is="dom-if" if="[[isEqualTo(item, cardTypeEnum_.MEMORY_SAVER)]]">
        <memory-saver-card id="memorySaverCard" class="card">
        </memory-saver-card>
      </template>
      <template is="dom-if" if="[[isEqualTo(item, cardTypeEnum_.BATTERY_SAVER)]]">
        <battery-saver-card id="batterySaverCard" class="card">
        </battery-saver-card>
      </template>
    </template>
  </dom-repeat>
</div><!--_html_template_end_-->`;
}

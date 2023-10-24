import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="settings-shared md-select">:host{display:block}</style>
    <div class="cr-row first" id="picker" hidden>
      <select id="mediaPicker" class="md-select" on-change="onChange_" aria-label$="[[label]]">
        <template is="dom-repeat" items="[[devices]]">
          <option value$="[[item.id]]">[[item.name]]</option>
        </template>
      </select>
    </div>
<!--_html_template_end_-->`;
}

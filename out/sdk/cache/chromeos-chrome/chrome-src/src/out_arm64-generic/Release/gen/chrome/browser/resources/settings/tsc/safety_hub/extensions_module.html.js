import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared">:host{display:block;padding:0 var(--cr-section-padding)}.icon-blue{fill:var(--google-blue-600)}@media (prefers-color-scheme:dark){.icon-blue{fill:var(--google-blue-300)}}</style>

<settings-safety-hub-module header="[[headerString_]]" header-icon="cr:extension">
  <div slot="button-container">
    <cr-button id="reviewButton" on-click="onButtonClick_">
      $i18n{safetyCheckReview}
      <iron-icon icon="cr:open-in-new" class="icon-blue" slot="suffix-icon">
      </iron-icon>
    </cr-button>
  </div>
</settings-safety-hub-module><!--_html_template_end_-->`;
}

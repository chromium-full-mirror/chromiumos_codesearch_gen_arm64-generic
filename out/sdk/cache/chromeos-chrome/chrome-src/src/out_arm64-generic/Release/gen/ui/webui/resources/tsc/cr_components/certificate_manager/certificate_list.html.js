import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="certificate-shared iron-flex">.button-box{align-items:center;display:flex;margin-bottom:24px;min-height:48px;padding:0 20px}#importAndBind{margin-inline-start:8px}</style>
    <div class="button-box">
      <span class="flex">
          [[getDescription_(certificateType, certificates)]]</span>
      <cr-button id="import" on-click="onImportClick_" hidden="[[!canImport_(certificateType, importAllowed, isKiosk_)]]">
        [[i18n('certificateManagerImport')]]</cr-button>

      <cr-button id="importAndBind" on-click="onImportAndBindClick_" hidden="[[!canImportAndBind_(certificateType, importAllowed,
                 isGuest_)]]">
        [[i18n('certificateManagerImportAndBind')]]</cr-button>

    </div>
    <template is="dom-repeat" items="[[certificates]]">
      <certificate-entry model="[[item]]" certificate-type="[[certificateType]]">
      </certificate-entry>
    </template>
<!--_html_template_end_-->`;
}

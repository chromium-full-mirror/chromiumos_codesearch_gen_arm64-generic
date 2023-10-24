import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared"></style>


<template is="dom-if" if="[[showManuallyAddDialog_]]" restamp>
  <add-printer-manually-dialog new-printer="{{newPrinter}}">
  </add-printer-manually-dialog>
</template>


<template is="dom-if" if="[[showManufacturerDialog_]]" restamp>
  <add-printer-manufacturer-model-dialog active-printer="{{newPrinter}}">
  </add-printer-manufacturer-model-dialog>
</template>


<template is="dom-if" if="[[showAddPrintServerDialog_]]" restamp>
  <add-print-server-dialog></add-print-server-dialog>
</template>

<!--_html_template_end_-->`;
}

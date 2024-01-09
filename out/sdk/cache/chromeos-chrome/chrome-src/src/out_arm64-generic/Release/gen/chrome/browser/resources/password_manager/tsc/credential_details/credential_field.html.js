import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-input-style cr-shared-style shared-style"></style>

<cr-input value="[[value]]" id="inputValue" readonly="readonly" class="input-field" label="[[label]]" placeholder="[[placeholder]]" aria-disabled="true">
  <cr-icon-button id="copyButton" class="icon-copy-content" slot="inline-suffix" title="[[copyButtonLabel]]" on-click="onCopyValueClick_">
  </cr-icon-button>
</cr-input>

<cr-toast id="toast" duration="5000">
  <span>[[valueCopiedToastLabel]]</span>
</cr-toast>
<!--_html_template_end_-->`;
}

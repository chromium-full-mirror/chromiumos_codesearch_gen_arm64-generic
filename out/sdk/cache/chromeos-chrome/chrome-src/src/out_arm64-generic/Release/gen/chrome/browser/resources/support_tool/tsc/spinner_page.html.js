import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->

<style include="support-tool-shared">paper-spinner-lite{display:flex;margin:0 auto;margin-top:30px}</style>

<h1 id="header" tabindex="0">[[pageTitle]]</h1>
<paper-spinner-lite active>
</paper-spinner-lite>
<div class="navigation-buttons">
  <cr-button id="cancelButton" on-click="onCancelClick_">
    $i18n{cancelButtonText}
  </cr-button>
</div>
<!--_html_template_end_-->`;
}

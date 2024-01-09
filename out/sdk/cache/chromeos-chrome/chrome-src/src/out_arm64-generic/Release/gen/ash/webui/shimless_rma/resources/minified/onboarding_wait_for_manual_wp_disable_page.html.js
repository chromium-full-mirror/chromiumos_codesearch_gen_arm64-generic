import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="cr-shared-style shimless-rma-shared"></style>

<base-page equal-panes>
  <div slot="left-pane">
    <h1 tabindex="-1">[[getPageTitle(hwwpEnabled)]]</h1>
    <div id="manuallyDisableHwwpInstructions" class="instructions">
      [[getInstructions(hwwpEnabled)]]
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`}
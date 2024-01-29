import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="diagnostics-shared">:host-context(body.jelly-enabled) .tester{background:var(--cros-highlight-color_shape)}.canvas-container{align-items:center;display:flex;justify-content:center}.tester{background:var(--cros-highlight-color);border-radius:8px}</style>
<cr-dialog id="touchpadTesterDialog">
  <div slot="title">[[i18n('touchpadTesterTitleText')]]</div>
  <div slot="body">
    [[touchpad.name]]
    <div class="canvas-container">
      
      <canvas class="tester" id="testerCanvas" height="320" width="320"></canvas>
    </div>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
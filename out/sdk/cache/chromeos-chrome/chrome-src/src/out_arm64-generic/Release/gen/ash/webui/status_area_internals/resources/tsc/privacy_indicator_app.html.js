import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->

<style>:host{display:flex;flex:1 0 100%;padding:10px;width:100%;align-items:center}#appContainer{display:flex;flex:1 0 100%;background-color:#d3d3d3}cr-input{padding:5px}cr-button{padding:25px;background-color:#4169e1;color:#fff}.padded-text{margin-inline:5px}</style>

<div id="appContainer">
  <cr-input label="App Name" aria-label="app-name" value="{{name}}">
  </cr-input>

  <cr-toggle aria-label="use-camera" checked="{{useCamera}}"></cr-toggle>
  <span aria-hidden="true" class="padded-text">
    Use camera
  </span>

  <cr-toggle aria-label="use-microphone" checked="{{useMicrophone}}">
  </cr-toggle>
  <span aria-hidden="true" class="padded-text">
    Use microphone
  </span>

  <cr-button on-click="onTriggerPrivacyIndicators">
    <span class="emphasize">Add/Update App</span>
  </cr-button>
</div><!--_html_template_end_-->`;
}

import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="cr-shared-style shared-style">
  :host {
    display: flex;
    flex: 0 0 100%;
  }

  .name-container {
    flex-basis: 100%;
    justify-content: center;
  }

  #nameColumn {
    flex: 2;
    flex-wrap: wrap;
  }

  select {
    margin-bottom: 10px;
    width: 100%;
  }
</style>

<div class="column">
  <cr-button on-click="setFakePhoneName_" class="internals-button">
    <span class="emphasize">Change Phone Name</span>
  </cr-button>
</div>
<div id="nameColumn" class="column">
  <div class="name-container">
    <div class="label">
      Phone name
    </div>
    <cr-input value="{{phoneName_}}">
    </cr-input>
  </div>
</div>
<!--_html_template_end_-->`;
}
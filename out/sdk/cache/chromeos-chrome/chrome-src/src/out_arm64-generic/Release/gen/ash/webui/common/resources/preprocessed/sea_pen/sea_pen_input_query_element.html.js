import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><style include="wallpaper common cros-button-style">
  #container {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }

  #queryInput {
    padding: 12px 0;
    text-align: center;
    --cr-input-error-display: none;
  }

  #buttonContainer {
    padding: 12px 0;
  }
</style>

<div id="container">
  <cr-input id="queryInput"
      maxlength="[[maxTextLength_]]"
      placeholder="Describe your wallpaper"
      type="text"
      value="{{textValue_}}">
  </cr-input>
  <div id="buttonContainer">
    <cr-button
        id="searchButton"
        class="action-button"
        disabled$="[[thumbnailsLoading_]]"
        on-click="onClickInputQuerySearchButton_">
      <iron-icon icon$="[[getSearchButtonIcon_(path)]]" slot="prefix-icon"></iron-icon>
      [[getSearchButtonText_(path)]]
    </cr-button>
  </div>
</div>
<!--_html_template_end_-->`;
}
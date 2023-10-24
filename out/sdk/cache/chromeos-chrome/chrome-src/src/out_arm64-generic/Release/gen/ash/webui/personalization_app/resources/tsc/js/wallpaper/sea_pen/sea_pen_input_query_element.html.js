import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><cr-input type="text" placeholder="describe" value="{{textValue_}}">
</cr-input>
<cr-button id="searchButton" disabled$="[[thumbnailsLoading_]]" on-click="onClickInputQuerySearchButton_">
  <div class="text">Search</div>
</cr-button><!--_html_template_end_-->`;
}

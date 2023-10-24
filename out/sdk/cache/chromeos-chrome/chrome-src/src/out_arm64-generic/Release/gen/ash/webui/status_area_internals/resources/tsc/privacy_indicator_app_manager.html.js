import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->

<style>:host{display:flex;flex:1 0 100%}#listContainer{flex:3;height:40vh}</style>

<div class="column">
  <cr-button on-click="onAddPrivacyIndicatorsApp">
    Add Privacy Indicators App
  </cr-button>
</div>

<div class="column" id="listContainer">
  <template id="appListContainer" is="dom-repeat" items="{{appList}}">
    <privacy-indicator-app appid="{{item}}" on-remove-app="onRemoveApp_">
    </privacy-indicator-app>
  </template>
</div><!--_html_template_end_-->`;
}

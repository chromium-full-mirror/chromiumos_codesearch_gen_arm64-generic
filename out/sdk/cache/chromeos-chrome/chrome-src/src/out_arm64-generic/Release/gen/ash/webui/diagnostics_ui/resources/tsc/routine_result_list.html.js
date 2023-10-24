import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="diagnostics-shared">
</style>
<div id="resultListContainer" class="grey-container" hidden$="[[hidden]]">
  <dom-repeat id="resultList" items="[[results]]">
    <template>
      <routine-result-entry item="[[item]]"
          hide-vertical-lines="[[shouldHideVerticalLines(item.*)]]"
          using-routine-groups="[[usingRoutineGroups]]">
      </routine-result-entry>
    </template>
  </dom-repeat>
</div>
<!--_html_template_end_-->`;
}

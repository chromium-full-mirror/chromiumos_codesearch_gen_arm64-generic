import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-icons cr-shared-style shared-style">:host{border-top:var(--cr-separator-line);display:block;padding-bottom:8px;padding-inline-end:8px;padding-inline-start:var(--cr-section-padding);padding-top:8px}#activity-item-main-row{align-items:center;display:flex;flex-direction:row;min-height:calc(var(--cr-section-min-height) - var(--separator-gap))}#activity-item-main-row .separator{margin:0 calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin))}#activity-item-main-row cr-expand-button{margin-inline-end:6px}#activity-call-and-count{display:flex;flex:1;flex-direction:row;margin-inline-end:auto;max-width:var(--activity-log-call-and-count-width)}#activity-delete{margin:0}#activity-type{flex:0 var(--activity-type-width)}#activity-key{flex:1;margin-inline-start:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#activity-count{flex:0 var(--activity-count-width);text-align:end}.page-url{display:flex;flex-direction:row;margin-bottom:10px;max-width:var(--activity-log-call-and-count-width)}.page-url-link{flex-grow:1;margin-inline-end:20px;margin-inline-start:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}</style>
<div actionable$="[[isExpandable_]]" id="activity-item-main-row" on-click="onExpandClick_">
  <div id="activity-call-and-count">
    <span id="activity-type">[[data.activityType]]</span>
    <span id="activity-key" title="[[data.key]]">[[data.key]]</span>
    <span id="activity-count">[[data.count]]</span>
  </div>
  <cr-expand-button no-hover expanded="{{data.expanded}}" hidden$="[[!isExpandable_]]">
  </cr-expand-button>
  <div class="separator" hidden$="[[!isExpandable_]]"></div>
  <cr-icon-button id="activity-delete" class="icon-delete-gray" aria-describedby="api-call" aria-label="$i18n{clearEntry}" on-click="onDeleteClick_"></cr-icon-button>
</div>
<div id="page-url-list" hidden$="[[!data.expanded]]">
  <template is="dom-repeat" items="[[getPageUrls_(data)]]">
    <div class="page-url">
      <a class="page-url-link" href="[[item.page]]" target="_blank" title="[[item.page]]">[[item.page]]</a>
      <span class="page-url-count" hidden$="[[!shouldShowPageUrlCount_(data)]]">
        [[item.count]]
      </span>
    </div>
  </template>
</div>
<!--_html_template_end_-->`;
}

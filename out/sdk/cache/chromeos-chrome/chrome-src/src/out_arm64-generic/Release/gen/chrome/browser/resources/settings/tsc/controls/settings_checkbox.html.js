import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style cros-color-overrides">#outerRow{align-items:center;display:flex;min-height:var(--cr-section-two-line-min-height);width:100%}#outerRow[noSubLabel]{min-height:var(--cr-section-min-height)}cr-checkbox{margin-bottom:4px;margin-top:var(--settings-checkbox-margin-top,4px);width:100%}cr-policy-pref-indicator{margin-inline-start:var(--cr-controlled-by-spacing)}a{color:var(--cr-link-color)}</style>
<div id="outerRow" nosublabel$="[[!hasSubLabel_(subLabel, subLabelHtml)]]">
  <cr-checkbox id="checkbox" checked="{{checked}}" on-change="notifyChangedByUserInteraction" disabled="[[controlDisabled(disabled, pref.*)]]" aria-label="[[label]]">
    <div id="label">[[label]] <slot></slot></div>
    <div id="subLabel" class="cr-secondary-text">
      <div inner-h-t-m-l="[[sanitizeInnerHtml_(subLabelHtml)]]"></div>
      [[subLabel]]
    </div>
  </cr-checkbox>
  <template is="dom-if" if="[[pref.controlledBy]]">
    <cr-policy-pref-indicator pref="[[pref]]" icon-aria-label="[[label]]">
    </cr-policy-pref-indicator>
  </template>
</div>
<!--_html_template_end_-->`;
}

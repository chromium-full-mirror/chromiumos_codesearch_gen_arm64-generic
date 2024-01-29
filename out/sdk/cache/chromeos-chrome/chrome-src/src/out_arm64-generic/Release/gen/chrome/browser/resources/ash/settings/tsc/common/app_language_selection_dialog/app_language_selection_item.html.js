import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared shared-style">iron-icon[icon='settings:check-circle']{--iron-icon-fill-color:var(--cros-sys-primary);margin-inline-end:26px}#listItem{min-height:36px;align-items:center;display:flex;justify-content:space-between;flex-direction:row;padding-left:32px;cursor:pointer}</style>

<div id="listItem">
  <paper-ripple></paper-ripple>
  <div aria-selected="[[getAriaSelected_(selected)]]" role="row" tabindex$="[[index]]">
    [[getDisplayText_(item)]]
  </div>
  <iron-icon icon="settings:check-circle" hidden="[[!selected]]"></iron-icon>
</div>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style settings-shared">:host{flex-direction:column;display:flex;flex:1;padding:14px 16px}#header{font-weight:500;font-size:.75rem;user-select:none}#subheader{font-size:.6875rem;line-height:18px;user-select:none}iron-icon{height:var(--cr-icon-size);margin-bottom:10px;width:var(--cr-icon-size)}iron-icon.green{--iron-icon-fill-color:var(--google-green-700)}iron-icon.yellow{--iron-icon-fill-color:var(--google-yellow-700)}iron-icon.red{--iron-icon-fill-color:var(--google-red-600)}@media (prefers-color-scheme:dark){iron-icon.green{--iron-icon-fill-color:var(--google-green-300)}iron-icon.yellow{--iron-icon-fill-color:var(--google-yellow-300)}iron-icon.red{--iron-icon-fill-color:var(--google-red-300)}}</style>

<iron-icon id="icon" icon$="[[getStatusIcon(data.state)]]" class$="[[getColorClass(data.state)]]">
</iron-icon>
<div id="header">[[data.header]]</div>
<div id="subheader" class="cr-secondary-text">[[data.subheader]]</div>
<!--_html_template_end_-->`;
}

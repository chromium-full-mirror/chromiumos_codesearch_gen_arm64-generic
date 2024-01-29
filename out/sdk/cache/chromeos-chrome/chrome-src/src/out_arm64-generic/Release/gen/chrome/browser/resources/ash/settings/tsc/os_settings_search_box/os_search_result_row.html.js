import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">:host{width:100%}:host([selected]) [focus-row-container]{background-color:var(--cros-sys-highlight_shape)}:host(:not([selected])) [focus-row-container]:hover{background-color:var(--cros-sys-hover_on_subtle)}[focus-row-control][selectable]:focus{background-color:var(--cros-sys-ripple_neutral_on_subtle)}:host-context([dir=rtl]) #actionTypeIcon{transform:scaleX(-1)}[focus-row-container]{width:inherit}#searchResultContainer{align-items:center;display:flex;height:48px;justify-content:center;font:var(--cros-body-2-font)}#resultText{flex-grow:1;margin:var(--cr-toolbar-search-field-term-margin)}iron-icon{margin:var(--cr-toolbar-icon-margin);width:var(--cr-toolbar-icon-container-size)}b{color:var(--cros-sys-on_surface)}</style>
<div focus-row-container>
  
  <div focus-row-control focus-type="rowWrapper" id="searchResultContainer" on-click="onSearchResultSelected" on-keypress="onKeyPress_" aria-disabled="true" selectable>
    <iron-icon id="resultIcon" icon="[[getResultIcon_(searchResult)]]">
    </iron-icon>
    <div id="resultText" aria-hidden="true" inner-h-t-m-l="[[getResultInnerHtml_(searchResult)]]">
    </div>
    <iron-icon id="actionTypeIcon" icon="[[getActionTypeIcon_(searchResult)]]">
    </iron-icon>
  </div>
</div>
<!--_html_template_end_-->`;
}

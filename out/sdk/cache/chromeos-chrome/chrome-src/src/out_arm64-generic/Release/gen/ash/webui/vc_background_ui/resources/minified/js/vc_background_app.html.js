import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style>:host{--app-breadcrumb-height:56px}div#breadcrumbArea{background-color:var(--cros-sys-app_base_shaded);display:grid;grid-template-areas:'. . breadcrumb . .';grid-template-columns:1fr 10px minmax(568px,920px) 10px 1fr;grid-template-rows:var(--app-breadcrumb-height);position:sticky;top:0;width:100%;z-index:3}sea-pen-router{--sea-pen-router-min-height:calc(100vh - var(--app-breadcrumb-height))}vc-background-breadcrumb{grid-area:breadcrumb}</style>
<div>
  
  <iron-location path="{{path_}}" query="{{query_}}" dwell-time="200">
  </iron-location>
  <iron-query-params params-object="{{queryParams_}}" params-string="{{query_}}">
  </iron-query-params>
  <div id="breadcrumbArea">
    <vc-background-breadcrumb path="[[path_]]" sea-pen-template-id="[[queryParams_.seaPenTemplateId]]">
    </vc-background-breadcrumb>
  </div>
  <sea-pen-router base-path="" on-sea-pen-terms-dialog-refuse="onRefuseSeaPenTermsOfService_"></sea-pen-router>
</div>
<!--_html_template_end_-->`}
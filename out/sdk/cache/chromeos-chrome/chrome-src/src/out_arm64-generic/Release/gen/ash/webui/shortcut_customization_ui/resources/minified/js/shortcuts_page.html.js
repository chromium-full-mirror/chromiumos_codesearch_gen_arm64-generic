import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="shortcut-customization-shared cr-shared-style">:host-context(body.jelly-enabled) #contentWrapper{background-color:var(--cros-sys-app_base);border-radius:16px}#contentWrapper{align-items:center;display:flex;flex-direction:column;overflow:auto;padding-block-start:20px;width:100%}#contentWrapper accelerator-subsection:not(:first-child)::part(container){margin-block-start:20px}#container{display:flex;flex-direction:column;height:calc(100% - 20px)}</style>

<div id="container">
  <div id="contentWrapper">
    <template id="subsections" is="dom-repeat" items="[[subcategories]]">
      <accelerator-subsection category="[[initialData.category]]" subcategory="[[item]]">
      </accelerator-subsection>
      </template>
  </div>
</div>
<!--_html_template_end_-->`}
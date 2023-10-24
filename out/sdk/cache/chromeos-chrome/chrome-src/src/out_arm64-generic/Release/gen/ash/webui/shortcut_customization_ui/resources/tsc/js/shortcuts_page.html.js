import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="shortcut-customization-shared cr-shared-style">
  :host-context(body.jelly-enabled) #container {
    background-color: var(--cros-sys-app_base);
    border-radius: 16px 16px 0 0;
  }

  #container {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    width: 100%;
  }

  #container accelerator-subsection:not(:first-child)::part(container) {
    margin-top: 20px;
  }
</style>

<div id="container">
  <template id="subsections" is="dom-repeat" items="[[subcategories]]">
    <accelerator-subsection category="[[initialData.category]]"
        subcategory="[[item]]">
    </accelerator-subsection>
  </template>
</div>
<!--_html_template_end_-->`;
}

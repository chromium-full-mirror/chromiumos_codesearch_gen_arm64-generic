import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-icons">#lightMode{--cr-icon-image:url(chrome://resources/cr_components/customize_color_scheme_mode/light_mode.svg)}#darkMode{--cr-icon-image:url(chrome://resources/cr_components/customize_color_scheme_mode/dark_mode.svg)}#systemMode{--cr-icon-image:url(chrome://resources/cr_components/customize_color_scheme_mode/system_mode.svg)}</style>
<cr-segmented-button selected="[[currentMode_.id]]" group-aria-label="[[i18n('colorSchemeModeLabel')]]" on-selected-changed="onSelectedChanged_">
  <template is="dom-repeat" id="options" items="[[colorSchemeModeOptions_]]">
      <cr-segmented-button-option name="[[item.id]]">
        <div id="[[item.id]]" class="cr-icon" slot="prefix-icon"></div>
        [[i18n(item.id)]]
      </cr-segmented-button-option>
  </template>
</cr-segmented-button><!--_html_template_end_-->`;
}

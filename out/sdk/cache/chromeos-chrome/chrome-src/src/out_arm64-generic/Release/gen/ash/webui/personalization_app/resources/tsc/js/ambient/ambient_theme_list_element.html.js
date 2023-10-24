import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="common">:host{--theme-item-padding:24px;--theme-item-width:156px}iron-list{width:calc(var(--theme-item-width)*3 + var(--theme-item-padding)*2)}@media(min-width:720px){iron-list{width:calc(var(--theme-item-width)*4 + var(--theme-item-padding)*3)}}</style>

<h3 id="ambientThemeDescription" class="ambient-subpage-element-title">
  $i18n{ambientModeAnimationTitle}
</h3>
<iron-list items="[[ambientThemes]]" as="theme" grid id="grid" role="radiogroup" aria-describedby="ambientThemeDescription">
  <template>
    <ambient-theme-item tabindex$="[[tabIndex]]" role="radio" ambient-theme="[[theme]]" aria-checked$="[[getAriaChecked_(theme, selectedAmbientTheme)]]">
      </ambient-theme-item>
  </template>
</iron-list>
<!--_html_template_end_-->`;
}

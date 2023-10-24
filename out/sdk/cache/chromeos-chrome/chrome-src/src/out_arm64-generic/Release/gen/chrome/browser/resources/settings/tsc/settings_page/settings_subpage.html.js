import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style settings-shared">:host{box-sizing:border-box;display:block;left:0;min-height:calc(100vh - var(--cr-toolbar-height) - var(--cr-toolbar-padding-top,0px));padding-bottom:60px;position:absolute;right:0;top:0}:host(:not(.multi-card)){background-color:var(--cr-card-background-color);box-shadow:var(--cr-card-shadow)}@media (forced-colors:active){:host(:not(.multi-card)){border-inline-end:var(--cr-border-hcm);border-inline-start:var(--cr-border-hcm)}}#headerLine{min-height:40px;padding-bottom:24px;padding-top:8px}#learnMore{align-items:center;display:flex;height:var(--cr-icon-ripple-size);justify-content:center;margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);position:relative;width:var(--cr-icon-ripple-size)}#title-icon{height:36px;width:36px}#favicon,#title-icon{margin-inline-end:12px;margin-inline-start:2px}#closeButton{margin-inline-end:10px;margin-inline-start:-10px}paper-spinner-lite{height:var(--cr-icon-size);width:var(--cr-icon-size)}h1{flex:1}cr-search-field{margin-inline-start:16px}</style>
    <div class="cr-row first" id="headerLine">
      <cr-icon-button class="icon-arrow-back" id="closeButton" hidden="[[hideCloseButton]]" on-click="onBackClick_" aria-label$="[[getBackButtonAriaLabel_(pageTitle)]]" aria-roledescription$="[[getBackButtonAriaRoleDescription_(pageTitle)]]">
      </cr-icon-button>
      <template is="dom-if" if="[[titleIcon]]">
        <img id="title-icon" src="[[titleIcon]]" aria-hidden="true">
      </template>
      <template is="dom-if" if="[[faviconSiteUrl]]">
        <site-favicon id="favicon" url="[[faviconSiteUrl]]" aria-hidden="true">
        </site-favicon>
      </template>
      <h1 class="cr-title-text">[[pageTitle]]</h1>
      <slot name="subpage-title-extra"></slot>
      <template is="dom-if" if="[[learnMoreUrl]]">
        <cr-icon-button iron-icon="cr:help-outline" dir="ltr" aria-label="[[getLearnMoreAriaLabel_(pageTitle)]]" on-click="onHelpClick_">
        </cr-icon-button>
      </template>
      <template is="dom-if" if="[[searchLabel]]">
        <cr-search-field label="[[searchLabel]]" on-search-changed="onSearchChanged_" clear-label="$i18n{clearSearch}">
        </cr-search-field>
      </template>
      <template is="dom-if" if="[[showSpinner]]">
        <paper-spinner-lite active title$="[[spinnerTitle]]">
        </paper-spinner-lite>
      </template>
    </div>
    <slot></slot>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <style>:host{display:flex;flex-direction:column;outline:0;position:relative}#header{display:flex;justify-content:space-between;padding-inline-end:var(--cr-section-padding)}#header .title{color:var(--cr-primary-text-color);font-size:108%;font-weight:400;letter-spacing:.25px;margin-bottom:12px;margin-top:var(--cr-section-vertical-margin);outline:0;padding-bottom:4px;padding-top:8px}#feedback{margin-top:var(--cr-section-vertical-margin)}:host(:not(.expanded)) #card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);flex:1;overflow:hidden}@media (forced-colors:active){:host(:not(.expanded)) #card{border:var(--cr-border-hcm)}}:host(.expanded) #header,:host([hidden-by-search]){display:none}</style>
    <div id="header">
      <h2 id="title" class="title" tabindex="-1" aria-hidden$="[[getTitleHiddenStatus_(pageTitle)]]">[[pageTitle]]</h2>
      <template is="dom-if" if="[[showSendFeedbackButton]]">
        <cr-icon-button id="feedback" iron-icon="settings:feedback" dir="ltr" aria-labelledby="title" aria-roledescription="$i18n{sendFeedbackButton}" on-click="onSendFeedbackClick_">
        </cr-icon-button>
      </template>
    </div>
    <div id="card">
      <slot></slot>
    </div>
<!--_html_template_end_-->`;
}

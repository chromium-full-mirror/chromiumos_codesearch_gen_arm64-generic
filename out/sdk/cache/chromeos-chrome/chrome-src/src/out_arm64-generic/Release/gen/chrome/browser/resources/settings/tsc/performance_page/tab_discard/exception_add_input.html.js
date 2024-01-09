import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><cr-input id="input" label="$i18n{addSite}" aria-label$="$i18n{addSiteTitle}" placeholder="example.com" value="{{rule}}" on-input="validate" error-message="[[errorMessage]]" invalid="[[inputInvalid]]" spellcheck="false" autofocus>
</cr-input>
<!--_html_template_end_-->`;
}

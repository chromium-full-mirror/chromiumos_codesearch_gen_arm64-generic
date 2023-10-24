import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->    <iron-location query="{{urlQuery_}}" path="{{path_}}"></iron-location>
    <iron-query-params params-string="{{query_}}" params-object="{{queryParams_}}"></iron-query-params>
<!--_html_template_end_-->`;
}

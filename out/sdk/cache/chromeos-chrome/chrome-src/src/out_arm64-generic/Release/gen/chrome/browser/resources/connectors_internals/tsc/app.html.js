import { getTrustedHTML } from '//resources/js/static_types.js';
export function getTemplate() {
    return getTrustedHTML `<!--_html_template_start_--><style>.otr #disabled-message,.valid-context #tabs-root{display:block}.otr #tabs-root,.valid-context #disabled-message{display:none}</style>
<div>
  <h1>Enterprise Connectors</h1>
</div>
<div id="main-root">
  <div id="tabs-root"></div>
  <p id="disabled-message">
    Enterprise Connectors are disabled in off-the-record contexts.
  </p>
</div><!--_html_template_end_-->`;
}

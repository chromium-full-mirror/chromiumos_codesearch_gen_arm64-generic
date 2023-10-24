import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><h1>Search (query: [[query]])</h1>
<p>Extracted keywords: [[keywords]]</p>
<launcher-results-table id="searchResults"></launcher-results-table>

<h1>Recent files</h1>
<launcher-results-table id="recentFiles"></launcher-results-table>

<h1>Recent apps</h1>
<launcher-results-table id="recentApps"></launcher-results-table>
<!--_html_template_end_-->`;
}

import { getTrustedHTML } from '//resources/js/static_types.js';
export function getTemplate() {
    return getTrustedHTML `<!--_html_template_start_--><div id="ml-sync-batch-url-scoring-disabled-warning" class="section">
  Must enable sync ML scoring.
  <a href="chrome://flags/#omnibox-ml-url-scoring">
    chrome://flags/#omnibox-ml-url-scoring
  </a>
</div>

<ml-calculator class="section"></ml-calculator>

<ml-table class="section"></ml-table>
<!--_html_template_end_-->`;
}

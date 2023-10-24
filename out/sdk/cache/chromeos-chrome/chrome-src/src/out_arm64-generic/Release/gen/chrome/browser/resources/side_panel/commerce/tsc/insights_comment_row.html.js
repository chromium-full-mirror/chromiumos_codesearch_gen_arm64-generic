import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{display:flex}#commentRow{display:inline;max-width:100%;color:var(--cr-secondary-text-color);font-size:11px;line-height:20px}:host-context([chrome-refresh-2023]) #commentRow{line-height:16px}.link{color:var(--cr-link-color);margin-left:4px;cursor:pointer}</style>

<div id="commentRow">
  <span id="comment">$i18n{historyDescription}</span>
  <a href="#" hidden="[[!shouldShowFeedback_]]" on-click="showFeedback_" class="link">$i18n{feedback}</a>
</div><!--_html_template_end_-->`;
}

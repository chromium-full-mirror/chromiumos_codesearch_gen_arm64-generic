import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{padding:3px}:host(.warning-log){background-color:#fffcef}:host(.error-log){background-color:#fff1f1}:host(.verbose-log){background-color:#ebebeb}:host(.default-log){background-color:#fff}#log-container{color:#888;display:flex;font-size:10px;padding:6px}#flex{flex:1}#text{display:inline-block;text-align:start;width:100%}</style>
<div>
  <p id="text">[[logMessage.text]]</p>
  <div id="log-container">
    <span>[[logMessage.time]]</span>
    <div id="flex"></div>
    <span>[[getFilenameWithLine_(logMessage.file, logMessage.line)]]</span>
  </div>
</div>
<!--_html_template_end_-->`;
}

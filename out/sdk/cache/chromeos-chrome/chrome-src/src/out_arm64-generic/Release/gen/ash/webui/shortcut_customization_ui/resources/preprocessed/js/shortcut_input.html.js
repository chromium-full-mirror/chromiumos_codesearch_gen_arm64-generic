import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
  return html`<!--_html_template_start_--><div>
  <cr-input id="input" placeholder="Type text"
      value="[[computeText(shortcut, pendingShortcut)]]">
  </cr-input>
</div><!--_html_template_end_-->`;
}
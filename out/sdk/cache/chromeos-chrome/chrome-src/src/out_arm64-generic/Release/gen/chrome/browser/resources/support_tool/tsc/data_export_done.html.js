import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_-->

<style include="support-tool-shared action-link">#check-icon{--iron-icon-fill-color:var(--google-green-500);height:20px;width:20px}#path-link{margin-inline-start:8px;margin-top:8px}</style>

<h1 tabindex="0">$i18n{dataExportDonePageTitle}</h1>
<div class="support-tool-title" tabindex="0">
  $i18n{dataExportedText}
</div>
<div>
  <iron-icon id="check-icon" icon="cr:check-circle"></iron-icon>
  <a id="path-link" on-click="onFilePathClicked_" href="#" is="action-link" tabindex="0">
    [[path_]]
  </a>
</div>
<!--_html_template_end_-->`;
}

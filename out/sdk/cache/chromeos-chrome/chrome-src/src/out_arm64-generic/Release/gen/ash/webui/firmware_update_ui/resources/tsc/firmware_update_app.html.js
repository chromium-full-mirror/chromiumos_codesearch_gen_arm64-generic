import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="firmware-shared-fonts firmware-shared">.header-container{align-items:flex-end;display:flex;height:68px;margin-bottom:24px}</style>
<div id="container" class="firmware-default-font">
  <div class="header-container">
    <h1 id="header" class="firmware-header-font">
      [[i18n('appTitle')]]
    </h1>
  </div>
  <peripheral-updates-list></peripheral-updates-list>
  <firmware-update-dialog></firmware-update-dialog>
  <firmware-confirmation-dialog></firmware-confirmation-dialog>
</div>
<!--_html_template_end_-->`;
}

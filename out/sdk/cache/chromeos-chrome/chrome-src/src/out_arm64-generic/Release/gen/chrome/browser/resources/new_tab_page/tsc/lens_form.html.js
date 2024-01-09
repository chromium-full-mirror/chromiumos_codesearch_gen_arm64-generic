import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>#lensForm{display:none}</style>

<div id="lensForm">
  <form id="fileForm" action="[[uploadFileAction_]]" enctype="multipart/form-data" method="POST">
    <input id="fileInput" name="encoded_image" type="file" accept="[[supportedFileTypes_]]" on-change="handleFileInputChange_">
  </form>
  <form id="urlForm" action="[[uploadUrlAction_]]" method="GET">
    <input name="url" value="[[uploadUrl_]]">
    <input name="ep" value="[[uploadUrlEntrypoint_]]">
    <input name="hl" value="[[language_]]">
    <input name="st" value="[[startTime_]]"><input>
    <input name="cd" value="[[clientData_]]"><input>
    <input name="re" value="[[renderingEnvironment_]]">
    <input name="s" value="[[chromiumSurface_]]">
  </form>
  
  <iframe src="https://lens.google.com/gen204" style="display:none" alt="">
  </iframe>
</div>
<!--_html_template_end_-->`;
}

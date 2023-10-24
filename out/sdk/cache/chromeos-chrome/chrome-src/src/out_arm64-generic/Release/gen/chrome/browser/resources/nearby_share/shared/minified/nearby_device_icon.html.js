import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style>:host{background-color:var(--nearby-device-icon-background-color,var(--cros-sys-primary_container,var(--google-blue-50)));border-radius:50%;display:flex}#icon{height:var(--nearby-device-icon-size,24px);margin:auto;width:var(--nearby-device-icon-size,24px)}</style>

<iron-icon id="icon" icon="[[getShareTargetIcon_(shareTarget)]]">
</iron-icon>
<!--_html_template_end_-->`}
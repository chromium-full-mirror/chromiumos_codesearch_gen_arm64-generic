import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_-->

<style include="oobe-common-styles oobe-dialog-host-styles"></style>

<oobe-adaptive-dialog id="mainCurtainDialog" role="dialog" aria-label="$i18n{curtainTitle}">
  <iron-icon slot="icon" icon="oobe-32:enterprise"></iron-icon>
  <h1 slot="title" role="alert">$i18n{curtainTitle}</h1>
  <div slot="subtitle" role="alert">$i18n{curtainDescription}</div>
  <div slot="content" class="flex layout vertical center center-justified">
    <iron-icon icon="remote_maintenance:image" class="illustration-jelly">
    </iron-icon>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`}
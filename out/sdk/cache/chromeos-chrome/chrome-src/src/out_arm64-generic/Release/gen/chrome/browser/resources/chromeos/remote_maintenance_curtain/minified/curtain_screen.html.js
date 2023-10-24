import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_-->

<style include="oobe-common-styles oobe-dialog-host-styles"></style>

<oobe-adaptive-dialog id="mainCurtainDialog" role="dialog" aria-label="$i18n{curtainTitle}">
  <iron-icon slot="icon" icon="oobe-32:enterprise"></iron-icon>
  <h1 slot="title">$i18n{curtainTitle}</h1>
  <div slot="subtitle">$i18n{curtainDescription}</div>
  <div slot="content" class="flex layout vertical center center-justified">
    <picture>
      <source srcset="images/admin_control_dark.svg" media="(prefers-color-scheme: dark)" class="oobe-illustration">
      <img class="illustration" src="images/admin_control_light.svg">
    </picture>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`}
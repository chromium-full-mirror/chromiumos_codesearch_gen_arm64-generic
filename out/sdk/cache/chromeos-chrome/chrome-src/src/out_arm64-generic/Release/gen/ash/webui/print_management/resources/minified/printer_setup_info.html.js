import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="print-management-shared print-management-fonts
    cros-color-overrides">:host-context(body:not(.jelly-enabled)){--cros-sys-illo-base:var(--cros-illustration-color-base-color);--cros-sys-illo-color1-2:var(--cros-illustration-color-1-shade-2);--cros-sys-illo-color3:var(--cros-illustration-color-3);--cros-sys-illo-color4:var(--cros-illustration-color-4);--cros-sys-illo-color5:var(--cros-illustration-color-5);--cros-sys-illo-secondary:var(--cros-illustration-secondary-color)}:host-context(body:not(.jelly-enabled)) .message-detail{color:var(--cros-text-color-secondary);font:var(--print-management-default-font-weight) 14px/20px var(--print-management-title-font-family)}:host-context(body:not(.jelly-enabled)) .message-heading{color:var(--cros-text-color-secondary);font:var(--print-management-header-font-weight) 18px/24px var(--print-management-title-font-family)}.container{align-items:center;display:flex;flex-direction:column;gap:16px;margin-block-start:16px;margin-inline:auto;width:368px;text-align:center}.message-container{display:flex;flex-direction:column;gap:8px}.message-detail{color:var(--cros-sys-on_surface_variant);font:var(--cros-body-1-font);margin-block:0}.message-heading{color:var(--cros-sys-on_surface_variant);font:var(--cros-display-7-font);margin-block:0}cr-button{font:var(--cros-button-2-font)}iron-icon{--iron-icon-height:200px;--iron-icon-width:268px;margin-inline:auto}</style>
<div class="container">
  <iron-icon icon="print-management:empty-state"></iron-icon>
  <div class="message-container">
    <h2 class="message-heading">[[i18n('emptyStateNoJobsMessage')]]</h2>
    <p class="message-detail">[[i18n('emptyStatePrinterSettingsMessage')]]</p>
  </div>
  <cr-button on-click="onManagePrintersClicked">
    [[i18n('managePrintersButtonLabel')]]
  </cr-button>
</div>
<!--_html_template_end_-->`}
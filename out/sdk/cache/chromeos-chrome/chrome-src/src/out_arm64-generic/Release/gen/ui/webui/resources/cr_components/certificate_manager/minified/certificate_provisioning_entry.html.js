import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="certificate-shared iron-flex">.cert-box{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:48px;padding:0 20px}</style>
<div class="cert-box">
  <div class="flex" tabindex="0">[[model.certProfileName]]</div>
  <cr-icon-button class="icon-more-vert" id="dots" title="[[i18n('moreActions')]]" on-click="onDotsClick_">
  </cr-icon-button>
  <cr-lazy-render id="menu">
    <template>
      <cr-action-menu role-description="[[i18n('menu')]]">
        <button class="dropdown-item" id="details" on-click="onDetailsClick_">
          [[i18n('certificateProvisioningDetails')]]
        </button>
      </cr-action-menu>
    </template>
  </cr-lazy-render>
</div>
<!--_html_template_end_-->`}
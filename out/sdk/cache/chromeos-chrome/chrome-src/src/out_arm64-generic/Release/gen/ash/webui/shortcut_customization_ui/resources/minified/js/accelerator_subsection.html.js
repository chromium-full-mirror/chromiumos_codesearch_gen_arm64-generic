import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="shortcut-customization-shared">#container{border-spacing:0;width:var(--cr-toolbar-field-width)}#title{align-items:center;color:var(--cros-text-color-primary);display:flex;font:var(--cros-body-2-font);font-weight:700;height:48px}accelerator-row:not(:last-of-type){border-bottom:var(--cr-separator-line)}#rowList{display:flex;flex-direction:column;width:100%}thead{display:none}#title-container{align-items:center;display:flex}iron-icon[icon='shortcut-customization:lock']{--iron-icon-width:13px;--iron-icon-height:13px}</style>

<table id="container" part="container">
    <caption>
      <div id="title-container">
        <div id="title">[[title]]</div>
        <div class="lock-icon-container" hidden="[[!shouldShowLockIcon()]]" aria-label="[[i18n('lock')]]" role="img">
          <iron-icon icon="shortcut-customization:lock"></iron-icon>
        </div>
      </div>
    </caption>
    <thead>
      
      <tr>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody id="rowList">
      <template id="list" is="dom-repeat" items="[[accelRowDataArray]]">
        <accelerator-row accelerator-infos="[[getSortedAccelerators(item.acceleratorInfos)]]" action="[[item.layoutInfo.action]]" description="[[item.layoutInfo.description]]" layout-style="[[item.layoutInfo.style]]" source="[[item.layoutInfo.source]]">
        </accelerator-row>
      </template>
    </tbody>
</table><!--_html_template_end_-->`}
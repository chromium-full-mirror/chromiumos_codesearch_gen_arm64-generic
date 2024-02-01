import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style iron-flex">[slot=page-body]{height:282px;margin-top:-20px}#container{height:230px;margin-top:20px;overflow-x:hidden;overflow-y:auto}[scrollable] iron-list>:not(.no-outline):focus{background-color:transparent!important}</style>
  <base-page>
    <div slot="page-body">
      <localized-link id="profileListMessage" localized-string="[[i18nAdvanced('profileListPageMessageWithLink')]]" on-link-clicked="enterManuallyClicked_">
      </localized-link>
      <div id="container" class="layout vertical flex" scrollable>
        <iron-list id="profileList" items="[[pendingProfileProperties]]" scroll-target="container" preserve-focus selection-enabled selected-item="{{selectedProfileProperties}}" role="listbox">
          <template>
            <profile-discovery-list-item profile-properties="[[item]]" selected="[[isProfilePropertiesSelected_(item, selectedProfileProperties)]]" tabindex="0" role="option" aria-selected="[[isProfilePropertiesSelected_(item, selectedProfileProperties)]]">
            </profile-discovery-list-item>
          </template>
        </iron-list>
      </div>
    </div>
  </base-page>
<!--_html_template_end_-->`;
}

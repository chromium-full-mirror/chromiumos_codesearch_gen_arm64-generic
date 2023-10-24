import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">#password-type-radio-group{width:auto;padding-inline-end:0}.two-elements-left-right{display:flex;flex-direction:row;justify-content:space-between}:host{display:block}:host>div{width:100%}</style>
<div>
  <div class="two-elements-left-right">
    <div>
      $i18n{lockScreenPasswordLabel}
      <template is="dom-if" if="[[hasNoPassword_(hasGaiaPassword_, hasLocalPassword_)]]">
        <div class="secondary" id="setupPasswordSecondaryLabel">
          $i18n{lockScreenPasswordDescription}
        </div>
      </template>
    </div>
    <template is="dom-if" if="[[hasNoPassword_(hasGaiaPassword_, hasLocalPassword_)]]">
      <cr-button aria-describedby="setupPasswordSecondaryLabel" disabled="disabled">
        $i18n{lockScreenSetupPasswordButton}
      </cr-button>
    </template>
  </div>
  <template is="dom-if" if="[[hasPassword_(hasGaiaPassword_, hasLocalPassword_)]]" restamp>
    <cr-radio-group nested-selectable="true" class="list-frame" id="password-type-radio-group" selected="{{selectedPasswordType_}}">
      <div class="list-item underbar two-elements-left-right">
        <cr-radio-button name="local" disabled="disabled" label="$i18n{lockScreenDevicePasswordOptionLabel}">
        </cr-radio-button>
        <template is="dom-if" if="[[hasLocalPassword_]]">
          <cr-button on-click="openSetLocalPasswordDialog_">
            $i18n{lockScreenChangePasswordButton}
          </cr-button>
        <template>
      </template></template></div>
      <cr-radio-button name="gaia" disabled="disabled" class="list-item" label="$i18n{lockScreenGoogleAccountPasswordOptionLabel}">
      </cr-radio-button>
    </cr-radio-group>
  </template>
  <settings-set-local-password-dialog id="setLocalPasswordDialog" auth-token="[[authToken]]">
  </settings-set-local-password-dialog>
</div>
<!--_html_template_end_-->`;
}

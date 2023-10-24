import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">iron-list>:not(:first-of-type){border-top:var(--cr-separator-line)}:host{--cr-section-min-height:64px}</style>
<div id="container" class="layout vertical flex" scrollable no-bottom-scroll-border>
  <iron-list id="savedDevicesList" items="[[devices]]" scroll-target="container" preserve-focus>
    <template>
      <os-settings-saved-devices-list-item device="[[item]]" tabindex$="[[tabIndex]]" item-index="[[index]]" last-focused="{{lastFocused_}}" iron-list-tab-index="[[tabIndex]]" list-size="[[devices.length]]">
      </os-settings-saved-devices-list-item>
    </template>
  </iron-list>
</div>
<!--_html_template_end_-->`;
}

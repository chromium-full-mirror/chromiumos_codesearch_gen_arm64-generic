import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared">:host{--cr-section-min-height:64px}iron-list>:not(:first-of-type){border-top:var(--cr-separator-line)}</style>
<div id="container" class="layout vertical flex" scrollable no-bottom-scroll-border>
  <iron-list items="[[devices]]" scroll-target="container" preserve-focus>
    <template>
      <os-settings-paired-bluetooth-list-item device="[[item]]" tabindex$="[[tabIndex]]" last-focused="{{lastFocused_}}" iron-list-tab-index="[[tabIndex]]" item-index="[[index]]" list-size="[[devices.length]]" on-managed-tooltip-state-change="onManagedTooltipStateChange_">
      </os-settings-paired-bluetooth-list-item>
    </template>
  </iron-list>

  <paper-tooltip id="tooltip" manual-mode position="top" aria-hidden="true">
    $i18n{bluetoothManaged}
  </paper-tooltip>
</div><!--_html_template_end_-->`;
}

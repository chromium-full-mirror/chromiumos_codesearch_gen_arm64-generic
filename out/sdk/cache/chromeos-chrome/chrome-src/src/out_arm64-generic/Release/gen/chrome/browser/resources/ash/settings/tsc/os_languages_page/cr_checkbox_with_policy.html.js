import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cros-color-overrides">:host{display:flex}.flex{flex:1;flex-basis:.000000001px}</style>


<cr-checkbox id="checkbox" class="flex" checked="{{checked}}" disabled="[[disabled]]" aria-description="[[ariaDescription]]" tab-index="[[getCheckboxTabIndex_(disabled, tabIndex)]]">
  <slot></slot>
</cr-checkbox>

<template is="dom-if" if="[[disabled]]">
  <iron-icon id="icon" class="policy" icon="cr20:domain" describedby="tooltip" tab-index="[[getIconTabIndex_(disabled, tabIndex)]]">
  </iron-icon>
  <paper-tooltip for="icon" id="tooltip" role="tooltip" tabindex="-1" position="left">
    [[policyTooltip]]
  </paper-tooltip>
</template>
<!--_html_template_end_-->`;
}

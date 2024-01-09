import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="settings-shared cr-radio-button-style">:host([disabled]){opacity:1}:host([disabled]) #labelWrapper,:host([disabled]) .disc-wrapper{opacity:var(--cr-disabled-opacity)}cr-policy-pref-indicator{margin-inline-start:var(--cr-controlled-by-spacing);pointer-events:all}</style>

<div role="presentation" class="disc-wrapper" id="button" tabindex$="[[buttonTabIndex_]]" on-keydown="onInputKeydown_">
  <div class="disc-border"></div>
  <div class="disc"></div>
  <div id="overlay"></div>
</div>

<div id="labelWrapper" role="presentation">
  <span>[[label]]</span>
</div>

<template is="dom-if" if="[[disabled]]" restamp>
  <cr-policy-indicator indicator-type="userPolicy" icon-aria-label="[[label]]" on-click="onIndicatorClick_">
  </cr-policy-indicator>
</template>
<!--_html_template_end_-->`;
}

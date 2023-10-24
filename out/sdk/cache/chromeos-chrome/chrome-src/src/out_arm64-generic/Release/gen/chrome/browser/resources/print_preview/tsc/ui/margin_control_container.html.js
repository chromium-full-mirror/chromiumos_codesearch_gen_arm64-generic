import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{display:block;left:0;position:absolute;top:0}:host([dragging_=dragging-vertical]){cursor:ns-resize}:host([dragging_=dragging-horizontal]){cursor:ew-resize}</style>
<template is="dom-repeat" items="[[marginSides_]]">
  <print-preview-margin-control side="[[item]]" invisible="[[invisible_]]" disabled="[[controlsDisabled_(state, invisible_)]]" translate-transform="[[translateTransform_]]" clip-size="[[clipSize_]]" measurement-system="[[measurementSystem]]" scale-transform="[[scaleTransform_]]" page-size="[[pageSize]]" on-pointerdown="onPointerDown_" on-text-change="onTextChange_" on-text-blur="onTextBlur_" on-text-focus="onTextFocus_" on-transition-end="onTransitionEnd_">
  </print-preview-margin-control>
</template>
<!--_html_template_end_-->`;
}

import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-shared-style">:host{align-items:center;display:flex}span{background:var(--google-grey-200);border-radius:50%;display:inline-block;height:8px;margin:0 4px;width:8px}span.active{background:var(--google-blue-600)}.screen-reader-only{clip:rect(0,0,0,0);position:fixed}@media (prefers-color-scheme:dark){span{background:var(--google-grey-500)}span.active{background:var(--google-blue-300)}}</style>
<template is="dom-repeat" items="[[dots_]]">
  <span class$="[[getActiveClass_(index, model.active)]]"></span>
</template>
<div class="screen-reader-only">
  [[computeA11yLabel_(model.active, model.total)]]
</div>
<!--_html_template_end_-->`;
}

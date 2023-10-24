import { html } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
export function getTemplate() {
    return html `<!--_html_template_start_--><style>:host{align-items:center;box-sizing:border-box;color:var(--google-grey-900);cursor:default;display:flex;height:48px;padding:1em;width:100%}:host(:hover){background-color:var(--google-grey-200)}:host(.focused){background-color:var(--google-grey-200)}:host(.focused) #focus-indicator{display:block}.annotation{color:var(--google-grey-700);margin-inline-start:auto}.title{overflow:hidden;text-overflow:ellipsis}.title-piece{white-space:pre}.match{font-weight:600}#focus-indicator{background-color:var(--google-blue-600);border-radius:3px;display:none;height:48px;margin-inline-start:-16px;position:absolute;width:6px}@media (prefers-color-scheme:dark){:host{color:#fff}:host(:hover){background-color:#35363a}:host(.focused){background-color:rgba(var(--google-grey-900-rgb),6%)}.annotation{color:var(--google-grey-500)}iron-icon{--iron-icon-fill-color:var(--google-grey-500)}#focus-indicator{background-color:var(--google-blue-300)}}</style>
<div id="focus-indicator"></div>
<span class="title">
<template is="dom-repeat" items="[[computeMatchSpans_(model.title, model.matchedRanges)]]" as="span">
  <span class$="title-piece
      [[getClassForMatch_(span.isMatch)]]">[[span.text]]</span>
</template>
</span>
<span class="annotation">[[model.annotation]]</span>
<!--_html_template_end_-->`;
}

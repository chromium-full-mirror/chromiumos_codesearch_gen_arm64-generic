import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_-->

<style include="support-tool-shared cr-shared-style">.data-collector-list{margin-top:-8px}</style>

<h1 tabindex="0">$i18n{dataSelectionPageTitle}</h1>
<iron-list class="data-collector-list" items="[[dataCollectors_]]">
  <template>
    <cr-checkbox class="data-collector-checkbox" checked="{{item.isIncluded}}" tabindex="0">
      [[item.name]]
    </cr-checkbox>
  </template>
</iron-list>
<cr-button class="select-all-button" id="selectAllButton" on-click="onSelectAllClick_">
  [[getSelectAllButtonLabel_(allSelected_)]]
</cr-button>

<template is="dom-if" if="[[enableScreenshot_]]" restamp>
  <screenshot-element id="screenshot"></screenshot-element>
</template>
<!--_html_template_end_-->`}
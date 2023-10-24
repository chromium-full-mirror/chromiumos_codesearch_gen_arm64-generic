import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style include="cr-hidden-style">#content{border:none;height:100%;width:100%}</style>
<template is="dom-if" if="[[url_]]">
  <iframe id="content" src="[[url_]]"></iframe>
</template>
<!--_html_template_end_-->`}
import{html}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import"chrome://resources/cr_elements/cr_shared_vars.css.js";const styleMod=document.createElement("dom-module");styleMod.appendChild(html`
  <template>
    <style>
h1{color:var(--cr-primary-text-color);font-size:20px;font-weight:400;margin-bottom:18px}.support-tool-title{color:var(--cr-title-text-color);font-size:14px;line-height:20px;margin-bottom:8px;margin-top:8px}.navigation-buttons{float:right;margin-bottom:20px;margin-top:32px;position:relative;right:0}.support-case-id{height:32px;margin-bottom:3px;width:248px}.data-collector-checkbox{padding-bottom:8px;padding-top:8px}.data-collector-list{width:520px}.select-all-button{margin-top:8px}
    </style>
  </template>
`.content);styleMod.register("support-tool-shared");
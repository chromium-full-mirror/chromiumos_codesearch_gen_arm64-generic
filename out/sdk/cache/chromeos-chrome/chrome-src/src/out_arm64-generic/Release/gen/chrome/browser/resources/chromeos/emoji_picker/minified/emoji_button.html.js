import{html}from"//resources/polymer/v3_0/polymer/polymer_bundled.min.js";export function getTemplate(){return html`<!--_html_template_start_--><style>:host{--emoji-background:transparent;height:var(--emoji-size);position:relative;width:var(--emoji-size)}#emoji-button{background:var(--emoji-background);border:none;border-radius:50%;cursor:pointer;display:block;font-family:'Noto Color Emoji';font-size:19px;height:100%;line-height:var(--emoji-size);outline:0;padding:0;text-align:center;user-select:none;width:100%}#emoji-button:active,#emoji-button:focus{outline-color:var(--emoji-picker-focus-ring-color);outline-style:solid;outline-width:2px}#emoji-button:disabled{color:red;cursor:default}#emoji-button:hover{background-color:var(--emoji-hover-background)}.has-variants::after{background:linear-gradient(315deg,var(--google-grey-500) 4px,var(--emoji-background) 4px,var(--emoji-background));content:'';display:block;height:var(--emoji-size);position:relative;top:calc(0 - var(--emoji-size));width:var(--emoji-size)}#tooltip{--paper-tooltip-background:var(--cros-tooltip-background-color);--paper-tooltip-delay-in:var(--emoji-tooltip-delay-in);--paper-tooltip-delay-out:var(--emoji-tooltip-delay-out);--paper-tooltip-duration-in:0;--paper-tooltip-duration-out:0;--paper-tooltip-opacity:1;--paper-tooltip-text-color:var(--cros-tooltip-label-color)}#tooltip::part(tooltip){box-shadow:var(--cros-elevation-1-shadow,--cr-elevation-1);font:var(--cros-annotation-1-font);margin:4px;padding:4px 8px 4px 8px;white-space:nowrap}</style>

<button id="emoji-button" on-click="onClick" disabled="[[disabled]]" aria-label="[[getLabel()]]">
  [[emoji]]
</button>
<template is="dom-if" if="[[!variant]]">
  <paper-tooltip id="tooltip" for="emoji-button" fit-to-visible-bounds part="tooltip" offset="8">
    [[tooltip]]
  </paper-tooltip>
</template>
<!--_html_template_end_-->`}
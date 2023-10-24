import{html,PolymerElement,Polymer,useShadow,dom,dashToCamelCase,mixinBehaviors,Base,dedupingMixin,FlattenedNodesObserver,afterNextRender,Templatizer,OptionalMutableDataBehavior,animationFrame,microTask,idlePeriod,flush,Debouncer,enqueueDebouncer,matches,translate}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{loadTimeData}from"chrome://resources/js/load_time_data.js";import{sendWithPromise,addWebUiListener,removeWebUiListener}from"chrome://resources/js/cr.js";import{mojo}from"chrome://resources/mojo/mojo/public/js/bindings.js";import"./strings.m.js";
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$8=html`
<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100-rgb: 244, 199, 195;  /* #f4c7c3 */
      --google-red-100: rgb(var(--google-red-100-rgb));
      --google-red-300-rgb: 230, 124, 115;  /* #e67c73 */
      --google-red-300: rgb(var(--google-red-300-rgb));
      --google-red-500-rgb: 219, 68, 55;  /* #db4437 */
      --google-red-500: rgb(var(--google-red-500-rgb));
      --google-red-700-rgb: 197, 57, 41;  /* #c53929 */
      --google-red-700: rgb(var(--google-red-700-rgb));

      --google-blue-100-rgb: 198, 218, 252;  /* #c6dafc */
      --google-blue-100: rgb(var(--google-blue-100-rgb));
      --google-blue-300-rgb: 123, 170, 247;  /* #7baaf7 */
      --google-blue-300: rgb(var(--google-blue-300-rgb));
      --google-blue-500-rgb: 66, 133, 244;  /* #4285f4 */
      --google-blue-500: rgb(var(--google-blue-500-rgb));
      --google-blue-700-rgb: 51, 103, 214;  /* #3367d6 */
      --google-blue-700: rgb(var(--google-blue-700-rgb));

      --google-green-100-rgb: 183, 225, 205;  /* #b7e1cd */
      --google-green-100: rgb(var(--google-green-100-rgb));
      --google-green-300-rgb: 87, 187, 138;  /* #57bb8a */
      --google-green-300: rgb(var(--google-green-300-rgb));
      --google-green-500-rgb: 15, 157, 88;  /* #0f9d58 */
      --google-green-500: rgb(var(--google-green-500-rgb));
      --google-green-700-rgb: 11, 128, 67;  /* #0b8043 */
      --google-green-700: rgb(var(--google-green-700-rgb));

      --google-yellow-100-rgb: 252, 232, 178;  /* #fce8b2 */
      --google-yellow-100: rgb(var(--google-yellow-100-rgb));
      --google-yellow-300-rgb: 247, 203, 77;  /* #f7cb4d */
      --google-yellow-300: rgb(var(--google-yellow-300-rgb));
      --google-yellow-500-rgb: 244, 180, 0;  /* #f4b400 */
      --google-yellow-500: rgb(var(--google-yellow-500-rgb));
      --google-yellow-700-rgb: 240, 147, 0;  /* #f09300 */
      --google-yellow-700: rgb(var(--google-yellow-700-rgb));

      --google-grey-100-rgb: 245, 245, 245;  /* #f5f5f5 */
      --google-grey-100: rgb(var(--google-grey-100-rgb));
      --google-grey-300-rgb: 224, 224, 224;  /* #e0e0e0 */
      --google-grey-300: rgb(var(--google-grey-300-rgb));
      --google-grey-500-rgb: 158, 158, 158;  /* #9e9e9e */
      --google-grey-500: rgb(var(--google-grey-500-rgb));
      --google-grey-700-rgb: 97, 97, 97;  /* #616161 */
      --google-grey-700: rgb(var(--google-grey-700-rgb));

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>
`;template$8.setAttribute("style","display: none;");document.head.appendChild(template$8.content);const template$7=html`
<custom-style>
  <style>
html{--google-blue-50-rgb:232,240,254;--google-blue-50:rgb(var(--google-blue-50-rgb));--google-blue-100-rgb:210,227,252;--google-blue-100:rgb(var(--google-blue-100-rgb));--google-blue-200-rgb:174,203,250;--google-blue-200:rgb(var(--google-blue-200-rgb));--google-blue-300-rgb:138,180,248;--google-blue-300:rgb(var(--google-blue-300-rgb));--google-blue-400-rgb:102,157,246;--google-blue-400:rgb(var(--google-blue-400-rgb));--google-blue-500-rgb:66,133,244;--google-blue-500:rgb(var(--google-blue-500-rgb));--google-blue-600-rgb:26,115,232;--google-blue-600:rgb(var(--google-blue-600-rgb));--google-blue-700-rgb:25,103,210;--google-blue-700:rgb(var(--google-blue-700-rgb));--google-blue-800-rgb:24,90,188;--google-blue-800:rgb(var(--google-blue-800-rgb));--google-blue-900-rgb:23,78,166;--google-blue-900:rgb(var(--google-blue-900-rgb));--google-green-50-rgb:230,244,234;--google-green-50:rgb(var(--google-green-50-rgb));--google-green-200-rgb:168,218,181;--google-green-200:rgb(var(--google-green-200-rgb));--google-green-300-rgb:129,201,149;--google-green-300:rgb(var(--google-green-300-rgb));--google-green-400-rgb:91,185,116;--google-green-400:rgb(var(--google-green-400-rgb));--google-green-500-rgb:52,168,83;--google-green-500:rgb(var(--google-green-500-rgb));--google-green-600-rgb:30,142,62;--google-green-600:rgb(var(--google-green-600-rgb));--google-green-700-rgb:24,128,56;--google-green-700:rgb(var(--google-green-700-rgb));--google-green-800-rgb:19,115,51;--google-green-800:rgb(var(--google-green-800-rgb));--google-green-900-rgb:13,101,45;--google-green-900:rgb(var(--google-green-900-rgb));--google-grey-50-rgb:248,249,250;--google-grey-50:rgb(var(--google-grey-50-rgb));--google-grey-100-rgb:241,243,244;--google-grey-100:rgb(var(--google-grey-100-rgb));--google-grey-200-rgb:232,234,237;--google-grey-200:rgb(var(--google-grey-200-rgb));--google-grey-300-rgb:218,220,224;--google-grey-300:rgb(var(--google-grey-300-rgb));--google-grey-400-rgb:189,193,198;--google-grey-400:rgb(var(--google-grey-400-rgb));--google-grey-500-rgb:154,160,166;--google-grey-500:rgb(var(--google-grey-500-rgb));--google-grey-600-rgb:128,134,139;--google-grey-600:rgb(var(--google-grey-600-rgb));--google-grey-700-rgb:95,99,104;--google-grey-700:rgb(var(--google-grey-700-rgb));--google-grey-800-rgb:60,64,67;--google-grey-800:rgb(var(--google-grey-800-rgb));--google-grey-900-rgb:32,33,36;--google-grey-900:rgb(var(--google-grey-900-rgb));--google-grey-900-white-4-percent:#292a2d;--google-purple-200-rgb:215,174,251;--google-purple-200:rgb(var(--google-purple-200-rgb));--google-purple-900-rgb:104,29,168;--google-purple-900:rgb(var(--google-purple-900-rgb));--google-red-300-rgb:242,139,130;--google-red-300:rgb(var(--google-red-300-rgb));--google-red-500-rgb:234,67,53;--google-red-500:rgb(var(--google-red-500-rgb));--google-red-600-rgb:217,48,37;--google-red-600:rgb(var(--google-red-600-rgb));--google-yellow-50-rgb:254,247,224;--google-yellow-50:rgb(var(--google-yellow-50-rgb));--google-yellow-100-rgb:254,239,195;--google-yellow-100:rgb(var(--google-yellow-100-rgb));--google-yellow-200-rgb:253,226,147;--google-yellow-200:rgb(var(--google-yellow-200-rgb));--google-yellow-300-rgb:253,214,51;--google-yellow-300:rgb(var(--google-yellow-300-rgb));--google-yellow-400-rgb:252,201,52;--google-yellow-400:rgb(var(--google-yellow-400-rgb));--google-yellow-500-rgb:251,188,4;--google-yellow-500:rgb(var(--google-yellow-500-rgb));--cr-primary-text-color:var(--google-grey-900);--cr-secondary-text-color:var(--google-grey-700);--cr-card-background-color:white;--cr-shadow-color:var(--google-grey-800);--cr-shadow-key-color_:color-mix(in srgb, var(--cr-shadow-color) 30%, transparent);--cr-shadow-ambient-color_:color-mix(in srgb, var(--cr-shadow-color) 15%, transparent);--cr-elevation-1:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 1px 3px 1px;--cr-elevation-2:var(--cr-shadow-key-color_) 0 1px 2px 0,var(--cr-shadow-ambient-color_) 0 2px 6px 2px;--cr-elevation-3:var(--cr-shadow-key-color_) 0 1px 3px 0,var(--cr-shadow-ambient-color_) 0 4px 8px 3px;--cr-elevation-4:var(--cr-shadow-key-color_) 0 2px 3px 0,var(--cr-shadow-ambient-color_) 0 6px 10px 4px;--cr-elevation-5:var(--cr-shadow-key-color_) 0 4px 4px 0,var(--cr-shadow-ambient-color_) 0 8px 12px 6px;--cr-card-shadow:var(--cr-elevation-2);--cr-checked-color:var(--google-blue-600);--cr-focused-item-color:var(--google-grey-300);--cr-form-field-label-color:var(--google-grey-700);--cr-hairline-rgb:0,0,0;--cr-iph-anchor-highlight-color:rgba(var(--google-blue-600-rgb), 0.1);--cr-link-color:var(--google-blue-700);--cr-menu-background-color:white;--cr-menu-background-focus-color:var(--google-grey-400);--cr-menu-shadow:0 2px 6px var(--paper-grey-500);--cr-separator-color:rgba(0, 0, 0, .06);--cr-title-text-color:rgb(90, 90, 90);--cr-toolbar-background-color:white;--cr-hover-background-color:rgba(var(--google-grey-900-rgb), .1);--cr-active-background-color:rgba(var(--google-grey-900-rgb), .16);--cr-focus-outline-color:rgba(var(--google-blue-600-rgb), .4)}@media (prefers-color-scheme:dark){html{--cr-primary-text-color:var(--google-grey-200);--cr-secondary-text-color:var(--google-grey-500);--cr-card-background-color:var(--google-grey-900-white-4-percent);--cr-card-shadow-color-rgb:0,0,0;--cr-checked-color:var(--google-blue-300);--cr-focused-item-color:var(--google-grey-800);--cr-form-field-label-color:var(--dark-secondary-color);--cr-hairline-rgb:255,255,255;--cr-iph-anchor-highlight-color:rgba(var(--google-grey-100-rgb), 0.1);--cr-link-color:var(--google-blue-300);--cr-menu-background-color:var(--google-grey-900);--cr-menu-background-focus-color:var(--google-grey-700);--cr-menu-background-sheen:rgba(255, 255, 255, .06);--cr-menu-shadow:rgba(0, 0, 0, .3) 0 1px 2px 0,rgba(0, 0, 0, .15) 0 3px 6px 2px;--cr-separator-color:rgba(255, 255, 255, .1);--cr-title-text-color:var(--cr-primary-text-color);--cr-toolbar-background-color:var(--google-grey-900-white-4-percent);--cr-hover-background-color:rgba(255, 255, 255, .1);--cr-active-background-color:rgba(var(--google-grey-200-rgb), .16);--cr-focus-outline-color:rgba(var(--google-blue-300-rgb), .4)}}@media (forced-colors:active){html{--cr-focus-outline-hcm:2px solid transparent;--cr-border-hcm:2px solid transparent}}html{--cr-button-edge-spacing:12px;--cr-button-height:32px;--cr-controlled-by-spacing:24px;--cr-default-input-max-width:264px;--cr-icon-ripple-size:36px;--cr-icon-ripple-padding:8px;--cr-icon-size:20px;--cr-icon-button-margin-start:16px;--cr-icon-ripple-margin:calc(var(--cr-icon-ripple-padding) * -1);--cr-section-min-height:48px;--cr-section-two-line-min-height:64px;--cr-section-padding:20px;--cr-section-vertical-padding:12px;--cr-section-indent-width:40px;--cr-section-indent-padding:calc(
      var(--cr-section-padding) + var(--cr-section-indent-width));--cr-section-vertical-margin:21px;--cr-centered-card-max-width:680px;--cr-centered-card-width-percentage:0.96;--cr-hairline:1px solid rgba(var(--cr-hairline-rgb), .14);--cr-separator-height:1px;--cr-separator-line:var(--cr-separator-height) solid var(--cr-separator-color);--cr-toolbar-overlay-animation-duration:150ms;--cr-toolbar-height:56px;--cr-container-shadow-height:6px;--cr-container-shadow-margin:calc(-1 * var(--cr-container-shadow-height));--cr-container-shadow-max-opacity:1;--cr-card-border-radius:8px;--cr-disabled-opacity:.38;--cr-form-field-bottom-spacing:16px;--cr-form-field-label-font-size:.625rem;--cr-form-field-label-height:1em;--cr-form-field-label-line-height:1}html[chrome-refresh-2023]{--cr-fallback-color-outline:rgb(116, 119, 117);--cr-fallback-color-primary:rgb(11, 87, 208);--cr-fallback-color-on-primary:rgb(255, 255, 255);--cr-fallback-color-primary-container:rgb(211, 227, 253);--cr-fallback-color-on-primary-container:rgb(4, 30, 73);--cr-fallback-color-secondary-container:rgb(194, 231, 255);--cr-fallback-color-on-secondary-container:rgb(0, 29, 53);--cr-fallback-color-neutral-container:rgb(242, 242, 242);--cr-fallback-color-neutral-outline:rgb(199, 199, 199);--cr-fallback-color-surface:rgb(255, 255, 255);--cr-fallback-color-on-surface-rgb:31,31,31;--cr-fallback-color-on-surface:rgb(var(--cr-fallback-color-on-surface-rgb));--cr-fallback-color-surface-variant:rgb(225, 227, 225);--cr-fallback-color-on-surface-variant:rgb(68, 71, 70);--cr-fallback-color-on-surface-subtle:rgb(71, 71, 71);--cr-fallback-color-inverse-primary:rgb(168, 199, 250);--cr-fallback-color-inverse-surface:rgb(48, 48, 48);--cr-fallback-color-inverse-on-surface:rgb(242, 242, 242);--cr-fallback-color-tonal-container:rgb(211, 227, 253);--cr-fallback-color-on-tonal-container:rgb(4, 30, 73);--cr-fallback-color-tonal-outline:rgb(168, 199, 250);--cr-fallback-color-error:rgb(179, 38, 30);--cr-fallback-color-divider:rgb(211, 227, 253);--cr-fallback-color-state-hover-on-prominent_:rgba(253, 252, 251, .1);--cr-fallback-color-state-on-subtle-rgb_:31,31,31;--cr-fallback-color-state-hover-on-subtle_:rgba(
      var(--cr-fallback-color-state-on-subtle-rgb_), .06);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(
      var(--cr-fallback-color-state-on-subtle-rgb_), .08);--cr-fallback-color-state-ripple-primary-rgb_:124,172,248;--cr-fallback-color-state-ripple-primary_:rgba(
      var(--cr-fallback-color-state-ripple-primary-rgb_), 0.32);--cr-fallback-color-base-container:rgba(105, 145, 214, .12);--cr-fallback-color-disabled-background:rgba(
      var(--cr-fallback-color-on-surface-rgb), .12);--cr-fallback-color-disabled-foreground:rgba(
      var(--cr-fallback-color-on-surface-rgb), var(--cr-disabled-opacity));--cr-hover-background-color:var(--color-sys-state-hover,
      rgba(var(--cr-fallback-color-on-surface-rgb), .08));--cr-hover-on-prominent-background-color:var(
      --color-sys-state-hover-on-prominent,
      var(--cr-fallback-color-state-hover-on-prominent_));--cr-hover-on-subtle-background-color:var(
      --color-sys-state-hover-on-subtle,
      var(--cr-fallback-color-state-hover-on-subtle_));--cr-active-background-color:var(--color-sys-state-pressed,
      rgba(var(--cr-fallback-color-on-surface-rgb), .12));--cr-active-on-primary-background-color:var(
      --color-sys-state-ripple-primary,
      var(--cr-fallback-color-state-ripple-primary_));--cr-active-neutral-on-subtle-background-color:var(
      --color-sys-state-ripple-neutral-on-subtle,
      var(--cr-fallback-color-state-ripple-neutral-on-subtle_));--cr-focus-outline-color:var(--color-sys-state-focus-ring,
      var(--cr-fallback-color-primary));--cr-primary-text-color:var(--color-primary-foreground,
      var(--cr-fallback-color-on-surface));--cr-secondary-text-color:var(--color-secondary-foreground,
      var(--cr-fallback-color-on-surface-variant));--cr-link-color:var(--color-link-foreground-default,
      var(--cr-fallback-color-primary));--cr-button-height:36px;--cr-shadow-color:var(--color-sys-shadow, rgb(0, 0, 0))}@media (prefers-color-scheme:dark){html[chrome-refresh-2023]{--cr-fallback-color-outline:rgb(142, 145, 143);--cr-fallback-color-primary:rgb(168, 199, 250);--cr-fallback-color-on-primary:rgb(6, 46, 111);--cr-fallback-color-primary-container:rgb(8, 66, 160);--cr-fallback-color-on-primary-container:rgb(211, 227, 253);--cr-fallback-color-secondary-container:rgb(0, 74, 119);--cr-fallback-color-on-secondary-container:rgb(194, 231, 255);--cr-fallback-color-neutral-container:rgb(42, 42, 42);--cr-fallback-color-neutral-outline:rgb(117, 117, 117);--cr-fallback-color-surface:rgb(26, 27, 30);--cr-fallback-color-on-surface-rgb:227,227,227;--cr-fallback-color-surface-variant:rgb(68, 71, 70);--cr-fallback-color-on-surface-variant:rgb(196, 199, 197);--cr-fallback-color-on-surface-subtle:rgb(199, 199, 199);--cr-fallback-color-inverse-primary:rgb(11, 87, 208);--cr-fallback-color-inverse-surface:rgb(227, 227, 227);--cr-fallback-color-inverse-on-surface:rgb(31, 31, 31);--cr-fallback-color-tonal-container:rgb(0, 74, 119);--cr-fallback-color-on-tonal-container:rgb(194, 231, 255);--cr-fallback-color-tonal-outline:rgb(0, 99, 155);--cr-fallback-color-error:rgb(242, 184, 181);--cr-fallback-color-divider:rgb(71, 71, 71);--cr-fallback-color-state-hover-on-prominent_:rgba(31, 31, 31, .06);--cr-fallback-color-state-on-subtle-rgb_:253,252,251;--cr-fallback-color-state-hover-on-subtle_:rgba(
        var(--cr-fallback-color-state-on-subtle-rgb_), .10);--cr-fallback-color-state-ripple-neutral-on-subtle_:rgba(
        var(--cr-fallback-color-state-on-subtle-rgb_), .16);--cr-fallback-color-state-ripple-primary-rgb_:76,141,246;--cr-fallback-color-base-container:rgba(40, 40, 40, 1)}}@media (forced-colors:active){html[chrome-refresh-2023]{--cr-fallback-color-disabled-background:Canvas;--cr-fallback-color-disabled-foreground:GrayText}}
  </style>
</custom-style>
`;document.head.appendChild(template$7.content);const styleMod$a=document.createElement("dom-module");styleMod$a.appendChild(html`
  <template>
    <style>
:host{color:var(--cr-primary-text-color);line-height:154%;overflow:hidden;user-select:text}
    </style>
  </template>
`.content);styleMod$a.register("cr-page-host-style");const styleMod$9=document.createElement("dom-module");styleMod$9.appendChild(html`
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);styleMod$9.register("cr-hidden-style");const styleMod$8=document.createElement("dom-module");styleMod$8.appendChild(html`
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);styleMod$8.register("cr-icons");const styleMod$7=document.createElement("dom-module");styleMod$7.appendChild(html`
  <template>
    <style include="cr-hidden-style cr-icons">
:host,html{--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host,html{--scrollable-border-color:var(--google-grey-700)}}[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);styleMod$7.register("cr-shared-style");function getTemplate$U(){return html`<!--_html_template_start_-->    <style>:host{--cr-toast-background:#323232;--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:#fff}@media (prefers-color-scheme:dark){:host{--cr-toast-background:var(--google-grey-900) linear-gradient(rgba(255, 255, 255, .06), rgba(255, 255, 255, .06));--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:var(--google-grey-200)}}:host{align-items:center;background:var(--cr-toast-background);border-radius:4px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,.28);box-sizing:border-box;display:flex;margin:24px;max-width:568px;min-height:52px;min-width:288px;opacity:0;padding:0 24px;position:fixed;transform:translateY(100px);transition:opacity .3s,transform .3s;visibility:hidden;z-index:1}:host-context([chrome-refresh-2023]):host{--cr-toast-background:var(--color-toast-background,
            var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,
            var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,
            var(--cr-fallback-color-inverse-on-surface));border-radius:8px;line-height:20px;padding:0 16px}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent!important;border:none!important;color:var(--cr-toast-button-color)!important;margin-inline-start:32px!important;min-width:52px!important;padding:8px!important}:host ::slotted(cr-button:hover){background-color:transparent!important}:host-context([chrome-refresh-2023]) ::slotted(cr-button:last-of-type){margin-inline-end:-8px}</style>
    <slot></slot>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToastElement extends PolymerElement{constructor(){super(...arguments);this.hideTimeoutId_=null}static get is(){return"cr-toast"}static get template(){return getTemplate$U()}static get properties(){return{duration:{type:Number,value:0},open:{readOnly:true,type:Boolean,value:false,reflectToAttribute:true}}}static get observers(){return["resetAutoHide_(duration, open)"]}resetAutoHide_(){if(this.hideTimeoutId_!==null){window.clearTimeout(this.hideTimeoutId_);this.hideTimeoutId_=null}if(this.open&&this.duration!==0){this.hideTimeoutId_=window.setTimeout((()=>{this.hide()}),this.duration)}}show(){const shouldResetAutohide=this.open;this.removeAttribute("role");this.removeAttribute("aria-hidden");this._setOpen(true);this.setAttribute("role","alert");if(shouldResetAutohide){this.resetAutoHide_()}}hide(){this.setAttribute("aria-hidden","true");this._setOpen(false)}}customElements.define(CrToastElement.is,CrToastElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:false,readOnly:true,notify:true},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:false},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none";this.queryChanged()},detached:function(){this._remove()},_add:function(){if(this._mq){this._mq.addListener(this._boundMQHandler)}},_remove:function(){if(this._mq){this._mq.removeListener(this._boundMQHandler)}this._mq=null},queryChanged:function(){this._remove();var query=this.query;if(!query){return}if(!this.full&&query[0]!=="("){query="("+query+")"}this._mq=window.matchMedia(query);this._add();this.queryHandler(this._mq)},queryHandler:function(mq){this._setQueryMatches(mq.matches)}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var ORPHANS=new Set;const IronResizableBehavior={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:false}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[];this._boundNotifyResize=this.notifyResize.bind(this);this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}else{ORPHANS.delete(this);window.removeEventListener("resize",this._boundNotifyResize)}this._parentResizable=null},notifyResize:function(){if(!this.isAttached){return}this._interestedResizables.forEach((function(resizable){if(this.resizerShouldNotify(resizable)){this._notifyDescendant(resizable)}}),this);this._fireResize()},assignParentResizable:function(parentResizable){if(this._parentResizable){this._parentResizable.stopResizeNotificationsFor(this)}this._parentResizable=parentResizable;if(parentResizable&&parentResizable._interestedResizables.indexOf(this)===-1){parentResizable._interestedResizables.push(this);parentResizable._subscribeIronResize(this)}},stopResizeNotificationsFor:function(target){var index=this._interestedResizables.indexOf(target);if(index>-1){this._interestedResizables.splice(index,1);this._unsubscribeIronResize(target)}},_subscribeIronResize:function(target){target.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(target){target.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(element){return true},_onDescendantIronResize:function(event){if(this._notifyingDescendant){event.stopPropagation();return}if(!useShadow){this._fireResize()}},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:false})},_onIronRequestResizeNotifications:function(event){var target=dom(event).rootTarget;if(target===this){return}target.assignParentResizable(this);this._notifyDescendant(target);event.stopPropagation()},_parentResizableChanged:function(parentResizable){if(parentResizable){window.removeEventListener("resize",this._boundNotifyResize)}},_notifyDescendant:function(descendant){if(!this.isAttached){return}this._notifyingDescendant=true;descendant.notifyResize();this._notifyingDescendant=false},_requestResizeNotifications:function(){if(!this.isAttached){return}if(document.readyState==="loading"){var _requestResizeNotifications=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function readystatechanged(){document.removeEventListener("readystatechange",readystatechanged);_requestResizeNotifications()}))}else{this._findParent();if(!this._parentResizable){ORPHANS.forEach((function(orphan){if(orphan!==this){orphan._findParent()}}),this);window.addEventListener("resize",this._boundNotifyResize);this.notifyResize()}else{this._parentResizable._interestedResizables.forEach((function(resizable){if(resizable!==this){resizable._findParent()}}),this)}}},_findParent:function(){this.assignParentResizable(null);this.fire("iron-request-resize-notifications",null,{node:this,bubbles:true,cancelable:true});if(!this._parentResizable){ORPHANS.add(this)}else{ORPHANS.delete(this)}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class IronSelection{constructor(selectCallback){this.selection=[];this.selectCallback=selectCallback}get(){return this.multi?this.selection.slice():this.selection[0]}clear(excludes){this.selection.slice().forEach((function(item){if(!excludes||excludes.indexOf(item)<0){this.setItemSelected(item,false)}}),this)}isSelected(item){return this.selection.indexOf(item)>=0}setItemSelected(item,isSelected){if(item!=null){if(isSelected!==this.isSelected(item)){if(isSelected){this.selection.push(item)}else{var i=this.selection.indexOf(item);if(i>=0){this.selection.splice(i,1)}}if(this.selectCallback){this.selectCallback(item,isSelected)}}}}select(item){if(this.multi){this.toggle(item)}else if(this.get()!==item){this.setItemSelected(this.get(),false);this.setItemSelected(item,true)}}toggle(item){this.setItemSelected(item,!this.isSelected(item))}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronSelectableBehavior={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:true},selectedItem:{type:Object,readOnly:true,notify:true},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:true,notify:true,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this);this._selection=new IronSelection(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this);this._addListener(this.activateEvent)},detached:function(){if(this._observer){dom(this).unobserveNodes(this._observer)}this._removeListener(this.activateEvent)},indexOf:function(item){return this.items?this.items.indexOf(item):-1},select:function(value){this.selected=value},selectPrevious:function(){var length=this.items.length;var index=length-1;if(this.selected!==undefined){index=(Number(this._valueToIndex(this.selected))-1+length)%length}this.selected=this._indexToValue(index)},selectNext:function(){var index=0;if(this.selected!==undefined){index=(Number(this._valueToIndex(this.selected))+1)%this.items.length}this.selected=this._indexToValue(index)},selectIndex:function(index){this.select(this._indexToValue(index))},forceSynchronousItemUpdate:function(){if(this._observer&&typeof this._observer.flush==="function"){this._observer.flush()}else{this._updateItems()}},get _shouldUpdateSelection(){return this.selected!=null},_checkFallback:function(){this._updateSelected()},_addListener:function(eventName){this.listen(this,eventName,"_activateHandler")},_removeListener:function(eventName){this.unlisten(this,eventName,"_activateHandler")},_activateEventChanged:function(eventName,old){this._removeListener(old);this._addListener(eventName)},_updateItems:function(){var nodes=dom(this).queryDistributedElements(this.selectable||"*");nodes=Array.prototype.filter.call(nodes,this._bindFilterItem);this._setItems(nodes)},_updateAttrForSelected:function(){if(this.selectedItem){this.selected=this._valueForItem(this.selectedItem)}},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(selected){if(!this.items){return}var item=this._valueToItem(this.selected);if(item){this._selection.select(item)}else{this._selection.clear()}if(this.fallbackSelection&&this.items.length&&this._selection.get()===undefined){this.selected=this.fallbackSelection}},_filterItem:function(node){return!this._excludedLocalNames[node.localName]},_valueToItem:function(value){return value==null?null:this.items[this._valueToIndex(value)]},_valueToIndex:function(value){if(this.attrForSelected){for(var i=0,item;item=this.items[i];i++){if(this._valueForItem(item)==value){return i}}}else{return Number(value)}},_indexToValue:function(index){if(this.attrForSelected){var item=this.items[index];if(item){return this._valueForItem(item)}}else{return index}},_valueForItem:function(item){if(!item){return null}if(!this.attrForSelected){var i=this.indexOf(item);return i===-1?null:i}var propValue=item[dashToCamelCase(this.attrForSelected)];return propValue!=undefined?propValue:item.getAttribute(this.attrForSelected)},_applySelection:function(item,isSelected){if(this.selectedClass){this.toggleClass(this.selectedClass,isSelected,item)}if(this.selectedAttribute){this.toggleAttribute(this.selectedAttribute,isSelected,item)}this._selectionChange();this.fire("iron-"+(isSelected?"select":"deselect"),{item:item})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(node){return dom(node).observeNodes((function(mutation){this._updateItems();this._updateSelected();this.fire("iron-items-changed",mutation,{bubbles:false,cancelable:false})}))},_activateHandler:function(e){var t=e.target;var items=this.items;while(t&&t!=this){var i=items.indexOf(t);if(i>=0){var value=this._indexToValue(i);this._itemActivate(value,t);return}t=t.parentNode}},_itemActivate:function(value,item){if(!this.fire("iron-activate",{selected:value,item:item},{cancelable:true}).defaultPrevented){this.select(value)}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({_template:html`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[IronResizableBehavior,IronSelectableBehavior],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(selected,old){this.async(this.notifyResize)}});
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(value,message){if(value){return}throw new Error("Assertion failed"+(message?`: ${message}`:""))}function assertInstanceof(value,type,message){if(value instanceof type){return}throw new Error(message||`Value ${value} is not of type ${type.name||typeof type}`)}function assertNotReached(message="Unreachable code hit"){assert(false,message)}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PromiseResolver{constructor(){this.resolve_=()=>{};this.reject_=()=>{};this.isFulfilled_=false;this.promise_=new Promise(((resolve,reject)=>{this.resolve_=resolution=>{resolve(resolution);this.isFulfilled_=true};this.reject_=reason=>{reject(reason);this.isFulfilled_=true}}))}get isFulfilled(){return this.isFulfilled_}get promise(){return this.promise_}get resolve(){return this.resolve_}get reject(){return this.reject_}}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrSettingsPrefsInternal{constructor(){this.isInitialized=false;this.initializedResolver_=new PromiseResolver;this.deferInitialization=false}get initialized(){return this.initializedResolver_.promise}setInitialized(){this.isInitialized=true;this.initializedResolver_.resolve()}resetForTesting(){this.isInitialized=false;this.initializedResolver_=new PromiseResolver}}const CrSettingsPrefs=new CrSettingsPrefsInternal;
/* Copyright 2015 The Chromium Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */function deepEqual(val1,val2){if(val1===val2){return true}if(Array.isArray(val1)||Array.isArray(val2)){if(!Array.isArray(val1)||!Array.isArray(val2)){return false}return arraysEqual(val1,val2)}if(val1 instanceof Object&&val2 instanceof Object){return objectsEqual(val1,val2)}return false}function arraysEqual(arr1,arr2){if(arr1.length!==arr2.length){return false}for(let i=0;i<arr1.length;i++){if(!deepEqual(arr1[i],arr2[i])){return false}}return true}function objectsEqual(obj1,obj2){const keys1=Object.keys(obj1);const keys2=Object.keys(obj2);if(keys1.length!==keys2.length){return false}for(let i=0;i<keys1.length;i++){const key=keys1[i];if(!deepEqual(obj1[key],obj2[key])){return false}}return true}function deepCopy(val){if(!(val instanceof Object)){return val}return Array.isArray(val)?deepCopyArray(val):deepCopyObject(val)}function deepCopyArray(arr){const copy=[];for(let i=0;i<arr.length;i++){copy.push(deepCopy(arr[i]))}return copy}function deepCopyObject(obj){const copy={};const keys=Object.keys(obj);for(let i=0;i<keys.length;i++){const key=keys[i];copy[key]=deepCopy(obj[key])}return copy}class SettingsPrefsElement extends PolymerElement{static get is(){return"settings-prefs"}static get properties(){return{prefs:{type:Object,notify:true},lastPrefValues_:{type:Object,value(){return{}}}}}static get observers(){return["prefsChanged_(prefs.*)"]}constructor(){super();this.settingsApi_=chrome.settingsPrivate;this.initialized_=false;if(!CrSettingsPrefs.deferInitialization){this.initialize()}}disconnectedCallback(){super.disconnectedCallback();CrSettingsPrefs.resetForTesting()}initialize(settingsApi){if(this.initialized_){return}this.initialized_=true;if(settingsApi){this.settingsApi_=settingsApi}this.boundPrefsChanged_=this.onSettingsPrivatePrefsChanged_.bind(this);this.settingsApi_.onPrefsChanged.addListener(this.boundPrefsChanged_);this.settingsApi_.getAllPrefs().then((prefs=>{this.updatePrefs_(prefs);CrSettingsPrefs.setInitialized()}))}prefsChanged_(e){if(!CrSettingsPrefs.isInitialized||e.path==="prefs"){return}const key=this.getPrefKeyFromPath_(e.path);const prefStoreValue=this.lastPrefValues_[key];const prefObj=this.get(key,this.prefs);if(!deepEqual(prefStoreValue,prefObj.value)){this.dispatchEvent(new CustomEvent("user-action-setting-change",{bubbles:true,composed:true,detail:{prefKey:key,prefValue:prefObj.value}}));this.settingsApi_.setPref(key,prefObj.value,"").then((success=>{if(!success){this.refresh(key)}}))}}onSettingsPrivatePrefsChanged_(prefs){if(CrSettingsPrefs.isInitialized){this.updatePrefs_(prefs)}}refresh(key){this.settingsApi_.getPref(key).then((pref=>{this.updatePrefs_([pref])}))}updatePrefPath_(path,value,prefsObject){const parts=path.split(".");let cur=prefsObject;for(let part;parts.length&&(part=parts.shift());){if(!parts.length){cur[part]=value}else if(part in cur){cur=cur[part]}else{cur=cur[part]={}}}}updatePrefs_(newPrefs){const prefs=this.prefs||{};newPrefs.forEach((newPrefObj=>{this.lastPrefValues_[newPrefObj.key]=deepCopy(newPrefObj.value);if(!deepEqual(this.get(newPrefObj.key,prefs),newPrefObj)){this.updatePrefPath_(newPrefObj.key,newPrefObj,prefs);if(prefs===this.prefs){this.notifyPath("prefs."+newPrefObj.key,newPrefObj)}}}));if(!this.prefs){this.prefs=prefs}}getPrefKeyFromPath_(path){const parts=path.split(".");assert(parts.shift()==="prefs","Path doesn't begin with 'prefs'");for(let i=1;i<=parts.length;i++){const key=parts.slice(0,i).join(".");if(this.lastPrefValues_.hasOwnProperty(key)){return key}}return""}resetForTesting(){if(!this.initialized_){return}this.prefs=undefined;this.lastPrefValues_={};this.initialized_=false;this.settingsApi_.onPrefsChanged.removeListener(this.boundPrefsChanged_);this.settingsApi_=chrome.settingsPrivate}}customElements.define(SettingsPrefsElement.is,SettingsPrefsElement);
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CLASS_NAME="focus-outline-visible";const docsToManager=new Map;class FocusOutlineManager{constructor(doc){this.focusByKeyboard_=true;this.classList_=doc.documentElement.classList;doc.addEventListener("keydown",(()=>this.onEvent_(true)),true);doc.addEventListener("mousedown",(()=>this.onEvent_(false)),true);this.updateVisibility()}onEvent_(focusByKeyboard){if(this.focusByKeyboard_===focusByKeyboard){return}this.focusByKeyboard_=focusByKeyboard;this.updateVisibility()}updateVisibility(){this.visible=this.focusByKeyboard_}set visible(visible){this.classList_.toggle(CLASS_NAME,visible)}get visible(){return this.classList_.contains(CLASS_NAME)}static forDocument(doc){let manager=docsToManager.get(doc);if(!manager){manager=new FocusOutlineManager(doc);docsToManager.set(doc,manager)}return manager}}
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var KEY_IDENTIFIER={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"};var KEY_CODE={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"};var MODIFIER_KEYS={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"};var KEY_CHAR=/[a-z0-9*]/;var IDENT_CHAR=/U\+/;var ARROW_KEY=/^arrow/;var SPACE_KEY=/^space(bar)?/;var ESC_KEY=/^escape$/;function transformKey(key,noSpecialChars){var validKey="";if(key){var lKey=key.toLowerCase();if(lKey===" "||SPACE_KEY.test(lKey)){validKey="space"}else if(ESC_KEY.test(lKey)){validKey="esc"}else if(lKey.length==1){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace("arrow","")}else if(lKey=="multiply"){validKey="*"}else{validKey=lKey}}return validKey}function transformKeyIdentifier(keyIdent){var validKey="";if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent]}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace("U+","0x"),16);validKey=String.fromCharCode(keyIdent).toLowerCase()}else{validKey=keyIdent.toLowerCase()}}return validKey}function transformKeyCode(keyCode){var validKey="";if(Number(keyCode)){if(keyCode>=65&&keyCode<=90){validKey=String.fromCharCode(32+keyCode)}else if(keyCode>=112&&keyCode<=123){validKey="f"+(keyCode-112+1)}else if(keyCode>=48&&keyCode<=57){validKey=String(keyCode-48)}else if(keyCode>=96&&keyCode<=105){validKey=String(keyCode-96)}else{validKey=KEY_CODE[keyCode]}}return validKey}function normalizedKeyForEvent(keyEvent,noSpecialChars){if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars)}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars)}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||""}function keyComboMatchesEvent(keyCombo,event){var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey)}function parseKeyComboString(keyComboString){if(keyComboString.length===1){return{combo:keyComboString,key:keyComboString,event:"keydown"}}return keyComboString.split("+").reduce((function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(":");var keyName=eventParts[0];var event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=true;parsedKeyCombo.hasModifiers=true}else{parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||"keydown"}return parsedKeyCombo}),{combo:keyComboString.split(":").shift()})}function parseEventString(eventString){return eventString.trim().split(" ").map((function(keyComboString){return parseKeyComboString(keyComboString)}))}const IronA11yKeysBehavior={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:false},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(event,eventString){var keyCombos=parseEventString(eventString);for(var i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return true}}return false},_collectKeyBindings:function(){var keyBindings=this.behaviors.map((function(behavior){return behavior.keyBindings}));if(keyBindings.indexOf(this.keyBindings)===-1){keyBindings.push(this.keyBindings)}return keyBindings},_prepKeyBindings:function(){this._keyBindings={};this._collectKeyBindings().forEach((function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString])}}),this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString])}for(var eventName in this._keyBindings){this._keyBindings[eventName].sort((function(kb1,kb2){var b1=kb1[0].hasModifiers;var b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1}))}},_addKeyBinding:function(eventString,handlerName){parseEventString(eventString).forEach((function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners()}},_listenKeyEventListeners:function(){if(!this.keyEventTarget){return}Object.keys(this._keyBindings).forEach((function(eventName){var keyBindings=this._keyBindings[eventName];var boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler)}),this)},_unlistenKeyEventListeners:function(){var keyHandlerTuple;var keyEventTarget;var eventName;var boundKeyHandler;while(this._boundKeyHandlers.length){keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler)}},_onKeyBindingEvent:function(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation()}if(event.defaultPrevented){return}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0];var handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);if(event.defaultPrevented){return}}}},_triggerKeyHandler:function(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:true});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault()}}};var MAX_RADIUS_PX=300;var MIN_DURATION_MS=800;var distance=function(x1,y1,x2,y2){var xDelta=x1-x2;var yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta)};Polymer({_template:html`
    <style>
      :host {
        bottom: 0;
        display: block;
        left: 0;
        overflow: hidden;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        /* For rounded corners: http://jsbin.com/temexa/4. */
        transform: translate3d(0, 0, 0);
      }

      .ripple {
        background-color: currentcolor;
        left: 0;
        opacity: var(--paper-ripple-opacity, 0.25);
        pointer-events: none;
        position: absolute;
        will-change: height, transform, width;
      }

      .ripple,
      :host(.circle) {
        border-radius: 50%;
      }
    </style>
`,is:"paper-ripple",behaviors:[IronA11yKeysBehavior],properties:{center:{type:Boolean,value:false},holdDown:{type:Boolean,value:false,observer:"_holdDownChanged"},recenters:{type:Boolean,value:false},noink:{type:Boolean,value:false}},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},created:function(){this.ripples=[]},attached:function(){this.keyEventTarget=this.parentNode.nodeType==11?dom(this).getOwnerRoot().host:this.parentNode;this.keyEventTarget=this.keyEventTarget;this.listen(this.keyEventTarget,"up","uiUpAction");this.listen(this.keyEventTarget,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction");this.unlisten(this.keyEventTarget,"down","uiDownAction");this.keyEventTarget=null},simulatedRipple:function(){this.downAction();this.async(function(){this.upAction()}.bind(this),1)},uiDownAction:function(e){if(!this.noink)this.downAction(e)},downAction:function(e){if(this.ripples.length&&this.holdDown)return;this.debounce("show ripple",(function(){this.__showRipple(e)}),1)},clear:function(){this.__hideRipple();this.holdDown=false},showAndHoldDown:function(){this.ripples.forEach((ripple=>{ripple.remove()}));this.ripples=[];this.holdDown=true},__showRipple:function(e){var rect=this.getBoundingClientRect();var roundedCenterX=function(){return Math.round(rect.width/2)};var roundedCenterY=function(){return Math.round(rect.height/2)};var centered=!e||this.center;if(centered){var x=roundedCenterX();var y=roundedCenterY()}else{var sourceEvent=e.detail.sourceEvent;var x=Math.round(sourceEvent.clientX-rect.left);var y=Math.round(sourceEvent.clientY-rect.top)}var corners=[{x:0,y:0},{x:rect.width,y:0},{x:0,y:rect.height},{x:rect.width,y:rect.height}];var cornerDistances=corners.map((function(corner){return Math.round(distance(x,y,corner.x,corner.y))}));var radius=Math.min(MAX_RADIUS_PX,Math.max.apply(Math,cornerDistances));var startTranslate=x-radius+"px, "+(y-radius)+"px";if(this.recenters&&!centered){var endTranslate=roundedCenterX()-radius+"px, "+(roundedCenterY()-radius)+"px"}else{var endTranslate=startTranslate}var ripple=document.createElement("div");ripple.classList.add("ripple");ripple.style.height=ripple.style.width=2*radius+"px";this.ripples.push(ripple);this.shadowRoot.appendChild(ripple);ripple.animate({transform:["translate("+startTranslate+") scale(0)","translate("+endTranslate+") scale(1)"]},{duration:Math.max(MIN_DURATION_MS,Math.log(radius)*radius)||0,easing:"cubic-bezier(.2, .9, .1, .9)",fill:"forwards"})},uiUpAction:function(e){if(!this.noink)this.upAction()},upAction:function(e){if(!this.holdDown)this.debounce("hide ripple",(function(){this.__hideRipple()}),1)},__hideRipple:function(){Promise.all(this.ripples.map((function(ripple){return new Promise((function(resolve){var removeRipple=function(){ripple.remove();resolve()};var opacity=getComputedStyle(ripple).opacity;if(!opacity.length){removeRipple()}else{var animation=ripple.animate({opacity:[opacity,0]},{duration:150,fill:"forwards"});animation.addEventListener("finish",removeRipple);animation.addEventListener("cancel",removeRipple)}}))}))).then(function(){this.fire("transitionend")}.bind(this));this.ripples=[]},_onEnterKeydown:function(){this.uiDownAction();this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(newHoldDown,oldHoldDown){if(oldHoldDown===undefined)return;if(newHoldDown)this.downAction();else this.upAction()}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronButtonStateImpl={properties:{pressed:{type:Boolean,readOnly:true,value:false,reflectToAttribute:true,observer:"_pressedChanged"},toggles:{type:Boolean,value:false,reflectToAttribute:true},active:{type:Boolean,value:false,notify:true,reflectToAttribute:true},pointerDown:{type:Boolean,readOnly:true,value:false},receivedFocusFromKeyboard:{type:Boolean,readOnly:true},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){if(this.toggles){this._userActivate(!this.active)}else{this.active=false}},_focusChanged:function(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(false)}},_detectKeyboardFocus:function(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused)},_userActivate:function(active){if(this.active!==active){this.active=active;this.fire("change")}},_downHandler:function(event){this._setPointerDown(true);this._setPressed(true);this._setReceivedFocusFromKeyboard(false)},_upHandler:function(){this._setPointerDown(false);this._setPressed(false)},_spaceKeyDownHandler:function(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(true)},_spaceKeyUpHandler:function(event){var keyboardEvent=event.detail.keyboardEvent;var target=dom(keyboardEvent).localTarget;if(this.isLightDescendant(target))return;if(this.pressed){this._asyncClick()}this._setPressed(false)},_asyncClick:function(){this.async((function(){this.click()}),1)},_pressedChanged:function(pressed){this._changedButtonState()},_ariaActiveAttributeChanged:function(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue)}},_activeChanged:function(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?"true":"false")}else{this.removeAttribute(this.ariaActiveAttribute)}this._changedButtonState()},_controlStateChanged:function(){if(this.disabled){this._setPressed(false)}else{this._changedButtonState()}},_changedButtonState:function(){if(this._buttonStateChanged){this._buttonStateChanged()}}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperRippleBehavior={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){if(this.focused){this.ensureRipple()}},_downHandler:function(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}},ensureRipple:function(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){var domContainer=dom(this._rippleContainer||this);var target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(target)){this._ripple.uiDownAction(optTriggeringEvent)}}}},getRipple:function(){this.ensureRipple();return this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){var element=document.createElement("paper-ripple");return element},_noinkChanged:function(noink){if(this.hasRipple()){this._ripple.noink=noink}}};function getTemplate$T(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style">:host{--active-shadow-rgb:var(--google-grey-800-rgb);--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-600);--border-color:var(--google-grey-300);--disabled-bg-action:var(--google-grey-100);--disabled-bg:white;--disabled-border-color:var(--google-grey-100);--disabled-text-color:var(--google-grey-600);--focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--hover-bg-action:rgba(var(--google-blue-600-rgb), .9);--hover-bg-color:rgba(var(--google-blue-500-rgb), .04);--hover-border-color:var(--google-blue-100);--hover-shadow-action-rgb:var(--google-blue-500-rgb);--ink-color-action:white;--ink-color:var(--google-blue-600);--ripple-opacity-action:.32;--ripple-opacity:.1;--text-color-action:white;--text-color:var(--google-blue-600)}@media (prefers-color-scheme:dark){:host{--active-bg:black linear-gradient(rgba(255, 255, 255, .06),
                                             rgba(255, 255, 255, .06));--active-shadow-rgb:0,0,0;--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-300);--border-color:var(--google-grey-700);--disabled-bg-action:var(--google-grey-800);--disabled-bg:transparent;--disabled-border-color:var(--google-grey-800);--disabled-text-color:var(--google-grey-500);--focus-shadow-color:rgba(var(--google-blue-300-rgb), .5);--hover-bg-action:var(--bg-action) linear-gradient(rgba(0, 0, 0, .08), rgba(0, 0, 0, .08));--hover-bg-color:rgba(var(--google-blue-300-rgb), .08);--ink-color-action:black;--ink-color:var(--google-blue-300);--ripple-opacity-action:.16;--ripple-opacity:.16;--text-color-action:var(--google-grey-900);--text-color:var(--google-blue-300)}}:host{--paper-ripple-opacity:var(--ripple-opacity);-webkit-tap-highlight-color:transparent;align-items:center;border:1px solid var(--border-color);border-radius:4px;box-sizing:border-box;color:var(--text-color);cursor:pointer;display:inline-flex;flex-shrink:0;font-weight:500;height:var(--cr-button-height);justify-content:center;min-width:5.14em;outline-width:0;overflow:hidden;padding:8px 16px;position:relative;user-select:none}:host-context([chrome-refresh-2023]):host{--border-color:var(--color-button-border,
            var(--cr-fallback-color-tonal-outline));--text-color:var(--color-button-foreground,
            var(--cr-fallback-color-primary));--hover-bg-color:transparent;--hover-border-color:var(--border-color);--active-bg:transparent;--active-shadow:none;--ink-color:var(--cr-active-background-color);--ripple-opacity:1;--disabled-bg:transparent;--disabled-border-color:var(--color-button-border-disabled,
            var(--cr-fallback-color-disabled-background));--disabled-text-color:var(--color-button-foreground-disabled,
            var(--cr-fallback-color-disabled-foreground));--bg-action:var(--color-button-background-prominent,
            var(--cr-fallback-color-primary));--text-color-action:var(--color-button-foreground-prominent,
            var(--cr-fallback-color-on-primary));--hover-bg-action:var(--bg-action);--active-shadow-action:none;--ink-color-action:var(--cr-active-background-color);--ripple-opacity-action:1;--disabled-bg-action:var(--color-button-background-prominent-disabled,
            var(--cr-fallback-color-disabled-background));background:0 0;border-radius:100px;isolation:isolate;line-height:20px}:host([has-prefix-icon_]),:host([has-suffix-icon_]){--iron-icon-height:16px;--iron-icon-width:16px;gap:8px;padding:8px}:host-context([chrome-refresh-2023]):host([has-prefix-icon_]),:host-context([chrome-refresh-2023]):host([has-suffix-icon_]){--iron-icon-height:20px;--iron-icon-width:20px;--icon-block-padding-large:16px;--icon-block-padding-small:12px;padding-block-end:8px;padding-block-start:8px}:host-context([chrome-refresh-2023]):host([has-prefix-icon_]){padding-inline-end:var(--icon-block-padding-large);padding-inline-start:var(--icon-block-padding-small)}:host-context([chrome-refresh-2023]):host([has-suffix-icon_]){padding-inline-end:var(--icon-block-padding-small);padding-inline-start:var(--icon-block-padding-large)}:host-context(.focus-outline-visible):host(:focus){box-shadow:0 0 0 2px var(--focus-shadow-color)}@media (forced-colors:active){:host-context(.focus-outline-visible):host(:focus){outline:var(--cr-focus-outline-hcm)}:host-context([chrome-refresh-2023]):host{forced-color-adjust:none}}:host-context([chrome-refresh-2023].focus-outline-visible):host(:focus){box-shadow:none;outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host(:active){background:var(--active-bg);box-shadow:var(--active-shadow,0 1px 2px 0 rgba(var(--active-shadow-rgb),.3),0 3px 6px 2px rgba(var(--active-shadow-rgb),.15))}:host(:hover){background-color:var(--hover-bg-color)}@media (prefers-color-scheme:light){:host(:hover){border-color:var(--hover-border-color)}}#background{border-radius:inherit;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host(:hover) #background{background-color:var(--hover-bg-color)}:host-context([chrome-refresh-2023].focus-outline-visible):host(:focus) #background{background-clip:padding-box}:host-context([chrome-refresh-2023]):host(.action-button) #background{background-color:var(--bg-action)}:host-context([chrome-refresh-2023]):host([disabled]) #background{background-color:var(--disabled-bg)}:host-context([chrome-refresh-2023]):host(.action-button[disabled]) #background{background-color:var(--disabled-bg-action)}:host-context([chrome-refresh-2023]):host(.floating-button) #background,:host-context([chrome-refresh-2023]):host(.tonal-button) #background{background-color:var(--color-button-background-tonal,var(--cr-fallback-color-secondary-container))}:host-context([chrome-refresh-2023]):host([disabled].floating-button) #background,:host-context([chrome-refresh-2023]):host([disabled].tonal-button) #background{background-color:var(--color-button-background-tonal-disabled,var(--cr-fallback-color-disabled-background))}#content{display:contents}:host-context([chrome-refresh-2023]) #content{display:inline;z-index:2}:host-context([chrome-refresh-2023]) ::slotted(*){z-index:2}#hoverBackground{content:'';display:none;inset:0;pointer-events:none;position:absolute;z-index:1}:host-context([chrome-refresh-2023]):host(:hover) #hoverBackground{background:var(--cr-hover-background-color);display:block}:host-context([chrome-refresh-2023]):host(.action-button:hover) #hoverBackground{background:var(--cr-hover-on-prominent-background-color)}:host(.action-button){--ink-color:var(--ink-color-action);--paper-ripple-opacity:var(--ripple-opacity-action);background-color:var(--bg-action);border:none;color:var(--text-color-action)}:host-context([chrome-refresh-2023]):host(.action-button){--ink-color:var(--cr-active-on-primary-background-color);background-color:transparent}:host(.action-button:active){box-shadow:var(--active-shadow-action,0 1px 2px 0 rgba(var(--active-shadow-action-rgb),.3),0 3px 6px 2px rgba(var(--active-shadow-action-rgb),.15))}:host(.action-button:hover){background:var(--hover-bg-action)}@media (prefers-color-scheme:light){:host(.action-button:not(:active):hover){box-shadow:0 1px 2px 0 rgba(var(--hover-shadow-action-rgb),.3),0 1px 3px 1px rgba(var(--hover-shadow-action-rgb),.15)}:host-context([chrome-refresh-2023]):host(.action-button:not(:active):hover){box-shadow:none}}:host([disabled]){background-color:var(--disabled-bg);border-color:var(--disabled-border-color);color:var(--disabled-text-color);cursor:auto;pointer-events:none}:host(.action-button[disabled]){background-color:var(--disabled-bg-action);border-color:transparent}:host(.cancel-button){margin-inline-end:8px}:host(.action-button),:host(.cancel-button){line-height:154%}:host-context([chrome-refresh-2023]):host(.floating-button),:host-context([chrome-refresh-2023]):host(.tonal-button){border:none;color:var(--color-button-foreground-tonal,var(--cr-fallback-color-on-tonal-container))}:host-context([chrome-refresh-2023]):host(.floating-button[disabled]),:host-context([chrome-refresh-2023]):host(.tonal-button[disabled]){border:none;color:var(--disabled-text-color)}:host-context([chrome-refresh-2023]):host(.floating-button){border-radius:8px;height:40px;transition:box-shadow 80ms linear}:host-context([chrome-refresh-2023]):host(.floating-button:hover){box-shadow:var(--cr-elevation-3)}paper-ripple{color:var(--ink-color);height:var(--paper-ripple-height);left:var(--paper-ripple-left,0);top:var(--paper-ripple-top,0);width:var(--paper-ripple-width)}:host-context([chrome-refresh-2023]) paper-ripple{z-index:1}</style>

    <div id="background"></div>
    <slot id="prefixIcon" name="prefix-icon" on-slotchange="onPrefixIconSlotChanged_">
    </slot>
    <span id="content"><slot></slot></span>
    <slot id="suffixIcon" name="suffix-icon" on-slotchange="onSuffixIconSlotChanged_">
    </slot>
    <div id="hoverBackground" part="hoverBackground"></div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrButtonElementBase=mixinBehaviors([PaperRippleBehavior],PolymerElement);class CrButtonElement extends CrButtonElementBase{static get is(){return"cr-button"}static get template(){return getTemplate$T()}static get properties(){return{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},circleRipple:{type:Boolean,value:false},hasPrefixIcon_:{type:Boolean,reflectToAttribute:true,value:false},hasSuffixIcon_:{type:Boolean,reflectToAttribute:true,value:false}}}constructor(){super();this.spaceKeyDown_=false;this.timeoutIds_=new Set;this.addEventListener("blur",this.onBlur_.bind(this));this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));this.addEventListener("pointerdown",this.onPointerDown_.bind(this))}ready(){super.ready();if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}if(!this.hasAttribute("aria-disabled")){this.setAttribute("aria-disabled",this.disabled?"true":"false")}FocusOutlineManager.forDocument(document)}disconnectedCallback(){super.disconnectedCallback();this.timeoutIds_.forEach(clearTimeout);this.timeoutIds_.clear()}setTimeout_(fn,delay){if(!this.isConnected){return}const id=setTimeout((()=>{this.timeoutIds_.delete(id);fn()}),delay);this.timeoutIds_.add(id)}disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",this.disabled?"true":"false");this.applyTabIndex_()}applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value.toString())}onBlur_(){this.spaceKeyDown_=false;this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}onPrefixIconSlotChanged_(){this.hasPrefixIcon_=this.$.prefixIcon.assignedElements().length>0}onSuffixIconSlotChanged_(){this.hasSuffixIcon_=this.$.suffixIcon.assignedElements().length>0}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}this.getRipple().uiDownAction();if(e.key==="Enter"){this.click();this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}else if(e.key===" "){this.spaceKeyDown_=true}}onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click();this.getRipple().uiUpAction()}}onPointerDown_(){this.ensureRipple()}_createRipple(){const ripple=super._createRipple();if(this.circleRipple){ripple.setAttribute("center","");ripple.classList.add("circle")}return ripple}}customElements.define(CrButtonElement.is,CrButtonElement);const styleMod$6=document.createElement("dom-module");styleMod$6.appendChild(html`
  <template>
    <style>
:host{align-items:center;align-self:stretch;display:flex;margin:0;outline:0}:host(:not([effectively-disabled_])){cursor:pointer}:host(:not([no-hover],[effectively-disabled_]):hover){background-color:var(--cr-hover-background-color)}:host(:not([no-hover],[effectively-disabled_]):active){background-color:var(--cr-active-background-color)}:host(:not([no-hover],[effectively-disabled_])) cr-icon-button{--cr-icon-button-hover-background-color:transparent;--cr-icon-button-active-background-color:transparent}
    </style>
  </template>
`.content);styleMod$6.register("cr-actionable-row-style");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/class IronMeta{constructor(options){IronMeta[" "](options);this.type=options&&options.type||"default";this.key=options&&options.key;if(options&&"value"in options){this.value=options.value}}get value(){var type=this.type;var key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key]}}set value(value){var type=this.type;var key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(value==null){delete type[key]}else{type[key]=value}}}get list(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[]}return Object.keys(items).map((function(key){return metaDatas[this.type][key]}),this)}}byKey(key){this.key=key;return this.value}}IronMeta[" "]=function(){};IronMeta.types={};var metaDatas=IronMeta.types;Polymer({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:true},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:true},__computeMeta:function(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==undefined&&value!==meta.value){meta.value=value}else if(this.value!==meta.value){this.value=meta.value}return meta},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(self){if(self){this.value=this}},byKey:function(key){return new IronMeta({type:this.type,key:key}).value}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({_template:html`
    <style>
      :host {
        align-items: center;
        display: inline-flex;
        justify-content: center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function(src){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){if(this._usesIconset()){if(this._img&&this._img.parentNode){dom(this.root).removeChild(this._img)}if(this._iconName===""){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=false}this._img.src=this.src;dom(this.root).appendChild(this._img)}}});function getTemplate$S(){return html`<!--_html_template_start_-->    <style>:host{--cr-icon-button-fill-color:var(--google-grey-700);--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:36px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:0;overflow:hidden;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host-context([chrome-refresh-2023]):host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-size:32px;position:relative}:host(:hover){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}:host-context(html:not([chrome-refresh-2023])) :host(:active){background-color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}paper-ripple{display:none}:host-context([chrome-refresh-2023]) paper-ripple{--paper-ripple-opacity:1;color:var(--cr-active-background-color);display:block}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([dir=ltr]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([dir=ltr])[multiple-icons_]) iron-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);position:relative;width:100%}iron-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color, none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}</style>
    <div id="icon">
      <div id="maskedImage"></div>
    </div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrIconbuttonElementBase=mixinBehaviors([PaperRippleBehavior],PolymerElement);class CrIconButtonElement extends CrIconbuttonElementBase{static get is(){return"cr-icon-button"}static get template(){return getTemplate$S()}static get properties(){return{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},ironIcon:{type:String,observer:"onIronIconChanged_",reflectToAttribute:true},multipleIcons_:{type:Boolean,reflectToAttribute:true}}}constructor(){super();this.spaceKeyDown_=false;this.addEventListener("blur",this.onBlur_.bind(this));this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));if(document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("pointerdown",this.onPointerDown_.bind(this))}}ready(){super.ready();this.setAttribute("aria-disabled",this.disabled?"true":"false");if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}}toggleClass(className){this.classList.toggle(className)}disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",this.disabled?"true":"false");this.applyTabIndex_()}applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value.toString())}onBlur_(){this.spaceKeyDown_=false}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}onIronIconChanged_(){this.shadowRoot.querySelectorAll("iron-icon").forEach((el=>el.remove()));if(!this.ironIcon){return}const icons=(this.ironIcon||"").split(",");this.multipleIcons_=icons.length>1;icons.forEach((icon=>{const ironIcon=document.createElement("iron-icon");ironIcon.icon=icon;this.$.icon.appendChild(ironIcon);if(ironIcon.shadowRoot){ironIcon.shadowRoot.querySelectorAll("svg, img").forEach((child=>child.setAttribute("role","none")))}}))}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}else if(e.key===" "){this.spaceKeyDown_=true}}onKeyUp_(e){if(e.key===" "||e.key==="Enter"){e.preventDefault();e.stopPropagation()}if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click()}}onPointerDown_(){this.ensureRipple()}}customElements.define(CrIconButtonElement.is,CrIconButtonElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:false},useGlobalRtlAttribute:{type:Boolean,value:false}},created:function(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){this._icons=this._createIconMap();return Object.keys(this._icons).map((function(n){return this.name+":"+n}),this)},applyIcon:function(element,iconName){this.removeIcon(element);var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){var pde=dom(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},createIcon:function(iconName,targetIsRTL){return this._cloneIcon(iconName,this.rtlMirroring&&targetIsRTL)},removeIcon:function(element){if(element._svgIcon){dom(element.root||element).removeChild(element._svgIcon);element._svgIcon=null}},_targetIsRTL:function(target){if(this.__targetIsRTL==null){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=globalElement.getAttribute("dir")==="rtl"}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&window.getComputedStyle(target)["direction"]==="rtl"}}return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var icons=Object.create(null);dom(this).querySelectorAll("[id]").forEach((function(icon){icons[icon.id]=icon}));return icons},_cloneIcon:function(id,mirrorAllowed){this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},_prepareSvgClone:function(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(true),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});const template$6=html`
<iron-iconset-svg name="cr20" size="20">
  <svg>
    <defs>
      
      <g id="block">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM2 10C2 5.58 5.58 2 10 2C11.85 2 13.55 2.63 14.9 3.69L3.69 14.9C2.63 13.55 2 11.85 2 10ZM5.1 16.31C6.45 17.37 8.15 18 10 18C14.42 18 18 14.42 18 10C18 8.15 17.37 6.45 16.31 5.1L5.1 16.31Z">
        </path>
      </g>
      <g id="cloud-off">
        <path d="M16 18.125L13.875 16H5C3.88889 16 2.94444 15.6111 2.16667 14.8333C1.38889 14.0556 1 13.1111 1 12C1 10.9444 1.36111 10.0347 2.08333 9.27083C2.80556 8.50694 3.6875 8.09028 4.72917 8.02083C4.77083 7.86805 4.8125 7.72222 4.85417 7.58333C4.90972 7.44444 4.97222 7.30555 5.04167 7.16667L1.875 4L2.9375 2.9375L17.0625 17.0625L16 18.125ZM5 14.5H12.375L6.20833 8.33333C6.15278 8.51389 6.09722 8.70139 6.04167 8.89583C6 9.07639 5.95139 9.25694 5.89583 9.4375L4.83333 9.52083C4.16667 9.57639 3.61111 9.84028 3.16667 10.3125C2.72222 10.7708 2.5 11.3333 2.5 12C2.5 12.6944 2.74306 13.2847 3.22917 13.7708C3.71528 14.2569 4.30556 14.5 5 14.5ZM17.5 15.375L16.3958 14.2917C16.7153 14.125 16.9792 13.8819 17.1875 13.5625C17.3958 13.2431 17.5 12.8889 17.5 12.5C17.5 11.9444 17.3056 11.4722 16.9167 11.0833C16.5278 10.6944 16.0556 10.5 15.5 10.5H14.125L14 9.14583C13.9028 8.11806 13.4722 7.25694 12.7083 6.5625C11.9444 5.85417 11.0417 5.5 10 5.5C9.65278 5.5 9.31944 5.54167 9 5.625C8.69444 5.70833 8.39583 5.82639 8.10417 5.97917L7.02083 4.89583C7.46528 4.61806 7.93056 4.40278 8.41667 4.25C8.91667 4.08333 9.44444 4 10 4C11.4306 4 12.6736 4.48611 13.7292 5.45833C14.7847 6.41667 15.375 7.59722 15.5 9C16.4722 9 17.2986 9.34028 17.9792 10.0208C18.6597 10.7014 19 11.5278 19 12.5C19 13.0972 18.8611 13.6458 18.5833 14.1458C18.3194 14.6458 17.9583 15.0556 17.5 15.375Z">
        </path>
      </g>
      <g id="domain">
        <path d="M2,3 L2,17 L11.8267655,17 L13.7904799,17 L18,17 L18,7 L12,7 L12,3 L2,3 Z M8,13 L10,13 L10,15 L8,15 L8,13 Z M4,13 L6,13 L6,15 L4,15 L4,13 Z M8,9 L10,9 L10,11 L8,11 L8,9 Z M4,9 L6,9 L6,11 L4,11 L4,9 Z M12,9 L16,9 L16,15 L12,15 L12,9 Z M12,11 L14,11 L14,13 L12,13 L12,11 Z M8,5 L10,5 L10,7 L8,7 L8,5 Z M4,5 L6,5 L6,7 L4,7 L4,5 Z">
        </path>
      </g>
      <g id="kite">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.6327 8.00094L10.3199 2L16 8.00094L10.1848 16.8673C10.0995 16.9873 10.0071 17.1074 9.90047 17.2199C9.42417 17.7225 8.79147 18 8.11611 18C7.44076 18 6.80806 17.7225 6.33175 17.2199C5.85545 16.7173 5.59242 16.0497 5.59242 15.3371C5.59242 14.977 5.46445 14.647 5.22275 14.3919C4.98104 14.1369 4.66825 14.0019 4.32701 14.0019H4V12.6667H4.32701C5.00237 12.6667 5.63507 12.9442 6.11137 13.4468C6.58768 13.9494 6.85071 14.617 6.85071 15.3296C6.85071 15.6896 6.97867 16.0197 7.22038 16.2747C7.46209 16.5298 7.77488 16.6648 8.11611 16.6648C8.45735 16.6648 8.77014 16.5223 9.01185 16.2747C9.02396 16.2601 9.03607 16.246 9.04808 16.2319C9.08541 16.1883 9.12176 16.1458 9.15403 16.0947L9.55213 15.4946L4.6327 8.00094ZM10.3199 13.9371L6.53802 8.17116L10.3199 4.1814L14.0963 8.17103L10.3199 13.9371Z">
        </path>
      </g>
      <g id="menu">
        <path d="M2 4h16v2H2zM2 9h16v2H2zM2 14h16v2H2z"></path>
      </g>
      
        <g id="banner-warning">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13177 1.50386C9.51566 0.832046 10.4844 0.832046 10.8683 1.50386L18.8683 15.5039C19.2492 16.1705 18.7678 17 18 17H2.00001C1.23219 17 0.750823 16.1705 1.13177 15.5039L9.13177 1.50386ZM10 4.01556L3.72321 15H16.2768L10 4.01556ZM9 11H11V7H9V11ZM11 14H9V12H11V14Z">
          </path>
        </g>
        <g id="warning">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.13177 1.50386C9.51566 0.832046 10.4844 0.832046 10.8683 1.50386L18.8683 15.5039C19.2492 16.1705 18.7678 17 18 17H2.00001C1.23219 17 0.750823 16.1705 1.13177 15.5039L9.13177 1.50386ZM10 4.01556L3.72321 15H16.2768L10 4.01556ZM9 11H11V7H9V11ZM11 14H9V12H11V14Z">
          </path>
        </g>
      
  </defs></svg>
</iron-iconset-svg>


<iron-iconset-svg name="cr" size="24">
  <svg>
    <defs>
      
      <g id="account-child-invert" viewBox="0 0 48 48">
        <path d="M24 4c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"></path>
        <path fill="none" d="M0 0h48v48H0V0z"></path>
        <circle fill="none" cx="24" cy="26" r="4"></circle>
        <path d="M24 18c-6.16 0-13 3.12-13 7.23v11.54c0 2.32 2.19 4.33 5.2 5.63 2.32 1 5.12 1.59 7.8 1.59.66 0 1.33-.06 2-.14v-5.2c-.67.08-1.34.14-2 .14-2.63 0-5.39-.57-7.68-1.55.67-2.12 4.34-3.65 7.68-3.65.86 0 1.75.11 2.6.29 2.79.62 5.2 2.15 5.2 4.04v4.47c3.01-1.31 5.2-3.31 5.2-5.63V25.23C37 21.12 30.16 18 24 18zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z">
        </path>
      </g>
      <g id="add">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
      </g>
      <g id="arrow-back">
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z">
        </path>
      </g>
      <g id="arrow-drop-up">
        <path d="M7 14l5-5 5 5z"></path>
      </g>
      <g id="arrow-drop-down">
        <path d="M7 10l5 5 5-5z"></path>
      </g>
      <g id="arrow-forward">
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z">
        </path>
      </g>
      <g id="arrow-right">
        <path d="M10 7l5 5-5 5z"></path>
      </g>
      
        <g id="bluetooth">
          <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z">
          </path>
        </g>
        <g id="camera-alt">
          <circle cx="12" cy="12" r="3.2"></circle>
          <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z">
          </path>
        </g>
        <g id="work">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z">
          </path>
        </g>
      
      <g id="cancel">
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z">
        </path>
      </g>
      <g id="check">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </g>
      <g id="check-circle">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z">
        </path>
      </g>
      <g id="chevron-left">
        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
      </g>
      <g id="chevron-right">
        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
      </g>
      <g id="clear">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
        </path>
      </g>
      <g id="computer">
        <path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z">
        </path>
      </g>
      <g id="create">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z">
        </path>
      </g>
      <g id="delete">
        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z">
        </path>
      </g>
      <g id="domain">
        <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z">
        </path>
      </g>
      <g id="error">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z">
        </path>
      </g>
      <g id="error-outline">
        <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z">
        </path>
      </g>
      <g id="expand-less">
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
      </g>
      <g id="expand-more">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </g>
      <g id="extension">
        <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z">
        </path>
      </g>
      <g id="file-download">
        <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path>
      </g>
      
        <g id="folder-filled">
          <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z">
          </path>
        </g>
      
      <g id="fullscreen">
        <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z">
        </path>
      </g>
      <g id="group">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z">
        </path>
      </g>
      <g id="help-outline">
        <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z">
        </path>
      </g>
      <g id="history">
        <path d="M12.945312 22.75 C 10.320312 22.75 8.074219 21.839844 6.207031 20.019531 C 4.335938 18.199219 3.359375 15.972656 3.269531 13.34375 L 5.089844 13.34375 C 5.175781 15.472656 5.972656 17.273438 7.480469 18.742188 C 8.988281 20.210938 10.808594 20.945312 12.945312 20.945312 C 15.179688 20.945312 17.070312 20.164062 18.621094 18.601562 C 20.167969 17.039062 20.945312 15.144531 20.945312 12.910156 C 20.945312 10.714844 20.164062 8.855469 18.601562 7.335938 C 17.039062 5.816406 15.15625 5.054688 12.945312 5.054688 C 11.710938 5.054688 10.554688 5.339844 9.480469 5.902344 C 8.402344 6.46875 7.476562 7.226562 6.699219 8.179688 L 9.585938 8.179688 L 9.585938 9.984375 L 3.648438 9.984375 L 3.648438 4.0625 L 5.453125 4.0625 L 5.453125 6.824219 C 6.386719 5.707031 7.503906 4.828125 8.804688 4.199219 C 10.109375 3.566406 11.488281 3.25 12.945312 3.25 C 14.300781 3.25 15.570312 3.503906 16.761719 4.011719 C 17.949219 4.519531 18.988281 5.214844 19.875 6.089844 C 20.761719 6.964844 21.464844 7.992188 21.976562 9.167969 C 22.492188 10.34375 22.75 11.609375 22.75 12.964844 C 22.75 14.316406 22.492188 15.589844 21.976562 16.777344 C 21.464844 17.964844 20.761719 19.003906 19.875 19.882812 C 18.988281 20.765625 17.949219 21.464844 16.761719 21.976562 C 15.570312 22.492188 14.300781 22.75 12.945312 22.75 Z M 16.269531 17.460938 L 12.117188 13.34375 L 12.117188 7.527344 L 13.921875 7.527344 L 13.921875 12.601562 L 17.550781 16.179688 Z M 16.269531 17.460938">
        </path>
      </g>
      <g id="info">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z">
        </path>
      </g>
      <g id="info-outline">
        <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z">
        </path>
      </g>
      <g id="insert-drive-file">
        <path d="M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z">
        </path>
      </g>
      <g id="location-on">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z">
        </path>
      </g>
      <g id="mic">
        <path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z">
        </path>
      </g>
      <g id="more-vert">
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z">
        </path>
      </g>
      <g id="open-in-new">
        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z">
        </path>
      </g>
      <g id="person">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
        </path>
      </g>
      <g id="phonelink">
        <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z">
        </path>
      </g>
      <g id="print">
        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z">
        </path>
      </g>
      <g id="schedule">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z">
        </path>
      </g>
      <g id="search">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
        </path>
      </g>
      <g id="security">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z">
        </path>
      </g>
      
        <g id="sim-card-alert">
          <path d="M18 2h-8L4.02 8 4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 15h-2v-2h2v2zm0-4h-2V8h2v5z">
          </path>
        </g>
        <g id="sim-lock">
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z">
          </path>
        </g>
        <g id="sms-connect">
          <path d="M20,2C21.1,2 22,2.9 22,4L22,16C22,17.1 21.1,18 20,18L6,18L2,22L2.01,4C2.01,2.9 2.9,2 4,2L20,2ZM8,8L4,12L8,16L8,13L14,13L14,11L8,11L8,8ZM19.666,7.872L16.038,4.372L16.038,6.997L10,6.997L10,9L16.038,9L16.038,11.372L19.666,7.872Z">
          </path>
        </g>
      
      
      <g id="settings_icon">
        <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z">
        </path>
      </g>
      <g id="star">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z">
        </path>
      </g>
      <g id="sync">
        <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z">
        </path>
      </g>
      <g id="thumbs-down">
        <path d="M6 3h11v13l-7 7-1.25-1.25a1.454 1.454 0 0 1-.3-.475c-.067-.2-.1-.392-.1-.575v-.35L9.45 16H3c-.533 0-1-.2-1.4-.6-.4-.4-.6-.867-.6-1.4v-2c0-.117.017-.242.05-.375s.067-.258.1-.375l3-7.05c.15-.333.4-.617.75-.85C5.25 3.117 5.617 3 6 3Zm9 2H6l-3 7v2h9l-1.35 5.5L15 15.15V5Zm0 10.15V5v10.15Zm2 .85v-2h3V5h-3V3h5v13h-5Z">
        </path>
      </g>
      <g id="thumbs-up">
        <path d="M18 21H7V8l7-7 1.25 1.25c.117.117.208.275.275.475.083.2.125.392.125.575v.35L14.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35Zm-9-2h9l3-7v-2h-9l1.35-5.5L9 8.85V19ZM9 8.85V19 8.85ZM7 8v2H4v9h3v2H2V8h5Z">
        </path>
      </g>
      <g id="videocam">
        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z">
        </path>
      </g>
      <g id="warning">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template$6.content);function getTemplate$R(){return html`<!--_html_template_start_--><style include="cr-actionable-row-style cr-shared-style cr-hidden-style">:host{box-sizing:border-box;flex:1;font-family:inherit;font-size:100%;line-height:154%;min-height:var(--cr-section-min-height);padding:0}:host(:not([embedded])){padding:0 var(--cr-section-padding)}#startIcon{--iron-icon-fill-color:var(--cr-link-row-start-icon-color,
        var(--google-grey-700));display:flex;flex-shrink:0;padding-inline-end:var(--cr-icon-button-margin-start);width:var(--cr-link-row-icon-width,var(--cr-icon-size))}@media (prefers-color-scheme:dark){#startIcon{--iron-icon-fill-color:var(--cr-link-row-start-icon-color,
          var(--google-grey-500))}}#labelWrapper{flex:1;flex-basis:.000000001px;padding-bottom:var(--cr-section-vertical-padding);padding-top:var(--cr-section-vertical-padding);text-align:start}#label,#subLabel{display:flex}#buttonAriaDescription{clip:rect(0,0,0,0);display:block;position:fixed}</style>
<iron-icon id="startIcon" icon="[[startIcon]]" hidden="[[!startIcon]]" aria-hidden="true">
</iron-icon>
<div id="labelWrapper" hidden="[[hideLabelWrapper_]]">
  <div id="label" aria-hidden="[[!ariaShowLabel]]">
    [[label]]
    <slot name="label"></slot>
  </div>
  <div id="subLabel" class="cr-secondary-text" aria-hidden="[[!ariaShowSublabel]]">
    [[subLabel]]
    <slot name="sub-label"></slot>
  </div>
</div>
<slot></slot>
<div id="buttonAriaDescription" aria-hidden="true">
  [[computeButtonAriaDescription_(external, buttonAriaDescription)]]
</div>
<cr-icon-button id="icon" iron-icon="[[getIcon_(external)]]" role="link" part="icon" aria-roledescription$="[[roleDescription]]" aria-describedby="buttonAriaDescription" aria-labelledby="label subLabel" disabled="[[disabled]]">
</cr-icon-button>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrLinkRowElement extends PolymerElement{static get is(){return"cr-link-row"}static get template(){return getTemplate$R()}static get properties(){return{ariaShowLabel:{type:Boolean,reflectToAttribute:true,value:false},ariaShowSublabel:{type:Boolean,reflectToAttribute:true,value:false},startIcon:{type:String,value:""},label:{type:String,value:""},subLabel:{type:String,value:""},disabled:{type:Boolean,reflectToAttribute:true},external:{type:Boolean,value:false},usingSlottedLabel:{type:Boolean,value:false},roleDescription:String,buttonAriaDescription:String,hideLabelWrapper_:{type:Boolean,computed:"computeHideLabelWrapper_(label, usingSlottedLabel)"}}}focus(){this.$.icon.focus()}computeHideLabelWrapper_(){return!(this.label||this.usingSlottedLabel)}getIcon_(){return this.external?"cr:open-in-new":"cr:arrow-right"}computeButtonAriaDescription_(external,buttonAriaDescription){return buttonAriaDescription??(external?loadTimeData.getString("opensInNewTab"):"")}}customElements.define(CrLinkRowElement.is,CrLinkRowElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$5=html`<dom-module id="paper-spinner-styles">
  <template>
    <style>
      /*
      /**************************/
      /* STYLES FOR THE SPINNER */
      /**************************/

      /*
       * Constants:
       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
       *      ARCSTARTROT = 216 degrees (how much the start location of the arc
       *                                should rotate each time, 216 gives us a
       *                                5 pointed star shape (it's 360/5 * 3).
       *                                For a 7 pointed star, we might do
       *                                360/7 * 3 = 154.286)
       *      SHRINK_TIME = 400ms
       */

      :host {
        display: inline-block;
        position: relative;
        width: 28px;
        height: 28px;

        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
        --paper-spinner-container-rotation-duration: 1568ms;

        /* ARCTIME */
        --paper-spinner-expand-contract-duration: 1333ms;

        /* 4 * ARCTIME */
        --paper-spinner-full-cycle-duration: 5332ms;

        /* SHRINK_TIME */
        --paper-spinner-cooldown-duration: 400ms;
      }

      #spinnerContainer {
        width: 100%;
        height: 100%;

        /* The spinner does not have any contents that would have to be
         * flipped if the direction changes. Always use ltr so that the
         * style works out correctly in both cases. */
        direction: ltr;
      }

      #spinnerContainer.active {
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
      }

      @-webkit-keyframes container-rotate {
        to { -webkit-transform: rotate(360deg) }
      }

      @keyframes container-rotate {
        to { transform: rotate(360deg) }
      }

      .spinner-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        white-space: nowrap;
        color: var(--paper-spinner-color, var(--google-blue-500));
      }

      .layer-1 {
        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));
      }

      .layer-2 {
        color: var(--paper-spinner-layer-2-color, var(--google-red-500));
      }

      .layer-3 {
        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));
      }

      .layer-4 {
        color: var(--paper-spinner-layer-4-color, var(--google-green-500));
      }

      /**
       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
       *
       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
       * guarantee that the animation will start _exactly_ after that value. So we avoid using
       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it
       * seems).
       */
      .active .spinner-layer {
        animation-name: fill-unfill-rotate;
        animation-duration: var(--paper-spinner-full-cycle-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
        opacity: 1;
      }

      .active .spinner-layer.layer-1 {
        animation-name: fill-unfill-rotate, layer-1-fade-in-out;
      }

      .active .spinner-layer.layer-2 {
        animation-name: fill-unfill-rotate, layer-2-fade-in-out;
      }

      .active .spinner-layer.layer-3 {
        animation-name: fill-unfill-rotate, layer-3-fade-in-out;
      }

      .active .spinner-layer.layer-4 {
        animation-name: fill-unfill-rotate, layer-4-fade-in-out;
      }

      @-webkit-keyframes fill-unfill-rotate {
        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @keyframes fill-unfill-rotate {
        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @-webkit-keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @-webkit-keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      .circle-clipper {
        display: inline-block;
        position: relative;
        width: 50%;
        height: 100%;
        overflow: hidden;
      }

      /**
       * Patch the gap that appear between the two adjacent div.circle-clipper while the
       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).
       */
      .spinner-layer::after {
        content: '';
        left: 45%;
        width: 10%;
        border-top-style: solid;
      }

      .spinner-layer::after,
      .circle-clipper .circle {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        border-width: var(--paper-spinner-stroke-width, 3px);
        border-radius: 50%;
      }

      .circle-clipper .circle {
        bottom: 0;
        width: 200%;
        border-style: solid;
        border-bottom-color: transparent !important;
      }

      .circle-clipper.left .circle {
        left: 0;
        border-right-color: transparent !important;
        transform: rotate(129deg);
      }

      .circle-clipper.right .circle {
        left: -100%;
        border-left-color: transparent !important;
        transform: rotate(-129deg);
      }

      .active .gap-patch::after,
      .active .circle-clipper .circle {
        animation-duration: var(--paper-spinner-expand-contract-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
      }

      .active .circle-clipper.left .circle {
        animation-name: left-spin;
      }

      .active .circle-clipper.right .circle {
        animation-name: right-spin;
      }

      @-webkit-keyframes left-spin {
        0% { -webkit-transform: rotate(130deg) }
        50% { -webkit-transform: rotate(-5deg) }
        to { -webkit-transform: rotate(130deg) }
      }

      @keyframes left-spin {
        0% { transform: rotate(130deg) }
        50% { transform: rotate(-5deg) }
        to { transform: rotate(130deg) }
      }

      @-webkit-keyframes right-spin {
        0% { -webkit-transform: rotate(-130deg) }
        50% { -webkit-transform: rotate(5deg) }
        to { -webkit-transform: rotate(-130deg) }
      }

      @keyframes right-spin {
        0% { transform: rotate(-130deg) }
        50% { transform: rotate(5deg) }
        to { transform: rotate(-130deg) }
      }

      #spinnerContainer.cooldown {
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      @-webkit-keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(template$5.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const PaperSpinnerBehavior={properties:{active:{type:Boolean,value:false,reflectToAttribute:true,observer:"__activeChanged"},alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:false}},__computeContainerClasses:function(active,coolingDown){return[active||coolingDown?"active":"",coolingDown?"cooldown":""].join(" ")},__activeChanged:function(active,old){this.__setAriaHidden(!active);this.__coolingDown=!active&&old},__altChanged:function(alt){if(alt==="loading"){this.alt=this.getAttribute("aria-label")||alt}else{this.__setAriaHidden(alt==="");this.setAttribute("aria-label",alt)}},__setAriaHidden:function(hidden){var attr="aria-hidden";if(hidden){this.setAttribute(attr,"true")}else{this.removeAttribute(attr)}},__reset:function(){this.active=false;this.__coolingDown=false}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$4=html`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;template$4.setAttribute("strip-whitespace","");Polymer({_template:template$4,is:"paper-spinner-lite",behaviors:[PaperSpinnerBehavior]});const template$3=html`
<custom-style>
  <style>
html{--card-max-width:960px;--side-bar-width:300px;--toolbar-height:56px;--password-manager-main-basis:calc(var(--cr-centered-card-max-width) /
      var(--cr-centered-card-width-percentage));--control-label-spacing:20px;--section-min-height:48px;--two-line-section-min-height:64px;--error-color:var(--google-red-700)}@media (prefers-color-scheme:dark){html{--error-color:var(--google-red-300)}}
  </style>
</custom-style>
`;document.head.appendChild(template$3.content);const styleMod$5=document.createElement("dom-module");styleMod$5.appendChild(html`
  <template>
    <style>
.card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow)}cr-link-row[non-clickable]{background-color:var(--cr-card-background-color);cursor:default}.page-title{font-weight:400}.label{min-height:20px}.single-line-label{min-height:var(--section-min-height)}.flex-centered{align-items:center;display:flex}.elide-left{direction:rtl}.elide-left>a{direction:ltr;unicode-bidi:bidi-override}.dialog-title{color:var(--cr-primary-text-color);font-size:15px;font-weight:400;line-height:22px;margin:0;padding-block-end:16px;padding-block-start:16px}.settings-cr-link-row{--cr-icon-button-margin-start:0px}.site-link{color:var(--cr-primary-text-color);display:block;height:auto;line-height:154%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-elide{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}cr-input.password-input::part(input),input.password-input{font-family:'DejaVu Sans Mono',monospace}.input-field{margin-inline-end:34px;--cr-input-padding-start:20px;--cr-input-min-height:40px;--cr-input-error-display:none;--cr-input-border-radius:10px;--cr-icon-button-margin-start:0;--cr-icon-button-margin-end:0}
    </style>
  </template>
`.content);styleMod$5.register("shared-style");function getTemplate$Q(){return html`<!--_html_template_start_--><style>:host{clip:rect(0 0 0 0);height:1px;overflow:hidden;position:fixed;width:1px}</style>

<div id="messages" role="alert" aria-live="polite" aria-relevant="additions">
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TIMEOUT_MS=150;const instances=new Map;function getInstance(container=document.body){if(instances.has(container)){return instances.get(container)}assert(container.isConnected);const instance=new CrA11yAnnouncerElement;container.appendChild(instance);instances.set(container,instance);return instance}class CrA11yAnnouncerElement extends PolymerElement{constructor(){super(...arguments);this.currentTimeout_=null;this.messages_=[]}static get is(){return"cr-a11y-announcer"}static get template(){return getTemplate$Q()}disconnectedCallback(){super.disconnectedCallback();if(this.currentTimeout_!==null){clearTimeout(this.currentTimeout_);this.currentTimeout_=null}for(const[parent,instance]of instances){if(instance===this){instances.delete(parent);break}}}announce(message){if(this.currentTimeout_!==null){clearTimeout(this.currentTimeout_);this.currentTimeout_=null}this.messages_.push(message);this.currentTimeout_=setTimeout((()=>{const messagesDiv=this.shadowRoot.querySelector("#messages");messagesDiv.innerHTML=window.trustedTypes.emptyHTML;for(const message of this.messages_){const div=document.createElement("div");div.textContent=message;messagesDiv.appendChild(div)}this.dispatchEvent(new CustomEvent("cr-a11y-announcer-messages-sent",{bubbles:true,detail:{messages:this.messages_.slice()}}));this.messages_.length=0;this.currentTimeout_=null}),TIMEOUT_MS)}}customElements.define(CrA11yAnnouncerElement.is,CrA11yAnnouncerElement);
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function sanitizeInnerHtmlInternal(rawString,opts){opts=opts||{};const html=parseHtmlSubset(`<b>${rawString}</b>`,opts.tags,opts.attrs).firstElementChild;return html.innerHTML}let sanitizedPolicy=null;function sanitizeInnerHtml(rawString,opts){assert(window.trustedTypes);if(sanitizedPolicy===null){sanitizedPolicy=window.trustedTypes.createPolicy("sanitize-inner-html",{createHTML:sanitizeInnerHtmlInternal,createScript:()=>assertNotReached(),createScriptURL:()=>assertNotReached()})}return sanitizedPolicy.createHTML(rawString,opts)}const allowAttribute=(_node,_value)=>true;const allowedAttributes=new Map([["href",(node,value)=>node.tagName==="A"&&(value.startsWith("chrome://")||value.startsWith("https://")||value==="#")],["target",(node,value)=>node.tagName==="A"&&value==="_blank"]]);const allowedOptionalAttributes=new Map([["class",allowAttribute],["id",allowAttribute],["is",(_node,value)=>value==="action-link"||value===""],["role",(_node,value)=>value==="link"],["src",(node,value)=>node.tagName==="IMG"&&value.startsWith("chrome://")],["tabindex",allowAttribute],["aria-hidden",allowAttribute],["aria-label",allowAttribute],["aria-labelledby",allowAttribute]]);const allowedTags=new Set(["A","B","I","BR","DIV","EM","KBD","P","PRE","SPAN","STRONG"]);const allowedOptionalTags=new Set(["IMG","LI","UL"]);let unsanitizedPolicy;function mergeTags(optTags){const clone=new Set(allowedTags);optTags.forEach((str=>{const tag=str.toUpperCase();if(allowedOptionalTags.has(tag)){clone.add(tag)}}));return clone}function mergeAttrs(optAttrs){const clone=new Map(allowedAttributes);optAttrs.forEach((key=>{if(allowedOptionalAttributes.has(key)){clone.set(key,allowedOptionalAttributes.get(key))}}));return clone}function walk(n,f){f(n);for(let i=0;i<n.childNodes.length;i++){walk(n.childNodes[i],f)}}function assertElement(tags,node){if(!tags.has(node.tagName)){throw Error(node.tagName+" is not supported")}}function assertAttribute(attrs,attrNode,node){const n=attrNode.nodeName;const v=attrNode.nodeValue||"";if(!attrs.has(n)||!attrs.get(n)(node,v)){throw Error(node.tagName+"["+n+'="'+v+'"] is not supported')}}function parseHtmlSubset(s,extraTags,extraAttrs){const tags=extraTags?mergeTags(extraTags):allowedTags;const attrs=extraAttrs?mergeAttrs(extraAttrs):allowedAttributes;const doc=document.implementation.createHTMLDocument("");const r=doc.createRange();r.selectNode(doc.body);if(window.trustedTypes){if(!unsanitizedPolicy){unsanitizedPolicy=window.trustedTypes.createPolicy("parse-html-subset",{createHTML:untrustedHTML=>untrustedHTML,createScript:()=>assertNotReached(),createScriptURL:()=>assertNotReached()})}s=unsanitizedPolicy.createHTML(s)}const df=r.createContextualFragment(s);walk(df,(function(node){switch(node.nodeType){case Node.ELEMENT_NODE:assertElement(tags,node);const nodeAttrs=node.attributes;for(let i=0;i<nodeAttrs.length;++i){assertAttribute(attrs,nodeAttrs[i],node)}break;case Node.COMMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:case Node.TEXT_NODE:break;default:throw Error("Node type "+node.nodeType+" is not supported")}}));return df}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const I18nMixin=dedupingMixin((superClass=>{class I18nMixin extends superClass{i18nRaw_(id,...varArgs){return varArgs.length===0?loadTimeData.getString(id):loadTimeData.getStringF(id,...varArgs)}i18n(id,...varArgs){const rawString=this.i18nRaw_(id,...varArgs);return parseHtmlSubset(`<b>${rawString}</b>`).firstChild.textContent}i18nAdvanced(id,opts){opts=opts||{};const rawString=this.i18nRaw_(id,...opts.substitutions||[]);return sanitizeInnerHtml(rawString,opts)}i18nDynamic(_locale,id,...varArgs){return this.i18n(id,...varArgs)}i18nRecursive(locale,id,...varArgs){let args=varArgs;if(args.length>0){args=args.map((str=>this.i18nExists(str)?loadTimeData.getString(str):str))}return this.i18nDynamic(locale,id,...args)}i18nExists(id){return loadTimeData.valueExists(id)}}return I18nMixin}));
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const isMac=/Mac/.test(navigator.platform);const isWindows=/Win/.test(navigator.platform);const isAndroid=/Android/.test(navigator.userAgent);const isIOS=/CriOS/.test(navigator.userAgent);
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let hideInk=false;assert(!isIOS,"pointerdown doesn't work on iOS");document.addEventListener("pointerdown",(function(){hideInk=true}),true);document.addEventListener("keydown",(function(){hideInk=false}),true);function focusWithoutInk(toFocus){if(!("noink"in toFocus)||!hideInk){toFocus.focus();return}const toFocusWithNoInk=toFocus;assert(document===toFocusWithNoInk.ownerDocument);const{noink:noink}=toFocusWithNoInk;toFocusWithNoInk.noink=true;toFocusWithNoInk.focus();toFocusWithNoInk.noink=noink}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PluralStringProxyImpl{getPluralString(messageName,itemCount){return sendWithPromise("getPluralString",messageName,itemCount)}getPluralStringTupleWithComma(messageName1,itemCount1,messageName2,itemCount2){return sendWithPromise("getPluralStringTupleWithComma",messageName1,itemCount1,messageName2,itemCount2)}getPluralStringTupleWithPeriods(messageName1,itemCount1,messageName2,itemCount2){return sendWithPromise("getPluralStringTupleWithPeriods",messageName1,itemCount1,messageName2,itemCount2)}static getInstance(){return instance$6||(instance$6=new PluralStringProxyImpl)}static setInstance(obj){instance$6=obj}}let instance$6=null;function getTemplate$P(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style">#checkupContent{margin-top:16px}#checkupStatus{align-items:center;display:flex;min-height:72px}#illustartion{align-items:center;background-color:var(--google-grey-50);border-top-left-radius:inherit;border-top-right-radius:inherit;display:flex;height:120px;justify-content:center}@media (prefers-color-scheme:dark){#illustartion{background-color:#1f1f1f}}#bannerImage{height:96px}#spinner{--paper-spinner-stroke-width:2px;height:16px;line-height:100%;margin-inline-start:20px;width:16px}#labelWrapper{flex:1;margin-inline-end:var(--control-label-spacing);margin-inline-start:20px}#refreshButton{margin-inline-end:10px}#retryButton{margin-inline-end:20px}cr-link-row[non-clickable]::part(icon){display:none}cr-link-row{--cr-link-row-start-icon-color:var(--google-green-700);--cr-link-row-icon-width:16px}cr-link-row[show-yellow-icon]{--cr-link-row-start-icon-color:var(--google-yellow-700)}cr-link-row[show-red-icon]{--cr-link-row-start-icon-color:var(--google-red-600)}@media (prefers-color-scheme:dark){cr-link-row{--cr-link-row-start-icon-color:var(--google-green-300)}cr-link-row[show-yellow-icon]{--cr-link-row-start-icon-color:var(--google-yellow-300)}cr-link-row[show-red-icon]{--cr-link-row-start-icon-color:var(--google-red-300)}}#checkupResult,#weakRow{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}</style>
<h2 class="page-title">$i18n{checkupTitle}</h2>
<div id="checkupContent" class="card">
  <div id="illustartion" role="presentation">
    <picture>
      <source class="banner" srcset="./images/[[bannerImage_]]_dark.svg" media="(prefers-color-scheme: dark)">
      <img id="bannerImage" class="banner" alt="" src="./images/[[bannerImage_]].svg">
    </picture>
  </div>
  <div class="hr" id="checkupStatus">
    <paper-spinner-lite id="spinner" active hidden="[[!isCheckRunning_]]">
    </paper-spinner-lite>
    <div id="labelWrapper">
      <div id="checkupStatusLabel" class="title">[[checkedPasswordsText_]]</div>
      <div id="checkupStatusSubLabel" class="cr-secondary-text label">
        [[getCheckupSublabelValue_(status_)]]
      </div>
    </div>
    <div id="checkupButtons" hidden="[[!showCheckButton_(status_)]]">
      <cr-icon-button id="refreshButton" class="icon-refresh" disabled="[[isCheckRunning_]]" hidden="[[showRetryButton_(status_)]]" on-click="onPasswordCheckButtonClick_" title="$i18n{reload}" aria-label="$i18n{runCheckupAriaDescription}">
      </cr-icon-button>
      <cr-button id="retryButton" hidden="[[!showRetryButton_(status_)]]" class="action-button" on-click="onPasswordCheckButtonClick_">
        $i18n{tryAgain}
      </cr-button>
    </div>
  </div>
  <div id="checkupResult" hidden="[[!showCheckupResult_(status_)]]">
    <cr-link-row id="compromisedRow" class="hr" start-icon="[[getIcon_(compromisedPasswords_, 'true', status_)]]" label="[[getCompromisedSectionLabel_(status_, compromisedPasswordsText_)]]" sub-label="[[getCompromisedSectionSublabel_(status_, compromisedPasswords_)]]" show-yellow-icon$="[[didCompromiseCheckFail_(status_)]]" show-red-icon$="[[hasIssues_(compromisedPasswords_)]]" non-clickable$="[[!hasIssues_(compromisedPasswords_)]]" on-click="onCompromisedClick_" role-description="button" aria-show-label aria-show-sublabel>
    </cr-link-row>
    <cr-link-row id="reusedRow" start-icon="[[getIcon_(reusedPasswords_)]]" label="[[reusedPasswordsText_]]" class="hr" sub-label="[[getReusedSectionSublabel_(reusedPasswords_)]]" show-yellow-icon$="[[hasIssues_(reusedPasswords_)]]" non-clickable$="[[!hasIssues_(reusedPasswords_)]]" on-click="onReusedClick_" role-description="button" aria-show-label aria-show-sublabel>
    </cr-link-row>
    <cr-link-row id="weakRow" start-icon="[[getIcon_(weakPasswords_)]]" label="[[weakPasswordsText_]]" class="hr" sub-label="[[getWeakSectionSublabel_(weakPasswords_)]]" show-yellow-icon$="[[hasIssues_(weakPasswords_)]]" non-clickable$="[[!hasIssues_(weakPasswords_)]]" on-click="onWeakClick_" role-description="button" aria-show-label aria-show-sublabel>
    </cr-link-row>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var PasswordCheckInteraction;(function(PasswordCheckInteraction){PasswordCheckInteraction[PasswordCheckInteraction["START_CHECK_AUTOMATICALLY"]=0]="START_CHECK_AUTOMATICALLY";PasswordCheckInteraction[PasswordCheckInteraction["START_CHECK_MANUALLY"]=1]="START_CHECK_MANUALLY";PasswordCheckInteraction[PasswordCheckInteraction["STOP_CHECK"]=2]="STOP_CHECK";PasswordCheckInteraction[PasswordCheckInteraction["CHANGE_PASSWORD"]=3]="CHANGE_PASSWORD";PasswordCheckInteraction[PasswordCheckInteraction["EDIT_PASSWORD"]=4]="EDIT_PASSWORD";PasswordCheckInteraction[PasswordCheckInteraction["REMOVE_PASSWORD"]=5]="REMOVE_PASSWORD";PasswordCheckInteraction[PasswordCheckInteraction["SHOW_PASSWORD"]=6]="SHOW_PASSWORD";PasswordCheckInteraction[PasswordCheckInteraction["MUTE_PASSWORD"]=7]="MUTE_PASSWORD";PasswordCheckInteraction[PasswordCheckInteraction["UNMUTE_PASSWORD"]=8]="UNMUTE_PASSWORD";PasswordCheckInteraction[PasswordCheckInteraction["CHANGE_PASSWORD_AUTOMATICALLY"]=9]="CHANGE_PASSWORD_AUTOMATICALLY";PasswordCheckInteraction[PasswordCheckInteraction["COUNT"]=10]="COUNT"})(PasswordCheckInteraction||(PasswordCheckInteraction={}));var PasswordViewPageInteractions;(function(PasswordViewPageInteractions){PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_ROW_CLICKED"]=0]="CREDENTIAL_ROW_CLICKED";PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_FOUND"]=1]="CREDENTIAL_FOUND";PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_NOT_FOUND"]=2]="CREDENTIAL_NOT_FOUND";PasswordViewPageInteractions[PasswordViewPageInteractions["USERNAME_COPY_BUTTON_CLICKED"]=3]="USERNAME_COPY_BUTTON_CLICKED";PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_COPY_BUTTON_CLICKED"]=4]="PASSWORD_COPY_BUTTON_CLICKED";PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_SHOW_BUTTON_CLICKED"]=5]="PASSWORD_SHOW_BUTTON_CLICKED";PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_EDIT_BUTTON_CLICKED"]=6]="PASSWORD_EDIT_BUTTON_CLICKED";PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_DELETE_BUTTON_CLICKED"]=7]="PASSWORD_DELETE_BUTTON_CLICKED";PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_EDITED"]=8]="CREDENTIAL_EDITED";PasswordViewPageInteractions[PasswordViewPageInteractions["TIMED_OUT_IN_EDIT_DIALOG"]=9]="TIMED_OUT_IN_EDIT_DIALOG";PasswordViewPageInteractions[PasswordViewPageInteractions["TIMED_OUT_IN_VIEW_PAGE"]=10]="TIMED_OUT_IN_VIEW_PAGE";PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_REQUESTED_BY_URL"]=11]="CREDENTIAL_REQUESTED_BY_URL";PasswordViewPageInteractions[PasswordViewPageInteractions["PASSKEY_DISPLAY_NAME_COPY_BUTTON_CLICKED"]=12]="PASSKEY_DISPLAY_NAME_COPY_BUTTON_CLICKED";PasswordViewPageInteractions[PasswordViewPageInteractions["PASSKEY_DELETE_BUTTON_CLICKED"]=13]="PASSKEY_DELETE_BUTTON_CLICKED";PasswordViewPageInteractions[PasswordViewPageInteractions["PASSKEY_EDIT_BUTTON_CLICKED"]=14]="PASSKEY_EDIT_BUTTON_CLICKED";PasswordViewPageInteractions[PasswordViewPageInteractions["COUNT"]=15]="COUNT"})(PasswordViewPageInteractions||(PasswordViewPageInteractions={}));class PasswordManagerImpl{addSavedPasswordListChangedListener(listener){chrome.passwordsPrivate.onSavedPasswordsListChanged.addListener(listener)}removeSavedPasswordListChangedListener(listener){chrome.passwordsPrivate.onSavedPasswordsListChanged.removeListener(listener)}addBlockedSitesListChangedListener(listener){chrome.passwordsPrivate.onPasswordExceptionsListChanged.addListener(listener)}removeBlockedSitesListChangedListener(listener){chrome.passwordsPrivate.onPasswordExceptionsListChanged.removeListener(listener)}addPasswordCheckStatusListener(listener){chrome.passwordsPrivate.onPasswordCheckStatusChanged.addListener(listener)}removePasswordCheckStatusListener(listener){chrome.passwordsPrivate.onPasswordCheckStatusChanged.removeListener(listener)}addInsecureCredentialsListener(listener){chrome.passwordsPrivate.onInsecureCredentialsChanged.addListener(listener)}removeInsecureCredentialsListener(listener){chrome.passwordsPrivate.onInsecureCredentialsChanged.removeListener(listener)}getSavedPasswordList(){return chrome.passwordsPrivate.getSavedPasswordList().catch((()=>[]))}getCredentialGroups(){return chrome.passwordsPrivate.getCredentialGroups()}getBlockedSitesList(){return chrome.passwordsPrivate.getPasswordExceptionList().catch((()=>[]))}getPasswordCheckStatus(){return chrome.passwordsPrivate.getPasswordCheckStatus()}getInsecureCredentials(){return chrome.passwordsPrivate.getInsecureCredentials()}getCredentialsWithReusedPassword(){return chrome.passwordsPrivate.getCredentialsWithReusedPassword()}startBulkPasswordCheck(){return chrome.passwordsPrivate.startPasswordCheck()}recordPasswordCheckInteraction(interaction){chrome.metricsPrivate.recordEnumerationValue("PasswordManager.BulkCheck.UserAction",interaction,PasswordCheckInteraction.COUNT)}recordPasswordViewInteraction(interaction){chrome.metricsPrivate.recordEnumerationValue("PasswordManager.PasswordViewPage.UserActions",interaction,PasswordViewPageInteractions.COUNT)}showAddShortcutDialog(){chrome.passwordsPrivate.showAddShortcutDialog()}requestCredentialsDetails(ids){return chrome.passwordsPrivate.requestCredentialsDetails(ids)}requestPlaintextPassword(id,reason){return chrome.passwordsPrivate.requestPlaintextPassword(id,reason)}addPassword(options){return chrome.passwordsPrivate.addPassword(options)}changeCredential(credential){return chrome.passwordsPrivate.changeCredential(credential)}removeCredential(id,fromStores){chrome.passwordsPrivate.removeCredential(id,fromStores)}removeBlockedSite(id){chrome.passwordsPrivate.removePasswordException(id)}muteInsecureCredential(insecureCredential){chrome.passwordsPrivate.muteInsecureCredential(insecureCredential)}unmuteInsecureCredential(insecureCredential){chrome.passwordsPrivate.unmuteInsecureCredential(insecureCredential)}undoRemoveSavedPasswordOrException(){chrome.passwordsPrivate.undoRemoveSavedPasswordOrException()}fetchFamilyMembers(){return chrome.passwordsPrivate.fetchFamilyMembers()}sharePassword(id,recipients){chrome.passwordsPrivate.sharePassword(id,recipients)}importPasswords(toStore){return chrome.passwordsPrivate.importPasswords(toStore)}continueImport(selectedIds){return chrome.passwordsPrivate.continueImport(selectedIds)}resetImporter(deleteFile){return chrome.passwordsPrivate.resetImporter(deleteFile)}requestExportProgressStatus(){return chrome.passwordsPrivate.requestExportProgressStatus()}exportPasswords(){return chrome.passwordsPrivate.exportPasswords()}addPasswordsFileExportProgressListener(listener){chrome.passwordsPrivate.onPasswordsFileExportProgress.addListener(listener)}removePasswordsFileExportProgressListener(listener){chrome.passwordsPrivate.onPasswordsFileExportProgress.removeListener(listener)}switchBiometricAuthBeforeFillingState(){chrome.passwordsPrivate.switchBiometricAuthBeforeFillingState()}showExportedFileInShell(filePath){chrome.passwordsPrivate.showExportedFileInShell(filePath)}getUrlCollection(url){return chrome.passwordsPrivate.getUrlCollection(url)}addPasswordManagerAuthTimeoutListener(listener){chrome.passwordsPrivate.onPasswordManagerAuthTimeout.addListener(listener)}removePasswordManagerAuthTimeoutListener(listener){chrome.passwordsPrivate.onPasswordManagerAuthTimeout.removeListener(listener)}extendAuthValidity(){chrome.passwordsPrivate.extendAuthValidity()}addAccountStorageOptInStateListener(listener){chrome.passwordsPrivate.onAccountStorageOptInStateChanged.addListener(listener)}removeAccountStorageOptInStateListener(listener){chrome.passwordsPrivate.onAccountStorageOptInStateChanged.removeListener(listener)}isOptedInForAccountStorage(){return chrome.passwordsPrivate.isOptedInForAccountStorage()}optInForAccountStorage(optIn){chrome.passwordsPrivate.optInForAccountStorage(optIn)}isAccountStoreDefault(){return chrome.passwordsPrivate.isAccountStoreDefault()}movePasswordsToAccount(ids){chrome.passwordsPrivate.movePasswordsToAccount(ids)}static getInstance(){return instance$5||(instance$5=new PasswordManagerImpl)}static setInstance(obj){instance$5=obj}}let instance$5=null;
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var Page;(function(Page){Page["PASSWORDS"]="passwords";Page["CHECKUP"]="checkup";Page["SETTINGS"]="settings";Page["CHECKUP_DETAILS"]="checkup-details";Page["PASSWORD_DETAILS"]="password-details"})(Page||(Page={}));var CheckupSubpage;(function(CheckupSubpage){CheckupSubpage["COMPROMISED"]="compromised";CheckupSubpage["REUSED"]="reused";CheckupSubpage["WEAK"]="weak"})(CheckupSubpage||(CheckupSubpage={}));var UrlParam;(function(UrlParam){UrlParam["SEARCH_TERM"]="q";UrlParam["START_CHECK"]="start";UrlParam["START_IMPORT"]="import"})(UrlParam||(UrlParam={}));class Route{constructor(page,queryParameters,details){this.page=page;this.queryParameters=queryParameters||new URLSearchParams;this.details=details}path(){let path;switch(this.page){case Page.PASSWORDS:case Page.CHECKUP:case Page.SETTINGS:path="/"+this.page;break;case Page.PASSWORD_DETAILS:const group=this.details;const origin=group.name?group.name:this.details;assert(origin);path="/"+Page.PASSWORDS+"/"+origin;break;case Page.CHECKUP_DETAILS:assert(this.details);path="/"+Page.CHECKUP+"/"+this.details;break}const queryString=this.queryParameters.toString();if(queryString){path+="?"+queryString}return path}}class Router{static getInstance(){return routerInstance||(routerInstance=new Router)}constructor(){this.currentRoute_=new Route(Page.PASSWORDS);this.previousRoute_=null;this.routeObservers_=new Set;this.processRoute_();window.addEventListener("popstate",(()=>{this.processRoute_()}))}addObserver(observer){assert(!this.routeObservers_.has(observer));this.routeObservers_.add(observer)}removeObserver(observer){assert(this.routeObservers_.delete(observer))}get currentRoute(){return this.currentRoute_}get previousRoute(){return this.previousRoute_}navigateTo(page,details,params=new URLSearchParams){const newRoute=new Route(page,params,details);if(this.currentRoute_.path()===newRoute.path()){return}const oldRoute=this.currentRoute_;this.currentRoute_=newRoute;const path=this.currentRoute_.path();const state={url:path};history.pushState(state,"",path);this.notifyObservers_(oldRoute)}updateRouterParams(params){const oldRoute=this.currentRoute_;this.currentRoute_=new Route(oldRoute.page,params,oldRoute.details);window.history.replaceState(window.history.state,"",this.currentRoute_.path());this.notifyObservers_(oldRoute)}notifyObservers_(oldRoute){assert(oldRoute!==this.currentRoute_);this.previousRoute_=oldRoute;for(const observer of this.routeObservers_){observer.currentRouteChanged(this.currentRoute_,oldRoute)}}processRoute_(){const oldRoute=this.currentRoute_;this.currentRoute_=new Route(oldRoute.page,new URLSearchParams(location.search));const section=location.pathname.substring(1).split("/")[0]||"";const details=location.pathname.substring(2+section.length);switch(section){case Page.PASSWORDS:if(details){this.currentRoute_.page=Page.PASSWORD_DETAILS;this.currentRoute_.details=details}else{this.currentRoute_.page=Page.PASSWORDS}break;case Page.CHECKUP:if(details&&details){this.currentRoute_.page=Page.CHECKUP_DETAILS;this.currentRoute_.details=details}else{this.currentRoute_.page=Page.CHECKUP}break;case Page.SETTINGS:this.currentRoute_.page=Page.SETTINGS;break;default:history.replaceState({},"",this.currentRoute_.page)}this.notifyObservers_(oldRoute)}}let routerInstance=null;const RouteObserverMixin=dedupingMixin((superClass=>{class RouteObserverMixin extends superClass{connectedCallback(){super.connectedCallback();Router.getInstance().addObserver(this);this.currentRouteChanged(Router.getInstance().currentRoute,Router.getInstance().currentRoute)}disconnectedCallback(){super.disconnectedCallback();Router.getInstance().removeObserver(this)}currentRouteChanged(_newRoute,_oldRoute){assertNotReached()}}return RouteObserverMixin}));
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CheckState=chrome.passwordsPrivate.PasswordCheckState;const CheckupSectionElementBase=RouteObserverMixin(I18nMixin(PolymerElement));class CheckupSectionElement extends CheckupSectionElementBase{constructor(){super(...arguments);this.didCheckAutomatically_=false;this.statusChangedListener_=null;this.insecureCredentialsChangedListener_=null;this.setSavedPasswordsListener_=null}static get is(){return"checkup-section"}static get template(){return getTemplate$P()}static get properties(){return{focusConfig:{type:Object,observer:"focusConfigChanged_"},checkedPasswordsText_:String,compromisedPasswordsText_:String,reusedPasswordsText_:String,weakPasswordsText_:String,status_:{type:Object,observer:"onStatusChanged_"},compromisedPasswords_:{type:Array,observer:"onCompromisedPasswordsChanged_"},reusedPasswords_:{type:Array,observer:"onReusedPasswordsChanged_"},weakPasswords_:{type:Array,observer:"onWeakPasswordsChanged_"},isCheckRunning_:{type:Boolean,computed:"computeIsCheckRunning_(status_)"},isCheckSuccessful_:{type:Boolean,computed:"computeIsCheckSuccessful_(status_)"},bannerImage_:{type:Array,value:"checkup_result_banner_error",computed:"computeBannerImage_(status_, compromisedPasswords_, "+"reusedPasswords_, weakPasswords_)"},groupCount_:{type:Number,value:0,observer:"updateCheckedPasswordsText_"}}}connectedCallback(){super.connectedCallback();this.statusChangedListener_=status=>{this.status_=status};this.insecureCredentialsChangedListener_=insecureCredentials=>{this.compromisedPasswords_=insecureCredentials.filter((cred=>!cred.compromisedInfo.isMuted&&cred.compromisedInfo.compromiseTypes.some((type=>type===chrome.passwordsPrivate.CompromiseType.LEAKED||type===chrome.passwordsPrivate.CompromiseType.PHISHED))));this.reusedPasswords_=insecureCredentials.filter((cred=>cred.compromisedInfo.compromiseTypes.some((type=>type===chrome.passwordsPrivate.CompromiseType.REUSED))));this.weakPasswords_=insecureCredentials.filter((cred=>cred.compromisedInfo.compromiseTypes.some((type=>type===chrome.passwordsPrivate.CompromiseType.WEAK))))};this.setSavedPasswordsListener_=_passwordList=>{PasswordManagerImpl.getInstance().getCredentialGroups().then((groups=>this.groupCount_=groups.length))};PasswordManagerImpl.getInstance().getPasswordCheckStatus().then(this.statusChangedListener_);PasswordManagerImpl.getInstance().addPasswordCheckStatusListener(this.statusChangedListener_);PasswordManagerImpl.getInstance().getInsecureCredentials().then(this.insecureCredentialsChangedListener_);PasswordManagerImpl.getInstance().addInsecureCredentialsListener(this.insecureCredentialsChangedListener_);PasswordManagerImpl.getInstance().getCredentialGroups().then((groups=>this.groupCount_=groups.length));PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setSavedPasswordsListener_)}disconnectedCallback(){super.disconnectedCallback();assert(this.statusChangedListener_);PasswordManagerImpl.getInstance().removePasswordCheckStatusListener(this.statusChangedListener_);this.statusChangedListener_=null;assert(this.insecureCredentialsChangedListener_);PasswordManagerImpl.getInstance().removeInsecureCredentialsListener(this.insecureCredentialsChangedListener_);this.insecureCredentialsChangedListener_=null;assert(this.setSavedPasswordsListener_);PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setSavedPasswordsListener_);this.setSavedPasswordsListener_=null}currentRouteChanged(route){const param=route.queryParameters.get(UrlParam.START_CHECK)||"";if(param==="true"&&!this.didCheckAutomatically_){this.didCheckAutomatically_=true;PasswordManagerImpl.getInstance().startBulkPasswordCheck().catch((()=>{}));PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.START_CHECK_AUTOMATICALLY)}}async onStatusChanged_(newStatus,oldStatus){if(oldStatus!==undefined&&oldStatus.state===newStatus.state){return}await this.updateCheckedPasswordsText_();if(newStatus.state===CheckState.NO_PASSWORDS){return}if(!!oldStatus&&oldStatus.state===CheckState.RUNNING&&newStatus.state!==CheckState.RUNNING){let stateText;if(this.compromisedPasswords_.length>0){stateText=this.i18n("checkupResultRed")}else if(this.hasAnyIssues_()){stateText=this.i18n("checkupResultYellow")}else{stateText=this.i18n("checkupResultGreen")}getInstance().announce([this.checkedPasswordsText_,stateText].join(". "));focusWithoutInk(this.showRetryButton_()?this.$.retryButton:this.$.refreshButton)}else if(!!oldStatus&&oldStatus.state!==CheckState.RUNNING&&newStatus.state===CheckState.RUNNING){getInstance().announce("Password check started")}}async updateCheckedPasswordsText_(){if(!this.status_){return}switch(this.status_.state){case CheckState.IDLE:case CheckState.OFFLINE:case CheckState.SIGNED_OUT:case CheckState.QUOTA_LIMIT:case CheckState.OTHER_ERROR:case CheckState.NO_PASSWORDS:this.checkedPasswordsText_=await PluralStringProxyImpl.getInstance().getPluralString("checkedPasswords",this.groupCount_);return;case CheckState.CANCELED:this.checkedPasswordsText_=this.i18n("checkupCanceled");return;case CheckState.RUNNING:this.checkedPasswordsText_=await PluralStringProxyImpl.getInstance().getPluralString("checkingPasswords",this.status_.totalNumberOfPasswords||0);return;default:assertNotReached("Can't find a title for state: "+this.status_.state)}}async onCompromisedPasswordsChanged_(){this.compromisedPasswordsText_=await PluralStringProxyImpl.getInstance().getPluralString("compromisedPasswords",this.compromisedPasswords_.length)}async onReusedPasswordsChanged_(){this.reusedPasswordsText_=await PluralStringProxyImpl.getInstance().getPluralString("reusedPasswords",this.reusedPasswords_.length)}async onWeakPasswordsChanged_(){this.weakPasswordsText_=await PluralStringProxyImpl.getInstance().getPluralString("weakPasswords",this.weakPasswords_.length)}computeIsCheckRunning_(){return this.status_.state===CheckState.RUNNING}computeIsCheckSuccessful_(){return this.status_.state===CheckState.IDLE}didCompromiseCheckFail_(){return[CheckState.OFFLINE,CheckState.SIGNED_OUT,CheckState.QUOTA_LIMIT,CheckState.OTHER_ERROR].includes(this.status_.state)}showRetryButton_(){return!this.computeIsCheckRunning_()&&!this.computeIsCheckSuccessful_()}showCheckButton_(){return this.status_.state!==CheckState.NO_PASSWORDS}onPasswordCheckButtonClick_(){PasswordManagerImpl.getInstance().startBulkPasswordCheck().catch((()=>{}));PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.START_CHECK_MANUALLY)}computeBannerImage_(){if(!this.status_){return"checkup_result_banner_error"}if(this.computeIsCheckRunning_()||this.status_.state===CheckState.NO_PASSWORDS){return"checkup_result_banner_running"}if(this.computeIsCheckSuccessful_()){return this.hasAnyIssues_()?"checkup_result_banner_compromised":"checkup_result_banner_ok"}return"checkup_result_banner_error"}getIcon_(issues,checkForError){if(checkForError&&this.status_&&this.didCompromiseCheckFail_()){return"cr:error"}return!!issues&&issues.length?"cr:error":"cr:check-circle"}hasAnyIssues_(){if(!this.compromisedPasswords_||!this.reusedPasswords_||!this.weakPasswords_){return false}return!!this.compromisedPasswords_.length||!!this.reusedPasswords_.length||!!this.weakPasswords_.length}hasIssues_(issues){return!!issues.length}getCompromisedSectionLabel_(){if(this.status_&&this.didCompromiseCheckFail_()){return!this.compromisedPasswords_||!this.compromisedPasswords_.length?this.i18n("compromisedRowWithError"):this.compromisedPasswordsText_}return this.compromisedPasswordsText_}getCompromisedSectionSublabel_(){if(!this.status_||!this.compromisedPasswords_){return""}const brandingName=this.i18n("localPasswordManager");switch(this.status_.state){case CheckState.IDLE:case CheckState.NO_PASSWORDS:case CheckState.RUNNING:case CheckState.CANCELED:return this.compromisedPasswords_.length?this.i18n("compromisedPasswordsTitle"):this.i18n("compromisedPasswordsEmpty");case CheckState.OFFLINE:return this.i18n("checkupErrorOffline",brandingName);case CheckState.SIGNED_OUT:return this.i18n("checkupErrorSignedOut",brandingName);case CheckState.QUOTA_LIMIT:return this.i18n("checkupErrorQuota",brandingName);case CheckState.OTHER_ERROR:return this.i18n("checkupErrorGeneric",brandingName);default:assertNotReached("Can't find a title for state: "+this.status_.state)}}getReusedSectionSublabel_(){return this.reusedPasswords_.length?this.i18n("reusedPasswordsTitle"):this.i18n("reusedPasswordsEmpty")}getWeakSectionSublabel_(){return this.weakPasswords_.length?this.i18n("weakPasswordsTitle"):this.i18n("weakPasswordsEmpty")}onCompromisedClick_(){if(!this.compromisedPasswords_.length){return}Router.getInstance().navigateTo(Page.CHECKUP_DETAILS,CheckupSubpage.COMPROMISED)}onReusedClick_(){if(!this.reusedPasswords_.length){return}Router.getInstance().navigateTo(Page.CHECKUP_DETAILS,CheckupSubpage.REUSED)}onWeakClick_(){if(!this.weakPasswords_.length){return}Router.getInstance().navigateTo(Page.CHECKUP_DETAILS,CheckupSubpage.WEAK)}showCheckupSublabel_(){return this.computeIsCheckRunning_()}getCheckupSublabelValue_(){assert(this.status_);if(!this.computeIsCheckRunning_()){return this.status_.state===CheckState.NO_PASSWORDS?this.i18n("checkupErrorNoPasswords",this.i18n("localPasswordManager")):this.status_.elapsedTimeSinceLastCheck||""}return this.i18n("checkupProgress",this.status_.alreadyProcessed||0,this.status_.totalNumberOfPasswords||0)}showCheckupResult_(){assert(this.status_);if(this.computeIsCheckRunning_()){return false}return this.status_.state!==CheckState.NO_PASSWORDS}focusConfigChanged_(_newConfig,oldConfig){assert(!oldConfig);this.focusConfig.set(Page.CHECKUP_DETAILS,(()=>{const previousRoute=Router.getInstance().previousRoute;switch(previousRoute?.details){case CheckupSubpage.COMPROMISED:focusWithoutInk(this.$.compromisedRow);break;case CheckupSubpage.REUSED:focusWithoutInk(this.$.reusedRow);break;case CheckupSubpage.WEAK:focusWithoutInk(this.$.weakRow);break}}))}}customElements.define(CheckupSectionElement.is,CheckupSectionElement);
// Copyright 2011 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class EventTracker{constructor(){this.listeners_=[]}add(target,eventType,listener,capture=false){const h={target:target,eventType:eventType,listener:listener,capture:capture};this.listeners_.push(h);target.addEventListener(eventType,listener,capture)}remove(target,eventType){this.listeners_=this.listeners_.filter((listener=>{if(listener.target===target&&(!eventType||listener.eventType===eventType)){EventTracker.removeEventListener(listener);return false}return true}))}removeAll(){this.listeners_.forEach((listener=>EventTracker.removeEventListener(listener)));this.listeners_=[]}static removeEventListener(entry){entry.target.removeEventListener(entry.eventType,entry.listener,entry.capture)}}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getDeepActiveElement(){let a=document.activeElement;while(a&&a.shadowRoot&&a.shadowRoot.activeElement){a=a.shadowRoot.activeElement}return a}function isRTL(){return document.documentElement.dir==="rtl"}function quoteString(str){return str.replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g,"\\$1")}function listenOnce(target,eventNames,callback){const eventNamesArray=Array.isArray(eventNames)?eventNames:eventNames.split(/ +/);const removeAllAndCallCallback=function(event){eventNamesArray.forEach((function(eventName){target.removeEventListener(eventName,removeAllAndCallCallback,false)}));return callback(event)};eventNamesArray.forEach((function(eventName){target.addEventListener(eventName,removeAllAndCallCallback,false)}))}function hasKeyModifiers(e){return!!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)}
// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ACTIVE_CLASS="focus-row-active";class FocusRow{constructor(root,boundary,delegate){this.eventTracker=new EventTracker;this.root=root;this.boundary_=boundary||document.documentElement;this.delegate=delegate}static isFocusable(element){if(!element||element.disabled){return false}let current=element;while(true){assertInstanceof(current,Element);const style=window.getComputedStyle(current);if(style.visibility==="hidden"||style.display==="none"){return false}const parent=current.parentNode;if(!parent){return false}if(parent===current.ownerDocument||parent instanceof DocumentFragment){return true}current=parent}}static getFocusableElement(element){const withFocusable=element;if(withFocusable.getFocusableElement){return withFocusable.getFocusableElement()}return element}addItem(type,selectorOrElement){assert(type);let element;if(typeof selectorOrElement==="string"){element=this.root.querySelector(selectorOrElement)}else{element=selectorOrElement}if(!element){return false}element.setAttribute("focus-type",type);element.tabIndex=this.isActive()?0:-1;this.eventTracker.add(element,"blur",this.onBlur_.bind(this));this.eventTracker.add(element,"focus",this.onFocus_.bind(this));this.eventTracker.add(element,"keydown",this.onKeydown_.bind(this));this.eventTracker.add(element,"mousedown",this.onMousedown_.bind(this));return true}destroy(){this.eventTracker.removeAll()}getCustomEquivalent(_sampleElement){const focusable=this.getFirstFocusable();assert(focusable);return focusable}getElements(){return Array.from(this.root.querySelectorAll("[focus-type]")).map(FocusRow.getFocusableElement)}getEquivalentElement(sampleElement){if(this.getFocusableElements().indexOf(sampleElement)>=0){return sampleElement}const sampleFocusType=this.getTypeForElement(sampleElement);if(sampleFocusType){const sameType=this.getFirstFocusable(sampleFocusType);if(sameType){return sameType}}return this.getCustomEquivalent(sampleElement)}getFirstFocusable(type){const element=this.getFocusableElements().find((el=>!type||el.getAttribute("focus-type")===type));return element||null}getFocusableElements(){return this.getElements().filter(FocusRow.isFocusable)}getTypeForElement(element){return element.getAttribute("focus-type")||""}isActive(){return this.root.classList.contains(ACTIVE_CLASS)}makeActive(active){if(active===this.isActive()){return}this.getElements().forEach((function(element){element.tabIndex=active?0:-1}));this.root.classList.toggle(ACTIVE_CLASS,active)}onBlur_(e){if(!this.boundary_.contains(e.relatedTarget)){return}const currentTarget=e.currentTarget;if(this.getFocusableElements().indexOf(currentTarget)>=0){this.makeActive(false)}}onFocus_(e){if(this.delegate){this.delegate.onFocus(this,e)}}onMousedown_(e){if(e.button){return}const target=e.currentTarget;if(!target.disabled){target.tabIndex=0}}onKeydown_(e){const elements=this.getFocusableElements();const currentElement=FocusRow.getFocusableElement(e.currentTarget);const elementIndex=elements.indexOf(currentElement);assert(elementIndex>=0);if(this.delegate&&this.delegate.onKeydown(this,e)){return}const isShiftTab=!e.altKey&&!e.ctrlKey&&!e.metaKey&&e.shiftKey&&e.key==="Tab";if(hasKeyModifiers(e)&&!isShiftTab){return}let index=-1;let shouldStopPropagation=true;if(isShiftTab){index=elementIndex-1;if(index<0){return}}else if(e.key==="ArrowLeft"){index=elementIndex+(isRTL()?1:-1)}else if(e.key==="ArrowRight"){index=elementIndex+(isRTL()?-1:1)}else if(e.key==="Home"){index=0}else if(e.key==="End"){index=elements.length-1}else{shouldStopPropagation=false}const elementToFocus=elements[index];if(elementToFocus){this.getEquivalentElement(elementToFocus).focus();e.preventDefault()}if(shouldStopPropagation){e.stopPropagation()}}}function getTemplate$O(){return html`<!--_html_template_start_-->    <style>:host dialog{background-color:var(--cr-menu-background-color);border:none;border-radius:var(--cr-menu-border-radius,4px);box-shadow:var(--cr-menu-shadow);margin:0;min-width:128px;outline:0;padding:0;position:absolute}@media (forced-colors:active){:host dialog{border:var(--cr-border-hcm)}}:host-context([chrome-refresh-2023]){--cr-hairline:1px solid var(--color-menu-separator,
            var(--cr-fallback-color-divider));--cr-action-menu-disabled-item-color:var(--color-menu-item-foreground-disabled,
                var(--cr-fallback-color-disabled-foreground));--cr-action-menu-disabled-item-opacity:1;--cr-menu-background-color:var(--color-menu-background,
            var(--cr-fallback-color-surface));--cr-menu-background-focus-color:var(--cr-hover-background-color);--cr-menu-shadow:var(--cr-elevation-2);--cr-primary-text-color:var(--color-menu-item-foreground,
            var(--cr-fallback-color-on-surface))}:host dialog::backdrop{background-color:transparent}:host ::slotted(.dropdown-item){-webkit-tap-highlight-color:transparent;background:0 0;border:none;border-radius:0;box-sizing:border-box;color:var(--cr-primary-text-color);font:inherit;min-height:32px;padding:8px 24px;text-align:start;user-select:none;width:100%}:host ::slotted(.dropdown-item:not([hidden])){align-items:center;display:flex}:host ::slotted(.dropdown-item[disabled]){color:var(--cr-action-menu-disabled-item-color,var(--cr-primary-text-color));opacity:var(--cr-action-menu-disabled-item-opacity,.65)}:host ::slotted(.dropdown-item:not([disabled])){cursor:pointer}:host ::slotted(.dropdown-item:focus){background-color:var(--cr-menu-background-focus-color);outline:0}@media (forced-colors:active){:host ::slotted(.dropdown-item:focus){outline:var(--cr-focus-outline-hcm)}}.item-wrapper{background:var(--cr-menu-background-sheen);outline:0;padding:8px 0}:host-context([chrome-refresh-2023]) .item-wrapper{background:0 0}</style>
    <dialog id="dialog" part="dialog" on-close="onNativeDialogClose_" role="application" aria-roledescription$="[[roleDescription]]">
      <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1" aria-label$="[[accessibilityLabel]]">
        <slot id="contentNode"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var AnchorAlignment;(function(AnchorAlignment){AnchorAlignment[AnchorAlignment["BEFORE_START"]=-2]="BEFORE_START";AnchorAlignment[AnchorAlignment["AFTER_START"]=-1]="AFTER_START";AnchorAlignment[AnchorAlignment["CENTER"]=0]="CENTER";AnchorAlignment[AnchorAlignment["BEFORE_END"]=1]="BEFORE_END";AnchorAlignment[AnchorAlignment["AFTER_END"]=2]="AFTER_END"})(AnchorAlignment||(AnchorAlignment={}));const DROPDOWN_ITEM_CLASS="dropdown-item";const SELECTABLE_DROPDOWN_ITEM_QUERY=`.${DROPDOWN_ITEM_CLASS}:not([hidden]):not([disabled])`;const AFTER_END_OFFSET=10;function getStartPointWithAnchor(start,end,menuLength,anchorAlignment,min,max){let startPoint=0;switch(anchorAlignment){case AnchorAlignment.BEFORE_START:startPoint=start-menuLength;break;case AnchorAlignment.AFTER_START:startPoint=start;break;case AnchorAlignment.CENTER:startPoint=(start+end-menuLength)/2;break;case AnchorAlignment.BEFORE_END:startPoint=end-menuLength;break;case AnchorAlignment.AFTER_END:startPoint=end;break}if(startPoint+menuLength>max){startPoint=end-menuLength}if(startPoint<min){startPoint=start}startPoint=Math.max(min,Math.min(startPoint,max-menuLength));return startPoint}function getDefaultShowConfig(){return{top:0,left:0,height:0,width:0,anchorAlignmentX:AnchorAlignment.AFTER_START,anchorAlignmentY:AnchorAlignment.AFTER_START,minX:0,minY:0,maxX:0,maxY:0}}class CrActionMenuElement extends PolymerElement{constructor(){super(...arguments);this.boundClose_=null;this.contentObserver_=null;this.resizeObserver_=null;this.hasMousemoveListener_=false;this.anchorElement_=null;this.lastConfig_=null}static get is(){return"cr-action-menu"}static get template(){return getTemplate$O()}static get properties(){return{accessibilityLabel:String,autoReposition:{type:Boolean,value:false},open:{type:Boolean,notify:true,value:false},roleDescription:String}}ready(){super.ready();this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("mouseover",this.onMouseover_);this.addEventListener("click",this.onClick_)}disconnectedCallback(){super.disconnectedCallback();this.removeListeners_()}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}getDialog(){return this.$.dialog}removeListeners_(){window.removeEventListener("resize",this.boundClose_);window.removeEventListener("popstate",this.boundClose_);if(this.contentObserver_){this.contentObserver_.disconnect();this.contentObserver_=null}if(this.resizeObserver_){this.resizeObserver_.disconnect();this.resizeObserver_=null}}onNativeDialogClose_(e){if(e.target!==this.$.dialog){return}this.fire_("close")}onClick_(e){if(e.target===this){this.close();e.stopPropagation()}}onKeyDown_(e){e.stopPropagation();if(e.key==="Tab"||e.key==="Escape"){this.close();if(e.key==="Tab"){this.fire_("tabkeyclose",{shiftKey:e.shiftKey})}e.preventDefault();return}if(e.key!=="Enter"&&e.key!=="ArrowUp"&&e.key!=="ArrowDown"){return}const options=Array.from(this.querySelectorAll(SELECTABLE_DROPDOWN_ITEM_QUERY));if(options.length===0){return}const focused=getDeepActiveElement();const index=options.findIndex((option=>FocusRow.getFocusableElement(option)===focused));if(e.key==="Enter"){if(index!==-1){return}if(isWindows||isMac){this.close();e.preventDefault();return}}e.preventDefault();this.updateFocus_(options,index,e.key!=="ArrowUp");if(!this.hasMousemoveListener_){this.hasMousemoveListener_=true;this.addEventListener("mousemove",(e=>{this.onMouseover_(e);this.hasMousemoveListener_=false}),{once:true})}}onMouseover_(e){const item=e.composedPath().find((el=>el.matches&&el.matches(SELECTABLE_DROPDOWN_ITEM_QUERY)));(item||this.$.wrapper).focus()}updateFocus_(options,focusedIndex,next){const numOptions=options.length;assert(numOptions>0);let index;if(focusedIndex===-1){index=next?0:numOptions-1}else{const delta=next?1:-1;index=(numOptions+focusedIndex+delta)%numOptions}options[index].focus()}close(){this.removeListeners_();this.$.dialog.close();this.open=false;if(this.anchorElement_){assert(this.anchorElement_);focusWithoutInk(this.anchorElement_);this.anchorElement_=null}if(this.lastConfig_){this.lastConfig_=null}}showAt(anchorElement,config){this.anchorElement_=anchorElement;this.anchorElement_.scrollIntoViewIfNeeded();const rect=this.anchorElement_.getBoundingClientRect();let height=rect.height;if(config&&!config.noOffset&&config.anchorAlignmentY===AnchorAlignment.AFTER_END){height-=AFTER_END_OFFSET}this.showAtPosition(Object.assign({top:rect.top,left:rect.left,height:height,width:rect.width,anchorAlignmentX:AnchorAlignment.BEFORE_END},config));this.$.wrapper.focus()}showAtPosition(config){const doc=document.scrollingElement;const scrollLeft=doc.scrollLeft;const scrollTop=doc.scrollTop;this.resetStyle_();this.$.dialog.showModal();this.open=true;config.top+=scrollTop;config.left+=scrollLeft;this.positionDialog_(Object.assign({minX:scrollLeft,minY:scrollTop,maxX:scrollLeft+doc.clientWidth,maxY:scrollTop+doc.clientHeight},config));doc.scrollTop=scrollTop;doc.scrollLeft=scrollLeft;this.addListeners_();const openedByKey=FocusOutlineManager.forDocument(document).visible;if(openedByKey){const firstSelectableItem=this.querySelector(SELECTABLE_DROPDOWN_ITEM_QUERY);if(firstSelectableItem){requestAnimationFrame((()=>{firstSelectableItem.focus()}))}}}resetStyle_(){this.$.dialog.style.left="";this.$.dialog.style.right="";this.$.dialog.style.top="0"}positionDialog_(config){this.lastConfig_=config;const c=Object.assign(getDefaultShowConfig(),config);const top=c.top;const left=c.left;const bottom=top+c.height;const right=left+c.width;const rtl=getComputedStyle(this).direction==="rtl";if(rtl){c.anchorAlignmentX*=-1}const offsetWidth=this.$.dialog.offsetWidth;const menuLeft=getStartPointWithAnchor(left,right,offsetWidth,c.anchorAlignmentX,c.minX,c.maxX);if(rtl){const menuRight=document.scrollingElement.clientWidth-menuLeft-offsetWidth;this.$.dialog.style.right=menuRight+"px"}else{this.$.dialog.style.left=menuLeft+"px"}const menuTop=getStartPointWithAnchor(top,bottom,this.$.dialog.offsetHeight,c.anchorAlignmentY,c.minY,c.maxY);this.$.dialog.style.top=menuTop+"px"}addListeners_(){this.boundClose_=this.boundClose_||(()=>{if(this.$.dialog.open){this.close()}});window.addEventListener("resize",this.boundClose_);window.addEventListener("popstate",this.boundClose_);this.contentObserver_=new FlattenedNodesObserver(this.$.contentNode,(info=>{info.addedNodes.forEach((node=>{if(node.classList&&node.classList.contains(DROPDOWN_ITEM_CLASS)&&!node.getAttribute("role")){node.setAttribute("role","menuitem")}}))}));if(this.autoReposition){this.resizeObserver_=new ResizeObserver((()=>{if(this.lastConfig_){this.positionDialog_(this.lastConfig_);this.fire_("cr-action-menu-repositioned")}}));this.resizeObserver_.observe(this.$.dialog)}}}customElements.define(CrActionMenuElement.is,CrActionMenuElement);function getTemplate$N(){return html`<!--_html_template_start_-->    <style include="cr-actionable-row-style">:host([disabled]){opacity:.65;pointer-events:none}:host([disabled]) cr-icon-button{display:var(--cr-expand-button-disabled-display,initial)}#label{flex:1;padding:var(--cr-section-vertical-padding) 0}cr-icon-button{--cr-icon-button-icon-size:var(--cr-expand-button-icon-size, 20px);--cr-icon-button-size:var(--cr-expand-button-size, 36px)}</style>

    <div id="label" aria-hidden="true"><slot></slot></div>
    <cr-icon-button id="icon" aria-labelledby="label" disabled="[[disabled]]" tabindex="[[tabIndex]]" part="icon"></cr-icon-button>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrExpandButtonElement extends PolymerElement{static get is(){return"cr-expand-button"}static get template(){return getTemplate$N()}static get properties(){return{expanded:{type:Boolean,value:false,notify:true,observer:"onExpandedChange_"},disabled:{type:Boolean,value:false,reflectToAttribute:true},ariaLabel:{type:String,observer:"onAriaLabelChange_"},tabIndex:{type:Number,value:0},expandIcon:{type:String,value:"cr:expand-more",observer:"onIconChange_"},collapseIcon:{type:String,value:"cr:expand-less",observer:"onIconChange_"},expandTitle:String,collapseTitle:String,tooltipText_:{type:String,computed:"computeTooltipText_(expandTitle, collapseTitle, expanded)",observer:"onTooltipTextChange_"}}}static get observers(){return["updateAriaExpanded_(disabled, expanded)"]}ready(){super.ready();this.addEventListener("click",this.toggleExpand_)}computeTooltipText_(){return this.expanded?this.collapseTitle:this.expandTitle}onTooltipTextChange_(){this.title=this.tooltipText_}focus(){this.$.icon.focus()}onAriaLabelChange_(){if(this.ariaLabel){this.$.icon.removeAttribute("aria-labelledby");this.$.icon.setAttribute("aria-label",this.ariaLabel)}else{this.$.icon.removeAttribute("aria-label");this.$.icon.setAttribute("aria-labelledby","label")}}onExpandedChange_(){this.updateIcon_()}onIconChange_(){this.updateIcon_()}updateIcon_(){this.$.icon.ironIcon=this.expanded?this.collapseIcon:this.expandIcon}toggleExpand_(event){event.stopPropagation();event.preventDefault();this.scrollIntoViewIfNeeded();this.expanded=!this.expanded;focusWithoutInk(this.$.icon)}updateAriaExpanded_(){if(this.disabled){this.$.icon.removeAttribute("aria-expanded")}else{this.$.icon.setAttribute("aria-expanded",this.expanded?"true":"false")}}}customElements.define(CrExpandButtonElement.is,CrExpandButtonElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({_template:html`
    <style>
      :host {
        display: block;
        transition-duration: var(--iron-collapse-transition-duration, 300ms);
        /* Safari 10 needs this property prefixed to correctly apply the custom property */
        overflow: visible;
      }

      :host(.iron-collapse-closed) {
        display: none;
      }

      :host(:not(.iron-collapse-opened)) {
        overflow: hidden;
      }
    </style>

    <slot></slot>
`,is:"iron-collapse",behaviors:[IronResizableBehavior],properties:{horizontal:{type:Boolean,value:false,observer:"_horizontalChanged"},opened:{type:Boolean,value:false,notify:true,observer:"_openedChanged"},transitioning:{type:Boolean,notify:true,readOnly:true},noAnimation:{type:Boolean},_desiredSize:{type:String,value:""}},get dimension(){return this.horizontal?"width":"height"},get _dimensionMax(){return this.horizontal?"maxWidth":"maxHeight"},get _dimensionMaxCss(){return this.horizontal?"max-width":"max-height"},hostAttributes:{role:"group","aria-hidden":"true"},listeners:{transitionend:"_onTransitionEnd"},toggle:function(){this.opened=!this.opened},show:function(){this.opened=true},hide:function(){this.opened=false},updateSize:function(size,animated){size=size==="auto"?"":size;var willAnimate=animated&&!this.noAnimation&&this.isAttached&&this._desiredSize!==size;this._desiredSize=size;this._updateTransition(false);if(willAnimate){var startSize=this._calcSize();if(size===""){this.style[this._dimensionMax]="";size=this._calcSize()}this.style[this._dimensionMax]=startSize;this.scrollTop=this.scrollTop;this._updateTransition(true);willAnimate=size!==startSize}this.style[this._dimensionMax]=size;if(!willAnimate){this._transitionEnd()}},enableTransition:function(enabled){Base._warn("`enableTransition()` is deprecated, use `noAnimation` instead.");this.noAnimation=!enabled},_updateTransition:function(enabled){this.style.transitionDuration=enabled&&!this.noAnimation?"":"0s"},_horizontalChanged:function(){this.style.transitionProperty=this._dimensionMaxCss;var otherDimension=this._dimensionMax==="maxWidth"?"maxHeight":"maxWidth";this.style[otherDimension]="";this.updateSize(this.opened?"auto":"0px",false)},_openedChanged:function(){this.setAttribute("aria-hidden",!this.opened);this._setTransitioning(true);this.toggleClass("iron-collapse-closed",false);this.toggleClass("iron-collapse-opened",false);this.updateSize(this.opened?"auto":"0px",true);if(this.opened){this.focus()}},_transitionEnd:function(){this.style[this._dimensionMax]=this._desiredSize;this.toggleClass("iron-collapse-closed",!this.opened);this.toggleClass("iron-collapse-opened",this.opened);this._updateTransition(false);this.notifyResize();this._setTransitioning(false)},_onTransitionEnd:function(event){if(dom(event).rootTarget===this){this._transitionEnd()}},_calcSize:function(){return this.getBoundingClientRect()[this.dimension]+"px"}});
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrContainerShadowSide;(function(CrContainerShadowSide){CrContainerShadowSide["TOP"]="top";CrContainerShadowSide["BOTTOM"]="bottom"})(CrContainerShadowSide||(CrContainerShadowSide={}));const CrContainerShadowMixin=dedupingMixin((superClass=>{class CrContainerShadowMixin extends superClass{constructor(){super(...arguments);this.intersectionObserver_=null;this.dropShadows_=new Map;this.intersectionProbes_=new Map;this.sides_=null}connectedCallback(){super.connectedCallback();const hasBottomShadow=this.getContainer_().hasAttribute("show-bottom-shadow");this.sides_=hasBottomShadow?[CrContainerShadowSide.TOP,CrContainerShadowSide.BOTTOM]:[CrContainerShadowSide.TOP];this.sides_.forEach((side=>{const shadow=document.createElement("div");shadow.id=`cr-container-shadow-${side}`;shadow.classList.add("cr-container-shadow");this.dropShadows_.set(side,shadow);this.intersectionProbes_.set(side,document.createElement("div"))}));this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.TOP),this.getContainer_());this.getContainer_().prepend(this.intersectionProbes_.get(CrContainerShadowSide.TOP));if(hasBottomShadow){this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.BOTTOM),this.getContainer_().nextSibling);this.getContainer_().append(this.intersectionProbes_.get(CrContainerShadowSide.BOTTOM))}this.enableShadowBehavior(true)}disconnectedCallback(){super.disconnectedCallback();this.enableShadowBehavior(false)}getContainer_(){return this.shadowRoot.querySelector("#container")}getIntersectionObserver_(){const callback=entries=>{for(const entry of entries){const target=entry.target;this.sides_.forEach((side=>{if(target===this.intersectionProbes_.get(side)){this.dropShadows_.get(side).classList.toggle("has-shadow",entry.intersectionRatio===0)}}))}};return new IntersectionObserver(callback,{root:this.getContainer_(),threshold:0})}enableShadowBehavior(enable){if(enable===!!this.intersectionObserver_){return}if(!enable){this.intersectionObserver_.disconnect();this.intersectionObserver_=null;return}this.intersectionObserver_=this.getIntersectionObserver_();window.setTimeout((()=>{if(this.intersectionObserver_){this.intersectionProbes_.forEach((probe=>{this.intersectionObserver_.observe(probe)}))}}))}showDropShadows(){assert(!this.intersectionObserver_);assert(this.sides_);for(const side of this.sides_){this.dropShadows_.get(side).classList.toggle("has-shadow",true)}}}return CrContainerShadowMixin}));function getTemplate$M(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style cr-icons">dialog{--scroll-border-color:var(--paper-grey-300);--scroll-border:1px solid var(--scroll-border-color);background-color:var(--cr-dialog-background-color,#fff);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,.12),0 16px 16px rgba(0,0,0,.24);color:inherit;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{--scroll-border-color:var(--google-grey-700);background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}:host{--transparent-border:1px solid transparent}#cr-container-shadow-top{border-bottom:var(--cr-dialog-body-border-top,var(--transparent-border))}#cr-container-shadow-bottom{border-bottom:var(--cr-dialog-body-border-bottom,var(--transparent-border))}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{border-bottom:var(--scroll-border)}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}</style>
    <dialog id="dialog" on-close="onNativeDialogClose_" on-cancel="onNativeDialogCancel_" part="dialog" aria-labelledby="title" aria-describedby="container">
    
      <div id="content-wrapper" part="wrapper">
        <div class="top-container">
          <h2 id="title" class="title-container" tabindex="-1">
            <slot name="title"></slot>
          </h2>
          <cr-icon-button id="close" class="icon-clear" hidden$="[[!showCloseButton]]" aria-label$="[[closeText]]" on-click="cancel" on-keypress="onCloseKeypress_">
          </cr-icon-button>
        </div>
        <slot name="header"></slot>
        <div class="body-container" id="container" show-bottom-shadow part="body-container">
          <slot name="body"></slot>
        </div>
        <slot name="button-container"></slot>
        <slot name="footer"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrDialogElementBase=CrContainerShadowMixin(PolymerElement);class CrDialogElement extends CrDialogElementBase{constructor(){super(...arguments);this.intersectionObserver_=null;this.mutationObserver_=null;this.boundKeydown_=null}static get is(){return"cr-dialog"}static get template(){return getTemplate$M()}static get properties(){return{open:{type:Boolean,value:false,reflectToAttribute:true},closeText:String,ignorePopstate:{type:Boolean,value:false},ignoreEnterKey:{type:Boolean,value:false},consumeKeydownEvent:{type:Boolean,value:false},noCancel:{type:Boolean,value:false},showCloseButton:{type:Boolean,value:false},showOnAttach:{type:Boolean,value:false}}}ready(){super.ready();window.addEventListener("popstate",(()=>{if(!this.ignorePopstate&&this.$.dialog.open){this.cancel()}}));if(!this.ignoreEnterKey){this.addEventListener("keypress",this.onKeypress_.bind(this))}this.addEventListener("pointerdown",(e=>this.onPointerdown_(e)))}connectedCallback(){super.connectedCallback();const mutationObserverCallback=()=>{if(this.$.dialog.open){this.enableShadowBehavior(true);this.addKeydownListener_()}else{this.enableShadowBehavior(false);this.removeKeydownListener_()}};this.mutationObserver_=new MutationObserver(mutationObserverCallback);this.mutationObserver_.observe(this.$.dialog,{attributes:true,attributeFilter:["open"]});mutationObserverCallback();if(this.showOnAttach){this.showModal()}}disconnectedCallback(){super.disconnectedCallback();this.removeKeydownListener_();if(this.mutationObserver_){this.mutationObserver_.disconnect();this.mutationObserver_=null}}addKeydownListener_(){if(!this.consumeKeydownEvent){return}this.boundKeydown_=this.boundKeydown_||this.onKeydown_.bind(this);this.addEventListener("keydown",this.boundKeydown_);document.body.addEventListener("keydown",this.boundKeydown_)}removeKeydownListener_(){if(!this.boundKeydown_){return}this.removeEventListener("keydown",this.boundKeydown_);document.body.removeEventListener("keydown",this.boundKeydown_);this.boundKeydown_=null}showModal(){this.$.dialog.showModal();assert(this.$.dialog.open);this.open=true;this.dispatchEvent(new CustomEvent("cr-dialog-open",{bubbles:true,composed:true}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:true,composed:true}));this.$.dialog.close();assert(!this.$.dialog.open);this.open=false}close(){this.$.dialog.close("success");assert(!this.$.dialog.open);this.open=false}setTitleAriaLabel(title){this.$.dialog.removeAttribute("aria-labelledby");this.$.dialog.setAttribute("aria-label",title)}onCloseKeypress_(e){e.stopPropagation()}onNativeDialogClose_(e){if(e.target!==this.getNative()){return}this.dispatchEvent(new CustomEvent("close",{bubbles:true,composed:true}))}onNativeDialogCancel_(e){if(e.target!==this.getNative()){return}if(this.noCancel){e.preventDefault();return}this.open=false;this.dispatchEvent(new CustomEvent("cancel",{bubbles:true,composed:true}))}getNative(){return this.$.dialog}onKeypress_(e){if(e.key!=="Enter"){return}const accept=e.target===this||e.composedPath().some((el=>el.tagName==="CR-INPUT"&&el.type!=="search"));if(!accept){return}const actionButton=this.querySelector(".action-button:not([disabled]):not([hidden])");if(actionButton){actionButton.click();e.preventDefault()}}onKeydown_(e){assert(this.consumeKeydownEvent);if(!this.getNative().open){return}if(this.ignoreEnterKey&&e.key==="Enter"){return}e.stopPropagation()}onPointerdown_(e){if(e.button!==0||e.composedPath()[0].tagName!=="DIALOG"){return}this.$.dialog.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.02)",offset:.4},{transform:"scale(1.02)",offset:.6},{transform:"scale(1)",offset:1}],{duration:180,easing:"ease-in-out",iterations:1});e.preventDefault()}focus(){const titleContainer=this.shadowRoot.querySelector(".title-container");assert(titleContainer);titleContainer.focus()}}customElements.define(CrDialogElement.is,CrDialogElement);const styleMod$4=document.createElement("dom-module");styleMod$4.appendChild(html`
  <template>
    <style>
:host{--cr-input-background-color:var(--google-grey-100);--cr-input-color:var(--cr-primary-text-color);--cr-input-error-color:var(--google-red-600);--cr-input-focus-color:var(--google-blue-600);display:block;outline:0}:host-context([chrome-refresh-2023]):host{--cr-input-background-color:var(--color-textfield-filled-background,
            var(--cr-fallback-color-surface-variant));--cr-input-border-bottom:1px solid var(--color-textfield-filled-underline,
                var(--cr-fallback-color-outline));--cr-input-border-radius:8px 8px 0 0;--cr-input-error-color:var(--color-textfield-filled-error,
            var(--cr-fallback-color-error));--cr-input-focus-color:var(--color-textfield-filled-underline-focused,
            var(--cr-fallback-color-primary));--cr-input-hover-background-color:var(--cr-hover-background-color);--cr-input-padding-bottom:10px;--cr-input-padding-end:10px;--cr-input-padding-start:10px;--cr-input-padding-top:10px;--cr-input-placeholder-color:var(--color-textfield-foreground-placeholder,
                var(--cr-fallback-on-surface-subtle));isolation:isolate}:host-context([chrome-refresh-2023]):host([readonly]){--cr-input-border-radius:8px 8px}@media (prefers-color-scheme:dark){:host{--cr-input-background-color:rgba(0, 0, 0, .3);--cr-input-error-color:var(--google-red-300);--cr-input-focus-color:var(--google-blue-300)}}:host-context(html:not([chrome-refresh-2023])):host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-color)}:host-context([chrome-refresh-2023]) #label{color:var(--color-textfield-foreground-label,var(--cr-fallback-color-on-surface-subtle));font-size:11px;line-height:16px}#input-container{border-radius:var(--cr-input-border-radius,4px);overflow:hidden;position:relative;width:var(--cr-input-width,100%)}#inner-input-container{background-color:var(--cr-input-background-color);box-sizing:border-box;padding:0}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted(*){--cr-icon-button-fill-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle));--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;--cr-icon-button-margin-start:0;--cr-icon-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle))}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted([slot=inline-prefix]){--cr-icon-button-margin-start:-8px}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted([slot=inline-suffix]){--cr-icon-button-margin-end:-4px}:host-context([chrome-refresh-2023]):host([invalid]) #inner-input-content ::slotted(*){--cr-icon-color:var(--cr-input-error-color);--cr-icon-button-fill-color:var(--cr-input-error-color)}#hover-layer{display:none}:host-context([chrome-refresh-2023]) #hover-layer{background-color:var(--cr-input-hover-background-color);inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host(:not([readonly]):not([disabled])) #input-container:hover #hover-layer{display:block}#input{-webkit-appearance:none;background-color:transparent;border:none;box-sizing:border-box;caret-color:var(--cr-input-focus-color);color:var(--cr-input-color);font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;min-height:var(--cr-input-min-height,auto);outline:0;padding-bottom:var(--cr-input-padding-bottom,6px);padding-inline-end:var(--cr-input-padding-end,8px);padding-inline-start:var(--cr-input-padding-start,8px);padding-top:var(--cr-input-padding-top,6px);text-align:inherit;text-overflow:ellipsis;width:100%}:host-context([chrome-refresh-2023]) #input{font-size:12px;line-height:16px;padding:0}:host-context([chrome-refresh-2023]) #inner-input-content{padding-bottom:var(--cr-input-padding-bottom);padding-inline-end:var(--cr-input-padding-end);padding-inline-start:var(--cr-input-padding-start);padding-top:var(--cr-input-padding-top)}#underline{border-bottom:2px solid var(--cr-input-focus-color);border-radius:var(--cr-input-underline-border-radius,0);bottom:0;box-sizing:border-box;display:var(--cr-input-underline-display);height:var(--cr-input-underline-height,0);left:0;margin:auto;opacity:0;position:absolute;right:0;transition:opacity 120ms ease-out,width 0s linear 180ms;width:0}:host([focused_]) #underline,:host([force-underline]) #underline,:host([invalid]) #underline{opacity:1;transition:opacity 120ms ease-in,width 180ms ease-out;width:100%}#underline-base{display:none}:host-context([chrome-refresh-2023]):host([readonly]) #underline{display:none}:host-context([chrome-refresh-2023]):host(:not([readonly])) #underline-base{border-bottom:var(--cr-input-border-bottom);bottom:0;display:block;left:0;position:absolute;right:0}:host-context([chrome-refresh-2023]):host([disabled]){color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-input-border-bottom:1px solid currentColor;--cr-input-placeholder-color:currentColor;--cr-input-color:currentColor;--cr-input-background-color:var(--color-textfield-background-disabled,
            var(--cr-fallback-color-disabled-background))}:host-context([chrome-refresh-2023]):host([disabled]) #inner-input-content ::slotted(*){--cr-icon-color:currentColor;--cr-icon-button-fill-color:currentColor}
    </style>
  </template>
`.content);styleMod$4.register("cr-input-style");function getTemplate$L(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style cr-input-style cr-shared-style">:host([disabled]) :-webkit-any(#label,#error,#input-container){opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]) :is(#label,#error,#input-container){opacity:1}:host ::slotted(cr-button[slot=suffix]){margin-inline-start:var(--cr-button-edge-spacing)!important}:host([invalid]) #label{color:var(--cr-input-error-color)}#input{border-bottom:var(--cr-input-border-bottom,none);letter-spacing:var(--cr-input-letter-spacing)}:host-context([chrome-refresh-2023]) #input{border-bottom:none}:host-context([chrome-refresh-2023]) #input-container{border:var(--cr-input-border,none)}#input::placeholder{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([readonly]) #input{opacity:var(--cr-input-readonly-opacity,.6)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#error{color:var(--cr-input-error-color);display:var(--cr-input-error-display,block);font-size:var(--cr-form-field-label-font-size);height:var(--cr-form-field-label-height);line-height:var(--cr-form-field-label-line-height);margin:8px 0;visibility:hidden;white-space:var(--cr-input-error-white-space)}:host-context([chrome-refresh-2023]) #error{font-size:11px;line-height:16px;margin:4px 10px}:host([invalid]) #error{visibility:visible}#inner-input-content,#row-container{align-items:center;display:flex;justify-content:space-between;position:relative}:host-context([chrome-refresh-2023]) #inner-input-content{gap:4px;height:16px;z-index:1}#input[type=search]::-webkit-search-cancel-button{display:none}:host-context([dir=rtl]) #input[type=url]{text-align:right}#input[type=url]{direction:ltr}</style>
    <div id="label" class="cr-form-field-label" hidden="[[!label]]" aria-hidden="true">
      [[label]]
    </div>
    <div id="row-container" part="row-container">
      <div id="input-container">
        <div id="inner-input-container">
          <div id="hover-layer"></div>
          <div id="inner-input-content">
            <slot name="inline-prefix"></slot>
            
            <input id="input" disabled="[[disabled]]" autofocus="[[autofocus]]" value="{{value::input}}" tabindex$="[[inputTabindex]]" type="[[type]]" readonly$="[[readonly]]" maxlength$="[[maxlength]]" pattern$="[[pattern]]" required="[[required]]" minlength$="[[minlength]]" inputmode$="[[inputmode]]" aria-description$="[[ariaDescription]]" aria-label$="[[getAriaLabel_(ariaLabel, label, placeholder)]]" aria-invalid$="[[getAriaInvalid_(invalid)]]" max="[[max]]" min="[[min]]" on-focus="onInputFocus_" on-blur="onInputBlur_" on-change="onInputChange_" part="input" autocomplete="off">
            <slot name="inline-suffix"></slot>
          </div>
        </div>
        <div id="underline-base"></div>
        <div id="underline"></div>
      </div>
      <slot name="suffix"></slot>
    </div>
    <div id="error" aria-live="assertive">[[displayErrorMessage_]]</div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SUPPORTED_INPUT_TYPES=new Set(["number","password","search","text","url"]);class CrInputElement extends PolymerElement{static get is(){return"cr-input"}static get template(){return getTemplate$L()}static get properties(){return{ariaDescription:{type:String},ariaLabel:{type:String,value:""},autofocus:{type:Boolean,value:false,reflectToAttribute:true},autoValidate:Boolean,disabled:{type:Boolean,value:false,reflectToAttribute:true},errorMessage:{type:String,value:"",observer:"onInvalidOrErrorMessageChanged_"},displayErrorMessage_:{type:String,value:""},focused_:{type:Boolean,value:false,reflectToAttribute:true},invalid:{type:Boolean,value:false,notify:true,reflectToAttribute:true,observer:"onInvalidOrErrorMessageChanged_"},max:{type:Number,reflectToAttribute:true},min:{type:Number,reflectToAttribute:true},maxlength:{type:Number,reflectToAttribute:true},minlength:{type:Number,reflectToAttribute:true},pattern:{type:String,reflectToAttribute:true},inputmode:String,label:{type:String,value:""},placeholder:{type:String,value:null,observer:"placeholderChanged_"},readonly:{type:Boolean,reflectToAttribute:true},required:{type:Boolean,reflectToAttribute:true},inputTabindex:{type:Number,value:0,observer:"onInputTabindexChanged_"},type:{type:String,value:"text",observer:"onTypeChanged_"},value:{type:String,value:"",notify:true,observer:"onValueChanged_"}}}ready(){super.ready();assert(!this.hasAttribute("tabindex"))}onInputTabindexChanged_(){assert(this.inputTabindex===0||this.inputTabindex===-1)}onTypeChanged_(){assert(SUPPORTED_INPUT_TYPES.has(this.type))}get inputElement(){return this.$.input}getAriaLabel_(ariaLabel,label,placeholder){return ariaLabel||label||placeholder}getAriaInvalid_(invalid){return invalid?"true":"false"}onInvalidOrErrorMessageChanged_(){this.displayErrorMessage_=this.invalid?this.errorMessage:"";const ERROR_ID="error";const errorElement=this.shadowRoot.querySelector(`#${ERROR_ID}`);assert(errorElement);if(this.invalid){errorElement.setAttribute("role","alert");this.inputElement.setAttribute("aria-errormessage",ERROR_ID)}else{errorElement.removeAttribute("role");this.inputElement.removeAttribute("aria-errormessage")}}placeholderChanged_(){if(this.placeholder||this.placeholder===""){this.inputElement.setAttribute("placeholder",this.placeholder)}else{this.inputElement.removeAttribute("placeholder")}}focus(){this.focusInput()}focusInput(){if(this.shadowRoot.activeElement===this.inputElement){return false}this.inputElement.focus();return true}onValueChanged_(newValue,oldValue){if(!newValue&&!oldValue){return}if(this.autoValidate){this.validate()}}onInputChange_(e){this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:{sourceEvent:e}}))}onInputFocus_(){this.focused_=true}onInputBlur_(){this.focused_=false}select(start,end){this.inputElement.focus();if(start!==undefined&&end!==undefined){this.inputElement.setSelectionRange(start,end)}else{assert(start===undefined&&end===undefined);this.inputElement.select()}}validate(){this.invalid=!this.inputElement.checkValidity();return!this.invalid}}customElements.define(CrInputElement.is,CrInputElement);function getTemplate$K(){return html`<!--_html_template_start_--><style include="cr-hidden-style cr-input-style cr-shared-style">textarea{display:block;resize:none}#input-container{background-color:var(--cr-input-background-color)}:host([autogrow][has-max-height]) #input-container{box-sizing:content-box;max-height:var(--cr-textarea-autogrow-max-height);min-height:1lh}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}:host-context([chrome-refresh-2023]) #input{padding-bottom:var(--cr-input-padding-bottom);padding-inline-end:var(--cr-input-padding-end);padding-inline-start:var(--cr-input-padding-start);padding-top:var(--cr-input-padding-top)}#footerContainer{border-top:0;display:var(--cr-textarea-footer-display,none);font-size:var(--cr-form-field-label-font-size);height:var(--cr-form-field-label-height);justify-content:space-between;line-height:var(--cr-form-field-label-line-height);margin:8px 0;min-height:0;padding:0;white-space:var(--cr-input-error-white-space)}:host([invalid]) #footerContainer,:host([invalid]) #label{color:var(--cr-input-error-color)}#mirror{display:none}:host([autogrow]) #mirror{display:block;visibility:hidden;white-space:pre-wrap;word-wrap:break-word}:host([autogrow]) #mirror,:host([autogrow]) textarea{border:0;box-sizing:border-box;padding-bottom:var(--cr-input-padding-bottom,6px);padding-inline-end:var(--cr-input-padding-end,8px);padding-inline-start:var(--cr-input-padding-start,8px);padding-top:var(--cr-input-padding-top,6px)}:host([autogrow]) textarea{height:100%;left:0;overflow:hidden;position:absolute;resize:none;top:0;width:100%}:host([autogrow][has-max-height]) #mirror,:host([autogrow][has-max-height]) textarea{overflow-x:hidden;overflow-y:auto}:host-context([chrome-refresh-2023]) textarea{position:relative;z-index:1}:host-context([chrome-refresh-2023]):host([autogrow]) textarea{position:absolute}:host-context([chrome-refresh-2023]) #mirror{font-size:12px;line-height:16px}</style>
<div id="label" class="cr-form-field-label" hidden="[[!label]]" aria-hidden="true">
  [[label]]
</div>
<div id="input-container">
  
  <div id="mirror">[[calculateMirror_(value)]]</div>
  
  <div id="hover-layer"></div>
  <textarea id="input" autofocus="[[autofocus]]" rows="[[rows]]" value="{{value::input}}" aria-label$="[[label]]" on-focus="onInputFocusChange_" on-blur="onInputFocusChange_" on-change="onInputChange_" disabled="[[disabled]]" maxlength$="[[maxlength]]" readonly$="[[readonly]]" required$="[[required]]" placeholder$="[[placeholder]]"></textarea>
  <div id="underline-base"></div>
  <div id="underline"></div>
</div>
<div id="footerContainer" class="cr-row">
  <div id="firstFooter" aria-live="[[getFooterAria_(invalid)]]">
    [[firstFooter]]
  </div>
  <div id="secondFooter" aria-live="[[getFooterAria_(invalid)]]">
    [[secondFooter]]
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrTextareaElement extends PolymerElement{static get is(){return"cr-textarea"}static get template(){return getTemplate$K()}static get properties(){return{autofocus:{type:Boolean,value:false,reflectToAttribute:true},disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"onDisabledChanged_"},required:{type:Boolean,value:false,reflectToAttribute:true},maxlength:{type:Number},readonly:Boolean,rows:{type:Number,value:3,reflectToAttribute:true},label:{type:String,value:""},value:{type:String,value:"",notify:true},placeholder:{type:String,value:""},autogrow:{type:Boolean,value:false,reflectToAttribute:true},hasMaxHeight:{type:Boolean,value:false,reflectToAttribute:true},invalid:{type:Boolean,value:false,reflectToAttribute:true},firstFooter:{type:String,value:""},secondFooter:{type:String,value:""}}}focusInput(){this.$.input.focus()}onInputChange_(e){this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:{sourceEvent:e}}))}calculateMirror_(){if(!this.autogrow){return""}const tokens=this.value?this.value.split("\n"):[""];while(this.rows>0&&tokens.length<this.rows){tokens.push("")}return tokens.join("\n")+"&nbsp;"}onInputFocusChange_(){if(this.shadowRoot.activeElement===this.$.input){this.setAttribute("focused_","")}else{this.removeAttribute("focused_")}}onDisabledChanged_(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}getFooterAria_(){return this.invalid?"assertive":"polite"}}customElements.define(CrTextareaElement.is,CrTextareaElement);const styleMod$3=document.createElement("dom-module");styleMod$3.appendChild(html`
  <template>
    <style>
.md-select{--md-arrow-width:10px;--md-select-bg-color:var(--google-grey-100);--md-select-focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--md-select-option-bg-color:white;--md-select-side-padding:8px;--md-select-text-color:var(--cr-primary-text-color);-webkit-appearance:none;background:url(//resources/images/arrow_down.svg) calc(100% - var(--md-select-side-padding)) center no-repeat;background-color:var(--md-select-bg-color);background-size:var(--md-arrow-width);border:none;border-radius:4px;color:var(--md-select-text-color);cursor:pointer;font-family:inherit;font-size:inherit;line-height:inherit;max-width:100%;outline:0;padding-bottom:6px;padding-inline-end:calc(var(--md-select-side-padding) + var(--md-arrow-width) + 3px);padding-inline-start:var(--md-select-side-padding);padding-top:6px;width:var(--md-select-width,200px)}@media (prefers-color-scheme:dark){.md-select{--md-select-bg-color:rgba(0, 0, 0, .3);--md-select-focus-shadow-color:rgba(var(--google-blue-300-rgb), .5);--md-select-option-bg-color:var(--google-grey-900-white-4-percent);background-image:url(//resources/images/dark/arrow_down.svg)}}:host-context([chrome-refresh-2023]) .md-select{--md-select-bg-color:transparent;--md-arrow-width:7px;--md-select-side-padding:10px;--md-select-text-color:inherit;border:solid 1px var(--color-combobox-container-outline,var(--cr-fallback-color-neutral-outline));border-radius:8px;box-sizing:border-box;font-size:12px;height:36px;line-height:36px;padding-bottom:0;padding-top:0}:host-context([chrome-refresh-2023]) .md-select:hover{background-color:var(--color-comboxbox-ink-drop-hovered,var(--cr-hover-on-subtle-background-color))}.md-select :-webkit-any(option,optgroup){background-color:var(--md-select-option-bg-color)}.md-select[disabled]{opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]) .md-select[disabled]{background-color:var(--color-combobox-background-disabled,var(--cr-fallback-color-disabled-background));border-color:transparent;color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));opacity:1}.md-select:focus{box-shadow:0 0 0 2px var(--md-select-focus-shadow-color)}:host-context([chrome-refresh-2023]) .md-select:focus{box-shadow:none;outline:solid 2px var(--cr-focus-outline-color);outline-offset:-1px}@media (forced-colors:active){.md-select:focus{outline:var(--cr-focus-outline-hcm)}}.md-select:active{box-shadow:none}:host-context([dir=rtl]) .md-select{background-position-x:var(--md-select-side-padding)}
    </style>
  </template>
`.content);styleMod$3.register("md-select");
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ShowPasswordMixin=dedupingMixin((superClass=>{class ShowPasswordMixin extends superClass{static get properties(){return{isPasswordVisible:{type:Boolean,value:false}}}getPasswordInputType(){return this.isPasswordVisible?"text":"password"}getShowHideButtonLabel(){return this.isPasswordVisible?loadTimeData.getString("hidePassword"):loadTimeData.getString("showPassword")}getShowHideButtonIconClass(){return this.isPasswordVisible?"icon-visibility-off":"icon-visibility"}onShowHidePasswordButtonClick(){this.isPasswordVisible=!this.isPasswordVisible}}return ShowPasswordMixin}));
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WebUiListenerMixin=dedupingMixin((superClass=>{class WebUiListenerMixin extends superClass{constructor(){super(...arguments);this.webUiListeners_=[]}addWebUiListener(eventName,callback){this.webUiListeners_.push(addWebUiListener(eventName,callback))}disconnectedCallback(){super.disconnectedCallback();while(this.webUiListeners_.length>0){removeWebUiListener(this.webUiListeners_.pop())}}}return WebUiListenerMixin}));
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var TrustedVaultBannerState;(function(TrustedVaultBannerState){TrustedVaultBannerState[TrustedVaultBannerState["NOT_SHOWN"]=0]="NOT_SHOWN";TrustedVaultBannerState[TrustedVaultBannerState["OFFER_OPT_IN"]=1]="OFFER_OPT_IN";TrustedVaultBannerState[TrustedVaultBannerState["OPTED_IN"]=2]="OPTED_IN"})(TrustedVaultBannerState||(TrustedVaultBannerState={}));class SyncBrowserProxyImpl{getTrustedVaultBannerState(){return sendWithPromise("GetSyncTrustedVaultBannerState")}getSyncInfo(){return sendWithPromise("GetSyncInfo")}getAccountInfo(){return sendWithPromise("GetAccountInfo")}static getInstance(){return instance$4||(instance$4=new SyncBrowserProxyImpl)}static setInstance(obj){instance$4=obj}}let instance$4=null;
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const UserUtilMixin=dedupingMixin((superClass=>{class UserUtilMixin extends(WebUiListenerMixin(superClass)){constructor(){super(...arguments);this.setIsOptedInForAccountStorageListener_=null}static get properties(){return{isOptedInForAccountStorage:{type:Boolean,value:false},isEligibleForAccountStorage:{type:Boolean,value:false,computed:"computeIsEligibleForAccountStorage_(syncInfo_)"},isAccountStoreUser:{type:Boolean,computed:"computeIsAccountStoreUser_("+"isOptedInForAccountStorage, isEligibleForAccountStorage)"},isSyncingPasswords:{type:Boolean,value:true,computed:"computeIsSyncingPasswords_(syncInfo_)"},accountEmail:{type:String,value:"",computed:"computeAccountEmail_(accountInfo_)"},avatarImage:{type:String,value:"",computed:"computeAvatarImage_(accountInfo_)"}}}connectedCallback(){super.connectedCallback();this.setIsOptedInForAccountStorageListener_=optedIn=>this.isOptedInForAccountStorage=optedIn;const syncInfoChanged=syncInfo=>this.syncInfo_=syncInfo;const accountInfoChanged=accountInfo=>this.accountInfo_=accountInfo;PasswordManagerImpl.getInstance().isOptedInForAccountStorage().then(this.setIsOptedInForAccountStorageListener_);SyncBrowserProxyImpl.getInstance().getSyncInfo().then(syncInfoChanged);SyncBrowserProxyImpl.getInstance().getAccountInfo().then(accountInfoChanged);PasswordManagerImpl.getInstance().addAccountStorageOptInStateListener(this.setIsOptedInForAccountStorageListener_);this.addWebUiListener("sync-info-changed",syncInfoChanged);this.addWebUiListener("stored-accounts-changed",accountInfoChanged)}disconnectedCallback(){super.disconnectedCallback();assert(this.setIsOptedInForAccountStorageListener_);PasswordManagerImpl.getInstance().removeAccountStorageOptInStateListener(this.setIsOptedInForAccountStorageListener_);this.setIsOptedInForAccountStorageListener_=null}optInForAccountStorage(){PasswordManagerImpl.getInstance().optInForAccountStorage(true)}optOutFromAccountStorage(){PasswordManagerImpl.getInstance().optInForAccountStorage(false)}computeIsEligibleForAccountStorage_(){return!!this.syncInfo_&&this.syncInfo_.isEligibleForAccountStorage}computeIsSyncingPasswords_(){return!!this.syncInfo_&&this.syncInfo_.isSyncingPasswords}computeAccountEmail_(){return this.accountInfo_?this.accountInfo_.email:""}computeAvatarImage_(){return this.accountInfo_.avatarImage||""}computeIsAccountStoreUser_(){return this.isEligibleForAccountStorage&&this.isOptedInForAccountStorage}}return UserUtilMixin}));function getTemplate$J(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style md-select">cr-input:not(:first-of-type){margin-top:var(--cr-form-field-bottom-spacing)}cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-size:32px;--cr-icon-button-margin-start:0;--cr-icon-button-margin-end:0}cr-input{--cr-input-error-display:none}cr-textarea{--settings-textarea-footer-display:flex}.md-select{--md-select-width:100%;margin-bottom:var(--cr-form-field-bottom-spacing);margin-top:2px}#websiteInput[show-error-message]{--cr-input-error-display:block}#usernameInput[invalid]{--cr-input-error-display:block}#viewExistingPasswordLink{color:var(--cr-link-color);display:block;font-size:var(--cr-form-field-label-font-size);line-height:1;width:fit-content}#footnote{margin-inline-start:2px;margin-top:16px}.divider{border-top:var(--cr-separator-line);margin:var(--cr-form-field-bottom-spacing) 0}cr-textarea{--cr-textarea-footer-display:flex;--cr-textarea-autogrow-max-height:20lh}</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="title" id="title" class="dialog-title">
    $i18n{addPasswordTitle}
  </div>
  <div slot="body">
    <select class="md-select" id="storePicker" aria-description="$i18n{addPasswordStorePickerA11yDescription}" hidden="[[!isAccountStoreUser]]">
      <option value="[[storeOptionAccountValue_]]">
        $i18n{addPasswordStoreOptionAccount}
      </option>
      <option value="[[storeOptionDeviceValue_]]">
        $i18n{addPasswordStoreOptionDevice}
      </option>
    </select>
    <cr-input id="websiteInput" label="$i18n{websiteLabel}" autofocus required placeholder="example.com" value="{{website_}}" invalid="[[isWebsiteInputInvalid_(websiteErrorMessage_)]]" show-error-message$="[[showWebsiteError_(websiteErrorMessage_)]]" error-message="[[websiteErrorMessage_]]" on-input="validateWebsite_" on-blur="onWebsiteInputBlur_">
    </cr-input>
    <cr-input id="usernameInput" label="$i18n{usernameLabel}" value="{{username_}}" invalid="[[doesUsernameExistAlready_(usernameErrorMessage_)]]" error-message="[[usernameErrorMessage_]]">
    </cr-input>
    <a id="viewExistingPasswordLink" is="action-link" href="/" on-click="onViewExistingPasswordClick_" aria-description="[[getViewExistingPasswordAriaDescription_(
          urlCollection_, username_)]]" hidden="[[!doesUsernameExistAlready_(usernameErrorMessage_)]]">
      $i18n{viewExistingPassword}
    </a>
    <cr-input id="passwordInput" label="$i18n{passwordLabel}" type="[[getPasswordInputType(isPasswordVisible)]]" value="{{password_}}" invalid="[[isPasswordInvalid_]]" on-blur="onPasswordInput_" on-input="onPasswordInput_" required class="password-input">
      <cr-icon-button id="showPasswordButton" slot="inline-suffix" class$="[[getShowHideButtonIconClass(isPasswordVisible)]]" title="[[getShowHideButtonLabel(isPasswordVisible)]]" on-click="onShowHidePasswordButtonClick">
      </cr-icon-button>
    </cr-input>
    <div id="footnote">
      $i18n{addPasswordFooter}
    </div>
    <div class="divider"></div>
    <cr-textarea label="$i18n{noteLabel}" id="noteInput" value="{{note_}}" invalid="[[isNoteInputInvalid_(note_)]]" has-max-height autogrow first-footer="[[getFirstNoteFooter_(note_)]]" second-footer="[[getSecondNoteFooter_(note_)]]">
    </cr-textarea>
  </div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="closeDialog_">
      $i18n{cancel}
    </cr-button>
    <cr-button id="addButton" class="action-button" disabled="[[!canAddPassword_]]" on-click="onAddClick_">
      $i18n{save}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var AddCredentialFromSettingsUserInteractions;(function(AddCredentialFromSettingsUserInteractions){AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["ADD_DIALOG_OPENED"]=0]="ADD_DIALOG_OPENED";AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["ADD_DIALOG_CLOSED"]=1]="ADD_DIALOG_CLOSED";AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["CREDENTIAL_ADDED"]=2]="CREDENTIAL_ADDED";AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["DUPLICATED_CREDENTIAL_ENTERED"]=3]="DUPLICATED_CREDENTIAL_ENTERED";AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["DUPLICATE_CREDENTIAL_VIEWED"]=4]="DUPLICATE_CREDENTIAL_VIEWED";AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["COUNT"]=5]="COUNT"})(AddCredentialFromSettingsUserInteractions||(AddCredentialFromSettingsUserInteractions={}));function recordAddCredentialInteraction(interaction){chrome.metricsPrivate.recordEnumerationValue("PasswordManager.AddCredentialFromSettings.UserAction2",interaction,AddCredentialFromSettingsUserInteractions.COUNT)}const PASSWORD_NOTE_WARNING_CHARACTER_COUNT=900;const PASSWORD_NOTE_MAX_CHARACTER_COUNT=1e3;const AddPasswordDialogElementBase=UserUtilMixin(ShowPasswordMixin(I18nMixin(PolymerElement)));function getUsernamesByOrigin(passwords){return passwords.reduce((function(usernamesByOrigin,entry){assert(entry.affiliatedDomains);for(const domain of entry.affiliatedDomains){if(!usernamesByOrigin.has(domain.signonRealm)){usernamesByOrigin.set(domain.signonRealm,new Set)}usernamesByOrigin.get(domain.signonRealm).add(entry.username)}return usernamesByOrigin}),new Map)}class AddPasswordDialogElement extends AddPasswordDialogElementBase{constructor(){super(...arguments);this.setSavedPasswordsListener_=null}static get is(){return"add-password-dialog"}static get template(){return getTemplate$J()}static get properties(){return{website_:{type:String,value:""},username_:{type:String,value:""},password_:{type:String,value:""},note_:{type:String,value:""},urlCollection_:Object,usernamesBySignonRealm_:{type:Object,values:()=>new Map},websiteErrorMessage_:{type:String,value:null},usernameErrorMessage_:{type:String,computed:"computeUsernameErrorMessage_(urlCollection_, username_, "+"usernamesBySignonRealm_)"},isPasswordInvalid_:{type:Boolean,value:false},canAddPassword_:{type:Boolean,computed:"computeCanAddPassword_(websiteErrorMessage_, username_, "+"password_, note_)"},storeOptionAccountValue_:{type:String,value:chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT,readonly:true},storeOptionDeviceValue_:{type:String,value:chrome.passwordsPrivate.PasswordStoreSet.DEVICE,readonly:true}}}static get observers(){return["updateDefaultStore_(isAccountStoreUser)"]}connectedCallback(){super.connectedCallback();this.setSavedPasswordsListener_=passwordList=>{this.usernamesBySignonRealm_=getUsernamesByOrigin(passwordList)};PasswordManagerImpl.getInstance().getSavedPasswordList().then(this.setSavedPasswordsListener_);PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setSavedPasswordsListener_);recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.ADD_DIALOG_OPENED)}disconnectedCallback(){super.disconnectedCallback();assert(this.setSavedPasswordsListener_);PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setSavedPasswordsListener_);this.setSavedPasswordsListener_=null}updateDefaultStore_(){if(this.isAccountStoreUser){PasswordManagerImpl.getInstance().isAccountStoreDefault().then((isAccountStoreDefault=>{this.$.storePicker.value=isAccountStoreDefault?this.storeOptionAccountValue_:this.storeOptionDeviceValue_}))}}closeDialog_(){recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.ADD_DIALOG_CLOSED);this.$.dialog.close()}async validateWebsite_(){if(this.website_.length===0){this.websiteErrorMessage_=null;return}PasswordManagerImpl.getInstance().getUrlCollection(this.website_).then((urlCollection=>{this.urlCollection_=urlCollection;this.websiteErrorMessage_=!urlCollection?this.i18n("notValidWebsite"):null})).catch((()=>this.websiteErrorMessage_=this.i18n("notValidWebsite")))}onWebsiteInputBlur_(){if(this.website_.length===0){this.websiteErrorMessage_=""}else if(!this.websiteErrorMessage_&&!this.website_.includes(".")){this.websiteErrorMessage_=this.i18n("missingTLD",`${this.website_}.com`)}}isWebsiteInputInvalid_(){return this.websiteErrorMessage_!==null}showWebsiteError_(){return!!this.websiteErrorMessage_&&this.websiteErrorMessage_.length>0}computeUsernameErrorMessage_(){const signonRealm=this.urlCollection_?.signonRealm;if(!signonRealm){return null}if(this.usernamesBySignonRealm_.has(signonRealm)&&this.usernamesBySignonRealm_.get(signonRealm).has(this.username_)){recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.DUPLICATED_CREDENTIAL_ENTERED);return this.i18n("usernameAlreadyUsed",this.website_)}return null}doesUsernameExistAlready_(){return!!this.usernameErrorMessage_}onPasswordInput_(){this.isPasswordInvalid_=this.password_.length===0}isNoteInputInvalid_(){return this.note_.length>=PASSWORD_NOTE_MAX_CHARACTER_COUNT}getFirstNoteFooter_(){return this.note_.length<PASSWORD_NOTE_WARNING_CHARACTER_COUNT?"":this.i18n("passwordNoteCharacterCountWarning",PASSWORD_NOTE_MAX_CHARACTER_COUNT)}getSecondNoteFooter_(){return this.note_.length<PASSWORD_NOTE_WARNING_CHARACTER_COUNT?"":this.i18n("passwordNoteCharacterCount",this.note_.length,PASSWORD_NOTE_MAX_CHARACTER_COUNT)}computeCanAddPassword_(){if(this.isWebsiteInputInvalid_()||this.website_.length===0){return false}if(this.doesUsernameExistAlready_()){return false}if(this.password_.length===0){return false}if(this.isNoteInputInvalid_()){return false}return true}onAddClick_(){assert(this.computeCanAddPassword_());assert(this.urlCollection_);recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.CREDENTIAL_ADDED);const useAccountStore=this.isAccountStoreUser&&this.$.storePicker.value===this.storeOptionAccountValue_;if(!this.$.storePicker.hidden){chrome.metricsPrivate.recordBoolean("PasswordManager.AddCredentialFromSettings.AccountStoreUsed2",useAccountStore)}PasswordManagerImpl.getInstance().addPassword({url:this.urlCollection_.signonRealm,username:this.username_,password:this.password_,note:this.note_,useAccountStore:useAccountStore}).then((()=>{this.closeDialog_()})).catch((()=>{}))}getViewExistingPasswordAriaDescription_(){return this.urlCollection_?this.i18n("viewExistingPasswordAriaDescription",this.username_,this.urlCollection_.shown):""}onViewExistingPasswordClick_(e){recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.DUPLICATE_CREDENTIAL_VIEWED);e.preventDefault();Router.getInstance().navigateTo(Page.PASSWORD_DETAILS,this.urlCollection_?.shown);this.closeDialog_()}}customElements.define(AddPasswordDialogElement.is,AddPasswordDialogElement);function getTemplate$I(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style">cr-input:not(:first-of-type){margin-top:var(--cr-form-field-bottom-spacing)}cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-size:32px;--cr-icon-button-margin-start:0;--cr-icon-button-margin-end:0}cr-input{--cr-input-error-display:none}cr-textarea{--cr-textarea-footer-display:flex;--cr-textarea-autogrow-max-height:20lh}#usernameInput[invalid]{--cr-input-error-display:block}#passwordNote,#usernameInput{margin-top:var(--cr-form-field-bottom-spacing)}#viewExistingPasswordLink{color:var(--cr-link-color);display:block;font-size:var(--cr-form-field-label-font-size);line-height:1;width:fit-content}#footnote{margin-inline-start:2px;margin-top:16px}</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="title" id="title" class="dialog-title">
    $i18n{editPasswordTitle}
  </div>
  <div slot="body">
    <div class="cr-form-field-label">$i18n{sitesLabel}</div>
    <template id="links" is="dom-repeat" items="[[credential.affiliatedDomains]]">
      <div class="elide-left">
        <a href="[[item.url]]" class="site-link" target="_blank">
          [[item.name]]
        </a>
      </div>
    </template>
    <cr-input id="usernameInput" label="$i18n{usernameLabel}" autofocus value="{{username_}}" error-message="[[usernameErrorMessage_]]" invalid="[[doesUsernameExistAlready_(usernameErrorMessage_)]]">
    </cr-input>
    <a id="viewExistingPasswordLink" is="action-link" href="/" on-click="onViewExistingPasswordClick_" aria-description="[[getViewExistingPasswordAriaDescription_(
          conflictingUsernames_, username_)]]" hidden="[[!showRedirect_(showRedirect, usernameErrorMessage_)]]">
      $i18n{viewExistingPassword}
    </a>
    <cr-input id="passwordInput" label="$i18n{passwordLabel}" required type="[[getPasswordInputType(isPasswordVisible)]]" value="{{password_}}" invalid="[[!password_.length]]" class="password-input">
      <cr-icon-button id="showPasswordButton" slot="inline-suffix" class$="[[getShowHideButtonIconClass(isPasswordVisible)]]" title="[[getShowHideButtonLabel(isPasswordVisible)]]" on-click="onShowHidePasswordButtonClick">
      </cr-icon-button>
    </cr-input>
    <div id="footnote">
      [[getFootnote_(credential)]]
    </div>
    <cr-textarea id="passwordNote" label="$i18n{noteLabel}" value="{{note_}}" invalid="[[isNoteInputInvalid_(note_)]]" has-max-height autogrow first-footer="[[getFirstNoteFooter_(note_)]]" second-footer="[[getSecondNoteFooter_(note_)]]">
    </cr-textarea>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancel_">
      $i18n{cancel}
    </cr-button>
    <cr-button id="saveButton" class="action-button" disabled="[[!canEditPassword_]]" on-click="onEditClick_">
      $i18n{save}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getConflictingUsernames(currentPassword,passwords){assert(currentPassword.affiliatedDomains);const currentSignonRealms=currentPassword.affiliatedDomains.map((domain=>domain.signonRealm));return passwords.reduce((function(conflictingUsername,entry){assert(entry.affiliatedDomains);const signonRealms=entry.affiliatedDomains.map((domain=>domain.signonRealm));const signonRealm=signonRealms.filter((signonRealm=>currentSignonRealms.includes(signonRealm)))[0];if(signonRealm){conflictingUsername.set(entry.username,entry.affiliatedDomains.find((domain=>domain.signonRealm===signonRealm)).name)}return conflictingUsername}),new Map)}const EditPasswordDialogElementBase=ShowPasswordMixin(I18nMixin(PolymerElement));class EditPasswordDialogElement extends EditPasswordDialogElementBase{constructor(){super(...arguments);this.setSavedPasswordsListener_=null}static get is(){return"edit-password-dialog"}static get template(){return getTemplate$I()}static get properties(){return{credential:Object,showRedirect:{type:Boolean,value:false},username_:String,password_:String,note_:String,conflictingUsernames_:{type:Object,values:()=>new Map},usernameErrorMessage_:{type:String,computed:"computeUsernameErrorMessage_(credential, username_, "+"conflictingUsernames_)"},canEditPassword_:{type:Boolean,computed:"computeCanEditPassword_(credential, username_, password_, "+"note_)"}}}ready(){super.ready();assert(this.credential.password);this.username_=this.credential.username;this.password_=this.credential.password;this.note_=this.credential.note??""}connectedCallback(){super.connectedCallback();this.setSavedPasswordsListener_=credentialList=>{const passwordList=credentialList.filter((credential=>!credential.isPasskey&&!credential.federationText));this.conflictingUsernames_=getConflictingUsernames(this.credential,passwordList)};PasswordManagerImpl.getInstance().getSavedPasswordList().then(this.setSavedPasswordsListener_);PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setSavedPasswordsListener_)}disconnectedCallback(){super.disconnectedCallback();assert(this.setSavedPasswordsListener_);PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setSavedPasswordsListener_);this.setSavedPasswordsListener_=null}computeUsernameErrorMessage_(){if(!this.conflictingUsernames_){return null}if(this.conflictingUsernames_.has(this.username_)&&this.username_!==this.credential.username){return this.i18n("usernameAlreadyUsed",this.conflictingUsernames_.get(this.username_))}return null}doesUsernameExistAlready_(){return!!this.usernameErrorMessage_}onCancel_(){this.$.dialog.close()}getFootnote_(){assert(this.credential.affiliatedDomains);return this.i18n("editPasswordFootnote",this.credential.affiliatedDomains[0]?.name??"")}showRedirect_(){return this.showRedirect&&this.doesUsernameExistAlready_()}getViewExistingPasswordAriaDescription_(){if(!this.conflictingUsernames_){return""}return this.conflictingUsernames_.has(this.username_)?this.i18n("viewExistingPasswordAriaDescription",this.username_,this.conflictingUsernames_.get(this.username_)):""}onViewExistingPasswordClick_(e){e.preventDefault();assert(this.conflictingUsernames_.has(this.username_));Router.getInstance().navigateTo(Page.PASSWORD_DETAILS,this.conflictingUsernames_.get(this.username_));this.$.dialog.close()}isNoteInputInvalid_(){return this.note_.length>=PASSWORD_NOTE_MAX_CHARACTER_COUNT}getFirstNoteFooter_(){return this.note_.length<PASSWORD_NOTE_WARNING_CHARACTER_COUNT?"":this.i18n("passwordNoteCharacterCountWarning",PASSWORD_NOTE_MAX_CHARACTER_COUNT)}getSecondNoteFooter_(){return this.note_.length<PASSWORD_NOTE_WARNING_CHARACTER_COUNT?"":this.i18n("passwordNoteCharacterCount",this.note_.length,PASSWORD_NOTE_MAX_CHARACTER_COUNT)}computeCanEditPassword_(){return!this.doesUsernameExistAlready_()&&!!this.password_&&this.password_.length>0&&!this.isNoteInputInvalid_()}onEditClick_(){assert(this.computeCanEditPassword_());this.credential.password=this.password_;this.credential.username=this.username_;this.credential.note=this.note_;PasswordManagerImpl.getInstance().changeCredential(this.credential).finally((()=>{this.$.dialog.close()}))}}customElements.define(EditPasswordDialogElement.is,EditPasswordDialogElement);function getTemplate$H(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style">a[href]{color:var(--cr-link-color)}</style>
<cr-dialog id="dialog" close-text="$i18n{close}" ignore-popstate ignore-enter-key>
  <div slot="title" class="dialog-title">
    $i18n{deletePasswordConfirmationTitle}
  </div>
  <div slot="body">
    <span id="link" hidden="[[!hasSecureChangePasswordUrl_(actionUrl)]]" inner-h-t-m-l="[[getDescriptionHtml_(origin,actionUrl)]]">
    </span>
    <span id="text" hidden="[[hasSecureChangePasswordUrl_(actionUrl)]]">
      [[getDescriptionText_(origin)]]
    </span>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_" id="cancel" autofocus>
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onDeleteClick_" id="delete">
      $i18n{deletePassword}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DeletePasswordDisclaimerDialogElementBase=I18nMixin(PolymerElement);class DeletePasswordDisclaimerDialogElement extends DeletePasswordDisclaimerDialogElementBase{constructor(){super(...arguments);this.passwordManager_=PasswordManagerImpl.getInstance()}static get is(){return"delete-password-disclaimer-dialog"}static get template(){return getTemplate$H()}static get properties(){return{origin:String,actionUrl:String}}connectedCallback(){super.connectedCallback();this.$.dialog.showModal()}onDeleteClick_(){this.dispatchEvent(new CustomEvent("delete-password-click",{bubbles:true,composed:true}));this.passwordManager_.recordPasswordCheckInteraction(PasswordCheckInteraction.REMOVE_PASSWORD);this.$.dialog.close()}onCancelClick_(){this.$.dialog.close()}hasSecureChangePasswordUrl_(){const url=this.actionUrl;return!!url&&url.startsWith("https://")}getDescriptionHtml_(){if(!this.hasSecureChangePasswordUrl_()){return window.trustedTypes.emptyHTML}return this.i18nAdvanced("deletePasswordConfirmationDescription",{substitutions:[this.origin,`<a href='${this.actionUrl}' target='_blank'>${this.origin}</a>`]})}getDescriptionText_(){return this.i18n("deletePasswordConfirmationDescription",this.origin,this.origin)}}customElements.define(DeletePasswordDisclaimerDialogElement.is,DeletePasswordDisclaimerDialogElement);function getTemplate$G(){return html`<!--_html_template_start_--><cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">[[getDisclaimerTitle_(origin)]]</div>
  <div slot="body">[[getDisclaimerDescription_()]]</div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="onCancel_" autofocus>
      $i18n{cancel}
    </cr-button>
    <cr-button id="edit" class="action-button" on-click="onEditClick_">
      $i18n{editPassword}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const EditPasswordDisclaimerDialogElementBase=I18nMixin(PolymerElement);class EditPasswordDisclaimerDialogElement extends EditPasswordDisclaimerDialogElementBase{static get is(){return"edit-password-disclaimer-dialog"}static get template(){return getTemplate$G()}static get properties(){return{origin:String}}connectedCallback(){super.connectedCallback();this.$.dialog.showModal()}onEditClick_(){this.dispatchEvent(new CustomEvent("edit-password-click",{bubbles:true,composed:true}));this.$.dialog.close()}onCancel_(){this.$.dialog.close()}getDisclaimerTitle_(){return this.i18n("editDisclaimerTitle",this.origin)}getDisclaimerDescription_(){const brandingName=this.i18n("localPasswordManager");return this.i18n("editDisclaimerDescription",brandingName)}}customElements.define(EditPasswordDisclaimerDialogElement.is,EditPasswordDisclaimerDialogElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AUTO_SRC="auto-src";const CLEAR_SRC="clear-src";const IS_GOOGLE_PHOTOS="is-google-photos";const STATIC_ENCODE="static-encode";const ENCODE_TYPE="encode-type";class CrAutoImgElement extends HTMLImageElement{static get observedAttributes(){return[AUTO_SRC,IS_GOOGLE_PHOTOS,STATIC_ENCODE,ENCODE_TYPE]}attributeChangedCallback(name,oldValue,newValue){if(name!==AUTO_SRC&&name!==IS_GOOGLE_PHOTOS&&name!==STATIC_ENCODE&&name!==ENCODE_TYPE){return}if(name===IS_GOOGLE_PHOTOS&&oldValue===null===(newValue===null)){return}if(this.hasAttribute(CLEAR_SRC)){this.removeAttribute("src")}let url=null;try{url=new URL(this.getAttribute(AUTO_SRC)||"")}catch(_){}if(!url||url.protocol==="chrome-untrusted:"){this.removeAttribute("src");return}if(url.protocol==="data:"||url.protocol==="chrome:"){this.src=url.href;return}if(!this.hasAttribute(IS_GOOGLE_PHOTOS)&&!this.hasAttribute(STATIC_ENCODE)&&!this.hasAttribute(ENCODE_TYPE)){this.src="chrome://image?"+url.href;return}this.src=`chrome://image?url=${encodeURIComponent(url.href)}`;if(this.hasAttribute(IS_GOOGLE_PHOTOS)){this.src+=`&isGooglePhotos=true`}if(this.hasAttribute(STATIC_ENCODE)){this.src+=`&staticEncode=true`}if(this.hasAttribute(ENCODE_TYPE)){this.src+=`&encodeType=${this.getAttribute(ENCODE_TYPE)}`}}set autoSrc(src){this.setAttribute(AUTO_SRC,src)}get autoSrc(){return this.getAttribute(AUTO_SRC)||""}set clearSrc(_){this.setAttribute(CLEAR_SRC,"")}get clearSrc(){return this.getAttribute(CLEAR_SRC)||""}set isGooglePhotos(enabled){if(enabled){this.setAttribute(IS_GOOGLE_PHOTOS,"")}else{this.removeAttribute(IS_GOOGLE_PHOTOS)}}get isGooglePhotos(){return this.hasAttribute(IS_GOOGLE_PHOTOS)}set staticEncode(enabled){if(enabled){this.setAttribute(STATIC_ENCODE,"")}else{this.removeAttribute(STATIC_ENCODE)}}get staticEncode(){return this.hasAttribute(STATIC_ENCODE)}set encodeType(type){if(type){this.setAttribute(ENCODE_TYPE,type)}else{this.removeAttribute(ENCODE_TYPE)}}get encodeType(){return this.getAttribute(ENCODE_TYPE)||""}}customElements.define("cr-auto-img",CrAutoImgElement,{extends:"img"});
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getSupportedScaleFactors(){const supportedScaleFactors=[];if(!isIOS){supportedScaleFactors.push(1)}if(!isIOS&&!isAndroid){supportedScaleFactors.push(2)}else{supportedScaleFactors.push(window.devicePixelRatio)}return supportedScaleFactors}function getUrlForCss(s){const s2=s.replace(/(\(|\)|\,|\s|\'|\"|\\)/g,"\\$1");return`url("${s2}")`}function getImageSet(path){const supportedScaleFactors=getSupportedScaleFactors();const replaceStartIndex=path.indexOf("SCALEFACTOR");if(replaceStartIndex<0){return getUrlForCss(path)}let s="";for(let i=0;i<supportedScaleFactors.length;++i){const scaleFactor=supportedScaleFactors[i];const pathWithScaleFactor=path.substr(0,replaceStartIndex)+scaleFactor+path.substr(replaceStartIndex+"scalefactor".length);s+=getUrlForCss(pathWithScaleFactor)+" "+scaleFactor+"x";if(i!==supportedScaleFactors.length-1){s+=", "}}return"image-set("+s+")"}function getBaseFaviconUrl(){const faviconUrl=new URL("chrome://favicon2/");faviconUrl.searchParams.set("size","16");faviconUrl.searchParams.set("scaleFactor","SCALEFACTORx");return faviconUrl}function getFavicon(url){const faviconUrl=getBaseFaviconUrl();faviconUrl.searchParams.set("iconUrl",url);return getImageSet(faviconUrl.toString())}function getFaviconForPageURL(url,isSyncedUrlForHistoryUi,remoteIconUrlForUma="",size=16,forceLightMode=false){const faviconUrl=getBaseFaviconUrl();faviconUrl.searchParams.set("size",size.toString());faviconUrl.searchParams.set("pageUrl",url);const fallback=isSyncedUrlForHistoryUi?"1":"0";faviconUrl.searchParams.set("allowGoogleServerFallback",fallback);if(isSyncedUrlForHistoryUi){faviconUrl.searchParams.set("iconUrl",remoteIconUrlForUma)}if(forceLightMode){faviconUrl.searchParams.set("forceLightMode","true")}return getImageSet(faviconUrl.toString())}function getTemplate$F(){return html`<!--_html_template_start_--><style include="cr-hidden-style">:host{--site-favicon-height:16px;--site-favicon-width:16px;overflow:hidden}#downloadedFavicon,#favicon{background-size:contain;height:var(--site-favicon-height);width:var(--site-favicon-width)}#downloadedFavicon{display:block}</style>
<div id="favicon" style="background-image:[[getBackgroundImage_(domain) ]]" hidden="[[showDownloadedIcon_]]">
</div>
<img is="cr-auto-img" id="downloadedFavicon" hidden="[[!showDownloadedIcon_]]" on-load="onLoadSuccess_" on-error="onLoadError_" auto-src="[[url]]">
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function ensureUrlHasScheme(url){return url.includes("://")?url:"http://"+url}class SiteFaviconElement extends PolymerElement{static get is(){return"site-favicon"}static get template(){return getTemplate$F()}static get properties(){return{domain:String,url:{type:String,observer:"onUrlChanged_"},showDownloadedIcon_:{type:Boolean,value:false}}}ready(){super.ready();setTimeout((()=>{if(!this.$.downloadedFavicon.complete){this.$.downloadedFavicon.src=""}}),1e3)}getBackgroundImage_(){if(this.domain){const url=ensureUrlHasScheme(this.domain);return getFaviconForPageURL(url||"",false)}return getFavicon("")}onLoadSuccess_(){this.showDownloadedIcon_=true;this.dispatchEvent(new CustomEvent("site-favicon-loaded",{bubbles:true,composed:true}))}onLoadError_(){this.showDownloadedIcon_=false;this.dispatchEvent(new CustomEvent("site-favicon-error",{bubbles:true,composed:true}))}onUrlChanged_(){this.showDownloadedIcon_=false}}customElements.define(SiteFaviconElement.is,SiteFaviconElement);
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class OpenWindowProxyImpl{openUrl(url){window.open(url)}static getInstance(){return instance$3||(instance$3=new OpenWindowProxyImpl)}static setInstance(obj){instance$3=obj}}let instance$3=null;function getTemplate$E(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style">:host{display:flex;flex-direction:column}site-favicon{padding-inline-end:20px}#list-item{align-items:center;display:flex;padding:16px 20px}#credentialInfo{display:grid;flex:2}#insecurePassword{background-color:transparent;border:none;color:var(--cr-secondary-text-color);font-size:inherit;margin-bottom:2px;margin-inline-start:4px;max-width:10ch}#usernameContainer{display:flex}#username{max-width:200px}#changeButton{align-items:flex-end;display:flex;flex-direction:column;margin-inline-start:var(--cr-icon-button-margin-start)}#change-password-link-icon{--iron-icon-width:16px;margin-inline-start:10px}#separator{margin-inline-start:56px}#alreadyChanged{color:var(--cr-link-color);flex:1;margin-top:8px;text-align:end}#changePasswordButton{height:auto;padding:3px 16px}</style>
<div id="separator" class="hr" hidden="[[first]]"></div>
<div id="list-item" focus-row-container>
  <site-favicon url="[[getGroupIcon_(group)]]" domain="[[getGroupName_(group)]]" aria-hidden="true">
  </site-favicon>
  <div id="credentialInfo">
    <div id="shownUrl" class="label text-elide">
      [[getGroupName_(group)]]
    </div>
    <div id="usernameContainer" class="cr-secondary-text label">
      <span id="username" class="text-elide">[[item.username]]</span>
      <input id="insecurePassword" focus-row-control class="password-input" focus-type="passwordField" readonly="readonly" disabled="disabled" type="[[getPasswordInputType(isPasswordVisible)]]" value="[[getPasswordValue_(item, isPasswordVisible)]]">
    </div>
    <template is="dom-if" if="[[showDetails]]">
      <div class="cr-secondary-text label text-elide" id="compromiseType">
        [[getCompromiseDescription_(item)]]
      </div>
      <div class="cr-secondary-text label text-elide" id="elapsedTime">
        [[item.compromisedInfo.elapsedTimeSinceCompromise]]
      </div>
    </template>
  </div>
  <template is="dom-if" if="[[item.changePasswordUrl]]">
    <div class="button-container" id="changeButton">
      <cr-button id="changePasswordButton" on-click="onChangePasswordClick_" aria-label$="[[getChangeButtonAriaLabel_(group)]]">
        $i18n{changePassword}
        <iron-icon icon="cr:open-in-new" id="change-password-link-icon">
        </iron-icon>
      </cr-button>
      <a id="alreadyChanged" hidden="[[!showAlreadyChanged]]" href="/" on-click="onAlreadyChangedClick_">
        $i18n{alreadyChangedPasswordLink}
      </a>
    </div>
  </template>
  <template is="dom-if" if="[[!item.changePasswordUrl]]">
    <span id="changePasswordInApp">$i18n{changePasswordInApp}</span>
  </template>
  <cr-icon-button class="icon-more-vert" id="more" title="$i18n{moreActions}" on-click="onMoreClick_" aria-label$="[[getMoreButtonAriaLabel_(group)]]">
  </cr-icon-button>
</div>
<template is="dom-if" if="[[showEditPasswordDisclaimer_]]" restamp>
  <edit-password-disclaimer-dialog on-edit-password-click="onEditPasswordClick_" origin="[[getGroupName_(group)]]" on-close="onEditDisclaimerClosed_">
  </edit-password-disclaimer-dialog>
</template>
<template is="dom-if" if="[[showEditPasswordDialog_]]" restamp>
  <edit-password-dialog on-close="onEditPasswordDialogClosed_" id="editPasswordDialog" credential="[[item]]" show-redirect>
  </edit-password-dialog>
</template>
<template is="dom-if" if="[[showDeletePasswordDialog_]]" restamp>
  <delete-password-disclaimer-dialog id="deletePasswordDialog" on-delete-password-click="onDeletePasswordClick_" on-close="onDeletePasswordDialogClosed_" origin="[[getGroupName_(group)]]" action-url="[[item.changePasswordUrl]]">
  </delete-password-disclaimer-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CheckupListItemElementBase=ShowPasswordMixin(I18nMixin(PolymerElement));class CheckupListItemElement extends CheckupListItemElementBase{static get is(){return"checkup-list-item"}static get template(){return getTemplate$E()}static get properties(){return{item:Object,group:Object,first:Boolean,showDetails:Boolean,showAlreadyChanged:Boolean,showEditPasswordDialog_:Boolean,showEditPasswordDisclaimer_:Boolean,showDeletePasswordDialog_:Boolean}}getPasswordValue_(){return this.isPasswordVisible?this.item.password:" ".repeat(10)}getCompromiseDescription_(){assert(this.item.compromisedInfo);const isLeaked=this.item.compromisedInfo.compromiseTypes.some((type=>type===chrome.passwordsPrivate.CompromiseType.LEAKED));const isPhished=this.item.compromisedInfo.compromiseTypes.some((type=>type===chrome.passwordsPrivate.CompromiseType.PHISHED));if(isLeaked&&isPhished){return this.i18n("phishedAndLeakedPassword")}if(isPhished){return this.i18n("phishedPassword")}if(isLeaked){return this.i18n("leakedPassword")}assertNotReached("Can't find a string for type: "+this.item.compromisedInfo)}onMoreClick_(event){this.dispatchEvent(new CustomEvent("more-actions-click",{bubbles:true,composed:true,detail:{listItem:this,target:event.target}}))}showHidePassword(){if(this.isPasswordVisible===true){this.onShowHidePasswordButtonClick();this.item.password=undefined;this.item.note=undefined;return}PasswordManagerImpl.getInstance().requestCredentialsDetails([this.item.id]).then((entries=>{const entry=entries[0];assert(!!entry);this.item.password=entry.password;this.item.note=entry.note;this.onShowHidePasswordButtonClick()})).catch((()=>{}))}showEditDialog(){PasswordManagerImpl.getInstance().requestCredentialsDetails([this.item.id]).then((entries=>{const entry=entries[0];assert(!!entry);this.item.affiliatedDomains=entry.affiliatedDomains;this.item.password=entry.password;this.item.note=entry.note;this.showEditPasswordDialog_=true})).catch((()=>{}))}showDeleteDialog(){this.showDeletePasswordDialog_=true}onChangePasswordClick_(){assert(this.item.changePasswordUrl);OpenWindowProxyImpl.getInstance().openUrl(this.item.changePasswordUrl);this.dispatchEvent(new CustomEvent("change-password-clicked",{bubbles:true,composed:true,detail:this.item.id}))}onAlreadyChangedClick_(e){this.showEditPasswordDisclaimer_=true;e.preventDefault()}onEditPasswordDialogClosed_(){this.showEditPasswordDialog_=false;this.item.password=undefined;this.item.note=undefined}onEditPasswordClick_(){this.showEditDialog()}onEditDisclaimerClosed_(){this.showEditPasswordDisclaimer_=false}onDeletePasswordDialogClosed_(){this.showDeletePasswordDialog_=false}onDeletePasswordClick_(){PasswordManagerImpl.getInstance().removeCredential(this.item.id,this.item.storedIn);this.dispatchEvent(new CustomEvent("password-removed",{bubbles:true,composed:true,detail:{removedFromStores:this.item.storedIn}}))}getGroupName_(){return!this.group?"":this.group.name}getGroupIcon_(){return!this.group?"":this.group.iconUrl}getChangeButtonAriaLabel_(){return this.i18n("changePasswordAriaDescription",this.getGroupName_())}getMoreButtonAriaLabel_(){return this.i18n("moreActionsAriaDescription",this.getGroupName_())}}customElements.define(CheckupListItemElement.is,CheckupListItemElement);
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrefsMixin=dedupingMixin((superClass=>{class PrefsMixin extends superClass{static get properties(){return{prefs:{type:Object,notify:true}}}getPref(prefPath){const pref=this.get(prefPath,this.prefs);assert(typeof pref!=="undefined","Pref is missing: "+prefPath);return pref}setPrefValue(prefPath,value){this.getPref(prefPath);this.set("prefs."+prefPath+".value",value)}appendPrefListItem(key,item){const pref=this.getPref(key);assert(pref&&pref.type===chrome.settingsPrivate.PrefType.LIST);if(pref.value.indexOf(item)===-1){this.push("prefs."+key+".value",item)}}updatePrefListItem(key,item,newItem){const pref=this.getPref(key);assert(pref&&pref.type===chrome.settingsPrivate.PrefType.LIST);const index=pref.value.indexOf(item);if(index!==-1){this.set(`prefs.${key}.value.${index}`,newItem)}}deletePrefListItem(key,item){assert(this.getPref(key).type===chrome.settingsPrivate.PrefType.LIST);const index=this.getPref(key).value.indexOf(item);if(index!==-1){this.splice(`prefs.${key}.value`,index,1)}}}return PrefsMixin}));function getTemplate$D(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style">:host(:not(.multi-card)){background-color:var(--cr-card-background-color);box-shadow:var(--cr-card-shadow);height:100%}#header{align-items:center;display:flex;padding-top:28px}#title{font-family:Roboto;font-size:14px;font-style:normal;font-weight:500;line-height:20px}#body{margin-top:40px;padding-inline-end:20px;padding-inline-start:20px}#expandMutedCompromisedCredentialsButton,#subtitle{color:var(--cr-secondary-text-color);font-weight:500}#description{margin-top:12px}#backButton{--cr-icon-button-margin-end:6px;--cr-icon-button-margin-start:0px}#insecureCredentials{margin-top:24px}.reuse-title{margin-inline-start:20px;margin-top:24px}iron-icon.policy-disabled{margin-inline-start:var(--cr-controlled-by-spacing)}</style>
<div id="header">
  <cr-icon-button class="icon-arrow-back" id="backButton" on-click="navigateBack_" aria-label="$i18n{backToCheckup}">
  </cr-icon-button>
  <h2 id="title" class="page-title">[[pageTitle_]]</h2>
</div>
<div id="body">
  <div id="subtitle" class="label">
    [[getSubTitle_(insecurityType_)]]
  </div>
  <div id="description" class="cr-secondary-text label">
    [[getDescription_(insecurityType_)]]
  </div>
</div>
<template is="dom-if" if="[[!isReusedType(insecurityType_)]]">
  <template id="insecureCredentials" is="dom-repeat" items="[[shownInsecureCredentials_]]" initial-count="50">
    <checkup-list-item item="[[item]]" first="[[!index]]" group="[[getCurrentGroup_(item.id, groups_)]]" show-details="[[isCompromisedType(insecurityType_)]]" show-already-changed="[[clickedChangePassword_(item, clickedChangePasswordIds_.size)]]" on-more-actions-click="onMoreActionsClick_" on-change-password-clicked="onChangePasswordClick_">
    </checkup-list-item>
  </template>
  <template is="dom-if" if="[[mutedCompromisedCredentials_.length]]">
    <cr-expand-button id="expandMutedCompromisedCredentialsButton" class="cr-row list-item" no-hover expanded="{{mutedLeakedCredentialsExpanded_}}">
      $i18n{mutedCompromisedCredentials}
    </cr-expand-button>
    <iron-collapse id="mutedCredentialsList" opened="[[mutedLeakedCredentialsExpanded_]]">
      <template is="dom-repeat" items="[[mutedCompromisedCredentials_]]">
        <checkup-list-item item="[[item]]" first="[[!index]]" group="[[getCurrentGroup_(item.id, groups_)]]" show-details="[[isCompromisedType(insecurityType_)]]" show-already-changed="[[clickedChangePassword_(item, clickedChangePasswordIds_.size)]]" on-more-actions-click="onMoreActionsClick_" on-change-password-clicked="onChangePasswordClick_">
        </checkup-list-item>
      </template>
    </iron-collapse>
  </template>
</template>
<template is="dom-if" if="[[isReusedType(insecurityType_)]]" restamp>
  <template id="reusedCredentials" is="dom-repeat" items="[[credentialsWithReusedPassword_]]" initial-count="50">
    <div class="cr-secondary-text label reuse-title">
      [[item.title]]
    </div>
    <template is="dom-repeat" items="[[item.credentials]]">
      <checkup-list-item item="[[item]]" first="[[!index]]" group="[[getCurrentGroup_(item.id, groups_)]]" show-already-changed="[[clickedChangePassword_(item, clickedChangePasswordIds_.size)]]" on-more-actions-click="onMoreActionsClick_" on-change-password-clicked="onChangePasswordClick_">
      </checkup-list-item>
    </template>
  </template>
</template>
<cr-action-menu id="moreActionsMenu" role-description="$i18n{menu}" accessibility-label="$i18n{moreActions}">
  <button id="menuShowPassword" class="dropdown-item" on-click="onMenuShowPasswordClick_">
    [[getShowHideTitle_(activeListItem_)]]
  </button>
  <button id="menuEditPassword" class="dropdown-item" on-click="onMenuEditPasswordClick_">
    $i18n{editPassword}
  </button>
  <button id="menuDeletePassword" class="dropdown-item" on-click="onMenuDeletePasswordClick_">
    $i18n{deletePassword}
  </button>
  <template is="dom-if" if="[[isCompromisedType(insecurityType_)]]">
    <button id="menuMuteUnmuteButton" class="dropdown-item" on-click="onMenuMuteUnmuteClick_" disabled="[[isMutingDisabled_]]">
      [[getMuteUnmuteLabel_(activeListItem_)]]
      <template is="dom-if" if="[[isMutingDisabled_]]" restamp>
        <iron-icon icon="cr20:domain" class="policy-disabled">
        </iron-icon>
      </template>
    </button>
  </template>
</cr-action-menu>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ReusedPasswordInfo{constructor(credentials){this.credentials=credentials}async init(){this.title=await PluralStringProxyImpl.getInstance().getPluralString("numberOfPasswordReuse",this.credentials.length)}}const CheckupDetailsSectionElementBase=PrefsMixin(I18nMixin(RouteObserverMixin(PolymerElement)));class CheckupDetailsSectionElement extends CheckupDetailsSectionElementBase{constructor(){super(...arguments);this.groups_=[];this.insecureCredentialsChangedListener_=null}static get is(){return"checkup-details-section"}static get template(){return getTemplate$D()}static get properties(){return{pageTitle_:String,insecurityType_:{type:String,observer:"updateShownCredentials_"},allInsecureCredentials_:{type:Array,observer:"updateShownCredentials_"},shownInsecureCredentials_:{type:Array,observer:"onCredentialsChanged_"},credentialsWithReusedPassword_:{type:Array},clickedChangePasswordIds_:{type:Object,value:new Set},isMutingDisabled_:{type:Boolean,computed:"computeIsMutingDisabled_("+"prefs.profile.password_dismiss_compromised_alert.value)"}}}connectedCallback(){super.connectedCallback();const updateGroups=()=>{PasswordManagerImpl.getInstance().getCredentialGroups().then((groups=>this.groups_=groups))};this.insecureCredentialsChangedListener_=insecureCredentials=>{this.allInsecureCredentials_=insecureCredentials;updateGroups()};updateGroups();PasswordManagerImpl.getInstance().getInsecureCredentials().then(this.insecureCredentialsChangedListener_);PasswordManagerImpl.getInstance().addInsecureCredentialsListener(this.insecureCredentialsChangedListener_)}currentRouteChanged(route,oldRoute){if(route.page!==Page.CHECKUP_DETAILS){return}this.insecurityType_=route.details;if(oldRoute!==undefined){this.$.backButton.focus()}}navigateBack_(){Router.getInstance().navigateTo(Page.CHECKUP)}async updateShownCredentials_(){if(!this.insecurityType_||!this.allInsecureCredentials_){return}const insecureCredentialsForThisType=this.allInsecureCredentials_.filter((cred=>cred.compromisedInfo.compromiseTypes.some((type=>this.getInsecurityType_().includes(type)))));const insuecureCredentialsSorter=(lhs,rhs)=>{if((this.getCurrentGroup_(lhs.id)?.name||"")>(this.getCurrentGroup_(rhs.id)?.name||"")){return 1}return-1};if(this.isCompromisedType()){this.mutedCompromisedCredentials_=insecureCredentialsForThisType.filter((cred=>cred.compromisedInfo.isMuted));this.shownInsecureCredentials_=insecureCredentialsForThisType.filter((cred=>!cred.compromisedInfo.isMuted))}else{insecureCredentialsForThisType.sort(insuecureCredentialsSorter);this.shownInsecureCredentials_=insecureCredentialsForThisType}if(this.isReusedType()){const allReusedCredentials=await PasswordManagerImpl.getInstance().getCredentialsWithReusedPassword();this.credentialsWithReusedPassword_=await Promise.all(allReusedCredentials.map((async credentials=>{const reuseInfo=new ReusedPasswordInfo(credentials.entries.sort(insuecureCredentialsSorter));await reuseInfo.init();return reuseInfo})));this.credentialsWithReusedPassword_.sort(((lhs,rhs)=>lhs.credentials.length>rhs.credentials.length?-1:1))}}async onCredentialsChanged_(){assert(this.insecurityType_);this.pageTitle_=await PluralStringProxyImpl.getInstance().getPluralString(this.insecurityType_.concat("Passwords"),this.shownInsecureCredentials_.length)}getInsecurityType_(){assert(this.insecurityType_);switch(this.insecurityType_){case CheckupSubpage.COMPROMISED:return[chrome.passwordsPrivate.CompromiseType.LEAKED,chrome.passwordsPrivate.CompromiseType.PHISHED];case CheckupSubpage.REUSED:return[chrome.passwordsPrivate.CompromiseType.REUSED];case CheckupSubpage.WEAK:return[chrome.passwordsPrivate.CompromiseType.WEAK]}}getSubTitle_(){assert(this.insecurityType_);return this.i18n(`${this.insecurityType_}PasswordsTitle`)}getDescription_(){assert(this.insecurityType_);return this.i18n(`${this.insecurityType_}PasswordsDescription`)}isCompromisedType(){return this.insecurityType_===CheckupSubpage.COMPROMISED}isReusedType(){return this.insecurityType_===CheckupSubpage.REUSED}onMoreActionsClick_(event){const target=event.detail.target;this.$.moreActionsMenu.showAt(target);this.activeListItem_=event.detail.listItem}onMenuShowPasswordClick_(){this.activeListItem_?.showHidePassword();this.$.moreActionsMenu.close();this.activeListItem_=null;PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.SHOW_PASSWORD)}async onMenuEditPasswordClick_(){this.activeListItem_?.showEditDialog();this.$.moreActionsMenu.close();this.activeListItem_=null;PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.EDIT_PASSWORD)}async onMenuDeletePasswordClick_(){this.activeListItem_?.showDeleteDialog();this.$.moreActionsMenu.close();this.activeListItem_=null}getShowHideTitle_(){return this.activeListItem_?.getShowHideButtonLabel()||""}computeIsMutingDisabled_(){return!this.getPref("profile.password_dismiss_compromised_alert").value}getMuteUnmuteLabel_(){return this.activeListItem_?.item.compromisedInfo?.isMuted===true?this.i18n("unmuteCompromisedPassword"):this.i18n("muteCompromisedPassword")}onMenuMuteUnmuteClick_(){assert(this.activeListItem_);if(this.activeListItem_.item.compromisedInfo?.isMuted===true){PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.UNMUTE_PASSWORD);PasswordManagerImpl.getInstance().unmuteInsecureCredential(this.activeListItem_.item)}else{PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.MUTE_PASSWORD);PasswordManagerImpl.getInstance().muteInsecureCredential(this.activeListItem_.item)}this.$.moreActionsMenu.close()}getCurrentGroup_(id){return this.groups_.find((group=>group.entries.some((entry=>entry.id===id))))}onChangePasswordClick_(event){this.clickedChangePasswordIds_.add(event.detail);this.notifyPath("clickedChangePasswordIds_.size");PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.CHANGE_PASSWORD)}clickedChangePassword_(item){return this.clickedChangePasswordIds_.has(item.id)}}customElements.define(CheckupDetailsSectionElement.is,CheckupDetailsSectionElement);const styleMod$2=document.createElement("dom-module");styleMod$2.appendChild(html`
  <template>
    <style>
.card{margin-bottom:44px}.credential-container{padding:12px var(--cr-form-field-bottom-spacing) var(--cr-section-padding)}.row-container{display:flex;margin-top:16px}.column-container{flex:50%;max-width:50%}.button-container{border-top:var(--cr-separator-line);display:flex;margin-top:12px;padding:var(--cr-form-field-bottom-spacing) var(--cr-section-padding)}a.site-link{max-width:324px}.cr-form-field-label{margin-bottom:8px}.card-title{color:var(--cr-secondary-text-color);margin:5px 0}.edit-button{margin-inline-end:var(--cr-button-edge-spacing)}
    </style>
  </template>
`.content);styleMod$2.register("credential-details-card");function getTemplate$C(){return html`<!--_html_template_start_-->    <style>:host{-webkit-tap-highlight-color:transparent;align-items:center;cursor:pointer;display:flex;outline:0;user-select:none;--cr-checkbox-border-size:2px;--cr-checkbox-size:16px;--cr-checkbox-ripple-size:40px;--cr-checkbox-ripple-offset:calc(var(--cr-checkbox-size)/2 -
            var(--cr-checkbox-ripple-size)/2 - var(--cr-checkbox-border-size));--cr-checkbox-checked-box-color:var(--cr-checked-color);--cr-checkbox-ripple-checked-color:var(--cr-checked-color);--cr-checkbox-checked-ripple-opacity:.2;--cr-checkbox-mark-color:white;--cr-checkbox-ripple-unchecked-color:var(--google-grey-900);--cr-checkbox-unchecked-box-color:var(--google-grey-700);--cr-checkbox-unchecked-ripple-opacity:.15}@media (prefers-color-scheme:dark){:host{--cr-checkbox-checked-ripple-opacity:.4;--cr-checkbox-mark-color:var(--google-grey-900);--cr-checkbox-ripple-unchecked-color:var(--google-grey-500);--cr-checkbox-unchecked-box-color:var(--google-grey-500);--cr-checkbox-unchecked-ripple-opacity:.4}}:host-context([chrome-refresh-2023]):host{--cr-checkbox-ripple-size:32px;--cr-checkbox-mark-color:var(--color-checkbox-check,
            var(--cr-fallback-color-on-primary));--cr-checkbox-checked-box-color:var(--color-checkbox-foreground-checked,
            var(--cr-fallback-color-primary));--cr-checkbox-unchecked-box-color:var(--color-checkbox-foreground-unchecked,
            var(--cr-fallback-color-outline));--cr-checkbox-ripple-checked-color:var(--cr-active-background-color);--cr-checkbox-ripple-unchecked-color:var(--cr-active-background-color);--cr-checkbox-ripple-offset:50%;--cr-checkbox-ripple-opacity:1}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){opacity:1;--cr-checkbox-checked-box-color:var(
            --color-checkbox-container-disabled,
            var(--cr-fallback-color-disabled-background));--cr-checkbox-unchecked-box-color:var(
            --color-checkbox-outline-disabled,
            var(--cr-fallback-color-disabled-background));--cr-checkbox-mark-color:var(--color-checkbox-check-disabled,
            var(--cr-fallback-color-disabled-foreground))}#checkbox{background:0 0;border:var(--cr-checkbox-border-size) solid var(--cr-checkbox-unchecked-box-color);border-radius:2px;box-sizing:border-box;cursor:pointer;display:block;flex-shrink:0;height:var(--cr-checkbox-size);isolation:isolate;margin:0;outline:0;padding:0;position:relative;transform:none;width:var(--cr-checkbox-size)}:host-context([chrome-refresh-2023]):host([disabled][checked]) #checkbox{border-color:transparent}:host-context([chrome-refresh-2023]) #hover-layer{display:none}:host-context([chrome-refresh-2023]) #checkbox:hover #hover-layer{background-color:var(--cr-hover-background-color);border-radius:50%;display:block;height:32px;left:50%;overflow:hidden;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:32px}@media (forced-colors:active){:host(:focus) #checkbox{outline:var(--cr-focus-outline-hcm)}}:host-context([chrome-refresh-2023]) #checkbox:focus-visible{outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}#checkmark{display:block;forced-color-adjust:auto;position:relative;transform:scale(0);z-index:1}#checkmark path{fill:var(--cr-checkbox-mark-color)}:host([checked]) #checkmark{transform:scale(1);transition:transform 140ms ease-out}:host([checked]) #checkbox{background:var(--cr-checkbox-checked-box-background-color,var(--cr-checkbox-checked-box-color));border-color:var(--cr-checkbox-checked-box-color)}paper-ripple{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,
            var(--cr-checkbox-unchecked-ripple-opacity));color:var(--cr-checkbox-ripple-unchecked-color);height:var(--cr-checkbox-ripple-size);left:var(--cr-checkbox-ripple-offset);outline:var(--cr-checkbox-ripple-ring,none);pointer-events:none;top:var(--cr-checkbox-ripple-offset);transition:color linear 80ms;width:var(--cr-checkbox-ripple-size)}:host([checked]) paper-ripple{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,
            var(--cr-checkbox-checked-ripple-opacity));color:var(--cr-checkbox-ripple-checked-color)}:host-context([dir=rtl]) paper-ripple{left:auto;right:var(--cr-checkbox-ripple-offset)}:host-context([chrome-refresh-2023]) paper-ripple{transform:translate(-50%,-50%)}:host-context([dir=rtl][chrome-refresh-2023]) paper-ripple{transform:translate(50%,-50%)}#label-container{color:var(--cr-checkbox-label-color,var(--cr-primary-text-color));padding-inline-start:var(--cr-checkbox-label-padding-start,20px);white-space:normal}:host(.label-first) #label-container{order:-1;padding-inline-end:var(--cr-checkbox-label-padding-end,20px);padding-inline-start:0}:host(.no-label) #label-container{display:none}#ariaDescription{height:0;overflow:hidden;width:0}</style>
    <div id="checkbox" tabindex$="[[tabIndex]]" role="checkbox" on-keydown="onKeyDown_" on-keyup="onKeyUp_" aria-disabled="false" aria-checked="false" aria-labelledby="label-container" aria-describedby="ariaDescription">
      
      <svg id="checkmark" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="m10.192 2.121-6.01 6.01-2.121-2.12L1 7.07l2.121 2.121.707.707.354.354 7.071-7.071-1.06-1.06Z">
      </path></svg>
      <div id="hover-layer"></div>
    </div>
    <div id="label-container" aria-hidden="true" part="label-container">
      <slot></slot>
    </div>
    <div id="ariaDescription" aria-hidden="true">[[ariaDescription]]</div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrCheckboxElementBase=mixinBehaviors([PaperRippleBehavior],PolymerElement);class CrCheckboxElement extends CrCheckboxElementBase{static get is(){return"cr-checkbox"}static get template(){return getTemplate$C()}static get properties(){return{checked:{type:Boolean,value:false,reflectToAttribute:true,observer:"checkedChanged_",notify:true},disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},ariaDescription:String,tabIndex:{type:Number,value:0,observer:"onTabIndexChanged_"}}}ready(){super.ready();this.removeAttribute("unresolved");this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("pointerup",this.hideRipple_.bind(this));if(document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("pointerdown",this.showRipple_.bind(this));this.addEventListener("pointerleave",this.hideRipple_.bind(this))}else{this.addEventListener("blur",this.hideRipple_.bind(this));this.addEventListener("focus",this.showRipple_.bind(this))}}focus(){this.$.checkbox.focus()}getFocusableElement(){return this.$.checkbox}checkedChanged_(){this.$.checkbox.setAttribute("aria-checked",this.checked?"true":"false")}disabledChanged_(_current,previous){if(previous===undefined&&!this.disabled){return}this.tabIndex=this.disabled?-1:0;this.$.checkbox.setAttribute("aria-disabled",this.disabled?"true":"false")}showRipple_(){if(this.noink){return}this.getRipple().showAndHoldDown()}hideRipple_(){this.getRipple().clear()}onClick_(e){if(this.disabled||e.target.tagName==="A"){return}e.stopPropagation();e.preventDefault();this.checked=!this.checked;this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:this.checked}))}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}}onKeyUp_(e){if(e.key===" "||e.key==="Enter"){e.preventDefault();e.stopPropagation()}if(e.key===" "){this.click()}}onTabIndexChanged_(){this.removeAttribute("tabindex")}_createRipple(){this._rippleContainer=this.$.checkbox;const ripple=super._createRipple();ripple.id="ink";ripple.setAttribute("recenters","");ripple.classList.add("circle","toggle-ink");return ripple}}customElements.define(CrCheckboxElement.is,CrCheckboxElement);function getTemplate$B(){return html`<!--_html_template_start_--><style include="cr-shared-style shared-style">cr-checkbox{display:flex;padding:10px 8px}#avatar{border-radius:50%;height:20px;margin-inline-end:16px;width:20px}.cr-row{padding:0}</style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title" class="dialog-title">
    $i18n{deletePasswordDialogAccount}
  </div>
  <div slot="body">
    <div inner-h-t-m-l="[[getDialogBodyMessage_()]]"></div>
    <cr-checkbox checked="{{removeFromAccountChecked_}}" id="removeFromAccountCheckbox">
      <div class="cr-row first">
        <img id="avatar" src="[[avatarImage]]">
        <div>
          $i18n{deletePasswordDialogAccount}
        </div>
        <div class="cr-secondary-text">
          &nbsp([[accountEmail]])
        </div>
      </div>
    </cr-checkbox>
    <cr-checkbox checked="{{removeFromDeviceChecked_}}" id="removeFromDeviceCheckbox">
      <div>
        $i18n{deletePasswordDialogDevice}
      </div>
    </cr-checkbox>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" id="cancelButton" on-click="onCancelButtonClick_" autofocus>
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" id="removeButton" disabled="[[shouldDisableRemoveButton_(removeFromAccountChecked_,
            removeFromDeviceChecked_)]]" on-click="onRemoveButtonClick_">
      $i18n{deletePassword}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MultiStoreDeletePasswordDialogElementBase=UserUtilMixin(I18nMixin(PolymerElement));class MultiStoreDeletePasswordDialogElement extends MultiStoreDeletePasswordDialogElementBase{static get is(){return"multi-store-delete-password-dialog"}static get template(){return getTemplate$B()}static get properties(){return{duplicatedPassword:Object,removeFromAccountChecked_:{type:Boolean,value:true},removeFromDeviceChecked_:{type:Boolean,value:true}}}connectedCallback(){super.connectedCallback();assert(this.duplicatedPassword.storedIn===chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT);this.$.dialog.showModal()}onRemoveButtonClick_(){let fromStores=chrome.passwordsPrivate.PasswordStoreSet.DEVICE;if(this.removeFromAccountChecked_&&this.removeFromDeviceChecked_){fromStores=chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT}else if(this.removeFromAccountChecked_){fromStores=chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT}else{assert(this.removeFromDeviceChecked_)}PasswordManagerImpl.getInstance().removeCredential(this.duplicatedPassword.id,fromStores);this.dispatchEvent(new CustomEvent("password-removed",{bubbles:true,composed:true,detail:{removedFromStores:fromStores}}));this.$.dialog.close()}onCancelButtonClick_(){this.$.dialog.close()}shouldDisableRemoveButton_(){return!this.removeFromAccountChecked_&&!this.removeFromDeviceChecked_}getDialogBodyMessage_(){assert(this.duplicatedPassword.affiliatedDomains);return this.i18nAdvanced("deletePasswordDialogBody",{substitutions:[this.duplicatedPassword.affiliatedDomains.map((domain=>domain.name)).join(", ")],tags:["b"]})}}customElements.define(MultiStoreDeletePasswordDialogElement.is,MultiStoreDeletePasswordDialogElement);
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var PasswordSharingActions;(function(PasswordSharingActions){PasswordSharingActions[PasswordSharingActions["PASSWORD_DETAILS_SHARE_BUTTON_CLICKED"]=0]="PASSWORD_DETAILS_SHARE_BUTTON_CLICKED";PasswordSharingActions[PasswordSharingActions["NOT_FAMILY_MEMBER_GOT_IT_CLICKED"]=1]="NOT_FAMILY_MEMBER_GOT_IT_CLICKED";PasswordSharingActions[PasswordSharingActions["NOT_FAMILY_MEMBER_CREATE_FAMILY_CLICKED"]=2]="NOT_FAMILY_MEMBER_CREATE_FAMILY_CLICKED";PasswordSharingActions[PasswordSharingActions["NO_OTHER_FAMILY_MEMBERS_GOT_IT_CLICKED"]=3]="NO_OTHER_FAMILY_MEMBERS_GOT_IT_CLICKED";PasswordSharingActions[PasswordSharingActions["NO_OTHER_FAMILY_MEMBERS_INVITE_LINK_CLICKED"]=4]="NO_OTHER_FAMILY_MEMBERS_INVITE_LINK_CLICKED";PasswordSharingActions[PasswordSharingActions["ERROR_DIALOG_TRY_AGAIN_CLICKED"]=5]="ERROR_DIALOG_TRY_AGAIN_CLICKED";PasswordSharingActions[PasswordSharingActions["ERROR_DIALOG_CANCELED"]=6]="ERROR_DIALOG_CANCELED";PasswordSharingActions[PasswordSharingActions["FAMILY_PICKER_SHARE_WITH_ONE_MEMBER"]=7]="FAMILY_PICKER_SHARE_WITH_ONE_MEMBER";PasswordSharingActions[PasswordSharingActions["FAMILY_PICKER_SHARE_WITH_MULTIPLE_MEMBERS"]=8]="FAMILY_PICKER_SHARE_WITH_MULTIPLE_MEMBERS";PasswordSharingActions[PasswordSharingActions["FAMILY_PICKER_CANCELED"]=9]="FAMILY_PICKER_CANCELED";PasswordSharingActions[PasswordSharingActions["FAMILY_PICKER_VIEW_FAMILY_CLICKED"]=10]="FAMILY_PICKER_VIEW_FAMILY_CLICKED";PasswordSharingActions[PasswordSharingActions["CONFIRMATION_DIALOG_SHARING_CANCELED"]=11]="CONFIRMATION_DIALOG_SHARING_CANCELED";PasswordSharingActions[PasswordSharingActions["CONFIRMATION_DIALOG_LEARN_MORE_CLICKED"]=12]="CONFIRMATION_DIALOG_LEARN_MORE_CLICKED";PasswordSharingActions[PasswordSharingActions["CONFIRMATION_DIALOG_CHANGE_PASSWORD_CLICKED"]=13]="CONFIRMATION_DIALOG_CHANGE_PASSWORD_CLICKED";PasswordSharingActions[PasswordSharingActions["DIALOG_HEADER_HELP_ICON_BUTTON_CLICKED"]=14]="DIALOG_HEADER_HELP_ICON_BUTTON_CLICKED";PasswordSharingActions[PasswordSharingActions["COUNT"]=15]="COUNT"})(PasswordSharingActions||(PasswordSharingActions={}));function recordPasswordSharingInteraction(interaction){chrome.metricsPrivate.recordEnumerationValue("PasswordManager.PasswordSharingDesktop.UserAction",interaction,PasswordSharingActions.COUNT)}function getTemplate$A(){return html`<!--_html_template_start_--><style include="shared-style">:host{align-items:center;display:grid;grid-template-columns:1fr auto;line-height:normal}cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-size:20px;--cr-icon-button-margin-start:0;--cr-icon-button-margin-end:0}</style>

<span class="text-elide">
  <slot></slot>
</span>
<cr-icon-button iron-icon="cr:help-outline" id="helpButton" title="$i18n{help}" on-click="onHelpClick_">
</cr-icon-button>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordDialogHeaderElement extends PolymerElement{static get is(){return"share-password-dialog-header"}static get template(){return getTemplate$A()}static get properties(){return{isError:{type:Boolean,value:false}}}onHelpClick_(){recordPasswordSharingInteraction(PasswordSharingActions.DIALOG_HEADER_HELP_ICON_BUTTON_CLICKED);if(this.isError){OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString("passwordSharingTroubleshootURL"));return}OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString("passwordSharingLearnMoreURL"))}}customElements.define(SharePasswordDialogHeaderElement.is,SharePasswordDialogHeaderElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({_template:html`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden" part="tooltip">
      <slot></slot>
    </div>
`,is:"paper-tooltip",hostAttributes:{role:"tooltip",tabindex:-1},properties:{for:{type:String,observer:"_findTarget"},manualMode:{type:Boolean,value:false,observer:"_manualModeChanged"},position:{type:String,value:"bottom"},fitToVisibleBounds:{type:Boolean,value:false},offset:{type:Number,value:14},marginTop:{type:Number,value:14},animationDelay:{type:Number,value:500,observer:"_delayChange"},animationEntry:{type:String,value:""},animationExit:{type:String,value:""},animationConfig:{type:Object,value:function(){return{entry:[{name:"fade-in-animation",node:this,timing:{delay:0}}],exit:[{name:"fade-out-animation",node:this}]}}},_showing:{type:Boolean,value:false}},listeners:{webkitAnimationEnd:"_onAnimationEnd"},get target(){if(this._manualTarget)return this._manualTarget;var parentNode=dom(this).parentNode;var ownerRoot=dom(this).getOwnerRoot();var target;if(this.for){target=dom(ownerRoot).querySelector("#"+this.for)}else{target=parentNode.nodeType==Node.DOCUMENT_FRAGMENT_NODE?ownerRoot.host:parentNode}return target},set target(target){this._manualTarget=target;this._findTarget()},attached:function(){this._findTarget()},detached:function(){if(!this.manualMode)this._removeListeners()},playAnimation:function(type){if(type==="entry"){this.show()}else if(type==="exit"){this.hide()}},cancelAnimation:function(){this.$.tooltip.classList.add("cancel-animation")},show:function(){if(this._showing)return;if(dom(this).textContent.trim()===""){var allChildrenEmpty=true;var effectiveChildren=dom(this).getEffectiveChildNodes();for(var i=0;i<effectiveChildren.length;i++){if(effectiveChildren[i].textContent.trim()!==""){allChildrenEmpty=false;break}}if(allChildrenEmpty){return}}this._showing=true;this.$.tooltip.classList.remove("hidden");this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.updatePosition();this._animationPlaying=true;this.$.tooltip.classList.add(this._getAnimationType("entry"))},hide:function(){if(!this._showing){return}if(this._animationPlaying){this._showing=false;this._cancelAnimation();return}else{this._onAnimationFinish()}this._showing=false;this._animationPlaying=true},updatePosition:function(){if(!this._target)return;var offsetParent=this._composedOffsetParent();if(!offsetParent)return;var offset=this.offset;if(this.marginTop!=14&&this.offset==14)offset=this.marginTop;var parentRect=offsetParent.getBoundingClientRect();var targetRect=this._target.getBoundingClientRect();var thisRect=this.getBoundingClientRect();var horizontalCenterOffset=(targetRect.width-thisRect.width)/2;var verticalCenterOffset=(targetRect.height-thisRect.height)/2;var targetLeft=targetRect.left-parentRect.left;var targetTop=targetRect.top-parentRect.top;var tooltipLeft,tooltipTop;switch(this.position){case"top":tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop-thisRect.height-offset;break;case"bottom":tooltipLeft=targetLeft+horizontalCenterOffset;tooltipTop=targetTop+targetRect.height+offset;break;case"left":tooltipLeft=targetLeft-thisRect.width-offset;tooltipTop=targetTop+verticalCenterOffset;break;case"right":tooltipLeft=targetLeft+targetRect.width+offset;tooltipTop=targetTop+verticalCenterOffset;break}if(this.fitToVisibleBounds){if(parentRect.left+tooltipLeft+thisRect.width>window.innerWidth){this.style.right="0px";this.style.left="auto"}else{this.style.left=Math.max(0,tooltipLeft)+"px";this.style.right="auto"}if(parentRect.top+tooltipTop+thisRect.height>window.innerHeight){this.style.bottom=parentRect.height-targetTop+offset+"px";this.style.top="auto"}else{this.style.top=Math.max(-parentRect.top,tooltipTop)+"px";this.style.bottom="auto"}}else{this.style.left=tooltipLeft+"px";this.style.top=tooltipTop+"px"}},_addListeners:function(){if(this._target){this.listen(this._target,"mouseenter","show");this.listen(this._target,"focus","show");this.listen(this._target,"mouseleave","hide");this.listen(this._target,"blur","hide");this.listen(this._target,"tap","hide")}this.listen(this.$.tooltip,"animationend","_onAnimationEnd");this.listen(this,"mouseenter","hide")},_findTarget:function(){if(!this.manualMode)this._removeListeners();this._target=this.target;if(!this.manualMode)this._addListeners()},_delayChange:function(newValue){if(newValue!==500){this.updateStyles({"--paper-tooltip-delay-in":newValue+"ms"})}},_manualModeChanged:function(){if(this.manualMode)this._removeListeners();else this._addListeners()},_cancelAnimation:function(){this.$.tooltip.classList.remove(this._getAnimationType("entry"));this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.add("hidden")},_onAnimationFinish:function(){if(this._showing){this.$.tooltip.classList.remove(this._getAnimationType("entry"));this.$.tooltip.classList.remove("cancel-animation");this.$.tooltip.classList.add(this._getAnimationType("exit"))}},_onAnimationEnd:function(){this._animationPlaying=false;if(!this._showing){this.$.tooltip.classList.remove(this._getAnimationType("exit"));this.$.tooltip.classList.add("hidden")}},_getAnimationType:function(type){if(type==="entry"&&this.animationEntry!==""){return this.animationEntry}if(type==="exit"&&this.animationExit!==""){return this.animationExit}if(this.animationConfig[type]&&typeof this.animationConfig[type][0].name==="string"){if(this.animationConfig[type][0].timing&&this.animationConfig[type][0].timing.delay&&this.animationConfig[type][0].timing.delay!==0){var timingDelay=this.animationConfig[type][0].timing.delay;if(type==="entry"){this.updateStyles({"--paper-tooltip-delay-in":timingDelay+"ms"})}else if(type==="exit"){this.updateStyles({"--paper-tooltip-delay-out":timingDelay+"ms"})}}return this.animationConfig[type][0].name}},_removeListeners:function(){if(this._target){this.unlisten(this._target,"mouseenter","show");this.unlisten(this._target,"focus","show");this.unlisten(this._target,"mouseleave","hide");this.unlisten(this._target,"blur","hide");this.unlisten(this._target,"tap","hide")}this.unlisten(this.$.tooltip,"animationend","_onAnimationEnd");this.unlisten(this,"mouseenter","hide")},_composedOffsetParent:function(){for(let ancestor=this;ancestor;ancestor=flatTreeParent(ancestor)){if(!(ancestor instanceof Element))continue;if(getComputedStyle(ancestor).display==="none")return null}for(let ancestor=flatTreeParent(this);ancestor;ancestor=flatTreeParent(ancestor)){if(!(ancestor instanceof Element))continue;const style=getComputedStyle(ancestor);if(style.display==="contents"){continue}if(style.position!=="static"){return ancestor}if(ancestor.tagName==="BODY")return ancestor}return null;function flatTreeParent(element){if(element.assignedSlot){return element.assignedSlot}if(element.parentNode instanceof ShadowRoot){return element.parentNode.host}return element.parentNode}}});function getTemplate$z(){return html`<!--_html_template_start_-->    <style include="cr-shared-style">:host{display:flex}iron-icon{--iron-icon-width:var(--cr-icon-size);--iron-icon-height:var(--cr-icon-size);--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color, var(--google-grey-700))}@media (prefers-color-scheme:dark){iron-icon{--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color, var(--google-grey-500))}}</style>
    <iron-icon id="indicator" tabindex="0" aria-label$="[[iconAriaLabel]]" aria-describedby="tooltip" icon="[[iconClass]]" role="img"></iron-icon>
    <paper-tooltip id="tooltip" for="indicator" position="[[tooltipPosition]]" fit-to-visible-bounds part="tooltip">
      <slot name="tooltip-text">[[tooltipText]]</slot>
    </paper-tooltip>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrTooltipIconElement extends PolymerElement{static get is(){return"cr-tooltip-icon"}static get template(){return getTemplate$z()}static get properties(){return{iconAriaLabel:String,iconClass:String,tooltipText:String,tooltipPosition:{type:String,value:"top"}}}getFocusableElement(){return this.$.indicator}}customElements.define(CrTooltipIconElement.is,CrTooltipIconElement);function getTemplate$y(){return html`<!--_html_template_start_--><style include="shared-style">:host{margin-top:8px;padding:8px 24px 8px 8px;border:.5px solid var(--cr-separator-color);border-radius:25px;display:grid;grid-template-columns:auto min-content;column-gap:12px;cursor:pointer}:host([disabled]){cursor:initial}:host([disabled])>.content{opacity:var(--cr-disabled-opacity)}:host(:not([disabled]):not([selected]):hover){background:var(--google-grey-100)}:host([selected]){border-color:var(--google-blue-300);background:var(--google-blue-50)}#checkbox{display:none;margin:auto;--cr-checkbox-ripple-size:36px}:host(:not([disabled]):hover) #checkbox,:host([selected]) #checkbox{display:block}:host(:not([disabled]):hover) #avatar,:host([selected]) #avatar{display:none}.content{display:grid;grid-template-columns:32px auto;column-gap:12px}#avatar{border-radius:50%;height:32px;margin-inline-end:8px;width:32px}.user-data{margin-block:auto}#name{font-size:100%;color:var(--cr-primary-text-color);line-height:normal}#email{font-size:85%;color:var(--cr-secondary-text-color);line-height:normal}.disabled-info{margin-inline-start:auto}#notAvailable{font-size:85%;margin-top:.15rem;white-space:nowrap}cr-tooltip-icon{--cr-icon-size:16px;margin-inline-end:4px}.avatar-checkbox{width:32px;height:32px;margin-block:auto}cr-checkbox::part(label-container){display:none}@media (prefers-color-scheme:dark){:host(:not([disabled]):not([selected]):hover){background:var(--google-grey-900)}:host([selected]){background:#004a77;border-color:var(--google-blue-600)}}</style>

<div class="content">
  <div class="flex-centered avatar-checkbox">
    <cr-checkbox id="checkbox" checked="{{selected}}"></cr-checkbox>
    <img is="cr-auto-img" id="avatar" auto-src="[[recipient.profileImageUrl]]" draggable="false" alt="">
  </div>
  <div class="user-data text-elide">
    <div id="name" class="text-elide">[[recipient.displayName]]</div>
    <div id="email" class="text-elide">[[recipient.email]]</div>
  </div>
</div>
<template is="dom-if" if="[[disabled]]" restamp>
  <div id="disabled-info" class="flex-centered">
    <cr-tooltip-icon tooltip-text="$i18n{sharePasswordMemeberUnavailable}" icon-class="cr:info-outline" icon-aria-label="$i18n{sharePasswordMemeberUnavailable}">
    </cr-tooltip-icon>
    <span id="notAvailable">$i18n{sharePasswordNotAvailable}</span>
  </div>
</template>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordRecipientElement extends PolymerElement{static get is(){return"share-password-recipient"}static get template(){return getTemplate$y()}static get properties(){return{disabled:{type:Boolean,value:false},recipient:Object,selected:{type:Boolean,value:false,reflectToAttribute:true,notify:true}}}ready(){super.ready();this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("mouseover",this.onMouseOver_.bind(this));this.addEventListener("mouseout",this.onMouseOut_.bind(this))}onClick_(e){if(this.disabled){return}e.preventDefault();this.$.checkbox.click()}onMouseOver_(e){if(this.disabled){return}e.preventDefault();this.$.checkbox.getRipple().showAndHoldDown()}onMouseOut_(e){if(this.disabled){return}e.preventDefault();this.$.checkbox.getRipple().clear()}}customElements.define(SharePasswordRecipientElement.is,SharePasswordRecipientElement);function getTemplate$x(){return html`<!--_html_template_start_--><style include="shared-style">a[href]{color:var(--cr-link-color)}#avatar{border-radius:50%;height:32px;margin-inline-end:8px;width:32px}#userAccount{color:var(--cr-secondary-text-color)}#description{padding-bottom:8px}div[slot=footer]{background:var(--google-grey-100);border-top:none;padding:8px 16px}@media (prefers-color-scheme:dark){div[slot=footer]{background:var(--google-grey-900)}}</style>

<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">
    <share-password-dialog-header id="header">
      [[dialogTitle]]
    </share-password-dialog-header>
  </div>
  <div slot="body">
    <div id="description" inner-h-t-m-l="[[i18nAdvanced('sharePasswordFamilyPickerDescription')]]">
    </div>
    <template is="dom-repeat" items="[[eligibleRecipients_]]">
      <share-password-recipient recipient="[[item]]" on-change="recipientSelected_">
      </share-password-recipient>
    </template>
    <template is="dom-repeat" items="[[ineligibleRecipients_]]">
      <share-password-recipient recipient="[[item]]" disabled="disabled">
      </share-password-recipient>
    </template>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onClickCancel_" id="cancel">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" id="action" on-click="onClickShare_" disabled$="[[!selectedRecipients.length]]">
      $i18n{share}
    </cr-button>
  </div>
  <div slot="footer" class="flex-centered">
    <img id="avatar" src="[[avatarImage]]">
    <div id="footerDescription">
      <a href="$i18n{familyGroupViewURL}" target="_blank" id="viewFamily" on-click="onViewFamilyClick_">
        $i18n{sharePasswordViewFamily}</a>
      <span> • </span><span>[[accountEmail]]</span>
    </div>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordFamilyPickerDialogElement extends(UserUtilMixin(I18nMixin(PolymerElement))){static get is(){return"share-password-family-picker-dialog"}static get template(){return getTemplate$x()}static get properties(){return{dialogTitle:String,members:Array,selectedRecipients:{type:Array,value:[],reflectToAttribute:true,notify:true},eligibleRecipients_:{type:Array,computed:"computeEligible_(members)"},ineligibleRecipients_:{type:Array,computed:"computeIneligible_(members)"}}}computeEligible_(){const eligibleMembers=this.members.filter((member=>member.isEligible));eligibleMembers.sort(((a,b)=>a.displayName>b.displayName?1:-1));return eligibleMembers}computeIneligible_(){const inEligibleMembers=this.members.filter((member=>!member.isEligible));inEligibleMembers.sort(((a,b)=>a.displayName>b.displayName?1:-1));return inEligibleMembers}recipientSelected_(){this.selectedRecipients=Array.from(this.shadowRoot.querySelectorAll("share-password-recipient")).filter((item=>item.selected)).map((item=>item.recipient))}onViewFamilyClick_(){recordPasswordSharingInteraction(PasswordSharingActions.FAMILY_PICKER_VIEW_FAMILY_CLICKED)}onClickCancel_(){recordPasswordSharingInteraction(PasswordSharingActions.FAMILY_PICKER_CANCELED);this.dispatchEvent(new CustomEvent("close",{bubbles:true,composed:true}))}onClickShare_(){if(this.selectedRecipients.length===1){recordPasswordSharingInteraction(PasswordSharingActions.FAMILY_PICKER_SHARE_WITH_ONE_MEMBER)}else{recordPasswordSharingInteraction(PasswordSharingActions.FAMILY_PICKER_SHARE_WITH_MULTIPLE_MEMBERS)}this.dispatchEvent(new CustomEvent("start-share",{bubbles:true,composed:true}))}}customElements.define(SharePasswordFamilyPickerDialogElement.is,SharePasswordFamilyPickerDialogElement);function getTemplate$w(){return html`<!--_html_template_start_--><style include="shared-style">paper-spinner-lite{display:flex;margin-inline:auto;margin-block:40px 56px}</style>

<cr-dialog close-text="$i18n{close}" show-on-attach>
  <share-password-dialog-header slot="title">
    [[dialogTitle]]
  </share-password-dialog-header>
  <paper-spinner-lite slot="body" active></paper-spinner-lite>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordLoadingDialogElement extends PolymerElement{static get is(){return"share-password-loading-dialog"}static get template(){return getTemplate$w()}static get properties(){return{dialogTitle:{type:String}}}}customElements.define(SharePasswordLoadingDialogElement.is,SharePasswordLoadingDialogElement);function getTemplate$v(){return html`<!--_html_template_start_--><cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">
    <share-password-dialog-header id="header" is-error>
      $i18n{sharePasswordErrorTitle}
    </share-password-dialog-header>
  </div>
  <div slot="body" class="flex-centered" id="description">
      $i18n{sharePasswordErrorDescription}
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onClickCancel_" id="cancel">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onClickTryAgain_" id="tryAgain">
      $i18n{sharePasswordTryAgain}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordErrorDialogElement extends(I18nMixin(PolymerElement)){static get is(){return"share-password-error-dialog"}static get template(){return getTemplate$v()}onClickCancel_(){recordPasswordSharingInteraction(PasswordSharingActions.ERROR_DIALOG_CANCELED);this.$.dialog.cancel()}onClickTryAgain_(){recordPasswordSharingInteraction(PasswordSharingActions.ERROR_DIALOG_TRY_AGAIN_CLICKED);this.dispatchEvent(new CustomEvent("restart",{bubbles:true,composed:true}))}}customElements.define(SharePasswordErrorDialogElement.is,SharePasswordErrorDialogElement);function getTemplate$u(){return html`<!--_html_template_start_--><style>#description{margin-top:16px}a[href]{color:var(--cr-link-color)}</style>

<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">
    <share-password-dialog-header id="header">
      [[dialogTitle]]
    </share-password-dialog-header>
  </div>
  <div slot="body">
    <picture>
      <source srcset="./images/password_sharing_family_banner_dark.svg" media="(prefers-color-scheme: dark)">
      <img src="./images/password_sharing_family_banner.svg" role="presentation">
    </picture>
    <div id="description" on-click="onDescriptionClick_" inner-h-t-m-l="[[i18nAdvanced('sharePasswordNoOtherFamilyMembers')]]">
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onClickActionButton_" id="action">
      $i18n{sharePasswordGotIt}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordNoOtherFamilyMembersDialogElement extends(I18nMixin(PolymerElement)){static get is(){return"share-password-no-other-family-members-dialog"}static get template(){return getTemplate$u()}static get properties(){return{dialogTitle:String}}onDescriptionClick_(e){const element=e.target;if(element.tagName==="A"){recordPasswordSharingInteraction(PasswordSharingActions.NO_OTHER_FAMILY_MEMBERS_INVITE_LINK_CLICKED)}}onClickActionButton_(){recordPasswordSharingInteraction(PasswordSharingActions.NO_OTHER_FAMILY_MEMBERS_GOT_IT_CLICKED);this.dispatchEvent(new CustomEvent("close",{bubbles:true,composed:true}))}}customElements.define(SharePasswordNoOtherFamilyMembersDialogElement.is,SharePasswordNoOtherFamilyMembersDialogElement);function getTemplate$t(){return html`<!--_html_template_start_--><style>#description{margin-top:16px}a[href]{color:var(--cr-link-color)}</style>

<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach>
  <div slot="title">
    <share-password-dialog-header id="header">
      [[dialogTitle]]
    </share-password-dialog-header>
  </div>
  <div slot="body">
    <picture>
      <source srcset="./images/password_sharing_family_banner_dark.svg" media="(prefers-color-scheme: dark)">
      <img src="./images/password_sharing_family_banner.svg" role="presentation">
    </picture>
    <div id="description" on-click="onDescriptionClick_" inner-h-t-m-l="[[i18nAdvanced('sharePasswordNotFamilyMember')]]">
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onClickActionButton_" id="action">
      $i18n{sharePasswordGotIt}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordNotFamilyMemberDialogElement extends(I18nMixin(PolymerElement)){static get is(){return"share-password-not-family-member-dialog"}static get template(){return getTemplate$t()}static get properties(){return{dialogTitle:String}}onDescriptionClick_(e){const element=e.target;if(element.tagName==="A"){recordPasswordSharingInteraction(PasswordSharingActions.NOT_FAMILY_MEMBER_CREATE_FAMILY_CLICKED)}}onClickActionButton_(){recordPasswordSharingInteraction(PasswordSharingActions.NOT_FAMILY_MEMBER_GOT_IT_CLICKED);this.dispatchEvent(new CustomEvent("close",{bubbles:true,composed:true}))}}customElements.define(SharePasswordNotFamilyMemberDialogElement.is,SharePasswordNotFamilyMemberDialogElement);function getTemplate$s(){return html`<!--_html_template_start_--><style include="cr-shared-style">:host{--divider-thickness_:2px;--group-size_:60px;border-radius:50%;overflow:hidden;height:var(--group-size_);width:var(--group-size_);display:flex;gap:var(--divider-thickness_);background-color:#fff}.inner-container{display:flex;flex-direction:column;gap:var(--divider-thickness_);flex:1}#more,img{overflow:hidden;object-fit:cover;flex:1;width:100%;background-color:var(--google-grey-800);color:#fff;display:flex}#more>span{cursor:default;user-select:none;margin-inline-start:5px;margin-block-start:4px}@media (prefers-color-scheme:dark){:host{background-color:var(--google-grey-900)}}</style>

<div class="inner-container" hidden="[[isMembersCountLessThan_(2, members)]]">
  
  <img is="cr-auto-img" draggable="false" alt="" id="secondImg" auto-src="[[getProfileImageUrl_(1, members)]]">
  
  <img is="cr-auto-img" draggable="false" alt="" id="fourthImg" auto-src="[[getProfileImageUrl_(3, members)]]" hidden="[[isMembersCountLessThan_(4, members)]]">
</div>
<div class="inner-container">
  
  <img is="cr-auto-img" draggable="false" alt="" id="thirdImg" auto-src="[[getProfileImageUrl_(2, members)]]" hidden="[[isMembersCountLessThan_(3, members)]]">
  
  <img is="cr-auto-img" draggable="false" alt="" id="firstImg" auto-src="[[getProfileImageUrl_(0, members)]]" hidden="[[!isMembersCountLessThan_(5, members)]]">
  
  <div id="more" hidden="[[isMembersCountLessThan_(5, members)]]">
    <span draggable="false">+[[getMoreCount_(members)]]</span>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SharePasswordGroupAvatarElement extends PolymerElement{static get is(){return"share-password-group-avatar"}static get template(){return getTemplate$s()}static get properties(){return{members:Array}}isMembersCountLessThan_(count){return this.members.length<count}getProfileImageUrl_(index){if(index<this.members.length){return this.members[index].profileImageUrl}return""}getMoreCount_(){return this.members.length-3}}customElements.define(SharePasswordGroupAvatarElement.is,SharePasswordGroupAvatarElement);function getTemplate$r(){return html`<!--_html_template_start_--><style include="cr-hidden-style">a[href]{color:var(--cr-link-color)}cr-dialog{--cr-dialog-width:320px;--cr-dialog-body-padding-horizontal:16px}.animation-container{height:95px;position:relative;--avatar-radius:30px;--avatar-size_:calc(var(--avatar-radius) * 2)}#favicon,#lock,#progress,#recipientAvatar,#senderAvatar{position:absolute;animation-fill-mode:forwards}#recipientAvatar,#senderAvatar{top:50%;right:50%;transform:translate(50%,-50%);animation-delay:.35s;animation-duration:4.65s;animation-timing-function:ease-in}#senderAvatar{border-radius:50%;height:var(--avatar-size_);width:var(--avatar-size_);z-index:1;animation-name:slideLeft}@keyframes slideLeft{100%{right:calc(50% + var(--avatar-radius) - 4px);z-index:2}10%,90%{right:calc(50% + 78px)}}#recipientAvatar{z-index:2;animation-name:slideRight}@keyframes slideRight{100%{z-index:1;right:calc(50% - var(--avatar-radius) + 4px)}10%,90%{right:calc(50% - 78px)}}#lock{z-index:3;background-color:var(--cr-dialog-background-color,#fff);top:50%;right:50%;width:24px;height:24px;opacity:0;transform:translate(50%,-50%) scale(.5);animation-delay:.8s;animation-duration:4s;animation-timing-function:ease-in;animation-name:lockOpacity}@keyframes lockOpacity{100%{opacity:0;transform:translate(50%,-50%) scale(0)}3%,95%{opacity:1;transform:translate(50%,-50%) scale(1)}}#favicon{--site-favicon-height:22px;--site-favicon-width:22px;background:#fff;z-index:3;border:4px solid #fff;border-radius:7px;top:calc(50% + var(--avatar-radius) - 10px);right:50%;opacity:0;transform:translate(50%,0) scale(0);animation-delay:5s;animation-duration:.15s;animation-timing-function:ease-out;animation-fill-mode:forwards;animation-name:faviconOpacity}@keyframes faviconOpacity{100%{opacity:1;transform:translate(50%,0) scale(1)}}#progress{z-index:0;display:flex;overflow:hidden;top:50%;left:calc(50% - 47px);width:0;animation-delay:1s;animation-duration:3.5s;animation-timing-function:linear;animation-name:progressWidth}@keyframes progressWidth{100%{width:95px;opacity:0}1%,99%{opacity:1}}#description{margin-top:16px}div[slot=footer]{background:var(--google-grey-100);border-top:none;padding:8px 16px}#footerDescription{color:var(--cr-secondary-text-color)}[canceled]>#favicon,[canceled]>#lock,[canceled]>#progress,[canceled]>#recipientAvatar{display:none}[canceled]>#senderAvatar{top:50%;right:50%;transform:translate(50%,-50%);animation:none}@media (prefers-color-scheme:dark){#lock{background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}div[slot=footer]{background:var(--google-grey-900)}#favicon{border-color:var(--google-grey-900);background:var(--google-grey-900)}}</style>

<cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach no-cancel>
  <div slot="title">
    <share-password-dialog-header id="header">
      [[getDialogTitle_(dialogStage_)]]
    </share-password-dialog-header>
  </div>
  <div slot="body">
    <div class="animation-container" canceled$="[[isStage_(dialogStageEnum_.CANCELED, dialogStage_)]]">
      <img id="senderAvatar" src="[[avatarImage]]" draggable="false" alt="">
      <share-password-group-avatar members="[[recipients]]" id="recipientAvatar">
      </share-password-group-avatar>
      <div id="lock">
        <img src="../images/password_sharing_secure_lock.svg" aria-hidden="true">
      </div>
      <div id="progress">
        <img src="../images/password_sharing_progress_bar.svg" aria-hidden="true">
      </div>
      <site-favicon id="favicon" url="[[iconUrl]]" domain="[[passwordName]]" aria-hidden="true">
      </site-favicon>
    </div>
    <div id="description" on-click="onDescriptionClick_" hidden$="[[!isStage_(dialogStageEnum_.SUCCESS, dialogStage_)]]" inner-h-t-m-l="[[getSuccessDescription_(recipients)]]">
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onClickCancel_" id="cancel" hidden$="[[!isStage_(dialogStageEnum_.LOADING, dialogStage_)]]">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onClickDone_" id="done" hidden$="[[isStage_(dialogStageEnum_.LOADING, dialogStage_)]]">
      $i18n{done}
    </cr-button>
  </div>
  <div slot="footer" id="footerDescription" on-click="onFooterClick_" hidden$="[[!isStage_(dialogStageEnum_.SUCCESS, dialogStage_)]]" inner-h-t-m-l="[[getFooterDescription_(password)]]">
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FIVE_SECONDS=5e3;var ConfirmationDialogStage;(function(ConfirmationDialogStage){ConfirmationDialogStage[ConfirmationDialogStage["LOADING"]=0]="LOADING";ConfirmationDialogStage[ConfirmationDialogStage["CANCELED"]=1]="CANCELED";ConfirmationDialogStage[ConfirmationDialogStage["SUCCESS"]=2]="SUCCESS"})(ConfirmationDialogStage||(ConfirmationDialogStage={}));const SharePasswordConfirmationDialogElementBase=UserUtilMixin(I18nMixin(PolymerElement));class SharePasswordConfirmationDialogElement extends SharePasswordConfirmationDialogElementBase{constructor(){super(...arguments);this.dialogStage_=ConfirmationDialogStage.LOADING;this.passwordManager_=PasswordManagerImpl.getInstance()}static get is(){return"share-password-confirmation-dialog"}static get template(){return getTemplate$r()}static get properties(){return{dialogStage_:Number,password:Object,passwordName:String,iconUrl:String,recipients:{type:Array,value:[]},dialogStageEnum_:{type:Object,value:ConfirmationDialogStage,readOnly:true}}}ready(){super.ready();setTimeout((()=>{if(this.isStage_(ConfirmationDialogStage.CANCELED)){return}this.passwordManager_.sharePassword(this.password.id,this.recipients);this.dialogStage_=ConfirmationDialogStage.SUCCESS}),FIVE_SECONDS)}isStage_(stage){return this.dialogStage_===stage}getDialogTitle_(){switch(this.dialogStage_){case ConfirmationDialogStage.LOADING:return this.i18n("shareDialogLoadingTitle");case ConfirmationDialogStage.CANCELED:return this.i18n("shareDialogCanceledTitle");case ConfirmationDialogStage.SUCCESS:return this.i18n("shareDialogSuccessTitle");default:assertNotReached()}}getSuccessDescription_(){if(this.recipients.length>1){return this.i18nAdvanced("sharePasswordConfirmationDescriptionMultipleRecipients",{substitutions:[this.passwordName,this.i18n("passwordSharingLearnMoreURL")]})}return this.i18nAdvanced("sharePasswordConfirmationDescriptionSingleRecipient",{substitutions:[this.recipients[0].displayName,this.passwordName,this.i18n("passwordSharingLearnMoreURL")]})}getFooterDescription_(){if(!this.password.changePasswordUrl){return this.i18nAdvanced("sharePasswordConfirmationFooterAndroidApp")}return this.i18nAdvanced("sharePasswordConfirmationFooterWebsite",{substitutions:[this.password.changePasswordUrl,this.passwordName]})}onDescriptionClick_(e){const element=e.target;if(element.tagName==="A"){recordPasswordSharingInteraction(PasswordSharingActions.CONFIRMATION_DIALOG_LEARN_MORE_CLICKED)}}onFooterClick_(e){const element=e.target;if(element.tagName==="A"){recordPasswordSharingInteraction(PasswordSharingActions.CONFIRMATION_DIALOG_CHANGE_PASSWORD_CLICKED)}}onClickDone_(){this.dispatchEvent(new CustomEvent("close",{bubbles:true,composed:true}))}onClickCancel_(){if(this.isStage_(ConfirmationDialogStage.SUCCESS)){return}recordPasswordSharingInteraction(PasswordSharingActions.CONFIRMATION_DIALOG_SHARING_CANCELED);this.dialogStage_=ConfirmationDialogStage.CANCELED}}customElements.define(SharePasswordConfirmationDialogElement.is,SharePasswordConfirmationDialogElement);function getTemplate$q(){return html`<!--_html_template_start_--><template is="dom-if" if="[[isState_(flowStateEnum_.FETCHING, flowState)]]" restamp>
  <share-password-loading-dialog on-close="onDialogClose_" dialog-title="[[getShareDialogTitle_(passwordName)]]">
  </share-password-loading-dialog>
</template>

<template is="dom-if" if="[[isState_(flowStateEnum_.ERROR, flowState)]]" restamp>
  <share-password-error-dialog on-cancel="onDialogClose_" on-restart="startSharing_">
  </share-password-error-dialog>
</template>

<template is="dom-if" if="[[isState_(flowStateEnum_.NO_OTHER_MEMBERS, flowState)]]" restamp>
  <share-password-no-other-family-members-dialog on-close="onDialogClose_" dialog-title="[[getShareDialogTitle_(passwordName)]]">
  </share-password-no-other-family-members-dialog>
</template>

<template is="dom-if" if="[[isState_(flowStateEnum_.NOT_FAMILY_MEMBER, flowState)]]" restamp>
  <share-password-not-family-member-dialog on-close="onDialogClose_" dialog-title="[[getShareDialogTitle_(passwordName)]]">
  </share-password-not-family-member-dialog>
</template>

<template is="dom-if" if="[[isState_(flowStateEnum_.FAMILY_PICKER, flowState)]]" restamp>
  <share-password-family-picker-dialog on-close="onDialogClose_" dialog-title="[[getShareDialogTitle_(passwordName)]]" members="[[fetchResults_.familyMembers]]" selected-recipients="{{recipients_}}" on-start-share="onStartShare_">
  </share-password-family-picker-dialog>
</template>

<template is="dom-if" if="[[isState_(flowStateEnum_.CONFIRMATION, flowState)]]" restamp>
  <share-password-confirmation-dialog on-close="onDialogClose_" recipients="[[recipients_]]" password="[[password]]" password-name="[[passwordName]]" icon-url="[[iconUrl]]">
  </share-password-confirmation-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ShareFlowState;(function(ShareFlowState){ShareFlowState[ShareFlowState["NO_DIALOG"]=0]="NO_DIALOG";ShareFlowState[ShareFlowState["FETCHING"]=1]="FETCHING";ShareFlowState[ShareFlowState["ERROR"]=2]="ERROR";ShareFlowState[ShareFlowState["NO_OTHER_MEMBERS"]=3]="NO_OTHER_MEMBERS";ShareFlowState[ShareFlowState["NOT_FAMILY_MEMBER"]=4]="NOT_FAMILY_MEMBER";ShareFlowState[ShareFlowState["FAMILY_PICKER"]=5]="FAMILY_PICKER";ShareFlowState[ShareFlowState["CONFIRMATION"]=6]="CONFIRMATION"})(ShareFlowState||(ShareFlowState={}));const SharePasswordFlowElementBase=I18nMixin(PolymerElement);class SharePasswordFlowElement extends SharePasswordFlowElementBase{constructor(){super(...arguments);this.flowState=ShareFlowState.NO_DIALOG;this.fetchResults_=null;this.passwordManager_=PasswordManagerImpl.getInstance()}static get is(){return"share-password-flow"}static get template(){return getTemplate$q()}static get properties(){return{passwordName:String,iconUrl:String,password:Object,flowState:Number,fetchResults_:Object,recipients_:{type:Array,value:[]},flowStateEnum_:{type:Object,value:ShareFlowState,readOnly:true}}}connectedCallback(){super.connectedCallback();this.startSharing_()}async startSharing_(){this.flowState=ShareFlowState.FETCHING;this.fetchResults_=await this.passwordManager_.fetchFamilyMembers();switch(this.fetchResults_.status){case chrome.passwordsPrivate.FamilyFetchStatus.UNKNOWN_ERROR:this.flowState=ShareFlowState.ERROR;break;case chrome.passwordsPrivate.FamilyFetchStatus.NO_MEMBERS:this.flowState=ShareFlowState.NOT_FAMILY_MEMBER;break;case chrome.passwordsPrivate.FamilyFetchStatus.SUCCESS:if(this.fetchResults_.familyMembers.length===0){this.flowState=ShareFlowState.NO_OTHER_MEMBERS;return}this.flowState=ShareFlowState.FAMILY_PICKER;break;default:assertNotReached()}}isState_(state){return this.flowState===state}getShareDialogTitle_(){return this.i18n("shareDialogTitle",this.passwordName)}onDialogClose_(){this.dispatchEvent(new CustomEvent("share-flow-done",{bubbles:true,composed:true}));this.flowState=ShareFlowState.NO_DIALOG}onStartShare_(){this.flowState=ShareFlowState.CONFIRMATION}}customElements.define(SharePasswordFlowElement.is,SharePasswordFlowElement);const template$2=html`<iron-iconset-svg name="iph" size="24">
  <svg>
    <defs>
      
      <g id="celebration">
        <path fill="none" d="M0 0h20v20H0z"></path>
        <path fill-rule="evenodd" d="m2 22 14-5-9-9-5 14Zm10.35-5.82L5.3 18.7l2.52-7.05 4.53 4.53ZM14.53 12.53l5.59-5.59a1.25 1.25 0 0 1 1.77 0l.59.59 1.06-1.06-.59-.59a2.758 2.758 0 0 0-3.89 0l-5.59 5.59 1.06 1.06ZM10.06 6.88l-.59.59 1.06 1.06.59-.59a2.758 2.758 0 0 0 0-3.89l-.59-.59-1.06 1.07.59.59c.48.48.48 1.28 0 1.76ZM17.06 11.88l-1.59 1.59 1.06 1.06 1.59-1.59a1.25 1.25 0 0 1 1.77 0l1.61 1.61 1.06-1.06-1.61-1.61a2.758 2.758 0 0 0-3.89 0ZM15.06 5.88l-3.59 3.59 1.06 1.06 3.59-3.59a2.758 2.758 0 0 0 0-3.89l-1.59-1.59-1.06 1.06 1.59 1.59c.48.49.48 1.29 0 1.77Z">
        </path>
      </g>
      <g id="lightbulb_outline">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2 11.7V16h-4v-2.3C8.48 12.63 7 11.53 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.49-1.51 3.65-3 4.7z">
        </path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template$2.content);function getTemplate$p(){return html`<!--_html_template_start_--><link rel="stylesheet" href="chrome://theme/colors.css?sets=ui,chrome&shadow_host=true">
<style include="cr-hidden-style">:host{--help-bubble-background:var(--color-feature-promo-bubble-background,
        var(--google-blue-700));--help-bubble-foreground:var(--color-feature-promo-bubble-foreground,
        var(--google-grey-200));--help-bubble-border-radius:8px;--help-bubble-close-button-icon-size:16px;--help-bubble-close-button-size:24px;--help-bubble-element-spacing:8px;--help-bubble-padding:16px 20px;--help-bubble-font-weight:500;border-radius:var(--help-bubble-border-radius);box-shadow:0 6px 10px 4px rgba(60,64,67,.15),0 2px 3px rgba(60,64,67,.3);box-sizing:border-box;position:absolute;z-index:1}:host-context([chrome-refresh-2023]):host{--help-bubble-border-radius:12px;--help-bubble-close-button-size:20px;--help-bubble-padding:20px;--help-bubble-font-weight:400}#arrow{--help-bubble-arrow-size:11.3px;--help-bubble-arrow-size-half:calc(var(--help-bubble-arrow-size) / 2);--help-bubble-arrow-diameter:16px;--help-bubble-arrow-radius:calc(var(--help-bubble-arrow-diameter) / 2);--help-bubble-arrow-edge-offset:22px;--help-bubble-arrow-offset:calc(var(--help-bubble-arrow-edge-offset) +
                                     var(--help-bubble-arrow-radius));--help-bubble-arrow-border-radius:2px;position:absolute}#inner-arrow{background-color:var(--help-bubble-background);height:var(--help-bubble-arrow-size);left:calc(0px - var(--help-bubble-arrow-size-half));position:absolute;top:calc(0px - var(--help-bubble-arrow-size-half));transform:rotate(45deg);width:var(--help-bubble-arrow-size);z-index:-1}#arrow.bottom-edge{bottom:0}#arrow.bottom-edge #inner-arrow{border-bottom-right-radius:var(--help-bubble-arrow-border-radius)}#arrow.top-edge{top:0}#arrow.top-edge #inner-arrow{border-top-left-radius:var(--help-bubble-arrow-border-radius)}#arrow.right-edge{right:0}#arrow.right-edge #inner-arrow{border-top-right-radius:var(--help-bubble-arrow-border-radius)}#arrow.left-edge{left:0}#arrow.left-edge #inner-arrow{border-bottom-left-radius:var(--help-bubble-arrow-border-radius)}#arrow.top-position{top:var(--help-bubble-arrow-offset)}#arrow.vertical-center-position{top:50%}#arrow.bottom-position{bottom:var(--help-bubble-arrow-offset)}#arrow.left-position{left:var(--help-bubble-arrow-offset)}#arrow.horizontal-center-position{left:50%}#arrow.right-position{right:var(--help-bubble-arrow-offset)}#topContainer{display:flex;flex-direction:row}#progress{display:inline-block;flex:auto}#progress div{--help-bubble-progress-size:8px;background-color:var(--help-bubble-foreground);border:1px solid var(--help-bubble-foreground);border-radius:50%;display:inline-block;height:var(--help-bubble-progress-size);margin-inline-end:var(--help-bubble-element-spacing);margin-top:5px;width:var(--help-bubble-progress-size)}#progress .total-progress{background-color:var(--help-bubble-background)}#mainBody,#topBody{flex:1;font-size:14px;font-style:normal;font-weight:var(--help-bubble-font-weight);letter-spacing:.3px;line-height:20px;margin:0}#title{flex:1;font-size:18px;font-style:normal;font-weight:500;line-height:24px;margin:0}.help-bubble{--cr-focus-outline-color:var(--help-bubble-foreground);background-color:var(--help-bubble-background);border-radius:var(--help-bubble-border-radius);box-sizing:border-box;color:var(--help-bubble-foreground);display:flex;flex-direction:column;justify-content:space-between;max-width:340px;min-width:260px;padding:var(--help-bubble-padding);position:relative}#main{display:flex;flex-direction:row;justify-content:flex-start;margin-top:var(--help-bubble-element-spacing)}#middleRowSpacer{margin-inline-start:32px}cr-button,cr-icon-button{--help-bubble-button-foreground:var(--help-bubble-foreground);--help-bubble-button-background:var(--help-bubble-background);--help-bubble-button-hover-alpha:10%}cr-button.default-button{--help-bubble-button-foreground:var(
        --color-feature-promo-bubble-default-button-foreground,
        var(--help-bubble-background));--help-bubble-button-background:var(
        --color-feature-promo-bubble-default-button-background,
        var(--help-bubble-foreground));--help-bubble-button-hover-alpha:6%}@media (prefers-color-scheme:dark){cr-button,cr-icon-button{--help-bubble-button-hover-alpha:6%}cr-button.default-button{--help-bubble-button-hover-alpha:10%}}#buttons cr-button:hover,cr-icon-button:hover{background-color:color-mix(in srgb,var(--help-bubble-button-foreground) var(--help-bubble-button-hover-alpha),var(--help-bubble-button-background))}cr-icon-button{--cr-icon-button-fill-color:var(--help-bubble-button-foreground);--cr-icon-button-icon-size:var(--help-bubble-close-button-icon-size);--cr-icon-button-size:var(--help-bubble-close-button-size);--cr-icon-button-stroke-color:var(--help-bubble-button-foreground);box-sizing:border-box;display:block;flex:none;float:right;height:var(--cr-icon-button-size);margin:0;margin-inline-start:var(--help-bubble-element-spacing);order:2;width:var(--cr-icon-button-size)}cr-icon-button:focus-visible:focus{box-shadow:inset 0 0 0 1px var(--cr-focus-outline-color)}#bodyIcon{--help-bubble-body-icon-image-size:18px;--help-bubble-body-icon-size:24px;--iron-icon-height:var(--help-bubble-body-icon-image-size);--iron-icon-width:var(--help-bubble-body-icon-image-size);background-color:var(--help-bubble-foreground);border-radius:50%;box-sizing:border-box;color:var(--help-bubble-background);height:var(--help-bubble-body-icon-size);margin-inline-end:var(--help-bubble-element-spacing);padding:calc((var(--help-bubble-body-icon-size) - var(--help-bubble-body-icon-image-size))/ 2);text-align:center;width:var(--help-bubble-body-icon-size)}#bodyIcon iron-icon{display:block}#buttons{display:flex;flex-direction:row;justify-content:flex-end;margin-top:16px}#buttons cr-button{--border-color:var(--help-bubble-foreground);--text-color:var(--help-bubble-button-foreground);background-color:var(--help-bubble-button-background)}#buttons cr-button:focus{box-shadow:none;outline:2px solid var(--cr-focus-outline-color);outline-offset:1px}#buttons cr-button:not(:first-child){margin-inline-start:var(--help-bubble-element-spacing)}</style>

<div class="help-bubble" role="alertdialog" aria-modal="true" aria-labelledby="title" aria-describedby="body" aria-live="assertive" on-keydown="onKeyDown_" on-click="blockPropagation_">
  <div id="topContainer">
    <div id="bodyIcon" hidden$="[[!shouldShowBodyIcon_(bodyIconName)]]" aria-label$="[[bodyIconAltText]]">
      <iron-icon icon="iph:[[bodyIconName]]"></iron-icon>
    </div>
    <div id="progress" hidden$="[[!progress]]" role="progressbar" aria-valuenow$="[[progress.current]]" aria-valuemin="1" aria-valuemax$="[[progress.total]]">
      <template is="dom-repeat" items="[[progressData_]]">
        <div class$="[[getProgressClass_(index)]]"></div>
      </template>
    </div>
    <h1 id="title" hidden$="[[!shouldShowTitleInTopContainer_(progress, titleText)]]">
      [[titleText]]
    </h1>
    <p id="topBody" hidden$="[[!shouldShowBodyInTopContainer_(progress, titleText)]]">
      [[bodyText]]
    </p>
    <cr-icon-button id="close" iron-icon="cr:close" aria-label$="[[closeButtonAltText]]" on-click="dismiss_" tabindex$="[[closeButtonTabIndex]]">
    </cr-icon-button>
  </div>
  <div id="main" hidden$="[[!shouldShowBodyInMain_(progress, titleText)]]">
    <div id="middleRowSpacer" hidden$="[[!shouldShowBodyIcon_(bodyIconName)]]">
    </div>
    <p id="mainBody">[[bodyText]]</p>
  </div>
  <div id="buttons" hidden$="[[!buttons.length]]">
    <template is="dom-repeat" id="buttonlist" items="[[buttons]]" sort="buttonSortFunc_">
      <cr-button id$="[[getButtonId_(itemsIndex)]]" tabindex$="[[getButtonTabIndex_(itemsIndex, item.isDefault)]]" class$="[[getButtonClass_(item.isDefault)]]" on-click="onButtonClick_" role="button" aria-label="[[item.text]]">[[item.text]]</cr-button>
    </template>
  </div>
  <div id="arrow" class$="[[getArrowClass_(position)]]">
    <div id="inner-arrow"></div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const TimeSpec={$:{}};const TimeDeltaSpec={$:{}};const TimeTicksSpec={$:{}};mojo.internal.Struct(TimeSpec.$,"Time",[mojo.internal.StructField("internalValue",0,0,mojo.internal.Int64,BigInt(0),false,0)],[[0,16]]);mojo.internal.Struct(TimeDeltaSpec.$,"TimeDelta",[mojo.internal.StructField("microseconds",0,0,mojo.internal.Int64,BigInt(0),false,0)],[[0,16]]);mojo.internal.Struct(TimeTicksSpec.$,"TimeTicks",[mojo.internal.StructField("internalValue",0,0,mojo.internal.Int64,BigInt(0),false,0)],[[0,16]]);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PointSpec={$:{}};const PointFSpec={$:{}};const Point3FSpec={$:{}};const SizeSpec={$:{}};const SizeFSpec={$:{}};const RectSpec={$:{}};const RectFSpec={$:{}};const InsetsSpec={$:{}};const InsetsFSpec={$:{}};const Vector2dSpec={$:{}};const Vector2dFSpec={$:{}};const Vector3dFSpec={$:{}};const QuaternionSpec={$:{}};const QuadFSpec={$:{}};mojo.internal.Struct(PointSpec.$,"Point",[mojo.internal.StructField("x",0,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Int32,0,false,0)],[[0,16]]);mojo.internal.Struct(PointFSpec.$,"PointF",[mojo.internal.StructField("x",0,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Float,0,false,0)],[[0,16]]);mojo.internal.Struct(Point3FSpec.$,"Point3F",[mojo.internal.StructField("x",0,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("z",8,0,mojo.internal.Float,0,false,0)],[[0,24]]);mojo.internal.Struct(SizeSpec.$,"Size",[mojo.internal.StructField("width",0,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("height",4,0,mojo.internal.Int32,0,false,0)],[[0,16]]);mojo.internal.Struct(SizeFSpec.$,"SizeF",[mojo.internal.StructField("width",0,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("height",4,0,mojo.internal.Float,0,false,0)],[[0,16]]);mojo.internal.Struct(RectSpec.$,"Rect",[mojo.internal.StructField("x",0,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("width",8,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("height",12,0,mojo.internal.Int32,0,false,0)],[[0,24]]);mojo.internal.Struct(RectFSpec.$,"RectF",[mojo.internal.StructField("x",0,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("width",8,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("height",12,0,mojo.internal.Float,0,false,0)],[[0,24]]);mojo.internal.Struct(InsetsSpec.$,"Insets",[mojo.internal.StructField("top",0,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("left",4,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("bottom",8,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("right",12,0,mojo.internal.Int32,0,false,0)],[[0,24]]);mojo.internal.Struct(InsetsFSpec.$,"InsetsF",[mojo.internal.StructField("top",0,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("left",4,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("bottom",8,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("right",12,0,mojo.internal.Float,0,false,0)],[[0,24]]);mojo.internal.Struct(Vector2dSpec.$,"Vector2d",[mojo.internal.StructField("x",0,0,mojo.internal.Int32,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Int32,0,false,0)],[[0,16]]);mojo.internal.Struct(Vector2dFSpec.$,"Vector2dF",[mojo.internal.StructField("x",0,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Float,0,false,0)],[[0,16]]);mojo.internal.Struct(Vector3dFSpec.$,"Vector3dF",[mojo.internal.StructField("x",0,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("y",4,0,mojo.internal.Float,0,false,0),mojo.internal.StructField("z",8,0,mojo.internal.Float,0,false,0)],[[0,24]]);mojo.internal.Struct(QuaternionSpec.$,"Quaternion",[mojo.internal.StructField("x",0,0,mojo.internal.Double,0,false,0),mojo.internal.StructField("y",8,0,mojo.internal.Double,0,false,0),mojo.internal.StructField("z",16,0,mojo.internal.Double,0,false,0),mojo.internal.StructField("w",24,0,mojo.internal.Double,0,false,0)],[[0,40]]);mojo.internal.Struct(QuadFSpec.$,"QuadF",[mojo.internal.StructField("p1",0,0,PointFSpec.$,null,false,0),mojo.internal.StructField("p2",8,0,PointFSpec.$,null,false,0),mojo.internal.StructField("p3",16,0,PointFSpec.$,null,false,0),mojo.internal.StructField("p4",24,0,PointFSpec.$,null,false,0)],[[0,40]]);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HelpBubbleArrowPositionSpec={$:mojo.internal.Enum()};var HelpBubbleArrowPosition;(function(HelpBubbleArrowPosition){HelpBubbleArrowPosition[HelpBubbleArrowPosition["MIN_VALUE"]=0]="MIN_VALUE";HelpBubbleArrowPosition[HelpBubbleArrowPosition["MAX_VALUE"]=11]="MAX_VALUE";HelpBubbleArrowPosition[HelpBubbleArrowPosition["TOP_LEFT"]=0]="TOP_LEFT";HelpBubbleArrowPosition[HelpBubbleArrowPosition["TOP_CENTER"]=1]="TOP_CENTER";HelpBubbleArrowPosition[HelpBubbleArrowPosition["TOP_RIGHT"]=2]="TOP_RIGHT";HelpBubbleArrowPosition[HelpBubbleArrowPosition["BOTTOM_LEFT"]=3]="BOTTOM_LEFT";HelpBubbleArrowPosition[HelpBubbleArrowPosition["BOTTOM_CENTER"]=4]="BOTTOM_CENTER";HelpBubbleArrowPosition[HelpBubbleArrowPosition["BOTTOM_RIGHT"]=5]="BOTTOM_RIGHT";HelpBubbleArrowPosition[HelpBubbleArrowPosition["LEFT_TOP"]=6]="LEFT_TOP";HelpBubbleArrowPosition[HelpBubbleArrowPosition["LEFT_CENTER"]=7]="LEFT_CENTER";HelpBubbleArrowPosition[HelpBubbleArrowPosition["LEFT_BOTTOM"]=8]="LEFT_BOTTOM";HelpBubbleArrowPosition[HelpBubbleArrowPosition["RIGHT_TOP"]=9]="RIGHT_TOP";HelpBubbleArrowPosition[HelpBubbleArrowPosition["RIGHT_CENTER"]=10]="RIGHT_CENTER";HelpBubbleArrowPosition[HelpBubbleArrowPosition["RIGHT_BOTTOM"]=11]="RIGHT_BOTTOM"})(HelpBubbleArrowPosition||(HelpBubbleArrowPosition={}));const HelpBubbleClosedReasonSpec={$:mojo.internal.Enum()};var HelpBubbleClosedReason;(function(HelpBubbleClosedReason){HelpBubbleClosedReason[HelpBubbleClosedReason["MIN_VALUE"]=0]="MIN_VALUE";HelpBubbleClosedReason[HelpBubbleClosedReason["MAX_VALUE"]=2]="MAX_VALUE";HelpBubbleClosedReason[HelpBubbleClosedReason["kPageChanged"]=0]="kPageChanged";HelpBubbleClosedReason[HelpBubbleClosedReason["kDismissedByUser"]=1]="kDismissedByUser";HelpBubbleClosedReason[HelpBubbleClosedReason["kTimedOut"]=2]="kTimedOut"})(HelpBubbleClosedReason||(HelpBubbleClosedReason={}));class HelpBubbleHandlerFactoryPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"help_bubble.mojom.HelpBubbleHandlerFactory",scope)}}class HelpBubbleHandlerFactoryRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(HelpBubbleHandlerFactoryPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}createHelpBubbleHandler(client,handler){this.proxy.sendMessage(0,HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec.$,null,[client,handler])}}class HelpBubbleHandlerFactory{static get $interfaceName(){return"help_bubble.mojom.HelpBubbleHandlerFactory"}static getRemote(){let remote=new HelpBubbleHandlerFactoryRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class HelpBubbleHandlerPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"help_bubble.mojom.HelpBubbleHandler",scope)}}class HelpBubbleHandlerRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(HelpBubbleHandlerPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}helpBubbleAnchorVisibilityChanged(nativeIdentifier,visible,rect){this.proxy.sendMessage(0,HelpBubbleHandler_HelpBubbleAnchorVisibilityChanged_ParamsSpec.$,null,[nativeIdentifier,visible,rect])}helpBubbleAnchorActivated(nativeIdentifier){this.proxy.sendMessage(1,HelpBubbleHandler_HelpBubbleAnchorActivated_ParamsSpec.$,null,[nativeIdentifier])}helpBubbleAnchorCustomEvent(nativeIdentifier,customEventName){this.proxy.sendMessage(2,HelpBubbleHandler_HelpBubbleAnchorCustomEvent_ParamsSpec.$,null,[nativeIdentifier,customEventName])}helpBubbleButtonPressed(nativeIdentifier,buttonIndex){this.proxy.sendMessage(3,HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec.$,null,[nativeIdentifier,buttonIndex])}helpBubbleClosed(nativeIdentifier,reason){this.proxy.sendMessage(4,HelpBubbleHandler_HelpBubbleClosed_ParamsSpec.$,null,[nativeIdentifier,reason])}}class HelpBubbleClientPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"help_bubble.mojom.HelpBubbleClient",scope)}}class HelpBubbleClientRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(HelpBubbleClientPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}showHelpBubble(params){this.proxy.sendMessage(0,HelpBubbleClient_ShowHelpBubble_ParamsSpec.$,null,[params])}toggleFocusForAccessibility(nativeIdentifier){this.proxy.sendMessage(1,HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec.$,null,[nativeIdentifier])}hideHelpBubble(nativeIdentifier){this.proxy.sendMessage(2,HelpBubbleClient_HideHelpBubble_ParamsSpec.$,null,[nativeIdentifier])}externalHelpBubbleUpdated(nativeIdentifier,shown){this.proxy.sendMessage(3,HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec.$,null,[nativeIdentifier,shown])}}class HelpBubbleClientCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(HelpBubbleClientRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.showHelpBubble=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,HelpBubbleClient_ShowHelpBubble_ParamsSpec.$,null,this.showHelpBubble.createReceiverHandler(false));this.toggleFocusForAccessibility=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(1,HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec.$,null,this.toggleFocusForAccessibility.createReceiverHandler(false));this.hideHelpBubble=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(2,HelpBubbleClient_HideHelpBubble_ParamsSpec.$,null,this.hideHelpBubble.createReceiverHandler(false));this.externalHelpBubbleUpdated=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(3,HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec.$,null,this.externalHelpBubbleUpdated.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}const HelpBubbleButtonParamsSpec={$:{}};const ProgressSpec={$:{}};const HelpBubbleParamsSpec={$:{}};const HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec={$:{}};const HelpBubbleHandler_HelpBubbleAnchorVisibilityChanged_ParamsSpec={$:{}};const HelpBubbleHandler_HelpBubbleAnchorActivated_ParamsSpec={$:{}};const HelpBubbleHandler_HelpBubbleAnchorCustomEvent_ParamsSpec={$:{}};const HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec={$:{}};const HelpBubbleHandler_HelpBubbleClosed_ParamsSpec={$:{}};const HelpBubbleClient_ShowHelpBubble_ParamsSpec={$:{}};const HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec={$:{}};const HelpBubbleClient_HideHelpBubble_ParamsSpec={$:{}};const HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec={$:{}};mojo.internal.Struct(HelpBubbleButtonParamsSpec.$,"HelpBubbleButtonParams",[mojo.internal.StructField("text",0,0,mojo.internal.String,null,false,0),mojo.internal.StructField("isDefault",8,0,mojo.internal.Bool,false,false,0)],[[0,24]]);mojo.internal.Struct(ProgressSpec.$,"Progress",[mojo.internal.StructField("current",0,0,mojo.internal.Uint8,0,false,0),mojo.internal.StructField("total",1,0,mojo.internal.Uint8,0,false,0)],[[0,16]]);mojo.internal.Struct(HelpBubbleParamsSpec.$,"HelpBubbleParams",[mojo.internal.StructField("nativeIdentifier",0,0,mojo.internal.String,null,false,0),mojo.internal.StructField("position",8,0,HelpBubbleArrowPositionSpec.$,HelpBubbleArrowPosition.TOP_CENTER,false,0),mojo.internal.StructField("titleText",16,0,mojo.internal.String,null,true,0),mojo.internal.StructField("bodyText",24,0,mojo.internal.String,null,false,0),mojo.internal.StructField("closeButtonAltText",32,0,mojo.internal.String,null,false,0),mojo.internal.StructField("bodyIconName",40,0,mojo.internal.String,null,true,0),mojo.internal.StructField("bodyIconAltText",48,0,mojo.internal.String,null,false,0),mojo.internal.StructField("progress",56,0,ProgressSpec.$,null,true,0),mojo.internal.StructField("buttons",64,0,mojo.internal.Array(HelpBubbleButtonParamsSpec.$,false),null,false,0),mojo.internal.StructField("timeout",72,0,TimeDeltaSpec.$,null,true,0)],[[0,88]]);mojo.internal.Struct(HelpBubbleHandlerFactory_CreateHelpBubbleHandler_ParamsSpec.$,"HelpBubbleHandlerFactory_CreateHelpBubbleHandler_Params",[mojo.internal.StructField("client",0,0,mojo.internal.InterfaceProxy(HelpBubbleClientRemote),null,false,0),mojo.internal.StructField("handler",8,0,mojo.internal.InterfaceRequest(HelpBubbleHandlerPendingReceiver),null,false,0)],[[0,24]]);mojo.internal.Struct(HelpBubbleHandler_HelpBubbleAnchorVisibilityChanged_ParamsSpec.$,"HelpBubbleHandler_HelpBubbleAnchorVisibilityChanged_Params",[mojo.internal.StructField("nativeIdentifier",0,0,mojo.internal.String,null,false,0),mojo.internal.StructField("visible",8,0,mojo.internal.Bool,false,false,0),mojo.internal.StructField("rect",16,0,RectFSpec.$,null,false,0)],[[0,32]]);mojo.internal.Struct(HelpBubbleHandler_HelpBubbleAnchorActivated_ParamsSpec.$,"HelpBubbleHandler_HelpBubbleAnchorActivated_Params",[mojo.internal.StructField("nativeIdentifier",0,0,mojo.internal.String,null,false,0)],[[0,16]]);mojo.internal.Struct(HelpBubbleHandler_HelpBubbleAnchorCustomEvent_ParamsSpec.$,"HelpBubbleHandler_HelpBubbleAnchorCustomEvent_Params",[mojo.internal.StructField("nativeIdentifier",0,0,mojo.internal.String,null,false,0),mojo.internal.StructField("customEventName",8,0,mojo.internal.String,null,false,0)],[[0,24]]);mojo.internal.Struct(HelpBubbleHandler_HelpBubbleButtonPressed_ParamsSpec.$,"HelpBubbleHandler_HelpBubbleButtonPressed_Params",[mojo.internal.StructField("nativeIdentifier",0,0,mojo.internal.String,null,false,0),mojo.internal.StructField("buttonIndex",8,0,mojo.internal.Uint8,0,false,0)],[[0,24]]);mojo.internal.Struct(HelpBubbleHandler_HelpBubbleClosed_ParamsSpec.$,"HelpBubbleHandler_HelpBubbleClosed_Params",[mojo.internal.StructField("nativeIdentifier",0,0,mojo.internal.String,null,false,0),mojo.internal.StructField("reason",8,0,HelpBubbleClosedReasonSpec.$,0,false,0)],[[0,24]]);mojo.internal.Struct(HelpBubbleClient_ShowHelpBubble_ParamsSpec.$,"HelpBubbleClient_ShowHelpBubble_Params",[mojo.internal.StructField("params",0,0,HelpBubbleParamsSpec.$,null,false,0)],[[0,16]]);mojo.internal.Struct(HelpBubbleClient_ToggleFocusForAccessibility_ParamsSpec.$,"HelpBubbleClient_ToggleFocusForAccessibility_Params",[mojo.internal.StructField("nativeIdentifier",0,0,mojo.internal.String,null,false,0)],[[0,16]]);mojo.internal.Struct(HelpBubbleClient_HideHelpBubble_ParamsSpec.$,"HelpBubbleClient_HideHelpBubble_Params",[mojo.internal.StructField("nativeIdentifier",0,0,mojo.internal.String,null,false,0)],[[0,16]]);mojo.internal.Struct(HelpBubbleClient_ExternalHelpBubbleUpdated_ParamsSpec.$,"HelpBubbleClient_ExternalHelpBubbleUpdated_Params",[mojo.internal.StructField("nativeIdentifier",0,0,mojo.internal.String,null,false,0),mojo.internal.StructField("shown",8,0,mojo.internal.Bool,false,false,0)],[[0,24]]);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ACTION_BUTTON_ID_PREFIX="action-button-";const HELP_BUBBLE_DISMISSED_EVENT="help-bubble-dismissed";const HELP_BUBBLE_TIMED_OUT_EVENT="help-bubble-timed-out";const HELP_BUBBLE_SCROLL_ANCHOR_OPTIONS={behavior:"smooth",block:"center"};function debounceEnd(fn,time=50){let timerId;return()=>{clearTimeout(timerId);timerId=setTimeout(fn,time)}}class HelpBubbleElement extends PolymerElement{constructor(){super(...arguments);this.closeButtonTabIndex=0;this.buttons=[];this.progress=null;this.timeoutMs=null;this.timeoutTimerId=null;this.debouncedUpdate=null;this.padding={top:0,bottom:0,left:0,right:0};this.fixed=false;this.anchorElement_=null;this.progressData_=[];this.resizeObserver_=null}static get is(){return"help-bubble"}static get template(){return getTemplate$p()}static get properties(){return{nativeId:{type:String,value:"",reflectToAttribute:true},position:{type:HelpBubbleArrowPosition,value:HelpBubbleArrowPosition.TOP_CENTER,reflectToAttribute:true}}}show(anchorElement){this.anchorElement_=anchorElement;if(this.progress){this.progressData_=new Array(this.progress.total)}else{this.progressData_=[]}this.closeButtonTabIndex=this.buttons.length?this.buttons.length+2:1;assert(this.anchorElement_,"Tried to show a help bubble but anchorElement does not exist");this.style.display="block";this.style.position=this.fixed?"fixed":"absolute";this.removeAttribute("aria-hidden");this.updatePosition_();this.debouncedUpdate=debounceEnd((()=>{if(this.anchorElement_){this.updatePosition_()}}),50);this.$.buttonlist.addEventListener("rendered-item-count-changed",this.debouncedUpdate);window.addEventListener("resize",this.debouncedUpdate);if(this.timeoutMs!==null){const timedOutCallback=()=>{this.dispatchEvent(new CustomEvent(HELP_BUBBLE_TIMED_OUT_EVENT,{detail:{nativeId:this.nativeId}}))};this.timeoutTimerId=setTimeout(timedOutCallback,this.timeoutMs)}if(this.offsetParent&&!this.fixed){this.resizeObserver_=new ResizeObserver((()=>{this.updatePosition_();this.anchorElement_?.scrollIntoView(HELP_BUBBLE_SCROLL_ANCHOR_OPTIONS)}));this.resizeObserver_.observe(this.offsetParent)}}hide(){if(this.resizeObserver_){this.resizeObserver_.disconnect();this.resizeObserver_=null}this.style.display="none";this.setAttribute("aria-hidden","true");this.anchorElement_=null;if(this.timeoutTimerId!==null){clearInterval(this.timeoutTimerId);this.timeoutTimerId=null}if(this.debouncedUpdate){window.removeEventListener("resize",this.debouncedUpdate);this.$.buttonlist.removeEventListener("rendered-item-count-changed",this.debouncedUpdate);this.debouncedUpdate=null}}getAnchorElement(){return this.anchorElement_}getButtonForTesting(buttonIndex){return this.$.buttons.querySelector(`[id="${ACTION_BUTTON_ID_PREFIX+buttonIndex}"]`)}focus(){this.$.buttonlist.render();const button=this.$.buttons.querySelector("cr-button.default-button")||this.$.buttons.querySelector("cr-button")||this.$.close;assert(button);button.focus()}static isDefaultButtonLeading(){return isWindows}dismiss_(){assert(this.nativeId,"Dismiss: expected help bubble to have a native id.");this.dispatchEvent(new CustomEvent(HELP_BUBBLE_DISMISSED_EVENT,{detail:{nativeId:this.nativeId,fromActionButton:false}}))}onKeyDown_(e){if(e.key==="Escape"){e.stopPropagation();this.dismiss_()}}blockPropagation_(e){e.stopPropagation()}getProgressClass_(index){return index<this.progress.current?"current-progress":"total-progress"}shouldShowTitleInTopContainer_(progress,titleText){return!!titleText&&!progress}shouldShowBodyInTopContainer_(progress,titleText){return!progress&&!titleText}shouldShowBodyInMain_(progress,titleText){return!!progress||!!titleText}shouldShowBodyIcon_(bodyIconName){return bodyIconName!==null&&bodyIconName!==""}onButtonClick_(e){assert(this.nativeId,"Action button clicked: expected help bubble to have a native ID.");const index=parseInt(e.target.id.substring(ACTION_BUTTON_ID_PREFIX.length));this.dispatchEvent(new CustomEvent(HELP_BUBBLE_DISMISSED_EVENT,{detail:{nativeId:this.nativeId,fromActionButton:true,buttonIndex:index}}))}getButtonId_(index){return ACTION_BUTTON_ID_PREFIX+index}getButtonClass_(isDefault){return isDefault?"default-button focus-outline-visible":"focus-outline-visible"}getButtonTabIndex_(index,isDefault){return isDefault?1:index+2}buttonSortFunc_(button1,button2){if(button1.isDefault){return isWindows?-1:1}if(button2.isDefault){return isWindows?1:-1}return 0}getArrowClass_(position){let classList="";switch(position){case HelpBubbleArrowPosition.TOP_LEFT:case HelpBubbleArrowPosition.TOP_CENTER:case HelpBubbleArrowPosition.TOP_RIGHT:classList="top-edge ";break;case HelpBubbleArrowPosition.BOTTOM_LEFT:case HelpBubbleArrowPosition.BOTTOM_CENTER:case HelpBubbleArrowPosition.BOTTOM_RIGHT:classList="bottom-edge ";break;case HelpBubbleArrowPosition.LEFT_TOP:case HelpBubbleArrowPosition.LEFT_CENTER:case HelpBubbleArrowPosition.LEFT_BOTTOM:classList="left-edge ";break;case HelpBubbleArrowPosition.RIGHT_TOP:case HelpBubbleArrowPosition.RIGHT_CENTER:case HelpBubbleArrowPosition.RIGHT_BOTTOM:classList="right-edge ";break;default:assertNotReached("Unknown help bubble position: "+position)}switch(position){case HelpBubbleArrowPosition.TOP_LEFT:case HelpBubbleArrowPosition.BOTTOM_LEFT:classList+="left-position";break;case HelpBubbleArrowPosition.TOP_CENTER:case HelpBubbleArrowPosition.BOTTOM_CENTER:classList+="horizontal-center-position";break;case HelpBubbleArrowPosition.TOP_RIGHT:case HelpBubbleArrowPosition.BOTTOM_RIGHT:classList+="right-position";break;case HelpBubbleArrowPosition.LEFT_TOP:case HelpBubbleArrowPosition.RIGHT_TOP:classList+="top-position";break;case HelpBubbleArrowPosition.LEFT_CENTER:case HelpBubbleArrowPosition.RIGHT_CENTER:classList+="vertical-center-position";break;case HelpBubbleArrowPosition.LEFT_BOTTOM:case HelpBubbleArrowPosition.RIGHT_BOTTOM:classList+="bottom-position";break;default:assertNotReached("Unknown help bubble position: "+position)}return classList}updatePosition_(){assert(this.anchorElement_,"Update position: expected valid anchor element.");const ANCHOR_OFFSET=16;const ARROW_WIDTH=16;const ARROW_OFFSET_FROM_EDGE=22+ARROW_WIDTH/2;const anchorRect=this.anchorElement_.getBoundingClientRect();const anchorRectCenter={x:anchorRect.left+anchorRect.width/2,y:anchorRect.top+anchorRect.height/2};const helpBubbleRect=this.getBoundingClientRect();let offsetX=this.anchorElement_.offsetLeft;let offsetY=this.anchorElement_.offsetTop;switch(this.position){case HelpBubbleArrowPosition.TOP_LEFT:case HelpBubbleArrowPosition.TOP_CENTER:case HelpBubbleArrowPosition.TOP_RIGHT:offsetY+=anchorRect.height+ANCHOR_OFFSET+this.padding.bottom;break;case HelpBubbleArrowPosition.BOTTOM_LEFT:case HelpBubbleArrowPosition.BOTTOM_CENTER:case HelpBubbleArrowPosition.BOTTOM_RIGHT:offsetY-=helpBubbleRect.height+ANCHOR_OFFSET+this.padding.top;break;case HelpBubbleArrowPosition.LEFT_TOP:case HelpBubbleArrowPosition.LEFT_CENTER:case HelpBubbleArrowPosition.LEFT_BOTTOM:offsetX+=anchorRect.width+ANCHOR_OFFSET+this.padding.right;break;case HelpBubbleArrowPosition.RIGHT_TOP:case HelpBubbleArrowPosition.RIGHT_CENTER:case HelpBubbleArrowPosition.RIGHT_BOTTOM:offsetX-=helpBubbleRect.width+ANCHOR_OFFSET+this.padding.left;break;default:assertNotReached()}switch(this.position){case HelpBubbleArrowPosition.TOP_LEFT:case HelpBubbleArrowPosition.BOTTOM_LEFT:if(anchorRect.left+ARROW_OFFSET_FROM_EDGE>anchorRectCenter.x){offsetX+=anchorRect.width/2-ARROW_OFFSET_FROM_EDGE}break;case HelpBubbleArrowPosition.TOP_CENTER:case HelpBubbleArrowPosition.BOTTOM_CENTER:offsetX+=anchorRect.width/2-helpBubbleRect.width/2;break;case HelpBubbleArrowPosition.TOP_RIGHT:case HelpBubbleArrowPosition.BOTTOM_RIGHT:if(anchorRect.right-ARROW_OFFSET_FROM_EDGE<anchorRectCenter.x){offsetX+=anchorRect.width/2-helpBubbleRect.width+ARROW_OFFSET_FROM_EDGE}else{offsetX+=anchorRect.width-helpBubbleRect.width}break;case HelpBubbleArrowPosition.LEFT_TOP:case HelpBubbleArrowPosition.RIGHT_TOP:if(anchorRect.top+ARROW_OFFSET_FROM_EDGE>anchorRectCenter.y){offsetY+=anchorRect.height/2-ARROW_OFFSET_FROM_EDGE}break;case HelpBubbleArrowPosition.LEFT_CENTER:case HelpBubbleArrowPosition.RIGHT_CENTER:offsetY+=anchorRect.height/2-helpBubbleRect.height/2;break;case HelpBubbleArrowPosition.LEFT_BOTTOM:case HelpBubbleArrowPosition.RIGHT_BOTTOM:if(anchorRect.bottom-ARROW_OFFSET_FROM_EDGE<anchorRectCenter.y){offsetY+=anchorRect.height/2-helpBubbleRect.height+ARROW_OFFSET_FROM_EDGE}else{offsetY+=anchorRect.height-helpBubbleRect.height}break;default:assertNotReached()}this.style.top=offsetY.toString()+"px";this.style.left=offsetX.toString()+"px"}}customElements.define(HelpBubbleElement.is,HelpBubbleElement);
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ANCHOR_HIGHLIGHT_CLASS="help-anchor-highlight";function isRtlLang(element){return window.getComputedStyle(element).direction==="rtl"}function reflectArrowPosition(position){switch(position){case HelpBubbleArrowPosition.TOP_LEFT:return HelpBubbleArrowPosition.TOP_RIGHT;case HelpBubbleArrowPosition.TOP_RIGHT:return HelpBubbleArrowPosition.TOP_LEFT;case HelpBubbleArrowPosition.BOTTOM_LEFT:return HelpBubbleArrowPosition.BOTTOM_RIGHT;case HelpBubbleArrowPosition.BOTTOM_RIGHT:return HelpBubbleArrowPosition.BOTTOM_LEFT;case HelpBubbleArrowPosition.LEFT_TOP:return HelpBubbleArrowPosition.RIGHT_TOP;case HelpBubbleArrowPosition.LEFT_CENTER:return HelpBubbleArrowPosition.RIGHT_CENTER;case HelpBubbleArrowPosition.LEFT_BOTTOM:return HelpBubbleArrowPosition.RIGHT_BOTTOM;case HelpBubbleArrowPosition.RIGHT_TOP:return HelpBubbleArrowPosition.LEFT_TOP;case HelpBubbleArrowPosition.RIGHT_CENTER:return HelpBubbleArrowPosition.LEFT_CENTER;case HelpBubbleArrowPosition.RIGHT_BOTTOM:return HelpBubbleArrowPosition.LEFT_BOTTOM;default:return position}}class HelpBubbleController{constructor(nativeId,root){this.anchor_=null;this.bubble_=null;this.options_={padding:{top:0,bottom:0,left:0,right:0},fixed:false};this.isBubbleShowing_=false;this.isAnchorVisible_=false;this.lastAnchorBounds_={x:0,y:0,width:0,height:0};this.isExternal_=false;assert(nativeId,"HelpBubble: nativeId was not defined when registering help bubble");assert(root,"HelpBubble: shadowRoot was not defined when registering help bubble");this.nativeId_=nativeId;this.root_=root}isBubbleShowing(){return this.isBubbleShowing_}canShowBubble(){return this.hasAnchor()}hasBubble(){return!!this.bubble_}getBubble(){return this.bubble_}hasAnchor(){return!!this.anchor_}getAnchor(){return this.anchor_}getNativeId(){return this.nativeId_}getPadding(){return this.options_.padding}getAnchorVisibility(){return this.isAnchorVisible_}getLastAnchorBounds(){return this.lastAnchorBounds_}updateAnchorVisibility(isVisible,bounds){const changed=isVisible!==this.isAnchorVisible_||bounds.x!==this.lastAnchorBounds_.x||bounds.y!==this.lastAnchorBounds_.y||bounds.width!==this.lastAnchorBounds_.width||bounds.height!==this.lastAnchorBounds_.height;this.isAnchorVisible_=isVisible;this.lastAnchorBounds_=bounds;return changed}isAnchorFixed(){return this.options_.fixed}isExternal(){return this.isExternal_}updateExternalShowingStatus(isShowing){this.isExternal_=true;this.isBubbleShowing_=isShowing;this.setAnchorHighlight_(isShowing)}track(trackable,options){assert(!this.anchor_);let anchor=null;if(typeof trackable==="string"){anchor=this.root_.querySelector(trackable)}else if(Array.isArray(trackable)){anchor=this.deepQuery(trackable)}else if(trackable instanceof HTMLElement){anchor=trackable}else{assertNotReached("HelpBubble: anchor argument was unrecognized when registering "+"help bubble")}if(!anchor){return false}anchor.dataset["nativeId"]=this.nativeId_;this.anchor_=anchor;this.options_=options;return true}deepQuery(selectors){let cur=this.root_;for(const selector of selectors){if(cur.shadowRoot){cur=cur.shadowRoot}const el=cur.querySelector(selector);if(!el){return null}else{cur=el}}return cur}show(){this.isExternal_=false;if(!(this.bubble_&&this.anchor_)){return}this.bubble_.show(this.anchor_);this.isBubbleShowing_=true;this.setAnchorHighlight_(true)}hide(){if(!this.bubble_){return}this.bubble_.hide();this.bubble_.remove();this.bubble_=null;this.isBubbleShowing_=false;this.setAnchorHighlight_(false)}createBubble(params){assert(this.anchor_,"HelpBubble: anchor was not defined when showing help bubble");assert(this.anchor_.parentNode,"HelpBubble: anchor element not in DOM");this.bubble_=document.createElement("help-bubble");this.bubble_.nativeId=this.nativeId_;this.bubble_.position=isRtlLang(this.anchor_)?reflectArrowPosition(params.position):params.position;this.bubble_.closeButtonAltText=params.closeButtonAltText;this.bubble_.bodyText=params.bodyText;this.bubble_.bodyIconName=params.bodyIconName||null;this.bubble_.bodyIconAltText=params.bodyIconAltText;this.bubble_.titleText=params.titleText||"";this.bubble_.progress=params.progress||null;this.bubble_.buttons=params.buttons;this.bubble_.padding=this.options_.padding;if(params.timeout){this.bubble_.timeoutMs=Number(params.timeout.microseconds/1000n);assert(this.bubble_.timeoutMs>0)}assert(!this.bubble_.progress||this.bubble_.progress.total>=this.bubble_.progress.current);assert(this.root_);if(getComputedStyle(this.anchor_).getPropertyValue("position")==="fixed"){this.bubble_.fixed=true}this.anchor_.parentNode.insertBefore(this.bubble_,this.anchor_);return this.bubble_}setAnchorHighlight_(highlight){assert(this.anchor_,"Set anchor highlight: expected valid anchor element.");this.anchor_.classList.toggle(ANCHOR_HIGHLIGHT_CLASS,highlight);if(highlight){(this.bubble_||this.anchor_).focus();this.anchor_.scrollIntoView(HELP_BUBBLE_SCROLL_ANCHOR_OPTIONS)}}static getImmediateAncestor(element){if(element.parentElement){return element.parentElement}if(element.parentNode instanceof ShadowRoot){return element.parentNode.host}return null}}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class HelpBubbleProxyImpl{constructor(){this.callbackRouter_=new HelpBubbleClientCallbackRouter;this.handler_=new HelpBubbleHandlerRemote;const factory=HelpBubbleHandlerFactory.getRemote();factory.createHelpBubbleHandler(this.callbackRouter_.$.bindNewPipeAndPassRemote(),this.handler_.$.bindNewPipeAndPassReceiver())}static getInstance(){return instance$2||(instance$2=new HelpBubbleProxyImpl)}static setInstance(obj){instance$2=obj}getHandler(){return this.handler_}getCallbackRouter(){return this.callbackRouter_}}let instance$2=null;
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HelpBubbleMixin=dedupingMixin((superClass=>{class HelpBubbleMixin extends superClass{constructor(...args){super(...args);this.helpBubbleControllerById_=new Map;this.helpBubbleListenerIds_=[];this.helpBubbleFixedAnchorObserver_=null;this.helpBubbleResizeObserver_=null;this.helpBubbleDismissedEventTracker_=new EventTracker;this.debouncedAnchorMayHaveChangedCallback_=null;this.helpBubbleHandler_=HelpBubbleProxyImpl.getInstance().getHandler();this.helpBubbleCallbackRouter_=HelpBubbleProxyImpl.getInstance().getCallbackRouter()}connectedCallback(){super.connectedCallback();const router=this.helpBubbleCallbackRouter_;this.helpBubbleListenerIds_.push(router.showHelpBubble.addListener(this.onShowHelpBubble_.bind(this)),router.toggleFocusForAccessibility.addListener(this.onToggleHelpBubbleFocusForAccessibility_.bind(this)),router.hideHelpBubble.addListener(this.onHideHelpBubble_.bind(this)),router.externalHelpBubbleUpdated.addListener(this.onExternalHelpBubbleUpdated_.bind(this)));const isVisible=element=>{const rect=element.getBoundingClientRect();return rect.height>0&&rect.width>0};this.debouncedAnchorMayHaveChangedCallback_=debounceEnd(this.onAnchorBoundsMayHaveChanged_.bind(this),50);this.helpBubbleResizeObserver_=new ResizeObserver((entries=>entries.forEach((({target:target})=>{if(target===document.body){if(this.debouncedAnchorMayHaveChangedCallback_){this.debouncedAnchorMayHaveChangedCallback_()}}else{this.onAnchorVisibilityChanged_(target,isVisible(target))}}))));this.helpBubbleFixedAnchorObserver_=new IntersectionObserver((entries=>entries.forEach((({target:target,isIntersecting:isIntersecting})=>this.onAnchorVisibilityChanged_(target,isIntersecting)))),{root:null});document.addEventListener("scroll",this.debouncedAnchorMayHaveChangedCallback_,{passive:true});this.helpBubbleResizeObserver_.observe(document.body);this.controllers.forEach((ctrl=>this.observeControllerAnchor_(ctrl)))}get controllers(){return Array.from(this.helpBubbleControllerById_.values())}disconnectedCallback(){super.disconnectedCallback();for(const listenerId of this.helpBubbleListenerIds_){this.helpBubbleCallbackRouter_.removeListener(listenerId)}this.helpBubbleListenerIds_=[];assert(this.helpBubbleResizeObserver_);this.helpBubbleResizeObserver_.disconnect();this.helpBubbleResizeObserver_=null;assert(this.helpBubbleFixedAnchorObserver_);this.helpBubbleFixedAnchorObserver_.disconnect();this.helpBubbleFixedAnchorObserver_=null;this.helpBubbleDismissedEventTracker_.removeAll();this.helpBubbleControllerById_.clear();if(this.debouncedAnchorMayHaveChangedCallback_){document.removeEventListener("scroll",this.debouncedAnchorMayHaveChangedCallback_);this.debouncedAnchorMayHaveChangedCallback_=null}}registerHelpBubble(nativeId,trackable,options={}){if(this.helpBubbleControllerById_.has(nativeId)){const ctrl=this.helpBubbleControllerById_.get(nativeId);if(ctrl&&ctrl.isBubbleShowing()){return null}this.unregisterHelpBubble(nativeId)}const controller=new HelpBubbleController(nativeId,this.shadowRoot);controller.track(trackable,parseOptions(options));this.helpBubbleControllerById_.set(nativeId,controller);if(this.helpBubbleResizeObserver_){this.observeControllerAnchor_(controller)}return controller}unregisterHelpBubble(nativeId){const ctrl=this.helpBubbleControllerById_.get(nativeId);if(ctrl&&ctrl.hasAnchor()){this.onAnchorVisibilityChanged_(ctrl.getAnchor(),false);this.unobserveControllerAnchor_(ctrl)}this.helpBubbleControllerById_.delete(nativeId)}observeControllerAnchor_(controller){const anchor=controller.getAnchor();assert(anchor,"Help bubble does not have anchor");if(controller.isAnchorFixed()){assert(this.helpBubbleFixedAnchorObserver_);this.helpBubbleFixedAnchorObserver_.observe(anchor)}else{assert(this.helpBubbleResizeObserver_);this.helpBubbleResizeObserver_.observe(anchor)}}unobserveControllerAnchor_(controller){const anchor=controller.getAnchor();assert(anchor,"Help bubble does not have anchor");if(controller.isAnchorFixed()){assert(this.helpBubbleFixedAnchorObserver_);this.helpBubbleFixedAnchorObserver_.unobserve(anchor)}else{assert(this.helpBubbleResizeObserver_);this.helpBubbleResizeObserver_.unobserve(anchor)}}isHelpBubbleShowing(){return this.controllers.some((ctrl=>ctrl.isBubbleShowing()))}isHelpBubbleShowingForTesting(id){const ctrls=this.controllers.filter(this.filterMatchingIdForTesting_(id));return!!ctrls[0]}getHelpBubbleForTesting(id){const ctrls=this.controllers.filter(this.filterMatchingIdForTesting_(id));return ctrls[0]?ctrls[0].getBubble():null}filterMatchingIdForTesting_(anchorId){return ctrl=>ctrl.isBubbleShowing()&&ctrl.getAnchor()!==null&&ctrl.getAnchor().id===anchorId}getSortedAnchorStatusesForTesting(){return this.controllers.sort(((a,b)=>a.getNativeId().localeCompare(b.getNativeId()))).map((ctrl=>[ctrl.getNativeId(),ctrl.hasAnchor()]))}canShowHelpBubble(controller){if(!this.helpBubbleControllerById_.has(controller.getNativeId())){return false}if(!controller.canShowBubble()){return false}const anchor=controller.getAnchor();const anchorIsUsed=this.controllers.some((otherCtrl=>otherCtrl.isBubbleShowing()&&otherCtrl.getAnchor()===anchor));return!anchorIsUsed}showHelpBubble(controller,params){assert(this.canShowHelpBubble(controller),"Can't show help bubble");const bubble=controller.createBubble(params);this.helpBubbleDismissedEventTracker_.add(bubble,HELP_BUBBLE_DISMISSED_EVENT,this.onHelpBubbleDismissed_.bind(this));this.helpBubbleDismissedEventTracker_.add(bubble,HELP_BUBBLE_TIMED_OUT_EVENT,this.onHelpBubbleTimedOut_.bind(this));controller.show()}hideHelpBubble(nativeId){const ctrl=this.helpBubbleControllerById_.get(nativeId);if(!ctrl||!ctrl.hasBubble()){return false}this.helpBubbleDismissedEventTracker_.remove(ctrl.getBubble(),HELP_BUBBLE_DISMISSED_EVENT);this.helpBubbleDismissedEventTracker_.remove(ctrl.getBubble(),HELP_BUBBLE_TIMED_OUT_EVENT);ctrl.hide();return true}notifyHelpBubbleAnchorActivated(nativeId){const ctrl=this.helpBubbleControllerById_.get(nativeId);if(!ctrl||!ctrl.isBubbleShowing()){return false}this.helpBubbleHandler_.helpBubbleAnchorActivated(nativeId);return true}notifyHelpBubbleAnchorCustomEvent(nativeId,customEvent){const ctrl=this.helpBubbleControllerById_.get(nativeId);if(!ctrl||!ctrl.isBubbleShowing()){return false}this.helpBubbleHandler_.helpBubbleAnchorCustomEvent(nativeId,customEvent);return true}onAnchorVisibilityChanged_(target,isVisible){const nativeId=target.dataset["nativeId"];assert(nativeId);const ctrl=this.helpBubbleControllerById_.get(nativeId);const hidden=this.hideHelpBubble(nativeId);if(hidden){this.helpBubbleHandler_.helpBubbleClosed(nativeId,HelpBubbleClosedReason.kPageChanged)}const bounds=isVisible?this.getElementBounds_(target):{x:0,y:0,width:0,height:0};if(!ctrl||ctrl.updateAnchorVisibility(isVisible,bounds)){this.helpBubbleHandler_.helpBubbleAnchorVisibilityChanged(nativeId,isVisible,bounds)}}onAnchorBoundsMayHaveChanged_(){for(const ctrl of this.controllers){if(ctrl.hasAnchor()&&ctrl.getAnchorVisibility()){const bounds=this.getElementBounds_(ctrl.getAnchor());if(ctrl.updateAnchorVisibility(true,bounds)){this.helpBubbleHandler_.helpBubbleAnchorVisibilityChanged(ctrl.getNativeId(),true,bounds)}}}}getElementBounds_(element){const rect={x:0,y:0,width:0,height:0};const bounds=element.getBoundingClientRect();rect.x=bounds.x;rect.y=bounds.y;rect.width=bounds.width;rect.height=bounds.height;const nativeId=element.dataset["nativeId"];if(!nativeId){return rect}const ctrl=this.helpBubbleControllerById_.get(nativeId);if(ctrl){const padding=ctrl.getPadding();rect.x-=padding.left;rect.y-=padding.top;rect.width+=padding.left+padding.right;rect.height+=padding.top+padding.bottom}return rect}onShowHelpBubble_(params){if(!this.helpBubbleControllerById_.has(params.nativeIdentifier)){return}const ctrl=this.helpBubbleControllerById_.get(params.nativeIdentifier);this.showHelpBubble(ctrl,params)}onToggleHelpBubbleFocusForAccessibility_(nativeId){if(!this.helpBubbleControllerById_.has(nativeId)){return}const ctrl=this.helpBubbleControllerById_.get(nativeId);if(ctrl){const anchor=ctrl.getAnchor();if(anchor){anchor.focus()}}}onHideHelpBubble_(nativeId){this.hideHelpBubble(nativeId)}onExternalHelpBubbleUpdated_(nativeId,shown){if(!this.helpBubbleControllerById_.has(nativeId)){return}const ctrl=this.helpBubbleControllerById_.get(nativeId);ctrl.updateExternalShowingStatus(shown)}onHelpBubbleDismissed_(e){const nativeId=e.detail.nativeId;assert(nativeId);const hidden=this.hideHelpBubble(nativeId);assert(hidden);if(nativeId){if(e.detail.fromActionButton){this.helpBubbleHandler_.helpBubbleButtonPressed(nativeId,e.detail.buttonIndex)}else{this.helpBubbleHandler_.helpBubbleClosed(nativeId,HelpBubbleClosedReason.kDismissedByUser)}}}onHelpBubbleTimedOut_(e){const nativeId=e.detail.nativeId;const ctrl=this.helpBubbleControllerById_.get(nativeId);assert(ctrl);const hidden=this.hideHelpBubble(nativeId);assert(hidden);if(nativeId){this.helpBubbleHandler_.helpBubbleClosed(nativeId,HelpBubbleClosedReason.kTimedOut)}}}return HelpBubbleMixin}));function parseOptions(options){const padding={top:0,bottom:0,left:0,right:0};padding.top=clampPadding(options.anchorPaddingTop);padding.left=clampPadding(options.anchorPaddingLeft);padding.bottom=clampPadding(options.anchorPaddingBottom);padding.right=clampPadding(options.anchorPaddingRight);return{padding:padding,fixed:!!options.fixed}}function clampPadding(n=0){return Math.max(0,Math.min(20,n))}function getTemplate$o(){return html`<!--_html_template_start_--><style include="shared-style cr-input-style cr-shared-style
                credential-details-card">#passwordButtons{display:flex}#shareButton{margin-inline-start:auto}</style>
<div class="card">
  <div class="credential-container">
    <div class="row-container">
      <div class="column-container">
        <credential-field value="[[password.username]]" id="usernameValue" label="$i18n{usernameLabel}" copy-button-label="$i18n{copyUsername}" value-copied-toast-label="$i18n{usernameCopiedToClipboard}" interaction-id="[[usernameCopyInteraction_]]">
        </credential-field>
      </div>
      <div class="column-container">
        <div id="domainLabel" class="cr-form-field-label">
          [[getDomainLabel_(password)]]
        </div>
        <template id="links" is="dom-repeat" items="[[password.affiliatedDomains]]">
          <div class="elide-left">
            <a href="[[item.url]]" class="site-link" target="_blank">
              [[item.name]]
            </a>
          </div>
        </template>
      </div>
    </div>
    <div class="row-container">
      <div class="column-container">
        <cr-input id="passwordValue" label="[[getPasswordLabel_(password)]]" value="[[getPasswordValue_(password)]]" class="input-field password-input" type="[[getPasswordType_(password, isPasswordVisible)]]" readonly="readonly" aria-disabled="true">
          <div id="passwordButtons" slot="inline-suffix" hidden="[[isFederated_(password)]]">
            <cr-icon-button id="showPasswordButton" class$="[[getShowHideButtonIconClass(isPasswordVisible)]]" title="[[getShowHideButtonLabel(isPasswordVisible)]]" on-click="onShowPasswordClick_">
            </cr-icon-button>
            <cr-icon-button id="copyPasswordButton" class="icon-copy-content" title="$i18n{copyPassword}" on-click="onCopyPasswordClick_">
            </cr-icon-button>
          </div>
        </cr-input>
      </div>
      <div class="column-container">
        <div hidden="[[isFederated_(password)]]">
          <credential-note note="[[password.note]]" id="noteValue">
          </credential-note>
        </div>
      </div>
    </div>
  </div>
  <div class="button-container">
    <cr-button id="editButton" hidden="[[isFederated_(password)]]" class="edit-button" on-click="onEditClicked_">
      $i18n{editPassword}
    </cr-button>
    <cr-button id="deleteButton" on-click="onDeleteClick_">
      $i18n{deletePassword}
    </cr-button>
    <cr-button id="shareButton" on-click="onShareButtonClick_" hidden="[[!showShareButton_]]">
      $i18n{share}
    </cr-button>
    <template is="dom-if" if="[[showShareFlow_]]" restamp>
      <share-password-flow password-name="[[groupName]]" icon-url="[[iconUrl]]" password="[[password]]" on-share-flow-done="onShareFlowDone_">
      </share-password-flow>
    </template>
  </div>
</div>
<template is="dom-if" if="[[showEditPasswordDialog_]]" restamp>
  <edit-password-dialog on-close="onEditPasswordDialogClosed_" id="editPasswordDialog" credential="{{password}}">
  </edit-password-dialog>
</template>
<template is="dom-if" if="[[showDeletePasswordDialog_]]" restamp>
  <multi-store-delete-password-dialog on-close="onDeletePasswordDialogClosed_" id="deletePasswordDialog" duplicated-password="[[password]]">
  </multi-store-delete-password-dialog>
</template>
<cr-toast id="toast" duration="5000">
  <span>[[toastMessage_]]</span>
</cr-toast>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID="PasswordManagerUI::kSharePasswordElementId";const PasswordDetailsCardElementBase=HelpBubbleMixin(UserUtilMixin(ShowPasswordMixin(I18nMixin(PolymerElement))));class PasswordDetailsCardElement extends PasswordDetailsCardElementBase{static get is(){return"password-details-card"}static get template(){return getTemplate$o()}static get properties(){return{password:Object,groupName:String,iconUrl:String,toastMessage_:String,usernameCopyInteraction_:{type:PasswordViewPageInteractions,value(){return PasswordViewPageInteractions.USERNAME_COPY_BUTTON_CLICKED}},showEditPasswordDialog_:Boolean,showDeletePasswordDialog_:Boolean,showShareButton_:{type:Boolean,computed:"computeShowShareButton_(enableSendPasswords_, "+"isOptedInForAccountStorage, isSyncingPasswords)"},showShareFlow_:{type:Boolean,value:false},enableSendPasswords_:{type:Boolean,value(){return loadTimeData.getBoolean("enableSendPasswords")}}}}isFederated_(){return!!this.password.federationText}getPasswordLabel_(){return this.isFederated_()?this.i18n("federationLabel"):this.i18n("passwordLabel")}getPasswordValue_(){return this.isFederated_()?this.password.federationText:this.password.password}getPasswordType_(){return this.isFederated_()?"text":this.getPasswordInputType()}onCopyPasswordClick_(){PasswordManagerImpl.getInstance().requestPlaintextPassword(this.password.id,chrome.passwordsPrivate.PlaintextReason.COPY).then((()=>this.showToast_(this.i18n("passwordCopiedToClipboard")))).catch((()=>{}));this.extendAuthValidity_();PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_COPY_BUTTON_CLICKED)}onShowPasswordClick_(){this.onShowHidePasswordButtonClick();PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_SHOW_BUTTON_CLICKED)}onDeleteClick_(){PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_DELETE_BUTTON_CLICKED);if(this.password.storedIn===chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT){this.showDeletePasswordDialog_=true;return}PasswordManagerImpl.getInstance().removeCredential(this.password.id,this.password.storedIn);this.dispatchEvent(new CustomEvent("password-removed",{bubbles:true,composed:true,detail:{removedFromStores:this.password.storedIn}}))}showToast_(message){this.toastMessage_=message;this.$.toast.show()}onEditClicked_(){this.showEditPasswordDialog_=true;this.extendAuthValidity_();PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_EDIT_BUTTON_CLICKED)}onEditPasswordDialogClosed_(){this.notifyPath("password.note");this.showEditPasswordDialog_=false;this.extendAuthValidity_()}onDeletePasswordDialogClosed_(){this.showDeletePasswordDialog_=false;this.extendAuthValidity_()}onShareButtonClick_(){recordPasswordSharingInteraction(PasswordSharingActions.PASSWORD_DETAILS_SHARE_BUTTON_CLICKED);this.hideHelpBubble(PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID);this.showShareFlow_=true}onShareFlowDone_(){this.showShareFlow_=false}extendAuthValidity_(){PasswordManagerImpl.getInstance().extendAuthValidity()}getDomainLabel_(){const hasApps=this.password.affiliatedDomains?.some((domain=>domain.signonRealm.startsWith("android://")));const hasSites=this.password.affiliatedDomains?.some((domain=>!domain.signonRealm.startsWith("android://")));if(hasApps&&hasSites){return this.i18n("sitesAndAppsLabel")}return hasApps?this.i18n("appsLabel"):this.i18n("sitesLabel")}computeShowShareButton_(){return this.enableSendPasswords_&&!this.isFederated_()&&(this.isSyncingPasswords||this.isOptedInForAccountStorage)}maybeRegisterSharingHelpBubble(){if(!this.showShareButton_){return}this.registerHelpBubble(PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID,this.$.shareButton)}}customElements.define(PasswordDetailsCardElement.is,PasswordDetailsCardElement);function getTemplate$n(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style">cr-input:not(:first-of-type){margin-top:var(--cr-form-field-bottom-spacing)}cr-input{--cr-input-error-display:none}#usernameInput[invalid]{--cr-input-error-display:block}#displayNameInput{margin-top:var(--cr-form-field-bottom-spacing)}</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="title" id="title" class="dialog-title">
    $i18n{editPasskeyTitle}
  </div>
  <div slot="body">
    <div class="cr-form-field-label">$i18n{sitesLabel}</div>
    <template id="links" is="dom-repeat" items="[[passkey.affiliatedDomains]]">
      <div class="elide-left">
        <a href="[[item.url]]" class="site-link" target="_blank">
          [[item.name]]
        </a>
      </div>
    </template>
    <cr-input id="displayNameInput" label="$i18n{displayNameLabel}" autofocus value="{{displayName_}}" placeholder="$i18n{displayNamePlaceholder}">
    </cr-input>
    <cr-input id="usernameInput" label="$i18n{usernameLabel}" value="{{username_}}" placeholder="$i18n{usernamePlaceholder}">
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancel_">
      $i18n{cancel}
    </cr-button>
    <cr-button id="saveButton" class="action-button" on-click="onEditClick_">
      $i18n{save}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const EditPasskeyDialogElementBase=I18nMixin(PolymerElement);class EditPasskeyDialogElement extends EditPasskeyDialogElementBase{static get is(){return"edit-passkey-dialog"}static get template(){return getTemplate$n()}static get properties(){return{passkey:Object,username_:String,displayName_:String}}ready(){super.ready();assert(this.passkey.isPasskey);this.username_=this.passkey.username;this.displayName_=this.passkey.displayName||""}onCancel_(){this.$.dialog.close()}onEditClick_(){this.passkey.username=this.username_;this.passkey.displayName=this.displayName_;PasswordManagerImpl.getInstance().changeCredential(this.passkey).finally((()=>{this.$.dialog.close()}))}}customElements.define(EditPasskeyDialogElement.is,EditPasskeyDialogElement);function getTemplate$m(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style">a[href]{color:var(--cr-link-color)}</style>
<cr-dialog id="dialog" close-text="$i18n{close}" ignore-enter-key show-on-attach>
  <div slot="title" class="dialog-title">
    $i18n{deletePasskeyConfirmationTitle}
  </div>
  <div slot="body">
    <span id="link" inner-h-t-m-l="[[getDescriptionHtml_(passkey)]]"></span>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancel_" id="cancelButton" autofocus>
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onDelete_" id="deleteButton">
      $i18n{delete}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DeletePasskeyDialogElementBase=I18nMixin(PolymerElement);class DeletePasskeyDialogElement extends DeletePasskeyDialogElementBase{static get is(){return"delete-passkey-dialog"}static get template(){return getTemplate$m()}static get properties(){return{passkey:Object}}ready(){super.ready();assert(this.passkey.isPasskey)}onCancel_(){this.$.dialog.close()}onDelete_(){PasswordManagerImpl.getInstance().removeCredential(this.passkey.id,this.passkey.storedIn);this.dispatchEvent(new CustomEvent("passkey-removed",{bubbles:true,composed:true}));this.$.dialog.close()}getDescriptionHtml_(){assert(this.passkey.affiliatedDomains);const domain=this.passkey.affiliatedDomains[0];assert(domain);return this.i18nAdvanced("deletePasskeyConfirmationDescription",{substitutions:[`<a href='${domain.url}' target='_blank'>${domain.name}</a>`]})}}customElements.define(DeletePasskeyDialogElement.is,DeletePasskeyDialogElement);function getTemplate$l(){return html`<!--_html_template_start_--><style include="shared-style cr-input-style cr-shared-style
                credential-details-card cr-icons"></style>
<div class="card">
  <div class="credential-container">
    <div class="row-container">
      <div class="column-container">
        <credential-field value="[[getDisplayNameValue_(passkey)]]" id="displayNameValue" label="$i18n{displayNameLabel}" copy-button-label="$i18n{copyDisplayName}" value-copied-toast-label="$i18n{displayNameCopiedToClipboard}" interaction-id="[[
                interactions_.PASSKEY_DISPLAY_NAME_COPY_BUTTON_CLICKED]]">
        </credential-field>
      </div>
      <div class="column-container">
        <div id="domainLabel" class="cr-form-field-label">
          $i18n{sitesLabel}
        </div>
        <template id="links" is="dom-repeat" items="[[passkey.affiliatedDomains]]">
          <div class="elide-left">
            <a href="[[item.url]]" class="site-link" target="_blank">
              [[item.name]]
            </a>
          </div>
        </template>
      </div>
    </div>
    <div class="row-container">
      <div class="column-container">
        <credential-field value="[[getUsernameValue_(passkey)]]" id="usernameValue" label="$i18n{usernameLabel}" copy-button-label="$i18n{copyUsername}" value-copied-toast-label="$i18n{usernameCopiedToClipboard}" interaction-id="[[interactions_.USERNAME_COPY_BUTTON_CLICKED]]">
        </credential-field>
      </div>
    </div>
    <div class="row-container">
      <div class="cr-secondary-text">
        <iron-icon icon="passwords-icon:passkey"></iron-icon>
        $i18n{passkeyManagementInfoLabel}
      </div>
    </div>
  </div>
  <div class="button-container">
    <cr-button id="editButton" class="edit-button" on-click="onEditClicked_">
      $i18n{edit}
    </cr-button>
    <cr-button id="deleteButton" on-click="onDeleteClick_">
      $i18n{delete}
    </cr-button>
  </div>
</div>
<template is="dom-if" if="[[showEditPasskeyDialog_]]" restamp id="editPasskeyTemplate">
  <edit-passkey-dialog on-close="onEditPasskeyDialogClosed_" id="editPasskeyDialog" passkey="{{passkey}}">
  </edit-passkey-dialog>
</template>
<template is="dom-if" if="[[showDeletePasskeyDialog_]]" restamp id="deletePasskeyTemplate">
  <delete-passkey-dialog on-close="onDeletePasskeyDialogClosed_" id="deletePasskeyDialog" passkey="{{passkey}}">
  </delete-passkey-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PasskeyDetailsCardElementBase=I18nMixin(PolymerElement);class PasskeyDetailsCardElement extends PasskeyDetailsCardElementBase{static get is(){return"passkey-details-card"}static get template(){return getTemplate$l()}static get properties(){return{passkey:Object,interactions_:{type:Object,value:PasswordViewPageInteractions},showEditPasskeyDialog_:Boolean,showDeletePasskeyDialog_:Boolean}}getUsernameValue_(){return!this.passkey.username||this.passkey.username===""?this.i18n("usernamePlaceholder"):this.passkey.username}getDisplayNameValue_(){return!this.passkey.displayName||this.passkey.displayName===""?this.i18n("displayNamePlaceholder"):this.passkey.displayName}onDeleteClick_(){this.showDeletePasskeyDialog_=true;PasswordManagerImpl.getInstance().extendAuthValidity();PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSKEY_DELETE_BUTTON_CLICKED)}onDeletePasskeyDialogClosed_(){this.showDeletePasskeyDialog_=false;PasswordManagerImpl.getInstance().extendAuthValidity()}onEditClicked_(){this.showEditPasskeyDialog_=true;PasswordManagerImpl.getInstance().extendAuthValidity();PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSKEY_EDIT_BUTTON_CLICKED)}onEditPasskeyDialogClosed_(){this.showEditPasskeyDialog_=false;PasswordManagerImpl.getInstance().extendAuthValidity()}}customElements.define(PasskeyDetailsCardElement.is,PasskeyDetailsCardElement);function getTemplate$k(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style">#header{align-items:center;display:grid;grid-template-columns:auto auto 1fr;margin-bottom:28px}#backButton{--cr-icon-button-margin-end:6px;--cr-icon-button-margin-start:0px}#favicon{min-width:20px;padding-inline-end:12px;--site-favicon-height:20px;--site-favicon-width:20px}#title{line-height:normal}</style>
<div id="header">
  <cr-icon-button class="icon-arrow-back" id="backButton" on-click="navigateBack_" aria-label="$i18n{backToPasswords}">
  </cr-icon-button>
  
  <site-favicon id="favicon" url="[[selectedGroup_.iconUrl]]" domain="[[selectedGroup_.name]]" aria-hidden="true">
  </site-favicon>
  <h2 id="title" class="page-title text-elide">[[selectedGroup_.name]]</h2>
</div>
<template is="dom-if" if="[[selectedGroup_.name]]">
  <template is="dom-repeat" initial-count="10" items="[[selectedGroup_.entries]]">
    <template is="dom-if" if="[[item.isPasskey]]">
      <passkey-details-card passkey="[[item]]"></passkey-details-card>
    </template>
    <template is="dom-if" if="[[!item.isPasskey]]">
      <password-details-card password="[[item]]" group-name="[[selectedGroup_.name]]" icon-url="[[selectedGroup_.iconUrl]]">
      </password-details-card>
    </template>
  </template>
</template>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PasswordDetailsSectionElementBase=RouteObserverMixin(PolymerElement);class PasswordDetailsSectionElement extends PasswordDetailsSectionElementBase{constructor(){super(...arguments);this.savedPasswordsListener_=null}static get is(){return"password-details-section"}static get template(){return getTemplate$k()}static get properties(){return{selectedGroup_:{type:Object,observer:"maybeRegisterPasswordSharingHelpBubble_"}}}connectedCallback(){super.connectedCallback();this.passwordManagerAuthTimeoutListener_=()=>{if(Router.getInstance().currentRoute.page!==Page.PASSWORD_DETAILS){return}this.dispatchEvent(new CustomEvent("auth-timed-out",{bubbles:true,composed:true}));this.navigateBack_();PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.TIMED_OUT_IN_VIEW_PAGE)};PasswordManagerImpl.getInstance().addPasswordManagerAuthTimeoutListener(this.passwordManagerAuthTimeoutListener_)}disconnectedCallback(){super.disconnectedCallback();if(this.savedPasswordsListener_){PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.savedPasswordsListener_);this.savedPasswordsListener_=null}PasswordManagerImpl.getInstance().removePasswordManagerAuthTimeoutListener(this.passwordManagerAuthTimeoutListener_)}currentRouteChanged(route,_){if(route.page!==Page.PASSWORD_DETAILS){this.selectedGroup_=undefined;return}const group=route.details;if(group&&group.name){this.selectedGroup_=group;this.startListeningForUpdates_();this.$.backButton.focus()}else{PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.CREDENTIAL_REQUESTED_BY_URL);this.assignMatchingGroup(route.details)}}navigateBack_(){Router.getInstance().navigateTo(Page.PASSWORDS,null,Router.getInstance().currentRoute.queryParameters)}async assignMatchingGroup(groupName){const groups=await PasswordManagerImpl.getInstance().getCredentialGroups();let selectedGroup=groups.find((group=>group.name===groupName));if(!selectedGroup){selectedGroup=groups.find((group=>group.entries.some((entry=>entry.affiliatedDomains?.some((domain=>domain.name===groupName))))))}if(!selectedGroup){this.navigateBack_();PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.CREDENTIAL_NOT_FOUND);return}assert(selectedGroup);this.updateShownCredentials(selectedGroup).then(this.startListeningForUpdates_.bind(this)).catch(this.navigateBack_);PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.CREDENTIAL_FOUND)}startListeningForUpdates_(){if(this.savedPasswordsListener_){return}this.savedPasswordsListener_=_passwordList=>{PasswordManagerImpl.getInstance().getCredentialGroups().then(this.refreshGroupInfo_.bind(this))};PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.savedPasswordsListener_)}updateShownCredentials(group){if(document.visibilityState==="visible"){return this.requestShownCredentials_(group)}return new Promise(((resolve,reject)=>{this.visibilityChangedListener_=()=>{if(document.visibilityState==="visible"){document.removeEventListener("visibilitychange",this.visibilityChangedListener_);this.requestShownCredentials_(group).then(resolve).catch(reject)}};document.addEventListener("visibilitychange",this.visibilityChangedListener_)}))}requestShownCredentials_(group){const ids=group.entries.map((entry=>entry.id));return PasswordManagerImpl.getInstance().requestCredentialsDetails(ids).then((entries=>{group.entries=entries;this.selectedGroup_=group}))}refreshGroupInfo_(groups){assert(this.selectedGroup_);const currentIds=this.selectedGroup_.entries.map((entry=>entry.id));let matchingGroup=groups.filter((group=>group.entries.some((entry=>currentIds.includes(entry.id)))))[0];if(!matchingGroup){matchingGroup=groups.filter((group=>group.name===this.selectedGroup_.name))[0];if(!matchingGroup){this.navigateBack_();return}}assert(matchingGroup);const newIds=matchingGroup.entries.map((entry=>entry.id));if(currentIds.sort().toString()===newIds.sort().toString()){return}this.updateShownCredentials(matchingGroup).then((()=>{Router.getInstance().navigateTo(Page.PASSWORD_DETAILS,this.selectedGroup_,Router.getInstance().currentRoute.queryParameters)})).catch(this.navigateBack_)}maybeRegisterPasswordSharingHelpBubble_(){afterNextRender(this,(()=>{if(this.selectedGroup_?.entries[0]?.isPasskey){return}this.shadowRoot.querySelector("password-details-card")?.maybeRegisterSharingHelpBubble()}))}}customElements.define(PasswordDetailsSectionElement.is,PasswordDetailsSectionElement);function getTemplate$j(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style iron-flex">#tryAgainButton{margin-inline-start:8px}cr-link-row[hide-icon]::part(icon){display:none}#exportPasswordsButton{height:auto;margin-inline-start:16px;padding:3px 16px}</style>

<cr-link-row class="cr-row" non-clickable label="$i18n{exportPasswords}" sub-label="$i18n{exportPasswordsDescription}" hide-icon>
    <template is="dom-if" if="[[!showExportInProgress_]]" restamp>
      <cr-button id="exportPasswordsButton" on-click="onExportClick_" aria-label="[[getAriaLabel_()]]">
          $i18n{downloadFile}
      </cr-button>
    </template>
    <template is="dom-if" if="[[showExportInProgress_]]" restamp>
      <paper-spinner-lite active id="progressSpinner">
      </paper-spinner-lite>
    </template>
</cr-link-row>

<template is="dom-if" if="[[showPasswordsExportErrorDialog_]]" restamp>
  <cr-dialog id="dialogError" close-text="$i18n{close}" show-on-attach>
    <div slot="title" class="dialog-title">
      [[exportErrorMessage_]]
    </div>
    <div slot="body">
      $i18n{exportPasswordsFailTips}
      <ul>
        <li>$i18n{exportPasswordsFailTipsEnoughSpace}</li>
        <li>$i18n{exportPasswordsFailTipsAnotherFolder}</li>
      </ul>
    </div>
    <div slot="button-container">
      <cr-button id="cancelButton" on-click="closePasswordsExportErrorDialog_" autofocus>
        $i18n{cancel}
      </cr-button>
      <cr-button id="tryAgainButton" class="action-button" on-click="onTryAgainClick_">
        $i18n{exportPasswordsTryAgain}
      </cr-button>
    </div>
  </cr-dialog>
</template>

<cr-toast id="exportSuccessToast" duration="2500">
  <div>$i18n{exportSuccessful}</div>
  <cr-button id="openInShellButton" on-click="onOpenInShellButtonClick_">
    $i18n{downloadLinkShow}
  </cr-button>
</cr-toast>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ProgressStatus=chrome.passwordsPrivate.ExportProgressStatus;const PasswordsExporterElementBase=I18nMixin(PolymerElement);class PasswordsExporterElement extends PasswordsExporterElementBase{constructor(){super(...arguments);this.onPasswordsFileExportProgressListener_=null}static get is(){return"passwords-exporter"}static get template(){return getTemplate$j()}static get properties(){return{showExportInProgress_:{type:Boolean,value:false},showExportErrorDialog_:{type:Boolean,value:false},exportErrorMessage_:{type:String,value:null}}}connectedCallback(){super.connectedCallback();PasswordManagerImpl.getInstance().requestExportProgressStatus().then((status=>{if(status===ProgressStatus.IN_PROGRESS){this.showExportInProgress_=true}}));this.onPasswordsFileExportProgressListener_=progress=>this.onPasswordsFileExportProgress_(progress);PasswordManagerImpl.getInstance().addPasswordsFileExportProgressListener(this.onPasswordsFileExportProgressListener_)}disconnectedCallback(){assert(this.onPasswordsFileExportProgressListener_);PasswordManagerImpl.getInstance().removePasswordsFileExportProgressListener(this.onPasswordsFileExportProgressListener_);super.disconnectedCallback()}onExportClick_(){PasswordManagerImpl.getInstance().exportPasswords().catch((error=>{if(error==="in-progress"){this.showExportInProgress_=true}}))}closePasswordsExportErrorDialog_(){this.showPasswordsExportErrorDialog_=false}onTryAgainClick_(){this.closePasswordsExportErrorDialog_();this.onExportClick_()}onPasswordsFileExportProgress_(progress){if(progress.status===ProgressStatus.IN_PROGRESS){this.showExportInProgress_=true;return}this.showExportInProgress_=false;switch(progress.status){case ProgressStatus.SUCCEEDED:assert(progress.filePath);this.exportedFilePath_=progress.filePath;this.$.exportSuccessToast.show();break;case ProgressStatus.FAILED_WRITE_FAILED:assert(progress.folderName);this.exportErrorMessage_=this.i18n("exportPasswordsFailTitle",progress.folderName);this.showPasswordsExportErrorDialog_=true;break}}onOpenInShellButtonClick_(){assert(this.exportedFilePath_);PasswordManagerImpl.getInstance().showExportedFileInShell(this.exportedFilePath_);this.$.exportSuccessToast.hide()}getAriaLabel_(){return[this.i18n("exportPasswords"),this.i18n("exportPasswordsDescription")].join(". ")}}customElements.define(PasswordsExporterElement.is,PasswordsExporterElement);
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronScrollTargetBehavior={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:true,_scrollTargetChanged:function(scrollTarget,isAttached){if(this._oldScrollTarget){this._toggleScrollListener(false,this._oldScrollTarget);this._oldScrollTarget=null}if(!isAttached){return}if(scrollTarget==="document"){this.scrollTarget=this._doc}else if(typeof scrollTarget==="string"){var domHost=this.domHost;this.scrollTarget=domHost&&domHost.$?domHost.$[scrollTarget]:dom(this.ownerDocument).querySelector("#"+scrollTarget)}else if(this._isValidScrollTarget()){this._oldScrollTarget=scrollTarget;this._toggleScrollListener(this._shouldHaveListener,scrollTarget)}},_scrollHandler:function scrollHandler(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop}return 0},get _scrollLeft(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft}return 0},set _scrollTop(top){if(this.scrollTarget===this._doc){window.scrollTo(window.pageXOffset,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollTop=top}},set _scrollLeft(left){if(this.scrollTarget===this._doc){window.scrollTo(left,window.pageYOffset)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left}},scroll:function(leftOrOptions,top){var left;if(typeof leftOrOptions==="object"){left=leftOrOptions.left;top=leftOrOptions.top}else{left=leftOrOptions}left=left||0;top=top||0;if(this.scrollTarget===this._doc){window.scrollTo(left,top)}else if(this._isValidScrollTarget()){this.scrollTarget.scrollLeft=left;this.scrollTarget.scrollTop=top}},get _scrollTargetWidth(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth}return 0},get _scrollTargetHeight(){if(this._isValidScrollTarget()){return this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight}return 0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(yes,scrollTarget){var eventTarget=scrollTarget===this._doc?window:scrollTarget;if(yes){if(!this._boundScrollHandler){this._boundScrollHandler=this._scrollHandler.bind(this);eventTarget.addEventListener("scroll",this._boundScrollHandler)}}else{if(this._boundScrollHandler){eventTarget.removeEventListener("scroll",this._boundScrollHandler);this._boundScrollHandler=null}}},toggleScrollListener:function(yes){this._shouldHaveListener=yes;this._toggleScrollListener(yes,this.scrollTarget)}};
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var IOS=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);var IOS_TOUCH_SCROLLING=IOS&&IOS[1]>=8;var DEFAULT_PHYSICAL_COUNT=3;var HIDDEN_Y="-10000px";var SECRET_TABINDEX=-100;Polymer({_template:html`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:false,reflectToAttribute:true,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:false},selectedItem:{type:Object,notify:true},selectedItems:{type:Object,notify:true},multiSelection:{type:Boolean,value:false},scrollOffset:{type:Number,value:0},preserveFocus:{type:Boolean,value:false}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[Templatizer,IronResizableBehavior,IronScrollTargetBehavior,OptionalMutableDataBehavior],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:true,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){var size=this.grid?this._physicalRows*this._rowHeight:this._physicalSize;return size-this._viewportHeight},get _itemsParent(){return dom(dom(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var virtualCount=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,virtualCount-this._physicalCount)},set _virtualStart(val){val=this._clamp(val,0,this._maxVirtualStart);if(this.grid){val=val-val%this._itemsPerRow}this._virtualStartVal=val},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(val){val=val%this._physicalCount;if(val<0){val=this._physicalCount+val}if(this.grid){val=val-val%this._itemsPerRow}this._physicalStartVal=val},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(val){this._physicalCountVal=val},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return this._viewportHeight===0?Infinity:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var idx=this._firstVisibleIndexVal;if(idx==null){var physicalOffset=this._physicalTop+this._scrollOffset;idx=this._iterateItems((function(pidx,vidx){physicalOffset+=this._getPhysicalSizeIncrement(pidx);if(physicalOffset>this._scrollPosition){return this.grid?vidx-vidx%this._itemsPerRow:vidx}if(this.grid&&this._virtualCount-1===vidx){return vidx-vidx%this._itemsPerRow}}))||0;this._firstVisibleIndexVal=idx}return idx},get lastVisibleIndex(){var idx=this._lastVisibleIndexVal;if(idx==null){if(this.grid){idx=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1)}else{var physicalOffset=this._physicalTop+this._scrollOffset;this._iterateItems((function(pidx,vidx){if(physicalOffset<this._scrollBottom){idx=vidx}physicalOffset+=this._getPhysicalSizeIncrement(pidx)}))}this._lastVisibleIndexVal=idx}return idx},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),true)},attached:function(){this._debounce("_render",this._render,animationFrame);this.listen(this,"iron-resize","_resizeHandler");this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler");this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(scrollTarget){this.style.webkitOverflowScrolling=scrollTarget===this?"touch":"";this.style.overflowY=scrollTarget===this?"auto":"";this._lastVisibleIndexVal=null;this._firstVisibleIndexVal=null;this._debounce("_render",this._render,animationFrame)},updateViewportBoundaries:function(){var styles=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(styles["padding-top"],10);this._isRTL=Boolean(styles.direction==="rtl");this._viewportWidth=this.$.items.offsetWidth;this._viewportHeight=this._scrollTargetHeight;this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var scrollTop=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));var delta=scrollTop-this._scrollPosition;var isScrollingDown=delta>=0;this._scrollPosition=scrollTop;this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(Math.abs(delta)>this._physicalSize&&this._physicalSize>0){delta=delta-this._scrollOffset;var idxAdjustment=Math.round(delta/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+idxAdjustment;this._physicalStart=this._physicalStart+idxAdjustment;this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition);this._update()}else if(this._physicalCount>0){var reusables=this._getReusables(isScrollingDown);if(isScrollingDown){this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length}else{this._virtualStart=this._virtualStart-reusables.indexes.length;this._physicalStart=this._physicalStart-reusables.indexes.length}this._update(reusables.indexes,isScrollingDown?null:reusables.indexes);this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),microTask)}},_getReusables:function(fromTop){var ith,offsetContent,physicalItemHeight;var idxs=[];var protectedOffsetContent=this._hiddenContentSize*this._ratio;var virtualStart=this._virtualStart;var virtualEnd=this._virtualEnd;var physicalCount=this._physicalCount;var top=this._physicalTop+this._scrollOffset;var bottom=this._physicalBottom+this._scrollOffset;var scrollTop=this._scrollPosition;var scrollBottom=this._scrollBottom;if(fromTop){ith=this._physicalStart;this._physicalEnd;offsetContent=scrollTop-top}else{ith=this._physicalEnd;this._physicalStart;offsetContent=bottom-scrollBottom}while(true){physicalItemHeight=this._getPhysicalSizeIncrement(ith);offsetContent=offsetContent-physicalItemHeight;if(idxs.length>=physicalCount||offsetContent<=protectedOffsetContent){break}if(fromTop){if(virtualEnd+idxs.length+1>=this._virtualCount){break}if(top+physicalItemHeight>=scrollTop-this._scrollOffset){break}idxs.push(ith);top=top+physicalItemHeight;ith=(ith+1)%physicalCount}else{if(virtualStart-idxs.length<=0){break}if(top+this._physicalSize-physicalItemHeight<=scrollBottom){break}idxs.push(ith);top=top-physicalItemHeight;ith=ith===0?physicalCount-1:ith-1}}return{indexes:idxs,physicalTop:top-this._scrollOffset}},_update:function(itemSet,movingUp){if(itemSet&&itemSet.length===0||this._physicalCount===0){return}this._manageFocus();this._assignModels(itemSet);this._updateMetrics(itemSet);if(movingUp){while(movingUp.length){var idx=movingUp.pop();this._physicalTop-=this._getPhysicalSizeIncrement(idx)}}this._positionItems();this._updateScrollerSize()},_createPool:function(size){this._ensureTemplatized();var i,inst;var physicalItems=new Array(size);for(i=0;i<size;i++){inst=this.stamp(null);physicalItems[i]=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}return physicalItems},_isClientFull:function(){return this._scrollBottom!=0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(count){var nextPhysicalCount=this._clamp(this._physicalCount+count,DEFAULT_PHYSICAL_COUNT,this._virtualCount-this._virtualStart);nextPhysicalCount=this._convertIndexToCompleteRow(nextPhysicalCount);if(this.grid){var correction=nextPhysicalCount%this._itemsPerRow;if(correction&&nextPhysicalCount-correction<=this._physicalCount){nextPhysicalCount+=this._itemsPerRow}nextPhysicalCount-=correction}var delta=nextPhysicalCount-this._physicalCount;var nextIncrease=Math.round(this._physicalCount*.5);if(delta<0){return}if(delta>0){var ts=window.performance.now();[].push.apply(this._physicalItems,this._createPool(delta));for(var i=0;i<delta;i++){this._physicalSizes.push(0)}this._physicalCount=this._physicalCount+delta;if(this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd){this._physicalStart=this._physicalStart+delta}this._update();this._templateCost=(window.performance.now()-ts)/delta;nextIncrease=Math.round(this._physicalCount*.5)}if(this._virtualEnd>=this._virtualCount-1||nextIncrease===0);else if(!this._isClientFull()){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,nextIncrease),microTask)}else if(this._physicalSize<this._optPhysicalSize){this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,nextIncrease)),idlePeriod)}},_render:function(){if(!this.isAttached||!this._isVisible){return}if(this._physicalCount!==0){var reusables=this._getReusables(true);this._physicalTop=reusables.physicalTop;this._virtualStart=this._virtualStart+reusables.indexes.length;this._physicalStart=this._physicalStart+reusables.indexes.length;this._update(reusables.indexes);this._update();this._increasePoolIfNeeded(0)}else if(this._virtualCount>0){this.updateViewportBoundaries();this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT)}},_ensureTemplatized:function(){if(this.ctor){return}this._userTemplate=this.queryEffectiveChildren("template");if(!this._userTemplate){console.warn("iron-list requires a template to be provided in light-dom")}var instanceProps={};instanceProps.__key__=true;instanceProps[this.as]=true;instanceProps[this.indexAs]=true;instanceProps[this.selectedAs]=true;instanceProps.tabIndex=true;this._instanceProps=instanceProps;this.templatize(this._userTemplate,this.mutableData)},_gridChanged:function(newGrid,oldGrid){if(typeof oldGrid==="undefined")return;this.notifyResize();flush();newGrid&&this._updateGridMetrics()},_getFocusedElement:function(){function doSearch(node,query){let result=null;let type=node.nodeType;if(type==Node.ELEMENT_NODE||type==Node.DOCUMENT_FRAGMENT_NODE)result=node.querySelector(query);if(result)return result;let child=node.firstChild;while(child!==null&&result===null){result=doSearch(child,query);child=child.nextSibling}if(result)return result;const shadowRoot=node.shadowRoot;return shadowRoot?doSearch(shadowRoot,query):null}const focusWithin=doSearch(this,":focus-within");return focusWithin?doSearch(focusWithin,":focus"):null},_itemsChanged:function(change){var rendering=/^items(\.splices){0,1}$/.test(change.path);var lastFocusedIndex,focusedElement;if(rendering&&this.preserveFocus){lastFocusedIndex=this._focusedVirtualIndex;focusedElement=this._getFocusedElement()}var preservingFocus=rendering&&this.preserveFocus&&focusedElement;if(change.path==="items"){this._virtualStart=0;this._physicalTop=0;this._virtualCount=this.items?this.items.length:0;this._physicalIndexForKey={};this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;this._physicalCount=this._physicalCount||0;this._physicalItems=this._physicalItems||[];this._physicalSizes=this._physicalSizes||[];this._physicalStart=0;if(this._scrollTop>this._scrollOffset&&!preservingFocus){this._resetScrollPosition(0)}this._removeFocusedItem();this._debounce("_render",this._render,animationFrame)}else if(change.path==="items.splices"){this._adjustVirtualIndex(change.value.indexSplices);this._virtualCount=this.items?this.items.length:0;var itemAddedOrRemoved=change.value.indexSplices.some((function(splice){return splice.addedCount>0||splice.removed.length>0}));if(itemAddedOrRemoved){var activeElement=this._getActiveElement();if(this.contains(activeElement)){activeElement.blur()}}var affectedIndexRendered=change.value.indexSplices.some((function(splice){return splice.index+splice.addedCount>=this._virtualStart&&splice.index<=this._virtualEnd}),this);if(!this._isClientFull()||affectedIndexRendered){this._debounce("_render",this._render,animationFrame)}}else if(change.path!=="items.length"){this._forwardItemPath(change.path,change.value)}if(preservingFocus){flush();focusedElement.blur();this._focusPhysicalItem(Math.min(this.items.length-1,lastFocusedIndex));if(!this._isIndexVisible(this._focusedVirtualIndex)){this.scrollToIndex(this._focusedVirtualIndex)}}},_forwardItemPath:function(path,value){path=path.slice(6);var dot=path.indexOf(".");if(dot===-1){dot=path.length}var isIndexRendered;var pidx;var inst;var offscreenInstance=this.modelForElement(this._offscreenFocusedItem);var vidx=parseInt(path.substring(0,dot),10);isIndexRendered=this._isIndexRendered(vidx);if(isIndexRendered){pidx=this._getPhysicalIndex(vidx);inst=this.modelForElement(this._physicalItems[pidx])}else if(offscreenInstance){inst=offscreenInstance}if(!inst||inst[this.indexAs]!==vidx){return}path=path.substring(dot+1);path=this.as+(path?"."+path:"");inst._setPendingPropertyOrPath(path,value,false,true);inst._flushProperties&&inst._flushProperties();if(isIndexRendered){this._updateMetrics([pidx]);this._positionItems();this._updateScrollerSize()}},_adjustVirtualIndex:function(splices){splices.forEach((function(splice){splice.removed.forEach(this._removeItem,this);if(splice.index<this._virtualStart){var delta=Math.max(splice.addedCount-splice.removed.length,splice.index-this._virtualStart);this._virtualStart=this._virtualStart+delta;if(this._focusedVirtualIndex>=0){this._focusedVirtualIndex=this._focusedVirtualIndex+delta}}}),this)},_removeItem:function(item){this.$.selector.deselect(item);if(this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===item){this._removeFocusedItem()}},_iterateItems:function(fn,itemSet){var pidx,vidx,rtn,i;if(arguments.length===2&&itemSet){for(i=0;i<itemSet.length;i++){pidx=itemSet[i];vidx=this._computeVidx(pidx);if((rtn=fn.call(this,pidx,vidx))!=null){return rtn}}}else{pidx=this._physicalStart;vidx=this._virtualStart;for(;pidx<this._physicalCount;pidx++,vidx++){if((rtn=fn.call(this,pidx,vidx))!=null){return rtn}}for(pidx=0;pidx<this._physicalStart;pidx++,vidx++){if((rtn=fn.call(this,pidx,vidx))!=null){return rtn}}}},_computeVidx:function(pidx){if(pidx>=this._physicalStart){return this._virtualStart+(pidx-this._physicalStart)}return this._virtualStart+(this._physicalCount-this._physicalStart)+pidx},_assignModels:function(itemSet){this._iterateItems((function(pidx,vidx){var el=this._physicalItems[pidx];var item=this.items&&this.items[vidx];if(item!=null){var inst=this.modelForElement(el);inst.__key__=null;this._forwardProperty(inst,this.as,item);this._forwardProperty(inst,this.selectedAs,this.$.selector.isSelected(item));this._forwardProperty(inst,this.indexAs,vidx);this._forwardProperty(inst,"tabIndex",this._focusedVirtualIndex===vidx?0:-1);this._physicalIndexForKey[inst.__key__]=pidx;inst._flushProperties&&inst._flushProperties(true);el.removeAttribute("hidden")}else{el.setAttribute("hidden","")}}),itemSet)},_updateMetrics:function(itemSet){flush();var newPhysicalSize=0;var oldPhysicalSize=0;var prevAvgCount=this._physicalAverageCount;var prevPhysicalAvg=this._physicalAverage;this._iterateItems((function(pidx,vidx){oldPhysicalSize+=this._physicalSizes[pidx];this._physicalSizes[pidx]=this._physicalItems[pidx].offsetHeight;newPhysicalSize+=this._physicalSizes[pidx];this._physicalAverageCount+=this._physicalSizes[pidx]?1:0}),itemSet);if(this.grid){this._updateGridMetrics();this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight}else{oldPhysicalSize=this._itemsPerRow===1?oldPhysicalSize:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight;this._physicalSize=this._physicalSize+newPhysicalSize-oldPhysicalSize;this._itemsPerRow=1}if(this._physicalAverageCount!==prevAvgCount){this._physicalAverage=Math.round((prevPhysicalAvg*prevAvgCount+newPhysicalSize)/this._physicalAverageCount)}},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200;this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200;this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var y=this._physicalTop;if(this.grid){var totalItemWidth=this._itemsPerRow*this._itemWidth;var rowOffset=(this._viewportWidth-totalItemWidth)/2;this._iterateItems((function(pidx,vidx){var modulus=vidx%this._itemsPerRow;var x=Math.floor(modulus*this._itemWidth+rowOffset);if(this._isRTL){x=x*-1}this.translate3d(x+"px",y+"px",0,this._physicalItems[pidx]);if(this._shouldRenderNextRow(vidx)){y+=this._rowHeight}}))}else{const order=[];this._iterateItems((function(pidx,vidx){const item=this._physicalItems[pidx];this.translate3d(0,y+"px",0,item);y+=this._physicalSizes[pidx];const itemId=item.id;if(itemId){order.push(itemId)}}));if(order.length){this.setAttribute("aria-owns",order.join(" "))}}},_getPhysicalSizeIncrement:function(pidx){if(!this.grid){return this._physicalSizes[pidx]}if(this._computeVidx(pidx)%this._itemsPerRow!==this._itemsPerRow-1){return 0}return this._rowHeight},_shouldRenderNextRow:function(vidx){return vidx%this._itemsPerRow===this._itemsPerRow-1},_adjustScrollPosition:function(){var deltaHeight=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(deltaHeight!==0){this._physicalTop=this._physicalTop-deltaHeight;var scrollTop=this._scrollPosition;if(!IOS_TOUCH_SCROLLING&&scrollTop>0){this._resetScrollPosition(scrollTop-deltaHeight)}}},_resetScrollPosition:function(pos){if(this.scrollTarget&&pos>=0){this._scrollTop=pos;this._scrollPosition=this._scrollTop}},_updateScrollerSize:function(forceUpdate){if(this.grid){this._estScrollHeight=this._virtualRowCount*this._rowHeight}else{this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage}forceUpdate=forceUpdate||this._scrollHeight===0;forceUpdate=forceUpdate||this._scrollPosition>=this._estScrollHeight-this._physicalSize;forceUpdate=forceUpdate||this.grid&&this.$.items.style.height<this._estScrollHeight;if(forceUpdate||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight){this.$.items.style.height=this._estScrollHeight+"px";this._scrollHeight=this._estScrollHeight}},scrollToItem:function(item){return this.scrollToIndex(this.items.indexOf(item))},scrollToIndex:function(idx){if(typeof idx!=="number"||idx<0||idx>this.items.length-1){return}flush();if(this._physicalCount===0){return}idx=this._clamp(idx,0,this._virtualCount-1);if(!this._isIndexRendered(idx)||idx>=this._maxVirtualStart){this._virtualStart=this.grid?idx-this._itemsPerRow*2:idx-1}this._manageFocus();this._assignModels();this._updateMetrics();this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;var currentTopItem=this._physicalStart;var currentVirtualItem=this._virtualStart;var targetOffsetTop=0;var hiddenContentSize=this._hiddenContentSize;while(currentVirtualItem<idx&&targetOffsetTop<=hiddenContentSize){targetOffsetTop=targetOffsetTop+this._getPhysicalSizeIncrement(currentTopItem);currentTopItem=(currentTopItem+1)%this._physicalCount;currentVirtualItem++}this._updateScrollerSize(true);this._positionItems();this._resetScrollPosition(this._physicalTop+this._scrollOffset+targetOffsetTop);this._increasePoolIfNeeded(0);this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null},_resetAverage:function(){this._physicalAverage=0;this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null;this._lastVisibleIndexVal=null;if(this._isVisible){this.updateViewportBoundaries();this.toggleScrollListener(true);this._resetAverage();this._render()}else{this.toggleScrollListener(false)}}),animationFrame)},selectItem:function(item){return this.selectIndex(this.items.indexOf(item))},selectIndex:function(index){if(index<0||index>=this._virtualCount){return}if(!this.multiSelection&&this.selectedItem){this.clearSelection()}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);if(model){model[this.selectedAs]=true}this.updateSizeForIndex(index)}this.$.selector.selectIndex(index)},deselectItem:function(item){return this.deselectIndex(this.items.indexOf(item))},deselectIndex:function(index){if(index<0||index>=this._virtualCount){return}if(this._isIndexRendered(index)){var model=this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);model[this.selectedAs]=false;this.updateSizeForIndex(index)}this.$.selector.deselectIndex(index)},toggleSelectionForItem:function(item){return this.toggleSelectionForIndex(this.items.indexOf(item))},toggleSelectionForIndex:function(index){var isSelected=this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(index):this.$.selector.isSelected(this.items[index]);isSelected?this.deselectIndex(index):this.selectIndex(index)},clearSelection:function(){this._iterateItems((function(pidx,vidx){this.modelForElement(this._physicalItems[pidx])[this.selectedAs]=false}));this.$.selector.clearSelection()},_selectionEnabledChanged:function(selectionEnabled){var handler=selectionEnabled?this.listen:this.unlisten;handler.call(this,this,"tap","_selectionHandler")},_selectionHandler:function(e){var model=this.modelForElement(e.target);if(!model){return}var modelTabIndex,activeElTabIndex;var target=dom(e).path[0];var activeEl=this._getActiveElement();var physicalItem=this._physicalItems[this._getPhysicalIndex(model[this.indexAs])];if(target.localName==="input"||target.localName==="button"||target.localName==="select"){return}modelTabIndex=model.tabIndex;model.tabIndex=SECRET_TABINDEX;activeElTabIndex=activeEl?activeEl.tabIndex:-1;model.tabIndex=modelTabIndex;if(activeEl&&physicalItem!==activeEl&&physicalItem.contains(activeEl)&&activeElTabIndex!==SECRET_TABINDEX){return}this.toggleSelectionForItem(model[this.as])},_multiSelectionChanged:function(multiSelection){this.clearSelection();this.$.selector.multi=multiSelection},updateSizeForItem:function(item){return this.updateSizeForIndex(this.items.indexOf(item))},updateSizeForIndex:function(index){if(!this._isIndexRendered(index)){return null}this._updateMetrics([this._getPhysicalIndex(index)]);this._positionItems();return null},_manageFocus:function(){var fidx=this._focusedVirtualIndex;if(fidx>=0&&fidx<this._virtualCount){if(this._isIndexRendered(fidx)){this._restoreFocusedItem()}else{this._createFocusBackfillItem()}}else if(this._virtualCount>0&&this._physicalCount>0){this._focusedPhysicalIndex=this._physicalStart;this._focusedVirtualIndex=this._virtualStart;this._focusedItem=this._physicalItems[this._physicalStart]}},_convertIndexToCompleteRow:function(idx){this._itemsPerRow=this._itemsPerRow||1;return this.grid?Math.ceil(idx/this._itemsPerRow)*this._itemsPerRow:idx},_isIndexRendered:function(idx){return idx>=this._virtualStart&&idx<=this._virtualEnd},_isIndexVisible:function(idx){return idx>=this.firstVisibleIndex&&idx<=this.lastVisibleIndex},_getPhysicalIndex:function(vidx){return(this._physicalStart+(vidx-this._virtualStart))%this._physicalCount},focusItem:function(idx){this._focusPhysicalItem(idx)},_focusPhysicalItem:function(idx){if(idx<0||idx>=this._virtualCount){return}this._restoreFocusedItem();if(!this._isIndexRendered(idx)){this.scrollToIndex(idx)}var physicalItem=this._physicalItems[this._getPhysicalIndex(idx)];var model=this.modelForElement(physicalItem);var focusable;model.tabIndex=SECRET_TABINDEX;if(physicalItem.tabIndex===SECRET_TABINDEX){focusable=physicalItem}if(!focusable){focusable=dom(physicalItem).querySelector('[tabindex="'+SECRET_TABINDEX+'"]')}model.tabIndex=0;this._focusedVirtualIndex=idx;focusable&&focusable.focus()},_removeFocusedItem:function(){if(this._offscreenFocusedItem){this._itemsParent.removeChild(this._offscreenFocusedItem)}this._offscreenFocusedItem=null;this._focusBackfillItem=null;this._focusedItem=null;this._focusedVirtualIndex=-1;this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var fpidx=this._focusedPhysicalIndex;if(this._offscreenFocusedItem||this._focusedVirtualIndex<0){return}if(!this._focusBackfillItem){var inst=this.stamp(null);this._focusBackfillItem=inst.root.querySelector("*");this._itemsParent.appendChild(inst.root)}this._offscreenFocusedItem=this._physicalItems[fpidx];this.modelForElement(this._offscreenFocusedItem).tabIndex=0;this._physicalItems[fpidx]=this._focusBackfillItem;this._focusedPhysicalIndex=fpidx;this.translate3d(0,HIDDEN_Y,0,this._offscreenFocusedItem)},_restoreFocusedItem:function(){if(!this._offscreenFocusedItem||this._focusedVirtualIndex<0){return}this._assignModels();var fpidx=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex);var onScreenItem=this._physicalItems[fpidx];if(!onScreenItem){return}var onScreenInstance=this.modelForElement(onScreenItem);var offScreenInstance=this.modelForElement(this._offscreenFocusedItem);if(onScreenInstance[this.as]===offScreenInstance[this.as]){this._focusBackfillItem=onScreenItem;onScreenInstance.tabIndex=-1;this._physicalItems[fpidx]=this._offscreenFocusedItem;this.translate3d(0,HIDDEN_Y,0,this._focusBackfillItem)}else{this._removeFocusedItem();this._focusBackfillItem=null}this._offscreenFocusedItem=null},_didFocus:function(e){var targetModel=this.modelForElement(e.target);var focusedModel=this.modelForElement(this._focusedItem);var hasOffscreenFocusedItem=this._offscreenFocusedItem!==null;var fidx=this._focusedVirtualIndex;if(!targetModel){return}if(focusedModel===targetModel){if(!this._isIndexVisible(fidx)){this.scrollToIndex(fidx)}}else{this._restoreFocusedItem();if(focusedModel){focusedModel.tabIndex=-1}targetModel.tabIndex=0;fidx=targetModel[this.indexAs];this._focusedVirtualIndex=fidx;this._focusedPhysicalIndex=this._getPhysicalIndex(fidx);this._focusedItem=this._physicalItems[this._focusedPhysicalIndex];if(hasOffscreenFocusedItem&&!this._offscreenFocusedItem){this._update()}}},_keydownHandler:function(e){switch(e.keyCode){case 40:if(this._focusedVirtualIndex<this._virtualCount-1)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:if(this._focusedVirtualIndex>0)e.preventDefault();this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:if(this.grid)this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex);if(this.selectionEnabled)this._selectionHandler(e);break}},_clamp:function(v,min,max){return Math.min(max,Math.max(min,v))},_debounce:function(name,cb,asyncModule){this._debouncers=this._debouncers||{};this._debouncers[name]=Debouncer.debounce(this._debouncers[name],asyncModule,cb.bind(this));enqueueDebouncer(this._debouncers[name])},_forwardProperty:function(inst,name,value){inst._setPendingProperty(name,value)},_forwardHostPropV2:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(item){if(item){this.modelForElement(item).forwardHostProp(prop,value)}}),this)},_notifyInstancePropV2:function(inst,prop,value){if(matches(this.as,prop)){var idx=inst[this.indexAs];if(prop==this.as){this.items[idx]=value}this.notifyPath(translate(this.as,"items."+idx,prop),value)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(inst,path,value){if(path.indexOf(this.as+".")===0){this.notifyPath("items."+inst.__key__+"."+path.slice(this.as.length+1),value)}},_forwardParentPath:function(path,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(item){if(item){this.modelForElement(item).notifyPath(path,value)}}),this)},_forwardParentProp:function(prop,value){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(item){if(item){this.modelForElement(item)[prop]=value}}),this)},_getActiveElement:function(){var itemsHost=this._itemsParent.node.domHost;return dom(itemsHost?itemsHost.root:document).activeElement}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$1=html`
/* Most common used flex styles*/
<dom-module id="iron-flex">
  <template>
    <style>
      .layout.horizontal,
      .layout.vertical {
        display: flex;
      }

      .layout.inline {
        display: inline-flex;
      }

      .layout.horizontal {
        flex-direction: row;
      }

      .layout.vertical {
        flex-direction: column;
      }

      .layout.wrap {
        flex-wrap: wrap;
      }

      .layout.no-wrap {
        flex-wrap: nowrap;
      }

      .layout.center,
      .layout.center-center {
        align-items: center;
      }

      .layout.center-justified,
      .layout.center-center {
        justify-content: center;
      }

      .flex {
        flex: 1;
        flex-basis: 0.000000001px;
      }

      .flex-auto {
        flex: 1 1 auto;
      }

      .flex-none {
        flex: none;
      }
    </style>
  </template>
</dom-module>
/* Basic flexbox reverse styles */
<dom-module id="iron-flex-reverse">
  <template>
    <style>
      .layout.horizontal-reverse,
      .layout.vertical-reverse {
        display: flex;
      }

      .layout.horizontal-reverse {
        flex-direction: row-reverse;
      }

      .layout.vertical-reverse {
        flex-direction: column-reverse;
      }

      .layout.wrap-reverse {
        flex-wrap: wrap-reverse;
      }
    </style>
  </template>
</dom-module>
/* Flexbox alignment */
<dom-module id="iron-flex-alignment">
  <template>
    <style>
      /**
       * Alignment in cross axis.
       */
      .layout.start {
        align-items: flex-start;
      }

      .layout.center,
      .layout.center-center {
        align-items: center;
      }

      .layout.end {
        align-items: flex-end;
      }

      .layout.baseline {
        align-items: baseline;
      }

      /**
       * Alignment in main axis.
       */
      .layout.start-justified {
        justify-content: flex-start;
      }

      .layout.center-justified,
      .layout.center-center {
        justify-content: center;
      }

      .layout.end-justified {
        justify-content: flex-end;
      }

      .layout.around-justified {
        justify-content: space-around;
      }

      .layout.justified {
        justify-content: space-between;
      }

      /**
       * Self alignment.
       */
      .self-start {
        align-self: flex-start;
      }

      .self-center {
        align-self: center;
      }

      .self-end {
        align-self: flex-end;
      }

      .self-stretch {
        align-self: stretch;
      }

      .self-baseline {
        align-self: baseline;
      }

      /**
       * multi-line alignment in main axis.
       */
      .layout.start-aligned {
        align-content: flex-start;
      }

      .layout.end-aligned {
        align-content: flex-end;
      }

      .layout.center-aligned {
        align-content: center;
      }

      .layout.between-aligned {
        align-content: space-between;
      }

      .layout.around-aligned {
        align-content: space-around;
      }
    </style>
  </template>
</dom-module>
/* Non-flexbox positioning helper styles */
<dom-module id="iron-flex-factors">
  <template>
    <style>
      .flex,
      .flex-1 {
        flex: 1;
        flex-basis: 0.000000001px;
      }

      .flex-2 {
        flex: 2;
      }

      .flex-3 {
        flex: 3;
      }

      .flex-4 {
        flex: 4;
      }

      .flex-5 {
        flex: 5;
      }

      .flex-6 {
        flex: 6;
      }

      .flex-7 {
        flex: 7;
      }

      .flex-8 {
        flex: 8;
      }

      .flex-9 {
        flex: 9;
      }

      .flex-10 {
        flex: 10;
      }

      .flex-11 {
        flex: 11;
      }

      .flex-12 {
        flex: 12;
      }
    </style>
  </template>
</dom-module>
<dom-module id="iron-positioning">
  <template>
    <style>
      .block {
        display: block;
      }

      [hidden] {
        display: none !important;
      }

      .invisible {
        visibility: hidden !important;
      }

      .relative {
        position: relative;
      }

      .fit {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      body.fullbleed {
        margin: 0;
        height: 100vh;
      }

      .scroll {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      }

      /* fixed position */
      .fixed-bottom,
      .fixed-left,
      .fixed-right,
      .fixed-top {
        position: fixed;
      }

      .fixed-top {
        top: 0;
        left: 0;
        right: 0;
      }

      .fixed-right {
        top: 0;
        right: 0;
        bottom: 0;
      }

      .fixed-bottom {
        right: 0;
        bottom: 0;
        left: 0;
      }

      .fixed-left {
        top: 0;
        bottom: 0;
        left: 0;
      }
    </style>
  </template>
</dom-module>
`;template$1.setAttribute("style","display: none;");document.head.appendChild(template$1.content);
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SearchableLabelElement extends PolymerElement{static get is(){return"searchable-label"}static get template(){return null}static get properties(){return{title:String,searchTerm:String}}static get observers(){return["setSearchedTextToBold_(title, searchTerm)"]}setSearchedTextToBold_(){if(this.title===undefined){return}const titleText=this.title;if(!this.searchTerm){this.textContent=titleText;return}const re=new RegExp(quoteString(this.searchTerm),"gim");let i=0;let match;this.textContent="";while(match=re.exec(titleText)){if(match.index>i){this.appendTextElement("span",titleText.slice(i,match.index))}i=re.lastIndex;this.appendTextElement("b",titleText.substring(match.index,i))}if(i<titleText.length){this.appendTextElement("span",titleText.slice(i))}}appendTextElement(type,text){const element=document.createElement(type);element.textContent=text;this.appendChild(element)}}customElements.define(SearchableLabelElement.is,SearchableLabelElement);function getTemplate$i(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style">#container:hover{background-color:var(--cr-hover-background-color);border-radius:inherit;cursor:pointer;--cr-icon-button-hover-background-color:transparent;--cr-icon-button-active-background-color:transparent}#borderPart{display:grid;flex:1;grid-template-columns:auto 1fr;min-height:var(--section-min-height)}#favicon{margin-inline-end:20px;margin-inline-start:20px}.label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#numberOfAccounts{margin-inline-start:8px}#seePasswordDetails{--cr-icon-button-margin-start:0px;--cr-icon-button-margin-end:10px;justify-self:end}span{color:var(--cr-secondary-text-color)}</style>
<div id="container" class="flex-centered">
  
  <site-favicon id="favicon" url="[[item.iconUrl]]" domain="[[item.name]]" aria-hidden="true">
  </site-favicon>
  <div id="borderPart" class$="[[elementClass_]]">
    <div class="label" aria-hidden="true">
      <searchable-label id="displayedName" title="[[getTitle_(item, searchTerm)]]" search-term="[[searchTerm]]"></searchable-label>
      <span id="numberOfAccounts" hidden="[[!showNumberOfAccounts_(item, searchTerm)]]">
        [[numberOfAccounts_]]
      </span>
    </div>
    <cr-icon-button id="seePasswordDetails" class="subpage-arrow" aria-label="[[getAriaLabel_(item)]]">
    </cr-icon-button>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PasswordListItemElementBase=I18nMixin(PolymerElement);class PasswordListItemElement extends PasswordListItemElementBase{static get is(){return"password-list-item"}static get template(){return getTemplate$i()}static get properties(){return{item:{type:Object,observer:"onItemChanged_"},first:Boolean,searchTerm:String,elementClass_:{type:String,computed:"computeElementClass_(first)"},numberOfAccounts_:String}}computeElementClass_(){return this.first?"flex-centered":"flex-centered hr"}ready(){super.ready();this.addEventListener("click",this.onRowClick_)}focus(){this.$.seePasswordDetails.focus()}async onRowClick_(){const ids=this.item.entries.map((entry=>entry.id));PasswordManagerImpl.getInstance().requestCredentialsDetails(ids).then((entries=>{const group={name:this.item.name,iconUrl:this.item.iconUrl,entries:entries};this.dispatchEvent(new CustomEvent("password-details-shown",{bubbles:true,composed:true,detail:this}));Router.getInstance().navigateTo(Page.PASSWORD_DETAILS,group,Router.getInstance().currentRoute.queryParameters)})).catch((()=>{}));PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.CREDENTIAL_ROW_CLICKED);const searchTerm=Router.getInstance().currentRoute.queryParameters.get(UrlParam.SEARCH_TERM)||"";chrome.metricsPrivate.recordBoolean("PasswordManager.UI.OpenedPasswordDetailsWhileSearching",!!searchTerm)}async onItemChanged_(){if(this.item.entries.length>1){this.numberOfAccounts_=await PluralStringProxyImpl.getInstance().getPluralString("numberOfAccounts",this.item.entries.length)}}showNumberOfAccounts_(){return!this.searchTerm&&this.item.entries.length>1}getTitle_(){const term=this.searchTerm.trim().toLowerCase();if(!term){return this.item.name}if(this.item.name.includes(term)){return this.item.name}const entries=this.item.entries;const matchingUsername=entries.find((c=>c.username.toLowerCase().includes(term)))?.username;if(matchingUsername){return this.item.name+" • "+matchingUsername}const domains=Array.prototype.concat(...entries.map((c=>c.affiliatedDomains||[])));const matchingDomain=domains.find((d=>d.name.toLowerCase().includes(term)))?.name;if(matchingDomain){return this.item.name+" • "+matchingDomain}return this.item.name}getAriaLabel_(){return this.i18n("viewPasswordAriaDescription",this.item.name)}}customElements.define(PasswordListItemElement.is,PasswordListItemElement);function getTemplate$h(){return html`<!--_html_template_start_--><cr-dialog id="dialog">
  <div slot="title" class="dialog-title">[[getTitle_()]]</div>
  <div slot="body">
    <div>$i18n{authTimedOutDescription}</div>
  </div>
  <div slot="button-container">
    <cr-button class="action-button" autofocus on-click="onCloseButtonClick_">
      $i18n{gotIt}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AuthTimedOutDialogElementBase=I18nMixin(PolymerElement);class AuthTimedOutDialogElement extends AuthTimedOutDialogElementBase{static get is(){return"auth-timed-out-dialog"}static get template(){return getTemplate$h()}connectedCallback(){super.connectedCallback();this.$.dialog.showModal()}onCloseButtonClick_(){this.$.dialog.close()}getTitle_(){return this.i18n("authTimedOut",this.i18n("localPasswordManager"))}}customElements.define(AuthTimedOutDialogElement.is,AuthTimedOutDialogElement);function getTemplate$g(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style">#checkbox{--cr-checkbox-size:14px;--cr-checkbox-border-size:1px;--cr-checkbox-ripple-size:36px;flex-grow:0;margin-inline-end:8px}site-favicon{height:16px;padding-inline-end:8px;width:16px}#container{align-items:center;display:grid;flex-grow:1;grid-template-columns:auto 125px;padding-inline-end:8px;width:100%}.url-username-group{column-gap:16px;display:grid;grid-template-columns:fit-content(50%) 1fr;padding-inline-end:16px;width:100%}#website{color:var(--cr-primary-text-color)}#password{background-color:transparent;border:none;color:var(--cr-secondary-text-color)}#password:disabled{flex:none;font-family:inherit;margin-inline-start:auto;text-overflow:clip;width:50px}cr-icon-button{--cr-icon-button-margin-start:8px}cr-checkbox::part(label-container){clip:rect(0,0,0,0);display:block;position:fixed}</style>
<div class="flex-centered">
  <cr-checkbox id="checkbox" checked="{{checked}}">
    [[url]], [[username]]
  </cr-checkbox>
  <div id="container" class$="[[getElementClass_(first)]]">
    <div class="flex-centered">
      <site-favicon domain="[[url]]" aria-hidden="true">
      </site-favicon>
      <div class="url-username-group">
        <div id="website" class="text-elide">[[url]]</div>
        <div id="username" class="text-elide">[[username]]</div>
      </div>
    </div>
    <div class="flex-centered">
      <input id="password" readonly="readonly" class="text-elide password-input" type="[[getPasswordInputType(isPasswordVisible)]]" disabled$="[[!isPasswordVisible]]" value="[[getPasswordValue_(isPasswordVisible, password)]]">
      <cr-icon-button id="showPasswordButton" title="[[getShowHideButtonLabel(isPasswordVisible)]]" class$="[[getShowHideButtonIconClass(isPasswordVisible)]]" on-click="onShowHidePasswordButtonClick" aria-label="[[getShowHidePasswordButtonA11yLabel_(isPasswordVisible)]]">
      </cr-icon-button>
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PasswordPreviewItemElementBase=I18nMixin(ShowPasswordMixin(PolymerElement));class PasswordPreviewItemElement extends PasswordPreviewItemElementBase{static get is(){return"password-preview-item"}static get template(){return getTemplate$g()}static get properties(){return{passwordId:Number,url:String,username:String,password:String,first:Boolean,checked:{type:Boolean,value:true}}}getElementClass_(){return this.first?"":"hr"}getPasswordValue_(){return this.isPasswordVisible?this.password:" ".repeat(10)}getShowHidePasswordButtonA11yLabel_(){return this.i18n(this.isPasswordVisible?"hidePasswordA11yLabel":"showPasswordA11yLabel",this.username,this.url)}}customElements.define(PasswordPreviewItemElement.is,PasswordPreviewItemElement);function getTemplate$f(){return html`<!--_html_template_start_--><style include="shared-style">#avatar{border-radius:50%;height:16px;margin-inline-end:10px;width:16px}#passwords{margin-bottom:4px;margin-top:16px}div[slot=body]{max-height:60vh}</style>
<cr-dialog id="dialog">
  <div slot="title" class="dialog-title">$i18n{movePasswordsTitle}</div>
  <div slot="body">
    <div>$i18n{movePasswordsDescription}</div>
    <div id="passwords">
      <dom-repeat items="[[passwords]]">
        <template>
          <password-preview-item password-id="[[item.id]]" url="[[getUrl_(item)]]" username="[[item.username]]" password="[[item.password]]" first="[[!index]]" on-change="passwordSelected_">
          </password-preview-item>
        </template>
      </dom-repeat>
    </div>
  </div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="onCancel_" autofocus>
      $i18n{cancel}
    </cr-button>
    <cr-button id="move" class="action-button" on-click="onMoveButtonClick_" disabled="[[!selectedPasswordIds_.length]]">
      $i18n{movePasswordsButton}
    </cr-button>
  </div>
  <div slot="footer" class="flex-centered">
    <img id="avatar" src="[[avatarImage]]">
    <div id="accountEmail" class="label">[[accountEmail]]</div>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MoveToAccountStoreTrigger={SUCCESSFUL_LOGIN_WITH_PROFILE_STORE_PASSWORD:0,EXPLICITLY_TRIGGERED_IN_SETTINGS:1,EXPLICITLY_TRIGGERED_FOR_MULTIPLE_PASSWORDS_IN_SETTINGS:2,COUNT:3};const MovePasswordsDialogElementBase=UserUtilMixin(PolymerElement);class MovePasswordsDialogElement extends MovePasswordsDialogElementBase{static get is(){return"move-passwords-dialog"}static get template(){return getTemplate$f()}static get properties(){return{passwords:{type:Array,value:()=>[]},selectedPasswordIds_:{type:Array,valie:()=>[]}}}connectedCallback(){super.connectedCallback();chrome.metricsPrivate.recordEnumerationValue("PasswordManager.AccountStorage.MoveToAccountStoreFlowOffered",MoveToAccountStoreTrigger.EXPLICITLY_TRIGGERED_FOR_MULTIPLE_PASSWORDS_IN_SETTINGS,MoveToAccountStoreTrigger.COUNT);this.selectedPasswordIds_=this.passwords.map((item=>item.id));PasswordManagerImpl.getInstance().requestCredentialsDetails(this.selectedPasswordIds_).then((entries=>{this.passwords=entries;this.$.dialog.showModal()})).catch((()=>{this.$.dialog.close()}))}onCancel_(){this.$.dialog.cancel()}onMoveButtonClick_(){assert(this.isOptedInForAccountStorage);PasswordManagerImpl.getInstance().movePasswordsToAccount(this.selectedPasswordIds_);this.$.dialog.close()}getUrl_(password){assert(password.affiliatedDomains);assert(password.affiliatedDomains.length>0);return password.affiliatedDomains[0].name}passwordSelected_(){this.selectedPasswordIds_=Array.from(this.shadowRoot.querySelectorAll("password-preview-item")).filter((item=>item.checked)).map((item=>item.passwordId))}}customElements.define(MovePasswordsDialogElement.is,MovePasswordsDialogElement);function getTemplate$e(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style iron-flex">#header{align-items:center;display:flex}a[href]{color:var(--cr-link-color)}#addPasswordButton{height:auto;padding:3px 16px}#passwords{margin-top:20px}promo-card{margin-bottom:24px;margin-top:24px}password-list-item:first-of-type{border-top-left-radius:inherit;border-top-right-radius:inherit}password-list-item:last-of-type{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}</style>

<div id="header">
  <h2 class="flex page-title">$i18n{passwords}</h2>
  <cr-button id="addPasswordButton" on-click="onAddPasswordClick_" title="$i18n{addPasswordTitle}" hidden="[[passwordManagerDisabled_]]">
    $i18n{addPassword}
  </cr-button>
</div>
<div id="descriptionLabel" class="cr-secondary-text" hidden="[[!showPasswordsDescription_]]" inner-h-t-m-l="[[i18nAdvanced('passwordsSectionDescription')]]">
</div>
<div id="movePasswords" class="cr-secondary-text" hidden="[[!showMovePasswords_]]" on-click="onMovePasswordsClicked_" inner-h-t-m-l="[[getMovePasswordsText_(movePasswordsText_)]]">
</div>
<div id="importPasswords" class="cr-secondary-text" hidden="[[!showImportPasswordsOption_(groups_, passwordManagerDisabled_)]]" inner-h-t-m-l="[[importPasswordsText_]]">
</div>
<div id="noPasswordsFound" class="cr-secondary-text" hidden="[[!showNoPasswordsFound_(groups_, searchTerm_)]]">
  $i18n{noPasswordsFound}
</div>
<div class="card" id="passwords" role="list" hidden$="[[hideGroupsList_(groups_, searchTerm_)]]">
  <template id="passwordsList" is="dom-repeat" initial-count="50" items="[[groups_]]" filter="[[groupFilter_(searchTerm_)]]" rendered-item-count="{{shownGroupsCount_::dom-change}}" sort="[[computeSortFunction_(searchTerm_)]]">
    <password-list-item item="[[item]]" first="[[!index]]" on-password-details-shown="onPasswordDetailsShown_" search-term="[[searchTerm_]]" role="listitem">
    </password-list-item>
  </template>
</div>
<template is="dom-if" if="[[showAddPasswordDialog_]]" restamp>
  <add-password-dialog on-close="onAddPasswordDialogClose_" id="addPasswordDialog">
  </add-password-dialog>
</template>
<template is="dom-if" if="[[showAuthTimedOutDialog_]]" restamp>
  <auth-timed-out-dialog on-close="onAuthTimedOutDialogClose_" id="authTimedOutDialog">
  </auth-timed-out-dialog>
</template>
<template is="dom-if" if="[[showMovePasswordsDialog_]]" restamp>
  <move-passwords-dialog on-close="onMovePasswordsDialogClose_" id="movePasswordsDialog" passwords="[[passwordsOnDevice_]]">
  </move-passwords-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PasswordsSectionElementBase=PrefsMixin(UserUtilMixin(RouteObserverMixin(I18nMixin(PolymerElement))));class PasswordsSectionElement extends PasswordsSectionElementBase{constructor(){super(...arguments);this.groups_=[];this.setSavedPasswordsListener_=null}static get is(){return"passwords-section"}static get template(){return getTemplate$e()}static get properties(){return{focusConfig:{type:Object,observer:"focusConfigChanged_"},groups_:{type:Array,value:()=>[],observer:"onGroupsChanged_"},searchTerm_:{type:String,value:""},shownGroupsCount_:{type:Number,value:0,observer:"announceSearchResults_"},showAddPasswordDialog_:Boolean,showAuthTimedOutDialog_:Boolean,showMovePasswordsDialog_:Boolean,movePasswordsText_:String,importPasswordsText_:{type:String,computed:"computeImportPasswordsText_(isAccountStoreUser, "+"isSyncingPasswords, accountEmail)"},passwordsOnDevice_:{type:Number,computed:"computePasswordsOnDevice_(groups_)"},showMovePasswords_:{type:Boolean,computed:"computeShowMovePasswords_(isAccountStoreUser, "+"passwordsOnDevice_, searchTerm_)"},showPasswordsDescription_:{type:Boolean,computed:"computeShowPasswordsDescription_(groups_, searchTerm_)"},passwordManagerDisabled_:{type:Boolean,computed:"computePasswordManagerDisabled_("+"prefs.credentials_enable_service.enforcement, "+"prefs.credentials_enable_service.value)"},activeListItem_:{type:Object,value:null}}}static get observers(){return["updateImportPasswordsLink_(importPasswordsText_)"]}connectedCallback(){super.connectedCallback();const updateGroups=()=>{PasswordManagerImpl.getInstance().getCredentialGroups().then((groups=>this.groups_=groups))};this.setSavedPasswordsListener_=_passwordList=>{updateGroups()};updateGroups();PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setSavedPasswordsListener_);this.authTimedOutListener_=this.onAuthTimedOut_.bind(this);window.addEventListener("auth-timed-out",this.authTimedOutListener_)}disconnectedCallback(){super.disconnectedCallback();assert(this.setSavedPasswordsListener_);PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setSavedPasswordsListener_);this.setSavedPasswordsListener_=null;assert(this.authTimedOutListener_);window.removeEventListener("hashchange",this.authTimedOutListener_);this.authTimedOutListener_=null}currentRouteChanged(newRoute){const searchTerm=newRoute.queryParameters.get(UrlParam.SEARCH_TERM)||"";if(searchTerm!==this.searchTerm_){this.searchTerm_=searchTerm}}focusFirstResult(){if(!this.searchTerm_){return}const result=this.shadowRoot.querySelector("password-list-item");if(result){result.focus()}}hideGroupsList_(){return this.groups_.filter(this.groupFilter_()).length===0}groupFilter_(){const term=this.searchTerm_.trim().toLowerCase();return group=>group.name.toLowerCase().includes(term)||group.entries.some((credential=>credential.username.toLowerCase().includes(term)||credential.affiliatedDomains?.some((domain=>domain.name.toLowerCase().includes(term)))))}async announceSearchResults_(){if(!this.searchTerm_.trim()){return}const searchResult=await PluralStringProxyImpl.getInstance().getPluralString("searchResults",this.shownGroupsCount_);getInstance().announce(searchResult)}onAddPasswordClick_(){this.showAddPasswordDialog_=true}onAddPasswordDialogClose_(){this.showAddPasswordDialog_=false}onAuthTimedOut_(){this.showAuthTimedOutDialog_=true}onAuthTimedOutDialogClose_(){this.showAuthTimedOutDialog_=false}computePasswordsOnDevice_(){const localStorage=[chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT,chrome.passwordsPrivate.PasswordStoreSet.DEVICE];return this.groups_.map((group=>group.entries)).flat().filter((entry=>localStorage.includes(entry.storedIn)))}computeShowMovePasswords_(){return this.computePasswordsOnDevice_().length>0&&this.isAccountStoreUser&&!this.searchTerm_}async onGroupsChanged_(){this.movePasswordsText_=await PluralStringProxyImpl.getInstance().getPluralString("movePasswords",this.computePasswordsOnDevice_().length)}getMovePasswordsText_(){return sanitizeInnerHtml(this.movePasswordsText_)}onMovePasswordsClicked_(e){e.preventDefault();this.showMovePasswordsDialog_=true}onMovePasswordsDialogClose_(){this.showMovePasswordsDialog_=false}showImportPasswordsOption_(){if(!this.groups_||this.passwordManagerDisabled_){return false}return this.groups_.length===0}computeImportPasswordsText_(){if(this.isAccountStoreUser){return this.i18nAdvanced("emptyStateImportAccountStore")}if(this.isSyncingPasswords){return this.i18nAdvanced("emptyStateImportSyncing",{substitutions:[this.i18n("localPasswordManager"),this.accountEmail]})}return this.i18nAdvanced("emptyStateImportDevice")}updateImportPasswordsLink_(){const importLink=this.$.importPasswords.querySelector("a");assert(importLink);importLink.addEventListener("click",(event=>{event.preventDefault();const params=new URLSearchParams;params.set(UrlParam.START_IMPORT,"true");Router.getInstance().navigateTo(Page.SETTINGS,null,params)}))}computePasswordManagerDisabled_(){const pref=this.getPref("credentials_enable_service");return pref.enforcement===chrome.settingsPrivate.Enforcement.ENFORCED&&!pref.value}computeShowPasswordsDescription_(){return!this.searchTerm_&&this.groups_.length>0}showNoPasswordsFound_(){return this.hideGroupsList_()&&this.groups_.length>0}onPasswordDetailsShown_(e){this.activeListItem_=e.detail}focusConfigChanged_(_newConfig,oldConfig){assert(!oldConfig);this.focusConfig.set(Page.PASSWORD_DETAILS,(()=>{if(!this.activeListItem_){return}focusWithoutInk(this.activeListItem_)}))}computeSortFunction_(searchTerm){if(!searchTerm){return null}return function(a,b){const doesNameMatchA=a.name.toLowerCase().includes(searchTerm);const doesNameMatchB=b.name.toLowerCase().includes(searchTerm);if(doesNameMatchA===doesNameMatchB){return a.name.localeCompare(b.name)}return doesNameMatchA?-1:1}}}customElements.define(PasswordsSectionElement.is,PasswordsSectionElement);function getTemplate$d(){return html`<!--_html_template_start_-->    <style>:host{--cr-toggle-checked-bar-color:var(--google-blue-600);--cr-toggle-checked-button-color:var(--google-blue-600);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-600-rgb), .2);--cr-toggle-ripple-diameter:40px;--cr-toggle-unchecked-bar-color:var(--google-grey-400);--cr-toggle-unchecked-button-color:white;--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-600-rgb), .15);-webkit-tap-highlight-color:transparent;cursor:pointer;display:block;min-width:34px;outline:0;position:relative;width:34px}:host-context([chrome-refresh-2023]):host{--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on,
                var(--cr-fallback-color-primary));--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on,
                var(--cr-fallback-color-on-primary));--cr-toggle-unchecked-bar-color:var(--color-toggle-button-track-off,
                var(--cr-fallback-color-surface-variant));--cr-toggle-unchecked-button-color:var(--color-toggle-button-thumb-off,
                var(--cr-fallback-color-outline));--cr-toggle-checked-ripple-color:var(--cr-active-background-color);--cr-toggle-unchecked-ripple-color:var(--cr-active-background-color);--cr-toggle-ripple-diameter:20px;--cr-toggle-bar-width_:26px;height:fit-content;isolation:isolate;min-width:initial;width:fit-content}@media (forced-colors:active){:host{forced-color-adjust:none}}@media (prefers-color-scheme:dark){:host{--cr-toggle-checked-bar-color:var(--google-blue-300);--cr-toggle-checked-button-color:var(--google-blue-300);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-toggle-unchecked-bar-color:var(--google-grey-500);--cr-toggle-unchecked-button-color:var(--google-grey-300);--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}}:host([dark]){--cr-toggle-checked-bar-color:var(--google-blue-300);--cr-toggle-checked-button-color:var(--google-blue-300);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-toggle-unchecked-bar-color:var(--google-grey-500);--cr-toggle-unchecked-button-color:var(--google-grey-300);--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on-disabled,
                var(--cr-fallback-color-disabled-background));--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on-disabled, var(--cr-fallback-color-surface));--cr-toggle-unchecked-bar-color:transparent;--cr-toggle-unchecked-button-color:var(--color-toggle-button-thumb-off-disabled,
                var(--cr-fallback-color-disabled-foreground));opacity:1}#bar{background-color:var(--cr-toggle-unchecked-bar-color);border-radius:8px;height:12px;left:3px;position:absolute;top:2px;transition:background-color linear 80ms;width:28px;z-index:0}:host([checked]) #bar{background-color:var(--cr-toggle-checked-bar-color);opacity:var(--cr-toggle-checked-bar-opacity,.5)}:host-context([chrome-refresh-2023]) #bar{border:1px solid var(--cr-toggle-unchecked-button-color);border-radius:50px;box-sizing:border-box;display:block;height:16px;opacity:1;position:initial;width:var(--cr-toggle-bar-width_)}:host-context([chrome-refresh-2023]):host([checked]) #bar{border-color:var(--cr-toggle-checked-bar-color)}:host-context([chrome-refresh-2023]):host([disabled]) #bar{border-color:var(--cr-toggle-unchecked-button-color)}:host-context([chrome-refresh-2023]):host([disabled][checked]) #bar{border:none}:host-context([chrome-refresh-2023]):host(:focus-visible) #bar{outline:2px solid var(--cr-toggle-checked-bar-color);outline-offset:2px}#knob{background-color:var(--cr-toggle-unchecked-button-color);border-radius:50%;box-shadow:var(--cr-toggle-box-shadow,0 1px 3px 0 rgba(0,0,0,.4));display:block;height:16px;position:relative;transition:transform linear 80ms,background-color linear 80ms;width:16px;z-index:1}:host([checked]) #knob{background-color:var(--cr-toggle-checked-button-color);transform:translate3d(18px,0,0)}:host-context([dir=rtl]):host([checked]) #knob{transform:translate3d(-18px,0,0)}:host-context([chrome-refresh-2023]) #knob{--cr-toggle-knob-diameter_:8px;--cr-toggle-knob-center-edge-distance_:8px;--cr-toggle-knob-direction_:1;--cr-toggle-knob-travel-distance_:calc(
            0.5 * var(--cr-toggle-bar-width_) -
            var(--cr-toggle-knob-center-edge-distance_));--cr-toggle-knob-position-center_:calc(
            0.5 * var(--cr-toggle-bar-width_) + -50%);--cr-toggle-knob-position-start_:calc(
            var(--cr-toggle-knob-position-center_) -
            var(--cr-toggle-knob-direction_) *
            var(--cr-toggle-knob-travel-distance_));--cr-toggle-knob-position-end_:calc(
            var(--cr-toggle-knob-position-center_) +
            var(--cr-toggle-knob-direction_) *
            var(--cr-toggle-knob-travel-distance_));box-shadow:none;height:var(--cr-toggle-knob-diameter_);position:absolute;top:50%;transform:translate(var(--cr-toggle-knob-position-start_),-50%);transition:transform linear 80ms,background-color linear 80ms,width linear 80ms,height linear 80ms;width:var(--cr-toggle-knob-diameter_)}:host-context([dir=rtl][chrome-refresh-2023]) #knob{left:0;--cr-toggle-knob-direction_:-1}:host-context([chrome-refresh-2023]):host(:active) #knob{--cr-toggle-knob-diameter_:10px}:host-context([chrome-refresh-2023]):host([checked]) #knob{--cr-toggle-knob-diameter_:12px;transform:translate(var(--cr-toggle-knob-position-end_),-50%)}:host-context([chrome-refresh-2023]):host([checked]:active) #knob{--cr-toggle-knob-diameter_:14px}:host-context([chrome-refresh-2023]):host([checked]:active) #knob,:host-context([chrome-refresh-2023]):host([checked]:hover) #knob{--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on-hover,
                var(--cr-fallback-color-primary-container))}:host-context([chrome-refresh-2023]):host(:hover) #knob::before{background-color:var(--cr-hover-background-color);border-radius:50%;content:'';height:var(--cr-toggle-ripple-diameter);left:calc(var(--cr-toggle-knob-diameter_)/ 2);position:absolute;top:calc(var(--cr-toggle-knob-diameter_)/ 2);transform:translate(-50%,-50%);width:var(--cr-toggle-ripple-diameter)}paper-ripple{--paper-ripple-opacity:1;color:var(--cr-toggle-unchecked-ripple-color);height:var(--cr-toggle-ripple-diameter);left:50%;outline:var(--cr-toggle-ripple-ring,none);pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);transition:color linear 80ms;width:var(--cr-toggle-ripple-diameter)}:host([checked]) paper-ripple{color:var(--cr-toggle-checked-ripple-color)}:host-context([dir=rtl]) paper-ripple{left:auto;right:50%;transform:translate(50%,-50%)}</style>
    <span id="bar"></span>
    <span id="knob"></span>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MOVE_THRESHOLD_PX=5;const CrToggleElementBase=mixinBehaviors([PaperRippleBehavior],PolymerElement);class CrToggleElement extends CrToggleElementBase{constructor(){super(...arguments);this.boundPointerMove_=null;this.handledInPointerMove_=false;this.pointerDownX_=0}static get is(){return"cr-toggle"}static get template(){return getTemplate$d()}static get properties(){return{checked:{type:Boolean,value:false,reflectToAttribute:true,observer:"checkedChanged_",notify:true},dark:{type:Boolean,value:false,reflectToAttribute:true},disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"}}}ready(){super.ready();if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}this.setAttribute("aria-pressed",this.checked?"true":"false");this.setAttribute("aria-disabled",this.disabled?"true":"false");if(!document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("blur",this.hideRipple_.bind(this));this.addEventListener("focus",this.onFocus_.bind(this))}this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));this.addEventListener("pointerdown",this.onPointerDown_.bind(this));this.addEventListener("pointerup",this.onPointerUp_.bind(this))}connectedCallback(){super.connectedCallback();const direction=this.matches(":host-context([dir=rtl]) cr-toggle")?-1:1;this.boundPointerMove_=e=>{e.preventDefault();const diff=e.clientX-this.pointerDownX_;if(Math.abs(diff)<MOVE_THRESHOLD_PX){return}this.handledInPointerMove_=true;const shouldToggle=diff*direction<0&&this.checked||diff*direction>0&&!this.checked;if(shouldToggle){this.toggleState_(false)}}}checkedChanged_(){this.setAttribute("aria-pressed",this.checked?"true":"false")}disabledChanged_(){this.setAttribute("tabindex",this.disabled?"-1":"0");this.setAttribute("aria-disabled",this.disabled?"true":"false")}onFocus_(){this.getRipple().showAndHoldDown()}hideRipple_(){this.getRipple().clear()}onPointerUp_(){assert(this.boundPointerMove_);this.removeEventListener("pointermove",this.boundPointerMove_);this.hideRipple_()}onPointerDown_(e){if(e.button!==0){return}this.setPointerCapture(e.pointerId);this.pointerDownX_=e.clientX;this.handledInPointerMove_=false;assert(this.boundPointerMove_);this.addEventListener("pointermove",this.boundPointerMove_)}onClick_(e){e.stopPropagation();e.preventDefault();if(this.handledInPointerMove_){return}this.toggleState_(false)}toggleState_(fromKeyboard){if(this.disabled){return}if(!fromKeyboard){this.hideRipple_()}this.checked=!this.checked;this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:this.checked}))}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.toggleState_(true)}}onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.key===" "){this.toggleState_(true)}}_createRipple(){this._rippleContainer=this.$.knob;const ripple=super._createRipple();ripple.id="ink";ripple.setAttribute("recenters","");ripple.classList.add("circle","toggle-ink");return ripple}}customElements.define(CrToggleElement.is,CrToggleElement);
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrPolicyIndicatorType;(function(CrPolicyIndicatorType){CrPolicyIndicatorType["DEVICE_POLICY"]="devicePolicy";CrPolicyIndicatorType["EXTENSION"]="extension";CrPolicyIndicatorType["NONE"]="none";CrPolicyIndicatorType["OWNER"]="owner";CrPolicyIndicatorType["PRIMARY_USER"]="primary_user";CrPolicyIndicatorType["RECOMMENDED"]="recommended";CrPolicyIndicatorType["USER_POLICY"]="userPolicy";CrPolicyIndicatorType["PARENT"]="parent";CrPolicyIndicatorType["CHILD_RESTRICTION"]="childRestriction"})(CrPolicyIndicatorType||(CrPolicyIndicatorType={}));const CrPolicyIndicatorMixin=dedupingMixin((superClass=>{class CrPolicyIndicatorMixin extends superClass{static get properties(){return{indicatorType:{type:String,value:CrPolicyIndicatorType.NONE},indicatorSourceName:{type:String,value:""},indicatorVisible:{type:Boolean,computed:"getIndicatorVisible_(indicatorType)"},indicatorIcon:{type:String,computed:"getIndicatorIcon_(indicatorType)"}}}getIndicatorVisible_(type){return type!==CrPolicyIndicatorType.NONE}getIndicatorIcon_(type){switch(type){case CrPolicyIndicatorType.EXTENSION:return"cr:extension";case CrPolicyIndicatorType.NONE:return"";case CrPolicyIndicatorType.PRIMARY_USER:return"cr:group";case CrPolicyIndicatorType.OWNER:return"cr:person";case CrPolicyIndicatorType.USER_POLICY:case CrPolicyIndicatorType.DEVICE_POLICY:case CrPolicyIndicatorType.RECOMMENDED:return"cr20:domain";case CrPolicyIndicatorType.PARENT:case CrPolicyIndicatorType.CHILD_RESTRICTION:return"cr20:kite";default:assertNotReached()}}getIndicatorTooltip(type,name,matches){if(!window.CrPolicyStrings){return""}const CrPolicyStrings=window.CrPolicyStrings;switch(type){case CrPolicyIndicatorType.EXTENSION:return name.length>0?CrPolicyStrings.controlledSettingExtension.replace("$1",name):CrPolicyStrings.controlledSettingExtensionWithoutName;case CrPolicyIndicatorType.PRIMARY_USER:return CrPolicyStrings.controlledSettingShared.replace("$1",name);case CrPolicyIndicatorType.OWNER:return name.length>0?CrPolicyStrings.controlledSettingWithOwner.replace("$1",name):CrPolicyStrings.controlledSettingNoOwner;case CrPolicyIndicatorType.USER_POLICY:case CrPolicyIndicatorType.DEVICE_POLICY:return CrPolicyStrings.controlledSettingPolicy;case CrPolicyIndicatorType.RECOMMENDED:return matches?CrPolicyStrings.controlledSettingRecommendedMatches:CrPolicyStrings.controlledSettingRecommendedDiffers;case CrPolicyIndicatorType.PARENT:return CrPolicyStrings.controlledSettingParent;case CrPolicyIndicatorType.CHILD_RESTRICTION:return CrPolicyStrings.controlledSettingChildRestriction}return""}}return CrPolicyIndicatorMixin}));function getTemplate$c(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style"></style>
    <cr-tooltip-icon id="tooltipIcon" hidden$="[[!indicatorVisible]]" tooltip-text="[[indicatorTooltip]]" icon-class="[[indicatorIcon]]" icon-aria-label="[[iconAriaLabel]]" exportparts="tooltip">
    </cr-tooltip-icon>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrPolicyPrefIndicatorElementBase=CrPolicyIndicatorMixin(PolymerElement);class CrPolicyPrefIndicatorElement extends CrPolicyPrefIndicatorElementBase{static get is(){return"cr-policy-pref-indicator"}static get template(){return getTemplate$c()}static get properties(){return{iconAriaLabel:String,indicatorType:{type:String,value:CrPolicyIndicatorType.NONE,computed:"getIndicatorTypeForPref_(pref.*, associatedValue)"},indicatorTooltip:{type:String,computed:"getIndicatorTooltipForPref_(indicatorType, pref.*)"},pref:Object,associatedValue:Object}}getIndicatorTypeForPref_(){assert(this.pref);const{enforcement:enforcement,userSelectableValues:userSelectableValues,controlledBy:controlledBy,recommendedValue:recommendedValue}=this.pref;if(enforcement===chrome.settingsPrivate.Enforcement.RECOMMENDED){if(this.associatedValue!==undefined&&this.associatedValue!==recommendedValue){return CrPolicyIndicatorType.NONE}return CrPolicyIndicatorType.RECOMMENDED}if(enforcement===chrome.settingsPrivate.Enforcement.ENFORCED){if(userSelectableValues!==undefined){if(recommendedValue&&this.associatedValue===recommendedValue){return CrPolicyIndicatorType.RECOMMENDED}else if(userSelectableValues.includes(this.associatedValue)){return CrPolicyIndicatorType.NONE}}switch(controlledBy){case chrome.settingsPrivate.ControlledBy.EXTENSION:return CrPolicyIndicatorType.EXTENSION;case chrome.settingsPrivate.ControlledBy.PRIMARY_USER:return CrPolicyIndicatorType.PRIMARY_USER;case chrome.settingsPrivate.ControlledBy.OWNER:return CrPolicyIndicatorType.OWNER;case chrome.settingsPrivate.ControlledBy.USER_POLICY:return CrPolicyIndicatorType.USER_POLICY;case chrome.settingsPrivate.ControlledBy.DEVICE_POLICY:return CrPolicyIndicatorType.DEVICE_POLICY;case chrome.settingsPrivate.ControlledBy.PARENT:return CrPolicyIndicatorType.PARENT;case chrome.settingsPrivate.ControlledBy.CHILD_RESTRICTION:return CrPolicyIndicatorType.CHILD_RESTRICTION}}if(enforcement===chrome.settingsPrivate.Enforcement.PARENT_SUPERVISED){return CrPolicyIndicatorType.PARENT}return CrPolicyIndicatorType.NONE}getIndicatorTooltipForPref_(){if(!this.pref){return""}const matches=this.pref&&this.pref.value===this.pref.recommendedValue;return this.getIndicatorTooltip(this.indicatorType,this.pref.controlledByName||"",matches)}getFocusableElement(){return this.$.tooltipIcon.getFocusableElement()}}customElements.define(CrPolicyPrefIndicatorElement.is,CrPolicyPrefIndicatorElement);function getTemplate$b(){return html`<!--_html_template_start_--><style include="cr-actionable-row-style iron-flex cr-shared-style shared-style">:host{--cr-icon-button-margin-end:20px;padding:0 var(--cr-section-padding)}#outerRow{align-items:center;display:flex;min-height:var(--two-line-section-min-height);width:100%}#outerRow[noSubLabel]{min-height:var(--section-min-height)}#labelWrapper{margin-inline-end:var(--control-label-spacing);padding:var(--cr-section-vertical-padding) 0}cr-policy-pref-indicator{margin-inline-end:var(--cr-controlled-by-spacing)}</style>
<div id="outerRow" nosublabel$="[[!subLabel]]">
  <div class="flex" id="labelWrapper">
    <div class="label" aria-hidden="true">[[label]]</div>
    <div class="cr-secondary-text label" id="sub-label" hidden="[[!subLabel]]">
      <span id="sub-label-text" aria-hidden="true">
        [[subLabel]]
      </span>
    </div>
  </div>
  <template is="dom-if" if="[[hasPrefPolicyIndicator_(pref.*)]]">
    <cr-policy-pref-indicator pref="[[pref]]" icon-aria-label="[[label]]">
    </cr-policy-pref-indicator>
  </template>
  <cr-toggle id="control" checked="{{checked}}" disabled="[[controlDisabled_(pref.*, disabled)]]" on-change="onToggleClick_" aria-label="[[getAriaLabel_(label, subLabel)]]">
  </cr-toggle>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PrefToggleButtonElement extends PolymerElement{static get is(){return"pref-toggle-button"}static get template(){return getTemplate$b()}static get properties(){return{label:{type:String,value:""},subLabel:{type:String,value:""},checked:{type:Boolean,value:false,notify:true,reflectToAttribute:true},disabled:{type:Boolean,value:false},changeRequiresValidation:{type:Boolean,value:false},noExtensionIndicator:Boolean,pref:Object}}static get observers(){return["prefValueChanged_(pref.value)","prefEnforcementChanged_(pref.enforcement)"]}ready(){super.ready();this.addEventListener("click",this.onClick_)}onClick_(e){e.stopPropagation();if(this.disabled){return}if(this.changeRequiresValidation){this.dispatchEvent(new CustomEvent("validate-and-change-pref",{bubbles:true,composed:true}));return}this.checked=!this.checked;this.updatePrefValue_()}onToggleClick_(){if(this.changeRequiresValidation){this.checked=!this.checked;this.dispatchEvent(new CustomEvent("validate-and-change-pref",{bubbles:true,composed:true}));return}this.updatePrefValue_()}prefValueChanged_(prefValue){this.checked=prefValue}prefEnforcementChanged_(enforcement){this.disabled=enforcement===chrome.settingsPrivate.Enforcement.ENFORCED;this.toggleAttribute("effectively-disabled_",this.disabled)}updatePrefValue_(){this.set("pref.value",this.checked)}getAriaLabel_(){if(!this.subLabel){return this.label}return[this.label,this.subLabel].join(". ")}isPrefEnforced_(){return!!this.pref&&this.pref.enforcement===chrome.settingsPrivate.Enforcement.ENFORCED}hasPrefPolicyIndicator_(){if(!this.pref){return false}if(this.noExtensionIndicator&&this.pref.controlledBy===chrome.settingsPrivate.ControlledBy.EXTENSION){return false}return this.isPrefEnforced_()||chrome.settingsPrivate.Enforcement.RECOMMENDED===this.pref.enforcement}controlDisabled_(){return this.disabled||this.isPrefEnforced_()||!!(this.pref&&this.pref.userControlDisabled)}}customElements.define(PrefToggleButtonElement.is,PrefToggleButtonElement);const styleMod$1=document.createElement("dom-module");styleMod$1.appendChild(html`
  <template>
    <style>
:host-context([cros]) a:not(.item)[href]{color:var(--cros-link-color)}:host-context([cros]) cr-button[has-prefix-icon_],:host-context([cros]) cr-button[has-suffix-icon_]{--iron-icon-fill-color:currentColor}:host-context([cros]) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-bg-color-elevation-3);background-image:none;box-shadow:var(--cros-elevation-3-shadow)}:host-context([cros]) cr-radio-button{--cr-radio-button-checked-color:var(--cros-radio-button-color);--cr-radio-button-checked-ripple-color:var(--cros-radio-button-ripple-color);--cr-radio-button-unchecked-color:var(--cros-radio-button-color-unchecked);--cr-radio-button-unchecked-ripple-color:var(--cros-radio-button-ripple-color-unchecked)}:host-context([cros]) cr-toast{--cr-toast-background-color:var(--cros-toast-background-color);--cr-toast-background:var(--cros-toast-background-color);--cr-toast-text-color:var(--cros-toast-text-color);--iron-icon-fill-color:var(--cros-toast-icon-color)}:host-context([cros]) cr-toast .error-message{color:var(--cros-toast-text-color)}:host-context([cros]) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-switch-track-color-active);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-switch-knob-color-active);--cr-toggle-checked-ripple-color:var(--cros-focus-aura-color);--cr-toggle-unchecked-bar-color:var(--cros-switch-track-color-inactive);--cr-toggle-unchecked-button-color:var(--cros-switch-knob-color-inactive);--cr-toggle-unchecked-ripple-color:var(--cros-ripple-color);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context([cros]) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-focus-ring-color)}:host-context([cros]) .primary-toggle{color:var(--cros-text-color-secondary)}:host-context([cros]) .primary-toggle[checked]{color:var(--cros-text-color-prominent)}:host-context([cros]) paper-spinner-lite{--paper-spinner-color:var(--cros-icon-color-prominent)}:host-context([cros]) cr-tooltip-icon{--cr-link-color:var(--cros-tooltip-link-color)}:host-context(body.jelly-enabled){--cros-button-label-color-primary:var(--cros-sys-on_primary);--cros-link-color:var(--cros-sys-primary);--cros-separator-color:var(--cros-sys-separator);--cros-tab-slider-track-color:var(--cros-sys-surface_variant, 80%);--cr-form-field-label-color:var(--cros-sys-on_surface);--cr-link-color:var(--cros-sys-primary);--cr-primary-text-color:var(--cros-sys-on_surface);--cr-secondary-text-color:var(--cros-sys-on_surface_variant)}:host-context(body.jelly-enabled) cr-button{--text-color:var(--cros-sys-on_primary_container);--ink-color:var(--cros-sys-ripple_primary);--iron-icon-fill-color:currentColor;--hover-bg-color:var(--cros-sys-hover_on_subtle);--ripple-opacity:.1;--bg-action:var(--cros-sys-primary);--ink-color-action:var(--cros-sys-ripple_primary);--text-color-action:var(--cros-sys-on_primary);--hover-bg-action:var(--cros-sys-hover_on_prominent);--ripple-opacity-action:1;--disabled-bg:var(--cros-sys-disabled_container);--disabled-bg-action:var(--cros-sys-disabled_container);--disabled-text-color:var(--cros-sys-disabled);background-color:var(--cros-sys-primary_container);border:none}:host-context(body.jelly-enabled) cr-button:hover::part(hoverBackground){background-color:var(--hover-bg-color);display:block}:host-context(body.jelly-enabled) cr-button.action-button:not(:active):hover,:host-context(body.jelly-enabled) cr-button:active{box-shadow:none}:host-context(body.jelly-enabled) cr-button.action-button{background-color:var(--bg-action)}:host-context(body.jelly-enabled) cr-button.action-button:hover::part(hoverBackground){background-color:var(--hover-bg-action)}:host-context(body.jelly-enabled) cr-button[disabled]{background-color:var(--cros-sys-disabled_container)}:host-context(body.jelly-enabled):host-context(.focus-outline-visible) cr-button:focus{box-shadow:none;outline:2px solid var(--cros-sys-focus_ring)}:host-context(body.jelly-enabled) cr-checkbox{--cr-checkbox-checked-box-color:var(--cros-sys-primary);--cr-checkbox-ripple-checked-color:var(--cros-sys-ripple_primary);--cr-checkbox-checked-ripple-opacity:1;--cr-checkbox-mark-color:var(--cros-sys-inverse_on_surface);--cr-checkbox-ripple-unchecked-color:var(--cros-sys-ripple_primary);--cr-checkbox-unchecked-box-color:var(--cros-sys-on_surface);--cr-checkbox-unchecked-ripple-opacity:1}:host-context(body.jelly-enabled) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-sys-base_elevated);background-image:none;box-shadow:0 0 12px 0 var(--cros-sys-shadow)}:host-context(body.jelly-enabled) cr-dialog>[slot=title]{font:var(--cros-display-7-font)}:host-context(body.jelly-enabled) cr-drawer{--cr-drawer-background-color:var(--cros-sys-app_base_shaded)}:host-context(body.jelly-enabled) cr-expand-button::part(icon),:host-context(body.jelly-enabled) cr-icon-button,:host-context(body.jelly-enabled) cr-link-row::part(icon){--cr-icon-button-fill-color:var(--cros-sys-secondary)}:host-context(body.jelly-enabled) cr-input,:host-context(body.jelly-enabled) cr-search-field::part(searchInput),:host-context(body.jelly-enabled) cr-textarea{--cr-input-background-color:var(--cros-sys-input_field_on_base);--cr-input-error-color:var(--cros-sys-error);--cr-input-focus-color:var(--cros-sys-primary);--cr-input-placeholder-color:var(--cros-sys-secondary)}:host-context(body.jelly-enabled) .md-select{--md-select-bg-color:var(--cros-sys-input_field_on_base);--md-select-focus-shadow-color:var(--cros-sys-primary);--md-select-option-bg-color:var(--cros-sys-base_elevated);--md-select-text-color:var(--cros-sys-on_surface)}:host-context(body.jelly-enabled) cr-action-menu{--cr-menu-background-color:var(--cros-sys-base_elevated);--cr-menu-background-focus-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled),:host-context(body.jelly-enabled) cr-radio-button{--cr-radio-button-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--cr-radio-button-unchecked-color:var(--cros-sys-on_surface);--cr-radio-button-unchecked-ripple-color:var(--cros-sys-ripple_neutral_on_subtle)}:host-context(body.jelly-enabled) cr-card-radio-button{--cr-card-background-color:var(--cros-sys-app_base);--cr-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--hover-bg-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled) cr-search-field{--cr-search-field-clear-icon-fill:var(--cros-sys-primary);--cr-search-field-clear-icon-margin-end:6px;--cr-search-field-input-border-bottom:none;--cr-search-field-input-padding-start:8px;--cr-search-field-input-underline-border-radius:4px;--cr-search-field-search-icon-display:none;--cr-search-field-search-icon-fill:var(--cros-sys-primary);--cr-search-field-search-icon-inline-display:block;--cr-search-field-search-icon-inline-margin-start:6px;border-radius:4px}:host-context(body.jelly-enabled) cr-slider{--cr-slider-active-color:var(--cros-sys-primary);--cr-slider-container-color:var(--cros-sys-primary_container);--cr-slider-container-disabled-color:var(--cros-sys-disabled_container);--cr-slider-disabled-color:var(--cros-sys-disabled);--cr-slider-knob-active-color:var(--cros-sys-primary);--cr-slider-knob-disabled-color:var(--cros-sys-disabled);--cr-slider-marker-active-color:var(--cros-sys-primary_container);--cr-slider-marker-color:var(--cros-sys-primary);--cr-slider-marker-disabled-color:var(--cros-sys-disabled);--cr-slider-ripple-color:var(--cros-sys-hover_on_prominent)}:host-context(body.jelly-enabled) cr-slider:not([disabled])::part(knob){background-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-slider[disabled]::part(knob){border:none}:host-context(body.jelly-enabled) cr-slider::part(label){background:var(--cros-sys-primary);color:var(--cros-sys-on_primary)}:host-context(body.jelly-enabled) cr-tabs{--cr-tabs-selected-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-sys-primary_container);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-sys-primary);--cr-toggle-checked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-unchecked-bar-color:var(--cros-sys-secondary);--cr-toggle-unchecked-button-color:var(--cros-sys-surface_variant);--cr-toggle-unchecked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context(body.jelly-enabled) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-sys-focus_ring)}
    </style>
  </template>
`.content);styleMod$1.register("cros-color-overrides");
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionControlBrowserProxyImpl{disableExtension(extensionId){chrome.send("disableExtension",[extensionId])}manageExtension(extensionId){window.open("chrome://extensions?id="+extensionId)}static getInstance(){return instance$1||(instance$1=new ExtensionControlBrowserProxyImpl)}static setInstance(obj){instance$1=obj}}let instance$1=null;function getTemplate$a(){return html`<!--_html_template_start_--><style include="cros-color-overrides">:host{align-items:center;display:flex;margin-inline-start:36px;min-height:var(--cr-section-min-height)}img{margin-inline-end:16px}iron-icon[icon='cr:open-in-new']{fill:var(--text-color);height:var(--cr-icon-size);width:var(--cr-icon-size)}#disable{margin-inline-start:8px}:host>span{flex:1;margin-inline-end:8px}</style>
<img role="presentation" src="chrome://extension-icon/[[extensionId]]/20/1">
<span>[[getLabel_(extensionName)]]</span>
<cr-button id="manage" on-click="onManageClick_">
  $i18n{manage}
  <iron-icon icon="cr:open-in-new" slot="suffix-icon"></iron-icon>
</cr-button>
<template is="dom-if" if="[[extensionCanBeDisabled]]" restamp>
  <cr-button id="disable" on-click="onDisableClick_">$i18n{disable}</cr-button>
</template>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionControlledIndicatorElement extends PolymerElement{static get is(){return"extension-controlled-indicator"}static get template(){return getTemplate$a()}static get properties(){return{extensionCanBeDisabled:Boolean,extensionId:String,extensionName:String}}getLabel_(){return loadTimeData.getStringF("controlledByExtension",this.extensionName)}onManageClick_(){const manageUrl="chrome://extensions/?id="+this.extensionId;OpenWindowProxyImpl.getInstance().openUrl(manageUrl)}onDisableClick_(){assert(this.extensionCanBeDisabled);ExtensionControlBrowserProxyImpl.getInstance().disableExtension(this.extensionId);this.dispatchEvent(new CustomEvent("extension-disable",{bubbles:true,composed:true}))}}customElements.define(ExtensionControlledIndicatorElement.is,ExtensionControlledIndicatorElement);function getTemplate$9(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style">#blockedSitesTitle{margin-top:28px}.blocked-site-content{border-top:var(--cr-separator-line);flex:1;min-height:var(--section-min-height)}.blocked-site-content[first]{border-top:none}#blockedSitesHeader,.favicon{margin-inline-end:20px;margin-inline-start:20px}.site-url{flex:1}cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-margin-start:0px;--cr-icon-button-margin-end:10px}@media all and (display-mode:standalone){#addShortcutBanner{display:none}}pref-toggle-button:first-of-type{border-top-left-radius:inherit;border-top-right-radius:inherit}cr-link-row:last-of-type{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}</style>
<h2 class="page-title">$i18n{settings}</h2>
<div class="card">
  <pref-toggle-button id="passwordToggle" no-extension-indicator label="$i18n{savePasswordsLabel}" pref="{{prefs.credentials_enable_service}}">
  </pref-toggle-button>
  <template is="dom-if" if="[[prefs.credentials_enable_service.extensionId]]">
    <div class="cr-row continuation">
      <extension-controlled-indicator id="passwordsExtensionIndicator" extension-id="[[prefs.credentials_enable_service.extensionId]]" extension-name="[[
              prefs.credentials_enable_service.controlledByName]]" extension-can-be-disabled="[[
              prefs.credentials_enable_service.extensionCanBeDisabled]]">
      </extension-controlled-indicator>
    </div>
  </template>
  <pref-toggle-button id="autosigninToggle" class="hr" label="$i18n{autosigninLabel}" sub-label="$i18n{autosigninDescription}" pref="{{prefs.credentials_enable_autosignin}}">
  </pref-toggle-button>
  
  <template is="dom-if" if="[[isEligibleForAccountStorage]]">
    <pref-toggle-button id="accountStorageToggle" class="hr" label="$i18n{accountStorageToggleLabel}" sub-label="[[accountEmail]]" checked="[[isAccountStoreUser]]" change-requires-validation on-validate-and-change-pref="changeAccountStorageOptIn_">
    </pref-toggle-button>
  </template>
  <cr-link-row id="trustedVaultBanner" class="cr-row" label="[[getTrustedVaultBannerTitle_(trustedVaultBannerState_)]]" sub-label="[[getTrustedVaultBannerDescription_(trustedVaultBannerState_)]]" hidden$="[[shouldHideTrustedVaultBanner_(trustedVaultBannerState_)]]" button-aria-description="$i18n{opensInNewTab}" on-click="onTrustedVaultBannerClick_" external>
  </cr-link-row>
  <template is="dom-if" if="[[!passwordManagerDisabled_]]" restamp>
    <passwords-importer account-email="[[accountEmail]]" is-account-store-user="[[isAccountStoreUser]]" is-user-syncing-passwords="[[isSyncingPasswords]]">
    </passwords-importer>
  </template>
  <template is="dom-if" if="[[hasPasswordsToExport_]]" restamp>
    <passwords-exporter></passwords-exporter>
  </template>
  <template is="dom-if" if="[[canAddShortcut_]]" on-dom-change="onShortcutBannerDomChanged_" restamp>
    <cr-link-row id="addShortcutBanner" class="cr-row settings-cr-link-row" on-click="onAddShortcutClick_" label="$i18n{addShortcut}" sub-label="$i18n{addShortcutDescription}" role-description="button">
    </cr-link-row>
  </template>
  
  
</div>
<div hidden="[[!blockedSites_.length]]">
  <h3 id="blockedSitesTitle" class="page-title">$i18n{blockedSitesTitle}</h3>
  <div class="card" id="blockedSites">
    <div class="flex-centered single-line-label">
      <div id="blockedSitesHeader" class="cr-secondary-text label">
        $i18n{blockedSitesDescription}
      </div>
    </div>
    <div id="blockedSitesList" class="hr">
      <template is="dom-repeat" items="[[blockedSites_]]">
        <div class="flex-centered">
          <site-favicon class="favicon" domain="[[item.urls.link]]">
          </site-favicon>
          <div class="blocked-site-content flex-centered" first$="[[!index]]">
            <div class="label site-url">[[item.urls.shown]]</div>
            <cr-icon-button class="icon-clear" id="removeBlockedValueButton" on-click="onRemoveBlockedSiteClick_" title="$i18n{deletePassword}" aria-label="[[getAriaLabelForBlockedSite_(item)]]">
            </cr-icon-button>
          </div>
        </div>
      </template>
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PASSWORD_MANAGER_ADD_SHORTCUT_ELEMENT_ID="PasswordManagerUI::kAddShortcutElementId";const PASSWORD_MANAGER_ADD_SHORTCUT_CUSTOM_EVENT_ID="PasswordManagerUI::kAddShortcutCustomEventId";const SettingsSectionElementBase=HelpBubbleMixin(RouteObserverMixin(PrefsMixin(UserUtilMixin(WebUiListenerMixin(I18nMixin(PolymerElement))))));class SettingsSectionElement extends SettingsSectionElementBase{constructor(){super(...arguments);this.setBlockedSitesListListener_=null;this.setCredentialsChangedListener_=null}static get is(){return"settings-section"}static get template(){return getTemplate$9()}static get properties(){return{blockedSites_:{type:Array,value:()=>[]},hasPasswordsToExport_:{type:Boolean,value:false},hasPasskeys_:{type:Boolean,value:false},passwordManagerDisabled_:{type:Boolean,computed:"computePasswordManagerDisabled_("+"prefs.credentials_enable_service.enforcement, "+"prefs.credentials_enable_service.value)"},trustedVaultBannerState_:{type:Object,value:TrustedVaultBannerState.NOT_SHOWN},canAddShortcut_:{type:Boolean,value(){return loadTimeData.getBoolean("canAddShortcut")}}}}ready(){super.ready();chrome.metricsPrivate.recordBoolean("PasswordManager.OpenedAsShortcut",window.matchMedia("(display-mode: standalone)").matches)}connectedCallback(){super.connectedCallback();this.setBlockedSitesListListener_=blockedSites=>{this.blockedSites_=blockedSites};PasswordManagerImpl.getInstance().getBlockedSitesList().then((blockedSites=>this.blockedSites_=blockedSites));PasswordManagerImpl.getInstance().addBlockedSitesListChangedListener(this.setBlockedSitesListListener_);this.setCredentialsChangedListener_=passwords=>{this.hasPasswordsToExport_=passwords.length>0};PasswordManagerImpl.getInstance().getSavedPasswordList().then(this.setCredentialsChangedListener_);PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setCredentialsChangedListener_);const trustedVaultStateChanged=state=>{this.trustedVaultBannerState_=state};const syncBrowserProxy=SyncBrowserProxyImpl.getInstance();syncBrowserProxy.getTrustedVaultBannerState().then(trustedVaultStateChanged);this.addWebUiListener("trusted-vault-banner-state-changed",trustedVaultStateChanged)}disconnectedCallback(){super.disconnectedCallback();assert(this.setBlockedSitesListListener_);PasswordManagerImpl.getInstance().removeBlockedSitesListChangedListener(this.setBlockedSitesListListener_);this.setBlockedSitesListListener_=null;assert(this.setCredentialsChangedListener_);PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setCredentialsChangedListener_);this.setCredentialsChangedListener_=null}currentRouteChanged(route){const param=route.queryParameters.get(UrlParam.START_IMPORT)||"";if(param==="true"){const importer=this.shadowRoot.querySelector("passwords-importer");assert(importer);importer.launchImport();const params=new URLSearchParams;Router.getInstance().updateRouterParams(params)}}onShortcutBannerDomChanged_(){const addShortcutBanner=this.root.querySelector("#addShortcutBanner");if(addShortcutBanner){this.registerHelpBubble(PASSWORD_MANAGER_ADD_SHORTCUT_ELEMENT_ID,addShortcutBanner)}}onAddShortcutClick_(){this.notifyHelpBubbleAnchorCustomEvent(PASSWORD_MANAGER_ADD_SHORTCUT_ELEMENT_ID,PASSWORD_MANAGER_ADD_SHORTCUT_CUSTOM_EVENT_ID);PasswordManagerImpl.getInstance().showAddShortcutDialog()}onRemoveBlockedSiteClick_(event){PasswordManagerImpl.getInstance().removeBlockedSite(event.model.item.id)}onTrustedVaultBannerClick_(){switch(this.trustedVaultBannerState_){case TrustedVaultBannerState.OPTED_IN:OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString("trustedVaultLearnMoreUrl"));break;case TrustedVaultBannerState.OFFER_OPT_IN:OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString("trustedVaultOptInUrl"));break;case TrustedVaultBannerState.NOT_SHOWN:default:assertNotReached()}}getTrustedVaultBannerTitle_(){switch(this.trustedVaultBannerState_){case TrustedVaultBannerState.OPTED_IN:return this.i18n("trustedVaultBannerLabelOptedIn");case TrustedVaultBannerState.OFFER_OPT_IN:return this.i18n("trustedVaultBannerLabelOfferOptIn");case TrustedVaultBannerState.NOT_SHOWN:return"";default:assertNotReached()}}getTrustedVaultBannerDescription_(){switch(this.trustedVaultBannerState_){case TrustedVaultBannerState.OPTED_IN:return this.i18n("trustedVaultBannerSubLabelOptedIn");case TrustedVaultBannerState.OFFER_OPT_IN:return this.i18n("trustedVaultBannerSubLabelOfferOptIn");case TrustedVaultBannerState.NOT_SHOWN:return"";default:assertNotReached()}}shouldHideTrustedVaultBanner_(){return this.trustedVaultBannerState_===TrustedVaultBannerState.NOT_SHOWN}getAriaLabelForBlockedSite_(blockedSite){return this.i18n("removeBlockedAriaDescription",blockedSite.urls.shown)}changeAccountStorageOptIn_(){if(this.isOptedInForAccountStorage){this.optOutFromAccountStorage()}else{this.optInForAccountStorage()}}computePasswordManagerDisabled_(){const pref=this.getPref("credentials_enable_service");return pref.enforcement===chrome.settingsPrivate.Enforcement.ENFORCED&&!pref.value}}customElements.define(SettingsSectionElement.is,SettingsSectionElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrMenuSelectorBase=mixinBehaviors([IronSelectableBehavior],PolymerElement);class CrMenuSelector extends CrMenuSelectorBase{static get is(){return"cr-menu-selector"}connectedCallback(){super.connectedCallback();this.focusOutlineManager_=FocusOutlineManager.forDocument(document)}ready(){super.ready();this.setAttribute("role","menu");this.addEventListener("focusin",this.onFocusin_.bind(this));this.addEventListener("keydown",this.onKeydown_.bind(this));this.addEventListener("iron-deselect",(e=>this.onIronDeselected_(e)));this.addEventListener("iron-select",(e=>this.onIronSelected_(e)))}getAllFocusableItems_(){return Array.from(this.querySelectorAll("[role=menuitem]:not([disabled]):not([hidden])"))}onFocusin_(e){const focusMovedWithKeyboard=this.focusOutlineManager_.visible;const focusMovedFromOutside=e.relatedTarget===null||!this.contains(e.relatedTarget);if(focusMovedWithKeyboard&&focusMovedFromOutside){this.getAllFocusableItems_()[0].focus()}}onIronDeselected_(e){e.detail.item.removeAttribute("aria-current")}onIronSelected_(e){e.detail.item.setAttribute("aria-current","page")}onKeydown_(event){const items=this.getAllFocusableItems_();assert(items.length>=1);const currentFocusedIndex=items.indexOf(this.querySelector(":focus"));let newFocusedIndex=currentFocusedIndex;switch(event.key){case"Tab":if(event.shiftKey){items[0].focus()}else{items[items.length-1].focus({preventScroll:true})}return;case"ArrowDown":newFocusedIndex=(currentFocusedIndex+1)%items.length;break;case"ArrowUp":newFocusedIndex=(currentFocusedIndex+items.length-1)%items.length;break;case"Home":newFocusedIndex=0;break;case"End":newFocusedIndex=items.length-1;break}if(newFocusedIndex===currentFocusedIndex){return}event.preventDefault();items[newFocusedIndex].focus()}}customElements.define(CrMenuSelector.is,CrMenuSelector);const styleMod=document.createElement("dom-module");styleMod.appendChild(html`
  <template>
    <style>
.cr-nav-menu-item{--iron-icon-fill-color:var(--google-grey-700);--iron-icon-height:20px;--iron-icon-width:20px;--cr-icon-ripple-size:20px;align-items:center;border-end-end-radius:100px;border-start-end-radius:100px;box-sizing:border-box;color:var(--google-grey-900);display:flex;font-size:14px;font-weight:500;line-height:14px;margin-inline-end:2px;margin-inline-start:1px;min-height:40px;overflow:hidden;padding-block-end:10px;padding-block-start:10px;padding-inline-start:23px;position:relative;text-decoration:none}:host-context(cr-drawer) .cr-nav-menu-item{margin-inline-end:8px}.cr-nav-menu-item:hover{background:var(--google-grey-200)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:var(--google-blue-600);background:var(--google-blue-50);color:var(--google-blue-700)}@media (prefers-color-scheme:dark){.cr-nav-menu-item{--iron-icon-fill-color:var(--google-grey-500);color:#fff}.cr-nav-menu-item:hover{--iron-icon-fill-color:white;background:var(--google-grey-800)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:black;background:var(--google-blue-300);color:var(--google-grey-900)}}.cr-nav-menu-item:focus{outline:auto 5px -webkit-focus-ring-color;z-index:1}.cr-nav-menu-item:focus:not([selected]):not(:hover){background:0 0}.cr-nav-menu-item iron-icon{flex-shrink:0;margin-inline-end:20px;pointer-events:none;vertical-align:top}
    </style>
  </template>
`.content);styleMod.register("cr-nav-menu-item-style");const template=html`<iron-iconset-svg name="passwords-icon" size="20">
  <svg>
    <defs>
      <g id="password"><path d="M4.98517 3.82996C6.64608 3.82996 8.05563 4.94329 8.58063 6.49662H15.167V9.16329H13.8943V11.83H11.3488V9.16329H8.58063C8.05563 10.7166 6.64608 11.83 4.98517 11.83C2.87563 11.83 1.16699 10.04 1.16699 7.82996C1.16699 5.61996 2.87563 3.82996 4.98517 3.82996ZM3.71245 7.83996C3.71245 8.57662 4.28199 9.17329 4.98517 9.17329C5.68836 9.17329 6.2579 8.57662 6.2579 7.83996C6.2579 7.10329 5.68836 6.50662 4.98517 6.50662C4.28199 6.50662 3.71245 7.10329 3.71245 7.83996Z"></path></g>
      <g id="passkey"><path d="M9 10c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0-4.5c.83 0 1.5.67 1.5 1.5S9.83 8.5 9 8.5 7.5 7.83 7.5 7 8.17 5.5 9 5.5zm6.5 7.5v-.13a2.497 2.497 0 001.75-2.37 2.5 2.5 0 00-5 0c0 1.12.74 2.05 1.75 2.37V16l1 1 1.5-1.5-.75-.75.75-.75-1-1zm-.75-1.5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM4.5 14.09c0-.18.09-.34.22-.42C6.02 12.9 7.5 12.5 9 12.5c.88 0 1.75.15 2.58.42-.39-.5-.65-1.09-.76-1.73A9.94 9.94 0 009 11c-1.84 0-3.56.5-5.03 1.37-.61.35-.97 1.02-.97 1.72V16h9.5v-1.5h-8v-.41z"></path></g>
      <g id="checkup"><path d="M3.83333 14.3333V4.33329H5.16667V6.33329H10.5V4.33329H11.8333V8.33329H13.1667V4.33329C13.1667 3.59996 12.5667 2.99996 11.8333 2.99996H9.71333C9.43333 2.22663 8.7 1.66663 7.83333 1.66663C6.96667 1.66663 6.23333 2.22663 5.95333 2.99996H3.83333C3.1 2.99996 2.5 3.59996 2.5 4.33329V14.3333C2.5 15.0666 3.1 15.6666 3.83333 15.6666H7.16667V14.3333H3.83333ZM7.83333 2.99996C8.2 2.99996 8.5 3.29996 8.5 3.66663C8.5 4.03329 8.2 4.33329 7.83333 4.33329C7.46667 4.33329 7.16667 4.03329 7.16667 3.66663C7.16667 3.29996 7.46667 2.99996 7.83333 2.99996ZM14.8333 10.3333L13.8333 9.33329L10.1733 13L8.16667 11L7.16667 12L10.1733 15L14.8333 10.3333Z"></path></g>
      <g id="settings"><path d="M12.9669 8.49998C12.9669 8.71598 12.9509 8.92398 12.9269 9.12398L14.2629 10.18C14.3909 10.276 14.4229 10.444 14.3429 10.588L13.0629 12.804C12.9829 12.948 12.8149 13.004 12.6709 12.948L11.0789 12.308C10.7509 12.556 10.3909 12.772 9.9989 12.932L9.7589 14.628C9.7429 14.788 9.6069 14.9 9.4469 14.9H6.8869C6.7269 14.9 6.5989 14.788 6.5669 14.628L6.3269 12.932C5.9349 12.772 5.5829 12.564 5.2469 12.308L3.6549 12.948C3.5109 12.996 3.3429 12.948 3.2629 12.804L1.9829 10.588C1.9109 10.452 1.9429 10.276 2.0629 10.18L3.4149 9.12398C3.3829 8.92398 3.3669 8.70798 3.3669 8.49998C3.3669 8.29198 3.3909 8.07598 3.4229 7.87598L2.0709 6.81998C1.9429 6.72398 1.9109 6.55598 1.9909 6.41198L3.2709 4.19598C3.3509 4.05198 3.5189 3.99598 3.6629 4.05198L5.2549 4.69198C5.5829 4.44398 5.9429 4.22798 6.3349 4.06798L6.5749 2.37198C6.5989 2.21198 6.7269 2.09998 6.8869 2.09998H9.4469C9.6069 2.09998 9.7429 2.21198 9.7669 2.37198L10.0069 4.06798C10.3989 4.22798 10.7509 4.43598 11.0869 4.69198L12.6789 4.05198C12.8229 4.00398 12.9909 4.05198 13.0709 4.19598L14.3509 6.41198C14.4229 6.54798 14.3909 6.72398 14.2709 6.81998L12.9189 7.87598C12.9509 8.07598 12.9669 8.28398 12.9669 8.49998ZM5.7669 8.49998C5.7669 9.81998 6.8469 10.9 8.1669 10.9C9.4869 10.9 10.5669 9.81998 10.5669 8.49998C10.5669 7.17998 9.4869 6.09998 8.1669 6.09998C6.8469 6.09998 5.7669 7.17998 5.7669 8.49998Z"></path></g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template.content);function getTemplate$8(){return html`<!--_html_template_start_--><style include="cr-nav-menu-item-style">cr-menu-selector{box-sizing:border-box;display:block;height:100%;overflow:auto;overscroll-behavior:contain;padding-top:8px;width:250px}#compromisedPasswords{margin-inline-end:20px;margin-inline-start:auto}</style>
<div role="navigation">
  <cr-menu-selector id="menu" attr-for-selected="path" selected-attribute="selected" on-iron-activate="onSelectorActivate_" selected="[[getSelectedPage_(selectedPage_)]]">
    <a id="passwords" role="menuitem" class="cr-nav-menu-item" path="passwords" href="/passwords" on-click="onItemClick_">
      <iron-icon icon="passwords-icon:password"></iron-icon>
      $i18n{passwords}
      <paper-ripple></paper-ripple>
    </a>
    <a id="checkup" role="menuitem" class="cr-nav-menu-item" path="checkup" href="/checkup" on-click="onItemClick_">
      <iron-icon icon="passwords-icon:checkup"></iron-icon>
      <span>$i18n{checkup}</span>
      <div id="compromisedPasswords" hidden$="[[!compromisedPasswords_]]">
        [[getCompromisedPasswordsBadge_(compromisedPasswords_)]]</div>
      <paper-ripple></paper-ripple>
    </a>
    <a id="settings" role="menuitem" class="cr-nav-menu-item" path="settings" href="/settings" on-click="onItemClick_">
      <iron-icon icon="passwords-icon:settings"></iron-icon>
      $i18n{settings}
      <paper-ripple></paper-ripple>
    </a>
  </cr-menu-selector>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var PasswordCheckReferrer;(function(PasswordCheckReferrer){PasswordCheckReferrer[PasswordCheckReferrer["SAFETY_CHECK"]=0]="SAFETY_CHECK";PasswordCheckReferrer[PasswordCheckReferrer["PASSWORD_SETTINGS"]=1]="PASSWORD_SETTINGS";PasswordCheckReferrer[PasswordCheckReferrer["PHISH_GUARD_DIALOG"]=2]="PHISH_GUARD_DIALOG";PasswordCheckReferrer[PasswordCheckReferrer["PASSWORD_BREACH_DIALOG"]=3]="PASSWORD_BREACH_DIALOG";PasswordCheckReferrer[PasswordCheckReferrer["COUNT"]=4]="COUNT"})(PasswordCheckReferrer||(PasswordCheckReferrer={}));const PASSWORD_MANAGER_SETTINGS_MENU_ITEM_ELEMENT_ID="PasswordManagerUI::kSettingsMenuItemElementId";const PasswordManagerSideBarElementBase=HelpBubbleMixin(RouteObserverMixin(PolymerElement));class PasswordManagerSideBarElement extends PasswordManagerSideBarElementBase{constructor(){super(...arguments);this.insecureCredentialsChangedListener_=null}static get is(){return"password-manager-side-bar"}static get template(){return getTemplate$8()}static get properties(){return{selectedPage_:String,compromisedPasswords_:Number}}connectedCallback(){super.connectedCallback();this.insecureCredentialsChangedListener_=insecureCredentials=>{const compromisedTypes=[chrome.passwordsPrivate.CompromiseType.LEAKED,chrome.passwordsPrivate.CompromiseType.PHISHED];this.compromisedPasswords_=insecureCredentials.filter((cred=>!cred.compromisedInfo.isMuted&&cred.compromisedInfo.compromiseTypes.some((type=>compromisedTypes.includes(type))))).length;this.registerHelpBubble(PASSWORD_MANAGER_SETTINGS_MENU_ITEM_ELEMENT_ID,this.$.settings)};PasswordManagerImpl.getInstance().getInsecureCredentials().then(this.insecureCredentialsChangedListener_);PasswordManagerImpl.getInstance().addInsecureCredentialsListener(this.insecureCredentialsChangedListener_)}disconnectedCallback(){super.disconnectedCallback();assert(this.insecureCredentialsChangedListener_);PasswordManagerImpl.getInstance().removeInsecureCredentialsListener(this.insecureCredentialsChangedListener_);this.insecureCredentialsChangedListener_=null}currentRouteChanged(route,_){this.selectedPage_=route.page}onSelectorActivate_(event){Router.getInstance().navigateTo(event.detail.selected);if(event.detail.selected===Page.CHECKUP){const params=new URLSearchParams;params.set(UrlParam.START_CHECK,"true");Router.getInstance().updateRouterParams(params);chrome.metricsPrivate.recordEnumerationValue("PasswordManager.BulkCheck.PasswordCheckReferrer",PasswordCheckReferrer.PASSWORD_SETTINGS,PasswordCheckReferrer.COUNT)}this.dispatchEvent(new CustomEvent("close-drawer",{bubbles:true,composed:true}))}getSelectedPage_(){switch(this.selectedPage_){case Page.CHECKUP_DETAILS:return Page.CHECKUP;case Page.PASSWORD_DETAILS:return Page.PASSWORDS;default:return this.selectedPage_}}onItemClick_(e){e.preventDefault()}getCompromisedPasswordsBadge_(){if(this.compromisedPasswords_>99){return"99+"}return String(this.compromisedPasswords_)}}customElements.define(PasswordManagerSideBarElement.is,PasswordManagerSideBarElement);function getTemplate$7(){return html`<!--_html_template_start_-->    <style>:host dialog{--drawer-width:256px;--transition-timing:200ms ease;background-color:var(--cr-drawer-background-color,#fff);border:none;bottom:0;left:calc(-1 * var(--drawer-width));margin:0;max-height:initial;max-width:initial;overflow:hidden;padding:0;position:absolute;top:0;transition:left var(--transition-timing);width:var(--drawer-width)}@media (prefers-color-scheme:dark){:host dialog{background:var(--cr-drawer-background-color,var(--google-grey-900)) linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}#container,:host dialog{height:100%;word-break:break-word}:host([show_]) dialog{left:0}:host([align=rtl]) dialog{left:auto;right:calc(-1 * var(--drawer-width));transition:right var(--transition-timing)}:host([show_][align=rtl]) dialog{right:0}:host dialog::backdrop{background:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity var(--transition-timing)}:host([show_]) dialog::backdrop{opacity:1}.drawer-header{align-items:center;border-bottom:var(--cr-separator-line);color:var(--cr-drawer-header-color,inherit);display:flex;font-size:123.08%;font-weight:var(--cr-drawer-header-font-weight,inherit);min-height:56px;padding-inline-start:var(--cr-drawer-header-padding,24px)}@media (prefers-color-scheme:dark){.drawer-header{color:var(--cr-primary-text-color)}}#heading{outline:0}:host ::slotted([slot=body]){height:calc(100% - 56px);overflow:auto}picture{margin-inline-end:16px}#product-logo,picture{height:24px;width:24px}</style>
    <dialog id="dialog" on-cancel="onDialogCancel_" on-click="onDialogClick_" on-close="onDialogClose_">
      <div id="container" on-click="onContainerClick_">
        <div class="drawer-header">
          <slot name="header-icon">
            <picture>
              <source media="(prefers-color-scheme: dark)" srcset="//resources/images/chrome_logo_dark.svg">
              <img id="product-logo" srcset="chrome://theme/current-channel-logo@1x, chrome://theme/current-channel-logo@2x 2x" role="presentation">
            </picture>
          </slot>
          <div id="heading" tabindex="-1">[[heading]]</div>
        </div>
        <slot name="body"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrDrawerElement extends PolymerElement{static get is(){return"cr-drawer"}static get template(){return getTemplate$7()}static get properties(){return{heading:String,show_:{type:Boolean,reflectToAttribute:true},align:{type:String,value:"ltr",reflectToAttribute:true}}}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}get open(){return this.$.dialog.open}set open(_value){assertNotReached("Cannot set |open|.")}toggle(){if(this.open){this.cancel()}else{this.openDrawer()}}openDrawer(){if(this.open){return}this.$.dialog.showModal();this.show_=true;this.fire_("cr-drawer-opening");listenOnce(this.$.dialog,"transitionend",(()=>{this.fire_("cr-drawer-opened")}))}dismiss_(cancel){if(!this.open){return}this.show_=false;listenOnce(this.$.dialog,"transitionend",(()=>{this.$.dialog.close(cancel?"canceled":"closed")}))}cancel(){this.dismiss_(true)}close(){this.dismiss_(false)}wasCanceled(){return!this.open&&this.$.dialog.returnValue==="canceled"}onContainerClick_(event){event.stopPropagation()}onDialogClick_(){this.cancel()}onDialogCancel_(event){event.preventDefault();this.cancel()}onDialogClose_(){this.fire_("close")}}customElements.define(CrDrawerElement.is,CrDrawerElement);
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrSearchFieldMixin=dedupingMixin((superClass=>{class CrSearchFieldMixin extends superClass{constructor(){super(...arguments);this.effectiveValue_="";this.searchDelayTimer_=-1}static get properties(){return{label:{type:String,value:""},clearLabel:{type:String,value:""},hasSearchText:{type:Boolean,reflectToAttribute:true,value:false}}}getSearchInput(){assertNotReached()}getValue(){return this.getSearchInput().value}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}setValue(value,noEvent){const updated=this.updateEffectiveValue_(value);this.getSearchInput().value=this.effectiveValue_;if(!updated){if(value===""&&this.hasSearchText){this.hasSearchText=false}return}this.onSearchTermInput();if(!noEvent){this.fire_("search-changed",this.effectiveValue_)}}scheduleSearch_(){if(this.searchDelayTimer_>=0){clearTimeout(this.searchDelayTimer_)}const length=this.getValue().length;const timeoutMs=length>0?500-100*(Math.min(length,4)-1):0;this.searchDelayTimer_=setTimeout((()=>{this.getSearchInput().dispatchEvent(new CustomEvent("search",{composed:true,detail:this.getValue()}));this.searchDelayTimer_=-1}),timeoutMs)}onSearchTermSearch(){this.onValueChanged_(this.getValue(),false)}onSearchTermInput(){this.hasSearchText=this.getSearchInput().value!=="";this.scheduleSearch_()}onValueChanged_(newValue,noEvent){const updated=this.updateEffectiveValue_(newValue);if(updated&&!noEvent){this.fire_("search-changed",this.effectiveValue_)}}updateEffectiveValue_(value){const effectiveValue=value.replace(/\s+/g," ").replace(/^\s/,"");if(effectiveValue===this.effectiveValue_){return false}this.effectiveValue_=effectiveValue;return true}}return CrSearchFieldMixin}));function getTemplate$6(){return html`<!--_html_template_start_-->    <style include="cr-shared-style cr-icons">:host{display:block;height:40px;transition:background-color 150ms cubic-bezier(.4,0,.2,1),width 150ms cubic-bezier(.4,0,.2,1);width:44px}:host-context([chrome-refresh-2023]):host{isolation:isolate}:host([disabled]){opacity:var(--cr-disabled-opacity)}[hidden]{display:none!important}cr-icon-button{--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 32px);margin:var(--cr-toolbar-icon-margin,6px)}:host-context([chrome-refresh-2023]) cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-icon-color,
            var(--color-toolbar-search-field-icon,
            var(--cr-secondary-text-color)));--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 28px);--cr-icon-button-icon-size:20px;margin:var(--cr-toolbar-icon-margin,0)}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:var(
              --cr-toolbar-search-field-input-icon-color,
              var(--google-grey-700));--cr-icon-button-focus-outline-color:var(
              --cr-toolbar-icon-button-focus-outline-color,
              var(--cr-focus-outline-color))}}@media (prefers-color-scheme:dark){cr-icon-button{--cr-icon-button-fill-color:var(
              --cr-toolbar-search-field-input-icon-color,
              var(--google-grey-500))}}#icon{transition:margin 150ms,opacity .2s}#prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--google-grey-700));opacity:0}@media (prefers-color-scheme:dark){#prompt{color:var(--cr-toolbar-search-field-prompt-color,#fff)}}@media (prefers-color-scheme:dark){#prompt{--cr-toolbar-search-field-prompt-opacity:1;color:var(--cr-secondary-text-color,#fff)}}:host-context([chrome-refresh-2023]) #prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--color-toolbar-search-field-foreground-placeholder,var(--cr-secondary-text-color)))}paper-spinner-lite{--paper-spinner-color:var(--cr-toolbar-search-field-input-icon-color,
                var(--google-grey-700));height:var(--cr-icon-size);margin:var(--cr-toolbar-search-field-paper-spinner-margin,0 6px);opacity:0;padding:6px;position:absolute;width:var(--cr-icon-size)}@media (prefers-color-scheme:dark){paper-spinner-lite{--paper-spinner-color:var(
              --cr-toolbar-search-field-input-icon-color, white)}}:host-context([chrome-refresh-2023]) paper-spinner-lite{margin:0;padding:2px}paper-spinner-lite[active]{opacity:1}#prompt,paper-spinner-lite{transition:opacity .2s}#searchTerm{-webkit-font-smoothing:antialiased;flex:1;line-height:185%;margin:var(--cr-toolbar-search-field-term-margin,0 2px);position:relative}:host-context([chrome-refresh-2023]) #searchTerm{font-size:12px;font-weight:500;margin:var(--cr-toolbar-search-field-term-margin,0)}label{bottom:0;cursor:var(--cr-toolbar-search-field-cursor,text);left:0;overflow:hidden;position:absolute;right:0;top:0;white-space:nowrap}:host([has-search-text]) label{visibility:hidden}input{-webkit-appearance:none;background:0 0;border:none;caret-color:var(--cr-toolbar-search-field-input-caret-color,var(--google-blue-700));color:var(--cr-toolbar-search-field-input-text-color,var(--google-grey-900));cursor:var(--cr-toolbar-search-field-cursor,text);font:inherit;outline:0;padding:0;position:relative;width:100%}@media (prefers-color-scheme:dark){input{color:var(--cr-toolbar-search-field-input-text-color,#fff)}}:host-context([chrome-refresh-2023]) input{caret-color:var(--cr-toolbar-serch-field-input-caret-color,currentColor);color:var(--cr-toolbar-search-field-input-text-color,var(--color-toolbar-search-field-foreground,var(--cr-fallback-color-on-surface)));font-size:12px;font-weight:500}input[type=search]::-webkit-search-cancel-button{display:none}:host([narrow]){border-radius:var(--cr-toolbar-search-field-border-radius,0)}:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,var(--google-grey-100));border-radius:var(--cr-toolbar-search-field-border-radius,46px);cursor:var(--cr-toolbar-search-field-cursor,text);max-width:var(--cr-toolbar-field-max-width,none);padding-inline-end:0;width:var(--cr-toolbar-field-width,680px)}@media (prefers-color-scheme:dark){:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,rgba(0,0,0,.22))}}:host-context([chrome-refresh-2023]):host(:not([narrow])){background:0 0;border-radius:100px;height:36px;overflow:hidden;padding:0 6px;position:relative}#background,#stateBackground{display:none}:host-context([chrome-refresh-2023]):host(:not([narrow])) #background{background:var(--cr-toolbar-search-field-background,var(--color-toolbar-search-field-background,var(--cr-fallback-color-base-container)));border-radius:inherit;display:block;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host([search-focused_]:not([narrow])){outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host-context([chrome-refresh-2023]):host(:not([narrow])) #stateBackground{display:block;inset:0;pointer-events:none;position:absolute}:host-context([chrome-refresh-2023]):host(:hover:not([search-focused_],[narrow])) #stateBackground{background:var(--color-toolbar-search-field-background-hover,var(--cr-hover-background-color));z-index:1}:host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,.7)}:host-context([chrome-refresh-2023]):host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,1)}:host(:not([narrow])) #prompt{opacity:var(--cr-toolbar-search-field-prompt-opacity,1)}:host([narrow]) #prompt{opacity:var(--cr-toolbar-search-field-narrow-mode-prompt-opacity,0)}:host([narrow]:not([showing-search])) #searchTerm{display:none}:host([showing-search][spinner-active]) #icon{opacity:0}:host([narrow][showing-search]){width:100%}:host([narrow][showing-search]) #icon,:host([narrow][showing-search]) paper-spinner-lite{margin-inline-start:var(--cr-toolbar-search-icon-margin-inline-start,18px)}#content{align-items:center;display:flex;height:100%}:host-context([chrome-refresh-2023]) #content{position:relative;z-index:2}</style>
    <div id="background"></div>
    <div id="stateBackground"></div>
    <div id="content">
      <template is="dom-if" id="spinnerTemplate">
        <paper-spinner-lite active="[[isSpinnerShown_]]">
        </paper-spinner-lite>
      </template>
      <cr-icon-button id="icon" iron-icon="cr:search" title="[[label]]" dir="ltr" tabindex$="[[computeIconTabIndex_(narrow, hasSearchText)]]" aria-hidden$="[[computeIconAriaHidden_(narrow, hasSearchText)]]" on-click="onSearchIconClicked_" disabled="[[disabled]]">
      </cr-icon-button>
      <div id="searchTerm">
        <label id="prompt" for="searchInput" aria-hidden="true">[[label]]</label>
        <input id="searchInput" aria-labelledby="prompt" autocapitalize="off" autocomplete="off" type="search" on-input="onSearchTermInput" on-search="onSearchTermSearch" on-keydown="onSearchTermKeydown_" on-focus="onInputFocus_" on-blur="onInputBlur_" autofocus$="[[autofocus]]" spellcheck="false" disabled="[[disabled]]">
      </div>
      <template is="dom-if" if="[[hasSearchText]]">
        <cr-icon-button id="clearSearch" iron-icon="cr:cancel" title="[[clearLabel]]" on-click="clearSearch_" disabled="[[disabled]]"></cr-icon-button>
      </template>
    </div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrToolbarSearchFieldElementBase=CrSearchFieldMixin(PolymerElement);class CrToolbarSearchFieldElement extends CrToolbarSearchFieldElementBase{static get is(){return"cr-toolbar-search-field"}static get template(){return getTemplate$6()}static get properties(){return{narrow:{type:Boolean,reflectToAttribute:true},showingSearch:{type:Boolean,value:false,notify:true,observer:"showingSearchChanged_",reflectToAttribute:true},disabled:{type:Boolean,value:false,reflectToAttribute:true},autofocus:{type:Boolean,value:false,reflectToAttribute:true},spinnerActive:{type:Boolean,reflectToAttribute:true},isSpinnerShown_:{type:Boolean,computed:"computeIsSpinnerShown_(spinnerActive, showingSearch)"},searchFocused_:{reflectToAttribute:true,type:Boolean,value:false}}}ready(){super.ready();this.addEventListener("click",(e=>this.showSearch_(e)))}getSearchInput(){return this.$.searchInput}isSearchFocused(){return this.searchFocused_}showAndFocus(){this.showingSearch=true;this.focus_()}onSearchTermInput(){super.onSearchTermInput();this.showingSearch=this.hasSearchText||this.isSearchFocused()}onSearchIconClicked_(){this.dispatchEvent(new CustomEvent("search-icon-clicked",{bubbles:true,composed:true}))}focus_(){this.getSearchInput().focus()}computeIconTabIndex_(narrow){return narrow&&!this.hasSearchText?0:-1}computeIconAriaHidden_(narrow){return Boolean(!narrow||this.hasSearchText).toString()}computeIsSpinnerShown_(){const showSpinner=this.spinnerActive&&this.showingSearch;if(showSpinner){this.$.spinnerTemplate.if=true}return showSpinner}onInputFocus_(){this.searchFocused_=true}onInputBlur_(){this.searchFocused_=false;if(!this.hasSearchText){this.showingSearch=false}}onSearchTermKeydown_(e){if(e.key==="Escape"){this.showingSearch=false}}showSearch_(e){if(e.target!==this.shadowRoot.querySelector("#clearSearch")){this.showingSearch=true}}clearSearch_(){this.setValue("");this.focus_();this.spinnerActive=false}showingSearchChanged_(_current,previous){if(previous===undefined){return}if(this.showingSearch){this.focus_();return}this.setValue("");this.getSearchInput().blur()}}customElements.define(CrToolbarSearchFieldElement.is,CrToolbarSearchFieldElement);function getTemplate$5(){return html`<!--_html_template_start_-->    <style include="cr-icons cr-hidden-style">:host{align-items:center;background-color:var(--cr-toolbar-background-color);color:var(--google-grey-900);display:flex;height:var(--cr-toolbar-height)}@media (prefers-color-scheme:dark){:host{border-bottom:var(--cr-separator-line);box-sizing:border-box;color:var(--cr-secondary-text-color)}:host-context([chrome-refresh-2023]):host{background-color:transparent;border-bottom:none}}h1{flex:1;font-size:170%;font-weight:var(--cr-toolbar-header-font-weight,500);letter-spacing:.25px;line-height:normal;margin-inline-start:6px;padding-inline-end:12px;white-space:var(--cr-toolbar-header-white-space,normal)}@media (prefers-color-scheme:dark){h1{color:var(--cr-primary-text-color)}}#leftContent{position:relative;transition:opacity .1s}#leftSpacer{align-items:center;box-sizing:border-box;display:flex;padding-inline-start:calc(12px + 6px);width:var(--cr-toolbar-left-spacer-width,auto)}cr-icon-button{--cr-icon-button-size:32px;min-width:32px}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-focus-outline-color:var(--cr-focus-outline-color)}}#centeredContent{display:flex;flex:1 1 0;justify-content:center}#rightSpacer{padding-inline-end:12px}:host([narrow]) #centeredContent{justify-content:flex-end}:host([has-overlay]){transition:visibility var(--cr-toolbar-overlay-animation-duration);visibility:hidden}:host([narrow][showing-search_]) #leftContent{opacity:0;position:absolute}:host(:not([narrow])) #leftContent{flex:1 1 var(--cr-toolbar-field-margin,0)}:host(:not([narrow])) #centeredContent{flex-basis:var(--cr-toolbar-center-basis,0)}:host(:not([narrow])[disable-right-content-grow]) #centeredContent{justify-content:start;padding-inline-start:12px}:host(:not([narrow])) #rightContent{flex:1 1 0;text-align:end}:host(:not([narrow])[disable-right-content-grow]) #rightContent{flex:0 1 0}picture{display:none}#menuButton{margin-inline-end:9px}#menuButton~h1{margin-inline-start:0}:host(:not([narrow])) picture,:host([always-show-logo]) picture{display:initial;margin-inline-end:16px}:host(:not([narrow])) #leftSpacer,:host([always-show-logo]) #leftSpacer{padding-inline-start:calc(12px + 9px)}:host(:not([narrow])) :is(picture,#product-logo),:host([always-show-logo]) :is(picture,#product-logo){height:24px;width:24px}</style>
    <div id="leftContent">
      <div id="leftSpacer">
        <template is="dom-if" if="[[showMenu]]" restamp>
          <cr-icon-button id="menuButton" class="no-overlap" iron-icon="cr20:menu" on-click="onMenuClick_" aria-label$="[[menuLabel]]" title="[[menuLabel]]">
          </cr-icon-button>
        </template>
        <slot name="product-logo">
          <picture>
            <source media="(prefers-color-scheme: dark)" srcset="//resources/images/chrome_logo_dark.svg">
            <img id="product-logo" srcset="chrome://theme/current-channel-logo@1x, chrome://theme/current-channel-logo@2x 2x" role="presentation">
          </picture>
        </slot>
        <h1>[[pageName]]</h1>
      </div>
    </div>

    <div id="centeredContent" hidden$="[[!showSearch]]">
      <cr-toolbar-search-field id="search" narrow="[[narrow]]" label="[[searchPrompt]]" clear-label="[[clearLabel]]" spinner-active="[[spinnerActive]]" showing-search="{{showingSearch_}}" autofocus$="[[autofocus]]">
      </cr-toolbar-search-field>
      <iron-media-query query="(max-width: [[narrowThreshold]]px)" query-matches="{{narrow}}">
      </iron-media-query>
    </div>

    <div id="rightContent">
      <div id="rightSpacer">
        <slot></slot>
      </div>
    </div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToolbarElement extends PolymerElement{static get is(){return"cr-toolbar"}static get template(){return getTemplate$5()}static get properties(){return{pageName:String,searchPrompt:String,clearLabel:String,menuLabel:String,spinnerActive:Boolean,showMenu:{type:Boolean,value:false},showSearch:{type:Boolean,value:true},autofocus:{type:Boolean,value:false,reflectToAttribute:true},narrow:{type:Boolean,reflectToAttribute:true,readonly:true,notify:true},narrowThreshold:{type:Number,value:900},alwaysShowLogo:{type:Boolean,value:false,reflectToAttribute:true},showingSearch_:{type:Boolean,reflectToAttribute:true}}}getSearchField(){return this.$.search}onMenuClick_(){this.dispatchEvent(new CustomEvent("cr-toolbar-menu-click",{bubbles:true,composed:true}))}focusMenuButton(){requestAnimationFrame((()=>{const menuButton=this.shadowRoot.querySelector("#menuButton");if(menuButton){menuButton.focus()}}))}isMenuFocused(){return!!this.shadowRoot.activeElement&&this.shadowRoot.activeElement.id==="menuButton"}}customElements.define(CrToolbarElement.is,CrToolbarElement);function getTemplate$4(){return html`<!--_html_template_start_--><style include="shared-style">cr-toolbar{min-height:56px;--cr-toolbar-center-basis:var(--password-manager-main-basis);--cr-toolbar-header-white-space:nowrap}cr-toolbar:not([narrow]){--cr-toolbar-left-spacer-width:var(--side-bar-width)}#product-logo{height:24px;margin-inline-end:16px;margin-top:6px;width:24px}</style>
<cr-toolbar id="mainToolbar" on-keydown="onKeyDown_" page-name="$i18n{passwordManagerString}" clear-label="$i18n{clearSearch}" search-prompt="$i18n{searchPrompt}" menu-label="$i18n{menuButtonLabel}" autofocus on-search-changed="onSearchChanged_" role="banner" show-menu="[[narrow]]" narrow="[[narrow]]" narrow-threshold="1200">
  <picture slot="product-logo">
    <img id="product-logo" srcset="chrome://password-manager/images/password_manager_logo.svg" role="presentation">
  </picture>
  <cr-icon-button id="helpButton" iron-icon="cr:help-outline" title="$i18n{help}" on-click="onHelpClick_">
  </cr-icon-button>
</cr-toolbar>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PASSWORD_MANAGER_OVERFLOW_MENU_ELEMENT_ID="PasswordManagerUI::kOverflowMenuElementId";const PasswordManagerToolbarElementBase=HelpBubbleMixin(I18nMixin(RouteObserverMixin(PolymerElement)));class PasswordManagerToolbarElement extends PasswordManagerToolbarElementBase{static get is(){return"password-manager-toolbar"}static get template(){return getTemplate$4()}static get properties(){return{narrow:Boolean}}currentRouteChanged(newRoute,_oldRoute){this.updateSearchTerm(newRoute.queryParameters)}ready(){super.ready();this.$.mainToolbar.addEventListener("dom-change",(e=>{const crToolbar=e.target;if(!crToolbar){return}const menuButton=crToolbar.shadowRoot?.getElementById("menuButton");if(menuButton){this.registerHelpBubble(PASSWORD_MANAGER_OVERFLOW_MENU_ELEMENT_ID,menuButton)}}))}get searchField(){return this.$.mainToolbar.getSearchField()}onSearchChanged_(event){const newParams=new URLSearchParams;if(event.detail){newParams.set(UrlParam.SEARCH_TERM,event.detail);if(Router.getInstance().currentRoute.page!==Page.PASSWORDS){Router.getInstance().navigateTo(Page.PASSWORDS,null,newParams);return}}Router.getInstance().updateRouterParams(newParams)}updateSearchTerm(query){const searchTerm=query.get(UrlParam.SEARCH_TERM)||"";if(searchTerm!==this.searchField.getValue()){this.searchField.setValue(searchTerm)}}onHelpClick_(){OpenWindowProxyImpl.getInstance().openUrl(this.i18n("passwordManagerLearnMoreURL"))}onKeyDown_(e){if(e.key==="Enter"){this.dispatchEvent(new CustomEvent("search-enter-click",{bubbles:true,composed:true}));e.preventDefault()}}}customElements.define(PasswordManagerToolbarElement.is,PasswordManagerToolbarElement);
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class KeyboardShortcut{constructor(shortcut){this.useKeyCode_=false;this.mods_={};this.key_=null;this.keyCode_=null;shortcut.split("|").forEach((part=>{const partLc=part.toLowerCase();switch(partLc){case"alt":case"ctrl":case"meta":case"shift":this.mods_[partLc+"Key"]=true;break;default:if(this.key_){throw Error("Invalid shortcut")}this.key_=part;if(part.match(/^[a-z]$/)){this.useKeyCode_=true;this.keyCode_=part.toUpperCase().charCodeAt(0)}}}))}matchesEvent(e){if(this.useKeyCode_&&e.keyCode===this.keyCode_||e.key===this.key_){const mods=this.mods_;return["altKey","ctrlKey","metaKey","shiftKey"].every((function(k){return e[k]===!!mods[k]}))}return false}}class KeyboardShortcutList{constructor(shortcuts){this.shortcuts_=shortcuts.split(/\s+/).map((function(shortcut){return new KeyboardShortcut(shortcut)}))}matchesEvent(e){return this.shortcuts_.some((function(keyboardShortcut){return keyboardShortcut.matchesEvent(e)}))}}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FindShortcutManager=(()=>{const listeners=[];let modalContextOpen=false;const shortcutCtrlF=new KeyboardShortcutList(isMac?"meta|f":"ctrl|f");const shortcutSlash=new KeyboardShortcutList("/");window.addEventListener("keydown",(e=>{if(e.defaultPrevented||listeners.length===0){return}const element=e.composedPath()[0];if(!shortcutCtrlF.matchesEvent(e)&&(element.tagName==="INPUT"||element.tagName==="TEXTAREA"||!shortcutSlash.matchesEvent(e))){return}const focusIndex=listeners.findIndex((listener=>listener.searchInputHasFocus()));const index=focusIndex<=0?listeners.length-1:focusIndex-1;if(listeners[index].handleFindShortcut(modalContextOpen)){e.preventDefault()}}));window.addEventListener("cr-dialog-open",(()=>{modalContextOpen=true}));window.addEventListener("cr-drawer-opened",(()=>{modalContextOpen=true}));window.addEventListener("close",(e=>{if(["CR-DIALOG","CR-DRAWER"].includes(e.composedPath()[0].nodeName)){modalContextOpen=false}}));return Object.freeze({listeners:listeners})})();const FindShortcutMixin=dedupingMixin((superClass=>{class FindShortcutMixin extends superClass{constructor(){super(...arguments);this.findShortcutListenOnAttach=true}connectedCallback(){super.connectedCallback();if(this.findShortcutListenOnAttach){this.becomeActiveFindShortcutListener()}}disconnectedCallback(){super.disconnectedCallback();if(this.findShortcutListenOnAttach){this.removeSelfAsFindShortcutListener()}}becomeActiveFindShortcutListener(){const listeners=FindShortcutManager.listeners;assert(!listeners.includes(this),"Already listening for find shortcuts.");listeners.push(this)}handleFindShortcutInternal_(){assertNotReached("Must override handleFindShortcut()")}handleFindShortcut(_modalContextOpen){this.handleFindShortcutInternal_();return false}removeSelfAsFindShortcutListener(){const listeners=FindShortcutManager.listeners;const index=listeners.indexOf(this);assert(listeners.includes(this),"Find shortcut listener not found.");listeners.splice(index,1)}searchInputHasFocusInternal_(){assertNotReached("Must override searchInputHasFocus()")}searchInputHasFocus(){this.searchInputHasFocusInternal_();return false}}return FindShortcutMixin}));function getTemplate$3(){return html`<!--_html_template_start_--><style include="cr-page-host-style cr-shared-style shared-style">:host{display:flex;flex-direction:column;height:100%}#container{align-items:flex-start;display:flex;flex:1;overflow:overlay;position:relative}#content,#sidebar,#space-holder{flex:1 1 0}#sidebar{height:100%;position:sticky;top:0;z-index:1}#content{flex-basis:var(--password-manager-main-basis);height:100%}#checkupDetails{height:100%}checkup-details-section{height:auto!important;min-height:100%}password-details-section,passwords-section,settings-section{padding-bottom:28px}@media (max-width:1200px){#content{min-width:auto;padding:0 3px}}#cr-container-shadow-top{z-index:2}#removalNotification{display:flex;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}password-manager-side-bar{min-width:var(--side-bar-width)}</style>
<settings-prefs id="prefs" prefs="{{prefs_}}"></settings-prefs>
<password-manager-toolbar id="toolbar" narrow="[[narrow_]]" on-search-enter-click="onSearchEnterClick_">
</password-manager-toolbar>
<div id="container" role="group">
  <password-manager-side-bar id="sidebar" hidden$="[[narrow_]]">
  </password-manager-side-bar>
  <iron-pages id="content" attr-for-selected="path" fallback-selection="passwords" selected="[[selectedPage_]]" on-iron-select="onIronSelect_">
    <passwords-section id="passwords" path="passwords" prefs="{{prefs_}}" focus-config="[[focusConfig_]]" class="cr-centered-card-container">
    </passwords-section>
    <checkup-section id="checkup" path="checkup" focus-config="[[focusConfig_]]" class="cr-centered-card-container">
    </checkup-section>
    <settings-section id="settings" path="settings" prefs="{{prefs_}}" class="cr-centered-card-container">
    </settings-section>
    <div id="passwordDetails" path="password-details">
      <template is="dom-if" restamp if="[[showPage(selectedPage_, pagesValueEnum_.PASSWORD_DETAILS)]]">
        <password-details-section class="cr-centered-card-container" on-password-removed="onPasswordRemoved_" on-passkey-removed="onPasskeyRemoved_">
        </password-details-section>
      </template>
    </div>
    <div id="checkupDetails" path="checkup-details">
      <template is="dom-if" restamp if="[[showPage(selectedPage_, pagesValueEnum_.CHECKUP_DETAILS)]]">
        <checkup-details-section class="cr-centered-card-container" on-password-removed="onPasswordRemoved_" prefs="{{prefs_}}">
        </checkup-details-section>
      </template>
    </div>
  </iron-pages>
  
  <div id="space-holder" hidden$="[[narrow_]]"></div>
<div>
<cr-drawer id="drawer" heading="$i18n{passwordManagerString}" align="$i18n{textdirection}">
  <div slot="body">
    <template is="dom-if" id="drawerTemplate">
      <password-manager-side-bar id="drawerSidebar"></password-manager-side-bar>
    </template>
  </div>
</cr-drawer>
<iron-media-query query="(max-width: 1200px)" query-matches="{{narrow_}}">
</iron-media-query>
<cr-toast id="removalToast" duration="5000">
  <span id="removalNotification">[[toastMessage_]]</span>
  <cr-button id="undo-removal" aria-label="$i18n{undoDescription}" on-click="onUndoButtonClick_" hidden$="[[!showUndo_]]">
    $i18n{undoRemovePassword}
  </cr-button>
</cr-toast>
</div></div><!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isEditable(element){const nodeName=element.nodeName.toLowerCase();return element.nodeType===Node.ELEMENT_NODE&&(nodeName==="textarea"||nodeName==="input"&&/^(?:text|search|email|number|tel|url|password)$/i.test(element.type))}const PasswordManagerAppElementBase=FindShortcutMixin(I18nMixin(CrContainerShadowMixin(RouteObserverMixin(PolymerElement))));class PasswordManagerAppElement extends PasswordManagerAppElementBase{static get is(){return"password-manager-app"}static get template(){return getTemplate$3()}static get properties(){return{prefs_:Object,selectedPage_:String,narrow_:{type:Boolean,observer:"onNarrowChanged_"},pagesValueEnum_:{type:Object,value:Page},toastMessage_:String,showUndo_:Boolean,focusConfig_:{type:Object,value(){const map=new Map;return map}}}}ready(){super.ready();document.addEventListener("keydown",(e=>{if(e.ctrlKey&&e.key==="z"){this.onUndoKeyBinding_(e)}}));listenOnce(this.$.drawer,"cr-drawer-opening",(()=>{this.$.drawerTemplate.if=true}));this.addEventListener("cr-toolbar-menu-click",this.onMenuButtonClick_);this.addEventListener("close-drawer",this.closeDrawer_)}currentRouteChanged(route){this.selectedPage_=route.page;setTimeout((()=>{if(route.page===Page.CHECKUP_DETAILS){this.enableShadowBehavior(false);this.showDropShadows()}else{this.enableShadowBehavior(true)}}),0)}handleFindShortcut(modalContextOpen){if(modalContextOpen){return false}if(Router.getInstance().currentRoute.page===Page.PASSWORDS){this.$.toolbar.searchField.showAndFocus();return true}return false}searchInputHasFocus(){return this.$.toolbar.searchField.isSearchFocused()}onNarrowChanged_(){if(this.$.drawer.open&&!this.narrow_){this.$.drawer.close()}}onMenuButtonClick_(){this.$.drawer.toggle()}closeDrawer_(){if(this.$.drawer&&this.$.drawer.open){this.$.drawer.close()}}setNarrowForTesting(state){this.narrow_=state}showPage(currentPage,pageToShow){return currentPage===pageToShow}onUndoKeyBinding_(event){const activeElement=getDeepActiveElement();if(!activeElement||!isEditable(activeElement)){this.onUndoButtonClick_();event.preventDefault()}}onPasswordRemoved_(_event){this.showUndo_=true;this.toastMessage_=this.i18n("passwordDeleted");this.$.removalToast.show()}onPasskeyRemoved_(){this.showUndo_=false;this.toastMessage_=this.i18n("passkeyDeleted");this.$.removalToast.show()}onUndoButtonClick_(){PasswordManagerImpl.getInstance().undoRemoveSavedPasswordOrException();this.$.removalToast.hide()}onSearchEnterClick_(){this.$.passwords.focusFirstResult()}onIronSelect_(e){if(e.target!==this.$.content){return}if(!this.focusConfig_||Router.getInstance().previousRoute===null){return}const pathConfig=this.focusConfig_.get(Router.getInstance().previousRoute.page);if(pathConfig){let handler;if(typeof pathConfig==="function"){handler=pathConfig}else{handler=()=>{focusWithoutInk(pathConfig)}}handler()}}}customElements.define(PasswordManagerAppElement.is,PasswordManagerAppElement);function getTemplate$2(){return html`<!--_html_template_start_--><style include="cr-input-style cr-shared-style shared-style"></style>

<cr-input value="[[value]]" id="inputValue" readonly="readonly" class="input-field" label="[[label]]" aria-disabled="true">
  <cr-icon-button id="copyButton" class="icon-copy-content" slot="inline-suffix" title="[[copyButtonLabel]]" on-click="onCopyValueClick_">
  </cr-icon-button>
</cr-input>

<cr-toast id="toast" duration="5000">
  <span>[[valueCopiedToastLabel]]</span>
</cr-toast>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CredentialFieldElement extends PolymerElement{static get is(){return"credential-field"}static get template(){return getTemplate$2()}static get properties(){return{label:String,copyButtonLabel:String,valueCopiedToastLabel:String,value:String,interactionId:PasswordViewPageInteractions}}connectedCallback(){super.connectedCallback();assert(this.label);assert(this.copyButtonLabel);assert(this.valueCopiedToastLabel)}onCopyValueClick_(){navigator.clipboard.writeText(this.value).catch((()=>{}));this.$.toast.show();PasswordManagerImpl.getInstance().extendAuthValidity();if(this.interactionId){PasswordManagerImpl.getInstance().recordPasswordViewInteraction(this.interactionId)}}}customElements.define(CredentialFieldElement.is,CredentialFieldElement);function getTemplate$1(){return html`<!--_html_template_start_--><style include="cr-input-style cr-shared-style">#noteField{background:var(--cr-input-background-color);border-radius:10px;display:flex;flex-direction:column;padding:10px 12px}#noteValue{border:0;color:var(--cr-primary-text-color);flex:1;opacity:var(--cr-input-readonly-opacity,.6);overflow:hidden;padding:0;resize:none;text-overflow:ellipsis;white-space:pre-line}#noteValue[limit-note]{max-height:3lh}#showMore{color:var(--cr-link-color)}#noteValue,#showMore{font-family:inherit;letter-spacing:.15px;line-height:20px}.cr-form-field-label{margin-bottom:8px}</style>

<div class="cr-form-field-label">$i18n{noteLabel}</div>
<div id="noteField" class="input-field">
  <div id="noteValue" role="textbox" limit-note$="[[!showNoteFully_]]">
    <span>[[getNoteValue_(note)]]</span>
  </div>
  <a id="showMore" href="/" on-click="onshowMoreClick_" hidden="[[isNoteFullyVisible_(showNoteFully_, note)]]">
    $i18n{showMore}
  </a>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CredentialNoteElementBase=I18nMixin(PolymerElement);class CredentialNoteElement extends CredentialNoteElementBase{static get is(){return"credential-note"}static get template(){return getTemplate$1()}static get properties(){return{note:String}}connectedCallback(){super.connectedCallback();this.showNoteFully_=false}getNoteValue_(){return!this.note?this.i18n("emptyNote"):this.note}isNoteFullyVisible_(){return this.showNoteFully_||this.$.noteValue.scrollHeight===this.$.noteValue.offsetHeight}onshowMoreClick_(e){e.preventDefault();this.showNoteFully_=true;PasswordManagerImpl.getInstance().extendAuthValidity()}}customElements.define(CredentialNoteElement.is,CredentialNoteElement);function getTemplate(){return html`<!--_html_template_start_--><style include="shared-style cr-shared-style md-select">cr-link-row[hide-icon]::part(icon){display:none}cr-link-row #selectFileButton{margin-inline-start:16px}div[slot=body]{max-height:60vh}.md-select{--md-select-width:100%;margin-bottom:var(--cr-form-field-bottom-spacing);margin-top:2px}.bold-text{font-weight:700}.flex{display:flex}iron-icon,site-favicon{max-width:16px;padding-inline-end:15px}.failed-row{margin-inline-start:31px;padding-block:8px}.failed-row~.failed-row{border-top:1px solid var(--cr-separator-color)}.url-username-group{display:grid;grid-template-columns:fit-content(50%) 1fr;width:100%}.website:not(:empty){margin-inline-end:16px}.error-status{color:var(--error-color);padding-inline-start:30px}#successIcon{fill:var(--cr-checked-color)}#conflictsWarningIcon{height:18px;--iron-icon-fill-color:rgb(234, 134, 0)}.flex-float-left{margin-inline-end:auto}#skipButton{margin-inline-end:8px}#conflictsList{margin-top:16px}.error-icon{margin-block:auto;--iron-icon-fill-color:var(--error-color)}#failuresSummary{color:var(--cr-primary-text-color);padding:8px 0}#failuresTitleRow{margin-block:16px 8px}#tipBox{align-items:center;background:var(--google-grey-50);border:1px solid var(--cr-separator-color);border-radius:4px;margin-top:16px;padding:8px}#deleteFileOption{margin-top:16px;min-height:36px;padding-inline-start:1px;--cr-checkbox-label-padding-start:16px;--cr-checkbox-size:14px;--cr-checkbox-border-size:1px;--cr-checkbox-ripple-size:36px}@media (prefers-color-scheme:dark){#tipBox{background:var(--google-grey-900)}#conflictsWarningIcon{--iron-icon-fill-color:var(--google-yellow-300)}}</style>

<cr-link-row id="linkRow" class="cr-row" on-click="onBannerClick_" label="$i18n{importPasswords}" sub-label="[[bannerDescription_]]" hide-icon$="[[shouldHideLinkRowIcon_(dialogState_, isAccountStoreUser)]]" ariashowsublabel ariashowlabel roledescription="button" non-clickable$="[[!isAccountStoreUser]]">
  <template is="dom-if" restamp if="[[shouldShowSelectFileButton_(isAccountStoreUser, dialogState_)]]">
    <cr-button id="selectFileButton" on-click="onSelectFileClick_">
      $i18n{selectFile}
    </cr-button>
  </template>
  <template is="dom-if" if="[[isState_(dialogStateEnum_.IN_PROGRESS, dialogState_)]]" restamp>
    <paper-spinner-lite active id="progressSpinner">
    </paper-spinner-lite>
  </template>
</cr-link-row>


<template is="dom-if" if="[[isState_(dialogStateEnum_.STORE_PICKER, dialogState_)]]" restamp>
  <cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach no-cancel>
    <div slot="title" id="title">$i18n{importPasswords}</div>
    <div slot="body">
      <select class="md-select" id="storePicker" autofocus value="[[selectedStoreOption_]]" aria-description="$i18n{importPasswordsStorePickerA11yDescription}">
        <option value="[[storeOptionEnum_.ACCOUNT]]">
          [[getStoreOptionAccountText_(accountEmail)]]
        </option>
        <option value="[[storeOptionEnum_.DEVICE]]">
          $i18n{passwordsStoreOptionDevice}
        </option>
      </select>
      <div id="description">$i18n{importPasswordsSelectFile}</div>
    </div>
    <div slot="button-container">
      <cr-button id="cancelButton" class="cancel-button" on-click="onCloseClick_">
        $i18n{cancel}
      </cr-button>
      <cr-button id="selectFileButton" class="action-button" on-click="onSelectFileClick_">
        $i18n{selectFile}
      </cr-button>
    </div>
  </cr-dialog>
</template>


<template is="dom-if" if="[[isState_(dialogStateEnum_.ERROR, dialogState_)]]" restamp>
  <cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach no-cancel>
    <div slot="title" id="title">$i18n{importPasswordsErrorTitle}</div>
    <div slot="body">
      <template is="dom-if" if="[[isAccountStoreUser]]" restamp>
        <select class="md-select" id="storePicker" autofocus value="[[selectedStoreOption_]]" aria-description="$i18n{importPasswordsStorePickerA11yDescription}">
          <option value="[[storeOptionEnum_.ACCOUNT]]">
            [[getStoreOptionAccountText_(accountEmail)]]
          </option>
          <option value="[[storeOptionEnum_.DEVICE]]">
            $i18n{passwordsStoreOptionDevice}
          </option>
        </select>
      </template>
      <div class="flex">
        <iron-icon class="error-icon" icon="cr:warning"></iron-icon>
        <div id="description" inner-h-t-m-l="[[getErrorDialogDescription_(results_)]]">
        </div>
      </div>
    </div>
    <div slot="button-container">
      <cr-button id="closeButton" class="cancel-button" on-click="onCloseClick_" autofocus>
        $i18n{close}
      </cr-button>
      <cr-button id="selectFileButton" class="action-button" on-click="onSelectFileClick_">
        $i18n{selectFile}
      </cr-button>
    </div>
  </cr-dialog>
</template>


<template is="dom-if" if="[[isState_(dialogStateEnum_.SUCCESS, dialogState_)]]" restamp>
  <cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach no-cancel>
    <div slot="title" id="title">[[getSuccessDialogTitle_(results_)]]</div>
    <div slot="body">
      <div class="flex">
        <iron-icon id="successIcon" icon="cr:check-circle"></iron-icon>
        <div id="description">[[successDescription_]]</div>
      </div>
      <div id="tipBox" class="flex" hidden="[[shouldHideTipBox_(results_)]]">
         <iron-icon id="infoIcon" icon="cr:info-outline"></iron-icon>
        <div id="successTip" inner-h-t-m-l="[[getSuccessTipHtml_(results_)]]">
        </div>
      </div>
      <cr-checkbox id="deleteFileOption" hidden="[[shouldHideDeleteFileOption_(results_)]]" inner-h-t-m-l="[[getCheckboxLabelHtml_(results_)]]">
      </cr-checkbox>
      <div hidden="[[shouldHideFailuresSummary_(results_)]]">
        <div id="failuresTitleRow" class="flex-centered">
          <iron-icon class="error-icon" icon="cr:warning"></iron-icon>
          <div id="failuresSummary">[[failedImportsSummary_]]</div>
        </div>
        <template is="dom-repeat" items="[[getFailedImportsWithKnownErrors_(results_)]]">
          <div class="failed-row">
            <div class="flex-centered">
              <site-favicon domain="[[item.url]]" aria-hidden="true">
              </site-favicon>
              <div class="url-username-group">
                <div class="website bold-text text-elide">[[item.url]]</div>
                <div class="username text-elide">[[item.username]]</div>
              </div>
            </div>
            <div class="error-status">
              [[getFailedEntryErrorMessage_(item.status)]]
            </div>
          </div>
        </template>
        <div class="failed-row" hidden="[[!showRowsWithUnknownErrorsSummary_]]">
          <div class="error-status">[[rowsWithUnknownErrorsSummary_]]</div>
        </div>
      </div>
    </div>
    <div slot="button-container">
      <cr-button id="closeButton" class="cancel-button" on-click="onCloseClick_" autofocus>
        $i18n{close}
      </cr-button>
      <cr-button id="viewPasswordsButton" class="action-button" on-click="onViewPasswordsClick_">
        $i18n{viewPasswordsButton}
      </cr-button>
    </div>
  </cr-dialog>
</template>


<template is="dom-if" if="[[isState_(dialogStateEnum_.ALREADY_ACTIVE, dialogState_)]]" restamp>
  <cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach no-cancel>
    <div slot="title" id="title">$i18n{importPasswords}</div>
    <div slot="body" class="flex-centered">
      <iron-icon id="infoIcon" icon="cr:info-outline"></iron-icon>
      <div id="description">$i18n{importPasswordsAlreadyActive}</div>
    </div>
    <div slot="button-container">
      <cr-button id="closeButton" class="action-button" on-click="onCloseClick_" autofocus>
        $i18n{close}
      </cr-button>
    </div>
  </cr-dialog>
</template>


<template is="dom-if" if="[[isState_(dialogStateEnum_.CONFLICTS, dialogState_)]]" restamp>
  <cr-dialog id="dialog" close-text="$i18n{close}" show-on-attach no-cancel>
    <div slot="title" id="title" class="flex-centered">
      <iron-icon id="conflictsWarningIcon" icon="cr:warning"></iron-icon>
      <span>[[conflictsDialogTitle_]]</span>
    </div>
    <div slot="body">
      <div id="description">$i18n{importPasswordsConflictsDescription}</div>
      <div id="conflictsList">
        <template is="dom-repeat" items="[[conflicts_]]">
          <password-preview-item password-id="[[item.id]]" url="[[item.url]]" username="[[item.username]]" password="[[item.password]]" first="[[!index]]" on-change="onPasswordSelectedChange_" checked="[[isPreviewItemChecked_(item.id)]]">
          </password-preview-item>
        </template>
      </div>
    </div>
    <div slot="button-container">
      <cr-button id="cancelButton" class="cancel-button flex-float-left" on-click="onCloseClick_" autofocus>
        $i18n{importPasswordsCancel}
      </cr-button>
      <cr-button id="skipButton" class="skip-button" on-click="onSkipClick_">
        $i18n{importPasswordsSkip}
      </cr-button>
      <cr-button id="replaceButton" class="action-button" on-click="onReplaceClick_" disabled="[[shouldDisableReplace_(conflictsSelectedForReplace_)]]">
        $i18n{importPasswordsReplace}
      </cr-button>
    </div>
  </cr-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var DialogState;(function(DialogState){DialogState[DialogState["NO_DIALOG"]=0]="NO_DIALOG";DialogState[DialogState["IN_PROGRESS"]=1]="IN_PROGRESS";DialogState[DialogState["STORE_PICKER"]=2]="STORE_PICKER";DialogState[DialogState["SUCCESS"]=3]="SUCCESS";DialogState[DialogState["ERROR"]=4]="ERROR";DialogState[DialogState["ALREADY_ACTIVE"]=5]="ALREADY_ACTIVE";DialogState[DialogState["CONFLICTS"]=6]="CONFLICTS"})(DialogState||(DialogState={}));var PasswordsImportDesktopInteractions;(function(PasswordsImportDesktopInteractions){PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["DIALOG_OPENED_FROM_THREE_DOT_MENU"]=0]="DIALOG_OPENED_FROM_THREE_DOT_MENU";PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["DIALOG_OPENED_FROM_EMPTY_STATE"]=1]="DIALOG_OPENED_FROM_EMPTY_STATE";PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CANCELED_BEFORE_FILE_SELECT"]=2]="CANCELED_BEFORE_FILE_SELECT";PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["UPM_STORE_PICKER_OPENED"]=3]="UPM_STORE_PICKER_OPENED";PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["UPM_FILE_SELECT_LAUNCHED"]=4]="UPM_FILE_SELECT_LAUNCHED";PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["UPM_VIEW_PASSWORDS_CLICKED"]=5]="UPM_VIEW_PASSWORDS_CLICKED";PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CONFLICTS_CANCELED"]=6]="CONFLICTS_CANCELED";PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CONFLICTS_REAUTH_FAILED"]=7]="CONFLICTS_REAUTH_FAILED";PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CONFLICTS_SKIP_CLICKED"]=8]="CONFLICTS_SKIP_CLICKED";PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["CONFLICTS_REPLACE_CLICKED"]=9]="CONFLICTS_REPLACE_CLICKED";PasswordsImportDesktopInteractions[PasswordsImportDesktopInteractions["COUNT"]=10]="COUNT"})(PasswordsImportDesktopInteractions||(PasswordsImportDesktopInteractions={}));function recordPasswordsImportInteraction(interaction){chrome.metricsPrivate.recordEnumerationValue("PasswordManager.Import.DesktopInteractions",interaction,PasswordsImportDesktopInteractions.COUNT)}const PasswordsImporterElementBase=I18nMixin(PolymerElement);class PasswordsImporterElement extends PasswordsImporterElementBase{constructor(){super(...arguments);this.dialogState_=DialogState.NO_DIALOG;this.results_=null;this.passwordManager_=PasswordManagerImpl.getInstance()}static get is(){return"passwords-importer"}static get template(){return getTemplate()}static get properties(){return{enablePasswordsImportM2_:{type:Boolean,value(){return loadTimeData.getBoolean("enablePasswordsImportM2")}},dialogState_:Number,dialogStateEnum_:{type:Object,value:DialogState,readOnly:true},storeOptionEnum_:{type:Object,value:chrome.passwordsPrivate.PasswordStoreSet,readOnly:true},selectedStoreOption_:String,results_:Object,successDescription_:String,failedImportsSummary_:String,rowsWithUnknownErrorsSummary_:String,conflictsDialogTitle_:String,conflicts_:{type:Array,value:[]},conflictsSelectedForReplace_:{type:Array,value:[]},showRowsWithUnknownErrorsSummary_:{type:Boolean,value:false},bannerDescription_:{type:String,computed:"computeBannerDescription_(isUserSyncingPasswords,"+"isAccountStoreUser, accountEmail)"}}}static get observers(){return["updateDefaultStore_(isAccountStoreUser)","updatePasswordsSavedToAccount_(isUserSyncingPasswords)"]}launchImport(){recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.DIALOG_OPENED_FROM_EMPTY_STATE);this.dialogState_=DialogState.IN_PROGRESS;setTimeout((()=>{if(this.isAccountStoreUser){this.dialogState_=DialogState.STORE_PICKER}else{this.selectFileHelper_()}}),200)}updateDefaultStore_(){if(this.isAccountStoreUser){PasswordManagerImpl.getInstance().isAccountStoreDefault().then((isAccountStoreDefault=>{this.selectedStoreOption_=isAccountStoreDefault?chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT:chrome.passwordsPrivate.PasswordStoreSet.DEVICE}))}}updatePasswordsSavedToAccount_(){if(this.isUserSyncingPasswords){this.passwordsSavedToAccount_=true}else{this.passwordsSavedToAccount_=false}}isState_(state){return this.dialogState_===state}computeBannerDescription_(){if(this.isAccountStoreUser){return this.i18n("importPasswordsGenericDescription")}if(this.isUserSyncingPasswords){return this.i18n("importPasswordsDescriptionAccount",this.i18n("localPasswordManager"),this.accountEmail)}return this.i18n("importPasswordsDescriptionDevice")}onBannerClick_(){if(this.isAccountStoreUser&&this.isState_(DialogState.NO_DIALOG)){recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.UPM_STORE_PICKER_OPENED);this.dialogState_=DialogState.STORE_PICKER}}closeDialog_(){this.dialogState_=DialogState.NO_DIALOG}async resetImporter(){let deleteFile=false;if(this.isState_(DialogState.SUCCESS)&&!this.shouldHideDeleteFileOption_()){const deleteFileOption=this.shadowRoot.querySelector("#deleteFileOption");assert(deleteFileOption);deleteFile=deleteFileOption.checked;chrome.metricsPrivate.recordBoolean("PasswordManager.Import.FileDeletionSelected",deleteFile)}await this.passwordManager_.resetImporter(deleteFile)}async onCloseClick_(){if(this.isState_(DialogState.CONFLICTS)){recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.CONFLICTS_CANCELED)}await this.resetImporter();this.closeDialog_()}async onViewPasswordsClick_(){recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.UPM_VIEW_PASSWORDS_CLICKED);await this.resetImporter();this.closeDialog_();Router.getInstance().navigateTo(Page.PASSWORDS)}async selectFileHelper_(){this.conflictsSelectedForReplace_=[];this.dialogState_=DialogState.IN_PROGRESS;let destinationStore=chrome.passwordsPrivate.PasswordStoreSet.DEVICE;if(this.isAccountStoreUser){const storePicker=this.shadowRoot.querySelector("#storePicker");assert(storePicker);this.selectedStoreOption_=storePicker.value;this.passwordsSavedToAccount_=this.selectedStoreOption_===chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT;if(this.passwordsSavedToAccount_){destinationStore=chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT}}this.results_=await this.passwordManager_.importPasswords(destinationStore);await this.processResults_()}async onSelectFileClick_(){recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.UPM_FILE_SELECT_LAUNCHED);await this.selectFileHelper_()}async continueImportHelper_(selectedIds){this.dialogState_=DialogState.IN_PROGRESS;this.results_=await this.passwordManager_.continueImport(selectedIds);if(this.results_.status===chrome.passwordsPrivate.ImportResultsStatus.DISMISSED){recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.CONFLICTS_REAUTH_FAILED);this.dialogState_=DialogState.CONFLICTS;return}await this.processResults_()}async onSkipClick_(){recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.CONFLICTS_SKIP_CLICKED);await this.continueImportHelper_([])}async onReplaceClick_(){recordPasswordsImportInteraction(PasswordsImportDesktopInteractions.CONFLICTS_REPLACE_CLICKED);await this.continueImportHelper_(this.conflictsSelectedForReplace_)}isPreviewItemChecked_(id){return this.conflictsSelectedForReplace_.includes(id)}onPasswordSelectedChange_(){this.conflictsSelectedForReplace_=Array.from(this.shadowRoot.querySelectorAll("password-preview-item")).filter((item=>item.checked)).map((item=>item.passwordId))}shouldDisableReplace_(){return!this.conflictsSelectedForReplace_.length}async processResults_(){assert(this.results_);switch(this.results_.status){case chrome.passwordsPrivate.ImportResultsStatus.SUCCESS:await this.handleSuccess_();return;case chrome.passwordsPrivate.ImportResultsStatus.MAX_FILE_SIZE:case chrome.passwordsPrivate.ImportResultsStatus.IO_ERROR:case chrome.passwordsPrivate.ImportResultsStatus.UNKNOWN_ERROR:case chrome.passwordsPrivate.ImportResultsStatus.NUM_PASSWORDS_EXCEEDED:case chrome.passwordsPrivate.ImportResultsStatus.BAD_FORMAT:this.dialogState_=DialogState.ERROR;break;case chrome.passwordsPrivate.ImportResultsStatus.CONFLICTS:this.conflictsDialogTitle_=await PluralStringProxyImpl.getInstance().getPluralString("importPasswordsConflictsTitle",this.results_.displayedEntries.length);this.conflicts_=this.results_.displayedEntries;this.dialogState_=DialogState.CONFLICTS;break;case chrome.passwordsPrivate.ImportResultsStatus.IMPORT_ALREADY_ACTIVE:this.dialogState_=DialogState.ALREADY_ACTIVE;break;case chrome.passwordsPrivate.ImportResultsStatus.DISMISSED:this.dialogState_=DialogState.NO_DIALOG;break;default:assertNotReached()}}getFailedImportsWithKnownErrors_(){assert(this.results_);return this.results_.displayedEntries.filter((entry=>entry.status!==chrome.passwordsPrivate.ImportEntryStatus.UNKNOWN_ERROR))}async handleSuccess_(){assert(this.results_);if(this.results_.displayedEntries.length){const rowsWithUnknownErrorCount=this.results_.displayedEntries.filter((entry=>entry.status===chrome.passwordsPrivate.ImportEntryStatus.UNKNOWN_ERROR)).length;this.failedImportsSummary_=await PluralStringProxyImpl.getInstance().getPluralString("importPasswordsFailuresSummary",this.results_.displayedEntries.length);if(rowsWithUnknownErrorCount){this.rowsWithUnknownErrorsSummary_=await PluralStringProxyImpl.getInstance().getPluralString("importPasswordsBadRowsFormat",rowsWithUnknownErrorCount);this.showRowsWithUnknownErrorsSummary_=true}}if(this.passwordsSavedToAccount_){let descriptionText=await PluralStringProxyImpl.getInstance().getPluralString("importPasswordsSuccessSummaryAccount",this.results_.numberImported);descriptionText=descriptionText.replace("$1",this.i18n("localPasswordManager"));this.successDescription_=descriptionText.replace("$2",this.accountEmail)}else{const descriptionText=await PluralStringProxyImpl.getInstance().getPluralString("importPasswordsSuccessSummaryDevice",this.results_.numberImported);this.successDescription_=descriptionText.replace("$1",this.i18n("localPasswordManager"))}this.dialogState_=DialogState.SUCCESS}getSuccessDialogTitle_(){assert(this.results_);return this.results_.displayedEntries.length?this.i18n("importPasswordsCompleteTitle"):this.i18n("importPasswordsSuccessTitle")}getErrorDialogDescription_(){assert(this.results_);switch(this.results_.status){case chrome.passwordsPrivate.ImportResultsStatus.MAX_FILE_SIZE:return this.i18nAdvanced("importPasswordsFileSizeExceeded");case chrome.passwordsPrivate.ImportResultsStatus.IO_ERROR:case chrome.passwordsPrivate.ImportResultsStatus.UNKNOWN_ERROR:return this.i18nAdvanced("importPasswordsUnknownError");case chrome.passwordsPrivate.ImportResultsStatus.NUM_PASSWORDS_EXCEEDED:return this.i18nAdvanced("importPasswordsLimitExceeded");case chrome.passwordsPrivate.ImportResultsStatus.BAD_FORMAT:return this.i18nAdvanced("importPasswordsBadFormatError",{attrs:["class"],substitutions:[this.results_.fileName,loadTimeData.getString("importPasswordsHelpURL")]});default:assertNotReached()}}getSuccessTipHtml_(){assert(this.results_);return this.i18nAdvanced("importPasswordsSuccessTip",{attrs:["class"],substitutions:[this.results_.fileName]})}getCheckboxLabelHtml_(){assert(this.results_);return this.i18nAdvanced("importPasswordsDeleteFileOption",{attrs:["class"],substitutions:[this.results_.fileName]})}shouldHideLinkRowIcon_(){return!this.isAccountStoreUser||this.isState_(DialogState.IN_PROGRESS)}shouldShowSelectFileButton_(){return!this.isAccountStoreUser&&!this.isState_(DialogState.IN_PROGRESS)}shouldHideTipBox_(){if(this.enablePasswordsImportM2_){return true}assert(this.results_);return!!this.results_.displayedEntries.length}shouldHideDeleteFileOption_(){if(!this.enablePasswordsImportM2_){return true}assert(this.results_);return!!this.results_.displayedEntries.length}shouldHideFailuresSummary_(){assert(this.results_);return!this.results_.displayedEntries.length}getStoreOptionAccountText_(){assert(this.accountEmail);return this.i18n("passwordsStoreOptionAccount",this.i18n("localPasswordManager"),this.accountEmail)}getFailedEntryErrorMessage_(status){switch(status){case chrome.passwordsPrivate.ImportEntryStatus.MISSING_PASSWORD:return this.i18n("importPasswordsMissingPassword");case chrome.passwordsPrivate.ImportEntryStatus.MISSING_URL:return this.i18n("importPasswordsMissingURL");case chrome.passwordsPrivate.ImportEntryStatus.INVALID_URL:return this.i18n("importPasswordsInvalidURL");case chrome.passwordsPrivate.ImportEntryStatus.LONG_URL:return this.i18n("importPasswordsLongURL");case chrome.passwordsPrivate.ImportEntryStatus.LONG_PASSWORD:return this.i18n("importPasswordsLongPassword");case chrome.passwordsPrivate.ImportEntryStatus.LONG_USERNAME:return this.i18n("importPasswordsLongUsername");case chrome.passwordsPrivate.ImportEntryStatus.CONFLICT_PROFILE:if(this.isUserSyncingPasswords){return this.i18n("importPasswordsConflictAccount",this.i18n("localPasswordManager"),this.accountEmail)}return this.i18n("importPasswordsConflictDevice");case chrome.passwordsPrivate.ImportEntryStatus.CONFLICT_ACCOUNT:return this.i18n("importPasswordsConflictAccount",this.i18n("localPasswordManager"),this.accountEmail);case chrome.passwordsPrivate.ImportEntryStatus.LONG_NOTE:case chrome.passwordsPrivate.ImportEntryStatus.LONG_CONCATENATED_NOTE:return this.i18n("importPasswordsLongNote");case chrome.passwordsPrivate.ImportEntryStatus.UNKNOWN_ERROR:case chrome.passwordsPrivate.ImportEntryStatus.NON_ASCII_URL:default:assertNotReached()}}}customElements.define(PasswordsImporterElement.is,PasswordsImporterElement);
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PromoCardsProxyImpl{getAvailablePromoCard(){return sendWithPromise("getAvailablePromoCard")}recordPromoDismissed(id){chrome.send("recordPromoDismissed",[id])}static getInstance(){return instance||(instance=new PromoCardsProxyImpl)}static setInstance(obj){instance=obj}}let instance=null;export{AddPasswordDialogElement,AuthTimedOutDialogElement,CheckupSubpage,CrButtonElement,CrDialogElement,CrExpandButtonElement,CrInputElement,CrSettingsPrefs,CredentialFieldElement,CredentialNoteElement,DeletePasskeyDialogElement,EditPasskeyDialogElement,EditPasswordDialogElement,OpenWindowProxyImpl,PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID,Page,PasskeyDetailsCardElement,PasswordCheckInteraction,PasswordDetailsCardElement,PasswordDetailsSectionElement,PasswordListItemElement,PasswordManagerAppElement,PasswordManagerImpl,PasswordManagerSideBarElement,PasswordManagerToolbarElement,PasswordViewPageInteractions,PasswordsExporterElement,PasswordsImporterElement,PasswordsSectionElement,PluralStringProxyImpl,PrefToggleButtonElement,PromoCardsProxyImpl,Route,RouteObserverMixin,Router,SettingsPrefsElement,SettingsSectionElement,ShareFlowState,SharePasswordConfirmationDialogElement,SharePasswordFlowElement,SharePasswordGroupAvatarElement,SharePasswordLoadingDialogElement,SharePasswordRecipientElement,SiteFaviconElement,SyncBrowserProxyImpl,TrustedVaultBannerState,UrlParam};
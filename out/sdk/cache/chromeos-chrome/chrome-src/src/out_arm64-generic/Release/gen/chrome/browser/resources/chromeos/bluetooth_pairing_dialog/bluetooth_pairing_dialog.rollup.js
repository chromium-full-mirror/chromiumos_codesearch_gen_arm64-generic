import{html,Polymer,dom,mixinBehaviors,PolymerElement,afterNextRender,Base,useShadow,Templatizer,OptionalMutableDataBehavior,animationFrame,microTask,idlePeriod,flush,Debouncer,enqueueDebouncer,matches,translate,beforeNextRender,dedupingMixin}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{loadTimeData}from"chrome://resources/ash/common/load_time_data.m.js";import{DeviceType,SystemPropertiesObserverReceiver,BluetoothDiscoveryDelegateReceiver,BluetoothSystemState,DevicePairingDelegateReceiver,PairingResult,KeyEnteredHandlerReceiver}from"chrome://resources/mojo/chromeos/ash/services/bluetooth_config/public/mojom/cros_bluetooth_config.mojom-webui.js";import{getBluetoothConfig}from"chrome://resources/ash/common/bluetooth/cros_bluetooth_config.js";import"./strings.m.js";import{mojo}from"chrome://resources/mojo/mojo/public/js/bindings.js";const styleMod$5=document.createElement("dom-module");styleMod$5.appendChild(html`
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);styleMod$5.register("cr-hidden-style");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$5=html`
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
`;template$5.setAttribute("style","display: none;");document.head.appendChild(template$5.content);const template$4=html`
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
`;document.head.appendChild(template$4.content);
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
*/const PaperRippleBehavior={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){if(this.focused){this.ensureRipple()}},_downHandler:function(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}},ensureRipple:function(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){var domContainer=dom(this._rippleContainer||this);var target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(target)){this._ripple.uiDownAction(optTriggeringEvent)}}}},getRipple:function(){this.ensureRipple();return this._ripple},hasRipple:function(){return Boolean(this._ripple)},_createRipple:function(){var element=document.createElement("paper-ripple");return element},_noinkChanged:function(noink){if(this.hasRipple()){this._ripple.noink=noink}}};function getTemplate$d(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style">:host{--active-shadow-rgb:var(--google-grey-800-rgb);--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-600);--border-color:var(--google-grey-300);--disabled-bg-action:var(--google-grey-100);--disabled-bg:white;--disabled-border-color:var(--google-grey-100);--disabled-text-color:var(--google-grey-600);--focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--hover-bg-action:rgba(var(--google-blue-600-rgb), .9);--hover-bg-color:rgba(var(--google-blue-500-rgb), .04);--hover-border-color:var(--google-blue-100);--hover-shadow-action-rgb:var(--google-blue-500-rgb);--ink-color-action:white;--ink-color:var(--google-blue-600);--ripple-opacity-action:.32;--ripple-opacity:.1;--text-color-action:white;--text-color:var(--google-blue-600)}@media (prefers-color-scheme:dark){:host{--active-bg:black linear-gradient(rgba(255, 255, 255, .06),
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
const CrButtonElementBase=mixinBehaviors([PaperRippleBehavior],PolymerElement);class CrButtonElement extends CrButtonElementBase{static get is(){return"cr-button"}static get template(){return getTemplate$d()}static get properties(){return{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},circleRipple:{type:Boolean,value:false},hasPrefixIcon_:{type:Boolean,reflectToAttribute:true,value:false},hasSuffixIcon_:{type:Boolean,reflectToAttribute:true,value:false}}}constructor(){super();this.spaceKeyDown_=false;this.timeoutIds_=new Set;this.addEventListener("blur",this.onBlur_.bind(this));this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));this.addEventListener("pointerdown",this.onPointerDown_.bind(this))}ready(){super.ready();if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}if(!this.hasAttribute("aria-disabled")){this.setAttribute("aria-disabled",this.disabled?"true":"false")}FocusOutlineManager.forDocument(document)}disconnectedCallback(){super.disconnectedCallback();this.timeoutIds_.forEach(clearTimeout);this.timeoutIds_.clear()}setTimeout_(fn,delay){if(!this.isConnected){return}const id=setTimeout((()=>{this.timeoutIds_.delete(id);fn()}),delay);this.timeoutIds_.add(id)}disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",this.disabled?"true":"false");this.applyTabIndex_()}applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value.toString())}onBlur_(){this.spaceKeyDown_=false;this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}onPrefixIconSlotChanged_(){this.hasPrefixIcon_=this.$.prefixIcon.assignedElements().length>0}onSuffixIconSlotChanged_(){this.hasSuffixIcon_=this.$.suffixIcon.assignedElements().length>0}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}this.getRipple().uiDownAction();if(e.key==="Enter"){this.click();this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}else if(e.key===" "){this.spaceKeyDown_=true}}onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click();this.getRipple().uiUpAction()}}onPointerDown_(){this.ensureRipple()}_createRipple(){const ripple=super._createRipple();if(this.circleRipple){ripple.setAttribute("center","");ripple.classList.add("circle")}return ripple}}customElements.define(CrButtonElement.is,CrButtonElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$3=html`
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
`;template$3.setAttribute("style","display: none;");document.head.appendChild(template$3.content);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronRangeBehavior={properties:{value:{type:Number,value:0,notify:true,reflectToAttribute:true},min:{type:Number,value:0,notify:true},max:{type:Number,value:100,notify:true},step:{type:Number,value:1,notify:true},ratio:{type:Number,value:0,readOnly:true,notify:true}},observers:["_update(value, min, max, step)"],_calcRatio:function(value){return(this._clampValue(value)-this.min)/(this.max-this.min)},_clampValue:function(value){return Math.min(this.max,Math.max(this.min,this._calcStep(value)))},_calcStep:function(value){value=parseFloat(value);if(!this.step){return value}var numSteps=Math.round((value-this.min)/this.step);if(this.step<1){return numSteps/(1/this.step)+this.min}else{return numSteps*this.step+this.min}},_validateValue:function(){var v=this._clampValue(this.value);this.value=this.oldValue=isNaN(v)?this.oldValue:v;return this.value!==v},_update:function(){this._validateValue();this._setRatio(this._calcRatio(this.value)*100)}};
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
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        transition-property: transform;

        /* Duration */
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        transform-origin: left center;
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        transform-origin: right center;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        transform-origin: center center;

        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
        }
        50% {
        }
        75% {
        }
        100% {
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
        }
        30% {
        }
        90% {
        }
        100% {
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:"paper-progress",behaviors:[IronRangeBehavior],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:true},indeterminate:{type:Boolean,value:false,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(indeterminate){this.toggleClass("indeterminate",indeterminate,this.$.primaryProgress)},_transformProgress:function(progress,ratio){var transform="scaleX("+ratio/100+")";progress.style.transform=progress.style.webkitTransform=transform},_mainRatioChanged:function(ratio){this._transformProgress(this.$.primaryProgress,ratio)},_progressChanged:function(secondaryProgress,value,min,max,indeterminate){secondaryProgress=this._clampValue(secondaryProgress);value=this._clampValue(value);var secondaryRatio=this._calcRatio(secondaryProgress)*100;var mainRatio=this._calcRatio(value)*100;this._setSecondaryRatio(secondaryRatio);this._transformProgress(this.$.secondaryProgress,secondaryRatio);this._transformProgress(this.$.primaryProgress,mainRatio);this.secondaryProgress=secondaryProgress;if(indeterminate){this.removeAttribute("aria-valuenow")}else{this.setAttribute("aria-valuenow",value)}this.setAttribute("aria-valuemin",min);this.setAttribute("aria-valuemax",max)},_disabledChanged:function(disabled){this.setAttribute("aria-disabled",disabled?"true":"false")},_hideSecondaryProgress:function(secondaryRatio){return secondaryRatio===0}});const styleMod$4=document.createElement("dom-module");styleMod$4.appendChild(html`
  <template>
    <style>
:host-context([cros]) a:not(.item)[href]{color:var(--cros-link-color)}:host-context([cros]) cr-button[has-prefix-icon_],:host-context([cros]) cr-button[has-suffix-icon_]{--iron-icon-fill-color:currentColor}:host-context([cros]) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-bg-color-elevation-3);background-image:none;box-shadow:var(--cros-elevation-3-shadow)}:host-context([cros]) cr-radio-button{--cr-radio-button-checked-color:var(--cros-radio-button-color);--cr-radio-button-checked-ripple-color:var(--cros-radio-button-ripple-color);--cr-radio-button-unchecked-color:var(--cros-radio-button-color-unchecked);--cr-radio-button-unchecked-ripple-color:var(--cros-radio-button-ripple-color-unchecked)}:host-context([cros]) cr-toast{--cr-toast-background-color:var(--cros-toast-background-color);--cr-toast-background:var(--cros-toast-background-color);--cr-toast-text-color:var(--cros-toast-text-color);--iron-icon-fill-color:var(--cros-toast-icon-color)}:host-context([cros]) cr-toast .error-message{color:var(--cros-toast-text-color)}:host-context([cros]) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-switch-track-color-active);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-switch-knob-color-active);--cr-toggle-checked-ripple-color:var(--cros-focus-aura-color);--cr-toggle-unchecked-bar-color:var(--cros-switch-track-color-inactive);--cr-toggle-unchecked-button-color:var(--cros-switch-knob-color-inactive);--cr-toggle-unchecked-ripple-color:var(--cros-ripple-color);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context([cros]) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-focus-ring-color)}:host-context([cros]) .primary-toggle{color:var(--cros-text-color-secondary)}:host-context([cros]) .primary-toggle[checked]{color:var(--cros-text-color-prominent)}:host-context([cros]) paper-spinner-lite{--paper-spinner-color:var(--cros-icon-color-prominent)}:host-context([cros]) cr-tooltip-icon{--cr-link-color:var(--cros-tooltip-link-color)}:host-context(body.jelly-enabled){--cros-button-label-color-primary:var(--cros-sys-on_primary);--cros-link-color:var(--cros-sys-primary);--cros-separator-color:var(--cros-sys-separator);--cros-tab-slider-track-color:var(--cros-sys-surface_variant, 80%);--cr-form-field-label-color:var(--cros-sys-on_surface);--cr-link-color:var(--cros-sys-primary);--cr-primary-text-color:var(--cros-sys-on_surface);--cr-secondary-text-color:var(--cros-sys-on_surface_variant)}:host-context(body.jelly-enabled) cr-button{--text-color:var(--cros-sys-on_primary_container);--ink-color:var(--cros-sys-ripple_primary);--iron-icon-fill-color:currentColor;--hover-bg-color:var(--cros-sys-hover_on_subtle);--ripple-opacity:.1;--bg-action:var(--cros-sys-primary);--ink-color-action:var(--cros-sys-ripple_primary);--text-color-action:var(--cros-sys-on_primary);--hover-bg-action:var(--cros-sys-hover_on_prominent);--ripple-opacity-action:1;--disabled-bg:var(--cros-sys-disabled_container);--disabled-bg-action:var(--cros-sys-disabled_container);--disabled-text-color:var(--cros-sys-disabled);background-color:var(--cros-sys-primary_container);border:none}:host-context(body.jelly-enabled) cr-button:hover::part(hoverBackground){background-color:var(--hover-bg-color);display:block}:host-context(body.jelly-enabled) cr-button.action-button:not(:active):hover,:host-context(body.jelly-enabled) cr-button:active{box-shadow:none}:host-context(body.jelly-enabled) cr-button.action-button{background-color:var(--bg-action)}:host-context(body.jelly-enabled) cr-button.action-button:hover::part(hoverBackground){background-color:var(--hover-bg-action)}:host-context(body.jelly-enabled) cr-button[disabled]{background-color:var(--cros-sys-disabled_container)}:host-context(body.jelly-enabled):host-context(.focus-outline-visible) cr-button:focus{box-shadow:none;outline:2px solid var(--cros-sys-focus_ring)}:host-context(body.jelly-enabled) cr-checkbox{--cr-checkbox-checked-box-color:var(--cros-sys-primary);--cr-checkbox-ripple-checked-color:var(--cros-sys-ripple_primary);--cr-checkbox-checked-ripple-opacity:1;--cr-checkbox-mark-color:var(--cros-sys-inverse_on_surface);--cr-checkbox-ripple-unchecked-color:var(--cros-sys-ripple_primary);--cr-checkbox-unchecked-box-color:var(--cros-sys-on_surface);--cr-checkbox-unchecked-ripple-opacity:1}:host-context(body.jelly-enabled) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-sys-base_elevated);background-image:none;box-shadow:0 0 12px 0 var(--cros-sys-shadow)}:host-context(body.jelly-enabled) cr-dialog>[slot=title]{font:var(--cros-display-7-font)}:host-context(body.jelly-enabled) cr-drawer{--cr-drawer-background-color:var(--cros-sys-app_base_shaded)}:host-context(body.jelly-enabled) cr-expand-button::part(icon),:host-context(body.jelly-enabled) cr-icon-button,:host-context(body.jelly-enabled) cr-link-row::part(icon){--cr-icon-button-fill-color:var(--cros-sys-secondary)}:host-context(body.jelly-enabled) cr-input,:host-context(body.jelly-enabled) cr-search-field::part(searchInput),:host-context(body.jelly-enabled) cr-textarea{--cr-input-background-color:var(--cros-sys-input_field_on_base);--cr-input-error-color:var(--cros-sys-error);--cr-input-focus-color:var(--cros-sys-primary);--cr-input-placeholder-color:var(--cros-sys-secondary)}:host-context(body.jelly-enabled) .md-select{--md-select-bg-color:var(--cros-sys-input_field_on_base);--md-select-focus-shadow-color:var(--cros-sys-primary);--md-select-option-bg-color:var(--cros-sys-base_elevated);--md-select-text-color:var(--cros-sys-on_surface)}:host-context(body.jelly-enabled) cr-action-menu{--cr-menu-background-color:var(--cros-sys-base_elevated);--cr-menu-background-focus-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled),:host-context(body.jelly-enabled) cr-radio-button{--cr-radio-button-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--cr-radio-button-unchecked-color:var(--cros-sys-on_surface);--cr-radio-button-unchecked-ripple-color:var(--cros-sys-ripple_neutral_on_subtle)}:host-context(body.jelly-enabled) cr-card-radio-button{--cr-card-background-color:var(--cros-sys-app_base);--cr-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--hover-bg-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled) cr-search-field{--cr-search-field-clear-icon-fill:var(--cros-sys-primary);--cr-search-field-clear-icon-margin-end:6px;--cr-search-field-input-border-bottom:none;--cr-search-field-input-padding-start:8px;--cr-search-field-input-underline-border-radius:4px;--cr-search-field-search-icon-display:none;--cr-search-field-search-icon-fill:var(--cros-sys-primary);--cr-search-field-search-icon-inline-display:block;--cr-search-field-search-icon-inline-margin-start:6px;border-radius:4px}:host-context(body.jelly-enabled) cr-slider{--cr-slider-active-color:var(--cros-sys-primary);--cr-slider-container-color:var(--cros-sys-primary_container);--cr-slider-container-disabled-color:var(--cros-sys-disabled_container);--cr-slider-disabled-color:var(--cros-sys-disabled);--cr-slider-knob-active-color:var(--cros-sys-primary);--cr-slider-knob-disabled-color:var(--cros-sys-disabled);--cr-slider-marker-active-color:var(--cros-sys-primary_container);--cr-slider-marker-color:var(--cros-sys-primary);--cr-slider-marker-disabled-color:var(--cros-sys-disabled);--cr-slider-ripple-color:var(--cros-sys-hover_on_prominent)}:host-context(body.jelly-enabled) cr-slider:not([disabled])::part(knob){background-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-slider[disabled]::part(knob){border:none}:host-context(body.jelly-enabled) cr-slider::part(label){background:var(--cros-sys-primary);color:var(--cros-sys-on_primary)}:host-context(body.jelly-enabled) cr-tabs{--cr-tabs-selected-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-sys-primary_container);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-sys-primary);--cr-toggle-checked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-unchecked-bar-color:var(--cros-sys-secondary);--cr-toggle-unchecked-button-color:var(--cros-sys-surface_variant);--cr-toggle-unchecked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context(body.jelly-enabled) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-sys-focus_ring)}
    </style>
  </template>
`.content);styleMod$4.register("cros-color-overrides");
// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert$1(condition,opt_message){if(!condition){let message="Assertion failed";if(opt_message){message=message+": "+opt_message}const error=new Error(message);const global=function(){const thisOrSelf=this||self;thisOrSelf.traceAssertionsForTesting;return thisOrSelf}();if(global.traceAssertionsForTesting){console.warn(error.stack)}throw error}return condition}function assertNotReached$1(message){assert$1(false,message||"Unreachable code hit")}function assertInstanceof(value,type,message){if(!(value instanceof type)){assertNotReached$1(message||"Value "+value+" is not a[n] "+(type.name||typeof type))}return value}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let hideInk=false;document.addEventListener("pointerdown",(function(){hideInk=true}),true);document.addEventListener("keydown",(function(){hideInk=false}),true);const focusWithoutInk=function(toFocus){if(!("noink"in toFocus)||!hideInk){toFocus.focus();return}assert$1(document===toFocus.ownerDocument);const{noink:noink}=toFocus;toFocus.noink=true;toFocus.focus();toFocus.noink=noink};
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const sanitizeInnerHtmlInternal$1=function(rawString,opts){opts=opts||{};return parseHtmlSubset$1(`<b>${rawString}</b>`,opts.tags,opts.attrs).firstChild.innerHTML};let sanitizedPolicy$1=null;function sanitizeInnerHtml$1(rawString,opts){assert$1(window.trustedTypes);if(sanitizedPolicy$1===null){sanitizedPolicy$1=window.trustedTypes.createPolicy("ash-deprecated-sanitize-inner-html",{createHTML:(string,...opts)=>sanitizeInnerHtmlInternal$1(string,opts[0]),createScript:message=>assertNotReached$1(message),createScriptURL:message=>assertNotReached$1(message)})}return sanitizedPolicy$1.createHTML(rawString,opts)}const parseHtmlSubset$1=function(){const allowAttribute=(node,value)=>true;const allowedAttributes=new Map([["href",(node,value)=>node.tagName==="A"&&(value.startsWith("chrome://")||value.startsWith("https://")||value==="#")],["target",(node,value)=>node.tagName==="A"&&value==="_blank"]]);const allowedOptionalAttributes=new Map([["class",allowAttribute],["id",allowAttribute],["is",(node,value)=>value==="action-link"||value===""],["role",(node,value)=>value==="link"],["src",(node,value)=>node.tagName==="IMG"&&value.startsWith("chrome://")],["tabindex",allowAttribute],["aria-hidden",allowAttribute],["aria-labelledby",allowAttribute]]);const allowedTags=new Set(["A","B","I","BR","DIV","EM","KBD","P","PRE","SPAN","STRONG"]);const allowedOptionalTags=new Set(["IMG","LI","UL"]);let unsanitizedPolicy;function mergeTags(optTags){const clone=new Set(allowedTags);optTags.forEach((str=>{const tag=str.toUpperCase();if(allowedOptionalTags.has(tag)){clone.add(tag)}}));return clone}function mergeAttrs(optAttrs){const clone=new Map([...allowedAttributes]);optAttrs.forEach((key=>{if(allowedOptionalAttributes.has(key)){clone.set(key,allowedOptionalAttributes.get(key))}}));return clone}function walk(n,f){f(n);for(let i=0;i<n.childNodes.length;i++){walk(n.childNodes[i],f)}}function assertElement(tags,node){if(!tags.has(node.tagName)){throw Error(node.tagName+" is not supported")}}function assertAttribute(attrs,attrNode,node){const n=attrNode.nodeName;const v=attrNode.nodeValue;if(!attrs.has(n)||!attrs.get(n)(node,v)){throw Error(node.tagName+"["+n+'="'+v+'"] is not supported')}}return function(s,extraTags,extraAttrs){const tags=extraTags?mergeTags(extraTags):allowedTags;const attrs=extraAttrs?mergeAttrs(extraAttrs):allowedAttributes;const doc=document.implementation.createHTMLDocument("");const r=doc.createRange();r.selectNode(doc.body);if(window.trustedTypes){if(!unsanitizedPolicy){unsanitizedPolicy=trustedTypes.createPolicy("ash-deprecated-parse-html-subset",{createHTML:untrustedHTML=>untrustedHTML})}s=unsanitizedPolicy.createHTML(s)}const df=r.createContextualFragment(s);walk(df,(function(node){switch(node.nodeType){case Node.ELEMENT_NODE:assertElement(tags,node);const nodeAttrs=node.attributes;for(let i=0;i<nodeAttrs.length;++i){assertAttribute(attrs,nodeAttrs[i],node)}break;case Node.COMMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:case Node.TEXT_NODE:break;default:throw Error("Node type "+node.nodeType+" is not supported")}}));return df}}();
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const I18nBehavior={properties:{locale:{type:String,value:""}},i18nUpdateLocale(){this.locale=loadTimeData.getString("app_locale")},i18nRaw_(id,varArgs){return arguments.length===1?loadTimeData.getString(id):loadTimeData.getStringF.apply(loadTimeData,arguments)},i18n(id,varArgs){const rawString=this.i18nRaw_.apply(this,arguments);return parseHtmlSubset$1("<b>"+rawString+"</b>").firstChild.textContent},i18nAdvanced(id,opts){opts=opts||{};const args=[id].concat(opts.substitutions||[]);const rawString=this.i18nRaw_.apply(this,args);return sanitizeInnerHtml$1(rawString,opts)},i18nDynamic(locale,id,varArgs){return this.i18n.apply(this,Array.prototype.slice.call(arguments,1))},i18nRecursive(locale,id,varArgs){let args=Array.prototype.slice.call(arguments,2);if(args.length>0){const self=this;args=args.map((function(str){return self.i18nExists(str)?loadTimeData.getString(str):str}))}return this.i18nDynamic.apply(this,[locale,id].concat(args))},i18nExists(id){return loadTimeData.valueExists(id)}};function getTemplate$c(){return html`<!--_html_template_start_--><style include="iron-positioning cros-color-overrides">
  :host ::slotted([slot='page-body']) {
    color: var(--cr-primary-text-color);
    height: 292px;
  }

  paper-progress {
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    --paper-progress-active-color: var(--cros-icon-color-prominent);
    --paper-progress-container-color: rgba(var(--cros-icon-color-prominent-rgb),
                                           var(--cros-second-tone-opacity));
  }

  :host-context(body.jelly-enabled) paper-progress {
    --paper-progress-active-color: var(--cros-color-primary);
    --paper-progress-container-color: var(--cros-highlight-color);
  }

  #buttonBar {
    align-self: flex-end;
    margin-top: 30px;
  }

  #container {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 8px 8px 8px;
  }

  #title {
    color: var(--cr-primary-text-color);
    font-weight: normal;
    line-height: 24px;
    margin: 24px 0 8px 0;
  }

  .cancel-button {
    margin-inline-end: 0;
  }

  .action-button {
    margin-inline-end: 0;
    margin-inline-start: 8px;
  }
</style>
<div id="container">
  <template is="dom-if" if="[[showScanProgress]]" restamp>
    <paper-progress indeterminate>
    </paper-progress>
  </template>
  <h3 id="title">[[i18n('bluetoothPairNewDevice')]]</h3>
  <slot name="page-body" id="pageBody"></slot>
  <div id="buttonBar">
    <template  is="dom-if"
        if="[[shouldShowButton_(ButtonName.CANCEL, buttonBarState.*)]]" restamp>
      <cr-button
          id="cancel"
          class="cancel-button"
          on-click="onCancelClick_"
          disabled$="[[isButtonDisabled_(ButtonName.CANCEL, buttonBarState.*)]]">
        [[i18n('cancel')]]
      </cr-button>
    </template>
    <template is="dom-if"
        if="[[shouldShowButton_(ButtonName.PAIR, buttonBarState.*)]]" restamp>
      <cr-button
          id="pair"
          class="action-button"
          on-click="onPairClick_"
          disabled$="[[isButtonDisabled_(ButtonName.PAIR, buttonBarState.*)]]">
        [[i18n('bluetoothPair')]]
      </cr-button>
    </template>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ButtonState={ENABLED:1,DISABLED:2,HIDDEN:3};const ButtonName={CANCEL:1,PAIR:2};const PairingAuthType={NONE:1,REQUEST_PIN_CODE:2,REQUEST_PASSKEY:3,DISPLAY_PIN_CODE:4,DISPLAY_PASSKEY:5,CONFIRM_PASSKEY:6,AUTHORIZE_PAIRING:7};const DeviceItemState={DEFAULT:1,PAIRING:2,FAILED:3};
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothBasePageElementBase=mixinBehaviors([I18nBehavior],PolymerElement);class SettingsBluetoothBasePageElement extends SettingsBluetoothBasePageElementBase{static get is(){return"bluetooth-base-page"}static get template(){return getTemplate$c()}static get properties(){return{buttonBarState:{type:Object,value:{cancel:ButtonState.ENABLED,pair:ButtonState.HIDDEN}},showScanProgress:{type:Boolean,value:false},ButtonName:{type:Object,value:ButtonName},focusDefault:{type:Boolean,value:false}}}connectedCallback(){super.connectedCallback();afterNextRender(this,(()=>{if(!this.focusDefault){return}const buttons=this.shadowRoot.querySelectorAll("cr-button");for(let i=buttons.length-1;i>=0;i--){const button=buttons.item(i);if(!button.disabled){focusWithoutInk(button);return}}}))}onCancelClick_(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:true,composed:true}))}onPairClick_(){this.dispatchEvent(new CustomEvent("pair",{bubbles:true,composed:true}))}shouldShowButton_(buttonName){const state=this.getButtonBarState_(buttonName);return state!==ButtonState.HIDDEN}isButtonDisabled_(buttonName){const state=this.getButtonBarState_(buttonName);return state===ButtonState.DISABLED}getButtonBarState_(buttonName){switch(buttonName){case ButtonName.CANCEL:return this.buttonBarState.cancel;case ButtonName.PAIR:return this.buttonBarState.pair;default:assertNotReached$1();return ButtonState.ENABLED}}}customElements.define(SettingsBluetoothBasePageElement.is,SettingsBluetoothBasePageElement);const styleMod$3=document.createElement("dom-module");styleMod$3.appendChild(html`
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);styleMod$3.register("cr-icons");const styleMod$2=document.createElement("dom-module");styleMod$2.appendChild(html`
  <template>
    <style include="cr-hidden-style cr-icons">
:host,html{--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host,html{--scrollable-border-color:var(--google-grey-700)}}[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);styleMod$2.register("cr-shared-style");
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
*/Polymer({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:false},useGlobalRtlAttribute:{type:Boolean,value:false}},created:function(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){this._icons=this._createIconMap();return Object.keys(this._icons).map((function(n){return this.name+":"+n}),this)},applyIcon:function(element,iconName){this.removeIcon(element);var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){var pde=dom(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},createIcon:function(iconName,targetIsRTL){return this._cloneIcon(iconName,this.rtlMirroring&&targetIsRTL)},removeIcon:function(element){if(element._svgIcon){dom(element.root||element).removeChild(element._svgIcon);element._svgIcon=null}},_targetIsRTL:function(target){if(this.__targetIsRTL==null){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=globalElement.getAttribute("dir")==="rtl"}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&window.getComputedStyle(target)["direction"]==="rtl"}}return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var icons=Object.create(null);dom(this).querySelectorAll("[id]").forEach((function(icon){icons[icon.id]=icon}));return icons},_cloneIcon:function(id,mirrorAllowed){this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},_prepareSvgClone:function(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(true),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});const template$2=html`<iron-iconset-svg name="bluetooth" size="20">
  <svg>
    <defs>
      <g id="computer"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 15H19C19.5523 15 20 15.4477 20 16C20 16.5523 19.5523 17 19 17H1C0.447715 17 0 16.5523 0 16C0 15.4477 0.447715 15 1 15H2V4C2 3.44772 2.44772 3 3 3H17C17.2761 3 17.5261 3.11193 17.7071 3.29289C17.8881 3.47386 18 3.72386 18 4V15ZM16 12V5H4V12H16ZM8 14V15H12V14H8Z"></path></g>
      <g id="headset"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 15C16 15.55 15.55 16 15 16H14V13H16V15ZM6 16H5C4.45 16 4 15.55 4 15V13H6V16ZM2 9V15C2 16.66 3.34 18 5 18H8V11H4V9C4 5.13 6.13 4 10 4C13.87 4 16 5.13 16 9V11H12V18H15C16.66 18 18 16.66 18 15V9C18 4.03 14.97 2 10 2C5.03 2 2 4.03 2 9Z"></path></g>
      <g id="phone"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.01L6 1C4.9 1 4 1.9 4 3V17C4 18.1 4.9 19 6 19H14C15.1 19 16 18.1 16 17V3C16 1.9 15.1 1.01 14 1.01ZM14 17H6V16H14V17ZM14 14H6V6H14V14ZM6 4V3H14V4H6Z"></path></g>
      <g id="video-camera"><path fill-rule="evenodd" clip-rule="evenodd" d="M15 8.4V5C15 4.44772 14.5523 4 14 4H3C2.44772 4 2 4.44772 2 5V15C2 15.5523 2.44771 16 3 16H14C14.5523 16 15 15.5523 15 15V11.6L18 14V6L15 8.4ZM4 14V6H13V14H4Z"></path></g>
      <g id="game-controller"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 4H2C0.9 4 0 4.9 0 6V14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V6C20 4.9 19.1 4 18 4ZM18 14H2V6H18V14ZM5 13H7V11H9V9H7V7H5V9H3V11H5V13ZM12.5 13C13.3284 13 14 12.3284 14 11.5C14 10.6716 13.3284 10 12.5 10C11.6716 10 11 10.6716 11 11.5C11 12.3284 11.6716 13 12.5 13ZM15.5 10C16.3284 10 17 9.32843 17 8.5C17 7.67157 16.3284 7 15.5 7C14.6716 7 14 7.67157 14 8.5C14 9.32843 14.6716 10 15.5 10Z"></path></g>
      <g id="keyboard"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 3H2C0.9 3 0.01 3.9 0.01 5L0 15C0 16.1 0.9 17 2 17H18C19.1 17 20 16.1 20 15V5C20 3.9 19.1 3 18 3ZM18 5V15H2V5H18ZM11 6H9V8H11V6ZM9 9H11V11H9V9ZM8 6H6V8H8V6ZM6 9H8V11H6V9ZM5 9H3V11H5V9ZM3 6H5V8H3V6ZM14 12H6V14H14V12ZM12 9H14V11H12V9ZM14 6H12V8H14V6ZM15 9H17V11H15V9ZM17 6H15V8H17V6Z"></path></g>
      <g id="mouse"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C6.68286 2 4 4.504 4 7.6V12.4C4 15.496 6.68286 18 10 18C13.3171 18 16 15.496 16 12.4V7.6C16 4.504 13.3171 2 10 2ZM14 7.5V8H11V4C13 4 14 6 14 7.5ZM9 4V8H6V7.6C6 6 7 4 9 4ZM10 16C7.63429 16 6 14.608 6 12.4V10H14V12.4C14 14.608 12.3657 16 10 16Z"></path></g>
      <g id="tablet"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.99 15L19 5C19 3.9 18.1 3 17 3L3 3C1.9 3 1 3.9 1 5L0.999999 15C0.999999 16.1 1.9 17 3 17L17 17C18.1 17 18.99 16.1 18.99 15ZM3 15L3 5L4 5L4 15L3 15ZM6 15L6 5L14 5L14 15L6 15ZM16 5L17 5L17 15L16 15L16 5Z"></path></g>
      <g id="default" viewBox="0 0 24 24"><path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"></path></g>

      <g id="battery-0-7"><path d="M14 13.5H6V16H14V13.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-8-14"><path d="M14 12.5H6V16H14V12.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5L6 16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-15-21"><path d="M14 12H6V16H14V12Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-22-28"><path d="M14 11.5H6L6 16H14V11.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5L6 16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-29-35"><path d="M14 11H6V16H14V11Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-36-42"><path d="M14 10.5H6V16H14V10.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-43-49"><path d="M14 10H6V16H14V10Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-50-56"><path d="M14 9.5H6V16H14V9.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-57-63"><path d="M14 9H6V16H14V9Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-64-70"><path d="M14 8.5H6V16H14V8.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-71-77"><path d="M14 8H6V16H14V8Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-78-85"><path d="M14 7.5H6L6 16H14V7.5Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V15H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5L6 16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-86-92"><path d="M14 7H6V16H14V7Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 6H7.5V16H12.5V6ZM13 4.5H12V3H8V4.5H7C6.5 4.5 6 5 6 5.5V16C6 16.5 6.5 17 7 17H13C13.5 17 14 16.5 14 16V5.5C14 5 13.5 4.5 13 4.5Z"></path></g>
      <g id="battery-93-100"><path d="M12 4.5H13C13.5 4.5 14 5 14 5.5V16C14 16.5 13.5 17 13 17H7C6.5 17 6 16.5 6 16V5.5C6 5 6.5 4.5 7 4.5H8V3H12V4.5Z"></path></g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template$2.content);
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
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function(src){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){if(this._usesIconset()){if(this._img&&this._img.parentNode){dom(this.root).removeChild(this._img)}if(this._iconName===""){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=false}this._img.src=this.src;dom(this.root).appendChild(this._img)}}});function getTemplate$b(){return html`<!--_html_template_start_--><style include="cr-shared-style">
  #image {
    height: 24px;
    width: 24px;
  }
</style>

<template is="dom-if" if="[[!hasDefaultImage_(device.*)]]">
  <iron-icon id="deviceTypeIcon" icon="bluetooth:[[getIcon_(device.*)]]">
  </iron-icon>
</template>
<template is="dom-if" if="[[hasDefaultImage_(device.*)]]">
  <img id="image" src="[[getDefaultImageSrc_(device.*)]]" alt="Default device image">
</template><!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function mojoString16ToString(str16){return str16.data.map((ch=>String.fromCodePoint(ch))).join("")}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function hasDefaultImage(device){return!!device.imageInfo&&!!device.imageInfo.defaultImageUrl&&!!device.imageInfo.defaultImageUrl.url}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsBluetoothIconElement extends PolymerElement{static get is(){return"bluetooth-icon"}static get template(){return getTemplate$b()}static get properties(){return{device:{type:Object}}}getIcon_(){if(!this.device){return"default"}switch(this.device.deviceType){case DeviceType.kComputer:return"computer";case DeviceType.kPhone:return"phone";case DeviceType.kHeadset:return"headset";case DeviceType.kVideoCamera:return"video-camera";case DeviceType.kGameController:return"game-controller";case DeviceType.kKeyboard:case DeviceType.kKeyboardMouseCombo:return"keyboard";case DeviceType.kMouse:return"mouse";case DeviceType.kTablet:return"tablet";default:return"default"}}hasDefaultImage_(){return hasDefaultImage(this.device)}getDefaultImageSrc_(){if(!this.hasDefaultImage_()){return""}return this.device.imageInfo.defaultImageUrl.url}}customElements.define(SettingsBluetoothIconElement.is,SettingsBluetoothIconElement);
// Copyright 2011 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class EventTracker{constructor(){this.listeners_=[]}add(target,eventType,listener,capture=false){const h={target:target,eventType:eventType,listener:listener,capture:capture};this.listeners_.push(h);target.addEventListener(eventType,listener,capture)}remove(target,eventType){this.listeners_=this.listeners_.filter((listener=>{if(listener.target===target&&(!eventType||listener.eventType===eventType)){EventTracker.removeEventListener(listener);return false}return true}))}removeAll(){this.listeners_.forEach((listener=>EventTracker.removeEventListener(listener)));this.listeners_=[]}static removeEventListener(entry){entry.target.removeEventListener(entry.eventType,entry.listener,entry.capture)}}
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isRTL(){return document.documentElement.dir==="rtl"}function hasKeyModifiers(e){return!!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)}
// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class FocusRow{constructor(root,boundary,delegate){this.root=root;this.boundary_=boundary||document.documentElement;this.delegate=delegate;this.eventTracker=new EventTracker}static isFocusable(element){if(!element||element.disabled){return false}let current=element;while(true){assertInstanceof(current,Element);const style=window.getComputedStyle(current);if(style.visibility==="hidden"||style.display==="none"){return false}const parent=current.parentNode;if(!parent){return false}if(parent===current.ownerDocument||parent instanceof DocumentFragment){return true}current=parent}}static getFocusableElement(element){if(element.getFocusableElement){return element.getFocusableElement()}return element}addItem(type,selectorOrElement){assert$1(type);let element;if(typeof selectorOrElement==="string"){element=this.root.querySelector(selectorOrElement)}else{element=selectorOrElement}if(!element){return false}element.setAttribute("focus-type",type);element.tabIndex=this.isActive()?0:-1;this.eventTracker.add(element,"blur",this.onBlur_.bind(this));this.eventTracker.add(element,"focus",this.onFocus_.bind(this));this.eventTracker.add(element,"keydown",this.onKeydown_.bind(this));this.eventTracker.add(element,"mousedown",this.onMousedown_.bind(this));return true}destroy(){this.eventTracker.removeAll()}getCustomEquivalent(sampleElement){return assert$1(this.getFirstFocusable())}getElements(){return Array.from(this.root.querySelectorAll("[focus-type]")).map(FocusRow.getFocusableElement)}getEquivalentElement(sampleElement){if(this.getFocusableElements().indexOf(sampleElement)>=0){return sampleElement}const sampleFocusType=this.getTypeForElement(sampleElement);if(sampleFocusType){const sameType=this.getFirstFocusable(sampleFocusType);if(sameType){return sameType}}return this.getCustomEquivalent(sampleElement)}getFirstFocusable(opt_type){const element=this.getFocusableElements().find((el=>!opt_type||el.getAttribute("focus-type")===opt_type));return element||null}getFocusableElements(){return this.getElements().filter(FocusRow.isFocusable)}getTypeForElement(element){return element.getAttribute("focus-type")||""}isActive(){return this.root.classList.contains(FocusRow.ACTIVE_CLASS)}makeActive(active){if(active===this.isActive()){return}this.getElements().forEach((function(element){element.tabIndex=active?0:-1}));this.root.classList.toggle(FocusRow.ACTIVE_CLASS,active)}onBlur_(e){if(!this.boundary_.contains(e.relatedTarget)){return}const currentTarget=e.currentTarget;if(this.getFocusableElements().indexOf(currentTarget)>=0){this.makeActive(false)}}onFocus_(e){if(this.delegate){this.delegate.onFocus(this,e)}}onMousedown_(e){if(e.button){return}if(!e.currentTarget.disabled){e.currentTarget.tabIndex=0}}onKeydown_(e){const elements=this.getFocusableElements();const currentElement=FocusRow.getFocusableElement(e.currentTarget);const elementIndex=elements.indexOf(currentElement);assert$1(elementIndex>=0);if(this.delegate&&this.delegate.onKeydown(this,e)){return}const isShiftTab=!e.altKey&&!e.ctrlKey&&!e.metaKey&&e.shiftKey&&e.key==="Tab";if(hasKeyModifiers(e)&&!isShiftTab){return}let index=-1;let shouldStopPropagation=true;if(isShiftTab){index=elementIndex-1;if(index<0){return}}else if(e.key==="ArrowLeft"){index=elementIndex+(isRTL()?1:-1)}else if(e.key==="ArrowRight"){index=elementIndex+(isRTL()?-1:1)}else if(e.key==="Home"){index=0}else if(e.key==="End"){index=elements.length-1}else{shouldStopPropagation=false}const elementToFocus=elements[index];if(elementToFocus){this.getEquivalentElement(elementToFocus).focus();e.preventDefault()}if(shouldStopPropagation){e.stopPropagation()}}}FocusRow.ACTIVE_CLASS="focus-row-active";
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class FocusRowBehaviorDelegate{constructor(listItem){this.listItem_=listItem}onFocus(row,e){const element=e.composedPath()[0];const focusableElement=FocusRow.getFocusableElement(element);if(element!==focusableElement){focusableElement.focus()}this.listItem_.lastFocused=focusableElement}onKeydown(row,e){if(e.key==="Enter"){e.stopPropagation()}return false}getCustomEquivalent(sampleElement){return this.listItem_.overrideCustomEquivalent?this.listItem_.getCustomEquivalent(sampleElement):null}}class VirtualFocusRow extends FocusRow{constructor(root,delegate){super(root,null,delegate)}getCustomEquivalent(sampleElement){return this.delegate.getCustomEquivalent(sampleElement)||super.getCustomEquivalent(sampleElement)}}const FocusRowBehavior={properties:{row_:Object,mouseFocused_:Boolean,id:{type:String,reflectToAttribute:true},isFocused:{type:Boolean,notify:true},focusRowIndex:{type:Number,observer:"focusRowIndexChanged"},lastFocused:{type:Object,notify:true},ironListTabIndex:{type:Number,observer:"ironListTabIndexChanged_"},listBlurred:{type:Boolean,notify:true}},computeId_(index){return index!==undefined?`frb${index}`:undefined},focusRowIndexChanged(newIndex,oldIndex){this.setAttribute("aria-rowindex",newIndex+1);if(this.id===this.computeId_(oldIndex)){this.id=this.computeId_(newIndex)}},firstControl_:null,controlObservers_:[],attached(){this.classList.add("no-outline");afterNextRender(this,(function(){const rowContainer=this.root.querySelector("[focus-row-container]");assert$1(rowContainer);this.row_=new VirtualFocusRow(rowContainer,new FocusRowBehaviorDelegate(this));this.addItems_();this.listen(this,"focus","onFocus_");this.listen(this,"dom-change","addItems_");this.listen(this,"mousedown","onMouseDown_");this.listen(this,"blur","onBlur_")}))},detached(){this.unlisten(this,"focus","onFocus_");this.unlisten(this,"dom-change","addItems_");this.unlisten(this,"mousedown","onMouseDown_");this.unlisten(this,"blur","onBlur_");this.removeObservers_();if(this.firstControl_){this.unlisten(this.firstControl_,"keydown","onFirstControlKeydown_")}if(this.row_){this.row_.destroy()}},getFocusRow(){return assert$1(this.row_)},updateFirstControl_(){const newFirstControl=this.row_.getFirstFocusable();if(newFirstControl===this.firstControl_){return}if(this.firstControl_){this.unlisten(this.firstControl_,"keydown","onFirstControlKeydown_")}this.firstControl_=newFirstControl;if(this.firstControl_){this.listen(this.firstControl_,"keydown","onFirstControlKeydown_")}},removeObservers_(){if(this.controlObservers_.length>0){this.controlObservers_.forEach((observer=>{observer.disconnect()}))}this.controlObservers_=[]},addItems_(){this.ironListTabIndexChanged_();if(this.row_){this.removeObservers_();this.row_.destroy();const controls=this.root.querySelectorAll("[focus-row-control]");controls.forEach((control=>{this.row_.addItem(control.getAttribute("focus-type"),FocusRow.getFocusableElement(control));this.addMutationObservers_(assert$1(control))}));this.updateFirstControl_()}},createObserver_(){return new MutationObserver((mutations=>{const mutation=mutations[0];if(mutation.attributeName==="style"&&mutation.oldValue){const newStyle=window.getComputedStyle(mutation.target);const oldDisplayValue=mutation.oldValue.match(/^display:(.*)(?=;)/);const oldVisibilityValue=mutation.oldValue.match(/^visibility:(.*)(?=;)/);if(oldDisplayValue&&newStyle.display===oldDisplayValue[1].trim()&&oldVisibilityValue&&newStyle.visibility===oldVisibilityValue[1].trim()){return}}this.updateFirstControl_()}))},addMutationObservers_(control){let current=control;while(current&&current!==this.root){const currentObserver=this.createObserver_();currentObserver.observe(current,{attributes:true,attributeFilter:["hidden","disabled","style"],attributeOldValue:true});this.controlObservers_.push(currentObserver);current=current.parentNode}},onFocus_(e){if(this.mouseFocused_){this.mouseFocused_=false;return}const restoreFocusToFirst=this.listBlurred&&e.composedPath()[0]===this;if(this.lastFocused&&!restoreFocusToFirst){focusWithoutInk(this.row_.getEquivalentElement(this.lastFocused))}else{const firstFocusable=assert$1(this.firstControl_);focusWithoutInk(firstFocusable)}this.listBlurred=false;this.isFocused=true},onFirstControlKeydown_(e){if(e.shiftKey&&e.key==="Tab"){this.focus()}},ironListTabIndexChanged_(){if(this.row_){this.row_.makeActive(this.ironListTabIndex===0)}if(this.ironListTabIndex===0){this.listBlurred=false}},onMouseDown_(){this.mouseFocused_=true},onBlur_(e){this.mouseFocused_=false;this.isFocused=false;const node=e.relatedTarget?e.relatedTarget:null;if(!this.parentNode.contains(node)){this.listBlurred=true}}};function getTemplate$a(){return html`<!--_html_template_start_--><style include="cr-shared-style">
  :host([pairing-failed_]) #secondaryLabel {
    color: var(--cros-text-color-alert);
  }

  bluetooth-icon {
    align-self: center;
    justify-self: center;
  }

  #deviceName {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 404px;
  }

  #container:hover {
    background-color: var(--cr-hover-background-color);
    cursor: pointer;
  }

  .text-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-inline-start: 24px;
    max-height: 48px;
  }

  .cr-row {
    padding: 0;
  }

  .secondary {
    color: var(--cros-text-color-disabled);
    font-size: 11px;
  }

</style>
<div id="wrapper" focus-row-container>
  <div id="container"
      class="cr-row continuation"
      actionable
      focus-row-control
      selectable
      aria-label$="[[getAriaLabel_(device.*, itemIndex, listSize)]]"
      role="button"
      focus-type="rowWrapper"
      on-keydown="onKeydown_"
      on-click="onSelected_">
    <bluetooth-icon device="[[device]]"></bluetooth-icon>
    <div aria-live="polite"
        aria-label="[[getSecondaryAriaLabel_(
          secondaryLabel_, pairingFailed_, device.*)]]"
        class="text-row">
      <div id="deviceName" aria-hidden="true">
        [[getDeviceName_(device.*)]]
      </div>
      <div id="secondaryLabel"
          aria-hidden="true"
          class="secondary">
        [[secondaryLabel_]]
      </div>
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothPairingDeviceItemElementBase=mixinBehaviors([I18nBehavior,FocusRowBehavior],PolymerElement);class SettingsBluetoothPairingDeviceItemElement extends SettingsBluetoothPairingDeviceItemElementBase{static get is(){return"bluetooth-pairing-device-item"}static get template(){return getTemplate$a()}static get properties(){return{device:Object,deviceItemState:{type:Object,value:DeviceItemState.DEFAULT},itemIndex:Number,listSize:Number,secondaryLabel_:{type:String,computed:"computeSecondaryLabel_(deviceItemState)"},pairingFailed_:{reflectToAttribute:true,type:Boolean,computed:"computePairingFailed_(deviceItemState)"}}}focus(){this.$.container.focus({preventScroll:true})}computePairingFailed_(){return this.deviceItemState===DeviceItemState.FAILED}getDeviceName_(){if(!this.device){return""}return mojoString16ToString(this.device.publicName)}onSelected_(event){this.dispatchPairDeviceEvent_();event.stopPropagation()}onKeydown_(event){if(event.key!=="Enter"&&event.key!==" "){return}this.dispatchPairDeviceEvent_();event.stopPropagation()}computeSecondaryLabel_(){switch(this.deviceItemState){case DeviceItemState.FAILED:return this.i18n("bluetoothPairingFailed");case DeviceItemState.PAIRING:return this.i18n("bluetoothPairing");case DeviceItemState.DEFAULT:return"";default:assertNotReached$1()}}dispatchPairDeviceEvent_(){this.dispatchEvent(new CustomEvent("pair-device",{bubbles:true,composed:true,detail:{device:this.device}}))}getAriaLabel_(){if(!this.device){return""}return this.i18n("bluetoothA11yDeviceName",this.itemIndex+1,this.listSize,this.getDeviceName_())+" "+this.i18n(this.getA11yDeviceTypeTextName_())}getA11yDeviceTypeTextName_(){switch(this.device.deviceType){case DeviceType.kUnknown:return"bluetoothA11yDeviceTypeUnknown";case DeviceType.kComputer:return"bluetoothA11yDeviceTypeComputer";case DeviceType.kPhone:return"bluetoothA11yDeviceTypePhone";case DeviceType.kHeadset:return"bluetoothA11yDeviceTypeHeadset";case DeviceType.kVideoCamera:return"bluetoothA11yDeviceTypeVideoCamera";case DeviceType.kGameController:return"bluetoothA11yDeviceTypeGameController";case DeviceType.kKeyboard:return"bluetoothA11yDeviceTypeKeyboard";case DeviceType.kKeyboardMouseCombo:return"bluetoothA11yDeviceTypeKeyboardMouseCombo";case DeviceType.kMouse:return"bluetoothA11yDeviceTypeMouse";case DeviceType.kTablet:return"bluetoothA11yDeviceTypeTablet";default:assertNotReached$1()}}getSecondaryAriaLabel_(){const deviceName=this.getDeviceName_();switch(this.deviceItemState){case DeviceItemState.FAILED:return this.i18n("bluetoothPairingDeviceItemSecondaryErrorA11YLabel",deviceName);case DeviceItemState.PAIRING:return this.i18n("bluetoothPairingDeviceItemSecondaryPairingA11YLabel",deviceName);case DeviceItemState.DEFAULT:return"";default:assertNotReached$1()}}}customElements.define(SettingsBluetoothPairingDeviceItemElement.is,SettingsBluetoothPairingDeviceItemElement);
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
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(value,message){if(value){return}throw new Error("Assertion failed"+(message?`: ${message}`:""))}function assertNotReached(message="Unreachable code hit"){assert(false,message)}
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function sanitizeInnerHtmlInternal(rawString,opts){opts=opts||{};const html=parseHtmlSubset(`<b>${rawString}</b>`,opts.tags,opts.attrs).firstElementChild;return html.innerHTML}let sanitizedPolicy=null;function sanitizeInnerHtml(rawString,opts){assert(window.trustedTypes);if(sanitizedPolicy===null){sanitizedPolicy=window.trustedTypes.createPolicy("sanitize-inner-html",{createHTML:sanitizeInnerHtmlInternal,createScript:()=>assertNotReached(),createScriptURL:()=>assertNotReached()})}return sanitizedPolicy.createHTML(rawString,opts)}const allowAttribute=(_node,_value)=>true;const allowedAttributes=new Map([["href",(node,value)=>node.tagName==="A"&&(value.startsWith("chrome://")||value.startsWith("https://")||value==="#")],["target",(node,value)=>node.tagName==="A"&&value==="_blank"]]);const allowedOptionalAttributes=new Map([["class",allowAttribute],["id",allowAttribute],["is",(_node,value)=>value==="action-link"||value===""],["role",(_node,value)=>value==="link"],["src",(node,value)=>node.tagName==="IMG"&&value.startsWith("chrome://")],["tabindex",allowAttribute],["aria-hidden",allowAttribute],["aria-label",allowAttribute],["aria-labelledby",allowAttribute]]);const allowedTags=new Set(["A","B","I","BR","DIV","EM","KBD","P","PRE","SPAN","STRONG"]);const allowedOptionalTags=new Set(["IMG","LI","UL"]);let unsanitizedPolicy;function mergeTags(optTags){const clone=new Set(allowedTags);optTags.forEach((str=>{const tag=str.toUpperCase();if(allowedOptionalTags.has(tag)){clone.add(tag)}}));return clone}function mergeAttrs(optAttrs){const clone=new Map(allowedAttributes);optAttrs.forEach((key=>{if(allowedOptionalAttributes.has(key)){clone.set(key,allowedOptionalAttributes.get(key))}}));return clone}function walk(n,f){f(n);for(let i=0;i<n.childNodes.length;i++){walk(n.childNodes[i],f)}}function assertElement(tags,node){if(!tags.has(node.tagName)){throw Error(node.tagName+" is not supported")}}function assertAttribute(attrs,attrNode,node){const n=attrNode.nodeName;const v=attrNode.nodeValue||"";if(!attrs.has(n)||!attrs.get(n)(node,v)){throw Error(node.tagName+"["+n+'="'+v+'"] is not supported')}}function parseHtmlSubset(s,extraTags,extraAttrs){const tags=extraTags?mergeTags(extraTags):allowedTags;const attrs=extraAttrs?mergeAttrs(extraAttrs):allowedAttributes;const doc=document.implementation.createHTMLDocument("");const r=doc.createRange();r.selectNode(doc.body);if(window.trustedTypes){if(!unsanitizedPolicy){unsanitizedPolicy=window.trustedTypes.createPolicy("parse-html-subset",{createHTML:untrustedHTML=>untrustedHTML,createScript:()=>assertNotReached(),createScriptURL:()=>assertNotReached()})}s=unsanitizedPolicy.createHTML(s)}const df=r.createContextualFragment(s);walk(df,(function(node){switch(node.nodeType){case Node.ELEMENT_NODE:assertElement(tags,node);const nodeAttrs=node.attributes;for(let i=0;i<nodeAttrs.length;++i){assertAttribute(attrs,nodeAttrs[i],node)}break;case Node.COMMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:case Node.TEXT_NODE:break;default:throw Error("Node type "+node.nodeType+" is not supported")}}));return df}function getTemplate$9(){return html`<!--_html_template_start_--><style include="cr-shared-style">:host{--cr-localized-link-display:inline;display:block}:host([link-disabled]){cursor:pointer;opacity:var(--cr-disabled-opacity);pointer-events:none}a{display:var(--cr-localized-link-display)}a[href]{color:var(--cr-link-color)}a[is=action-link]{user-select:none}#container{display:contents}</style>

<div id="container"></div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class LocalizedLinkElement extends PolymerElement{static get is(){return"localized-link"}static get template(){return getTemplate$9()}static get properties(){return{localizedString:String,linkUrl:{type:String,value:""},linkDisabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"updateAnchorTagTabIndex_"},containerInnerHTML_:{type:String,value:"",computed:"getAriaLabelledContent_(localizedString, linkUrl)",observer:"setContainerInnerHtml_"}}}getAriaLabelledContent_(localizedString,linkUrl){const tempEl=document.createElement("div");tempEl.innerHTML=sanitizeInnerHtml(localizedString,{attrs:["id"]});const ariaLabelledByIds=[];tempEl.childNodes.forEach(((node,index)=>{if(node.nodeType===Node.TEXT_NODE){const spanNode=document.createElement("span");spanNode.textContent=node.textContent;spanNode.id=`id${index}`;ariaLabelledByIds.push(spanNode.id);spanNode.setAttribute("aria-hidden","true");node.replaceWith(spanNode);return}if(node.nodeType===Node.ELEMENT_NODE&&node.nodeName==="A"){const element=node;element.id=`id${index}`;ariaLabelledByIds.push(element.id);return}assertNotReached("localized-link has invalid node types")}));const anchorTags=tempEl.querySelectorAll("a");if(anchorTags.length===0){return localizedString}assert(anchorTags.length===1,"localized-link should contain exactly one anchor tag");const anchorTag=anchorTags[0];anchorTag.setAttribute("aria-labelledby",ariaLabelledByIds.join(" "));anchorTag.tabIndex=this.linkDisabled?-1:0;if(linkUrl!==""){anchorTag.href=linkUrl;anchorTag.target="_blank"}return tempEl.innerHTML}setContainerInnerHtml_(){this.$.container.innerHTML=sanitizeInnerHtml(this.containerInnerHTML_,{attrs:["aria-hidden","aria-labelledby","id","tabindex"]});const anchorTag=this.shadowRoot.querySelector("a");if(anchorTag){anchorTag.addEventListener("click",(event=>this.onAnchorTagClick_(event)));anchorTag.addEventListener("auxclick",(event=>{if(event.button===1){this.onAnchorTagClick_(event)}}))}}onAnchorTagClick_(event){if(this.linkDisabled){event.preventDefault();return}this.dispatchEvent(new CustomEvent("link-clicked",{bubbles:true,composed:true,detail:{event:event}}));event.stopPropagation()}updateAnchorTagTabIndex_(){const anchorTag=this.shadowRoot.querySelector("a");if(!anchorTag){return}anchorTag.tabIndex=this.linkDisabled?-1:0}}customElements.define(LocalizedLinkElement.is,LocalizedLinkElement);
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrScrollableBehavior={intervalId_:null,ready(){beforeNextRender(this,(()=>{this.requestUpdateScroll();const scrollableElements=this.shadowRoot.querySelectorAll("[scrollable]");for(let i=0;i<scrollableElements.length;i++){scrollableElements[i].addEventListener("scroll",this.updateScrollEvent_.bind(this))}}))},detached(){if(this.intervalId_!==null){clearInterval(this.intervalId_)}},updateScrollableContents(){if(this.intervalId_!==null){return}this.requestUpdateScroll();const nodeList=this.shadowRoot.querySelectorAll("[scrollable] iron-list");if(!nodeList.length){return}let nodesToResize=Array.from(nodeList).map((node=>({node:node,lastScrollHeight:0})));this.intervalId_=window.setInterval((()=>{const checkAgain=[];nodesToResize.forEach((({node:node,lastScrollHeight:lastScrollHeight})=>{const scrollHeight=node.parentNode.scrollHeight;if(scrollHeight!==lastScrollHeight){const ironList=node;ironList.notifyResize()}if(scrollHeight<=1&&window.getComputedStyle(node.parentNode).display!=="none"){checkAgain.push({node:node,lastScrollHeight:scrollHeight})}}));if(checkAgain.length===0){window.clearInterval(this.intervalId_);this.intervalId_=null}else{nodesToResize=checkAgain}}),10)},requestUpdateScroll(){requestAnimationFrame(function(){const scrollableElements=this.shadowRoot.querySelectorAll("[scrollable]");for(let i=0;i<scrollableElements.length;i++){this.updateScroll_(scrollableElements[i])}}.bind(this))},saveScroll(list){list.savedScrollTops=list.savedScrollTops||[];list.savedScrollTops.push(list.scrollTarget.scrollTop)},restoreScroll(list){this.async((function(){const scrollTop=list.savedScrollTops.shift();if(scrollTop!==0){list.scroll(0,scrollTop)}}))},updateScrollEvent_(event){const scrollable=event.target;this.updateScroll_(scrollable)},updateScroll_(scrollable){scrollable.classList.toggle("can-scroll",scrollable.clientHeight<scrollable.scrollHeight);scrollable.classList.toggle("is-scrolled",scrollable.scrollTop>0);scrollable.classList.toggle("scrolled-to-bottom",scrollable.scrollTop+scrollable.clientHeight>=scrollable.scrollHeight)}};function getTemplate$8(){return html`<!--_html_template_start_--><style include="cr-shared-style">
  localized-link,
  #learn-more-description {
    color: var(--cros-text-color-secondary);
  }

  #container {
    height: 200px;
  }

  #deviceListTitle {
    color: var(--cros-text-color-secondary);
    font-size: 14px;
    font-weight: 500;
    margin: 20px 0 8px 0;
  }
</style>
<bluetooth-base-page
    show-scan-progress="[[isBluetoothEnabled]]"
    button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody">
    <template is="dom-if" if="[[!shouldOmitLinks]]" restamp>
      <localized-link
          localized-string="[[i18nAdvanced('bluetoothPairingLearnMoreLabel')]]">
      </localized-link>
    </template>
    <template is="dom-if" if="[[shouldOmitLinks]]" restamp>
      <div id="learn-more-description" aria-live="polite">
        [[i18n('bluetoothPairingDescription')]]
      </div>
    </template>
    <h2 id="deviceListTitle" aria-live="polite">
      [[getDeviceListTitle_(devices.*, isBluetoothEnabled, devicePendingPairing.*)]]
    </h2>
    <template  is="dom-if" if="[[shouldShowDeviceList_(devices.*,
        isBluetoothEnabled)]]" restamp>
      <div id="container" class="layout vertical flex" scrollable
          no-bottom-scroll-border>
          <iron-list items="[[devices]]"
              preserve-focus>
            <template>
              <bluetooth-pairing-device-item
                  item="[[item]]"
                  device="[[item]]"
                  device-item-state="[[getDeviceItemState_(
                      item, devicePendingPairing.*, failedPairingDeviceId)]]"
                  tabindex$="[[tabIndex]]"
                  focus-row-index="[[index]]"
                  iron-list-tab-index="[[tabIndex]]"
                  last-focused="{{lastFocused_}}"
                  list-blurred="{{listBlurred_}}"
                  item-index="[[index]]"
                  list-size="[[devices.length]]" >
              </bluetooth-pairing-device-item>
            </template>
          </iron-list>
      </div>
    </template>
  </div>
</bluetooth-base-page>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothPairingDeviceSelectionPageElementBase=mixinBehaviors([CrScrollableBehavior,I18nBehavior],PolymerElement);class SettingsBluetoothPairingDeviceSelectionPageElement extends SettingsBluetoothPairingDeviceSelectionPageElementBase{static get is(){return"bluetooth-pairing-device-selection-page"}static get template(){return getTemplate$8()}static get properties(){return{devices:{type:Array,value:[],observer:"onDevicesChanged_"},failedPairingDeviceId:{type:String,value:""},devicePendingPairing:{type:Object,value:null,observer:"onDevicePendingPairingChanged_"},isBluetoothEnabled:{type:Boolean,value:false},shouldOmitLinks:{type:Boolean,value:false},buttonBarState_:{type:Object,value:{cancel:ButtonState.ENABLED,pair:ButtonState.HIDDEN}},lastFocused_:Object,listBlurred_:Boolean}}constructor(){super();this.lastSelectedDevice_=null}attemptFocusLastSelectedItem(){if(!this.lastSelectedDevice_){return}const index=this.devices.findIndex((device=>device.id===this.lastSelectedDevice_.id));if(index<0){return}afterNextRender(this,(function(){const items=this.shadowRoot.querySelectorAll("bluetooth-pairing-device-item");if(index>=items.length){return}items[index].focus()}))}onDevicesChanged_(){this.updateScrollableContents()}onDevicePendingPairingChanged_(){if(!this.devicePendingPairing){return}this.lastSelectedDevice_=this.devicePendingPairing}shouldShowDeviceList_(){return this.isBluetoothEnabled&&this.devices&&this.devices.length>0}getDeviceListTitle_(){if(!this.isBluetoothEnabled){return this.i18n("bluetoothDisabled")}if(!this.devicePendingPairing&&!this.shouldShowDeviceList_()){return this.i18n("bluetoothNoAvailableDevices")}if(this.shouldShowDeviceList_()||this.devicePendingPairing){return this.i18n("bluetoothAvailableDevices")}return this.i18n("bluetoothNoAvailableDevices")}getDeviceItemState_(device){if(!device){return DeviceItemState.DEFAULT}if(device.id===this.failedPairingDeviceId){return DeviceItemState.FAILED}if(this.devicePendingPairing&&device.id===this.devicePendingPairing.id){return DeviceItemState.PAIRING}return DeviceItemState.DEFAULT}}customElements.define(SettingsBluetoothPairingDeviceSelectionPageElement.is,SettingsBluetoothPairingDeviceSelectionPageElement);function getTemplate$7(){return html`<!--_html_template_start_--><style include="cr-hidden-style iron-flex">
  span {
    background-color: var(--cros-bg-color-dropped-elevation-2);
    border-radius: 4px;
    font-size: 20px;
    height: 40px;
    text-align: center;
  }

  span.next {
    background-color: var(--cros-text-color-secondary);
    color: var(--cros-slider-label-text-color);
  }

  span.typed {
    background: var(--cros-bg-color-dropped-elevation-1);
    color: var(--cros-text-color-secondary);
  }

  #code {
    display: flex;
    flex-wrap: wrap;
    margin-inline: 30px;
  }

  #message {
    margin-bottom: 24px;
  }

  .center {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .enter {
    font-weight: 500;
    margin-bottom: 8px;
    padding: 0 12px;
  }

  .key {
    border-radius: 4px;
    font-weight: 400;
    margin-bottom: 16px;
    margin-inline-end: 8px;
    margin-top: 8px;
    width: 40px;
  }
</style>
<bluetooth-base-page
    on-pair="onPairClicked_"
    focus-default
    button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody" class="center" aria-live="polite">
    <div id="message">
      [[getMessage_(deviceName)]]
    </div>
    <div id="code" class="layout horizontal center center-justified">
      <dom-repeat items="[[keys_]]">
        <template>
          <span class$="center key [[getKeyClass_(index, numKeysEntered)]]">
            [[getKeyAt_(index, keys_)]]
          </span>
        </template>
      </dom-repeat>
      <span id="enter"
          class$="center enter [[getEnterClass_(numKeysEntered, keys_)]]">
        [[i18n('bluetoothEnterKey')]]
      </span>
    </div>
  </div>
</bluetooth-base-page>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_CODE_LENGTH=16;const SettingsBluetoothPairingEnterCodeElementBase=mixinBehaviors([I18nBehavior],PolymerElement);class SettingsBluetoothPairingEnterCodeElement extends SettingsBluetoothPairingEnterCodeElementBase{static get is(){return"bluetooth-pairing-enter-code-page"}static get template(){return getTemplate$7()}static get properties(){return{deviceName:{type:String,value:""},code:{type:String,value:""},numKeysEntered:{type:Number,value:0},buttonBarState_:{type:Object,value:{cancel:ButtonState.ENABLED,pair:ButtonState.HIDDEN}},keys_:{type:Array,computed:"computeKeys_(code)"}}}computeKeys_(){if(!this.code){return[]}assert$1(this.code.length<=MAX_CODE_LENGTH);return this.code.split("")}getKeyAt_(index){return this.keys_[index]}getKeyClass_(index){if(!this.keys_||!this.numKeysEntered){return""}if(index===this.numKeysEntered){return"next"}else if(index<this.numKeysEntered){return"typed"}return""}getEnterClass_(){if(!this.keys_||!this.numKeysEntered){return""}if(this.numKeysEntered>=this.keys_.length){return"next"}return""}getMessage_(){return this.i18n("bluetoothPairingEnterKeys",this.deviceName)}}customElements.define(SettingsBluetoothPairingEnterCodeElement.is,SettingsBluetoothPairingEnterCodeElement);const styleMod$1=document.createElement("dom-module");styleMod$1.appendChild(html`
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
`.content);styleMod$1.register("cr-input-style");function getTemplate$6(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style cr-input-style cr-shared-style">:host([disabled]) :-webkit-any(#label,#error,#input-container){opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]) :is(#label,#error,#input-container){opacity:1}:host ::slotted(cr-button[slot=suffix]){margin-inline-start:var(--cr-button-edge-spacing)!important}:host([invalid]) #label{color:var(--cr-input-error-color)}#input{border-bottom:var(--cr-input-border-bottom,none);letter-spacing:var(--cr-input-letter-spacing)}:host-context([chrome-refresh-2023]) #input{border-bottom:none}:host-context([chrome-refresh-2023]) #input-container{border:var(--cr-input-border,none)}#input::placeholder{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([readonly]) #input{opacity:var(--cr-input-readonly-opacity,.6)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#error{color:var(--cr-input-error-color);display:var(--cr-input-error-display,block);font-size:var(--cr-form-field-label-font-size);height:var(--cr-form-field-label-height);line-height:var(--cr-form-field-label-line-height);margin:8px 0;visibility:hidden;white-space:var(--cr-input-error-white-space)}:host-context([chrome-refresh-2023]) #error{font-size:11px;line-height:16px;margin:4px 10px}:host([invalid]) #error{visibility:visible}#inner-input-content,#row-container{align-items:center;display:flex;justify-content:space-between;position:relative}:host-context([chrome-refresh-2023]) #inner-input-content{gap:4px;height:16px;z-index:1}#input[type=search]::-webkit-search-cancel-button{display:none}:host-context([dir=rtl]) #input[type=url]{text-align:right}#input[type=url]{direction:ltr}</style>
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
const SUPPORTED_INPUT_TYPES=new Set(["number","password","search","text","url"]);class CrInputElement extends PolymerElement{static get is(){return"cr-input"}static get template(){return getTemplate$6()}static get properties(){return{ariaDescription:{type:String},ariaLabel:{type:String,value:""},autofocus:{type:Boolean,value:false,reflectToAttribute:true},autoValidate:Boolean,disabled:{type:Boolean,value:false,reflectToAttribute:true},errorMessage:{type:String,value:"",observer:"onInvalidOrErrorMessageChanged_"},displayErrorMessage_:{type:String,value:""},focused_:{type:Boolean,value:false,reflectToAttribute:true},invalid:{type:Boolean,value:false,notify:true,reflectToAttribute:true,observer:"onInvalidOrErrorMessageChanged_"},max:{type:Number,reflectToAttribute:true},min:{type:Number,reflectToAttribute:true},maxlength:{type:Number,reflectToAttribute:true},minlength:{type:Number,reflectToAttribute:true},pattern:{type:String,reflectToAttribute:true},inputmode:String,label:{type:String,value:""},placeholder:{type:String,value:null,observer:"placeholderChanged_"},readonly:{type:Boolean,reflectToAttribute:true},required:{type:Boolean,reflectToAttribute:true},inputTabindex:{type:Number,value:0,observer:"onInputTabindexChanged_"},type:{type:String,value:"text",observer:"onTypeChanged_"},value:{type:String,value:"",notify:true,observer:"onValueChanged_"}}}ready(){super.ready();assert(!this.hasAttribute("tabindex"))}onInputTabindexChanged_(){assert(this.inputTabindex===0||this.inputTabindex===-1)}onTypeChanged_(){assert(SUPPORTED_INPUT_TYPES.has(this.type))}get inputElement(){return this.$.input}getAriaLabel_(ariaLabel,label,placeholder){return ariaLabel||label||placeholder}getAriaInvalid_(invalid){return invalid?"true":"false"}onInvalidOrErrorMessageChanged_(){this.displayErrorMessage_=this.invalid?this.errorMessage:"";const ERROR_ID="error";const errorElement=this.shadowRoot.querySelector(`#${ERROR_ID}`);assert(errorElement);if(this.invalid){errorElement.setAttribute("role","alert");this.inputElement.setAttribute("aria-errormessage",ERROR_ID)}else{errorElement.removeAttribute("role");this.inputElement.removeAttribute("aria-errormessage")}}placeholderChanged_(){if(this.placeholder||this.placeholder===""){this.inputElement.setAttribute("placeholder",this.placeholder)}else{this.inputElement.removeAttribute("placeholder")}}focus(){this.focusInput()}focusInput(){if(this.shadowRoot.activeElement===this.inputElement){return false}this.inputElement.focus();return true}onValueChanged_(newValue,oldValue){if(!newValue&&!oldValue){return}if(this.autoValidate){this.validate()}}onInputChange_(e){this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:{sourceEvent:e}}))}onInputFocus_(){this.focused_=true}onInputBlur_(){this.focused_=false}select(start,end){this.inputElement.focus();if(start!==undefined&&end!==undefined){this.inputElement.setSelectionRange(start,end)}else{assert(start===undefined&&end===undefined);this.inputElement.select()}}validate(){this.invalid=!this.inputElement.checkValidity();return!this.invalid}}customElements.define(CrInputElement.is,CrInputElement);function getTemplate$5(){return html`<!--_html_template_start_--><style>
  #pageBody {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #message {
    margin-bottom: 56px;
  }

  #pin {
    width: 336px;
  }
</style>
<bluetooth-base-page
    on-pair="onPairClicked_"
    button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody">
    <div id="message">
      [[getMessage_(device.*)]]
    </div>
    <cr-input
        id="pin"
        minlength="1"
        maxlength="[[getMaxlength_(authType)]]"
        type="text"
        aria-label="[[getMessage_(device.*)]]"
        value="{{pinCode_}}"
        auto-validate >
    </cr-input>
  </div>
</bluetooth-base-page>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PIN_CODE_MAX_LENGTH=6;const PASSKEY_MAX_LENGTH=16;const SettingsBluetoothPairingRequestCodePageElementBase=mixinBehaviors([I18nBehavior],PolymerElement);class SettingsBluetoothRequestCodePageElement extends SettingsBluetoothPairingRequestCodePageElementBase{static get is(){return"bluetooth-pairing-request-code-page"}static get template(){return getTemplate$5()}static get properties(){return{device:{type:Object,value:null},authType:{type:Object,value:null},buttonBarState_:{type:Object,computed:"computeButtonBarState_(pinCode_)"},pinCode_:{type:String,value:""}}}connectedCallback(){super.connectedCallback();afterNextRender(this,(()=>{this.$.pin.focus()}))}getMessage_(){return this.i18n("bluetoothEnterPin",this.getDeviceName_())}getDeviceName_(){if(!this.device){return""}return mojoString16ToString(this.device.publicName)}computeButtonBarState_(){const pairButtonState=!this.pinCode_?ButtonState.DISABLED:ButtonState.ENABLED;return{cancel:ButtonState.ENABLED,pair:pairButtonState}}onPairClicked_(event){event.stopPropagation();if(!this.pinCode_){return}this.dispatchEvent(new CustomEvent("request-code-entered",{bubbles:true,composed:true,detail:{code:this.pinCode_}}))}getMaxlength_(){if(this.authType===PairingAuthType.REQUEST_PIN_CODE){return PIN_CODE_MAX_LENGTH}return PASSKEY_MAX_LENGTH}}customElements.define(SettingsBluetoothRequestCodePageElement.is,SettingsBluetoothRequestCodePageElement);function getTemplate$4(){return html`<!--_html_template_start_--><style>
   #code {
    font-size: 24px;
    margin-top: 40px;
  }

  #pageBody {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
<bluetooth-base-page
    on-pair="onPairClicked_"
    focus-default
    button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody">
    <div id="message" aria-live="polite">
      [[i18n('bluetoothConfirmCodeMessage')]]
    </div>
    <div id="code">[[code]]</div>
  </div>
</bluetooth-base-page><!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothPairingConfirmCodePageElementBase=mixinBehaviors([I18nBehavior],PolymerElement);class SettingsBluetoothPairingConfirmCodePageElement extends SettingsBluetoothPairingConfirmCodePageElementBase{static get is(){return"bluetooth-pairing-confirm-code-page"}static get template(){return getTemplate$4()}static get properties(){return{code:{type:String,value:""},buttonBarState_:{type:Object,value:{cancel:ButtonState.ENABLED,pair:ButtonState.ENABLED}}}}onPairClicked_(event){event.stopPropagation();this.dispatchEvent(new CustomEvent("confirm-code",{bubbles:true,composed:true}))}}customElements.define(SettingsBluetoothPairingConfirmCodePageElement.is,SettingsBluetoothPairingConfirmCodePageElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const template$1=html`<dom-module id="paper-spinner-styles">
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
</dom-module>`;document.head.appendChild(template$1.content);
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
*/const template=html`
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
`;template.setAttribute("strip-whitespace","");Polymer({_template:template,is:"paper-spinner-lite",behaviors:[PaperSpinnerBehavior]});function getTemplate$3(){return html`<!--_html_template_start_--><style>
  #pageBody {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  paper-spinner-lite {
    height: 190px;
    width: 190px;
  }
</style>
<bluetooth-base-page  button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody">
    <paper-spinner-lite active>
    </paper-spinner-lite>
  </div>
</bluetooth-base-page>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsBluetoothSpinnerPageElement extends PolymerElement{static get is(){return"bluetooth-spinner-page"}static get template(){return getTemplate$3()}static get properties(){return{buttonBarState_:{type:Object,value:{cancel:ButtonState.ENABLED,pair:ButtonState.DISABLED}}}}}customElements.define(SettingsBluetoothSpinnerPageElement.is,SettingsBluetoothSpinnerPageElement);function getTemplate$2(){return html`<!--_html_template_start_--><style>
  #container {
    height: 408px;
  }
</style>
<div id="container">
  <iron-pages
      attr-for-selected="id"
      on-cancel="onCancelClick_"
      selected="[[selectedPageId_]]">
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.DEVICE_SELECTION_PAGE, selectedPageId_)]]">
      <bluetooth-pairing-device-selection-page
          failed-pairing-device-id="[[lastFailedPairingDeviceId_]]"
          devices="[[discoveredDevices_]]"
          device-pending-pairing="[[devicePendingPairing_]]"
          on-pair-device="onPairDevice_"
          is-bluetooth-enabled="[[isBluetoothEnabled_]]"
          should-omit-links="[[shouldOmitLinks]]"
          id="deviceSelectionPage">
      </bluetooth-pairing-device-selection-page>
    </template>
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.DEVICE_REQUEST_CODE_PAGE, selectedPageId_)]]" restamp>
      <bluetooth-pairing-request-code-page
          auth-type="pairingAuthType_"
          on-request-code-entered="onRequestCodeEntered_"
          device="[[devicePendingPairing_]]"
          id="deviceRequestCodePage">
      </bluetooth-pairing-request-code-page>
    </template>
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.DEVICE_CONFIRM_CODE_PAGE, selectedPageId_)]]" restamp>
      <bluetooth-pairing-confirm-code-page
          on-confirm-code="onConfirmCode_"
          code="[[pairingCode_]]"
          id="deviceConfirmCodePage">
      </bluetooth-pairing-confirm-code-page>
    </template>
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.DEVICE_ENTER_CODE_PAGE, selectedPageId_)]]" restamp>
      <bluetooth-pairing-enter-code-page
          code="[[pairingCode_]]"
          num-keys-entered="[[numKeysEntered_]]"
          device-name="[[getDeviceName_(devicePendingPairing_.*)]]"
          id="deviceEnterCodePage">
      </bluetooth-pairing-enter-code-page>
    </template>
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.SPINNER_PAGE, selectedPageId_)]]" restamp>
      <bluetooth-spinner-page id="spinnerPage">
      </bluetooth-spinner-page>
    </template>
  </iron-pages>
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class KeyEnteredHandler{constructor(page,keyEnteredHandlerReceiver){this.page_=page;this.keyEnteredHandlerReceiver_=new KeyEnteredHandlerReceiver(this);this.keyEnteredHandlerReceiver_.$.bindHandle(keyEnteredHandlerReceiver.handle)}handleKeyEntered(numKeysEntered){this.page_.handleKeyEntered(numKeysEntered)}close(){this.keyEnteredHandlerReceiver_.$.close()}}const BluetoothPairingSubpageId={DEVICE_SELECTION_PAGE:"deviceSelectionPage",DEVICE_ENTER_CODE_PAGE:"deviceEnterCodePage",DEVICE_REQUEST_CODE_PAGE:"deviceRequestCodePage",DEVICE_CONFIRM_CODE_PAGE:"deviceConfirmCodePage",SPINNER_PAGE:"spinnerPage"};class SettingsBluetoothPairingUiElement extends PolymerElement{static get is(){return"bluetooth-pairing-ui"}static get template(){return getTemplate$2()}static get properties(){return{pairingDeviceAddress:{type:String,value:null},shouldOmitLinks:{type:Boolean,value:false},selectedPageId_:{type:String,value:BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE,observer:"onSelectedPageIdChanged_"},discoveredDevices_:{type:Array,value:[]},devicePendingPairing_:{type:Object,value:null},pairingAuthType_:{type:Object,value:null},pairingCode_:{type:String,value:""},numKeysEntered_:{type:Number,value:0},lastFailedPairingDeviceId_:{type:String,value:""},isBluetoothEnabled_:{type:Boolean,value:false},SubpageId:{type:Object,value:BluetoothPairingSubpageId}}}constructor(){super();this.systemPropertiesObserverReceiver_=new SystemPropertiesObserverReceiver(this);this.bluetoothDiscoveryDelegateReceiver_=new BluetoothDiscoveryDelegateReceiver(this);this.devicePairingHandler_;this.queuedDevicePendingPairing_;this.pairingDelegateReceiver_=null;this.requestCodeCallback_=null;this.keyEnteredReceiver_=null;this.confirmCodeCallback_=null;this.onBluetoothDiscoveryStartedCallbackForTest_=null;this.handlePairDeviceResultCallbackForTest_=null}ready(){super.ready();if(this.pairingDeviceAddress){this.selectedPageId_=BluetoothPairingSubpageId.SPINNER_PAGE}}connectedCallback(){super.connectedCallback();getBluetoothConfig().observeSystemProperties(this.systemPropertiesObserverReceiver_.$.bindNewPipeAndPassRemote())}disconnectedCallback(){super.disconnectedCallback();if(this.systemPropertiesObserverReceiver_){this.systemPropertiesObserverReceiver_.$.close()}if(this.bluetoothDiscoveryDelegateReceiver_){this.bluetoothDiscoveryDelegateReceiver_.$.close()}if(this.pairingDelegateReceiver_){this.pairingDelegateReceiver_.$.close()}if(this.keyEnteredReceiver_){this.keyEnteredReceiver_.close()}}onPropertiesUpdated(properties){const wasBluetoothEnabled=this.isBluetoothEnabled_;this.isBluetoothEnabled_=properties.systemState===BluetoothSystemState.kEnabled;if(!wasBluetoothEnabled&&this.isBluetoothEnabled_){this.lastFailedPairingDeviceId_="";getBluetoothConfig().startDiscovery(this.bluetoothDiscoveryDelegateReceiver_.$.bindNewPipeAndPassRemote())}}onDiscoveredDevicesListChanged(discoveredDevices){this.discoveredDevices_=discoveredDevices;this.updateLastFailedPairingDeviceId_(discoveredDevices);if(!this.pairingDeviceAddress){return}if(this.pairingDelegateReceiver_){return}this.attemptPairDeviceByAddress_()}updateLastFailedPairingDeviceId_(devices){if(devices.some((device=>device.id===this.lastFailedPairingDeviceId_))){return}this.lastFailedPairingDeviceId_=""}onBluetoothDiscoveryStarted(handler){this.devicePairingHandler_=handler;if(this.onBluetoothDiscoveryStartedCallbackForTest_){this.onBluetoothDiscoveryStartedCallbackForTest_()}}onBluetoothDiscoveryStopped(){this.bluetoothDiscoveryDelegateReceiver_.$.close();this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE;this.devicePairingHandler_=null}waitForOnBluetoothDiscoveryStartedForTest(){return new Promise((resolve=>{this.onBluetoothDiscoveryStartedCallbackForTest_=resolve}))}waitForHandlePairDeviceResultForTest(){return new Promise((resolve=>{this.handlePairDeviceResultCallbackForTest_=resolve}))}onPairDevice_(event){if(!event.detail.device){return}if(this.pairingDelegateReceiver_){this.queuedDevicePendingPairing_=event.detail.device;this.pairingDelegateReceiver_.$.close();return}this.pairDevice_(event.detail.device)}attemptPairDeviceByAddress_(){assert$1(this.pairingDeviceAddress);assert$1(!this.pairingDelegateReceiver_);if(!this.devicePairingHandler_){console.error("Attempted pairing with no device pairing handler.");return}this.devicePairingHandler_.fetchDevice(this.pairingDeviceAddress).then((result=>{if(!result.device){console.warn("Attempted pairing with a device that was not found, address: "+this.pairingDeviceAddress);return}this.pairDevice_(result.device)}))}pairDevice_(device){assert$1(this.devicePairingHandler_,"devicePairingHandler_ has not been set.");this.pairingDelegateReceiver_=new DevicePairingDelegateReceiver(this);this.devicePendingPairing_=device;assert$1(this.devicePendingPairing_);this.lastFailedPairingDeviceId_="";this.devicePairingHandler_.pairDevice(this.devicePendingPairing_.id,this.pairingDelegateReceiver_.$.bindNewPipeAndPassRemote()).then((result=>{this.handlePairDeviceResult_(result.result)})).catch((()=>{this.handlePairDeviceResult_(PairingResult.kNonAuthFailure)}))}handlePairDeviceResult_(result){if(this.pairingDelegateReceiver_){this.pairingDelegateReceiver_.$.close()}this.pairingAuthType_=null;if(this.keyEnteredReceiver_){this.keyEnteredReceiver_.close();this.keyEnteredReceiver_=null}this.pairingDelegateReceiver_=null;if(result===PairingResult.kSuccess){this.closeDialog_();return}this.pairingDeviceAddress=null;this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE;if(this.devicePendingPairing_){this.lastFailedPairingDeviceId_=this.devicePendingPairing_.id}this.devicePendingPairing_=null;if(this.queuedDevicePendingPairing_&&this.devicePairingHandler_){this.pairDevice_(this.queuedDevicePendingPairing_)}this.queuedDevicePendingPairing_=null;if(this.handlePairDeviceResultCallbackForTest_){this.handlePairDeviceResultCallbackForTest_()}}requestPinCode(){return this.requestCode_(PairingAuthType.REQUEST_PIN_CODE)}requestPasskey(){return this.requestCode_(PairingAuthType.REQUEST_PASSKEY)}requestCode_(authType){this.pairingAuthType_=authType;this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_REQUEST_CODE_PAGE;this.requestCodeCallback_={reject:null,resolve:null};const promise=new Promise(((resolve,reject)=>{this.requestCodeCallback_.resolve=code=>{if(authType===PairingAuthType.REQUEST_PIN_CODE){resolve({pinCode:code});return}if(authType===PairingAuthType.REQUEST_PASSKEY){resolve({passkey:code});return}assertNotReached$1()};this.requestCodeCallback_.reject=reject}));return promise}onRequestCodeEntered_(event){this.selectedPageId_=BluetoothPairingSubpageId.SPINNER_PAGE;event.stopPropagation();assert$1(this.pairingAuthType_);assert$1(this.requestCodeCallback_.resolve);this.requestCodeCallback_.resolve(event.detail.code)}displayPinCode(pinCode,handler){this.displayCode_(handler,pinCode)}displayPasskey(passkey,handler){this.displayCode_(handler,passkey)}displayCode_(handler,code){this.pairingCode_=code;this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_ENTER_CODE_PAGE;this.keyEnteredReceiver_=new KeyEnteredHandler(this,handler)}handleKeyEntered(numKeysEntered){this.numKeysEntered_=numKeysEntered}confirmPasskey(passkey){this.pairingAuthType_=PairingAuthType.CONFIRM_PASSKEY;this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_CONFIRM_CODE_PAGE;this.pairingCode_=passkey;this.confirmCodeCallback_={resolve:null,reject:null};return new Promise(((resolve,reject)=>{this.confirmCodeCallback_.resolve=()=>{resolve({confirmed:true})};this.confirmCodeCallback_.reject=reject}))}onConfirmCode_(event){this.selectedPageId_=BluetoothPairingSubpageId.SPINNER_PAGE;event.stopPropagation();assert$1(this.pairingAuthType_);assert$1(this.confirmCodeCallback_);this.confirmCodeCallback_.resolve()}authorizePairing(){}shouldShowSubpage_(subpageId){return this.selectedPageId_===subpageId}onCancelClick_(event){event.stopPropagation();this.devicePendingPairing_=null;if(this.pairingDelegateReceiver_){this.pairingDelegateReceiver_.$.close();this.finishPendingCallbacksForTest_();return}this.closeDialog_()}closeDialog_(){this.dispatchEvent(new CustomEvent("finished",{bubbles:true,composed:true}))}onSelectedPageIdChanged_(){if(this.selectedPageId_!==BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE){return}const deviceSelectionPage=this.shadowRoot.querySelector("#deviceSelectionPage");if(!deviceSelectionPage){return}deviceSelectionPage.attemptFocusLastSelectedItem()}finishPendingCallbacksForTest_(){if(this.requestCodeCallback_){this.requestCodeCallback_.reject()}if(this.confirmCodeCallback_){this.confirmCodeCallback_.reject()}}getDeviceName_(){if(!this.devicePendingPairing_){return""}return mojoString16ToString(this.devicePendingPairing_.publicName)}}customElements.define(SettingsBluetoothPairingUiElement.is,SettingsBluetoothPairingUiElement);const styleMod=document.createElement("dom-module");styleMod.appendChild(html`
  <template>
    <style>
:host{color:var(--cr-primary-text-color);line-height:154%;overflow:hidden;user-select:text}
    </style>
  </template>
`.content);styleMod.register("cr-page-host-style");function getTemplate$1(){return html`<!--_html_template_start_-->    <style>:host{--cr-icon-button-fill-color:var(--google-grey-700);--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:36px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:0;overflow:hidden;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host-context([chrome-refresh-2023]):host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-size:32px;position:relative}:host(:hover){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}:host-context(html:not([chrome-refresh-2023])) :host(:active){background-color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}paper-ripple{display:none}:host-context([chrome-refresh-2023]) paper-ripple{--paper-ripple-opacity:1;color:var(--cr-active-background-color);display:block}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([dir=ltr]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([dir=ltr])[multiple-icons_]) iron-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);position:relative;width:100%}iron-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color, none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}</style>
    <div id="icon">
      <div id="maskedImage"></div>
    </div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrIconbuttonElementBase=mixinBehaviors([PaperRippleBehavior],PolymerElement);class CrIconButtonElement extends CrIconbuttonElementBase{static get is(){return"cr-icon-button"}static get template(){return getTemplate$1()}static get properties(){return{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},ironIcon:{type:String,observer:"onIronIconChanged_",reflectToAttribute:true},multipleIcons_:{type:Boolean,reflectToAttribute:true}}}constructor(){super();this.spaceKeyDown_=false;this.addEventListener("blur",this.onBlur_.bind(this));this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));if(document.documentElement.hasAttribute("chrome-refresh-2023")){this.addEventListener("pointerdown",this.onPointerDown_.bind(this))}}ready(){super.ready();this.setAttribute("aria-disabled",this.disabled?"true":"false");if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}}toggleClass(className){this.classList.toggle(className)}disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",this.disabled?"true":"false");this.applyTabIndex_()}applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value.toString())}onBlur_(){this.spaceKeyDown_=false}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}onIronIconChanged_(){this.shadowRoot.querySelectorAll("iron-icon").forEach((el=>el.remove()));if(!this.ironIcon){return}const icons=(this.ironIcon||"").split(",");this.multipleIcons_=icons.length>1;icons.forEach((icon=>{const ironIcon=document.createElement("iron-icon");ironIcon.icon=icon;this.$.icon.appendChild(ironIcon);if(ironIcon.shadowRoot){ironIcon.shadowRoot.querySelectorAll("svg, img").forEach((child=>child.setAttribute("role","none")))}}))}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}if(e.key==="Enter"){this.click()}else if(e.key===" "){this.spaceKeyDown_=true}}onKeyUp_(e){if(e.key===" "||e.key==="Enter"){e.preventDefault();e.stopPropagation()}if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click()}}onPointerDown_(){this.ensureRipple()}}customElements.define(CrIconButtonElement.is,CrIconButtonElement);
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var CrContainerShadowSide;(function(CrContainerShadowSide){CrContainerShadowSide["TOP"]="top";CrContainerShadowSide["BOTTOM"]="bottom"})(CrContainerShadowSide||(CrContainerShadowSide={}));const CrContainerShadowMixin=dedupingMixin((superClass=>{class CrContainerShadowMixin extends superClass{constructor(){super(...arguments);this.intersectionObserver_=null;this.dropShadows_=new Map;this.intersectionProbes_=new Map;this.sides_=null}connectedCallback(){super.connectedCallback();const hasBottomShadow=this.getContainer_().hasAttribute("show-bottom-shadow");this.sides_=hasBottomShadow?[CrContainerShadowSide.TOP,CrContainerShadowSide.BOTTOM]:[CrContainerShadowSide.TOP];this.sides_.forEach((side=>{const shadow=document.createElement("div");shadow.id=`cr-container-shadow-${side}`;shadow.classList.add("cr-container-shadow");this.dropShadows_.set(side,shadow);this.intersectionProbes_.set(side,document.createElement("div"))}));this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.TOP),this.getContainer_());this.getContainer_().prepend(this.intersectionProbes_.get(CrContainerShadowSide.TOP));if(hasBottomShadow){this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.BOTTOM),this.getContainer_().nextSibling);this.getContainer_().append(this.intersectionProbes_.get(CrContainerShadowSide.BOTTOM))}this.enableShadowBehavior(true)}disconnectedCallback(){super.disconnectedCallback();this.enableShadowBehavior(false)}getContainer_(){return this.shadowRoot.querySelector("#container")}getIntersectionObserver_(){const callback=entries=>{for(const entry of entries){const target=entry.target;this.sides_.forEach((side=>{if(target===this.intersectionProbes_.get(side)){this.dropShadows_.get(side).classList.toggle("has-shadow",entry.intersectionRatio===0)}}))}};return new IntersectionObserver(callback,{root:this.getContainer_(),threshold:0})}enableShadowBehavior(enable){if(enable===!!this.intersectionObserver_){return}if(!enable){this.intersectionObserver_.disconnect();this.intersectionObserver_=null;return}this.intersectionObserver_=this.getIntersectionObserver_();window.setTimeout((()=>{if(this.intersectionObserver_){this.intersectionProbes_.forEach((probe=>{this.intersectionObserver_.observe(probe)}))}}))}showDropShadows(){assert(!this.intersectionObserver_);assert(this.sides_);for(const side of this.sides_){this.dropShadows_.get(side).classList.toggle("has-shadow",true)}}}return CrContainerShadowMixin}));function getTemplate(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style cr-icons">dialog{--scroll-border-color:var(--paper-grey-300);--scroll-border:1px solid var(--scroll-border-color);background-color:var(--cr-dialog-background-color,#fff);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,.12),0 16px 16px rgba(0,0,0,.24);color:inherit;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{--scroll-border-color:var(--google-grey-700);background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}:host{--transparent-border:1px solid transparent}#cr-container-shadow-top{border-bottom:var(--cr-dialog-body-border-top,var(--transparent-border))}#cr-container-shadow-bottom{border-bottom:var(--cr-dialog-body-border-bottom,var(--transparent-border))}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{border-bottom:var(--scroll-border)}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}</style>
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
const CrDialogElementBase=CrContainerShadowMixin(PolymerElement);class CrDialogElement extends CrDialogElementBase{constructor(){super(...arguments);this.intersectionObserver_=null;this.mutationObserver_=null;this.boundKeydown_=null}static get is(){return"cr-dialog"}static get template(){return getTemplate()}static get properties(){return{open:{type:Boolean,value:false,reflectToAttribute:true},closeText:String,ignorePopstate:{type:Boolean,value:false},ignoreEnterKey:{type:Boolean,value:false},consumeKeydownEvent:{type:Boolean,value:false},noCancel:{type:Boolean,value:false},showCloseButton:{type:Boolean,value:false},showOnAttach:{type:Boolean,value:false}}}ready(){super.ready();window.addEventListener("popstate",(()=>{if(!this.ignorePopstate&&this.$.dialog.open){this.cancel()}}));if(!this.ignoreEnterKey){this.addEventListener("keypress",this.onKeypress_.bind(this))}this.addEventListener("pointerdown",(e=>this.onPointerdown_(e)))}connectedCallback(){super.connectedCallback();const mutationObserverCallback=()=>{if(this.$.dialog.open){this.enableShadowBehavior(true);this.addKeydownListener_()}else{this.enableShadowBehavior(false);this.removeKeydownListener_()}};this.mutationObserver_=new MutationObserver(mutationObserverCallback);this.mutationObserver_.observe(this.$.dialog,{attributes:true,attributeFilter:["open"]});mutationObserverCallback();if(this.showOnAttach){this.showModal()}}disconnectedCallback(){super.disconnectedCallback();this.removeKeydownListener_();if(this.mutationObserver_){this.mutationObserver_.disconnect();this.mutationObserver_=null}}addKeydownListener_(){if(!this.consumeKeydownEvent){return}this.boundKeydown_=this.boundKeydown_||this.onKeydown_.bind(this);this.addEventListener("keydown",this.boundKeydown_);document.body.addEventListener("keydown",this.boundKeydown_)}removeKeydownListener_(){if(!this.boundKeydown_){return}this.removeEventListener("keydown",this.boundKeydown_);document.body.removeEventListener("keydown",this.boundKeydown_);this.boundKeydown_=null}showModal(){this.$.dialog.showModal();assert(this.$.dialog.open);this.open=true;this.dispatchEvent(new CustomEvent("cr-dialog-open",{bubbles:true,composed:true}))}cancel(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:true,composed:true}));this.$.dialog.close();assert(!this.$.dialog.open);this.open=false}close(){this.$.dialog.close("success");assert(!this.$.dialog.open);this.open=false}setTitleAriaLabel(title){this.$.dialog.removeAttribute("aria-labelledby");this.$.dialog.setAttribute("aria-label",title)}onCloseKeypress_(e){e.stopPropagation()}onNativeDialogClose_(e){if(e.target!==this.getNative()){return}this.dispatchEvent(new CustomEvent("close",{bubbles:true,composed:true}))}onNativeDialogCancel_(e){if(e.target!==this.getNative()){return}if(this.noCancel){e.preventDefault();return}this.open=false;this.dispatchEvent(new CustomEvent("cancel",{bubbles:true,composed:true}))}getNative(){return this.$.dialog}onKeypress_(e){if(e.key!=="Enter"){return}const accept=e.target===this||e.composedPath().some((el=>el.tagName==="CR-INPUT"&&el.type!=="search"));if(!accept){return}const actionButton=this.querySelector(".action-button:not([disabled]):not([hidden])");if(actionButton){actionButton.click();e.preventDefault()}}onKeydown_(e){assert(this.consumeKeydownEvent);if(!this.getNative().open){return}if(this.ignoreEnterKey&&e.key==="Enter"){return}e.stopPropagation()}onPointerdown_(e){if(e.button!==0||e.composedPath()[0].tagName!=="DIALOG"){return}this.$.dialog.animate([{transform:"scale(1)",offset:0},{transform:"scale(1.02)",offset:.4},{transform:"scale(1.02)",offset:.6},{transform:"scale(1)",offset:1}],{duration:180,easing:"ease-in-out",iterations:1});e.preventDefault()}focus(){const titleContainer=this.shadowRoot.querySelector(".title-container");assert(titleContainer);titleContainer.focus()}}customElements.define(CrDialogElement.is,CrDialogElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageHandlerPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"color_change_listener.mojom.PageHandler",scope)}}class PageHandlerRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}setPage(page){this.proxy.sendMessage(0,PageHandler_SetPage_ParamsSpec.$,null,[page])}}class PageHandler{static get $interfaceName(){return"color_change_listener.mojom.PageHandler"}static getRemote(){let remote=new PageHandlerRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class PagePendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"color_change_listener.mojom.Page",scope)}}class PageRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}onColorProviderChanged(){this.proxy.sendMessage(0,Page_OnColorProviderChanged_ParamsSpec.$,null,[])}}class PageCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.onColorProviderChanged=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,Page_OnColorProviderChanged_ParamsSpec.$,null,this.onColorProviderChanged.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}const PageHandler_SetPage_ParamsSpec={$:{}};const Page_OnColorProviderChanged_ParamsSpec={$:{}};mojo.internal.Struct(PageHandler_SetPage_ParamsSpec.$,"PageHandler_SetPage_Params",[mojo.internal.StructField("page",0,0,mojo.internal.InterfaceProxy(PageRemote),null,false,0)],[[0,16]]);mojo.internal.Struct(Page_OnColorProviderChanged_ParamsSpec.$,"Page_OnColorProviderChanged_Params",[],[[0,8]]);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance=null;class BrowserProxy{constructor(){this.callbackRouter=new PageCallbackRouter;const pageHandlerRemote=PageHandler.getRemote();pageHandlerRemote.setPage(this.callbackRouter.$.bindNewPipeAndPassRemote())}static getInstance(){return instance||(instance=new BrowserProxy)}static setInstance(newInstance){instance=newInstance}}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const COLORS_CSS_SELECTOR="link[href*='//theme/colors.css']";let documentInstance=null;const COLOR_PROVIDER_CHANGED="color-provider-changed";class ColorChangeUpdater{constructor(root){this.listenerId_=null;this.eventTarget=new EventTarget;assert(documentInstance===null||root!==document);this.root_=root}start(){if(this.listenerId_!==null){return}this.listenerId_=BrowserProxy.getInstance().callbackRouter.onColorProviderChanged.addListener(this.onColorProviderChanged.bind(this))}async onColorProviderChanged(){await this.refreshColorsCss();this.eventTarget.dispatchEvent(new CustomEvent(COLOR_PROVIDER_CHANGED))}async refreshColorsCss(){const colorCssNode=this.root_.querySelector(COLORS_CSS_SELECTOR);if(!colorCssNode){return false}const href=colorCssNode.getAttribute("href");if(!href){return false}const hrefURL=new URL(href,location.href);const params=new URLSearchParams(hrefURL.search);params.set("version",(new Date).getTime().toString());const newHref=`${hrefURL.origin}${hrefURL.pathname}?${params.toString()}`;const newColorsCssLink=document.createElement("link");newColorsCssLink.setAttribute("href",newHref);newColorsCssLink.rel="stylesheet";newColorsCssLink.type="text/css";const newColorsLoaded=new Promise((resolve=>{newColorsCssLink.onload=resolve}));if(this.root_===document){document.getElementsByTagName("body")[0].appendChild(newColorsCssLink)}else{this.root_.appendChild(newColorsCssLink)}await newColorsLoaded;const oldColorCssNode=document.querySelector(COLORS_CSS_SELECTOR);if(oldColorCssNode){oldColorCssNode.remove()}return true}static forDocument(){return documentInstance||(documentInstance=new ColorChangeUpdater(document))}}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({is:"bluetooth-pairing-dialog",_template:html`<!--_html_template_start_-->
<style include="cr-page-host-style cr-shared-style cros-color-overrides">
  #dialog {
    --cr-dialog-top-container-min-height: 0;
  }

  div[slot="body"] {
    height: 426px;
  }
</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="body">
    <bluetooth-pairing-ui on-finished="closeDialog_"
        pairing-device-address="[[deviceAddress_]]"
        should-omit-links="[[shouldOmitLinks_]]">
    </bluetooth-pairing-ui>
  </div>
</cr-dialog><!--_html_template_end_-->`,behaviors:[I18nBehavior],properties:{pairingDevice_:Object,deviceAddress_:{type:String,value:null},shouldOmitLinks_:{type:Boolean,value:false},isJellyEnabled_:{type:Boolean,readOnly:true,value(){return loadTimeData.valueExists("isJellyEnabled")&&loadTimeData.getBoolean("isJellyEnabled")}}},attached(){if(this.isJellyEnabled_){const link=document.createElement("link");link.rel="stylesheet";link.href="chrome://theme/colors.css?sets=legacy,sys";document.head.appendChild(link);document.body.classList.add("jelly-enabled");(function(){ColorChangeUpdater.forDocument().start()})()}const dialogArgs=chrome.getVariableValue("dialogArguments");if(!dialogArgs){return}const parsedDialogArgs=JSON.parse(dialogArgs);if(!parsedDialogArgs){return}this.deviceAddress_=parsedDialogArgs.address;this.shouldOmitLinks_=!!parsedDialogArgs.shouldOmitLinks},closeDialog_(){chrome.send("dialogClose")}});
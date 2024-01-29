import{html,Polymer,dom,dedupingMixin,PolymerElement,Base,useShadow,dashToCamelCase}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import"./strings.m.js";import{loadTimeData}from"chrome://resources/ash/common/load_time_data.m.js";import{mojo}from"chrome://resources/mojo/mojo/public/js/bindings.js";import{MultiDeviceSetup}from"chrome://resources/mojo/chromeos/ash/services/multidevice_setup/public/mojom/multidevice_setup.mojom-webui.js";import{sendWithPromise as sendWithPromise$1,addWebUiListener,removeWebUiListener}from"chrome://resources/js/cr.js";import{LitElement,css,html as html$1}from"chrome://resources/mwc/lit/index.js";import{ConnectivityStatus}from"chrome://resources/mojo/chromeos/ash/services/device_sync/public/mojom/device_sync.mojom-webui.js";import"chrome://resources/js/load_time_data.js";const styleMod$6=document.createElement("dom-module");styleMod$6.appendChild(html`
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);styleMod$6.register("cr-hidden-style");
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
`;template$3.setAttribute("style","display: none;");document.head.appendChild(template$3.content);const template$2=html`
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
`;document.head.appendChild(template$2.content);
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CLASS_NAME="focus-outline-visible";const docsToManager=new Map;class FocusOutlineManager{focusByKeyboard_=true;classList_;constructor(doc){this.classList_=doc.documentElement.classList;doc.addEventListener("keydown",(e=>this.onEvent_(true,e)),true);doc.addEventListener("mousedown",(e=>this.onEvent_(false,e)),true);this.updateVisibility()}onEvent_(focusByKeyboard,e){if(this.focusByKeyboard_===focusByKeyboard){return}if(e instanceof KeyboardEvent&&e.repeat){return}this.focusByKeyboard_=focusByKeyboard;this.updateVisibility()}updateVisibility(){this.visible=this.focusByKeyboard_}set visible(visible){this.classList_.toggle(CLASS_NAME,visible)}get visible(){return this.classList_.contains(CLASS_NAME)}static forDocument(doc){let manager=docsToManager.get(doc);if(!manager){manager=new FocusOutlineManager(doc);docsToManager.set(doc,manager)}return manager}}
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
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PaperRippleMixin=dedupingMixin((superClass=>{class PaperRippleMixin extends superClass{static get properties(){return{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}}}_buttonStateChanged(){if(this.focused){this.ensureRipple()}}_downHandler(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}}ensureRipple(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){dom(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){var domContainer=dom(this._rippleContainer||this);var target=dom(optTriggeringEvent).rootTarget;if(domContainer.deepContains(target)){this._ripple.uiDownAction(optTriggeringEvent)}}}}getRipple(){this.ensureRipple();return this._ripple}hasRipple(){return Boolean(this._ripple)}_createRipple(){var element=document.createElement("paper-ripple");return element}_noinkChanged(noink){if(this.hasRipple()){this._ripple.noink=noink}}}return PaperRippleMixin}));function getTemplate$7(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style">:host{--active-shadow-rgb:var(--google-grey-800-rgb);--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-600);--border-color:var(--google-grey-300);--disabled-bg-action:var(--google-grey-100);--disabled-bg:white;--disabled-border-color:var(--google-grey-100);--disabled-text-color:var(--google-grey-600);--focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--hover-bg-action:rgba(var(--google-blue-600-rgb), .9);--hover-bg-color:rgba(var(--google-blue-500-rgb), .04);--hover-border-color:var(--google-blue-100);--hover-shadow-action-rgb:var(--google-blue-500-rgb);--ink-color-action:white;--ink-color:var(--google-blue-600);--ripple-opacity-action:.32;--ripple-opacity:.1;--text-color-action:white;--text-color:var(--google-blue-600)}@media (prefers-color-scheme:dark){:host{--active-bg:black linear-gradient(rgba(255, 255, 255, .06),
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
const CrButtonElementBase=PaperRippleMixin(PolymerElement);class CrButtonElement extends CrButtonElementBase{static get is(){return"cr-button"}static get template(){return getTemplate$7()}static get properties(){return{disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"disabledChanged_"},customTabIndex:{type:Number,observer:"applyTabIndex_"},circleRipple:{type:Boolean,value:false},hasPrefixIcon_:{type:Boolean,reflectToAttribute:true,value:false},hasSuffixIcon_:{type:Boolean,reflectToAttribute:true,value:false}}}constructor(){super();this.spaceKeyDown_=false;this.timeoutIds_=new Set;this.addEventListener("blur",this.onBlur_.bind(this));this.addEventListener("click",this.onClick_.bind(this));this.addEventListener("keydown",this.onKeyDown_.bind(this));this.addEventListener("keyup",this.onKeyUp_.bind(this));this.addEventListener("pointerdown",this.onPointerDown_.bind(this))}ready(){super.ready();if(!this.hasAttribute("role")){this.setAttribute("role","button")}if(!this.hasAttribute("tabindex")){this.setAttribute("tabindex","0")}if(!this.hasAttribute("aria-disabled")){this.setAttribute("aria-disabled",this.disabled?"true":"false")}FocusOutlineManager.forDocument(document)}disconnectedCallback(){super.disconnectedCallback();this.timeoutIds_.forEach(clearTimeout);this.timeoutIds_.clear()}setTimeout_(fn,delay){if(!this.isConnected){return}const id=setTimeout((()=>{this.timeoutIds_.delete(id);fn()}),delay);this.timeoutIds_.add(id)}disabledChanged_(newValue,oldValue){if(!newValue&&oldValue===undefined){return}if(this.disabled){this.blur()}this.setAttribute("aria-disabled",this.disabled?"true":"false");this.applyTabIndex_()}applyTabIndex_(){let value=this.customTabIndex;if(value===undefined){value=this.disabled?-1:0}this.setAttribute("tabindex",value.toString())}onBlur_(){this.spaceKeyDown_=false;this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}onClick_(e){if(this.disabled){e.stopImmediatePropagation()}}onPrefixIconSlotChanged_(){this.hasPrefixIcon_=this.$.prefixIcon.assignedElements().length>0}onSuffixIconSlotChanged_(){this.hasSuffixIcon_=this.$.suffixIcon.assignedElements().length>0}onKeyDown_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(e.repeat){return}this.getRipple().uiDownAction();if(e.key==="Enter"){this.click();this.setTimeout_((()=>this.getRipple().uiUpAction()),100)}else if(e.key===" "){this.spaceKeyDown_=true}}onKeyUp_(e){if(e.key!==" "&&e.key!=="Enter"){return}e.preventDefault();e.stopPropagation();if(this.spaceKeyDown_&&e.key===" "){this.spaceKeyDown_=false;this.click();this.getRipple().uiUpAction()}}onPointerDown_(){this.ensureRipple()}_createRipple(){const ripple=super._createRipple();if(this.circleRipple){ripple.setAttribute("center","");ripple.classList.add("circle")}return ripple}}customElements.define(CrButtonElement.is,CrButtonElement);const styleMod$5=document.createElement("dom-module");styleMod$5.appendChild(html`
  <template>
    <style>
:host-context([cros]) a:not(.item)[href]{color:var(--cros-link-color)}:host-context([cros]) cr-button[has-prefix-icon_],:host-context([cros]) cr-button[has-suffix-icon_]{--iron-icon-fill-color:currentColor}:host-context([cros]) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-bg-color-elevation-3);background-image:none;box-shadow:var(--cros-elevation-3-shadow)}:host-context([cros]) cr-radio-button{--cr-radio-button-checked-color:var(--cros-radio-button-color);--cr-radio-button-checked-ripple-color:var(--cros-radio-button-ripple-color);--cr-radio-button-unchecked-color:var(--cros-radio-button-color-unchecked);--cr-radio-button-unchecked-ripple-color:var(--cros-radio-button-ripple-color-unchecked)}:host-context([cros]) cr-toast{--cr-toast-background-color:var(--cros-toast-background-color);--cr-toast-background:var(--cros-toast-background-color);--cr-toast-text-color:var(--cros-toast-text-color);--iron-icon-fill-color:var(--cros-toast-icon-color)}:host-context([cros]) cr-toast .error-message{color:var(--cros-toast-text-color)}:host-context([cros]) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-switch-track-color-active);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-switch-knob-color-active);--cr-toggle-checked-ripple-color:var(--cros-focus-aura-color);--cr-toggle-unchecked-bar-color:var(--cros-switch-track-color-inactive);--cr-toggle-unchecked-button-color:var(--cros-switch-knob-color-inactive);--cr-toggle-unchecked-ripple-color:var(--cros-ripple-color);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context([cros]):host-context(.focus-outline-visible) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-focus-ring-color)}:host-context([cros]) paper-spinner-lite{--paper-spinner-color:var(--cros-icon-color-prominent)}:host-context([cros]) cr-tooltip-icon{--cr-link-color:var(--cros-tooltip-link-color)}:host-context(body.jelly-enabled){--cros-button-label-color-primary:var(--cros-sys-on_primary);--cros-link-color:var(--cros-sys-primary);--cros-separator-color:var(--cros-sys-separator);--cros-tab-slider-track-color:var(--cros-sys-surface_variant, 80%);--cr-form-field-label-color:var(--cros-sys-on_surface);--cr-link-color:var(--cros-sys-primary);--cr-primary-text-color:var(--cros-sys-on_surface);--cr-secondary-text-color:var(--cros-sys-on_surface_variant)}:host-context([cros][chrome-refresh-2023]){--cr-focus-outline-color:var(--cros-sys-focus_ring);--cr-disabled-opacity:var(--cros-disabled-opacity)}:host-context(body.jelly-enabled) cr-button{--text-color:var(--cros-sys-on_primary_container);--ink-color:var(--cros-sys-ripple_primary);--iron-icon-fill-color:currentColor;--hover-bg-color:var(--cros-sys-hover_on_subtle);--ripple-opacity:.1;--bg-action:var(--cros-sys-primary);--ink-color-action:var(--cros-sys-ripple_primary);--text-color-action:var(--cros-sys-on_primary);--hover-bg-action:var(--cros-sys-hover_on_prominent);--ripple-opacity-action:1;--disabled-bg:var(--cros-sys-disabled_container);--disabled-bg-action:var(--cros-sys-disabled_container);--disabled-text-color:var(--cros-sys-disabled);background-color:var(--cros-sys-primary_container);border:none}:host-context(body.jelly-enabled) cr-button:hover::part(hoverBackground){background-color:var(--hover-bg-color);display:block}:host-context(body.jelly-enabled) cr-button.action-button:not(:active):hover,:host-context(body.jelly-enabled) cr-button:active{box-shadow:none}:host-context(body.jelly-enabled) cr-button.action-button{background-color:var(--bg-action)}:host-context(body.jelly-enabled) cr-button.action-button:hover::part(hoverBackground){background-color:var(--hover-bg-action)}:host-context(body.jelly-enabled) cr-button[disabled]{background-color:var(--cros-sys-disabled_container)}:host-context(body.jelly-enabled):host-context(.focus-outline-visible) cr-button:focus{box-shadow:none;outline:2px solid var(--cros-sys-focus_ring)}:host-context(body.jelly-enabled) cr-checkbox{--cr-checkbox-checked-box-color:var(--cros-sys-primary);--cr-checkbox-ripple-checked-color:var(--cros-sys-ripple_primary);--cr-checkbox-checked-ripple-opacity:1;--cr-checkbox-mark-color:var(--cros-sys-inverse_on_surface);--cr-checkbox-ripple-unchecked-color:var(--cros-sys-ripple_primary);--cr-checkbox-unchecked-box-color:var(--cros-sys-on_surface);--cr-checkbox-unchecked-ripple-opacity:1}:host-context([cros][chrome-refresh-2023]) cr-checkbox{--cr-checkbox-focus-outline:none}:host-context([cros][chrome-refresh-2023]) cr-checkbox[disabled]{opacity:var(--cros-disabled-opacity)}:host-context([cros][chrome-refresh-2023]):host-context(.focus-outline-visible) cr-checkbox:focus{--cr-checkbox-ripple-ring:2px solid var(--cros-sys-focus_ring)}:host-context(body.jelly-enabled) cr-dialog::part(dialog){--cr-dialog-background-color:var(--cros-sys-base_elevated);background-image:none;box-shadow:0 0 12px 0 var(--cros-sys-shadow)}:host-context(body.jelly-enabled) cr-dialog>[slot=title]{font:var(--cros-display-7-font)}:host-context(body.jelly-enabled) cr-drawer{--cr-drawer-background-color:var(--cros-sys-app_base_shaded)}:host-context(body.jelly-enabled) cr-expand-button::part(icon),:host-context(body.jelly-enabled) cr-icon-button,:host-context(body.jelly-enabled) cr-link-row::part(icon){--cr-icon-button-fill-color:var(--cros-sys-secondary)}:host-context(body.jelly-enabled) cr-input,:host-context(body.jelly-enabled) cr-search-field::part(searchInput),:host-context(body.jelly-enabled) cr-searchable-drop-down::part(input),:host-context(body.jelly-enabled) cr-textarea{--cr-input-background-color:var(--cros-sys-input_field_on_base);--cr-input-error-color:var(--cros-sys-error);--cr-input-focus-color:var(--cros-sys-primary);--cr-input-placeholder-color:var(--cros-sys-secondary)}:host-context([cros][chrome-refresh-2023]) cr-input,:host-context([cros][chrome-refresh-2023]) cr-search-field::part(searchInput),:host-context([cros][chrome-refresh-2023]) cr-searchable-drop-down::part(input){--cr-input-background-color:var(--cros-sys-input_field_on_base);--cr-input-border:none;--cr-input-border-bottom:none;--cr-input-border-radius:8px;--cr-input-label-color:var(--cros-sys-on-surface);--cr-input-padding-start:16px;--cr-input-padding-end:16px;--cr-input-placeholder-color:var(--cros-sys-secondary);--cr-input-underline-display:none;font:var(--cros-body-2-font);--cr-input-focus-color:var(--cros-sys-primary);--cr-input-focus-label-color:var(--cros-sys-primary);--cr-input-focus-outline:2px solid var(--cros-sys-focus_ring);--cr-input-hover-background-color:transparent;--cr-input-error-color:var(--cros-sys-error)}:host-context([cros][chrome-refresh-2023]) cr-input[disabled]{color:currentColor;opacity:var(--cros-disabled-opacity)}:host-context([cros][chrome-refresh-2023]) cr-input[invalid]{--cr-input-focus-outline:2px solid var(--cros-sys-error)}:host-context([cros][chrome-refresh-2023]) cr-toolbar-search-field{--cr-toolbar-search-field-hover-background:none}:host-context(body.jelly-enabled) .md-select{--md-select-bg-color:var(--cros-sys-input_field_on_base);--md-select-focus-shadow-color:var(--cros-sys-primary);--md-select-option-bg-color:var(--cros-sys-base_elevated);--md-select-text-color:var(--cros-sys-on_surface)}:host-context([cros][chrome-refresh-2023]) .md-select{--md-arrow-width:7px;--md-select-bg-color:var(--cros-sys-input_field_on_base);--md-select-focus-shadow-color:transparent;--md-select-option-bg-color:var(--cros-sys-base_elevated);--md-select-side-padding:16px;--md-select-text-color:var(--cros-sys-on_surface);border:none;border-radius:8px;font:var(--cros-body-2-font);height:36px;line-height:36px}:host-context([cros][chrome-refresh-2023]) .md-select:hover{background-color:var(--md-select-bg-color)}:host-context([cros][chrome-refresh-2023]) .md-select[disabled]{background-color:var(--md-select-bg-color);border-color:transparent;color:var(--md-select-text-color);opacity:var(--cros-disabled-opacity)}:host-context(body.jelly-enabled) cr-action-menu{--cr-menu-background-color:var(--cros-sys-base_elevated);--cr-menu-background-focus-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled),:host-context(body.jelly-enabled) cr-radio-button{--cr-radio-button-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--cr-radio-button-unchecked-color:var(--cros-sys-on_surface);--cr-radio-button-unchecked-ripple-color:var(--cros-sys-ripple_neutral_on_subtle)}:host-context([cros][chrome-refresh-2023]),:host-context([cros][chrome-refresh-2023]) cr-radio-button{--cr-radio-button-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--cr-radio-button-unchecked-color:var(--cros-sys-on_surface);--cr-radio-button-unchecked-ripple-color:var(--cros-sys-ripple_neutral_on_subtle);--cr-radio-button-ink-size:40px}:host-context([cros][chrome-refresh-2023]) cr-radio-button[disabled]{--cr-radio-button-checked-color:var(--cros-sys-disabled);--cr-radio-button-unchecked-color:var(--cros-sys-disabled)}:host-context(body.jelly-enabled) cr-card-radio-button{--cr-card-background-color:var(--cros-sys-app_base);--cr-checked-color:var(--cros-sys-primary);--cr-radio-button-checked-ripple-color:var(--cros-sys-ripple_primary);--hover-bg-color:var(--cros-sys-hover_on_subtle)}:host-context(body.jelly-enabled) cr-search-field{--cr-search-field-clear-icon-fill:var(--cros-sys-primary);--cr-search-field-clear-icon-margin-end:6px;--cr-search-field-input-border-bottom:none;--cr-search-field-input-padding-start:8px;--cr-search-field-input-underline-border-radius:4px;--cr-search-field-search-icon-display:none;--cr-search-field-search-icon-fill:var(--cros-sys-primary);--cr-search-field-search-icon-inline-display:block;--cr-search-field-search-icon-inline-margin-start:6px;border-radius:4px}:host-context([cros][chrome-refresh-2023]) cr-search-field{--cr-search-field-search-icon-fill:var(--cros-sys-secondary);--cr-search-field-search-icon-inline-margin-start:0;--cr-search-field-clear-icon-fill:var(--cros-sys-secondary);--cr-search-field-clear-icon-margin-end:6px;--cr-search-field-clear-icon-size:16px}:host-context([cros][chrome-refresh-2023]) cr-search-field::part(searchInput){--cr-input-padding-bottom:10px;--cr-input-padding-end:28px;--cr-input-padding-start:8px;--cr-input-padding-top:10px}:host-context([cros][chrome-refresh-2023]) cr-searchable-drop-down,:host-context(body.jelly-enabled) cr-searchable-drop-down{--cr-searchable-drop-down-bg-color:var(--cros-sys-base_elevated);--cr-searchable-drop-down-icon-color-focus:var(--cros-sys-primary);--cr-searchable-drop-down-list-bg-color-selected:var(--cros-sys-base_highlight);--cr-searchable-drop-down-list-item-color:var(--cros-sys-on_surface);--cr-searchable-drop-down-shadow:var(--cros-elevation-3-shadow)}:host-context(body.jelly-enabled) cr-slider{--cr-slider-active-color:var(--cros-sys-primary);--cr-slider-container-color:var(--cros-sys-primary_container);--cr-slider-container-disabled-color:var(--cros-sys-disabled_container);--cr-slider-disabled-color:var(--cros-sys-disabled);--cr-slider-knob-active-color:var(--cros-sys-primary);--cr-slider-knob-disabled-color:var(--cros-sys-disabled);--cr-slider-marker-active-color:var(--cros-sys-primary_container);--cr-slider-marker-color:var(--cros-sys-primary);--cr-slider-marker-disabled-color:var(--cros-sys-disabled);--cr-slider-ripple-color:var(--cros-sys-hover_on_prominent)}:host-context(body.jelly-enabled) cr-slider:not([disabled])::part(knob){background-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-slider[disabled]::part(knob){border:none}:host-context(body.jelly-enabled) cr-slider::part(label){background:var(--cros-sys-primary);color:var(--cros-sys-on_primary)}:host-context(body.jelly-enabled) cr-tabs{--cr-tabs-selected-color:var(--cros-sys-primary)}:host-context(body.jelly-enabled) cr-toggle{--cr-toggle-checked-bar-color:var(--cros-sys-primary_container);--cr-toggle-checked-bar-opacity:100%;--cr-toggle-checked-button-color:var(--cros-sys-primary);--cr-toggle-checked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-unchecked-bar-color:var(--cros-sys-secondary);--cr-toggle-unchecked-button-color:var(--cros-sys-surface_variant);--cr-toggle-unchecked-ripple-color:var(--cros-sys-hover_on_prominent);--cr-toggle-box-shadow:var(--cros-elevation-1-shadow);--cr-toggle-ripple-diameter:32px}:host-context(body.jelly-enabled):host-context(.focus-outline-visible) cr-toggle:focus{--cr-toggle-ripple-ring:2px solid var(--cros-sys-focus_ring)}:host-context([cros][chrome-refresh-2023]) cr-toggle{--cr-toggle-bar-width:32px;--cr-toggle-knob-diameter:12px;--cr-toggle-bar-border:none;--cr-toggle-checked-bar-color:var(--cros-sys-primary);--cr-toggle-checked-button-color:var(--cros-sys-on_primary);--cr-toggle-unchecked-bar-color:var(--cros-sys-secondary);--cr-toggle-unchecked-button-color:var(--cros-sys-on_secondary);--color-toggle-button-thumb-on-hover:var(--cros-sys-on_primary);--cr-toggle-disabled-opacity:var(--cros-disabled-opacity)}:host-context([cros][chrome-refresh-2023]):host-context(.focus-outline-visible) cr-toggle:focus{--cr-toggle-ripple-ring:none}:host-context([cros][chrome-refresh-2023]) cr-policy-indicator,:host-context([cros][chrome-refresh-2023]) cr-policy-pref-indicator,:host-context([cros][chrome-refresh-2023]) cr-tooltip-icon::part(tooltip),:host-context(body.jelly-enabled) cr-policy-indicator,:host-context(body.jelly-enabled) cr-policy-pref-indicator,:host-context(body.jelly-enabled) cr-tooltip-icon::part(tooltip){--paper-tooltip-background:var(--cros-sys-on_surface);--paper-tooltip-padding:5px 8px;--paper-tooltip-text-color:var(--cros-sys-inverse_on_surface);font:var(--cros-annotation-1-font)}
    </style>
  </template>
`.content);styleMod$5.register("cros-color-overrides");
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert$1(value,message){if(value){return}throw new Error("Assertion failed"+(message?`: ${message}`:""))}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageHandlerPendingReceiver{handle;constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"color_change_listener.mojom.PageHandler",scope)}}class PageHandlerRemote{proxy;$;onConnectionError;constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}setPage(page){this.proxy.sendMessage(0,PageHandler_SetPage_ParamsSpec.$,null,[page])}}class PageHandler{static get $interfaceName(){return"color_change_listener.mojom.PageHandler"}static getRemote(){let remote=new PageHandlerRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class PagePendingReceiver{handle;constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"color_change_listener.mojom.Page",scope)}}class PageRemote{proxy;$;onConnectionError;constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}onColorProviderChanged(){this.proxy.sendMessage(0,Page_OnColorProviderChanged_ParamsSpec.$,null,[])}}class PageCallbackRouter{helper_internal_;$;router_;onColorProviderChanged;onConnectionError;constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.onColorProviderChanged=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,Page_OnColorProviderChanged_ParamsSpec.$,null,this.onColorProviderChanged.createReceiverHandler(false));this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}const PageHandler_SetPage_ParamsSpec={$:{}};const Page_OnColorProviderChanged_ParamsSpec={$:{}};mojo.internal.Struct(PageHandler_SetPage_ParamsSpec.$,"PageHandler_SetPage_Params",[mojo.internal.StructField("page",0,0,mojo.internal.InterfaceProxy(PageRemote),null,false,0)],[[0,16]]);mojo.internal.Struct(Page_OnColorProviderChanged_ParamsSpec.$,"Page_OnColorProviderChanged_Params",[],[[0,8]]);
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance$2=null;class BrowserProxy{callbackRouter;constructor(){this.callbackRouter=new PageCallbackRouter;const pageHandlerRemote=PageHandler.getRemote();pageHandlerRemote.setPage(this.callbackRouter.$.bindNewPipeAndPassRemote())}static getInstance(){return instance$2||(instance$2=new BrowserProxy)}static setInstance(newInstance){instance$2=newInstance}}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const COLORS_CSS_SELECTOR="link[href*='//theme/colors.css']";let documentInstance=null;const COLOR_PROVIDER_CHANGED="color-provider-changed";class ColorChangeUpdater{listenerId_=null;root_;eventTarget=new EventTarget;constructor(root){assert$1(documentInstance===null||root!==document);this.root_=root}start(){if(this.listenerId_!==null){return}this.listenerId_=BrowserProxy.getInstance().callbackRouter.onColorProviderChanged.addListener(this.onColorProviderChanged.bind(this))}async onColorProviderChanged(){await this.refreshColorsCss();this.eventTarget.dispatchEvent(new CustomEvent(COLOR_PROVIDER_CHANGED))}async refreshColorsCss(){const colorCssNode=this.root_.querySelector(COLORS_CSS_SELECTOR);if(!colorCssNode){return false}const href=colorCssNode.getAttribute("href");if(!href){return false}const hrefURL=new URL(href,location.href);const params=new URLSearchParams(hrefURL.search);params.set("version",(new Date).getTime().toString());const newHref=`${hrefURL.origin}${hrefURL.pathname}?${params.toString()}`;const newColorsCssLink=document.createElement("link");newColorsCssLink.setAttribute("href",newHref);newColorsCssLink.rel="stylesheet";newColorsCssLink.type="text/css";const newColorsLoaded=new Promise((resolve=>{newColorsCssLink.onload=resolve}));if(this.root_===document){document.getElementsByTagName("body")[0].appendChild(newColorsCssLink)}else{this.root_.appendChild(newColorsCssLink)}await newColorsLoaded;const oldColorCssNode=document.querySelector(COLORS_CSS_SELECTOR);if(oldColorCssNode){oldColorCssNode.remove()}return true}static forDocument(){return documentInstance||(documentInstance=new ColorChangeUpdater(document))}}
// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function assert(condition,opt_message){if(!condition){let message="Assertion failed";if(opt_message){message=message+": "+opt_message}const error=new Error(message);const global=function(){const thisOrSelf=this||self;thisOrSelf.traceAssertionsForTesting;return thisOrSelf}();if(global.traceAssertionsForTesting){console.warn(error.stack)}throw error}return condition}function assertNotReached(message){assert(false,message||"Unreachable code hit")}
// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const sanitizeInnerHtmlInternal=function(rawString,opts){opts=opts||{};return parseHtmlSubset(`<b>${rawString}</b>`,opts.tags,opts.attrs).firstChild.innerHTML};let sanitizedPolicy=null;function sanitizeInnerHtml(rawString,opts){assert(window.trustedTypes);if(sanitizedPolicy===null){sanitizedPolicy=window.trustedTypes.createPolicy("ash-deprecated-sanitize-inner-html",{createHTML:(string,...opts)=>sanitizeInnerHtmlInternal(string,opts[0]),createScript:message=>assertNotReached(message),createScriptURL:message=>assertNotReached(message)})}return sanitizedPolicy.createHTML(rawString,opts)}const parseHtmlSubset=function(){const allowAttribute=(node,value)=>true;const allowedAttributes=new Map([["href",(node,value)=>node.tagName==="A"&&(value.startsWith("chrome://")||value.startsWith("https://")||value==="#")],["target",(node,value)=>node.tagName==="A"&&value==="_blank"]]);const allowedOptionalAttributes=new Map([["class",allowAttribute],["id",allowAttribute],["is",(node,value)=>value==="action-link"||value===""],["role",(node,value)=>value==="link"],["src",(node,value)=>node.tagName==="IMG"&&value.startsWith("chrome://")],["tabindex",allowAttribute],["aria-hidden",allowAttribute],["aria-labelledby",allowAttribute]]);const allowedTags=new Set(["A","B","I","BR","DIV","EM","KBD","P","PRE","SPAN","STRONG"]);const allowedOptionalTags=new Set(["IMG","LI","UL"]);let unsanitizedPolicy;function mergeTags(optTags){const clone=new Set(allowedTags);optTags.forEach((str=>{const tag=str.toUpperCase();if(allowedOptionalTags.has(tag)){clone.add(tag)}}));return clone}function mergeAttrs(optAttrs){const clone=new Map([...allowedAttributes]);optAttrs.forEach((key=>{if(allowedOptionalAttributes.has(key)){clone.set(key,allowedOptionalAttributes.get(key))}}));return clone}function walk(n,f){f(n);for(let i=0;i<n.childNodes.length;i++){walk(n.childNodes[i],f)}}function assertElement(tags,node){if(!tags.has(node.tagName)){throw Error(node.tagName+" is not supported")}}function assertAttribute(attrs,attrNode,node){const n=attrNode.nodeName;const v=attrNode.nodeValue;if(!attrs.has(n)||!attrs.get(n)(node,v)){throw Error(node.tagName+"["+n+'="'+v+'"] is not supported')}}return function(s,extraTags,extraAttrs){const tags=extraTags?mergeTags(extraTags):allowedTags;const attrs=extraAttrs?mergeAttrs(extraAttrs):allowedAttributes;const doc=document.implementation.createHTMLDocument("");const r=doc.createRange();r.selectNode(doc.body);if(window.trustedTypes){if(!unsanitizedPolicy){unsanitizedPolicy=trustedTypes.createPolicy("ash-deprecated-parse-html-subset",{createHTML:untrustedHTML=>untrustedHTML})}s=unsanitizedPolicy.createHTML(s)}const df=r.createContextualFragment(s);walk(df,(function(node){switch(node.nodeType){case Node.ELEMENT_NODE:assertElement(tags,node);const nodeAttrs=node.attributes;for(let i=0;i<nodeAttrs.length;++i){assertAttribute(attrs,nodeAttrs[i],node)}break;case Node.COMMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:case Node.TEXT_NODE:break;default:throw Error("Node type "+node.nodeType+" is not supported")}}));return df}}();
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const I18nBehavior={properties:{locale:{type:String,value:""}},i18nUpdateLocale(){this.locale=loadTimeData.getString("app_locale")},i18nRaw_(id,varArgs){return arguments.length===1?loadTimeData.getString(id):loadTimeData.getStringF.apply(loadTimeData,arguments)},i18n(id,varArgs){const rawString=this.i18nRaw_.apply(this,arguments);return parseHtmlSubset("<b>"+rawString+"</b>").firstChild.textContent},i18nAdvanced(id,opts){opts=opts||{};const args=[id].concat(opts.substitutions||[]);const rawString=this.i18nRaw_.apply(this,args);return sanitizeInnerHtml(rawString,opts)},i18nDynamic(locale,id,varArgs){return this.i18n.apply(this,Array.prototype.slice.call(arguments,1))},i18nRecursive(locale,id,varArgs){let args=Array.prototype.slice.call(arguments,2);if(args.length>0){const self=this;args=args.map((function(str){return self.i18nExists(str)?loadTimeData.getString(str):str}))}return this.i18nDynamic.apply(this,[locale,id].concat(args))},i18nExists(id){return loadTimeData.valueExists(id)}};const styleMod$4=document.createElement("dom-module");styleMod$4.appendChild(html`
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_up_cr23.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);styleMod$4.register("cr-icons");const styleMod$3=document.createElement("dom-module");styleMod$3.appendChild(html`
  <template>
    <style include="cr-hidden-style cr-icons">
:host,html{--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host,html{--scrollable-border-color:var(--google-grey-700)}}[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);styleMod$3.register("cr-shared-style");const styleMod$2=document.createElement("dom-module");styleMod$2.appendChild(html`
  <template>
    <style>
.md-select{--md-arrow-width:10px;--md-select-bg-color:var(--google-grey-100);--md-select-focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--md-select-option-bg-color:white;--md-select-side-padding:8px;--md-select-text-color:var(--cr-primary-text-color);-webkit-appearance:none;background:url(//resources/images/arrow_down.svg) calc(100% - var(--md-select-side-padding)) center no-repeat;background-color:var(--md-select-bg-color);background-size:var(--md-arrow-width);border:none;border-radius:4px;color:var(--md-select-text-color);cursor:pointer;font-family:inherit;font-size:inherit;line-height:inherit;max-width:100%;outline:0;padding-bottom:6px;padding-inline-end:calc(var(--md-select-side-padding) + var(--md-arrow-width) + 3px);padding-inline-start:var(--md-select-side-padding);padding-top:6px;width:var(--md-select-width,200px)}@media (prefers-color-scheme:dark){.md-select{--md-select-bg-color:rgba(0, 0, 0, .3);--md-select-focus-shadow-color:rgba(var(--google-blue-300-rgb), .5);--md-select-option-bg-color:var(--google-grey-900-white-4-percent);background-image:url(//resources/images/dark/arrow_down.svg)}}:host-context([chrome-refresh-2023]) .md-select{--md-select-bg-color:transparent;--md-arrow-width:7px;--md-select-side-padding:10px;--md-select-text-color:inherit;border:solid 1px var(--color-combobox-container-outline,var(--cr-fallback-color-neutral-outline));border-radius:8px;box-sizing:border-box;font-size:12px;height:36px;line-height:36px;padding-bottom:0;padding-top:0}:host-context([chrome-refresh-2023]) .md-select:hover{background-color:var(--color-comboxbox-ink-drop-hovered,var(--cr-hover-on-subtle-background-color))}.md-select :-webkit-any(option,optgroup){background-color:var(--md-select-option-bg-color)}.md-select[disabled]{opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]) .md-select[disabled]{background-color:var(--color-combobox-background-disabled,var(--cr-fallback-color-disabled-background));border-color:transparent;color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));opacity:1}.md-select:focus{box-shadow:0 0 0 2px var(--md-select-focus-shadow-color)}:host-context([chrome-refresh-2023]) .md-select:focus{box-shadow:none;outline:solid 2px var(--cr-focus-outline-color);outline-offset:-1px}@media (forced-colors:active){.md-select:focus{outline:var(--cr-focus-outline-hcm)}}.md-select:active{box-shadow:none}:host-context([dir=rtl]) .md-select{background-position-x:var(--md-select-side-padding)}
    </style>
  </template>
`.content);styleMod$2.register("md-select");
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
`;template$1.setAttribute("style","display: none;");document.head.appendChild(template$1.content);const styleMod$1=document.createElement("dom-module");styleMod$1.appendChild(html`
  <template>
    <style include="iron-flex cr-shared-style md-select">

@import 'ui/webui/resources/cr_elements/chromeos/cros_color_overrides.css';

a {
  color: var(--cros-sys-primary);
  text-decoration: none;
}
    </style>
  </template>
`.content);styleMod$1.register("multidevice-setup-shared");function getTemplate$6(){return html`<!--_html_template_start_--><style include="multidevice-setup-shared cros-color-overrides">
  :host {
    display: flex;
    flex-direction: column;
  }

  #button-container {
    display: flex;
  }

  @media screen and (max-width: 767px) {
    #shadow {
      background: linear-gradient(0deg,
                                  rgba(var(--google-grey-100-rgb), 1) 0,
                                  rgba(var(--google-grey-100-rgb), 0) 8px);
      height: 8px;
      left: 0;
      position: absolute;
      right: 0;
      top: -8px;
    }
  }
</style>
<div id="shadow" hidden$="[[!shouldShowShadow]]"></div>
<div id="button-container">
  <cr-button id="backward"
      name="backward-button"
      class="cancel-button"
      on-click="onBackwardButtonClicked_"
      hidden$="[[!backwardButtonTextId]]">
    [[getButtonTextFromId_(backwardButtonTextId)]]
  </cr-button>
  <div class="flex"></div>
  <cr-button id="cancel"
      name="cancel-button"
      class="cancel-button"
      on-click="onCancelButtonClicked_"
      hidden$="[[!cancelButtonTextId]]">
      [[getButtonTextFromId_(cancelButtonTextId)]]
  </cr-button>
  <cr-button id="forward"
      name="forward-button"
      class="action-button"
      on-click="onForwardButtonClicked_"
      disabled="[[forwardButtonDisabled]]"
      hidden$="[[!forwardButtonTextId]]">
    [[getButtonTextFromId_(forwardButtonTextId)]]
  </cr-button>
</div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$6(),is:"button-bar",behaviors:[I18nBehavior],properties:{shouldShowShadow:{type:Boolean,value:false},backwardButtonTextId:{type:String,value:""},cancelButtonTextId:{type:String,value:""},forwardButtonTextId:{type:String,value:""},forwardButtonDisabled:{type:Boolean,value:false}},onForwardButtonClicked_(){this.fire("forward-navigation-requested")},onCancelButtonClicked_(){this.fire("cancel-requested")},onBackwardButtonClicked_(){this.fire("backward-navigation-requested")},getButtonTextFromId_(textId){if(!textId){return""}return this.i18n(textId)}});
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
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function(src){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){if(this._usesIconset()){if(this._img&&this._img.parentNode){dom(this.root).removeChild(this._img)}if(this._iconName===""){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=false}this._img.src=this.src;dom(this.root).appendChild(this._img)}}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:false},useGlobalRtlAttribute:{type:Boolean,value:false}},created:function(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){this._icons=this._createIconMap();return Object.keys(this._icons).map((function(n){return this.name+":"+n}),this)},applyIcon:function(element,iconName){this.removeIcon(element);var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){var pde=dom(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},createIcon:function(iconName,targetIsRTL){return this._cloneIcon(iconName,this.rtlMirroring&&targetIsRTL)},removeIcon:function(element){if(element._svgIcon){dom(element.root||element).removeChild(element._svgIcon);element._svgIcon=null}},_targetIsRTL:function(target){if(this.__targetIsRTL==null){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL=globalElement.getAttribute("dir")==="rtl"}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&window.getComputedStyle(target)["direction"]==="rtl"}}return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async((function(){this.fire("iron-iconset-added",this,{node:window})}))},_createIconMap:function(){var icons=Object.create(null);dom(this).querySelectorAll("[id]").forEach((function(icon){icons[icon.id]=icon}));return icons},_cloneIcon:function(id,mirrorAllowed){this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},_prepareSvgClone:function(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(true),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});const template=html`<iron-iconset-svg name="multidevice-setup-icons-32" size="32">
  <svg>
    <defs>
      <g id="google-g" fill="none" fill-rule="evenodd">
        <path d="M30.42 16.83a16.66 16.66 0 0 0-.264-2.966H16.5v5.609h7.804c-.336 1.812-1.358 3.348-2.894 4.376v3.638h4.686c2.742-2.524 4.324-6.242 4.324-10.657z" fill="#4285F4"></path>
        <path d="M16.5 31c3.915 0 7.197-1.298 9.596-3.513l-4.686-3.638c-1.298.87-2.96 1.384-4.91 1.384-3.777 0-6.973-2.55-8.113-5.978H3.542v3.757C5.928 27.75 10.832 31 16.5 31z" fill="#34A853"></path>
        <path d="M8.387 19.255c-.29-.87-.455-1.8-.455-2.755 0-.956.165-1.885.455-2.755V9.988H3.542A14.494 14.494 0 0 0 2 16.5c0 2.34.56 4.554 1.542 6.512l4.845-3.757z" fill="#FBBC05"></path>
        <path d="M16.5 7.767c2.129 0 4.04.732 5.543 2.168l4.159-4.158C23.69 3.437 20.408 2 16.5 2 10.832 2 5.928 5.25 3.542 9.988l4.845 3.757c1.14-3.427 4.336-5.978 8.113-5.978z" fill="#EA4335"></path>
        <path d="M2 2h29v29H2z"></path>
      </g>
      <g id="error-icon" fill="none" fill-rule="evenodd" transform="translate(-4 -4)">
        <path d="M20 4C11.168 4 4 11.168 4 20s7.168 16 16 16 16-7.168 16-16S28.832 4 20 4zm1.6 24h-3.2v-3.2h3.2V28zm0-6.4h-3.2V12h3.2v9.6z" fill="#D93025" fill-rule="nonzero"></path>
        <path d="M.8.8h38.4v38.4H.8z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
<iron-iconset-svg name="multidevice-setup-icons-20" size="20">
  <svg>
    <defs>
      <g id="messages" fill-rule="evenodd">
        <path d="M16.3107503,3 L3.66666667,3 C2.75,3 2,3.75 2,4.66666667 L2,18.3161621 L5.33333333,15 L16.3107503,15 C17.227417,15 17.977417,14.2328288 17.977417,13.3161621 L17.977417,4.66666667 C17.977417,3.75 17.227417,3 16.3107503,3 Z M16,13 L4,13 L4,5 L16,5 L16,13 Z M6,8 L8,8 L8,10 L6,10 L6,8 Z M9,8 L11,8 L11,10 L9,10 L9,8 Z M12,8 L14,8 L14,10 L12,10 L12,8 Z"></path>
      </g>
      <g id="notifications" fill-rule="evenodd">
        <path d="M11,3.10001812 C13.2822403,3.56328845 15,5.58104209 15,8 C15,10.7614237 15,13 15,13 L17,13 L17,15 L3,15 L3,13 L5,13 C5,13 5,9.9021552 5,8 C5,5.58104209 6.71775968,3.56328845 9,3.10001812 L9,2.5 C9,1.94771525 9.44771525,1.5 10,1.5 C10.5522847,1.5 11,1.94771525 11,2.5 L11,3.10001812 Z M7,8 L7,13 L13,13 L13,8 C13,6.34314575 11.6568542,5 10,5 C8.34314575,5 7,6.34314575 7,8 Z M10,18 C8.8954305,18 8,17.1045695 8,16 L12,16 C12,17.1045695 11.1045695,18 10,18 Z"></path>
      </g>
      <g id="wifi" fill-rule="evenodd">
        <path d="M10.01 17.99L20 5.46C19.613 5.164 15.765 2 10 2 4.227 2 .387 5.165 0 5.46l9.99 12.53.01.01.01-.01z" fill-opacity=".3"></path>
        <path d="M2.942 9.143l7.05 8.85L10 18l.008-.008 7.05-8.85C16.7 8.867 14.008 6.668 10 6.668s-6.7 2.2-7.058 2.476z"></path>
      </g>
      <g id="downloads" fill-rule="evenodd">
        <path d="M2,13 L4,13 L4,16 L16,16 L16,13 L18,13 L18,16 C18,17.1 17.1,18 16,18 L4,18 C2.9,18 2,17.1 2,16 L2,13 Z M13.59,7.59 L11,10.17 L11,2 L9,2 L9,10.17 L6.41,7.59 L5,9 L10,14 L15,9 L13.59,7.59 Z"></path>
      </g>
      <g id="features" fill-rule="evenodd">
        <path d="M5,5 L18,5 L18,3.5 L5.16080729,3.5 C4.24414063,3.5 3.49414062,4.23125 3.49414062,5.125 L3.49414062,14 L1,14 L1,17 L11,17 L11,14 L5,14 L5,5 Z M18.1666667,6.49829102 L13.3713582,6.49829102 C12.9130249,6.49829102 12.5,6.86391602 12.5,7.31079102 L12.5,16.171875 C12.5,16.61875 12.9130249,17 13.3713582,17 L18.1666667,17 C18.625,17 19,16.61875 19,16.171875 L19,7.31079102 C19,6.86391602 18.625,6.49829102 18.1666667,6.49829102 Z M17.5,14 L14,14 L14,8.5 L17.5,8.5 L17.5,14 Z"></path>
      </g>
      <g id="image" fill-rule="evenodd">
        <path d="M15 3H5C3.9 3 3 3.9 3 5V15C3 16.1 3.9 17 5 17H15C16.1 17 17 16.1 17 15V5C17 3.9 16.1 3 15 3ZM15 15H5V5H15V15ZM11.3333 9L9.5 12L8 10.6L6 14H14L11.3333 9Z"></path>
      </g>
      <g id="wifi-sync" viewBox="0 0 24 18" fill-rule="evenodd">
        <path d="M12 17.5C11.3 17.5 10.7083 17.2583 10.225 16.775C9.74167 16.2917 9.5 15.7 9.5 15C9.5 14.3 9.74167 13.7083 10.225 13.225C10.7083 12.7417 11.3 12.5 12 12.5C12.7 12.5 13.2917 12.7417 13.775 13.225C14.2583 13.7083 14.5 14.3 14.5 15C14.5 15.7 14.2583 16.2917 13.775 16.775C13.2917 17.2583 12.7 17.5 12 17.5ZM6.35 11.85L4.25 9.7C5.23333 8.71667 6.38333 7.94167 7.7 7.375C9.03333 6.79167 10.4667 6.5 12 6.5C13.5333 6.5 14.9583 6.79167 16.275 7.375C17.6083 7.95833 18.7667 8.75 19.75 9.75L17.65 11.85C16.9167 11.1167 16.0667 10.5417 15.1 10.125C14.1333 9.70833 13.1 9.5 12 9.5C10.9 9.5 9.86667 9.70833 8.9 10.125C7.93333 10.5417 7.08333 11.1167 6.35 11.85ZM2.1 7.6L0 5.5C1.53333 3.93333 3.325 2.70833 5.375 1.825C7.425 0.941666 9.63333 0.499999 12 0.499999C14.3667 0.499999 16.575 0.941666 18.625 1.825C20.675 2.70833 22.4667 3.93333 24 5.5L21.9 7.6C20.6167 6.31667 19.125 5.31667 17.425 4.6C15.7417 3.86667 13.9333 3.5 12 3.5C10.0667 3.5 8.25 3.86667 6.55 4.6C4.86667 5.31667 3.38333 6.31667 2.1 7.6Z"></path>
      </g>
      <g id="smart-lock" viewBox="0 0 22 24">
        <path d="M18,9 L17,9 L17,7 C17,4.24 14.76,2 12,2 C9.24,2 7,4.24 7,7 L7,9 L6,9 C4.9,9 4,9.9 4,11 L4,21 C4,22.1 4.9,23 6,23 L18,23 C19.1,23 20,22.1 20,21 L20,11 C20,9.9 19.1,9 18,9 Z M9,7 C9,5.34 10.34,4 12,4 C13.66,4 15,5.34 15,7 L15,9 L9,9 L9,7 Z M18,21 L6,21 L6,11 L18,11 L18,21 Z M12,18 C13.1,18 14,17.1 14,16 C14,14.9 13.1,14 12,14 C10.9,14 10,14.9 10,16 C10,17.1 10.9,18 12,18 Z"></path>
      </g>
      <g id="phonehub" viewBox="0 0 12 19">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0.51L2 0.5C0.9 0.5 0 1.4 0 2.5V16.5C0 17.6 0.9 18.5 2 18.5H10C11.1 18.5 12 17.6 12 16.5V2.5C12 1.4 11.1 0.51 10 0.51ZM10 16.5H2V15.5H10V16.5ZM10 13.5H2V5.5H10V13.5ZM2 3.5V2.5H10V3.5H2Z"></path>
      </g>
      <g id="instant-tethering" viewBox="0 0 18 16">
        <path d="M0 8.5C0 3.84343 3.808 0 8.5 0C13.192 0 17 3.84343 17 8.5C17 11.7534 15.2915 14.5158 13 16L12 14.5C13.9315 13.3233 15.3 11.1185 15.5 8.5C15.3 4.78713 12.257 1.71582 8.5 1.5C4.743 1.71582 1.7 4.78713 1.5 8.5C1.7 11.1185 3.0685 13.3233 5 14.5L4 16C1.7085 14.5158 0 11.7534 0 8.5Z"></path>
        <path d="M13.5 8.5C13.5 5.78374 11.2583 3.5 8.5 3.5C5.74167 3.5 3.5 5.78374 3.5 8.5C3.5 10.4786 4.50833 12.1171 6 13L7 11.5C5.84167 10.9285 5.16667 9.85031 5 8.5C5.16667 6.71761 6.65833 5.19794 8.5 5C10.3417 5.19794 11.8333 6.71761 12 8.5C11.8333 9.85031 11.1583 10.9285 10 11.5L11 13C12.4917 12.1171 13.5 10.4786 13.5 8.5Z"></path>
        <path d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"></path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template.content);function getTemplate$5(){return html`<!--_html_template_start_--><style include="multidevice-setup-shared">
  :host {
    --multidevice-setup-dialog-height: var(--oobe-oobe-dialog-height-base);
    --multidevice-setup-dialog-width: var(--oobe-oobe-dialog-width-base);
    --multidevice-setup-dialog-content-padding: 40px;
  }

  :host-context([orientation=horizontal]) {
    --multidevice-setup-dialog-content-direction: row;
    --multidevice-setup-dialog-item-alignment: unset;
    --multidevice-setup-text-alignment: start;
    --multidevice-setup-dialog-content-width: calc(
        var(--multidevice-setup-dialog-width) -
        4 * var(--multidevice-setup-dialog-content-padding) -
        var(--multidevice-setup-dialog-header-width));
    /* Header takes 40% of the width remaining after applying padding */
    --multidevice-setup-dialog-header-width: clamp(302px,
        calc(0.4 * (var(--multidevice-setup-dialog-width) -
        4 * var(--multidevice-setup-dialog-content-padding))) , 346px);
  }

  :host-context([orientation=vertical]) {
    --multidevice-setup-dialog-content-direction: column;
    --multidevice-setup-dialog-item-alignment: center;
    --multidevice-setup-text-alignment: center;
    --multidevice-setup-dialog-content-width: calc(
        var(--multidevice-setup-dialog-width) -
        2 * var(--multidevice-setup-dialog-content-padding));
    /* Header takes 60% of the width remaining after applying padding */
    --multidevice-setup-dialog-header-width: clamp(346px,
        calc(0.6 * (var(--multidevice-setup-dialog-width) -
        2 * var(--multidevice-setup-dialog-content-padding))) , 520px);
  }

  iron-icon {
    --iron-icon-width: 32px;
    --iron-icon-height: 32px;
  }

  h1 {
    color: var(--cros-sys-on_surface);
    font-family: var(--cros-font-family-google-sans);
    font-size: 28px;
    font-weight: normal;
    line-height: 36px;
    margin: 0;
    padding-top: 40px;
    text-align: var(--multidevice-setup-text-alignment);
  }

  #message-container {
    color: var(--cros-sys-on_surface_variant);
    font: var(--cros-body-1-font);
    font-family: var(--cros-font-family-google-sans);
    line-height: 18px;
    min-height: 32px;
    overflow-wrap: break-word;
    padding-top: 16px;
    text-align: var(--multidevice-setup-text-alignment);
  }

  #main-container {
    align-items: var(--multidevice-setup-dialog-item-alignment);
    display: flex;
    flex-direction: var(--multidevice-setup-dialog-content-direction);
    height: 100%;
  }

  #header-container {
    align-items: var(--multidevice-setup-dialog-item-alignment);
    display: flex;
    flex-direction: column;
    padding-bottom: 0;
    padding-inline-end: var(--multidevice-setup-dialog-content-padding);
    padding-inline-start: var(--multidevice-setup-dialog-content-padding);
    padding-top: var(--multidevice-setup-dialog-content-padding);
    width: var(--multidevice-setup-dialog-header-width);
  }

  :host-context([screen=oobe]) #header-container,
  :host-context([screen=gaia-signin]) #header-container {
    overflow-y: hidden;
    padding-top: calc(var(--multidevice-setup-dialog-content-padding)
      + 2 * clamp(20px, calc(var(--multidevice-setup-dialog-height)
      * 0.035), 40px) + 34px);
  }

  #additional-content-container {
    border: transparent;
    display: flex;
    flex: 1;
    padding-bottom: 0;
    padding-inline-end: var(--multidevice-setup-dialog-content-padding);
    padding-inline-start: var(--multidevice-setup-dialog-content-padding);
    padding-top: 0;
    width: var(--multidevice-setup-dialog-content-width);
  }

  :host-context([orientation=vertical]) #additional-content-container {
    margin-top: 40px;
  }

  :host-context([orientation=horizontal][screen=oobe])
      #additional-content-container,
  :host-context([orientation=horizontal][screen=gaia-signin])
      #additional-content-container {
    margin-top: 80px;
  }

  :host-context([screen=oobe]) #additional-content-container,
  :host-context([screen=gaia-signin]) #additional-content-container {
    overflow-y: auto;
  }
</style>
<div id="main-container">
  <div id="header-container">
    <iron-icon icon="[[computeIconIdentifier_(iconName)]]"></iron-icon>
    <h1>[[headerText]]</h1>
    <div id="message-container">
      <slot name="message"></slot>
    </div>
  </div>
  <div id="additional-content-container">
    <slot name="additional-content"></slot>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$5(),is:"ui-page",properties:{headerText:String,iconName:String},computeIconIdentifier_(){return"multidevice-setup-icons-32:"+this.iconName}});const styleMod=document.createElement("dom-module");styleMod.appendChild(html`
  <template>
    <style>
:host{--cr-input-background-color:var(--google-grey-100);--cr-input-color:var(--cr-primary-text-color);--cr-input-error-color:var(--google-red-600);--cr-input-focus-color:var(--google-blue-600);display:block;outline:0}:host-context([chrome-refresh-2023]):host{--cr-input-background-color:var(--color-textfield-filled-background,
            var(--cr-fallback-color-surface-variant));--cr-input-border-bottom:1px solid var(--color-textfield-filled-underline,
                var(--cr-fallback-color-outline));--cr-input-border-radius:8px 8px 0 0;--cr-input-error-color:var(--color-textfield-filled-error,
            var(--cr-fallback-color-error));--cr-input-focus-color:var(--color-textfield-filled-underline-focused,
            var(--cr-fallback-color-primary));--cr-input-hover-background-color:var(--cr-hover-background-color);--cr-input-label-color:var(--color-textfield-foreground-label,
            var(--cr-fallback-color-on-surface-subtle));--cr-input-padding-bottom:10px;--cr-input-padding-end:10px;--cr-input-padding-start:10px;--cr-input-padding-top:10px;--cr-input-placeholder-color:var(--color-textfield-foreground-placeholder,
                var(--cr-fallback-on-surface-subtle));isolation:isolate}:host-context([chrome-refresh-2023]):host([readonly]){--cr-input-border-radius:8px 8px}@media (prefers-color-scheme:dark){:host{--cr-input-background-color:rgba(0, 0, 0, .3);--cr-input-error-color:var(--google-red-300);--cr-input-focus-color:var(--google-blue-300)}}:host-context(html:not([chrome-refresh-2023])):host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-color)}:host-context([chrome-refresh-2023]) #label{color:var(--cr-input-label-color);font-size:11px;line-height:16px}:host-context([chrome-refresh-2023]):host([focused_]:not([readonly]):not([invalid])) #label{color:var(--cr-input-focus-label-color,var(--cr-input-label-color))}#input-container{border-radius:var(--cr-input-border-radius,4px);overflow:hidden;position:relative;width:var(--cr-input-width,100%)}:host-context([chrome-refresh-2023]):host([focused_]) #input-container{outline:var(--cr-input-focus-outline,none)}#inner-input-container{background-color:var(--cr-input-background-color);box-sizing:border-box;padding:0}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted(*){--cr-icon-button-fill-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle));--cr-icon-button-icon-size:16px;--cr-icon-button-size:24px;--cr-icon-button-margin-start:0;--cr-icon-color:var(--color-textfield-foreground-icon,
            var(--cr-fallback-color-on-surface-subtle))}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted([slot=inline-prefix]){--cr-icon-button-margin-start:-8px}:host-context([chrome-refresh-2023]) #inner-input-content ::slotted([slot=inline-suffix]){--cr-icon-button-margin-end:-4px}:host-context([chrome-refresh-2023]):host([invalid]) #inner-input-content ::slotted(*){--cr-icon-color:var(--cr-input-error-color);--cr-icon-button-fill-color:var(--cr-input-error-color)}#hover-layer{display:none}:host-context([chrome-refresh-2023]) #hover-layer{background-color:var(--cr-input-hover-background-color);inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host(:not([readonly]):not([disabled])) #input-container:hover #hover-layer{display:block}#input{-webkit-appearance:none;background-color:transparent;border:none;box-sizing:border-box;caret-color:var(--cr-input-focus-color);color:var(--cr-input-color);font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;min-height:var(--cr-input-min-height,auto);outline:0;padding-bottom:var(--cr-input-padding-bottom,6px);padding-inline-end:var(--cr-input-padding-end,8px);padding-inline-start:var(--cr-input-padding-start,8px);padding-top:var(--cr-input-padding-top,6px);text-align:inherit;text-overflow:ellipsis;width:100%}:host-context([chrome-refresh-2023]) #input{font-size:12px;line-height:16px;padding:0}:host-context([chrome-refresh-2023]) #inner-input-content{padding-bottom:var(--cr-input-padding-bottom);padding-inline-end:var(--cr-input-padding-end);padding-inline-start:var(--cr-input-padding-start);padding-top:var(--cr-input-padding-top)}#underline{border-bottom:2px solid var(--cr-input-focus-color);border-radius:var(--cr-input-underline-border-radius,0);bottom:0;box-sizing:border-box;display:var(--cr-input-underline-display);height:var(--cr-input-underline-height,0);left:0;margin:auto;opacity:0;position:absolute;right:0;transition:opacity 120ms ease-out,width 0s linear 180ms;width:0}:host([focused_]) #underline,:host([force-underline]) #underline,:host([invalid]) #underline{opacity:1;transition:opacity 120ms ease-in,width 180ms ease-out;width:100%}#underline-base{display:none}:host-context([chrome-refresh-2023]):host([readonly]) #underline{display:none}:host-context([chrome-refresh-2023]):host(:not([readonly])) #underline-base{border-bottom:var(--cr-input-border-bottom);bottom:0;display:block;left:0;position:absolute;right:0}:host-context([chrome-refresh-2023]):host([disabled]){color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));--cr-input-border-bottom:1px solid currentColor;--cr-input-placeholder-color:currentColor;--cr-input-color:currentColor;--cr-input-background-color:var(--color-textfield-background-disabled,
            var(--cr-fallback-color-disabled-background))}:host-context([chrome-refresh-2023]):host([disabled]) #inner-input-content ::slotted(*){--cr-icon-color:currentColor;--cr-icon-button-fill-color:currentColor}
    </style>
  </template>
`.content);styleMod.register("cr-input-style");function getTemplate$4(){return html`<!--_html_template_start_-->    <style include="cr-hidden-style cr-input-style cr-shared-style">:host([disabled]) :-webkit-any(#label,#error,#input-container){opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]) :is(#label,#error,#input-container){opacity:1}:host ::slotted(cr-button[slot=suffix]){margin-inline-start:var(--cr-button-edge-spacing)!important}:host([invalid]) #label{color:var(--cr-input-error-color)}#input{border-bottom:var(--cr-input-border-bottom,none);letter-spacing:var(--cr-input-letter-spacing)}:host-context([chrome-refresh-2023]) #input{border-bottom:none}:host-context([chrome-refresh-2023]) #input-container{border:var(--cr-input-border,none)}#input::placeholder{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([readonly]) #input{opacity:var(--cr-input-readonly-opacity,.6)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#error{color:var(--cr-input-error-color);display:var(--cr-input-error-display,block);font-size:var(--cr-form-field-label-font-size);height:var(--cr-form-field-label-height);line-height:var(--cr-form-field-label-line-height);margin:8px 0;visibility:hidden;white-space:var(--cr-input-error-white-space)}:host-context([chrome-refresh-2023]) #error{font-size:11px;line-height:16px;margin:4px 10px}:host([invalid]) #error{visibility:visible}#inner-input-content,#row-container{align-items:center;display:flex;justify-content:space-between;position:relative}:host-context([chrome-refresh-2023]) #inner-input-content{gap:4px;height:16px;z-index:1}#input[type=search]::-webkit-search-cancel-button{display:none}:host-context([dir=rtl]) #input[type=url]{text-align:right}#input[type=url]{direction:ltr}</style>
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
const SUPPORTED_INPUT_TYPES=new Set(["number","password","search","text","url"]);class CrInputElement extends PolymerElement{static get is(){return"cr-input"}static get template(){return getTemplate$4()}static get properties(){return{ariaDescription:{type:String},ariaLabel:{type:String,value:""},autofocus:{type:Boolean,value:false,reflectToAttribute:true},autoValidate:Boolean,disabled:{type:Boolean,value:false,reflectToAttribute:true},errorMessage:{type:String,value:"",observer:"onInvalidOrErrorMessageChanged_"},displayErrorMessage_:{type:String,value:""},focused_:{type:Boolean,value:false,reflectToAttribute:true},invalid:{type:Boolean,value:false,notify:true,reflectToAttribute:true,observer:"onInvalidOrErrorMessageChanged_"},max:{type:Number,reflectToAttribute:true},min:{type:Number,reflectToAttribute:true},maxlength:{type:Number,reflectToAttribute:true},minlength:{type:Number,reflectToAttribute:true},pattern:{type:String,reflectToAttribute:true},inputmode:String,label:{type:String,value:""},placeholder:{type:String,value:null,observer:"placeholderChanged_"},readonly:{type:Boolean,reflectToAttribute:true},required:{type:Boolean,reflectToAttribute:true},inputTabindex:{type:Number,value:0,observer:"onInputTabindexChanged_"},type:{type:String,value:"text",observer:"onTypeChanged_"},value:{type:String,value:"",notify:true,observer:"onValueChanged_"}}}ready(){super.ready();assert$1(!this.hasAttribute("tabindex"))}onInputTabindexChanged_(){assert$1(this.inputTabindex===0||this.inputTabindex===-1)}onTypeChanged_(){assert$1(SUPPORTED_INPUT_TYPES.has(this.type))}get inputElement(){return this.$.input}getAriaLabel_(ariaLabel,label,placeholder){return ariaLabel||label||placeholder}getAriaInvalid_(invalid){return invalid?"true":"false"}onInvalidOrErrorMessageChanged_(){this.displayErrorMessage_=this.invalid?this.errorMessage:"";const ERROR_ID="error";const errorElement=this.shadowRoot.querySelector(`#${ERROR_ID}`);assert$1(errorElement);if(this.invalid){errorElement.setAttribute("role","alert");this.inputElement.setAttribute("aria-errormessage",ERROR_ID)}else{errorElement.removeAttribute("role");this.inputElement.removeAttribute("aria-errormessage")}}placeholderChanged_(){if(this.placeholder||this.placeholder===""){this.inputElement.setAttribute("placeholder",this.placeholder)}else{this.inputElement.removeAttribute("placeholder")}}focus(){this.focusInput()}focusInput(){if(this.shadowRoot.activeElement===this.inputElement){return false}this.inputElement.focus();return true}onValueChanged_(newValue,oldValue){if(!newValue&&!oldValue){return}if(this.autoValidate){this.validate()}}onInputChange_(e){this.dispatchEvent(new CustomEvent("change",{bubbles:true,composed:true,detail:{sourceEvent:e}}))}onInputFocus_(){this.focused_=true}onInputBlur_(){this.focused_=false}select(start,end){this.inputElement.focus();if(start!==undefined&&end!==undefined){this.inputElement.setSelectionRange(start,end)}else{assert$1(start===undefined&&end===undefined);this.inputElement.select()}}validate(){this.invalid=!this.inputElement.checkValidity();return!this.invalid}}customElements.define(CrInputElement.is,CrInputElement);
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function sendWithPromise(methodName,var_args){const args=Array.prototype.slice.call(arguments,1);return sendWithPromise$1(methodName,...args)}function addWebUIListener(eventName,callback){return addWebUiListener(eventName,callback)}function removeWebUIListener(listener){return removeWebUiListener(listener)}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class BrowserProxyImpl{getProfileInfo(){return sendWithPromise("getProfileInfo")}openMultiDeviceSettings(){chrome.send("openMultiDeviceSettings")}static getInstance(){return instance$1||(instance$1=new BrowserProxyImpl)}static setInstance(obj){instance$1=obj}}let instance$1=null;function getTemplate$3(){return html`<!--_html_template_start_--><style include="multidevice-setup-shared">
  #user-info-container  {
    align-items: center;
    color: var(--cros-sys-on_surface_variant);
    display: flex;
    padding-top: 32px;
  }

  #profile-photo {
    border-radius: 50%;
    height: 20px;
    margin-inline-end: 8px;
    width: 20px;
  }

  #passwordInput {
    height: 32px;
    margin-top: 48px;
    width: 100%;
  }

  :host-context([orientation=horizontal]) #passwordInput {
    width: min(calc(var(--multidevice-setup-dialog-width) -
        2 * var(--multidevice-setup-dialog-content-padding)), 640px);
  }

  :host-context([orientation=vertical]) #passwordInput {
    width: min(calc(var(--multidevice-setup-dialog-width) -
        2 * var(--multidevice-setup-dialog-content-padding)), 480px);
  }

  :host-context([orientation=vertical]) #content-container {
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  :host-context([orientation=horizontal]) #user-info-container {
    padding-top: 0;
  }
</style>
<ui-page header-text="[[i18nDynamic(locale, 'passwordPageHeader')]]"
    icon-name="google-g">
  <div id="content-container" slot="message">
    <div id="user-info-container">
      <img id="profile-photo" src="[[profilePhotoUrl_]]" aria-hidden="true"></img>
      <span id="email">[[email_]]</span>
    </div>
    <cr-input id="passwordInput" type="password"
        placeholder="[[i18nDynamic(locale, 'enterPassword')]]"
        invalid="[[passwordInvalid_]]"
        error-message="[[i18nDynamic(locale, 'wrongPassword')]]"
        value="{{inputValue_}}"
        aria-disabled="false"
        on-keypress="onInputKeypress_">
    </cr-input>
  </div>
</ui-page>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const UiPageContainerBehaviorImpl={properties:{forwardButtonTextId:String,cancelButtonTextId:String,backwardButtonTextId:String},getCanNavigateToNextPage(){return new Promise((resolve=>{resolve(true)}))}};const UiPageContainerBehavior=[I18nBehavior,UiPageContainerBehaviorImpl];
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$3(),is:"password-page",behaviors:[UiPageContainerBehavior],properties:{forwardButtonDisabled:{type:Boolean,computed:"shouldForwardButtonBeDisabled_("+"inputValue_, passwordInvalid_, waitingForPasswordCheck_)",notify:true},forwardButtonTextId:{type:String,value:"done"},cancelButtonTextId:{type:String,value:"cancel"},backwardButtonTextId:{type:String,value:"back"},authToken:{type:String,value:"",notify:true},profilePhotoUrl_:{type:String,value:""},email_:{type:String,value:""},quickUnlockPrivate_:{type:Object,value:chrome.quickUnlockPrivate},inputValue_:{type:String,value:"",observer:"onInputValueChange_"},passwordInvalid_:{type:Boolean,value:false},waitingForPasswordCheck_:{type:Boolean,value:false}},browserProxy_:null,clearPasswordTextInput(){this.$.passwordInput.value=""},focusPasswordTextInput(){this.$.passwordInput.focus()},created(){this.browserProxy_=BrowserProxyImpl.getInstance()},attached(){this.browserProxy_.getProfileInfo().then((profileInfo=>{this.profilePhotoUrl_=profileInfo.profilePhotoUrl;this.email_=profileInfo.email}))},getCanNavigateToNextPage(){return new Promise((resolve=>{if(this.waitingForPasswordCheck_){resolve(false);return}this.waitingForPasswordCheck_=true;this.quickUnlockPrivate_.getAuthToken(this.inputValue_,(tokenInfo=>{this.waitingForPasswordCheck_=false;if(chrome.runtime.lastError){this.passwordInvalid_=true;this.$.passwordInput.select();resolve(false);return}this.authToken=tokenInfo.token;this.passwordInvalid_=false;resolve(true)}))}))},onInputValueChange_(){this.passwordInvalid_=false},onInputKeypress_(e){if(e.key!=="Enter"){return}this.fire("user-submitted-password")},shouldForwardButtonBeDisabled_(){return this.passwordInvalid_||!this.inputValue_||this.waitingForPasswordCheck_}});
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:false,readOnly:true,notify:true},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:false},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none";this.queryChanged()},detached:function(){this._remove()},_add:function(){if(this._mq){this._mq.addListener(this._boundMQHandler)}},_remove:function(){if(this._mq){this._mq.removeListener(this._boundMQHandler)}this._mq=null},queryChanged:function(){this._remove();var query=this.query;if(!query){return}if(!this.full&&query[0]!=="("){query="("+query+")"}this._mq=window.matchMedia(query);this._add();this.queryHandler(this._mq)},queryHandler:function(mq){this._setQueryMatches(mq.matches)}});function getTemplate$2(){return html`<!--_html_template_start_--><style include="multidevice-setup-shared cros-color-overrides">
  #page-icon-container {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
  }

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
</style>
<ui-page header-text="[[i18nDynamic(locale, 'setupSucceededPageHeader')]]"
    icon-name="google-g">
  <span slot="message" inner-h-t-m-l="[[getMessageHtml_()]]"></span>
  <div id="page-icon-container" slot="additional-content">
    <svg xmlns="http://www.w3.org/2000/svg" width="520" height="320" viewBox="0 0 520 320" fill="none">
      <path d="M437.801 223.645H383.518C382.438 223.607 381.412 223.16 380.648 222.396C379.884 221.633 379.439 220.608 379.401 219.528V102.117C379.401 101.025 379.834 99.978 380.607 99.206C381.379 98.4338 382.426 98 383.518 98H437.801C438.881 98.038 439.907 98.4838 440.671 99.2479C441.435 100.012 441.88 101.037 441.918 102.117V219.376C441.918 220.481 441.49 221.546 440.723 222.342C439.954 223.138 438.907 223.606 437.801 223.645Z" fill="var(--cros-sys-illo-color1-2)" />
      <path d="M437.801 223.645H383.518C382.438 223.607 381.412 223.16 380.648 222.396C379.884 221.633 379.439 220.608 379.401 219.528V102.117C379.401 101.025 379.834 99.978 380.607 99.206C381.379 98.4338 382.426 98 383.518 98H437.801C438.881 98.038 439.907 98.4838 440.671 99.2479C441.435 100.012 441.88 101.037 441.918 102.117V219.376C441.918 220.481 441.49 221.546 440.723 222.342C439.954 223.138 438.907 223.606 437.801 223.645Z" fill="var(--cros-sys-illo-color1-2)" />
      <path d="M227.225 103.947L190.172 109.589C185.359 110.316 181.034 112.926 178.146 116.844C175.258 120.761 174.044 125.666 174.771 130.478C175.498 135.291 178.109 139.617 182.026 142.505C185.943 145.393 190.849 146.607 195.661 145.879L232.714 140.085C235.178 139.832 237.566 139.081 239.731 137.878C241.898 136.674 243.796 135.044 245.314 133.085C246.829 131.126 247.933 128.88 248.555 126.482C249.179 124.084 249.307 121.584 248.935 119.135C248.563 116.685 247.698 114.337 246.392 112.232C245.085 110.127 243.363 108.31 241.334 106.889C239.304 105.469 237.006 104.476 234.582 103.97C232.156 103.465 229.654 103.457 227.225 103.947ZM243.54 119.957C243.821 121.731 243.748 123.542 243.324 125.287C242.9 127.032 242.134 128.675 241.07 130.122C240.007 131.569 238.667 132.79 237.127 133.715C235.588 134.64 233.881 135.25 232.104 135.51L194.899 141.305C191.3 141.851 187.631 140.944 184.699 138.785C181.769 136.626 179.815 133.391 179.269 129.792C178.723 126.193 179.629 122.524 181.788 119.593C183.947 116.662 187.183 114.709 190.782 114.163L227.987 108.369C231.586 107.845 235.245 108.772 238.162 110.945C241.078 113.117 243.013 116.359 243.54 119.957Z" fill="var(--cros-sys-illo-color4)" />
      <path d="M283.338 115.077C284.963 114.833 286.445 114.014 287.517 112.769C288.589 111.523 289.179 109.935 289.179 108.292C289.179 106.649 288.589 105.06 287.517 103.815C286.445 102.57 284.963 101.751 283.338 101.506C282.362 101.36 281.365 101.425 280.416 101.699C279.468 101.973 278.589 102.448 277.841 103.092C277.092 103.736 276.493 104.534 276.081 105.431C275.669 106.329 275.456 107.304 275.456 108.292C275.456 109.279 275.669 110.255 276.081 111.152C276.493 112.05 277.092 112.848 277.841 113.492C278.589 114.136 279.468 114.611 280.416 114.885C281.365 115.158 282.362 115.224 283.338 115.077Z" fill="var(--cros-sys-illo-color2)" />
      <path d="M194.136 126.362L142.445 140.39C142.214 140.425 141.997 140.525 141.821 140.68C141.645 140.834 141.518 141.036 141.453 141.261C141.389 141.486 141.391 141.725 141.459 141.949C141.526 142.173 141.657 142.373 141.835 142.525L179.955 180.341C180.126 180.473 180.326 180.565 180.538 180.606C180.751 180.647 180.969 180.638 181.178 180.579C181.386 180.519 181.578 180.411 181.736 180.264C181.895 180.117 182.015 179.934 182.09 179.731L195.813 127.886C195.844 127.665 195.821 127.44 195.745 127.23C195.669 127.02 195.542 126.831 195.377 126.681C195.213 126.531 195.013 126.423 194.796 126.367C194.58 126.312 194.353 126.31 194.136 126.362Z" fill="var(--cros-sys-illo-color3)" />
      <path d="M379.401 146.031C374.198 146.267 369.11 144.461 365.22 141L360.036 136.425L357.749 134.595L355.919 133.528C353.94 132.508 351.779 131.892 349.559 131.716C347.34 131.54 345.108 131.808 342.993 132.503C340.878 133.198 338.923 134.308 337.241 135.767C335.561 137.226 334.186 139.004 333.199 141C331.221 145.011 330.897 149.637 332.293 153.887C333.692 158.135 336.699 161.665 340.671 163.72L342.653 164.482H342.805L345.55 165.245L352.259 166.617C357.434 167.788 361.963 170.899 364.915 175.309L368.27 180.34C369.197 181.972 370.215 183.55 371.319 185.067C373.572 187.626 376.322 189.701 379.401 191.167" fill="var(--cros-sys-illo-color1-2)" />
      <path d="M379.401 191.32L381.078 192.082C386.86 194.238 393.248 194.108 398.938 191.718C404.629 189.328 409.193 184.857 411.701 179.219C414.211 173.58 414.473 167.197 412.439 161.369C410.403 155.543 406.222 150.712 400.748 147.862C396.055 145.616 390.784 144.87 385.653 145.727L379.706 146.032H379.401" fill="var(--cros-sys-illo-color1)" />
      <path d="M332.589 114.163C327.643 114.163 322.809 115.63 318.697 118.378C314.584 121.125 311.379 125.031 309.485 129.6C307.593 134.17 307.097 139.198 308.063 144.049C309.028 148.9 311.41 153.355 314.906 156.852C318.404 160.35 322.859 162.732 327.711 163.696C332.562 164.661 337.589 164.165 342.159 162.273C346.729 160.381 350.634 157.176 353.382 153.063C356.129 148.951 357.596 144.116 357.596 139.17C357.596 135.886 356.95 132.634 355.693 129.6C354.435 126.566 352.593 123.81 350.272 121.488C347.95 119.165 345.193 117.323 342.159 116.067C339.125 114.81 335.874 114.163 332.589 114.163ZM332.589 118.738C336.63 118.738 340.581 119.936 343.941 122.181C347.301 124.426 349.92 127.617 351.466 131.351C353.013 135.084 353.418 139.193 352.63 143.156C351.84 147.12 349.894 150.761 347.037 153.618C344.179 156.476 340.54 158.422 336.575 159.21C332.612 159.998 328.504 159.594 324.77 158.046C321.037 156.5 317.846 153.882 315.6 150.521C313.355 147.162 312.157 143.211 312.157 139.17C312.157 133.751 314.31 128.554 318.142 124.722C321.973 120.89 327.17 118.738 332.589 118.738Z" fill="var(--cros-sys-illo-color1)" />
      <path d="M418.284 104.099C418.458 104.097 418.63 104.133 418.788 104.204C418.947 104.274 419.089 104.378 419.205 104.508C419.321 104.638 419.407 104.791 419.458 104.957C419.51 105.123 419.525 105.299 419.504 105.471C419.507 105.77 419.398 106.059 419.202 106.284C419.005 106.509 418.732 106.653 418.436 106.691H406.39C406.078 106.658 405.786 106.519 405.565 106.297C405.343 106.075 405.204 105.783 405.17 105.471C405.187 105.161 405.298 104.863 405.489 104.618C405.68 104.373 405.942 104.191 406.238 104.099H418.284Z" fill="var(--cros-sys-illo-color1)" />
      <path d="M399.834 106.996C400.238 106.996 400.626 106.836 400.912 106.55C401.198 106.264 401.358 105.876 401.358 105.471C401.383 105.265 401.36 105.056 401.293 104.86C401.224 104.664 401.113 104.486 400.966 104.339C400.819 104.192 400.642 104.081 400.445 104.013C400.248 103.945 400.039 103.922 399.834 103.947C399.429 103.947 399.041 104.107 398.755 104.393C398.469 104.679 398.309 105.067 398.309 105.471C398.344 105.864 398.515 106.232 398.794 106.511C399.073 106.79 399.44 106.962 399.834 106.996Z" fill="var(--cros-sys-illo-color1)" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M351.649 132.003C353.144 132.282 354.586 132.797 355.919 133.528L356.986 134.138C357.415 135.781 357.619 137.473 357.596 139.17C357.592 144.548 355.855 149.782 352.64 154.094C349.426 158.406 344.908 161.569 339.756 163.11C338.088 162.145 336.593 160.909 335.334 159.451C340.225 158.755 344.704 156.323 347.95 152.6C351.198 148.877 352.997 144.11 353.022 139.17C353.023 136.716 352.557 134.284 351.649 132.003Z" fill="var(--cros-sys-illo-base)" />
      <path fill-rule="evenodd" clip-rule="evenodd" d="M179.041 130.479C179.65 133.555 181.274 136.338 183.652 138.383C186.027 140.428 189.022 141.618 192.154 141.763L191.087 145.575C187.319 145.205 183.766 143.647 180.943 141.125C178.12 138.603 176.172 135.248 175.381 131.546L179.041 130.479Z" fill="var(--cros-sys-illo-base)" />
      <path d="M98.8354 161.432C104.866 159.311 111.478 159.564 117.328 162.143C123.178 164.721 127.827 169.428 130.331 175.311C132.835 181.192 133.007 187.807 130.81 193.81C128.614 199.813 124.214 204.757 118.506 207.634C116.916 208.535 115.227 209.252 113.474 209.769" fill="var(--cros-sys-illo-color5)" />
      <path d="M87.0944 117.823L117.438 221.053L222.04 219.681V225.628L115.151 227C114.543 226.999 113.952 226.806 113.459 226.451C112.966 226.096 112.598 225.594 112.406 225.018L81.4526 119.5L87.0944 117.823Z" fill="var(--cros-sys-illo-color1)" />
    </svg>
  </div>
</ui-page>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Polymer({_template:getTemplate$2(),is:"setup-succeeded-page",properties:{forwardButtonTextId:{type:String,value:"done"}},behaviors:[UiPageContainerBehavior],browserProxy_:null,created(){this.browserProxy_=BrowserProxyImpl.getInstance()},openSettings_(){this.browserProxy_.openMultiDeviceSettings()},onSettingsLinkClicked_(){this.openSettings_();this.fire("setup-exited")},getMessageHtml_(){return this.i18nAdvanced("setupSucceededPageMessage",{attrs:["id"]})},ready(){const linkElement=this.$$("#settings-link");linkElement.setAttribute("href","#");linkElement.addEventListener("click",(()=>this.onSettingsLinkClicked_()))}});
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class MojoInterfaceProviderImpl{constructor(){this.remote_=null}getMojoServiceRemote(){if(!this.remote_){this.remote_=MultiDeviceSetup.getRemote()}return this.remote_}static getInstance(){return instance||(instance=new MojoInterfaceProviderImpl)}static setInstance(obj){instance=obj}}let instance=null;
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function waitForEvent(target,event){return new Promise((resolve=>void target.addEventListener(event,resolve,{once:true,passive:true})))}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function assertExists(arg,msg){if(!arg){throw new Error(`Assertion Error: ${msg}`)}}function hexToRgb(hexString){const rHex=hexString.substring(1,3);const gHex=hexString.substring(3,5);const bHex=hexString.substring(5,7);return[Number(`0x${rHex}`),Number(`0x${gHex}`),Number(`0x${bHex}`)]}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function addColorSchemeChangeListener(listener){ColorChangeUpdater.forDocument().eventTarget.addEventListener(COLOR_PROVIDER_CHANGED,listener)}function removeColorSchemeChangeListener(listener){ColorChangeUpdater.forDocument().eventTarget.removeEventListener(COLOR_PROVIDER_CHANGED,listener)}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let workerLoaderPolicy=null;function getLottieWorkerURL(){if(workerLoaderPolicy===null){workerLoaderPolicy=window.trustedTypes.createPolicy("cros-lottie-worker-script-loader",{createScriptURL:_ignore=>{const script=`import 'chrome://resources/cros_components/lottie_renderer/lottie_worker.js';`;const blob=new Blob([script],{type:"text/javascript"});return URL.createObjectURL(blob)},createHTML:()=>{throw new Error("Not Allowed.")},createScript:()=>{throw new Error("Not Allowed.")}})}return workerLoaderPolicy.createScriptURL("")}function defaultGetWorker(){return new Worker(getLottieWorkerURL(),{type:"module"})}
/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const CROS_TOKENS=new Set(["cros.sys.illo.color1","cros.sys.illo.color1.1","cros.sys.illo.color1.2","cros.sys.illo.color2","cros.sys.illo.color3","cros.sys.illo.color4","cros.sys.illo.color5","cros.sys.illo.color6","cros.sys.illo.base","cros.sys.illo.secondary","cros.sys.app_base","cros.sys.app_base_shaded","cros.sys.app_base_elevated","cros.sys.illo.card.color4","cros.sys.illo.card.on_color4","cros.sys.illo.card.color3","cros.sys.illo.card.on_color3","cros.sys.illo.card.color2","cros.sys.illo.card.on_color2","cros.sys.illo.card.color1","cros.sys.illo.card.on_color1"]);const LOTTIE_GRADIENT_FILL_TYPE="gf";var CrosLottieEvent;(function(CrosLottieEvent){CrosLottieEvent["INITIALIZED"]="cros-lottie-initialized";CrosLottieEvent["PAUSED"]="cros-lottie-paused";CrosLottieEvent["PLAYING"]="cros-lottie-playing";CrosLottieEvent["RESIZED"]="cros-lottie-resized";CrosLottieEvent["STOPPED"]="cros-lottie-stopped"})(CrosLottieEvent||(CrosLottieEvent={}));function convertHexToLottieRGBA(hexString){let r;let g;let b;let alpha;if(hexString.length===9){const hexRgb=hexString.slice(0,-2);const alphaString=hexString.slice(-2);[r,g,b]=hexToRgb(hexRgb);alpha=Number(`0x${alphaString}`)}else{[r,g,b]=hexToRgb(hexString);alpha=255}return[r/255,g/255,b/255,alpha/255]}function convertTokenToCssVariable(token){return`--${token.replaceAll(".","-")}`}function getOrCreateTokenColor(colors,tokenName){if(!colors.has(tokenName)){colors.set(tokenName,{cssVar:convertTokenToCssVariable(tokenName),shapes:[],gradients:[]})}return colors.get(tokenName)}function traverse(jsonObj,colors){if(jsonObj===null||typeof jsonObj!=="object")return;for(const value of Object.values(jsonObj)){const tokenName=jsonObj.nm||null;let tokenColor=null;let gradient=null;let shape=null;if(tokenName&&CROS_TOKENS.has(tokenName)){tokenColor=getOrCreateTokenColor(colors,tokenName);const gradientObj=jsonObj;if(gradientObj.ty===LOTTIE_GRADIENT_FILL_TYPE){gradient=gradientObj}else{shape=jsonObj}}traverse(value,colors);if(tokenColor){if(gradient)tokenColor.gradients.push(gradient);if(shape)tokenColor.shapes.push(shape)}}}class LottieRenderer extends LitElement{get onscreenCanvas(){return this.renderRoot.querySelector("#onscreen-canvas")}static{this.styles=css`
    :host {
      display: block;
    }

    canvas {
      height: 100%;
      width: 100%;
    }
  `}static{this.properties={assetUrl:{type:String,attribute:"asset-url"},autoplay:{type:Boolean,attribute:true},loop:{type:Boolean,attribute:true},dynamic:{type:Boolean,attribute:true}}}static{this.events={...CrosLottieEvent}}constructor(){super();this.getWorker=defaultGetWorker;this.onColorSchemeChanged=()=>{if(!this.dynamic)return;this.refreshAnimationColors()};this.worker=null;this.offscreenCanvas=null;this.hasTransferredCanvas=false;this.animationIsLoaded=false;this.workerNeedsSizeUpdate=false;this.workerNeedsControlUpdate=false;this.playStateInternal=false;this.resizeObserver=null;this.animationData=null;this.colors=new Map;this.assetUrl="";this.autoplay=true;this.loop=true;this.dynamic=false}connectedCallback(){super.connectedCallback();if(!this.worker){this.worker=this.getWorker();this.worker.onmessage=e=>void this.onMessage(e)}addColorSchemeChangeListener(this.onColorSchemeChanged)}firstUpdated(){assertExists(this.onscreenCanvas,"Could not find <cavas> element in lottie-renderer");this.resizeObserver=new ResizeObserver(this.onCanvasElementResized.bind(this));this.resizeObserver.observe(this.onscreenCanvas);this.offscreenCanvas=this.onscreenCanvas.transferControlToOffscreen();this.initAnimation()}disconnectedCallback(){super.disconnectedCallback();if(this.worker){this.worker.terminate();this.worker=null}if(this.resizeObserver){this.resizeObserver.disconnect()}removeColorSchemeChangeListener(this.onColorSchemeChanged)}updated(changedProperties){super.updated(changedProperties);const prop=changedProperties.get("assetUrl");if(this.assetUrl&&prop!==undefined&&this.worker){this.assetUrlChanged()}}render(){return html$1`
        <canvas id='onscreen-canvas'></canvas>
      `}async play(){return this.setPlayState(true,CrosLottieEvent.PLAYING)}async pause(){return this.setPlayState(false,CrosLottieEvent.PAUSED)}async stop(){assertExists(this.worker,"lottie-renderer has no web worker.");this.worker.postMessage({control:{stop:true}});return waitForEvent(this,CrosLottieEvent.STOPPED)}async refreshAnimationColors(){this.requestUpdate();await this.updateComplete;if(!this.animationData){console.info("Refresh animation colors failed: No animation data.");return}this.updateColorsInAnimationData();this.sendAnimationToWorker(this.animationData)}sendAnimationToWorker(animationData){if(!this.worker){console.info("lottie-renderer has no web worker.");return}const animationConfig={animationData:animationData,drawSize:this.getCanvasDrawBufferSize(),params:{loop:this.loop,autoplay:this.autoplay}};if(this.hasTransferredCanvas){this.worker.postMessage(animationConfig);return}this.worker.postMessage({...animationConfig,canvas:this.offscreenCanvas},[this.offscreenCanvas]);this.hasTransferredCanvas=true}async initAnimation(){if(!this.assetUrl){console.info("No assetUrl provided.");return}try{this.animationData=await new Promise(((resolve,reject)=>{const req=new XMLHttpRequest;req.responseType="json";req.open("GET",this.assetUrl,true);req.onload=()=>{resolve(req.response)};req.onerror=err=>{reject(err)};req.send(null)}))}catch(error){console.info(`Unable to load JSON from ${this.assetUrl}`,error)}if(!this.animationData){console.info("cros-lottie-renderer fetched null animation data");return}if(this.dynamic){this.colors.clear();traverse(this.animationData,this.colors);if(this.colors.size===0){console.warn(`Unable to find cros.sys.illo tokens in ${this.assetUrl}. Please `+`ensure this animation file has been run through the VisD token `+`resolution script.`)}}this.updateColorsInAnimationData();this.sendAnimationToWorker(this.animationData)}updateColorsInAnimationData(){const computedStyle=getComputedStyle(this);for(const color of this.colors.values()){const computedColor=computedStyle.getPropertyValue(color.cssVar).trim();const colorArray=convertHexToLottieRGBA(computedColor);for(const location of color.shapes){if(location.c){location.c.k=colorArray}else if(location.sc){location.sc=computedColor}else{console.info(`Unable to assign color to shape: ${JSON.stringify(location)}`)}}for(const location of color.gradients){const numOfPoints=location.g.p;for(let i=0;i<numOfPoints;i++){const gradientFillPoints=location.g.k.k;gradientFillPoints[4*i+1]=colorArray[0];gradientFillPoints[4*i+2]=colorArray[1];gradientFillPoints[4*i+3]=colorArray[2]}}}}async assetUrlChanged(){assertExists(this.worker,"lottie-renderer has no web worker.");if(this.animationIsLoaded){await this.stop()}await this.initAnimation()}getCanvasDrawBufferSize(){const devicePixelRatio=window.devicePixelRatio;const clientRect=this.onscreenCanvas.getBoundingClientRect();const drawSize={width:clientRect.width*devicePixelRatio,height:clientRect.height*devicePixelRatio};return drawSize}onCanvasElementResized(){if(!this.animationIsLoaded){this.workerNeedsSizeUpdate=true;return}this.sendCanvasSizeToWorker()}sendCanvasSizeToWorker(){assertExists(this.worker,"lottie-renderer has no web worker.");this.worker.postMessage({drawSize:this.getCanvasDrawBufferSize()})}setPlayState(play,expectedEvent){this.playStateInternal=play;if(!this.animationIsLoaded){this.workerNeedsControlUpdate=true}else{this.sendPlayControlToWorker()}return waitForEvent(this,expectedEvent)}sendPlayControlToWorker(){assertExists(this.worker,"lottie-renderer has no web worker.");this.worker.postMessage({control:{play:this.playStateInternal}})}onMessage(event){const message=event.data.name;switch(message){case"initialized":this.animationIsLoaded=true;this.fire(CrosLottieEvent.INITIALIZED);this.sendPendingInfo();break;case"playing":this.fire(CrosLottieEvent.PLAYING);break;case"paused":this.fire(CrosLottieEvent.PAUSED);break;case"stopped":this.fire(CrosLottieEvent.STOPPED);break;case"resized":this.fire(CrosLottieEvent.RESIZED,event.data.size);break;default:console.warn(`unknown message type received: ${message}`);break}}fire(event,detail=null){this.dispatchEvent(new CustomEvent(event,{bubbles:true,composed:true,detail:detail}))}sendPendingInfo(){if(this.workerNeedsSizeUpdate){this.workerNeedsSizeUpdate=false;this.sendCanvasSizeToWorker()}if(this.workerNeedsControlUpdate){this.workerNeedsControlUpdate=false;this.sendPlayControlToWorker()}}}customElements.define("cros-lottie-renderer",LottieRenderer);
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var WebUIListenerBehavior={properties:{webUIListeners_:{type:Array,value(){return[]}}},addWebUIListener(eventName,callback){this.webUIListeners_.push(addWebUIListener(eventName,callback))},detached(){while(this.webUIListeners_.length>0){removeWebUIListener(this.webUIListeners_.pop())}}};function getTemplate$1(){return html`<!--_html_template_start_--><style include="multidevice-setup-shared">
  #singleDeviceName {
    color: var(--cros-sys-on_surface);
    font: var(--cros-body-2-font);
    font-family: var(--cros-font-family-google-sans);
  }

  .offline-device-name {
    color: var(--cros-sys-on_surface_variant);
    font: var(--cros-body-2-font);
    font-family: var(--cros-font-family-google-sans);
  }

  #animation-container {
    padding-top: 16px;
  }

  :host-context([orientation=horizontal]) #animation-container {
    height: 172px;
    transform: translateX(-20px);
  }

  :host-context([orientation=vertical]) #animation-container {
    margin-bottom: -20px;
  }

  .footnote {
    padding-top: 16px;
  }

  #deviceSelectionContainer {
    display: flex;
    flex-direction: column;
  }

  #deviceDropdown {
    margin-top: 8px;
  }

  #singleDeviceName {
    margin-top: 8px;
  }

  .feature-detail {
    align-items: center;
    box-sizing: border-box;
    display: flex;
    min-height: 48px;
    padding: 18px 0;
    gap: 20px;
  }

  #feature-details-container-header {
    margin-bottom: 16px;
  }

  .feature-detail-text {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    max-width: 60%;
  }

  .feature-detail-text > span:first-of-type {
    font-weight: bold;
  }

  :host-context([orientation=horizontal]) #additional-content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #feature-details-container {
    color: var(--cros-sys-on_surface);
    font: var(--cros-body-1-font);
    font-family: var(--cros-font-family-google-sans);
    padding-top: 40px;
  }

  .feature-detail:not(:last-of-type) {
    border-bottom: 1px solid var(--cros-sys-separator);
  }

  .feature-detail iron-icon {
    --iron-icon-fill-color: var(--cros-sys-primary);
    --iron-icon-height: 20px;
    --iron-icon-width: 20px;
    min-width: 20px;
  }

  /* Hide the animation when not enough space in vertical mode. */
  @media screen and (max-height: 1048px) {
    :host-context([orientation=vertical][screen=oobe])
        #animation-container {
      display: none;
    }
  }

  @media screen and (max-height: 832px) {
    :host-context([orientation=vertical][screen=gaia-signin])
        #animation-container {
      display: none;
    }
  }
</style>

<ui-page header-text="[[i18nDynamic(locale, headerTextId)]]"
    icon-name="google-g">
  <span slot="message">
    <div id="animation-container">
      <cros-lottie-renderer id="multideviceSetupAnimation"
          asset-url="[[getAnimationUrl_()]]"
          autoplay="true" dynamic="true" aria-hidden="true">
      </cros-lottie-renderer>
    </div>
  </span>
  <div id="additional-content-container" slot="additional-content"
      class="flex">
    <div id="selector-and-details-container">
      <div id="deviceSelectionContainer" class="flex">
        <div id="device-selection-header">
          [[getDeviceSelectionHeader_(devices)]]
        </div>
        <div id="singleDeviceName"
            hidden$="[[!doesDeviceListHaveOneElement_(devices)]]">
          [[getFirstDeviceNameInList_(devices)]]
        </div>
        <div hidden$="[[!doesDeviceListHaveMultipleElements_(devices)]]">
          <select id="deviceDropdown"
              class="md-select"
              on-change="onDeviceDropdownSelectionChanged_"
              aria-labelledby="device-selection-header">
            <template is="dom-repeat" items="[[devices]]">
              <option
                  class$="[[getDeviceOptionClass_(item.connectivityStatus)]]"
                  value$="[[getInstanceIdOrLegacyDeviceId_(item)]]">
                [[getDeviceNameWithConnectivityStatus_(item)]]
              </option>
            </template>
          </select>
        </div>
      </div>
      <div id="feature-details-container" class="flex">
        <div id="feature-details-container-header">
          [[i18nDynamic(locale, 'startSetupPageFeatureListHeader')]]
        </div>
        <!-- Feature: Phone Hub -->
        <template is="dom-if" if="[[phoneHubEnabled_]]">
          <div class="feature-detail">
            <iron-icon icon="multidevice-setup-icons-20:phonehub">
            </iron-icon>
            <div class="feature-detail-text">
              <span>[[i18nDynamic(locale, 'startSetupPageFeaturePhoneHubTitle')]]</span>
              <span>[[i18nDynamic(locale, 'startSetupPageFeaturePhoneHubDescription')]]</span>
            </div>
          </div>
        </template>
        <!-- Feature: Smart Lock -->
        <div class="feature-detail">
          <iron-icon icon="multidevice-setup-icons-20:smart-lock">
          </iron-icon>
          <div class="feature-detail-text">
            <span>[[i18nDynamic(locale, 'startSetupPageFeatureSmartLockTitle')]]</span>
            <span>[[i18nDynamic(locale, 'startSetupPageFeatureSmartLockDescription')]]</span>
          </div>
        </div>
        <!-- Feature: Wifi Sync -->
        <template is="dom-if" if="[[wifiSyncEnabled_]]">
          <div class="feature-detail">
            <iron-icon icon="multidevice-setup-icons-20:wifi-sync">
            </iron-icon>
            <div class="feature-detail-text">
              <span>[[i18nDynamic(locale, 'startSetupPageFeatureWifiSyncTitle')]]</span>
              <span>[[i18nDynamic(locale, 'startSetupPageFeatureWifiSyncDescription')]]</span>
            </div>
          </div>
        </template>
        <!-- Feature: Instant Tethering -->
        <div class="feature-detail">
          <iron-icon icon="multidevice-setup-icons-20:instant-tethering">
          </iron-icon>
          <div class="feature-detail-text">
            <span>[[i18nDynamic(locale, 'startSetupPageFeatureInstantTetheringTitle')]]</span>
            <span>[[i18nDynamic(locale, 'startSetupPageFeatureInstantTetheringDescription')]]</span>
          </div>
        </div>
      </div>
      <div class="footnote">
        [[i18nAdvancedDynamic_(locale, 'startSetupPageFootnote')]]
      </div>
    </div>
  </div>
</ui-page>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MULTIDEVICE_ANIMATION_JELLY_URL="chrome://resources/ash/common/multidevice_setup/multidevice_setup_animation.json";Polymer({_template:getTemplate$1(),is:"start-setup-page",properties:{headerTextId:{type:String,value:"startSetupPageHeader",notify:true},forwardButtonTextId:{type:String,value:"accept"},cancelButtonTextId:{type:String,computed:"getCancelButtonTextId_(delegate)"},devices:{type:Array,value:()=>[],observer:"devicesChanged_"},selectedInstanceIdOrLegacyDeviceId:{type:String,notify:true},delegate:Object,wifiSyncEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("wifiSyncEnabled")&&loadTimeData.getBoolean("wifiSyncEnabled")}},phoneHubEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("phoneHubEnabled")&&loadTimeData.getBoolean("phoneHubEnabled")}},quickStartPhoneInstanceId_:String,mojoInterfaceProvider_:Object},behaviors:[UiPageContainerBehavior,WebUIListenerBehavior],created(){this.mojoInterfaceProvider_=MojoInterfaceProviderImpl.getInstance()},attached(){this.addWebUIListener("multidevice_setup.initializeSetupFlow",(()=>this.initializeSetupFlow_()))},setPlayAnimation(enabled){if(enabled){this.$.multideviceSetupAnimation.play()}else{this.$.multideviceSetupAnimation.pause()}},initializeSetupFlow_(){this.mojoInterfaceProvider_.getMojoServiceRemote().getQuickStartPhoneInstanceID().then((({qsPhoneInstanceId:qsPhoneInstanceId})=>{if(!qsPhoneInstanceId){return}this.quickStartPhoneInstanceId_=qsPhoneInstanceId})).catch((error=>{console.warn("Mojo service failure: "+error)}))},getCancelButtonTextId_(delegate){return this.delegate.getStartSetupCancelButtonTextId()},getDeviceSelectionHeader_(devices){switch(devices.length){case 0:return"";case 1:return this.i18n("startSetupPageSingleDeviceHeader");default:return this.i18n("startSetupPageMultipleDeviceHeader")}},doesDeviceListHaveMultipleElements_(devices){return devices.length>1},doesDeviceListHaveOneElement_(devices){return devices.length===1},getFirstDeviceNameInList_(devices){return devices[0]?this.devices[0].remoteDevice.deviceName:""},getDeviceOptionClass_(connectivityStatus){return connectivityStatus===ConnectivityStatus.kOffline?"offline-device-name":""},getDeviceNameWithConnectivityStatus_(device){return device.connectivityStatus===ConnectivityStatus.kOffline?this.i18n("startSetupPageOfflineDeviceOption",device.remoteDevice.deviceName):device.remoteDevice.deviceName},getInstanceIdOrLegacyDeviceId_(device){if(device.remoteDevice.instanceId){return device.remoteDevice.instanceId}return device.remoteDevice.deviceId},devicesChanged_(){if(this.devices.length>0){if(this.quickStartPhoneInstanceId_&&this.moveDeviceToFront_(this.quickStartPhoneInstanceId_)){this.headerTextId="startSetupPageAfterQuickStartHeader"}this.selectedInstanceIdOrLegacyDeviceId=this.getInstanceIdOrLegacyDeviceId_(this.devices[0])}},moveDeviceToFront_(device_id){const matchingDeviceIdx=this.devices.findIndex((device=>this.getInstanceIdOrLegacyDeviceId_(device)===device_id));if(matchingDeviceIdx===-1){return false}this.devices.unshift(this.devices.splice(matchingDeviceIdx,1)[0]);return true},onDeviceDropdownSelectionChanged_(){this.selectedInstanceIdOrLegacyDeviceId=this.$.deviceDropdown.value},i18nAdvancedDynamic_(locale,textId){return this.i18nAdvanced(textId)},getAnimationUrl_(){return MULTIDEVICE_ANIMATION_JELLY_URL}});
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
`,is:"iron-pages",behaviors:[IronResizableBehavior,IronSelectableBehavior],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(selected,old){this.async(this.notifyResize)}});function getTemplate(){return html`<!--_html_template_start_--><style include="multidevice-setup-shared">
  :host {
    display: block;
    height: 100%;
    overflow: scroll;
    width: 100%;
  }

  #container {
    background-color: var(--cros-sys-app_base);
    box-sizing: border-box;
    color: var(--cros-sys-on_surface_variant);
    display: flex;
    flex-direction: column;
    font-family: var(--cros-font-family-google-sans);
    font-size: 13px;
    height: 100%;
    line-height: 16px;
    margin: auto;
  }

  iron-pages {
    height: 100%;
    overflow: var(--iron-pages-overflow, visible);
  }

  button-bar {
    padding: 24px;
  }

  @media screen and (orientation: portrait) {
    :host-context([screen=oobe]) button-bar,
    :host-context([screen=gaia-signin]) button-bar {
      align-items: center;
    }
  }
</style>
<div id="container">
  <iron-pages id="ironPages"
      attr-for-selected="is"
      selected="[[visiblePageName]]"
      selected-item="{{visiblePage_}}">
    <template is="dom-if" if="[[shouldPasswordPageBeIncluded_(delegate)]]"
        restamp>
      <password-page class="ui-page"
          auth-token="{{authToken_}}"
          forward-button-disabled="{{passwordPageForwardButtonDisabled_}}"
          password-field-valid="{{passwordFieldValid}}"
          on-user-submitted-password="onUserSubmittedPassword_">
      </password-page>
    </template>
    <template is="dom-if"
        if="[[shouldSetupSucceededPageBeIncluded_(delegate)]]" restamp>
      <setup-succeeded-page class="ui-page"></setup-succeeded-page>
    </template>
    <start-setup-page class="ui-page"
        devices="[[devices_]]"
        selected-instance-id-or-legacy-device-id="{{selectedInstanceIdOrLegacyDeviceId_}}"
        delegate="[[delegate]]">
    </start-setup-page>
  </iron-pages>
  <div class="flex"></div>
  <button-bar forward-button-text-id="[[forwardButtonTextId]]"
      backward-button-text-id="[[backwardButtonTextId]]"
      cancel-button-text-id="[[cancelButtonTextId]]"
      should-show-shadow="[[isScrolledToBottom_]]"
      forward-button-disabled="[[forwardButtonDisabled]]">
  </button-bar>
</div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PageName={PASSWORD:"password-page",SUCCESS:"setup-succeeded-page",START:"start-setup-page"};Polymer({_template:getTemplate(),is:"multidevice-setup",behaviors:[WebUIListenerBehavior],properties:{delegate:Object,forwardButtonTextId:{type:String,computed:"getForwardButtonTextId_(visiblePage_)",notify:true},forwardButtonDisabled:{type:Boolean,computed:"shouldForwardButtonBeDisabled_("+"passwordPageForwardButtonDisabled_, visiblePageName)",notify:true},cancelButtonTextId:{type:String,computed:"getCancelButtonTextId_(visiblePage_)",notify:true},backwardButtonTextId:{type:String,computed:"getBackwardButtonTextId_(visiblePage_)",notify:true},visiblePageName:{type:String,value:PageName.START,notify:true},visiblePage_:Object,authToken_:{type:String},devices_:Array,selectedInstanceIdOrLegacyDeviceId_:String,passwordPageForwardButtonDisabled_:Boolean,mojoInterfaceProvider_:Object,isScrolledToBottom_:{type:Boolean,value:false}},listeners:{scroll:"onWindowContentUpdate_","backward-navigation-requested":"onBackwardNavigationRequested_","cancel-requested":"onCancelRequested_","forward-navigation-requested":"onForwardNavigationRequested_"},created(){this.mojoInterfaceProvider_=MojoInterfaceProviderImpl.getInstance()},ready(){this.addWebUIListener("multidevice_setup.initializeSetupFlow",this.initializeSetupFlow.bind(this))},attached(){window.addEventListener("orientationchange",this.onWindowContentUpdate_.bind(this));window.addEventListener("resize",this.onWindowContentUpdate_.bind(this))},detached(){window.removeEventListener("orientationchange",this.onWindowContentUpdate_.bind(this));window.removeEventListener("resize",this.onWindowContentUpdate_.bind(this))},updateLocalizedContent(){this.$.ironPages.querySelectorAll(".ui-page").forEach((page=>page.i18nUpdateLocale()))},initializeSetupFlow(){this.$$("start-setup-page").setPlayAnimation(true);this.mojoInterfaceProvider_.getMojoServiceRemote().getEligibleActiveHostDevices().then((responseParams=>{if(responseParams.eligibleHostDevices.length===0){console.warn("Potential host list is empty.");return}this.devices_=responseParams.eligibleHostDevices;this.fire("forward-button-focus-requested")})).catch((error=>{console.warn("Mojo service failure: "+error)}))},onCancelRequested_(){this.exitSetupFlow_(false)},onWindowContentUpdate_(){const visibleHeight=this.scrollHeight-this.scrollTop;this.isScrolledToBottom_=Math.abs(this.clientHeight-visibleHeight)<1},onBackwardNavigationRequested_(){assert(this.visiblePageName===PageName.PASSWORD);this.$$("password-page").clearPasswordTextInput();this.visiblePageName=PageName.START;this.fire("forward-button-focus-requested")},onForwardNavigationRequested_(){if(this.forwardButtonDisabled){return}this.visiblePage_.getCanNavigateToNextPage().then((canNavigate=>{if(!canNavigate){return}this.navigateForward_()}))},navigateForward_(){switch(this.visiblePageName){case PageName.PASSWORD:this.$$("password-page").clearPasswordTextInput();this.setHostDevice_();return;case PageName.SUCCESS:this.exitSetupFlow_(true);return;case PageName.START:if(this.delegate.isPasswordRequiredToSetHost()){this.visiblePageName=PageName.PASSWORD;this.$$("password-page").focusPasswordTextInput()}else{this.setHostDevice_()}return}},setHostDevice_(){assert(this.delegate.isPasswordRequiredToSetHost()===!!this.authToken_);const instanceIdOrLegacyDeviceId=this.selectedInstanceIdOrLegacyDeviceId_;this.delegate.setHostDevice(instanceIdOrLegacyDeviceId,this.authToken_).then((responseParams=>{if(!responseParams.success){console.warn("Failure setting host with ID: "+instanceIdOrLegacyDeviceId);return}if(this.delegate.shouldExitSetupFlowAfterSettingHost()){this.exitSetupFlow_(true);return}this.visiblePageName=PageName.SUCCESS;this.fire("forward-button-focus-requested")})).catch((error=>{console.warn("Mojo service failure: "+error)}))},onUserSubmittedPassword_(){this.onForwardNavigationRequested_()},getForwardButtonTextId_(){if(!this.visiblePage_){return undefined}return this.visiblePage_.forwardButtonTextId},shouldForwardButtonBeDisabled_(){return this.visiblePageName===PageName.PASSWORD&&this.passwordPageForwardButtonDisabled_},getCancelButtonTextId_(){if(!this.visiblePage_){return undefined}return this.visiblePage_.cancelButtonTextId},getBackwardButtonTextId_(){if(!this.visiblePage_){return undefined}return this.visiblePage_.backwardButtonTextId},shouldPasswordPageBeIncluded_(){return this.delegate.isPasswordRequiredToSetHost()},shouldSetupSucceededPageBeIncluded_(){return!this.delegate.shouldExitSetupFlowAfterSettingHost()},exitSetupFlow_(didUserCompleteSetup){this.$$("start-setup-page").setPlayAnimation(false);this.fire("setup-exited",{didUserCompleteSetup:didUserCompleteSetup})}});
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PostOobeDelegate{isPasswordRequiredToSetHost(){return true}setHostDevice(hostInstanceIdOrLegacyDeviceId,opt_authToken){assert(!!opt_authToken);return MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote().setHostDevice(hostInstanceIdOrLegacyDeviceId,opt_authToken)}shouldExitSetupFlowAfterSettingHost(){return false}getStartSetupCancelButtonTextId(){return"cancel"}}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PageNameValue={UNKNOWN:0,START:1,PASSWORD:2,SUCCESS:3,MAX_VALUE:4};Polymer({is:"multidevice-setup-post-oobe",_template:html`<!--_html_template_start_-->
<style include="multidevice-setup-shared cros-color-overrides">
  :host {
    width: 100%;
  }

  multidevice-setup {
    --multidevice-setup-width: 768px;
    --iron-pages-overflow: visible;
  }

  #backward-button,
  #cancel-button,
  #forward-button {
    align-items: center;
    display: flex;
    justify-content: center;
    text-transform: none;
  }
</style>
<multidevice-setup delegate="[[delegate_]]"
    on-setup-exited="onExitRequested_"
    on-forward-button-focus-requested="onForwardButtonFocusRequested_"
    on-visible-page-name-changed="onVisiblePageNameChanged_"
    forward-button-text-id="{{forwardButtonTextId_}}"
    forward-button-disabled="{{forwardButtonDisabled_}}"
    cancel-button-text-id="{{cancelButtonTextId_}}"
    backward-button-text-id="{{backwardButtonTextId_}}">
  <cr-button id="backward-button"
      slot="backward-button" class="cancel-button">
    [[getButtonText_(backwardButtonTextId_)]]
  </cr-button>
  <cr-button id="cancel-button"
      slot="cancel-button" class="cancel-button">
    [[getButtonText_(cancelButtonTextId_)]]
  </cr-button>
  <cr-button id="forward-button"
      slot="forward-button" class="action-button"
      disabled$="[[forwardButtonDisabled_]]">
    [[getButtonText_(forwardButtonTextId_)]]
  </cr-button>
</multidevice-setup>
<!--_html_template_end_-->`,properties:{delegate_:Object,forwardButtonTextId_:{type:String},forwardButtonDisabled_:{type:Boolean,value:false},cancelButtonTextId_:{type:String},backwardButtonTextId_:{type:String}},behaviors:[I18nBehavior],ready(){this.onWindowSizeUpdated_();document.body.classList.add("jelly-enabled");(function(){ColorChangeUpdater.forDocument().start()})()},attached(){this.delegate_=new PostOobeDelegate;this.$$("multidevice-setup").initializeSetupFlow();window.addEventListener("orientationchange",this.onWindowSizeUpdated_);window.addEventListener("resize",this.onWindowSizeUpdated_)},detached(){window.removeEventListener("orientationchange",this.onWindowSizeUpdated_);window.removeEventListener("resize",this.onWindowSizeUpdated_)},onExitRequested_(){chrome.send("dialogClose")},onForwardButtonFocusRequested_(){this.$$("#forward-button").focus()},onVisiblePageNameChanged_(event){let pageNameValue;switch(event.detail.value){case PageName.START:pageNameValue=PageNameValue.START;break;case PageName.PASSWORD:pageNameValue=PageNameValue.PASSWORD;break;case PageName.SUCCESS:pageNameValue=PageNameValue.SUCCESS;break;default:console.warn("Unexpected PageName.");pageNameValue=PageNameValue.UNKNOWN;break}chrome.send("metricsHandler:recordInHistogram",["MultiDevice.PostOOBESetupFlow.PageShown",pageNameValue,PageNameValue.MAX_VALUE])},onWindowSizeUpdated_(){document.documentElement.style.setProperty("--oobe-oobe-dialog-height-base",window.innerHeight+"px");document.documentElement.style.setProperty("--oobe-oobe-dialog-width-base",window.innerWidth+"px");if(window.innerWidth>window.innerHeight){document.documentElement.setAttribute("orientation","horizontal")}else{document.documentElement.setAttribute("orientation","vertical")}},getButtonText_(text){if(!text){return""}return this.i18n(text)}});
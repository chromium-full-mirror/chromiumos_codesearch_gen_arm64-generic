import { html, Polymer, dom, mixinBehaviors, PolymerElement, Base, dedupingMixin, useShadow, Debouncer, timeOut, templatize, gestures, Templatizer, OptionalMutableDataBehavior, animationFrame, microTask, idlePeriod, flush, enqueueDebouncer, matches as matches$1, translate, calculateSplices, beforeNextRender } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { sendWithPromise, addWebUiListener, removeWebUiListener } from 'chrome://resources/js/cr.js';
import './strings.m.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { pdfCreateOutOfProcessPlugin } from 'chrome://print/pdf/pdf_scripting_api.js';

const styleMod$b = document.createElement('dom-module');
styleMod$b.appendChild(html `
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);
styleMod$b.register('cr-hidden-style');

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const template$6 = html`
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
`;
template$6.setAttribute('style', 'display: none;');
document.head.appendChild(template$6.content);

const template$5 = html `
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
`;
document.head.appendChild(template$5.content);

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The class name to set on the document element.
 */
const CLASS_NAME = 'focus-outline-visible';
const docsToManager = new Map();
/**
 * This class sets a CSS class name on the HTML element of |doc| when the user
 * presses a key. It removes the class name when the user clicks anywhere.
 *
 * This allows you to write CSS like this:
 *
 * html.focus-outline-visible my-element:focus {
 *   outline: 5px auto -webkit-focus-ring-color;
 * }
 *
 * And the outline will only be shown if the user uses the keyboard to get to
 * it.
 *
 */
class FocusOutlineManager {
    // Whether focus change is triggered by a keyboard event.
    focusByKeyboard_ = true;
    classList_;
    /**
     * @param doc The document to attach the focus outline manager to.
     */
    constructor(doc) {
        this.classList_ = doc.documentElement.classList;
        doc.addEventListener('keydown', (e) => this.onEvent_(true, e), true);
        doc.addEventListener('mousedown', (e) => this.onEvent_(false, e), true);
        this.updateVisibility();
    }
    onEvent_(focusByKeyboard, e) {
        if (this.focusByKeyboard_ === focusByKeyboard) {
            return;
        }
        if (e instanceof KeyboardEvent && e.repeat) {
            // A repeated keydown should not trigger the focus state. For example,
            // there is a repeated ALT keydown if ALT+CLICK is used to open the
            // context menu and ALT is not released.
            return;
        }
        this.focusByKeyboard_ = focusByKeyboard;
        this.updateVisibility();
    }
    updateVisibility() {
        this.visible = this.focusByKeyboard_;
    }
    /**
     * Whether the focus outline should be visible.
     */
    set visible(visible) {
        this.classList_.toggle(CLASS_NAME, visible);
    }
    get visible() {
        return this.classList_.contains(CLASS_NAME);
    }
    /**
     * Gets a per document singleton focus outline manager.
     * @param doc The document to get the |FocusOutlineManager| for.
     * @return The per document singleton focus outline manager.
     */
    static forDocument(doc) {
        let manager = docsToManager.get(doc);
        if (!manager) {
            manager = new FocusOutlineManager(doc);
            docsToManager.set(doc, manager);
        }
        return manager;
    }
}

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * Chrome uses an older version of DOM Level 3 Keyboard Events
 *
 * Most keys are labeled as text, but some are Unicode codepoints.
 * Values taken from:
 * http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/keyset.html#KeySet-Set
 */
var KEY_IDENTIFIER = {
  'U+0008': 'backspace',
  'U+0009': 'tab',
  'U+001B': 'esc',
  'U+0020': 'space',
  'U+007F': 'del'
};

/**
 * Special table for KeyboardEvent.keyCode.
 * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
 * than that.
 *
 * Values from:
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
 */
var KEY_CODE = {
  8: 'backspace',
  9: 'tab',
  13: 'enter',
  27: 'esc',
  33: 'pageup',
  34: 'pagedown',
  35: 'end',
  36: 'home',
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down',
  46: 'del',
  106: '*'
};

/**
 * MODIFIER_KEYS maps the short name for modifier keys used in a key
 * combo string to the property name that references those same keys
 * in a KeyboardEvent instance.
 */
var MODIFIER_KEYS = {
  'shift': 'shiftKey',
  'ctrl': 'ctrlKey',
  'alt': 'altKey',
  'meta': 'metaKey'
};

/**
 * KeyboardEvent.key is mostly represented by printable character made by
 * the keyboard, with unprintable keys labeled nicely.
 *
 * However, on OS X, Alt+char can make a Unicode character that follows an
 * Apple-specific mapping. In this case, we fall back to .keyCode.
 */
var KEY_CHAR = /[a-z0-9*]/;

/**
 * Matches a keyIdentifier string.
 */
var IDENT_CHAR = /U\+/;

/**
 * Matches arrow keys in Gecko 27.0+
 */
var ARROW_KEY = /^arrow/;

/**
 * Matches space keys everywhere (notably including IE10's exceptional name
 * `spacebar`).
 */
var SPACE_KEY = /^space(bar)?/;

/**
 * Matches ESC key.
 *
 * Value from: http://w3c.github.io/uievents-key/#key-Escape
 */
var ESC_KEY = /^escape$/;

/**
 * Transforms the key.
 * @param {string} key The KeyBoardEvent.key
 * @param {Boolean} [noSpecialChars] Limits the transformation to
 * alpha-numeric characters.
 */
function transformKey(key, noSpecialChars) {
  var validKey = '';
  if (key) {
    var lKey = key.toLowerCase();
    if (lKey === ' ' || SPACE_KEY.test(lKey)) {
      validKey = 'space';
    } else if (ESC_KEY.test(lKey)) {
      validKey = 'esc';
    } else if (lKey.length == 1) {
      if (!noSpecialChars || KEY_CHAR.test(lKey)) {
        validKey = lKey;
      }
    } else if (ARROW_KEY.test(lKey)) {
      validKey = lKey.replace('arrow', '');
    } else if (lKey == 'multiply') {
      // numpad '*' can map to Multiply on IE/Windows
      validKey = '*';
    } else {
      validKey = lKey;
    }
  }
  return validKey;
}

function transformKeyIdentifier(keyIdent) {
  var validKey = '';
  if (keyIdent) {
    if (keyIdent in KEY_IDENTIFIER) {
      validKey = KEY_IDENTIFIER[keyIdent];
    } else if (IDENT_CHAR.test(keyIdent)) {
      keyIdent = parseInt(keyIdent.replace('U+', '0x'), 16);
      validKey = String.fromCharCode(keyIdent).toLowerCase();
    } else {
      validKey = keyIdent.toLowerCase();
    }
  }
  return validKey;
}

function transformKeyCode(keyCode) {
  var validKey = '';
  if (Number(keyCode)) {
    if (keyCode >= 65 && keyCode <= 90) {
      // ascii a-z
      // lowercase is 32 offset from uppercase
      validKey = String.fromCharCode(32 + keyCode);
    } else if (keyCode >= 112 && keyCode <= 123) {
      // function keys f1-f12
      validKey = 'f' + (keyCode - 112 + 1);
    } else if (keyCode >= 48 && keyCode <= 57) {
      // top 0-9 keys
      validKey = String(keyCode - 48);
    } else if (keyCode >= 96 && keyCode <= 105) {
      // num pad 0-9
      validKey = String(keyCode - 96);
    } else {
      validKey = KEY_CODE[keyCode];
    }
  }
  return validKey;
}

/**
 * Calculates the normalized key for a KeyboardEvent.
 * @param {KeyboardEvent} keyEvent
 * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
 * transformation to alpha-numeric chars. This is useful with key
 * combinations like shift + 2, which on FF for MacOS produces
 * keyEvent.key = @
 * To get 2 returned, set noSpecialChars = true
 * To get @ returned, set noSpecialChars = false
 */
function normalizedKeyForEvent(keyEvent, noSpecialChars) {
  // Fall back from .key, to .detail.key for artifical keyboard events,
  // and then to deprecated .keyIdentifier and .keyCode.
  if (keyEvent.key) {
    return transformKey(keyEvent.key, noSpecialChars);
  }
  if (keyEvent.detail && keyEvent.detail.key) {
    return transformKey(keyEvent.detail.key, noSpecialChars);
  }
  return transformKeyIdentifier(keyEvent.keyIdentifier) ||
      transformKeyCode(keyEvent.keyCode) || '';
}

function keyComboMatchesEvent(keyCombo, event) {
  // For combos with modifiers we support only alpha-numeric keys
  var keyEvent = normalizedKeyForEvent(event, keyCombo.hasModifiers);
  return keyEvent === keyCombo.key &&
      (!keyCombo.hasModifiers ||
       (!!event.shiftKey === !!keyCombo.shiftKey &&
        !!event.ctrlKey === !!keyCombo.ctrlKey &&
        !!event.altKey === !!keyCombo.altKey &&
        !!event.metaKey === !!keyCombo.metaKey));
}

function parseKeyComboString(keyComboString) {
  if (keyComboString.length === 1) {
    return {combo: keyComboString, key: keyComboString, event: 'keydown'};
  }
  return keyComboString.split('+')
      .reduce(function(parsedKeyCombo, keyComboPart) {
        var eventParts = keyComboPart.split(':');
        var keyName = eventParts[0];
        var event = eventParts[1];

        if (keyName in MODIFIER_KEYS) {
          parsedKeyCombo[MODIFIER_KEYS[keyName]] = true;
          parsedKeyCombo.hasModifiers = true;
        } else {
          parsedKeyCombo.key = keyName;
          parsedKeyCombo.event = event || 'keydown';
        }

        return parsedKeyCombo;
      }, {combo: keyComboString.split(':').shift()});
}

function parseEventString(eventString) {
  return eventString.trim().split(' ').map(function(keyComboString) {
    return parseKeyComboString(keyComboString);
  });
}

/**
 * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
 * keyboard commands that pertain to [WAI-ARIA best
 * practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding). The
 * element takes care of browser differences with respect to Keyboard events and
 * uses an expressive syntax to filter key presses.
 *
 * Use the `keyBindings` prototype property to express what combination of keys
 * will trigger the callback. A key binding has the format
 * `"KEY+MODIFIER:EVENT": "callback"` (`"KEY": "callback"` or
 * `"KEY:EVENT": "callback"` are valid as well). Some examples:
 *
 *      keyBindings: {
 *        'space': '_onKeydown', // same as 'space:keydown'
 *        'shift+tab': '_onKeydown',
 *        'enter:keypress': '_onKeypress',
 *        'esc:keyup': '_onKeyup'
 *      }
 *
 * The callback will receive with an event containing the following information
 * in `event.detail`:
 *
 *      _onKeydown: function(event) {
 *        console.log(event.detail.combo); // KEY+MODIFIER, e.g. "shift+tab"
 *        console.log(event.detail.key); // KEY only, e.g. "tab"
 *        console.log(event.detail.event); // EVENT, e.g. "keydown"
 *        console.log(event.detail.keyboardEvent); // the original KeyboardEvent
 *      }
 *
 * Use the `keyEventTarget` attribute to set up event handlers on a specific
 * node.
 *
 * See the [demo source
 * code](https://github.com/PolymerElements/iron-a11y-keys-behavior/blob/master/demo/x-key-aware.html)
 * for an example.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */
const IronA11yKeysBehavior = {
  properties: {
    /**
     * The EventTarget that will be firing relevant KeyboardEvents. Set it to
     * `null` to disable the listeners.
     * @type {?EventTarget}
     */
    keyEventTarget: {
      type: Object,
      value: function() {
        return this;
      }
    },

    /**
     * If true, this property will cause the implementing element to
     * automatically stop propagation on any handled KeyboardEvents.
     */
    stopKeyboardEventPropagation: {type: Boolean, value: false},

    _boundKeyHandlers: {
      type: Array,
      value: function() {
        return [];
      }
    },

    // We use this due to a limitation in IE10 where instances will have
    // own properties of everything on the "prototype".
    _imperativeKeyBindings: {
      type: Object,
      value: function() {
        return {};
      }
    }
  },

  observers: ['_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)'],


  /**
   * To be used to express what combination of keys  will trigger the relative
   * callback. e.g. `keyBindings: { 'esc': '_onEscPressed'}`
   * @type {!Object}
   */
  keyBindings: {},

  registered: function() {
    this._prepKeyBindings();
  },

  attached: function() {
    this._listenKeyEventListeners();
  },

  detached: function() {
    this._unlistenKeyEventListeners();
  },

  /**
   * Can be used to imperatively add a key binding to the implementing
   * element. This is the imperative equivalent of declaring a keybinding
   * in the `keyBindings` prototype property.
   *
   * @param {string} eventString
   * @param {string} handlerName
   */
  addOwnKeyBinding: function(eventString, handlerName) {
    this._imperativeKeyBindings[eventString] = handlerName;
    this._prepKeyBindings();
    this._resetKeyEventListeners();
  },

  /**
   * When called, will remove all imperatively-added key bindings.
   */
  removeOwnKeyBindings: function() {
    this._imperativeKeyBindings = {};
    this._prepKeyBindings();
    this._resetKeyEventListeners();
  },

  /**
   * Returns true if a keyboard event matches `eventString`.
   *
   * @param {KeyboardEvent} event
   * @param {string} eventString
   * @return {boolean}
   */
  keyboardEventMatchesKeys: function(event, eventString) {
    var keyCombos = parseEventString(eventString);
    for (var i = 0; i < keyCombos.length; ++i) {
      if (keyComboMatchesEvent(keyCombos[i], event)) {
        return true;
      }
    }
    return false;
  },

  _collectKeyBindings: function() {
    var keyBindings = this.behaviors.map(function(behavior) {
      return behavior.keyBindings;
    });

    if (keyBindings.indexOf(this.keyBindings) === -1) {
      keyBindings.push(this.keyBindings);
    }

    return keyBindings;
  },

  _prepKeyBindings: function() {
    this._keyBindings = {};

    this._collectKeyBindings().forEach(function(keyBindings) {
      for (var eventString in keyBindings) {
        this._addKeyBinding(eventString, keyBindings[eventString]);
      }
    }, this);

    for (var eventString in this._imperativeKeyBindings) {
      this._addKeyBinding(
          eventString, this._imperativeKeyBindings[eventString]);
    }

    // Give precedence to combos with modifiers to be checked first.
    for (var eventName in this._keyBindings) {
      this._keyBindings[eventName].sort(function(kb1, kb2) {
        var b1 = kb1[0].hasModifiers;
        var b2 = kb2[0].hasModifiers;
        return (b1 === b2) ? 0 : b1 ? -1 : 1;
      });
    }
  },

  _addKeyBinding: function(eventString, handlerName) {
    parseEventString(eventString).forEach(function(keyCombo) {
      this._keyBindings[keyCombo.event] =
          this._keyBindings[keyCombo.event] || [];

      this._keyBindings[keyCombo.event].push([keyCombo, handlerName]);
    }, this);
  },

  _resetKeyEventListeners: function() {
    this._unlistenKeyEventListeners();

    if (this.isAttached) {
      this._listenKeyEventListeners();
    }
  },

  _listenKeyEventListeners: function() {
    if (!this.keyEventTarget) {
      return;
    }
    Object.keys(this._keyBindings).forEach(function(eventName) {
      var keyBindings = this._keyBindings[eventName];
      var boundKeyHandler = this._onKeyBindingEvent.bind(this, keyBindings);

      this._boundKeyHandlers.push(
          [this.keyEventTarget, eventName, boundKeyHandler]);

      this.keyEventTarget.addEventListener(eventName, boundKeyHandler);
    }, this);
  },

  _unlistenKeyEventListeners: function() {
    var keyHandlerTuple;
    var keyEventTarget;
    var eventName;
    var boundKeyHandler;

    while (this._boundKeyHandlers.length) {
      // My kingdom for block-scope binding and destructuring assignment..
      keyHandlerTuple = this._boundKeyHandlers.pop();
      keyEventTarget = keyHandlerTuple[0];
      eventName = keyHandlerTuple[1];
      boundKeyHandler = keyHandlerTuple[2];

      keyEventTarget.removeEventListener(eventName, boundKeyHandler);
    }
  },

  _onKeyBindingEvent: function(keyBindings, event) {
    if (this.stopKeyboardEventPropagation) {
      event.stopPropagation();
    }

    // if event has been already prevented, don't do anything
    if (event.defaultPrevented) {
      return;
    }

    for (var i = 0; i < keyBindings.length; i++) {
      var keyCombo = keyBindings[i][0];
      var handlerName = keyBindings[i][1];
      if (keyComboMatchesEvent(keyCombo, event)) {
        this._triggerKeyHandler(keyCombo, handlerName, event);
        // exit the loop if eventDefault was prevented
        if (event.defaultPrevented) {
          return;
        }
      }
    }
  },

  _triggerKeyHandler: function(keyCombo, handlerName, keyboardEvent) {
    var detail = Object.create(keyCombo);
    detail.keyboardEvent = keyboardEvent;
    var event =
        new CustomEvent(keyCombo.event, {detail: detail, cancelable: true});
    this[handlerName].call(this, event);
    if (event.defaultPrevented) {
      keyboardEvent.preventDefault();
    }
  }
};

var MAX_RADIUS_PX = 300;
var MIN_DURATION_MS = 800;

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number} The distance between (x1, y1) and (x2, y2).
 */
var distance = function(x1, y1, x2, y2) {
  var xDelta = x1 - x2;
  var yDelta = y1 - y2;
  return Math.sqrt(xDelta * xDelta + yDelta * yDelta);
};

Polymer({
  _template: html`
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
`,

  is: 'paper-ripple',
  behaviors: [IronA11yKeysBehavior],

  properties: {
    center: {type: Boolean, value: false},
    holdDown: {type: Boolean, value: false, observer: '_holdDownChanged'},
    recenters: {type: Boolean, value: false},
    noink: {type: Boolean, value: false},
  },

  keyBindings: {
    'enter:keydown': '_onEnterKeydown',
    'space:keydown': '_onSpaceKeydown',
    'space:keyup': '_onSpaceKeyup',
  },

  /** @override */
  created: function() {
    /** @type {Array<!Element>} */
    this.ripples = [];
  },

  /** @override */
  attached: function() {
    this.keyEventTarget = this.parentNode.nodeType == 11 ?
        dom(this).getOwnerRoot().host : this.parentNode;
    this.keyEventTarget = /** @type {!EventTarget} */ (this.keyEventTarget);
    this.listen(this.keyEventTarget, 'up', 'uiUpAction');
    this.listen(this.keyEventTarget, 'down', 'uiDownAction');
  },

  /** @override */
  detached: function() {
    this.unlisten(this.keyEventTarget, 'up', 'uiUpAction');
    this.unlisten(this.keyEventTarget, 'down', 'uiDownAction');
    this.keyEventTarget = null;
  },

  simulatedRipple: function() {
    this.downAction();
    // Using a 1ms delay ensures a macro-task.
    this.async(function() { this.upAction(); }.bind(this), 1);
  },

  /** @param {Event=} e */
  uiDownAction: function(e) {
    if (!this.noink)
      this.downAction(e);
  },

  /** @param {Event=} e */
  downAction: function(e) {
    if (this.ripples.length && this.holdDown)
      return;
    // TODO(dbeam): some things (i.e. paper-icon-button-light) dynamically
    // create ripples on 'up', Ripples register an event listener on their
    // parent (or shadow DOM host) when attached().  This sometimes causes
    // duplicate events to fire on us.
    this.debounce('show ripple', function() { this.__showRipple(e); }, 1);
  },

  clear: function() {
    this.__hideRipple();
    this.holdDown = false;
  },

  showAndHoldDown: function() {
    this.ripples.forEach(ripple => {
      ripple.remove();
    });
    this.ripples = [];
    this.holdDown = true;
  },

  /**
   * @param {Event=} e
   * @private
   * @suppress {checkTypes}
   */
  __showRipple: function(e) {
    var rect = this.getBoundingClientRect();

    var roundedCenterX = function() { return Math.round(rect.width / 2); };
    var roundedCenterY = function() { return Math.round(rect.height / 2); };

    var centered = !e || this.center;
    if (centered) {
      var x = roundedCenterX();
      var y = roundedCenterY();
    } else {
      var sourceEvent = e.detail.sourceEvent;
      var x = Math.round(sourceEvent.clientX - rect.left);
      var y = Math.round(sourceEvent.clientY - rect.top);
    }

    var corners = [
      {x: 0, y: 0},
      {x: rect.width, y: 0},
      {x: 0, y: rect.height},
      {x: rect.width, y: rect.height},
    ];

    var cornerDistances = corners.map(function(corner) {
      return Math.round(distance(x, y, corner.x, corner.y));
    });

    var radius = Math.min(MAX_RADIUS_PX, Math.max.apply(Math, cornerDistances));

    var startTranslate = (x - radius) + 'px, ' + (y - radius) + 'px';
    if (this.recenters && !centered) {
      var endTranslate = (roundedCenterX() - radius) + 'px, ' +
                         (roundedCenterY() - radius) + 'px';
    } else {
      var endTranslate = startTranslate;
    }

    var ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.height = ripple.style.width = (2 * radius) + 'px';

    this.ripples.push(ripple);
    this.shadowRoot.appendChild(ripple);

    ripple.animate({
      // TODO(dbeam): scale to 90% of radius at .75 offset?
      transform: ['translate(' + startTranslate + ') scale(0)',
                  'translate(' + endTranslate + ') scale(1)'],
    }, {
      duration: Math.max(MIN_DURATION_MS, Math.log(radius) * radius) || 0,
      easing: 'cubic-bezier(.2, .9, .1, .9)',
      fill: 'forwards',
    });
  },

  /** @param {Event=} e */
  uiUpAction: function(e) {
    if (!this.noink)
      this.upAction();
  },

  /** @param {Event=} e */
  upAction: function(e) {
    if (!this.holdDown)
      this.debounce('hide ripple', function() { this.__hideRipple(); }, 1);
  },

  /**
   * @private
   * @suppress {checkTypes}
   */
  __hideRipple: function() {
    Promise.all(this.ripples.map(function(ripple) {
      return new Promise(function(resolve) {
        var removeRipple = function() {
          ripple.remove();
          resolve();
        };
        var opacity = getComputedStyle(ripple).opacity;
        if (!opacity.length) {
          removeRipple();
        } else {
          var animation = ripple.animate({
            opacity: [opacity, 0],
          }, {
            duration: 150,
            fill: 'forwards',
          });
          animation.addEventListener('finish', removeRipple);
          animation.addEventListener('cancel', removeRipple);
        }
      });
    })).then(function() { this.fire('transitionend'); }.bind(this));
    this.ripples = [];
  },

  /** @protected */
  _onEnterKeydown: function() {
    this.uiDownAction();
    this.async(this.uiUpAction, 1);
  },

  /** @protected */
  _onSpaceKeydown: function() {
    this.uiDownAction();
  },

  /** @protected */
  _onSpaceKeyup: function() {
    this.uiUpAction();
  },

  /** @protected */
  _holdDownChanged: function(newHoldDown, oldHoldDown) {
    if (oldHoldDown === undefined)
      return;
    if (newHoldDown)
      this.downAction();
    else
      this.upAction();
  },
});

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * @demo demo/index.html
 * @polymerBehavior
 */
const IronControlState = {

  properties: {

    /**
     * If true, the element currently has focus.
     */
    focused: {
      type: Boolean,
      value: false,
      notify: true,
      readOnly: true,
      reflectToAttribute: true
    },

    /**
     * If true, the user cannot interact with this element.
     */
    disabled: {
      type: Boolean,
      value: false,
      notify: true,
      observer: '_disabledChanged',
      reflectToAttribute: true
    },

    /**
     * Value of the `tabindex` attribute before `disabled` was activated.
     * `null` means the attribute was not present.
     * @type {?string|undefined}
     */
    _oldTabIndex: {type: String},

    _boundFocusBlurHandler: {
      type: Function,
      value: function() {
        return this._focusBlurHandler.bind(this);
      }
    }
  },

  observers: ['_changedControlState(focused, disabled)'],

  /**
   * @return {void}
   */
  ready: function() {
    this.addEventListener('focus', this._boundFocusBlurHandler, true);
    this.addEventListener('blur', this._boundFocusBlurHandler, true);
  },

  _focusBlurHandler: function(event) {
    // Polymer takes care of retargeting events.
    this._setFocused(event.type === 'focus');
    return;
  },

  _disabledChanged: function(disabled, old) {
    this.setAttribute('aria-disabled', disabled ? 'true' : 'false');
    this.style.pointerEvents = disabled ? 'none' : '';
    if (disabled) {
      // Read the `tabindex` attribute instead of the `tabIndex` property.
      // The property returns `-1` if there is no `tabindex` attribute.
      // This distinction is important when restoring the value because
      // leaving `-1` hides shadow root children from the tab order.
      this._oldTabIndex = this.getAttribute('tabindex');
      this._setFocused(false);
      this.tabIndex = -1;
      this.blur();
    } else if (this._oldTabIndex !== undefined) {
      if (this._oldTabIndex === null) {
        this.removeAttribute('tabindex');
      } else {
        this.setAttribute('tabindex', this._oldTabIndex);
      }
    }
  },

  _changedControlState: function() {
    // _controlStateChanged is abstract, follow-on behaviors may implement it
    if (this._controlStateChanged) {
      this._controlStateChanged();
    }
  }

};

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * @demo demo/index.html
 * @polymerBehavior IronButtonState
 */
const IronButtonStateImpl = {

  properties: {

    /**
     * If true, the user is currently holding down the button.
     */
    pressed: {
      type: Boolean,
      readOnly: true,
      value: false,
      reflectToAttribute: true,
      observer: '_pressedChanged'
    },

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: {type: Boolean, value: false, reflectToAttribute: true},

    /**
     * If true, the button is a toggle and is currently in the active state.
     */
    active:
        {type: Boolean, value: false, notify: true, reflectToAttribute: true},

    /**
     * True if the element is currently being pressed by a "pointer," which
     * is loosely defined as mouse or touch input (but specifically excluding
     * keyboard input).
     */
    pointerDown: {type: Boolean, readOnly: true, value: false},

    /**
     * True if the input device that caused the element to receive focus
     * was a keyboard.
     */
    receivedFocusFromKeyboard: {type: Boolean, readOnly: true},

    /**
     * The aria attribute to be set if the button is a toggle and in the
     * active state.
     */
    ariaActiveAttribute: {
      type: String,
      value: 'aria-pressed',
      observer: '_ariaActiveAttributeChanged'
    }
  },

  listeners: {down: '_downHandler', up: '_upHandler', tap: '_tapHandler'},

  observers:
      ['_focusChanged(focused)', '_activeChanged(active, ariaActiveAttribute)'],

  /**
   * @type {!Object}
   */
  keyBindings: {
    'enter:keydown': '_asyncClick',
    'space:keydown': '_spaceKeyDownHandler',
    'space:keyup': '_spaceKeyUpHandler',
  },

  _mouseEventRe: /^mouse/,

  _tapHandler: function() {
    if (this.toggles) {
      // a tap is needed to toggle the active state
      this._userActivate(!this.active);
    } else {
      this.active = false;
    }
  },

  _focusChanged: function(focused) {
    this._detectKeyboardFocus(focused);

    if (!focused) {
      this._setPressed(false);
    }
  },

  _detectKeyboardFocus: function(focused) {
    this._setReceivedFocusFromKeyboard(!this.pointerDown && focused);
  },

  // to emulate native checkbox, (de-)activations from a user interaction fire
  // 'change' events
  _userActivate: function(active) {
    if (this.active !== active) {
      this.active = active;
      this.fire('change');
    }
  },

  _downHandler: function(event) {
    this._setPointerDown(true);
    this._setPressed(true);
    this._setReceivedFocusFromKeyboard(false);
  },

  _upHandler: function() {
    this._setPointerDown(false);
    this._setPressed(false);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyDownHandler: function(event) {
    var keyboardEvent = event.detail.keyboardEvent;
    var target = dom(keyboardEvent).localTarget;

    // Ignore the event if this is coming from a focused light child, since that
    // element will deal with it.
    if (this.isLightDescendant(/** @type {Node} */ (target)))
      return;

    keyboardEvent.preventDefault();
    keyboardEvent.stopImmediatePropagation();
    this._setPressed(true);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyUpHandler: function(event) {
    var keyboardEvent = event.detail.keyboardEvent;
    var target = dom(keyboardEvent).localTarget;

    // Ignore the event if this is coming from a focused light child, since that
    // element will deal with it.
    if (this.isLightDescendant(/** @type {Node} */ (target)))
      return;

    if (this.pressed) {
      this._asyncClick();
    }
    this._setPressed(false);
  },

  // trigger click asynchronously, the asynchrony is useful to allow one
  // event handler to unwind before triggering another event
  _asyncClick: function() {
    this.async(function() {
      this.click();
    }, 1);
  },

  // any of these changes are considered a change to button state

  _pressedChanged: function(pressed) {
    this._changedButtonState();
  },

  _ariaActiveAttributeChanged: function(value, oldValue) {
    if (oldValue && oldValue != value && this.hasAttribute(oldValue)) {
      this.removeAttribute(oldValue);
    }
  },

  _activeChanged: function(active, ariaActiveAttribute) {
    if (this.toggles) {
      this.setAttribute(this.ariaActiveAttribute, active ? 'true' : 'false');
    } else {
      this.removeAttribute(this.ariaActiveAttribute);
    }
    this._changedButtonState();
  },

  _controlStateChanged: function() {
    if (this.disabled) {
      this._setPressed(false);
    } else {
      this._changedButtonState();
    }
  },

  // provide hook for follow-on behaviors to react to button-state

  _changedButtonState: function() {
    if (this._buttonStateChanged) {
      this._buttonStateChanged();  // abstract
    }
  }

};

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * `PaperRippleBehavior` dynamically implements a ripple when the element has
 * focus via pointer or keyboard.
 *
 * NOTE: This behavior is intended to be used in conjunction with and after
 * `IronButtonState` and `IronControlState`.
 *
 * @polymerBehavior PaperRippleBehavior
 */
const PaperRippleBehavior = {
  properties: {
    /**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */
    noink: {type: Boolean, observer: '_noinkChanged'},

    /**
     * @type {Element|undefined}
     */
    _rippleContainer: {
      type: Object,
    }
  },

  /**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */
  _buttonStateChanged: function() {
    if (this.focused) {
      this.ensureRipple();
    }
  },

  /**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */
  _downHandler: function(event) {
    IronButtonStateImpl._downHandler.call(this, event);
    if (this.pressed) {
      this.ensureRipple(event);
    }
  },

  /**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   * @param {!Event=} optTriggeringEvent (optional) event that triggered the
   * ripple.
   */
  ensureRipple: function(optTriggeringEvent) {
    if (!this.hasRipple()) {
      this._ripple = this._createRipple();
      this._ripple.noink = this.noink;
      var rippleContainer = this._rippleContainer || this.root;
      if (rippleContainer) {
        dom(rippleContainer).appendChild(this._ripple);
      }
      if (optTriggeringEvent) {
        // Check if the event happened inside of the ripple container
        // Fall back to host instead of the root because distributed text
        // nodes are not valid event targets
        var domContainer = dom(this._rippleContainer || this);
        var target = dom(optTriggeringEvent).rootTarget;
        if (domContainer.deepContains(/** @type {Node} */ (target))) {
          this._ripple.uiDownAction(optTriggeringEvent);
        }
      }
    }
  },

  /**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */
  getRipple: function() {
    this.ensureRipple();
    return this._ripple;
  },

  /**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */
  hasRipple: function() {
    return Boolean(this._ripple);
  },

  /**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */
  _createRipple: function() {
    var element = /** @type {!PaperRippleElement} */ (
        document.createElement('paper-ripple'));
    return element;
  },

  _noinkChanged: function(noink) {
    if (this.hasRipple()) {
      this._ripple.noink = noink;
    }
  }
};

function getTemplate$G() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style">:host{--active-shadow-rgb:var(--google-grey-800-rgb);--active-shadow-action-rgb:var(--google-blue-500-rgb);--bg-action:var(--google-blue-600);--border-color:var(--google-grey-300);--disabled-bg-action:var(--google-grey-100);--disabled-bg:white;--disabled-border-color:var(--google-grey-100);--disabled-text-color:var(--google-grey-600);--focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--hover-bg-action:rgba(var(--google-blue-600-rgb), .9);--hover-bg-color:rgba(var(--google-blue-500-rgb), .04);--hover-border-color:var(--google-blue-100);--hover-shadow-action-rgb:var(--google-blue-500-rgb);--ink-color-action:white;--ink-color:var(--google-blue-600);--ripple-opacity-action:.32;--ripple-opacity:.1;--text-color-action:white;--text-color:var(--google-blue-600)}@media (prefers-color-scheme:dark){:host{--active-bg:black linear-gradient(rgba(255, 255, 255, .06),
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
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-button' is a button which displays slotted elements. It can
 * be interacted with like a normal button using click as well as space and
 * enter to effectively click the button and fire a 'click' event. It can also
 * style an icon inside of the button with the [has-icon] attribute.
 */
const CrButtonElementBase = mixinBehaviors([PaperRippleBehavior], PolymerElement);
class CrButtonElement extends CrButtonElementBase {
    static get is() {
        return 'cr-button';
    }
    static get template() {
        return getTemplate$G();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'disabledChanged_',
            },
            /**
             * Use this property in order to configure the "tabindex" attribute.
             */
            customTabIndex: {
                type: Number,
                observer: 'applyTabIndex_',
            },
            /**
             * Flag used for formatting ripples on circle shaped cr-buttons.
             * @private
             */
            circleRipple: {
                type: Boolean,
                value: false,
            },
            hasPrefixIcon_: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            hasSuffixIcon_: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
        };
    }
    constructor() {
        super();
        /**
         * It is possible to activate a tab when the space key is pressed down. When
         * this element has focus, the keyup event for the space key should not
         * perform a 'click'. |spaceKeyDown_| tracks when a space pressed and
         * handled by this element. Space keyup will only result in a 'click' when
         * |spaceKeyDown_| is true. |spaceKeyDown_| is set to false when element
         * loses focus.
         */
        this.spaceKeyDown_ = false;
        this.timeoutIds_ = new Set();
        this.addEventListener('blur', this.onBlur_.bind(this));
        // Must be added in constructor so that stopImmediatePropagation() works as
        // expected.
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('keyup', this.onKeyUp_.bind(this));
        this.addEventListener('pointerdown', this.onPointerDown_.bind(this));
    }
    ready() {
        super.ready();
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'button');
        }
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
        if (!this.hasAttribute('aria-disabled')) {
            this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        }
        FocusOutlineManager.forDocument(document);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.timeoutIds_.forEach(clearTimeout);
        this.timeoutIds_.clear();
    }
    setTimeout_(fn, delay) {
        if (!this.isConnected) {
            return;
        }
        const id = setTimeout(() => {
            this.timeoutIds_.delete(id);
            fn();
        }, delay);
        this.timeoutIds_.add(id);
    }
    disabledChanged_(newValue, oldValue) {
        if (!newValue && oldValue === undefined) {
            return;
        }
        if (this.disabled) {
            this.blur();
        }
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        this.applyTabIndex_();
    }
    /**
     * Updates the tabindex HTML attribute to the actual value.
     */
    applyTabIndex_() {
        let value = this.customTabIndex;
        if (value === undefined) {
            value = this.disabled ? -1 : 0;
        }
        this.setAttribute('tabindex', value.toString());
    }
    onBlur_() {
        this.spaceKeyDown_ = false;
        // If a keyup event is never fired (e.g. after keydown the focus is moved to
        // another element), we need to clear the ripple here. 100ms delay was
        // chosen manually as a good time period for the ripple to be visible.
        this.setTimeout_(() => this.getRipple().uiUpAction(), 100);
    }
    onClick_(e) {
        if (this.disabled) {
            e.stopImmediatePropagation();
        }
    }
    onPrefixIconSlotChanged_() {
        this.hasPrefixIcon_ = this.$.prefixIcon.assignedElements().length > 0;
    }
    onSuffixIconSlotChanged_() {
        this.hasSuffixIcon_ = this.$.suffixIcon.assignedElements().length > 0;
    }
    onKeyDown_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.repeat) {
            return;
        }
        this.getRipple().uiDownAction();
        if (e.key === 'Enter') {
            this.click();
            // Delay was chosen manually as a good time period for the ripple to be
            // visible.
            this.setTimeout_(() => this.getRipple().uiUpAction(), 100);
        }
        else if (e.key === ' ') {
            this.spaceKeyDown_ = true;
        }
    }
    onKeyUp_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (this.spaceKeyDown_ && e.key === ' ') {
            this.spaceKeyDown_ = false;
            this.click();
            this.getRipple().uiUpAction();
        }
    }
    onPointerDown_() {
        this.ensureRipple();
    }
    /**
     * Customize the element's ripple. Overriding the '_createRipple' function
     * from PaperRippleBehavior.
     */
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _createRipple() {
        const ripple = super._createRipple();
        if (this.circleRipple) {
            ripple.setAttribute('center', '');
            ripple.classList.add('circle');
        }
        return ripple;
    }
}
customElements.define(CrButtonElement.is, CrButtonElement);

function getTemplate$F() {
    return html `<!--_html_template_start_-->    <style>:host{-webkit-tap-highlight-color:transparent;align-items:center;cursor:pointer;display:flex;outline:0;user-select:none;--cr-checkbox-border-size:2px;--cr-checkbox-size:16px;--cr-checkbox-ripple-size:40px;--cr-checkbox-ripple-offset:calc(var(--cr-checkbox-size)/2 -
            var(--cr-checkbox-ripple-size)/2 - var(--cr-checkbox-border-size));--cr-checkbox-checked-box-color:var(--cr-checked-color);--cr-checkbox-ripple-checked-color:var(--cr-checked-color);--cr-checkbox-checked-ripple-opacity:.2;--cr-checkbox-mark-color:white;--cr-checkbox-ripple-unchecked-color:var(--google-grey-900);--cr-checkbox-unchecked-box-color:var(--google-grey-700);--cr-checkbox-unchecked-ripple-opacity:.15}@media (prefers-color-scheme:dark){:host{--cr-checkbox-checked-ripple-opacity:.4;--cr-checkbox-mark-color:var(--google-grey-900);--cr-checkbox-ripple-unchecked-color:var(--google-grey-500);--cr-checkbox-unchecked-box-color:var(--google-grey-500);--cr-checkbox-unchecked-ripple-opacity:.4}}:host-context([chrome-refresh-2023]):host{--cr-checkbox-ripple-size:32px;--cr-checkbox-mark-color:var(--color-checkbox-check,
            var(--cr-fallback-color-on-primary));--cr-checkbox-checked-box-color:var(--color-checkbox-foreground-checked,
            var(--cr-fallback-color-primary));--cr-checkbox-unchecked-box-color:var(--color-checkbox-foreground-unchecked,
            var(--cr-fallback-color-outline));--cr-checkbox-ripple-checked-color:var(--cr-active-background-color);--cr-checkbox-ripple-unchecked-color:var(--cr-active-background-color);--cr-checkbox-ripple-offset:50%;--cr-checkbox-ripple-opacity:1}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){opacity:1;--cr-checkbox-checked-box-color:var(
            --color-checkbox-container-disabled,
            var(--cr-fallback-color-disabled-background));--cr-checkbox-unchecked-box-color:var(
            --color-checkbox-outline-disabled,
            var(--cr-fallback-color-disabled-background));--cr-checkbox-mark-color:var(--color-checkbox-check-disabled,
            var(--cr-fallback-color-disabled-foreground))}#checkbox{background:0 0;border:var(--cr-checkbox-border-size) solid var(--cr-checkbox-unchecked-box-color);border-radius:2px;box-sizing:border-box;cursor:pointer;display:block;flex-shrink:0;height:var(--cr-checkbox-size);isolation:isolate;margin:0;outline:0;padding:0;position:relative;transform:none;width:var(--cr-checkbox-size)}:host-context([chrome-refresh-2023]):host([disabled][checked]) #checkbox{border-color:transparent}:host-context([chrome-refresh-2023]) #hover-layer{display:none}:host-context([chrome-refresh-2023]) #checkbox:hover #hover-layer{background-color:var(--cr-hover-background-color);border-radius:50%;display:block;height:32px;left:50%;overflow:hidden;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:32px}@media (forced-colors:active){:host(:focus) #checkbox{outline:var(--cr-focus-outline-hcm)}}:host-context([chrome-refresh-2023]) #checkbox:focus-visible{outline:var(--cr-checkbox-focus-outline,2px solid var(--cr-focus-outline-color));outline-offset:2px}#checkmark{display:block;forced-color-adjust:auto;position:relative;transform:scale(0);z-index:1}#checkmark path{fill:var(--cr-checkbox-mark-color)}:host([checked]) #checkmark{transform:scale(1);transition:transform 140ms ease-out}:host([checked]) #checkbox{background:var(--cr-checkbox-checked-box-background-color,var(--cr-checkbox-checked-box-color));border-color:var(--cr-checkbox-checked-box-color)}paper-ripple{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,
            var(--cr-checkbox-unchecked-ripple-opacity));color:var(--cr-checkbox-ripple-unchecked-color);height:var(--cr-checkbox-ripple-size);left:var(--cr-checkbox-ripple-offset);outline:var(--cr-checkbox-ripple-ring,none);pointer-events:none;top:var(--cr-checkbox-ripple-offset);transition:color linear 80ms;width:var(--cr-checkbox-ripple-size)}:host([checked]) paper-ripple{--paper-ripple-opacity:var(--cr-checkbox-ripple-opacity,
            var(--cr-checkbox-checked-ripple-opacity));color:var(--cr-checkbox-ripple-checked-color)}:host-context([dir=rtl]) paper-ripple{left:auto;right:var(--cr-checkbox-ripple-offset)}:host-context([chrome-refresh-2023]) paper-ripple{transform:translate(-50%,-50%)}:host-context([dir=rtl][chrome-refresh-2023]) paper-ripple{transform:translate(50%,-50%)}#label-container{color:var(--cr-checkbox-label-color,var(--cr-primary-text-color));padding-inline-start:var(--cr-checkbox-label-padding-start,20px);white-space:normal}:host(.label-first) #label-container{order:-1;padding-inline-end:var(--cr-checkbox-label-padding-end,20px);padding-inline-start:0}:host(.no-label) #label-container{display:none}#ariaDescription{height:0;overflow:hidden;width:0}</style>
    <div id="checkbox" tabindex$="[[tabIndex]]" role="checkbox" on-keydown="onKeyDown_" on-keyup="onKeyUp_" aria-disabled="false" aria-checked="false" aria-labelledby="label-container" aria-describedby="ariaDescription">
      
      <svg id="checkmark" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="m10.192 2.121-6.01 6.01-2.121-2.12L1 7.07l2.121 2.121.707.707.354.354 7.071-7.071-1.06-1.06Z">
      </path></svg>
      <div id="hover-layer"></div>
    </div>
    <div id="label-container" aria-hidden="true" aria-label$="[[ariaLabelOverride]]" part="label-container">
      <slot></slot>
    </div>
    <div id="ariaDescription" aria-hidden="true">[[ariaDescription]]</div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-checkbox' is a component similar to native checkbox. It
 * fires a 'change' event *only* when its state changes as a result of a user
 * interaction. By default it assumes there will be child(ren) passed in to be
 * used as labels. If no label will be provided, a .no-label class should be
 * added to hide the spacing between the checkbox and the label container.
 *
 * If a label is provided, it will be shown by default after the checkbox. A
 * .label-first CSS class can be added to show the label before the checkbox.
 *
 * List of customizable styles:
 *  --cr-checkbox-border-size
 *  --cr-checkbox-checked-box-background-color
 *  --cr-checkbox-checked-box-color
 *  --cr-checkbox-label-color
 *  --cr-checkbox-label-padding-start
 *  --cr-checkbox-mark-color
 *  --cr-checkbox-ripple-checked-color
 *  --cr-checkbox-ripple-size
 *  --cr-checkbox-ripple-unchecked-color
 *  --cr-checkbox-size
 *  --cr-checkbox-unchecked-box-color
 */
const CrCheckboxElementBase = mixinBehaviors([PaperRippleBehavior], PolymerElement);
class CrCheckboxElement extends CrCheckboxElementBase {
    static get is() {
        return 'cr-checkbox';
    }
    static get template() {
        return getTemplate$F();
    }
    static get properties() {
        return {
            checked: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'checkedChanged_',
                notify: true,
            },
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'disabledChanged_',
            },
            ariaDescription: String,
            ariaLabelOverride: String,
            tabIndex: {
                type: Number,
                value: 0,
                observer: 'onTabIndexChanged_',
            },
        };
    }
    ready() {
        super.ready();
        // 
        // TODO(b/309689294) Remove this once CrOS UIs migrate to Jellybean
        // components and no longer use cr-elements.
        // Force stamp the ripple element to enable CrOS focus styles. Ripple
        // visibility is controlled by the event listeners below.
        if (document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.getRipple();
        }
        // 
        this.removeAttribute('unresolved');
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('pointerup', this.hideRipple_.bind(this));
        if (document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.addEventListener('pointerdown', this.showRipple_.bind(this));
            this.addEventListener('pointerleave', this.hideRipple_.bind(this));
        }
        else {
            this.addEventListener('blur', this.hideRipple_.bind(this));
            this.addEventListener('focus', this.showRipple_.bind(this));
        }
    }
    focus() {
        this.$.checkbox.focus();
    }
    getFocusableElement() {
        return this.$.checkbox;
    }
    checkedChanged_() {
        this.$.checkbox.setAttribute('aria-checked', this.checked ? 'true' : 'false');
    }
    disabledChanged_(_current, previous) {
        if (previous === undefined && !this.disabled) {
            return;
        }
        this.tabIndex = this.disabled ? -1 : 0;
        this.$.checkbox.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
    }
    showRipple_() {
        if (this.noink) {
            return;
        }
        this.getRipple().showAndHoldDown();
    }
    hideRipple_() {
        this.getRipple().clear();
    }
    onClick_(e) {
        if (this.disabled || e.target.tagName === 'A') {
            return;
        }
        // Prevent |click| event from bubbling. It can cause parents of this
        // elements to erroneously re-toggle this control.
        e.stopPropagation();
        e.preventDefault();
        this.checked = !this.checked;
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail: this.checked }));
    }
    onKeyDown_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.repeat) {
            return;
        }
        if (e.key === 'Enter') {
            this.click();
        }
    }
    onKeyUp_(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
        }
        if (e.key === ' ') {
            this.click();
        }
    }
    onTabIndexChanged_() {
        // :host shouldn't have a tabindex because it's set on #checkbox.
        this.removeAttribute('tabindex');
    }
    // Overridden from PaperRippleBehavior
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _createRipple() {
        this._rippleContainer = this.$.checkbox;
        const ripple = super._createRipple();
        ripple.id = 'ink';
        ripple.setAttribute('recenters', '');
        ripple.classList.add('circle', 'toggle-ink');
        return ripple;
    }
}
customElements.define(CrCheckboxElement.is, CrCheckboxElement);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

class IronMeta {
  /**
   * @param {{
   *   type: (string|null|undefined),
   *   key: (string|null|undefined),
   *   value: *,
   * }=} options
   */
  constructor(options) {
    IronMeta[' '](options);

    /** @type {string} */
    this.type = (options && options.type) || 'default';
    /** @type {string|null|undefined} */
    this.key = options && options.key;
    if (options && 'value' in options) {
      /** @type {*} */
      this.value = options.value;
    }
  }

  /** @return {*} */
  get value() {
    var type = this.type;
    var key = this.key;

    if (type && key) {
      return IronMeta.types[type] && IronMeta.types[type][key];
    }
  }

  /** @param {*} value */
  set value(value) {
    var type = this.type;
    var key = this.key;

    if (type && key) {
      type = IronMeta.types[type] = IronMeta.types[type] || {};
      if (value == null) {
        delete type[key];
      } else {
        type[key] = value;
      }
    }
  }

  /** @return {!Array<*>} */
  get list() {
    var type = this.type;

    if (type) {
      var items = IronMeta.types[this.type];
      if (!items) {
        return [];
      }

      return Object.keys(items).map(function(key) {
        return metaDatas[this.type][key];
      }, this);
    }
  }

  /**
   * @param {string} key
   * @return {*}
   */
  byKey(key) {
    this.key = key;
    return this.value;
  }
}
// This function is used to convince Closure not to remove constructor calls
// for instances that are not held anywhere. For example, when
// `new IronMeta({...})` is used only for the side effect of adding a value.
IronMeta[' '] = function() {};

IronMeta.types = {};

var metaDatas = IronMeta.types;

/**
`iron-meta` is a generic element you can use for sharing information across the
DOM tree. It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern)
such that any instance of iron-meta has access to the shared information. You
can use `iron-meta` to share whatever you want (or create an extension [like
x-meta] for enhancements).

The `iron-meta` instances containing your actual data can be loaded in an
import, or constructed in any way you see fit. The only requirement is that you
create them before you try to access them.

Examples:

If I create an instance like this:

    <iron-meta key="info" value="foo/bar"></iron-meta>

Note that value="foo/bar" is the metadata I've defined. I could define more
attributes or use child nodes to define additional metadata.

Now I can access that element (and it's metadata) from any iron-meta instance
via the byKey method, e.g.

    meta.byKey('info');

Pure imperative form would be like:

    document.createElement('iron-meta').byKey('info');

Or, in a Polymer element, you can include a meta in your template:

    <iron-meta id="meta"></iron-meta>
    ...
    this.$.meta.byKey('info');

@group Iron Elements
@demo demo/index.html
@element iron-meta
*/
Polymer({

  is: 'iron-meta',

  properties: {

    /**
     * The type of meta-data.  All meta-data of the same type is stored
     * together.
     * @type {string}
     */
    type: {
      type: String,
      value: 'default',
    },

    /**
     * The key used to store `value` under the `type` namespace.
     * @type {?string}
     */
    key: {
      type: String,
    },

    /**
     * The meta-data to store or retrieve.
     * @type {*}
     */
    value: {
      type: String,
      notify: true,
    },

    /**
     * If true, `value` is set to the iron-meta instance itself.
     */
    self: {type: Boolean, observer: '_selfChanged'},

    __meta: {type: Boolean, computed: '__computeMeta(type, key, value)'}
  },

  hostAttributes: {hidden: true},

  __computeMeta: function(type, key, value) {
    var meta = new IronMeta({type: type, key: key});

    if (value !== undefined && value !== meta.value) {
      meta.value = value;
    } else if (this.value !== meta.value) {
      this.value = meta.value;
    }

    return meta;
  },

  get list() {
    return this.__meta && this.__meta.list;
  },

  _selfChanged: function(self) {
    if (self) {
      this.value = this;
    }
  },

  /**
   * Retrieves meta data value by key.
   *
   * @method byKey
   * @param {string} key The key of the meta-data to be returned.
   * @return {*}
   */
  byKey: function(key) {
    return new IronMeta({type: this.type, key: key}).value;
  }
});

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**

The `iron-icon` element displays an icon. By default an icon renders as a 24px
square.

Example using src:

    <iron-icon src="star.png"></iron-icon>

Example setting size to 32px x 32px:

    <iron-icon class="big" src="big_star.png"></iron-icon>

    <style is="custom-style">
      .big {
        --iron-icon-height: 32px;
        --iron-icon-width: 32px;
      }
    </style>

The iron elements include several sets of icons. To use the default set of
icons, import `iron-icons.js` and use the `icon` attribute to specify an icon:

    <script type="module">
      import "../iron-icons/iron-icons.js";
    </script>

    <iron-icon icon="menu"></iron-icon>

To use a different built-in set of icons, import the specific
`iron-icons/<iconset>-icons.js`, and specify the icon as `<iconset>:<icon>`.
For example, to use a communication icon, you would use:

    <script type="module">
      import "../iron-icons/communication-icons.js";
    </script>

    <iron-icon icon="communication:email"></iron-icon>

You can also create custom icon sets of bitmap or SVG icons.

Example of using an icon named `cherry` from a custom iconset with the ID
`fruit`:

    <iron-icon icon="fruit:cherry"></iron-icon>

See `<iron-iconset>` and `<iron-iconset-svg>` for more information about how to
create a custom iconset.

See the `iron-icons` demo to see the icons available in the various iconsets.

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-icon` | Mixin applied to the icon | {}
`--iron-icon-width` | Width of the icon | `24px`
`--iron-icon-height` | Height of the icon | `24px`
`--iron-icon-fill-color` | Fill color of the svg icon | `currentcolor`
`--iron-icon-stroke-color` | Stroke color of the svg icon | none

@group Iron Elements
@element iron-icon
@demo demo/index.html
@hero hero.svg
@homepage polymer.github.io
*/
Polymer({
  _template: html`
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
`,

  is: 'iron-icon',

  properties: {

    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: {type: String},

    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: {type: String},

    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: {type: String},

    /**
     * @type {!IronMeta}
     */
    _meta: {value: Base.create('iron-meta', {type: 'iconset'})}

  },

  observers: [
    '_updateIcon(_meta, isAttached)',
    '_updateIcon(theme, isAttached)',
    '_srcChanged(src, isAttached)',
    '_iconChanged(icon, isAttached)'
  ],

  _DEFAULT_ICONSET: 'icons',

  _iconChanged: function(icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;
    this._updateIcon();
  },

  _srcChanged: function(src) {
    this._updateIcon();
  },

  _usesIconset: function() {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function() {
    if (this._usesIconset()) {
      if (this._img && this._img.parentNode) {
        dom(this.root).removeChild(this._img);
      }
      if (this._iconName === '') {
        if (this._iconset) {
          this._iconset.removeIcon(this);
        }
      } else if (this._iconsetName && this._meta) {
        this._iconset = /** @type {?Polymer.Iconset} */ (
            this._meta.byKey(this._iconsetName));
        if (this._iconset) {
          this._iconset.applyIcon(this, this._iconName, this.theme);
          this.unlisten(window, 'iron-iconset-added', '_updateIcon');
        } else {
          this.listen(window, 'iron-iconset-added', '_updateIcon');
        }
      }
    } else {
      if (this._iconset) {
        this._iconset.removeIcon(this);
      }
      if (!this._img) {
        this._img = document.createElement('img');
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.draggable = false;
      }
      this._img.src = this.src;
      dom(this.root).appendChild(this._img);
    }
  }
});

function getTemplate$E() {
    return html `<!--_html_template_start_-->    <style>:host{--cr-icon-button-fill-color:var(--google-grey-700);--cr-icon-button-icon-start-offset:0;--cr-icon-button-icon-size:20px;--cr-icon-button-size:36px;--cr-icon-button-height:var(--cr-icon-button-size);--cr-icon-button-transition:150ms ease-in-out;--cr-icon-button-width:var(--cr-icon-button-size);-webkit-tap-highlight-color:transparent;border-radius:50%;color:var(--cr-icon-button-stroke-color,var(--cr-icon-button-fill-color));cursor:pointer;display:inline-flex;flex-shrink:0;height:var(--cr-icon-button-height);margin-inline-end:var(--cr-icon-button-margin-end,var(--cr-icon-ripple-margin));margin-inline-start:var(--cr-icon-button-margin-start);outline:0;overflow:hidden;user-select:none;vertical-align:middle;width:var(--cr-icon-button-width)}:host-context([chrome-refresh-2023]):host{--cr-icon-button-fill-color:currentColor;--cr-icon-button-size:32px;position:relative}:host(:hover){background-color:var(--cr-icon-button-hover-background-color,var(--cr-hover-background-color))}:host(:focus-visible:focus){box-shadow:inset 0 0 0 2px var(--cr-icon-button-focus-outline-color,var(--cr-focus-outline-color))}@media (forced-colors:active){:host(:focus-visible:focus){outline:var(--cr-focus-outline-hcm)}}:host-context(html:not([chrome-refresh-2023])) :host(:active){background-color:var(--cr-icon-button-active-background-color,var(--cr-active-background-color))}paper-ripple{display:none}:host-context([chrome-refresh-2023]) paper-ripple{--paper-ripple-opacity:1;color:var(--cr-active-background-color);display:block}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host(.no-overlap){--cr-icon-button-margin-end:0;--cr-icon-button-margin-start:0}:host-context([dir=rtl]):host(:not([dir=ltr]):not([multiple-icons_])){transform:scaleX(-1)}:host-context([dir=rtl]):host(:not([dir=ltr])[multiple-icons_]) iron-icon{transform:scaleX(-1)}:host(:not([iron-icon])) #maskedImage{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-button-icon-size);-webkit-transform:var(--cr-icon-image-transform,none);background-color:var(--cr-icon-button-fill-color);height:100%;transition:background-color var(--cr-icon-button-transition);width:100%}@media (forced-colors:active){:host(:not([iron-icon])) #maskedImage{background-color:ButtonText}}#icon{align-items:center;border-radius:4px;display:flex;height:100%;justify-content:center;padding-inline-start:var(--cr-icon-button-icon-start-offset);position:relative;width:100%}iron-icon{--iron-icon-fill-color:var(--cr-icon-button-fill-color);--iron-icon-stroke-color:var(--cr-icon-button-stroke-color, none);--iron-icon-height:var(--cr-icon-button-icon-size);--iron-icon-width:var(--cr-icon-button-icon-size);transition:fill var(--cr-icon-button-transition),stroke var(--cr-icon-button-transition)}@media (prefers-color-scheme:dark){:host{--cr-icon-button-fill-color:var(--google-grey-500)}}</style>
    <div id="icon">
      <div id="maskedImage"></div>
    </div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-icon-button' is a button which displays an icon with a
 * ripple. It can be interacted with like a normal button using click as well as
 * space and enter to effectively click the button and fire a 'click' event.
 *
 * There are two sources to icons, cr-icons and iron-iconset-svg. The cr-icon's
 * are defined as background images with a reference to a resource file
 * associated with a CSS class name. The iron-icon's are defined as inline SVG's
 * under a key that is stored in a global map that is accessible to the
 * iron-icon element.
 *
 * Example of using a cr-icon:
 * <link rel="import" href="chrome://resources/cr_elements/cr_icons.css.html">
 * <dom-module id="module">
 *   <template>
 *     <style includes="cr-icons"></style>
 *     <cr-icon-button class="icon-class-name"></cr-icon-button>
 *   </template>
 * </dom-module>
 *
 * In general when an icon is specified using a class, the expectation is the
 * class will set an image to the --cr-icon-image variable.
 *
 * Example of using an iron-icon:
 * In the TS file:
 * import 'chrome://resources/cr_elements/icons.html.js';
 *
 * In the HTML template file:
 * <cr-icon-button iron-icon="cr:icon-key"></cr-icon-button>
 *
 * The color of the icon can be overridden using CSS variables. When using
 * iron-icon both the fill and stroke can be overridden the variables:
 * --cr-icon-button-fill-color
 * --cr-icon-button-stroke-color
 *
 * When not using iron-icon (ie. specifying --cr-icon-image), the icons support
 * one color and the 'stroke' variables are ignored.
 *
 * When using iron-icon's, more than one icon can be specified by setting
 * the |ironIcon| property to a comma-delimited list of keys.
 */
const CrIconbuttonElementBase = mixinBehaviors([PaperRippleBehavior], PolymerElement);
class CrIconButtonElement extends CrIconbuttonElementBase {
    static get is() {
        return 'cr-icon-button';
    }
    static get template() {
        return getTemplate$E();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'disabledChanged_',
            },
            /**
             * Use this property in order to configure the "tabindex" attribute.
             */
            customTabIndex: {
                type: Number,
                observer: 'applyTabIndex_',
            },
            ironIcon: {
                type: String,
                observer: 'onIronIconChanged_',
                reflectToAttribute: true,
            },
            multipleIcons_: {
                type: Boolean,
                reflectToAttribute: true,
            },
        };
    }
    constructor() {
        super();
        /**
         * It is possible to activate a tab when the space key is pressed down. When
         * this element has focus, the keyup event for the space key should not
         * perform a 'click'. |spaceKeyDown_| tracks when a space pressed and
         * handled by this element. Space keyup will only result in a 'click' when
         * |spaceKeyDown_| is true. |spaceKeyDown_| is set to false when element
         * loses focus.
         */
        this.spaceKeyDown_ = false;
        this.addEventListener('blur', this.onBlur_.bind(this));
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('keyup', this.onKeyUp_.bind(this));
        if (document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.addEventListener('pointerdown', this.onPointerDown_.bind(this));
        }
    }
    ready() {
        super.ready();
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'button');
        }
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
    }
    toggleClass(className) {
        this.classList.toggle(className);
    }
    disabledChanged_(newValue, oldValue) {
        if (!newValue && oldValue === undefined) {
            return;
        }
        if (this.disabled) {
            this.blur();
        }
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        this.applyTabIndex_();
    }
    /**
     * Updates the tabindex HTML attribute to the actual value.
     */
    applyTabIndex_() {
        let value = this.customTabIndex;
        if (value === undefined) {
            value = this.disabled ? -1 : 0;
        }
        this.setAttribute('tabindex', value.toString());
    }
    onBlur_() {
        this.spaceKeyDown_ = false;
    }
    onClick_(e) {
        if (this.disabled) {
            e.stopImmediatePropagation();
        }
    }
    onIronIconChanged_() {
        this.shadowRoot.querySelectorAll('iron-icon').forEach(el => el.remove());
        if (!this.ironIcon) {
            return;
        }
        const icons = (this.ironIcon || '').split(',');
        this.multipleIcons_ = icons.length > 1;
        icons.forEach(icon => {
            const ironIcon = document.createElement('iron-icon');
            ironIcon.icon = icon;
            this.$.icon.appendChild(ironIcon);
            if (ironIcon.shadowRoot) {
                ironIcon.shadowRoot.querySelectorAll('svg, img')
                    .forEach(child => child.setAttribute('role', 'none'));
            }
        });
    }
    onKeyDown_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.repeat) {
            return;
        }
        if (e.key === 'Enter') {
            this.click();
        }
        else if (e.key === ' ') {
            this.spaceKeyDown_ = true;
        }
    }
    onKeyUp_(e) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
        }
        if (this.spaceKeyDown_ && e.key === ' ') {
            this.spaceKeyDown_ = false;
            this.click();
        }
    }
    onPointerDown_() {
        this.ensureRipple();
    }
}
customElements.define(CrIconButtonElement.is, CrIconButtonElement);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used to get a pluralized string.
 */
// clang-format off
class PluralStringProxyImpl {
    getPluralString(messageName, itemCount) {
        return sendWithPromise('getPluralString', messageName, itemCount);
    }
    getPluralStringTupleWithComma(messageName1, itemCount1, messageName2, itemCount2) {
        return sendWithPromise('getPluralStringTupleWithComma', messageName1, itemCount1, messageName2, itemCount2);
    }
    getPluralStringTupleWithPeriods(messageName1, itemCount1, messageName2, itemCount2) {
        return sendWithPromise('getPluralStringTupleWithPeriods', messageName1, itemCount1, messageName2, itemCount2);
    }
    static getInstance() {
        return instance$4 || (instance$4 = new PluralStringProxyImpl());
    }
    static setInstance(obj) {
        instance$4 = obj;
    }
}
let instance$4 = null;

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Same as cloud_devices::printer::TypedValueVendorCapability::ValueType.
 */
var VendorCapabilityValueType;
(function (VendorCapabilityValueType) {
    VendorCapabilityValueType["BOOLEAN"] = "BOOLEAN";
    VendorCapabilityValueType["FLOAT"] = "FLOAT";
    VendorCapabilityValueType["INTEGER"] = "INTEGER";
    VendorCapabilityValueType["STRING"] = "STRING";
})(VendorCapabilityValueType || (VendorCapabilityValueType = {}));

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Verify |value| is truthy.
 * @param value A value to check for truthiness. Note that this
 *     may be used to test whether |value| is defined or not, and we don't want
 *     to force a cast to boolean.
 */
function assert(value, message) {
    if (value) {
        return;
    }
    throw new Error('Assertion failed' + (message ? `: ${message}` : ''));
}
/**
 * Call this from places in the code that should never be reached.
 *
 * For example, handling all the values of enum with a switch() like this:
 *
 *   function getValueFromEnum(enum) {
 *     switch (enum) {
 *       case ENUM_FIRST_OF_TWO:
 *         return first
 *       case ENUM_LAST_OF_TWO:
 *         return last;
 *     }
 *     assertNotReached();
 *   }
 *
 * This code should only be hit in the case of serious programmer error or
 * unexpected input.
 */
function assertNotReached(message = 'Unreachable code hit') {
    assert(false, message);
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class NativeLayerCrosImpl {
    getEulaUrl(destinationId) {
        return sendWithPromise('getEulaUrl', destinationId);
    }
    grantExtensionPrinterAccess(provisionalDestinationId) {
        return sendWithPromise('grantExtensionPrinterAccess', provisionalDestinationId);
    }
    setupPrinter(printerId) {
        return sendWithPromise('setupPrinter', printerId);
    }
    requestPrinterStatusUpdate(printerId) {
        return sendWithPromise('requestPrinterStatus', printerId);
    }
    recordPrinterStatusRetrySuccessHistogram(retrySuccessful) {
        chrome.send('metricsHandler:recordBooleanHistogram', ['PrinterStatusRetrySuccess', retrySuccessful]);
    }
    choosePrintServers(printServerIds) {
        chrome.send('choosePrintServers', [printServerIds]);
    }
    getPrintServersConfig() {
        return sendWithPromise('getPrintServersConfig');
    }
    recordPrintAttemptOutcome(printAttemptOutcome) {
        chrome.send('recordPrintAttemptOutcome', [printAttemptOutcome]);
    }
    getShowManagePrinters() {
        return sendWithPromise('getShowManagePrinters');
    }
    observeLocalPrinters() {
        return sendWithPromise('observeLocalPrinters');
    }
    static getInstance() {
        return instance$3 || (instance$3 = new NativeLayerCrosImpl());
    }
    static setInstance(obj) {
        instance$3 = obj;
    }
}
let instance$3 = null;

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 *  These values must be kept in sync with the Reason enum in
 *  /chromeos/printing/cups_printer_status.h
 */
var PrinterStatusReason;
(function (PrinterStatusReason) {
    PrinterStatusReason[PrinterStatusReason["UNKNOWN_REASON"] = 0] = "UNKNOWN_REASON";
    PrinterStatusReason[PrinterStatusReason["DEVICE_ERROR"] = 1] = "DEVICE_ERROR";
    PrinterStatusReason[PrinterStatusReason["DOOR_OPEN"] = 2] = "DOOR_OPEN";
    PrinterStatusReason[PrinterStatusReason["LOW_ON_INK"] = 3] = "LOW_ON_INK";
    PrinterStatusReason[PrinterStatusReason["LOW_ON_PAPER"] = 4] = "LOW_ON_PAPER";
    PrinterStatusReason[PrinterStatusReason["NO_ERROR"] = 5] = "NO_ERROR";
    PrinterStatusReason[PrinterStatusReason["OUT_OF_INK"] = 6] = "OUT_OF_INK";
    PrinterStatusReason[PrinterStatusReason["OUT_OF_PAPER"] = 7] = "OUT_OF_PAPER";
    PrinterStatusReason[PrinterStatusReason["OUTPUT_ALMOST_FULL"] = 8] = "OUTPUT_ALMOST_FULL";
    PrinterStatusReason[PrinterStatusReason["OUTPUT_FULL"] = 9] = "OUTPUT_FULL";
    PrinterStatusReason[PrinterStatusReason["PAPER_JAM"] = 10] = "PAPER_JAM";
    PrinterStatusReason[PrinterStatusReason["PAUSED"] = 11] = "PAUSED";
    PrinterStatusReason[PrinterStatusReason["PRINTER_QUEUE_FULL"] = 12] = "PRINTER_QUEUE_FULL";
    PrinterStatusReason[PrinterStatusReason["PRINTER_UNREACHABLE"] = 13] = "PRINTER_UNREACHABLE";
    PrinterStatusReason[PrinterStatusReason["STOPPED"] = 14] = "STOPPED";
    PrinterStatusReason[PrinterStatusReason["TRAY_MISSING"] = 15] = "TRAY_MISSING";
})(PrinterStatusReason || (PrinterStatusReason = {}));
/**
 *  These values must be kept in sync with the Severity enum in
 *  /chromeos/printing/cups_printer_status.h
 */
var PrinterStatusSeverity;
(function (PrinterStatusSeverity) {
    PrinterStatusSeverity[PrinterStatusSeverity["UNKNOWN_SEVERITY"] = 0] = "UNKNOWN_SEVERITY";
    PrinterStatusSeverity[PrinterStatusSeverity["REPORT"] = 1] = "REPORT";
    PrinterStatusSeverity[PrinterStatusSeverity["WARNING"] = 2] = "WARNING";
    PrinterStatusSeverity[PrinterStatusSeverity["ERROR"] = 3] = "ERROR";
})(PrinterStatusSeverity || (PrinterStatusSeverity = {}));
/**
 * Enumeration giving a local Chrome OS printer 3 different state possibilities
 * depending on its current status.
 */
var PrinterState;
(function (PrinterState) {
    PrinterState[PrinterState["GOOD"] = 0] = "GOOD";
    PrinterState[PrinterState["ERROR"] = 1] = "ERROR";
    PrinterState[PrinterState["UNKNOWN"] = 2] = "UNKNOWN";
})(PrinterState || (PrinterState = {}));
var PrintAttemptOutcome;
(function (PrintAttemptOutcome) {
    PrintAttemptOutcome[PrintAttemptOutcome["CANCELLED_PRINT_BUTTON_DISABLED"] = 0] = "CANCELLED_PRINT_BUTTON_DISABLED";
    PrintAttemptOutcome[PrintAttemptOutcome["CANCELLED_NO_PRINTERS_AVAILABLE"] = 1] = "CANCELLED_NO_PRINTERS_AVAILABLE";
    PrintAttemptOutcome[PrintAttemptOutcome["CANCELLED_OTHER_PRINTERS_AVAILABLE"] = 2] = "CANCELLED_OTHER_PRINTERS_AVAILABLE";
    PrintAttemptOutcome[PrintAttemptOutcome["CANCELLED_PRINTER_ERROR_STATUS"] = 3] = "CANCELLED_PRINTER_ERROR_STATUS";
    PrintAttemptOutcome[PrintAttemptOutcome["CANCELLED_PRINTER_GOOD_STATUS"] = 4] = "CANCELLED_PRINTER_GOOD_STATUS";
    PrintAttemptOutcome[PrintAttemptOutcome["CANCELLED_PRINTER_UNKNOWN_STATUS"] = 5] = "CANCELLED_PRINTER_UNKNOWN_STATUS";
    PrintAttemptOutcome[PrintAttemptOutcome["PDF_PRINT_ATTEMPTED"] = 6] = "PDF_PRINT_ATTEMPTED";
    PrintAttemptOutcome[PrintAttemptOutcome["PRINT_JOB_SUCCESS_INITIAL_PRINTER"] = 7] = "PRINT_JOB_SUCCESS_INITIAL_PRINTER";
    PrintAttemptOutcome[PrintAttemptOutcome["PRINT_JOB_SUCCESS_MANUALLY_SELECTED_PRINTER"] = 8] = "PRINT_JOB_SUCCESS_MANUALLY_SELECTED_PRINTER";
    PrintAttemptOutcome[PrintAttemptOutcome["PRINT_JOB_FAIL_INITIAL_PRINTER"] = 9] = "PRINT_JOB_FAIL_INITIAL_PRINTER";
    PrintAttemptOutcome[PrintAttemptOutcome["PRINT_JOB_FAIL_MANUALLY_SELECTED_PRINTER"] = 10] = "PRINT_JOB_FAIL_MANUALLY_SELECTED_PRINTER";
})(PrintAttemptOutcome || (PrintAttemptOutcome = {}));
const ERROR_STRING_KEY_MAP = new Map([
    [PrinterStatusReason.DEVICE_ERROR, 'printerStatusDeviceError'],
    [PrinterStatusReason.DOOR_OPEN, 'printerStatusDoorOpen'],
    [PrinterStatusReason.LOW_ON_INK, 'printerStatusLowOnInk'],
    [PrinterStatusReason.LOW_ON_PAPER, 'printerStatusLowOnPaper'],
    [PrinterStatusReason.OUT_OF_INK, 'printerStatusOutOfInk'],
    [PrinterStatusReason.OUT_OF_PAPER, 'printerStatusOutOfPaper'],
    [PrinterStatusReason.OUTPUT_ALMOST_FULL, 'printerStatusOutputAlmostFull'],
    [PrinterStatusReason.OUTPUT_FULL, 'printerStatusOutputFull'],
    [PrinterStatusReason.PAPER_JAM, 'printerStatusPaperJam'],
    [PrinterStatusReason.PAUSED, 'printerStatusPaused'],
    [PrinterStatusReason.PRINTER_QUEUE_FULL, 'printerStatusPrinterQueueFull'],
    [PrinterStatusReason.PRINTER_UNREACHABLE, 'printerStatusPrinterUnreachable'],
    [PrinterStatusReason.STOPPED, 'printerStatusStopped'],
    [PrinterStatusReason.TRAY_MISSING, 'printerStatusTrayMissing'],
]);
/**
 * A |printerStatus| can have multiple status reasons so this function's
 * responsibility is to determine which status reason is most relevant to
 * surface to the user. Any status reason with a severity of WARNING or ERROR
 * will get highest precedence since this usually means the printer is in a
 * bad state. If there does not exist an error status reason with a high enough
 * severity, then return NO_ERROR.
 * @return Status reason extracted from |printerStatus|.
 */
function getStatusReasonFromPrinterStatus(printerStatus) {
    if (!printerStatus.printerId) {
        // TODO(crbug.com/1027400): Remove console.warn once bug is confirmed fix.
        console.warn('Received printer status missing printer id');
        return PrinterStatusReason.UNKNOWN_REASON;
    }
    let statusReason = PrinterStatusReason.NO_ERROR;
    for (const printerStatusReason of printerStatus.statusReasons) {
        const reason = printerStatusReason.reason;
        const severity = printerStatusReason.severity;
        if (severity !== PrinterStatusSeverity.ERROR &&
            severity !== PrinterStatusSeverity.WARNING) {
            continue;
        }
        // Always prioritize an ERROR severity status, unless it's for unknown
        // reasons.
        if (reason !== PrinterStatusReason.UNKNOWN_REASON &&
            severity === PrinterStatusSeverity.ERROR) {
            return reason;
        }
        if (reason !== PrinterStatusReason.UNKNOWN_REASON ||
            statusReason === PrinterStatusReason.NO_ERROR) {
            statusReason = reason;
        }
    }
    return statusReason;
}
function computePrinterState(printerStatusReason) {
    if (printerStatusReason === null ||
        printerStatusReason === PrinterStatusReason.UNKNOWN_REASON) {
        return PrinterState.UNKNOWN;
    }
    if (printerStatusReason === PrinterStatusReason.NO_ERROR) {
        return PrinterState.GOOD;
    }
    return PrinterState.ERROR;
}
function getPrinterStatusIcon(printerStatusReason, isEnterprisePrinter, prefersDarkColorScheme) {
    if (loadTimeData.getBoolean('isPrintPreviewSetupAssistanceEnabled')) {
        return getPrinterStatusIconImproved(printerStatusReason, isEnterprisePrinter, prefersDarkColorScheme);
    }
    const printerTypePrefix = isEnterprisePrinter ?
        'print-preview:business-printer-status-' :
        'print-preview:printer-status-';
    const darkModeSuffix = prefersDarkColorScheme ? '-dark' : '';
    switch (computePrinterState(printerStatusReason)) {
        case PrinterState.GOOD:
            return `${printerTypePrefix}green${darkModeSuffix}`;
        case PrinterState.ERROR:
            return `${printerTypePrefix}red${darkModeSuffix}`;
        case PrinterState.UNKNOWN:
            return `${printerTypePrefix}grey${darkModeSuffix}`;
        default:
            assertNotReached();
    }
}
// Mapping based on http://go/printer-settings-revamp-2023-dd "Determining
// Printer Status" section.
const PRINTER_STATUS_REASON_COLOR_MAP = new Map([
    [PrinterStatusReason.UNKNOWN_REASON, 'green'],
    [PrinterStatusReason.DEVICE_ERROR, 'orange'],
    [PrinterStatusReason.DOOR_OPEN, 'orange'],
    [PrinterStatusReason.LOW_ON_INK, 'orange'],
    [PrinterStatusReason.LOW_ON_PAPER, 'orange'],
    [PrinterStatusReason.NO_ERROR, 'green'],
    [PrinterStatusReason.OUT_OF_INK, 'orange'],
    [PrinterStatusReason.OUT_OF_PAPER, 'orange'],
    [PrinterStatusReason.OUTPUT_ALMOST_FULL, 'orange'],
    [PrinterStatusReason.OUTPUT_FULL, 'orange'],
    [PrinterStatusReason.PAPER_JAM, 'orange'],
    [PrinterStatusReason.PAUSED, 'orange'],
    [PrinterStatusReason.PRINTER_QUEUE_FULL, 'orange'],
    [PrinterStatusReason.PRINTER_UNREACHABLE, 'red'],
    [PrinterStatusReason.STOPPED, 'orange'],
    [PrinterStatusReason.TRAY_MISSING, 'orange'],
]);
/**
 * Returns the print-preview icon matching the printer's PrinterStatusReason,
 * enterprise status, and color scheme when
 * 'isPrintPreviewSetupAssistanceEnabled' flag is enabled.
 */
// TODO(b/289091283): Rename function to `getPrinterStatusIcon` and remove
//                    previous implementation when flag is removed.
function getPrinterStatusIconImproved(printerStatusReason, isEnterprisePrinter, prefersDarkColorScheme) {
    const printerTypePrefix = isEnterprisePrinter ?
        'print-preview:business-printer-status-' :
        'print-preview:printer-status-';
    const darkModeSuffix = prefersDarkColorScheme ? '-dark' : '';
    const iconColor = printerStatusReason === null ?
        'grey' :
        PRINTER_STATUS_REASON_COLOR_MAP.get(printerStatusReason);
    assert(iconColor);
    return `${printerTypePrefix}${iconColor}${darkModeSuffix}`;
}
/**
 * Returns class name matching icon color for the printer's
 * PrinterStatusReason.
 */
function getStatusTextColorClass(printerStatusReason) {
    // TODO(b/289091283): Remove condition when flag is removed.
    if (!loadTimeData.getBoolean('isPrintPreviewSetupAssistanceEnabled')) {
        return '';
    }
    if (printerStatusReason === null) {
        return '';
    }
    const color = PRINTER_STATUS_REASON_COLOR_MAP.get(printerStatusReason);
    assert(color);
    return `status-${color}`;
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// 
/**
 * Enumeration of the origin types for destinations.
 */
var DestinationOrigin;
(function (DestinationOrigin) {
    DestinationOrigin["LOCAL"] = "local";
    // Note: Cookies, device and privet are deprecated, but used to filter any
    // legacy entries in the recent destinations, since we can't guarantee all
    // such recent printers have been overridden.
    DestinationOrigin["COOKIES"] = "cookies";
    // 
    DestinationOrigin["DEVICE"] = "device";
    // 
    DestinationOrigin["PRIVET"] = "privet";
    DestinationOrigin["EXTENSION"] = "extension";
    DestinationOrigin["CROS"] = "chrome_os";
})(DestinationOrigin || (DestinationOrigin = {}));
/**
 * Printer types for capabilities and printer list requests.
 * Must match PrinterType in printing/mojom/print.mojom
 */
var PrinterType;
(function (PrinterType) {
    PrinterType[PrinterType["PRIVET_PRINTER_DEPRECATED"] = 0] = "PRIVET_PRINTER_DEPRECATED";
    PrinterType[PrinterType["EXTENSION_PRINTER"] = 1] = "EXTENSION_PRINTER";
    PrinterType[PrinterType["PDF_PRINTER"] = 2] = "PDF_PRINTER";
    PrinterType[PrinterType["LOCAL_PRINTER"] = 3] = "LOCAL_PRINTER";
    PrinterType[PrinterType["CLOUD_PRINTER_DEPRECATED"] = 4] = "CLOUD_PRINTER_DEPRECATED";
})(PrinterType || (PrinterType = {}));
// 
/**
 * Enumeration specifying whether a destination is provisional and the reason
 * the destination is provisional.
 */
var DestinationProvisionalType;
(function (DestinationProvisionalType) {
    // Destination is not provisional.
    DestinationProvisionalType["NONE"] = "NONE";
    // User has to grant USB access for the destination to its provider.
    // Used for destinations with extension origin.
    DestinationProvisionalType["NEEDS_USB_PERMISSION"] = "NEEDS_USB_PERMISSION";
})(DestinationProvisionalType || (DestinationProvisionalType = {}));
// 
/**
 * Enumeration of color modes used by Chromium.
 */
var ColorMode;
(function (ColorMode) {
    ColorMode[ColorMode["GRAY"] = 1] = "GRAY";
    ColorMode[ColorMode["COLOR"] = 2] = "COLOR";
})(ColorMode || (ColorMode = {}));
function isPdfPrinter(id) {
    // 
    if (id === GooglePromotedDestinationId.SAVE_TO_DRIVE_CROS) {
        return true;
    }
    // 
    return id === GooglePromotedDestinationId.SAVE_AS_PDF;
}
/**
 * Creates a |RecentDestination| to represent |destination| in the app
 * state.
 */
function makeRecentDestination(destination) {
    return {
        id: destination.id,
        origin: destination.origin,
        capabilities: destination.capabilities,
        displayName: destination.displayName || '',
        extensionId: destination.extensionId || '',
        extensionName: destination.extensionName || '',
        icon: destination.icon || '',
    };
}
/**
 * @return key that maps to a destination with the selected |id| and |origin|.
 */
function createDestinationKey(id, origin) {
    return `${id}/${origin}/`;
}
/**
 * @return A key that maps to a destination with parameters matching
 *     |recentDestination|.
 */
function createRecentDestinationKey(recentDestination) {
    return createDestinationKey(recentDestination.id, recentDestination.origin);
}
/**
 * List of capability types considered color.
 */
const COLOR_TYPES = ['STANDARD_COLOR', 'CUSTOM_COLOR'];
/**
 * List of capability types considered monochrome.
 */
const MONOCHROME_TYPES = ['STANDARD_MONOCHROME', 'CUSTOM_MONOCHROME'];
/**
 * Print destination data object.
 */
class Destination {
    constructor(id, origin, displayName, params) {
        /**
         * Print capabilities of the destination.
         */
        this.capabilities_ = null;
        /**
         * Destination location.
         */
        this.location_ = '';
        /**
         * EULA url for printer's PPD. Empty string indicates no provided EULA.
         */
        this.eulaUrl_ = '';
        /**
         * True if the user opened the print preview dropdown and selected a different
         * printer than the original destination.
         */
        this.printerManuallySelected_ = false;
        /**
         * Stores the printer status reason for a local Chrome OS printer.
         */
        this.printerStatusReason_ = null;
        /**
         * Promise returns |key_| when the printer status request is completed.
         */
        this.printerStatusRequestedPromise_ = null;
        /**
         * True if the failed printer status request has already been retried once.
         */
        this.printerStatusRetrySent_ = false;
        /**
         * The length of time to wait before retrying a printer status request.
         */
        this.printerStatusRetryTimerMs_ = 3000;
        this.id_ = id;
        this.origin_ = origin;
        this.displayName_ = displayName || '';
        this.isEnterprisePrinter_ = (params && params.isEnterprisePrinter) || false;
        this.description_ = (params && params.description) || '';
        this.extensionId_ = (params && params.extensionId) || '';
        this.extensionName_ = (params && params.extensionName) || '';
        this.location_ = (params && params.location) || '';
        this.type_ = this.computeType_(id, origin);
        // 
        this.provisionalType_ =
            (params && params.provisionalType) || DestinationProvisionalType.NONE;
        assert(this.provisionalType_ !==
            DestinationProvisionalType.NEEDS_USB_PERMISSION ||
            this.isExtension, 'Provisional USB destination only supprted with extension origin.');
        // 
    }
    computeType_(id, origin) {
        if (isPdfPrinter(id)) {
            return PrinterType.PDF_PRINTER;
        }
        return origin === DestinationOrigin.EXTENSION ?
            PrinterType.EXTENSION_PRINTER :
            PrinterType.LOCAL_PRINTER;
    }
    get type() {
        return this.type_;
    }
    get id() {
        return this.id_;
    }
    get origin() {
        return this.origin_;
    }
    get displayName() {
        return this.displayName_;
    }
    /**
     * @return Whether the destination is an extension managed printer.
     */
    get isExtension() {
        return this.origin_ === DestinationOrigin.EXTENSION;
    }
    /**
     * @return Most relevant string to help user to identify this
     *     destination.
     */
    get hint() {
        return this.location_ || this.extensionName || this.description_;
    }
    /**
     * @return Extension ID associated with the destination. Non-empty
     *     only for extension managed printers.
     */
    get extensionId() {
        return this.extensionId_;
    }
    /**
     * @return Extension name associated with the destination.
     *     Non-empty only for extension managed printers.
     */
    get extensionName() {
        return this.extensionName_;
    }
    /** @return Print capabilities of the destination. */
    get capabilities() {
        return this.capabilities_;
    }
    set capabilities(capabilities) {
        if (capabilities) {
            this.capabilities_ = capabilities;
        }
    }
    // 
    get eulaUrl() {
        return this.eulaUrl_;
    }
    set eulaUrl(eulaUrl) {
        this.eulaUrl_ = eulaUrl;
    }
    get printerManuallySelected() {
        return this.printerManuallySelected_;
    }
    set printerManuallySelected(printerManuallySelected) {
        this.printerManuallySelected_ = printerManuallySelected;
    }
    /**
     * @return The printer status reason for a local Chrome OS printer.
     */
    get printerStatusReason() {
        return this.printerStatusReason_;
    }
    set printerStatusReason(printerStatusReason) {
        this.printerStatusReason_ = printerStatusReason;
    }
    setPrinterStatusRetryTimeoutForTesting(timeoutMs) {
        this.printerStatusRetryTimerMs_ = timeoutMs;
    }
    /**
     * Requests a printer status for the destination.
     * @return Promise with destination key.
     */
    requestPrinterStatus() {
        // Requesting printer status only allowed for local CrOS printers.
        if (this.origin_ !== DestinationOrigin.CROS) {
            return Promise.reject();
        }
        // Immediately resolve promise if |printerStatusReason_| is already
        // available.
        if (this.printerStatusReason_) {
            return Promise.resolve(this.key);
        }
        // Return existing promise if the printer status has already been requested.
        if (this.printerStatusRequestedPromise_) {
            return this.printerStatusRequestedPromise_;
        }
        // Request printer status then set and return the promise.
        this.printerStatusRequestedPromise_ = this.requestPrinterStatusPromise_();
        return this.printerStatusRequestedPromise_;
    }
    /**
     * Requests a printer status for the destination. If the printer status comes
     * back as |PRINTER_UNREACHABLE|, this function will retry and call itself
     * again once before resolving the original call.
     * @return Promise with destination key.
     */
    requestPrinterStatusPromise_() {
        return NativeLayerCrosImpl.getInstance()
            .requestPrinterStatusUpdate(this.id_)
            .then(status => {
            if (status) {
                const statusReason = getStatusReasonFromPrinterStatus(status);
                const isPrinterUnreachable = statusReason === PrinterStatusReason.PRINTER_UNREACHABLE;
                if (isPrinterUnreachable && !this.printerStatusRetrySent_) {
                    this.printerStatusRetrySent_ = true;
                    return this.printerStatusWaitForTimerPromise_();
                }
                this.printerStatusReason_ = statusReason;
                // If this is the second printer status attempt, record the result.
                if (this.printerStatusRetrySent_) {
                    NativeLayerCrosImpl.getInstance()
                        .recordPrinterStatusRetrySuccessHistogram(!isPrinterUnreachable);
                }
            }
            return Promise.resolve(this.key);
        });
    }
    /**
     * Pause for a set timeout then retry the printer status request.
     * @return Promise with destination key.
     */
    printerStatusWaitForTimerPromise_() {
        return new Promise((resolve, _reject) => {
            setTimeout(() => {
                resolve();
            }, this.printerStatusRetryTimerMs_);
        })
            .then(() => {
            return this.requestPrinterStatusPromise_();
        });
    }
    /** @return Whether the destination is ready to be selected. */
    get readyForSelection() {
        return (this.origin_ !== DestinationOrigin.CROS ||
            this.capabilities_ !== null) &&
            !this.isProvisional;
    }
    get provisionalType() {
        return this.provisionalType_;
    }
    get isProvisional() {
        return this.provisionalType_ !== DestinationProvisionalType.NONE;
    }
    // 
    /** @return Path to the SVG for the destination's icon. */
    get icon() {
        // 
        if (this.id_ === GooglePromotedDestinationId.SAVE_TO_DRIVE_CROS) {
            return 'print-preview:save-to-drive';
        }
        // 
        if (this.id_ === GooglePromotedDestinationId.SAVE_AS_PDF) {
            return 'cr:insert-drive-file';
        }
        if (this.isEnterprisePrinter) {
            return 'print-preview:business';
        }
        return 'print-preview:print';
    }
    /**
     * @return Properties (besides display name) to match search queries against.
     */
    get extraPropertiesToMatch() {
        return [this.location_, this.description_];
    }
    /**
     * Matches a query against the destination.
     * @param query Query to match against the destination.
     * @return Whether the query matches this destination.
     */
    matches(query) {
        return !!this.displayName_.match(query) ||
            !!this.extensionName_.match(query) || !!this.location_.match(query) ||
            !!this.description_.match(query);
    }
    /**
     * Whether the printer is enterprise policy controlled printer.
     */
    get isEnterprisePrinter() {
        return this.isEnterprisePrinter_;
    }
    copiesCapability_() {
        return this.capabilities && this.capabilities.printer &&
            this.capabilities.printer.copies ?
            this.capabilities.printer.copies :
            null;
    }
    colorCapability_() {
        return this.capabilities && this.capabilities.printer &&
            this.capabilities.printer.color ?
            this.capabilities.printer.color :
            null;
    }
    /** @return Whether the printer supports copies. */
    get hasCopiesCapability() {
        const capability = this.copiesCapability_();
        if (!capability) {
            return false;
        }
        return capability.max ? capability.max > 1 : true;
    }
    /**
     * @return Whether the printer supports both black and white and
     *     color printing.
     */
    get hasColorCapability() {
        const capability = this.colorCapability_();
        if (!capability || !capability.option) {
            return false;
        }
        let hasColor = false;
        let hasMonochrome = false;
        capability.option.forEach(option => {
            assert(option.type);
            hasColor = hasColor || COLOR_TYPES.includes(option.type);
            hasMonochrome = hasMonochrome || MONOCHROME_TYPES.includes(option.type);
        });
        return hasColor && hasMonochrome;
    }
    /**
     * @param isColor Whether to use a color printing mode.
     * @return Selected color option.
     */
    getSelectedColorOption(isColor) {
        const typesToLookFor = isColor ? COLOR_TYPES : MONOCHROME_TYPES;
        const capability = this.colorCapability_();
        if (!capability || !capability.option) {
            return null;
        }
        for (let i = 0; i < typesToLookFor.length; i++) {
            const matchingOptions = capability.option.filter(option => {
                return option.type === typesToLookFor[i];
            });
            if (matchingOptions.length > 0) {
                return matchingOptions[0];
            }
        }
        return null;
    }
    /**
     * @param isColor Whether to use a color printing mode.
     * @return Native color model of the destination.
     */
    getNativeColorModel(isColor) {
        // For printers without capability, native color model is ignored.
        const capability = this.colorCapability_();
        if (!capability || !capability.option) {
            return isColor ? ColorMode.COLOR : ColorMode.GRAY;
        }
        const selected = this.getSelectedColorOption(isColor);
        const mode = parseInt(selected ? selected.vendor_id : '', 10);
        if (isNaN(mode)) {
            return isColor ? ColorMode.COLOR : ColorMode.GRAY;
        }
        return mode;
    }
    /**
     * @return The default color option for the destination.
     */
    get defaultColorOption() {
        const capability = this.colorCapability_();
        if (!capability || !capability.option) {
            return null;
        }
        const defaultOptions = capability.option.filter(option => {
            return option.is_default;
        });
        return defaultOptions.length !== 0 ? defaultOptions[0] : null;
    }
    /** @return A unique identifier for this destination. */
    get key() {
        return `${this.id_}/${this.origin_}/`;
    }
}
/**
 * Enumeration of Google-promoted destination IDs.
 * @enum {string}
 */
var GooglePromotedDestinationId;
(function (GooglePromotedDestinationId) {
    GooglePromotedDestinationId["SAVE_AS_PDF"] = "Save as PDF";
    // 
    GooglePromotedDestinationId["SAVE_TO_DRIVE_CROS"] = "Save to Drive CrOS";
    // 
})(GooglePromotedDestinationId || (GooglePromotedDestinationId = {}));
/* Unique identifier for the Save as PDF destination */
const PDF_DESTINATION_KEY = `${GooglePromotedDestinationId.SAVE_AS_PDF}/${DestinationOrigin.LOCAL}/`;
// 
/* Unique identifier for the Save to Drive CrOS destination */
const SAVE_TO_DRIVE_CROS_DESTINATION_KEY = `${GooglePromotedDestinationId.SAVE_TO_DRIVE_CROS}/${DestinationOrigin.LOCAL}/`;
//

// Copyright 2011 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview EventTracker is a simple class that manages the addition and
 * removal of DOM event listeners. In particular, it keeps track of all
 * listeners that have been added and makes it easy to remove some or all of
 * them without requiring all the information again. This is particularly handy
 * when the listener is a generated function such as a lambda or the result of
 * calling Function.bind.
 */
class EventTracker {
    listeners_ = [];
    /**
     * Add an event listener - replacement for EventTarget.addEventListener.
     * @param target The DOM target to add a listener to.
     * @param eventType The type of event to subscribe to.
     * @param listener The listener to add.
     * @param capture Whether to invoke during the capture phase. Defaults to
     *     false.
     */
    add(target, eventType, listener, capture = false) {
        const h = {
            target: target,
            eventType: eventType,
            listener: listener,
            capture: capture,
        };
        this.listeners_.push(h);
        target.addEventListener(eventType, listener, capture);
    }
    /**
     * Remove any specified event listeners added with this EventTracker.
     * @param target The DOM target to remove a listener from.
     * @param eventType The type of event to remove.
     */
    remove(target, eventType) {
        this.listeners_ = this.listeners_.filter(listener => {
            if (listener.target === target &&
                (!eventType || (listener.eventType === eventType))) {
                EventTracker.removeEventListener(listener);
                return false;
            }
            return true;
        });
    }
    /** Remove all event listeners added with this EventTracker. */
    removeAll() {
        this.listeners_.forEach(listener => EventTracker.removeEventListener(listener));
        this.listeners_ = [];
    }
    /**
     * Remove a single event listener given it's tracking entry. It's up to the
     * caller to ensure the entry is removed from listeners_.
     * @param entry The entry describing the listener to
     * remove.
     */
    static removeEventListener(entry) {
        entry.target.removeEventListener(entry.eventType, entry.listener, entry.capture);
    }
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Enumeration of background graphics printing mode restrictions used by
 * Chromium.
 * This has to coincide with |printing::BackgroundGraphicsModeRestriction| as
 * defined in printing/backend/printing_restrictions.h
 */
var BackgroundGraphicsModeRestriction;
(function (BackgroundGraphicsModeRestriction) {
    BackgroundGraphicsModeRestriction[BackgroundGraphicsModeRestriction["UNSET"] = 0] = "UNSET";
    BackgroundGraphicsModeRestriction[BackgroundGraphicsModeRestriction["ENABLED"] = 1] = "ENABLED";
    BackgroundGraphicsModeRestriction[BackgroundGraphicsModeRestriction["DISABLED"] = 2] = "DISABLED";
})(BackgroundGraphicsModeRestriction || (BackgroundGraphicsModeRestriction = {}));
/**
 * Enumeration of color mode restrictions used by Chromium.
 * This has to coincide with |printing::ColorModeRestriction| as defined in
 * printing/backend/printing_restrictions.h
 */
var ColorModeRestriction;
(function (ColorModeRestriction) {
    ColorModeRestriction[ColorModeRestriction["UNSET"] = 0] = "UNSET";
    ColorModeRestriction[ColorModeRestriction["MONOCHROME"] = 1] = "MONOCHROME";
    ColorModeRestriction[ColorModeRestriction["COLOR"] = 2] = "COLOR";
})(ColorModeRestriction || (ColorModeRestriction = {}));
/**
 * Enumeration of duplex mode restrictions used by Chromium.
 * This has to coincide with |printing::DuplexModeRestriction| as defined in
 * printing/backend/printing_restrictions.h
 */
var DuplexModeRestriction;
(function (DuplexModeRestriction) {
    DuplexModeRestriction[DuplexModeRestriction["UNSET"] = 0] = "UNSET";
    DuplexModeRestriction[DuplexModeRestriction["SIMPLEX"] = 1] = "SIMPLEX";
    DuplexModeRestriction[DuplexModeRestriction["LONG_EDGE"] = 2] = "LONG_EDGE";
    DuplexModeRestriction[DuplexModeRestriction["SHORT_EDGE"] = 4] = "SHORT_EDGE";
    DuplexModeRestriction[DuplexModeRestriction["DUPLEX"] = 6] = "DUPLEX";
})(DuplexModeRestriction || (DuplexModeRestriction = {}));
// 
/**
 * Enumeration of PIN printing mode restrictions used by Chromium.
 * This has to coincide with |printing::PinModeRestriction| as defined in
 * printing/backend/printing_restrictions.h
 */
var PinModeRestriction;
(function (PinModeRestriction) {
    PinModeRestriction[PinModeRestriction["UNSET"] = 0] = "UNSET";
    PinModeRestriction[PinModeRestriction["PIN"] = 1] = "PIN";
    PinModeRestriction[PinModeRestriction["NO_PIN"] = 2] = "NO_PIN";
})(PinModeRestriction || (PinModeRestriction = {}));
class NativeLayerImpl {
    getInitialSettings() {
        return sendWithPromise('getInitialSettings');
    }
    getPrinters(type) {
        return sendWithPromise('getPrinters', type);
    }
    getPrinterCapabilities(destinationId, type) {
        return sendWithPromise('getPrinterCapabilities', destinationId, type);
    }
    getPreview(printTicket) {
        return sendWithPromise('getPreview', printTicket);
    }
    managePrinters() {
        chrome.send('managePrinters');
    }
    doPrint(printTicket) {
        return sendWithPromise('doPrint', printTicket);
    }
    cancelPendingPrintRequest() {
        chrome.send('cancelPendingPrintRequest');
    }
    saveAppState(appStateStr) {
        chrome.send('saveAppState', [appStateStr]);
    }
    // 
    dialogClose(isCancel) {
        if (isCancel) {
            chrome.send('closePrintPreviewDialog');
        }
        chrome.send('dialogClose');
    }
    hidePreview() {
        chrome.send('hidePreview');
    }
    recordInHistogram(histogram, bucket, maxBucket) {
        chrome.send('metricsHandler:recordInHistogram', [histogram, bucket, maxBucket]);
    }
    recordBooleanHistogram(histogram, value) {
        chrome.send('metricsHandler:recordBooleanHistogram', [histogram, value]);
    }
    static getInstance() {
        return instance$2 || (instance$2 = new NativeLayerImpl());
    }
    static setInstance(obj) {
        instance$2 = obj;
    }
}
let instance$2 = null;

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DestinationMatch {
    /**
     * A set of key parameters describing a destination used to determine
     * if two destinations are the same.
     * @param idRegExp Match destination's id.
     * @param displayNameRegExp Match destination's displayName.
     */
    constructor(idRegExp, displayNameRegExp) {
        this.idRegExp_ = idRegExp;
        this.displayNameRegExp_ = displayNameRegExp;
    }
    match(destination) {
        if (this.idRegExp_ && !this.idRegExp_.test(destination.id)) {
            return false;
        }
        if (this.displayNameRegExp_ &&
            !this.displayNameRegExp_.test(destination.displayName)) {
            return false;
        }
        if (destination.type === PrinterType.PDF_PRINTER) {
            return false;
        }
        return true;
    }
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* @fileoverview Utilities for determining the current platform. */
/** Whether we are using a Mac or not. */
const isMac = /Mac/.test(navigator.platform);
/** Whether this is the ChromeOS/ash web browser. */
const isChromeOS = (() => {
    let returnValue = false;
    // 
    returnValue = true;
    // 
    return returnValue;
})();
/** Whether this is the ChromeOS/Lacros web browser. */
const isLacros = (() => {
    let returnValue = false;
    // 
    return returnValue;
})();
/** Whether this is on iOS. */
const isIOS = /CriOS/.test(navigator.userAgent);

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @param type The type of printer to parse.
 * @param printer Information about the printer.
 *       Type expected depends on |type|:
 *       For LOCAL_PRINTER => LocalDestinationInfo
 *       For EXTENSION_PRINTER => ExtensionDestinationInfo
 * @return Destination, or null if an invalid value is provided for |type|.
 */
function parseDestination(type, printer) {
    if (type === PrinterType.LOCAL_PRINTER || type === PrinterType.PDF_PRINTER) {
        return parseLocalDestination(printer);
    }
    if (type === PrinterType.EXTENSION_PRINTER) {
        return parseExtensionDestination(printer);
    }
    assertNotReached('Unknown printer type ' + type);
}
/**
 * @param destinationInfo Information describing a local print destination.
 * @return Parsed local print destination.
 */
function parseLocalDestination(destinationInfo) {
    const options = {
        description: destinationInfo.printerDescription,
        isEnterprisePrinter: destinationInfo.cupsEnterprisePrinter,
        location: '',
    };
    const locationOptions = new Set(['location', 'printer-location']);
    if (destinationInfo.printerOptions) {
        // The only printer option currently used by Print Preview's UI is location.
        for (const printerOption of Object.keys(destinationInfo.printerOptions)) {
            if (locationOptions.has(printerOption)) {
                options.location = destinationInfo.printerOptions[printerOption] || '';
            }
        }
    }
    return new Destination(destinationInfo.deviceName, (isChromeOS || isLacros) ? DestinationOrigin.CROS :
        DestinationOrigin.LOCAL, destinationInfo.printerName, options);
}
/**
 * Parses an extension destination from an extension supplied printer
 * description.
 */
function parseExtensionDestination(destinationInfo) {
    // 
    const provisionalType = destinationInfo.provisional ?
        DestinationProvisionalType.NEEDS_USB_PERMISSION :
        DestinationProvisionalType.NONE;
    // 
    return new Destination(destinationInfo.id, DestinationOrigin.EXTENSION, destinationInfo.name, {
        description: destinationInfo.description || '',
        extensionId: destinationInfo.extensionId,
        extensionName: destinationInfo.extensionName || '',
        // 
        provisionalType: provisionalType,
        // 
    });
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// 
/**
 * Printer search statuses used by the destination store.
 * @enum {string}
 */
var DestinationStorePrinterSearchStatus;
(function (DestinationStorePrinterSearchStatus) {
    DestinationStorePrinterSearchStatus["START"] = "start";
    DestinationStorePrinterSearchStatus["SEARCHING"] = "searching";
    DestinationStorePrinterSearchStatus["DONE"] = "done";
})(DestinationStorePrinterSearchStatus || (DestinationStorePrinterSearchStatus = {}));
/**
 * Enumeration of possible destination errors.
 */
var DestinationErrorType;
(function (DestinationErrorType) {
    DestinationErrorType[DestinationErrorType["INVALID"] = 0] = "INVALID";
    DestinationErrorType[DestinationErrorType["NO_DESTINATIONS"] = 1] = "NO_DESTINATIONS";
})(DestinationErrorType || (DestinationErrorType = {}));
/**
 * Localizes printer capabilities.
 * @param capabilities Printer capabilities to localize.
 * @return Localized capabilities.
 */
function localizeCapabilities(capabilities) {
    if (!capabilities.printer) {
        return capabilities;
    }
    const mediaSize = capabilities.printer.media_size;
    if (!mediaSize) {
        return capabilities;
    }
    for (let i = 0, media; (media = mediaSize.option[i]); i++) {
        // No need to patch capabilities with localized names provided.
        if (!media.custom_display_name_localized) {
            media.custom_display_name = media.custom_display_name ||
                MEDIA_DISPLAY_NAMES_[media.name] || media.name;
        }
    }
    return capabilities;
}
/**
 * Compare two media sizes by their names.
 * @return 1 if a > b, -1 if a < b, or 0 if a === b.
 */
function compareMediaNames(a, b) {
    const nameA = a.custom_display_name_localized || a.custom_display_name || '';
    const nameB = b.custom_display_name_localized || b.custom_display_name || '';
    return nameA === nameB ? 0 : (nameA > nameB ? 1 : -1);
}
/**
 * Sort printer media sizes.
 */
function sortMediaSizes(capabilities) {
    if (!capabilities.printer) {
        return capabilities;
    }
    const mediaSize = capabilities.printer.media_size;
    if (!mediaSize) {
        return capabilities;
    }
    // For the standard sizes, separate into categories, as seen in the Cloud
    // Print CDD guide:
    // - North American
    // - Chinese
    // - ISO
    // - Japanese
    // - Other metric
    // Otherwise, assume they are custom sizes.
    const categoryStandardNA = [];
    const categoryStandardCN = [];
    const categoryStandardISO = [];
    const categoryStandardJP = [];
    const categoryStandardMisc = [];
    const categoryCustom = [];
    for (let i = 0, media; (media = mediaSize.option[i]); i++) {
        const name = media.name || 'CUSTOM';
        let category;
        if (name.startsWith('NA_')) {
            category = categoryStandardNA;
        }
        else if (name.startsWith('PRC_') || name.startsWith('ROC_') ||
            name === 'OM_DAI_PA_KAI' || name === 'OM_JUURO_KU_KAI' ||
            name === 'OM_PA_KAI') {
            category = categoryStandardCN;
        }
        else if (name.startsWith('ISO_')) {
            category = categoryStandardISO;
        }
        else if (name.startsWith('JIS_') || name.startsWith('JPN_')) {
            category = categoryStandardJP;
        }
        else if (name.startsWith('OM_')) {
            category = categoryStandardMisc;
        }
        else {
            assert(name === 'CUSTOM', 'Unknown media size. Assuming custom');
            category = categoryCustom;
        }
        category.push(media);
    }
    // For each category, sort by name.
    categoryStandardNA.sort(compareMediaNames);
    categoryStandardCN.sort(compareMediaNames);
    categoryStandardISO.sort(compareMediaNames);
    categoryStandardJP.sort(compareMediaNames);
    categoryStandardMisc.sort(compareMediaNames);
    categoryCustom.sort(compareMediaNames);
    // Then put it all back together.
    mediaSize.option = categoryStandardNA;
    mediaSize.option.push(...categoryStandardCN, ...categoryStandardISO, ...categoryStandardJP, ...categoryStandardMisc, ...categoryCustom);
    return capabilities;
}
/**
 * Event types dispatched by the destination store.
 * @enum {string}
 */
var DestinationStoreEventType;
(function (DestinationStoreEventType) {
    DestinationStoreEventType["DESTINATION_SEARCH_DONE"] = "DestinationStore.DESTINATION_SEARCH_DONE";
    DestinationStoreEventType["DESTINATION_SELECT"] = "DestinationStore.DESTINATION_SELECT";
    DestinationStoreEventType["DESTINATIONS_INSERTED"] = "DestinationStore.DESTINATIONS_INSERTED";
    DestinationStoreEventType["ERROR"] = "DestinationStore.ERROR";
    DestinationStoreEventType["SELECTED_DESTINATION_CAPABILITIES_READY"] = "DestinationStore.SELECTED_DESTINATION_CAPABILITIES_READY";
    // 
    DestinationStoreEventType["DESTINATION_EULA_READY"] = "DestinationStore.DESTINATION_EULA_READY";
    DestinationStoreEventType["DESTINATION_PRINTER_STATUS_UPDATE"] = "DestinationStore.DESTINATION_PRINTER_STATUS_UPDATE";
    // 
})(DestinationStoreEventType || (DestinationStoreEventType = {}));
class DestinationStore extends EventTarget {
    /**
     * A data store that stores destinations and dispatches events when the
     * data store changes.
     * @param addListenerCallback Function to call to add Web UI listeners in
     *     DestinationStore constructor.
     */
    constructor(addListenerCallback) {
        super();
        /**
         * Whether the destination store will auto select the destination that
         * matches this set of parameters.
         */
        this.autoSelectMatchingDestination_ = null;
        /**
         * Cache used for constant lookup of destinations by key.
         */
        this.destinationMap_ = new Map();
        /**
         * Internal backing store for the data store.
         */
        this.destinations_ = [];
        this.initialDestinationSelected_ = false;
        /**
         * Used to fetch local print destinations.
         */
        this.nativeLayer_ = NativeLayerImpl.getInstance();
        // 
        /**
         * Used to fetch information about Chrome OS local print destinations.
         */
        this.nativeLayerCros_ = NativeLayerCrosImpl.getInstance();
        // 
        /**
         * Whether PDF printer is enabled. It's disabled, for example, in App
         * Kiosk mode or when PDF printing is disallowed by policy.
         */
        this.pdfPrinterEnabled_ = false;
        this.recentDestinationKeys_ = [];
        /**
         * Currently selected destination.
         */
        this.selectedDestination_ = null;
        /**
         * Key of the system default destination.
         */
        this.systemDefaultDestinationKey_ = '';
        /**
         * Event tracker used to track event listeners of the destination store.
         */
        this.tracker_ = new EventTracker();
        this.typesToSearch_ = new Set();
        this.destinationSearchStatus_ = new Map([
            [
                PrinterType.EXTENSION_PRINTER,
                DestinationStorePrinterSearchStatus.START,
            ],
            [PrinterType.LOCAL_PRINTER, DestinationStorePrinterSearchStatus.START],
        ]);
        this.useSystemDefaultAsDefault_ =
            loadTimeData.getBoolean('useSystemDefaultPrinter');
        addListenerCallback('printers-added', (type, printers) => this.onPrintersAdded_(type, printers));
        // 
        if (loadTimeData.getBoolean('isLocalPrinterObservingEnabled')) {
            addListenerCallback('local-printers-updated', (printers) => this.onLocalPrintersUpdated_(printers));
        }
        // 
    }
    /**
     * @return List of destinations
     */
    destinations() {
        return this.destinations_.slice();
    }
    /**
     * @return Whether a search for print destinations is in progress.
     */
    get isPrintDestinationSearchInProgress() {
        return Array.from(this.destinationSearchStatus_.values())
            .some(el => el === DestinationStorePrinterSearchStatus.SEARCHING);
    }
    /**
     * @return The currently selected destination or null if none is selected.
     */
    get selectedDestination() {
        return this.selectedDestination_;
    }
    getPrinterTypeForRecentDestination_(destination) {
        if (isPdfPrinter(destination.id)) {
            return PrinterType.PDF_PRINTER;
        }
        if (destination.origin === DestinationOrigin.LOCAL ||
            destination.origin === DestinationOrigin.CROS) {
            return PrinterType.LOCAL_PRINTER;
        }
        assert(destination.origin === DestinationOrigin.EXTENSION);
        return PrinterType.EXTENSION_PRINTER;
    }
    /**
     * Initializes the destination store. Sets the initially selected
     * destination. If any inserted destinations match this ID, that destination
     * will be automatically selected.
     * @param pdfPrinterDisabled Whether the PDF print destination is
     *     disabled in print preview.
     * @param saveToDriveDisabled Whether the 'Save to Google Drive' destination
     *     is disabled in print preview. Only used on Chrome OS.
     * @param systemDefaultDestinationId ID of the system default
     *     destination.
     * @param serializedDefaultDestinationSelectionRulesStr Serialized
     *     default destination selection rules.
     * @param recentDestinations The recent print destinations.
     */
    init(pdfPrinterDisabled, 
    // 
    saveToDriveDisabled, 
    // 
    // 
    systemDefaultDestinationId, serializedDefaultDestinationSelectionRulesStr, recentDestinations) {
        if (systemDefaultDestinationId) {
            const systemDefaultVirtual = isPdfPrinter(systemDefaultDestinationId);
            const systemDefaultType = systemDefaultVirtual ?
                PrinterType.PDF_PRINTER :
                PrinterType.LOCAL_PRINTER;
            // 
            // 
            const systemDefaultOrigin = systemDefaultVirtual ?
                DestinationOrigin.LOCAL :
                DestinationOrigin.CROS;
            // 
            this.systemDefaultDestinationKey_ =
                createDestinationKey(systemDefaultDestinationId, systemDefaultOrigin);
            this.typesToSearch_.add(systemDefaultType);
        }
        this.recentDestinationKeys_ = recentDestinations.map(destination => createRecentDestinationKey(destination));
        for (const recent of recentDestinations) {
            this.typesToSearch_.add(this.getPrinterTypeForRecentDestination_(recent));
        }
        this.autoSelectMatchingDestination_ = this.convertToDestinationMatch_(serializedDefaultDestinationSelectionRulesStr);
        if (this.autoSelectMatchingDestination_) {
            this.typesToSearch_.add(PrinterType.EXTENSION_PRINTER);
            this.typesToSearch_.add(PrinterType.LOCAL_PRINTER);
        }
        this.pdfPrinterEnabled_ = !pdfPrinterDisabled;
        this.createLocalPdfPrintDestination_();
        // 
        if (!saveToDriveDisabled) {
            this.createLocalDrivePrintDestination_();
        }
        // 
        // Nothing recent, no system default ==> try to get a fallback printer as
        // destinationsInserted_ may never be called.
        if (this.typesToSearch_.size === 0) {
            this.tryToSelectInitialDestination_();
            // 
            // Start observing local printers if there is no attempt to load
            // destinations.
            this.observeLocalPrinters_();
            // 
            return;
        }
        for (const printerType of this.typesToSearch_) {
            this.startLoadDestinations_(printerType);
        }
        // Start a 10s timeout so that we never hang forever.
        window.setTimeout(() => {
            this.tryToSelectInitialDestination_(true);
        }, 10000);
    }
    /**
     * @param timeoutExpired Whether the select timeout is expired.
     *     Defaults to false.
     */
    tryToSelectInitialDestination_(timeoutExpired = false) {
        if (this.initialDestinationSelected_) {
            return;
        }
        const success = this.selectInitialDestination_(timeoutExpired);
        if (!success && !this.isPrintDestinationSearchInProgress &&
            this.typesToSearch_.size === 0) {
            // No destinations
            this.dispatchEvent(new CustomEvent(DestinationStoreEventType.ERROR, { detail: DestinationErrorType.NO_DESTINATIONS }));
        }
        this.initialDestinationSelected_ = success;
    }
    selectDefaultDestination() {
        if (this.tryToSelectDestinationByKey_(this.systemDefaultDestinationKey_)) {
            return;
        }
        this.selectFinalFallbackDestination_();
    }
    /**
     * Called when destinations are added to the store when the initial
     * destination has not yet been set. Selects the initial destination based on
     * relevant policies, recent printers, and system default.
     * @param timeoutExpired Whether the initial timeout has expired.
     * @return Whether an initial destination was successfully selected.
     */
    selectInitialDestination_(timeoutExpired) {
        const searchInProgress = this.typesToSearch_.size !== 0 && !timeoutExpired;
        // System default printer policy takes priority.
        if (this.useSystemDefaultAsDefault_) {
            if (this.tryToSelectDestinationByKey_(this.systemDefaultDestinationKey_)) {
                return true;
            }
            // If search is still in progress, wait. The printer might come in a later
            // batch of destinations.
            if (searchInProgress) {
                return false;
            }
        }
        // Check recent destinations. If all the printers have loaded, check for all
        // of them. Otherwise, just look at the most recent.
        for (const key of this.recentDestinationKeys_) {
            if (this.tryToSelectDestinationByKey_(key)) {
                return true;
            }
            else if (searchInProgress) {
                return false;
            }
        }
        // Try the default destination rules, if they exist.
        if (this.autoSelectMatchingDestination_) {
            for (const destination of this.destinations_) {
                if (this.autoSelectMatchingDestination_.match(destination)) {
                    this.selectDestination(destination);
                    return true;
                }
            }
            // If search is still in progress, wait for other possible matching
            // printers.
            if (searchInProgress) {
                return false;
            }
        }
        // If there either aren't any recent printers or rules, or destinations are
        // all loaded and none could be found, try the system default.
        if (this.tryToSelectDestinationByKey_(this.systemDefaultDestinationKey_)) {
            return true;
        }
        if (searchInProgress) {
            return false;
        }
        // Everything's loaded, but we couldn't find either the system default, a
        // match for the selection rules, or a recent printer. Fallback to Save
        // as PDF, or the first printer to load (if in kiosk mode).
        if (this.selectFinalFallbackDestination_()) {
            return true;
        }
        return false;
    }
    /**
     * @param key The destination key to try to select.
     * @return Whether the destination was found and selected.
     */
    tryToSelectDestinationByKey_(key) {
        const candidate = this.destinationMap_.get(key);
        if (candidate) {
            this.selectDestination(candidate);
            return true;
        }
        return false;
    }
    /** Removes all events being tracked from the tracker. */
    resetTracker() {
        this.tracker_.removeAll();
    }
    // 
    /**
     * Attempts to find the EULA URL of the the destination ID.
     */
    fetchEulaUrl(destinationId) {
        this.nativeLayerCros_.getEulaUrl(destinationId).then(response => {
            // Check that the currently selected destination ID still matches the
            // destination ID we used to fetch the EULA URL.
            if (this.selectedDestination_ &&
                destinationId === this.selectedDestination_.id) {
                this.dispatchEvent(new CustomEvent(DestinationStoreEventType.DESTINATION_EULA_READY, { detail: response }));
            }
        });
    }
    /**
     * Reloads all local printers.
     */
    reloadLocalPrinters() {
        return this.nativeLayer_.getPrinters(PrinterType.LOCAL_PRINTER);
    }
    // 
    /**
     * @return Creates rules matching previously selected destination.
     */
    convertToDestinationMatch_(serializedDefaultDestinationSelectionRulesStr) {
        let matchRules = null;
        try {
            if (serializedDefaultDestinationSelectionRulesStr) {
                matchRules = JSON.parse(serializedDefaultDestinationSelectionRulesStr);
            }
        }
        catch (e) {
            console.warn('Failed to parse defaultDestinationSelectionRules: ' + e);
        }
        if (!matchRules) {
            return null;
        }
        const isLocal = !matchRules.kind || matchRules.kind === 'local';
        if (!isLocal) {
            console.warn('Unsupported type: "' + matchRules.kind + '"');
            return null;
        }
        let idRegExp = null;
        try {
            if (matchRules.idPattern) {
                idRegExp = new RegExp(matchRules.idPattern || '.*');
            }
        }
        catch (e) {
            console.warn('Failed to parse regexp for "id": ' + e);
        }
        let displayNameRegExp = null;
        try {
            if (matchRules.namePattern) {
                displayNameRegExp = new RegExp(matchRules.namePattern || '.*');
            }
        }
        catch (e) {
            console.warn('Failed to parse regexp for "name": ' + e);
        }
        return new DestinationMatch(idRegExp, displayNameRegExp);
    }
    /**
     * This function is only invoked when the user selects a new destination via
     * the UI. Programmatic selection of a destination should not use this
     * function.
     * @param Key identifying the destination to select
     */
    selectDestinationByKey(key) {
        const success = this.tryToSelectDestinationByKey_(key);
        assert(success);
        // 
        if (success && this.selectedDestination_ &&
            this.selectedDestination_.type !== PrinterType.PDF_PRINTER) {
            this.selectedDestination_.printerManuallySelected = true;
        }
        // 
    }
    /**
     * @param destination Destination to select.
     * @param refreshDestination Set to true to allow the currently selected
     *          destination to be re-selected.
     */
    selectDestination(destination, refreshDestination = false) {
        // 
        // 
        // Do not re-select the same destination unless explicitly requesting it to
        // refetch the capabilities and reload the preview.
        if (destination === this.selectedDestination_ && !refreshDestination) {
            return;
        }
        // 
        if (destination === null) {
            this.selectedDestination_ = null;
            this.dispatchEvent(new CustomEvent(DestinationStoreEventType.DESTINATION_SELECT));
            return;
        }
        // 
        assert(!destination.isProvisional, 'Unable to select provisonal destinations');
        // 
        // Update and persist selected destination.
        this.selectedDestination_ = destination;
        // Notify about selected destination change.
        this.dispatchEvent(new CustomEvent(DestinationStoreEventType.DESTINATION_SELECT));
        // Request destination capabilities from backend, since they are not
        // known yet.
        if (destination.capabilities === null) {
            this.nativeLayer_.getPrinterCapabilities(destination.id, destination.type)
                .then((caps) => this.onCapabilitiesSet_(destination.origin, destination.id, caps), () => this.onGetCapabilitiesFail_(destination.origin, destination.id));
        }
        else {
            this.sendSelectedDestinationUpdateEvent_();
        }
    }
    // 
    /**
     * Attempt to resolve the capabilities for a Chrome OS printer.
     */
    resolveCrosDestination(destination) {
        assert(destination.origin === DestinationOrigin.CROS);
        return this.nativeLayerCros_.setupPrinter(destination.id);
    }
    /**
     * Attempts to resolve a provisional destination.
     * @param Provisional destination that should be resolved.
     */
    resolveProvisionalDestination(destination) {
        assert(destination.provisionalType ===
            DestinationProvisionalType.NEEDS_USB_PERMISSION, 'Provisional type cannot be resolved.');
        return this.nativeLayerCros_.grantExtensionPrinterAccess(destination.id)
            .then(destinationInfo => {
            /**
             * Removes the destination from the store and replaces it with a
             * destination created from the resolved destination properties,
             * if any are reported. Then returns the new destination.
             */
            this.removeProvisionalDestination_(destination.id);
            const parsedDestination = parseExtensionDestination(destinationInfo);
            this.insertIntoStore_(parsedDestination);
            return parsedDestination;
        }, () => {
            /**
             * The provisional destination is removed from the store and
             * null is returned.
             */
            this.removeProvisionalDestination_(destination.id);
            return null;
        });
    }
    // 
    /**
     * Selects the Save as PDF fallback if it is available. If not, selects the
     * first destination if it exists.
     * @return Whether a final destination could be found.
     */
    selectFinalFallbackDestination_() {
        // Save as PDF should always exist if it is enabled.
        if (this.pdfPrinterEnabled_) {
            const destination = this.destinationMap_.get(PDF_DESTINATION_KEY);
            assert(destination);
            this.selectDestination(destination);
            return true;
        }
        // Try selecting the first destination if there is at least one
        // destination already loaded.
        if (this.destinations_.length > 0) {
            this.selectDestination(this.destinations_[0]);
            return true;
        }
        // Trigger a load of all destination types, to try to select the first one.
        this.startLoadAllDestinations();
        return false;
    }
    /**
     * Initiates loading of destinations.
     * @param type The type of destinations to load.
     */
    startLoadDestinations_(type) {
        if (this.destinationSearchStatus_.get(type) ===
            DestinationStorePrinterSearchStatus.DONE) {
            return;
        }
        this.destinationSearchStatus_.set(type, DestinationStorePrinterSearchStatus.SEARCHING);
        this.nativeLayer_.getPrinters(type).then(() => this.onDestinationSearchDone_(type));
    }
    /** Initiates loading of all known destination types. */
    startLoadAllDestinations() {
        // Printer types that need to be retrieved from the handler.
        const types = [
            PrinterType.EXTENSION_PRINTER,
            PrinterType.LOCAL_PRINTER,
        ];
        for (const printerType of types) {
            this.startLoadDestinations_(printerType);
        }
    }
    /**
     * @return The destination matching the key, if it exists.
     */
    getDestinationByKey(key) {
        return this.destinationMap_.get(key);
    }
    // 
    /**
     * Removes the provisional destination with ID |provisionalId| from
     * |destinationMap_| and |destinations_|.
     */
    removeProvisionalDestination_(provisionalId) {
        this.destinations_ = this.destinations_.filter(el => {
            if (el.id === provisionalId) {
                this.destinationMap_.delete(el.key);
                return false;
            }
            return true;
        });
    }
    // 
    /**
     * Inserts {@code destination} to the data store and dispatches a
     * DESTINATIONS_INSERTED event.
     */
    insertDestination_(destination) {
        if (this.insertIntoStore_(destination)) {
            this.destinationsInserted_();
        }
    }
    /**
     * Inserts multiple {@code destinations} to the data store and dispatches
     * single DESTINATIONS_INSERTED event.
     */
    insertDestinations_(destinations) {
        let inserted = false;
        destinations.forEach(destination => {
            if (destination) {
                inserted = this.insertIntoStore_(destination) || inserted;
            }
        });
        if (inserted) {
            this.destinationsInserted_();
        }
    }
    /**
     * Dispatches DESTINATIONS_INSERTED event. In auto select mode, tries to
     * update selected destination to match
     * {@code autoSelectMatchingDestination_}.
     */
    destinationsInserted_() {
        this.dispatchEvent(new CustomEvent(DestinationStoreEventType.DESTINATIONS_INSERTED));
        this.tryToSelectInitialDestination_();
    }
    /**
     * Sends SELECTED_DESTINATION_CAPABILITIES_READY event if the destination
     * is supported, or ERROR otherwise of with error type UNSUPPORTED.
     */
    sendSelectedDestinationUpdateEvent_() {
        this.dispatchEvent(new CustomEvent(DestinationStoreEventType.SELECTED_DESTINATION_CAPABILITIES_READY));
    }
    /**
     * Updates an existing print destination with capabilities and display name
     * information. If the destination doesn't already exist, it will be added.
     */
    updateDestination_(destination) {
        assert(destination.constructor !== Array, 'Single printer expected');
        assert(destination.capabilities);
        destination.capabilities = localizeCapabilities(destination.capabilities);
        if (destination.type !== PrinterType.LOCAL_PRINTER) {
            destination.capabilities = sortMediaSizes(destination.capabilities);
        }
        const existingDestination = this.destinationMap_.get(destination.key);
        if (existingDestination !== undefined) {
            existingDestination.capabilities = destination.capabilities;
        }
        else {
            this.insertDestination_(destination);
        }
        if (this.selectedDestination_ &&
            (existingDestination === this.selectedDestination_ ||
                destination === this.selectedDestination_)) {
            this.sendSelectedDestinationUpdateEvent_();
        }
    }
    /**
     * Inserts a destination into the store without dispatching any events.
     * @return Whether the inserted destination was not already in the store.
     */
    insertIntoStore_(destination) {
        const key = destination.key;
        const existingDestination = this.destinationMap_.get(key);
        if (existingDestination === undefined) {
            this.destinations_.push(destination);
            this.destinationMap_.set(key, destination);
            return true;
        }
        return false;
    }
    /**
     * Creates a local PDF print destination.
     */
    createLocalPdfPrintDestination_() {
        if (this.pdfPrinterEnabled_) {
            this.insertDestination_(new Destination(GooglePromotedDestinationId.SAVE_AS_PDF, DestinationOrigin.LOCAL, loadTimeData.getString('printToPDF')));
        }
        if (this.typesToSearch_.has(PrinterType.PDF_PRINTER)) {
            this.typesToSearch_.delete(PrinterType.PDF_PRINTER);
        }
    }
    // 
    /**
     * Creates a local Drive print destination.
     */
    createLocalDrivePrintDestination_() {
        this.insertDestination_(new Destination(GooglePromotedDestinationId.SAVE_TO_DRIVE_CROS, DestinationOrigin.LOCAL, loadTimeData.getString('printToGoogleDrive')));
    }
    // 
    /**
     * Called when destination search is complete for some type of printer.
     * @param type The type of printers that are done being retrieved.
     */
    onDestinationSearchDone_(type) {
        this.destinationSearchStatus_.set(type, DestinationStorePrinterSearchStatus.DONE);
        this.dispatchEvent(new CustomEvent(DestinationStoreEventType.DESTINATION_SEARCH_DONE));
        if (this.typesToSearch_.has(type)) {
            this.typesToSearch_.delete(type);
            this.tryToSelectInitialDestination_();
        }
        else if (this.typesToSearch_.size === 0) {
            this.tryToSelectInitialDestination_();
        }
        // 
        this.observeLocalPrinters_();
        // 
    }
    /**
     * Called when the native layer retrieves the capabilities for the selected
     * local destination. Updates the destination with new capabilities if the
     * destination already exists, otherwise it creates a new destination and
     * then updates its capabilities.
     * @param origin The origin of the print destination.
     * @param id The id of the print destination.
     * @param settingsInfo Contains the capabilities of the print destination,
     *     and information about the destination except in the case of extension
     *     printers.
     */
    onCapabilitiesSet_(origin, id, settingsInfo) {
        let dest = null;
        const key = createDestinationKey(id, origin);
        dest = this.destinationMap_.get(key);
        if (!dest) {
            // Ignore unrecognized extension printers
            if (!settingsInfo.printer) {
                assert(origin === DestinationOrigin.EXTENSION);
                return;
            }
            assert(settingsInfo.printer);
            // PDF, CROS, and LOCAL printers all get parsed the same way.
            const typeToParse = origin === DestinationOrigin.EXTENSION ?
                PrinterType.EXTENSION_PRINTER :
                PrinterType.LOCAL_PRINTER;
            dest = parseDestination(typeToParse, settingsInfo.printer);
        }
        if (dest) {
            if (dest.type !== PrinterType.EXTENSION_PRINTER && dest.capabilities) {
                // If capabilities are already set for this destination ignore new
                // results. This prevents custom margins from being cleared as long
                // as the user does not change to a new non-recent destination.
                return;
            }
            dest.capabilities = settingsInfo.capabilities;
            this.updateDestination_(dest);
            // 
            // Start the fetch for the PPD EULA URL.
            this.fetchEulaUrl(dest.id);
            // 
        }
    }
    /**
     * Called when a request to get a local destination's print capabilities
     * fails. If the destination is the initial destination, auto-select another
     * destination instead.
     * @param _origin The origin type of the failed destination.
     * @param destinationId The destination ID that failed.
     */
    onGetCapabilitiesFail_(_origin, destinationId) {
        console.warn('Failed to get print capabilities for printer ' + destinationId);
        if (this.selectedDestination_ &&
            this.selectedDestination_.id === destinationId) {
            this.dispatchEvent(new CustomEvent(DestinationStoreEventType.ERROR, { detail: DestinationErrorType.INVALID }));
        }
    }
    /**
     * Called when a printer or printers are detected after sending getPrinters
     * from the native layer.
     * @param type The type of printer(s) added.
     * @param printers Information about the printers that have been retrieved.
     */
    onPrintersAdded_(type, printers) {
        this.insertDestinations_(printers.map((printer) => parseDestination(type, printer)));
    }
    // 
    observeLocalPrinters_() {
        if (!loadTimeData.getBoolean('isLocalPrinterObservingEnabled')) {
            return;
        }
        this.nativeLayerCros_.observeLocalPrinters().then((printers) => this.onLocalPrintersUpdated_(printers));
    }
    /**
     * Inserts any new printers retrieved from the 'local-printers-updated' event.
     * @param printerType The type of printer(s) added.
     * @param printers Information about the printers that have been retrieved.
     */
    onLocalPrintersUpdated_(printers) {
        if (!printers) {
            return;
        }
        // The logic in insertDestinations_() ensures only new destinations are
        // added to the store.
        this.insertDestinations_(printers.map(printer => parseDestination(PrinterType.LOCAL_PRINTER, printer)));
        // Parse the printer status from the LocalDestinationInfo object.
        for (const printer of printers) {
            this.parsePrinterStatus(printer);
        }
    }
    // Updates the printer status for an existing destination then fires an event
    // for updating printer status icons and text.
    parsePrinterStatus(destinationInfo) {
        const printerStatus = destinationInfo.printerStatus;
        if (!printerStatus || !printerStatus.printerId) {
            return;
        }
        const destinationKey = createDestinationKey(destinationInfo.deviceName, DestinationOrigin.CROS);
        const existingDestination = this.destinationMap_.get(destinationKey);
        if (existingDestination === undefined) {
            return;
        }
        // `nowOnline` captures the event where a previously offline printer
        // becomes reachable. This will be used to trigger the destination to
        // reload its preview.
        const previousStatusReason = existingDestination.printerStatusReason;
        const nextStatusReason = getStatusReasonFromPrinterStatus(printerStatus);
        const nowOnline = previousStatusReason === PrinterStatusReason.PRINTER_UNREACHABLE &&
            (nextStatusReason !== PrinterStatusReason.PRINTER_UNREACHABLE &&
                nextStatusReason !== PrinterStatusReason.UNKNOWN_REASON);
        existingDestination.printerStatusReason = nextStatusReason;
        this.dispatchEvent(new CustomEvent(DestinationStoreEventType.DESTINATION_PRINTER_STATUS_UPDATE, {
            detail: {
                destinationKey: destinationKey,
                nowOnline: nowOnline,
            },
        }));
    }
}
/**
 * Human readable names for media sizes in the cloud print CDD.
 * https://developers.google.com/cloud-print/docs/cdd
 */
const MEDIA_DISPLAY_NAMES_ = {
    'ISO_2A0': '2A0',
    'ISO_A0': 'A0',
    'ISO_A0X3': 'A0x3',
    'ISO_A1': 'A1',
    'ISO_A10': 'A10',
    'ISO_A1X3': 'A1x3',
    'ISO_A1X4': 'A1x4',
    'ISO_A2': 'A2',
    'ISO_A2X3': 'A2x3',
    'ISO_A2X4': 'A2x4',
    'ISO_A2X5': 'A2x5',
    'ISO_A3': 'A3',
    'ISO_A3X3': 'A3x3',
    'ISO_A3X4': 'A3x4',
    'ISO_A3X5': 'A3x5',
    'ISO_A3X6': 'A3x6',
    'ISO_A3X7': 'A3x7',
    'ISO_A3_EXTRA': 'A3 Extra',
    'ISO_A4': 'A4',
    'ISO_A4X3': 'A4x3',
    'ISO_A4X4': 'A4x4',
    'ISO_A4X5': 'A4x5',
    'ISO_A4X6': 'A4x6',
    'ISO_A4X7': 'A4x7',
    'ISO_A4X8': 'A4x8',
    'ISO_A4X9': 'A4x9',
    'ISO_A4_EXTRA': 'A4 Extra',
    'ISO_A4_TAB': 'A4 Tab',
    'ISO_A5': 'A5',
    'ISO_A5_EXTRA': 'A5 Extra',
    'ISO_A6': 'A6',
    'ISO_A7': 'A7',
    'ISO_A8': 'A8',
    'ISO_A9': 'A9',
    'ISO_B0': 'B0',
    'ISO_B1': 'B1',
    'ISO_B10': 'B10',
    'ISO_B2': 'B2',
    'ISO_B3': 'B3',
    'ISO_B4': 'B4',
    'ISO_B5': 'B5',
    'ISO_B5_EXTRA': 'B5 Extra',
    'ISO_B6': 'B6',
    'ISO_B6C4': 'B6C4',
    'ISO_B7': 'B7',
    'ISO_B8': 'B8',
    'ISO_B9': 'B9',
    'ISO_C0': 'C0',
    'ISO_C1': 'C1',
    'ISO_C10': 'C10',
    'ISO_C2': 'C2',
    'ISO_C3': 'C3',
    'ISO_C4': 'C4',
    'ISO_C5': 'C5',
    'ISO_C6': 'C6',
    'ISO_C6C5': 'C6C5',
    'ISO_C7': 'C7',
    'ISO_C7C6': 'C7C6',
    'ISO_C8': 'C8',
    'ISO_C9': 'C9',
    'ISO_DL': 'Envelope DL',
    'ISO_RA0': 'RA0',
    'ISO_RA1': 'RA1',
    'ISO_RA2': 'RA2',
    'ISO_SRA0': 'SRA0',
    'ISO_SRA1': 'SRA1',
    'ISO_SRA2': 'SRA2',
    'JIS_B0': 'B0 (JIS)',
    'JIS_B1': 'B1 (JIS)',
    'JIS_B10': 'B10 (JIS)',
    'JIS_B2': 'B2 (JIS)',
    'JIS_B3': 'B3 (JIS)',
    'JIS_B4': 'B4 (JIS)',
    'JIS_B5': 'B5 (JIS)',
    'JIS_B6': 'B6 (JIS)',
    'JIS_B7': 'B7 (JIS)',
    'JIS_B8': 'B8 (JIS)',
    'JIS_B9': 'B9 (JIS)',
    'JIS_EXEC': 'Executive (JIS)',
    'JPN_CHOU2': 'Choukei 2',
    'JPN_CHOU3': 'Choukei 3',
    'JPN_CHOU4': 'Choukei 4',
    'JPN_HAGAKI': 'Hagaki',
    'JPN_KAHU': 'Kahu Envelope',
    'JPN_KAKU2': 'Kaku 2',
    'JPN_OUFUKU': 'Oufuku Hagaki',
    'JPN_YOU4': 'You 4',
    'NA_10X11': '10x11',
    'NA_10X13': '10x13',
    'NA_10X14': '10x14',
    'NA_10X15': '10x15',
    'NA_11X12': '11x12',
    'NA_11X15': '11x15',
    'NA_12X19': '12x19',
    'NA_5X7': '5x7',
    'NA_6X9': '6x9',
    'NA_7X9': '7x9',
    'NA_9X11': '9x11',
    'NA_A2': 'A2',
    'NA_ARCH_A': 'Arch A',
    'NA_ARCH_B': 'Arch B',
    'NA_ARCH_C': 'Arch C',
    'NA_ARCH_D': 'Arch D',
    'NA_ARCH_E': 'Arch E',
    'NA_ASME_F': 'ASME F',
    'NA_B_PLUS': 'B-plus',
    'NA_C': 'C',
    'NA_C5': 'C5',
    'NA_D': 'D',
    'NA_E': 'E',
    'NA_EDP': 'EDP',
    'NA_EUR_EDP': 'European EDP',
    'NA_EXECUTIVE': 'Executive',
    'NA_F': 'F',
    'NA_FANFOLD_EUR': 'FanFold European',
    'NA_FANFOLD_US': 'FanFold US',
    'NA_FOOLSCAP': 'FanFold German Legal',
    'NA_GOVT_LEGAL': '8x13',
    'NA_GOVT_LETTER': '8x10',
    'NA_INDEX_3X5': 'Index 3x5',
    'NA_INDEX_4X6': 'Index 4x6',
    'NA_INDEX_4X6_EXT': 'Index 4x6 ext',
    'NA_INDEX_5X8': '5x8',
    'NA_INVOICE': 'Invoice',
    'NA_LEDGER': 'Tabloid', // Ledger in portrait is called Tabloid.
    'NA_LEGAL': 'Legal',
    'NA_LEGAL_EXTRA': 'Legal extra',
    'NA_LETTER': 'Letter',
    'NA_LETTER_EXTRA': 'Letter extra',
    'NA_LETTER_PLUS': 'Letter plus',
    'NA_MONARCH': 'Monarch',
    'NA_NUMBER_10': 'Envelope #10',
    'NA_NUMBER_11': 'Envelope #11',
    'NA_NUMBER_12': 'Envelope #12',
    'NA_NUMBER_14': 'Envelope #14',
    'NA_NUMBER_9': 'Envelope #9',
    'NA_PERSONAL': 'Personal',
    'NA_QUARTO': 'Quarto',
    'NA_SUPER_A': 'Super A',
    'NA_SUPER_B': 'Super B',
    'NA_WIDE_FORMAT': 'Wide format',
    'OM_DAI_PA_KAI': 'Dai-pa-kai',
    'OM_FOLIO': 'Folio',
    'OM_FOLIO_SP': 'Folio SP',
    'OM_INVITE': 'Invite Envelope',
    'OM_ITALIAN': 'Italian Envelope',
    'OM_JUURO_KU_KAI': 'Juuro-ku-kai',
    'OM_LARGE_PHOTO': 'Large photo',
    'OM_OFICIO': 'Oficio',
    'OM_PA_KAI': 'Pa-kai',
    'OM_POSTFIX': 'Postfix Envelope',
    'OM_SMALL_PHOTO': 'Small photo',
    'PRC_1': 'prc1 Envelope',
    'PRC_10': 'prc10 Envelope',
    'PRC_16K': 'prc 16k',
    'PRC_2': 'prc2 Envelope',
    'PRC_3': 'prc3 Envelope',
    'PRC_32K': 'prc 32k',
    'PRC_4': 'prc4 Envelope',
    'PRC_5': 'prc5 Envelope',
    'PRC_6': 'prc6 Envelope',
    'PRC_7': 'prc7 Envelope',
    'PRC_8': 'prc8 Envelope',
    'ROC_16K': 'ROC 16K',
    'ROC_8K': 'ROC 8k',
};

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Enumeration of the orientations of margins.
 */
var CustomMarginsOrientation;
(function (CustomMarginsOrientation) {
    CustomMarginsOrientation["TOP"] = "top";
    CustomMarginsOrientation["RIGHT"] = "right";
    CustomMarginsOrientation["BOTTOM"] = "bottom";
    CustomMarginsOrientation["LEFT"] = "left";
})(CustomMarginsOrientation || (CustomMarginsOrientation = {}));
/**
 * Must be kept in sync with the C++ MarginType enum in
 * printing/print_job_constants.h.
 */
var MarginsType;
(function (MarginsType) {
    MarginsType[MarginsType["DEFAULT"] = 0] = "DEFAULT";
    MarginsType[MarginsType["NO_MARGINS"] = 1] = "NO_MARGINS";
    MarginsType[MarginsType["MINIMUM"] = 2] = "MINIMUM";
    MarginsType[MarginsType["CUSTOM"] = 3] = "CUSTOM";
})(MarginsType || (MarginsType = {}));
class Margins {
    /**
     * Creates a Margins object that holds four margin values in points.
     */
    constructor(top, right, bottom, left) {
        /**
         * Backing store for the margin values in points. The numbers are stored as
         * integer values, because that is what the C++ `printing::PageMargins` class
         * expects.
         */
        this.value_ = { top: 0, bottom: 0, left: 0, right: 0 };
        this.value_ = {
            top: Math.round(top),
            right: Math.round(right),
            bottom: Math.round(bottom),
            left: Math.round(left),
        };
    }
    /**
     * @param orientation Specifies the margin value to get.
     * @return Value of the margin of the given orientation.
     */
    get(orientation) {
        return this.value_[orientation];
    }
    /**
     * @param orientation Specifies the margin to set.
     * @param value Updated value of the margin in points to modify.
     * @return A new copy of |this| with the modification made to the specified
     *     margin.
     */
    set(orientation, value) {
        const newValue = this.clone_();
        newValue[orientation] = value;
        return new Margins(newValue[CustomMarginsOrientation.TOP], newValue[CustomMarginsOrientation.RIGHT], newValue[CustomMarginsOrientation.BOTTOM], newValue[CustomMarginsOrientation.LEFT]);
    }
    /**
     * @param other The other margins object to compare against.
     * @return Whether this margins object is equal to another.
     */
    equals(other) {
        if (other === null) {
            return false;
        }
        for (const key in this.value_) {
            const orientation = key;
            if (this.value_[orientation] !== other.value_[orientation]) {
                return false;
            }
        }
        return true;
    }
    /** @return A serialized representation of the margins. */
    serialize() {
        return this.clone_();
    }
    clone_() {
        const clone = { top: 0, bottom: 0, left: 0, right: 0 };
        for (const o in this.value_) {
            const orientation = o;
            clone[orientation] = this.value_[orientation];
        }
        return clone;
    }
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Enumeration of measurement unit types.
 */
var MeasurementSystemUnitType;
(function (MeasurementSystemUnitType) {
    MeasurementSystemUnitType[MeasurementSystemUnitType["METRIC"] = 0] = "METRIC";
    MeasurementSystemUnitType[MeasurementSystemUnitType["IMPERIAL"] = 1] = "IMPERIAL";
})(MeasurementSystemUnitType || (MeasurementSystemUnitType = {}));
class MeasurementSystem {
    /**
     * Measurement system of the print preview. Used to parse and serialize
     * point measurements into the system's local units (e.g. millimeters,
     * inches).
     * @param thousandsDelimiter Delimiter between thousands digits.
     * @param decimalDelimiter Delimiter between integers and decimals.
     * @param unitType Measurement unit type of the system.
     */
    constructor(thousandsDelimiter, decimalDelimiter, unitType) {
        this.thousandsDelimiter_ = thousandsDelimiter || ',';
        this.decimalDelimiter_ = decimalDelimiter || '.';
        assert(measurementSystemPrefs.has(unitType));
        this.measurementSystemPrefs_ = measurementSystemPrefs.get(unitType);
    }
    get unitSymbol() {
        return this.measurementSystemPrefs_.unitSymbol;
    }
    get thousandsDelimiter() {
        return this.thousandsDelimiter_;
    }
    get decimalDelimiter() {
        return this.decimalDelimiter_;
    }
    /**
     * Rounds a value in the local system's units to the appropriate precision.
     */
    roundValue(value) {
        const precision = this.measurementSystemPrefs_.precision;
        const roundedValue = Math.round(value / precision) * precision;
        // Truncate
        return +roundedValue.toFixed(this.measurementSystemPrefs_.decimalPlaces);
    }
    /**
     * @param pts Value in points to convert to local units.
     * @return Value in local units.
     */
    convertFromPoints(pts) {
        return pts / this.measurementSystemPrefs_.ptsPerUnit;
    }
    /**
     * @param localUnits Value in local units to convert to points.
     * @return Value in points.
     */
    convertToPoints(localUnits) {
        return localUnits * this.measurementSystemPrefs_.ptsPerUnit;
    }
}
/**
 * Maximum resolution and number of decimal places for local unit values.
 */
const measurementSystemPrefs = new Map([
    [
        MeasurementSystemUnitType.METRIC,
        {
            precision: 0.5,
            decimalPlaces: 1,
            ptsPerUnit: 72.0 / 25.4,
            unitSymbol: 'mm',
        },
    ],
    [
        MeasurementSystemUnitType.IMPERIAL,
        { precision: 0.01, decimalPlaces: 2, ptsPerUnit: 72.0, unitSymbol: '"' },
    ],
]);

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview PromiseResolver is a helper class that allows creating a
 * Promise that will be fulfilled (resolved or rejected) some time later.
 *
 * Example:
 *  const resolver = new PromiseResolver();
 *  resolver.promise.then(function(result) {
 *    console.log('resolved with', result);
 *  });
 *  ...
 *  ...
 *  resolver.resolve({hello: 'world'});
 */
class PromiseResolver {
    resolve_ = () => { };
    reject_ = () => { };
    isFulfilled_ = false;
    promise_;
    constructor() {
        this.promise_ = new Promise((resolve, reject) => {
            this.resolve_ = (resolution) => {
                resolve(resolution);
                this.isFulfilled_ = true;
            };
            this.reject_ = (reason) => {
                reject(reason);
                this.isFulfilled_ = true;
            };
        });
    }
    /** Whether this resolver has been resolved or rejected. */
    get isFulfilled() {
        return this.isFulfilled_;
    }
    get promise() {
        return this.promise_;
    }
    get resolve() {
        return this.resolve_;
    }
    get reject() {
        return this.reject_;
    }
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Must be kept in sync with the C++ ScalingType enum in
 * printing/print_job_constants.h.
 */
var ScalingType;
(function (ScalingType) {
    ScalingType[ScalingType["DEFAULT"] = 0] = "DEFAULT";
    ScalingType[ScalingType["FIT_TO_PAGE"] = 1] = "FIT_TO_PAGE";
    ScalingType[ScalingType["FIT_TO_PAPER"] = 2] = "FIT_TO_PAPER";
    ScalingType[ScalingType["CUSTOM"] = 3] = "CUSTOM";
})(ScalingType || (ScalingType = {}));

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Constant values matching printing::DuplexMode enum.
 */
var DuplexMode;
(function (DuplexMode) {
    DuplexMode[DuplexMode["SIMPLEX"] = 0] = "SIMPLEX";
    DuplexMode[DuplexMode["LONG_EDGE"] = 1] = "LONG_EDGE";
    DuplexMode[DuplexMode["SHORT_EDGE"] = 2] = "SHORT_EDGE";
    DuplexMode[DuplexMode["UNKNOWN_DUPLEX_MODE"] = -1] = "UNKNOWN_DUPLEX_MODE";
})(DuplexMode || (DuplexMode = {}));
/**
 * Values matching the types of duplex in a CDD.
 */
var DuplexType;
(function (DuplexType) {
    DuplexType["NO_DUPLEX"] = "NO_DUPLEX";
    DuplexType["LONG_EDGE"] = "LONG_EDGE";
    DuplexType["SHORT_EDGE"] = "SHORT_EDGE";
})(DuplexType || (DuplexType = {}));
let instance$1 = null;
let whenReadyResolver = new PromiseResolver();
function getInstance() {
    assert(instance$1);
    return instance$1;
}
function whenReady() {
    return whenReadyResolver.promise;
}
/**
 * Sticky setting names in alphabetical order.
 */
const STICKY_SETTING_NAMES = [
    'recentDestinations',
    'borderless',
    'collate',
    'color',
    'cssBackground',
    'customMargins',
    'dpi',
    'duplex',
    'duplexShortEdge',
    'headerFooter',
    'layout',
    'margins',
    'mediaSize',
    'mediaType',
    'scaling',
    'scalingType',
    'scalingTypePdf',
    'vendorItems',
];
// 
STICKY_SETTING_NAMES.push('pin', 'pinValue');
// 
/**
 * Minimum height of page in microns to allow headers and footers. Should
 * match the value for min_size_printer_units in printing/print_settings.cc
 * so that we do not request header/footer for margins that will be zero.
 */
const MINIMUM_HEIGHT_MICRONS = 25400;
// 
/**
 * Helper function for configurePolicySetting_(). Calculates default duplex
 * value based on allowed and default policies. Return undefined when both
 * allowed and default duplex policies are not set.
 * @param allowedMode Duplex allowed mode set by policy.
 * @param defaultMode Duplex default mode set by policy.
 */
function getDuplexDefaultValue(allowedMode, defaultMode) {
    if (allowedMode !== DuplexModeRestriction.DUPLEX) {
        return (allowedMode === undefined ||
            allowedMode === DuplexModeRestriction.UNSET) ?
            defaultMode :
            allowedMode;
    }
    // If allowedMode === DUPLEX, then we need to use defaultMode as the
    // default value if it's compliant with allowedMode. Other two-sided modes are
    // also available in this case.
    if (defaultMode === DuplexModeRestriction.SHORT_EDGE ||
        defaultMode === DuplexModeRestriction.LONG_EDGE) {
        return defaultMode;
    }
    // In this case defaultMode is either not set or non-compliant with
    // allowedMode. Note that "DUPLEX" is not a single mode, but a group of modes.
    return DuplexModeRestriction.DUPLEX;
}
/**
 * Helper function that checks whether the duplex default value set by policy
 * is supported by a printing destination.
 * @param duplexPolicyDefault Duplex value policy default.
 * @param duplexShortEdgePolicyDefault DuplexShortEdge value policy default.
 * @param caps Capabilities of a printing destination.
 */
function getDuplexPolicyDefaultValueAvailable(duplexPolicyDefault, duplexShortEdgePolicyDefault, caps) {
    // `duplexShortEdgePolicyDefault` is undefined if the default mode is set to
    // "Simplex". `duplexPolicyDefault` is defined if and only if there is a
    // default duplex policy.
    if (duplexPolicyDefault === undefined) {
        return false;
    }
    const capsHasDuplexOptions = !!caps && !!caps.duplex && !!caps.duplex.option;
    if (!capsHasDuplexOptions) {
        // There are no duplex capabilities reported by the printer.
        return false;
    }
    let defaultPolicyDuplexType = null;
    if (duplexPolicyDefault === false) {
        defaultPolicyDuplexType = DuplexType.NO_DUPLEX;
    }
    else if (duplexShortEdgePolicyDefault === true) {
        defaultPolicyDuplexType = DuplexType.SHORT_EDGE;
    }
    else {
        defaultPolicyDuplexType = DuplexType.LONG_EDGE;
    }
    return caps.duplex.option.some(o => o.type === defaultPolicyDuplexType);
}
// 
class PrintPreviewModelElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.initialized_ = false;
        this.stickySettings_ = null;
        this.policySettings_ = null;
        this.lastDestinationCapabilities_ = null;
    }
    static get is() {
        return 'print-preview-model';
    }
    static get template() {
        return null;
    }
    static get properties() {
        return {
            /**
             * Object containing current settings of Print Preview, for use by Polymer
             * controls.
             * Initialize all settings to available so that more settings always stays
             * in a collapsed state during startup, when document information and
             * printer capabilities may arrive at slightly different times.
             */
            settings: {
                type: Object,
                notify: true,
                value() {
                    return {
                        pages: {
                            value: [1],
                            unavailableValue: [],
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: '',
                            updatesPreview: false,
                        },
                        copies: {
                            value: 1,
                            unavailableValue: 1,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: '',
                            updatesPreview: false,
                        },
                        collate: {
                            value: true,
                            unavailableValue: false,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'isCollateEnabled',
                            updatesPreview: false,
                        },
                        layout: {
                            value: false, /* portrait */
                            unavailableValue: false,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'isLandscapeEnabled',
                            updatesPreview: true,
                        },
                        color: {
                            value: true, /* color */
                            unavailableValue: false,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'isColorEnabled',
                            updatesPreview: true,
                        },
                        mediaSize: {
                            value: {},
                            unavailableValue: {
                                width_microns: 215900,
                                height_microns: 279400,
                                imageable_area_left_microns: 0,
                                imageable_area_bottom_microns: 0,
                                imageable_area_right_microns: 215900,
                                imageable_area_top_microns: 279400,
                            },
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'mediaSize',
                            updatesPreview: true,
                        },
                        borderless: {
                            value: false,
                            unavailableValue: false,
                            valid: true,
                            available: false,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'borderless',
                            updatesPreview: true,
                        },
                        mediaType: {
                            value: '',
                            unavailableValue: '',
                            valid: true,
                            available: false,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'mediaType',
                            updatesPreview: false,
                        },
                        margins: {
                            value: MarginsType.DEFAULT,
                            unavailableValue: MarginsType.DEFAULT,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'marginsType',
                            updatesPreview: true,
                        },
                        customMargins: {
                            value: {},
                            unavailableValue: {},
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'customMargins',
                            updatesPreview: true,
                        },
                        dpi: {
                            value: {},
                            unavailableValue: {},
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'dpi',
                            updatesPreview: false,
                        },
                        scaling: {
                            value: '100',
                            unavailableValue: '100',
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'scaling',
                            updatesPreview: true,
                        },
                        scalingType: {
                            value: ScalingType.DEFAULT,
                            unavailableValue: ScalingType.DEFAULT,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'scalingType',
                            updatesPreview: true,
                        },
                        scalingTypePdf: {
                            value: ScalingType.DEFAULT,
                            unavailableValue: ScalingType.DEFAULT,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'scalingTypePdf',
                            updatesPreview: true,
                        },
                        duplex: {
                            value: true,
                            unavailableValue: false,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'isDuplexEnabled',
                            updatesPreview: false,
                        },
                        duplexShortEdge: {
                            value: false,
                            unavailableValue: false,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'isDuplexShortEdge',
                            updatesPreview: false,
                        },
                        cssBackground: {
                            value: false,
                            unavailableValue: false,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'isCssBackgroundEnabled',
                            updatesPreview: true,
                        },
                        selectionOnly: {
                            value: false,
                            unavailableValue: false,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: '',
                            updatesPreview: true,
                        },
                        headerFooter: {
                            value: true,
                            unavailableValue: false,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'isHeaderFooterEnabled',
                            updatesPreview: true,
                        },
                        rasterize: {
                            value: false,
                            unavailableValue: false,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: '',
                            updatesPreview: true,
                        },
                        vendorItems: {
                            value: {},
                            unavailableValue: {},
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'vendorOptions',
                            updatesPreview: false,
                        },
                        pagesPerSheet: {
                            value: 1,
                            unavailableValue: 1,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: '',
                            updatesPreview: true,
                        },
                        // This does not represent a real setting value, and is used only to
                        // expose the availability of the other options settings section.
                        otherOptions: {
                            value: null,
                            unavailableValue: null,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: '',
                            updatesPreview: false,
                        },
                        // This does not represent a real settings value, but is used to
                        // propagate the correctly formatted ranges for print tickets.
                        ranges: {
                            value: [],
                            unavailableValue: [],
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: '',
                            updatesPreview: true,
                        },
                        recentDestinations: {
                            value: [],
                            unavailableValue: [],
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'recentDestinations',
                            updatesPreview: false,
                        },
                        // 
                        pin: {
                            value: false,
                            unavailableValue: false,
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'isPinEnabled',
                            updatesPreview: false,
                        },
                        pinValue: {
                            value: '',
                            unavailableValue: '',
                            valid: true,
                            available: true,
                            setByPolicy: false,
                            setFromUi: false,
                            key: 'pinValue',
                            updatesPreview: false,
                        },
                        // 
                    };
                },
            },
            settingsManaged: {
                type: Boolean,
                notify: true,
                value: false,
            },
            destination: Object,
            documentSettings: Object,
            margins: Object,
            pageSize: Object,
            maxSheets: {
                type: Number,
                value: 0,
                notify: true,
            },
        };
    }
    static get observers() {
        return [
            'updateSettingsFromDestination_(destination.capabilities)',
            'updateSettingsAvailabilityFromDocumentSettings_(' +
                'documentSettings.isModifiable, documentSettings.isFromArc,' +
                'documentSettings.allPagesHaveCustomSize,' +
                'documentSettings.allPagesHaveCustomOrientation,' +
                'documentSettings.hasSelection)',
            'updateHeaderFooterAvailable_(' +
                'margins, settings.margins.value, settings.mediaSize.value)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        assert(!instance$1);
        instance$1 = this;
        whenReadyResolver.resolve();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        instance$1 = null;
        whenReadyResolver = new PromiseResolver();
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    getSetting(settingName) {
        const setting = this.get(settingName, this.settings);
        assert(setting, 'Setting is missing: ' + settingName);
        return setting;
    }
    /**
     * @param settingName Name of the setting to get the value for.
     * @return The value of the setting, accounting for availability.
     */
    getSettingValue(settingName) {
        const setting = this.getSetting(settingName);
        return setting.available ? setting.value : setting.unavailableValue;
    }
    /**
     * Updates settings.settingPath to |value|. Fires a preview-setting-changed
     * event if the modification results in a change to the value returned by
     * getSettingValue().
     */
    setSettingPath_(settingPath, value) {
        const settingName = settingPath.split('.')[0];
        const setting = this.getSetting(settingName);
        const oldValue = this.getSettingValue(settingName);
        this.set(`settings.${settingPath}`, value);
        const newValue = this.getSettingValue(settingName);
        if (newValue !== oldValue && setting.updatesPreview) {
            this.fire_('preview-setting-changed');
        }
    }
    /**
     * Sets settings.settingName.value to |value|, unless updating the setting is
     * disallowed by enterprise policy. Fires preview-setting-changed and
     * sticky-setting-changed events if the update impacts the preview or requires
     * an update to sticky settings. Used for setting settings from UI elements.
     * @param settingName Name of the setting to set
     * @param value The value to set the setting to.
     * @param noSticky Whether to avoid stickying the setting. Defaults to false.
     */
    setSetting(settingName, value, noSticky) {
        const setting = this.getSetting(settingName);
        if (setting.setByPolicy) {
            return;
        }
        const fireStickyEvent = !noSticky && setting.value !== value && setting.key;
        this.setSettingPath_(`${settingName}.value`, value);
        if (!noSticky) {
            this.setSettingPath_(`${settingName}.setFromUi`, true);
        }
        if (fireStickyEvent && this.initialized_) {
            this.fire_('sticky-setting-changed', this.getStickySettings_());
        }
    }
    /**
     * @param settingName Name of the setting to set
     * @param start
     * @param end
     * @param newValue The value to add (if any).
     * @param noSticky Whether to avoid stickying the setting. Defaults to false.
     */
    setSettingSplice(settingName, start, end, newValue, noSticky) {
        const setting = this.getSetting(settingName);
        if (setting.setByPolicy) {
            return;
        }
        if (newValue) {
            this.splice(`settings.${settingName}.value`, start, end, newValue);
        }
        else {
            this.splice(`settings.${settingName}.value`, start, end);
        }
        if (!noSticky) {
            this.setSettingPath_(`${settingName}.setFromUi`, true);
        }
        if (!noSticky && setting.key && this.initialized_) {
            this.fire_('sticky-setting-changed', this.getStickySettings_());
        }
    }
    /**
     * Sets the validity of |settingName| to |valid|. If the validity is changed,
     * fires a setting-valid-changed event.
     * @param settingName Name of the setting to set
     * @param valid Whether the setting value is currently valid.
     */
    setSettingValid(settingName, valid) {
        const setting = this.getSetting(settingName);
        // Should not set the setting to invalid if it is not available, as there
        // is no way for the user to change the value in this case.
        if (!valid) {
            assert(setting.available, 'Setting is not available: ' + settingName);
        }
        const shouldFireEvent = valid !== setting.valid;
        this.set(`settings.${settingName}.valid`, valid);
        if (shouldFireEvent) {
            this.fire_('setting-valid-changed', valid);
        }
    }
    /**
     * Updates the availability of the settings sections and values of dpi and
     *     media size settings based on the destination capabilities.
     */
    updateSettingsFromDestination_() {
        if (!this.destination || !this.settings) {
            return;
        }
        if (this.destination.capabilities === this.lastDestinationCapabilities_) {
            return;
        }
        this.lastDestinationCapabilities_ = this.destination.capabilities;
        const caps = this.destination.capabilities ?
            this.destination.capabilities.printer :
            null;
        this.updateSettingsAvailabilityFromDestination_(caps);
        if (!caps) {
            return;
        }
        this.updateSettingsValues_(caps);
        this.applyPersistentCddDefaults_();
    }
    updateSettingsAvailabilityFromDestination_(caps) {
        this.setSettingPath_('copies.available', this.destination.hasCopiesCapability);
        this.setSettingPath_('collate.available', !!caps && !!caps.collate);
        this.setSettingPath_('color.available', this.destination.hasColorCapability);
        const capsHasDuplex = !!caps && !!caps.duplex && !!caps.duplex.option;
        const capsHasLongEdge = capsHasDuplex &&
            caps.duplex.option.some(o => o.type === DuplexType.LONG_EDGE);
        const capsHasShortEdge = capsHasDuplex &&
            caps.duplex.option.some(o => o.type === DuplexType.SHORT_EDGE);
        this.setSettingPath_('duplexShortEdge.available', capsHasLongEdge && capsHasShortEdge);
        this.setSettingPath_('duplex.available', (capsHasLongEdge || capsHasShortEdge) &&
            caps.duplex.option.some(o => o.type === DuplexType.NO_DUPLEX));
        this.setSettingPath_('vendorItems.available', !!caps && !!caps.vendor_capability);
        // 
        const pinSupported = !!caps && !!caps.pin && !!caps.pin.supported &&
            loadTimeData.getBoolean('isEnterpriseManaged');
        this.set('settings.pin.available', pinSupported);
        this.set('settings.pinValue.available', pinSupported);
        // 
        if (this.documentSettings) {
            this.updateSettingsAvailabilityFromDestinationAndDocumentSettings_();
        }
    }
    updateSettingsAvailabilityFromDestinationAndDocumentSettings_() {
        const isSaveAsPDF = this.destination.type === PrinterType.PDF_PRINTER;
        const knownSizeToSaveAsPdf = isSaveAsPDF &&
            (!this.documentSettings.isModifiable ||
                this.documentSettings.allPagesHaveCustomSize);
        const scalingAvailable = !knownSizeToSaveAsPdf && !this.documentSettings.isFromArc;
        this.setSettingPath_('scaling.available', scalingAvailable);
        this.setSettingPath_('scalingType.available', scalingAvailable && this.documentSettings.isModifiable);
        this.setSettingPath_('scalingTypePdf.available', scalingAvailable && !this.documentSettings.isModifiable);
        const caps = this.destination && this.destination.capabilities ?
            this.destination.capabilities.printer :
            null;
        this.setSettingPath_('mediaSize.available', !!caps && !!caps.media_size && !knownSizeToSaveAsPdf);
        this.setSettingPath_('borderless.available', this.isBorderlessAvailable_(caps));
        this.setSettingPath_('mediaType.available', loadTimeData.getBoolean('isBorderlessPrintingEnabled') && !!caps &&
            !!caps.media_type && !!caps.media_type.option &&
            caps.media_type.option.length > 1);
        this.setSettingPath_('dpi.available', !this.documentSettings.isFromArc && !!caps && !!caps.dpi &&
            !!caps.dpi.option && caps.dpi.option.length > 1);
        this.setSettingPath_('layout.available', this.isLayoutAvailable_(caps));
    }
    updateSettingsAvailabilityFromDocumentSettings_() {
        if (!this.settings) {
            return;
        }
        this.setSettingPath_('pagesPerSheet.available', !this.documentSettings.isFromArc);
        this.setSettingPath_('margins.available', !this.documentSettings.isFromArc && this.documentSettings.isModifiable);
        this.setSettingPath_('customMargins.available', !this.documentSettings.isFromArc && this.documentSettings.isModifiable);
        this.setSettingPath_('cssBackground.available', !this.documentSettings.isFromArc && this.documentSettings.isModifiable);
        this.setSettingPath_('selectionOnly.available', !this.documentSettings.isFromArc &&
            this.documentSettings.isModifiable &&
            this.documentSettings.hasSelection);
        this.setSettingPath_('headerFooter.available', !this.documentSettings.isFromArc && this.isHeaderFooterAvailable_());
        this.setSettingPath_('rasterize.available', !this.documentSettings.isFromArc && this.isRasterizeAvailable_());
        this.setSettingPath_('otherOptions.available', this.settings.cssBackground.available ||
            this.settings.selectionOnly.available ||
            this.settings.headerFooter.available ||
            this.settings.rasterize.available);
        if (this.destination) {
            this.updateSettingsAvailabilityFromDestinationAndDocumentSettings_();
        }
    }
    updateHeaderFooterAvailable_() {
        if (this.documentSettings === undefined) {
            return;
        }
        this.setSettingPath_('headerFooter.available', this.isHeaderFooterAvailable_());
    }
    /**
     * @return Whether the header/footer setting should be available.
     */
    isHeaderFooterAvailable_() {
        // Always unavailable for PDFs.
        if (!this.documentSettings.isModifiable) {
            return false;
        }
        // Always unavailable for small paper sizes.
        const microns = this.getSettingValue('layout') ?
            this.getSettingValue('mediaSize').width_microns :
            this.getSettingValue('mediaSize').height_microns;
        if (microns < MINIMUM_HEIGHT_MICRONS) {
            return false;
        }
        // Otherwise, availability depends on the margins.
        const marginsType = this.getSettingValue('margins');
        if (marginsType === MarginsType.NO_MARGINS) {
            return false;
        }
        if (marginsType === MarginsType.MINIMUM) {
            return true;
        }
        return !this.margins ||
            this.margins.get(CustomMarginsOrientation.TOP) > 0 ||
            this.margins.get(CustomMarginsOrientation.BOTTOM) > 0;
    }
    updateRasterizeAvailable_() {
        // Need document settings to know if source is PDF.
        if (this.documentSettings === undefined) {
            return;
        }
        this.setSettingPath_('rasterize.available', this.isRasterizeAvailable_());
    }
    /**
     * @return Whether the rasterization setting should be available.
     */
    isRasterizeAvailable_() {
        // Only a possibility for PDFs.  Always available for PDFs on Linux and
        // ChromeOS.  crbug.com/675798
        let available = !!this.documentSettings && !this.documentSettings.isModifiable;
        // 
        return available;
    }
    isLayoutAvailable_(caps) {
        if (!caps || !caps.page_orientation || !caps.page_orientation.option ||
            (!this.documentSettings.isModifiable &&
                !this.documentSettings.isFromArc) ||
            this.documentSettings.allPagesHaveCustomOrientation) {
            return false;
        }
        let hasAutoOrPortraitOption = false;
        let hasLandscapeOption = false;
        caps.page_orientation.option.forEach(option => {
            hasAutoOrPortraitOption = hasAutoOrPortraitOption ||
                option.type === 'AUTO' || option.type === 'PORTRAIT';
            hasLandscapeOption = hasLandscapeOption || option.type === 'LANDSCAPE';
        });
        return hasLandscapeOption && hasAutoOrPortraitOption;
    }
    /**
     * @return Whether the borderless setting should be available.
     */
    isBorderlessAvailable_(caps) {
        return loadTimeData.getBoolean('isBorderlessPrintingEnabled') && !!caps &&
            !!caps.media_size?.option?.find(o => {
                return o.has_borderless_variant;
            });
    }
    updateSettingsValues_(caps) {
        if (this.settings.mediaSize.available) {
            const defaultOption = caps.media_size.option.find(o => !!o.is_default) ||
                caps.media_size.option[0];
            let matchingOption = null;
            // If the setting does not have a valid value, the UI has just started so
            // do not try to get a matching value; just set the printer default in
            // case the user doesn't have sticky settings.
            if (this.settings.mediaSize.setFromUi) {
                const currentMediaSize = this.getSettingValue('mediaSize');
                matchingOption = caps.media_size.option.find(o => {
                    return o.height_microns === currentMediaSize.height_microns &&
                        o.width_microns === currentMediaSize.width_microns;
                });
            }
            this.setSetting('mediaSize', matchingOption || defaultOption, true);
        }
        if (this.settings.borderless.available) {
            this.setSetting('borderless', this.settings.borderless.setFromUi &&
                this.getSettingValue('borderless'), true);
        }
        if (this.settings.mediaType.available) {
            const defaultOption = caps.media_type.option.find(o => !!o.is_default) ||
                caps.media_type.option[0];
            let matchingOption = null;
            if (this.settings.mediaType.setFromUi) {
                const currentMediaType = this.getSettingValue('mediaType');
                matchingOption = caps.media_type.option.find(o => {
                    return o.vendor_id === currentMediaType.vendor_id;
                });
            }
            this.setSetting('mediaType', matchingOption || defaultOption, true);
        }
        else if (caps && caps.media_type && caps.media_type.option &&
            caps.media_type.option.length > 0) {
            const unavailableValue = caps.media_type.option.find(o => !!o.is_default) ||
                caps.media_type.option[0];
            this.setSettingPath_('mediaType.unavailableValue', unavailableValue);
        }
        if (this.settings.dpi.available) {
            const defaultOption = caps.dpi.option.find(o => !!o.is_default) || caps.dpi.option[0];
            let matchingOption = null;
            if (this.settings.dpi.setFromUi) {
                const currentDpi = this.getSettingValue('dpi');
                matchingOption = caps.dpi.option.find(o => {
                    return o.horizontal_dpi === currentDpi.horizontal_dpi &&
                        o.vertical_dpi === currentDpi.vertical_dpi;
                });
            }
            this.setSetting('dpi', matchingOption || defaultOption, true);
        }
        else if (caps && caps.dpi && caps.dpi.option && caps.dpi.option.length > 0) {
            const unavailableValue = caps.dpi.option.find(o => !!o.is_default) || caps.dpi.option[0];
            this.setSettingPath_('dpi.unavailableValue', unavailableValue);
        }
        if (!this.settings.color.setFromUi && this.settings.color.available) {
            const defaultOption = this.destination.defaultColorOption;
            if (defaultOption) {
                this.setSetting('color', !['STANDARD_MONOCHROME', 'CUSTOM_MONOCHROME'].includes(defaultOption.type), true);
            }
        }
        else if (!this.settings.color.available && caps && caps.color &&
            caps.color.option && caps.color.option.length > 0) {
            this.setSettingPath_('color.unavailableValue', !['STANDARD_MONOCHROME', 'CUSTOM_MONOCHROME'].includes(caps.color.option[0].type));
        }
        else if (!this.settings.color.available) {
            // if no color capability is reported, assume black and white.
            this.setSettingPath_('color.unavailableValue', false);
        }
        // Duplex policy is available on ChromeOS only. Therefore, we don't need to
        // check printing destinations' duplex availability on other platforms.
        // 
        const duplexPolicyDefaultValueAvailable = getDuplexPolicyDefaultValueAvailable(this.getSetting('duplex').policyDefaultValue, this.getSetting('duplexShortEdge').policyDefaultValue, caps);
        // 
        // 
        if (!this.settings.duplex.setFromUi && this.settings.duplex.available &&
            !duplexPolicyDefaultValueAvailable) {
            const defaultOption = caps.duplex.option.find(o => !!o.is_default);
            if (defaultOption !== undefined) {
                const defaultOptionIsDuplex = defaultOption.type === DuplexType.SHORT_EDGE ||
                    defaultOption.type === DuplexType.LONG_EDGE;
                this.setSetting('duplex', defaultOptionIsDuplex, true);
                if (defaultOptionIsDuplex) {
                    this.setSetting('duplexShortEdge', defaultOption.type === DuplexType.SHORT_EDGE, true);
                }
                if (!this.settings.duplexShortEdge.available) {
                    // Duplex is available, so must have only one two sided printing
                    // option. Set duplexShortEdge's unavailable value based on the
                    // printer.
                    this.setSettingPath_('duplexShortEdge.unavailableValue', caps.duplex.option.some(o => o.type === DuplexType.SHORT_EDGE));
                }
            }
        }
        else if (!this.settings.duplex.available && caps && caps.duplex &&
            caps.duplex.option) {
            // In this case, there must only be one option.
            const hasLongEdge = caps.duplex.option.some(o => o.type === DuplexType.LONG_EDGE);
            const hasShortEdge = caps.duplex.option.some(o => o.type === DuplexType.SHORT_EDGE);
            // If the only option available is long edge, the value should always be
            // true.
            this.setSettingPath_('duplex.unavailableValue', hasLongEdge || hasShortEdge);
            this.setSettingPath_('duplexShortEdge.unavailableValue', hasShortEdge);
        }
        else if (!this.settings.duplex.available) {
            // If no duplex capability is reported, assume false.
            this.setSettingPath_('duplex.unavailableValue', false);
            this.setSettingPath_('duplexShortEdge.unavailableValue', false);
        }
        if (this.settings.vendorItems.available) {
            const vendorSettings = {};
            for (const item of caps.vendor_capability) {
                let defaultValue = null;
                if (item.type === 'SELECT' && item.select_cap &&
                    item.select_cap.option) {
                    const defaultOption = item.select_cap.option.find(o => !!o.is_default);
                    defaultValue = defaultOption ? defaultOption.value : null;
                }
                else if (item.type === 'RANGE') {
                    if (item.range_cap) {
                        defaultValue = item.range_cap.default || null;
                    }
                }
                else if (item.type === 'TYPED_VALUE') {
                    if (item.typed_value_cap) {
                        defaultValue = item.typed_value_cap.default || null;
                    }
                }
                if (defaultValue !== null) {
                    vendorSettings[item.id] = defaultValue;
                }
            }
            this.setSetting('vendorItems', vendorSettings, true);
        }
    }
    /**
     * Caches the sticky settings and sets up the recent destinations. Sticky
     * settings will be applied when destinaton capabilities have been retrieved.
     */
    setStickySettings(savedSettingsStr) {
        assert(!this.stickySettings_);
        if (!savedSettingsStr) {
            return;
        }
        let savedSettings;
        try {
            savedSettings = JSON.parse(savedSettingsStr);
        }
        catch (e) {
            console.warn('Unable to parse state ' + e);
            return; // use default values rather than updating.
        }
        if (savedSettings.version !== 2) {
            return;
        }
        let recentDestinations = savedSettings.recentDestinations || [];
        if (!Array.isArray(recentDestinations)) {
            recentDestinations = [recentDestinations];
        }
        // Remove unsupported privet and cloud printers from the sticky settings,
        // to free up these spots for supported printers.
        const unsupportedOrigins = [
            DestinationOrigin.COOKIES,
            // 
            DestinationOrigin.DEVICE,
            // 
            DestinationOrigin.PRIVET,
        ];
        recentDestinations = recentDestinations.filter((d) => {
            return !unsupportedOrigins.includes(d.origin);
        });
        // Initialize recent destinations early so that the destination store can
        // start trying to fetch them.
        this.setSetting('recentDestinations', recentDestinations);
        savedSettings.recentDestinations = recentDestinations;
        this.stickySettings_ = savedSettings;
    }
    /**
     * Helper function for configurePolicySetting_(). Sets value and managed flag
     * for given setting.
     * @param settingName Name of the setting being applied.
     * @param value Value of the setting provided via policy.
     * @param managed Flag showing whether value of setting is managed.
     * @param applyOnDestinationUpdate Flag showing whether policy
     *     should be applied on every destination update.
     */
    setPolicySetting_(settingName, value, managed, applyOnDestinationUpdate) {
        if (!this.policySettings_) {
            this.policySettings_ = {};
        }
        this.policySettings_[settingName] = {
            value: value,
            managed: managed,
            applyOnDestinationUpdate: applyOnDestinationUpdate,
        };
    }
    /**
     * Helper function for setPolicySettings(). Calculates value and managed flag
     * of the setting according to allowed and default modes.
     */
    configurePolicySetting_(settingName, allowedMode, defaultMode) {
        switch (settingName) {
            case 'headerFooter': {
                const value = allowedMode !== undefined ? allowedMode : defaultMode;
                if (value !== undefined) {
                    this.setPolicySetting_(settingName, value, allowedMode !== undefined, 
                    /*applyOnDestinationUpdate=*/ false);
                }
                break;
            }
            case 'cssBackground': {
                const value = allowedMode ? allowedMode : defaultMode;
                if (value !== undefined) {
                    this.setPolicySetting_(settingName, value === BackgroundGraphicsModeRestriction.ENABLED, !!allowedMode, /*applyOnDestinationUpdate=*/ false);
                }
                break;
            }
            case 'mediaSize': {
                if (defaultMode !== undefined) {
                    this.setPolicySetting_(settingName, defaultMode, /*managed=*/ false, 
                    /*applyOnDestinationUpdate=*/ true);
                }
                break;
            }
            // 
            case 'color': {
                const value = allowedMode ? allowedMode : defaultMode;
                if (value !== undefined) {
                    this.setPolicySetting_(settingName, value, !!allowedMode, 
                    /*applyOnDestinationUpdate=*/ false);
                }
                break;
            }
            case 'duplex': {
                const value = getDuplexDefaultValue(allowedMode, defaultMode);
                if (value !== undefined) {
                    this.setPolicySetting_(settingName, value, !!allowedMode, 
                    /*applyOnDestinationUpdate=*/ false);
                }
                break;
            }
            case 'pin': {
                const value = allowedMode ? allowedMode : defaultMode;
                if (value !== undefined) {
                    this.setPolicySetting_(settingName, value, !!allowedMode, 
                    /*applyOnDestinationUpdate=*/ false);
                }
                break;
            }
            // 
            // 
            case 'printPdfAsImage': {
                if (defaultMode !== undefined) {
                    this.setPolicySetting_(settingName, defaultMode, /*managed=*/ false, 
                    /*applyOnDestinationUpdate=*/ false);
                }
                break;
            }
        }
    }
    /**
     * Sets settings in accordance to policies from native code, and prevents
     * those settings from being changed via other means.
     */
    setPolicySettings(policies) {
        if (policies === undefined) {
            return;
        }
        const policiesObject = policies;
        ['headerFooter', 'cssBackground', 'mediaSize'].forEach(settingName => {
            if (!policiesObject[settingName]) {
                return;
            }
            const defaultMode = policiesObject[settingName].defaultMode;
            const allowedMode = policiesObject[settingName].allowedMode;
            this.configurePolicySetting_(settingName, allowedMode, defaultMode);
        });
        // 
        if (policiesObject['sheets']) {
            if (!this.policySettings_) {
                this.policySettings_ = {};
            }
            this.policySettings_['sheets'] = {
                value: policiesObject['sheets'].value,
                applyOnDestinationUpdate: false,
                managed: true,
            };
        }
        ['color', 'duplex', 'pin'].forEach(settingName => {
            if (!policiesObject[settingName]) {
                return;
            }
            const defaultMode = policiesObject[settingName].defaultMode;
            const allowedMode = policiesObject[settingName].allowedMode;
            this.configurePolicySetting_(settingName, allowedMode, defaultMode);
        });
        // 
        // 
        if (policies['printPdfAsImage']) {
            if (!this.policySettings_) {
                this.policySettings_ = {};
            }
            const defaultMode = policies['printPdfAsImage'].defaultMode;
            this.configurePolicySetting_('printPdfAsImage', /*allowedMode=*/ undefined, defaultMode);
        }
    }
    applyStickySettings() {
        if (this.stickySettings_) {
            STICKY_SETTING_NAMES.forEach(settingName => {
                const setting = this.get(settingName, this.settings);
                const value = this.stickySettings_[setting.key];
                if (value !== undefined) {
                    this.setSetting(settingName, value);
                }
                else {
                    this.applyScalingStickySettings_(settingName);
                }
            });
        }
        this.applyPersistentCddDefaults_();
        this.applyPolicySettings_();
        this.initialized_ = true;
        this.updateManaged_();
        this.stickySettings_ = null;
        this.fire_('sticky-setting-changed', this.getStickySettings_());
    }
    /**
     * Helper function for applyStickySettings(). Checks if the setting
     * is a scaling setting and applies by applying the old types
     * that rely on 'fitToPage' and 'customScaling'.
     * @param settingName Name of the setting being applied.
     */
    applyScalingStickySettings_(settingName) {
        // TODO(dhoss): Remove checks for 'customScaling' and 'fitToPage'
        if (settingName === 'scalingType' &&
            'customScaling' in this.stickySettings_) {
            const isCustom = this.stickySettings_['customScaling'];
            const scalingType = isCustom ? ScalingType.CUSTOM : ScalingType.DEFAULT;
            this.setSetting(settingName, scalingType);
        }
        else if (settingName === 'scalingTypePdf') {
            if ('isFitToPageEnabled' in this.stickySettings_) {
                const isFitToPage = this.stickySettings_['isFitToPageEnabled'];
                const scalingTypePdf = isFitToPage ?
                    ScalingType.FIT_TO_PAGE :
                    this.getSetting('scalingType').value;
                this.setSetting(settingName, scalingTypePdf);
            }
            else if (this.getSetting('scalingType').value === ScalingType.CUSTOM) {
                // In the event that 'isFitToPageEnabled' was not in the sticky
                // settings, and 'scalingType' has been set to custom, we want
                // 'scalingTypePdf' to match.
                this.setSetting(settingName, ScalingType.CUSTOM);
            }
        }
    }
    applyPolicySettings_() {
        if (this.policySettings_) {
            for (const [settingName, policy] of Object.entries(this.policySettings_)) {
                const policyEntry = policy;
                // 
                if (settingName === 'sheets') {
                    this.maxSheets = policyEntry.value;
                    continue;
                }
                if (settingName === 'color') {
                    this.set('settings.color.value', policyEntry.value === ColorModeRestriction.COLOR);
                    this.set('settings.color.setByPolicy', policyEntry.managed);
                    continue;
                }
                if (settingName === 'duplex') {
                    const isDuplex = (policyEntry.value === DuplexModeRestriction.SHORT_EDGE ||
                        policyEntry.value === DuplexModeRestriction.LONG_EDGE ||
                        policyEntry.value === DuplexModeRestriction.DUPLEX);
                    this.set('settings.duplex.value', isDuplex);
                    this.set('settings.duplex.policyDefaultValue', isDuplex);
                    if (policyEntry.value === DuplexModeRestriction.SHORT_EDGE ||
                        policyEntry.value === DuplexModeRestriction.LONG_EDGE) {
                        this.set('settings.duplexShortEdge.value', policyEntry.value === DuplexModeRestriction.SHORT_EDGE);
                        this.set('settings.duplexShortEdge.policyDefaultValue', policyEntry.value === DuplexModeRestriction.SHORT_EDGE);
                    }
                    this.set('settings.duplex.setByPolicy', policyEntry.managed);
                    // Duplex mode is never set by policy
                    this.set('settings.duplexShortEdge.setByPolicy', false);
                    continue;
                }
                if (settingName === 'pin') {
                    if (policyEntry.value === PinModeRestriction.NO_PIN &&
                        policyEntry.managed) {
                        this.set('settings.pin.available', false);
                        this.set('settings.pinValue.available', false);
                    }
                    else {
                        this.set('settings.pin.value', policyEntry.value === PinModeRestriction.PIN);
                    }
                    this.set('settings.pin.setByPolicy', policyEntry.managed);
                    continue;
                }
                // 
                // 
                if (settingName === 'printPdfAsImage') {
                    if (policyEntry.value) {
                        this.setSetting('rasterize', policyEntry.value, true);
                    }
                    continue;
                }
                if (policyEntry.value !== undefined &&
                    !policyEntry.applyOnDestinationUpdate) {
                    this.setSetting(settingName, policyEntry.value, true);
                    if (policyEntry.managed) {
                        this.set(`settings.${settingName}.setByPolicy`, true);
                    }
                }
            }
        }
    }
    /**
     * If the setting has a default value specified in the CDD capabilities and
     * the attribute `reset_to_default` is true, this method will return the
     * default value for the setting; otherwise it will return null.
     */
    getResetValue_(capability) {
        if (!capability.reset_to_default) {
            return null;
        }
        const cddDefault = capability.option.find(o => !!o.is_default);
        if (!cddDefault) {
            return null;
        }
        return cddDefault;
    }
    /**
     * For PrinterProvider printers, it's possible to specify for a setting to
     * always reset to the default value using the `reset_to_default` attribute.
     * If `reset_to_default` is true and a default value for the
     * setting is specified, this method will reset the setting
     * value to the default value.
     */
    applyPersistentCddDefaults_() {
        if (!this.destination || !this.destination.isExtension) {
            return;
        }
        const caps = this.destination && this.destination.capabilities ?
            this.destination.capabilities.printer :
            null;
        if (!caps) {
            return;
        }
        if (this.settings.mediaSize.available) {
            const cddDefault = this.getResetValue_(caps['media_size']);
            if (cddDefault) {
                this.set('settings.mediaSize.value', cddDefault);
            }
        }
        if (this.settings.mediaType.available) {
            assert(loadTimeData.getBoolean('isBorderlessPrintingEnabled'));
            const cddDefault = this.getResetValue_(caps['media_type']);
            if (cddDefault) {
                this.set('settings.mediaType.value', cddDefault);
            }
        }
        if (this.settings.color.available) {
            const cddDefault = this.getResetValue_(caps['color']);
            if (cddDefault) {
                this.set('settings.color.value', !['STANDARD_MONOCHROME', 'CUSTOM_MONOCHROME'].includes(cddDefault.type));
            }
        }
        if (this.settings.duplex.available) {
            const cddDefault = this.getResetValue_(caps['duplex']);
            if (cddDefault) {
                this.set('settings.duplex.value', cddDefault.type === DuplexType.LONG_EDGE ||
                    cddDefault.type === DuplexType.SHORT_EDGE);
                if (!this.settings.duplexShortEdge.available) {
                    this.set('settings.duplexShortEdge.value', cddDefault.type === DuplexType.SHORT_EDGE);
                }
            }
        }
        if (this.settings.dpi.available) {
            const cddDefault = this.getResetValue_(caps['dpi']);
            if (cddDefault) {
                this.set('settings.dpi.value', cddDefault);
            }
        }
    }
    /**
     * Restricts settings and applies defaults as defined by policy applicable to
     * current destination.
     */
    applyDestinationSpecificPolicies() {
        if (this.settings.mediaSize.available && this.policySettings_) {
            const mediaSizePolicy = this.policySettings_['mediaSize'] &&
                this.policySettings_['mediaSize'].value;
            if (mediaSizePolicy !== undefined) {
                const matchingOption = this.destination.capabilities.printer.media_size.option.find(o => {
                    return o.width_microns === mediaSizePolicy.width &&
                        o.height_microns === mediaSizePolicy.height;
                });
                if (matchingOption !== undefined) {
                    this.set('settings.mediaSize.value', matchingOption);
                }
            }
        }
        this.updateManaged_();
    }
    updateManaged_() {
        let managedSettings = ['cssBackground', 'headerFooter'];
        // 
        managedSettings =
            managedSettings.concat(['color', 'duplex', 'duplexShortEdge', 'pin']);
        // 
        this.settingsManaged = managedSettings.some(settingName => {
            const setting = this.getSetting(settingName);
            return setting.available && setting.setByPolicy;
        });
    }
    initialized() {
        return this.initialized_;
    }
    getStickySettings_() {
        const serialization = {};
        serialization['version'] = 2;
        STICKY_SETTING_NAMES.forEach(settingName => {
            const setting = this.get(settingName, this.settings);
            if (setting.setFromUi) {
                serialization[setting.key] = setting.value;
            }
        });
        return JSON.stringify(serialization);
    }
    getDuplexMode_() {
        if (!this.getSettingValue('duplex')) {
            return DuplexMode.SIMPLEX;
        }
        return this.getSettingValue('duplexShortEdge') ? DuplexMode.SHORT_EDGE :
            DuplexMode.LONG_EDGE;
    }
    getCddDuplexType_() {
        if (!this.getSettingValue('duplex')) {
            return DuplexType.NO_DUPLEX;
        }
        return this.getSettingValue('duplexShortEdge') ? DuplexType.SHORT_EDGE :
            DuplexType.LONG_EDGE;
    }
    /**
     * Creates a string that represents a print ticket.
     * @param destination Destination to print to.
     * @param openPdfInPreview Whether this print request is to open
     *     the PDF in Preview app (Mac only).
     * @param showSystemDialog Whether this print request is to show
     *     the system dialog.
     * @return Serialized print ticket.
     */
    createPrintTicket(destination, openPdfInPreview, showSystemDialog) {
        const dpi = this.getSettingValue('dpi');
        const scalingSettingKey = this.getSetting('scalingTypePdf').available ?
            'scalingTypePdf' :
            'scalingType';
        const ticket = {
            mediaSize: this.getSettingValue('mediaSize'),
            borderless: loadTimeData.getBoolean('isBorderlessPrintingEnabled') &&
                this.getSettingValue('mediaSize')?.has_borderless_variant &&
                this.getSettingValue('borderless'),
            mediaType: this.getSettingValue('mediaType')?.vendor_id,
            pageCount: this.getSettingValue('pages').length,
            landscape: this.getSettingValue('layout'),
            color: destination.getNativeColorModel(this.getSettingValue('color')),
            headerFooterEnabled: false, // only used in print preview
            marginsType: this.getSettingValue('margins'),
            duplex: this.getDuplexMode_(),
            copies: this.getSettingValue('copies'),
            collate: this.getSettingValue('collate'),
            shouldPrintBackgrounds: this.getSettingValue('cssBackground'),
            shouldPrintSelectionOnly: false, // only used in print preview
            previewModifiable: this.documentSettings.isModifiable,
            printerType: destination.type,
            rasterizePDF: this.getSettingValue('rasterize'),
            scaleFactor: this.getSettingValue(scalingSettingKey) === ScalingType.CUSTOM ?
                parseInt(this.getSettingValue('scaling'), 10) :
                100,
            scalingType: this.getSettingValue(scalingSettingKey),
            pagesPerSheet: this.getSettingValue('pagesPerSheet'),
            dpiHorizontal: (dpi && 'horizontal_dpi' in dpi) ? dpi.horizontal_dpi : 0,
            dpiVertical: (dpi && 'vertical_dpi' in dpi) ? dpi.vertical_dpi : 0,
            dpiDefault: (dpi && 'is_default' in dpi) ? dpi.is_default : false,
            deviceName: destination.id,
            pageWidth: this.pageSize.width,
            pageHeight: this.pageSize.height,
            showSystemDialog: showSystemDialog,
            // 
            printToGoogleDrive: destination.id === GooglePromotedDestinationId.SAVE_TO_DRIVE_CROS,
            printerManuallySelected: destination.printerManuallySelected,
            // 
        };
        if (openPdfInPreview) {
            ticket['openPDFInPreview'] = openPdfInPreview;
        }
        if (this.getSettingValue('margins') === MarginsType.CUSTOM) {
            ticket['marginsCustom'] = this.getSettingValue('customMargins');
        }
        if (destination.isExtension) {
            // TODO(rbpotter): Get local and PDF printers to use the same ticket and
            // send only this ticket instead of nesting it in a larger ticket.
            ticket['ticket'] = this.createCloudJobTicket(destination);
            ticket['capabilities'] = JSON.stringify(destination.capabilities);
        }
        // 
        if (this.getSettingValue('pin')) {
            ticket['pinValue'] = this.getSettingValue('pinValue');
        }
        if (destination.origin === DestinationOrigin.CROS) {
            ticket['advancedSettings'] = this.getSettingValue('vendorItems');
            ticket['printerStatusReason'] =
                destination.printerStatusReason || PrinterStatusReason.UNKNOWN_REASON;
        }
        // 
        return JSON.stringify(ticket);
    }
    /**
     * Creates an object that represents a Google Cloud Print print ticket.
     * @param destination Destination to print to.
     * @return Google Cloud Print print ticket.
     */
    createCloudJobTicket(destination) {
        assert(destination.isExtension, 'Trying to create a Google Cloud Print print ticket for a local ' +
            ' non-extension destination');
        assert(destination.capabilities, 'Trying to create a Google Cloud Print print ticket for a ' +
            'destination with no print capabilities');
        // Create CJT (Cloud Job Ticket)
        const cjt = { version: '1.0', print: {} };
        if (this.settings.collate.available) {
            cjt.print.collate = { collate: this.settings.collate.value };
        }
        if (this.settings.color.available) {
            const selectedOption = destination.getSelectedColorOption(this.settings.color.value);
            if (!selectedOption) {
                console.warn('Could not find correct color option');
            }
            else {
                cjt.print.color = { type: selectedOption.type };
                if (selectedOption.hasOwnProperty('vendor_id')) {
                    cjt.print.color.vendor_id = selectedOption.vendor_id;
                }
            }
        }
        else {
            // Always try setting the color in the print ticket, otherwise a
            // reasonable reader of the ticket will have to do more work, or process
            // the ticket sub-optimally, in order to safely handle the lack of a
            // color ticket item.
            const defaultOption = destination.defaultColorOption;
            if (defaultOption) {
                cjt.print.color = { type: defaultOption.type };
                if (defaultOption.hasOwnProperty('vendor_id')) {
                    cjt.print.color.vendor_id = defaultOption.vendor_id;
                }
            }
        }
        if (this.settings.copies.available) {
            cjt.print.copies = { copies: this.getSettingValue('copies') };
        }
        if (this.settings.duplex.available) {
            cjt.print.duplex = {
                type: this.getCddDuplexType_(),
            };
        }
        if (this.settings.mediaSize.available) {
            const mediaValue = this.settings.mediaSize.value;
            cjt.print.media_size = {
                width_microns: mediaValue.width_microns,
                height_microns: mediaValue.height_microns,
                is_continuous_feed: mediaValue.is_continuous_feed,
                vendor_id: mediaValue.vendor_id,
            };
        }
        if (!this.settings.layout.available) {
            // In this case "orientation" option is hidden from user, so user can't
            // adjust it for page content, see Landscape.isCapabilityAvailable().
            // We can improve results if we set AUTO here.
            const capability = destination.capabilities.printer ?
                destination.capabilities.printer.page_orientation :
                null;
            if (capability && capability.option &&
                capability.option.some(option => option.type === 'AUTO')) {
                cjt.print.page_orientation = { type: 'AUTO' };
            }
        }
        else {
            cjt.print.page_orientation = {
                type: this.settings.layout.value ? 'LANDSCAPE' : 'PORTRAIT',
            };
        }
        if (this.settings.dpi.available) {
            const dpiValue = this.settings.dpi.value;
            cjt.print.dpi = {
                horizontal_dpi: dpiValue.horizontal_dpi,
                vertical_dpi: dpiValue.vertical_dpi,
                vendor_id: dpiValue.vendor_id,
            };
        }
        if (this.settings.vendorItems.available) {
            const items = this.settings.vendorItems.value;
            cjt.print.vendor_ticket_item = [];
            for (const itemId in items) {
                if (items.hasOwnProperty(itemId)) {
                    cjt.print.vendor_ticket_item.push({ id: itemId, value: items[itemId] });
                }
            }
        }
        return JSON.stringify(cjt);
    }
}
customElements.define(PrintPreviewModelElement.is, PrintPreviewModelElement);

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PrintServerStore extends EventTarget {
    /**
     * A data store that stores print servers and dispatches events when the
     * data store changes.
     * @param addListenerCallback Function to call to add Web UI listeners in
     *     PrintServerStore constructor.
     */
    constructor(addListenerCallback) {
        super();
        /**
         * Used to fetch print servers.
         */
        this.nativeLayerCros_ = NativeLayerCrosImpl.getInstance();
        /**
         * All available print servers mapped by name.
         */
        this.printServersByName_ = new Map();
        /**
         * Whether in single print server fetching mode.
         */
        this.isSingleServerFetchingMode_ = false;
        /**
         * Used to reload local printers.
         */
        this.destinationStore_ = null;
        addListenerCallback('print-servers-config-changed', (printServersConfig) => this.onPrintServersConfigChanged_(printServersConfig));
        addListenerCallback('server-printers-loading', (isLoading) => this.onServerPrintersLoading_(isLoading));
    }
    /**
     * Selects the print server(s) with the corresponding name.
     * @param printServerName Name of the print server(s).
     */
    choosePrintServers(printServerName) {
        const printServers = this.printServersByName_.get(printServerName);
        this.nativeLayerCros_.choosePrintServers(printServers ? printServers.map(printServer => printServer.id) : []);
    }
    /**
     * Gets the currently available print servers and fetching mode.
     * @return The print servers configuration.
     */
    async getPrintServersConfig() {
        const printServersConfig = await this.nativeLayerCros_.getPrintServersConfig();
        this.updatePrintServersConfig_(printServersConfig);
        return printServersConfig;
    }
    setDestinationStore(destinationStore) {
        this.destinationStore_ = destinationStore;
    }
    /**
     * Called when new print servers and fetching mode are available.
     */
    onPrintServersConfigChanged_(printServersConfig) {
        this.updatePrintServersConfig_(printServersConfig);
        const eventData = {
            printServerNames: Array.from(this.printServersByName_.keys()),
            isSingleServerFetchingMode: this.isSingleServerFetchingMode_,
        };
        this.dispatchEvent(new CustomEvent(PrintServerStoreEventType.PRINT_SERVERS_CHANGED, { detail: eventData }));
    }
    /**
     * Updates the print servers configuration when new print servers and fetching
     * mode are available.
     */
    updatePrintServersConfig_(printServersConfig) {
        this.isSingleServerFetchingMode_ =
            printServersConfig.isSingleServerFetchingMode;
        this.printServersByName_ = new Map();
        for (const printServer of printServersConfig.printServers) {
            if (this.printServersByName_.has(printServer.name)) {
                this.printServersByName_.get(printServer.name).push(printServer);
            }
            else {
                this.printServersByName_.set(printServer.name, [printServer]);
            }
        }
    }
    /**
     * Called when print server printers loading status has changed.
     * @param isLoading Whether server printers are loading
     */
    async onServerPrintersLoading_(isLoading) {
        if (!isLoading && this.destinationStore_) {
            await this.destinationStore_.reloadLocalPrinters();
        }
        this.dispatchEvent(new CustomEvent(PrintServerStoreEventType.SERVER_PRINTERS_LOADING, { detail: isLoading }));
    }
}
/**
 * Event types dispatched by the print server store.
 */
var PrintServerStoreEventType;
(function (PrintServerStoreEventType) {
    PrintServerStoreEventType["PRINT_SERVERS_CHANGED"] = "PrintServerStore.PRINT_SERVERS_CHANGED";
    PrintServerStoreEventType["SERVER_PRINTERS_LOADING"] = "PrintServerStore.SERVER_PRINTERS_LOADING";
})(PrintServerStoreEventType || (PrintServerStoreEventType = {}));

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class Size {
    /**
     * Immutable two-dimensional size.
     */
    constructor(width, height) {
        this.width_ = width;
        this.height_ = height;
    }
    get width() {
        return this.width_;
    }
    get height() {
        return this.height_;
    }
    equals(other) {
        return other !== null && this.width_ === other.width_ &&
            this.height_ === other.height_;
    }
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var State;
(function (State) {
    State[State["NOT_READY"] = 0] = "NOT_READY";
    State[State["READY"] = 1] = "READY";
    State[State["HIDDEN"] = 2] = "HIDDEN";
    State[State["PRINTING"] = 3] = "PRINTING";
    State[State["SYSTEM_DIALOG"] = 4] = "SYSTEM_DIALOG";
    State[State["ERROR"] = 5] = "ERROR";
    State[State["FATAL_ERROR"] = 6] = "FATAL_ERROR";
    State[State["CLOSING"] = 7] = "CLOSING";
})(State || (State = {}));
/**
 * These values are persisted to logs. New entries should replace MAX_BUCKET but
 * existing entries should not be renumbered and numeric values should never be
 * reused.
 */
var Error$1;
(function (Error) {
    Error[Error["NONE"] = 0] = "NONE";
    Error[Error["INVALID_TICKET"] = 1] = "INVALID_TICKET";
    Error[Error["INVALID_PRINTER"] = 2] = "INVALID_PRINTER";
    Error[Error["NO_DESTINATIONS"] = 3] = "NO_DESTINATIONS";
    Error[Error["PREVIEW_FAILED"] = 4] = "PREVIEW_FAILED";
    Error[Error["PRINT_FAILED"] = 5] = "PRINT_FAILED";
    Error[Error["MAX_BUCKET"] = 6] = "MAX_BUCKET";
})(Error$1 || (Error$1 = {}));
class PrintPreviewStateElement extends PolymerElement {
    static get is() {
        return 'print-preview-state';
    }
    static get properties() {
        return {
            state: {
                type: Number,
                notify: true,
                value: State.NOT_READY,
            },
            error: {
                type: Number,
                notify: true,
                value: Error$1.NONE,
            },
        };
    }
    transitTo(newState) {
        switch (newState) {
            case (State.NOT_READY):
                assert(this.state === State.NOT_READY || this.state === State.READY ||
                    this.state === State.ERROR);
                break;
            case (State.READY):
                assert(this.state === State.ERROR || this.state === State.NOT_READY ||
                    this.state === State.PRINTING);
                break;
            case (State.HIDDEN):
                assert(this.state === State.READY);
                break;
            case (State.PRINTING):
                assert(this.state === State.READY || this.state === State.HIDDEN);
                break;
            case (State.SYSTEM_DIALOG):
                assert(this.state !== State.HIDDEN && this.state !== State.PRINTING &&
                    this.state !== State.CLOSING);
                break;
            case (State.ERROR):
                assert(this.state === State.ERROR || this.state === State.NOT_READY ||
                    this.state === State.READY);
                break;
            case (State.CLOSING):
                assert(this.state !== State.HIDDEN);
                break;
        }
        this.state = newState;
        if (newState !== State.ERROR && newState !== State.FATAL_ERROR) {
            this.error = Error$1.NONE;
        }
    }
}
customElements.define(PrintPreviewStateElement.is, PrintPreviewStateElement);

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Check the directionality of the page.
 * @return True if Chrome is running an RTL UI.
 */
function isRTL() {
    return document.documentElement.dir === 'rtl';
}
/**
 * @return Whether a modifier key was down when processing |e|.
 */
function hasKeyModifiers(e) {
    return !!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey);
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
const DarkModeMixin = dedupingMixin((superClass) => {
    class DarkModeMixin extends superClass {
        constructor() {
            super(...arguments);
            this.boundOnChange_ = null;
        }
        static get properties() {
            return {
                /** Whether or not the OS is in dark mode. */
                inDarkMode: {
                    type: Boolean,
                    value: prefersDark.matches,
                },
            };
        }
        connectedCallback() {
            super.connectedCallback();
            if (!this.boundOnChange_) {
                this.boundOnChange_ = () => this.onChange_();
            }
            prefersDark.addListener(this.boundOnChange_);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            prefersDark.removeListener(this.boundOnChange_);
            this.boundOnChange_ = null;
        }
        onChange_() {
            this.inDarkMode = prefersDark.matches;
        }
    }
    return DarkModeMixin;
});
function inDarkMode() {
    return prefersDark.matches;
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Returns true if the contents of the two page ranges are equal.
 */
function areRangesEqual(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i].from !== array2[i].from || array1[i].to !== array2[i].to) {
            return false;
        }
    }
    return true;
}
/**
 * @param localizedStrings An array of strings with corresponding locales.
 * @param locale Locale to look the string up for.
 * @return A string for the requested {@code locale}. An empty string
 *     if there's no string for the specified locale found.
 */
function getStringForLocale(localizedStrings, locale) {
    locale = locale.toLowerCase();
    for (let i = 0; i < localizedStrings.length; i++) {
        if (localizedStrings[i].locale.toLowerCase() === locale) {
            return localizedStrings[i].value;
        }
    }
    return '';
}
/**
 * @param localizedStrings An array of strings with corresponding locales.
 * @return A string for the current locale. An empty string if there's
 *     no string for the current locale found.
 */
function getStringForCurrentLocale(localizedStrings) {
    // First try to find an exact match and then look for the language only.
    return getStringForLocale(localizedStrings, navigator.language) ||
        getStringForLocale(localizedStrings, navigator.language.split('-')[0]);
}
/**
 * @param args The arguments for the observer.
 * @return Whether all arguments are defined.
 */
function observerDepsDefined(args) {
    return args.every(arg => arg !== undefined);
}
/**
 * Returns background images (icon and dropdown arrow) for use in a md-select.
 * @param iconset The iconset the icon is in.
 * @param iconName The icon name
 * @param el The element that contains the select.
 * @return String containing inlined SVG of the icon and
 *     url(path_to_arrow) separated by a comma.
 */
function getSelectDropdownBackground(iconset, iconName, el) {
    const serializer = new XMLSerializer();
    const iconElement = iconset.createIcon(iconName, isRTL());
    const dark = inDarkMode();
    const fillColor = getComputedStyle(el).getPropertyValue(dark ? '--google-grey-500' : '--google-grey-600');
    iconElement.style.fill = fillColor;
    const serializedIcon = serializer.serializeToString(iconElement);
    const uri = encodeURIComponent(serializedIcon);
    const arrowDownPath = dark ? 'chrome://resources/images/dark/arrow_down.svg' :
        'chrome://resources/images/arrow_down.svg';
    return `url("data:image/svg+xml;charset=utf-8,${uri}"),` +
        `url("${arrowDownPath}")`;
}

const styleMod$a = document.createElement('dom-module');
styleMod$a.appendChild(html `
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_up_cr23.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);
styleMod$a.register('cr-icons');

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview CrContainerShadowMixin holds logic for showing a drop shadow
 * near the top of a container element, when the content has scrolled.
 *
 * Elements using this mixin are expected to define a #container element,
 * which is the element being scrolled. If the #container element has a
 * show-bottom-shadow attribute, a drop shadow will also be shown near the
 * bottom of the container element, when there is additional content to scroll
 * to. Examples:
 *
 * For both top and bottom shadows:
 * <div id="container" show-bottom-shadow>...</div>
 *
 * For top shadow only:
 * <div id="container">...</div>
 *
 * The mixin will take care of inserting an element with ID
 * 'cr-container-shadow-top' which holds the drop shadow effect, and,
 * optionally, an element with ID 'cr-container-shadow-bottom' which holds the
 * same effect. A 'has-shadow' CSS class is automatically added to/removed from
 * both elements while scrolling, as necessary. Note that the show-bottom-shadow
 * attribute is inspected only during attached(), and any changes to it that
 * occur after that point will not be respected.
 *
 * Clients should either use the existing shared styling in
 * cr_shared_style.css, '#cr-container-shadow-[top/bottom]' and
 * '#cr-container-shadow-[top/bottom].has-shadow', or define their own styles.
 */
var CrContainerShadowSide;
(function (CrContainerShadowSide) {
    CrContainerShadowSide["TOP"] = "top";
    CrContainerShadowSide["BOTTOM"] = "bottom";
})(CrContainerShadowSide || (CrContainerShadowSide = {}));
const CrContainerShadowMixin = dedupingMixin((superClass) => {
    class CrContainerShadowMixin extends superClass {
        constructor() {
            super(...arguments);
            this.intersectionObserver_ = null;
            this.dropShadows_ = new Map();
            this.intersectionProbes_ = new Map();
            this.sides_ = null;
        }
        connectedCallback() {
            super.connectedCallback();
            const hasBottomShadow = this.getContainer_().hasAttribute('show-bottom-shadow');
            this.sides_ = hasBottomShadow ?
                [CrContainerShadowSide.TOP, CrContainerShadowSide.BOTTOM] :
                [CrContainerShadowSide.TOP];
            this.sides_.forEach(side => {
                // The element holding the drop shadow effect to be shown.
                const shadow = document.createElement('div');
                shadow.id = `cr-container-shadow-${side}`;
                shadow.classList.add('cr-container-shadow');
                this.dropShadows_.set(side, shadow);
                this.intersectionProbes_.set(side, document.createElement('div'));
            });
            this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.TOP), this.getContainer_());
            this.getContainer_().prepend(this.intersectionProbes_.get(CrContainerShadowSide.TOP));
            if (hasBottomShadow) {
                this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide.BOTTOM), this.getContainer_().nextSibling);
                this.getContainer_().append(this.intersectionProbes_.get(CrContainerShadowSide.BOTTOM));
            }
            this.enableShadowBehavior(true);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.enableShadowBehavior(false);
        }
        getContainer_() {
            return this.shadowRoot.querySelector('#container');
        }
        getIntersectionObserver_() {
            const callback = (entries) => {
                // In some rare cases, there could be more than one entry per
                // observed element, in which case the last entry's result
                // stands.
                for (const entry of entries) {
                    const target = entry.target;
                    this.sides_.forEach(side => {
                        if (target === this.intersectionProbes_.get(side)) {
                            this.dropShadows_.get(side).classList.toggle('has-shadow', entry.intersectionRatio === 0);
                        }
                    });
                }
            };
            return new IntersectionObserver(callback, { root: this.getContainer_(), threshold: 0 });
        }
        /**
         * @param enable Whether to enable the mixin or disable it.
         *     This function does nothing if the mixin is already in the
         *     requested state.
         */
        enableShadowBehavior(enable) {
            // Behavior is already enabled/disabled. Return early.
            if (enable === !!this.intersectionObserver_) {
                return;
            }
            if (!enable) {
                this.intersectionObserver_.disconnect();
                this.intersectionObserver_ = null;
                return;
            }
            this.intersectionObserver_ = this.getIntersectionObserver_();
            // Need to register the observer within a setTimeout() callback,
            // otherwise the drop shadow flashes once on startup, because of the
            // DOM modifications earlier in this function causing a relayout.
            window.setTimeout(() => {
                if (this.intersectionObserver_) {
                    // In case this is already detached.
                    this.intersectionProbes_.forEach(probe => {
                        this.intersectionObserver_.observe(probe);
                    });
                }
            });
        }
        /**
         * Shows the shadows. The shadow mixin must be disabled before
         * calling this method, otherwise the intersection observer might
         * show the shadows again.
         */
        showDropShadows() {
            assert(!this.intersectionObserver_);
            assert(this.sides_);
            for (const side of this.sides_) {
                this.dropShadows_.get(side).classList.toggle('has-shadow', true);
            }
        }
    }
    return CrContainerShadowMixin;
});

function getTemplate$D() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style cr-icons">dialog{--scroll-border-color:var(--paper-grey-300);--scroll-border:1px solid var(--scroll-border-color);background-color:var(--cr-dialog-background-color,#fff);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,.12),0 16px 16px rgba(0,0,0,.24);color:inherit;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{--scroll-border-color:var(--google-grey-700);background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}:host{--transparent-border:1px solid transparent}#cr-container-shadow-top{border-bottom:var(--cr-dialog-body-border-top,var(--transparent-border))}#cr-container-shadow-bottom{border-bottom:var(--cr-dialog-body-border-bottom,var(--transparent-border))}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{border-bottom:var(--scroll-border)}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}</style>
    <dialog id="dialog" on-close="onNativeDialogClose_" on-cancel="onNativeDialogCancel_" part="dialog" aria-labelledby="title" aria-description$="[[ariaDescriptionText]]">
    
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
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-dialog' is a component for showing a modal dialog. If the
 * dialog is closed via close(), a 'close' event is fired. If the dialog is
 * canceled via cancel(), a 'cancel' event is fired followed by a 'close' event.
 *
 * Additionally clients can get a reference to the internal native <dialog> via
 * calling getNative() and inspecting the |returnValue| property inside
 * the 'close' event listener to determine whether it was canceled or just
 * closed, where a truthy value means success, and a falsy value means it was
 * canceled.
 *
 * Note that <cr-dialog> wrapper itself always has 0x0 dimensions, and
 * specifying width/height on <cr-dialog> directly will have no effect on the
 * internal native <dialog>. Instead use cr-dialog::part(dialog) to specify
 * width/height (as well as other available mixins to style other parts of the
 * dialog contents).
 */
const CrDialogElementBase = CrContainerShadowMixin(PolymerElement);
class CrDialogElement extends CrDialogElementBase {
    constructor() {
        super(...arguments);
        this.intersectionObserver_ = null;
        this.mutationObserver_ = null;
        this.boundKeydown_ = null;
    }
    static get is() {
        return 'cr-dialog';
    }
    static get template() {
        return getTemplate$D();
    }
    static get properties() {
        return {
            open: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /**
             * Alt-text for the dialog close button.
             */
            closeText: String,
            /**
             * True if the dialog should remain open on 'popstate' events. This is
             * used for navigable dialogs that have their separate navigation handling
             * code.
             */
            ignorePopstate: {
                type: Boolean,
                value: false,
            },
            /**
             * True if the dialog should ignore 'Enter' keypresses.
             */
            ignoreEnterKey: {
                type: Boolean,
                value: false,
            },
            /**
             * True if the dialog should consume 'keydown' events. If ignoreEnterKey
             * is true, 'Enter' key won't be consumed.
             */
            consumeKeydownEvent: {
                type: Boolean,
                value: false,
            },
            /**
             * True if the dialog should not be able to be cancelled, which will
             * prevent 'Escape' key presses from closing the dialog.
             */
            noCancel: {
                type: Boolean,
                value: false,
            },
            // True if dialog should show the 'X' close button.
            showCloseButton: {
                type: Boolean,
                value: false,
            },
            showOnAttach: {
                type: Boolean,
                value: false,
            },
            /**
             * Text for the aria description.
             */
            ariaDescriptionText: String,
        };
    }
    ready() {
        super.ready();
        // If the active history entry changes (i.e. user clicks back button),
        // all open dialogs should be cancelled.
        window.addEventListener('popstate', () => {
            if (!this.ignorePopstate && this.$.dialog.open) {
                this.cancel();
            }
        });
        if (!this.ignoreEnterKey) {
            this.addEventListener('keypress', this.onKeypress_.bind(this));
        }
        this.addEventListener('pointerdown', e => this.onPointerdown_(e));
    }
    connectedCallback() {
        super.connectedCallback();
        const mutationObserverCallback = () => {
            if (this.$.dialog.open) {
                this.enableShadowBehavior(true);
                this.addKeydownListener_();
            }
            else {
                this.enableShadowBehavior(false);
                this.removeKeydownListener_();
            }
        };
        this.mutationObserver_ = new MutationObserver(mutationObserverCallback);
        this.mutationObserver_.observe(this.$.dialog, {
            attributes: true,
            attributeFilter: ['open'],
        });
        // In some cases dialog already has the 'open' attribute by this point.
        mutationObserverCallback();
        if (this.showOnAttach) {
            this.showModal();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeKeydownListener_();
        if (this.mutationObserver_) {
            this.mutationObserver_.disconnect();
            this.mutationObserver_ = null;
        }
    }
    addKeydownListener_() {
        if (!this.consumeKeydownEvent) {
            return;
        }
        this.boundKeydown_ = this.boundKeydown_ || this.onKeydown_.bind(this);
        this.addEventListener('keydown', this.boundKeydown_);
        // Sometimes <body> is key event's target and in that case the event
        // will bypass cr-dialog. We should consume those events too in order to
        // behave modally. This prevents accidentally triggering keyboard commands.
        document.body.addEventListener('keydown', this.boundKeydown_);
    }
    removeKeydownListener_() {
        if (!this.boundKeydown_) {
            return;
        }
        this.removeEventListener('keydown', this.boundKeydown_);
        document.body.removeEventListener('keydown', this.boundKeydown_);
        this.boundKeydown_ = null;
    }
    showModal() {
        this.$.dialog.showModal();
        assert(this.$.dialog.open);
        this.open = true;
        this.dispatchEvent(new CustomEvent('cr-dialog-open', { bubbles: true, composed: true }));
    }
    cancel() {
        this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
        this.$.dialog.close();
        assert(!this.$.dialog.open);
        this.open = false;
    }
    close() {
        this.$.dialog.close('success');
        assert(!this.$.dialog.open);
        this.open = false;
    }
    /**
     * Set the title of the dialog for a11y reader.
     * @param title Title of the dialog.
     */
    setTitleAriaLabel(title) {
        this.$.dialog.removeAttribute('aria-labelledby');
        this.$.dialog.setAttribute('aria-label', title);
    }
    onCloseKeypress_(e) {
        // Because the dialog may have a default Enter key handler, prevent
        // keypress events from bubbling up from this element.
        e.stopPropagation();
    }
    onNativeDialogClose_(e) {
        // Ignore any 'close' events not fired directly by the <dialog> element.
        if (e.target !== this.getNative()) {
            return;
        }
        // Catch and re-fire the 'close' event such that it bubbles across Shadow
        // DOM v1.
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
    onNativeDialogCancel_(e) {
        // Ignore any 'cancel' events not fired directly by the <dialog> element.
        if (e.target !== this.getNative()) {
            return;
        }
        if (this.noCancel) {
            e.preventDefault();
            return;
        }
        // When the dialog is dismissed using the 'Esc' key, need to manually update
        // the |open| property (since close() is not called).
        this.open = false;
        // Catch and re-fire the native 'cancel' event such that it bubbles across
        // Shadow DOM v1.
        this.dispatchEvent(new CustomEvent('cancel', { bubbles: true, composed: true }));
    }
    /**
     * Expose the inner native <dialog> for some rare cases where it needs to be
     * directly accessed (for example to programmatically setheight/width, which
     * would not work on the wrapper).
     */
    getNative() {
        return this.$.dialog;
    }
    onKeypress_(e) {
        if (e.key !== 'Enter') {
            return;
        }
        // Accept Enter keys from either the dialog itself, or a child cr-input,
        // considering that the event may have been retargeted, for example if the
        // cr-input is nested inside another element. Also exclude inputs of type
        // 'search', since hitting 'Enter' on a search field most likely intends to
        // trigger searching.
        const accept = e.target === this ||
            e.composedPath().some(el => el.tagName === 'CR-INPUT' &&
                el.type !== 'search');
        if (!accept) {
            return;
        }
        const actionButton = this.querySelector('.action-button:not([disabled]):not([hidden])');
        if (actionButton) {
            actionButton.click();
            e.preventDefault();
        }
    }
    onKeydown_(e) {
        assert(this.consumeKeydownEvent);
        if (!this.getNative().open) {
            return;
        }
        if (this.ignoreEnterKey && e.key === 'Enter') {
            return;
        }
        // Stop propagation to behave modally.
        e.stopPropagation();
    }
    onPointerdown_(e) {
        // Only show pulse animation if user left-clicked outside of the dialog
        // contents.
        if (e.button !== 0 ||
            e.composedPath()[0].tagName !== 'DIALOG') {
            return;
        }
        this.$.dialog.animate([
            { transform: 'scale(1)', offset: 0 },
            { transform: 'scale(1.02)', offset: 0.4 },
            { transform: 'scale(1.02)', offset: 0.6 },
            { transform: 'scale(1)', offset: 1 },
        ], {
            duration: 180,
            easing: 'ease-in-out',
            iterations: 1,
        });
        // Prevent any text from being selected within the dialog when clicking in
        // the backdrop area.
        e.preventDefault();
    }
    focus() {
        const titleContainer = this.shadowRoot.querySelector('.title-container');
        assert(titleContainer);
        titleContainer.focus();
    }
}
customElements.define(CrDialogElement.is, CrDialogElement);

const styleMod$9 = document.createElement('dom-module');
styleMod$9.appendChild(html `
  <template>
    <style include="cr-hidden-style cr-icons">
:host,html{--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host,html{--scrollable-border-color:var(--google-grey-700)}}[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);
styleMod$9.register('cr-shared-style');

const styleMod$8 = document.createElement('dom-module');
styleMod$8.appendChild(html `
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
`.content);
styleMod$8.register('cr-input-style');

function getTemplate$C() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style cr-input-style cr-shared-style">:host([disabled]) :-webkit-any(#label,#error,#input-container){opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]) :is(#label,#error,#input-container){opacity:1}:host ::slotted(cr-button[slot=suffix]){margin-inline-start:var(--cr-button-edge-spacing)!important}:host([invalid]) #label{color:var(--cr-input-error-color)}#input{border-bottom:var(--cr-input-border-bottom,none);letter-spacing:var(--cr-input-letter-spacing)}:host-context([chrome-refresh-2023]) #input{border-bottom:none}:host-context([chrome-refresh-2023]) #input-container{border:var(--cr-input-border,none)}#input::placeholder{color:var(--cr-input-placeholder-color,var(--cr-secondary-text-color));letter-spacing:var(--cr-input-placeholder-letter-spacing)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([readonly]) #input{opacity:var(--cr-input-readonly-opacity,.6)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#error{color:var(--cr-input-error-color);display:var(--cr-input-error-display,block);font-size:var(--cr-form-field-label-font-size);height:var(--cr-form-field-label-height);line-height:var(--cr-form-field-label-line-height);margin:8px 0;visibility:hidden;white-space:var(--cr-input-error-white-space)}:host-context([chrome-refresh-2023]) #error{font-size:11px;line-height:16px;margin:4px 10px}:host([invalid]) #error{visibility:visible}#inner-input-content,#row-container{align-items:center;display:flex;justify-content:space-between;position:relative}:host-context([chrome-refresh-2023]) #inner-input-content{gap:4px;height:16px;z-index:1}#input[type=search]::-webkit-search-cancel-button{display:none}:host-context([dir=rtl]) #input[type=url]{text-align:right}#input[type=url]{direction:ltr}</style>
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
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Input types supported by cr-input.
 */
const SUPPORTED_INPUT_TYPES = new Set([
    'number',
    'password',
    'search',
    'text',
    'url',
]);
class CrInputElement extends PolymerElement {
    static get is() {
        return 'cr-input';
    }
    static get template() {
        return getTemplate$C();
    }
    static get properties() {
        return {
            ariaDescription: {
                type: String,
            },
            ariaLabel: {
                type: String,
                value: '',
            },
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            autoValidate: Boolean,
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            errorMessage: {
                type: String,
                value: '',
                observer: 'onInvalidOrErrorMessageChanged_',
            },
            displayErrorMessage_: {
                type: String,
                value: '',
            },
            /**
             * This is strictly used internally for styling, do not attempt to use
             * this to set focus.
             */
            focused_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            invalid: {
                type: Boolean,
                value: false,
                notify: true,
                reflectToAttribute: true,
                observer: 'onInvalidOrErrorMessageChanged_',
            },
            max: {
                type: Number,
                reflectToAttribute: true,
            },
            min: {
                type: Number,
                reflectToAttribute: true,
            },
            maxlength: {
                type: Number,
                reflectToAttribute: true,
            },
            minlength: {
                type: Number,
                reflectToAttribute: true,
            },
            pattern: {
                type: String,
                reflectToAttribute: true,
            },
            inputmode: String,
            label: {
                type: String,
                value: '',
            },
            placeholder: {
                type: String,
                value: null,
                observer: 'placeholderChanged_',
            },
            readonly: {
                type: Boolean,
                reflectToAttribute: true,
            },
            required: {
                type: Boolean,
                reflectToAttribute: true,
            },
            inputTabindex: {
                type: Number,
                value: 0,
                observer: 'onInputTabindexChanged_',
            },
            type: {
                type: String,
                value: 'text',
                observer: 'onTypeChanged_',
            },
            value: {
                type: String,
                value: '',
                notify: true,
                observer: 'onValueChanged_',
            },
        };
    }
    ready() {
        super.ready();
        // Use inputTabindex instead.
        assert(!this.hasAttribute('tabindex'));
    }
    onInputTabindexChanged_() {
        // CrInput only supports 0 or -1 values for the input's tabindex to allow
        // having the input in tab order or not. Values greater than 0 will not work
        // as the shadow root encapsulates tabindices.
        assert(this.inputTabindex === 0 || this.inputTabindex === -1);
    }
    onTypeChanged_() {
        // Check that the 'type' is one of the supported types.
        assert(SUPPORTED_INPUT_TYPES.has(this.type));
    }
    get inputElement() {
        return this.$.input;
    }
    /**
     * Returns the aria label to be used with the input element.
     */
    getAriaLabel_(ariaLabel, label, placeholder) {
        return ariaLabel || label || placeholder;
    }
    /**
     * Returns 'true' or 'false' as a string for the aria-invalid attribute.
     */
    getAriaInvalid_(invalid) {
        return invalid ? 'true' : 'false';
    }
    onInvalidOrErrorMessageChanged_() {
        this.displayErrorMessage_ = this.invalid ? this.errorMessage : '';
        // On VoiceOver role="alert" is not consistently announced when its content
        // changes. Adding and removing the |role| attribute every time there
        // is an error, triggers VoiceOver to consistently announce.
        const ERROR_ID = 'error';
        const errorElement = this.shadowRoot.querySelector(`#${ERROR_ID}`);
        assert(errorElement);
        if (this.invalid) {
            errorElement.setAttribute('role', 'alert');
            this.inputElement.setAttribute('aria-errormessage', ERROR_ID);
        }
        else {
            errorElement.removeAttribute('role');
            this.inputElement.removeAttribute('aria-errormessage');
        }
    }
    /**
     * This is necessary instead of doing <input placeholder="[[placeholder]]">
     * because if this.placeholder is set to a truthy value then removed, it
     * would show "null" as placeholder.
     */
    placeholderChanged_() {
        if (this.placeholder || this.placeholder === '') {
            this.inputElement.setAttribute('placeholder', this.placeholder);
        }
        else {
            this.inputElement.removeAttribute('placeholder');
        }
    }
    focus() {
        this.focusInput();
    }
    /**
     * Focuses the input element.
     * TODO(crbug.com/882612): Replace this with focus() after resolving the text
     * selection issue described in onFocus_().
     * @return Whether the <input> element was focused.
     */
    focusInput() {
        if (this.shadowRoot.activeElement === this.inputElement) {
            return false;
        }
        this.inputElement.focus();
        return true;
    }
    onValueChanged_(newValue, oldValue) {
        if (!newValue && !oldValue) {
            return;
        }
        if (this.autoValidate) {
            this.validate();
        }
    }
    /**
     * 'change' event fires when <input> value changes and user presses 'Enter'.
     * This function helps propagate it to host since change events don't
     * propagate across Shadow DOM boundary by default.
     */
    onInputChange_(e) {
        this.dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true, detail: { sourceEvent: e } }));
    }
    onInputFocus_() {
        this.focused_ = true;
    }
    onInputBlur_() {
        this.focused_ = false;
    }
    /**
     * Selects the text within the input. If no parameters are passed, it will
     * select the entire string. Either no params or both params should be passed.
     * Publicly, this function should be used instead of inputElement.select() or
     * manipulating inputElement.selectionStart/selectionEnd because the order of
     * execution between focus() and select() is sensitive.
     */
    select(start, end) {
        this.inputElement.focus();
        if (start !== undefined && end !== undefined) {
            this.inputElement.setSelectionRange(start, end);
        }
        else {
            // Can't just pass one param.
            assert(start === undefined && end === undefined);
            this.inputElement.select();
        }
    }
    validate() {
        this.invalid = !this.inputElement.checkValidity();
        return !this.invalid;
    }
}
customElements.define(CrInputElement.is, CrInputElement);

const styleMod$7 = document.createElement('dom-module');
styleMod$7.appendChild(html `
  <template>
    <style>
.search-bubble{--search-bubble-color:var(--paper-yellow-500);position:absolute;z-index:1}.search-bubble-innards{align-items:center;background-color:var(--search-bubble-color);border-radius:2px;color:var(--google-grey-900);max-width:100px;min-width:64px;overflow:hidden;padding:4px 10px;text-align:center;text-overflow:ellipsis;white-space:nowrap}.search-bubble-innards::after{background-color:var(--search-bubble-color);content:'';height:10px;left:calc(50% - 5px);position:absolute;top:-5px;transform:rotate(-45deg);width:10px;z-index:-1}.search-bubble-innards.above::after{bottom:-5px;top:auto;transform:rotate(-135deg)}
    </style>
  </template>
`.content);
styleMod$7.register('search-highlight-style');

const styleMod$6 = document.createElement('dom-module');
styleMod$6.appendChild(html `
  <template>
    <style>
.md-select{--md-arrow-width:10px;--md-select-bg-color:var(--google-grey-100);--md-select-focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--md-select-option-bg-color:white;--md-select-side-padding:8px;--md-select-text-color:var(--cr-primary-text-color);-webkit-appearance:none;background:url(//resources/images/arrow_down.svg) calc(100% - var(--md-select-side-padding)) center no-repeat;background-color:var(--md-select-bg-color);background-size:var(--md-arrow-width);border:none;border-radius:4px;color:var(--md-select-text-color);cursor:pointer;font-family:inherit;font-size:inherit;line-height:inherit;max-width:100%;outline:0;padding-bottom:6px;padding-inline-end:calc(var(--md-select-side-padding) + var(--md-arrow-width) + 3px);padding-inline-start:var(--md-select-side-padding);padding-top:6px;width:var(--md-select-width,200px)}@media (prefers-color-scheme:dark){.md-select{--md-select-bg-color:rgba(0, 0, 0, .3);--md-select-focus-shadow-color:rgba(var(--google-blue-300-rgb), .5);--md-select-option-bg-color:var(--google-grey-900-white-4-percent);background-image:url(//resources/images/dark/arrow_down.svg)}}:host-context([chrome-refresh-2023]) .md-select{--md-select-bg-color:transparent;--md-arrow-width:7px;--md-select-side-padding:10px;--md-select-text-color:inherit;border:solid 1px var(--color-combobox-container-outline,var(--cr-fallback-color-neutral-outline));border-radius:8px;box-sizing:border-box;font-size:12px;height:36px;line-height:36px;padding-bottom:0;padding-top:0}:host-context([chrome-refresh-2023]) .md-select:hover{background-color:var(--color-comboxbox-ink-drop-hovered,var(--cr-hover-on-subtle-background-color))}.md-select :-webkit-any(option,optgroup){background-color:var(--md-select-option-bg-color)}.md-select[disabled]{opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]) .md-select[disabled]{background-color:var(--color-combobox-background-disabled,var(--cr-fallback-color-disabled-background));border-color:transparent;color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));opacity:1}.md-select:focus{box-shadow:0 0 0 2px var(--md-select-focus-shadow-color)}:host-context([chrome-refresh-2023]) .md-select:focus{box-shadow:none;outline:solid 2px var(--cr-focus-outline-color);outline-offset:-1px}@media (forced-colors:active){.md-select:focus{outline:var(--cr-focus-outline-hcm)}}.md-select:active{box-shadow:none}:host-context([dir=rtl]) .md-select{background-position-x:var(--md-select-side-padding)}
    </style>
  </template>
`.content);
styleMod$6.register('md-select');

const template$4 = html `
<style>
html{--print-preview-row-height:38px;--print-preview-sidebar-width:384px;--print-preview-title-width:120px;--print-preview-sidebar-margin:24px;--print-preview-dropdown-width:calc(var(--print-preview-sidebar-width)
      - var(--print-preview-title-width)
      - 3 * var(--print-preview-sidebar-margin));--print-preview-settings-border:1px solid var(--google-grey-200);--print-preview-dialog-margin:34px;--cr-form-field-label-height:initial;--cr-form-field-label-line-height:.75rem;--destination-item-height:32px;--preview-area-background-color:var(--google-grey-300);--iron-icon-fill-color:var(--google-grey-700);--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size);--search-icon-size:32px;--throbber-size:16px;--error-status-alert:var(--google-red-600);--error-status-warning:#e37400}@media (prefers-color-scheme:dark){html{--preview-area-background-color:var(--google-grey-700);--print-preview-settings-border:var(--cr-separator-line);--iron-icon-fill-color:var(--google-grey-500);--error-status-alert:var(--google-red-300);--error-status-warning:#fdd663}}
</style>
`;
document.head.appendChild(template$4.content);

const styleMod$5 = document.createElement('dom-module');
styleMod$5.appendChild(html `
  <template>
    <style include="cr-shared-style">
select.md-select{margin-bottom:2px;margin-top:2px;min-height:32px;padding-bottom:1px;padding-inline-end:32px;padding-top:1px;user-select:none;--md-select-width:calc(100% - 2 * var(--print-preview-sidebar-margin))}.checkbox cr-checkbox{min-height:var(--print-preview-row-height)}:host-context(html:not([chrome-refresh-2023])) .checkbox cr-checkbox{--cr-checkbox-ripple-size:var(--print-preview-row-height)}.checkbox cr-checkbox::part(label-container){overflow:hidden;padding-inline-start:16px}cr-input{line-height:20px}cr-input::part(row-container){min-height:var(--print-preview-row-height)}print-preview-settings-section [slot=controls]>*{margin:0 var(--print-preview-sidebar-margin)}cr-dialog::part(wrapper){max-height:calc(100vh - 68px);max-width:100%;width:calc(100vw - 68px)}cr-dialog [slot=body]{box-sizing:border-box}#dialog div[slot=title]{padding-bottom:8px}#dialog div[slot=button-container]{align-items:center;box-shadow:0 -1px 1px 0 var(--cr-separator-color);min-height:64px;padding-bottom:0;padding-top:0}
    </style>
  </template>
`.content);
styleMod$5.register('print-preview-shared');

function getTemplate$B() {
    return html `<!--_html_template_start_--><style include="print-preview-shared md-select search-highlight-style
    cr-hidden-style">:host{display:flex;min-height:54px;position:relative}:host>*{overflow:hidden;text-overflow:ellipsis;vertical-align:middle}.label,.value{align-self:center;color:var(--cr-primary-text-color);overflow:hidden}.label{flex:1;min-width:96px;opacity:.87}.value{flex:0;min-width:239px;text-overflow:ellipsis;white-space:nowrap}.value>*{display:flex;margin-inline-start:10px}cr-input{width:239px;--cr-input-error-display:none}select.md-select{font-size:1em}</style>
<label class="label searchable">[[getDisplayName_(capability)]]</label>
<div class="value">
  <template is="dom-if" if="[[isCapabilityTypeSelect_(capability)]]" restamp>
    <div>
      <select class="md-select" on-change="onUserInput_">
        <template is="dom-repeat" items="[[capability.select_cap.option]]">
          <option class="searchable" text="[[getDisplayName_(item)]]" value="[[item.value]]" selected="[[isOptionSelected_(item, currentValue_)]]">
          </option>
        </template>
      </select>
    </div>
  </template>
  <span hidden$="[[!isCapabilityTypeInput_(capability)]]">
    <cr-input type="text" on-input="onUserInput_" spellcheck="false" placeholder="[[getCapabilityPlaceholder_(capability)]]">
    </cr-input>
  </span>
  <span hidden$="[[!isCapabilityTypeCheckbox_(capability)]]">
    <cr-checkbox on-change="onCheckboxInput_" checked="[[isChecked_(currentValue_)]]">
    </cr-checkbox>
  </span>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WRAPPER_CSS_CLASS = 'search-highlight-wrapper';
const ORIGINAL_CONTENT_CSS_CLASS = 'search-highlight-original-content';
const HIT_CSS_CLASS = 'search-highlight-hit';
const SEARCH_BUBBLE_CSS_CLASS = 'search-bubble';
/**
 * Replaces the the highlight wrappers given in |wrappers| with the original
 * search nodes.
 */
function removeHighlights(wrappers) {
    for (const wrapper of wrappers) {
        // If wrapper is already removed, do nothing.
        if (!wrapper.parentElement) {
            continue;
        }
        const originalContent = wrapper.querySelector(`.${ORIGINAL_CONTENT_CSS_CLASS}`);
        assert(originalContent);
        const textNode = originalContent.firstChild;
        assert(textNode);
        wrapper.parentElement.replaceChild(textNode, wrapper);
    }
}
/**
 * Applies the highlight UI (yellow rectangle) around all matches in |node|.
 * @param node The text node to be highlighted. |node| ends up
 *     being hidden.
 * @return The new highlight wrapper.
 */
function highlight(node, ranges) {
    assert(ranges.length > 0);
    const wrapper = document.createElement('span');
    wrapper.classList.add(WRAPPER_CSS_CLASS);
    // Use existing node as placeholder to determine where to insert the
    // replacement content.
    assert(node.parentNode);
    node.parentNode.replaceChild(wrapper, node);
    // Keep the existing node around for when the highlights are removed. The
    // existing text node might be involved in data-binding and therefore should
    // not be discarded.
    const span = document.createElement('span');
    span.classList.add(ORIGINAL_CONTENT_CSS_CLASS);
    span.style.display = 'none';
    span.appendChild(node);
    wrapper.appendChild(span);
    const text = node.textContent;
    const tokens = [];
    for (let i = 0; i < ranges.length; ++i) {
        const range = ranges[i];
        const prev = ranges[i - 1] || { start: 0, length: 0 };
        const start = prev.start + prev.length;
        const length = range.start - start;
        tokens.push(text.substr(start, length));
        tokens.push(text.substr(range.start, range.length));
    }
    const last = ranges.slice(-1)[0];
    tokens.push(text.substr(last.start + last.length));
    for (let i = 0; i < tokens.length; ++i) {
        if (i % 2 === 0) {
            wrapper.appendChild(document.createTextNode(tokens[i]));
        }
        else {
            const hitSpan = document.createElement('span');
            hitSpan.classList.add(HIT_CSS_CLASS);
            // Defaults to the color associated with --paper-yellow-500.
            hitSpan.style.backgroundColor =
                'var(--search-highlight-hit-background-color, #ffeb3b)';
            // Defaults to the color associated with --google-grey-900.
            hitSpan.style.color = 'var(--search-highlight-hit-color, #202124)';
            hitSpan.textContent = tokens[i];
            wrapper.appendChild(hitSpan);
        }
    }
    return wrapper;
}
/**
 * Creates an empty search bubble (styled HTML element without text).
 * |node| should already be visible or the bubble will render incorrectly.
 * @param node The node to be highlighted.
 * @param horizontallyCenter Whether or not to horizontally center
 *     the shown search bubble (if any) based on |node|'s left and width.
 * @return The search bubble that was added, or null if no new
 *     bubble was added.
 */
function createEmptySearchBubble(node, horizontallyCenter) {
    let anchor = node;
    if (node.nodeName === 'SELECT') {
        anchor = node.parentNode;
    }
    if (anchor instanceof ShadowRoot) {
        anchor = anchor.host.parentNode;
    }
    let searchBubble = anchor
        .querySelector(`.${SEARCH_BUBBLE_CSS_CLASS}`);
    // If the node has already been highlighted, there is no need to do
    // anything.
    if (searchBubble) {
        return searchBubble;
    }
    searchBubble = document.createElement('div');
    searchBubble.classList.add(SEARCH_BUBBLE_CSS_CLASS);
    const innards = document.createElement('div');
    innards.classList.add('search-bubble-innards');
    innards.textContent = '\u00a0'; // Non-breaking space for offsetHeight.
    searchBubble.appendChild(innards);
    anchor.appendChild(searchBubble);
    const updatePosition = function () {
        const nodeEl = node;
        assert(searchBubble);
        assert(typeof nodeEl.offsetTop === 'number');
        searchBubble.style.top = nodeEl.offsetTop +
            (innards.classList.contains('above') ? -searchBubble.offsetHeight :
                nodeEl.offsetHeight) +
            'px';
        if (horizontallyCenter) {
            const width = nodeEl.offsetWidth - searchBubble.offsetWidth;
            searchBubble.style.left = nodeEl.offsetLeft + width / 2 + 'px';
        }
    };
    updatePosition();
    searchBubble.addEventListener('mouseover', function () {
        innards.classList.toggle('above');
        updatePosition();
    });
    // TODO(crbug.com/355446): create a way to programmatically update these
    // bubbles (i.e. call updatePosition()) when outer scope knows they need to
    // be repositioned.
    return searchBubble;
}
function stripDiacritics(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @param element The element to update. Element should have a shadow root.
 * @param query The current search query
 * @param bubbles A map of bubbles created / results found so far.
 * @return The highlight wrappers that were created.
 */
function updateHighlights(element, query, bubbles) {
    const highlights = [];
    if (!query) {
        return highlights;
    }
    assert(query.global);
    element.shadowRoot.querySelectorAll('.searchable').forEach(childElement => {
        childElement.childNodes.forEach(node => {
            if (node.nodeType !== Node.TEXT_NODE) {
                return;
            }
            const textContent = node.nodeValue;
            if (textContent.trim().length === 0) {
                return;
            }
            const strippedText = stripDiacritics(textContent);
            const ranges = [];
            for (let match; match = query.exec(strippedText);) {
                ranges.push({ start: match.index, length: match[0].length });
            }
            if (ranges.length > 0) {
                // Don't highlight <select> nodes, yellow rectangles can't be
                // displayed within an <option>.
                if (node.parentNode.nodeName === 'OPTION') {
                    // The bubble should be parented by the select node's parent.
                    // Note: The bubble's ::after element, a yellow arrow, will not
                    // appear correctly in print preview without SPv175 enabled. See
                    // https://crbug.com/817058.
                    // TODO(crbug.com/1038464): turn on horizontallyCenter when we fix
                    // incorrect positioning caused by scrollbar width changing after
                    // search finishes.
                    assert(node.parentNode);
                    assert(node.parentNode.parentNode);
                    const bubble = createEmptySearchBubble(node.parentNode.parentNode, 
                    /* horizontallyCenter= */ false);
                    const numHits = ranges.length + (bubbles.get(bubble) || 0);
                    bubbles.set(bubble, numHits);
                    const msgName = numHits === 1 ? 'searchResultBubbleText' :
                        'searchResultsBubbleText';
                    bubble.firstChild.textContent =
                        loadTimeData.getStringF(msgName, numHits);
                }
                else {
                    highlights.push(highlight(node, ranges));
                }
            }
        });
    });
    return highlights;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsMixin = dedupingMixin((superClass) => {
    class SettingsMixin extends superClass {
        static get properties() {
            return {
                settings: Object,
            };
        }
        getSetting(settingName) {
            return getInstance().getSetting(settingName);
        }
        getSettingValue(settingName) {
            return getInstance().getSettingValue(settingName);
        }
        setSetting(settingName, value, noSticky) {
            getInstance().setSetting(settingName, value, noSticky);
        }
        setSettingSplice(settingName, start, end, newValue, noSticky) {
            getInstance().setSettingSplice(settingName, start, end, newValue, noSticky);
        }
        setSettingValid(settingName, valid) {
            getInstance().setSettingValid(settingName, valid);
        }
    }
    return SettingsMixin;
});

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewAdvancedSettingsItemElementBase = SettingsMixin(PolymerElement);
class PrintPreviewAdvancedSettingsItemElement extends PrintPreviewAdvancedSettingsItemElementBase {
    static get is() {
        return 'print-preview-advanced-settings-item';
    }
    static get template() {
        return getTemplate$B();
    }
    static get properties() {
        return {
            capability: Object,
            currentValue_: String,
        };
    }
    static get observers() {
        return [
            'updateFromSettings_(capability, settings.vendorItems.value)',
        ];
    }
    updateFromSettings_() {
        const settings = this.getSetting('vendorItems').value;
        // The settings may not have a property with the id if they were populated
        // from sticky settings from a different destination or if the
        // destination's capabilities changed since the sticky settings were
        // generated.
        if (!settings.hasOwnProperty(this.capability.id)) {
            return;
        }
        const value = settings[this.capability.id];
        if (this.isCapabilityTypeSelect_()) {
            // Ignore a value that can't be selected.
            if (this.hasOptionWithValue_(value)) {
                this.currentValue_ = value;
            }
        }
        else {
            this.currentValue_ = value;
            this.shadowRoot.querySelector('cr-input').value = this.currentValue_;
        }
    }
    /**
     * @return The display name for the setting.
     */
    getDisplayName_(item) {
        let displayName = item.display_name;
        if (!displayName && item.display_name_localized) {
            displayName = getStringForCurrentLocale(item.display_name_localized);
        }
        return displayName || '';
    }
    /**
     * @return Whether the capability represented by this item is of type select.
     */
    isCapabilityTypeSelect_() {
        return this.capability.type === 'SELECT';
    }
    /**
     * @return Whether the capability represented by this item is of type
     *     checkbox.
     */
    isCapabilityTypeCheckbox_() {
        return this.capability.type === 'TYPED_VALUE' &&
            this.capability.typed_value_cap.value_type === 'BOOLEAN';
    }
    /**
     * @return Whether the capability represented by this item is of type input.
     */
    isCapabilityTypeInput_() {
        return !this.isCapabilityTypeSelect_() && !this.isCapabilityTypeCheckbox_();
    }
    /**
     * @return Whether the checkbox setting is checked.
     */
    isChecked_() {
        return this.currentValue_ === 'true';
    }
    /**
     * @param option The option for a select capability.
     * @return Whether the option is selected.
     */
    isOptionSelected_(option) {
        return this.currentValue_ === undefined ?
            !!option.is_default :
            option.value === this.currentValue_;
    }
    /**
     * @return The placeholder value for the capability's text input.
     */
    getCapabilityPlaceholder_() {
        if (this.capability.type === 'TYPED_VALUE' &&
            this.capability.typed_value_cap &&
            this.capability.typed_value_cap.default !== undefined) {
            return this.capability.typed_value_cap.default.toString() || '';
        }
        if (this.capability.type === 'RANGE' && this.capability.range_cap &&
            this.capability.range_cap.default !== undefined) {
            return this.capability.range_cap.default.toString() || '';
        }
        return '';
    }
    hasOptionWithValue_(value) {
        return !!this.capability.select_cap &&
            !!this.capability.select_cap.option &&
            this.capability.select_cap.option.some(option => option.value === value);
    }
    /**
     * @param query The current search query.
     * @return Whether the item has a match for the query.
     */
    hasMatch(query) {
        if (!query || this.getDisplayName_(this.capability).match(query)) {
            return true;
        }
        if (!this.isCapabilityTypeSelect_()) {
            return false;
        }
        for (const option of this.capability.select_cap.option) {
            if (this.getDisplayName_(option).match(query)) {
                return true;
            }
        }
        return false;
    }
    onUserInput_(e) {
        this.currentValue_ = e.target.value;
    }
    onCheckboxInput_(e) {
        this.currentValue_ =
            e.target.checked ? 'true' : 'false';
    }
    /**
     * @return The current value of the setting, or the empty string if it is not
     *     set.
     */
    getCurrentValue() {
        return this.currentValue_ || '';
    }
    /**
     * Only used in tests.
     * @param value A value to set the setting to.
     */
    setCurrentValueForTest(value) {
        this.currentValue_ = value;
    }
    /**
     * @return The highlight wrappers and that were created.
     */
    updateHighlighting(query, bubbles) {
        return updateHighlights(this, query, bubbles);
    }
}
customElements.define(PrintPreviewAdvancedSettingsItemElement.is, PrintPreviewAdvancedSettingsItemElement);

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Helper functions for implementing an incremental search field. See
 * <settings-subpage-search> for a simple implementation.
 */
const CrSearchFieldMixin = dedupingMixin((superClass) => {
    class CrSearchFieldMixin extends superClass {
        constructor() {
            super(...arguments);
            this.effectiveValue_ = '';
            this.searchDelayTimer_ = -1;
        }
        static get properties() {
            return {
                // Prompt text to display in the search field.
                label: {
                    type: String,
                    value: '',
                },
                // Tooltip to display on the clear search button.
                clearLabel: {
                    type: String,
                    value: '',
                },
                hasSearchText: {
                    type: Boolean,
                    reflectToAttribute: true,
                    value: false,
                },
            };
        }
        /**
         * @return The input field element the behavior should use.
         */
        getSearchInput() {
            assertNotReached();
        }
        /**
         * @return The value of the search field.
         */
        getValue() {
            return this.getSearchInput().value;
        }
        fire_(eventName, detail) {
            this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
        }
        /**
         * Sets the value of the search field.
         * @param noEvent Whether to prevent a 'search-changed' event
         *     firing for this change.
         */
        setValue(value, noEvent) {
            const updated = this.updateEffectiveValue_(value);
            this.getSearchInput().value = this.effectiveValue_;
            if (!updated) {
                // If the input is only whitespace and value is empty,
                // |hasSearchText| needs to be updated.
                if (value === '' && this.hasSearchText) {
                    this.hasSearchText = false;
                }
                return;
            }
            this.onSearchTermInput();
            if (!noEvent) {
                this.fire_('search-changed', this.effectiveValue_);
            }
        }
        scheduleSearch_() {
            if (this.searchDelayTimer_ >= 0) {
                clearTimeout(this.searchDelayTimer_);
            }
            // Dispatch 'search' event after:
            //    0ms if the value is empty
            //  500ms if the value length is 1
            //  400ms if the value length is 2
            //  300ms if the value length is 3
            //  200ms if the value length is 4 or greater.
            // The logic here was copied from WebKit's native 'search' event.
            const length = this.getValue().length;
            const timeoutMs = length > 0 ? (500 - 100 * (Math.min(length, 4) - 1)) : 0;
            this.searchDelayTimer_ = setTimeout(() => {
                this.getSearchInput().dispatchEvent(new CustomEvent('search', { composed: true, detail: this.getValue() }));
                this.searchDelayTimer_ = -1;
            }, timeoutMs);
        }
        onSearchTermSearch() {
            this.onValueChanged_(this.getValue(), false);
        }
        /**
         * Update the state of the search field whenever the underlying input
         * value changes. Unlike onsearch or onkeypress, this is reliably called
         * immediately after any change, whether the result of user input or JS
         * modification.
         */
        onSearchTermInput() {
            this.hasSearchText = this.getSearchInput().value !== '';
            this.scheduleSearch_();
        }
        /**
         * Updates the internal state of the search field based on a change that
         * has already happened.
         * @param noEvent Whether to prevent a 'search-changed' event
         *     firing for this change.
         */
        onValueChanged_(newValue, noEvent) {
            const updated = this.updateEffectiveValue_(newValue);
            if (updated && !noEvent) {
                this.fire_('search-changed', this.effectiveValue_);
            }
        }
        /**
         * Trim leading whitespace and replace consecutive whitespace with
         * single space. This will prevent empty string searches and searches
         * for effectively the same query.
         */
        updateEffectiveValue_(value) {
            const effectiveValue = value.replace(/\s+/g, ' ').replace(/^\s/, '');
            if (effectiveValue === this.effectiveValue_) {
                return false;
            }
            this.effectiveValue_ = effectiveValue;
            return true;
        }
    }
    return CrSearchFieldMixin;
});

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Mixin to be used by Polymer elements that want to
 * automatically remove WebUI listeners when detached.
 */
const WebUiListenerMixin = dedupingMixin((superClass) => {
    class WebUiListenerMixin extends superClass {
        constructor() {
            super(...arguments);
            /**
             * Holds WebUI listeners that need to be removed when this element is
             * destroyed.
             */
            this.webUiListeners_ = [];
        }
        /**
         * Adds a WebUI listener and registers it for automatic removal when
         * this element is detached. Note: Do not use this method if you intend
         * to remove this listener manually (use addWebUiListener directly
         * instead).
         *
         * @param eventName The event to listen to.
         * @param callback The callback run when the event is fired.
         */
        addWebUiListener(eventName, callback) {
            this.webUiListeners_.push(addWebUiListener(eventName, callback));
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            while (this.webUiListeners_.length > 0) {
                removeWebUiListener(this.webUiListeners_.pop());
            }
        }
    }
    return WebUiListenerMixin;
});

function getTemplate$A() {
    return html `<!--_html_template_start_--><style include="print-preview-shared cr-input-style">:host{display:flex;--cr-input-error-display:none}cr-input::part(row-container){min-height:32px}#clearSearch,#icon{margin-inline-end:0;margin-inline-start:0}#icon{height:var(--search-icon-size);width:var(--search-icon-size)}#clearSearch{--clear-icon-size:28px;--cr-icon-button-size:var(--clear-icon-size);--cr-icon-button-icon-size:20px;height:var(--clear-icon-size);position:absolute;right:0;width:var(--clear-icon-size)}:host-context([dir=rtl]) #clearSearch{left:0;right:auto}:host([has-search-text]) cr-input{--cr-input-padding-end:24px}.search-box-input{width:100%}.search-box-input::-webkit-search-cancel-button{-webkit-appearance:none}</style>
<cr-input type="search" id="searchInput" class="search-box-input" on-search="onSearchTermSearch" on-input="onSearchTermInput" aria-label$="[[label]]" placeholder="[[label]]" autofocus="[[autofocus]]" spellcheck="false">
  <div slot="inline-prefix" id="icon" class="cr-icon icon-search" alt=""></div>
  <cr-icon-button id="clearSearch" class="icon-cancel" hidden$="[[!hasSearchText]]" slot="suffix" on-click="onClearClick_" title="$i18n{clearSearch}">
  </cr-icon-button>
</cr-input>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SANITIZE_REGEX = /[-[\]{}()*+?.,\\^$|#\s]/g;
const PrintPreviewSearchBoxElementBase = CrSearchFieldMixin(WebUiListenerMixin(PolymerElement));
class PrintPreviewSearchBoxElement extends PrintPreviewSearchBoxElementBase {
    constructor() {
        super(...arguments);
        this.lastQuery_ = '';
    }
    static get is() {
        return 'print-preview-search-box';
    }
    static get template() {
        return getTemplate$A();
    }
    static get properties() {
        return {
            autofocus: Boolean,
            searchQuery: {
                type: Object,
                notify: true,
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('search-changed', e => this.onSearchChanged_(e));
    }
    getSearchInput() {
        return this.$.searchInput;
    }
    focus() {
        this.$.searchInput.focus();
    }
    onSearchChanged_(e) {
        const strippedQuery = stripDiacritics(e.detail.trim());
        const safeQuery = strippedQuery.replace(SANITIZE_REGEX, '\\$&');
        if (safeQuery === this.lastQuery_) {
            return;
        }
        this.lastQuery_ = safeQuery;
        this.searchQuery =
            safeQuery.length > 0 ? new RegExp(`(${safeQuery})`, 'ig') : null;
    }
    onClearClick_() {
        this.setValue('');
        this.$.searchInput.focus();
    }
}
customElements.define(PrintPreviewSearchBoxElement.is, PrintPreviewSearchBoxElement);

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Make a string safe for Polymer bindings that are inner-h-t-m-l or other
 * innerHTML use.
 * @param rawString The unsanitized string
 * @param opts Optional additional allowed tags and attributes.
 */
function sanitizeInnerHtmlInternal(rawString, opts) {
    opts = opts || {};
    const html = parseHtmlSubset(`<b>${rawString}</b>`, opts.tags, opts.attrs)
        .firstElementChild;
    return html.innerHTML;
}
// 
let sanitizedPolicy = null;
/**
 * Same as |sanitizeInnerHtmlInternal|, but it passes through sanitizedPolicy
 * to create a TrustedHTML.
 */
function sanitizeInnerHtml(rawString, opts) {
    assert(window.trustedTypes);
    if (sanitizedPolicy === null) {
        // Initialize |sanitizedPolicy| lazily.
        sanitizedPolicy = window.trustedTypes.createPolicy('sanitize-inner-html', {
            createHTML: sanitizeInnerHtmlInternal,
            createScript: () => assertNotReached(),
            createScriptURL: () => assertNotReached(),
        });
    }
    return sanitizedPolicy.createHTML(rawString, opts);
}
const allowAttribute = (_node, _value) => true;
/** Allow-list of attributes in parseHtmlSubset. */
const allowedAttributes = new Map([
    [
        'href',
        (node, value) => {
            // Only allow a[href] starting with chrome:// or https:// or equaling
            // to #.
            return node.tagName === 'A' &&
                (value.startsWith('chrome://') || value.startsWith('https://') ||
                    value === '#');
        },
    ],
    [
        'target',
        (node, value) => {
            // Only allow a[target='_blank'].
            // TODO(dbeam): are there valid use cases for target !== '_blank'?
            return node.tagName === 'A' && value === '_blank';
        },
    ],
]);
/** Allow-list of optional attributes in parseHtmlSubset. */
const allowedOptionalAttributes = new Map([
    ['class', allowAttribute],
    ['id', allowAttribute],
    ['is', (_node, value) => value === 'action-link' || value === ''],
    ['role', (_node, value) => value === 'link'],
    [
        'src',
        (node, value) => {
            // Only allow img[src] starting with chrome://
            return node.tagName === 'IMG' &&
                value.startsWith('chrome://');
        },
    ],
    ['tabindex', allowAttribute],
    ['aria-hidden', allowAttribute],
    ['aria-label', allowAttribute],
    ['aria-labelledby', allowAttribute],
]);
/** Allow-list of tag names in parseHtmlSubset. */
const allowedTags = new Set(['A', 'B', 'I', 'BR', 'DIV', 'EM', 'KBD', 'P', 'PRE', 'SPAN', 'STRONG']);
/** Allow-list of optional tag names in parseHtmlSubset. */
const allowedOptionalTags = new Set(['IMG', 'LI', 'UL']);
/**
 * This policy maps a given string to a `TrustedHTML` object
 * without performing any validation. Callsites must ensure
 * that the resulting object will only be used in inert
 * documents. Initialized lazily.
 */
let unsanitizedPolicy;
/**
 * @param optTags an Array to merge.
 * @return Set of allowed tags.
 */
function mergeTags(optTags) {
    const clone = new Set(allowedTags);
    optTags.forEach(str => {
        const tag = str.toUpperCase();
        if (allowedOptionalTags.has(tag)) {
            clone.add(tag);
        }
    });
    return clone;
}
/**
 * @param optAttrs an Array to merge.
 * @return Map of allowed attributes.
 */
function mergeAttrs(optAttrs) {
    const clone = new Map(allowedAttributes);
    optAttrs.forEach(key => {
        if (allowedOptionalAttributes.has(key)) {
            clone.set(key, allowedOptionalAttributes.get(key));
        }
    });
    return clone;
}
function walk(n, f) {
    f(n);
    for (let i = 0; i < n.childNodes.length; i++) {
        walk(n.childNodes[i], f);
    }
}
function assertElement(tags, node) {
    if (!tags.has(node.tagName)) {
        throw Error(node.tagName + ' is not supported');
    }
}
function assertAttribute(attrs, attrNode, node) {
    const n = attrNode.nodeName;
    const v = attrNode.nodeValue || '';
    if (!attrs.has(n) || !attrs.get(n)(node, v)) {
        throw Error(node.tagName + '[' + n + '="' + v +
            '"] is not supported');
    }
}
/**
 * Parses a very small subset of HTML. This ensures that insecure HTML /
 * javascript cannot be injected into WebUI.
 * @param s The string to parse.
 * @param extraTags Optional extra allowed tags.
 * @param extraAttrs
 *     Optional extra allowed attributes (all tags are run through these).
 * @throws an Error in case of non supported markup.
 * @return A document fragment containing the DOM tree.
 */
function parseHtmlSubset(s, extraTags, extraAttrs) {
    const tags = extraTags ? mergeTags(extraTags) : allowedTags;
    const attrs = extraAttrs ? mergeAttrs(extraAttrs) : allowedAttributes;
    const doc = document.implementation.createHTMLDocument('');
    const r = doc.createRange();
    r.selectNode(doc.body);
    if (window.trustedTypes) {
        if (!unsanitizedPolicy) {
            unsanitizedPolicy =
                window.trustedTypes.createPolicy('parse-html-subset', {
                    createHTML: (untrustedHTML) => untrustedHTML,
                    createScript: () => assertNotReached(),
                    createScriptURL: () => assertNotReached(),
                });
        }
        s = unsanitizedPolicy.createHTML(s);
    }
    // This does not execute any scripts because the document has no view.
    const df = r.createContextualFragment(s);
    walk(df, function (node) {
        switch (node.nodeType) {
            case Node.ELEMENT_NODE:
                assertElement(tags, node);
                const nodeAttrs = node.attributes;
                for (let i = 0; i < nodeAttrs.length; ++i) {
                    assertAttribute(attrs, nodeAttrs[i], node);
                }
                break;
            case Node.COMMENT_NODE:
            case Node.DOCUMENT_FRAGMENT_NODE:
            case Node.TEXT_NODE:
                break;
            default:
                throw Error('Node type ' + node.nodeType + ' is not supported');
        }
    });
    return df;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'I18nMixin' is a Mixin offering loading of internationalization
 * strings. Typically it is used as [[i18n('someString')]] computed bindings or
 * for this.i18n('foo'). It is not needed for HTML $i18n{otherString}, which is
 * handled by a C++ templatizer.
 */
const I18nMixin = dedupingMixin((superClass) => {
    class I18nMixin extends superClass {
        /**
         * Returns a translated string where $1 to $9 are replaced by the given
         * values.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, substituted string.
         */
        i18nRaw_(id, ...varArgs) {
            return varArgs.length === 0 ? loadTimeData.getString(id) :
                loadTimeData.getStringF(id, ...varArgs);
        }
        /**
         * Returns a translated string where $1 to $9 are replaced by the given
         * values. Also sanitizes the output to filter out dangerous HTML/JS.
         * Use with Polymer bindings that are *not* inner-h-t-m-l.
         * NOTE: This is not related to $i18n{foo} in HTML, see file overview.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, sanitized, substituted string.
         */
        i18n(id, ...varArgs) {
            const rawString = this.i18nRaw_(id, ...varArgs);
            return parseHtmlSubset(`<b>${rawString}</b>`).firstChild.textContent;
        }
        /**
         * Similar to 'i18n', returns a translated, sanitized, substituted
         * string. It receives the string ID and a dictionary containing the
         * substitutions as well as optional additional allowed tags and
         * attributes. Use with Polymer bindings that are inner-h-t-m-l, for
         * example.
         * @param id The ID of the string to translate.
         */
        i18nAdvanced(id, opts) {
            opts = opts || {};
            const rawString = this.i18nRaw_(id, ...(opts.substitutions || []));
            return sanitizeInnerHtml(rawString, opts);
        }
        /**
         * Similar to 'i18n', with an unused |locale| parameter used to trigger
         * updates when the locale changes.
         * @param locale The UI language used.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9 in the
         *     string.
         * @return A translated, sanitized, substituted string.
         */
        i18nDynamic(_locale, id, ...varArgs) {
            return this.i18n(id, ...varArgs);
        }
        /**
         * Similar to 'i18nDynamic', but varArgs valus are interpreted as keys
         * in loadTimeData. This allows generation of strings that take other
         * localized strings as parameters.
         * @param locale The UI language used.
         * @param id The ID of the string to translate.
         * @param varArgs Values to replace the placeholders $1 to $9
         *     in the string. Values are interpreted as strings IDs if found in
         * the list of localized strings.
         * @return A translated, sanitized, substituted string.
         */
        i18nRecursive(locale, id, ...varArgs) {
            let args = varArgs;
            if (args.length > 0) {
                // Try to replace IDs with localized values.
                args = args.map(str => {
                    return this.i18nExists(str) ? loadTimeData.getString(str) : str;
                });
            }
            return this.i18nDynamic(locale, id, ...args);
        }
        /**
         * Returns true if a translation exists for |id|.
         */
        i18nExists(id) {
            return loadTimeData.valueExists(id);
        }
    }
    return I18nMixin;
});

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Enumeration of buckets that a user can enter while using the destination
 * search widget.
 */
var DestinationSearchBucket;
(function (DestinationSearchBucket) {
    // Used when the print destination search widget is shown.
    DestinationSearchBucket[DestinationSearchBucket["DESTINATION_SHOWN"] = 0] = "DESTINATION_SHOWN";
    // Used when the user selects a print destination.
    DestinationSearchBucket[DestinationSearchBucket["DESTINATION_CLOSED_CHANGED"] = 1] = "DESTINATION_CLOSED_CHANGED";
    // Used when the print destination search widget is closed without selecting
    // a print destination.
    DestinationSearchBucket[DestinationSearchBucket["DESTINATION_CLOSED_UNCHANGED"] = 2] = "DESTINATION_CLOSED_UNCHANGED";
    // Note: values 3-13 are intentionally unset as these correspond to
    // deprecated values in histograms/enums.xml. These enums are append-only.
    // User clicked on Manage button
    DestinationSearchBucket[DestinationSearchBucket["MANAGE_BUTTON_CLICKED"] = 14] = "MANAGE_BUTTON_CLICKED";
    // Max value.
    DestinationSearchBucket[DestinationSearchBucket["DESTINATION_SEARCH_MAX_BUCKET"] = 15] = "DESTINATION_SEARCH_MAX_BUCKET";
})(DestinationSearchBucket || (DestinationSearchBucket = {}));
/**
 * Print settings UI usage metrics buckets.
 */
var PrintSettingsUiBucket;
(function (PrintSettingsUiBucket) {
    // Advanced settings dialog is shown.
    PrintSettingsUiBucket[PrintSettingsUiBucket["ADVANCED_SETTINGS_DIALOG_SHOWN"] = 0] = "ADVANCED_SETTINGS_DIALOG_SHOWN";
    // Advanced settings dialog is closed without saving a selection.
    PrintSettingsUiBucket[PrintSettingsUiBucket["ADVANCED_SETTINGS_DIALOG_CANCELED"] = 1] = "ADVANCED_SETTINGS_DIALOG_CANCELED";
    // 'More/less settings' expanded.
    PrintSettingsUiBucket[PrintSettingsUiBucket["MORE_SETTINGS_CLICKED"] = 2] = "MORE_SETTINGS_CLICKED";
    // 'More/less settings' collapsed.
    PrintSettingsUiBucket[PrintSettingsUiBucket["LESS_SETTINGS_CLICKED"] = 3] = "LESS_SETTINGS_CLICKED";
    // User printed with extra settings expanded.
    PrintSettingsUiBucket[PrintSettingsUiBucket["PRINT_WITH_SETTINGS_EXPANDED"] = 4] = "PRINT_WITH_SETTINGS_EXPANDED";
    // User printed with extra settings collapsed.
    PrintSettingsUiBucket[PrintSettingsUiBucket["PRINT_WITH_SETTINGS_COLLAPSED"] = 5] = "PRINT_WITH_SETTINGS_COLLAPSED";
    // Max value.
    PrintSettingsUiBucket[PrintSettingsUiBucket["PRINT_SETTINGS_UI_MAX_BUCKET"] = 6] = "PRINT_SETTINGS_UI_MAX_BUCKET";
})(PrintSettingsUiBucket || (PrintSettingsUiBucket = {}));
// 
/**
 * Launch printer settings usage metric buckets.
 */
var PrintPreviewLaunchSourceBucket;
(function (PrintPreviewLaunchSourceBucket) {
    // "Manage printers" button in preview-area when it fails to fetch
    // capabilities.
    PrintPreviewLaunchSourceBucket[PrintPreviewLaunchSourceBucket["PREVIEW_AREA_CONNECTION_ERROR"] = 0] = "PREVIEW_AREA_CONNECTION_ERROR";
    // "Manage printers" button in destination-dialog-cros when there are no
    // destinations.
    PrintPreviewLaunchSourceBucket[PrintPreviewLaunchSourceBucket["DESTINATION_DIALOG_CROS_NO_PRINTERS"] = 1] = "DESTINATION_DIALOG_CROS_NO_PRINTERS";
    // "Manage printers" button in destination-dialog-cros when there are
    // destinations.
    PrintPreviewLaunchSourceBucket[PrintPreviewLaunchSourceBucket["DESTINATION_DIALOG_CROS_HAS_PRINTERS"] = 2] = "DESTINATION_DIALOG_CROS_HAS_PRINTERS";
    // Max value.
    PrintPreviewLaunchSourceBucket[PrintPreviewLaunchSourceBucket["PRINT_PREVIEW_LAUNCH_SOURCE_MAX_BUCKET"] = 3] = "PRINT_PREVIEW_LAUNCH_SOURCE_MAX_BUCKET";
})(PrintPreviewLaunchSourceBucket || (PrintPreviewLaunchSourceBucket = {}));
// 
/* A context for recording a value in a specific UMA histogram. */
class MetricsContext {
    /**
     * @param histogram The name of the histogram to be recorded in.
     * @param maxBucket The max value for the last histogram bucket.
     */
    constructor(histogram, maxBucket) {
        this.nativeLayer_ = NativeLayerImpl.getInstance();
        this.histogram_ = histogram;
        this.maxBucket_ = maxBucket;
    }
    /**
     * Record a histogram value in UMA. If specified value is larger than the
     * max bucket value, record the value in the largest bucket
     * @param bucket Value to record.
     */
    record(bucket) {
        this.nativeLayer_.recordInHistogram(this.histogram_, (bucket > this.maxBucket_) ? this.maxBucket_ : bucket, this.maxBucket_);
    }
    /**
     * Print settings UI specific usage statistics context
     */
    static printSettingsUi() {
        return new MetricsContext('PrintPreview.PrintSettingsUi', PrintSettingsUiBucket.PRINT_SETTINGS_UI_MAX_BUCKET);
    }
    // 
    /**
     * Get `MetricsContext` for `PrintPreview.PrinterSettingsLaunchSource`
     * histogram.
     */
    static getLaunchPrinterSettingsMetricsContextCros() {
        return new MetricsContext('PrintPreview.PrinterSettingsLaunchSource', PrintPreviewLaunchSourceBucket.PRINT_PREVIEW_LAUNCH_SOURCE_MAX_BUCKET);
    }
}

function getTemplate$z() {
    return html `<!--_html_template_start_--><style include="print-preview-shared cr-hidden-style">#dialog::part(dialog){height:-webkit-fit-content;max-height:calc(100vh - 2 * var(--print-preview-dialog-margin));max-width:calc(100vw - 2 * var(--print-preview-dialog-margin))}#dialog::part(wrapper){height:calc(100vh - 2 * var(--print-preview-dialog-margin))}#dialog::part(body-container){flex:1}print-preview-search-box{margin-bottom:8px;margin-top:16px}cr-dialog [slot=body]{display:flex;flex-direction:column;height:100%}#itemList{flex:1;overflow-x:hidden;overflow-y:overlay}#itemList.searching{padding-bottom:20px;padding-top:20px}</style>
<cr-dialog id="dialog" on-close="onCloseOrCancel_">
  <div slot="title">
    [[i18n('advancedSettingsDialogTitle', destination.displayName)]]
  </div>
  <div slot="body">
    <print-preview-search-box id="searchBox" hidden$="[[!hasMultipleItems_(
            destination.capabilities.printer.vendor_capability)]]" label="$i18n{advancedSettingsSearchBoxPlaceholder}" search-query="{{searchQuery_}}" autofocus>
    </print-preview-search-box>
    <div id="itemList" class$="[[isSearching_(searchQuery_)]]">
      <template is="dom-repeat" items="[[destination.capabilities.printer.vendor_capability]]">
        <print-preview-advanced-settings-item capability="[[item]]" settings="[[settings]]">
        </print-preview-advanced-settings-item>
      </template>
    </div>
    <div class="no-settings-match-hint" hidden$="[[!shouldShowHint_(hasMatching_)]]">
      $i18n{noAdvancedSettingsMatchSearchHint}
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelButtonClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onApplyButtonClick_">
      $i18n{advancedSettingsDialogConfirm}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewAdvancedSettingsDialogElementBase = I18nMixin(SettingsMixin(PolymerElement));
class PrintPreviewAdvancedSettingsDialogElement extends PrintPreviewAdvancedSettingsDialogElementBase {
    constructor() {
        super(...arguments);
        this.highlights_ = [];
        this.bubbles_ = new Map();
        this.metrics_ = MetricsContext.printSettingsUi();
    }
    static get is() {
        return 'print-preview-advanced-settings-dialog';
    }
    static get template() {
        return getTemplate$z();
    }
    static get properties() {
        return {
            destination: Object,
            searchQuery_: {
                type: Object,
                value: null,
            },
            hasMatching_: {
                type: Boolean,
                notify: true,
                computed: 'computeHasMatching_(searchQuery_)',
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('keydown', e => this.onKeydown_(e));
    }
    connectedCallback() {
        super.connectedCallback();
        this.metrics_.record(PrintSettingsUiBucket.ADVANCED_SETTINGS_DIALOG_SHOWN);
        this.$.dialog.showModal();
    }
    onKeydown_(e) {
        e.stopPropagation();
        const searchInput = this.$.searchBox.getSearchInput();
        const eventInSearchBox = e.composedPath().includes(searchInput);
        if (e.key === 'Escape' &&
            (!eventInSearchBox || !searchInput.value.trim())) {
            this.$.dialog.cancel();
            e.preventDefault();
            return;
        }
        if (e.key === 'Enter' && !eventInSearchBox) {
            const activeElementTag = e.composedPath()[0].tagName;
            if (['CR-BUTTON', 'SELECT'].includes(activeElementTag)) {
                return;
            }
            this.onApplyButtonClick_();
            e.preventDefault();
            return;
        }
    }
    /**
     * @return Whether there is more than one vendor item to display.
     */
    hasMultipleItems_() {
        return this.destination.capabilities.printer.vendor_capability.length > 1;
    }
    /**
     * @return Whether there is a setting matching the query.
     */
    computeHasMatching_() {
        if (!this.shadowRoot) {
            return true;
        }
        removeHighlights(this.highlights_);
        this.bubbles_.forEach((_number, bubble) => bubble.remove());
        this.highlights_ = [];
        this.bubbles_.clear();
        const listItems = this.shadowRoot.querySelectorAll('print-preview-advanced-settings-item');
        let hasMatch = false;
        listItems.forEach(item => {
            const matches = item.hasMatch(this.searchQuery_);
            item.hidden = !matches;
            hasMatch = hasMatch || matches;
            this.highlights_.push(...item.updateHighlighting(this.searchQuery_, this.bubbles_));
        });
        return hasMatch;
    }
    /**
     * @return Whether the no matching settings hint should be shown.
     */
    shouldShowHint_() {
        return !!this.searchQuery_ && !this.hasMatching_;
    }
    onCloseOrCancel_() {
        if (this.searchQuery_) {
            this.$.searchBox.setValue('');
        }
        if (this.$.dialog.getNative().returnValue === 'success') {
            this.metrics_.record(PrintSettingsUiBucket.ADVANCED_SETTINGS_DIALOG_CANCELED);
        }
    }
    onCancelButtonClick_() {
        this.$.dialog.cancel();
    }
    onApplyButtonClick_() {
        const settingsValues = {};
        const itemList = this.shadowRoot.querySelectorAll('print-preview-advanced-settings-item');
        itemList.forEach(item => {
            settingsValues[item.capability.id] = item.getCurrentValue();
        });
        this.setSetting('vendorItems', settingsValues);
        this.$.dialog.close();
    }
    close() {
        this.$.dialog.close();
    }
    isSearching_() {
        return this.searchQuery_ ? 'searching' : '';
    }
}
customElements.define(PrintPreviewAdvancedSettingsDialogElement.is, PrintPreviewAdvancedSettingsDialogElement);

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class Coordinate2d {
    /**
     * Immutable two dimensional point in space. The units of the dimensions are
     * undefined.
     * @param x X-dimension of the point.
     * @param y Y-dimension of the point.
     */
    constructor(x, y) {
        this.x_ = x;
        this.y_ = y;
    }
    get x() {
        return this.x_;
    }
    get y() {
        return this.y_;
    }
    equals(other) {
        return other !== null && this.x_ === other.x_ && this.y_ === other.y_;
    }
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PrintableArea {
    /**
     * Object describing the printable area of a page in the document.
     * @param origin Top left corner of the printable area of the document.
     * @param size Size of the printable area of the document.
     */
    constructor(origin, size) {
        this.origin_ = origin;
        this.size_ = size;
    }
    get origin() {
        return this.origin_;
    }
    get size() {
        return this.size_;
    }
    equals(other) {
        return other !== null && this.origin_.equals(other.origin_) &&
            this.size_.equals(other.size_);
    }
}

// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewDocumentInfoElementBase = WebUiListenerMixin(PolymerElement);
class PrintPreviewDocumentInfoElement extends PrintPreviewDocumentInfoElementBase {
    constructor() {
        super(...arguments);
        this.isInitialized_ = false;
    }
    static get is() {
        return 'print-preview-document-info';
    }
    static get properties() {
        return {
            documentSettings: {
                type: Object,
                notify: true,
                value() {
                    return {
                        allPagesHaveCustomSize: false,
                        allPagesHaveCustomOrientation: false,
                        hasSelection: false,
                        isModifiable: true,
                        isFromArc: false,
                        isScalingDisabled: false,
                        fitToPageScaling: 100,
                        pageCount: 0,
                        title: '',
                    };
                },
            },
            inFlightRequestId: {
                type: Number,
                value: -1,
            },
            margins: {
                type: Object,
                notify: true,
            },
            /**
             * Size of the pages of the document in points. Actual page-related
             * information won't be set until preview generation occurs, so use
             * a default value until then.
             */
            pageSize: {
                type: Object,
                notify: true,
                value() {
                    return new Size(612, 792);
                },
            },
            /**
             * Printable area of the document in points.
             */
            printableArea: {
                type: Object,
                notify: true,
                value() {
                    return new PrintableArea(new Coordinate2d(0, 0), new Size(612, 792));
                },
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('page-count-ready', (pageCount, previewResponseId, scaling) => this.onPageCountReady_(pageCount, previewResponseId, scaling));
        this.addWebUiListener('page-layout-ready', (pageLayout, allPagesHaveCustomSize, allPagesHaveCustomOrientation) => this.onPageLayoutReady_(pageLayout, allPagesHaveCustomSize, allPagesHaveCustomOrientation));
    }
    /**
     * Initializes the state of the data model.
     */
    init(isModifiable, isFromArc, title, hasSelection) {
        this.isInitialized_ = true;
        this.set('documentSettings.isModifiable', isModifiable);
        this.set('documentSettings.isFromArc', isFromArc);
        this.set('documentSettings.title', title);
        this.set('documentSettings.hasSelection', hasSelection);
    }
    /**
     * Updates whether scaling is disabled for the document.
     */
    updateIsScalingDisabled(isScalingDisabled) {
        if (this.isInitialized_) {
            this.set('documentSettings.isScalingDisabled', isScalingDisabled);
        }
    }
    /**
     * Called when the page layout of the document is ready. Always occurs
     * as a result of a preview request.
     * @param pageLayout Layout information about the document.
     * @param allPagesHaveCustomSize Whether this document has a custom page size
     *     or style to use for all pages.
     * @param allPagesHaveCustomOrientation Whether this document has a custom
     *     page orientation to use for all pages.
     */
    onPageLayoutReady_(pageLayout, allPagesHaveCustomSize, allPagesHaveCustomOrientation) {
        const origin = new Coordinate2d(pageLayout.printableAreaX, pageLayout.printableAreaY);
        const size = new Size(pageLayout.printableAreaWidth, pageLayout.printableAreaHeight);
        const pageSize = new Size(Math.round(pageLayout.contentWidth + pageLayout.marginLeft +
            pageLayout.marginRight), Math.round(pageLayout.contentHeight + pageLayout.marginTop +
            pageLayout.marginBottom));
        // Note that `Margins` stores rounded margin values, which is not
        // appropriate for use with `pageSize` above, as that could cause rounding
        // errors.
        const margins = new Margins(pageLayout.marginTop, pageLayout.marginRight, pageLayout.marginBottom, pageLayout.marginLeft);
        if (this.isInitialized_) {
            this.printableArea = new PrintableArea(origin, size);
            this.pageSize = pageSize;
            this.set('documentSettings.allPagesHaveCustomSize', allPagesHaveCustomSize);
            this.set('documentSettings.allPagesHaveCustomOrientation', allPagesHaveCustomOrientation);
            this.margins = margins;
        }
    }
    /**
     * Called when the document page count is received from the native layer.
     * Always occurs as a result of a preview request.
     * @param pageCount The document's page count.
     * @param previewResponseId The request ID for this page count event.
     * @param fitToPageScaling The scaling required to fit the document to page.
     */
    onPageCountReady_(pageCount, previewResponseId, fitToPageScaling) {
        if (this.inFlightRequestId !== previewResponseId || !this.isInitialized_) {
            return;
        }
        this.set('documentSettings.pageCount', pageCount);
        this.set('documentSettings.fitToPageScaling', fitToPageScaling);
    }
}
customElements.define(PrintPreviewDocumentInfoElement.is, PrintPreviewDocumentInfoElement);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

// Contains all connected resizables that do not have a parent.
var ORPHANS = new Set();

/**
 * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
 * coordinate the flow of resize events between "resizers" (elements that
 *control the size or hidden state of their children) and "resizables" (elements
 *that need to be notified when they are resized or un-hidden by their parents
 *in order to take action on their new measurements).
 *
 * Elements that perform measurement should add the `IronResizableBehavior`
 *behavior to their element definition and listen for the `iron-resize` event on
 *themselves. This event will be fired when they become showing after having
 *been hidden, when they are resized explicitly by another resizable, or when
 *the window has been resized.
 *
 * Note, the `iron-resize` event is non-bubbling.
 *
 * @polymerBehavior
 * @demo demo/index.html
 **/
const IronResizableBehavior = {
  properties: {
    /**
     * The closest ancestor element that implements `IronResizableBehavior`.
     */
    _parentResizable: {
      type: Object,
      observer: '_parentResizableChanged',
    },

    /**
     * True if this element is currently notifying its descendant elements of
     * resize.
     */
    _notifyingDescendant: {
      type: Boolean,
      value: false,
    }
  },

  listeners: {
    'iron-request-resize-notifications': '_onIronRequestResizeNotifications'
  },

  created: function() {
    // We don't really need property effects on these, and also we want them
    // to be created before the `_parentResizable` observer fires:
    this._interestedResizables = [];
    this._boundNotifyResize = this.notifyResize.bind(this);
    this._boundOnDescendantIronResize = this._onDescendantIronResize.bind(this);
  },

  attached: function() {
    this._requestResizeNotifications();
  },

  detached: function() {
    if (this._parentResizable) {
      this._parentResizable.stopResizeNotificationsFor(this);
    } else {
      ORPHANS.delete(this);
      window.removeEventListener('resize', this._boundNotifyResize);
    }

    this._parentResizable = null;
  },

  /**
   * Can be called to manually notify a resizable and its descendant
   * resizables of a resize change.
   */
  notifyResize: function() {
    if (!this.isAttached) {
      return;
    }

    this._interestedResizables.forEach(function(resizable) {
      if (this.resizerShouldNotify(resizable)) {
        this._notifyDescendant(resizable);
      }
    }, this);

    this._fireResize();
  },

  /**
   * Used to assign the closest resizable ancestor to this resizable
   * if the ancestor detects a request for notifications.
   */
  assignParentResizable: function(parentResizable) {
    if (this._parentResizable) {
      this._parentResizable.stopResizeNotificationsFor(this);
    }

    this._parentResizable = parentResizable;

    if (parentResizable &&
        parentResizable._interestedResizables.indexOf(this) === -1) {
      parentResizable._interestedResizables.push(this);
      parentResizable._subscribeIronResize(this);
    }
  },

  /**
   * Used to remove a resizable descendant from the list of descendants
   * that should be notified of a resize change.
   */
  stopResizeNotificationsFor: function(target) {
    var index = this._interestedResizables.indexOf(target);

    if (index > -1) {
      this._interestedResizables.splice(index, 1);
      this._unsubscribeIronResize(target);
    }
  },

  /**
   * Subscribe this element to listen to iron-resize events on the given target.
   *
   * Preferred over target.listen because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */
  _subscribeIronResize: function(target) {
    target.addEventListener('iron-resize', this._boundOnDescendantIronResize);
  },

  /**
   * Unsubscribe this element from listening to to iron-resize events on the
   * given target.
   *
   * Preferred over target.unlisten because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */
  _unsubscribeIronResize: function(target) {
    target.removeEventListener(
        'iron-resize', this._boundOnDescendantIronResize);
  },

  /**
   * This method can be overridden to filter nested elements that should or
   * should not be notified by the current element. Return true if an element
   * should be notified, or false if it should not be notified.
   *
   * @param {HTMLElement} element A candidate descendant element that
   * implements `IronResizableBehavior`.
   * @return {boolean} True if the `element` should be notified of resize.
   */
  resizerShouldNotify: function(element) {
    return true;
  },

  _onDescendantIronResize: function(event) {
    if (this._notifyingDescendant) {
      event.stopPropagation();
      return;
    }

    // no need to use this during shadow dom because of event retargeting
    if (!useShadow) {
      this._fireResize();
    }
  },

  _fireResize: function() {
    this.fire('iron-resize', null, {node: this, bubbles: false});
  },

  _onIronRequestResizeNotifications: function(event) {
    var target = /** @type {!EventTarget} */ (dom(event).rootTarget);
    if (target === this) {
      return;
    }

    target.assignParentResizable(this);
    this._notifyDescendant(target);

    event.stopPropagation();
  },

  _parentResizableChanged: function(parentResizable) {
    if (parentResizable) {
      window.removeEventListener('resize', this._boundNotifyResize);
    }
  },

  _notifyDescendant: function(descendant) {
    // NOTE(cdata): In IE10, attached is fired on children first, so it's
    // important not to notify them if the parent is not attached yet (or
    // else they will get redundantly notified when the parent attaches).
    if (!this.isAttached) {
      return;
    }

    this._notifyingDescendant = true;
    descendant.notifyResize();
    this._notifyingDescendant = false;
  },

  _requestResizeNotifications: function() {
    if (!this.isAttached) {
      return;
    }

    if (document.readyState === 'loading') {
      var _requestResizeNotifications =
          this._requestResizeNotifications.bind(this);
      document.addEventListener(
          'readystatechange', function readystatechanged() {
            document.removeEventListener('readystatechange', readystatechanged);
            _requestResizeNotifications();
          });
    } else {
      this._findParent();

      if (!this._parentResizable) {
        // If this resizable is an orphan, tell other orphans to try to find
        // their parent again, in case it's this resizable.
        ORPHANS.forEach(function(orphan) {
          if (orphan !== this) {
            orphan._findParent();
          }
        }, this);

        window.addEventListener('resize', this._boundNotifyResize);
        this.notifyResize();
      } else {
        // If this resizable has a parent, tell other child resizables of
        // that parent to try finding their parent again, in case it's this
        // resizable.
        this._parentResizable._interestedResizables
            .forEach(function(resizable) {
              if (resizable !== this) {
                resizable._findParent();
              }
            }, this);
      }
    }
  },

  _findParent: function() {
    this.assignParentResizable(null);
    this.fire(
        'iron-request-resize-notifications',
        null,
        {node: this, bubbles: true, cancelable: true});

    if (!this._parentResizable) {
      ORPHANS.add(this);
    } else {
      ORPHANS.delete(this);
    }
  }
};

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
`iron-collapse` creates a collapsible block of content.  By default, the content
will be collapsed.  Use `opened` or `toggle()` to show/hide the content.

    <button on-click="toggle">toggle collapse</button>

    <iron-collapse id="collapse">
      <div>Content goes here...</div>
    </iron-collapse>

    ...

    toggle: function() {
      this.$.collapse.toggle();
    }

`iron-collapse` adjusts the max-height/max-width of the collapsible element to
show/hide the content.  So avoid putting padding/margin/border on the
collapsible directly, and instead put a div inside and style that.

    <style>
      .collapse-content {
        padding: 15px;
        border: 1px solid #dedede;
      }
    </style>

    <iron-collapse>
      <div class="collapse-content">
        <div>Content goes here...</div>
      </div>
    </iron-collapse>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-collapse-transition-duration` | Animation transition duration | `300ms`

@group Iron Elements
@hero hero.svg
@demo demo/index.html
@element iron-collapse
*/
Polymer({
  _template: html`
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
`,

  is: 'iron-collapse',
  behaviors: [IronResizableBehavior],

  properties: {

    /**
     * If true, the orientation is horizontal; otherwise is vertical.
     *
     * @attribute horizontal
     */
    horizontal: {type: Boolean, value: false, observer: '_horizontalChanged'},

    /**
     * Set opened to true to show the collapse element and to false to hide it.
     *
     * @attribute opened
     */
    opened:
        {type: Boolean, value: false, notify: true, observer: '_openedChanged'},

    /**
     * When true, the element is transitioning its opened state. When false,
     * the element has finished opening/closing.
     *
     * @attribute transitioning
     */
    transitioning: {type: Boolean, notify: true, readOnly: true},

    /**
     * Set noAnimation to true to disable animations.
     *
     * @attribute noAnimation
     */
    noAnimation: {type: Boolean},

    /**
     * Stores the desired size of the collapse body.
     * @private
     */
    _desiredSize: {type: String, value: ''}
  },

  get dimension() {
    return this.horizontal ? 'width' : 'height';
  },

  /**
   * `maxWidth` or `maxHeight`.
   * @private
   */
  get _dimensionMax() {
    return this.horizontal ? 'maxWidth' : 'maxHeight';
  },

  /**
   * `max-width` or `max-height`.
   * @private
   */
  get _dimensionMaxCss() {
    return this.horizontal ? 'max-width' : 'max-height';
  },

  hostAttributes: {
    role: 'group',
    'aria-hidden': 'true',
  },

  listeners: {transitionend: '_onTransitionEnd'},

  /**
   * Toggle the opened state.
   *
   * @method toggle
   */
  toggle: function() {
    this.opened = !this.opened;
  },

  show: function() {
    this.opened = true;
  },

  hide: function() {
    this.opened = false;
  },

  /**
   * Updates the size of the element.
   * @param {string} size The new value for `maxWidth`/`maxHeight` as css property value, usually `auto` or `0px`.
   * @param {boolean=} animated if `true` updates the size with an animation, otherwise without.
   */
  updateSize: function(size, animated) {
    // Consider 'auto' as '', to take full size.
    size = size === 'auto' ? '' : size;

    var willAnimate = animated && !this.noAnimation && this.isAttached &&
        this._desiredSize !== size;

    this._desiredSize = size;

    this._updateTransition(false);
    // If we can animate, must do some prep work.
    if (willAnimate) {
      // Animation will start at the current size.
      var startSize = this._calcSize();
      // For `auto` we must calculate what is the final size for the animation.
      // After the transition is done, _transitionEnd will set the size back to
      // `auto`.
      if (size === '') {
        this.style[this._dimensionMax] = '';
        size = this._calcSize();
      }
      // Go to startSize without animation.
      this.style[this._dimensionMax] = startSize;
      // Force layout to ensure transition will go. Set scrollTop to itself
      // so that compilers won't remove it.
      this.scrollTop = this.scrollTop;
      // Enable animation.
      this._updateTransition(true);
      // If final size is the same as startSize it will not animate.
      willAnimate = (size !== startSize);
    }
    // Set the final size.
    this.style[this._dimensionMax] = size;
    // If it won't animate, call transitionEnd to set correct classes.
    if (!willAnimate) {
      this._transitionEnd();
    }
  },

  /**
   * enableTransition() is deprecated, but left over so it doesn't break
   * existing code. Please use `noAnimation` property instead.
   *
   * @method enableTransition
   * @deprecated since version 1.0.4
   */
  enableTransition: function(enabled) {
    Base._warn(
        '`enableTransition()` is deprecated, use `noAnimation` instead.');
    this.noAnimation = !enabled;
  },

  _updateTransition: function(enabled) {
    this.style.transitionDuration = (enabled && !this.noAnimation) ? '' : '0s';
  },

  _horizontalChanged: function() {
    this.style.transitionProperty = this._dimensionMaxCss;
    var otherDimension =
        this._dimensionMax === 'maxWidth' ? 'maxHeight' : 'maxWidth';
    this.style[otherDimension] = '';
    this.updateSize(this.opened ? 'auto' : '0px', false);
  },

  _openedChanged: function() {
    this.setAttribute('aria-hidden', !this.opened);

    this._setTransitioning(true);
    this.toggleClass('iron-collapse-closed', false);
    this.toggleClass('iron-collapse-opened', false);
    this.updateSize(this.opened ? 'auto' : '0px', true);

    // Focus the current collapse.
    if (this.opened) {
      this.focus();
    }
  },

  _transitionEnd: function() {
    this.style[this._dimensionMax] = this._desiredSize;
    this.toggleClass('iron-collapse-closed', !this.opened);
    this.toggleClass('iron-collapse-opened', this.opened);
    this._updateTransition(false);
    this.notifyResize();
    this._setTransitioning(false);
  },

  _onTransitionEnd: function(event) {
    if (dom(event).rootTarget === this) {
      this._transitionEnd();
    }
  },

  _calcSize: function() {
    return this.getBoundingClientRect()[this.dimension] + 'px';
  }
});

function getTemplate$y() {
    return html `<!--_html_template_start_--><style include="print-preview-shared">:host{display:flex;padding-inline-start:var(--print-preview-sidebar-margin)}::slotted([slot=controls]),::slotted([slot=title]){display:flex;flex-direction:column;justify-content:center;min-height:var(--print-preview-row-height);word-break:break-word}::slotted([slot=controls]){flex:1;overflow:hidden}::slotted([slot=title]){color:var(--cr-primary-text-color);flex:none;font-size:1em;line-height:calc(20/13 * 1em);width:var(--print-preview-title-width)}</style>
<slot name="title"></slot>
<slot name="controls"></slot>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PrintPreviewSettingsSectionElement extends PolymerElement {
    static get is() {
        return 'print-preview-settings-section';
    }
    static get template() {
        return getTemplate$y();
    }
}
customElements.define(PrintPreviewSettingsSectionElement.is, PrintPreviewSettingsSectionElement);

function getTemplate$x() {
    return html `<!--_html_template_start_--><style include="print-preview-shared">cr-button{height:fit-content;min-height:32px;text-align:center;width:calc(100% - 2 * var(--print-preview-sidebar-margin))}</style>
<print-preview-settings-section>
  <span slot="title"></span>
  <div slot="controls">
    <cr-button id="button" disabled$="[[disabled]]" on-click="onButtonClick_">
      $i18n{newShowAdvancedOptions}
    </cr-button>
  </div>
</print-preview-settings-section>
<template is="dom-if" if="[[showAdvancedDialog_]]" restamp>
  <print-preview-advanced-settings-dialog settings="[[settings]]" destination="[[destination]]" on-close="onDialogClose_">
  </print-preview-advanced-settings-dialog>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PrintPreviewAdvancedOptionsSettingsElement extends PolymerElement {
    static get is() {
        return 'print-preview-advanced-options-settings';
    }
    static get template() {
        return getTemplate$x();
    }
    static get properties() {
        return {
            disabled: Boolean,
            destination: Object,
            settings: Object,
            showAdvancedDialog_: {
                type: Boolean,
                value: false,
            },
        };
    }
    onButtonClick_() {
        this.showAdvancedDialog_ = true;
    }
    onDialogClose_() {
        this.showAdvancedDialog_ = false;
        this.$.button.focus();
    }
}
customElements.define(PrintPreviewAdvancedOptionsSettingsElement.is, PrintPreviewAdvancedOptionsSettingsElement);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
`iron-a11y-announcer` is a singleton element that is intended to add a11y
to features that require on-demand announcement from screen readers. In
order to make use of the announcer, it is best to request its availability
in the announcing element.

Example:

    Polymer({

      is: 'x-chatty',

      attached: function() {
        // This will create the singleton element if it has not
        // been created yet:
        Polymer.IronA11yAnnouncer.requestAvailability();
      }
    });

After the `iron-a11y-announcer` has been made available, elements can
make announces by firing bubbling `iron-announce` events.

Example:

    this.fire('iron-announce', {
      text: 'This is an announcement!'
    }, { bubbles: true });

Note: announcements are only audible if you have a screen reader enabled.

@demo demo/index.html
*/
const IronA11yAnnouncer = Polymer({
  /** @override */
  _template: html`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,

  is: 'iron-a11y-announcer',

  properties: {

    /**
     * The value of mode is used to set the `aria-live` attribute
     * for the element that will be announced. Valid values are: `off`,
     * `polite` and `assertive`.
     */
    mode: {type: String, value: 'polite'},

    /**
     * The timeout on refreshing the announcement text. Larger timeouts are
     * needed for certain screen readers to re-announce the same message.
     */
    timeout: {type: Number, value: 150},

    _text: {type: String, value: ''},
  },

  /** @override */
  created: function() {
    if (!IronA11yAnnouncer.instance) {
      IronA11yAnnouncer.instance = this;
    }

    document.addEventListener('iron-announce', this._onIronAnnounce.bind(this));
  },

  /**
   * Cause a text string to be announced by screen readers.
   *
   * @param {string} text The text that should be announced.
   */
  announce: function(text) {
    this._text = '';
    this.async(function() {
      this._text = text;
    }, this.timeout);
  },

  _onIronAnnounce: function(event) {
    if (event.detail && event.detail.text) {
      this.announce(event.detail.text);
    }
  }
});

IronA11yAnnouncer.instance = null;

IronA11yAnnouncer.requestAvailability = function() {
  if (!IronA11yAnnouncer.instance) {
    IronA11yAnnouncer.instance = document.createElement('iron-a11y-announcer');
  }

  if (document.body) {
    document.body.appendChild(IronA11yAnnouncer.instance);
  } else {
    document.addEventListener('load', function() {
      document.body.appendChild(IronA11yAnnouncer.instance);
    });
  }
};

function getTemplate$w() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style">:host .controls{align-items:center;display:flex;flex-direction:row;justify-content:flex-end;padding-bottom:16px;padding-inline-end:16px;padding-top:16px}:host-context([chrome-refresh-2023]):host .controls{padding-bottom:var(--print-preview-sidebar-margin);padding-inline-end:var(--print-preview-sidebar-margin)}@media (prefers-color-scheme:light){:host{background-color:#fff}}:host cr-button:not(:last-child){margin-inline-end:8px}:host cr-button:last-child{margin-inline-end:0}.error-message{color:red;margin:16px 16px 0;text-align:start}</style>

<div class="error-message" hidden="[[!showSheetsError_(destination.id, maxSheets, sheetCount)]]">
  [[errorMessage_]]
</div>

<div class="controls">

  <cr-button class="cancel-button" on-click="onCancelClick_">
    $i18n{cancel}
  </cr-button>

  <cr-button class="action-button" on-click="onPrintClick_" disabled$="[[!printButtonEnabled_]]">
    [[printButtonLabel_]]
  </cr-button>

</div>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PrintPreviewButtonStripElement extends PolymerElement {
    constructor() {
        super(...arguments);
        // 
        this.lastState_ = State.NOT_READY;
        // 
    }
    static get is() {
        return 'print-preview-button-strip';
    }
    static get template() {
        return getTemplate$w();
    }
    static get properties() {
        return {
            destination: Object,
            firstLoad: Boolean,
            maxSheets: Number,
            sheetCount: Number,
            state: Number,
            printButtonEnabled_: {
                type: Boolean,
                value: false,
            },
            printButtonLabel_: {
                type: String,
                value() {
                    return loadTimeData.getString('printButton');
                },
            },
            // 
            errorMessage_: {
                type: String,
                observer: 'errorMessageChanged_',
            },
            isPinValid: Boolean,
            // 
        };
    }
    static get observers() {
        return [
            'updatePrintButtonLabel_(destination.id)',
            'updatePrintButtonEnabled_(state, destination.id, maxSheets, sheetCount)',
            // 
            'updatePrintButtonEnabled_(isPinValid)',
            'updateErrorMessage_(state, destination.id, maxSheets, sheetCount)',
            // 
        ];
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    onPrintClick_() {
        this.fire_('print-requested');
    }
    onCancelClick_() {
        this.fire_('cancel-requested');
    }
    isPdf_() {
        return this.destination &&
            this.destination.type === PrinterType.PDF_PRINTER;
    }
    updatePrintButtonLabel_() {
        this.printButtonLabel_ =
            loadTimeData.getString(this.isPdf_() ? 'saveButton' : 'printButton');
    }
    updatePrintButtonEnabled_() {
        switch (this.state) {
            case (State.PRINTING):
                this.printButtonEnabled_ = false;
                break;
            case (State.READY):
                // 
                this.printButtonEnabled_ = !this.printButtonDisabled_();
                // 
                // 
                if (this.firstLoad || this.lastState_ === State.PRINTING) {
                    this.shadowRoot
                        .querySelector('cr-button.action-button').focus();
                    this.fire_('print-button-focused');
                }
                break;
            default:
                this.printButtonEnabled_ = false;
                break;
        }
        this.lastState_ = this.state;
    }
    // 
    /**
     * This disables the print button if the sheets limit policy is violated or
     * pin printing is enabled and the pin is invalid.
     */
    printButtonDisabled_() {
        return this.isSheetsLimitPolicyViolated_() || !this.isPinValid;
    }
    /**
     * The sheets policy is violated if 3 conditions are met:
     * * This is "real" printing, i.e. not saving to PDF/Drive.
     * * Sheets policy is present.
     * * Either number of sheets is not calculated or exceeds policy limit.
     */
    isSheetsLimitPolicyViolated_() {
        return !this.isPdf_() && this.maxSheets > 0 &&
            (this.sheetCount === 0 || this.sheetCount > this.maxSheets);
    }
    /**
     * @return Whether to show the "Too many sheets" error.
     */
    showSheetsError_() {
        // The error is shown if the number of sheets is already calculated and the
        // print button is disabled.
        return this.sheetCount > 0 && this.isSheetsLimitPolicyViolated_();
    }
    updateErrorMessage_() {
        if (!this.showSheetsError_()) {
            this.errorMessage_ = '';
            return;
        }
        PluralStringProxyImpl.getInstance()
            .getPluralString('sheetsLimitErrorMessage', this.maxSheets)
            .then(label => {
            this.errorMessage_ = label;
        });
    }
    /**
     * Uses IronA11yAnnouncer to notify screen readers that an error is set.
     */
    errorMessageChanged_() {
        if (this.errorMessage_ !== '') {
            IronA11yAnnouncer.requestAvailability();
            this.fire_('iron-announce', { text: this.errorMessage_ });
        }
    }
}
customElements.define(PrintPreviewButtonStripElement.is, PrintPreviewButtonStripElement);

function getTemplate$v() {
    return html `<!--_html_template_start_--><style include="print-preview-shared md-select"></style>
<print-preview-settings-section>
  <span id="color-label" slot="title">$i18n{optionColor}</span>
  <div slot="controls">
    <select class="md-select" aria-labelledby="color-label" disabled$="[[disabled_]]" value="{{selectedValue::change}}">
      <option value="bw" selected="selected">$i18n{optionBw}</option>
      <option value="color">$i18n{optionColor}</option>
    </select>
  </div>
</print-preview-settings-section>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SelectMixin = dedupingMixin((superClass) => {
    class SelectMixin extends superClass {
        constructor() {
            super(...arguments);
            this.debouncer_ = null;
        }
        static get properties() {
            return {
                selectedValue: {
                    type: String,
                    observer: 'onSelectedValueChange_',
                },
            };
        }
        onSelectedValueChange_(_current, previous) {
            // Don't trigger an extra preview request at startup.
            if (previous === undefined) {
                return;
            }
            this.debouncer_ = Debouncer.debounce(this.debouncer_, timeOut.after(100), () => this.callProcessSelectChange_());
        }
        callProcessSelectChange_() {
            if (!this.isConnected) {
                return;
            }
            this.onProcessSelectChange(this.selectedValue);
            // For testing only
            this.dispatchEvent(new CustomEvent('process-select-change', { bubbles: true, composed: true }));
        }
        onProcessSelectChange(_value) { }
    }
    return SelectMixin;
});

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewColorSettingsElementBase = SettingsMixin(SelectMixin(PolymerElement));
class PrintPreviewColorSettingsElement extends PrintPreviewColorSettingsElementBase {
    static get is() {
        return 'print-preview-color-settings';
    }
    static get template() {
        return getTemplate$v();
    }
    static get properties() {
        return {
            disabled: Boolean,
            disabled_: {
                type: Boolean,
                computed: 'computeDisabled_(disabled, settings.color.setByPolicy)',
            },
        };
    }
    static get observers() {
        return ['onColorSettingChange_(settings.color.value)'];
    }
    onColorSettingChange_(newValue) {
        this.selectedValue = newValue ? 'color' : 'bw';
    }
    /**
     * @param disabled Whether color selection is disabled.
     * @param managed Whether color selection is managed.
     * @return Whether drop-down should be disabled.
     */
    computeDisabled_(disabled, managed) {
        return disabled || managed;
    }
    /** @param value The new select value. */
    onProcessSelectChange(value) {
        this.setSetting('color', value === 'color');
    }
}
customElements.define(PrintPreviewColorSettingsElement.is, PrintPreviewColorSettingsElement);

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const InputMixin = dedupingMixin((superClass) => {
    class InputMixin extends superClass {
        constructor() {
            super(...arguments);
            /** Timeout used to delay processing of the input, in ms. */
            this.timeout_ = null;
        }
        static get properties() {
            return {
                lastValue_: {
                    type: String,
                    value: '',
                },
            };
        }
        connectedCallback() {
            super.connectedCallback();
            this.getInput().addEventListener('input', () => this.resetTimeout_());
            this.getInput().addEventListener('keydown', (e) => this.onKeyDown_(e));
        }
        getInput() {
            assertNotReached();
        }
        /**
         * @return The delay to use for the timeout, in ms. Elements using
         *     this behavior must set this delay as data-timeout-delay on the
         *     input element returned by getInput().
         */
        getTimeoutDelayMs_() {
            const delay = parseInt(this.getInput().dataset['timeoutDelay'], 10);
            assert(!Number.isNaN(delay));
            return delay;
        }
        /**
         * Called when a key is pressed on the input.
         */
        onKeyDown_(event) {
            if (event.key !== 'Enter' && event.key !== 'Tab') {
                return;
            }
            this.resetAndUpdate();
        }
        /**
         * Called when a input event occurs on the textfield. Starts an input
         * timeout.
         */
        resetTimeout_() {
            if (this.timeout_) {
                clearTimeout(this.timeout_);
            }
            this.timeout_ =
                setTimeout(() => this.onTimeout_(), this.getTimeoutDelayMs_());
        }
        /**
         * Called after a timeout after user input into the textfield.
         */
        onTimeout_() {
            this.timeout_ = null;
            const value = this.getInput().value || '';
            if (this.lastValue_ !== value) {
                this.lastValue_ = value;
                this.dispatchEvent(new CustomEvent('input-change', { bubbles: true, composed: true, detail: value }));
            }
        }
        resetString() {
            this.lastValue_ = null;
        }
        resetAndUpdate() {
            if (this.timeout_) {
                clearTimeout(this.timeout_);
            }
            this.onTimeout_();
        }
    }
    return InputMixin;
});

function getTemplate$u() {
    return html `<!--_html_template_start_--><style include="print-preview-shared">:host{--cr-input-width:calc(4em + 16px)}#sectionTitle{align-self:baseline}cr-input{margin-inline-end:16px;min-height:var(--print-preview-row-height);overflow:hidden}.input-wrapper{align-items:center;display:flex}:host([input-valid]) cr-input{--cr-input-error-display:none}span[slot=suffix]{max-width:calc(100% - 5em);min-height:var(--print-preview-row-height);overflow:hidden;word-wrap:break-word}</style>
<print-preview-settings-section>
  <span slot="title" id="sectionTitle">[[inputLabel]]</span>
  <div slot="controls" id="controls">
    <span class="input-wrapper">
      <cr-input id="userValue" type="number" max="[[maxValue]]" min="[[minValue]]" data-timeout-delay="250" disabled$="[[getDisabled_(disabled)]]" on-keydown="onKeydown_" on-blur="onBlur_" aria-label="[[inputAriaLabel]]" error-message="[[errorMessage_]]" auto-validate>
        <span slot="suffix">
          <slot name="opt-inside-content"></slot>
        </span>
      </cr-input>
    </span>
  </div>
</print-preview-settings-section>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewNumberSettingsSectionElementBase = WebUiListenerMixin(InputMixin(PolymerElement));
class PrintPreviewNumberSettingsSectionElement extends PrintPreviewNumberSettingsSectionElementBase {
    static get is() {
        return 'print-preview-number-settings-section';
    }
    static get template() {
        return getTemplate$u();
    }
    static get properties() {
        return {
            inputString_: {
                type: String,
                notify: true,
                observer: 'onInputStringChanged_',
            },
            inputValid: {
                type: Boolean,
                notify: true,
                reflectToAttribute: true,
                value: true,
            },
            currentValue: {
                type: String,
                notify: true,
                observer: 'onCurrentValueChanged_',
            },
            defaultValue: String,
            maxValue: Number,
            minValue: Number,
            inputLabel: String,
            inputAriaLabel: String,
            hintMessage: String,
            disabled: Boolean,
            errorMessage_: {
                type: String,
                computed: 'computeErrorMessage_(hintMessage, inputValid)',
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('input-change', e => this.onInputChangeEvent_(e));
    }
    /** @return The cr-input field element for InputBehavior. */
    getInput() {
        return this.$.userValue;
    }
    /**
     * @param e Contains the new input value.
     */
    onInputChangeEvent_(e) {
        this.inputString_ = e.detail;
    }
    /**
     * @return Whether the input should be disabled.
     */
    getDisabled_() {
        return this.disabled && this.inputValid;
    }
    onKeydown_(e) {
        if (['.', 'e', 'E', '-', '+'].includes(e.key)) {
            e.preventDefault();
            return;
        }
        if (e.key === 'Enter') {
            this.onBlur_();
        }
    }
    onBlur_() {
        if (this.inputString_ === '') {
            this.set('inputString_', this.defaultValue);
        }
        if (this.$.userValue.value === '') {
            this.$.userValue.value = this.defaultValue;
        }
    }
    onInputStringChanged_() {
        this.inputValid = this.computeValid_();
        this.currentValue = this.inputString_;
    }
    onCurrentValueChanged_() {
        this.inputString_ = this.currentValue;
        this.resetString();
    }
    /**
     * @return Whether input value represented by inputString_ is
     *     valid and non-empty, so that it can be used to update the setting.
     */
    computeValid_() {
        // Make sure value updates first, in case inputString_ was updated by JS.
        this.$.userValue.value = this.inputString_;
        return !this.$.userValue.invalid;
    }
    computeErrorMessage_() {
        return this.inputValid ? '' : this.hintMessage;
    }
}
customElements.define(PrintPreviewNumberSettingsSectionElement.is, PrintPreviewNumberSettingsSectionElement);

function getTemplate$t() {
    return html `<!--_html_template_start_--><style include="print-preview-shared">#collate{margin-inline-start:16px}</style>
<print-preview-number-settings-section max-value="[[copiesMax_]]" min-value="1" default-value="1" input-label="$i18n{copiesLabel}" input-aria-label="$i18n{copiesLabel}" disabled="[[disabled]]" current-value="{{currentValue_}}" input-valid="{{inputValid_}}" hint-message="[[getHintMessage_(copiesMax_)]]">
  <div slot="opt-inside-content" class="checkbox" aria-live="polite" hidden$="[[collateHidden_(
        currentValue_, settings.collate.available, inputValid_)]]">
    <cr-checkbox id="collate" on-change="onCollateChange_" disabled="[[disabled]]" aria-labelledby="copies-collate-label">
      <span id="copies-collate-label">$i18n{optionCollate}</span>
    </cr-checkbox>
  </div>
</print-preview-number-settings-section>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Maximum number of copies supported by the printer if not explicitly
 * specified.
 */
const DEFAULT_MAX_COPIES = 999;
const PrintPreviewCopiesSettingsElementBase = SettingsMixin(PolymerElement);
class PrintPreviewCopiesSettingsElement extends PrintPreviewCopiesSettingsElementBase {
    static get is() {
        return 'print-preview-copies-settings';
    }
    static get template() {
        return getTemplate$t();
    }
    static get properties() {
        return {
            capability: Object,
            copiesMax_: {
                type: Number,
                computed: 'computeCopiesMax_(capability)',
            },
            currentValue_: {
                type: String,
                observer: 'onInputChanged_',
            },
            inputValid_: Boolean,
            disabled: Boolean,
        };
    }
    static get observers() {
        return ['onSettingsChanged_(settings.copies.value, settings.collate.*)'];
    }
    /**
     * @return The maximum number of copies this printer supports.
     */
    computeCopiesMax_() {
        return (this.capability && this.capability.max) ? this.capability.max :
            DEFAULT_MAX_COPIES;
    }
    /**
     * @return The message to show as hint.
     */
    getHintMessage_() {
        return loadTimeData.getStringF('copiesInstruction', this.copiesMax_);
    }
    /**
     * Updates the input string when the setting has been initialized.
     */
    onSettingsChanged_() {
        const copies = this.getSetting('copies');
        if (this.inputValid_) {
            this.currentValue_ = copies.value.toString();
        }
        const collate = this.getSetting('collate');
        this.$.collate.checked = collate.value;
    }
    /**
     * Updates model.copies and model.copiesInvalid based on the validity
     * and current value of the copies input.
     */
    onInputChanged_() {
        if (this.currentValue_ !== '' &&
            this.currentValue_ !== this.getSettingValue('copies').toString()) {
            this.setSetting('copies', this.inputValid_ ? parseInt(this.currentValue_, 10) : 1);
        }
        this.setSettingValid('copies', this.inputValid_);
    }
    /**
     * @return Whether collate checkbox should be hidden.
     */
    collateHidden_() {
        return !this.getSetting('collate').available || !this.inputValid_ ||
            this.currentValue_ === '' || parseInt(this.currentValue_, 10) === 1;
    }
    onCollateChange_() {
        this.setSetting('collate', this.$.collate.checked);
    }
}
customElements.define(PrintPreviewCopiesSettingsElement.is, PrintPreviewCopiesSettingsElement);

function getTemplate$s() {
    return html `<!--_html_template_start_--><style include="print-preview-shared md-select">select.md-select{margin:2px;--md-select-width:calc(100% - 4px)}</style>
<select class="md-select" disabled$="[[disabled]]" aria-label$="[[ariaLabel]]" value="{{selectedValue::change}}">
  <template is="dom-repeat" items="[[capability.option]]">
    <option selected="[[isSelected_(item, selectedValue)]]" value="[[getValue_(item)]]">
      [[getDisplayName_(item)]]
    </option>
  </template>
</select>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewSettingsSelectElementBase = SettingsMixin(SelectMixin(PolymerElement));
class PrintPreviewSettingsSelectElement extends PrintPreviewSettingsSelectElementBase {
    static get is() {
        return 'print-preview-settings-select';
    }
    static get template() {
        return getTemplate$s();
    }
    static get properties() {
        return {
            ariaLabel: String,
            capability: Object,
            settingName: String,
            disabled: Boolean,
        };
    }
    /**
     * @param option Option to check.
     * @return Whether the option is selected.
     */
    isSelected_(option) {
        return this.getValue_(option) === this.selectedValue ||
            (!!option.is_default && this.selectedValue === '');
    }
    selectValue(value) {
        this.selectedValue = value;
    }
    /**
     * @param option Option to get the value for.
     * @return Value for the option.
     */
    getValue_(option) {
        return JSON.stringify(option);
    }
    /**
     * @param option Option to get the display name for.
     * @return Display name for the option.
     */
    getDisplayName_(option) {
        let displayName = option.custom_display_name;
        if (!displayName && option.custom_display_name_localized) {
            displayName =
                getStringForCurrentLocale(option.custom_display_name_localized);
        }
        return displayName || option.name || '';
    }
    onProcessSelectChange(value) {
        let newValue = null;
        try {
            newValue = JSON.parse(value);
        }
        catch (e) {
            assertNotReached();
        }
        if (value !== JSON.stringify(this.getSettingValue(this.settingName))) {
            this.setSetting(this.settingName, newValue);
        }
    }
}
customElements.define(PrintPreviewSettingsSelectElement.is, PrintPreviewSettingsSelectElement);

function getTemplate$r() {
    return html `<!--_html_template_start_--><style include="print-preview-shared">:host print-preview-settings-select{margin:0 calc(var(--print-preview-sidebar-margin) - 2px)}</style>
<print-preview-settings-section>
  <span id="dpi-label" slot="title">$i18n{dpiLabel}</span>
  <div slot="controls">
    <print-preview-settings-select aria-label="$i18n{dpiLabel}" capability="[[capabilityWithLabels_]]" setting-name="dpi" settings="{{settings}}" disabled="[[disabled]]">
    </print-preview-settings-select>
  </div>
</print-preview-settings-section>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewDpiSettingsElementBase = SettingsMixin(PolymerElement);
class PrintPreviewDpiSettingsElement extends PrintPreviewDpiSettingsElementBase {
    static get is() {
        return 'print-preview-dpi-settings';
    }
    static get template() {
        return getTemplate$r();
    }
    static get properties() {
        return {
            capability: Object,
            disabled: Boolean,
            capabilityWithLabels_: {
                type: Object,
                computed: 'computeCapabilityWithLabels_(capability)',
            },
        };
    }
    static get observers() {
        return [
            'onDpiSettingChange_(settings.dpi.*, capabilityWithLabels_.option)',
        ];
    }
    /**
     * Adds default labels for each option.
     */
    computeCapabilityWithLabels_() {
        if (this.capability === undefined) {
            return null;
        }
        const result = structuredClone(this.capability);
        this.capability.option.forEach((dpiOption, index) => {
            const hDpi = dpiOption.horizontal_dpi || 0;
            const vDpi = dpiOption.vertical_dpi || 0;
            if (hDpi > 0 && vDpi > 0 && hDpi !== vDpi) {
                result.option[index].name = loadTimeData.getStringF('nonIsotropicDpiItemLabel', hDpi.toLocaleString(), vDpi.toLocaleString());
            }
            else {
                result.option[index].name = loadTimeData.getStringF('dpiItemLabel', (hDpi || vDpi).toLocaleString());
            }
        });
        return result;
    }
    onDpiSettingChange_() {
        if (this.capabilityWithLabels_ === null ||
            this.capabilityWithLabels_ === undefined) {
            return;
        }
        const dpiValue = this.getSettingValue('dpi');
        for (const option of this.capabilityWithLabels_.option) {
            const dpiOption = option;
            if (dpiValue.horizontal_dpi === dpiOption.horizontal_dpi &&
                dpiValue.vertical_dpi === dpiOption.vertical_dpi &&
                dpiValue.vendor_id === dpiOption.vendor_id) {
                this.shadowRoot.querySelector('print-preview-settings-select')
                    .selectValue(JSON.stringify(option));
                return;
            }
        }
        const defaultOption = this.capabilityWithLabels_.option.find(o => !!o.is_default) ||
            this.capabilityWithLabels_.option[0];
        this.setSetting('dpi', defaultOption);
    }
}
customElements.define(PrintPreviewDpiSettingsElement.is, PrintPreviewDpiSettingsElement);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
 * The `iron-iconset-svg` element allows users to define their own icon sets
 * that contain svg icons. The svg icon elements should be children of the
 * `iron-iconset-svg` element. Multiple icons should be given distinct id's.
 *
 * Using svg elements to create icons has a few advantages over traditional
 * bitmap graphics like jpg or png. Icons that use svg are vector based so
 * they are resolution independent and should look good on any device. They
 * are stylable via css. Icons can be themed, colorized, and even animated.
 *
 * Example:
 *
 *     <iron-iconset-svg name="my-svg-icons" size="24">
 *       <svg>
 *         <defs>
 *           <g id="shape">
 *             <rect x="12" y="0" width="12" height="24" />
 *             <circle cx="12" cy="12" r="12" />
 *           </g>
 *         </defs>
 *       </svg>
 *     </iron-iconset-svg>
 *
 * This will automatically register the icon set "my-svg-icons" to the iconset
 * database.  To use these icons from within another element, make a
 * `iron-iconset` element and call the `byId` method
 * to retrieve a given iconset. To apply a particular icon inside an
 * element use the `applyIcon` method. For example:
 *
 *     iconset.applyIcon(iconNode, 'car');
 *
 * @element iron-iconset-svg
 * @demo demo/index.html
 * @implements {Polymer.Iconset}
 */
Polymer({
  is: 'iron-iconset-svg',

  properties: {

    /**
     * The name of the iconset.
     */
    name: {type: String, observer: '_nameChanged'},

    /**
     * The size of an individual icon. Note that icons must be square.
     */
    size: {type: Number, value: 24},

    /**
     * Set to true to enable mirroring of icons where specified when they are
     * stamped. Icons that should be mirrored should be decorated with a
     * `mirror-in-rtl` attribute.
     *
     * NOTE: For performance reasons, direction will be resolved once per
     * document per iconset, so moving icons in and out of RTL subtrees will
     * not cause their mirrored state to change.
     */
    rtlMirroring: {type: Boolean, value: false},

    /**
     * Set to true to measure RTL based on the dir attribute on the body or
     * html elements (measured on document.body or document.documentElement as
     * available).
     */
    useGlobalRtlAttribute: {type: Boolean, value: false}
  },

  created: function() {
    this._meta = new IronMeta({type: 'iconset', key: null, value: null});
  },

  attached: function() {
    this.style.display = 'none';
  },

  /**
   * Construct an array of all icon names in this iconset.
   *
   * @return {!Array} Array of icon names.
   */
  getIconNames: function() {
    this._icons = this._createIconMap();
    return Object.keys(this._icons).map(function(n) {
      return this.name + ':' + n;
    }, this);
  },

  /**
   * Applies an icon to the given element.
   *
   * An svg icon is prepended to the element's shadowRoot if it exists,
   * otherwise to the element itself.
   *
   * If RTL mirroring is enabled, and the icon is marked to be mirrored in
   * RTL, the element will be tested (once and only once ever for each
   * iconset) to determine the direction of the subtree the element is in.
   * This direction will apply to all future icon applications, although only
   * icons marked to be mirrored will be affected.
   *
   * @method applyIcon
   * @param {Element} element Element to which the icon is applied.
   * @param {string} iconName Name of the icon to apply.
   * @return {?Element} The svg element which renders the icon.
   */
  applyIcon: function(element, iconName) {
    // Remove old svg element
    this.removeIcon(element);
    // install new svg element
    var svg = this._cloneIcon(
        iconName, this.rtlMirroring && this._targetIsRTL(element));
    if (svg) {
      // insert svg element into shadow root, if it exists
      var pde = dom(element.root || element);
      pde.insertBefore(svg, pde.childNodes[0]);
      return element._svgIcon = svg;
    }
    return null;
  },

  /**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   * @param {string} iconName Name of the icon to apply.
   * @param {boolean} targetIsRTL Whether the target element is RTL.
   * @return {Element} Returns an installable clone of the SVG element
   *     matching `id`.
   */
  createIcon: function(iconName, targetIsRTL) {
    return this._cloneIcon(iconName, this.rtlMirroring && targetIsRTL);
  },

  /**
   * Remove an icon from the given element by undoing the changes effected
   * by `applyIcon`.
   *
   * @param {Element} element The element from which the icon is removed.
   */
  removeIcon: function(element) {
    // Remove old svg element
    if (element._svgIcon) {
      dom(element.root || element).removeChild(element._svgIcon);
      element._svgIcon = null;
    }
  },

  /**
   * Measures and memoizes the direction of the element. Note that this
   * measurement is only done once and the result is memoized for future
   * invocations.
   */
  _targetIsRTL: function(target) {
    if (this.__targetIsRTL == null) {
      if (this.useGlobalRtlAttribute) {
        var globalElement =
            (document.body && document.body.hasAttribute('dir')) ?
            document.body :
            document.documentElement;

        this.__targetIsRTL = globalElement.getAttribute('dir') === 'rtl';
      } else {
        if (target && target.nodeType !== Node.ELEMENT_NODE) {
          target = target.host;
        }

        this.__targetIsRTL =
            target && window.getComputedStyle(target)['direction'] === 'rtl';
      }
    }

    return this.__targetIsRTL;
  },

  /**
   *
   * When name is changed, register iconset metadata
   *
   */
  _nameChanged: function() {
    this._meta.value = null;
    this._meta.key = this.name;
    this._meta.value = this;

    this.async(function() {
      this.fire('iron-iconset-added', this, {node: window});
    });
  },

  /**
   * Create a map of child SVG elements by id.
   *
   * @return {!Object} Map of id's to SVG elements.
   */
  _createIconMap: function() {
    // Objects chained to Object.prototype (`{}`) have members. Specifically,
    // on FF there is a `watch` method that confuses the icon map, so we
    // need to use a null-based object here.
    var icons = Object.create(null);
    dom(this).querySelectorAll('[id]').forEach(function(icon) {
      icons[icon.id] = icon;
    });
    return icons;
  },

  /**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   *
   * @return {Element} Returns an installable clone of the SVG element
   * matching `id`.
   */
  _cloneIcon: function(id, mirrorAllowed) {
    // create the icon map on-demand, since the iconset itself has no discrete
    // signal to know when it's children are fully parsed
    this._icons = this._icons || this._createIconMap();
    return this._prepareSvgClone(this._icons[id], this.size, mirrorAllowed);
  },

  /**
   * @param {Element} sourceSvg
   * @param {number} size
   * @param {Boolean} mirrorAllowed
   * @return {Element}
   */
  _prepareSvgClone: function(sourceSvg, size, mirrorAllowed) {
    if (sourceSvg) {
      var content = sourceSvg.cloneNode(true),
          svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
          viewBox =
              content.getAttribute('viewBox') || '0 0 ' + size + ' ' + size,
          cssText =
              'pointer-events: none; display: block; width: 100%; height: 100%;';

      if (mirrorAllowed && content.hasAttribute('mirror-in-rtl')) {
        cssText +=
            '-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;';
      }

      svg.setAttribute('viewBox', viewBox);
      svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
      svg.setAttribute('focusable', 'false');
      // TODO(dfreedm): `pointer-events: none` works around
      // https://crbug.com/370136
      // TODO(sjmiles): inline style may not be ideal, but avoids requiring a
      // shadow-root
      svg.style.cssText = cssText;
      svg.appendChild(content).removeAttribute('id');
      return svg;
    }
    return null;
  }

});

const template$3 = html `<iron-iconset-svg name="print-preview" size="24">
  <svg>
    <defs>
      
      <g id="short-edge" viewBox="0 0 26 20" fill-rule="evenodd">
        <path d="M2 14v2h2v-2H2zm12 4v2h2v-2h-2zm4 0v2h2v-2h-2zm3.556-18H4.444C3.1 0 2 1.35 2 3v6h2V2h18v7h2V3c0-1.65-1.1-3-2.444-3zM24 18h-2v2c1.1 0 2-.9 2-2zM0 10v2h26v-2H0zm6 8v2h2v-2H6zm16-4v2h2v-2h-2zm-12 4v2h2v-2h-2zm-8 0c0 1.1.9 2 2 2v-2H2z">
        <path d="M29-6v32H-3V-6z">
      </path></path></g>
      <g id="long-edge" viewBox="0 0 23 22" fill-rule="evenodd">
        <path d="M17 20h2v-2h-2v2zm4-12h2V6h-2v2zM0 4v14c0 1.1 1.35 2 3 2h6v-2H2V4h7V2H3c-1.65 0-3 .9-3 2zm21-2v2h2c0-1.1-.9-2-2-2zM10 22h2V0h-2v22zm11-6h2v-2h-2v2zM17 4h2V2h-2v2zm-4 16h2v-2h-2v2zm0-16h2V2h-2v2zm8 8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2z">
        <path d="M-5-5h32v32H-5z">
      </path></path></g>

    
      
      <g id="save-to-drive">
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8.5 11l-1.1-2.14 2.84-4.96 1.5 2.66L12.25 17h-.75zm6.8 0h-5.55l1.4-2.5h5.11l.26.46L18.3 17zm-4.55-8h2.39l2.84 5h-2.93l-2.56-4.54.26-.46z"></path>
      </g>

      
      <g id="printer-status-green">
        <path d="M19,8 C20.66,8 22,9.34 22,11 L22,11 L22.0008411,12.1834702 C20.9260374,10.5660653 19.0875152,9.5 17,9.5 C14.2041481,9.5 11.8549346,11.412286 11.1889599,14.0002575 L8,14 L8,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L6,21 L6,17 L2,17 L2,11 C2,9.34 3.34,8 5,8 L5,8 Z M18,3 L18,7 L6,7 L6,3 L18,3 Z"></path>
        <circle fill="#1e8e3e" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <g id="printer-status-grey">
        <path d="M19,8 C20.66,8 22,9.34 22,11 L22,11 L22.0008411,12.1834702 C20.9260374,10.5660653 19.0875152,9.5 17,9.5 C14.2041481,9.5 11.8549346,11.412286 11.1889599,14.0002575 L8,14 L8,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L6,21 L6,17 L2,17 L2,11 C2,9.34 3.34,8 5,8 L5,8 Z M18,3 L18,7 L6,7 L6,3 L18,3 Z"></path>
        <circle fill="#dadce0" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <g id="printer-status-orange">
        <path d="M19,8 C20.66,8 22,9.34 22,11 L22,11 L22.0008411,12.1834702 C20.9260374,10.5660653 19.0875152,9.5 17,9.5 C14.2041481,9.5 11.8549346,11.412286 11.1889599,14.0002575 L8,14 L8,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L6,21 L6,17 L2,17 L2,11 C2,9.34 3.34,8 5,8 L5,8 Z M18,3 L18,7 L6,7 L6,3 L18,3 Z"></path>
        <circle fill="#e37400" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <g id="printer-status-red">
        <path d="M19,8 C20.66,8 22,9.34 22,11 L22,11 L22.0008411,12.1834702 C20.9260374,10.5660653 19.0875152,9.5 17,9.5 C14.2041481,9.5 11.8549346,11.412286 11.1889599,14.0002575 L8,14 L8,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L6,21 L6,17 L2,17 L2,11 C2,9.34 3.34,8 5,8 L5,8 Z M18,3 L18,7 L6,7 L6,3 L18,3 Z"></path>
        <circle fill="#d93025" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <g id="business-printer-status-green">
        <path d="M12,3 L12,7 L22,7 L22.0008411,12.1834702 C21.4889261,11.4131214 20.8037622,10.7678435 20.000963,10.3032504 L20,9 L12,9 L12,11 L13.0312427,11.0000183 C11.7856236,12.0994345 11,13.7079712 11,15.5 C11,16.7266262 11.3680857,17.8672813 11.9998276,18.8175358 L12,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L2,21 L2,3 L12,3 Z M6,17 L4,17 L4,19 L6,19 L6,17 Z M10,17 L8,17 L8,19 L10,19 L10,17 Z M6,13 L4,13 L4,15 L6,15 L6,13 Z M10,13 L8,13 L8,15 L10,15 L10,13 Z M6,9 L4,9 L4,11 L6,11 L6,9 Z M10,9 L8,9 L8,11 L10,11 L10,9 Z M6,5 L4,5 L4,7 L6,7 L6,5 Z M10,5 L8,5 L8,7 L10,7 L10,5 Z"></path>
        <circle fill="#1e8e3e" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <g id="business-printer-status-grey">
        <path d="M12,3 L12,7 L22,7 L22.0008411,12.1834702 C21.4889261,11.4131214 20.8037622,10.7678435 20.000963,10.3032504 L20,9 L12,9 L12,11 L13.0312427,11.0000183 C11.7856236,12.0994345 11,13.7079712 11,15.5 C11,16.7266262 11.3680857,17.8672813 11.9998276,18.8175358 L12,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L2,21 L2,3 L12,3 Z M6,17 L4,17 L4,19 L6,19 L6,17 Z M10,17 L8,17 L8,19 L10,19 L10,17 Z M6,13 L4,13 L4,15 L6,15 L6,13 Z M10,13 L8,13 L8,15 L10,15 L10,13 Z M6,9 L4,9 L4,11 L6,11 L6,9 Z M10,9 L8,9 L8,11 L10,11 L10,9 Z M6,5 L4,5 L4,7 L6,7 L6,5 Z M10,5 L8,5 L8,7 L10,7 L10,5 Z"></path>
        <circle fill="#dadce0" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <g id="business-printer-status-orange">
        <path d="M12,3 L12,7 L22,7 L22.0008411,12.1834702 C21.4889261,11.4131214 20.8037622,10.7678435 20.000963,10.3032504 L20,9 L12,9 L12,11 L13.0312427,11.0000183 C11.7856236,12.0994345 11,13.7079712 11,15.5 C11,16.7266262 11.3680857,17.8672813 11.9998276,18.8175358 L12,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L2,21 L2,3 L12,3 Z M6,17 L4,17 L4,19 L6,19 L6,17 Z M10,17 L8,17 L8,19 L10,19 L10,17 Z M6,13 L4,13 L4,15 L6,15 L6,13 Z M10,13 L8,13 L8,15 L10,15 L10,13 Z M6,9 L4,9 L4,11 L6,11 L6,9 Z M10,9 L8,9 L8,11 L10,11 L10,9 Z M6,5 L4,5 L4,7 L6,7 L6,5 Z M10,5 L8,5 L8,7 L10,7 L10,5 Z"></path>
        <circle fill="#e37400" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <g id="business-printer-status-red">
        <path d="M12,3 L12,7 L22,7 L22.0008411,12.1834702 C21.4889261,11.4131214 20.8037622,10.7678435 20.000963,10.3032504 L20,9 L12,9 L12,11 L13.0312427,11.0000183 C11.7856236,12.0994345 11,13.7079712 11,15.5 C11,16.7266262 11.3680857,17.8672813 11.9998276,18.8175358 L12,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L2,21 L2,3 L12,3 Z M6,17 L4,17 L4,19 L6,19 L6,17 Z M10,17 L8,17 L8,19 L10,19 L10,17 Z M6,13 L4,13 L4,15 L6,15 L6,13 Z M10,13 L8,13 L8,15 L10,15 L10,13 Z M6,9 L4,9 L4,11 L6,11 L6,9 Z M10,9 L8,9 L8,11 L10,11 L10,9 Z M6,5 L4,5 L4,7 L6,7 L6,5 Z M10,5 L8,5 L8,7 L10,7 L10,5 Z"></path>
        <circle fill="#d93025" cx="17" cy="15.5" r="3.5"></circle>
      </g>

      
      <g id="printer-status-green-dark">
        <path d="M19,8 C20.66,8 22,9.34 22,11 L22,11 L22.0008411,12.1834702 C20.9260374,10.5660653 19.0875152,9.5 17,9.5 C14.2041481,9.5 11.8549346,11.412286 11.1889599,14.0002575 L8,14 L8,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L6,21 L6,17 L2,17 L2,11 C2,9.34 3.34,8 5,8 L5,8 Z M18,3 L18,7 L6,7 L6,3 L18,3 Z"></path>
        <circle fill="#81c995" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <g id="printer-status-grey-dark">
        <path d="M19,8 C20.66,8 22,9.34 22,11 L22,11 L22.0008411,12.1834702 C20.9260374,10.5660653 19.0875152,9.5 17,9.5 C14.2041481,9.5 11.8549346,11.412286 11.1889599,14.0002575 L8,14 L8,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L6,21 L6,17 L2,17 L2,11 C2,9.34 3.34,8 5,8 L5,8 Z M18,3 L18,7 L6,7 L6,3 L18,3 Z"></path>
        <circle fill="#80868b" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <g id="printer-status-orange-dark">
        <path d="M19,8 C20.66,8 22,9.34 22,11 L22,11 L22.0008411,12.1834702 C20.9260374,10.5660653 19.0875152,9.5 17,9.5 C14.2041481,9.5 11.8549346,11.412286 11.1889599,14.0002575 L8,14 L8,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L6,21 L6,17 L2,17 L2,11 C2,9.34 3.34,8 5,8 L5,8 Z M18,3 L18,7 L6,7 L6,3 L18,3 Z"></path>
        <circle fill="#fdd663" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <g id="printer-status-red-dark">
        <path d="M19,8 C20.66,8 22,9.34 22,11 L22,11 L22.0008411,12.1834702 C20.9260374,10.5660653 19.0875152,9.5 17,9.5 C14.2041481,9.5 11.8549346,11.412286 11.1889599,14.0002575 L8,14 L8,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L6,21 L6,17 L2,17 L2,11 C2,9.34 3.34,8 5,8 L5,8 Z M18,3 L18,7 L6,7 L6,3 L18,3 Z"></path>
        <circle fill="#f28b82" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <g id="business-printer-status-green-dark">
        <path d="M12,3 L12,7 L22,7 L22.0008411,12.1834702 C21.4889261,11.4131214 20.8037622,10.7678435 20.000963,10.3032504 L20,9 L12,9 L12,11 L13.0312427,11.0000183 C11.7856236,12.0994345 11,13.7079712 11,15.5 C11,16.7266262 11.3680857,17.8672813 11.9998276,18.8175358 L12,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L2,21 L2,3 L12,3 Z M6,17 L4,17 L4,19 L6,19 L6,17 Z M10,17 L8,17 L8,19 L10,19 L10,17 Z M6,13 L4,13 L4,15 L6,15 L6,13 Z M10,13 L8,13 L8,15 L10,15 L10,13 Z M6,9 L4,9 L4,11 L6,11 L6,9 Z M10,9 L8,9 L8,11 L10,11 L10,9 Z M6,5 L4,5 L4,7 L6,7 L6,5 Z M10,5 L8,5 L8,7 L10,7 L10,5 Z"></path>
        <circle fill="#81c995" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <g id="business-printer-status-grey-dark">
        <path d="M12,3 L12,7 L22,7 L22.0008411,12.1834702 C21.4889261,11.4131214 20.8037622,10.7678435 20.000963,10.3032504 L20,9 L12,9 L12,11 L13.0312427,11.0000183 C11.7856236,12.0994345 11,13.7079712 11,15.5 C11,16.7266262 11.3680857,17.8672813 11.9998276,18.8175358 L12,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L2,21 L2,3 L12,3 Z M6,17 L4,17 L4,19 L6,19 L6,17 Z M10,17 L8,17 L8,19 L10,19 L10,17 Z M6,13 L4,13 L4,15 L6,15 L6,13 Z M10,13 L8,13 L8,15 L10,15 L10,13 Z M6,9 L4,9 L4,11 L6,11 L6,9 Z M10,9 L8,9 L8,11 L10,11 L10,9 Z M6,5 L4,5 L4,7 L6,7 L6,5 Z M10,5 L8,5 L8,7 L10,7 L10,5 Z"></path>
        <circle fill="#80868b" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <g id="business-printer-status-orange-dark">
        <path d="M12,3 L12,7 L22,7 L22.0008411,12.1834702 C21.4889261,11.4131214 20.8037622,10.7678435 20.000963,10.3032504 L20,9 L12,9 L12,11 L13.0312427,11.0000183 C11.7856236,12.0994345 11,13.7079712 11,15.5 C11,16.7266262 11.3680857,17.8672813 11.9998276,18.8175358 L12,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L2,21 L2,3 L12,3 Z M6,17 L4,17 L4,19 L6,19 L6,17 Z M10,17 L8,17 L8,19 L10,19 L10,17 Z M6,13 L4,13 L4,15 L6,15 L6,13 Z M10,13 L8,13 L8,15 L10,15 L10,13 Z M6,9 L4,9 L4,11 L6,11 L6,9 Z M10,9 L8,9 L8,11 L10,11 L10,9 Z M6,5 L4,5 L4,7 L6,7 L6,5 Z M10,5 L8,5 L8,7 L10,7 L10,5 Z"></path>
        <circle fill="#fdd663" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <g id="business-printer-status-red-dark">
        <path d="M12,3 L12,7 L22,7 L22.0008411,12.1834702 C21.4889261,11.4131214 20.8037622,10.7678435 20.000963,10.3032504 L20,9 L12,9 L12,11 L13.0312427,11.0000183 C11.7856236,12.0994345 11,13.7079712 11,15.5 C11,16.7266262 11.3680857,17.8672813 11.9998276,18.8175358 L12,19 L12.1267078,19.0009178 C12.7530956,19.8713157 13.6069102,20.5670952 14.6011413,21.0012461 L2,21 L2,3 L12,3 Z M6,17 L4,17 L4,19 L6,19 L6,17 Z M10,17 L8,17 L8,19 L10,19 L10,17 Z M6,13 L4,13 L4,15 L6,15 L6,13 Z M10,13 L8,13 L8,15 L10,15 L10,13 Z M6,9 L4,9 L4,11 L6,11 L6,9 Z M10,9 L8,9 L8,11 L10,11 L10,9 Z M6,5 L4,5 L4,7 L6,7 L6,5 Z M10,5 L8,5 L8,7 L10,7 L10,5 Z"></path>
        <circle fill="#f28b82" cx="17" cy="15.5" r="3.5"></circle>
      </g>
      <svg id="no-printer-available" xmlns="http://www.w3.org/2000/svg" width="322" height="237" viewBox="0 0 322 237" fill="none">
        <path d="M236.777 90.584L209.208 68.9842C205.778 66.3608 203.517 62.4502 202.924 58.1118C202.331 53.7735 203.453 49.3625 206.044 45.8485V45.8485C207.327 44.1076 208.932 42.6395 210.768 41.528C212.604 40.4166 214.635 39.6835 216.744 39.3707C218.853 39.0579 221 39.1715 223.062 39.705C225.123 40.2386 227.059 41.1816 228.758 42.4802L256.319 64.0787C259.751 66.7009 262.013 70.6112 262.608 74.9499C263.203 79.2886 262.082 83.7005 259.491 87.2157V87.2157C256.899 90.7296 253.05 93.0584 248.791 93.69C244.531 94.3216 240.21 93.2044 236.777 90.584V90.584Z" fill="var(--cros-sys-illo-color3)"/>
        <path d="M85.1662 84.2372L72.8191 98.9518C71.2617 100.808 71.5038 103.575 73.3599 105.132L87.9005 117.333C89.7565 118.891 92.5237 118.649 94.0811 116.793L106.428 102.078C107.986 100.222 107.743 97.4549 105.887 95.8975L91.3468 83.6965C89.4908 82.1391 86.7236 82.3811 85.1662 84.2372Z" fill="var(--cros-sys-illo-color5)"/>
        <path d="M78.7032 188.115C84.1071 186.925 89.4438 185.445 94.689 183.681C101.986 181.501 109.83 182.242 116.498 185.74C120.141 187.833 123.896 189.732 127.749 191.43C141.472 196.798 157.382 189.517 160.959 174.989C164.101 162.228 155.512 148.399 142.122 146.423C135.936 145.481 129.647 146.652 123.428 146.255C116.808 145.902 110.548 143.297 105.721 138.888C101.595 135.075 97.8122 130.889 93.1593 127.592C88.65 124.363 83.3803 122.294 77.8232 121.57C69.0434 120.448 60.1179 122.691 52.8967 127.833C45.6755 132.975 40.7124 140.622 39.0361 149.189C37.3598 157.757 39.0988 166.587 43.8928 173.85C48.6867 181.114 56.1678 186.253 64.7856 188.203C69.3679 189.128 74.109 189.098 78.7032 188.115V188.115Z" fill="var(--cros-sys-illo-color1-2)"/>
        <path d="M257.605 175.866C257.354 176.426 256.987 176.925 256.527 177.331C256.068 177.737 255.527 178.041 254.941 178.222C254.354 178.403 253.734 178.457 253.122 178.381C252.511 178.305 251.921 178.101 251.391 177.781C242.089 172.217 235.131 163.435 231.848 153.117C228.564 142.798 229.186 131.667 233.594 121.854C238.002 112.04 245.887 104.233 255.74 99.9269C265.593 95.6204 276.722 95.1167 286.998 98.5122C287.585 98.7057 288.126 99.0202 288.585 99.4355C289.045 99.8507 289.413 100.357 289.665 100.922C289.918 101.487 290.049 102.098 290.051 102.714C290.052 103.331 289.924 103.94 289.675 104.501L257.605 175.866Z" stroke="var(--cros-sys-illo-secondary)" stroke-width="3" stroke-miterlimit="10"/>
        <path d="M204.704 187.052C215.197 187.052 223.704 178.545 223.704 168.052C223.704 157.558 215.197 149.052 204.704 149.052C194.21 149.052 185.704 157.558 185.704 168.052C185.704 178.545 194.21 187.052 204.704 187.052Z" stroke="var(--cros-sys-illo-color4)" stroke-width="3" stroke-miterlimit="10"/>
        <circle cx="159" cy="96.0518" r="46" fill="var(--cros-sys-illo-secondary)"/>
        <path d="M152.325 106.303L153.411 103.123C153.938 101.577 154.568 100.313 155.298 99.3294C156.088 98.317 157.075 97.4462 158.261 96.717C159.507 95.9588 161.032 95.1731 162.839 94.36C164.112 93.8086 165.26 93.2637 166.282 92.7252C167.304 92.1867 168.165 91.5437 168.864 90.7962C169.623 90.0196 170.198 89.0572 170.59 87.909C171.299 85.8334 171.195 83.8994 170.279 82.1069C169.406 80.3296 167.733 79.0186 165.26 78.1739C163.671 77.6309 162.211 77.5021 160.88 77.7875C159.55 78.0728 158.38 78.6102 157.371 79.3997C156.361 80.1892 155.507 81.0314 154.806 81.9265L150.386 77.9757C151.339 76.7726 152.625 75.6089 154.241 74.4844C155.858 73.36 157.753 72.5771 159.926 72.1356C162.098 71.6941 164.487 71.9183 167.093 72.8083C169.787 73.7283 171.939 75.0798 173.549 76.8626C175.219 78.6163 176.281 80.6312 176.737 82.9072C177.251 85.1542 177.101 87.47 176.287 89.8548C175.653 91.7096 174.69 93.2299 173.398 94.4157C172.149 95.6167 170.836 96.5736 169.458 97.2866C168.096 97.9554 166.918 98.5149 165.926 98.965C164.712 99.4874 163.66 100.04 162.771 100.624C161.881 101.208 161.131 101.889 160.52 102.666C159.909 103.444 159.415 104.385 159.038 105.489L158.088 108.271L152.325 106.303ZM150.33 121.673C149.137 121.266 148.257 120.521 147.69 119.44C147.181 118.329 147.131 117.178 147.538 115.985C147.93 114.837 148.66 114.001 149.726 113.478C150.852 112.925 152.011 112.853 153.203 113.26C154.351 113.652 155.179 114.404 155.688 115.514C156.255 116.596 156.343 117.71 155.951 118.859C155.544 120.051 154.777 120.923 153.652 121.476C152.585 121.999 151.478 122.065 150.33 121.673Z" fill="var(--cros-sys-illo-base)"/>
      </svg>
    

      
      <g id="business"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></g>
      <g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
    </defs>
  </svg>
</iron-iconset-svg>
`;
document.head.appendChild(template$3.content);

function getTemplate$q() {
    return html `<!--_html_template_start_--><style include="print-preview-shared cr-hidden-style md-select">:host{--duplex-icon-side-padding:8px;--duplex-icon-size:16px}.md-select{background-position:var(--duplex-icon-side-padding) center,calc(100% - var(--md-select-side-padding)) center;background-size:var(--duplex-icon-size),var(--md-arrow-width);padding-inline-start:32px}:host-context([dir=rtl]) .md-select{background-position-x:calc(100% - var(--duplex-icon-side-padding)),var(--md-select-side-padding)}</style>
<print-preview-settings-section hidden$="[[!settings.duplex.available]]">
  <div slot="title">
    <label id="label">$i18n{optionTwoSided}</label>
  </div>
  <div slot="controls" class="checkbox">
    <cr-checkbox id="duplex" aria-labelledby="label" disabled$="[[getDisabled_(settings.duplex.setByPolicy, disabled)]]" on-change="onCheckboxChange_">
      $i18n{printOnBothSidesLabel}
    </cr-checkbox>
  </div>
</print-preview-settings-section>
<iron-collapse opened="[[getOpenCollapse_(
    settings.duplex.*, settings.duplexShortEdge.available)]]">
  <print-preview-settings-section>
    <div slot="title"></div>
    <div slot="controls">
      <select class="md-select" aria-labelledby="duplex" style="background-image:[[getBackgroundImages_(settings.duplexShortEdge.value,dark) ]]" disabled$="[[getDisabled_(
            settings.duplexShortEdge.setByPolicy, disabled)]]" value="{{selectedValue::change}}">
        <option value="[[duplexValueEnum_.LONG_EDGE]]">
          $i18n{optionLongEdge}
        </option>
        <option value="[[duplexValueEnum_.SHORT_EDGE]]">
          $i18n{optionShortEdge}
        </option>
      </select>
    </div>
  </print-preview-settings-section>
</iron-collapse>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewDuplexSettingsElementBase = SettingsMixin(SelectMixin(PolymerElement));
class PrintPreviewDuplexSettingsElement extends PrintPreviewDuplexSettingsElementBase {
    static get is() {
        return 'print-preview-duplex-settings';
    }
    static get template() {
        return getTemplate$q();
    }
    static get properties() {
        return {
            dark: Boolean,
            disabled: Boolean,
            /**
             * Mirroring the enum so that it can be used from HTML bindings.
             */
            duplexValueEnum_: {
                type: Object,
                value: DuplexMode,
            },
        };
    }
    static get observers() {
        return [
            'onDuplexSettingChange_(settings.duplex.*)',
            'onDuplexTypeChange_(settings.duplexShortEdge.*)',
        ];
    }
    constructor() {
        super();
        this.meta_ = new IronMeta({ type: 'iconset', value: undefined });
    }
    onDuplexSettingChange_() {
        this.$.duplex.checked = this.getSettingValue('duplex');
    }
    onDuplexTypeChange_() {
        this.selectedValue = this.getSettingValue('duplexShortEdge') ?
            DuplexMode.SHORT_EDGE.toString() :
            DuplexMode.LONG_EDGE.toString();
    }
    onCheckboxChange_() {
        this.setSetting('duplex', this.$.duplex.checked);
    }
    onProcessSelectChange(value) {
        this.setSetting('duplexShortEdge', value === DuplexMode.SHORT_EDGE.toString());
    }
    /**
     * @return Whether to expand the collapse for the dropdown.
     */
    getOpenCollapse_() {
        return this.getSetting('duplexShortEdge').available &&
            this.getSettingValue('duplex');
    }
    /**
     * @param managed Whether the setting is managed by policy.
     * @param disabled value of this.disabled
     * @return Whether the controls should be disabled.
     */
    getDisabled_(managed, disabled) {
        return managed || disabled;
    }
    /**
     * @return An inline svg corresponding to |icon| and the image for
     *     the dropdown arrow.
     */
    getBackgroundImages_() {
        const icon = this.getSettingValue('duplexShortEdge') ? 'short-edge' : 'long-edge';
        const iconset = this.meta_.byKey('print-preview');
        return getSelectDropdownBackground(iconset, icon, this);
    }
}
customElements.define(PrintPreviewDuplexSettingsElement.is, PrintPreviewDuplexSettingsElement);

function getTemplate$p() {
    return html `<!--_html_template_start_--><style>:host{align-items:center;display:flex;justify-content:space-between;padding:20px var(--print-preview-sidebar-margin) 12px}:host-context([chrome-refresh-2023]):host{padding-top:var(--print-preview-sidebar-margin)}@media (prefers-color-scheme:light){:host{background-color:#fff}}#headerContainer{align-items:center;display:flex}.summary,.title{color:var(--cr-primary-text-color);line-height:calc(20/13 * 1em);margin:0}.title{font-size:calc(16/13 * 1em);font-weight:400}.summary{font-weight:500}iron-icon{align-self:center;fill:var(--cr-secondary-text-color);height:16px;margin-inline-start:8px;width:16px}</style>
<div id="headerContainer">
  <h1 class="title">$i18n{title}</h1>
  <iron-icon hidden$="[[!managed]]" icon="print-preview:business" alt="" title="$i18n{managedSettings}">
  </iron-icon>
</div>
<span class="summary">[[summary_]]</span>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewHeaderElementBase = SettingsMixin(PolymerElement);
class PrintPreviewHeaderElement extends PrintPreviewHeaderElementBase {
    static get is() {
        return 'print-preview-header';
    }
    static get template() {
        return getTemplate$p();
    }
    static get properties() {
        return {
            destination: Object,
            error: Number,
            state: Number,
            managed: Boolean,
            sheetCount: Number,
            summary_: String,
        };
    }
    static get observers() {
        return [
            'updateSummary_(sheetCount, state, destination.id)',
        ];
    }
    isPdf_() {
        return this.destination &&
            this.destination.type === PrinterType.PDF_PRINTER;
    }
    updateSummary_() {
        switch (this.state) {
            case (State.PRINTING):
                this.summary_ =
                    loadTimeData.getString(this.isPdf_() ? 'saving' : 'printing');
                break;
            case (State.READY):
                this.updateSheetsSummary_();
                break;
            case (State.FATAL_ERROR):
                this.summary_ = this.getErrorMessage_();
                break;
            default:
                this.summary_ = null;
                break;
        }
    }
    /**
     * @return The error message to display.
     */
    getErrorMessage_() {
        switch (this.error) {
            case Error$1.PRINT_FAILED:
                return loadTimeData.getString('couldNotPrint');
            default:
                return '';
        }
    }
    updateSheetsSummary_() {
        if (this.sheetCount === 0) {
            this.summary_ = '';
            return;
        }
        const pageOrSheet = this.isPdf_() ? 'Page' : 'Sheet';
        PluralStringProxyImpl.getInstance()
            .getPluralString(`printPreview${pageOrSheet}SummaryLabel`, this.sheetCount)
            .then(label => {
            this.summary_ = label;
        });
    }
}
customElements.define(PrintPreviewHeaderElement.is, PrintPreviewHeaderElement);

function getTemplate$o() {
    return html `<!--_html_template_start_--><style include="print-preview-shared md-select"></style>
<print-preview-settings-section>
  <span id="layout-label" slot="title">$i18n{layoutLabel}</span>
  <div slot="controls">
    <select class="md-select" aria-labelledby="layout-label" disabled$="[[disabled]]" value="{{selectedValue::change}}">
      <option value="portrait" selected="selected">$i18n{optionPortrait}</option>
      <option value="landscape">$i18n{optionLandscape}</option>
    </select>
  </div>
</print-preview-settings-section>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewLayoutSettingsElementBase = SettingsMixin(SelectMixin(PolymerElement));
class PrintPreviewLayoutSettingsElement extends PrintPreviewLayoutSettingsElementBase {
    static get is() {
        return 'print-preview-layout-settings';
    }
    static get template() {
        return getTemplate$o();
    }
    static get properties() {
        return {
            disabled: Boolean,
        };
    }
    static get observers() {
        return ['onLayoutSettingChange_(settings.layout.value)'];
    }
    onLayoutSettingChange_(newValue) {
        this.selectedValue = newValue ? 'landscape' : 'portrait';
    }
    onProcessSelectChange(value) {
        this.setSetting('layout', value === 'landscape');
    }
}
customElements.define(PrintPreviewLayoutSettingsElement.is, PrintPreviewLayoutSettingsElement);

function getTemplate$n() {
    return html `<!--_html_template_start_--><style include="print-preview-shared">:host print-preview-settings-select{margin:0 calc(var(--print-preview-sidebar-margin) - 2px)}</style>
<print-preview-settings-section>
  <span id="media-size-label" slot="title">$i18n{mediaSizeLabel}</span>
  <div slot="controls">
    <print-preview-settings-select aria-label="$i18n{mediaSizeLabel}" capability="[[capability]]" setting-name="mediaSize" settings="{{settings}}" disabled="[[disabled]]">
    </print-preview-settings-select>
  </div>
</print-preview-settings-section>

<iron-collapse opened="[[settings.borderless.available]]">
  <print-preview-settings-section>
    <div slot="title"></div>
    <div slot="controls" class="checkbox">
      <cr-checkbox id="borderless" aria-labelledby="borderless-label" disabled$="[[disableBorderlessCheckbox_]]" on-change="onBorderlessCheckboxChange_">
        <span id="borderless-label">$i18n{borderlessLabel}</span>
      </cr-checkbox>
    </div>
  </print-preview-settings-section>
</iron-collapse>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewMediaSizeSettingsElementBase = SettingsMixin(PolymerElement);
class PrintPreviewMediaSizeSettingsElement extends PrintPreviewMediaSizeSettingsElementBase {
    static get is() {
        return 'print-preview-media-size-settings';
    }
    static get template() {
        return getTemplate$n();
    }
    static get properties() {
        return {
            capability: Object,
            disableBorderlessCheckbox_: {
                type: Boolean,
                computed: 'computeDisableBorderlessCheckbox_(disabled, ' +
                    'settings.mediaSize.value.has_borderless_variant)',
            },
            disabled: Boolean,
        };
    }
    static get observers() {
        return [
            'onMediaSizeSettingChange_(settings.mediaSize.*, capability.option)',
            'updateBorderlessAvailabilityForSize_(' +
                'settings.mediaSize.*, settings.borderless.*)',
        ];
    }
    onMediaSizeSettingChange_() {
        if (!this.capability) {
            return;
        }
        const valueToSet = JSON.stringify(this.getSettingValue('mediaSize'));
        for (const option of this.capability.option) {
            if (JSON.stringify(option) === valueToSet) {
                this.shadowRoot.querySelector('print-preview-settings-select')
                    .selectValue(valueToSet);
                return;
            }
        }
        const defaultOption = this.capability.option.find(o => !!o.is_default) ||
            this.capability.option[0];
        this.setSetting('mediaSize', defaultOption);
    }
    computeDisableBorderlessCheckbox_(disabled, hasBorderlessVariant) {
        return disabled || !hasBorderlessVariant;
    }
    updateBorderlessAvailabilityForSize_() {
        if (!loadTimeData.getBoolean('isBorderlessPrintingEnabled')) {
            return;
        }
        const size = this.getSettingValue('mediaSize');
        if (size.has_borderless_variant) {
            this.$.borderless.checked = this.getSettingValue('borderless');
        }
        else {
            // If a size only supports borderless and has no bordered variant,
            // has_borderless_variant will be false. In this case, the checkbox
            // will be disabled (it wouldn't have any effect), but will display
            // as checked to indicate that the print will be borderless. This is
            // a corner case, but printers are allowed to do it, so it's best to
            // handle it as well as possible. If a size only supports bordered and
            // not borderless, disable the checkbox and leave it unchecked.
            this.$.borderless.checked =
                (size?.imageable_area_left_microns === 0 &&
                    size?.imageable_area_bottom_microns === 0 &&
                    size?.imageable_area_right_microns === size.width_microns &&
                    size?.imageable_area_top_microns === size.height_microns);
        }
    }
    onBorderlessCheckboxChange_() {
        this.setSetting('borderless', this.$.borderless.checked);
    }
}
customElements.define(PrintPreviewMediaSizeSettingsElement.is, PrintPreviewMediaSizeSettingsElement);

function getTemplate$m() {
    return html `<!--_html_template_start_--><style include="print-preview-shared">:host print-preview-settings-select{margin:0 calc(var(--print-preview-sidebar-margin) - 2px)}</style>
<print-preview-settings-section>
  <span id="media-type-label" slot="title">$i18n{mediaTypeLabel}</span>
  <div slot="controls">
    <print-preview-settings-select aria-label="$i18n{mediaTypeLabel}" capability="[[capability]]" setting-name="mediaType" settings="{{settings}}" disabled="[[disabled]]">
    </print-preview-settings-select>
  </div>
</print-preview-settings-section>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewMediaTypeSettingsElementBase = SettingsMixin(PolymerElement);
class PrintPreviewMediaTypeSettingsElement extends PrintPreviewMediaTypeSettingsElementBase {
    static get is() {
        return 'print-preview-media-type-settings';
    }
    static get template() {
        return getTemplate$m();
    }
    static get properties() {
        return {
            capability: Object,
            disabled: Boolean,
        };
    }
    static get observers() {
        return [
            'onMediaTypeSettingChange_(settings.mediaType.*, capability.option)',
        ];
    }
    onMediaTypeSettingChange_() {
        if (!this.capability) {
            return;
        }
        const valueToSet = JSON.stringify(this.getSettingValue('mediaType'));
        for (const option of this.capability.option) {
            if (JSON.stringify(option) === valueToSet) {
                this.shadowRoot.querySelector('print-preview-settings-select')
                    .selectValue(valueToSet);
                return;
            }
        }
        const defaultOption = this.capability.option.find(o => !!o.is_default) ||
            this.capability.option[0];
        this.setSetting('mediaType', defaultOption);
    }
}
customElements.define(PrintPreviewMediaTypeSettingsElement.is, PrintPreviewMediaTypeSettingsElement);

function getTemplate$l() {
    return html `<!--_html_template_start_--><style include="print-preview-shared md-select"></style>
<print-preview-settings-section>
  <span id="margins-label" slot="title">$i18n{marginsLabel}</span>
  <div slot="controls">
    <select class="md-select" aria-labelledby="margins-label" disabled$="[[marginsDisabled_]]" value="{{selectedValue::change}}">
      
      <option value="[[marginsTypeEnum_.DEFAULT]]" selected="selected">
        $i18n{defaultMargins}
      </option>
      <option value="[[marginsTypeEnum_.NO_MARGINS]]">
        $i18n{noMargins}
      </option>
      <option value="[[marginsTypeEnum_.MINIMUM]]">
        $i18n{minimumMargins}
      </option>
      <option value="[[marginsTypeEnum_.CUSTOM]]">
        $i18n{customMargins}
      </option>
    </select>
  </div>
</print-preview-settings-section>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewMarginsSettingsElementBase = SettingsMixin(SelectMixin(PolymerElement));
class PrintPreviewMarginsSettingsElement extends PrintPreviewMarginsSettingsElementBase {
    constructor() {
        super(...arguments);
        this.loaded_ = false;
    }
    static get is() {
        return 'print-preview-margins-settings';
    }
    static get template() {
        return getTemplate$l();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                observer: 'updateMarginsDisabled_',
            },
            state: {
                type: Number,
                observer: 'onStateChange_',
            },
            marginsDisabled_: Boolean,
            /** Mirroring the enum so that it can be used from HTML bindings. */
            marginsTypeEnum_: {
                type: Object,
                value: MarginsType,
            },
        };
    }
    static get observers() {
        return [
            'onMarginsSettingChange_(settings.margins.value)',
            'onMediaSizeOrLayoutChange_(' +
                'settings.mediaSize.value, settings.layout.value)',
            'onPagesPerSheetSettingChange_(settings.pagesPerSheet.value)',
        ];
    }
    onStateChange_() {
        if (this.state === State.READY) {
            this.loaded_ = true;
        }
    }
    onMediaSizeOrLayoutChange_() {
        if (this.loaded_ &&
            this.getSetting('margins').value === MarginsType.CUSTOM) {
            this.setSetting('margins', MarginsType.DEFAULT);
        }
    }
    /**
     * @param newValue The new value of the pages per sheet setting.
     */
    onPagesPerSheetSettingChange_(newValue) {
        if (newValue > 1) {
            this.setSetting('margins', MarginsType.DEFAULT);
        }
        this.updateMarginsDisabled_();
    }
    /** @param newValue The new value of the margins setting. */
    onMarginsSettingChange_(newValue) {
        this.selectedValue = newValue.toString();
    }
    onProcessSelectChange(value) {
        this.setSetting('margins', parseInt(value, 10));
    }
    updateMarginsDisabled_() {
        this.marginsDisabled_ =
            this.getSettingValue('pagesPerSheet') > 1 || this.disabled;
    }
}
customElements.define(PrintPreviewMarginsSettingsElement.is, PrintPreviewMarginsSettingsElement);

const styleMod$4 = document.createElement('dom-module');
styleMod$4.appendChild(html `
  <template>
    <style>
:host{align-items:center;align-self:stretch;display:flex;margin:0;outline:0}:host(:not([effectively-disabled_])){cursor:pointer}:host(:not([no-hover],[effectively-disabled_]):hover){background-color:var(--cr-hover-background-color)}:host(:not([no-hover],[effectively-disabled_]):active){background-color:var(--cr-active-background-color)}:host(:not([no-hover],[effectively-disabled_])) cr-icon-button{--cr-icon-button-hover-background-color:transparent;--cr-icon-button-active-background-color:transparent}
    </style>
  </template>
`.content);
styleMod$4.register('cr-actionable-row-style');

const template$2 = html `
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
      <g id="thumbs-down-filled">
        <path d="M6 3h10v13l-7 7-1.25-1.25a1.336 1.336 0 0 1-.29-.477 1.66 1.66 0 0 1-.108-.574v-.347L8.449 16H3c-.535 0-1-.2-1.398-.602C1.199 15 1 14.535 1 14v-2c0-.117.012-.242.04-.375.022-.133.062-.258.108-.375l3-7.05c.153-.333.403-.618.75-.848A1.957 1.957 0 0 1 6 3Zm12 13V3h4v13Zm0 0">
        </path>
      </g>
      <g id="thumbs-up">
        <path d="M18 21H7V8l7-7 1.25 1.25c.117.117.208.275.275.475.083.2.125.392.125.575v.35L14.55 8H21c.533 0 1 .2 1.4.6.4.4.6.867.6 1.4v2c0 .117-.017.242-.05.375s-.067.258-.1.375l-3 7.05c-.15.333-.4.617-.75.85-.35.233-.717.35-1.1.35Zm-9-2h9l3-7v-2h-9l1.35-5.5L9 8.85V19ZM9 8.85V19 8.85ZM7 8v2H4v9h3v2H2V8h5Z">
        </path>
      </g>
      <g id="thumbs-up-filled">
        <path d="M18 21H8V8l7-7 1.25 1.25c.117.117.21.273.29.477.073.199.108.39.108.574v.347L15.551 8H21c.535 0 1 .2 1.398.602C22.801 9 23 9.465 23 10v2c0 .117-.012.242-.04.375a1.897 1.897 0 0 1-.108.375l-3 7.05a2.037 2.037 0 0 1-.75.848A1.957 1.957 0 0 1 18 21ZM6 8v13H2V8Zm0 0">
      </path></g>
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
`;
document.head.appendChild(template$2.content);

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
// clang-format on
let hideInk = false;
assert(!isIOS, 'pointerdown doesn\'t work on iOS');
document.addEventListener('pointerdown', function () {
    hideInk = true;
}, true);
document.addEventListener('keydown', function () {
    hideInk = false;
}, true);
/**
 * Attempts to track whether focus outlines should be shown, and if they
 * shouldn't, removes the "ink" (ripple) from a control while focusing it.
 * This is helpful when a user is clicking/touching, because it's not super
 * helpful to show focus ripples in that case. This is Polymer-specific.
 */
function focusWithoutInk(toFocus) {
    // |toFocus| does not have a 'noink' property, so it's unclear whether the
    // element has "ink" and/or whether it can be suppressed. Just focus().
    if (!('noink' in toFocus) || !hideInk) {
        toFocus.focus();
        return;
    }
    const toFocusWithNoInk = toFocus;
    // Make sure the element is in the document we're listening to events on.
    assert(document === toFocusWithNoInk.ownerDocument);
    const { noink } = toFocusWithNoInk;
    toFocusWithNoInk.noink = true;
    toFocusWithNoInk.focus();
    toFocusWithNoInk.noink = noink;
}

function getTemplate$k() {
    return html `<!--_html_template_start_-->    <style include="cr-actionable-row-style">:host([disabled]){opacity:.65;pointer-events:none}:host([disabled]) cr-icon-button{display:var(--cr-expand-button-disabled-display,initial)}#label{flex:1;padding:var(--cr-section-vertical-padding) 0}cr-icon-button{--cr-icon-button-icon-size:var(--cr-expand-button-icon-size, 20px);--cr-icon-button-size:var(--cr-expand-button-size, 36px)}</style>

    <div id="label" aria-hidden="true"><slot></slot></div>
    <cr-icon-button id="icon" aria-labelledby="label" disabled="[[disabled]]" tabindex="[[tabIndex]]" part="icon"></cr-icon-button>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'cr-expand-button' is a chrome-specific wrapper around a button that toggles
 * between an opened (expanded) and closed state.
 */
class CrExpandButtonElement extends PolymerElement {
    static get is() {
        return 'cr-expand-button';
    }
    static get template() {
        return getTemplate$k();
    }
    static get properties() {
        return {
            /**
             * If true, the button is in the expanded state and will show the icon
             * specified in the `collapseIcon` property. If false, the button shows
             * the icon specified in the `expandIcon` property.
             */
            expanded: {
                type: Boolean,
                value: false,
                notify: true,
                observer: 'onExpandedChange_',
            },
            /**
             * If true, the button will be disabled and grayed out.
             */
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /** A11y text descriptor for this control. */
            ariaLabel: {
                type: String,
                observer: 'onAriaLabelChange_',
            },
            tabIndex: {
                type: Number,
                value: 0,
            },
            expandIcon: {
                type: String,
                value: 'cr:expand-more',
                observer: 'onIconChange_',
            },
            collapseIcon: {
                type: String,
                value: 'cr:expand-less',
                observer: 'onIconChange_',
            },
            expandTitle: String,
            collapseTitle: String,
            tooltipText_: {
                type: String,
                computed: 'computeTooltipText_(expandTitle, collapseTitle, expanded)',
                observer: 'onTooltipTextChange_',
            },
        };
    }
    static get observers() {
        return ['updateAriaExpanded_(disabled, expanded)'];
    }
    ready() {
        super.ready();
        this.addEventListener('click', this.toggleExpand_);
    }
    computeTooltipText_() {
        return this.expanded ? this.collapseTitle : this.expandTitle;
    }
    onTooltipTextChange_() {
        this.title = this.tooltipText_;
    }
    focus() {
        this.$.icon.focus();
    }
    onAriaLabelChange_() {
        if (this.ariaLabel) {
            this.$.icon.removeAttribute('aria-labelledby');
            this.$.icon.setAttribute('aria-label', this.ariaLabel);
        }
        else {
            this.$.icon.removeAttribute('aria-label');
            this.$.icon.setAttribute('aria-labelledby', 'label');
        }
    }
    onExpandedChange_() {
        this.updateIcon_();
    }
    onIconChange_() {
        this.updateIcon_();
    }
    updateIcon_() {
        this.$.icon.ironIcon = this.expanded ? this.collapseIcon : this.expandIcon;
    }
    toggleExpand_(event) {
        // Prevent |click| event from bubbling. It can cause parents of this
        // elements to erroneously re-toggle this control.
        event.stopPropagation();
        event.preventDefault();
        this.scrollIntoViewIfNeeded();
        this.expanded = !this.expanded;
        focusWithoutInk(this.$.icon);
    }
    updateAriaExpanded_() {
        if (this.disabled) {
            this.$.icon.removeAttribute('aria-expanded');
        }
        else {
            this.$.icon.setAttribute('aria-expanded', this.expanded ? 'true' : 'false');
        }
    }
}
customElements.define(CrExpandButtonElement.is, CrExpandButtonElement);

function getTemplate$j() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style print-preview-shared">:host{border-top:var(--print-preview-settings-border);display:block}:host([disabled]){pointer-events:none}div{align-items:center;display:flex;font:inherit;margin:0;min-height:48px}:host cr-expand-button{flex:1;padding-inline-end:calc(var(--print-preview-sidebar-margin) + 6px);padding-inline-start:var(--print-preview-sidebar-margin);--cr-expand-button-size:28px}:host([hidden]){display:none}:host([disabled]) #label{opacity:var(--cr-disabled-opacity)}</style>
<div on-click="toggleExpandButton_" actionable>
  <cr-expand-button aria-label="$i18n{moreOptionsLabel}" expanded="{{settingsExpandedByUser}}" disabled="[[disabled]]">
    <div id="label">$i18n{moreOptionsLabel}</div>
  </cr-expand-button>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PrintPreviewMoreSettingsElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.metrics_ = MetricsContext.printSettingsUi();
    }
    static get is() {
        return 'print-preview-more-settings';
    }
    static get template() {
        return getTemplate$j();
    }
    static get properties() {
        return {
            settingsExpandedByUser: {
                type: Boolean,
                notify: true,
            },
            disabled: {
                type: Boolean,
                reflectToAttribute: true,
            },
        };
    }
    /**
     * Toggles the expand button within the element being listened to.
     */
    toggleExpandButton_(e) {
        // The expand button handles toggling itself.
        const expandButtonTag = 'CR-EXPAND-BUTTON';
        if (e.target.tagName === expandButtonTag) {
            return;
        }
        if (!e.currentTarget.hasAttribute('actionable')) {
            return;
        }
        const expandButton = e.currentTarget.querySelector(expandButtonTag);
        assert(expandButton);
        expandButton.expanded = !expandButton.expanded;
        this.metrics_.record(this.settingsExpandedByUser ?
            PrintSettingsUiBucket.MORE_SETTINGS_CLICKED :
            PrintSettingsUiBucket.LESS_SETTINGS_CLICKED);
    }
}
customElements.define(PrintPreviewMoreSettingsElement.is, PrintPreviewMoreSettingsElement);

function getTemplate$i() {
    return html `<!--_html_template_start_--><style include="print-preview-shared cr-hidden-style">print-preview-settings-section:not(.first-visible) .title{display:none}</style>
<template is="dom-repeat" items="[[options_]]">
  <print-preview-settings-section hidden$="[[!item.available]]" class$="[[getClass_(index, firstIndex_)]]">
    <div slot="title">
      <span class="title">$i18n{optionsLabel}</span>
    </div>
    <div slot="controls" class="checkbox">
      <cr-checkbox id$="[[item.name]]" disabled$="[[getDisabled_(item.managed, disabled)]]" on-change="onChange_" checked$="[[item.value]]">
        <span>[[i18n(item.label)]]</span>
      </cr-checkbox>
    </div>
  </print-preview-settings-section>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewOtherOptionsSettingsElementBase = SettingsMixin(I18nMixin(PolymerElement));
class PrintPreviewOtherOptionsSettingsElement extends PrintPreviewOtherOptionsSettingsElementBase {
    constructor() {
        super(...arguments);
        this.timeouts_ = new Map();
        this.previousValues_ = new Map();
    }
    static get is() {
        return 'print-preview-other-options-settings';
    }
    static get template() {
        return getTemplate$i();
    }
    static get properties() {
        return {
            disabled: Boolean,
            options_: {
                type: Array,
                value() {
                    return [
                        { name: 'headerFooter', label: 'optionHeaderFooter' },
                        { name: 'cssBackground', label: 'optionBackgroundColorsAndImages' },
                        { name: 'rasterize', label: 'optionRasterize' },
                        { name: 'selectionOnly', label: 'optionSelectionOnly' },
                    ];
                },
            },
            /**
             * The index of the checkbox that should display the "Options" title.
             */
            firstIndex_: {
                type: Number,
                value: 0,
            },
        };
    }
    static get observers() {
        return [
            'onHeaderFooterSettingChange_(settings.headerFooter.*)',
            'onCssBackgroundSettingChange_(settings.cssBackground.*)',
            'onRasterizeSettingChange_(settings.rasterize.*)',
            'onSelectionOnlySettingChange_(settings.selectionOnly.*)',
        ];
    }
    /**
     * @param settingName The name of the setting to updated.
     * @param newValue The new value for the setting.
     */
    updateSettingWithTimeout_(settingName, newValue) {
        const timeout = this.timeouts_.get(settingName);
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        this.timeouts_.set(settingName, setTimeout(() => {
            this.timeouts_.delete(settingName);
            if (this.previousValues_.get(settingName) === newValue) {
                return;
            }
            this.previousValues_.set(settingName, newValue);
            this.setSetting(settingName, newValue);
            // For tests only
            this.dispatchEvent(new CustomEvent('update-checkbox-setting', { bubbles: true, composed: true, detail: settingName }));
        }, 200));
    }
    /**
     * @param index The index of the option to update.
     */
    updateOptionFromSetting_(index) {
        const setting = this.getSetting(this.options_[index].name);
        this.set(`options_.${index}.available`, setting.available);
        this.set(`options_.${index}.value`, setting.value);
        this.set(`options_.${index}.managed`, setting.setByPolicy);
        // Update first index
        const availableOptions = this.options_.filter(option => !!option.available);
        if (availableOptions.length > 0) {
            this.firstIndex_ = this.options_.indexOf(availableOptions[0]);
        }
    }
    /**
     * @param managed Whether the setting is managed by policy.
     * @param disabled value of this.disabled
     * @return Whether the checkbox should be disabled.
     */
    getDisabled_(managed, disabled) {
        return managed || disabled;
    }
    onHeaderFooterSettingChange_() {
        this.updateOptionFromSetting_(0);
    }
    onCssBackgroundSettingChange_() {
        this.updateOptionFromSetting_(1);
    }
    onRasterizeSettingChange_() {
        this.updateOptionFromSetting_(2);
    }
    onSelectionOnlySettingChange_() {
        this.updateOptionFromSetting_(3);
    }
    /**
     * @param e Contains the checkbox item that was checked.
     */
    onChange_(e) {
        const name = e.model.item.name;
        this.updateSettingWithTimeout_(name, this.shadowRoot.querySelector(`#${name}`).checked);
    }
    /**
     * @param index The index of the settings section.
     * @return Class string containing 'first-visible' if the settings
     *     section is the first visible.
     */
    getClass_(index) {
        return index === this.firstIndex_ ? 'first-visible' : '';
    }
}
customElements.define(PrintPreviewOtherOptionsSettingsElement.is, PrintPreviewOtherOptionsSettingsElement);

function getTemplate$h() {
    return html `<!--_html_template_start_--><style include="print-preview-shared md-select"></style>
<print-preview-settings-section>
  <span id="pages-per-sheet-label" slot="title">$i18n{pagesPerSheetLabel}
  </span>
  <div slot="controls">
    <select class="md-select" aria-labelledby="pages-per-sheet-label" disabled$="[[disabled]]" value="{{selectedValue::change}}">
      <option value="1" selected="selected">1</option>
      <option value="2">2</option>
      <option value="4">4</option>
      <option value="6">6</option>
      <option value="9">9</option>
      <option value="16">16</option>
    </select>
  </div>
</print-preview-settings-section>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewPagesPerSheetSettingsElementBase = SettingsMixin(SelectMixin(PolymerElement));
class PrintPreviewPagesPerSheetSettingsElement extends PrintPreviewPagesPerSheetSettingsElementBase {
    static get is() {
        return 'print-preview-pages-per-sheet-settings';
    }
    static get template() {
        return getTemplate$h();
    }
    static get properties() {
        return {
            disabled: Boolean,
        };
    }
    static get observers() {
        return [
            'onPagesPerSheetSettingChange_(settings.pagesPerSheet.value)',
        ];
    }
    /**
     * @param newValue The new value of the pages per sheet setting.
     */
    onPagesPerSheetSettingChange_(newValue) {
        this.selectedValue = newValue.toString();
    }
    onProcessSelectChange(value) {
        this.setSetting('pagesPerSheet', parseInt(value, 10));
    }
}
customElements.define(PrintPreviewPagesPerSheetSettingsElement.is, PrintPreviewPagesPerSheetSettingsElement);

function getTemplate$g() {
    return html `<!--_html_template_start_--><style include="print-preview-shared md-select">:host([error-state_='0']) #pageSettingsCustomInput,:host([error-state_='3']) #pageSettingsCustomInput{--cr-input-error-display:none}:host([error-state_='1']) #customInputWrapper,:host([error-state_='2']) #customInputWrapper{margin-bottom:8px}#pageSettingsCustomInput{cursor:default;--cr-form-field-label-height:100%}:host #title{align-self:baseline}</style>
<print-preview-settings-section>
  <span slot="title" id="pages-label">$i18n{pagesLabel}</span>
  <div slot="controls">
    <select class="md-select" aria-labelledby="pages-label" disabled$="[[controlsDisabled_]]" value="{{selectedValue::change}}" on-blur="onSelectBlur_">
      <option value="[[pagesValueEnum_.ALL]]" selected="selected">
        $i18n{optionAllPages}
      </option>
      <option value="[[pagesValueEnum_.ODDS]]" hidden$="[[isSinglePage_(pageCount)]]">
        $i18n{optionOddPages}
      </option>
      <option value="[[pagesValueEnum_.EVENS]]" hidden$="[[isSinglePage_(pageCount)]]">
        $i18n{optionEvenPages}
      </option>
      <option value="[[pagesValueEnum_.CUSTOM]]">
        $i18n{optionCustomPages}
      </option>
    </select>
  </div>
</print-preview-settings-section>
<iron-collapse opened="[[shouldShowInput_(selection_)]]" on-transitionend="onCollapseChanged_">
  <print-preview-settings-section id="customInputWrapper">
    <div slot="title"></div>
    <div slot="controls">
      <cr-input id="pageSettingsCustomInput" type="text" data-timeout-delay="500" invalid="[[hasError_]]" disabled$="[[inputDisabled_(controlsDisabled_, selection_)]]" spellcheck="false" placeholder="$i18n{examplePageRangeText}" error-message="[[getHintMessage_(errorState_, pageCount)]]" on-blur="onCustomInputBlur_">
      </cr-input>
    </div>
  </print-preview-settings-section>
</iron-collapse>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var PagesInputErrorState;
(function (PagesInputErrorState) {
    PagesInputErrorState[PagesInputErrorState["NO_ERROR"] = 0] = "NO_ERROR";
    PagesInputErrorState[PagesInputErrorState["INVALID_SYNTAX"] = 1] = "INVALID_SYNTAX";
    PagesInputErrorState[PagesInputErrorState["OUT_OF_BOUNDS"] = 2] = "OUT_OF_BOUNDS";
    PagesInputErrorState[PagesInputErrorState["EMPTY"] = 3] = "EMPTY";
})(PagesInputErrorState || (PagesInputErrorState = {}));
var PagesValue;
(function (PagesValue) {
    PagesValue[PagesValue["ALL"] = 0] = "ALL";
    PagesValue[PagesValue["ODDS"] = 1] = "ODDS";
    PagesValue[PagesValue["EVENS"] = 2] = "EVENS";
    PagesValue[PagesValue["CUSTOM"] = 3] = "CUSTOM";
})(PagesValue || (PagesValue = {}));
/**
 * Used in place of Number.parseInt(), to ensure values like '1  2' or '1a2' are
 * not allowed.
 * @param value The value to convert to a number.
 * @return The value converted to a number, or NaN if it cannot be converted.
 */
function parseIntStrict(value) {
    if (/^\d+$/.test(value.trim())) {
        return Number(value);
    }
    return NaN;
}
const PrintPreviewPagesSettingsElementBase = WebUiListenerMixin(InputMixin(SettingsMixin(SelectMixin(PolymerElement))));
class PrintPreviewPagesSettingsElement extends PrintPreviewPagesSettingsElementBase {
    constructor() {
        super(...arguments);
        /**
         * True if the user's last valid input should be restored to the custom
         * input field. Cleared when the input is set automatically, or the user
         * manually clears the field.
         */
        this.restoreLastInput_ = true;
        /**
         * Memorizes the user's last non-custom pages setting. Used when
         * `PagesValue.ODDS` and `PagesValue.EVEN` become invalid due to a changed
         * page count.
         */
        this.restorationValue_ = PagesValue.ALL;
    }
    static get is() {
        return 'print-preview-pages-settings';
    }
    static get template() {
        return getTemplate$g();
    }
    static get properties() {
        return {
            disabled: Boolean,
            pageCount: {
                type: Number,
                observer: 'onPageCountChange_',
            },
            controlsDisabled_: {
                type: Boolean,
                computed: 'computeControlsDisabled_(disabled, hasError_)',
            },
            errorState_: {
                type: Number,
                reflectToAttribute: true,
                value: PagesInputErrorState.NO_ERROR,
            },
            hasError_: {
                type: Boolean,
                value: false,
            },
            inputString_: {
                type: String,
                value: '',
            },
            pagesToPrint_: {
                type: Array,
                value() {
                    return [];
                },
            },
            rangesToPrint_: {
                type: Array,
                computed: 'computeRangesToPrint_(pagesToPrint_)',
            },
            selection_: {
                type: Number,
                value: PagesValue.ALL,
                observer: 'onSelectionChange_',
            },
            /**
             * Mirroring the enum so that it can be used from HTML bindings.
             */
            pagesValueEnum_: {
                type: Object,
                value: PagesValue,
            },
        };
    }
    static get observers() {
        return [
            'updatePagesToPrint_(inputString_)',
            'onRangeChange_(errorState_, rangesToPrint_, settings.pages, ' +
                'settings.pagesPerSheet.value)',
        ];
    }
    ready() {
        super.ready();
        this.addEventListener('input-change', e => this.onInputChange_(e));
    }
    /**
     * Initialize |selectedValue| in connectedCallback() since this doesn't
     * observe settings.pages, because settings.pages is not sticky.
     */
    connectedCallback() {
        super.connectedCallback();
        this.selectedValue = PagesValue.ALL.toString();
    }
    /** The cr-input field element for InputMixin. */
    getInput() {
        return this.$.pageSettingsCustomInput;
    }
    setSelectedValue_(value) {
        this.selectedValue = value.toString();
        this.shadowRoot.querySelector('select').dispatchEvent(new CustomEvent('change', { bubbles: true, composed: true }));
    }
    onInputChange_(e) {
        if (this.inputString_ !== e.detail) {
            this.restoreLastInput_ = true;
        }
        this.inputString_ = e.detail;
    }
    onProcessSelectChange(value) {
        this.selection_ = parseInt(value, 10);
    }
    onCollapseChanged_() {
        if (this.selection_ === PagesValue.CUSTOM) {
            this.$.pageSettingsCustomInput.inputElement.focus();
        }
    }
    /**
     * @return Whether the controls should be disabled.
     */
    computeControlsDisabled_() {
        // Disable the input if other settings are responsible for the error state.
        return !this.hasError_ && this.disabled;
    }
    /**
     * Updates pages to print and error state based on the validity and
     * current value of the input.
     */
    updatePagesToPrint_() {
        if (this.selection_ !== PagesValue.CUSTOM) {
            this.errorState_ = PagesInputErrorState.NO_ERROR;
            if (!this.pageCount) {
                this.pagesToPrint_ = [];
                return;
            }
            const first = this.selection_ === PagesValue.EVENS ? 2 : 1;
            const step = this.selection_ === PagesValue.ALL ? 1 : 2;
            assert(first === 1 || this.pageCount !== 1);
            const length = Math.floor(1 + (this.pageCount - first) / step);
            this.pagesToPrint_ = Array.from({ length }, (_, i) => step * i + first);
            return;
        }
        else if (this.inputString_ === '') {
            this.errorState_ = PagesInputErrorState.EMPTY;
            return;
        }
        const pages = [];
        const added = {};
        const ranges = this.inputString_.split(/,|\u3001/);
        const maxPage = this.pageCount;
        for (const range of ranges) {
            if (range === '') {
                this.errorState_ = PagesInputErrorState.INVALID_SYNTAX;
                this.onRangeChange_();
                return;
            }
            const limits = range.split('-');
            if (limits.length > 2) {
                this.errorState_ = PagesInputErrorState.INVALID_SYNTAX;
                this.onRangeChange_();
                return;
            }
            let min = parseIntStrict(limits[0]);
            if ((limits[0].length > 0 && Number.isNaN(min)) || min < 1) {
                this.errorState_ = PagesInputErrorState.INVALID_SYNTAX;
                this.onRangeChange_();
                return;
            }
            if (limits.length === 1) {
                if (min > maxPage) {
                    this.errorState_ = PagesInputErrorState.OUT_OF_BOUNDS;
                    this.onRangeChange_();
                    return;
                }
                if (!added.hasOwnProperty(min)) {
                    pages.push(min);
                    added[min] = true;
                }
                continue;
            }
            let max = parseIntStrict(limits[1]);
            if (Number.isNaN(max) && limits[1].length > 0) {
                this.errorState_ = PagesInputErrorState.INVALID_SYNTAX;
                this.onRangeChange_();
                return;
            }
            if (Number.isNaN(min)) {
                min = 1;
            }
            if (Number.isNaN(max)) {
                max = maxPage;
            }
            if (min > max) {
                this.errorState_ = PagesInputErrorState.INVALID_SYNTAX;
                this.onRangeChange_();
                return;
            }
            if (max > maxPage) {
                this.errorState_ = PagesInputErrorState.OUT_OF_BOUNDS;
                this.onRangeChange_();
                return;
            }
            for (let i = min; i <= max; i++) {
                if (!added.hasOwnProperty(i)) {
                    pages.push(i);
                    added[i] = true;
                }
            }
        }
        // Page numbers should be sorted to match the order of the pages in the
        // rendered PDF.
        pages.sort((left, right) => left - right);
        this.errorState_ = PagesInputErrorState.NO_ERROR;
        this.pagesToPrint_ = pages;
    }
    computeRangesToPrint_() {
        if (!this.pagesToPrint_ || this.pagesToPrint_.length === 0 ||
            this.pagesToPrint_[0] === -1 ||
            this.pagesToPrint_.length === this.pageCount) {
            return [];
        }
        let from = this.pagesToPrint_[0];
        let to = this.pagesToPrint_[0];
        const ranges = [];
        for (const page of this.pagesToPrint_.slice(1)) {
            if (page === to + 1) {
                to = page;
                continue;
            }
            ranges.push({ from: from, to: to });
            from = page;
            to = page;
        }
        ranges.push({ from: from, to: to });
        return ranges;
    }
    /**
     * @return The final page numbers, reflecting N-up setting.
     *     Page numbers are 1 indexed, since these numbers are displayed to the
     *     user.
     */
    getNupPages_() {
        const pagesPerSheet = this.getSettingValue('pagesPerSheet');
        if (pagesPerSheet <= 1 || this.pagesToPrint_.length === 0) {
            return this.pagesToPrint_;
        }
        const numPages = Math.ceil(this.pagesToPrint_.length / pagesPerSheet);
        const nupPages = new Array(numPages);
        for (let i = 0; i < nupPages.length; i++) {
            nupPages[i] = i + 1;
        }
        return nupPages;
    }
    /**
     * Updates the model with pages and validity, and adds error styling if
     * needed.
     */
    onRangeChange_() {
        if (this.settings === undefined || this.pagesToPrint_ === undefined) {
            return;
        }
        if (this.errorState_ === PagesInputErrorState.EMPTY) {
            this.setSettingValid('pages', true);
            this.hasError_ = false;
            return;
        }
        if (this.errorState_ !== PagesInputErrorState.NO_ERROR) {
            this.hasError_ = true;
            this.setSettingValid('pages', false);
            return;
        }
        const nupPages = this.getNupPages_();
        const rangesChanged = !areRangesEqual(this.rangesToPrint_, this.getSettingValue('ranges'));
        if (rangesChanged ||
            nupPages.length !== this.getSettingValue('pages').length) {
            this.setSetting('pages', nupPages);
        }
        if (rangesChanged) {
            this.setSetting('ranges', this.rangesToPrint_);
        }
        this.setSettingValid('pages', true);
        this.hasError_ = false;
    }
    onSelectBlur_(event) {
        if (this.selection_ !== PagesValue.CUSTOM ||
            event.relatedTarget === this.$.pageSettingsCustomInput) {
            return;
        }
        this.onCustomInputBlur_();
    }
    onCustomInputBlur_() {
        this.resetAndUpdate();
        if (this.errorState_ === PagesInputErrorState.EMPTY) {
            // Update with all pages.
            this.shadowRoot.querySelector('cr-input').value =
                this.getAllPagesString_();
            this.inputString_ = this.getAllPagesString_();
            this.resetString();
            this.restoreLastInput_ = false;
        }
    }
    /**
     * @return Message to show as hint.
     */
    getHintMessage_() {
        if (this.errorState_ === PagesInputErrorState.NO_ERROR ||
            this.errorState_ === PagesInputErrorState.EMPTY) {
            return '';
        }
        let formattedMessage = '';
        if (this.errorState_ === PagesInputErrorState.INVALID_SYNTAX) {
            formattedMessage = loadTimeData.getStringF('pageRangeSyntaxInstruction', loadTimeData.getString('examplePageRangeText'));
        }
        else {
            formattedMessage = loadTimeData.getStringF('pageRangeLimitInstructionWithValue', this.pageCount);
        }
        return formattedMessage.replace(/<\/b>|<b>/g, '');
    }
    /**
     * @return Whether the document being printed has only one page.
     */
    isSinglePage_() {
        return this.pageCount === 1;
    }
    /**
     * @return Whether to hide the hint.
     */
    hintHidden_() {
        return this.errorState_ === PagesInputErrorState.NO_ERROR ||
            this.errorState_ === PagesInputErrorState.EMPTY;
    }
    /**
     * @return Whether to disable the custom input.
     */
    inputDisabled_() {
        return this.selection_ !== PagesValue.CUSTOM || this.controlsDisabled_;
    }
    /**
     * @return Whether to display the custom input.
     */
    shouldShowInput_() {
        return this.selection_ === PagesValue.CUSTOM;
    }
    /**
     * @return A string representing the full page range.
     */
    getAllPagesString_() {
        if (this.pageCount === 0) {
            return '';
        }
        return this.pageCount === 1 ? '1' : `1-${this.pageCount}`;
    }
    onSelectionChange_() {
        const customSelected = this.selection_ === PagesValue.CUSTOM;
        if ((customSelected && !this.restoreLastInput_) ||
            this.errorState_ !== PagesInputErrorState.NO_ERROR) {
            this.restoreLastInput_ = true;
            this.inputString_ = '';
            this.shadowRoot.querySelector('cr-input').value = '';
            this.resetString();
        }
        this.updatePagesToPrint_();
    }
    onPageCountChange_(current, previous) {
        // Remember non-custom page settings when the page count changes to 1, so
        // they can be re-applied if the page count exceeds 1 again.
        if (this.selection_ !== PagesValue.CUSTOM) {
            if (current === 1) {
                this.restorationValue_ = this.selection_;
                this.setSelectedValue_(PagesValue.ALL);
            }
            else if (previous === 1) {
                assert(this.restorationValue_ !== PagesValue.CUSTOM);
                this.setSelectedValue_(this.restorationValue_);
            }
        }
        // Reset the custom input to the new "all pages" value if it is equal to the
        // full page range and was either set automatically, or would become invalid
        // due to the page count change.
        const resetCustom = this.selection_ === PagesValue.CUSTOM &&
            !!this.pagesToPrint_ && this.pagesToPrint_.length === previous &&
            (current < previous || !this.restoreLastInput_);
        if (resetCustom) {
            this.shadowRoot.querySelector('cr-input').value =
                this.getAllPagesString_();
            this.inputString_ = this.getAllPagesString_();
            this.resetString();
        }
        else {
            this.updatePagesToPrint_();
        }
    }
}
customElements.define(PrintPreviewPagesSettingsElement.is, PrintPreviewPagesSettingsElement);

function getTemplate$f() {
    return html `<!--_html_template_start_--><style include="print-preview-shared">:host{margin-top:0!important}:host([is-pin-valid]) #pinValue{--cr-input-error-display:none}#pinValue{--cr-form-field-label-height:100%;cursor:default}:host #title{align-self:baseline}</style>
<print-preview-settings-section>
  <div slot="title"></div>
  <div slot="controls" class="checkbox">
    <cr-checkbox id="pin" on-change="onPinChange_" disabled="[[checkboxDisabled_]]" aria-labelledby="pin-label">
      <span id="pin-label">$i18n{optionPin}</span>
    </cr-checkbox>
  </div>
</print-preview-settings-section>
<iron-collapse opened="[[pinEnabled_]]" on-transitionend="onCollapseChanged_">
  <print-preview-settings-section id="customInputWrapper">
    <div slot="title"></div>
    <div slot="controls">
      <cr-input id="pinValue" type="text" pattern="[0-9]{4}" minlength="4" maxlength="4" data-timeout-delay="250" aria-labelledby="pin" placeholder="$i18n{pinPlaceholder}" spellcheck="false" disabled$="[[inputDisabled_(pinEnabled_, isPinValid, disabled)]]" error-message="[[getPinErrorMessage_(isPinValid)]]" required auto-validate>
      </cr-input>
    </div>
  </print-preview-settings-section>
</iron-collapse>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewPinSettingsElementBase = WebUiListenerMixin(InputMixin(SettingsMixin(I18nMixin(PolymerElement))));
class PrintPreviewPinSettingsElement extends PrintPreviewPinSettingsElementBase {
    static get is() {
        return 'print-preview-pin-settings';
    }
    static get template() {
        return getTemplate$f();
    }
    static get properties() {
        return {
            state: Number,
            disabled: Boolean,
            checkboxDisabled_: {
                type: Boolean,
                computed: 'computeCheckboxDisabled_(inputValid_, disabled, ' +
                    'settings.pin.setByPolicy)',
            },
            pinEnabled_: {
                type: Boolean,
                value: false,
            },
            inputString_: {
                type: String,
                value: '',
                observer: 'onInputChanged_',
            },
            isPinValid: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true,
            },
        };
    }
    static get observers() {
        return [
            'onSettingsChanged_(settings.pin.value, settings.pinValue.value)',
            'changePinValueSetting_(state)',
        ];
    }
    ready() {
        super.ready();
        this.addEventListener('input-change', e => this.onInputChange_(e));
    }
    /** @return The cr-input field element for InputMixin. */
    getInput() {
        return this.$.pinValue;
    }
    onInputChange_(e) {
        this.inputString_ = e.detail;
    }
    onCollapseChanged_() {
        if (this.pinEnabled_) {
            this.$.pinValue.focusInput();
        }
    }
    /**
     * @param inputValid Whether pin value is valid.
     * @param disabled Whether pin setting is disabled.
     * @param managed Whether pin setting is managed.
     * @return Whether pin checkbox should be disabled.
     */
    computeCheckboxDisabled_(inputValid, disabled, managed) {
        return managed || (inputValid && disabled);
    }
    /**
     * @return Whether to disable the pin value input.
     */
    inputDisabled_() {
        return !this.pinEnabled_ || (this.isPinValid && this.disabled);
    }
    /**
     * Updates the checkbox state when the setting has been initialized.
     */
    onSettingsChanged_() {
        const pinEnabled = this.getSetting('pin').value;
        this.$.pin.checked = pinEnabled;
        this.pinEnabled_ = pinEnabled;
        const pinValue = this.getSetting('pinValue');
        this.inputString_ = pinValue.value;
        this.resetString();
    }
    onPinChange_() {
        this.setSetting('pin', this.$.pin.checked);
        // We need to set validity of pinValue to true to return to READY state
        // after unchecking the pin and to check the validity again after checking
        // the pin.
        if (!this.$.pin.checked) {
            this.isPinValid = true;
        }
        else {
            this.changePinValueSetting_();
        }
    }
    onInputChanged_() {
        this.changePinValueSetting_();
    }
    /**
     * Updates pin value setting based on the current value of the pin value
     * input.
     */
    changePinValueSetting_() {
        if (this.settings === undefined) {
            return;
        }
        // Return early if pinValue is not available; unavailable settings should
        // not be set, but this function observes |state| which may change
        // regardless of pin availability.
        if (!this.settings.pinValue.available) {
            return;
        }
        // If the state is not READY and current pinValue is valid (so it's not the
        // cause of the error) we need to wait until the state will be READY again.
        // It's done because we don't permit multiple simultaneous validation errors
        // in Print Preview and we also don't want to set the value when sticky
        // settings may not yet have been set.
        if (this.state !== State.READY && this.settings.pinValue.valid) {
            return;
        }
        this.isPinValid = this.computeValid_();
        // We allow to save the empty string as sticky setting value to give users
        // the opportunity to unset their PIN in sticky settings.
        if ((this.isPinValid || this.inputString_ === '') &&
            this.inputString_ !== this.getSettingValue('pinValue')) {
            this.setSetting('pinValue', this.inputString_);
        }
    }
    /**
     * @return Whether input value represented by inputString_ is
     *     valid, so that it can be used to update the setting.
     */
    computeValid_() {
        // Make sure value updates first, in case inputString_ was updated by JS.
        this.$.pinValue.value = this.inputString_;
        this.$.pinValue.validate();
        return !this.$.pinValue.invalid;
    }
    getPinErrorMessage_() {
        return this.isPinValid ? '' : this.i18n('pinErrorMessage');
    }
}
customElements.define(PrintPreviewPinSettingsElement.is, PrintPreviewPinSettingsElement);

function getTemplate$e() {
    return html `<!--_html_template_start_--><style include="print-preview-shared md-select"></style>
<print-preview-settings-section>
  <span slot="title" id="scaling-label">$i18n{scalingLabel}</span>
  <div slot="controls">
    <select class="md-select" aria-labelledby="scaling-label" disabled$="[[dropdownDisabled_]]" value="{{selectedValue::change}}">
      <option value="[[ScalingValue.DEFAULT]]">
        $i18n{optionDefaultScaling}
      </option>
      <option value="[[ScalingValue.FIT_TO_PAGE]]" hidden$="[[!isPdf]]" disabled$="[[!isPdf]]">
        $i18n{optionFitToPage}
      </option>
      <option value="[[ScalingValue.FIT_TO_PAPER]]" hidden$="[[!isPdf]]" disabled$="[[!isPdf]]">
        $i18n{optionFitToPaper}
      </option>
      <option value="[[ScalingValue.CUSTOM]]">
        $i18n{optionCustomScaling}
      </option>
    </select>
  </div>
</print-preview-settings-section>
<iron-collapse opened="[[customSelected_]]" on-transitionend="onCollapseChanged_">
  <print-preview-number-settings-section max-value="200" min-value="10" default-value="100" disabled$="[[inputDisabled_(dropdownDisabled_, customSelected_)]]" current-value="{{currentValue_}}" input-valid="{{inputValid_}}" hint-message="$i18n{scalingInstruction}">
  </print-preview-number-settings-section>
</iron-collapse>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * Fit to page and fit to paper options will only be displayed for PDF
 * documents. If the custom option is selected, an additional input field will
 * appear to enter the custom scale factor.
 */
const PrintPreviewScalingSettingsElementBase = SettingsMixin(SelectMixin(PolymerElement));
class PrintPreviewScalingSettingsElement extends PrintPreviewScalingSettingsElementBase {
    constructor() {
        super(...arguments);
        this.lastValidScaling_ = '';
        /**
         * Whether the custom scaling setting has been set to true, but the custom
         * input has not yet been expanded. Used to determine whether changes in the
         * dropdown are due to user input or sticky settings.
         */
        this.customScalingSettingSet_ = false;
        /**
         * Whether the user has selected custom scaling in the dropdown, but the
         * custom input has not yet been expanded. Used to determine whether to
         * auto-focus the custom input.
         */
        this.userSelectedCustomScaling_ = false;
    }
    static get is() {
        return 'print-preview-scaling-settings';
    }
    static get template() {
        return getTemplate$e();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                observer: 'onDisabledChanged_',
            },
            isPdf: Boolean,
            currentValue_: {
                type: String,
                observer: 'onInputChanged_',
            },
            customSelected_: {
                type: Boolean,
                computed: 'computeCustomSelected_(settingKey_, ' +
                    'settings.scalingType.*, settings.scalingTypePdf.*)',
            },
            inputValid_: Boolean,
            dropdownDisabled_: {
                type: Boolean,
                value: false,
            },
            settingKey_: {
                type: String,
                computed: 'computeSettingKey_(isPdf)',
            },
            /** Mirroring the enum so that it can be used from HTML bindings. */
            ScalingValue: {
                type: Object,
                value: ScalingType,
            },
        };
    }
    static get observers() {
        return [
            'onScalingTypeSettingChanged_(settingKey_, settings.scalingType.value, ' +
                'settings.scalingTypePdf.value)',
            'onScalingSettingChanged_(settings.scaling.value)',
        ];
    }
    onProcessSelectChange(value) {
        const isCustom = value === ScalingType.CUSTOM.toString();
        if (isCustom && !this.customScalingSettingSet_) {
            this.userSelectedCustomScaling_ = true;
        }
        else {
            this.customScalingSettingSet_ = false;
        }
        const valueAsNumber = parseInt(value, 10);
        if (isCustom || value === ScalingType.DEFAULT.toString()) {
            this.setSetting('scalingType', valueAsNumber);
        }
        if (this.isPdf ||
            this.getSetting('scalingTypePdf').value === ScalingType.DEFAULT ||
            this.getSetting('scalingTypePdf').value === ScalingType.CUSTOM) {
            this.setSetting('scalingTypePdf', valueAsNumber);
        }
        if (isCustom) {
            this.setSetting('scaling', this.currentValue_);
        }
    }
    updateScalingToValid_() {
        if (!this.getSetting('scaling').valid) {
            this.currentValue_ = this.lastValidScaling_;
        }
        else {
            this.lastValidScaling_ = this.currentValue_;
        }
    }
    /**
     * Updates the input string when scaling setting is set.
     */
    onScalingSettingChanged_() {
        const value = this.getSetting('scaling').value;
        this.lastValidScaling_ = value;
        this.currentValue_ = value;
    }
    onScalingTypeSettingChanged_() {
        if (!this.settingKey_) {
            return;
        }
        const value = this.getSettingValue(this.settingKey_);
        if (value !== ScalingType.CUSTOM) {
            this.updateScalingToValid_();
        }
        else {
            this.customScalingSettingSet_ = true;
        }
        this.selectedValue = value.toString();
    }
    /**
     * Updates scaling settings based on the validity and current value of the
     * scaling input.
     */
    onInputChanged_() {
        this.setSettingValid('scaling', this.inputValid_);
        if (this.currentValue_ !== '' && this.inputValid_ &&
            this.currentValue_ !== this.getSettingValue('scaling')) {
            this.setSetting('scaling', this.currentValue_);
        }
    }
    onDisabledChanged_() {
        this.dropdownDisabled_ = this.disabled && this.inputValid_;
    }
    /**
     * @return Whether the input should be disabled.
     */
    inputDisabled_() {
        return !this.customSelected_ || this.dropdownDisabled_;
    }
    /**
     * @return Whether the custom scaling option is selected.
     */
    computeCustomSelected_() {
        return !!this.settingKey_ &&
            this.getSettingValue(this.settingKey_) === ScalingType.CUSTOM;
    }
    /**
     * @return The key of the appropriate scaling setting.
     */
    computeSettingKey_() {
        return this.isPdf ? 'scalingTypePdf' : 'scalingType';
    }
    onCollapseChanged_() {
        if (this.customSelected_ && this.userSelectedCustomScaling_) {
            this.shadowRoot.querySelector('print-preview-number-settings-section')
                .getInput()
                .focus();
        }
        this.customScalingSettingSet_ = false;
        this.userSelectedCustomScaling_ = false;
    }
}
customElements.define(PrintPreviewScalingSettingsElement.is, PrintPreviewScalingSettingsElement);

function getTemplate$d() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style cr-shared-style">:host{background-color:#fff;border-inline-start:var(--print-preview-settings-border);display:flex;flex-direction:column}@media (prefers-color-scheme:dark){:host{background-color:rgba(255,255,255,.04)}}#container{color:var(--cr-primary-text-color);flex:1;overflow:overlay}:host #destinationSettings{margin-top:12px}:host #cr-container-shadow-bottom,:host #cr-container-shadow-top{box-shadow:inset 0 5px 3px -3px rgba(0,0,0,.2)}.settings-section{display:block;margin-bottom:16px;margin-top:16px}</style>
<print-preview-header id="header" destination="[[destination]]" error="[[error]]" sheet-count="[[sheetCount_]]" state="[[state]]" settings="[[settings]]" managed="[[controlsManaged]]">
</print-preview-header>
<div id="container" show-bottom-shadow>
  <print-preview-destination-settings id="destinationSettings" dark="[[inDarkMode]]" destination="{{destination}}" destination-state="{{destinationState}}" error="{{error}}" first-load="[[firstLoad_]]" settings="[[settings]]" state="[[state]]" app-kiosk-mode="[[isInAppKioskMode_]]" disabled="[[controlsDisabled_]]" available class="settings-section">
  </print-preview-destination-settings>

  <print-preview-pin-settings state="[[state]]" settings="[[settings]]" disabled="[[controlsDisabled_]]" is-pin-valid="{{isPinValid_}}" hidden$="[[!settings.pin.available]]" class="settings-section">
  </print-preview-pin-settings>

  <print-preview-pages-settings settings="[[settings]]" page-count="[[pageCount]]" disabled="[[controlsDisabled_]]" hidden$="[[!settings.pages.available]]" class="settings-section">
  </print-preview-pages-settings>
  <print-preview-copies-settings settings="[[settings]]" capability="[[destination.capabilities.printer.copies]]" disabled="[[controlsDisabled_]]" hidden$="[[!settings.copies.available]]" class="settings-section">
  </print-preview-copies-settings>
  <print-preview-layout-settings settings="[[settings]]" disabled="[[controlsDisabled_]]" hidden$="[[!settings.layout.available]]" class="settings-section">
  </print-preview-layout-settings>
  <print-preview-color-settings settings="[[settings]]" disabled="[[controlsDisabled_]]" hidden$="[[!settings.color.available]]" class="settings-section">
  </print-preview-color-settings>
  <print-preview-more-settings settings-expanded-by-user="{{settingsExpandedByUser_}}" disabled="[[controlsDisabled_]]" hidden$="[[!shouldShowMoreSettings_]]">
  </print-preview-more-settings>
  <iron-collapse id="moreSettings" opened="[[shouldExpandSettings_(
          settingsExpandedByUser_, shouldShowMoreSettings_)]]">
    <print-preview-media-size-settings settings="[[settings]]" capability="[[destination.capabilities.printer.media_size]]" disabled="[[controlsDisabled_]]" hidden$="[[!settings.mediaSize.available]]" class="settings-section">
    </print-preview-media-size-settings>
    <print-preview-media-type-settings settings="[[settings]]" state="[[state]]" capability="[[destination.capabilities.printer.media_type]]" disabled="[[controlsDisabled_]]" hidden$="[[!settings.mediaType.available]]" class="settings-section">
    </print-preview-media-type-settings>
    <print-preview-pages-per-sheet-settings settings="[[settings]]" disabled="[[controlsDisabled_]]" hidden$="[[!settings.pagesPerSheet.available]]" class="settings-section">
    </print-preview-pages-per-sheet-settings>
    <print-preview-margins-settings settings="[[settings]]" state="[[state]]" disabled="[[controlsDisabled_]]" hidden$="[[!settings.margins.available]]" class="settings-section">
    </print-preview-margins-settings>
    <print-preview-dpi-settings settings="[[settings]]" capability="[[destination.capabilities.printer.dpi]]" disabled="[[controlsDisabled_]]" hidden$="[[!settings.dpi.available]]" class="settings-section">
    </print-preview-dpi-settings>
    <print-preview-scaling-settings settings="[[settings]]" disabled="[[controlsDisabled_]]" is-pdf="[[isPdf]]" hidden$="[[!settings.scaling.available]]" class="settings-section">
    </print-preview-scaling-settings>
    <print-preview-duplex-settings settings="[[settings]]" disabled="[[controlsDisabled_]]" dark="[[inDarkMode]]" hidden$="[[!settings.duplex.available]]" class="settings-section">
    </print-preview-duplex-settings>
    <print-preview-other-options-settings settings="[[settings]]" disabled="[[controlsDisabled_]]" hidden$="[[!settings.otherOptions.available]]" class="settings-section">
    </print-preview-other-options-settings>
    <print-preview-advanced-options-settings settings="[[settings]]" destination="[[destination]]" disabled="[[controlsDisabled_]]" hidden$="[[!settings.vendorItems.available]]" class="settings-section">
    </print-preview-advanced-options-settings>

  </iron-collapse>
</div>
<print-preview-button-strip destination="[[destination]]" state="[[state]]" first-load="[[firstLoad_]]" is-pin-valid="[[isPinValid_]]" sheet-count="[[sheetCount_]]" max-sheets="[[maxSheets]]" on-print-button-focused="onPrintButtonFocused_">
</print-preview-button-strip>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Number of settings sections to show when "More settings" is collapsed.
 */
const MAX_SECTIONS_TO_SHOW = 6;
const PrintPreviewSidebarElementBase = CrContainerShadowMixin(WebUiListenerMixin(SettingsMixin(DarkModeMixin(PolymerElement))));
class PrintPreviewSidebarElement extends PrintPreviewSidebarElementBase {
    static get is() {
        return 'print-preview-sidebar';
    }
    static get template() {
        return getTemplate$d();
    }
    static get properties() {
        return {
            controlsManaged: Boolean,
            destination: {
                type: Object,
                notify: true,
            },
            destinationState: {
                type: Number,
                notify: true,
            },
            error: {
                type: Number,
                notify: true,
            },
            isPdf: Boolean,
            pageCount: Number,
            state: {
                type: Number,
                observer: 'onStateChanged_',
            },
            controlsDisabled_: {
                type: Boolean,
                computed: 'computeControlsDisabled_(state)',
            },
            maxSheets: Number,
            sheetCount_: {
                type: Number,
                computed: 'computeSheetCount_(' +
                    'settings.pages.*, settings.duplex.*, settings.copies.*)',
            },
            firstLoad_: {
                type: Boolean,
                value: true,
            },
            isInAppKioskMode_: {
                type: Boolean,
                value: false,
            },
            settingsExpandedByUser_: {
                type: Boolean,
                value: false,
            },
            shouldShowMoreSettings_: {
                type: Boolean,
                computed: 'computeShouldShowMoreSettings_(settings.pages.available, ' +
                    'settings.copies.available, settings.layout.available, ' +
                    'settings.color.available, settings.mediaSize.available, ' +
                    'settings.dpi.available, settings.margins.available, ' +
                    'settings.pagesPerSheet.available, settings.scaling.available, ' +
                    'settings.duplex.available, settings.otherOptions.available, ' +
                    'settings.vendorItems.available)',
            },
            // 
            isPinValid_: {
                type: Boolean,
                value: true,
            },
            // 
        };
    }
    // 
    /**
     * @param defaultPrinter The system default printer ID.
     * @param serializedDestinationSelectionRulesStr String with rules
     *     for selecting the default destination.
     * @param pdfPrinterDisabled Whether the PDF printer is disabled.
     * @param isDriveMounted Whether Google Drive is mounted. Only used
          on Chrome OS.
     */
    init(appKioskMode, defaultPrinter, serializedDestinationSelectionRulesStr, pdfPrinterDisabled, isDriveMounted) {
        this.isInAppKioskMode_ = appKioskMode;
        pdfPrinterDisabled = this.isInAppKioskMode_ || pdfPrinterDisabled;
        // 'Save to Google Drive' is almost the same as PDF printing. The only
        // difference is the default location shown in the file picker when user
        // clicks 'Save'. Therefore, we should disable the 'Save to Google Drive'
        // destination if the user should be blocked from using PDF printing.
        const saveToDriveDisabled = pdfPrinterDisabled || !isDriveMounted;
        this.$.destinationSettings.init(defaultPrinter, pdfPrinterDisabled, saveToDriveDisabled, serializedDestinationSelectionRulesStr);
    }
    /**
     * @return Whether the controls should be disabled.
     */
    computeControlsDisabled_() {
        return this.state !== State.READY;
    }
    /**
     * @return The number of sheets that will be printed.
     */
    computeSheetCount_() {
        let sheets = this.getSettingValue('pages').length;
        if (this.getSettingValue('duplex')) {
            sheets = Math.ceil(sheets / 2);
        }
        return sheets * this.getSettingValue('copies');
    }
    /**
     * @return Whether to show the "More settings" link.
     */
    computeShouldShowMoreSettings_() {
        // Destination settings is always available. See if the total number of
        // available sections exceeds the maximum number to show.
        return [
            'pages',
            'copies',
            'layout',
            'color',
            'mediaSize',
            'margins',
            'color',
            'pagesPerSheet',
            'scaling',
            'dpi',
            'duplex',
            'otherOptions',
            'vendorItems',
        ].reduce((count, setting) => {
            return this.getSetting(setting).available ? count + 1 : count;
        }, 1) > MAX_SECTIONS_TO_SHOW;
    }
    /**
     * @return Whether the "more settings" collapse should be expanded.
     */
    shouldExpandSettings_() {
        if (this.settingsExpandedByUser_ === undefined ||
            this.shouldShowMoreSettings_ === undefined) {
            return false;
        }
        // Expand the settings if the user has requested them expanded or if more
        // settings is not displayed (i.e. less than 6 total settings available).
        return this.settingsExpandedByUser_ || !this.shouldShowMoreSettings_;
    }
    onPrintButtonFocused_() {
        this.firstLoad_ = false;
    }
    onStateChanged_() {
        if (this.state !== State.PRINTING) {
            return;
        }
        if (this.shouldShowMoreSettings_) {
            MetricsContext.printSettingsUi().record(this.settingsExpandedByUser_ ?
                PrintSettingsUiBucket.PRINT_WITH_SETTINGS_EXPANDED :
                PrintSettingsUiBucket.PRINT_WITH_SETTINGS_COLLAPSED);
        }
    }
    // 
    // 
    /**
     * Returns true if at least one non-PDF printer destination is shown in the
     * destination dropdown.
     */
    printerExistsInDisplayedDestinations() {
        return this.$.destinationSettings.printerExistsInDisplayedDestinations();
    }
}
customElements.define(PrintPreviewSidebarElement.is, PrintPreviewSidebarElement);

function getTemplate$c() {
    return html `<!--_html_template_start_--><style>:host{display:flex;height:100%;user-select:none}@media (prefers-color-scheme:dark){:host{background:var(--google-grey-900)}}print-preview-sidebar{flex:none;width:var(--print-preview-sidebar-width)}#preview-area-container{align-items:center;background-color:var(--preview-area-background-color);flex:1}</style>
<print-preview-state id="state" state="{{state}}" error="{{error_}}">
</print-preview-state>
<print-preview-model id="model" settings="{{settings}}" settings-managed="{{settingsManaged_}}" destination="[[destination_]]" document-settings="[[documentSettings_]]" margins="[[margins_]]" page-size="[[pageSize_]]" max-sheets="{{maxSheets_}}" on-preview-setting-changed="onPreviewSettingChanged_" on-sticky-setting-changed="onStickySettingChanged_" on-setting-valid-changed="onSettingValidChanged_">
</print-preview-model>
<print-preview-document-info id="documentInfo" document-settings="{{documentSettings_}}" margins="{{margins_}}" page-size="{{pageSize_}}">
</print-preview-document-info>
<div id="preview-area-container">
  <print-preview-preview-area id="previewArea" settings="[[settings]]" destination="[[destination_]]" error="{{error_}}" document-modifiable="[[documentSettings_.isModifiable]]" margins="[[margins_]]" page-size="[[pageSize_]]" state="[[state]]" measurement-system="[[measurementSystem_]]" preview-state="{{previewState_}}" on-preview-start="onPreviewStart_">
  </print-preview-preview-area>
</div>
<print-preview-sidebar id="sidebar" destination-state="{{destinationState_}}" controls-managed="[[controlsManaged_]]" destination="{{destination_}}" error="{{error_}}" is-pdf="[[!documentSettings_.isModifiable]]" page-count="[[documentSettings_.pageCount]]" settings="[[settings]]" state="[[state]]" max-sheets="[[maxSheets_]]" on-focus="onSidebarFocus_" on-print-requested="onPrintRequested_" on-cancel-requested="onCancelRequested_">
</print-preview-sidebar>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * cr-lazy-render is a simple variant of dom-if designed for lazy rendering
 * of elements that are accessed imperatively.
 * Usage:
 *   <cr-lazy-render id="menu">
 *     <template>
 *       <heavy-menu></heavy-menu>
 *     </template>
 *   </cr-lazy-render>
 *
 *   this.$.menu.get().show();
 */
class CrLazyRenderElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.child_ = null;
        this.instance_ = null;
    }
    static get is() {
        return 'cr-lazy-render';
    }
    static get template() {
        return html `<slot></slot>`;
    }
    /**
     * Stamp the template into the DOM tree synchronously
     * @return Child element which has been stamped into the DOM tree.
     */
    get() {
        if (!this.child_) {
            this.render_();
        }
        assert(this.child_);
        return this.child_;
    }
    /**
     * @return The element contained in the template, if it has
     *   already been stamped.
     */
    getIfExists() {
        return this.child_;
    }
    render_() {
        const template = (this.shadowRoot.querySelector('slot').assignedNodes({ flatten: true })
            .filter(n => n.nodeType === Node.ELEMENT_NODE)[0]);
        const TemplateClass = templatize(template, this, {
            mutableData: false,
            forwardHostProp: this._forwardHostPropV2,
        });
        const parentNode = this.parentNode;
        if (parentNode && !this.child_) {
            this.instance_ = new TemplateClass();
            this.child_ = this.instance_.root.firstElementChild;
            parentNode.insertBefore(this.instance_.root, this);
        }
    }
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _forwardHostPropV2(prop, value) {
        if (this.instance_) {
            this.instance_.forwardHostProp(prop, value);
        }
    }
}
customElements.define(CrLazyRenderElement.is, CrLazyRenderElement);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
`Polymer.IronFitBehavior` fits an element in another element using `max-height`
and `max-width`, and optionally centers it in the window or another element.

The element will only be sized and/or positioned if it has not already been
sized and/or positioned by CSS.

CSS properties            | Action
--------------------------|-------------------------------------------
`position` set            | Element is not centered horizontally or vertically
`top` or `bottom` set     | Element is not vertically centered
`left` or `right` set     | Element is not horizontally centered
`max-height` set          | Element respects `max-height`
`max-width` set           | Element respects `max-width`

`Polymer.IronFitBehavior` can position an element into another element using
`verticalAlign` and `horizontalAlign`. This will override the element's css
position.

    <div class="container">
      <iron-fit-impl vertical-align="top" horizontal-align="auto">
        Positioned into the container
      </iron-fit-impl>
    </div>

Use `noOverlap` to position the element around another element without
overlapping it.

    <div class="container">
      <iron-fit-impl no-overlap vertical-align="auto" horizontal-align="auto">
        Positioned around the container
      </iron-fit-impl>
    </div>

Use `horizontalOffset, verticalOffset` to offset the element from its
`positionTarget`; `Polymer.IronFitBehavior` will collapse these in order to
keep the element within `fitInto` boundaries, while preserving the element's
CSS margin values.

    <div class="container">
      <iron-fit-impl vertical-align="top" vertical-offset="20">
        With vertical offset
      </iron-fit-impl>
    </div>

@demo demo/index.html
@polymerBehavior
*/
const IronFitBehavior = {

  properties: {

    /**
     * The element that will receive a `max-height`/`width`. By default it is
     * the same as `this`, but it can be set to a child element. This is useful,
     * for example, for implementing a scrolling region inside the element.
     * @type {!Element}
     */
    sizingTarget: {
      type: Object,
      value: function() {
        return this;
      }
    },

    /**
     * The element to fit `this` into.
     */
    fitInto: {type: Object, value: window},

    /**
     * Will position the element around the positionTarget without overlapping
     * it.
     */
    noOverlap: {type: Boolean},

    /**
     * The element that should be used to position the element. If not set, it
     * will default to the parent node.
     * @type {!Element}
     */
    positionTarget: {type: Element},

    /**
     * The orientation against which to align the element horizontally
     * relative to the `positionTarget`. Possible values are "left", "right",
     * "center", "auto".
     */
    horizontalAlign: {type: String},

    /**
     * The orientation against which to align the element vertically
     * relative to the `positionTarget`. Possible values are "top", "bottom",
     * "middle", "auto".
     */
    verticalAlign: {type: String},

    /**
     * If true, it will use `horizontalAlign` and `verticalAlign` values as
     * preferred alignment and if there's not enough space, it will pick the
     * values which minimize the cropping.
     */
    dynamicAlign: {type: Boolean},

    /**
     * A pixel value that will be added to the position calculated for the
     * given `horizontalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `horizontalAlign`.
     *
     * If `horizontalAlign` is "left" or "center", this offset will increase or
     * decrease the distance to the left side of the screen: a negative offset
     * will move the dropdown to the left; a positive one, to the right.
     *
     * Conversely if `horizontalAlign` is "right", this offset will increase
     * or decrease the distance to the right side of the screen: a negative
     * offset will move the dropdown to the right; a positive one, to the left.
     */
    horizontalOffset: {type: Number, value: 0, notify: true},

    /**
     * A pixel value that will be added to the position calculated for the
     * given `verticalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `verticalAlign`.
     *
     * If `verticalAlign` is "top" or "middle", this offset will increase or
     * decrease the distance to the top side of the screen: a negative offset
     * will move the dropdown upwards; a positive one, downwards.
     *
     * Conversely if `verticalAlign` is "bottom", this offset will increase
     * or decrease the distance to the bottom side of the screen: a negative
     * offset will move the dropdown downwards; a positive one, upwards.
     */
    verticalOffset: {type: Number, value: 0, notify: true},

    /**
     * Set to true to auto-fit on attach.
     */
    autoFitOnAttach: {type: Boolean, value: false},

    /** @type {?Object} */
    _fitInfo: {type: Object}
  },

  get _fitWidth() {
    var fitWidth;
    if (this.fitInto === window) {
      fitWidth = this.fitInto.innerWidth;
    } else {
      fitWidth = this.fitInto.getBoundingClientRect().width;
    }
    return fitWidth;
  },

  get _fitHeight() {
    var fitHeight;
    if (this.fitInto === window) {
      fitHeight = this.fitInto.innerHeight;
    } else {
      fitHeight = this.fitInto.getBoundingClientRect().height;
    }
    return fitHeight;
  },

  get _fitLeft() {
    var fitLeft;
    if (this.fitInto === window) {
      fitLeft = 0;
    } else {
      fitLeft = this.fitInto.getBoundingClientRect().left;
    }
    return fitLeft;
  },

  get _fitTop() {
    var fitTop;
    if (this.fitInto === window) {
      fitTop = 0;
    } else {
      fitTop = this.fitInto.getBoundingClientRect().top;
    }
    return fitTop;
  },

  /**
   * The element that should be used to position the element,
   * if no position target is configured.
   */
  get _defaultPositionTarget() {
    var parent = dom(this).parentNode;

    if (parent && parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      parent = parent.host;
    }

    return parent;
  },

  /**
   * The horizontal align value, accounting for the RTL/LTR text direction.
   */
  get _localeHorizontalAlign() {
    if (this._isRTL) {
      // In RTL, "left" becomes "right".
      if (this.horizontalAlign === 'right') {
        return 'left';
      }
      if (this.horizontalAlign === 'left') {
        return 'right';
      }
    }
    return this.horizontalAlign;
  },

  /**
   * True if the element should be positioned instead of centered.
   * @private
   */
  get __shouldPosition() {
    return (this.horizontalAlign || this.verticalAlign) && this.positionTarget;
  },

  attached: function() {
    // Memoize this to avoid expensive calculations & relayouts.
    // Make sure we do it only once
    if (typeof this._isRTL === 'undefined') {
      this._isRTL = window.getComputedStyle(this).direction == 'rtl';
    }
    this.positionTarget = this.positionTarget || this._defaultPositionTarget;
    if (this.autoFitOnAttach) {
      if (window.getComputedStyle(this).display === 'none') {
        setTimeout(function() {
          this.fit();
        }.bind(this));
      } else {
        // NOTE: shadydom applies distribution asynchronously
        // for performance reasons webcomponents/shadydom#120
        // Flush to get correct layout info.
        window.ShadyDOM && ShadyDOM.flush();
        this.fit();
      }
    }
  },

  detached: function() {
    if (this.__deferredFit) {
      clearTimeout(this.__deferredFit);
      this.__deferredFit = null;
    }
  },

  /**
   * Positions and fits the element into the `fitInto` element.
   */
  fit: function() {
    this.position();
    this.constrain();
    this.center();
  },

  /**
   * Memoize information needed to position and size the target element.
   * @suppress {deprecated}
   */
  _discoverInfo: function() {
    if (this._fitInfo) {
      return;
    }
    var target = window.getComputedStyle(this);
    var sizer = window.getComputedStyle(this.sizingTarget);

    this._fitInfo = {
      inlineStyle: {
        top: this.style.top || '',
        left: this.style.left || '',
        position: this.style.position || ''
      },
      sizerInlineStyle: {
        maxWidth: this.sizingTarget.style.maxWidth || '',
        maxHeight: this.sizingTarget.style.maxHeight || '',
        boxSizing: this.sizingTarget.style.boxSizing || ''
      },
      positionedBy: {
        vertically: target.top !== 'auto' ?
            'top' :
            (target.bottom !== 'auto' ? 'bottom' : null),
        horizontally: target.left !== 'auto' ?
            'left' :
            (target.right !== 'auto' ? 'right' : null)
      },
      sizedBy: {
        height: sizer.maxHeight !== 'none',
        width: sizer.maxWidth !== 'none',
        minWidth: parseInt(sizer.minWidth, 10) || 0,
        minHeight: parseInt(sizer.minHeight, 10) || 0
      },
      margin: {
        top: parseInt(target.marginTop, 10) || 0,
        right: parseInt(target.marginRight, 10) || 0,
        bottom: parseInt(target.marginBottom, 10) || 0,
        left: parseInt(target.marginLeft, 10) || 0
      }
    };
  },

  /**
   * Resets the target element's position and size constraints, and clear
   * the memoized data.
   */
  resetFit: function() {
    var info = this._fitInfo || {};
    for (var property in info.sizerInlineStyle) {
      this.sizingTarget.style[property] = info.sizerInlineStyle[property];
    }
    for (var property in info.inlineStyle) {
      this.style[property] = info.inlineStyle[property];
    }

    this._fitInfo = null;
  },

  /**
   * Equivalent to calling `resetFit()` and `fit()`. Useful to call this after
   * the element or the `fitInto` element has been resized, or if any of the
   * positioning properties (e.g. `horizontalAlign, verticalAlign`) is updated.
   * It preserves the scroll position of the sizingTarget.
   */
  refit: function() {
    var scrollLeft = this.sizingTarget.scrollLeft;
    var scrollTop = this.sizingTarget.scrollTop;
    this.resetFit();
    this.fit();
    this.sizingTarget.scrollLeft = scrollLeft;
    this.sizingTarget.scrollTop = scrollTop;
  },

  /**
   * Positions the element according to `horizontalAlign, verticalAlign`.
   */
  position: function() {
    if (!this.__shouldPosition) {
      // needs to be centered, and it is done after constrain.
      return;
    }
    this._discoverInfo();

    this.style.position = 'fixed';
    // Need border-box for margin/padding.
    this.sizingTarget.style.boxSizing = 'border-box';
    // Set to 0, 0 in order to discover any offset caused by parent stacking
    // contexts.
    this.style.left = '0px';
    this.style.top = '0px';

    var rect = this.getBoundingClientRect();
    var positionRect = this.__getNormalizedRect(this.positionTarget);
    var fitRect = this.__getNormalizedRect(this.fitInto);

    var margin = this._fitInfo.margin;

    // Consider the margin as part of the size for position calculations.
    var size = {
      width: rect.width + margin.left + margin.right,
      height: rect.height + margin.top + margin.bottom
    };

    var position = this.__getPosition(
        this._localeHorizontalAlign,
        this.verticalAlign,
        size,
        rect,
        positionRect,
        fitRect);

    var left = position.left + margin.left;
    var top = position.top + margin.top;

    // We first limit right/bottom within fitInto respecting the margin,
    // then use those values to limit top/left.
    var right = Math.min(fitRect.right - margin.right, left + rect.width);
    var bottom = Math.min(fitRect.bottom - margin.bottom, top + rect.height);

    // Keep left/top within fitInto respecting the margin.
    left = Math.max(
        fitRect.left + margin.left,
        Math.min(left, right - this._fitInfo.sizedBy.minWidth));
    top = Math.max(
        fitRect.top + margin.top,
        Math.min(top, bottom - this._fitInfo.sizedBy.minHeight));

    // Use right/bottom to set maxWidth/maxHeight, and respect
    // minWidth/minHeight.
    this.sizingTarget.style.maxWidth =
        Math.max(right - left, this._fitInfo.sizedBy.minWidth) + 'px';
    this.sizingTarget.style.maxHeight =
        Math.max(bottom - top, this._fitInfo.sizedBy.minHeight) + 'px';

    // Remove the offset caused by any stacking context.
    this.style.left = (left - rect.left) + 'px';
    this.style.top = (top - rect.top) + 'px';
  },

  /**
   * Constrains the size of the element to `fitInto` by setting `max-height`
   * and/or `max-width`.
   */
  constrain: function() {
    if (this.__shouldPosition) {
      return;
    }
    this._discoverInfo();

    var info = this._fitInfo;
    // position at (0px, 0px) if not already positioned, so we can measure the
    // natural size.
    if (!info.positionedBy.vertically) {
      this.style.position = 'fixed';
      this.style.top = '0px';
    }
    if (!info.positionedBy.horizontally) {
      this.style.position = 'fixed';
      this.style.left = '0px';
    }

    // need border-box for margin/padding
    this.sizingTarget.style.boxSizing = 'border-box';
    // constrain the width and height if not already set
    var rect = this.getBoundingClientRect();
    if (!info.sizedBy.height) {
      this.__sizeDimension(
          rect, info.positionedBy.vertically, 'top', 'bottom', 'Height');
    }
    if (!info.sizedBy.width) {
      this.__sizeDimension(
          rect, info.positionedBy.horizontally, 'left', 'right', 'Width');
    }
  },

  /**
   * @protected
   * @deprecated
   */
  _sizeDimension: function(rect, positionedBy, start, end, extent) {
    this.__sizeDimension(rect, positionedBy, start, end, extent);
  },

  /**
   * @private
   */
  __sizeDimension: function(rect, positionedBy, start, end, extent) {
    var info = this._fitInfo;
    var fitRect = this.__getNormalizedRect(this.fitInto);
    var max = extent === 'Width' ? fitRect.width : fitRect.height;
    var flip = (positionedBy === end);
    var offset = flip ? max - rect[end] : rect[start];
    var margin = info.margin[flip ? start : end];
    var offsetExtent = 'offset' + extent;
    var sizingOffset = this[offsetExtent] - this.sizingTarget[offsetExtent];
    this.sizingTarget.style['max' + extent] =
        (max - margin - offset - sizingOffset) + 'px';
  },

  /**
   * Centers horizontally and vertically if not already positioned. This also
   * sets `position:fixed`.
   */
  center: function() {
    if (this.__shouldPosition) {
      return;
    }
    this._discoverInfo();

    var positionedBy = this._fitInfo.positionedBy;
    if (positionedBy.vertically && positionedBy.horizontally) {
      // Already positioned.
      return;
    }
    // Need position:fixed to center
    this.style.position = 'fixed';
    // Take into account the offset caused by parents that create stacking
    // contexts (e.g. with transform: translate3d). Translate to 0,0 and
    // measure the bounding rect.
    if (!positionedBy.vertically) {
      this.style.top = '0px';
    }
    if (!positionedBy.horizontally) {
      this.style.left = '0px';
    }
    // It will take in consideration margins and transforms
    var rect = this.getBoundingClientRect();
    var fitRect = this.__getNormalizedRect(this.fitInto);
    if (!positionedBy.vertically) {
      var top = fitRect.top - rect.top + (fitRect.height - rect.height) / 2;
      this.style.top = top + 'px';
    }
    if (!positionedBy.horizontally) {
      var left = fitRect.left - rect.left + (fitRect.width - rect.width) / 2;
      this.style.left = left + 'px';
    }
  },

  __getNormalizedRect: function(target) {
    if (target === document.documentElement || target === window) {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        right: window.innerWidth,
        bottom: window.innerHeight
      };
    }
    return target.getBoundingClientRect();
  },

  __getOffscreenArea: function(position, size, fitRect) {
    var verticalCrop = Math.min(0, position.top) +
        Math.min(0, fitRect.bottom - (position.top + size.height));
    var horizontalCrop = Math.min(0, position.left) +
        Math.min(0, fitRect.right - (position.left + size.width));
    return Math.abs(verticalCrop) * size.width +
        Math.abs(horizontalCrop) * size.height;
  },


  __getPosition: function(
      hAlign, vAlign, size, sizeNoMargins, positionRect, fitRect) {
    // All the possible configurations.
    // Ordered as top-left, top-right, bottom-left, bottom-right.
    var positions = [
      {
        verticalAlign: 'top',
        horizontalAlign: 'left',
        top: positionRect.top + this.verticalOffset,
        left: positionRect.left + this.horizontalOffset
      },
      {
        verticalAlign: 'top',
        horizontalAlign: 'right',
        top: positionRect.top + this.verticalOffset,
        left: positionRect.right - size.width - this.horizontalOffset
      },
      {
        verticalAlign: 'bottom',
        horizontalAlign: 'left',
        top: positionRect.bottom - size.height - this.verticalOffset,
        left: positionRect.left + this.horizontalOffset
      },
      {
        verticalAlign: 'bottom',
        horizontalAlign: 'right',
        top: positionRect.bottom - size.height - this.verticalOffset,
        left: positionRect.right - size.width - this.horizontalOffset
      }
    ];

    if (this.noOverlap) {
      // Duplicate.
      for (var i = 0, l = positions.length; i < l; i++) {
        var copy = {};
        for (var key in positions[i]) {
          copy[key] = positions[i][key];
        }
        positions.push(copy);
      }
      // Horizontal overlap only.
      positions[0].top = positions[1].top += positionRect.height;
      positions[2].top = positions[3].top -= positionRect.height;
      // Vertical overlap only.
      positions[4].left = positions[6].left += positionRect.width;
      positions[5].left = positions[7].left -= positionRect.width;
    }

    // Consider auto as null for coding convenience.
    vAlign = vAlign === 'auto' ? null : vAlign;
    hAlign = hAlign === 'auto' ? null : hAlign;

    if (!hAlign || hAlign === 'center') {
      positions.push({
        verticalAlign: 'top',
        horizontalAlign: 'center',
        top: positionRect.top + this.verticalOffset +
            (this.noOverlap ? positionRect.height : 0),
        left: positionRect.left - sizeNoMargins.width / 2 +
            positionRect.width / 2 + this.horizontalOffset
      });
      positions.push({
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        top: positionRect.bottom - size.height - this.verticalOffset -
            (this.noOverlap ? positionRect.height : 0),
        left: positionRect.left - sizeNoMargins.width / 2 +
            positionRect.width / 2 + this.horizontalOffset
      });
    }

    if (!vAlign || vAlign === 'middle') {
      positions.push({
        verticalAlign: 'middle',
        horizontalAlign: 'left',
        top: positionRect.top - sizeNoMargins.height / 2 +
            positionRect.height / 2 + this.verticalOffset,
        left: positionRect.left + this.horizontalOffset +
            (this.noOverlap ? positionRect.width : 0)
      });
      positions.push({
        verticalAlign: 'middle',
        horizontalAlign: 'right',
        top: positionRect.top - sizeNoMargins.height / 2 +
            positionRect.height / 2 + this.verticalOffset,
        left: positionRect.right - size.width - this.horizontalOffset -
            (this.noOverlap ? positionRect.width : 0)
      });
    }

    if (vAlign === 'middle' && hAlign === 'center') {
      positions.push({
        verticalAlign: 'middle',
        horizontalAlign: 'center',
        top: positionRect.top - sizeNoMargins.height / 2 +
            positionRect.height / 2 + this.verticalOffset,
        left: positionRect.left - sizeNoMargins.width / 2 +
            positionRect.width / 2 + this.horizontalOffset
      });
    }

    var position;
    for (var i = 0; i < positions.length; i++) {
      var candidate = positions[i];
      var vAlignOk = candidate.verticalAlign === vAlign;
      var hAlignOk = candidate.horizontalAlign === hAlign;

      // If both vAlign and hAlign are defined, return exact match.
      // For dynamicAlign and noOverlap we'll have more than one candidate, so
      // we'll have to check the offscreenArea to make the best choice.
      if (!this.dynamicAlign && !this.noOverlap && vAlignOk && hAlignOk) {
        position = candidate;
        break;
      }

      // Align is ok if alignment preferences are respected. If no preferences,
      // it is considered ok.
      var alignOk = (!vAlign || vAlignOk) && (!hAlign || hAlignOk);

      // Filter out elements that don't match the alignment (if defined).
      // With dynamicAlign, we need to consider all the positions to find the
      // one that minimizes the cropped area.
      if (!this.dynamicAlign && !alignOk) {
        continue;
      }

      candidate.offscreenArea =
          this.__getOffscreenArea(candidate, size, fitRect);
      // If not cropped and respects the align requirements, keep it.
      // This allows to prefer positions overlapping horizontally over the
      // ones overlapping vertically.
      if (candidate.offscreenArea === 0 && alignOk) {
        position = candidate;
        break;
      }
      position = position || candidate;
      var diff = candidate.offscreenArea - position.offscreenArea;
      // Check which crops less. If it crops equally, check if at least one
      // align setting is ok.
      if (diff < 0 || (diff === 0 && (vAlignOk || hAlignOk))) {
        position = candidate;
      }
    }

    return position;
  }

};

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

var p = Element.prototype;
var matches = p.matches || p.matchesSelector || p.mozMatchesSelector ||
    p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;

const IronFocusablesHelper = {

  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function(node) {
    var result = [];
    // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.
    var needsSortByTabIndex = this._collectTabbableNodes(node, result);
    if (needsSortByTabIndex) {
      return this._sortByTabIndex(result);
    }
    return result;
  },

  /**
   * Returns if a element is focusable.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isFocusable: function(element) {
    // From http://stackoverflow.com/a/1600194/4228703:
    // There isn't a definite list, it's up to the browser. The only
    // standard we have is DOM Level 2 HTML
    // https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
    // only elements that have a focus() method are HTMLInputElement,
    // HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
    // notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
    // tests with tabbables in different browsers
    // http://allyjs.io/data-tables/focusable.html

    // Elements that cannot be focused if they have [disabled] attribute.
    if (matches.call(element, 'input, select, textarea, button, object')) {
      return matches.call(element, ':not([disabled])');
    }
    // Elements that can be focused even if they have [disabled] attribute.
    return matches.call(
        element, 'a[href], area[href], iframe, [tabindex], [contentEditable]');
  },

  /**
   * Returns if a element is tabbable. To be tabbable, a element must be
   * focusable, visible, and with a tabindex !== -1.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isTabbable: function(element) {
    return this.isFocusable(element) &&
        matches.call(element, ':not([tabindex="-1"])') &&
        this._isVisible(element);
  },

  /**
   * Returns the normalized element tabindex. If not focusable, returns -1.
   * It checks for the attribute "tabindex" instead of the element property
   * `tabIndex` since browsers assign different values to it.
   * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
   * @param {!HTMLElement} element
   * @return {!number}
   * @private
   */
  _normalizedTabIndex: function(element) {
    if (this.isFocusable(element)) {
      var tabIndex = element.getAttribute('tabindex') || 0;
      return Number(tabIndex);
    }
    return -1;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function(node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !this._isVisible(node)) {
      return false;
    }
    var element = /** @type {!HTMLElement} */ (node);
    var tabIndex = this._normalizedTabIndex(element);
    var needsSort = tabIndex > 0;
    if (tabIndex >= 0) {
      result.push(element);
    }

    // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.
    var children;
    if (element.localName === 'content' || element.localName === 'slot') {
      children = dom(element).getDistributedNodes();
    } else {
      // Use shadow root if possible, will check for distributed nodes.
      children = dom(element.root || element).children;
    }
    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }
    return needsSort;
  },

  /**
   * Returns false if the element has `visibility: hidden` or `display: none`
   * @param {!HTMLElement} element
   * @return {boolean}
   * @private
   */
  _isVisible: function(element) {
    // Check inline style first to save a re-flow. If looks good, check also
    // computed style.
    var style = element.style;
    if (style.visibility !== 'hidden' && style.display !== 'none') {
      style = window.getComputedStyle(element);
      return (style.visibility !== 'hidden' && style.display !== 'none');
    }
    return false;
  },

  /**
   * Sorts an array of tabbable elements by tabindex. Returns a new array.
   * @param {!Array<!HTMLElement>} tabbables
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _sortByTabIndex: function(tabbables) {
    // Implement a merge sort as Array.prototype.sort does a non-stable sort
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    var len = tabbables.length;
    if (len < 2) {
      return tabbables;
    }
    var pivot = Math.ceil(len / 2);
    var left = this._sortByTabIndex(tabbables.slice(0, pivot));
    var right = this._sortByTabIndex(tabbables.slice(pivot));
    return this._mergeSortByTabIndex(left, right);
  },

  /**
   * Merge sort iterator, merges the two arrays into one, sorted by tab index.
   * @param {!Array<!HTMLElement>} left
   * @param {!Array<!HTMLElement>} right
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _mergeSortByTabIndex: function(left, right) {
    var result = [];
    while ((left.length > 0) && (right.length > 0)) {
      if (this._hasLowerTabOrder(left[0], right[0])) {
        result.push(right.shift());
      } else {
        result.push(left.shift());
      }
    }

    return result.concat(left, right);
  },

  /**
   * Returns if element `a` has lower tab order compared to element `b`
   * (both elements are assumed to be focusable and tabbable).
   * Elements with tabindex = 0 have lower tab order compared to elements
   * with tabindex > 0.
   * If both have same tabindex, it returns false.
   * @param {!HTMLElement} a
   * @param {!HTMLElement} b
   * @return {boolean}
   * @private
   */
  _hasLowerTabOrder: function(a, b) {
    // Normalize tabIndexes
    // e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
    var ati = Math.max(a.tabIndex, 0);
    var bti = Math.max(b.tabIndex, 0);
    return (ati === 0 || bti === 0) ? bti > ati : ati > bti;
  }
};

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/*
`iron-overlay-backdrop` is a backdrop used by `Polymer.IronOverlayBehavior`. It
should be a singleton.

### Styling

The following custom properties and mixins are available for styling.

Custom property | Description | Default
-------------------------------------------|------------------------|---------
`--iron-overlay-backdrop-background-color` | Backdrop background color | #000
`--iron-overlay-backdrop-opacity`          | Backdrop opacity | 0.6
*/
Polymer({
  _template: html`
    <style>
      :host {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--iron-overlay-backdrop-background-color, #000);
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      :host(.opened) {
        opacity: var(--iron-overlay-backdrop-opacity, 0.6);
        pointer-events: auto;
      }
    </style>

    <slot></slot>
`,

  is: 'iron-overlay-backdrop',

  properties: {

    /**
     * Returns true if the backdrop is opened.
     */
    opened: {
      reflectToAttribute: true,
      type: Boolean,
      value: false,
      observer: '_openedChanged',
    }

  },

  listeners: {
    'transitionend': '_onTransitionend',
  },

  created: function() {
    // Used to cancel previous requestAnimationFrame calls when opened changes.
    this.__openedRaf = null;
  },

  attached: function() {
    this.opened && this._openedChanged(this.opened);
  },

  /**
   * Appends the backdrop to document body if needed.
   */
  prepare: function() {
    if (this.opened && !this.parentNode) {
      dom(document.body).appendChild(this);
    }
  },

  /**
   * Shows the backdrop.
   */
  open: function() {
    this.opened = true;
  },

  /**
   * Hides the backdrop.
   */
  close: function() {
    this.opened = false;
  },

  /**
   * Removes the backdrop from document body if needed.
   */
  complete: function() {
    if (!this.opened && this.parentNode === document.body) {
      dom(this.parentNode).removeChild(this);
    }
  },

  _onTransitionend: function(event) {
    if (event && event.target === this) {
      this.complete();
    }
  },

  /**
   * @param {boolean} opened
   * @private
   */
  _openedChanged: function(opened) {
    if (opened) {
      // Auto-attach.
      this.prepare();
    } else {
      // Animation might be disabled via the mixin or opacity custom property.
      // If it is disabled in other ways, it's up to the user to call complete.
      var cs = window.getComputedStyle(this);
      if (cs.transitionDuration === '0s' || cs.opacity == 0) {
        this.complete();
      }
    }

    if (!this.isAttached) {
      return;
    }

    // Always cancel previous requestAnimationFrame.
    if (this.__openedRaf) {
      window.cancelAnimationFrame(this.__openedRaf);
      this.__openedRaf = null;
    }
    // Force relayout to ensure proper transitions.
    this.scrollTop = this.scrollTop;
    this.__openedRaf = window.requestAnimationFrame(function() {
      this.__openedRaf = null;
      this.toggleClass('opened', this.opened);
    }.bind(this));
  }
});

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * @struct
 * @constructor
 * @private
 */
const IronOverlayManagerClass = function() {
  /**
   * Used to keep track of the opened overlays.
   * @private {!Array<!Element>}
   */
  this._overlays = [];

  /**
   * iframes have a default z-index of 100,
   * so this default should be at least that.
   * @private {number}
   */
  this._minimumZ = 101;

  /**
   * Memoized backdrop element.
   * @private {Element|null}
   */
  this._backdropElement = null;

  // Enable document-wide tap recognizer.
  // NOTE: Use useCapture=true to avoid accidentally prevention of the closing
  // of an overlay via event.stopPropagation(). The only way to prevent
  // closing of an overlay should be through its APIs.
  // NOTE: enable tap on <html> to workaround Polymer/polymer#4459
  // Pass no-op function because MSEdge 15 doesn't handle null as 2nd argument
  // https://github.com/Microsoft/ChakraCore/issues/3863
  gestures.add(document.documentElement, 'tap', function() {});
  document.addEventListener('tap', this._onCaptureClick.bind(this), true);
  document.addEventListener('focus', this._onCaptureFocus.bind(this), true);
  document.addEventListener('keydown', this._onCaptureKeyDown.bind(this), true);
};

IronOverlayManagerClass.prototype = {

  constructor: IronOverlayManagerClass,

  /**
   * The shared backdrop element.
   * @return {!Element} backdropElement
   */
  get backdropElement() {
    if (!this._backdropElement) {
      this._backdropElement = document.createElement('iron-overlay-backdrop');
    }
    return this._backdropElement;
  },

  /**
   * The deepest active element.
   * @return {!Element} activeElement the active element
   */
  get deepActiveElement() {
    var active = document.activeElement;
    // document.activeElement can be null
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
    // In IE 11, it can also be an object when operating in iframes.
    // In these cases, default it to document.body.
    if (!active || active instanceof Element === false) {
      active = document.body;
    }
    while (active.root && dom(active.root).activeElement) {
      active = dom(active.root).activeElement;
    }
    return active;
  },

  /**
   * Brings the overlay at the specified index to the front.
   * @param {number} i
   * @private
   */
  _bringOverlayAtIndexToFront: function(i) {
    var overlay = this._overlays[i];
    if (!overlay) {
      return;
    }
    var lastI = this._overlays.length - 1;
    var currentOverlay = this._overlays[lastI];
    // Ensure always-on-top overlay stays on top.
    if (currentOverlay &&
        this._shouldBeBehindOverlay(overlay, currentOverlay)) {
      lastI--;
    }
    // If already the top element, return.
    if (i >= lastI) {
      return;
    }
    // Update z-index to be on top.
    var minimumZ = Math.max(this.currentOverlayZ(), this._minimumZ);
    if (this._getZ(overlay) <= minimumZ) {
      this._applyOverlayZ(overlay, minimumZ);
    }

    // Shift other overlays behind the new on top.
    while (i < lastI) {
      this._overlays[i] = this._overlays[i + 1];
      i++;
    }
    this._overlays[lastI] = overlay;
  },

  /**
   * Adds the overlay and updates its z-index if it's opened, or removes it if
   * it's closed. Also updates the backdrop z-index.
   * @param {!Element} overlay
   */
  addOrRemoveOverlay: function(overlay) {
    if (overlay.opened) {
      this.addOverlay(overlay);
    } else {
      this.removeOverlay(overlay);
    }
  },

  /**
   * Tracks overlays for z-index and focus management.
   * Ensures the last added overlay with always-on-top remains on top.
   * @param {!Element} overlay
   */
  addOverlay: function(overlay) {
    var i = this._overlays.indexOf(overlay);
    if (i >= 0) {
      this._bringOverlayAtIndexToFront(i);
      this.trackBackdrop();
      return;
    }
    var insertionIndex = this._overlays.length;
    var currentOverlay = this._overlays[insertionIndex - 1];
    var minimumZ = Math.max(this._getZ(currentOverlay), this._minimumZ);
    var newZ = this._getZ(overlay);

    // Ensure always-on-top overlay stays on top.
    if (currentOverlay &&
        this._shouldBeBehindOverlay(overlay, currentOverlay)) {
      // This bumps the z-index of +2.
      this._applyOverlayZ(currentOverlay, minimumZ);
      insertionIndex--;
      // Update minimumZ to match previous overlay's z-index.
      var previousOverlay = this._overlays[insertionIndex - 1];
      minimumZ = Math.max(this._getZ(previousOverlay), this._minimumZ);
    }

    // Update z-index and insert overlay.
    if (newZ <= minimumZ) {
      this._applyOverlayZ(overlay, minimumZ);
    }
    this._overlays.splice(insertionIndex, 0, overlay);

    this.trackBackdrop();
  },

  /**
   * @param {!Element} overlay
   */
  removeOverlay: function(overlay) {
    var i = this._overlays.indexOf(overlay);
    if (i === -1) {
      return;
    }
    this._overlays.splice(i, 1);

    this.trackBackdrop();
  },

  /**
   * Returns the current overlay.
   * @return {!Element|undefined}
   */
  currentOverlay: function() {
    var i = this._overlays.length - 1;
    return this._overlays[i];
  },

  /**
   * Returns the current overlay z-index.
   * @return {number}
   */
  currentOverlayZ: function() {
    return this._getZ(this.currentOverlay());
  },

  /**
   * Ensures that the minimum z-index of new overlays is at least `minimumZ`.
   * This does not effect the z-index of any existing overlays.
   * @param {number} minimumZ
   */
  ensureMinimumZ: function(minimumZ) {
    this._minimumZ = Math.max(this._minimumZ, minimumZ);
  },

  focusOverlay: function() {
    var current = /** @type {?} */ (this.currentOverlay());
    if (current) {
      current._applyFocus();
    }
  },

  /**
   * Updates the backdrop z-index.
   */
  trackBackdrop: function() {
    var overlay = this._overlayWithBackdrop();
    // Avoid creating the backdrop if there is no overlay with backdrop.
    if (!overlay && !this._backdropElement) {
      return;
    }
    this.backdropElement.style.zIndex = this._getZ(overlay) - 1;
    this.backdropElement.opened = !!overlay;
    // Property observers are not fired until element is attached
    // in Polymer 2.x, so we ensure element is attached if needed.
    // https://github.com/Polymer/polymer/polymer_bundled.min.js4526
    this.backdropElement.prepare();
  },

  /**
   * @return {!Array<!Element>}
   */
  getBackdrops: function() {
    var backdrops = [];
    for (var i = 0; i < this._overlays.length; i++) {
      if (this._overlays[i].withBackdrop) {
        backdrops.push(this._overlays[i]);
      }
    }
    return backdrops;
  },

  /**
   * Returns the z-index for the backdrop.
   * @return {number}
   */
  backdropZ: function() {
    return this._getZ(this._overlayWithBackdrop()) - 1;
  },

  /**
   * Returns the top opened overlay that has a backdrop.
   * @return {!Element|undefined}
   * @private
   */
  _overlayWithBackdrop: function() {
    for (var i = this._overlays.length - 1; i >= 0; i--) {
      if (this._overlays[i].withBackdrop) {
        return this._overlays[i];
      }
    }
  },

  /**
   * Calculates the minimum z-index for the overlay.
   * @param {Element=} overlay
   * @private
   */
  _getZ: function(overlay) {
    var z = this._minimumZ;
    if (overlay) {
      var z1 = Number(
          overlay.style.zIndex || window.getComputedStyle(overlay).zIndex);
      // Check if is a number
      // Number.isNaN not supported in IE 10+
      if (z1 === z1) {
        z = z1;
      }
    }
    return z;
  },

  /**
   * @param {!Element} element
   * @param {number|string} z
   * @private
   */
  _setZ: function(element, z) {
    element.style.zIndex = z;
  },

  /**
   * @param {!Element} overlay
   * @param {number} aboveZ
   * @private
   */
  _applyOverlayZ: function(overlay, aboveZ) {
    this._setZ(overlay, aboveZ + 2);
  },

  /**
   * Returns the deepest overlay in the path.
   * @param {!Array<!Element>=} path
   * @return {!Element|undefined}
   * @suppress {missingProperties}
   * @private
   */
  _overlayInPath: function(path) {
    path = path || [];
    for (var i = 0; i < path.length; i++) {
      if (path[i]._manager === this) {
        return path[i];
      }
    }
  },

  /**
   * Ensures the click event is delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureClick: function(event) {
    var i = this._overlays.length - 1;
    if (i === -1)
      return;
    var path = /** @type {!Array<!EventTarget>} */ (dom(event).path);
    var overlay;
    // Check if clicked outside of overlay.
    while ((overlay = /** @type {?} */ (this._overlays[i])) &&
           this._overlayInPath(path) !== overlay) {
      overlay._onCaptureClick(event);
      if (overlay.allowClickThrough) {
        i--;
      } else {
        break;
      }
    }
  },

  /**
   * Ensures the focus event is delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureFocus: function(event) {
    var overlay = /** @type {?} */ (this.currentOverlay());
    if (overlay) {
      overlay._onCaptureFocus(event);
    }
  },

  /**
   * Ensures TAB and ESC keyboard events are delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureKeyDown: function(event) {
    var overlay = /** @type {?} */ (this.currentOverlay());
    if (overlay) {
      if (IronA11yKeysBehavior.keyboardEventMatchesKeys(event, 'esc')) {
        overlay._onCaptureEsc(event);
      } else if (IronA11yKeysBehavior.keyboardEventMatchesKeys(event, 'tab')) {
        overlay._onCaptureTab(event);
      }
    }
  },

  /**
   * Returns if the overlay1 should be behind overlay2.
   * @param {!Element} overlay1
   * @param {!Element} overlay2
   * @return {boolean}
   * @suppress {missingProperties}
   * @private
   */
  _shouldBeBehindOverlay: function(overlay1, overlay2) {
    return !overlay1.alwaysOnTop && overlay2.alwaysOnTop;
  }
};

const IronOverlayManager = new IronOverlayManagerClass();

/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
/**
 * Used to calculate the scroll direction during touch events.
 * @type {!Object}
 */
var lastTouchPosition = {pageX: 0, pageY: 0};
/**
 * Used to avoid computing event.path and filter scrollable nodes (better perf).
 * @type {?EventTarget}
 */
var lastRootTarget = null;
/**
 * @type {!Array<!Node>}
 */
var lastScrollableNodes = [];
/**
 * @type {!Array<string>}
 */
var scrollEvents = [
  // Modern `wheel` event for mouse wheel scrolling:
  'wheel',
  // Older, non-standard `mousewheel` event for some FF:
  'mousewheel',
  // IE:
  'DOMMouseScroll',
  // Touch enabled devices
  'touchstart',
  'touchmove'
];
// must be defined for modulizer
var _boundScrollHandler;
var currentLockingElement;

/**
 * Push an element onto the current scroll lock stack. The most recently
 * pushed element and its children will be considered scrollable. All
 * other elements will not be scrollable.
 *
 * Scroll locking is implemented as a stack so that cases such as
 * dropdowns within dropdowns are handled well.
 *
 * @param {!HTMLElement} element The element that should lock scroll.
 */
function pushScrollLock(element) {
  // Prevent pushing the same element twice
  if (_lockingElements.indexOf(element) >= 0) {
    return;
  }

  if (_lockingElements.length === 0) {
    _lockScrollInteractions();
  }

  _lockingElements.push(element);
  currentLockingElement = _lockingElements[_lockingElements.length - 1];
}

/**
 * Remove an element from the scroll lock stack. The element being
 * removed does not need to be the most recently pushed element. However,
 * the scroll lock constraints only change when the most recently pushed
 * element is removed.
 *
 * @param {!HTMLElement} element The element to remove from the scroll
 * lock stack.
 */
function removeScrollLock(element) {
  var index = _lockingElements.indexOf(element);

  if (index === -1) {
    return;
  }

  _lockingElements.splice(index, 1);
  currentLockingElement = _lockingElements[_lockingElements.length - 1];

  if (_lockingElements.length === 0) {
    _unlockScrollInteractions();
  }
}

const _lockingElements = [];

function _scrollInteractionHandler(event) {
  // Avoid canceling an event with cancelable=false, e.g. scrolling is in
  // progress and cannot be interrupted.
  if (event.cancelable && _shouldPreventScrolling(event)) {
    event.preventDefault();
  }
  // If event has targetTouches (touch event), update last touch position.
  if (event.targetTouches) {
    var touch = event.targetTouches[0];
    lastTouchPosition.pageX = touch.pageX;
    lastTouchPosition.pageY = touch.pageY;
  }
}

function _lockScrollInteractions() {
  _boundScrollHandler =
      _boundScrollHandler || _scrollInteractionHandler.bind(undefined);
  for (var i = 0, l = scrollEvents.length; i < l; i++) {
    // NOTE: browsers that don't support objects as third arg will
    // interpret it as boolean, hence useCapture = true in this case.
    document.addEventListener(
        scrollEvents[i], _boundScrollHandler, {capture: true, passive: false});
  }
}

function _unlockScrollInteractions() {
  for (var i = 0, l = scrollEvents.length; i < l; i++) {
    // NOTE: browsers that don't support objects as third arg will
    // interpret it as boolean, hence useCapture = true in this case.
    document.removeEventListener(
        scrollEvents[i], _boundScrollHandler, {capture: true, passive: false});
  }
}

/**
 * Returns true if the event causes scroll outside the current locking
 * element, e.g. pointer/keyboard interactions, or scroll "leaking"
 * outside the locking element when it is already at its scroll boundaries.
 * @param {!Event} event
 * @return {boolean}
 * @private
 */
function _shouldPreventScrolling(event) {
  // Update if root target changed. For touch events, ensure we don't
  // update during touchmove.
  var target = dom(event).rootTarget;
  if (event.type !== 'touchmove' && lastRootTarget !== target) {
    lastRootTarget = target;
    lastScrollableNodes = _getScrollableNodes(dom(event).path);
  }

  // Prevent event if no scrollable nodes.
  if (!lastScrollableNodes.length) {
    return true;
  }
  // Don't prevent touchstart event inside the locking element when it has
  // scrollable nodes.
  if (event.type === 'touchstart') {
    return false;
  }
  // Get deltaX/Y.
  var info = _getScrollInfo(event);
  // Prevent if there is no child that can scroll.
  return !_getScrollingNode(lastScrollableNodes, info.deltaX, info.deltaY);
}

/**
 * Returns an array of scrollable nodes up to the current locking element,
 * which is included too if scrollable.
 * @param {!Array<!Node>} nodes
 * @return {!Array<!Node>} scrollables
 * @private
 */
function _getScrollableNodes(nodes) {
  var scrollables = [];
  var lockingIndex = nodes.indexOf(currentLockingElement);
  // Loop from root target to locking element (included).
  for (var i = 0; i <= lockingIndex; i++) {
    // Skip non-Element nodes.
    if (nodes[i].nodeType !== Node.ELEMENT_NODE) {
      continue;
    }
    var node = /** @type {!Element} */ (nodes[i]);
    // Check inline style before checking computed style.
    var style = node.style;
    if (style.overflow !== 'scroll' && style.overflow !== 'auto') {
      style = window.getComputedStyle(node);
    }
    if (style.overflow === 'scroll' || style.overflow === 'auto') {
      scrollables.push(node);
    }
  }
  return scrollables;
}

/**
 * Returns the node that is scrolling. If there is no scrolling,
 * returns undefined.
 * @param {!Array<!Node>} nodes
 * @param {number} deltaX Scroll delta on the x-axis
 * @param {number} deltaY Scroll delta on the y-axis
 * @return {!Node|undefined}
 * @private
 */
function _getScrollingNode(nodes, deltaX, deltaY) {
  // No scroll.
  if (!deltaX && !deltaY) {
    return;
  }
  // Check only one axis according to where there is more scroll.
  // Prefer vertical to horizontal.
  var verticalScroll = Math.abs(deltaY) >= Math.abs(deltaX);
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    var canScroll = false;
    if (verticalScroll) {
      // delta < 0 is scroll up, delta > 0 is scroll down.
      canScroll = deltaY < 0 ?
          node.scrollTop > 0 :
          node.scrollTop < node.scrollHeight - node.clientHeight;
    } else {
      // delta < 0 is scroll left, delta > 0 is scroll right.
      canScroll = deltaX < 0 ?
          node.scrollLeft > 0 :
          node.scrollLeft < node.scrollWidth - node.clientWidth;
    }
    if (canScroll) {
      return node;
    }
  }
}

/**
 * Returns scroll `deltaX` and `deltaY`.
 * @param {!Event} event The scroll event
 * @return {{deltaX: number, deltaY: number}} Object containing the
 * x-axis scroll delta (positive: scroll right, negative: scroll left,
 * 0: no scroll), and the y-axis scroll delta (positive: scroll down,
 * negative: scroll up, 0: no scroll).
 * @private
 */
function _getScrollInfo(event) {
  var info = {deltaX: event.deltaX, deltaY: event.deltaY};
  // Already available.
  if ('deltaX' in event) ;
  // Safari has scroll info in `wheelDeltaX/Y`.
  else if ('wheelDeltaX' in event && 'wheelDeltaY' in event) {
    info.deltaX = -event.wheelDeltaX;
    info.deltaY = -event.wheelDeltaY;
  }
  // IE10 has only vertical scroll info in `wheelDelta`.
  else if ('wheelDelta' in event) {
    info.deltaX = 0;
    info.deltaY = -event.wheelDelta;
  }
  // Firefox has scroll info in `detail` and `axis`.
  else if ('axis' in event) {
    info.deltaX = event.axis === 1 ? event.detail : 0;
    info.deltaY = event.axis === 2 ? event.detail : 0;
  }
  // On mobile devices, calculate scroll direction.
  else if (event.targetTouches) {
    var touch = event.targetTouches[0];
    // Touch moves from right to left => scrolling goes right.
    info.deltaX = lastTouchPosition.pageX - touch.pageX;
    // Touch moves from down to up => scrolling goes down.
    info.deltaY = lastTouchPosition.pageY - touch.pageY;
  }
  return info;
}

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/** @polymerBehavior */
const IronOverlayBehaviorImpl = {

  properties: {

    /**
     * True if the overlay is currently displayed.
     */
    opened:
        {observer: '_openedChanged', type: Boolean, value: false, notify: true},

    /**
     * True if the overlay was canceled when it was last closed.
     */
    canceled: {
      observer: '_canceledChanged',
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Set to true to display a backdrop behind the overlay. It traps the focus
     * within the light DOM of the overlay.
     */
    withBackdrop: {
      observer: '_withBackdropChanged',
      type: Boolean,
    },

    /**
     * Set to true to disable auto-focusing the overlay or child nodes with
     * the `autofocus` attribute` when the overlay is opened.
     */
    noAutoFocus: {
      type: Boolean,
      value: false,
    },

    /**
     * Set to true to disable canceling the overlay with the ESC key.
     */
    noCancelOnEscKey: {
      type: Boolean,
      value: false,
    },

    /**
     * Set to true to disable canceling the overlay by clicking outside it.
     */
    noCancelOnOutsideClick: {
      type: Boolean,
      value: false,
    },

    /**
     * Contains the reason(s) this overlay was last closed (see
     * `iron-overlay-closed`). `IronOverlayBehavior` provides the `canceled`
     * reason; implementers of the behavior can provide other reasons in
     * addition to `canceled`.
     */
    closingReason: {
      // was a getter before, but needs to be a property so other
      // behaviors can override this.
      type: Object,
    },

    /**
     * Set to true to enable restoring of focus when overlay is closed.
     */
    restoreFocusOnClose: {
      type: Boolean,
      value: false,
    },

    /**
     * Set to true to allow clicks to go through overlays.
     * When the user clicks outside this overlay, the click may
     * close the overlay below.
     */
    allowClickThrough: {
      type: Boolean,
    },

    /**
     * Set to true to keep overlay always on top.
     */
    alwaysOnTop: {
      type: Boolean,
    },

    /**
     * Determines which action to perform when scroll outside an opened overlay
     * happens. Possible values: lock - blocks scrolling from happening, refit -
     * computes the new position on the overlay cancel - causes the overlay to
     * close
     */
    scrollAction: {
      type: String,
    },

    /**
     * Shortcut to access to the overlay manager.
     * @private
     * @type {!IronOverlayManagerClass}
     */
    _manager: {
      type: Object,
      value: IronOverlayManager,
    },

    /**
     * The node being focused.
     * @type {?Node}
     */
    _focusedChild: {
      type: Object,
    }

  },

  listeners: {'iron-resize': '_onIronResize'},

  observers: ['__updateScrollObservers(isAttached, opened, scrollAction)'],

  /**
   * The backdrop element.
   * @return {!Element}
   */
  get backdropElement() {
    return this._manager.backdropElement;
  },

  /**
   * Returns the node to give focus to.
   * @return {!Node}
   */
  get _focusNode() {
    return this._focusedChild || dom(this).querySelector('[autofocus]') || this;
  },

  /**
   * Array of nodes that can receive focus (overlay included), ordered by
   * `tabindex`. This is used to retrieve which is the first and last focusable
   * nodes in order to wrap the focus for overlays `with-backdrop`.
   *
   * If you know what is your content (specifically the first and last focusable
   * children), you can override this method to return only `[firstFocusable,
   * lastFocusable];`
   * @return {!Array<!Node>}
   * @protected
   */
  get _focusableNodes() {
    return IronFocusablesHelper.getTabbableNodes(this);
  },

  /**
   * @return {void}
   */
  ready: function() {
    // Used to skip calls to notifyResize and refit while the overlay is
    // animating.
    this.__isAnimating = false;
    // with-backdrop needs tabindex to be set in order to trap the focus.
    // If it is not set, IronOverlayBehavior will set it, and remove it if
    // with-backdrop = false.
    this.__shouldRemoveTabIndex = false;
    // Used for wrapping the focus on TAB / Shift+TAB.
    this.__firstFocusableNode = this.__lastFocusableNode = null;
    // Used by to keep track of the RAF callbacks.
    this.__rafs = {};
    // Focused node before overlay gets opened. Can be restored on close.
    this.__restoreFocusNode = null;
    // Scroll info to be restored.
    this.__scrollTop = this.__scrollLeft = null;
    this.__onCaptureScroll = this.__onCaptureScroll.bind(this);
    // Root nodes hosting the overlay, used to listen for scroll events on them.
    this.__rootNodes = null;
    this._ensureSetup();
  },

  attached: function() {
    // Call _openedChanged here so that position can be computed correctly.
    if (this.opened) {
      this._openedChanged(this.opened);
    }
    this._observer = dom(this).observeNodes(this._onNodesChange);
  },

  detached: function() {
    dom(this).unobserveNodes(this._observer);
    this._observer = null;
    for (var cb in this.__rafs) {
      if (this.__rafs[cb] !== null) {
        cancelAnimationFrame(this.__rafs[cb]);
      }
    }
    this.__rafs = {};
    this._manager.removeOverlay(this);

    // We got detached while animating, ensure we show/hide the overlay
    // and fire iron-overlay-opened/closed event!
    if (this.__isAnimating) {
      if (this.opened) {
        this._finishRenderOpened();
      } else {
        // Restore the focus if necessary.
        this._applyFocus();
        this._finishRenderClosed();
      }
    }
  },

  /**
   * Toggle the opened state of the overlay.
   */
  toggle: function() {
    this._setCanceled(false);
    this.opened = !this.opened;
  },

  /**
   * Open the overlay.
   */
  open: function() {
    this._setCanceled(false);
    this.opened = true;
  },

  /**
   * Close the overlay.
   */
  close: function() {
    this._setCanceled(false);
    this.opened = false;
  },

  /**
   * Cancels the overlay.
   * @param {Event=} event The original event
   */
  cancel: function(event) {
    var cancelEvent =
        this.fire('iron-overlay-canceled', event, {cancelable: true});
    if (cancelEvent.defaultPrevented) {
      return;
    }

    this._setCanceled(true);
    this.opened = false;
  },

  /**
   * Invalidates the cached tabbable nodes. To be called when any of the
   * focusable content changes (e.g. a button is disabled).
   */
  invalidateTabbables: function() {
    this.__firstFocusableNode = this.__lastFocusableNode = null;
  },

  _ensureSetup: function() {
    if (this._overlaySetup) {
      return;
    }
    this._overlaySetup = true;
    this.style.outline = 'none';
    this.style.display = 'none';
  },

  /**
   * Called when `opened` changes.
   * @param {boolean=} opened
   * @protected
   */
  _openedChanged: function(opened) {
    if (opened) {
      this.removeAttribute('aria-hidden');
    } else {
      this.setAttribute('aria-hidden', 'true');
    }

    // Defer any animation-related code on attached
    // (_openedChanged gets called again on attached).
    if (!this.isAttached) {
      return;
    }

    this.__isAnimating = true;

    // Deraf for non-blocking rendering.
    this.__deraf('__openedChanged', this.__openedChanged);
  },

  _canceledChanged: function() {
    this.closingReason = this.closingReason || {};
    this.closingReason.canceled = this.canceled;
  },

  _withBackdropChanged: function() {
    // If tabindex is already set, no need to override it.
    if (this.withBackdrop && !this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '-1');
      this.__shouldRemoveTabIndex = true;
    } else if (this.__shouldRemoveTabIndex) {
      this.removeAttribute('tabindex');
      this.__shouldRemoveTabIndex = false;
    }
    if (this.opened && this.isAttached) {
      this._manager.trackBackdrop();
    }
  },

  /**
   * tasks which must occur before opening; e.g. making the element visible.
   * @protected
   */
  _prepareRenderOpened: function() {
    // Store focused node.
    this.__restoreFocusNode = this._manager.deepActiveElement;

    // Needed to calculate the size of the overlay so that transitions on its
    // size will have the correct starting points.
    this._preparePositioning();
    this.refit();
    this._finishPositioning();

    // Safari will apply the focus to the autofocus element when displayed
    // for the first time, so we make sure to return the focus where it was.
    if (this.noAutoFocus && document.activeElement === this._focusNode) {
      this._focusNode.blur();
      this.__restoreFocusNode.focus();
    }
  },

  /**
   * Tasks which cause the overlay to actually open; typically play an
   * animation.
   * @protected
   */
  _renderOpened: function() {
    this._finishRenderOpened();
  },

  /**
   * Tasks which cause the overlay to actually close; typically play an
   * animation.
   * @protected
   */
  _renderClosed: function() {
    this._finishRenderClosed();
  },

  /**
   * Tasks to be performed at the end of open action. Will fire
   * `iron-overlay-opened`.
   * @protected
   */
  _finishRenderOpened: function() {
    this.notifyResize();
    this.__isAnimating = false;

    this.fire('iron-overlay-opened');
  },

  /**
   * Tasks to be performed at the end of close action. Will fire
   * `iron-overlay-closed`.
   * @protected
   */
  _finishRenderClosed: function() {
    // Hide the overlay.
    this.style.display = 'none';
    // Reset z-index only at the end of the animation.
    this.style.zIndex = '';
    this.notifyResize();
    this.__isAnimating = false;
    this.fire('iron-overlay-closed', this.closingReason);
  },

  _preparePositioning: function() {
    this.style.transition = this.style.webkitTransition = 'none';
    this.style.transform = this.style.webkitTransform = 'none';
    this.style.display = '';
  },

  _finishPositioning: function() {
    // First, make it invisible & reactivate animations.
    this.style.display = 'none';
    // Force reflow before re-enabling animations so that they don't start.
    // Set scrollTop to itself so that Closure Compiler doesn't remove this.
    this.scrollTop = this.scrollTop;
    this.style.transition = this.style.webkitTransition = '';
    this.style.transform = this.style.webkitTransform = '';
    // Now that animations are enabled, make it visible again
    this.style.display = '';
    // Force reflow, so that following animations are properly started.
    // Set scrollTop to itself so that Closure Compiler doesn't remove this.
    this.scrollTop = this.scrollTop;
  },

  /**
   * Applies focus according to the opened state.
   * @protected
   */
  _applyFocus: function() {
    if (this.opened) {
      if (!this.noAutoFocus) {
        this._focusNode.focus();
      }
    } else {
      // Restore focus.
      if (this.restoreFocusOnClose && this.__restoreFocusNode) {
        // If the activeElement is `<body>` or inside the overlay,
        // we are allowed to restore the focus. In all the other
        // cases focus might have been moved elsewhere by another
        // component or by an user interaction (e.g. click on a
        // button outside the overlay).
        var activeElement = this._manager.deepActiveElement;
        if (activeElement === document.body ||
            dom(this).deepContains(activeElement)) {
          this.__restoreFocusNode.focus();
        }
      }
      this.__restoreFocusNode = null;
      this._focusNode.blur();
      this._focusedChild = null;
    }
  },

  /**
   * Cancels (closes) the overlay. Call when click happens outside the overlay.
   * @param {!Event} event
   * @protected
   */
  _onCaptureClick: function(event) {
    if (!this.noCancelOnOutsideClick) {
      this.cancel(event);
    }
  },

  /**
   * Keeps track of the focused child. If withBackdrop, traps focus within
   * overlay.
   * @param {!Event} event
   * @protected
   */
  _onCaptureFocus: function(event) {
    if (!this.withBackdrop) {
      return;
    }
    var path = dom(event).path;
    if (path.indexOf(this) === -1) {
      event.stopPropagation();
      this._applyFocus();
    } else {
      this._focusedChild = path[0];
    }
  },

  /**
   * Handles the ESC key event and cancels (closes) the overlay.
   * @param {!Event} event
   * @protected
   */
  _onCaptureEsc: function(event) {
    if (!this.noCancelOnEscKey) {
      this.cancel(event);
    }
  },

  /**
   * Handles TAB key events to track focus changes.
   * Will wrap focus for overlays withBackdrop.
   * @param {!Event} event
   * @protected
   */
  _onCaptureTab: function(event) {
    if (!this.withBackdrop) {
      return;
    }
    this.__ensureFirstLastFocusables();
    // TAB wraps from last to first focusable.
    // Shift + TAB wraps from first to last focusable.
    var shift = event.shiftKey;
    var nodeToCheck =
        shift ? this.__firstFocusableNode : this.__lastFocusableNode;
    var nodeToSet =
        shift ? this.__lastFocusableNode : this.__firstFocusableNode;
    var shouldWrap = false;
    if (nodeToCheck === nodeToSet) {
      // If nodeToCheck is the same as nodeToSet, it means we have an overlay
      // with 0 or 1 focusables; in either case we still need to trap the
      // focus within the overlay.
      shouldWrap = true;
    } else {
      // In dom=shadow, the manager will receive focus changes on the main
      // root but not the ones within other shadow roots, so we can't rely on
      // _focusedChild, but we should check the deepest active element.
      var focusedNode = this._manager.deepActiveElement;
      // If the active element is not the nodeToCheck but the overlay itself,
      // it means the focus is about to go outside the overlay, hence we
      // should prevent that (e.g. user opens the overlay and hit Shift+TAB).
      shouldWrap = (focusedNode === nodeToCheck || focusedNode === this);
    }

    if (shouldWrap) {
      // When the overlay contains the last focusable element of the document
      // and it's already focused, pressing TAB would move the focus outside
      // the document (e.g. to the browser search bar). Similarly, when the
      // overlay contains the first focusable element of the document and it's
      // already focused, pressing Shift+TAB would move the focus outside the
      // document (e.g. to the browser search bar).
      // In both cases, we would not receive a focus event, but only a blur.
      // In order to achieve focus wrapping, we prevent this TAB event and
      // force the focus. This will also prevent the focus to temporarily move
      // outside the overlay, which might cause scrolling.
      event.preventDefault();
      this._focusedChild = nodeToSet;
      this._applyFocus();
    }
  },

  /**
   * Refits if the overlay is opened and not animating.
   * @protected
   */
  _onIronResize: function() {
    if (this.opened && !this.__isAnimating) {
      this.__deraf('refit', this.refit);
    }
  },

  /**
   * Will call notifyResize if overlay is opened.
   * Can be overridden in order to avoid multiple observers on the same node.
   * @protected
   */
  _onNodesChange: function() {
    if (this.opened && !this.__isAnimating) {
      // It might have added focusable nodes, so invalidate cached values.
      this.invalidateTabbables();
      this.notifyResize();
    }
  },

  /**
   * Updates the references to the first and last focusable nodes.
   * @private
   */
  __ensureFirstLastFocusables: function() {
    var focusableNodes = this._focusableNodes;
    this.__firstFocusableNode = focusableNodes[0];
    this.__lastFocusableNode = focusableNodes[focusableNodes.length - 1];
  },

  /**
   * Tasks executed when opened changes: prepare for the opening, move the
   * focus, update the manager, render opened/closed.
   * @private
   */
  __openedChanged: function() {
    if (this.opened) {
      // Make overlay visible, then add it to the manager.
      this._prepareRenderOpened();
      this._manager.addOverlay(this);
      // Move the focus to the child node with [autofocus].
      this._applyFocus();

      this._renderOpened();
    } else {
      // Remove overlay, then restore the focus before actually closing.
      this._manager.removeOverlay(this);
      this._applyFocus();

      this._renderClosed();
    }
  },

  /**
   * Debounces the execution of a callback to the next animation frame.
   * @param {!string} jobname
   * @param {!Function} callback Always bound to `this`
   * @private
   */
  __deraf: function(jobname, callback) {
    var rafs = this.__rafs;
    if (rafs[jobname] !== null) {
      cancelAnimationFrame(rafs[jobname]);
    }
    rafs[jobname] = requestAnimationFrame(function nextAnimationFrame() {
      rafs[jobname] = null;
      callback.call(this);
    }.bind(this));
  },

  /**
   * @param {boolean} isAttached
   * @param {boolean} opened
   * @param {string=} scrollAction
   * @private
   */
  __updateScrollObservers: function(isAttached, opened, scrollAction) {
    if (!isAttached || !opened || !this.__isValidScrollAction(scrollAction)) {
      removeScrollLock(this);
      this.__removeScrollListeners();
    } else {
      if (scrollAction === 'lock') {
        this.__saveScrollPosition();
        pushScrollLock(this);
      }
      this.__addScrollListeners();
    }
  },

  /**
   * @private
   */
  __addScrollListeners: function() {
    if (!this.__rootNodes) {
      this.__rootNodes = [];
      // Listen for scroll events in all shadowRoots hosting this overlay only
      // when in native ShadowDOM.
      if (useShadow) {
        var node = this;
        while (node) {
          if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && node.host) {
            this.__rootNodes.push(node);
          }
          node = node.host || node.assignedSlot || node.parentNode;
        }
      }
      this.__rootNodes.push(document);
    }
    this.__rootNodes.forEach(function(el) {
      el.addEventListener('scroll', this.__onCaptureScroll, {
        capture: true,
        passive: true,
      });
    }, this);
  },

  /**
   * @private
   */
  __removeScrollListeners: function() {
    if (this.__rootNodes) {
      this.__rootNodes.forEach(function(el) {
        el.removeEventListener('scroll', this.__onCaptureScroll, {
          capture: true,
          passive: true,
        });
      }, this);
    }
    if (!this.isAttached) {
      this.__rootNodes = null;
    }
  },

  /**
   * @param {string=} scrollAction
   * @return {boolean}
   * @private
   */
  __isValidScrollAction: function(scrollAction) {
    return scrollAction === 'lock' || scrollAction === 'refit' ||
        scrollAction === 'cancel';
  },

  /**
   * @private
   */
  __onCaptureScroll: function(event) {
    if (this.__isAnimating) {
      return;
    }
    // Check if scroll outside the overlay.
    if (dom(event).path.indexOf(this) >= 0) {
      return;
    }
    switch (this.scrollAction) {
      case 'lock':
        // NOTE: scrolling might happen if a scroll event is not cancellable, or
        // if user pressed keys that cause scrolling (they're not prevented in
        // order not to break a11y features like navigate with arrow keys).
        this.__restoreScrollPosition();
        break;
      case 'refit':
        this.__deraf('refit', this.refit);
        break;
      case 'cancel':
        this.cancel(event);
        break;
    }
  },

  /**
   * Memoizes the scroll position of the outside scrolling element.
   * @private
   */
  __saveScrollPosition: function() {
    if (document.scrollingElement) {
      this.__scrollTop = document.scrollingElement.scrollTop;
      this.__scrollLeft = document.scrollingElement.scrollLeft;
    } else {
      // Since we don't know if is the body or html, get max.
      this.__scrollTop =
          Math.max(document.documentElement.scrollTop, document.body.scrollTop);
      this.__scrollLeft = Math.max(
          document.documentElement.scrollLeft, document.body.scrollLeft);
    }
  },

  /**
   * Resets the scroll position of the outside scrolling element.
   * @private
   */
  __restoreScrollPosition: function() {
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = this.__scrollTop;
      document.scrollingElement.scrollLeft = this.__scrollLeft;
    } else {
      // Since we don't know if is the body or html, set both.
      document.documentElement.scrollTop = document.body.scrollTop =
          this.__scrollTop;
      document.documentElement.scrollLeft = document.body.scrollLeft =
          this.__scrollLeft;
    }
  },

};

/**
  Use `Polymer.IronOverlayBehavior` to implement an element that can be hidden
  or shown, and displays on top of other content. It includes an optional
  backdrop, and can be used to implement a variety of UI controls including
  dialogs and drop downs. Multiple overlays may be displayed at once.

  See the [demo source
  code](https://github.com/PolymerElements/iron-overlay-behavior/blob/master/demo/simple-overlay.html)
  for an example.

  ### Closing and canceling

  An overlay may be hidden by closing or canceling. The difference between close
  and cancel is user intent. Closing generally implies that the user
  acknowledged the content on the overlay. By default, it will cancel whenever
  the user taps outside it or presses the escape key. This behavior is
  configurable with the `no-cancel-on-esc-key` and the
  `no-cancel-on-outside-click` properties. `close()` should be called explicitly
  by the implementer when the user interacts with a control in the overlay
  element. When the dialog is canceled, the overlay fires an
  'iron-overlay-canceled' event. Call `preventDefault` on this event to prevent
  the overlay from closing.

  ### Positioning

  By default the element is sized and positioned to fit and centered inside the
  window. You can position and size it manually using CSS. See
  `Polymer.IronFitBehavior`.

  ### Backdrop

  Set the `with-backdrop` attribute to display a backdrop behind the overlay.
  The backdrop is appended to `<body>` and is of type `<iron-overlay-backdrop>`.
  See its doc page for styling options.

  In addition, `with-backdrop` will wrap the focus within the content in the
  light DOM. Override the [`_focusableNodes`
  getter](#Polymer.IronOverlayBehavior:property-_focusableNodes) to achieve a
  different behavior.

  ### Limitations

  The element is styled to appear on top of other content by setting its
  `z-index` property. You must ensure no element has a stacking context with a
  higher `z-index` than its parent stacking context. You should place this
  element as a child of `<body>` whenever possible.

  @demo demo/index.html
  @polymerBehavior
 */
const IronOverlayBehavior =
    [IronFitBehavior, IronResizableBehavior, IronOverlayBehaviorImpl];

/**
 * Fired after the overlay opens.
 * @event iron-overlay-opened
 */

/**
 * Fired when the overlay is canceled, but before it is closed.
 * @event iron-overlay-canceled
 * @param {Event} event The closing of the overlay can be prevented
 * by calling `event.preventDefault()`. The `event.detail` is the original event
 * that originated the canceling (e.g. ESC keyboard event or click event outside
 * the overlay).
 */

/**
 * Fired after the overlay closes.
 * @event iron-overlay-closed
 * @param {Event} event The `event.detail` is the `closingReason` property
 * (contains `canceled`, whether the overlay was canceled).
 */

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * `NeonAnimatableBehavior` is implemented by elements containing
 * animations for use with elements implementing
 * `NeonAnimationRunnerBehavior`.
 * @polymerBehavior
 */
const NeonAnimatableBehavior = {

  properties: {

    /**
     * Animation configuration. See README for more info.
     */
    animationConfig: {type: Object},

    /**
     * Convenience property for setting an 'entry' animation. Do not set
     * `animationConfig.entry` manually if using this. The animated node is set
     * to `this` if using this property.
     */
    entryAnimation: {
      observer: '_entryAnimationChanged',
      type: String,
    },

    /**
     * Convenience property for setting an 'exit' animation. Do not set
     * `animationConfig.exit` manually if using this. The animated node is set
     * to `this` if using this property.
     */
    exitAnimation: {
      observer: '_exitAnimationChanged',
      type: String,
    },

  },

  _entryAnimationChanged: function() {
    this.animationConfig = this.animationConfig || {};
    this.animationConfig['entry'] = [{name: this.entryAnimation, node: this}];
  },

  _exitAnimationChanged: function() {
    this.animationConfig = this.animationConfig || {};
    this.animationConfig['exit'] = [{name: this.exitAnimation, node: this}];
  },

  _copyProperties: function(config1, config2) {
    // shallowly copy properties from config2 to config1
    for (var property in config2) {
      config1[property] = config2[property];
    }
  },

  _cloneConfig: function(config) {
    var clone = {isClone: true};
    this._copyProperties(clone, config);
    return clone;
  },

  _getAnimationConfigRecursive: function(type, map, allConfigs) {
    if (!this.animationConfig) {
      return;
    }

    if (this.animationConfig.value &&
        typeof this.animationConfig.value === 'function') {
      this._warn(this._logf(
          'playAnimation',
          'Please put \'animationConfig\' inside of your components \'properties\' object instead of outside of it.'));
      return;
    }

    // type is optional
    var thisConfig;
    if (type) {
      thisConfig = this.animationConfig[type];
    } else {
      thisConfig = this.animationConfig;
    }

    if (!Array.isArray(thisConfig)) {
      thisConfig = [thisConfig];
    }

    // iterate animations and recurse to process configurations from child nodes
    if (thisConfig) {
      for (var config, index = 0; config = thisConfig[index]; index++) {
        if (config.animatable) {
          config.animatable._getAnimationConfigRecursive(
              config.type || type, map, allConfigs);
        } else {
          if (config.id) {
            var cachedConfig = map[config.id];
            if (cachedConfig) {
              // merge configurations with the same id, making a clone lazily
              if (!cachedConfig.isClone) {
                map[config.id] = this._cloneConfig(cachedConfig);
                cachedConfig = map[config.id];
              }
              this._copyProperties(cachedConfig, config);
            } else {
              // put any configs with an id into a map
              map[config.id] = config;
            }
          } else {
            allConfigs.push(config);
          }
        }
      }
    }
  },

  /**
   * An element implementing `NeonAnimationRunnerBehavior` calls this
   * method to configure an animation with an optional type. Elements
   * implementing `NeonAnimatableBehavior` should define the property
   * `animationConfig`, which is either a configuration object or a map of
   * animation type to array of configuration objects.
   */
  getAnimationConfig: function(type) {
    var map = {};
    var allConfigs = [];
    this._getAnimationConfigRecursive(type, map, allConfigs);
    // append the configurations saved in the map to the array
    for (var key in map) {
      allConfigs.push(map[key]);
    }
    return allConfigs;
  }

};

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * `NeonAnimationRunnerBehavior` adds a method to run animations.
 *
 * @polymerBehavior NeonAnimationRunnerBehavior
 */
const NeonAnimationRunnerBehaviorImpl = {

  _configureAnimations: function(configs) {
    var results = [];
    var resultsToPlay = [];

    if (configs.length > 0) {
      for (let config, index = 0; config = configs[index]; index++) {
        let neonAnimation = document.createElement(config.name);
        // is this element actually a neon animation?
        if (neonAnimation.isNeonAnimation) {
          let result = null;
          // Closure compiler does not work well with a try / catch here.
          // .configure needs to be explicitly defined
          if (!neonAnimation.configure) {
            /**
             * @param {Object} config
             * @return {AnimationEffectReadOnly}
             */
            neonAnimation.configure = function(config) {
              return null;
            };
          }

          result = neonAnimation.configure(config);
          resultsToPlay.push({
            result: result,
            config: config,
            neonAnimation: neonAnimation,
          });
        } else {
          console.warn(this.is + ':', config.name, 'not found!');
        }
      }
    }

    for (var i = 0; i < resultsToPlay.length; i++) {
      let result = resultsToPlay[i].result;
      let config = resultsToPlay[i].config;
      let neonAnimation = resultsToPlay[i].neonAnimation;
      // configuration or play could fail if polyfills aren't loaded
      try {
        // Check if we have an Effect rather than an Animation
        if (typeof result.cancel != 'function') {
          result = document.timeline.play(result);
        }
      } catch (e) {
        result = null;
        console.warn('Couldnt play', '(', config.name, ').', e);
      }

      if (result) {
        results.push({
          neonAnimation: neonAnimation,
          config: config,
          animation: result,
        });
      }
    }

    return results;
  },

  _shouldComplete: function(activeEntries) {
    var finished = true;
    for (var i = 0; i < activeEntries.length; i++) {
      if (activeEntries[i].animation.playState != 'finished') {
        finished = false;
        break;
      }
    }
    return finished;
  },

  _complete: function(activeEntries) {
    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].neonAnimation.complete(activeEntries[i].config);
    }
    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].animation.cancel();
    }
  },

  /**
   * Plays an animation with an optional `type`.
   * @param {string=} type
   * @param {!Object=} cookie
   */
  playAnimation: function(type, cookie) {
    var configs = this.getAnimationConfig(type);
    if (!configs) {
      return;
    }
    this._active = this._active || {};
    if (this._active[type]) {
      this._complete(this._active[type]);
      delete this._active[type];
    }

    var activeEntries = this._configureAnimations(configs);

    if (activeEntries.length == 0) {
      this.fire('neon-animation-finish', cookie, {bubbles: false});
      return;
    }

    this._active[type] = activeEntries;

    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].animation.onfinish = function() {
        if (this._shouldComplete(activeEntries)) {
          this._complete(activeEntries);
          delete this._active[type];
          this.fire('neon-animation-finish', cookie, {bubbles: false});
        }
      }.bind(this);
    }
  },

  /**
   * Cancels the currently running animations.
   */
  cancelAnimation: function() {
    for (var k in this._active) {
      var entries = this._active[k];

                    for (var j in entries) {
        entries[j].animation.cancel();
      }
    }

    this._active = {};
  }
};

/** @polymerBehavior */
const NeonAnimationRunnerBehavior =
    [NeonAnimatableBehavior, NeonAnimationRunnerBehaviorImpl];

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
`<iron-dropdown>` is a generalized element that is useful when you have
hidden content (`dropdown-content`) that is revealed due to some change in
state that should cause it to do so.

Note that this is a low-level element intended to be used as part of other
composite elements that cause dropdowns to be revealed.

Examples of elements that might be implemented using an `iron-dropdown`
include comboboxes, menubuttons, selects. The list goes on.

The `<iron-dropdown>` element exposes attributes that allow the position
of the `dropdown-content` relative to the `dropdown-trigger` to be
configured.

    <iron-dropdown horizontal-align="right" vertical-align="top">
      <div slot="dropdown-content">Hello!</div>
    </iron-dropdown>

In the above example, the `<div>` assigned to the `dropdown-content` slot will
be hidden until the dropdown element has `opened` set to true, or when the
`open` method is called on the element.

@demo demo/index.html
*/
Polymer({
  _template: html`
    <style>
      :host {
        position: fixed;
      }

      #contentWrapper ::slotted(*) {
        overflow: auto;
      }

      #contentWrapper.animating ::slotted(*) {
        overflow: hidden;
        pointer-events: none;
      }
    </style>

    <div id="contentWrapper">
      <slot id="content" name="dropdown-content"></slot>
    </div>
`,

  is: 'iron-dropdown',

  behaviors: [
    IronControlState,
    IronA11yKeysBehavior,
    IronOverlayBehavior,
    NeonAnimationRunnerBehavior
  ],

  properties: {
    /**
     * The orientation against which to align the dropdown content
     * horizontally relative to the dropdown trigger.
     * Overridden from `Polymer.IronFitBehavior`.
     */
    horizontalAlign: {type: String, value: 'left', reflectToAttribute: true},

    /**
     * The orientation against which to align the dropdown content
     * vertically relative to the dropdown trigger.
     * Overridden from `Polymer.IronFitBehavior`.
     */
    verticalAlign: {type: String, value: 'top', reflectToAttribute: true},

    /**
     * An animation config. If provided, this will be used to animate the
     * opening of the dropdown. Pass an Array for multiple animations.
     * See `neon-animation` documentation for more animation configuration
     * details.
     */
    openAnimationConfig: {type: Object},

    /**
     * An animation config. If provided, this will be used to animate the
     * closing of the dropdown. Pass an Array for multiple animations.
     * See `neon-animation` documentation for more animation configuration
     * details.
     */
    closeAnimationConfig: {type: Object},

    /**
     * If provided, this will be the element that will be focused when
     * the dropdown opens.
     */
    focusTarget: {type: Object},

    /**
     * Set to true to disable animations when opening and closing the
     * dropdown.
     */
    noAnimations: {type: Boolean, value: false},

    /**
     * By default, the dropdown will constrain scrolling on the page
     * to itself when opened.
     * Set to true in order to prevent scroll from being constrained
     * to the dropdown when it opens.
     * This property is a shortcut to set `scrollAction` to lock or refit.
     * Prefer directly setting the `scrollAction` property.
     */
    allowOutsideScroll:
        {type: Boolean, value: false, observer: '_allowOutsideScrollChanged'}
  },

  listeners: {'neon-animation-finish': '_onNeonAnimationFinish'},

  observers: [
    '_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)'
  ],

  /**
   * The element that is contained by the dropdown, if any.
   */
  get containedElement() {
    // Polymer 2.x returns slot.assignedNodes which can contain text nodes.
    var nodes = dom(this.$.content).getDistributedNodes();
    for (var i = 0, l = nodes.length; i < l; i++) {
      if (nodes[i].nodeType === Node.ELEMENT_NODE) {
        return nodes[i];
      }
    }
  },

  ready: function() {
    // Ensure scrollAction is set.
    if (!this.scrollAction) {
      this.scrollAction = this.allowOutsideScroll ? 'refit' : 'lock';
    }
    this._readied = true;
  },

  attached: function() {
    if (!this.sizingTarget || this.sizingTarget === this) {
      this.sizingTarget = this.containedElement || this;
    }
  },

  detached: function() {
    this.cancelAnimation();
  },

  /**
   * Called when the value of `opened` changes.
   * Overridden from `IronOverlayBehavior`
   */
  _openedChanged: function() {
    if (this.opened && this.disabled) {
      this.cancel();
    } else {
      this.cancelAnimation();
      this._updateAnimationConfig();
      IronOverlayBehaviorImpl._openedChanged.apply(this, arguments);
    }
  },

  /**
   * Overridden from `IronOverlayBehavior`.
   */
  _renderOpened: function() {
    if (!this.noAnimations && this.animationConfig.open) {
      this.$.contentWrapper.classList.add('animating');
      this.playAnimation('open');
    } else {
      IronOverlayBehaviorImpl._renderOpened.apply(this, arguments);
    }
  },

  /**
   * Overridden from `IronOverlayBehavior`.
   */
  _renderClosed: function() {
    if (!this.noAnimations && this.animationConfig.close) {
      this.$.contentWrapper.classList.add('animating');
      this.playAnimation('close');
    } else {
      IronOverlayBehaviorImpl._renderClosed.apply(this, arguments);
    }
  },

  /**
   * Called when animation finishes on the dropdown (when opening or
   * closing). Responsible for "completing" the process of opening or
   * closing the dropdown by positioning it or setting its display to
   * none.
   */
  _onNeonAnimationFinish: function() {
    this.$.contentWrapper.classList.remove('animating');
    if (this.opened) {
      this._finishRenderOpened();
    } else {
      this._finishRenderClosed();
    }
  },

  /**
   * Constructs the final animation config from different properties used
   * to configure specific parts of the opening and closing animations.
   */
  _updateAnimationConfig: function() {
    // Update the animation node to be the containedElement.
    var animationNode = this.containedElement;
    var animations = [].concat(this.openAnimationConfig || [])
                         .concat(this.closeAnimationConfig || []);
    for (var i = 0; i < animations.length; i++) {
      animations[i].node = animationNode;
    }
    this.animationConfig = {
      open: this.openAnimationConfig,
      close: this.closeAnimationConfig
    };
  },

  /**
   * Updates the overlay position based on configured horizontal
   * and vertical alignment.
   */
  _updateOverlayPosition: function() {
    if (this.isAttached) {
      // This triggers iron-resize, and iron-overlay-behavior will call refit if
      // needed.
      this.notifyResize();
    }
  },

  /**
   * Sets scrollAction according to the value of allowOutsideScroll.
   * Prefer setting directly scrollAction.
   */
  _allowOutsideScrollChanged: function(allowOutsideScroll) {
    // Wait until initial values are all set.
    if (!this._readied) {
      return;
    }
    if (!allowOutsideScroll) {
      this.scrollAction = 'lock';
    } else if (!this.scrollAction || this.scrollAction === 'lock') {
      this.scrollAction = 'refit';
    }
  },

  /**
   * Apply focus to focusTarget or containedElement
   */
  _applyFocus: function() {
    var focusTarget = this.focusTarget || this.containedElement;
    if (focusTarget && this.opened && !this.noAutoFocus) {
      focusTarget.focus();
    } else {
      IronOverlayBehaviorImpl._applyFocus.apply(this, arguments);
    }
  }
});

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const template$1 = html`<dom-module id="paper-spinner-styles">
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
</dom-module>`;

document.head.appendChild(template$1.content);

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/** @polymerBehavior */
const PaperSpinnerBehavior = {

  properties: {
    /**
     * Displays the spinner.
     */
    active: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '__activeChanged'
    },

    /**
     * Alternative text content for accessibility support.
     * If alt is present, it will add an aria-label whose content matches alt
     * when active. If alt is not present, it will default to 'loading' as the
     * alt value.
     */
    alt: {type: String, value: 'loading', observer: '__altChanged'},

    __coolingDown: {type: Boolean, value: false}
  },

  __computeContainerClasses: function(active, coolingDown) {
    return [
      active || coolingDown ? 'active' : '',
      coolingDown ? 'cooldown' : ''
    ].join(' ');
  },

  __activeChanged: function(active, old) {
    this.__setAriaHidden(!active);
    this.__coolingDown = !active && old;
  },

  __altChanged: function(alt) {
    // user-provided `aria-label` takes precedence over prototype default
    if (alt === 'loading') {
      this.alt = this.getAttribute('aria-label') || alt;
    } else {
      this.__setAriaHidden(alt === '');
      this.setAttribute('aria-label', alt);
    }
  },

  __setAriaHidden: function(hidden) {
    var attr = 'aria-hidden';
    if (hidden) {
      this.setAttribute(attr, 'true');
    } else {
      this.removeAttribute(attr);
    }
  },

  __reset: function() {
    this.active = false;
    this.__coolingDown = false;
  }
};

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

const template = html`
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
`;
template.setAttribute('strip-whitespace', '');

/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a single color material design circular spinner.

    <paper-spinner-lite active></paper-spinner-lite>

The default spinner is blue. It can be customized to be a different color.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner-lite alt="Loading contacts list" active></paper-spinner-lite>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-color` | Color of the spinner | `--google-blue-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner-lite
@hero hero.svg
@demo demo/index.html
*/
Polymer({
  _template: template,

  is: 'paper-spinner-lite',

  behaviors: [PaperSpinnerBehavior]
});

function getTemplate$b() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style cr-hidden-style">:host(:not([error-message-allowed])) cr-input{--cr-input-error-display:none}:host([opened_]) cr-input{--cr-input-border-radius:4px 4px 0 0}cr-input,iron-dropdown{width:var(--cr-searchable-drop-down-width,472px)}cr-input{--cr-input-padding-start:8px;isolation:auto}iron-dropdown{max-height:270px}iron-dropdown [slot=dropdown-content]{background-color:var(--cr-searchable-drop-down-bg-color,#fff);border-radius:0 0 4px 4px;box-shadow:var(--cr-searchable-drop-down-shadow,0 2px 6px var(--paper-grey-500));min-width:128px;padding:8px 0}#input-overlay{border-radius:4px;height:100%;left:0;overflow:hidden;pointer-events:none;position:absolute;top:0;width:100%}#dropdown-icon{--iron-icon-height:20px;--iron-icon-width:20px;margin-top:-10px;padding-inline-end:6px;position:absolute;right:0;top:50%}:host-context([dir=rtl]) #dropdown-icon{left:0;right:unset}cr-input:focus-within #dropdown-icon{--iron-icon-fill-color:var(--cr-searchable-drop-down-icon-color-focus,
          var(--google-blue-600))}#input-box{height:100%;left:0;pointer-events:none;top:0;width:100%}#dropdown-box{pointer-events:initial;width:100%}#loading-box{align-items:center;box-sizing:border-box;display:flex;height:32px;padding:0 8px;text-align:start;width:100%}#loading-box div{font-size:12px;padding:0 16px}#loading-box paper-spinner-lite{--paper-spinner-color:var(--cr-searchable-drop-down-spinner-color,
          var(--google-blue-600));--paper-spinner-stroke-width:2px;height:16px;width:16px}.list-item{background:0 0;border:none;box-sizing:border-box;color:var(--cr-searchable-drop-down-list-item-color,var(--paper-grey-900));font:inherit;min-height:32px;padding:0 8px;text-align:start;width:100%}.list-item[selected_]{background-color:var(--cr-searchable-drop-down-list-bg-color-selected,rgba(0,0,0,.04));outline:0}.list-item:active{background-color:var(--cr-searchable-drop-down-list-bg-color-active,rgba(0,0,0,.12));outline:0}</style>
    
    <cr-input part="input" label="[[label]]" on-focus="onFocus_" on-keydown="onKeyDown_" value="[[value]]" on-input="onInput_" id="search" autofocus="[[autofocus]]" placeholder="[[placeholder]]" readonly="[[readonly]]" error-message="[[getErrorMessage_(errorMessage, errorMessageAllowed)]]" invalid="[[shouldShowErrorMessage_(errorMessage, errorMessageAllowed)]]" on-blur="onBlur_">
      <div id="input-overlay" slot="suffix">
        <div id="input-box">
          <iron-icon id="dropdown-icon" icon="cr:arrow-drop-down"></iron-icon>
        </div>
        <div id="dropdown-box">
          <iron-dropdown id="dropdown" horizontal-align="left" vertical-align="top" vertical-offset="0" no-cancel-on-outside-click no-cancel-on-esc-key>
            <div slot="dropdown-content">
              <div id="loading-box" hidden="[[!showLoading]]">
                <paper-spinner-lite active></paper-spinner-lite>
                <div class="cr-secondary-text">[[loadingMessage]]</div>
              </div>
              <template is="dom-repeat" items="[[items]]" filter="[[filterItems_(searchTerm_)]]">
                <button class="list-item" on-click="onSelect_" tabindex="-1">
                  [[item]]
                </button>
              </template>
            </div>
          </iron-dropdown>
        </div>
      </div>
    </cr-input>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-searchable-drop-down' implements a search box with a
 * suggestions drop down.
 *
 * If the update-value-on-input flag is set, value will be set to whatever is
 * in the input box. Otherwise, value will only be set when an element in items
 * is clicked.
 *
 * The |invalid| property tracks whether the user's current text input in the
 * dropdown matches the previously saved dropdown value. This property can be
 * used to disable certain user actions when the dropdown is invalid.
 */
class CrSearchableDropDownElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.openDropdownTimeoutId_ = 0;
        this.resizeObserver_ = null;
    }
    static get is() {
        return 'cr-searchable-drop-down';
    }
    static get template() {
        return getTemplate$b();
    }
    static get properties() {
        return {
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            readonly: {
                type: Boolean,
                reflectToAttribute: true,
            },
            /**
             * Whether space should be left below the text field to display an error
             * message. Must be true for |errorMessage| to be displayed.
             */
            errorMessageAllowed: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            /**
             * When |errorMessage| is set, the text field is highlighted red and
             * |errorMessage| is displayed beneath it.
             */
            errorMessage: String,
            /**
             * Message to display next to the loading spinner.
             */
            loadingMessage: String,
            placeholder: String,
            /**
             * Used to track in real time if the |value| in cr-searchable-drop-down
             * matches the value in the underlying cr-input. These values will differ
             * after a user types in input that does not match a valid dropdown
             * option. |invalid| is always false when |updateValueOnInput| is set to
             * true. This is because when |updateValueOnInput| is set to true, we are
             * not setting a restrictive set of valid options.
             */
            invalid: {
                type: Boolean,
                value: false,
                notify: true,
            },
            items: {
                type: Array,
                observer: 'onItemsChanged_',
            },
            value: {
                type: String,
                notify: true,
                observer: 'updateInvalid_',
            },
            label: {
                type: String,
                value: '',
            },
            updateValueOnInput: Boolean,
            showLoading: {
                type: Boolean,
                value: false,
            },
            searchTerm_: String,
            dropdownRefitPending_: Boolean,
            /**
             * Whether the dropdown is currently open. Should only be used by CSS
             * privately.
             */
            opened_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.pointerDownListener_ = this.onPointerDown_.bind(this);
        document.addEventListener('pointerdown', this.pointerDownListener_);
        this.resizeObserver_ = new ResizeObserver(() => {
            this.resizeDropdown_();
        });
        this.resizeObserver_.observe(this.$.search);
    }
    ready() {
        super.ready();
        this.addEventListener('mousemove', this.onMouseMove_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('pointerdown', this.pointerDownListener_);
        this.resizeObserver_.unobserve(this.$.search);
    }
    /**
     * Enqueues a task to refit the iron-dropdown if it is open.
     */
    enqueueDropdownRefit_() {
        const dropdown = this.$.dropdown;
        if (!this.dropdownRefitPending_ && dropdown.opened) {
            this.dropdownRefitPending_ = true;
            setTimeout(() => {
                dropdown.refit();
                this.dropdownRefitPending_ = false;
            }, 0);
        }
    }
    /**
     * Keeps the dropdown from expanding beyond the width of the search input when
     * its width is specified as a percentage.
     */
    resizeDropdown_() {
        const dropdown = this.$.dropdown.containedElement;
        const dropdownWidth = Math.max(dropdown.offsetWidth, this.$.search.offsetWidth);
        dropdown.style.width = `${dropdownWidth}px`;
        this.enqueueDropdownRefit_();
    }
    openDropdown_() {
        this.$.dropdown.open();
        this.opened_ = true;
    }
    closeDropdown_() {
        if (this.openDropdownTimeoutId_) {
            clearTimeout(this.openDropdownTimeoutId_);
        }
        this.$.dropdown.close();
        this.opened_ = false;
    }
    /**
     * Enqueues a task to open the iron-dropdown. Any pending task is canceled and
     * a new task is enqueued.
     */
    enqueueOpenDropdown_() {
        if (this.opened_) {
            return;
        }
        if (this.openDropdownTimeoutId_) {
            clearTimeout(this.openDropdownTimeoutId_);
        }
        this.openDropdownTimeoutId_ = setTimeout(this.openDropdown_.bind(this));
    }
    onItemsChanged_() {
        // Refit the iron-dropdown so that it can expand as neccessary to
        // accommodate new items. Refitting is done on a new task because the change
        // notification might not yet have propagated to the iron-dropdown.
        this.enqueueDropdownRefit_();
    }
    onFocus_() {
        if (this.readonly) {
            return;
        }
        this.openDropdown_();
    }
    onMouseMove_(event) {
        const item = event.composedPath().find(elm => {
            const element = elm;
            return element.classList && element.classList.contains('list-item');
        });
        if (!item) {
            return;
        }
        // Select the item the mouse is hovering over. If the user uses the
        // keyboard, the selection will shift. But once the user moves the mouse,
        // selection should be updated based on the location of the mouse cursor.
        const selectedItem = this.findSelectedItem_();
        if (item === selectedItem) {
            return;
        }
        if (selectedItem) {
            selectedItem.removeAttribute('selected_');
        }
        item.setAttribute('selected_', '');
    }
    onPointerDown_(event) {
        if (this.readonly) {
            return;
        }
        const paths = event.composedPath();
        const searchInput = this.$.search.inputElement;
        if (paths.includes(this.$.dropdown)) {
            // At this point, the search input field has lost focus. Since the user
            // is still interacting with this element, give the search field focus.
            searchInput.focus();
            // Prevent any other field from gaining focus due to this event.
            event.preventDefault();
        }
        else if (paths.includes(searchInput)) {
            // A click on the search input should open the dropdown. Opening the
            // dropdown is done on a new task because when the IronDropdown element is
            // opened, it may capture and cancel the touch event, preventing the
            // searchInput field from receiving focus. Replacing iron-dropdown
            // (crbug.com/1013408) will eliminate the need for this work around.
            this.enqueueOpenDropdown_();
        }
        else {
            // A click outside either the search input or dropdown should close the
            // dropdown. Implicitly, the search input has lost focus at this point.
            this.closeDropdown_();
        }
    }
    onKeyDown_(event) {
        const dropdown = this.$.dropdown;
        if (!dropdown.opened) {
            if (this.readonly) {
                return;
            }
            if (event.key === 'Enter') {
                this.openDropdown_();
                // Stop the default submit action.
                event.preventDefault();
            }
            return;
        }
        event.stopPropagation();
        switch (event.key) {
            case 'Tab':
                // Pressing tab will cause the input field to lose focus. Since the
                // dropdown visibility is tied to focus, close the dropdown.
                this.closeDropdown_();
                break;
            case 'ArrowUp':
            case 'ArrowDown': {
                const selected = this.findSelectedItemIndex_();
                const items = dropdown.querySelectorAll('.list-item');
                if (items.length === 0) {
                    break;
                }
                this.updateSelected_(items, selected, event.key === 'ArrowDown');
                break;
            }
            case 'Enter': {
                const selected = this.findSelectedItem_();
                if (!selected) {
                    break;
                }
                selected.removeAttribute('selected_');
                this.value = dropdown.querySelector('dom-repeat').modelForElement(selected).item;
                this.searchTerm_ = '';
                this.closeDropdown_();
                // Stop the default submit action.
                event.preventDefault();
                break;
            }
        }
    }
    /**
     * Finds the currently selected dropdown item.
     * @return Currently selected dropdown item, or undefined if no item is
     *     selected.
     */
    findSelectedItem_() {
        const items = Array.from(this.$.dropdown.querySelectorAll('.list-item'));
        return items.find(item => item.hasAttribute('selected_'));
    }
    /**
     * Finds the index of currently selected dropdown item.
     * @return Index of the currently selected dropdown item, or -1 if no item is
     *     selected.
     */
    findSelectedItemIndex_() {
        const items = Array.from(this.$.dropdown.querySelectorAll('.list-item'));
        return items.findIndex(item => item.hasAttribute('selected_'));
    }
    /**
     * Updates the currently selected element based on keyboard up/down movement.
     */
    updateSelected_(items, currentIndex, moveDown) {
        const numItems = items.length;
        let nextIndex = 0;
        if (currentIndex === -1) {
            nextIndex = moveDown ? 0 : numItems - 1;
        }
        else {
            const delta = moveDown ? 1 : -1;
            nextIndex = (numItems + currentIndex + delta) % numItems;
            items[currentIndex].removeAttribute('selected_');
        }
        items[nextIndex].setAttribute('selected_', '');
        // The newly selected item might not be visible because the dropdown needs
        // to be scrolled. So scroll the dropdown if necessary.
        items[nextIndex].scrollIntoViewIfNeeded();
    }
    onInput_() {
        this.searchTerm_ = this.$.search.value;
        if (this.updateValueOnInput) {
            this.value = this.$.search.value;
        }
        // If the user makes a change, ensure the dropdown is open. The dropdown is
        // closed when the user makes a selection using the mouse or keyboard.
        // However, focus remains on the input field. If the user makes a further
        // change, then the dropdown should be shown.
        this.openDropdown_();
        // iron-dropdown sets its max-height when it is opened. If the current value
        // results in no filtered items in the drop down list, the iron-dropdown
        // will have a max-height for 0 items. If the user then clears the input
        // field, a non-zero number of items might be displayed in the drop-down,
        // but the height is still limited based on 0 items. This results in a tiny,
        // but scollable dropdown. Refitting the dropdown allows it to expand to
        // accommodate the new items.
        this.enqueueDropdownRefit_();
        // Need check to if the input is valid when the user types.
        this.updateInvalid_();
    }
    onSelect_(event) {
        this.closeDropdown_();
        this.value = event.model.item;
        this.searchTerm_ = '';
        const selected = this.findSelectedItem_();
        if (selected) {
            // Reset the selection state.
            selected.removeAttribute('selected_');
        }
    }
    filterItems_(searchTerm) {
        if (!searchTerm) {
            return null;
        }
        return function (item) {
            return item.toLowerCase().includes(searchTerm.toLowerCase());
        };
    }
    shouldShowErrorMessage_(errorMessage, errorMessageAllowed) {
        return !!this.getErrorMessage_(errorMessage, errorMessageAllowed);
    }
    getErrorMessage_(errorMessage, errorMessageAllowed) {
        if (!errorMessageAllowed) {
            return '';
        }
        return errorMessage;
    }
    /**
     * This makes sure to reset the text displayed in the dropdown to the actual
     * value in the cr-input for the use case where a user types in an invalid
     * option then changes focus from the dropdown. This behavior is only for when
     * updateValueOnInput is false. When updateValueOnInput is true, it is ok to
     * leave the user's text in the dropdown search bar when focus is changed.
     */
    onBlur_() {
        if (!this.updateValueOnInput) {
            this.$.search.value = this.value;
        }
        // Need check to if the input is valid when the dropdown loses focus.
        this.updateInvalid_();
    }
    /**
     * If |updateValueOnInput| is true then any value is allowable so always set
     * |invalid| to false.
     */
    updateInvalid_() {
        this.invalid =
            !this.updateValueOnInput && (this.value !== this.$.search.value);
    }
}
customElements.define(CrSearchableDropDownElement.is, CrSearchableDropDownElement);

const styleMod$3 = document.createElement('dom-module');
styleMod$3.appendChild(html `
  <template>
    <style>
.throbber{background:url(chrome://resources/images/throbber_small.svg) no-repeat;display:inline-block;height:var(--throbber-size);width:var(--throbber-size)}
    </style>
  </template>
`.content);
styleMod$3.register('throbber');

const styleMod$2 = document.createElement('dom-module');
styleMod$2.appendChild(html `
  <template>
    <style include="print-preview-shared cr-hidden-style throbber">
:host-context([dir=rtl]) #manageIcon{transform:scaleX(-1)}#dialog::part(dialog){height:calc(100vh - 2 * var(--print-preview-dialog-margin));max-width:640px;width:calc(100vw - 2 * var(--print-preview-dialog-margin))}#dialog::part(wrapper){height:calc(100vh - 2 * var(--print-preview-dialog-margin))}#dialog::part(body-container){flex:1}print-preview-search-box{margin-bottom:16px;margin-top:6px}cr-dialog [slot=body]{display:flex;flex-direction:column;height:100%}div[slot=button-container]{justify-content:space-between}cr-button{font-size:calc(12 / 13 * 1em)}.cancel-button{margin-inline-end:0}cr-button iron-icon{--iron-icon-fill-color:currentColor;margin-inline-start:8px}#warning-message{color:var(--cr-primary-text-color)}
    </style>
  </template>
`.content);
styleMod$2.register('destination-dialog-style');

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
 * `Polymer.IronScrollTargetBehavior` allows an element to respond to scroll
 * events from a designated scroll target.
 *
 * Elements that consume this behavior can override the `_scrollHandler`
 * method to add logic on the scroll event.
 *
 * @demo demo/scrolling-region.html Scrolling Region
 * @demo demo/document.html Document Element
 * @polymerBehavior
 */
const IronScrollTargetBehavior = {

  properties: {

    /**
     * Specifies the element that will handle the scroll event
     * on the behalf of the current element. This is typically a reference to an
     *element, but there are a few more posibilities:
     *
     * ### Elements id
     *
     *```html
     * <div id="scrollable-element" style="overflow: auto;">
     *  <x-element scroll-target="scrollable-element">
     *    <!-- Content-->
     *  </x-element>
     * </div>
     *```
     * In this case, the `scrollTarget` will point to the outer div element.
     *
     * ### Document scrolling
     *
     * For document scrolling, you can use the reserved word `document`:
     *
     *```html
     * <x-element scroll-target="document">
     *   <!-- Content -->
     * </x-element>
     *```
     *
     * ### Elements reference
     *
     *```js
     * appHeader.scrollTarget = document.querySelector('#scrollable-element');
     *```
     *
     * @type {HTMLElement}
     * @default document
     */
    scrollTarget: {
      type: HTMLElement,
      value: function() {
        return this._defaultScrollTarget;
      }
    }
  },

  observers: ['_scrollTargetChanged(scrollTarget, isAttached)'],

  /**
   * True if the event listener should be installed.
   */
  _shouldHaveListener: true,

  _scrollTargetChanged: function(scrollTarget, isAttached) {

    if (this._oldScrollTarget) {
      this._toggleScrollListener(false, this._oldScrollTarget);
      this._oldScrollTarget = null;
    }
    if (!isAttached) {
      return;
    }
    // Support element id references
    if (scrollTarget === 'document') {
      this.scrollTarget = this._doc;

    } else if (typeof scrollTarget === 'string') {
      var domHost = this.domHost;

      this.scrollTarget = domHost && domHost.$ ?
          domHost.$[scrollTarget] :
          dom(this.ownerDocument).querySelector('#' + scrollTarget);

    } else if (this._isValidScrollTarget()) {
      this._oldScrollTarget = scrollTarget;
      this._toggleScrollListener(this._shouldHaveListener, scrollTarget);
    }
  },

  /**
   * Runs on every scroll event. Consumer of this behavior may override this
   * method.
   *
   * @protected
   */
  _scrollHandler: function scrollHandler() {},

  /**
   * The default scroll target. Consumers of this behavior may want to customize
   * the default scroll target.
   *
   * @type {Element}
   */
  get _defaultScrollTarget() {
    return this._doc;
  },

  /**
   * Shortcut for the document element
   *
   * @type {Element}
   */
  get _doc() {
    return this.ownerDocument.documentElement;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  get _scrollTop() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageYOffset :
                                               this.scrollTarget.scrollTop;
    }
    return 0;
  },

  /**
   * Gets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  get _scrollLeft() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.pageXOffset :
                                               this.scrollTarget.scrollLeft;
    }
    return 0;
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled
   * upward.
   *
   * @type {number}
   */
  set _scrollTop(top) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(window.pageXOffset, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Sets the number of pixels that the content of an element is scrolled to the
   * left.
   *
   * @type {number}
   */
  set _scrollLeft(left) {
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, window.pageYOffset);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
    }
  },

  /**
   * Scrolls the content to a particular place.
   *
   * @method scroll
   * @param {number|!{left: number, top: number}} leftOrOptions The left position or scroll options
   * @param {number=} top The top position
   * @return {void}
   */
  scroll: function(leftOrOptions, top) {
    var left;

    if (typeof leftOrOptions === 'object') {
      left = leftOrOptions.left;
      top = leftOrOptions.top;
    } else {
      left = leftOrOptions;
    }

    left = left || 0;
    top = top || 0;
    if (this.scrollTarget === this._doc) {
      window.scrollTo(left, top);
    } else if (this._isValidScrollTarget()) {
      this.scrollTarget.scrollLeft = left;
      this.scrollTarget.scrollTop = top;
    }
  },

  /**
   * Gets the width of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetWidth() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerWidth :
                                               this.scrollTarget.offsetWidth;
    }
    return 0;
  },

  /**
   * Gets the height of the scroll target.
   *
   * @type {number}
   */
  get _scrollTargetHeight() {
    if (this._isValidScrollTarget()) {
      return this.scrollTarget === this._doc ? window.innerHeight :
                                               this.scrollTarget.offsetHeight;
    }
    return 0;
  },

  /**
   * Returns true if the scroll target is a valid HTMLElement.
   *
   * @return {boolean}
   */
  _isValidScrollTarget: function() {
    return this.scrollTarget instanceof HTMLElement;
  },

  _toggleScrollListener: function(yes, scrollTarget) {
    var eventTarget = scrollTarget === this._doc ? window : scrollTarget;
    if (yes) {
      if (!this._boundScrollHandler) {
        this._boundScrollHandler = this._scrollHandler.bind(this);
        eventTarget.addEventListener('scroll', this._boundScrollHandler);
      }
    } else {
      if (this._boundScrollHandler) {
        eventTarget.removeEventListener('scroll', this._boundScrollHandler);
        this._boundScrollHandler = null;
      }
    }
  },

  /**
   * Enables or disables the scroll event listener.
   *
   * @param {boolean} yes True to add the event, False to remove it.
   */
  toggleScrollListener: function(yes) {
    this._shouldHaveListener = yes;
    this._toggleScrollListener(yes, this.scrollTarget);
  }

};

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

var IOS = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);
var IOS_TOUCH_SCROLLING = IOS && IOS[1] >= 8;
var DEFAULT_PHYSICAL_COUNT = 3;
var HIDDEN_Y = '-10000px';
var SECRET_TABINDEX = -100;

/**

`iron-list` displays a virtual, 'infinite' list. The template inside
the iron-list element represents the DOM to create for each list item.
The `items` property specifies an array of list item data.

For performance reasons, not every item in the list is rendered at once;
instead a small subset of actual template elements *(enough to fill the
viewport)* are rendered and reused as the user scrolls. As such, it is important
that all state of the list template is bound to the model driving it, since the
view may be reused with a new model at any time. Particularly, any state that
may change as the result of a user interaction with the list item must be bound
to the model to avoid view state inconsistency.

### Sizing iron-list

`iron-list` must either be explicitly sized, or delegate scrolling to an
explicitly sized parent. By "explicitly sized", we mean it either has an
explicit CSS `height` property set via a class or inline style, or else is sized
by other layout means (e.g. the `flex` or `fit` classes).

#### Flexbox - [jsbin](https://jsbin.com/vejoni/edit?html,output)

```html
<template is="x-list">
  <style>
    :host {
      display: block;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    iron-list {
      flex: 1 1 auto;
    }
  </style>
  <app-toolbar>App name</app-toolbar>
  <iron-list items="[[items]]">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</template>
```
#### Explicit size - [jsbin](https://jsbin.com/vopucus/edit?html,output)
```html
<template is="x-list">
  <style>
    :host {
      display: block;
    }

    iron-list {
      height: 100vh; /* don't use % values unless the parent element is sized.
*\/
    }
  </style>
  <iron-list items="[[items]]">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</template>
```
#### Main document scrolling -
[jsbin](https://jsbin.com/wevirow/edit?html,output)
```html
<head>
  <style>
    body {
      height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
    }

    app-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }

    iron-list {
      /* add padding since the app-toolbar is fixed at the top *\/
      padding-top: 64px;
    }
  </style>
</head>
<body>
  <app-toolbar>App name</app-toolbar>
  <iron-list scroll-target="document">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</body>
```

`iron-list` must be given a `<template>` which contains exactly one element. In
the examples above we used a `<div>`, but you can provide any element (including
custom elements).

### Template model

List item templates should bind to template models of the following structure:

```js
{
  index: 0,        // index in the item array
  selected: false, // true if the current item is selected
  tabIndex: -1,    // a dynamically generated tabIndex for focus management
  item: {}         // user data corresponding to items[index]
}
```

Alternatively, you can change the property name used as data index by changing
the `indexAs` property. The `as` property defines the name of the variable to
add to the binding scope for the array.

For example, given the following `data` array:

##### data.json

```js
[
  {"name": "Bob"},
  {"name": "Tim"},
  {"name": "Mike"}
]
```

The following code would render the list (note the name property is bound from
the model object provided to the template scope):

```html
<iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax>
<iron-list items="[[data]]" as="item">
  <template>
    <div>
      Name: [[item.name]]
    </div>
  </template>
</iron-list>
```

### Grid layout

`iron-list` supports a grid layout in addition to linear layout by setting
the `grid` attribute.  In this case, the list template item must have both fixed
width and height (e.g. via CSS). Based on this, the number of items
per row are determined automatically based on the size of the list viewport.

### Accessibility

`iron-list` automatically manages the focus state for the items. It also
provides a `tabIndex` property within the template scope that can be used for
keyboard navigation. For example, users can press the up and down keys to move
to previous and next items in the list:

```html
<iron-list items="[[data]]" as="item">
  <template>
    <div tabindex$="[[tabIndex]]">
      Name: [[item.name]]
    </div>
  </template>
</iron-list>
```

### Resizing

`iron-list` lays out the items when it receives a notification via the
`iron-resize` event. This event is fired by any element that implements
`IronResizableBehavior`.

By default, elements such as `iron-pages`, `paper-tabs` or `paper-dialog` will
trigger this event automatically. If you hide the list manually (e.g. you use
`display: none`) you might want to implement `IronResizableBehavior` or fire
this event manually right after the list became visible again. For example:

```js
document.querySelector('iron-list').fire('iron-resize');
```

### When should `<iron-list>` be used?

`iron-list` should be used when a page has significantly more DOM nodes than the
ones visible on the screen. e.g. the page has 500 nodes, but only 20 are visible
at a time. This is why we refer to it as a `virtual` list. In this case, a
`dom-repeat` will still create 500 nodes which could slow down the web app, but
`iron-list` will only create 20.

However, having an `iron-list` does not mean that you can load all the data at
once. Say you have a million records in the database, you want to split the data
into pages so you can bring in a page at the time. The page could contain 500
items, and iron-list will only render 20.

@element iron-list
@demo demo/index.html

*/
Polymer({
  /** @override */
  _template: html`
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
`,

  is: 'iron-list',

  properties: {

    /**
     * An array containing items determining how many instances of the template
     * to stamp and that that each template instance should bind to.
     */
    items: {type: Array},

    /**
     * The name of the variable to add to the binding scope for the array
     * element associated with a given template instance.
     */
    as: {type: String, value: 'item'},

    /**
     * The name of the variable to add to the binding scope with the index
     * for the row.
     */
    indexAs: {type: String, value: 'index'},

    /**
     * The name of the variable to add to the binding scope to indicate
     * if the row is selected.
     */
    selectedAs: {type: String, value: 'selected'},

    /**
     * When true, the list is rendered as a grid. Grid items must have
     * fixed width and height set via CSS. e.g.
     *
     * ```html
     * <iron-list grid>
     *   <template>
     *      <div style="width: 100px; height: 100px;"> 100x100 </div>
     *   </template>
     * </iron-list>
     * ```
     */
    grid: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '_gridChanged'
    },

    /**
     * When true, tapping a row will select the item, placing its data model
     * in the set of selected items retrievable via the selection property.
     *
     * Note that tapping focusable elements within the list item will not
     * result in selection, since they are presumed to have their * own action.
     */
    selectionEnabled: {type: Boolean, value: false},

    /**
     * When `multiSelection` is false, this is the currently selected item, or
     * `null` if no item is selected.
     */
    selectedItem: {type: Object, notify: true},

    /**
     * When `multiSelection` is true, this is an array that contains the
     * selected items.
     */
    selectedItems: {type: Object, notify: true},

    /**
     * When `true`, multiple items may be selected at once (in this case,
     * `selected` is an array of currently selected items).  When `false`,
     * only one item may be selected at a time.
     */
    multiSelection: {type: Boolean, value: false},

    /**
     * The offset top from the scrolling element to the iron-list element.
     * This value can be computed using the position returned by
     * `getBoundingClientRect()` although it's preferred to use a constant value
     * when possible.
     *
     * This property is useful when an external scrolling element is used and
     * there's some offset between the scrolling element and the list. For
     * example: a header is placed above the list.
     */
    scrollOffset: {type: Number, value: 0},

    /**
     * If set to true, focus on an element will be preserved after rerender.
     */
    preserveFocus: {
      type: Boolean,
      value: false
    }
  },

  observers: [
    '_itemsChanged(items.*)',
    '_selectionEnabledChanged(selectionEnabled)',
    '_multiSelectionChanged(multiSelection)',
    '_setOverflow(scrollTarget, scrollOffset)'
  ],

  behaviors: [
    Templatizer,
    IronResizableBehavior,
    IronScrollTargetBehavior,
    OptionalMutableDataBehavior
  ],

  /**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both
   * directions.
   */
  _ratio: 0.5,

  /**
   * The padding-top value for the list.
   */
  _scrollerPaddingTop: 0,

  /**
   * This value is a cached value of `scrollTop` from the last `scroll` event.
   */
  _scrollPosition: 0,

  /**
   * The sum of the heights of all the tiles in the DOM.
   */
  _physicalSize: 0,

  /**
   * The average `offsetHeight` of the tiles observed till now.
   */
  _physicalAverage: 0,

  /**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */
  _physicalAverageCount: 0,

  /**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */
  _physicalTop: 0,

  /**
   * The number of items in the list.
   */
  _virtualCount: 0,

  /**
   * The estimated scroll height based on `_physicalAverage`
   */
  _estScrollHeight: 0,

  /**
   * The scroll height of the dom node
   */
  _scrollHeight: 0,

  /**
   * The height of the list. This is referred as the viewport in the context of
   * list.
   */
  _viewportHeight: 0,

  /**
   * The width of the list. This is referred as the viewport in the context of
   * list.
   */
  _viewportWidth: 0,

  /**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!HTMLElement>}
   */
  _physicalItems: null,

  /**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */
  _physicalSizes: null,

  /**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */
  _firstVisibleIndexVal: null,

  /**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */
  _lastVisibleIndexVal: null,

  /**
   * The max number of pages to render. One page is equivalent to the height of
   * the list.
   */
  _maxPages: 2,

  /**
   * The currently focused physical item.
   */
  _focusedItem: null,

  /**
   * The virtual index of the focused item.
   */
  _focusedVirtualIndex: -1,

  /**
   * The physical index of the focused item.
   */
  _focusedPhysicalIndex: -1,

  /**
   * The the item that is focused if it is moved offscreen.
   * @private {?HTMLElement}
   */
  _offscreenFocusedItem: null,

  /**
   * The item that backfills the `_offscreenFocusedItem` in the physical items
   * list when that item is moved offscreen.
   * @type {?HTMLElement}
   */
  _focusBackfillItem: null,

  /**
   * The maximum items per row
   */
  _itemsPerRow: 1,

  /**
   * The width of each grid item
   */
  _itemWidth: 0,

  /**
   * The height of the row in grid layout.
   */
  _rowHeight: 0,

  /**
   * The cost of stamping a template in ms.
   */
  _templateCost: 0,

  /**
   * Needed to pass event.model property to declarative event handlers -
   * see polymer/polymer#4339.
   */
  _parentModel: true,

  /**
   * The bottom of the physical content.
   */
  get _physicalBottom() {
    return this._physicalTop + this._physicalSize;
  },

  /**
   * The bottom of the scroll.
   */
  get _scrollBottom() {
    return this._scrollPosition + this._viewportHeight;
  },

  /**
   * The n-th item rendered in the last physical item.
   */
  get _virtualEnd() {
    return this._virtualStart + this._physicalCount - 1;
  },

  /**
   * The height of the physical content that isn't on the screen.
   */
  get _hiddenContentSize() {
    var size =
        this.grid ? this._physicalRows * this._rowHeight : this._physicalSize;
    return size - this._viewportHeight;
  },

  /**
   * The parent node for the _userTemplate.
   */
  get _itemsParent() {
    return dom(dom(this._userTemplate).parentNode);
  },

  /**
   * The maximum scroll top value.
   */
  get _maxScrollTop() {
    return this._estScrollHeight - this._viewportHeight + this._scrollOffset;
  },

  /**
   * The largest n-th value for an item such that it can be rendered in
   * `_physicalStart`.
   */
  get _maxVirtualStart() {
    var virtualCount = this._convertIndexToCompleteRow(this._virtualCount);
    return Math.max(0, virtualCount - this._physicalCount);
  },

  set _virtualStart(val) {
    val = this._clamp(val, 0, this._maxVirtualStart);
    if (this.grid) {
      val = val - (val % this._itemsPerRow);
    }
    this._virtualStartVal = val;
  },

  get _virtualStart() {
    return this._virtualStartVal || 0;
  },

  /**
   * The k-th tile that is at the top of the scrolling list.
   */
  set _physicalStart(val) {
    val = val % this._physicalCount;
    if (val < 0) {
      val = this._physicalCount + val;
    }
    if (this.grid) {
      val = val - (val % this._itemsPerRow);
    }
    this._physicalStartVal = val;
  },

  get _physicalStart() {
    return this._physicalStartVal || 0;
  },

  /**
   * The k-th tile that is at the bottom of the scrolling list.
   */
  get _physicalEnd() {
    return (this._physicalStart + this._physicalCount - 1) %
        this._physicalCount;
  },

  set _physicalCount(val) {
    this._physicalCountVal = val;
  },

  get _physicalCount() {
    return this._physicalCountVal || 0;
  },

  /**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */
  get _optPhysicalSize() {
    return this._viewportHeight === 0 ? Infinity :
                                        this._viewportHeight * this._maxPages;
  },

  /**
   * True if the current list is visible.
   */
  get _isVisible() {
    return Boolean(this.offsetWidth || this.offsetHeight);
  },

  /**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */
  get firstVisibleIndex() {
    var idx = this._firstVisibleIndexVal;
    if (idx == null) {
      var physicalOffset = this._physicalTop + this._scrollOffset;

      idx = this._iterateItems(function(pidx, vidx) {
        physicalOffset += this._getPhysicalSizeIncrement(pidx);

        if (physicalOffset > this._scrollPosition) {
          return this.grid ? vidx - (vidx % this._itemsPerRow) : vidx;
        }
        // Handle a partially rendered final row in grid mode
        if (this.grid && this._virtualCount - 1 === vidx) {
          return vidx - (vidx % this._itemsPerRow);
        }
      }) ||
          0;
      this._firstVisibleIndexVal = idx;
    }
    return idx;
  },

  /**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */
  get lastVisibleIndex() {
    var idx = this._lastVisibleIndexVal;
    if (idx == null) {
      if (this.grid) {
        idx = Math.min(
            this._virtualCount,
            this.firstVisibleIndex + this._estRowsInView * this._itemsPerRow -
                1);
      } else {
        var physicalOffset = this._physicalTop + this._scrollOffset;
        this._iterateItems(function(pidx, vidx) {
          if (physicalOffset < this._scrollBottom) {
            idx = vidx;
          }
          physicalOffset += this._getPhysicalSizeIncrement(pidx);
        });
      }
      this._lastVisibleIndexVal = idx;
    }
    return idx;
  },

  get _defaultScrollTarget() {
    return this;
  },

  get _virtualRowCount() {
    return Math.ceil(this._virtualCount / this._itemsPerRow);
  },

  get _estRowsInView() {
    return Math.ceil(this._viewportHeight / this._rowHeight);
  },

  get _physicalRows() {
    return Math.ceil(this._physicalCount / this._itemsPerRow);
  },

  get _scrollOffset() {
    return this._scrollerPaddingTop + this.scrollOffset;
  },

  /** @override */
  ready: function() {
    this.addEventListener('focus', this._didFocus.bind(this), true);
  },

  /** @override */
  attached: function() {
    this._debounce('_render', this._render, animationFrame);
    // `iron-resize` is fired when the list is attached if the event is added
    // before attached causing unnecessary work.
    this.listen(this, 'iron-resize', '_resizeHandler');
    this.listen(this, 'keydown', '_keydownHandler');
  },

  /** @override */
  detached: function() {
    this.unlisten(this, 'iron-resize', '_resizeHandler');
    this.unlisten(this, 'keydown', '_keydownHandler');
  },

  /**
   * Set the overflow property if this element has its own scrolling region
   */
  _setOverflow: function(scrollTarget) {
    this.style.webkitOverflowScrolling = scrollTarget === this ? 'touch' : '';
    this.style.overflowY = scrollTarget === this ? 'auto' : '';
    // Clear cache.
    this._lastVisibleIndexVal = null;
    this._firstVisibleIndexVal = null;
    this._debounce('_render', this._render, animationFrame);
  },

  /**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */
  updateViewportBoundaries: function() {
    var styles = window.getComputedStyle(this);
    this._scrollerPaddingTop =
        this.scrollTarget === this ? 0 : parseInt(styles['padding-top'], 10);
    this._isRTL = Boolean(styles.direction === 'rtl');
    this._viewportWidth = this.$.items.offsetWidth;
    this._viewportHeight = this._scrollTargetHeight;
    this.grid && this._updateGridMetrics();
  },

  /**
   * Recycles the physical items when needed.
   */
  _scrollHandler: function() {
    var scrollTop = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop));
    var delta = scrollTop - this._scrollPosition;
    var isScrollingDown = delta >= 0;
    // Track the current scroll position.
    this._scrollPosition = scrollTop;
    // Clear indexes for first and last visible indexes.
    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null;
    // Random access.
    if (Math.abs(delta) > this._physicalSize && this._physicalSize > 0) {
      delta = delta - this._scrollOffset;
      var idxAdjustment =
          Math.round(delta / this._physicalAverage) * this._itemsPerRow;
      this._virtualStart = this._virtualStart + idxAdjustment;
      this._physicalStart = this._physicalStart + idxAdjustment;
      // Estimate new physical offset based on the virtual start index.
      // adjusts the physical start position to stay in sync with the clamped
      // virtual start index. It's critical not to let this value be
      // more than the scroll position however, since that would result in
      // the physical items not covering the viewport, and leading to
      // _increasePoolIfNeeded to run away creating items to try to fill it.
      this._physicalTop = Math.min(
          Math.floor(this._virtualStart / this._itemsPerRow) *
              this._physicalAverage,
          this._scrollPosition);
      this._update();
    } else if (this._physicalCount > 0) {
      var reusables = this._getReusables(isScrollingDown);
      if (isScrollingDown) {
        this._physicalTop = reusables.physicalTop;
        this._virtualStart = this._virtualStart + reusables.indexes.length;
        this._physicalStart = this._physicalStart + reusables.indexes.length;
      } else {
        this._virtualStart = this._virtualStart - reusables.indexes.length;
        this._physicalStart = this._physicalStart - reusables.indexes.length;
      }
      this._update(
          reusables.indexes, isScrollingDown ? null : reusables.indexes);
      this._debounce(
          '_increasePoolIfNeeded',
          this._increasePoolIfNeeded.bind(this, 0),
          microTask);
    }
  },

  /**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */
  _getReusables: function(fromTop) {
    var ith, offsetContent, physicalItemHeight;
    var idxs = [];
    var protectedOffsetContent = this._hiddenContentSize * this._ratio;
    var virtualStart = this._virtualStart;
    var virtualEnd = this._virtualEnd;
    var physicalCount = this._physicalCount;
    var top = this._physicalTop + this._scrollOffset;
    var bottom = this._physicalBottom + this._scrollOffset;
    // This may be called outside of a scrollHandler, so use last cached position
    var scrollTop = this._scrollPosition;
    var scrollBottom = this._scrollBottom;

    if (fromTop) {
      ith = this._physicalStart;
      this._physicalEnd;
      offsetContent = scrollTop - top;
    } else {
      ith = this._physicalEnd;
      this._physicalStart;
      offsetContent = bottom - scrollBottom;
    }
    while (true) {
      physicalItemHeight = this._getPhysicalSizeIncrement(ith);
      offsetContent = offsetContent - physicalItemHeight;
      if (idxs.length >= physicalCount ||
          offsetContent <= protectedOffsetContent) {
        break;
      }
      if (fromTop) {
        // Check that index is within the valid range.
        if (virtualEnd + idxs.length + 1 >= this._virtualCount) {
          break;
        }
        // Check that the index is not visible.
        if (top + physicalItemHeight >= scrollTop - this._scrollOffset) {
          break;
        }
        idxs.push(ith);
        top = top + physicalItemHeight;
        ith = (ith + 1) % physicalCount;
      } else {
        // Check that index is within the valid range.
        if (virtualStart - idxs.length <= 0) {
          break;
        }
        // Check that the index is not visible.
        if (top + this._physicalSize - physicalItemHeight <= scrollBottom) {
          break;
        }
        idxs.push(ith);
        top = top - physicalItemHeight;
        ith = (ith === 0) ? physicalCount - 1 : ith - 1;
      }
    }
    return {indexes: idxs, physicalTop: top - this._scrollOffset};
  },

  /**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */
  _update: function(itemSet, movingUp) {
    if ((itemSet && itemSet.length === 0) || this._physicalCount === 0) {
      return;
    }
    this._manageFocus();
    this._assignModels(itemSet);
    this._updateMetrics(itemSet);
    // Adjust offset after measuring.
    if (movingUp) {
      while (movingUp.length) {
        var idx = movingUp.pop();
        this._physicalTop -= this._getPhysicalSizeIncrement(idx);
      }
    }
    this._positionItems();
    this._updateScrollerSize();
  },

  /**
   * Creates a pool of DOM elements and attaches them to the local dom.
   *
   * @param {number} size Size of the pool
   */
  _createPool: function(size) {
    this._ensureTemplatized();
    var i, inst;
    var physicalItems = new Array(size);
    for (i = 0; i < size; i++) {
      inst = this.stamp(null);
      // TODO(blasten):
      // First element child is item; Safari doesn't support children[0]
      // on a doc fragment. Test this to see if it still matters.
      physicalItems[i] = inst.root.querySelector('*');
      this._itemsParent.appendChild(inst.root);
    }
    return physicalItems;
  },

  _isClientFull: function() {
    return this._scrollBottom != 0 &&
        this._physicalBottom - 1 >= this._scrollBottom &&
        this._physicalTop <= this._scrollPosition;
  },

  /**
   * Increases the pool size.
   */
  _increasePoolIfNeeded: function(count) {
    var nextPhysicalCount = this._clamp(
        this._physicalCount + count,
        DEFAULT_PHYSICAL_COUNT,
        this._virtualCount - this._virtualStart);
    nextPhysicalCount = this._convertIndexToCompleteRow(nextPhysicalCount);
    if (this.grid) {
      var correction = nextPhysicalCount % this._itemsPerRow;
      if (correction && nextPhysicalCount - correction <= this._physicalCount) {
        nextPhysicalCount += this._itemsPerRow;
      }
      nextPhysicalCount -= correction;
    }
    var delta = nextPhysicalCount - this._physicalCount;
    var nextIncrease = Math.round(this._physicalCount * 0.5);

    if (delta < 0) {
      return;
    }
    if (delta > 0) {
      var ts = window.performance.now();
      // Concat arrays in place.
      [].push.apply(this._physicalItems, this._createPool(delta));
      // Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't
      // support it.
      for (var i = 0; i < delta; i++) {
        this._physicalSizes.push(0);
      }
      this._physicalCount = this._physicalCount + delta;
      // Update the physical start if it needs to preserve the model of the
      // focused item. In this situation, the focused item is currently rendered
      // and its model would have changed after increasing the pool if the
      // physical start remained unchanged.
      if (this._physicalStart > this._physicalEnd &&
          this._isIndexRendered(this._focusedVirtualIndex) &&
          this._getPhysicalIndex(this._focusedVirtualIndex) <
              this._physicalEnd) {
        this._physicalStart = this._physicalStart + delta;
      }
      this._update();
      this._templateCost = (window.performance.now() - ts) / delta;
      nextIncrease = Math.round(this._physicalCount * 0.5);
    }
    // The upper bounds is not fixed when dealing with a grid that doesn't
    // fill it's last row with the exact number of items per row.
    if (this._virtualEnd >= this._virtualCount - 1 || nextIncrease === 0) ; else if (!this._isClientFull()) {
      this._debounce(
          '_increasePoolIfNeeded',
          this._increasePoolIfNeeded.bind(this, nextIncrease),
          microTask);
    } else if (this._physicalSize < this._optPhysicalSize) {
      // Yield and increase the pool during idle time until the physical size is
      // optimal.
      this._debounce(
          '_increasePoolIfNeeded',
          this._increasePoolIfNeeded.bind(
              this,
              this._clamp(
                  Math.round(50 / this._templateCost), 1, nextIncrease)),
          idlePeriod);
    }
  },

  /**
   * Renders the a new list.
   */
  _render: function() {
    if (!this.isAttached || !this._isVisible) {
      return;
    }
    if (this._physicalCount !== 0) {
      var reusables = this._getReusables(true);
      this._physicalTop = reusables.physicalTop;
      this._virtualStart = this._virtualStart + reusables.indexes.length;
      this._physicalStart = this._physicalStart + reusables.indexes.length;
      this._update(reusables.indexes);
      this._update();
      this._increasePoolIfNeeded(0);
    } else if (this._virtualCount > 0) {
      // Initial render
      this.updateViewportBoundaries();
      this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT);
    }
  },

  /**
   * Templetizes the user template.
   */
  _ensureTemplatized: function() {
    if (this.ctor) {
      return;
    }
    this._userTemplate = /** @type {!HTMLTemplateElement} */ (
        this.queryEffectiveChildren('template'));
    if (!this._userTemplate) {
      console.warn('iron-list requires a template to be provided in light-dom');
    }
    var instanceProps = {};
    instanceProps.__key__ = true;
    instanceProps[this.as] = true;
    instanceProps[this.indexAs] = true;
    instanceProps[this.selectedAs] = true;
    instanceProps.tabIndex = true;
    this._instanceProps = instanceProps;
    this.templatize(this._userTemplate, this.mutableData);
  },

  _gridChanged: function(newGrid, oldGrid) {
    if (typeof oldGrid === 'undefined')
      return;
    this.notifyResize();
    flush();
    newGrid && this._updateGridMetrics();
  },

  /**
   * Finds and returns the focused element (both within self and children's
   * Shadow DOM).
   * @return {?HTMLElement}
   */
  _getFocusedElement: function() {
    function doSearch(node, query) {
      let result = null;
      let type = node.nodeType;
      if (type == Node.ELEMENT_NODE || type == Node.DOCUMENT_FRAGMENT_NODE)
        result = node.querySelector(query);
      if (result)
        return result;

      let child = node.firstChild;
      while (child !== null && result === null) {
        result = doSearch(child, query);
        child = child.nextSibling;
      }
      if (result)
        return result;

      const shadowRoot = node.shadowRoot;
      return shadowRoot ? doSearch(shadowRoot, query) : null;
    }

    // Find out if any of the items are focused first, and only search
    // recursively in the item that contains focus, to avoid a slow
    // search of the entire list.
    const focusWithin = doSearch(this, ':focus-within');
    return focusWithin ? doSearch(focusWithin, ':focus') : null;
  },

  /**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */
  _itemsChanged: function(change) {
    var rendering = /^items(\.splices){0,1}$/.test(change.path);
    var lastFocusedIndex, focusedElement;
    if (rendering && this.preserveFocus) {
      lastFocusedIndex = this._focusedVirtualIndex;
      focusedElement = this._getFocusedElement();
    }

    var preservingFocus = rendering && this.preserveFocus && focusedElement;

    if (change.path === 'items') {
      this._virtualStart = 0;
      this._physicalTop = 0;
      this._virtualCount = this.items ? this.items.length : 0;
      this._physicalIndexForKey = {};
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      this._physicalCount = this._physicalCount || 0;
      this._physicalItems = this._physicalItems || [];
      this._physicalSizes = this._physicalSizes || [];
      this._physicalStart = 0;
      if (this._scrollTop > this._scrollOffset && !preservingFocus) {
        this._resetScrollPosition(0);
      }
      this._removeFocusedItem();
      this._debounce('_render', this._render, animationFrame);
    } else if (change.path === 'items.splices') {
      this._adjustVirtualIndex(change.value.indexSplices);
      this._virtualCount = this.items ? this.items.length : 0;
      // Only blur if at least one item is added or removed.
      var itemAddedOrRemoved = change.value.indexSplices.some(function(splice) {
        return splice.addedCount > 0 || splice.removed.length > 0;
      });
      if (itemAddedOrRemoved) {
        // Only blur activeElement if it is a descendant of the list (#505,
        // #507).
        var activeElement = this._getActiveElement();
        if (this.contains(activeElement)) {
          activeElement.blur();
        }
      }
      // Render only if the affected index is rendered.
      var affectedIndexRendered =
          change.value.indexSplices.some(function(splice) {
            return splice.index + splice.addedCount >= this._virtualStart &&
                splice.index <= this._virtualEnd;
          }, this);
      if (!this._isClientFull() || affectedIndexRendered) {
        this._debounce('_render', this._render, animationFrame);
      }
    } else if (change.path !== 'items.length') {
      this._forwardItemPath(change.path, change.value);
    }

    // If the list was in focus when updated, preserve the focus on item.
    if (preservingFocus) {
      flush();
      focusedElement.blur();  // paper- elements breaks when focused twice.
      this._focusPhysicalItem(
          Math.min(this.items.length - 1, lastFocusedIndex));
      if (!this._isIndexVisible(this._focusedVirtualIndex)) {
        this.scrollToIndex(this._focusedVirtualIndex);
      }
    }
  },

  _forwardItemPath: function(path, value) {
    path = path.slice(6);  // 'items.'.length == 6
    var dot = path.indexOf('.');
    if (dot === -1) {
      dot = path.length;
    }
    var isIndexRendered;
    var pidx;
    var inst;
    var offscreenInstance = this.modelForElement(this._offscreenFocusedItem);
    var vidx = parseInt(path.substring(0, dot), 10);
    isIndexRendered = this._isIndexRendered(vidx);
    if (isIndexRendered) {
      pidx = this._getPhysicalIndex(vidx);
      inst = this.modelForElement(this._physicalItems[pidx]);
    } else if (offscreenInstance) {
      inst = offscreenInstance;
    }

    if (!inst || inst[this.indexAs] !== vidx) {
      return;
    }
    path = path.substring(dot + 1);
    path = this.as + (path ? '.' + path : '');
    inst._setPendingPropertyOrPath(path, value, false, true);
    inst._flushProperties && inst._flushProperties();
    // TODO(blasten): V1 doesn't do this and it's a bug
    if (isIndexRendered) {
      this._updateMetrics([pidx]);
      this._positionItems();
      this._updateScrollerSize();
    }
  },

  /**
   * @param {!Array<!Object>} splices
   */
  _adjustVirtualIndex: function(splices) {
    splices.forEach(function(splice) {
      // deselect removed items
      splice.removed.forEach(this._removeItem, this);
      // We only need to care about changes happening above the current position
      if (splice.index < this._virtualStart) {
        var delta = Math.max(
            splice.addedCount - splice.removed.length,
            splice.index - this._virtualStart);
        this._virtualStart = this._virtualStart + delta;
        if (this._focusedVirtualIndex >= 0) {
          this._focusedVirtualIndex = this._focusedVirtualIndex + delta;
        }
      }
    }, this);
  },

  _removeItem: function(item) {
    this.$.selector.deselect(item);
    // remove the current focused item
    if (this._focusedItem &&
        this.modelForElement(this._focusedItem)[this.as] === item) {
      this._removeFocusedItem();
    }
  },

  /**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical
   * indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */
  _iterateItems: function(fn, itemSet) {
    var pidx, vidx, rtn, i;

    if (arguments.length === 2 && itemSet) {
      for (i = 0; i < itemSet.length; i++) {
        pidx = itemSet[i];
        vidx = this._computeVidx(pidx);
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    } else {
      pidx = this._physicalStart;
      vidx = this._virtualStart;
      for (; pidx < this._physicalCount; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
      for (pidx = 0; pidx < this._physicalStart; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    }
  },

  /**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */
  _computeVidx: function(pidx) {
    if (pidx >= this._physicalStart) {
      return this._virtualStart + (pidx - this._physicalStart);
    }
    return this._virtualStart + (this._physicalCount - this._physicalStart) +
        pidx;
  },

  /**
   * Assigns the data models to a given set of items.
   * @param {!Array<number>=} itemSet
   */
  _assignModels: function(itemSet) {
    this._iterateItems(function(pidx, vidx) {
      var el = this._physicalItems[pidx];
      var item = this.items && this.items[vidx];
      if (item != null) {
        var inst = this.modelForElement(el);
        inst.__key__ = null;
        this._forwardProperty(inst, this.as, item);
        this._forwardProperty(
            inst, this.selectedAs, this.$.selector.isSelected(item));
        this._forwardProperty(inst, this.indexAs, vidx);
        this._forwardProperty(
            inst, 'tabIndex', this._focusedVirtualIndex === vidx ? 0 : -1);
        this._physicalIndexForKey[inst.__key__] = pidx;
        inst._flushProperties && inst._flushProperties(true);
        el.removeAttribute('hidden');
      } else {
        el.setAttribute('hidden', '');
      }
    }, itemSet);
  },

  /**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */
  _updateMetrics: function(itemSet) {
    // Make sure we distributed all the physical items
    // so we can measure them.
    flush();

    var newPhysicalSize = 0;
    var oldPhysicalSize = 0;
    var prevAvgCount = this._physicalAverageCount;
    var prevPhysicalAvg = this._physicalAverage;

    this._iterateItems(function(pidx, vidx) {
      oldPhysicalSize += this._physicalSizes[pidx];
      this._physicalSizes[pidx] = this._physicalItems[pidx].offsetHeight;
      newPhysicalSize += this._physicalSizes[pidx];
      this._physicalAverageCount += this._physicalSizes[pidx] ? 1 : 0;
    }, itemSet);

    if (this.grid) {
      this._updateGridMetrics();
      this._physicalSize =
          Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
    } else {
      oldPhysicalSize = (this._itemsPerRow === 1) ?
          oldPhysicalSize :
          Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
      this._physicalSize =
          this._physicalSize + newPhysicalSize - oldPhysicalSize;
      this._itemsPerRow = 1;
    }
    // Update the average if it measured something.
    if (this._physicalAverageCount !== prevAvgCount) {
      this._physicalAverage = Math.round(
          ((prevPhysicalAvg * prevAvgCount) + newPhysicalSize) /
          this._physicalAverageCount);
    }
  },

  _updateGridMetrics: function() {
    this._itemWidth = this._physicalCount > 0 ?
        this._physicalItems[0].getBoundingClientRect().width :
        200;
    this._rowHeight =
        this._physicalCount > 0 ? this._physicalItems[0].offsetHeight : 200;
    this._itemsPerRow = this._itemWidth ?
        Math.floor(this._viewportWidth / this._itemWidth) :
        this._itemsPerRow;
  },

  /**
   * Updates the position of the physical items.
   */
  _positionItems: function() {
    this._adjustScrollPosition();

    var y = this._physicalTop;

    if (this.grid) {
      var totalItemWidth = this._itemsPerRow * this._itemWidth;
      var rowOffset = (this._viewportWidth - totalItemWidth) / 2;

      this._iterateItems(function(pidx, vidx) {
        var modulus = vidx % this._itemsPerRow;
        var x = Math.floor((modulus * this._itemWidth) + rowOffset);
        if (this._isRTL) {
          x = x * -1;
        }
        this.translate3d(x + 'px', y + 'px', 0, this._physicalItems[pidx]);
        if (this._shouldRenderNextRow(vidx)) {
          y += this._rowHeight;
        }
      });
    } else {
      const order = [];
      this._iterateItems(function(pidx, vidx) {
        const item = this._physicalItems[pidx];
        this.translate3d(0, y + 'px', 0, item);
        y += this._physicalSizes[pidx];
        const itemId = item.id;
        if (itemId) {
          order.push(itemId);
        }
      });
      if (order.length) {
        this.setAttribute('aria-owns', order.join(' '));
      }
    }
  },

  _getPhysicalSizeIncrement: function(pidx) {
    if (!this.grid) {
      return this._physicalSizes[pidx];
    }
    if (this._computeVidx(pidx) % this._itemsPerRow !== this._itemsPerRow - 1) {
      return 0;
    }
    return this._rowHeight;
  },

  /**
   * Returns, based on the current index,
   * whether or not the next index will need
   * to be rendered on a new row.
   *
   * @param {number} vidx Virtual index
   * @return {boolean}
   */
  _shouldRenderNextRow: function(vidx) {
    return vidx % this._itemsPerRow === this._itemsPerRow - 1;
  },

  /**
   * Adjusts the scroll position when it was overestimated.
   */
  _adjustScrollPosition: function() {
    var deltaHeight = this._virtualStart === 0 ?
        this._physicalTop :
        Math.min(this._scrollPosition + this._physicalTop, 0);
    // Note: the delta can be positive or negative.
    if (deltaHeight !== 0) {
      this._physicalTop = this._physicalTop - deltaHeight;
      // This may be called outside of a scrollHandler, so use last cached position
      var scrollTop = this._scrollPosition;
      // juking scroll position during interial scrolling on iOS is no bueno
      if (!IOS_TOUCH_SCROLLING && scrollTop > 0) {
        this._resetScrollPosition(scrollTop - deltaHeight);
      }
    }
  },

  /**
   * Sets the position of the scroll.
   */
  _resetScrollPosition: function(pos) {
    if (this.scrollTarget && pos >= 0) {
      this._scrollTop = pos;
      this._scrollPosition = this._scrollTop;
    }
  },

  /**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */
  _updateScrollerSize: function(forceUpdate) {
    if (this.grid) {
      this._estScrollHeight = this._virtualRowCount * this._rowHeight;
    } else {
      this._estScrollHeight =
          (this._physicalBottom +
           Math.max(
               this._virtualCount - this._physicalCount - this._virtualStart,
               0) *
               this._physicalAverage);
    }
    forceUpdate = forceUpdate || this._scrollHeight === 0;
    forceUpdate = forceUpdate ||
        this._scrollPosition >= this._estScrollHeight - this._physicalSize;
    forceUpdate = forceUpdate ||
        this.grid && this.$.items.style.height < this._estScrollHeight;
    // Amortize height adjustment, so it won't trigger large repaints too often.
    if (forceUpdate ||
        Math.abs(this._estScrollHeight - this._scrollHeight) >=
            this._viewportHeight) {
      this.$.items.style.height = this._estScrollHeight + 'px';
      this._scrollHeight = this._estScrollHeight;
    }
  },

  /**
   * Scroll to a specific item in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToItem
   * @param {(Object)} item The item to be scrolled to
   */
  scrollToItem: function(item) {
    return this.scrollToIndex(this.items.indexOf(item));
  },

  /**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */
  scrollToIndex: function(idx) {
    if (typeof idx !== 'number' || idx < 0 || idx > this.items.length - 1) {
      return;
    }
    flush();
    // Items should have been rendered prior scrolling to an index.
    if (this._physicalCount === 0) {
      return;
    }
    idx = this._clamp(idx, 0, this._virtualCount - 1);
    // Update the virtual start only when needed.
    if (!this._isIndexRendered(idx) || idx >= this._maxVirtualStart) {
      this._virtualStart =
          this.grid ? (idx - this._itemsPerRow * 2) : (idx - 1);
    }
    this._manageFocus();
    this._assignModels();
    this._updateMetrics();
    // Estimate new physical offset.
    this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) *
        this._physicalAverage;

    var currentTopItem = this._physicalStart;
    var currentVirtualItem = this._virtualStart;
    var targetOffsetTop = 0;
    var hiddenContentSize = this._hiddenContentSize;
    // scroll to the item as much as we can.
    while (currentVirtualItem < idx && targetOffsetTop <= hiddenContentSize) {
      targetOffsetTop =
          targetOffsetTop + this._getPhysicalSizeIncrement(currentTopItem);
      currentTopItem = (currentTopItem + 1) % this._physicalCount;
      currentVirtualItem++;
    }
    this._updateScrollerSize(true);
    this._positionItems();
    this._resetScrollPosition(
        this._physicalTop + this._scrollOffset + targetOffsetTop);
    this._increasePoolIfNeeded(0);
    // clear cached visible index.
    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null;
  },

  /**
   * Reset the physical average and the average count.
   */
  _resetAverage: function() {
    this._physicalAverage = 0;
    this._physicalAverageCount = 0;
  },

  /**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */
  _resizeHandler: function() {
    this._debounce('_render', function() {
      // clear cached visible index.
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      if (this._isVisible) {
        this.updateViewportBoundaries();
        // Reinstall the scroll event listener.
        this.toggleScrollListener(true);
        this._resetAverage();
        this._render();
      } else {
        // Uninstall the scroll event listener.
        this.toggleScrollListener(false);
      }
    }, animationFrame);
  },

  /**
   * Selects the given item.
   *
   * @method selectItem
   * @param {Object} item The item instance.
   */
  selectItem: function(item) {
    return this.selectIndex(this.items.indexOf(item));
  },

  /**
   * Selects the item at the given index in the items array.
   *
   * @method selectIndex
   * @param {number} index The index of the item in the items array.
   */
  selectIndex: function(index) {
    if (index < 0 || index >= this._virtualCount) {
      return;
    }
    if (!this.multiSelection && this.selectedItem) {
      this.clearSelection();
    }
    if (this._isIndexRendered(index)) {
      var model = this.modelForElement(
          this._physicalItems[this._getPhysicalIndex(index)]);
      if (model) {
        model[this.selectedAs] = true;
      }
      this.updateSizeForIndex(index);
    }
    this.$.selector.selectIndex(index);
  },

  /**
   * Deselects the given item.
   *
   * @method deselect
   * @param {Object} item The item instance.
   */
  deselectItem: function(item) {
    return this.deselectIndex(this.items.indexOf(item));
  },

  /**
   * Deselects the item at the given index in the items array.
   *
   * @method deselectIndex
   * @param {number} index The index of the item in the items array.
   */
  deselectIndex: function(index) {
    if (index < 0 || index >= this._virtualCount) {
      return;
    }
    if (this._isIndexRendered(index)) {
      var model = this.modelForElement(
          this._physicalItems[this._getPhysicalIndex(index)]);
      model[this.selectedAs] = false;
      this.updateSizeForIndex(index);
    }
    this.$.selector.deselectIndex(index);
  },

  /**
   * Selects or deselects a given item depending on whether the item
   * has already been selected.
   *
   * @method toggleSelectionForItem
   * @param {Object} item The item object.
   */
  toggleSelectionForItem: function(item) {
    return this.toggleSelectionForIndex(this.items.indexOf(item));
  },

  /**
   * Selects or deselects the item at the given index in the items array
   * depending on whether the item has already been selected.
   *
   * @method toggleSelectionForIndex
   * @param {number} index The index of the item in the items array.
   */
  toggleSelectionForIndex: function(index) {
    var isSelected = this.$.selector.isIndexSelected ?
        this.$.selector.isIndexSelected(index) :
        this.$.selector.isSelected(this.items[index]);
    isSelected ? this.deselectIndex(index) : this.selectIndex(index);
  },

  /**
   * Clears the current selection in the list.
   *
   * @method clearSelection
   */
  clearSelection: function() {
    this._iterateItems(function(pidx, vidx) {
      this.modelForElement(this._physicalItems[pidx])[this.selectedAs] = false;
    });
    this.$.selector.clearSelection();
  },

  /**
   * Add an event listener to `tap` if `selectionEnabled` is true,
   * it will remove the listener otherwise.
   */
  _selectionEnabledChanged: function(selectionEnabled) {
    var handler = selectionEnabled ? this.listen : this.unlisten;
    handler.call(this, this, 'tap', '_selectionHandler');
  },

  /**
   * Select an item from an event object.
   */
  _selectionHandler: function(e) {
    var model = this.modelForElement(e.target);
    if (!model) {
      return;
    }
    var modelTabIndex, activeElTabIndex;
    var target = dom(e).path[0];
    var activeEl = this._getActiveElement();
    var physicalItem =
        this._physicalItems[this._getPhysicalIndex(model[this.indexAs])];
    // Safari does not focus certain form controls via mouse
    // https://bugs.webkit.org/show_bug.cgi?id=118043
    if (target.localName === 'input' || target.localName === 'button' ||
        target.localName === 'select') {
      return;
    }
    // Set a temporary tabindex
    modelTabIndex = model.tabIndex;
    model.tabIndex = SECRET_TABINDEX;
    activeElTabIndex = activeEl ? activeEl.tabIndex : -1;
    model.tabIndex = modelTabIndex;
    // Only select the item if the tap wasn't on a focusable child
    // or the element bound to `tabIndex`
    if (activeEl && physicalItem !== activeEl &&
        physicalItem.contains(activeEl) &&
        activeElTabIndex !== SECRET_TABINDEX) {
      return;
    }
    this.toggleSelectionForItem(model[this.as]);
  },

  _multiSelectionChanged: function(multiSelection) {
    this.clearSelection();
    this.$.selector.multi = multiSelection;
  },

  /**
   * Updates the size of a given list item.
   *
   * @method updateSizeForItem
   * @param {Object} item The item instance.
   */
  updateSizeForItem: function(item) {
    return this.updateSizeForIndex(this.items.indexOf(item));
  },

  /**
   * Updates the size of the item at the given index in the items array.
   *
   * @method updateSizeForIndex
   * @param {number} index The index of the item in the items array.
   */
  updateSizeForIndex: function(index) {
    if (!this._isIndexRendered(index)) {
      return null;
    }
    this._updateMetrics([this._getPhysicalIndex(index)]);
    this._positionItems();
    return null;
  },

  /**
   * Creates a temporary backfill item in the rendered pool of physical items
   * to replace the main focused item. The focused item has tabIndex = 0
   * and might be currently focused by the user.
   *
   * This dynamic replacement helps to preserve the focus state.
   */
  _manageFocus: function() {
    var fidx = this._focusedVirtualIndex;

    if (fidx >= 0 && fidx < this._virtualCount) {
      // if it's a valid index, check if that index is rendered
      // in a physical item.
      if (this._isIndexRendered(fidx)) {
        this._restoreFocusedItem();
      } else {
        this._createFocusBackfillItem();
      }
    } else if (this._virtualCount > 0 && this._physicalCount > 0) {
      // otherwise, assign the initial focused index.
      this._focusedPhysicalIndex = this._physicalStart;
      this._focusedVirtualIndex = this._virtualStart;
      this._focusedItem = this._physicalItems[this._physicalStart];
    }
  },

  /**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */
  _convertIndexToCompleteRow: function(idx) {
    // when grid == false _itemPerRow can be unset.
    this._itemsPerRow = this._itemsPerRow || 1;
    return this.grid ? Math.ceil(idx / this._itemsPerRow) * this._itemsPerRow :
                       idx;
  },

  _isIndexRendered: function(idx) {
    return idx >= this._virtualStart && idx <= this._virtualEnd;
  },

  _isIndexVisible: function(idx) {
    return idx >= this.firstVisibleIndex && idx <= this.lastVisibleIndex;
  },

  _getPhysicalIndex: function(vidx) {
    return (this._physicalStart + (vidx - this._virtualStart)) %
        this._physicalCount;
  },

  focusItem: function(idx) {
    this._focusPhysicalItem(idx);
  },

  _focusPhysicalItem: function(idx) {
    if (idx < 0 || idx >= this._virtualCount) {
      return;
    }
    this._restoreFocusedItem();
    // scroll to index to make sure it's rendered
    if (!this._isIndexRendered(idx)) {
      this.scrollToIndex(idx);
    }
    var physicalItem = this._physicalItems[this._getPhysicalIndex(idx)];
    var model = this.modelForElement(physicalItem);
    var focusable;
    // set a secret tab index
    model.tabIndex = SECRET_TABINDEX;
    // check if focusable element is the physical item
    if (physicalItem.tabIndex === SECRET_TABINDEX) {
      focusable = physicalItem;
    }
    // search for the element which tabindex is bound to the secret tab index
    if (!focusable) {
      focusable = dom(physicalItem)
                      .querySelector('[tabindex="' + SECRET_TABINDEX + '"]');
    }
    // restore the tab index
    model.tabIndex = 0;
    // focus the focusable element
    this._focusedVirtualIndex = idx;
    focusable && focusable.focus();
  },

  _removeFocusedItem: function() {
    if (this._offscreenFocusedItem) {
      this._itemsParent.removeChild(this._offscreenFocusedItem);
    }
    this._offscreenFocusedItem = null;
    this._focusBackfillItem = null;
    this._focusedItem = null;
    this._focusedVirtualIndex = -1;
    this._focusedPhysicalIndex = -1;
  },

  _createFocusBackfillItem: function() {
    var fpidx = this._focusedPhysicalIndex;

    if (this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
      return;
    }
    if (!this._focusBackfillItem) {
      // Create a physical item.
      var inst = this.stamp(null);
      this._focusBackfillItem =
          /** @type {!HTMLElement} */ (inst.root.querySelector('*'));
      this._itemsParent.appendChild(inst.root);
    }
    // Set the offcreen focused physical item.
    this._offscreenFocusedItem = this._physicalItems[fpidx];
    this.modelForElement(this._offscreenFocusedItem).tabIndex = 0;
    this._physicalItems[fpidx] = this._focusBackfillItem;
    this._focusedPhysicalIndex = fpidx;
    // Hide the focused physical.
    this.translate3d(0, HIDDEN_Y, 0, this._offscreenFocusedItem);
  },

  _restoreFocusedItem: function() {
    if (!this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
      return;
    }
    // Assign models to the focused index.
    this._assignModels();
    // Get the new physical index for the focused index.
    var fpidx = this._focusedPhysicalIndex =
        this._getPhysicalIndex(this._focusedVirtualIndex);

    var onScreenItem = this._physicalItems[fpidx];
    if (!onScreenItem) {
      return;
    }
    var onScreenInstance = this.modelForElement(onScreenItem);
    var offScreenInstance = this.modelForElement(this._offscreenFocusedItem);
    // Restores the physical item only when it has the same model
    // as the offscreen one. Use key for comparison since users can set
    // a new item via set('items.idx').
    if (onScreenInstance[this.as] === offScreenInstance[this.as]) {
      // Flip the focus backfill.
      this._focusBackfillItem = onScreenItem;
      onScreenInstance.tabIndex = -1;
      // Restore the focused physical item.
      this._physicalItems[fpidx] = this._offscreenFocusedItem;
      // Hide the physical item that backfills.
      this.translate3d(0, HIDDEN_Y, 0, this._focusBackfillItem);
    } else {
      this._removeFocusedItem();
      this._focusBackfillItem = null;
    }
    this._offscreenFocusedItem = null;
  },

  _didFocus: function(e) {
    var targetModel = this.modelForElement(e.target);
    var focusedModel = this.modelForElement(this._focusedItem);
    var hasOffscreenFocusedItem = this._offscreenFocusedItem !== null;
    var fidx = this._focusedVirtualIndex;
    if (!targetModel) {
      return;
    }
    if (focusedModel === targetModel) {
      // If the user focused the same item, then bring it into view if it's not
      // visible.
      if (!this._isIndexVisible(fidx)) {
        this.scrollToIndex(fidx);
      }
    } else {
      this._restoreFocusedItem();
      // Restore tabIndex for the currently focused item.
      if (focusedModel) {
        focusedModel.tabIndex = -1;
      }
      // Set the tabIndex for the next focused item.
      targetModel.tabIndex = 0;
      fidx = targetModel[this.indexAs];
      this._focusedVirtualIndex = fidx;
      this._focusedPhysicalIndex = this._getPhysicalIndex(fidx);
      this._focusedItem = this._physicalItems[this._focusedPhysicalIndex];
      if (hasOffscreenFocusedItem && !this._offscreenFocusedItem) {
        this._update();
      }
    }
  },

  _keydownHandler: function(e) {
    switch (e.keyCode) {
      case /* ARROW_DOWN */ 40:
        if (this._focusedVirtualIndex < this._virtualCount - 1)
          e.preventDefault();
        this._focusPhysicalItem(
            this._focusedVirtualIndex + (this.grid ? this._itemsPerRow : 1));
        break;
      case /* ARROW_RIGHT */ 39:
        if (this.grid)
          this._focusPhysicalItem(
              this._focusedVirtualIndex + (this._isRTL ? -1 : 1));
        break;
      case /* ARROW_UP */ 38:
        if (this._focusedVirtualIndex > 0)
          e.preventDefault();
        this._focusPhysicalItem(
            this._focusedVirtualIndex - (this.grid ? this._itemsPerRow : 1));
        break;
      case /* ARROW_LEFT */ 37:
        if (this.grid)
          this._focusPhysicalItem(
              this._focusedVirtualIndex + (this._isRTL ? 1 : -1));
        break;
      case /* ENTER */ 13:
        this._focusPhysicalItem(this._focusedVirtualIndex);
        if (this.selectionEnabled)
          this._selectionHandler(e);
        break;
    }
  },

  _clamp: function(v, min, max) {
    return Math.min(max, Math.max(min, v));
  },

  _debounce: function(name, cb, asyncModule) {
    this._debouncers = this._debouncers || {};
    this._debouncers[name] =
        Debouncer.debounce(this._debouncers[name], asyncModule, cb.bind(this));
    enqueueDebouncer(this._debouncers[name]);
  },

  _forwardProperty: function(inst, name, value) {
    inst._setPendingProperty(name, value);
  },

  /* Templatizer bindings for v2 */
  _forwardHostPropV2: function(prop, value) {
    (this._physicalItems || [])
        .concat([this._offscreenFocusedItem, this._focusBackfillItem])
        .forEach(function(item) {
          if (item) {
            this.modelForElement(item).forwardHostProp(prop, value);
          }
        }, this);
  },

  _notifyInstancePropV2: function(inst, prop, value) {
    if (matches$1(this.as, prop)) {
      var idx = inst[this.indexAs];
      if (prop == this.as) {
        this.items[idx] = value;
      }
      this.notifyPath(translate(this.as, 'items.' + idx, prop), value);
    }
  },

  /* Templatizer bindings for v1 */
  _getStampedChildren: function() {
    return this._physicalItems;
  },

  _forwardInstancePath: function(inst, path, value) {
    if (path.indexOf(this.as + '.') === 0) {
      this.notifyPath(
          'items.' + inst.__key__ + '.' + path.slice(this.as.length + 1),
          value);
    }
  },

  _forwardParentPath: function(path, value) {
    (this._physicalItems || [])
        .concat([this._offscreenFocusedItem, this._focusBackfillItem])
        .forEach(function(item) {
          if (item) {
            this.modelForElement(item).notifyPath(path, value);
          }
        }, this);
  },

  _forwardParentProp: function(prop, value) {
    (this._physicalItems || [])
        .concat([this._offscreenFocusedItem, this._focusBackfillItem])
        .forEach(function(item) {
          if (item) {
            this.modelForElement(item)[prop] = value;
          }
        }, this);
  },

  /* Gets the activeElement of the shadow root/host that contains the list. */
  _getActiveElement: function() {
    var itemsHost = this._itemsParent.node.domHost;
    return dom(itemsHost ? itemsHost.root : document).activeElement;
  }
});

/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
`iron-media-query` can be used to data bind to a CSS media query.
The `query` property is a bare CSS media query.
The `query-matches` property is a boolean representing whether the page matches
that media query.

Example:

```html
<iron-media-query query="(min-width: 600px)" query-matches="{{queryMatches}}">
</iron-media-query>
```

@group Iron Elements
@demo demo/index.html
@hero hero.svg
@element iron-media-query
*/
Polymer({

  is: 'iron-media-query',

  properties: {

    /**
     * The Boolean return value of the media query.
     */
    queryMatches: {type: Boolean, value: false, readOnly: true, notify: true},

    /**
     * The CSS media query to evaluate.
     */
    query: {type: String, observer: 'queryChanged'},

    /**
     * If true, the query attribute is assumed to be a complete media query
     * string rather than a single media feature.
     */
    full: {type: Boolean, value: false},

    /**
     * @type {function(MediaQueryList)}
     */
    _boundMQHandler: {
      value: function() {
        return this.queryHandler.bind(this);
      }
    },

    /**
     * @type {MediaQueryList}
     */
    _mq: {value: null}
  },

  attached: function() {
    this.style.display = 'none';
    this.queryChanged();
  },

  detached: function() {
    this._remove();
  },

  _add: function() {
    if (this._mq) {
      this._mq.addListener(this._boundMQHandler);
    }
  },

  _remove: function() {
    if (this._mq) {
      this._mq.removeListener(this._boundMQHandler);
    }
    this._mq = null;
  },

  queryChanged: function() {
    this._remove();
    var query = this.query;
    if (!query) {
      return;
    }
    if (!this.full && query[0] !== '(') {
      query = '(' + query + ')';
    }
    this._mq = window.matchMedia(query);
    this._add();
    this.queryHandler(this._mq);
  },

  queryHandler: function(mq) {
    this._setQueryMatches(mq.matches);
  }

});

const styleMod$1 = document.createElement('dom-module');
styleMod$1.appendChild(html `
  <template>
    <style include="cr-hidden-style">
:host{align-items:center;cursor:default;display:flex;font-size:calc(12/13 * 1em);min-height:var(--destination-item-height);opacity:.87;padding-inline-end:2px;padding-inline-start:0;vertical-align:middle}:host>*{align-items:center;color:var(--cr-secondary-text-color);font-size:calc(10/12 * 1em);overflow:hidden;text-overflow:ellipsis;vertical-align:middle;white-space:nowrap}:host>span{margin-inline-start:1em}iron-icon{--icon-margin:calc((var(--search-icon-size) - var(--iron-icon-width))/2);fill:var(--google-grey-600);flex:0;height:var(--iron-icon-height);margin-inline-end:var(--icon-margin);margin-inline-start:var(--icon-margin);min-width:var(--iron-icon-width);transition:opacity 150ms}@media (prefers-color-scheme:dark){iron-icon{fill:var(--google-grey-500)}}:host .name{color:var(--cr-primary-text-color);font-size:1em;margin-inline-start:0;padding-inline-start:8px}.extension-controlled-indicator{display:flex;flex:1;justify-content:flex-end;min-width:150px;padding-inline-end:8px}.extension-icon{height:24px;margin-inline-start:1em;width:24px}
    </style>
  </template>
`.content);
styleMod$1.register('destination-list-item-style');

function getTemplate$a() {
    return html `<!--_html_template_start_--><style include="destination-list-item-style">.configuring-failed-text{color:var(--google-red-600);font-style:italic}:host([is-destination-cros-local_]) .connection-status,:host([is-destination-cros-local_]) .connection-status.status-red{color:var(--error-status-alert)}:host([is-destination-cros-local_]) .connection-status.status-orange{color:var(--error-status-warning)}</style>
<iron-media-query query="(prefers-color-scheme: dark)" query-matches="{{isDarkModeActive_}}">
</iron-media-query>
<iron-icon icon="[[destinationIcon_]]"></iron-icon>
<span class="name searchable">[[destination.displayName]]</span>
<span class="search-hint searchable" hidden="[[!searchHint_]]">
  [[searchHint_]]
</span>
<span class$="[[computeStatusClass_(destination.printerStatusReason)]]" hidden="[[!statusText_]]">
  [[statusText_]]
</span>
<span class="extension-controlled-indicator" hidden$="[[!destination.isExtension]]">
  <span class="extension-name searchable">
    [[destination.extensionName]]
  </span>
  <span class="extension-icon" role="button" tabindex="0" title="[[getExtensionPrinterTooltip_(destination)]]"></span>
</span>
<span class="configuring-in-progress-text" hidden$="[[!checkConfigurationStatus_(statusEnum_.IN_PROGRESS,
                                        configurationStatus_)]]">
  $i18n{configuringInProgressText}
  <span class="configuring-text-jumping-dots">
    <span>.</span><span>.</span><span>.</span>
  </span>
</span>
<span class="configuring-failed-text" hidden$="[[!checkConfigurationStatus_(statusEnum_.FAILED,
                                        configurationStatus_)]]">
  $i18n{configuringFailedText}
</span>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var DestinationConfigStatus;
(function (DestinationConfigStatus) {
    DestinationConfigStatus[DestinationConfigStatus["IDLE"] = 0] = "IDLE";
    DestinationConfigStatus[DestinationConfigStatus["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    DestinationConfigStatus[DestinationConfigStatus["FAILED"] = 2] = "FAILED";
})(DestinationConfigStatus || (DestinationConfigStatus = {}));
const PrintPreviewDestinationListItemElementBase = I18nMixin(PolymerElement);
class PrintPreviewDestinationListItemElement extends PrintPreviewDestinationListItemElementBase {
    constructor() {
        super(...arguments);
        this.highlights_ = [];
    }
    static get is() {
        return 'print-preview-destination-list-item';
    }
    static get template() {
        return getTemplate$a();
    }
    static get properties() {
        return {
            destination: Object,
            searchQuery: Object,
            searchHint_: String,
            destinationIcon_: {
                type: String,
                computed: 'computeDestinationIcon_(destination, ' +
                    'destination.printerStatusReason)',
            },
            statusText_: {
                type: String,
                computed: 'computeStatusText_(destination, destination.printerStatusReason,' +
                    'configurationStatus_)',
            },
            // Holds status of iron-media-query (prefers-color-scheme: dark).
            isDarkModeActive_: Boolean,
            isDestinationCrosLocal_: {
                type: Boolean,
                computed: 'computeIsDestinationCrosLocal_(destination)',
                reflectToAttribute: true,
            },
            configurationStatus_: {
                type: Number,
                value: DestinationConfigStatus.IDLE,
            },
            /**
             * Mirroring the enum so that it can be used from HTML bindings.
             */
            statusEnum_: {
                type: Object,
                value: DestinationConfigStatus,
            },
        };
    }
    static get observers() {
        return [
            'onDestinationPropertiesChange_(' +
                'destination.displayName, destination.isExtension)',
            'updateHighlightsAndHint_(destination, searchQuery)',
            'requestPrinterStatus_(destination.key)',
        ];
    }
    onDestinationPropertiesChange_() {
        this.title = this.destination.displayName;
        if (this.destination.isExtension) {
            const icon = this.shadowRoot.querySelector('.extension-icon');
            icon.style.backgroundImage = 'image-set(' +
                'url(chrome://extension-icon/' + this.destination.extensionId +
                '/24/1) 1x,' +
                'url(chrome://extension-icon/' + this.destination.extensionId +
                '/48/1) 2x)';
        }
    }
    updateHighlightsAndHint_() {
        this.updateSearchHint_();
        removeHighlights(this.highlights_);
        this.highlights_ = updateHighlights(this, this.searchQuery, new Map());
    }
    updateSearchHint_() {
        const matches = !this.searchQuery ?
            [] :
            this.destination.extraPropertiesToMatch.filter(p => p.match(this.searchQuery));
        this.searchHint_ = matches.length === 0 ?
            (this.destination.extraPropertiesToMatch.find(p => !!p) || '') :
            matches.join(' ');
    }
    getExtensionPrinterTooltip_() {
        if (!this.destination.isExtension) {
            return '';
        }
        return loadTimeData.getStringF('extensionDestinationIconTooltip', this.destination.extensionName);
    }
    /**
     * Called if the printer configuration request is accepted. Show the waiting
     * message to the user as the configuration might take longer than expected.
     */
    onConfigureRequestAccepted() {
        // It must be a Chrome OS CUPS printer which hasn't been set up before.
        assert(this.destination.origin === DestinationOrigin.CROS &&
            !this.destination.capabilities);
        this.configurationStatus_ = DestinationConfigStatus.IN_PROGRESS;
    }
    /**
     * Called when the printer configuration request completes.
     * @param success Whether configuration was successful.
     */
    onConfigureComplete(success) {
        this.configurationStatus_ =
            success ? DestinationConfigStatus.IDLE : DestinationConfigStatus.FAILED;
    }
    /**
     * @return Whether the current configuration status is |status|.
     */
    checkConfigurationStatus_(status) {
        return this.configurationStatus_ === status;
    }
    /**
     * @return If the destination is a local CrOS printer, this returns
     *    the error text associated with the printer status.
     */
    computeStatusText_() {
        if (!this.destination ||
            this.destination.origin !== DestinationOrigin.CROS) {
            return '';
        }
        // Don't show status text when destination is configuring.
        if (this.configurationStatus_ !== DestinationConfigStatus.IDLE) {
            return '';
        }
        const printerStatusReason = this.destination.printerStatusReason;
        if (printerStatusReason === null ||
            printerStatusReason === PrinterStatusReason.NO_ERROR ||
            printerStatusReason === PrinterStatusReason.UNKNOWN_REASON) {
            return '';
        }
        const errorStringKey = ERROR_STRING_KEY_MAP.get(printerStatusReason);
        return errorStringKey ? this.i18n(errorStringKey) : '';
    }
    computeDestinationIcon_() {
        if (!this.destination) {
            return '';
        }
        if (this.destination.origin === DestinationOrigin.CROS) {
            return getPrinterStatusIcon(this.destination.printerStatusReason, this.destination.isEnterprisePrinter, this.isDarkModeActive_);
        }
        return this.destination.icon;
    }
    computeStatusClass_() {
        const statusClass = 'connection-status';
        if (!this.destination || this.destination.printerStatusReason === null) {
            return statusClass;
        }
        return `${statusClass} ${getStatusTextColorClass(this.destination.printerStatusReason)}`;
    }
    /**
     * True when the destination is a CrOS local printer.
     */
    computeIsDestinationCrosLocal_() {
        return this.destination &&
            this.destination.origin === DestinationOrigin.CROS;
    }
    requestPrinterStatus_() {
        // Requesting printer status only allowed for local CrOS printers.
        if (this.destination.origin !== DestinationOrigin.CROS) {
            return;
        }
        this.destination.requestPrinterStatus().then(destinationKey => this.onPrinterStatusReceived_(destinationKey));
    }
    onPrinterStatusReceived_(destinationKey) {
        if (this.destination.key === destinationKey) {
            // Notify printerStatusReason to trigger icon and status text update.
            this.notifyPath(`destination.printerStatusReason`);
        }
    }
}
customElements.define(PrintPreviewDestinationListItemElement.is, PrintPreviewDestinationListItemElement);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview |ListPropertyUpdateMixin| is used to update an existing
 * polymer list property given the list after all the edits were made while
 * maintaining the reference to the original list. This allows
 * dom-repeat/iron-list elements bound to this list property to not fully
 * re-rendered from scratch.
 *
 * The minimal splices needed to transform the original list to the edited list
 * are calculated using |Polymer.ArraySplice.calculateSplices|. All the edits
 * are then applied to the original list. Once completed, a single notification
 * containing information about all the edits is sent to the polyer object.
 */
const ListPropertyUpdateMixin = dedupingMixin((superClass) => {
    class ListPropertyUpdateMixin extends superClass {
        updateList(propertyPath, identityGetter, updatedList, identityBasedUpdate = false) {
            const list = this.get(propertyPath);
            const splices = calculateSplices(updatedList.map(item => identityGetter(item)), list.map(identityGetter));
            splices.forEach(splice => {
                const index = splice.index;
                const deleteCount = splice.removed.length;
                // Transform splices to the expected format of notifySplices().
                // Convert !Array<string> to !Array<!Object>.
                splice.removed = list.slice(index, index + deleteCount);
                splice.object = list;
                splice.type = 'splice';
                const added = updatedList.slice(index, index + splice.addedCount);
                const spliceParams = [index, deleteCount].concat(added);
                list.splice.apply(list, spliceParams);
            });
            let updated = splices.length > 0;
            if (!identityBasedUpdate) {
                list.forEach((item, index) => {
                    const updatedItem = updatedList[index];
                    if (JSON.stringify(item) !== JSON.stringify(updatedItem)) {
                        this.set([propertyPath, index], updatedItem);
                        updated = true;
                    }
                });
            }
            if (splices.length > 0) {
                this.notifySplices(propertyPath, splices);
            }
            return updated;
        }
    }
    return ListPropertyUpdateMixin;
});

function getTemplate$9() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style throbber">:host{display:flex;flex-direction:column;height:100%;overflow:hidden;user-select:none}#list{min-height:var(--destination-item-height)}.throbber-container{display:flex;margin-inline-start:calc((var(--search-icon-size) - var(--throbber-size))/ 2);min-height:var(--destination-item-height)}.throbber{align-self:center}.no-destinations-message{padding-bottom:8px;padding-inline-start:18px;padding-top:8px}:not(.moving).list-item{transition:background-color 150ms}.list-item:focus,.list-item:hover{background-color:#e4ecf7}@media (prefers-color-scheme:dark){.list-item:-webkit-any(:hover,:focus){background-color:var(--cr-menu-background-focus-color)}}.list-item:focus{outline:0}</style>
<div class="no-destinations-message" hidden$="[[hasDestinations_]]">
  $i18n{noDestinationsMessage}
</div>
<iron-list id="list" items="[[matchingDestinations_]]" role="grid" aria-rowcount$="[[matchingDestinations_.length]]" aria-label="$i18n{printDestinationsTitle}" hidden$="[[hideList_]]">
  <template>
    <div role="row" id$="destination_[[index]]" aria-rowindex$="[[getAriaRowindex_(index)]]">
      <print-preview-destination-list-item class="list-item" search-query="[[searchQuery]]" destination="[[item]]" on-click="onDestinationSelected_" on-keydown="onKeydown_" role="gridcell" tabindex$="[[tabIndex]]" iron-list-tab-index="[[tabIndex]]">
      </print-preview-destination-list-item>
    </div>
  </template>
</iron-list>
<div class="throbber-container" hidden$="[[throbberHidden_]]">
  <div class="throbber"></div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DESTINATION_ITEM_HEIGHT = 32;
const PrintPreviewDestinationListElementBase = ListPropertyUpdateMixin(PolymerElement);
class PrintPreviewDestinationListElement extends PrintPreviewDestinationListElementBase {
    constructor() {
        super(...arguments);
        this.boundUpdateHeight_ = null;
        // 
    }
    static get is() {
        return 'print-preview-destination-list';
    }
    static get template() {
        return getTemplate$9();
    }
    static get properties() {
        return {
            destinations: Array,
            searchQuery: Object,
            loadingDestinations: {
                type: Boolean,
                value: false,
            },
            matchingDestinations_: {
                type: Array,
                value: () => [],
            },
            hasDestinations_: {
                type: Boolean,
                value: true,
            },
            throbberHidden_: {
                type: Boolean,
                value: false,
            },
            hideList_: {
                type: Boolean,
                value: false,
            },
        };
    }
    static get observers() {
        return [
            'updateMatchingDestinations_(' +
                'destinations.*, searchQuery, loadingDestinations)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.boundUpdateHeight_ = () => this.updateHeight_();
        window.addEventListener('resize', this.boundUpdateHeight_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        window.removeEventListener('resize', this.boundUpdateHeight_);
        this.boundUpdateHeight_ = null;
    }
    /**
     * This is a workaround to ensure that the iron-list correctly updates the
     * displayed destination information when the elements in the
     * |matchingDestinations_| array change, instead of using stale information
     * (a known iron-list issue). The event needs to be fired while the list is
     * visible, so firing it immediately when the change occurs does not always
     * work.
     */
    forceIronResize_() {
        this.$.list.fire('iron-resize');
    }
    updateHeight_(numDestinations) {
        const count = numDestinations === undefined ?
            this.matchingDestinations_.length :
            numDestinations;
        const maxDisplayedItems = this.offsetHeight / DESTINATION_ITEM_HEIGHT;
        const isListFullHeight = maxDisplayedItems <= count;
        // Update the throbber and "No destinations" message.
        this.hasDestinations_ = count > 0 || this.loadingDestinations;
        this.throbberHidden_ =
            !this.loadingDestinations || isListFullHeight || !this.hasDestinations_;
        this.hideList_ = count === 0;
        if (this.hideList_) {
            return;
        }
        const listHeight = isListFullHeight ? this.offsetHeight : count * DESTINATION_ITEM_HEIGHT;
        this.$.list.style.height = listHeight > DESTINATION_ITEM_HEIGHT ?
            `${listHeight}px` :
            `${DESTINATION_ITEM_HEIGHT}px`;
    }
    updateMatchingDestinations_() {
        if (this.destinations === undefined) {
            return;
        }
        const matchingDestinations = this.searchQuery ?
            this.destinations.filter(d => d.matches(this.searchQuery)) :
            this.destinations.slice();
        // Update the height before updating the list.
        this.updateHeight_(matchingDestinations.length);
        this.updateList('matchingDestinations_', destination => destination.key, matchingDestinations);
        this.forceIronResize_();
    }
    onKeydown_(e) {
        if (e.key === 'Enter') {
            this.onDestinationSelected_(e);
            e.stopPropagation();
        }
    }
    /**
     * @param e Event containing the destination that was selected.
     */
    onDestinationSelected_(e) {
        if (e.composedPath()[0].tagName === 'A') {
            return;
        }
        this.dispatchEvent(new CustomEvent('destination-selected', { bubbles: true, composed: true, detail: e.target }));
    }
    /**
     * Returns a 1-based index for aria-rowindex.
     */
    getAriaRowindex_(index) {
        return index + 1;
    }
    // 
    updatePrinterStatusIcon(destinationKey) {
        const index = this.matchingDestinations_.findIndex(destination => destination.key === destinationKey);
        if (index === -1) {
            return;
        }
        this.notifyPath(`matchingDestinations_.${index}.printerStatusReason`);
    }
}
customElements.define(PrintPreviewDestinationListElement.is, PrintPreviewDestinationListElement);

function getTemplate$8() {
    return html `<!--_html_template_start_--><style include="print-preview-shared">.container{align-items:center;display:flex;flex-direction:column;gap:16px;justify-content:center;margin-block:16px 0;margin-inline:auto;text-align:center;width:368px}.message-container{color:var(--google-grey-700);display:flex;flex-direction:column;gap:8px}.message-detail{font:var(--cros-body-1-font);margin-block:0}.message-heading{font:var(--cros-display-7-font);margin-block:0}cr-button{font:var(--cros-button-2-font)}iron-icon{--cros-sys-illo-base:#FFFFFF;--cros-sys-illo-color1-2:#DBE1FF;--cros-sys-illo-color3:#EE9829;--cros-sys-illo-color4:#FF5449;--cros-sys-illo-color5:#C6A0BF;--cros-sys-illo-secondary:#E2E1EC;--iron-icon-height:200px;--iron-icon-width:268px}@media (prefers-color-scheme:dark){.message-container{color:var(--google-grey-400)}iron-icon{--cros-sys-illo-base:#000000;--cros-sys-illo-color1-2:#414659;--cros-sys-illo-color3:#FFB866;--cros-sys-illo-color4:#FF5449;--cros-sys-illo-color5:#745470;--cros-sys-illo-secondary:#5D5E67}}</style>
<div class="container">
  <iron-icon icon="print-preview:no-printer-available"></iron-icon>
  <div class="message-container">
    <h2 class="message-heading">[[getMessageHeading(messageType)]]</h2>
    <p class="message-detail">[[getMessageDetail(messageType)]]</p>
  </div>
  <cr-button class="action-button" on-click="onManagePrintersClicked" hidden$="[[!showManagePrintersButton]]">
    $i18n{managePrintersLabel}
  </cr-button>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview PrintPreviewPrinterSetupInfoCrosElement
 * This element provides contextual instructions to help users navigate
 * to printer settings based on the state of printers available in
 * print-preview. Element will use NativeLayer to open the correct printer
 * settings interface.
 */
const PrintPreviewPrinterSetupInfoCrosElementBase = I18nMixin(PolymerElement);
var PrinterSetupInfoMetricsSource;
(function (PrinterSetupInfoMetricsSource) {
    PrinterSetupInfoMetricsSource[PrinterSetupInfoMetricsSource["PREVIEW_AREA"] = 0] = "PREVIEW_AREA";
    PrinterSetupInfoMetricsSource[PrinterSetupInfoMetricsSource["DESTINATION_DIALOG_CROS"] = 1] = "DESTINATION_DIALOG_CROS";
})(PrinterSetupInfoMetricsSource || (PrinterSetupInfoMetricsSource = {}));
var PrinterSetupInfoMessageType;
(function (PrinterSetupInfoMessageType) {
    PrinterSetupInfoMessageType[PrinterSetupInfoMessageType["NO_PRINTERS"] = 0] = "NO_PRINTERS";
    PrinterSetupInfoMessageType[PrinterSetupInfoMessageType["PRINTER_OFFLINE"] = 1] = "PRINTER_OFFLINE";
})(PrinterSetupInfoMessageType || (PrinterSetupInfoMessageType = {}));
const MESSAGE_TYPE_LOCALIZED_STRINGS_MAP = new Map([
    [
        PrinterSetupInfoMessageType.NO_PRINTERS,
        {
            headingKey: 'printerSetupInfoMessageHeadingNoPrintersText',
            detailKey: 'printerSetupInfoMessageDetailNoPrintersText',
        },
    ],
    [
        PrinterSetupInfoMessageType.PRINTER_OFFLINE,
        {
            headingKey: 'printerSetupInfoMessageHeadingPrinterOfflineText',
            detailKey: 'printerSetupInfoMessageDetailPrinterOfflineText',
        },
    ],
]);
class PrintPreviewPrinterSetupInfoCrosElement extends PrintPreviewPrinterSetupInfoCrosElementBase {
    constructor() {
        super(...arguments);
        this.showManagePrintersButton = false;
    }
    static get is() {
        return 'print-preview-printer-setup-info-cros';
    }
    static get template() {
        return getTemplate$8();
    }
    static get properties() {
        return {
            messageType: {
                type: Number,
                value: PrinterSetupInfoMessageType.NO_PRINTERS,
            },
            metricsSource: Number,
            showManagePrintersButton: Boolean,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.nativeLayer = NativeLayerImpl.getInstance();
        this.metricsContext =
            MetricsContext.getLaunchPrinterSettingsMetricsContextCros();
        NativeLayerCrosImpl.getInstance().getShowManagePrinters().then((show) => {
            this.showManagePrintersButton = show;
        });
    }
    getMessageDetail() {
        const messageData = MESSAGE_TYPE_LOCALIZED_STRINGS_MAP.get(this.messageType);
        assert(messageData);
        return this.i18n(messageData.detailKey);
    }
    getMessageHeading() {
        const messageData = MESSAGE_TYPE_LOCALIZED_STRINGS_MAP.get(this.messageType);
        assert(messageData);
        return this.i18n(messageData.headingKey);
    }
    onManagePrintersClicked() {
        this.nativeLayer.managePrinters();
        switch (this.metricsSource) {
            case PrinterSetupInfoMetricsSource.PREVIEW_AREA:
                this.metricsContext.record(PrintPreviewLaunchSourceBucket.PREVIEW_AREA_CONNECTION_ERROR);
                break;
            case PrinterSetupInfoMetricsSource.DESTINATION_DIALOG_CROS:
                // `<print-preview-printer-setup-info-cros>` is only displayed when
                // there are no printers.
                this.metricsContext.record(PrintPreviewLaunchSourceBucket.DESTINATION_DIALOG_CROS_NO_PRINTERS);
                break;
            default:
                assertNotReached();
        }
    }
    setMetricsSourceForTesting(source) {
        this.metricsSource = source;
    }
}
customElements.define(PrintPreviewPrinterSetupInfoCrosElement.is, PrintPreviewPrinterSetupInfoCrosElement);

function getTemplate$7() {
    return html `<!--_html_template_start_--><style include="print-preview-shared cr-hidden-style throbber">#dialog::part(dialog){height:-webkit-fit-content;max-height:calc(100vh - 4 * var(--print-preview-dialog-margin));max-width:calc(100vw - 4 * var(--print-preview-dialog-margin))}.throbber-placeholder{height:16px;margin:4px;width:16px}.message{line-height:calc(20/13 * 1em);margin:0;padding-bottom:12px;padding-top:8px}.extension-desc{display:flex}.extension-icon{background-position:center;background-repeat:none;height:24px;width:24px}.extension-name{color:var(--cr-primary-text-color);display:flex;flex:1;flex-direction:column;justify-content:center;line-height:20px;margin-inline-start:1em;overflow-wrap:break-word}#dialog #buttons{box-shadow:none}</style>
<cr-dialog id="dialog" on-close="onCancel_">
  <div slot="title">$i18n{resolveExtensionUSBDialogTitle}</div>
  <div slot="body">
    <p class="message">
      [[getPermissionMessage_(state_, destination_.extensionName)]]
    </p>
    <div class="extension-desc" hidden="[[isInErrorState_(state_)]]">
      <div class$="throbber-placeholder [[getThrobberClass_(state_)]]" role="img" alt=""></div>
      <div class="extension-icon" role="img" alt=""></div>
      <div class="extension-name">
        [[destination_.extensionName]]
      </div>
    </div>
  </div>
  <div slot="button-container" id="buttons">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      $i18n{goBackButton}
    </cr-button>
    <cr-button class="action-button" hidden="[[isInErrorState_(state_)]]" disabled="[[!isInActiveState_(state_)]]" on-click="startResolveDestination_">
      $i18n{selectButton}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview PrintPreviewProvisionalDestinationResolver
 * This class is a dialog for resolving provisional destinations. Provisional
 * destinations are extension controlled destinations that need access to a USB
 * device and have not yet been granted access by the user. Destinations are
 * resolved when the user confirms they wish to grant access and the handler
 * has successfully granted access.
 */
/**
 * States that the provisional destination resolver can be in.
 */
var ResolverState;
(function (ResolverState) {
    ResolverState["INITIAL"] = "INITIAL";
    ResolverState["ACTIVE"] = "ACTIVE";
    ResolverState["GRANTING_PERMISSION"] = "GRANTING_PERMISSION";
    ResolverState["ERROR"] = "ERROR";
    ResolverState["DONE"] = "DONE";
})(ResolverState || (ResolverState = {}));
const PrintPreviewProvisionalDestinationResolverElementBase = I18nMixin(PolymerElement);
class PrintPreviewProvisionalDestinationResolverElement extends PrintPreviewProvisionalDestinationResolverElementBase {
    constructor() {
        super(...arguments);
        this.promiseResolver_ = null;
    }
    static get is() {
        return 'print-preview-provisional-destination-resolver';
    }
    static get template() {
        return getTemplate$7();
    }
    static get properties() {
        return {
            destinationStore: Object,
            destination_: {
                type: Object,
                value: null,
            },
            state_: {
                type: String,
                value: ResolverState.INITIAL,
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('keydown', (e) => this.onKeydown_(e));
    }
    /**
     * @param destination The destination this dialog is needed to resolve.
     * @return Promise that is resolved when the destination has been resolved.
     */
    resolveDestination(destination) {
        this.state_ = ResolverState.ACTIVE;
        this.destination_ = destination;
        this.$.dialog.showModal();
        const icon = this.shadowRoot.querySelector('.extension-icon');
        icon.style.backgroundImage = 'image-set(' +
            'url(chrome://extension-icon/' + this.destination_.extensionId +
            '/24/1) 1x,' +
            'url(chrome://extension-icon/' + this.destination_.extensionId +
            '/48/1) 2x)';
        this.promiseResolver_ = new PromiseResolver();
        return this.promiseResolver_.promise;
    }
    /**
     * Handler for click on OK button. It attempts to resolve the destination.
     * If successful, promiseResolver_.promise is resolved with the
     * resolved destination and the dialog closes.
     */
    startResolveDestination_() {
        assert(this.state_ === ResolverState.ACTIVE, 'Invalid state in request grant permission');
        this.state_ = ResolverState.GRANTING_PERMISSION;
        const destination = this.destination_;
        this.destinationStore.resolveProvisionalDestination(destination)
            .then((resolvedDestination) => {
            if (this.state_ !== ResolverState.GRANTING_PERMISSION) {
                return;
            }
            if (destination.id !== this.destination_.id) {
                return;
            }
            if (resolvedDestination) {
                this.state_ = ResolverState.DONE;
                this.promiseResolver_.resolve(resolvedDestination);
                this.promiseResolver_ = null;
                this.$.dialog.close();
            }
            else {
                this.state_ = ResolverState.ERROR;
            }
        });
    }
    onKeydown_(e) {
        e.stopPropagation();
        if (e.key === 'Escape') {
            this.$.dialog.cancel();
            e.preventDefault();
        }
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onCancel_() {
        this.promiseResolver_.reject();
        this.state_ = ResolverState.INITIAL;
    }
    /**
     * @return The USB permission message to display.
     */
    getPermissionMessage_() {
        return this.state_ === ResolverState.ERROR ?
            this.i18n('resolveExtensionUSBErrorMessage', this.destination_.extensionName) :
            this.i18n('resolveExtensionUSBPermissionMessage');
    }
    /**
     * @return Whether the resolver is in the ERROR state.
     */
    isInErrorState_() {
        return this.state_ === ResolverState.ERROR;
    }
    /**
     * @return Whether the resolver is in the ACTIVE state.
     */
    isInActiveState_() {
        return this.state_ === ResolverState.ACTIVE;
    }
    /**
     * @return 'throbber' if the resolver is in the GRANTING_PERMISSION state,
     *     empty otherwise.
     */
    getThrobberClass_() {
        return this.state_ === ResolverState.GRANTING_PERMISSION ? 'throbber' : '';
    }
}
customElements.define(PrintPreviewProvisionalDestinationResolverElement.is, PrintPreviewProvisionalDestinationResolverElement);

function getTemplate$6() {
    return html `<!--_html_template_start_--><style include="destination-dialog-style">:host(:not([show-manage-printers-button])) div[slot=button-container]{justify-content:flex-end}.form-row{align-items:center;column-gap:18px;display:flex;line-height:calc(20 / 15 * 1em);margin-bottom:14px}.server-search-box-input{--cr-searchable-drop-down-width:100%;display:inline-block;flex-grow:1;width:100%}.server-search-box-container{width:100%}.throbber{align-self:center}.throbber-container{display:flex;margin-inline-start:calc((var(--search-icon-size) - var(--throbber-size))/ 2);min-height:var(--destination-item-height)}</style>
<cr-dialog id="dialog" on-close="onCloseOrCancel_">
  <div slot="title" id="header">$i18n{destinationSearchTitle}</div>
  <div slot="body">
    <div class="form-row">
      <div class="server-search-box-container">
        
        <cr-searchable-drop-down class="server-search-box-input" hidden$="[[!isSingleServerFetchingMode_]]" placeholder="$i18n{serverSearchBoxPlaceholder}" value="{{printServerSelected_}}" items="[[printServerNames_]]">
        </cr-searchable-drop-down>
      </div>
    </div>
    <div class="throbber-container" hidden$="[[!showThrobber_]]">
      <div class="throbber"></div>
    </div>
    <print-preview-search-box id="searchBox" hidden$="[[!isShowingDestinationList]]" label="$i18n{searchBoxPlaceholder}" search-query="{{searchQuery_}}" autofocus>
    </print-preview-search-box>
    <print-preview-destination-list id="printList" destinations="[[destinations_]]" hidden$="[[!isShowingDestinationList]]" loading-destinations="[[showDestinationListThrobber(
            loadingAnyDestinations_)]]" search-query="[[searchQuery_]]" on-destination-selected="onDestinationSelected_">
    </print-preview-destination-list>
    <print-preview-printer-setup-info-cros hidden$="[[!isShowingPrinterSetupAssistance]]" message-type="[[noPrinters_]]" metrics-source="[[destinationDialogCrosSource_]]">
    </print-preview-printer-setup-info-cros>
    <print-preview-provisional-destination-resolver id="provisionalResolver" destination-store="[[destinationStore]]">
    </print-preview-provisional-destination-resolver>
  </div>
  <div slot="button-container">
    <cr-button on-click="onManageButtonClick_" id="managePrinters" hidden$="[[!showManagePrintersButton]]">
      $i18n{manage}
      <iron-icon icon="cr:open-in-new" id="manageIcon"></iron-icon>
    </cr-button>
    <cr-button class="cancel-button" on-click="onCancelButtonClick_">
      $i18n{cancel}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DESTINATION_DIALOG_CROS_LOADING_TIMER_IN_MS = 2000;
const PrintPreviewDestinationDialogCrosElementBase = ListPropertyUpdateMixin(WebUiListenerMixin(PolymerElement));
class PrintPreviewDestinationDialogCrosElement extends PrintPreviewDestinationDialogCrosElementBase {
    constructor() {
        super(...arguments);
        this.tracker_ = new EventTracker();
        this.destinationInConfiguring_ = null;
        this.initialized_ = false;
        this.printServerStore_ = null;
        this.showManagePrinters = false;
        this.showThrobber_ = true;
        this.timerDelay_ = 0;
        this.minLoadingTimeElapsed_ = false;
    }
    static get is() {
        return 'print-preview-destination-dialog-cros';
    }
    static get template() {
        return getTemplate$6();
    }
    static get properties() {
        return {
            destinationStore: {
                type: Object,
                observer: 'onDestinationStoreSet_',
            },
            printServerSelected_: {
                type: String,
                value: '',
                observer: 'onPrintServerSelected_',
            },
            destinations_: {
                type: Array,
                value: () => [],
            },
            loadingDestinations_: {
                type: Boolean,
                value: false,
            },
            searchQuery_: {
                type: Object,
                value: null,
            },
            isSingleServerFetchingMode_: {
                type: Boolean,
                value: false,
            },
            printServerNames_: {
                type: Array,
                value() {
                    return [''];
                },
            },
            loadingServerPrinters_: {
                type: Boolean,
                value: false,
            },
            loadingAnyDestinations_: {
                type: Boolean,
                computed: 'computeLoadingDestinations_(' +
                    'loadingDestinations_, loadingServerPrinters_)',
            },
            isPrintPreviewSetupAssistanceEnabled_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('isPrintPreviewSetupAssistanceEnabled');
                },
                readOnly: true,
            },
            isShowingPrinterSetupAssistance: {
                type: Boolean,
                computed: 'computeIsShowingPrinterSetupAssistance(destinations_.length, ' +
                    'isPrintPreviewSetupAssistanceEnabled_, showThrobber_)',
            },
            isShowingDestinationList: {
                type: Boolean,
                computed: 'computeIsShowingDestinationList(destinations_.*)',
            },
            showManagePrintersButton: {
                type: Boolean,
                computed: 'computeShowManagePrintersButton(' +
                    'showManagePrinters, isShowingPrinterSetupAssistance)',
                reflectToAttribute: true,
            },
            showManagePrinters: Boolean,
            noPrinters_: {
                type: Number,
                value: PrinterSetupInfoMessageType.NO_PRINTERS,
                readOnly: true,
            },
            destinationDialogCrosSource_: {
                type: Number,
                value: PrinterSetupInfoMetricsSource.DESTINATION_DIALOG_CROS,
                readOnly: true,
            },
            showThrobber_: {
                type: Boolean,
                computed: 'computeShowThrobber_(' +
                    'minLoadingTimeElapsed_, loadingAnyDestinations_)',
            },
            minLoadingTimeElapsed_: Boolean,
        };
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.tracker_.removeAll();
    }
    ready() {
        super.ready();
        this.addEventListener('keydown', e => this.onKeydown_(e));
        this.printServerStore_ = new PrintServerStore((eventName, callback) => this.addWebUiListener(eventName, callback));
        this.tracker_.add(this.printServerStore_, PrintServerStoreEventType.PRINT_SERVERS_CHANGED, this.onPrintServersChanged_.bind(this));
        this.tracker_.add(this.printServerStore_, PrintServerStoreEventType.SERVER_PRINTERS_LOADING, this.onServerPrintersLoading_.bind(this));
        this.printServerStore_.getPrintServersConfig().then(config => {
            this.printServerNames_ =
                config.printServers.map(printServer => printServer.name);
            this.isSingleServerFetchingMode_ = config.isSingleServerFetchingMode;
        });
        if (this.destinationStore) {
            this.printServerStore_.setDestinationStore(this.destinationStore);
        }
        this.metricsContext_ =
            MetricsContext.getLaunchPrinterSettingsMetricsContextCros();
        NativeLayerCrosImpl.getInstance().getShowManagePrinters().then((show) => {
            this.showManagePrinters = show;
        });
    }
    onKeydown_(e) {
        e.stopPropagation();
        const searchInput = this.$.searchBox.getSearchInput();
        if (e.key === 'Escape' &&
            (e.composedPath()[0] !== searchInput || !searchInput.value.trim())) {
            this.$.dialog.cancel();
            e.preventDefault();
        }
    }
    onDestinationStoreSet_() {
        assert(this.destinations_.length === 0);
        this.tracker_.add(this.destinationStore, DestinationStoreEventType.DESTINATIONS_INSERTED, this.updateDestinations_.bind(this));
        this.tracker_.add(this.destinationStore, DestinationStoreEventType.DESTINATION_SEARCH_DONE, this.updateDestinations_.bind(this));
        this.tracker_.add(this.destinationStore, DestinationStoreEventType.DESTINATION_PRINTER_STATUS_UPDATE, this.onPrinterStatusUpdate_.bind(this));
        this.initialized_ = true;
        if (this.printServerStore_) {
            this.printServerStore_.setDestinationStore(this.destinationStore);
        }
    }
    updateDestinations_() {
        if (this.destinationStore === undefined || !this.initialized_) {
            return;
        }
        this.updateList('destinations_', destination => destination.key, this.getDestinationList_());
        this.loadingDestinations_ =
            this.destinationStore.isPrintDestinationSearchInProgress;
        // Workaround to force the iron-list in print-preview-destination-list to
        // render all destinations and resize to fill dialog body.
        if (this.isShowingDestinationList) {
            window.dispatchEvent(new CustomEvent('resize'));
            this.$.searchBox.focus();
        }
    }
    getDestinationList_() {
        // Filter out the 'Save to Drive' option so it is not shown in the
        // list of available options.
        return this.destinationStore.destinations().filter(destination => destination.id !== GooglePromotedDestinationId.SAVE_TO_DRIVE_CROS);
    }
    onCloseOrCancel_() {
        if (this.searchQuery_) {
            this.$.searchBox.setValue('');
        }
        this.clearThrobberTimer_();
    }
    onCancelButtonClick_() {
        this.$.dialog.cancel();
        this.clearThrobberTimer_();
    }
    /**
     * @param e Event containing the selected destination list item element.
     */
    onDestinationSelected_(e) {
        const listItem = e.detail;
        const destination = listItem.destination;
        // ChromeOS local destinations that don't have capabilities need to be
        // configured before selecting, and provisional destinations need to be
        // resolved. Other destinations can be selected.
        if (destination.readyForSelection) {
            this.selectDestination_(destination);
            return;
        }
        // Provisional destinations
        if (destination.isProvisional) {
            this.$.provisionalResolver.resolveDestination(destination)
                .then(this.selectDestination_.bind(this))
                .catch(function () {
                console.warn('Failed to resolve provisional destination: ' + destination.id);
            })
                .then(() => {
                if (this.$.dialog.open && listItem && !listItem.hidden) {
                    listItem.focus();
                }
            });
            return;
        }
        // Destination must be a CrOS local destination that needs to be set up.
        // The user is only allowed to set up printer at one time.
        if (this.destinationInConfiguring_) {
            return;
        }
        // Show the configuring status to the user and resolve the destination.
        listItem.onConfigureRequestAccepted();
        this.destinationInConfiguring_ = destination;
        this.destinationStore.resolveCrosDestination(destination)
            .then(response => {
            this.destinationInConfiguring_ = null;
            listItem.onConfigureComplete(true);
            destination.capabilities = response.capabilities;
            this.selectDestination_(destination);
            // After destination is selected, start fetching for the EULA
            // URL.
            this.destinationStore.fetchEulaUrl(destination.id);
        }, () => {
            this.destinationInConfiguring_ = null;
            listItem.onConfigureComplete(false);
        });
    }
    selectDestination_(destination) {
        this.destinationStore.selectDestination(destination);
        this.$.dialog.close();
    }
    show() {
        this.$.dialog.showModal();
        const loading = this.destinationStore === undefined ||
            this.destinationStore.isPrintDestinationSearchInProgress;
        if (!loading) {
            // All destinations have already loaded.
            this.updateDestinations_();
        }
        this.loadingDestinations_ = loading;
        // Display throbber for a minimum period of time while destinations are
        // still loading to avoid empty state UI flashing.
        if (!this.minLoadingTimeElapsed_) {
            this.timerDelay_ = timeOut.run(() => {
                this.minLoadingTimeElapsed_ = true;
            }, DESTINATION_DIALOG_CROS_LOADING_TIMER_IN_MS);
        }
    }
    /** @return Whether the dialog is open. */
    isOpen() {
        return this.$.dialog.hasAttribute('open');
    }
    onPrintServerSelected_(printServerName) {
        if (!this.printServerStore_) {
            return;
        }
        this.printServerStore_.choosePrintServers(printServerName);
    }
    /**
     * @param e Event containing the current print server names and fetching mode.
     */
    onPrintServersChanged_(e) {
        this.isSingleServerFetchingMode_ = e.detail.isSingleServerFetchingMode;
        this.printServerNames_ = e.detail.printServerNames;
    }
    /**
     * @param e Event containing whether server printers are currently loading.
     */
    onServerPrintersLoading_(e) {
        this.loadingServerPrinters_ = e.detail;
    }
    computeLoadingDestinations_() {
        return this.loadingDestinations_ || this.loadingServerPrinters_;
    }
    onManageButtonClick_() {
        NativeLayerImpl.getInstance().managePrinters();
        if (this.isPrintPreviewSetupAssistanceEnabled_) {
            this.metricsContext_.record(PrintPreviewLaunchSourceBucket.DESTINATION_DIALOG_CROS_HAS_PRINTERS);
        }
    }
    /**
     * Sets `isShowingPrinterSetupAssistance` state based on flag and
     * destinations.
     * If flag is turned off, then do not show.
     * If flag is turned on and there is only a PDF printer, then show.
     * Save to drive is already excluded by `getDestinationList_()`.
     */
    computeIsShowingPrinterSetupAssistance() {
        if (!this.isPrintPreviewSetupAssistanceEnabled_) {
            return false;
        }
        return !this.showThrobber_ && !this.printerDestinationExists();
    }
    /**
     * Returns true if the search-box and destination-list should be shown. They
     * should be shown when at least one non-PDF printer destination is available
     * for the user to select.
     */
    computeIsShowingDestinationList() {
        if (!this.isPrintPreviewSetupAssistanceEnabled_) {
            return true;
        }
        return this.printerDestinationExists();
    }
    printerDestinationExists() {
        return this.destinations_.some((destination) => destination.id !== GooglePromotedDestinationId.SAVE_AS_PDF);
    }
    computeShowManagePrintersButton() {
        return this.showManagePrinters && !this.isShowingPrinterSetupAssistance;
    }
    computeShowThrobber_() {
        if (!this.isPrintPreviewSetupAssistanceEnabled_) {
            return false;
        }
        return !this.minLoadingTimeElapsed_ || this.loadingAnyDestinations_;
    }
    // Clear throbber timer if it has not completed yet. Used to ensure throbber
    // is shown again if dialog is closed or canceled before throbber is hidden.
    clearThrobberTimer_() {
        if (!this.minLoadingTimeElapsed_) {
            timeOut.cancel(this.timerDelay_);
        }
    }
    // Trigger updates to the printer status icons and text for dialog
    // destinations.
    onPrinterStatusUpdate_(e) {
        const destinationKey = e.detail;
        const destinationList = this.shadowRoot.querySelector('print-preview-destination-list');
        assert(destinationList);
        destinationList.updatePrinterStatusIcon(destinationKey);
    }
    showDestinationListThrobber() {
        // When flag is enabled, DestinationDialogCros shows its own throbber.
        if (this.isPrintPreviewSetupAssistanceEnabled_) {
            return false;
        }
        return this.loadingAnyDestinations_;
    }
}
customElements.define(PrintPreviewDestinationDialogCrosElement.is, PrintPreviewDestinationDialogCrosElement);

function getTemplate$5() {
    return html `<!--_html_template_start_--><style include="cr-shared-style cr-hidden-style">:host{--dropdown-bg-color:var(--google-grey-100);--dropdown-focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--dropdown-option-bg-color:white}@media (prefers-color-scheme:dark){:host{--dropdown-bg-color:rgba(0, 0, 0, 0.3);--dropdown-focus-shadow-color:rgba(var(--google-blue-300-rgb), .4);--dropdown-option-bg-color:var(--google-grey-900-white-4-percent)}}#destinationDropdown{outline:0;position:relative}#destinationDropdown:focus{border-radius:4px;box-shadow:0 0 0 2px var(--dropdown-focus-shadow-color)}#destinationDropdown,iron-dropdown{width:var(--print-preview-dropdown-width)}iron-dropdown{border:.5px solid rgba(0,0,0,.5);max-height:270px}iron-dropdown [slot=dropdown-content]{background-color:var(--dropdown-option-bg-color);box-shadow:var(--cr-menu-shadow);padding:8px 0}#dropdown-icon{--iron-icon-height:24px;--iron-icon-width:44px;align-items:center;left:2px;margin-inline-start:-4px;top:50%}:host-context([dir=rtl]) #dropdown-icon{right:2px}#dropdown-box{border-radius:4px;height:100%;left:0;margin-top:24px;overflow:hidden;pointer-events:initial;position:absolute;top:0;width:100%}.list-item{background:0 0;border:none;box-sizing:border-box;cursor:pointer;font:inherit;min-height:32px;padding:0 8px;text-align:start;width:100%}.list-item:focus{outline:0}.list-item.highlighted{background-color:var(--google-blue-100)}@media (prefers-color-scheme:dark){.list-item.highlighted{--iron-icon-fill-color:currentColor;background-color:var(--google-blue-200);color:var(--google-grey-900)}}#destination-icon-box,.printer-display-name{padding-inline-start:8px}#destination-display-container{align-items:center;background-color:var(--dropdown-bg-color);border-radius:4px;cursor:pointer;display:flex;width:100%}:host([disabled]) #destination-display-container{cursor:default;opacity:var(--cr-disabled-opacity)}#destination-display{box-sizing:border-box;overflow:hidden;padding-inline-start:8px;text-overflow:ellipsis;white-space:nowrap;width:100%}</style>
<iron-media-query query="(prefers-color-scheme: dark)" query-matches="{{isDarkModeActive_}}">
</iron-media-query>
<div id="destinationDropdown" on-keydown="onKeyDown_" tabindex="0" on-blur="onBlur_" on-click="onClick_" role="button" aria-haspopup="true" aria-label="$i18n{destinationLabel} [[value.displayName]]" aria-description$="[[getAriaDescription_(destinationStatusText)]]">
  <div id="destination-display-container">
    <div id="destination-icon-box">
      <iron-icon icon="[[destinationIcon]]"></iron-icon>
    </div>
    <div id="destination-display" title="[[value.displayName]]">
      [[value.displayName]]
    </div>
    <iron-icon id="dropdown-icon" icon="cr:arrow-drop-down"></iron-icon>
  </div>
  <div id="dropdown-box">
    <iron-dropdown horizontal-align="left" vertical-align="top" vertical-offset="0" no-cancel-on-outside-click no-cancel-on-esc-key>
      <div slot="dropdown-content">
        <template is="dom-repeat" items="[[itemList]]">
          <button id="[[item.key]]" tabindex="-1" value="[[item.key]]" on-click="onSelect_" on-blur="onBlur_" role="menuitem" aria-setsize$="[[dropdownLength_]]" class$="list-item [[getHighlightedClass_(item.key,
                  highlightedIndex_)]]" aria-description$="[[getPrinterStatusErrorString_(
                  item.printerStatusReason)]]">
            <iron-icon icon="[[getPrinterStatusIcon_(
                item.printerStatusReason, item.isEnterprisePrinter,
                isDarkModeActive_)]]">
            </iron-icon>
            <span class="printer-display-name">[[item.displayName]]</span>
          </button>
        </template>
        <button on-click="onSelect_" tabindex="-1" value="[[pdfDestinationKey]]" hidden$="[[pdfPrinterDisabled]]" on-blur="onBlur_" role="menuitem" aria-setsize$="[[dropdownLength_]]" class$="list-item [[getHighlightedClass_(pdfDestinationKey,
              highlightedIndex_)]]">
          $i18n{printToPDF}
        </button>
        <button on-click="onSelect_" tabindex="-1" on-blur="onBlur_" value="[[driveDestinationKey]]" hidden$="[[!driveDestinationKey]]" role="menuitem" aria-setsize$="[[dropdownLength_]]" class$="list-item [[getHighlightedClass_(driveDestinationKey,
              highlightedIndex_)]]">
          $i18n{printToGoogleDrive}
        </button>
        <button on-click="onSelect_" tabindex="-1" value="noDestinations" hidden$="[[!noDestinations]]" on-blur="onBlur_" role="menuitem" aria-setsize$="[[dropdownLength_]]" class$="list-item [[getHighlightedClass_('noDestinations',
              highlightedIndex_)]]">
          $i18n{noDestinationsMessage}
        </button>
        <button on-click="onSelect_" tabindex="-1" value="seeMore" aria-label="$i18n{seeMoreDestinationsLabel}" on-blur="onBlur_" role="menuitem" aria-setsize$="[[dropdownLength_]]" class$="list-item [[getHighlightedClass_('seeMore',
              highlightedIndex_)]]">
          $i18n{seeMore}
        </button>
      </div>
    </iron-dropdown>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewDestinationDropdownCrosElementBase = I18nMixin(PolymerElement);
class PrintPreviewDestinationDropdownCrosElement extends PrintPreviewDestinationDropdownCrosElementBase {
    constructor() {
        super(...arguments);
        this.opened_ = false;
        this.dropdownRefitPending_ = false;
    }
    static get is() {
        return 'print-preview-destination-dropdown-cros';
    }
    static get template() {
        return getTemplate$5();
    }
    static get properties() {
        return {
            value: Object,
            itemList: {
                type: Array,
                observer: 'enqueueDropdownRefit_',
            },
            disabled: {
                type: Boolean,
                value: false,
                observer: 'updateTabIndex_',
                reflectToAttribute: true,
            },
            driveDestinationKey: String,
            noDestinations: Boolean,
            pdfPrinterDisabled: Boolean,
            pdfDestinationKey: String,
            destinationIcon: String,
            isDarkModeActive_: Boolean,
            /**
             * Index of the highlighted item in the dropdown.
             */
            highlightedIndex_: Number,
            dropdownLength_: {
                type: Number,
                computed: 'computeDropdownLength_(itemList, pdfPrinterDisabled, ' +
                    'driveDestinationKey, noDestinations)',
            },
            destinationStatusText: String,
        };
    }
    ready() {
        super.ready();
        this.addEventListener('mousemove', e => this.onMouseMove_(e));
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateTabIndex_();
    }
    focus() {
        this.$.destinationDropdown.focus();
    }
    getAriaDescription_() {
        return this.destinationStatusText.toString();
    }
    fireDropdownValueSelected_(element) {
        this.dispatchEvent(new CustomEvent('dropdown-value-selected', { bubbles: true, composed: true, detail: element }));
    }
    /**
     * Enqueues a task to refit the iron-dropdown if it is open.
     */
    enqueueDropdownRefit_() {
        const dropdown = this.shadowRoot.querySelector('iron-dropdown');
        if (!this.dropdownRefitPending_ && dropdown.opened) {
            this.dropdownRefitPending_ = true;
            setTimeout(() => {
                dropdown.refit();
                this.dropdownRefitPending_ = false;
            }, 0);
        }
    }
    openDropdown_() {
        if (this.disabled) {
            return;
        }
        this.highlightedIndex_ = this.getButtonListFromDropdown_().findIndex(item => item.value === this.value.key);
        this.shadowRoot.querySelector('iron-dropdown').open();
        this.opened_ = true;
    }
    closeDropdown_() {
        this.shadowRoot.querySelector('iron-dropdown').close();
        this.opened_ = false;
        this.highlightedIndex_ = -1;
    }
    /**
     * Highlight the item the mouse is hovering over. If the user uses the
     * keyboard, the highlight will shift. But once the user moves the mouse,
     * the highlight should be updated based on the location of the mouse
     * cursor.
     */
    onMouseMove_(event) {
        const item = event.composedPath()
            .find(elm => elm.classList && elm.classList.contains('list-item'));
        if (!item) {
            return;
        }
        this.highlightedIndex_ =
            this.getButtonListFromDropdown_().indexOf(item);
    }
    onClick_(event) {
        const dropdown = this.shadowRoot.querySelector('iron-dropdown');
        // Exit if path includes |dropdown| because event will be handled by
        // onSelect_.
        if (event.composedPath().includes(dropdown)) {
            return;
        }
        if (dropdown.opened) {
            this.closeDropdown_();
            return;
        }
        this.openDropdown_();
    }
    onSelect_(event) {
        this.dropdownValueSelected_(event.currentTarget);
    }
    onKeyDown_(event) {
        event.stopPropagation();
        const dropdown = this.shadowRoot.querySelector('iron-dropdown');
        switch (event.key) {
            case 'ArrowUp':
            case 'ArrowDown':
                this.onArrowKeyPress_(event.key);
                break;
            case 'Enter': {
                if (dropdown.opened) {
                    this.dropdownValueSelected_(this.getButtonListFromDropdown_()[this.highlightedIndex_]);
                    break;
                }
                this.openDropdown_();
                break;
            }
            case 'Escape': {
                if (dropdown.opened) {
                    this.closeDropdown_();
                    event.preventDefault();
                }
                break;
            }
        }
    }
    onArrowKeyPress_(eventKey) {
        const dropdown = this.shadowRoot.querySelector('iron-dropdown');
        const items = this.getButtonListFromDropdown_();
        if (items.length === 0) {
            return;
        }
        // If the dropdown is open, use the arrow key press to change which item is
        // highlighted in the dropdown. If the dropdown is closed, use the arrow key
        // press to change the selected destination.
        if (dropdown.opened) {
            const nextIndex = this.getNextItemIndexInList_(eventKey, this.highlightedIndex_, items.length);
            if (nextIndex === -1) {
                return;
            }
            this.highlightedIndex_ = nextIndex;
            items[this.highlightedIndex_].focus();
            return;
        }
        const currentIndex = items.findIndex(item => item.value === this.value.key);
        const nextIndex = this.getNextItemIndexInList_(eventKey, currentIndex, items.length);
        if (nextIndex === -1) {
            return;
        }
        this.fireDropdownValueSelected_(items[nextIndex]);
    }
    /**
     * @return -1 when the next item would be outside the list.
     */
    getNextItemIndexInList_(eventKey, currentIndex, numItems) {
        const nextIndex = eventKey === 'ArrowDown' ? currentIndex + 1 : currentIndex - 1;
        return nextIndex >= 0 && nextIndex < numItems ? nextIndex : -1;
    }
    dropdownValueSelected_(dropdownItem) {
        this.closeDropdown_();
        if (dropdownItem) {
            this.fireDropdownValueSelected_(dropdownItem);
        }
        this.$.destinationDropdown.focus();
    }
    /**
     * Returns list of all the visible items in the dropdown.
     */
    getButtonListFromDropdown_() {
        if (!this.shadowRoot) {
            return [];
        }
        const dropdown = this.shadowRoot.querySelector('iron-dropdown');
        return Array
            .from(dropdown.querySelectorAll('.list-item'))
            .filter(item => !item.hidden);
    }
    /**
     * Sets tabindex to -1 when dropdown is disabled to prevent the dropdown from
     * being focusable.
     */
    updateTabIndex_() {
        this.$.destinationDropdown.setAttribute('tabindex', this.disabled ? '-1' : '0');
    }
    /**
     * Determines if an item in the dropdown should be highlighted based on the
     * current value of |highlightedIndex_|.
     */
    getHighlightedClass_(itemValue) {
        const itemToHighlight = this.getButtonListFromDropdown_()[this.highlightedIndex_];
        return itemToHighlight && itemValue === itemToHighlight.value ?
            'highlighted' :
            '';
    }
    /**
     * Close the dropdown when focus is lost except when an item in the dropdown
     * is the element that received the focus.
     */
    onBlur_(event) {
        if (!this.getButtonListFromDropdown_().includes(event.relatedTarget)) {
            this.closeDropdown_();
        }
    }
    computeDropdownLength_() {
        if (this.noDestinations) {
            return 1;
        }
        if (!this.itemList) {
            return 0;
        }
        // + 1 for "See more"
        let length = this.itemList.length + 1;
        if (!this.pdfPrinterDisabled) {
            length++;
        }
        if (this.driveDestinationKey) {
            length++;
        }
        return length;
    }
    getPrinterStatusErrorString_(printerStatusReason) {
        const errorStringKey = ERROR_STRING_KEY_MAP.get(printerStatusReason);
        return errorStringKey ? this.i18n(errorStringKey) : '';
    }
    getPrinterStatusIcon_(printerStatusReason, isEnterprisePrinter) {
        return getPrinterStatusIcon(printerStatusReason, isEnterprisePrinter, this.isDarkModeActive_);
    }
}
customElements.define(PrintPreviewDestinationDropdownCrosElement.is, PrintPreviewDestinationDropdownCrosElement);

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style include="cr-shared-style">
:host{--printer-icon-side-padding:4px;--printer-icon-size:20px}select.md-select{background-position:var(--printer-icon-side-padding) center,calc(100% - var(--md-select-side-padding)) center;background-size:var(--printer-icon-size),var(--md-arrow-width);padding-inline-start:32px}:host-context([dir=rtl]) .md-select{background-position-x:calc(100% - var(--printer-icon-side-padding)),var(--md-select-side-padding)}.throbber-container{align-items:center;display:flex;overflow:hidden}.destination-additional-info,.destination-additional-info div{height:100%;min-height:0}.destination-status{color:var(--cr-secondary-text-color);font-size:calc(12/13 * 1em);padding:4px 0}
    </style>
  </template>
`.content);
styleMod.register('destination-select-style');

function getTemplate$4() {
    return html `<!--_html_template_start_--><style include="print-preview-shared throbber destination-select-style cr-hidden-style">:host([is-current-destination-cros-local_]) #statusText{color:var(--google-red-600);font-size:calc(10 / 13 * 1em);overflow:hidden;padding:0;text-overflow:ellipsis;white-space:nowrap}:host([is-current-destination-cros-local_]) #statusText.status-orange{color:var(--error-status-warning)}:host([is-current-destination-cros-local_]) #statusText.status-red{color:var(--error-status-alert)}@media (prefers-color-scheme:dark){:host([is-current-destination-cros-local_]) #statusText{color:var(--google-red-300)}}a[href]{color:var(--google-blue-600);text-decoration:none}@media (prefers-color-scheme:dark){a[href]{color:var(--cr-link-color)}}</style>
<iron-media-query query="(prefers-color-scheme: dark)" query-matches="{{isDarkModeActive_}}">
</iron-media-query>
<print-preview-settings-section>
  <span slot="title">$i18n{destinationLabel}</span>
  <div slot="controls">
    <div class="throbber-container" hidden$="[[loaded]]">
      <div class="throbber"></div>
    </div>
    <print-preview-destination-dropdown-cros id="dropdown" value="[[destination]]" hidden$="[[!loaded]]" item-list="[[recentDestinationList]]" pdf-destination-key="[[pdfDestinationKey_]]" drive-destination-key="[[driveDestinationKey]]" no-destinations="[[noDestinations]]" pdf-printer-disabled="[[pdfPrinterDisabled]]" destination-icon="[[destinationIcon_]]" disabled="[[disabled]]" on-dropdown-value-selected="onDropdownValueSelected_" destination-status-text="[[statusText_]]">
    </print-preview-destination-dropdown-cros>
  </div>
</print-preview-settings-section>
<print-preview-settings-section class="destination-additional-info" hidden$="[[hideDestinationAdditionalInfo_(statusText_)]]">
  <div slot="title"></div>
  <div slot="controls">
    <div id="statusText" class$="[[computeStatusClass_(destination.printerStatusReason)]]" title="[[statusText_]]" aria-hidden="[[isCurrentDestinationCrosLocal_]]" inner-h-t-m-l="[[statusText_]]">
    </div>
  </div>
</print-preview-settings-section>
<print-preview-settings-section class="destination-additional-info" id="destinationEulaWrapper" hidden$="[[!destination.eulaUrl]]">
  <div slot="title"></div>
  <div slot="controls">
    <a class="destination-status" href="[[destination.eulaUrl]]" target="_blank">
     $i18n{printerEulaURL}
    </a>
  </div>
</print-preview-settings-section>
<!--_html_template_end_-->`;
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewDestinationSelectCrosElementBase = I18nMixin(SelectMixin(PolymerElement));
class PrintPreviewDestinationSelectCrosElement extends PrintPreviewDestinationSelectCrosElementBase {
    static get is() {
        return 'print-preview-destination-select-cros';
    }
    static get template() {
        return getTemplate$4();
    }
    static get properties() {
        return {
            activeUser: String,
            dark: Boolean,
            destination: Object,
            disabled: Boolean,
            driveDestinationKey: String,
            loaded: Boolean,
            noDestinations: Boolean,
            pdfPrinterDisabled: Boolean,
            recentDestinationList: {
                type: Array,
                observer: 'onRecentDestinationListChanged_',
            },
            pdfDestinationKey_: {
                type: String,
                value: PDF_DESTINATION_KEY,
            },
            statusText_: {
                type: String,
                computed: 'computeStatusText_(destination, destination.printerStatusReason)',
            },
            destinationIcon_: {
                type: String,
                computed: 'computeDestinationIcon_(' +
                    'selectedValue, destination, destination.printerStatusReason,' +
                    'isDarkModeActive_)',
            },
            isCurrentDestinationCrosLocal_: {
                type: Boolean,
                computed: 'computeIsCurrentDestinationCrosLocal_(destination)',
                reflectToAttribute: true,
            },
            // Holds status of iron-media-query (prefers-color-scheme: dark).
            isDarkModeActive_: Boolean,
        };
    }
    focus() {
        this.shadowRoot.querySelector('print-preview-destination-dropdown-cros').focus();
    }
    /** Sets the select to the current value of |destination|. */
    updateDestination() {
        this.selectedValue = this.destination.key;
    }
    /**
     * Returns the iconset and icon for the selected printer. If printer details
     * have not yet been retrieved from the backend, attempts to return an
     * appropriate icon early based on the printer's sticky information.
     * @return The iconset and icon for the current selection.
     */
    computeDestinationIcon_() {
        if (!this.selectedValue) {
            return '';
        }
        // If the destination matches the selected value, pull the icon from the
        // destination.
        if (this.destination && this.destination.key === this.selectedValue) {
            if (this.isCurrentDestinationCrosLocal_) {
                return getPrinterStatusIcon(this.destination.printerStatusReason, this.destination.isEnterprisePrinter, this.isDarkModeActive_);
            }
            return this.destination.icon;
        }
        // Check for the Docs or Save as PDF ids first.
        const keyParams = this.selectedValue.split('/');
        if (keyParams[0] === GooglePromotedDestinationId.SAVE_TO_DRIVE_CROS) {
            return 'print-preview:save-to-drive';
        }
        if (keyParams[0] === GooglePromotedDestinationId.SAVE_AS_PDF) {
            return 'cr:insert-drive-file';
        }
        // Otherwise, must be in the recent list.
        const recent = this.recentDestinationList.find(d => {
            return d.key === this.selectedValue;
        });
        if (recent && recent.icon) {
            return recent.icon;
        }
        // The key/recent destinations don't have information about what icon to
        // use, so just return the generic print icon for now. It will be updated
        // when the destination is set.
        return 'print-preview:print';
    }
    hideDestinationAdditionalInfo_() {
        return this.statusText_ === window.trustedTypes.emptyHTML;
    }
    fireSelectedOptionChange_(value) {
        this.dispatchEvent(new CustomEvent('selected-option-change', { bubbles: true, composed: true, detail: value }));
    }
    onProcessSelectChange(value) {
        this.fireSelectedOptionChange_(value);
    }
    onDropdownValueSelected_(e) {
        const selectedItem = e.detail;
        if (!selectedItem || selectedItem.value === this.destination.key) {
            return;
        }
        this.fireSelectedOptionChange_(selectedItem.value);
    }
    /**
     * Send a printer status request for any new destination in the dropdown.
     */
    onRecentDestinationListChanged_() {
        for (const destination of this.recentDestinationList) {
            if (!destination || destination.origin !== DestinationOrigin.CROS) {
                continue;
            }
            destination.requestPrinterStatus().then(destinationKey => this.onPrinterStatusReceived_(destinationKey));
        }
    }
    /**
     * Check if the printer is currently in the dropdown then update its status
     *    icon if it's present.
     */
    onPrinterStatusReceived_(destinationKey) {
        const indexFound = this.recentDestinationList.findIndex(destination => {
            return destination.key === destinationKey;
        });
        if (indexFound === -1) {
            return;
        }
        // Use notifyPath to trigger the matching printer located in the dropdown to
        // recalculate its status icon.
        this.notifyPath(`recentDestinationList.${indexFound}.printerStatusReason`);
        // If |destinationKey| matches the currently selected printer, use
        // notifyPath to trigger the destination to recalculate its status icon and
        // error status text.
        if (this.destination && this.destination.key === destinationKey) {
            this.notifyPath(`destination.printerStatusReason`);
        }
    }
    /**
     * @return An error status for the current destination. If no error
     *     status exists, an empty string.
     */
    computeStatusText_() {
        // |destination| can be either undefined, or null here.
        if (!this.destination) {
            return window.trustedTypes.emptyHTML;
        }
        // Non-local printers do not show an error status.
        if (this.destination.origin !== DestinationOrigin.CROS) {
            return window.trustedTypes.emptyHTML;
        }
        const printerStatusReason = this.destination.printerStatusReason;
        if (printerStatusReason === null ||
            printerStatusReason === PrinterStatusReason.NO_ERROR ||
            printerStatusReason === PrinterStatusReason.UNKNOWN_REASON) {
            return window.trustedTypes.emptyHTML;
        }
        return this.getErrorString_(printerStatusReason);
    }
    getErrorString_(printerStatusReason) {
        const errorStringKey = ERROR_STRING_KEY_MAP.get(printerStatusReason);
        return errorStringKey ? this.i18nAdvanced(errorStringKey) :
            window.trustedTypes.emptyHTML;
    }
    /**
     * True when the currently selected destination is a CrOS local printer.
     */
    computeIsCurrentDestinationCrosLocal_() {
        return this.destination &&
            this.destination.origin === DestinationOrigin.CROS;
    }
    computeStatusClass_() {
        const statusClass = 'destination-status';
        if (!this.destination) {
            return statusClass;
        }
        const printerStatusReason = this.destination.printerStatusReason;
        if (printerStatusReason === null ||
            printerStatusReason === PrinterStatusReason.NO_ERROR ||
            printerStatusReason === PrinterStatusReason.UNKNOWN_REASON) {
            return statusClass;
        }
        return `${statusClass} ${getStatusTextColorClass(printerStatusReason)}`;
    }
    /**
     * Return the options currently visible to the user for testing purposes.
     */
    getVisibleItemsForTest() {
        return this.shadowRoot.querySelector('#dropdown').shadowRoot
            .querySelectorAll('.list-item:not([hidden])');
    }
}
customElements.define(PrintPreviewDestinationSelectCrosElement.is, PrintPreviewDestinationSelectCrosElement);

function getTemplate$3() {
    return html `<!--_html_template_start_--><style include="print-preview-shared">:host([has-pin-setting_]){margin-bottom:0!important}</style>


  <print-preview-destination-select-cros id="destinationSelect" active-user="[[activeUser_]]" dark="[[dark]]" destination="[[destination]]" disabled="[[shouldDisableDropdown_(
                      destinationState, state, disabled)]]" drive-destination-key="[[driveDestinationKey_]]" loaded="[[loaded_]]" no-destinations="[[noDestinations_]]" pdf-printer-disabled="[[pdfPrinterDisabled_]]" recent-destination-list="[[displayedDestinations_]]" on-selected-option-change="onSelectedDestinationOptionChange_">
  </print-preview-destination-select-cros>
  <cr-lazy-render id="destinationDialog">
    <template>
      <print-preview-destination-dialog-cros destination-store="[[destinationStore_]]" recent-destination-list="[[recentDestinationList_]]" on-close="onDialogClose_">
      </print-preview-destination-dialog-cros>
    </template>
  </cr-lazy-render>

<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var DestinationState;
(function (DestinationState) {
    DestinationState[DestinationState["INIT"] = 0] = "INIT";
    DestinationState[DestinationState["SET"] = 1] = "SET";
    DestinationState[DestinationState["UPDATED"] = 2] = "UPDATED";
    DestinationState[DestinationState["ERROR"] = 3] = "ERROR";
})(DestinationState || (DestinationState = {}));
/** Number of recent destinations to save. */
// 
// 
const NUM_PERSISTED_DESTINATIONS = 10;
// 
/**
 * Number of unpinned recent destinations to display.
 * Pinned destinations include "Save as PDF" and "Save to Google Drive".
 */
const NUM_UNPINNED_DESTINATIONS = 3;
const PrintPreviewDestinationSettingsElementBase = I18nMixin(WebUiListenerMixin(SettingsMixin(PolymerElement)));
class PrintPreviewDestinationSettingsElement extends PrintPreviewDestinationSettingsElementBase {
    constructor() {
        super(...arguments);
        this.lastUser_ = '';
        this.tracker_ = new EventTracker();
        // 
    }
    static get is() {
        return 'print-preview-destination-settings';
    }
    static get template() {
        return getTemplate$3();
    }
    static get properties() {
        return {
            dark: Boolean,
            destination: {
                type: Object,
                notify: true,
                value: null,
            },
            destinationState: {
                type: Number,
                notify: true,
                value: DestinationState.INIT,
                observer: 'updateDestinationSelect_',
            },
            disabled: Boolean,
            error: {
                type: Number,
                notify: true,
                observer: 'onErrorChanged_',
            },
            firstLoad: Boolean,
            state: Number,
            destinationStore_: {
                type: Object,
                value: null,
            },
            displayedDestinations_: Array,
            // 
            driveDestinationKey_: {
                type: String,
                value: '',
            },
            hasPinSetting_: {
                type: Boolean,
                computed: 'computeHasPinSetting_(settings.pin.available)',
                reflectToAttribute: true,
            },
            // 
            isDialogOpen_: {
                type: Boolean,
                value: false,
            },
            noDestinations_: {
                type: Boolean,
                value: false,
            },
            pdfPrinterDisabled_: Boolean,
            loaded_: {
                type: Boolean,
                computed: 'computeLoaded_(destinationState, destination)',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.destinationStore_ =
            new DestinationStore(this.addWebUiListener.bind(this));
        this.tracker_.add(this.destinationStore_, DestinationStoreEventType.DESTINATION_SELECT, this.onDestinationSelect_.bind(this));
        this.tracker_.add(this.destinationStore_, DestinationStoreEventType.SELECTED_DESTINATION_CAPABILITIES_READY, this.onDestinationCapabilitiesReady_.bind(this));
        this.tracker_.add(this.destinationStore_, DestinationStoreEventType.ERROR, this.onDestinationError_.bind(this));
        // Need to update the recent list when the destination store inserts
        // destinations, in case any recent destinations have been added to the
        // store. At startup, recent destinations can be in the sticky settings,
        // but they should not be displayed in the dropdown until they have been
        // fetched by the DestinationStore, to ensure that they still exist.
        this.tracker_.add(this.destinationStore_, DestinationStoreEventType.DESTINATIONS_INSERTED, this.updateDropdownDestinations_.bind(this));
        // 
        this.tracker_.add(this.destinationStore_, DestinationStoreEventType.DESTINATION_EULA_READY, this.updateDestinationEulaUrl_.bind(this));
        this.tracker_.add(this.destinationStore_, DestinationStoreEventType.DESTINATION_PRINTER_STATUS_UPDATE, this.onPrinterStatusUpdate_.bind(this));
        // 
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.destinationStore_.resetTracker();
        this.tracker_.removeAll();
    }
    /**
     * @param defaultPrinter The system default printer ID.
     * @param pdfPrinterDisabled Whether the PDF printer is disabled.
     * @param saveToDriveDisabled Whether the 'Save to Google Drive' destination
     *     is disabled in print preview. Only used on Chrome OS.
     * @param serializedDefaultDestinationRulesStr String with rules
     *     for selecting a default destination.
     */
    init(defaultPrinter, pdfPrinterDisabled, saveToDriveDisabled, serializedDefaultDestinationRulesStr) {
        this.pdfPrinterDisabled_ = pdfPrinterDisabled;
        let recentDestinations = this.getSettingValue('recentDestinations');
        // 
        this.driveDestinationKey_ =
            saveToDriveDisabled ? '' : SAVE_TO_DRIVE_CROS_DESTINATION_KEY;
        // 
        recentDestinations = recentDestinations.slice(0, this.getRecentDestinationsDisplayCount_(recentDestinations));
        this.destinationStore_.init(this.pdfPrinterDisabled_, saveToDriveDisabled, defaultPrinter, serializedDefaultDestinationRulesStr, recentDestinations);
    }
    /**
     * @param recentDestinations recent destinations.
     * @return Number of recent destinations to display.
     */
    getRecentDestinationsDisplayCount_(recentDestinations) {
        let numDestinationsToDisplay = NUM_UNPINNED_DESTINATIONS;
        for (let i = 0; i < recentDestinations.length; i++) {
            // Once all NUM_UNPINNED_DESTINATIONS unpinned destinations have been
            // found plus an extra unpinned destination, return the total number of
            // destinations found excluding the last extra unpinned destination.
            //
            // The extra unpinned destination ensures that pinned destinations
            // located directly after the last unpinned destination are included
            // in the display count.
            if (i > numDestinationsToDisplay) {
                return numDestinationsToDisplay;
            }
            // If a destination is pinned, increment numDestinationsToDisplay.
            if (isPdfPrinter(recentDestinations[i].id)) {
                numDestinationsToDisplay++;
            }
        }
        return Math.min(recentDestinations.length, numDestinationsToDisplay);
    }
    onDestinationSelect_() {
        if (this.state === State.FATAL_ERROR) {
            // Don't let anything reset if there is a fatal error.
            return;
        }
        const destination = this.destinationStore_.selectedDestination;
        this.destinationState = DestinationState.SET;
        // Notify observers that the destination is set only after updating the
        // destinationState.
        this.destination = destination;
        this.updateRecentDestinations_();
    }
    onDestinationCapabilitiesReady_() {
        this.notifyPath('destination.capabilities');
        this.updateRecentDestinations_();
        if (this.destinationState === DestinationState.SET) {
            this.destinationState = DestinationState.UPDATED;
        }
    }
    onDestinationError_(e) {
        let errorType = Error$1.NONE;
        switch (e.detail) {
            case DestinationErrorType.INVALID:
                errorType = Error$1.INVALID_PRINTER;
                break;
            case DestinationErrorType.NO_DESTINATIONS:
                errorType = Error$1.NO_DESTINATIONS;
                this.noDestinations_ = true;
                break;
        }
        this.error = errorType;
    }
    onErrorChanged_() {
        if (this.error === Error$1.INVALID_PRINTER ||
            this.error === Error$1.NO_DESTINATIONS) {
            this.destinationState = DestinationState.ERROR;
        }
    }
    updateRecentDestinations_() {
        if (!this.destination) {
            return;
        }
        // Determine if this destination is already in the recent destinations,
        // where in the array it is located, and whether or not it is visible.
        const newDestination = makeRecentDestination(this.destination);
        const recentDestinations = this.getSettingValue('recentDestinations');
        let indexFound = -1;
        // Note: isVisible should be only be used if the destination is unpinned.
        // Although pinned destinations are always visible, isVisible may not
        // necessarily be set to true in this case.
        let isVisible = false;
        let numUnpinnedChecked = 0;
        for (let index = 0; index < recentDestinations.length; index++) {
            const recent = recentDestinations[index];
            if (recent.id === newDestination.id &&
                recent.origin === newDestination.origin) {
                indexFound = index;
                // If we haven't seen the maximum unpinned destinations already, this
                // destination is visible in the dropdown.
                isVisible = numUnpinnedChecked < NUM_UNPINNED_DESTINATIONS;
                break;
            }
            if (!isPdfPrinter(recent.id)) {
                numUnpinnedChecked++;
            }
        }
        // No change
        if (indexFound === 0 &&
            recentDestinations[0].capabilities === newDestination.capabilities) {
            return;
        }
        const isNew = indexFound === -1;
        // Shift the array so that the nth most recent destination is located at
        // index n.
        if (isNew && recentDestinations.length === NUM_PERSISTED_DESTINATIONS) {
            indexFound = NUM_PERSISTED_DESTINATIONS - 1;
        }
        if (indexFound !== -1) {
            this.setSettingSplice('recentDestinations', indexFound, 1, null);
        }
        // Add the most recent destination
        this.setSettingSplice('recentDestinations', 0, 0, newDestination);
        // The dropdown needs to be updated if a new printer or one not currently
        // visible in the dropdown has been added.
        if (!isPdfPrinter(newDestination.id) && (isNew || !isVisible)) {
            this.updateDropdownDestinations_();
        }
    }
    updateDropdownDestinations_() {
        const recentDestinations = this.getSettingValue('recentDestinations');
        const updatedDestinations = [];
        let numDestinationsChecked = 0;
        for (const recent of recentDestinations) {
            if (isPdfPrinter(recent.id)) {
                continue;
            }
            numDestinationsChecked++;
            const key = createRecentDestinationKey(recent);
            const destination = this.destinationStore_.getDestinationByKey(key);
            if (destination) {
                updatedDestinations.push(destination);
            }
            if (numDestinationsChecked === NUM_UNPINNED_DESTINATIONS) {
                break;
            }
        }
        this.displayedDestinations_ = updatedDestinations;
    }
    /**
     * @return Whether the destinations dropdown should be disabled.
     */
    shouldDisableDropdown_() {
        return this.state === State.FATAL_ERROR ||
            (this.destinationState === DestinationState.UPDATED && this.disabled &&
                this.state !== State.NOT_READY);
    }
    computeLoaded_() {
        return this.destinationState === DestinationState.ERROR ||
            this.destinationState === DestinationState.UPDATED ||
            (this.destinationState === DestinationState.SET && !!this.destination &&
                (!!this.destination.capabilities ||
                    this.destination.type === PrinterType.PDF_PRINTER));
    }
    // 
    computeHasPinSetting_() {
        return this.getSetting('pin').available;
    }
    // 
    /**
     * @param e Event containing the key of the recent destination that was
     *     selected, or "seeMore".
     */
    onSelectedDestinationOptionChange_(e) {
        const value = e.detail;
        if (value === 'seeMore') {
            this.destinationStore_.startLoadAllDestinations();
            this.$.destinationDialog.get().show();
            this.isDialogOpen_ = true;
        }
        else {
            this.destinationStore_.selectDestinationByKey(value);
        }
    }
    onDialogClose_() {
        // Reset the select value if the user dismissed the dialog without
        // selecting a new destination.
        this.updateDestinationSelect_();
        this.isDialogOpen_ = false;
    }
    updateDestinationSelect_() {
        if (this.destinationState === DestinationState.ERROR && !this.destination) {
            return;
        }
        if (this.destinationState === DestinationState.INIT) {
            return;
        }
        const shouldFocus = this.destinationState !== DestinationState.SET && !this.firstLoad;
        beforeNextRender(this.$.destinationSelect, () => {
            this.$.destinationSelect.updateDestination();
            if (shouldFocus) {
                this.$.destinationSelect.focus();
            }
        });
    }
    getDestinationStoreForTest() {
        assert(this.destinationStore_);
        return this.destinationStore_;
    }
    // 
    /**
     * @param e Event containing the current destination's EULA URL.
     */
    updateDestinationEulaUrl_(e) {
        if (!this.destination) {
            return;
        }
        this.destination.eulaUrl = e.detail;
        this.notifyPath('destination.eulaUrl');
    }
    /**
     * Returns true if at least one non-PDF printer destination is shown in the
     * destination dropdown.
     */
    printerExistsInDisplayedDestinations() {
        return this.displayedDestinations_.some(destination => destination.type !== PrinterType.PDF_PRINTER);
    }
    // Trigger updates to the printer status icons and text for the selected
    // destination and corresponding dropdown.
    onPrinterStatusUpdate_(e) {
        const destinationKey = e.detail.destinationKey;
        // If `destinationKey` matches the currently selected destination, use
        // notifyPath to trigger the destination to recalculate its status icon and
        // error status text.
        if (this.destination && this.destination.key === destinationKey) {
            this.notifyPath(`destination.printerStatusReason`);
            // If the selected destination was unreachable and now it's online, force
            // select it again so the capabilities and preview will now load.
            if (e.detail.nowOnline) {
                this.destinationStore_.selectDestination(this.destination, /*refreshDestination=*/ true);
            }
        }
        // If this destination is in the dropdown, notify it to recalculate its
        // status icon.
        const index = this.displayedDestinations_.findIndex(destination => destination.key === destinationKey);
        if (index !== -1) {
            this.notifyPath(`displayedDestinations_.${index}.printerStatusReason`);
        }
    }
}
customElements.define(PrintPreviewDestinationSettingsElement.is, PrintPreviewDestinationSettingsElement);

function getTemplate$2() {
    return html `<!--_html_template_start_--><style include="cr-input-style">:host{display:block;position:absolute;transition:opacity 150ms linear}:host([invisible]){opacity:0}:host([disabled]),:host([invisible]){pointer-events:none}:host([side=bottom]) #lineContainer,:host([side=top]) #lineContainer{cursor:ns-resize;padding:8px 0;width:100%}:host([side=left]) #lineContainer,:host([side=right]) #lineContainer{cursor:ew-resize;height:100%;padding:0 8px}#line{border:1px dashed var(--google-blue-500)}@media (prefers-color-scheme:dark){#line{border-color:var(--google-blue-300)}}:host([side=bottom]) #line,:host([side=top]) #line{width:100%}:host([side=left]) #line,:host([side=right]) #line{height:100%}#row-container{border-radius:4px;font-size:.8rem;min-height:25px;overflow:hidden;padding:1px;position:absolute}@media (prefers-color-scheme:light){#row-container{--cr-input-background-color:var(--cr-primary-text-color);--cr-input-color:white;background-color:var(--cr-primary-text-color);color:#fff}}@media (prefers-color-scheme:dark){#row-container{--cr-input-background-color:rgb(27, 28, 30);--cr-input-color:var(--cr-primary-text-color);background-color:#1b1c1e;color:var(--cr-primary-text-color)}}:host([side=top]) #row-container{left:50%;top:9px}:host([side=right]) #row-container{right:9px;top:50%}:host([side=bottom]) #row-container{bottom:9px;right:50%}:host([side=left]) #row-container{bottom:50%;left:9px}:host([disabled]) #row-container{opacity:var(--cr-disabled-opacity)}:host([invalid]) #input{caret-color:var(--cr-input-error-color)}:host([invalid]) #underline{border-color:var(--cr-input-error-color)}#input-container,#row-container{align-items:center;display:flex}#input-container{position:relative}#input{padding-inline-end:0;text-align:end;width:44px}#unit{padding-inline-end:8px}</style>
  <div id="lineContainer">
    <div id="line"></div>
  </div>
  <div id="row-container">
    <div id="input-container">
      <input id="input" disabled="[[disabled]]" aria-label$="[[i18n(side)]]" aria-hidden$="[[getAriaHidden_(invisible)]]" on-focus="onFocus_" on-blur="onBlur_" on-change="onInputChange_" data-timeout-delay="1000">
      <span id="unit">[[measurementSystem.unitSymbol]]</span>
    </div>
    <div id="underline"></div>
  </div>

<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Radius of the margin control in pixels. Padding of control + 1 for border.
 */
const RADIUS_PX = 9;
const PrintPreviewMarginControlElementBase = I18nMixin(WebUiListenerMixin(InputMixin(PolymerElement)));
class PrintPreviewMarginControlElement extends PrintPreviewMarginControlElementBase {
    static get is() {
        return 'print-preview-margin-control';
    }
    static get template() {
        return getTemplate$2();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                reflectToAttribute: true,
                observer: 'onDisabledChange_',
            },
            side: {
                type: String,
                reflectToAttribute: true,
            },
            invalid: {
                type: Boolean,
                reflectToAttribute: true,
            },
            invisible: {
                type: Boolean,
                reflectToAttribute: true,
                observer: 'onClipSizeChange_',
            },
            measurementSystem: Object,
            focused_: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            positionInPts_: {
                type: Number,
                notify: true,
                value: 0,
            },
            scaleTransform: {
                type: Number,
                notify: true,
            },
            translateTransform: {
                type: Object,
                notify: true,
            },
            pageSize: {
                type: Object,
                notify: true,
            },
            clipSize: {
                type: Object,
                notify: true,
                observer: 'onClipSizeChange_',
            },
        };
    }
    static get observers() {
        return [
            'updatePosition_(positionInPts_, scaleTransform, translateTransform, ' +
                'pageSize, side)',
        ];
    }
    ready() {
        super.ready();
        this.addEventListener('input-change', e => this.onInputChange_(e));
    }
    /** @return The input element for InputBehavior. */
    getInput() {
        return this.$.input;
    }
    /**
     * @param valueInPts New value of the margin control's textbox in pts.
     */
    setTextboxValue(valueInPts) {
        const textbox = this.$.input;
        const pts = textbox.value ? this.parseValueToPts_(textbox.value) : null;
        if (pts !== null && valueInPts === Math.round(pts)) {
            // If the textbox's value represents the same value in pts as the new one,
            // don't reset. This allows the "undo" command to work as expected, see
            // https://crbug.com/452844.
            return;
        }
        textbox.value = this.serializeValueFromPts_(valueInPts);
        this.resetString();
    }
    /** @return The current position of the margin control. */
    getPositionInPts() {
        return this.positionInPts_;
    }
    /** @param position The new position for the margin control. */
    setPositionInPts(position) {
        this.positionInPts_ = position;
    }
    /**
     * @return 'true' or 'false', indicating whether the input should be
     *     aria-hidden.
     */
    getAriaHidden_() {
        return this.invisible.toString();
    }
    /**
     * Converts a value in pixels to points.
     * @param pixels Pixel value to convert.
     * @return Given value expressed in points.
     */
    convertPixelsToPts(pixels) {
        let pts;
        const Orientation = CustomMarginsOrientation;
        if (this.side === Orientation.TOP) {
            pts = pixels - this.translateTransform.y + RADIUS_PX;
            pts /= this.scaleTransform;
        }
        else if (this.side === Orientation.RIGHT) {
            pts = pixels - this.translateTransform.x + RADIUS_PX;
            pts /= this.scaleTransform;
            pts = this.pageSize.width - pts;
        }
        else if (this.side === Orientation.BOTTOM) {
            pts = pixels - this.translateTransform.y + RADIUS_PX;
            pts /= this.scaleTransform;
            pts = this.pageSize.height - pts;
        }
        else {
            assert(this.side === Orientation.LEFT);
            pts = pixels - this.translateTransform.x + RADIUS_PX;
            pts /= this.scaleTransform;
        }
        return pts;
    }
    /**
     * @param event A pointerdown event triggered by this element.
     * @return Whether the margin should start being dragged.
     */
    shouldDrag(event) {
        return !this.disabled && event.button === 0 &&
            (event.composedPath()[0] === this.$.lineContainer ||
                event.composedPath()[0] === this.$.line);
    }
    onDisabledChange_() {
        if (this.disabled) {
            this.focused_ = false;
        }
    }
    /**
     * @param value Value to parse to points. E.g. '3.40' or '200'.
     * @return Value in points represented by the input value.
     */
    parseValueToPts_(value) {
        value = value.trim();
        if (value.length === 0) {
            return null;
        }
        assert(this.measurementSystem);
        const decimal = this.measurementSystem.decimalDelimiter;
        const thousands = this.measurementSystem.thousandsDelimiter;
        const whole = `(?:0|[1-9]\\d*|[1-9]\\d{0,2}(?:[${thousands}]\\d{3})*)`;
        const fractional = `(?:[${decimal}]\\d+)`;
        const wholeDecimal = `(?:${whole}[${decimal}])`;
        const validationRegex = new RegExp(`^-?(?:${whole}${fractional}?|${fractional}|${wholeDecimal})$`);
        if (validationRegex.test(value)) {
            // Removing thousands delimiters and replacing the decimal delimiter with
            // the dot symbol in order to use parseFloat() properly.
            value = value.replace(new RegExp(`\\${thousands}`, 'g'), '')
                .replace(decimal, '.');
            return this.measurementSystem.convertToPoints(parseFloat(value));
        }
        return null;
    }
    /**
     * @param value Value in points to serialize.
     * @return String representation of the value in the system's local units.
     */
    serializeValueFromPts_(value) {
        assert(this.measurementSystem);
        value = this.measurementSystem.convertFromPoints(value);
        value = this.measurementSystem.roundValue(value);
        // Convert the dot symbol to the decimal delimiter for the locale.
        return value.toString().replace('.', this.measurementSystem.decimalDelimiter);
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    /**
     * @param e Contains the new value of the input.
     */
    onInputChange_(e) {
        if (e.detail === '') {
            return;
        }
        const value = this.parseValueToPts_(e.detail);
        if (value === null) {
            this.invalid = true;
            return;
        }
        this.fire_('text-change', value);
    }
    onBlur_() {
        this.focused_ = false;
        this.resetAndUpdate();
        this.fire_('text-blur', this.invalid || !this.$.input.value);
    }
    onFocus_() {
        this.focused_ = true;
        this.fire_('text-focus');
    }
    updatePosition_() {
        if (!observerDepsDefined(Array.from(arguments))) {
            return;
        }
        const Orientation = CustomMarginsOrientation;
        let x = this.translateTransform.x;
        let y = this.translateTransform.y;
        let width = null;
        let height = null;
        if (this.side === Orientation.TOP) {
            y = this.scaleTransform * this.positionInPts_ +
                this.translateTransform.y - RADIUS_PX;
            width = this.scaleTransform * this.pageSize.width;
        }
        else if (this.side === Orientation.RIGHT) {
            x = this.scaleTransform * (this.pageSize.width - this.positionInPts_) +
                this.translateTransform.x - RADIUS_PX;
            height = this.scaleTransform * this.pageSize.height;
        }
        else if (this.side === Orientation.BOTTOM) {
            y = this.scaleTransform * (this.pageSize.height - this.positionInPts_) +
                this.translateTransform.y - RADIUS_PX;
            width = this.scaleTransform * this.pageSize.width;
        }
        else {
            x = this.scaleTransform * this.positionInPts_ +
                this.translateTransform.x - RADIUS_PX;
            height = this.scaleTransform * this.pageSize.height;
        }
        window.requestAnimationFrame(() => {
            this.style.left = Math.round(x) + 'px';
            this.style.top = Math.round(y) + 'px';
            if (width !== null) {
                this.style.width = Math.round(width) + 'px';
            }
            if (height !== null) {
                this.style.height = Math.round(height) + 'px';
            }
        });
        this.onClipSizeChange_();
    }
    onClipSizeChange_() {
        if (!this.clipSize) {
            return;
        }
        window.requestAnimationFrame(() => {
            const offsetLeft = this.offsetLeft;
            const offsetTop = this.offsetTop;
            this.style.clip = 'rect(' + (-offsetTop) + 'px, ' +
                (this.clipSize.width - offsetLeft) + 'px, ' +
                (this.clipSize.height - offsetTop) + 'px, ' + (-offsetLeft) + 'px)';
        });
    }
}
customElements.define(PrintPreviewMarginControlElement.is, PrintPreviewMarginControlElement);

function getTemplate$1() {
    return html `<!--_html_template_start_--><style>:host{display:block;left:0;position:absolute;top:0}:host([dragging_=dragging-vertical]){cursor:ns-resize}:host([dragging_=dragging-horizontal]){cursor:ew-resize}</style>
<template is="dom-repeat" items="[[marginSides_]]">
  <print-preview-margin-control side="[[item]]" invisible="[[invisible_]]" disabled="[[controlsDisabled_(state, invisible_)]]" translate-transform="[[translateTransform_]]" clip-size="[[clipSize_]]" measurement-system="[[measurementSystem]]" scale-transform="[[scaleTransform_]]" page-size="[[pageSize]]" on-pointerdown="onPointerDown_" on-text-change="onTextChange_" on-text-blur="onTextBlur_" on-text-focus="onTextFocus_" on-transition-end="onTransitionEnd_">
  </print-preview-margin-control>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MARGIN_KEY_MAP = new Map([
    [CustomMarginsOrientation.TOP, 'marginTop'],
    [CustomMarginsOrientation.RIGHT, 'marginRight'],
    [CustomMarginsOrientation.BOTTOM, 'marginBottom'],
    [CustomMarginsOrientation.LEFT, 'marginLeft'],
]);
const MINIMUM_DISTANCE = 72; // 1 inch
const PrintPreviewMarginControlContainerElementBase = SettingsMixin(PolymerElement);
class PrintPreviewMarginControlContainerElement extends PrintPreviewMarginControlContainerElementBase {
    constructor() {
        super(...arguments);
        this.pointerStartPositionInPixels_ = new Coordinate2d(0, 0);
        this.marginStartPositionInPixels_ = null;
        this.resetMargins_ = null;
        this.eventTracker_ = new EventTracker();
        this.textboxFocused_ = false;
    }
    static get is() {
        return 'print-preview-margin-control-container';
    }
    static get template() {
        return getTemplate$1();
    }
    static get properties() {
        return {
            pageSize: {
                type: Object,
                notify: true,
            },
            documentMargins: {
                type: Object,
                notify: true,
            },
            previewLoaded: Boolean,
            measurementSystem: Object,
            state: {
                type: Number,
                observer: 'onStateChanged_',
            },
            scaleTransform_: {
                type: Number,
                notify: true,
                value: 0,
            },
            translateTransform_: {
                type: Object,
                notify: true,
                value: new Coordinate2d(0, 0),
            },
            clipSize_: {
                type: Object,
                notify: true,
                value: null,
            },
            available_: {
                type: Boolean,
                notify: true,
                computed: 'computeAvailable_(previewLoaded, settings.margins.value)',
                observer: 'onAvailableChange_',
            },
            invisible_: {
                type: Boolean,
                reflectToAttribute: true,
                value: true,
            },
            marginSides_: {
                type: Array,
                notify: true,
                value: [
                    CustomMarginsOrientation.TOP,
                    CustomMarginsOrientation.RIGHT,
                    CustomMarginsOrientation.BOTTOM,
                    CustomMarginsOrientation.LEFT,
                ],
            },
            /**
             * String attribute used to set cursor appearance. Possible values:
             * empty (''): No margin control is currently being dragged.
             * 'dragging-horizontal': The left or right control is being dragged.
             * 'dragging-vertical': The top or bottom control is being dragged.
             */
            dragging_: {
                type: String,
                reflectToAttribute: true,
                value: '',
            },
        };
    }
    static get observers() {
        return [
            'onMarginSettingsChange_(settings.customMargins.value)',
            'onMediaSizeOrLayoutChange_(' +
                'settings.mediaSize.value, settings.layout.value)',
        ];
    }
    computeAvailable_() {
        return this.previewLoaded && !!this.clipSize_ &&
            (this.getSettingValue('margins') ===
                MarginsType.CUSTOM) &&
            !!this.pageSize;
    }
    onAvailableChange_() {
        if (this.available_ && this.resetMargins_) {
            // Set the custom margins values to the current document margins if the
            // custom margins were reset.
            const newMargins = {};
            for (const side of Object.values(CustomMarginsOrientation)) {
                const key = MARGIN_KEY_MAP.get(side);
                newMargins[key] = this.documentMargins.get(side);
            }
            this.setSetting('customMargins', newMargins);
            this.resetMargins_ = false;
        }
        this.invisible_ = !this.available_;
    }
    onMarginSettingsChange_() {
        const margins = this.getSettingValue('customMargins');
        if (!margins || margins.marginTop === undefined) {
            // This may be called when print preview model initially sets the
            // settings. It sets custom margins empty by default.
            return;
        }
        this.shadowRoot.querySelectorAll('print-preview-margin-control')
            .forEach(control => {
            const key = MARGIN_KEY_MAP.get(control.side);
            const newValue = margins[key] || 0;
            control.setPositionInPts(newValue);
            control.setTextboxValue(newValue);
        });
    }
    onMediaSizeOrLayoutChange_() {
        // Reset the custom margins when the paper size changes. Don't do this if
        // it is the first preview.
        if (this.resetMargins_ === null) {
            return;
        }
        this.resetMargins_ = true;
        // Reset custom margins so that the sticky value is not restored for the new
        // paper size.
        this.setSetting('customMargins', {});
    }
    onStateChanged_() {
        if (this.state === State.READY && this.resetMargins_ === null) {
            // Don't reset margins if there are sticky values. Otherwise, set them
            // to the document margins when the user selects custom margins.
            const margins = this.getSettingValue('customMargins');
            this.resetMargins_ = !margins || margins.marginTop === undefined;
        }
    }
    /**
     * @return Whether the controls should be disabled.
     */
    controlsDisabled_() {
        return this.state !== State.READY || this.invisible_;
    }
    /**
     * @param orientation Orientation value to test.
     * @return Whether the given orientation is TOP or BOTTOM.
     */
    isTopOrBottom_(orientation) {
        return orientation === CustomMarginsOrientation.TOP ||
            orientation === CustomMarginsOrientation.BOTTOM;
    }
    /**
     * @param control Control being repositioned.
     * @param posInPixels Desired position, in pixels.
     * @return The new position for the control, in pts. Returns the
     *     position for the dimension that the control operates in, i.e.
     *     x direction for the left/right controls, y direction otherwise.
     */
    posInPixelsToPts_(control, posInPixels) {
        const side = control.side;
        return this.clipAndRoundValue_(side, control.convertPixelsToPts(this.isTopOrBottom_(side) ? posInPixels.y : posInPixels.x));
    }
    /**
     * Moves the position of the given control to the desired position in pts
     * within some constraint minimum and maximum.
     * @param control Control to move.
     * @param posInPts Desired position to move to, in pts. Position is
     *     1 dimensional and represents position in the x direction if control
     * is for the left or right margin, and the y direction otherwise.
     */
    moveControlWithConstraints_(control, posInPts) {
        control.setPositionInPts(posInPts);
        control.setTextboxValue(posInPts);
    }
    /**
     * Translates the position of the margin control relative to the pointer
     * position in pixels.
     * @param pointerPosition New position of the pointer.
     * @return New position of the margin control.
     */
    translatePointerToPositionInPixels(pointerPosition) {
        return new Coordinate2d(pointerPosition.x - this.pointerStartPositionInPixels_.x +
            this.marginStartPositionInPixels_.x, pointerPosition.y - this.pointerStartPositionInPixels_.y +
            this.marginStartPositionInPixels_.y);
    }
    /**
     * Called when the pointer moves in the custom margins component. Moves the
     * dragged margin control.
     * @param event Contains the position of the pointer.
     */
    onPointerMove_(event) {
        const control = event.target;
        const posInPts = this.posInPixelsToPts_(control, this.translatePointerToPositionInPixels(new Coordinate2d(event.x, event.y)));
        this.moveControlWithConstraints_(control, posInPts);
    }
    /**
     * Called when the pointer is released in the custom margins component.
     * Releases the dragged margin control.
     * @param event Contains the position of the pointer.
     */
    onPointerUp_(event) {
        const control = event.target;
        this.dragging_ = '';
        const posInPixels = this.translatePointerToPositionInPixels(new Coordinate2d(event.x, event.y));
        const posInPts = this.posInPixelsToPts_(control, posInPixels);
        this.moveControlWithConstraints_(control, posInPts);
        this.setMargin_(control.side, posInPts);
        this.updateClippingMask(this.clipSize_);
        this.eventTracker_.remove(control, 'pointercancel');
        this.eventTracker_.remove(control, 'pointerup');
        this.eventTracker_.remove(control, 'pointermove');
        this.fireDragChanged_(false);
    }
    /**
     * @param invisible Whether the margin controls should be invisible.
     */
    setInvisible(invisible) {
        // Ignore changes if the margin controls are not available.
        if (!this.available_) {
            return;
        }
        // Do not set the controls invisible if the user is dragging or focusing
        // the textbox for one of them.
        if (invisible && (this.dragging_ !== '' || this.textboxFocused_)) {
            return;
        }
        this.invisible_ = invisible;
    }
    /**
     * @param e Contains information about what control fired the event.
     */
    onTextFocus_(e) {
        this.textboxFocused_ = true;
        const control = e.target;
        const x = control.offsetLeft;
        const y = control.offsetTop;
        const isTopOrBottom = this.isTopOrBottom_(control.side);
        const position = {};
        // Extra padding, in px, to ensure the full textbox will be visible and
        // not just a portion of it. Can't be less than half the width or height
        // of the clip area for the computations below to work.
        const padding = Math.min(Math.min(this.clipSize_.width / 2, this.clipSize_.height / 2), 50);
        // Note: clipSize_ gives the current visible area of the margin control
        // container. The offsets of the controls are relative to the origin of
        // this visible area.
        if (isTopOrBottom) {
            // For top and bottom controls, the horizontal position of the box is
            // around halfway across the control's width.
            position.x = Math.min(x + control.offsetWidth / 2 - padding, 0);
            position.x = Math.max(x + control.offsetWidth / 2 + padding - this.clipSize_.width, position.x);
            // For top and bottom controls, the vertical position of the box is
            // nearly the same as the vertical position of the control.
            position.y = Math.min(y - padding, 0);
            position.y = Math.max(y - this.clipSize_.height + padding, position.y);
        }
        else {
            // For left and right controls, the horizontal position of the box is
            // nearly the same as the horizontal position of the control.
            position.x = Math.min(x - padding, 0);
            position.x = Math.max(x - this.clipSize_.width + padding, position.x);
            // For top and bottom controls, the vertical position of the box is
            // around halfway up the control's height.
            position.y = Math.min(y + control.offsetHeight / 2 - padding, 0);
            position.y = Math.max(y + control.offsetHeight / 2 + padding - this.clipSize_.height, position.y);
        }
        this.dispatchEvent(new CustomEvent('text-focus-position', { bubbles: true, composed: true, detail: position }));
    }
    /**
     * @param marginSide The margin side. Must be a CustomMarginsOrientation.
     * @param marginValue New value for the margin in points.
     */
    setMargin_(marginSide, marginValue) {
        const oldMargins = this.getSettingValue('customMargins');
        const key = MARGIN_KEY_MAP.get(marginSide);
        if (oldMargins[key] === marginValue) {
            return;
        }
        const newMargins = Object.assign({}, oldMargins);
        newMargins[key] = marginValue;
        this.setSetting('customMargins', newMargins);
    }
    /**
     * @param marginSide The margin side.
     * @param value The new margin value in points.
     * @return The clipped margin value in points.
     */
    clipAndRoundValue_(marginSide, value) {
        if (value < 0) {
            return 0;
        }
        const Orientation = CustomMarginsOrientation;
        let limit = 0;
        const margins = this.getSettingValue('customMargins');
        if (marginSide === Orientation.TOP) {
            limit = this.pageSize.height - margins.marginBottom - MINIMUM_DISTANCE;
        }
        else if (marginSide === Orientation.RIGHT) {
            limit = this.pageSize.width - margins.marginLeft - MINIMUM_DISTANCE;
        }
        else if (marginSide === Orientation.BOTTOM) {
            limit = this.pageSize.height - margins.marginTop - MINIMUM_DISTANCE;
        }
        else {
            assert(marginSide === Orientation.LEFT);
            limit = this.pageSize.width - margins.marginRight - MINIMUM_DISTANCE;
        }
        return Math.round(Math.min(value, limit));
    }
    /**
     * @param e Event containing the new textbox value.
     */
    onTextChange_(e) {
        const control = e.target;
        control.invalid = false;
        const clippedValue = this.clipAndRoundValue_(control.side, e.detail);
        control.setPositionInPts(clippedValue);
        this.setMargin_(control.side, clippedValue);
    }
    /**
     * @param e Event fired when a control's text field is blurred. Contains
     *     information about whether the control is in an invalid state.
     */
    onTextBlur_(e) {
        const control = e.target;
        control.setTextboxValue(control.getPositionInPts());
        if (e.detail /* detail is true if the control is in an invalid state */) {
            control.invalid = false;
        }
        this.textboxFocused_ = false;
    }
    /**
     * @param e Fired when pointerdown occurs on a margin control.
     */
    onPointerDown_(e) {
        const control = e.target;
        if (!control.shouldDrag(e)) {
            return;
        }
        this.pointerStartPositionInPixels_ = new Coordinate2d(e.x, e.y);
        this.marginStartPositionInPixels_ =
            new Coordinate2d(control.offsetLeft, control.offsetTop);
        this.dragging_ = this.isTopOrBottom_(control.side) ? 'dragging-vertical' :
            'dragging-horizontal';
        this.eventTracker_.add(control, 'pointercancel', (e) => this.onPointerUp_(e));
        this.eventTracker_.add(control, 'pointerup', (e) => this.onPointerUp_(e));
        this.eventTracker_.add(control, 'pointermove', (e) => this.onPointerMove_(e));
        control.setPointerCapture(e.pointerId);
        this.fireDragChanged_(true);
    }
    /**
     * @param dragChanged
     */
    fireDragChanged_(dragChanged) {
        this.dispatchEvent(new CustomEvent('margin-drag-changed', { bubbles: true, composed: true, detail: dragChanged }));
    }
    /**
     * Set display:none after the opacity transition for the controls is done.
     */
    onTransitionEnd_() {
        if (this.invisible_) {
            this.style.display = 'none';
        }
    }
    /**
     * Updates the translation transformation that translates pixel values in
     * the space of the HTML DOM.
     * @param translateTransform Updated value of the translation transformation.
     */
    updateTranslationTransform(translateTransform) {
        if (!translateTransform.equals(this.translateTransform_)) {
            this.translateTransform_ = translateTransform;
        }
    }
    /**
     * Updates the scaling transform that scales pixels values to point values.
     * @param scaleTransform Updated value of the scale transform.
     */
    updateScaleTransform(scaleTransform) {
        if (scaleTransform !== this.scaleTransform_) {
            this.scaleTransform_ = scaleTransform;
        }
    }
    /**
     * Clips margin controls to the given clip size in pixels.
     * @param clipSize Size to clip the margin controls to.
     */
    updateClippingMask(clipSize) {
        if (!clipSize) {
            return;
        }
        this.clipSize_ = clipSize;
        this.notifyPath('clipSize_');
    }
}
customElements.define(PrintPreviewMarginControlContainerElement.is, PrintPreviewMarginControlContainerElement);

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PluginProxyImpl {
    constructor() {
        this.plugin_ = null;
    }
    pluginReady() {
        return !!this.plugin_;
    }
    createPlugin(previewUid, index) {
        assert(!this.plugin_);
        const srcUrl = this.getPreviewUrl_(previewUid, index);
        this.plugin_ = pdfCreateOutOfProcessPlugin(srcUrl, 'chrome://print/pdf/index_print.html');
        this.plugin_.classList.add('preview-area-plugin');
        // NOTE: The plugin's 'id' field must be set to 'pdf-viewer' since
        // chrome/renderer/printing/print_render_frame_helper.cc actually
        // references it.
        this.plugin_.setAttribute('id', 'pdf-viewer');
        return this.plugin_;
    }
    /**
     * Get the URL for the plugin.
     * @param previewUid Unique identifier of preview.
     * @param index Page index for plugin.
     */
    getPreviewUrl_(previewUid, index) {
        return `chrome-untrusted://print/${previewUid}/${index}/print.pdf`;
    }
    resetPrintPreviewMode(previewUid, index, color, pages, modifiable) {
        this.plugin_.resetPrintPreviewMode(this.getPreviewUrl_(previewUid, index), color, pages, modifiable);
    }
    scrollPosition(scrollX, scrollY) {
        this.plugin_.scrollPosition(scrollX, scrollY);
    }
    sendKeyEvent(e) {
        this.plugin_.sendKeyEvent(e);
    }
    hideToolbar() {
        this.plugin_.hideToolbar();
    }
    setPointerEvents(eventsEnabled) {
        this.plugin_.style.pointerEvents = eventsEnabled ? 'auto' : 'none';
    }
    loadPreviewPage(previewUid, pageIndex, index) {
        this.plugin_.loadPreviewPage(this.getPreviewUrl_(previewUid, pageIndex), index);
    }
    setKeyEventCallback(keyEventCallback) {
        this.plugin_.setKeyEventCallback(keyEventCallback);
    }
    setLoadCompleteCallback(loadCompleteCallback) {
        this.plugin_.setLoadCompleteCallback(loadCompleteCallback);
    }
    setViewportChangedCallback(viewportChangedCallback) {
        this.plugin_.setViewportChangedCallback(viewportChangedCallback);
    }
    darkModeChanged(darkMode) {
        this.plugin_.darkModeChanged(darkMode);
    }
    static setInstance(obj) {
        instance = obj;
    }
    static getInstance() {
        return instance || (instance = new PluginProxyImpl());
    }
}
let instance = null;

function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style">@keyframes dancing-dots-jump{0%{top:0}55%{top:0}60%{top:-10px}80%{top:3px}90%{top:-2px}95%{top:1px}100%{top:0}}:host([show-cros-printer-setup-info_]) .preview-area-message{background:#fff;border-radius:16px;display:flex;flex-direction:column;height:100%;justify-content:center;margin:16px}@media (prefers-color-scheme:dark){:host([show-cros-printer-setup-info_]) .preview-area-message{background:#28292c}}span.jumping-dots>span{animation:dancing-dots-jump 1.8s infinite;padding:1px;position:relative}span.jumping-dots>span:nth-child(2){animation-delay:.1s}span.jumping-dots>span:nth-child(3){animation-delay:.3s}:host{display:block;height:100%;overflow:hidden;position:relative;user-select:none}.preview-area-plugin-wrapper{height:100%}.preview-area-plugin{border:none;cursor:inherit;height:100%;opacity:1;transition:opacity .2s linear;transition-delay:.1s;width:100%}.preview-area-overlay-layer{background:var(--preview-area-background-color);display:flex;flex-direction:column;height:100%;justify-content:center;margin:0;opacity:1;position:absolute;transition:opacity .2s linear;transition-delay:350ms;user-select:none;width:100%;z-index:1}.preview-area-overlay-layer.invisible{opacity:0;pointer-events:none;transition:opacity .1s linear}.preview-area-message{color:var(--cr-primary-text-color);line-height:20px;margin:0 10px;position:relative;text-align:center}</style>
<div class$="preview-area-overlay-layer [[getInvisible_(previewState)]]" aria-hidden$="[[getAriaHidden_(previewState)]]">
  <div class="preview-area-message">
    <div>
      <span hidden$="[[showCrosPrinterSetupInfo_]]" inner-h-t-m-l="[[currentMessage_(previewState)]]">
      </span>
      <span class$="preview-area-loading-message-jumping-dots
                    [[getJumpingDots_(previewState)]]" hidden$="[[!isPreviewLoading_(previewState)]]">
          <span>.</span><span>.</span><span>.</span>
      </span>
    </div>
    
      <print-preview-printer-setup-info-cros hidden$="[[!showCrosPrinterSetupInfo_]]" message-type="[[printerOffline_]]" metrics-source="[[previewAreaSource_]]">
      </print-preview-printer-setup-info-cros>
    
  </div>
</div>
<div class="preview-area-plugin-wrapper"></div>
<print-preview-margin-control-container id="marginControlContainer" page-size="[[pageSize]]" settings="[[settings]]" document-margins="[[margins]]" measurement-system="[[measurementSystem]]" state="[[state]]" preview-loaded="[[previewLoaded_]]" on-text-focus-position="onTextFocusPosition_" on-margin-drag-changed="onMarginDragChanged_">
</print-preview-margin-control-container>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var PreviewAreaState;
(function (PreviewAreaState) {
    PreviewAreaState["LOADING"] = "loading";
    PreviewAreaState["DISPLAY_PREVIEW"] = "display-preview";
    PreviewAreaState["OPEN_IN_PREVIEW_LOADING"] = "open-in-preview-loading";
    PreviewAreaState["OPEN_IN_PREVIEW_LOADED"] = "open-in-preview-loaded";
    PreviewAreaState["ERROR"] = "error";
})(PreviewAreaState || (PreviewAreaState = {}));
const PrintPreviewPreviewAreaElementBase = WebUiListenerMixin(I18nMixin(SettingsMixin(DarkModeMixin(PolymerElement))));
class PrintPreviewPreviewAreaElement extends PrintPreviewPreviewAreaElementBase {
    constructor() {
        super(...arguments);
        // 
        this.showCrosPrinterSetupInfo_ = false;
        this.nativeLayer_ = null;
        this.lastTicket_ = null;
        this.inFlightRequestId_ = -1;
        this.pluginProxy_ = PluginProxyImpl.getInstance();
        this.keyEventCallback_ = null;
    }
    static get is() {
        return 'print-preview-preview-area';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            destination: Object,
            documentModifiable: Boolean,
            error: {
                type: Number,
                notify: true,
            },
            margins: Object,
            measurementSystem: Object,
            pageSize: Object,
            previewState: {
                type: String,
                notify: true,
                value: PreviewAreaState.LOADING,
            },
            state: Number,
            pluginLoadComplete_: {
                type: Boolean,
                value: false,
            },
            documentReady_: {
                type: Boolean,
                value: false,
            },
            previewLoaded_: {
                type: Boolean,
                notify: true,
                computed: 'computePreviewLoaded_(documentReady_, pluginLoadComplete_)',
            },
            // 
            isPrintPreviewSetupAssistanceEnabled_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('isPrintPreviewSetupAssistanceEnabled');
                },
                readOnly: true,
            },
            printerOffline_: {
                type: Number,
                value: PrinterSetupInfoMessageType.PRINTER_OFFLINE,
                readOnly: true,
            },
            previewAreaSource_: {
                type: Number,
                value: PrinterSetupInfoMetricsSource.PREVIEW_AREA,
                readOnly: true,
            },
            // 
            showCrosPrinterSetupInfo_: {
                type: Boolean,
                computed: 'computeShowCrosPrinterSetupInfo(state, error)',
                reflectToAttribute: true,
            },
        };
    }
    static get observers() {
        return [
            'onDarkModeChanged_(inDarkMode)',
            'pluginOrDocumentStatusChanged_(pluginLoadComplete_, documentReady_)',
            'onStateOrErrorChange_(state, error)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.nativeLayer_ = NativeLayerImpl.getInstance();
        this.addWebUiListener('page-preview-ready', this.onPagePreviewReady_.bind(this));
    }
    computePreviewLoaded_() {
        return this.documentReady_ && this.pluginLoadComplete_;
    }
    getLastTicketForTest() {
        return this.lastTicket_;
    }
    previewLoaded() {
        return this.previewLoaded_;
    }
    /**
     * Called when the pointer moves onto the component. Shows the margin
     * controls if custom margins are being used.
     * @param event Contains element pointer moved from.
     */
    onPointerOver_(event) {
        const marginControlContainer = this.$.marginControlContainer;
        let fromElement = event.relatedTarget;
        while (fromElement !== null) {
            if (fromElement === marginControlContainer) {
                return;
            }
            fromElement = fromElement.parentElement;
        }
        marginControlContainer.setInvisible(false);
    }
    /**
     * Called when the pointer moves off of the component. Hides the margin
     * controls if they are visible.
     * @param event Contains element pointer moved to.
     */
    onPointerOut_(event) {
        const marginControlContainer = this.$.marginControlContainer;
        let toElement = event.relatedTarget;
        while (toElement !== null) {
            if (toElement === marginControlContainer) {
                return;
            }
            toElement = toElement.parentElement;
        }
        marginControlContainer.setInvisible(true);
    }
    pluginOrDocumentStatusChanged_() {
        if (!this.pluginLoadComplete_ || !this.documentReady_ ||
            this.previewState === PreviewAreaState.ERROR) {
            return;
        }
        this.previewState =
            this.previewState === PreviewAreaState.OPEN_IN_PREVIEW_LOADING ?
                PreviewAreaState.OPEN_IN_PREVIEW_LOADED :
                PreviewAreaState.DISPLAY_PREVIEW;
    }
    /**
     * @return 'invisible' if overlay is invisible, '' otherwise.
     */
    getInvisible_() {
        return this.isInDisplayPreviewState_() ? 'invisible' : '';
    }
    /**
     * @return 'true' if overlay is aria-hidden, 'false' otherwise.
     */
    getAriaHidden_() {
        return this.isInDisplayPreviewState_().toString();
    }
    /**
     * @return Whether the preview area is in DISPLAY_PREVIEW state.
     */
    isInDisplayPreviewState_() {
        return this.previewState === PreviewAreaState.DISPLAY_PREVIEW;
    }
    /**
     * @return Whether the preview is currently loading.
     */
    isPreviewLoading_() {
        return this.previewState === PreviewAreaState.LOADING;
    }
    /**
     * @return 'jumping-dots' to enable animation, '' otherwise.
     */
    getJumpingDots_() {
        return this.isPreviewLoading_() ? 'jumping-dots' : '';
    }
    /**
     * @return The current preview area message to display.
     */
    currentMessage_() {
        switch (this.previewState) {
            case PreviewAreaState.LOADING:
                return this.i18nAdvanced('loading');
            case PreviewAreaState.DISPLAY_PREVIEW:
                return window.trustedTypes.emptyHTML;
            // 
            case PreviewAreaState.ERROR:
                // The preview area is responsible for displaying all errors except
                // print failed.
                return this.getErrorMessage_();
            default:
                return window.trustedTypes.emptyHTML;
        }
    }
    /**
     * @param forceUpdate Whether to force the preview area to update
     *     regardless of whether the print ticket has changed.
     */
    startPreview(forceUpdate) {
        if (!this.hasTicketChanged_() && !forceUpdate &&
            this.previewState !== PreviewAreaState.ERROR) {
            return;
        }
        this.previewState = PreviewAreaState.LOADING;
        this.documentReady_ = false;
        this.getPreview_().then(previewUid => {
            if (!this.documentModifiable) {
                this.onPreviewStart_(previewUid, -1);
            }
            this.documentReady_ = true;
        }, type => {
            if (type === 'SETTINGS_INVALID') {
                this.error = Error$1.INVALID_PRINTER;
                this.previewState = PreviewAreaState.ERROR;
            }
            else if (type !== 'CANCELLED') {
                this.error = Error$1.PREVIEW_FAILED;
                this.previewState = PreviewAreaState.ERROR;
            }
        });
    }
    // 
    /**
     * @param previewUid The unique identifier of the preview.
     * @param index The index of the page to preview.
     */
    onPreviewStart_(previewUid, index) {
        if (!this.pluginProxy_.pluginReady()) {
            const plugin = this.pluginProxy_.createPlugin(previewUid, index);
            this.pluginProxy_.setKeyEventCallback(this.keyEventCallback_);
            this.shadowRoot.querySelector('.preview-area-plugin-wrapper').appendChild(plugin);
            this.pluginProxy_.setLoadCompleteCallback(this.onPluginLoadComplete_.bind(this));
            this.pluginProxy_.setViewportChangedCallback(this.onPreviewVisualStateChange_.bind(this));
        }
        this.pluginLoadComplete_ = false;
        if (this.inDarkMode) {
            this.pluginProxy_.darkModeChanged(true);
        }
        this.pluginProxy_.resetPrintPreviewMode(previewUid, index, !this.getSettingValue('color'), this.getSettingValue('pages'), this.documentModifiable);
    }
    /**
     * Called when the plugin loads the preview completely.
     * @param success Whether the plugin load succeeded or not.
     */
    onPluginLoadComplete_(success) {
        if (success) {
            this.pluginLoadComplete_ = true;
        }
        else {
            this.error = Error$1.PREVIEW_FAILED;
            this.previewState = PreviewAreaState.ERROR;
        }
    }
    /**
     * Called when the preview plugin's visual state has changed. This is a
     * consequence of scrolling or zooming the plugin. Updates the custom
     * margins component if shown.
     * @param pageX The horizontal offset for the page corner in pixels.
     * @param pageY The vertical offset for the page corner in pixels.
     * @param pageWidth The page width in pixels.
     * @param viewportWidth The viewport width in pixels.
     * @param viewportHeight The viewport height in pixels.
     */
    onPreviewVisualStateChange_(pageX, pageY, pageWidth, viewportWidth, viewportHeight) {
        // Ensure the PDF viewer isn't tabbable if the window is small enough that
        // the zoom toolbar isn't displayed.
        const tabindex = viewportWidth < 300 || viewportHeight < 200 ? '-1' : '0';
        this.shadowRoot.querySelector('.preview-area-plugin').setAttribute('tabindex', tabindex);
        this.$.marginControlContainer.updateTranslationTransform(new Coordinate2d(pageX, pageY));
        this.$.marginControlContainer.updateScaleTransform(pageWidth / this.pageSize.width);
        this.$.marginControlContainer.updateClippingMask(new Size(viewportWidth, viewportHeight));
        // Align the margin control container with the preview content area.
        // The offset may be caused by the scrollbar on the left in the preview
        // area in right-to-left direction.
        const previewDocument = this.shadowRoot
            .querySelector('.preview-area-plugin').contentDocument;
        if (previewDocument && previewDocument.documentElement) {
            this.$.marginControlContainer.style.left =
                previewDocument.documentElement.offsetLeft + 'px';
        }
    }
    /**
     * Called when a page's preview has been generated.
     * @param pageIndex The index of the page whose preview is ready.
     * @param previewUid The unique ID of the print preview UI.
     * @param previewResponseId The preview request ID that this page
     *     preview is a response to.
     */
    onPagePreviewReady_(pageIndex, previewUid, previewResponseId) {
        if (this.inFlightRequestId_ !== previewResponseId) {
            return;
        }
        const pageNumber = pageIndex + 1;
        let index = this.getSettingValue('pages').indexOf(pageNumber);
        // When pagesPerSheet > 1, the backend will always return page indices 0 to
        // N-1, where N is the total page count of the N-upped document.
        const pagesPerSheet = this.getSettingValue('pagesPerSheet');
        if (pagesPerSheet > 1) {
            index = pageIndex;
        }
        if (index === 0) {
            this.onPreviewStart_(previewUid, pageIndex);
        }
        if (index !== -1) {
            this.pluginProxy_.loadPreviewPage(previewUid, pageIndex, index);
        }
    }
    onDarkModeChanged_() {
        if (this.pluginProxy_.pluginReady()) {
            this.pluginProxy_.darkModeChanged(this.inDarkMode);
        }
        if (this.previewState === PreviewAreaState.DISPLAY_PREVIEW) {
            this.startPreview(true);
        }
    }
    /**
     * Processes a keyboard event that could possibly be used to change state of
     * the preview plugin.
     * @param e Keyboard event to process.
     */
    handleDirectionalKeyEvent(e) {
        // Make sure the PDF plugin is there.
        // We only care about: PageUp, PageDown, Left, Up, Right, Down.
        // If the user is holding a modifier key, ignore.
        if (!this.pluginProxy_.pluginReady() ||
            !['PageUp', 'PageDown', 'ArrowLeft', 'ArrowRight', 'ArrowUp',
                'ArrowDown']
                .includes(e.key) ||
            hasKeyModifiers(e)) {
            return;
        }
        // Don't handle the key event for these elements.
        const tagName = e.composedPath()[0].tagName;
        if (['INPUT', 'SELECT', 'EMBED'].includes(tagName)) {
            return;
        }
        // For the most part, if any div of header was the last clicked element,
        // then the active element is the body. Starting with the last clicked
        // element, and work up the DOM tree to see if any element has a
        // scrollbar. If there exists a scrollbar, do not handle the key event
        // here.
        const isEventHorizontal = ['ArrowLeft', 'ArrowRight'].includes(e.key);
        for (let i = 0; i < e.composedPath().length; i++) {
            const element = e.composedPath()[i];
            if (element.scrollHeight > element.clientHeight && !isEventHorizontal ||
                element.scrollWidth > element.clientWidth && isEventHorizontal) {
                return;
            }
        }
        // No scroll bar anywhere, or the active element is something else, like a
        // button. Note: buttons have a bigger scrollHeight than clientHeight.
        this.pluginProxy_.sendKeyEvent(e);
        e.preventDefault();
    }
    /**
     * Sends a message to the plugin to hide the toolbars after a delay.
     */
    hideToolbar() {
        if (!this.pluginProxy_.pluginReady()) {
            return;
        }
        this.pluginProxy_.hideToolbar();
    }
    /**
     * Set a callback that gets called when a key event is received that
     * originates in the plugin.
     * @param callback The callback to be called with a key event.
     */
    setPluginKeyEventCallback(callback) {
        this.keyEventCallback_ = callback;
    }
    /**
     * Called when dragging margins starts or stops.
     */
    onMarginDragChanged_(e) {
        if (!this.pluginProxy_.pluginReady()) {
            return;
        }
        // When hovering over the plugin (which may be in a separate iframe)
        // pointer events will be sent to the frame. When dragging the margins,
        // we don't want this to happen as it can cause the margin to stop
        // being draggable.
        this.pluginProxy_.setPointerEvents(!e.detail);
    }
    /**
     * @param e Contains information about where the plugin should scroll to.
     */
    onTextFocusPosition_(e) {
        // TODO(tkent): This is a workaround of a preview-area scrolling
        // issue. Blink scrolls preview-area on focus, but we don't want it.  We
        // should adjust scroll position of PDF preview and positions of
        // MarginContgrols here, or restructure the HTML so that the PDF review
        // and MarginControls are on the single scrollable container.
        // crbug.com/601341
        this.scrollTop = 0;
        this.scrollLeft = 0;
        const position = e.detail;
        if (position.x === 0 && position.y === 0) {
            return;
        }
        this.pluginProxy_.scrollPosition(position.x, position.y);
    }
    /**
     * @return Whether margin settings are valid for the print ticket.
     */
    marginsValid_() {
        const type = this.getSettingValue('margins');
        if (!Object.values(MarginsType).includes(type)) {
            // Unrecognized margins type.
            return false;
        }
        if (type !== MarginsType.CUSTOM) {
            return true;
        }
        const customMargins = this.getSettingValue('customMargins');
        return customMargins.marginTop !== undefined &&
            customMargins.marginLeft !== undefined &&
            customMargins.marginBottom !== undefined &&
            customMargins.marginRight !== undefined;
    }
    hasTicketChanged_() {
        if (!this.marginsValid_()) {
            return false;
        }
        if (!this.lastTicket_) {
            return true;
        }
        const lastTicket = this.lastTicket_;
        // Margins
        const newMarginsType = this.getSettingValue('margins');
        if (newMarginsType !== lastTicket.marginsType &&
            newMarginsType !== MarginsType.CUSTOM) {
            return true;
        }
        if (newMarginsType === MarginsType.CUSTOM) {
            const customMargins = this.getSettingValue('customMargins');
            // Change in custom margins values.
            if (!!lastTicket.marginsCustom &&
                (lastTicket.marginsCustom.marginTop !== customMargins.marginTop ||
                    lastTicket.marginsCustom.marginLeft !== customMargins.marginLeft ||
                    lastTicket.marginsCustom.marginRight !== customMargins.marginRight ||
                    lastTicket.marginsCustom.marginBottom !==
                        customMargins.marginBottom)) {
                return true;
            }
            // Changed to custom margins from a different margins type.
            if (!this.margins) {
                return false;
            }
            const customMarginsChanged = Object.values(CustomMarginsOrientation).some(side => {
                return this.margins.get(side) !==
                    customMargins[MARGIN_KEY_MAP.get(side)];
            });
            if (customMarginsChanged) {
                return true;
            }
        }
        // Simple settings: ranges, layout, header/footer, pages per sheet, fit to
        // page, css background, selection only, rasterize, scaling, dpi
        if (!areRangesEqual(this.getSettingValue('ranges'), lastTicket.pageRange) ||
            this.getSettingValue('layout') !== lastTicket.landscape ||
            this.getColorForTicket_() !== lastTicket.color ||
            this.getSettingValue('headerFooter') !==
                lastTicket.headerFooterEnabled ||
            this.getSettingValue('cssBackground') !==
                lastTicket.shouldPrintBackgrounds ||
            this.getSettingValue('selectionOnly') !==
                lastTicket.shouldPrintSelectionOnly ||
            this.getSettingValue('rasterize') !== lastTicket.rasterizePDF ||
            this.isScalingChanged_(lastTicket)) {
            return true;
        }
        // Pages per sheet. If margins are non-default, wait for the return to
        // default margins to trigger a request.
        if (this.getSettingValue('pagesPerSheet') !== lastTicket.pagesPerSheet &&
            this.getSettingValue('margins') === MarginsType.DEFAULT) {
            return true;
        }
        // Media size
        const newValue = this.getSettingValue('mediaSize');
        if (newValue.height_microns !== lastTicket.mediaSize.height_microns ||
            newValue.width_microns !== lastTicket.mediaSize.width_microns ||
            newValue.imageable_area_left_microns !==
                lastTicket.mediaSize.imageable_area_left_microns ||
            newValue.imageable_area_bottom_microns !==
                lastTicket.mediaSize.imageable_area_bottom_microns ||
            newValue.imageable_area_right_microns !==
                lastTicket.mediaSize.imageable_area_right_microns ||
            newValue.imageable_area_top_microns !==
                lastTicket.mediaSize.imageable_area_top_microns ||
            (this.destination.id !== lastTicket.deviceName &&
                this.getSettingValue('margins') === MarginsType.MINIMUM)) {
            return true;
        }
        // Destination
        if (this.destination.type !== lastTicket.printerType) {
            return true;
        }
        return false;
    }
    /** @return Native color model of the destination. */
    getColorForTicket_() {
        return this.destination.getNativeColorModel(this.getSettingValue('color'));
    }
    /** @return Scale factor for print ticket. */
    getScaleFactorForTicket_() {
        return this.getSettingValue(this.getScalingSettingKey_()) ===
            ScalingType.CUSTOM ?
            parseInt(this.getSettingValue('scaling'), 10) :
            100;
    }
    /** @return Appropriate key for the scaling type setting. */
    getScalingSettingKey_() {
        return this.getSetting('scalingTypePdf').available ? 'scalingTypePdf' :
            'scalingType';
    }
    /**
     * @param lastTicket Last print ticket.
     * @return Whether new scaling settings update the previewed
     *     document.
     */
    isScalingChanged_(lastTicket) {
        // Preview always updates if the scale factor is changed.
        if (this.getScaleFactorForTicket_() !== lastTicket.scaleFactor) {
            return true;
        }
        // If both scale factors and type match, no scaling change happened.
        const scalingType = this.getSettingValue(this.getScalingSettingKey_());
        if (scalingType === lastTicket.scalingType) {
            return false;
        }
        // Scaling doesn't always change because of a scalingType change. Changing
        // between custom scaling with a scale factor of 100 and default scaling
        // makes no difference.
        const defaultToCustom = scalingType === ScalingType.DEFAULT &&
            lastTicket.scalingType === ScalingType.CUSTOM;
        const customToDefault = scalingType === ScalingType.CUSTOM &&
            lastTicket.scalingType === ScalingType.DEFAULT;
        return !defaultToCustom && !customToDefault;
    }
    /**
     * @param dpiField The field in dpi to retrieve.
     * @return Field value.
     */
    getDpiForTicket_(dpiField) {
        const dpi = this.getSettingValue('dpi');
        const value = (dpi && dpiField in dpi) ? dpi[dpiField] : 0;
        return value;
    }
    /**
     * Requests a preview from the native layer.
     * @return Promise that resolves when the preview has been
     *     generated.
     */
    getPreview_() {
        this.inFlightRequestId_++;
        const ticket = {
            pageRange: this.getSettingValue('ranges'),
            mediaSize: this.getSettingValue('mediaSize'),
            landscape: this.getSettingValue('layout'),
            color: this.getColorForTicket_(),
            headerFooterEnabled: this.getSettingValue('headerFooter'),
            marginsType: this.getSettingValue('margins'),
            pagesPerSheet: this.getSettingValue('pagesPerSheet'),
            isFirstRequest: this.inFlightRequestId_ === 0,
            requestID: this.inFlightRequestId_,
            previewModifiable: this.documentModifiable,
            scaleFactor: this.getScaleFactorForTicket_(),
            scalingType: this.getSettingValue(this.getScalingSettingKey_()),
            shouldPrintBackgrounds: this.getSettingValue('cssBackground'),
            shouldPrintSelectionOnly: this.getSettingValue('selectionOnly'),
            // NOTE: Even though the remaining fields don't directly relate to the
            // preview, they still need to be included.
            // e.g. printing::PrintSettingsFromJobSettings() still checks for them.
            collate: true,
            copies: 1,
            deviceName: this.destination.id,
            dpiHorizontal: this.getDpiForTicket_('horizontal_dpi'),
            dpiVertical: this.getDpiForTicket_('vertical_dpi'),
            duplex: this.getSettingValue('duplex') ? DuplexMode.LONG_EDGE :
                DuplexMode.SIMPLEX,
            printerType: this.destination.type,
            rasterizePDF: this.getSettingValue('rasterize'),
        };
        if (this.getSettingValue('margins') === MarginsType.CUSTOM) {
            ticket.marginsCustom = this.getSettingValue('customMargins');
        }
        this.lastTicket_ = ticket;
        this.dispatchEvent(new CustomEvent('preview-start', { bubbles: true, composed: true, detail: this.inFlightRequestId_ }));
        return this.nativeLayer_.getPreview(JSON.stringify(ticket));
    }
    onStateOrErrorChange_() {
        if ((this.state === State.ERROR || this.state === State.FATAL_ERROR) &&
            this.getErrorMessage_().toString() !== '') {
            this.previewState = PreviewAreaState.ERROR;
        }
    }
    /** @return The error message to display in the preview area. */
    getErrorMessage_() {
        switch (this.error) {
            case Error$1.INVALID_PRINTER:
                return this.i18nAdvanced('invalidPrinterSettings', {
                    substitutions: [],
                    tags: ['BR'],
                });
            // 
            case Error$1.NO_DESTINATIONS:
                return this.i18nAdvanced('noDestinationsMessage');
            // 
            case Error$1.PREVIEW_FAILED:
                return this.i18nAdvanced('previewFailed');
            default:
                return window.trustedTypes.emptyHTML;
        }
    }
    /**
     * Determines if setup info element should be shown instead of the preview
     * area message. For ChromeOS, setup assistance is shown if the flag is
     * enabled and the `INVALID_PRINTER` error has occurred. All other platforms
     * `computeShowCrosPrinterSetupInfo` will return false.
     */
    computeShowCrosPrinterSetupInfo() {
        // 
        if (this.isPrintPreviewSetupAssistanceEnabled_) {
            return this.state === State.ERROR && this.error === Error$1.INVALID_PRINTER;
        }
        // 
        return false;
    }
}
customElements.define(PrintPreviewPreviewAreaElement.is, PrintPreviewPreviewAreaElement);

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PrintPreviewAppElementBase = WebUiListenerMixin(SettingsMixin(PolymerElement));
class PrintPreviewAppElement extends PrintPreviewAppElementBase {
    static get is() {
        return 'print-preview-app';
    }
    static get template() {
        return getTemplate$c();
    }
    static get properties() {
        return {
            state: {
                type: Number,
                observer: 'onStateChanged_',
            },
            controlsManaged_: {
                type: Boolean,
                computed: 'computeControlsManaged_(destinationsManaged_, ' +
                    'settingsManaged_, maxSheets_)',
            },
            destination_: Object,
            destinationsManaged_: {
                type: Boolean,
                value: false,
            },
            destinationState_: {
                type: Number,
                observer: 'onDestinationStateChange_',
            },
            documentSettings_: Object,
            error_: {
                type: Number,
                observer: 'onErrorChange_',
            },
            margins_: Object,
            pageSize_: Object,
            previewState_: {
                type: String,
                observer: 'onPreviewStateChange_',
            },
            printableArea_: Object,
            settingsManaged_: {
                type: Boolean,
                value: false,
            },
            measurementSystem_: {
                type: Object,
                value: null,
            },
            maxSheets_: Number,
        };
    }
    constructor() {
        super();
        this.nativeLayer_ = null;
        this.tracker_ = new EventTracker();
        this.cancelled_ = false;
        this.printRequested_ = false;
        this.startPreviewWhenReady_ = false;
        this.showSystemDialogBeforePrint_ = false;
        this.openPdfInPreview_ = false;
        this.isInKioskAutoPrintMode_ = false;
        this.whenReady_ = null;
        this.openDialogs_ = [];
        // Regular expression that captures the leading slash, the content and the
        // trailing slash in three different groups.
        const CANONICAL_PATH_REGEX = /(^\/)([\/-\w]+)(\/$)/;
        const path = location.pathname.replace(CANONICAL_PATH_REGEX, '$1$2');
        if (path !== '/') { // There are no subpages in Print Preview.
            window.history.replaceState(undefined /* stateObject */, '', '/');
        }
    }
    ready() {
        super.ready();
        FocusOutlineManager.forDocument(document);
    }
    connectedCallback() {
        super.connectedCallback();
        document.documentElement.classList.remove('loading');
        this.nativeLayer_ = NativeLayerImpl.getInstance();
        this.addWebUiListener('cr-dialog-open', this.onCrDialogOpen_.bind(this));
        this.addWebUiListener('close', this.onCrDialogClose_.bind(this));
        this.addWebUiListener('print-failed', this.onPrintFailed_.bind(this));
        this.addWebUiListener('print-preset-options', this.onPrintPresetOptions_.bind(this));
        this.tracker_.add(window, 'keydown', this.onKeyDown_.bind(this));
        this.$.previewArea.setPluginKeyEventCallback(this.onKeyDown_.bind(this));
        this.whenReady_ = whenReady();
        this.nativeLayer_.getInitialSettings().then(this.onInitialSettingsSet_.bind(this));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.tracker_.removeAll();
        this.whenReady_ = null;
    }
    onSidebarFocus_() {
        this.$.previewArea.hideToolbar();
    }
    /**
     * Consume escape and enter key presses and ctrl + shift + p. Delegate
     * everything else to the preview area.
     */
    onKeyDown_(e) {
        // Escape key closes the topmost dialog that is currently open within
        // Print Preview. If no such dialog exists, then the Print Preview dialog
        // itself is closed.
        if (e.key === 'Escape' && !hasKeyModifiers(e)) {
            // Don't close the Print Preview dialog if there is a child dialog open.
            if (this.openDialogs_.length !== 0) {
                // Manually cancel the dialog, since we call preventDefault() to prevent
                // views from closing the Print Preview dialog.
                const dialogToClose = this.openDialogs_[this.openDialogs_.length - 1];
                dialogToClose.cancel();
                e.preventDefault();
                return;
            }
            // On non-mac with toolkit-views, ESC key is handled by C++-side instead
            // of JS-side.
            if (isMac) {
                this.close_();
                e.preventDefault();
            }
            // 
            this.recordCancelMetricCros_();
            // 
            return;
        }
        // On Mac, Cmd+Period should close the print dialog.
        if (isMac && e.key === '.' && e.metaKey) {
            this.close_();
            e.preventDefault();
            return;
        }
        // Ctrl + Shift + p / Mac equivalent. Doesn't apply on Chrome OS.
        // On Linux/Windows, shift + p means that e.key will be 'P' with caps lock
        // off or 'p' with caps lock on.
        // On Mac, alt + p means that e.key will be unicode 03c0 (pi).
        // 
        if ((e.key === 'Enter' || e.key === 'NumpadEnter') &&
            this.state === State.READY && this.openDialogs_.length === 0) {
            const activeElementTag = e.composedPath()[0].tagName;
            if (['CR-BUTTON', 'BUTTON', 'SELECT', 'A', 'CR-CHECKBOX'].includes(activeElementTag)) {
                return;
            }
            this.onPrintRequested_();
            e.preventDefault();
            return;
        }
        // Pass certain directional keyboard events to the PDF viewer.
        this.$.previewArea.handleDirectionalKeyEvent(e);
    }
    onCrDialogOpen_(e) {
        this.openDialogs_.push(e.composedPath()[0]);
    }
    onCrDialogClose_(e) {
        // Note: due to event re-firing in cr_dialog.js, this event will always
        // appear to be coming from the outermost child dialog.
        // TODO(rbpotter): Fix event re-firing so that the event comes from the
        // dialog that has been closed, and add an assertion that the removed
        // dialog matches e.composedPath()[0].
        if (e.composedPath()[0].nodeName === 'CR-DIALOG') {
            this.openDialogs_.pop();
        }
    }
    onInitialSettingsSet_(settings) {
        if (!this.whenReady_) {
            // This element and its corresponding model were detached while waiting
            // for the callback. This can happen in tests; return early.
            return;
        }
        this.whenReady_.then(() => {
            this.$.documentInfo.init(settings.previewModifiable, settings.previewIsFromArc, settings.documentTitle, settings.documentHasSelection);
            this.$.model.setStickySettings(settings.serializedAppStateStr);
            this.$.model.setPolicySettings(settings.policies);
            this.measurementSystem_ = new MeasurementSystem(settings.thousandsDelimiter, settings.decimalDelimiter, settings.unitType);
            this.setSetting('selectionOnly', settings.shouldPrintSelectionOnly);
            this.$.sidebar.init(settings.isInAppKioskMode, settings.printerName, settings.serializedDefaultDestinationSelectionRulesStr, settings.pdfPrinterDisabled, settings.isDriveMounted || false);
            this.destinationsManaged_ = settings.destinationsManaged;
            this.isInKioskAutoPrintMode_ = settings.isInKioskAutoPrintMode;
            // This is only visible in the task manager.
            let title = document.head.querySelector('title');
            if (!title) {
                title = document.createElement('title');
                document.head.appendChild(title);
            }
            title.textContent = settings.documentTitle;
        });
    }
    /**
     * @return Whether any of the print preview settings or destinations
     *     are managed.
     */
    computeControlsManaged_() {
        // If |this.maxSheets_| equals to 0, no sheets limit policy is present.
        return this.destinationsManaged_ || this.settingsManaged_ ||
            this.maxSheets_ > 0;
    }
    onDestinationStateChange_() {
        switch (this.destinationState_) {
            case DestinationState.SET:
                if (this.state !== State.NOT_READY &&
                    this.state !== State.FATAL_ERROR) {
                    this.$.state.transitTo(State.NOT_READY);
                }
                break;
            case DestinationState.UPDATED:
                if (!this.$.model.initialized()) {
                    this.$.model.applyStickySettings();
                }
                this.$.model.applyDestinationSpecificPolicies();
                this.startPreviewWhenReady_ = true;
                if (this.state === State.NOT_READY &&
                    this.destination_.type !== PrinterType.PDF_PRINTER) {
                    this.nativeLayer_.recordBooleanHistogram('PrintPreview.TransitionedToReadyState', true);
                }
                this.$.state.transitTo(State.READY);
                break;
            case DestinationState.ERROR:
                let newState = State.ERROR;
                // 
                if (this.error_ === Error$1.NO_DESTINATIONS) {
                    newState = State.FATAL_ERROR;
                }
                // 
                if (this.state === State.NOT_READY &&
                    this.destination_.type !== PrinterType.PDF_PRINTER) {
                    this.nativeLayer_.recordBooleanHistogram('PrintPreview.TransitionedToReadyState', false);
                }
                this.$.state.transitTo(newState);
                break;
        }
    }
    /**
     * @param e Event containing the new sticky settings.
     */
    onStickySettingChanged_(e) {
        this.nativeLayer_.saveAppState(e.detail);
    }
    onPreviewSettingChanged_() {
        if (this.state === State.READY) {
            this.$.previewArea.startPreview(false);
            this.startPreviewWhenReady_ = false;
        }
        else {
            this.startPreviewWhenReady_ = true;
        }
    }
    onStateChanged_() {
        if (this.state === State.READY) {
            if (this.startPreviewWhenReady_) {
                this.$.previewArea.startPreview(false);
                this.startPreviewWhenReady_ = false;
            }
            if (this.isInKioskAutoPrintMode_ || this.printRequested_) {
                this.onPrintRequested_();
                // Reset in case printing fails.
                this.printRequested_ = false;
            }
        }
        else if (this.state === State.CLOSING) {
            this.remove();
            this.nativeLayer_.dialogClose(this.cancelled_);
        }
        else if (this.state === State.HIDDEN) {
            if (this.destination_.type !== PrinterType.PDF_PRINTER) {
                // Only hide the preview for local, non PDF destinations.
                this.nativeLayer_.hidePreview();
            }
        }
        else if (this.state === State.PRINTING) {
            // 
            if (this.destination_.type === PrinterType.PDF_PRINTER) {
                NativeLayerCrosImpl.getInstance().recordPrintAttemptOutcome(PrintAttemptOutcome.PDF_PRINT_ATTEMPTED);
            }
            // 
            const whenPrintDone = this.nativeLayer_.doPrint(this.$.model.createPrintTicket(this.destination_, this.openPdfInPreview_, this.showSystemDialogBeforePrint_));
            const onError = this.destination_.type === PrinterType.PDF_PRINTER ?
                this.onFileSelectionCancel_.bind(this) :
                this.onPrintFailed_.bind(this);
            whenPrintDone.then(this.close_.bind(this), onError);
        }
    }
    onErrorChange_() {
        if (this.error_ !== Error$1.NONE) {
            this.nativeLayer_.recordInHistogram('PrintPreview.StateError', this.error_, Error$1.MAX_BUCKET);
        }
    }
    onPrintRequested_() {
        if (this.state === State.NOT_READY) {
            this.printRequested_ = true;
            return;
        }
        this.$.state.transitTo(this.$.previewArea.previewLoaded() ? State.PRINTING : State.HIDDEN);
    }
    onCancelRequested_() {
        // 
        this.recordCancelMetricCros_();
        // 
        this.cancelled_ = true;
        this.$.state.transitTo(State.CLOSING);
    }
    // 
    /** Records the Print Preview state when cancel is requested. */
    recordCancelMetricCros_() {
        let printAttemptOutcome = null;
        if (this.state !== State.READY) {
            // Print button is disabled when state !== READY.
            printAttemptOutcome = PrintAttemptOutcome.CANCELLED_PRINT_BUTTON_DISABLED;
        }
        else if (!this.$.sidebar.printerExistsInDisplayedDestinations()) {
            printAttemptOutcome = PrintAttemptOutcome.CANCELLED_NO_PRINTERS_AVAILABLE;
        }
        else if (this.destination_.origin === DestinationOrigin.CROS) {
            // Fetch and record printer state.
            switch (computePrinterState(this.destination_.printerStatusReason)) {
                case PrinterState.GOOD:
                    printAttemptOutcome =
                        PrintAttemptOutcome.CANCELLED_PRINTER_GOOD_STATUS;
                    break;
                case PrinterState.ERROR:
                    printAttemptOutcome =
                        PrintAttemptOutcome.CANCELLED_PRINTER_ERROR_STATUS;
                    break;
                case PrinterState.UNKNOWN:
                    printAttemptOutcome =
                        PrintAttemptOutcome.CANCELLED_PRINTER_UNKNOWN_STATUS;
                    break;
            }
        }
        else {
            printAttemptOutcome =
                PrintAttemptOutcome.CANCELLED_OTHER_PRINTERS_AVAILABLE;
        }
        if (printAttemptOutcome !== null) {
            NativeLayerCrosImpl.getInstance().recordPrintAttemptOutcome(printAttemptOutcome);
        }
    }
    // 
    /**
     * @param e The event containing the new validity.
     */
    onSettingValidChanged_(e) {
        if (e.detail) {
            this.$.state.transitTo(State.READY);
        }
        else {
            this.error_ = Error$1.INVALID_TICKET;
            this.$.state.transitTo(State.ERROR);
        }
    }
    onFileSelectionCancel_() {
        this.$.state.transitTo(State.READY);
    }
    // 
    // 
    /**
     * Called when printing to an extension printer fails.
     * @param httpError The HTTP error code, or -1 or a string describing
     *     the error, if not an HTTP error.
     */
    onPrintFailed_(httpError) {
        console.warn('Printing failed with error code ' + httpError);
        this.error_ = Error$1.PRINT_FAILED;
        this.$.state.transitTo(State.FATAL_ERROR);
    }
    onPreviewStateChange_() {
        switch (this.previewState_) {
            case PreviewAreaState.DISPLAY_PREVIEW:
            case PreviewAreaState.OPEN_IN_PREVIEW_LOADED:
                if (this.state === State.HIDDEN) {
                    this.$.state.transitTo(State.PRINTING);
                }
                break;
            case PreviewAreaState.ERROR:
                if (this.state !== State.ERROR && this.state !== State.FATAL_ERROR) {
                    this.$.state.transitTo(this.error_ === Error$1.INVALID_PRINTER ? State.ERROR :
                        State.FATAL_ERROR);
                }
                break;
        }
    }
    /**
     * Updates printing options according to source document presets.
     * @param disableScaling Whether the document disables scaling.
     * @param copies The default number of copies from the document.
     * @param duplex The default duplex setting from the document.
     */
    onPrintPresetOptions_(disableScaling, copies, duplex) {
        if (disableScaling) {
            this.$.documentInfo.updateIsScalingDisabled(true);
        }
        if (copies > 0 && this.getSetting('copies').available) {
            this.setSetting('copies', copies, true);
        }
        if (duplex === DuplexMode.UNKNOWN_DUPLEX_MODE) {
            return;
        }
        if (this.getSetting('duplex').available) {
            this.setSetting('duplex', duplex === DuplexMode.LONG_EDGE || duplex === DuplexMode.SHORT_EDGE, true);
        }
        if (duplex !== DuplexMode.SIMPLEX &&
            this.getSetting('duplexShortEdge').available) {
            this.setSetting('duplexShortEdge', duplex === DuplexMode.SHORT_EDGE, true);
        }
    }
    /**
     * @param e Contains the new preview request ID.
     */
    onPreviewStart_(e) {
        this.$.documentInfo.inFlightRequestId = e.detail;
    }
    close_() {
        this.$.state.transitTo(State.CLOSING);
    }
}
customElements.define(PrintPreviewAppElement.is, PrintPreviewAppElement);

export { BackgroundGraphicsModeRestriction, ColorMode, ColorModeRestriction, CrButtonElement, CrCheckboxElement, CrIconButtonElement, CustomMarginsOrientation, DEFAULT_MAX_COPIES, DESTINATION_DIALOG_CROS_LOADING_TIMER_IN_MS, Destination, DestinationErrorType, DestinationOrigin, DestinationState, DestinationStore, DestinationStoreEventType, DuplexMode, DuplexModeRestriction, DuplexType, Error$1 as Error, GooglePromotedDestinationId, IronMeta, Margins, MarginsType, MeasurementSystem, MeasurementSystemUnitType, NUM_PERSISTED_DESTINATIONS, NativeLayerCrosImpl, NativeLayerImpl, PDF_DESTINATION_KEY, PagesValue, PinModeRestriction, PluginProxyImpl, PreviewAreaState, PrintPreviewAdvancedSettingsDialogElement, PrintPreviewAdvancedSettingsItemElement, PrintPreviewAppElement, PrintPreviewButtonStripElement, PrintPreviewColorSettingsElement, PrintPreviewCopiesSettingsElement, PrintPreviewDestinationDialogCrosElement, PrintPreviewDestinationDropdownCrosElement, PrintPreviewDestinationListElement, PrintPreviewDestinationListItemElement, PrintPreviewDestinationSelectCrosElement, PrintPreviewDestinationSettingsElement, PrintPreviewDpiSettingsElement, PrintPreviewDuplexSettingsElement, PrintPreviewHeaderElement, PrintPreviewLayoutSettingsElement, PrintPreviewMarginControlContainerElement, PrintPreviewMarginControlElement, PrintPreviewMarginsSettingsElement, PrintPreviewMediaSizeSettingsElement, PrintPreviewMediaTypeSettingsElement, PrintPreviewModelElement, PrintPreviewNumberSettingsSectionElement, PrintPreviewOtherOptionsSettingsElement, PrintPreviewPagesPerSheetSettingsElement, PrintPreviewPagesSettingsElement, PrintPreviewPinSettingsElement, PluralStringProxyImpl as PrintPreviewPluralStringProxyImpl, PrintPreviewPreviewAreaElement, PrintPreviewPrinterSetupInfoCrosElement, PrintPreviewScalingSettingsElement, PrintPreviewSearchBoxElement, PrintPreviewSettingsSelectElement, PrintPreviewSidebarElement, PrintServerStore, PrintServerStoreEventType, PrinterSetupInfoMessageType, PrinterSetupInfoMetricsSource, PrinterState, PrinterStatusReason, PrinterStatusSeverity, PrinterType, SAVE_TO_DRIVE_CROS_DESTINATION_KEY, ScalingType, SelectMixin, Size, State, VendorCapabilityValueType, createDestinationKey, getInstance, getSelectDropdownBackground, makeRecentDestination, whenReady };
//# sourceMappingURL=print_preview.rollup.js.map

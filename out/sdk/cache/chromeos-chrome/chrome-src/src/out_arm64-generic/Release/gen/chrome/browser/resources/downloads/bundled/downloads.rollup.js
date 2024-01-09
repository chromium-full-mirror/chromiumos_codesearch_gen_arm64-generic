import './strings.m.js';
import { html, Polymer, dom, mixinBehaviors, PolymerElement, Base, dedupingMixin, afterNextRender, beforeNextRender, useShadow, Templatizer, OptionalMutableDataBehavior, animationFrame, microTask, idlePeriod, flush, Debouncer, enqueueDebouncer, matches, translate, timeOut } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
export { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { mojo } from 'chrome://resources/mojo/mojo/public/js/bindings.js';
import { addWebUiListener, removeWebUiListener } from 'chrome://resources/js/cr.js';

const styleMod$4 = document.createElement('dom-module');
styleMod$4.appendChild(html `
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);
styleMod$4.register('cr-hidden-style');

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

const template$5 = html`
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
template$5.setAttribute('style', 'display: none;');
document.head.appendChild(template$5.content);

const template$4 = html `
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
document.head.appendChild(template$4.content);

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

function getTemplate$d() {
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
        return getTemplate$d();
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

function getTemplate$c() {
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
        return getTemplate$c();
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

const styleMod$3 = document.createElement('dom-module');
styleMod$3.appendChild(html `
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_up_cr23.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);
styleMod$3.register('cr-icons');

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
function assertInstanceof(value, type, message) {
    if (value instanceof type) {
        return;
    }
    throw new Error(message || `Value ${value} is not of type ${type.name || typeof type}`);
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

function getTemplate$b() {
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
        return getTemplate$b();
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

function getTemplate$a() {
    return html `<!--_html_template_start_--><style>#body{display:flex}.tonal-button{margin-inline-end:8px}#icon-wrapper,iron-icon{height:var(--cr-icon-size);width:var(--cr-icon-size);color:var(--google-red-700)}@media (prefers-color-scheme:dark){#icon-wrapper,iron-icon{color:var(--google-red-300)}}#icon-wrapper{margin-inline-end:8px}#body-text{color:var(--cr-primary-text-color)}#file-name{font-weight:700}</style>
<cr-dialog show-on-attach id="dialog">
  <div slot="title">$i18n{warningBypassDialogTitle}</div>
  <div slot="body" id="body">
    <div id="icon-wrapper" role="img" aria-label="$i18n{accessibleLabelDangerous}">
      <iron-icon icon="downloads:dangerous"></iron-icon>
    </div>
    <div id="body-text">
      <div id="file-name">[[fileName]]</div>
      <div id="danger-description">$i18n{warningBypassDialogDescription}</div>
      <div id="learn-more-link">
        
        <a href="$i18n{blockedLearnMoreUrl}" target="_blank" rel="noopener">
          $i18n{warningBypassDialogLearnMoreLink}
        </a>
      </div>
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="tonal-button" on-click="onDownloadDangerousClick_" id="download-dangerous-button">
      $i18n{controlKeepDangerous}
    </cr-button>
    
    <cr-button class="action-button" on-click="onCancelClick_" id="cancel-button">
      $i18n{warningBypassDialogCancel}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'bypass-warning-confirmation-dialog' is the dialog that allows
 * bypassing a download warning (keeping a file flagged as dangerous). A
 * 'success' indicates the warning bypass was confirmed and the dangerous file
 * was downloaded.
 */
const DownloadBypassWarningConfirmationDialogBase = PolymerElement;
class DownloadBypassWarningConfirmationDialogElement extends DownloadBypassWarningConfirmationDialogBase {
    static get is() {
        return 'download-bypass-warning-confirmation-dialog';
    }
    static get template() {
        return getTemplate$a();
    }
    static get properties() {
        return {
            fileName: String,
        };
    }
    wasConfirmed() {
        return this.$.dialog.getNative().returnValue === 'success';
    }
    onDownloadDangerousClick_() {
        this.$.dialog.close();
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
}
customElements.define(DownloadBypassWarningConfirmationDialogElement.is, DownloadBypassWarningConfirmationDialogElement);

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

const template$3 = html `<iron-iconset-svg name="downloads" size="24">
  <svg>
    <defs>
      
      <g id="dangerous">
        <path d="M 8.25 21 L 3 15.75 L 3 8.25 L 8.25 3 L 15.75 3 L 21 8.25 L 21 15.75 L 15.75 21 Z M 9.148438 16.25 L 12 13.398438 L 14.851562 16.25 L 16.25 14.851562 L 13.398438 12 L 16.25 9.148438 L 14.851562 7.75 L 12 10.601562 L 9.148438 7.75 L 7.75 9.148438 L 10.601562 12 L 7.75 14.851562 Z M 9.148438 16.25">
        </path>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;
document.head.appendChild(template$3.content);

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

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @return The currently focused element (including elements that are
 *     behind a shadow root), or null if nothing is focused.
 */
function getDeepActiveElement() {
    let a = document.activeElement;
    while (a && a.shadowRoot && a.shadowRoot.activeElement) {
        a = a.shadowRoot.activeElement;
    }
    return a;
}
/**
 * Check the directionality of the page.
 * @return True if Chrome is running an RTL UI.
 */
function isRTL() {
    return document.documentElement.dir === 'rtl';
}
/**
 * Replaces '&', '<', '>', '"', and ''' characters with their HTML encoding.
 * @param original The original string.
 * @return The string with all the characters mentioned above replaced.
 */
function htmlEscape(original) {
    return original.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
/**
 * @return Whether a modifier key was down when processing |e|.
 */
function hasKeyModifiers(e) {
    return !!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey);
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
// clang-format on
const ACTIVE_CLASS = 'focus-row-active';
/**
 * A class to manage focus between given horizontally arranged elements.
 *
 * Pressing left cycles backward and pressing right cycles forward in item
 * order. Pressing Home goes to the beginning of the list and End goes to the
 * end of the list.
 *
 * If an item in this row is focused, it'll stay active (accessible via tab).
 * If no items in this row are focused, the row can stay active until focus
 * changes to a node inside |this.boundary_|. If |boundary| isn't specified,
 * any focus change deactivates the row.
 */
class FocusRow {
    root;
    delegate;
    eventTracker = new EventTracker();
    boundary_;
    /**
     * @param root The root of this focus row. Focus classes are
     *     applied to |root| and all added elements must live within |root|.
     * @param boundary Focus events are ignored outside of this element.
     * @param delegate An optional event delegate.
     */
    constructor(root, boundary, delegate) {
        this.root = root;
        this.boundary_ = boundary || document.documentElement;
        this.delegate = delegate;
    }
    /**
     * Whether it's possible that |element| can be focused.
     */
    static isFocusable(element) {
        if (!element || element.disabled) {
            return false;
        }
        // We don't check that element.tabIndex >= 0 here because inactive rows
        // set a tabIndex of -1.
        let current = element;
        while (true) {
            assertInstanceof(current, Element);
            const style = window.getComputedStyle(current);
            if (style.visibility === 'hidden' || style.display === 'none') {
                return false;
            }
            const parent = current.parentNode;
            if (!parent) {
                return false;
            }
            if (parent === current.ownerDocument ||
                parent instanceof DocumentFragment) {
                return true;
            }
            current = parent;
        }
    }
    /**
     * A focus override is a function that returns an element that should gain
     * focus. The element may not be directly selectable for example the element
     * that can gain focus is in a shadow DOM. Allowing an override via a
     * function leaves the details of how the element is retrieved to the
     * component.
     */
    static getFocusableElement(element) {
        const withFocusable = element;
        if (withFocusable.getFocusableElement) {
            return withFocusable.getFocusableElement();
        }
        return element;
    }
    /**
     * Register a new type of focusable element (or add to an existing one).
     *
     * Example: an (X) button might be 'delete' or 'close'.
     *
     * When FocusRow is used within a FocusGrid, these types are used to
     * determine equivalent controls when Up/Down are pressed to change rows.
     *
     * Another example: mutually exclusive controls that hide each other on
     * activation (i.e. Play/Pause) could use the same type (i.e. 'play-pause')
     * to indicate they're equivalent.
     *
     * @param type The type of element to track focus of.
     * @param selectorOrElement The selector of the element
     *    from this row's root, or the element itself.
     * @return Whether a new item was added.
     */
    addItem(type, selectorOrElement) {
        assert(type);
        let element;
        if (typeof selectorOrElement === 'string') {
            element = this.root.querySelector(selectorOrElement);
        }
        else {
            element = selectorOrElement;
        }
        if (!element) {
            return false;
        }
        element.setAttribute('focus-type', type);
        element.tabIndex = this.isActive() ? 0 : -1;
        this.eventTracker.add(element, 'blur', this.onBlur_.bind(this));
        this.eventTracker.add(element, 'focus', this.onFocus_.bind(this));
        this.eventTracker.add(element, 'keydown', this.onKeydown_.bind(this));
        this.eventTracker.add(element, 'mousedown', this.onMousedown_.bind(this));
        return true;
    }
    /** Dereferences nodes and removes event handlers. */
    destroy() {
        this.eventTracker.removeAll();
    }
    /**
     * @param sampleElement An element for to find an equivalent
     *     for.
     * @return An equivalent element to focus for
     *     |sampleElement|.
     */
    getCustomEquivalent(_sampleElement) {
        const focusable = this.getFirstFocusable();
        assert(focusable);
        return focusable;
    }
    /**
     * @return All registered elements (regardless of focusability).
     */
    getElements() {
        return Array.from(this.root.querySelectorAll('[focus-type]'))
            .map(FocusRow.getFocusableElement);
    }
    /**
     * Find the element that best matches |sampleElement|.
     * @param sampleElement An element from a row of the same
     *     type which previously held focus.
     * @return The element that best matches sampleElement.
     */
    getEquivalentElement(sampleElement) {
        if (this.getFocusableElements().indexOf(sampleElement) >= 0) {
            return sampleElement;
        }
        const sampleFocusType = this.getTypeForElement(sampleElement);
        if (sampleFocusType) {
            const sameType = this.getFirstFocusable(sampleFocusType);
            if (sameType) {
                return sameType;
            }
        }
        return this.getCustomEquivalent(sampleElement);
    }
    /**
     * @param type An optional type to search for.
     * @return The first focusable element with |type|.
     */
    getFirstFocusable(type) {
        const element = this.getFocusableElements().find(el => !type || el.getAttribute('focus-type') === type);
        return element || null;
    }
    /** @return Registered, focusable elements. */
    getFocusableElements() {
        return this.getElements().filter(FocusRow.isFocusable);
    }
    /**
     * @param element An element to determine a focus type for.
     * @return The focus type for |element| or '' if none.
     */
    getTypeForElement(element) {
        return element.getAttribute('focus-type') || '';
    }
    /** @return Whether this row is currently active. */
    isActive() {
        return this.root.classList.contains(ACTIVE_CLASS);
    }
    /**
     * Enables/disables the tabIndex of the focusable elements in the FocusRow.
     * tabIndex can be set properly.
     * @param active True if tab is allowed for this row.
     */
    makeActive(active) {
        if (active === this.isActive()) {
            return;
        }
        this.getElements().forEach(function (element) {
            element.tabIndex = active ? 0 : -1;
        });
        this.root.classList.toggle(ACTIVE_CLASS, active);
    }
    onBlur_(e) {
        if (!this.boundary_.contains(e.relatedTarget)) {
            return;
        }
        const currentTarget = e.currentTarget;
        if (this.getFocusableElements().indexOf(currentTarget) >= 0) {
            this.makeActive(false);
        }
    }
    onFocus_(e) {
        if (this.delegate) {
            this.delegate.onFocus(this, e);
        }
    }
    onMousedown_(e) {
        // Only accept left mouse clicks.
        if (e.button) {
            return;
        }
        // Allow the element under the mouse cursor to be focusable.
        const target = e.currentTarget;
        if (!target.disabled) {
            target.tabIndex = 0;
        }
    }
    onKeydown_(e) {
        const elements = this.getFocusableElements();
        const currentElement = FocusRow.getFocusableElement(e.currentTarget);
        const elementIndex = elements.indexOf(currentElement);
        assert(elementIndex >= 0);
        if (this.delegate && this.delegate.onKeydown(this, e)) {
            return;
        }
        const isShiftTab = !e.altKey && !e.ctrlKey && !e.metaKey && e.shiftKey &&
            e.key === 'Tab';
        if (hasKeyModifiers(e) && !isShiftTab) {
            return;
        }
        let index = -1;
        let shouldStopPropagation = true;
        if (isShiftTab) {
            // This always moves back one element, even in RTL.
            index = elementIndex - 1;
            if (index < 0) {
                // Bubble up to focus on the previous element outside the row.
                return;
            }
        }
        else if (e.key === 'ArrowLeft') {
            index = elementIndex + (isRTL() ? 1 : -1);
        }
        else if (e.key === 'ArrowRight') {
            index = elementIndex + (isRTL() ? -1 : 1);
        }
        else if (e.key === 'Home') {
            index = 0;
        }
        else if (e.key === 'End') {
            index = elements.length - 1;
        }
        else {
            shouldStopPropagation = false;
        }
        const elementToFocus = elements[index];
        if (elementToFocus) {
            this.getEquivalentElement(elementToFocus).focus();
            e.preventDefault();
        }
        if (shouldStopPropagation) {
            e.stopPropagation();
        }
    }
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* @fileoverview Utilities for determining the current platform. */
/** Whether we are using a Mac or not. */
const isMac = /Mac/.test(navigator.platform);
/** Whether this is on the Windows platform or not. */
const isWindows = /Win/.test(navigator.platform);
/** Whether this is on iOS. */
const isIOS = /CriOS/.test(navigator.userAgent);

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

function getTemplate$9() {
    return html `<!--_html_template_start_-->    <style>:host dialog{background-color:var(--cr-menu-background-color);border:none;border-radius:var(--cr-menu-border-radius,4px);box-shadow:var(--cr-menu-shadow);margin:0;min-width:128px;outline:0;padding:0;position:absolute}@media (forced-colors:active){:host dialog{border:var(--cr-border-hcm)}}:host-context([chrome-refresh-2023]){--cr-hairline:1px solid var(--color-menu-separator,
            var(--cr-fallback-color-divider));--cr-action-menu-disabled-item-color:var(--color-menu-item-foreground-disabled,
                var(--cr-fallback-color-disabled-foreground));--cr-action-menu-disabled-item-opacity:1;--cr-menu-background-color:var(--color-menu-background,
            var(--cr-fallback-color-surface));--cr-menu-background-focus-color:var(--cr-hover-background-color);--cr-menu-shadow:var(--cr-elevation-2);--cr-primary-text-color:var(--color-menu-item-foreground,
            var(--cr-fallback-color-on-surface))}:host dialog::backdrop{background-color:transparent}:host ::slotted(.dropdown-item){-webkit-tap-highlight-color:transparent;background:0 0;border:none;border-radius:0;box-sizing:border-box;color:var(--cr-primary-text-color);font:inherit;min-height:32px;padding:8px 24px;text-align:start;user-select:none;width:100%}:host ::slotted(.dropdown-item:not([hidden])){align-items:center;display:flex}:host ::slotted(.dropdown-item[disabled]){color:var(--cr-action-menu-disabled-item-color,var(--cr-primary-text-color));opacity:var(--cr-action-menu-disabled-item-opacity,.65)}:host ::slotted(.dropdown-item:not([disabled])){cursor:pointer}:host ::slotted(.dropdown-item:focus){background-color:var(--cr-menu-background-focus-color);outline:0}@media (forced-colors:active){:host ::slotted(.dropdown-item:focus){outline:var(--cr-focus-outline-hcm)}}.item-wrapper{background:var(--cr-menu-background-sheen);outline:0;padding:8px 0}:host-context([chrome-refresh-2023]) .item-wrapper{background:0 0}</style>
    <dialog id="dialog" part="dialog" on-close="onNativeDialogClose_" role="application" aria-roledescription$="[[roleDescription]]">
      <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1" aria-label$="[[accessibilityLabel]]">
        <slot id="contentNode" on-slotchange="onSlotchange_"></slot>
      </div>
    </dialog>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var AnchorAlignment;
(function (AnchorAlignment) {
    AnchorAlignment[AnchorAlignment["BEFORE_START"] = -2] = "BEFORE_START";
    AnchorAlignment[AnchorAlignment["AFTER_START"] = -1] = "AFTER_START";
    AnchorAlignment[AnchorAlignment["CENTER"] = 0] = "CENTER";
    AnchorAlignment[AnchorAlignment["BEFORE_END"] = 1] = "BEFORE_END";
    AnchorAlignment[AnchorAlignment["AFTER_END"] = 2] = "AFTER_END";
})(AnchorAlignment || (AnchorAlignment = {}));
const DROPDOWN_ITEM_CLASS = 'dropdown-item';
const SELECTABLE_DROPDOWN_ITEM_QUERY = `.${DROPDOWN_ITEM_CLASS}:not([hidden]):not([disabled])`;
const AFTER_END_OFFSET = 10;
/**
 * Returns the point to start along the X or Y axis given a start and end
 * point to anchor to, the length of the target and the direction to anchor
 * in. If honoring the anchor would force the menu outside of min/max, this
 * will ignore the anchor position and try to keep the menu within min/max.
 */
function getStartPointWithAnchor(start, end, menuLength, anchorAlignment, min, max) {
    let startPoint = 0;
    switch (anchorAlignment) {
        case AnchorAlignment.BEFORE_START:
            startPoint = start - menuLength;
            break;
        case AnchorAlignment.AFTER_START:
            startPoint = start;
            break;
        case AnchorAlignment.CENTER:
            startPoint = (start + end - menuLength) / 2;
            break;
        case AnchorAlignment.BEFORE_END:
            startPoint = end - menuLength;
            break;
        case AnchorAlignment.AFTER_END:
            startPoint = end;
            break;
    }
    if (startPoint + menuLength > max) {
        startPoint = end - menuLength;
    }
    if (startPoint < min) {
        startPoint = start;
    }
    startPoint = Math.max(min, Math.min(startPoint, max - menuLength));
    return startPoint;
}
function getDefaultShowConfig() {
    return {
        top: 0,
        left: 0,
        height: 0,
        width: 0,
        anchorAlignmentX: AnchorAlignment.AFTER_START,
        anchorAlignmentY: AnchorAlignment.AFTER_START,
        minX: 0,
        minY: 0,
        maxX: 0,
        maxY: 0,
    };
}
class CrActionMenuElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.boundClose_ = null;
        this.resizeObserver_ = null;
        this.hasMousemoveListener_ = false;
        this.anchorElement_ = null;
        this.lastConfig_ = null;
    }
    static get is() {
        return 'cr-action-menu';
    }
    static get template() {
        return getTemplate$9();
    }
    static get properties() {
        return {
            // Accessibility text of the menu. Should be something along the lines of
            // "actions", or "more actions".
            accessibilityLabel: String,
            // Setting this flag will make the menu listen for content size changes
            // and reposition to its anchor accordingly.
            autoReposition: {
                type: Boolean,
                value: false,
            },
            open: {
                type: Boolean,
                notify: true,
                value: false,
            },
            // Descriptor of the menu. Should be something along the lines of "menu"
            roleDescription: String,
        };
    }
    ready() {
        super.ready();
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('mouseover', this.onMouseover_);
        this.addEventListener('click', this.onClick_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeListeners_();
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    /**
     * Exposing internal <dialog> elements for tests.
     */
    getDialog() {
        return this.$.dialog;
    }
    removeListeners_() {
        window.removeEventListener('resize', this.boundClose_);
        window.removeEventListener('popstate', this.boundClose_);
        if (this.resizeObserver_) {
            this.resizeObserver_.disconnect();
            this.resizeObserver_ = null;
        }
    }
    onNativeDialogClose_(e) {
        // Ignore any 'close' events not fired directly by the <dialog> element.
        if (e.target !== this.$.dialog) {
            return;
        }
        // Catch and re-fire the 'close' event such that it bubbles across Shadow
        // DOM v1.
        this.fire_('close');
    }
    onClick_(e) {
        if (e.target === this) {
            this.close();
            e.stopPropagation();
        }
    }
    onKeyDown_(e) {
        e.stopPropagation();
        if (e.key === 'Tab' || e.key === 'Escape') {
            this.close();
            if (e.key === 'Tab') {
                this.fire_('tabkeyclose', { shiftKey: e.shiftKey });
            }
            e.preventDefault();
            return;
        }
        if (e.key !== 'Enter' && e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
            return;
        }
        const options = Array.from(this.querySelectorAll(SELECTABLE_DROPDOWN_ITEM_QUERY));
        if (options.length === 0) {
            return;
        }
        const focused = getDeepActiveElement();
        const index = options.findIndex(option => FocusRow.getFocusableElement(option) === focused);
        if (e.key === 'Enter') {
            // If a menu item has focus, don't change focus or close menu on 'Enter'.
            if (index !== -1) {
                return;
            }
            if (isWindows || isMac) {
                this.close();
                e.preventDefault();
                return;
            }
        }
        e.preventDefault();
        this.updateFocus_(options, index, e.key !== 'ArrowUp');
        if (!this.hasMousemoveListener_) {
            this.hasMousemoveListener_ = true;
            this.addEventListener('mousemove', e => {
                this.onMouseover_(e);
                this.hasMousemoveListener_ = false;
            }, { once: true });
        }
    }
    onMouseover_(e) {
        const item = e.composedPath()
            .find(el => el.matches && el.matches(SELECTABLE_DROPDOWN_ITEM_QUERY));
        (item || this.$.wrapper).focus();
    }
    updateFocus_(options, focusedIndex, next) {
        const numOptions = options.length;
        assert(numOptions > 0);
        let index;
        if (focusedIndex === -1) {
            index = next ? 0 : numOptions - 1;
        }
        else {
            const delta = next ? 1 : -1;
            index = (numOptions + focusedIndex + delta) % numOptions;
        }
        options[index].focus();
    }
    close() {
        // Removing 'resize' and 'popstate' listeners when dialog is closed.
        this.removeListeners_();
        this.$.dialog.close();
        this.open = false;
        if (this.anchorElement_) {
            assert(this.anchorElement_);
            focusWithoutInk(this.anchorElement_);
            this.anchorElement_ = null;
        }
        if (this.lastConfig_) {
            this.lastConfig_ = null;
        }
    }
    /**
     * Shows the menu anchored to the given element.
     */
    showAt(anchorElement, config) {
        this.anchorElement_ = anchorElement;
        // Scroll the anchor element into view so that the bounding rect will be
        // accurate for where the menu should be shown.
        this.anchorElement_.scrollIntoViewIfNeeded();
        const rect = this.anchorElement_.getBoundingClientRect();
        let height = rect.height;
        if (config && !config.noOffset &&
            config.anchorAlignmentY === AnchorAlignment.AFTER_END) {
            // When an action menu is positioned after the end of an element, the
            // action menu can appear too far away from the anchor element, typically
            // because anchors tend to have padding. So we offset the height a bit
            // so the menu shows up slightly closer to the content of anchor.
            height -= AFTER_END_OFFSET;
        }
        this.showAtPosition(Object.assign({
            top: rect.top,
            left: rect.left,
            height: height,
            width: rect.width,
            // Default to anchoring towards the left.
            anchorAlignmentX: AnchorAlignment.BEFORE_END,
        }, config));
        this.$.wrapper.focus();
    }
    /**
     * Shows the menu anchored to the given box. The anchor alignment is
     * specified as an X and Y alignment which represents a point in the anchor
     * where the menu will align to, which can have the menu either before or
     * after the given point in each axis. Center alignment places the center of
     * the menu in line with the center of the anchor. Coordinates are relative to
     * the top-left of the viewport.
     *
     *            y-start
     *         _____________
     *         |           |
     *         |           |
     *         |   CENTER  |
     * x-start |     x     | x-end
     *         |           |
     *         |anchor box |
     *         |___________|
     *
     *             y-end
     *
     * For example, aligning the menu to the inside of the top-right edge of
     * the anchor, extending towards the bottom-left would use a alignment of
     * (BEFORE_END, AFTER_START), whereas centering the menu below the bottom
     * edge of the anchor would use (CENTER, AFTER_END).
     */
    showAtPosition(config) {
        // Save the scroll position of the viewport.
        const doc = document.scrollingElement;
        const scrollLeft = doc.scrollLeft;
        const scrollTop = doc.scrollTop;
        // Reset position so that layout isn't affected by the previous position,
        // and so that the dialog is positioned at the top-start corner of the
        // document.
        this.resetStyle_();
        this.$.dialog.showModal();
        this.open = true;
        config.top += scrollTop;
        config.left += scrollLeft;
        this.positionDialog_(Object.assign({
            minX: scrollLeft,
            minY: scrollTop,
            maxX: scrollLeft + doc.clientWidth,
            maxY: scrollTop + doc.clientHeight,
        }, config));
        // Restore the scroll position.
        doc.scrollTop = scrollTop;
        doc.scrollLeft = scrollLeft;
        this.addListeners_();
        // Focus the first selectable item.
        const openedByKey = FocusOutlineManager.forDocument(document).visible;
        if (openedByKey) {
            const firstSelectableItem = this.querySelector(SELECTABLE_DROPDOWN_ITEM_QUERY);
            if (firstSelectableItem) {
                requestAnimationFrame(() => {
                    // Wait for the next animation frame for the dialog to become visible.
                    firstSelectableItem.focus();
                });
            }
        }
    }
    resetStyle_() {
        this.$.dialog.style.left = '';
        this.$.dialog.style.right = '';
        this.$.dialog.style.top = '0';
    }
    /**
     * Position the dialog using the coordinates in config. Coordinates are
     * relative to the top-left of the viewport when scrolled to (0, 0).
     */
    positionDialog_(config) {
        this.lastConfig_ = config;
        const c = Object.assign(getDefaultShowConfig(), config);
        const top = c.top;
        const left = c.left;
        const bottom = top + c.height;
        const right = left + c.width;
        // Flip the X anchor in RTL.
        const rtl = getComputedStyle(this).direction === 'rtl';
        if (rtl) {
            c.anchorAlignmentX *= -1;
        }
        const offsetWidth = this.$.dialog.offsetWidth;
        const menuLeft = getStartPointWithAnchor(left, right, offsetWidth, c.anchorAlignmentX, c.minX, c.maxX);
        if (rtl) {
            const menuRight = document.scrollingElement.clientWidth - menuLeft - offsetWidth;
            this.$.dialog.style.right = menuRight + 'px';
        }
        else {
            this.$.dialog.style.left = menuLeft + 'px';
        }
        const menuTop = getStartPointWithAnchor(top, bottom, this.$.dialog.offsetHeight, c.anchorAlignmentY, c.minY, c.maxY);
        this.$.dialog.style.top = menuTop + 'px';
    }
    onSlotchange_() {
        for (const node of this.$.contentNode.assignedElements({ flatten: true })) {
            if (node.classList.contains(DROPDOWN_ITEM_CLASS) &&
                !node.getAttribute('role')) {
                node.setAttribute('role', 'menuitem');
            }
        }
    }
    addListeners_() {
        this.boundClose_ = this.boundClose_ || (() => {
            if (this.$.dialog.open) {
                this.close();
            }
        });
        window.addEventListener('resize', this.boundClose_);
        window.addEventListener('popstate', this.boundClose_);
        if (this.autoReposition) {
            this.resizeObserver_ = new ResizeObserver(() => {
                if (this.lastConfig_) {
                    this.positionDialog_(this.lastConfig_);
                    this.fire_('cr-action-menu-repositioned'); // For easier testing.
                }
            });
            this.resizeObserver_.observe(this.$.dialog);
        }
    }
}
customElements.define(CrActionMenuElement.is, CrActionMenuElement);

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

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Action links are elements that are used to perform an in-page navigation or
// action (e.g. showing a dialog).
//
// They look like normal anchor (<a>) tags as their text color is blue. However,
// they're subtly different as they're not initially underlined (giving users a
// clue that underlined links navigate while action links don't).
//
// Action links look very similar to normal links when hovered (hand cursor,
// underlined). This gives the user an idea that clicking this link will do
// something similar to navigation but in the same page.
//
// They can be created in JavaScript like this (note second arg):
//
//   var link = document.createElement('a', {is: 'action-link'});
//
// or with a constructor like this:
//
//   var link = new ActionLink();
//
// They can be used easily from HTML as well, like so:
//
//   <a is="action-link">Click me!</a>
//
// NOTE: <action-link> and document.createElement('action-link') don't work.
class ActionLink extends HTMLAnchorElement {
    boundOnKeyDown_ = null;
    boundOnMouseDown_ = null;
    boundOnBlur_ = null;
    connectedCallback() {
        // Action links can start disabled (e.g. <a is="action-link" disabled>).
        this.tabIndex = this.disabled ? -1 : 0;
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'link');
        }
        this.boundOnKeyDown_ = (e) => {
            if (!this.disabled && e.key === 'Enter' && !this.href) {
                // Schedule a click asynchronously because other 'keydown' handlers
                // may still run later (e.g. document.addEventListener('keydown')).
                // Specifically options dialogs break when this timeout isn't here.
                // NOTE: this affects the "trusted" state of the ensuing click. I
                // haven't found anything that breaks because of this (yet).
                window.setTimeout(() => this.click(), 0);
            }
        };
        this.addEventListener('keydown', this.boundOnKeyDown_);
        function preventDefault(e) {
            e.preventDefault();
        }
        function removePreventDefault() {
            document.removeEventListener('selectstart', preventDefault);
            document.removeEventListener('mouseup', removePreventDefault);
        }
        this.boundOnMouseDown_ = () => {
            // This handlers strives to match the behavior of <a href="...">.
            // While the mouse is down, prevent text selection from dragging.
            document.addEventListener('selectstart', preventDefault);
            document.addEventListener('mouseup', removePreventDefault);
            // If focus started via mouse press, don't show an outline.
            if (document.activeElement !== this) {
                this.classList.add('no-outline');
            }
        };
        this.addEventListener('mousedown', this.boundOnMouseDown_);
        this.boundOnBlur_ = () => this.classList.remove('no-outline');
        this.addEventListener('blur', this.boundOnBlur_);
    }
    disconnectedCallback() {
        this.removeEventListener('keydown', this.boundOnKeyDown_);
        this.boundOnKeyDown_ = null;
        this.removeEventListener('mousedown', this.boundOnMouseDown_);
        this.boundOnMouseDown_ = null;
        this.removeEventListener('blur', this.boundOnBlur_);
        this.boundOnBlur_ = null;
    }
    set disabled(disabled) {
        if (disabled) {
            HTMLAnchorElement.prototype.setAttribute.call(this, 'disabled', '');
        }
        else {
            HTMLAnchorElement.prototype.removeAttribute.call(this, 'disabled');
        }
        this.tabIndex = disabled ? -1 : 0;
    }
    get disabled() {
        return this.hasAttribute('disabled');
    }
    setAttribute(attr, val) {
        if (attr.toLowerCase() === 'disabled') {
            this.disabled = true;
        }
        else {
            super.setAttribute(attr, val);
        }
    }
    removeAttribute(attr) {
        if (attr.toLowerCase() === 'disabled') {
            this.disabled = false;
        }
        else {
            super.removeAttribute(attr);
        }
    }
}
customElements.define('action-link', ActionLink, { extends: 'a' });

const styleMod$2 = document.createElement('dom-module');
styleMod$2.appendChild(html `
  <template>
    <style>
[is=action-link]{cursor:pointer;display:inline-block;text-decoration:underline}[is=action-link],[is=action-link]:active,[is=action-link]:hover,[is=action-link]:visited{color:var(--cr-link-color)}[is=action-link][disabled]{color:var(--paper-grey-600);cursor:default;opacity:.65;pointer-events:none}[is=action-link].no-outline{outline:0}
    </style>
  </template>
`.content);
styleMod$2.register('action-link');

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
 * `iron-range-behavior` provides the behavior for something with a minimum to
 * maximum range.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */
const IronRangeBehavior = {

  properties: {

    /**
     * The number that represents the current value.
     */
    value: {type: Number, value: 0, notify: true, reflectToAttribute: true},

    /**
     * The number that indicates the minimum value of the range.
     */
    min: {type: Number, value: 0, notify: true},

    /**
     * The number that indicates the maximum value of the range.
     */
    max: {type: Number, value: 100, notify: true},

    /**
     * Specifies the value granularity of the range's value.
     */
    step: {type: Number, value: 1, notify: true},

    /**
     * Returns the ratio of the value.
     */
    ratio: {type: Number, value: 0, readOnly: true, notify: true},
  },

  observers: ['_update(value, min, max, step)'],

  _calcRatio: function(value) {
    return (this._clampValue(value) - this.min) / (this.max - this.min);
  },

  _clampValue: function(value) {
    return Math.min(this.max, Math.max(this.min, this._calcStep(value)));
  },

  _calcStep: function(value) {
    // polymer/issues/2493
    value = parseFloat(value);

    if (!this.step) {
      return value;
    }

    var numSteps = Math.round((value - this.min) / this.step);
    if (this.step < 1) {
      /**
       * For small values of this.step, if we calculate the step using
       * `Math.round(value / step) * step` we may hit a precision point issue
       * eg. 0.1 * 0.2 =  0.020000000000000004
       * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
       *
       * as a work around we can divide by the reciprocal of `step`
       */
      return numSteps / (1 / this.step) + this.min;
    } else {
      return numSteps * this.step + this.min;
    }
  },

  _validateValue: function() {
    var v = this._clampValue(this.value);
    this.value = this.oldValue = isNaN(v) ? this.oldValue : v;
    return this.value !== v;
  },

  _update: function() {
    this._validateValue();
    this._setRatio(this._calcRatio(this.value) * 100);
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
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

The progress bars are for situations where the percentage completed can be
determined. They give users a quick sense of how much longer an operation
will take.

Example:

    <paper-progress value="10"></paper-progress>

There is also a secondary progress which is useful for displaying intermediate
progress, such as the buffer level during a streaming playback progress bar.

Example:

    <paper-progress value="10" secondary-progress="30"></paper-progress>

### Styling progress bar:

To change the active progress bar color:

    paper-progress {
       --paper-progress-active-color: #e91e63;
    }

To change the secondary progress bar color:

    paper-progress {
      --paper-progress-secondary-color: #f8bbd0;
    }

To change the progress bar background color:

    paper-progress {
      --paper-progress-container-color: #64ffda;
    }

Add the class `transiting` to a paper-progress to animate the progress bar when
the value changed. You can also customize the transition:

    paper-progress {
      --paper-progress-transition-duration: 0.08s;
      --paper-progress-transition-timing-function: ease;
      --paper-progress-transition-delay: 0s;
    }

To change the duration of the indeterminate cycle:

    paper-progress {
      --paper-progress-indeterminate-cycle-duration: 2s;
    }

The following mixins are available for styling:

Custom property | Description | Default
----------------|-------------|---------
`--paper-progress-transition-duration` | Duration of the transition | `0.08s`
`--paper-progress-transition-timing-function` | The timing function for the transition | `ease`
`--paper-progress-transition-delay` | delay for the transition | `0s`
`--paper-progress-container-color` | Color of the container | `--google-grey-300`
`--paper-progress-active-color` | The color of the active bar | `--google-green-500`
`--paper-progress-secondary-color` | The color of the secondary bar | `--google-green-100`
`--paper-progress-disabled-active-color` | The color of the active bar if disabled | `--google-grey-500`
`--paper-progress-disabled-secondary-color` | The color of the secondary bar if disabled  | `--google-grey-300`
`--paper-progress-height` | The height of the progress bar | `4px`
`--paper-progress-indeterminate-cycle-duration` | Duration of an indeterminate cycle | `2s`

@group Paper Elements
@element paper-progress
@demo demo/index.html
*/
Polymer({
  _template: html`
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
`,

  is: 'paper-progress',
  behaviors: [IronRangeBehavior],

  properties: {
    /**
     * The number that represents the current secondary progress.
     */
    secondaryProgress: {type: Number, value: 0},

    /**
     * The secondary ratio
     */
    secondaryRatio: {type: Number, value: 0, readOnly: true},

    /**
     * Use an indeterminate progress indicator.
     */
    indeterminate:
        {type: Boolean, value: false, observer: '_toggleIndeterminate'},

    /**
     * True if the progress is disabled.
     */
    disabled: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '_disabledChanged'
    }
  },

  observers:
      ['_progressChanged(secondaryProgress, value, min, max, indeterminate)'],

  hostAttributes: {role: 'progressbar'},

  _toggleIndeterminate: function(indeterminate) {
    // If we use attribute/class binding, the animation sometimes doesn't
    // translate properly on Safari 7.1. So instead, we toggle the class here in
    // the update method.
    this.toggleClass('indeterminate', indeterminate, this.$.primaryProgress);
  },

  _transformProgress: function(progress, ratio) {
    var transform = 'scaleX(' + (ratio / 100) + ')';
    progress.style.transform = progress.style.webkitTransform = transform;
  },

  _mainRatioChanged: function(ratio) {
    this._transformProgress(this.$.primaryProgress, ratio);
  },

  _progressChanged: function(
      secondaryProgress, value, min, max, indeterminate) {
    secondaryProgress = this._clampValue(secondaryProgress);
    value = this._clampValue(value);

    var secondaryRatio = this._calcRatio(secondaryProgress) * 100;
    var mainRatio = this._calcRatio(value) * 100;

    this._setSecondaryRatio(secondaryRatio);
    this._transformProgress(this.$.secondaryProgress, secondaryRatio);
    this._transformProgress(this.$.primaryProgress, mainRatio);

    this.secondaryProgress = secondaryProgress;

    if (indeterminate) {
      this.removeAttribute('aria-valuenow');
    } else {
      this.setAttribute('aria-valuenow', value);
    }
    this.setAttribute('aria-valuemin', min);
    this.setAttribute('aria-valuemax', max);
  },

  _disabledChanged: function(disabled) {
    this.setAttribute('aria-disabled', disabled ? 'true' : 'false');
  },

  _hideSecondaryProgress: function(secondaryRatio) {
    return secondaryRatio === 0;
  }
});

function getTemplate$8() {
    return html `<!--_html_template_start_-->    <style>:host{--cr-toast-background:#323232;--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:#fff}@media (prefers-color-scheme:dark){:host{--cr-toast-background:var(--google-grey-900) linear-gradient(rgba(255, 255, 255, .06), rgba(255, 255, 255, .06));--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:var(--google-grey-200)}}:host{align-items:center;background:var(--cr-toast-background);border-radius:4px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,.28);box-sizing:border-box;display:flex;margin:24px;max-width:568px;min-height:52px;min-width:288px;opacity:0;padding:0 24px;position:fixed;transform:translateY(100px);transition:opacity .3s,transform .3s;visibility:hidden;z-index:1}:host-context([chrome-refresh-2023]):host{--cr-toast-background:var(--color-toast-background,
            var(--cr-fallback-color-inverse-surface));--cr-toast-button-color:var(--color-toast-button,
            var(--cr-fallback-color-inverse-primary));--cr-toast-text-color:var(--color-toast-foreground,
            var(--cr-fallback-color-inverse-on-surface));border-radius:8px;line-height:20px;padding:0 16px}:host-context([dir=ltr]){left:0}:host-context([dir=rtl]){right:0}:host([open]){opacity:1;transform:translateY(0);visibility:visible}:host ::slotted(*){color:var(--cr-toast-text-color)}:host ::slotted(cr-button){background-color:transparent!important;border:none!important;color:var(--cr-toast-button-color)!important;margin-inline-start:32px!important;min-width:52px!important;padding:8px!important}:host ::slotted(cr-button:hover){background-color:transparent!important}:host-context([chrome-refresh-2023]) ::slotted(cr-button:last-of-type){margin-inline-end:-8px}</style>
    <slot></slot>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A lightweight toast.
 */
class CrToastElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.hideTimeoutId_ = null;
    }
    static get is() {
        return 'cr-toast';
    }
    static get template() {
        return getTemplate$8();
    }
    static get properties() {
        return {
            duration: {
                type: Number,
                value: 0,
            },
            open: {
                readOnly: true,
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
        };
    }
    static get observers() {
        return ['resetAutoHide_(duration, open)'];
    }
    /**
     * Cancels existing auto-hide, and sets up new auto-hide.
     */
    resetAutoHide_() {
        if (this.hideTimeoutId_ !== null) {
            window.clearTimeout(this.hideTimeoutId_);
            this.hideTimeoutId_ = null;
        }
        if (this.open && this.duration !== 0) {
            this.hideTimeoutId_ = window.setTimeout(() => {
                this.hide();
            }, this.duration);
        }
    }
    /**
     * Shows the toast and auto-hides after |this.duration| milliseconds has
     * passed. If the toast is currently being shown, any preexisting auto-hide
     * is cancelled and replaced with a new auto-hide.
     */
    show() {
        // Force autohide to reset if calling show on an already shown toast.
        const shouldResetAutohide = this.open;
        // The role attribute is removed first so that screen readers to better
        // ensure that screen readers will read out the content inside the toast.
        // If the role is not removed and re-added back in, certain screen readers
        // do not read out the contents, especially if the text remains exactly
        // the same as a previous toast.
        this.removeAttribute('role');
        // Reset the aria-hidden attribute as screen readers need to access the
        // contents of an opened toast.
        this.removeAttribute('aria-hidden');
        this._setOpen(true);
        this.setAttribute('role', 'alert');
        if (shouldResetAutohide) {
            this.resetAutoHide_();
        }
    }
    /**
     * Hides the toast and ensures that screen readers cannot its contents while
     * hidden.
     */
    hide() {
        this.setAttribute('aria-hidden', 'true');
        this._setOpen(false);
    }
}
customElements.define(CrToastElement.is, CrToastElement);

function getTemplate$7() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style">#content{display:flex;flex:1}.collapsible{overflow:hidden;text-overflow:ellipsis}span{white-space:pre}.elided-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}</style>
    <cr-toast id="toast" duration="[[duration]]">
      <div id="content" class="elided-text"></div>
      <slot id="slotted"></slot>
    </cr-toast>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview Element which shows toasts with optional undo button. */
let toastManagerInstance = null;
function getToastManager() {
    assert(toastManagerInstance);
    return toastManagerInstance;
}
function setInstance(instance) {
    assert(!instance || !toastManagerInstance);
    toastManagerInstance = instance;
}
class CrToastManagerElement extends PolymerElement {
    static get is() {
        return 'cr-toast-manager';
    }
    static get template() {
        return getTemplate$7();
    }
    static get properties() {
        return {
            duration: {
                type: Number,
                value: 0,
            },
        };
    }
    get isToastOpen() {
        return this.$.toast.open;
    }
    get slottedHidden() {
        return this.$.slotted.hidden;
    }
    connectedCallback() {
        super.connectedCallback();
        setInstance(this);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        setInstance(null);
    }
    /**
     * @param label The label to display inside the toast.
     */
    show(label, hideSlotted = false) {
        this.$.content.textContent = label;
        this.showInternal_(hideSlotted);
    }
    /**
     * Shows the toast, making certain text fragments collapsible.
     */
    showForStringPieces(pieces, hideSlotted = false) {
        const content = this.$.content;
        content.textContent = '';
        pieces.forEach(function (p) {
            if (p.value.length === 0) {
                return;
            }
            const span = document.createElement('span');
            span.textContent = p.value;
            if (p.collapsible) {
                span.classList.add('collapsible');
            }
            content.appendChild(span);
        });
        this.showInternal_(hideSlotted);
    }
    showInternal_(hideSlotted) {
        this.$.slotted.hidden = hideSlotted;
        this.$.toast.show();
    }
    hide() {
        this.$.toast.hide();
    }
}
customElements.define(CrToastManagerElement.is, CrToastManagerElement);

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
class FocusRowMixinDelegate {
    constructor(listItem) {
        this.listItem_ = listItem;
    }
    /**
     * This function gets called when the [focus-row-control] element receives
     * the focus event.
     */
    onFocus(_row, e) {
        const element = e.composedPath()[0];
        const focusableElement = FocusRow.getFocusableElement(element);
        if (element !== focusableElement) {
            focusableElement.focus();
        }
        this.listItem_.lastFocused = focusableElement;
    }
    /**
     * @param row The row that detected a keydown.
     * @return Whether the event was handled.
     */
    onKeydown(_row, e) {
        // Prevent iron-list from changing the focus on enter.
        if (e.key === 'Enter') {
            e.stopPropagation();
        }
        return false;
    }
    getCustomEquivalent(sampleElement) {
        return this.listItem_.overrideCustomEquivalent ?
            this.listItem_.getCustomEquivalent(sampleElement) :
            null;
    }
}
class VirtualFocusRow extends FocusRow {
    constructor(root, delegate) {
        super(root, /* boundary */ null, delegate);
    }
    getCustomEquivalent(sampleElement) {
        const equivalent = this.delegate ? this.delegate.getCustomEquivalent(sampleElement) : null;
        return equivalent || super.getCustomEquivalent(sampleElement);
    }
}
const FocusRowMixin = dedupingMixin((superClass) => {
    class FocusRowMixin extends superClass {
        constructor() {
            super(...arguments);
            this.firstControl_ = null;
            this.controlObservers_ = [];
            this.boundOnFirstControlKeydown_ = null;
        }
        static get properties() {
            return {
                row_: Object,
                mouseFocused_: Boolean,
                id: {
                    type: String,
                    reflectToAttribute: true,
                },
                isFocused: {
                    type: Boolean,
                    notify: true,
                },
                focusRowIndex: {
                    type: Number,
                    observer: 'focusRowIndexChanged',
                },
                lastFocused: {
                    type: Object,
                    notify: true,
                },
                ironListTabIndex: {
                    type: Number,
                    observer: 'ironListTabIndexChanged_',
                },
                listBlurred: {
                    type: Boolean,
                    notify: true,
                },
            };
        }
        connectedCallback() {
            super.connectedCallback();
            this.classList.add('no-outline');
            this.boundOnFirstControlKeydown_ =
                this.onFirstControlKeydown_.bind(this);
            afterNextRender(this, () => {
                const rowContainer = this.root.querySelector('[focus-row-container]');
                assert(rowContainer);
                this.row_ = new VirtualFocusRow(rowContainer, new FocusRowMixinDelegate(this));
                this.addItems_();
                // Adding listeners asynchronously to reduce blocking time, since
                // this behavior will be used by items in potentially long lists.
                this.addEventListener('focus', this.onFocus_);
                this.addEventListener('dom-change', this.addItems_);
                this.addEventListener('mousedown', this.onMouseDown_);
                this.addEventListener('blur', this.onBlur_);
            });
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.removeEventListener('focus', this.onFocus_);
            this.removeEventListener('dom-change', this.addItems_);
            this.removeEventListener('mousedown', this.onMouseDown_);
            this.removeEventListener('blur', this.onBlur_);
            this.removeObservers_();
            if (this.firstControl_ && this.boundOnFirstControlKeydown_) {
                this.firstControl_.removeEventListener('keydown', this.boundOnFirstControlKeydown_);
                this.boundOnFirstControlKeydown_ = null;
            }
            if (this.row_) {
                this.row_.destroy();
            }
        }
        /**
         * Returns an ID based on the index that was passed in.
         */
        computeId_(index) {
            return index !== undefined ? `frb${index}` : undefined;
        }
        /**
         * Sets |id| if it hasn't been set elsewhere. Also sets |aria-rowindex|.
         */
        focusRowIndexChanged(newIndex, oldIndex) {
            // focusRowIndex is 0-based where aria-rowindex is 1-based.
            this.setAttribute('aria-rowindex', (newIndex + 1).toString());
            // Only set ID if it matches what was previously set. This prevents
            // overriding the ID value if it's set elsewhere.
            if (this.id === this.computeId_(oldIndex)) {
                this.id = this.computeId_(newIndex) || '';
            }
        }
        getFocusRow() {
            assert(this.row_);
            return this.row_;
        }
        updateFirstControl_() {
            const newFirstControl = this.row_.getFirstFocusable();
            if (newFirstControl === this.firstControl_) {
                return;
            }
            if (this.firstControl_) {
                this.firstControl_.removeEventListener('keydown', this.boundOnFirstControlKeydown_);
            }
            this.firstControl_ = newFirstControl;
            if (this.firstControl_) {
                this.firstControl_.addEventListener('keydown', this.boundOnFirstControlKeydown_);
            }
        }
        removeObservers_() {
            if (this.controlObservers_.length > 0) {
                this.controlObservers_.forEach(observer => {
                    observer.disconnect();
                });
            }
            this.controlObservers_ = [];
        }
        addItems_() {
            this.ironListTabIndexChanged_();
            if (this.row_) {
                this.removeObservers_();
                this.row_.destroy();
                const controls = this.root.querySelectorAll('[focus-row-control]');
                controls.forEach(control => {
                    assert(control);
                    this.row_.addItem(control.getAttribute('focus-type'), FocusRow.getFocusableElement(control));
                    this.addMutationObservers_(control);
                });
                this.updateFirstControl_();
            }
        }
        createObserver_() {
            return new MutationObserver(mutations => {
                const mutation = mutations[0];
                if (mutation.attributeName === 'style' && mutation.oldValue) {
                    const newStyle = window.getComputedStyle(mutation.target);
                    const oldDisplayValue = mutation.oldValue.match(/^display:(.*)(?=;)/);
                    const oldVisibilityValue = mutation.oldValue.match(/^visibility:(.*)(?=;)/);
                    // Return early if display and visibility have not changed.
                    if (oldDisplayValue &&
                        newStyle.display === oldDisplayValue[1].trim() &&
                        oldVisibilityValue &&
                        newStyle.visibility === oldVisibilityValue[1].trim()) {
                        return;
                    }
                }
                this.updateFirstControl_();
            });
        }
        /**
         * The first focusable control changes if hidden, disabled, or
         * style.display changes for the control or any of its ancestors. Add
         * mutation observers to watch for these changes in order to ensure the
         * first control keydown listener is always on the correct element.
         */
        addMutationObservers_(control) {
            let current = control;
            while (current && current !== this.root) {
                const currentObserver = this.createObserver_();
                currentObserver.observe(current, {
                    attributes: true,
                    attributeFilter: ['hidden', 'disabled', 'style'],
                    attributeOldValue: true,
                });
                this.controlObservers_.push(currentObserver);
                current = current.parentNode;
            }
        }
        /**
         * This function gets called when the row itself receives the focus
         * event.
         */
        onFocus_(e) {
            if (this.mouseFocused_) {
                this.mouseFocused_ = false; // Consume and reset flag.
                return;
            }
            // If focus is being restored from outside the item and the event is
            // fired by the list item itself, focus the first control so that the
            // user can tab through all the controls. When the user shift-tabs
            // back to the row, or focus is restored to the row from a dropdown on
            // the last item, the last child item will be focused before the row
            // itself. Since this is the desired behavior, do not shift focus to
            // the first item in these cases.
            const restoreFocusToFirst = this.listBlurred && e.composedPath()[0] === this;
            if (this.lastFocused && !restoreFocusToFirst) {
                focusWithoutInk(this.row_.getEquivalentElement(this.lastFocused));
            }
            else {
                assert(this.firstControl_);
                const firstFocusable = this.firstControl_;
                focusWithoutInk(firstFocusable);
            }
            this.listBlurred = false;
            this.isFocused = true;
        }
        onFirstControlKeydown_(e) {
            const keyEvent = e;
            if (keyEvent.shiftKey && keyEvent.key === 'Tab') {
                this.focus();
            }
        }
        ironListTabIndexChanged_() {
            if (this.row_) {
                this.row_.makeActive(this.ironListTabIndex === 0);
            }
            // If a new row is being focused, reset listBlurred. This means an
            // item has been removed and iron-list is about to focus the next
            // item.
            if (this.ironListTabIndex === 0) {
                this.listBlurred = false;
            }
        }
        onMouseDown_() {
            this.mouseFocused_ =
                true; // Set flag to not do any control-focusing.
        }
        onBlur_(e) {
            // Reset focused flags since it's not active anymore.
            this.mouseFocused_ = false;
            this.isFocused = false;
            const node = e.relatedTarget ? e.relatedTarget : null;
            if (!this.parentNode.contains(node)) {
                this.listBlurred = true;
            }
        }
    }
    return FocusRowMixin;
});

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

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Convert a javascript string into a Mojo String16.
// Convert a Mojo String16 into a javascript string.
function mojoString16ToString(str16) {
    return String.fromCharCode(...str16.data);
}

// mojom-webui/mojo/public/mojom/base/big_buffer.mojom-webui.js is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const BigBufferSharedMemoryRegionSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType} }
 */
const BigBufferSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
mojo.internal.Struct(BigBufferSharedMemoryRegionSpec.$, 'BigBufferSharedMemoryRegion', [
    mojo.internal.StructField('bufferHandle', 0, 0, mojo.internal.Handle, null, false /* nullable */, 0),
    mojo.internal.StructField('size', 4, 0, mojo.internal.Uint32, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Union(BigBufferSpec.$, 'BigBuffer', {
    'bytes': {
        'ordinal': 0,
        'type': mojo.internal.Array(mojo.internal.Uint8, false),
    },
    'sharedMemory': {
        'ordinal': 1,
        'type': BigBufferSharedMemoryRegionSpec.$,
    },
    'invalidBuffer': {
        'ordinal': 2,
        'type': mojo.internal.Bool,
    },
});

// mojom-webui/mojo/public/mojom/base/string16.mojom-webui.js is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const String16Spec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const BigString16Spec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
mojo.internal.Struct(String16Spec.$, 'String16', [
    mojo.internal.StructField('data', 0, 0, mojo.internal.Array(mojo.internal.Uint16, false), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(BigString16Spec.$, 'BigString16', [
    mojo.internal.StructField('data', 0, 0, BigBufferSpec.$, null, false /* nullable */, 0),
], [[0, 24],]);

// mojom-webui/url/mojom/url.mojom-webui.js is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @const { {$:!mojo.internal.MojomType}}
 */
const UrlSpec = { $: /** @type {!mojo.internal.MojomType} */ ({}) };
mojo.internal.Struct(UrlSpec.$, 'Url', [
    mojo.internal.StructField('url', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);

// chrome/browser/ui/webui/downloads/downloads.mojom-webui.ts is auto generated by mojom_bindings_generator.py, do not edit
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DangerTypeSpec = { $: mojo.internal.Enum() };
var DangerType;
(function (DangerType) {
    DangerType[DangerType["MIN_VALUE"] = 0] = "MIN_VALUE";
    DangerType[DangerType["MAX_VALUE"] = 16] = "MAX_VALUE";
    DangerType[DangerType["kNoApplicableDangerType"] = 0] = "kNoApplicableDangerType";
    DangerType[DangerType["kDangerousFile"] = 1] = "kDangerousFile";
    DangerType[DangerType["kDangerousUrl"] = 2] = "kDangerousUrl";
    DangerType[DangerType["kDangerousContent"] = 3] = "kDangerousContent";
    DangerType[DangerType["kUncommonContent"] = 4] = "kUncommonContent";
    DangerType[DangerType["kDangerousHost"] = 5] = "kDangerousHost";
    DangerType[DangerType["kPotentiallyUnwanted"] = 6] = "kPotentiallyUnwanted";
    DangerType[DangerType["kAsyncScanning"] = 7] = "kAsyncScanning";
    DangerType[DangerType["kAsyncLocalPasswordScanning"] = 8] = "kAsyncLocalPasswordScanning";
    DangerType[DangerType["kBlockedPasswordProtected"] = 9] = "kBlockedPasswordProtected";
    DangerType[DangerType["kBlockedTooLarge"] = 10] = "kBlockedTooLarge";
    DangerType[DangerType["kSensitiveContentWarning"] = 11] = "kSensitiveContentWarning";
    DangerType[DangerType["kSensitiveContentBlock"] = 12] = "kSensitiveContentBlock";
    DangerType[DangerType["kDeepScannedFailed"] = 13] = "kDeepScannedFailed";
    DangerType[DangerType["kDeepScannedSafe"] = 14] = "kDeepScannedSafe";
    DangerType[DangerType["kDeepScannedOpenedDangerous"] = 15] = "kDeepScannedOpenedDangerous";
    DangerType[DangerType["kBlockedUnsupportedFileType"] = 16] = "kBlockedUnsupportedFileType";
})(DangerType || (DangerType = {}));
const StateSpec = { $: mojo.internal.Enum() };
var State;
(function (State) {
    State[State["MIN_VALUE"] = 0] = "MIN_VALUE";
    State[State["MAX_VALUE"] = 9] = "MAX_VALUE";
    State[State["kInProgress"] = 0] = "kInProgress";
    State[State["kCancelled"] = 1] = "kCancelled";
    State[State["kComplete"] = 2] = "kComplete";
    State[State["kPaused"] = 3] = "kPaused";
    State[State["kDangerous"] = 4] = "kDangerous";
    State[State["kInterrupted"] = 5] = "kInterrupted";
    State[State["kInsecure"] = 6] = "kInsecure";
    State[State["kAsyncScanning"] = 7] = "kAsyncScanning";
    State[State["kPromptForScanning"] = 8] = "kPromptForScanning";
    State[State["kPromptForLocalPasswordScanning"] = 9] = "kPromptForLocalPasswordScanning";
})(State || (State = {}));
const SafeBrowsingStateSpec = { $: mojo.internal.Enum() };
var SafeBrowsingState;
(function (SafeBrowsingState) {
    SafeBrowsingState[SafeBrowsingState["MIN_VALUE"] = 0] = "MIN_VALUE";
    SafeBrowsingState[SafeBrowsingState["MAX_VALUE"] = 2] = "MAX_VALUE";
    SafeBrowsingState[SafeBrowsingState["kNoSafeBrowsing"] = 0] = "kNoSafeBrowsing";
    SafeBrowsingState[SafeBrowsingState["kStandardProtection"] = 1] = "kStandardProtection";
    SafeBrowsingState[SafeBrowsingState["kEnhancedProtection"] = 2] = "kEnhancedProtection";
})(SafeBrowsingState || (SafeBrowsingState = {}));
class PageHandlerFactoryPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'downloads.mojom.PageHandlerFactory', scope);
    }
}
class PageHandlerFactoryRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerFactoryPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    createPageHandler(page, handler) {
        this.proxy.sendMessage(0, PageHandlerFactory_CreatePageHandler_ParamsSpec.$, null, [
            page,
            handler
        ]);
    }
}
class PageHandlerFactory {
    static get $interfaceName() {
        return "downloads.mojom.PageHandlerFactory";
    }
    /**
     * Returns a remote for this interface which sends messages to the browser.
     * The browser must have an interface request binder registered for this
     * interface and accessible to the calling document's frame.
     */
    static getRemote() {
        let remote = new PageHandlerFactoryRemote;
        remote.$.bindNewPipeAndPassReceiver().bindInBrowser();
        return remote;
    }
}
class PageHandlerPendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'downloads.mojom.PageHandler', scope);
    }
}
class PageHandlerRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PageHandlerPendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    getDownloads(searchTerms) {
        this.proxy.sendMessage(0, PageHandler_GetDownloads_ParamsSpec.$, null, [
            searchTerms
        ]);
    }
    openFileRequiringGesture(id) {
        this.proxy.sendMessage(1, PageHandler_OpenFileRequiringGesture_ParamsSpec.$, null, [
            id
        ]);
    }
    drag(id) {
        this.proxy.sendMessage(2, PageHandler_Drag_ParamsSpec.$, null, [
            id
        ]);
    }
    saveDangerousRequiringGesture(id) {
        this.proxy.sendMessage(3, PageHandler_SaveDangerousRequiringGesture_ParamsSpec.$, null, [
            id
        ]);
    }
    saveSuspiciousRequiringGesture(id) {
        this.proxy.sendMessage(4, PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec.$, null, [
            id
        ]);
    }
    recordOpenBypassWarningPrompt(id) {
        this.proxy.sendMessage(5, PageHandler_RecordOpenBypassWarningPrompt_ParamsSpec.$, null, [
            id
        ]);
    }
    saveDangerousFromPromptRequiringGesture(id) {
        this.proxy.sendMessage(6, PageHandler_SaveDangerousFromPromptRequiringGesture_ParamsSpec.$, null, [
            id
        ]);
    }
    recordCancelBypassWarningPrompt(id) {
        this.proxy.sendMessage(7, PageHandler_RecordCancelBypassWarningPrompt_ParamsSpec.$, null, [
            id
        ]);
    }
    discardDangerous(id) {
        this.proxy.sendMessage(8, PageHandler_DiscardDangerous_ParamsSpec.$, null, [
            id
        ]);
    }
    retryDownload(id) {
        this.proxy.sendMessage(9, PageHandler_RetryDownload_ParamsSpec.$, null, [
            id
        ]);
    }
    show(id) {
        this.proxy.sendMessage(10, PageHandler_Show_ParamsSpec.$, null, [
            id
        ]);
    }
    pause(id) {
        this.proxy.sendMessage(11, PageHandler_Pause_ParamsSpec.$, null, [
            id
        ]);
    }
    resume(id) {
        this.proxy.sendMessage(12, PageHandler_Resume_ParamsSpec.$, null, [
            id
        ]);
    }
    remove(id) {
        this.proxy.sendMessage(13, PageHandler_Remove_ParamsSpec.$, null, [
            id
        ]);
    }
    undo() {
        this.proxy.sendMessage(14, PageHandler_Undo_ParamsSpec.$, null, []);
    }
    cancel(id) {
        this.proxy.sendMessage(15, PageHandler_Cancel_ParamsSpec.$, null, [
            id
        ]);
    }
    clearAll() {
        this.proxy.sendMessage(16, PageHandler_ClearAll_ParamsSpec.$, null, []);
    }
    openDownloadsFolderRequiringGesture() {
        this.proxy.sendMessage(17, PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec.$, null, []);
    }
    openDuringScanningRequiringGesture(id) {
        this.proxy.sendMessage(18, PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec.$, null, [
            id
        ]);
    }
    reviewDangerousRequiringGesture(id) {
        this.proxy.sendMessage(19, PageHandler_ReviewDangerousRequiringGesture_ParamsSpec.$, null, [
            id
        ]);
    }
    deepScan(id) {
        this.proxy.sendMessage(20, PageHandler_DeepScan_ParamsSpec.$, null, [
            id
        ]);
    }
    bypassDeepScanRequiringGesture(id) {
        this.proxy.sendMessage(21, PageHandler_BypassDeepScanRequiringGesture_ParamsSpec.$, null, [
            id
        ]);
    }
}
class PagePendingReceiver {
    constructor(handle) {
        this.handle = mojo.internal.interfaceSupport.getEndpointForReceiver(handle);
    }
    bindInBrowser(scope = 'context') {
        mojo.internal.interfaceSupport.bind(this.handle, 'downloads.mojom.Page', scope);
    }
}
class PageRemote {
    constructor(handle) {
        this.proxy =
            new mojo.internal.interfaceSupport.InterfaceRemoteBase(PagePendingReceiver, handle);
        this.$ = new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);
        this.onConnectionError = this.proxy.getConnectionErrorEventRouter();
    }
    removeItem(index) {
        this.proxy.sendMessage(0, Page_RemoveItem_ParamsSpec.$, null, [
            index
        ]);
    }
    updateItem(index, data) {
        this.proxy.sendMessage(1, Page_UpdateItem_ParamsSpec.$, null, [
            index,
            data
        ]);
    }
    insertItems(index, items) {
        this.proxy.sendMessage(2, Page_InsertItems_ParamsSpec.$, null, [
            index,
            items
        ]);
    }
    clearAll() {
        this.proxy.sendMessage(3, Page_ClearAll_ParamsSpec.$, null, []);
    }
}
/**
 * An object which receives request messages for the Page
 * mojom interface and dispatches them as callbacks. One callback receiver exists
 * on this object for each message defined in the mojom interface, and each
 * receiver can have any number of listeners added to it.
 */
class PageCallbackRouter {
    constructor() {
        this.helper_internal_ = new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(PageRemote);
        this.$ = new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);
        this.router_ = new mojo.internal.interfaceSupport.CallbackRouter;
        this.removeItem =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(0, Page_RemoveItem_ParamsSpec.$, null, this.removeItem.createReceiverHandler(false /* expectsResponse */));
        this.updateItem =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(1, Page_UpdateItem_ParamsSpec.$, null, this.updateItem.createReceiverHandler(false /* expectsResponse */));
        this.insertItems =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(2, Page_InsertItems_ParamsSpec.$, null, this.insertItems.createReceiverHandler(false /* expectsResponse */));
        this.clearAll =
            new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);
        this.helper_internal_.registerHandler(3, Page_ClearAll_ParamsSpec.$, null, this.clearAll.createReceiverHandler(false /* expectsResponse */));
        this.onConnectionError = this.helper_internal_.getConnectionErrorEventRouter();
    }
    /**
     * @param id An ID returned by a prior call to addListener.
     * @return True iff the identified listener was found and removed.
     */
    removeListener(id) {
        return this.router_.removeListener(id);
    }
}
const DataSpec = { $: {} };
const PageHandlerFactory_CreatePageHandler_ParamsSpec = { $: {} };
const PageHandler_GetDownloads_ParamsSpec = { $: {} };
const PageHandler_OpenFileRequiringGesture_ParamsSpec = { $: {} };
const PageHandler_Drag_ParamsSpec = { $: {} };
const PageHandler_SaveDangerousRequiringGesture_ParamsSpec = { $: {} };
const PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec = { $: {} };
const PageHandler_RecordOpenBypassWarningPrompt_ParamsSpec = { $: {} };
const PageHandler_SaveDangerousFromPromptRequiringGesture_ParamsSpec = { $: {} };
const PageHandler_RecordCancelBypassWarningPrompt_ParamsSpec = { $: {} };
const PageHandler_DiscardDangerous_ParamsSpec = { $: {} };
const PageHandler_RetryDownload_ParamsSpec = { $: {} };
const PageHandler_Show_ParamsSpec = { $: {} };
const PageHandler_Pause_ParamsSpec = { $: {} };
const PageHandler_Resume_ParamsSpec = { $: {} };
const PageHandler_Remove_ParamsSpec = { $: {} };
const PageHandler_Undo_ParamsSpec = { $: {} };
const PageHandler_Cancel_ParamsSpec = { $: {} };
const PageHandler_ClearAll_ParamsSpec = { $: {} };
const PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec = { $: {} };
const PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec = { $: {} };
const PageHandler_ReviewDangerousRequiringGesture_ParamsSpec = { $: {} };
const PageHandler_DeepScan_ParamsSpec = { $: {} };
const PageHandler_BypassDeepScanRequiringGesture_ParamsSpec = { $: {} };
const Page_RemoveItem_ParamsSpec = { $: {} };
const Page_UpdateItem_ParamsSpec = { $: {} };
const Page_InsertItems_ParamsSpec = { $: {} };
const Page_ClearAll_ParamsSpec = { $: {} };
mojo.internal.Struct(DataSpec.$, 'Data', [
    mojo.internal.StructField('fileExternallyRemoved', 0, 0, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('isDangerous', 0, 1, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('isInsecure', 0, 2, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('isReviewable', 0, 3, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('otr', 0, 4, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('resume', 0, 5, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('retry', 0, 6, mojo.internal.Bool, false, false /* nullable */, 0),
    mojo.internal.StructField('percent', 4, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('started', 8, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('total', 16, 0, mojo.internal.Int64, BigInt(0), false /* nullable */, 0),
    mojo.internal.StructField('byExtId', 24, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('byExtName', 32, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('dangerType', 12, 0, DangerTypeSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('dateString', 40, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('fileName', 48, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('filePath', 56, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('fileUrl', 64, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('id', 72, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('lastReasonText', 80, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('progressStatusText', 88, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('showInFolderText', 96, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('sinceString', 104, 0, mojo.internal.String, null, false /* nullable */, 0),
    mojo.internal.StructField('state', 112, 0, StateSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('url', 120, 0, UrlSpec.$, null, true /* nullable */, 0),
    mojo.internal.StructField('displayUrl', 128, 0, String16Spec.$, null, false /* nullable */, 0),
    mojo.internal.StructField('safeBrowsingState', 116, 0, SafeBrowsingStateSpec.$, 0, false /* nullable */, 0),
    mojo.internal.StructField('hasSafeBrowsingVerdict', 0, 7, mojo.internal.Bool, false, false /* nullable */, 0),
], [[0, 144],]);
mojo.internal.Struct(PageHandlerFactory_CreatePageHandler_ParamsSpec.$, 'PageHandlerFactory_CreatePageHandler_Params', [
    mojo.internal.StructField('page', 0, 0, mojo.internal.InterfaceProxy(PageRemote), null, false /* nullable */, 0),
    mojo.internal.StructField('handler', 8, 0, mojo.internal.InterfaceRequest(PageHandlerPendingReceiver), null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(PageHandler_GetDownloads_ParamsSpec.$, 'PageHandler_GetDownloads_Params', [
    mojo.internal.StructField('searchTerms', 0, 0, mojo.internal.Array(mojo.internal.String, false), null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_OpenFileRequiringGesture_ParamsSpec.$, 'PageHandler_OpenFileRequiringGesture_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_Drag_ParamsSpec.$, 'PageHandler_Drag_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SaveDangerousRequiringGesture_ParamsSpec.$, 'PageHandler_SaveDangerousRequiringGesture_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SaveSuspiciousRequiringGesture_ParamsSpec.$, 'PageHandler_SaveSuspiciousRequiringGesture_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RecordOpenBypassWarningPrompt_ParamsSpec.$, 'PageHandler_RecordOpenBypassWarningPrompt_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_SaveDangerousFromPromptRequiringGesture_ParamsSpec.$, 'PageHandler_SaveDangerousFromPromptRequiringGesture_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RecordCancelBypassWarningPrompt_ParamsSpec.$, 'PageHandler_RecordCancelBypassWarningPrompt_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_DiscardDangerous_ParamsSpec.$, 'PageHandler_DiscardDangerous_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_RetryDownload_ParamsSpec.$, 'PageHandler_RetryDownload_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_Show_ParamsSpec.$, 'PageHandler_Show_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_Pause_ParamsSpec.$, 'PageHandler_Pause_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_Resume_ParamsSpec.$, 'PageHandler_Resume_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_Remove_ParamsSpec.$, 'PageHandler_Remove_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_Undo_ParamsSpec.$, 'PageHandler_Undo_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_Cancel_ParamsSpec.$, 'PageHandler_Cancel_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ClearAll_ParamsSpec.$, 'PageHandler_ClearAll_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OpenDownloadsFolderRequiringGesture_ParamsSpec.$, 'PageHandler_OpenDownloadsFolderRequiringGesture_Params', [], [[0, 8],]);
mojo.internal.Struct(PageHandler_OpenDuringScanningRequiringGesture_ParamsSpec.$, 'PageHandler_OpenDuringScanningRequiringGesture_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_ReviewDangerousRequiringGesture_ParamsSpec.$, 'PageHandler_ReviewDangerousRequiringGesture_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_DeepScan_ParamsSpec.$, 'PageHandler_DeepScan_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(PageHandler_BypassDeepScanRequiringGesture_ParamsSpec.$, 'PageHandler_BypassDeepScanRequiringGesture_Params', [
    mojo.internal.StructField('id', 0, 0, mojo.internal.String, null, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Page_RemoveItem_ParamsSpec.$, 'Page_RemoveItem_Params', [
    mojo.internal.StructField('index', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
], [[0, 16],]);
mojo.internal.Struct(Page_UpdateItem_ParamsSpec.$, 'Page_UpdateItem_Params', [
    mojo.internal.StructField('index', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('data', 8, 0, DataSpec.$, null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(Page_InsertItems_ParamsSpec.$, 'Page_InsertItems_Params', [
    mojo.internal.StructField('index', 0, 0, mojo.internal.Int32, 0, false /* nullable */, 0),
    mojo.internal.StructField('items', 8, 0, mojo.internal.Array(DataSpec.$, false), null, false /* nullable */, 0),
], [[0, 24],]);
mojo.internal.Struct(Page_ClearAll_ParamsSpec.$, 'Page_ClearAll_Params', [], [[0, 8],]);

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class BrowserProxy {
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        this.handler = new PageHandlerRemote();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    static getInstance() {
        return instance$2 || (instance$2 = new BrowserProxy());
    }
    static setInstance(obj) {
        instance$2 = obj;
    }
}
let instance$2 = null;

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * A URL for the filetype icon for |filePath|. OS and theme dependent.
 */
function getFileIconUrl(filePath) {
    const url = new URL('chrome://fileicon/');
    url.searchParams.set('path', filePath);
    url.searchParams.set('scale', window.devicePixelRatio + 'x');
    return url.toString();
}

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

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class IconLoaderImpl {
    constructor() {
        this.iconResolvers_ = new Map();
        this.listeningImages_ = new Set();
    }
    /**
     * @return Whether or not the icon loaded successfully.
     */
    loadIcon(imageEl, filePath) {
        const url = getFileIconUrl(filePath);
        if (!this.iconResolvers_.has(url)) {
            this.iconResolvers_.set(url, new PromiseResolver());
        }
        if (!this.listeningImages_.has(imageEl)) {
            imageEl.addEventListener('load', this.finishedLoading_.bind(this));
            imageEl.addEventListener('error', this.finishedLoading_.bind(this));
            this.listeningImages_.add(imageEl);
        }
        imageEl.src = url;
        return this.iconResolvers_.get(url).promise;
    }
    finishedLoading_(e) {
        const resolver = this.iconResolvers_.get(e.currentTarget.src);
        if (!resolver.isFulfilled) {
            resolver.resolve(e.type === 'load');
        }
    }
    static getInstance() {
        return instance$1 || (instance$1 = new IconLoaderImpl());
    }
    static setInstance(obj) {
        instance$1 = obj;
    }
}
let instance$1 = null;

function getTemplate$6() {
    return html `<!--_html_template_start_--><style include="action-link cr-hidden-style cr-icons">:host{--controlled-by-active-color:#333;--controlled-by-active-link-color:var(--google-blue-600);--controlled-by-inactive-color:#5a5a5a;display:flex;flex-direction:column;outline:0}@media (prefers-color-scheme:dark){:host{--controlled-by-active-color:inherit;--controlled-by-active-link-color:var(--cr-link-color);--controlled-by-inactive-color:inherit}}cr-button{font-weight:500;margin:0;min-width:auto}#date{font-size:.875rem;font-weight:400;letter-spacing:.25px;margin:21px auto 6px;padding-bottom:4px;padding-top:8px;width:var(--downloads-card-width)}#date:empty{display:none}#content{border-radius:var(--cr-card-border-radius);display:flex;flex:none;margin:6px auto;min-height:103px;width:var(--downloads-card-width);max-width:calc(100% - 2 * var(--downloads-card-margin))}#content.is-active{box-shadow:var(--cr-card-shadow)}@media (prefers-color-scheme:light){#content.is-active{background-color:var(--cr-card-background-color)}}#content:not(.is-active){background:rgba(255,255,255,.6);border:1px var(--google-grey-300) solid}@media (prefers-color-scheme:dark){#content:not(.is-active){background:0 0;border-color:var(--google-grey-800)}}#details{border-inline-start:1px #d8d8d8 solid;display:flex;flex:1;flex-direction:column;min-width:0;padding-bottom:16px;padding-inline-end:16px;padding-inline-start:var(--downloads-card-margin);padding-top:16px}@media (prefers-color-scheme:dark){#details{border-color:rgba(var(--google-grey-800-rgb),.8)}}#content:not(.is-active) #details{color:rgba(27,27,27,.6)}@media (prefers-color-scheme:dark){#content:not(.is-active) #details{color:rgba(var(--google-grey-500-rgb),.6)}}#content:not(.is-active) #name{text-decoration:line-through}@media (prefers-color-scheme:dark){#content:not(.is-active) :-webkit-any(#name,#tag){color:var(--google-grey-500)}}.icon-wrapper{align-self:center;flex:none;justify-content:center;margin:0 24px}#file-icon-wrapper,.icon{height:32px;width:32px}#file-icon-wrapper{overflow:hidden}#content:not(.is-active) .icon{filter:grayscale(100%);opacity:.5}#file-icon-wrapper iron-icon[icon-color=light-grey]{color:var(--google-grey-400)}#file-icon-wrapper iron-icon[icon-color=red]{color:var(--google-red-700)}#file-icon-wrapper iron-icon[icon-color=yellow]{color:var(--google-yellow-500)}@media (prefers-color-scheme:dark){#file-icon-wrapper iron-icon[icon-color=red]{color:var(--google-red-300)}}#file-icon-wrapper iron-icon[icon-color=grey]{color:var(--google-grey-700)}@media (prefers-color-scheme:dark){#file-icon-wrapper iron-icon[icon-color=grey]{color:var(--google-grey-500)}}.description[description-color=red]{color:var(--google-red-700)}@media (prefers-color-scheme:dark){.description[description-color=red]{color:var(--google-red-300)}}.description[description-color=grey]{color:var(--google-grey-700)}@media (prefers-color-scheme:dark){.description[description-color=grey]{color:var(--google-grey-500)}}#file-link,#name,#url{max-width:100%}#file-link,#name{font-weight:500;word-break:break-all}@media (prefers-color-scheme:light){.is-active :-webkit-any(#file-link,#show){color:var(--google-blue-600)}.is-active #name{color:var(--cr-primary-text-color)}}#name{margin-inline-end:12px}#tag{color:#5a5a5a;font-weight:500}#url{color:inherit;display:block;margin-top:6px;min-height:0;overflow:hidden;text-decoration:none;text-overflow:ellipsis;white-space:nowrap}.is-active #url{color:var(--cr-secondary-text-color)}#progress,.controls,.description:not(:empty){margin-top:16px}@media (prefers-color-scheme:light){.is-active .description[description-color='']{color:#616161}}#progress{--paper-progress-active-color:var(--google-blue-600);--paper-progress-container-color:rgb(223, 222, 223);width:auto}@media (prefers-color-scheme:dark){#progress{--paper-progress-active-color:var(--google-blue-300);--paper-progress-container-color:var(--google-grey-800)}}#show{margin:.7em 0}#controlled-by,#controlled-by a{color:var(--controlled-by-inactive-color)}.is-active #controlled-by{color:var(--controlled-by-active-color)}.is-active #controlled-by a{color:var(--controlled-by-active-link-color)}.more-options{display:flex;flex-direction:column}cr-icon-button{--cr-icon-button-icon-size:16px;--cr-icon-button-margin-end:8px;margin-top:8px}#incognito{-webkit-mask-image:url(images/incognito_marker.svg);align-self:flex-end;background-color:var(--cr-secondary-text-color);height:16px;margin-block-end:20px;margin-block-start:auto;margin-inline-end:16px;width:16px}:host-context([dir=rtl]) #incognito{left:16px;right:initial}#dangerous .action-button,#deepScan,#openNow,#pauseOrResume{margin-inline-end:8px}</style>

<div id="date" role="heading" aria-level="2">[[computeDate_(data.hideDate,
    data.sinceString,
    data.dateString)]]</div>

<div id="content" on-dragstart="onDragStart_" class$="[[computeClass_(isActive_, isDangerous_, showProgress_)]]" focus-row-container>
  <div id="file-icon-wrapper" class="icon-wrapper" role="img" aria-label="[[iconAriaLabel_]]" aria-hidden="[[computeIconAriaHidden_(iconAriaLabel_)]]">
    <img class="icon" id="file-icon" alt="" hidden="[[!useFileIcon_]]" icon-color$="[[computeIconColor_(isDangerous_, data.dangerType,
        useFileIcon_, improvedDownloadWarningsUx_,
        displayType_)]]">
    <iron-icon class="icon" hidden="[[useFileIcon_]]" icon$="[[computeIcon_(isDangerous_, data.dangerType, useFileIcon_,
            improvedDownloadWarningsUx_, displayType_)]]" icon-color$="[[computeIconColor_(isDangerous_, data.dangerType,
            useFileIcon_, improvedDownloadWarningsUx_,
            displayType_)]]"></iron-icon>
  </div>

  <div id="details">
    <div id="title-area" role="gridcell"><a is="action-link" id="file-link" href="[[data.url.url]]" on-click="onFileLinkClick_" focus-row-control focus-type="fileLink" hidden="[[!shouldLinkFilename_]]">[[data.fileName]]</a><span id="name" hidden="[[shouldLinkFilename_]]">[[data.fileName]]</span>
      <span id="tag">[[computeTag_(data.state,
                                   data.lastReasonText,
                                   data.fileExternallyRemoved)]]</span>
    </div>

    <div role="gridcell">
      <a id="url" target="_blank" on-click="onUrlClick_" focus-row-control focus-type="url">[[getDisplayUrlStr_(data.displayUrl)]]</a>
    </div>

    <div class="description" role="gridcell" description-color$="[[iconAndDescriptionColor_(displayType_,
            improvedDownloadWarningsUx_)]]" hidden$="[[!computeDescriptionVisible_(data.*, displayType_,
            improvedDownloadWarningsUx_)]]">
      [[computeDescription_(
          data.state,
          data.dangerType,
          data.fileName,
          data.progressStatusText,
          displayType_,
          improvedDownloadWarningsUx_)]]
    </div>

    <div class="description" role="gridcell" hidden="[[!computeSecondLineVisible_(data.state)]]">
      $i18n{asyncScanningDownloadDescSecond}
    </div>

    <template is="dom-if" if="[[showProgress_]]">
      <div role="gridcell">
        <paper-progress id="progress" indeterminate="[[isIndeterminate_(data.percent)]]" value="[[data.percent]]">
        </paper-progress>
      </div>
    </template>

    
    <template is="dom-if" if="[[!improvedDownloadWarningsUx_]]">
      <div id="safe" class="controls" hidden="[[isDangerous_]]">
        <span role="gridcell" hidden="[[!hasShowInFolderLink_]]">
          <a is="action-link" id="show" on-click="onShowClick_" focus-row-control focus-type="show" title="[[data.filePath]]">
            [[data.showInFolderText]]
          </a>
        </span>
        <template is="dom-if" if="[[data.retry]]">
          <span role="gridcell">
            <cr-button class="action-button" on-click="onRetryClick_" focus-row-control focus-type="retry">
              $i18n{controlRetry}
            </cr-button>
          </span>
        </template>
        <template is="dom-if" if="[[pauseOrResumeText_]]">
          <span role="gridcell">
            <cr-button on-click="onPauseOrResumeClick_" id="pauseOrResume" focus-row-control focus-type="pauseOrResume">
              [[pauseOrResumeText_]]
            </cr-button>
          </span>
        </template>
        <template is="dom-if" if="[[showDeepScan_]]" restamp>
          <span role="gridcell">
            <cr-button on-click="onDeepScanClick_" id="deepScan" class="action-button" focus-row-control focus-type="open">
              [[computeDeepScanControlText_(data.state)]]
            </cr-button>
          </span>
          <span role="gridcell">
            <cr-button on-click="onBypassDeepScanClick_" id="bypassDeepScan" focus-row-control focus-type="open">
              $i18n{controlBypassDeepScan}
            </cr-button>
          </span>
        </template>
        <template is="dom-if" if="[[showCancel_]]">
          <span role="gridcell">
            <cr-button on-click="onCancelClick_" focus-row-control focus-type="cancel">
              $i18n{controlCancel}
            </cr-button>
          </span>
        </template>
        <template is="dom-if" if="[[showOpenAnyway_]]">
          <span role="gridcell">
            <cr-button on-click="onOpenAnywayClick_" id="openAnyway" focus-row-control focus-type="open">
              $i18n{controlOpenAnyway}
            </cr-button>
          </span>
        </template>
      </div>
    </template>
    
    <template is="dom-if" if="[[improvedDownloadWarningsUx_]]">
      <div id="safe" class="controls" hidden="[[isDangerous_]]">
        <template is="dom-if" if="[[showDeepScan_]]" restamp>
          <span role="gridcell">
            <cr-button on-click="onDeepScanClick_" id="deepScan" class="action-button" focus-row-control focus-type="open">
              [[computeDeepScanControlText_(data.state)]]
            </cr-button>
          </span>
        </template>
      </div>
    </template>
    <div id="controlled-by" hidden="[[isDangerous_]]"></div>

    
    <template is="dom-if" if="[[computeShowButtonsForDangerous_(isDangerous_, improvedDownloadWarningsUx_)]]">
      <div id="dangerous" class="controls">
        
        <template is="dom-if" if="[[isReviewable_]]">
          <span role="gridcell">
            <cr-button on-click="onDiscardDangerousClick_" class="action-button" focus-row-control focus-type="discard">
              $i18n{dangerDiscard}
            </cr-button>
          </span>
          <span role="gridcell">
            <cr-button on-click="onReviewDangerousClick_" focus-row-control focus-type="save">
              $i18n{dangerReview}
            </cr-button>
          </span>
        </template>

        <template is="dom-if" if="[[!isReviewable_]]">
          
          <template is="dom-if" if="[[!isMalware_]]">
            <span role="gridcell">
              <cr-button on-click="onDiscardDangerousClick_" class="action-button" focus-row-control focus-type="discard">
                $i18n{dangerDiscard}
              </cr-button>
            </span>
            <span role="gridcell">
              <cr-button on-click="onSaveDangerousClick_" focus-row-control focus-type="save">
                $i18n{dangerSave}
              </cr-button>
            </span>
          </template>

          
          <template is="dom-if" if="[[isMalware_]]">
            <span role="gridcell">
              <cr-button on-click="onDiscardDangerousClick_" class="action-button" focus-row-control focus-type="discard">
                $i18n{controlRemoveFromList}
              </cr-button>
            </span>
            <span role="gridcell">
              <cr-button on-click="onSaveDangerousClick_" focus-row-control focus-type="save">
                $i18n{dangerRestore}
              </cr-button>
            </span>
          </template>
        </template>
      </div>
    </template>
  </div>
  <div class="more-options">
    
    <template is="dom-if" if="[[!improvedDownloadWarningsUx_]]">
      <div role="gridcell">
        <cr-icon-button class="icon-clear" style$="[[computeRemoveStyle_(isDangerous_, showCancel_)]]" id="remove-old" title="$i18n{controlRemoveFromList}" aria-label$="[[controlRemoveFromListAriaLabel_]]" on-click="onRemoveClick_" focus-row-control focus-type="remove">
        </cr-icon-button>
      </div>
    </template>
    
    <template is="dom-if" if="[[improvedDownloadWarningsUx_]]">
      <div role="gridcell">
        <cr-icon-button id="more-actions" iron-icon="cr:more-vert" class="dropdown-trigger" title="$i18n{moreActions}" on-click="onMoreActionsClick_" aria-haspopup="menu">
        </cr-icon-button>
      </div>
      <cr-action-menu id="more-actions-menu" role-description="$i18n{actionMenuDescription}">
        <button class="dropdown-item" on-click="onShowClick_" hidden="[[!hasShowInFolderLink_]]" id="show-in-folder">
          [[data.showInFolderText]]
        </button>
        <button class="dropdown-item" on-click="onPauseOrResumeClick_" hidden="[[!pauseOrResumeText_]]" id="pause-or-resume">
          [[pauseOrResumeText_]]
        </button>
        <button class="dropdown-item" on-click="onRemoveClick_" hidden="[[!computeShowRemove_(isDangerous_, showCancel_)]]" id="remove">
          $i18n{controlDeleteFromHistory}
        </button>
        <button class="dropdown-item" on-click="onDiscardDangerousClick_" hidden="[[!computeShowControlsForDangerous_(isDangerous_, isReviewable_)]]" id="discard-dangerous">
          $i18n{controlDeleteFromHistory}
        </button>
        <button class="dropdown-item" on-click="onRetryClick_" hidden="[[!data.retry]]" id="retry">
          $i18n{controlRetry}
        </button>
        <button class="dropdown-item" on-click="onDeepScanClick_" hidden="[[!showDeepScan_]]" id="deep-scan">
          $i18n{controlDeepScan}
        </button>
        <button class="dropdown-item" on-click="onBypassDeepScanClick_" hidden="[[!showDeepScan_]]" id="bypass-deep-scan">
          [[computeSaveDangerousLabel_(displayType_)]]
        </button>
        <button class="dropdown-item" on-click="onCancelClick_" hidden="[[!showCancel_]]" id="cancel">
          $i18n{controlCancel}
        </button>
        <button class="dropdown-item" on-click="onOpenAnywayClick_" hidden="[[!showOpenAnyway_]]" id="open-anyway">
          $i18n{controlOpenAnyway}
        </button>
        <button class="dropdown-item" on-click="onDiscardDangerousClick_" hidden="[[!isReviewable_]]" id="reviewable-discard-dangerous">
          $i18n{dangerDiscard}
        </button>
        <button class="dropdown-item" on-click="onReviewDangerousClick_" hidden="[[!isReviewable_]]" id="review-dangerous">
          $i18n{dangerReview}
        </button>
        
        <button class="dropdown-item" on-click="onSaveDangerousClick_" hidden="[[!computeShowControlsForDangerous_(isDangerous_, isReviewable_)]]" id="save-dangerous">
          [[computeSaveDangerousLabel_(displayType_)]]
        </button>
      </cr-action-menu>
    </template>
    <div id="incognito" title="$i18n{inIncognito}" hidden="[[!data.otr]]"></div>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DownloadsItemElementBase = I18nMixin(FocusRowMixin(PolymerElement));
/**
 * The UI pattern for displaying a download. Computed from DangerType and other
 * properties of the download and user's profile.
 */
var DisplayType;
(function (DisplayType) {
    DisplayType[DisplayType["NORMAL"] = 0] = "NORMAL";
    DisplayType[DisplayType["DANGEROUS"] = 1] = "DANGEROUS";
    DisplayType[DisplayType["SUSPICIOUS"] = 2] = "SUSPICIOUS";
    DisplayType[DisplayType["UNVERIFIED"] = 3] = "UNVERIFIED";
    DisplayType[DisplayType["INSECURE"] = 4] = "INSECURE";
    DisplayType[DisplayType["ERROR"] = 5] = "ERROR";
})(DisplayType || (DisplayType = {}));
class DownloadsItemElement extends DownloadsItemElementBase {
    static get is() {
        return 'downloads-item';
    }
    static get template() {
        return getTemplate$6();
    }
    static get properties() {
        return {
            data: Object,
            completelyOnDisk_: {
                computed: 'computeCompletelyOnDisk_(' +
                    'data.state, data.fileExternallyRemoved)',
                type: Boolean,
                value: true,
            },
            shouldLinkFilename_: {
                computed: 'computeShouldLinkFilename_(' +
                    'data.dangerType, completelyOnDisk_)',
                type: Boolean,
                value: true,
            },
            hasShowInFolderLink_: {
                computed: 'computeHasShowInFolderLink_(' +
                    'data.state, data.fileExternallyRemoved, data.dangerType)',
                type: Boolean,
                value: true,
            },
            controlledBy_: {
                computed: 'computeControlledBy_(data.byExtId, data.byExtName)',
                type: String,
                value: '',
            },
            controlRemoveFromListAriaLabel_: {
                type: String,
                computed: 'computeControlRemoveFromListAriaLabel_(data.fileName)',
            },
            iconAriaLabel_: {
                type: String,
                computed: 'computeIconAriaLabel_(' +
                    'displayType_, improvedDownloadWarningsUx_)',
            },
            isActive_: {
                computed: 'computeIsActive_(' +
                    'data.state, data.fileExternallyRemoved)',
                type: Boolean,
                value: true,
            },
            isDangerous_: {
                computed: 'computeIsDangerous_(data.state)',
                type: Boolean,
                value: false,
            },
            isMalware_: {
                computed: 'computeIsMalware_(isDangerous_, data.dangerType)',
                type: Boolean,
                value: false,
            },
            isReviewable_: {
                computed: 'computeIsReviewable_(data.isReviewable)',
                type: Boolean,
                value: false,
            },
            isInProgress_: {
                computed: 'computeIsInProgress_(data.state)',
                type: Boolean,
                value: false,
            },
            pauseOrResumeText_: {
                computed: 'computePauseOrResumeText_(isInProgress_, data.resume)',
                type: String,
            },
            showCancel_: {
                computed: 'computeShowCancel_(data.state)',
                type: Boolean,
                value: false,
            },
            showProgress_: {
                computed: 'computeShowProgress_(showCancel_, data.percent)',
                type: Boolean,
                value: false,
            },
            showDeepScan_: {
                computed: 'computeShowDeepScan_(data.state)',
                type: Boolean,
                value: false,
            },
            showOpenAnyway_: {
                computed: 'computeShowOpenAnyway_(data.dangerType)',
                type: Boolean,
                value: false,
            },
            displayType_: {
                computed: 'computeDisplayType_(data.isInsecure, data.state,' +
                    'data.dangerType, data.safeBrowsingState,' +
                    'data.hasSafeBrowsingVerdict)',
                type: DisplayType,
                value: DisplayType.NORMAL,
            },
            improvedDownloadWarningsUx_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('improvedDownloadWarningsUX'),
            },
            useFileIcon_: Boolean,
        };
    }
    static get observers() {
        return [
            // TODO(dbeam): this gets called way more when I observe data.byExtId
            // and data.byExtName directly. Why?
            'observeControlledBy_(controlledBy_)',
            'observeDisplayType_(displayType_, isDangerous_, data.*)',
            'restoreFocusAfterCancelIfNeeded_(data)',
            'updatePauseOrResumeClass_(pauseOrResumeText_, improvedDownloadWarningsUx_)',
        ];
    }
    constructor() {
        super();
        this.mojoHandler_ = null;
        this.restoreFocusAfterCancel_ = false;
        /** Used by FocusRowMixin. */
        this.overrideCustomEquivalent = true;
    }
    ready() {
        super.ready();
        this.setAttribute('role', 'row');
        this.mojoHandler_ = BrowserProxy.getInstance().handler;
    }
    /** Overrides FocusRowMixin. */
    getCustomEquivalent(sampleElement) {
        if (sampleElement.getAttribute('focus-type') === 'cancel') {
            return this.shadowRoot.querySelector('[focus-type="retry"]');
        }
        if (sampleElement.getAttribute('focus-type') === 'retry') {
            return this.shadowRoot.querySelector('[focus-type="pauseOrResume"]');
        }
        return null;
    }
    getFileIcon() {
        return this.$['file-icon'];
    }
    getMoreActionsButton() {
        assert(this.improvedDownloadWarningsUx_);
        const button = this.shadowRoot.querySelector('#more-actions');
        assert(!!button);
        return button;
    }
    getMoreActionsMenu() {
        assert(this.improvedDownloadWarningsUx_);
        const menu = this.shadowRoot.querySelector('#more-actions-menu');
        assert(!!menu);
        return menu;
    }
    /**
     * @return A JS string of the display URL.
     */
    getDisplayUrlStr_(displayUrl) {
        return mojoString16ToString(displayUrl);
    }
    computeClass_() {
        const classes = [];
        if (this.isActive_) {
            classes.push('is-active');
        }
        if (this.isDangerous_) {
            classes.push('dangerous');
        }
        if (this.showProgress_) {
            classes.push('show-progress');
        }
        return classes.join(' ');
    }
    computeCompletelyOnDisk_() {
        return this.data.state === State.kComplete &&
            !this.data.fileExternallyRemoved;
    }
    computeShouldLinkFilename_() {
        if (this.data === undefined) {
            return false;
        }
        return this.completelyOnDisk_ &&
            this.data.dangerType !== DangerType.kDeepScannedFailed;
    }
    computeHasShowInFolderLink_() {
        if (this.data === undefined) {
            return false;
        }
        return this.data.dangerType !== DangerType.kDeepScannedFailed &&
            this.computeCompletelyOnDisk_();
    }
    computeControlledBy_() {
        if (!this.data.byExtId || !this.data.byExtName) {
            return '';
        }
        const url = `chrome://extensions/?id=${this.data.byExtId}`;
        const name = this.data.byExtName;
        return loadTimeData.getStringF('controlledByUrl', url, htmlEscape(name));
    }
    computeControlRemoveFromListAriaLabel_() {
        return loadTimeData.getStringF('controlRemoveFromListAriaLabel', this.data.fileName);
    }
    computeDate_() {
        assert(typeof this.data.hideDate === 'boolean');
        if (this.data.hideDate) {
            return '';
        }
        return this.data.sinceString || this.data.dateString;
    }
    computeDescriptionVisible_() {
        return this.computeDescription_() !== '';
    }
    computeSecondLineVisible_() {
        return this.data && this.data.state === State.kAsyncScanning;
    }
    computeDisplayType_() {
        // Most downloads are normal. If we don't have data, don't assume danger.
        if (!this.data) {
            return DisplayType.NORMAL;
        }
        if (this.data.isInsecure || this.data.state === State.kInsecure) {
            return DisplayType.INSECURE;
        }
        if (this.data.state === State.kAsyncScanning ||
            this.data.state === State.kPromptForScanning ||
            this.data.state === State.kPromptForLocalPasswordScanning) {
            return DisplayType.SUSPICIOUS;
        }
        // Enterprise AP verdicts.
        if ((loadTimeData.getBoolean('requestsApVerdicts') &&
            this.data.dangerType === DangerType.kUncommonContent) ||
            this.data.dangerType === DangerType.kSensitiveContentWarning) {
            return DisplayType.SUSPICIOUS;
        }
        switch (this.data.dangerType) {
            // Mimics logic in download_ui_model.cc for downloads with danger_type
            // DOWNLOAD_DANGER_TYPE_DANGEROUS_FILE.
            case DangerType.kDangerousFile:
                return this.data.hasSafeBrowsingVerdict ? DisplayType.SUSPICIOUS :
                    DisplayType.UNVERIFIED;
            case DangerType.kDangerousUrl:
            case DangerType.kDangerousContent:
            case DangerType.kDangerousHost:
            case DangerType.kPotentiallyUnwanted:
            case DangerType.kDeepScannedOpenedDangerous:
                return DisplayType.DANGEROUS;
            case DangerType.kUncommonContent:
            case DangerType.kDeepScannedFailed:
                return DisplayType.SUSPICIOUS;
            case DangerType.kSensitiveContentBlock:
            case DangerType.kBlockedTooLarge:
            case DangerType.kBlockedPasswordProtected:
                return DisplayType.ERROR;
        }
        return DisplayType.NORMAL;
    }
    computeDeepScanControlText_() {
        if (this.data.state === State.kPromptForScanning) {
            return loadTimeData.getString('controlDeepScan');
        }
        else if (this.data.state === State.kPromptForLocalPasswordScanning) {
            return loadTimeData.getString('controlLocalPasswordScan');
        }
        return '';
    }
    computeSaveDangerousLabel_() {
        switch (this.displayType_) {
            case DisplayType.DANGEROUS:
                return this.i18n('controlKeepDangerous');
            case DisplayType.SUSPICIOUS:
                return this.i18n('controlKeepSuspicious');
            case DisplayType.UNVERIFIED:
                return this.i18n('controlKeepUnverified');
            case DisplayType.INSECURE:
                return this.i18n('controlKeepInsecure');
        }
        return '';
    }
    computeDescription_() {
        if (!this.data) {
            return '';
        }
        const data = this.data;
        switch (data.state) {
            case State.kComplete:
                switch (data.dangerType) {
                    case DangerType.kDeepScannedSafe:
                        return '';
                    case DangerType.kDeepScannedOpenedDangerous:
                        return loadTimeData.getString('deepScannedOpenedDangerousDesc');
                    case DangerType.kDeepScannedFailed:
                        return loadTimeData.getString('deepScannedFailedDesc');
                }
                break;
            case State.kInsecure:
                return loadTimeData.getString('insecureDownloadDesc');
            case State.kDangerous:
                switch (data.dangerType) {
                    case DangerType.kDangerousFile:
                        return data.safeBrowsingState ===
                            SafeBrowsingState.kNoSafeBrowsing ?
                            loadTimeData.getString('noSafeBrowsingDesc') :
                            loadTimeData.getString('dangerFileDesc');
                    case DangerType.kDangerousUrl:
                    case DangerType.kDangerousContent:
                    case DangerType.kDangerousHost:
                        return loadTimeData.getString('dangerDownloadDesc');
                    case DangerType.kUncommonContent:
                        return loadTimeData.getString('dangerUncommonDesc');
                    case DangerType.kPotentiallyUnwanted:
                        return loadTimeData.getString('dangerSettingsDesc');
                    case DangerType.kSensitiveContentWarning:
                        return loadTimeData.getString('sensitiveContentWarningDesc');
                }
                break;
            case State.kAsyncScanning:
                return loadTimeData.getString('asyncScanningDownloadDesc');
            case State.kPromptForScanning:
                return loadTimeData.getString('promptForScanningDesc');
            case State.kPromptForLocalPasswordScanning:
                return loadTimeData.getString('promptForLocalPasswordScanningDesc');
            case State.kInProgress:
            case State.kPaused: // Fallthrough.
                return data.progressStatusText;
            case State.kInterrupted:
                switch (data.dangerType) {
                    case DangerType.kSensitiveContentBlock:
                        return loadTimeData.getString('sensitiveContentBlockedDesc');
                    case DangerType.kBlockedTooLarge:
                        return loadTimeData.getString('blockedTooLargeDesc');
                    case DangerType.kBlockedPasswordProtected:
                        return loadTimeData.getString('blockedPasswordProtectedDesc');
                }
        }
        return '';
    }
    computeIconAriaHidden_() {
        return (this.iconAriaLabel_ === '').toString();
    }
    computeIconAriaLabel_() {
        if (this.improvedDownloadWarningsUx_) {
            switch (this.displayType_) {
                case DisplayType.DANGEROUS:
                    return this.i18n('accessibleLabelDangerous');
                case DisplayType.INSECURE:
                    return this.i18n('accessibleLabelInsecure');
                case DisplayType.UNVERIFIED:
                    return this.i18n('accessibleLabelUnverified');
                case DisplayType.SUSPICIOUS:
                    return this.i18n('accessibleLabelSuspicious');
            }
        }
        return '';
    }
    iconAndDescriptionColor_() {
        if (this.improvedDownloadWarningsUx_) {
            switch (this.displayType_) {
                case DisplayType.DANGEROUS:
                case DisplayType.ERROR:
                    return 'red';
                case DisplayType.INSECURE:
                case DisplayType.UNVERIFIED:
                case DisplayType.SUSPICIOUS:
                    return 'grey';
            }
        }
        return '';
    }
    computeIcon_() {
        if (this.data) {
            if (this.improvedDownloadWarningsUx_) {
                switch (this.displayType_) {
                    case DisplayType.DANGEROUS:
                        return 'downloads:dangerous';
                    case DisplayType.INSECURE:
                    case DisplayType.UNVERIFIED:
                    case DisplayType.SUSPICIOUS:
                        return 'cr:warning';
                    case DisplayType.ERROR:
                        return 'cr:error';
                }
            }
            const dangerType = this.data.dangerType;
            if ((loadTimeData.getBoolean('requestsApVerdicts') &&
                dangerType === DangerType.kUncommonContent) ||
                dangerType === DangerType.kSensitiveContentWarning) {
                return 'cr:warning';
            }
            if (dangerType === DangerType.kDeepScannedFailed) {
                return 'cr:info';
            }
            const ERROR_TYPES = [
                DangerType.kSensitiveContentBlock,
                DangerType.kBlockedTooLarge,
                DangerType.kBlockedPasswordProtected,
            ];
            if (ERROR_TYPES.includes(dangerType)) {
                return 'cr:error';
            }
            if (this.data.state === State.kAsyncScanning ||
                this.data.state === State.kPromptForScanning ||
                this.data.state === State.kPromptForLocalPasswordScanning) {
                return 'cr:warning';
            }
        }
        if (this.isDangerous_) {
            return this.improvedDownloadWarningsUx_ ? 'downloads:dangerous' :
                'cr:error';
        }
        if (!this.useFileIcon_) {
            return 'cr:insert-drive-file';
        }
        return '';
    }
    computeIconColor_() {
        if (this.data) {
            if (this.improvedDownloadWarningsUx_) {
                return this.iconAndDescriptionColor_();
            }
            const dangerType = this.data.dangerType;
            if ((loadTimeData.getBoolean('requestsApVerdicts') &&
                dangerType === DangerType.kUncommonContent) ||
                dangerType === DangerType.kSensitiveContentWarning ||
                dangerType === DangerType.kDeepScannedFailed) {
                return 'yellow';
            }
            const WARNING_TYPES = [
                DangerType.kSensitiveContentBlock,
                DangerType.kBlockedTooLarge,
                DangerType.kBlockedPasswordProtected,
            ];
            if (WARNING_TYPES.includes(dangerType)) {
                return 'red';
            }
            if (this.data.state === State.kAsyncScanning ||
                this.data.state === State.kPromptForScanning ||
                this.data.state === State.kPromptForLocalPasswordScanning) {
                return 'yellow';
            }
        }
        if (this.isDangerous_) {
            return 'red';
        }
        if (!this.useFileIcon_) {
            return 'light-grey';
        }
        return '';
    }
    computeIsActive_() {
        return this.data.state !== State.kCancelled &&
            this.data.state !== State.kInterrupted &&
            !this.data.fileExternallyRemoved;
    }
    computeIsDangerous_() {
        return this.data.state === State.kDangerous ||
            this.data.state === State.kInsecure;
    }
    computeIsInProgress_() {
        return this.data.state === State.kInProgress;
    }
    computeIsMalware_() {
        return this.isDangerous_ &&
            (this.data.dangerType === DangerType.kDangerousContent ||
                this.data.dangerType === DangerType.kDangerousHost ||
                this.data.dangerType === DangerType.kDangerousUrl ||
                this.data.dangerType === DangerType.kPotentiallyUnwanted);
    }
    computeIsReviewable_() {
        return this.data.isReviewable;
    }
    toggleButtonClass_() {
        this.shadowRoot.querySelector('#pauseOrResume').classList.toggle('action-button', this.pauseOrResumeText_ === loadTimeData.getString('controlResume'));
    }
    updatePauseOrResumeClass_() {
        if (!this.pauseOrResumeText_ || this.improvedDownloadWarningsUx_) {
            return;
        }
        // Wait for dom-if to switch to true, in case the text has just changed
        // from empty.
        beforeNextRender(this, () => this.toggleButtonClass_());
    }
    computePauseOrResumeText_() {
        if (this.data === undefined) {
            return '';
        }
        if (this.isInProgress_) {
            return loadTimeData.getString('controlPause');
        }
        if (this.data.resume) {
            return loadTimeData.getString('controlResume');
        }
        return '';
    }
    computeShowRemove_() {
        const canDelete = loadTimeData.getBoolean('allowDeletingHistory');
        const hideRemove = this.isDangerous_ || this.showCancel_ || !canDelete;
        return !hideRemove;
    }
    computeRemoveStyle_() {
        return this.computeShowRemove_() ? '' : 'visibility: hidden';
    }
    computeShowControlsForDangerous_() {
        return !this.isReviewable_ && this.isDangerous_;
    }
    computeShowButtonsForDangerous_() {
        return !this.improvedDownloadWarningsUx_ && this.isDangerous_;
    }
    computeShowCancel_() {
        return !!this.data &&
            (this.data.state === State.kInProgress ||
                this.data.state === State.kPaused);
    }
    computeShowProgress_() {
        if (this.data && this.data.state === State.kAsyncScanning) {
            return true;
        }
        return this.showCancel_ && this.data.percent >= -1 &&
            this.data.state !== State.kPromptForScanning &&
            this.data.state !== State.kPromptForLocalPasswordScanning;
    }
    computeShowDeepScan_() {
        return this.data.state === State.kPromptForScanning ||
            this.data.state === State.kPromptForLocalPasswordScanning;
    }
    computeShowOpenAnyway_() {
        return this.data.dangerType === DangerType.kDeepScannedFailed;
    }
    computeTag_() {
        switch (this.data.state) {
            case State.kCancelled:
                return loadTimeData.getString('statusCancelled');
            case State.kInterrupted:
                return this.data.lastReasonText;
            case State.kComplete:
                return this.data.fileExternallyRemoved ?
                    loadTimeData.getString('statusRemoved') :
                    '';
        }
        return '';
    }
    isIndeterminate_() {
        return this.data.state === State.kAsyncScanning || this.data.percent === -1;
    }
    observeControlledBy_() {
        this.$['controlled-by'].innerHTML = sanitizeInnerHtml(this.controlledBy_);
        if (this.controlledBy_) {
            const link = this.shadowRoot.querySelector('#controlled-by a');
            link.setAttribute('focus-row-control', '');
            link.setAttribute('focus-type', 'controlledBy');
        }
    }
    observeDisplayType_() {
        const removeFileUrlLinks = () => {
            this.$.url.removeAttribute('href');
            this.$['file-link'].removeAttribute('href');
        };
        if (!this.data) {
            return;
        }
        // Returns whether to use the file icon, and additionally clears file url
        // links if necessary.
        const mayUseFileIcon = () => {
            if (this.improvedDownloadWarningsUx_) {
                const use = this.displayType_ === DisplayType.NORMAL;
                if (!use) {
                    removeFileUrlLinks();
                }
                return use;
            }
            // Handle various dangerous cases.
            const OVERRIDDEN_ICON_TYPES = [
                DangerType.kSensitiveContentBlock,
                DangerType.kBlockedTooLarge,
                DangerType.kBlockedPasswordProtected,
                DangerType.kDeepScannedFailed,
            ];
            if (this.isDangerous_) {
                removeFileUrlLinks();
                return false;
            }
            if (OVERRIDDEN_ICON_TYPES.includes(this.data.dangerType)) {
                return false;
            }
            if (this.data.state === State.kAsyncScanning ||
                this.data.state === State.kPromptForScanning ||
                this.data.state === State.kPromptForLocalPasswordScanning) {
                return false;
            }
            return true;
        };
        this.useFileIcon_ = mayUseFileIcon();
        if (!this.useFileIcon_) {
            return;
        }
        // The file is not dangerous. Link the url if supplied.
        if (this.data.url) {
            this.$.url.href = this.data.url.url;
        }
        else {
            removeFileUrlLinks();
        }
        const path = this.data.filePath;
        IconLoaderImpl.getInstance()
            .loadIcon(this.$['file-icon'], path)
            .then(success => {
            if (path === this.data.filePath &&
                this.data.state !== State.kAsyncScanning) {
                // Check again if we may use the file icon, to avoid a race between
                // loading the icon and determining the proper danger type.
                this.useFileIcon_ = mayUseFileIcon() && success;
            }
        });
    }
    onMoreActionsClick_() {
        assert(this.improvedDownloadWarningsUx_);
        this.getMoreActionsMenu().showAt(this.getMoreActionsButton());
    }
    onCancelClick_() {
        this.restoreFocusAfterCancel_ = true;
        this.mojoHandler_.cancel(this.data.id);
        if (this.improvedDownloadWarningsUx_) {
            this.getMoreActionsMenu().close();
        }
    }
    onDiscardDangerousClick_() {
        this.mojoHandler_.discardDangerous(this.data.id);
        if (this.improvedDownloadWarningsUx_) {
            this.getMoreActionsMenu().close();
        }
    }
    onOpenNowClick_() {
        this.mojoHandler_.openDuringScanningRequiringGesture(this.data.id);
        if (this.improvedDownloadWarningsUx_) {
            this.getMoreActionsMenu().close();
        }
    }
    onDeepScanClick_() {
        this.mojoHandler_.deepScan(this.data.id);
        if (this.improvedDownloadWarningsUx_) {
            this.getMoreActionsMenu().close();
        }
    }
    onBypassDeepScanClick_() {
        this.mojoHandler_.bypassDeepScanRequiringGesture(this.data.id);
        if (this.improvedDownloadWarningsUx_) {
            this.getMoreActionsMenu().close();
        }
    }
    onReviewDangerousClick_() {
        this.mojoHandler_.reviewDangerousRequiringGesture(this.data.id);
        if (this.improvedDownloadWarningsUx_) {
            this.getMoreActionsMenu().close();
        }
    }
    onOpenAnywayClick_() {
        this.mojoHandler_.openFileRequiringGesture(this.data.id);
        if (this.improvedDownloadWarningsUx_) {
            this.getMoreActionsMenu().close();
        }
    }
    onDragStart_(e) {
        e.preventDefault();
        this.mojoHandler_.drag(this.data.id);
    }
    onFileLinkClick_(e) {
        e.preventDefault();
        this.mojoHandler_.openFileRequiringGesture(this.data.id);
    }
    onUrlClick_() {
        if (!this.data.url) {
            return;
        }
        chrome.send('metricsHandler:recordAction', ['Downloads_OpenUrlOfDownloadedItem']);
    }
    onPauseOrResumeClick_() {
        if (this.isInProgress_) {
            this.mojoHandler_.pause(this.data.id);
        }
        else {
            this.mojoHandler_.resume(this.data.id);
        }
        if (this.improvedDownloadWarningsUx_) {
            this.getMoreActionsMenu().close();
        }
    }
    onRemoveClick_(e) {
        this.mojoHandler_.remove(this.data.id);
        const pieces = loadTimeData.getSubstitutedStringPieces(loadTimeData.getString('toastRemovedFromList'), this.data.fileName);
        pieces.forEach(p => {
            // Make the file name collapsible.
            p.collapsible = !!p.arg;
        });
        const canUndo = !this.data.isDangerous && !this.data.isInsecure;
        getToastManager().showForStringPieces(pieces, /* hideSlotted= */ !canUndo);
        // Stop propagating a click to the document to remove toast.
        e.stopPropagation();
        e.preventDefault();
        if (this.improvedDownloadWarningsUx_) {
            this.getMoreActionsMenu().close();
        }
    }
    onRetryClick_() {
        this.mojoHandler_.retryDownload(this.data.id);
        if (this.improvedDownloadWarningsUx_) {
            this.getMoreActionsMenu().close();
        }
    }
    notifySaveDangerousClick_() {
        this.dispatchEvent(new CustomEvent('save-dangerous-click', {
            bubbles: true,
            composed: true,
            detail: { id: this.data.id },
        }));
    }
    onSaveDangerousClick_() {
        if (!this.improvedDownloadWarningsUx_) {
            // TODO(chlily): Clean up old paths that show the DownloadDangerPrompt.
            assert(!!this.mojoHandler_);
            this.mojoHandler_.saveDangerousRequiringGesture(this.data.id);
            return;
        }
        this.getMoreActionsMenu().close();
        if (this.displayType_ === DisplayType.DANGEROUS) {
            this.notifySaveDangerousClick_();
            return;
        }
        // "Suspicious" types which show up in grey can be validated directly.
        const SAVED_FROM_PAGE_TYPES = [
            DisplayType.SUSPICIOUS,
            DisplayType.UNVERIFIED,
            DisplayType.INSECURE,
        ];
        assert(SAVED_FROM_PAGE_TYPES.includes(this.displayType_));
        assert(!!this.mojoHandler_);
        this.mojoHandler_.saveSuspiciousRequiringGesture(this.data.id);
    }
    onShowClick_() {
        this.mojoHandler_.show(this.data.id);
        if (this.improvedDownloadWarningsUx_) {
            this.getMoreActionsMenu().close();
        }
    }
    restoreFocusAfterCancelIfNeeded_() {
        if (!this.restoreFocusAfterCancel_) {
            return;
        }
        this.restoreFocusAfterCancel_ = false;
        setTimeout(() => {
            const element = this.getFocusRow().getFirstFocusable('retry');
            if (element) {
                element.focus();
            }
        });
    }
}
customElements.define(DownloadsItemElement.is, DownloadsItemElement);

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
    <style include="cr-hidden-style cr-icons">
:host,html{--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host,html{--scrollable-border-color:var(--google-grey-700)}}[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);
styleMod$1.register('cr-shared-style');

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

function getTemplate$5() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style cr-icons">:host{display:block;height:40px;transition:background-color 150ms cubic-bezier(.4,0,.2,1),width 150ms cubic-bezier(.4,0,.2,1);width:44px}:host-context([chrome-refresh-2023]):host{--cr-toolbar-search-field-hover-background:var(--color-toolbar-search-field-background-hover,
                var(--cr-hover-background-color)) isolation: isolate}:host([disabled]){opacity:var(--cr-disabled-opacity)}[hidden]{display:none!important}cr-icon-button{--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 32px);margin:var(--cr-toolbar-icon-margin,6px)}:host-context([chrome-refresh-2023]) cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-icon-color,
            var(--color-toolbar-search-field-icon,
            var(--cr-secondary-text-color)));--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 28px);--cr-icon-button-icon-size:20px;margin:var(--cr-toolbar-icon-margin,0)}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:var(
              --cr-toolbar-search-field-input-icon-color,
              var(--google-grey-700));--cr-icon-button-focus-outline-color:var(
              --cr-toolbar-icon-button-focus-outline-color,
              var(--cr-focus-outline-color))}}@media (prefers-color-scheme:dark){cr-icon-button{--cr-icon-button-fill-color:var(
              --cr-toolbar-search-field-input-icon-color,
              var(--google-grey-500))}}#icon{transition:margin 150ms,opacity .2s}#prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--google-grey-700));opacity:0}@media (prefers-color-scheme:dark){#prompt{color:var(--cr-toolbar-search-field-prompt-color,#fff)}}@media (prefers-color-scheme:dark){#prompt{--cr-toolbar-search-field-prompt-opacity:1;color:var(--cr-secondary-text-color,#fff)}}:host-context([chrome-refresh-2023]) #prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--color-toolbar-search-field-foreground-placeholder,var(--cr-secondary-text-color)))}paper-spinner-lite{--paper-spinner-color:var(--cr-toolbar-search-field-input-icon-color,
                var(--google-grey-700));height:var(--cr-icon-size);margin:var(--cr-toolbar-search-field-paper-spinner-margin,0 6px);opacity:0;padding:6px;position:absolute;width:var(--cr-icon-size)}@media (prefers-color-scheme:dark){paper-spinner-lite{--paper-spinner-color:var(
              --cr-toolbar-search-field-input-icon-color, white)}}:host-context([chrome-refresh-2023]) paper-spinner-lite{margin:0;padding:2px}paper-spinner-lite[active]{opacity:1}#prompt,paper-spinner-lite{transition:opacity .2s}#searchTerm{-webkit-font-smoothing:antialiased;flex:1;line-height:185%;margin:var(--cr-toolbar-search-field-term-margin,0 2px);position:relative}:host-context([chrome-refresh-2023]) #searchTerm{font-size:12px;font-weight:500;margin:var(--cr-toolbar-search-field-term-margin,0)}label{bottom:0;cursor:var(--cr-toolbar-search-field-cursor,text);left:0;overflow:hidden;position:absolute;right:0;top:0;white-space:nowrap}:host([has-search-text]) label{visibility:hidden}input{-webkit-appearance:none;background:0 0;border:none;caret-color:var(--cr-toolbar-search-field-input-caret-color,var(--google-blue-700));color:var(--cr-toolbar-search-field-input-text-color,var(--google-grey-900));cursor:var(--cr-toolbar-search-field-cursor,text);font:inherit;outline:0;padding:0;position:relative;width:100%}@media (prefers-color-scheme:dark){input{color:var(--cr-toolbar-search-field-input-text-color,#fff)}}:host-context([chrome-refresh-2023]) input{caret-color:var(--cr-toolbar-serch-field-input-caret-color,currentColor);color:var(--cr-toolbar-search-field-input-text-color,var(--color-toolbar-search-field-foreground,var(--cr-fallback-color-on-surface)));font-size:12px;font-weight:500}input[type=search]::-webkit-search-cancel-button{display:none}:host([narrow]){border-radius:var(--cr-toolbar-search-field-border-radius,0)}:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,var(--google-grey-100));border-radius:var(--cr-toolbar-search-field-border-radius,46px);cursor:var(--cr-toolbar-search-field-cursor,text);max-width:var(--cr-toolbar-field-max-width,none);padding-inline-end:0;width:var(--cr-toolbar-field-width,680px)}@media (prefers-color-scheme:dark){:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,rgba(0,0,0,.22))}}:host-context([chrome-refresh-2023]):host(:not([narrow])){--cr-toolbar-search-field-border-radius:100px;background:0 0;height:36px;overflow:hidden;padding:0 6px;position:relative}#background,#stateBackground{display:none}:host-context([chrome-refresh-2023]):host(:not([narrow])) #background{background:var(--cr-toolbar-search-field-background,var(--color-toolbar-search-field-background,var(--cr-fallback-color-base-container)));border-radius:inherit;display:block;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host([search-focused_]:not([narrow])){outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host-context([chrome-refresh-2023]):host(:not([narrow])) #stateBackground{display:block;inset:0;pointer-events:none;position:absolute}:host-context([chrome-refresh-2023]):host(:hover:not([search-focused_],[narrow])) #stateBackground{background:var(--cr-toolbar-search-field-hover-background);z-index:1}:host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,.7)}:host-context([chrome-refresh-2023]):host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,1)}:host(:not([narrow])) #prompt{opacity:var(--cr-toolbar-search-field-prompt-opacity,1)}:host([narrow]) #prompt{opacity:var(--cr-toolbar-search-field-narrow-mode-prompt-opacity,0)}:host([narrow]:not([showing-search])) #searchTerm{display:none}:host([showing-search][spinner-active]) #icon{opacity:0}:host([narrow][showing-search]){width:100%}:host([narrow][showing-search]) #icon,:host([narrow][showing-search]) paper-spinner-lite{margin-inline-start:var(--cr-toolbar-search-icon-margin-inline-start,18px)}#content{align-items:center;display:flex;height:100%}:host-context([chrome-refresh-2023]) #content{position:relative;z-index:2}</style>
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
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrToolbarSearchFieldElementBase = CrSearchFieldMixin(PolymerElement);
class CrToolbarSearchFieldElement extends CrToolbarSearchFieldElementBase {
    static get is() {
        return 'cr-toolbar-search-field';
    }
    static get template() {
        return getTemplate$5();
    }
    static get properties() {
        return {
            narrow: {
                type: Boolean,
                reflectToAttribute: true,
            },
            showingSearch: {
                type: Boolean,
                value: false,
                notify: true,
                observer: 'showingSearchChanged_',
                reflectToAttribute: true,
            },
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            // When true, show a loading spinner to indicate that the backend is
            // processing the search. Will only show if the search field is open.
            spinnerActive: { type: Boolean, reflectToAttribute: true },
            isSpinnerShown_: {
                type: Boolean,
                computed: 'computeIsSpinnerShown_(spinnerActive, showingSearch)',
            },
            searchFocused_: { reflectToAttribute: true, type: Boolean, value: false },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('click', e => this.showSearch_(e));
    }
    getSearchInput() {
        return this.$.searchInput;
    }
    isSearchFocused() {
        return this.searchFocused_;
    }
    showAndFocus() {
        this.showingSearch = true;
        this.focus_();
    }
    onSearchTermInput() {
        super.onSearchTermInput();
        this.showingSearch = this.hasSearchText || this.isSearchFocused();
    }
    onSearchIconClicked_() {
        this.dispatchEvent(new CustomEvent('search-icon-clicked', { bubbles: true, composed: true }));
    }
    focus_() {
        this.getSearchInput().focus();
    }
    computeIconTabIndex_(narrow) {
        return narrow && !this.hasSearchText ? 0 : -1;
    }
    computeIconAriaHidden_(narrow) {
        return Boolean(!narrow || this.hasSearchText).toString();
    }
    computeIsSpinnerShown_() {
        const showSpinner = this.spinnerActive && this.showingSearch;
        if (showSpinner) {
            this.$.spinnerTemplate.if = true;
        }
        return showSpinner;
    }
    onInputFocus_() {
        this.searchFocused_ = true;
    }
    onInputBlur_() {
        this.searchFocused_ = false;
        if (!this.hasSearchText) {
            this.showingSearch = false;
        }
    }
    onSearchTermKeydown_(e) {
        if (e.key === 'Escape') {
            this.showingSearch = false;
        }
    }
    showSearch_(e) {
        if (e.target !== this.shadowRoot.querySelector('#clearSearch')) {
            this.showingSearch = true;
        }
    }
    clearSearch_() {
        this.setValue('');
        this.focus_();
        this.spinnerActive = false;
    }
    showingSearchChanged_(_current, previous) {
        // Prevent unnecessary 'search-changed' event from firing on startup.
        if (previous === undefined) {
            return;
        }
        if (this.showingSearch) {
            this.focus_();
            return;
        }
        this.setValue('');
        this.getSearchInput().blur();
    }
}
customElements.define(CrToolbarSearchFieldElement.is, CrToolbarSearchFieldElement);

function getTemplate$4() {
    return html `<!--_html_template_start_-->    <style include="cr-icons cr-hidden-style">:host{align-items:center;background-color:var(--cr-toolbar-background-color);color:var(--google-grey-900);display:flex;height:var(--cr-toolbar-height)}@media (prefers-color-scheme:dark){:host{border-bottom:var(--cr-separator-line);box-sizing:border-box;color:var(--cr-secondary-text-color)}:host-context([chrome-refresh-2023]):host{background-color:transparent;border-bottom:none}}h1{flex:1;font-size:170%;font-weight:var(--cr-toolbar-header-font-weight,500);letter-spacing:.25px;line-height:normal;margin-inline-start:6px;padding-inline-end:12px;white-space:var(--cr-toolbar-header-white-space,normal)}@media (prefers-color-scheme:dark){h1{color:var(--cr-primary-text-color)}}#leftContent{position:relative;transition:opacity .1s}#leftSpacer{align-items:center;box-sizing:border-box;display:flex;padding-inline-start:calc(12px + 6px);width:var(--cr-toolbar-left-spacer-width,auto)}cr-icon-button{--cr-icon-button-size:32px;min-width:32px}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-focus-outline-color:var(--cr-focus-outline-color)}}#centeredContent{display:flex;flex:1 1 0;justify-content:center}#rightSpacer{padding-inline-end:12px}:host([narrow]) #centeredContent{justify-content:flex-end}:host([has-overlay]){transition:visibility var(--cr-toolbar-overlay-animation-duration);visibility:hidden}:host([narrow][showing-search_]) #leftContent{opacity:0;position:absolute}:host(:not([narrow])) #leftContent{flex:1 1 var(--cr-toolbar-field-margin,0)}:host(:not([narrow])) #centeredContent{flex-basis:var(--cr-toolbar-center-basis,0)}:host(:not([narrow])[disable-right-content-grow]) #centeredContent{justify-content:start;padding-inline-start:12px}:host(:not([narrow])) #rightContent{flex:1 1 0;text-align:end}:host(:not([narrow])[disable-right-content-grow]) #rightContent{flex:0 1 0}picture{display:none}#menuButton{margin-inline-end:9px}#menuButton~h1{margin-inline-start:0}:host(:not([narrow])) picture,:host([always-show-logo]) picture{display:initial;margin-inline-end:16px}:host(:not([narrow])) #leftSpacer,:host([always-show-logo]) #leftSpacer{padding-inline-start:calc(12px + 9px)}:host(:not([narrow])) :is(picture,#product-logo),:host([always-show-logo]) :is(picture,#product-logo){height:24px;width:24px}</style>
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
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrToolbarElement extends PolymerElement {
    static get is() {
        return 'cr-toolbar';
    }
    static get template() {
        return getTemplate$4();
    }
    static get properties() {
        return {
            // Name to display in the toolbar, in titlecase.
            pageName: String,
            // Prompt text to display in the search field.
            searchPrompt: String,
            // Tooltip to display on the clear search button.
            clearLabel: String,
            // Tooltip to display on the menu button.
            menuLabel: String,
            // Value is proxied through to cr-toolbar-search-field. When true,
            // the search field will show a processing spinner.
            spinnerActive: Boolean,
            // Controls whether the menu button is shown at the start of the menu.
            showMenu: { type: Boolean, value: false },
            // Controls whether the search field is shown.
            showSearch: { type: Boolean, value: true },
            // Controls whether the search field is autofocused.
            autofocus: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            // True when the toolbar is displaying in narrow mode.
            narrow: {
                type: Boolean,
                reflectToAttribute: true,
                readonly: true,
                notify: true,
            },
            /**
             * The threshold at which the toolbar will change from normal to narrow
             * mode, in px.
             */
            narrowThreshold: {
                type: Number,
                value: 900,
            },
            alwaysShowLogo: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            showingSearch_: {
                type: Boolean,
                reflectToAttribute: true,
            },
        };
    }
    getSearchField() {
        return this.$.search;
    }
    onMenuClick_() {
        this.dispatchEvent(new CustomEvent('cr-toolbar-menu-click', { bubbles: true, composed: true }));
    }
    focusMenuButton() {
        requestAnimationFrame(() => {
            // Wait for next animation frame in case dom-if has not applied yet and
            // added the menu button.
            const menuButton = this.shadowRoot.querySelector('#menuButton');
            if (menuButton) {
                menuButton.focus();
            }
        });
    }
    isMenuFocused() {
        return !!this.shadowRoot.activeElement &&
            this.shadowRoot.activeElement.id === 'menuButton';
    }
}
customElements.define(CrToolbarElement.is, CrToolbarElement);

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SearchService {
    constructor() {
        this.searchTerms_ = [];
        this.mojoHandler_ = BrowserProxy.getInstance().handler;
    }
    /**
     * @param searchText Input typed by the user into a search box.
     * @return A list of terms extracted from |searchText|.
     */
    static splitTerms(searchText) {
        // Split quoted terms (e.g., 'The "lazy" dog' => ['The', 'lazy', 'dog']).
        return searchText.split(/"([^"]*)"/).map(s => s.trim()).filter(s => !!s);
    }
    /** Instructs the browser to clear all finished downloads. */
    clearAll() {
        if (loadTimeData.getBoolean('allowDeletingHistory')) {
            this.mojoHandler_.clearAll();
            this.search('');
        }
    }
    /** Loads more downloads with the current search terms. */
    loadMore() {
        this.mojoHandler_.getDownloads(this.searchTerms_);
    }
    /**
     * @return Whether the user is currently searching for downloads
     *     (i.e. has a non-empty search term).
     */
    isSearching() {
        return this.searchTerms_.length > 0;
    }
    /**
     * @param searchText What to search for.
     * @return Whether |searchText| resulted in new search terms.
     */
    search(searchText) {
        const searchTerms = SearchService.splitTerms(searchText);
        let sameTerms = searchTerms.length === this.searchTerms_.length;
        for (let i = 0; sameTerms && i < searchTerms.length; ++i) {
            if (searchTerms[i] !== this.searchTerms_[i]) {
                sameTerms = false;
            }
        }
        if (sameTerms) {
            return false;
        }
        this.searchTerms_ = searchTerms;
        this.loadMore();
        return true;
    }
    static getInstance() {
        return instance || (instance = new SearchService());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;

function getTemplate$3() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style">:host{align-items:center;display:flex;min-height:56px}#toolbar{flex:1;min-width:0}cr-icon-button{justify-content:flex-end;margin:4px}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-focus-outline-color:var(--cr-focus-outline-color)}}</style>
<cr-toolbar id="toolbar" page-name="$i18n{title}" autofocus always-show-logo search-prompt="$i18n{search}" clear-label="$i18n{clearSearch}" spinner-active="{{spinnerActive}}" on-search-changed="onSearchChanged_">
  <cr-icon-button id="moreActions" iron-icon="cr:more-vert" class="dropdown-trigger" title="$i18n{moreActions}" on-click="onMoreActionsClick_" aria-haspopup="menu"></cr-icon-button>
</cr-toolbar>
<cr-action-menu id="moreActionsMenu" role-description="$i18n{actionMenuDescription}">
  <button class="dropdown-item clear-all" on-click="onClearAllClick_">
    $i18n{clearAll}
  </button>
  <button class="dropdown-item" on-click="onOpenDownloadsFolderClick_">
    $i18n{openDownloadsFolder}
  </button>
</cr-action-menu>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DownloadsToolbarElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.mojoHandler_ = null;
        this.hasClearableDownloads = false;
        this.items = [];
    }
    static get is() {
        return 'downloads-toolbar';
    }
    static get template() {
        return getTemplate$3();
    }
    static get properties() {
        return {
            hasClearableDownloads: {
                type: Boolean,
                observer: 'updateClearAll_',
            },
            items: Array,
            spinnerActive: {
                type: Boolean,
                notify: true,
            },
        };
    }
    /** @override */
    ready() {
        super.ready();
        this.mojoHandler_ = BrowserProxy.getInstance().handler;
    }
    /** @return Whether removal can be undone. */
    canUndo() {
        return !this.isSearchFocused();
    }
    /** @return Whether "Clear all" should be allowed. */
    canClearAll() {
        return this.getSearchText().length === 0 && this.hasClearableDownloads;
    }
    /** @return The full text being searched. */
    getSearchText() {
        return this.$.toolbar.getSearchField().getValue();
    }
    focusOnSearchInput() {
        this.$.toolbar.getSearchField().showAndFocus();
    }
    isSearchFocused() {
        return this.$.toolbar.getSearchField().isSearchFocused();
    }
    onClearAllClick_(e) {
        assert(this.canClearAll());
        this.mojoHandler_.clearAll();
        this.$.moreActionsMenu.close();
        const canUndo = this.items.some(data => !data.isDangerous && !data.isInsecure);
        getToastManager().show(loadTimeData.getString('toastClearedAll'), 
        /* hideSlotted= */ !canUndo);
        // Stop propagating a click to the document to remove toast.
        e.stopPropagation();
        e.preventDefault();
    }
    onMoreActionsClick_() {
        this.$.moreActionsMenu.showAt(this.$.moreActions);
    }
    onSearchChanged_(event) {
        const searchService = SearchService.getInstance();
        if (searchService.search(event.detail)) {
            this.spinnerActive = searchService.isSearching();
        }
        this.updateClearAll_();
    }
    onOpenDownloadsFolderClick_() {
        this.mojoHandler_.openDownloadsFolderRequiringGesture();
        this.$.moreActionsMenu.close();
    }
    updateClearAll_() {
        this.shadowRoot.querySelector('.clear-all').hidden =
            !this.canClearAll();
    }
}
customElements.define(DownloadsToolbarElement.is, DownloadsToolbarElement);

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

function getTemplate$2() {
    return html `<!--_html_template_start_-->    <style>:host{align-items:center;border-top:1px solid var(--cr-separator-color);color:var(--cr-secondary-text-color);display:none;font-size:.8125rem;justify-content:center;padding:0 24px}:host([is-managed_]){display:flex}a[href]{color:var(--cr-link-color)}iron-icon{align-self:flex-start;flex-shrink:0;height:20px;padding-inline-end:var(--managed-footnote-icon-padding,8px);width:20px}</style>

    <template is="dom-if" if="[[isManaged_]]">
      <iron-icon icon="[[managedByIcon_]]"></iron-icon>
      <div id="content" inner-h-t-m-l="[[getManagementString_(showDeviceInfo)]]">
      </div>
    </template>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for indicating that this user is managed by
 * their organization. This component uses the |isManaged| boolean in
 * loadTimeData, and the |managedByOrg| i18n string.
 *
 * If |isManaged| is false, this component is hidden. If |isManaged| is true, it
 * becomes visible.
 */
const ManagedFootnoteElementBase = I18nMixin(WebUiListenerMixin(PolymerElement));
class ManagedFootnoteElement extends ManagedFootnoteElementBase {
    static get is() {
        return 'managed-footnote';
    }
    static get template() {
        return getTemplate$2();
    }
    static get properties() {
        return {
            /**
             * Whether the user is managed by their organization through enterprise
             * policies.
             */
            isManaged_: {
                reflectToAttribute: true,
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isManaged');
                },
            },
            /**
             * Whether the device should be indicated as managed rather than the
             * browser.
             */
            showDeviceInfo: {
                type: Boolean,
                value: false,
            },
            /**
             * The name of the icon to display in the footer.
             * Should only be read if isManaged_ is true.
             */
            managedByIcon_: {
                reflectToAttribute: true,
                type: String,
                value() {
                    return loadTimeData.getString('managedByIcon');
                },
            },
        };
    }
    ready() {
        super.ready();
        this.addWebUiListener('is-managed-changed', (managed) => {
            loadTimeData.overrideValues({ isManaged: managed });
            this.isManaged_ = managed;
        });
    }
    /** @return Message to display to the user. */
    getManagementString_() {
        // 
        if (this.showDeviceInfo) {
            return this.i18nAdvanced('deviceManagedByOrg');
        }
        // 
        return this.i18nAdvanced('browserManagedByOrg');
    }
}
customElements.define(ManagedFootnoteElement.is, ManagedFootnoteElement);
chrome.send('observeManagedUI');

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
:host{color:var(--cr-primary-text-color);line-height:154%;overflow:hidden;user-select:text}
    </style>
  </template>
`.content);
styleMod.register('cr-page-host-style');

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
    if (matches(this.as, prop)) {
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

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Base class for Web Components that don't use Polymer.
 * See the following file for usage:
 * chrome/test/data/webui/js/custom_element_test.js
 */
function emptyHTML() {
    return window.trustedTypes ? window.trustedTypes.emptyHTML : '';
}
class CustomElement extends HTMLElement {
    static get template() {
        return emptyHTML();
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML =
            this.constructor.template || emptyHTML();
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    $(query) {
        return this.shadowRoot.querySelector(query);
    }
    $all(query) {
        return this.shadowRoot.querySelectorAll(query);
    }
    getRequiredElement(query) {
        const el = this.shadowRoot.querySelector(query);
        assert(el);
        assert(el instanceof HTMLElement);
        return el;
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @return Whether the passed tagged template literal is a valid array.
 */
function isValidArray(arr) {
    if (arr instanceof Array && Object.isFrozen(arr)) {
        return true;
    }
    return false;
}
/**
 * Checks if the passed tagged template literal only contains static string.
 * And return the string in the literal if so.
 * Throws an Error if the passed argument is not supported literals.
 */
function getStaticString(literal) {
    const isStaticString = isValidArray(literal) && !!literal.raw &&
        isValidArray(literal.raw) && literal.length === literal.raw.length &&
        literal.length === 1;
    assert(isStaticString, 'static_types.js only allows static strings');
    return literal.join('');
}
function createTypes(_ignore, literal) {
    return getStaticString(literal);
}
/**
 * Rules used to enforce static literal checks.
 */
const rules = {
    createHTML: createTypes,
    createScript: createTypes,
    createScriptURL: createTypes,
};
/**
 * This policy returns Trusted Types if the passed literal is static.
 */
let staticPolicy;
if (window.trustedTypes) {
    staticPolicy = window.trustedTypes.createPolicy('static-types', rules);
}
else {
    staticPolicy = rules;
}
/**
 * Returns TrustedHTML if the passed literal is static.
 */
function getTrustedHTML(literal) {
    return staticPolicy.createHTML('', literal);
}

function getTemplate$1() {
    return getTrustedHTML `<!--_html_template_start_--><style>:host{clip:rect(0 0 0 0);height:1px;overflow:hidden;position:fixed;width:1px}</style>

<div id="messages" role="alert" aria-live="polite" aria-relevant="additions">
</div>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * 150ms seems to be around the minimum time required for screen readers to
 * read out consecutively queued messages.
 */
const TIMEOUT_MS = 150;
/**
 * A map of an HTML element to its corresponding CrA11yAnnouncerElement. There
 * may be multiple CrA11yAnnouncerElements on a page, especially for cases in
 * which the DocumentElement's CrA11yAnnouncerElement becomes hidden or
 * deactivated (eg. when a modal dialog causes the CrA11yAnnouncerElement to
 * become inaccessible).
 */
const instances = new Map();
function getInstance(container = document.body) {
    if (instances.has(container)) {
        return instances.get(container);
    }
    assert(container.isConnected);
    const instance = new CrA11yAnnouncerElement();
    container.appendChild(instance);
    instances.set(container, instance);
    return instance;
}
class CrA11yAnnouncerElement extends CustomElement {
    constructor() {
        super(...arguments);
        this.currentTimeout_ = null;
        this.messages_ = [];
    }
    static get is() {
        return 'cr-a11y-announcer';
    }
    static get template() {
        return getTemplate$1();
    }
    disconnectedCallback() {
        if (this.currentTimeout_ !== null) {
            clearTimeout(this.currentTimeout_);
            this.currentTimeout_ = null;
        }
        for (const [parent, instance] of instances) {
            if (instance === this) {
                instances.delete(parent);
                break;
            }
        }
    }
    announce(message) {
        if (this.currentTimeout_ !== null) {
            clearTimeout(this.currentTimeout_);
            this.currentTimeout_ = null;
        }
        this.messages_.push(message);
        this.currentTimeout_ = setTimeout(() => {
            const messagesDiv = this.shadowRoot.querySelector('#messages');
            messagesDiv.innerHTML = window.trustedTypes.emptyHTML;
            // 
            for (const message of this.messages_) {
                const div = document.createElement('div');
                div.textContent = message;
                messagesDiv.appendChild(div);
            }
            // Dispatch a custom event to allow consumers to know when certain alerts
            // have been sent to the screen reader.
            this.dispatchEvent(new CustomEvent('cr-a11y-announcer-messages-sent', { bubbles: true, detail: { messages: this.messages_.slice() } }));
            this.messages_.length = 0;
            this.currentTimeout_ = null;
        }, TIMEOUT_MS);
    }
}
customElements.define(CrA11yAnnouncerElement.is, CrA11yAnnouncerElement);

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** This is used to identify keyboard shortcuts. */
class KeyboardShortcut {
    useKeyCode_ = false;
    mods_ = {};
    key_ = null;
    keyCode_ = null;
    /**
     * @param shortcut The text used to describe the keys for this
     *     keyboard shortcut.
     */
    constructor(shortcut) {
        shortcut.split('|').forEach((part) => {
            const partLc = part.toLowerCase();
            switch (partLc) {
                case 'alt':
                case 'ctrl':
                case 'meta':
                case 'shift':
                    this.mods_[partLc + 'Key'] = true;
                    break;
                default:
                    if (this.key_) {
                        throw Error('Invalid shortcut');
                    }
                    this.key_ = part;
                    // For single key alpha shortcuts use event.keyCode rather than
                    // event.key to match how chrome handles shortcuts and allow
                    // non-english language input to work.
                    if (part.match(/^[a-z]$/)) {
                        this.useKeyCode_ = true;
                        this.keyCode_ = part.toUpperCase().charCodeAt(0);
                    }
            }
        });
    }
    /**
     * Whether the keyboard shortcut object matches a keyboard event.
     * @param e The keyboard event object.
     * @return Whether we found a match or not.
     */
    matchesEvent(e) {
        if ((this.useKeyCode_ && e.keyCode === this.keyCode_) ||
            e.key === this.key_) {
            // All keyboard modifiers need to match.
            const mods = this.mods_;
            return ['altKey', 'ctrlKey', 'metaKey', 'shiftKey'].every(function (k) {
                return e[k] === !!mods[k];
            });
        }
        return false;
    }
}
/** A list of keyboard shortcuts which all perform one command. */
class KeyboardShortcutList {
    shortcuts_;
    /**
     * @param shortcuts Text-based representation of one or more
     *     keyboard shortcuts, separated by spaces.
     */
    constructor(shortcuts) {
        this.shortcuts_ = shortcuts.split(/\s+/).map(function (shortcut) {
            return new KeyboardShortcut(shortcut);
        });
    }
    /**
     * Returns true if any of the keyboard shortcuts in the list matches a
     * keyboard event.
     */
    matchesEvent(e) {
        return this.shortcuts_.some(function (keyboardShortcut) {
            return keyboardShortcut.matchesEvent(e);
        });
    }
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Listens for a find keyboard shortcut (i.e. Ctrl/Cmd+f or /)
 * and keeps track of an stack of potential listeners. Only the listener at the
 * top of the stack will be notified that a find shortcut has been invoked.
 */
const FindShortcutManager = (() => {
    /**
     * Stack of listeners. Only the top listener will handle the shortcut.
     */
    const listeners = [];
    /**
     * Tracks if any modal context is open in settings. This assumes only one
     * modal can be open at a time. The modals that are being tracked include
     * cr-dialog and cr-drawer.
     * @type {boolean}
     */
    let modalContextOpen = false;
    const shortcutCtrlF = new KeyboardShortcutList(isMac ? 'meta|f' : 'ctrl|f');
    const shortcutSlash = new KeyboardShortcutList('/');
    window.addEventListener('keydown', e => {
        if (e.defaultPrevented || listeners.length === 0) {
            return;
        }
        const element = e.composedPath()[0];
        if (!shortcutCtrlF.matchesEvent(e) &&
            (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' ||
                !shortcutSlash.matchesEvent(e))) {
            return;
        }
        const focusIndex = listeners.findIndex(listener => listener.searchInputHasFocus());
        // If no listener has focus or the first (outer-most) listener has focus,
        // try the last (inner-most) listener.
        // If a listener has a search input with focus, the next listener that
        // should be called is the right before it in |listeners| such that the
        // goes from inner-most to outer-most.
        const index = focusIndex <= 0 ? listeners.length - 1 : focusIndex - 1;
        if (listeners[index].handleFindShortcut(modalContextOpen)) {
            e.preventDefault();
        }
    });
    window.addEventListener('cr-dialog-open', () => {
        modalContextOpen = true;
    });
    window.addEventListener('cr-drawer-opened', () => {
        modalContextOpen = true;
    });
    window.addEventListener('close', e => {
        if (['CR-DIALOG', 'CR-DRAWER'].includes(e.composedPath()[0].nodeName)) {
            modalContextOpen = false;
        }
    });
    return Object.freeze({ listeners: listeners });
})();
/**
 * Used to determine how to handle find shortcut invocations.
 */
const FindShortcutMixin = dedupingMixin((superClass) => {
    class FindShortcutMixin extends superClass {
        constructor() {
            super(...arguments);
            this.findShortcutListenOnAttach = true;
        }
        connectedCallback() {
            super.connectedCallback();
            if (this.findShortcutListenOnAttach) {
                this.becomeActiveFindShortcutListener();
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this.findShortcutListenOnAttach) {
                this.removeSelfAsFindShortcutListener();
            }
        }
        becomeActiveFindShortcutListener() {
            const listeners = FindShortcutManager.listeners;
            assert(!listeners.includes(this), 'Already listening for find shortcuts.');
            listeners.push(this);
        }
        handleFindShortcutInternal_() {
            assertNotReached('Must override handleFindShortcut()');
        }
        handleFindShortcut(_modalContextOpen) {
            this.handleFindShortcutInternal_();
            return false;
        }
        removeSelfAsFindShortcutListener() {
            const listeners = FindShortcutManager.listeners;
            const index = listeners.indexOf(this);
            assert(listeners.includes(this), 'Find shortcut listener not found.');
            listeners.splice(index, 1);
        }
        searchInputHasFocusInternal_() {
            assertNotReached('Must override searchInputHasFocus()');
        }
        searchInputHasFocus() {
            this.searchInputHasFocusInternal_();
            return false;
        }
    }
    return FindShortcutMixin;
});

function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-page-host-style cr-shared-style cr-hidden-style">:host{display:flex;flex:1 0;flex-direction:column;height:100%;overflow:hidden;z-index:0}@media (prefers-color-scheme:dark){:host{color:var(--cr-secondary-text-color)}}#toolbar{z-index:1}:host([has-shadow_]) #drop-shadow{opacity:var(--cr-container-shadow-max-opacity)}#downloadsList,downloads-item{--downloads-card-margin:24px;--downloads-card-width:clamp(550px, 80%, 680px)}#downloadsList{min-width:calc(var(--downloads-card-width) + 2 * var(--downloads-card-margin))}#downloadsList,#no-downloads{flex:1}:host([loading]) #downloadsList,:host([loading]) #no-downloads{display:none}#no-downloads{align-items:center;color:#6e6e6e;display:flex;font-size:123.1%;font-weight:500;justify-content:center;min-height:min-content}@media (prefers-color-scheme:dark){#no-downloads{color:var(--cr-secondary-text-color)}}#no-downloads .illustration{background:url(images/no_downloads.svg) no-repeat center center;background-size:contain;height:144px;margin-bottom:32px}#mainContainer{display:flex;flex:1;flex-direction:column;height:100%;overflow-y:overlay}managed-footnote{border-top:none;margin-bottom:calc(-21px - 8px);min-width:calc(var(--downloads-card-width) + 2 * var(--downloads-card-margin));padding-bottom:12px;padding-top:12px;z-index:1}</style>

<downloads-toolbar id="toolbar" items="[[items_]]" spinner-active="{{spinnerActive_}}" role="none" on-search-changed="onSearchChanged_">
</downloads-toolbar>
<div id="drop-shadow" class="cr-container-shadow"></div>
<div id="mainContainer" on-scroll="onScroll_" on-save-dangerous-click="onSaveDangerousClick_">
  <managed-footnote hidden="[[inSearchMode_]]"></managed-footnote>
  <iron-list id="downloadsList" items="[[items_]]" role="grid" aria-rowcount$="[[items_.length]]" hidden="[[!hasDownloads_]]" scroll-target="mainContainer" preserve-focus>
    <template>
      <downloads-item data="[[item]]" tabindex$="[[tabIndex]]" iron-list-tab-index="[[tabIndex]]" last-focused="{{lastFocused_}}" list-blurred="{{listBlurred_}}" focus-row-index="[[index]]">
      </downloads-item>
    </template>
  </iron-list>
  <div id="no-downloads" hidden="[[hasDownloads_]]">
    <div>
      <div class="illustration"></div>
      <span>[[noDownloadsText_(inSearchMode_)]]</span>
    </div>
  </div>
</div>
<cr-toast-manager duration="0">
  <cr-button aria-label="$i18n{undoDescription}" on-click="onUndoClick_">
    $i18n{undo}
  </cr-button>
</cr-toast-manager>
<template is="dom-if" if="[[shouldShowBypassWarningDialog_(bypassDialogItemId_)]]" restamp>
  <download-bypass-warning-confirmation-dialog file-name="[[computeBypassWarningDialogFileName_(bypassDialogItemId_)]]" on-close="onBypassWarningConfirmationDialogClose_">
  </download-bypass-warning-confirmation-dialog>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const DownloadsManagerElementBase = FindShortcutMixin(PolymerElement);
class DownloadsManagerElement extends DownloadsManagerElementBase {
    static get is() {
        return 'downloads-manager';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            hasDownloads_: {
                observer: 'hasDownloadsChanged_',
                type: Boolean,
            },
            hasShadow_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            inSearchMode_: {
                type: Boolean,
                value: false,
            },
            items_: {
                type: Array,
                value() {
                    return [];
                },
            },
            spinnerActive_: {
                type: Boolean,
                notify: true,
            },
            bypassDialogItemId_: {
                type: String,
                value: '',
            },
            lastFocused_: Object,
            listBlurred_: Boolean,
        };
    }
    static get observers() {
        return ['itemsChanged_(items_.*)'];
    }
    constructor() {
        super();
        this.announcerDebouncer_ = null;
        this.searchService_ = SearchService.getInstance();
        this.loaded_ = new PromiseResolver();
        this.eventTracker_ = new EventTracker();
        const browserProxy = BrowserProxy.getInstance();
        this.mojoEventTarget_ = browserProxy.callbackRouter;
        this.mojoHandler_ = browserProxy.handler;
        // Regular expression that captures the leading slash, the content and the
        // trailing slash in three different groups.
        const CANONICAL_PATH_REGEX = /(^\/)([\/-\w]+)(\/$)/;
        const path = location.pathname.replace(CANONICAL_PATH_REGEX, '$1$2');
        if (path !== '/') { // There are no subpages in chrome://downloads.
            window.history.replaceState(undefined /* stateObject */, '', '/');
        }
    }
    connectedCallback() {
        super.connectedCallback();
        // TODO(dbeam): this should use a class instead.
        this.toggleAttribute('loading', true);
        document.documentElement.classList.remove('loading');
        this.listenerIds_ = [
            this.mojoEventTarget_.clearAll.addListener(this.clearAll_.bind(this)),
            this.mojoEventTarget_.insertItems.addListener(this.insertItems_.bind(this)),
            this.mojoEventTarget_.removeItem.addListener(this.removeItem_.bind(this)),
            this.mojoEventTarget_.updateItem.addListener(this.updateItem_.bind(this)),
        ];
        this.eventTracker_.add(document, 'keydown', (e) => this.onKeyDown_(e));
        this.eventTracker_.add(document, 'click', () => this.onClick_());
        this.loaded_.promise.then(() => {
            requestIdleCallback(function () {
                // https://github.com/microsoft/TypeScript/issues/13569
                document.fonts.load('bold 12px Roboto');
            });
        });
        this.searchService_.loadMore();
        // Intercepts clicks on toast.
        const toastManager = getToastManager();
        toastManager.shadowRoot.querySelector('#toast').onclick =
            e => this.onToastClicked_(e);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => assert(this.mojoEventTarget_.removeListener(id)));
        this.eventTracker_.removeAll();
    }
    onSaveDangerousClick_(e) {
        const bypassItem = this.items_.find(item => item.id === e.detail.id);
        if (bypassItem) {
            this.bypassDialogItemId_ = bypassItem.id;
            assert(!!this.mojoHandler_);
            this.mojoHandler_.recordOpenBypassWarningPrompt(this.bypassDialogItemId_);
        }
    }
    shouldShowBypassWarningDialog_() {
        return this.bypassDialogItemId_ !== '';
    }
    computeBypassWarningDialogFileName_() {
        const bypassItem = this.items_.find(item => item.id === this.bypassDialogItemId_);
        return bypassItem?.fileName || '';
    }
    hideBypassWarningDialog_() {
        this.bypassDialogItemId_ = '';
    }
    onBypassWarningConfirmationDialogClose_() {
        const dialog = this.shadowRoot.querySelector('download-bypass-warning-confirmation-dialog');
        assert(dialog);
        assert(this.bypassDialogItemId_ !== '');
        assert(!!this.mojoHandler_);
        if (dialog.wasConfirmed()) {
            this.mojoHandler_.saveDangerousFromPromptRequiringGesture(this.bypassDialogItemId_);
        }
        else {
            // Closing the dialog by clicking cancel is treated the same as closing
            // the dialog by pressing Esc. Both are treated as CANCEL, not CLOSE.
            this.mojoHandler_.recordCancelBypassWarningPrompt(this.bypassDialogItemId_);
        }
        this.hideBypassWarningDialog_();
    }
    clearAll_() {
        this.set('items_', []);
    }
    hasDownloadsChanged_() {
        if (this.hasDownloads_) {
            this.$.downloadsList.fire('iron-resize');
        }
    }
    insertItems_(index, items) {
        // Insert |items| at the given |index| via Array#splice().
        if (items.length > 0) {
            this.items_.splice(index, 0, ...items);
            this.updateHideDates_(index, index + items.length);
            this.notifySplices('items_', [{
                    index: index,
                    addedCount: items.length,
                    object: this.items_,
                    type: 'splice',
                    removed: [],
                }]);
        }
        if (this.hasAttribute('loading')) {
            this.removeAttribute('loading');
            this.loaded_.resolve();
        }
        this.spinnerActive_ = false;
    }
    itemsChanged_() {
        this.hasDownloads_ = this.items_.length > 0;
        this.$.toolbar.hasClearableDownloads =
            loadTimeData.getBoolean('allowDeletingHistory') &&
                this.items_.some(({ state }) => state !== State.kDangerous &&
                    state !== State.kInsecure && state !== State.kInProgress &&
                    state !== State.kPaused);
        if (this.inSearchMode_) {
            this.announcerDebouncer_ = Debouncer.debounce(this.announcerDebouncer_, timeOut.after(500), () => {
                const searchText = this.$.toolbar.getSearchText();
                const announcement = this.items_.length === 0 ?
                    this.noDownloadsText_() :
                    (this.items_.length === 1 ?
                        loadTimeData.getStringF('searchResultsSingular', searchText) :
                        loadTimeData.getStringF('searchResultsPlural', this.items_.length, searchText));
                getInstance().announce(announcement);
            });
        }
    }
    /**
     * @return The text to show when no download items are showing.
     */
    noDownloadsText_() {
        return loadTimeData.getString(this.inSearchMode_ ? 'noSearchResults' : 'noDownloads');
    }
    onKeyDown_(e) {
        let clearAllKey = 'c';
        // 
        if (e.key === clearAllKey && e.altKey && !e.ctrlKey && !e.shiftKey &&
            !e.metaKey) {
            this.onClearAllCommand_();
            e.preventDefault();
            return;
        }
        if (e.key === 'z' && !e.altKey && !e.shiftKey) {
            let hasTriggerModifier = e.ctrlKey && !e.metaKey;
            // 
            if (hasTriggerModifier) {
                this.onUndoCommand_();
                e.preventDefault();
            }
        }
    }
    onClick_() {
        const toastManager = getToastManager();
        if (toastManager.isToastOpen) {
            toastManager.hide();
        }
    }
    onClearAllCommand_() {
        if (!this.$.toolbar.canClearAll()) {
            return;
        }
        this.mojoHandler_.clearAll();
        const canUndo = this.items_.some(data => !data.isDangerous && !data.isInsecure);
        getToastManager().show(loadTimeData.getString('toastClearedAll'), 
        /* hideSlotted= */ !canUndo);
    }
    onUndoCommand_() {
        if (!this.$.toolbar.canUndo()) {
            return;
        }
        getToastManager().hide();
        this.mojoHandler_.undo();
    }
    onToastClicked_(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    onScroll_() {
        const container = this.$.downloadsList.scrollTarget;
        const distanceToBottom = container.scrollHeight - container.scrollTop - container.offsetHeight;
        if (distanceToBottom <= 100) {
            // Approaching the end of the scrollback. Attempt to load more items.
            this.searchService_.loadMore();
        }
        this.hasShadow_ = container.scrollTop > 0;
    }
    onSearchChanged_() {
        this.inSearchMode_ = this.searchService_.isSearching();
    }
    removeItem_(index) {
        const removed = this.items_.splice(index, 1);
        this.updateHideDates_(index, index);
        if (removed.some(item => item.id === this.bypassDialogItemId_)) {
            this.hideBypassWarningDialog_();
        }
        this.notifySplices('items_', [{
                index: index,
                addedCount: 0,
                object: this.items_,
                type: 'splice',
                removed: removed,
            }]);
        this.onScroll_();
    }
    onUndoClick_() {
        getToastManager().hide();
        this.mojoHandler_.undo();
    }
    /**
     * Updates whether dates should show for |this.items_[start - end]|. Note:
     * this method does not trigger template bindings. Use notifySplices() or
     * after calling this method to ensure items are redrawn.
     */
    updateHideDates_(start, end) {
        for (let i = start; i <= end; ++i) {
            const current = this.items_[i];
            if (!current) {
                continue;
            }
            const prev = this.items_[i - 1];
            current.hideDate = !!prev && prev.dateString === current.dateString;
        }
    }
    updateItem_(index, data) {
        this.items_[index] = data;
        this.updateHideDates_(index, index);
        this.notifyPath(`items_.${index}`);
        setTimeout(() => {
            const list = this.$.downloadsList;
            list.updateSizeForIndex(index);
        }, 0);
    }
    // Override FindShortcutMixin methods.
    handleFindShortcut(modalContextOpen) {
        if (modalContextOpen) {
            return false;
        }
        this.$.toolbar.focusOnSearchInput();
        return true;
    }
    // Override FindShortcutMixin methods.
    searchInputHasFocus() {
        return this.$.toolbar.isSearchFocused();
    }
}
customElements.define(DownloadsManagerElement.is, DownloadsManagerElement);

export { BrowserProxy, CrToastManagerElement, DangerType, DownloadsItemElement, DownloadsManagerElement, DownloadsToolbarElement, IconLoaderImpl, PageCallbackRouter, PageRemote, SafeBrowsingState, SearchService, State };
//# sourceMappingURL=downloads.rollup.js.map

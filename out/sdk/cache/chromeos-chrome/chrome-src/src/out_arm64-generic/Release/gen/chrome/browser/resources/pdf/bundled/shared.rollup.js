import { html, Polymer, Base, dom, dedupingMixin, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { ZoomBehavior } from './browser_api.js';
import { LoadState } from './pdf_scripting_api.js';

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

const template$3 = html`
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
template$3.setAttribute('style', 'display: none;');
document.head.appendChild(template$3.content);

const template$2 = html `
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
document.head.appendChild(template$2.content);

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
 * Calls |callback| and stops listening the first time any event in |eventNames|
 * is triggered on |target|.
 * @param eventNames Array or space-delimited string of event names to listen to
 *     (e.g. 'click mousedown').
 * @param callback Called at most once. The optional return value is passed on
 *     by the listener.
 */
function listenOnce(target, eventNames, callback) {
    const eventNamesArray = Array.isArray(eventNames) ?
        eventNames :
        eventNames.split(/ +/);
    const removeAllAndCallCallback = function (event) {
        eventNamesArray.forEach(function (eventName) {
            target.removeEventListener(eventName, removeAllAndCallCallback, false);
        });
        return callback(event);
    };
    eventNamesArray.forEach(function (eventName) {
        target.addEventListener(eventName, removeAllAndCallCallback, false);
    });
}
/**
 * @return Whether a modifier key was down when processing |e|.
 */
function hasKeyModifiers(e) {
    return !!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey);
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
var distance$1 = function(x1, y1, x2, y2) {
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
      return Math.round(distance$1(x, y, corner.x, corner.y));
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

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * Note: This file is forked from Polymer's paper-ripple-behavior.js
 *
 * `PaperRippleMixin` dynamically implements a ripple when the element has
 * focus via pointer or keyboard.
 *
 * NOTE: This behavior is intended to be used in conjunction with and after
 * `IronButtonState` and `IronControlState`.
 */

const PaperRippleMixin = dedupingMixin(superClass => {
  class PaperRippleMixin extends superClass {
    static get properties() {
      return {
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
      };
    }

    /**
     * Ensures a `<paper-ripple>` element is available when the element is
     * focused.
     */
    _buttonStateChanged() {
      if (this.focused) {
        this.ensureRipple();
      }
    }

    /**
     * In addition to the functionality provided in `IronButtonState`, ensures
     * a ripple effect is created when the element is in a `pressed` state.
     */
    _downHandler(event) {
      IronButtonStateImpl._downHandler.call(this, event);
      if (this.pressed) {
        this.ensureRipple(event);
      }
    }

    /**
     * Ensures this element contains a ripple effect. For startup efficiency
     * the ripple effect is dynamically on demand when needed.
     * @param {!Event=} optTriggeringEvent (optional) event that triggered the
     * ripple.
     */
    ensureRipple(optTriggeringEvent) {
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
    }

    /**
     * Returns the `<paper-ripple>` element used by this element to create
     * ripple effects. The element's ripple is created on demand, when
     * necessary, and calling this method will force the
     * ripple to be created.
     */
    getRipple() {
      this.ensureRipple();
      return this._ripple;
    }

    /**
     * Returns true if this element currently contains a ripple effect.
     * @return {boolean}
     */
    hasRipple() {
      return Boolean(this._ripple);
    }

    /**
     * Create the element's ripple effect via creating a `<paper-ripple>`.
     * Override this method to customize the ripple element.
     * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
     */
    _createRipple() {
      var element = /** @type {!PaperRippleElement} */ (
          document.createElement('paper-ripple'));
      return element;
    }

    _noinkChanged(noink) {
      if (this.hasRipple()) {
        this._ripple.noink = noink;
      }
    }
  }

  return PaperRippleMixin;
});

function getTemplate$4() {
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
const CrIconbuttonElementBase = PaperRippleMixin(PolymerElement);
class CrIconButtonElement extends CrIconbuttonElementBase {
    static get is() {
        return 'cr-icon-button';
    }
    static get template() {
        return getTemplate$4();
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

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var DisplayAnnotationsAction;
(function (DisplayAnnotationsAction) {
    DisplayAnnotationsAction["DISPLAY_ANNOTATIONS"] = "display-annotations";
    DisplayAnnotationsAction["HIDE_ANNOTATIONS"] = "hide-annotations";
})(DisplayAnnotationsAction || (DisplayAnnotationsAction = {}));
/** Enumeration of page fitting types and bounding box fitting types. */
var FittingType;
(function (FittingType) {
    FittingType["NONE"] = "none";
    FittingType["FIT_TO_PAGE"] = "fit-to-page";
    FittingType["FIT_TO_WIDTH"] = "fit-to-width";
    FittingType["FIT_TO_HEIGHT"] = "fit-to-height";
    FittingType["FIT_TO_BOUNDING_BOX"] = "fit-to-bounding-box";
    FittingType["FIT_TO_BOUNDING_BOX_WIDTH"] = "fit-to-bounding-box-width";
    FittingType["FIT_TO_BOUNDING_BOX_HEIGHT"] = "fit-to-bounding-box-height";
})(FittingType || (FittingType = {}));
/**
 * Enumeration of save message request types. Must match `SaveRequestType` in
 * pdf/pdf_view_web_plugin.h.
 */
var SaveRequestType;
(function (SaveRequestType) {
    SaveRequestType[SaveRequestType["ANNOTATION"] = 0] = "ANNOTATION";
    SaveRequestType[SaveRequestType["ORIGINAL"] = 1] = "ORIGINAL";
    SaveRequestType[SaveRequestType["EDITED"] = 2] = "EDITED";
})(SaveRequestType || (SaveRequestType = {}));
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused. This enum is tied directly to a UMA
 * enum, PdfOcrUserSelection, defined in //tools/metrics/histograms/enums.xml
 * and should always reflect it (do not change one without changing the other).
 */
var PdfOcrUserSelection;
(function (PdfOcrUserSelection) {
    PdfOcrUserSelection[PdfOcrUserSelection["DEPRECATED_TURN_ON_ONCE_FROM_CONTEXT_MENU"] = 0] = "DEPRECATED_TURN_ON_ONCE_FROM_CONTEXT_MENU";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_ON_ALWAYS_FROM_CONTEXT_MENU"] = 1] = "TURN_ON_ALWAYS_FROM_CONTEXT_MENU";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_OFF_FROM_CONTEXT_MENU"] = 2] = "TURN_OFF_FROM_CONTEXT_MENU";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_ON_ALWAYS_FROM_MORE_ACTIONS"] = 3] = "TURN_ON_ALWAYS_FROM_MORE_ACTIONS";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_OFF_FROM_MORE_ACTIONS"] = 4] = "TURN_OFF_FROM_MORE_ACTIONS";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_ON_ALWAYS_FROM_SETTINGS"] = 5] = "TURN_ON_ALWAYS_FROM_SETTINGS";
    PdfOcrUserSelection[PdfOcrUserSelection["TURN_OFF_FROM_SETTINGS"] = 6] = "TURN_OFF_FROM_SETTINGS";
})(PdfOcrUserSelection || (PdfOcrUserSelection = {}));

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

function getTemplate$3() {
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
        return getTemplate$3();
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

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// A class that listens for touch events and produces events when these
// touches form gestures (e.g. pinching).
class GestureDetector {
    /** @param element The element to monitor for touch gestures. */
    constructor(element) {
        this.pinchStartEvent_ = null;
        this.lastTouchTouchesCount_ = 0;
        this.lastEvent_ = null;
        this.isPresentationMode_ = false;
        /**
         * The scale relative to the start of the pinch when handling ctrl-wheels.
         * null when there is no ongoing pinch.
         */
        this.accumulatedWheelScale_ = null;
        /**
         * A timeout ID from setTimeout used for sending the pinchend event when
         * handling ctrl-wheels.
         */
        this.wheelEndTimeout_ = null;
        this.eventTarget_ = new EventTarget();
        this.element_ = element;
        this.element_.addEventListener('touchstart', this.onTouchStart_.bind(this), { passive: true });
        const boundOnTouch = this.onTouch_.bind(this);
        this.element_.addEventListener('touchmove', boundOnTouch, { passive: true });
        this.element_.addEventListener('touchend', boundOnTouch, { passive: true });
        this.element_.addEventListener('touchcancel', boundOnTouch, { passive: true });
        this.element_.addEventListener('wheel', this.onWheel_.bind(this), { passive: false });
        document.addEventListener('contextmenu', this.handleContextMenuEvent_.bind(this));
    }
    setPresentationMode(enabled) {
        this.isPresentationMode_ = enabled;
    }
    getEventTarget() {
        return this.eventTarget_;
    }
    /**
     * Public for tests.
     * @return True if the last touch start was a two finger touch.
     */
    wasTwoFingerTouch() {
        return this.lastTouchTouchesCount_ === 2;
    }
    /**
     * Call the relevant listeners with the given |PinchEventDetail|.
     * @param type The type of pinch event.
     * @param detail The event to notify the listeners of.
     */
    notify_(type, detail) {
        // Adjust center into element-relative coordinates.
        const clientRect = this.element_.getBoundingClientRect();
        detail.center = {
            x: detail.center.x - clientRect.x,
            y: detail.center.y - clientRect.y,
        };
        this.eventTarget_.dispatchEvent(new CustomEvent(type, { detail }));
    }
    /** The callback for touchstart events on the element. */
    onTouchStart_(event) {
        this.lastTouchTouchesCount_ = event.touches.length;
        if (!this.wasTwoFingerTouch()) {
            return;
        }
        this.pinchStartEvent_ = event;
        this.lastEvent_ = event;
        this.notify_('pinchstart', { center: center(event) });
    }
    /** The callback for touch move, end, and cancel events on the element. */
    onTouch_(event) {
        if (!this.pinchStartEvent_) {
            return;
        }
        const lastEvent = this.lastEvent_;
        // Check if the pinch ends with the current event.
        if (event.touches.length < 2 ||
            lastEvent.touches.length !== event.touches.length) {
            const startScaleRatio = pinchScaleRatio(lastEvent, this.pinchStartEvent_);
            this.pinchStartEvent_ = null;
            this.lastEvent_ = null;
            this.notify_('pinchend', { startScaleRatio: startScaleRatio, center: center(lastEvent) });
            return;
        }
        const scaleRatio = pinchScaleRatio(event, lastEvent);
        const startScaleRatio = pinchScaleRatio(event, this.pinchStartEvent_);
        this.notify_('pinchupdate', {
            scaleRatio: scaleRatio,
            // TODO(dhoss): Handle case where `scaleRatio` is null?
            direction: scaleRatio > 1.0 ? 'in' : 'out',
            startScaleRatio: startScaleRatio,
            center: center(event),
        });
        this.lastEvent_ = event;
    }
    /** The callback for wheel events on the element. */
    onWheel_(event) {
        // We handle ctrl-wheels to invoke our own pinch zoom. On Mac, synthetic
        // ctrl-wheels are created from trackpad pinches. We handle these ourselves
        // to prevent the browser's native pinch zoom. We also use our pinch
        // zooming mechanism for handling non-synthetic ctrl-wheels. This allows us
        // to anchor the zoom around the mouse position instead of the scroll
        // position.
        if (!event.ctrlKey) {
            if (this.isPresentationMode_) {
                this.notify_('wheel', {
                    center: { x: event.clientX, y: event.clientY },
                    direction: event.deltaY > 0 ? 'down' : 'up',
                });
            }
            return;
        }
        event.preventDefault();
        // Disable wheel gestures in Presentation mode.
        if (this.isPresentationMode_) {
            return;
        }
        const wheelScale = Math.exp(-event.deltaY / 100);
        // Clamp scale changes from the wheel event as they can be
        // quite dramatic for non-synthetic ctrl-wheels.
        const scale = Math.min(1.25, Math.max(0.75, wheelScale));
        const position = { x: event.clientX, y: event.clientY };
        if (this.accumulatedWheelScale_ == null) {
            this.accumulatedWheelScale_ = 1.0;
            this.notify_('pinchstart', { center: position });
        }
        this.accumulatedWheelScale_ *= scale;
        this.notify_('pinchupdate', {
            scaleRatio: scale,
            direction: scale > 1.0 ? 'in' : 'out',
            startScaleRatio: this.accumulatedWheelScale_,
            center: position,
        });
        // We don't get any phase information for the ctrl-wheels, so we don't know
        // when the gesture ends. We'll just use a timeout to send the pinch end
        // event a short time after the last ctrl-wheel we see.
        if (this.wheelEndTimeout_ != null) {
            window.clearTimeout(this.wheelEndTimeout_);
            this.wheelEndTimeout_ = null;
        }
        const gestureEndDelayMs = 100;
        const endEvent = {
            startScaleRatio: this.accumulatedWheelScale_,
            center: position,
        };
        this.wheelEndTimeout_ = window.setTimeout(() => {
            this.notify_('pinchend', endEvent);
            this.wheelEndTimeout_ = null;
            this.accumulatedWheelScale_ = null;
        }, gestureEndDelayMs);
    }
    handleContextMenuEvent_(e) {
        // Stop Chrome from popping up the context menu on long press. We need to
        // make sure the start event did not have 2 touches because we don't want
        // to block two finger tap opening the context menu. We check for
        // firesTouchEvents in order to not block the context menu on right click.
        const capabilities = e.sourceCapabilities;
        if (capabilities && capabilities.firesTouchEvents &&
            !this.wasTwoFingerTouch()) {
            e.preventDefault();
        }
    }
}
/**
 * Computes the change in scale between this touch event and a previous one.
 * @param event Latest touch event on the element.
 * @param prevEvent A previous touch event on the element.
 * @return The ratio of the scale of this event and the scale of the previous
 *     one.
 */
function pinchScaleRatio(event, prevEvent) {
    const distance1 = distance(prevEvent);
    const distance2 = distance(event);
    return distance1 === 0 ? null : distance2 / distance1;
}
/**
 * Computes the distance between fingers.
 * @param event Touch event with at least 2 touch points.
 * @return Distance between touch[0] and touch[1].
 */
function distance(event) {
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}
/**
 * Computes the midpoint between fingers.
 * @param event Touch event with at least 2 touch points.
 * @return Midpoint between touch[0] and touch[1].
 */
function center(event) {
    const touch1 = event.touches[0];
    const touch2 = event.touches[1];
    return {
        x: (touch1.clientX + touch2.clientX) / 2,
        y: (touch1.clientY + touch2.clientY) / 2,
    };
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The longest period of time in milliseconds for a horizontal touch movement to
 * be considered as a swipe.
 */
const SWIPE_TIMER_INTERVAL_MS = 200;
/* The minimum travel distance on the x axis for a swipe. */
const SWIPE_X_DIST_MIN = 150;
/* The maximum travel distance on the y axis for a swipe. */
const SWIPE_Y_DIST_MAX = 100;
/** Enumeration of swipe directions. */
var SwipeDirection;
(function (SwipeDirection) {
    SwipeDirection[SwipeDirection["RIGHT_TO_LEFT"] = 0] = "RIGHT_TO_LEFT";
    SwipeDirection[SwipeDirection["LEFT_TO_RIGHT"] = 1] = "LEFT_TO_RIGHT";
})(SwipeDirection || (SwipeDirection = {}));
// A class that listens for touch events and produces events when these
// touches form swipe gestures.
class SwipeDetector {
    /** @param element The element to monitor for touch gestures. */
    constructor(element) {
        this.isPresentationMode_ = false;
        this.swipeStartEvent_ = null;
        this.elapsedTimeForTesting_ = null;
        this.eventTarget_ = new EventTarget();
        this.element_ = element;
        this.element_.addEventListener('touchstart', this.onTouchStart_.bind(this), { passive: true });
        this.element_.addEventListener('touchend', this.onTouchEnd_.bind(this), { passive: true });
        this.element_.addEventListener('touchcancel', () => this.onTouchCancel_(), { passive: true });
    }
    /**
     * Public for tests. Allow manually setting the elapsed time for a swipe
     * action.
     */
    setElapsedTimerForTesting(time) {
        this.elapsedTimeForTesting_ = time;
    }
    setPresentationMode(enabled) {
        this.isPresentationMode_ = enabled;
    }
    getPresentationModeForTesting() {
        return this.isPresentationMode_;
    }
    getEventTarget() {
        return this.eventTarget_;
    }
    /**
     * Call the relevant listeners with the given swipe |direction|.
     * @param direction The direction of swipe action.
     */
    notify_(direction) {
        this.eventTarget_.dispatchEvent(new CustomEvent('swipe', { detail: direction }));
    }
    /** The callback for touchstart events on the element. */
    onTouchStart_(event) {
        if (!this.isPresentationMode_) {
            return;
        }
        // If more than 1 finger touch the screen or there is already an ongoing
        // swipe detection process, there is no valid swipe event to keep track.
        if (event.touches.length !== 1 || this.swipeStartEvent_) {
            this.swipeStartEvent_ = null;
            return;
        }
        this.swipeStartEvent_ = event;
        return;
    }
    /** The callback for touchcancel events on the element. */
    onTouchCancel_() {
        if (!this.isPresentationMode_ || !this.swipeStartEvent_) {
            return;
        }
        this.swipeStartEvent_ = null;
    }
    /** The callback for touchend events on the element. */
    onTouchEnd_(event) {
        if (!this.isPresentationMode_ || !this.swipeStartEvent_) {
            return;
        }
        if (event.touches.length !== 0 ||
            this.swipeStartEvent_.touches.length !== 1) {
            return;
        }
        const elapsedTime = this.elapsedTimeForTesting_ ?
            this.elapsedTimeForTesting_ :
            event.timeStamp - this.swipeStartEvent_.timeStamp;
        const swipeStartObj = this.swipeStartEvent_.changedTouches[0];
        const swipeEndObj = event.changedTouches[0];
        const distX = swipeEndObj.pageX - swipeStartObj.pageX;
        const distY = swipeEndObj.pageY - swipeStartObj.pageY;
        // If this is a valid swipe, notify its direction to the viewer.
        if (elapsedTime <= SWIPE_TIMER_INTERVAL_MS &&
            Math.abs(distX) >= SWIPE_X_DIST_MIN &&
            Math.abs(distY) <= SWIPE_Y_DIST_MAX) {
            const direction = distX > 0 ? SwipeDirection.LEFT_TO_RIGHT :
                SwipeDirection.RIGHT_TO_LEFT;
            this.notify_(direction);
        }
        this.swipeStartEvent_ = null;
    }
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MIN_ZOOM_DELTA = 0.01;
/** @return Whether two numbers are approximately equal. */
function floatingPointEquals(a, b) {
    // If the zoom level is close enough to the current zoom level, don't
    // change it. This avoids us getting into an infinite loop of zoom changes
    // due to floating point error.
    return Math.abs(a - b) <= MIN_ZOOM_DELTA;
}
// Abstract parent of classes that manage updating the browser with zoom changes
// and/or updating the viewer's zoom when the browser zoom changes.
class ZoomManager {
    /**
     * @param getViewportZoomCallback Callback to get the viewport's current zoom
     *     level.
     * @param initialZoom The initial browser zoom level.
     */
    constructor(getViewportZoomCallback, initialZoom) {
        this.eventTarget_ = new EventTarget();
        this.browserZoom = initialZoom;
        this.getViewportZoom = getViewportZoomCallback;
    }
    getEventTarget() {
        return this.eventTarget_;
    }
    /**
     * Creates the appropriate kind of zoom manager given the zoom behavior.
     * @param zoomBehavior How to manage zoom.
     * @param getViewportZoom A function that gets the current viewport zoom.
     * @param setBrowserZoomFunction A function that sets the browser zoom to the
     *     provided value.
     * @param initialZoom The initial browser zoom level.
     */
    static create(zoomBehavior, getViewportZoom, setBrowserZoomFunction, initialZoom) {
        switch (zoomBehavior) {
            case ZoomBehavior.MANAGE:
                return new ActiveZoomManager(getViewportZoom, setBrowserZoomFunction, initialZoom);
            case ZoomBehavior.PROPAGATE_PARENT:
                return new EmbeddedZoomManager(getViewportZoom, initialZoom);
            default:
                return new InactiveZoomManager(getViewportZoom, initialZoom);
        }
    }
    /**
     * Combines the internal pdf zoom and the browser zoom to
     * produce the total zoom level for the viewer.
     * @param internalZoom the zoom level internal to the viewer.
     * @return the total zoom level.
     */
    applyBrowserZoom(internalZoom) {
        return this.browserZoom * internalZoom;
    }
    /**
     * Given a zoom level, return the internal zoom level needed to
     * produce that zoom level.
     * @param totalZoom the total zoom level.
     * @return the zoom level internal to the viewer.
     */
    internalZoomComponent(totalZoom) {
        return totalZoom / this.browserZoom;
    }
}
// Has no control over the browser's zoom and does not respond to browser zoom
// changes.
class InactiveZoomManager extends ZoomManager {
    onBrowserZoomChange(_newZoom) { }
    onPdfZoomChange() { }
}
// ActiveZoomManager controls the browser's zoom.
class ActiveZoomManager extends ZoomManager {
    /**
     * Constructs a ActiveZoomManager.
     * @param getViewportZoom A function that gets the current viewport zoom level
     * @param setBrowserZoomFunction A function that sets the browser zoom to the
     *     provided value.
     * @param initialZoom The initial browser zoom level.
     */
    constructor(getViewportZoom, setBrowserZoomFunction, initialZoom) {
        super(getViewportZoom, initialZoom);
        this.changingBrowserZoom_ = null;
        this.setBrowserZoomFunction_ = setBrowserZoomFunction;
    }
    onBrowserZoomChange(newZoom) {
        // If we are changing the browser zoom level, ignore any browser zoom level
        // change events. Either, the change occurred before our update and will be
        // overwritten, or the change being reported is the change we are making,
        // which we have already handled.
        if (this.changingBrowserZoom_) {
            return;
        }
        if (floatingPointEquals(this.browserZoom, newZoom)) {
            return;
        }
        this.browserZoom = newZoom;
        this.getEventTarget().dispatchEvent(new CustomEvent('set-zoom', { detail: newZoom }));
    }
    onPdfZoomChange() {
        // If we are already changing the browser zoom level in response to a
        // previous extension-initiated zoom-level change, ignore this zoom change.
        // Once the browser zoom level is changed, we check whether the extension's
        // zoom level matches the most recently sent zoom level.
        if (this.changingBrowserZoom_) {
            return;
        }
        const viewportZoom = this.getViewportZoom();
        if (floatingPointEquals(this.browserZoom, viewportZoom)) {
            return;
        }
        this.changingBrowserZoom_ =
            this.setBrowserZoomFunction_(viewportZoom).then(() => {
                this.browserZoom = viewportZoom;
                this.changingBrowserZoom_ = null;
                // The extension's zoom level may have changed while the browser zoom
                // change was in progress. We call back into onPdfZoomChange to ensure
                // the browser zoom is up to date.
                this.onPdfZoomChange();
            });
    }
    /**
     * Combines the internal pdf zoom and the browser zoom to
     * produce the total zoom level for the viewer.
     * @param internalZoom the zoom level internal to the viewer.
     * @return the total zoom level.
     */
    applyBrowserZoom(internalZoom) {
        // The internal zoom and browser zoom are changed together, so the
        // browser zoom is already applied.
        return internalZoom;
    }
    /**
     * Given a zoom level, return the internal zoom level needed to
     * produce that zoom level.
     * @param totalZoom the total zoom level.
     * @return the zoom level internal to the viewer.
     */
    internalZoomComponent(totalZoom) {
        // The internal zoom and browser zoom are changed together, so the
        // internal zoom is the total zoom.
        return totalZoom;
    }
}
// Responds to changes in the browser zoom, but does not control the browser
// zoom.
class EmbeddedZoomManager extends ZoomManager {
    /**
     * Invoked when a browser-initiated zoom-level change occurs.
     * @param newZoom the new browser zoom level.
     */
    onBrowserZoomChange(newZoom) {
        const oldZoom = this.browserZoom;
        this.browserZoom = newZoom;
        this.getEventTarget().dispatchEvent(new CustomEvent('update-zoom-from-browser', { detail: oldZoom }));
    }
    onPdfZoomChange() { }
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @return The area of the intersection of the rects */
function getIntersectionArea(rect1, rect2) {
    const left = Math.max(rect1.x, rect2.x);
    const top = Math.max(rect1.y, rect2.y);
    const right = Math.min(rect1.x + rect1.width, rect2.x + rect2.width);
    const bottom = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
    if (left >= right || top >= bottom) {
        return 0;
    }
    return (right - left) * (bottom - top);
}
/** @return The vector between the two points. */
function vectorDelta(p1, p2) {
    return { x: p2.x - p1.x, y: p2.y - p1.y };
}
// TODO(crbug.com/1276456): Would Viewport be better as a Polymer element?
class Viewport {
    /**
     * @param container The element which contains the scrollable content.
     * @param sizer The element which represents the size of the scrollable
     *     content in the viewport
     * @param content The element which is the parent of the plugin in the viewer.
     * @param scrollbarWidth The width of scrollbars on the page
     * @param defaultZoom The default zoom level.
     */
    constructor(container, sizer, content, scrollbarWidth, defaultZoom) {
        this.allowedToChangeZoom_ = false;
        this.internalZoom_ = 1;
        /**
         * Zoom state used to change zoom and fitting type to what it was
         * originally when saved.
         */
        this.savedZoom_ = null;
        this.savedFittingType_ = null;
        /**
         * Predefined zoom factors to be used when zooming in/out. These are in
         * ascending order.
         */
        this.presetZoomFactors_ = [];
        this.zoomManager_ = null;
        this.documentDimensions_ = null;
        this.pageDimensions_ = [];
        this.fittingType_ = FittingType.NONE;
        this.prevScale_ = 1;
        this.smoothScrolling_ = false;
        this.pinchPhase_ = PinchPhase.NONE;
        this.pinchPanVector_ = null;
        this.pinchCenter_ = null;
        this.firstPinchCenterInFrame_ = null;
        this.oldCenterInContent_ = null;
        this.keepContentCentered_ = false;
        this.tracker_ = new EventTracker();
        this.sentPinchEvent_ = false;
        this.fullscreenForTesting_ = false;
        this.window_ = container;
        this.scrollContent_ =
            new ScrollContent(this.window_, sizer, content, scrollbarWidth);
        this.defaultZoom_ = defaultZoom;
        this.viewportChangedCallback_ = function () { };
        this.beforeZoomCallback_ = function () { };
        this.afterZoomCallback_ = function () { };
        this.userInitiatedCallback_ = function () { };
        this.gestureDetector_ = new GestureDetector(content);
        this.gestureDetector_.getEventTarget().addEventListener('pinchstart', e => this.onPinchStart_(e));
        this.gestureDetector_.getEventTarget().addEventListener('pinchupdate', e => this.onPinchUpdate_(e));
        this.gestureDetector_.getEventTarget().addEventListener('pinchend', e => this.onPinchEnd_(e));
        this.gestureDetector_.getEventTarget().addEventListener('wheel', e => this.onWheel_(e));
        this.swipeDetector_ = new SwipeDetector(content);
        this.swipeDetector_.getEventTarget().addEventListener('swipe', e => this.onSwipe_(e));
        // Set to a default zoom manager - used in tests.
        this.setZoomManager(new InactiveZoomManager(this.getZoom.bind(this), 1));
        // Print Preview
        if (this.window_ === document.documentElement ||
            // Necessary check since during testing a fake DOM element is used.
            !(this.window_ instanceof HTMLElement)) {
            window.addEventListener('scroll', this.updateViewport_.bind(this));
            this.scrollContent_.setEventTarget(window);
            // The following line is only used in tests, since they expect
            // |scrollCallback| to be called on the mock |window_| object (legacy).
            this.window_.scrollCallback =
                this.updateViewport_.bind(this);
            window.addEventListener('resize', this.resizeWrapper_.bind(this));
            // The following line is only used in tests, since they expect
            // |resizeCallback| to be called on the mock |window_| object (legacy).
            this.window_.resizeCallback =
                this.resizeWrapper_.bind(this);
        }
        else {
            // Standard PDF viewer
            this.window_.addEventListener('scroll', this.updateViewport_.bind(this));
            this.scrollContent_.setEventTarget(this.window_);
            const resizeObserver = new ResizeObserver(_ => this.resizeWrapper_());
            const target = this.window_.parentElement;
            assert(target.id === 'main');
            resizeObserver.observe(target);
        }
        document.body.addEventListener('change-zoom', e => this.setZoom(e.detail.zoom));
    }
    /**
     * Sets whether the viewport is in Presentation mode.
     */
    setPresentationMode(enabled) {
        assert((document.fullscreenElement !== null) === enabled);
        this.gestureDetector_.setPresentationMode(enabled);
        this.swipeDetector_.setPresentationMode(enabled);
    }
    /**
     * Sets the contents of the viewport, scrolling within the viewport's window.
     * @param content The new viewport contents, or null to clear the viewport.
     */
    setContent(content) {
        this.scrollContent_.setContent(content);
    }
    /**
     * Sets the contents of the viewport, scrolling within the content's window.
     * @param content The new viewport contents.
     */
    setRemoteContent(content) {
        this.scrollContent_.setRemoteContent(content);
    }
    /**
     * Synchronizes scroll position from remote content.
     */
    syncScrollFromRemote(position) {
        this.scrollContent_.syncScrollFromRemote(position);
    }
    /**
     * Receives acknowledgment of scroll position synchronized to remote content.
     */
    ackScrollToRemote(position) {
        this.scrollContent_.ackScrollToRemote(position);
    }
    setViewportChangedCallback(viewportChangedCallback) {
        this.viewportChangedCallback_ = viewportChangedCallback;
    }
    setBeforeZoomCallback(beforeZoomCallback) {
        this.beforeZoomCallback_ = beforeZoomCallback;
    }
    setAfterZoomCallback(afterZoomCallback) {
        this.afterZoomCallback_ = afterZoomCallback;
    }
    setUserInitiatedCallback(userInitiatedCallback) {
        this.userInitiatedCallback_ = userInitiatedCallback;
    }
    /**
     * @return The number of clockwise 90-degree rotations that have been applied.
     */
    getClockwiseRotations() {
        const options = this.getLayoutOptions();
        return options ? options.defaultPageOrientation : 0;
    }
    /** @return Whether viewport is in two-up view mode. */
    twoUpViewEnabled() {
        const options = this.getLayoutOptions();
        return !!options && options.twoUpViewEnabled;
    }
    /**
     * Clamps the zoom factor (or page scale factor) to be within the limits.
     * @param factor The zoom/scale factor.
     * @return The factor clamped within the limits.
     */
    clampZoom_(factor) {
        return Math.max(this.presetZoomFactors_[0], Math.min(factor, this.presetZoomFactors_[this.presetZoomFactors_.length - 1]));
    }
    /** @param factors Array containing zoom/scale factors. */
    setZoomFactorRange(factors) {
        assert(factors.length !== 0);
        this.presetZoomFactors_ = factors;
    }
    /**
     * Converts a page position (e.g. the location of a bookmark) to a screen
     * position.
     * @param point The position on `page`.
     * @return The screen position.
     */
    convertPageToScreen(page, point) {
        const dimensions = this.getPageInsetDimensions(page);
        // width & height are already rotated.
        const height = dimensions.height;
        const width = dimensions.width;
        const matrix = new DOMMatrix();
        const rotation = this.getClockwiseRotations() * 90;
        // Set origin for rotation.
        if (rotation === 90) {
            matrix.translateSelf(width, 0);
        }
        else if (rotation === 180) {
            matrix.translateSelf(width, height);
        }
        else if (rotation === 270) {
            matrix.translateSelf(0, height);
        }
        matrix.rotateSelf(0, 0, rotation);
        // Invert Y position with respect to height as page coordinates are
        // measured from the bottom left.
        matrix.translateSelf(0, height);
        matrix.scaleSelf(1, -1);
        const pointsToPixels = 96 / 72;
        const result = matrix.transformPoint(new DOMPoint(point.x * pointsToPixels, point.y * pointsToPixels));
        return {
            x: result.x + PAGE_SHADOW.left,
            y: result.y + PAGE_SHADOW.top,
        };
    }
    /**
     * Returns the zoomed and rounded document dimensions for the given zoom.
     * Rounding is necessary when interacting with the renderer which tends to
     * operate in integral values (for example for determining if scrollbars
     * should be shown).
     * @param zoom The zoom to use to compute the scaled dimensions.
     * @return Scaled 'width' and 'height' of the document.
     */
    getZoomedDocumentDimensions_(zoom) {
        if (!this.documentDimensions_) {
            return null;
        }
        return {
            width: Math.round(this.documentDimensions_.width * zoom),
            height: Math.round(this.documentDimensions_.height * zoom),
        };
    }
    /** @return A dictionary with the 'width'/'height' of the document. */
    getDocumentDimensions() {
        return {
            width: this.documentDimensions_.width,
            height: this.documentDimensions_.height,
        };
    }
    /** @return A dictionary carrying layout options from the plugin. */
    getLayoutOptions() {
        return this.documentDimensions_ ? this.documentDimensions_.layoutOptions :
            undefined;
    }
    /** @return ViewportRect for the viewport given current zoom. */
    getViewportRect_() {
        const zoom = this.getZoom();
        // Zoom can be 0 in the case of a PDF that is in a hidden iframe. Avoid
        // returning undefined values in this case. See https://crbug.com/1202725.
        if (zoom === 0) {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            };
        }
        return {
            x: this.position.x / zoom,
            y: this.position.y / zoom,
            width: this.size.width / zoom,
            height: this.size.height / zoom,
        };
    }
    /**
     * @param zoom Zoom to compute scrollbars for
     * @return Whether horizontal or vertical scrollbars are needed.
     * Public so tests can call it directly.
     */
    documentNeedsScrollbars(zoom) {
        const zoomedDimensions = this.getZoomedDocumentDimensions_(zoom);
        if (!zoomedDimensions) {
            return { horizontal: false, vertical: false };
        }
        return {
            horizontal: zoomedDimensions.width > this.window_.offsetWidth,
            vertical: zoomedDimensions.height > this.window_.offsetHeight,
        };
    }
    /**
     * @return Whether horizontal and vertical scrollbars are needed.
     */
    documentHasScrollbars() {
        return this.documentNeedsScrollbars(this.getZoom());
    }
    /**
     * Helper function called when the zoomed document size changes. Updates the
     * sizer's width and height.
     */
    contentSizeChanged_() {
        const zoomedDimensions = this.getZoomedDocumentDimensions_(this.getZoom());
        if (zoomedDimensions) {
            this.scrollContent_.setSize(zoomedDimensions.width, zoomedDimensions.height);
        }
    }
    /** Called when the viewport should be updated. */
    updateViewport_() {
        this.viewportChangedCallback_();
    }
    /** Called when the browser window size changes. */
    resizeWrapper_() {
        this.userInitiatedCallback_(false);
        this.resize_();
        this.userInitiatedCallback_(true);
    }
    /** Called when the viewport size changes. */
    resize_() {
        // Force fit-to-height when resizing happens as a result of entering full
        // screen mode.
        if (document.fullscreenElement !== null) {
            this.fittingType_ = FittingType.FIT_TO_HEIGHT;
            this.window_.dispatchEvent(new CustomEvent('fitting-type-changed-for-testing'));
        }
        if (this.fittingType_ === FittingType.FIT_TO_PAGE) {
            this.fitToPage({ scrollToTop: false });
        }
        else if (this.fittingType_ === FittingType.FIT_TO_WIDTH) {
            this.fitToWidth();
        }
        else if (this.fittingType_ === FittingType.FIT_TO_HEIGHT) {
            this.fitToHeight();
        }
        else if (this.internalZoom_ === 0) {
            this.fitToNone();
        }
        else {
            this.updateViewport_();
        }
    }
    /** @return The scroll position of the viewport. */
    get position() {
        return {
            x: this.scrollContent_.scrollLeft,
            y: this.scrollContent_.scrollTop,
        };
    }
    /**
     * Scroll the viewport to the specified position.
     * @param position The position to scroll to.
     * @param isSmooth Whether to scroll smoothly.
     */
    setPosition(position, isSmooth = false) {
        this.scrollContent_.scrollTo(position.x, position.y, isSmooth);
    }
    /** @return The size of the viewport. */
    get size() {
        return {
            width: this.window_.offsetWidth,
            height: this.window_.offsetHeight,
        };
    }
    /** Gets the content size. */
    get contentSize() {
        return this.scrollContent_.size;
    }
    /** @return The current zoom. */
    getZoom() {
        return this.zoomManager_.applyBrowserZoom(this.internalZoom_);
    }
    /** @return The preset zoom factors. */
    get presetZoomFactors() {
        return this.presetZoomFactors_;
    }
    setZoomManager(manager) {
        this.resetTracker();
        this.zoomManager_ = manager;
        this.tracker_.add(this.zoomManager_.getEventTarget(), 'set-zoom', (e) => this.setZoom(e.detail));
        this.tracker_.add(this.zoomManager_.getEventTarget(), 'update-zoom-from-browser', this.updateZoomFromBrowserChange_.bind(this));
    }
    /**
     * @return The phase of the current pinch gesture for the viewport.
     */
    get pinchPhase() {
        return this.pinchPhase_;
    }
    /**
     * @return The panning caused by the current pinch gesture (as the deltas of
     *     the x and y coordinates).
     */
    get pinchPanVector() {
        return this.pinchPanVector_;
    }
    /**
     * @return The coordinates of the center of the current pinch gesture.
     */
    get pinchCenter() {
        return this.pinchCenter_;
    }
    /**
     * Used to wrap a function that might perform zooming on the viewport. This is
     * required so that we can notify the plugin that zooming is in progress
     * so that while zooming is taking place it can stop reacting to scroll events
     * from the viewport. This is to avoid flickering.
     */
    mightZoom_(f) {
        this.beforeZoomCallback_();
        this.allowedToChangeZoom_ = true;
        f();
        this.allowedToChangeZoom_ = false;
        this.afterZoomCallback_();
        this.zoomManager_.onPdfZoomChange();
    }
    /**
     * @param currentScrollPos Optional starting position to zoom into. Otherwise,
     *     use the current position.
     */
    setZoomInternal_(newZoom, currentScrollPos) {
        assert(this.allowedToChangeZoom_, 'Called Viewport.setZoomInternal_ without calling ' +
            'Viewport.mightZoom_.');
        // Record the scroll position (relative to the top-left of the window).
        let zoom = this.getZoom();
        if (!currentScrollPos) {
            currentScrollPos = {
                x: this.position.x / zoom,
                y: this.position.y / zoom,
            };
        }
        this.internalZoom_ = newZoom;
        this.contentSizeChanged_();
        // Scroll to the scaled scroll position.
        zoom = this.getZoom();
        this.setPosition({
            x: currentScrollPos.x * zoom,
            y: currentScrollPos.y * zoom,
        });
    }
    /**
     * Sets the zoom of the viewport.
     * Same as setZoomInternal_ but for pinch zoom we have some more operations.
     * @param scaleDelta The zoom delta.
     * @param center The pinch center in plugin coordinates.
     */
    setPinchZoomInternal_(scaleDelta, center) {
        assert(this.allowedToChangeZoom_, 'Called Viewport.setPinchZoomInternal_ without calling ' +
            'Viewport.mightZoom_.');
        this.internalZoom_ = this.clampZoom_(this.internalZoom_ * scaleDelta);
        assert(this.oldCenterInContent_);
        const delta = vectorDelta(this.oldCenterInContent_, this.pluginToContent_(center));
        // Record the scroll position (relative to the pinch center).
        const zoom = this.getZoom();
        const currentScrollPos = {
            x: this.position.x - delta.x * zoom,
            y: this.position.y - delta.y * zoom,
        };
        this.contentSizeChanged_();
        // Scroll to the scaled scroll position.
        this.setPosition(currentScrollPos);
    }
    /**
     *  Converts a point from plugin to content coordinates.
     *  @param pluginPoint The plugin coordinates.
     *  @return The content coordinates.
     */
    pluginToContent_(pluginPoint) {
        // TODO(mcnee) Add a helper Point class to avoid duplicating operations
        // on plain {x,y} objects.
        const zoom = this.getZoom();
        return {
            x: (pluginPoint.x + this.position.x) / zoom,
            y: (pluginPoint.y + this.position.y) / zoom,
        };
    }
    /** @param newZoom The zoom level to zoom to. */
    setZoom(newZoom) {
        this.fittingType_ = FittingType.NONE;
        this.mightZoom_(() => {
            this.setZoomInternal_(this.clampZoom_(newZoom));
            this.updateViewport_();
        });
    }
    /**
     * Save the current zoom and fitting type.
     */
    saveZoomState() {
        // Fitting to bounding box does not need to be saved, so set the fitting
        // type to none.
        if (this.fittingType_ === FittingType.FIT_TO_BOUNDING_BOX) {
            this.setFittingType(FittingType.NONE);
        }
        this.savedZoom_ = this.internalZoom_;
        this.savedFittingType_ = this.fittingType_;
    }
    /**
     * Set zoom and fitting type to what it was when saved. See saveZoomState().
     */
    restoreZoomState() {
        assert(this.savedZoom_ !== null && this.savedFittingType_ !== null, 'No saved zoom state exists');
        if (this.savedFittingType_ === FittingType.NONE) {
            this.setZoom(this.savedZoom_);
        }
        else {
            this.setFittingType(this.savedFittingType_);
        }
        this.savedZoom_ = null;
        this.savedFittingType_ = null;
    }
    /** @param e Event containing the old browser zoom. */
    updateZoomFromBrowserChange_(e) {
        const oldBrowserZoom = e.detail;
        this.mightZoom_(() => {
            // Record the scroll position (relative to the top-left of the window).
            const oldZoom = oldBrowserZoom * this.internalZoom_;
            const currentScrollPos = {
                x: this.position.x / oldZoom,
                y: this.position.y / oldZoom,
            };
            this.contentSizeChanged_();
            const newZoom = this.getZoom();
            // Scroll to the scaled scroll position.
            this.setPosition({
                x: currentScrollPos.x * newZoom,
                y: currentScrollPos.y * newZoom,
            });
            this.updateViewport_();
        });
    }
    /**
     * Gets the width of scrollbars in the viewport in pixels.
     */
    get scrollbarWidth() {
        return this.scrollContent_.scrollbarWidth;
    }
    /**
     * Gets the width of overlay scrollbars in the viewport in pixels, or 0 if not
     * using overlay scrollbars.
     */
    get overlayScrollbarWidth() {
        return this.scrollContent_.overlayScrollbarWidth;
    }
    /** @return The fitting type the viewport is currently in. */
    get fittingType() {
        return this.fittingType_;
    }
    /** @return The y coordinate of the bottom of the given page. */
    getPageBottom_(index) {
        return this.pageDimensions_[index].y + this.pageDimensions_[index].height;
    }
    /**
     * Get the page at a given y position. If there are multiple pages
     * overlapping the given y-coordinate, return the page with the smallest
     * index.
     * @param y The y-coordinate to get the page at.
     * @return The index of a page overlapping the given y-coordinate.
     */
    getPageAtY_(y) {
        assert(y >= 0);
        // Drop decimal part of |y| otherwise it can appear as larger than the
        // bottom of the last page in the document (even without the presence of a
        // horizontal scrollbar).
        y = Math.floor(y);
        let min = 0;
        let max = this.pageDimensions_.length - 1;
        if (max === min) {
            return min;
        }
        while (max >= min) {
            const page = min + Math.floor((max - min) / 2);
            // There might be a gap between the pages, in which case use the bottom
            // of the previous page as the top for finding the page.
            const top = page > 0 ? this.getPageBottom_(page - 1) : 0;
            const bottom = this.getPageBottom_(page);
            if (top <= y && y <= bottom) {
                return page;
            }
            // If the search reached the last page just return that page. |y| is
            // larger than the last page's |bottom|, which can happen either because a
            // horizontal scrollbar exists, or the document is zoomed out enough for
            // free space to exist at the bottom.
            if (page === this.pageDimensions_.length - 1) {
                return page;
            }
            if (top > y) {
                max = page - 1;
            }
            else {
                min = page + 1;
            }
        }
        // Should always return within the while loop above.
        assertNotReached('Could not find page for Y position: ' + y);
    }
    /**
     * Return the last page visible in the viewport. Returns the last index of the
     * document if the viewport is below the document.
     * @return The highest index of the pages visible in the viewport.
     */
    getLastPageInViewport_(viewportRect) {
        const pageAtY = this.getPageAtY_(viewportRect.y + viewportRect.height);
        if (!this.twoUpViewEnabled() || pageAtY % 2 === 1 ||
            pageAtY + 1 >= this.pageDimensions_.length) {
            return pageAtY;
        }
        const nextPage = this.pageDimensions_[pageAtY + 1];
        return getIntersectionArea(viewportRect, nextPage) > 0 ? pageAtY + 1 :
            pageAtY;
    }
    /** @return Whether |point| (in screen coordinates) is inside a page. */
    isPointInsidePage(point) {
        const zoom = this.getZoom();
        const size = this.size;
        const position = this.position;
        const page = this.getPageAtY_((position.y + point.y) / zoom);
        const pageWidth = this.pageDimensions_[page].width * zoom;
        const documentWidth = this.getDocumentDimensions().width * zoom;
        const outerWidth = Math.max(size.width, documentWidth);
        if (pageWidth >= outerWidth) {
            return true;
        }
        const x = point.x + position.x;
        const minX = (outerWidth - pageWidth) / 2;
        const maxX = outerWidth - minX;
        return x >= minX && x <= maxX;
    }
    /**
     * @return The index of the page with the greatest proportion of its area in
     *     the current viewport.
     */
    getMostVisiblePage() {
        const viewportRect = this.getViewportRect_();
        const firstVisiblePage = this.getPageAtY_(viewportRect.y);
        const lastPossibleVisiblePage = this.getLastPageInViewport_(viewportRect);
        assert(firstVisiblePage <= lastPossibleVisiblePage);
        if (firstVisiblePage === lastPossibleVisiblePage) {
            return firstVisiblePage;
        }
        let mostVisiblePage = firstVisiblePage;
        let largestIntersection = 0;
        for (let i = firstVisiblePage; i < lastPossibleVisiblePage + 1; i++) {
            const pageArea = this.pageDimensions_[i].width * this.pageDimensions_[i].height;
            // TODO(thestig): check whether we can remove this check.
            if (pageArea <= 0) {
                continue;
            }
            const pageIntersectionArea = getIntersectionArea(this.pageDimensions_[i], viewportRect) / pageArea;
            if (pageIntersectionArea > largestIntersection) {
                mostVisiblePage = i;
                largestIntersection = pageIntersectionArea;
            }
        }
        return mostVisiblePage;
    }
    /**
     * Compute the zoom level for fit-to-page, fit-to-width or fit-to-height.
     * At least one of {fitWidth, fitHeight} must be true.
     * @param pageDimensions The dimensions of a given page in px.
     * @param fitWidth Whether the whole width of the page needs to be in the
     *     viewport.
     * @param fitHeight Whether the whole height of the page needs to be in the
     *     viewport.
     */
    computeFittingZoom_(pageDimensions, fitWidth, fitHeight) {
        assert(fitWidth || fitHeight, 'Invalid parameters. At least one of fitWidth and fitHeight must be ' +
            'true.');
        // First compute the zoom without scrollbars.
        let zoom = this.computeFittingZoomGivenDimensions_(fitWidth, fitHeight, this.window_.offsetWidth, this.window_.offsetHeight, pageDimensions.width, pageDimensions.height);
        // Check if there needs to be any scrollbars.
        const needsScrollbars = this.documentNeedsScrollbars(zoom);
        // If the document fits, just return the zoom.
        if (!needsScrollbars.horizontal && !needsScrollbars.vertical) {
            return zoom;
        }
        const zoomedDimensions = this.getZoomedDocumentDimensions_(zoom);
        assert(zoomedDimensions !== null);
        // Check if adding a scrollbar will result in needing the other scrollbar.
        const scrollbarWidth = this.scrollContent_.scrollbarWidth;
        if (needsScrollbars.horizontal &&
            zoomedDimensions.height > this.window_.offsetHeight - scrollbarWidth) {
            needsScrollbars.vertical = true;
        }
        if (needsScrollbars.vertical &&
            zoomedDimensions.width > this.window_.offsetWidth - scrollbarWidth) {
            needsScrollbars.horizontal = true;
        }
        // Compute available window space.
        const windowWithScrollbars = {
            width: this.window_.offsetWidth,
            height: this.window_.offsetHeight,
        };
        if (needsScrollbars.horizontal) {
            windowWithScrollbars.height -= scrollbarWidth;
        }
        if (needsScrollbars.vertical) {
            windowWithScrollbars.width -= scrollbarWidth;
        }
        // Recompute the zoom.
        zoom = this.computeFittingZoomGivenDimensions_(fitWidth, fitHeight, windowWithScrollbars.width, windowWithScrollbars.height, pageDimensions.width, pageDimensions.height);
        return this.zoomManager_.internalZoomComponent(zoom);
    }
    /**
     * Compute a zoom level given the dimensions to fit and the actual numbers
     * in those dimensions.
     * @param fitWidth Whether to constrain the page width to the window.
     * @param fitHeight Whether to constrain the page height to the window.
     * @param windowWidth Width of the window in px.
     * @param windowHeight Height of the window in px.
     * @param pageWidth Width of the page in px.
     * @param pageHeight Height of the page in px.
     */
    computeFittingZoomGivenDimensions_(fitWidth, fitHeight, windowWidth, windowHeight, pageWidth, pageHeight) {
        // Assumes at least one of {fitWidth, fitHeight} is set.
        let zoomWidth = null;
        let zoomHeight = null;
        if (fitWidth) {
            zoomWidth = windowWidth / pageWidth;
        }
        if (fitHeight) {
            zoomHeight = windowHeight / pageHeight;
        }
        let zoom;
        if (!fitWidth && fitHeight) {
            zoom = zoomHeight;
        }
        else if (fitWidth && !fitHeight) {
            zoom = zoomWidth;
        }
        else {
            // Assume fitWidth && fitHeight
            zoom = Math.min(zoomWidth, zoomHeight);
        }
        return Math.max(zoom, 0);
    }
    /**
     * Set the fitting type and fit within the viewport accordingly.
     * @param params Params needed to determine the page, position, and zoom for
     *     certain fitting types.
     */
    setFittingType(fittingType, params) {
        switch (fittingType) {
            case FittingType.FIT_TO_PAGE:
                this.fitToPage(params);
                return;
            case FittingType.FIT_TO_WIDTH:
                this.fitToWidth(params);
                return;
            case FittingType.FIT_TO_HEIGHT:
                this.fitToHeight(params);
                return;
            case FittingType.FIT_TO_BOUNDING_BOX:
                this.fitToBoundingBox(params);
                return;
            case FittingType.FIT_TO_BOUNDING_BOX_WIDTH:
                this.fitToBoundingBoxDimension(params);
                return;
            case FittingType.FIT_TO_BOUNDING_BOX_HEIGHT:
                this.fitToBoundingBoxDimension(params);
                return;
            case FittingType.NONE:
                // Does not take any params.
                this.fittingType_ = fittingType;
                return;
            default:
                assertNotReached('Invalid fittingType');
        }
    }
    /**
     * Zoom the viewport so that the page width consumes the entire viewport.
     * @param params Optional params that may contain the page to scroll to the
     *     top of. Otherwise, remain at the current scroll position. Params may
     *     also contain the y offset from the top of the page.
     */
    fitToWidth(params) {
        this.mightZoom_(() => {
            this.fittingType_ = FittingType.FIT_TO_WIDTH;
            if (!this.documentDimensions_) {
                return;
            }
            const scrollPosition = {
                x: this.position.x / this.getZoom(),
                y: this.position.y / this.getZoom(),
            };
            if (params?.page !== undefined) {
                scrollPosition.y = this.pageDimensions_[params.page].y;
            }
            if (params?.viewPosition !== undefined) {
                if (params.page === undefined) {
                    scrollPosition.y = this.pageDimensions_[this.getMostVisiblePage()].y;
                }
                scrollPosition.y += params.viewPosition;
            }
            // When computing fit-to-width, the maximum width of a page in the
            // document is used, which is equal to the size of the document width.
            this.setZoomInternal_(this.computeFittingZoom_(this.documentDimensions_, true, false), scrollPosition);
            this.updateViewport_();
        });
    }
    /**
     * Zoom the viewport so that the page height consumes the entire viewport.
     * @param params Optional params that may contain the page to scroll to the
     *     top of. Otherwise, remain at the current scroll position. Params may
     *     also contain the x offset from the left of the page.
     */
    fitToHeight(params) {
        this.mightZoom_(() => {
            this.fittingType_ = FittingType.FIT_TO_HEIGHT;
            if (!this.documentDimensions_) {
                return;
            }
            const scrollPosition = {
                x: this.position.x / this.getZoom(),
                y: this.position.y / this.getZoom(),
            };
            const page = params?.page !== undefined ? params.page : this.getMostVisiblePage();
            if (params?.page !== undefined || document.fullscreenElement !== null) {
                scrollPosition.y = this.pageDimensions_[page].y;
            }
            if (params?.viewPosition !== undefined) {
                scrollPosition.x = this.pageDimensions_[page].x + params.viewPosition;
            }
            // When computing fit-to-height, the maximum height of the page is used.
            const dimensions = {
                width: 0,
                height: this.pageDimensions_[page].height,
            };
            this.setZoomInternal_(this.computeFittingZoom_(dimensions, false, true), scrollPosition);
            this.updateViewport_();
        });
    }
    /**
     * Zoom the viewport so that a page consumes as much as of the viewport as
     * possible.
     * @param params Optional params that may contain the page to scroll to the
     *     top of. Also may contain `scrollToTop`, whether to scroll to the top of
     *     the page or not. Defaults to true. Ignored if a page value is provided.
     */
    fitToPage(params) {
        this.mightZoom_(() => {
            this.fittingType_ = FittingType.FIT_TO_PAGE;
            if (!this.documentDimensions_) {
                return;
            }
            const scrollPosition = {
                x: this.position.x / this.getZoom(),
                y: this.position.y / this.getZoom(),
            };
            const page = params?.page !== undefined ? params.page : this.getMostVisiblePage();
            if (params?.page !== undefined || params?.scrollToTop !== false) {
                // Scroll to top of page.
                scrollPosition.x = 0;
                scrollPosition.y = this.pageDimensions_[page].y;
            }
            // Fit to the page's height and the widest page's width.
            const dimensions = {
                width: this.documentDimensions_.width,
                height: this.pageDimensions_[page].height,
            };
            this.setZoomInternal_(this.computeFittingZoom_(dimensions, true, true), scrollPosition);
            this.updateViewport_();
        });
    }
    /** Zoom the viewport to the default zoom. */
    fitToNone() {
        this.mightZoom_(() => {
            this.fittingType_ = FittingType.NONE;
            if (!this.documentDimensions_) {
                return;
            }
            this.setZoomInternal_(Math.min(this.defaultZoom_, this.computeFittingZoom_(this.documentDimensions_, true, false)));
            this.updateViewport_();
        });
    }
    /**
     * Zoom the viewport so that the bounding box of a page consumes the entire
     * viewport.
     * @param params Required params containing the bounding box to fit to and the
     *     page to scroll to.
     */
    fitToBoundingBox(params) {
        const boundingBox = params.boundingBox;
        // Ignore invalid bounding boxes, which can occur if the plugin fails to
        // give a valid box.
        if (!boundingBox.width || !boundingBox.height) {
            return;
        }
        this.fittingType_ = FittingType.FIT_TO_BOUNDING_BOX;
        // Use the smallest zoom that fits the full bounding box on screen.
        const boundingBoxSize = {
            width: boundingBox.width,
            height: boundingBox.height,
        };
        const zoomFitToWidth = this.computeFittingZoom_(boundingBoxSize, true, false);
        const zoomFitToHeight = this.computeFittingZoom_(boundingBoxSize, false, true);
        const newZoom = this.clampZoom_(Math.min(zoomFitToWidth, zoomFitToHeight));
        // Calculate the position.
        const pageInsetDimensions = this.getPageInsetDimensions(params.page);
        const viewportSize = this.size;
        const screenPosition = {
            x: pageInsetDimensions.x + boundingBox.x,
            y: pageInsetDimensions.y + boundingBox.y,
        };
        // Center the bounding box in the dimension that isn't fully zoomed in.
        if (newZoom !== zoomFitToWidth) {
            screenPosition.x -=
                ((viewportSize.width / newZoom) - boundingBox.width) / 2;
        }
        if (newZoom !== zoomFitToHeight) {
            screenPosition.y -=
                ((viewportSize.height / newZoom) - boundingBox.height) / 2;
        }
        this.mightZoom_(() => {
            this.setZoomInternal_(newZoom, screenPosition);
        });
    }
    /**
     * If params.viewPosition is defined, use it as the x offset of the given
     * page.
     */
    getBoundingBoxHeightPosition_(params, zoomFitToDimension, newZoom) {
        const boundingBox = params.boundingBox;
        const pageInsetDimensions = this.getPageInsetDimensions(params.page);
        const screenPosition = {
            x: pageInsetDimensions.x,
            y: pageInsetDimensions.y + boundingBox.y,
        };
        // Center the bounding box in the y dimension if not fully zoomed in.
        if (newZoom !== zoomFitToDimension) {
            screenPosition.y -=
                ((this.size.height / newZoom) - boundingBox.height) / 2;
        }
        if (params.viewPosition !== undefined) {
            screenPosition.x += params.viewPosition;
        }
        return screenPosition;
    }
    /**
     * If params.viewPosition is defined, use it as the y offset of the given
     * page.
     */
    getBoundingBoxWidthPosition_(params, zoomFitToDimension, newZoom) {
        const boundingBox = params.boundingBox;
        const pageInsetDimensions = this.getPageInsetDimensions(params.page);
        const screenPosition = {
            x: pageInsetDimensions.x + boundingBox.x,
            y: pageInsetDimensions.y,
        };
        // Center the bounding box in the x dimension if not fully zoomed in.
        if (newZoom !== zoomFitToDimension) {
            screenPosition.x -= ((this.size.width / newZoom) - boundingBox.width) / 2;
        }
        if (params.viewPosition !== undefined) {
            screenPosition.y += params.viewPosition;
        }
        return screenPosition;
    }
    /**
     * Zoom the viewport so that the given dimension of the bounding box of a page
     * consumes the entire viewport.
     * @param params Required params containing the bounding box to fit to, the
     *     page to scroll to, and the dimension to fit to. Optionally contains the
     *     offset of the given page.
     */
    fitToBoundingBoxDimension(params) {
        const boundingBox = params.boundingBox;
        const fitToWidth = params.fitToWidth;
        // Ignore invalid bounding boxes, which can occur if the plugin fails to
        // give a valid box.
        if (!boundingBox.width || !boundingBox.height) {
            return;
        }
        this.fittingType_ = fitToWidth ? FittingType.FIT_TO_BOUNDING_BOX_WIDTH :
            FittingType.FIT_TO_BOUNDING_BOX_HEIGHT;
        const zoomFitToDimension = this.computeFittingZoom_(boundingBox, fitToWidth, !fitToWidth);
        const newZoom = this.clampZoom_(zoomFitToDimension);
        const screenPosition = fitToWidth ?
            this.getBoundingBoxWidthPosition_(params, zoomFitToDimension, newZoom) :
            this.getBoundingBoxHeightPosition_(params, zoomFitToDimension, newZoom);
        this.mightZoom_(() => {
            this.setZoomInternal_(newZoom, screenPosition);
        });
    }
    /** Zoom out to the next predefined zoom level. */
    zoomOut() {
        this.mightZoom_(() => {
            this.fittingType_ = FittingType.NONE;
            let nextZoom = this.presetZoomFactors_[0];
            for (let i = 0; i < this.presetZoomFactors_.length; i++) {
                if (this.presetZoomFactors_[i] < this.internalZoom_) {
                    nextZoom = this.presetZoomFactors_[i];
                }
            }
            this.setZoomInternal_(nextZoom);
            this.updateViewport_();
            this.announceZoom_();
        });
    }
    /** Zoom in to the next predefined zoom level. */
    zoomIn() {
        this.mightZoom_(() => {
            this.fittingType_ = FittingType.NONE;
            const maxZoomIndex = this.presetZoomFactors_.length - 1;
            let nextZoom = this.presetZoomFactors_[maxZoomIndex];
            for (let i = maxZoomIndex; i >= 0; i--) {
                if (this.presetZoomFactors_[i] > this.internalZoom_) {
                    nextZoom = this.presetZoomFactors_[i];
                }
            }
            this.setZoomInternal_(nextZoom);
            this.updateViewport_();
            this.announceZoom_();
        });
    }
    /** Announce zoom level for screen readers. */
    announceZoom_() {
        const announcer = getInstance();
        const ariaLabel = loadTimeData.getString('zoomTextInputAriaLabel');
        const zoom = Math.round(100 * this.getZoom());
        announcer.announce(`${ariaLabel}: ${zoom}%`);
    }
    pageUpDownSpaceHandler_(e, formFieldFocused) {
        // Avoid scrolling if the space key is down while a form field is focused
        // on since the user might be typing space into the field.
        if (formFieldFocused && e.key === ' ') {
            this.window_.dispatchEvent(new CustomEvent('scroll-avoided-for-testing'));
            return;
        }
        const isDown = e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey);
        // Go to the previous/next page if we are fit-to-page or fit-to-height.
        if (this.isPagedMode_()) {
            isDown ? this.goToNextPage() : this.goToPreviousPage();
            // Since we do the movement of the page.
            e.preventDefault();
        }
        else if (isCrossFrameKeyEvent(e)) {
            // Web scrolls by a fraction of the viewport height. Use the same
            // fractional value as `cc::kMinFractionToStepWhenPaging` in
            // cc/input/scroll_utils.h. The values must be kept in sync.
            const MIN_FRACTION_TO_STEP_WHEN_PAGING = 0.875;
            const scrollOffset = (isDown ? 1 : -1) * this.size.height *
                MIN_FRACTION_TO_STEP_WHEN_PAGING;
            this.setPosition({
                x: this.position.x,
                y: this.position.y + scrollOffset,
            }, this.smoothScrolling_);
        }
        this.window_.dispatchEvent(new CustomEvent('scroll-proceeded-for-testing'));
    }
    arrowLeftRightHandler_(e, formFieldFocused) {
        if (formFieldFocused || hasKeyModifiers(e)) {
            return;
        }
        // Go to the previous/next page if there are no horizontal scrollbars.
        const isRight = e.key === 'ArrowRight';
        if (!this.documentHasScrollbars().horizontal) {
            isRight ? this.goToNextPage() : this.goToPreviousPage();
            // Since we do the movement of the page.
            e.preventDefault();
        }
        else if (isCrossFrameKeyEvent(e)) {
            const scrollOffset = (isRight ? 1 : -1) * SCROLL_INCREMENT;
            this.setPosition({
                x: this.position.x + scrollOffset,
                y: this.position.y,
            }, this.smoothScrolling_);
        }
    }
    arrowUpDownHandler_(e, formFieldFocused) {
        if (formFieldFocused || hasKeyModifiers(e)) {
            return;
        }
        // Go to the previous/next page if Presentation mode is on.
        const isDown = e.key === 'ArrowDown';
        if (document.fullscreenElement !== null) {
            isDown ? this.goToNextPage() : this.goToPreviousPage();
            e.preventDefault();
        }
        else if (isCrossFrameKeyEvent(e)) {
            const scrollOffset = (isDown ? 1 : -1) * SCROLL_INCREMENT;
            this.setPosition({
                x: this.position.x,
                y: this.position.y + scrollOffset,
            });
        }
    }
    /**
     * Handle certain directional key events.
     * @param formFieldFocused Whether a form field is currently focused.
     * @return Whether the event was handled.
     */
    handleDirectionalKeyEvent(e, formFieldFocused) {
        switch (e.key) {
            case ' ':
                this.pageUpDownSpaceHandler_(e, formFieldFocused);
                return true;
            case 'PageUp':
            case 'PageDown':
                if (hasKeyModifiers(e)) {
                    return false;
                }
                this.pageUpDownSpaceHandler_(e, formFieldFocused);
                return true;
            case 'ArrowLeft':
            case 'ArrowRight':
                this.arrowLeftRightHandler_(e, formFieldFocused);
                return true;
            case 'ArrowDown':
            case 'ArrowUp':
                this.arrowUpDownHandler_(e, formFieldFocused);
                return true;
            default:
                return false;
        }
    }
    /**
     * Go to the next page. If the document is in two-up view, go to the left page
     * of the next row. Public for tests.
     */
    goToNextPage() {
        const currentPage = this.getMostVisiblePage();
        const nextPageOffset = (this.twoUpViewEnabled() && currentPage % 2 === 0) ? 2 : 1;
        this.goToPage(currentPage + nextPageOffset);
    }
    /**
     * Go to the previous page. If the document is in two-up view, go to the left
     * page of the previous row. Public for tests.
     */
    goToPreviousPage() {
        const currentPage = this.getMostVisiblePage();
        let previousPageOffset = -1;
        if (this.twoUpViewEnabled()) {
            previousPageOffset = (currentPage % 2 === 0) ? -2 : -3;
        }
        this.goToPage(currentPage + previousPageOffset);
    }
    /**
     * Go to the given page index.
     * @param page the index of the page to go to. zero-based.
     */
    goToPage(page) {
        this.goToPageAndXy(page, 0, 0);
    }
    /**
     * Go to the given y position in the given page index.
     * @param page the index of the page to go to. zero-based.
     */
    goToPageAndXy(page, x, y) {
        this.mightZoom_(() => {
            if (this.pageDimensions_.length === 0) {
                return;
            }
            if (page < 0) {
                page = 0;
            }
            if (page >= this.pageDimensions_.length) {
                page = this.pageDimensions_.length - 1;
            }
            const dimensions = this.pageDimensions_[page];
            // If `x` or `y` is not a valid number or specified, then that
            // coordinate of the current viewport position should be retained.
            const currentCoords = this.retrieveCurrentScreenCoordinates_();
            if (x === undefined || Number.isNaN(x)) {
                x = currentCoords.x;
            }
            if (y === undefined || Number.isNaN(y)) {
                y = currentCoords.y;
            }
            this.setPosition({
                x: (dimensions.x + x) * this.getZoom(),
                y: (dimensions.y + y) * this.getZoom(),
            });
            this.updateViewport_();
        });
    }
    setDocumentDimensions(documentDimensions) {
        this.mightZoom_(() => {
            const initialDimensions = !this.documentDimensions_;
            const initialRotations = this.getClockwiseRotations();
            this.documentDimensions_ = documentDimensions;
            // Override layout direction based on isRTL().
            if (this.documentDimensions_.layoutOptions) {
                if (isRTL()) {
                    // `base::i18n::TextDirection::RIGHT_TO_LEFT`
                    this.documentDimensions_.layoutOptions.direction = 1;
                }
                else {
                    // `base::i18n::TextDirection::LEFT_TO_RIGHT`
                    this.documentDimensions_.layoutOptions.direction = 2;
                }
            }
            this.pageDimensions_ = this.documentDimensions_.pageDimensions;
            if (initialDimensions) {
                this.setZoomInternal_(Math.min(this.defaultZoom_, this.computeFittingZoom_(this.documentDimensions_, true, false)));
                this.setPosition({ x: 0, y: 0 });
            }
            this.contentSizeChanged_();
            this.resize_();
            if (initialRotations !== this.getClockwiseRotations()) {
                this.announceRotation_();
            }
        });
    }
    /** Announce state of rotation, clockwise, for screen readers. */
    announceRotation_() {
        const announcer = getInstance();
        const clockwiseRotationsDegrees = this.getClockwiseRotations() * 90;
        const rotationStateLabel = loadTimeData.getString(`rotationStateLabel${clockwiseRotationsDegrees}`);
        announcer.announce(rotationStateLabel);
    }
    /** @return The bounds for page `page` minus the shadows. */
    getPageInsetDimensions(page) {
        const pageDimensions = this.pageDimensions_[page];
        const shadow = PAGE_SHADOW;
        return {
            x: pageDimensions.x + shadow.left,
            y: pageDimensions.y + shadow.top,
            width: pageDimensions.width - shadow.left - shadow.right,
            height: pageDimensions.height - shadow.top - shadow.bottom,
        };
    }
    /**
     * Get the coordinates of the page contents (excluding the page shadow)
     * relative to the screen.
     * @param page The index of the page to get the rect for.
     * @return A rect representing the page in screen coordinates.
     */
    getPageScreenRect(page) {
        if (!this.documentDimensions_) {
            return { x: 0, y: 0, width: 0, height: 0 };
        }
        if (page >= this.pageDimensions_.length) {
            page = this.pageDimensions_.length - 1;
        }
        const pageDimensions = this.pageDimensions_[page];
        // Compute the page dimensions minus the shadows.
        const insetDimensions = this.getPageInsetDimensions(page);
        // Compute the x-coordinate of the page within the document.
        // TODO(raymes): This should really be set when the PDF plugin passes the
        // page coordinates, but it isn't yet.
        const x = (this.documentDimensions_.width - pageDimensions.width) / 2 +
            PAGE_SHADOW.left;
        // Compute the space on the left of the document if the document fits
        // completely in the screen.
        const zoom = this.getZoom();
        const scrollbarWidth = this.documentHasScrollbars().vertical ?
            this.scrollContent_.scrollbarWidth :
            0;
        let spaceOnLeft = (this.size.width - scrollbarWidth -
            this.documentDimensions_.width * zoom) /
            2;
        spaceOnLeft = Math.max(spaceOnLeft, 0);
        return {
            x: x * zoom + spaceOnLeft - this.scrollContent_.scrollLeft,
            y: insetDimensions.y * zoom - this.scrollContent_.scrollTop,
            width: insetDimensions.width * zoom,
            height: insetDimensions.height * zoom,
        };
    }
    /**
     * Check if the current fitting type is a paged mode.
     * In a paged mode, page up and page down scroll to the top of the
     * previous/next page and part of the page is under the toolbar.
     * @return Whether the current fitting type is a paged mode.
     */
    isPagedMode_() {
        return (this.fittingType_ === FittingType.FIT_TO_PAGE ||
            this.fittingType_ === FittingType.FIT_TO_HEIGHT);
    }
    /**
     * Retrieves the in-screen coordinates of the current viewport position.
     */
    retrieveCurrentScreenCoordinates_() {
        const currentPage = this.getMostVisiblePage();
        const dimension = this.pageDimensions_[currentPage];
        const x = this.position.x / this.getZoom() - dimension.x;
        const y = this.position.y / this.getZoom() - dimension.y;
        return { x: x, y: y };
    }
    /**
     * Handles a navigation request to a destination from the current controller.
     * @param x The in-screen x coordinate for the destination.
     *     If `x` is undefined, retain current x coordinate value.
     * @param y The in-screen y coordinate for the destination.
     *     If `y` is undefined, retain current y coordinate value.
     */
    handleNavigateToDestination(page, x, y, zoom) {
        // TODO(crbug.com/1430193): Handle view parameters and fitting types.
        if (zoom) {
            this.setZoom(zoom);
        }
        this.goToPageAndXy(page, x, y);
    }
    setSmoothScrolling(isSmooth) {
        this.smoothScrolling_ = isSmooth;
    }
    /** @param point The position to which to scroll the viewport. */
    scrollTo(point) {
        let changed = false;
        const newPosition = this.position;
        if (point.x !== undefined && point.x !== newPosition.x) {
            newPosition.x = point.x;
            changed = true;
        }
        if (point.y !== undefined && point.y !== newPosition.y) {
            newPosition.y = point.y;
            changed = true;
        }
        if (changed) {
            this.setPosition(newPosition);
        }
    }
    /** @param delta The delta by which to scroll the viewport. */
    scrollBy(delta) {
        const newPosition = this.position;
        newPosition.x += delta.x;
        newPosition.y += delta.y;
        this.scrollTo(newPosition);
    }
    /** Removes all events being tracked from the tracker. */
    resetTracker() {
        if (this.tracker_) {
            this.tracker_.removeAll();
        }
    }
    /**
     * Dispatches a gesture external to this viewport.
     */
    dispatchGesture(gesture) {
        this.gestureDetector_.getEventTarget().dispatchEvent(new CustomEvent(gesture.type, { detail: gesture.detail }));
    }
    /**
     * Dispatches a swipe event of |direction| external to this viewport.
     */
    dispatchSwipe(direction) {
        this.swipeDetector_.getEventTarget().dispatchEvent(new CustomEvent('swipe', { detail: direction }));
    }
    /**
     * A callback that's called when an update to a pinch zoom is detected.
     */
    onPinchUpdate_(e) {
        // Throttle number of pinch events to one per frame.
        if (this.sentPinchEvent_) {
            return;
        }
        this.sentPinchEvent_ = true;
        window.requestAnimationFrame(() => {
            this.sentPinchEvent_ = false;
            this.mightZoom_(() => {
                const { direction, center, startScaleRatio } = e.detail;
                this.pinchPhase_ = direction === 'out' ? PinchPhase.UPDATE_ZOOM_OUT :
                    PinchPhase.UPDATE_ZOOM_IN;
                const scaleDelta = startScaleRatio / this.prevScale_;
                if (this.firstPinchCenterInFrame_ != null) {
                    this.pinchPanVector_ =
                        vectorDelta(center, this.firstPinchCenterInFrame_);
                }
                const needsScrollbars = this.documentNeedsScrollbars(this.zoomManager_.applyBrowserZoom(this.clampZoom_(this.internalZoom_ * scaleDelta)));
                this.pinchCenter_ = center;
                // If there's no horizontal scrolling, keep the content centered so
                // the user can't zoom in on the non-content area.
                // TODO(mcnee) Investigate other ways of scaling when we don't have
                // horizontal scrolling. We want to keep the document centered,
                // but this causes a potentially awkward transition when we start
                // using the gesture center.
                if (!needsScrollbars.horizontal) {
                    this.pinchCenter_ = {
                        x: this.window_.offsetWidth / 2,
                        y: this.window_.offsetHeight / 2,
                    };
                }
                else if (this.keepContentCentered_) {
                    this.oldCenterInContent_ = this.pluginToContent_(this.pinchCenter_);
                    this.keepContentCentered_ = false;
                }
                this.fittingType_ = FittingType.NONE;
                this.setPinchZoomInternal_(scaleDelta, center);
                this.updateViewport_();
                this.prevScale_ = startScaleRatio;
            });
        });
    }
    /**
     * A callback that's called when the end of a pinch zoom is detected.
     */
    onPinchEnd_(e) {
        // Using rAF for pinch end prevents pinch updates scheduled by rAF getting
        // sent after the pinch end.
        window.requestAnimationFrame(() => {
            this.mightZoom_(() => {
                const { center, startScaleRatio } = e.detail;
                this.pinchPhase_ = PinchPhase.END;
                const scaleDelta = startScaleRatio / this.prevScale_;
                this.pinchCenter_ = center;
                this.setPinchZoomInternal_(scaleDelta, this.pinchCenter_);
                this.updateViewport_();
            });
            this.pinchPhase_ = PinchPhase.NONE;
            this.pinchPanVector_ = null;
            this.pinchCenter_ = null;
            this.firstPinchCenterInFrame_ = null;
        });
    }
    /**
     * A callback that's called when the start of a pinch zoom is detected.
     */
    onPinchStart_(e) {
        // Disable pinch gestures in Presentation mode.
        if (document.fullscreenElement !== null) {
            return;
        }
        // We also use rAF for pinch start, so that if there is a pinch end event
        // scheduled by rAF, this pinch start will be sent after.
        window.requestAnimationFrame(() => {
            this.pinchPhase_ = PinchPhase.START;
            this.prevScale_ = 1;
            this.oldCenterInContent_ = this.pluginToContent_(e.detail.center);
            const needsScrollbars = this.documentNeedsScrollbars(this.getZoom());
            this.keepContentCentered_ = !needsScrollbars.horizontal;
            // We keep track of beginning of the pinch.
            // By doing so we will be able to compute the pan distance.
            this.firstPinchCenterInFrame_ = e.detail.center;
        });
    }
    /**
     * A callback that's called when a Presentation mode wheel event is detected.
     */
    onWheel_(e) {
        if (e.detail.direction === 'down') {
            this.goToNextPage();
        }
        else {
            this.goToPreviousPage();
        }
    }
    getGestureDetectorForTesting() {
        return this.gestureDetector_;
    }
    /**
     * A callback that's called when a left/right swipe is detected in
     * Presentation mode.
     */
    onSwipe_(e) {
        // Left and right swipes are enabled only in Presentation mode.
        if (document.fullscreenElement === null && !this.fullscreenForTesting_) {
            return;
        }
        if ((e.detail === SwipeDirection.RIGHT_TO_LEFT && !isRTL()) ||
            (e.detail === SwipeDirection.LEFT_TO_RIGHT && isRTL())) {
            this.goToNextPage();
        }
        else {
            this.goToPreviousPage();
        }
    }
    enableFullscreenForTesting() {
        this.fullscreenForTesting_ = true;
    }
}
/**
 * Enumeration of pinch states.
 * This should match PinchPhase enum in pdf/pdf_view_web_plugin.cc.
 */
var PinchPhase;
(function (PinchPhase) {
    PinchPhase[PinchPhase["NONE"] = 0] = "NONE";
    PinchPhase[PinchPhase["START"] = 1] = "START";
    PinchPhase[PinchPhase["UPDATE_ZOOM_OUT"] = 2] = "UPDATE_ZOOM_OUT";
    PinchPhase[PinchPhase["UPDATE_ZOOM_IN"] = 3] = "UPDATE_ZOOM_IN";
    PinchPhase[PinchPhase["END"] = 4] = "END";
})(PinchPhase || (PinchPhase = {}));
/**
 * The increment to scroll a page by in pixels when up/down/left/right arrow
 * keys are pressed. Usually we just let the browser handle scrolling on the
 * window when these keys are pressed but in certain cases we need to simulate
 * these events.
 */
const SCROLL_INCREMENT = 40;
/**
 * Returns whether a keyboard event came from another frame.
 */
function isCrossFrameKeyEvent(keyEvent) {
    return !!keyEvent.fromPlugin || !!keyEvent.fromScriptingAPI;
}
/**
 * The width of the page shadow around pages in pixels.
 */
const PAGE_SHADOW = {
    top: 3,
    bottom: 7,
    left: 5,
    right: 5,
};
/**
 * A wrapper around the viewport's scrollable content. This abstraction isolates
 * details concerning internal vs. external scrolling behavior.
 */
class ScrollContent {
    /**
     * @param container The element which contains the scrollable content.
     * @param sizer The element which represents the size of the scrollable
     *     content.
     * @param content The element which is the parent of the scrollable content.
     * @param scrollbarWidth The width of any scrollbars.
     */
    constructor(container, sizer, content, scrollbarWidth) {
        this.target_ = null;
        this.plugin_ = null;
        this.width_ = 0;
        this.height_ = 0;
        this.scrollLeft_ = 0;
        this.scrollTop_ = 0;
        this.unackedScrollsToRemote_ = 0;
        this.container_ = container;
        this.sizer_ = sizer;
        this.content_ = content;
        this.scrollbarWidth_ = scrollbarWidth;
    }
    /**
     * Sets the target for dispatching "scroll" events.
     */
    setEventTarget(target) {
        this.target_ = target;
    }
    /**
     * Dispatches a "scroll" event.
     */
    dispatchScroll_() {
        this.target_ && this.target_.dispatchEvent(new Event('scroll'));
    }
    /**
     * Sets the contents, switching to scrolling locally.
     * @param content The new contents, or null to clear.
     */
    setContent(content) {
        if (content === null) {
            this.sizer_.style.display = 'none';
            return;
        }
        this.attachContent_(content);
        // Switch to local content.
        this.sizer_.style.display = 'block';
        if (!this.plugin_) {
            return;
        }
        this.plugin_ = null;
        // Synchronize remote state to local.
        this.updateSize_();
        this.scrollTo(this.scrollLeft_, this.scrollTop_);
    }
    /**
     * Sets the contents, switching to scrolling remotely.
     * @param content The new contents.
     */
    setRemoteContent(content) {
        this.attachContent_(content);
        // Switch to remote content.
        const previousScrollLeft = this.scrollLeft;
        const previousScrollTop = this.scrollTop;
        this.sizer_.style.display = 'none';
        assert(!this.plugin_);
        this.plugin_ = content;
        // Synchronize local state to remote.
        this.updateSize_();
        this.scrollTo(previousScrollLeft, previousScrollTop);
    }
    /**
     * Attaches the contents to the DOM.
     * @param content The new contents.
     */
    attachContent_(content) {
        // We don't actually replace the content in the DOM, as the controller
        // implementations take care of "removal" in controller-specific ways:
        //
        // 1. Plugin content gets added once, then hidden and revealed using CSS.
        // 2. Ink content gets removed directly from the DOM on unload.
        if (!content.parentNode) {
            this.content_.appendChild(content);
        }
        assert(content.parentNode === this.content_);
    }
    /**
     * Synchronizes scroll position from remote content.
     */
    syncScrollFromRemote(position) {
        if (this.unackedScrollsToRemote_ > 0) {
            // Don't overwrite scroll position while scrolls-to-remote are pending.
            // TODO(crbug.com/1246398): Don't need this if we make this synchronous
            // again, by moving more logic to the plugin frame.
            return;
        }
        if (this.scrollLeft_ === position.x && this.scrollTop_ === position.y) {
            // Don't trigger scroll event if scroll position hasn't changed.
            return;
        }
        this.scrollLeft_ = position.x;
        this.scrollTop_ = position.y;
        this.dispatchScroll_();
    }
    /**
     * Receives acknowledgment of scroll position synchronized to remote content.
     */
    ackScrollToRemote(position) {
        assert(this.unackedScrollsToRemote_ > 0);
        if (--this.unackedScrollsToRemote_ === 0) {
            // Accept remote adjustment when there are no pending scrolls-to-remote.
            this.scrollLeft_ = position.x;
            this.scrollTop_ = position.y;
        }
        this.dispatchScroll_();
    }
    get scrollbarWidth() {
        return this.scrollbarWidth_;
    }
    get overlayScrollbarWidth() {
        let overlayScrollbarWidth = 0;
        // TODO(crbug.com/1286009): Support overlay scrollbars on all platforms.
        // 
        // 
        if (this.plugin_) {
            overlayScrollbarWidth = this.scrollbarWidth_;
        }
        // 
        return overlayScrollbarWidth;
    }
    /** Gets the content size. */
    get size() {
        return {
            width: this.width_,
            height: this.height_,
        };
    }
    /** Sets the content size. */
    setSize(width, height) {
        this.width_ = width;
        this.height_ = height;
        this.updateSize_();
    }
    updateSize_() {
        if (this.plugin_) {
            this.plugin_.postMessage({
                type: 'updateSize',
                width: this.width_,
                height: this.height_,
            });
        }
        else {
            this.sizer_.style.width = `${this.width_}px`;
            this.sizer_.style.height = `${this.height_}px`;
        }
    }
    /**
     * Gets the scroll offset from the left edge.
     */
    get scrollLeft() {
        return this.plugin_ ? this.scrollLeft_ : this.container_.scrollLeft;
    }
    /**
     * Gets the scroll offset from the top edge.
     */
    get scrollTop() {
        return this.plugin_ ? this.scrollTop_ : this.container_.scrollTop;
    }
    /**
     * Scrolls to the given coordinates.
     * @param isSmooth Whether to scroll smoothly.
     */
    scrollTo(x, y, isSmooth = false) {
        if (this.plugin_) {
            // TODO(crbug.com/1277228): Can get NaN if zoom calculations divide by 0.
            x = Number.isNaN(x) ? 0 : x;
            y = Number.isNaN(y) ? 0 : y;
            // Clamp coordinates to scroll limits. Note that the order of min() and
            // max() operations is significant, as each "maximum" can be negative.
            const maxX = this.maxScroll_(this.width_, this.container_.clientWidth, this.height_ > this.container_.clientHeight);
            const maxY = this.maxScroll_(this.height_, this.container_.clientHeight, this.width_ > this.container_.clientWidth);
            if (this.container_.dir === 'rtl') {
                // Right-to-left. If `maxX` > 0, clamp to [-maxX, 0]. Else set to 0.
                x = Math.min(Math.max(-maxX, x), 0);
            }
            else {
                // Left-to-right. If `maxX` > 0, clamp to [0, maxX]. Else set to 0.
                x = Math.max(0, Math.min(x, maxX));
            }
            // If `maxY` > 0, clamp to [0, maxY]. Else set to 0.
            y = Math.max(0, Math.min(y, maxY));
            // To match the DOM's scrollTo() behavior, update the scroll position
            // immediately, but fire the scroll event later (when the remote side
            // triggers `ackScrollToRemote()`).
            this.scrollLeft_ = x;
            this.scrollTop_ = y;
            ++this.unackedScrollsToRemote_;
            this.plugin_.postMessage({
                type: 'syncScrollToRemote',
                x: this.scrollLeft_,
                y: this.scrollTop_,
                isSmooth: isSmooth,
            });
        }
        else {
            this.container_.scrollTo(x, y);
        }
    }
    /**
     * Computes maximum scroll position.
     * @param maxContent The maximum content dimension.
     * @param maxContainer The maximum container dimension.
     * @param hasScrollbar Whether to compensate for a scrollbar.
     */
    maxScroll_(maxContent, maxContainer, hasScrollbar) {
        if (hasScrollbar) {
            maxContainer -= this.scrollbarWidth_;
        }
        // This may return a negative value, which is fine because scroll positions
        // are clamped to a minimum of 0.
        return maxContent - maxContainer;
    }
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Creates a cryptographically secure pseudorandom 128-bit token.
 * @return The generated token as a hex string.
 */
function createToken() {
    const randomBytes = new Uint8Array(16);
    window.crypto.getRandomValues(randomBytes);
    return Array.from(randomBytes, b => b.toString(16).padStart(2, '0')).join('');
}
/** Event types dispatched by the plugin controller. */
var PluginControllerEventType;
(function (PluginControllerEventType) {
    PluginControllerEventType["IS_ACTIVE_CHANGED"] = "PluginControllerEventType.IS_ACTIVE_CHANGED";
    PluginControllerEventType["PLUGIN_MESSAGE"] = "PluginControllerEventType.PLUGIN_MESSAGE";
})(PluginControllerEventType || (PluginControllerEventType = {}));
/**
 * PDF plugin controller singleton, responsible for communicating with the
 * embedded plugin element. Dispatches a
 * `PluginControllerEventType.PLUGIN_MESSAGE` event containing the message from
 * the plugin, if a message type not handled by this controller is received.
 */
class PluginController {
    constructor() {
        this.eventTarget_ = new EventTarget();
        this.isActive_ = false;
        this.delayedMessages_ = [];
        this.uidCounter_ = 1;
    }
    init(plugin, viewport, getIsUserInitiatedCallback, getLoadedCallback) {
        this.plugin_ = plugin;
        this.plugin_.addEventListener('message', e => this.handlePluginMessage_(e), false);
        this.plugin_.postMessage = (message, transfer) => {
            this.delayedMessages_.push({ message, transfer });
        };
        this.viewport_ = viewport;
        this.getIsUserInitiatedCallback_ = getIsUserInitiatedCallback;
        this.getLoadedCallback_ = getLoadedCallback;
        this.pendingTokens_ = new Map();
        this.requestResolverMap_ = new Map();
        this.viewport_.setContent(this.plugin_);
        this.viewport_.setRemoteContent(this.plugin_);
    }
    get isActive() {
        // Check whether `plugin_` is defined as a signal that `init()` was called.
        return !!this.plugin_ && this.isActive_;
    }
    set isActive(isActive) {
        const wasActive = this.isActive;
        this.isActive_ = isActive;
        if (this.isActive === wasActive) {
            return;
        }
        this.eventTarget_.dispatchEvent(new CustomEvent(PluginControllerEventType.IS_ACTIVE_CHANGED, { detail: this.isActive }));
    }
    createUid_() {
        return this.uidCounter_++;
    }
    getEventTarget() {
        return this.eventTarget_;
    }
    viewportChanged() { }
    redo() { }
    undo() { }
    /**
     * Notify the plugin to stop reacting to scroll events while zoom is taking
     * place to avoid flickering.
     */
    beforeZoom() {
        this.postMessage_({ type: 'stopScrolling' });
        if (this.viewport_.pinchPhase === PinchPhase.START) {
            const position = this.viewport_.position;
            const zoom = this.viewport_.getZoom();
            const pinchPhase = this.viewport_.pinchPhase;
            const layoutOptions = this.viewport_.getLayoutOptions();
            this.postMessage_({
                type: 'viewport',
                userInitiated: true,
                zoom: zoom,
                layoutOptions: layoutOptions,
                xOffset: position.x,
                yOffset: position.y,
                pinchPhase: pinchPhase,
            });
        }
    }
    /**
     * Notify the plugin of the zoom change and to continue reacting to scroll
     * events.
     */
    afterZoom() {
        const position = this.viewport_.position;
        const zoom = this.viewport_.getZoom();
        const layoutOptions = this.viewport_.getLayoutOptions();
        const pinchVector = this.viewport_.pinchPanVector || { x: 0, y: 0 };
        const pinchCenter = this.viewport_.pinchCenter || { x: 0, y: 0 };
        const pinchPhase = this.viewport_.pinchPhase;
        this.postMessage_({
            type: 'viewport',
            userInitiated: this.getIsUserInitiatedCallback_(),
            zoom: zoom,
            layoutOptions: layoutOptions,
            xOffset: position.x,
            yOffset: position.y,
            pinchPhase: pinchPhase,
            pinchX: pinchCenter.x,
            pinchY: pinchCenter.y,
            pinchVectorX: pinchVector.x,
            pinchVectorY: pinchVector.y,
        });
    }
    /**
     * Post a message to the plugin. Some messages will cause an async reply to be
     * received through handlePluginMessage_().
     */
    postMessage_(message) {
        this.plugin_.postMessage(message);
    }
    /**
     * Post a message to the plugin, for cases where direct response is expected
     * from the plugin.
     * @return A promise holding the response from the plugin.
     */
    postMessageWithReply_(message) {
        const promiseResolver = new PromiseResolver();
        message.messageId = `${message.type}_${this.createUid_()}`;
        this.requestResolverMap_.set(message.messageId, promiseResolver);
        this.postMessage_(message);
        return promiseResolver.promise;
    }
    rotateClockwise() {
        this.postMessage_({ type: 'rotateClockwise' });
    }
    rotateCounterclockwise() {
        this.postMessage_({ type: 'rotateCounterclockwise' });
    }
    setDisplayAnnotations(displayAnnotations) {
        this.postMessage_({
            type: 'displayAnnotations',
            display: displayAnnotations,
        });
    }
    setTwoUpView(enableTwoUpView) {
        this.postMessage_({
            type: 'setTwoUpView',
            enableTwoUpView: enableTwoUpView,
        });
    }
    print() {
        this.postMessage_({ type: 'print' });
    }
    selectAll() {
        this.postMessage_({ type: 'selectAll' });
    }
    getSelectedText() {
        return this.postMessageWithReply_({ type: 'getSelectedText' });
    }
    /**
     * Post a thumbnail request message to the plugin.
     * @return A promise holding the thumbnail response from the plugin.
     */
    requestThumbnail(page) {
        return this.postMessageWithReply_({
            type: 'getThumbnail',
            // The plugin references pages using zero-based indices.
            page: page - 1,
        });
    }
    resetPrintPreviewMode(printPreviewParams) {
        this.postMessage_({
            type: 'resetPrintPreviewMode',
            url: printPreviewParams.url,
            grayscale: printPreviewParams.grayscale,
            // If the PDF isn't modifiable we send 0 as the page count so that no
            // blank placeholder pages get appended to the PDF.
            pageCount: (printPreviewParams.modifiable ?
                printPreviewParams.pageNumbers.length :
                0),
        });
    }
    /**
     * @param color New color, as a 32-bit integer, of the PDF plugin
     *     background.
     */
    setBackgroundColor(color) {
        this.postMessage_({
            type: 'setBackgroundColor',
            color: color,
        });
    }
    loadPreviewPage(url, index) {
        this.postMessage_({ type: 'loadPreviewPage', url: url, index: index });
    }
    getPageBoundingBox(page) {
        return this.postMessageWithReply_({
            type: 'getPageBoundingBox',
            page,
        });
    }
    getPasswordComplete(password) {
        this.postMessage_({ type: 'getPasswordComplete', password: password });
    }
    /**
     * @return A promise holding the named destination information from the
     *     plugin.
     */
    getNamedDestination(destination) {
        return this.postMessageWithReply_({
            type: 'getNamedDestination',
            namedDestination: destination,
        });
    }
    setPresentationMode(enablePresentationMode) {
        this.postMessage_({
            type: 'setPresentationMode',
            enablePresentationMode,
        });
    }
    save(requestType) {
        const resolver = new PromiseResolver();
        const newToken = createToken();
        this.pendingTokens_.set(newToken, resolver);
        this.postMessage_({
            type: 'save',
            token: newToken,
            saveRequestType: requestType,
        });
        return resolver.promise;
    }
    saveAttachment(index) {
        return this.postMessageWithReply_({
            type: 'saveAttachment',
            attachmentIndex: index,
        });
    }
    async load(_fileName, data) {
        // Load `data` into the PDF plugin. The plugin transfers the data to be
        // loaded within the inner frame.
        this.viewport_.setRemoteContent(this.plugin_);
        this.plugin_.postMessage({ type: 'loadArray', dataToLoad: data }, [data]);
        this.plugin_.style.display = 'block';
        await this.getLoadedCallback_();
        this.isActive = true;
    }
    unload() {
        this.plugin_.style.display = 'none';
        this.isActive = false;
    }
    /**
     * Binds an event handler for messages received from the plugin.
     *
     * TODO(crbug.com/1228987): Remove this method when a permanent postMessage()
     * bridge is implemented for the viewer.
     */
    bindMessageHandler(port) {
        assert(this.delayedMessages_ !== null);
        assert(this.plugin_);
        const delayedMessages = this.delayedMessages_;
        this.delayedMessages_ = null;
        this.plugin_.postMessage = port.postMessage.bind(port);
        port.onmessage = e => this.handlePluginMessage_(e);
        for (const { message, transfer } of delayedMessages) {
            this.plugin_.postMessage(message, transfer);
        }
    }
    /**
     * An event handler for handling message events received from the plugin.
     */
    handlePluginMessage_(messageEvent) {
        const messageData = messageEvent.data;
        // Handle case where this Plugin->Page message is a direct response
        // to a previous Page->Plugin message
        if (messageData.messageId !== undefined) {
            const resolver = this.requestResolverMap_.get(messageData.messageId) || null;
            assert(resolver !== null);
            this.requestResolverMap_.delete(messageData.messageId);
            resolver.resolve(messageData);
            return;
        }
        switch (messageData.type) {
            case 'gesture':
                this.viewport_.dispatchGesture(messageData.gesture);
                break;
            case 'swipe':
                this.viewport_.dispatchSwipe(messageData.direction);
                break;
            case 'goToPage':
                this.viewport_.goToPage(messageData.page);
                break;
            case 'setScrollPosition':
                this.viewport_.scrollTo(messageData);
                break;
            case 'scrollBy':
                this.viewport_.scrollBy(messageData);
                break;
            case 'syncScrollFromRemote':
                this.viewport_.syncScrollFromRemote(messageData);
                break;
            case 'ackScrollToRemote':
                this.viewport_.ackScrollToRemote(messageData);
                break;
            case 'saveData':
                this.saveData_(messageData);
                break;
            case 'consumeSaveToken':
                const resolver = this.pendingTokens_.get(messageData.token);
                assert(resolver);
                assert(this.pendingTokens_.delete(messageData.token));
                resolver.resolve(null);
                break;
            default:
                this.eventTarget_.dispatchEvent(new CustomEvent(PluginControllerEventType.PLUGIN_MESSAGE, { detail: messageData }));
        }
    }
    /** Handles the pdf file buffer received from the plugin. */
    saveData_(messageData) {
        // Verify a token that was created by this instance is included to avoid
        // being spammed.
        const resolver = this.pendingTokens_.get(messageData.token);
        assert(resolver);
        assert(this.pendingTokens_.delete(messageData.token));
        if (!messageData.dataToSave) {
            resolver.reject();
            return;
        }
        // Verify the file size and the first bytes to make sure it's a PDF. Cap at
        // 100 MB. This cap should be kept in sync with and is also enforced in
        // pdf/out_of_process_instance.cc.
        const MIN_FILE_SIZE = '%PDF1.0'.length;
        const MAX_FILE_SIZE = 100 * 1000 * 1000;
        const buffer = messageData.dataToSave;
        const bufView = new Uint8Array(buffer);
        assert(bufView.length <= MAX_FILE_SIZE, `File too large to be saved: ${bufView.length} bytes.`);
        assert(bufView.length >= MIN_FILE_SIZE);
        assert(String.fromCharCode(bufView[0], bufView[1], bufView[2], bufView[3]) ===
            '%PDF');
        resolver.resolve(messageData);
    }
    static getInstance() {
        return instance || (instance = new PluginController());
    }
}
let instance = null;

const styleMod$2 = document.createElement('dom-module');
styleMod$2.appendChild(html `
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);
styleMod$2.register('cr-hidden-style');

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

const template$1 = html `
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
      <g id="password">
        <path d="M5.833 11.667c.458 0 .847-.16 1.167-.479.333-.333.5-.729.5-1.188s-.167-.847-.5-1.167a1.555 1.555 0 0 0-1.167-.5c-.458 0-.854.167-1.188.5A1.588 1.588 0 0 0 4.166 10c0 .458.16.854.479 1.188.333.319.729.479 1.188.479Zm0 3.333c-1.389 0-2.569-.486-3.542-1.458C1.319 12.569.833 11.389.833 10c0-1.389.486-2.569 1.458-3.542C3.264 5.486 4.444 5 5.833 5c.944 0 1.813.243 2.604.729a4.752 4.752 0 0 1 1.833 1.979h7.23c.458 0 .847.167 1.167.5.333.319.5.708.5 1.167v3.958c0 .458-.167.854-.5 1.188A1.588 1.588 0 0 1 17.5 15h-3.75a1.658 1.658 0 0 1-1.188-.479 1.658 1.658 0 0 1-.479-1.188v-1.042H10.27a4.59 4.59 0 0 1-1.813 2A5.1 5.1 0 0 1 5.833 15Zm3.292-4.375h4.625v2.708H15v-1.042a.592.592 0 0 1 .167-.438.623.623 0 0 1 .458-.188c.181 0 .327.063.438.188a.558.558 0 0 1 .188.438v1.042H17.5V9.375H9.125a3.312 3.312 0 0 0-1.167-1.938 3.203 3.203 0 0 0-2.125-.77 3.21 3.21 0 0 0-2.354.979C2.827 8.298 2.5 9.083 2.5 10s.327 1.702.979 2.354a3.21 3.21 0 0 0 2.354.979c.806 0 1.514-.25 2.125-.75.611-.514 1-1.167 1.167-1.958Z"></path>
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
document.head.appendChild(template$1.content);

const template = html `<iron-iconset-svg size="24" name="pdf">
  <svg>
    <defs>
      
      <g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
      <g id="attach-file"><path d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"></path></g>
      <g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
      <g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
      <g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
      <g id="doc-outline"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 5v14H5V5h14m1.1-2H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM11 7h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"></path></g>
      <g id="eraser"><path d="M21.41,11.33 L13.04,20 L4.73,20 L2.58,17.86 C1.8,17.08 1.8,15.83 2.58,15.04 L13.62,3.58 C14.4,2.81 15.68,2.81 16.46,3.58 L21.41,8.51 C22.2,9.29 22.2,10.55 21.41,11.33 L21.41,11.33 Z"></path><polygon points="17.26 18 15.26 20 21.96 20 21.96 18"></polygon></g>
      <g id="fit-to-height"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 10l3.01-4.5L15 10H9zm0 4h6l-2.99 4.5L9 14zm-6 5.01h18V4.99H3v14.02z"></path></g>
      <g id="fit-to-width"><path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM3.5 12.01L8 9v6l-4.5-2.99zM16 15V9l4.5 3.01L16 15zM3 19.01h18V4.99H3v14.02z"></path></g>
      <g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
      <g id="highlighter"><path d="M10.22,9.49 L4.31,15.49 C3.54,16.29 3.61,17.54 4.39,18.34 L0.77,22 L6.45,22 L7.19,21.25 C7.97,22.06 9.14,22.11 9.92,21.3 L15.88,15.25 L10.22,9.49 L10.22,9.49 Z"></path><path style="fill:var(--pen-tip-fill)" d="M22.68,5.49 L19.86,2.62 C19.08,1.82 17.79,1.78 17.02,2.58 L11.27,8.43 L16.93,14.18 L22.62,8.4 C23.39,7.59 23.45,6.29 22.68,5.49 L22.68,5.49 Z"></path><path style="fill:var(--pen-tip-border)" d="M18.4,3c0.3,0,0.5,0.1,0.7,0.3L22,6.2c0.4,0.4,0.4,1.1-0.1,1.5l-5,5.1l-4.3-4.3l5.1-5.2 C17.9,3.1,18.1,3,18.4,3 M18.4,2c-0.5,0-1,0.2-1.4,0.6l-5.8,5.9l5.7,5.8l5.7-5.8c0.8-0.8,0.8-2.1,0.1-2.9l-2.8-2.9 C19.5,2.2,18.9,2,18.4,2L18.4,2z"></path></g>
      <g id="marker"><polygon points="3 17.25 3 21 6.74 21 14.28 13.47 10.53 9.72"></polygon><path style="fill:var(--pen-tip-fill)" d="M18.37,3.3 L20.71,5.63 C21.1,6.02 21.11,6.66 20.72,7.05 L15.35,12.41 L11.59,8.65 L14.12,6.12 L13.39,5.39 L7.73,11.05 L6.33,9.65 L12.7,3.29 C13.09,2.9 13.74,2.91 14.12,3.3 L15.54,4.71 L16.96,3.3 C17.34,2.91 17.98,2.91 18.37,3.3 L18.37,3.3 Z"></path><path style="fill:var(--pen-tip-border)" d="M17.7,4L20,6.3L15.4,11L13,8.6l1.8-1.8l0.7-0.7l-0.7-0.7l-0.2-0.2l0.2,0.2l0.7,0.7l0.7-0.7L17.7,4 M13.4,3 c-0.3,0-0.5,0.1-0.7,0.3L6.3,9.6l1.4,1.4l5.7-5.7l0.7,0.7l-2.5,2.5l3.8,3.8L20.7,7c0.4-0.4,0.4-1,0-1.4l-2.3-2.3 C18.2,3.1,17.9,3,17.7,3S17.2,3.1,17,3.3l-1.4,1.4l-1.4-1.4C13.9,3.1,13.7,3,13.4,3L13.4,3z"></path></g>
      <g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
      <g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
      <g id="rotate-left"><path d="M0 0h24v24H0z" fill="none"></path><path d="M7.34 6.41L.86 12.9l6.49 6.48 6.49-6.48-6.5-6.49zM3.69 12.9l3.66-3.66L11 12.9l-3.66 3.66-3.65-3.66zm15.67-6.26C17.61 4.88 15.3 4 13 4V.76L8.76 5 13 9.24V6c1.79 0 3.58.68 4.95 2.05 2.73 2.73 2.73 7.17 0 9.9C16.58 19.32 14.79 20 13 20c-.97 0-1.94-.21-2.84-.61l-1.49 1.49C10.02 21.62 11.51 22 13 22c2.3 0 4.61-.88 6.36-2.64 3.52-3.51 3.52-9.21 0-12.72z"></path></g>
      <g id="rotate-right"><path d="M15.55 5.55L11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42l1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"></path></g>
      <g id="thumbnails"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"></path></g>
      <g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
    </defs>
  </svg>
</iron-iconset-svg>
`;
document.head.appendChild(template.content);

function getTemplate$2() {
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
const CrButtonElementBase = PaperRippleMixin(PolymerElement);
class CrButtonElement extends CrButtonElementBase {
    static get is() {
        return 'cr-button';
    }
    static get template() {
        return getTemplate$2();
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
     * from PaperRippleMixin.
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

const styleMod$1 = document.createElement('dom-module');
styleMod$1.appendChild(html `
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_up_cr23.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);
styleMod$1.register('cr-icons');

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

function getTemplate$1() {
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
        return getTemplate$1();
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

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
#content{height:100%;position:fixed;width:100%;z-index:1}#plugin{display:block;height:100%;position:absolute;width:100%}#sizer{position:absolute;z-index:0}
    </style>
  </template>
`.content);
styleMod.register('pdf-viewer-shared-style');

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Handles events specific to the PDF viewer and logs the corresponding metrics.
/**
 * Records when the zoom mode is changed to fit a FittingType.
 * @param fittingType the new FittingType.
 */
function recordFitTo(fittingType) {
    if (fittingType === FittingType.FIT_TO_PAGE) {
        record(UserAction.FIT_TO_PAGE);
    }
    else if (fittingType === FittingType.FIT_TO_WIDTH) {
        record(UserAction.FIT_TO_WIDTH);
    }
    // There is no user action to do a fit-to-height, this only happens with the
    // the open param "view=FitV".
}
/** Records the given action to chrome.metricsPrivate. */
function record(action) {
    if (!chrome.metricsPrivate) {
        return;
    }
    if (!actionsMetric) {
        actionsMetric = {
            'metricName': 'PDF.Actions',
            'type': chrome.metricsPrivate.MetricTypeType.HISTOGRAM_LOG,
            'min': 1,
            'max': UserAction.NUMBER_OF_ACTIONS,
            'buckets': UserAction.NUMBER_OF_ACTIONS + 1,
        };
    }
    chrome.metricsPrivate.recordValue(actionsMetric, action);
    if (firstMap.has(action)) {
        const firstAction = firstMap.get(action);
        if (!firstActionRecorded.has(firstAction)) {
            chrome.metricsPrivate.recordValue(actionsMetric, firstAction);
            firstActionRecorded.add(firstAction);
        }
    }
}
/**
 * Records when the user selects to turn on or off PDF OCR.
 * @param userSelection the new UserSelection.
 */
function recordPdfOcrUserSelection(pdfOcrAlwaysActive) {
    // Need to divide Object.keys().length by 2 to get the enum size due to enum
    // reverse mapping in TypeScript.
    const enumSize = Object.keys(PdfOcrUserSelection).length / 2;
    const enumValue = pdfOcrAlwaysActive ?
        PdfOcrUserSelection.TURN_ON_ALWAYS_FROM_MORE_ACTIONS :
        PdfOcrUserSelection.TURN_OFF_FROM_MORE_ACTIONS;
    recordEnumeration('Accessibility.PdfOcr.UserSelection', enumValue, enumSize);
}
/** Records the given enumeration to chrome.metricsPrivate. */
function recordEnumeration(enumKey, enumValue, enumSize) {
    if (!chrome.metricsPrivate) {
        return;
    }
    chrome.metricsPrivate.recordEnumerationValue(enumKey, enumValue, enumSize);
}
function resetForTesting() {
    firstActionRecorded.clear();
    actionsMetric = null;
}
let actionsMetric = null;
const firstActionRecorded = new Set();
// Keep in sync with enums.xml.
// Do not change the numeric values or reuse them since these numbers are
// persisted to logs.
/**
 * User Actions that can be recorded by calling record.
 * The *_FIRST values are recorded automaticlly,
 * eg. record(...ROTATE) will also record ROTATE_FIRST
 * on the first instance.
 */
var UserAction;
(function (UserAction) {
    // Recorded when the document is first loaded. This event serves as
    // denominator to determine percentages of documents in which an action was
    // taken as well as average number of each action per document.
    UserAction[UserAction["DOCUMENT_OPENED"] = 0] = "DOCUMENT_OPENED";
    // Recorded when the document is rotated clockwise or counter-clockwise.
    UserAction[UserAction["ROTATE_FIRST"] = 1] = "ROTATE_FIRST";
    UserAction[UserAction["ROTATE"] = 2] = "ROTATE";
    UserAction[UserAction["FIT_TO_WIDTH_FIRST"] = 3] = "FIT_TO_WIDTH_FIRST";
    UserAction[UserAction["FIT_TO_WIDTH"] = 4] = "FIT_TO_WIDTH";
    UserAction[UserAction["FIT_TO_PAGE_FIRST"] = 5] = "FIT_TO_PAGE_FIRST";
    UserAction[UserAction["FIT_TO_PAGE"] = 6] = "FIT_TO_PAGE";
    // Recorded when a bookmark is followed.
    UserAction[UserAction["FOLLOW_BOOKMARK_FIRST"] = 9] = "FOLLOW_BOOKMARK_FIRST";
    UserAction[UserAction["FOLLOW_BOOKMARK"] = 10] = "FOLLOW_BOOKMARK";
    // Recorded when the page selection is used to navigate to another page.
    UserAction[UserAction["PAGE_SELECTOR_NAVIGATE_FIRST"] = 11] = "PAGE_SELECTOR_NAVIGATE_FIRST";
    UserAction[UserAction["PAGE_SELECTOR_NAVIGATE"] = 12] = "PAGE_SELECTOR_NAVIGATE";
    // Recorded when the user triggers a save of the document.
    UserAction[UserAction["SAVE_FIRST"] = 13] = "SAVE_FIRST";
    UserAction[UserAction["SAVE"] = 14] = "SAVE";
    // Recorded when the user triggers a save of the document and the document
    // has been modified by annotations.
    UserAction[UserAction["SAVE_WITH_ANNOTATION_FIRST"] = 15] = "SAVE_WITH_ANNOTATION_FIRST";
    UserAction[UserAction["SAVE_WITH_ANNOTATION"] = 16] = "SAVE_WITH_ANNOTATION";
    UserAction[UserAction["PRINT_FIRST"] = 17] = "PRINT_FIRST";
    UserAction[UserAction["PRINT"] = 18] = "PRINT";
    UserAction[UserAction["ENTER_ANNOTATION_MODE_FIRST"] = 19] = "ENTER_ANNOTATION_MODE_FIRST";
    UserAction[UserAction["ENTER_ANNOTATION_MODE"] = 20] = "ENTER_ANNOTATION_MODE";
    UserAction[UserAction["EXIT_ANNOTATION_MODE_FIRST"] = 21] = "EXIT_ANNOTATION_MODE_FIRST";
    UserAction[UserAction["EXIT_ANNOTATION_MODE"] = 22] = "EXIT_ANNOTATION_MODE";
    // Recorded when a pen stroke is made.
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_PEN_FIRST"] = 23] = "ANNOTATE_STROKE_TOOL_PEN_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_PEN"] = 24] = "ANNOTATE_STROKE_TOOL_PEN";
    // Recorded when an eraser stroke is made.
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_ERASER_FIRST"] = 25] = "ANNOTATE_STROKE_TOOL_ERASER_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_ERASER"] = 26] = "ANNOTATE_STROKE_TOOL_ERASER";
    // Recorded when a highlighter stroke is made.
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_HIGHLIGHTER_FIRST"] = 27] = "ANNOTATE_STROKE_TOOL_HIGHLIGHTER_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_TOOL_HIGHLIGHTER"] = 28] = "ANNOTATE_STROKE_TOOL_HIGHLIGHTER";
    // Recorded when a stroke is made using touch.
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_TOUCH_FIRST"] = 29] = "ANNOTATE_STROKE_DEVICE_TOUCH_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_TOUCH"] = 30] = "ANNOTATE_STROKE_DEVICE_TOUCH";
    // Recorded when a stroke is made using mouse.
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_MOUSE_FIRST"] = 31] = "ANNOTATE_STROKE_DEVICE_MOUSE_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_MOUSE"] = 32] = "ANNOTATE_STROKE_DEVICE_MOUSE";
    // Recorded when a stroke is made using pen.
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_PEN_FIRST"] = 33] = "ANNOTATE_STROKE_DEVICE_PEN_FIRST";
    UserAction[UserAction["ANNOTATE_STROKE_DEVICE_PEN"] = 34] = "ANNOTATE_STROKE_DEVICE_PEN";
    // Recorded when two-up view mode is enabled.
    UserAction[UserAction["TWO_UP_VIEW_ENABLE_FIRST"] = 35] = "TWO_UP_VIEW_ENABLE_FIRST";
    UserAction[UserAction["TWO_UP_VIEW_ENABLE"] = 36] = "TWO_UP_VIEW_ENABLE";
    // Recorded when two-up view mode is disabled.
    UserAction[UserAction["TWO_UP_VIEW_DISABLE_FIRST"] = 37] = "TWO_UP_VIEW_DISABLE_FIRST";
    UserAction[UserAction["TWO_UP_VIEW_DISABLE"] = 38] = "TWO_UP_VIEW_DISABLE";
    // Recorded when zoom in button is clicked.
    UserAction[UserAction["ZOOM_IN_FIRST"] = 39] = "ZOOM_IN_FIRST";
    UserAction[UserAction["ZOOM_IN"] = 40] = "ZOOM_IN";
    // Recorded when zoom out button is clicked.
    UserAction[UserAction["ZOOM_OUT_FIRST"] = 41] = "ZOOM_OUT_FIRST";
    UserAction[UserAction["ZOOM_OUT"] = 42] = "ZOOM_OUT";
    // Recorded when the custom zoom input field is modified.
    UserAction[UserAction["ZOOM_CUSTOM_FIRST"] = 43] = "ZOOM_CUSTOM_FIRST";
    UserAction[UserAction["ZOOM_CUSTOM"] = 44] = "ZOOM_CUSTOM";
    // Recorded when a thumbnail is used for navigation.
    UserAction[UserAction["THUMBNAIL_NAVIGATE_FIRST"] = 45] = "THUMBNAIL_NAVIGATE_FIRST";
    UserAction[UserAction["THUMBNAIL_NAVIGATE"] = 46] = "THUMBNAIL_NAVIGATE";
    // Recorded when the user triggers a save of the document and the document
    // has never been modified.
    UserAction[UserAction["SAVE_ORIGINAL_ONLY_FIRST"] = 47] = "SAVE_ORIGINAL_ONLY_FIRST";
    UserAction[UserAction["SAVE_ORIGINAL_ONLY"] = 48] = "SAVE_ORIGINAL_ONLY";
    // Recorded when the user triggers a save of the original document, even
    // though the document has been modified.
    UserAction[UserAction["SAVE_ORIGINAL_FIRST"] = 49] = "SAVE_ORIGINAL_FIRST";
    UserAction[UserAction["SAVE_ORIGINAL"] = 50] = "SAVE_ORIGINAL";
    // Recorded when the user triggers a save of the edited document.
    UserAction[UserAction["SAVE_EDITED_FIRST"] = 51] = "SAVE_EDITED_FIRST";
    UserAction[UserAction["SAVE_EDITED"] = 52] = "SAVE_EDITED";
    // Recorded when the sidenav menu button is clicked.
    UserAction[UserAction["TOGGLE_SIDENAV_FIRST"] = 53] = "TOGGLE_SIDENAV_FIRST";
    UserAction[UserAction["TOGGLE_SIDENAV"] = 54] = "TOGGLE_SIDENAV";
    // Recorded when the thumbnails button in the sidenav is clicked.
    UserAction[UserAction["SELECT_SIDENAV_THUMBNAILS_FIRST"] = 55] = "SELECT_SIDENAV_THUMBNAILS_FIRST";
    UserAction[UserAction["SELECT_SIDENAV_THUMBNAILS"] = 56] = "SELECT_SIDENAV_THUMBNAILS";
    // Recorded when the outline button in the sidenav is clicked.
    UserAction[UserAction["SELECT_SIDENAV_OUTLINE_FIRST"] = 57] = "SELECT_SIDENAV_OUTLINE_FIRST";
    UserAction[UserAction["SELECT_SIDENAV_OUTLINE"] = 58] = "SELECT_SIDENAV_OUTLINE";
    // Recorded when the show/hide annotations overflow menu item is clicked.
    UserAction[UserAction["TOGGLE_DISPLAY_ANNOTATIONS_FIRST"] = 59] = "TOGGLE_DISPLAY_ANNOTATIONS_FIRST";
    UserAction[UserAction["TOGGLE_DISPLAY_ANNOTATIONS"] = 60] = "TOGGLE_DISPLAY_ANNOTATIONS";
    // Recorded when the present menu item is clicked.
    UserAction[UserAction["PRESENT_FIRST"] = 61] = "PRESENT_FIRST";
    UserAction[UserAction["PRESENT"] = 62] = "PRESENT";
    // Recorded when the document properties menu item is clicked.
    UserAction[UserAction["PROPERTIES_FIRST"] = 63] = "PROPERTIES_FIRST";
    UserAction[UserAction["PROPERTIES"] = 64] = "PROPERTIES";
    // Recorded when the attachment button in the sidenav is clicked.
    UserAction[UserAction["SELECT_SIDENAV_ATTACHMENT_FIRST"] = 65] = "SELECT_SIDENAV_ATTACHMENT_FIRST";
    UserAction[UserAction["SELECT_SIDENAV_ATTACHMENT"] = 66] = "SELECT_SIDENAV_ATTACHMENT";
    UserAction[UserAction["NUMBER_OF_ACTIONS"] = 67] = "NUMBER_OF_ACTIONS";
})(UserAction || (UserAction = {}));
function createFirstMap() {
    const entries = Object.entries(UserAction)
        .filter(x => Number.isInteger(x[1]))
        .sort((a, b) => a[1] - b[1]);
    // Exclude the first and last entries (DOCUMENT_OPENED, and NUMBER_OF_ACTIONS)
    // which don't have an equivalent "_FIRST" UserAction.
    const entriesWithFirst = entries.slice(1, entries.length - 1);
    const map = new Map();
    for (let i = 0; i < entriesWithFirst.length; i += 2) {
        map.set(entriesWithFirst[i + 1][1], entriesWithFirst[i][1]);
    }
    return map;
}
// Map from UserAction to the 'FIRST' action. These metrics are recorded
// by PDFMetrics.log the first time each corresponding action occurs.
const firstMap = createFirstMap();

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ViewMode;
(function (ViewMode) {
    ViewMode["FIT"] = "fit";
    ViewMode["FIT_B"] = "fitb";
    ViewMode["FIT_BH"] = "fitbh";
    ViewMode["FIT_BV"] = "fitbv";
    ViewMode["FIT_H"] = "fith";
    ViewMode["FIT_R"] = "fitr";
    ViewMode["FIT_V"] = "fitv";
    ViewMode["XYZ"] = "xyz";
})(ViewMode || (ViewMode = {}));
// Parses the open pdf parameters passed in the url to set initial viewport
// settings for opening the pdf.
class OpenPdfParamsParser {
    /**
     * @param getNamedDestinationCallback Function called to fetch information for
     *     a named destination.
     * @param getPageBoundingBoxCallback Function called to fetch information for
     *     a page's bounding box.
     */
    constructor(getNamedDestinationCallback, getPageBoundingBoxCallback) {
        this.getNamedDestinationCallback_ = getNamedDestinationCallback;
        this.getPageBoundingBoxCallback_ = getPageBoundingBoxCallback;
    }
    /**
     * Calculate the zoom level needed for making viewport focus on a rectangular
     * area in the PDF document.
     * @param size The dimensions of the rectangular area to be focused on.
     * @return The zoom level needed for focusing on the rectangular area. A zoom
     *     level of 0 indicates that the zoom level cannot be calculated with the
     *     given information.
     */
    calculateRectZoomLevel_(size) {
        if (size.height === 0 || size.width === 0) {
            return 0;
        }
        assert(this.viewportDimensions_);
        return Math.min(this.viewportDimensions_.height / size.height, this.viewportDimensions_.width / size.width);
    }
    /**
     * Parse zoom parameter of open PDF parameters. The PDF should be opened at
     * the specified zoom level.
     * @return Map with zoom parameters (zoom and position).
     */
    parseZoomParam_(paramValue) {
        const paramValueSplit = paramValue.split(',');
        if (paramValueSplit.length !== 1 && paramValueSplit.length !== 3) {
            return {};
        }
        // User scale of 100 means zoom value of 100% i.e. zoom factor of 1.0.
        const zoomFactor = parseFloat(paramValueSplit[0]) / 100;
        if (Number.isNaN(zoomFactor)) {
            return {};
        }
        // Handle #zoom=scale.
        if (paramValueSplit.length === 1) {
            return { 'zoom': zoomFactor };
        }
        // Handle #zoom=scale,left,top.
        const position = {
            x: parseFloat(paramValueSplit[1]),
            y: parseFloat(paramValueSplit[2]),
        };
        return { 'position': position, 'zoom': zoomFactor };
    }
    /**
     * Parse view parameter of open PDF parameters. The PDF should be opened at
     * the specified fitting type mode and position.
     * @param paramValue Params to parse.
     * @param pageNumber Page number for bounding box, if there is a fit bounding
     *     box param. `pageNumber` is 1-indexed and must be bounded by 1 and the
     *     number of pages in the PDF, inclusive.
     * @return Map with view parameters (view and viewPosition).
     */
    async parseViewParam_(paramValue, pageNumber) {
        assert(pageNumber > 0);
        if (this.pageCount_) {
            assert(pageNumber <= this.pageCount_);
        }
        const viewModeComponents = paramValue.toLowerCase().split(',');
        if (viewModeComponents.length === 0) {
            return {};
        }
        const params = {};
        const viewMode = viewModeComponents[0];
        let acceptsPositionParam = false;
        // Note that `pageNumber` is 1-indexed, but PDF Viewer is 0-indexed.
        switch (viewMode) {
            case ViewMode.FIT:
                params['view'] = FittingType.FIT_TO_PAGE;
                break;
            case ViewMode.FIT_H:
                params['view'] = FittingType.FIT_TO_WIDTH;
                acceptsPositionParam = true;
                break;
            case ViewMode.FIT_V:
                params['view'] = FittingType.FIT_TO_HEIGHT;
                acceptsPositionParam = true;
                break;
            case ViewMode.FIT_B:
                if (this.pageCount_) {
                    params['view'] = FittingType.FIT_TO_BOUNDING_BOX;
                    params['boundingBox'] =
                        await this.getPageBoundingBoxCallback_(pageNumber - 1);
                }
                break;
            case ViewMode.FIT_BH:
                if (this.pageCount_) {
                    params['view'] = FittingType.FIT_TO_BOUNDING_BOX_WIDTH;
                    params['boundingBox'] =
                        await this.getPageBoundingBoxCallback_(pageNumber - 1);
                    acceptsPositionParam = true;
                }
                break;
            case ViewMode.FIT_BV:
                if (this.pageCount_) {
                    params['view'] = FittingType.FIT_TO_BOUNDING_BOX_HEIGHT;
                    params['boundingBox'] =
                        await this.getPageBoundingBoxCallback_(pageNumber - 1);
                    acceptsPositionParam = true;
                }
                break;
            case ViewMode.FIT_R:
            case ViewMode.XYZ:
                // Should have already been handled in `parseNameddestViewParam_()`.
                break;
            // Invalid view parameter, do nothing.
        }
        if (!acceptsPositionParam || viewModeComponents.length === 1) {
            return params;
        }
        const position = parseFloat(viewModeComponents[1]);
        if (!Number.isNaN(position)) {
            params['viewPosition'] = position;
        }
        return params;
    }
    /**
     * Parse view parameters which come from nameddest.
     * @param paramValue Params to parse.
     * @param pageNumber Page number for bounding box, if there is a fit bounding
     *     box param.
     * @return Map with view parameters.
     */
    async parseNameddestViewParam_(paramValue, pageNumber) {
        const viewModeComponents = paramValue.toLowerCase().split(',');
        const viewMode = viewModeComponents[0];
        const params = {};
        if (viewMode === ViewMode.XYZ && viewModeComponents.length === 4) {
            const x = parseFloat(viewModeComponents[1]);
            const y = parseFloat(viewModeComponents[2]);
            const zoom = parseFloat(viewModeComponents[3]);
            // If zoom is originally 0 for the XYZ view, it is guaranteed to be
            // transformed into "null" by the backend.
            assert(zoom !== 0);
            if (!Number.isNaN(zoom)) {
                params['zoom'] = zoom;
            }
            if (!Number.isNaN(x) || !Number.isNaN(y)) {
                params['position'] = { x: x, y: y };
            }
            return params;
        }
        if (viewMode === ViewMode.FIT_R && viewModeComponents.length === 5) {
            assert(this.viewportDimensions_ !== undefined);
            let x1 = parseFloat(viewModeComponents[1]);
            let y1 = parseFloat(viewModeComponents[2]);
            let x2 = parseFloat(viewModeComponents[3]);
            let y2 = parseFloat(viewModeComponents[4]);
            if (!Number.isNaN(x1) && !Number.isNaN(y1) && !Number.isNaN(x2) &&
                !Number.isNaN(y2)) {
                if (x1 > x2) {
                    [x1, x2] = [x2, x1];
                }
                if (y1 > y2) {
                    [y1, y2] = [y2, y1];
                }
                const rectSize = { width: x2 - x1, height: y2 - y1 };
                params['position'] = { x: x1, y: y1 };
                const zoom = this.calculateRectZoomLevel_(rectSize);
                if (zoom !== 0) {
                    params['zoom'] = zoom;
                }
            }
            return params;
        }
        return this.parseViewParam_(paramValue, pageNumber);
    }
    /** Parse the parameters encoded in the fragment of a URL. */
    parseUrlParams_(url) {
        const hash = new URL(url).hash;
        const params = new URLSearchParams(hash.substring(1));
        // Handle the case of http://foo.com/bar#NAMEDDEST. This is not
        // explicitly mentioned except by example in the Adobe
        // "PDF Open Parameters" document.
        if (Array.from(params).length === 1) {
            const key = Array.from(params.keys())[0];
            if (params.get(key) === '') {
                params.append('nameddest', key);
                params.delete(key);
            }
        }
        return params;
    }
    /** Store the number of pages. */
    setPageCount(pageCount) {
        this.pageCount_ = pageCount;
    }
    /** Store current viewport's dimensions. */
    setViewportDimensions(dimensions) {
        this.viewportDimensions_ = dimensions;
    }
    /**
     * @param url that needs to be parsed.
     * @return Whether the toolbar UI element should be shown.
     */
    shouldShowToolbar(url) {
        const urlParams = this.parseUrlParams_(url);
        const navpanes = urlParams.get('navpanes');
        const toolbar = urlParams.get('toolbar');
        // If navpanes is set to '1', then the toolbar must be shown, regardless of
        // the value of toolbar.
        return navpanes === '1' || toolbar !== '0';
    }
    /**
     * @param url that needs to be parsed.
     * @param sidenavCollapsed the default sidenav state if there are no
     *     overriding open parameters.
     * @return Whether the sidenav UI element should be shown.
     */
    shouldShowSidenav(url, sidenavCollapsed) {
        const urlParams = this.parseUrlParams_(url);
        const navpanes = urlParams.get('navpanes');
        const toolbar = urlParams.get('toolbar');
        // If there are no relevant open parameters, default to the original value.
        if (navpanes === null && toolbar === null) {
            return !sidenavCollapsed;
        }
        return navpanes === '1';
    }
    /**
     * Parse PDF url parameters. These parameters are mentioned in the url
     * and specify actions to be performed when opening pdf files.
     * See http://www.adobe.com/content/dam/Adobe/en/devnet/acrobat/
     * pdfs/pdf_open_parameters.pdf for details.
     * @param url that needs to be parsed.
     */
    async getViewportFromUrlParams(url) {
        const params = { url };
        const urlParams = this.parseUrlParams_(url);
        // `pageNumber` is 1-based.
        let pageNumber = 1;
        if (urlParams.has('page')) {
            pageNumber = parseInt(urlParams.get('page'), 10);
            if (!Number.isNaN(pageNumber) && this.pageCount_) {
                // If necessary, clip `pageNumber` to stay within bounds.
                if (pageNumber < 1) {
                    pageNumber = 1;
                }
                else if (pageNumber > this.pageCount_) {
                    pageNumber = this.pageCount_;
                }
                // goToPage() takes a zero-based page index.
                params['page'] = pageNumber - 1;
            }
        }
        if (urlParams.has('view')) {
            Object.assign(params, await this.parseViewParam_(urlParams.get('view'), pageNumber));
        }
        if (urlParams.has('zoom')) {
            Object.assign(params, this.parseZoomParam_(urlParams.get('zoom')));
        }
        if (params.page === undefined && urlParams.has('nameddest')) {
            const data = await this.getNamedDestinationCallback_(urlParams.get('nameddest'));
            if (data.pageNumber !== -1) {
                params.page = data.pageNumber;
                pageNumber = data.pageNumber;
            }
            if (data.namedDestinationView) {
                Object.assign(params, await this.parseNameddestViewParam_(data.namedDestinationView, pageNumber));
            }
            return params;
        }
        return params;
    }
}

function getTemplate() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style"></style>
    <cr-dialog id="dialog" no-cancel show-on-attach>
      <div slot="title">$i18n{errorDialogTitle}</div>
      <div slot="body">$i18n{pageLoadFailed}</div>
      <div slot="button-container" hidden$="[[!reloadFn]]">
        <cr-button class="action-button" on-click="onReload_">
          $i18n{pageReload}
        </cr-button>
      </div>
    </cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ViewerErrorDialogElement extends PolymerElement {
    static get is() {
        return 'viewer-error-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            reloadFn: Function,
        };
    }
    onReload_() {
        if (this.reloadFn) {
            this.reloadFn();
        }
    }
}
customElements.define(ViewerErrorDialogElement.is, ViewerErrorDialogElement);

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Scrolls the page in response to drag selection with the mouse.
class ViewportScroller {
    /**
     * @param viewport The viewport info of the page.
     * @param plugin The PDF plugin element.
     * @param window The window containing the viewer.
     */
    constructor(viewport, plugin, window) {
        this.mousemoveCallback_ = null;
        this.timerId_ = null;
        this.scrollVelocity_ = null;
        this.lastFrameTime_ = 0;
        this.viewport_ = viewport;
        this.plugin_ = plugin;
        this.window_ = window;
    }
    /**
     * Start scrolling the page by |scrollVelocity_| every
     * |DRAG_TIMER_INTERVAL_MS_|.
     */
    startDragScrollTimer_() {
        if (this.timerId_ !== null) {
            return;
        }
        this.timerId_ = this.window_.setInterval(this.dragScrollPage_.bind(this), DRAG_TIMER_INTERVAL_MS);
        this.lastFrameTime_ = Date.now();
    }
    /** Stops the drag scroll timer if it is active. */
    stopDragScrollTimer_() {
        if (this.timerId_ === null) {
            return;
        }
        this.window_.clearInterval(this.timerId_);
        this.timerId_ = null;
        this.lastFrameTime_ = 0;
    }
    /** Scrolls the viewport by the current scroll velocity. */
    dragScrollPage_() {
        const position = this.viewport_.position;
        const currentFrameTime = Date.now();
        const timeAdjustment = (currentFrameTime - this.lastFrameTime_) / DRAG_TIMER_INTERVAL_MS;
        position.y += (this.scrollVelocity_.y * timeAdjustment);
        position.x += (this.scrollVelocity_.x * timeAdjustment);
        this.viewport_.setPosition(position);
        this.lastFrameTime_ = currentFrameTime;
    }
    /**
     * Calculate the velocity to scroll while dragging using the distance of the
     * cursor outside the viewport.
     * @return Object with x and y direction scroll velocity.
     */
    calculateVelocity_(event) {
        const x = Math.min(Math.max(-event.offsetX, event.offsetX - this.plugin_.offsetWidth, 0), MAX_DRAG_SCROLL_DISTANCE) *
            Math.sign(event.offsetX);
        const y = Math.min(Math.max(-event.offsetY, event.offsetY - this.plugin_.offsetHeight, 0), MAX_DRAG_SCROLL_DISTANCE) *
            Math.sign(event.offsetY);
        return { x: x, y: y };
    }
    /**
     * Handles mousemove events. It updates the scroll velocity and starts and
     * stops timer based on scroll velocity.
     */
    onMousemove_(event) {
        this.scrollVelocity_ = this.calculateVelocity_(event);
        if (!this.scrollVelocity_.x && !this.scrollVelocity_.y) {
            this.stopDragScrollTimer_();
        }
        else if (!this.timerId_) {
            this.startDragScrollTimer_();
        }
    }
    /**
     * Sets whether to scroll the viewport when the mouse is outside the
     * viewport.
     * @param isSelecting Represents selection status.
     */
    setEnableScrolling(isSelecting) {
        if (isSelecting) {
            if (!this.mousemoveCallback_) {
                this.mousemoveCallback_ = this.onMousemove_.bind(this);
            }
            this.plugin_.addEventListener('mousemove', this.mousemoveCallback_, false);
        }
        else {
            this.stopDragScrollTimer_();
            if (this.mousemoveCallback_) {
                this.plugin_.removeEventListener('mousemove', this.mousemoveCallback_, false);
            }
        }
    }
}
/**
 * The period of time in milliseconds to wait between updating the viewport
 * position by the scroll velocity.
 */
const DRAG_TIMER_INTERVAL_MS = 100;
/**
 * The maximum drag scroll distance per DRAG_TIMER_INTERVAL in pixels.
 */
const MAX_DRAG_SCROLL_DISTANCE = 100;

// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @return Width of a scrollbar in pixels */
function getScrollbarWidth() {
    const div = document.createElement('div');
    div.style.visibility = 'hidden';
    div.style.overflow = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.position = 'absolute';
    document.body.appendChild(div);
    const result = div.offsetWidth - div.clientWidth;
    div.parentNode.removeChild(div);
    return result;
}
class PdfViewerBaseElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.browserApi = null;
        this.currentController = null;
        this.documentDimensions = null;
        this.isUserInitiatedEvent = true;
        this.lastViewportPosition = null;
        this.originalUrl = '';
        this.paramsParser = null;
        this.pdfOopifEnabled = false;
        this.tracker = new EventTracker();
        this.viewportScroller = null;
        this.delayedScriptingMessages_ = [];
        this.initialLoadComplete_ = false;
        this.loaded_ = null;
        this.loadState_ = LoadState.LOADING;
        this.overrideSendScriptingMessageForTest_ = false;
        this.parentOrigin_ = null;
        this.parentWindow_ = null;
        this.plugin_ = null;
        this.viewport_ = null;
        this.zoomManager_ = null;
    }
    static get properties() {
        return {
            showErrorDialog: {
                type: Boolean,
                value: false,
            },
            strings: Object,
        };
    }
    /** Whether to enable the new UI. */
    isNewUiEnabled() {
        return true;
    }
    /** Creates the plugin element. */
    createPlugin_() {
        // Create the plugin object dynamically. The plugin element is sized to
        // fill the entire window and is set to be fixed positioning, acting as a
        // viewport. The plugin renders into this viewport according to the scroll
        // position of the window.
        const plugin = document.createElement('embed');
        // NOTE: The plugin's 'id' field must be set to 'plugin' since
        // ChromePrintRenderFrameHelperDeleage::GetPdfElement() in
        // chrome/renderer/printing/chrome_print_render_frame_helper_delegate.cc
        // actually references it.
        plugin.id = 'plugin';
        plugin.type = 'application/x-google-chrome-pdf';
        plugin.setAttribute('original-url', this.originalUrl);
        this.setPluginSrc(plugin);
        plugin.setAttribute('background-color', this.getBackgroundColor().toString());
        const javascript = this.browserApi.getStreamInfo().javascript || 'block';
        plugin.setAttribute('javascript', javascript);
        if (this.browserApi.getStreamInfo().embedded) {
            plugin.setAttribute('top-level-url', this.browserApi.getStreamInfo().tabUrl);
        }
        else {
            plugin.toggleAttribute('full-frame', true);
        }
        if (this.isNewUiEnabled()) {
            plugin.toggleAttribute('pdf-viewer-update-enabled', true);
        }
        // Pass the attributes for loading PDF plugin through the `pdfViewerPrivate`
        // API if OOPIF PDF is enabled, or the `mimeHandlerPrivate` API.
        const attributesForLoading = {
            backgroundColor: this.getBackgroundColor(),
            allowJavascript: javascript === 'allow',
        };
        // PDF viewer only, as Print Preview doesn't set PDF plugin attributes.
        if (this.pdfOopifEnabled) {
            if (chrome.pdfViewerPrivate) {
                chrome.pdfViewerPrivate.setPdfPluginAttributes(attributesForLoading);
            }
        }
        else if (chrome.mimeHandlerPrivate) {
            chrome.mimeHandlerPrivate.setPdfPluginAttributes(attributesForLoading);
        }
        return plugin;
    }
    /**
     * Initializes the PDF viewer.
     * @param browserApi The interface with the browser.
     * @param scroller The viewport's scroller element.
     * @param sizer The viewport's sizer element.
     * @param content The viewport's content element.
     */
    initInternal(browserApi, scroller, sizer, content) {
        this.browserApi = browserApi;
        this.originalUrl = this.browserApi.getStreamInfo().originalUrl;
        this.pdfOopifEnabled =
            document.documentElement.hasAttribute('pdfOopifEnabled');
        record(UserAction.DOCUMENT_OPENED);
        // Create the viewport.
        const defaultZoom = this.browserApi.getZoomBehavior() === ZoomBehavior.MANAGE ?
            this.browserApi.getDefaultZoom() :
            1.0;
        this.viewport_ = new Viewport(scroller, sizer, content, getScrollbarWidth(), defaultZoom);
        this.viewport_.setViewportChangedCallback(() => this.viewportChanged_());
        this.viewport_.setBeforeZoomCallback(() => this.currentController.beforeZoom());
        this.viewport_.setAfterZoomCallback(() => {
            this.currentController.afterZoom();
            this.afterZoom(this.viewport_.getZoom());
        });
        this.viewport_.setUserInitiatedCallback(userInitiated => this.setUserInitiated_(userInitiated));
        window.addEventListener('beforeunload', () => this.resetTrackers_());
        // Handle scripting messages from outside the extension that wish to
        // interact with it. We also send a message indicating that extension has
        // loaded and is ready to receive messages.
        window.addEventListener('message', message => {
            this.handleScriptingMessage(message);
        }, false);
        // Create the plugin.
        this.plugin_ = this.createPlugin_();
        const pluginController = PluginController.getInstance();
        pluginController.init(this.plugin_, this.viewport_, () => this.isUserInitiatedEvent, () => this.loaded);
        pluginController.isActive = true;
        this.currentController = pluginController;
        // Parse open pdf parameters.
        const getNamedDestinationCallback = (destination) => {
            return PluginController.getInstance().getNamedDestination(destination);
        };
        const getPageBoundingBoxCallback = (page) => {
            return PluginController.getInstance().getPageBoundingBox(page);
        };
        this.paramsParser = new OpenPdfParamsParser(getNamedDestinationCallback, getPageBoundingBoxCallback);
        this.tracker.add(pluginController.getEventTarget(), PluginControllerEventType.PLUGIN_MESSAGE, (e) => this.handlePluginMessage(e));
        document.body.addEventListener('change-page-and-xy', e => {
            const point = this.viewport_.convertPageToScreen(e.detail.page, e.detail);
            this.viewport_.goToPageAndXy(e.detail.page, point.x, point.y);
        });
        // Setup the keyboard event listener.
        document.addEventListener('keydown', this.handleKeyEvent.bind(this));
        // Set up the ZoomManager.
        this.zoomManager_ = ZoomManager.create(this.browserApi.getZoomBehavior(), () => this.viewport_.getZoom(), zoom => this.browserApi.setZoom(zoom), this.browserApi.getInitialZoom());
        this.viewport_.setZoomManager(this.zoomManager_);
        this.browserApi.addZoomEventListener((zoom) => this.zoomManager_.onBrowserZoomChange(zoom));
        // TODO(crbug.com/1278476): Don't need this after Pepper plugin goes away.
        this.viewportScroller =
            new ViewportScroller(this.viewport_, this.plugin_, window);
        // Request translated strings.
        chrome.resourcesPrivate.getStrings(chrome.resourcesPrivate.Component.PDF, strings => this.handleStrings(strings));
    }
    /**
     * Updates the loading progress of the document in response to a progress
     * message being received from the content controller.
     * @param progress The progress as a percentage.
     */
    updateProgress(progress) {
        if (progress === -1) {
            // Document load failed.
            this.showErrorDialog = true;
            this.viewport_.setContent(null);
            this.setLoadState(LoadState.FAILED);
            this.sendDocumentLoadedMessage();
        }
        else if (progress === 100) {
            // Document load complete.
            if (this.lastViewportPosition) {
                this.viewport_.setPosition(this.lastViewportPosition);
            }
            this.paramsParser.getViewportFromUrlParams(this.originalUrl)
                .then(params => this.handleUrlParams_(params));
            this.setLoadState(LoadState.SUCCESS);
            this.sendDocumentLoadedMessage();
            while (this.delayedScriptingMessages_.length > 0) {
                this.handleScriptingMessage(this.delayedScriptingMessages_.shift());
            }
        }
        else {
            this.setLoadState(LoadState.LOADING);
        }
    }
    /** @return Whether the documentLoaded message can be sent. */
    readyToSendLoadMessage() {
        return true;
    }
    /**
     * Sends a 'documentLoaded' message to the PdfScriptingApi if the document has
     * finished loading.
     */
    sendDocumentLoadedMessage() {
        if (this.loadState_ === LoadState.LOADING ||
            !this.readyToSendLoadMessage()) {
            return;
        }
        this.sendScriptingMessage({ type: 'documentLoaded', load_state: this.loadState_ });
    }
    /** A callback to be called after the viewport changes. */
    viewportChanged_() {
        if (!this.documentDimensions) {
            return;
        }
        this.updateUiForViewportChange();
        const visiblePage = this.viewport_.getMostVisiblePage();
        const visiblePageDimensions = this.viewport_.getPageScreenRect(visiblePage);
        const size = this.viewport_.size;
        this.paramsParser.setViewportDimensions(size);
        this.sendScriptingMessage({
            type: 'viewport',
            pageX: visiblePageDimensions.x,
            pageY: visiblePageDimensions.y,
            pageWidth: visiblePageDimensions.width,
            viewportWidth: size.width,
            viewportHeight: size.height,
        });
    }
    /**
     * Handles a scripting message from outside the extension (typically sent by
     * PdfScriptingApi in a page containing the extension) to interact with the
     * plugin.
     * @return Whether the message was handled.
     */
    handleScriptingMessage(message) {
        // TODO(crbug.com/1228987): Remove this message handler when a permanent
        // postMessage() bridge is implemented for the viewer.
        if (message.data.type === 'connect') {
            const token = message.data.token;
            if (token === this.browserApi.getStreamInfo().streamUrl) {
                PluginController.getInstance().bindMessageHandler(message.ports[0]);
            }
            else {
                this.dispatchEvent(new CustomEvent('connection-denied-for-testing'));
            }
            return true;
        }
        if (this.parentWindow_ !== message.source) {
            this.parentWindow_ = message.source;
            this.parentOrigin_ = message.origin;
            // Ensure that we notify the embedder if the document is loaded.
            if (this.loadState_ !== LoadState.LOADING) {
                this.sendDocumentLoadedMessage();
            }
        }
        return false;
    }
    /**
     * @return Whether the message was delayed and added to the queue.
     */
    delayScriptingMessage(message) {
        // Delay scripting messages from users of the scripting API until the
        // document is loaded. This simplifies use of the APIs.
        if (this.loadState_ !== LoadState.SUCCESS) {
            this.delayedScriptingMessages_.push(message);
            return true;
        }
        return false;
    }
    /** Sets document dimensions from the current controller. */
    setDocumentDimensions(documentDimensions) {
        this.documentDimensions = documentDimensions;
        this.isUserInitiatedEvent = false;
        this.viewport_.setDocumentDimensions(this.documentDimensions);
        this.paramsParser.setPageCount(documentDimensions.pageDimensions.length);
        this.paramsParser.setViewportDimensions(this.viewport_.size);
        this.isUserInitiatedEvent = true;
    }
    /**
     * @return Resolved when the load state reaches LOADED, rejects on FAILED.
     *     Returns null if no promise has been created, which is the case for
     *     initial load of the PDF.
     */
    get loaded() {
        return this.loaded_ ? this.loaded_.promise : null;
    }
    get viewport() {
        assert(this.viewport_);
        return this.viewport_;
    }
    /**
     * Updates the load state and triggers completion of the `loaded`
     * promise if necessary.
     */
    setLoadState(loadState) {
        if (this.loadState_ === loadState) {
            return;
        }
        assert(loadState === LoadState.LOADING ||
            this.loadState_ === LoadState.LOADING);
        this.loadState_ = loadState;
        if (!this.initialLoadComplete_) {
            this.initialLoadComplete_ = true;
            return;
        }
        if (loadState === LoadState.SUCCESS) {
            this.loaded_.resolve();
        }
        else if (loadState === LoadState.FAILED) {
            this.loaded_.reject();
        }
        else {
            this.loaded_ = new PromiseResolver();
        }
    }
    /**
     * Load a dictionary of translated strings into the UI. Used as a callback for
     * chrome.resourcesPrivate.
     * @param strings Dictionary of translated strings
     */
    handleStrings(strings) {
        if (!strings) {
            return;
        }
        loadTimeData.data = strings;
        // Predefined zoom factors to be used when zooming in/out. These are in
        // ascending order.
        const presetZoomFactors = JSON.parse(loadTimeData.getString('presetZoomFactors'));
        this.viewport_.setZoomFactorRange(presetZoomFactors);
        this.strings = strings;
    }
    /**
     * Handles open pdf parameters. This function updates the viewport as per the
     * parameters appended to the URL when opening pdf. The order is important as
     * later actions can override the effects of previous actions.
     * @param params The open params passed in the URL.
     */
    handleUrlParams_(params) {
        assert(this.viewport_);
        if (params.zoom) {
            this.viewport_.setZoom(params.zoom);
        }
        if (params.position) {
            this.viewport_.goToPageAndXy(params.page || 0, params.position.x, params.position.y);
        }
        if (params.view) {
            this.isUserInitiatedEvent = false;
            const fittingTypeParams = {
                boundingBox: params.boundingBox,
                page: params.page || 0,
                viewPosition: params.viewPosition,
                fitToWidth: params.view === FittingType.FIT_TO_BOUNDING_BOX_WIDTH,
            };
            this.viewport_.setFittingType(params.view, fittingTypeParams);
            this.forceFit(params.view);
            this.isUserInitiatedEvent = true;
        }
        else if (!params.position && params.page) {
            // No fitting type provided, so just go to page.
            this.viewport_.goToPage(params.page);
        }
    }
    /**
     * A callback that sets `isUserInitiatedEvent` to `userInitiated`.
     * @param userInitiated The value to which to set `isUserInitiatedEvent`.
     */
    setUserInitiated_(userInitiated) {
        assert(this.isUserInitiatedEvent !== userInitiated);
        this.isUserInitiatedEvent = userInitiated;
    }
    overrideSendScriptingMessageForTest() {
        this.overrideSendScriptingMessageForTest_ = true;
    }
    /**
     * Send a scripting message outside the extension (typically to
     * PdfScriptingApi in a page containing the extension).
     */
    sendScriptingMessage(message) {
        if (this.parentWindow_ && this.parentOrigin_) {
            let targetOrigin;
            // Only send data back to the embedder if it is from the same origin,
            // unless we're sending it to ourselves (which could happen in the case
            // of tests). We also allow 'documentLoaded' and 'passwordPrompted'
            // messages through as they do not leak sensitive information.
            if (this.parentOrigin_ === window.location.origin) {
                targetOrigin = this.parentOrigin_;
            }
            else if (message.type === 'documentLoaded' ||
                message.type === 'passwordPrompted') {
                targetOrigin = '*';
            }
            else {
                targetOrigin = this.originalUrl;
            }
            try {
                this.parentWindow_.postMessage(message, targetOrigin);
            }
            catch (ok) {
                // TODO(crbug.com/1004425): targetOrigin probably was rejected, such as
                // a "data:" URL. This shouldn't cause this method to throw, though.
            }
        }
    }
    /** Requests to change the viewport fitting type. */
    onFitToChanged(e) {
        this.viewport_.setFittingType(e.detail);
        recordFitTo(e.detail);
    }
    onZoomIn() {
        this.viewport_.zoomIn();
        record(UserAction.ZOOM_IN);
    }
    onZoomChanged(e) {
        this.viewport_.setZoom(e.detail / 100);
        record(UserAction.ZOOM_CUSTOM);
    }
    onZoomOut() {
        this.viewport_.zoomOut();
        record(UserAction.ZOOM_OUT);
    }
    /** Handles a selected text reply from the current controller. */
    handleSelectedTextReply(message) {
        if (this.overrideSendScriptingMessageForTest_) {
            this.overrideSendScriptingMessageForTest_ = false;
            try {
                this.sendScriptingMessage(message);
            }
            finally {
                this.parentWindow_.postMessage('flush', '*');
            }
            return;
        }
        this.sendScriptingMessage(message);
    }
    rotateClockwise() {
        record(UserAction.ROTATE);
        this.currentController.rotateClockwise();
    }
    rotateCounterclockwise() {
        record(UserAction.ROTATE);
        this.currentController.rotateCounterclockwise();
    }
    resetTrackers_() {
        this.viewport_.resetTracker();
        if (this.tracker) {
            this.tracker.removeAll();
        }
    }
}

// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Determines if the event has the platform-equivalent of the Windows ctrl key
 * modifier.
 * @return Whether the event has the ctrl key modifier.
 */
function hasCtrlModifier(e) {
    let hasModifier = e.ctrlKey;
    // 
    return hasModifier;
}
/**
 * Determines if the event has the platform-equivalent of the Windows ctrl key
 * modifier, and only that modifier.
 * @return Whether the event only has the ctrl key modifier.
 */
function hasCtrlModifierOnly(e) {
    let metaModifier = e.metaKey;
    // 
    return hasCtrlModifier(e) && !e.shiftKey && !e.altKey && !metaModifier;
}
/**
 * Whether keydown events should currently be ignored. Events are ignored when
 * an editable element has focus, to allow for proper editing controls.
 * @return Whether keydown events should be ignored.
 */
function shouldIgnoreKeyEvents() {
    const activeElement = getDeepActiveElement();
    assert(activeElement);
    return activeElement.isContentEditable ||
        (activeElement.tagName === 'INPUT' &&
            activeElement.type !== 'radio') ||
        activeElement.tagName === 'TEXTAREA';
}

export { CrIconButtonElement as C, EventTracker as E, FocusOutlineManager as F, GestureDetector as G, OpenPdfParamsParser as O, PromiseResolver as P, SaveRequestType as S, UserAction as U, ViewMode as V, ZoomManager as Z, assertInstanceof as a, assert as b, PluginController as c, PluginControllerEventType as d, FittingType as e, recordPdfOcrUserSelection as f, getDeepActiveElement as g, hasKeyModifiers as h, isRTL as i, PdfViewerBaseElement as j, hasCtrlModifier as k, hasCtrlModifierOnly as l, assertNotReached as m, listenOnce as n, recordFitTo as o, resetForTesting as p, SwipeDetector as q, record as r, shouldIgnoreKeyEvents as s, SwipeDirection as t, PAGE_SHADOW as u, Viewport as v, ViewportScroller as w };
//# sourceMappingURL=shared.rollup.js.map

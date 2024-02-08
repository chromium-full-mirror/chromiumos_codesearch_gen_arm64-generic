import { html, PolymerElement, templatize, Polymer, Base, dom, dedupingMixin, useShadow, dashToCamelCase, Templatizer, OptionalMutableDataBehavior, animationFrame, microTask, idlePeriod, flush, Debouncer, enqueueDebouncer, matches, translate, afterNextRender, timeOut } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { css, html as html$1, CrLitElement, nothing } from 'chrome://resources/lit/v3_0/lit.rollup.js';
import './strings.m.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { addWebUiListener, removeWebUiListener, sendWithPromise } from 'chrome://resources/js/cr.js';

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

const template$7 = html`
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
template$7.setAttribute('style', 'display: none;');
document.head.appendChild(template$7.content);

const template$6 = html `
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
document.head.appendChild(template$6.content);

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

function getCss$6() {
    return css `:host{--cr-drawer-width:256px}:host dialog{--transition-timing:200ms ease;background-color:var(--cr-drawer-background-color,#fff);border:none;border-start-end-radius:var(--cr-drawer-border-start-end-radius,0);border-end-end-radius:var(--cr-drawer-border-end-end-radius,0);bottom:0;left:calc(-1 * var(--cr-drawer-width));margin:0;max-height:initial;max-width:initial;overflow:hidden;padding:0;position:absolute;top:0;transition:left var(--transition-timing);width:var(--cr-drawer-width)}@media (prefers-color-scheme:dark){:host dialog{background:var(--cr-drawer-background-color,var(--google-grey-900)) linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}#container,:host dialog{height:100%;word-break:break-word}:host([show_]) dialog{left:0}:host([align=rtl]) dialog{left:auto;right:calc(-1 * var(--cr-drawer-width));transition:right var(--transition-timing)}:host([show_][align=rtl]) dialog{right:0}:host dialog::backdrop{background:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity var(--transition-timing)}:host([show_]) dialog::backdrop{opacity:1}.drawer-header{align-items:center;border-bottom:var(--cr-separator-line);color:var(--cr-drawer-header-color,inherit);display:flex;font-size:123.08%;font-weight:var(--cr-drawer-header-font-weight,inherit);min-height:56px;padding-inline-start:var(--cr-drawer-header-padding,24px)}@media (prefers-color-scheme:dark){.drawer-header{color:var(--cr-primary-text-color)}}#heading{outline:0}:host ::slotted([slot=body]){height:calc(100% - 56px);overflow:auto}picture{margin-inline-end:16px}#product-logo,picture{height:24px;width:24px}`;
}

function getHtml$3() {
    return html$1 `<!--_html_template_start_--><dialog id="dialog" @cancel="${this.onDialogCancel_}" @click="${this.onDialogClick_}" @close="${this.onDialogClose_}">
  <div id="container" @click="${this.onContainerClick_}">
    <div class="drawer-header">
      <slot name="header-icon">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="//resources/images/chrome_logo_dark.svg">
          <img id="product-logo" srcset="chrome://theme/current-channel-logo@1x, chrome://theme/current-channel-logo@2x 2x" role="presentation">
        </picture>
      </slot>
      <div id="heading" tabindex="-1">${this.heading}</div>
    </div>
    <slot name="body"></slot>
  </div>
</dialog>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrDrawerElement extends CrLitElement {
    constructor() {
        super(...arguments);
        this.align = 'ltr';
    }
    static get is() {
        return 'cr-drawer';
    }
    static get styles() {
        return getCss$6();
    }
    render() {
        return getHtml$3.bind(this)();
    }
    static get properties() {
        return {
            heading: { type: String },
            show_: {
                type: Boolean,
                reflect: true,
            },
            /** The alignment of the drawer on the screen ('ltr' or 'rtl'). */
            align: {
                type: String,
                reflect: true,
            },
        };
    }
    get open() {
        return this.$.dialog.open;
    }
    set open(_value) {
        assertNotReached('Cannot set |open|.');
    }
    /** Toggles the drawer open and close. */
    toggle() {
        if (this.open) {
            this.cancel();
        }
        else {
            this.openDrawer();
        }
    }
    /** Shows drawer and slides it into view. */
    async openDrawer() {
        if (this.open) {
            return;
        }
        this.$.dialog.showModal();
        this.show_ = true;
        await this.updateComplete;
        this.fire('cr-drawer-opening');
        listenOnce(this.$.dialog, 'transitionend', () => {
            this.fire('cr-drawer-opened');
        });
    }
    /**
     * Slides the drawer away, then closes it after the transition has ended. It
     * is up to the owner of this component to differentiate between close and
     * cancel.
     */
    async dismiss_(cancel) {
        if (!this.open) {
            return;
        }
        this.show_ = false;
        listenOnce(this.$.dialog, 'transitionend', () => {
            this.$.dialog.close(cancel ? 'canceled' : 'closed');
        });
    }
    cancel() {
        this.dismiss_(true);
    }
    close() {
        this.dismiss_(false);
    }
    wasCanceled() {
        return !this.open && this.$.dialog.returnValue === 'canceled';
    }
    /**
     * Stop propagation of a tap event inside the container. This will allow
     * |onDialogClick_| to only be called when clicked outside the container.
     */
    onContainerClick_(event) {
        event.stopPropagation();
    }
    /**
     * Close the dialog when tapped outside the container.
     */
    onDialogClick_() {
        this.cancel();
    }
    /**
     * Overrides the default cancel machanism to allow for a close animation.
     */
    onDialogCancel_(event) {
        event.preventDefault();
        this.cancel();
    }
    onDialogClose_() {
        // Catch and re-fire the 'close' event such that it bubbles across Shadow
        // DOM v1.
        this.fire('close');
    }
}
customElements.define(CrDrawerElement.is, CrDrawerElement);

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

const styleMod$9 = document.createElement('dom-module');
styleMod$9.appendChild(html `
  <template>
    <style>
:host([hidden]),[hidden]{display:none!important}
    </style>
  </template>
`.content);
styleMod$9.register('cr-hidden-style');

function getTemplate$O() {
    return html `<!--_html_template_start_-->    <style>:host{--cr-toast-background:#323232;--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:#fff}@media (prefers-color-scheme:dark){:host{--cr-toast-background:var(--google-grey-900) linear-gradient(rgba(255, 255, 255, .06), rgba(255, 255, 255, .06));--cr-toast-button-color:var(--google-blue-300);--cr-toast-text-color:var(--google-grey-200)}}:host{align-items:center;background:var(--cr-toast-background);border-radius:4px;bottom:0;box-shadow:0 2px 4px 0 rgba(0,0,0,.28);box-sizing:border-box;display:flex;margin:24px;max-width:var(--cr-toast-max-width,568px);min-height:52px;min-width:288px;opacity:0;padding:0 24px;position:fixed;transform:translateY(100px);transition:opacity .3s,transform .3s;visibility:hidden;z-index:1}:host-context([chrome-refresh-2023]):host{--cr-toast-background:var(--color-toast-background,
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
        return getTemplate$O();
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

function getTemplate$N() {
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
        return getTemplate$N();
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

function getTemplate$M() {
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
        return getTemplate$M();
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

const styleMod$8 = document.createElement('dom-module');
styleMod$8.appendChild(html `
  <template>
    <style>
.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_up_cr23.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}
    </style>
  </template>
`.content);
styleMod$8.register('cr-icons');

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

const template$5 = html `
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
document.head.appendChild(template$5.content);

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

const styleMod$7 = document.createElement('dom-module');
styleMod$7.appendChild(html `
  <template>
    <style include="cr-hidden-style cr-icons">
:host,html{--scrollable-border-color:var(--google-grey-300)}@media (prefers-color-scheme:dark){:host,html{--scrollable-border-color:var(--google-grey-700)}}[actionable]{cursor:pointer}.hr{border-top:var(--cr-separator-line)}iron-list.cr-separators>:not([first]){border-top:var(--cr-separator-line)}[scrollable]{border-color:transparent;border-style:solid;border-width:1px 0;overflow-y:auto}[scrollable].is-scrolled{border-top-color:var(--scrollable-border-color)}[scrollable].can-scroll:not(.scrolled-to-bottom){border-bottom-color:var(--scrollable-border-color)}[scrollable] iron-list>:not(.no-outline):focus,[selectable]:focus,[selectable]>:focus{background-color:var(--cr-focused-item-color);outline:0}.scroll-container{display:flex;flex-direction:column;min-height:1px}[selectable]>*{cursor:pointer}.cr-centered-card-container{box-sizing:border-box;display:block;height:inherit;margin:0 auto;max-width:var(--cr-centered-card-max-width);min-width:550px;position:relative;width:calc(100% * var(--cr-centered-card-width-percentage))}.cr-container-shadow{box-shadow:inset 0 5px 6px -3px rgba(0,0,0,.4);height:var(--cr-container-shadow-height);left:0;margin:0 0 var(--cr-container-shadow-margin);opacity:0;pointer-events:none;position:relative;right:0;top:0;transition:opacity .5s;z-index:1}#cr-container-shadow-bottom{margin-bottom:0;margin-top:var(--cr-container-shadow-margin);transform:scaleY(-1)}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{opacity:var(--cr-container-shadow-max-opacity)}.cr-row{align-items:center;border-top:var(--cr-separator-line);display:flex;min-height:var(--cr-section-min-height);padding:0 var(--cr-section-padding)}.cr-row.continuation,.cr-row.first{border-top:none}.cr-row-gap{padding-inline-start:16px}.cr-button-gap{margin-inline-start:8px}paper-tooltip::part(tooltip){border-radius:var(--paper-tooltip-border-radius,2px);font-size:92.31%;font-weight:500;max-width:330px;min-width:var(--paper-tooltip-min-width,200px);padding:var(--paper-tooltip-padding,10px 8px)}.cr-padded-text{padding-block-end:var(--cr-section-vertical-padding);padding-block-start:var(--cr-section-vertical-padding)}.cr-title-text{color:var(--cr-title-text-color);font-size:107.6923%;font-weight:500}.cr-secondary-text{color:var(--cr-secondary-text-color);font-weight:400}.cr-form-field-label{color:var(--cr-form-field-label-color);display:block;font-size:var(--cr-form-field-label-font-size);font-weight:500;letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-bottom:8px}.cr-vertical-tab{align-items:center;display:flex}.cr-vertical-tab::before{border-radius:0 3px 3px 0;content:'';display:block;flex-shrink:0;height:var(--cr-vertical-tab-height,100%);width:4px}.cr-vertical-tab.selected::before{background:var(--cr-vertical-tab-selected-color,var(--cr-checked-color))}:host-context([dir=rtl]) .cr-vertical-tab::before{transform:scaleX(-1)}.iph-anchor-highlight{background-color:var(--cr-iph-anchor-highlight-color)}
    </style>
  </template>
`.content);
styleMod$7.register('cr-shared-style');

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

const template$4 = html`<dom-module id="paper-spinner-styles">
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

document.head.appendChild(template$4.content);

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

const template$3 = html`
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
template$3.setAttribute('strip-whitespace', '');

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
  _template: template$3,

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

function getTemplate$L() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style cr-icons">:host{display:block;height:40px;transition:background-color 150ms cubic-bezier(.4,0,.2,1),width 150ms cubic-bezier(.4,0,.2,1);width:44px}:host-context([chrome-refresh-2023]):host{--cr-toolbar-search-field-hover-background:var(--color-toolbar-search-field-background-hover,
                var(--cr-hover-background-color));isolation:isolate}:host([disabled]){opacity:var(--cr-disabled-opacity)}[hidden]{display:none!important}cr-icon-button{--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 32px);margin:var(--cr-toolbar-icon-margin,6px)}:host-context([chrome-refresh-2023]) cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-icon-color,
            var(--color-toolbar-search-field-icon,
            var(--cr-secondary-text-color)));--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 28px);--cr-icon-button-icon-size:20px;margin:var(--cr-toolbar-icon-margin,0)}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:var(
              --cr-toolbar-search-field-input-icon-color,
              var(--google-grey-700));--cr-icon-button-focus-outline-color:var(
              --cr-toolbar-icon-button-focus-outline-color,
              var(--cr-focus-outline-color))}}@media (prefers-color-scheme:dark){cr-icon-button{--cr-icon-button-fill-color:var(
              --cr-toolbar-search-field-input-icon-color,
              var(--google-grey-500))}}#icon{transition:margin 150ms,opacity .2s}#prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--google-grey-700));opacity:0}@media (prefers-color-scheme:dark){#prompt{color:var(--cr-toolbar-search-field-prompt-color,#fff)}}@media (prefers-color-scheme:dark){#prompt{--cr-toolbar-search-field-prompt-opacity:1;color:var(--cr-secondary-text-color,#fff)}}:host-context([chrome-refresh-2023]) #prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--color-toolbar-search-field-foreground-placeholder,var(--cr-secondary-text-color)))}paper-spinner-lite{--paper-spinner-color:var(--cr-toolbar-search-field-input-icon-color,
                var(--google-grey-700));height:var(--cr-icon-size);margin:var(--cr-toolbar-search-field-paper-spinner-margin,0 6px);opacity:0;padding:6px;position:absolute;width:var(--cr-icon-size)}@media (prefers-color-scheme:dark){paper-spinner-lite{--paper-spinner-color:var(
              --cr-toolbar-search-field-input-icon-color, white)}}:host-context([chrome-refresh-2023]) paper-spinner-lite{margin:0;padding:2px}paper-spinner-lite[active]{opacity:1}#prompt,paper-spinner-lite{transition:opacity .2s}#searchTerm{-webkit-font-smoothing:antialiased;flex:1;line-height:185%;margin:var(--cr-toolbar-search-field-term-margin,0 2px);position:relative}:host-context([chrome-refresh-2023]) #searchTerm{font-size:12px;font-weight:500;margin:var(--cr-toolbar-search-field-term-margin,0)}label{bottom:0;cursor:var(--cr-toolbar-search-field-cursor,text);left:0;overflow:hidden;position:absolute;right:0;top:0;white-space:nowrap}:host([has-search-text]) label{visibility:hidden}input{-webkit-appearance:none;background:0 0;border:none;caret-color:var(--cr-toolbar-search-field-input-caret-color,var(--google-blue-700));color:var(--cr-toolbar-search-field-input-text-color,var(--google-grey-900));cursor:var(--cr-toolbar-search-field-cursor,text);font:inherit;outline:0;padding:0;position:relative;width:100%}@media (prefers-color-scheme:dark){input{color:var(--cr-toolbar-search-field-input-text-color,#fff)}}:host-context([chrome-refresh-2023]) input{caret-color:var(--cr-toolbar-search-field-input-caret-color,currentColor);color:var(--cr-toolbar-search-field-input-text-color,var(--color-toolbar-search-field-foreground,var(--cr-fallback-color-on-surface)));font-size:12px;font-weight:500}input[type=search]::-webkit-search-cancel-button{display:none}:host([narrow]){border-radius:var(--cr-toolbar-search-field-border-radius,0)}:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,var(--google-grey-100));border-radius:var(--cr-toolbar-search-field-border-radius,46px);cursor:var(--cr-toolbar-search-field-cursor,text);max-width:var(--cr-toolbar-field-max-width,none);padding-inline-end:0;width:var(--cr-toolbar-field-width,680px)}@media (prefers-color-scheme:dark){:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,rgba(0,0,0,.22))}}:host-context([chrome-refresh-2023]):host(:not([narrow])){--cr-toolbar-search-field-border-radius:100px;background:0 0;height:36px;overflow:hidden;padding:0 6px;position:relative}#background,#stateBackground{display:none}:host-context([chrome-refresh-2023]):host(:not([narrow])) #background{background:var(--cr-toolbar-search-field-background,var(--color-toolbar-search-field-background,var(--cr-fallback-color-base-container)));border-radius:inherit;display:block;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host([search-focused_]:not([narrow])){outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host-context([chrome-refresh-2023]):host(:not([narrow])) #stateBackground{display:block;inset:0;pointer-events:none;position:absolute}:host-context([chrome-refresh-2023]):host(:hover:not([search-focused_],[narrow])) #stateBackground{background:var(--cr-toolbar-search-field-hover-background);z-index:1}:host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,.7)}:host-context([chrome-refresh-2023]):host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,1)}:host(:not([narrow])) #prompt{opacity:var(--cr-toolbar-search-field-prompt-opacity,1)}:host([narrow]) #prompt{opacity:var(--cr-toolbar-search-field-narrow-mode-prompt-opacity,0)}:host([narrow]:not([showing-search])) #searchTerm{display:none}:host([showing-search][spinner-active]) #icon{opacity:0}:host([narrow][showing-search]){width:100%}:host([narrow][showing-search]) #icon,:host([narrow][showing-search]) paper-spinner-lite{margin-inline-start:var(--cr-toolbar-search-icon-margin-inline-start,18px)}#content{align-items:center;display:flex;height:100%}:host-context([chrome-refresh-2023]) #content{position:relative;z-index:2}</style>
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
        return getTemplate$L();
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
            this.setValue('');
            this.getSearchInput().blur();
        }
    }
    showSearch_(e) {
        if (e.target !== this.shadowRoot.querySelector('#clearSearch')) {
            this.showingSearch = true;
        }
        if (this.narrow) {
            this.focus_();
        }
    }
    clearSearch_() {
        this.setValue('');
        this.focus_();
        this.spinnerActive = false;
    }
}
customElements.define(CrToolbarSearchFieldElement.is, CrToolbarSearchFieldElement);

function getTemplate$K() {
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
        return getTemplate$K();
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

function getTemplate$J() {
    return html `<!--_html_template_start_-->    <style>:host ::slotted([slot=view]){bottom:0;display:none;left:0;position:absolute;right:0;top:0}:host ::slotted(.active),:host ::slotted(.closing){display:block}</style>
    <slot name="view"></slot>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getEffectiveView(element) {
    return element.matches('cr-lazy-render') ?
        element.get() :
        element;
}
function dispatchCustomEvent(element, eventType) {
    element.dispatchEvent(new CustomEvent(eventType, { bubbles: true, composed: true }));
}
const viewAnimations = new Map();
viewAnimations.set('fade-in', element => {
    const animation = element.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 180,
        easing: 'ease-in-out',
        iterations: 1,
    });
    return animation.finished;
});
viewAnimations.set('fade-out', element => {
    const animation = element.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration: 180,
        easing: 'ease-in-out',
        iterations: 1,
    });
    return animation.finished;
});
viewAnimations.set('slide-in-fade-in-ltr', element => {
    const animation = element.animate([
        { transform: 'translateX(-8px)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 },
    ], {
        duration: 300,
        easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
        fill: 'forwards',
        iterations: 1,
    });
    return animation.finished;
});
viewAnimations.set('slide-in-fade-in-rtl', element => {
    const animation = element.animate([
        { transform: 'translateX(8px)', opacity: 0 },
        { transform: 'translateX(0)', opacity: 1 },
    ], {
        duration: 300,
        easing: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
        fill: 'forwards',
        iterations: 1,
    });
    return animation.finished;
});
class CrViewManagerElement extends PolymerElement {
    static get is() {
        return 'cr-view-manager';
    }
    static get template() {
        return getTemplate$J();
    }
    exit_(element, animation) {
        const animationFunction = viewAnimations.get(animation);
        element.classList.remove('active');
        element.classList.add('closing');
        dispatchCustomEvent(element, 'view-exit-start');
        if (!animationFunction) {
            // Nothing to animate. Immediately resolve.
            element.classList.remove('closing');
            dispatchCustomEvent(element, 'view-exit-finish');
            return Promise.resolve();
        }
        return animationFunction(element).then(() => {
            element.classList.remove('closing');
            dispatchCustomEvent(element, 'view-exit-finish');
        });
    }
    enter_(view, animation) {
        const animationFunction = viewAnimations.get(animation);
        const effectiveView = getEffectiveView(view);
        effectiveView.classList.add('active');
        dispatchCustomEvent(effectiveView, 'view-enter-start');
        if (!animationFunction) {
            // Nothing to animate. Immediately resolve.
            dispatchCustomEvent(effectiveView, 'view-enter-finish');
            return Promise.resolve();
        }
        return animationFunction(effectiveView).then(() => {
            dispatchCustomEvent(effectiveView, 'view-enter-finish');
        });
    }
    switchView(newViewId, enterAnimation, exitAnimation) {
        const previousView = this.querySelector('.active');
        const newView = this.querySelector('#' + newViewId);
        assert(!!newView);
        const promises = [];
        if (previousView) {
            promises.push(this.exit_(previousView, exitAnimation || 'fade-out'));
            promises.push(this.enter_(newView, enterAnimation || 'fade-in'));
        }
        else {
            promises.push(this.enter_(newView, 'no-animation'));
        }
        return Promise.all(promises).then(() => { });
    }
}
customElements.define(CrViewManagerElement.is, CrViewManagerElement);

function getTemplate$I() {
    return html `<!--_html_template_start_-->    <style include="cr-hidden-style">:host{cursor:pointer;display:flex;flex-direction:row;font-size:var(--cr-tabs-font-size,14px);font-weight:500;height:var(--cr-tabs-height,48px);user-select:none}.tab{align-items:center;color:var(--cr-secondary-text-color);display:flex;flex:var(--cr-tabs-flex,auto);height:100%;justify-content:center;opacity:.8;outline:0;padding:0 var(--cr-tabs-tab-inline-padding,0);position:relative;transition:opacity .1s cubic-bezier(.4,0,1,1)}:host-context([chrome-refresh-2023]) .tab{opacity:1}:host-context(.focus-outline-visible) .tab:focus{outline:var(--cr-tabs-focus-outline,auto);outline-offset:var(--cr-tabs-focus-outline-offset,0)}.selected{color:var(--cr-tabs-selected-color,var(--google-blue-600));opacity:1}@media (prefers-color-scheme:dark){.selected{color:var(--cr-tabs-selected-color,var(--google-blue-300))}}.tab-icon{-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-tabs-icon-size,var(--cr-icon-size));background-color:var(--cr-secondary-text-color);display:none;height:var(--cr-tabs-icon-size,var(--cr-icon-size));margin-inline-end:var(--cr-tabs-icon-margin-end,var(--cr-icon-size));width:var(--cr-tabs-icon-size,var(--cr-icon-size))}.selected .tab-icon{background-color:var(--cr-tabs-selected-color,var(--google-blue-600))}@media (prefers-color-scheme:dark){.selected .tab-icon{background-color:var(--cr-tabs-selected-color,var(--google-blue-300))}}.tab-indicator,.tab-indicator-background{bottom:0;height:var(--cr-tabs-selection-bar-width,2px);left:var(--cr-tabs-tab-inline-padding,0);position:absolute;right:var(--cr-tabs-tab-inline-padding,0)}.tab-indicator{border-top-left-radius:var(--cr-tabs-selection-bar-radius,var(--cr-tabs-selection-bar-width,2px));border-top-right-radius:var(--cr-tabs-selection-bar-radius,var(--cr-tabs-selection-bar-width,2px));opacity:0;transform-origin:left center;transition:transform}.selected .tab-indicator{background:var(--cr-tabs-selected-color,var(--google-blue-600));opacity:1}.tab-indicator.expand{transition-duration:150ms;transition-timing-function:cubic-bezier(.4,0,1,1)}.tab-indicator.contract{transition-duration:180ms;transition-timing-function:cubic-bezier(0,0,.2,1)}.tab-indicator-background{background:var(--cr-tabs-unselected-color,var(--google-blue-600));opacity:var(--cr-tabs-selection-bar-unselected-opacity,0);z-index:-1}@media (prefers-color-scheme:dark){.tab-indicator-background{background:var(--cr-tabs-unselected-color,var(--google-blue-300))}.selected .tab-indicator{background:var(--cr-tabs-selected-color,var(--google-blue-300))}}@media (forced-colors:active){.tab-indicator{background:SelectedItem}}</style>

    <template is="dom-repeat" items="[[tabNames]]">
      <div role="tab" class$="tab [[getSelectedClass_(index, selected)]]" on-click="onTabClick_" aria-selected$="[[getAriaSelected_(index, selected)]]" tabindex$="[[getTabindex_(index, selected)]]">
        <div class="tab-icon" style$="[[getIconStyle_(index)]]">
        </div>
        [[item]]
        <div class="tab-indicator-background"></div>
        <div class="tab-indicator"></div>
      </div>
    </template>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'cr-tabs' is a control used for selecting different sections or
 * tabs. cr-tabs was created to replace paper-tabs and paper-tab. cr-tabs
 * displays the name of each tab provided by |tabs|. A 'selected-changed' event
 * is fired any time |selected| is changed.
 *
 * cr-tabs takes its #selectionBar animation from paper-tabs.
 *
 * Keyboard behavior
 *   - Home, End, ArrowLeft and ArrowRight changes the tab selection
 *
 * Known limitations
 *   - no "disabled" state for the cr-tabs as a whole or individual tabs
 *   - cr-tabs does not accept any <slot> (not necessary as of this writing)
 *   - no horizontal scrolling, it is assumed that tabs always fit in the
 *     available space
 */
class CrTabsElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.isRtl_ = false;
        this.lastSelected_ = null;
    }
    static get is() {
        return 'cr-tabs';
    }
    static get template() {
        return getTemplate$I();
    }
    static get properties() {
        return {
            // Optional icon urls displayed in each tab.
            tabIcons: {
                type: Array,
                value: () => [],
            },
            // Tab names displayed in each tab.
            tabNames: {
                type: Array,
                value: () => [],
            },
            /** Index of the selected tab. */
            selected: {
                type: Number,
                notify: true,
                observer: 'onSelectedChanged_',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.isRtl_ = this.matches(':host-context([dir=rtl]) cr-tabs');
    }
    ready() {
        super.ready();
        this.setAttribute('role', 'tablist');
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
    }
    getAriaSelected_(index) {
        return index === this.selected ? 'true' : 'false';
    }
    getIconStyle_(index) {
        const icon = this.tabIcons[index];
        return icon ? `-webkit-mask-image: url(${icon}); display: block;` : '';
    }
    getTabindex_(index) {
        return index === this.selected ? '0' : '-1';
    }
    getSelectedClass_(index) {
        return index === this.selected ? 'selected' : '';
    }
    onSelectedChanged_(newSelected, oldSelected) {
        const tabs = this.shadowRoot.querySelectorAll('.tab');
        if (tabs.length === 0 || oldSelected === undefined ||
            tabs.length <= newSelected || tabs.length <= oldSelected) {
            // Tabs are not fully rendered yet.
            return;
        }
        const oldTabRect = tabs[oldSelected].getBoundingClientRect();
        const newTabRect = tabs[newSelected].getBoundingClientRect();
        const newIndicator = tabs[newSelected].querySelector('.tab-indicator');
        newIndicator.classList.remove('expand', 'contract');
        // Make new indicator look like it is the old indicator.
        this.updateIndicator_(newIndicator, newTabRect, oldTabRect.left, oldTabRect.width);
        newIndicator.getBoundingClientRect(); // Force repaint.
        // Expand to cover both the previous selected tab, the newly selected tab,
        // and everything in between.
        newIndicator.classList.add('expand');
        newIndicator.addEventListener('transitionend', e => this.onIndicatorTransitionEnd_(e), { once: true });
        const leftmostEdge = Math.min(oldTabRect.left, newTabRect.left);
        const fullWidth = newTabRect.left > oldTabRect.left ?
            newTabRect.right - oldTabRect.left :
            oldTabRect.right - newTabRect.left;
        this.updateIndicator_(newIndicator, newTabRect, leftmostEdge, fullWidth);
    }
    onKeyDown_(e) {
        const count = this.tabNames.length;
        let newSelection;
        if (e.key === 'Home') {
            newSelection = 0;
        }
        else if (e.key === 'End') {
            newSelection = count - 1;
        }
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const delta = e.key === 'ArrowLeft' ? (this.isRtl_ ? 1 : -1) :
                (this.isRtl_ ? -1 : 1);
            newSelection = (count + this.selected + delta) % count;
        }
        else {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        this.selected = newSelection;
        this.shadowRoot.querySelector('.tab.selected').focus();
    }
    onIndicatorTransitionEnd_(event) {
        const indicator = event.target;
        indicator.classList.replace('expand', 'contract');
        indicator.style.transform = `translateX(0) scaleX(1)`;
    }
    onTabClick_(e) {
        this.selected = e.model.index;
    }
    updateIndicator_(indicator, originRect, newLeft, newWidth) {
        const leftDiff = 100 * (newLeft - originRect.left) / originRect.width;
        const widthRatio = newWidth / originRect.width;
        const transform = `translateX(${leftDiff}%) scaleX(${widthRatio})`;
        indicator.style.transform = transform;
    }
}
customElements.define(CrTabsElement.is, CrTabsElement);

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

class IronSelection {
  /**
   * @param {!Function} selectCallback
   * @suppress {missingProvide}
   */
  constructor(selectCallback) {
    this.selection = [];
    this.selectCallback = selectCallback;
  }

  /**
   * Retrieves the selected item(s).
   *
   * @returns Returns the selected item(s). If the multi property is true,
   * `get` will return an array, otherwise it will return
   * the selected item or undefined if there is no selection.
   */
  get() {
    return this.multi ? this.selection.slice() : this.selection[0];
  }

  /**
   * Clears all the selection except the ones indicated.
   *
   * @param {Array} excludes items to be excluded.
   */
  clear(excludes) {
    this.selection.slice().forEach(function(item) {
      if (!excludes || excludes.indexOf(item) < 0) {
        this.setItemSelected(item, false);
      }
    }, this);
  }

  /**
   * Indicates if a given item is selected.
   *
   * @param {*} item The item whose selection state should be checked.
   * @return {boolean} Returns true if `item` is selected.
   */
  isSelected(item) {
    return this.selection.indexOf(item) >= 0;
  }

  /**
   * Sets the selection state for a given item to either selected or deselected.
   *
   * @param {*} item The item to select.
   * @param {boolean} isSelected True for selected, false for deselected.
   */
  setItemSelected(item, isSelected) {
    if (item != null) {
      if (isSelected !== this.isSelected(item)) {
        // proceed to update selection only if requested state differs from
        // current
        if (isSelected) {
          this.selection.push(item);
        } else {
          var i = this.selection.indexOf(item);
          if (i >= 0) {
            this.selection.splice(i, 1);
          }
        }
        if (this.selectCallback) {
          this.selectCallback(item, isSelected);
        }
      }
    }
  }

  /**
   * Sets the selection state for a given item. If the `multi` property
   * is true, then the selected state of `item` will be toggled; otherwise
   * the `item` will be selected.
   *
   * @param {*} item The item to select.
   */
  select(item) {
    if (this.multi) {
      this.toggle(item);
    } else if (this.get() !== item) {
      this.setItemSelected(this.get(), false);
      this.setItemSelected(item, true);
    }
  }

  /**
   * Toggles the selection state for `item`.
   *
   * @param {*} item The item to toggle.
   */
  toggle(item) {
    this.setItemSelected(item, !this.isSelected(item));
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
 * @polymerBehavior
 */
const IronSelectableBehavior = {

  /**
   * Fired when iron-selector is activated (selected or deselected).
   * It is fired before the selected items are changed.
   * Cancel the event to abort selection.
   *
   * @event iron-activate
   */

  /**
   * Fired when an item is selected
   *
   * @event iron-select
   */

  /**
   * Fired when an item is deselected
   *
   * @event iron-deselect
   */

  /**
   * Fired when the list of selectable items changes (e.g., items are
   * added or removed). The detail of the event is a mutation record that
   * describes what changed.
   *
   * @event iron-items-changed
   */

  properties: {

    /**
     * If you want to use an attribute value or property of an element for
     * `selected` instead of the index, set this to the name of the attribute
     * or property. Hyphenated values are converted to camel case when used to
     * look up the property of a selectable element. Camel cased values are
     * *not* converted to hyphenated values for attribute lookup. It's
     * recommended that you provide the hyphenated form of the name so that
     * selection works in both cases. (Use `attr-or-property-name` instead of
     * `attrOrPropertyName`.)
     */
    attrForSelected: {type: String, value: null},

    /**
     * Gets or sets the selected element. The default is to use the index of the
     * item.
     * @type {string|number}
     */
    selected: {type: String, notify: true},

    /**
     * Returns the currently selected item.
     *
     * @type {?Object}
     */
    selectedItem: {type: Object, readOnly: true, notify: true},

    /**
     * The event that fires from items when they are selected. Selectable
     * will listen for this event from items and update the selection state.
     * Set to empty string to listen to no events.
     */
    activateEvent:
        {type: String, value: 'tap', observer: '_activateEventChanged'},

    /**
     * This is a CSS selector string.  If this is set, only items that match the
     * CSS selector are selectable.
     */
    selectable: String,

    /**
     * The class to set on elements when selected.
     */
    selectedClass: {type: String, value: 'iron-selected'},

    /**
     * The attribute to set on elements when selected.
     */
    selectedAttribute: {type: String, value: null},

    /**
     * Default fallback if the selection based on selected with
     * `attrForSelected` is not found.
     */
    fallbackSelection: {type: String, value: null},

    /**
     * The list of items from which a selection can be made.
     */
    items: {
      type: Array,
      readOnly: true,
      notify: true,
      value: function() {
        return [];
      }
    },

    /**
     * The set of excluded elements where the key is the `localName`
     * of the element that will be ignored from the item list.
     *
     * @default {template: 1}
     */
    _excludedLocalNames: {
      type: Object,
      value: function() {
        return {
          'template': 1,
          'dom-bind': 1,
          'dom-if': 1,
          'dom-repeat': 1,
        };
      }
    }
  },

  observers: [
    '_updateAttrForSelected(attrForSelected)',
    '_updateSelected(selected)',
    '_checkFallback(fallbackSelection)'
  ],

  created: function() {
    this._bindFilterItem = this._filterItem.bind(this);
    this._selection = new IronSelection(this._applySelection.bind(this));
  },

  attached: function() {
    this._observer = this._observeItems(this);
    this._addListener(this.activateEvent);
  },

  detached: function() {
    if (this._observer) {
      dom(this).unobserveNodes(this._observer);
    }
    this._removeListener(this.activateEvent);
  },

  /**
   * Returns the index of the given item.
   *
   * @method indexOf
   * @param {Object} item
   * @returns Returns the index of the item
   */
  indexOf: function(item) {
    return this.items ? this.items.indexOf(item) : -1;
  },

  /**
   * Selects the given value.
   *
   * @method select
   * @param {string|number} value the value to select.
   */
  select: function(value) {
    this.selected = value;
  },

  /**
   * Selects the previous item.
   *
   * @method selectPrevious
   */
  selectPrevious: function() {
    var length = this.items.length;
    var index = length - 1;
    if (this.selected !== undefined) {
      index = (Number(this._valueToIndex(this.selected)) - 1 + length) % length;
    }
    this.selected = this._indexToValue(index);
  },

  /**
   * Selects the next item.
   *
   * @method selectNext
   */
  selectNext: function() {
    var index = 0;
    if (this.selected !== undefined) {
      index =
          (Number(this._valueToIndex(this.selected)) + 1) % this.items.length;
    }
    this.selected = this._indexToValue(index);
  },

  /**
   * Selects the item at the given index.
   *
   * @method selectIndex
   */
  selectIndex: function(index) {
    this.select(this._indexToValue(index));
  },

  /**
   * Force a synchronous update of the `items` property.
   *
   * NOTE: Consider listening for the `iron-items-changed` event to respond to
   * updates to the set of selectable items after updates to the DOM list and
   * selection state have been made.
   *
   * WARNING: If you are using this method, you should probably consider an
   * alternate approach. Synchronously querying for items is potentially
   * slow for many use cases. The `items` property will update asynchronously
   * on its own to reflect selectable items in the DOM.
   */
  forceSynchronousItemUpdate: function() {
    if (this._observer && typeof this._observer.flush === 'function') {
      // NOTE(bicknellr): `dom.flush` above is no longer sufficient to trigger
      // `observeNodes` callbacks. Polymer 2.x returns an object from
      // `observeNodes` with a `flush` that synchronously gives the callback any
      // pending MutationRecords (retrieved with `takeRecords`). Any case where
      // ShadyDOM flushes were expected to synchronously trigger item updates
      // will now require calling `forceSynchronousItemUpdate`.
      this._observer.flush();
    } else {
      this._updateItems();
    }
  },

  // UNUSED, FOR API COMPATIBILITY
  get _shouldUpdateSelection() {
    return this.selected != null;
  },

  _checkFallback: function() {
    this._updateSelected();
  },

  _addListener: function(eventName) {
    this.listen(this, eventName, '_activateHandler');
  },

  _removeListener: function(eventName) {
    this.unlisten(this, eventName, '_activateHandler');
  },

  _activateEventChanged: function(eventName, old) {
    this._removeListener(old);
    this._addListener(eventName);
  },

  _updateItems: function() {
    var nodes = dom(this).queryDistributedElements(this.selectable || '*');
    nodes = Array.prototype.filter.call(nodes, this._bindFilterItem);
    this._setItems(nodes);
  },

  _updateAttrForSelected: function() {
    if (this.selectedItem) {
      this.selected = this._valueForItem(this.selectedItem);
    }
  },

  _updateSelected: function() {
    this._selectSelected(this.selected);
  },

  _selectSelected: function(selected) {
    if (!this.items) {
      return;
    }

    var item = this._valueToItem(this.selected);
    if (item) {
      this._selection.select(item);
    } else {
      this._selection.clear();
    }
    // Check for items, since this array is populated only when attached
    // Since Number(0) is falsy, explicitly check for undefined
    if (this.fallbackSelection && this.items.length &&
        (this._selection.get() === undefined)) {
      this.selected = this.fallbackSelection;
    }
  },

  _filterItem: function(node) {
    return !this._excludedLocalNames[node.localName];
  },

  _valueToItem: function(value) {
    return (value == null) ? null : this.items[this._valueToIndex(value)];
  },

  _valueToIndex: function(value) {
    if (this.attrForSelected) {
      for (var i = 0, item; item = this.items[i]; i++) {
        if (this._valueForItem(item) == value) {
          return i;
        }
      }
    } else {
      return Number(value);
    }
  },

  _indexToValue: function(index) {
    if (this.attrForSelected) {
      var item = this.items[index];
      if (item) {
        return this._valueForItem(item);
      }
    } else {
      return index;
    }
  },

  _valueForItem: function(item) {
    if (!item) {
      return null;
    }
    if (!this.attrForSelected) {
      var i = this.indexOf(item);
      return i === -1 ? null : i;
    }
    var propValue = item[dashToCamelCase(this.attrForSelected)];
    return propValue != undefined ? propValue :
                                    item.getAttribute(this.attrForSelected);
  },

  _applySelection: function(item, isSelected) {
    if (this.selectedClass) {
      this.toggleClass(this.selectedClass, isSelected, item);
    }
    if (this.selectedAttribute) {
      this.toggleAttribute(this.selectedAttribute, isSelected, item);
    }
    this._selectionChange();
    this.fire('iron-' + (isSelected ? 'select' : 'deselect'), {item: item});
  },

  _selectionChange: function() {
    this._setSelectedItem(this._selection.get());
  },

  // observe items change under the given node.
  _observeItems: function(node) {
    return dom(node).observeNodes(function(mutation) {
      this._updateItems();
      this._updateSelected();

      // Let other interested parties know about the change so that
      // we don't have to recreate mutation observers everywhere.
      this.fire(
          'iron-items-changed', mutation, {bubbles: false, cancelable: false});
    });
  },

  _activateHandler: function(e) {
    var t = e.target;
    var items = this.items;
    while (t && t != this) {
      var i = items.indexOf(t);
      if (i >= 0) {
        var value = this._indexToValue(i);
        this._itemActivate(value, t);
        return;
      }
      t = t.parentNode;
    }
  },

  _itemActivate: function(value, item) {
    if (!this.fire('iron-activate', {selected: value, item: item}, {
               cancelable: true
             })
             .defaultPrevented) {
      this.select(value);
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
`iron-pages` is used to select one of its children to show. One use is to cycle
through a list of children "pages".

Example:

    <iron-pages selected="0">
      <div>One</div>
      <div>Two</div>
      <div>Three</div>
    </iron-pages>

    <script>
      document.addEventListener('click', function(e) {
        var pages = document.querySelector('iron-pages');
        pages.selectNext();
      });
    </script>

@group Iron Elements
@demo demo/index.html
*/
Polymer({
  _template: html`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,

  is: 'iron-pages',
  behaviors: [IronResizableBehavior, IronSelectableBehavior],

  properties: {

    // as the selected page is the only one visible, activateEvent
    // is both non-sensical and problematic; e.g. in cases where a user
    // handler attempts to change the page and the activateEvent
    // handler immediately changes it back
    activateEvent: {type: String, value: null}

  },

  observers: ['_selectedPageChanged(selected)'],

  _selectedPageChanged: function(selected, old) {
    this.async(this.notifyResize);
  }
});

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

function getTemplate$H() {
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
        return getTemplate$H();
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

const styleMod$6 = document.createElement('dom-module');
styleMod$6.appendChild(html `
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
            var(--cr-fallback-color-disabled-background))}:host-context([chrome-refresh-2023]):host([disabled]) #inner-input-content ::slotted(*){--cr-icon-color:currentColor;--cr-icon-button-fill-color:currentColor}:host-context([chrome-refresh-2023]):host(.stroked){--cr-input-background-color:transparent;--cr-input-border:1px solid var(--color-side-panel-textfield-border,
            var(--cr-fallback-color-neutral-outline));--cr-input-border-bottom:none;--cr-input-border-radius:8px;--cr-input-padding-bottom:9px;--cr-input-padding-end:9px;--cr-input-padding-start:9px;--cr-input-padding-top:9px;--cr-input-underline-display:none;--cr-input-min-height:36px;line-height:16px}:host-context([chrome-refresh-2023]):host(.stroked[focused_]){--cr-input-border:2px solid var(--cr-focus-outline-color);--cr-input-padding-bottom:8px;--cr-input-padding-end:8px;--cr-input-padding-start:8px;--cr-input-padding-top:8px}:host-context([chrome-refresh-2023]):host(.stroked[invalid]){--cr-input-border:1px solid var(--cr-input-error-color)}:host-context([chrome-refresh-2023]):host(.stroked[focused_][invalid]){--cr-input-border:2px solid var(--cr-input-error-color)}
    </style>
  </template>
`.content);
styleMod$6.register('cr-input-style');

function getTemplate$G() {
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
        return getTemplate$G();
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

function getTemplate$F() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style cr-input-style">:host{display:flex;user-select:none;--cr-search-field-clear-icon-fill:var(--google-grey-700);--cr-search-field-clear-icon-margin-end:-4px;--cr-search-field-input-border-bottom:1px solid var(--cr-secondary-text-color)}#searchIcon{align-self:center;display:var(--cr-search-field-search-icon-display,inherit);height:16px;padding:4px;vertical-align:middle;width:16px}#searchIconInline{--iron-icon-fill-color:var(--cr-search-field-search-icon-fill, inherit);display:var(--cr-search-field-search-icon-inline-display,none);margin-inline-start:var(--cr-search-field-search-icon-inline-margin-start,0)}#searchInput{--cr-input-background-color:transparent;--cr-input-border-bottom:var(--cr-search-field-input-border-bottom);--cr-input-border-radius:0;--cr-input-error-display:none;--cr-input-min-height:var(--cr-search-field-input-min-height, 24px);--cr-input-padding-end:0;--cr-input-padding-start:var(--cr-search-field-input-padding-start, 0);--cr-input-padding-bottom:var(--cr-search-field-input-padding-bottom, 2px);--cr-input-padding-top:var(--cr-search-field-input-padding-top, 2px);--cr-input-placeholder-color:var(--cr-search-field-placeholder-color);--cr-input-underline-display:var(--cr-search-field-underline-display);--cr-input-underline-border-radius:var(--cr-search-field-input-underline-border-radius, 0);--cr-input-underline-height:var(--cr-search-field-input-underline-height, 0);align-self:stretch;color:var(--cr-primary-text-color);display:block;font-size:92.3076923%;width:var(--cr-search-field-input-width,160px)}:host([has-search-text]) #searchInput{--cr-input-padding-end:calc(24px +
          var(--cr-search-field-clear-icon-margin-end))}#clearSearch{--cr-icon-button-fill-color:var(--cr-search-field-clear-icon-fill);--cr-icon-button-icon-size:var(--cr-search-field-clear-icon-size, 16px);--cr-icon-button-size:var(--cr-search-field-clear-button-size, 24px);margin-inline-end:var(--cr-search-field-clear-icon-margin-end);margin-inline-start:4px;position:absolute;right:0}:host-context([chrome-refresh-2023]) #clearSearch{z-index:1}:host-context([dir=rtl]) #clearSearch{left:0;right:auto}</style>
    <iron-icon id="searchIcon" icon="cr:search" part="searchIcon"></iron-icon>
    <cr-input id="searchInput" part="searchInput" on-search="onSearchTermSearch" on-input="onSearchTermInput" aria-label$="[[label]]" type="search" autofocus="[[autofocus]]" placeholder="[[label]]" spellcheck="false">
      <iron-icon id="searchIconInline" slot="inline-prefix" icon="cr:search"></iron-icon>
      <cr-icon-button id="clearSearch" class="icon-cancel" hidden$="[[!hasSearchText]]" slot="suffix" on-click="onTapClear_" title="[[clearLabel]]">
      </cr-icon-button>
    </cr-input>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'cr-search-field' is a simple implementation of a polymer component that
 * uses CrSearchFieldMixin.
 */
const CrSearchFieldElementBase = CrSearchFieldMixin(PolymerElement);
class CrSearchFieldElement extends CrSearchFieldElementBase {
    static get is() {
        return 'cr-search-field';
    }
    static get template() {
        return getTemplate$F();
    }
    static get properties() {
        return {
            autofocus: {
                type: Boolean,
                value: false,
            },
        };
    }
    getSearchInput() {
        return this.$.searchInput;
    }
    onTapClear_() {
        this.setValue('');
        setTimeout(() => {
            this.$.searchInput.focus();
        });
    }
}
customElements.define(CrSearchFieldElement.is, CrSearchFieldElement);

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

const template$2 = html `
<style>
html{--error-color:var(--google-red-700);--warning-color:rgb(242, 153, 0);--extensions-card-height:160px;--separator-gap:9px;--sidebar-width:256px;--cr-toolbar-field-width:680px}@media (prefers-color-scheme:dark){html{--review-panel-icon-color:var(--google-grey-500);--error-color:var(--google-red-300);--warning-color:var(--google-yellow-300)}}
</style>
`;
document.head.appendChild(template$2.content);

const styleMod$5 = document.createElement('dom-module');
styleMod$5.appendChild(html `
  <template>
    <style include="cr-shared-style">
a[href]{color:var(--cr-link-color)}.activity-message{color:var(--md-loading-message-color);font-size:123%;font-weight:500;margin-top:80px;text-align:center}.activity-subpage-header{display:flex;justify-content:flex-end;padding:12px 12px}.activity-table-headings{align-items:center;display:flex;flex-direction:row;font-weight:500;margin-inline-end:auto;min-height:calc(var(--cr-section-min-height) - var(--separator-gap));padding:0 var(--cr-section-padding)}.clear-activities-button{margin:0 8px}.safety-check-wrapper{flex:1;margin-inline-start:15px}.matching-restricted-sites-warning{align-items:flex-start;display:flex;flex-direction:row}.matching-restricted-sites-warning iron-icon{fill:var(--warning-color);margin-inline-end:8px;min-height:var(--cr-icon-size);min-width:var(--cr-icon-size)}.page-container{height:100%}.page-content{background-color:var(--cr-card-background-color);box-shadow:var(--cr-card-shadow);box-sizing:border-box;margin:auto;min-height:100%;padding-bottom:64px;width:var(--cr-toolbar-field-width)}.page-header{align-items:center;display:flex;height:40px;margin-bottom:12px;padding:8px 12px 0}.link-icon-button{align-items:center;display:flex;justify-content:center}.separator{border-inline-start:var(--cr-separator-line);flex-shrink:0;height:calc(var(--cr-section-min-height) - var(--separator-gap));margin-inline-end:var(--cr-section-padding);margin-inline-start:0}.site-favicon{background-size:100% 100%;height:var(--cr-icon-size);min-width:var(--cr-icon-size)}
    </style>
  </template>
`.content);
styleMod$5.register('shared-style');

function getCss$5() {
    return css `:host{align-items:center;align-self:stretch;display:flex;margin:0;outline:0}:host(:not([effectively-disabled_])){cursor:pointer}:host(:not([no-hover],[effectively-disabled_]):hover){background-color:var(--cr-hover-background-color)}:host(:not([no-hover],[effectively-disabled_]):active){background-color:var(--cr-active-background-color)}:host(:not([no-hover],[effectively-disabled_])) cr-icon-button{--cr-icon-button-hover-background-color:transparent;--cr-icon-button-active-background-color:transparent}`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/* @fileoverview Utilities for determining the current platform. */
/** Whether we are using a Mac or not. */
const isMac = /Mac/.test(navigator.platform);
/** Whether this is on the Windows platform or not. */
const isWindows = /Win/.test(navigator.platform);
/** Whether this is the ChromeOS/ash web browser. */
const isChromeOS = (() => {
    let returnValue = false;
    // 
    returnValue = true;
    // 
    return returnValue;
})();
/** Whether this is on Android. */
const isAndroid = /Android/.test(navigator.userAgent);
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

function getCss$4() {
    return css `:host([disabled]){opacity:.65;pointer-events:none}:host([disabled]) cr-icon-button{display:var(--cr-expand-button-disabled-display,initial)}#label{flex:1;padding:var(--cr-section-vertical-padding) 0}cr-icon-button{--cr-icon-button-icon-size:var(--cr-expand-button-icon-size, 20px);--cr-icon-button-size:var(--cr-expand-button-size, 36px)}`;
}

function getHtml$2() {
    return html$1 `<!--_html_template_start_--><div id="label" aria-hidden="true"><slot></slot></div>
<cr-icon-button id="icon" aria-labelledby="label" ?disabled="${this.disabled}" aria-expanded="${this.ariaExpanded_}" tabindex="${this.tabIndex}" part="icon" iron-icon="${this.icon_}">
</cr-icon-button>
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
class CrExpandButtonElement extends CrLitElement {
    constructor() {
        super(...arguments);
        this.expanded = false;
        this.disabled = false;
        this.ariaExpanded_ = 'false';
        this.expandIcon = 'cr:expand-more';
        this.collapseIcon = 'cr:expand-less';
        this.tabIndex = 0;
        this.icon_ = '';
    }
    static get is() {
        return 'cr-expand-button';
    }
    static get styles() {
        return [
            getCss$5(),
            getCss$4(),
        ];
    }
    render() {
        return getHtml$2.bind(this)();
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
                notify: true,
            },
            /**
             * If true, the button will be disabled and grayed out.
             */
            disabled: {
                type: Boolean,
                reflect: true,
            },
            /** A11y text descriptor for this control. */
            ariaLabel: { type: String },
            ariaExpanded_: { type: String },
            tabIndex: { type: Number },
            expandIcon: { type: String },
            collapseIcon: { type: String },
            expandTitle: { type: String },
            collapseTitle: { type: String },
            icon_: { type: String },
        };
    }
    firstUpdated() {
        this.addEventListener('click', this.toggleExpand_);
    }
    willUpdate(changedProperties) {
        super.willUpdate(changedProperties);
        if (changedProperties.has('expanded') ||
            changedProperties.has('expandIcon') ||
            changedProperties.has('collapseIcon')) {
            this.icon_ = this.expanded ? this.collapseIcon : this.expandIcon;
        }
        if (changedProperties.has('expanded') ||
            changedProperties.has('collapseTitle') ||
            changedProperties.has('expandTitle')) {
            this.title = this.expanded ? this.collapseTitle : this.expandTitle;
        }
        if (changedProperties.has('expanded')) {
            this.ariaExpanded_ = this.expanded ? 'true' : 'false';
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('ariaLabel')) {
            this.onAriaLabelChange_();
        }
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
    toggleExpand_(event) {
        // Prevent |click| event from bubbling. It can cause parents of this
        // elements to erroneously re-toggle this control.
        event.stopPropagation();
        event.preventDefault();
        this.scrollIntoViewIfNeeded();
        this.expanded = !this.expanded;
        focusWithoutInk(this.$.icon);
    }
}
customElements.define(CrExpandButtonElement.is, CrExpandButtonElement);

function getTemplate$E() {
    return html `<!--_html_template_start_--><style include="cr-icons cr-shared-style shared-style">:host{border-top:var(--cr-separator-line);display:block;padding:8px var(--cr-section-padding)}cr-expand-button{--cr-expand-button-disabled-display:none;height:calc(var(--cr-section-min-height) - var(--separator-gap))}cr-expand-button[disabled]{opacity:1}#activity-call-and-time{display:flex;flex:1;flex-direction:row;margin-inline-end:auto;max-width:var(--activity-log-call-and-time-width)}#activity-type{min-width:var(--activity-type-width)}#activity-name{flex:1;margin-inline-start:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#activity-time{min-width:var(--activity-time-width);text-align:end}#expanded-data{display:flex;flex-direction:column;margin-inline-start:16px;max-width:var(--activity-log-call-and-time-width)}#page-url-link{margin-bottom:10px;margin-inline-end:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}#args-list,#web-request-section{display:flex;flex-direction:column;margin-bottom:10px}.expanded-data-heading{font-weight:500}.list-item{display:flex;margin-top:10px}.index{min-width:3em}#web-request-details,.arg{overflow:hidden;overflow-wrap:break-word}#web-request-details{margin-top:10px}</style>
<cr-expand-button expanded="[[data.expanded]]" disabled="[[!isExpandable_]]" on-click="onExpandClick_">
  <div id="activity-call-and-time">
    <span id="activity-type">[[data.activityType]]</span>
    <span id="activity-name" title="[[data.name]]">[[data.name]]</span>
    <span id="activity-time">[[getFormattedTime_(data.timeStamp)]]</span>
  </div>
</cr-expand-button>
<div id="expanded-data" hidden$="[[!data.expanded]]">
  <a id="page-url-link" href="[[data.pageUrl]]" target="_blank" hidden$="[[!hasPageUrl_(data.pageUrl)]]" title="[[data.pageUrl]]">[[data.pageUrl]]</a>
  <div id="args-list" hidden$="[[!hasArgs_(argsList_)]]">
    <span class="expanded-data-heading">
      $i18n{activityArgumentsHeading}
    </span>
    <template is="dom-repeat" items="[[argsList_]]">
      <div class="list-item">
        <span class="index">[[item.index]]</span>
        <span class="arg">[[item.arg]]</span>
      </div>
    </template>
  </div>
  <div id="web-request-section" hidden$="[[!hasWebRequestInfo_(data.webRequestInfo)]]">
    <span class="expanded-data-heading">$i18n{webRequestInfoHeading}</span>
    <span id="web-request-details">[[data.webRequestInfo]]</span>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Placeholder for arg_url that can occur in |StreamItem.args|. Sometimes we
 * see this as '\u003Carg_url>' (opening arrow is unicode converted) but
 * string comparison with the non-unicode value still returns true so we
 * don't need to convert.
 */
const ARG_URL_PLACEHOLDER = '<arg_url>';
/**
 * Regex pattern for |ARG_URL_PLACEHOLDER| for String.replace. A regex of the
 * exact string with a global search flag is needed to replace all
 * occurrences.
 */
const ARG_URL_PLACEHOLDER_REGEX = /"<arg_url>"/g;
class ActivityLogStreamItemElement extends PolymerElement {
    static get is() {
        return 'activity-log-stream-item';
    }
    static get template() {
        return getTemplate$E();
    }
    static get properties() {
        return {
            /**
             * The underlying ActivityGroup that provides data for the
             * ActivityLogItem displayed.
             */
            data: Object,
            argsList_: {
                type: Array,
                computed: 'computeArgsList_(data.args)',
            },
            isExpandable_: {
                type: Boolean,
                computed: 'computeIsExpandable_(data)',
            },
        };
    }
    computeIsExpandable_() {
        return this.hasPageUrl_() || this.hasArgs_() || this.hasWebRequestInfo_();
    }
    getFormattedTime_() {
        // Format the activity's time to HH:MM:SS.mmm format. Use ToLocaleString
        // for HH:MM:SS and padLeft for milliseconds.
        const activityDate = new Date(this.data.timestamp);
        const timeString = activityDate.toLocaleTimeString(undefined, {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
        const ms = activityDate.getMilliseconds().toString().padStart(3, '0');
        return `${timeString}.${ms}`;
    }
    hasPageUrl_() {
        return !!this.data.pageUrl;
    }
    hasArgs_() {
        return this.argsList_.length > 0;
    }
    hasWebRequestInfo_() {
        return !!this.data.webRequestInfo && this.data.webRequestInfo !== '{}';
    }
    computeArgsList_() {
        const parsedArgs = JSON.parse(this.data.args);
        if (!Array.isArray(parsedArgs)) {
            return [];
        }
        // Replace occurrences AFTER parsing then stringifying as the JSON
        // serializer on the C++ side escapes certain characters such as '<' and
        // parsing un-escapes these characters.
        // See EscapeSpecialCodePoint in base/json/string_escape.cc.
        return parsedArgs.map((arg, i) => ({
            arg: JSON.stringify(arg).replace(ARG_URL_PLACEHOLDER_REGEX, `"${this.data.argUrl}"`),
            index: i + 1,
        }));
    }
    onExpandClick_() {
        if (this.isExpandable_) {
            this.set('data.expanded', !this.data.expanded);
            this.dispatchEvent(new CustomEvent('resize-stream'));
        }
    }
}
customElements.define(ActivityLogStreamItemElement.is, ActivityLogStreamItemElement);

function getTemplate$D() {
    return html `<!--_html_template_start_--><style include="shared-style">:host{--activity-log-call-and-time-width:575px;--activity-type-width:85px;--activity-time-width:100px;display:flex;flex-direction:column}cr-search-field{align-self:center;margin-inline-end:auto}.activity-table-headings{width:var(--activity-log-call-and-time-width)}#activity-type{flex:0 var(--activity-type-width)}#activity-key{flex:1;margin-inline-start:10px}#activity-time{flex:0 var(--activity-time-width);text-align:end}iron-list{flex:1}</style>
<div class="activity-subpage-header">
  <cr-search-field label="$i18n{activityLogSearchLabel}" on-search-changed="onSearchChanged_">
  </cr-search-field>
  <cr-button id="toggle-stream-button" on-click="onToggleButtonClick_">
    <span hidden$="[[isStreamOn_]]">
      $i18n{startActivityStream}
    </span>
    <span hidden$="[[!isStreamOn_]]">
      $i18n{stopActivityStream}
    </span>
  </cr-button>
  <cr-button class="clear-activities-button" on-click="clearStream">
    $i18n{clearActivities}
  </cr-button>
</div>
<div id="empty-stream-message" class="activity-message" hidden$="[[!isStreamEmpty_(activityStream_.length)]]">
  <span id="stream-stopped-message" hidden$="[[isStreamOn_]]">
    $i18n{emptyStreamStopped}
  </span>
  <span id="stream-started-message" hidden$="[[!isStreamOn_]]">
    $i18n{emptyStreamStarted}
  </span>
</div>
<div id="empty-search-message" class="activity-message" hidden$="[[!shouldShowEmptySearchMessage_(
        activityStream_.length, filteredActivityStream_.length)]]">
  $i18n{noSearchResults}
</div>
<div class="activity-table-headings" hidden$="[[isFilteredStreamEmpty_(filteredActivityStream_.length)]]">
  <span id="activity-type">$i18n{activityLogTypeColumn}</span>
  <span id="activity-key">$i18n{activityLogNameColumn}</span>
  <span id="activity-time">$i18n{activityLogTimeColumn}</span>
</div>
<iron-list items="[[filteredActivityStream_]]">
  <template>
    <activity-log-stream-item data="[[item]]"></activity-log-stream-item>
  </template>
</iron-list>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Process activity for the stream. In the case of content scripts, we split
 * the activity for every script invoked.
 */
function processActivityForStream(activity) {
    const activityType = activity.activityType;
    const timestamp = activity.time;
    const isContentScript = activityType ===
        chrome.activityLogPrivate.ExtensionActivityType.CONTENT_SCRIPT;
    const args = isContentScript ? JSON.stringify([]) : activity.args;
    let streamItemNames = [activity.apiCall];
    // TODO(kelvinjiang): Reuse logic from activity_log_history and refactor
    // some of the processing code into a separate file in a follow up CL.
    if (isContentScript) {
        streamItemNames = activity.args ? JSON.parse(activity.args) : [];
        assert(Array.isArray(streamItemNames), 'Invalid data for script names.');
    }
    const other = activity.other;
    const webRequestInfo = other && other.webRequest;
    return streamItemNames.map(name => ({
        args,
        argUrl: activity.argUrl,
        activityType,
        name,
        pageUrl: activity.pageUrl,
        timestamp,
        webRequestInfo,
        expanded: false,
    }));
}
class ActivityLogStreamElement extends PolymerElement {
    static get is() {
        return 'activity-log-stream';
    }
    static get template() {
        return getTemplate$D();
    }
    static get properties() {
        return {
            extensionId: String,
            delegate: Object,
            isStreamOn_: {
                type: Boolean,
                value: false,
            },
            activityStream_: {
                type: Array,
                value: () => [],
            },
            filteredActivityStream_: {
                type: Array,
                computed: 'computeFilteredActivityStream_(activityStream_.*, lastSearch_)',
            },
            lastSearch_: {
                type: String,
                value: '',
            },
        };
    }
    constructor() {
        super();
        /**
         * Instance of |extensionActivityListener_| bound to |this|.
         */
        this.listenerInstance_ = () => { };
    }
    connectedCallback() {
        super.connectedCallback();
        // Since this component is not restamped, this will only be called once
        // in its lifecycle.
        this.listenerInstance_ = this.extensionActivityListener_.bind(this);
        this.startStream();
    }
    onResizeStream_() {
        this.shadowRoot.querySelector('iron-list').notifyResize();
    }
    clearStream() {
        this.splice('activityStream_', 0, this.activityStream_.length);
    }
    startStream() {
        if (this.isStreamOn_) {
            return;
        }
        this.isStreamOn_ = true;
        this.delegate.getOnExtensionActivity().addListener(this.listenerInstance_);
    }
    pauseStream() {
        if (!this.isStreamOn_) {
            return;
        }
        this.delegate.getOnExtensionActivity().removeListener(this.listenerInstance_);
        this.isStreamOn_ = false;
    }
    onToggleButtonClick_() {
        if (this.isStreamOn_) {
            this.pauseStream();
        }
        else {
            this.startStream();
        }
    }
    isStreamEmpty_() {
        return this.activityStream_.length === 0;
    }
    isFilteredStreamEmpty_() {
        return this.filteredActivityStream_.length === 0;
    }
    shouldShowEmptySearchMessage_() {
        return !this.isStreamEmpty_() && this.isFilteredStreamEmpty_();
    }
    extensionActivityListener_(activity) {
        if (activity.extensionId !== this.extensionId) {
            return;
        }
        this.splice('activityStream_', this.activityStream_.length, 0, ...processActivityForStream(activity));
        // Used to update the scrollbar.
        this.shadowRoot.querySelector('iron-list').notifyResize();
    }
    onSearchChanged_(e) {
        // Remove all whitespaces from the search term, as API call names and
        // URLs should not contain any whitespace. As of now, only single term
        // search queries are allowed.
        const searchTerm = e.detail.replace(/\s+/g, '').toLowerCase();
        if (searchTerm === this.lastSearch_) {
            return;
        }
        this.lastSearch_ = searchTerm;
    }
    computeFilteredActivityStream_() {
        if (!this.lastSearch_) {
            return this.activityStream_.slice();
        }
        // Match on these properties for each activity.
        const propNames = [
            'name',
            'pageUrl',
            'activityType',
        ];
        return this.activityStream_.filter(act => {
            return propNames.some(prop => {
                const value = act[prop];
                return value && value.toLowerCase().includes(this.lastSearch_);
            });
        });
    }
}
customElements.define(ActivityLogStreamElement.is, ActivityLogStreamElement);

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

function getCss$3() {
    return css `:host dialog{background-color:var(--cr-menu-background-color);border:none;border-radius:var(--cr-menu-border-radius,4px);box-shadow:var(--cr-menu-shadow);margin:0;min-width:128px;outline:0;padding:0;position:absolute}@media (forced-colors:active){:host dialog{border:var(--cr-border-hcm)}}:host-context([chrome-refresh-2023]){--cr-hairline:1px solid var(--color-menu-separator,
      var(--cr-fallback-color-divider));--cr-action-menu-disabled-item-color:var(--color-menu-item-foreground-disabled,
          var(--cr-fallback-color-disabled-foreground));--cr-action-menu-disabled-item-opacity:1;--cr-menu-background-color:var(--color-menu-background,
      var(--cr-fallback-color-surface));--cr-menu-background-focus-color:var(--cr-hover-background-color);--cr-menu-shadow:var(--cr-elevation-2);--cr-primary-text-color:var(--color-menu-item-foreground,
      var(--cr-fallback-color-on-surface))}:host dialog::backdrop{background-color:transparent}:host ::slotted(.dropdown-item){-webkit-tap-highlight-color:transparent;background:0 0;border:none;border-radius:0;box-sizing:border-box;color:var(--cr-primary-text-color);font:inherit;min-height:32px;padding:8px 24px;text-align:start;user-select:none;width:100%}:host ::slotted(.dropdown-item:not([hidden])){align-items:center;display:flex}:host ::slotted(.dropdown-item[disabled]){color:var(--cr-action-menu-disabled-item-color,var(--cr-primary-text-color));opacity:var(--cr-action-menu-disabled-item-opacity,.65)}:host ::slotted(.dropdown-item:not([disabled])){cursor:pointer}:host ::slotted(.dropdown-item:focus){background-color:var(--cr-menu-background-focus-color);outline:0}@media (forced-colors:active){:host ::slotted(.dropdown-item:focus){outline:var(--cr-focus-outline-hcm)}}.item-wrapper{background:var(--cr-menu-background-sheen);outline:0;padding:8px 0}:host-context([chrome-refresh-2023]) .item-wrapper{background:0 0}`;
}

function getHtml$1() {
    return html$1 `<!--_html_template_start_-->
<dialog id="dialog" part="dialog" @close="${this.onNativeDialogClose_}" role="application" aria-roledescription="${this.roleDescription || nothing}">
  <div id="wrapper" class="item-wrapper" role="menu" tabindex="-1" aria-label="${this.accessibilityLabel || nothing}">
    <slot id="contentNode" @slotchange="${this.onSlotchange_}"></slot>
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
class CrActionMenuElement extends CrLitElement {
    constructor() {
        super(...arguments);
        this.autoReposition = false;
        this.open = false;
        this.boundClose_ = null;
        this.resizeObserver_ = null;
        this.hasMousemoveListener_ = false;
        this.anchorElement_ = null;
        this.lastConfig_ = null;
    }
    static get is() {
        return 'cr-action-menu';
    }
    static get styles() {
        return getCss$3();
    }
    render() {
        return getHtml$1.bind(this)();
    }
    static get properties() {
        return {
            // Accessibility text of the menu. Should be something along the lines of
            // "actions", or "more actions".
            accessibilityLabel: { type: String },
            // Setting this flag will make the menu listen for content size changes
            // and reposition to its anchor accordingly.
            autoReposition: { type: Boolean },
            open: {
                type: Boolean,
                notify: true,
            },
            // Descriptor of the menu. Should be something along the lines of "menu"
            roleDescription: { type: String },
        };
    }
    firstUpdated() {
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('mouseover', this.onMouseover_);
        this.addEventListener('click', this.onClick_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeListeners_();
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
        this.fire('close');
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
                this.fire('tabkeyclose', { shiftKey: e.shiftKey });
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
        if (!this.open) {
            return;
        }
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
                    this.fire('cr-action-menu-repositioned'); // For easier testing.
                }
            });
            this.resizeObserver_.observe(this.$.dialog);
        }
    }
}
customElements.define(CrActionMenuElement.is, CrActionMenuElement);

function getTemplate$C() {
    return html `<!--_html_template_start_--><style include="cr-icons cr-shared-style shared-style">:host{border-top:var(--cr-separator-line);display:block;padding-bottom:8px;padding-inline-end:8px;padding-inline-start:var(--cr-section-padding);padding-top:8px}#activity-item-main-row{align-items:center;display:flex;flex-direction:row;min-height:calc(var(--cr-section-min-height) - var(--separator-gap))}#activity-item-main-row .separator{margin:0 calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin))}#activity-item-main-row cr-expand-button{margin-inline-end:6px}#activity-call-and-count{display:flex;flex:1;flex-direction:row;margin-inline-end:auto;max-width:var(--activity-log-call-and-count-width)}#activity-delete{margin:0}#activity-type{flex:0 var(--activity-type-width)}#activity-key{flex:1;margin-inline-start:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#activity-count{flex:0 var(--activity-count-width);text-align:end}.page-url{display:flex;flex-direction:row;margin-bottom:10px;max-width:var(--activity-log-call-and-count-width)}.page-url-link{flex-grow:1;margin-inline-end:20px;margin-inline-start:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}</style>
<div actionable$="[[isExpandable_]]" id="activity-item-main-row" on-click="onExpandClick_">
  <div id="activity-call-and-count">
    <span id="activity-type">[[data.activityType]]</span>
    <span id="activity-key" title="[[data.key]]">[[data.key]]</span>
    <span id="activity-count">[[data.count]]</span>
  </div>
  <cr-expand-button no-hover expanded="{{data.expanded}}" hidden$="[[!isExpandable_]]">
  </cr-expand-button>
  <div class="separator" hidden$="[[!isExpandable_]]"></div>
  <cr-icon-button id="activity-delete" class="icon-delete-gray" aria-describedby="api-call" aria-label="$i18n{clearEntry}" on-click="onDeleteClick_"></cr-icon-button>
</div>
<div id="page-url-list" hidden$="[[!data.expanded]]">
  <template is="dom-repeat" items="[[getPageUrls_(data)]]">
    <div class="page-url">
      <a class="page-url-link" href="[[item.page]]" target="_blank" title="[[item.page]]">[[item.page]]</a>
      <span class="page-url-count" hidden$="[[!shouldShowPageUrlCount_(data)]]">
        [[item.count]]
      </span>
    </div>
  </template>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ActivityLogHistoryItemElement extends PolymerElement {
    static get is() {
        return 'activity-log-history-item';
    }
    static get template() {
        return getTemplate$C();
    }
    static get properties() {
        return {
            /**
             * The underlying ActivityGroup that provides data for the
             * ActivityLogItem displayed.
             */
            data: Object,
            isExpandable_: {
                type: Boolean,
                computed: 'computeIsExpandable_(data.countsByUrl)',
            },
        };
    }
    computeIsExpandable_() {
        return this.data.countsByUrl.size > 0;
    }
    /**
     * Sort the page URLs by the number of times it was associated with the key
     * for this ActivityGroup (API call or content script invocation.) Resolve
     * ties by the alphabetical order of the page URL.
     */
    getPageUrls_() {
        return Array.from(this.data.countsByUrl.entries())
            .map(e => ({ page: e[0], count: e[1] }))
            .sort(function (a, b) {
            if (a.count !== b.count) {
                return b.count - a.count;
            }
            return a.page < b.page ? -1 : (a.page > b.page ? 1 : 0);
        });
    }
    onDeleteClick_(e) {
        e.stopPropagation();
        this.dispatchEvent(new CustomEvent('delete-activity-log-item', {
            bubbles: true,
            composed: true,
            detail: Array.from(this.data.activityIds.values()),
        }));
    }
    onExpandClick_() {
        if (this.isExpandable_) {
            this.set('data.expanded', !this.data.expanded);
        }
    }
    /**
     * Show the call count for a particular page URL if more than one page
     * URL is associated with the key for this ActivityGroup.
     */
    shouldShowPageUrlCount_() {
        return this.data.countsByUrl.size > 1;
    }
}
customElements.define(ActivityLogHistoryItemElement.is, ActivityLogHistoryItemElement);

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

function getTemplate$B() {
    return html `<!--_html_template_start_--><style include="shared-style">:host{--activity-log-call-and-count-width:514px;--activity-type-width:85px;--activity-count-width:100px;display:flex;flex-direction:column}cr-search-field{align-self:center;margin-inline-end:auto}cr-icon-button{margin:0}.activity-table-headings{width:var(--activity-log-call-and-count-width)}#activity-list{overflow-y:auto}#activity-type{flex:0 var(--activity-type-width)}#activity-key{flex:1;margin-inline-start:10px}#activity-count{flex:0 var(--activity-count-width);text-align:end}</style>
<div class="activity-subpage-header">
  <cr-search-field label="$i18n{activityLogSearchLabel}" on-search-changed="onSearchChanged_">
  </cr-search-field>
  <cr-button class="clear-activities-button" on-click="onClearActivitiesClick_">
    $i18n{clearActivities}
  </cr-button>
  <cr-icon-button id="more-actions" iron-icon="cr:more-vert" title="$i18n{activityLogMoreActionsLabel}" on-click="onMoreActionsClick_"></cr-icon-button>
  <cr-action-menu role-description="$i18n{menu}">
    <button id="expand-all-button" class="dropdown-item" on-click="onExpandAllClick_">
      $i18n{activityLogExpandAll}
    </button>
    <button id="collapse-all-button" class="dropdown-item" on-click="onCollapseAllClick_">
      $i18n{activityLogCollapseAll}
    </button>
    <button id="export-button" class="dropdown-item" on-click="onExportClick_">
      $i18n{activityLogExportHistory}
    </button>
  </cr-action-menu>
</div>
<div id="loading-activities" class="activity-message" hidden$="[[!shouldShowLoadingMessage_(
        pageState_)]]">
  <span>$i18n{loadingActivities}</span>
</div>
<div id="no-activities" class="activity-message" hidden$="[[!shouldShowEmptyActivityLogMessage_(
        pageState_, activityData_)]]">
  <span>$i18n{noActivities}</span>
</div>
<div class="activity-table-headings" hidden$="[[!shouldShowActivities_(pageState_, activityData_)]]">
  <span id="activity-type">$i18n{activityLogTypeColumn}</span>
  <span id="activity-key">$i18n{activityLogNameColumn}</span>
  <span id="activity-count">$i18n{activityLogCountColumn}</span>
</div>
<div id="activity-list" hidden$="[[!shouldShowActivities_(pageState_, activityData_)]]">
  <template is="dom-repeat" items="[[activityData_]]">
    <activity-log-history-item data="[[item]]">
    </activity-log-history-item>
  </template>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The different states the activity log page can be in. Initial state is
 * LOADING because we call the activity log API whenever a user navigates to
 * the page. LOADED is the state where the API call has returned a successful
 * result.
 */
var ActivityLogPageState;
(function (ActivityLogPageState) {
    ActivityLogPageState["LOADING"] = "loading";
    ActivityLogPageState["LOADED"] = "loaded";
})(ActivityLogPageState || (ActivityLogPageState = {}));
/**
 * Content scripts activities do not have an API call, so we use the names of
 * the scripts executed (specified as a stringified JSON array in the args
 * field) as the keys for an activity group instead.
 */
function getActivityGroupKeysForContentScript(activity) {
    assert(activity.activityType ===
        chrome.activityLogPrivate.ExtensionActivityType.CONTENT_SCRIPT);
    if (!activity.args) {
        return [];
    }
    const parsedArgs = JSON.parse(activity.args);
    assert(Array.isArray(parsedArgs), 'Invalid API data.');
    return parsedArgs;
}
/**
 * Web request activities can have extra information which describes what the
 * web request does in more detail than just the api_call. This information
 * is in activity.other.webRequest and we use this to generate more activity
 * group keys if possible.
 */
function getActivityGroupKeysForWebRequest(activity) {
    assert(activity.activityType ===
        chrome.activityLogPrivate.ExtensionActivityType.WEB_REQUEST);
    const apiCall = activity.apiCall;
    const other = activity.other;
    if (!other || !other.webRequest) {
        return [apiCall];
    }
    const webRequest = JSON.parse(other.webRequest);
    assert(typeof webRequest === 'object', 'Invalid API data');
    // If there is extra information in the other.webRequest object,
    // construct a group for each consisting of the API call and each object key
    // in other.webRequest. Otherwise we default to just the API call.
    return Object.keys(webRequest).length === 0 ?
        [apiCall] :
        Object.keys(webRequest).map(field => `${apiCall} (${field})`);
}
/**
 * Group activity log entries by a key determined from each entry. Usually
 * this would be the activity's API call though content script and web
 * requests have different keys. We currently assume that every API call
 * matches to one activity type.
 */
function groupActivities(activityData) {
    const groupedActivities = new Map();
    for (const activity of activityData) {
        const activityId = activity.activityId;
        const activityType = activity.activityType;
        const count = activity.count;
        const pageUrl = activity.pageUrl;
        const isContentScript = activityType ===
            chrome.activityLogPrivate.ExtensionActivityType.CONTENT_SCRIPT;
        const isWebRequest = activityType ===
            chrome.activityLogPrivate.ExtensionActivityType.WEB_REQUEST;
        let activityGroupKeys = [activity.apiCall];
        if (isContentScript) {
            activityGroupKeys = getActivityGroupKeysForContentScript(activity);
        }
        else if (isWebRequest) {
            activityGroupKeys = getActivityGroupKeysForWebRequest(activity);
        }
        for (const key of activityGroupKeys) {
            if (!groupedActivities.has(key)) {
                const activityGroup = {
                    activityIds: new Set([activityId]),
                    key,
                    count,
                    activityType,
                    countsByUrl: pageUrl ? new Map([[pageUrl, count]]) : new Map(),
                    expanded: false,
                };
                groupedActivities.set(key, activityGroup);
            }
            else {
                const activityGroup = groupedActivities.get(key);
                activityGroup.activityIds.add(activityId);
                activityGroup.count += count;
                if (pageUrl) {
                    const currentCount = activityGroup.countsByUrl.get(pageUrl) || 0;
                    activityGroup.countsByUrl.set(pageUrl, currentCount + count);
                }
            }
        }
    }
    return groupedActivities;
}
/**
 * Sort activities by the total count for each activity group key. Resolve
 * ties by the alphabetical order of the key.
 */
function sortActivitiesByCallCount(groupedActivities) {
    return Array.from(groupedActivities.values()).sort((a, b) => {
        if (a.count !== b.count) {
            return b.count - a.count;
        }
        if (a.key < b.key) {
            return -1;
        }
        if (a.key > b.key) {
            return 1;
        }
        return 0;
    });
}
class ActivityLogHistoryElement extends PolymerElement {
    static get is() {
        return 'activity-log-history';
    }
    static get template() {
        return getTemplate$B();
    }
    static get properties() {
        return {
            extensionId: String,
            delegate: Object,
            /**
             * An array representing the activity log. Stores activities grouped by
             * API call or content script name sorted in descending order of the call
             * count.
             */
            activityData_: {
                type: Array,
                value: () => [],
            },
            pageState_: {
                type: String,
                value: ActivityLogPageState.LOADING,
            },
            lastSearch_: {
                type: String,
                value: '',
            },
        };
    }
    constructor() {
        super();
        /**
         * A promise resolver for any external files waiting for the
         * GetExtensionActivity API call to finish.
         * Currently only used for extension_settings_browsertest.cc
         */
        this.dataFetchedResolver_ = null;
        /**
         * The stringified API response from the activityLogPrivate API with
         * individual activities sorted in ascending order by timestamp; used for
         * exporting the activity log.
         */
        this.rawActivities_ = '';
    }
    ready() {
        super.ready();
        this.addEventListener('delete-activity-log-item', e => this.deleteItem_(e));
    }
    setPageStateForTest(state) {
        this.pageState_ = state;
    }
    /**
     * Expose only the promise of dataFetchedResolver_.
     */
    whenDataFetched() {
        return this.dataFetchedResolver_.promise;
    }
    connectedCallback() {
        super.connectedCallback();
        this.dataFetchedResolver_ = new PromiseResolver();
        this.refreshActivities_();
    }
    shouldShowEmptyActivityLogMessage_() {
        return this.pageState_ === ActivityLogPageState.LOADED &&
            this.activityData_.length === 0;
    }
    shouldShowLoadingMessage_() {
        return this.pageState_ === ActivityLogPageState.LOADING;
    }
    shouldShowActivities_() {
        return this.pageState_ === ActivityLogPageState.LOADED &&
            this.activityData_.length > 0;
    }
    onClearActivitiesClick_() {
        this.delegate.deleteActivitiesFromExtension(this.extensionId).then(() => {
            this.processActivities_([]);
        });
    }
    onMoreActionsClick_() {
        const moreButton = this.shadowRoot.querySelector('cr-icon-button');
        assert(moreButton);
        this.shadowRoot.querySelector('cr-action-menu').showAt(moreButton);
    }
    expandItems_(expanded) {
        // Do not use .filter here as we need the original index of the item
        // in |activityData_|.
        this.activityData_.forEach((item, index) => {
            if (item.countsByUrl.size > 0) {
                this.set(`activityData_.${index}.expanded`, expanded);
            }
        });
        this.shadowRoot.querySelector('cr-action-menu').close();
    }
    onExpandAllClick_() {
        this.expandItems_(true);
    }
    onCollapseAllClick_() {
        this.expandItems_(false);
    }
    onExportClick_() {
        const fileName = `exported_activity_log_${this.extensionId}.json`;
        this.delegate.downloadActivities(this.rawActivities_, fileName);
    }
    deleteItem_(e) {
        const activityIds = e.detail;
        this.delegate.deleteActivitiesById(activityIds).then(() => {
            // It is possible for multiple activities displayed to have the same
            // underlying activity ID. This happens when we split content script and
            // web request activities by fields other than their API call. For
            // consistency, we will re-fetch the activity log.
            this.refreshActivities_();
        });
    }
    processActivities_(activityData) {
        this.pageState_ = ActivityLogPageState.LOADED;
        // Sort |activityData| in ascending order based on the activity's
        // timestamp; Used for |this.encodedRawActivities|.
        activityData.sort((a, b) => a.time - b.time);
        this.rawActivities_ = JSON.stringify(activityData);
        this.activityData_ =
            sortActivitiesByCallCount(groupActivities(activityData));
        if (!this.dataFetchedResolver_.isFulfilled) {
            this.dataFetchedResolver_.resolve();
        }
    }
    refreshActivities_() {
        if (this.lastSearch_ === '') {
            return this.getActivityLog_();
        }
        return this.getFilteredActivityLog_(this.lastSearch_);
    }
    getActivityLog_() {
        this.pageState_ = ActivityLogPageState.LOADING;
        return this.delegate.getExtensionActivityLog(this.extensionId)
            .then(result => {
            this.processActivities_(result.activities);
        });
    }
    getFilteredActivityLog_(searchTerm) {
        this.pageState_ = ActivityLogPageState.LOADING;
        return this.delegate
            .getFilteredExtensionActivityLog(this.extensionId, searchTerm)
            .then(result => {
            this.processActivities_(result.activities);
        });
    }
    onSearchChanged_(e) {
        // Remove all whitespaces from the search term, as API call names and
        // urls should not contain any whitespace. As of now, only single term
        // search queries are allowed.
        const searchTerm = e.detail.replace(/\s+/g, '');
        if (searchTerm === this.lastSearch_) {
            return;
        }
        this.lastSearch_ = searchTerm;
        this.refreshActivities_();
    }
}
customElements.define(ActivityLogHistoryElement.is, ActivityLogHistoryElement);

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

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The different pages that can be shown at a time.
 * Note: This must remain in sync with the page ids in manager.html!
 */
var Page;
(function (Page) {
    Page["LIST"] = "items-list";
    Page["DETAILS"] = "details-view";
    Page["ACTIVITY_LOG"] = "activity-log";
    Page["SITE_PERMISSIONS"] = "site-permissions";
    Page["SITE_PERMISSIONS_ALL_SITES"] = "site-permissions-by-site";
    Page["SHORTCUTS"] = "keyboard-shortcuts";
    Page["ERRORS"] = "error-page";
})(Page || (Page = {}));
var Dialog;
(function (Dialog) {
    Dialog["OPTIONS"] = "options";
})(Dialog || (Dialog = {}));
/** @return Whether a and b are equal. */
function isPageStateEqual(a, b) {
    return a.page === b.page && a.subpage === b.subpage &&
        a.extensionId === b.extensionId;
}
/**
 * Regular expression that captures the leading slash, the content and the
 * trailing slash in three different groups.
 */
const CANONICAL_PATH_REGEX = /(^\/)([\/-\w]+)(\/$)/;
/**
 * A helper object to manage in-page navigations. Since the extensions page
 * needs to support different urls for different subpages (like the details
 * page), we use this object to manage the history and url conversions.
 */
class NavigationHelper {
    constructor() {
        this.nextListenerId_ = 1;
        this.listeners_ = new Map();
        this.processRoute_();
        window.addEventListener('popstate', () => {
            this.notifyRouteChanged_(this.getCurrentPage());
        });
    }
    get currentPath_() {
        return location.pathname.replace(CANONICAL_PATH_REGEX, '$1$2');
    }
    /**
     * Going to /configureCommands and /shortcuts should land you on /shortcuts,
     * and going to /sitePermissions should land you on /sitePermissions.
     * These are the only three supported routes, so all other cases will redirect
     * you to root path if not already on it.
     */
    processRoute_() {
        if (this.currentPath_ === '/configureCommands' ||
            this.currentPath_ === '/shortcuts') {
            window.history.replaceState(undefined /* stateObject */, '', '/shortcuts');
        }
        else if (this.currentPath_ === '/sitePermissions') {
            window.history.replaceState(undefined /* stateObject */, '', '/sitePermissions');
        }
        else if (this.currentPath_ === '/sitePermissions/allSites') {
            window.history.replaceState(undefined /* stateObject */, '', '/sitePermissions/allSites');
        }
        else if (this.currentPath_ !== '/') {
            window.history.replaceState(undefined /* stateObject */, '', '/');
        }
    }
    /**
     * @return The page that should be displayed for the current URL.
     */
    getCurrentPage() {
        const search = new URLSearchParams(location.search);
        let id = search.get('id');
        if (id) {
            return { page: Page.DETAILS, extensionId: id };
        }
        id = search.get('activity');
        if (id) {
            return { page: Page.ACTIVITY_LOG, extensionId: id };
        }
        id = search.get('options');
        if (id) {
            return { page: Page.DETAILS, extensionId: id, subpage: Dialog.OPTIONS };
        }
        id = search.get('errors');
        if (id) {
            return { page: Page.ERRORS, extensionId: id };
        }
        if (this.currentPath_ === '/shortcuts') {
            return { page: Page.SHORTCUTS };
        }
        if (this.currentPath_ === '/sitePermissions') {
            return { page: Page.SITE_PERMISSIONS };
        }
        if (this.currentPath_ === '/sitePermissions/allSites') {
            return { page: Page.SITE_PERMISSIONS_ALL_SITES };
        }
        return { page: Page.LIST };
    }
    /**
     * Function to add subscribers.
     * @param {!function(!PageState)} listener
     * @return A numerical ID to be used for removing the listener.
     */
    addListener(listener) {
        const nextListenerId = this.nextListenerId_++;
        this.listeners_.set(nextListenerId, listener);
        return nextListenerId;
    }
    /**
     * Remove a previously registered listener.
     * @return Whether a listener with the given ID was actually found and
     *   removed.
     */
    removeListener(id) {
        return this.listeners_.delete(id);
    }
    /**
     * Function to notify subscribers.
     */
    notifyRouteChanged_(newPage) {
        for (const listener of this.listeners_.values()) {
            listener(newPage);
        }
    }
    /**
     * @param newPage the page to navigate to.
     */
    navigateTo(newPage) {
        const currentPage = this.getCurrentPage();
        if (currentPage && isPageStateEqual(currentPage, newPage)) {
            return;
        }
        this.updateHistory(newPage, false /* replaceState */);
        this.notifyRouteChanged_(newPage);
    }
    /**
     * @param newPage the page to replace the current page with.
     */
    replaceWith(newPage) {
        this.updateHistory(newPage, true /* replaceState */);
        if (this.previousPage_ && isPageStateEqual(this.previousPage_, newPage)) {
            // Skip the duplicate history entry.
            history.back();
            return;
        }
        this.notifyRouteChanged_(newPage);
    }
    /**
     * Called when a page changes, and pushes state to history to reflect it.
     */
    updateHistory(entry, replaceState) {
        let path;
        switch (entry.page) {
            case Page.LIST:
                path = '/';
                break;
            case Page.ACTIVITY_LOG:
                path = '/?activity=' + entry.extensionId;
                break;
            case Page.DETAILS:
                if (entry.subpage) {
                    assert(entry.subpage === Dialog.OPTIONS);
                    path = '/?options=' + entry.extensionId;
                }
                else {
                    path = '/?id=' + entry.extensionId;
                }
                break;
            case Page.SITE_PERMISSIONS:
                path = '/sitePermissions';
                break;
            case Page.SITE_PERMISSIONS_ALL_SITES:
                path = '/sitePermissions/allSites';
                break;
            case Page.SHORTCUTS:
                path = '/shortcuts';
                break;
            case Page.ERRORS:
                path = '/?errors=' + entry.extensionId;
                break;
        }
        assert(path);
        const state = { url: path };
        const currentPage = this.getCurrentPage();
        const isDialogNavigation = currentPage.page === entry.page &&
            currentPage.extensionId === entry.extensionId;
        // Navigating to a dialog doesn't visually change pages; it just opens
        // a dialog. As such, we replace state rather than pushing a new state
        // on the stack so that hitting the back button doesn't just toggle the
        // dialog.
        if (replaceState || isDialogNavigation) {
            history.replaceState(state, '', path);
        }
        else {
            this.previousPage_ = currentPage;
            history.pushState(state, '', path);
        }
    }
}
const navigation = new NavigationHelper();

function getTemplate$A() {
    return html `<!--_html_template_start_--><style include="cr-icons cr-shared-style shared-style">#clear-activities-button{margin-inline-start:8px}#closeButton{margin-inline-end:16px}#icon{height:24px;margin-inline-end:12px;width:24px}cr-tabs{--cr-tabs-font-size:inherit;--cr-tabs-height:40px;border-bottom:1px solid var(--google-grey-300)}.page-content{display:flex;flex-direction:column;padding-bottom:0}iron-pages{flex:1;position:relative}activity-log-history,activity-log-stream{bottom:0;position:absolute;top:0;width:100%}</style>
<div class="page-container" id="container">
  <div class="page-content">
    <div class="page-header">
      <cr-icon-button class="icon-arrow-back no-overlap" id="closeButton" aria-label="$i18n{back}" on-click="onCloseButtonClick_">
      </cr-icon-button>
      <template is="dom-if" if="[[!extensionInfo.isPlaceholder]]">
        <img id="icon" src="[[extensionInfo.iconUrl]]" alt="">
      </template>
      <div class="cr-title-text">
        [[getActivityLogHeading_(extensionInfo)]]
      </div>
    </div>
    <cr-tabs selected="{{selectedSubpage_}}" tab-names="[[tabNames_]]">
    </cr-tabs>
    <iron-pages selected="[[selectedSubpage_]]">
      <div>
        <template is="dom-if" if="[[isHistoryTabSelected_(selectedSubpage_)]]" restamp>
          <activity-log-history extension-id="[[extensionInfo.id]]" delegate="[[delegate]]">
          </activity-log-history>
        </template>
      </div>
      <div>
        <template is="dom-if" if="[[isStreamTabSelected_(selectedSubpage_)]]">
          <activity-log-stream extension-id="[[extensionInfo.id]]" delegate="[[delegate]]">
          </activity-log-stream>
        </template>
      </div>
    </iron-pages>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsActivityLogElementBase = I18nMixin(PolymerElement);
class ExtensionsActivityLogElement extends ExtensionsActivityLogElementBase {
    static get is() {
        return 'extensions-activity-log';
    }
    static get template() {
        return getTemplate$A();
    }
    static get properties() {
        return {
            /**
             * The underlying ExtensionInfo for the details being displayed.
             */
            extensionInfo: Object,
            delegate: Object,
            selectedSubpage_: {
                type: Number,
                value: -1 /* ActivityLogSubpage.NONE */,
                observer: 'onSelectedSubpageChanged_',
            },
            tabNames_: {
                type: Array,
                value: () => ([
                    loadTimeData.getString('activityLogHistoryTabHeading'),
                    loadTimeData.getString('activityLogStreamTabHeading'),
                ]),
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('view-enter-start', this.onViewEnterStart_);
        this.addEventListener('view-exit-finish', this.onViewExitFinish_);
    }
    /**
     * Focuses the back button when page is loaded and set the activie view to
     * be HISTORY when we navigate to the page.
     */
    onViewEnterStart_() {
        this.selectedSubpage_ = 0 /* ActivityLogSubpage.HISTORY */;
        afterNextRender(this, () => focusWithoutInk(this.$.closeButton));
    }
    /**
     * Set |selectedSubpage_| to NONE to remove the active view from the DOM.
     */
    onViewExitFinish_() {
        this.selectedSubpage_ = -1 /* ActivityLogSubpage.NONE */;
        // clear the stream if the user is exiting the activity log page.
        const activityLogStream = this.shadowRoot.querySelector('activity-log-stream');
        if (activityLogStream) {
            activityLogStream.clearStream();
        }
    }
    getActivityLogHeading_() {
        const headingName = this.extensionInfo.isPlaceholder ?
            this.i18n('missingOrUninstalledExtension') :
            this.extensionInfo.name;
        return this.i18n('activityLogPageHeading', headingName);
    }
    isHistoryTabSelected_() {
        return this.selectedSubpage_ === 0 /* ActivityLogSubpage.HISTORY */;
    }
    isStreamTabSelected_() {
        return this.selectedSubpage_ === 1 /* ActivityLogSubpage.STREAM */;
    }
    onSelectedSubpageChanged_(newTab, oldTab) {
        const activityLogStream = this.shadowRoot.querySelector('activity-log-stream');
        if (activityLogStream) {
            if (newTab === 1 /* ActivityLogSubpage.STREAM */) {
                // Start the stream if the user is switching to the real-time tab.
                // This will not handle the first tab switch to the real-time tab as
                // the stream has not been attached to the DOM yet, and is handled
                // instead by the stream's |connectedCallback| method.
                activityLogStream.startStream();
            }
            else if (oldTab === 1 /* ActivityLogSubpage.STREAM */) {
                // Pause the stream if the user is navigating away from the real-time
                // tab.
                activityLogStream.pauseStream();
            }
        }
    }
    onCloseButtonClick_() {
        if (this.extensionInfo.isPlaceholder) {
            navigation.navigateTo({ page: Page.LIST });
        }
        else {
            navigation.navigateTo({ page: Page.DETAILS, extensionId: this.extensionInfo.id });
        }
    }
}
customElements.define(ExtensionsActivityLogElement.is, ExtensionsActivityLogElement);

const styleMod$4 = document.createElement('dom-module');
styleMod$4.appendChild(html `
  <template>
    <style>
:host{align-items:center;align-self:stretch;display:flex;margin:0;outline:0}:host(:not([effectively-disabled_])){cursor:pointer}:host(:not([no-hover],[effectively-disabled_]):hover){background-color:var(--cr-hover-background-color)}:host(:not([no-hover],[effectively-disabled_]):active){background-color:var(--cr-active-background-color)}:host(:not([no-hover],[effectively-disabled_])) cr-icon-button{--cr-icon-button-hover-background-color:transparent;--cr-icon-button-active-background-color:transparent}
    </style>
  </template>
`.content);
styleMod$4.register('cr-actionable-row-style');

function getTemplate$z() {
    return html `<!--_html_template_start_--><style include="cr-actionable-row-style cr-shared-style cr-hidden-style">:host{box-sizing:border-box;flex:1;font-family:inherit;font-size:100%;line-height:154%;min-height:var(--cr-section-min-height);padding:0}:host(:not([embedded])){padding:0 var(--cr-section-padding)}#startIcon{--iron-icon-fill-color:var(--cr-link-row-start-icon-color,
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
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * A link row is a UI element similar to a button, though usually wider than a
 * button (taking up the whole 'row'). The name link comes from the intended use
 * of this element to take the user to another page in the app or to an external
 * page (somewhat like an HTML link).
 */
class CrLinkRowElement extends PolymerElement {
    static get is() {
        return 'cr-link-row';
    }
    static get template() {
        return getTemplate$z();
    }
    static get properties() {
        return {
            ariaShowLabel: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            ariaShowSublabel: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            startIcon: {
                type: String,
                value: '',
            },
            label: {
                type: String,
                value: '',
            },
            subLabel: {
                type: String,
                /* Value used for noSubLabel attribute. */
                value: '',
            },
            disabled: {
                type: Boolean,
                reflectToAttribute: true,
            },
            external: {
                type: Boolean,
                value: false,
            },
            usingSlottedLabel: {
                type: Boolean,
                value: false,
            },
            roleDescription: String,
            buttonAriaDescription: String,
            hideLabelWrapper_: {
                type: Boolean,
                computed: 'computeHideLabelWrapper_(label, usingSlottedLabel)',
            },
        };
    }
    focus() {
        this.$.icon.focus();
    }
    computeHideLabelWrapper_() {
        return !(this.label || this.usingSlottedLabel);
    }
    getIcon_() {
        return this.external ? 'cr:open-in-new' : 'cr:arrow-right';
    }
    computeButtonAriaDescription_(external, buttonAriaDescription) {
        return buttonAriaDescription ??
            (external ? loadTimeData.getString('opensInNewTab') : '');
    }
}
customElements.define(CrLinkRowElement.is, CrLinkRowElement);

function getTemplate$y() {
    return html `<!--_html_template_start_-->    <style>:host{--cr-toggle-checked-bar-color:var(--google-blue-600);--cr-toggle-checked-button-color:var(--google-blue-600);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-600-rgb), .2);--cr-toggle-ripple-diameter:40px;--cr-toggle-unchecked-bar-color:var(--google-grey-400);--cr-toggle-unchecked-button-color:white;--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-600-rgb), .15);-webkit-tap-highlight-color:transparent;cursor:pointer;display:block;min-width:34px;outline:0;position:relative;width:34px}:host-context([chrome-refresh-2023]):host{--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on,
                var(--cr-fallback-color-primary));--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on,
                var(--cr-fallback-color-on-primary));--cr-toggle-unchecked-bar-color:var(--color-toggle-button-track-off,
                var(--cr-fallback-color-surface-variant));--cr-toggle-unchecked-button-color:var(--color-toggle-button-thumb-off,
                var(--cr-fallback-color-outline));--cr-toggle-disabled-opacity:1;--cr-toggle-checked-ripple-color:var(--cr-active-background-color);--cr-toggle-unchecked-ripple-color:var(--cr-active-background-color);--cr-toggle-ripple-diameter:20px;--cr-toggle-bar-border-color:var(--cr-toggle-unchecked-button-color);--cr-toggle-bar-border:1px solid var(--cr-toggle-bar-border-color);--cr-toggle-bar-width:26px;--cr-toggle-knob-diameter:8px;height:fit-content;isolation:isolate;min-width:initial;width:fit-content}@media (forced-colors:active){:host{forced-color-adjust:none}}@media (prefers-color-scheme:dark){:host{--cr-toggle-checked-bar-color:var(--google-blue-300);--cr-toggle-checked-button-color:var(--google-blue-300);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-toggle-unchecked-bar-color:var(--google-grey-500);--cr-toggle-unchecked-button-color:var(--google-grey-300);--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}}:host([dark]){--cr-toggle-checked-bar-color:var(--google-blue-300);--cr-toggle-checked-button-color:var(--google-blue-300);--cr-toggle-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-toggle-unchecked-bar-color:var(--google-grey-500);--cr-toggle-unchecked-button-color:var(--google-grey-300);--cr-toggle-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}:host-context([chrome-refresh-2023]):host(:active){--cr-toggle-knob-diameter:10px}:host-context([chrome-refresh-2023]):host([checked]){--cr-toggle-bar-border-color:var(--cr-toggle-checked-bar-color);--cr-toggle-knob-diameter:12px}:host-context([chrome-refresh-2023]):host([checked]:active){--cr-toggle-knob-diameter:14px}:host([disabled]){cursor:initial;opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){--cr-toggle-checked-bar-color:var(--color-toggle-button-track-on-disabled,
                var(--cr-fallback-color-disabled-background));--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on-disabled, var(--cr-fallback-color-surface));--cr-toggle-unchecked-bar-color:transparent;--cr-toggle-unchecked-button-color:var(--color-toggle-button-thumb-off-disabled,
                var(--cr-fallback-color-disabled-foreground));--cr-toggle-bar-border-color:var(--cr-toggle-unchecked-button-color);opacity:var(--cr-toggle-disabled-opacity)}:host-context([chrome-refresh-2023]):host([checked][disabled]){--cr-toggle-bar-border:none}#bar{background-color:var(--cr-toggle-unchecked-bar-color);border-radius:8px;height:12px;left:3px;position:absolute;top:2px;transition:background-color linear 80ms;width:28px;z-index:0}:host([checked]) #bar{background-color:var(--cr-toggle-checked-bar-color);opacity:var(--cr-toggle-checked-bar-opacity,.5)}:host-context([chrome-refresh-2023]) #bar{border:var(--cr-toggle-bar-border);border-radius:50px;box-sizing:border-box;display:block;height:16px;opacity:1;position:initial;width:var(--cr-toggle-bar-width)}:host-context([chrome-refresh-2023]):host(:focus-visible) #bar{outline:2px solid var(--cr-toggle-checked-bar-color);outline-offset:2px}#knob{background-color:var(--cr-toggle-unchecked-button-color);border-radius:50%;box-shadow:var(--cr-toggle-box-shadow,0 1px 3px 0 rgba(0,0,0,.4));display:block;height:16px;position:relative;transition:transform linear 80ms,background-color linear 80ms;width:16px;z-index:1}:host([checked]) #knob{background-color:var(--cr-toggle-checked-button-color);transform:translate3d(18px,0,0)}:host-context([dir=rtl]):host([checked]) #knob{transform:translate3d(-18px,0,0)}:host-context([chrome-refresh-2023]) #knob{--cr-toggle-knob-center-edge-distance_:8px;--cr-toggle-knob-direction_:1;--cr-toggle-knob-travel-distance_:calc(
            0.5 * var(--cr-toggle-bar-width) -
            var(--cr-toggle-knob-center-edge-distance_));--cr-toggle-knob-position-center_:calc(
            0.5 * var(--cr-toggle-bar-width) + -50%);--cr-toggle-knob-position-start_:calc(
            var(--cr-toggle-knob-position-center_) -
            var(--cr-toggle-knob-direction_) *
            var(--cr-toggle-knob-travel-distance_));--cr-toggle-knob-position-end_:calc(
            var(--cr-toggle-knob-position-center_) +
            var(--cr-toggle-knob-direction_) *
            var(--cr-toggle-knob-travel-distance_));box-shadow:none;height:var(--cr-toggle-knob-diameter);position:absolute;top:50%;transform:translate(var(--cr-toggle-knob-position-start_),-50%);transition:transform linear 80ms,background-color linear 80ms,width linear 80ms,height linear 80ms;width:var(--cr-toggle-knob-diameter)}:host-context([dir=rtl][chrome-refresh-2023]) #knob{left:0;--cr-toggle-knob-direction_:-1}:host-context([chrome-refresh-2023]):host([checked]) #knob{transform:translate(var(--cr-toggle-knob-position-end_),-50%)}:host-context([chrome-refresh-2023]):host([checked]:active) #knob,:host-context([chrome-refresh-2023]):host([checked]:hover) #knob{--cr-toggle-checked-button-color:var(--color-toggle-button-thumb-on-hover,
                var(--cr-fallback-color-primary-container))}:host-context([chrome-refresh-2023]):host(:hover) #knob::before{background-color:var(--cr-hover-background-color);border-radius:50%;content:'';height:var(--cr-toggle-ripple-diameter);left:calc(var(--cr-toggle-knob-diameter)/ 2);position:absolute;top:calc(var(--cr-toggle-knob-diameter)/ 2);transform:translate(-50%,-50%);width:var(--cr-toggle-ripple-diameter)}paper-ripple{--paper-ripple-opacity:1;color:var(--cr-toggle-unchecked-ripple-color);height:var(--cr-toggle-ripple-diameter);left:50%;outline:var(--cr-toggle-ripple-ring,none);pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);transition:color linear 80ms;width:var(--cr-toggle-ripple-diameter)}:host([checked]) paper-ripple{color:var(--cr-toggle-checked-ripple-color)}:host-context([dir=rtl]) paper-ripple{left:auto;right:50%;transform:translate(50%,-50%)}</style>
    <span id="bar"></span>
    <span id="knob"></span>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Number of pixels required to move to consider the pointermove event as
 * intentional.
 */
const MOVE_THRESHOLD_PX = 5;
const CrToggleElementBase = PaperRippleMixin(PolymerElement);
class CrToggleElement extends CrToggleElementBase {
    constructor() {
        super(...arguments);
        this.boundPointerMove_ = null;
        /**
         * Whether the state of the toggle has already taken into account by
         * |pointeremove| handlers. Used in the 'click' handler.
         */
        this.handledInPointerMove_ = false;
        this.pointerDownX_ = 0;
    }
    static get is() {
        return 'cr-toggle';
    }
    static get template() {
        return getTemplate$y();
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
            dark: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'disabledChanged_',
            },
        };
    }
    ready() {
        super.ready();
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'button');
        }
        if (!this.hasAttribute('tabindex')) {
            this.setAttribute('tabindex', '0');
        }
        this.setAttribute('aria-pressed', this.checked ? 'true' : 'false');
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
        if (!document.documentElement.hasAttribute('chrome-refresh-2023')) {
            this.addEventListener('blur', this.hideRipple_.bind(this));
            this.addEventListener('focus', this.onFocus_.bind(this));
        }
        this.addEventListener('click', this.onClick_.bind(this));
        this.addEventListener('keydown', this.onKeyDown_.bind(this));
        this.addEventListener('keyup', this.onKeyUp_.bind(this));
        this.addEventListener('pointerdown', this.onPointerDown_.bind(this));
        this.addEventListener('pointerup', this.onPointerUp_.bind(this));
    }
    connectedCallback() {
        super.connectedCallback();
        const direction = this.matches(':host-context([dir=rtl]) cr-toggle') ? -1 : 1;
        this.boundPointerMove_ = (e) => {
            // Prevent unwanted text selection to occur while moving the pointer, this
            // is important.
            e.preventDefault();
            const diff = e.clientX - this.pointerDownX_;
            if (Math.abs(diff) < MOVE_THRESHOLD_PX) {
                return;
            }
            this.handledInPointerMove_ = true;
            const shouldToggle = (diff * direction < 0 && this.checked) ||
                (diff * direction > 0 && !this.checked);
            if (shouldToggle) {
                this.toggleState_(/* fromKeyboard= */ false);
            }
        };
    }
    checkedChanged_() {
        this.setAttribute('aria-pressed', this.checked ? 'true' : 'false');
    }
    disabledChanged_() {
        this.setAttribute('tabindex', this.disabled ? '-1' : '0');
        this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
    }
    onFocus_() {
        this.getRipple().showAndHoldDown();
    }
    hideRipple_() {
        this.getRipple().clear();
    }
    onPointerUp_() {
        assert(this.boundPointerMove_);
        this.removeEventListener('pointermove', this.boundPointerMove_);
        this.hideRipple_();
    }
    onPointerDown_(e) {
        // Don't do anything if this was not a primary button click or touch event.
        if (e.button !== 0) {
            return;
        }
        // This is necessary to have follow up pointer events fire on |this|, even
        // if they occur outside of its bounds.
        this.setPointerCapture(e.pointerId);
        this.pointerDownX_ = e.clientX;
        this.handledInPointerMove_ = false;
        assert(this.boundPointerMove_);
        this.addEventListener('pointermove', this.boundPointerMove_);
    }
    onClick_(e) {
        // Prevent |click| event from bubbling. It can cause parents of this
        // elements to erroneously re-toggle this control.
        e.stopPropagation();
        e.preventDefault();
        // User gesture has already been taken care of inside |pointermove|
        // handlers, Do nothing here.
        if (this.handledInPointerMove_) {
            return;
        }
        // If no pointermove event fired, then user just clicked on the
        // toggle button and therefore it should be toggled.
        this.toggleState_(/* fromKeyboard= */ false);
    }
    toggleState_(fromKeyboard) {
        // Ignore cases where the 'click' or 'keypress' handlers are triggered while
        // disabled.
        if (this.disabled) {
            return;
        }
        if (!fromKeyboard) {
            this.hideRipple_();
        }
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
            this.toggleState_(/* fromKeyboard= */ true);
        }
    }
    onKeyUp_(e) {
        if (e.key !== ' ' && e.key !== 'Enter') {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (e.key === ' ') {
            this.toggleState_(/* fromKeyboard= */ true);
        }
    }
    // Overridden from PaperRippleMixin
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _createRipple() {
        this._rippleContainer = this.$.knob;
        const ripple = super._createRipple();
        ripple.id = 'ink';
        ripple.setAttribute('recenters', '');
        ripple.classList.add('circle', 'toggle-ink');
        return ripple;
    }
}
customElements.define(CrToggleElement.is, CrToggleElement);

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
Material design:
[Tooltips](https://www.google.com/design/spec/components/tooltips.html)
`<paper-tooltip>` is a label that appears on hover and focus when the user
hovers over an element with the cursor or with the keyboard. It will be centered
to an anchor element specified in the `for` attribute, or, if that doesn't
exist, centered to the parent node containing it.
Example:
    <div style="display:inline-block">
      <button>Click me!</button>
      <paper-tooltip>Tooltip text</paper-tooltip>
    </div>
    <div>
      <button id="btn">Click me!</button>
      <paper-tooltip for="btn">Tooltip text</paper-tooltip>
    </div>
The tooltip can be positioned on the top|bottom|left|right of the anchor using
the `position` attribute. The default position is bottom.
    <paper-tooltip for="btn" position="left">Tooltip text</paper-tooltip>
    <paper-tooltip for="btn" position="top">Tooltip text</paper-tooltip>

### Styling
The following custom properties and mixins are available for styling:
Custom property | Description | Default
----------------|-------------|----------
`--paper-tooltip-background` | The background color of the tooltip | `#616161`
`--paper-tooltip-opacity` | The opacity of the tooltip | `0.9`
`--paper-tooltip-text-color` | The text color of the tooltip | `white`
`--paper-tooltip-delay-in` | Delay before tooltip starts to fade in | `500`
`--paper-tooltip-delay-out` | Delay before tooltip starts to fade out | `0`
`--paper-tooltip-duration-in` | Timing for animation when showing tooltip | `500`
`--paper-tooltip-duration-out` | Timing for animation when hiding tooltip | `0`

Also prefer using the exposed CSS part as follows where possible
paper-tooltip::part(tooltip) {...}

@group Paper Elements
@element paper-tooltip
@demo demo/index.html
*/
Polymer({
  _template: html`
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
`,

  is: 'paper-tooltip',
  hostAttributes: {role: 'tooltip', tabindex: -1},

  properties: {
    /**
     * The id of the element that the tooltip is anchored to. This element
     * must be a sibling of the tooltip. If this property is not set,
     * then the tooltip will be centered to the parent node containing it.
     */
    for: {type: String, observer: '_findTarget'},
    /**
     * Set this to true if you want to manually control when the tooltip
     * is shown or hidden.
     */
    manualMode: {type: Boolean, value: false, observer: '_manualModeChanged'},
    /**
     * Positions the tooltip to the top, right, bottom, left of its content.
     */
    position: {type: String, value: 'bottom'},
    /**
     * If true, no parts of the tooltip will ever be shown offscreen.
     */
    fitToVisibleBounds: {type: Boolean, value: false},
    /**
     * The spacing between the top of the tooltip and the element it is
     * anchored to.
     */
    offset: {type: Number, value: 14},
    /**
     * This property is deprecated, but left over so that it doesn't
     * break exiting code. Please use `offset` instead. If both `offset` and
     * `marginTop` are provided, `marginTop` will be ignored.
     * @deprecated since version 1.0.3
     */
    marginTop: {type: Number, value: 14},
    /**
     * The delay that will be applied before the `entry` animation is
     * played when showing the tooltip.
     */
    animationDelay: {type: Number, value: 500, observer: '_delayChange'},
    /**
     * The animation that will be played on entry.  This replaces the
     * deprecated animationConfig.  Entries here will override the
     * animationConfig settings.  You can enter your own animation
     * by setting it to the css class name.
     */
    animationEntry: {type: String, value: ''},
    /**
     * The animation that will be played on exit.  This replaces the
     * deprecated animationConfig.  Entries here will override the
     * animationConfig settings.  You can enter your own animation
     * by setting it to the css class name.
     */
    animationExit: {type: String, value: ''},
    /**
     * This property is deprecated.
     * The entry and exit animations that will be played when showing
     * and hiding the tooltip. If you want to override this, you must ensure
     * that your animationConfig has the exact format below.
     * @deprecated since version
     *
     * The entry and exit animations that will be played when showing and
     * hiding the tooltip. If you want to override this, you must ensure
     * that your animationConfig has the exact format below.
     */
    animationConfig: {
      type: Object,
      value: function() {
        return {
          'entry':
              [{name: 'fade-in-animation', node: this, timing: {delay: 0}}],
              'exit': [{name: 'fade-out-animation', node: this}]
        }
      }
    },
    _showing: {type: Boolean, value: false}
  },

  listeners: {
    'webkitAnimationEnd': '_onAnimationEnd',
  },

  /**
   * Returns the target element that this tooltip is anchored to. It is
   * either the element given by the `for` attribute, the element manually
   * specified through the `target` attribute, or the immediate parent of
   * the tooltip.
   *
   * @type {Node}
   */
  get target() {
    if (this._manualTarget)
      return this._manualTarget;

    var parentNode = dom(this).parentNode;
    // If the parentNode is a document fragment, then we need to use the host.
    var ownerRoot = dom(this).getOwnerRoot();
    var target;
    if (this.for) {
      target = dom(ownerRoot).querySelector('#' + this.for);
    } else {
      target = parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE ?
          ownerRoot.host :
          parentNode;
    }
    return target;
  },

  /**
   * Sets the target element that this tooltip will be anchored to.
   * @param {Node} target
   */
  set target(target) {
    this._manualTarget = target;
    this._findTarget();
  },

  /**
   * @return {void}
   */
  attached: function() {
    this._findTarget();
  },

  /**
   * @return {void}
   */
  detached: function() {
    if (!this.manualMode)
      this._removeListeners();
  },

  /**
   * Replaces Neon-Animation playAnimation - just calls show and hide.
   * @deprecated Use show and hide instead.
   * @param {string} type Either `entry` or `exit`
   */
  playAnimation: function(type) {
    if (type === 'entry') {
      this.show();
    } else if (type === 'exit') {
      this.hide();
    }
  },

  /**
   * Cancels the animation and either fully shows or fully hides tooltip
   */
  cancelAnimation: function() {
    // Short-cut and cancel all animations and hide
    this.$.tooltip.classList.add('cancel-animation');
  },

  /**
   * Shows the tooltip programatically
   * @return {void}
   */
  show: function() {
    // If the tooltip is already showing, there's nothing to do.
    if (this._showing)
      return;

    if (dom(this).textContent.trim() === '') {
      // Check if effective children are also empty
      var allChildrenEmpty = true;
      var effectiveChildren = dom(this).getEffectiveChildNodes();
      for (var i = 0; i < effectiveChildren.length; i++) {
        if (effectiveChildren[i].textContent.trim() !== '') {
          allChildrenEmpty = false;
          break;
        }
      }
      if (allChildrenEmpty) {
        return;
      }
    }

    this._showing = true;
    this.$.tooltip.classList.remove('hidden');
    this.$.tooltip.classList.remove('cancel-animation');
    this.$.tooltip.classList.remove(this._getAnimationType('exit'));
    this.updatePosition();
    this._animationPlaying = true;
    this.$.tooltip.classList.add(this._getAnimationType('entry'));
  },

  /**
   * Hides the tooltip programatically
   * @return {void}
   */
  hide: function() {
    // If the tooltip is already hidden, there's nothing to do.
    if (!this._showing) {
      return;
    }

    // If the entry animation is still playing, don't try to play the exit
    // animation since this will reset the opacity to 1. Just end the animation.
    if (this._animationPlaying) {
      this._showing = false;
      this._cancelAnimation();
      return;
    } else {
      // Play Exit Animation
      this._onAnimationFinish();
    }

    this._showing = false;
    this._animationPlaying = true;
  },

  /**
   * @return {void}
   */
  updatePosition: function() {
    if (!this._target)
      return;
    var offsetParent = this._composedOffsetParent();
    if (!offsetParent)
      return;
    var offset = this.offset;
    // If a marginTop has been provided by the user (pre 1.0.3), use it.
    if (this.marginTop != 14 && this.offset == 14)
      offset = this.marginTop;
    var parentRect = offsetParent.getBoundingClientRect();
    var targetRect = this._target.getBoundingClientRect();
    var thisRect = this.getBoundingClientRect();
    var horizontalCenterOffset = (targetRect.width - thisRect.width) / 2;
    var verticalCenterOffset = (targetRect.height - thisRect.height) / 2;
    var targetLeft = targetRect.left - parentRect.left;
    var targetTop = targetRect.top - parentRect.top;
    var tooltipLeft, tooltipTop;
    switch (this.position) {
      case 'top':
        tooltipLeft = targetLeft + horizontalCenterOffset;
        tooltipTop = targetTop - thisRect.height - offset;
        break;
      case 'bottom':
        tooltipLeft = targetLeft + horizontalCenterOffset;
        tooltipTop = targetTop + targetRect.height + offset;
        break;
      case 'left':
        tooltipLeft = targetLeft - thisRect.width - offset;
        tooltipTop = targetTop + verticalCenterOffset;
        break;
      case 'right':
        tooltipLeft = targetLeft + targetRect.width + offset;
        tooltipTop = targetTop + verticalCenterOffset;
        break;
    }
    // TODO(noms): This should use IronFitBehavior if possible.
    if (this.fitToVisibleBounds) {
      // Clip the left/right side
      if (parentRect.left + tooltipLeft + thisRect.width > window.innerWidth) {
        this.style.right = '0px';
        this.style.left = 'auto';
      } else {
        this.style.left = Math.max(0, tooltipLeft) + 'px';
        this.style.right = 'auto';
      }
      // Clip the top/bottom side.
      if (parentRect.top + tooltipTop + thisRect.height > window.innerHeight) {
        this.style.bottom = (parentRect.height - targetTop + offset) + 'px';
        this.style.top = 'auto';
      } else {
        this.style.top = Math.max(-parentRect.top, tooltipTop) + 'px';
        this.style.bottom = 'auto';
      }
    } else {
      this.style.left = tooltipLeft + 'px';
      this.style.top = tooltipTop + 'px';
    }
  },

  _addListeners: function() {
    if (this._target) {
      this.listen(this._target, 'mouseenter', 'show');
      this.listen(this._target, 'focus', 'show');
      this.listen(this._target, 'mouseleave', 'hide');
      this.listen(this._target, 'blur', 'hide');
      this.listen(this._target, 'tap', 'hide');
    }
    this.listen(this.$.tooltip, 'animationend', '_onAnimationEnd');
    this.listen(this, 'mouseenter', 'hide');
  },

  _findTarget: function() {
    if (!this.manualMode)
      this._removeListeners();
    this._target = this.target;
    if (!this.manualMode)
      this._addListeners();
  },

  _delayChange: function(newValue) {
    // Only Update delay if different value set
    if (newValue !== 500) {
      this.updateStyles({'--paper-tooltip-delay-in': newValue + 'ms'});
    }
  },

  _manualModeChanged: function() {
    if (this.manualMode)
      this._removeListeners();
    else
      this._addListeners();
  },

  _cancelAnimation: function() {
    // Short-cut and cancel all animations and hide
    this.$.tooltip.classList.remove(this._getAnimationType('entry'));
    this.$.tooltip.classList.remove(this._getAnimationType('exit'));
    this.$.tooltip.classList.remove('cancel-animation');
    this.$.tooltip.classList.add('hidden');
  },

  _onAnimationFinish: function() {
    if (this._showing) {
      this.$.tooltip.classList.remove(this._getAnimationType('entry'));
      this.$.tooltip.classList.remove('cancel-animation');
      this.$.tooltip.classList.add(this._getAnimationType('exit'));
    }
  },

  _onAnimationEnd: function() {
    // If no longer showing add class hidden to completely hide tooltip
    this._animationPlaying = false;
    if (!this._showing) {
      this.$.tooltip.classList.remove(this._getAnimationType('exit'));
      this.$.tooltip.classList.add('hidden');
    }
  },

  _getAnimationType: function(type) {
    // These properties have priority over animationConfig values
    if ((type === 'entry') && (this.animationEntry !== '')) {
      return this.animationEntry;
    }
    if ((type === 'exit') && (this.animationExit !== '')) {
      return this.animationExit;
    }
    // If no results then return the legacy value from animationConfig
    if (this.animationConfig[type] &&
        typeof this.animationConfig[type][0].name === 'string') {
      // Checking Timing and Update if necessary - Legacy for animationConfig
      if (this.animationConfig[type][0].timing &&
          this.animationConfig[type][0].timing.delay &&
          this.animationConfig[type][0].timing.delay !== 0) {
        var timingDelay = this.animationConfig[type][0].timing.delay;
        // Has Timing Change - Update CSS
        if (type === 'entry') {
          this.updateStyles({'--paper-tooltip-delay-in': timingDelay + 'ms'});
        } else if (type === 'exit') {
          this.updateStyles({'--paper-tooltip-delay-out': timingDelay + 'ms'});
        }
      }
      return this.animationConfig[type][0].name;
    }
  },

  _removeListeners: function() {
    if (this._target) {
      this.unlisten(this._target, 'mouseenter', 'show');
      this.unlisten(this._target, 'focus', 'show');
      this.unlisten(this._target, 'mouseleave', 'hide');
      this.unlisten(this._target, 'blur', 'hide');
      this.unlisten(this._target, 'tap', 'hide');
    }
    this.unlisten(this.$.tooltip, 'animationend', '_onAnimationEnd');
    this.unlisten(this, 'mouseenter', 'hide');
  },

  /**
   * Polyfills the old offsetParent behavior from before the spec was changed:
   * https://github.com/w3c/csswg-drafts/issues/159
   */
  _composedOffsetParent: function() {
    // Do an initial walk to check for display:none ancestors.
    for (let ancestor = this; ancestor; ancestor = flatTreeParent(ancestor)) {
      if (!(ancestor instanceof Element))
        continue;
      if (getComputedStyle(ancestor).display === 'none')
        return null;
    }

    for (let ancestor = flatTreeParent(this); ancestor; ancestor = flatTreeParent(ancestor)) {
      if (!(ancestor instanceof Element))
        continue;
      const style = getComputedStyle(ancestor);
      if (style.display === 'contents') {
        // display:contents nodes aren't in the layout tree so they should be skipped.
        continue;
      }
      if (style.position !== 'static') {
        return ancestor;
      }
      if (ancestor.tagName === 'BODY')
        return ancestor;
    }
    return null;

    function flatTreeParent(element) {
      if (element.assignedSlot) {
        return element.assignedSlot;
      }
      if (element.parentNode instanceof ShadowRoot) {
        return element.parentNode.host;
      }
      return element.parentNode;
    }
  }
});

function getTemplate$x() {
    return html `<!--_html_template_start_-->    <style include="cr-shared-style">:host{display:flex}iron-icon{--iron-icon-width:var(--cr-icon-size);--iron-icon-height:var(--cr-icon-size);--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color, var(--google-grey-700))}@media (prefers-color-scheme:dark){iron-icon{--iron-icon-fill-color:var(--cr-tooltip-icon-fill-color, var(--google-grey-500))}}</style>
    <iron-icon id="indicator" tabindex="0" aria-label$="[[iconAriaLabel]]" aria-describedby="tooltip" icon="[[iconClass]]" role="img"></iron-icon>
    <paper-tooltip id="tooltip" for="indicator" position="[[tooltipPosition]]" fit-to-visible-bounds part="tooltip">
      <slot name="tooltip-text">[[tooltipText]]</slot>
    </paper-tooltip>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrTooltipIconElement extends PolymerElement {
    static get is() {
        return 'cr-tooltip-icon';
    }
    static get template() {
        return getTemplate$x();
    }
    static get properties() {
        return {
            iconAriaLabel: String,
            iconClass: String,
            tooltipText: String,
            /** Position of tooltip popup related to the icon. */
            tooltipPosition: {
                type: String,
                value: 'top',
            },
        };
    }
    getFocusableElement() {
        return this.$.indicator;
    }
}
customElements.define(CrTooltipIconElement.is, CrTooltipIconElement);

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

const styleMod$3 = document.createElement('dom-module');
styleMod$3.appendChild(html `
  <template>
    <style>
[is=action-link]{cursor:pointer;display:inline-block;text-decoration:underline}[is=action-link],[is=action-link]:active,[is=action-link]:hover,[is=action-link]:visited{color:var(--cr-link-color)}[is=action-link][disabled]{color:var(--paper-grey-600);cursor:default;opacity:.65;pointer-events:none}[is=action-link].no-outline{outline:0}
    </style>
  </template>
`.content);
styleMod$3.register('action-link');

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
A set of layout classes that let you specify layout properties directly in
markup. You must include this file in every element that needs to use them.

Sample use:

    import '../iron-flex-layout/iron-flex-layout-classes.js';

    const template = html`
      <style is="custom-style" include="iron-flex iron-flex-alignment"></style>
      <style>
        .test { width: 100px; }
      </style>
      <div class="layout horizontal center-center">
        <div class="test">horizontal layout center alignment</div>
      </div>
    `;
    document.body.appendChild(template.content);

The following imports are available:
 - iron-flex
 - iron-flex-reverse
 - iron-flex-alignment
 - iron-flex-factors
 - iron-positioning
*/

const template$1 = html`
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
`;
template$1.setAttribute('style', 'display: none;');
document.head.appendChild(template$1.content);

// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview CrContainerShadowMixinLit holds logic for showing a drop shadow
 * near the top of a container element, when the content has scrolled.
 *
 * Lit version of the equivalent CrContainerShadowMixin for Polymer.
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
var CrContainerShadowSide$1;
(function (CrContainerShadowSide) {
    CrContainerShadowSide["TOP"] = "top";
    CrContainerShadowSide["BOTTOM"] = "bottom";
})(CrContainerShadowSide$1 || (CrContainerShadowSide$1 = {}));
const CrContainerShadowMixinLit = (superClass) => {
    class CrContainerShadowMixinLit extends superClass {
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
                [CrContainerShadowSide$1.TOP, CrContainerShadowSide$1.BOTTOM] :
                [CrContainerShadowSide$1.TOP];
            this.sides_.forEach(side => {
                // The element holding the drop shadow effect to be shown.
                const shadow = document.createElement('div');
                shadow.id = `cr-container-shadow-${side}`;
                shadow.classList.add('cr-container-shadow');
                this.dropShadows_.set(side, shadow);
                this.intersectionProbes_.set(side, document.createElement('div'));
            });
            this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide$1.TOP), this.getContainer_());
            this.getContainer_().prepend(this.intersectionProbes_.get(CrContainerShadowSide$1.TOP));
            if (hasBottomShadow) {
                this.getContainer_().parentNode.insertBefore(this.dropShadows_.get(CrContainerShadowSide$1.BOTTOM), this.getContainer_().nextSibling);
                this.getContainer_().append(this.intersectionProbes_.get(CrContainerShadowSide$1.BOTTOM));
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
    return CrContainerShadowMixinLit;
};

function getCss$2() {
    return css `:host([hidden]),[hidden]{display:none!important}`;
}

function getCss$1() {
    return css `.icon-arrow-back{--cr-icon-image:url(chrome://resources/images/icon_arrow_back.svg)}.icon-arrow-dropdown{--cr-icon-image:url(chrome://resources/images/icon_arrow_dropdown.svg)}.icon-arrow-drop-down-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_down_cr23.svg)}.icon-arrow-drop-up-cr23{--cr-icon-image:url(chrome://resources/images/icon_arrow_drop_up_cr23.svg)}.icon-cancel{--cr-icon-image:url(chrome://resources/images/icon_cancel.svg)}.icon-clear{--cr-icon-image:url(chrome://resources/images/icon_clear.svg)}.icon-copy-content{--cr-icon-image:url(chrome://resources/images/icon_copy_content.svg)}.icon-delete-gray{--cr-icon-image:url(chrome://resources/images/icon_delete_gray.svg)}.icon-edit{--cr-icon-image:url(chrome://resources/images/icon_edit.svg)}.icon-file{--cr-icon-image:url(chrome://resources/images/icon_filetype_generic.svg)}.icon-folder-open{--cr-icon-image:url(chrome://resources/images/icon_folder_open.svg)}.icon-picture-delete{--cr-icon-image:url(chrome://resources/images/icon_picture_delete.svg)}.icon-expand-less{--cr-icon-image:url(chrome://resources/images/icon_expand_less.svg)}.icon-expand-more{--cr-icon-image:url(chrome://resources/images/icon_expand_more.svg)}.icon-external{--cr-icon-image:url(chrome://resources/images/open_in_new.svg)}.icon-more-vert{--cr-icon-image:url(chrome://resources/images/icon_more_vert.svg)}.icon-refresh{--cr-icon-image:url(chrome://resources/images/icon_refresh.svg)}.icon-search{--cr-icon-image:url(chrome://resources/images/icon_search.svg)}.icon-settings{--cr-icon-image:url(chrome://resources/images/icon_settings.svg)}.icon-visibility{--cr-icon-image:url(chrome://resources/images/icon_visibility.svg)}.icon-visibility-off{--cr-icon-image:url(chrome://resources/images/icon_visibility_off.svg)}.subpage-arrow{--cr-icon-image:url(chrome://resources/images/arrow_right.svg)}.cr-icon{-webkit-mask-image:var(--cr-icon-image);-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;-webkit-mask-size:var(--cr-icon-size);background-color:var(--cr-icon-color,var(--google-grey-700));flex-shrink:0;height:var(--cr-icon-ripple-size);margin-inline-end:var(--cr-icon-ripple-margin);margin-inline-start:var(--cr-icon-button-margin-start);user-select:none;width:var(--cr-icon-ripple-size)}:host-context([dir=rtl]) .cr-icon{transform:scaleX(-1)}.cr-icon.no-overlap{margin-inline-end:0;margin-inline-start:0}@media (prefers-color-scheme:dark){.cr-icon{background-color:var(--cr-icon-color,var(--google-grey-500))}}`;
}

function getCss() {
    return css `dialog{--scroll-border-color:var(--paper-grey-300);--scroll-border:1px solid var(--scroll-border-color);background-color:var(--cr-dialog-background-color,#fff);border:0;border-radius:var(--cr-dialog-border-radius,8px);bottom:50%;box-shadow:0 0 16px rgba(0,0,0,.12),0 16px 16px rgba(0,0,0,.24);color:inherit;max-height:initial;max-width:initial;overflow-y:hidden;padding:0;position:absolute;top:50%;width:var(--cr-dialog-width,512px)}@media (prefers-color-scheme:dark){dialog{--scroll-border-color:var(--google-grey-700);background-color:var(--cr-dialog-background-color,var(--google-grey-900));background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}@media (forced-colors:active){dialog{border:var(--cr-border-hcm)}}dialog[open] #content-wrapper{display:flex;flex-direction:column;max-height:100vh;overflow:auto}.top-container,:host ::slotted([slot=button-container]),:host ::slotted([slot=footer]){flex-shrink:0}dialog::backdrop{background-color:rgba(0,0,0,.6);bottom:0;left:0;position:fixed;right:0;top:0}:host ::slotted([slot=body]){color:var(--cr-secondary-text-color);padding:0 var(--cr-dialog-body-padding-horizontal,20px)}:host ::slotted([slot=title]){color:var(--cr-primary-text-color);flex:1;font-family:var(--cr-dialog-font-family,inherit);font-size:var(--cr-dialog-title-font-size,calc(15 / 13 * 100%));line-height:1;padding-bottom:var(--cr-dialog-title-slot-padding-bottom,16px);padding-inline-end:var(--cr-dialog-title-slot-padding-end,20px);padding-inline-start:var(--cr-dialog-title-slot-padding-start,20px);padding-top:var(--cr-dialog-title-slot-padding-top,20px)}:host ::slotted([slot=button-container]){display:flex;justify-content:flex-end;padding-bottom:var(--cr-dialog-button-container-padding-bottom,16px);padding-inline-end:var(--cr-dialog-button-container-padding-horizontal,16px);padding-inline-start:var(--cr-dialog-button-container-padding-horizontal,16px);padding-top:var(--cr-dialog-button-container-padding-top,16px)}:host ::slotted([slot=footer]){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;border-top:1px solid #dbdbdb;margin:0;padding:16px 20px}:host([hide-backdrop]) dialog::backdrop{opacity:0}@media (prefers-color-scheme:dark){:host ::slotted([slot=footer]){border-top-color:var(--cr-separator-color)}}.body-container{box-sizing:border-box;display:flex;flex-direction:column;min-height:1.375rem;overflow:auto}:host{--transparent-border:1px solid transparent}#cr-container-shadow-top{border-bottom:var(--cr-dialog-body-border-top,var(--transparent-border))}#cr-container-shadow-bottom{border-bottom:var(--cr-dialog-body-border-bottom,var(--transparent-border))}#cr-container-shadow-bottom.has-shadow,#cr-container-shadow-top.has-shadow{border-bottom:var(--scroll-border)}.top-container{align-items:flex-start;display:flex;min-height:var(--cr-dialog-top-container-min-height,31px)}.title-container{display:flex;flex:1;font-size:inherit;font-weight:inherit;margin:0;outline:0}#close{align-self:flex-start;margin-inline-end:4px;margin-top:4px}`;
}

function getHtml() {
    return html$1 `<!--_html_template_start_-->
<dialog id="dialog" @close="${this.onNativeDialogClose_}" @cancel="${this.onNativeDialogCancel_}" part="dialog" aria-labelledby="title" aria-description="${this.ariaDescriptionText || nothing}">

  <div id="content-wrapper" part="wrapper">
    <div class="top-container">
      <h2 id="title" class="title-container" tabindex="-1">
        <slot name="title"></slot>
      </h2>
      <cr-icon-button id="close" class="icon-clear" ?hidden="${!this.showCloseButton}" aria-label="${this.closeText || nothing}" @click="${this.cancel}" @keypress="${this.onCloseKeypress_}">
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
const CrDialogElementBase = CrContainerShadowMixinLit(CrLitElement);
class CrDialogElement extends CrDialogElementBase {
    constructor() {
        super(...arguments);
        this.consumeKeydownEvent = false;
        this.ignoreEnterKey = false;
        this.ignorePopstate = false;
        this.noCancel = false;
        this.open = false;
        this.showCloseButton = false;
        this.showOnAttach = false;
        this.intersectionObserver_ = null;
        this.mutationObserver_ = null;
        this.boundKeydown_ = null;
    }
    static get is() {
        return 'cr-dialog';
    }
    static get styles() {
        return [
            getCss$2(),
            getCss$1(),
            getCss(),
        ];
    }
    render() {
        return getHtml.bind(this)();
    }
    static get properties() {
        return {
            open: {
                type: Boolean,
                reflect: true,
            },
            /**
             * Alt-text for the dialog close button.
             */
            closeText: { type: String },
            /**
             * True if the dialog should remain open on 'popstate' events. This is
             * used for navigable dialogs that have their separate navigation handling
             * code.
             */
            ignorePopstate: { type: Boolean },
            /**
             * True if the dialog should ignore 'Enter' keypresses.
             */
            ignoreEnterKey: { type: Boolean },
            /**
             * True if the dialog should consume 'keydown' events. If ignoreEnterKey
             * is true, 'Enter' key won't be consumed.
             */
            consumeKeydownEvent: { type: Boolean },
            /**
             * True if the dialog should not be able to be cancelled, which will
             * prevent 'Escape' key presses from closing the dialog.
             */
            noCancel: { type: Boolean },
            // True if dialog should show the 'X' close button.
            showCloseButton: { type: Boolean },
            showOnAttach: { type: Boolean },
            /**
             * Text for the aria description.
             */
            ariaDescriptionText: { type: String },
        };
    }
    firstUpdated() {
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
    async showModal() {
        this.$.dialog.showModal();
        assert(this.$.dialog.open);
        this.open = true;
        await this.updateComplete;
        this.fire('cr-dialog-open');
    }
    cancel() {
        this.fire('cancel');
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
        this.fire('close');
    }
    async onNativeDialogCancel_(e) {
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
        await this.updateComplete;
        // Catch and re-fire the native 'cancel' event such that it bubbles across
        // Shadow DOM v1.
        this.fire('cancel');
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

function getTemplate$w() {
    return html `<!--_html_template_start_--><style include="cr-shared-style shared-style"></style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="title">[[getDialogTitle_(firstRestrictedSite)]]</div>
  <div class="matching-restricted-sites-warning" slot="body">
    <iron-icon icon="cr:info-outline"></iron-icon>
    <span>[[getDialogWarning_(firstRestrictedSite)]]</span>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onSubmitClick_">
      $i18n{matchingRestrictedSitesAllow}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsRestrictedSitesDialogElementBase = I18nMixin(PolymerElement);
class ExtensionsRestrictedSitesDialogElement extends ExtensionsRestrictedSitesDialogElementBase {
    static get is() {
        return 'extensions-restricted-sites-dialog';
    }
    static get template() {
        return getTemplate$w();
    }
    static get properties() {
        return {
            firstRestrictedSite: { type: String, value: '' },
        };
    }
    isOpen() {
        return this.$.dialog.open;
    }
    wasConfirmed() {
        return this.$.dialog.getNative().returnValue === 'success';
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onSubmitClick_() {
        this.$.dialog.close();
    }
    getDialogTitle_() {
        return this.i18n('matchingRestrictedSitesTitle', this.firstRestrictedSite);
    }
    getDialogWarning_() {
        return this.i18n('matchingRestrictedSitesWarning', this.firstRestrictedSite);
    }
}
customElements.define(ExtensionsRestrictedSitesDialogElement.is, ExtensionsRestrictedSitesDialogElement);

function getTemplate$v() {
    return html `<!--_html_template_start_--><style>:host{align-items:center;display:flex;touch-action:none}input{display:none}label{box-sizing:border-box;cursor:pointer;flex:1}cr-toggle{display:inline-block}:host ::slotted(*){flex:1;margin-inline-end:20px}</style>
<label id="label" aria-hidden="true">
  <input id="native" type="checkbox" checked="[[checked]]" on-change="onNativeChange_" on-click="onNativeClick_" disabled="[[disabled]]">
  <slot></slot>
</label>
<cr-toggle id="crToggle" checked="{{checked}}" aria-labelledby="label" on-change="onCrToggleChange_" disabled="[[disabled]]"></cr-toggle>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsToggleRowElement extends PolymerElement {
    static get is() {
        return 'extensions-toggle-row';
    }
    static get template() {
        return getTemplate$v();
    }
    static get properties() {
        return {
            checked: Boolean,
            disabled: Boolean,
        };
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    /**
     * Exposing the clickable part of extensions-toggle-row for testing
     * purposes.
     */
    getLabel() {
        return this.$.label;
    }
    onNativeClick_(e) {
        // Even though the native checkbox is hidden and can't be actually
        // cilcked/tapped by the user, because it resides within the <label> the
        // browser emits an extraneous event when the label is clicked. Stop
        // propagation so that it does not interfere with |onLabelClick_| listener.
        e.stopPropagation();
    }
    /**
     * Fires when the native checkbox changes value. This happens when the user
     * clicks directly on the <label>.
     */
    onNativeChange_(e) {
        e.stopPropagation();
        // Sync value of native checkbox and cr-toggle and |checked|.
        this.$.crToggle.checked = this.$.native.checked;
        this.checked = this.$.native.checked;
        this.fire_('change', this.checked);
    }
    onCrToggleChange_(e) {
        e.stopPropagation();
        // Sync value of native checkbox and cr-toggle.
        this.$.native.checked = e.detail;
        this.fire_('change', this.checked);
    }
}
customElements.define(ExtensionsToggleRowElement.is, ExtensionsToggleRowElement);

function getTemplate$u() {
    return html `<!--_html_template_start_--><style include="cr-shared-style shared-style">iron-icon{--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size)}#section-heading{align-items:center;color:var(--cr-primary-text-color);display:flex;justify-content:space-between;margin-top:12px}.toggle-section{display:flex;flex-direction:column;justify-content:center;min-height:var(--cr-section-min-height)}.new-all-hosts-toggle-label{color:var(--cr-primary-text-color);margin-inline-start:var(--cr-section-indent-width)}.site-row{display:flex}.site-favicon{margin-inline-end:calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin))}.site-toggle{border-top:var(--cr-separator-line);margin-inline-start:var(--cr-section-indent-width)}</style>
<div id="section-heading" hidden$="[[enableEnhancedSiteControls]]">
  <span>$i18n{hostPermissionsDescription}</span>
  <a id="linkIconButton" aria-label="$i18n{permissionsLearnMoreLabel}" href="$i18n{hostPermissionsLearnMoreLink}" target="_blank" on-click="onLearnMoreClick_">
    <iron-icon icon="cr:help-outline"></iron-icon>
  </a>
</div>
<div class="toggle-section">
  <extensions-toggle-row checked="[[allowedOnAllHosts_(permissions.*)]]" id="allHostsToggle" on-change="onAllHostsToggleChanged_">
    <span class="[[getAllHostsToggleLabelClass_(enableEnhancedSiteControls)]]">
      $i18n{itemAllowOnFollowingSites}
    </span>
    <a id="linkIconButton" aria-label="$i18n{permissionsLearnMoreLabel}" href="$i18n{hostPermissionsLearnMoreLink}" target="_blank" on-click="onLearnMoreClick_" hidden$="[[!enableEnhancedSiteControls]]">
      <iron-icon icon="cr:help-outline"></iron-icon>
    </a>
  </extensions-toggle-row>
</div>

<template is="dom-repeat" items="[[getSortedHosts_(permissions.*)]]">
  <div class="toggle-section site-toggle">
    <extensions-toggle-row checked="[[isItemChecked_(item, selectedHost_)]]" class="host-toggle no-end-padding" disabled="[[allowedOnAllHosts_(permissions.*)]]" host="[[item.host]]" on-change="onHostAccessChanged_">
      <div class="site-row">
        <div class="site-favicon" style$="background-image:[[getFaviconUrl_(item.host)]]" hidden$="[[!enableEnhancedSiteControls]]"></div>
        <span>[[item.host]]</span>
      </div>
    </extensions-toggle-row>
  </div>
</template>

<template is="dom-if" if="[[showMatchingRestrictedSitesDialog_]]" restamp>
  <extensions-restricted-sites-dialog first-restricted-site="[[matchingRestrictedSites_.0]]" on-close="onMatchingRestrictedSitesDialogClose_">
  </extensions-restricted-sites-dialog>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var SourceType;
(function (SourceType) {
    SourceType["WEBSTORE"] = "webstore";
    SourceType["POLICY"] = "policy";
    SourceType["SIDELOADED"] = "sideloaded";
    SourceType["UNPACKED"] = "unpacked";
    SourceType["INSTALLED_BY_DEFAULT"] = "installed-by-default";
    SourceType["UNKNOWN"] = "unknown";
})(SourceType || (SourceType = {}));
var EnableControl;
(function (EnableControl) {
    EnableControl["RELOAD"] = "RELOAD";
    EnableControl["REPAIR"] = "REPAIR";
    EnableControl["ENABLE_TOGGLE"] = "ENABLE_TOGGLE";
})(EnableControl || (EnableControl = {}));
// TODO(tjudkins): This should be extracted to a shared metrics module.
var UserAction;
(function (UserAction) {
    UserAction["ALL_TOGGLED_ON"] = "Extensions.Settings.HostList.AllHostsToggledOn";
    UserAction["ALL_TOGGLED_OFF"] = "Extensions.Settings.HostList.AllHostsToggledOff";
    UserAction["SPECIFIC_TOGGLED_ON"] = "Extensions.Settings.HostList.SpecificHostToggledOn";
    UserAction["SPECIFIC_TOGGLED_OFF"] = "Extensions.Settings.HostList.SpecificHostToggledOff";
    UserAction["LEARN_MORE"] = "Extensions.Settings.HostList.LearnMoreActivated";
})(UserAction || (UserAction = {}));
/**
 * Returns true if the extension is enabled, including terminated
 * extensions.
 */
function isEnabled$1(state) {
    switch (state) {
        case chrome.developerPrivate.ExtensionState.ENABLED:
        case chrome.developerPrivate.ExtensionState.TERMINATED:
            return true;
        case chrome.developerPrivate.ExtensionState.BLACKLISTED:
        case chrome.developerPrivate.ExtensionState.DISABLED:
            return false;
        default:
            assertNotReached();
    }
}
/**
 * @return Whether the user can change whether or not the extension is
 *     enabled.
 */
function userCanChangeEnablement(item) {
    // User doesn't have permission.
    if (!item.userMayModify) {
        return false;
    }
    // Item is forcefully disabled.
    if (item.disableReasons.corruptInstall ||
        item.disableReasons.suspiciousInstall ||
        item.disableReasons.updateRequired ||
        item.disableReasons.publishedInStoreRequired ||
        item.disableReasons.blockedByPolicy) {
        return false;
    }
    // An item with dependent extensions can't be disabled (it would bork the
    // dependents).
    if (item.dependentExtensions.length > 0) {
        return false;
    }
    // Blacklisted can't be enabled, either.
    if (item.state === chrome.developerPrivate.ExtensionState.BLACKLISTED) {
        return false;
    }
    return true;
}
function getItemSource(item) {
    if (item.controlledInfo) {
        return SourceType.POLICY;
    }
    switch (item.location) {
        case chrome.developerPrivate.Location.THIRD_PARTY:
            return SourceType.SIDELOADED;
        case chrome.developerPrivate.Location.UNPACKED:
            return SourceType.UNPACKED;
        case chrome.developerPrivate.Location.UNKNOWN:
            return SourceType.UNKNOWN;
        case chrome.developerPrivate.Location.FROM_STORE:
            return SourceType.WEBSTORE;
        case chrome.developerPrivate.Location.INSTALLED_BY_DEFAULT:
            return SourceType.INSTALLED_BY_DEFAULT;
        default:
            assertNotReached(item.location);
    }
}
function getItemSourceString(source) {
    switch (source) {
        case SourceType.POLICY:
            return loadTimeData.getString('itemSourcePolicy');
        case SourceType.SIDELOADED:
            return loadTimeData.getString('itemSourceSideloaded');
        case SourceType.UNPACKED:
            return loadTimeData.getString('itemSourceUnpacked');
        case SourceType.WEBSTORE:
            return loadTimeData.getString('itemSourceWebstore');
        case SourceType.INSTALLED_BY_DEFAULT:
            return loadTimeData.getString('itemSourceInstalledByDefault');
        case SourceType.UNKNOWN:
            // Nothing to return. Calling code should use
            // chrome.developerPrivate.ExtensionInfo's |locationText| instead.
            return '';
        default:
            assertNotReached();
    }
}
/**
 * Computes the human-facing label for the given inspectable view.
 */
function computeInspectableViewLabel(view) {
    // Trim the "chrome-extension://<id>/".
    const url = new URL(view.url);
    let label = view.url;
    if (url.protocol === 'chrome-extension:') {
        label = url.pathname.substring(1);
    }
    if (label === '_generated_background_page.html') {
        label = loadTimeData.getString('viewBackgroundPage');
    }
    if (view.type === 'EXTENSION_SERVICE_WORKER_BACKGROUND') {
        label = loadTimeData.getString('viewServiceWorker');
    }
    // Add any qualifiers.
    if (view.incognito) {
        label += ' ' + loadTimeData.getString('viewIncognito');
    }
    if (view.renderProcessId === -1) {
        label += ' ' + loadTimeData.getString('viewInactive');
    }
    if (view.isIframe) {
        label += ' ' + loadTimeData.getString('viewIframe');
    }
    return label;
}
/**
 * Computes the accessible human-facing aria label for an extension toggle item.
 */
function getEnableToggleAriaLabel(toggleEnabled, extensionsDataType, appEnabled, extensionEnabled, itemOff) {
    if (!toggleEnabled) {
        return itemOff;
    }
    const ExtensionType = chrome.developerPrivate.ExtensionType;
    switch (extensionsDataType) {
        case ExtensionType.HOSTED_APP:
        case ExtensionType.LEGACY_PACKAGED_APP:
        case ExtensionType.PLATFORM_APP:
            return appEnabled;
        case ExtensionType.EXTENSION:
        case ExtensionType.SHARED_MODULE:
            return extensionEnabled;
    }
    assertNotReached('Item type is not App or Extension.');
}
/**
 * Clones the array and returns a new array with background pages and service
 * workers sorted before other views.
 * @returns Sorted array.
 */
function sortViews(views) {
    function getSortValue(view) {
        switch (view.type) {
            case chrome.developerPrivate.ViewType.EXTENSION_SERVICE_WORKER_BACKGROUND:
                return 2;
            case chrome.developerPrivate.ViewType.EXTENSION_BACKGROUND_PAGE:
                return 1;
            default:
                return 0;
        }
    }
    return [...views].sort((a, b) => getSortValue(b) - getSortValue(a));
}
/**
 * @return Whether the extension is in the terminated state.
 */
function isTerminated(state) {
    return state === chrome.developerPrivate.ExtensionState.TERMINATED;
}
/**
 * Determines which enable control to display for a given extension.
 */
function getEnableControl(data) {
    if (isTerminated(data.state)) {
        return EnableControl.RELOAD;
    }
    if (data.disableReasons.corruptInstall && data.userMayModify) {
        return EnableControl.REPAIR;
    }
    return EnableControl.ENABLE_TOGGLE;
}
/**
 * @return The tooltip to show for an extension's enable toggle.
 */
function getEnableToggleTooltipText(data) {
    if (!isEnabled$1(data.state)) {
        return loadTimeData.getString('enableToggleTooltipDisabled');
    }
    return loadTimeData.getString(data.permissions.canAccessSiteData ?
        'enableToggleTooltipEnabledWithSiteAccess' :
        'enableToggleTooltipEnabled');
}

function getTemplate$t() {
    return html `<!--_html_template_start_--><style include="cr-shared-style cr-icons shared-style"></style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">[[computeDialogTitle_(currentSite)]]</div>
  <div slot="body">
    <cr-input id="input" label="$i18n{runtimeHostsDialogInputLabel}" placeholder="http://example.com" value="{{site_}}" on-input="validate_" invalid="[[inputInvalid_]]" error-message="$i18n{runtimeHostsDialogInputError}" spellcheck="false" autofocus>
    </cr-input>
    <div class="matching-restricted-sites-warning" hidden="[[!matchingRestrictedSites_.length]]">
      <iron-icon icon="cr:info-outline"></iron-icon>
      <span>[[computeMatchingRestrictedSitesWarning_(site_)]]</span>
    </div>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" id="submit" on-click="onSubmitClick_" disabled="[[computeSubmitButtonDisabled_(inputInvalid_, site_)]]">
      [[computeSubmitButtonLabel_(currentSite)]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

function getTemplate$s() {
    return html `<!--_html_template_start_--><style include="cr-shared-style"></style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="title">[[computeDialogTitle_(siteToEdit)]]</div>
  <div slot="body">
    <cr-input id="input" label="$i18n{sitePermissionsDialogInputLabel}" placeholder="https://example.com" value="{{site_}}" on-input="validate_" invalid="[[!inputValid_]]" error-message="$i18n{sitePermissionsDialogInputError}" spellcheck="false" autofocus>
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancel_">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" id="submit" on-click="onSubmit_" disabled="[[computeSubmitButtonDisabled_(inputValid_, site_)]]">
      [[computeSubmitButtonLabel_(siteToEdit)]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// A RegExp to roughly match acceptable patterns entered by the user.
// exec'ing() this RegExp will match the following groups:
// 0: Full matched string.
// 1: Scheme + scheme separator (e.g., 'https://').
// 2: Scheme only (e.g., 'https').
// 3: Hostname (e.g., 'example.com').
// 4: Port, including ':' separator (e.g., ':80').
const sitePermissionsPatternRegExp = new RegExp('^' +
    // Scheme; optional.
    '((http|https)://)?' +
    // Hostname or localhost, required.
    '([a-z0-9\\.-]+\\.[a-z0-9]+|localhost)' +
    // Port, optional.
    '(:[0-9]+)?' +
    '$');
function getSitePermissionsPatternFromSite(site) {
    const res = sitePermissionsPatternRegExp.exec(site);
    assert(res);
    const scheme = res[1] || 'https://';
    const host = res[3];
    const port = res[4] || '';
    return scheme + host + port;
}
class SitePermissionsEditUrlDialogElement extends PolymerElement {
    static get is() {
        return 'site-permissions-edit-url-dialog';
    }
    static get template() {
        return getTemplate$s();
    }
    static get properties() {
        return {
            delegate: Object,
            siteSet: String,
            /**
             * The site that this entry is currently managing. Only non-empty if this
             * is for editing an existing entry.
             */
            siteToEdit: {
                type: String,
                value: null,
            },
            site_: {
                type: String,
                value: '',
            },
            /** Whether the currently-entered input is valid. */
            inputValid_: {
                type: Boolean,
                value: true,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.siteToEdit !== null) {
            this.site_ = this.siteToEdit;
            this.validate_();
        }
    }
    /**
     * Validates that the pattern entered is valid by testing it against the
     * regex. An empty patterh is considered "valid" as the invalid message will
     * not be shown, but the input cannot be submitted as the action button will
     * be disabled.
     */
    validate_() {
        this.inputValid_ = this.site_.trim().length === 0 ||
            sitePermissionsPatternRegExp.test(this.site_);
    }
    computeDialogTitle_() {
        return loadTimeData.getString(this.siteToEdit === null ? 'sitePermissionsAddSiteDialogTitle' :
            'sitePermissionsEditSiteDialogTitle');
    }
    computeSubmitButtonDisabled_() {
        // If input is empty, disable the action button.
        return !this.inputValid_ || this.site_.trim().length === 0;
    }
    computeSubmitButtonLabel_() {
        return loadTimeData.getString(this.siteToEdit === null ? 'add' : 'save');
    }
    onCancel_() {
        this.$.dialog.cancel();
    }
    onSubmit_() {
        const pattern = getSitePermissionsPatternFromSite(this.site_);
        if (this.siteToEdit !== null) {
            this.handleEdit_(pattern);
        }
        else {
            this.handleAdd_(pattern);
        }
    }
    handleEdit_(pattern) {
        assert(this.siteToEdit);
        if (pattern === this.siteToEdit) {
            this.$.dialog.close();
            return;
        }
        this.delegate.removeUserSpecifiedSites(this.siteSet, [this.siteToEdit])
            .then(() => {
            this.addUserSpecifiedSite_(pattern);
        });
    }
    handleAdd_(pattern) {
        assert(!this.siteToEdit);
        this.addUserSpecifiedSite_(pattern);
    }
    addUserSpecifiedSite_(pattern) {
        this.delegate.addUserSpecifiedSites(this.siteSet, [pattern])
            .then(() => {
            this.$.dialog.close();
        }, () => {
            this.inputValid_ = false;
        });
    }
}
customElements.define(SitePermissionsEditUrlDialogElement.is, SitePermissionsEditUrlDialogElement);

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SiteSettingsMixin = dedupingMixin((superClass) => {
    class SiteSettingsMixin extends superClass {
        static get properties() {
            return {
                delegate: Object,
                enableEnhancedSiteControls: Boolean,
                restrictedSites: {
                    type: Array,
                    value: [],
                },
                permittedSites: {
                    type: Array,
                    value: [],
                },
            };
        }
        ready() {
            super.ready();
            if (this.enableEnhancedSiteControls) {
                this.delegate.getUserSiteSettings().then(this.onUserSiteSettingsChanged_.bind(this));
                this.delegate.getUserSiteSettingsChangedTarget().addListener(this.onUserSiteSettingsChanged_.bind(this));
            }
        }
        onUserSiteSettingsChanged_({ permittedSites, restrictedSites, }) {
            this.permittedSites = permittedSites;
            this.restrictedSites = restrictedSites;
        }
    }
    return SiteSettingsMixin;
});

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// A RegExp to roughly match acceptable patterns entered by the user.
// exec'ing() this RegExp will match the following groups:
// 0: Full matched string.
// 1: Scheme + scheme separator (e.g., 'https://').
// 2: Scheme only (e.g., 'https').
// 3: Match subdomains ('*.').
// 4: Hostname (e.g., 'example.com').
// 5: Port, including ':' separator (e.g., ':80').
// 6: Path, include '/' separator (e.g., '/*').
const runtimeHostsPatternRegExp = new RegExp('^' +
    // Scheme; optional.
    '((http|https|\\*)://)?' +
    // Include subdomains specifier; optional.
    '(\\*\\.)?' +
    // Hostname or localhost, required.
    '([a-z0-9\\.-]+\\.[a-z0-9]+|localhost)' +
    // Port, optional.
    '(:[0-9]+)?' +
    // Path, optional but if present must be '/' or '/*'.
    '(\\/\\*|\\/)?' +
    '$');
function getPatternFromSite(site) {
    const res = runtimeHostsPatternRegExp.exec(site);
    assert(res);
    const scheme = res[1] || '*://';
    const host = (res[3] || '') + res[4];
    const port = res[5] || '';
    const path = '/*';
    return scheme + host + port + path;
}
// Returns the sublist of `userSites` which match the pattern specified by
// `host`.
function getMatchingUserSpecifiedSites(userSites, host) {
    if (!runtimeHostsPatternRegExp.test(host)) {
        return [];
    }
    const newHostRes = runtimeHostsPatternRegExp.exec(host);
    assert(newHostRes);
    const matchAllSchemes = !newHostRes[1] || newHostRes[1] === '*://';
    const matchAllSubdomains = newHostRes[3] === '*.';
    // For each restricted site, break it down into
    // `sitePermissionsPatternRegExp` components and check against components
    // from `newHostRes`.
    return userSites.filter((userSite) => {
        const siteRes = sitePermissionsPatternRegExp.exec(userSite);
        assert(siteRes);
        // Check if schemes match, unless `newHostRes` has a wildcard scheme.
        if (!matchAllSchemes && newHostRes[1] !== siteRes[1]) {
            return false;
        }
        // Check if host names match. If `matchAllSubdomains` is specified, check
        // that `newHostRes[4]` is a suffix of `siteRes[3]`
        if (matchAllSubdomains && !siteRes[3].endsWith(newHostRes[4])) {
            return false;
        }
        if (!matchAllSubdomains && siteRes[3] !== newHostRes[4]) {
            return false;
        }
        // Ports match if:
        //  - both are unspecified
        //  - both are specified and are an exact match
        //  - specified for `restrictedSite` but not `this,site_`
        return !newHostRes[5] || newHostRes[5] === siteRes[4];
    });
}
const ExtensionsRuntimeHostsDialogElementBase = I18nMixin(SiteSettingsMixin(PolymerElement));
class ExtensionsRuntimeHostsDialogElement extends ExtensionsRuntimeHostsDialogElementBase {
    static get is() {
        return 'extensions-runtime-hosts-dialog';
    }
    static get template() {
        return getTemplate$t();
    }
    static get properties() {
        return {
            itemId: String,
            /**
             * The site that this entry is currently managing. Only non-empty if this
             * is for editing an existing entry.
             */
            currentSite: {
                type: String,
                value: null,
            },
            /**
             * Whether the dialog should update the host access to be "on specific
             * sites" before adding a new host permission.
             */
            updateHostAccess: {
                type: Boolean,
                value: false,
            },
            /** The site to add an exception for. */
            site_: String,
            /** Whether the currently-entered input is valid. */
            inputInvalid_: {
                type: Boolean,
                value: false,
            },
            /**
             * the list of user specified restricted sites that match with `site_` if
             * `site_` is valid.
             */
            matchingRestrictedSites_: {
                type: Array,
                computed: 'computeMatchingRestrictedSites_(site_, restrictedSites)',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.currentSite !== null && this.currentSite !== undefined) {
            this.site_ = this.currentSite;
            this.validate_();
        }
        this.$.dialog.showModal();
    }
    isOpen() {
        return this.$.dialog.open;
    }
    /**
     * Validates that the pattern entered is valid.
     */
    validate_() {
        // If input is empty, disable the action button, but don't show the red
        // invalid message.
        if (this.site_.trim().length === 0) {
            this.inputInvalid_ = false;
            return;
        }
        this.inputInvalid_ = !runtimeHostsPatternRegExp.test(this.site_);
    }
    computeDialogTitle_() {
        const stringId = this.currentSite === null ? 'runtimeHostsDialogTitle' :
            'hostPermissionsEdit';
        return loadTimeData.getString(stringId);
    }
    computeSubmitButtonDisabled_() {
        return this.inputInvalid_ || this.site_ === undefined ||
            this.site_.trim().length === 0;
    }
    computeSubmitButtonLabel_() {
        const stringId = this.currentSite === null ? 'add' : 'save';
        return loadTimeData.getString(stringId);
    }
    computeMatchingRestrictedSites_() {
        return getMatchingUserSpecifiedSites(this.restrictedSites, this.site_);
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    /**
     * The tap handler for the submit button (adds the pattern and closes
     * the dialog).
     */
    onSubmitClick_() {
        chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.AddHostDialogSubmitted');
        if (this.currentSite !== null) {
            this.handleEdit_();
        }
        else {
            this.handleAdd_();
        }
    }
    /**
     * Handles adding a new site entry.
     */
    handleAdd_() {
        assert(!this.currentSite);
        if (this.updateHostAccess) {
            this.delegate.setItemHostAccess(this.itemId, chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES);
        }
        this.addPermission_();
    }
    /**
     * Handles editing an existing site entry.
     */
    handleEdit_() {
        assert(this.currentSite);
        assert(!this.updateHostAccess, 'Editing host permissions should only be possible if the host ' +
            'access is already set to specific sites.');
        if (this.currentSite === this.site_) {
            // No change in values, so no need to update anything.
            this.$.dialog.close();
            return;
        }
        // Editing an existing entry is done by removing the current site entry,
        // and then adding the new one.
        this.delegate.removeRuntimeHostPermission(this.itemId, this.currentSite)
            .then(() => {
            this.addPermission_();
        });
    }
    /**
     * Adds the runtime host permission through the delegate. If successful,
     * closes the dialog; otherwise displays the invalid input message.
     */
    addPermission_() {
        const pattern = getPatternFromSite(this.site_);
        const restrictedSites = this.matchingRestrictedSites_;
        this.delegate.addRuntimeHostPermission(this.itemId, pattern)
            .then(() => {
            if (restrictedSites.length) {
                this.delegate.removeUserSpecifiedSites(chrome.developerPrivate.SiteSet.USER_RESTRICTED, restrictedSites);
            }
            this.$.dialog.close();
        }, () => {
            this.inputInvalid_ = true;
        });
    }
    /**
     * Returns a warning message containing the first restricted site that
     * overlaps with `this.site_`, or an empty string if there are no matching
     * restricted sites.
     */
    computeMatchingRestrictedSitesWarning_() {
        return this.matchingRestrictedSites_.length ?
            this.i18n('matchingRestrictedSitesWarning', this.matchingRestrictedSites_[0]) :
            '';
    }
}
customElements.define(ExtensionsRuntimeHostsDialogElement.is, ExtensionsRuntimeHostsDialogElement);

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @return The scale factors supported by this platform for webui resources.
 */
function getSupportedScaleFactors() {
    const supportedScaleFactors = [];
    if (!isIOS) {
        // This matches the code in ResourceBundle::InitSharedInstance() that
        // supports SCALE_FACTOR_100P on all non-iOS platforms.
        supportedScaleFactors.push(1);
    }
    if (!isIOS && !isAndroid) {
        // All desktop platforms support zooming which also updates the renderer's
        // device scale factors (a.k.a devicePixelRatio), and these platforms have
        // high DPI assets for 2x.  Let the renderer pick the closest image for
        // the current device scale factor.
        supportedScaleFactors.push(2);
    }
    else {
        // For other platforms that use fixed device scale factor, use
        // the window's device pixel ratio.
        // TODO(oshima): Investigate corresponding to
        // ResourceBundle::InitSharedInstance() more closely.
        supportedScaleFactors.push(window.devicePixelRatio);
    }
    return supportedScaleFactors;
}
/**
 * Generates a CSS url string.
 * @param s The URL to generate the CSS url for.
 * @return The CSS url string.
 */
function getUrlForCss(s) {
    // http://www.w3.org/TR/css3-values/#uris
    // Parentheses, commas, whitespace characters, single quotes (') and double
    // quotes (") appearing in a URI must be escaped with a backslash
    const s2 = s.replace(/(\(|\)|\,|\s|\'|\"|\\)/g, '\\$1');
    return `url("${s2}")`;
}
/**
 * Generates a CSS image-set for a chrome:// url.
 * An entry in the image set is added for each of getSupportedScaleFactors().
 * The scale-factor-specific url is generated by replacing the first instance
 * of 'scalefactor' in |path| with the numeric scale factor.
 *
 * @param path The URL to generate an image set for.
 *     'scalefactor' should be a substring of |path|.
 * @return The CSS image-set.
 */
function getImageSet(path) {
    const supportedScaleFactors = getSupportedScaleFactors();
    const replaceStartIndex = path.indexOf('SCALEFACTOR');
    if (replaceStartIndex < 0) {
        return getUrlForCss(path);
    }
    let s = '';
    for (let i = 0; i < supportedScaleFactors.length; ++i) {
        const scaleFactor = supportedScaleFactors[i];
        const pathWithScaleFactor = path.substr(0, replaceStartIndex) +
            scaleFactor + path.substr(replaceStartIndex + 'scalefactor'.length);
        s += getUrlForCss(pathWithScaleFactor) + ' ' + scaleFactor + 'x';
        if (i !== supportedScaleFactors.length - 1) {
            s += ', ';
        }
    }
    return 'image-set(' + s + ')';
}
function getBaseFaviconUrl() {
    const faviconUrl = new URL('chrome://favicon2/');
    faviconUrl.searchParams.set('size', '16');
    faviconUrl.searchParams.set('scaleFactor', 'SCALEFACTORx');
    return faviconUrl;
}
/**
 * Creates a CSS image-set for a favicon request based on a page URL.
 *
 * @param url URL of the original page
 * @param isSyncedUrlForHistoryUi Should be set to true only if the
 *     caller is an UI aimed at displaying user history, and the requested url
 *     is known to be present in Chrome sync data.
 * @param remoteIconUrlForUma In case the entry is contained in sync
 *     data, we can pass the associated icon url.
 * @param size The favicon size.
 * @param forceLightMode Flag to force the service to show the light
 *     mode version of the default favicon.
 *
 * @return image-set for the favicon.
 */
function getFaviconForPageURL(url, isSyncedUrlForHistoryUi, remoteIconUrlForUma = '', size = 16, forceLightMode = false) {
    // Note: URL param keys used below must match those in the description of
    // chrome://favicon2 format in components/favicon_base/favicon_url_parser.h.
    const faviconUrl = getBaseFaviconUrl();
    faviconUrl.searchParams.set('size', size.toString());
    faviconUrl.searchParams.set('pageUrl', url);
    // TODO(dbeam): use the presence of 'allowGoogleServerFallback' to
    // indicate true, otherwise false.
    const fallback = isSyncedUrlForHistoryUi ? '1' : '0';
    faviconUrl.searchParams.set('allowGoogleServerFallback', fallback);
    if (isSyncedUrlForHistoryUi) {
        faviconUrl.searchParams.set('iconUrl', remoteIconUrlForUma);
    }
    if (forceLightMode) {
        faviconUrl.searchParams.set('forceLightMode', 'true');
    }
    return getImageSet(faviconUrl.toString());
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SUBDOMAIN_SPECIFIER = '*.';
/**
 * Returns a favicon url for a given site.
 */
function getFaviconUrl(site) {
    // Use 'http' as the scheme if `site` has a wildcard scheme.
    let faviconUrl = site.startsWith('*://') ? site.replace('*://', 'http://') : site;
    // if `site` ends in a wildcard path, trim it.
    if (faviconUrl.endsWith('/*')) {
        faviconUrl = faviconUrl.substring(0, faviconUrl.length - 2);
    }
    return getFaviconForPageURL(faviconUrl, /*isSyncedUrlForHistoryUi=*/ false, 
    /*remoteIconUrlForUma=*/ '', /*size=*/ 20);
}
/**
 * Returns if the given site matches all of its subdomains.
 */
function matchesSubdomains(site) {
    // Sites that match all subdomains for a given host will specify "*.<host>".
    // Given how sites are specified as origins for user specified sites and how
    // extension host permissions are specified, it should be safe to assume
    // that "*." will only be used to match subdomains.
    return site.includes(SUBDOMAIN_SPECIFIER);
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsHostPermissionsToggleListElementBase = SiteSettingsMixin(PolymerElement);
class ExtensionsHostPermissionsToggleListElement extends ExtensionsHostPermissionsToggleListElementBase {
    static get is() {
        return 'extensions-host-permissions-toggle-list';
    }
    static get template() {
        return getTemplate$u();
    }
    static get properties() {
        return {
            /**
             * The underlying permissions data.
             */
            permissions: Object,
            itemId: String,
            /**
             * This is set as the host the user is trying to toggle on/grant host
             * permissions for, if the host matches one or more user specified
             * restricted sites.
             */
            selectedHost_: {
                type: String,
                value: '',
            },
            // The list of restricted sites that match a host the user is toggling on.
            matchingRestrictedSites_: Array,
            showMatchingRestrictedSitesDialog_: {
                type: Boolean,
                value: false,
            },
        };
    }
    getRestrictedSitesDialog() {
        return this.shadowRoot
            .querySelector('extensions-restricted-sites-dialog');
    }
    /**
     * @return Whether the item is allowed to execute on all of its requested
     *     sites.
     */
    allowedOnAllHosts_() {
        return this.permissions.hostAccess ===
            chrome.developerPrivate.HostAccess.ON_ALL_SITES;
    }
    /**
     * @return A lexicographically-sorted list of the hosts associated with this
     *     item.
     */
    getSortedHosts_() {
        return this.permissions.hosts.sort((a, b) => {
            if (a.host < b.host) {
                return -1;
            }
            if (a.host > b.host) {
                return 1;
            }
            return 0;
        });
    }
    onAllHostsToggleChanged_(e) {
        // TODO(devlin): In the case of going from all sites to specific sites,
        // we'll withhold all sites (i.e., all specific site toggles will move to
        // unchecked, and the user can check them individually). This is slightly
        // different than the sync page, where disabling the "sync everything"
        // switch leaves everything synced, and user can uncheck them
        // individually. It could be nice to align on behavior, but probably not
        // super high priority.
        const checked = e.detail;
        if (checked) {
            this.delegate.setItemHostAccess(this.itemId, chrome.developerPrivate.HostAccess.ON_ALL_SITES);
            this.delegate.recordUserAction(UserAction.ALL_TOGGLED_ON);
        }
        else {
            this.delegate.setItemHostAccess(this.itemId, chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES);
            this.delegate.recordUserAction(UserAction.ALL_TOGGLED_OFF);
        }
    }
    onHostAccessChanged_(e) {
        const host = e.target.host;
        const checked = e.target.checked;
        if (!checked) {
            this.delegate.removeRuntimeHostPermission(this.itemId, host);
            this.delegate.recordUserAction(UserAction.SPECIFIC_TOGGLED_OFF);
            return;
        }
        // If the user is about to toggle on `host`, show a dialog if there are
        // matching user specified restricted sites instead of granting `host`
        // right away.
        this.delegate.recordUserAction(UserAction.SPECIFIC_TOGGLED_ON);
        const matchingRestrictedSites = getMatchingUserSpecifiedSites(this.restrictedSites, host);
        if (matchingRestrictedSites.length) {
            this.selectedHost_ = host;
            this.matchingRestrictedSites_ = matchingRestrictedSites;
            this.showMatchingRestrictedSitesDialog_ = true;
            // Flow continues in onRestrictedSitesDialogClose_.
            return;
        }
        this.delegate.addRuntimeHostPermission(this.itemId, host);
    }
    isItemChecked_(item) {
        return item.granted || this.selectedHost_ === item.host;
    }
    getAllHostsToggleLabelClass_() {
        return this.enableEnhancedSiteControls ? 'new-all-hosts-toggle-label' : '';
    }
    onLearnMoreClick_() {
        this.delegate.recordUserAction(UserAction.LEARN_MORE);
    }
    getFaviconUrl_(url) {
        return getFaviconUrl(url);
    }
    unselectHost_() {
        this.showMatchingRestrictedSitesDialog_ = false;
        this.selectedHost_ = '';
        this.matchingRestrictedSites_ = [];
    }
    onMatchingRestrictedSitesDialogClose_() {
        const dialog = this.getRestrictedSitesDialog();
        assert(dialog);
        if (dialog.wasConfirmed()) {
            assert(this.matchingRestrictedSites_.length);
            this.delegate.addRuntimeHostPermission(this.itemId, this.selectedHost_)
                .then(() => {
                this.delegate.removeUserSpecifiedSites(chrome.developerPrivate.SiteSet.USER_RESTRICTED, this.matchingRestrictedSites_);
            })
                .finally(() => {
                this.unselectHost_();
            });
        }
        else {
            this.unselectHost_();
        }
    }
}
customElements.define(ExtensionsHostPermissionsToggleListElement.is, ExtensionsHostPermissionsToggleListElement);

const styleMod$2 = document.createElement('dom-module');
styleMod$2.appendChild(html `
  <template>
    <style>
:host{--cr-radio-button-checked-color:var(--google-blue-600);--cr-radio-button-checked-ripple-color:rgba(var(--google-blue-600-rgb), .2);--cr-radio-button-ink-size:40px;--cr-radio-button-size:16px;--cr-radio-button-unchecked-color:var(--google-grey-700);--cr-radio-button-unchecked-ripple-color:rgba(var(--google-grey-600-rgb), .15);--ink-to-circle:calc((var(--cr-radio-button-ink-size) -
                               var(--cr-radio-button-size)) / 2);align-items:center;display:flex;flex-shrink:0;gap:var(--cr-radio-button-label-spacing,20px);outline:0}@media (prefers-color-scheme:dark){:host{--cr-radio-button-checked-color:var(--google-blue-300);--cr-radio-button-checked-ripple-color:rgba(var(--google-blue-300-rgb), .4);--cr-radio-button-unchecked-color:var(--google-grey-500);--cr-radio-button-unchecked-ripple-color:rgba(var(--google-grey-300-rgb), .4)}}:host-context([chrome-refresh-2023]):host{--cr-radio-button-ink-size:32px;--cr-radio-button-checked-color:var(--color-radio-button-foreground-checked,
                var(--cr-fallback-color-primary));--cr-radio-button-checked-ripple-color:var(--cr-active-background-color);--cr-radio-button-unchecked-color:var(--color-radio-button-foreground-unchecked,
                var(--cr-fallback-color-outline));--cr-radio-button-unchecked-ripple-color:var(--cr-active-background-color)}@media (forced-colors:active){:host{--cr-radio-button-checked-color:SelectedItem}}:host([disabled]){opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]):host([disabled]){opacity:1;--cr-radio-button-checked-color:var(--color-radio-foreground-disabled,
            var(--cr-fallback-color-disabled-background));--cr-radio-button-unchecked-color:var(--color-radio-foreground-disabled,
                var(--cr-fallback-color-disabled-background))}:host(:not([disabled])){cursor:pointer}:host(.label-first){flex-direction:row-reverse}#labelWrapper{flex:1}:host-context([chrome-refresh-2023]):host([disabled]) #labelWrapper{opacity:var(--cr-disabled-opacity)}#label{color:inherit}:host([hide-label-text]) #label{clip:rect(0,0,0,0);display:block;position:fixed}.disc,.disc-border,.disc-wrapper,paper-ripple{border-radius:50%}.disc-wrapper{height:var(--cr-radio-button-size);margin-block-start:var(--cr-radio-button-disc-margin-block-start,0);position:relative;width:var(--cr-radio-button-size)}.disc,.disc-border{box-sizing:border-box;height:var(--cr-radio-button-size);width:var(--cr-radio-button-size)}.disc-border{border:2px solid var(--cr-radio-button-unchecked-color)}:host([checked]) .disc-border{border-color:var(--cr-radio-button-checked-color)}#button:focus{outline:0}.disc{background-color:transparent;position:absolute;top:0;transform:scale(0);transition:border-color .2s,transform .2s}:host([checked]) .disc{background-color:var(--cr-radio-button-checked-color);transform:scale(.5)}:host-context([chrome-refresh-2023]) #overlay{border-radius:50%;box-sizing:border-box;display:none;height:var(--cr-radio-button-ink-size);left:50%;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:var(--cr-radio-button-ink-size)}:host-context([chrome-refresh-2023]) #button:hover #overlay{background-color:var(--cr-hover-background-color);display:block}:host-context([chrome-refresh-2023]) #button:focus-visible #overlay{border:2px solid var(--cr-focus-outline-color);display:block}paper-ripple{--paper-ripple-opacity:1;color:var(--cr-radio-button-unchecked-ripple-color);height:var(--cr-radio-button-ink-size);left:calc(-1 * var(--ink-to-circle));pointer-events:none;position:absolute;top:calc(-1 * var(--ink-to-circle));transition:color linear 80ms;width:var(--cr-radio-button-ink-size)}:host-context([dir=rtl]) paper-ripple{left:auto;right:calc(-1 * var(--ink-to-circle))}:host([checked]) paper-ripple{color:var(--cr-radio-button-checked-ripple-color)}
    </style>
  </template>
`.content);
styleMod$2.register('cr-radio-button-style');

function getTemplate$r() {
    return html `<!--_html_template_start_-->    <style include="cr-radio-button-style cr-hidden-style"></style>

    <div aria-checked$="[[getAriaChecked_(checked)]]" aria-describedby="slotted-content" aria-disabled$="[[getAriaDisabled_(disabled)]]" aria-labelledby="label" class="disc-wrapper" id="button" role="radio" tabindex$="[[buttonTabIndex_]]" on-keydown="onInputKeydown_">
      <div class="disc-border"></div>
      <div class="disc"></div>
      <div id="overlay"></div>
    </div>

    <div id="labelWrapper">
      <span id="label" hidden$="[[!label]]" aria-hidden="true">[[label]]</span>
      <span id="slotted-content">
        <slot></slot>
      </span>
    </div>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRadioButtonMixin = dedupingMixin((superClass) => {
    class CrRadioButtonMixin extends superClass {
        static get properties() {
            return {
                checked: {
                    type: Boolean,
                    value: false,
                    reflectToAttribute: true,
                },
                disabled: {
                    type: Boolean,
                    value: false,
                    reflectToAttribute: true,
                    notify: true,
                },
                /**
                 * Whether the radio button should be focusable or not. Toggling
                 * this property sets the corresponding tabindex of the button
                 * itself as well as any links in the button description.
                 */
                focusable: {
                    type: Boolean,
                    value: false,
                    observer: 'onFocusableChanged_',
                },
                hideLabelText: {
                    type: Boolean,
                    value: false,
                    reflectToAttribute: true,
                },
                label: {
                    type: String,
                    value: '', // Allows hidden$= binding to run without being set.
                },
                name: {
                    type: String,
                    notify: true,
                    reflectToAttribute: true,
                },
                /**
                 * Holds the tabIndex for the radio button.
                 */
                buttonTabIndex_: {
                    type: Number,
                    computed: 'getTabIndex_(focusable)',
                },
            };
        }
        connectedCallback() {
            super.connectedCallback();
            this.addEventListener('blur', this.hideRipple_.bind(this));
            if (!document.documentElement.hasAttribute('chrome-refresh-2023')) {
                this.addEventListener('focus', this.onFocus_.bind(this));
            }
            this.addEventListener('up', this.hideRipple_.bind(this));
        }
        focus() {
            const button = this.shadowRoot.querySelector('#button');
            assert(button);
            button.focus();
        }
        getPaperRipple() {
            assertNotReached();
        }
        onFocus_() {
            this.getPaperRipple().showAndHoldDown();
        }
        hideRipple_() {
            this.getPaperRipple().clear();
        }
        onFocusableChanged_() {
            const links = this.querySelectorAll('a');
            links.forEach((link) => {
                // Remove the tab stop on any links when the row is unchecked.
                // Since the row is not tabbable, any links within the row
                // should not be either.
                link.tabIndex = this.checked ? 0 : -1;
            });
        }
        getAriaChecked_() {
            return this.checked ? 'true' : 'false';
        }
        getAriaDisabled_() {
            return this.disabled ? 'true' : 'false';
        }
        getTabIndex_() {
            return this.focusable ? 0 : -1;
        }
        /**
         * When shift-tab is pressed, first bring the focus to the host
         * element. This accomplishes 2 things:
         * 1) Host doesn't get focused when the browser moves the focus
         *    backward.
         * 2) focus now escaped the shadow-dom of this element, so that
         *    it'll correctly obey non-zero tabindex ordering of the
         *    containing document.
         */
        onInputKeydown_(e) {
            if (e.shiftKey && e.key === 'Tab') {
                this.focus();
            }
        }
    }
    return CrRadioButtonMixin;
});

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrRadioButtonElementBase = PaperRippleMixin(CrRadioButtonMixin(PolymerElement));
class CrRadioButtonElement extends CrRadioButtonElementBase {
    static get is() {
        return 'cr-radio-button';
    }
    static get template() {
        return getTemplate$r();
    }
    // Overridden from CrRadioButtonMixin
    getPaperRipple() {
        return this.getRipple();
    }
    // Overridden from PaperRippleMixin
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _createRipple() {
        this._rippleContainer = this.shadowRoot.querySelector('.disc-wrapper');
        const ripple = super._createRipple();
        ripple.id = 'ink';
        ripple.setAttribute('recenters', '');
        ripple.classList.add('circle', 'toggle-ink');
        return ripple;
    }
}
customElements.define(CrRadioButtonElement.is, CrRadioButtonElement);

function getTemplate$q() {
    return html `<!--_html_template_start_-->    <style>:host{display:inline-block}:host ::slotted(*){padding:var(--cr-radio-group-item-padding,12px)}:host([disabled]){cursor:initial;pointer-events:none;user-select:none}:host([disabled]) ::slotted(*){opacity:var(--cr-disabled-opacity)}</style>
    <slot></slot>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isEnabled(radio) {
    return radio.matches(':not([disabled]):not([hidden])') &&
        radio.style.display !== 'none' && radio.style.visibility !== 'hidden';
}
class CrRadioGroupElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.buttons_ = null;
        this.buttonEventTracker_ = new EventTracker();
        this.deltaKeyMap_ = null;
        this.isRtl_ = false;
        this.populateBound_ = null;
    }
    static get is() {
        return 'cr-radio-group';
    }
    static get template() {
        return getTemplate$q();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'update_',
            },
            selected: {
                type: String,
                notify: true,
                observer: 'update_',
            },
            selectableElements: {
                type: String,
                value: 'cr-radio-button, cr-card-radio-button, controlled-radio-button',
            },
            nestedSelectable: {
                type: Boolean,
                value: false,
                observer: 'populate_',
            },
            selectableRegExp_: {
                value: Object,
                computed: 'computeSelectableRegExp_(selectableElements)',
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('keydown', e => this.onKeyDown_(/** @type {!KeyboardEvent} */ (e)));
        this.addEventListener('click', this.onClick_.bind(this));
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'radiogroup');
        }
        this.setAttribute('aria-disabled', 'false');
    }
    connectedCallback() {
        super.connectedCallback();
        this.isRtl_ = this.matches(':host-context([dir=rtl]) cr-radio-group');
        this.deltaKeyMap_ = new Map([
            ['ArrowDown', 1],
            ['ArrowLeft', this.isRtl_ ? 1 : -1],
            ['ArrowRight', this.isRtl_ ? -1 : 1],
            ['ArrowUp', -1],
            ['PageDown', 1],
            ['PageUp', -1],
        ]);
        this.populateBound_ = () => this.populate_();
        assert(this.populateBound_);
        this.shadowRoot.querySelector('slot').addEventListener('slotchange', this.populateBound_);
        this.populate_();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.populateBound_);
        this.shadowRoot.querySelector('slot').removeEventListener('slotchange', this.populateBound_);
        this.buttonEventTracker_.removeAll();
    }
    focus() {
        if (this.disabled || !this.buttons_) {
            return;
        }
        const radio = this.buttons_.find(radio => this.isButtonEnabledAndSelected_(radio));
        if (radio) {
            radio.focus();
        }
    }
    onKeyDown_(event) {
        if (this.disabled) {
            return;
        }
        if (event.ctrlKey || event.shiftKey || event.metaKey || event.altKey) {
            return;
        }
        const targetElement = event.target;
        if (!this.buttons_ || !this.buttons_.includes(targetElement)) {
            return;
        }
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            this.select_(targetElement);
            return;
        }
        const enabledRadios = this.buttons_.filter(isEnabled);
        if (enabledRadios.length === 0) {
            return;
        }
        assert(this.deltaKeyMap_);
        let selectedIndex;
        const max = enabledRadios.length - 1;
        if (event.key === 'Home') {
            selectedIndex = 0;
        }
        else if (event.key === 'End') {
            selectedIndex = max;
        }
        else if (this.deltaKeyMap_.has(event.key)) {
            const delta = this.deltaKeyMap_.get(event.key);
            // If nothing selected, start from the first radio then add |delta|.
            const lastSelection = enabledRadios.findIndex(radio => radio.checked);
            selectedIndex = Math.max(0, lastSelection) + delta;
            // Wrap the selection, if needed.
            if (selectedIndex > max) {
                selectedIndex = 0;
            }
            else if (selectedIndex < 0) {
                selectedIndex = max;
            }
        }
        else {
            return;
        }
        const radio = enabledRadios[selectedIndex];
        const name = `${radio.name}`;
        if (this.selected !== name) {
            event.preventDefault();
            event.stopPropagation();
            this.selected = name;
            radio.focus();
        }
    }
    computeSelectableRegExp_() {
        const tags = this.selectableElements.split(', ').join('|');
        return new RegExp(`^(${tags})$`, 'i');
    }
    onClick_(event) {
        const path = event.composedPath();
        if (path.some(target => /^a$/i.test(target.tagName))) {
            return;
        }
        const target = path.find(n => this.selectableRegExp_.test(n.tagName));
        if (target && this.buttons_ && this.buttons_.includes(target)) {
            this.select_(target);
        }
    }
    populate_() {
        const nodes = this.shadowRoot.querySelector('slot').assignedNodes({ flatten: true });
        this.buttons_ = Array.from(nodes).flatMap(node => {
            if (node.nodeType !== Node.ELEMENT_NODE) {
                return [];
            }
            const el = node;
            let result = [];
            if (el.matches(this.selectableElements)) {
                result.push(el);
            }
            if (this.nestedSelectable) {
                result = result.concat(Array.from(el.querySelectorAll(this.selectableElements)));
            }
            return result;
        });
        this.buttonEventTracker_.removeAll();
        this.buttons_.forEach(el => {
            this.buttonEventTracker_.add(el, 'disabled-changed', () => this.populate_());
            this.buttonEventTracker_.add(el, 'name-changed', () => this.populate_());
        });
        this.update_();
    }
    select_(button) {
        if (!isEnabled(button)) {
            return;
        }
        const name = `${button.name}`;
        if (this.selected !== name) {
            this.selected = name;
        }
    }
    isButtonEnabledAndSelected_(button) {
        return !this.disabled && button.checked && isEnabled(button);
    }
    update_() {
        if (!this.buttons_) {
            return;
        }
        let noneMadeFocusable = true;
        this.buttons_.forEach(radio => {
            radio.checked =
                this.selected !== undefined && `${radio.name}` === `${this.selected}`;
            const disabled = this.disabled || !isEnabled(radio);
            const canBeFocused = radio.checked && !disabled;
            if (canBeFocused) {
                radio.focusable = true;
                noneMadeFocusable = false;
            }
            else {
                radio.focusable = false;
            }
            radio.setAttribute('aria-disabled', `${disabled}`);
        });
        this.setAttribute('aria-disabled', `${this.disabled}`);
        if (noneMadeFocusable && !this.disabled) {
            const radio = this.buttons_.find(isEnabled);
            if (radio) {
                radio.focusable = true;
            }
        }
    }
}
customElements.define(CrRadioGroupElement.is, CrRadioGroupElement);

const styleMod$1 = document.createElement('dom-module');
styleMod$1.appendChild(html `
  <template>
    <style>
.md-select{--md-arrow-width:10px;--md-select-bg-color:var(--google-grey-100);--md-select-focus-shadow-color:rgba(var(--google-blue-600-rgb), .4);--md-select-option-bg-color:white;--md-select-side-padding:8px;--md-select-text-color:var(--cr-primary-text-color);-webkit-appearance:none;background:url(//resources/images/arrow_down.svg) calc(100% - var(--md-select-side-padding)) center no-repeat;background-color:var(--md-select-bg-color);background-size:var(--md-arrow-width);border:none;border-radius:4px;color:var(--md-select-text-color);cursor:pointer;font-family:inherit;font-size:inherit;line-height:inherit;max-width:100%;outline:0;padding-bottom:6px;padding-inline-end:calc(var(--md-select-side-padding) + var(--md-arrow-width) + 3px);padding-inline-start:var(--md-select-side-padding);padding-top:6px;width:var(--md-select-width,200px)}@media (prefers-color-scheme:dark){.md-select{--md-select-bg-color:rgba(0, 0, 0, .3);--md-select-focus-shadow-color:rgba(var(--google-blue-300-rgb), .5);--md-select-option-bg-color:var(--google-grey-900-white-4-percent);background-image:url(//resources/images/dark/arrow_down.svg)}}:host-context([chrome-refresh-2023]) .md-select{--md-select-bg-color:transparent;--md-arrow-width:7px;--md-select-side-padding:10px;--md-select-text-color:inherit;border:solid 1px var(--color-combobox-container-outline,var(--cr-fallback-color-neutral-outline));border-radius:8px;box-sizing:border-box;font-size:12px;height:36px;line-height:36px;padding-bottom:0;padding-top:0}:host-context([chrome-refresh-2023]) .md-select:hover{background-color:var(--color-comboxbox-ink-drop-hovered,var(--cr-hover-on-subtle-background-color))}.md-select :-webkit-any(option,optgroup){background-color:var(--md-select-option-bg-color)}.md-select[disabled]{opacity:var(--cr-disabled-opacity);pointer-events:none}:host-context([chrome-refresh-2023]) .md-select[disabled]{background-color:var(--color-combobox-background-disabled,var(--cr-fallback-color-disabled-background));border-color:transparent;color:var(--color-textfield-foreground-disabled,var(--cr-fallback-color-disabled-foreground));opacity:1}.md-select:focus{box-shadow:0 0 0 2px var(--md-select-focus-shadow-color)}:host-context([chrome-refresh-2023]) .md-select:focus{box-shadow:none;outline:solid 2px var(--cr-focus-outline-color);outline-offset:-1px}@media (forced-colors:active){.md-select:focus{outline:var(--cr-focus-outline-hcm)}}.md-select:active{box-shadow:none}:host-context([dir=rtl]) .md-select{background-position-x:var(--md-select-side-padding)}
    </style>
  </template>
`.content);
styleMod$1.register('md-select');

function getTemplate$p() {
    return html `<!--_html_template_start_--><style include="cr-shared-style action-link md-select shared-style cr-icons">iron-icon{--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size)}.link-icon-button{margin-inline-start:6px}#section-heading{--md-select-width:160px;align-items:center;display:flex}#section-heading-heading{display:flex;flex:1}#section-heading .link-icon-button{margin-inline-start:6px}#hostAccess{margin-inline-start:12px;width:100%}#hosts{margin-bottom:0;padding-inline-start:calc(var(--cr-section-indent-padding) - var(--cr-section-padding))}#hosts li{align-items:center;border-top:var(--cr-separator-line);display:flex;height:var(--cr-section-min-height)}#hosts li:first-child{border-top:none}#add-host{font-weight:500;width:100%}#permissions-mode{color:var(--cr-primary-text-color);margin-top:12px}#new-permissions-mode{color:var(--cr-primary-text-color);margin-top:12px;padding-inline-start:calc(var(--cr-section-indent-padding) - var(--cr-section-padding))}#new-section-heading{align-items:flex-start;display:flex;flex-direction:column}#new-section-heading-title{display:flex}#new-section-heading-subtext{color:var(--cr-secondary-text-color);margin-top:3px}#host-access-row{display:flex;justify-content:space-between;margin-top:18px;width:100%}.site{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.site-favicon{margin-inline-end:calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin))}</style>
<template is="dom-if" if="[[!enableEnhancedSiteControls]]">
  <div id="permissions-mode">
    <div id="section-heading">
      <div id="section-heading-heading">
        <span id="section-heading-text">
          $i18n{hostPermissionsHeading}
        </span>
        <a class="link-icon-button" aria-label="$i18n{permissionsLearnMoreLabel}" href="$i18n{hostPermissionsLearnMoreLink}" target="_blank" on-click="onLearnMoreClick_">
          <iron-icon icon="cr:help-outline"></iron-icon>
        </a>
      </div>
      <div>
        <select id="hostAccess" class="md-select" on-change="onHostAccessChange_" value="[[permissions.hostAccess]]" aria-labelledby="section-heading-text">
          <option value="[[HostAccess_.ON_CLICK]]">
            $i18n{hostAccessOnClick}
          </option>
          <option value="[[HostAccess_.ON_SPECIFIC_SITES]]">
            $i18n{hostAccessOnSpecificSites}
          </option>
          <option value="[[HostAccess_.ON_ALL_SITES]]">
            $i18n{hostAccessOnAllSites}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<template is="dom-if" if="[[enableEnhancedSiteControls]]">
  <div id="new-permissions-mode">
    <div id="new-section-heading">
      <div id="new-section-heading-title">
        <span id="new-section-heading-text">
            $i18n{newHostPermissionsHeading}
        </span>
        <a class="link-icon-button" aria-label="$i18n{permissionsLearnMoreLabel}" href="$i18n{hostPermissionsLearnMoreLink}" target="_blank" on-click="onLearnMoreClick_">
          <iron-icon icon="cr:help-outline"></iron-icon>
        </a>
      </div>
      <span id="new-section-heading-subtext">
        $i18n{hostPermissionsSubHeading}
      </span>
      <div id="host-access-row">
        <select id="newHostAccess" class="md-select" on-change="onHostAccessChange_" value="[[permissions.hostAccess]]" aria-labelledby="new-section-heading-text">
          <option value="[[HostAccess_.ON_CLICK]]">
            $i18n{hostAccessAskOnEveryVisit}
          </option>
          <option value="[[HostAccess_.ON_SPECIFIC_SITES]]">
            $i18n{hostAccessAllowOnSpecificSites}
          </option>
          <option value="[[HostAccess_.ON_ALL_SITES]]">
            $i18n{hostAccessAllowOnAllSites}
          </option>
        </select>
        <cr-button id="add-site-button" hidden="[[!showSpecificSites_(permissions.*)]]" on-click="onAddHostClick_">
          $i18n{add}
        </cr-button>
      </div>
    </div>
  </div>
</template>

<template is="dom-if" if="[[showSpecificSites_(permissions.*)]]">
  <ul id="hosts">
    <template is="dom-repeat" items="[[getRuntimeHosts_(permissions.hosts)]]">
      <li>
        <div class="site-favicon" style$="background-image:[[getFaviconUrl_(item)]]" hidden$="[[!enableEnhancedSiteControls]]"></div>
        <div class="site">[[item]]</div>
        <cr-icon-button class="icon-edit edit-host" on-click="onEditHostClick_" hidden$="[[!enableEnhancedSiteControls]]"></cr-icon-button>
        <cr-icon-button class="icon-delete-gray remove-host" on-click="onDeleteHostClick_" hidden$="[[!enableEnhancedSiteControls]]"></cr-icon-button>
        <cr-icon-button class="icon-more-vert open-edit-host" on-click="onOpenEditHostClick_" title="$i18n{hostPermissionsEdit}" hidden$="[[enableEnhancedSiteControls]]"></cr-icon-button>
      </li>
    </template>
    <li hidden$="[[enableEnhancedSiteControls]]">
      <a id="add-host" is="action-link" on-click="onAddHostClick_">
        $i18n{itemSiteAccessAddHost}
      </a>
    </li>
  </ul>
</template>

<cr-action-menu id="hostActionMenu" role-description="$i18n{menu}">
  <button class="dropdown-item" id="action-menu-edit" on-click="onActionMenuEditClick_">
    $i18n{hostPermissionsEdit}
  </button>
  <button class="dropdown-item" id="action-menu-remove" on-click="onActionMenuRemoveClick_">
    $i18n{remove}
  </button>
</cr-action-menu>
<template is="dom-if" if="[[showHostDialog_]]" restamp>
  <extensions-runtime-hosts-dialog delegate="[[delegate]]" item-id="[[itemId]]" enable-enhanced-site-controls="[[enableEnhancedSiteControls]]" current-site="[[hostDialogModel_]]" update-host-access="[[dialogShouldUpdateHostAccess_(oldHostAccess_)]]" on-close="onHostDialogClose_" on-cancel="onHostDialogCancel_">
  </extensions-runtime-hosts-dialog>
</template>
<template is="dom-if" if="[[showRemoveSiteDialog_]]" restamp>
  <cr-dialog id="removeSitesDialog" on-cancel="onRemoveSitesWarningCancel_" show-on-attach>
    <div slot="title">$i18n{removeSitesDialogTitle}</div>
    <div slot="button-container">
      <cr-button class="cancel-button" on-click="onRemoveSitesWarningCancel_">
        $i18n{cancel}
      </cr-button>
      <cr-button class="action-button" on-click="onRemoveSitesWarningConfirm_">
        $i18n{remove}
      </cr-button>
    </div>
  </cr-dialog>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsRuntimeHostPermissionsElement extends PolymerElement {
    static get is() {
        return 'extensions-runtime-host-permissions';
    }
    static get template() {
        return getTemplate$p();
    }
    static get properties() {
        return {
            /**
             * The underlying permissions data.
             */
            permissions: Object,
            itemId: String,
            delegate: Object,
            enableEnhancedSiteControls: Boolean,
            /**
             * Whether the dialog to add a new host permission is shown.
             */
            showHostDialog_: Boolean,
            /**
             * Whether the dialog warning the user that the list of sites added will
             * be removed is shown.
             */
            showRemoveSiteDialog_: {
                type: Boolean,
                value: false,
            },
            /**
             * The current site of the entry that the host dialog is editing, if the
             * dialog is open for editing.
             */
            hostDialogModel_: {
                type: String,
                value: null,
            },
            /**
             * The element to return focus to once the host dialog closes.
             */
            hostDialogAnchorElement_: {
                type: Object,
                value: null,
            },
            /**
             * If the action menu is open, the site of the entry it is open for.
             * Otherwise null.
             */
            actionMenuModel_: {
                type: String,
                value: null,
            },
            /**
             * The element that triggered the action menu, so that the page will
             * return focus once the action menu (or dialog) closes.
             */
            actionMenuAnchorElement_: {
                type: Object,
                value: null,
            },
            /**
             * The old host access setting; used when we don't immediately commit the
             * change to host access so that we can reset it if the user cancels.
             */
            oldHostAccess_: {
                type: String,
                value: null,
            },
            /**
             * Indicator to track if an onHostAccessChange_ event is coming from the
             * setting being automatically reverted to the previous value, after a
             * change to a new value was canceled.
             */
            revertingHostAccess_: {
                type: Boolean,
                value: false,
            },
            /**
             * Proxying the enum to be used easily by the html template.
             */
            HostAccess_: {
                type: Object,
                value: chrome.developerPrivate.HostAccess,
            },
        };
    }
    getSelectMenu() {
        const selectMenuId = this.enableEnhancedSiteControls ? '#newHostAccess' : '#hostAccess';
        return this.shadowRoot.querySelector(selectMenuId);
    }
    getRemoveSiteDialog() {
        return this.shadowRoot.querySelector('#removeSitesDialog');
    }
    onHostAccessChange_() {
        const selectMenu = this.getSelectMenu();
        const access = selectMenu.value;
        // Log a user action when the host access selection is changed by the user,
        // but not when reverting from a canceled change to another setting.
        if (!this.revertingHostAccess_) {
            switch (access) {
                case chrome.developerPrivate.HostAccess.ON_CLICK:
                    chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.OnClickSelected');
                    break;
                case chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES:
                    chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.OnSpecificSitesSelected');
                    break;
                case chrome.developerPrivate.HostAccess.ON_ALL_SITES:
                    chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.OnAllSitesSelected');
                    break;
            }
        }
        const kOnSpecificSites = chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES;
        if (access === kOnSpecificSites &&
            this.permissions.hostAccess !== kOnSpecificSites) {
            // If the user is transitioning to the "on specific sites" option, show
            // the "add host" dialog. This serves two purposes:
            // - The user is prompted to add a host immediately, since otherwise
            //   "on specific sites" is meaningless, and
            // - The way the C++ code differentiates between "on click" and "on
            //   specific sites" is by checking if there are any specific sites.
            //   This ensures there will be at least one, so that the host access
            //   is properly calculated.
            this.oldHostAccess_ = this.permissions.hostAccess;
            this.doShowHostDialog_(selectMenu, null);
        }
        else if (this.enableEnhancedSiteControls && access !== kOnSpecificSites &&
            this.permissions.hostAccess === kOnSpecificSites) {
            // If the user is transitioning from the "on specific sites" option to
            // another one, show a dialog asking the user to confirm the transition
            // because in C++, only the "on specific sites" option will store sites
            // the user has added and transitioning away from it will clear these
            // sites.
            this.showRemoveSiteDialog_ = true;
        }
        else {
            this.delegate.setItemHostAccess(this.itemId, access);
        }
    }
    showSpecificSites_() {
        return this.permissions.hostAccess ===
            chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES;
    }
    /**
     * @return The granted host permissions as a sorted set of strings.
     */
    getRuntimeHosts_() {
        if (!this.permissions.hosts) {
            return [];
        }
        // Only show granted hosts in the list.
        // TODO(devlin): For extensions that request a finite set of hosts,
        // display them in a toggle list. https://crbug.com/891803.
        return this.permissions.hosts.filter(control => control.granted)
            .map(control => control.host)
            .sort();
    }
    onAddHostClick_(e) {
        chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.AddHostActivated');
        this.doShowHostDialog_(e.target, null);
    }
    /**
     * @param anchorElement The element to return focus to once the dialog closes.
     * @param currentSite The site entry currently being edited, or null if this
     *     is to add a new entry.
     */
    doShowHostDialog_(anchorElement, currentSite) {
        this.hostDialogAnchorElement_ = anchorElement;
        this.hostDialogModel_ = currentSite;
        this.showHostDialog_ = true;
    }
    onHostDialogClose_() {
        this.hostDialogModel_ = null;
        this.showHostDialog_ = false;
        assert(this.hostDialogAnchorElement_);
        focusWithoutInk(this.hostDialogAnchorElement_);
        this.hostDialogAnchorElement_ = null;
        this.oldHostAccess_ = null;
    }
    onHostDialogCancel_() {
        // The user canceled the dialog. Set hostAccess back to the old value,
        // if the dialog was shown when just transitioning to a new state.
        chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.AddHostDialogCanceled');
        if (this.oldHostAccess_) {
            assert(this.permissions.hostAccess === this.oldHostAccess_);
            this.revertingHostAccess_ = true;
            this.getSelectMenu().value = this.oldHostAccess_;
            this.revertingHostAccess_ = false;
            this.oldHostAccess_ = null;
        }
    }
    dialogShouldUpdateHostAccess_() {
        return !!this.oldHostAccess_;
    }
    onOpenEditHostClick_(e) {
        chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.ActionMenuOpened');
        this.actionMenuModel_ = e.model.item;
        this.actionMenuAnchorElement_ = e.target;
        this.$.hostActionMenu.showAt(e.target);
    }
    onActionMenuEditClick_() {
        chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.ActionMenuEditActivated');
        // Cache the site before closing the action menu, since it's cleared.
        const site = this.actionMenuModel_;
        // Cache and reset actionMenuAnchorElement_ so focus is not returned
        // to the action menu's trigger (since the dialog will be shown next).
        // Instead, curry the element to the dialog, so once it closes, focus
        // will be returned.
        assert(this.actionMenuAnchorElement_, 'Menu Anchor');
        const anchorElement = this.actionMenuAnchorElement_;
        this.actionMenuAnchorElement_ = null;
        this.closeActionMenu_();
        this.doShowHostDialog_(anchorElement, site);
    }
    onActionMenuRemoveClick_() {
        chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.ActionMenuRemoveActivated');
        assert(this.actionMenuModel_, 'Action Menu Model');
        this.delegate.removeRuntimeHostPermission(this.itemId, this.actionMenuModel_);
        this.closeActionMenu_();
    }
    closeActionMenu_() {
        const menu = this.$.hostActionMenu;
        assert(menu.open);
        menu.close();
    }
    onLearnMoreClick_() {
        chrome.metricsPrivate.recordUserAction('Extensions.Settings.Hosts.LearnMoreActivated');
    }
    onEditHostClick_(e) {
        this.doShowHostDialog_(e.target, e.model.item);
    }
    onDeleteHostClick_(e) {
        this.delegate.removeRuntimeHostPermission(this.itemId, e.model.item);
    }
    getFaviconUrl_(url) {
        return getFaviconUrl(url);
    }
    onRemoveSitesWarningConfirm_() {
        this.delegate.setItemHostAccess(this.itemId, this.getSelectMenu().value);
        this.getRemoveSiteDialog().close();
        this.showRemoveSiteDialog_ = false;
    }
    onRemoveSitesWarningCancel_() {
        assert(this.permissions.hostAccess ===
            chrome.developerPrivate.HostAccess.ON_SPECIFIC_SITES);
        this.revertingHostAccess_ = true;
        this.getSelectMenu().value = this.permissions.hostAccess;
        this.revertingHostAccess_ = false;
        this.getRemoveSiteDialog().close();
        this.showRemoveSiteDialog_ = false;
    }
}
customElements.define(ExtensionsRuntimeHostPermissionsElement.is, ExtensionsRuntimeHostPermissionsElement);

function getTemplate$o() {
    return html `<!--_html_template_start_--><style include="iron-flex cr-shared-style cr-icons action-link
    shared-style">:host{--iron-icon-fill-color:var(--cr-secondary-text-color);display:block;height:100%}#enable-section{margin-bottom:8px}#enable-section cr-tooltip-icon{margin-inline-end:20px}#enable-section span{color:var(--cr-secondary-text-color);font-weight:500}#enable-section .enabled-text{color:var(--google-blue-500)}@media (prefers-color-scheme:dark){#enable-section .enabled-text{color:var(--google-blue-300)}}#icon{height:24px;margin-inline-end:12px;margin-inline-start:16px;width:24px}#name{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.section{box-sizing:border-box;padding:var(--cr-section-vertical-padding) var(--cr-section-padding)}.safety-check-warning-container{align-items:center;background-color:var(--google-grey-50);display:flex;padding:15px}.safety-check-icon{align-items:center;align-self:flex-start;display:flex;height:var(--cr-icon-size);width:var(--cr-icon-size);fill:var(--google-grey-700)}.safety-check-warning-container iron-icon{height:var(--cr-icon-size);padding:6px;width:var(--cr-icon-size)}@media (prefers-color-scheme:dark){.safety-check-warning-container{background-color:#35363a}.safety-check-icon{fill:var(--review-panel-icon-color)}}.keep-button{margin-inline-end:10px;margin-inline-start:40px}.cr-row.control-line{justify-content:space-between}.section-content{color:var(--cr-secondary-text-color)}.actionable{cursor:pointer}.inspectable-view{display:inline;height:20px;overflow-wrap:anywhere;width:auto;word-break:normal}@media (prefers-color-scheme:light){.warning .action-button{background:#fff;color:var(--google-blue-500)}#reload-button{color:var(--google-blue-500)}}.warning span{color:var(--error-color);flex:1}.warning-icon{--iron-icon-fill-color:var(--error-color);flex-shrink:0;height:18px;margin-inline-end:8px;width:18px}.link-icon-button{--iron-icon-height:var(--cr-icon-size);--iron-icon-width:var(--cr-icon-size);margin-inline-start:6px}#allowlist-warning{flex:1}#allowlist-warning .warning-icon{--iron-icon-fill-color:var(--warning-color)}ul{margin:0;padding-inline-start:20px}#options-section .control-line:first-child{border-top:var(--cr-separator-line)}extensions-toggle-row{box-sizing:border-box;padding:var(--cr-section-vertical-padding) var(--cr-section-padding)}#show-access-requests-toggle{margin-inline-start:var(--cr-section-indent-width);min-height:var(--cr-section-min-height);padding:0}#access-toggle-and-link{color:var(--cr-primary-text-color);display:flex}#load-path{word-break:break-all}#load-path>a[is=action-link]{display:inline}#size{align-items:center;display:flex}paper-spinner-lite{height:var(--cr-icon-size);width:var(--cr-icon-size)}</style>
<div class="page-container" id="container">
  <div class="page-content">
    <div class="page-header">
      <cr-icon-button class="icon-arrow-back no-overlap" id="closeButton" aria-label$="[[getBackButtonAriaLabel_(data.name)]]" aria-roledescription$="[[
              getBackButtonAriaRoleDescription_(data.name)]]" on-click="onCloseButtonClick_">
      </cr-icon-button>
      <img id="icon" src="[[data.iconUrl]]" alt="">
      <span id="name" class="cr-title-text" role="heading" aria-level="1">
        [[data.name]]
      </span>
    </div>
    <div class="safety-check-warning-container" id="safetyCheckWarningContainer" hidden$="[[!showSafetyCheck_]]">
      <iron-icon aria-hidden="true" icon="extensions-icons:my_extensions" class="safety-check-icon">
      </iron-icon>
      <div class="safety-check-wrapper">
        <span class="section-title" aria-level="2">
          $i18n{safetyCheckExtensionsDetailPagePrimaryLabel}
        </span>
        <div class="section-content">
          [[data.safetyCheckText.detailString]]
        </div>
      </div>
      <cr-button class="keep-button" on-click="onKeepClick_">
        $i18n{safetyCheckExtensionsKeep}
      </cr-button>
      <cr-button class="action-button" on-click="onRemoveClick_">
        $i18n{remove}
      </cr-button>
    </div>
    <div class="cr-row first control-line" id="enable-section">
      <span class$="[[computeEnabledStyle_(data.state)]]">
        [[computeEnabledText_(data.state, '$i18nPolymer{itemOn}',
            '$i18nPolymer{itemOff}')]]
      </span>
      <div class="layout horizontal">
        <cr-tooltip-icon hidden$="[[!data.controlledInfo]]" tooltip-text="[[data.controlledInfo.text]]" icon-class="cr20:domain" icon-aria-label="[[data.controlledInfo.text]]">
        </cr-tooltip-icon>
        <template is="dom-if" if="[[showReloadButton_(data.state)]]">
          <cr-button id="terminated-reload-button" class="action-button" on-click="onReloadClick_">
            $i18n{itemReload}
          </cr-button>
        </template>
        <cr-tooltip-icon id="parentDisabledPermissionsToolTip" hidden$="[[!data.disableReasons.parentDisabledPermissions]]" tooltip-text="$i18n{parentDisabledPermissions}" icon-class="cr20:kite" icon-aria-label="$i18n{parentDisabledPermissions}">
        </cr-tooltip-icon>
        <cr-toggle id="enableToggle" aria-label$="[[getEnableToggleAriaLabel_(data.*)]]" aria-describedby="name enable-toggle-tooltip" checked="[[isEnabled_(data.state)]]" on-change="onEnableToggleChange_" disabled$="[[!isEnableToggleEnabled_(data.*)]]" hidden$="[[!showEnableToggle_(data.*)]]">
        </cr-toggle>
        <paper-tooltip id="enable-toggle-tooltip" for="enableToggle" position="left" aria-hidden="true" animation-delay="0" fit-to-visible-bounds>
          [[getEnableToggleTooltipText_(data.*)]]
        </paper-tooltip>
      </div>
    </div>
    <div id="warnings" hidden$="[[!hasSevereWarnings_(data.*)]]">
      <div id="runtime-warnings" hidden$="[[!data.runtimeWarnings.length]]" class="cr-row continuation warning control-line">
        <iron-icon class="warning-icon" icon="cr:error"></iron-icon>
        <span>
          <template is="dom-repeat" items="[[data.runtimeWarnings]]">
            [[item]]
          </template>
        </span>
        <template is="dom-if" if="[[!showReloadButton_(data.state)]]">
          <cr-button id="warnings-reload-button" class="action-button" on-click="onReloadClick_">
            $i18n{itemReload}
          </cr-button>
        </template>
      </div>
      <div class="cr-row continuation warning" id="suspicious-warning" hidden$="[[!data.disableReasons.suspiciousInstall]]">
        <iron-icon class="warning-icon" icon="cr:warning"></iron-icon>
        <span>
          $i18n{itemSuspiciousInstall}
          <a target="_blank" href="$i18n{suspiciousInstallHelpUrl}" aria-label="$i18n{itemSuspiciousInstallLearnMore}">
            $i18n{learnMore}
          </a>
        </span>
      </div>
      <div class="cr-row continuation warning control-line" id="corrupted-warning" hidden$="[[!showRepairButton_(data.disableReasons.corruptInstall)]]">
        <iron-icon class="warning-icon" icon="cr:warning"></iron-icon>
        <span>$i18n{itemCorruptInstall}</span>
        <cr-button id="repair-button" class="action-button" on-click="onRepairClick_">
          $i18n{itemRepair}
        </cr-button>
      </div>
      <div class="cr-row continuation warning" id="blacklisted-warning" hidden$="[[!showBlocklistText_]]">
        <iron-icon class="warning-icon" icon="cr:warning"></iron-icon>
        <span>[[data.blacklistText]]</span>
      </div>
      <div class="cr-row continuation warning" id="update-required-warning" hidden$="[[!data.disableReasons.updateRequired]]">
        <iron-icon class="warning-icon" icon="cr:warning"></iron-icon>
        <span>$i18n{updateRequiredByPolicy}</span>
      </div>
      <div class="cr-row continuation warning" id="published-in-store-required-warning" hidden$="[[!data.disableReasons.publishedInStoreRequired]]">
        <iron-icon class="warning-icon" icon="cr:warning"></iron-icon>
        <span>$i18n{publishedInStoreRequiredByPolicy}</span>
      </div>
    </div>
    <div id="allowlist-warning" class="cr-row continuation" hidden$="[[!showAllowlistWarning_(data.*)]]">
      <iron-icon class="warning-icon" icon="extensions-icons:safebrowsing_warning">
      </iron-icon>
      <span class="cr-secondary-text">
        $i18n{itemAllowlistWarning}
        <a href="$i18n{enhancedSafeBrowsingWarningHelpUrl}" target="_blank" aria-label="$i18n{itemAllowlistWarningLearnMoreLabel}">
          $i18n{learnMore}
        </a>
      </span>
    </div>
    <div class="section">
      <div class="section-title" role="heading" aria-level="2">
        $i18n{itemDescriptionLabel}
      </div>
      <div class="section-content" id="description">
        [[getDescription_(data.description, '$i18nPolymer{noDescription}')]]
      </div>
    </div>
    <div class="section hr">
      <div class="section-title" role="heading" aria-level="2">
        $i18n{itemVersion}
      </div>
      <div class="section-content">[[data.version]]</div>
    </div>
    <div class="section hr">
      <div class="section-title" role="heading" aria-level="2">
        $i18n{itemSize}
      </div>
      <div class="section-content" id="size">
        <span>[[size_]]</span>
        <paper-spinner-lite active="[[!size_]]" hidden="[[size_]]">
        </paper-spinner-lite>
      </div>
    </div>
    <div class="section hr" id="id-section" hidden$="[[!inDevMode]]">
      <div class="section-title" role="heading" aria-level="2">
        $i18n{itemIdHeading}
      </div>
      <div class="section-content">[[data.id]]</div>
    </div>
    <template is="dom-if" if="[[inDevMode]]">
      <div class="section hr" id="inspectable-views">
        <div class="section-title" role="heading" aria-level="2">
          $i18n{itemInspectViews}
        </div>
        <div class="section-content">
          <ul id="inspect-views">
            <li hidden="[[data.views.length]]">
              $i18n{noActiveViews}
            </li>
            <template is="dom-repeat" items="[[sortedViews_]]">
              <li>
                <a is="action-link" class="inspectable-view" on-click="onInspectClick_">
                  [[computeInspectLabel_(item)]]
                </a>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </template>
    <div class="section hr">
      <div class="section-title" role="heading" aria-level="2">
        $i18n{itemPermissions}
      </div>
      <div class="section-content">
        <span id="no-permissions" hidden$="[[hasPermissions_(data.*)]]">
          [[getNoPermissionsString_(data.*, enableEnhancedSiteControls)]]
        </span>
        <ul id="permissions-list" hidden$="[[!data.permissions.simplePermissions.length]]">
          <template is="dom-repeat" items="[[data.permissions.simplePermissions]]">
            <li>
              [[item.message]]
              <ul hidden="[[!item.submessages.length]]">
                <template is="dom-repeat" items="[[item.submessages]]">
                  <li>[[item]]</li>
                </template>
              </ul>
            </li>
          </template>
          <li hidden$="[[showSiteAccessSection_(data.*,
              enableEnhancedSiteControls)]]">
            $i18n{itemSiteAccessEmpty}
          </li>
        </ul>
      </div>
    </div>
    <template is="dom-if" if="[[showSiteAccessSection_(data.*,
        enableEnhancedSiteControls)]]">
      <div class="section hr">
        <div class="section-title" role="heading" aria-level="2" hidden$="[[enableEnhancedSiteControls]]">
          $i18n{itemSiteAccess}
        </div>
        <div class="section-content">
          <span id="no-site-access" hidden$="[[showSiteAccessContent_(data.*)]]">
            $i18n{itemSiteAccessEmpty}
          </span>
          <template is="dom-if" if="[[showFreeformRuntimeHostPermissions_(data.*)]]">
            <extensions-runtime-host-permissions permissions="[[data.permissions.runtimeHostPermissions]]" enable-enhanced-site-controls="[[enableEnhancedSiteControls]]" delegate="[[delegate]]" item-id="[[data.id]]">
            </extensions-runtime-host-permissions>
          </template>
          <template is="dom-if" if="[[showHostPermissionsToggleList_(data.*)]]">
            <extensions-host-permissions-toggle-list permissions="[[data.permissions.runtimeHostPermissions]]" enable-enhanced-site-controls="[[enableEnhancedSiteControls]]" delegate="[[delegate]]" item-id="[[data.id]]">
            </extensions-host-permissions-toggle-list>
          </template>
          <template is="dom-if" if="[[showEnableAccessRequestsToggle_(
                data.*, enableEnhancedSiteControls)]]">
            <extensions-toggle-row id="show-access-requests-toggle" checked="[[data.showAccessRequestsInToolbar]]" class="hr" on-change="onShowAccessRequestsChange_">
              <div id="access-toggle-and-link">
                <span>$i18n{itemShowAccessRequestsInToolbar}</span>
                <a class="link-icon-button" aria-label="$i18n{itemShowAccessRequestsLearnMore}" href="$i18n{showAccessRequestsInToolbarLearnMoreLink}" target="_blank">
                  <iron-icon icon="cr:help-outline"></iron-icon>
                </a>
              </div>
            </extensions-toggle-row>
          </template>
        </div>
      </div>
    </template>
    <template is="dom-if" if="[[hasDependentExtensions_(data.dependentExtensions.splices)]]">
      <div class="section hr">
        <div class="section-title" role="heading" aria-level="2">
          $i18n{itemDependencies}
        </div>
        <div class="section-content">
          <ul id="dependent-extensions-list">
            <template is="dom-repeat" items="[[data.dependentExtensions]]">
              <li>[[computeDependentEntry_(item)]]</li>
            </template>
          </ul>
        </div>
      </div>
    </template>
    <cr-link-row class="hr" id="siteSettings" label="$i18n{siteSettings}" on-click="onSiteSettingsClick_" external></cr-link-row>
    <template is="dom-if" if="[[shouldShowOptionsSection_(data.*)]]">
      <div id="options-section">
        <template is="dom-if" if="[[canPinToToolbar_(data.pinnedToToolbar)]]">
          <extensions-toggle-row id="pin-to-toolbar" checked="[[data.pinnedToToolbar]]" class="hr" on-change="onPinnedToToolbarChange_">
            <span>$i18n{itemPinToToolbar}</span>
          </extensions-toggle-row>
        </template>
        <template is="dom-if" if="[[shouldShowIncognitoOption_(
              data.incognitoAccess.isEnabled, incognitoAvailable)]]">
          <extensions-toggle-row id="allow-incognito" checked="[[data.incognitoAccess.isActive]]" class="hr" on-change="onAllowIncognitoChange_">
            <div>
              <div>$i18n{itemAllowIncognito}</div>
              <div class="section-content">$i18n{incognitoInfoWarning}</div>
            </div>
          </extensions-toggle-row>
        </template>
        <template is="dom-if" if="[[data.fileAccess.isEnabled]]">
          <extensions-toggle-row id="allow-on-file-urls" checked="[[data.fileAccess.isActive]]" class="hr" on-change="onAllowOnFileUrlsChange_">
            <span>$i18n{itemAllowOnFileUrls}</span>
          </extensions-toggle-row>
        </template>
        <template is="dom-if" if="[[data.errorCollection.isEnabled]]">
          <extensions-toggle-row id="collect-errors" checked="[[data.errorCollection.isActive]]" class="hr" on-change="onCollectErrorsChange_">
            <span>$i18n{itemCollectErrors}</span>
          </extensions-toggle-row>
        </template>
      </div>
    </template>
    <cr-link-row class="hr" id="extensionsOptions" disabled="[[!isEnabled_(data.state)]]" hidden="[[!shouldShowOptionsLink_(data.*)]]" label="$i18n{itemOptions}" on-click="onExtensionOptionsClick_" external></cr-link-row>
    <cr-link-row class="hr" id="extensionsActivityLogLink" hidden$="[[!showActivityLog]]" label="$i18n{viewActivityLog}" on-click="onActivityLogClick_" role-description="$i18n{subpageArrowRoleDescription}">
    </cr-link-row>
    <cr-link-row class="hr" hidden="[[!data.manifestHomePageUrl.length]]" id="extensionWebsite" label="$i18n{extensionWebsite}" on-click="onExtensionWebSiteClick_" external></cr-link-row>
    <cr-link-row class="hr" hidden="[[!data.webStoreUrl.length]]" id="viewInStore" label="$i18n{viewInStore}" on-click="onViewInStoreClick_" external></cr-link-row>
    <div class="section hr">
      <div class="section-title" role="heading" aria-level="2">
        $i18n{itemSource}
      </div>
      <div id="source" class="section-content">
        [[computeSourceString_(data.*)]]
      </div>
      <div id="load-path" class="section-content" hidden$="[[!data.prettifiedPath]]">
        <span>$i18n{itemExtensionPath}</span>
        <a is="action-link" on-click="onLoadPathClick_">
          [[data.prettifiedPath]]
        </a>
      </div>
    </div>
    <cr-link-row class="hr" id="remove-extension" hidden="[[data.mustRemainInstalled]]" label="$i18n{itemRemoveExtension}" on-click="onRemoveClick_">
    </cr-link-row>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ItemMixin = dedupingMixin((superClass) => {
    class ItemMixin extends superClass {
        /**
         * @return The app or extension label depending on |type|.
         */
        appOrExtension(type, appLabel, extensionLabel) {
            const ExtensionType = chrome.developerPrivate.ExtensionType;
            switch (type) {
                case ExtensionType.HOSTED_APP:
                case ExtensionType.LEGACY_PACKAGED_APP:
                case ExtensionType.PLATFORM_APP:
                    return appLabel;
                case ExtensionType.EXTENSION:
                case ExtensionType.SHARED_MODULE:
                    return extensionLabel;
            }
            assertNotReached('Item type is not App or Extension.');
        }
        /**
         * @return The a11y association descriptor, e.g. "Related to <ext>".
         */
        a11yAssociation(name) {
            // Don't use I18nMixin.i18n because of additional checks it
            // performs. Polymer ensures that this string is not stamped into
            // arbitrary HTML. `name` can contain any data including html tags,
            // e.g. "My <video> download extension!"
            return loadTimeData.getStringF('extensionA11yAssociation', name);
        }
    }
    return ItemMixin;
});

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsDetailViewElementBase = I18nMixin(ItemMixin(PolymerElement));
class ExtensionsDetailViewElement extends ExtensionsDetailViewElementBase {
    static get is() {
        return 'extensions-detail-view';
    }
    static get template() {
        return getTemplate$o();
    }
    static get properties() {
        return {
            /**
             * The underlying ExtensionInfo for the details being displayed.
             */
            data: Object,
            size_: String,
            delegate: Object,
            /** Whether the user has enabled the UI's developer mode. */
            inDevMode: Boolean,
            /**
             * Whether enhanced site controls have been enabled (through a feature
             * flag). For this page, there are some changes to the site permissions
             * section.
             */
            enableEnhancedSiteControls: Boolean,
            /** Whether "allow in incognito" option should be shown. */
            incognitoAvailable: Boolean,
            /** Whether "View Activity Log" link should be shown. */
            showActivityLog: Boolean,
            /** Whether the user navigated to this page from the activity log page. */
            fromActivityLog: Boolean,
            /** Inspectable views sorted to put background/service workers first */
            sortedViews_: {
                type: Array,
                computed: 'computeSortedViews_(data.views)',
            },
            /** Whether the extensions safety check warning is shown. */
            showSafetyCheck_: {
                type: Boolean,
                computed: 'computeShowSafetyCheck_(data.safetyCheckText)',
                observer: 'onShowSafetyCheckChanged_',
            },
            /** Whether the extensions blocklist text is shown. */
            showBlocklistText_: {
                type: Boolean,
                computed: 'computeShowBlocklistText_(data.blacklistText)',
            },
        };
    }
    static get observers() {
        return ['onItemIdChanged_(data.id, delegate)'];
    }
    ready() {
        super.ready();
        this.addEventListener('view-enter-start', this.onViewEnterStart_);
    }
    /**
     * Focuses the extensions options button. This should be used after the
     * dialog closes.
     */
    focusOptionsButton() {
        this.$.extensionsOptions.focus();
    }
    /**
     * Focuses the back button when page is loaded.
     */
    onViewEnterStart_() {
        const elementToFocus = this.fromActivityLog ?
            this.$.extensionsActivityLogLink :
            this.$.closeButton;
        afterNextRender(this, () => focusWithoutInk(elementToFocus));
    }
    onItemIdChanged_() {
        // Clear the size, since this view is reused, such that no obsolete size
        // is displayed.:
        this.size_ = '';
        this.delegate.getExtensionSize(this.data.id).then(size => {
            this.size_ = size;
        });
    }
    onActivityLogClick_() {
        navigation.navigateTo({ page: Page.ACTIVITY_LOG, extensionId: this.data.id });
    }
    getDescription_(description, fallback) {
        return description || fallback;
    }
    getBackButtonAriaLabel_() {
        return loadTimeData.getStringF('itemDetailsBackButtonAriaLabel', this.data.name);
    }
    getBackButtonAriaRoleDescription_() {
        return loadTimeData.getStringF('itemDetailsBackButtonRoleDescription', this.data.name);
    }
    getEnableToggleAriaLabel_() {
        return getEnableToggleAriaLabel(this.isEnabled_(), this.data.type, this.i18n('appEnabled'), this.i18n('extensionEnabled'), this.i18n('itemOff'));
    }
    getEnableToggleTooltipText_() {
        return getEnableToggleTooltipText(this.data);
    }
    onCloseButtonClick_() {
        navigation.navigateTo({ page: Page.LIST });
    }
    isEnabled_() {
        return isEnabled$1(this.data.state);
    }
    isEnableToggleEnabled_() {
        return userCanChangeEnablement(this.data);
    }
    hasDependentExtensions_() {
        return this.data.dependentExtensions.length > 0;
    }
    hasSevereWarnings_() {
        return this.data.disableReasons.corruptInstall ||
            this.data.disableReasons.suspiciousInstall ||
            this.data.disableReasons.updateRequired || !!this.data.blacklistText ||
            this.data.disableReasons.publishedInStoreRequired ||
            this.data.runtimeWarnings.length > 0;
    }
    computeEnabledStyle_() {
        return this.isEnabled_() ? 'enabled-text' : '';
    }
    computeEnabledText_(state, onText, offText) {
        // TODO(devlin): Get the full spectrum of these strings from bettes.
        return isEnabled$1(state) ? onText : offText;
    }
    computeSortedViews_() {
        return sortViews(this.data.views);
    }
    computeInspectLabel_(view) {
        return computeInspectableViewLabel(view);
    }
    shouldShowOptionsLink_() {
        return !!this.data.optionsPage;
    }
    shouldShowOptionsSection_() {
        return this.canPinToToolbar_() || this.data.incognitoAccess.isEnabled ||
            this.data.fileAccess.isEnabled || this.data.errorCollection.isEnabled;
    }
    canPinToToolbar_() {
        return this.data.pinnedToToolbar !== undefined;
    }
    shouldShowIncognitoOption_() {
        return this.data.incognitoAccess.isEnabled && this.incognitoAvailable;
    }
    onEnableToggleChange_() {
        this.delegate.setItemEnabled(this.data.id, this.$.enableToggle.checked);
        this.$.enableToggle.checked = this.isEnabled_();
    }
    onInspectClick_(e) {
        this.delegate.inspectItemView(this.data.id, e.model.item);
    }
    onExtensionOptionsClick_() {
        this.delegate.showItemOptionsPage(this.data);
    }
    onReloadClick_() {
        this.delegate.reloadItem(this.data.id).catch(loadError => {
            this.dispatchEvent(new CustomEvent('load-error', { bubbles: true, composed: true, detail: loadError }));
        });
    }
    onRemoveClick_() {
        if (this.showSafetyCheck_) {
            chrome.metricsPrivate.recordUserAction('SafetyCheck.DetailRemoveClicked');
        }
        this.delegate.deleteItem(this.data.id);
    }
    onKeepClick_() {
        if (this.showSafetyCheck_) {
            chrome.metricsPrivate.recordUserAction('SafetyCheck.DetailKeepClicked');
        }
        this.delegate.setItemSafetyCheckWarningAcknowledged(this.data.id);
    }
    onRepairClick_() {
        this.delegate.repairItem(this.data.id);
    }
    onLoadPathClick_() {
        this.delegate.showInFolder(this.data.id);
    }
    onPinnedToToolbarChange_() {
        this.delegate.setItemPinnedToToolbar(this.data.id, this.shadowRoot
            .querySelector('#pin-to-toolbar').checked);
    }
    onAllowIncognitoChange_() {
        this.delegate.setItemAllowedIncognito(this.data.id, this.shadowRoot
            .querySelector('#allow-incognito').checked);
    }
    onAllowOnFileUrlsChange_() {
        this.delegate.setItemAllowedOnFileUrls(this.data.id, this.shadowRoot
            .querySelector('#allow-on-file-urls').checked);
    }
    onCollectErrorsChange_() {
        this.delegate.setItemCollectsErrors(this.data.id, this.shadowRoot
            .querySelector('#collect-errors').checked);
    }
    onExtensionWebSiteClick_() {
        this.delegate.openUrl(this.data.manifestHomePageUrl);
    }
    onSiteSettingsClick_() {
        this.delegate.openUrl(`chrome://settings/content/siteDetails?site=chrome-extension://${this.data.id}`);
    }
    onViewInStoreClick_() {
        this.delegate.openUrl(this.data.webStoreUrl);
    }
    computeDependentEntry_(item) {
        return loadTimeData.getStringF('itemDependentEntry', item.name, item.id);
    }
    computeSourceString_() {
        return this.data.locationText ||
            getItemSourceString(getItemSource(this.data));
    }
    hasPermissions_() {
        return this.data.permissions.simplePermissions.length > 0 ||
            this.hasRuntimeHostPermissions_();
    }
    getNoPermissionsString_() {
        const showPermissionsAndSiteAccessStrings = this.enableEnhancedSiteControls && !this.showSiteAccessContent_();
        return loadTimeData.getString(showPermissionsAndSiteAccessStrings ?
            'itemPermissionsAndSiteAccessEmpty' :
            'itemPermissionsEmpty');
    }
    hasRuntimeHostPermissions_() {
        return !!this.data.permissions.runtimeHostPermissions;
    }
    // Returns whether the site access section should be shown. This includes the
    // "no site access" message shown in the section if
    // |enableEnhancedSiteControls| is not enabled.
    showSiteAccessSection_() {
        return !this.enableEnhancedSiteControls || this.showSiteAccessContent_();
    }
    showSiteAccessContent_() {
        return this.showFreeformRuntimeHostPermissions_() ||
            this.showHostPermissionsToggleList_();
    }
    showFreeformRuntimeHostPermissions_() {
        return this.hasRuntimeHostPermissions_() &&
            this.data.permissions.runtimeHostPermissions.hasAllHosts;
    }
    showHostPermissionsToggleList_() {
        return this.hasRuntimeHostPermissions_() &&
            !this.data.permissions.runtimeHostPermissions.hasAllHosts;
    }
    showEnableAccessRequestsToggle_() {
        return this.showSiteAccessContent_() && this.enableEnhancedSiteControls;
    }
    onShowAccessRequestsChange_() {
        const showAccessRequestsToggle = this.shadowRoot.querySelector('#show-access-requests-toggle');
        assert(showAccessRequestsToggle);
        this.delegate.setShowAccessRequestsInToolbar(this.data.id, showAccessRequestsToggle.checked);
    }
    showReloadButton_() {
        return getEnableControl(this.data) === EnableControl.RELOAD;
    }
    computeShowSafetyCheck_() {
        if (!loadTimeData.getBoolean('safetyCheckShowReviewPanel')) {
            return false;
        }
        const ExtensionType = chrome.developerPrivate.ExtensionType;
        // Check to make sure this is an extension and not a Chrome app.
        if (!(this.data.type === ExtensionType.EXTENSION ||
            this.data.type === ExtensionType.SHARED_MODULE)) {
            return false;
        }
        return !!(this.data.safetyCheckText && this.data.safetyCheckText.detailString &&
            this.data.acknowledgeSafetyCheckWarning !== true);
    }
    onShowSafetyCheckChanged_() {
        if (this.showSafetyCheck_) {
            chrome.metricsPrivate.recordUserAction('SafetyCheck.DetailWarningShown');
        }
    }
    computeShowBlocklistText_() {
        return !this.showSafetyCheck_ && !!this.data.blacklistText;
    }
    showRepairButton_() {
        return getEnableControl(this.data) === EnableControl.REPAIR;
    }
    showEnableToggle_() {
        const enableControl = getEnableControl(this.data);
        // We still show the toggle even if we also show the repair button in the
        // detail view, because the repair button appears just beneath it.
        return enableControl === EnableControl.ENABLE_TOGGLE ||
            enableControl === EnableControl.REPAIR;
    }
    showAllowlistWarning_() {
        // Only show the allowlist warning if there is no blocklist warning. It
        // would be redundant since all blocklisted items are necessarily not
        // included in the Safe Browsing allowlist.
        return this.data.showSafeBrowsingAllowlistWarning &&
            !this.data.blacklistText;
    }
}
customElements.define(ExtensionsDetailViewElement.is, ExtensionsDetailViewElement);

// Copyright 2011 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Creates a DragWrapper which listens for drag target events on |target| and
 * delegates event handling to |delegate|.
 */
class DragWrapper {
    /**
     * The number of un-paired dragenter events that have fired on |this|.
     * This is incremented by |onDragEnter_| and decremented by
     * |onDragLeave_|. This is necessary because dragging over child widgets
     * will fire additional enter and leave events on |this|. A non-zero value
     * does not necessarily indicate that |isCurrentDragTarget()| is true.
     */
    dragEnters_ = 0;
    target_;
    delegate_;
    constructor(target, delegate) {
        this.target_ = target;
        this.delegate_ = delegate;
        target.addEventListener('dragenter', e => this.onDragEnter_(e));
        target.addEventListener('dragover', e => this.onDragOver_(e));
        target.addEventListener('drop', e => this.onDrop_(e));
        target.addEventListener('dragleave', e => this.onDragLeave_(e));
    }
    /**
     * Whether the tile page is currently being dragged over with data it can
     * accept.
     */
    get isCurrentDragTarget() {
        return this.target_.classList.contains('drag-target');
    }
    /**
     * Delegate for dragenter events fired on |target_|.
     */
    onDragEnter_(e) {
        if (++this.dragEnters_ === 1) {
            if (this.delegate_.shouldAcceptDrag(e)) {
                this.target_.classList.add('drag-target');
                this.delegate_.doDragEnter(e);
            }
        }
        else {
            // Sometimes we'll get an enter event over a child element without an
            // over event following it. In this case we have to still call the
            // drag over delegate so that we make the necessary updates (one visible
            // symptom of not doing this is that the cursor's drag state will
            // flicker during drags).
            this.onDragOver_(e);
        }
    }
    /**
     * Thunk for dragover events fired on |target_|.
     */
    onDragOver_(e) {
        if (!this.target_.classList.contains('drag-target')) {
            return;
        }
        this.delegate_.doDragOver(e);
    }
    /**
     * Thunk for drop events fired on |target_|.
     */
    onDrop_(e) {
        this.dragEnters_ = 0;
        if (!this.target_.classList.contains('drag-target')) {
            return;
        }
        this.target_.classList.remove('drag-target');
        this.delegate_.doDrop(e);
    }
    /**
     * Thunk for dragleave events fired on |target_|.
     */
    onDragLeave_(e) {
        if (--this.dragEnters_ > 0) {
            return;
        }
        this.target_.classList.remove('drag-target');
        this.delegate_.doDragLeave(e);
    }
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class Service {
    constructor() {
        this.isDeleting_ = false;
        this.eventsToIgnoreOnce_ = new Set();
    }
    getProfileConfiguration() {
        return chrome.developerPrivate.getProfileConfiguration();
    }
    getItemStateChangedTarget() {
        return chrome.developerPrivate.onItemStateChanged;
    }
    shouldIgnoreUpdate(extensionId, eventType) {
        return this.eventsToIgnoreOnce_.delete(`${extensionId}_${eventType}`);
    }
    ignoreNextEvent(extensionId, eventType) {
        this.eventsToIgnoreOnce_.add(`${extensionId}_${eventType}`);
    }
    getProfileStateChangedTarget() {
        return chrome.developerPrivate.onProfileStateChanged;
    }
    getExtensionsInfo() {
        return chrome.developerPrivate.getExtensionsInfo({ includeDisabled: true, includeTerminated: true });
    }
    getExtensionSize(id) {
        return chrome.developerPrivate.getExtensionSize(id);
    }
    addRuntimeHostPermission(id, host) {
        return chrome.developerPrivate.addHostPermission(id, host);
    }
    removeRuntimeHostPermission(id, host) {
        return chrome.developerPrivate.removeHostPermission(id, host);
    }
    recordUserAction(metricName) {
        chrome.metricsPrivate.recordUserAction(metricName);
    }
    /**
     * Opens a file browser dialog for the user to select a file (or directory).
     * @return The promise to be resolved with the selected path.
     */
    chooseFilePath_(selectType, fileType) {
        return chrome.developerPrivate.choosePath(selectType, fileType)
            .catch(error => {
            if (error.message !== 'File selection was canceled.') {
                throw error;
            }
            return '';
        });
    }
    updateExtensionCommandKeybinding(extensionId, commandName, keybinding) {
        chrome.developerPrivate.updateExtensionCommand({
            extensionId: extensionId,
            commandName: commandName,
            keybinding: keybinding,
        });
    }
    updateExtensionCommandScope(extensionId, commandName, scope) {
        // The COMMAND_REMOVED event needs to be ignored since it is sent before
        // the command is added back with the updated scope but can be handled
        // after the COMMAND_ADDED event.
        this.ignoreNextEvent(extensionId, chrome.developerPrivate.EventType.COMMAND_REMOVED);
        chrome.developerPrivate.updateExtensionCommand({
            extensionId: extensionId,
            commandName: commandName,
            scope: scope,
        });
    }
    setShortcutHandlingSuspended(isCapturing) {
        chrome.developerPrivate.setShortcutHandlingSuspended(isCapturing);
    }
    /**
     * @return A signal that loading finished, rejected if any error occurred.
     */
    loadUnpackedHelper_(extraOptions) {
        const options = Object.assign({
            failQuietly: true,
            populateError: true,
        }, extraOptions);
        return chrome.developerPrivate.loadUnpacked(options)
            .then(loadError => {
            if (loadError) {
                throw loadError;
            }
            // The load was successful if there's no loadError.
            return true;
        })
            .catch(error => {
            if (error.message !== 'File selection was canceled.') {
                throw error;
            }
            return false;
        });
    }
    deleteItem(id) {
        if (this.isDeleting_) {
            return;
        }
        chrome.metricsPrivate.recordUserAction('Extensions.RemoveExtensionClick');
        this.isDeleting_ = true;
        chrome.management.uninstall(id, { showConfirmDialog: true })
            .catch(_ => {
            // The error was almost certainly the user canceling the dialog.
            // Do nothing. We only check it so we don't get noisy logs.
        })
            .finally(() => {
            this.isDeleting_ = false;
        });
    }
    /**
     * Allows the consumer to call the API asynchronously.
     */
    uninstallItem(id) {
        chrome.metricsPrivate.recordUserAction('Extensions.RemoveExtensionClick');
        return chrome.management.uninstall(id, { showConfirmDialog: true });
    }
    deleteItems(ids) {
        this.isDeleting_ = true;
        return chrome.developerPrivate.removeMultipleExtensions(ids).finally(() => {
            this.isDeleting_ = false;
        });
    }
    setItemSafetyCheckWarningAcknowledged(id) {
        return chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            acknowledgeSafetyCheckWarning: true,
        });
    }
    setItemEnabled(id, isEnabled) {
        chrome.metricsPrivate.recordUserAction(isEnabled ? 'Extensions.ExtensionEnabled' :
            'Extensions.ExtensionDisabled');
        chrome.management.setEnabled(id, isEnabled);
    }
    setItemAllowedIncognito(id, isAllowedIncognito) {
        chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            incognitoAccess: isAllowedIncognito,
        });
    }
    setItemAllowedOnFileUrls(id, isAllowedOnFileUrls) {
        chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            fileAccess: isAllowedOnFileUrls,
        });
    }
    setItemHostAccess(id, hostAccess) {
        chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            hostAccess: hostAccess,
        });
    }
    setItemCollectsErrors(id, collectsErrors) {
        chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            errorCollection: collectsErrors,
        });
    }
    setItemPinnedToToolbar(id, pinnedToToolbar) {
        chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            pinnedToToolbar,
        });
    }
    inspectItemView(id, view) {
        chrome.developerPrivate.openDevTools({
            extensionId: id,
            renderProcessId: view.renderProcessId,
            renderViewId: view.renderViewId,
            incognito: view.incognito,
            isServiceWorker: view.type === 'EXTENSION_SERVICE_WORKER_BACKGROUND',
        });
    }
    openUrl(url) {
        window.open(url);
    }
    reloadItem(id) {
        return chrome.developerPrivate
            .reload(id, { failQuietly: true, populateErrorForUnpacked: true })
            .then(loadError => {
            if (loadError) {
                throw loadError;
            }
        });
    }
    repairItem(id) {
        chrome.developerPrivate.repairExtension(id);
    }
    showItemOptionsPage(extension) {
        assert(extension && extension.optionsPage);
        if (extension.optionsPage.openInTab) {
            chrome.developerPrivate.showOptions(extension.id);
        }
        else {
            navigation.navigateTo({
                page: Page.DETAILS,
                subpage: Dialog.OPTIONS,
                extensionId: extension.id,
            });
        }
    }
    setProfileInDevMode(inDevMode) {
        chrome.developerPrivate.updateProfileConfiguration({ inDeveloperMode: inDevMode });
    }
    loadUnpacked() {
        return this.loadUnpackedHelper_();
    }
    retryLoadUnpacked(retryGuid) {
        // Attempt to load an unpacked extension, optionally as another attempt at
        // a previously-specified load.
        return this.loadUnpackedHelper_({ retryGuid });
    }
    choosePackRootDirectory() {
        return this.chooseFilePath_(chrome.developerPrivate.SelectType.FOLDER, chrome.developerPrivate.FileType.LOAD);
    }
    choosePrivateKeyPath() {
        return this.chooseFilePath_(chrome.developerPrivate.SelectType.FILE, chrome.developerPrivate.FileType.PEM);
    }
    packExtension(rootPath, keyPath, flag) {
        return chrome.developerPrivate.packDirectory(rootPath, keyPath, flag);
    }
    updateAllExtensions(extensions) {
        /**
         * Attempt to reload local extensions. If an extension fails to load, the
         * user is prompted to try updating the broken extension using loadUnpacked
         * and we skip reloading the remaining local extensions.
         */
        return chrome.developerPrivate.autoUpdate().then(() => {
            chrome.metricsPrivate.recordUserAction('Options_UpdateExtensions');
            return new Promise((resolve, reject) => {
                const loadLocalExtensions = async () => {
                    for (const extension of extensions) {
                        if (extension.location === 'UNPACKED') {
                            try {
                                await this.reloadItem(extension.id);
                            }
                            catch (loadError) {
                                reject(loadError);
                                break;
                            }
                        }
                    }
                    resolve();
                };
                loadLocalExtensions();
            });
        });
    }
    deleteErrors(extensionId, errorIds, type) {
        chrome.developerPrivate.deleteExtensionErrors({
            extensionId: extensionId,
            errorIds: errorIds,
            type: type,
        });
    }
    requestFileSource(args) {
        return chrome.developerPrivate.requestFileSource(args);
    }
    showInFolder(id) {
        chrome.developerPrivate.showPath(id);
    }
    getExtensionActivityLog(extensionId) {
        return chrome.activityLogPrivate.getExtensionActivities({
            activityType: chrome.activityLogPrivate.ExtensionActivityFilter.ANY,
            extensionId: extensionId,
        });
    }
    getFilteredExtensionActivityLog(extensionId, searchTerm) {
        const anyType = chrome.activityLogPrivate.ExtensionActivityFilter.ANY;
        // Construct one filter for each API call we will make: one for substring
        // search by api call, one for substring search by page URL, and one for
        // substring search by argument URL. % acts as a wildcard.
        const activityLogFilters = [
            {
                activityType: anyType,
                extensionId: extensionId,
                apiCall: `%${searchTerm}%`,
            },
            {
                activityType: anyType,
                extensionId: extensionId,
                pageUrl: `%${searchTerm}%`,
            },
            {
                activityType: anyType,
                extensionId: extensionId,
                argUrl: `%${searchTerm}%`,
            },
        ];
        const promises = activityLogFilters.map(filter => chrome.activityLogPrivate.getExtensionActivities(filter));
        return Promise.all(promises).then(results => {
            // We may have results that are present in one or more searches, so
            // we merge them here. We also assume that every distinct activity
            // id corresponds to exactly one activity.
            const activitiesById = new Map();
            for (const result of results) {
                for (const activity of result.activities) {
                    activitiesById.set(activity.activityId, activity);
                }
            }
            return { activities: Array.from(activitiesById.values()) };
        });
    }
    deleteActivitiesById(activityIds) {
        return chrome.activityLogPrivate.deleteActivities(activityIds);
    }
    deleteActivitiesFromExtension(extensionId) {
        return chrome.activityLogPrivate.deleteActivitiesByExtension(extensionId);
    }
    getOnExtensionActivity() {
        return chrome.activityLogPrivate.onExtensionActivity;
    }
    downloadActivities(rawActivityData, fileName) {
        const blob = new Blob([rawActivityData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        a.click();
    }
    /**
     * Attempts to load an unpacked extension via a drag-n-drop gesture.
     * @return {!Promise}
     */
    loadUnpackedFromDrag() {
        return this.loadUnpackedHelper_({ useDraggedPath: true });
    }
    installDroppedFile() {
        chrome.developerPrivate.installDroppedFile();
    }
    notifyDragInstallInProgress() {
        chrome.developerPrivate.notifyDragInstallInProgress();
    }
    getUserSiteSettings() {
        return chrome.developerPrivate.getUserSiteSettings();
    }
    addUserSpecifiedSites(siteSet, hosts) {
        return chrome.developerPrivate.addUserSpecifiedSites({ siteSet, hosts });
    }
    removeUserSpecifiedSites(siteSet, hosts) {
        return chrome.developerPrivate.removeUserSpecifiedSites({ siteSet, hosts });
    }
    getUserAndExtensionSitesByEtld() {
        return chrome.developerPrivate.getUserAndExtensionSitesByEtld();
    }
    getMatchingExtensionsForSite(site) {
        return chrome.developerPrivate.getMatchingExtensionsForSite(site);
    }
    getUserSiteSettingsChangedTarget() {
        return chrome.developerPrivate.onUserSiteSettingsChanged;
    }
    setShowAccessRequestsInToolbar(id, showRequests) {
        chrome.developerPrivate.updateExtensionConfiguration({
            extensionId: id,
            showAccessRequestsInToolbar: showRequests,
        });
    }
    updateSiteAccess(site, updates) {
        return chrome.developerPrivate.updateSiteAccess(site, updates);
    }
    dismissSafetyHubExtensionsMenuNotification() {
        chrome.developerPrivate.dismissSafetyHubExtensionsMenuNotification();
    }
    static getInstance() {
        return instance$3 || (instance$3 = new Service());
    }
    static setInstance(obj) {
        instance$3 = obj;
    }
}
let instance$3 = null;

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class DragAndDropHandler {
    constructor(dragEnabled, target) {
        this.dragEnabled = dragEnabled;
        this.eventTarget_ = target;
    }
    shouldAcceptDrag(e) {
        // External Extension installation can be disabled globally, e.g. while a
        // different overlay is already showing.
        if (!this.dragEnabled) {
            return false;
        }
        // We can't access filenames during the 'dragenter' event, so we have to
        // wait until 'drop' to decide whether to do something with the file or
        // not.
        // See: http://www.w3.org/TR/2011/WD-html5-20110113/dnd.html#concept-dnd-p
        return !!e.dataTransfer.types &&
            e.dataTransfer.types.indexOf('Files') > -1;
    }
    doDragEnter() {
        Service.getInstance().notifyDragInstallInProgress();
        this.eventTarget_.dispatchEvent(new CustomEvent('extension-drag-started'));
    }
    doDragLeave() {
        this.fireDragEnded_();
    }
    doDragOver(e) {
        e.preventDefault();
    }
    doDrop(e) {
        this.fireDragEnded_();
        if (e.dataTransfer.files.length !== 1) {
            return;
        }
        let handled = false;
        // Files lack a check if they're a directory, but we can find out through
        // its item entry.
        const item = e.dataTransfer.items[0];
        if (item.kind === 'file' && item.webkitGetAsEntry().isDirectory) {
            handled = true;
            this.handleDirectoryDrop_();
        }
        else if (/\.(crx|user\.js|zip)$/i.test(e.dataTransfer.files[0].name)) {
            // Only process files that look like extensions. Other files should
            // navigate the browser normally.
            handled = true;
            this.handleFileDrop_();
        }
        if (handled) {
            e.preventDefault();
        }
    }
    /**
     * Handles a dropped file.
     */
    handleFileDrop_() {
        Service.getInstance().installDroppedFile();
    }
    /**
     * Handles a dropped directory.
     */
    handleDirectoryDrop_() {
        Service.getInstance().loadUnpackedFromDrag().catch(loadError => {
            this.eventTarget_.dispatchEvent(new CustomEvent('drag-and-drop-load-error', { detail: loadError }));
        });
    }
    fireDragEnded_() {
        this.eventTarget_.dispatchEvent(new CustomEvent('extension-drag-ended'));
    }
}

function getTemplate$n() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style">:host{align-items:center;background-color:rgba(241,241,241,.9);color:var(--cr-secondary-text-color);display:flex;height:100%;justify-content:center;position:absolute;width:100%;z-index:10}@media (prefers-color-scheme:dark){:host{background-color:rgba(0,0,0,.6)}}#container{align-items:center;display:flex;flex-direction:column}iron-icon{height:64px;margin-bottom:16px;width:64px}#text{color:#6e6e6e;font-size:123.1%;font-weight:500}</style>
<div id="container">
  <iron-icon icon="cr:extension"></iron-icon>
  <div id="text">$i18n{dropToInstall}</div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsDropOverlayElement extends PolymerElement {
    static get is() {
        return 'extensions-drop-overlay';
    }
    static get template() {
        return getTemplate$n();
    }
    static get properties() {
        return {
            dragEnabled: {
                type: Boolean,
                observer: 'dragEnabledChanged_',
            },
        };
    }
    constructor() {
        super();
        this.hidden = true;
        const dragTarget = document.documentElement;
        this.dragWrapperHandler_ = new DragAndDropHandler(true, dragTarget);
        // TODO(devlin): All these dragTarget listeners leak (they aren't removed
        // when the element is). This only matters in tests at the moment, but would
        // be good to fix.
        dragTarget.addEventListener('extension-drag-started', () => {
            this.hidden = false;
        });
        dragTarget.addEventListener('extension-drag-ended', () => {
            this.hidden = true;
        });
        dragTarget.addEventListener('drag-and-drop-load-error', (e) => {
            this.dispatchEvent(new CustomEvent('load-error', { bubbles: true, composed: true, detail: e.detail }));
        });
        this.dragWrapper_ = new DragWrapper(dragTarget, this.dragWrapperHandler_);
    }
    dragEnabledChanged_(dragEnabled) {
        this.dragWrapperHandler_.dragEnabled = dragEnabled;
    }
}
customElements.define(ExtensionsDropOverlayElement.is, ExtensionsDropOverlayElement);

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

function getTemplate$m() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style">:host{--container-bg:white;--line-bg:var(--paper-grey-300);--main-color:var(--paper-grey-800);display:block}@media (prefers-color-scheme:dark){:host{--container-bg:rgba(0, 0, 0, .4);--line-bg:var(--google-grey-800);--main-color:var(--cr-primary-text-color)}}#scroll-container{background:var(--container-bg);height:100%;overflow:auto;position:relative}@media (prefers-color-scheme:light){#scroll-container{border:1px solid var(--paper-grey-500)}}#main{color:var(--main-color);display:flex;font-family:monospace;min-height:100%}#line-numbers{background:var(--line-bg);display:flex;flex-direction:column;padding:0 8px;text-align:end}@media (prefers-color-scheme:light){#line-numbers{border-inline-end:1px solid var(--paper-grey-500)}}#source{display:flex;flex-direction:column;margin-inline-start:4px}#line-numbers span,#source span{white-space:pre}#no-code{text-align:center}@media (prefers-color-scheme:light){#no-code{color:var(--paper-grey-800)}.more-code{color:var(--paper-grey-500)}}#highlight-description{height:0;overflow:hidden}@media (prefers-color-scheme:dark){mark{background-color:var(--google-yellow-300);color:var(--google-grey-900)}}</style>
<div id="scroll-container" hidden="[[!highlighted_]]" dir="ltr">
  <div id="main">
    
    <div id="line-numbers" aria-hidden="true">
      <div class="more-code before" hidden="[[!truncatedBefore_]]">
        ...
      </div>
      <span>[[lineNumbers_]]</span>
      <div class="more-code after" hidden="[[!truncatedAfter_]]">
        ...
      </div>
    </div>
    <div id="source">
      <div class="more-code before" hidden="[[!truncatedBefore_]]">
        [[getLinesNotShownLabel_(
            truncatedBefore_,
            '$i18nPolymer{errorLinesNotShownSingular}',
            '$i18nPolymer{errorLinesNotShownPlural}')]]
      </div>
      <span><span>[[before_]]</span><mark aria-label$="[[highlighted_]]" aria-describedby="highlight-description"><span aria-hidden="true">[[highlighted_]]</span></mark><span>[[after_]]</span></span>
      <div class="more-code after" hidden="[[!truncatedAfter_]]">
        [[getLinesNotShownLabel_(
            truncatedAfter_,
            '$i18nPolymer{errorLinesNotShownSingular}',
            '$i18nPolymer{errorLinesNotShownPlural}')]]
      </div>
    </div>
  </div>
</div>
<div id="no-code" hidden="[[!showNoCode_]]">[[couldNotDisplayCode]]</div>
<div id="highlight-description" aria-hidden="true">
  [[highlightDescription_]]
</div>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function visibleLineCount(totalCount, oppositeCount) {
    // We limit the number of lines shown for DOM performance.
    const MAX_VISIBLE_LINES = 1000;
    const max = Math.max(MAX_VISIBLE_LINES / 2, MAX_VISIBLE_LINES - oppositeCount);
    return Math.min(max, totalCount);
}
const ExtensionsCodeSectionElementBase = I18nMixin(PolymerElement);
class ExtensionsCodeSectionElement extends ExtensionsCodeSectionElementBase {
    static get is() {
        return 'extensions-code-section';
    }
    static get template() {
        return getTemplate$m();
    }
    static get properties() {
        return {
            code: {
                type: Object,
                value: null,
            },
            isActive: Boolean,
            /** Highlighted code. */
            highlighted_: String,
            /** Code before the highlighted section. */
            before_: String,
            /** Code after the highlighted section. */
            after_: String,
            showNoCode_: {
                type: Boolean,
                computed: 'computeShowNoCode_(isActive, highlighted_)',
            },
            /** Description for the highlighted section. */
            highlightDescription_: String,
            lineNumbers_: String,
            truncatedBefore_: Number,
            truncatedAfter_: Number,
            /**
             * The string to display if no |code| is set (e.g. because we couldn't
             * load the relevant source file).
             */
            couldNotDisplayCode: String,
        };
    }
    static get observers() {
        return ['onCodeChanged_(code.*)'];
    }
    onCodeChanged_() {
        if (!this.code ||
            (!this.code.beforeHighlight && !this.code.highlight &&
                !this.code.afterHighlight)) {
            this.highlighted_ = '';
            this.highlightDescription_ = '';
            this.before_ = '';
            this.after_ = '';
            this.lineNumbers_ = '';
            return;
        }
        const before = this.code.beforeHighlight;
        const highlight = this.code.highlight;
        const after = this.code.afterHighlight;
        const linesBefore = before ? before.split('\n') : [];
        const linesAfter = after ? after.split('\n') : [];
        const visibleLineCountBefore = visibleLineCount(linesBefore.length, linesAfter.length);
        const visibleLineCountAfter = visibleLineCount(linesAfter.length, linesBefore.length);
        const visibleBefore = linesBefore.slice(linesBefore.length - visibleLineCountBefore)
            .join('\n');
        let visibleAfter = linesAfter.slice(0, visibleLineCountAfter).join('\n');
        // If the last character is a \n, force it to be rendered.
        if (visibleAfter.charAt(visibleAfter.length - 1) === '\n') {
            visibleAfter += ' ';
        }
        this.highlighted_ = highlight;
        this.highlightDescription_ = this.getAccessibilityHighlightDescription_(linesBefore.length, highlight.split('\n').length);
        this.before_ = visibleBefore;
        this.after_ = visibleAfter;
        this.truncatedBefore_ = linesBefore.length - visibleLineCountBefore;
        this.truncatedAfter_ = linesAfter.length - visibleLineCountAfter;
        const visibleCode = visibleBefore + highlight + visibleAfter;
        this.setLineNumbers_(this.truncatedBefore_ + 1, this.truncatedBefore_ + visibleCode.split('\n').length);
        this.scrollToHighlight_(visibleLineCountBefore);
    }
    getLinesNotShownLabel_(lineCount, stringSingular, stringPluralTemplate) {
        return lineCount === 1 ?
            stringSingular :
            loadTimeData.substituteString(stringPluralTemplate, lineCount);
    }
    setLineNumbers_(start, end) {
        let lineNumbers = '';
        for (let i = start; i <= end; ++i) {
            lineNumbers += i + '\n';
        }
        this.lineNumbers_ = lineNumbers;
    }
    scrollToHighlight_(linesBeforeHighlight) {
        const CSS_LINE_HEIGHT = 20;
        // Count how many pixels is above the highlighted code.
        const highlightTop = linesBeforeHighlight * CSS_LINE_HEIGHT;
        // Find the position to show the highlight roughly in the middle.
        const targetTop = highlightTop - this.clientHeight * 0.5;
        this.$['scroll-container'].scrollTo({ top: targetTop });
    }
    getAccessibilityHighlightDescription_(lineStart, numLines) {
        if (numLines > 1) {
            return this.i18n('accessibilityErrorMultiLine', lineStart.toString(), (lineStart + numLines - 1).toString());
        }
        else {
            return this.i18n('accessibilityErrorLine', lineStart.toString());
        }
    }
    computeShowNoCode_() {
        return this.isActive && !this.highlighted_;
    }
}
customElements.define(ExtensionsCodeSectionElement.is, ExtensionsCodeSectionElement);

function getTemplate$l() {
    return html `<!--_html_template_start_--><style include="cr-icons cr-shared-style shared-style">:host{display:block;height:100%}iron-icon{--iron-icon-fill-color:var(--google-grey-700);flex-shrink:0;height:var(--cr-icon-size);width:var(--cr-icon-size)}iron-icon[icon='cr:warning']{--iron-icon-fill-color:var(--paper-orange-500)}iron-icon[icon='cr:error']{--iron-icon-fill-color:var(--error-color)}.section{padding:0 var(--cr-section-padding)}#heading{align-items:center;display:flex;height:40px;margin-bottom:30px;padding:8px 12px 0}#heading span{flex:1;margin:0 10px}#errorsList{min-height:100px}.error-item{padding-inline-start:0}.error-item cr-icon-button{margin:0}.error-item.selected{background-color:rgba(0,0,0,.08)}.error-item .start{align-items:center;align-self:stretch;display:flex;flex:1;padding:0 var(--cr-section-padding)}.error-message{flex-grow:1;margin-inline-start:10px;word-break:break-word}.devtools-controls{padding:0 var(--cr-section-padding)}.details-heading{align-items:center;display:flex;height:var(--cr-section-min-height)}.stack-trace-container{list-style:none;margin-top:0;padding:0}.stack-trace-container li{cursor:pointer;font-family:monospace;padding:4px}.stack-trace-container li.selected,.stack-trace-container li:hover{background:var(--google-blue-100);color:var(--google-grey-900)}extensions-code-section{height:200px;margin-bottom:20px}:host-context(.focus-outline-visible) .start:focus{outline:-webkit-focus-ring-color auto 5px}.start:focus{outline:0}.context-url{word-wrap:break-word}</style>
<div class="page-container" id="container">
  <div class="page-content">
    <div id="heading" class="cr-title-text">
      <cr-icon-button class="icon-arrow-back no-overlap" id="closeButton" aria-label="$i18n{back}" on-click="onCloseButtonClick_">
      </cr-icon-button>
      <span role="heading" aria-level="2">$i18n{errorsPageHeading}</span>
      <cr-button on-click="onClearAllClick_" hidden="[[!entries_.length]]">
        $i18n{clearAll}
      </cr-button>
    </div>
    <div class="section">
      <div id="errorsList">
        <template is="dom-repeat" items="[[entries_]]">
          <div class="item-container">
            <div class$="cr-row error-item
                [[computeErrorClass_(item, selectedEntry_)]]">
              <div actionable class="start" on-click="onErrorItemAction_" on-keydown="onErrorItemAction_" tabindex="0" role="button" aria-expanded$="[[isAriaExpanded_(
                      index, selectedEntry_)]]">
                <iron-icon icon$="cr:[[computeErrorIcon_(item)]]" title$="[[computeErrorTypeLabel_(item)]]">
                </iron-icon>
                <div id$="[[item.id]]" class="error-message">
                  [[item.message]]
                </div>
                <div class$="cr-icon [[iconName_(index, selectedEntry_)]]">
                </div>
              </div>
              <div class="separator"></div>
              <cr-icon-button class="icon-delete-gray" on-click="onDeleteErrorAction_" aria-describedby$="[[item.id]]" aria-label="$i18n{clearEntry}"></cr-icon-button>
            </div>
            <iron-collapse opened="[[isOpened_(index, selectedEntry_)]]">
              <div class="devtools-controls">
                <template is="dom-if" if="[[computeIsRuntimeError_(item)]]">
                  <div class="details-heading cr-title-text" role="heading" aria-level="3">
                    $i18n{errorContext}
                  </div>
                  <span class="context-url">
                    [[getContextUrl_(
                        item, '$i18nPolymer{errorContextUnknown}')]]
                  </span>
                  <div class="details-heading cr-title-text" role="heading" aria-level="3">
                    $i18n{stackTrace}
                  </div>
                  <ul class="stack-trace-container" on-keydown="onStackKeydown_">
                    <template is="dom-repeat" items="[[item.stackTrace]]">
                      <li on-click="onStackFrameClick_" tabindex$="[[getStackFrameTabIndex_(item,
                              selectedStackFrame_)]]" hidden="[[!shouldDisplayFrame_(item.url)]]" class$="[[getStackFrameClass_(item,
                              selectedStackFrame_)]]">
                        [[getStackTraceLabel_(item)]]
                      </li>
                    </template>
                  </ul>
                </template>
                <extensions-code-section code="[[code_]]" is-active="[[isOpened_(index, selectedEntry_)]]" could-not-display-code="$i18n{noErrorsToShow}">
                </extensions-code-section>
              </div>
            </iron-collapse>
          </div>
        </template>
      </div>
    </div>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Get the URL relative to the main extension url. If the url is
 * unassociated with the extension, this will be the full url.
 */
function getRelativeUrl(url, error) {
    const fullUrl = 'chrome-extension://' + error.extensionId + '/';
    return url.startsWith(fullUrl) ? url.substring(fullUrl.length) : url;
}
/**
 * Given 3 strings, this function returns the correct one for the type of
 * error that |item| is.
 */
function getErrorSeverityText(item, log, warn, error) {
    if (item.type === chrome.developerPrivate.ErrorType.RUNTIME) {
        switch (item.severity) {
            case chrome.developerPrivate.ErrorLevel.LOG:
                return log;
            case chrome.developerPrivate.ErrorLevel.WARN:
                return warn;
            case chrome.developerPrivate.ErrorLevel.ERROR:
                return error;
            default:
                assertNotReached();
        }
    }
    assert(item.type === chrome.developerPrivate.ErrorType.MANIFEST);
    return warn;
}
class ExtensionsErrorPageElement extends PolymerElement {
    static get is() {
        return 'extensions-error-page';
    }
    static get template() {
        return getTemplate$l();
    }
    static get properties() {
        return {
            data: Object,
            delegate: Object,
            // Whether or not dev mode is enabled.
            inDevMode: {
                type: Boolean,
                value: false,
                observer: 'onInDevModeChanged_',
            },
            entries_: Array,
            code_: Object,
            /**
             * Index into |entries_|.
             */
            selectedEntry_: {
                type: Number,
                observer: 'onSelectedErrorChanged_',
            },
            selectedStackFrame_: {
                type: Object,
                value() {
                    return null;
                },
            },
        };
    }
    static get observers() {
        return ['observeDataChanges_(data.*)'];
    }
    ready() {
        super.ready();
        this.addEventListener('view-enter-start', this.onViewEnterStart_);
        FocusOutlineManager.forDocument(document);
    }
    getSelectedError() {
        return this.entries_[this.selectedEntry_];
    }
    /**
     * Focuses the back button when page is loaded.
     */
    onViewEnterStart_() {
        afterNextRender(this, () => focusWithoutInk(this.$.closeButton));
        chrome.metricsPrivate.recordUserAction('Options_ViewExtensionErrors');
    }
    getContextUrl_(error, unknown) {
        return error.contextUrl ?
            getRelativeUrl(error.contextUrl, error) :
            unknown;
    }
    /**
     * Watches for changes to |data| in order to fetch the corresponding
     * file source.
     */
    observeDataChanges_() {
        this.entries_ = [...this.data.manifestErrors, ...this.data.runtimeErrors];
        this.selectedEntry_ = -1; // This also help reset code-section content.
        if (this.entries_.length) {
            this.selectedEntry_ = 0;
        }
    }
    onCloseButtonClick_() {
        navigation.navigateTo({ page: Page.LIST });
    }
    onClearAllClick_() {
        const ids = this.entries_.map(entry => entry.id);
        this.delegate.deleteErrors(this.data.id, ids);
    }
    computeErrorIcon_(error) {
        // Do not i18n these strings, they're CSS classes.
        return getErrorSeverityText(error, 'info', 'warning', 'error');
    }
    computeErrorTypeLabel_(error) {
        return getErrorSeverityText(error, loadTimeData.getString('logLevel'), loadTimeData.getString('warnLevel'), loadTimeData.getString('errorLevel'));
    }
    onDeleteErrorAction_(e) {
        this.delegate.deleteErrors(this.data.id, [e.model.item.id]);
        e.stopPropagation();
    }
    onInDevModeChanged_() {
        if (!this.inDevMode) {
            // Wait until next render cycle in case error page is loading.
            setTimeout(() => {
                this.onCloseButtonClick_();
            }, 0);
        }
    }
    /**
     * Fetches the source for the selected error and populates the code section.
     */
    onSelectedErrorChanged_() {
        this.code_ = null;
        if (this.selectedEntry_ < 0) {
            return;
        }
        const error = this.getSelectedError();
        const args = {
            extensionId: error.extensionId,
            message: error.message,
            pathSuffix: '',
        };
        switch (error.type) {
            case chrome.developerPrivate.ErrorType.MANIFEST:
                const manifestError = error;
                args.pathSuffix = manifestError.source;
                args.manifestKey = manifestError.manifestKey;
                args.manifestSpecific = manifestError.manifestSpecific;
                break;
            case chrome.developerPrivate.ErrorType.RUNTIME:
                const runtimeError = error;
                try {
                    // slice(1) because pathname starts with a /.
                    args.pathSuffix = new URL(runtimeError.source).pathname.slice(1);
                }
                catch (e) {
                    // Swallow the invalid URL error and return early. This prevents the
                    // uncaught error from causing a runtime error as seen in
                    // crbug.com/1257170.
                    return;
                }
                args.lineNumber =
                    runtimeError.stackTrace && runtimeError.stackTrace[0] ?
                        runtimeError.stackTrace[0].lineNumber :
                        0;
                this.selectedStackFrame_ =
                    runtimeError.stackTrace && runtimeError.stackTrace[0] ?
                        runtimeError.stackTrace[0] :
                        null;
                break;
        }
        this.delegate.requestFileSource(args).then(code => this.code_ = code);
    }
    computeIsRuntimeError_(item) {
        return item.type === chrome.developerPrivate.ErrorType.RUNTIME;
    }
    /**
     * The description is a human-readable summation of the frame, in the
     * form "<relative_url>:<line_number> (function)", e.g.
     * "myfile.js:25 (myFunction)".
     */
    getStackTraceLabel_(frame) {
        let description = getRelativeUrl(frame.url, this.getSelectedError()) + ':' +
            frame.lineNumber;
        if (frame.functionName) {
            const functionName = frame.functionName === '(anonymous function)' ?
                loadTimeData.getString('anonymousFunction') :
                frame.functionName;
            description += ' (' + functionName + ')';
        }
        return description;
    }
    getStackFrameClass_(frame) {
        return frame === this.selectedStackFrame_ ? 'selected' : '';
    }
    getStackFrameTabIndex_(frame) {
        return frame === this.selectedStackFrame_ ? 0 : -1;
    }
    /**
     * This function is used to determine whether or not we want to show a
     * stack frame. We don't want to show code from internal scripts.
     */
    shouldDisplayFrame_(url) {
        // All our internal scripts are in the 'extensions::' namespace.
        return !/^extensions::/.test(url);
    }
    updateSelected_(frame) {
        this.selectedStackFrame_ = frame;
        const selectedError = this.getSelectedError();
        this.delegate
            .requestFileSource({
            extensionId: selectedError.extensionId,
            message: selectedError.message,
            pathSuffix: getRelativeUrl(frame.url, selectedError),
            lineNumber: frame.lineNumber,
        })
            .then(code => this.code_ = code);
    }
    onStackFrameClick_(e) {
        const frame = e.model.item;
        this.updateSelected_(frame);
    }
    onStackKeydown_(e) {
        let direction = 0;
        if (e.key === 'ArrowDown') {
            direction = 1;
        }
        else if (e.key === 'ArrowUp') {
            direction = -1;
        }
        else {
            return;
        }
        e.preventDefault();
        const list = e.target.parentElement.querySelectorAll('li');
        for (let i = 0; i < list.length; ++i) {
            if (list[i].classList.contains('selected')) {
                const repeaterEvent = e;
                const frame = repeaterEvent.model.item.stackTrace[i + direction];
                if (frame) {
                    this.updateSelected_(frame);
                    list[i + direction].focus(); // Preserve focus.
                }
                return;
            }
        }
    }
    /**
     * Computes the class name for the error item depending on whether its
     * the currently selected error.
     */
    computeErrorClass_(index) {
        return index === this.selectedEntry_ ? 'selected' : '';
    }
    iconName_(index) {
        return index === this.selectedEntry_ ? 'icon-expand-less' :
            'icon-expand-more';
    }
    /**
     * Determine if the iron-collapse should be opened (expanded).
     */
    isOpened_(index) {
        return index === this.selectedEntry_;
    }
    /**
     * @return The aria-expanded value as a string.
     */
    isAriaExpanded_(index) {
        return this.isOpened_(index).toString();
    }
    onErrorItemAction_(e) {
        if (e.type === 'keydown' && !((e.code === 'Space' || e.code === 'Enter'))) {
            return;
        }
        // Call preventDefault() to avoid the browser scrolling when the space key
        // is pressed.
        e.preventDefault();
        const repeaterEvent = e;
        this.selectedEntry_ = this.selectedEntry_ === repeaterEvent.model.index ?
            -1 :
            repeaterEvent.model.index;
    }
}
customElements.define(ExtensionsErrorPageElement.is, ExtensionsErrorPageElement);

function getTemplate$k() {
    return html `<!--_html_template_start_--><style include="cr-shared-style">div[slot=body] ul{background-color:var(--paper-red-50);margin:0;padding-bottom:10px;padding-inline-end:10px;padding-top:10px}@media (prefers-color-scheme:dark){div[slot=body] ul{background-color:rgba(0,0,0,.3);color:var(--error-color)}}</style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">$i18n{installWarnings}</div>
  <div slot="body">
    <ul>
      <template is="dom-repeat" items="[[installWarnings]]">
        <li>[[item]]</li>
      </template>
    </ul>
  </div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onOkClick_">
      $i18n{ok}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsInstallWarningsDialogElement extends PolymerElement {
    static get is() {
        return 'extensions-install-warnings-dialog';
    }
    static get template() {
        return getTemplate$k();
    }
    static get properties() {
        return {
            installWarnings: Array,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    onOkClick_() {
        this.$.dialog.close();
    }
}
customElements.define(ExtensionsInstallWarningsDialogElement.is, ExtensionsInstallWarningsDialogElement);

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
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

function getTemplate$j() {
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
        return getTemplate$j();
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

const template = html `<iron-iconset-svg name="extensions-icons" size="24">
<svg>
<defs>
  
  <g id="unpacked">
    <path class="cls-1" fill="none" d="M0,0H24V24H0V0Z"></path>
    <circle cx="9" cy="12" r="1"></circle>
    <path d="M20,5H4A2,2,0,0,0,2,7V17a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V7A2,2,0,0,0,20,5ZM9,17a5,5,0,1,1,5-5A5,5,0,0,1,9,17Zm11,1a1,1,0,1,1,1-1A1,1,0,0,1,20,18ZM20,8a1,1,0,1,1,1-1A1,1,0,0,1,20,8Z"></path>
  </g>

  
  
  <g id="safebrowsing_warning">
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M12 4.24l6 3v4.1c0 3.9-2.55 7.5-6 8.59-3.45-1.09-6-4.7-6-8.59v-4.1l6-3M12 2L4 6v5.33c0 4.93 3.41 9.55 8 10.67 4.59-1.12 8-5.73 8-10.67V6l-8-4zm-1 13h2v2h-2v-2zm2-7h-2v5h2V8z"></path>
  </g>

  
  <g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
  <g id="business"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path></g>

  
  <g id="my_extensions" viewBox="0 -960 960 960"><path d="M216-135.869q-33.287 0-56.709-23.422-23.422-23.422-23.422-56.709v-172.304q37.609-2 63.218-28.424 25.608-26.424 25.608-63.272t-25.608-63.272q-25.609-26.424-63.218-28.424V-744q0-33.287 23.422-56.709 23.422-23.422 56.709-23.422h161.065q2.631-40.956 31.96-69.315 29.329-28.359 70.75-28.359t70.975 28.199q29.554 28.199 32.185 69.475H744q33.287 0 56.709 23.422 23.422 23.422 23.422 56.709v161.065q40.956 2.631 69.315 31.96 28.359 29.329 28.359 70.75t-28.199 70.975q-28.199 29.554-69.475 32.185V-216q0 33.287-23.422 56.709-23.422 23.422-56.709 23.422H216Zm2.87-83.001h522.26v-522.26H218.87v108.652q42.13 22.63 65.597 63.772 23.468 41.141 23.468 88.706 0 49.01-23.468 90.168Q261-348.674 218.87-327.283v108.413ZM480-480Z"></path></g>
  <g id="site_permissions" viewBox="0 -960 960 960"><path d="M454.087-136.587V-384H533.5v84h288v79.413h-288v84h-79.413Zm-315.587-84V-300h247.413v79.413H138.5Zm144-135.826v-84h-144v-79.174h144v-84h79.413v247.174H282.5Zm147.587-84v-79.174H821.5v79.174H430.087Zm144-135.587v-247.413H653.5v84h168V-660h-168v84h-79.413ZM138.5-660v-79.413h391.413V-660H138.5Z"></path></g>
  <g id="keyboard_shortcuts" viewBox="0 -960 960 960"><path d="M168-229q-34.483 0-58.741-24.259-24.26-24.258-24.26-58.741v-336q0-34.483 24.26-58.741Q133.517-731 168-731h624q34.483 0 58.741 24.259Q875-682.483 875-648v336q0 34.483-24.259 58.741Q826.483-229 792-229H168Zm0-83h624v-336H168v336Zm168-24h288v-72H336v72Zm-96-120h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm-408-96h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72Zm102 0h72v-72h-72v72ZM168-312v-336 336Z"></path></g>
  <g id="web_store" enable-background="new 0 0 192 192" height="24px" viewBox="0 0 192 192" width="24px"><path fill="none" d="M0 0h192v192H0z"></path><path fill="#F1F3F4" d="M172 28H20v121.63c0 5.72 4.64 10.37 10.37 10.37h131.27c5.72 0 10.37-4.64 10.37-10.37V28z"></path><path fill="#F1F3F4" d="M172 28H20v121.63c0 5.72 4.64 10.37 10.37 10.37h131.27c5.72 0 10.37-4.64 10.37-10.37V28z"></path><path fill="#E8EAED" d="M20 28h152v66.35H20z"></path><path fill="#FFF" d="M113.27 56.34H78.73c-3.82 0-6.91-3.09-6.91-6.91 0-3.82 3.09-6.91 6.91-6.91h34.54c3.82 0 6.91 3.09 6.91 6.91 0 3.81-3.09 6.91-6.91 6.91z"></path><defs><path id="a" d="M172 28H20v121.63c0 5.72 4.64 10.37 10.37 10.37h131.27c5.72 0 10.37-4.64 10.37-10.37V28z"></path></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"></use></clipPath><g clip-path="url(#b)"><linearGradient id="c" x1="39.161" x2="152.841" y1="125.013" y2="125.013" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#d93025"></stop><stop offset="1" style="stop-color:#ea4335"></stop></linearGradient><path fill="url(#c)" d="m39.16 116.8 9.05 27.61 19.38 21.63L96 116.81l56.84-.01C141.49 97.18 120.29 83.99 96 83.99c-24.29 0-45.49 13.19-56.84 32.81z"></path><linearGradient id="d" x1="-3.897" x2="109.806" y1="36.608" y2="36.608" gradientTransform="rotate(-120 100 93.002)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#1e8e3e"></stop><stop offset="1" style="stop-color:#34a853"></stop></linearGradient><path fill="url(#d)" d="m95.99 215.28 19.38-21.64 9.04-27.6H67.58L39.16 116.8c-11.31 19.64-12.14 44.61.01 65.65 12.14 21.04 34.17 32.81 56.82 32.83z"></path><linearGradient id="e" x1="96.791" x2="210.494" y1="8.387" y2="8.387" gradientTransform="rotate(120 88.856 76)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#fbbc04"></stop><stop offset="1" style="stop-color:#fcc934"></stop></linearGradient><path fill="url(#e)" d="M152.84 116.81H96l28.42 49.23L96 215.28c22.66-.02 44.69-11.79 56.83-32.83 12.15-21.04 11.32-46 .01-65.64z"></path><ellipse cx="96" cy="149.63" fill="#F1F3F4" rx="32.81" ry="32.82"></ellipse><ellipse cx="96" cy="149.63" fill="#1A73E8" rx="26.66" ry="26.67"></ellipse></g><path fill="#BDC1C6" d="M20 94.35h152v.86H20zM20 93.48h152v.86H20z" opacity=".1"></path></g>
</defs>
</svg>
</iron-iconset-svg>
`;
document.head.appendChild(template.content);

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsHatsBrowserProxyImpl {
    panelShown(panelShown) {
        chrome.send('extensionsSafetyHubPanelShown', [panelShown]);
    }
    extensionKeptAction() {
        chrome.send('extensionsSafetyHubExtensionKept');
    }
    extensionRemovedAction() {
        chrome.send('extensionsSafetyHubExtensionRemoved');
    }
    nonTriggerExtensionRemovedAction() {
        chrome.send('extensionsSafetyHubNonTriggerExtensionRemoved');
    }
    removeAllAction(numberOfExtensionsRemoved) {
        chrome.send('extensionsSafetyHubRemoveAll', [numberOfExtensionsRemoved]);
    }
    static getInstance() {
        return instance$2 || (instance$2 = new ExtensionsHatsBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance$2 = obj;
    }
}
let instance$2 = null;

function getTemplate$i() {
    return html `<!--_html_template_start_--><style include="iron-flex cr-shared-style cr-hidden-style cr-icons action-link
    shared-style">.bounded-text,.clippable-flex-text,.multiline-clippable-text{overflow:hidden;text-overflow:ellipsis}.bounded-text,.clippable-flex-text{white-space:nowrap}.clippable-flex-text{flex-shrink:1}cr-tooltip-icon{margin-inline-end:8px}#icon-wrapper{align-self:flex-start;display:flex;padding:6px;position:relative}#icon{height:36px;width:36px}#card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);display:flex;flex-direction:column;height:var(--extensions-card-height);transition:height .3s cubic-bezier(.25,.1,.25,1)}#card.dev-mode{height:208px}#main{display:flex;flex:1;min-height:0;padding:16px 20px}#content{display:flex;flex:1;flex-direction:column;margin-inline-start:24px;overflow:hidden}#name-and-version{color:var(--cr-primary-text-color);margin-bottom:4px}#name{margin-inline-end:8px}#description{flex:1}#warnings{color:var(--error-color);flex:1;margin-bottom:8px}#allowlist-warning{flex:1;margin-bottom:8px}.message-icon{height:18px;margin-inline-end:4px;vertical-align:top;width:18px}#warnings .message-icon{--iron-icon-fill-color:var(--error-color)}#allowlist-warning .message-icon{--iron-icon-fill-color:var(--warning-color)}#extension-id{flex-shrink:0}#inspect-views{display:flex;white-space:nowrap}#inspect-views>span{margin-inline-end:4px}#button-strip{box-sizing:border-box;flex-shrink:0;height:var(--cr-section-min-height);padding-bottom:8px;padding-inline-end:20px;padding-top:8px}#button-strip cr-button{margin-inline-start:8px}#source-indicator{margin-inline-start:24px;margin-top:24px;position:absolute}.source-icon-wrapper{align-items:center;background:#f1592b;border-radius:50%;box-shadow:0 1px 1px 0 rgba(0,0,0,.22),0 2px 2px 0 rgba(0,0,0,.12);display:flex;height:22px;justify-content:center;width:22px}#source-indicator iron-icon{color:#fff;height:16px;width:16px}paper-tooltip{--paper-tooltip-min-width:0}#errors-button{color:var(--error-color)}#dev-reload-button{margin-inline-end:12px}#blacklisted-warning:empty{display:none}#a11yAssociation{height:0;overflow:hidden}</style>

<div id="a11yAssociation" aria-hidden="true">
  [[a11yAssociation(data.name)]]
</div>
<div id="card" class$="[[computeClasses_(data.state, inDevMode)]]">
  <div id="main">
    <div id="icon-wrapper">
      <img id="icon" src="[[data.iconUrl]]" aria-describedby="a11yAssociation" alt="">
      <template is="dom-if" if="[[computeSourceIndicatorIcon_(data.*)]]">
        <div id="source-indicator">
          <div class="source-icon-wrapper" role="img" aria-describedby="a11yAssociation" aria-label$="[[computeSourceIndicatorText_(data.*)]]">
            <iron-icon icon="[[computeSourceIndicatorIcon_(data.*)]]">
            </iron-icon>
          </div>
        </div>
      </template>
    </div>
    
    <template is="dom-if" if="[[computeSourceIndicatorIcon_(data.*)]]">
      <paper-tooltip id="source-indicator-text" for="source-indicator" position="top" fit-to-visible-bounds aria-hidden="true">
        [[computeSourceIndicatorText_(data.*)]]
      </paper-tooltip>
    </template>
    <div id="content">
      
      <div>
        <div id="name-and-version" class="layout horizontal center">
          <div id="name" role="heading" aria-level="3" class="clippable-flex-text">[[data.name]]</div>
          <span id="version" class="cr-secondary-text" hidden$="[[!inDevMode]]">
            [[data.version]]
          </span>
        </div>
      </div>
      <div id="description" class="cr-secondary-text multiline-clippable-text" hidden$="[[!showDescription_(data.disableReasons.*, data.*)]]">
        [[data.description]]
      </div>
      <template is="dom-if" if="[[hasSevereWarnings_(data.disableReasons.*, data.*)]]">
        <div id="warnings">
          <iron-icon class="message-icon" icon="cr:error"></iron-icon>
          <span id="runtime-warnings" aria-describedby="a11yAssociation" hidden$="[[!data.runtimeWarnings.length]]">
            <template is="dom-repeat" items="[[data.runtimeWarnings]]">
              [[item]]
            </template>
          </span>
          <span id="suspicious-warning" aria-describedby="a11yAssociation" hidden$="[[!data.disableReasons.suspiciousInstall]]">
            $i18n{itemSuspiciousInstall}
            <a target="_blank" href="$i18n{suspiciousInstallHelpUrl}" aria-label="$i18n{itemSuspiciousInstallLearnMore}">
              $i18n{learnMore}
            </a>
          </span>
          <span id="corrupted-warning" aria-describedby="a11yAssociation" hidden$="[[!data.disableReasons.corruptInstall]]">
            $i18n{itemCorruptInstall}
          </span>
          <span id="blacklisted-warning">[[data.blacklistText]]</span>
        </div>
      </template>
      <template is="dom-if" if="[[showAllowlistWarning_(data.disableReasons.*, data.*)]]">
        <div id="allowlist-warning">
          <iron-icon class="message-icon" icon="extensions-icons:safebrowsing_warning">
          </iron-icon>
          <span class="cr-secondary-text" aria-describedby="a11yAssociation">
            $i18n{itemAllowlistWarning}
            <a href="$i18n{enhancedSafeBrowsingWarningHelpUrl}" target="_blank" aria-label="$i18n{itemAllowlistWarningLearnMoreLabel}">
              $i18n{learnMore}
            </a>
          </span>
        </div>
      </template>
      <template is="dom-if" if="[[inDevMode]]">
        <div id="extension-id" class="bounded-text cr-secondary-text">
          [[data.id]]
        </div>
        <template is="dom-if" if="[[!computeInspectViewsHidden_(data.views)]]">
          
          <div>
            <div id="inspect-views" class="cr-secondary-text">
              <span aria-describedby="a11yAssociation">
                $i18n{itemInspectViews}
              </span>
              <a class="clippable-flex-text" is="action-link" title="[[computeFirstInspectTitle_(firstInspectView_)]]" on-click="onInspectClick_">
                [[computeFirstInspectLabel_(firstInspectView_)]]
              </a>
              <a is="action-link" hidden$="[[computeExtraViewsHidden_(data.views)]]" on-click="onExtraInspectClick_">
                &nbsp;[[computeExtraInspectLabel_(data.views)]]
              </a>
            </div>
          </div>
        </template>
      </template>
    </div>
  </div>
  <div id="button-strip" class="layout horizontal center cr-secondary-text">
    <div class="layout flex horizontal center">
      <cr-button id="detailsButton" on-click="onDetailsClick_" aria-describedby="a11yAssociation">
        $i18n{itemDetails}
      </cr-button>
      <cr-button id="removeButton" on-click="onRemoveClick_" aria-describedby="a11yAssociation" hidden="[[data.mustRemainInstalled]]">
        $i18n{remove}
      </cr-button>
      <template is="dom-if" if="[[shouldShowErrorsButton_(data.*)]]">
        <cr-button id="errors-button" on-click="onErrorsClick_" aria-describedby="a11yAssociation">
          $i18n{itemErrors}
        </cr-button>
      </template>
    </div>
    <template is="dom-if" if="[[!computeDevReloadButtonHidden_(data.*)]]">
      <cr-icon-button id="dev-reload-button" class="icon-refresh no-overlap" aria-label="$i18n{itemReload}" aria-describedby="a11yAssociation" on-click="onReloadClick_"></cr-icon-button>
    </template>
    <template is="dom-if" if="[[showRepairButton_(data.disableReasons.corruptInstall)]]">
      <cr-button id="repair-button" class="action-button" aria-describedby="a11yAssociation" on-click="onRepairClick_">
        $i18n{itemRepair}
      </cr-button>
    </template>
    <template is="dom-if" if="[[showReloadButton_(data.state)]]">
      <cr-button id="terminated-reload-button" on-click="onReloadClick_" aria-describedby="a11yAssociation" class="action-button">
        $i18n{itemReload}
      </cr-button>
    </template>
    <cr-tooltip-icon id="parentDisabledPermissionsToolTip" hidden$="[[!data.disableReasons.parentDisabledPermissions]]" tooltip-text="$i18n{parentDisabledPermissions}" icon-class="cr20:kite" icon-aria-label="$i18n{parentDisabledPermissions}">
    </cr-tooltip-icon>
    <paper-tooltip id="enable-toggle-tooltip" for="enableToggle" position="left" aria-hidden="true" animation-delay="0" fit-to-visible-bounds>
      [[getEnableToggleTooltipText_(data.*)]]
    </paper-tooltip>
    <cr-toggle id="enableToggle" aria-label$="[[getEnableToggleAriaLabel_(data.*)]]" aria-describedby="a11yAssociation enable-toggle-tooltip" checked="[[isEnabled_(data.state)]]" on-change="onEnableToggleChange_" disabled$="[[!isEnableToggleEnabled_(data.*)]]" hidden$="[[!showEnableToggle_(data.*)]]">
    </cr-toggle>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsItemElementBase = I18nMixin(ItemMixin(PolymerElement));
class ExtensionsItemElement extends ExtensionsItemElementBase {
    constructor() {
        super(...arguments);
        /** Prevents reloading the same item while it's already being reloaded. */
        this.isReloading_ = false;
    }
    static get is() {
        return 'extensions-item';
    }
    static get template() {
        return getTemplate$i();
    }
    static get properties() {
        return {
            // The item's delegate, or null.
            delegate: Object,
            // Whether or not dev mode is enabled.
            inDevMode: {
                type: Boolean,
                value: false,
            },
            safetyCheckShowing: {
                type: Boolean,
                value: false,
            },
            // The underlying ExtensionInfo itself. Public for use in declarative
            // bindings.
            data: Object,
            // Whether or not the expanded view of the item is shown.
            showingDetails_: {
                type: Boolean,
                value: false,
            },
            // First inspectable view after sorting.
            firstInspectView_: {
                type: Object,
                computed: 'computeFirstInspectView_(data.views)',
            },
        };
    }
    static get observers() {
        return ['observeIdVisibility_(inDevMode, showingDetails_, data.id)'];
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    /** @return The "Details" button. */
    getDetailsButton() {
        return this.$.detailsButton;
    }
    /** @return The "Remove" button, if it exists. */
    getRemoveButton() {
        return this.data.mustRemainInstalled ? null : this.$.removeButton;
    }
    /** @return The "Errors" button, if it exists. */
    getErrorsButton() {
        return this.shadowRoot.querySelector('#errors-button');
    }
    getEnableToggleAriaLabel_() {
        return getEnableToggleAriaLabel(this.isEnabled_(), this.data.type, this.i18n('appEnabled'), this.i18n('extensionEnabled'), this.i18n('itemOff'));
    }
    getEnableToggleTooltipText_() {
        return getEnableToggleTooltipText(this.data);
    }
    observeIdVisibility_() {
        flush();
        const idElement = this.shadowRoot.querySelector('#extension-id');
        if (idElement) {
            assert(this.data);
            idElement.textContent = this.i18n('itemId', this.data.id);
        }
    }
    shouldShowErrorsButton_() {
        // When the error console is disabled (happens when
        // --disable-error-console command line flag is used or when in the
        // Stable/Beta channel), |installWarnings| is populated.
        if (this.data.installWarnings && this.data.installWarnings.length > 0) {
            return true;
        }
        // When error console is enabled |installedWarnings| is not populated.
        // Instead |manifestErrors| and |runtimeErrors| are used.
        return this.data.manifestErrors.length > 0 ||
            this.data.runtimeErrors.length > 0;
    }
    onRemoveClick_() {
        if (this.safetyCheckShowing) {
            const actionToRecord = this.data.safetyCheckText ?
                'SafetyCheck.ReviewPanelRemoveClicked' :
                'SafetyCheck.NonTriggeringExtensionRemoved';
            ExtensionsHatsBrowserProxyImpl.getInstance()
                .nonTriggerExtensionRemovedAction();
            chrome.metricsPrivate.recordUserAction(actionToRecord);
        }
        this.delegate.deleteItem(this.data.id);
    }
    onEnableToggleChange_() {
        this.delegate.setItemEnabled(this.data.id, this.$.enableToggle.checked);
        this.$.enableToggle.checked = this.isEnabled_();
    }
    onErrorsClick_() {
        if (this.data.installWarnings && this.data.installWarnings.length > 0) {
            this.fire_('show-install-warnings', this.data.installWarnings);
            return;
        }
        navigation.navigateTo({ page: Page.ERRORS, extensionId: this.data.id });
    }
    onDetailsClick_() {
        navigation.navigateTo({ page: Page.DETAILS, extensionId: this.data.id });
    }
    computeFirstInspectView_() {
        return sortViews(this.data.views)[0];
    }
    onInspectClick_() {
        this.delegate.inspectItemView(this.data.id, this.firstInspectView_);
    }
    onExtraInspectClick_() {
        navigation.navigateTo({ page: Page.DETAILS, extensionId: this.data.id });
    }
    onReloadClick_() {
        // Don't reload if in the middle of an update.
        if (this.isReloading_) {
            return;
        }
        this.isReloading_ = true;
        const toastManager = getToastManager();
        // Keep the toast open indefinitely.
        toastManager.duration = 0;
        toastManager.show(this.i18n('itemReloading'));
        this.delegate.reloadItem(this.data.id)
            .then(() => {
            toastManager.hide();
            toastManager.duration = 3000;
            toastManager.show(this.i18n('itemReloaded'));
            this.isReloading_ = false;
        }, loadError => {
            this.fire_('load-error', loadError);
            toastManager.hide();
            this.isReloading_ = false;
        });
    }
    onRepairClick_() {
        this.delegate.repairItem(this.data.id);
    }
    isEnabled_() {
        return isEnabled$1(this.data.state);
    }
    isEnableToggleEnabled_() {
        return userCanChangeEnablement(this.data);
    }
    /** @return Whether the reload button should be shown. */
    showReloadButton_() {
        return getEnableControl(this.data) === EnableControl.RELOAD;
    }
    /** @return Whether the repair button should be shown. */
    showRepairButton_() {
        return getEnableControl(this.data) === EnableControl.REPAIR;
    }
    /** @return Whether the enable toggle should be shown. */
    showEnableToggle_() {
        return getEnableControl(this.data) === EnableControl.ENABLE_TOGGLE;
    }
    computeClasses_() {
        let classes = this.isEnabled_() ? 'enabled' : 'disabled';
        if (this.inDevMode) {
            classes += ' dev-mode';
        }
        return classes;
    }
    computeSourceIndicatorIcon_() {
        switch (getItemSource(this.data)) {
            case SourceType.POLICY:
                return 'extensions-icons:business';
            case SourceType.SIDELOADED:
                return 'extensions-icons:input';
            case SourceType.UNKNOWN:
                // TODO(dpapad): Ask UX for a better icon for this case.
                return 'extensions-icons:input';
            case SourceType.UNPACKED:
                return 'extensions-icons:unpacked';
            case SourceType.WEBSTORE:
            case SourceType.INSTALLED_BY_DEFAULT:
                return '';
            default:
                assertNotReached();
        }
    }
    computeSourceIndicatorText_() {
        if (this.data.locationText) {
            return this.data.locationText;
        }
        const sourceType = getItemSource(this.data);
        return sourceType === SourceType.WEBSTORE ? '' :
            getItemSourceString(sourceType);
    }
    computeInspectViewsHidden_() {
        return !this.data.views || this.data.views.length === 0;
    }
    computeFirstInspectTitle_() {
        // Note: theoretically, this wouldn't be called without any inspectable
        // views (because it's in a dom-if="!computeInspectViewsHidden_()").
        // However, due to the recycling behavior of iron list, it seems that
        // sometimes it can. Even when it is, the UI behaves properly, but we
        // need to handle the case gracefully.
        return this.data.views.length > 0 ?
            computeInspectableViewLabel(this.firstInspectView_) :
            '';
    }
    computeFirstInspectLabel_() {
        const label = this.computeFirstInspectTitle_();
        return label && this.data.views.length > 1 ? label + ',' : label;
    }
    computeExtraViewsHidden_() {
        return this.data.views.length <= 1;
    }
    computeDevReloadButtonHidden_() {
        // Only display the reload spinner if the extension is unpacked and
        // enabled or disabled for reload. If an extension fails to reload (due to
        // e.g. a parsing error), it will
        // remain disabled with the "reloading" reason. We show the reload button
        // when it's disabled for reload to enable developers to reload the fixed
        // version. (Note that trying to reload an extension that is currently
        // trying to reload is a no-op.) For other
        // disableReasons, there's no point in reloading a disabled extension, and
        // we'll show a crashed reload button if it's terminated.
        const showIcon = this.data.location === chrome.developerPrivate.Location.UNPACKED &&
            (this.data.state === chrome.developerPrivate.ExtensionState.ENABLED ||
                this.data.disableReasons.reloading);
        return !showIcon;
    }
    computeExtraInspectLabel_() {
        return this.i18n('itemInspectViewsExtra', (this.data.views.length - 1).toString());
    }
    hasSevereWarnings_() {
        return this.data.disableReasons.corruptInstall ||
            this.data.disableReasons.suspiciousInstall ||
            this.data.runtimeWarnings.length > 0 || !!this.data.blacklistText;
    }
    showDescription_() {
        return !this.hasSevereWarnings_() &&
            !this.data.showSafeBrowsingAllowlistWarning;
    }
    showAllowlistWarning_() {
        // Only show the allowlist warning if there are no other warnings. The item
        // card has a fixed height and the content might get cropped if too many
        // warnings are displayed. This should be a rare edge case and the allowlist
        // warning will still be shown in the item detail view.
        return this.data.showSafeBrowsingAllowlistWarning &&
            !this.hasSevereWarnings_();
    }
}
customElements.define(ExtensionsItemElement.is, ExtensionsItemElement);

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
        return instance$1 || (instance$1 = new PluralStringProxyImpl());
    }
    static setInstance(obj) {
        instance$1 = obj;
    }
}
let instance$1 = null;

function getTemplate$h() {
    return html `<!--_html_template_start_--><style include="cr-shared-style shared-style">.header-group-wrapper{flex:1;margin-inline-start:15px}.card-background{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);padding:12px 20px}.header-with-icon{align-items:center;display:flex}#safetyHubTitleContainer{font-size:15px;font-weight:400;margin:0 0 16px 5px}.header-with-icon h3{margin:5px 0 3px 0;font-weight:400}iron-icon[icon='cr:check']{padding-inline-start:10px;fill:var(--google-green-700)}@media (prefers-color-scheme:dark){iron-icon[icon='cr:check']{fill:var(--grey-900-white-4-percent)}}.text-container{padding-left:20px}.header-icon{align-items:center;fill:var(--google-grey-700)}@media (prefers-color-scheme:dark){.header-icon{fill:var(--review-panel-icon-color)}}.header-group-wrapper{flex:1;margin-inline-start:15px}.completion-container{font-weight:500;font-size:14px;min-height:42px}#extension-icon{height:var(--cr-icon-size);width:var(--cr-icon-size)}.extension-list{border-top:var(--cr-separator-line);padding:0 0 15px 3px}.extension-row{border-top:none}.display-name{flex:1;padding-inline-start:18px;margin:15px 8px 0 8px;max-width:100%;overflow:hidden;text-overflow:ellipsis}.bulk-action-button{margin-inline-start:auto}.cr-row{padding:0}.cr-row.first{align-items:center;padding-top:5px}@media (max-width:946px){.header-with-icon{display:grid;grid-template-columns:auto auto}#removeAllButton{grid-column:2;margin-inline-start:20px;margin-inline-end:auto;margin-top:10px}.header-icon{margin-top:40px}}</style>
<h2 id="safetyHubTitleContainer" hidden$="[[!shouldShowSafetyHubHeader_]]">
  $i18n{safetyHubHeader}
</h2>
<div class="card-background" hidden$="[[shouldHideUnsafePanel_]]">
  <cr-expand-button class="cr-row first" no-hover id="expandButton" expanded="{{unsafeExtensionsReviewListExpanded_}}" hidden$="[[!shouldShowUnsafeExtensions_]]">
    <div class="header-with-icon" id="reviewPanelContainer">
      <iron-icon aria-hidden="true" icon="extensions-icons:my_extensions" class="header-icon">
        
      </iron-icon>
      <div class="text-container">
        <h3 id="headingText">[[headerString_]]</h3>
        <div class="cr-secondary-text" id="secondaryText">
            [[subtitleString_]]
        </div>
      </div>
      <cr-button class="action-button bulk-action-button" id="removeAllButton" on-click="onRemoveAllClick_">
          $i18n{safetyCheckRemoveAll}
      </cr-button>
    </div>
  </cr-expand-button>
  <iron-collapse class="extension-list" opened="[[unsafeExtensionsReviewListExpanded_]]" hidden$="[[!shouldShowUnsafeExtensions_]]">
    <template is="dom-repeat" items="[[unsafeExtensions_]]">
      <div class="extension-row cr-row">
        <img id="extension-icon" src="[[item.iconUrl]]" role="presentation">
        <div class="display-name text-elide">
          <div class="extension-representation">[[item.name]]</div>
          <div class="cr-secondary-text">
            [[item.safetyCheckText.panelString]]
          </div>
        </div>
        <cr-icon-button iron-icon="cr:delete" actionable on-click="onRemoveExtensionClick_" aria-label="[[getRemoveButtonA11yLabel_(item.name)]]">
        </cr-icon-button>
        <cr-icon-button class="icon-more-vert header-aligned-button" id="makeExceptionMenuButton" on-click="onMakeExceptionMenuClick_" aria-label="[[getOptionMenuA11yLabel_(item.name)]]" focus-type="makeExceptionMenuButton"></cr-icon-button>
      </div>
    </template>
  </iron-collapse>
  <div class="header-with-icon completion-container" hidden$="[[!shouldShowCompletionInfo_]]">
    <iron-icon role="img" icon="cr:check"></iron-icon>
    <span class="header-group-wrapper">[[completionMessage_]]</span>
  </div>
  <cr-action-menu id="makeExceptionMenu">
    <button id="menuKeepExtension" class="dropdown-item" on-click="onKeepExtensionClick_">
        $i18n{safetyCheckKeepExtension}
    </button>
  </cr-action-menu>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsReviewPanelElementBase = I18nMixin(PolymerElement);
class ExtensionsReviewPanelElement extends ExtensionsReviewPanelElementBase {
    static get is() {
        return 'extensions-review-panel';
    }
    static get template() {
        return getTemplate$h();
    }
    static get properties() {
        return {
            delegate: Object,
            extensions: {
                type: Array,
                notify: true,
            },
            /**
             * The string for the primary header label.
             */
            headerString_: String,
            /**
             * The string for secondary text under the header string.
             */
            subtitleString_: String,
            /**
             * The text of the safety check completion state.
             */
            completionMessage_: String,
            /**
             * List of potentially unsafe extensions. This list being empty
             * indicates that there are no unsafe extensions to review.
             */
            unsafeExtensions_: Array,
            shouldShowSafetyHubHeader_: {
                type: Boolean,
                computed: 'computeShouldShowSafetyHubHeader_(shouldHideUnsafePanel_)',
            },
            /**
             * Indicates whether to show completion info after user has finished the
             * review process.
             */
            shouldShowCompletionInfo_: {
                type: Boolean,
                computed: 'computeShouldShowCompletionInfo_(extensions.*, reviewPanelShown_)',
            },
            /**
             * Indicates whether to show the potentially unsafe extensions or not.
             */
            shouldShowUnsafeExtensions_: {
                type: Boolean,
                computed: 'computeShouldShowUnsafeExtensions_(extensions.*)',
            },
            /**
             * Indicates whether to show any part of the Review Panel.
             */
            shouldHideUnsafePanel_: {
                type: Boolean,
                computed: 'computeShouldHideUnsafePanel_(shouldShowUnsafeExtensions_, shouldShowCompletionInfo_)',
            },
            /**
             * Indicates if the list of unsafe extensions is expanded or collapsed.
             */
            unsafeExtensionsReviewListExpanded_: {
                type: Boolean,
                value: true,
            },
            /**
             * Indicates if any potential unsafe extensions has been kept or removed.
             */
            numberOfExtensionsChanged_: {
                type: Number,
                value: 1,
            },
            /**
             * Indicates if the review panel has ever been shown.
             */
            reviewPanelShown_: {
                type: Boolean,
                value: false,
            },
            /**
             * The latest id of an extension whose action menu (Keep the extension)
             * was expanded.
             * */
            lastClickedExtensionId_: String,
        };
    }
    static get observers() {
        return ['onExtensionsChanged_(extensions.*)'];
    }
    async onExtensionsChanged_() {
        this.unsafeExtensions_ = this.getUnsafeExtensions_(this.extensions);
        this.headerString_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckTitle', this.unsafeExtensions_.length);
        this.subtitleString_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckDescription', this.unsafeExtensions_.length);
        this.completionMessage_ =
            await PluralStringProxyImpl.getInstance().getPluralString('safetyCheckAllDoneForNow', this.numberOfExtensionsChanged_);
    }
    getUnsafeExtensions_(extensions) {
        return extensions?.filter(extension => !!(extension.safetyCheckText &&
            extension.safetyCheckText.panelString &&
            !extension.controlledInfo &&
            extension.acknowledgeSafetyCheckWarning !== true));
    }
    /**
     * Determines whether or not to show the completion info after the user
     * finished reviewing extensions.
     */
    computeShouldShowCompletionInfo_() {
        const updatedUnsafeExtensions = this.getUnsafeExtensions_(this.extensions) || [];
        if (this.reviewPanelShown_ && updatedUnsafeExtensions.length === 0) {
            if (!this.completionMetricLogged_) {
                this.completionMetricLogged_ = true;
                chrome.metricsPrivate.recordUserAction('SafetyCheck.ReviewCompletion');
            }
            return true;
        }
        else {
            return false;
        }
    }
    computeShouldShowUnsafeExtensions_() {
        const updatedUnsafeExtensions = this.getUnsafeExtensions_(this.extensions) || [];
        if (updatedUnsafeExtensions.length !== 0) {
            if (!this.shouldShowUnsafeExtensions_) {
                chrome.metricsPrivate.recordUserAction('SafetyCheck.ReviewPanelShown');
            }
            this.completionMetricLogged_ = false;
            this.reviewPanelShown_ = true;
            ExtensionsHatsBrowserProxyImpl.getInstance().panelShown(true);
            return true;
        }
        else {
            ExtensionsHatsBrowserProxyImpl.getInstance().panelShown(false);
            return false;
        }
    }
    computeShouldShowSafetyHubHeader_() {
        return loadTimeData.getBoolean('safetyHubShowReviewPanel') &&
            !this.shouldHideUnsafePanel_;
    }
    computeShouldHideUnsafePanel_() {
        return !(this.shouldShowUnsafeExtensions_ || this.shouldShowCompletionInfo_);
    }
    /**
     * Opens the extension action menu.
     */
    onMakeExceptionMenuClick_(e) {
        this.lastClickedExtensionId_ = e.model.item.id;
        this.$.makeExceptionMenu.showAt(e.target);
    }
    /**
     * Acknowledges the extension safety check warning.
     */
    onKeepExtensionClick_() {
        chrome.metricsPrivate.recordUserAction('SafetyCheck.ReviewPanelKeepClicked');
        ExtensionsHatsBrowserProxyImpl.getInstance().extensionKeptAction();
        this.$.makeExceptionMenu.close();
        if (this.lastClickedExtensionId_) {
            this.delegate.setItemSafetyCheckWarningAcknowledged(this.lastClickedExtensionId_);
        }
    }
    getRemoveButtonA11yLabel_(extensionName) {
        return loadTimeData.substituteString(this.i18n('safetyCheckRemoveButtonA11yLabel'), extensionName);
    }
    getOptionMenuA11yLabel_(extensionName) {
        return loadTimeData.substituteString(this.i18n('safetyCheckOptionMenuA11yLabel'), extensionName);
    }
    async onRemoveExtensionClick_(e) {
        chrome.metricsPrivate.recordUserAction('SafetyCheck.ReviewPanelRemoveClicked');
        ExtensionsHatsBrowserProxyImpl.getInstance().extensionRemovedAction();
        try {
            await this.delegate.uninstallItem(e.model.item.id);
        }
        catch (_) {
            // The error was almost certainly the user cancelling the dialog.
            // Do nothing.
        }
    }
    async onRemoveAllClick_(event) {
        chrome.metricsPrivate.recordUserAction('SafetyCheck.ReviewPanelRemoveAllClicked');
        ExtensionsHatsBrowserProxyImpl.getInstance().removeAllAction(this.unsafeExtensions_.length);
        event.stopPropagation();
        try {
            this.numberOfExtensionsChanged_ = this.unsafeExtensions_.length;
            await this.delegate.deleteItems(this.unsafeExtensions_.map(extension => extension.id));
        }
        catch (_) {
            // The error was almost certainly the user cancelling the dialog.
            // Reset `numberOfExtensionsChanged_`.
            this.numberOfExtensionsChanged_ = 1;
        }
    }
}
customElements.define(ExtensionsReviewPanelElement.is, ExtensionsReviewPanelElement);

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

function getTemplate$g() {
    return html `<!--_html_template_start_--><style include="shared-style">#content-wrapper,.items-container{--extensions-card-width:400px}#container{box-sizing:border-box;height:100%}#content-wrapper{min-width:var(--extensions-card-width);padding:24px 60px 64px}#content-wrapper:has(extensions-review-panel){padding-top:14px}.empty-list-message{color:#6e6e6e;font-size:123%;font-weight:500;margin-top:80px;text-align:center}.extension-title-container{font-size:15px;font-weight:400;margin:0 0 16px 5px}@media (prefers-color-scheme:dark){.empty-list-message{color:var(--cr-secondary-text-color)}}.items-container{--grid-gutter:12px;display:grid;grid-column-gap:var(--grid-gutter);grid-row-gap:var(--grid-gutter);grid-template-columns:repeat(auto-fill,var(--extensions-card-width));justify-content:center;margin:auto;max-width:calc(var(--extensions-card-width) * var(--max-columns) + var(--grid-gutter) * var(--max-columns))}.items-container.review-panel-container :first-child{max-width:calc(var(--extensions-card-width) * 2 + var(--grid-gutter) * 2);grid-column:1/-1}extensions-review-panel{margin:15px auto;width:100%}#checkup-container{grid-column:1/-1;min-height:var(--extensions-card-height)}extensions-item{grid-column-start:auto;grid-row-start:auto}#app-title{color:var(--cr-primary-text-color);font-size:123%;font-weight:400;letter-spacing:.25px;margin-bottom:12px;margin-top:21px;padding-bottom:4px;padding-top:8px}managed-footnote{border-top:none;margin-bottom:-24px;padding-bottom:12px;padding-top:12px;z-index:1}</style>
<div id="container">
  <managed-footnote hidden="[[filter]]"></managed-footnote>
  <div id="content-wrapper" style="--max-columns:[[maxColumns_]]">
    <div class="items-container review-panel-container">
      <template is="dom-if" if="[[showSafetyCheckReviewPanel_]]" restamp>
        <extensions-review-panel extensions="[[extensions]]" delegate="[[delegate]]">
        </extensions-review-panel>
        <h2 class="extension-title-container">$i18n{safetyCheckAllExtensions}</h2>
      </template>
    </div>
    <div id="no-items" class="empty-list-message" hidden$="[[!shouldShowEmptyItemsMessage_(
            apps.length, extensions.length)]]">
      <span on-click="onNoExtensionsClick_">
        $i18nRaw{noExtensionsOrApps}
      </span>
    </div>
    <div id="no-search-results" class="empty-list-message" hidden$="[[!shouldShowEmptySearchMessage_(
            shownAppsCount_, shownExtensionsCount_, apps, extensions)]]">
      <span>$i18n{noSearchResults}</span>
    </div>
    <div class="items-container" hidden="[[!shownExtensionsCount_]]">
      
      <template is="dom-repeat" items="[[extensions]]" initial-count="3" filter="[[computedFilter_]]" rendered-item-count="{{shownExtensionsCount_::dom-change}}">
        <extensions-item id="[[item.id]]" data="[[item]]" safety-check-showing="[[hasSafetyCheckTriggeringExtension_]]" delegate="[[delegate]]" in-dev-mode="[[inDevMode]]">
        </extensions-item>
      </template>
    </div>
    <div hidden="[[!shownAppsCount_]]">
      
      <h2 id="app-title" class="items-container">$i18n{appsTitle}</h2>
      <div class="items-container">
        <template is="dom-repeat" items="[[apps]]" initial-count="3" filter="[[computedFilter_]]" rendered-item-count="{{shownAppsCount_::dom-change}}">
          <extensions-item id="[[item.id]]" data="[[item]]" delegate="[[delegate]]" in-dev-mode="[[inDevMode]]">
          </extensions-item>
        </template>
      </div>
    </div>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsItemListElementBase = I18nMixin(PolymerElement);
class ExtensionsItemListElement extends ExtensionsItemListElementBase {
    static get is() {
        return 'extensions-item-list';
    }
    static get template() {
        return getTemplate$g();
    }
    static get properties() {
        return {
            apps: Array,
            extensions: Array,
            delegate: Object,
            inDevMode: {
                type: Boolean,
                value: false,
            },
            filter: {
                type: String,
            },
            computedFilter_: {
                type: String,
                computed: 'computeFilter_(filter)',
                observer: 'announceSearchResults_',
            },
            maxColumns_: {
                type: Number,
                value: 3,
            },
            shownAppsCount_: {
                type: Number,
                value: 0,
            },
            shownExtensionsCount_: {
                type: Number,
                value: 0,
            },
            showSafetyCheckReviewPanel_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('safetyCheckShowReviewPanel') ||
                    loadTimeData.getBoolean('safetyHubShowReviewPanel'),
            },
            hasSafetyCheckTriggeringExtension_: {
                type: Boolean,
                computed: 'computeHasSafetyCheckTriggeringExtension_(extensions)',
            },
        };
    }
    getDetailsButton(id) {
        const item = this.shadowRoot.querySelector(`#${id}`);
        return item && item.getDetailsButton();
    }
    getRemoveButton(id) {
        const item = this.shadowRoot.querySelector(`#${id}`);
        return item && item.getRemoveButton();
    }
    getErrorsButton(id) {
        const item = this.shadowRoot.querySelector(`#${id}`);
        return item && item.getErrorsButton();
    }
    /**
     * Focus the remove button for the item matching `id`. If the remove button is
     * not visible, focus the details button instead.
     * return: If an item's button has been focused, see comment below.
     */
    focusItemButton(id) {
        const item = this.shadowRoot.querySelector(`#${id}`);
        // This function is called from a setTimeout() inside manager.ts. Rarely,
        // the list of extensions rendered in this element may not match the list of
        // extensions stored in manager.ts for a brief moment (not visible to the
        // user). As a result, `item` here may be null even though `id` points to
        // an extension inside `manager.ts`. If this happens, do not focus anything.
        // Observed in crbug.com/1482580.
        if (!item) {
            return false;
        }
        const buttonToFocus = item.getRemoveButton() || item.getDetailsButton();
        buttonToFocus.focus();
        return true;
    }
    /**
     * Computes the filter function to be used for determining which items
     * should be shown. A |null| value indicates that everything should be
     * shown.
     * return {?Function}
     */
    computeFilter_() {
        const formattedFilter = this.filter.trim().toLowerCase();
        if (!formattedFilter) {
            return null;
        }
        return i => [i.name, i.id].some(s => s.toLowerCase().includes(formattedFilter));
    }
    computeShowSafetyCheckReviewPanel_() {
        return (loadTimeData.getBoolean('safetyCheckShowReviewPanel') ||
            loadTimeData.getBoolean('safetyHubShowReviewPanel'));
    }
    computeHasSafetyCheckTriggeringExtension_() {
        if (!this.extensions) {
            return false;
        }
        for (const extension of this.extensions) {
            if (!!extension.safetyCheckText &&
                !!extension.safetyCheckText.panelString &&
                this.showSafetyCheckReviewPanel_) {
                return true;
            }
        }
        return false;
    }
    shouldShowEmptyItemsMessage_() {
        if (!this.apps || !this.extensions) {
            return;
        }
        return this.apps.length === 0 && this.extensions.length === 0;
    }
    shouldShowEmptySearchMessage_() {
        return !this.shouldShowEmptyItemsMessage_() && this.shownAppsCount_ === 0 &&
            this.shownExtensionsCount_ === 0;
    }
    onNoExtensionsClick_(e) {
        if (e.target.tagName === 'A') {
            chrome.metricsPrivate.recordUserAction('Options_GetMoreExtensions');
        }
    }
    announceSearchResults_() {
        if (this.computedFilter_) {
            IronA11yAnnouncer.requestAvailability();
            setTimeout(() => {
                const total = this.shownAppsCount_ + this.shownExtensionsCount_;
                this.dispatchEvent(new CustomEvent('iron-announce', {
                    bubbles: true,
                    composed: true,
                    detail: {
                        text: this.shouldShowEmptySearchMessage_() ?
                            this.i18n('noSearchResults') :
                            (total === 1 ?
                                this.i18n('searchResultsSingular', this.filter) :
                                this.i18n('searchResultsPlural', total.toString(), this.filter)),
                    },
                }));
            }, 0);
        }
    }
}
customElements.define(ExtensionsItemListElement.is, ExtensionsItemListElement);

function getTemplate$f() {
    return html `<!--_html_template_start_--><style include="cr-icons cr-hidden-style">#main{position:relative;width:200px}#clear{--cr-icon-button-size:28px;position:absolute;right:2px}#input{--cr-input-readonly-opacity:1}:host-context([dir=rtl]) #clear{left:-2px;right:inherit}</style>
<div id="main">
    <cr-input id="input" readonly="[[readonly_]]" aria-label="[[computeInputAriaLabel_(item, command)]]" placeholder="[[computePlaceholder_(readonly_)]]" invalid="[[getIsInvalid_(error_)]]" error-message="[[getErrorString_(error_,
          '$i18nPolymer{shortcutIncludeStartModifier}',
          '$i18nPolymer{shortcutTooManyModifiers}',
          '$i18nPolymer{shortcutNeedCharacter}')]]" value="[[computeText_(shortcut)]]">
    <cr-icon-button id="edit" title="$i18n{edit}" aria-label="[[computeEditButtonAriaLabel_(item, command)]]" slot="suffix" class="icon-edit no-overlap" on-click="onEditClick_"></cr-icon-button>
  </cr-input>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var Key;
(function (Key) {
    Key[Key["COMMA"] = 188] = "COMMA";
    Key[Key["DEL"] = 46] = "DEL";
    Key[Key["DOWN"] = 40] = "DOWN";
    Key[Key["END"] = 35] = "END";
    Key[Key["ESCAPE"] = 27] = "ESCAPE";
    Key[Key["HOME"] = 36] = "HOME";
    Key[Key["INS"] = 45] = "INS";
    Key[Key["LEFT"] = 37] = "LEFT";
    Key[Key["MEDIA_NEXT_TRACK"] = 176] = "MEDIA_NEXT_TRACK";
    Key[Key["MEDIA_PLAY_PAUSE"] = 179] = "MEDIA_PLAY_PAUSE";
    Key[Key["MEDIA_PREV_TRACK"] = 177] = "MEDIA_PREV_TRACK";
    Key[Key["MEDIA_STOP"] = 178] = "MEDIA_STOP";
    Key[Key["PAGE_DOWN"] = 34] = "PAGE_DOWN";
    Key[Key["PAGE_UP"] = 33] = "PAGE_UP";
    Key[Key["PERIOD"] = 190] = "PERIOD";
    Key[Key["RIGHT"] = 39] = "RIGHT";
    Key[Key["SPACE"] = 32] = "SPACE";
    Key[Key["TAB"] = 9] = "TAB";
    Key[Key["UP"] = 38] = "UP";
})(Key || (Key = {}));
/**
 * Enum for whether we require modifiers of a keycode.
 */
var ModifierPolicy;
(function (ModifierPolicy) {
    ModifierPolicy[ModifierPolicy["NOT_ALLOWED"] = 0] = "NOT_ALLOWED";
    ModifierPolicy[ModifierPolicy["REQUIRED"] = 1] = "REQUIRED";
})(ModifierPolicy || (ModifierPolicy = {}));
/**
 * Gets the ModifierPolicy. Currently only "MediaNextTrack", "MediaPrevTrack",
 * "MediaStop", "MediaPlayPause" are required to be used without any modifier.
 */
function getModifierPolicy(keyCode) {
    switch (keyCode) {
        case Key.MEDIA_NEXT_TRACK:
        case Key.MEDIA_PLAY_PAUSE:
        case Key.MEDIA_PREV_TRACK:
        case Key.MEDIA_STOP:
            return ModifierPolicy.NOT_ALLOWED;
        default:
            return ModifierPolicy.REQUIRED;
    }
}
/**
 * Returns whether the keyboard event has a key modifier, which could affect
 * how it's handled.
 * @param countShiftAsModifier Whether the 'Shift' key should be counted as
 *     modifier.
 * @return Whether the event has any modifiers.
 */
function hasModifier(e, countShiftAsModifier) {
    return e.ctrlKey || e.altKey ||
        // Meta key is only relevant on Mac and CrOS, where we treat Command
        // and Search (respectively) as modifiers.
        (isMac && e.metaKey) || (isChromeOS && e.metaKey) ||
        (countShiftAsModifier && e.shiftKey);
}
/**
 * Checks whether the passed in |keyCode| is a valid extension command key.
 * @return Whether the key is valid.
 */
function isValidKeyCode(keyCode) {
    if (keyCode === Key.ESCAPE) {
        return false;
    }
    for (const k in Key) {
        if (Key[k] === keyCode) {
            return true;
        }
    }
    return (keyCode >= 'A'.charCodeAt(0) && keyCode <= 'Z'.charCodeAt(0)) ||
        (keyCode >= '0'.charCodeAt(0) && keyCode <= '9'.charCodeAt(0));
}
/**
 * Converts a keystroke event to string form, ignoring invalid extension
 * commands.
 */
function keystrokeToString(e) {
    const output = [];
    // TODO(devlin): Should this be i18n'd?
    if (isMac && e.metaKey) {
        output.push('Command');
    }
    if (isChromeOS && e.metaKey) {
        output.push('Search');
    }
    if (e.ctrlKey) {
        output.push('Ctrl');
    }
    if (!e.ctrlKey && e.altKey) {
        output.push('Alt');
    }
    if (e.shiftKey) {
        output.push('Shift');
    }
    const keyCode = e.keyCode;
    if (isValidKeyCode(keyCode)) {
        if ((keyCode >= 'A'.charCodeAt(0) && keyCode <= 'Z'.charCodeAt(0)) ||
            (keyCode >= '0'.charCodeAt(0) && keyCode <= '9'.charCodeAt(0))) {
            output.push(String.fromCharCode(keyCode));
        }
        else {
            switch (keyCode) {
                case Key.COMMA:
                    output.push('Comma');
                    break;
                case Key.DEL:
                    output.push('Delete');
                    break;
                case Key.DOWN:
                    output.push('Down');
                    break;
                case Key.END:
                    output.push('End');
                    break;
                case Key.HOME:
                    output.push('Home');
                    break;
                case Key.INS:
                    output.push('Insert');
                    break;
                case Key.LEFT:
                    output.push('Left');
                    break;
                case Key.MEDIA_NEXT_TRACK:
                    output.push('MediaNextTrack');
                    break;
                case Key.MEDIA_PLAY_PAUSE:
                    output.push('MediaPlayPause');
                    break;
                case Key.MEDIA_PREV_TRACK:
                    output.push('MediaPrevTrack');
                    break;
                case Key.MEDIA_STOP:
                    output.push('MediaStop');
                    break;
                case Key.PAGE_DOWN:
                    output.push('PageDown');
                    break;
                case Key.PAGE_UP:
                    output.push('PageUp');
                    break;
                case Key.PERIOD:
                    output.push('Period');
                    break;
                case Key.RIGHT:
                    output.push('Right');
                    break;
                case Key.SPACE:
                    output.push('Space');
                    break;
                case Key.TAB:
                    output.push('Tab');
                    break;
                case Key.UP:
                    output.push('Up');
                    break;
            }
        }
    }
    return output.join('+');
}
/**
 * Returns true if the event has valid modifiers.
 * @param e The keyboard event to consider.
 * @return Wether the event is valid.
 */
function hasValidModifiers(e) {
    switch (getModifierPolicy(e.keyCode)) {
        case ModifierPolicy.REQUIRED:
            return hasModifier(e, false);
        case ModifierPolicy.NOT_ALLOWED:
            return !hasModifier(e, true);
        default:
            assertNotReached();
    }
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var ShortcutError;
(function (ShortcutError) {
    ShortcutError[ShortcutError["NO_ERROR"] = 0] = "NO_ERROR";
    ShortcutError[ShortcutError["INCLUDE_START_MODIFIER"] = 1] = "INCLUDE_START_MODIFIER";
    ShortcutError[ShortcutError["TOO_MANY_MODIFIERS"] = 2] = "TOO_MANY_MODIFIERS";
    ShortcutError[ShortcutError["NEED_CHARACTER"] = 3] = "NEED_CHARACTER";
})(ShortcutError || (ShortcutError = {}));
const ExtensionsShortcutInputElementBase = I18nMixin(PolymerElement);
class ExtensionsShortcutInputElement extends ExtensionsShortcutInputElementBase {
    static get is() {
        return 'extensions-shortcut-input';
    }
    static get template() {
        return getTemplate$f();
    }
    static get properties() {
        return {
            delegate: Object,
            item: Object,
            command: Object,
            shortcut: {
                type: String,
                value: '',
            },
            capturing_: {
                type: Boolean,
                value: false,
            },
            error_: {
                type: Number,
                value: ShortcutError.NO_ERROR,
            },
            readonly_: {
                type: Boolean,
                value: true,
                reflectToAttribute: true,
            },
            pendingShortcut_: {
                type: String,
                value: '',
            },
        };
    }
    ready() {
        super.ready();
        const node = this.$.input;
        node.addEventListener('mouseup', this.startCapture_.bind(this));
        node.addEventListener('blur', this.endCapture_.bind(this));
        node.addEventListener('focus', this.startCapture_.bind(this));
        node.addEventListener('keydown', this.onKeyDown_.bind(this));
        node.addEventListener('keyup', this.onKeyUp_.bind(this));
    }
    startCapture_() {
        if (this.capturing_ || this.readonly_) {
            return;
        }
        this.capturing_ = true;
        this.delegate.setShortcutHandlingSuspended(true);
    }
    endCapture_() {
        if (!this.capturing_) {
            return;
        }
        this.pendingShortcut_ = '';
        this.capturing_ = false;
        this.$.input.blur();
        this.error_ = ShortcutError.NO_ERROR;
        this.delegate.setShortcutHandlingSuspended(false);
        this.readonly_ = true;
    }
    clearShortcut_() {
        this.pendingShortcut_ = '';
        this.shortcut = '';
        // We commit the empty shortcut in order to clear the current shortcut
        // for the extension.
        this.commitPending_();
        this.endCapture_();
    }
    onKeyDown_(e) {
        if (this.readonly_) {
            return;
        }
        if (e.target === this.$.edit) {
            return;
        }
        if (e.keyCode === Key.ESCAPE) {
            if (!this.capturing_) {
                // If we're not currently capturing, allow escape to propagate.
                return;
            }
            // Otherwise, escape cancels capturing.
            this.endCapture_();
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        if (e.keyCode === Key.TAB) {
            // Allow tab propagation for keyboard navigation.
            return;
        }
        if (!this.capturing_) {
            this.startCapture_();
        }
        this.handleKey_(e);
    }
    onKeyUp_(e) {
        // Ignores pressing 'Space' or 'Enter' on the edit button. In 'Enter's
        // case, the edit button disappears before key-up, so 'Enter's key-up
        // target becomes the input field, not the edit button, and needs to
        // be caught explicitly.
        if (this.readonly_) {
            return;
        }
        if (e.target === this.$.edit || e.key === 'Enter') {
            return;
        }
        if (e.keyCode === Key.ESCAPE || e.keyCode === Key.TAB) {
            return;
        }
        this.handleKey_(e);
    }
    getErrorString_(_error, includeStartModifier, tooManyModifiers, needCharacter) {
        switch (this.error_) {
            case ShortcutError.INCLUDE_START_MODIFIER:
                return includeStartModifier;
            case ShortcutError.TOO_MANY_MODIFIERS:
                return tooManyModifiers;
            case ShortcutError.NEED_CHARACTER:
                return needCharacter;
            default:
                assert(this.error_ === ShortcutError.NO_ERROR);
                return '';
        }
    }
    handleKey_(e) {
        // While capturing, we prevent all events from bubbling, to prevent
        // shortcuts lacking the right modifier (F3 for example) from activating
        // and ending capture prematurely.
        e.preventDefault();
        e.stopPropagation();
        // We don't allow both Ctrl and Alt in the same keybinding.
        // TODO(devlin): This really should go in hasValidModifiers,
        // but that requires updating the existing page as well.
        if (e.ctrlKey && e.altKey) {
            this.error_ = ShortcutError.TOO_MANY_MODIFIERS;
            return;
        }
        if (!hasValidModifiers(e)) {
            this.pendingShortcut_ = '';
            this.error_ = ShortcutError.INCLUDE_START_MODIFIER;
            return;
        }
        this.pendingShortcut_ = keystrokeToString(e);
        if (!isValidKeyCode(e.keyCode)) {
            this.error_ = ShortcutError.NEED_CHARACTER;
            return;
        }
        this.error_ = ShortcutError.NO_ERROR;
        IronA11yAnnouncer.requestAvailability();
        this.dispatchEvent(new CustomEvent('iron-announce', {
            bubbles: true,
            composed: true,
            detail: {
                text: this.i18n('shortcutSet', this.computeText_()),
            },
        }));
        this.commitPending_();
        this.endCapture_();
    }
    commitPending_() {
        this.shortcut = this.pendingShortcut_;
        this.delegate.updateExtensionCommandKeybinding(this.item.id, this.command.name, this.shortcut);
    }
    computeInputAriaLabel_() {
        return this.i18n('editShortcutInputLabel', this.command.description, this.item.name);
    }
    computeEditButtonAriaLabel_() {
        return this.i18n('editShortcutButtonLabel', this.command.description, this.item.name);
    }
    computePlaceholder_() {
        if (this.readonly_) {
            return this.shortcut ? this.i18n('shortcutSet', this.computeText_()) :
                this.i18n('shortcutNotSet');
        }
        return this.i18n('shortcutTypeAShortcut');
    }
    /**
     * @return The text to be displayed in the shortcut field.
     */
    computeText_() {
        const shortcutString = this.capturing_ ? this.pendingShortcut_ : this.shortcut;
        return shortcutString.split('+').join(' + ');
    }
    getIsInvalid_() {
        return this.error_ !== ShortcutError.NO_ERROR;
    }
    onEditClick_() {
        // TODO(ghazale): The clearing functionality should be improved.
        // Instead of clicking the edit button, and then clicking elsewhere to
        // commit the "empty" shortcut, we want to introduce a separate clear
        // button.
        this.clearShortcut_();
        this.readonly_ = false;
        this.$.input.focus();
    }
}
customElements.define(ExtensionsShortcutInputElement.is, ExtensionsShortcutInputElement);

function getTemplate$e() {
    return html `<!--_html_template_start_--><style include="md-select cr-shared-style">:host{height:100%}.shortcut-card{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);color:var(--cr-primary-text-color);margin:0 auto 16px auto;padding-bottom:8px;width:var(--cr-toolbar-field-width)}.shortcut-card:last-of-type{margin-bottom:64px}#container{box-sizing:border-box;height:100%;padding-top:24px}.command-entry{align-items:start;display:flex;margin-bottom:-8px;padding-top:16px}.command-name{flex:1;margin-top:6px}.command-entry .md-select{line-height:22px;margin-inline-start:var(--cr-section-padding)}.card-title{align-items:center;border-bottom:var(--cr-separator-line);display:flex;margin-bottom:9px;padding:16px var(--cr-section-padding)}.icon{height:20px;margin-inline-end:20px;width:20px}.card-controls{margin-inline-end:20px;margin-inline-start:60px}</style>
<div id="container">
  <template is="dom-repeat" items="[[calculateShownItems_(items.*)]]">
    <div class="shortcut-card">
      <div class="card-title cr-title-text">
        <img class="icon" src="[[item.iconUrl]]" alt="">
        <span role="heading" aria-level="2">[[item.name]]</span>
      </div>
      <div class="card-controls">
        <template is="dom-repeat" items="[[item.commands]]" as="command">
          <div class="command-entry" command="[[command]]">
            <span class="command-name">[[command.description]]</span>
            <extensions-shortcut-input delegate="[[delegate]]" item="[[item]]" shortcut="[[command.keybinding]]" command="[[command]]">
            </extensions-shortcut-input>
            
            <select class="md-select" on-change="onScopeChanged_" aria-label="[[computeScopeAriaLabel_(item, command)]]" disabled$="[[computeScopeDisabled_(command)]]" value="[[
                    triggerScopeChange_(command.scope, CommandScope_)]]">
              <option value$="[[CommandScope_.CHROME]]">
                $i18n{shortcutScopeInChrome}
              </option>
              <option value$="[[CommandScope_.GLOBAL]]">
                $i18n{shortcutScopeGlobal}
              </option>
            </select>
          </div>
        </template>
      </div>
    </div>
  </template>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsKeyboardShortcutsElementBase = I18nMixin(PolymerElement);
// The UI to display and manage keyboard shortcuts set for extension commands.
class ExtensionsKeyboardShortcutsElement extends ExtensionsKeyboardShortcutsElementBase {
    static get is() {
        return 'extensions-keyboard-shortcuts';
    }
    static get template() {
        return getTemplate$e();
    }
    static get properties() {
        return {
            delegate: Object,
            items: Array,
            /**
             * Proxying the enum to be used easily by the html template.
             */
            CommandScope_: {
                type: Object,
                value: chrome.developerPrivate.CommandScope,
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('view-enter-start', this.onViewEnter_);
    }
    onViewEnter_() {
        chrome.metricsPrivate.recordUserAction('Options_ExtensionCommands');
    }
    calculateShownItems_() {
        return this.items.filter(function (item) {
            return item.commands.length > 0;
        });
    }
    /**
     * A polymer bug doesn't allow for databinding of a string property as a
     * boolean, but it is correctly interpreted from a function.
     * Bug: https://github.com/Polymer/polymer/issues/3669
     */
    hasKeybinding_(keybinding) {
        return !!keybinding;
    }
    computeScopeAriaLabel_(item, command) {
        return this.i18n('shortcutScopeLabel', command.description, item.name);
    }
    /**
     * Determines whether to disable the dropdown menu for the command's scope.
     */
    computeScopeDisabled_(command) {
        return command.isExtensionAction || !command.isActive;
    }
    /**
     * This function exists to force trigger an update when CommandScope_
     * becomes available.
     */
    triggerScopeChange_(scope) {
        return scope;
    }
    onCloseButtonClick_() {
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
    onScopeChanged_(event) {
        this.delegate.updateExtensionCommandScope(event.model.get('item.id'), event.model.get('command.name'), event.target.value);
    }
}
customElements.define(ExtensionsKeyboardShortcutsElement.is, ExtensionsKeyboardShortcutsElement);

function getTemplate$d() {
    return html `<!--_html_template_start_--><style include="cr-shared-style">.description-row{display:flex}.row-label{display:block;width:104px}paper-spinner-lite{margin-inline-end:8px}</style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">$i18n{loadErrorHeading}</div>
  <div slot="body">
    <div id="info">
      <div id="file" class="description-row" hidden$="[[!file_]]">
        <span class="row-label">$i18n{loadErrorFileLabel}</span>
        <span class="row-value">[[file_]]</span>
      </div>
      <div id="error" class="description-row">
        <span class="row-label">$i18n{loadErrorErrorLabel}</span>
        <span class="row-value">[[error_]]</span>
      </div>
    </div>
    <extensions-code-section id="code" could-not-display-code="$i18n{loadErrorCouldNotLoadManifest}">
    </extensions-code-section>
  </div>
  <div slot="button-container">
    <paper-spinner-lite active="[[retrying_]]"></paper-spinner-lite>
    <cr-button class="cancel-button" on-click="close">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" disabled="[[retrying_]]" on-click="onRetryClick_">
      $i18n{loadErrorRetry}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsLoadErrorElement extends PolymerElement {
    static get is() {
        return 'extensions-load-error';
    }
    static get template() {
        return getTemplate$d();
    }
    static get properties() {
        return {
            delegate: Object,
            loadError: Object,
            file_: {
                type: String,
                value: null,
            },
            error_: {
                type: String,
                value: null,
            },
            retrying_: Boolean,
        };
    }
    static get observers() {
        return [
            'observeLoadErrorChanges_(loadError)',
        ];
    }
    show() {
        this.$.dialog.showModal();
    }
    close() {
        this.$.dialog.close();
    }
    onRetryClick_() {
        this.retrying_ = true;
        this.delegate
            .retryLoadUnpacked(this.loadError instanceof Error ? undefined :
            this.loadError.retryGuid)
            .then(() => {
            this.close();
        }, loadError => {
            this.loadError = loadError;
            this.retrying_ = false;
        });
    }
    observeLoadErrorChanges_() {
        assert(this.loadError);
        if (this.loadError instanceof Error) {
            this.file_ = undefined;
            this.error_ = this.loadError.message;
            this.$.code.isActive = false;
            return;
        }
        this.file_ = this.loadError.path;
        this.error_ = this.loadError.error;
        const source = this.loadError.source;
        // CodeSection expects a RequestFileSourceResponse, rather than an
        // ErrorFileSource. Massage into place.
        // TODO(devlin): Make RequestFileSourceResponse use ErrorFileSource.
        const codeSectionProperties = {
            beforeHighlight: source ? source.beforeHighlight : '',
            highlight: source ? source.highlight : '',
            afterHighlight: source ? source.afterHighlight : '',
            title: '',
            message: this.loadError.error,
        };
        this.$.code.code = codeSectionProperties;
        this.$.code.isActive = true;
    }
}
customElements.define(ExtensionsLoadErrorElement.is, ExtensionsLoadErrorElement);

function getTemplate$c() {
    return html `<!--_html_template_start_--><style>#icon{height:32px;margin-inline-end:10px;width:32px}#icon-and-name-wrapper{align-items:center;display:flex}ExtensionOptions{display:block;height:100%;overflow:hidden}cr-dialog::part(dialog){height:var(--dialog-height);opacity:var(--dialog-opacity,0);transition:opacity .1s ease .1s;width:var(--dialog-width)}cr-dialog::part(wrapper){height:100%;max-height:initial;overflow:hidden}cr-dialog #body{height:100%;padding:0}cr-dialog{--cr-dialog-body-border-bottom:none;--cr-dialog-body-border-top:none;--scroll-border:none}cr-dialog::part(body-container){height:100%;min-height:initial}</style>

<cr-dialog id="dialog" close-text="$i18n{close}" on-close="onClose_" show-close-button>
  <div slot="title">
    <div id="icon-and-name-wrapper">
      <img id="icon" src="[[data_.iconUrl]]" alt="">
      <span>[[data_.name]]</span>
    </div>
  </div>
  <div slot="body" id="body">
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @return A signal that the document is ready. Need to wait for this, otherwise
 *     the custom ExtensionOptions element might not have been registered yet.
 */
function whenDocumentReady() {
    if (document.readyState === 'complete') {
        return Promise.resolve();
    }
    return new Promise(function (resolve) {
        document.addEventListener('readystatechange', function f() {
            if (document.readyState === 'complete') {
                document.removeEventListener('readystatechange', f);
                resolve();
            }
        });
    });
}
// The minimum width in pixels for the options dialog.
const OptionsDialogMinWidth = 400;
// The maximum height in pixels for the options dialog.
const OptionsDialogMaxHeight = 640;
class ExtensionsOptionsDialogElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.preferredSize_ = null;
        this.debouncer_ = null;
        this.eventTracker_ = new EventTracker();
    }
    static get is() {
        return 'extensions-options-dialog';
    }
    static get template() {
        return getTemplate$c();
    }
    static get properties() {
        return {
            extensionOptions_: Object,
            data_: Object,
        };
    }
    get open() {
        return this.$.dialog.open;
    }
    /**
     * Resizes the dialog to the width/height stored in |preferredSize_|, taking
     * into account the window width/height.
     */
    updateDialogSize_() {
        let headerHeight = this.$.body.offsetTop;
        if (this.$.body.assignedSlot && this.$.body.assignedSlot.parentElement) {
            headerHeight = this.$.body.assignedSlot.parentElement.offsetTop;
        }
        const maxHeight = Math.min(0.9 * window.innerHeight, OptionsDialogMaxHeight);
        const effectiveHeight = Math.min(maxHeight, headerHeight + this.preferredSize_.height);
        const effectiveWidth = Math.max(OptionsDialogMinWidth, this.preferredSize_.width);
        this.$.dialog.style.setProperty('--dialog-height', `${effectiveHeight}px`);
        this.$.dialog.style.setProperty('--dialog-width', `${effectiveWidth}px`);
        this.$.dialog.style.setProperty('--dialog-opacity', '1');
    }
    show(data) {
        this.data_ = data;
        whenDocumentReady().then(() => {
            if (!this.extensionOptions_) {
                this.extensionOptions_ = document.createElement('ExtensionOptions');
            }
            this.extensionOptions_.extension = this.data_.id;
            this.extensionOptions_.onclose = () => this.$.dialog.close();
            const boundUpdateDialogSize = this.updateDialogSize_.bind(this);
            this.extensionOptions_.onpreferredsizechanged =
                (e) => {
                    if (!this.$.dialog.open) {
                        this.$.dialog.showModal();
                    }
                    this.preferredSize_ = e;
                    this.debouncer_ = Debouncer.debounce(this.debouncer_, timeOut.after(50), boundUpdateDialogSize);
                };
            // Add a 'resize' such that the dialog is resized when window size
            // changes.
            this.eventTracker_.add(window, 'resize', boundUpdateDialogSize);
            this.$.body.appendChild(this.extensionOptions_);
        });
    }
    onClose_() {
        this.extensionOptions_.onpreferredsizechanged = null;
        this.eventTracker_.removeAll();
        const currentPage = navigation.getCurrentPage();
        // We update the page when the options dialog closes, but only if we're
        // still on the details page. We could be on a different page if the
        // user hit back while the options dialog was visible; in that case, the
        // new page is already correct.
        if (currentPage && currentPage.page === Page.DETAILS) {
            // This will update the currentPage_ and the NavigationHelper; since
            // the active page is already the details page, no main page
            // transition occurs.
            navigation.navigateTo({ page: Page.DETAILS, extensionId: currentPage.extensionId });
        }
    }
}
customElements.define(ExtensionsOptionsDialogElement.is, ExtensionsOptionsDialogElement);

const styleMod = document.createElement('dom-module');
styleMod.appendChild(html `
  <template>
    <style>
.cr-nav-menu-item{--iron-icon-fill-color:var(--google-grey-700);--iron-icon-height:20px;--iron-icon-width:20px;--cr-icon-ripple-size:20px;align-items:center;border-end-end-radius:100px;border-start-end-radius:100px;box-sizing:border-box;color:var(--google-grey-900);display:flex;font-size:14px;font-weight:500;line-height:14px;margin-inline-end:2px;margin-inline-start:1px;min-height:40px;overflow:hidden;padding-block-end:10px;padding-block-start:10px;padding-inline-start:23px;position:relative;text-decoration:none}:host-context(cr-drawer) .cr-nav-menu-item{margin-inline-end:8px}.cr-nav-menu-item:hover{background:var(--google-grey-200)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:var(--google-blue-600);background:var(--google-blue-50);color:var(--google-blue-700)}@media (prefers-color-scheme:dark){.cr-nav-menu-item{--iron-icon-fill-color:var(--google-grey-500);color:#fff}.cr-nav-menu-item:hover{--iron-icon-fill-color:white;background:var(--google-grey-800)}.cr-nav-menu-item[selected]{--iron-icon-fill-color:black;background:var(--google-blue-300);color:var(--google-grey-900)}}.cr-nav-menu-item:focus{outline:auto 5px -webkit-focus-ring-color;z-index:1}.cr-nav-menu-item:focus:not([selected]):not(:hover){background:0 0}.cr-nav-menu-item iron-icon{flex-shrink:0;margin-inline-end:20px;pointer-events:none;vertical-align:top}
    </style>
  </template>
`.content);
styleMod.register('cr-nav-menu-item-style');

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
 * @polymerBehavior IronMultiSelectableBehavior
 */
const IronMultiSelectableBehaviorImpl = {
  properties: {

    /**
     * If true, multiple selections are allowed.
     */
    multi: {type: Boolean, value: false, observer: 'multiChanged'},

    /**
     * Gets or sets the selected elements. This is used instead of `selected`
     * when `multi` is true.
     */
    selectedValues: {
      type: Array,
      notify: true,
      value: function() {
        return [];
      }
    },

    /**
     * Returns an array of currently selected items.
     */
    selectedItems: {
      type: Array,
      readOnly: true,
      notify: true,
      value: function() {
        return [];
      }
    },

  },

  observers: ['_updateSelected(selectedValues.splices)'],

  /**
   * Selects the given value. If the `multi` property is true, then the selected
   * state of the `value` will be toggled; otherwise the `value` will be
   * selected.
   *
   * @method select
   * @param {string|number} value the value to select.
   */
  select: function(value) {
    if (this.multi) {
      this._toggleSelected(value);
    } else {
      this.selected = value;
    }
  },

  multiChanged: function(multi) {
    this._selection.multi = multi;
    this._updateSelected();
  },

  // UNUSED, FOR API COMPATIBILITY
  get _shouldUpdateSelection() {
    return this.selected != null ||
        (this.selectedValues != null && this.selectedValues.length);
  },

  _updateAttrForSelected: function() {
    if (!this.multi) {
      IronSelectableBehavior._updateAttrForSelected.apply(this);
    } else if (this.selectedItems && this.selectedItems.length > 0) {
      this.selectedValues =
          this.selectedItems
              .map(
                  function(selectedItem) {
                    return this._indexToValue(this.indexOf(selectedItem));
                  },
                  this)
              .filter(function(unfilteredValue) {
                return unfilteredValue != null;
              }, this);
    }
  },

  _updateSelected: function() {
    if (this.multi) {
      this._selectMulti(this.selectedValues);
    } else {
      this._selectSelected(this.selected);
    }
  },

  _selectMulti: function(values) {
    values = values || [];

    var selectedItems =
        (this._valuesToItems(values) || []).filter(function(item) {
          return item !== null && item !== undefined;
        });

    // clear all but the current selected items
    this._selection.clear(selectedItems);

    // select only those not selected yet
    for (var i = 0; i < selectedItems.length; i++) {
      this._selection.setItemSelected(selectedItems[i], true);
    }

    // Check for items, since this array is populated only when attached
    if (this.fallbackSelection && !this._selection.get().length) {
      var fallback = this._valueToItem(this.fallbackSelection);
      if (fallback) {
        this.select(this.fallbackSelection);
      }
    }
  },

  _selectionChange: function() {
    var s = this._selection.get();
    if (this.multi) {
      this._setSelectedItems(s);
      this._setSelectedItem(s.length ? s[0] : null);
    } else {
      if (s !== null && s !== undefined) {
        this._setSelectedItems([s]);
        this._setSelectedItem(s);
      } else {
        this._setSelectedItems([]);
        this._setSelectedItem(null);
      }
    }
  },

  _toggleSelected: function(value) {
    var i = this.selectedValues.indexOf(value);
    var unselected = i < 0;
    if (unselected) {
      this.push('selectedValues', value);
    } else {
      this.splice('selectedValues', i, 1);
    }
  },

  _valuesToItems: function(values) {
    return (values == null) ? null : values.map(function(value) {
      return this._valueToItem(value);
    }, this);
  }
};

/** @polymerBehavior */
const IronMultiSelectableBehavior =
    [IronSelectableBehavior, IronMultiSelectableBehaviorImpl];

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
`iron-selector` is an element which can be used to manage a list of elements
that can be selected.  Tapping on the item will make the item selected.  The
`selected` indicates which item is being selected.  The default is to use the
index of the item.

Example:

    <iron-selector selected="0">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </iron-selector>

If you want to use the attribute value of an element for `selected` instead of
the index, set `attrForSelected` to the name of the attribute.  For example, if
you want to select item by `name`, set `attrForSelected` to `name`.

Example:

    <iron-selector attr-for-selected="name" selected="foo">
      <div name="foo">Foo</div>
      <div name="bar">Bar</div>
      <div name="zot">Zot</div>
    </iron-selector>

You can specify a default fallback with `fallbackSelection` in case the
`selected` attribute does not match the `attrForSelected` attribute of any
elements.

Example:

      <iron-selector attr-for-selected="name" selected="non-existing"
                     fallback-selection="default">
        <div name="foo">Foo</div>
        <div name="bar">Bar</div>
        <div name="default">Default</div>
      </iron-selector>

Note: When the selector is multi, the selection will set to `fallbackSelection`
iff the number of matching elements is zero.

`iron-selector` is not styled. Use the `iron-selected` CSS class to style the
selected element.

Example:

    <style>
      .iron-selected {
        background: #eee;
      }
    </style>

    ...

    <iron-selector selected="0">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
    </iron-selector>

@demo demo/index.html
*/

Polymer({

  is: 'iron-selector',

  behaviors: [IronMultiSelectableBehavior]

});

function getTemplate$b() {
    return html `<!--_html_template_start_--><style include="cr-icons cr-hidden-style cr-nav-menu-item-style
    cr-shared-style">:host{--sidebar-inactive-color:#5a5a5a;color:var(--sidebar-inactive-color);display:flex;flex-direction:column;height:100%;overflow-x:hidden;overflow-y:auto;width:var(--sidebar-width)}@media (prefers-color-scheme:dark){:host{--sidebar-inactive-color:var(--cr-primary-text-color)}}#sectionMenu{padding-top:8px;user-select:none}.separator{border-top:var(--cr-separator-line);margin:8px 0}#moreExtensions{align-items:center;display:flex;margin-bottom:8px}#web-store-icon{--iron-icon-height:24px;--iron-icon-width:24px;margin-inline-end:18px;margin-inline-start:-2px}#discover-more-text{line-height:19px;margin-inline-end:10px}</style>
<iron-selector id="sectionMenu" selected-attribute="selected" attr-for-selected="data-path" selected="[[selectedPath_]]">
  
  <a class="cr-nav-menu-item" id="sectionsExtensions" href="/" on-click="onLinkClick_" data-path="items-list">
    <iron-icon icon="extensions-icons:my_extensions"></iron-icon>
    $i18n{sidebarExtensions}
    <paper-ripple></paper-ripple>
  </a>
  <a class="cr-nav-menu-item" id="sectionsSitePermissions" hidden="[[!enableEnhancedSiteControls]]" href="/sitePermissions" on-click="onLinkClick_" data-path="site-permissions">
    <iron-icon icon="extensions-icons:site_permissions"></iron-icon>
    $i18n{sitePermissions}
    <paper-ripple></paper-ripple>
  </a>
  <a class="cr-nav-menu-item" id="sectionsShortcuts" href="/shortcuts" on-click="onLinkClick_" data-path="keyboard-shortcuts">
      <iron-icon icon="extensions-icons:keyboard_shortcuts"></iron-icon>
    $i18n{keyboardShortcuts}
    <paper-ripple></paper-ripple>
  </a>
</iron-selector>
<div>
  <div class="separator"></div>
  <div class="cr-nav-menu-item" id="moreExtensions">
    <iron-icon id="web-store-icon" icon="extensions-icons:web_store">
    </iron-icon>
    <span id="discover-more-text" class="cr-secondary-text" on-click="onMoreExtensionsClick_" inner-h-t-m-l="[[discoverMoreText_]]"></span>
    <paper-ripple></paper-ripple>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsSidebarElementBase = I18nMixin(PolymerElement);
class ExtensionsSidebarElement extends ExtensionsSidebarElementBase {
    constructor() {
        super(...arguments);
        /**
         * The ID of the listener on |navigation|. Stored so that the
         * listener can be removed when this element is detached (happens in tests).
         */
        this.navigationListener_ = null;
    }
    static get is() {
        return 'extensions-sidebar';
    }
    static get template() {
        return getTemplate$b();
    }
    static get properties() {
        return {
            enableEnhancedSiteControls: Boolean,
            /**
             * The data path/page that identifies the entry to be selected in the
             * sidebar. Note that this may not match the page that's actually
             * displayed.
             */
            selectedPath_: String,
            /**
             * The text displayed in the sidebar containing the link to open the
             * Chrome Web Store to get more extensions.
             */
            discoverMoreText_: {
                type: String,
                computed: 'computeDiscoverMoreText_()',
            },
        };
    }
    ready() {
        super.ready();
        this.setAttribute('role', 'navigation');
        this.computeSelectedPath_(navigation.getCurrentPage().page);
    }
    connectedCallback() {
        super.connectedCallback();
        this.navigationListener_ = navigation.addListener(newPage => {
            this.computeSelectedPath_(newPage.page);
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.navigationListener_);
        assert(navigation.removeListener(this.navigationListener_));
        this.navigationListener_ = null;
    }
    computeSelectedPath_(page) {
        switch (page) {
            case Page.SITE_PERMISSIONS:
            case Page.SITE_PERMISSIONS_ALL_SITES:
                this.selectedPath_ = Page.SITE_PERMISSIONS;
                break;
            case Page.SHORTCUTS:
                this.selectedPath_ = Page.SHORTCUTS;
                break;
            default:
                this.selectedPath_ = Page.LIST;
        }
    }
    onLinkClick_(e) {
        e.preventDefault();
        navigation.navigateTo({ page: e.target.dataset['path'] });
        this.dispatchEvent(new CustomEvent('close-drawer', { bubbles: true, composed: true }));
    }
    onMoreExtensionsClick_(e) {
        if (e.target.tagName === 'A') {
            chrome.metricsPrivate.recordUserAction('Options_GetMoreExtensions');
        }
    }
    computeDiscoverMoreText_() {
        return this.i18nAdvanced('sidebarDiscoverMore', {
            tags: ['a'],
            attrs: ['target', 'on-click'],
            substitutions: [loadTimeData.getString('getMoreExtensionsUrl')],
        });
    }
}
customElements.define(ExtensionsSidebarElement.is, ExtensionsSidebarElement);

function getTemplate$a() {
    return html `<!--_html_template_start_--><style include="cr-shared-style md-select">:host{--radio-group-height:132px;--dialog-height:360px}#dialog-title{display:flex;flex-direction:column;gap:8px}#title-subtext{color:var(--cr-secondary-text-color);font-size:81.25%}cr-radio-group{padding-inline:8px}.site-access-list{max-height:var(--dialog-height)}.indented-site-access-list{margin-inline-start:36px;max-height:calc(var(--dialog-height) - var(--radio-group-height))}.extension-row{--md-select-width:180px;align-items:center;border-top:var(--cr-separator-line);display:flex;height:32px;padding:12px 0}.extension-row:first-child{border-top:none}.extension-icon{height:24px;margin-inline-end:12px;width:24px}.extension-name{flex-grow:1;margin-inline-end:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="title" id="dialog-title">
    <div>$i18n{sitePermissionsEditPermissionsDialogTitle}</div>
    <div id="title-subtext">
      <span id="site">[[getSiteWithoutSubdomainSpecifier_(site)]]</span>
      <span id="includesSubdomains" hidden$="[[!matchesSubdomains_(site)]]">
        $i18n{sitePermissionsIncludesSubdomains}
      </span>
    </div>
  </div>
  <div slot="header">
    
    <template is="dom-if" if="[[!matchesSubdomains_(site)]]">
      <cr-radio-group selected="{{siteSet_}}">
        <cr-radio-button hidden="[[!showPermittedOption_]]" name="[[siteSetEnum_.USER_PERMITTED]]" label="[[getPermittedSiteLabel_(site)]]">
        </cr-radio-button>
        <cr-radio-button name="[[siteSetEnum_.USER_RESTRICTED]]" label="[[getRestrictedSiteLabel_(site)]]">
        </cr-radio-button>
        <cr-radio-button name="[[siteSetEnum_.EXTENSION_SPECIFIED]]" label="$i18n{editSitePermissionsCustomizePerExtension}">
        </cr-radio-button>
      </cr-radio-group>
    </template>
  </div>
  <div slot="body">
    <template is="dom-if" if="[[showExtensionSiteAccessData_(siteSet_)]]">
      <div class$="[[getDialogBodyContainerClass_(site)]]">
        <template is="dom-repeat" items="[[extensionSiteAccessData_]]">
          <div class="extension-row">
            <img class="extension-icon" src="[[item.iconUrl]]" alt="">
            <span class="extension-name">[[item.name]]</span>
            <select class="extension-host-access md-select" disabled="[[item.addedByPolicy]]" on-change="onHostAccessChange_" value="[[getExtensionHostAccess_(item.id, item.siteAccess)]]">
              <option value="[[hostAccessEnum_.ON_CLICK]]">
                $i18n{sitePermissionsAskOnEveryVisit}
              </option>
              <option value="[[hostAccessEnum_.ON_SPECIFIC_SITES]]">
                $i18n{sitePermissionsAlwaysOnThisSite}
              </option>
              <option value="[[hostAccessEnum_.ON_ALL_SITES]]" disabled="[[!item.canRequestAllSites]]">
                $i18n{sitePermissionsAlwaysOnAllSites}
              </option>
            </select>
          </div>
        </template>
      </div>
    </template>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" id="submit" on-click="onSubmitClick_">
      $i18n{save}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const EXTENSION_SPECIFIED = chrome.developerPrivate.SiteSet.EXTENSION_SPECIFIED;
// A list of possible schemes that can be specified by extension host
// permissions. This is derived from URLPattern::SchemeMasks.
const VALID_SCHEMES = [
    '*',
    'http',
    'https',
    'file',
    'ftp',
    'chrome',
    'chrome-extension',
    'filesystem',
    'ftp',
    'ws',
    'wss',
    'data',
    'uuid-in-package',
];
const SitePermissionsEditPermissionsDialogElementBase = I18nMixin(PolymerElement);
class SitePermissionsEditPermissionsDialogElement extends SitePermissionsEditPermissionsDialogElementBase {
    static get is() {
        return 'site-permissions-edit-permissions-dialog';
    }
    static get template() {
        return getTemplate$a();
    }
    static get properties() {
        return {
            delegate: Object,
            extensions: {
                type: Array,
                value: () => [],
                observer: 'onExtensionsUpdated_',
            },
            /**
             * The current siteSet for `site`, as stored in the backend. Specifies
             * whether `site` is a user specified permitted or restricted site, or is
             * a pattern specified by an extension's host permissions..
             */
            originalSiteSet: String,
            /**
             * The url of the site whose permissions are currently being edited.
             */
            site: String,
            /**
             * The temporary siteSet for `site` as displayed in the dialog. Will be
             * saved to the backend when the dialog is submitted.
             */
            siteSet_: {
                type: String,
                observer: 'onSiteSetUpdated_',
            },
            siteSetEnum_: {
                type: Object,
                value: chrome.developerPrivate.SiteSet,
            },
            extensionSiteAccessData_: {
                type: Array,
                value: () => [],
            },
            showPermittedOption_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableUserPermittedSites'),
            },
            /**
             * Proxying the enum to be used easily by the html template.
             */
            hostAccessEnum_: {
                type: Object,
                value: chrome.developerPrivate.HostAccess,
            },
        };
    }
    constructor() {
        super();
        this.unsavedExtensionsIdToHostAccess_ = new Map();
    }
    ready() {
        super.ready();
        // Setting this to an initial value will trigger a call to
        // `updateExtensionSiteAccessData_`.
        this.siteSet_ = this.originalSiteSet;
        // If `this.site` matches subdomains, then it should not be a user specified
        // site.
        assert(!this.matchesSubdomains_() ||
            this.originalSiteSet === EXTENSION_SPECIFIED);
    }
    onExtensionsUpdated_(extensions) {
        this.extensionsIdToInfo_ = new Map();
        for (const extension of extensions) {
            this.extensionsIdToInfo_.set(extension.id, extension);
        }
        this.updateExtensionSiteAccessData_(this.siteSet_);
    }
    onSiteSetUpdated_(siteSet) {
        this.updateExtensionSiteAccessData_(siteSet);
    }
    // Returns true if this.site is a just a host by checking whether or not it
    // starts with a valid scheme. If not, assume the site is a full URL.
    // Different components that use this dialog may supply either a URL or just a
    // host.
    isSiteHostOnly_() {
        return !VALID_SCHEMES.some(scheme => this.site.startsWith(`${scheme}://`));
    }
    // Fetches all extensions that have requested access to `this.site` along with
    // their access status. This information is joined with some fields in
    // `this.extensions` to update `this.extensionSiteAccessData_`.
    async updateExtensionSiteAccessData_(siteSet) {
        // Avoid fetching the list of matching extensions if they will not be
        // displayed.
        if (siteSet !== EXTENSION_SPECIFIED) {
            return;
        }
        const siteToCheck = this.isSiteHostOnly_() ? `*://${this.site}/` : `${this.site}/`;
        const matchingExtensionsInfo = await this.delegate.getMatchingExtensionsForSite(siteToCheck);
        const extensionSiteAccessData = [];
        matchingExtensionsInfo.forEach(({ id, siteAccess, canRequestAllSites }) => {
            assert(this.extensionsIdToInfo_.has(id));
            const { name, iconUrl } = this.extensionsIdToInfo_.get(id);
            const addedByPolicy = getItemSource(this.extensionsIdToInfo_.get(id)) ===
                SourceType.POLICY;
            extensionSiteAccessData.push({ id, name, iconUrl, siteAccess, addedByPolicy, canRequestAllSites });
            // Remove the unsaved HostAccess from `unsavedExtensionsIdToHostAccess_`
            // if it is now the same as `siteAccess`.
            if (this.unsavedExtensionsIdToHostAccess_.get(id) === siteAccess) {
                this.unsavedExtensionsIdToHostAccess_.delete(id);
            }
        });
        // Remove any HostAccess from `unsavedExtensionsIdToHostAccess_` for
        // extensions that are no longer in `extensionSiteAccessData`.
        for (const extensionId of this.unsavedExtensionsIdToHostAccess_.keys()) {
            if (!this.extensionsIdToInfo_.has(extensionId)) {
                this.unsavedExtensionsIdToHostAccess_.delete(extensionId);
            }
        }
        this.extensionSiteAccessData_ = extensionSiteAccessData;
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    async onSubmitClick_() {
        if (this.siteSet_ !== this.originalSiteSet) {
            // If `this.site` has a scheme (and can be considered a full url), use it
            // as is. Otherwise if `this.site` is just a host, append the http and
            // https schemes to it.
            const sitesToChange = this.isSiteHostOnly_() ?
                [`http://${this.site}`, `https://${this.site}`] :
                [this.site];
            if (this.siteSet_ === EXTENSION_SPECIFIED) {
                await this.delegate.removeUserSpecifiedSites(this.originalSiteSet, sitesToChange);
            }
            else {
                await this.delegate.addUserSpecifiedSites(this.siteSet_, sitesToChange);
            }
        }
        if (this.siteSet_ === EXTENSION_SPECIFIED &&
            this.unsavedExtensionsIdToHostAccess_.size) {
            const updates = [];
            this.unsavedExtensionsIdToHostAccess_.forEach((val, key) => {
                updates.push({ id: key, siteAccess: val });
            });
            // For changing extensions' site access, first. the wildcard path "/*" is
            // added to the end. Then, if the site does not specify a scheme, use the
            // wildcard scheme.
            const siteToUpdate = this.isSiteHostOnly_() ? `*://${this.site}/` : `${this.site}/`;
            await this.delegate.updateSiteAccess(siteToUpdate, updates);
        }
        this.$.dialog.close();
    }
    getSiteWithoutSubdomainSpecifier_() {
        return this.site.replace(SUBDOMAIN_SPECIFIER, '');
    }
    getPermittedSiteLabel_() {
        return this.i18n('editSitePermissionsAllowAllExtensions', this.site);
    }
    getRestrictedSiteLabel_() {
        return this.i18n('editSitePermissionsRestrictExtensions', this.site);
    }
    matchesSubdomains_() {
        return matchesSubdomains(this.site);
    }
    showExtensionSiteAccessData_() {
        return this.siteSet_ === EXTENSION_SPECIFIED;
    }
    getDialogBodyContainerClass_() {
        return this.matchesSubdomains_() ? 'site-access-list' :
            'indented-site-access-list';
    }
    // Returns the value to be displayed for the <select> element for the
    // extension's host access. This shows the unsaved HostAccess value that was
    // changed by the user. Otherwise, show the preexisting HostAccess value.
    getExtensionHostAccess_(extensionId, originalSiteAccess) {
        return this.unsavedExtensionsIdToHostAccess_.get(extensionId) ||
            originalSiteAccess;
    }
    onHostAccessChange_(e) {
        const selectMenu = this.shadowRoot.querySelectorAll('.extension-host-access')[e.model.index];
        assert(selectMenu);
        const originalSiteAccess = e.model.item.siteAccess;
        const newSiteAccess = selectMenu.value;
        // Sanity check that extensions that don't request all sites access cannot
        // request all sites access from the dialog.
        assert(e.model.item.canRequestAllSites ||
            newSiteAccess !== chrome.developerPrivate.HostAccess.ON_ALL_SITES);
        if (originalSiteAccess === newSiteAccess) {
            this.unsavedExtensionsIdToHostAccess_.delete(e.model.item.id);
        }
        else {
            this.unsavedExtensionsIdToHostAccess_.set(e.model.item.id, newSiteAccess);
        }
    }
}
customElements.define(SitePermissionsEditPermissionsDialogElement.is, SitePermissionsEditPermissionsDialogElement);

function getTemplate$9() {
    return html `<!--_html_template_start_--><style include="cr-shared-style cr-icons shared-style">#site-list-header-container{align-items:center;display:flex;justify-content:space-between}#no-sites{color:var(--cr-secondary-text-color);margin:var(--cr-section-padding)}.site-row{align-items:center;display:flex;height:var(--cr-section-min-height);margin-inline-start:24px}#sites-list{margin:12px 0}.site{flex-grow:1;margin:0 calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin));overflow:hidden;text-overflow:ellipsis}.separator{margin:0 calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin))}</style>
<div id="site-list-header-container">
  <span>[[header]]</span>
  <cr-button id="addSite" on-click="onAddSiteClick_">$i18n{add}</cr-button>
</div>
<div id="no-sites" hidden$="[[hasSites_(sites)]]">$i18n{noSitesAdded}</div>
<div id="sites-list" hidden$="[[!hasSites_(sites)]]">
  <template is="dom-repeat" items="[[sites]]">
    <div class="site-row">
      <div class="site-favicon" style$="background-image:[[getFaviconUrl_(item)]]"></div>
      <span class="site">[[item]]</span>
      <cr-icon-button class="icon-more-vert no-overlap" on-click="onDotsClick_">
      </cr-icon-button>
    </div>
  </template>
</div>

<cr-action-menu id="siteActionMenu">
  <button class="dropdown-item" id="edit-site-url" on-click="onEditSiteUrlClick_">
    $i18n{sitePermissionsEditUrl}
  </button>
  <button class="dropdown-item" id="edit-site-permissions" on-click="onEditSitePermissionsClick_">
    $i18n{sitePermissionsEditPermissions}
  </button>
  <button class="dropdown-item" id="remove-site" on-click="onRemoveSiteClick_">
    $i18n{remove}
  </button>
</cr-action-menu>

<template is="dom-if" if="[[showEditSiteUrlDialog_]]" restamp>
  <site-permissions-edit-url-dialog delegate="[[delegate]]" site-to-edit="[[siteToEdit_]]" site-set="[[siteSet]]" on-close="onEditSiteUrlDialogClose_">
  </site-permissions-edit-url-dialog>
</template>

<template is="dom-if" if="[[showEditSitePermissionsDialog_]]" restamp>
  <site-permissions-edit-permissions-dialog delegate="[[delegate]]" extensions="[[extensions]]" site="[[siteToEdit_]]" original-site-set="[[siteSet]]" on-close="onEditSitePermissionsDialogClose_">
  </site-permissions-edit-permissions-dialog>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsSitePermissionsListElement extends PolymerElement {
    constructor() {
        super(...arguments);
        // The element to return focus to once the site input dialog closes. If
        // specified, this is the 3 dots menu for the site just edited, otherwise it's
        // the add site button.
        this.siteToEditAnchorElement_ = null;
    }
    static get is() {
        return 'site-permissions-list';
    }
    static get template() {
        return getTemplate$9();
    }
    static get properties() {
        return {
            delegate: Object,
            extensions: Array,
            header: String,
            siteSet: String,
            sites: Array,
            showEditSiteUrlDialog_: {
                type: Boolean,
                value: false,
            },
            showEditSitePermissionsDialog_: {
                type: Boolean,
                value: false,
            },
            /**
             * The site currently being edited if the user has opened the action menu
             * for a given site.
             */
            siteToEdit_: {
                type: String,
                value: null,
            },
        };
    }
    hasSites_() {
        return !!this.sites.length;
    }
    getFaviconUrl_(url) {
        return getFaviconUrl(url);
    }
    focusOnAnchor_() {
        // Return focus to the three dots menu once a site has been edited.
        // TODO(crbug.com/1298326): If the edited site is the only site in the
        // list, focus is not on the three dots menu.
        assert(this.siteToEditAnchorElement_, 'Site Anchor');
        focusWithoutInk(this.siteToEditAnchorElement_);
        this.siteToEditAnchorElement_ = null;
    }
    onAddSiteClick_() {
        assert(!this.showEditSitePermissionsDialog_);
        this.siteToEdit_ = null;
        this.showEditSiteUrlDialog_ = true;
    }
    onEditSiteUrlDialogClose_() {
        this.showEditSiteUrlDialog_ = false;
        if (this.siteToEdit_ !== null) {
            this.focusOnAnchor_();
        }
        this.siteToEdit_ = null;
    }
    onEditSitePermissionsDialogClose_() {
        this.showEditSitePermissionsDialog_ = false;
        assert(this.siteToEdit_, 'Site To Edit');
        this.focusOnAnchor_();
        this.siteToEdit_ = null;
    }
    onDotsClick_(e) {
        this.siteToEdit_ = e.model.item;
        assert(!this.showEditSitePermissionsDialog_);
        this.$.siteActionMenu.showAt(e.target);
        this.siteToEditAnchorElement_ = e.target;
    }
    onEditSitePermissionsClick_() {
        this.closeActionMenu_();
        assert(this.siteToEdit_ !== null);
        this.showEditSitePermissionsDialog_ = true;
    }
    onEditSiteUrlClick_() {
        this.closeActionMenu_();
        assert(this.siteToEdit_ !== null);
        this.showEditSiteUrlDialog_ = true;
    }
    onRemoveSiteClick_() {
        assert(this.siteToEdit_, 'Site To Edit');
        this.delegate.removeUserSpecifiedSites(this.siteSet, [this.siteToEdit_])
            .then(() => {
            this.closeActionMenu_();
            this.siteToEdit_ = null;
        });
    }
    closeActionMenu_() {
        const menu = this.$.siteActionMenu;
        assert(menu.open);
        menu.close();
    }
}
customElements.define(ExtensionsSitePermissionsListElement.is, ExtensionsSitePermissionsListElement);

function getTemplate$8() {
    return html `<!--_html_template_start_--><style include="cr-shared-style shared-style">#container{box-sizing:border-box}#header{font-size:.88rem;margin:31px auto 16px auto;width:var(--cr-toolbar-field-width)}#site-permissions-container{background-color:var(--cr-card-background-color);border-radius:var(--cr-card-border-radius);box-shadow:var(--cr-card-shadow);color:var(--cr-primary-text-color);margin:0 auto;width:var(--cr-toolbar-field-width)}#site-lists{box-sizing:border-box;padding:var(--cr-section-padding) var(--cr-section-padding) 0}cr-link-row{padding-inline-end:28px}</style>
<div class="page-container" id="container">
  <div id="header">$i18n{sitePermissionsPageTitle}</div>
  <div id="site-permissions-container">
    <div id="site-lists">
      <template is="dom-if" if="[[showPermittedSites_]]">
        <site-permissions-list delegate="[[delegate]]" extensions="[[extensions]]" header="$i18n{permittedSites}" site-set="[[siteSetEnum_.USER_PERMITTED]]" sites="[[permittedSites]]"></site-permissions-list>
      </template>
      <site-permissions-list delegate="[[delegate]]" extensions="[[extensions]]" header="$i18n{restrictedSites}" site-set="[[siteSetEnum_.USER_RESTRICTED]]" sites="[[restrictedSites]]"></site-permissions-list>
    </div>
    <cr-link-row class="hr" id="allSitesLink" label="$i18n{sitePermissionsViewAllSites}" on-click="onAllSitesLinkClick_">
    </cr-link-row>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsSitePermissionsElementBase = SiteSettingsMixin(PolymerElement);
class ExtensionsSitePermissionsElement extends ExtensionsSitePermissionsElementBase {
    static get is() {
        return 'extensions-site-permissions';
    }
    static get template() {
        return getTemplate$8();
    }
    static get properties() {
        return {
            extensions: Array,
            showPermittedSites_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableUserPermittedSites'),
            },
            siteSetEnum_: {
                type: Object,
                value: chrome.developerPrivate.SiteSet,
            },
        };
    }
    onAllSitesLinkClick_() {
        navigation.navigateTo({ page: Page.SITE_PERMISSIONS_ALL_SITES });
    }
}
customElements.define(ExtensionsSitePermissionsElement.is, ExtensionsSitePermissionsElement);

function getTemplate$7() {
    return html `<!--_html_template_start_--><style include="cr-shared-style cr-icons shared-style">#etld-row{align-items:center;display:flex;height:var(--cr-section-two-line-min-height)}.site-and-subtext{display:flex;flex-direction:column;flex-grow:1;margin:0 calc(var(--cr-section-padding) + var(--cr-icon-ripple-margin));overflow:hidden}.site-wrapper{display:flex}.site{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.includes-subdomains{color:var(--cr-secondary-text-color);flex-shrink:0;margin-inline-start:4px}.site-subtext{color:var(--cr-secondary-text-color)}#sites-list{margin-inline-start:var(--cr-section-indent-padding)}.site-row{align-items:center;display:flex;height:var(--cr-section-min-height)}</style>
<div id="etld-row" class$="[[getClassForIndex_(listIndex)]]">
  <div class="site-favicon" style$="background-image:[[getEtldOrSiteFaviconUrl_(data)]]"></div>
  <div class="site-and-subtext">
    <div class="site-wrapper">
      <span id="etldOrSite" class="site">[[getDisplayUrl_(data)]]</span>
      <span id="etldOrSiteIncludesSubdomains" class="includes-subdomains" hidden$="[[!etldOrFirstSiteMatchesSubdomains_(data)]]">
        $i18n{sitePermissionsIncludesSubdomains}
      </span>
    </div>
    <span id="etldOrSiteSubtext" class="site-subtext">
      [[getEtldOrSiteSubText_(data)]]
    </span>
  </div>
  <template is="dom-if" if="[[isExpandable_]]">
    <cr-expand-button no-hover id="expand-sites-button" expanded="{{expanded_}}">
    </cr-expand-button>
  </template>
  <template is="dom-if" if="[[!isExpandable_]]">
    <cr-icon-button class="subpage-arrow" id="edit-one-site-button" on-click="onEditSiteClick_">
    </cr-icon-button>
  </template>
</div>
<div id="sites-list" hidden$="[[!expanded_]]">
  <template is="dom-repeat" items="[[data.sites]]">
    <div class="site-row hr">
      <div class="site-favicon" style$="background-image:[[getFaviconUrl_(item.site)]]"></div>
      <div class="site-and-subtext">
        <div class="site-wrapper">
          <span class="site">
            [[getSiteWithoutSubdomainSpecifier_(item.site)]]
          </span>
          <span class="includes-subdomains" hidden$="[[!matchesSubdomains_(item.site)]]">
            $i18n{sitePermissionsIncludesSubdomains}
          </span>
        </div>
        <span class="site-subtext">[[getSiteSubtext_(item)]]</span>
      </div>
      <cr-icon-button class="subpage-arrow" on-click="onEditSiteInListClick_">
      </cr-icon-button>
    </div>
  </template>
</div>

<template is="dom-if" if="[[showEditSitePermissionsDialog_]]" restamp>
  <site-permissions-edit-permissions-dialog delegate="[[delegate]]" extensions="[[extensions]]" site="[[siteToEdit_.site]]" original-site-set="[[siteToEdit_.siteSet]]" on-close="onEditSitePermissionsDialogClose_">
  </site-permissions-edit-permissions-dialog>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SitePermissionsSiteGroupElement extends PolymerElement {
    static get is() {
        return 'site-permissions-site-group';
    }
    static get template() {
        return getTemplate$7();
    }
    static get properties() {
        return {
            data: Object,
            delegate: Object,
            extensions: Array,
            listIndex: {
                type: Number,
                value: -1,
            },
            expanded_: {
                type: Boolean,
                value: false,
            },
            isExpandable_: {
                type: Boolean,
                computed: 'computeIsExpandable_(data.sites)',
            },
            showEditSitePermissionsDialog_: {
                type: Boolean,
                value: false,
            },
            siteToEdit_: {
                type: Object,
                value: null,
            },
        };
    }
    getEtldOrSiteFaviconUrl_() {
        return getFaviconUrl(this.getDisplayUrl_());
    }
    getFaviconUrl_(url) {
        return getFaviconUrl(url);
    }
    computeIsExpandable_() {
        return this.data.sites.length > 1;
    }
    getClassForIndex_() {
        return this.listIndex > 0 ? 'hr' : '';
    }
    getDisplayUrl_() {
        return this.data.sites.length === 1 ?
            this.getSiteWithoutSubdomainSpecifier_(this.data.sites[0].site) :
            this.data.etldPlusOne;
    }
    getEtldOrSiteSubText_() {
        // TODO(crbug.com/1253673): Revisit what to show for this eTLD+1 group's
        // subtext. For now, default to showing no text if there is any mix of sites
        // under the group (i.e. user permitted/restricted/specified by extensions).
        const siteSet = this.data.sites[0].siteSet;
        const isSiteSetConsistent = this.data.sites.every(site => site.siteSet === siteSet);
        if (!isSiteSetConsistent) {
            return '';
        }
        if (siteSet === chrome.developerPrivate.SiteSet.USER_PERMITTED) {
            return loadTimeData.getString('permittedSites');
        }
        return siteSet === chrome.developerPrivate.SiteSet.USER_RESTRICTED ?
            loadTimeData.getString('restrictedSites') :
            this.getExtensionCountText_(this.data.numExtensions);
    }
    getSiteWithoutSubdomainSpecifier_(site) {
        return site.replace(SUBDOMAIN_SPECIFIER, '');
    }
    etldOrFirstSiteMatchesSubdomains_() {
        const site = this.data.sites.length === 1 ? this.data.sites[0].site :
            this.data.etldPlusOne;
        return matchesSubdomains(site);
    }
    matchesSubdomains_(site) {
        return matchesSubdomains(site);
    }
    getSiteSubtext_(siteInfo) {
        if (siteInfo.numExtensions > 0) {
            return this.getExtensionCountText_(siteInfo.numExtensions);
        }
        return loadTimeData.getString(siteInfo.siteSet === chrome.developerPrivate.SiteSet.USER_PERMITTED ?
            'permittedSites' :
            'restrictedSites');
    }
    // TODO(crbug.com/1402795): Use PluralStringProxyImpl to retrieve the
    // extension count text. However, this is non-trivial in this component as
    // some of the strings are nestled inside dom-repeats and plural strings are
    // currently retrieved asynchronously, and would need to be set directly on a
    // property when retrieved.
    getExtensionCountText_(numExtensions) {
        return numExtensions === 1 ?
            loadTimeData.getString('sitePermissionsAllSitesOneExtension') :
            loadTimeData.getStringF('sitePermissionsAllSitesExtensionCount', numExtensions);
    }
    onEditSiteClick_() {
        this.siteToEdit_ = this.data.sites[0];
        this.showEditSitePermissionsDialog_ = true;
    }
    onEditSiteInListClick_(e) {
        this.siteToEdit_ = e.model.item;
        this.showEditSitePermissionsDialog_ = true;
    }
    onEditSitePermissionsDialogClose_() {
        this.showEditSitePermissionsDialog_ = false;
        assert(this.siteToEdit_, 'Site To Edit');
        this.siteToEdit_ = null;
    }
    isUserSpecifiedSite_(siteSet) {
        return siteSet === chrome.developerPrivate.SiteSet.USER_PERMITTED ||
            siteSet === chrome.developerPrivate.SiteSet.USER_RESTRICTED;
    }
}
customElements.define(SitePermissionsSiteGroupElement.is, SitePermissionsSiteGroupElement);

function getTemplate$6() {
    return html `<!--_html_template_start_--><style include="cr-shared-style cr-icons shared-style">#container{box-sizing:border-box}.cr-title-text{margin-inline-start:16px}#site-groups{margin:0 var(--cr-section-padding)}</style>
<div class="page-container" id="container">
  <div class="page-content">
    <div class="page-header">
      <cr-icon-button class="icon-arrow-back no-overlap" id="closeButton" on-click="onCloseButtonClick_">
      </cr-icon-button>
      <span class="cr-title-text">$i18n{sitePermissionsAllSitesPageTitle}</span>
    </div>
    <div id="site-groups">
      <template is="dom-repeat" items="[[siteGroups_]]">
        <site-permissions-site-group data="[[item]]" delegate="[[delegate]]" extensions="[[extensions]]" list-index="[[index]]">
        </site-permissions-site-group>
      </template>
    </div>
  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsSitePermissionsBySiteElement extends PolymerElement {
    static get is() {
        return 'extensions-site-permissions-by-site';
    }
    static get template() {
        return getTemplate$6();
    }
    static get properties() {
        return {
            delegate: Object,
            extensions: Array,
            siteGroups_: {
                type: Array,
                value: () => [],
            },
        };
    }
    ready() {
        super.ready();
        this.refreshUserAndExtensionSites_();
        this.delegate.getUserSiteSettingsChangedTarget().addListener(this.refreshUserAndExtensionSites_.bind(this));
        this.delegate.getItemStateChangedTarget().addListener(this.refreshUserAndExtensionSites_.bind(this));
    }
    refreshUserAndExtensionSites_() {
        this.delegate.getUserAndExtensionSitesByEtld().then(sites => {
            this.siteGroups_ = sites;
        });
    }
    onCloseButtonClick_() {
        navigation.navigateTo({ page: Page.SITE_PERMISSIONS });
    }
}
customElements.define(ExtensionsSitePermissionsBySiteElement.is, ExtensionsSitePermissionsBySiteElement);

function getTemplate$5() {
    return html `<!--_html_template_start_--><style include="cr-shared-style">.body{white-space:pre-wrap;word-break:break-word}</style>

<cr-dialog id="dialog" close-text="$i18n{close}">
  <div class="title" slot="title">[[title_]]</div>
  
  <div class="body" slot="body">[[model.message]]</div>
  <div class="button-container" slot="button-container">
    <cr-button class$="[[getCancelButtonClass_(confirmLabel_)]]" on-click="onCancelClick_" hidden="[[!cancelLabel_]]">
      [[cancelLabel_]]
    </cr-button>
    <cr-button class="action-button" on-click="onConfirmClick_" hidden="[[!confirmLabel_]]">
      [[confirmLabel_]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsPackDialogAlertElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.cancelLabel_ = null;
        /** This needs to be initialized to trigger data-binding. */
        this.confirmLabel_ = '';
    }
    static get is() {
        return 'extensions-pack-dialog-alert';
    }
    static get template() {
        return getTemplate$5();
    }
    static get properties() {
        return {
            model: Object,
            title_: String,
            message_: String,
            cancelLabel_: String,
            confirmLabel_: String,
        };
    }
    get returnValue() {
        return this.$.dialog.getNative().returnValue;
    }
    ready() {
        super.ready();
        // Initialize button label values for initial html binding.
        this.cancelLabel_ = null;
        this.confirmLabel_ = null;
        switch (this.model.status) {
            case chrome.developerPrivate.PackStatus.WARNING:
                this.title_ = loadTimeData.getString('packDialogWarningTitle');
                this.cancelLabel_ = loadTimeData.getString('cancel');
                this.confirmLabel_ = loadTimeData.getString('packDialogProceedAnyway');
                break;
            case chrome.developerPrivate.PackStatus.ERROR:
                this.title_ = loadTimeData.getString('packDialogErrorTitle');
                this.cancelLabel_ = loadTimeData.getString('ok');
                break;
            case chrome.developerPrivate.PackStatus.SUCCESS:
                this.title_ = loadTimeData.getString('packDialogTitle');
                this.cancelLabel_ = loadTimeData.getString('ok');
                break;
            default:
                assertNotReached();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    getCancelButtonClass_() {
        return this.confirmLabel_ ? 'cancel-button' : 'action-button';
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onConfirmClick_() {
        // The confirm button should only be available in WARNING state.
        assert(this.model.status === chrome.developerPrivate.PackStatus.WARNING);
        this.$.dialog.close();
    }
}
customElements.define(ExtensionsPackDialogAlertElement.is, ExtensionsPackDialogAlertElement);

function getTemplate$4() {
    return html `<!--_html_template_start_--><style include="cr-shared-style">cr-input{margin-top:var(--cr-form-field-bottom-spacing);--cr-input-error-display:none}cr-button[slot=suffix]{margin-inline-start:10px}cr-input{margin-bottom:2px}</style>
<cr-dialog id="dialog" close-text="$i18n{close}">
  <div slot="title">$i18n{packDialogTitle}</div>
  <div slot="body">
    <div>$i18n{packDialogContent}</div>
    <cr-input id="rootDir" label="$i18n{packDialogExtensionRoot}" value="{{packDirectory_}}" autofocus>
      <cr-button id="rootDirBrowse" on-click="onRootBrowse_" slot="suffix">
        $i18n{packDialogBrowse}
      </cr-button>
    </cr-input>
    <cr-input id="keyFile" label="$i18n{packDialogKeyFile}" value="{{keyFile_}}">
      <cr-button id="keyFileBrowse" on-click="onKeyBrowse_" slot="suffix">
        $i18n{packDialogBrowse}
      </cr-button>
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onConfirmClick_" disabled="[[!packDirectory_]]">
      $i18n{packDialogConfirm}
    </cr-button>
  </div>
</cr-dialog>
<template is="dom-if" if="[[lastResponse_]]" restamp>
  <extensions-pack-dialog-alert model="[[lastResponse_]]" on-close="onAlertClose_">
  </extensions-pack-dialog-alert>
</template>
<!--_html_template_end_-->`;
}

// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ExtensionsPackDialogElement extends PolymerElement {
    static get is() {
        return 'extensions-pack-dialog';
    }
    static get template() {
        return getTemplate$4();
    }
    static get properties() {
        return {
            delegate: Object,
            packDirectory_: {
                type: String,
                value: '', // Initialized to trigger binding when attached.
            },
            keyFile_: String,
            lastResponse_: Object,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    onRootBrowse_() {
        this.delegate.choosePackRootDirectory().then(path => {
            if (path) {
                this.set('packDirectory_', path);
            }
        });
    }
    onKeyBrowse_() {
        this.delegate.choosePrivateKeyPath().then(path => {
            if (path) {
                this.set('keyFile_', path);
            }
        });
    }
    onCancelClick_() {
        this.$.dialog.cancel();
    }
    onConfirmClick_() {
        this.delegate.packExtension(this.packDirectory_, this.keyFile_, 0)
            .then(response => this.onPackResponse_(response));
    }
    /**
     * @param response The response from request to pack an extension.
     */
    onPackResponse_(response) {
        this.lastResponse_ = response;
    }
    /**
     * In the case that the alert dialog was a success message, the entire
     * pack-dialog should close. Otherwise, we detach the alert by setting
     * lastResponse_ null. Additionally, if the user selected "proceed anyway"
     * in the dialog, we pack the extension again with override flags.
     */
    onAlertClose_(e) {
        e.stopPropagation();
        if (this.lastResponse_.status ===
            chrome.developerPrivate.PackStatus.SUCCESS) {
            this.$.dialog.close();
            return;
        }
        // This is only possible for a warning dialog.
        if (this.shadowRoot.querySelector('extensions-pack-dialog-alert').returnValue ===
            'success') {
            this.delegate
                .packExtension(this.lastResponse_.item_path, this.lastResponse_.pem_path, this.lastResponse_.override_flags)
                .then(response => this.onPackResponse_(response));
        }
        this.lastResponse_ = null;
    }
}
customElements.define(ExtensionsPackDialogElement.is, ExtensionsPackDialogElement);

function getTemplate$3() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style">:host{--border-bottom-height:1px;--button-row-height:calc(2 * var(--padding-top-bottom) +
        var(--cr-button-height));--drawer-transition:0.3s cubic-bezier(.25, .1, .25, 1);--padding-top-bottom:10px}cr-tooltip-icon{margin-inline-end:20px}#devDrawer[expanded] #buttonStrip{top:0}#devDrawer{background:#fff;border-bottom:1px solid var(--google-grey-300);height:0;overflow-x:hidden;overflow-y:auto;position:relative;transition:height var(--drawer-transition)}@media (prefers-color-scheme:dark){#devDrawer{background:0 0;border-bottom-color:var(--cr-separator-color)}}#devDrawer[expanded]{height:calc(var(--button-row-height) + var(--border-bottom-height))}#buttonStrip{margin-inline-end:auto;margin-inline-start:24px;padding:var(--padding-top-bottom) 0;position:absolute;top:calc(var(--button-row-height) * -1);transition:top var(--drawer-transition);user-select:none;width:100%}#buttonStrip cr-button{margin-inline-end:16px}.more-actions{align-items:center;display:flex;justify-content:flex-end;white-space:nowrap}.more-actions span{margin-inline-end:16px}cr-toolbar{--cr-toolbar-center-basis:680px;--cr-toolbar-field-max-width:var(--cr-toolbar-center-basis);--cr-toolbar-field-width:100%;--cr-toolbar-header-white-space:nowrap}</style>
<cr-toolbar id="toolbar" page-name="$i18n{toolbarTitle}" search-prompt="$i18n{search}" clear-label="$i18n{clearSearch}" autofocus menu-label="$i18n{mainMenu}" narrow="{{narrow}}" narrow-threshold="1000" show-menu="[[narrow]]">
  <div class="more-actions">
    <span id="devModeLabel">$i18n{toolbarDevMode}</span>
    <cr-tooltip-icon hidden="[[!shouldDisableDevMode_(
        devModeControlledByPolicy, isChildAccount)]]" tooltip-text="[[getTooltipText_(isChildAccount)]]" icon-class="[[getIcon_(isChildAccount)]]" icon-aria-label="[[getTooltipText_(isChildAccount)]]">
    </cr-tooltip-icon>
    <cr-toggle id="devMode" on-change="onDevModeToggleChange_" disabled="[[shouldDisableDevMode_(
            devModeControlledByPolicy, isChildAccount)]]" checked="[[inDevMode]]" aria-labelledby="devModeLabel">
    </cr-toggle>
  </div>
</cr-toolbar>
<template is="dom-if" if="[[showPackDialog_]]" restamp>
  <extensions-pack-dialog delegate="[[delegate]]" on-close="onPackDialogClose_">
  </extensions-pack-dialog>
</template>
<div id="devDrawer" expanded$="[[expanded_]]">
  <div id="buttonStrip">
    <cr-button hidden$="[[!canLoadUnpacked]]" id="loadUnpacked" on-click="onLoadUnpackedClick_">
      $i18n{toolbarLoadUnpacked}
    </cr-button>
    <cr-button id="packExtensions" on-click="onPackClick_">
      $i18n{toolbarPack}
    </cr-button>
    <cr-button id="updateNow" on-click="onUpdateNowClick_" title="$i18n{toolbarUpdateNowTooltip}">
      $i18n{toolbarUpdateNow}
    </cr-button>

    <cr-button id="kioskExtensions" on-click="onKioskClick_" hidden$="[[!kioskEnabled]]">
      $i18n{manageKioskApp}
    </cr-button>

  </div>
</div>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsToolbarElementBase = I18nMixin(PolymerElement);
class ExtensionsToolbarElement extends ExtensionsToolbarElementBase {
    static get is() {
        return 'extensions-toolbar';
    }
    static get template() {
        return getTemplate$3();
    }
    static get properties() {
        return {
            extensions: Array,
            delegate: Object,
            inDevMode: {
                type: Boolean,
                value: false,
                observer: 'onInDevModeChanged_',
                reflectToAttribute: true,
            },
            devModeControlledByPolicy: Boolean,
            isChildAccount: Boolean,
            // 
            kioskEnabled: Boolean,
            // 
            narrow: {
                type: Boolean,
                notify: true,
            },
            canLoadUnpacked: Boolean,
            expanded_: Boolean,
            showPackDialog_: Boolean,
            /**
             * Prevents initiating update while update is in progress.
             */
            isUpdating_: { type: Boolean, value: false },
        };
    }
    ready() {
        super.ready();
        this.setAttribute('role', 'banner');
    }
    focusSearchInput() {
        this.$.toolbar.getSearchField().showAndFocus();
    }
    isSearchFocused() {
        return this.$.toolbar.getSearchField().isSearchFocused();
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    shouldDisableDevMode_() {
        return this.devModeControlledByPolicy || this.isChildAccount;
    }
    getTooltipText_() {
        return this.i18n(this.isChildAccount ? 'controlledSettingChildRestriction' :
            'controlledSettingPolicy');
    }
    getIcon_() {
        return this.isChildAccount ? 'cr20:kite' : 'cr20:domain';
    }
    onDevModeToggleChange_(e) {
        this.delegate.setProfileInDevMode(e.detail);
        chrome.metricsPrivate.recordUserAction('Options_ToggleDeveloperMode_' + (e.detail ? 'Enabled' : 'Disabled'));
    }
    onInDevModeChanged_(_current, previous) {
        const drawer = this.$.devDrawer;
        if (this.inDevMode) {
            if (drawer.hidden) {
                drawer.hidden = false;
                // Requesting the offsetTop will cause a reflow (to account for
                // hidden).
                drawer.offsetTop;
            }
        }
        else {
            if (previous === undefined) {
                drawer.hidden = true;
                return;
            }
            listenOnce(drawer, 'transitionend', () => {
                if (!this.inDevMode) {
                    drawer.hidden = true;
                }
            });
        }
        this.expanded_ = !this.expanded_;
    }
    onLoadUnpackedClick_() {
        this.delegate.loadUnpacked()
            .then((success) => {
            if (success) {
                const toastManager = getToastManager();
                toastManager.duration = 3000;
                toastManager.show(this.i18n('toolbarLoadUnpackedDone'));
            }
        })
            .catch(loadError => {
            this.fire_('load-error', loadError);
        });
        chrome.metricsPrivate.recordUserAction('Options_LoadUnpackedExtension');
    }
    onPackClick_() {
        chrome.metricsPrivate.recordUserAction('Options_PackExtension');
        this.showPackDialog_ = true;
    }
    onPackDialogClose_() {
        this.showPackDialog_ = false;
        this.$.packExtensions.focus();
    }
    // 
    onKioskClick_() {
        this.fire_('kiosk-tap');
    }
    // 
    onUpdateNowClick_() {
        // If already updating, do not initiate another update.
        if (this.isUpdating_) {
            return;
        }
        this.isUpdating_ = true;
        const toastManager = getToastManager();
        // Keep the toast open indefinitely.
        toastManager.duration = 0;
        toastManager.show(this.i18n('toolbarUpdatingToast'));
        this.delegate.updateAllExtensions(this.extensions)
            .then(() => {
            toastManager.hide();
            toastManager.duration = 3000;
            toastManager.show(this.i18n('toolbarUpdateDone'));
            this.isUpdating_ = false;
        }, loadError => {
            this.fire_('load-error', loadError);
            toastManager.hide();
            this.isUpdating_ = false;
        });
    }
}
customElements.define(ExtensionsToolbarElement.is, ExtensionsToolbarElement);

function getTemplate$2() {
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
const CrCheckboxElementBase = PaperRippleMixin(PolymerElement);
class CrCheckboxElement extends CrCheckboxElementBase {
    static get is() {
        return 'cr-checkbox';
    }
    static get template() {
        return getTemplate$2();
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
    // Overridden from PaperRippleMixin
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

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the "Kiosk" dialog to interact with
 * the browser.
 */
class KioskBrowserProxyImpl {
    initializeKioskAppSettings() {
        return sendWithPromise('initializeKioskAppSettings');
    }
    getKioskAppSettings() {
        return sendWithPromise('getKioskAppSettings');
    }
    addKioskApp(appId) {
        chrome.send('addKioskApp', [appId]);
    }
    disableKioskAutoLaunch(appId) {
        chrome.send('disableKioskAutoLaunch', [appId]);
    }
    enableKioskAutoLaunch(appId) {
        chrome.send('enableKioskAutoLaunch', [appId]);
    }
    removeKioskApp(appId) {
        chrome.send('removeKioskApp', [appId]);
    }
    setDisableBailoutShortcut(disableBailout) {
        chrome.send('setDisableBailoutShortcut', [disableBailout]);
    }
    static getInstance() {
        return instance || (instance = new KioskBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;

function getTemplate$1() {
    return html `<!--_html_template_start_--><style include="cr-shared-style cr-icons">#add-kiosk-app{margin-bottom:10px;margin-top:20px}#add-kiosk-app cr-input{width:350px}#add-kiosk-app cr-button{margin-inline-start:10px}#kiosk-apps-list{border:1px solid var(--paper-grey-300);padding:10px}.list-item{align-items:center;border-bottom:1px solid var(--paper-grey-300);display:flex;justify-content:space-between;padding:5px}.list-item:last-of-type{border-bottom:none}.list-item:hover{background-color:var(--paper-grey-300)}.item-icon{vertical-align:middle;width:25px}.item-controls{visibility:hidden}.list-item:hover .item-controls{visibility:visible}cr-icon-button{margin:0}</style>
<cr-dialog id="dialog" close-text="$i18n{close}" ignore-enter-key>
  <div slot="title">$i18n{manageKioskApp}</div>
  <div slot="body">
    <div id="kiosk-apps-list">
      <template is="dom-repeat" items="[[apps_]]">
        <div class="list-item">
          <div class="item-name">
            <img class="item-icon" src="[[item.iconURL]]" alt="">
            [[item.name]]
            <span hidden="[[!item.autoLaunch]]">
              $i18n{kioskAutoLaunch}
            </span>
          </div>
          <div class="item-controls">
            <cr-button hidden="[[!canEditAutoLaunch_]]" on-click="onAutoLaunchButtonClick_">
              [[getAutoLaunchButtonLabel_(item.autoLaunch,
                  '$i18nPolymer{kioskDisableAutoLaunch}',
                  '$i18nPolymer{kioskEnableAutoLaunch}')]]
            </cr-button>
            <cr-icon-button class="icon-delete-gray" on-click="onDeleteAppClick_"></cr-icon-button>
          </div>
        </div>
      </template>
    </div>
    <div id="add-kiosk-app">
      <cr-input id="addInput" label="$i18n{kioskAddApp}" placeholder="$i18n{kioskAddAppHint}" value="{{addAppInput_}}" invalid="[[errorAppId_]]" on-keydown="clearInputInvalid_" error-message="[[getErrorMessage_(
              '$i18nPolymer{kioskInvalidApp}', errorAppId_)]]">
        <cr-button id="addButton" on-click="onAddAppClick_" disabled="[[!addAppInput_]]" slot="suffix">
          $i18n{add}
        </cr-button>
      </cr-input>
    </div>
    <cr-checkbox disabled="[[!canEditBailout_]]" id="bailout" on-change="onBailoutChanged_" checked="[[bailoutDisabled_]]" hidden="[[!canEditAutoLaunch_]]">
      $i18n{kioskDisableBailout}
    </cr-checkbox>
  </div>
  <div slot="button-container">
    <cr-button class="action-button" on-click="onDoneClick_">
      $i18n{done}
    </cr-button>
  </div>
</cr-dialog>
<cr-dialog id="confirmDialog" close-text="$i18n{close}" ignore-enter-key on-close="stopPropagation_">
  <div slot="title">$i18n{kioskDisableBailoutWarningTitle}</div>
  <div slot="body">$i18n{kioskDisableBailoutWarningBody}</div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onBailoutDialogCancelClick_">
      $i18n{cancel}
    </cr-button>
    <cr-button class="action-button" on-click="onBailoutDialogConfirmClick_">
      $i18n{confirm}
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
}

// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ExtensionsKioskDialogElementBase = WebUiListenerMixin(PolymerElement);
class ExtensionsKioskDialogElement extends ExtensionsKioskDialogElementBase {
    constructor() {
        super(...arguments);
        this.kioskBrowserProxy_ = KioskBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'extensions-kiosk-dialog';
    }
    static get template() {
        return getTemplate$1();
    }
    static get properties() {
        return {
            addAppInput_: {
                type: String,
                value: null,
            },
            apps_: Array,
            bailoutDisabled_: Boolean,
            canEditAutoLaunch_: Boolean,
            canEditBailout_: Boolean,
            errorAppId_: String,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.kioskBrowserProxy_.initializeKioskAppSettings()
            .then(params => {
            this.canEditAutoLaunch_ = params.autoLaunchEnabled;
            return this.kioskBrowserProxy_.getKioskAppSettings();
        })
            .then(this.setSettings_.bind(this));
        this.addWebUiListener('kiosk-app-settings-changed', this.setSettings_.bind(this));
        this.addWebUiListener('kiosk-app-updated', this.updateApp_.bind(this));
        this.addWebUiListener('kiosk-app-error', this.showError_.bind(this));
        this.$.dialog.showModal();
    }
    setSettings_(settings) {
        this.apps_ = settings.apps;
        this.bailoutDisabled_ = settings.disableBailout;
        this.canEditBailout_ = settings.hasAutoLaunchApp;
    }
    updateApp_(app) {
        const index = this.apps_.findIndex(a => a.id === app.id);
        assert(index < this.apps_.length);
        this.set('apps_.' + index, app);
    }
    showError_(appId) {
        this.errorAppId_ = appId;
    }
    getErrorMessage_(errorMessage) {
        return this.errorAppId_ + ' ' + errorMessage;
    }
    onAddAppClick_() {
        assert(this.addAppInput_);
        this.kioskBrowserProxy_.addKioskApp(this.addAppInput_);
        this.addAppInput_ = null;
    }
    clearInputInvalid_() {
        this.errorAppId_ = null;
    }
    onAutoLaunchButtonClick_(event) {
        const app = event.model.item;
        if (app.autoLaunch) { // If the app is originally set to
            // auto-launch.
            this.kioskBrowserProxy_.disableKioskAutoLaunch(app.id);
        }
        else {
            this.kioskBrowserProxy_.enableKioskAutoLaunch(app.id);
        }
    }
    onBailoutChanged_(event) {
        event.preventDefault();
        if (this.$.bailout.checked) {
            this.$.confirmDialog.showModal();
        }
        else {
            this.kioskBrowserProxy_.setDisableBailoutShortcut(false);
            this.$.confirmDialog.close();
        }
    }
    onBailoutDialogCancelClick_() {
        this.$.bailout.checked = false;
        this.$.confirmDialog.cancel();
    }
    onBailoutDialogConfirmClick_() {
        this.kioskBrowserProxy_.setDisableBailoutShortcut(true);
        this.$.confirmDialog.close();
    }
    onDoneClick_() {
        this.$.dialog.close();
    }
    onDeleteAppClick_(event) {
        this.kioskBrowserProxy_.removeKioskApp(event.model.item.id);
    }
    getAutoLaunchButtonLabel_(autoLaunched, disableStr, enableStr) {
        return autoLaunched ? disableStr : enableStr;
    }
    stopPropagation_(e) {
        e.stopPropagation();
    }
}
customElements.define(ExtensionsKioskDialogElement.is, ExtensionsKioskDialogElement);

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

function getTemplate() {
    return html `<!--_html_template_start_--><style include="cr-hidden-style shared-style">:host{color:var(--cr-primary-text-color);display:flex;flex-direction:column;height:100%}#viewManager{flex:1 1 var(--cr-toolbar-field-width);height:100%;position:relative}@media (min-width:1650px){#viewManager:has(extensions-item-list.active){flex-basis:1400px}}@media (max-width:1649px){#viewManager:has(extensions-item-list.active){flex-basis:950px}}extensions-item{display:inline-block}#container{align-items:flex-start;display:flex;flex:1;overflow:overlay;position:relative}#left{height:100%;min-width:var(--sidebar-width);position:sticky;top:0}#left extensions-sidebar{max-height:100%;overflow:auto;overscroll-behavior:contain}#left,#right{flex:1 1 0}</style>
<extensions-drop-overlay drag-enabled="[[inDevMode]]">
</extensions-drop-overlay>
<extensions-toolbar id="toolbar" in-dev-mode="[[inDevMode]]" can-load-unpacked="[[canLoadUnpacked]]" is-child-account="[[isChildAccount_]]" dev-mode-controlled-by-policy="[[devModeControlledByPolicy]]" delegate="[[delegate]]" on-cr-toolbar-menu-click="onMenuButtonClick_" on-search-changed="onFilterChanged_" extensions="[[extensions_]]" narrow="{{narrow_}}" on-kiosk-tap="onKioskClick_" kiosk-enabled="[[kioskEnabled_]]">
</extensions-toolbar>
<template is="dom-if" if="[[showDrawer_]]" restamp>
  <cr-drawer id="drawer" heading="$i18n{toolbarTitle}" align="$i18n{textdirection}" on-close="onDrawerClose_">
    <div slot="body">
      <extensions-sidebar on-close-drawer="onCloseDrawer_" enable-enhanced-site-controls="[[enableEnhancedSiteControls]]">
      </extensions-sidebar>
    </div>
  </cr-drawer>
</template>
<div id="container">
  <div id="left" hidden$="[[narrow_]]">
    <extensions-sidebar on-close-drawer="onCloseDrawer_" enable-enhanced-site-controls="[[enableEnhancedSiteControls]]">
    </extensions-sidebar>
  </div>
  <cr-view-manager id="viewManager" role="main">
    <extensions-item-list id="items-list" delegate="[[delegate]]" in-dev-mode="[[inDevMode]]" filter="[[filter]]" hidden$="[[!didInitPage_]]" slot="view" apps="[[apps_]]" extensions="[[extensions_]]" on-show-install-warnings="onShowInstallWarnings_">
    </extensions-item-list>
    <cr-lazy-render id="details-view">
      <template>
        <extensions-detail-view delegate="[[delegate]]" slot="view" in-dev-mode="[[inDevMode]]" enable-enhanced-site-controls="[[enableEnhancedSiteControls]]" from-activity-log="[[fromActivityLog_]]" show-activity-log="[[showActivityLog]]" incognito-available="[[incognitoAvailable_]]" data="[[detailViewItem_]]">
        </extensions-detail-view>
      </template>
    </cr-lazy-render>
    <cr-lazy-render id="activity-log">
      <template>
        <extensions-activity-log delegate="[[delegate]]" slot="view" extension-info="[[activityLogItem_]]">
        </extensions-activity-log>
      </template>
    </cr-lazy-render>
    <cr-lazy-render id="site-permissions">
      <template>
        <extensions-site-permissions delegate="[[delegate]]" slot="view" extensions="[[extensions_]]" enable-enhanced-site-controls="[[enableEnhancedSiteControls]]">
        </extensions-site-permissions>
      </template>
    </cr-lazy-render>
    <cr-lazy-render id="site-permissions-by-site">
      <template>
        <extensions-site-permissions-by-site delegate="[[delegate]]" slot="view" extensions="[[extensions_]]">
        </extensions-site-permissions-by-site>
      </template>
    </cr-lazy-render>
    <cr-lazy-render id="keyboard-shortcuts">
      <template>
        <extensions-keyboard-shortcuts delegate="[[delegate]]" slot="view" items="[[extensions_]]">
        </extensions-keyboard-shortcuts>
      </template>
    </cr-lazy-render>
    <cr-lazy-render id="error-page">
      <template>
        <extensions-error-page data="[[errorPageItem_]]" slot="view" delegate="[[delegate]]" in-dev-mode="[[inDevMode]]">
        </extensions-error-page>
      </template>
    </cr-lazy-render>
  </cr-view-manager>
  <div id="right" hidden$="[[narrow_]]"></div>
</div>
<template is="dom-if" if="[[showOptionsDialog_]]" restamp>
  <extensions-options-dialog id="options-dialog" on-close="onOptionsDialogClose_">
  </extensions-options-dialog>
</template>
<template is="dom-if" if="[[showLoadErrorDialog_]]" restamp>
  <extensions-load-error id="load-error" delegate="[[delegate]]" on-close="onLoadErrorDialogClose_">
  </extensions-load-error>
</template>

<template is="dom-if" if="[[showKioskDialog_]]" restamp>
  <extensions-kiosk-dialog id="kiosk-dialog" on-close="onKioskDialogClose_">
  </extensions-kiosk-dialog>
</template>

<template is="dom-if" if="[[showInstallWarningsDialog_]]" restamp>
  <extensions-install-warnings-dialog on-close="onInstallWarningsDialogClose_" install-warnings="[[installWarnings_]]">
  </extensions-install-warnings-dialog>
</template>
<cr-toast-manager></cr-toast-manager>
<!--_html_template_end_-->`;
}

// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Compares two extensions to determine which should come first in the list.
 */
function compareExtensions(a, b) {
    function compare(x, y) {
        return x < y ? -1 : (x > y ? 1 : 0);
    }
    function compareLocation(x, y) {
        if (x.location === y.location) {
            return 0;
        }
        if (x.location === chrome.developerPrivate.Location.UNPACKED) {
            return -1;
        }
        if (y.location === chrome.developerPrivate.Location.UNPACKED) {
            return 1;
        }
        return 0;
    }
    return compareLocation(a, b) ||
        compare(a.name.toLowerCase(), b.name.toLowerCase()) ||
        compare(a.id, b.id);
}
// TODO(crbug.com/1450101): Always show a top shadow for the DETAILS, ERRORS and
// SITE_PERMISSIONS_ALL_SITES pages.
const ExtensionsManagerElementBase = CrContainerShadowMixin(PolymerElement);
class ExtensionsManagerElement extends ExtensionsManagerElementBase {
    static get is() {
        return 'extensions-manager';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            canLoadUnpacked: {
                type: Boolean,
                value: false,
            },
            delegate: {
                type: Object,
                value() {
                    return Service.getInstance();
                },
            },
            inDevMode: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('inDevMode'),
            },
            showActivityLog: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('showActivityLog'),
            },
            enableEnhancedSiteControls: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('enableEnhancedSiteControls'),
            },
            devModeControlledByPolicy: {
                type: Boolean,
                value: false,
            },
            isChildAccount_: {
                type: Boolean,
                value: false,
            },
            incognitoAvailable_: {
                type: Boolean,
                value: false,
            },
            filter: {
                type: String,
                value: '',
            },
            /**
             * The item currently displayed in the error subpage. We use a separate
             * item for different pages (rather than a single subpageItem_ property)
             * so that hidden subpages don't update when an item updates. That is, we
             * don't want the details view subpage to update when the item shown in
             * the errors page updates, and vice versa.
             */
            errorPageItem_: Object,
            /**
             * The item currently displayed in the details view subpage. See also
             * errorPageItem_.
             */
            detailViewItem_: Object,
            /**
             * The item that provides some information about the current extension
             * for the activity log view subpage. See also errorPageItem_.
             */
            activityLogItem_: Object,
            extensions_: Array,
            apps_: Array,
            /**
             * Prevents page content from showing before data is first loaded.
             */
            didInitPage_: {
                type: Boolean,
                value: false,
            },
            narrow_: {
                type: Boolean,
                observer: 'onNarrowChanged_',
            },
            showDrawer_: Boolean,
            showLoadErrorDialog_: Boolean,
            showInstallWarningsDialog_: Boolean,
            installWarnings_: Array,
            showOptionsDialog_: Boolean,
            /**
             * Whether the last page the user navigated from was the activity log
             * page.
             */
            fromActivityLog_: Boolean,
            // 
            kioskEnabled_: {
                type: Boolean,
                value: false,
            },
            showKioskDialog_: {
                type: Boolean,
                value: false,
            },
            // 
        };
    }
    constructor() {
        super();
        this.navigationListener_ = null;
        /**
         * The current page being shown. Default to null, and initPage_ will figure
         * out the initial page based on url.
         */
        this.currentPage_ = null;
        /**
         * The ID of the listener on |navigation|. Stored so that the
         * listener can be removed when this element is detached (happens in tests).
         */
        this.navigationListener_ = null;
        /**
         * A promise resolver for any external files waiting for initPage_ to be
         * called after the extensions info has been fetched.
         */
        this.pageInitializedResolver_ = new PromiseResolver();
    }
    ready() {
        super.ready();
        this.addEventListener('load-error', this.onLoadError_);
        this.addEventListener('view-enter-start', this.onViewEnterStart_);
        this.addEventListener('view-exit-start', this.onViewExitStart_);
        this.addEventListener('view-exit-finish', this.onViewExitFinish_);
        const service = Service.getInstance();
        const onProfileStateChanged = (profileInfo) => {
            this.isChildAccount_ = profileInfo.isChildAccount;
            this.incognitoAvailable_ = profileInfo.isIncognitoAvailable;
            this.devModeControlledByPolicy =
                profileInfo.isDeveloperModeControlledByPolicy;
            this.inDevMode = profileInfo.inDeveloperMode;
            this.canLoadUnpacked = profileInfo.canLoadUnpacked;
        };
        service.getProfileStateChangedTarget().addListener(onProfileStateChanged);
        service.getProfileConfiguration().then(onProfileStateChanged);
        service.getExtensionsInfo().then(extensionsAndApps => {
            this.initExtensionsAndApps_(extensionsAndApps);
            this.initPage_();
            service.getItemStateChangedTarget().addListener(this.onItemStateChanged_.bind(this));
        });
        // 
        KioskBrowserProxyImpl.getInstance().initializeKioskAppSettings().then(params => {
            this.kioskEnabled_ = params.kioskEnabled;
        });
        // 
    }
    connectedCallback() {
        super.connectedCallback();
        document.documentElement.classList.remove('loading');
        // https://github.com/microsoft/TypeScript/issues/13569
        document.fonts.load('bold 12px Roboto');
        this.navigationListener_ = navigation.addListener(newPage => {
            this.changePage_(newPage);
        });
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.navigationListener_);
        assert(navigation.removeListener(this.navigationListener_));
        this.navigationListener_ = null;
    }
    /**
     * @return the promise of `pageInitializedResolver_` so tests can wait for the
     * page to be initialized.
     */
    whenPageInitializedForTest() {
        return this.pageInitializedResolver_.promise;
    }
    /**
     * Initializes the page to reflect what's specified in the url so that if
     * the user visits chrome://extensions/?id=..., we land on the proper page.
     */
    initPage_() {
        this.didInitPage_ = true;
        this.changePage_(navigation.getCurrentPage());
        this.pageInitializedResolver_.resolve();
    }
    onNarrowChanged_() {
        const drawer = this.shadowRoot.querySelector('cr-drawer');
        if (!this.narrow_ && drawer && drawer.open) {
            drawer.close();
        }
        // TODO(crbug.com/c/1451985): Handle changing focus if focus is on the
        // sidebar or menu when it's about to disappear when `this.narrow_` changes.
    }
    onItemStateChanged_(eventData) {
        const EventType = chrome.developerPrivate.EventType;
        switch (eventData.event_type) {
            case EventType.VIEW_REGISTERED:
            case EventType.VIEW_UNREGISTERED:
            case EventType.INSTALLED:
            case EventType.LOADED:
            case EventType.UNLOADED:
            case EventType.ERROR_ADDED:
            case EventType.ERRORS_REMOVED:
            case EventType.PREFS_CHANGED:
            case EventType.WARNINGS_CHANGED:
            case EventType.COMMAND_ADDED:
            case EventType.COMMAND_REMOVED:
            case EventType.PERMISSIONS_CHANGED:
            case EventType.SERVICE_WORKER_STARTED:
            case EventType.SERVICE_WORKER_STOPPED:
            case EventType.PINNED_ACTIONS_CHANGED:
                // |extensionInfo| can be undefined in the case of an extension
                // being unloaded right before uninstallation. There's nothing to do
                // here.
                if (!eventData.extensionInfo) {
                    break;
                }
                if (this.delegate.shouldIgnoreUpdate(eventData.extensionInfo.id, eventData.event_type)) {
                    break;
                }
                const listId = this.getListId_(eventData.extensionInfo);
                const currentIndex = this.get(listId).findIndex((item) => item.id === eventData.extensionInfo.id);
                if (currentIndex >= 0) {
                    this.updateItem_(listId, currentIndex, eventData.extensionInfo);
                }
                else {
                    this.addItem_(listId, eventData.extensionInfo);
                }
                break;
            case EventType.UNINSTALLED:
                this.removeItem_(eventData.item_id);
                break;
            case EventType.CONFIGURATION_CHANGED:
                const index = this.getIndexInList_('extensions_', eventData.item_id);
                this.updateItem_('extensions_', index, Object.assign({}, this.getData_(eventData.item_id), {
                    acknowledgeSafetyCheckWarning: eventData.extensionInfo?.acknowledgeSafetyCheckWarning,
                }));
                break;
            default:
                assertNotReached();
        }
    }
    onFilterChanged_(event) {
        if (this.currentPage_.page !== Page.LIST) {
            navigation.navigateTo({ page: Page.LIST });
        }
        this.filter = event.detail;
    }
    onMenuButtonClick_() {
        this.showDrawer_ = true;
        setTimeout(() => {
            this.shadowRoot.querySelector('cr-drawer').openDrawer();
        }, 0);
    }
    /**
     * @return The ID of the list that the item belongs in.
     */
    getListId_(item) {
        const ExtensionType = chrome.developerPrivate.ExtensionType;
        switch (item.type) {
            case ExtensionType.HOSTED_APP:
            case ExtensionType.LEGACY_PACKAGED_APP:
            case ExtensionType.PLATFORM_APP:
                return 'apps_';
            case ExtensionType.EXTENSION:
            case ExtensionType.SHARED_MODULE:
                return 'extensions_';
            case ExtensionType.THEME:
                assertNotReached('Don\'t send themes to the chrome://extensions page');
            default:
                assertNotReached();
        }
    }
    /**
     * @param listId The list to look for the item in.
     * @param itemId The id of the item to look for.
     * @return The index of the item in the list, or -1 if not found.
     */
    getIndexInList_(listId, itemId) {
        return this.get(listId).findIndex(function (item) {
            return item.id === itemId;
        });
    }
    getData_(id) {
        return this.extensions_[this.getIndexInList_('extensions_', id)] ||
            this.apps_[this.getIndexInList_('apps_', id)];
    }
    /**
     * Categorizes |extensionsAndApps| to apps and extensions and initializes
     * those lists.
     */
    initExtensionsAndApps_(extensionsAndApps) {
        extensionsAndApps.sort(compareExtensions);
        const apps = [];
        const extensions = [];
        for (const i of extensionsAndApps) {
            const list = this.getListId_(i) === 'apps_' ? apps : extensions;
            list.push(i);
        }
        this.apps_ = apps;
        this.extensions_ = extensions;
    }
    /**
     * Creates and adds a new extensions-item element to the list, inserting it
     * into its sorted position in the relevant section.
     * @param item The extension the new element is representing.
     */
    addItem_(listId, item) {
        // We should never try and add an existing item.
        assert(this.getIndexInList_(listId, item.id) === -1);
        let insertBeforeChild = this.get(listId).findIndex(function (listEl) {
            return compareExtensions(listEl, item) > 0;
        });
        if (insertBeforeChild === -1) {
            insertBeforeChild = this.get(listId).length;
        }
        this.splice(listId, insertBeforeChild, 0, item);
    }
    /**
     * @param item The data for the item to update.
     */
    updateItem_(listId, index, item) {
        // We should never try and update a non-existent item.
        assert(index >= 0);
        this.set([listId, index], item);
        // Update the subpage if it is open and displaying the item. If it's not
        // open, we don't update the data even if it's displaying that item. We'll
        // set the item correctly before opening the page. It's a little weird
        // that the DOM will have stale data, but there's no point in causing the
        // extra work.
        if (this.detailViewItem_ && this.detailViewItem_.id === item.id &&
            this.currentPage_.page === Page.DETAILS) {
            this.detailViewItem_ = item;
        }
        else if (this.errorPageItem_ && this.errorPageItem_.id === item.id &&
            this.currentPage_.page === Page.ERRORS) {
            this.errorPageItem_ = item;
        }
        else if (this.activityLogItem_ && this.activityLogItem_.id === item.id &&
            this.currentPage_.page === Page.ACTIVITY_LOG) {
            this.activityLogItem_ = item;
        }
    }
    // When an item is removed while on the 'item list' page, move focus to the
    // next item in the list with `listId` if available. If no items are in that
    // list, focus to the search bar as a fallback.
    // This is a fix for crbug.com/1416324 which causes focus to linger on a
    // deleted element, which is then read by the screen reader.
    focusAfterItemRemoved_(listId, index) {
        // A timeout is used so elements are focused after the DOM is updated.
        setTimeout(() => {
            if (this.get(listId).length) {
                const focusIndex = Math.min(this.get(listId).length - 1, index);
                const itemToFocusId = this.get([listId, focusIndex]).id;
                // In the rare case where the item cannot be focused despite existing,
                // focus the search bar.
                if (!this.$['items-list'].focusItemButton(itemToFocusId)) {
                    this.$.toolbar.focusSearchInput();
                }
            }
            else {
                this.$.toolbar.focusSearchInput();
            }
        }, 0);
    }
    /**
     * @param itemId The id of item to remove.
     */
    removeItem_(itemId) {
        // Search for the item to be deleted in `extensions_`.
        let listId = 'extensions_';
        let index = this.getIndexInList_(listId, itemId);
        if (index === -1) {
            // If not in `extensions_` it must be in `apps_`.
            listId = 'apps_';
            index = this.getIndexInList_(listId, itemId);
        }
        // We should never try and remove a non-existent item.
        assert(index >= 0);
        this.splice(listId, index, 1);
        if (this.currentPage_.page === Page.LIST) {
            this.focusAfterItemRemoved_(listId, index);
        }
        else if ((this.currentPage_.page === Page.ACTIVITY_LOG ||
            this.currentPage_.page === Page.DETAILS ||
            this.currentPage_.page === Page.ERRORS) &&
            this.currentPage_.extensionId === itemId) {
            // Leave the details page (the 'item list' page is a fine choice).
            navigation.replaceWith({ page: Page.LIST });
        }
    }
    onLoadError_(e) {
        this.showLoadErrorDialog_ = true;
        setTimeout(() => {
            const dialog = this.shadowRoot.querySelector('extensions-load-error');
            dialog.loadError = e.detail;
            dialog.show();
        }, 0);
    }
    /**
     * Changes the active page selection.
     */
    changePage_(newPage) {
        this.onCloseDrawer_();
        const optionsDialog = this.shadowRoot.querySelector('extensions-options-dialog');
        if (optionsDialog && optionsDialog.open) {
            this.showOptionsDialog_ = false;
        }
        const fromPage = this.currentPage_ ? this.currentPage_.page : null;
        const toPage = newPage.page;
        let data;
        let activityLogPlaceholder;
        if (toPage === Page.LIST) {
            // Dismiss menu notifications for extensions module of Safety Hub.
            this.delegate.dismissSafetyHubExtensionsMenuNotification();
        }
        if (newPage.extensionId) {
            data = this.getData_(newPage.extensionId);
            if (!data) {
                // Allow the user to navigate to the activity log page even if the
                // extension ID is not valid. This enables the use case of seeing an
                // extension's install-time activities by navigating to an extension's
                // activity log page, then installing the extension.
                if (this.showActivityLog && toPage === Page.ACTIVITY_LOG) {
                    activityLogPlaceholder = {
                        id: newPage.extensionId,
                        isPlaceholder: true,
                    };
                }
                else {
                    // Attempting to view an invalid (removed?) app or extension ID.
                    navigation.replaceWith({ page: Page.LIST });
                    return;
                }
            }
        }
        if (toPage === Page.DETAILS) {
            this.detailViewItem_ = data;
        }
        else if (toPage === Page.ERRORS) {
            this.errorPageItem_ = data;
        }
        else if (toPage === Page.ACTIVITY_LOG) {
            if (!this.showActivityLog) {
                // Redirect back to the details page if we try to view the
                // activity log of an extension but the flag is not set.
                navigation.replaceWith({ page: Page.DETAILS, extensionId: newPage.extensionId });
                return;
            }
            this.activityLogItem_ = data || activityLogPlaceholder;
        }
        else if ((toPage === Page.SITE_PERMISSIONS ||
            toPage === Page.SITE_PERMISSIONS_ALL_SITES) &&
            !this.enableEnhancedSiteControls) {
            // Redirect back to the main page if we try to view the new site
            // permissions page but the flag is not set.
            navigation.replaceWith({ page: Page.LIST });
            return;
        }
        if (fromPage !== toPage) {
            this.$.viewManager.switchView(toPage, 'no-animation', 'no-animation');
        }
        if (newPage.subpage) {
            assert(newPage.subpage === Dialog.OPTIONS);
            assert(newPage.extensionId);
            this.showOptionsDialog_ = true;
            setTimeout(() => {
                this.shadowRoot.querySelector('extensions-options-dialog').show(data);
            }, 0);
        }
        document.title = toPage === Page.DETAILS ?
            `${loadTimeData.getString('title')} - ${this.detailViewItem_.name}` :
            loadTimeData.getString('title');
        this.currentPage_ = newPage;
    }
    /**
     * This method detaches the drawer dialog completely. Should only be
     * triggered by the dialog's 'close' event.
     */
    onDrawerClose_() {
        this.showDrawer_ = false;
    }
    /**
     * This method animates the closing of the drawer.
     */
    onCloseDrawer_() {
        const drawer = this.shadowRoot.querySelector('cr-drawer');
        if (drawer && drawer.open) {
            drawer.close();
        }
    }
    onLoadErrorDialogClose_() {
        this.showLoadErrorDialog_ = false;
    }
    onOptionsDialogClose_() {
        this.showOptionsDialog_ = false;
        this.shadowRoot.querySelector('extensions-detail-view').focusOptionsButton();
    }
    onViewEnterStart_() {
        this.fromActivityLog_ = false;
    }
    onViewExitStart_(e) {
        const viewType = e.composedPath()[0].tagName;
        this.fromActivityLog_ = viewType === 'EXTENSIONS-ACTIVITY-LOG';
    }
    onViewExitFinish_(e) {
        const viewType = e.composedPath()[0].tagName;
        if (viewType === 'EXTENSIONS-ITEM-LIST' ||
            viewType === 'EXTENSIONS-KEYBOARD-SHORTCUTS' ||
            viewType === 'EXTENSIONS-ACTIVITY-LOG' ||
            viewType === 'EXTENSIONS-SITE-PERMISSIONS' ||
            viewType === 'EXTENSIONS-SITE-PERMISSIONS-BY-SITE') {
            return;
        }
        const extensionId = e.composedPath()[0].data.id;
        const list = this.shadowRoot.querySelector('extensions-item-list');
        const button = viewType === 'EXTENSIONS-DETAIL-VIEW' ?
            list.getDetailsButton(extensionId) :
            list.getErrorsButton(extensionId);
        // The button will not exist, when returning from a details page
        // because the corresponding extension/app was deleted.
        if (button) {
            button.focus();
        }
    }
    onShowInstallWarnings_(e) {
        // Leverage Polymer data bindings instead of just assigning the
        // installWarnings on the dialog since the dialog hasn't been stamped
        // in the DOM yet.
        this.installWarnings_ = e.detail;
        this.showInstallWarningsDialog_ = true;
    }
    onInstallWarningsDialogClose_() {
        this.installWarnings_ = null;
        this.showInstallWarningsDialog_ = false;
    }
    // 
    onKioskClick_() {
        this.showKioskDialog_ = true;
    }
    onKioskDialogClose_() {
        this.showKioskDialog_ = false;
    }
}
customElements.define(ExtensionsManagerElement.is, ExtensionsManagerElement);

export { ARG_URL_PLACEHOLDER, ActivityLogHistoryElement, ActivityLogHistoryItemElement, ActivityLogPageState, ActivityLogStreamElement, ActivityLogStreamItemElement, CrCheckboxElement, Dialog, ExtensionsActivityLogElement, ExtensionsCodeSectionElement, ExtensionsDetailViewElement, ExtensionsErrorPageElement, ExtensionsHatsBrowserProxyImpl, ExtensionsHostPermissionsToggleListElement, ExtensionsItemElement, ExtensionsItemListElement, ExtensionsKeyboardShortcutsElement, ExtensionsKioskDialogElement, ExtensionsLoadErrorElement, ExtensionsManagerElement, ExtensionsOptionsDialogElement, ExtensionsPackDialogAlertElement, ExtensionsPackDialogElement, ExtensionsRestrictedSitesDialogElement, ExtensionsReviewPanelElement, ExtensionsRuntimeHostPermissionsElement, ExtensionsRuntimeHostsDialogElement, ExtensionsShortcutInputElement, ExtensionsSidebarElement, ExtensionsSitePermissionsBySiteElement, ExtensionsSitePermissionsElement, ExtensionsSitePermissionsListElement, ExtensionsToggleRowElement, ExtensionsToolbarElement, Key, KioskBrowserProxyImpl, NavigationHelper, OptionsDialogMaxHeight, OptionsDialogMinWidth, Page, PluralStringProxyImpl, Service, SitePermissionsEditPermissionsDialogElement, SitePermissionsEditUrlDialogElement, SitePermissionsSiteGroupElement, SiteSettingsMixin, UserAction, getFaviconUrl, getMatchingUserSpecifiedSites, getPatternFromSite, getSitePermissionsPatternFromSite, getToastManager, isValidKeyCode, keystrokeToString, navigation };
//# sourceMappingURL=extensions.rollup.js.map
